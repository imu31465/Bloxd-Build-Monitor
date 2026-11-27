export const id = 15;
export const ids = [15];
export const modules = {
  38361: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Tr,
      e: () => yr,
      h: () => Br,
      i: () => Ur
    });
    var Zr = Qr(1155),
      Wr = Qr.n(Zr),
      ar = Qr(72),
      jr = Qr(92),
      Ir = Qr(1497),
      fr = Qr(1576),
      Er = Qr(1489),
      pr = Qr(1330),
      xr = Qr(1251),
      mr = Qr(38363),
      Nr = Qr(1338);

    function Ur(rr) {
      const [Sr, Qr] = (0, ar.useState)((() => (0, mr.m)(rr)));
      return (0, ar.useEffect)((() => (Qr((0, mr.m)(rr)), (0, mr.I)((() => {
        Qr((0, mr.m)(rr))
      })))), [rr]), Sr
    }

    function tr(rr, Sr) {
      "function" === typeof rr ? rr(Sr) : rr && (rr.current = Sr)
    }

    function hr(rr) {
      let {
        tutorial: Sr,
        step: Qr,
        enabled: Zr = !0
      } = rr;
      const Wr = Ur(Sr);
      return Zr && Wr === Qr
    }

    function zr(rr, Sr) {
      const Qr = (0, mr.o)(rr),
        Zr = Qr.indexOf(Sr);
      return !Qr.slice(Zr + 1).some((Sr => (0, mr.y)(rr, Sr)))
    }

    function Yr(rr, Sr, Qr, Zr) {
      let {
        tutorial: Wr,
        step: ar,
        waitForClick: jr = !1,
        onPrevious: Ir
      } = rr;
      const fr = Sr && (0, mr.u)(Wr, ar),
        Er = Sr && !zr(Wr, ar),
        xr = jr ? Zr : Qr;
      let Nr = null;
      fr ? Nr = () => {
        null === Ir || void 0 === Ir || Ir(), (0, mr.s)(Wr, ar)
      } : Er && (Nr = () => {
        (0, mr.l)(Wr)
      }), (0, pr.u)("popup", null !== xr && void 0 !== xr ? xr : Qr, Nr, Sr && null !== xr, null, fr ? void 0 : "controller:menusSkipTutorial")
    }

    function nr(rr) {
      let {
        tutorial: Sr,
        step: Qr,
        text: Zr,
        waitForClick: Wr = !1,
        onPrevious: ar
      } = rr;
      const {
        t: jr
      } = (0, xr.E)(), Ir = zr(Sr, Qr);
      return (0, Nr.jsxs)(Nr.Fragment, {
        children: [(0, Nr.jsx)("div", {
          className: "TutorialStepText",
          children: Zr
        }), (0, Nr.jsxs)("div", {
          className: "TutorialStepButtons",
          children: [(0, mr.u)(Sr, Qr) && (0, Nr.jsx)(fr.k, {
            className: "TutorialStepButton",
            onClick: () => {
              null === ar || void 0 === ar || ar(), (0, mr.s)(Sr, Qr)
            },
            children: jr("tutorial:back")
          }), !Wr && (0, Nr.jsx)(fr.h, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, mr.i)(Qr)
            },
            padDefaultFocus: !0,
            children: jr(Ir ? "tutorial:done" : "tutorial:next")
          }), !Ir && (0, Nr.jsx)(fr.k, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, mr.l)(Sr)
            },
            children: jr("tutorial:skip")
          })]
        })]
      })
    }
    const er = 6;

    function Kr(rr) {
      let {
        rect: Sr,
        margin: Qr
      } = rr;
      const Zr = Math.max(0, Sr.top - Qr),
        Wr = Sr.bottom + Qr,
        ar = Math.max(0, Sr.left - Qr),
        jr = Sr.right + Qr;
      return (0, Nr.jsxs)(Nr.Fragment, {
        children: [(0, Nr.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: 0,
            left: 0,
            right: 0,
            height: Zr
          }
        }), (0, Nr.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: Wr,
            left: 0,
            right: 0,
            bottom: 0
          }
        }), (0, Nr.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: Zr,
            left: 0,
            width: ar,
            height: Wr - Zr
          }
        }), (0, Nr.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: Zr,
            left: jr,
            right: 0,
            height: Wr - Zr
          }
        })]
      })
    }

    function yr(rr) {
      let {
        target: Sr,
        placement: Qr,
        boxRef: Zr,
        className: fr,
        spotlight: pr = !0,
        spotlightMargin: xr = er,
        children: mr
      } = rr;
      const {
        getArrowProps: Ur,
        getTooltipProps: tr,
        setTooltipRef: hr,
        setTriggerRef: zr,
        update: Yr
      } = (0, Ir.d)({
        placement: Qr,
        trigger: null,
        visible: !0,
        interactive: !0,
        closeOnOutsideClick: !1,
        offset: [0, xr]
      });
      (0, ar.useLayoutEffect)((() => {
        zr(Sr)
      }), [Sr, zr]);
      const nr = function(rr, Sr) {
        const [Qr, Zr] = (0, ar.useState)(null);
        return (0, ar.useEffect)((() => {
          if (!Sr || !rr) return void Zr(null);
          let Qr = 0,
            Wr = null;
          const ar = () => {
            const Sr = rr.getBoundingClientRect();
            Wr && Sr.left === Wr.left && Sr.top === Wr.top && Sr.width === Wr.width && Sr.height === Wr.height || (Wr = Sr, Zr(Sr)), Qr = requestAnimationFrame(ar)
          };
          return ar(), () => {
            cancelAnimationFrame(Qr)
          }
        }), [rr, Sr]), Qr
      }(Sr, pr);
      (0, ar.useEffect)((() => {
        null === Yr || void 0 === Yr || Yr()
      }), [nr, Yr]), (0, ar.useEffect)((() => {
        if (pr || !Sr || !Yr) return;
        const rr = new ResizeObserver((() => {
          Yr()
        }));
        return rr.observe(Sr), Sr.parentElement && rr.observe(Sr.parentElement), () => {
          rr.disconnect()
        }
      }), [Sr, pr, Yr]), (0, ar.useEffect)((() => {
        pr && (null === Sr || void 0 === Sr || Sr.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        }))
      }), [Sr, pr]);
      const yr = (0, ar.useCallback)((rr => {
        hr(rr), Zr && (Zr.current = rr)
      }), [hr, Zr]);
      return (0, jr.createPortal)((0, Nr.jsxs)(Nr.Fragment, {
        children: [nr && (0, Nr.jsx)(Kr, {
          rect: nr,
          margin: xr
        }), (0, Nr.jsxs)("div", {
          ref: yr,
          ...tr({
            className: Wr()("tooltip-container SmallTextLight TutorialStep", fr)
          }),
          children: [mr, (0, Nr.jsx)("div", {
            ...Ur({
              className: "tooltip-arrow"
            })
          })]
        })]
      }), (0, Er.h)())
    }
    const Br = (0, ar.forwardRef)((function(rr, Sr) {
      let {
        placement: Qr = "right",
        children: Zr,
        ...Wr
      } = rr;
      const jr = hr(Wr),
        Ir = (0, ar.useRef)(null),
        fr = (0, ar.useRef)(null);
      Yr(Wr, jr, Ir, fr);
      const [Er, pr] = (0, ar.useState)(null), xr = Zr.ref, mr = (0, ar.useCallback)((rr => {
        fr.current = rr, pr(rr), tr(Sr, rr), tr(xr, rr)
      }), [Sr, xr]);
      return (0, Nr.jsxs)(Nr.Fragment, {
        children: [(0, ar.cloneElement)(Zr, {
          ref: mr
        }), jr && (0, Nr.jsx)(yr, {
          target: Er,
          placement: Qr,
          boxRef: Ir,
          children: (0, Nr.jsx)(nr, {
            ...Wr
          })
        })]
      })
    }));

    function Tr(rr) {
      const Sr = hr(rr),
        Qr = (0, ar.useRef)(null);
      return Yr(rr, Sr, Qr, null), Sr ? (0, jr.createPortal)((0, Nr.jsx)("div", {
        className: "TutorialCentreBackdrop",
        children: (0, Nr.jsx)("div", {
          ref: Qr,
          className: "tooltip-container SmallTextLight TutorialStep TutorialCentreStep",
          children: (0, Nr.jsx)(nr, {
            ...rr
          })
        })
      }), (0, Er.h)()) : null
    }
  },
  40092: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => jr
    });
    const Zr = 4,
      Wr = 12e3,
      ar = 1e3;
    class jr {
      constructor() {
        let {
          limit: rr = Zr,
          windowMs: Sr = Wr,
          spacingMs: Qr = ar,
          now: jr = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = rr, this.windowMs = Sr, this.spacingMs = Qr, this.now = jr
      }
      isPacing() {
        return !this.canSendPriority() || this.isPriorityWaiting()
      }
      canSendPriority() {
        return this.prune(), this.sent.length < this.limit && this.now() - this.lastSentAt >= this.spacingMs
      }
      tryStart() {
        for (const rr of this.priority) rr.flush();
        return !this.isPacing() && (this.start(), !0)
      }
      start() {
        this.prune();
        const rr = this.now();
        this.sent.push(rr), this.lastSentAt = rr, this.schedule(), this.notify()
      }
      addPriority(rr) {
        return this.priority.add(rr), () => {
          this.priority.delete(rr)
        }
      }
      subscribe(rr) {
        return this.listeners.add(rr), () => {
          this.listeners.delete(rr)
        }
      }
      dispose() {
        this.clearTimer(), this.sent = [], this.listeners.clear(), this.priority.clear()
      }
      isPriorityWaiting() {
        for (const rr of this.priority)
          if (rr.waiting()) return !0;
        return !1
      }
      prune() {
        const rr = this.now() - this.windowMs;
        for (; this.sent.length > 0 && this.sent[0] <= rr;) this.sent.shift()
      }
      schedule() {
        this.clearTimer();
        const rr = this.now(),
          Sr = this.lastSentAt + this.spacingMs,
          Qr = Math.min(Sr > rr ? Sr : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        Qr !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, Qr - rr)))
      }
      notify() {
        for (const rr of this.listeners) rr()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  40059: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Zr
    });
    class Zr {
      constructor(rr, Sr, Qr) {
        this.Jp = rr, this.beforeOpen = Sr, this.afterClose = Qr, this.open = !1, this.vU = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.vU && (this.open = !0, this.beforeOpen(this), this.emit())
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
      closePanel(rr) {
        this.open = !1, this.onClosed(), this.emit(), this.afterClose(rr)
      }
      onClosed() {}
      dispose() {
        this.open = !1, this.emit(), this.vU = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.vU || (this.snapshot = this.buildSnapshot(), this.Jp(this.snapshot))
      }
    }
  },
  40888: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      default: () => pQ
    });
    var Zr = Qr(72);
    var Wr = Qr(26),
      ar = Qr(2071),
      jr = Qr(34),
      Ir = Qr(3425),
      fr = Qr(1155),
      Er = Qr.n(fr),
      pr = Qr(1573),
      xr = Qr(1251),
      mr = Qr(5297),
      Nr = Qr(1472),
      Ur = Qr(1576),
      tr = Qr(2075),
      hr = Qr(1489),
      zr = Qr(2057),
      Yr = Qr(2128),
      nr = Qr(215);
    const er = Qr(40893),
      Kr = Object.fromEntries(er.keys().map((rr => [rr.replace(/^\.\/(.*)\.webp$/, "$1"), er(rr)]))),
      yr = new Set;

    function Br(rr, Sr) {
      const Qr = Sr ? rr : `${rr}-uncaught`,
        Zr = (0, nr.b)(Kr, Qr);
      return void 0 !== Zr || yr.has(Qr) || (yr.add(Qr), console.warn(`Containment Breach has no mugshot ${Qr}: run tools/harnessCutouts/ContainmentMugshotCapture.ts`)), Zr
    }
    var Tr = Qr(1338);
    const vr = "containmentBreach",
      Or = "Gold Coin";

    function Lr(rr) {
      let {
        open: Sr,
        onDismiss: Qr,
        title: Zr,
        className: Wr,
        decor: ar,
        headerExtra: jr,
        status: Ir,
        statusRefused: fr = !1,
        children: pr
      } = rr;
      const xr = `${Wr}Title`;
      return (0, Tr.jsx)(mr.b, {
        show: Sr,
        close: Qr,
        togglePointerLock: !1,
        className: "ContainmentBoardOverlay",
        children: (0, Tr.jsxs)("section", {
          className: Er()("ContainmentBoardPanel", Wr),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": xr,
          children: [ar && (0, Tr.jsx)("div", {
            className: "BoardDecor",
            "aria-hidden": "true",
            children: ar
          }), (0, Tr.jsxs)("header", {
            className: "BoardHeader",
            children: [(0, Tr.jsx)("h2", {
              id: xr,
              className: "VisuallyHidden",
              children: Zr
            }), jr, (0, Tr.jsx)(Ur.l, {
              onClick: Qr
            })]
          }), (0, Tr.jsx)("div", {
            className: "BoardBody",
            children: pr
          }), void 0 !== Ir && (0, Tr.jsx)("footer", {
            className: Er()("BoardStatus", {
              Refused: fr
            }),
            children: Ir
          })]
        })
      })
    }

    function lr(rr) {
      let {
        itemName: Sr
      } = rr;
      return (0, Tr.jsx)(tr.d, {
        itemName: Sr,
        amount: 0
      })
    }

    function Xr(rr) {
      let {
        anomalyId: Sr,
        caught: Qr
      } = rr;
      const Wr = (0, Zr.useRef)(null);
      return (0, Nr.b)(Wr, !Qr), (0, Tr.jsx)("span", {
        ref: Wr,
        className: Er()("BoardMugshot", {
          Uncaught: !Qr
        }),
        children: (0, Tr.jsx)("img", {
          src: Br(Sr, Qr),
          alt: "",
          draggable: !1
        })
      })
    }

    function Pr(rr) {
      let {
        itemName: Sr,
        amount: Qr,
        wI: Zr,
        inTile: Wr = !1
      } = rr;
      return (0, Tr.jsx)(hr.f, {
        delayShow: 200,
        hoverOnly: Wr,
        placement: "top",
        tooltipClassName: "BoardChipTooltipBox",
        tooltipInner: (0, Tr.jsx)(qr, {
          itemName: Sr,
          amount: Qr,
          wI: Zr
        }),
        children: (0, Tr.jsxs)("span", {
          className: Er()("BoardChip", {
            Short: void 0 !== Zr && Zr < Qr
          }),
          children: [(0, Tr.jsx)("span", {
            className: "BoardChipIcon",
            children: (0, Tr.jsx)(lr, {
              itemName: Sr
            })
          }), Qr.toLocaleString()]
        })
      })
    }
    const Hr = /^(.*?)\s*Salvaged from (?:an? )?(.+?)\.?$/;

    function qr(rr) {
      var Sr;
      let {
        itemName: Qr,
        amount: Zr,
        wI: Wr
      } = rr;
      const {
        t: ar
      } = (0, xr.E)(), jr = (0, Yr.f)("itemInfo", (rr => rr[Qr])), {
        lore: Ir,
        droppedBy: fr
      } = function(rr) {
        if ("string" !== typeof rr) return {
          lore: rr,
          droppedBy: null
        };
        const Sr = Hr.exec(rr);
        return null === Sr ? {
          lore: rr,
          droppedBy: null
        } : {
          lore: "" === Sr[1] ? void 0 : Sr[1],
          droppedBy: Sr[2]
        }
      }(null === jr || void 0 === jr ? void 0 : jr.description);
      return (0, Tr.jsxs)("div", {
        className: "BoardChipTooltip",
        children: [(0, Tr.jsxs)("div", {
          className: "BoardChipTooltipHeader",
          children: [(0, Tr.jsx)("span", {
            className: "BoardChipTooltipIcon",
            children: (0, Tr.jsx)(lr, {
              itemName: Qr
            })
          }), (0, Tr.jsx)(zr.c, {
            text: null !== (Sr = null === jr || void 0 === jr ? void 0 : jr.displayName) && void 0 !== Sr ? Sr : Qr,
            className: "BoardChipTooltipName"
          })]
        }), (void 0 !== Ir || null !== fr) && (0, Tr.jsxs)("div", {
          className: "BoardChipTooltipBody",
          children: [void 0 !== Ir && (0, Tr.jsx)(zr.c, {
            text: Ir,
            className: "BoardChipTooltipDescription"
          }), null !== fr && (0, Tr.jsxs)("span", {
            className: "BoardChipTooltipSource",
            children: [(0, Tr.jsx)("span", {
              className: "BoardChipTooltipLabel",
              children: ar(`${vr}:chipDroppedBy`)
            }), fr]
          })]
        }), void 0 !== Wr && (0, Tr.jsxs)("div", {
          className: Er()("BoardChipTooltipHeld", {
            Short: Wr < Zr
          }),
          children: [(0, Tr.jsx)("span", {
            className: "BoardChipTooltipLabel",
            children: ar(`${vr}:chipYouHave`)
          }), (0, Tr.jsxs)("span", {
            className: "BoardChipTooltipCount",
            children: [(0, Tr.jsx)("span", {
              className: "BoardChipTooltipHeldAmount",
              children: Wr.toLocaleString()
            }), ` / ${Zr.toLocaleString()}`]
          }), (0, Tr.jsx)("span", {
            className: "BoardChipTooltipMeter",
            children: (0, Tr.jsx)("span", {
              style: {
                width: (Zr > 0 ? 100 * Math.min(1, Wr / Zr) : 100) + "%"
              }
            })
          })]
        })]
      })
    }

    function Rr(rr) {
      let {
        icon: Sr,
        name: Qr,
        selected: Zr,
        locked: Wr,
        className: ar,
        buttonRef: jr,
        onSelect: Ir,
        children: fr
      } = rr;
      return (0, Tr.jsxs)("button", {
        ref: jr,
        type: "button",
        className: Er()("BoardTile", ar, {
          Selected: Zr,
          Locked: Wr
        }),
        onClick: Ir,
        children: [(0, Tr.jsx)("span", {
          className: "BoardTileIcon",
          children: Sr
        }), (0, Tr.jsx)("span", {
          className: "BoardTileName",
          children: Qr
        }), fr]
      })
    }

    function gr(rr) {
      let {
        icon: Sr,
        name: Qr,
        children: Zr
      } = rr;
      return (0, Tr.jsxs)("header", {
        className: "BoardDetailHeader",
        children: [(0, Tr.jsx)("span", {
          className: "BoardDetailIcon",
          children: Sr
        }), (0, Tr.jsxs)("div", {
          className: "BoardDetailHeading",
          children: [(0, Tr.jsx)("h3", {
            children: Qr
          }), (0, Tr.jsx)("span", {
            className: "BoardDetailStatus",
            children: Zr
          })]
        })]
      })
    }

    function Cr(rr) {
      let {
        coins: Sr,
        children: Qr
      } = rr;
      return (0, Tr.jsxs)("div", {
        className: "BoardWallet",
        children: [(0, Tr.jsx)(Pr, {
          itemName: Or,
          amount: Sr
        }), Qr]
      })
    }
    var Mr = Qr(40059);
    const Gr = "containmentCodexView";
    class kr extends Mr.c {
      constructor() {
        super(...arguments), this.entries = [], this.selectedId = "", this.snapshot = this.buildSnapshot(), this.select = rr => {
          this.selectedId = rr, this.emit()
        }
      }
      vx(rr) {
        this.entries = rr.codexEntries, this.selectedId = this.entries[0].codexEntryId, this.showOrRefresh()
      }
      buildSnapshot() {
        return {
          open: this.open,
          entries: this.entries,
          selectedId: this.selectedId
        }
      }
    }
    const Ar = {
        codexAnyDifficulty: `${vr}:codexNeedsAny`,
        codexNormalOnly: `${vr}:codexNeedsNormal`,
        codexHardOnly: `${vr}:codexNeedsHard`
      },
      Vr = {
        codexContained: "Contained",
        codexEncountered: "Sighted",
        codexUnidentified: "Unknown"
      },
      ir = {
        codexContained: `${vr}:codexContainedBadge`,
        codexEncountered: `${vr}:codexEncounteredBadge`,
        codexUnidentified: `${vr}:codexUnidentifiedBadge`
      },
      wr = ["94%", "81%", "88%", "46%", "72%"];

    function cr(rr) {
      let {
        entry: Sr
      } = rr;
      const {
        t: Qr
      } = (0, xr.E)();
      return (0, Tr.jsx)("span", {
        className: Er()("BoardBadge", Vr[Sr.codexEntryState]),
        children: Qr(ir[Sr.codexEntryState])
      })
    }

    function Fr(rr) {
      const {
        t: Sr
      } = (0, xr.E)();
      return "codexUnidentified" === rr.codexEntryState ? Sr(`${vr}:codexUnidentifiedName`) : rr.codexEntryName
    }

    function or(rr) {
      let {
        entry: Sr
      } = rr;
      return "codexUnidentified" === Sr.codexEntryState ? (0, Tr.jsx)(lr, {
        itemName: "Book"
      }) : (0, Tr.jsxs)("span", {
        className: "CodexPhoto",
        children: [(0, Tr.jsx)(Xr, {
          anomalyId: Sr.codexEntryId,
          caught: "codexContained" === Sr.codexEntryState
        }), (0, Tr.jsx)("img", {
          className: "CodexPaperclip",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAMCAYAAACulacQAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGNggIIXb97/X7V57/+Wvtn/GZDBqs17UQTgClahScBATHrlf5ySeHWimo9NMbokCp9OkmD/oasGCaJLAAC5ZUIBS85GiAAAAABJRU5ErkJggg==",
          alt: "",
          draggable: !1
        })]
      })
    }

    function br(rr) {
      let {
        entry: Sr,
        selected: Qr,
        onSelect: Zr
      } = rr;
      const Wr = "codexUnidentified" === Sr.codexEntryState;
      return (0, Tr.jsxs)(Rr, {
        icon: (0, Tr.jsx)(or, {
          entry: Sr
        }),
        name: Fr(Sr),
        selected: Qr,
        locked: Wr,
        className: Er()("CodexFolder", Vr[Sr.codexEntryState]),
        onSelect: () => {
          Zr(Sr.codexEntryId)
        },
        children: [!Wr && (0, Tr.jsx)(cr, {
          entry: Sr
        }), Wr && (0, Tr.jsx)("img", {
          className: "CodexSeal",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAARElEQVR4nGNggIIGHp7/MAzjw+TAnMf+/mB8RkQEjOGKYZLIgsiK4AqQJZA1gBXAOHgVwCRQJJEdCVOEYj8yQPciTAEAz0hgyamUqskAAAAASUVORK5CYII=",
          alt: "",
          draggable: !1
        })]
      })
    }

    function Jr(rr) {
      let {
        count: Sr
      } = rr;
      const Qr = [];
      for (let Zr = Math.min(Sr, 25); Zr > 0; Zr -= 5) Qr.push(Math.min(Zr, 5));
      return (0, Tr.jsx)("span", {
        className: "CodexTallyMarks",
        "aria-hidden": "true",
        children: Qr.map(((rr, Sr) => (0, Tr.jsx)("span", {
          className: Er()("CodexTallyGroup", {
            Gate: 5 === rr
          }),
          children: Array.from({
            length: Math.min(rr, 4)
          }, ((rr, Sr) => (0, Tr.jsx)("span", {
            className: "CodexTallyMark"
          }, Sr)))
        }, Sr)))
      })
    }

    function Dr(rr) {
      let {
        contained: Sr,
        total: Qr
      } = rr;
      const {
        t: Zr
      } = (0, xr.E)();
      return (0, Tr.jsxs)("div", {
        className: "CodexProgress",
        children: [Zr(`${vr}:codexProgress`, {
          contained: String(Sr),
          total: String(Qr)
        }), (0, Tr.jsx)("span", {
          className: "CodexProgressMeter",
          children: (0, Tr.jsx)("span", {
            style: {
              width: Sr / Qr * 100 + "%"
            }
          })
        })]
      })
    }

    function dr(rr) {
      let {
        entry: Sr,
        fileNumber: Qr
      } = rr;
      const {
        t: Zr
      } = (0, xr.E)(), Wr = "codexContained" === Sr.codexEntryState;
      return (0, Tr.jsx)("section", {
        className: "BoardDetail",
        children: (0, Tr.jsxs)("article", {
          className: Er()("CodexDossier", Vr[Sr.codexEntryState]),
          children: [(0, Tr.jsx)("span", {
            className: "CodexFileNumber",
            children: Zr(`${vr}:codexFileNumber`, {
              number: String(Qr).padStart(3, "0")
            })
          }), (0, Tr.jsx)(gr, {
            icon: (0, Tr.jsx)(or, {
              entry: Sr
            }),
            name: Fr(Sr),
            children: (0, Tr.jsx)(cr, {
              entry: Sr
            })
          }), Wr && (0, Tr.jsxs)(Tr.Fragment, {
            children: [(0, Tr.jsx)("p", {
              className: "BoardDescription",
              children: Sr.codexEntryLore
            }), (0, Tr.jsxs)("p", {
              className: "CodexTally",
              children: [Zr(`${vr}:codexContainments`, {
                count: String(Sr.codexEntryContainedCount)
              }), (0, Tr.jsx)(Jr, {
                count: Sr.codexEntryContainedCount
              })]
            }), (0, Tr.jsx)("span", {
              className: "CodexClosedStamp",
              "aria-hidden": "true",
              children: Zr(`${vr}:codexContainedBadge`)
            })]
          }), !Wr && (0, Tr.jsxs)(Tr.Fragment, {
            children: [(0, Tr.jsxs)("div", {
              className: "CodexRedaction",
              children: [wr.map((rr => (0, Tr.jsx)("span", {
                className: "CodexRedactedLine",
                style: {
                  width: rr
                }
              }, rr))), (0, Tr.jsx)("p", {
                className: "CodexRedacted",
                children: Zr(`${vr}:codexRedacted`)
              })]
            }), "" !== Sr.codexEntryHint && (0, Tr.jsxs)("aside", {
              className: "CodexNote",
              children: [(0, Tr.jsx)("h4", {
                children: Zr(`${vr}:codexHintLabel`)
              }), (0, Tr.jsx)("p", {
                children: Sr.codexEntryHint
              })]
            }), (0, Tr.jsx)("p", {
              className: "CodexClearance",
              children: Zr(Ar[Sr.codexEntryDifficulty])
            })]
          })]
        })
      })
    }

    function sr(rr) {
      let {
        controller: Sr
      } = rr;
      const Qr = (0, pr.g)(Gr, Sr.getSnapshot()),
        {
          t: Zr
        } = (0, xr.E)();
      if (0 === Qr.entries.length) return null;
      const Wr = Qr.entries.find((rr => rr.codexEntryId === Qr.selectedId)),
        ar = Qr.entries.filter((rr => "codexContained" === rr.codexEntryState)).length,
        jr = Qr.entries.map((rr => rr.codexEntryId)).sort().indexOf(Wr.codexEntryId) + 1;
      return (0, Tr.jsxs)(Lr, {
        open: Qr.open,
        onDismiss: Sr.dismiss,
        title: Zr(`${vr}:codexTitle`),
        className: "ContainmentCodexPanel",
        headerExtra: (0, Tr.jsx)(Dr, {
          contained: ar,
          total: Qr.entries.length
        }),
        children: [(0, Tr.jsx)("div", {
          className: "BoardTiles",
          children: Qr.entries.map((rr => (0, Tr.jsx)(br, {
            entry: rr,
            selected: rr === Wr,
            onSelect: Sr.select
          }, rr.codexEntryId)))
        }), (0, Tr.jsx)(dr, {
          entry: Wr,
          fileNumber: jr
        })]
      })
    }
    var ur = Qr(379);
    class rS extends Mr.c {
      constructor(rr, Sr, Qr, Zr, Wr, ar) {
        super(rr, Sr, Qr), this.pacer = Zr, this.command = Wr, this.predict = ar, this.board = null, this.confirmed = null, this.selectedId = "", this.notice = null, this.unsubscribePacer = void 0, this.select = rr => {
          this.selectedId = rr, this.emit()
        }, this.act = (rr, Sr) => {
          if (!this.open || null === this.board || !this.pacer.send(`${this.command} ${rr} ${Sr}`, this.rollBack)) return;
          const Qr = this.predict(this.board, rr, Sr);
          null !== Qr && (this.board = Qr.board, this.notice = Qr.notice, this.emit())
        }, this.rollBack = () => {
          this.board !== this.confirmed && (this.board = this.confirmed, this.notice = null)
        }, this.unsubscribePacer = Zr.subscribe((() => {
          this.emit()
        }))
      }
      vx(rr) {
        const Sr = this.messageOpens(rr);
        if (Sr && this.open) return this.board === this.confirmed && (this.board = rr), this.confirmed = rr, void this.emit();
        if (this.board = rr, this.confirmed = rr, this.pacer.onReply(), Sr) return this.notice = null, this.selectedId = this.openingSelection(rr), void this.show();
        const Qr = this.messageNotice(rr);
        null !== Qr && (this.notice = Qr), this.emit()
      }
      dispose() {
        this.unsubscribePacer(), super.dispose()
      }
      onClosed() {
        this.notice = null
      }
    }

    function SS(rr, Sr) {
      return rr.loadoutCoins >= Sr.loadoutCostCoins && Sr.loadoutCostParts.every((Sr => function(rr, Sr) {
        return QS(rr, Sr).loadoutHeldPartAmount
      }(rr, Sr.loadoutPartCurrency) >= Sr.loadoutPartAmount))
    }

    function QS(rr, Sr) {
      return rr.loadoutHeldParts.find((rr => rr.loadoutHeldPartCurrency === Sr))
    }

    function ZS(rr, Sr) {
      return rr.loadoutSlots.find((rr => rr.loadoutSlotKind === Sr))
    }

    function WS(rr) {
      return rr.loadoutPerks.filter((rr => rr.loadoutPerkEquipped)).length >= rr.loadoutMaxPerks
    }

    function aS(rr, Sr, Qr) {
      for (const Wr of rr.loadoutSlots) {
        const Zr = Wr.loadoutSlotOptions.find((rr => rr.loadoutOptionId === Qr));
        if (Zr) return "loadoutArmour" === Wr.loadoutSlotKind ? IS(rr, Wr, Zr, Sr) : jS(rr, Wr, Zr, Sr)
      }
      const Zr = rr.loadoutPerks.find((rr => rr.loadoutPerkId === Qr));
      return Zr ? function(rr, Sr, Qr) {
        const Zr = Sr.loadoutPerkOwned,
          Wr = Sr.loadoutPerkEquipped,
          ar = Sr.loadoutPerkName,
          jr = WS(rr);
        if ("loadoutUnlock" === Qr) {
          if (Zr || !SS(rr, Sr.loadoutPerkCost)) return null;
          const Qr = {
            ...Sr,
            loadoutPerkOwned: !0,
            loadoutPerkEquipped: !jr
          };
          return {
            board: ES(pS(rr, Sr.loadoutPerkCost), Qr),
            notice: xS(jr ? "loadoutNoticeUnlockedNoRoom" : "loadoutNoticeUnlocked", ar)
          }
        }
        if ("loadoutUpgrade" === Qr || !Zr || "loadoutEquip" === Qr === Wr || !Wr && jr) return null;
        return {
          board: ES(rr, {
            ...Sr,
            loadoutPerkEquipped: !Wr
          }),
          notice: xS(Wr ? "loadoutNoticeUnequipped" : "loadoutNoticeEquipped", ar)
        }
      }(rr, Zr, Sr) : null
    }

    function jS(rr, Sr, Qr, Zr) {
      const Wr = Qr.loadoutOptionOwnedTier,
        ar = Qr.loadoutOptionName;
      if ("loadoutEquip" === Zr) return 0 === Wr ? null : {
        board: fS(rr, Sr, Qr.loadoutOptionId, null),
        notice: xS("loadoutNoticeEquipped", ar)
      };
      const jr = "loadoutUnlock" === Zr;
      if (jr && 0 !== Wr || "loadoutUpgrade" === Zr && (0 === Wr || Wr >= Qr.loadoutOptionTiers.length) || "loadoutUnequip" === Zr) return null;
      const Ir = Qr.loadoutOptionTiers[Wr].loadoutTierCost;
      if (!SS(rr, Ir)) return null;
      const fr = {
          ...Qr,
          loadoutOptionOwnedTier: Wr + 1
        },
        Er = jr ? Qr.loadoutOptionId : Sr.loadoutSlotEquippedId;
      return {
        board: fS(pS(rr, Ir), Sr, Er, fr),
        notice: jr ? xS("loadoutNoticeUnlocked", ar) : xS("loadoutNoticeUpgraded", ar, Wr + 1)
      }
    }

    function IS(rr, Sr, Qr, Zr) {
      const Wr = Qr.loadoutOptionOwnedTier > 0,
        ar = Qr.loadoutOptionName;
      if ("loadoutEquip" === Zr && Wr) return {
        board: fS(rr, Sr, Qr.loadoutOptionId, null),
        notice: xS("loadoutNoticeEquipped", ar)
      };
      const jr = Qr.loadoutOptionTiers[0].loadoutTierCost;
      return "loadoutUnlock" !== Zr || Wr || !SS(rr, jr) ? null : {
        board: fS(pS(rr, jr), Sr, Qr.loadoutOptionId, {
          ...Qr,
          loadoutOptionOwnedTier: 1
        }),
        notice: xS("loadoutNoticeUnlocked", ar)
      }
    }

    function fS(rr, Sr, Qr, Zr) {
      const Wr = {
        ...Sr,
        loadoutSlotEquippedId: Qr,
        loadoutSlotOptions: Sr.loadoutSlotOptions.map((rr => null !== Zr && rr.loadoutOptionId === Zr.loadoutOptionId ? Zr : rr))
      };
      return {
        ...rr,
        loadoutSlots: rr.loadoutSlots.map((rr => rr === Sr ? Wr : rr))
      }
    }

    function ES(rr, Sr) {
      return {
        ...rr,
        loadoutPerks: rr.loadoutPerks.map((rr => rr.loadoutPerkId === Sr.loadoutPerkId ? Sr : rr))
      }
    }

    function pS(rr, Sr) {
      return {
        ...rr,
        loadoutCoins: rr.loadoutCoins - Sr.loadoutCostCoins,
        loadoutHeldParts: rr.loadoutHeldParts.map((rr => {
          const Qr = Sr.loadoutCostParts.find((Sr => Sr.loadoutPartCurrency === rr.loadoutHeldPartCurrency));
          return Qr ? {
            ...rr,
            loadoutHeldPartAmount: rr.loadoutHeldPartAmount - Qr.loadoutPartAmount
          } : rr
        }))
      }
    }

    function xS(rr, Sr) {
      return {
        loadoutNoticeKey: rr,
        loadoutNoticeRefused: !1,
        loadoutNoticeName: Sr,
        loadoutNoticeTier: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
      }
    }
    const mS = "containmentLoadoutView";
    class NS extends rS {
      constructor(rr, Sr, Qr, Zr) {
        super(rr, Sr, Qr, Zr, "loadout", aS), this.slot = "loadoutPrimary", this.snapshot = this.buildSnapshot(), this.selectSlot = rr => {
          this.slot = rr, this.selectedId = US(this.board, rr), this.emit()
        }
      }
      messageOpens(rr) {
        return rr.loadoutMessageOpens
      }
      messageNotice(rr) {
        return rr.loadoutNotice
      }
      openingSelection(rr) {
        return US(rr, this.slot)
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

    function US(rr, Sr) {
      if ("loadoutPerks" === Sr) {
        var Qr;
        const Sr = rr.loadoutPerks;
        return (null !== (Qr = Sr.find((rr => rr.loadoutPerkEquipped))) && void 0 !== Qr ? Qr : Sr[0]).loadoutPerkId
      }
      return ZS(rr, Sr).loadoutSlotEquippedId
    }
    const tS = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAY0lEQVR4nGNgIAP8x4FRwP/sFt3/EYU6YBqGIwp1MBSDBUH4/3nW//83csD5DOgKfeKNsWIMhV+///qvbOT7/87cMjCG8TEUgiSLqlpRMEgMQ+HJvgy4aTAMEsPqc2KChyAAAFxNbnylK5O6AAAAAElFTkSuQmCC";
    var hS = Qr(38361),
      zS = Qr(1330);
    const YS = {
        loadoutPrimary: `${vr}:loadoutSlotPrimary`,
        loadoutSecondary: `${vr}:loadoutSlotSecondary`,
        loadoutOffensive: `${vr}:loadoutSlotOffensive`,
        loadoutSelfHelp: `${vr}:loadoutSlotSelfHelp`,
        loadoutArmour: `${vr}:loadoutSlotArmour`,
        loadoutPerks: `${vr}:loadoutSlotPerks`
      },
      nS = {
        section: "right",
        eN: "bottom",
        act: "top"
      },
      eS = (0, Zr.createContext)({
        step: null,
        targetRef: () => {}
      });

    function KS() {
      const {
        step: rr,
        targetRef: Sr
      } = (0, Zr.useContext)(eS);
      return (Qr, Zr) => (null === rr || void 0 === rr ? void 0 : rr.kind) === Qr && rr.id === Zr ? Sr : void 0
    }

    function yS(rr, Sr) {
      const Qr = Sr.loadoutTargetId;
      if ("loadoutPerks" === Sr.loadoutTargetSection) {
        const Sr = rr.loadoutPerks.find((rr => rr.loadoutPerkId === Qr));
        return {
          name: Sr.loadoutPerkName,
          owned: Sr.loadoutPerkOwned,
          equipped: Sr.loadoutPerkEquipped
        }
      }
      const Zr = ZS(rr, Sr.loadoutTargetSection),
        Wr = Zr.loadoutSlotOptions.find((rr => rr.loadoutOptionId === Qr));
      return {
        name: Wr.loadoutOptionName,
        owned: Wr.loadoutOptionOwnedTier > 0,
        equipped: Zr.loadoutSlotEquippedId === Qr
      }
    }

    function BS(rr, Sr, Qr, Zr) {
      const [Wr, ar] = rr(`${vr}:${Sr}`, {
        [Qr]: "\x01"
      }).split("\x01");
      return (0, Tr.jsxs)(Tr.Fragment, {
        children: [Wr, (0, Tr.jsx)("span", {
          className: "LoadoutWalkthroughName",
          children: Zr
        }), ar]
      })
    }

    function TS(rr) {
      let {
        view: Sr,
        onDismiss: Qr,
        children: Wr
      } = rr;
      const {
        t: ar
      } = (0, xr.E)(), jr = Sr.loadout, Ir = Sr.open ? jr.loadoutWalkthrough.map((rr => ({
        target: rr,
        info: yS(jr, rr)
      }))).find((rr => {
        let {
          info: Sr
        } = rr;
        return !Sr.equipped
      })) : void 0;
      let fr = null,
        Er = null;
      if (void 0 !== Ir) {
        const {
          target: rr,
          info: Qr
        } = Ir;
        Sr.slot !== rr.loadoutTargetSection ? (fr = {
          kind: "section",
          id: rr.loadoutTargetSection
        }, Er = BS(ar, "loadoutWalkthroughSection", "section", ar(YS[rr.loadoutTargetSection]))) : Sr.selectedId !== rr.loadoutTargetId ? (fr = {
          kind: "eN",
          id: rr.loadoutTargetId
        }, Er = BS(ar, "loadoutWalkthroughPick", "name", Qr.name)) : (fr = {
          kind: "act",
          id: rr.loadoutTargetId
        }, Er = BS(ar, Qr.owned ? "loadoutWalkthroughEquip" : "loadoutWalkthroughUnlock", "name", Qr.name))
      }
      const pr = null === fr ? null : function(rr) {
          return `${rr.kind}:${rr.id}`
        }(fr),
        [mr, Nr] = (0, Zr.useState)(null),
        Ur = (0, Zr.useCallback)((rr => {
          Nr((Sr => null !== rr ? {
            key: pr,
            node: rr
          } : (null === Sr || void 0 === Sr ? void 0 : Sr.key) === pr ? null : Sr))
        }), [pr]),
        tr = null !== pr && (null === mr || void 0 === mr ? void 0 : mr.key) === pr ? mr.node : null;
      return (0, Tr.jsxs)(eS.Provider, {
        value: {
          step: fr,
          targetRef: Ur
        },
        children: [Wr, null !== fr && null !== tr && (0, Tr.jsx)(vS, {
          target: tr,
          placement: nS[fr.kind],
          onDismiss: Qr,
          children: Er
        }, pr)]
      })
    }

    function vS(rr) {
      let {
        target: Sr,
        placement: Qr,
        onDismiss: Wr,
        children: ar
      } = rr;
      const {
        t: jr
      } = (0, xr.E)(), Ir = (0, Zr.useRef)(Sr);
      return Ir.current = Sr, (0, zS.u)("popup", Ir, Wr), (0, Tr.jsxs)(hS.e, {
        target: Sr,
        placement: Qr,
        className: "LoadoutWalkthroughStep",
        spotlightMargin: 10,
        children: [(0, Tr.jsxs)("div", {
          className: "LoadoutWalkthroughHeader",
          children: [(0, Tr.jsx)("img", {
            className: "LoadoutWalkthroughPortrait",
            src: tS,
            alt: "",
            draggable: !1
          }), (0, Tr.jsx)("span", {
            className: "LoadoutWalkthroughSpeaker",
            children: jr(`${vr}:operatorName`)
          }), (0, Tr.jsx)(Ur.l, {
            onClick: Wr,
            ariaLabel: jr(`${vr}:loadoutWalkthroughClose`),
            padIgnore: !0
          })]
        }), (0, Tr.jsx)("p", {
          className: "LoadoutWalkthroughText",
          children: ar
        })]
      })
    }
    const OS = new Set(["loadoutStatReload", "loadoutStatResupply"]);

    function LS(rr) {
      let {
        cost: Sr,
        loadout: Qr
      } = rr;
      const {
        t: Zr
      } = (0, xr.E)();
      return Sr.loadoutCostCoins <= 0 && 0 === Sr.loadoutCostParts.length ? (0, Tr.jsx)("span", {
        className: "LoadoutCost",
        children: Zr(`${vr}:loadoutFree`)
      }) : (0, Tr.jsxs)("span", {
        className: "LoadoutCost",
        children: [Sr.loadoutCostCoins > 0 && (0, Tr.jsx)(Pr, {
          itemName: Or,
          amount: Sr.loadoutCostCoins,
          wI: Qr.loadoutCoins
        }), Sr.loadoutCostParts.map((rr => {
          const Sr = QS(Qr, rr.loadoutPartCurrency);
          return (0, Tr.jsx)(Pr, {
            itemName: Sr.loadoutHeldPartItem,
            amount: rr.loadoutPartAmount,
            wI: Sr.loadoutHeldPartAmount
          }, rr.loadoutPartCurrency)
        }))]
      })
    }
    const lS = {
      loadoutStatFireRate: `${vr}:loadoutUnitPerMinute`,
      loadoutStatReload: `${vr}:loadoutUnitSeconds`,
      loadoutStatResupply: `${vr}:loadoutUnitSeconds`
    };

    function XS(rr) {
      return "loadoutStatPotency" === rr.loadoutStatKind ? (0, ur.P)(rr.loadoutStatValue) : String(rr.loadoutStatValue)
    }

    function PS(rr) {
      var Sr;
      let {
        option: Qr
      } = rr;
      const {
        t: Zr
      } = (0, xr.E)(), Wr = Qr.loadoutOptionTiers, ar = null === (Sr = Wr[0]) || void 0 === Sr ? void 0 : Sr.loadoutTierStats.map((rr => rr.loadoutStatKind));
      if (!ar || 0 === ar.length) return null;
      const jr = Qr.loadoutOptionOwnedTier,
        Ir = (rr, Sr) => {
          var Qr;
          return null === (Qr = Wr[rr]) || void 0 === Qr ? void 0 : Qr.loadoutTierStats.find((rr => rr.loadoutStatKind === Sr))
        };
      return (0, Tr.jsxs)("table", {
        className: "LoadoutTierTable",
        children: [(0, Tr.jsx)("thead", {
          children: (0, Tr.jsxs)("tr", {
            children: [(0, Tr.jsx)("th", {}), Wr.map(((rr, Sr) => (0, Tr.jsx)("th", {
              className: Er()({
                Current: Sr + 1 === jr,
                Next: Sr === jr
              }),
              children: Zr(`${vr}:loadoutTier`, {
                tier: (0, ur.P)(Sr + 1)
              })
            }, Sr)))]
          })
        }), (0, Tr.jsx)("tbody", {
          children: ar.map((rr => {
            const Sr = lS[rr];
            return (0, Tr.jsxs)("tr", {
              children: [(0, Tr.jsxs)("th", {
                scope: "row",
                children: [Zr(`${vr}:${rr}`), Sr && (0, Tr.jsx)("span", {
                  className: "LoadoutStatUnit",
                  children: Zr(Sr)
                })]
              }), Wr.map(((Sr, Qr) => {
                const Zr = Ir(Qr, rr),
                  Wr = Qr > 0 ? Ir(Qr - 1, rr) : void 0,
                  ar = Zr && Wr ? Zr.loadoutStatValue - Wr.loadoutStatValue : 0,
                  fr = OS.has(rr) ? ar < 0 : ar > 0,
                  pr = Qr === jr;
                return (0, Tr.jsxs)("td", {
                  className: Er()({
                    Current: Qr + 1 === jr,
                    Next: pr,
                    Gain: fr,
                    Owned: Qr < jr
                  }),
                  children: [pr && fr && (0, Tr.jsx)("span", {
                    className: "LoadoutGainArrow",
                    "aria-hidden": "true",
                    children: ar < 0 ? "\u25bc" : "\u25b2"
                  }), Zr ? XS(Zr) : "-"]
                }, Qr)
              }))]
            }, rr)
          }))
        })]
      })
    }

    function HS(rr) {
      let {
        view: Sr,
        controller: Qr,
        slot: Zr,
        option: Wr
      } = rr;
      const {
        t: ar
      } = (0, xr.E)(), jr = Sr.loadout, Ir = Wr.loadoutOptionOwnedTier, fr = Wr.loadoutOptionTiers.length, Er = Zr.loadoutSlotEquippedId === Wr.loadoutOptionId, pr = Ir < fr ? Wr.loadoutOptionTiers[Ir].loadoutTierCost : null, mr = null !== pr && SS(jr, pr), Nr = Wr.loadoutOptionId, tr = KS();
      return (0, Tr.jsxs)(Tr.Fragment, {
        children: [(0, Tr.jsx)(RS, {
          icon: Wr.loadoutOptionIcon,
          name: Wr.loadoutOptionName,
          status: 0 === Ir ? ar(`${vr}:loadoutLocked`) : fr > 1 ? ar(`${vr}:loadoutTier`, {
            tier: (0, ur.P)(Ir)
          }) : null,
          locked: 0 === Ir,
          equipped: Er
        }), (0, Tr.jsx)("p", {
          className: "BoardDescription",
          children: Wr.loadoutOptionDescription
        }), (0, Tr.jsx)(PS, {
          option: Wr
        }), (0, Tr.jsxs)("div", {
          ref: tr("act", Nr),
          className: "BoardActions",
          children: [null !== pr && (0, Tr.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, Tr.jsx)(LS, {
              cost: pr,
              loadout: jr
            }), (0, Tr.jsx)(Ur.p, {
              disabled: !mr || Sr.pending,
              onClick: () => {
                Qr.act(0 === Ir ? "loadoutUnlock" : "loadoutUpgrade", Nr)
              },
              children: 0 === Ir ? ar(`${vr}:loadoutUnlock`) : ar(`${vr}:loadoutUpgrade`, {
                tier: (0, ur.P)(Ir + 1)
              })
            })]
          }), null === pr && fr > 1 && (0, Tr.jsx)("span", {
            className: "BoardHint",
            children: ar(`${vr}:loadoutMaxed`)
          }), Ir > 0 && !Er && (0, Tr.jsx)(Ur.h, {
            disabled: Sr.pending,
            onClick: () => {
              Qr.act("loadoutEquip", Nr)
            },
            children: ar(`${vr}:loadoutEquip`)
          })]
        })]
      })
    }

    function qS(rr) {
      let {
        view: Sr,
        controller: Qr,
        perk: Zr
      } = rr;
      const {
        t: Wr
      } = (0, xr.E)(), ar = Sr.loadout, jr = WS(ar), Ir = Zr.loadoutPerkId, fr = KS();
      return (0, Tr.jsxs)(Tr.Fragment, {
        children: [(0, Tr.jsx)(RS, {
          icon: Zr.loadoutPerkIcon,
          name: Zr.loadoutPerkName,
          status: Zr.loadoutPerkOwned ? null : Wr(`${vr}:loadoutLocked`),
          locked: !Zr.loadoutPerkOwned,
          equipped: Zr.loadoutPerkEquipped
        }), (0, Tr.jsx)("p", {
          className: "BoardDescription",
          children: Zr.loadoutPerkDescription
        }), (0, Tr.jsxs)("div", {
          ref: fr("act", Ir),
          className: "BoardActions",
          children: [!Zr.loadoutPerkOwned && (0, Tr.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, Tr.jsx)(LS, {
              cost: Zr.loadoutPerkCost,
              loadout: ar
            }), (0, Tr.jsx)(Ur.p, {
              disabled: !SS(ar, Zr.loadoutPerkCost) || Sr.pending,
              onClick: () => {
                Qr.act("loadoutUnlock", Ir)
              },
              children: Wr(`${vr}:loadoutUnlock`)
            })]
          }), Zr.loadoutPerkOwned && !Zr.loadoutPerkEquipped && (0, Tr.jsx)(Ur.h, {
            disabled: jr || Sr.pending,
            onClick: () => {
              Qr.act("loadoutEquip", Ir)
            },
            children: Wr(`${vr}:loadoutEquip`)
          }), Zr.loadoutPerkOwned && !Zr.loadoutPerkEquipped && jr && (0, Tr.jsx)("span", {
            className: "BoardHint",
            children: Wr(`${vr}:loadoutSocketsFullHint`)
          }), Zr.loadoutPerkEquipped && (0, Tr.jsx)(Ur.U, {
            disabled: Sr.pending,
            onClick: () => {
              Qr.act("loadoutUnequip", Ir)
            },
            children: Wr(`${vr}:loadoutUnequip`)
          })]
        })]
      })
    }

    function RS(rr) {
      let {
        icon: Sr,
        name: Qr,
        status: Zr,
        locked: Wr,
        equipped: ar
      } = rr;
      const {
        t: jr
      } = (0, xr.E)();
      return (0, Tr.jsxs)(gr, {
        icon: (0, Tr.jsx)(lr, {
          itemName: Sr
        }),
        name: Qr,
        children: [null !== Zr && (0, Tr.jsx)("span", {
          className: Er()("LoadoutStatusText", {
            Locked: Wr
          }),
          children: Zr
        }), ar && (0, Tr.jsx)("span", {
          className: "BoardBadge",
          children: jr(`${vr}:loadoutEquippedBadge`)
        })]
      })
    }

    function gS(rr) {
      let {
        view: Sr,
        controller: Qr
      } = rr;
      const Zr = Sr.loadout;
      if ("loadoutPerks" === Sr.slot) {
        const rr = Zr.loadoutPerks.find((rr => rr.loadoutPerkId === Sr.selectedId));
        return (0, Tr.jsx)("section", {
          className: "BoardDetail",
          children: rr && (0, Tr.jsx)(qS, {
            view: Sr,
            controller: Qr,
            perk: rr
          })
        })
      }
      const Wr = ZS(Zr, Sr.slot),
        ar = Wr.loadoutSlotOptions.find((rr => rr.loadoutOptionId === Sr.selectedId));
      return (0, Tr.jsx)("section", {
        className: "BoardDetail",
        children: ar && (0, Tr.jsx)(HS, {
          view: Sr,
          controller: Qr,
          slot: Wr,
          option: ar
        })
      })
    }

    function CS(rr) {
      let {
        owned: Sr,
        total: Qr
      } = rr;
      return Qr <= 1 ? null : (0, Tr.jsx)("span", {
        className: "LoadoutPips",
        children: Array.from({
          length: Qr
        }, ((rr, Qr) => (0, Tr.jsx)("span", {
          className: Er()("LoadoutPip", {
            Filled: Qr < Sr
          })
        }, Qr)))
      })
    }

    function MS(rr) {
      let {
        view: Sr,
        controller: Qr
      } = rr;
      const {
        t: Zr
      } = (0, xr.E)(), Wr = Sr.loadout, ar = KS();
      return (0, Tr.jsxs)("nav", {
        className: "LoadoutKit",
        "aria-label": Zr(`${vr}:loadoutKit`),
        children: [Wr.loadoutSlots.map((rr => {
          const Wr = rr.loadoutSlotOptions.find((Sr => Sr.loadoutOptionId === rr.loadoutSlotEquippedId));
          return (0, Tr.jsxs)("button", {
            ref: ar("section", rr.loadoutSlotKind),
            type: "button",
            className: Er()("LoadoutKitSlot", {
              Selected: Sr.slot === rr.loadoutSlotKind
            }),
            onClick: () => {
              Qr.selectSlot(rr.loadoutSlotKind)
            },
            children: [(0, Tr.jsx)("span", {
              className: "LoadoutKitIcon",
              children: Wr && (0, Tr.jsx)(lr, {
                itemName: Wr.loadoutOptionIcon
              })
            }), (0, Tr.jsxs)("span", {
              className: "LoadoutKitText",
              children: [(0, Tr.jsxs)("span", {
                className: "LoadoutKitTop",
                children: [(0, Tr.jsx)("span", {
                  className: "LoadoutKitLabel",
                  children: Zr(YS[rr.loadoutSlotKind])
                }), Wr && (0, Tr.jsx)(CS, {
                  owned: Wr.loadoutOptionOwnedTier,
                  total: Wr.loadoutOptionTiers.length
                })]
              }), (0, Tr.jsx)("span", {
                className: "LoadoutKitName",
                children: null === Wr || void 0 === Wr ? void 0 : Wr.loadoutOptionName
              })]
            })]
          }, rr.loadoutSlotKind)
        })), (0, Tr.jsx)(GS, {
          view: Sr,
          controller: Qr
        })]
      })
    }

    function GS(rr) {
      let {
        view: Sr,
        controller: Qr
      } = rr;
      const {
        t: Zr
      } = (0, xr.E)(), Wr = Sr.loadout, ar = Wr.loadoutPerks.filter((rr => rr.loadoutPerkEquipped)), jr = KS();
      return (0, Tr.jsxs)("button", {
        ref: jr("section", "loadoutPerks"),
        type: "button",
        className: Er()("LoadoutKitSlot", "LoadoutPerks", {
          Selected: "loadoutPerks" === Sr.slot
        }),
        onClick: () => {
          Qr.selectSlot("loadoutPerks")
        },
        children: [(0, Tr.jsxs)("span", {
          className: "LoadoutKitTop",
          children: [(0, Tr.jsx)("span", {
            className: "LoadoutKitLabel",
            children: Zr(YS.loadoutPerks)
          }), (0, Tr.jsx)("span", {
            className: "LoadoutPerkCount",
            children: Zr(`${vr}:loadoutPerkCount`, {
              equipped: String(ar.length),
              max: String(Wr.loadoutMaxPerks)
            })
          })]
        }), (0, Tr.jsx)("span", {
          className: "LoadoutSockets",
          children: Array.from({
            length: Wr.loadoutMaxPerks
          }, ((rr, Sr) => {
            const Qr = ar[Sr];
            return (0, Tr.jsxs)("span", {
              className: Er()("LoadoutSocket", {
                Filled: Qr,
                Empty: !Qr
              }),
              children: [(0, Tr.jsx)("span", {
                className: "LoadoutSocketWell",
                children: Qr && (0, Tr.jsx)(lr, {
                  itemName: Qr.loadoutPerkIcon
                })
              }), (0, Tr.jsx)("span", {
                className: "LoadoutSocketName",
                children: Qr ? Qr.loadoutPerkName : Zr(`${vr}:loadoutPerkSocketEmpty`)
              })]
            }, Sr)
          }))
        })]
      })
    }

    function kS(rr) {
      let {
        icon: Sr,
        name: Qr,
        selected: Zr,
        equipped: Wr,
        locked: ar,
        ownedTier: jr,
        tiers: Ir,
        buttonRef: fr,
        onSelect: Er
      } = rr;
      const {
        t: pr
      } = (0, xr.E)();
      return (0, Tr.jsxs)(Rr, {
        icon: (0, Tr.jsx)(lr, {
          itemName: Sr
        }),
        name: Qr,
        selected: Zr,
        locked: ar,
        buttonRef: fr,
        onSelect: Er,
        children: [Wr && (0, Tr.jsx)("span", {
          className: "BoardBadge",
          children: pr(`${vr}:loadoutEquippedBadge`)
        }), ar && (0, Tr.jsx)("span", {
          className: "BoardBadge Muted",
          children: pr(`${vr}:loadoutLocked`)
        }), !ar && (0, Tr.jsx)(CS, {
          owned: jr,
          total: Ir
        })]
      })
    }

    function AS(rr) {
      let {
        view: Sr,
        controller: Qr
      } = rr;
      const Zr = Sr.loadout,
        Wr = KS();
      if ("loadoutPerks" === Sr.slot) return (0, Tr.jsx)("div", {
        className: "BoardTiles",
        children: Zr.loadoutPerks.map((rr => (0, Tr.jsx)(kS, {
          icon: rr.loadoutPerkIcon,
          name: rr.loadoutPerkName,
          selected: Sr.selectedId === rr.loadoutPerkId,
          equipped: rr.loadoutPerkEquipped,
          locked: !rr.loadoutPerkOwned,
          ownedTier: 0,
          tiers: 0,
          buttonRef: Wr("eN", rr.loadoutPerkId),
          onSelect: () => {
            Qr.select(rr.loadoutPerkId)
          }
        }, rr.loadoutPerkId)))
      });
      const ar = ZS(Zr, Sr.slot);
      return (0, Tr.jsx)("div", {
        className: "BoardTiles",
        children: ar.loadoutSlotOptions.map((rr => (0, Tr.jsx)(kS, {
          icon: rr.loadoutOptionIcon,
          name: rr.loadoutOptionName,
          selected: Sr.selectedId === rr.loadoutOptionId,
          equipped: ar.loadoutSlotEquippedId === rr.loadoutOptionId,
          locked: 0 === rr.loadoutOptionOwnedTier,
          ownedTier: rr.loadoutOptionOwnedTier,
          tiers: rr.loadoutOptionTiers.length,
          buttonRef: Wr("eN", rr.loadoutOptionId),
          onSelect: () => {
            Qr.select(rr.loadoutOptionId)
          }
        }, rr.loadoutOptionId)))
      })
    }

    function VS(rr) {
      let {
        loadout: Sr
      } = rr;
      return (0, Tr.jsx)(Cr, {
        coins: Sr.loadoutCoins,
        children: Sr.loadoutHeldParts.filter((rr => rr.loadoutHeldPartAmount > 0)).map((rr => (0, Tr.jsx)(Pr, {
          itemName: rr.loadoutHeldPartItem,
          amount: rr.loadoutHeldPartAmount
        }, rr.loadoutHeldPartCurrency)))
      })
    }

    function iS(rr) {
      let {
        controller: Sr
      } = rr;
      const Qr = (0, pr.g)(mS, Sr.getSnapshot()),
        {
          t: Zr
        } = (0, xr.E)();
      if (null === Qr.loadout) return null;
      const Wr = Qr.notice;
      return (0, Tr.jsx)(TS, {
        view: Qr,
        onDismiss: Sr.dismiss,
        children: (0, Tr.jsxs)(Lr, {
          open: Qr.open,
          onDismiss: Sr.dismiss,
          title: Zr(`${vr}:loadoutTitle`),
          className: "ContainmentLoadoutPanel",
          headerExtra: (0, Tr.jsx)(VS, {
            loadout: Qr.loadout
          }),
          statusRefused: null === Wr || void 0 === Wr ? void 0 : Wr.loadoutNoticeRefused,
          status: (0, Tr.jsxs)(Tr.Fragment, {
            children: [(0, Tr.jsx)("span", {
              className: "LoadoutRadioBadge",
              children: Zr(`${vr}:loadoutRadioBadge`)
            }), null !== Wr && Zr(`${vr}:${Wr.loadoutNoticeKey}`, {
              name: Wr.loadoutNoticeName,
              tier: (0, ur.P)(Wr.loadoutNoticeTier),
              max: String(Qr.loadout.loadoutMaxPerks)
            })]
          }),
          children: [(0, Tr.jsx)(MS, {
            view: Qr,
            controller: Sr
          }), (0, Tr.jsx)(AS, {
            view: Qr,
            controller: Sr
          }), (0, Tr.jsx)(gS, {
            view: Qr,
            controller: Sr
          })]
        })
      })
    }

    function wS(rr, Sr, Qr) {
      const Zr = rr.locatorEntries.find((rr => rr.locatorEntryId === Qr));
      if (!Zr) return null;
      const Wr = Zr.locatorEntryName;
      if ("locatorDisarm" === Sr) return Zr.locatorEntryArmed ? {
        board: cS(rr, null),
        notice: FS("locatorNoticeDisarmed", Wr)
      } : null;
      if ("locatorArm" === Sr) return Zr.locatorEntryOwned && !Zr.locatorEntryArmed ? {
        board: cS(rr, Qr),
        notice: FS("locatorNoticeArmed", Wr)
      } : null;
      if (Zr.locatorEntryOwned || rr.locatorCoins < Zr.locatorEntryPrice) return null;
      const ar = cS({
        ...rr,
        locatorCoins: rr.locatorCoins - Zr.locatorEntryPrice
      }, Qr);
      return {
        board: {
          ...ar,
          locatorEntries: ar.locatorEntries.map((rr => rr.locatorEntryId === Qr ? {
            ...rr,
            locatorEntryOwned: !0
          } : rr))
        },
        notice: FS("locatorNoticeBought", Wr)
      }
    }

    function cS(rr, Sr) {
      return {
        ...rr,
        locatorEntries: rr.locatorEntries.map((rr => {
          const Qr = rr.locatorEntryId === Sr;
          return rr.locatorEntryArmed === Qr ? rr : {
            ...rr,
            locatorEntryArmed: Qr
          }
        }))
      }
    }

    function FS(rr, Sr) {
      return {
        locatorNoticeKey: rr,
        locatorNoticeRefused: !1,
        locatorNoticeName: Sr
      }
    }
    const oS = "containmentLocatorView";
    class bS extends rS {
      constructor(rr, Sr, Qr, Zr) {
        super(rr, Sr, Qr, Zr, "locator", wS), this.snapshot = this.buildSnapshot()
      }
      messageOpens(rr) {
        return rr.locatorMessageOpens
      }
      messageNotice(rr) {
        return rr.locatorNotice
      }
      openingSelection(rr) {
        var Sr;
        const Qr = rr.locatorEntries;
        return (null !== (Sr = Qr.find((rr => rr.locatorEntryArmed))) && void 0 !== Sr ? Sr : Qr[0]).locatorEntryId
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
    const JS = {
        locatorContained: `${vr}:locatorFlavourContained`,
        locatorEncountered: `${vr}:locatorFlavourEncountered`,
        locatorUnseen: `${vr}:locatorFlavourUnseen`
      },
      DS = {
        codexAnyDifficulty: null,
        codexNormalOnly: `${vr}:locatorAttunedNormal`,
        codexHardOnly: `${vr}:locatorAttunedHard`
      };

    function dS() {
      return (0, Tr.jsx)(Tr.Fragment, {
        children: Array.from({
          length: 5
        }, ((rr, Sr) => (0, Tr.jsx)("span", {
          className: "LocatorFly",
          children: (0, Tr.jsx)("img", {
            src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAICAYAAADwdn+XAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYElEQVR4nGNgoBboMlb5LyUjD8YgNtHyJ6/d+Q/CILa1lz9YAbo4DCDLYxjQv3gt3AYQG90AdHkUQ/qhkjAb0BURkgcDmAQMo7sSXR7deyiGoIvDvIOsGasB+ACyBmTNACS0go3ibhumAAAAAElFTkSuQmCC",
            alt: "",
            draggable: !1
          })
        }, Sr)))
      })
    }

    function sS(rr) {
      let {
        entry: Sr
      } = rr;
      const {
        t: Qr
      } = (0, xr.E)();
      return Sr.locatorEntryArmed ? (0, Tr.jsx)("span", {
        className: "BoardBadge Armed",
        children: Qr(`${vr}:locatorArmedBadge`)
      }) : Sr.locatorEntryOwned ? (0, Tr.jsx)("span", {
        className: "BoardBadge",
        children: Qr(`${vr}:locatorOwnedBadge`)
      }) : null
    }

    function uS(rr) {
      let {
        entry: Sr,
        coins: Qr,
        inTile: Zr = !1
      } = rr;
      return (0, Tr.jsx)(Pr, {
        itemName: Or,
        amount: Sr.locatorEntryPrice,
        wI: Qr,
        inTile: Zr
      })
    }

    function rQ(rr) {
      let {
        view: Sr,
        controller: Qr,
        entry: Zr
      } = rr;
      const {
        t: Wr
      } = (0, xr.E)(), ar = Zr.locatorEntryId, jr = Sr.locators.locatorEntries.find((rr => rr.locatorEntryArmed && rr !== Zr));
      return (0, Tr.jsxs)("div", {
        className: "BoardActions",
        children: [Zr.locatorEntryArmed && (0, Tr.jsx)(Ur.U, {
          disabled: Sr.pending,
          onClick: () => {
            Qr.act("locatorDisarm", ar)
          },
          children: Wr(`${vr}:locatorDisarm`)
        }), Zr.locatorEntryOwned && !Zr.locatorEntryArmed && (0, Tr.jsx)(Ur.h, {
          disabled: Sr.pending,
          onClick: () => {
            Qr.act("locatorArm", ar)
          },
          children: Wr(`${vr}:locatorArm`)
        }), !Zr.locatorEntryOwned && (0, Tr.jsxs)("div", {
          className: "LocatorBuy",
          children: [(0, Tr.jsx)(uS, {
            entry: Zr,
            coins: Sr.locators.locatorCoins
          }), (0, Tr.jsx)(Ur.p, {
            disabled: Sr.locators.locatorCoins < Zr.locatorEntryPrice || Sr.pending,
            onClick: () => {
              Qr.act("locatorBuy", ar)
            },
            children: Wr(`${vr}:locatorBuy`)
          })]
        }), jr && !Zr.locatorEntryArmed && (0, Tr.jsx)("span", {
          className: "BoardHint",
          children: Wr(`${vr}:locatorReplacesHint`, {
            name: jr.locatorEntryName
          })
        })]
      })
    }

    function SQ(rr) {
      let {
        entry: Sr
      } = rr;
      return "locatorUnseen" === Sr.locatorEntryStanding ? (0, Tr.jsx)(lr, {
        itemName: "Compass"
      }) : (0, Tr.jsx)(Xr, {
        anomalyId: Sr.locatorEntryId,
        caught: "locatorContained" === Sr.locatorEntryStanding
      })
    }

    function QQ(rr) {
      let {
        view: Sr,
        controller: Qr,
        entry: Zr
      } = rr;
      const {
        t: Wr
      } = (0, xr.E)(), ar = DS[Zr.locatorEntryDifficulty];
      return (0, Tr.jsxs)("section", {
        className: "BoardDetail",
        children: [(0, Tr.jsxs)("div", {
          className: Er()("LocatorLabel", {
            Armed: Zr.locatorEntryArmed
          }),
          children: [(0, Tr.jsx)(gr, {
            icon: (0, Tr.jsx)(SQ, {
              entry: Zr
            }),
            name: Wr(`${vr}:locatorName`, {
              name: Zr.locatorEntryName
            }),
            children: (0, Tr.jsx)(sS, {
              entry: Zr
            })
          }), (0, Tr.jsx)("p", {
            className: "BoardDescription",
            children: Wr(Zr.locatorEntryArmed ? `${vr}:locatorFlavourArmed` : JS[Zr.locatorEntryStanding])
          }), null !== ar && (0, Tr.jsx)("p", {
            className: "LocatorAttuned",
            children: Wr(ar)
          }), (0, Tr.jsx)("p", {
            className: "BoardDescription LocatorUsage",
            children: Wr(`${vr}:locatorUsage`)
          })]
        }), (0, Tr.jsx)(rQ, {
          view: Sr,
          controller: Qr,
          entry: Zr
        })]
      })
    }

    function ZQ(rr) {
      let {
        controller: Sr
      } = rr;
      const Qr = (0, pr.g)(oS, Sr.getSnapshot()),
        {
          t: Zr
        } = (0, xr.E)(),
        Wr = Qr.locators;
      if (null === Wr) return null;
      const ar = Wr.locatorEntries.find((rr => rr.locatorEntryId === Qr.selectedId)),
        jr = Qr.notice;
      return (0, Tr.jsxs)(Lr, {
        open: Qr.open,
        onDismiss: Sr.dismiss,
        title: Zr(`${vr}:locatorTitle`),
        className: "ContainmentLocatorPanel",
        decor: (0, Tr.jsx)(dS, {}),
        headerExtra: (0, Tr.jsx)(Cr, {
          coins: Wr.locatorCoins
        }),
        statusRefused: null === jr || void 0 === jr ? void 0 : jr.locatorNoticeRefused,
        status: (0, Tr.jsxs)(Tr.Fragment, {
          children: [(0, Tr.jsx)("span", {
            className: "LocatorKeeperBadge",
            children: Zr(`${vr}:locatorKeeperName`)
          }), null !== jr && Zr(`${vr}:${jr.locatorNoticeKey}`, {
            name: jr.locatorNoticeName
          })]
        }),
        children: [(0, Tr.jsx)("div", {
          className: "BoardTiles",
          children: Wr.locatorEntries.map((rr => (0, Tr.jsxs)(Rr, {
            icon: (0, Tr.jsx)(SQ, {
              entry: rr
            }),
            name: rr.locatorEntryName,
            selected: rr === ar,
            locked: !1,
            className: Er()("LocatorTag", {
              Armed: rr.locatorEntryArmed
            }),
            onSelect: () => {
              Sr.select(rr.locatorEntryId)
            },
            children: [(0, Tr.jsx)(sS, {
              entry: rr
            }), !rr.locatorEntryOwned && (0, Tr.jsx)(uS, {
              entry: rr,
              coins: Wr.locatorCoins,
              inTile: !0
            })]
          }, rr.locatorEntryId)))
        }), (0, Tr.jsx)(QQ, {
          view: Qr,
          controller: Sr,
          entry: ar
        })]
      })
    }

    function WQ(rr) {
      let {
        loadout: Sr,
        codex: Qr,
        locator: Zr
      } = rr;
      return (0, Tr.jsxs)(Tr.Fragment, {
        children: [(0, Tr.jsx)(iS, {
          controller: Sr
        }), (0, Tr.jsx)(sr, {
          controller: Qr
        }), (0, Tr.jsx)(ZQ, {
          controller: Zr
        })]
      })
    }
    var aQ = Qr(40092);
    class jQ {
      constructor(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.sendCommand = rr, this.budget = void 0, this.awaitingReply = !1, this.replyTimer = null, this.listeners = new Set, this.budget = new aQ.c({
          spacingMs: 0,
          now: Sr
        }), this.budget.subscribe((() => {
          this.notify()
        }))
      }
      isPending() {
        return this.awaitingReply || this.budget.isPacing()
      }
      send(rr, Sr) {
        return !this.isPending() && (this.awaitingReply = !0, this.replyTimer = setTimeout((() => {
          this.replyTimer = null, this.awaitingReply = !1, Sr(), this.notify()
        }), 8e3), this.budget.start(), this.sendCommand(rr), !0)
      }
      onReply() {
        this.awaitingReply = !1, this.clearReplyTimer()
      }
      subscribe(rr) {
        return this.listeners.add(rr), () => {
          this.listeners.delete(rr)
        }
      }
      dispose() {
        this.clearReplyTimer(), this.budget.dispose(), this.listeners.clear()
      }
      clearReplyTimer() {
        null !== this.replyTimer && (clearTimeout(this.replyTimer), this.replyTimer = null)
      }
      notify() {
        for (const rr of this.listeners) rr()
      }
    }
    var IQ = Qr(40083);
    const fQ = new Map([
      ["npc_general", tS],
      ["npc_tentacle_guy", IQ]
    ]);

    function EQ(rr) {
      const Sr = fQ.get(rr);
      if (void 0 === Sr) return null;
      const Qr = document.createElement("img");
      return Qr.src = Sr, Qr.alt = "", Qr.draggable = !1, Qr.style.imageRendering = "pixelated", Qr
    }
    const pQ = function() {
      let rr, Sr = !1,
        Qr = null,
        fr = null;
      const Er = [],
        pr = rr => {
          for (const Sr of Er) Sr !== rr && Sr.close();
          (0, Ir.y)()
        },
        xr = rr => {
          rr && (0, Ir.m)()
        },
        mr = new jQ((Sr => {
          rr.sendCommand(Sr)
        })),
        Nr = new NS((rr => {
          jr.i.Jp(mS, rr, !0)
        }), pr, xr, mr),
        Ur = new kr((rr => {
          jr.i.Jp(Gr, rr, !0)
        }), pr, xr),
        tr = new bS((rr => {
          jr.i.Jp(oS, rr, !0)
        }), pr, xr, mr);
      Er.push(Nr, Ur, tr);
      return {
        onCreate: Sr => {
          rr = Sr, Qr = (0, Ir.H)(null, {
            content: (0, Zr.createElement)(WQ, {
              loadout: Nr,
              codex: Ur,
              locator: tr
            }),
            onClose: () => {
              for (const rr of Er) rr.close()
            }
          }), fr = (0, ar.f)(EQ)
        },
        onReceivedMessageFromServer: (rr, Sr) => {
          "containmentLoadout" === rr ? Nr.vx(Sr) : "containmentLoadoutClose" === rr ? Nr.isOpen() && (Nr.close(), (0, Ir.j)()) : "containmentCodex" === rr ? Ur.vx(Sr) : "containmentLocator" === rr && tr.vx(Sr)
        },
        lx: () => {
          Sr || Wr.c.get("loadingOverlayVisible") || (Sr = !0, rr.sendCommand("containmentEntered"))
        },
        onClose: () => {
          var rr, Sr;
          null === (rr = Qr) || void 0 === rr || rr(), Qr = null, null === (Sr = fr) || void 0 === Sr || Sr(), fr = null;
          for (const Qr of Er) Qr.dispose();
          mr.dispose()
        }
      }
    }
  },
  38363: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      B: () => gr,
      F: () => Cr,
      G: () => Mr,
      H: () => Rr,
      I: () => Gr,
      e: () => fr,
      i: () => lr,
      j: () => Ir,
      l: () => qr,
      m: () => Or,
      o: () => yr,
      s: () => Hr,
      u: () => Pr,
      y: () => vr
    });
    var Zr = Qr(43);
    const Wr = {
        codeBlock: ["codeBlockIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "worldCodeButton", "exportButton", "helpButton"],
        worldCode: ["worldCodeIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "exportButton", "helpButton"]
      },
      ar = ["docsButton", "docsPanel", "docsClientOptionsTab", "docsClientOptions", "docsApiReferenceTab", "docsApiReference", "docsCallbacksTab", "docsCallbacks", "hideDocsButton"],
      jr = ["aiHelperButton", "aiPanel", "aiAskBox", "aiModelChip", "aiAnswer", "aiEdits", "aiGear", "aiNotes", "aiGameSettings", "hideAiHelperButton"],
      Ir = ar.filter((rr => "docsButton" !== rr)),
      fr = jr.filter((rr => "aiHelperButton" !== rr)),
      Er = "codeEditorTutorials",
      pr = {
        codeBlockIntro: "codeBlockIntroShown",
        worldCodeIntro: "worldCodeIntroShown"
      },
      xr = {
        welcome: "welcomeComplete",
        docsOverview: "docsOverviewComplete",
        aiHelperOverview: "aiHelperOverviewComplete"
      };
    let mr = null,
      Nr = null;
    const Ur = new Set,
      tr = new Set;
    let hr = null;
    const zr = new Set,
      Yr = new Set;

    function nr() {
      Yr.forEach((rr => {
        rr()
      }))
    }

    function er() {
      if (!mr) {
        const rr = Zr.j.getItem(Er);
        mr = {
          codeBlockIntroShown: !1,
          worldCodeIntroShown: !1,
          welcomeComplete: !1,
          docsOverviewComplete: !1,
          aiHelperOverviewComplete: !1,
          ..."object" === typeof rr && null !== rr ? rr : {}
        }
      }
      return mr
    }

    function Kr(rr) {
      const Sr = er();
      Sr[rr] || (mr = {
        ...Sr,
        [rr]: !0
      }, Zr.j.setItem(Er, mr))
    }

    function yr(rr) {
      return "docsOverview" === rr ? ar : "aiHelperOverview" === rr ? jr : Nr ? Wr[Nr] : []
    }

    function Br(rr) {
      return ("worldCodeButton" !== rr || !er().worldCodeIntroShown) && !zr.has(rr)
    }

    function Tr(rr) {
      var Sr;
      return (null === (Sr = hr) || void 0 === Sr ? void 0 : Sr.name) === rr ? hr.stepsDone : Ur
    }

    function vr(rr, Sr) {
      if (! function(rr) {
          return hr ? hr.name === rr : "welcome" === rr
        }(rr) || !Br(Sr) || Tr(rr).has(Sr)) return !1;
      if (hr) return !0;
      const Qr = pr[Sr];
      return Qr ? !er()[Qr] || tr.has(Sr) : !er()[xr[rr]]
    }

    function Or(rr) {
      var Sr;
      return null !== (Sr = yr(rr).find((Sr => vr(rr, Sr)))) && void 0 !== Sr ? Sr : null
    }

    function Lr(rr) {
      var Sr;
      Kr(xr[rr]), (null === (Sr = hr) || void 0 === Sr ? void 0 : Sr.name) === rr && (hr = null)
    }

    function lr(rr) {
      const Sr = (hr ? [hr.name] : ["welcome", "docsOverview"]).find((Sr => Or(Sr) === rr));
      if (!Sr) return;
      Tr(Sr).add(rr);
      const Qr = pr[rr];
      Qr && (Kr(Qr), hr || tr.add(rr)), null === Or(Sr) && Lr(Sr), nr()
    }

    function Xr(rr, Sr) {
      const Qr = yr(rr),
        Zr = Tr(rr);
      for (let Wr = Qr.indexOf(Sr) - 1; Wr >= 0; Wr--)
        if (Zr.has(Qr[Wr]) && Br(Qr[Wr])) return Qr[Wr];
      return null
    }

    function Pr(rr, Sr) {
      return null !== Xr(rr, Sr)
    }

    function Hr(rr, Sr) {
      const Qr = Xr(rr, Sr);
      Qr && (Tr(rr).delete(Qr), nr())
    }

    function qr(rr) {
      Lr(rr), "welcome" === rr && yr("welcome").forEach((rr => {
        const Sr = pr[rr];
        Sr && Kr(Sr)
      })), nr()
    }

    function Rr(rr) {
      hr = {
        name: rr,
        stepsDone: new Set
      }, nr()
    }

    function gr() {
      (hr || 0 !== Ur.size || 0 !== tr.size) && (hr = null, Ur.clear(), tr.clear(), nr())
    }

    function Cr(rr, Sr) {
      const Qr = Sr ? rr : Nr === rr ? null : Nr;
      Qr !== Nr && (Nr = Qr, nr())
    }

    function Mr(rr, Sr) {
      zr.has(rr) === Sr && (Sr ? zr.delete(rr) : zr.add(rr), nr())
    }

    function Gr(rr) {
      return Yr.add(rr), () => {
        Yr.delete(rr)
      }
    }
  },
  40893: (rr, Sr, Qr) => {
    var Zr = {
      "./breach-zero-uncaught.webp": 40895,
      "./breach-zero.webp": 40902,
      "./brood-father-uncaught.webp": 40906,
      "./brood-father.webp": 40909,
      "./carousel-uncaught.webp": 40916,
      "./carousel.webp": 40920,
      "./deadlock-uncaught.webp": 40927,
      "./deadlock.webp": 40931,
      "./doom-warlord-uncaught.webp": 40940,
      "./doom-warlord.webp": 40945,
      "./frost-revenant-uncaught.webp": 40951,
      "./frost-revenant.webp": 40959,
      "./hollow-choir-uncaught.webp": 40965,
      "./hollow-choir.webp": 40972,
      "./magma-warden-uncaught.webp": 40979,
      "./magma-warden.webp": 40987,
      "./patient-zero-uncaught.webp": 40992,
      "./patient-zero.webp": 40998,
      "./siege-engine-uncaught.webp": 41001,
      "./siege-engine.webp": 41007,
      "./warp-stalker-uncaught.webp": 41016,
      "./warp-stalker.webp": 41025
    };

    function Wr(rr) {
      var Sr = ar(rr);
      return Qr(Sr)
    }

    function ar(rr) {
      if (!Qr.o(Zr, rr)) {
        var Sr = new Error("Cannot find module '" + rr + "'");
        throw Sr.code = "MODULE_NOT_FOUND", Sr
      }
      return Zr[rr]
    }
    Wr.keys = function() {
      return Object.keys(Zr)
    }, Wr.resolve = ar, rr.exports = Wr, Wr.id = 40893
  },
  40895: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/breach-zero-uncaught.c7d4410f99269ac1ee2f.webp"
  },
  40902: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/breach-zero.ef5aacecf502228cd20b.webp"
  },
  40906: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/brood-father-uncaught.ee678432c71b7061fae1.webp"
  },
  40909: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/brood-father.e48391955a574c1155fa.webp"
  },
  40916: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/carousel-uncaught.a92757620f569f31d7d2.webp"
  },
  40920: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/carousel.5fc13db7958067d6e1a3.webp"
  },
  40927: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/deadlock-uncaught.feadbdbbf2d040dce5c0.webp"
  },
  40931: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/deadlock.2bcaeaa57376fd78ddcb.webp"
  },
  40940: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/doom-warlord-uncaught.b25b11d54326d386a901.webp"
  },
  40945: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/doom-warlord.d9ef07d4167ff931b0f0.webp"
  },
  40951: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/frost-revenant-uncaught.c0271636eeae988b1a40.webp"
  },
  40959: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/frost-revenant.fed6021646d7f0f81876.webp"
  },
  40965: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/hollow-choir-uncaught.7eaab76a15f82bd79558.webp"
  },
  40972: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/hollow-choir.05f9c51994aecece852a.webp"
  },
  40979: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/magma-warden-uncaught.5308736fbb8a503cdfc7.webp"
  },
  40987: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/magma-warden.cc4302a49a39ae962a31.webp"
  },
  40992: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/patient-zero-uncaught.1f9ec012a14c4dbdcc8f.webp"
  },
  40998: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/patient-zero.cc76984bb20e9f9ace76.webp"
  },
  41001: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/siege-engine-uncaught.88e0ad7fec37ba2b4a2e.webp"
  },
  41007: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/siege-engine.b2e2382e415f4ae470ac.webp"
  },
  41016: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/warp-stalker-uncaught.c3b1b82ecb18446b71b0.webp"
  },
  41025: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/warp-stalker.851972c629601b668aa7.webp"
  },
  40083: rr => {
    rr.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYElEQVR4nGNgIBIwovH/45JnRFaUGN+Comr+whq4GiZ0RVycnGAMAlAxsC0sMN2fvn9DodEBzEQGdUV5hvNnV4JpGJuPkwtTIQh4umZhZWMonDqjGCsbHcCCBkQjs0kDAPeaHpfX1eroAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);