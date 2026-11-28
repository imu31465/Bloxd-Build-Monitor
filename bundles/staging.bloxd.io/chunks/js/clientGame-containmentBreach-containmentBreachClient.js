export const id = 15;
export const ids = [15];
export const modules = {
  38095: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => jb,
      f: () => Xb,
      i: () => xb,
      l: () => Cb
    });
    var eb = Mb(1159),
      Hb = Mb.n(eb),
      pb = Mb(64),
      Vb = Mb(81),
      gb = Mb(1525),
      lb = Mb(1616),
      Lb = Mb(1516),
      Ib = Mb(1350),
      Ob = Mb(1259),
      Ub = Mb(38103),
      tb = Mb(1364);

    function Cb(bb) {
      const [wb, Mb] = (0, pb.useState)((() => (0, Ub.m)(bb)));
      return (0, pb.useEffect)((() => (Mb((0, Ub.m)(bb)), (0, Ub.K)((() => {
        Mb((0, Ub.m)(bb))
      })))), [bb]), wb
    }

    function Eb(bb, wb) {
      "function" === typeof bb ? bb(wb) : bb && (bb.current = wb)
    }

    function Fb(bb) {
      let {
        tutorial: wb,
        step: Mb,
        enabled: eb = !0
      } = bb;
      const Hb = Cb(wb);
      return eb && Hb === Mb
    }

    function Bb(bb, wb) {
      const Mb = (0, Ub.n)(bb),
        eb = Mb.indexOf(wb);
      return !Mb.slice(eb + 1).some((wb => (0, Ub.v)(bb, wb)))
    }

    function sb(bb, wb, Mb, eb) {
      let {
        tutorial: Hb,
        step: pb,
        waitForClick: Vb = !1,
        onPrevious: gb
      } = bb;
      const lb = wb && (0, Ub.r)(Hb, pb),
        Lb = wb && !Bb(Hb, pb),
        Ob = Vb ? eb : Mb;
      let tb = null;
      lb ? tb = () => {
        null === gb || void 0 === gb || gb(), (0, Ub.o)(Hb, pb)
      } : Lb && (tb = () => {
        (0, Ub.j)(Hb)
      }), (0, Ib.r)("popup", null !== Ob && void 0 !== Ob ? Ob : Mb, tb, wb && null !== Ob, null, lb ? void 0 : "controller:menusSkipTutorial")
    }

    function mb(bb) {
      let {
        tutorial: wb,
        step: Mb,
        text: eb,
        waitForClick: Hb = !1,
        onPrevious: pb
      } = bb;
      const {
        t: Vb
      } = (0, Ob.C)(), gb = Bb(wb, Mb);
      return (0, tb.jsxs)(tb.Fragment, {
        children: [(0, tb.jsx)("div", {
          className: "TutorialStepText",
          children: eb
        }), (0, tb.jsxs)("div", {
          className: "TutorialStepButtons",
          children: [(0, Ub.r)(wb, Mb) && (0, tb.jsx)(lb.j, {
            className: "TutorialStepButton",
            onClick: () => {
              null === pb || void 0 === pb || pb(), (0, Ub.o)(wb, Mb)
            },
            children: Vb("tutorial:back")
          }), !Hb && (0, tb.jsx)(lb.f, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, Ub.f)(Mb)
            },
            padDefaultFocus: !0,
            children: Vb(gb ? "tutorial:done" : "tutorial:next")
          }), !gb && (0, tb.jsx)(lb.j, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, Ub.j)(wb)
            },
            children: Vb("tutorial:skip")
          })]
        })]
      })
    }
    const hb = 6;

    function zb(bb) {
      let {
        rect: wb,
        margin: Mb
      } = bb;
      const eb = Math.max(0, wb.top - Mb),
        Hb = wb.bottom + Mb,
        pb = Math.max(0, wb.left - Mb),
        Vb = wb.right + Mb;
      return (0, tb.jsxs)(tb.Fragment, {
        children: [(0, tb.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: 0,
            left: 0,
            right: 0,
            height: eb
          }
        }), (0, tb.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: Hb,
            left: 0,
            right: 0,
            bottom: 0
          }
        }), (0, tb.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: eb,
            left: 0,
            width: pb,
            height: Hb - eb
          }
        }), (0, tb.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: eb,
            left: Vb,
            right: 0,
            height: Hb - eb
          }
        })]
      })
    }

    function Xb(bb) {
      let {
        target: wb,
        placement: Mb,
        boxRef: eb,
        className: lb,
        spotlight: Ib = !0,
        spotlightMargin: Ob = hb,
        children: Ub
      } = bb;
      const {
        getArrowProps: Cb,
        getTooltipProps: Eb,
        setTooltipRef: Fb,
        setTriggerRef: Bb,
        update: sb
      } = (0, gb.e)({
        placement: Mb,
        trigger: null,
        visible: !0,
        interactive: !0,
        closeOnOutsideClick: !1,
        offset: [0, Ob]
      });
      (0, pb.useLayoutEffect)((() => {
        Bb(wb)
      }), [wb, Bb]);
      const mb = function(bb, wb) {
        const [Mb, eb] = (0, pb.useState)(null);
        return (0, pb.useEffect)((() => {
          if (!wb || !bb) return void eb(null);
          let Mb = 0,
            Hb = null;
          const pb = () => {
            const wb = bb.getBoundingClientRect();
            Hb && wb.left === Hb.left && wb.top === Hb.top && wb.width === Hb.width && wb.height === Hb.height || (Hb = wb, eb(wb)), Mb = requestAnimationFrame(pb)
          };
          return pb(), () => {
            cancelAnimationFrame(Mb)
          }
        }), [bb, wb]), Mb
      }(wb, Ib);
      (0, pb.useEffect)((() => {
        null === sb || void 0 === sb || sb()
      }), [mb, sb]), (0, pb.useEffect)((() => {
        if (Ib || !wb || !sb) return;
        const bb = new ResizeObserver((() => {
          sb()
        }));
        return bb.observe(wb), wb.parentElement && bb.observe(wb.parentElement), () => {
          bb.disconnect()
        }
      }), [wb, Ib, sb]), (0, pb.useEffect)((() => {
        Ib && (null === wb || void 0 === wb || wb.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        }))
      }), [wb, Ib]);
      const Xb = (0, pb.useCallback)((bb => {
        Fb(bb), eb && (eb.current = bb)
      }), [Fb, eb]);
      return (0, Vb.createPortal)((0, tb.jsxs)(tb.Fragment, {
        children: [mb && (0, tb.jsx)(zb, {
          rect: mb,
          margin: Ob
        }), (0, tb.jsxs)("div", {
          ref: Xb,
          ...Eb({
            className: Hb()("tooltip-container SmallTextLight TutorialStep", lb)
          }),
          children: [Ub, (0, tb.jsx)("div", {
            ...Cb({
              className: "tooltip-arrow"
            })
          })]
        })]
      }), (0, Lb.h)())
    }
    const xb = (0, pb.forwardRef)((function(bb, wb) {
      let {
        placement: Mb = "right",
        children: eb,
        ...Hb
      } = bb;
      const Vb = Fb(Hb),
        gb = (0, pb.useRef)(null),
        lb = (0, pb.useRef)(null);
      sb(Hb, Vb, gb, lb);
      const [Lb, Ib] = (0, pb.useState)(null), Ob = eb.ref, Ub = (0, pb.useCallback)((bb => {
        lb.current = bb, Ib(bb), Eb(wb, bb), Eb(Ob, bb)
      }), [wb, Ob]);
      return (0, tb.jsxs)(tb.Fragment, {
        children: [(0, pb.cloneElement)(eb, {
          ref: Ub
        }), Vb && (0, tb.jsx)(Xb, {
          target: Lb,
          placement: Mb,
          boxRef: gb,
          children: (0, tb.jsx)(mb, {
            ...Hb
          })
        })]
      })
    }));

    function jb(bb) {
      const wb = Fb(bb),
        Mb = (0, pb.useRef)(null);
      return sb(bb, wb, Mb, null), wb ? (0, Vb.createPortal)((0, tb.jsx)("div", {
        className: "TutorialCentreBackdrop",
        children: (0, tb.jsx)("div", {
          ref: Mb,
          className: "tooltip-container SmallTextLight TutorialStep TutorialCentreStep",
          children: (0, tb.jsx)(mb, {
            ...bb
          })
        })
      }), (0, Lb.h)()) : null
    }
  },
  39819: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Vb
    });
    const eb = 4,
      Hb = 12e3,
      pb = 1e3;
    class Vb {
      constructor() {
        let {
          limit: bb = eb,
          windowMs: wb = Hb,
          spacingMs: Mb = pb,
          now: Vb = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = bb, this.windowMs = wb, this.spacingMs = Mb, this.now = Vb
      }
      isPacing() {
        return !this.canSendPriority() || this.isPriorityWaiting()
      }
      canSendPriority() {
        return this.prune(), this.sent.length < this.limit && this.now() - this.lastSentAt >= this.spacingMs
      }
      tryStart() {
        for (const bb of this.priority) bb.flush();
        return !this.isPacing() && (this.start(), !0)
      }
      start() {
        this.prune();
        const bb = this.now();
        this.sent.push(bb), this.lastSentAt = bb, this.schedule(), this.notify()
      }
      addPriority(bb) {
        return this.priority.add(bb), () => {
          this.priority.delete(bb)
        }
      }
      subscribe(bb) {
        return this.listeners.add(bb), () => {
          this.listeners.delete(bb)
        }
      }
      dispose() {
        this.clearTimer(), this.sent = [], this.listeners.clear(), this.priority.clear()
      }
      isPriorityWaiting() {
        for (const bb of this.priority)
          if (bb.waiting()) return !0;
        return !1
      }
      prune() {
        const bb = this.now() - this.windowMs;
        for (; this.sent.length > 0 && this.sent[0] <= bb;) this.sent.shift()
      }
      schedule() {
        this.clearTimer();
        const bb = this.now(),
          wb = this.lastSentAt + this.spacingMs,
          Mb = Math.min(wb > bb ? wb : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        Mb !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, Mb - bb)))
      }
      notify() {
        for (const bb of this.listeners) bb()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  39780: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => eb
    });
    class eb {
      constructor(bb, wb, Mb) {
        this.iI = bb, this.beforeOpen = wb, this.afterClose = Mb, this.open = !1, this.BC = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.BC && (this.open = !0, this.beforeOpen(this), this.emit())
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
      closePanel(bb) {
        this.open = !1, this.onClosed(), this.emit(), this.afterClose(bb)
      }
      onClosed() {}
      dispose() {
        this.open = !1, this.emit(), this.BC = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.BC || (this.snapshot = this.buildSnapshot(), this.iI(this.snapshot))
      }
    }
  },
  40672: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      default: () => OM
    });
    var eb = Mb(64);
    var Hb = Mb(26),
      pb = Mb(2125),
      Vb = Mb(29),
      gb = Mb(3531),
      lb = Mb(1159),
      Lb = Mb.n(lb),
      Ib = Mb(1611),
      Ob = Mb(1259),
      Ub = Mb(5384),
      tb = Mb(1501),
      Cb = Mb(1616),
      Eb = Mb(2130),
      Fb = Mb(1516),
      Bb = Mb(2116),
      sb = Mb(2183),
      mb = Mb(236);
    const hb = Mb(40675),
      zb = Object.fromEntries(hb.keys().map((bb => [bb.replace(/^\.\/(.*)\.webp$/, "$1"), hb(bb)]))),
      Xb = new Set;

    function xb(bb, wb) {
      const Mb = wb ? bb : `${bb}-uncaught`,
        eb = (0, mb.c)(zb, Mb);
      return void 0 !== eb || Xb.has(Mb) || (Xb.add(Mb), console.warn(`Containment Breach has no mugshot ${Mb}: run tools/harnessCutouts/ContainmentMugshotCapture.ts`)), eb
    }
    var jb = Mb(1364);
    const Kb = "containmentBreach",
      rb = "Gold Coin";

    function Rb(bb) {
      let {
        open: wb,
        onDismiss: Mb,
        title: eb,
        className: Hb,
        decor: pb,
        headerExtra: Vb,
        status: gb,
        statusRefused: lb = !1,
        children: Ib
      } = bb;
      const Ob = `${Hb}Title`;
      return (0, jb.jsx)(Ub.e, {
        show: wb,
        close: Mb,
        togglePointerLock: !1,
        className: "ContainmentBoardOverlay",
        children: (0, jb.jsxs)("section", {
          className: Lb()("ContainmentBoardPanel", Hb),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": Ob,
          children: [pb && (0, jb.jsx)("div", {
            className: "BoardDecor",
            "aria-hidden": "true",
            children: pb
          }), (0, jb.jsxs)("header", {
            className: "BoardHeader",
            children: [(0, jb.jsx)("h2", {
              id: Ob,
              className: "VisuallyHidden",
              children: eb
            }), Vb, (0, jb.jsx)(Cb.l, {
              onClick: Mb
            })]
          }), (0, jb.jsx)("div", {
            className: "BoardBody",
            children: Ib
          }), void 0 !== gb && (0, jb.jsx)("footer", {
            className: Lb()("BoardStatus", {
              Refused: lb
            }),
            children: gb
          })]
        })
      })
    }

    function Db(bb) {
      let {
        itemName: wb
      } = bb;
      return (0, jb.jsx)(Eb.c, {
        itemName: wb,
        amount: 0
      })
    }

    function cb(bb) {
      let {
        anomalyId: wb,
        caught: Mb
      } = bb;
      const Hb = (0, eb.useRef)(null);
      return (0, tb.c)(Hb, !Mb), (0, jb.jsx)("span", {
        ref: Hb,
        className: Lb()("BoardMugshot", {
          Uncaught: !Mb
        }),
        children: (0, jb.jsx)("img", {
          src: xb(wb, Mb),
          alt: "",
          draggable: !1
        })
      })
    }

    function Yb(bb) {
      let {
        itemName: wb,
        amount: Mb,
        dg: eb,
        inTile: Hb = !1
      } = bb;
      return (0, jb.jsx)(Fb.d, {
        delayShow: 200,
        hoverOnly: Hb,
        placement: "top",
        tooltipClassName: "BoardChipTooltipBox",
        tooltipInner: (0, jb.jsx)(fb, {
          itemName: wb,
          amount: Mb,
          dg: eb
        }),
        children: (0, jb.jsxs)("span", {
          className: Lb()("BoardChip", {
            Short: void 0 !== eb && eb < Mb
          }),
          children: [(0, jb.jsx)("span", {
            className: "BoardChipIcon",
            children: (0, jb.jsx)(Db, {
              itemName: wb
            })
          }), Mb.toLocaleString()]
        })
      })
    }
    const Zb = /^(.*?)\s*Salvaged from (?:an? )?(.+?)\.?$/;

    function fb(bb) {
      var wb;
      let {
        itemName: Mb,
        amount: eb,
        dg: Hb
      } = bb;
      const {
        t: pb
      } = (0, Ob.C)(), Vb = (0, sb.e)("itemInfo", (bb => bb[Mb])), {
        lore: gb,
        droppedBy: lb
      } = function(bb) {
        if ("string" !== typeof bb) return {
          lore: bb,
          droppedBy: null
        };
        const wb = Zb.exec(bb);
        return null === wb ? {
          lore: bb,
          droppedBy: null
        } : {
          lore: "" === wb[1] ? void 0 : wb[1],
          droppedBy: wb[2]
        }
      }(null === Vb || void 0 === Vb ? void 0 : Vb.description);
      return (0, jb.jsxs)("div", {
        className: "BoardChipTooltip",
        children: [(0, jb.jsxs)("div", {
          className: "BoardChipTooltipHeader",
          children: [(0, jb.jsx)("span", {
            className: "BoardChipTooltipIcon",
            children: (0, jb.jsx)(Db, {
              itemName: Mb
            })
          }), (0, jb.jsx)(Bb.d, {
            text: null !== (wb = null === Vb || void 0 === Vb ? void 0 : Vb.displayName) && void 0 !== wb ? wb : Mb,
            className: "BoardChipTooltipName"
          })]
        }), (void 0 !== gb || null !== lb) && (0, jb.jsxs)("div", {
          className: "BoardChipTooltipBody",
          children: [void 0 !== gb && (0, jb.jsx)(Bb.d, {
            text: gb,
            className: "BoardChipTooltipDescription"
          }), null !== lb && (0, jb.jsxs)("span", {
            className: "BoardChipTooltipSource",
            children: [(0, jb.jsx)("span", {
              className: "BoardChipTooltipLabel",
              children: pb(`${Kb}:chipDroppedBy`)
            }), lb]
          })]
        }), void 0 !== Hb && (0, jb.jsxs)("div", {
          className: Lb()("BoardChipTooltipHeld", {
            Short: Hb < eb
          }),
          children: [(0, jb.jsx)("span", {
            className: "BoardChipTooltipLabel",
            children: pb(`${Kb}:chipYouHave`)
          }), (0, jb.jsxs)("span", {
            className: "BoardChipTooltipCount",
            children: [(0, jb.jsx)("span", {
              className: "BoardChipTooltipHeldAmount",
              children: Hb.toLocaleString()
            }), ` / ${eb.toLocaleString()}`]
          }), (0, jb.jsx)("span", {
            className: "BoardChipTooltipMeter",
            children: (0, jb.jsx)("span", {
              style: {
                width: (eb > 0 ? 100 * Math.min(1, Hb / eb) : 100) + "%"
              }
            })
          })]
        })]
      })
    }

    function Ab(bb) {
      let {
        icon: wb,
        name: Mb,
        selected: eb,
        locked: Hb,
        className: pb,
        buttonRef: Vb,
        onSelect: gb,
        children: lb
      } = bb;
      return (0, jb.jsxs)("button", {
        ref: Vb,
        type: "button",
        className: Lb()("BoardTile", pb, {
          Selected: eb,
          Locked: Hb
        }),
        onClick: gb,
        children: [(0, jb.jsx)("span", {
          className: "BoardTileIcon",
          children: wb
        }), (0, jb.jsx)("span", {
          className: "BoardTileName",
          children: Mb
        }), lb]
      })
    }

    function Wb(bb) {
      let {
        icon: wb,
        name: Mb,
        children: eb
      } = bb;
      return (0, jb.jsxs)("header", {
        className: "BoardDetailHeader",
        children: [(0, jb.jsx)("span", {
          className: "BoardDetailIcon",
          children: wb
        }), (0, jb.jsxs)("div", {
          className: "BoardDetailHeading",
          children: [(0, jb.jsx)("h3", {
            children: Mb
          }), (0, jb.jsx)("span", {
            className: "BoardDetailStatus",
            children: eb
          })]
        })]
      })
    }

    function Jb(bb) {
      let {
        coins: wb,
        children: Mb
      } = bb;
      return (0, jb.jsxs)("div", {
        className: "BoardWallet",
        children: [(0, jb.jsx)(Yb, {
          itemName: rb,
          amount: wb
        }), Mb]
      })
    }
    var Sb = Mb(39780);
    const Nb = "containmentCodexView";
    class vb extends Sb.e {
      constructor() {
        super(...arguments), this.entries = [], this.selectedId = "", this.snapshot = this.buildSnapshot(), this.select = bb => {
          this.selectedId = bb, this.emit()
        }
      }
      EO(bb) {
        this.entries = bb.codexEntries, this.selectedId = this.entries[0].codexEntryId, this.showOrRefresh()
      }
      buildSnapshot() {
        return {
          open: this.open,
          entries: this.entries,
          selectedId: this.selectedId
        }
      }
    }
    const Qb = {
        codexAnyDifficulty: `${Kb}:codexNeedsAny`,
        codexNormalOnly: `${Kb}:codexNeedsNormal`,
        codexHardOnly: `${Kb}:codexNeedsHard`
      },
      Gb = {
        codexContained: "Contained",
        codexEncountered: "Sighted",
        codexUnidentified: "Unknown"
      },
      qb = {
        codexContained: `${Kb}:codexContainedBadge`,
        codexEncountered: `${Kb}:codexEncounteredBadge`,
        codexUnidentified: `${Kb}:codexUnidentifiedBadge`
      },
      ab = ["94%", "81%", "88%", "46%", "72%"];

    function ib(bb) {
      let {
        entry: wb
      } = bb;
      const {
        t: Mb
      } = (0, Ob.C)();
      return (0, jb.jsx)("span", {
        className: Lb()("BoardBadge", Gb[wb.codexEntryState]),
        children: Mb(qb[wb.codexEntryState])
      })
    }

    function ub(bb) {
      const {
        t: wb
      } = (0, Ob.C)();
      return "codexUnidentified" === bb.codexEntryState ? wb(`${Kb}:codexUnidentifiedName`) : bb.codexEntryName
    }

    function db(bb) {
      let {
        entry: wb
      } = bb;
      return "codexUnidentified" === wb.codexEntryState ? (0, jb.jsx)(Db, {
        itemName: "Book"
      }) : (0, jb.jsxs)("span", {
        className: "CodexPhoto",
        children: [(0, jb.jsx)(cb, {
          anomalyId: wb.codexEntryId,
          caught: "codexContained" === wb.codexEntryState
        }), (0, jb.jsx)("img", {
          className: "CodexPaperclip",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAMCAYAAACulacQAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGNggIIXb97/X7V57/+Wvtn/GZDBqs17UQTgClahScBATHrlf5ySeHWimo9NMbokCp9OkmD/oasGCaJLAAC5ZUIBS85GiAAAAABJRU5ErkJggg==",
          alt: "",
          draggable: !1
        })]
      })
    }

    function Pb(bb) {
      let {
        entry: wb,
        selected: Mb,
        onSelect: eb
      } = bb;
      const Hb = "codexUnidentified" === wb.codexEntryState;
      return (0, jb.jsxs)(Ab, {
        icon: (0, jb.jsx)(db, {
          entry: wb
        }),
        name: ub(wb),
        selected: Mb,
        locked: Hb,
        className: Lb()("CodexFolder", Gb[wb.codexEntryState]),
        onSelect: () => {
          eb(wb.codexEntryId)
        },
        children: [!Hb && (0, jb.jsx)(ib, {
          entry: wb
        }), Hb && (0, jb.jsx)("img", {
          className: "CodexSeal",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAARElEQVR4nGNggIIGHp7/MAzjw+TAnMf+/mB8RkQEjOGKYZLIgsiK4AqQJZA1gBXAOHgVwCRQJJEdCVOEYj8yQPciTAEAz0hgyamUqskAAAAASUVORK5CYII=",
          alt: "",
          draggable: !1
        })]
      })
    }

    function nb(bb) {
      let {
        count: wb
      } = bb;
      const Mb = [];
      for (let eb = Math.min(wb, 25); eb > 0; eb -= 5) Mb.push(Math.min(eb, 5));
      return (0, jb.jsx)("span", {
        className: "CodexTallyMarks",
        "aria-hidden": "true",
        children: Mb.map(((bb, wb) => (0, jb.jsx)("span", {
          className: Lb()("CodexTallyGroup", {
            Gate: 5 === bb
          }),
          children: Array.from({
            length: Math.min(bb, 4)
          }, ((bb, wb) => (0, jb.jsx)("span", {
            className: "CodexTallyMark"
          }, wb)))
        }, wb)))
      })
    }

    function yb(bb) {
      let {
        contained: wb,
        total: Mb
      } = bb;
      const {
        t: eb
      } = (0, Ob.C)();
      return (0, jb.jsxs)("div", {
        className: "CodexProgress",
        children: [eb(`${Kb}:codexProgress`, {
          contained: String(wb),
          total: String(Mb)
        }), (0, jb.jsx)("span", {
          className: "CodexProgressMeter",
          children: (0, jb.jsx)("span", {
            style: {
              width: wb / Mb * 100 + "%"
            }
          })
        })]
      })
    }

    function ob(bb) {
      let {
        entry: wb,
        fileNumber: Mb
      } = bb;
      const {
        t: eb
      } = (0, Ob.C)(), Hb = "codexContained" === wb.codexEntryState;
      return (0, jb.jsx)("section", {
        className: "BoardDetail",
        children: (0, jb.jsxs)("article", {
          className: Lb()("CodexDossier", Gb[wb.codexEntryState]),
          children: [(0, jb.jsx)("span", {
            className: "CodexFileNumber",
            children: eb(`${Kb}:codexFileNumber`, {
              number: String(Mb).padStart(3, "0")
            })
          }), (0, jb.jsx)(Wb, {
            icon: (0, jb.jsx)(db, {
              entry: wb
            }),
            name: ub(wb),
            children: (0, jb.jsx)(ib, {
              entry: wb
            })
          }), Hb && (0, jb.jsxs)(jb.Fragment, {
            children: [(0, jb.jsx)("p", {
              className: "BoardDescription",
              children: wb.codexEntryLore
            }), (0, jb.jsxs)("p", {
              className: "CodexTally",
              children: [eb(`${Kb}:codexContainments`, {
                count: String(wb.codexEntryContainedCount)
              }), (0, jb.jsx)(nb, {
                count: wb.codexEntryContainedCount
              })]
            }), (0, jb.jsx)("span", {
              className: "CodexClosedStamp",
              "aria-hidden": "true",
              children: eb(`${Kb}:codexContainedBadge`)
            })]
          }), !Hb && (0, jb.jsxs)(jb.Fragment, {
            children: [(0, jb.jsxs)("div", {
              className: "CodexRedaction",
              children: [ab.map((bb => (0, jb.jsx)("span", {
                className: "CodexRedactedLine",
                style: {
                  width: bb
                }
              }, bb))), (0, jb.jsx)("p", {
                className: "CodexRedacted",
                children: eb(`${Kb}:codexRedacted`)
              })]
            }), "" !== wb.codexEntryHint && (0, jb.jsxs)("aside", {
              className: "CodexNote",
              children: [(0, jb.jsx)("h4", {
                children: eb(`${Kb}:codexHintLabel`)
              }), (0, jb.jsx)("p", {
                children: wb.codexEntryHint
              })]
            }), (0, jb.jsx)("p", {
              className: "CodexClearance",
              children: eb(Qb[wb.codexEntryDifficulty])
            })]
          })]
        })
      })
    }

    function Tb(bb) {
      let {
        controller: wb
      } = bb;
      const Mb = (0, Ib.h)(Nb, wb.getSnapshot()),
        {
          t: eb
        } = (0, Ob.C)();
      if (0 === Mb.entries.length) return null;
      const Hb = Mb.entries.find((bb => bb.codexEntryId === Mb.selectedId)),
        pb = Mb.entries.filter((bb => "codexContained" === bb.codexEntryState)).length,
        Vb = Mb.entries.map((bb => bb.codexEntryId)).sort().indexOf(Hb.codexEntryId) + 1;
      return (0, jb.jsxs)(Rb, {
        open: Mb.open,
        onDismiss: wb.dismiss,
        title: eb(`${Kb}:codexTitle`),
        className: "ContainmentCodexPanel",
        headerExtra: (0, jb.jsx)(yb, {
          contained: pb,
          total: Mb.entries.length
        }),
        children: [(0, jb.jsx)("div", {
          className: "BoardTiles",
          children: Mb.entries.map((bb => (0, jb.jsx)(Pb, {
            entry: bb,
            selected: bb === Hb,
            onSelect: wb.select
          }, bb.codexEntryId)))
        }), (0, jb.jsx)(ob, {
          entry: Hb,
          fileNumber: Vb
        })]
      })
    }
    var kb = Mb(382);
    class bw extends Sb.e {
      constructor(bb, wb, Mb, eb, Hb, pb) {
        super(bb, wb, Mb), this.pacer = eb, this.command = Hb, this.predict = pb, this.board = null, this.confirmed = null, this.selectedId = "", this.notice = null, this.unsubscribePacer = void 0, this.select = bb => {
          this.selectedId = bb, this.emit()
        }, this.act = (bb, wb) => {
          if (!this.open || null === this.board || !this.pacer.send(`${this.command} ${bb} ${wb}`, this.rollBack)) return;
          const Mb = this.predict(this.board, bb, wb);
          null !== Mb && (this.board = Mb.board, this.notice = Mb.notice, this.emit())
        }, this.rollBack = () => {
          this.board !== this.confirmed && (this.board = this.confirmed, this.notice = null)
        }, this.unsubscribePacer = eb.subscribe((() => {
          this.emit()
        }))
      }
      EO(bb) {
        const wb = this.messageOpens(bb);
        if (wb && this.open) return this.board === this.confirmed && (this.board = bb), this.confirmed = bb, void this.emit();
        if (this.board = bb, this.confirmed = bb, this.pacer.onReply(), wb) return this.notice = null, this.selectedId = this.openingSelection(bb), void this.show();
        const Mb = this.messageNotice(bb);
        null !== Mb && (this.notice = Mb), this.emit()
      }
      dispose() {
        this.unsubscribePacer(), super.dispose()
      }
      onClosed() {
        this.notice = null
      }
    }

    function ww(bb, wb) {
      return bb.loadoutCoins >= wb.loadoutCostCoins && wb.loadoutCostParts.every((wb => function(bb, wb) {
        return Mw(bb, wb).loadoutHeldPartAmount
      }(bb, wb.loadoutPartCurrency) >= wb.loadoutPartAmount))
    }

    function Mw(bb, wb) {
      return bb.loadoutHeldParts.find((bb => bb.loadoutHeldPartCurrency === wb))
    }

    function ew(bb, wb) {
      return bb.loadoutSlots.find((bb => bb.loadoutSlotKind === wb))
    }

    function Hw(bb) {
      return bb.loadoutPerks.filter((bb => bb.loadoutPerkEquipped)).length >= bb.loadoutMaxPerks
    }

    function pw(bb, wb, Mb) {
      for (const Hb of bb.loadoutSlots) {
        const eb = Hb.loadoutSlotOptions.find((bb => bb.loadoutOptionId === Mb));
        if (eb) return "loadoutArmour" === Hb.loadoutSlotKind ? gw(bb, Hb, eb, wb) : Vw(bb, Hb, eb, wb)
      }
      const eb = bb.loadoutPerks.find((bb => bb.loadoutPerkId === Mb));
      return eb ? function(bb, wb, Mb) {
        const eb = wb.loadoutPerkOwned,
          Hb = wb.loadoutPerkEquipped,
          pb = wb.loadoutPerkName,
          Vb = Hw(bb);
        if ("loadoutUnlock" === Mb) {
          if (eb || !ww(bb, wb.loadoutPerkCost)) return null;
          const Mb = {
            ...wb,
            loadoutPerkOwned: !0,
            loadoutPerkEquipped: !Vb
          };
          return {
            board: Lw(Iw(bb, wb.loadoutPerkCost), Mb),
            notice: Ow(Vb ? "loadoutNoticeUnlockedNoRoom" : "loadoutNoticeUnlocked", pb)
          }
        }
        if ("loadoutUpgrade" === Mb || !eb || "loadoutEquip" === Mb === Hb || !Hb && Vb) return null;
        return {
          board: Lw(bb, {
            ...wb,
            loadoutPerkEquipped: !Hb
          }),
          notice: Ow(Hb ? "loadoutNoticeUnequipped" : "loadoutNoticeEquipped", pb)
        }
      }(bb, eb, wb) : null
    }

    function Vw(bb, wb, Mb, eb) {
      const Hb = Mb.loadoutOptionOwnedTier,
        pb = Mb.loadoutOptionName;
      if ("loadoutEquip" === eb) return 0 === Hb ? null : {
        board: lw(bb, wb, Mb.loadoutOptionId, null),
        notice: Ow("loadoutNoticeEquipped", pb)
      };
      const Vb = "loadoutUnlock" === eb;
      if (Vb && 0 !== Hb || "loadoutUpgrade" === eb && (0 === Hb || Hb >= Mb.loadoutOptionTiers.length) || "loadoutUnequip" === eb) return null;
      const gb = Mb.loadoutOptionTiers[Hb].loadoutTierCost;
      if (!ww(bb, gb)) return null;
      const lb = {
          ...Mb,
          loadoutOptionOwnedTier: Hb + 1
        },
        Lb = Vb ? Mb.loadoutOptionId : wb.loadoutSlotEquippedId;
      return {
        board: lw(Iw(bb, gb), wb, Lb, lb),
        notice: Vb ? Ow("loadoutNoticeUnlocked", pb) : Ow("loadoutNoticeUpgraded", pb, Hb + 1)
      }
    }

    function gw(bb, wb, Mb, eb) {
      const Hb = Mb.loadoutOptionOwnedTier > 0,
        pb = Mb.loadoutOptionName;
      if ("loadoutEquip" === eb && Hb) return {
        board: lw(bb, wb, Mb.loadoutOptionId, null),
        notice: Ow("loadoutNoticeEquipped", pb)
      };
      const Vb = Mb.loadoutOptionTiers[0].loadoutTierCost;
      return "loadoutUnlock" !== eb || Hb || !ww(bb, Vb) ? null : {
        board: lw(Iw(bb, Vb), wb, Mb.loadoutOptionId, {
          ...Mb,
          loadoutOptionOwnedTier: 1
        }),
        notice: Ow("loadoutNoticeUnlocked", pb)
      }
    }

    function lw(bb, wb, Mb, eb) {
      const Hb = {
        ...wb,
        loadoutSlotEquippedId: Mb,
        loadoutSlotOptions: wb.loadoutSlotOptions.map((bb => null !== eb && bb.loadoutOptionId === eb.loadoutOptionId ? eb : bb))
      };
      return {
        ...bb,
        loadoutSlots: bb.loadoutSlots.map((bb => bb === wb ? Hb : bb))
      }
    }

    function Lw(bb, wb) {
      return {
        ...bb,
        loadoutPerks: bb.loadoutPerks.map((bb => bb.loadoutPerkId === wb.loadoutPerkId ? wb : bb))
      }
    }

    function Iw(bb, wb) {
      return {
        ...bb,
        loadoutCoins: bb.loadoutCoins - wb.loadoutCostCoins,
        loadoutHeldParts: bb.loadoutHeldParts.map((bb => {
          const Mb = wb.loadoutCostParts.find((wb => wb.loadoutPartCurrency === bb.loadoutHeldPartCurrency));
          return Mb ? {
            ...bb,
            loadoutHeldPartAmount: bb.loadoutHeldPartAmount - Mb.loadoutPartAmount
          } : bb
        }))
      }
    }

    function Ow(bb, wb) {
      return {
        loadoutNoticeKey: bb,
        loadoutNoticeRefused: !1,
        loadoutNoticeName: wb,
        loadoutNoticeTier: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
      }
    }
    const Uw = "containmentLoadoutView";
    class tw extends bw {
      constructor(bb, wb, Mb, eb) {
        super(bb, wb, Mb, eb, "loadout", pw), this.slot = "loadoutPrimary", this.snapshot = this.buildSnapshot(), this.selectSlot = bb => {
          this.slot = bb, this.selectedId = Cw(this.board, bb), this.emit()
        }
      }
      messageOpens(bb) {
        return bb.loadoutMessageOpens
      }
      messageNotice(bb) {
        return bb.loadoutNotice
      }
      openingSelection(bb) {
        return Cw(bb, this.slot)
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

    function Cw(bb, wb) {
      if ("loadoutPerks" === wb) {
        var Mb;
        const wb = bb.loadoutPerks;
        return (null !== (Mb = wb.find((bb => bb.loadoutPerkEquipped))) && void 0 !== Mb ? Mb : wb[0]).loadoutPerkId
      }
      return ew(bb, wb).loadoutSlotEquippedId
    }
    const Ew = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAY0lEQVR4nGNgIAP8x4FRwP/sFt3/EYU6YBqGIwp1MBSDBUH4/3nW//83csD5DOgKfeKNsWIMhV+///qvbOT7/87cMjCG8TEUgiSLqlpRMEgMQ+HJvgy4aTAMEsPqc2KChyAAAFxNbnylK5O6AAAAAElFTkSuQmCC";
    var Fw = Mb(38095),
      Bw = Mb(1350);
    const sw = {
        loadoutPrimary: `${Kb}:loadoutSlotPrimary`,
        loadoutSecondary: `${Kb}:loadoutSlotSecondary`,
        loadoutOffensive: `${Kb}:loadoutSlotOffensive`,
        loadoutSelfHelp: `${Kb}:loadoutSlotSelfHelp`,
        loadoutArmour: `${Kb}:loadoutSlotArmour`,
        loadoutPerks: `${Kb}:loadoutSlotPerks`
      },
      mw = {
        section: "right",
        Vt: "bottom",
        act: "top"
      },
      hw = (0, eb.createContext)({
        step: null,
        targetRef: () => {}
      });

    function zw() {
      const {
        step: bb,
        targetRef: wb
      } = (0, eb.useContext)(hw);
      return (Mb, eb) => (null === bb || void 0 === bb ? void 0 : bb.kind) === Mb && bb.id === eb ? wb : void 0
    }

    function Xw(bb, wb) {
      const Mb = wb.loadoutTargetId;
      if ("loadoutPerks" === wb.loadoutTargetSection) {
        const wb = bb.loadoutPerks.find((bb => bb.loadoutPerkId === Mb));
        return {
          name: wb.loadoutPerkName,
          owned: wb.loadoutPerkOwned,
          equipped: wb.loadoutPerkEquipped
        }
      }
      const eb = ew(bb, wb.loadoutTargetSection),
        Hb = eb.loadoutSlotOptions.find((bb => bb.loadoutOptionId === Mb));
      return {
        name: Hb.loadoutOptionName,
        owned: Hb.loadoutOptionOwnedTier > 0,
        equipped: eb.loadoutSlotEquippedId === Mb
      }
    }

    function xw(bb, wb, Mb, eb) {
      const [Hb, pb] = bb(`${Kb}:${wb}`, {
        [Mb]: "\x01"
      }).split("\x01");
      return (0, jb.jsxs)(jb.Fragment, {
        children: [Hb, (0, jb.jsx)("span", {
          className: "LoadoutWalkthroughName",
          children: eb
        }), pb]
      })
    }

    function jw(bb) {
      let {
        view: wb,
        onDismiss: Mb,
        children: Hb
      } = bb;
      const {
        t: pb
      } = (0, Ob.C)(), Vb = wb.loadout, gb = wb.open ? Vb.loadoutWalkthrough.map((bb => ({
        target: bb,
        info: Xw(Vb, bb)
      }))).find((bb => {
        let {
          info: wb
        } = bb;
        return !wb.equipped
      })) : void 0;
      let lb = null,
        Lb = null;
      if (void 0 !== gb) {
        const {
          target: bb,
          info: Mb
        } = gb;
        wb.slot !== bb.loadoutTargetSection ? (lb = {
          kind: "section",
          id: bb.loadoutTargetSection
        }, Lb = xw(pb, "loadoutWalkthroughSection", "section", pb(sw[bb.loadoutTargetSection]))) : wb.selectedId !== bb.loadoutTargetId ? (lb = {
          kind: "Vt",
          id: bb.loadoutTargetId
        }, Lb = xw(pb, "loadoutWalkthroughPick", "name", Mb.name)) : (lb = {
          kind: "act",
          id: bb.loadoutTargetId
        }, Lb = xw(pb, Mb.owned ? "loadoutWalkthroughEquip" : "loadoutWalkthroughUnlock", "name", Mb.name))
      }
      const Ib = null === lb ? null : function(bb) {
          return `${bb.kind}:${bb.id}`
        }(lb),
        [Ub, tb] = (0, eb.useState)(null),
        Cb = (0, eb.useCallback)((bb => {
          tb((wb => null !== bb ? {
            key: Ib,
            node: bb
          } : (null === wb || void 0 === wb ? void 0 : wb.key) === Ib ? null : wb))
        }), [Ib]),
        Eb = null !== Ib && (null === Ub || void 0 === Ub ? void 0 : Ub.key) === Ib ? Ub.node : null;
      return (0, jb.jsxs)(hw.Provider, {
        value: {
          step: lb,
          targetRef: Cb
        },
        children: [Hb, null !== lb && null !== Eb && (0, jb.jsx)(Kw, {
          target: Eb,
          placement: mw[lb.kind],
          onDismiss: Mb,
          children: Lb
        }, Ib)]
      })
    }

    function Kw(bb) {
      let {
        target: wb,
        placement: Mb,
        onDismiss: Hb,
        children: pb
      } = bb;
      const {
        t: Vb
      } = (0, Ob.C)(), gb = (0, eb.useRef)(wb);
      return gb.current = wb, (0, Bw.r)("popup", gb, Hb), (0, jb.jsxs)(Fw.f, {
        target: wb,
        placement: Mb,
        className: "LoadoutWalkthroughStep",
        spotlightMargin: 10,
        children: [(0, jb.jsxs)("div", {
          className: "LoadoutWalkthroughHeader",
          children: [(0, jb.jsx)("img", {
            className: "LoadoutWalkthroughPortrait",
            src: Ew,
            alt: "",
            draggable: !1
          }), (0, jb.jsx)("span", {
            className: "LoadoutWalkthroughSpeaker",
            children: Vb(`${Kb}:operatorName`)
          }), (0, jb.jsx)(Cb.l, {
            onClick: Hb,
            ariaLabel: Vb(`${Kb}:loadoutWalkthroughClose`),
            padIgnore: !0
          })]
        }), (0, jb.jsx)("p", {
          className: "LoadoutWalkthroughText",
          children: pb
        })]
      })
    }
    const rw = new Set(["loadoutStatReload", "loadoutStatResupply"]);

    function Rw(bb) {
      let {
        cost: wb,
        loadout: Mb
      } = bb;
      const {
        t: eb
      } = (0, Ob.C)();
      return wb.loadoutCostCoins <= 0 && 0 === wb.loadoutCostParts.length ? (0, jb.jsx)("span", {
        className: "LoadoutCost",
        children: eb(`${Kb}:loadoutFree`)
      }) : (0, jb.jsxs)("span", {
        className: "LoadoutCost",
        children: [wb.loadoutCostCoins > 0 && (0, jb.jsx)(Yb, {
          itemName: rb,
          amount: wb.loadoutCostCoins,
          dg: Mb.loadoutCoins
        }), wb.loadoutCostParts.map((bb => {
          const wb = Mw(Mb, bb.loadoutPartCurrency);
          return (0, jb.jsx)(Yb, {
            itemName: wb.loadoutHeldPartItem,
            amount: bb.loadoutPartAmount,
            dg: wb.loadoutHeldPartAmount
          }, bb.loadoutPartCurrency)
        }))]
      })
    }
    const Dw = {
      loadoutStatFireRate: `${Kb}:loadoutUnitPerMinute`,
      loadoutStatReload: `${Kb}:loadoutUnitSeconds`,
      loadoutStatResupply: `${Kb}:loadoutUnitSeconds`
    };

    function Yw(bb) {
      return "loadoutStatPotency" === bb.loadoutStatKind ? (0, kb.Y)(bb.loadoutStatValue) : String(bb.loadoutStatValue)
    }

    function Zw(bb) {
      var wb;
      let {
        option: Mb
      } = bb;
      const {
        t: eb
      } = (0, Ob.C)(), Hb = Mb.loadoutOptionTiers, pb = null === (wb = Hb[0]) || void 0 === wb ? void 0 : wb.loadoutTierStats.map((bb => bb.loadoutStatKind));
      if (!pb || 0 === pb.length) return null;
      const Vb = Mb.loadoutOptionOwnedTier,
        gb = (bb, wb) => {
          var Mb;
          return null === (Mb = Hb[bb]) || void 0 === Mb ? void 0 : Mb.loadoutTierStats.find((bb => bb.loadoutStatKind === wb))
        };
      return (0, jb.jsxs)("table", {
        className: "LoadoutTierTable",
        children: [(0, jb.jsx)("thead", {
          children: (0, jb.jsxs)("tr", {
            children: [(0, jb.jsx)("th", {}), Hb.map(((bb, wb) => (0, jb.jsx)("th", {
              className: Lb()({
                Current: wb + 1 === Vb,
                Next: wb === Vb
              }),
              children: eb(`${Kb}:loadoutTier`, {
                tier: (0, kb.Y)(wb + 1)
              })
            }, wb)))]
          })
        }), (0, jb.jsx)("tbody", {
          children: pb.map((bb => {
            const wb = Dw[bb];
            return (0, jb.jsxs)("tr", {
              children: [(0, jb.jsxs)("th", {
                scope: "row",
                children: [eb(`${Kb}:${bb}`), wb && (0, jb.jsx)("span", {
                  className: "LoadoutStatUnit",
                  children: eb(wb)
                })]
              }), Hb.map(((wb, Mb) => {
                const eb = gb(Mb, bb),
                  Hb = Mb > 0 ? gb(Mb - 1, bb) : void 0,
                  pb = eb && Hb ? eb.loadoutStatValue - Hb.loadoutStatValue : 0,
                  lb = rw.has(bb) ? pb < 0 : pb > 0,
                  Ib = Mb === Vb;
                return (0, jb.jsxs)("td", {
                  className: Lb()({
                    Current: Mb + 1 === Vb,
                    Next: Ib,
                    Gain: lb,
                    Owned: Mb < Vb
                  }),
                  children: [Ib && lb && (0, jb.jsx)("span", {
                    className: "LoadoutGainArrow",
                    "aria-hidden": "true",
                    children: pb < 0 ? "\u25bc" : "\u25b2"
                  }), eb ? Yw(eb) : "-"]
                }, Mb)
              }))]
            }, bb)
          }))
        })]
      })
    }

    function fw(bb) {
      let {
        view: wb,
        controller: Mb,
        slot: eb,
        option: Hb
      } = bb;
      const {
        t: pb
      } = (0, Ob.C)(), Vb = wb.loadout, gb = Hb.loadoutOptionOwnedTier, lb = Hb.loadoutOptionTiers.length, Lb = eb.loadoutSlotEquippedId === Hb.loadoutOptionId, Ib = gb < lb ? Hb.loadoutOptionTiers[gb].loadoutTierCost : null, Ub = null !== Ib && ww(Vb, Ib), tb = Hb.loadoutOptionId, Eb = zw();
      return (0, jb.jsxs)(jb.Fragment, {
        children: [(0, jb.jsx)(Ww, {
          icon: Hb.loadoutOptionIcon,
          name: Hb.loadoutOptionName,
          status: 0 === gb ? pb(`${Kb}:loadoutLocked`) : lb > 1 ? pb(`${Kb}:loadoutTier`, {
            tier: (0, kb.Y)(gb)
          }) : null,
          locked: 0 === gb,
          equipped: Lb
        }), (0, jb.jsx)("p", {
          className: "BoardDescription",
          children: Hb.loadoutOptionDescription
        }), (0, jb.jsx)(Zw, {
          option: Hb
        }), (0, jb.jsxs)("div", {
          ref: Eb("act", tb),
          className: "BoardActions",
          children: [null !== Ib && (0, jb.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, jb.jsx)(Rw, {
              cost: Ib,
              loadout: Vb
            }), (0, jb.jsx)(Cb.p, {
              disabled: !Ub || wb.pending,
              onClick: () => {
                Mb.act(0 === gb ? "loadoutUnlock" : "loadoutUpgrade", tb)
              },
              children: 0 === gb ? pb(`${Kb}:loadoutUnlock`) : pb(`${Kb}:loadoutUpgrade`, {
                tier: (0, kb.Y)(gb + 1)
              })
            })]
          }), null === Ib && lb > 1 && (0, jb.jsx)("span", {
            className: "BoardHint",
            children: pb(`${Kb}:loadoutMaxed`)
          }), gb > 0 && !Lb && (0, jb.jsx)(Cb.f, {
            disabled: wb.pending,
            onClick: () => {
              Mb.act("loadoutEquip", tb)
            },
            children: pb(`${Kb}:loadoutEquip`)
          })]
        })]
      })
    }

    function Aw(bb) {
      let {
        view: wb,
        controller: Mb,
        perk: eb
      } = bb;
      const {
        t: Hb
      } = (0, Ob.C)(), pb = wb.loadout, Vb = Hw(pb), gb = eb.loadoutPerkId, lb = zw();
      return (0, jb.jsxs)(jb.Fragment, {
        children: [(0, jb.jsx)(Ww, {
          icon: eb.loadoutPerkIcon,
          name: eb.loadoutPerkName,
          status: eb.loadoutPerkOwned ? null : Hb(`${Kb}:loadoutLocked`),
          locked: !eb.loadoutPerkOwned,
          equipped: eb.loadoutPerkEquipped
        }), (0, jb.jsx)("p", {
          className: "BoardDescription",
          children: eb.loadoutPerkDescription
        }), (0, jb.jsxs)("div", {
          ref: lb("act", gb),
          className: "BoardActions",
          children: [!eb.loadoutPerkOwned && (0, jb.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, jb.jsx)(Rw, {
              cost: eb.loadoutPerkCost,
              loadout: pb
            }), (0, jb.jsx)(Cb.p, {
              disabled: !ww(pb, eb.loadoutPerkCost) || wb.pending,
              onClick: () => {
                Mb.act("loadoutUnlock", gb)
              },
              children: Hb(`${Kb}:loadoutUnlock`)
            })]
          }), eb.loadoutPerkOwned && !eb.loadoutPerkEquipped && (0, jb.jsx)(Cb.f, {
            disabled: Vb || wb.pending,
            onClick: () => {
              Mb.act("loadoutEquip", gb)
            },
            children: Hb(`${Kb}:loadoutEquip`)
          }), eb.loadoutPerkOwned && !eb.loadoutPerkEquipped && Vb && (0, jb.jsx)("span", {
            className: "BoardHint",
            children: Hb(`${Kb}:loadoutSocketsFullHint`)
          }), eb.loadoutPerkEquipped && (0, jb.jsx)(Cb.Y, {
            disabled: wb.pending,
            onClick: () => {
              Mb.act("loadoutUnequip", gb)
            },
            children: Hb(`${Kb}:loadoutUnequip`)
          })]
        })]
      })
    }

    function Ww(bb) {
      let {
        icon: wb,
        name: Mb,
        status: eb,
        locked: Hb,
        equipped: pb
      } = bb;
      const {
        t: Vb
      } = (0, Ob.C)();
      return (0, jb.jsxs)(Wb, {
        icon: (0, jb.jsx)(Db, {
          itemName: wb
        }),
        name: Mb,
        children: [null !== eb && (0, jb.jsx)("span", {
          className: Lb()("LoadoutStatusText", {
            Locked: Hb
          }),
          children: eb
        }), pb && (0, jb.jsx)("span", {
          className: "BoardBadge",
          children: Vb(`${Kb}:loadoutEquippedBadge`)
        })]
      })
    }

    function Jw(bb) {
      let {
        view: wb,
        controller: Mb
      } = bb;
      const eb = wb.loadout;
      if ("loadoutPerks" === wb.slot) {
        const bb = eb.loadoutPerks.find((bb => bb.loadoutPerkId === wb.selectedId));
        return (0, jb.jsx)("section", {
          className: "BoardDetail",
          children: bb && (0, jb.jsx)(Aw, {
            view: wb,
            controller: Mb,
            perk: bb
          })
        })
      }
      const Hb = ew(eb, wb.slot),
        pb = Hb.loadoutSlotOptions.find((bb => bb.loadoutOptionId === wb.selectedId));
      return (0, jb.jsx)("section", {
        className: "BoardDetail",
        children: pb && (0, jb.jsx)(fw, {
          view: wb,
          controller: Mb,
          slot: Hb,
          option: pb
        })
      })
    }

    function Sw(bb) {
      let {
        owned: wb,
        total: Mb
      } = bb;
      return Mb <= 1 ? null : (0, jb.jsx)("span", {
        className: "LoadoutPips",
        children: Array.from({
          length: Mb
        }, ((bb, Mb) => (0, jb.jsx)("span", {
          className: Lb()("LoadoutPip", {
            Filled: Mb < wb
          })
        }, Mb)))
      })
    }

    function Nw(bb) {
      let {
        view: wb,
        controller: Mb
      } = bb;
      const {
        t: eb
      } = (0, Ob.C)(), Hb = wb.loadout, pb = zw();
      return (0, jb.jsxs)("nav", {
        className: "LoadoutKit",
        "aria-label": eb(`${Kb}:loadoutKit`),
        children: [Hb.loadoutSlots.map((bb => {
          const Hb = bb.loadoutSlotOptions.find((wb => wb.loadoutOptionId === bb.loadoutSlotEquippedId));
          return (0, jb.jsxs)("button", {
            ref: pb("section", bb.loadoutSlotKind),
            type: "button",
            className: Lb()("LoadoutKitSlot", {
              Selected: wb.slot === bb.loadoutSlotKind
            }),
            onClick: () => {
              Mb.selectSlot(bb.loadoutSlotKind)
            },
            children: [(0, jb.jsx)("span", {
              className: "LoadoutKitIcon",
              children: Hb && (0, jb.jsx)(Db, {
                itemName: Hb.loadoutOptionIcon
              })
            }), (0, jb.jsxs)("span", {
              className: "LoadoutKitText",
              children: [(0, jb.jsxs)("span", {
                className: "LoadoutKitTop",
                children: [(0, jb.jsx)("span", {
                  className: "LoadoutKitLabel",
                  children: eb(sw[bb.loadoutSlotKind])
                }), Hb && (0, jb.jsx)(Sw, {
                  owned: Hb.loadoutOptionOwnedTier,
                  total: Hb.loadoutOptionTiers.length
                })]
              }), (0, jb.jsx)("span", {
                className: "LoadoutKitName",
                children: null === Hb || void 0 === Hb ? void 0 : Hb.loadoutOptionName
              })]
            })]
          }, bb.loadoutSlotKind)
        })), (0, jb.jsx)(vw, {
          view: wb,
          controller: Mb
        })]
      })
    }

    function vw(bb) {
      let {
        view: wb,
        controller: Mb
      } = bb;
      const {
        t: eb
      } = (0, Ob.C)(), Hb = wb.loadout, pb = Hb.loadoutPerks.filter((bb => bb.loadoutPerkEquipped)), Vb = zw();
      return (0, jb.jsxs)("button", {
        ref: Vb("section", "loadoutPerks"),
        type: "button",
        className: Lb()("LoadoutKitSlot", "LoadoutPerks", {
          Selected: "loadoutPerks" === wb.slot
        }),
        onClick: () => {
          Mb.selectSlot("loadoutPerks")
        },
        children: [(0, jb.jsxs)("span", {
          className: "LoadoutKitTop",
          children: [(0, jb.jsx)("span", {
            className: "LoadoutKitLabel",
            children: eb(sw.loadoutPerks)
          }), (0, jb.jsx)("span", {
            className: "LoadoutPerkCount",
            children: eb(`${Kb}:loadoutPerkCount`, {
              equipped: String(pb.length),
              max: String(Hb.loadoutMaxPerks)
            })
          })]
        }), (0, jb.jsx)("span", {
          className: "LoadoutSockets",
          children: Array.from({
            length: Hb.loadoutMaxPerks
          }, ((bb, wb) => {
            const Mb = pb[wb];
            return (0, jb.jsxs)("span", {
              className: Lb()("LoadoutSocket", {
                Filled: Mb,
                Empty: !Mb
              }),
              children: [(0, jb.jsx)("span", {
                className: "LoadoutSocketWell",
                children: Mb && (0, jb.jsx)(Db, {
                  itemName: Mb.loadoutPerkIcon
                })
              }), (0, jb.jsx)("span", {
                className: "LoadoutSocketName",
                children: Mb ? Mb.loadoutPerkName : eb(`${Kb}:loadoutPerkSocketEmpty`)
              })]
            }, wb)
          }))
        })]
      })
    }

    function Qw(bb) {
      let {
        icon: wb,
        name: Mb,
        selected: eb,
        equipped: Hb,
        locked: pb,
        ownedTier: Vb,
        tiers: gb,
        buttonRef: lb,
        onSelect: Lb
      } = bb;
      const {
        t: Ib
      } = (0, Ob.C)();
      return (0, jb.jsxs)(Ab, {
        icon: (0, jb.jsx)(Db, {
          itemName: wb
        }),
        name: Mb,
        selected: eb,
        locked: pb,
        buttonRef: lb,
        onSelect: Lb,
        children: [Hb && (0, jb.jsx)("span", {
          className: "BoardBadge",
          children: Ib(`${Kb}:loadoutEquippedBadge`)
        }), pb && (0, jb.jsx)("span", {
          className: "BoardBadge Muted",
          children: Ib(`${Kb}:loadoutLocked`)
        }), !pb && (0, jb.jsx)(Sw, {
          owned: Vb,
          total: gb
        })]
      })
    }

    function Gw(bb) {
      let {
        view: wb,
        controller: Mb
      } = bb;
      const eb = wb.loadout,
        Hb = zw();
      if ("loadoutPerks" === wb.slot) return (0, jb.jsx)("div", {
        className: "BoardTiles",
        children: eb.loadoutPerks.map((bb => (0, jb.jsx)(Qw, {
          icon: bb.loadoutPerkIcon,
          name: bb.loadoutPerkName,
          selected: wb.selectedId === bb.loadoutPerkId,
          equipped: bb.loadoutPerkEquipped,
          locked: !bb.loadoutPerkOwned,
          ownedTier: 0,
          tiers: 0,
          buttonRef: Hb("Vt", bb.loadoutPerkId),
          onSelect: () => {
            Mb.select(bb.loadoutPerkId)
          }
        }, bb.loadoutPerkId)))
      });
      const pb = ew(eb, wb.slot);
      return (0, jb.jsx)("div", {
        className: "BoardTiles",
        children: pb.loadoutSlotOptions.map((bb => (0, jb.jsx)(Qw, {
          icon: bb.loadoutOptionIcon,
          name: bb.loadoutOptionName,
          selected: wb.selectedId === bb.loadoutOptionId,
          equipped: pb.loadoutSlotEquippedId === bb.loadoutOptionId,
          locked: 0 === bb.loadoutOptionOwnedTier,
          ownedTier: bb.loadoutOptionOwnedTier,
          tiers: bb.loadoutOptionTiers.length,
          buttonRef: Hb("Vt", bb.loadoutOptionId),
          onSelect: () => {
            Mb.select(bb.loadoutOptionId)
          }
        }, bb.loadoutOptionId)))
      })
    }

    function qw(bb) {
      let {
        loadout: wb
      } = bb;
      return (0, jb.jsx)(Jb, {
        coins: wb.loadoutCoins,
        children: wb.loadoutHeldParts.filter((bb => bb.loadoutHeldPartAmount > 0)).map((bb => (0, jb.jsx)(Yb, {
          itemName: bb.loadoutHeldPartItem,
          amount: bb.loadoutHeldPartAmount
        }, bb.loadoutHeldPartCurrency)))
      })
    }

    function aw(bb) {
      let {
        controller: wb
      } = bb;
      const Mb = (0, Ib.h)(Uw, wb.getSnapshot()),
        {
          t: eb
        } = (0, Ob.C)();
      if (null === Mb.loadout) return null;
      const Hb = Mb.notice;
      return (0, jb.jsx)(jw, {
        view: Mb,
        onDismiss: wb.dismiss,
        children: (0, jb.jsxs)(Rb, {
          open: Mb.open,
          onDismiss: wb.dismiss,
          title: eb(`${Kb}:loadoutTitle`),
          className: "ContainmentLoadoutPanel",
          headerExtra: (0, jb.jsx)(qw, {
            loadout: Mb.loadout
          }),
          statusRefused: null === Hb || void 0 === Hb ? void 0 : Hb.loadoutNoticeRefused,
          status: (0, jb.jsxs)(jb.Fragment, {
            children: [(0, jb.jsx)("span", {
              className: "LoadoutRadioBadge",
              children: eb(`${Kb}:loadoutRadioBadge`)
            }), null !== Hb && eb(`${Kb}:${Hb.loadoutNoticeKey}`, {
              name: Hb.loadoutNoticeName,
              tier: (0, kb.Y)(Hb.loadoutNoticeTier),
              max: String(Mb.loadout.loadoutMaxPerks)
            })]
          }),
          children: [(0, jb.jsx)(Nw, {
            view: Mb,
            controller: wb
          }), (0, jb.jsx)(Gw, {
            view: Mb,
            controller: wb
          }), (0, jb.jsx)(Jw, {
            view: Mb,
            controller: wb
          })]
        })
      })
    }

    function iw(bb, wb, Mb) {
      const eb = bb.locatorEntries.find((bb => bb.locatorEntryId === Mb));
      if (!eb) return null;
      const Hb = eb.locatorEntryName;
      if ("locatorDisarm" === wb) return eb.locatorEntryArmed ? {
        board: uw(bb, null),
        notice: dw("locatorNoticeDisarmed", Hb)
      } : null;
      if ("locatorArm" === wb) return eb.locatorEntryOwned && !eb.locatorEntryArmed ? {
        board: uw(bb, Mb),
        notice: dw("locatorNoticeArmed", Hb)
      } : null;
      if (eb.locatorEntryOwned || bb.locatorCoins < eb.locatorEntryPrice) return null;
      const pb = uw({
        ...bb,
        locatorCoins: bb.locatorCoins - eb.locatorEntryPrice
      }, Mb);
      return {
        board: {
          ...pb,
          locatorEntries: pb.locatorEntries.map((bb => bb.locatorEntryId === Mb ? {
            ...bb,
            locatorEntryOwned: !0
          } : bb))
        },
        notice: dw("locatorNoticeBought", Hb)
      }
    }

    function uw(bb, wb) {
      return {
        ...bb,
        locatorEntries: bb.locatorEntries.map((bb => {
          const Mb = bb.locatorEntryId === wb;
          return bb.locatorEntryArmed === Mb ? bb : {
            ...bb,
            locatorEntryArmed: Mb
          }
        }))
      }
    }

    function dw(bb, wb) {
      return {
        locatorNoticeKey: bb,
        locatorNoticeRefused: !1,
        locatorNoticeName: wb
      }
    }
    const Pw = "containmentLocatorView";
    class nw extends bw {
      constructor(bb, wb, Mb, eb) {
        super(bb, wb, Mb, eb, "locator", iw), this.snapshot = this.buildSnapshot()
      }
      messageOpens(bb) {
        return bb.locatorMessageOpens
      }
      messageNotice(bb) {
        return bb.locatorNotice
      }
      openingSelection(bb) {
        var wb;
        const Mb = bb.locatorEntries;
        return (null !== (wb = Mb.find((bb => bb.locatorEntryArmed))) && void 0 !== wb ? wb : Mb[0]).locatorEntryId
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
    const yw = {
        locatorContained: `${Kb}:locatorFlavourContained`,
        locatorEncountered: `${Kb}:locatorFlavourEncountered`,
        locatorUnseen: `${Kb}:locatorFlavourUnseen`
      },
      ow = {
        codexAnyDifficulty: null,
        codexNormalOnly: `${Kb}:locatorAttunedNormal`,
        codexHardOnly: `${Kb}:locatorAttunedHard`
      };

    function Tw() {
      return (0, jb.jsx)(jb.Fragment, {
        children: Array.from({
          length: 5
        }, ((bb, wb) => (0, jb.jsx)("span", {
          className: "LocatorFly",
          children: (0, jb.jsx)("img", {
            src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAICAYAAADwdn+XAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYElEQVR4nGNgoBboMlb5LyUjD8YgNtHyJ6/d+Q/CILa1lz9YAbo4DCDLYxjQv3gt3AYQG90AdHkUQ/qhkjAb0BURkgcDmAQMo7sSXR7deyiGoIvDvIOsGasB+ACyBmTNACS0go3ibhumAAAAAElFTkSuQmCC",
            alt: "",
            draggable: !1
          })
        }, wb)))
      })
    }

    function kw(bb) {
      let {
        entry: wb
      } = bb;
      const {
        t: Mb
      } = (0, Ob.C)();
      return wb.locatorEntryArmed ? (0, jb.jsx)("span", {
        className: "BoardBadge Armed",
        children: Mb(`${Kb}:locatorArmedBadge`)
      }) : wb.locatorEntryOwned ? (0, jb.jsx)("span", {
        className: "BoardBadge",
        children: Mb(`${Kb}:locatorOwnedBadge`)
      }) : null
    }

    function bM(bb) {
      let {
        entry: wb,
        coins: Mb,
        inTile: eb = !1
      } = bb;
      return (0, jb.jsx)(Yb, {
        itemName: rb,
        amount: wb.locatorEntryPrice,
        dg: Mb,
        inTile: eb
      })
    }

    function wM(bb) {
      let {
        view: wb,
        controller: Mb,
        entry: eb
      } = bb;
      const {
        t: Hb
      } = (0, Ob.C)(), pb = eb.locatorEntryId, Vb = wb.locators.locatorEntries.find((bb => bb.locatorEntryArmed && bb !== eb));
      return (0, jb.jsxs)("div", {
        className: "BoardActions",
        children: [eb.locatorEntryArmed && (0, jb.jsx)(Cb.Y, {
          disabled: wb.pending,
          onClick: () => {
            Mb.act("locatorDisarm", pb)
          },
          children: Hb(`${Kb}:locatorDisarm`)
        }), eb.locatorEntryOwned && !eb.locatorEntryArmed && (0, jb.jsx)(Cb.f, {
          disabled: wb.pending,
          onClick: () => {
            Mb.act("locatorArm", pb)
          },
          children: Hb(`${Kb}:locatorArm`)
        }), !eb.locatorEntryOwned && (0, jb.jsxs)("div", {
          className: "LocatorBuy",
          children: [(0, jb.jsx)(bM, {
            entry: eb,
            coins: wb.locators.locatorCoins
          }), (0, jb.jsx)(Cb.p, {
            disabled: wb.locators.locatorCoins < eb.locatorEntryPrice || wb.pending,
            onClick: () => {
              Mb.act("locatorBuy", pb)
            },
            children: Hb(`${Kb}:locatorBuy`)
          })]
        }), Vb && !eb.locatorEntryArmed && (0, jb.jsx)("span", {
          className: "BoardHint",
          children: Hb(`${Kb}:locatorReplacesHint`, {
            name: Vb.locatorEntryName
          })
        })]
      })
    }

    function MM(bb) {
      let {
        entry: wb
      } = bb;
      return "locatorUnseen" === wb.locatorEntryStanding ? (0, jb.jsx)(Db, {
        itemName: "Compass"
      }) : (0, jb.jsx)(cb, {
        anomalyId: wb.locatorEntryId,
        caught: "locatorContained" === wb.locatorEntryStanding
      })
    }

    function eM(bb) {
      let {
        view: wb,
        controller: Mb,
        entry: eb
      } = bb;
      const {
        t: Hb
      } = (0, Ob.C)(), pb = ow[eb.locatorEntryDifficulty];
      return (0, jb.jsxs)("section", {
        className: "BoardDetail",
        children: [(0, jb.jsxs)("div", {
          className: Lb()("LocatorLabel", {
            Armed: eb.locatorEntryArmed
          }),
          children: [(0, jb.jsx)(Wb, {
            icon: (0, jb.jsx)(MM, {
              entry: eb
            }),
            name: Hb(`${Kb}:locatorName`, {
              name: eb.locatorEntryName
            }),
            children: (0, jb.jsx)(kw, {
              entry: eb
            })
          }), (0, jb.jsx)("p", {
            className: "BoardDescription",
            children: Hb(eb.locatorEntryArmed ? `${Kb}:locatorFlavourArmed` : yw[eb.locatorEntryStanding])
          }), null !== pb && (0, jb.jsx)("p", {
            className: "LocatorAttuned",
            children: Hb(pb)
          }), (0, jb.jsx)("p", {
            className: "BoardDescription LocatorUsage",
            children: Hb(`${Kb}:locatorUsage`)
          })]
        }), (0, jb.jsx)(wM, {
          view: wb,
          controller: Mb,
          entry: eb
        })]
      })
    }

    function HM(bb) {
      let {
        controller: wb
      } = bb;
      const Mb = (0, Ib.h)(Pw, wb.getSnapshot()),
        {
          t: eb
        } = (0, Ob.C)(),
        Hb = Mb.locators;
      if (null === Hb) return null;
      const pb = Hb.locatorEntries.find((bb => bb.locatorEntryId === Mb.selectedId)),
        Vb = Mb.notice;
      return (0, jb.jsxs)(Rb, {
        open: Mb.open,
        onDismiss: wb.dismiss,
        title: eb(`${Kb}:locatorTitle`),
        className: "ContainmentLocatorPanel",
        decor: (0, jb.jsx)(Tw, {}),
        headerExtra: (0, jb.jsx)(Jb, {
          coins: Hb.locatorCoins
        }),
        statusRefused: null === Vb || void 0 === Vb ? void 0 : Vb.locatorNoticeRefused,
        status: (0, jb.jsxs)(jb.Fragment, {
          children: [(0, jb.jsx)("span", {
            className: "LocatorKeeperBadge",
            children: eb(`${Kb}:locatorKeeperName`)
          }), null !== Vb && eb(`${Kb}:${Vb.locatorNoticeKey}`, {
            name: Vb.locatorNoticeName
          })]
        }),
        children: [(0, jb.jsx)("div", {
          className: "BoardTiles",
          children: Hb.locatorEntries.map((bb => (0, jb.jsxs)(Ab, {
            icon: (0, jb.jsx)(MM, {
              entry: bb
            }),
            name: bb.locatorEntryName,
            selected: bb === pb,
            locked: !1,
            className: Lb()("LocatorTag", {
              Armed: bb.locatorEntryArmed
            }),
            onSelect: () => {
              wb.select(bb.locatorEntryId)
            },
            children: [(0, jb.jsx)(kw, {
              entry: bb
            }), !bb.locatorEntryOwned && (0, jb.jsx)(bM, {
              entry: bb,
              coins: Hb.locatorCoins,
              inTile: !0
            })]
          }, bb.locatorEntryId)))
        }), (0, jb.jsx)(eM, {
          view: Mb,
          controller: wb,
          entry: pb
        })]
      })
    }

    function pM(bb) {
      let {
        loadout: wb,
        codex: Mb,
        locator: eb
      } = bb;
      return (0, jb.jsxs)(jb.Fragment, {
        children: [(0, jb.jsx)(aw, {
          controller: wb
        }), (0, jb.jsx)(Tb, {
          controller: Mb
        }), (0, jb.jsx)(HM, {
          controller: eb
        })]
      })
    }
    var VM = Mb(39819);
    class gM {
      constructor(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.sendCommand = bb, this.budget = void 0, this.awaitingReply = !1, this.replyTimer = null, this.listeners = new Set, this.budget = new VM.d({
          spacingMs: 0,
          now: wb
        }), this.budget.subscribe((() => {
          this.notify()
        }))
      }
      isPending() {
        return this.awaitingReply || this.budget.isPacing()
      }
      send(bb, wb) {
        return !this.isPending() && (this.awaitingReply = !0, this.replyTimer = setTimeout((() => {
          this.replyTimer = null, this.awaitingReply = !1, wb(), this.notify()
        }), 8e3), this.budget.start(), this.sendCommand(bb), !0)
      }
      onReply() {
        this.awaitingReply = !1, this.clearReplyTimer()
      }
      subscribe(bb) {
        return this.listeners.add(bb), () => {
          this.listeners.delete(bb)
        }
      }
      dispose() {
        this.clearReplyTimer(), this.budget.dispose(), this.listeners.clear()
      }
      clearReplyTimer() {
        null !== this.replyTimer && (clearTimeout(this.replyTimer), this.replyTimer = null)
      }
      notify() {
        for (const bb of this.listeners) bb()
      }
    }
    var lM = Mb(39806);
    const LM = new Map([
      ["npc_general", Ew],
      ["npc_tentacle_guy", lM]
    ]);

    function IM(bb) {
      const wb = LM.get(bb);
      if (void 0 === wb) return null;
      const Mb = document.createElement("img");
      return Mb.src = wb, Mb.alt = "", Mb.draggable = !1, Mb.style.imageRendering = "pixelated", Mb
    }
    const OM = function() {
      let bb, wb = !1,
        Mb = null,
        lb = null;
      const Lb = [],
        Ib = bb => {
          for (const wb of Lb) wb !== bb && wb.close();
          (0, gb.y)()
        },
        Ob = bb => {
          bb && (0, gb.o)()
        },
        Ub = new gM((wb => {
          bb.sendCommand(wb)
        })),
        tb = new tw((bb => {
          Vb.k.iI(Uw, bb, !0)
        }), Ib, Ob, Ub),
        Cb = new vb((bb => {
          Vb.k.iI(Nb, bb, !0)
        }), Ib, Ob),
        Eb = new nw((bb => {
          Vb.k.iI(Pw, bb, !0)
        }), Ib, Ob, Ub);
      Lb.push(tb, Cb, Eb);
      return {
        onCreate: wb => {
          bb = wb, Mb = (0, gb.J)(null, {
            content: (0, eb.createElement)(pM, {
              loadout: tb,
              codex: Cb,
              locator: Eb
            }),
            onClose: () => {
              for (const bb of Lb) bb.close()
            }
          }), lb = (0, pb.g)(IM)
        },
        onReceivedMessageFromServer: (bb, wb) => {
          "containmentLoadout" === bb ? tb.EO(wb) : "containmentLoadoutClose" === bb ? tb.isOpen() && (tb.close(), (0, gb.l)()) : "containmentCodex" === bb ? Cb.EO(wb) : "containmentLocator" === bb && Eb.EO(wb)
        },
        sO: () => {
          wb || Hb.c.get("loadingOverlayVisible") || (wb = !0, bb.sendCommand("containmentEntered"))
        },
        onClose: () => {
          var bb, wb;
          null === (bb = Mb) || void 0 === bb || bb(), Mb = null, null === (wb = lb) || void 0 === wb || wb(), lb = null;
          for (const Mb of Lb) Mb.dispose();
          Ub.dispose()
        }
      }
    }
  },
  38103: (bb, wb, Mb) => {
    Mb.d(wb, {
      D: () => Jb,
      G: () => Sb,
      J: () => Ab,
      K: () => Nb,
      b: () => lb,
      f: () => Db,
      i: () => gb,
      j: () => fb,
      m: () => rb,
      n: () => Xb,
      o: () => Zb,
      r: () => Yb,
      v: () => Kb,
      z: () => Wb
    });
    var eb = Mb(43);
    const Hb = {
        codeBlock: ["codeBlockIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "worldCodeButton", "exportButton", "helpButton"],
        worldCode: ["worldCodeIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "exportButton", "helpButton"]
      },
      pb = ["docsButton", "docsPanel", "docsClientOptionsTab", "docsClientOptions", "docsApiReferenceTab", "docsApiReference", "docsCallbacksTab", "docsCallbacks", "hideDocsButton"],
      Vb = ["aiHelperButton", "aiPanel", "aiAskBox", "aiModelChip", "aiAnswer", "aiEdits", "aiGear", "aiNotes", "aiGameSettings", "hideAiHelperButton"],
      gb = pb.filter((bb => "docsButton" !== bb)),
      lb = Vb.filter((bb => "aiHelperButton" !== bb)),
      Lb = "codeEditorTutorials",
      Ib = {
        codeBlockIntro: "codeBlockIntroShown",
        worldCodeIntro: "worldCodeIntroShown"
      },
      Ob = {
        welcome: "welcomeComplete",
        docsOverview: "docsOverviewComplete",
        aiHelperOverview: "aiHelperOverviewComplete"
      };
    let Ub = null,
      tb = null;
    const Cb = new Set,
      Eb = new Set;
    let Fb = null;
    const Bb = new Set,
      sb = new Set;

    function mb() {
      sb.forEach((bb => {
        bb()
      }))
    }

    function hb() {
      if (!Ub) {
        const bb = eb.i.getItem(Lb);
        Ub = {
          codeBlockIntroShown: !1,
          worldCodeIntroShown: !1,
          welcomeComplete: !1,
          docsOverviewComplete: !1,
          aiHelperOverviewComplete: !1,
          ..."object" === typeof bb && null !== bb ? bb : {}
        }
      }
      return Ub
    }

    function zb(bb) {
      const wb = hb();
      wb[bb] || (Ub = {
        ...wb,
        [bb]: !0
      }, eb.i.setItem(Lb, Ub))
    }

    function Xb(bb) {
      return "docsOverview" === bb ? pb : "aiHelperOverview" === bb ? Vb : tb ? Hb[tb] : []
    }

    function xb(bb) {
      return ("worldCodeButton" !== bb || !hb().worldCodeIntroShown) && !Bb.has(bb)
    }

    function jb(bb) {
      var wb;
      return (null === (wb = Fb) || void 0 === wb ? void 0 : wb.name) === bb ? Fb.stepsDone : Cb
    }

    function Kb(bb, wb) {
      if (! function(bb) {
          return Fb ? Fb.name === bb : "welcome" === bb
        }(bb) || !xb(wb) || jb(bb).has(wb)) return !1;
      if (Fb) return !0;
      const Mb = Ib[wb];
      return Mb ? !hb()[Mb] || Eb.has(wb) : !hb()[Ob[bb]]
    }

    function rb(bb) {
      var wb;
      return null !== (wb = Xb(bb).find((wb => Kb(bb, wb)))) && void 0 !== wb ? wb : null
    }

    function Rb(bb) {
      var wb;
      zb(Ob[bb]), (null === (wb = Fb) || void 0 === wb ? void 0 : wb.name) === bb && (Fb = null)
    }

    function Db(bb) {
      const wb = (Fb ? [Fb.name] : ["welcome", "docsOverview"]).find((wb => rb(wb) === bb));
      if (!wb) return;
      jb(wb).add(bb);
      const Mb = Ib[bb];
      Mb && (zb(Mb), Fb || Eb.add(bb)), null === rb(wb) && Rb(wb), mb()
    }

    function cb(bb, wb) {
      const Mb = Xb(bb),
        eb = jb(bb);
      for (let Hb = Mb.indexOf(wb) - 1; Hb >= 0; Hb--)
        if (eb.has(Mb[Hb]) && xb(Mb[Hb])) return Mb[Hb];
      return null
    }

    function Yb(bb, wb) {
      return null !== cb(bb, wb)
    }

    function Zb(bb, wb) {
      const Mb = cb(bb, wb);
      Mb && (jb(bb).delete(Mb), mb())
    }

    function fb(bb) {
      Rb(bb), "welcome" === bb && Xb("welcome").forEach((bb => {
        const wb = Ib[bb];
        wb && zb(wb)
      })), mb()
    }

    function Ab(bb) {
      Fb = {
        name: bb,
        stepsDone: new Set
      }, mb()
    }

    function Wb() {
      (Fb || 0 !== Cb.size || 0 !== Eb.size) && (Fb = null, Cb.clear(), Eb.clear(), mb())
    }

    function Jb(bb, wb) {
      const Mb = wb ? bb : tb === bb ? null : tb;
      Mb !== tb && (tb = Mb, mb())
    }

    function Sb(bb, wb) {
      Bb.has(bb) === wb && (wb ? Bb.delete(bb) : Bb.add(bb), mb())
    }

    function Nb(bb) {
      return sb.add(bb), () => {
        sb.delete(bb)
      }
    }
  },
  40675: (bb, wb, Mb) => {
    var eb = {
      "./breach-zero-uncaught.webp": 40682,
      "./breach-zero.webp": 40688,
      "./brood-father-uncaught.webp": 40692,
      "./brood-father.webp": 40699,
      "./carousel-uncaught.webp": 40705,
      "./carousel.webp": 40709,
      "./deadlock-uncaught.webp": 40714,
      "./deadlock.webp": 40717,
      "./doom-warlord-uncaught.webp": 40725,
      "./doom-warlord.webp": 40730,
      "./frost-revenant-uncaught.webp": 40732,
      "./frost-revenant.webp": 40735,
      "./hollow-choir-uncaught.webp": 40743,
      "./hollow-choir.webp": 40751,
      "./magma-warden-uncaught.webp": 40759,
      "./magma-warden.webp": 40768,
      "./patient-zero-uncaught.webp": 40777,
      "./patient-zero.webp": 40781,
      "./siege-engine-uncaught.webp": 40786,
      "./siege-engine.webp": 40795,
      "./warp-stalker-uncaught.webp": 40804,
      "./warp-stalker.webp": 40807
    };

    function Hb(bb) {
      var wb = pb(bb);
      return Mb(wb)
    }

    function pb(bb) {
      if (!Mb.o(eb, bb)) {
        var wb = new Error("Cannot find module '" + bb + "'");
        throw wb.code = "MODULE_NOT_FOUND", wb
      }
      return eb[bb]
    }
    Hb.keys = function() {
      return Object.keys(eb)
    }, Hb.resolve = pb, bb.exports = Hb, Hb.id = 40675
  },
  40682: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/breach-zero-uncaught.c7d4410f99269ac1ee2f.webp"
  },
  40688: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/breach-zero.ef5aacecf502228cd20b.webp"
  },
  40692: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/brood-father-uncaught.ee678432c71b7061fae1.webp"
  },
  40699: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/brood-father.e48391955a574c1155fa.webp"
  },
  40705: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/carousel-uncaught.a92757620f569f31d7d2.webp"
  },
  40709: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/carousel.5fc13db7958067d6e1a3.webp"
  },
  40714: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/deadlock-uncaught.feadbdbbf2d040dce5c0.webp"
  },
  40717: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/deadlock.2bcaeaa57376fd78ddcb.webp"
  },
  40725: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/doom-warlord-uncaught.b25b11d54326d386a901.webp"
  },
  40730: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/doom-warlord.d9ef07d4167ff931b0f0.webp"
  },
  40732: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/frost-revenant-uncaught.c0271636eeae988b1a40.webp"
  },
  40735: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/frost-revenant.fed6021646d7f0f81876.webp"
  },
  40743: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/hollow-choir-uncaught.7eaab76a15f82bd79558.webp"
  },
  40751: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/hollow-choir.05f9c51994aecece852a.webp"
  },
  40759: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/magma-warden-uncaught.5308736fbb8a503cdfc7.webp"
  },
  40768: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/magma-warden.cc4302a49a39ae962a31.webp"
  },
  40777: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/patient-zero-uncaught.1f9ec012a14c4dbdcc8f.webp"
  },
  40781: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/patient-zero.cc76984bb20e9f9ace76.webp"
  },
  40786: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/siege-engine-uncaught.88e0ad7fec37ba2b4a2e.webp"
  },
  40795: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/siege-engine.b2e2382e415f4ae470ac.webp"
  },
  40804: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/warp-stalker-uncaught.c3b1b82ecb18446b71b0.webp"
  },
  40807: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/warp-stalker.851972c629601b668aa7.webp"
  },
  39806: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYElEQVR4nGNgIBIwovH/45JnRFaUGN+Comr+whq4GiZ0RVycnGAMAlAxsC0sMN2fvn9DodEBzEQGdUV5hvNnV4JpGJuPkwtTIQh4umZhZWMonDqjGCsbHcCCBkQjs0kDAPeaHpfX1eroAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);