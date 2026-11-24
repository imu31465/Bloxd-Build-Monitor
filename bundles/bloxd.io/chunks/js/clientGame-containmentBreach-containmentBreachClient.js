export const id = 14;
export const ids = [14];
export const modules = {
  36986: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => cm,
      d: () => nm,
      e: () => Jm,
      i: () => Om
    });
    var hm = fm(1080),
      Am = fm.n(hm),
      am = fm(59),
      xm = fm(77),
      wm = fm(1371),
      Dm = fm(1454),
      im = fm(1362),
      Rm = fm(1281),
      pm = fm(1208),
      Em = fm(36992),
      om = fm(1135);

    function Om(mm) {
      const [Tm, fm] = (0, am.useState)((() => (0, Em.m)(mm)));
      return (0, am.useEffect)((() => (fm((0, Em.m)(mm)), (0, Em.F)((() => {
        fm((0, Em.m)(mm))
      })))), [mm]), Tm
    }

    function Ym(mm, Tm) {
      "function" === typeof mm ? mm(Tm) : mm && (mm.current = Tm)
    }

    function qm(mm) {
      let {
        tutorial: Tm,
        step: fm,
        enabled: hm = !0
      } = mm;
      const Am = Om(Tm);
      return hm && Am === fm
    }

    function jm(mm, Tm) {
      const fm = (0, Em.n)(mm),
        hm = fm.indexOf(Tm);
      return !fm.slice(hm + 1).some((Tm => (0, Em.u)(mm, Tm)))
    }

    function Vm(mm, Tm, fm, hm) {
      let {
        tutorial: Am,
        step: am,
        waitForClick: xm = !1,
        onPrevious: wm
      } = mm;
      const Dm = Tm && (0, Em.r)(Am, am),
        im = Tm && !jm(Am, am),
        pm = xm ? hm : fm;
      let om = null;
      Dm ? om = () => {
        null === wm || void 0 === wm || wm(), (0, Em.p)(Am, am)
      } : im && (om = () => {
        (0, Em.i)(Am)
      }), (0, Rm.s)("popup", null !== pm && void 0 !== pm ? pm : fm, om, Tm && null !== pm, null, Dm ? void 0 : "controller:menusSkipTutorial")
    }

    function Im(mm) {
      let {
        tutorial: Tm,
        step: fm,
        text: hm,
        waitForClick: Am = !1,
        onPrevious: am
      } = mm;
      const {
        t: xm
      } = (0, pm.A)(), wm = jm(Tm, fm);
      return (0, om.jsxs)(om.Fragment, {
        children: [(0, om.jsx)("div", {
          className: "TutorialStepText",
          children: hm
        }), (0, om.jsxs)("div", {
          className: "TutorialStepButtons",
          children: [(0, Em.r)(Tm, fm) && (0, om.jsx)(Dm.g, {
            className: "TutorialStepButton",
            onClick: () => {
              null === am || void 0 === am || am(), (0, Em.p)(Tm, fm)
            },
            children: xm("tutorial:back")
          }), !Am && (0, om.jsx)(Dm.e, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, Em.d)(fm)
            },
            padDefaultFocus: !0,
            children: xm(wm ? "tutorial:done" : "tutorial:next")
          }), !wm && (0, om.jsx)(Dm.g, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, Em.i)(Tm)
            },
            children: xm("tutorial:skip")
          })]
        })]
      })
    }
    const Km = 6;

    function Qm(mm) {
      let {
        rect: Tm,
        margin: fm
      } = mm;
      const hm = Math.max(0, Tm.top - fm),
        Am = Tm.bottom + fm,
        am = Math.max(0, Tm.left - fm),
        xm = Tm.right + fm;
      return (0, om.jsxs)(om.Fragment, {
        children: [(0, om.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: 0,
            left: 0,
            right: 0,
            height: hm
          }
        }), (0, om.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: Am,
            left: 0,
            right: 0,
            bottom: 0
          }
        }), (0, om.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: hm,
            left: 0,
            width: am,
            height: Am - hm
          }
        }), (0, om.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: hm,
            left: xm,
            right: 0,
            height: Am - hm
          }
        })]
      })
    }

    function nm(mm) {
      let {
        target: Tm,
        placement: fm,
        boxRef: hm,
        className: Dm,
        spotlightMargin: Rm = Km,
        children: pm
      } = mm;
      const {
        getArrowProps: Em,
        getTooltipProps: Om,
        setTooltipRef: Ym,
        setTriggerRef: qm
      } = (0, wm.b)({
        placement: fm,
        trigger: null,
        visible: !0,
        interactive: !0,
        closeOnOutsideClick: !1,
        offset: [0, Rm]
      });
      (0, am.useLayoutEffect)((() => {
        qm(Tm)
      }), [Tm, qm]);
      const jm = function(mm, Tm) {
        const [fm, hm] = (0, am.useState)(null);
        return (0, am.useEffect)((() => {
          if (!Tm || !mm) return void hm(null);
          let fm = 0,
            Am = null;
          const am = () => {
            const Tm = mm.getBoundingClientRect();
            Am && Tm.left === Am.left && Tm.top === Am.top && Tm.width === Am.width && Tm.height === Am.height || (Am = Tm, hm(Tm)), fm = requestAnimationFrame(am)
          };
          return am(), () => {
            cancelAnimationFrame(fm)
          }
        }), [mm, Tm]), fm
      }(Tm, !0);
      (0, am.useEffect)((() => {
        null === Tm || void 0 === Tm || Tm.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        })
      }), [Tm]);
      const Vm = (0, am.useCallback)((mm => {
        Ym(mm), hm && (hm.current = mm)
      }), [Ym, hm]);
      return (0, xm.createPortal)((0, om.jsxs)(om.Fragment, {
        children: [jm && (0, om.jsx)(Qm, {
          rect: jm,
          margin: Rm
        }), (0, om.jsxs)("div", {
          ref: Vm,
          ...Om({
            className: Am()("tooltip-container SmallTextLight TutorialStep", Dm)
          }),
          children: [pm, (0, om.jsx)("div", {
            ...Em({
              className: "tooltip-arrow"
            })
          })]
        })]
      }), (0, im.l)())
    }
    const Jm = (0, am.forwardRef)((function(mm, Tm) {
      let {
        placement: fm = "right",
        children: hm,
        ...Am
      } = mm;
      const xm = qm(Am),
        wm = (0, am.useRef)(null),
        Dm = (0, am.useRef)(null);
      Vm(Am, xm, wm, Dm);
      const [im, Rm] = (0, am.useState)(null), pm = hm.ref, Em = (0, am.useCallback)((mm => {
        Dm.current = mm, Rm(mm), Ym(Tm, mm), Ym(pm, mm)
      }), [Tm, pm]);
      return (0, om.jsxs)(om.Fragment, {
        children: [(0, am.cloneElement)(hm, {
          ref: Em
        }), xm && (0, om.jsx)(nm, {
          target: im,
          placement: fm,
          boxRef: wm,
          children: (0, om.jsx)(Im, {
            ...Am
          })
        })]
      })
    }));

    function cm(mm) {
      const Tm = qm(mm),
        fm = (0, am.useRef)(null);
      return Vm(mm, Tm, fm, null), Tm ? (0, xm.createPortal)((0, om.jsx)("div", {
        className: "TutorialCentreBackdrop",
        children: (0, om.jsx)("div", {
          ref: fm,
          className: "tooltip-container SmallTextLight TutorialStep TutorialCentreStep",
          children: (0, om.jsx)(Im, {
            ...mm
          })
        })
      }), (0, im.l)()) : null
    }
  },
  38637: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => xm
    });
    const hm = 4,
      Am = 12e3,
      am = 1e3;
    class xm {
      constructor() {
        let {
          limit: mm = hm,
          windowMs: Tm = Am,
          spacingMs: fm = am,
          now: xm = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = mm, this.windowMs = Tm, this.spacingMs = fm, this.now = xm
      }
      isPacing() {
        return !this.canSendPriority() || this.isPriorityWaiting()
      }
      canSendPriority() {
        return this.prune(), this.sent.length < this.limit && this.now() - this.lastSentAt >= this.spacingMs
      }
      tryStart() {
        for (const mm of this.priority) mm.flush();
        return !this.isPacing() && (this.start(), !0)
      }
      start() {
        this.prune();
        const mm = this.now();
        this.sent.push(mm), this.lastSentAt = mm, this.schedule(), this.notify()
      }
      addPriority(mm) {
        return this.priority.add(mm), () => {
          this.priority.delete(mm)
        }
      }
      subscribe(mm) {
        return this.listeners.add(mm), () => {
          this.listeners.delete(mm)
        }
      }
      dispose() {
        this.clearTimer(), this.sent = [], this.listeners.clear(), this.priority.clear()
      }
      isPriorityWaiting() {
        for (const mm of this.priority)
          if (mm.waiting()) return !0;
        return !1
      }
      prune() {
        const mm = this.now() - this.windowMs;
        for (; this.sent.length > 0 && this.sent[0] <= mm;) this.sent.shift()
      }
      schedule() {
        this.clearTimer();
        const mm = this.now(),
          Tm = this.lastSentAt + this.spacingMs,
          fm = Math.min(Tm > mm ? Tm : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        fm !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, fm - mm)))
      }
      notify() {
        for (const mm of this.listeners) mm()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  36689: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => am,
      d: () => Ym,
      e: () => qm,
      h: () => wm,
      i: () => Em,
      m: () => jm,
      p: () => pm,
      r: () => Im,
      u: () => Om,
      v: () => Vm
    });
    var hm = fm(23),
      Am = fm(31);
    const am = "clientGameInventoryButtonsChanged",
      xm = new Map;

    function wm() {
      return [...xm.values()].sort(((mm, Tm) => {
        var fm, hm;
        return (null !== (fm = mm.order) && void 0 !== fm ? fm : 0) - (null !== (hm = Tm.order) && void 0 !== hm ? hm : 0)
      }))
    }
    let Dm = null;

    function im(mm) {
      Dm = mm
    }
    let Rm = !1;

    function pm(mm) {
      Rm = !0;
      try {
        mm.onClick()
      } finally {
        Rm = !1
      }
      mm.panel && "clientGame" === hm.c.get("openInGameMenuName") && im(mm.id)
    }

    function Em() {
      return Rm
    }

    function om() {
      return wm().filter((mm => mm.panel && !mm.disabled))
    }

    function Om(mm) {
      const Tm = om(),
        fm = Tm.findIndex((mm => mm.id === Dm));
      return !(fm < 0 || Tm.length < 2) && (pm(Tm[(fm + mm + Tm.length) % Tm.length]), !0)
    }

    function Ym() {
      return null !== Dm && om().length > 1
    }

    function qm() {
      im(null)
    }

    function jm() {
      "inventory" !== hm.c.get("openInGameMenuName") && im(null)
    }

    function Vm() {
      const mm = Dm;
      return im(null), mm
    }

    function Im(mm) {
      return xm.set(mm.id, mm), Am.j.gp(am, wm(), !0), () => {
        xm.get(mm.id) === mm && (xm.delete(mm.id), Am.j.gp(am, wm()))
      }
    }
  },
  38621: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => hm
    });
    class hm {
      constructor(mm, Tm, fm) {
        this.gp = mm, this.beforeOpen = Tm, this.afterClose = fm, this.open = !1, this.PO = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.PO && (this.open = !0, this.beforeOpen(this), this.emit())
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
      closePanel(mm) {
        this.open = !1, this.onClosed(), this.emit(), this.afterClose(mm)
      }
      onClosed() {}
      dispose() {
        this.open = !1, this.emit(), this.PO = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.PO || (this.snapshot = this.buildSnapshot(), this.gp(this.snapshot))
      }
    }
  },
  36686: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => wm,
      h: () => qm,
      j: () => jm,
      m: () => Em,
      p: () => im,
      s: () => Ym,
      u: () => om,
      w: () => Rm
    });
    var hm = fm(23),
      Am = fm(31),
      am = fm(1286),
      xm = fm(36689);
    const wm = "clientGameUiChanged";
    let Dm = null;

    function im() {
      return Dm
    }

    function Rm(mm, Tm) {
      const fm = {
        content: mm,
        menu: Tm
      };
      return Dm = fm, Am.j.gp(wm, Dm, !0), () => {
        Dm === fm && (Dm = null, Om = !1, qm(), Am.j.gp(wm, null))
      }
    }
    let pm = null;

    function Em() {
      return pm
    }

    function om(mm) {
      return pm = mm, () => {
        pm === mm && (pm = null)
      }
    }
    let Om = !1;

    function Ym() {
      const mm = hm.c.get("openInGameMenuName");
      "clientGame" !== mm && (Om = "inventory" === mm), (0, xm.i)() || (0, xm.e)(), (0, am.p)(am.c), hm.c.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function qm() {
      Vm(!1)
    }

    function jm() {
      Vm(Om)
    }

    function Vm(mm) {
      "clientGame" === hm.c.get("openInGameMenuName") && hm.c.set({
        openInGameMenuName: mm ? "inventory" : null
      }), mm || (0, xm.e)(), Om = !1
    }
  },
  39420: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      default: () => Ef
    });
    var hm = fm(59);
    var Am = fm(23),
      am = fm(1889),
      xm = fm(31),
      wm = fm(36686),
      Dm = fm(1080),
      im = fm.n(Dm),
      Rm = fm(1449),
      pm = fm(1208),
      Em = fm(4471),
      om = fm(1351),
      Om = fm(1454),
      Ym = fm(1893),
      qm = fm(1362),
      jm = fm(1884),
      Vm = fm(1946),
      Im = fm(208);
    const Km = fm(39428),
      Qm = Object.fromEntries(Km.keys().map((mm => [mm.replace(/^\.\/(.*)\.webp$/, "$1"), Km(mm)]))),
      nm = new Set;

    function Jm(mm, Tm) {
      const fm = Tm ? mm : `${mm}-uncaught`,
        hm = (0, Im.c)(Qm, fm);
      return void 0 !== hm || nm.has(fm) || (nm.add(fm), console.warn(`Containment Breach has no mugshot ${fm}: run tools/harnessCutouts/ContainmentMugshotCapture.ts`)), hm
    }
    var cm = fm(1135);
    const zm = "containmentBreach",
      Zm = "Gold Coin";

    function km(mm) {
      let {
        open: Tm,
        onDismiss: fm,
        title: hm,
        className: Am,
        decor: am,
        headerExtra: xm,
        status: wm,
        statusRefused: Dm = !1,
        children: Rm
      } = mm;
      const pm = `${Am}Title`;
      return (0, cm.jsx)(Em.d, {
        show: Tm,
        close: fm,
        togglePointerLock: !1,
        className: "ContainmentBoardOverlay",
        children: (0, cm.jsxs)("section", {
          className: im()("ContainmentBoardPanel", Am),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": pm,
          children: [am && (0, cm.jsx)("div", {
            className: "BoardDecor",
            "aria-hidden": "true",
            children: am
          }), (0, cm.jsxs)("header", {
            className: "BoardHeader",
            children: [(0, cm.jsx)("h2", {
              id: pm,
              className: "VisuallyHidden",
              children: hm
            }), xm, (0, cm.jsx)(Om.j, {
              onClick: fm
            })]
          }), (0, cm.jsx)("div", {
            className: "BoardBody",
            children: Rm
          }), void 0 !== wm && (0, cm.jsx)("footer", {
            className: im()("BoardStatus", {
              Refused: Dm
            }),
            children: wm
          })]
        })
      })
    }

    function bm(mm) {
      let {
        itemName: Tm
      } = mm;
      return (0, cm.jsx)(Ym.d, {
        itemName: Tm,
        amount: 0
      })
    }

    function Sm(mm) {
      let {
        anomalyId: Tm,
        caught: fm
      } = mm;
      const Am = (0, hm.useRef)(null);
      return (0, om.c)(Am, !fm), (0, cm.jsx)("span", {
        ref: Am,
        className: im()("BoardMugshot", {
          Uncaught: !fm
        }),
        children: (0, cm.jsx)("img", {
          src: Jm(Tm, fm),
          alt: "",
          draggable: !1
        })
      })
    }

    function em(mm) {
      let {
        itemName: Tm,
        amount: fm,
        ni: hm,
        inTile: Am = !1
      } = mm;
      return (0, cm.jsx)(qm.h, {
        delayShow: 200,
        hoverOnly: Am,
        placement: "top",
        tooltipClassName: "BoardChipTooltipBox",
        tooltipInner: (0, cm.jsx)(Gm, {
          itemName: Tm,
          amount: fm,
          ni: hm
        }),
        children: (0, cm.jsxs)("span", {
          className: im()("BoardChip", {
            Short: void 0 !== hm && hm < fm
          }),
          children: [(0, cm.jsx)("span", {
            className: "BoardChipIcon",
            children: (0, cm.jsx)(bm, {
              itemName: Tm
            })
          }), fm.toLocaleString()]
        })
      })
    }
    const Nm = /^(.*?)\s*Salvaged from (?:an? )?(.+?)\.?$/;

    function Gm(mm) {
      var Tm;
      let {
        itemName: fm,
        amount: hm,
        ni: Am
      } = mm;
      const {
        t: am
      } = (0, pm.A)(), xm = (0, Vm.g)("itemInfo", (mm => mm[fm])), {
        lore: wm,
        droppedBy: Dm
      } = function(mm) {
        if ("string" !== typeof mm) return {
          lore: mm,
          droppedBy: null
        };
        const Tm = Nm.exec(mm);
        return null === Tm ? {
          lore: mm,
          droppedBy: null
        } : {
          lore: "" === Tm[1] ? void 0 : Tm[1],
          droppedBy: Tm[2]
        }
      }(null === xm || void 0 === xm ? void 0 : xm.description);
      return (0, cm.jsxs)("div", {
        className: "BoardChipTooltip",
        children: [(0, cm.jsxs)("div", {
          className: "BoardChipTooltipHeader",
          children: [(0, cm.jsx)("span", {
            className: "BoardChipTooltipIcon",
            children: (0, cm.jsx)(bm, {
              itemName: fm
            })
          }), (0, cm.jsx)(jm.b, {
            text: null !== (Tm = null === xm || void 0 === xm ? void 0 : xm.displayName) && void 0 !== Tm ? Tm : fm,
            className: "BoardChipTooltipName"
          })]
        }), (void 0 !== wm || null !== Dm) && (0, cm.jsxs)("div", {
          className: "BoardChipTooltipBody",
          children: [void 0 !== wm && (0, cm.jsx)(jm.b, {
            text: wm,
            className: "BoardChipTooltipDescription"
          }), null !== Dm && (0, cm.jsxs)("span", {
            className: "BoardChipTooltipSource",
            children: [(0, cm.jsx)("span", {
              className: "BoardChipTooltipLabel",
              children: am(`${zm}:chipDroppedBy`)
            }), Dm]
          })]
        }), void 0 !== Am && (0, cm.jsxs)("div", {
          className: im()("BoardChipTooltipHeld", {
            Short: Am < hm
          }),
          children: [(0, cm.jsx)("span", {
            className: "BoardChipTooltipLabel",
            children: am(`${zm}:chipYouHave`)
          }), (0, cm.jsxs)("span", {
            className: "BoardChipTooltipCount",
            children: [(0, cm.jsx)("span", {
              className: "BoardChipTooltipHeldAmount",
              children: Am.toLocaleString()
            }), ` / ${hm.toLocaleString()}`]
          }), (0, cm.jsx)("span", {
            className: "BoardChipTooltipMeter",
            children: (0, cm.jsx)("span", {
              style: {
                width: (hm > 0 ? 100 * Math.min(1, Am / hm) : 100) + "%"
              }
            })
          })]
        })]
      })
    }

    function Xm(mm) {
      let {
        icon: Tm,
        name: fm,
        selected: hm,
        locked: Am,
        className: am,
        buttonRef: xm,
        onSelect: wm,
        children: Dm
      } = mm;
      return (0, cm.jsxs)("button", {
        ref: xm,
        type: "button",
        className: im()("BoardTile", am, {
          Selected: hm,
          Locked: Am
        }),
        onClick: wm,
        children: [(0, cm.jsx)("span", {
          className: "BoardTileIcon",
          children: Tm
        }), (0, cm.jsx)("span", {
          className: "BoardTileName",
          children: fm
        }), Dm]
      })
    }

    function Pm(mm) {
      let {
        icon: Tm,
        name: fm,
        children: hm
      } = mm;
      return (0, cm.jsxs)("header", {
        className: "BoardDetailHeader",
        children: [(0, cm.jsx)("span", {
          className: "BoardDetailIcon",
          children: Tm
        }), (0, cm.jsxs)("div", {
          className: "BoardDetailHeading",
          children: [(0, cm.jsx)("h3", {
            children: fm
          }), (0, cm.jsx)("span", {
            className: "BoardDetailStatus",
            children: hm
          })]
        })]
      })
    }

    function Hm(mm) {
      let {
        coins: Tm,
        children: fm
      } = mm;
      return (0, cm.jsxs)("div", {
        className: "BoardWallet",
        children: [(0, cm.jsx)(em, {
          itemName: Zm,
          amount: Tm
        }), fm]
      })
    }
    var ym = fm(38621);
    const Cm = "containmentCodexView";
    class rm extends ym.e {
      constructor() {
        super(...arguments), this.entries = [], this.selectedId = "", this.snapshot = this.buildSnapshot(), this.select = mm => {
          this.selectedId = mm, this.emit()
        }
      }
      rO(mm) {
        this.entries = mm.codexEntries, this.selectedId = this.entries[0].codexEntryId, this.showOrRefresh()
      }
      buildSnapshot() {
        return {
          open: this.open,
          entries: this.entries,
          selectedId: this.selectedId
        }
      }
    }
    const sm = {
        codexAnyDifficulty: `${zm}:codexNeedsAny`,
        codexNormalOnly: `${zm}:codexNeedsNormal`,
        codexHardOnly: `${zm}:codexNeedsHard`
      },
      lm = {
        codexContained: "Contained",
        codexEncountered: "Sighted",
        codexUnidentified: "Unknown"
      },
      Mm = {
        codexContained: `${zm}:codexContainedBadge`,
        codexEncountered: `${zm}:codexEncounteredBadge`,
        codexUnidentified: `${zm}:codexUnidentifiedBadge`
      },
      um = ["94%", "81%", "88%", "46%", "72%"];

    function Bm(mm) {
      let {
        entry: Tm
      } = mm;
      const {
        t: fm
      } = (0, pm.A)();
      return (0, cm.jsx)("span", {
        className: im()("BoardBadge", lm[Tm.codexEntryState]),
        children: fm(Mm[Tm.codexEntryState])
      })
    }

    function Lm(mm) {
      const {
        t: Tm
      } = (0, pm.A)();
      return "codexUnidentified" === mm.codexEntryState ? Tm(`${zm}:codexUnidentifiedName`) : mm.codexEntryName
    }

    function tm(mm) {
      let {
        entry: Tm
      } = mm;
      return "codexUnidentified" === Tm.codexEntryState ? (0, cm.jsx)(bm, {
        itemName: "Book"
      }) : (0, cm.jsxs)("span", {
        className: "CodexPhoto",
        children: [(0, cm.jsx)(Sm, {
          anomalyId: Tm.codexEntryId,
          caught: "codexContained" === Tm.codexEntryState
        }), (0, cm.jsx)("img", {
          className: "CodexPaperclip",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAMCAYAAACulacQAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGNggIIXb97/X7V57/+Wvtn/GZDBqs17UQTgClahScBATHrlf5ySeHWimo9NMbokCp9OkmD/oasGCaJLAAC5ZUIBS85GiAAAAABJRU5ErkJggg==",
          alt: "",
          draggable: !1
        })]
      })
    }

    function Um(mm) {
      let {
        entry: Tm,
        selected: fm,
        onSelect: hm
      } = mm;
      const Am = "codexUnidentified" === Tm.codexEntryState;
      return (0, cm.jsxs)(Xm, {
        icon: (0, cm.jsx)(tm, {
          entry: Tm
        }),
        name: Lm(Tm),
        selected: fm,
        locked: Am,
        className: im()("CodexFolder", lm[Tm.codexEntryState]),
        onSelect: () => {
          hm(Tm.codexEntryId)
        },
        children: [!Am && (0, cm.jsx)(Bm, {
          entry: Tm
        }), Am && (0, cm.jsx)("img", {
          className: "CodexSeal",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAARElEQVR4nGNggIIGHp7/MAzjw+TAnMf+/mB8RkQEjOGKYZLIgsiK4AqQJZA1gBXAOHgVwCRQJJEdCVOEYj8yQPciTAEAz0hgyamUqskAAAAASUVORK5CYII=",
          alt: "",
          draggable: !1
        })]
      })
    }

    function dm(mm) {
      let {
        count: Tm
      } = mm;
      const fm = [];
      for (let hm = Math.min(Tm, 25); hm > 0; hm -= 5) fm.push(Math.min(hm, 5));
      return (0, cm.jsx)("span", {
        className: "CodexTallyMarks",
        "aria-hidden": "true",
        children: fm.map(((mm, Tm) => (0, cm.jsx)("span", {
          className: im()("CodexTallyGroup", {
            Gate: 5 === mm
          }),
          children: Array.from({
            length: Math.min(mm, 4)
          }, ((mm, Tm) => (0, cm.jsx)("span", {
            className: "CodexTallyMark"
          }, Tm)))
        }, Tm)))
      })
    }

    function gm(mm) {
      let {
        contained: Tm,
        total: fm
      } = mm;
      const {
        t: hm
      } = (0, pm.A)();
      return (0, cm.jsxs)("div", {
        className: "CodexProgress",
        children: [hm(`${zm}:codexProgress`, {
          contained: String(Tm),
          total: String(fm)
        }), (0, cm.jsx)("span", {
          className: "CodexProgressMeter",
          children: (0, cm.jsx)("span", {
            style: {
              width: Tm / fm * 100 + "%"
            }
          })
        })]
      })
    }

    function Wm(mm) {
      let {
        entry: Tm,
        fileNumber: fm
      } = mm;
      const {
        t: hm
      } = (0, pm.A)(), Am = "codexContained" === Tm.codexEntryState;
      return (0, cm.jsx)("section", {
        className: "BoardDetail",
        children: (0, cm.jsxs)("article", {
          className: im()("CodexDossier", lm[Tm.codexEntryState]),
          children: [(0, cm.jsx)("span", {
            className: "CodexFileNumber",
            children: hm(`${zm}:codexFileNumber`, {
              number: String(fm).padStart(3, "0")
            })
          }), (0, cm.jsx)(Pm, {
            icon: (0, cm.jsx)(tm, {
              entry: Tm
            }),
            name: Lm(Tm),
            children: (0, cm.jsx)(Bm, {
              entry: Tm
            })
          }), Am && (0, cm.jsxs)(cm.Fragment, {
            children: [(0, cm.jsx)("p", {
              className: "BoardDescription",
              children: Tm.codexEntryLore
            }), (0, cm.jsxs)("p", {
              className: "CodexTally",
              children: [hm(`${zm}:codexContainments`, {
                count: String(Tm.codexEntryContainedCount)
              }), (0, cm.jsx)(dm, {
                count: Tm.codexEntryContainedCount
              })]
            }), (0, cm.jsx)("span", {
              className: "CodexClosedStamp",
              "aria-hidden": "true",
              children: hm(`${zm}:codexContainedBadge`)
            })]
          }), !Am && (0, cm.jsxs)(cm.Fragment, {
            children: [(0, cm.jsxs)("div", {
              className: "CodexRedaction",
              children: [um.map((mm => (0, cm.jsx)("span", {
                className: "CodexRedactedLine",
                style: {
                  width: mm
                }
              }, mm))), (0, cm.jsx)("p", {
                className: "CodexRedacted",
                children: hm(`${zm}:codexRedacted`)
              })]
            }), "" !== Tm.codexEntryHint && (0, cm.jsxs)("aside", {
              className: "CodexNote",
              children: [(0, cm.jsx)("h4", {
                children: hm(`${zm}:codexHintLabel`)
              }), (0, cm.jsx)("p", {
                children: Tm.codexEntryHint
              })]
            }), (0, cm.jsx)("p", {
              className: "CodexClearance",
              children: hm(sm[Tm.codexEntryDifficulty])
            })]
          })]
        })
      })
    }

    function Fm(mm) {
      let {
        controller: Tm
      } = mm;
      const fm = (0, Rm.i)(Cm, Tm.getSnapshot()),
        {
          t: hm
        } = (0, pm.A)();
      if (0 === fm.entries.length) return null;
      const Am = fm.entries.find((mm => mm.codexEntryId === fm.selectedId)),
        am = fm.entries.filter((mm => "codexContained" === mm.codexEntryState)).length,
        xm = fm.entries.map((mm => mm.codexEntryId)).sort().indexOf(Am.codexEntryId) + 1;
      return (0, cm.jsxs)(km, {
        open: fm.open,
        onDismiss: Tm.dismiss,
        title: hm(`${zm}:codexTitle`),
        className: "ContainmentCodexPanel",
        headerExtra: (0, cm.jsx)(gm, {
          contained: am,
          total: fm.entries.length
        }),
        children: [(0, cm.jsx)("div", {
          className: "BoardTiles",
          children: fm.entries.map((mm => (0, cm.jsx)(Um, {
            entry: mm,
            selected: mm === Am,
            onSelect: Tm.select
          }, mm.codexEntryId)))
        }), (0, cm.jsx)(Wm, {
          entry: Am,
          fileNumber: xm
        })]
      })
    }
    var mT = fm(354);
    class TT extends ym.e {
      constructor(mm, Tm, fm, hm, Am, am) {
        super(mm, Tm, fm), this.pacer = hm, this.command = Am, this.predict = am, this.board = null, this.confirmed = null, this.selectedId = "", this.notice = null, this.unsubscribePacer = void 0, this.select = mm => {
          this.selectedId = mm, this.emit()
        }, this.act = (mm, Tm) => {
          if (!this.open || null === this.board || !this.pacer.send(`${this.command} ${mm} ${Tm}`, this.rollBack)) return;
          const fm = this.predict(this.board, mm, Tm);
          null !== fm && (this.board = fm.board, this.notice = fm.notice, this.emit())
        }, this.rollBack = () => {
          this.board !== this.confirmed && (this.board = this.confirmed, this.notice = null)
        }, this.unsubscribePacer = hm.subscribe((() => {
          this.emit()
        }))
      }
      rO(mm) {
        const Tm = this.messageOpens(mm);
        if (Tm && this.open) return this.board === this.confirmed && (this.board = mm), this.confirmed = mm, void this.emit();
        if (this.board = mm, this.confirmed = mm, this.pacer.onReply(), Tm) return this.notice = null, this.selectedId = this.openingSelection(mm), void this.show();
        const fm = this.messageNotice(mm);
        null !== fm && (this.notice = fm), this.emit()
      }
      dispose() {
        this.unsubscribePacer(), super.dispose()
      }
      onClosed() {
        this.notice = null
      }
    }

    function fT(mm, Tm) {
      return mm.loadoutCoins >= Tm.loadoutCostCoins && Tm.loadoutCostParts.every((Tm => function(mm, Tm) {
        return hT(mm, Tm).loadoutHeldPartAmount
      }(mm, Tm.loadoutPartCurrency) >= Tm.loadoutPartAmount))
    }

    function hT(mm, Tm) {
      return mm.loadoutHeldParts.find((mm => mm.loadoutHeldPartCurrency === Tm))
    }

    function AT(mm, Tm) {
      return mm.loadoutSlots.find((mm => mm.loadoutSlotKind === Tm))
    }

    function aT(mm) {
      return mm.loadoutPerks.filter((mm => mm.loadoutPerkEquipped)).length >= mm.loadoutMaxPerks
    }

    function xT(mm, Tm, fm) {
      for (const Am of mm.loadoutSlots) {
        const hm = Am.loadoutSlotOptions.find((mm => mm.loadoutOptionId === fm));
        if (hm) return "loadoutArmour" === Am.loadoutSlotKind ? DT(mm, Am, hm, Tm) : wT(mm, Am, hm, Tm)
      }
      const hm = mm.loadoutPerks.find((mm => mm.loadoutPerkId === fm));
      return hm ? function(mm, Tm, fm) {
        const hm = Tm.loadoutPerkOwned,
          Am = Tm.loadoutPerkEquipped,
          am = Tm.loadoutPerkName,
          xm = aT(mm);
        if ("loadoutUnlock" === fm) {
          if (hm || !fT(mm, Tm.loadoutPerkCost)) return null;
          const fm = {
            ...Tm,
            loadoutPerkOwned: !0,
            loadoutPerkEquipped: !xm
          };
          return {
            board: RT(pT(mm, Tm.loadoutPerkCost), fm),
            notice: ET(xm ? "loadoutNoticeUnlockedNoRoom" : "loadoutNoticeUnlocked", am)
          }
        }
        if ("loadoutUpgrade" === fm || !hm || "loadoutEquip" === fm === Am || !Am && xm) return null;
        return {
          board: RT(mm, {
            ...Tm,
            loadoutPerkEquipped: !Am
          }),
          notice: ET(Am ? "loadoutNoticeUnequipped" : "loadoutNoticeEquipped", am)
        }
      }(mm, hm, Tm) : null
    }

    function wT(mm, Tm, fm, hm) {
      const Am = fm.loadoutOptionOwnedTier,
        am = fm.loadoutOptionName;
      if ("loadoutEquip" === hm) return 0 === Am ? null : {
        board: iT(mm, Tm, fm.loadoutOptionId, null),
        notice: ET("loadoutNoticeEquipped", am)
      };
      const xm = "loadoutUnlock" === hm;
      if (xm && 0 !== Am || "loadoutUpgrade" === hm && (0 === Am || Am >= fm.loadoutOptionTiers.length) || "loadoutUnequip" === hm) return null;
      const wm = fm.loadoutOptionTiers[Am].loadoutTierCost;
      if (!fT(mm, wm)) return null;
      const Dm = {
          ...fm,
          loadoutOptionOwnedTier: Am + 1
        },
        im = xm ? fm.loadoutOptionId : Tm.loadoutSlotEquippedId;
      return {
        board: iT(pT(mm, wm), Tm, im, Dm),
        notice: xm ? ET("loadoutNoticeUnlocked", am) : ET("loadoutNoticeUpgraded", am, Am + 1)
      }
    }

    function DT(mm, Tm, fm, hm) {
      const Am = fm.loadoutOptionOwnedTier > 0,
        am = fm.loadoutOptionName;
      if ("loadoutEquip" === hm && Am) return {
        board: iT(mm, Tm, fm.loadoutOptionId, null),
        notice: ET("loadoutNoticeEquipped", am)
      };
      const xm = fm.loadoutOptionTiers[0].loadoutTierCost;
      return "loadoutUnlock" !== hm || Am || !fT(mm, xm) ? null : {
        board: iT(pT(mm, xm), Tm, fm.loadoutOptionId, {
          ...fm,
          loadoutOptionOwnedTier: 1
        }),
        notice: ET("loadoutNoticeUnlocked", am)
      }
    }

    function iT(mm, Tm, fm, hm) {
      const Am = {
        ...Tm,
        loadoutSlotEquippedId: fm,
        loadoutSlotOptions: Tm.loadoutSlotOptions.map((mm => null !== hm && mm.loadoutOptionId === hm.loadoutOptionId ? hm : mm))
      };
      return {
        ...mm,
        loadoutSlots: mm.loadoutSlots.map((mm => mm === Tm ? Am : mm))
      }
    }

    function RT(mm, Tm) {
      return {
        ...mm,
        loadoutPerks: mm.loadoutPerks.map((mm => mm.loadoutPerkId === Tm.loadoutPerkId ? Tm : mm))
      }
    }

    function pT(mm, Tm) {
      return {
        ...mm,
        loadoutCoins: mm.loadoutCoins - Tm.loadoutCostCoins,
        loadoutHeldParts: mm.loadoutHeldParts.map((mm => {
          const fm = Tm.loadoutCostParts.find((Tm => Tm.loadoutPartCurrency === mm.loadoutHeldPartCurrency));
          return fm ? {
            ...mm,
            loadoutHeldPartAmount: mm.loadoutHeldPartAmount - fm.loadoutPartAmount
          } : mm
        }))
      }
    }

    function ET(mm, Tm) {
      return {
        loadoutNoticeKey: mm,
        loadoutNoticeRefused: !1,
        loadoutNoticeName: Tm,
        loadoutNoticeTier: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
      }
    }
    const oT = "containmentLoadoutView";
    class OT extends TT {
      constructor(mm, Tm, fm, hm) {
        super(mm, Tm, fm, hm, "loadout", xT), this.slot = "loadoutPrimary", this.snapshot = this.buildSnapshot(), this.selectSlot = mm => {
          this.slot = mm, this.selectedId = YT(this.board, mm), this.emit()
        }
      }
      messageOpens(mm) {
        return mm.loadoutMessageOpens
      }
      messageNotice(mm) {
        return mm.loadoutNotice
      }
      openingSelection(mm) {
        return YT(mm, this.slot)
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

    function YT(mm, Tm) {
      if ("loadoutPerks" === Tm) {
        var fm;
        const Tm = mm.loadoutPerks;
        return (null !== (fm = Tm.find((mm => mm.loadoutPerkEquipped))) && void 0 !== fm ? fm : Tm[0]).loadoutPerkId
      }
      return AT(mm, Tm).loadoutSlotEquippedId
    }
    const qT = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAY0lEQVR4nGNgIAP8x4FRwP/sFt3/EYU6YBqGIwp1MBSDBUH4/3nW//83csD5DOgKfeKNsWIMhV+///qvbOT7/87cMjCG8TEUgiSLqlpRMEgMQ+HJvgy4aTAMEsPqc2KChyAAAFxNbnylK5O6AAAAAElFTkSuQmCC";
    var jT = fm(36986),
      VT = fm(1281);
    const IT = {
        loadoutPrimary: `${zm}:loadoutSlotPrimary`,
        loadoutSecondary: `${zm}:loadoutSlotSecondary`,
        loadoutOffensive: `${zm}:loadoutSlotOffensive`,
        loadoutSelfHelp: `${zm}:loadoutSlotSelfHelp`,
        loadoutArmour: `${zm}:loadoutSlotArmour`,
        loadoutPerks: `${zm}:loadoutSlotPerks`
      },
      KT = {
        section: "right",
        Do: "bottom",
        act: "top"
      },
      QT = (0, hm.createContext)({
        step: null,
        targetRef: () => {}
      });

    function nT() {
      const {
        step: mm,
        targetRef: Tm
      } = (0, hm.useContext)(QT);
      return (fm, hm) => (null === mm || void 0 === mm ? void 0 : mm.kind) === fm && mm.id === hm ? Tm : void 0
    }

    function JT(mm, Tm) {
      const fm = Tm.loadoutTargetId;
      if ("loadoutPerks" === Tm.loadoutTargetSection) {
        const Tm = mm.loadoutPerks.find((mm => mm.loadoutPerkId === fm));
        return {
          name: Tm.loadoutPerkName,
          owned: Tm.loadoutPerkOwned,
          equipped: Tm.loadoutPerkEquipped
        }
      }
      const hm = AT(mm, Tm.loadoutTargetSection),
        Am = hm.loadoutSlotOptions.find((mm => mm.loadoutOptionId === fm));
      return {
        name: Am.loadoutOptionName,
        owned: Am.loadoutOptionOwnedTier > 0,
        equipped: hm.loadoutSlotEquippedId === fm
      }
    }

    function cT(mm, Tm, fm, hm) {
      const [Am, am] = mm(`${zm}:${Tm}`, {
        [fm]: "\x01"
      }).split("\x01");
      return (0, cm.jsxs)(cm.Fragment, {
        children: [Am, (0, cm.jsx)("span", {
          className: "LoadoutWalkthroughName",
          children: hm
        }), am]
      })
    }

    function zT(mm) {
      let {
        view: Tm,
        onDismiss: fm,
        children: Am
      } = mm;
      const {
        t: am
      } = (0, pm.A)(), xm = Tm.loadout, wm = Tm.open ? xm.loadoutWalkthrough.map((mm => ({
        target: mm,
        info: JT(xm, mm)
      }))).find((mm => {
        let {
          info: Tm
        } = mm;
        return !Tm.equipped
      })) : void 0;
      let Dm = null,
        im = null;
      if (void 0 !== wm) {
        const {
          target: mm,
          info: fm
        } = wm;
        Tm.slot !== mm.loadoutTargetSection ? (Dm = {
          kind: "section",
          id: mm.loadoutTargetSection
        }, im = cT(am, "loadoutWalkthroughSection", "section", am(IT[mm.loadoutTargetSection]))) : Tm.selectedId !== mm.loadoutTargetId ? (Dm = {
          kind: "Do",
          id: mm.loadoutTargetId
        }, im = cT(am, "loadoutWalkthroughPick", "name", fm.name)) : (Dm = {
          kind: "act",
          id: mm.loadoutTargetId
        }, im = cT(am, fm.owned ? "loadoutWalkthroughEquip" : "loadoutWalkthroughUnlock", "name", fm.name))
      }
      const Rm = null === Dm ? null : function(mm) {
          return `${mm.kind}:${mm.id}`
        }(Dm),
        [Em, om] = (0, hm.useState)(null),
        Om = (0, hm.useCallback)((mm => {
          om((Tm => null !== mm ? {
            key: Rm,
            node: mm
          } : (null === Tm || void 0 === Tm ? void 0 : Tm.key) === Rm ? null : Tm))
        }), [Rm]),
        Ym = null !== Rm && (null === Em || void 0 === Em ? void 0 : Em.key) === Rm ? Em.node : null;
      return (0, cm.jsxs)(QT.Provider, {
        value: {
          step: Dm,
          targetRef: Om
        },
        children: [Am, null !== Dm && null !== Ym && (0, cm.jsx)(ZT, {
          target: Ym,
          placement: KT[Dm.kind],
          onDismiss: fm,
          children: im
        }, Rm)]
      })
    }

    function ZT(mm) {
      let {
        target: Tm,
        placement: fm,
        onDismiss: Am,
        children: am
      } = mm;
      const {
        t: xm
      } = (0, pm.A)(), wm = (0, hm.useRef)(Tm);
      return wm.current = Tm, (0, VT.s)("popup", wm, Am), (0, cm.jsxs)(jT.d, {
        target: Tm,
        placement: fm,
        className: "LoadoutWalkthroughStep",
        spotlightMargin: 10,
        children: [(0, cm.jsxs)("div", {
          className: "LoadoutWalkthroughHeader",
          children: [(0, cm.jsx)("img", {
            className: "LoadoutWalkthroughPortrait",
            src: qT,
            alt: "",
            draggable: !1
          }), (0, cm.jsx)("span", {
            className: "LoadoutWalkthroughSpeaker",
            children: xm(`${zm}:operatorName`)
          }), (0, cm.jsx)(Om.j, {
            onClick: Am,
            ariaLabel: xm(`${zm}:loadoutWalkthroughClose`),
            padIgnore: !0
          })]
        }), (0, cm.jsx)("p", {
          className: "LoadoutWalkthroughText",
          children: am
        })]
      })
    }
    const kT = new Set(["loadoutStatReload", "loadoutStatResupply"]);

    function bT(mm) {
      let {
        cost: Tm,
        loadout: fm
      } = mm;
      const {
        t: hm
      } = (0, pm.A)();
      return Tm.loadoutCostCoins <= 0 && 0 === Tm.loadoutCostParts.length ? (0, cm.jsx)("span", {
        className: "LoadoutCost",
        children: hm(`${zm}:loadoutFree`)
      }) : (0, cm.jsxs)("span", {
        className: "LoadoutCost",
        children: [Tm.loadoutCostCoins > 0 && (0, cm.jsx)(em, {
          itemName: Zm,
          amount: Tm.loadoutCostCoins,
          ni: fm.loadoutCoins
        }), Tm.loadoutCostParts.map((mm => {
          const Tm = hT(fm, mm.loadoutPartCurrency);
          return (0, cm.jsx)(em, {
            itemName: Tm.loadoutHeldPartItem,
            amount: mm.loadoutPartAmount,
            ni: Tm.loadoutHeldPartAmount
          }, mm.loadoutPartCurrency)
        }))]
      })
    }
    const ST = {
      loadoutStatFireRate: `${zm}:loadoutUnitPerMinute`,
      loadoutStatReload: `${zm}:loadoutUnitSeconds`,
      loadoutStatResupply: `${zm}:loadoutUnitSeconds`
    };

    function eT(mm) {
      return "loadoutStatPotency" === mm.loadoutStatKind ? (0, mT.R)(mm.loadoutStatValue) : String(mm.loadoutStatValue)
    }

    function NT(mm) {
      var Tm;
      let {
        option: fm
      } = mm;
      const {
        t: hm
      } = (0, pm.A)(), Am = fm.loadoutOptionTiers, am = null === (Tm = Am[0]) || void 0 === Tm ? void 0 : Tm.loadoutTierStats.map((mm => mm.loadoutStatKind));
      if (!am || 0 === am.length) return null;
      const xm = fm.loadoutOptionOwnedTier,
        wm = (mm, Tm) => {
          var fm;
          return null === (fm = Am[mm]) || void 0 === fm ? void 0 : fm.loadoutTierStats.find((mm => mm.loadoutStatKind === Tm))
        };
      return (0, cm.jsxs)("table", {
        className: "LoadoutTierTable",
        children: [(0, cm.jsx)("thead", {
          children: (0, cm.jsxs)("tr", {
            children: [(0, cm.jsx)("th", {}), Am.map(((mm, Tm) => (0, cm.jsx)("th", {
              className: im()({
                Current: Tm + 1 === xm,
                Next: Tm === xm
              }),
              children: hm(`${zm}:loadoutTier`, {
                tier: (0, mT.R)(Tm + 1)
              })
            }, Tm)))]
          })
        }), (0, cm.jsx)("tbody", {
          children: am.map((mm => {
            const Tm = ST[mm];
            return (0, cm.jsxs)("tr", {
              children: [(0, cm.jsxs)("th", {
                scope: "row",
                children: [hm(`${zm}:${mm}`), Tm && (0, cm.jsx)("span", {
                  className: "LoadoutStatUnit",
                  children: hm(Tm)
                })]
              }), Am.map(((Tm, fm) => {
                const hm = wm(fm, mm),
                  Am = fm > 0 ? wm(fm - 1, mm) : void 0,
                  am = hm && Am ? hm.loadoutStatValue - Am.loadoutStatValue : 0,
                  Dm = kT.has(mm) ? am < 0 : am > 0,
                  Rm = fm === xm;
                return (0, cm.jsxs)("td", {
                  className: im()({
                    Current: fm + 1 === xm,
                    Next: Rm,
                    Gain: Dm,
                    Owned: fm < xm
                  }),
                  children: [Rm && Dm && (0, cm.jsx)("span", {
                    className: "LoadoutGainArrow",
                    "aria-hidden": "true",
                    children: am < 0 ? "\u25bc" : "\u25b2"
                  }), hm ? eT(hm) : "-"]
                }, fm)
              }))]
            }, mm)
          }))
        })]
      })
    }

    function GT(mm) {
      let {
        view: Tm,
        controller: fm,
        slot: hm,
        option: Am
      } = mm;
      const {
        t: am
      } = (0, pm.A)(), xm = Tm.loadout, wm = Am.loadoutOptionOwnedTier, Dm = Am.loadoutOptionTiers.length, im = hm.loadoutSlotEquippedId === Am.loadoutOptionId, Rm = wm < Dm ? Am.loadoutOptionTiers[wm].loadoutTierCost : null, Em = null !== Rm && fT(xm, Rm), om = Am.loadoutOptionId, Ym = nT();
      return (0, cm.jsxs)(cm.Fragment, {
        children: [(0, cm.jsx)(PT, {
          icon: Am.loadoutOptionIcon,
          name: Am.loadoutOptionName,
          status: 0 === wm ? am(`${zm}:loadoutLocked`) : Dm > 1 ? am(`${zm}:loadoutTier`, {
            tier: (0, mT.R)(wm)
          }) : null,
          locked: 0 === wm,
          equipped: im
        }), (0, cm.jsx)("p", {
          className: "BoardDescription",
          children: Am.loadoutOptionDescription
        }), (0, cm.jsx)(NT, {
          option: Am
        }), (0, cm.jsxs)("div", {
          ref: Ym("act", om),
          className: "BoardActions",
          children: [null !== Rm && (0, cm.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, cm.jsx)(bT, {
              cost: Rm,
              loadout: xm
            }), (0, cm.jsx)(Om.m, {
              disabled: !Em || Tm.pending,
              onClick: () => {
                fm.act(0 === wm ? "loadoutUnlock" : "loadoutUpgrade", om)
              },
              children: 0 === wm ? am(`${zm}:loadoutUnlock`) : am(`${zm}:loadoutUpgrade`, {
                tier: (0, mT.R)(wm + 1)
              })
            })]
          }), null === Rm && Dm > 1 && (0, cm.jsx)("span", {
            className: "BoardHint",
            children: am(`${zm}:loadoutMaxed`)
          }), wm > 0 && !im && (0, cm.jsx)(Om.e, {
            disabled: Tm.pending,
            onClick: () => {
              fm.act("loadoutEquip", om)
            },
            children: am(`${zm}:loadoutEquip`)
          })]
        })]
      })
    }

    function XT(mm) {
      let {
        view: Tm,
        controller: fm,
        perk: hm
      } = mm;
      const {
        t: Am
      } = (0, pm.A)(), am = Tm.loadout, xm = aT(am), wm = hm.loadoutPerkId, Dm = nT();
      return (0, cm.jsxs)(cm.Fragment, {
        children: [(0, cm.jsx)(PT, {
          icon: hm.loadoutPerkIcon,
          name: hm.loadoutPerkName,
          status: hm.loadoutPerkOwned ? null : Am(`${zm}:loadoutLocked`),
          locked: !hm.loadoutPerkOwned,
          equipped: hm.loadoutPerkEquipped
        }), (0, cm.jsx)("p", {
          className: "BoardDescription",
          children: hm.loadoutPerkDescription
        }), (0, cm.jsxs)("div", {
          ref: Dm("act", wm),
          className: "BoardActions",
          children: [!hm.loadoutPerkOwned && (0, cm.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, cm.jsx)(bT, {
              cost: hm.loadoutPerkCost,
              loadout: am
            }), (0, cm.jsx)(Om.m, {
              disabled: !fT(am, hm.loadoutPerkCost) || Tm.pending,
              onClick: () => {
                fm.act("loadoutUnlock", wm)
              },
              children: Am(`${zm}:loadoutUnlock`)
            })]
          }), hm.loadoutPerkOwned && !hm.loadoutPerkEquipped && (0, cm.jsx)(Om.e, {
            disabled: xm || Tm.pending,
            onClick: () => {
              fm.act("loadoutEquip", wm)
            },
            children: Am(`${zm}:loadoutEquip`)
          }), hm.loadoutPerkOwned && !hm.loadoutPerkEquipped && xm && (0, cm.jsx)("span", {
            className: "BoardHint",
            children: Am(`${zm}:loadoutSocketsFullHint`)
          }), hm.loadoutPerkEquipped && (0, cm.jsx)(Om.V, {
            disabled: Tm.pending,
            onClick: () => {
              fm.act("loadoutUnequip", wm)
            },
            children: Am(`${zm}:loadoutUnequip`)
          })]
        })]
      })
    }

    function PT(mm) {
      let {
        icon: Tm,
        name: fm,
        status: hm,
        locked: Am,
        equipped: am
      } = mm;
      const {
        t: xm
      } = (0, pm.A)();
      return (0, cm.jsxs)(Pm, {
        icon: (0, cm.jsx)(bm, {
          itemName: Tm
        }),
        name: fm,
        children: [null !== hm && (0, cm.jsx)("span", {
          className: im()("LoadoutStatusText", {
            Locked: Am
          }),
          children: hm
        }), am && (0, cm.jsx)("span", {
          className: "BoardBadge",
          children: xm(`${zm}:loadoutEquippedBadge`)
        })]
      })
    }

    function HT(mm) {
      let {
        view: Tm,
        controller: fm
      } = mm;
      const hm = Tm.loadout;
      if ("loadoutPerks" === Tm.slot) {
        const mm = hm.loadoutPerks.find((mm => mm.loadoutPerkId === Tm.selectedId));
        return (0, cm.jsx)("section", {
          className: "BoardDetail",
          children: mm && (0, cm.jsx)(XT, {
            view: Tm,
            controller: fm,
            perk: mm
          })
        })
      }
      const Am = AT(hm, Tm.slot),
        am = Am.loadoutSlotOptions.find((mm => mm.loadoutOptionId === Tm.selectedId));
      return (0, cm.jsx)("section", {
        className: "BoardDetail",
        children: am && (0, cm.jsx)(GT, {
          view: Tm,
          controller: fm,
          slot: Am,
          option: am
        })
      })
    }

    function yT(mm) {
      let {
        owned: Tm,
        total: fm
      } = mm;
      return fm <= 1 ? null : (0, cm.jsx)("span", {
        className: "LoadoutPips",
        children: Array.from({
          length: fm
        }, ((mm, fm) => (0, cm.jsx)("span", {
          className: im()("LoadoutPip", {
            Filled: fm < Tm
          })
        }, fm)))
      })
    }

    function CT(mm) {
      let {
        view: Tm,
        controller: fm
      } = mm;
      const {
        t: hm
      } = (0, pm.A)(), Am = Tm.loadout, am = nT();
      return (0, cm.jsxs)("nav", {
        className: "LoadoutKit",
        "aria-label": hm(`${zm}:loadoutKit`),
        children: [Am.loadoutSlots.map((mm => {
          const Am = mm.loadoutSlotOptions.find((Tm => Tm.loadoutOptionId === mm.loadoutSlotEquippedId));
          return (0, cm.jsxs)("button", {
            ref: am("section", mm.loadoutSlotKind),
            type: "button",
            className: im()("LoadoutKitSlot", {
              Selected: Tm.slot === mm.loadoutSlotKind
            }),
            onClick: () => {
              fm.selectSlot(mm.loadoutSlotKind)
            },
            children: [(0, cm.jsx)("span", {
              className: "LoadoutKitIcon",
              children: Am && (0, cm.jsx)(bm, {
                itemName: Am.loadoutOptionIcon
              })
            }), (0, cm.jsxs)("span", {
              className: "LoadoutKitText",
              children: [(0, cm.jsxs)("span", {
                className: "LoadoutKitTop",
                children: [(0, cm.jsx)("span", {
                  className: "LoadoutKitLabel",
                  children: hm(IT[mm.loadoutSlotKind])
                }), Am && (0, cm.jsx)(yT, {
                  owned: Am.loadoutOptionOwnedTier,
                  total: Am.loadoutOptionTiers.length
                })]
              }), (0, cm.jsx)("span", {
                className: "LoadoutKitName",
                children: null === Am || void 0 === Am ? void 0 : Am.loadoutOptionName
              })]
            })]
          }, mm.loadoutSlotKind)
        })), (0, cm.jsx)(rT, {
          view: Tm,
          controller: fm
        })]
      })
    }

    function rT(mm) {
      let {
        view: Tm,
        controller: fm
      } = mm;
      const {
        t: hm
      } = (0, pm.A)(), Am = Tm.loadout, am = Am.loadoutPerks.filter((mm => mm.loadoutPerkEquipped)), xm = nT();
      return (0, cm.jsxs)("button", {
        ref: xm("section", "loadoutPerks"),
        type: "button",
        className: im()("LoadoutKitSlot", "LoadoutPerks", {
          Selected: "loadoutPerks" === Tm.slot
        }),
        onClick: () => {
          fm.selectSlot("loadoutPerks")
        },
        children: [(0, cm.jsxs)("span", {
          className: "LoadoutKitTop",
          children: [(0, cm.jsx)("span", {
            className: "LoadoutKitLabel",
            children: hm(IT.loadoutPerks)
          }), (0, cm.jsx)("span", {
            className: "LoadoutPerkCount",
            children: hm(`${zm}:loadoutPerkCount`, {
              equipped: String(am.length),
              max: String(Am.loadoutMaxPerks)
            })
          })]
        }), (0, cm.jsx)("span", {
          className: "LoadoutSockets",
          children: Array.from({
            length: Am.loadoutMaxPerks
          }, ((mm, Tm) => {
            const fm = am[Tm];
            return (0, cm.jsxs)("span", {
              className: im()("LoadoutSocket", {
                Filled: fm,
                Empty: !fm
              }),
              children: [(0, cm.jsx)("span", {
                className: "LoadoutSocketWell",
                children: fm && (0, cm.jsx)(bm, {
                  itemName: fm.loadoutPerkIcon
                })
              }), (0, cm.jsx)("span", {
                className: "LoadoutSocketName",
                children: fm ? fm.loadoutPerkName : hm(`${zm}:loadoutPerkSocketEmpty`)
              })]
            }, Tm)
          }))
        })]
      })
    }

    function sT(mm) {
      let {
        icon: Tm,
        name: fm,
        selected: hm,
        equipped: Am,
        locked: am,
        ownedTier: xm,
        tiers: wm,
        buttonRef: Dm,
        onSelect: im
      } = mm;
      const {
        t: Rm
      } = (0, pm.A)();
      return (0, cm.jsxs)(Xm, {
        icon: (0, cm.jsx)(bm, {
          itemName: Tm
        }),
        name: fm,
        selected: hm,
        locked: am,
        buttonRef: Dm,
        onSelect: im,
        children: [Am && (0, cm.jsx)("span", {
          className: "BoardBadge",
          children: Rm(`${zm}:loadoutEquippedBadge`)
        }), am && (0, cm.jsx)("span", {
          className: "BoardBadge Muted",
          children: Rm(`${zm}:loadoutLocked`)
        }), !am && (0, cm.jsx)(yT, {
          owned: xm,
          total: wm
        })]
      })
    }

    function lT(mm) {
      let {
        view: Tm,
        controller: fm
      } = mm;
      const hm = Tm.loadout,
        Am = nT();
      if ("loadoutPerks" === Tm.slot) return (0, cm.jsx)("div", {
        className: "BoardTiles",
        children: hm.loadoutPerks.map((mm => (0, cm.jsx)(sT, {
          icon: mm.loadoutPerkIcon,
          name: mm.loadoutPerkName,
          selected: Tm.selectedId === mm.loadoutPerkId,
          equipped: mm.loadoutPerkEquipped,
          locked: !mm.loadoutPerkOwned,
          ownedTier: 0,
          tiers: 0,
          buttonRef: Am("Do", mm.loadoutPerkId),
          onSelect: () => {
            fm.select(mm.loadoutPerkId)
          }
        }, mm.loadoutPerkId)))
      });
      const am = AT(hm, Tm.slot);
      return (0, cm.jsx)("div", {
        className: "BoardTiles",
        children: am.loadoutSlotOptions.map((mm => (0, cm.jsx)(sT, {
          icon: mm.loadoutOptionIcon,
          name: mm.loadoutOptionName,
          selected: Tm.selectedId === mm.loadoutOptionId,
          equipped: am.loadoutSlotEquippedId === mm.loadoutOptionId,
          locked: 0 === mm.loadoutOptionOwnedTier,
          ownedTier: mm.loadoutOptionOwnedTier,
          tiers: mm.loadoutOptionTiers.length,
          buttonRef: Am("Do", mm.loadoutOptionId),
          onSelect: () => {
            fm.select(mm.loadoutOptionId)
          }
        }, mm.loadoutOptionId)))
      })
    }

    function MT(mm) {
      let {
        loadout: Tm
      } = mm;
      return (0, cm.jsx)(Hm, {
        coins: Tm.loadoutCoins,
        children: Tm.loadoutHeldParts.filter((mm => mm.loadoutHeldPartAmount > 0)).map((mm => (0, cm.jsx)(em, {
          itemName: mm.loadoutHeldPartItem,
          amount: mm.loadoutHeldPartAmount
        }, mm.loadoutHeldPartCurrency)))
      })
    }

    function uT(mm) {
      let {
        controller: Tm
      } = mm;
      const fm = (0, Rm.i)(oT, Tm.getSnapshot()),
        {
          t: hm
        } = (0, pm.A)();
      if (null === fm.loadout) return null;
      const Am = fm.notice;
      return (0, cm.jsx)(zT, {
        view: fm,
        onDismiss: Tm.dismiss,
        children: (0, cm.jsxs)(km, {
          open: fm.open,
          onDismiss: Tm.dismiss,
          title: hm(`${zm}:loadoutTitle`),
          className: "ContainmentLoadoutPanel",
          headerExtra: (0, cm.jsx)(MT, {
            loadout: fm.loadout
          }),
          statusRefused: null === Am || void 0 === Am ? void 0 : Am.loadoutNoticeRefused,
          status: (0, cm.jsxs)(cm.Fragment, {
            children: [(0, cm.jsx)("span", {
              className: "LoadoutRadioBadge",
              children: hm(`${zm}:loadoutRadioBadge`)
            }), null !== Am && hm(`${zm}:${Am.loadoutNoticeKey}`, {
              name: Am.loadoutNoticeName,
              tier: (0, mT.R)(Am.loadoutNoticeTier),
              max: String(fm.loadout.loadoutMaxPerks)
            })]
          }),
          children: [(0, cm.jsx)(CT, {
            view: fm,
            controller: Tm
          }), (0, cm.jsx)(lT, {
            view: fm,
            controller: Tm
          }), (0, cm.jsx)(HT, {
            view: fm,
            controller: Tm
          })]
        })
      })
    }

    function BT(mm, Tm, fm) {
      const hm = mm.locatorEntries.find((mm => mm.locatorEntryId === fm));
      if (!hm) return null;
      const Am = hm.locatorEntryName;
      if ("locatorDisarm" === Tm) return hm.locatorEntryArmed ? {
        board: LT(mm, null),
        notice: vT("locatorNoticeDisarmed", Am)
      } : null;
      if ("locatorArm" === Tm) return hm.locatorEntryOwned && !hm.locatorEntryArmed ? {
        board: LT(mm, fm),
        notice: vT("locatorNoticeArmed", Am)
      } : null;
      if (hm.locatorEntryOwned || mm.locatorCoins < hm.locatorEntryPrice) return null;
      const am = LT({
        ...mm,
        locatorCoins: mm.locatorCoins - hm.locatorEntryPrice
      }, fm);
      return {
        board: {
          ...am,
          locatorEntries: am.locatorEntries.map((mm => mm.locatorEntryId === fm ? {
            ...mm,
            locatorEntryOwned: !0
          } : mm))
        },
        notice: vT("locatorNoticeBought", Am)
      }
    }

    function LT(mm, Tm) {
      return {
        ...mm,
        locatorEntries: mm.locatorEntries.map((mm => {
          const fm = mm.locatorEntryId === Tm;
          return mm.locatorEntryArmed === fm ? mm : {
            ...mm,
            locatorEntryArmed: fm
          }
        }))
      }
    }

    function vT(mm, Tm) {
      return {
        locatorNoticeKey: mm,
        locatorNoticeRefused: !1,
        locatorNoticeName: Tm
      }
    }
    const tT = "containmentLocatorView";
    class UT extends TT {
      constructor(mm, Tm, fm, hm) {
        super(mm, Tm, fm, hm, "locator", BT), this.snapshot = this.buildSnapshot()
      }
      messageOpens(mm) {
        return mm.locatorMessageOpens
      }
      messageNotice(mm) {
        return mm.locatorNotice
      }
      openingSelection(mm) {
        var Tm;
        const fm = mm.locatorEntries;
        return (null !== (Tm = fm.find((mm => mm.locatorEntryArmed))) && void 0 !== Tm ? Tm : fm[0]).locatorEntryId
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
    const dT = {
        locatorContained: `${zm}:locatorFlavourContained`,
        locatorEncountered: `${zm}:locatorFlavourEncountered`,
        locatorUnseen: `${zm}:locatorFlavourUnseen`
      },
      gT = {
        codexAnyDifficulty: null,
        codexNormalOnly: `${zm}:locatorAttunedNormal`,
        codexHardOnly: `${zm}:locatorAttunedHard`
      };

    function WT() {
      return (0, cm.jsx)(cm.Fragment, {
        children: Array.from({
          length: 5
        }, ((mm, Tm) => (0, cm.jsx)("span", {
          className: "LocatorFly",
          children: (0, cm.jsx)("img", {
            src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAICAYAAADwdn+XAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYElEQVR4nGNgoBboMlb5LyUjD8YgNtHyJ6/d+Q/CILa1lz9YAbo4DCDLYxjQv3gt3AYQG90AdHkUQ/qhkjAb0BURkgcDmAQMo7sSXR7deyiGoIvDvIOsGasB+ACyBmTNACS0go3ibhumAAAAAElFTkSuQmCC",
            alt: "",
            draggable: !1
          })
        }, Tm)))
      })
    }

    function FT(mm) {
      let {
        entry: Tm
      } = mm;
      const {
        t: fm
      } = (0, pm.A)();
      return Tm.locatorEntryArmed ? (0, cm.jsx)("span", {
        className: "BoardBadge Armed",
        children: fm(`${zm}:locatorArmedBadge`)
      }) : Tm.locatorEntryOwned ? (0, cm.jsx)("span", {
        className: "BoardBadge",
        children: fm(`${zm}:locatorOwnedBadge`)
      }) : null
    }

    function mf(mm) {
      let {
        entry: Tm,
        coins: fm,
        inTile: hm = !1
      } = mm;
      return (0, cm.jsx)(em, {
        itemName: Zm,
        amount: Tm.locatorEntryPrice,
        ni: fm,
        inTile: hm
      })
    }

    function Tf(mm) {
      let {
        view: Tm,
        controller: fm,
        entry: hm
      } = mm;
      const {
        t: Am
      } = (0, pm.A)(), am = hm.locatorEntryId, xm = Tm.locators.locatorEntries.find((mm => mm.locatorEntryArmed && mm !== hm));
      return (0, cm.jsxs)("div", {
        className: "BoardActions",
        children: [hm.locatorEntryArmed && (0, cm.jsx)(Om.V, {
          disabled: Tm.pending,
          onClick: () => {
            fm.act("locatorDisarm", am)
          },
          children: Am(`${zm}:locatorDisarm`)
        }), hm.locatorEntryOwned && !hm.locatorEntryArmed && (0, cm.jsx)(Om.e, {
          disabled: Tm.pending,
          onClick: () => {
            fm.act("locatorArm", am)
          },
          children: Am(`${zm}:locatorArm`)
        }), !hm.locatorEntryOwned && (0, cm.jsxs)("div", {
          className: "LocatorBuy",
          children: [(0, cm.jsx)(mf, {
            entry: hm,
            coins: Tm.locators.locatorCoins
          }), (0, cm.jsx)(Om.m, {
            disabled: Tm.locators.locatorCoins < hm.locatorEntryPrice || Tm.pending,
            onClick: () => {
              fm.act("locatorBuy", am)
            },
            children: Am(`${zm}:locatorBuy`)
          })]
        }), xm && !hm.locatorEntryArmed && (0, cm.jsx)("span", {
          className: "BoardHint",
          children: Am(`${zm}:locatorReplacesHint`, {
            name: xm.locatorEntryName
          })
        })]
      })
    }

    function ff(mm) {
      let {
        entry: Tm
      } = mm;
      return "locatorUnseen" === Tm.locatorEntryStanding ? (0, cm.jsx)(bm, {
        itemName: "Compass"
      }) : (0, cm.jsx)(Sm, {
        anomalyId: Tm.locatorEntryId,
        caught: "locatorContained" === Tm.locatorEntryStanding
      })
    }

    function hf(mm) {
      let {
        view: Tm,
        controller: fm,
        entry: hm
      } = mm;
      const {
        t: Am
      } = (0, pm.A)(), am = gT[hm.locatorEntryDifficulty];
      return (0, cm.jsxs)("section", {
        className: "BoardDetail",
        children: [(0, cm.jsxs)("div", {
          className: im()("LocatorLabel", {
            Armed: hm.locatorEntryArmed
          }),
          children: [(0, cm.jsx)(Pm, {
            icon: (0, cm.jsx)(ff, {
              entry: hm
            }),
            name: Am(`${zm}:locatorName`, {
              name: hm.locatorEntryName
            }),
            children: (0, cm.jsx)(FT, {
              entry: hm
            })
          }), (0, cm.jsx)("p", {
            className: "BoardDescription",
            children: Am(hm.locatorEntryArmed ? `${zm}:locatorFlavourArmed` : dT[hm.locatorEntryStanding])
          }), null !== am && (0, cm.jsx)("p", {
            className: "LocatorAttuned",
            children: Am(am)
          }), (0, cm.jsx)("p", {
            className: "BoardDescription LocatorUsage",
            children: Am(`${zm}:locatorUsage`)
          })]
        }), (0, cm.jsx)(Tf, {
          view: Tm,
          controller: fm,
          entry: hm
        })]
      })
    }

    function Af(mm) {
      let {
        controller: Tm
      } = mm;
      const fm = (0, Rm.i)(tT, Tm.getSnapshot()),
        {
          t: hm
        } = (0, pm.A)(),
        Am = fm.locators;
      if (null === Am) return null;
      const am = Am.locatorEntries.find((mm => mm.locatorEntryId === fm.selectedId)),
        xm = fm.notice;
      return (0, cm.jsxs)(km, {
        open: fm.open,
        onDismiss: Tm.dismiss,
        title: hm(`${zm}:locatorTitle`),
        className: "ContainmentLocatorPanel",
        decor: (0, cm.jsx)(WT, {}),
        headerExtra: (0, cm.jsx)(Hm, {
          coins: Am.locatorCoins
        }),
        statusRefused: null === xm || void 0 === xm ? void 0 : xm.locatorNoticeRefused,
        status: (0, cm.jsxs)(cm.Fragment, {
          children: [(0, cm.jsx)("span", {
            className: "LocatorKeeperBadge",
            children: hm(`${zm}:locatorKeeperName`)
          }), null !== xm && hm(`${zm}:${xm.locatorNoticeKey}`, {
            name: xm.locatorNoticeName
          })]
        }),
        children: [(0, cm.jsx)("div", {
          className: "BoardTiles",
          children: Am.locatorEntries.map((mm => (0, cm.jsxs)(Xm, {
            icon: (0, cm.jsx)(ff, {
              entry: mm
            }),
            name: mm.locatorEntryName,
            selected: mm === am,
            locked: !1,
            className: im()("LocatorTag", {
              Armed: mm.locatorEntryArmed
            }),
            onSelect: () => {
              Tm.select(mm.locatorEntryId)
            },
            children: [(0, cm.jsx)(FT, {
              entry: mm
            }), !mm.locatorEntryOwned && (0, cm.jsx)(mf, {
              entry: mm,
              coins: Am.locatorCoins,
              inTile: !0
            })]
          }, mm.locatorEntryId)))
        }), (0, cm.jsx)(hf, {
          view: fm,
          controller: Tm,
          entry: am
        })]
      })
    }

    function af(mm) {
      let {
        loadout: Tm,
        codex: fm,
        locator: hm
      } = mm;
      return (0, cm.jsxs)(cm.Fragment, {
        children: [(0, cm.jsx)(uT, {
          controller: Tm
        }), (0, cm.jsx)(Fm, {
          controller: fm
        }), (0, cm.jsx)(Af, {
          controller: hm
        })]
      })
    }
    var xf = fm(38637);
    class wf {
      constructor(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.sendCommand = mm, this.budget = void 0, this.awaitingReply = !1, this.replyTimer = null, this.listeners = new Set, this.budget = new xf.c({
          spacingMs: 0,
          now: Tm
        }), this.budget.subscribe((() => {
          this.notify()
        }))
      }
      isPending() {
        return this.awaitingReply || this.budget.isPacing()
      }
      send(mm, Tm) {
        return !this.isPending() && (this.awaitingReply = !0, this.replyTimer = setTimeout((() => {
          this.replyTimer = null, this.awaitingReply = !1, Tm(), this.notify()
        }), 8e3), this.budget.start(), this.sendCommand(mm), !0)
      }
      onReply() {
        this.awaitingReply = !1, this.clearReplyTimer()
      }
      subscribe(mm) {
        return this.listeners.add(mm), () => {
          this.listeners.delete(mm)
        }
      }
      dispose() {
        this.clearReplyTimer(), this.budget.dispose(), this.listeners.clear()
      }
      clearReplyTimer() {
        null !== this.replyTimer && (clearTimeout(this.replyTimer), this.replyTimer = null)
      }
      notify() {
        for (const mm of this.listeners) mm()
      }
    }
    var Df = fm(38632);
    const Rf = new Map([
      ["npc_general", qT],
      ["npc_tentacle_guy", Df]
    ]);

    function pf(mm) {
      const Tm = Rf.get(mm);
      if (void 0 === Tm) return null;
      const fm = document.createElement("img");
      return fm.src = Tm, fm.alt = "", fm.draggable = !1, fm.style.imageRendering = "pixelated", fm
    }
    const Ef = function() {
      let mm, Tm = !1,
        fm = null,
        Dm = null;
      const im = [],
        Rm = mm => {
          for (const Tm of im) Tm !== mm && Tm.close();
          (0, wm.s)()
        },
        pm = mm => {
          mm && (0, wm.j)()
        },
        Em = new wf((Tm => {
          mm.sendCommand(Tm)
        })),
        om = new OT((mm => {
          xm.j.gp(oT, mm, !0)
        }), Rm, pm, Em),
        Om = new rm((mm => {
          xm.j.gp(Cm, mm, !0)
        }), Rm, pm),
        Ym = new UT((mm => {
          xm.j.gp(tT, mm, !0)
        }), Rm, pm, Em);
      im.push(om, Om, Ym);
      return {
        onCreate: Tm => {
          mm = Tm, fm = (0, wm.w)(null, {
            content: (0, hm.createElement)(af, {
              loadout: om,
              codex: Om,
              locator: Ym
            }),
            onClose: () => {
              for (const mm of im) mm.close()
            }
          }), Dm = (0, am.e)(pf)
        },
        onReceivedMessageFromServer: (mm, Tm) => {
          "containmentLoadout" === mm ? om.rO(Tm) : "containmentLoadoutClose" === mm ? om.isOpen() && (om.close(), (0, wm.h)()) : "containmentCodex" === mm ? Om.rO(Tm) : "containmentLocator" === mm && Ym.rO(Tm)
        },
        DE: () => {
          Tm || Am.c.get("loadingOverlayVisible") || (Tm = !0, mm.sendCommand("containmentEntered"))
        },
        onClose: () => {
          var mm, Tm;
          null === (mm = fm) || void 0 === mm || mm(), fm = null, null === (Tm = Dm) || void 0 === Tm || Tm(), Dm = null;
          for (const fm of im) fm.dispose();
          Em.dispose()
        }
      }
    }
  },
  36992: (mm, Tm, fm) => {
    fm.d(Tm, {
      B: () => Hm,
      C: () => ym,
      D: () => Xm,
      F: () => Cm,
      b: () => Dm,
      d: () => bm,
      e: () => wm,
      i: () => Gm,
      m: () => Zm,
      n: () => nm,
      p: () => Nm,
      r: () => em,
      u: () => zm,
      y: () => Pm
    });
    var hm = fm(37);
    const Am = {
        codeBlock: ["codeBlockIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "worldCodeButton", "exportButton", "helpButton"],
        worldCode: ["worldCodeIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "exportButton", "helpButton"]
      },
      am = ["docsButton", "docsPanel", "docsClientOptionsTab", "docsClientOptions", "docsApiReferenceTab", "docsApiReference", "docsCallbacksTab", "docsCallbacks", "hideDocsButton"],
      xm = ["aiHelperButton", "aiPanel", "aiAskBox", "aiModelChip", "aiAnswer", "aiEdits", "aiGear", "aiNotes", "aiGameSettings", "hideAiHelperButton"],
      wm = am.filter((mm => "docsButton" !== mm)),
      Dm = xm.filter((mm => "aiHelperButton" !== mm)),
      im = "codeEditorTutorials",
      Rm = {
        codeBlockIntro: "codeBlockIntroShown",
        worldCodeIntro: "worldCodeIntroShown"
      },
      pm = {
        welcome: "welcomeComplete",
        docsOverview: "docsOverviewComplete",
        aiHelperOverview: "aiHelperOverviewComplete"
      };
    let Em = null,
      om = null;
    const Om = new Set,
      Ym = new Set;
    let qm = null;
    const jm = new Set,
      Vm = new Set;

    function Im() {
      Vm.forEach((mm => {
        mm()
      }))
    }

    function Km() {
      if (!Em) {
        const mm = hm.g.getItem(im);
        Em = {
          codeBlockIntroShown: !1,
          worldCodeIntroShown: !1,
          welcomeComplete: !1,
          docsOverviewComplete: !1,
          aiHelperOverviewComplete: !1,
          ..."object" === typeof mm && null !== mm ? mm : {}
        }
      }
      return Em
    }

    function Qm(mm) {
      const Tm = Km();
      Tm[mm] || (Em = {
        ...Tm,
        [mm]: !0
      }, hm.g.setItem(im, Em))
    }

    function nm(mm) {
      return "docsOverview" === mm ? am : "aiHelperOverview" === mm ? xm : om ? Am[om] : []
    }

    function Jm(mm) {
      return ("worldCodeButton" !== mm || !Km().worldCodeIntroShown) && !jm.has(mm)
    }

    function cm(mm) {
      var Tm;
      return (null === (Tm = qm) || void 0 === Tm ? void 0 : Tm.name) === mm ? qm.stepsDone : Om
    }

    function zm(mm, Tm) {
      if (! function(mm) {
          return qm ? qm.name === mm : "welcome" === mm
        }(mm) || !Jm(Tm) || cm(mm).has(Tm)) return !1;
      if (qm) return !0;
      const fm = Rm[Tm];
      return fm ? !Km()[fm] || Ym.has(Tm) : !Km()[pm[mm]]
    }

    function Zm(mm) {
      var Tm;
      return null !== (Tm = nm(mm).find((Tm => zm(mm, Tm)))) && void 0 !== Tm ? Tm : null
    }

    function km(mm) {
      var Tm;
      Qm(pm[mm]), (null === (Tm = qm) || void 0 === Tm ? void 0 : Tm.name) === mm && (qm = null)
    }

    function bm(mm) {
      const Tm = (qm ? [qm.name] : ["welcome", "docsOverview"]).find((Tm => Zm(Tm) === mm));
      if (!Tm) return;
      cm(Tm).add(mm);
      const fm = Rm[mm];
      fm && (Qm(fm), qm || Ym.add(mm)), null === Zm(Tm) && km(Tm), Im()
    }

    function Sm(mm, Tm) {
      const fm = nm(mm),
        hm = cm(mm);
      for (let Am = fm.indexOf(Tm) - 1; Am >= 0; Am--)
        if (hm.has(fm[Am]) && Jm(fm[Am])) return fm[Am];
      return null
    }

    function em(mm, Tm) {
      return null !== Sm(mm, Tm)
    }

    function Nm(mm, Tm) {
      const fm = Sm(mm, Tm);
      fm && (cm(mm).delete(fm), Im())
    }

    function Gm(mm) {
      km(mm), "welcome" === mm && nm("welcome").forEach((mm => {
        const Tm = Rm[mm];
        Tm && Qm(Tm)
      })), Im()
    }

    function Xm(mm) {
      qm = {
        name: mm,
        stepsDone: new Set
      }, Im()
    }

    function Pm() {
      (qm || 0 !== Om.size || 0 !== Ym.size) && (qm = null, Om.clear(), Ym.clear(), Im())
    }

    function Hm(mm, Tm) {
      const fm = Tm ? mm : om === mm ? null : om;
      fm !== om && (om = fm, Im())
    }

    function ym(mm, Tm) {
      jm.has(mm) === Tm && (Tm ? jm.delete(mm) : jm.add(mm), Im())
    }

    function Cm(mm) {
      return Vm.add(mm), () => {
        Vm.delete(mm)
      }
    }
  },
  39428: (mm, Tm, fm) => {
    var hm = {
      "./breach-zero-uncaught.webp": 39434,
      "./breach-zero.webp": 39437,
      "./brood-father-uncaught.webp": 39443,
      "./brood-father.webp": 39447,
      "./carousel-uncaught.webp": 39449,
      "./carousel.webp": 39456,
      "./deadlock-uncaught.webp": 39465,
      "./deadlock.webp": 39467,
      "./frost-revenant-uncaught.webp": 39469,
      "./frost-revenant.webp": 39478,
      "./hollow-choir-uncaught.webp": 39487,
      "./hollow-choir.webp": 39496,
      "./magma-warden-uncaught.webp": 39505,
      "./magma-warden.webp": 39514,
      "./patient-zero-uncaught.webp": 39523,
      "./patient-zero.webp": 39529,
      "./siege-engine-uncaught.webp": 39535,
      "./siege-engine.webp": 39539,
      "./warp-stalker-uncaught.webp": 39544,
      "./warp-stalker.webp": 39547
    };

    function Am(mm) {
      var Tm = am(mm);
      return fm(Tm)
    }

    function am(mm) {
      if (!fm.o(hm, mm)) {
        var Tm = new Error("Cannot find module '" + mm + "'");
        throw Tm.code = "MODULE_NOT_FOUND", Tm
      }
      return hm[mm]
    }
    Am.keys = function() {
      return Object.keys(hm)
    }, Am.resolve = am, mm.exports = Am, Am.id = 39428
  },
  39434: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/breach-zero-uncaught.c7d4410f99269ac1ee2f.webp"
  },
  39437: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/breach-zero.ef5aacecf502228cd20b.webp"
  },
  39443: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/brood-father-uncaught.ee678432c71b7061fae1.webp"
  },
  39447: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/brood-father.e48391955a574c1155fa.webp"
  },
  39449: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/carousel-uncaught.a92757620f569f31d7d2.webp"
  },
  39456: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/carousel.5fc13db7958067d6e1a3.webp"
  },
  39465: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/deadlock-uncaught.feadbdbbf2d040dce5c0.webp"
  },
  39467: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/deadlock.2bcaeaa57376fd78ddcb.webp"
  },
  39469: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/frost-revenant-uncaught.c0271636eeae988b1a40.webp"
  },
  39478: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/frost-revenant.fed6021646d7f0f81876.webp"
  },
  39487: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/hollow-choir-uncaught.7eaab76a15f82bd79558.webp"
  },
  39496: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/hollow-choir.05f9c51994aecece852a.webp"
  },
  39505: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/magma-warden-uncaught.5308736fbb8a503cdfc7.webp"
  },
  39514: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/magma-warden.cc4302a49a39ae962a31.webp"
  },
  39523: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/patient-zero-uncaught.1f9ec012a14c4dbdcc8f.webp"
  },
  39529: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/patient-zero.cc76984bb20e9f9ace76.webp"
  },
  39535: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/siege-engine-uncaught.88e0ad7fec37ba2b4a2e.webp"
  },
  39539: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/siege-engine.b2e2382e415f4ae470ac.webp"
  },
  39544: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/warp-stalker-uncaught.c3b1b82ecb18446b71b0.webp"
  },
  39547: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/warp-stalker.851972c629601b668aa7.webp"
  },
  38632: mm => {
    mm.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYElEQVR4nGNgIBIwovH/45JnRFaUGN+Comr+whq4GiZ0RVycnGAMAlAxsC0sMN2fvn9DodEBzEQGdUV5hvNnV4JpGJuPkwtTIQh4umZhZWMonDqjGCsbHcCCBkQjs0kDAPeaHpfX1eroAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);