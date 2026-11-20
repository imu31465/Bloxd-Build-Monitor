export const id = 14;
export const ids = [14];
export const modules = {
  36452: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => hb,
      e: () => ub,
      g: () => Yb,
      i: () => mb
    });
    var kb = sb(1033),
      Wb = sb.n(kb),
      ab = sb(64),
      Tb = sb(89),
      Ub = sb(1350),
      Ib = sb(1431),
      Hb = sb(1341),
      fb = sb(1278),
      Mb = sb(1197),
      Xb = sb(36455),
      nb = sb(1087);

    function mb(bb) {
      const [cb, sb] = (0, ab.useState)((() => (0, Xb.h)(bb)));
      return (0, ab.useEffect)((() => (sb((0, Xb.h)(bb)), (0, Xb.J)((() => {
        sb((0, Xb.h)(bb))
      })))), [bb]), cb
    }

    function lb(bb, cb) {
      "function" === typeof bb ? bb(cb) : bb && (bb.current = cb)
    }

    function Qb(bb) {
      let {
        tutorial: cb,
        step: sb,
        enabled: kb = !0
      } = bb;
      const Wb = mb(cb);
      return kb && Wb === sb
    }

    function eb(bb, cb) {
      const sb = (0, Xb.k)(bb),
        kb = sb.indexOf(cb);
      return !sb.slice(kb + 1).some((cb => (0, Xb.v)(bb, cb)))
    }

    function Cb(bb, cb, sb, kb) {
      let {
        tutorial: Wb,
        step: ab,
        waitForClick: Tb = !1,
        onPrevious: Ub
      } = bb;
      const Ib = cb && (0, Xb.s)(Wb, ab),
        Hb = cb && !eb(Wb, ab),
        Mb = Tb ? kb : sb;
      let nb = null;
      Ib ? nb = () => {
        null === Ub || void 0 === Ub || Ub(), (0, Xb.o)(Wb, ab)
      } : Hb && (nb = () => {
        (0, Xb.g)(Wb)
      }), (0, fb.o)("popup", null !== Mb && void 0 !== Mb ? Mb : sb, nb, cb && null !== Mb, null, Ib ? void 0 : "controller:menusSkipTutorial")
    }

    function Nb(bb) {
      let {
        tutorial: cb,
        step: sb,
        text: kb,
        waitForClick: Wb = !1,
        onPrevious: ab
      } = bb;
      const {
        t: Tb
      } = (0, Mb.E)(), Ub = eb(cb, sb);
      return (0, nb.jsxs)(nb.Fragment, {
        children: [(0, nb.jsx)("div", {
          className: "TutorialStepText",
          children: kb
        }), (0, nb.jsxs)("div", {
          className: "TutorialStepButtons",
          children: [(0, Xb.s)(cb, sb) && (0, nb.jsx)(Ib.h, {
            className: "TutorialStepButton",
            onClick: () => {
              null === ab || void 0 === ab || ab(), (0, Xb.o)(cb, sb)
            },
            children: Tb("tutorial:back")
          }), !Wb && (0, nb.jsx)(Ib.d, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, Xb.e)(sb)
            },
            padDefaultFocus: !0,
            children: Tb(Ub ? "tutorial:done" : "tutorial:next")
          }), !Ub && (0, nb.jsx)(Ib.h, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, Xb.g)(cb)
            },
            children: Tb("tutorial:skip")
          })]
        })]
      })
    }
    const Vb = 6;

    function Lb(bb) {
      let {
        rect: cb,
        margin: sb
      } = bb;
      const kb = Math.max(0, cb.top - sb),
        Wb = cb.bottom + sb,
        ab = Math.max(0, cb.left - sb),
        Tb = cb.right + sb;
      return (0, nb.jsxs)(nb.Fragment, {
        children: [(0, nb.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: 0,
            left: 0,
            right: 0,
            height: kb
          }
        }), (0, nb.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: Wb,
            left: 0,
            right: 0,
            bottom: 0
          }
        }), (0, nb.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: kb,
            left: 0,
            width: ab,
            height: Wb - kb
          }
        }), (0, nb.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: kb,
            left: Tb,
            right: 0,
            height: Wb - kb
          }
        })]
      })
    }

    function ub(bb) {
      let {
        target: cb,
        placement: sb,
        boxRef: kb,
        className: Ib,
        spotlightMargin: fb = Vb,
        children: Mb
      } = bb;
      const {
        getArrowProps: Xb,
        getTooltipProps: mb,
        setTooltipRef: lb,
        setTriggerRef: Qb
      } = (0, Ub.c)({
        placement: sb,
        trigger: null,
        visible: !0,
        interactive: !0,
        closeOnOutsideClick: !1,
        offset: [0, fb]
      });
      (0, ab.useLayoutEffect)((() => {
        Qb(cb)
      }), [cb, Qb]);
      const eb = function(bb, cb) {
        const [sb, kb] = (0, ab.useState)(null);
        return (0, ab.useEffect)((() => {
          if (!cb || !bb) return void kb(null);
          let sb = 0,
            Wb = null;
          const ab = () => {
            const cb = bb.getBoundingClientRect();
            Wb && cb.left === Wb.left && cb.top === Wb.top && cb.width === Wb.width && cb.height === Wb.height || (Wb = cb, kb(cb)), sb = requestAnimationFrame(ab)
          };
          return ab(), () => {
            cancelAnimationFrame(sb)
          }
        }), [bb, cb]), sb
      }(cb, !0);
      (0, ab.useEffect)((() => {
        null === cb || void 0 === cb || cb.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        })
      }), [cb]);
      const Cb = (0, ab.useCallback)((bb => {
        lb(bb), kb && (kb.current = bb)
      }), [lb, kb]);
      return (0, Tb.createPortal)((0, nb.jsxs)(nb.Fragment, {
        children: [eb && (0, nb.jsx)(Lb, {
          rect: eb,
          margin: fb
        }), (0, nb.jsxs)("div", {
          ref: Cb,
          ...mb({
            className: Wb()("tooltip-container SmallTextLight TutorialStep", Ib)
          }),
          children: [Mb, (0, nb.jsx)("div", {
            ...Xb({
              className: "tooltip-arrow"
            })
          })]
        })]
      }), (0, Hb.i)())
    }
    const Yb = (0, ab.forwardRef)((function(bb, cb) {
      let {
        placement: sb = "right",
        children: kb,
        ...Wb
      } = bb;
      const Tb = Qb(Wb),
        Ub = (0, ab.useRef)(null),
        Ib = (0, ab.useRef)(null);
      Cb(Wb, Tb, Ub, Ib);
      const [Hb, fb] = (0, ab.useState)(null), Mb = kb.ref, Xb = (0, ab.useCallback)((bb => {
        Ib.current = bb, fb(bb), lb(cb, bb), lb(Mb, bb)
      }), [cb, Mb]);
      return (0, nb.jsxs)(nb.Fragment, {
        children: [(0, ab.cloneElement)(kb, {
          ref: Xb
        }), Tb && (0, nb.jsx)(ub, {
          target: Hb,
          placement: sb,
          boxRef: Ub,
          children: (0, nb.jsx)(Nb, {
            ...Wb
          })
        })]
      })
    }));

    function hb(bb) {
      const cb = Qb(bb),
        sb = (0, ab.useRef)(null);
      return Cb(bb, cb, sb, null), cb ? (0, Tb.createPortal)((0, nb.jsx)("div", {
        className: "TutorialCentreBackdrop",
        children: (0, nb.jsx)("div", {
          ref: sb,
          className: "tooltip-container SmallTextLight TutorialStep TutorialCentreStep",
          children: (0, nb.jsx)(Nb, {
            ...bb
          })
        })
      }), (0, Hb.i)()) : null
    }
  },
  38152: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Tb
    });
    const kb = 4,
      Wb = 12e3,
      ab = 1e3;
    class Tb {
      constructor() {
        let {
          limit: bb = kb,
          windowMs: cb = Wb,
          spacingMs: sb = ab,
          now: Tb = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = bb, this.windowMs = cb, this.spacingMs = sb, this.now = Tb
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
          cb = this.lastSentAt + this.spacingMs,
          sb = Math.min(cb > bb ? cb : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        sb !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, sb - bb)))
      }
      notify() {
        for (const bb of this.listeners) bb()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  36247: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => ab,
      g: () => lb,
      i: () => Qb,
      l: () => Ub,
      n: () => Xb,
      o: () => eb,
      q: () => Mb,
      s: () => Nb,
      v: () => mb,
      z: () => Cb
    });
    var kb = sb(19),
      Wb = sb(26);
    const ab = "clientGameInventoryButtonsChanged",
      Tb = new Map;

    function Ub() {
      return [...Tb.values()].sort(((bb, cb) => {
        var sb, kb;
        return (null !== (sb = bb.order) && void 0 !== sb ? sb : 0) - (null !== (kb = cb.order) && void 0 !== kb ? kb : 0)
      }))
    }
    let Ib = null;

    function Hb(bb) {
      Ib = bb
    }
    let fb = !1;

    function Mb(bb) {
      fb = !0;
      try {
        bb.onClick()
      } finally {
        fb = !1
      }
      bb.panel && "clientGame" === kb.d.get("openInGameMenuName") && Hb(bb.id)
    }

    function Xb() {
      return fb
    }

    function nb() {
      return Ub().filter((bb => bb.panel && !bb.disabled))
    }

    function mb(bb) {
      const cb = nb(),
        sb = cb.findIndex((bb => bb.id === Ib));
      return !(sb < 0 || cb.length < 2) && (Mb(cb[(sb + bb + cb.length) % cb.length]), !0)
    }

    function lb() {
      return null !== Ib && nb().length > 1
    }

    function Qb() {
      Hb(null)
    }

    function eb() {
      "inventory" !== kb.d.get("openInGameMenuName") && Hb(null)
    }

    function Cb() {
      const bb = Ib;
      return Hb(null), bb
    }

    function Nb(bb) {
      return Tb.set(bb.id, bb), Wb.j.QQ(ab, Ub(), !0), () => {
        Tb.get(bb.id) === bb && (Tb.delete(bb.id), Wb.j.QQ(ab, Ub()))
      }
    }
  },
  38135: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => kb
    });
    class kb {
      constructor(bb, cb, sb) {
        this.QQ = bb, this.beforeOpen = cb, this.afterClose = sb, this.open = !1, this.Em = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.Em && (this.open = !0, this.beforeOpen(this), this.emit())
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
        this.open = !1, this.emit(), this.Em = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.Em || (this.snapshot = this.buildSnapshot(), this.QQ(this.snapshot))
      }
    }
  },
  36240: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Ub,
      e: () => Qb,
      g: () => eb,
      i: () => Xb,
      l: () => Hb,
      m: () => lb,
      p: () => nb,
      s: () => fb
    });
    var kb = sb(19),
      Wb = sb(26),
      ab = sb(1287),
      Tb = sb(36247);
    const Ub = "clientGameUiChanged";
    let Ib = null;

    function Hb() {
      return Ib
    }

    function fb(bb, cb) {
      const sb = {
        content: bb,
        menu: cb
      };
      return Ib = sb, Wb.j.QQ(Ub, Ib, !0), () => {
        Ib === sb && (Ib = null, mb = !1, Qb(), Wb.j.QQ(Ub, null))
      }
    }
    let Mb = null;

    function Xb() {
      return Mb
    }

    function nb(bb) {
      return Mb = bb, () => {
        Mb === bb && (Mb = null)
      }
    }
    let mb = !1;

    function lb() {
      const bb = kb.d.get("openInGameMenuName");
      "clientGame" !== bb && (mb = "inventory" === bb), (0, Tb.n)() || (0, Tb.i)(), (0, ab.n)(ab.b), kb.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function Qb() {
      Cb(!1)
    }

    function eb() {
      Cb(mb)
    }

    function Cb(bb) {
      "clientGame" === kb.d.get("openInGameMenuName") && kb.d.set({
        openInGameMenuName: bb ? "inventory" : null
      }), bb || (0, Tb.i)(), mb = !1
    }
  },
  38855: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      default: () => fs
    });
    var kb = sb(64);
    var Wb = sb(19),
      ab = sb(1851),
      Tb = sb(26),
      Ub = sb(36240),
      Ib = sb(1033),
      Hb = sb.n(Ib),
      fb = sb(1423),
      Mb = sb(1197),
      Xb = sb(4270),
      nb = sb(1330),
      mb = sb(1431),
      lb = sb(1858),
      Qb = sb(1341),
      eb = sb(1839),
      Cb = sb(1912),
      Nb = sb(232);
    const Vb = sb(38864),
      Lb = Object.fromEntries(Vb.keys().map((bb => [bb.replace(/^\.\/(.*)\.webp$/, "$1"), Vb(bb)]))),
      ub = new Set;

    function Yb(bb, cb) {
      const sb = cb ? bb : `${bb}-uncaught`,
        kb = (0, Nb.e)(Lb, sb);
      return void 0 !== kb || ub.has(sb) || (ub.add(sb), console.warn(`Containment Breach has no mugshot ${sb}: run tools/harnessCutouts/ContainmentMugshotCapture.ts`)), kb
    }
    var hb = sb(1087);
    const Jb = "containmentBreach",
      gb = "Gold Coin";

    function Bb(bb) {
      let {
        open: cb,
        onDismiss: sb,
        title: kb,
        className: Wb,
        decor: ab,
        headerExtra: Tb,
        status: Ub,
        statusRefused: Ib = !1,
        children: fb
      } = bb;
      const Mb = `${Wb}Title`;
      return (0, hb.jsx)(Xb.c, {
        show: cb,
        close: sb,
        togglePointerLock: !1,
        className: "ContainmentBoardOverlay",
        children: (0, hb.jsxs)("section", {
          className: Hb()("ContainmentBoardPanel", Wb),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": Mb,
          children: [ab && (0, hb.jsx)("div", {
            className: "BoardDecor",
            "aria-hidden": "true",
            children: ab
          }), (0, hb.jsxs)("header", {
            className: "BoardHeader",
            children: [(0, hb.jsx)("h2", {
              id: Mb,
              className: "VisuallyHidden",
              children: kb
            }), Tb, (0, hb.jsx)(mb.j, {
              onClick: sb
            })]
          }), (0, hb.jsx)("div", {
            className: "BoardBody",
            children: fb
          }), void 0 !== Ub && (0, hb.jsx)("footer", {
            className: Hb()("BoardStatus", {
              Refused: Ib
            }),
            children: Ub
          })]
        })
      })
    }

    function tb(bb) {
      let {
        itemName: cb
      } = bb;
      return (0, hb.jsx)(lb.d, {
        itemName: cb,
        amount: 0
      })
    }

    function yb(bb) {
      let {
        anomalyId: cb,
        caught: sb
      } = bb;
      const Wb = (0, kb.useRef)(null);
      return (0, nb.c)(Wb, !sb), (0, hb.jsx)("span", {
        ref: Wb,
        className: Hb()("BoardMugshot", {
          Uncaught: !sb
        }),
        children: (0, hb.jsx)("img", {
          src: Yb(cb, sb),
          alt: "",
          draggable: !1
        })
      })
    }

    function Pb(bb) {
      let {
        itemName: cb,
        amount: sb,
        qU: kb,
        inTile: Wb = !1
      } = bb;
      return (0, hb.jsx)(Qb.f, {
        delayShow: 200,
        hoverOnly: Wb,
        placement: "top",
        tooltipClassName: "BoardChipTooltipBox",
        tooltipInner: (0, hb.jsx)(Eb, {
          itemName: cb,
          amount: sb,
          qU: kb
        }),
        children: (0, hb.jsxs)("span", {
          className: Hb()("BoardChip", {
            Short: void 0 !== kb && kb < sb
          }),
          children: [(0, hb.jsx)("span", {
            className: "BoardChipIcon",
            children: (0, hb.jsx)(tb, {
              itemName: cb
            })
          }), sb.toLocaleString()]
        })
      })
    }
    const Db = /^(.*?)\s*Salvaged from (?:an? )?(.+?)\.?$/;

    function Eb(bb) {
      var cb;
      let {
        itemName: sb,
        amount: kb,
        qU: Wb
      } = bb;
      const {
        t: ab
      } = (0, Mb.E)(), Tb = (0, Cb.e)("itemInfo", (bb => bb[sb])), {
        lore: Ub,
        droppedBy: Ib
      } = function(bb) {
        if ("string" !== typeof bb) return {
          lore: bb,
          droppedBy: null
        };
        const cb = Db.exec(bb);
        return null === cb ? {
          lore: bb,
          droppedBy: null
        } : {
          lore: "" === cb[1] ? void 0 : cb[1],
          droppedBy: cb[2]
        }
      }(null === Tb || void 0 === Tb ? void 0 : Tb.description);
      return (0, hb.jsxs)("div", {
        className: "BoardChipTooltip",
        children: [(0, hb.jsxs)("div", {
          className: "BoardChipTooltipHeader",
          children: [(0, hb.jsx)("span", {
            className: "BoardChipTooltipIcon",
            children: (0, hb.jsx)(tb, {
              itemName: sb
            })
          }), (0, hb.jsx)(eb.d, {
            text: null !== (cb = null === Tb || void 0 === Tb ? void 0 : Tb.displayName) && void 0 !== cb ? cb : sb,
            className: "BoardChipTooltipName"
          })]
        }), (void 0 !== Ub || null !== Ib) && (0, hb.jsxs)("div", {
          className: "BoardChipTooltipBody",
          children: [void 0 !== Ub && (0, hb.jsx)(eb.d, {
            text: Ub,
            className: "BoardChipTooltipDescription"
          }), null !== Ib && (0, hb.jsxs)("span", {
            className: "BoardChipTooltipSource",
            children: [(0, hb.jsx)("span", {
              className: "BoardChipTooltipLabel",
              children: ab(`${Jb}:chipDroppedBy`)
            }), Ib]
          })]
        }), void 0 !== Wb && (0, hb.jsxs)("div", {
          className: Hb()("BoardChipTooltipHeld", {
            Short: Wb < kb
          }),
          children: [(0, hb.jsx)("span", {
            className: "BoardChipTooltipLabel",
            children: ab(`${Jb}:chipYouHave`)
          }), (0, hb.jsxs)("span", {
            className: "BoardChipTooltipCount",
            children: [(0, hb.jsx)("span", {
              className: "BoardChipTooltipHeldAmount",
              children: Wb.toLocaleString()
            }), ` / ${kb.toLocaleString()}`]
          }), (0, hb.jsx)("span", {
            className: "BoardChipTooltipMeter",
            children: (0, hb.jsx)("span", {
              style: {
                width: (kb > 0 ? 100 * Math.min(1, Wb / kb) : 100) + "%"
              }
            })
          })]
        })]
      })
    }

    function ib(bb) {
      let {
        icon: cb,
        name: sb,
        selected: kb,
        locked: Wb,
        className: ab,
        buttonRef: Tb,
        onSelect: Ub,
        children: Ib
      } = bb;
      return (0, hb.jsxs)("button", {
        ref: Tb,
        type: "button",
        className: Hb()("BoardTile", ab, {
          Selected: kb,
          Locked: Wb
        }),
        onClick: Ub,
        children: [(0, hb.jsx)("span", {
          className: "BoardTileIcon",
          children: cb
        }), (0, hb.jsx)("span", {
          className: "BoardTileName",
          children: sb
        }), Ib]
      })
    }

    function Ob(bb) {
      let {
        icon: cb,
        name: sb,
        children: kb
      } = bb;
      return (0, hb.jsxs)("header", {
        className: "BoardDetailHeader",
        children: [(0, hb.jsx)("span", {
          className: "BoardDetailIcon",
          children: cb
        }), (0, hb.jsxs)("div", {
          className: "BoardDetailHeading",
          children: [(0, hb.jsx)("h3", {
            children: sb
          }), (0, hb.jsx)("span", {
            className: "BoardDetailStatus",
            children: kb
          })]
        })]
      })
    }

    function Gb(bb) {
      let {
        coins: cb,
        children: sb
      } = bb;
      return (0, hb.jsxs)("div", {
        className: "BoardWallet",
        children: [(0, hb.jsx)(Pb, {
          itemName: gb,
          amount: cb
        }), sb]
      })
    }
    var Kb = sb(38135);
    const Zb = "containmentCodexView";
    class zb extends Kb.e {
      constructor() {
        super(...arguments), this.entries = [], this.selectedId = "", this.snapshot = this.buildSnapshot(), this.select = bb => {
          this.selectedId = bb, this.emit()
        }
      }
      Km(bb) {
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
    const qb = {
        codexAnyDifficulty: `${Jb}:codexNeedsAny`,
        codexNormalOnly: `${Jb}:codexNeedsNormal`,
        codexHardOnly: `${Jb}:codexNeedsHard`
      },
      db = {
        codexContained: "Contained",
        codexEncountered: "Sighted",
        codexUnidentified: "Unknown"
      },
      Ab = {
        codexContained: `${Jb}:codexContainedBadge`,
        codexEncountered: `${Jb}:codexEncounteredBadge`,
        codexUnidentified: `${Jb}:codexUnidentifiedBadge`
      },
      wb = ["94%", "81%", "88%", "46%", "72%"];

    function rb(bb) {
      let {
        entry: cb
      } = bb;
      const {
        t: sb
      } = (0, Mb.E)();
      return (0, hb.jsx)("span", {
        className: Hb()("BoardBadge", db[cb.codexEntryState]),
        children: sb(Ab[cb.codexEntryState])
      })
    }

    function ob(bb) {
      const {
        t: cb
      } = (0, Mb.E)();
      return "codexUnidentified" === bb.codexEntryState ? cb(`${Jb}:codexUnidentifiedName`) : bb.codexEntryName
    }

    function Sb(bb) {
      let {
        entry: cb
      } = bb;
      return "codexUnidentified" === cb.codexEntryState ? (0, hb.jsx)(tb, {
        itemName: "Book"
      }) : (0, hb.jsxs)("span", {
        className: "CodexPhoto",
        children: [(0, hb.jsx)(yb, {
          anomalyId: cb.codexEntryId,
          caught: "codexContained" === cb.codexEntryState
        }), (0, hb.jsx)("img", {
          className: "CodexPaperclip",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAMCAYAAACulacQAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGNggIIXb97/X7V57/+Wvtn/GZDBqs17UQTgClahScBATHrlf5ySeHWimo9NMbokCp9OkmD/oasGCaJLAAC5ZUIBS85GiAAAAABJRU5ErkJggg==",
          alt: "",
          draggable: !1
        })]
      })
    }

    function Rb(bb) {
      let {
        entry: cb,
        selected: sb,
        onSelect: kb
      } = bb;
      const Wb = "codexUnidentified" === cb.codexEntryState;
      return (0, hb.jsxs)(ib, {
        icon: (0, hb.jsx)(Sb, {
          entry: cb
        }),
        name: ob(cb),
        selected: sb,
        locked: Wb,
        className: Hb()("CodexFolder", db[cb.codexEntryState]),
        onSelect: () => {
          kb(cb.codexEntryId)
        },
        children: [!Wb && (0, hb.jsx)(rb, {
          entry: cb
        }), Wb && (0, hb.jsx)("img", {
          className: "CodexSeal",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAARElEQVR4nGNggIIGHp7/MAzjw+TAnMf+/mB8RkQEjOGKYZLIgsiK4AqQJZA1gBXAOHgVwCRQJJEdCVOEYj8yQPciTAEAz0hgyamUqskAAAAASUVORK5CYII=",
          alt: "",
          draggable: !1
        })]
      })
    }

    function vb(bb) {
      let {
        count: cb
      } = bb;
      const sb = [];
      for (let kb = Math.min(cb, 25); kb > 0; kb -= 5) sb.push(Math.min(kb, 5));
      return (0, hb.jsx)("span", {
        className: "CodexTallyMarks",
        "aria-hidden": "true",
        children: sb.map(((bb, cb) => (0, hb.jsx)("span", {
          className: Hb()("CodexTallyGroup", {
            Gate: 5 === bb
          }),
          children: Array.from({
            length: Math.min(bb, 4)
          }, ((bb, cb) => (0, hb.jsx)("span", {
            className: "CodexTallyMark"
          }, cb)))
        }, cb)))
      })
    }

    function Fb(bb) {
      let {
        contained: cb,
        total: sb
      } = bb;
      const {
        t: kb
      } = (0, Mb.E)();
      return (0, hb.jsxs)("div", {
        className: "CodexProgress",
        children: [kb(`${Jb}:codexProgress`, {
          contained: String(cb),
          total: String(sb)
        }), (0, hb.jsx)("span", {
          className: "CodexProgressMeter",
          children: (0, hb.jsx)("span", {
            style: {
              width: cb / sb * 100 + "%"
            }
          })
        })]
      })
    }

    function xb(bb) {
      let {
        entry: cb,
        fileNumber: sb
      } = bb;
      const {
        t: kb
      } = (0, Mb.E)(), Wb = "codexContained" === cb.codexEntryState;
      return (0, hb.jsx)("section", {
        className: "BoardDetail",
        children: (0, hb.jsxs)("article", {
          className: Hb()("CodexDossier", db[cb.codexEntryState]),
          children: [(0, hb.jsx)("span", {
            className: "CodexFileNumber",
            children: kb(`${Jb}:codexFileNumber`, {
              number: String(sb).padStart(3, "0")
            })
          }), (0, hb.jsx)(Ob, {
            icon: (0, hb.jsx)(Sb, {
              entry: cb
            }),
            name: ob(cb),
            children: (0, hb.jsx)(rb, {
              entry: cb
            })
          }), Wb && (0, hb.jsxs)(hb.Fragment, {
            children: [(0, hb.jsx)("p", {
              className: "BoardDescription",
              children: cb.codexEntryLore
            }), (0, hb.jsxs)("p", {
              className: "CodexTally",
              children: [kb(`${Jb}:codexContainments`, {
                count: String(cb.codexEntryContainedCount)
              }), (0, hb.jsx)(vb, {
                count: cb.codexEntryContainedCount
              })]
            }), (0, hb.jsx)("span", {
              className: "CodexClosedStamp",
              "aria-hidden": "true",
              children: kb(`${Jb}:codexContainedBadge`)
            })]
          }), !Wb && (0, hb.jsxs)(hb.Fragment, {
            children: [(0, hb.jsxs)("div", {
              className: "CodexRedaction",
              children: [wb.map((bb => (0, hb.jsx)("span", {
                className: "CodexRedactedLine",
                style: {
                  width: bb
                }
              }, bb))), (0, hb.jsx)("p", {
                className: "CodexRedacted",
                children: kb(`${Jb}:codexRedacted`)
              })]
            }), "" !== cb.codexEntryHint && (0, hb.jsxs)("aside", {
              className: "CodexNote",
              children: [(0, hb.jsx)("h4", {
                children: kb(`${Jb}:codexHintLabel`)
              }), (0, hb.jsx)("p", {
                children: cb.codexEntryHint
              })]
            }), (0, hb.jsx)("p", {
              className: "CodexClearance",
              children: kb(qb[cb.codexEntryDifficulty])
            })]
          })]
        })
      })
    }

    function jb(bb) {
      let {
        controller: cb
      } = bb;
      const sb = (0, fb.h)(Zb, cb.getSnapshot()),
        {
          t: kb
        } = (0, Mb.E)();
      if (0 === sb.entries.length) return null;
      const Wb = sb.entries.find((bb => bb.codexEntryId === sb.selectedId)),
        ab = sb.entries.filter((bb => "codexContained" === bb.codexEntryState)).length,
        Tb = sb.entries.map((bb => bb.codexEntryId)).sort().indexOf(Wb.codexEntryId) + 1;
      return (0, hb.jsxs)(Bb, {
        open: sb.open,
        onDismiss: cb.dismiss,
        title: kb(`${Jb}:codexTitle`),
        className: "ContainmentCodexPanel",
        headerExtra: (0, hb.jsx)(Fb, {
          contained: ab,
          total: sb.entries.length
        }),
        children: [(0, hb.jsx)("div", {
          className: "BoardTiles",
          children: sb.entries.map((bb => (0, hb.jsx)(Rb, {
            entry: bb,
            selected: bb === Wb,
            onSelect: cb.select
          }, bb.codexEntryId)))
        }), (0, hb.jsx)(xb, {
          entry: Wb,
          fileNumber: Tb
        })]
      })
    }
    var pb = sb(344);
    class bc extends Kb.e {
      constructor(bb, cb, sb, kb, Wb, ab) {
        super(bb, cb, sb), this.pacer = kb, this.command = Wb, this.predict = ab, this.board = null, this.confirmed = null, this.selectedId = "", this.notice = null, this.unsubscribePacer = void 0, this.select = bb => {
          this.selectedId = bb, this.emit()
        }, this.act = (bb, cb) => {
          if (!this.open || null === this.board || !this.pacer.send(`${this.command} ${bb} ${cb}`, this.rollBack)) return;
          const sb = this.predict(this.board, bb, cb);
          null !== sb && (this.board = sb.board, this.notice = sb.notice, this.emit())
        }, this.rollBack = () => {
          this.board !== this.confirmed && (this.board = this.confirmed, this.notice = null)
        }, this.unsubscribePacer = kb.subscribe((() => {
          this.emit()
        }))
      }
      Km(bb) {
        const cb = this.messageOpens(bb);
        if (cb && this.open) return this.board === this.confirmed && (this.board = bb), this.confirmed = bb, void this.emit();
        if (this.board = bb, this.confirmed = bb, this.pacer.onReply(), cb) return this.notice = null, this.selectedId = this.openingSelection(bb), void this.show();
        const sb = this.messageNotice(bb);
        null !== sb && (this.notice = sb), this.emit()
      }
      dispose() {
        this.unsubscribePacer(), super.dispose()
      }
      onClosed() {
        this.notice = null
      }
    }

    function cc(bb, cb) {
      return bb.loadoutCoins >= cb.loadoutCostCoins && cb.loadoutCostParts.every((cb => function(bb, cb) {
        return sc(bb, cb).loadoutHeldPartAmount
      }(bb, cb.loadoutPartCurrency) >= cb.loadoutPartAmount))
    }

    function sc(bb, cb) {
      return bb.loadoutHeldParts.find((bb => bb.loadoutHeldPartCurrency === cb))
    }

    function kc(bb, cb) {
      return bb.loadoutSlots.find((bb => bb.loadoutSlotKind === cb))
    }

    function Wc(bb) {
      return bb.loadoutPerks.filter((bb => bb.loadoutPerkEquipped)).length >= bb.loadoutMaxPerks
    }

    function ac(bb, cb, sb) {
      for (const Wb of bb.loadoutSlots) {
        const kb = Wb.loadoutSlotOptions.find((bb => bb.loadoutOptionId === sb));
        if (kb) return "loadoutArmour" === Wb.loadoutSlotKind ? Uc(bb, Wb, kb, cb) : Tc(bb, Wb, kb, cb)
      }
      const kb = bb.loadoutPerks.find((bb => bb.loadoutPerkId === sb));
      return kb ? function(bb, cb, sb) {
        const kb = cb.loadoutPerkOwned,
          Wb = cb.loadoutPerkEquipped,
          ab = cb.loadoutPerkName,
          Tb = Wc(bb);
        if ("loadoutUnlock" === sb) {
          if (kb || !cc(bb, cb.loadoutPerkCost)) return null;
          const sb = {
            ...cb,
            loadoutPerkOwned: !0,
            loadoutPerkEquipped: !Tb
          };
          return {
            board: Hc(fc(bb, cb.loadoutPerkCost), sb),
            notice: Mc(Tb ? "loadoutNoticeUnlockedNoRoom" : "loadoutNoticeUnlocked", ab)
          }
        }
        if ("loadoutUpgrade" === sb || !kb || "loadoutEquip" === sb === Wb || !Wb && Tb) return null;
        return {
          board: Hc(bb, {
            ...cb,
            loadoutPerkEquipped: !Wb
          }),
          notice: Mc(Wb ? "loadoutNoticeUnequipped" : "loadoutNoticeEquipped", ab)
        }
      }(bb, kb, cb) : null
    }

    function Tc(bb, cb, sb, kb) {
      const Wb = sb.loadoutOptionOwnedTier,
        ab = sb.loadoutOptionName;
      if ("loadoutEquip" === kb) return 0 === Wb ? null : {
        board: Ic(bb, cb, sb.loadoutOptionId, null),
        notice: Mc("loadoutNoticeEquipped", ab)
      };
      const Tb = "loadoutUnlock" === kb;
      if (Tb && 0 !== Wb || "loadoutUpgrade" === kb && (0 === Wb || Wb >= sb.loadoutOptionTiers.length) || "loadoutUnequip" === kb) return null;
      const Ub = sb.loadoutOptionTiers[Wb].loadoutTierCost;
      if (!cc(bb, Ub)) return null;
      const Ib = {
          ...sb,
          loadoutOptionOwnedTier: Wb + 1
        },
        Hb = Tb ? sb.loadoutOptionId : cb.loadoutSlotEquippedId;
      return {
        board: Ic(fc(bb, Ub), cb, Hb, Ib),
        notice: Tb ? Mc("loadoutNoticeUnlocked", ab) : Mc("loadoutNoticeUpgraded", ab, Wb + 1)
      }
    }

    function Uc(bb, cb, sb, kb) {
      const Wb = sb.loadoutOptionOwnedTier > 0,
        ab = sb.loadoutOptionName;
      if ("loadoutEquip" === kb && Wb) return {
        board: Ic(bb, cb, sb.loadoutOptionId, null),
        notice: Mc("loadoutNoticeEquipped", ab)
      };
      const Tb = sb.loadoutOptionTiers[0].loadoutTierCost;
      return "loadoutUnlock" !== kb || Wb || !cc(bb, Tb) ? null : {
        board: Ic(fc(bb, Tb), cb, sb.loadoutOptionId, {
          ...sb,
          loadoutOptionOwnedTier: 1
        }),
        notice: Mc("loadoutNoticeUnlocked", ab)
      }
    }

    function Ic(bb, cb, sb, kb) {
      const Wb = {
        ...cb,
        loadoutSlotEquippedId: sb,
        loadoutSlotOptions: cb.loadoutSlotOptions.map((bb => null !== kb && bb.loadoutOptionId === kb.loadoutOptionId ? kb : bb))
      };
      return {
        ...bb,
        loadoutSlots: bb.loadoutSlots.map((bb => bb === cb ? Wb : bb))
      }
    }

    function Hc(bb, cb) {
      return {
        ...bb,
        loadoutPerks: bb.loadoutPerks.map((bb => bb.loadoutPerkId === cb.loadoutPerkId ? cb : bb))
      }
    }

    function fc(bb, cb) {
      return {
        ...bb,
        loadoutCoins: bb.loadoutCoins - cb.loadoutCostCoins,
        loadoutHeldParts: bb.loadoutHeldParts.map((bb => {
          const sb = cb.loadoutCostParts.find((cb => cb.loadoutPartCurrency === bb.loadoutHeldPartCurrency));
          return sb ? {
            ...bb,
            loadoutHeldPartAmount: bb.loadoutHeldPartAmount - sb.loadoutPartAmount
          } : bb
        }))
      }
    }

    function Mc(bb, cb) {
      return {
        loadoutNoticeKey: bb,
        loadoutNoticeRefused: !1,
        loadoutNoticeName: cb,
        loadoutNoticeTier: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
      }
    }
    const Xc = "containmentLoadoutView";
    class nc extends bc {
      constructor(bb, cb, sb, kb) {
        super(bb, cb, sb, kb, "loadout", ac), this.slot = "loadoutPrimary", this.snapshot = this.buildSnapshot(), this.selectSlot = bb => {
          this.slot = bb, this.selectedId = mc(this.board, bb), this.emit()
        }
      }
      messageOpens(bb) {
        return bb.loadoutMessageOpens
      }
      messageNotice(bb) {
        return bb.loadoutNotice
      }
      openingSelection(bb) {
        return mc(bb, this.slot)
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

    function mc(bb, cb) {
      if ("loadoutPerks" === cb) {
        var sb;
        const cb = bb.loadoutPerks;
        return (null !== (sb = cb.find((bb => bb.loadoutPerkEquipped))) && void 0 !== sb ? sb : cb[0]).loadoutPerkId
      }
      return kc(bb, cb).loadoutSlotEquippedId
    }
    const lc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAY0lEQVR4nGNgIAP8x4FRwP/sFt3/EYU6YBqGIwp1MBSDBUH4/3nW//83csD5DOgKfeKNsWIMhV+///qvbOT7/87cMjCG8TEUgiSLqlpRMEgMQ+HJvgy4aTAMEsPqc2KChyAAAFxNbnylK5O6AAAAAElFTkSuQmCC";
    var Qc = sb(36452),
      ec = sb(1278);
    const Cc = {
        loadoutPrimary: `${Jb}:loadoutSlotPrimary`,
        loadoutSecondary: `${Jb}:loadoutSlotSecondary`,
        loadoutOffensive: `${Jb}:loadoutSlotOffensive`,
        loadoutSelfHelp: `${Jb}:loadoutSlotSelfHelp`,
        loadoutArmour: `${Jb}:loadoutSlotArmour`,
        loadoutPerks: `${Jb}:loadoutSlotPerks`
      },
      Nc = {
        section: "right",
        Wn: "bottom",
        act: "top"
      },
      Vc = (0, kb.createContext)({
        step: null,
        targetRef: () => {}
      });

    function Lc() {
      const {
        step: bb,
        targetRef: cb
      } = (0, kb.useContext)(Vc);
      return (sb, kb) => (null === bb || void 0 === bb ? void 0 : bb.kind) === sb && bb.id === kb ? cb : void 0
    }

    function uc(bb, cb) {
      const sb = cb.loadoutTargetId;
      if ("loadoutPerks" === cb.loadoutTargetSection) {
        const cb = bb.loadoutPerks.find((bb => bb.loadoutPerkId === sb));
        return {
          name: cb.loadoutPerkName,
          owned: cb.loadoutPerkOwned,
          equipped: cb.loadoutPerkEquipped
        }
      }
      const kb = kc(bb, cb.loadoutTargetSection),
        Wb = kb.loadoutSlotOptions.find((bb => bb.loadoutOptionId === sb));
      return {
        name: Wb.loadoutOptionName,
        owned: Wb.loadoutOptionOwnedTier > 0,
        equipped: kb.loadoutSlotEquippedId === sb
      }
    }

    function Yc(bb, cb, sb, kb) {
      const [Wb, ab] = bb(`${Jb}:${cb}`, {
        [sb]: "\x01"
      }).split("\x01");
      return (0, hb.jsxs)(hb.Fragment, {
        children: [Wb, (0, hb.jsx)("span", {
          className: "LoadoutWalkthroughName",
          children: kb
        }), ab]
      })
    }

    function hc(bb) {
      let {
        view: cb,
        onDismiss: sb,
        children: Wb
      } = bb;
      const {
        t: ab
      } = (0, Mb.E)(), Tb = cb.loadout, Ub = cb.open ? Tb.loadoutWalkthrough.map((bb => ({
        target: bb,
        info: uc(Tb, bb)
      }))).find((bb => {
        let {
          info: cb
        } = bb;
        return !cb.equipped
      })) : void 0;
      let Ib = null,
        Hb = null;
      if (void 0 !== Ub) {
        const {
          target: bb,
          info: sb
        } = Ub;
        cb.slot !== bb.loadoutTargetSection ? (Ib = {
          kind: "section",
          id: bb.loadoutTargetSection
        }, Hb = Yc(ab, "loadoutWalkthroughSection", "section", ab(Cc[bb.loadoutTargetSection]))) : cb.selectedId !== bb.loadoutTargetId ? (Ib = {
          kind: "Wn",
          id: bb.loadoutTargetId
        }, Hb = Yc(ab, "loadoutWalkthroughPick", "name", sb.name)) : (Ib = {
          kind: "act",
          id: bb.loadoutTargetId
        }, Hb = Yc(ab, sb.owned ? "loadoutWalkthroughEquip" : "loadoutWalkthroughUnlock", "name", sb.name))
      }
      const fb = null === Ib ? null : function(bb) {
          return `${bb.kind}:${bb.id}`
        }(Ib),
        [Xb, nb] = (0, kb.useState)(null),
        mb = (0, kb.useCallback)((bb => {
          nb((cb => null !== bb ? {
            key: fb,
            node: bb
          } : (null === cb || void 0 === cb ? void 0 : cb.key) === fb ? null : cb))
        }), [fb]),
        lb = null !== fb && (null === Xb || void 0 === Xb ? void 0 : Xb.key) === fb ? Xb.node : null;
      return (0, hb.jsxs)(Vc.Provider, {
        value: {
          step: Ib,
          targetRef: mb
        },
        children: [Wb, null !== Ib && null !== lb && (0, hb.jsx)(Jc, {
          target: lb,
          placement: Nc[Ib.kind],
          onDismiss: sb,
          children: Hb
        }, fb)]
      })
    }

    function Jc(bb) {
      let {
        target: cb,
        placement: sb,
        onDismiss: Wb,
        children: ab
      } = bb;
      const {
        t: Tb
      } = (0, Mb.E)(), Ub = (0, kb.useRef)(cb);
      return Ub.current = cb, (0, ec.o)("popup", Ub, Wb), (0, hb.jsxs)(Qc.e, {
        target: cb,
        placement: sb,
        className: "LoadoutWalkthroughStep",
        spotlightMargin: 10,
        children: [(0, hb.jsxs)("div", {
          className: "LoadoutWalkthroughHeader",
          children: [(0, hb.jsx)("img", {
            className: "LoadoutWalkthroughPortrait",
            src: lc,
            alt: "",
            draggable: !1
          }), (0, hb.jsx)("span", {
            className: "LoadoutWalkthroughSpeaker",
            children: Tb(`${Jb}:operatorName`)
          }), (0, hb.jsx)(mb.j, {
            onClick: Wb,
            ariaLabel: Tb(`${Jb}:loadoutWalkthroughClose`),
            padIgnore: !0
          })]
        }), (0, hb.jsx)("p", {
          className: "LoadoutWalkthroughText",
          children: ab
        })]
      })
    }
    const gc = new Set(["loadoutStatReload", "loadoutStatResupply"]);

    function Bc(bb) {
      let {
        cost: cb,
        loadout: sb
      } = bb;
      const {
        t: kb
      } = (0, Mb.E)();
      return cb.loadoutCostCoins <= 0 && 0 === cb.loadoutCostParts.length ? (0, hb.jsx)("span", {
        className: "LoadoutCost",
        children: kb(`${Jb}:loadoutFree`)
      }) : (0, hb.jsxs)("span", {
        className: "LoadoutCost",
        children: [cb.loadoutCostCoins > 0 && (0, hb.jsx)(Pb, {
          itemName: gb,
          amount: cb.loadoutCostCoins,
          qU: sb.loadoutCoins
        }), cb.loadoutCostParts.map((bb => {
          const cb = sc(sb, bb.loadoutPartCurrency);
          return (0, hb.jsx)(Pb, {
            itemName: cb.loadoutHeldPartItem,
            amount: bb.loadoutPartAmount,
            qU: cb.loadoutHeldPartAmount
          }, bb.loadoutPartCurrency)
        }))]
      })
    }
    const tc = {
      loadoutStatFireRate: `${Jb}:loadoutUnitPerMinute`,
      loadoutStatReload: `${Jb}:loadoutUnitSeconds`,
      loadoutStatResupply: `${Jb}:loadoutUnitSeconds`
    };

    function yc(bb) {
      return "loadoutStatPotency" === bb.loadoutStatKind ? (0, pb.Q)(bb.loadoutStatValue) : String(bb.loadoutStatValue)
    }

    function Pc(bb) {
      var cb;
      let {
        option: sb
      } = bb;
      const {
        t: kb
      } = (0, Mb.E)(), Wb = sb.loadoutOptionTiers, ab = null === (cb = Wb[0]) || void 0 === cb ? void 0 : cb.loadoutTierStats.map((bb => bb.loadoutStatKind));
      if (!ab || 0 === ab.length) return null;
      const Tb = sb.loadoutOptionOwnedTier,
        Ub = (bb, cb) => {
          var sb;
          return null === (sb = Wb[bb]) || void 0 === sb ? void 0 : sb.loadoutTierStats.find((bb => bb.loadoutStatKind === cb))
        };
      return (0, hb.jsxs)("table", {
        className: "LoadoutTierTable",
        children: [(0, hb.jsx)("thead", {
          children: (0, hb.jsxs)("tr", {
            children: [(0, hb.jsx)("th", {}), Wb.map(((bb, cb) => (0, hb.jsx)("th", {
              className: Hb()({
                Current: cb + 1 === Tb,
                Next: cb === Tb
              }),
              children: kb(`${Jb}:loadoutTier`, {
                tier: (0, pb.Q)(cb + 1)
              })
            }, cb)))]
          })
        }), (0, hb.jsx)("tbody", {
          children: ab.map((bb => {
            const cb = tc[bb];
            return (0, hb.jsxs)("tr", {
              children: [(0, hb.jsxs)("th", {
                scope: "row",
                children: [kb(`${Jb}:${bb}`), cb && (0, hb.jsx)("span", {
                  className: "LoadoutStatUnit",
                  children: kb(cb)
                })]
              }), Wb.map(((cb, sb) => {
                const kb = Ub(sb, bb),
                  Wb = sb > 0 ? Ub(sb - 1, bb) : void 0,
                  ab = kb && Wb ? kb.loadoutStatValue - Wb.loadoutStatValue : 0,
                  Ib = gc.has(bb) ? ab < 0 : ab > 0,
                  fb = sb === Tb;
                return (0, hb.jsxs)("td", {
                  className: Hb()({
                    Current: sb + 1 === Tb,
                    Next: fb,
                    Gain: Ib,
                    Owned: sb < Tb
                  }),
                  children: [fb && Ib && (0, hb.jsx)("span", {
                    className: "LoadoutGainArrow",
                    "aria-hidden": "true",
                    children: ab < 0 ? "\u25bc" : "\u25b2"
                  }), kb ? yc(kb) : "-"]
                }, sb)
              }))]
            }, bb)
          }))
        })]
      })
    }

    function Dc(bb) {
      let {
        view: cb,
        controller: sb,
        slot: kb,
        option: Wb
      } = bb;
      const {
        t: ab
      } = (0, Mb.E)(), Tb = cb.loadout, Ub = Wb.loadoutOptionOwnedTier, Ib = Wb.loadoutOptionTiers.length, Hb = kb.loadoutSlotEquippedId === Wb.loadoutOptionId, fb = Ub < Ib ? Wb.loadoutOptionTiers[Ub].loadoutTierCost : null, Xb = null !== fb && cc(Tb, fb), nb = Wb.loadoutOptionId, lb = Lc();
      return (0, hb.jsxs)(hb.Fragment, {
        children: [(0, hb.jsx)(ic, {
          icon: Wb.loadoutOptionIcon,
          name: Wb.loadoutOptionName,
          status: 0 === Ub ? ab(`${Jb}:loadoutLocked`) : Ib > 1 ? ab(`${Jb}:loadoutTier`, {
            tier: (0, pb.Q)(Ub)
          }) : null,
          locked: 0 === Ub,
          equipped: Hb
        }), (0, hb.jsx)("p", {
          className: "BoardDescription",
          children: Wb.loadoutOptionDescription
        }), (0, hb.jsx)(Pc, {
          option: Wb
        }), (0, hb.jsxs)("div", {
          ref: lb("act", nb),
          className: "BoardActions",
          children: [null !== fb && (0, hb.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, hb.jsx)(Bc, {
              cost: fb,
              loadout: Tb
            }), (0, hb.jsx)(mb.n, {
              disabled: !Xb || cb.pending,
              onClick: () => {
                sb.act(0 === Ub ? "loadoutUnlock" : "loadoutUpgrade", nb)
              },
              children: 0 === Ub ? ab(`${Jb}:loadoutUnlock`) : ab(`${Jb}:loadoutUpgrade`, {
                tier: (0, pb.Q)(Ub + 1)
              })
            })]
          }), null === fb && Ib > 1 && (0, hb.jsx)("span", {
            className: "BoardHint",
            children: ab(`${Jb}:loadoutMaxed`)
          }), Ub > 0 && !Hb && (0, hb.jsx)(mb.d, {
            disabled: cb.pending,
            onClick: () => {
              sb.act("loadoutEquip", nb)
            },
            children: ab(`${Jb}:loadoutEquip`)
          })]
        })]
      })
    }

    function Ec(bb) {
      let {
        view: cb,
        controller: sb,
        perk: kb
      } = bb;
      const {
        t: Wb
      } = (0, Mb.E)(), ab = cb.loadout, Tb = Wc(ab), Ub = kb.loadoutPerkId, Ib = Lc();
      return (0, hb.jsxs)(hb.Fragment, {
        children: [(0, hb.jsx)(ic, {
          icon: kb.loadoutPerkIcon,
          name: kb.loadoutPerkName,
          status: kb.loadoutPerkOwned ? null : Wb(`${Jb}:loadoutLocked`),
          locked: !kb.loadoutPerkOwned,
          equipped: kb.loadoutPerkEquipped
        }), (0, hb.jsx)("p", {
          className: "BoardDescription",
          children: kb.loadoutPerkDescription
        }), (0, hb.jsxs)("div", {
          ref: Ib("act", Ub),
          className: "BoardActions",
          children: [!kb.loadoutPerkOwned && (0, hb.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, hb.jsx)(Bc, {
              cost: kb.loadoutPerkCost,
              loadout: ab
            }), (0, hb.jsx)(mb.n, {
              disabled: !cc(ab, kb.loadoutPerkCost) || cb.pending,
              onClick: () => {
                sb.act("loadoutUnlock", Ub)
              },
              children: Wb(`${Jb}:loadoutUnlock`)
            })]
          }), kb.loadoutPerkOwned && !kb.loadoutPerkEquipped && (0, hb.jsx)(mb.d, {
            disabled: Tb || cb.pending,
            onClick: () => {
              sb.act("loadoutEquip", Ub)
            },
            children: Wb(`${Jb}:loadoutEquip`)
          }), kb.loadoutPerkOwned && !kb.loadoutPerkEquipped && Tb && (0, hb.jsx)("span", {
            className: "BoardHint",
            children: Wb(`${Jb}:loadoutSocketsFullHint`)
          }), kb.loadoutPerkEquipped && (0, hb.jsx)(mb.M, {
            disabled: cb.pending,
            onClick: () => {
              sb.act("loadoutUnequip", Ub)
            },
            children: Wb(`${Jb}:loadoutUnequip`)
          })]
        })]
      })
    }

    function ic(bb) {
      let {
        icon: cb,
        name: sb,
        status: kb,
        locked: Wb,
        equipped: ab
      } = bb;
      const {
        t: Tb
      } = (0, Mb.E)();
      return (0, hb.jsxs)(Ob, {
        icon: (0, hb.jsx)(tb, {
          itemName: cb
        }),
        name: sb,
        children: [null !== kb && (0, hb.jsx)("span", {
          className: Hb()("LoadoutStatusText", {
            Locked: Wb
          }),
          children: kb
        }), ab && (0, hb.jsx)("span", {
          className: "BoardBadge",
          children: Tb(`${Jb}:loadoutEquippedBadge`)
        })]
      })
    }

    function Oc(bb) {
      let {
        view: cb,
        controller: sb
      } = bb;
      const kb = cb.loadout;
      if ("loadoutPerks" === cb.slot) {
        const bb = kb.loadoutPerks.find((bb => bb.loadoutPerkId === cb.selectedId));
        return (0, hb.jsx)("section", {
          className: "BoardDetail",
          children: bb && (0, hb.jsx)(Ec, {
            view: cb,
            controller: sb,
            perk: bb
          })
        })
      }
      const Wb = kc(kb, cb.slot),
        ab = Wb.loadoutSlotOptions.find((bb => bb.loadoutOptionId === cb.selectedId));
      return (0, hb.jsx)("section", {
        className: "BoardDetail",
        children: ab && (0, hb.jsx)(Dc, {
          view: cb,
          controller: sb,
          slot: Wb,
          option: ab
        })
      })
    }

    function Gc(bb) {
      let {
        owned: cb,
        total: sb
      } = bb;
      return sb <= 1 ? null : (0, hb.jsx)("span", {
        className: "LoadoutPips",
        children: Array.from({
          length: sb
        }, ((bb, sb) => (0, hb.jsx)("span", {
          className: Hb()("LoadoutPip", {
            Filled: sb < cb
          })
        }, sb)))
      })
    }

    function Kc(bb) {
      let {
        view: cb,
        controller: sb
      } = bb;
      const {
        t: kb
      } = (0, Mb.E)(), Wb = cb.loadout, ab = Lc();
      return (0, hb.jsxs)("nav", {
        className: "LoadoutKit",
        "aria-label": kb(`${Jb}:loadoutKit`),
        children: [Wb.loadoutSlots.map((bb => {
          const Wb = bb.loadoutSlotOptions.find((cb => cb.loadoutOptionId === bb.loadoutSlotEquippedId));
          return (0, hb.jsxs)("button", {
            ref: ab("section", bb.loadoutSlotKind),
            type: "button",
            className: Hb()("LoadoutKitSlot", {
              Selected: cb.slot === bb.loadoutSlotKind
            }),
            onClick: () => {
              sb.selectSlot(bb.loadoutSlotKind)
            },
            children: [(0, hb.jsx)("span", {
              className: "LoadoutKitIcon",
              children: Wb && (0, hb.jsx)(tb, {
                itemName: Wb.loadoutOptionIcon
              })
            }), (0, hb.jsxs)("span", {
              className: "LoadoutKitText",
              children: [(0, hb.jsxs)("span", {
                className: "LoadoutKitTop",
                children: [(0, hb.jsx)("span", {
                  className: "LoadoutKitLabel",
                  children: kb(Cc[bb.loadoutSlotKind])
                }), Wb && (0, hb.jsx)(Gc, {
                  owned: Wb.loadoutOptionOwnedTier,
                  total: Wb.loadoutOptionTiers.length
                })]
              }), (0, hb.jsx)("span", {
                className: "LoadoutKitName",
                children: null === Wb || void 0 === Wb ? void 0 : Wb.loadoutOptionName
              })]
            })]
          }, bb.loadoutSlotKind)
        })), (0, hb.jsx)(Zc, {
          view: cb,
          controller: sb
        })]
      })
    }

    function Zc(bb) {
      let {
        view: cb,
        controller: sb
      } = bb;
      const {
        t: kb
      } = (0, Mb.E)(), Wb = cb.loadout, ab = Wb.loadoutPerks.filter((bb => bb.loadoutPerkEquipped)), Tb = Lc();
      return (0, hb.jsxs)("button", {
        ref: Tb("section", "loadoutPerks"),
        type: "button",
        className: Hb()("LoadoutKitSlot", "LoadoutPerks", {
          Selected: "loadoutPerks" === cb.slot
        }),
        onClick: () => {
          sb.selectSlot("loadoutPerks")
        },
        children: [(0, hb.jsxs)("span", {
          className: "LoadoutKitTop",
          children: [(0, hb.jsx)("span", {
            className: "LoadoutKitLabel",
            children: kb(Cc.loadoutPerks)
          }), (0, hb.jsx)("span", {
            className: "LoadoutPerkCount",
            children: kb(`${Jb}:loadoutPerkCount`, {
              equipped: String(ab.length),
              max: String(Wb.loadoutMaxPerks)
            })
          })]
        }), (0, hb.jsx)("span", {
          className: "LoadoutSockets",
          children: Array.from({
            length: Wb.loadoutMaxPerks
          }, ((bb, cb) => {
            const sb = ab[cb];
            return (0, hb.jsxs)("span", {
              className: Hb()("LoadoutSocket", {
                Filled: sb,
                Empty: !sb
              }),
              children: [(0, hb.jsx)("span", {
                className: "LoadoutSocketWell",
                children: sb && (0, hb.jsx)(tb, {
                  itemName: sb.loadoutPerkIcon
                })
              }), (0, hb.jsx)("span", {
                className: "LoadoutSocketName",
                children: sb ? sb.loadoutPerkName : kb(`${Jb}:loadoutPerkSocketEmpty`)
              })]
            }, cb)
          }))
        })]
      })
    }

    function zc(bb) {
      let {
        icon: cb,
        name: sb,
        selected: kb,
        equipped: Wb,
        locked: ab,
        ownedTier: Tb,
        tiers: Ub,
        buttonRef: Ib,
        onSelect: Hb
      } = bb;
      const {
        t: fb
      } = (0, Mb.E)();
      return (0, hb.jsxs)(ib, {
        icon: (0, hb.jsx)(tb, {
          itemName: cb
        }),
        name: sb,
        selected: kb,
        locked: ab,
        buttonRef: Ib,
        onSelect: Hb,
        children: [Wb && (0, hb.jsx)("span", {
          className: "BoardBadge",
          children: fb(`${Jb}:loadoutEquippedBadge`)
        }), ab && (0, hb.jsx)("span", {
          className: "BoardBadge Muted",
          children: fb(`${Jb}:loadoutLocked`)
        }), !ab && (0, hb.jsx)(Gc, {
          owned: Tb,
          total: Ub
        })]
      })
    }

    function qc(bb) {
      let {
        view: cb,
        controller: sb
      } = bb;
      const kb = cb.loadout,
        Wb = Lc();
      if ("loadoutPerks" === cb.slot) return (0, hb.jsx)("div", {
        className: "BoardTiles",
        children: kb.loadoutPerks.map((bb => (0, hb.jsx)(zc, {
          icon: bb.loadoutPerkIcon,
          name: bb.loadoutPerkName,
          selected: cb.selectedId === bb.loadoutPerkId,
          equipped: bb.loadoutPerkEquipped,
          locked: !bb.loadoutPerkOwned,
          ownedTier: 0,
          tiers: 0,
          buttonRef: Wb("Wn", bb.loadoutPerkId),
          onSelect: () => {
            sb.select(bb.loadoutPerkId)
          }
        }, bb.loadoutPerkId)))
      });
      const ab = kc(kb, cb.slot);
      return (0, hb.jsx)("div", {
        className: "BoardTiles",
        children: ab.loadoutSlotOptions.map((bb => (0, hb.jsx)(zc, {
          icon: bb.loadoutOptionIcon,
          name: bb.loadoutOptionName,
          selected: cb.selectedId === bb.loadoutOptionId,
          equipped: ab.loadoutSlotEquippedId === bb.loadoutOptionId,
          locked: 0 === bb.loadoutOptionOwnedTier,
          ownedTier: bb.loadoutOptionOwnedTier,
          tiers: bb.loadoutOptionTiers.length,
          buttonRef: Wb("Wn", bb.loadoutOptionId),
          onSelect: () => {
            sb.select(bb.loadoutOptionId)
          }
        }, bb.loadoutOptionId)))
      })
    }

    function dc(bb) {
      let {
        loadout: cb
      } = bb;
      return (0, hb.jsx)(Gb, {
        coins: cb.loadoutCoins,
        children: cb.loadoutHeldParts.filter((bb => bb.loadoutHeldPartAmount > 0)).map((bb => (0, hb.jsx)(Pb, {
          itemName: bb.loadoutHeldPartItem,
          amount: bb.loadoutHeldPartAmount
        }, bb.loadoutHeldPartCurrency)))
      })
    }

    function Ac(bb) {
      let {
        controller: cb
      } = bb;
      const sb = (0, fb.h)(Xc, cb.getSnapshot()),
        {
          t: kb
        } = (0, Mb.E)();
      if (null === sb.loadout) return null;
      const Wb = sb.notice;
      return (0, hb.jsx)(hc, {
        view: sb,
        onDismiss: cb.dismiss,
        children: (0, hb.jsxs)(Bb, {
          open: sb.open,
          onDismiss: cb.dismiss,
          title: kb(`${Jb}:loadoutTitle`),
          className: "ContainmentLoadoutPanel",
          headerExtra: (0, hb.jsx)(dc, {
            loadout: sb.loadout
          }),
          statusRefused: null === Wb || void 0 === Wb ? void 0 : Wb.loadoutNoticeRefused,
          status: (0, hb.jsxs)(hb.Fragment, {
            children: [(0, hb.jsx)("span", {
              className: "LoadoutRadioBadge",
              children: kb(`${Jb}:loadoutRadioBadge`)
            }), null !== Wb && kb(`${Jb}:${Wb.loadoutNoticeKey}`, {
              name: Wb.loadoutNoticeName,
              tier: (0, pb.Q)(Wb.loadoutNoticeTier),
              max: String(sb.loadout.loadoutMaxPerks)
            })]
          }),
          children: [(0, hb.jsx)(Kc, {
            view: sb,
            controller: cb
          }), (0, hb.jsx)(qc, {
            view: sb,
            controller: cb
          }), (0, hb.jsx)(Oc, {
            view: sb,
            controller: cb
          })]
        })
      })
    }

    function wc(bb, cb, sb) {
      const kb = bb.locatorEntries.find((bb => bb.locatorEntryId === sb));
      if (!kb) return null;
      const Wb = kb.locatorEntryName;
      if ("locatorDisarm" === cb) return kb.locatorEntryArmed ? {
        board: rc(bb, null),
        notice: oc("locatorNoticeDisarmed", Wb)
      } : null;
      if ("locatorArm" === cb) return kb.locatorEntryOwned && !kb.locatorEntryArmed ? {
        board: rc(bb, sb),
        notice: oc("locatorNoticeArmed", Wb)
      } : null;
      if (kb.locatorEntryOwned || bb.locatorCoins < kb.locatorEntryPrice) return null;
      const ab = rc({
        ...bb,
        locatorCoins: bb.locatorCoins - kb.locatorEntryPrice
      }, sb);
      return {
        board: {
          ...ab,
          locatorEntries: ab.locatorEntries.map((bb => bb.locatorEntryId === sb ? {
            ...bb,
            locatorEntryOwned: !0
          } : bb))
        },
        notice: oc("locatorNoticeBought", Wb)
      }
    }

    function rc(bb, cb) {
      return {
        ...bb,
        locatorEntries: bb.locatorEntries.map((bb => {
          const sb = bb.locatorEntryId === cb;
          return bb.locatorEntryArmed === sb ? bb : {
            ...bb,
            locatorEntryArmed: sb
          }
        }))
      }
    }

    function oc(bb, cb) {
      return {
        locatorNoticeKey: bb,
        locatorNoticeRefused: !1,
        locatorNoticeName: cb
      }
    }
    const Sc = "containmentLocatorView";
    class Rc extends bc {
      constructor(bb, cb, sb, kb) {
        super(bb, cb, sb, kb, "locator", wc), this.snapshot = this.buildSnapshot()
      }
      messageOpens(bb) {
        return bb.locatorMessageOpens
      }
      messageNotice(bb) {
        return bb.locatorNotice
      }
      openingSelection(bb) {
        var cb;
        const sb = bb.locatorEntries;
        return (null !== (cb = sb.find((bb => bb.locatorEntryArmed))) && void 0 !== cb ? cb : sb[0]).locatorEntryId
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
    const vc = {
        locatorContained: `${Jb}:locatorFlavourContained`,
        locatorEncountered: `${Jb}:locatorFlavourEncountered`,
        locatorUnseen: `${Jb}:locatorFlavourUnseen`
      },
      Fc = {
        codexAnyDifficulty: null,
        codexNormalOnly: `${Jb}:locatorAttunedNormal`,
        codexHardOnly: `${Jb}:locatorAttunedHard`
      };

    function xc() {
      return (0, hb.jsx)(hb.Fragment, {
        children: Array.from({
          length: 5
        }, ((bb, cb) => (0, hb.jsx)("span", {
          className: "LocatorFly",
          children: (0, hb.jsx)("img", {
            src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAICAYAAADwdn+XAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYElEQVR4nGNgoBboMlb5LyUjD8YgNtHyJ6/d+Q/CILa1lz9YAbo4DCDLYxjQv3gt3AYQG90AdHkUQ/qhkjAb0BURkgcDmAQMo7sSXR7deyiGoIvDvIOsGasB+ACyBmTNACS0go3ibhumAAAAAElFTkSuQmCC",
            alt: "",
            draggable: !1
          })
        }, cb)))
      })
    }

    function jc(bb) {
      let {
        entry: cb
      } = bb;
      const {
        t: sb
      } = (0, Mb.E)();
      return cb.locatorEntryArmed ? (0, hb.jsx)("span", {
        className: "BoardBadge Armed",
        children: sb(`${Jb}:locatorArmedBadge`)
      }) : cb.locatorEntryOwned ? (0, hb.jsx)("span", {
        className: "BoardBadge",
        children: sb(`${Jb}:locatorOwnedBadge`)
      }) : null
    }

    function pc(bb) {
      let {
        entry: cb,
        coins: sb,
        inTile: kb = !1
      } = bb;
      return (0, hb.jsx)(Pb, {
        itemName: gb,
        amount: cb.locatorEntryPrice,
        qU: sb,
        inTile: kb
      })
    }

    function bs(bb) {
      let {
        view: cb,
        controller: sb,
        entry: kb
      } = bb;
      const {
        t: Wb
      } = (0, Mb.E)(), ab = kb.locatorEntryId, Tb = cb.locators.locatorEntries.find((bb => bb.locatorEntryArmed && bb !== kb));
      return (0, hb.jsxs)("div", {
        className: "BoardActions",
        children: [kb.locatorEntryArmed && (0, hb.jsx)(mb.M, {
          disabled: cb.pending,
          onClick: () => {
            sb.act("locatorDisarm", ab)
          },
          children: Wb(`${Jb}:locatorDisarm`)
        }), kb.locatorEntryOwned && !kb.locatorEntryArmed && (0, hb.jsx)(mb.d, {
          disabled: cb.pending,
          onClick: () => {
            sb.act("locatorArm", ab)
          },
          children: Wb(`${Jb}:locatorArm`)
        }), !kb.locatorEntryOwned && (0, hb.jsxs)("div", {
          className: "LocatorBuy",
          children: [(0, hb.jsx)(pc, {
            entry: kb,
            coins: cb.locators.locatorCoins
          }), (0, hb.jsx)(mb.n, {
            disabled: cb.locators.locatorCoins < kb.locatorEntryPrice || cb.pending,
            onClick: () => {
              sb.act("locatorBuy", ab)
            },
            children: Wb(`${Jb}:locatorBuy`)
          })]
        }), Tb && !kb.locatorEntryArmed && (0, hb.jsx)("span", {
          className: "BoardHint",
          children: Wb(`${Jb}:locatorReplacesHint`, {
            name: Tb.locatorEntryName
          })
        })]
      })
    }

    function cs(bb) {
      let {
        entry: cb
      } = bb;
      return "locatorUnseen" === cb.locatorEntryStanding ? (0, hb.jsx)(tb, {
        itemName: "Compass"
      }) : (0, hb.jsx)(yb, {
        anomalyId: cb.locatorEntryId,
        caught: "locatorContained" === cb.locatorEntryStanding
      })
    }

    function ss(bb) {
      let {
        view: cb,
        controller: sb,
        entry: kb
      } = bb;
      const {
        t: Wb
      } = (0, Mb.E)(), ab = Fc[kb.locatorEntryDifficulty];
      return (0, hb.jsxs)("section", {
        className: "BoardDetail",
        children: [(0, hb.jsxs)("div", {
          className: Hb()("LocatorLabel", {
            Armed: kb.locatorEntryArmed
          }),
          children: [(0, hb.jsx)(Ob, {
            icon: (0, hb.jsx)(cs, {
              entry: kb
            }),
            name: Wb(`${Jb}:locatorName`, {
              name: kb.locatorEntryName
            }),
            children: (0, hb.jsx)(jc, {
              entry: kb
            })
          }), (0, hb.jsx)("p", {
            className: "BoardDescription",
            children: Wb(kb.locatorEntryArmed ? `${Jb}:locatorFlavourArmed` : vc[kb.locatorEntryStanding])
          }), null !== ab && (0, hb.jsx)("p", {
            className: "LocatorAttuned",
            children: Wb(ab)
          }), (0, hb.jsx)("p", {
            className: "BoardDescription LocatorUsage",
            children: Wb(`${Jb}:locatorUsage`)
          })]
        }), (0, hb.jsx)(bs, {
          view: cb,
          controller: sb,
          entry: kb
        })]
      })
    }

    function ks(bb) {
      let {
        controller: cb
      } = bb;
      const sb = (0, fb.h)(Sc, cb.getSnapshot()),
        {
          t: kb
        } = (0, Mb.E)(),
        Wb = sb.locators;
      if (null === Wb) return null;
      const ab = Wb.locatorEntries.find((bb => bb.locatorEntryId === sb.selectedId)),
        Tb = sb.notice;
      return (0, hb.jsxs)(Bb, {
        open: sb.open,
        onDismiss: cb.dismiss,
        title: kb(`${Jb}:locatorTitle`),
        className: "ContainmentLocatorPanel",
        decor: (0, hb.jsx)(xc, {}),
        headerExtra: (0, hb.jsx)(Gb, {
          coins: Wb.locatorCoins
        }),
        statusRefused: null === Tb || void 0 === Tb ? void 0 : Tb.locatorNoticeRefused,
        status: (0, hb.jsxs)(hb.Fragment, {
          children: [(0, hb.jsx)("span", {
            className: "LocatorKeeperBadge",
            children: kb(`${Jb}:locatorKeeperName`)
          }), null !== Tb && kb(`${Jb}:${Tb.locatorNoticeKey}`, {
            name: Tb.locatorNoticeName
          })]
        }),
        children: [(0, hb.jsx)("div", {
          className: "BoardTiles",
          children: Wb.locatorEntries.map((bb => (0, hb.jsxs)(ib, {
            icon: (0, hb.jsx)(cs, {
              entry: bb
            }),
            name: bb.locatorEntryName,
            selected: bb === ab,
            locked: !1,
            className: Hb()("LocatorTag", {
              Armed: bb.locatorEntryArmed
            }),
            onSelect: () => {
              cb.select(bb.locatorEntryId)
            },
            children: [(0, hb.jsx)(jc, {
              entry: bb
            }), !bb.locatorEntryOwned && (0, hb.jsx)(pc, {
              entry: bb,
              coins: Wb.locatorCoins,
              inTile: !0
            })]
          }, bb.locatorEntryId)))
        }), (0, hb.jsx)(ss, {
          view: sb,
          controller: cb,
          entry: ab
        })]
      })
    }

    function Ws(bb) {
      let {
        loadout: cb,
        codex: sb,
        locator: kb
      } = bb;
      return (0, hb.jsxs)(hb.Fragment, {
        children: [(0, hb.jsx)(Ac, {
          controller: cb
        }), (0, hb.jsx)(jb, {
          controller: sb
        }), (0, hb.jsx)(ks, {
          controller: kb
        })]
      })
    }
    var as = sb(38152);
    class Ts {
      constructor(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.sendCommand = bb, this.budget = void 0, this.awaitingReply = !1, this.replyTimer = null, this.listeners = new Set, this.budget = new as.b({
          spacingMs: 0,
          now: cb
        }), this.budget.subscribe((() => {
          this.notify()
        }))
      }
      isPending() {
        return this.awaitingReply || this.budget.isPacing()
      }
      send(bb, cb) {
        return !this.isPending() && (this.awaitingReply = !0, this.replyTimer = setTimeout((() => {
          this.replyTimer = null, this.awaitingReply = !1, cb(), this.notify()
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
    var Us = sb(38146);
    const Is = new Map([
      ["npc_general", lc],
      ["npc_tentacle_guy", Us]
    ]);

    function Hs(bb) {
      const cb = Is.get(bb);
      if (void 0 === cb) return null;
      const sb = document.createElement("img");
      return sb.src = cb, sb.alt = "", sb.draggable = !1, sb.style.imageRendering = "pixelated", sb
    }
    const fs = function() {
      let bb, cb = !1,
        sb = null,
        Ib = null;
      const Hb = [],
        fb = bb => {
          for (const cb of Hb) cb !== bb && cb.close();
          (0, Ub.m)()
        },
        Mb = bb => {
          bb && (0, Ub.g)()
        },
        Xb = new Ts((cb => {
          bb.sendCommand(cb)
        })),
        nb = new nc((bb => {
          Tb.j.QQ(Xc, bb, !0)
        }), fb, Mb, Xb),
        mb = new zb((bb => {
          Tb.j.QQ(Zb, bb, !0)
        }), fb, Mb),
        lb = new Rc((bb => {
          Tb.j.QQ(Sc, bb, !0)
        }), fb, Mb, Xb);
      Hb.push(nb, mb, lb);
      return {
        onCreate: cb => {
          bb = cb, sb = (0, Ub.s)(null, {
            content: (0, kb.createElement)(Ws, {
              loadout: nb,
              codex: mb,
              locator: lb
            }),
            onClose: () => {
              for (const bb of Hb) bb.close()
            }
          }), Ib = (0, ab.f)(Hs)
        },
        onReceivedMessageFromServer: (bb, cb) => {
          "containmentLoadout" === bb ? nb.Km(cb) : "containmentLoadoutClose" === bb ? nb.isOpen() && (nb.close(), (0, Ub.e)()) : "containmentCodex" === bb ? mb.Km(cb) : "containmentLocator" === bb && lb.Km(cb)
        },
        aX: () => {
          cb || Wb.d.get("loadingOverlayVisible") || (cb = !0, bb.sendCommand("containmentEntered"))
        },
        onClose: () => {
          var bb, cb;
          null === (bb = sb) || void 0 === bb || bb(), sb = null, null === (cb = Ib) || void 0 === cb || cb(), Ib = null;
          for (const sb of Hb) sb.dispose();
          Xb.dispose()
        }
      }
    }
  },
  36455: (bb, cb, sb) => {
    sb.d(cb, {
      B: () => Gb,
      F: () => Kb,
      I: () => ib,
      J: () => Zb,
      b: () => Ib,
      e: () => tb,
      f: () => Ub,
      g: () => Eb,
      h: () => gb,
      k: () => ub,
      o: () => Db,
      s: () => Pb,
      v: () => Jb,
      z: () => Ob
    });
    var kb = sb(37);
    const Wb = {
        codeBlock: ["codeBlockIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "worldCodeButton", "exportButton", "helpButton"],
        worldCode: ["worldCodeIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "exportButton", "helpButton"]
      },
      ab = ["docsButton", "docsPanel", "docsClientOptionsTab", "docsClientOptions", "docsApiReferenceTab", "docsApiReference", "docsCallbacksTab", "docsCallbacks", "hideDocsButton"],
      Tb = ["aiHelperButton", "aiPanel", "aiAskBox", "aiModelChip", "aiAnswer", "aiEdits", "aiGear", "aiNotes", "aiGameSettings", "hideAiHelperButton"],
      Ub = ab.filter((bb => "docsButton" !== bb)),
      Ib = Tb.filter((bb => "aiHelperButton" !== bb)),
      Hb = "codeEditorTutorials",
      fb = {
        codeBlockIntro: "codeBlockIntroShown",
        worldCodeIntro: "worldCodeIntroShown"
      },
      Mb = {
        welcome: "welcomeComplete",
        docsOverview: "docsOverviewComplete",
        aiHelperOverview: "aiHelperOverviewComplete"
      };
    let Xb = null,
      nb = null;
    const mb = new Set,
      lb = new Set;
    let Qb = null;
    const eb = new Set,
      Cb = new Set;

    function Nb() {
      Cb.forEach((bb => {
        bb()
      }))
    }

    function Vb() {
      if (!Xb) {
        const bb = kb.h.getItem(Hb);
        Xb = {
          codeBlockIntroShown: !1,
          worldCodeIntroShown: !1,
          welcomeComplete: !1,
          docsOverviewComplete: !1,
          aiHelperOverviewComplete: !1,
          ..."object" === typeof bb && null !== bb ? bb : {}
        }
      }
      return Xb
    }

    function Lb(bb) {
      const cb = Vb();
      cb[bb] || (Xb = {
        ...cb,
        [bb]: !0
      }, kb.h.setItem(Hb, Xb))
    }

    function ub(bb) {
      return "docsOverview" === bb ? ab : "aiHelperOverview" === bb ? Tb : nb ? Wb[nb] : []
    }

    function Yb(bb) {
      return ("worldCodeButton" !== bb || !Vb().worldCodeIntroShown) && !eb.has(bb)
    }

    function hb(bb) {
      var cb;
      return (null === (cb = Qb) || void 0 === cb ? void 0 : cb.name) === bb ? Qb.stepsDone : mb
    }

    function Jb(bb, cb) {
      if (! function(bb) {
          return Qb ? Qb.name === bb : "welcome" === bb
        }(bb) || !Yb(cb) || hb(bb).has(cb)) return !1;
      if (Qb) return !0;
      const sb = fb[cb];
      return sb ? !Vb()[sb] || lb.has(cb) : !Vb()[Mb[bb]]
    }

    function gb(bb) {
      var cb;
      return null !== (cb = ub(bb).find((cb => Jb(bb, cb)))) && void 0 !== cb ? cb : null
    }

    function Bb(bb) {
      var cb;
      Lb(Mb[bb]), (null === (cb = Qb) || void 0 === cb ? void 0 : cb.name) === bb && (Qb = null)
    }

    function tb(bb) {
      const cb = (Qb ? [Qb.name] : ["welcome", "docsOverview"]).find((cb => gb(cb) === bb));
      if (!cb) return;
      hb(cb).add(bb);
      const sb = fb[bb];
      sb && (Lb(sb), Qb || lb.add(bb)), null === gb(cb) && Bb(cb), Nb()
    }

    function yb(bb, cb) {
      const sb = ub(bb),
        kb = hb(bb);
      for (let Wb = sb.indexOf(cb) - 1; Wb >= 0; Wb--)
        if (kb.has(sb[Wb]) && Yb(sb[Wb])) return sb[Wb];
      return null
    }

    function Pb(bb, cb) {
      return null !== yb(bb, cb)
    }

    function Db(bb, cb) {
      const sb = yb(bb, cb);
      sb && (hb(bb).delete(sb), Nb())
    }

    function Eb(bb) {
      Bb(bb), "welcome" === bb && ub("welcome").forEach((bb => {
        const cb = fb[bb];
        cb && Lb(cb)
      })), Nb()
    }

    function ib(bb) {
      Qb = {
        name: bb,
        stepsDone: new Set
      }, Nb()
    }

    function Ob() {
      (Qb || 0 !== mb.size || 0 !== lb.size) && (Qb = null, mb.clear(), lb.clear(), Nb())
    }

    function Gb(bb, cb) {
      const sb = cb ? bb : nb === bb ? null : nb;
      sb !== nb && (nb = sb, Nb())
    }

    function Kb(bb, cb) {
      eb.has(bb) === cb && (cb ? eb.delete(bb) : eb.add(bb), Nb())
    }

    function Zb(bb) {
      return Cb.add(bb), () => {
        Cb.delete(bb)
      }
    }
  },
  38864: (bb, cb, sb) => {
    var kb = {
      "./breach-zero-uncaught.webp": 38868,
      "./breach-zero.webp": 38870,
      "./brood-father-uncaught.webp": 38877,
      "./brood-father.webp": 38886,
      "./carousel-uncaught.webp": 38888,
      "./carousel.webp": 38895,
      "./deadlock-uncaught.webp": 38902,
      "./deadlock.webp": 38906,
      "./frost-revenant-uncaught.webp": 38915,
      "./frost-revenant.webp": 38918,
      "./hollow-choir-uncaught.webp": 38921,
      "./hollow-choir.webp": 38928,
      "./magma-warden-uncaught.webp": 38931,
      "./magma-warden.webp": 38938,
      "./patient-zero-uncaught.webp": 38943,
      "./patient-zero.webp": 38952,
      "./siege-engine-uncaught.webp": 38960,
      "./siege-engine.webp": 38968,
      "./warp-stalker-uncaught.webp": 38976,
      "./warp-stalker.webp": 38983
    };

    function Wb(bb) {
      var cb = ab(bb);
      return sb(cb)
    }

    function ab(bb) {
      if (!sb.o(kb, bb)) {
        var cb = new Error("Cannot find module '" + bb + "'");
        throw cb.code = "MODULE_NOT_FOUND", cb
      }
      return kb[bb]
    }
    Wb.keys = function() {
      return Object.keys(kb)
    }, Wb.resolve = ab, bb.exports = Wb, Wb.id = 38864
  },
  38868: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/breach-zero-uncaught.c7d4410f99269ac1ee2f.webp"
  },
  38870: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/breach-zero.ef5aacecf502228cd20b.webp"
  },
  38877: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/brood-father-uncaught.ee678432c71b7061fae1.webp"
  },
  38886: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/brood-father.e48391955a574c1155fa.webp"
  },
  38888: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/carousel-uncaught.a92757620f569f31d7d2.webp"
  },
  38895: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/carousel.5fc13db7958067d6e1a3.webp"
  },
  38902: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/deadlock-uncaught.feadbdbbf2d040dce5c0.webp"
  },
  38906: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/deadlock.2bcaeaa57376fd78ddcb.webp"
  },
  38915: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/frost-revenant-uncaught.c0271636eeae988b1a40.webp"
  },
  38918: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/frost-revenant.fed6021646d7f0f81876.webp"
  },
  38921: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/hollow-choir-uncaught.7eaab76a15f82bd79558.webp"
  },
  38928: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/hollow-choir.05f9c51994aecece852a.webp"
  },
  38931: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/magma-warden-uncaught.5308736fbb8a503cdfc7.webp"
  },
  38938: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/magma-warden.cc4302a49a39ae962a31.webp"
  },
  38943: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/patient-zero-uncaught.1f9ec012a14c4dbdcc8f.webp"
  },
  38952: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/patient-zero.cc76984bb20e9f9ace76.webp"
  },
  38960: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/siege-engine-uncaught.88e0ad7fec37ba2b4a2e.webp"
  },
  38968: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/siege-engine.b2e2382e415f4ae470ac.webp"
  },
  38976: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/warp-stalker-uncaught.c3b1b82ecb18446b71b0.webp"
  },
  38983: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/warp-stalker.851972c629601b668aa7.webp"
  },
  38146: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYElEQVR4nGNgIBIwovH/45JnRFaUGN+Comr+whq4GiZ0RVycnGAMAlAxsC0sMN2fvn9DodEBzEQGdUV5hvNnV4JpGJuPkwtTIQh4umZhZWMonDqjGCsbHcCCBkQjs0kDAPeaHpfX1eroAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);