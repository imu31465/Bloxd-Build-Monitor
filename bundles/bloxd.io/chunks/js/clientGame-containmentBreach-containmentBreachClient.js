export const id = 14;
export const ids = [14];
export const modules = {
  37061: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => sd,
      e: () => qd,
      h: () => Bd,
      j: () => Ld
    });
    var pd = kd(1044),
      Nd = kd.n(pd),
      Wd = kd(56),
      Pd = kd(72),
      Zd = kd(1390),
      gd = kd(1461),
      Cd = kd(1384),
      Kd = kd(1302),
      od = kd(1211),
      ld = kd(37068),
      Qd = kd(1103);

    function Ld(dd) {
      const [Jd, kd] = (0, Wd.useState)((() => (0, ld.p)(dd)));
      return (0, Wd.useEffect)((() => (kd((0, ld.p)(dd)), (0, ld.I)((() => {
        kd((0, ld.p)(dd))
      })))), [dd]), Jd
    }

    function Od(dd, Jd) {
      "function" === typeof dd ? dd(Jd) : dd && (dd.current = Jd)
    }

    function ed(dd) {
      let {
        tutorial: Jd,
        step: kd,
        enabled: pd = !0
      } = dd;
      const Nd = Ld(Jd);
      return pd && Nd === kd
    }

    function Rd(dd, Jd) {
      const kd = (0, ld.s)(dd),
        pd = kd.indexOf(Jd);
      return !kd.slice(pd + 1).some((Jd => (0, ld.x)(dd, Jd)))
    }

    function Id(dd, Jd, kd, pd) {
      let {
        tutorial: Nd,
        step: Wd,
        waitForClick: Pd = !1,
        onPrevious: Zd
      } = dd;
      const gd = Jd && (0, ld.w)(Nd, Wd),
        Cd = Jd && !Rd(Nd, Wd),
        od = Pd ? pd : kd;
      let Qd = null;
      gd ? Qd = () => {
        null === Zd || void 0 === Zd || Zd(), (0, ld.u)(Nd, Wd)
      } : Cd && (Qd = () => {
        (0, ld.m)(Nd)
      }), (0, Kd.s)("popup", null !== od && void 0 !== od ? od : kd, Qd, Jd && null !== od, null, gd ? void 0 : "controller:menusSkipTutorial")
    }

    function Gd(dd) {
      let {
        tutorial: Jd,
        step: kd,
        text: pd,
        waitForClick: Nd = !1,
        onPrevious: Wd
      } = dd;
      const {
        t: Pd
      } = (0, od.B)(), Zd = Rd(Jd, kd);
      return (0, Qd.jsxs)(Qd.Fragment, {
        children: [(0, Qd.jsx)("div", {
          className: "TutorialStepText",
          children: pd
        }), (0, Qd.jsxs)("div", {
          className: "TutorialStepButtons",
          children: [(0, ld.w)(Jd, kd) && (0, Qd.jsx)(gd.f, {
            className: "TutorialStepButton",
            onClick: () => {
              null === Wd || void 0 === Wd || Wd(), (0, ld.u)(Jd, kd)
            },
            children: Pd("tutorial:back")
          }), !Nd && (0, Qd.jsx)(gd.d, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, ld.h)(kd)
            },
            padDefaultFocus: !0,
            children: Pd(Zd ? "tutorial:done" : "tutorial:next")
          }), !Zd && (0, Qd.jsx)(gd.f, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, ld.m)(Jd)
            },
            children: Pd("tutorial:skip")
          })]
        })]
      })
    }
    const vd = 6;

    function xd(dd) {
      let {
        rect: Jd,
        margin: kd
      } = dd;
      const pd = Math.max(0, Jd.top - kd),
        Nd = Jd.bottom + kd,
        Wd = Math.max(0, Jd.left - kd),
        Pd = Jd.right + kd;
      return (0, Qd.jsxs)(Qd.Fragment, {
        children: [(0, Qd.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: 0,
            left: 0,
            right: 0,
            height: pd
          }
        }), (0, Qd.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: Nd,
            left: 0,
            right: 0,
            bottom: 0
          }
        }), (0, Qd.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: pd,
            left: 0,
            width: Wd,
            height: Nd - pd
          }
        }), (0, Qd.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: pd,
            left: Pd,
            right: 0,
            height: Nd - pd
          }
        })]
      })
    }

    function qd(dd) {
      let {
        target: Jd,
        placement: kd,
        boxRef: pd,
        className: gd,
        spotlightMargin: Kd = vd,
        children: od
      } = dd;
      const {
        getArrowProps: ld,
        getTooltipProps: Ld,
        setTooltipRef: Od,
        setTriggerRef: ed
      } = (0, Zd.b)({
        placement: kd,
        trigger: null,
        visible: !0,
        interactive: !0,
        closeOnOutsideClick: !1,
        offset: [0, Kd]
      });
      (0, Wd.useLayoutEffect)((() => {
        ed(Jd)
      }), [Jd, ed]);
      const Rd = function(dd, Jd) {
        const [kd, pd] = (0, Wd.useState)(null);
        return (0, Wd.useEffect)((() => {
          if (!Jd || !dd) return void pd(null);
          let kd = 0,
            Nd = null;
          const Wd = () => {
            const Jd = dd.getBoundingClientRect();
            Nd && Jd.left === Nd.left && Jd.top === Nd.top && Jd.width === Nd.width && Jd.height === Nd.height || (Nd = Jd, pd(Jd)), kd = requestAnimationFrame(Wd)
          };
          return Wd(), () => {
            cancelAnimationFrame(kd)
          }
        }), [dd, Jd]), kd
      }(Jd, !0);
      (0, Wd.useEffect)((() => {
        null === Jd || void 0 === Jd || Jd.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        })
      }), [Jd]);
      const Id = (0, Wd.useCallback)((dd => {
        Od(dd), pd && (pd.current = dd)
      }), [Od, pd]);
      return (0, Pd.createPortal)((0, Qd.jsxs)(Qd.Fragment, {
        children: [Rd && (0, Qd.jsx)(xd, {
          rect: Rd,
          margin: Kd
        }), (0, Qd.jsxs)("div", {
          ref: Id,
          ...Ld({
            className: Nd()("tooltip-container SmallTextLight TutorialStep", gd)
          }),
          children: [od, (0, Qd.jsx)("div", {
            ...ld({
              className: "tooltip-arrow"
            })
          })]
        })]
      }), (0, Cd.g)())
    }
    const Bd = (0, Wd.forwardRef)((function(dd, Jd) {
      let {
        placement: kd = "right",
        children: pd,
        ...Nd
      } = dd;
      const Pd = ed(Nd),
        Zd = (0, Wd.useRef)(null),
        gd = (0, Wd.useRef)(null);
      Id(Nd, Pd, Zd, gd);
      const [Cd, Kd] = (0, Wd.useState)(null), od = pd.ref, ld = (0, Wd.useCallback)((dd => {
        gd.current = dd, Kd(dd), Od(Jd, dd), Od(od, dd)
      }), [Jd, od]);
      return (0, Qd.jsxs)(Qd.Fragment, {
        children: [(0, Wd.cloneElement)(pd, {
          ref: ld
        }), Pd && (0, Qd.jsx)(qd, {
          target: Cd,
          placement: kd,
          boxRef: Zd,
          children: (0, Qd.jsx)(Gd, {
            ...Nd
          })
        })]
      })
    }));

    function sd(dd) {
      const Jd = ed(dd),
        kd = (0, Wd.useRef)(null);
      return Id(dd, Jd, kd, null), Jd ? (0, Pd.createPortal)((0, Qd.jsx)("div", {
        className: "TutorialCentreBackdrop",
        children: (0, Qd.jsx)("div", {
          ref: kd,
          className: "tooltip-container SmallTextLight TutorialStep TutorialCentreStep",
          children: (0, Qd.jsx)(Gd, {
            ...dd
          })
        })
      }), (0, Cd.g)()) : null
    }
  },
  38690: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Pd
    });
    const pd = 4,
      Nd = 12e3,
      Wd = 1e3;
    class Pd {
      constructor() {
        let {
          limit: dd = pd,
          windowMs: Jd = Nd,
          spacingMs: kd = Wd,
          now: Pd = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = dd, this.windowMs = Jd, this.spacingMs = kd, this.now = Pd
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
          Jd = this.lastSentAt + this.spacingMs,
          kd = Math.min(Jd > dd ? Jd : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        kd !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, kd - dd)))
      }
      notify() {
        for (const dd of this.listeners) dd()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  36783: (dd, Jd, kd) => {
    kd.d(Jd, {
      B: () => Ld,
      D: () => Id,
      e: () => Wd,
      h: () => Od,
      i: () => ed,
      m: () => Zd,
      o: () => ld,
      s: () => Rd,
      w: () => od,
      x: () => Gd
    });
    var pd = kd(22),
      Nd = kd(29);
    const Wd = "clientGameInventoryButtonsChanged",
      Pd = new Map;

    function Zd() {
      return [...Pd.values()].sort(((dd, Jd) => {
        var kd, pd;
        return (null !== (kd = dd.order) && void 0 !== kd ? kd : 0) - (null !== (pd = Jd.order) && void 0 !== pd ? pd : 0)
      }))
    }
    let gd = null;

    function Cd(dd) {
      gd = dd
    }
    let Kd = !1;

    function od(dd) {
      Kd = !0;
      try {
        dd.onClick()
      } finally {
        Kd = !1
      }
      dd.panel && "clientGame" === pd.d.get("openInGameMenuName") && Cd(dd.id)
    }

    function ld() {
      return Kd
    }

    function Qd() {
      return Zd().filter((dd => dd.panel && !dd.disabled))
    }

    function Ld(dd) {
      const Jd = Qd(),
        kd = Jd.findIndex((dd => dd.id === gd));
      return !(kd < 0 || Jd.length < 2) && (od(Jd[(kd + dd + Jd.length) % Jd.length]), !0)
    }

    function Od() {
      return null !== gd && Qd().length > 1
    }

    function ed() {
      Cd(null)
    }

    function Rd() {
      "inventory" !== pd.d.get("openInGameMenuName") && Cd(null)
    }

    function Id() {
      const dd = gd;
      return Cd(null), dd
    }

    function Gd(dd) {
      return Pd.set(dd.id, dd), Nd.j.nO(Wd, Zd(), !0), () => {
        Pd.get(dd.id) === dd && (Pd.delete(dd.id), Nd.j.nO(Wd, Zd()))
      }
    }
  },
  38670: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => pd
    });
    class pd {
      constructor(dd, Jd, kd) {
        this.nO = dd, this.beforeOpen = Jd, this.afterClose = kd, this.open = !1, this.pL = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.pL && (this.open = !0, this.beforeOpen(this), this.emit())
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
        this.open = !1, this.emit(), this.pL = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.pL || (this.snapshot = this.buildSnapshot(), this.nO(this.snapshot))
      }
    }
  },
  36779: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Zd,
      g: () => ed,
      j: () => Rd,
      m: () => ld,
      o: () => Cd,
      p: () => Od,
      t: () => Qd,
      w: () => Kd
    });
    var pd = kd(22),
      Nd = kd(29),
      Wd = kd(1307),
      Pd = kd(36783);
    const Zd = "clientGameUiChanged";
    let gd = null;

    function Cd() {
      return gd
    }

    function Kd(dd, Jd) {
      const kd = {
        content: dd,
        menu: Jd
      };
      return gd = kd, Nd.j.nO(Zd, gd, !0), () => {
        gd === kd && (gd = null, Ld = !1, ed(), Nd.j.nO(Zd, null))
      }
    }
    let od = null;

    function ld() {
      return od
    }

    function Qd(dd) {
      return od = dd, () => {
        od === dd && (od = null)
      }
    }
    let Ld = !1;

    function Od() {
      const dd = pd.d.get("openInGameMenuName");
      "clientGame" !== dd && (Ld = "inventory" === dd), (0, Pd.o)() || (0, Pd.i)(), (0, Wd.p)(Wd.d), pd.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function ed() {
      Id(!1)
    }

    function Rd() {
      Id(Ld)
    }

    function Id(dd) {
      "clientGame" === pd.d.get("openInGameMenuName") && pd.d.set({
        openInGameMenuName: dd ? "inventory" : null
      }), dd || (0, Pd.i)(), Ld = !1
    }
  },
  39415: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      default: () => lk
    });
    var pd = kd(56);
    var Nd = kd(22),
      Wd = kd(1915),
      Pd = kd(29),
      Zd = kd(36779),
      gd = kd(1044),
      Cd = kd.n(gd),
      Kd = kd(1459),
      od = kd(1211),
      ld = kd(4389),
      Qd = kd(1364),
      Ld = kd(1461),
      Od = kd(1924),
      ed = kd(1384),
      Rd = kd(1904),
      Id = kd(1968),
      Gd = kd(201);
    const vd = kd(39422),
      xd = Object.fromEntries(vd.keys().map((dd => [dd.replace(/^\.\/(.*)\.webp$/, "$1"), vd(dd)]))),
      qd = new Set;

    function Bd(dd, Jd) {
      const kd = Jd ? dd : `${dd}-uncaught`,
        pd = (0, Gd.d)(xd, kd);
      return void 0 !== pd || qd.has(kd) || (qd.add(kd), console.warn(`Containment Breach has no mugshot ${kd}: run tools/harnessCutouts/ContainmentMugshotCapture.ts`)), pd
    }
    var sd = kd(1103);
    const ad = "containmentBreach",
      Md = "Gold Coin";

    function Fd(dd) {
      let {
        open: Jd,
        onDismiss: kd,
        title: pd,
        className: Nd,
        decor: Wd,
        headerExtra: Pd,
        status: Zd,
        statusRefused: gd = !1,
        children: Kd
      } = dd;
      const od = `${Nd}Title`;
      return (0, sd.jsx)(ld.e, {
        show: Jd,
        close: kd,
        togglePointerLock: !1,
        className: "ContainmentBoardOverlay",
        children: (0, sd.jsxs)("section", {
          className: Cd()("ContainmentBoardPanel", Nd),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": od,
          children: [Wd && (0, sd.jsx)("div", {
            className: "BoardDecor",
            "aria-hidden": "true",
            children: Wd
          }), (0, sd.jsxs)("header", {
            className: "BoardHeader",
            children: [(0, sd.jsx)("h2", {
              id: od,
              className: "VisuallyHidden",
              children: pd
            }), Pd, (0, sd.jsx)(Ld.i, {
              onClick: kd
            })]
          }), (0, sd.jsx)("div", {
            className: "BoardBody",
            children: Kd
          }), void 0 !== Zd && (0, sd.jsx)("footer", {
            className: Cd()("BoardStatus", {
              Refused: gd
            }),
            children: Zd
          })]
        })
      })
    }

    function Yd(dd) {
      let {
        itemName: Jd
      } = dd;
      return (0, sd.jsx)(Od.d, {
        itemName: Jd,
        amount: 0
      })
    }

    function md(dd) {
      let {
        anomalyId: Jd,
        caught: kd
      } = dd;
      const Nd = (0, pd.useRef)(null);
      return (0, Qd.c)(Nd, !kd), (0, sd.jsx)("span", {
        ref: Nd,
        className: Cd()("BoardMugshot", {
          Uncaught: !kd
        }),
        children: (0, sd.jsx)("img", {
          src: Bd(Jd, kd),
          alt: "",
          draggable: !1
        })
      })
    }

    function bd(dd) {
      let {
        itemName: Jd,
        amount: kd,
        EC: pd,
        inTile: Nd = !1
      } = dd;
      return (0, sd.jsx)(ed.f, {
        delayShow: 200,
        hoverOnly: Nd,
        placement: "top",
        tooltipClassName: "BoardChipTooltipBox",
        tooltipInner: (0, sd.jsx)(jd, {
          itemName: Jd,
          amount: kd,
          EC: pd
        }),
        children: (0, sd.jsxs)("span", {
          className: Cd()("BoardChip", {
            Short: void 0 !== pd && pd < kd
          }),
          children: [(0, sd.jsx)("span", {
            className: "BoardChipIcon",
            children: (0, sd.jsx)(Yd, {
              itemName: Jd
            })
          }), kd.toLocaleString()]
        })
      })
    }
    const Sd = /^(.*?)\s*Salvaged from (?:an? )?(.+?)\.?$/;

    function jd(dd) {
      var Jd;
      let {
        itemName: kd,
        amount: pd,
        EC: Nd
      } = dd;
      const {
        t: Wd
      } = (0, od.B)(), Pd = (0, Id.g)("itemInfo", (dd => dd[kd])), {
        lore: Zd,
        droppedBy: gd
      } = function(dd) {
        if ("string" !== typeof dd) return {
          lore: dd,
          droppedBy: null
        };
        const Jd = Sd.exec(dd);
        return null === Jd ? {
          lore: dd,
          droppedBy: null
        } : {
          lore: "" === Jd[1] ? void 0 : Jd[1],
          droppedBy: Jd[2]
        }
      }(null === Pd || void 0 === Pd ? void 0 : Pd.description);
      return (0, sd.jsxs)("div", {
        className: "BoardChipTooltip",
        children: [(0, sd.jsxs)("div", {
          className: "BoardChipTooltipHeader",
          children: [(0, sd.jsx)("span", {
            className: "BoardChipTooltipIcon",
            children: (0, sd.jsx)(Yd, {
              itemName: kd
            })
          }), (0, sd.jsx)(Rd.c, {
            text: null !== (Jd = null === Pd || void 0 === Pd ? void 0 : Pd.displayName) && void 0 !== Jd ? Jd : kd,
            className: "BoardChipTooltipName"
          })]
        }), (void 0 !== Zd || null !== gd) && (0, sd.jsxs)("div", {
          className: "BoardChipTooltipBody",
          children: [void 0 !== Zd && (0, sd.jsx)(Rd.c, {
            text: Zd,
            className: "BoardChipTooltipDescription"
          }), null !== gd && (0, sd.jsxs)("span", {
            className: "BoardChipTooltipSource",
            children: [(0, sd.jsx)("span", {
              className: "BoardChipTooltipLabel",
              children: Wd(`${ad}:chipDroppedBy`)
            }), gd]
          })]
        }), void 0 !== Nd && (0, sd.jsxs)("div", {
          className: Cd()("BoardChipTooltipHeld", {
            Short: Nd < pd
          }),
          children: [(0, sd.jsx)("span", {
            className: "BoardChipTooltipLabel",
            children: Wd(`${ad}:chipYouHave`)
          }), (0, sd.jsxs)("span", {
            className: "BoardChipTooltipCount",
            children: [(0, sd.jsx)("span", {
              className: "BoardChipTooltipHeldAmount",
              children: Nd.toLocaleString()
            }), ` / ${pd.toLocaleString()}`]
          }), (0, sd.jsx)("span", {
            className: "BoardChipTooltipMeter",
            children: (0, sd.jsx)("span", {
              style: {
                width: (pd > 0 ? 100 * Math.min(1, Nd / pd) : 100) + "%"
              }
            })
          })]
        })]
      })
    }

    function Xd(dd) {
      let {
        icon: Jd,
        name: kd,
        selected: pd,
        locked: Nd,
        className: Wd,
        buttonRef: Pd,
        onSelect: Zd,
        children: gd
      } = dd;
      return (0, sd.jsxs)("button", {
        ref: Pd,
        type: "button",
        className: Cd()("BoardTile", Wd, {
          Selected: pd,
          Locked: Nd
        }),
        onClick: Zd,
        children: [(0, sd.jsx)("span", {
          className: "BoardTileIcon",
          children: Jd
        }), (0, sd.jsx)("span", {
          className: "BoardTileName",
          children: kd
        }), gd]
      })
    }

    function fd(dd) {
      let {
        icon: Jd,
        name: kd,
        children: pd
      } = dd;
      return (0, sd.jsxs)("header", {
        className: "BoardDetailHeader",
        children: [(0, sd.jsx)("span", {
          className: "BoardDetailIcon",
          children: Jd
        }), (0, sd.jsxs)("div", {
          className: "BoardDetailHeading",
          children: [(0, sd.jsx)("h3", {
            children: kd
          }), (0, sd.jsx)("span", {
            className: "BoardDetailStatus",
            children: pd
          })]
        })]
      })
    }

    function nd(dd) {
      let {
        coins: Jd,
        children: kd
      } = dd;
      return (0, sd.jsxs)("div", {
        className: "BoardWallet",
        children: [(0, sd.jsx)(bd, {
          itemName: Md,
          amount: Jd
        }), kd]
      })
    }
    var Ud = kd(38670);
    const yd = "containmentCodexView";
    class Dd extends Ud.c {
      constructor() {
        super(...arguments), this.entries = [], this.selectedId = "", this.snapshot = this.buildSnapshot(), this.select = dd => {
          this.selectedId = dd, this.emit()
        }
      }
      ZL(dd) {
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
    const Td = {
        codexAnyDifficulty: `${ad}:codexNeedsAny`,
        codexNormalOnly: `${ad}:codexNeedsNormal`,
        codexHardOnly: `${ad}:codexNeedsHard`
      },
      Ed = {
        codexContained: "Contained",
        codexEncountered: "Sighted",
        codexUnidentified: "Unknown"
      },
      cd = {
        codexContained: `${ad}:codexContainedBadge`,
        codexEncountered: `${ad}:codexEncounteredBadge`,
        codexUnidentified: `${ad}:codexUnidentifiedBadge`
      },
      hd = ["94%", "81%", "88%", "46%", "72%"];

    function rd(dd) {
      let {
        entry: Jd
      } = dd;
      const {
        t: kd
      } = (0, od.B)();
      return (0, sd.jsx)("span", {
        className: Cd()("BoardBadge", Ed[Jd.codexEntryState]),
        children: kd(cd[Jd.codexEntryState])
      })
    }

    function ud(dd) {
      const {
        t: Jd
      } = (0, od.B)();
      return "codexUnidentified" === dd.codexEntryState ? Jd(`${ad}:codexUnidentifiedName`) : dd.codexEntryName
    }

    function td(dd) {
      let {
        entry: Jd
      } = dd;
      return "codexUnidentified" === Jd.codexEntryState ? (0, sd.jsx)(Yd, {
        itemName: "Book"
      }) : (0, sd.jsxs)("span", {
        className: "CodexPhoto",
        children: [(0, sd.jsx)(md, {
          anomalyId: Jd.codexEntryId,
          caught: "codexContained" === Jd.codexEntryState
        }), (0, sd.jsx)("img", {
          className: "CodexPaperclip",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAMCAYAAACulacQAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGNggIIXb97/X7V57/+Wvtn/GZDBqs17UQTgClahScBATHrlf5ySeHWimo9NMbokCp9OkmD/oasGCaJLAAC5ZUIBS85GiAAAAABJRU5ErkJggg==",
          alt: "",
          draggable: !1
        })]
      })
    }

    function Vd(dd) {
      let {
        entry: Jd,
        selected: kd,
        onSelect: pd
      } = dd;
      const Nd = "codexUnidentified" === Jd.codexEntryState;
      return (0, sd.jsxs)(Xd, {
        icon: (0, sd.jsx)(td, {
          entry: Jd
        }),
        name: ud(Jd),
        selected: kd,
        locked: Nd,
        className: Cd()("CodexFolder", Ed[Jd.codexEntryState]),
        onSelect: () => {
          pd(Jd.codexEntryId)
        },
        children: [!Nd && (0, sd.jsx)(rd, {
          entry: Jd
        }), Nd && (0, sd.jsx)("img", {
          className: "CodexSeal",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAARElEQVR4nGNggIIGHp7/MAzjw+TAnMf+/mB8RkQEjOGKYZLIgsiK4AqQJZA1gBXAOHgVwCRQJJEdCVOEYj8yQPciTAEAz0hgyamUqskAAAAASUVORK5CYII=",
          alt: "",
          draggable: !1
        })]
      })
    }

    function zd(dd) {
      let {
        count: Jd
      } = dd;
      const kd = [];
      for (let pd = Math.min(Jd, 25); pd > 0; pd -= 5) kd.push(Math.min(pd, 5));
      return (0, sd.jsx)("span", {
        className: "CodexTallyMarks",
        "aria-hidden": "true",
        children: kd.map(((dd, Jd) => (0, sd.jsx)("span", {
          className: Cd()("CodexTallyGroup", {
            Gate: 5 === dd
          }),
          children: Array.from({
            length: Math.min(dd, 4)
          }, ((dd, Jd) => (0, sd.jsx)("span", {
            className: "CodexTallyMark"
          }, Jd)))
        }, Jd)))
      })
    }

    function Hd(dd) {
      let {
        contained: Jd,
        total: kd
      } = dd;
      const {
        t: pd
      } = (0, od.B)();
      return (0, sd.jsxs)("div", {
        className: "CodexProgress",
        children: [pd(`${ad}:codexProgress`, {
          contained: String(Jd),
          total: String(kd)
        }), (0, sd.jsx)("span", {
          className: "CodexProgressMeter",
          children: (0, sd.jsx)("span", {
            style: {
              width: Jd / kd * 100 + "%"
            }
          })
        })]
      })
    }

    function wd(dd) {
      let {
        entry: Jd,
        fileNumber: kd
      } = dd;
      const {
        t: pd
      } = (0, od.B)(), Nd = "codexContained" === Jd.codexEntryState;
      return (0, sd.jsx)("section", {
        className: "BoardDetail",
        children: (0, sd.jsxs)("article", {
          className: Cd()("CodexDossier", Ed[Jd.codexEntryState]),
          children: [(0, sd.jsx)("span", {
            className: "CodexFileNumber",
            children: pd(`${ad}:codexFileNumber`, {
              number: String(kd).padStart(3, "0")
            })
          }), (0, sd.jsx)(fd, {
            icon: (0, sd.jsx)(td, {
              entry: Jd
            }),
            name: ud(Jd),
            children: (0, sd.jsx)(rd, {
              entry: Jd
            })
          }), Nd && (0, sd.jsxs)(sd.Fragment, {
            children: [(0, sd.jsx)("p", {
              className: "BoardDescription",
              children: Jd.codexEntryLore
            }), (0, sd.jsxs)("p", {
              className: "CodexTally",
              children: [pd(`${ad}:codexContainments`, {
                count: String(Jd.codexEntryContainedCount)
              }), (0, sd.jsx)(zd, {
                count: Jd.codexEntryContainedCount
              })]
            }), (0, sd.jsx)("span", {
              className: "CodexClosedStamp",
              "aria-hidden": "true",
              children: pd(`${ad}:codexContainedBadge`)
            })]
          }), !Nd && (0, sd.jsxs)(sd.Fragment, {
            children: [(0, sd.jsxs)("div", {
              className: "CodexRedaction",
              children: [hd.map((dd => (0, sd.jsx)("span", {
                className: "CodexRedactedLine",
                style: {
                  width: dd
                }
              }, dd))), (0, sd.jsx)("p", {
                className: "CodexRedacted",
                children: pd(`${ad}:codexRedacted`)
              })]
            }), "" !== Jd.codexEntryHint && (0, sd.jsxs)("aside", {
              className: "CodexNote",
              children: [(0, sd.jsx)("h4", {
                children: pd(`${ad}:codexHintLabel`)
              }), (0, sd.jsx)("p", {
                children: Jd.codexEntryHint
              })]
            }), (0, sd.jsx)("p", {
              className: "CodexClearance",
              children: pd(Td[Jd.codexEntryDifficulty])
            })]
          })]
        })
      })
    }

    function Ad(dd) {
      let {
        controller: Jd
      } = dd;
      const kd = (0, Kd.i)(yd, Jd.getSnapshot()),
        {
          t: pd
        } = (0, od.B)();
      if (0 === kd.entries.length) return null;
      const Nd = kd.entries.find((dd => dd.codexEntryId === kd.selectedId)),
        Wd = kd.entries.filter((dd => "codexContained" === dd.codexEntryState)).length,
        Pd = kd.entries.map((dd => dd.codexEntryId)).sort().indexOf(Nd.codexEntryId) + 1;
      return (0, sd.jsxs)(Fd, {
        open: kd.open,
        onDismiss: Jd.dismiss,
        title: pd(`${ad}:codexTitle`),
        className: "ContainmentCodexPanel",
        headerExtra: (0, sd.jsx)(Hd, {
          contained: Wd,
          total: kd.entries.length
        }),
        children: [(0, sd.jsx)("div", {
          className: "BoardTiles",
          children: kd.entries.map((dd => (0, sd.jsx)(Vd, {
            entry: dd,
            selected: dd === Nd,
            onSelect: Jd.select
          }, dd.codexEntryId)))
        }), (0, sd.jsx)(wd, {
          entry: Nd,
          fileNumber: Pd
        })]
      })
    }
    var dJ = kd(313);
    class JJ extends Ud.c {
      constructor(dd, Jd, kd, pd, Nd, Wd) {
        super(dd, Jd, kd), this.pacer = pd, this.command = Nd, this.predict = Wd, this.board = null, this.confirmed = null, this.selectedId = "", this.notice = null, this.unsubscribePacer = void 0, this.select = dd => {
          this.selectedId = dd, this.emit()
        }, this.act = (dd, Jd) => {
          if (!this.open || null === this.board || !this.pacer.send(`${this.command} ${dd} ${Jd}`, this.rollBack)) return;
          const kd = this.predict(this.board, dd, Jd);
          null !== kd && (this.board = kd.board, this.notice = kd.notice, this.emit())
        }, this.rollBack = () => {
          this.board !== this.confirmed && (this.board = this.confirmed, this.notice = null)
        }, this.unsubscribePacer = pd.subscribe((() => {
          this.emit()
        }))
      }
      ZL(dd) {
        const Jd = this.messageOpens(dd);
        if (Jd && this.open) return this.board === this.confirmed && (this.board = dd), this.confirmed = dd, void this.emit();
        if (this.board = dd, this.confirmed = dd, this.pacer.onReply(), Jd) return this.notice = null, this.selectedId = this.openingSelection(dd), void this.show();
        const kd = this.messageNotice(dd);
        null !== kd && (this.notice = kd), this.emit()
      }
      dispose() {
        this.unsubscribePacer(), super.dispose()
      }
      onClosed() {
        this.notice = null
      }
    }

    function kJ(dd, Jd) {
      return dd.loadoutCoins >= Jd.loadoutCostCoins && Jd.loadoutCostParts.every((Jd => function(dd, Jd) {
        return pJ(dd, Jd).loadoutHeldPartAmount
      }(dd, Jd.loadoutPartCurrency) >= Jd.loadoutPartAmount))
    }

    function pJ(dd, Jd) {
      return dd.loadoutHeldParts.find((dd => dd.loadoutHeldPartCurrency === Jd))
    }

    function NJ(dd, Jd) {
      return dd.loadoutSlots.find((dd => dd.loadoutSlotKind === Jd))
    }

    function WJ(dd) {
      return dd.loadoutPerks.filter((dd => dd.loadoutPerkEquipped)).length >= dd.loadoutMaxPerks
    }

    function PJ(dd, Jd, kd) {
      for (const Nd of dd.loadoutSlots) {
        const pd = Nd.loadoutSlotOptions.find((dd => dd.loadoutOptionId === kd));
        if (pd) return "loadoutArmour" === Nd.loadoutSlotKind ? gJ(dd, Nd, pd, Jd) : ZJ(dd, Nd, pd, Jd)
      }
      const pd = dd.loadoutPerks.find((dd => dd.loadoutPerkId === kd));
      return pd ? function(dd, Jd, kd) {
        const pd = Jd.loadoutPerkOwned,
          Nd = Jd.loadoutPerkEquipped,
          Wd = Jd.loadoutPerkName,
          Pd = WJ(dd);
        if ("loadoutUnlock" === kd) {
          if (pd || !kJ(dd, Jd.loadoutPerkCost)) return null;
          const kd = {
            ...Jd,
            loadoutPerkOwned: !0,
            loadoutPerkEquipped: !Pd
          };
          return {
            board: KJ(oJ(dd, Jd.loadoutPerkCost), kd),
            notice: lJ(Pd ? "loadoutNoticeUnlockedNoRoom" : "loadoutNoticeUnlocked", Wd)
          }
        }
        if ("loadoutUpgrade" === kd || !pd || "loadoutEquip" === kd === Nd || !Nd && Pd) return null;
        return {
          board: KJ(dd, {
            ...Jd,
            loadoutPerkEquipped: !Nd
          }),
          notice: lJ(Nd ? "loadoutNoticeUnequipped" : "loadoutNoticeEquipped", Wd)
        }
      }(dd, pd, Jd) : null
    }

    function ZJ(dd, Jd, kd, pd) {
      const Nd = kd.loadoutOptionOwnedTier,
        Wd = kd.loadoutOptionName;
      if ("loadoutEquip" === pd) return 0 === Nd ? null : {
        board: CJ(dd, Jd, kd.loadoutOptionId, null),
        notice: lJ("loadoutNoticeEquipped", Wd)
      };
      const Pd = "loadoutUnlock" === pd;
      if (Pd && 0 !== Nd || "loadoutUpgrade" === pd && (0 === Nd || Nd >= kd.loadoutOptionTiers.length) || "loadoutUnequip" === pd) return null;
      const Zd = kd.loadoutOptionTiers[Nd].loadoutTierCost;
      if (!kJ(dd, Zd)) return null;
      const gd = {
          ...kd,
          loadoutOptionOwnedTier: Nd + 1
        },
        Cd = Pd ? kd.loadoutOptionId : Jd.loadoutSlotEquippedId;
      return {
        board: CJ(oJ(dd, Zd), Jd, Cd, gd),
        notice: Pd ? lJ("loadoutNoticeUnlocked", Wd) : lJ("loadoutNoticeUpgraded", Wd, Nd + 1)
      }
    }

    function gJ(dd, Jd, kd, pd) {
      const Nd = kd.loadoutOptionOwnedTier > 0,
        Wd = kd.loadoutOptionName;
      if ("loadoutEquip" === pd && Nd) return {
        board: CJ(dd, Jd, kd.loadoutOptionId, null),
        notice: lJ("loadoutNoticeEquipped", Wd)
      };
      const Pd = kd.loadoutOptionTiers[0].loadoutTierCost;
      return "loadoutUnlock" !== pd || Nd || !kJ(dd, Pd) ? null : {
        board: CJ(oJ(dd, Pd), Jd, kd.loadoutOptionId, {
          ...kd,
          loadoutOptionOwnedTier: 1
        }),
        notice: lJ("loadoutNoticeUnlocked", Wd)
      }
    }

    function CJ(dd, Jd, kd, pd) {
      const Nd = {
        ...Jd,
        loadoutSlotEquippedId: kd,
        loadoutSlotOptions: Jd.loadoutSlotOptions.map((dd => null !== pd && dd.loadoutOptionId === pd.loadoutOptionId ? pd : dd))
      };
      return {
        ...dd,
        loadoutSlots: dd.loadoutSlots.map((dd => dd === Jd ? Nd : dd))
      }
    }

    function KJ(dd, Jd) {
      return {
        ...dd,
        loadoutPerks: dd.loadoutPerks.map((dd => dd.loadoutPerkId === Jd.loadoutPerkId ? Jd : dd))
      }
    }

    function oJ(dd, Jd) {
      return {
        ...dd,
        loadoutCoins: dd.loadoutCoins - Jd.loadoutCostCoins,
        loadoutHeldParts: dd.loadoutHeldParts.map((dd => {
          const kd = Jd.loadoutCostParts.find((Jd => Jd.loadoutPartCurrency === dd.loadoutHeldPartCurrency));
          return kd ? {
            ...dd,
            loadoutHeldPartAmount: dd.loadoutHeldPartAmount - kd.loadoutPartAmount
          } : dd
        }))
      }
    }

    function lJ(dd, Jd) {
      return {
        loadoutNoticeKey: dd,
        loadoutNoticeRefused: !1,
        loadoutNoticeName: Jd,
        loadoutNoticeTier: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
      }
    }
    const QJ = "containmentLoadoutView";
    class LJ extends JJ {
      constructor(dd, Jd, kd, pd) {
        super(dd, Jd, kd, pd, "loadout", PJ), this.slot = "loadoutPrimary", this.snapshot = this.buildSnapshot(), this.selectSlot = dd => {
          this.slot = dd, this.selectedId = OJ(this.board, dd), this.emit()
        }
      }
      messageOpens(dd) {
        return dd.loadoutMessageOpens
      }
      messageNotice(dd) {
        return dd.loadoutNotice
      }
      openingSelection(dd) {
        return OJ(dd, this.slot)
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

    function OJ(dd, Jd) {
      if ("loadoutPerks" === Jd) {
        var kd;
        const Jd = dd.loadoutPerks;
        return (null !== (kd = Jd.find((dd => dd.loadoutPerkEquipped))) && void 0 !== kd ? kd : Jd[0]).loadoutPerkId
      }
      return NJ(dd, Jd).loadoutSlotEquippedId
    }
    const eJ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAY0lEQVR4nGNgIAP8x4FRwP/sFt3/EYU6YBqGIwp1MBSDBUH4/3nW//83csD5DOgKfeKNsWIMhV+///qvbOT7/87cMjCG8TEUgiSLqlpRMEgMQ+HJvgy4aTAMEsPqc2KChyAAAFxNbnylK5O6AAAAAElFTkSuQmCC";
    var RJ = kd(37061),
      IJ = kd(1302);
    const GJ = {
        loadoutPrimary: `${ad}:loadoutSlotPrimary`,
        loadoutSecondary: `${ad}:loadoutSlotSecondary`,
        loadoutOffensive: `${ad}:loadoutSlotOffensive`,
        loadoutSelfHelp: `${ad}:loadoutSlotSelfHelp`,
        loadoutArmour: `${ad}:loadoutSlotArmour`,
        loadoutPerks: `${ad}:loadoutSlotPerks`
      },
      vJ = {
        section: "right",
        Tl: "bottom",
        act: "top"
      },
      xJ = (0, pd.createContext)({
        step: null,
        targetRef: () => {}
      });

    function qJ() {
      const {
        step: dd,
        targetRef: Jd
      } = (0, pd.useContext)(xJ);
      return (kd, pd) => (null === dd || void 0 === dd ? void 0 : dd.kind) === kd && dd.id === pd ? Jd : void 0
    }

    function BJ(dd, Jd) {
      const kd = Jd.loadoutTargetId;
      if ("loadoutPerks" === Jd.loadoutTargetSection) {
        const Jd = dd.loadoutPerks.find((dd => dd.loadoutPerkId === kd));
        return {
          name: Jd.loadoutPerkName,
          owned: Jd.loadoutPerkOwned,
          equipped: Jd.loadoutPerkEquipped
        }
      }
      const pd = NJ(dd, Jd.loadoutTargetSection),
        Nd = pd.loadoutSlotOptions.find((dd => dd.loadoutOptionId === kd));
      return {
        name: Nd.loadoutOptionName,
        owned: Nd.loadoutOptionOwnedTier > 0,
        equipped: pd.loadoutSlotEquippedId === kd
      }
    }

    function sJ(dd, Jd, kd, pd) {
      const [Nd, Wd] = dd(`${ad}:${Jd}`, {
        [kd]: "\x01"
      }).split("\x01");
      return (0, sd.jsxs)(sd.Fragment, {
        children: [Nd, (0, sd.jsx)("span", {
          className: "LoadoutWalkthroughName",
          children: pd
        }), Wd]
      })
    }

    function iJ(dd) {
      let {
        view: Jd,
        onDismiss: kd,
        children: Nd
      } = dd;
      const {
        t: Wd
      } = (0, od.B)(), Pd = Jd.loadout, Zd = Jd.open ? Pd.loadoutWalkthrough.map((dd => ({
        target: dd,
        info: BJ(Pd, dd)
      }))).find((dd => {
        let {
          info: Jd
        } = dd;
        return !Jd.equipped
      })) : void 0;
      let gd = null,
        Cd = null;
      if (void 0 !== Zd) {
        const {
          target: dd,
          info: kd
        } = Zd;
        Jd.slot !== dd.loadoutTargetSection ? (gd = {
          kind: "section",
          id: dd.loadoutTargetSection
        }, Cd = sJ(Wd, "loadoutWalkthroughSection", "section", Wd(GJ[dd.loadoutTargetSection]))) : Jd.selectedId !== dd.loadoutTargetId ? (gd = {
          kind: "Tl",
          id: dd.loadoutTargetId
        }, Cd = sJ(Wd, "loadoutWalkthroughPick", "name", kd.name)) : (gd = {
          kind: "act",
          id: dd.loadoutTargetId
        }, Cd = sJ(Wd, kd.owned ? "loadoutWalkthroughEquip" : "loadoutWalkthroughUnlock", "name", kd.name))
      }
      const Kd = null === gd ? null : function(dd) {
          return `${dd.kind}:${dd.id}`
        }(gd),
        [ld, Qd] = (0, pd.useState)(null),
        Ld = (0, pd.useCallback)((dd => {
          Qd((Jd => null !== dd ? {
            key: Kd,
            node: dd
          } : (null === Jd || void 0 === Jd ? void 0 : Jd.key) === Kd ? null : Jd))
        }), [Kd]),
        Od = null !== Kd && (null === ld || void 0 === ld ? void 0 : ld.key) === Kd ? ld.node : null;
      return (0, sd.jsxs)(xJ.Provider, {
        value: {
          step: gd,
          targetRef: Ld
        },
        children: [Nd, null !== gd && null !== Od && (0, sd.jsx)(aJ, {
          target: Od,
          placement: vJ[gd.kind],
          onDismiss: kd,
          children: Cd
        }, Kd)]
      })
    }

    function aJ(dd) {
      let {
        target: Jd,
        placement: kd,
        onDismiss: Nd,
        children: Wd
      } = dd;
      const {
        t: Pd
      } = (0, od.B)(), Zd = (0, pd.useRef)(Jd);
      return Zd.current = Jd, (0, IJ.s)("popup", Zd, Nd), (0, sd.jsxs)(RJ.e, {
        target: Jd,
        placement: kd,
        className: "LoadoutWalkthroughStep",
        spotlightMargin: 10,
        children: [(0, sd.jsxs)("div", {
          className: "LoadoutWalkthroughHeader",
          children: [(0, sd.jsx)("img", {
            className: "LoadoutWalkthroughPortrait",
            src: eJ,
            alt: "",
            draggable: !1
          }), (0, sd.jsx)("span", {
            className: "LoadoutWalkthroughSpeaker",
            children: Pd(`${ad}:operatorName`)
          }), (0, sd.jsx)(Ld.i, {
            onClick: Nd,
            ariaLabel: Pd(`${ad}:loadoutWalkthroughClose`),
            padIgnore: !0
          })]
        }), (0, sd.jsx)("p", {
          className: "LoadoutWalkthroughText",
          children: Wd
        })]
      })
    }
    const MJ = new Set(["loadoutStatReload", "loadoutStatResupply"]);

    function FJ(dd) {
      let {
        cost: Jd,
        loadout: kd
      } = dd;
      const {
        t: pd
      } = (0, od.B)();
      return Jd.loadoutCostCoins <= 0 && 0 === Jd.loadoutCostParts.length ? (0, sd.jsx)("span", {
        className: "LoadoutCost",
        children: pd(`${ad}:loadoutFree`)
      }) : (0, sd.jsxs)("span", {
        className: "LoadoutCost",
        children: [Jd.loadoutCostCoins > 0 && (0, sd.jsx)(bd, {
          itemName: Md,
          amount: Jd.loadoutCostCoins,
          EC: kd.loadoutCoins
        }), Jd.loadoutCostParts.map((dd => {
          const Jd = pJ(kd, dd.loadoutPartCurrency);
          return (0, sd.jsx)(bd, {
            itemName: Jd.loadoutHeldPartItem,
            amount: dd.loadoutPartAmount,
            EC: Jd.loadoutHeldPartAmount
          }, dd.loadoutPartCurrency)
        }))]
      })
    }
    const YJ = {
      loadoutStatFireRate: `${ad}:loadoutUnitPerMinute`,
      loadoutStatReload: `${ad}:loadoutUnitSeconds`,
      loadoutStatResupply: `${ad}:loadoutUnitSeconds`
    };

    function mJ(dd) {
      return "loadoutStatPotency" === dd.loadoutStatKind ? (0, dJ.V)(dd.loadoutStatValue) : String(dd.loadoutStatValue)
    }

    function bJ(dd) {
      var Jd;
      let {
        option: kd
      } = dd;
      const {
        t: pd
      } = (0, od.B)(), Nd = kd.loadoutOptionTiers, Wd = null === (Jd = Nd[0]) || void 0 === Jd ? void 0 : Jd.loadoutTierStats.map((dd => dd.loadoutStatKind));
      if (!Wd || 0 === Wd.length) return null;
      const Pd = kd.loadoutOptionOwnedTier,
        Zd = (dd, Jd) => {
          var kd;
          return null === (kd = Nd[dd]) || void 0 === kd ? void 0 : kd.loadoutTierStats.find((dd => dd.loadoutStatKind === Jd))
        };
      return (0, sd.jsxs)("table", {
        className: "LoadoutTierTable",
        children: [(0, sd.jsx)("thead", {
          children: (0, sd.jsxs)("tr", {
            children: [(0, sd.jsx)("th", {}), Nd.map(((dd, Jd) => (0, sd.jsx)("th", {
              className: Cd()({
                Current: Jd + 1 === Pd,
                Next: Jd === Pd
              }),
              children: pd(`${ad}:loadoutTier`, {
                tier: (0, dJ.V)(Jd + 1)
              })
            }, Jd)))]
          })
        }), (0, sd.jsx)("tbody", {
          children: Wd.map((dd => {
            const Jd = YJ[dd];
            return (0, sd.jsxs)("tr", {
              children: [(0, sd.jsxs)("th", {
                scope: "row",
                children: [pd(`${ad}:${dd}`), Jd && (0, sd.jsx)("span", {
                  className: "LoadoutStatUnit",
                  children: pd(Jd)
                })]
              }), Nd.map(((Jd, kd) => {
                const pd = Zd(kd, dd),
                  Nd = kd > 0 ? Zd(kd - 1, dd) : void 0,
                  Wd = pd && Nd ? pd.loadoutStatValue - Nd.loadoutStatValue : 0,
                  gd = MJ.has(dd) ? Wd < 0 : Wd > 0,
                  Kd = kd === Pd;
                return (0, sd.jsxs)("td", {
                  className: Cd()({
                    Current: kd + 1 === Pd,
                    Next: Kd,
                    Gain: gd,
                    Owned: kd < Pd
                  }),
                  children: [Kd && gd && (0, sd.jsx)("span", {
                    className: "LoadoutGainArrow",
                    "aria-hidden": "true",
                    children: Wd < 0 ? "\u25bc" : "\u25b2"
                  }), pd ? mJ(pd) : "-"]
                }, kd)
              }))]
            }, dd)
          }))
        })]
      })
    }

    function SJ(dd) {
      let {
        view: Jd,
        controller: kd,
        slot: pd,
        option: Nd
      } = dd;
      const {
        t: Wd
      } = (0, od.B)(), Pd = Jd.loadout, Zd = Nd.loadoutOptionOwnedTier, gd = Nd.loadoutOptionTiers.length, Cd = pd.loadoutSlotEquippedId === Nd.loadoutOptionId, Kd = Zd < gd ? Nd.loadoutOptionTiers[Zd].loadoutTierCost : null, ld = null !== Kd && kJ(Pd, Kd), Qd = Nd.loadoutOptionId, Od = qJ();
      return (0, sd.jsxs)(sd.Fragment, {
        children: [(0, sd.jsx)(XJ, {
          icon: Nd.loadoutOptionIcon,
          name: Nd.loadoutOptionName,
          status: 0 === Zd ? Wd(`${ad}:loadoutLocked`) : gd > 1 ? Wd(`${ad}:loadoutTier`, {
            tier: (0, dJ.V)(Zd)
          }) : null,
          locked: 0 === Zd,
          equipped: Cd
        }), (0, sd.jsx)("p", {
          className: "BoardDescription",
          children: Nd.loadoutOptionDescription
        }), (0, sd.jsx)(bJ, {
          option: Nd
        }), (0, sd.jsxs)("div", {
          ref: Od("act", Qd),
          className: "BoardActions",
          children: [null !== Kd && (0, sd.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, sd.jsx)(FJ, {
              cost: Kd,
              loadout: Pd
            }), (0, sd.jsx)(Ld.j, {
              disabled: !ld || Jd.pending,
              onClick: () => {
                kd.act(0 === Zd ? "loadoutUnlock" : "loadoutUpgrade", Qd)
              },
              children: 0 === Zd ? Wd(`${ad}:loadoutUnlock`) : Wd(`${ad}:loadoutUpgrade`, {
                tier: (0, dJ.V)(Zd + 1)
              })
            })]
          }), null === Kd && gd > 1 && (0, sd.jsx)("span", {
            className: "BoardHint",
            children: Wd(`${ad}:loadoutMaxed`)
          }), Zd > 0 && !Cd && (0, sd.jsx)(Ld.d, {
            disabled: Jd.pending,
            onClick: () => {
              kd.act("loadoutEquip", Qd)
            },
            children: Wd(`${ad}:loadoutEquip`)
          })]
        })]
      })
    }

    function jJ(dd) {
      let {
        view: Jd,
        controller: kd,
        perk: pd
      } = dd;
      const {
        t: Nd
      } = (0, od.B)(), Wd = Jd.loadout, Pd = WJ(Wd), Zd = pd.loadoutPerkId, gd = qJ();
      return (0, sd.jsxs)(sd.Fragment, {
        children: [(0, sd.jsx)(XJ, {
          icon: pd.loadoutPerkIcon,
          name: pd.loadoutPerkName,
          status: pd.loadoutPerkOwned ? null : Nd(`${ad}:loadoutLocked`),
          locked: !pd.loadoutPerkOwned,
          equipped: pd.loadoutPerkEquipped
        }), (0, sd.jsx)("p", {
          className: "BoardDescription",
          children: pd.loadoutPerkDescription
        }), (0, sd.jsxs)("div", {
          ref: gd("act", Zd),
          className: "BoardActions",
          children: [!pd.loadoutPerkOwned && (0, sd.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, sd.jsx)(FJ, {
              cost: pd.loadoutPerkCost,
              loadout: Wd
            }), (0, sd.jsx)(Ld.j, {
              disabled: !kJ(Wd, pd.loadoutPerkCost) || Jd.pending,
              onClick: () => {
                kd.act("loadoutUnlock", Zd)
              },
              children: Nd(`${ad}:loadoutUnlock`)
            })]
          }), pd.loadoutPerkOwned && !pd.loadoutPerkEquipped && (0, sd.jsx)(Ld.d, {
            disabled: Pd || Jd.pending,
            onClick: () => {
              kd.act("loadoutEquip", Zd)
            },
            children: Nd(`${ad}:loadoutEquip`)
          }), pd.loadoutPerkOwned && !pd.loadoutPerkEquipped && Pd && (0, sd.jsx)("span", {
            className: "BoardHint",
            children: Nd(`${ad}:loadoutSocketsFullHint`)
          }), pd.loadoutPerkEquipped && (0, sd.jsx)(Ld.G, {
            disabled: Jd.pending,
            onClick: () => {
              kd.act("loadoutUnequip", Zd)
            },
            children: Nd(`${ad}:loadoutUnequip`)
          })]
        })]
      })
    }

    function XJ(dd) {
      let {
        icon: Jd,
        name: kd,
        status: pd,
        locked: Nd,
        equipped: Wd
      } = dd;
      const {
        t: Pd
      } = (0, od.B)();
      return (0, sd.jsxs)(fd, {
        icon: (0, sd.jsx)(Yd, {
          itemName: Jd
        }),
        name: kd,
        children: [null !== pd && (0, sd.jsx)("span", {
          className: Cd()("LoadoutStatusText", {
            Locked: Nd
          }),
          children: pd
        }), Wd && (0, sd.jsx)("span", {
          className: "BoardBadge",
          children: Pd(`${ad}:loadoutEquippedBadge`)
        })]
      })
    }

    function fJ(dd) {
      let {
        view: Jd,
        controller: kd
      } = dd;
      const pd = Jd.loadout;
      if ("loadoutPerks" === Jd.slot) {
        const dd = pd.loadoutPerks.find((dd => dd.loadoutPerkId === Jd.selectedId));
        return (0, sd.jsx)("section", {
          className: "BoardDetail",
          children: dd && (0, sd.jsx)(jJ, {
            view: Jd,
            controller: kd,
            perk: dd
          })
        })
      }
      const Nd = NJ(pd, Jd.slot),
        Wd = Nd.loadoutSlotOptions.find((dd => dd.loadoutOptionId === Jd.selectedId));
      return (0, sd.jsx)("section", {
        className: "BoardDetail",
        children: Wd && (0, sd.jsx)(SJ, {
          view: Jd,
          controller: kd,
          slot: Nd,
          option: Wd
        })
      })
    }

    function nJ(dd) {
      let {
        owned: Jd,
        total: kd
      } = dd;
      return kd <= 1 ? null : (0, sd.jsx)("span", {
        className: "LoadoutPips",
        children: Array.from({
          length: kd
        }, ((dd, kd) => (0, sd.jsx)("span", {
          className: Cd()("LoadoutPip", {
            Filled: kd < Jd
          })
        }, kd)))
      })
    }

    function UJ(dd) {
      let {
        view: Jd,
        controller: kd
      } = dd;
      const {
        t: pd
      } = (0, od.B)(), Nd = Jd.loadout, Wd = qJ();
      return (0, sd.jsxs)("nav", {
        className: "LoadoutKit",
        "aria-label": pd(`${ad}:loadoutKit`),
        children: [Nd.loadoutSlots.map((dd => {
          const Nd = dd.loadoutSlotOptions.find((Jd => Jd.loadoutOptionId === dd.loadoutSlotEquippedId));
          return (0, sd.jsxs)("button", {
            ref: Wd("section", dd.loadoutSlotKind),
            type: "button",
            className: Cd()("LoadoutKitSlot", {
              Selected: Jd.slot === dd.loadoutSlotKind
            }),
            onClick: () => {
              kd.selectSlot(dd.loadoutSlotKind)
            },
            children: [(0, sd.jsx)("span", {
              className: "LoadoutKitIcon",
              children: Nd && (0, sd.jsx)(Yd, {
                itemName: Nd.loadoutOptionIcon
              })
            }), (0, sd.jsxs)("span", {
              className: "LoadoutKitText",
              children: [(0, sd.jsxs)("span", {
                className: "LoadoutKitTop",
                children: [(0, sd.jsx)("span", {
                  className: "LoadoutKitLabel",
                  children: pd(GJ[dd.loadoutSlotKind])
                }), Nd && (0, sd.jsx)(nJ, {
                  owned: Nd.loadoutOptionOwnedTier,
                  total: Nd.loadoutOptionTiers.length
                })]
              }), (0, sd.jsx)("span", {
                className: "LoadoutKitName",
                children: null === Nd || void 0 === Nd ? void 0 : Nd.loadoutOptionName
              })]
            })]
          }, dd.loadoutSlotKind)
        })), (0, sd.jsx)(yJ, {
          view: Jd,
          controller: kd
        })]
      })
    }

    function yJ(dd) {
      let {
        view: Jd,
        controller: kd
      } = dd;
      const {
        t: pd
      } = (0, od.B)(), Nd = Jd.loadout, Wd = Nd.loadoutPerks.filter((dd => dd.loadoutPerkEquipped)), Pd = qJ();
      return (0, sd.jsxs)("button", {
        ref: Pd("section", "loadoutPerks"),
        type: "button",
        className: Cd()("LoadoutKitSlot", "LoadoutPerks", {
          Selected: "loadoutPerks" === Jd.slot
        }),
        onClick: () => {
          kd.selectSlot("loadoutPerks")
        },
        children: [(0, sd.jsxs)("span", {
          className: "LoadoutKitTop",
          children: [(0, sd.jsx)("span", {
            className: "LoadoutKitLabel",
            children: pd(GJ.loadoutPerks)
          }), (0, sd.jsx)("span", {
            className: "LoadoutPerkCount",
            children: pd(`${ad}:loadoutPerkCount`, {
              equipped: String(Wd.length),
              max: String(Nd.loadoutMaxPerks)
            })
          })]
        }), (0, sd.jsx)("span", {
          className: "LoadoutSockets",
          children: Array.from({
            length: Nd.loadoutMaxPerks
          }, ((dd, Jd) => {
            const kd = Wd[Jd];
            return (0, sd.jsxs)("span", {
              className: Cd()("LoadoutSocket", {
                Filled: kd,
                Empty: !kd
              }),
              children: [(0, sd.jsx)("span", {
                className: "LoadoutSocketWell",
                children: kd && (0, sd.jsx)(Yd, {
                  itemName: kd.loadoutPerkIcon
                })
              }), (0, sd.jsx)("span", {
                className: "LoadoutSocketName",
                children: kd ? kd.loadoutPerkName : pd(`${ad}:loadoutPerkSocketEmpty`)
              })]
            }, Jd)
          }))
        })]
      })
    }

    function DJ(dd) {
      let {
        icon: Jd,
        name: kd,
        selected: pd,
        equipped: Nd,
        locked: Wd,
        ownedTier: Pd,
        tiers: Zd,
        buttonRef: gd,
        onSelect: Cd
      } = dd;
      const {
        t: Kd
      } = (0, od.B)();
      return (0, sd.jsxs)(Xd, {
        icon: (0, sd.jsx)(Yd, {
          itemName: Jd
        }),
        name: kd,
        selected: pd,
        locked: Wd,
        buttonRef: gd,
        onSelect: Cd,
        children: [Nd && (0, sd.jsx)("span", {
          className: "BoardBadge",
          children: Kd(`${ad}:loadoutEquippedBadge`)
        }), Wd && (0, sd.jsx)("span", {
          className: "BoardBadge Muted",
          children: Kd(`${ad}:loadoutLocked`)
        }), !Wd && (0, sd.jsx)(nJ, {
          owned: Pd,
          total: Zd
        })]
      })
    }

    function TJ(dd) {
      let {
        view: Jd,
        controller: kd
      } = dd;
      const pd = Jd.loadout,
        Nd = qJ();
      if ("loadoutPerks" === Jd.slot) return (0, sd.jsx)("div", {
        className: "BoardTiles",
        children: pd.loadoutPerks.map((dd => (0, sd.jsx)(DJ, {
          icon: dd.loadoutPerkIcon,
          name: dd.loadoutPerkName,
          selected: Jd.selectedId === dd.loadoutPerkId,
          equipped: dd.loadoutPerkEquipped,
          locked: !dd.loadoutPerkOwned,
          ownedTier: 0,
          tiers: 0,
          buttonRef: Nd("Tl", dd.loadoutPerkId),
          onSelect: () => {
            kd.select(dd.loadoutPerkId)
          }
        }, dd.loadoutPerkId)))
      });
      const Wd = NJ(pd, Jd.slot);
      return (0, sd.jsx)("div", {
        className: "BoardTiles",
        children: Wd.loadoutSlotOptions.map((dd => (0, sd.jsx)(DJ, {
          icon: dd.loadoutOptionIcon,
          name: dd.loadoutOptionName,
          selected: Jd.selectedId === dd.loadoutOptionId,
          equipped: Wd.loadoutSlotEquippedId === dd.loadoutOptionId,
          locked: 0 === dd.loadoutOptionOwnedTier,
          ownedTier: dd.loadoutOptionOwnedTier,
          tiers: dd.loadoutOptionTiers.length,
          buttonRef: Nd("Tl", dd.loadoutOptionId),
          onSelect: () => {
            kd.select(dd.loadoutOptionId)
          }
        }, dd.loadoutOptionId)))
      })
    }

    function EJ(dd) {
      let {
        loadout: Jd
      } = dd;
      return (0, sd.jsx)(nd, {
        coins: Jd.loadoutCoins,
        children: Jd.loadoutHeldParts.filter((dd => dd.loadoutHeldPartAmount > 0)).map((dd => (0, sd.jsx)(bd, {
          itemName: dd.loadoutHeldPartItem,
          amount: dd.loadoutHeldPartAmount
        }, dd.loadoutHeldPartCurrency)))
      })
    }

    function cJ(dd) {
      let {
        controller: Jd
      } = dd;
      const kd = (0, Kd.i)(QJ, Jd.getSnapshot()),
        {
          t: pd
        } = (0, od.B)();
      if (null === kd.loadout) return null;
      const Nd = kd.notice;
      return (0, sd.jsx)(iJ, {
        view: kd,
        onDismiss: Jd.dismiss,
        children: (0, sd.jsxs)(Fd, {
          open: kd.open,
          onDismiss: Jd.dismiss,
          title: pd(`${ad}:loadoutTitle`),
          className: "ContainmentLoadoutPanel",
          headerExtra: (0, sd.jsx)(EJ, {
            loadout: kd.loadout
          }),
          statusRefused: null === Nd || void 0 === Nd ? void 0 : Nd.loadoutNoticeRefused,
          status: (0, sd.jsxs)(sd.Fragment, {
            children: [(0, sd.jsx)("span", {
              className: "LoadoutRadioBadge",
              children: pd(`${ad}:loadoutRadioBadge`)
            }), null !== Nd && pd(`${ad}:${Nd.loadoutNoticeKey}`, {
              name: Nd.loadoutNoticeName,
              tier: (0, dJ.V)(Nd.loadoutNoticeTier),
              max: String(kd.loadout.loadoutMaxPerks)
            })]
          }),
          children: [(0, sd.jsx)(UJ, {
            view: kd,
            controller: Jd
          }), (0, sd.jsx)(TJ, {
            view: kd,
            controller: Jd
          }), (0, sd.jsx)(fJ, {
            view: kd,
            controller: Jd
          })]
        })
      })
    }

    function hJ(dd, Jd, kd) {
      const pd = dd.locatorEntries.find((dd => dd.locatorEntryId === kd));
      if (!pd) return null;
      const Nd = pd.locatorEntryName;
      if ("locatorDisarm" === Jd) return pd.locatorEntryArmed ? {
        board: rJ(dd, null),
        notice: uJ("locatorNoticeDisarmed", Nd)
      } : null;
      if ("locatorArm" === Jd) return pd.locatorEntryOwned && !pd.locatorEntryArmed ? {
        board: rJ(dd, kd),
        notice: uJ("locatorNoticeArmed", Nd)
      } : null;
      if (pd.locatorEntryOwned || dd.locatorCoins < pd.locatorEntryPrice) return null;
      const Wd = rJ({
        ...dd,
        locatorCoins: dd.locatorCoins - pd.locatorEntryPrice
      }, kd);
      return {
        board: {
          ...Wd,
          locatorEntries: Wd.locatorEntries.map((dd => dd.locatorEntryId === kd ? {
            ...dd,
            locatorEntryOwned: !0
          } : dd))
        },
        notice: uJ("locatorNoticeBought", Nd)
      }
    }

    function rJ(dd, Jd) {
      return {
        ...dd,
        locatorEntries: dd.locatorEntries.map((dd => {
          const kd = dd.locatorEntryId === Jd;
          return dd.locatorEntryArmed === kd ? dd : {
            ...dd,
            locatorEntryArmed: kd
          }
        }))
      }
    }

    function uJ(dd, Jd) {
      return {
        locatorNoticeKey: dd,
        locatorNoticeRefused: !1,
        locatorNoticeName: Jd
      }
    }
    const tJ = "containmentLocatorView";
    class VJ extends JJ {
      constructor(dd, Jd, kd, pd) {
        super(dd, Jd, kd, pd, "locator", hJ), this.snapshot = this.buildSnapshot()
      }
      messageOpens(dd) {
        return dd.locatorMessageOpens
      }
      messageNotice(dd) {
        return dd.locatorNotice
      }
      openingSelection(dd) {
        var Jd;
        const kd = dd.locatorEntries;
        return (null !== (Jd = kd.find((dd => dd.locatorEntryArmed))) && void 0 !== Jd ? Jd : kd[0]).locatorEntryId
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
    const zJ = {
        locatorContained: `${ad}:locatorFlavourContained`,
        locatorEncountered: `${ad}:locatorFlavourEncountered`,
        locatorUnseen: `${ad}:locatorFlavourUnseen`
      },
      HJ = {
        codexAnyDifficulty: null,
        codexNormalOnly: `${ad}:locatorAttunedNormal`,
        codexHardOnly: `${ad}:locatorAttunedHard`
      };

    function wJ() {
      return (0, sd.jsx)(sd.Fragment, {
        children: Array.from({
          length: 5
        }, ((dd, Jd) => (0, sd.jsx)("span", {
          className: "LocatorFly",
          children: (0, sd.jsx)("img", {
            src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAICAYAAADwdn+XAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYElEQVR4nGNgoBboMlb5LyUjD8YgNtHyJ6/d+Q/CILa1lz9YAbo4DCDLYxjQv3gt3AYQG90AdHkUQ/qhkjAb0BURkgcDmAQMo7sSXR7deyiGoIvDvIOsGasB+ACyBmTNACS0go3ibhumAAAAAElFTkSuQmCC",
            alt: "",
            draggable: !1
          })
        }, Jd)))
      })
    }

    function AJ(dd) {
      let {
        entry: Jd
      } = dd;
      const {
        t: kd
      } = (0, od.B)();
      return Jd.locatorEntryArmed ? (0, sd.jsx)("span", {
        className: "BoardBadge Armed",
        children: kd(`${ad}:locatorArmedBadge`)
      }) : Jd.locatorEntryOwned ? (0, sd.jsx)("span", {
        className: "BoardBadge",
        children: kd(`${ad}:locatorOwnedBadge`)
      }) : null
    }

    function dk(dd) {
      let {
        entry: Jd,
        coins: kd,
        inTile: pd = !1
      } = dd;
      return (0, sd.jsx)(bd, {
        itemName: Md,
        amount: Jd.locatorEntryPrice,
        EC: kd,
        inTile: pd
      })
    }

    function Jk(dd) {
      let {
        view: Jd,
        controller: kd,
        entry: pd
      } = dd;
      const {
        t: Nd
      } = (0, od.B)(), Wd = pd.locatorEntryId, Pd = Jd.locators.locatorEntries.find((dd => dd.locatorEntryArmed && dd !== pd));
      return (0, sd.jsxs)("div", {
        className: "BoardActions",
        children: [pd.locatorEntryArmed && (0, sd.jsx)(Ld.G, {
          disabled: Jd.pending,
          onClick: () => {
            kd.act("locatorDisarm", Wd)
          },
          children: Nd(`${ad}:locatorDisarm`)
        }), pd.locatorEntryOwned && !pd.locatorEntryArmed && (0, sd.jsx)(Ld.d, {
          disabled: Jd.pending,
          onClick: () => {
            kd.act("locatorArm", Wd)
          },
          children: Nd(`${ad}:locatorArm`)
        }), !pd.locatorEntryOwned && (0, sd.jsxs)("div", {
          className: "LocatorBuy",
          children: [(0, sd.jsx)(dk, {
            entry: pd,
            coins: Jd.locators.locatorCoins
          }), (0, sd.jsx)(Ld.j, {
            disabled: Jd.locators.locatorCoins < pd.locatorEntryPrice || Jd.pending,
            onClick: () => {
              kd.act("locatorBuy", Wd)
            },
            children: Nd(`${ad}:locatorBuy`)
          })]
        }), Pd && !pd.locatorEntryArmed && (0, sd.jsx)("span", {
          className: "BoardHint",
          children: Nd(`${ad}:locatorReplacesHint`, {
            name: Pd.locatorEntryName
          })
        })]
      })
    }

    function kk(dd) {
      let {
        entry: Jd
      } = dd;
      return "locatorUnseen" === Jd.locatorEntryStanding ? (0, sd.jsx)(Yd, {
        itemName: "Compass"
      }) : (0, sd.jsx)(md, {
        anomalyId: Jd.locatorEntryId,
        caught: "locatorContained" === Jd.locatorEntryStanding
      })
    }

    function pk(dd) {
      let {
        view: Jd,
        controller: kd,
        entry: pd
      } = dd;
      const {
        t: Nd
      } = (0, od.B)(), Wd = HJ[pd.locatorEntryDifficulty];
      return (0, sd.jsxs)("section", {
        className: "BoardDetail",
        children: [(0, sd.jsxs)("div", {
          className: Cd()("LocatorLabel", {
            Armed: pd.locatorEntryArmed
          }),
          children: [(0, sd.jsx)(fd, {
            icon: (0, sd.jsx)(kk, {
              entry: pd
            }),
            name: Nd(`${ad}:locatorName`, {
              name: pd.locatorEntryName
            }),
            children: (0, sd.jsx)(AJ, {
              entry: pd
            })
          }), (0, sd.jsx)("p", {
            className: "BoardDescription",
            children: Nd(pd.locatorEntryArmed ? `${ad}:locatorFlavourArmed` : zJ[pd.locatorEntryStanding])
          }), null !== Wd && (0, sd.jsx)("p", {
            className: "LocatorAttuned",
            children: Nd(Wd)
          }), (0, sd.jsx)("p", {
            className: "BoardDescription LocatorUsage",
            children: Nd(`${ad}:locatorUsage`)
          })]
        }), (0, sd.jsx)(Jk, {
          view: Jd,
          controller: kd,
          entry: pd
        })]
      })
    }

    function Nk(dd) {
      let {
        controller: Jd
      } = dd;
      const kd = (0, Kd.i)(tJ, Jd.getSnapshot()),
        {
          t: pd
        } = (0, od.B)(),
        Nd = kd.locators;
      if (null === Nd) return null;
      const Wd = Nd.locatorEntries.find((dd => dd.locatorEntryId === kd.selectedId)),
        Pd = kd.notice;
      return (0, sd.jsxs)(Fd, {
        open: kd.open,
        onDismiss: Jd.dismiss,
        title: pd(`${ad}:locatorTitle`),
        className: "ContainmentLocatorPanel",
        decor: (0, sd.jsx)(wJ, {}),
        headerExtra: (0, sd.jsx)(nd, {
          coins: Nd.locatorCoins
        }),
        statusRefused: null === Pd || void 0 === Pd ? void 0 : Pd.locatorNoticeRefused,
        status: (0, sd.jsxs)(sd.Fragment, {
          children: [(0, sd.jsx)("span", {
            className: "LocatorKeeperBadge",
            children: pd(`${ad}:locatorKeeperName`)
          }), null !== Pd && pd(`${ad}:${Pd.locatorNoticeKey}`, {
            name: Pd.locatorNoticeName
          })]
        }),
        children: [(0, sd.jsx)("div", {
          className: "BoardTiles",
          children: Nd.locatorEntries.map((dd => (0, sd.jsxs)(Xd, {
            icon: (0, sd.jsx)(kk, {
              entry: dd
            }),
            name: dd.locatorEntryName,
            selected: dd === Wd,
            locked: !1,
            className: Cd()("LocatorTag", {
              Armed: dd.locatorEntryArmed
            }),
            onSelect: () => {
              Jd.select(dd.locatorEntryId)
            },
            children: [(0, sd.jsx)(AJ, {
              entry: dd
            }), !dd.locatorEntryOwned && (0, sd.jsx)(dk, {
              entry: dd,
              coins: Nd.locatorCoins,
              inTile: !0
            })]
          }, dd.locatorEntryId)))
        }), (0, sd.jsx)(pk, {
          view: kd,
          controller: Jd,
          entry: Wd
        })]
      })
    }

    function Wk(dd) {
      let {
        loadout: Jd,
        codex: kd,
        locator: pd
      } = dd;
      return (0, sd.jsxs)(sd.Fragment, {
        children: [(0, sd.jsx)(cJ, {
          controller: Jd
        }), (0, sd.jsx)(Ad, {
          controller: kd
        }), (0, sd.jsx)(Nk, {
          controller: pd
        })]
      })
    }
    var Pk = kd(38690);
    class Zk {
      constructor(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.sendCommand = dd, this.budget = void 0, this.awaitingReply = !1, this.replyTimer = null, this.listeners = new Set, this.budget = new Pk.b({
          spacingMs: 0,
          now: Jd
        }), this.budget.subscribe((() => {
          this.notify()
        }))
      }
      isPending() {
        return this.awaitingReply || this.budget.isPacing()
      }
      send(dd, Jd) {
        return !this.isPending() && (this.awaitingReply = !0, this.replyTimer = setTimeout((() => {
          this.replyTimer = null, this.awaitingReply = !1, Jd(), this.notify()
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
    var gk = kd(38683);
    const Ck = new Map([
      ["npc_general", eJ],
      ["npc_tentacle_guy", gk]
    ]);

    function Kk(dd) {
      const Jd = Ck.get(dd);
      if (void 0 === Jd) return null;
      const kd = document.createElement("img");
      return kd.src = Jd, kd.alt = "", kd.draggable = !1, kd.style.imageRendering = "pixelated", kd
    }
    const lk = function() {
      let dd, Jd = !1,
        kd = null,
        gd = null;
      const Cd = [],
        Kd = dd => {
          for (const Jd of Cd) Jd !== dd && Jd.close();
          (0, Zd.p)()
        },
        od = dd => {
          dd && (0, Zd.j)()
        },
        ld = new Zk((Jd => {
          dd.sendCommand(Jd)
        })),
        Qd = new LJ((dd => {
          Pd.j.nO(QJ, dd, !0)
        }), Kd, od, ld),
        Ld = new Dd((dd => {
          Pd.j.nO(yd, dd, !0)
        }), Kd, od),
        Od = new VJ((dd => {
          Pd.j.nO(tJ, dd, !0)
        }), Kd, od, ld);
      Cd.push(Qd, Ld, Od);
      return {
        onCreate: Jd => {
          dd = Jd, kd = (0, Zd.w)(null, {
            content: (0, pd.createElement)(Wk, {
              loadout: Qd,
              codex: Ld,
              locator: Od
            }),
            onClose: () => {
              for (const dd of Cd) dd.close()
            }
          }), gd = (0, Wd.h)(Kk)
        },
        onReceivedMessageFromServer: (dd, Jd) => {
          "containmentLoadout" === dd ? Qd.ZL(Jd) : "containmentLoadoutClose" === dd ? Qd.isOpen() && (Qd.close(), (0, Zd.g)()) : "containmentCodex" === dd ? Ld.ZL(Jd) : "containmentLocator" === dd && Od.ZL(Jd)
        },
        Do: () => {
          Jd || Nd.d.get("loadingOverlayVisible") || (Jd = !0, dd.sendCommand("containmentEntered"))
        },
        onClose: () => {
          var dd, Jd;
          null === (dd = kd) || void 0 === dd || dd(), kd = null, null === (Jd = gd) || void 0 === Jd || Jd(), gd = null;
          for (const kd of Cd) kd.dispose();
          ld.dispose()
        }
      }
    }
  },
  37068: (dd, Jd, kd) => {
    kd.d(Jd, {
      A: () => nd,
      D: () => Ud,
      H: () => Xd,
      I: () => yd,
      d: () => gd,
      h: () => Yd,
      i: () => Zd,
      m: () => jd,
      p: () => Md,
      s: () => qd,
      u: () => Sd,
      w: () => bd,
      x: () => ad,
      y: () => fd
    });
    var pd = kd(33);
    const Nd = {
        codeBlock: ["codeBlockIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "worldCodeButton", "exportButton", "helpButton"],
        worldCode: ["worldCodeIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "exportButton", "helpButton"]
      },
      Wd = ["docsButton", "docsPanel", "docsClientOptionsTab", "docsClientOptions", "docsApiReferenceTab", "docsApiReference", "docsCallbacksTab", "docsCallbacks", "hideDocsButton"],
      Pd = ["aiHelperButton", "aiPanel", "aiAskBox", "aiModelChip", "aiAnswer", "aiEdits", "aiGear", "aiNotes", "aiGameSettings", "hideAiHelperButton"],
      Zd = Wd.filter((dd => "docsButton" !== dd)),
      gd = Pd.filter((dd => "aiHelperButton" !== dd)),
      Cd = "codeEditorTutorials",
      Kd = {
        codeBlockIntro: "codeBlockIntroShown",
        worldCodeIntro: "worldCodeIntroShown"
      },
      od = {
        welcome: "welcomeComplete",
        docsOverview: "docsOverviewComplete",
        aiHelperOverview: "aiHelperOverviewComplete"
      };
    let ld = null,
      Qd = null;
    const Ld = new Set,
      Od = new Set;
    let ed = null;
    const Rd = new Set,
      Id = new Set;

    function Gd() {
      Id.forEach((dd => {
        dd()
      }))
    }

    function vd() {
      if (!ld) {
        const dd = pd.i.getItem(Cd);
        ld = {
          codeBlockIntroShown: !1,
          worldCodeIntroShown: !1,
          welcomeComplete: !1,
          docsOverviewComplete: !1,
          aiHelperOverviewComplete: !1,
          ..."object" === typeof dd && null !== dd ? dd : {}
        }
      }
      return ld
    }

    function xd(dd) {
      const Jd = vd();
      Jd[dd] || (ld = {
        ...Jd,
        [dd]: !0
      }, pd.i.setItem(Cd, ld))
    }

    function qd(dd) {
      return "docsOverview" === dd ? Wd : "aiHelperOverview" === dd ? Pd : Qd ? Nd[Qd] : []
    }

    function Bd(dd) {
      return ("worldCodeButton" !== dd || !vd().worldCodeIntroShown) && !Rd.has(dd)
    }

    function sd(dd) {
      var Jd;
      return (null === (Jd = ed) || void 0 === Jd ? void 0 : Jd.name) === dd ? ed.stepsDone : Ld
    }

    function ad(dd, Jd) {
      if (! function(dd) {
          return ed ? ed.name === dd : "welcome" === dd
        }(dd) || !Bd(Jd) || sd(dd).has(Jd)) return !1;
      if (ed) return !0;
      const kd = Kd[Jd];
      return kd ? !vd()[kd] || Od.has(Jd) : !vd()[od[dd]]
    }

    function Md(dd) {
      var Jd;
      return null !== (Jd = qd(dd).find((Jd => ad(dd, Jd)))) && void 0 !== Jd ? Jd : null
    }

    function Fd(dd) {
      var Jd;
      xd(od[dd]), (null === (Jd = ed) || void 0 === Jd ? void 0 : Jd.name) === dd && (ed = null)
    }

    function Yd(dd) {
      const Jd = (ed ? [ed.name] : ["welcome", "docsOverview"]).find((Jd => Md(Jd) === dd));
      if (!Jd) return;
      sd(Jd).add(dd);
      const kd = Kd[dd];
      kd && (xd(kd), ed || Od.add(dd)), null === Md(Jd) && Fd(Jd), Gd()
    }

    function md(dd, Jd) {
      const kd = qd(dd),
        pd = sd(dd);
      for (let Nd = kd.indexOf(Jd) - 1; Nd >= 0; Nd--)
        if (pd.has(kd[Nd]) && Bd(kd[Nd])) return kd[Nd];
      return null
    }

    function bd(dd, Jd) {
      return null !== md(dd, Jd)
    }

    function Sd(dd, Jd) {
      const kd = md(dd, Jd);
      kd && (sd(dd).delete(kd), Gd())
    }

    function jd(dd) {
      Fd(dd), "welcome" === dd && qd("welcome").forEach((dd => {
        const Jd = Kd[dd];
        Jd && xd(Jd)
      })), Gd()
    }

    function Xd(dd) {
      ed = {
        name: dd,
        stepsDone: new Set
      }, Gd()
    }

    function fd() {
      (ed || 0 !== Ld.size || 0 !== Od.size) && (ed = null, Ld.clear(), Od.clear(), Gd())
    }

    function nd(dd, Jd) {
      const kd = Jd ? dd : Qd === dd ? null : Qd;
      kd !== Qd && (Qd = kd, Gd())
    }

    function Ud(dd, Jd) {
      Rd.has(dd) === Jd && (Jd ? Rd.delete(dd) : Rd.add(dd), Gd())
    }

    function yd(dd) {
      return Id.add(dd), () => {
        Id.delete(dd)
      }
    }
  },
  39422: (dd, Jd, kd) => {
    var pd = {
      "./breach-zero-uncaught.webp": 39425,
      "./breach-zero.webp": 39429,
      "./brood-father-uncaught.webp": 39431,
      "./brood-father.webp": 39438,
      "./carousel-uncaught.webp": 39445,
      "./carousel.webp": 39448,
      "./deadlock-uncaught.webp": 39453,
      "./deadlock.webp": 39458,
      "./frost-revenant-uncaught.webp": 39460,
      "./frost-revenant.webp": 39466,
      "./hollow-choir-uncaught.webp": 39470,
      "./hollow-choir.webp": 39478,
      "./magma-warden-uncaught.webp": 39486,
      "./magma-warden.webp": 39488,
      "./patient-zero-uncaught.webp": 39493,
      "./patient-zero.webp": 39502,
      "./siege-engine-uncaught.webp": 39509,
      "./siege-engine.webp": 39511,
      "./warp-stalker-uncaught.webp": 39516,
      "./warp-stalker.webp": 39521
    };

    function Nd(dd) {
      var Jd = Wd(dd);
      return kd(Jd)
    }

    function Wd(dd) {
      if (!kd.o(pd, dd)) {
        var Jd = new Error("Cannot find module '" + dd + "'");
        throw Jd.code = "MODULE_NOT_FOUND", Jd
      }
      return pd[dd]
    }
    Nd.keys = function() {
      return Object.keys(pd)
    }, Nd.resolve = Wd, dd.exports = Nd, Nd.id = 39422
  },
  39425: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/breach-zero-uncaught.c7d4410f99269ac1ee2f.webp"
  },
  39429: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/breach-zero.ef5aacecf502228cd20b.webp"
  },
  39431: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/brood-father-uncaught.ee678432c71b7061fae1.webp"
  },
  39438: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/brood-father.e48391955a574c1155fa.webp"
  },
  39445: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/carousel-uncaught.a92757620f569f31d7d2.webp"
  },
  39448: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/carousel.5fc13db7958067d6e1a3.webp"
  },
  39453: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/deadlock-uncaught.feadbdbbf2d040dce5c0.webp"
  },
  39458: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/deadlock.2bcaeaa57376fd78ddcb.webp"
  },
  39460: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/frost-revenant-uncaught.c0271636eeae988b1a40.webp"
  },
  39466: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/frost-revenant.fed6021646d7f0f81876.webp"
  },
  39470: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/hollow-choir-uncaught.7eaab76a15f82bd79558.webp"
  },
  39478: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/hollow-choir.05f9c51994aecece852a.webp"
  },
  39486: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/magma-warden-uncaught.5308736fbb8a503cdfc7.webp"
  },
  39488: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/magma-warden.cc4302a49a39ae962a31.webp"
  },
  39493: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/patient-zero-uncaught.1f9ec012a14c4dbdcc8f.webp"
  },
  39502: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/patient-zero.cc76984bb20e9f9ace76.webp"
  },
  39509: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/siege-engine-uncaught.88e0ad7fec37ba2b4a2e.webp"
  },
  39511: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/siege-engine.b2e2382e415f4ae470ac.webp"
  },
  39516: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/warp-stalker-uncaught.c3b1b82ecb18446b71b0.webp"
  },
  39521: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/warp-stalker.851972c629601b668aa7.webp"
  },
  38683: dd => {
    dd.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYElEQVR4nGNgIBIwovH/45JnRFaUGN+Comr+whq4GiZ0RVycnGAMAlAxsC0sMN2fvn9DodEBzEQGdUV5hvNnV4JpGJuPkwtTIQh4umZhZWMonDqjGCsbHcCCBkQjs0kDAPeaHpfX1eroAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);