export const id = 15;
export const ids = [15];
export const modules = {
  38431: (dd, Od, md) => {
    md.d(Od, {
      b: () => Jd,
      f: () => wd,
      h: () => Ed,
      j: () => qd
    });
    var Wd = md(1155),
      Fd = md.n(Wd),
      Rd = md(66),
      Xd = md(86),
      Kd = md(1480),
      hd = md(1572),
      vd = md(1471),
      Qd = md(1333),
      td = md(1238),
      od = md(38439),
      Nd = md(1341);

    function qd(dd) {
      const [Od, md] = (0, Rd.useState)((() => (0, od.l)(dd)));
      return (0, Rd.useEffect)((() => (md((0, od.l)(dd)), (0, od.D)((() => {
        md((0, od.l)(dd))
      })))), [dd]), Od
    }

    function Hd(dd, Od) {
      "function" === typeof dd ? dd(Od) : dd && (dd.current = Od)
    }

    function yd(dd) {
      let {
        tutorial: Od,
        step: md,
        enabled: Wd = !0
      } = dd;
      const Fd = qd(Od);
      return Wd && Fd === md
    }

    function bd(dd, Od) {
      const md = (0, od.m)(dd),
        Wd = md.indexOf(Od);
      return !md.slice(Wd + 1).some((Od => (0, od.v)(dd, Od)))
    }

    function Td(dd, Od, md, Wd) {
      let {
        tutorial: Fd,
        step: Rd,
        waitForClick: Xd = !1,
        onPrevious: Kd
      } = dd;
      const hd = Od && (0, od.r)(Fd, Rd),
        vd = Od && !bd(Fd, Rd),
        td = Xd ? Wd : md;
      let Nd = null;
      hd ? Nd = () => {
        null === Kd || void 0 === Kd || Kd(), (0, od.q)(Fd, Rd)
      } : vd && (Nd = () => {
        (0, od.h)(Fd)
      }), (0, Qd.m)("popup", null !== td && void 0 !== td ? td : md, Nd, Od && null !== td, null, hd ? void 0 : "controller:menusSkipTutorial")
    }

    function pd(dd) {
      let {
        tutorial: Od,
        step: md,
        text: Wd,
        waitForClick: Fd = !1,
        onPrevious: Rd
      } = dd;
      const {
        t: Xd
      } = (0, td.G)(), Kd = bd(Od, md);
      return (0, Nd.jsxs)(Nd.Fragment, {
        children: [(0, Nd.jsx)("div", {
          className: "TutorialStepText",
          children: Wd
        }), (0, Nd.jsxs)("div", {
          className: "TutorialStepButtons",
          children: [(0, od.r)(Od, md) && (0, Nd.jsx)(hd.i, {
            className: "TutorialStepButton",
            onClick: () => {
              null === Rd || void 0 === Rd || Rd(), (0, od.q)(Od, md)
            },
            children: Xd("tutorial:back")
          }), !Fd && (0, Nd.jsx)(hd.g, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, od.e)(md)
            },
            padDefaultFocus: !0,
            children: Xd(Kd ? "tutorial:done" : "tutorial:next")
          }), !Kd && (0, Nd.jsx)(hd.i, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, od.h)(Od)
            },
            children: Xd("tutorial:skip")
          })]
        })]
      })
    }
    const Yd = 6;

    function gd(dd) {
      let {
        rect: Od,
        margin: md
      } = dd;
      const Wd = Math.max(0, Od.top - md),
        Fd = Od.bottom + md,
        Rd = Math.max(0, Od.left - md),
        Xd = Od.right + md;
      return (0, Nd.jsxs)(Nd.Fragment, {
        children: [(0, Nd.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: 0,
            left: 0,
            right: 0,
            height: Wd
          }
        }), (0, Nd.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: Fd,
            left: 0,
            right: 0,
            bottom: 0
          }
        }), (0, Nd.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: Wd,
            left: 0,
            width: Rd,
            height: Fd - Wd
          }
        }), (0, Nd.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: Wd,
            left: Xd,
            right: 0,
            height: Fd - Wd
          }
        })]
      })
    }

    function wd(dd) {
      let {
        target: Od,
        placement: md,
        boxRef: Wd,
        className: hd,
        spotlight: Qd = !0,
        spotlightMargin: td = Yd,
        children: od
      } = dd;
      const {
        getArrowProps: qd,
        getTooltipProps: Hd,
        setTooltipRef: yd,
        setTriggerRef: bd,
        update: Td
      } = (0, Kd.e)({
        placement: md,
        trigger: null,
        visible: !0,
        interactive: !0,
        closeOnOutsideClick: !1,
        offset: [0, td]
      });
      (0, Rd.useLayoutEffect)((() => {
        bd(Od)
      }), [Od, bd]);
      const pd = function(dd, Od) {
        const [md, Wd] = (0, Rd.useState)(null);
        return (0, Rd.useEffect)((() => {
          if (!Od || !dd) return void Wd(null);
          let md = 0,
            Fd = null;
          const Rd = () => {
            const Od = dd.getBoundingClientRect();
            Fd && Od.left === Fd.left && Od.top === Fd.top && Od.width === Fd.width && Od.height === Fd.height || (Fd = Od, Wd(Od)), md = requestAnimationFrame(Rd)
          };
          return Rd(), () => {
            cancelAnimationFrame(md)
          }
        }), [dd, Od]), md
      }(Od, Qd);
      (0, Rd.useEffect)((() => {
        null === Td || void 0 === Td || Td()
      }), [pd, Td]), (0, Rd.useEffect)((() => {
        if (Qd || !Od || !Td) return;
        const dd = new ResizeObserver((() => {
          Td()
        }));
        return dd.observe(Od), Od.parentElement && dd.observe(Od.parentElement), () => {
          dd.disconnect()
        }
      }), [Od, Qd, Td]), (0, Rd.useEffect)((() => {
        Qd && (null === Od || void 0 === Od || Od.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        }))
      }), [Od, Qd]);
      const wd = (0, Rd.useCallback)((dd => {
        yd(dd), Wd && (Wd.current = dd)
      }), [yd, Wd]);
      return (0, Xd.createPortal)((0, Nd.jsxs)(Nd.Fragment, {
        children: [pd && (0, Nd.jsx)(gd, {
          rect: pd,
          margin: td
        }), (0, Nd.jsxs)("div", {
          ref: wd,
          ...Hd({
            className: Fd()("tooltip-container SmallTextLight TutorialStep", hd)
          }),
          children: [od, (0, Nd.jsx)("div", {
            ...qd({
              className: "tooltip-arrow"
            })
          })]
        })]
      }), (0, vd.h)())
    }
    const Ed = (0, Rd.forwardRef)((function(dd, Od) {
      let {
        placement: md = "right",
        children: Wd,
        ...Fd
      } = dd;
      const Xd = yd(Fd),
        Kd = (0, Rd.useRef)(null),
        hd = (0, Rd.useRef)(null);
      Td(Fd, Xd, Kd, hd);
      const [vd, Qd] = (0, Rd.useState)(null), td = Wd.ref, od = (0, Rd.useCallback)((dd => {
        hd.current = dd, Qd(dd), Hd(Od, dd), Hd(td, dd)
      }), [Od, td]);
      return (0, Nd.jsxs)(Nd.Fragment, {
        children: [(0, Rd.cloneElement)(Wd, {
          ref: od
        }), Xd && (0, Nd.jsx)(wd, {
          target: vd,
          placement: md,
          boxRef: Kd,
          children: (0, Nd.jsx)(pd, {
            ...Fd
          })
        })]
      })
    }));

    function Jd(dd) {
      const Od = yd(dd),
        md = (0, Rd.useRef)(null);
      return Td(dd, Od, md, null), Od ? (0, Xd.createPortal)((0, Nd.jsx)("div", {
        className: "TutorialCentreBackdrop",
        children: (0, Nd.jsx)("div", {
          ref: md,
          className: "tooltip-container SmallTextLight TutorialStep TutorialCentreStep",
          children: (0, Nd.jsx)(pd, {
            ...dd
          })
        })
      }), (0, vd.h)()) : null
    }
  },
  40123: (dd, Od, md) => {
    md.d(Od, {
      d: () => Xd
    });
    const Wd = 4,
      Fd = 12e3,
      Rd = 1e3;
    class Xd {
      constructor() {
        let {
          limit: dd = Wd,
          windowMs: Od = Fd,
          spacingMs: md = Rd,
          now: Xd = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = dd, this.windowMs = Od, this.spacingMs = md, this.now = Xd
      }
      isPacing() {
        return !this.canSendPriority() || this.isPriorityWaiting()
      }
      canSendPriority() {
        return this.prune(), this.sent.length < this.limit && this.now() - this.lastSentAt >= this.spacingMs
      }
      tryStart() {
        for (const dd of this.priority) dd.flush();
        return !this.isPacing() && (this.start(), !0)
      }
      start() {
        this.prune();
        const dd = this.now();
        this.sent.push(dd), this.lastSentAt = dd, this.schedule(), this.notify()
      }
      addPriority(dd) {
        return this.priority.add(dd), () => {
          this.priority.delete(dd)
        }
      }
      subscribe(dd) {
        return this.listeners.add(dd), () => {
          this.listeners.delete(dd)
        }
      }
      dispose() {
        this.clearTimer(), this.sent = [], this.listeners.clear(), this.priority.clear()
      }
      isPriorityWaiting() {
        for (const dd of this.priority)
          if (dd.waiting()) return !0;
        return !1
      }
      prune() {
        const dd = this.now() - this.windowMs;
        for (; this.sent.length > 0 && this.sent[0] <= dd;) this.sent.shift()
      }
      schedule() {
        this.clearTimer();
        const dd = this.now(),
          Od = this.lastSentAt + this.spacingMs,
          md = Math.min(Od > dd ? Od : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        md !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, md - dd)))
      }
      notify() {
        for (const dd of this.listeners) dd()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  40087: (dd, Od, md) => {
    md.d(Od, {
      c: () => Wd
    });
    class Wd {
      constructor(dd, Od, md) {
        this.lQ = dd, this.beforeOpen = Od, this.afterClose = md, this.open = !1, this.Aq = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.Aq && (this.open = !0, this.beforeOpen(this), this.emit())
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
      closePanel(dd) {
        this.open = !1, this.onClosed(), this.emit(), this.afterClose(dd)
      }
      onClosed() {}
      dispose() {
        this.open = !1, this.emit(), this.Aq = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.Aq || (this.snapshot = this.buildSnapshot(), this.lQ(this.snapshot))
      }
    }
  },
  40900: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      default: () => Nm
    });
    var Wd = md(66);
    var Fd = md(29),
      Rd = md(2077),
      Xd = md(32),
      Kd = md(3428),
      hd = md(1155),
      vd = md.n(hd),
      Qd = md(1566),
      td = md(1238),
      od = md(5194),
      Nd = md(1459),
      qd = md(1572),
      Hd = md(2079),
      yd = md(1471),
      bd = md(2060),
      Td = md(2125),
      pd = md(231);
    const Yd = md(40909),
      gd = Object.fromEntries(Yd.keys().map((dd => [dd.replace(/^\.\/(.*)\.webp$/, "$1"), Yd(dd)]))),
      wd = new Set;

    function Ed(dd, Od) {
      const md = Od ? dd : `${dd}-uncaught`,
        Wd = (0, pd.b)(gd, md);
      return void 0 !== Wd || wd.has(md) || (wd.add(md), console.warn(`Containment Breach has no mugshot ${md}: run tools/harnessCutouts/ContainmentMugshotCapture.ts`)), Wd
    }
    var Jd = md(1341);
    const Ud = "containmentBreach",
      xd = "Gold Coin";

    function Bd(dd) {
      let {
        open: Od,
        onDismiss: md,
        title: Wd,
        className: Fd,
        decor: Rd,
        headerExtra: Xd,
        status: Kd,
        statusRefused: hd = !1,
        children: Qd
      } = dd;
      const td = `${Fd}Title`;
      return (0, Jd.jsx)(od.c, {
        show: Od,
        close: md,
        togglePointerLock: !1,
        className: "ContainmentBoardOverlay",
        children: (0, Jd.jsxs)("section", {
          className: vd()("ContainmentBoardPanel", Fd),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": td,
          children: [Rd && (0, Jd.jsx)("div", {
            className: "BoardDecor",
            "aria-hidden": "true",
            children: Rd
          }), (0, Jd.jsxs)("header", {
            className: "BoardHeader",
            children: [(0, Jd.jsx)("h2", {
              id: td,
              className: "VisuallyHidden",
              children: Wd
            }), Xd, (0, Jd.jsx)(qd.j, {
              onClick: md
            })]
          }), (0, Jd.jsx)("div", {
            className: "BoardBody",
            children: Qd
          }), void 0 !== Kd && (0, Jd.jsx)("footer", {
            className: vd()("BoardStatus", {
              Refused: hd
            }),
            children: Kd
          })]
        })
      })
    }

    function Sd(dd) {
      let {
        itemName: Od
      } = dd;
      return (0, Jd.jsx)(Hd.c, {
        itemName: Od,
        amount: 0
      })
    }

    function sd(dd) {
      let {
        anomalyId: Od,
        caught: md
      } = dd;
      const Fd = (0, Wd.useRef)(null);
      return (0, Nd.b)(Fd, !md), (0, Jd.jsx)("span", {
        ref: Fd,
        className: vd()("BoardMugshot", {
          Uncaught: !md
        }),
        children: (0, Jd.jsx)("img", {
          src: Ed(Od, md),
          alt: "",
          draggable: !1
        })
      })
    }

    function ud(dd) {
      let {
        itemName: Od,
        amount: md,
        jK: Wd,
        inTile: Fd = !1
      } = dd;
      return (0, Jd.jsx)(yd.g, {
        delayShow: 200,
        hoverOnly: Fd,
        placement: "top",
        tooltipClassName: "BoardChipTooltipBox",
        tooltipInner: (0, Jd.jsx)(Ad, {
          itemName: Od,
          amount: md,
          jK: Wd
        }),
        children: (0, Jd.jsxs)("span", {
          className: vd()("BoardChip", {
            Short: void 0 !== Wd && Wd < md
          }),
          children: [(0, Jd.jsx)("span", {
            className: "BoardChipIcon",
            children: (0, Jd.jsx)(Sd, {
              itemName: Od
            })
          }), md.toLocaleString()]
        })
      })
    }
    const Vd = /^(.*?)\s*Salvaged from (?:an? )?(.+?)\.?$/;

    function Ad(dd) {
      var Od;
      let {
        itemName: md,
        amount: Wd,
        jK: Fd
      } = dd;
      const {
        t: Rd
      } = (0, td.G)(), Xd = (0, Td.f)("itemInfo", (dd => dd[md])), {
        lore: Kd,
        droppedBy: hd
      } = function(dd) {
        if ("string" !== typeof dd) return {
          lore: dd,
          droppedBy: null
        };
        const Od = Vd.exec(dd);
        return null === Od ? {
          lore: dd,
          droppedBy: null
        } : {
          lore: "" === Od[1] ? void 0 : Od[1],
          droppedBy: Od[2]
        }
      }(null === Xd || void 0 === Xd ? void 0 : Xd.description);
      return (0, Jd.jsxs)("div", {
        className: "BoardChipTooltip",
        children: [(0, Jd.jsxs)("div", {
          className: "BoardChipTooltipHeader",
          children: [(0, Jd.jsx)("span", {
            className: "BoardChipTooltipIcon",
            children: (0, Jd.jsx)(Sd, {
              itemName: md
            })
          }), (0, Jd.jsx)(bd.d, {
            text: null !== (Od = null === Xd || void 0 === Xd ? void 0 : Xd.displayName) && void 0 !== Od ? Od : md,
            className: "BoardChipTooltipName"
          })]
        }), (void 0 !== Kd || null !== hd) && (0, Jd.jsxs)("div", {
          className: "BoardChipTooltipBody",
          children: [void 0 !== Kd && (0, Jd.jsx)(bd.d, {
            text: Kd,
            className: "BoardChipTooltipDescription"
          }), null !== hd && (0, Jd.jsxs)("span", {
            className: "BoardChipTooltipSource",
            children: [(0, Jd.jsx)("span", {
              className: "BoardChipTooltipLabel",
              children: Rd(`${Ud}:chipDroppedBy`)
            }), hd]
          })]
        }), void 0 !== Fd && (0, Jd.jsxs)("div", {
          className: vd()("BoardChipTooltipHeld", {
            Short: Fd < Wd
          }),
          children: [(0, Jd.jsx)("span", {
            className: "BoardChipTooltipLabel",
            children: Rd(`${Ud}:chipYouHave`)
          }), (0, Jd.jsxs)("span", {
            className: "BoardChipTooltipCount",
            children: [(0, Jd.jsx)("span", {
              className: "BoardChipTooltipHeldAmount",
              children: Fd.toLocaleString()
            }), ` / ${Wd.toLocaleString()}`]
          }), (0, Jd.jsx)("span", {
            className: "BoardChipTooltipMeter",
            children: (0, Jd.jsx)("span", {
              style: {
                width: (Wd > 0 ? 100 * Math.min(1, Fd / Wd) : 100) + "%"
              }
            })
          })]
        })]
      })
    }

    function rd(dd) {
      let {
        icon: Od,
        name: md,
        selected: Wd,
        locked: Fd,
        className: Rd,
        buttonRef: Xd,
        onSelect: Kd,
        children: hd
      } = dd;
      return (0, Jd.jsxs)("button", {
        ref: Xd,
        type: "button",
        className: vd()("BoardTile", Rd, {
          Selected: Wd,
          Locked: Fd
        }),
        onClick: Kd,
        children: [(0, Jd.jsx)("span", {
          className: "BoardTileIcon",
          children: Od
        }), (0, Jd.jsx)("span", {
          className: "BoardTileName",
          children: md
        }), hd]
      })
    }

    function Gd(dd) {
      let {
        icon: Od,
        name: md,
        children: Wd
      } = dd;
      return (0, Jd.jsxs)("header", {
        className: "BoardDetailHeader",
        children: [(0, Jd.jsx)("span", {
          className: "BoardDetailIcon",
          children: Od
        }), (0, Jd.jsxs)("div", {
          className: "BoardDetailHeading",
          children: [(0, Jd.jsx)("h3", {
            children: md
          }), (0, Jd.jsx)("span", {
            className: "BoardDetailStatus",
            children: Wd
          })]
        })]
      })
    }

    function nd(dd) {
      let {
        coins: Od,
        children: md
      } = dd;
      return (0, Jd.jsxs)("div", {
        className: "BoardWallet",
        children: [(0, Jd.jsx)(ud, {
          itemName: xd,
          amount: Od
        }), md]
      })
    }
    var Ld = md(40087);
    const Pd = "containmentCodexView";
    class zd extends Ld.c {
      constructor() {
        super(...arguments), this.entries = [], this.selectedId = "", this.snapshot = this.buildSnapshot(), this.select = dd => {
          this.selectedId = dd, this.emit()
        }
      }
      Yt(dd) {
        this.entries = dd.codexEntries, this.selectedId = this.entries[0].codexEntryId, this.showOrRefresh()
      }
      buildSnapshot() {
        return {
          open: this.open,
          entries: this.entries,
          selectedId: this.selectedId
        }
      }
    }
    const cd = {
        codexAnyDifficulty: `${Ud}:codexNeedsAny`,
        codexNormalOnly: `${Ud}:codexNeedsNormal`,
        codexHardOnly: `${Ud}:codexNeedsHard`
      },
      jd = {
        codexContained: "Contained",
        codexEncountered: "Sighted",
        codexUnidentified: "Unknown"
      },
      Dd = {
        codexContained: `${Ud}:codexContainedBadge`,
        codexEncountered: `${Ud}:codexEncounteredBadge`,
        codexUnidentified: `${Ud}:codexUnidentifiedBadge`
      },
      ed = ["94%", "81%", "88%", "46%", "72%"];

    function Id(dd) {
      let {
        entry: Od
      } = dd;
      const {
        t: md
      } = (0, td.G)();
      return (0, Jd.jsx)("span", {
        className: vd()("BoardBadge", jd[Od.codexEntryState]),
        children: md(Dd[Od.codexEntryState])
      })
    }

    function ld(dd) {
      const {
        t: Od
      } = (0, td.G)();
      return "codexUnidentified" === dd.codexEntryState ? Od(`${Ud}:codexUnidentifiedName`) : dd.codexEntryName
    }

    function Cd(dd) {
      let {
        entry: Od
      } = dd;
      return "codexUnidentified" === Od.codexEntryState ? (0, Jd.jsx)(Sd, {
        itemName: "Book"
      }) : (0, Jd.jsxs)("span", {
        className: "CodexPhoto",
        children: [(0, Jd.jsx)(sd, {
          anomalyId: Od.codexEntryId,
          caught: "codexContained" === Od.codexEntryState
        }), (0, Jd.jsx)("img", {
          className: "CodexPaperclip",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAMCAYAAACulacQAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGNggIIXb97/X7V57/+Wvtn/GZDBqs17UQTgClahScBATHrlf5ySeHWimo9NMbokCp9OkmD/oasGCaJLAAC5ZUIBS85GiAAAAABJRU5ErkJggg==",
          alt: "",
          draggable: !1
        })]
      })
    }

    function Zd(dd) {
      let {
        entry: Od,
        selected: md,
        onSelect: Wd
      } = dd;
      const Fd = "codexUnidentified" === Od.codexEntryState;
      return (0, Jd.jsxs)(rd, {
        icon: (0, Jd.jsx)(Cd, {
          entry: Od
        }),
        name: ld(Od),
        selected: md,
        locked: Fd,
        className: vd()("CodexFolder", jd[Od.codexEntryState]),
        onSelect: () => {
          Wd(Od.codexEntryId)
        },
        children: [!Fd && (0, Jd.jsx)(Id, {
          entry: Od
        }), Fd && (0, Jd.jsx)("img", {
          className: "CodexSeal",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAARElEQVR4nGNggIIGHp7/MAzjw+TAnMf+/mB8RkQEjOGKYZLIgsiK4AqQJZA1gBXAOHgVwCRQJJEdCVOEYj8yQPciTAEAz0hgyamUqskAAAAASUVORK5CYII=",
          alt: "",
          draggable: !1
        })]
      })
    }

    function kd(dd) {
      let {
        count: Od
      } = dd;
      const md = [];
      for (let Wd = Math.min(Od, 25); Wd > 0; Wd -= 5) md.push(Math.min(Wd, 5));
      return (0, Jd.jsx)("span", {
        className: "CodexTallyMarks",
        "aria-hidden": "true",
        children: md.map(((dd, Od) => (0, Jd.jsx)("span", {
          className: vd()("CodexTallyGroup", {
            Gate: 5 === dd
          }),
          children: Array.from({
            length: Math.min(dd, 4)
          }, ((dd, Od) => (0, Jd.jsx)("span", {
            className: "CodexTallyMark"
          }, Od)))
        }, Od)))
      })
    }

    function fd(dd) {
      let {
        contained: Od,
        total: md
      } = dd;
      const {
        t: Wd
      } = (0, td.G)();
      return (0, Jd.jsxs)("div", {
        className: "CodexProgress",
        children: [Wd(`${Ud}:codexProgress`, {
          contained: String(Od),
          total: String(md)
        }), (0, Jd.jsx)("span", {
          className: "CodexProgressMeter",
          children: (0, Jd.jsx)("span", {
            style: {
              width: Od / md * 100 + "%"
            }
          })
        })]
      })
    }

    function Md(dd) {
      let {
        entry: Od,
        fileNumber: md
      } = dd;
      const {
        t: Wd
      } = (0, td.G)(), Fd = "codexContained" === Od.codexEntryState;
      return (0, Jd.jsx)("section", {
        className: "BoardDetail",
        children: (0, Jd.jsxs)("article", {
          className: vd()("CodexDossier", jd[Od.codexEntryState]),
          children: [(0, Jd.jsx)("span", {
            className: "CodexFileNumber",
            children: Wd(`${Ud}:codexFileNumber`, {
              number: String(md).padStart(3, "0")
            })
          }), (0, Jd.jsx)(Gd, {
            icon: (0, Jd.jsx)(Cd, {
              entry: Od
            }),
            name: ld(Od),
            children: (0, Jd.jsx)(Id, {
              entry: Od
            })
          }), Fd && (0, Jd.jsxs)(Jd.Fragment, {
            children: [(0, Jd.jsx)("p", {
              className: "BoardDescription",
              children: Od.codexEntryLore
            }), (0, Jd.jsxs)("p", {
              className: "CodexTally",
              children: [Wd(`${Ud}:codexContainments`, {
                count: String(Od.codexEntryContainedCount)
              }), (0, Jd.jsx)(kd, {
                count: Od.codexEntryContainedCount
              })]
            }), (0, Jd.jsx)("span", {
              className: "CodexClosedStamp",
              "aria-hidden": "true",
              children: Wd(`${Ud}:codexContainedBadge`)
            })]
          }), !Fd && (0, Jd.jsxs)(Jd.Fragment, {
            children: [(0, Jd.jsxs)("div", {
              className: "CodexRedaction",
              children: [ed.map((dd => (0, Jd.jsx)("span", {
                className: "CodexRedactedLine",
                style: {
                  width: dd
                }
              }, dd))), (0, Jd.jsx)("p", {
                className: "CodexRedacted",
                children: Wd(`${Ud}:codexRedacted`)
              })]
            }), "" !== Od.codexEntryHint && (0, Jd.jsxs)("aside", {
              className: "CodexNote",
              children: [(0, Jd.jsx)("h4", {
                children: Wd(`${Ud}:codexHintLabel`)
              }), (0, Jd.jsx)("p", {
                children: Od.codexEntryHint
              })]
            }), (0, Jd.jsx)("p", {
              className: "CodexClearance",
              children: Wd(cd[Od.codexEntryDifficulty])
            })]
          })]
        })
      })
    }

    function dO(dd) {
      let {
        controller: Od
      } = dd;
      const md = (0, Qd.i)(Pd, Od.getSnapshot()),
        {
          t: Wd
        } = (0, td.G)();
      if (0 === md.entries.length) return null;
      const Fd = md.entries.find((dd => dd.codexEntryId === md.selectedId)),
        Rd = md.entries.filter((dd => "codexContained" === dd.codexEntryState)).length,
        Xd = md.entries.map((dd => dd.codexEntryId)).sort().indexOf(Fd.codexEntryId) + 1;
      return (0, Jd.jsxs)(Bd, {
        open: md.open,
        onDismiss: Od.dismiss,
        title: Wd(`${Ud}:codexTitle`),
        className: "ContainmentCodexPanel",
        headerExtra: (0, Jd.jsx)(fd, {
          contained: Rd,
          total: md.entries.length
        }),
        children: [(0, Jd.jsx)("div", {
          className: "BoardTiles",
          children: md.entries.map((dd => (0, Jd.jsx)(Zd, {
            entry: dd,
            selected: dd === Fd,
            onSelect: Od.select
          }, dd.codexEntryId)))
        }), (0, Jd.jsx)(Md, {
          entry: Fd,
          fileNumber: Xd
        })]
      })
    }
    var OO = md(405);
    class mO extends Ld.c {
      constructor(dd, Od, md, Wd, Fd, Rd) {
        super(dd, Od, md), this.pacer = Wd, this.command = Fd, this.predict = Rd, this.board = null, this.confirmed = null, this.selectedId = "", this.notice = null, this.unsubscribePacer = void 0, this.select = dd => {
          this.selectedId = dd, this.emit()
        }, this.act = (dd, Od) => {
          if (!this.open || null === this.board || !this.pacer.send(`${this.command} ${dd} ${Od}`, this.rollBack)) return;
          const md = this.predict(this.board, dd, Od);
          null !== md && (this.board = md.board, this.notice = md.notice, this.emit())
        }, this.rollBack = () => {
          this.board !== this.confirmed && (this.board = this.confirmed, this.notice = null)
        }, this.unsubscribePacer = Wd.subscribe((() => {
          this.emit()
        }))
      }
      Yt(dd) {
        const Od = this.messageOpens(dd);
        if (Od && this.open) return this.board === this.confirmed && (this.board = dd), this.confirmed = dd, void this.emit();
        if (this.board = dd, this.confirmed = dd, this.pacer.onReply(), Od) return this.notice = null, this.selectedId = this.openingSelection(dd), void this.show();
        const md = this.messageNotice(dd);
        null !== md && (this.notice = md), this.emit()
      }
      dispose() {
        this.unsubscribePacer(), super.dispose()
      }
      onClosed() {
        this.notice = null
      }
    }

    function WO(dd, Od) {
      return dd.loadoutCoins >= Od.loadoutCostCoins && Od.loadoutCostParts.every((Od => function(dd, Od) {
        return FO(dd, Od).loadoutHeldPartAmount
      }(dd, Od.loadoutPartCurrency) >= Od.loadoutPartAmount))
    }

    function FO(dd, Od) {
      return dd.loadoutHeldParts.find((dd => dd.loadoutHeldPartCurrency === Od))
    }

    function RO(dd, Od) {
      return dd.loadoutSlots.find((dd => dd.loadoutSlotKind === Od))
    }

    function XO(dd) {
      return dd.loadoutPerks.filter((dd => dd.loadoutPerkEquipped)).length >= dd.loadoutMaxPerks
    }

    function KO(dd, Od, md) {
      for (const Fd of dd.loadoutSlots) {
        const Wd = Fd.loadoutSlotOptions.find((dd => dd.loadoutOptionId === md));
        if (Wd) return "loadoutArmour" === Fd.loadoutSlotKind ? vO(dd, Fd, Wd, Od) : hO(dd, Fd, Wd, Od)
      }
      const Wd = dd.loadoutPerks.find((dd => dd.loadoutPerkId === md));
      return Wd ? function(dd, Od, md) {
        const Wd = Od.loadoutPerkOwned,
          Fd = Od.loadoutPerkEquipped,
          Rd = Od.loadoutPerkName,
          Xd = XO(dd);
        if ("loadoutUnlock" === md) {
          if (Wd || !WO(dd, Od.loadoutPerkCost)) return null;
          const md = {
            ...Od,
            loadoutPerkOwned: !0,
            loadoutPerkEquipped: !Xd
          };
          return {
            board: tO(oO(dd, Od.loadoutPerkCost), md),
            notice: NO(Xd ? "loadoutNoticeUnlockedNoRoom" : "loadoutNoticeUnlocked", Rd)
          }
        }
        if ("loadoutUpgrade" === md || !Wd || "loadoutEquip" === md === Fd || !Fd && Xd) return null;
        return {
          board: tO(dd, {
            ...Od,
            loadoutPerkEquipped: !Fd
          }),
          notice: NO(Fd ? "loadoutNoticeUnequipped" : "loadoutNoticeEquipped", Rd)
        }
      }(dd, Wd, Od) : null
    }

    function hO(dd, Od, md, Wd) {
      const Fd = md.loadoutOptionOwnedTier,
        Rd = md.loadoutOptionName;
      if ("loadoutEquip" === Wd) return 0 === Fd ? null : {
        board: QO(dd, Od, md.loadoutOptionId, null),
        notice: NO("loadoutNoticeEquipped", Rd)
      };
      const Xd = "loadoutUnlock" === Wd;
      if (Xd && 0 !== Fd || "loadoutUpgrade" === Wd && (0 === Fd || Fd >= md.loadoutOptionTiers.length) || "loadoutUnequip" === Wd) return null;
      const Kd = md.loadoutOptionTiers[Fd].loadoutTierCost;
      if (!WO(dd, Kd)) return null;
      const hd = {
          ...md,
          loadoutOptionOwnedTier: Fd + 1
        },
        vd = Xd ? md.loadoutOptionId : Od.loadoutSlotEquippedId;
      return {
        board: QO(oO(dd, Kd), Od, vd, hd),
        notice: Xd ? NO("loadoutNoticeUnlocked", Rd) : NO("loadoutNoticeUpgraded", Rd, Fd + 1)
      }
    }

    function vO(dd, Od, md, Wd) {
      const Fd = md.loadoutOptionOwnedTier > 0,
        Rd = md.loadoutOptionName;
      if ("loadoutEquip" === Wd && Fd) return {
        board: QO(dd, Od, md.loadoutOptionId, null),
        notice: NO("loadoutNoticeEquipped", Rd)
      };
      const Xd = md.loadoutOptionTiers[0].loadoutTierCost;
      return "loadoutUnlock" !== Wd || Fd || !WO(dd, Xd) ? null : {
        board: QO(oO(dd, Xd), Od, md.loadoutOptionId, {
          ...md,
          loadoutOptionOwnedTier: 1
        }),
        notice: NO("loadoutNoticeUnlocked", Rd)
      }
    }

    function QO(dd, Od, md, Wd) {
      const Fd = {
        ...Od,
        loadoutSlotEquippedId: md,
        loadoutSlotOptions: Od.loadoutSlotOptions.map((dd => null !== Wd && dd.loadoutOptionId === Wd.loadoutOptionId ? Wd : dd))
      };
      return {
        ...dd,
        loadoutSlots: dd.loadoutSlots.map((dd => dd === Od ? Fd : dd))
      }
    }

    function tO(dd, Od) {
      return {
        ...dd,
        loadoutPerks: dd.loadoutPerks.map((dd => dd.loadoutPerkId === Od.loadoutPerkId ? Od : dd))
      }
    }

    function oO(dd, Od) {
      return {
        ...dd,
        loadoutCoins: dd.loadoutCoins - Od.loadoutCostCoins,
        loadoutHeldParts: dd.loadoutHeldParts.map((dd => {
          const md = Od.loadoutCostParts.find((Od => Od.loadoutPartCurrency === dd.loadoutHeldPartCurrency));
          return md ? {
            ...dd,
            loadoutHeldPartAmount: dd.loadoutHeldPartAmount - md.loadoutPartAmount
          } : dd
        }))
      }
    }

    function NO(dd, Od) {
      return {
        loadoutNoticeKey: dd,
        loadoutNoticeRefused: !1,
        loadoutNoticeName: Od,
        loadoutNoticeTier: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
      }
    }
    const qO = "containmentLoadoutView";
    class HO extends mO {
      constructor(dd, Od, md, Wd) {
        super(dd, Od, md, Wd, "loadout", KO), this.slot = "loadoutPrimary", this.snapshot = this.buildSnapshot(), this.selectSlot = dd => {
          this.slot = dd, this.selectedId = yO(this.board, dd), this.emit()
        }
      }
      messageOpens(dd) {
        return dd.loadoutMessageOpens
      }
      messageNotice(dd) {
        return dd.loadoutNotice
      }
      openingSelection(dd) {
        return yO(dd, this.slot)
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

    function yO(dd, Od) {
      if ("loadoutPerks" === Od) {
        var md;
        const Od = dd.loadoutPerks;
        return (null !== (md = Od.find((dd => dd.loadoutPerkEquipped))) && void 0 !== md ? md : Od[0]).loadoutPerkId
      }
      return RO(dd, Od).loadoutSlotEquippedId
    }
    const bO = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAY0lEQVR4nGNgIAP8x4FRwP/sFt3/EYU6YBqGIwp1MBSDBUH4/3nW//83csD5DOgKfeKNsWIMhV+///qvbOT7/87cMjCG8TEUgiSLqlpRMEgMQ+HJvgy4aTAMEsPqc2KChyAAAFxNbnylK5O6AAAAAElFTkSuQmCC";
    var TO = md(38431),
      pO = md(1333);
    const YO = {
        loadoutPrimary: `${Ud}:loadoutSlotPrimary`,
        loadoutSecondary: `${Ud}:loadoutSlotSecondary`,
        loadoutOffensive: `${Ud}:loadoutSlotOffensive`,
        loadoutSelfHelp: `${Ud}:loadoutSlotSelfHelp`,
        loadoutArmour: `${Ud}:loadoutSlotArmour`,
        loadoutPerks: `${Ud}:loadoutSlotPerks`
      },
      gO = {
        section: "right",
        xN: "bottom",
        act: "top"
      },
      wO = (0, Wd.createContext)({
        step: null,
        targetRef: () => {}
      });

    function aO() {
      const {
        step: dd,
        targetRef: Od
      } = (0, Wd.useContext)(wO);
      return (md, Wd) => (null === dd || void 0 === dd ? void 0 : dd.kind) === md && dd.id === Wd ? Od : void 0
    }

    function EO(dd, Od) {
      const md = Od.loadoutTargetId;
      if ("loadoutPerks" === Od.loadoutTargetSection) {
        const Od = dd.loadoutPerks.find((dd => dd.loadoutPerkId === md));
        return {
          name: Od.loadoutPerkName,
          owned: Od.loadoutPerkOwned,
          equipped: Od.loadoutPerkEquipped
        }
      }
      const Wd = RO(dd, Od.loadoutTargetSection),
        Fd = Wd.loadoutSlotOptions.find((dd => dd.loadoutOptionId === md));
      return {
        name: Fd.loadoutOptionName,
        owned: Fd.loadoutOptionOwnedTier > 0,
        equipped: Wd.loadoutSlotEquippedId === md
      }
    }

    function JO(dd, Od, md, Wd) {
      const [Fd, Rd] = dd(`${Ud}:${Od}`, {
        [md]: "\x01"
      }).split("\x01");
      return (0, Jd.jsxs)(Jd.Fragment, {
        children: [Fd, (0, Jd.jsx)("span", {
          className: "LoadoutWalkthroughName",
          children: Wd
        }), Rd]
      })
    }

    function UO(dd) {
      let {
        view: Od,
        onDismiss: md,
        children: Fd
      } = dd;
      const {
        t: Rd
      } = (0, td.G)(), Xd = Od.loadout, Kd = Od.open ? Xd.loadoutWalkthrough.map((dd => ({
        target: dd,
        info: EO(Xd, dd)
      }))).find((dd => {
        let {
          info: Od
        } = dd;
        return !Od.equipped
      })) : void 0;
      let hd = null,
        vd = null;
      if (void 0 !== Kd) {
        const {
          target: dd,
          info: md
        } = Kd;
        Od.slot !== dd.loadoutTargetSection ? (hd = {
          kind: "section",
          id: dd.loadoutTargetSection
        }, vd = JO(Rd, "loadoutWalkthroughSection", "section", Rd(YO[dd.loadoutTargetSection]))) : Od.selectedId !== dd.loadoutTargetId ? (hd = {
          kind: "xN",
          id: dd.loadoutTargetId
        }, vd = JO(Rd, "loadoutWalkthroughPick", "name", md.name)) : (hd = {
          kind: "act",
          id: dd.loadoutTargetId
        }, vd = JO(Rd, md.owned ? "loadoutWalkthroughEquip" : "loadoutWalkthroughUnlock", "name", md.name))
      }
      const Qd = null === hd ? null : function(dd) {
          return `${dd.kind}:${dd.id}`
        }(hd),
        [od, Nd] = (0, Wd.useState)(null),
        qd = (0, Wd.useCallback)((dd => {
          Nd((Od => null !== dd ? {
            key: Qd,
            node: dd
          } : (null === Od || void 0 === Od ? void 0 : Od.key) === Qd ? null : Od))
        }), [Qd]),
        Hd = null !== Qd && (null === od || void 0 === od ? void 0 : od.key) === Qd ? od.node : null;
      return (0, Jd.jsxs)(wO.Provider, {
        value: {
          step: hd,
          targetRef: qd
        },
        children: [Fd, null !== hd && null !== Hd && (0, Jd.jsx)(xO, {
          target: Hd,
          placement: gO[hd.kind],
          onDismiss: md,
          children: vd
        }, Qd)]
      })
    }

    function xO(dd) {
      let {
        target: Od,
        placement: md,
        onDismiss: Fd,
        children: Rd
      } = dd;
      const {
        t: Xd
      } = (0, td.G)(), Kd = (0, Wd.useRef)(Od);
      return Kd.current = Od, (0, pO.m)("popup", Kd, Fd), (0, Jd.jsxs)(TO.f, {
        target: Od,
        placement: md,
        className: "LoadoutWalkthroughStep",
        spotlightMargin: 10,
        children: [(0, Jd.jsxs)("div", {
          className: "LoadoutWalkthroughHeader",
          children: [(0, Jd.jsx)("img", {
            className: "LoadoutWalkthroughPortrait",
            src: bO,
            alt: "",
            draggable: !1
          }), (0, Jd.jsx)("span", {
            className: "LoadoutWalkthroughSpeaker",
            children: Xd(`${Ud}:operatorName`)
          }), (0, Jd.jsx)(qd.j, {
            onClick: Fd,
            ariaLabel: Xd(`${Ud}:loadoutWalkthroughClose`),
            padIgnore: !0
          })]
        }), (0, Jd.jsx)("p", {
          className: "LoadoutWalkthroughText",
          children: Rd
        })]
      })
    }
    const BO = new Set(["loadoutStatReload", "loadoutStatResupply"]);

    function SO(dd) {
      let {
        cost: Od,
        loadout: md
      } = dd;
      const {
        t: Wd
      } = (0, td.G)();
      return Od.loadoutCostCoins <= 0 && 0 === Od.loadoutCostParts.length ? (0, Jd.jsx)("span", {
        className: "LoadoutCost",
        children: Wd(`${Ud}:loadoutFree`)
      }) : (0, Jd.jsxs)("span", {
        className: "LoadoutCost",
        children: [Od.loadoutCostCoins > 0 && (0, Jd.jsx)(ud, {
          itemName: xd,
          amount: Od.loadoutCostCoins,
          jK: md.loadoutCoins
        }), Od.loadoutCostParts.map((dd => {
          const Od = FO(md, dd.loadoutPartCurrency);
          return (0, Jd.jsx)(ud, {
            itemName: Od.loadoutHeldPartItem,
            amount: dd.loadoutPartAmount,
            jK: Od.loadoutHeldPartAmount
          }, dd.loadoutPartCurrency)
        }))]
      })
    }
    const sO = {
      loadoutStatFireRate: `${Ud}:loadoutUnitPerMinute`,
      loadoutStatReload: `${Ud}:loadoutUnitSeconds`,
      loadoutStatResupply: `${Ud}:loadoutUnitSeconds`
    };

    function uO(dd) {
      return "loadoutStatPotency" === dd.loadoutStatKind ? (0, OO.K)(dd.loadoutStatValue) : String(dd.loadoutStatValue)
    }

    function VO(dd) {
      var Od;
      let {
        option: md
      } = dd;
      const {
        t: Wd
      } = (0, td.G)(), Fd = md.loadoutOptionTiers, Rd = null === (Od = Fd[0]) || void 0 === Od ? void 0 : Od.loadoutTierStats.map((dd => dd.loadoutStatKind));
      if (!Rd || 0 === Rd.length) return null;
      const Xd = md.loadoutOptionOwnedTier,
        Kd = (dd, Od) => {
          var md;
          return null === (md = Fd[dd]) || void 0 === md ? void 0 : md.loadoutTierStats.find((dd => dd.loadoutStatKind === Od))
        };
      return (0, Jd.jsxs)("table", {
        className: "LoadoutTierTable",
        children: [(0, Jd.jsx)("thead", {
          children: (0, Jd.jsxs)("tr", {
            children: [(0, Jd.jsx)("th", {}), Fd.map(((dd, Od) => (0, Jd.jsx)("th", {
              className: vd()({
                Current: Od + 1 === Xd,
                Next: Od === Xd
              }),
              children: Wd(`${Ud}:loadoutTier`, {
                tier: (0, OO.K)(Od + 1)
              })
            }, Od)))]
          })
        }), (0, Jd.jsx)("tbody", {
          children: Rd.map((dd => {
            const Od = sO[dd];
            return (0, Jd.jsxs)("tr", {
              children: [(0, Jd.jsxs)("th", {
                scope: "row",
                children: [Wd(`${Ud}:${dd}`), Od && (0, Jd.jsx)("span", {
                  className: "LoadoutStatUnit",
                  children: Wd(Od)
                })]
              }), Fd.map(((Od, md) => {
                const Wd = Kd(md, dd),
                  Fd = md > 0 ? Kd(md - 1, dd) : void 0,
                  Rd = Wd && Fd ? Wd.loadoutStatValue - Fd.loadoutStatValue : 0,
                  hd = BO.has(dd) ? Rd < 0 : Rd > 0,
                  Qd = md === Xd;
                return (0, Jd.jsxs)("td", {
                  className: vd()({
                    Current: md + 1 === Xd,
                    Next: Qd,
                    Gain: hd,
                    Owned: md < Xd
                  }),
                  children: [Qd && hd && (0, Jd.jsx)("span", {
                    className: "LoadoutGainArrow",
                    "aria-hidden": "true",
                    children: Rd < 0 ? "\u25bc" : "\u25b2"
                  }), Wd ? uO(Wd) : "-"]
                }, md)
              }))]
            }, dd)
          }))
        })]
      })
    }

    function iO(dd) {
      let {
        view: Od,
        controller: md,
        slot: Wd,
        option: Fd
      } = dd;
      const {
        t: Rd
      } = (0, td.G)(), Xd = Od.loadout, Kd = Fd.loadoutOptionOwnedTier, hd = Fd.loadoutOptionTiers.length, vd = Wd.loadoutSlotEquippedId === Fd.loadoutOptionId, Qd = Kd < hd ? Fd.loadoutOptionTiers[Kd].loadoutTierCost : null, od = null !== Qd && WO(Xd, Qd), Nd = Fd.loadoutOptionId, Hd = aO();
      return (0, Jd.jsxs)(Jd.Fragment, {
        children: [(0, Jd.jsx)(rO, {
          icon: Fd.loadoutOptionIcon,
          name: Fd.loadoutOptionName,
          status: 0 === Kd ? Rd(`${Ud}:loadoutLocked`) : hd > 1 ? Rd(`${Ud}:loadoutTier`, {
            tier: (0, OO.K)(Kd)
          }) : null,
          locked: 0 === Kd,
          equipped: vd
        }), (0, Jd.jsx)("p", {
          className: "BoardDescription",
          children: Fd.loadoutOptionDescription
        }), (0, Jd.jsx)(VO, {
          option: Fd
        }), (0, Jd.jsxs)("div", {
          ref: Hd("act", Nd),
          className: "BoardActions",
          children: [null !== Qd && (0, Jd.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, Jd.jsx)(SO, {
              cost: Qd,
              loadout: Xd
            }), (0, Jd.jsx)(qd.m, {
              disabled: !od || Od.pending,
              onClick: () => {
                md.act(0 === Kd ? "loadoutUnlock" : "loadoutUpgrade", Nd)
              },
              children: 0 === Kd ? Rd(`${Ud}:loadoutUnlock`) : Rd(`${Ud}:loadoutUpgrade`, {
                tier: (0, OO.K)(Kd + 1)
              })
            })]
          }), null === Qd && hd > 1 && (0, Jd.jsx)("span", {
            className: "BoardHint",
            children: Rd(`${Ud}:loadoutMaxed`)
          }), Kd > 0 && !vd && (0, Jd.jsx)(qd.g, {
            disabled: Od.pending,
            onClick: () => {
              md.act("loadoutEquip", Nd)
            },
            children: Rd(`${Ud}:loadoutEquip`)
          })]
        })]
      })
    }

    function AO(dd) {
      let {
        view: Od,
        controller: md,
        perk: Wd
      } = dd;
      const {
        t: Fd
      } = (0, td.G)(), Rd = Od.loadout, Xd = XO(Rd), Kd = Wd.loadoutPerkId, hd = aO();
      return (0, Jd.jsxs)(Jd.Fragment, {
        children: [(0, Jd.jsx)(rO, {
          icon: Wd.loadoutPerkIcon,
          name: Wd.loadoutPerkName,
          status: Wd.loadoutPerkOwned ? null : Fd(`${Ud}:loadoutLocked`),
          locked: !Wd.loadoutPerkOwned,
          equipped: Wd.loadoutPerkEquipped
        }), (0, Jd.jsx)("p", {
          className: "BoardDescription",
          children: Wd.loadoutPerkDescription
        }), (0, Jd.jsxs)("div", {
          ref: hd("act", Kd),
          className: "BoardActions",
          children: [!Wd.loadoutPerkOwned && (0, Jd.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, Jd.jsx)(SO, {
              cost: Wd.loadoutPerkCost,
              loadout: Rd
            }), (0, Jd.jsx)(qd.m, {
              disabled: !WO(Rd, Wd.loadoutPerkCost) || Od.pending,
              onClick: () => {
                md.act("loadoutUnlock", Kd)
              },
              children: Fd(`${Ud}:loadoutUnlock`)
            })]
          }), Wd.loadoutPerkOwned && !Wd.loadoutPerkEquipped && (0, Jd.jsx)(qd.g, {
            disabled: Xd || Od.pending,
            onClick: () => {
              md.act("loadoutEquip", Kd)
            },
            children: Fd(`${Ud}:loadoutEquip`)
          }), Wd.loadoutPerkOwned && !Wd.loadoutPerkEquipped && Xd && (0, Jd.jsx)("span", {
            className: "BoardHint",
            children: Fd(`${Ud}:loadoutSocketsFullHint`)
          }), Wd.loadoutPerkEquipped && (0, Jd.jsx)(qd.S, {
            disabled: Od.pending,
            onClick: () => {
              md.act("loadoutUnequip", Kd)
            },
            children: Fd(`${Ud}:loadoutUnequip`)
          })]
        })]
      })
    }

    function rO(dd) {
      let {
        icon: Od,
        name: md,
        status: Wd,
        locked: Fd,
        equipped: Rd
      } = dd;
      const {
        t: Xd
      } = (0, td.G)();
      return (0, Jd.jsxs)(Gd, {
        icon: (0, Jd.jsx)(Sd, {
          itemName: Od
        }),
        name: md,
        children: [null !== Wd && (0, Jd.jsx)("span", {
          className: vd()("LoadoutStatusText", {
            Locked: Fd
          }),
          children: Wd
        }), Rd && (0, Jd.jsx)("span", {
          className: "BoardBadge",
          children: Xd(`${Ud}:loadoutEquippedBadge`)
        })]
      })
    }

    function GO(dd) {
      let {
        view: Od,
        controller: md
      } = dd;
      const Wd = Od.loadout;
      if ("loadoutPerks" === Od.slot) {
        const dd = Wd.loadoutPerks.find((dd => dd.loadoutPerkId === Od.selectedId));
        return (0, Jd.jsx)("section", {
          className: "BoardDetail",
          children: dd && (0, Jd.jsx)(AO, {
            view: Od,
            controller: md,
            perk: dd
          })
        })
      }
      const Fd = RO(Wd, Od.slot),
        Rd = Fd.loadoutSlotOptions.find((dd => dd.loadoutOptionId === Od.selectedId));
      return (0, Jd.jsx)("section", {
        className: "BoardDetail",
        children: Rd && (0, Jd.jsx)(iO, {
          view: Od,
          controller: md,
          slot: Fd,
          option: Rd
        })
      })
    }

    function nO(dd) {
      let {
        owned: Od,
        total: md
      } = dd;
      return md <= 1 ? null : (0, Jd.jsx)("span", {
        className: "LoadoutPips",
        children: Array.from({
          length: md
        }, ((dd, md) => (0, Jd.jsx)("span", {
          className: vd()("LoadoutPip", {
            Filled: md < Od
          })
        }, md)))
      })
    }

    function LO(dd) {
      let {
        view: Od,
        controller: md
      } = dd;
      const {
        t: Wd
      } = (0, td.G)(), Fd = Od.loadout, Rd = aO();
      return (0, Jd.jsxs)("nav", {
        className: "LoadoutKit",
        "aria-label": Wd(`${Ud}:loadoutKit`),
        children: [Fd.loadoutSlots.map((dd => {
          const Fd = dd.loadoutSlotOptions.find((Od => Od.loadoutOptionId === dd.loadoutSlotEquippedId));
          return (0, Jd.jsxs)("button", {
            ref: Rd("section", dd.loadoutSlotKind),
            type: "button",
            className: vd()("LoadoutKitSlot", {
              Selected: Od.slot === dd.loadoutSlotKind
            }),
            onClick: () => {
              md.selectSlot(dd.loadoutSlotKind)
            },
            children: [(0, Jd.jsx)("span", {
              className: "LoadoutKitIcon",
              children: Fd && (0, Jd.jsx)(Sd, {
                itemName: Fd.loadoutOptionIcon
              })
            }), (0, Jd.jsxs)("span", {
              className: "LoadoutKitText",
              children: [(0, Jd.jsxs)("span", {
                className: "LoadoutKitTop",
                children: [(0, Jd.jsx)("span", {
                  className: "LoadoutKitLabel",
                  children: Wd(YO[dd.loadoutSlotKind])
                }), Fd && (0, Jd.jsx)(nO, {
                  owned: Fd.loadoutOptionOwnedTier,
                  total: Fd.loadoutOptionTiers.length
                })]
              }), (0, Jd.jsx)("span", {
                className: "LoadoutKitName",
                children: null === Fd || void 0 === Fd ? void 0 : Fd.loadoutOptionName
              })]
            })]
          }, dd.loadoutSlotKind)
        })), (0, Jd.jsx)(PO, {
          view: Od,
          controller: md
        })]
      })
    }

    function PO(dd) {
      let {
        view: Od,
        controller: md
      } = dd;
      const {
        t: Wd
      } = (0, td.G)(), Fd = Od.loadout, Rd = Fd.loadoutPerks.filter((dd => dd.loadoutPerkEquipped)), Xd = aO();
      return (0, Jd.jsxs)("button", {
        ref: Xd("section", "loadoutPerks"),
        type: "button",
        className: vd()("LoadoutKitSlot", "LoadoutPerks", {
          Selected: "loadoutPerks" === Od.slot
        }),
        onClick: () => {
          md.selectSlot("loadoutPerks")
        },
        children: [(0, Jd.jsxs)("span", {
          className: "LoadoutKitTop",
          children: [(0, Jd.jsx)("span", {
            className: "LoadoutKitLabel",
            children: Wd(YO.loadoutPerks)
          }), (0, Jd.jsx)("span", {
            className: "LoadoutPerkCount",
            children: Wd(`${Ud}:loadoutPerkCount`, {
              equipped: String(Rd.length),
              max: String(Fd.loadoutMaxPerks)
            })
          })]
        }), (0, Jd.jsx)("span", {
          className: "LoadoutSockets",
          children: Array.from({
            length: Fd.loadoutMaxPerks
          }, ((dd, Od) => {
            const md = Rd[Od];
            return (0, Jd.jsxs)("span", {
              className: vd()("LoadoutSocket", {
                Filled: md,
                Empty: !md
              }),
              children: [(0, Jd.jsx)("span", {
                className: "LoadoutSocketWell",
                children: md && (0, Jd.jsx)(Sd, {
                  itemName: md.loadoutPerkIcon
                })
              }), (0, Jd.jsx)("span", {
                className: "LoadoutSocketName",
                children: md ? md.loadoutPerkName : Wd(`${Ud}:loadoutPerkSocketEmpty`)
              })]
            }, Od)
          }))
        })]
      })
    }

    function zO(dd) {
      let {
        icon: Od,
        name: md,
        selected: Wd,
        equipped: Fd,
        locked: Rd,
        ownedTier: Xd,
        tiers: Kd,
        buttonRef: hd,
        onSelect: vd
      } = dd;
      const {
        t: Qd
      } = (0, td.G)();
      return (0, Jd.jsxs)(rd, {
        icon: (0, Jd.jsx)(Sd, {
          itemName: Od
        }),
        name: md,
        selected: Wd,
        locked: Rd,
        buttonRef: hd,
        onSelect: vd,
        children: [Fd && (0, Jd.jsx)("span", {
          className: "BoardBadge",
          children: Qd(`${Ud}:loadoutEquippedBadge`)
        }), Rd && (0, Jd.jsx)("span", {
          className: "BoardBadge Muted",
          children: Qd(`${Ud}:loadoutLocked`)
        }), !Rd && (0, Jd.jsx)(nO, {
          owned: Xd,
          total: Kd
        })]
      })
    }

    function cO(dd) {
      let {
        view: Od,
        controller: md
      } = dd;
      const Wd = Od.loadout,
        Fd = aO();
      if ("loadoutPerks" === Od.slot) return (0, Jd.jsx)("div", {
        className: "BoardTiles",
        children: Wd.loadoutPerks.map((dd => (0, Jd.jsx)(zO, {
          icon: dd.loadoutPerkIcon,
          name: dd.loadoutPerkName,
          selected: Od.selectedId === dd.loadoutPerkId,
          equipped: dd.loadoutPerkEquipped,
          locked: !dd.loadoutPerkOwned,
          ownedTier: 0,
          tiers: 0,
          buttonRef: Fd("xN", dd.loadoutPerkId),
          onSelect: () => {
            md.select(dd.loadoutPerkId)
          }
        }, dd.loadoutPerkId)))
      });
      const Rd = RO(Wd, Od.slot);
      return (0, Jd.jsx)("div", {
        className: "BoardTiles",
        children: Rd.loadoutSlotOptions.map((dd => (0, Jd.jsx)(zO, {
          icon: dd.loadoutOptionIcon,
          name: dd.loadoutOptionName,
          selected: Od.selectedId === dd.loadoutOptionId,
          equipped: Rd.loadoutSlotEquippedId === dd.loadoutOptionId,
          locked: 0 === dd.loadoutOptionOwnedTier,
          ownedTier: dd.loadoutOptionOwnedTier,
          tiers: dd.loadoutOptionTiers.length,
          buttonRef: Fd("xN", dd.loadoutOptionId),
          onSelect: () => {
            md.select(dd.loadoutOptionId)
          }
        }, dd.loadoutOptionId)))
      })
    }

    function jO(dd) {
      let {
        loadout: Od
      } = dd;
      return (0, Jd.jsx)(nd, {
        coins: Od.loadoutCoins,
        children: Od.loadoutHeldParts.filter((dd => dd.loadoutHeldPartAmount > 0)).map((dd => (0, Jd.jsx)(ud, {
          itemName: dd.loadoutHeldPartItem,
          amount: dd.loadoutHeldPartAmount
        }, dd.loadoutHeldPartCurrency)))
      })
    }

    function DO(dd) {
      let {
        controller: Od
      } = dd;
      const md = (0, Qd.i)(qO, Od.getSnapshot()),
        {
          t: Wd
        } = (0, td.G)();
      if (null === md.loadout) return null;
      const Fd = md.notice;
      return (0, Jd.jsx)(UO, {
        view: md,
        onDismiss: Od.dismiss,
        children: (0, Jd.jsxs)(Bd, {
          open: md.open,
          onDismiss: Od.dismiss,
          title: Wd(`${Ud}:loadoutTitle`),
          className: "ContainmentLoadoutPanel",
          headerExtra: (0, Jd.jsx)(jO, {
            loadout: md.loadout
          }),
          statusRefused: null === Fd || void 0 === Fd ? void 0 : Fd.loadoutNoticeRefused,
          status: (0, Jd.jsxs)(Jd.Fragment, {
            children: [(0, Jd.jsx)("span", {
              className: "LoadoutRadioBadge",
              children: Wd(`${Ud}:loadoutRadioBadge`)
            }), null !== Fd && Wd(`${Ud}:${Fd.loadoutNoticeKey}`, {
              name: Fd.loadoutNoticeName,
              tier: (0, OO.K)(Fd.loadoutNoticeTier),
              max: String(md.loadout.loadoutMaxPerks)
            })]
          }),
          children: [(0, Jd.jsx)(LO, {
            view: md,
            controller: Od
          }), (0, Jd.jsx)(cO, {
            view: md,
            controller: Od
          }), (0, Jd.jsx)(GO, {
            view: md,
            controller: Od
          })]
        })
      })
    }

    function eO(dd, Od, md) {
      const Wd = dd.locatorEntries.find((dd => dd.locatorEntryId === md));
      if (!Wd) return null;
      const Fd = Wd.locatorEntryName;
      if ("locatorDisarm" === Od) return Wd.locatorEntryArmed ? {
        board: IO(dd, null),
        notice: lO("locatorNoticeDisarmed", Fd)
      } : null;
      if ("locatorArm" === Od) return Wd.locatorEntryOwned && !Wd.locatorEntryArmed ? {
        board: IO(dd, md),
        notice: lO("locatorNoticeArmed", Fd)
      } : null;
      if (Wd.locatorEntryOwned || dd.locatorCoins < Wd.locatorEntryPrice) return null;
      const Rd = IO({
        ...dd,
        locatorCoins: dd.locatorCoins - Wd.locatorEntryPrice
      }, md);
      return {
        board: {
          ...Rd,
          locatorEntries: Rd.locatorEntries.map((dd => dd.locatorEntryId === md ? {
            ...dd,
            locatorEntryOwned: !0
          } : dd))
        },
        notice: lO("locatorNoticeBought", Fd)
      }
    }

    function IO(dd, Od) {
      return {
        ...dd,
        locatorEntries: dd.locatorEntries.map((dd => {
          const md = dd.locatorEntryId === Od;
          return dd.locatorEntryArmed === md ? dd : {
            ...dd,
            locatorEntryArmed: md
          }
        }))
      }
    }

    function lO(dd, Od) {
      return {
        locatorNoticeKey: dd,
        locatorNoticeRefused: !1,
        locatorNoticeName: Od
      }
    }
    const CO = "containmentLocatorView";
    class ZO extends mO {
      constructor(dd, Od, md, Wd) {
        super(dd, Od, md, Wd, "locator", eO), this.snapshot = this.buildSnapshot()
      }
      messageOpens(dd) {
        return dd.locatorMessageOpens
      }
      messageNotice(dd) {
        return dd.locatorNotice
      }
      openingSelection(dd) {
        var Od;
        const md = dd.locatorEntries;
        return (null !== (Od = md.find((dd => dd.locatorEntryArmed))) && void 0 !== Od ? Od : md[0]).locatorEntryId
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
    const kO = {
        locatorContained: `${Ud}:locatorFlavourContained`,
        locatorEncountered: `${Ud}:locatorFlavourEncountered`,
        locatorUnseen: `${Ud}:locatorFlavourUnseen`
      },
      fO = {
        codexAnyDifficulty: null,
        codexNormalOnly: `${Ud}:locatorAttunedNormal`,
        codexHardOnly: `${Ud}:locatorAttunedHard`
      };

    function MO() {
      return (0, Jd.jsx)(Jd.Fragment, {
        children: Array.from({
          length: 5
        }, ((dd, Od) => (0, Jd.jsx)("span", {
          className: "LocatorFly",
          children: (0, Jd.jsx)("img", {
            src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAICAYAAADwdn+XAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYElEQVR4nGNgoBboMlb5LyUjD8YgNtHyJ6/d+Q/CILa1lz9YAbo4DCDLYxjQv3gt3AYQG90AdHkUQ/qhkjAb0BURkgcDmAQMo7sSXR7deyiGoIvDvIOsGasB+ACyBmTNACS0go3ibhumAAAAAElFTkSuQmCC",
            alt: "",
            draggable: !1
          })
        }, Od)))
      })
    }

    function dm(dd) {
      let {
        entry: Od
      } = dd;
      const {
        t: md
      } = (0, td.G)();
      return Od.locatorEntryArmed ? (0, Jd.jsx)("span", {
        className: "BoardBadge Armed",
        children: md(`${Ud}:locatorArmedBadge`)
      }) : Od.locatorEntryOwned ? (0, Jd.jsx)("span", {
        className: "BoardBadge",
        children: md(`${Ud}:locatorOwnedBadge`)
      }) : null
    }

    function Om(dd) {
      let {
        entry: Od,
        coins: md,
        inTile: Wd = !1
      } = dd;
      return (0, Jd.jsx)(ud, {
        itemName: xd,
        amount: Od.locatorEntryPrice,
        jK: md,
        inTile: Wd
      })
    }

    function mm(dd) {
      let {
        view: Od,
        controller: md,
        entry: Wd
      } = dd;
      const {
        t: Fd
      } = (0, td.G)(), Rd = Wd.locatorEntryId, Xd = Od.locators.locatorEntries.find((dd => dd.locatorEntryArmed && dd !== Wd));
      return (0, Jd.jsxs)("div", {
        className: "BoardActions",
        children: [Wd.locatorEntryArmed && (0, Jd.jsx)(qd.S, {
          disabled: Od.pending,
          onClick: () => {
            md.act("locatorDisarm", Rd)
          },
          children: Fd(`${Ud}:locatorDisarm`)
        }), Wd.locatorEntryOwned && !Wd.locatorEntryArmed && (0, Jd.jsx)(qd.g, {
          disabled: Od.pending,
          onClick: () => {
            md.act("locatorArm", Rd)
          },
          children: Fd(`${Ud}:locatorArm`)
        }), !Wd.locatorEntryOwned && (0, Jd.jsxs)("div", {
          className: "LocatorBuy",
          children: [(0, Jd.jsx)(Om, {
            entry: Wd,
            coins: Od.locators.locatorCoins
          }), (0, Jd.jsx)(qd.m, {
            disabled: Od.locators.locatorCoins < Wd.locatorEntryPrice || Od.pending,
            onClick: () => {
              md.act("locatorBuy", Rd)
            },
            children: Fd(`${Ud}:locatorBuy`)
          })]
        }), Xd && !Wd.locatorEntryArmed && (0, Jd.jsx)("span", {
          className: "BoardHint",
          children: Fd(`${Ud}:locatorReplacesHint`, {
            name: Xd.locatorEntryName
          })
        })]
      })
    }

    function Wm(dd) {
      let {
        entry: Od
      } = dd;
      return "locatorUnseen" === Od.locatorEntryStanding ? (0, Jd.jsx)(Sd, {
        itemName: "Compass"
      }) : (0, Jd.jsx)(sd, {
        anomalyId: Od.locatorEntryId,
        caught: "locatorContained" === Od.locatorEntryStanding
      })
    }

    function Fm(dd) {
      let {
        view: Od,
        controller: md,
        entry: Wd
      } = dd;
      const {
        t: Fd
      } = (0, td.G)(), Rd = fO[Wd.locatorEntryDifficulty];
      return (0, Jd.jsxs)("section", {
        className: "BoardDetail",
        children: [(0, Jd.jsxs)("div", {
          className: vd()("LocatorLabel", {
            Armed: Wd.locatorEntryArmed
          }),
          children: [(0, Jd.jsx)(Gd, {
            icon: (0, Jd.jsx)(Wm, {
              entry: Wd
            }),
            name: Fd(`${Ud}:locatorName`, {
              name: Wd.locatorEntryName
            }),
            children: (0, Jd.jsx)(dm, {
              entry: Wd
            })
          }), (0, Jd.jsx)("p", {
            className: "BoardDescription",
            children: Fd(Wd.locatorEntryArmed ? `${Ud}:locatorFlavourArmed` : kO[Wd.locatorEntryStanding])
          }), null !== Rd && (0, Jd.jsx)("p", {
            className: "LocatorAttuned",
            children: Fd(Rd)
          }), (0, Jd.jsx)("p", {
            className: "BoardDescription LocatorUsage",
            children: Fd(`${Ud}:locatorUsage`)
          })]
        }), (0, Jd.jsx)(mm, {
          view: Od,
          controller: md,
          entry: Wd
        })]
      })
    }

    function Rm(dd) {
      let {
        controller: Od
      } = dd;
      const md = (0, Qd.i)(CO, Od.getSnapshot()),
        {
          t: Wd
        } = (0, td.G)(),
        Fd = md.locators;
      if (null === Fd) return null;
      const Rd = Fd.locatorEntries.find((dd => dd.locatorEntryId === md.selectedId)),
        Xd = md.notice;
      return (0, Jd.jsxs)(Bd, {
        open: md.open,
        onDismiss: Od.dismiss,
        title: Wd(`${Ud}:locatorTitle`),
        className: "ContainmentLocatorPanel",
        decor: (0, Jd.jsx)(MO, {}),
        headerExtra: (0, Jd.jsx)(nd, {
          coins: Fd.locatorCoins
        }),
        statusRefused: null === Xd || void 0 === Xd ? void 0 : Xd.locatorNoticeRefused,
        status: (0, Jd.jsxs)(Jd.Fragment, {
          children: [(0, Jd.jsx)("span", {
            className: "LocatorKeeperBadge",
            children: Wd(`${Ud}:locatorKeeperName`)
          }), null !== Xd && Wd(`${Ud}:${Xd.locatorNoticeKey}`, {
            name: Xd.locatorNoticeName
          })]
        }),
        children: [(0, Jd.jsx)("div", {
          className: "BoardTiles",
          children: Fd.locatorEntries.map((dd => (0, Jd.jsxs)(rd, {
            icon: (0, Jd.jsx)(Wm, {
              entry: dd
            }),
            name: dd.locatorEntryName,
            selected: dd === Rd,
            locked: !1,
            className: vd()("LocatorTag", {
              Armed: dd.locatorEntryArmed
            }),
            onSelect: () => {
              Od.select(dd.locatorEntryId)
            },
            children: [(0, Jd.jsx)(dm, {
              entry: dd
            }), !dd.locatorEntryOwned && (0, Jd.jsx)(Om, {
              entry: dd,
              coins: Fd.locatorCoins,
              inTile: !0
            })]
          }, dd.locatorEntryId)))
        }), (0, Jd.jsx)(Fm, {
          view: md,
          controller: Od,
          entry: Rd
        })]
      })
    }

    function Xm(dd) {
      let {
        loadout: Od,
        codex: md,
        locator: Wd
      } = dd;
      return (0, Jd.jsxs)(Jd.Fragment, {
        children: [(0, Jd.jsx)(DO, {
          controller: Od
        }), (0, Jd.jsx)(dO, {
          controller: md
        }), (0, Jd.jsx)(Rm, {
          controller: Wd
        })]
      })
    }
    var Km = md(40123);
    class hm {
      constructor(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.sendCommand = dd, this.budget = void 0, this.awaitingReply = !1, this.replyTimer = null, this.listeners = new Set, this.budget = new Km.d({
          spacingMs: 0,
          now: Od
        }), this.budget.subscribe((() => {
          this.notify()
        }))
      }
      isPending() {
        return this.awaitingReply || this.budget.isPacing()
      }
      send(dd, Od) {
        return !this.isPending() && (this.awaitingReply = !0, this.replyTimer = setTimeout((() => {
          this.replyTimer = null, this.awaitingReply = !1, Od(), this.notify()
        }), 8e3), this.budget.start(), this.sendCommand(dd), !0)
      }
      onReply() {
        this.awaitingReply = !1, this.clearReplyTimer()
      }
      subscribe(dd) {
        return this.listeners.add(dd), () => {
          this.listeners.delete(dd)
        }
      }
      dispose() {
        this.clearReplyTimer(), this.budget.dispose(), this.listeners.clear()
      }
      clearReplyTimer() {
        null !== this.replyTimer && (clearTimeout(this.replyTimer), this.replyTimer = null)
      }
      notify() {
        for (const dd of this.listeners) dd()
      }
    }
    var Qm = md(40114);
    const tm = new Map([
      ["npc_general", bO],
      ["npc_tentacle_guy", Qm]
    ]);

    function om(dd) {
      const Od = tm.get(dd);
      if (void 0 === Od) return null;
      const md = document.createElement("img");
      return md.src = Od, md.alt = "", md.draggable = !1, md.style.imageRendering = "pixelated", md
    }
    const Nm = function() {
      let dd, Od = !1,
        md = null,
        hd = null;
      const vd = [],
        Qd = dd => {
          for (const Od of vd) Od !== dd && Od.close();
          (0, Kd.q)()
        },
        td = dd => {
          dd && (0, Kd.h)()
        },
        od = new hm((Od => {
          dd.sendCommand(Od)
        })),
        Nd = new HO((dd => {
          Xd.j.lQ(qO, dd, !0)
        }), Qd, td, od),
        qd = new zd((dd => {
          Xd.j.lQ(Pd, dd, !0)
        }), Qd, td),
        Hd = new ZO((dd => {
          Xd.j.lQ(CO, dd, !0)
        }), Qd, td, od);
      vd.push(Nd, qd, Hd);
      return {
        onCreate: Od => {
          dd = Od, md = (0, Kd.F)(null, {
            content: (0, Wd.createElement)(Xm, {
              loadout: Nd,
              codex: qd,
              locator: Hd
            }),
            onClose: () => {
              for (const dd of vd) dd.close()
            }
          }), hd = (0, Rd.e)(om)
        },
        onReceivedMessageFromServer: (dd, Od) => {
          "containmentLoadout" === dd ? Nd.Yt(Od) : "containmentLoadoutClose" === dd ? Nd.isOpen() && (Nd.close(), (0, Kd.g)()) : "containmentCodex" === dd ? qd.Yt(Od) : "containmentLocator" === dd && Hd.Yt(Od)
        },
        Et: () => {
          Od || Fd.e.get("loadingOverlayVisible") || (Od = !0, dd.sendCommand("containmentEntered"))
        },
        onClose: () => {
          var dd, Od;
          null === (dd = md) || void 0 === dd || dd(), md = null, null === (Od = hd) || void 0 === Od || Od(), hd = null;
          for (const md of vd) md.dispose();
          od.dispose()
        }
      }
    }
  },
  38439: (dd, Od, md) => {
    md.d(Od, {
      A: () => nd,
      B: () => Ld,
      C: () => rd,
      D: () => Pd,
      c: () => hd,
      e: () => Sd,
      f: () => Kd,
      h: () => Ad,
      l: () => xd,
      m: () => wd,
      q: () => Vd,
      r: () => ud,
      v: () => Ud,
      y: () => Gd
    });
    var Wd = md(46);
    const Fd = {
        codeBlock: ["codeBlockIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "worldCodeButton", "exportButton", "helpButton"],
        worldCode: ["worldCodeIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "exportButton", "helpButton"]
      },
      Rd = ["docsButton", "docsPanel", "docsClientOptionsTab", "docsClientOptions", "docsApiReferenceTab", "docsApiReference", "docsCallbacksTab", "docsCallbacks", "hideDocsButton"],
      Xd = ["aiHelperButton", "aiPanel", "aiAskBox", "aiModelChip", "aiAnswer", "aiEdits", "aiGear", "aiNotes", "aiGameSettings", "hideAiHelperButton"],
      Kd = Rd.filter((dd => "docsButton" !== dd)),
      hd = Xd.filter((dd => "aiHelperButton" !== dd)),
      vd = "codeEditorTutorials",
      Qd = {
        codeBlockIntro: "codeBlockIntroShown",
        worldCodeIntro: "worldCodeIntroShown"
      },
      td = {
        welcome: "welcomeComplete",
        docsOverview: "docsOverviewComplete",
        aiHelperOverview: "aiHelperOverviewComplete"
      };
    let od = null,
      Nd = null;
    const qd = new Set,
      Hd = new Set;
    let yd = null;
    const bd = new Set,
      Td = new Set;

    function pd() {
      Td.forEach((dd => {
        dd()
      }))
    }

    function Yd() {
      if (!od) {
        const dd = Wd.k.getItem(vd);
        od = {
          codeBlockIntroShown: !1,
          worldCodeIntroShown: !1,
          welcomeComplete: !1,
          docsOverviewComplete: !1,
          aiHelperOverviewComplete: !1,
          ..."object" === typeof dd && null !== dd ? dd : {}
        }
      }
      return od
    }

    function gd(dd) {
      const Od = Yd();
      Od[dd] || (od = {
        ...Od,
        [dd]: !0
      }, Wd.k.setItem(vd, od))
    }

    function wd(dd) {
      return "docsOverview" === dd ? Rd : "aiHelperOverview" === dd ? Xd : Nd ? Fd[Nd] : []
    }

    function Ed(dd) {
      return ("worldCodeButton" !== dd || !Yd().worldCodeIntroShown) && !bd.has(dd)
    }

    function Jd(dd) {
      var Od;
      return (null === (Od = yd) || void 0 === Od ? void 0 : Od.name) === dd ? yd.stepsDone : qd
    }

    function Ud(dd, Od) {
      if (! function(dd) {
          return yd ? yd.name === dd : "welcome" === dd
        }(dd) || !Ed(Od) || Jd(dd).has(Od)) return !1;
      if (yd) return !0;
      const md = Qd[Od];
      return md ? !Yd()[md] || Hd.has(Od) : !Yd()[td[dd]]
    }

    function xd(dd) {
      var Od;
      return null !== (Od = wd(dd).find((Od => Ud(dd, Od)))) && void 0 !== Od ? Od : null
    }

    function Bd(dd) {
      var Od;
      gd(td[dd]), (null === (Od = yd) || void 0 === Od ? void 0 : Od.name) === dd && (yd = null)
    }

    function Sd(dd) {
      const Od = (yd ? [yd.name] : ["welcome", "docsOverview"]).find((Od => xd(Od) === dd));
      if (!Od) return;
      Jd(Od).add(dd);
      const md = Qd[dd];
      md && (gd(md), yd || Hd.add(dd)), null === xd(Od) && Bd(Od), pd()
    }

    function sd(dd, Od) {
      const md = wd(dd),
        Wd = Jd(dd);
      for (let Fd = md.indexOf(Od) - 1; Fd >= 0; Fd--)
        if (Wd.has(md[Fd]) && Ed(md[Fd])) return md[Fd];
      return null
    }

    function ud(dd, Od) {
      return null !== sd(dd, Od)
    }

    function Vd(dd, Od) {
      const md = sd(dd, Od);
      md && (Jd(dd).delete(md), pd())
    }

    function Ad(dd) {
      Bd(dd), "welcome" === dd && wd("welcome").forEach((dd => {
        const Od = Qd[dd];
        Od && gd(Od)
      })), pd()
    }

    function rd(dd) {
      yd = {
        name: dd,
        stepsDone: new Set
      }, pd()
    }

    function Gd() {
      (yd || 0 !== qd.size || 0 !== Hd.size) && (yd = null, qd.clear(), Hd.clear(), pd())
    }

    function nd(dd, Od) {
      const md = Od ? dd : Nd === dd ? null : Nd;
      md !== Nd && (Nd = md, pd())
    }

    function Ld(dd, Od) {
      bd.has(dd) === Od && (Od ? bd.delete(dd) : bd.add(dd), pd())
    }

    function Pd(dd) {
      return Td.add(dd), () => {
        Td.delete(dd)
      }
    }
  },
  40909: (dd, Od, md) => {
    var Wd = {
      "./breach-zero-uncaught.webp": 40914,
      "./breach-zero.webp": 40921,
      "./brood-father-uncaught.webp": 40923,
      "./brood-father.webp": 40930,
      "./carousel-uncaught.webp": 40935,
      "./carousel.webp": 40944,
      "./deadlock-uncaught.webp": 40952,
      "./deadlock.webp": 40960,
      "./doom-warlord-uncaught.webp": 40966,
      "./doom-warlord.webp": 40970,
      "./frost-revenant-uncaught.webp": 40976,
      "./frost-revenant.webp": 40981,
      "./hollow-choir-uncaught.webp": 40986,
      "./hollow-choir.webp": 40991,
      "./magma-warden-uncaught.webp": 40998,
      "./magma-warden.webp": 41001,
      "./patient-zero-uncaught.webp": 41010,
      "./patient-zero.webp": 41012,
      "./siege-engine-uncaught.webp": 41014,
      "./siege-engine.webp": 41019,
      "./warp-stalker-uncaught.webp": 41027,
      "./warp-stalker.webp": 41033
    };

    function Fd(dd) {
      var Od = Rd(dd);
      return md(Od)
    }

    function Rd(dd) {
      if (!md.o(Wd, dd)) {
        var Od = new Error("Cannot find module '" + dd + "'");
        throw Od.code = "MODULE_NOT_FOUND", Od
      }
      return Wd[dd]
    }
    Fd.keys = function() {
      return Object.keys(Wd)
    }, Fd.resolve = Rd, dd.exports = Fd, Fd.id = 40909
  },
  40914: (dd, Od, md) => {
    dd.exports = md.p + "static/media/breach-zero-uncaught.c7d4410f99269ac1ee2f.webp"
  },
  40921: (dd, Od, md) => {
    dd.exports = md.p + "static/media/breach-zero.ef5aacecf502228cd20b.webp"
  },
  40923: (dd, Od, md) => {
    dd.exports = md.p + "static/media/brood-father-uncaught.ee678432c71b7061fae1.webp"
  },
  40930: (dd, Od, md) => {
    dd.exports = md.p + "static/media/brood-father.e48391955a574c1155fa.webp"
  },
  40935: (dd, Od, md) => {
    dd.exports = md.p + "static/media/carousel-uncaught.a92757620f569f31d7d2.webp"
  },
  40944: (dd, Od, md) => {
    dd.exports = md.p + "static/media/carousel.5fc13db7958067d6e1a3.webp"
  },
  40952: (dd, Od, md) => {
    dd.exports = md.p + "static/media/deadlock-uncaught.feadbdbbf2d040dce5c0.webp"
  },
  40960: (dd, Od, md) => {
    dd.exports = md.p + "static/media/deadlock.2bcaeaa57376fd78ddcb.webp"
  },
  40966: (dd, Od, md) => {
    dd.exports = md.p + "static/media/doom-warlord-uncaught.b25b11d54326d386a901.webp"
  },
  40970: (dd, Od, md) => {
    dd.exports = md.p + "static/media/doom-warlord.d9ef07d4167ff931b0f0.webp"
  },
  40976: (dd, Od, md) => {
    dd.exports = md.p + "static/media/frost-revenant-uncaught.c0271636eeae988b1a40.webp"
  },
  40981: (dd, Od, md) => {
    dd.exports = md.p + "static/media/frost-revenant.fed6021646d7f0f81876.webp"
  },
  40986: (dd, Od, md) => {
    dd.exports = md.p + "static/media/hollow-choir-uncaught.7eaab76a15f82bd79558.webp"
  },
  40991: (dd, Od, md) => {
    dd.exports = md.p + "static/media/hollow-choir.05f9c51994aecece852a.webp"
  },
  40998: (dd, Od, md) => {
    dd.exports = md.p + "static/media/magma-warden-uncaught.5308736fbb8a503cdfc7.webp"
  },
  41001: (dd, Od, md) => {
    dd.exports = md.p + "static/media/magma-warden.cc4302a49a39ae962a31.webp"
  },
  41010: (dd, Od, md) => {
    dd.exports = md.p + "static/media/patient-zero-uncaught.1f9ec012a14c4dbdcc8f.webp"
  },
  41012: (dd, Od, md) => {
    dd.exports = md.p + "static/media/patient-zero.cc76984bb20e9f9ace76.webp"
  },
  41014: (dd, Od, md) => {
    dd.exports = md.p + "static/media/siege-engine-uncaught.88e0ad7fec37ba2b4a2e.webp"
  },
  41019: (dd, Od, md) => {
    dd.exports = md.p + "static/media/siege-engine.b2e2382e415f4ae470ac.webp"
  },
  41027: (dd, Od, md) => {
    dd.exports = md.p + "static/media/warp-stalker-uncaught.c3b1b82ecb18446b71b0.webp"
  },
  41033: (dd, Od, md) => {
    dd.exports = md.p + "static/media/warp-stalker.851972c629601b668aa7.webp"
  },
  40114: dd => {
    dd.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYElEQVR4nGNgIBIwovH/45JnRFaUGN+Comr+whq4GiZ0RVycnGAMAlAxsC0sMN2fvn9DodEBzEQGdUV5hvNnV4JpGJuPkwtTIQh4umZhZWMonDqjGCsbHcCCBkQjs0kDAPeaHpfX1eroAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);