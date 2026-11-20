export const id = 14;
export const ids = [14];
export const modules = {
  36527: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => jb,
      d: () => db,
      h: () => rb,
      k: () => Xb
    });
    var Bb = hb(958),
      Ob = hb.n(Bb),
      Gb = hb(49),
      Ub = hb(65),
      Lb = hb(1264),
      Yb = hb(1357),
      Sb = hb(1260),
      ab = hb(1177),
      Hb = hb(1095),
      wb = hb(36533),
      Zb = hb(1007);

    function Xb(bb) {
      const [ub, hb] = (0, Gb.useState)((() => (0, wb.o)(bb)));
      return (0, Gb.useEffect)((() => (hb((0, wb.o)(bb)), (0, wb.G)((() => {
        hb((0, wb.o)(bb))
      })))), [bb]), ub
    }

    function pb(bb, ub) {
      "function" === typeof bb ? bb(ub) : bb && (bb.current = ub)
    }

    function ob(bb) {
      let {
        tutorial: ub,
        step: hb,
        enabled: Bb = !0
      } = bb;
      const Ob = Xb(ub);
      return Bb && Ob === hb
    }

    function Ab(bb, ub) {
      const hb = (0, wb.p)(bb),
        Bb = hb.indexOf(ub);
      return !hb.slice(Bb + 1).some((ub => (0, wb.v)(bb, ub)))
    }

    function lb(bb, ub, hb, Bb) {
      let {
        tutorial: Ob,
        step: Gb,
        waitForClick: Ub = !1,
        onPrevious: Lb
      } = bb;
      const Yb = ub && (0, wb.u)(Ob, Gb),
        Sb = ub && !Ab(Ob, Gb),
        Hb = Ub ? Bb : hb;
      let Zb = null;
      Yb ? Zb = () => {
        null === Lb || void 0 === Lb || Lb(), (0, wb.s)(Ob, Gb)
      } : Sb && (Zb = () => {
        (0, wb.k)(Ob)
      }), (0, ab.v)("popup", null !== Hb && void 0 !== Hb ? Hb : hb, Zb, ub && null !== Hb, null, Yb ? void 0 : "controller:menusSkipTutorial")
    }

    function Kb(bb) {
      let {
        tutorial: ub,
        step: hb,
        text: Bb,
        waitForClick: Ob = !1,
        onPrevious: Gb
      } = bb;
      const {
        t: Ub
      } = (0, Hb.K)(), Lb = Ab(ub, hb);
      return (0, Zb.jsxs)(Zb.Fragment, {
        children: [(0, Zb.jsx)("div", {
          className: "TutorialStepText",
          children: Bb
        }), (0, Zb.jsxs)("div", {
          className: "TutorialStepButtons",
          children: [(0, wb.u)(ub, hb) && (0, Zb.jsx)(Yb.g, {
            className: "TutorialStepButton",
            onClick: () => {
              null === Gb || void 0 === Gb || Gb(), (0, wb.s)(ub, hb)
            },
            children: Ub("tutorial:back")
          }), !Ob && (0, Zb.jsx)(Yb.e, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, wb.h)(hb)
            },
            padDefaultFocus: !0,
            children: Ub(Lb ? "tutorial:done" : "tutorial:next")
          }), !Lb && (0, Zb.jsx)(Yb.g, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, wb.k)(ub)
            },
            children: Ub("tutorial:skip")
          })]
        })]
      })
    }
    const Wb = 6;

    function Cb(bb) {
      let {
        rect: ub,
        margin: hb
      } = bb;
      const Bb = Math.max(0, ub.top - hb),
        Ob = ub.bottom + hb,
        Gb = Math.max(0, ub.left - hb),
        Ub = ub.right + hb;
      return (0, Zb.jsxs)(Zb.Fragment, {
        children: [(0, Zb.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: 0,
            left: 0,
            right: 0,
            height: Bb
          }
        }), (0, Zb.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: Ob,
            left: 0,
            right: 0,
            bottom: 0
          }
        }), (0, Zb.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: Bb,
            left: 0,
            width: Gb,
            height: Ob - Bb
          }
        }), (0, Zb.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: Bb,
            left: Ub,
            right: 0,
            height: Ob - Bb
          }
        })]
      })
    }

    function db(bb) {
      let {
        target: ub,
        placement: hb,
        boxRef: Bb,
        className: Yb,
        spotlightMargin: ab = Wb,
        children: Hb
      } = bb;
      const {
        getArrowProps: wb,
        getTooltipProps: Xb,
        setTooltipRef: pb,
        setTriggerRef: ob
      } = (0, Lb.b)({
        placement: hb,
        trigger: null,
        visible: !0,
        interactive: !0,
        closeOnOutsideClick: !1,
        offset: [0, ab]
      });
      (0, Gb.useLayoutEffect)((() => {
        ob(ub)
      }), [ub, ob]);
      const Ab = function(bb, ub) {
        const [hb, Bb] = (0, Gb.useState)(null);
        return (0, Gb.useEffect)((() => {
          if (!ub || !bb) return void Bb(null);
          let hb = 0,
            Ob = null;
          const Gb = () => {
            const ub = bb.getBoundingClientRect();
            Ob && ub.left === Ob.left && ub.top === Ob.top && ub.width === Ob.width && ub.height === Ob.height || (Ob = ub, Bb(ub)), hb = requestAnimationFrame(Gb)
          };
          return Gb(), () => {
            cancelAnimationFrame(hb)
          }
        }), [bb, ub]), hb
      }(ub, !0);
      (0, Gb.useEffect)((() => {
        null === ub || void 0 === ub || ub.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        })
      }), [ub]);
      const lb = (0, Gb.useCallback)((bb => {
        pb(bb), Bb && (Bb.current = bb)
      }), [pb, Bb]);
      return (0, Ub.createPortal)((0, Zb.jsxs)(Zb.Fragment, {
        children: [Ab && (0, Zb.jsx)(Cb, {
          rect: Ab,
          margin: ab
        }), (0, Zb.jsxs)("div", {
          ref: lb,
          ...Xb({
            className: Ob()("tooltip-container SmallTextLight TutorialStep", Yb)
          }),
          children: [Hb, (0, Zb.jsx)("div", {
            ...wb({
              className: "tooltip-arrow"
            })
          })]
        })]
      }), (0, Sb.h)())
    }
    const rb = (0, Gb.forwardRef)((function(bb, ub) {
      let {
        placement: hb = "right",
        children: Bb,
        ...Ob
      } = bb;
      const Ub = ob(Ob),
        Lb = (0, Gb.useRef)(null),
        Yb = (0, Gb.useRef)(null);
      lb(Ob, Ub, Lb, Yb);
      const [Sb, ab] = (0, Gb.useState)(null), Hb = Bb.ref, wb = (0, Gb.useCallback)((bb => {
        Yb.current = bb, ab(bb), pb(ub, bb), pb(Hb, bb)
      }), [ub, Hb]);
      return (0, Zb.jsxs)(Zb.Fragment, {
        children: [(0, Gb.cloneElement)(Bb, {
          ref: wb
        }), Ub && (0, Zb.jsx)(db, {
          target: Sb,
          placement: hb,
          boxRef: Lb,
          children: (0, Zb.jsx)(Kb, {
            ...Ob
          })
        })]
      })
    }));

    function jb(bb) {
      const ub = ob(bb),
        hb = (0, Gb.useRef)(null);
      return lb(bb, ub, hb, null), ub ? (0, Ub.createPortal)((0, Zb.jsx)("div", {
        className: "TutorialCentreBackdrop",
        children: (0, Zb.jsx)("div", {
          ref: hb,
          className: "tooltip-container SmallTextLight TutorialStep TutorialCentreStep",
          children: (0, Zb.jsx)(Kb, {
            ...bb
          })
        })
      }), (0, Sb.h)()) : null
    }
  },
  38160: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Ub
    });
    const Bb = 4,
      Ob = 12e3,
      Gb = 1e3;
    class Ub {
      constructor() {
        let {
          limit: bb = Bb,
          windowMs: ub = Ob,
          spacingMs: hb = Gb,
          now: Ub = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = bb, this.windowMs = ub, this.spacingMs = hb, this.now = Ub
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
          ub = this.lastSentAt + this.spacingMs,
          hb = Math.min(ub > bb ? ub : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        hb !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, hb - bb)))
      }
      notify() {
        for (const bb of this.listeners) bb()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  36217: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Gb,
      e: () => pb,
      i: () => ob,
      k: () => Lb,
      m: () => wb,
      o: () => Ab,
      q: () => Hb,
      r: () => Kb,
      u: () => Xb,
      v: () => lb
    });
    var Bb = hb(13),
      Ob = hb(16);
    const Gb = "clientGameInventoryButtonsChanged",
      Ub = new Map;

    function Lb() {
      return [...Ub.values()].sort(((bb, ub) => {
        var hb, Bb;
        return (null !== (hb = bb.order) && void 0 !== hb ? hb : 0) - (null !== (Bb = ub.order) && void 0 !== Bb ? Bb : 0)
      }))
    }
    let Yb = null;

    function Sb(bb) {
      Yb = bb
    }
    let ab = !1;

    function Hb(bb) {
      ab = !0;
      try {
        bb.onClick()
      } finally {
        ab = !1
      }
      bb.panel && "clientGame" === Bb.d.get("openInGameMenuName") && Sb(bb.id)
    }

    function wb() {
      return ab
    }

    function Zb() {
      return Lb().filter((bb => bb.panel && !bb.disabled))
    }

    function Xb(bb) {
      const ub = Zb(),
        hb = ub.findIndex((bb => bb.id === Yb));
      return !(hb < 0 || ub.length < 2) && (Hb(ub[(hb + bb + ub.length) % ub.length]), !0)
    }

    function pb() {
      return null !== Yb && Zb().length > 1
    }

    function ob() {
      Sb(null)
    }

    function Ab() {
      "inventory" !== Bb.d.get("openInGameMenuName") && Sb(null)
    }

    function lb() {
      const bb = Yb;
      return Sb(null), bb
    }

    function Kb(bb) {
      return Ub.set(bb.id, bb), Ob.i.vp(Gb, Lb(), !0), () => {
        Ub.get(bb.id) === bb && (Ub.delete(bb.id), Ob.i.vp(Gb, Lb()))
      }
    }
  },
  38149: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Bb
    });
    class Bb {
      constructor(bb, ub, hb) {
        this.vp = bb, this.beforeOpen = ub, this.afterClose = hb, this.open = !1, this.FZ = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.FZ && (this.open = !0, this.beforeOpen(this), this.emit())
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
        this.open = !1, this.emit(), this.FZ = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.FZ || (this.snapshot = this.buildSnapshot(), this.vp(this.snapshot))
      }
    }
  },
  36214: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Lb,
      g: () => ob,
      j: () => Ab,
      l: () => wb,
      m: () => Sb,
      p: () => pb,
      q: () => Zb,
      t: () => ab
    });
    var Bb = hb(13),
      Ob = hb(16),
      Gb = hb(1184),
      Ub = hb(36217);
    const Lb = "clientGameUiChanged";
    let Yb = null;

    function Sb() {
      return Yb
    }

    function ab(bb, ub) {
      const hb = {
        content: bb,
        menu: ub
      };
      return Yb = hb, Ob.i.vp(Lb, Yb, !0), () => {
        Yb === hb && (Yb = null, Xb = !1, ob(), Ob.i.vp(Lb, null))
      }
    }
    let Hb = null;

    function wb() {
      return Hb
    }

    function Zb(bb) {
      return Hb = bb, () => {
        Hb === bb && (Hb = null)
      }
    }
    let Xb = !1;

    function pb() {
      const bb = Bb.d.get("openInGameMenuName");
      "clientGame" !== bb && (Xb = "inventory" === bb), (0, Ub.m)() || (0, Ub.i)(), (0, Gb.l)(Gb.b), Bb.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function ob() {
      lb(!1)
    }

    function Ab() {
      lb(Xb)
    }

    function lb(bb) {
      "clientGame" === Bb.d.get("openInGameMenuName") && Bb.d.set({
        openInGameMenuName: bb ? "inventory" : null
      }), bb || (0, Ub.i)(), Xb = !1
    }
  },
  38892: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      default: () => ah
    });
    var Bb = hb(49);
    var Ob = hb(13),
      Gb = hb(1796),
      Ub = hb(16),
      Lb = hb(36214),
      Yb = hb(958),
      Sb = hb.n(Yb),
      ab = hb(1348),
      Hb = hb(1095),
      wb = hb(4292),
      Zb = hb(1247),
      Xb = hb(1357),
      pb = hb(1799),
      ob = hb(1260),
      Ab = hb(1789),
      lb = hb(1857),
      Kb = hb(197);
    const Wb = hb(38894),
      Cb = Object.fromEntries(Wb.keys().map((bb => [bb.replace(/^\.\/(.*)\.webp$/, "$1"), Wb(bb)]))),
      db = new Set;

    function rb(bb, ub) {
      const hb = ub ? bb : `${bb}-uncaught`,
        Bb = (0, Kb.d)(Cb, hb);
      return void 0 !== Bb || db.has(hb) || (db.add(hb), console.warn(`Containment Breach has no mugshot ${hb}: run tools/harnessCutouts/ContainmentMugshotCapture.ts`)), Bb
    }
    var jb = hb(1007);
    const nb = "containmentBreach",
      Db = "Gold Coin";

    function xb(bb) {
      let {
        open: ub,
        onDismiss: hb,
        title: Bb,
        className: Ob,
        decor: Gb,
        headerExtra: Ub,
        status: Lb,
        statusRefused: Yb = !1,
        children: ab
      } = bb;
      const Hb = `${Ob}Title`;
      return (0, jb.jsx)(wb.b, {
        show: ub,
        close: hb,
        togglePointerLock: !1,
        className: "ContainmentBoardOverlay",
        children: (0, jb.jsxs)("section", {
          className: Sb()("ContainmentBoardPanel", Ob),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": Hb,
          children: [Gb && (0, jb.jsx)("div", {
            className: "BoardDecor",
            "aria-hidden": "true",
            children: Gb
          }), (0, jb.jsxs)("header", {
            className: "BoardHeader",
            children: [(0, jb.jsx)("h2", {
              id: Hb,
              className: "VisuallyHidden",
              children: Bb
            }), Ub, (0, jb.jsx)(Xb.i, {
              onClick: hb
            })]
          }), (0, jb.jsx)("div", {
            className: "BoardBody",
            children: ab
          }), void 0 !== Lb && (0, jb.jsx)("footer", {
            className: Sb()("BoardStatus", {
              Refused: Yb
            }),
            children: Lb
          })]
        })
      })
    }

    function zb(bb) {
      let {
        itemName: ub
      } = bb;
      return (0, jb.jsx)(pb.d, {
        itemName: ub,
        amount: 0
      })
    }

    function gb(bb) {
      let {
        anomalyId: ub,
        caught: hb
      } = bb;
      const Ob = (0, Bb.useRef)(null);
      return (0, Zb.d)(Ob, !hb), (0, jb.jsx)("span", {
        ref: Ob,
        className: Sb()("BoardMugshot", {
          Uncaught: !hb
        }),
        children: (0, jb.jsx)("img", {
          src: rb(ub, hb),
          alt: "",
          draggable: !1
        })
      })
    }

    function ib(bb) {
      let {
        itemName: ub,
        amount: hb,
        MS: Bb,
        inTile: Ob = !1
      } = bb;
      return (0, jb.jsx)(ob.d, {
        delayShow: 200,
        hoverOnly: Ob,
        placement: "top",
        tooltipClassName: "BoardChipTooltipBox",
        tooltipInner: (0, jb.jsx)(tb, {
          itemName: ub,
          amount: hb,
          MS: Bb
        }),
        children: (0, jb.jsxs)("span", {
          className: Sb()("BoardChip", {
            Short: void 0 !== Bb && Bb < hb
          }),
          children: [(0, jb.jsx)("span", {
            className: "BoardChipIcon",
            children: (0, jb.jsx)(zb, {
              itemName: ub
            })
          }), hb.toLocaleString()]
        })
      })
    }
    const vb = /^(.*?)\s*Salvaged from (?:an? )?(.+?)\.?$/;

    function tb(bb) {
      var ub;
      let {
        itemName: hb,
        amount: Bb,
        MS: Ob
      } = bb;
      const {
        t: Gb
      } = (0, Hb.K)(), Ub = (0, lb.g)("itemInfo", (bb => bb[hb])), {
        lore: Lb,
        droppedBy: Yb
      } = function(bb) {
        if ("string" !== typeof bb) return {
          lore: bb,
          droppedBy: null
        };
        const ub = vb.exec(bb);
        return null === ub ? {
          lore: bb,
          droppedBy: null
        } : {
          lore: "" === ub[1] ? void 0 : ub[1],
          droppedBy: ub[2]
        }
      }(null === Ub || void 0 === Ub ? void 0 : Ub.description);
      return (0, jb.jsxs)("div", {
        className: "BoardChipTooltip",
        children: [(0, jb.jsxs)("div", {
          className: "BoardChipTooltipHeader",
          children: [(0, jb.jsx)("span", {
            className: "BoardChipTooltipIcon",
            children: (0, jb.jsx)(zb, {
              itemName: hb
            })
          }), (0, jb.jsx)(Ab.c, {
            text: null !== (ub = null === Ub || void 0 === Ub ? void 0 : Ub.displayName) && void 0 !== ub ? ub : hb,
            className: "BoardChipTooltipName"
          })]
        }), (void 0 !== Lb || null !== Yb) && (0, jb.jsxs)("div", {
          className: "BoardChipTooltipBody",
          children: [void 0 !== Lb && (0, jb.jsx)(Ab.c, {
            text: Lb,
            className: "BoardChipTooltipDescription"
          }), null !== Yb && (0, jb.jsxs)("span", {
            className: "BoardChipTooltipSource",
            children: [(0, jb.jsx)("span", {
              className: "BoardChipTooltipLabel",
              children: Gb(`${nb}:chipDroppedBy`)
            }), Yb]
          })]
        }), void 0 !== Ob && (0, jb.jsxs)("div", {
          className: Sb()("BoardChipTooltipHeld", {
            Short: Ob < Bb
          }),
          children: [(0, jb.jsx)("span", {
            className: "BoardChipTooltipLabel",
            children: Gb(`${nb}:chipYouHave`)
          }), (0, jb.jsxs)("span", {
            className: "BoardChipTooltipCount",
            children: [(0, jb.jsx)("span", {
              className: "BoardChipTooltipHeldAmount",
              children: Ob.toLocaleString()
            }), ` / ${Bb.toLocaleString()}`]
          }), (0, jb.jsx)("span", {
            className: "BoardChipTooltipMeter",
            children: (0, jb.jsx)("span", {
              style: {
                width: (Bb > 0 ? 100 * Math.min(1, Ob / Bb) : 100) + "%"
              }
            })
          })]
        })]
      })
    }

    function Jb(bb) {
      let {
        icon: ub,
        name: hb,
        selected: Bb,
        locked: Ob,
        className: Gb,
        buttonRef: Ub,
        onSelect: Lb,
        children: Yb
      } = bb;
      return (0, jb.jsxs)("button", {
        ref: Ub,
        type: "button",
        className: Sb()("BoardTile", Gb, {
          Selected: Bb,
          Locked: Ob
        }),
        onClick: Lb,
        children: [(0, jb.jsx)("span", {
          className: "BoardTileIcon",
          children: ub
        }), (0, jb.jsx)("span", {
          className: "BoardTileName",
          children: hb
        }), Yb]
      })
    }

    function eb(bb) {
      let {
        icon: ub,
        name: hb,
        children: Bb
      } = bb;
      return (0, jb.jsxs)("header", {
        className: "BoardDetailHeader",
        children: [(0, jb.jsx)("span", {
          className: "BoardDetailIcon",
          children: ub
        }), (0, jb.jsxs)("div", {
          className: "BoardDetailHeading",
          children: [(0, jb.jsx)("h3", {
            children: hb
          }), (0, jb.jsx)("span", {
            className: "BoardDetailStatus",
            children: Bb
          })]
        })]
      })
    }

    function Nb(bb) {
      let {
        coins: ub,
        children: hb
      } = bb;
      return (0, jb.jsxs)("div", {
        className: "BoardWallet",
        children: [(0, jb.jsx)(ib, {
          itemName: Db,
          amount: ub
        }), hb]
      })
    }
    var sb = hb(38149);
    const Mb = "containmentCodexView";
    class mb extends sb.c {
      constructor() {
        super(...arguments), this.entries = [], this.selectedId = "", this.snapshot = this.buildSnapshot(), this.select = bb => {
          this.selectedId = bb, this.emit()
        }
      }
      cZ(bb) {
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
    const Ib = {
        codexAnyDifficulty: `${nb}:codexNeedsAny`,
        codexNormalOnly: `${nb}:codexNeedsNormal`,
        codexHardOnly: `${nb}:codexNeedsHard`
      },
      Pb = {
        codexContained: "Contained",
        codexEncountered: "Sighted",
        codexUnidentified: "Unknown"
      },
      qb = {
        codexContained: `${nb}:codexContainedBadge`,
        codexEncountered: `${nb}:codexEncounteredBadge`,
        codexUnidentified: `${nb}:codexUnidentifiedBadge`
      },
      Eb = ["94%", "81%", "88%", "46%", "72%"];

    function yb(bb) {
      let {
        entry: ub
      } = bb;
      const {
        t: hb
      } = (0, Hb.K)();
      return (0, jb.jsx)("span", {
        className: Sb()("BoardBadge", Pb[ub.codexEntryState]),
        children: hb(qb[ub.codexEntryState])
      })
    }

    function Vb(bb) {
      const {
        t: ub
      } = (0, Hb.K)();
      return "codexUnidentified" === bb.codexEntryState ? ub(`${nb}:codexUnidentifiedName`) : bb.codexEntryName
    }

    function Fb(bb) {
      let {
        entry: ub
      } = bb;
      return "codexUnidentified" === ub.codexEntryState ? (0, jb.jsx)(zb, {
        itemName: "Book"
      }) : (0, jb.jsxs)("span", {
        className: "CodexPhoto",
        children: [(0, jb.jsx)(gb, {
          anomalyId: ub.codexEntryId,
          caught: "codexContained" === ub.codexEntryState
        }), (0, jb.jsx)("img", {
          className: "CodexPaperclip",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAMCAYAAACulacQAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGNggIIXb97/X7V57/+Wvtn/GZDBqs17UQTgClahScBATHrlf5ySeHWimo9NMbokCp9OkmD/oasGCaJLAAC5ZUIBS85GiAAAAABJRU5ErkJggg==",
          alt: "",
          draggable: !1
        })]
      })
    }

    function fb(bb) {
      let {
        entry: ub,
        selected: hb,
        onSelect: Bb
      } = bb;
      const Ob = "codexUnidentified" === ub.codexEntryState;
      return (0, jb.jsxs)(Jb, {
        icon: (0, jb.jsx)(Fb, {
          entry: ub
        }),
        name: Vb(ub),
        selected: hb,
        locked: Ob,
        className: Sb()("CodexFolder", Pb[ub.codexEntryState]),
        onSelect: () => {
          Bb(ub.codexEntryId)
        },
        children: [!Ob && (0, jb.jsx)(yb, {
          entry: ub
        }), Ob && (0, jb.jsx)("img", {
          className: "CodexSeal",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAARElEQVR4nGNggIIGHp7/MAzjw+TAnMf+/mB8RkQEjOGKYZLIgsiK4AqQJZA1gBXAOHgVwCRQJJEdCVOEYj8yQPciTAEAz0hgyamUqskAAAAASUVORK5CYII=",
          alt: "",
          draggable: !1
        })]
      })
    }

    function kb(bb) {
      let {
        count: ub
      } = bb;
      const hb = [];
      for (let Bb = Math.min(ub, 25); Bb > 0; Bb -= 5) hb.push(Math.min(Bb, 5));
      return (0, jb.jsx)("span", {
        className: "CodexTallyMarks",
        "aria-hidden": "true",
        children: hb.map(((bb, ub) => (0, jb.jsx)("span", {
          className: Sb()("CodexTallyGroup", {
            Gate: 5 === bb
          }),
          children: Array.from({
            length: Math.min(bb, 4)
          }, ((bb, ub) => (0, jb.jsx)("span", {
            className: "CodexTallyMark"
          }, ub)))
        }, ub)))
      })
    }

    function Tb(bb) {
      let {
        contained: ub,
        total: hb
      } = bb;
      const {
        t: Bb
      } = (0, Hb.K)();
      return (0, jb.jsxs)("div", {
        className: "CodexProgress",
        children: [Bb(`${nb}:codexProgress`, {
          contained: String(ub),
          total: String(hb)
        }), (0, jb.jsx)("span", {
          className: "CodexProgressMeter",
          children: (0, jb.jsx)("span", {
            style: {
              width: ub / hb * 100 + "%"
            }
          })
        })]
      })
    }

    function cb(bb) {
      let {
        entry: ub,
        fileNumber: hb
      } = bb;
      const {
        t: Bb
      } = (0, Hb.K)(), Ob = "codexContained" === ub.codexEntryState;
      return (0, jb.jsx)("section", {
        className: "BoardDetail",
        children: (0, jb.jsxs)("article", {
          className: Sb()("CodexDossier", Pb[ub.codexEntryState]),
          children: [(0, jb.jsx)("span", {
            className: "CodexFileNumber",
            children: Bb(`${nb}:codexFileNumber`, {
              number: String(hb).padStart(3, "0")
            })
          }), (0, jb.jsx)(eb, {
            icon: (0, jb.jsx)(Fb, {
              entry: ub
            }),
            name: Vb(ub),
            children: (0, jb.jsx)(yb, {
              entry: ub
            })
          }), Ob && (0, jb.jsxs)(jb.Fragment, {
            children: [(0, jb.jsx)("p", {
              className: "BoardDescription",
              children: ub.codexEntryLore
            }), (0, jb.jsxs)("p", {
              className: "CodexTally",
              children: [Bb(`${nb}:codexContainments`, {
                count: String(ub.codexEntryContainedCount)
              }), (0, jb.jsx)(kb, {
                count: ub.codexEntryContainedCount
              })]
            }), (0, jb.jsx)("span", {
              className: "CodexClosedStamp",
              "aria-hidden": "true",
              children: Bb(`${nb}:codexContainedBadge`)
            })]
          }), !Ob && (0, jb.jsxs)(jb.Fragment, {
            children: [(0, jb.jsxs)("div", {
              className: "CodexRedaction",
              children: [Eb.map((bb => (0, jb.jsx)("span", {
                className: "CodexRedactedLine",
                style: {
                  width: bb
                }
              }, bb))), (0, jb.jsx)("p", {
                className: "CodexRedacted",
                children: Bb(`${nb}:codexRedacted`)
              })]
            }), "" !== ub.codexEntryHint && (0, jb.jsxs)("aside", {
              className: "CodexNote",
              children: [(0, jb.jsx)("h4", {
                children: Bb(`${nb}:codexHintLabel`)
              }), (0, jb.jsx)("p", {
                children: ub.codexEntryHint
              })]
            }), (0, jb.jsx)("p", {
              className: "CodexClearance",
              children: Bb(Ib[ub.codexEntryDifficulty])
            })]
          })]
        })
      })
    }

    function Qb(bb) {
      let {
        controller: ub
      } = bb;
      const hb = (0, ab.k)(Mb, ub.getSnapshot()),
        {
          t: Bb
        } = (0, Hb.K)();
      if (0 === hb.entries.length) return null;
      const Ob = hb.entries.find((bb => bb.codexEntryId === hb.selectedId)),
        Gb = hb.entries.filter((bb => "codexContained" === bb.codexEntryState)).length,
        Ub = hb.entries.map((bb => bb.codexEntryId)).sort().indexOf(Ob.codexEntryId) + 1;
      return (0, jb.jsxs)(xb, {
        open: hb.open,
        onDismiss: ub.dismiss,
        title: Bb(`${nb}:codexTitle`),
        className: "ContainmentCodexPanel",
        headerExtra: (0, jb.jsx)(Tb, {
          contained: Gb,
          total: hb.entries.length
        }),
        children: [(0, jb.jsx)("div", {
          className: "BoardTiles",
          children: hb.entries.map((bb => (0, jb.jsx)(fb, {
            entry: bb,
            selected: bb === Ob,
            onSelect: ub.select
          }, bb.codexEntryId)))
        }), (0, jb.jsx)(cb, {
          entry: Ob,
          fileNumber: Ub
        })]
      })
    }
    var Rb = hb(314);
    class bu extends sb.c {
      constructor(bb, ub, hb, Bb, Ob, Gb) {
        super(bb, ub, hb), this.pacer = Bb, this.command = Ob, this.predict = Gb, this.board = null, this.confirmed = null, this.selectedId = "", this.notice = null, this.unsubscribePacer = void 0, this.select = bb => {
          this.selectedId = bb, this.emit()
        }, this.act = (bb, ub) => {
          if (!this.open || null === this.board || !this.pacer.send(`${this.command} ${bb} ${ub}`, this.rollBack)) return;
          const hb = this.predict(this.board, bb, ub);
          null !== hb && (this.board = hb.board, this.notice = hb.notice, this.emit())
        }, this.rollBack = () => {
          this.board !== this.confirmed && (this.board = this.confirmed, this.notice = null)
        }, this.unsubscribePacer = Bb.subscribe((() => {
          this.emit()
        }))
      }
      cZ(bb) {
        const ub = this.messageOpens(bb);
        if (ub && this.open) return this.board === this.confirmed && (this.board = bb), this.confirmed = bb, void this.emit();
        if (this.board = bb, this.confirmed = bb, this.pacer.onReply(), ub) return this.notice = null, this.selectedId = this.openingSelection(bb), void this.show();
        const hb = this.messageNotice(bb);
        null !== hb && (this.notice = hb), this.emit()
      }
      dispose() {
        this.unsubscribePacer(), super.dispose()
      }
      onClosed() {
        this.notice = null
      }
    }

    function uu(bb, ub) {
      return bb.loadoutCoins >= ub.loadoutCostCoins && ub.loadoutCostParts.every((ub => function(bb, ub) {
        return hu(bb, ub).loadoutHeldPartAmount
      }(bb, ub.loadoutPartCurrency) >= ub.loadoutPartAmount))
    }

    function hu(bb, ub) {
      return bb.loadoutHeldParts.find((bb => bb.loadoutHeldPartCurrency === ub))
    }

    function Bu(bb, ub) {
      return bb.loadoutSlots.find((bb => bb.loadoutSlotKind === ub))
    }

    function Ou(bb) {
      return bb.loadoutPerks.filter((bb => bb.loadoutPerkEquipped)).length >= bb.loadoutMaxPerks
    }

    function Gu(bb, ub, hb) {
      for (const Ob of bb.loadoutSlots) {
        const Bb = Ob.loadoutSlotOptions.find((bb => bb.loadoutOptionId === hb));
        if (Bb) return "loadoutArmour" === Ob.loadoutSlotKind ? Lu(bb, Ob, Bb, ub) : Uu(bb, Ob, Bb, ub)
      }
      const Bb = bb.loadoutPerks.find((bb => bb.loadoutPerkId === hb));
      return Bb ? function(bb, ub, hb) {
        const Bb = ub.loadoutPerkOwned,
          Ob = ub.loadoutPerkEquipped,
          Gb = ub.loadoutPerkName,
          Ub = Ou(bb);
        if ("loadoutUnlock" === hb) {
          if (Bb || !uu(bb, ub.loadoutPerkCost)) return null;
          const hb = {
            ...ub,
            loadoutPerkOwned: !0,
            loadoutPerkEquipped: !Ub
          };
          return {
            board: Su(au(bb, ub.loadoutPerkCost), hb),
            notice: Hu(Ub ? "loadoutNoticeUnlockedNoRoom" : "loadoutNoticeUnlocked", Gb)
          }
        }
        if ("loadoutUpgrade" === hb || !Bb || "loadoutEquip" === hb === Ob || !Ob && Ub) return null;
        return {
          board: Su(bb, {
            ...ub,
            loadoutPerkEquipped: !Ob
          }),
          notice: Hu(Ob ? "loadoutNoticeUnequipped" : "loadoutNoticeEquipped", Gb)
        }
      }(bb, Bb, ub) : null
    }

    function Uu(bb, ub, hb, Bb) {
      const Ob = hb.loadoutOptionOwnedTier,
        Gb = hb.loadoutOptionName;
      if ("loadoutEquip" === Bb) return 0 === Ob ? null : {
        board: Yu(bb, ub, hb.loadoutOptionId, null),
        notice: Hu("loadoutNoticeEquipped", Gb)
      };
      const Ub = "loadoutUnlock" === Bb;
      if (Ub && 0 !== Ob || "loadoutUpgrade" === Bb && (0 === Ob || Ob >= hb.loadoutOptionTiers.length) || "loadoutUnequip" === Bb) return null;
      const Lb = hb.loadoutOptionTiers[Ob].loadoutTierCost;
      if (!uu(bb, Lb)) return null;
      const Yb = {
          ...hb,
          loadoutOptionOwnedTier: Ob + 1
        },
        Sb = Ub ? hb.loadoutOptionId : ub.loadoutSlotEquippedId;
      return {
        board: Yu(au(bb, Lb), ub, Sb, Yb),
        notice: Ub ? Hu("loadoutNoticeUnlocked", Gb) : Hu("loadoutNoticeUpgraded", Gb, Ob + 1)
      }
    }

    function Lu(bb, ub, hb, Bb) {
      const Ob = hb.loadoutOptionOwnedTier > 0,
        Gb = hb.loadoutOptionName;
      if ("loadoutEquip" === Bb && Ob) return {
        board: Yu(bb, ub, hb.loadoutOptionId, null),
        notice: Hu("loadoutNoticeEquipped", Gb)
      };
      const Ub = hb.loadoutOptionTiers[0].loadoutTierCost;
      return "loadoutUnlock" !== Bb || Ob || !uu(bb, Ub) ? null : {
        board: Yu(au(bb, Ub), ub, hb.loadoutOptionId, {
          ...hb,
          loadoutOptionOwnedTier: 1
        }),
        notice: Hu("loadoutNoticeUnlocked", Gb)
      }
    }

    function Yu(bb, ub, hb, Bb) {
      const Ob = {
        ...ub,
        loadoutSlotEquippedId: hb,
        loadoutSlotOptions: ub.loadoutSlotOptions.map((bb => null !== Bb && bb.loadoutOptionId === Bb.loadoutOptionId ? Bb : bb))
      };
      return {
        ...bb,
        loadoutSlots: bb.loadoutSlots.map((bb => bb === ub ? Ob : bb))
      }
    }

    function Su(bb, ub) {
      return {
        ...bb,
        loadoutPerks: bb.loadoutPerks.map((bb => bb.loadoutPerkId === ub.loadoutPerkId ? ub : bb))
      }
    }

    function au(bb, ub) {
      return {
        ...bb,
        loadoutCoins: bb.loadoutCoins - ub.loadoutCostCoins,
        loadoutHeldParts: bb.loadoutHeldParts.map((bb => {
          const hb = ub.loadoutCostParts.find((ub => ub.loadoutPartCurrency === bb.loadoutHeldPartCurrency));
          return hb ? {
            ...bb,
            loadoutHeldPartAmount: bb.loadoutHeldPartAmount - hb.loadoutPartAmount
          } : bb
        }))
      }
    }

    function Hu(bb, ub) {
      return {
        loadoutNoticeKey: bb,
        loadoutNoticeRefused: !1,
        loadoutNoticeName: ub,
        loadoutNoticeTier: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
      }
    }
    const wu = "containmentLoadoutView";
    class Zu extends bu {
      constructor(bb, ub, hb, Bb) {
        super(bb, ub, hb, Bb, "loadout", Gu), this.slot = "loadoutPrimary", this.snapshot = this.buildSnapshot(), this.selectSlot = bb => {
          this.slot = bb, this.selectedId = Xu(this.board, bb), this.emit()
        }
      }
      messageOpens(bb) {
        return bb.loadoutMessageOpens
      }
      messageNotice(bb) {
        return bb.loadoutNotice
      }
      openingSelection(bb) {
        return Xu(bb, this.slot)
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

    function Xu(bb, ub) {
      if ("loadoutPerks" === ub) {
        var hb;
        const ub = bb.loadoutPerks;
        return (null !== (hb = ub.find((bb => bb.loadoutPerkEquipped))) && void 0 !== hb ? hb : ub[0]).loadoutPerkId
      }
      return Bu(bb, ub).loadoutSlotEquippedId
    }
    const pu = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAY0lEQVR4nGNgIAP8x4FRwP/sFt3/EYU6YBqGIwp1MBSDBUH4/3nW//83csD5DOgKfeKNsWIMhV+///qvbOT7/87cMjCG8TEUgiSLqlpRMEgMQ+HJvgy4aTAMEsPqc2KChyAAAFxNbnylK5O6AAAAAElFTkSuQmCC";
    var ou = hb(36527),
      Au = hb(1177);
    const lu = {
        loadoutPrimary: `${nb}:loadoutSlotPrimary`,
        loadoutSecondary: `${nb}:loadoutSlotSecondary`,
        loadoutOffensive: `${nb}:loadoutSlotOffensive`,
        loadoutSelfHelp: `${nb}:loadoutSlotSelfHelp`,
        loadoutArmour: `${nb}:loadoutSlotArmour`,
        loadoutPerks: `${nb}:loadoutSlotPerks`
      },
      Ku = {
        section: "right",
        xw: "bottom",
        act: "top"
      },
      Wu = (0, Bb.createContext)({
        step: null,
        targetRef: () => {}
      });

    function Cu() {
      const {
        step: bb,
        targetRef: ub
      } = (0, Bb.useContext)(Wu);
      return (hb, Bb) => (null === bb || void 0 === bb ? void 0 : bb.kind) === hb && bb.id === Bb ? ub : void 0
    }

    function du(bb, ub) {
      const hb = ub.loadoutTargetId;
      if ("loadoutPerks" === ub.loadoutTargetSection) {
        const ub = bb.loadoutPerks.find((bb => bb.loadoutPerkId === hb));
        return {
          name: ub.loadoutPerkName,
          owned: ub.loadoutPerkOwned,
          equipped: ub.loadoutPerkEquipped
        }
      }
      const Bb = Bu(bb, ub.loadoutTargetSection),
        Ob = Bb.loadoutSlotOptions.find((bb => bb.loadoutOptionId === hb));
      return {
        name: Ob.loadoutOptionName,
        owned: Ob.loadoutOptionOwnedTier > 0,
        equipped: Bb.loadoutSlotEquippedId === hb
      }
    }

    function ru(bb, ub, hb, Bb) {
      const [Ob, Gb] = bb(`${nb}:${ub}`, {
        [hb]: "\x01"
      }).split("\x01");
      return (0, jb.jsxs)(jb.Fragment, {
        children: [Ob, (0, jb.jsx)("span", {
          className: "LoadoutWalkthroughName",
          children: Bb
        }), Gb]
      })
    }

    function ju(bb) {
      let {
        view: ub,
        onDismiss: hb,
        children: Ob
      } = bb;
      const {
        t: Gb
      } = (0, Hb.K)(), Ub = ub.loadout, Lb = ub.open ? Ub.loadoutWalkthrough.map((bb => ({
        target: bb,
        info: du(Ub, bb)
      }))).find((bb => {
        let {
          info: ub
        } = bb;
        return !ub.equipped
      })) : void 0;
      let Yb = null,
        Sb = null;
      if (void 0 !== Lb) {
        const {
          target: bb,
          info: hb
        } = Lb;
        ub.slot !== bb.loadoutTargetSection ? (Yb = {
          kind: "section",
          id: bb.loadoutTargetSection
        }, Sb = ru(Gb, "loadoutWalkthroughSection", "section", Gb(lu[bb.loadoutTargetSection]))) : ub.selectedId !== bb.loadoutTargetId ? (Yb = {
          kind: "xw",
          id: bb.loadoutTargetId
        }, Sb = ru(Gb, "loadoutWalkthroughPick", "name", hb.name)) : (Yb = {
          kind: "act",
          id: bb.loadoutTargetId
        }, Sb = ru(Gb, hb.owned ? "loadoutWalkthroughEquip" : "loadoutWalkthroughUnlock", "name", hb.name))
      }
      const ab = null === Yb ? null : function(bb) {
          return `${bb.kind}:${bb.id}`
        }(Yb),
        [wb, Zb] = (0, Bb.useState)(null),
        Xb = (0, Bb.useCallback)((bb => {
          Zb((ub => null !== bb ? {
            key: ab,
            node: bb
          } : (null === ub || void 0 === ub ? void 0 : ub.key) === ab ? null : ub))
        }), [ab]),
        pb = null !== ab && (null === wb || void 0 === wb ? void 0 : wb.key) === ab ? wb.node : null;
      return (0, jb.jsxs)(Wu.Provider, {
        value: {
          step: Yb,
          targetRef: Xb
        },
        children: [Ob, null !== Yb && null !== pb && (0, jb.jsx)(nu, {
          target: pb,
          placement: Ku[Yb.kind],
          onDismiss: hb,
          children: Sb
        }, ab)]
      })
    }

    function nu(bb) {
      let {
        target: ub,
        placement: hb,
        onDismiss: Ob,
        children: Gb
      } = bb;
      const {
        t: Ub
      } = (0, Hb.K)(), Lb = (0, Bb.useRef)(ub);
      return Lb.current = ub, (0, Au.v)("popup", Lb, Ob), (0, jb.jsxs)(ou.d, {
        target: ub,
        placement: hb,
        className: "LoadoutWalkthroughStep",
        spotlightMargin: 10,
        children: [(0, jb.jsxs)("div", {
          className: "LoadoutWalkthroughHeader",
          children: [(0, jb.jsx)("img", {
            className: "LoadoutWalkthroughPortrait",
            src: pu,
            alt: "",
            draggable: !1
          }), (0, jb.jsx)("span", {
            className: "LoadoutWalkthroughSpeaker",
            children: Ub(`${nb}:operatorName`)
          }), (0, jb.jsx)(Xb.i, {
            onClick: Ob,
            ariaLabel: Ub(`${nb}:loadoutWalkthroughClose`),
            padIgnore: !0
          })]
        }), (0, jb.jsx)("p", {
          className: "LoadoutWalkthroughText",
          children: Gb
        })]
      })
    }
    const Du = new Set(["loadoutStatReload", "loadoutStatResupply"]);

    function xu(bb) {
      let {
        cost: ub,
        loadout: hb
      } = bb;
      const {
        t: Bb
      } = (0, Hb.K)();
      return ub.loadoutCostCoins <= 0 && 0 === ub.loadoutCostParts.length ? (0, jb.jsx)("span", {
        className: "LoadoutCost",
        children: Bb(`${nb}:loadoutFree`)
      }) : (0, jb.jsxs)("span", {
        className: "LoadoutCost",
        children: [ub.loadoutCostCoins > 0 && (0, jb.jsx)(ib, {
          itemName: Db,
          amount: ub.loadoutCostCoins,
          MS: hb.loadoutCoins
        }), ub.loadoutCostParts.map((bb => {
          const ub = hu(hb, bb.loadoutPartCurrency);
          return (0, jb.jsx)(ib, {
            itemName: ub.loadoutHeldPartItem,
            amount: bb.loadoutPartAmount,
            MS: ub.loadoutHeldPartAmount
          }, bb.loadoutPartCurrency)
        }))]
      })
    }
    const zu = {
      loadoutStatFireRate: `${nb}:loadoutUnitPerMinute`,
      loadoutStatReload: `${nb}:loadoutUnitSeconds`,
      loadoutStatResupply: `${nb}:loadoutUnitSeconds`
    };

    function gu(bb) {
      return "loadoutStatPotency" === bb.loadoutStatKind ? (0, Rb.R)(bb.loadoutStatValue) : String(bb.loadoutStatValue)
    }

    function iu(bb) {
      var ub;
      let {
        option: hb
      } = bb;
      const {
        t: Bb
      } = (0, Hb.K)(), Ob = hb.loadoutOptionTiers, Gb = null === (ub = Ob[0]) || void 0 === ub ? void 0 : ub.loadoutTierStats.map((bb => bb.loadoutStatKind));
      if (!Gb || 0 === Gb.length) return null;
      const Ub = hb.loadoutOptionOwnedTier,
        Lb = (bb, ub) => {
          var hb;
          return null === (hb = Ob[bb]) || void 0 === hb ? void 0 : hb.loadoutTierStats.find((bb => bb.loadoutStatKind === ub))
        };
      return (0, jb.jsxs)("table", {
        className: "LoadoutTierTable",
        children: [(0, jb.jsx)("thead", {
          children: (0, jb.jsxs)("tr", {
            children: [(0, jb.jsx)("th", {}), Ob.map(((bb, ub) => (0, jb.jsx)("th", {
              className: Sb()({
                Current: ub + 1 === Ub,
                Next: ub === Ub
              }),
              children: Bb(`${nb}:loadoutTier`, {
                tier: (0, Rb.R)(ub + 1)
              })
            }, ub)))]
          })
        }), (0, jb.jsx)("tbody", {
          children: Gb.map((bb => {
            const ub = zu[bb];
            return (0, jb.jsxs)("tr", {
              children: [(0, jb.jsxs)("th", {
                scope: "row",
                children: [Bb(`${nb}:${bb}`), ub && (0, jb.jsx)("span", {
                  className: "LoadoutStatUnit",
                  children: Bb(ub)
                })]
              }), Ob.map(((ub, hb) => {
                const Bb = Lb(hb, bb),
                  Ob = hb > 0 ? Lb(hb - 1, bb) : void 0,
                  Gb = Bb && Ob ? Bb.loadoutStatValue - Ob.loadoutStatValue : 0,
                  Yb = Du.has(bb) ? Gb < 0 : Gb > 0,
                  ab = hb === Ub;
                return (0, jb.jsxs)("td", {
                  className: Sb()({
                    Current: hb + 1 === Ub,
                    Next: ab,
                    Gain: Yb,
                    Owned: hb < Ub
                  }),
                  children: [ab && Yb && (0, jb.jsx)("span", {
                    className: "LoadoutGainArrow",
                    "aria-hidden": "true",
                    children: Gb < 0 ? "\u25bc" : "\u25b2"
                  }), Bb ? gu(Bb) : "-"]
                }, hb)
              }))]
            }, bb)
          }))
        })]
      })
    }

    function vu(bb) {
      let {
        view: ub,
        controller: hb,
        slot: Bb,
        option: Ob
      } = bb;
      const {
        t: Gb
      } = (0, Hb.K)(), Ub = ub.loadout, Lb = Ob.loadoutOptionOwnedTier, Yb = Ob.loadoutOptionTiers.length, Sb = Bb.loadoutSlotEquippedId === Ob.loadoutOptionId, ab = Lb < Yb ? Ob.loadoutOptionTiers[Lb].loadoutTierCost : null, wb = null !== ab && uu(Ub, ab), Zb = Ob.loadoutOptionId, pb = Cu();
      return (0, jb.jsxs)(jb.Fragment, {
        children: [(0, jb.jsx)(Ju, {
          icon: Ob.loadoutOptionIcon,
          name: Ob.loadoutOptionName,
          status: 0 === Lb ? Gb(`${nb}:loadoutLocked`) : Yb > 1 ? Gb(`${nb}:loadoutTier`, {
            tier: (0, Rb.R)(Lb)
          }) : null,
          locked: 0 === Lb,
          equipped: Sb
        }), (0, jb.jsx)("p", {
          className: "BoardDescription",
          children: Ob.loadoutOptionDescription
        }), (0, jb.jsx)(iu, {
          option: Ob
        }), (0, jb.jsxs)("div", {
          ref: pb("act", Zb),
          className: "BoardActions",
          children: [null !== ab && (0, jb.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, jb.jsx)(xu, {
              cost: ab,
              loadout: Ub
            }), (0, jb.jsx)(Xb.m, {
              disabled: !wb || ub.pending,
              onClick: () => {
                hb.act(0 === Lb ? "loadoutUnlock" : "loadoutUpgrade", Zb)
              },
              children: 0 === Lb ? Gb(`${nb}:loadoutUnlock`) : Gb(`${nb}:loadoutUpgrade`, {
                tier: (0, Rb.R)(Lb + 1)
              })
            })]
          }), null === ab && Yb > 1 && (0, jb.jsx)("span", {
            className: "BoardHint",
            children: Gb(`${nb}:loadoutMaxed`)
          }), Lb > 0 && !Sb && (0, jb.jsx)(Xb.e, {
            disabled: ub.pending,
            onClick: () => {
              hb.act("loadoutEquip", Zb)
            },
            children: Gb(`${nb}:loadoutEquip`)
          })]
        })]
      })
    }

    function tu(bb) {
      let {
        view: ub,
        controller: hb,
        perk: Bb
      } = bb;
      const {
        t: Ob
      } = (0, Hb.K)(), Gb = ub.loadout, Ub = Ou(Gb), Lb = Bb.loadoutPerkId, Yb = Cu();
      return (0, jb.jsxs)(jb.Fragment, {
        children: [(0, jb.jsx)(Ju, {
          icon: Bb.loadoutPerkIcon,
          name: Bb.loadoutPerkName,
          status: Bb.loadoutPerkOwned ? null : Ob(`${nb}:loadoutLocked`),
          locked: !Bb.loadoutPerkOwned,
          equipped: Bb.loadoutPerkEquipped
        }), (0, jb.jsx)("p", {
          className: "BoardDescription",
          children: Bb.loadoutPerkDescription
        }), (0, jb.jsxs)("div", {
          ref: Yb("act", Lb),
          className: "BoardActions",
          children: [!Bb.loadoutPerkOwned && (0, jb.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, jb.jsx)(xu, {
              cost: Bb.loadoutPerkCost,
              loadout: Gb
            }), (0, jb.jsx)(Xb.m, {
              disabled: !uu(Gb, Bb.loadoutPerkCost) || ub.pending,
              onClick: () => {
                hb.act("loadoutUnlock", Lb)
              },
              children: Ob(`${nb}:loadoutUnlock`)
            })]
          }), Bb.loadoutPerkOwned && !Bb.loadoutPerkEquipped && (0, jb.jsx)(Xb.e, {
            disabled: Ub || ub.pending,
            onClick: () => {
              hb.act("loadoutEquip", Lb)
            },
            children: Ob(`${nb}:loadoutEquip`)
          }), Bb.loadoutPerkOwned && !Bb.loadoutPerkEquipped && Ub && (0, jb.jsx)("span", {
            className: "BoardHint",
            children: Ob(`${nb}:loadoutSocketsFullHint`)
          }), Bb.loadoutPerkEquipped && (0, jb.jsx)(Xb.O, {
            disabled: ub.pending,
            onClick: () => {
              hb.act("loadoutUnequip", Lb)
            },
            children: Ob(`${nb}:loadoutUnequip`)
          })]
        })]
      })
    }

    function Ju(bb) {
      let {
        icon: ub,
        name: hb,
        status: Bb,
        locked: Ob,
        equipped: Gb
      } = bb;
      const {
        t: Ub
      } = (0, Hb.K)();
      return (0, jb.jsxs)(eb, {
        icon: (0, jb.jsx)(zb, {
          itemName: ub
        }),
        name: hb,
        children: [null !== Bb && (0, jb.jsx)("span", {
          className: Sb()("LoadoutStatusText", {
            Locked: Ob
          }),
          children: Bb
        }), Gb && (0, jb.jsx)("span", {
          className: "BoardBadge",
          children: Ub(`${nb}:loadoutEquippedBadge`)
        })]
      })
    }

    function eu(bb) {
      let {
        view: ub,
        controller: hb
      } = bb;
      const Bb = ub.loadout;
      if ("loadoutPerks" === ub.slot) {
        const bb = Bb.loadoutPerks.find((bb => bb.loadoutPerkId === ub.selectedId));
        return (0, jb.jsx)("section", {
          className: "BoardDetail",
          children: bb && (0, jb.jsx)(tu, {
            view: ub,
            controller: hb,
            perk: bb
          })
        })
      }
      const Ob = Bu(Bb, ub.slot),
        Gb = Ob.loadoutSlotOptions.find((bb => bb.loadoutOptionId === ub.selectedId));
      return (0, jb.jsx)("section", {
        className: "BoardDetail",
        children: Gb && (0, jb.jsx)(vu, {
          view: ub,
          controller: hb,
          slot: Ob,
          option: Gb
        })
      })
    }

    function Nu(bb) {
      let {
        owned: ub,
        total: hb
      } = bb;
      return hb <= 1 ? null : (0, jb.jsx)("span", {
        className: "LoadoutPips",
        children: Array.from({
          length: hb
        }, ((bb, hb) => (0, jb.jsx)("span", {
          className: Sb()("LoadoutPip", {
            Filled: hb < ub
          })
        }, hb)))
      })
    }

    function su(bb) {
      let {
        view: ub,
        controller: hb
      } = bb;
      const {
        t: Bb
      } = (0, Hb.K)(), Ob = ub.loadout, Gb = Cu();
      return (0, jb.jsxs)("nav", {
        className: "LoadoutKit",
        "aria-label": Bb(`${nb}:loadoutKit`),
        children: [Ob.loadoutSlots.map((bb => {
          const Ob = bb.loadoutSlotOptions.find((ub => ub.loadoutOptionId === bb.loadoutSlotEquippedId));
          return (0, jb.jsxs)("button", {
            ref: Gb("section", bb.loadoutSlotKind),
            type: "button",
            className: Sb()("LoadoutKitSlot", {
              Selected: ub.slot === bb.loadoutSlotKind
            }),
            onClick: () => {
              hb.selectSlot(bb.loadoutSlotKind)
            },
            children: [(0, jb.jsx)("span", {
              className: "LoadoutKitIcon",
              children: Ob && (0, jb.jsx)(zb, {
                itemName: Ob.loadoutOptionIcon
              })
            }), (0, jb.jsxs)("span", {
              className: "LoadoutKitText",
              children: [(0, jb.jsxs)("span", {
                className: "LoadoutKitTop",
                children: [(0, jb.jsx)("span", {
                  className: "LoadoutKitLabel",
                  children: Bb(lu[bb.loadoutSlotKind])
                }), Ob && (0, jb.jsx)(Nu, {
                  owned: Ob.loadoutOptionOwnedTier,
                  total: Ob.loadoutOptionTiers.length
                })]
              }), (0, jb.jsx)("span", {
                className: "LoadoutKitName",
                children: null === Ob || void 0 === Ob ? void 0 : Ob.loadoutOptionName
              })]
            })]
          }, bb.loadoutSlotKind)
        })), (0, jb.jsx)(Mu, {
          view: ub,
          controller: hb
        })]
      })
    }

    function Mu(bb) {
      let {
        view: ub,
        controller: hb
      } = bb;
      const {
        t: Bb
      } = (0, Hb.K)(), Ob = ub.loadout, Gb = Ob.loadoutPerks.filter((bb => bb.loadoutPerkEquipped)), Ub = Cu();
      return (0, jb.jsxs)("button", {
        ref: Ub("section", "loadoutPerks"),
        type: "button",
        className: Sb()("LoadoutKitSlot", "LoadoutPerks", {
          Selected: "loadoutPerks" === ub.slot
        }),
        onClick: () => {
          hb.selectSlot("loadoutPerks")
        },
        children: [(0, jb.jsxs)("span", {
          className: "LoadoutKitTop",
          children: [(0, jb.jsx)("span", {
            className: "LoadoutKitLabel",
            children: Bb(lu.loadoutPerks)
          }), (0, jb.jsx)("span", {
            className: "LoadoutPerkCount",
            children: Bb(`${nb}:loadoutPerkCount`, {
              equipped: String(Gb.length),
              max: String(Ob.loadoutMaxPerks)
            })
          })]
        }), (0, jb.jsx)("span", {
          className: "LoadoutSockets",
          children: Array.from({
            length: Ob.loadoutMaxPerks
          }, ((bb, ub) => {
            const hb = Gb[ub];
            return (0, jb.jsxs)("span", {
              className: Sb()("LoadoutSocket", {
                Filled: hb,
                Empty: !hb
              }),
              children: [(0, jb.jsx)("span", {
                className: "LoadoutSocketWell",
                children: hb && (0, jb.jsx)(zb, {
                  itemName: hb.loadoutPerkIcon
                })
              }), (0, jb.jsx)("span", {
                className: "LoadoutSocketName",
                children: hb ? hb.loadoutPerkName : Bb(`${nb}:loadoutPerkSocketEmpty`)
              })]
            }, ub)
          }))
        })]
      })
    }

    function mu(bb) {
      let {
        icon: ub,
        name: hb,
        selected: Bb,
        equipped: Ob,
        locked: Gb,
        ownedTier: Ub,
        tiers: Lb,
        buttonRef: Yb,
        onSelect: Sb
      } = bb;
      const {
        t: ab
      } = (0, Hb.K)();
      return (0, jb.jsxs)(Jb, {
        icon: (0, jb.jsx)(zb, {
          itemName: ub
        }),
        name: hb,
        selected: Bb,
        locked: Gb,
        buttonRef: Yb,
        onSelect: Sb,
        children: [Ob && (0, jb.jsx)("span", {
          className: "BoardBadge",
          children: ab(`${nb}:loadoutEquippedBadge`)
        }), Gb && (0, jb.jsx)("span", {
          className: "BoardBadge Muted",
          children: ab(`${nb}:loadoutLocked`)
        }), !Gb && (0, jb.jsx)(Nu, {
          owned: Ub,
          total: Lb
        })]
      })
    }

    function Iu(bb) {
      let {
        view: ub,
        controller: hb
      } = bb;
      const Bb = ub.loadout,
        Ob = Cu();
      if ("loadoutPerks" === ub.slot) return (0, jb.jsx)("div", {
        className: "BoardTiles",
        children: Bb.loadoutPerks.map((bb => (0, jb.jsx)(mu, {
          icon: bb.loadoutPerkIcon,
          name: bb.loadoutPerkName,
          selected: ub.selectedId === bb.loadoutPerkId,
          equipped: bb.loadoutPerkEquipped,
          locked: !bb.loadoutPerkOwned,
          ownedTier: 0,
          tiers: 0,
          buttonRef: Ob("xw", bb.loadoutPerkId),
          onSelect: () => {
            hb.select(bb.loadoutPerkId)
          }
        }, bb.loadoutPerkId)))
      });
      const Gb = Bu(Bb, ub.slot);
      return (0, jb.jsx)("div", {
        className: "BoardTiles",
        children: Gb.loadoutSlotOptions.map((bb => (0, jb.jsx)(mu, {
          icon: bb.loadoutOptionIcon,
          name: bb.loadoutOptionName,
          selected: ub.selectedId === bb.loadoutOptionId,
          equipped: Gb.loadoutSlotEquippedId === bb.loadoutOptionId,
          locked: 0 === bb.loadoutOptionOwnedTier,
          ownedTier: bb.loadoutOptionOwnedTier,
          tiers: bb.loadoutOptionTiers.length,
          buttonRef: Ob("xw", bb.loadoutOptionId),
          onSelect: () => {
            hb.select(bb.loadoutOptionId)
          }
        }, bb.loadoutOptionId)))
      })
    }

    function Pu(bb) {
      let {
        loadout: ub
      } = bb;
      return (0, jb.jsx)(Nb, {
        coins: ub.loadoutCoins,
        children: ub.loadoutHeldParts.filter((bb => bb.loadoutHeldPartAmount > 0)).map((bb => (0, jb.jsx)(ib, {
          itemName: bb.loadoutHeldPartItem,
          amount: bb.loadoutHeldPartAmount
        }, bb.loadoutHeldPartCurrency)))
      })
    }

    function qu(bb) {
      let {
        controller: ub
      } = bb;
      const hb = (0, ab.k)(wu, ub.getSnapshot()),
        {
          t: Bb
        } = (0, Hb.K)();
      if (null === hb.loadout) return null;
      const Ob = hb.notice;
      return (0, jb.jsx)(ju, {
        view: hb,
        onDismiss: ub.dismiss,
        children: (0, jb.jsxs)(xb, {
          open: hb.open,
          onDismiss: ub.dismiss,
          title: Bb(`${nb}:loadoutTitle`),
          className: "ContainmentLoadoutPanel",
          headerExtra: (0, jb.jsx)(Pu, {
            loadout: hb.loadout
          }),
          statusRefused: null === Ob || void 0 === Ob ? void 0 : Ob.loadoutNoticeRefused,
          status: (0, jb.jsxs)(jb.Fragment, {
            children: [(0, jb.jsx)("span", {
              className: "LoadoutRadioBadge",
              children: Bb(`${nb}:loadoutRadioBadge`)
            }), null !== Ob && Bb(`${nb}:${Ob.loadoutNoticeKey}`, {
              name: Ob.loadoutNoticeName,
              tier: (0, Rb.R)(Ob.loadoutNoticeTier),
              max: String(hb.loadout.loadoutMaxPerks)
            })]
          }),
          children: [(0, jb.jsx)(su, {
            view: hb,
            controller: ub
          }), (0, jb.jsx)(Iu, {
            view: hb,
            controller: ub
          }), (0, jb.jsx)(eu, {
            view: hb,
            controller: ub
          })]
        })
      })
    }

    function Eu(bb, ub, hb) {
      const Bb = bb.locatorEntries.find((bb => bb.locatorEntryId === hb));
      if (!Bb) return null;
      const Ob = Bb.locatorEntryName;
      if ("locatorDisarm" === ub) return Bb.locatorEntryArmed ? {
        board: yu(bb, null),
        notice: Vu("locatorNoticeDisarmed", Ob)
      } : null;
      if ("locatorArm" === ub) return Bb.locatorEntryOwned && !Bb.locatorEntryArmed ? {
        board: yu(bb, hb),
        notice: Vu("locatorNoticeArmed", Ob)
      } : null;
      if (Bb.locatorEntryOwned || bb.locatorCoins < Bb.locatorEntryPrice) return null;
      const Gb = yu({
        ...bb,
        locatorCoins: bb.locatorCoins - Bb.locatorEntryPrice
      }, hb);
      return {
        board: {
          ...Gb,
          locatorEntries: Gb.locatorEntries.map((bb => bb.locatorEntryId === hb ? {
            ...bb,
            locatorEntryOwned: !0
          } : bb))
        },
        notice: Vu("locatorNoticeBought", Ob)
      }
    }

    function yu(bb, ub) {
      return {
        ...bb,
        locatorEntries: bb.locatorEntries.map((bb => {
          const hb = bb.locatorEntryId === ub;
          return bb.locatorEntryArmed === hb ? bb : {
            ...bb,
            locatorEntryArmed: hb
          }
        }))
      }
    }

    function Vu(bb, ub) {
      return {
        locatorNoticeKey: bb,
        locatorNoticeRefused: !1,
        locatorNoticeName: ub
      }
    }
    const Fu = "containmentLocatorView";
    class fu extends bu {
      constructor(bb, ub, hb, Bb) {
        super(bb, ub, hb, Bb, "locator", Eu), this.snapshot = this.buildSnapshot()
      }
      messageOpens(bb) {
        return bb.locatorMessageOpens
      }
      messageNotice(bb) {
        return bb.locatorNotice
      }
      openingSelection(bb) {
        var ub;
        const hb = bb.locatorEntries;
        return (null !== (ub = hb.find((bb => bb.locatorEntryArmed))) && void 0 !== ub ? ub : hb[0]).locatorEntryId
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
    const ku = {
        locatorContained: `${nb}:locatorFlavourContained`,
        locatorEncountered: `${nb}:locatorFlavourEncountered`,
        locatorUnseen: `${nb}:locatorFlavourUnseen`
      },
      Tu = {
        codexAnyDifficulty: null,
        codexNormalOnly: `${nb}:locatorAttunedNormal`,
        codexHardOnly: `${nb}:locatorAttunedHard`
      };

    function cu() {
      return (0, jb.jsx)(jb.Fragment, {
        children: Array.from({
          length: 5
        }, ((bb, ub) => (0, jb.jsx)("span", {
          className: "LocatorFly",
          children: (0, jb.jsx)("img", {
            src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAICAYAAADwdn+XAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYElEQVR4nGNgoBboMlb5LyUjD8YgNtHyJ6/d+Q/CILa1lz9YAbo4DCDLYxjQv3gt3AYQG90AdHkUQ/qhkjAb0BURkgcDmAQMo7sSXR7deyiGoIvDvIOsGasB+ACyBmTNACS0go3ibhumAAAAAElFTkSuQmCC",
            alt: "",
            draggable: !1
          })
        }, ub)))
      })
    }

    function Qu(bb) {
      let {
        entry: ub
      } = bb;
      const {
        t: hb
      } = (0, Hb.K)();
      return ub.locatorEntryArmed ? (0, jb.jsx)("span", {
        className: "BoardBadge Armed",
        children: hb(`${nb}:locatorArmedBadge`)
      }) : ub.locatorEntryOwned ? (0, jb.jsx)("span", {
        className: "BoardBadge",
        children: hb(`${nb}:locatorOwnedBadge`)
      }) : null
    }

    function Ru(bb) {
      let {
        entry: ub,
        coins: hb,
        inTile: Bb = !1
      } = bb;
      return (0, jb.jsx)(ib, {
        itemName: Db,
        amount: ub.locatorEntryPrice,
        MS: hb,
        inTile: Bb
      })
    }

    function bh(bb) {
      let {
        view: ub,
        controller: hb,
        entry: Bb
      } = bb;
      const {
        t: Ob
      } = (0, Hb.K)(), Gb = Bb.locatorEntryId, Ub = ub.locators.locatorEntries.find((bb => bb.locatorEntryArmed && bb !== Bb));
      return (0, jb.jsxs)("div", {
        className: "BoardActions",
        children: [Bb.locatorEntryArmed && (0, jb.jsx)(Xb.O, {
          disabled: ub.pending,
          onClick: () => {
            hb.act("locatorDisarm", Gb)
          },
          children: Ob(`${nb}:locatorDisarm`)
        }), Bb.locatorEntryOwned && !Bb.locatorEntryArmed && (0, jb.jsx)(Xb.e, {
          disabled: ub.pending,
          onClick: () => {
            hb.act("locatorArm", Gb)
          },
          children: Ob(`${nb}:locatorArm`)
        }), !Bb.locatorEntryOwned && (0, jb.jsxs)("div", {
          className: "LocatorBuy",
          children: [(0, jb.jsx)(Ru, {
            entry: Bb,
            coins: ub.locators.locatorCoins
          }), (0, jb.jsx)(Xb.m, {
            disabled: ub.locators.locatorCoins < Bb.locatorEntryPrice || ub.pending,
            onClick: () => {
              hb.act("locatorBuy", Gb)
            },
            children: Ob(`${nb}:locatorBuy`)
          })]
        }), Ub && !Bb.locatorEntryArmed && (0, jb.jsx)("span", {
          className: "BoardHint",
          children: Ob(`${nb}:locatorReplacesHint`, {
            name: Ub.locatorEntryName
          })
        })]
      })
    }

    function uh(bb) {
      let {
        entry: ub
      } = bb;
      return "locatorUnseen" === ub.locatorEntryStanding ? (0, jb.jsx)(zb, {
        itemName: "Compass"
      }) : (0, jb.jsx)(gb, {
        anomalyId: ub.locatorEntryId,
        caught: "locatorContained" === ub.locatorEntryStanding
      })
    }

    function hh(bb) {
      let {
        view: ub,
        controller: hb,
        entry: Bb
      } = bb;
      const {
        t: Ob
      } = (0, Hb.K)(), Gb = Tu[Bb.locatorEntryDifficulty];
      return (0, jb.jsxs)("section", {
        className: "BoardDetail",
        children: [(0, jb.jsxs)("div", {
          className: Sb()("LocatorLabel", {
            Armed: Bb.locatorEntryArmed
          }),
          children: [(0, jb.jsx)(eb, {
            icon: (0, jb.jsx)(uh, {
              entry: Bb
            }),
            name: Ob(`${nb}:locatorName`, {
              name: Bb.locatorEntryName
            }),
            children: (0, jb.jsx)(Qu, {
              entry: Bb
            })
          }), (0, jb.jsx)("p", {
            className: "BoardDescription",
            children: Ob(Bb.locatorEntryArmed ? `${nb}:locatorFlavourArmed` : ku[Bb.locatorEntryStanding])
          }), null !== Gb && (0, jb.jsx)("p", {
            className: "LocatorAttuned",
            children: Ob(Gb)
          }), (0, jb.jsx)("p", {
            className: "BoardDescription LocatorUsage",
            children: Ob(`${nb}:locatorUsage`)
          })]
        }), (0, jb.jsx)(bh, {
          view: ub,
          controller: hb,
          entry: Bb
        })]
      })
    }

    function Bh(bb) {
      let {
        controller: ub
      } = bb;
      const hb = (0, ab.k)(Fu, ub.getSnapshot()),
        {
          t: Bb
        } = (0, Hb.K)(),
        Ob = hb.locators;
      if (null === Ob) return null;
      const Gb = Ob.locatorEntries.find((bb => bb.locatorEntryId === hb.selectedId)),
        Ub = hb.notice;
      return (0, jb.jsxs)(xb, {
        open: hb.open,
        onDismiss: ub.dismiss,
        title: Bb(`${nb}:locatorTitle`),
        className: "ContainmentLocatorPanel",
        decor: (0, jb.jsx)(cu, {}),
        headerExtra: (0, jb.jsx)(Nb, {
          coins: Ob.locatorCoins
        }),
        statusRefused: null === Ub || void 0 === Ub ? void 0 : Ub.locatorNoticeRefused,
        status: (0, jb.jsxs)(jb.Fragment, {
          children: [(0, jb.jsx)("span", {
            className: "LocatorKeeperBadge",
            children: Bb(`${nb}:locatorKeeperName`)
          }), null !== Ub && Bb(`${nb}:${Ub.locatorNoticeKey}`, {
            name: Ub.locatorNoticeName
          })]
        }),
        children: [(0, jb.jsx)("div", {
          className: "BoardTiles",
          children: Ob.locatorEntries.map((bb => (0, jb.jsxs)(Jb, {
            icon: (0, jb.jsx)(uh, {
              entry: bb
            }),
            name: bb.locatorEntryName,
            selected: bb === Gb,
            locked: !1,
            className: Sb()("LocatorTag", {
              Armed: bb.locatorEntryArmed
            }),
            onSelect: () => {
              ub.select(bb.locatorEntryId)
            },
            children: [(0, jb.jsx)(Qu, {
              entry: bb
            }), !bb.locatorEntryOwned && (0, jb.jsx)(Ru, {
              entry: bb,
              coins: Ob.locatorCoins,
              inTile: !0
            })]
          }, bb.locatorEntryId)))
        }), (0, jb.jsx)(hh, {
          view: hb,
          controller: ub,
          entry: Gb
        })]
      })
    }

    function Oh(bb) {
      let {
        loadout: ub,
        codex: hb,
        locator: Bb
      } = bb;
      return (0, jb.jsxs)(jb.Fragment, {
        children: [(0, jb.jsx)(qu, {
          controller: ub
        }), (0, jb.jsx)(Qb, {
          controller: hb
        }), (0, jb.jsx)(Bh, {
          controller: Bb
        })]
      })
    }
    var Gh = hb(38160);
    class Uh {
      constructor(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.sendCommand = bb, this.budget = void 0, this.awaitingReply = !1, this.replyTimer = null, this.listeners = new Set, this.budget = new Gh.d({
          spacingMs: 0,
          now: ub
        }), this.budget.subscribe((() => {
          this.notify()
        }))
      }
      isPending() {
        return this.awaitingReply || this.budget.isPacing()
      }
      send(bb, ub) {
        return !this.isPending() && (this.awaitingReply = !0, this.replyTimer = setTimeout((() => {
          this.replyTimer = null, this.awaitingReply = !1, ub(), this.notify()
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
    var Lh = hb(38158);
    const Yh = new Map([
      ["npc_general", pu],
      ["npc_tentacle_guy", Lh]
    ]);

    function Sh(bb) {
      const ub = Yh.get(bb);
      if (void 0 === ub) return null;
      const hb = document.createElement("img");
      return hb.src = ub, hb.alt = "", hb.draggable = !1, hb.style.imageRendering = "pixelated", hb
    }
    const ah = function() {
      let bb, ub = !1,
        hb = null,
        Yb = null;
      const Sb = [],
        ab = bb => {
          for (const ub of Sb) ub !== bb && ub.close();
          (0, Lb.p)()
        },
        Hb = bb => {
          bb && (0, Lb.j)()
        },
        wb = new Uh((ub => {
          bb.sendCommand(ub)
        })),
        Zb = new Zu((bb => {
          Ub.i.vp(wu, bb, !0)
        }), ab, Hb, wb),
        Xb = new mb((bb => {
          Ub.i.vp(Mb, bb, !0)
        }), ab, Hb),
        pb = new fu((bb => {
          Ub.i.vp(Fu, bb, !0)
        }), ab, Hb, wb);
      Sb.push(Zb, Xb, pb);
      return {
        onCreate: ub => {
          bb = ub, hb = (0, Lb.t)(null, {
            content: (0, Bb.createElement)(Oh, {
              loadout: Zb,
              codex: Xb,
              locator: pb
            }),
            onClose: () => {
              for (const bb of Sb) bb.close()
            }
          }), Yb = (0, Gb.d)(Sh)
        },
        onReceivedMessageFromServer: (bb, ub) => {
          "containmentLoadout" === bb ? Zb.cZ(ub) : "containmentLoadoutClose" === bb ? Zb.isOpen() && (Zb.close(), (0, Lb.g)()) : "containmentCodex" === bb ? Xb.cZ(ub) : "containmentLocator" === bb && pb.cZ(ub)
        },
        gH: () => {
          ub || Ob.d.get("loadingOverlayVisible") || (ub = !0, bb.sendCommand("containmentEntered"))
        },
        onClose: () => {
          var bb, ub;
          null === (bb = hb) || void 0 === bb || bb(), hb = null, null === (ub = Yb) || void 0 === ub || ub(), Yb = null;
          for (const hb of Sb) hb.dispose();
          wb.dispose()
        }
      }
    }
  },
  36533: (bb, ub, hb) => {
    hb.d(ub, {
      B: () => sb,
      C: () => Jb,
      G: () => Mb,
      e: () => Yb,
      h: () => zb,
      j: () => Lb,
      k: () => tb,
      o: () => Db,
      p: () => db,
      s: () => vb,
      u: () => ib,
      v: () => nb,
      x: () => eb,
      y: () => Nb
    });
    var Bb = hb(29);
    const Ob = {
        codeBlock: ["codeBlockIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "worldCodeButton", "exportButton", "helpButton"],
        worldCode: ["worldCodeIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "exportButton", "helpButton"]
      },
      Gb = ["docsButton", "docsPanel", "docsClientOptionsTab", "docsClientOptions", "docsApiReferenceTab", "docsApiReference", "docsCallbacksTab", "docsCallbacks", "hideDocsButton"],
      Ub = ["aiHelperButton", "aiPanel", "aiAskBox", "aiModelChip", "aiAnswer", "aiEdits", "aiGear", "aiNotes", "aiGameSettings", "hideAiHelperButton"],
      Lb = Gb.filter((bb => "docsButton" !== bb)),
      Yb = Ub.filter((bb => "aiHelperButton" !== bb)),
      Sb = "codeEditorTutorials",
      ab = {
        codeBlockIntro: "codeBlockIntroShown",
        worldCodeIntro: "worldCodeIntroShown"
      },
      Hb = {
        welcome: "welcomeComplete",
        docsOverview: "docsOverviewComplete",
        aiHelperOverview: "aiHelperOverviewComplete"
      };
    let wb = null,
      Zb = null;
    const Xb = new Set,
      pb = new Set;
    let ob = null;
    const Ab = new Set,
      lb = new Set;

    function Kb() {
      lb.forEach((bb => {
        bb()
      }))
    }

    function Wb() {
      if (!wb) {
        const bb = Bb.j.getItem(Sb);
        wb = {
          codeBlockIntroShown: !1,
          worldCodeIntroShown: !1,
          welcomeComplete: !1,
          docsOverviewComplete: !1,
          aiHelperOverviewComplete: !1,
          ..."object" === typeof bb && null !== bb ? bb : {}
        }
      }
      return wb
    }

    function Cb(bb) {
      const ub = Wb();
      ub[bb] || (wb = {
        ...ub,
        [bb]: !0
      }, Bb.j.setItem(Sb, wb))
    }

    function db(bb) {
      return "docsOverview" === bb ? Gb : "aiHelperOverview" === bb ? Ub : Zb ? Ob[Zb] : []
    }

    function rb(bb) {
      return ("worldCodeButton" !== bb || !Wb().worldCodeIntroShown) && !Ab.has(bb)
    }

    function jb(bb) {
      var ub;
      return (null === (ub = ob) || void 0 === ub ? void 0 : ub.name) === bb ? ob.stepsDone : Xb
    }

    function nb(bb, ub) {
      if (! function(bb) {
          return ob ? ob.name === bb : "welcome" === bb
        }(bb) || !rb(ub) || jb(bb).has(ub)) return !1;
      if (ob) return !0;
      const hb = ab[ub];
      return hb ? !Wb()[hb] || pb.has(ub) : !Wb()[Hb[bb]]
    }

    function Db(bb) {
      var ub;
      return null !== (ub = db(bb).find((ub => nb(bb, ub)))) && void 0 !== ub ? ub : null
    }

    function xb(bb) {
      var ub;
      Cb(Hb[bb]), (null === (ub = ob) || void 0 === ub ? void 0 : ub.name) === bb && (ob = null)
    }

    function zb(bb) {
      const ub = (ob ? [ob.name] : ["welcome", "docsOverview"]).find((ub => Db(ub) === bb));
      if (!ub) return;
      jb(ub).add(bb);
      const hb = ab[bb];
      hb && (Cb(hb), ob || pb.add(bb)), null === Db(ub) && xb(ub), Kb()
    }

    function gb(bb, ub) {
      const hb = db(bb),
        Bb = jb(bb);
      for (let Ob = hb.indexOf(ub) - 1; Ob >= 0; Ob--)
        if (Bb.has(hb[Ob]) && rb(hb[Ob])) return hb[Ob];
      return null
    }

    function ib(bb, ub) {
      return null !== gb(bb, ub)
    }

    function vb(bb, ub) {
      const hb = gb(bb, ub);
      hb && (jb(bb).delete(hb), Kb())
    }

    function tb(bb) {
      xb(bb), "welcome" === bb && db("welcome").forEach((bb => {
        const ub = ab[bb];
        ub && Cb(ub)
      })), Kb()
    }

    function Jb(bb) {
      ob = {
        name: bb,
        stepsDone: new Set
      }, Kb()
    }

    function eb() {
      (ob || 0 !== Xb.size || 0 !== pb.size) && (ob = null, Xb.clear(), pb.clear(), Kb())
    }

    function Nb(bb, ub) {
      const hb = ub ? bb : Zb === bb ? null : Zb;
      hb !== Zb && (Zb = hb, Kb())
    }

    function sb(bb, ub) {
      Ab.has(bb) === ub && (ub ? Ab.delete(bb) : Ab.add(bb), Kb())
    }

    function Mb(bb) {
      return lb.add(bb), () => {
        lb.delete(bb)
      }
    }
  },
  38894: (bb, ub, hb) => {
    var Bb = {
      "./breach-zero-uncaught.webp": 38903,
      "./breach-zero.webp": 38906,
      "./brood-father-uncaught.webp": 38914,
      "./brood-father.webp": 38918,
      "./carousel-uncaught.webp": 38926,
      "./carousel.webp": 38935,
      "./deadlock-uncaught.webp": 38939,
      "./deadlock.webp": 38943,
      "./frost-revenant-uncaught.webp": 38950,
      "./frost-revenant.webp": 38956,
      "./hollow-choir-uncaught.webp": 38962,
      "./hollow-choir.webp": 38966,
      "./magma-warden-uncaught.webp": 38968,
      "./magma-warden.webp": 38977,
      "./patient-zero-uncaught.webp": 38980,
      "./patient-zero.webp": 38989,
      "./siege-engine-uncaught.webp": 38994,
      "./siege-engine.webp": 38998,
      "./warp-stalker-uncaught.webp": 39001,
      "./warp-stalker.webp": 39010
    };

    function Ob(bb) {
      var ub = Gb(bb);
      return hb(ub)
    }

    function Gb(bb) {
      if (!hb.o(Bb, bb)) {
        var ub = new Error("Cannot find module '" + bb + "'");
        throw ub.code = "MODULE_NOT_FOUND", ub
      }
      return Bb[bb]
    }
    Ob.keys = function() {
      return Object.keys(Bb)
    }, Ob.resolve = Gb, bb.exports = Ob, Ob.id = 38894
  },
  38903: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/breach-zero-uncaught.c7d4410f99269ac1ee2f.webp"
  },
  38906: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/breach-zero.ef5aacecf502228cd20b.webp"
  },
  38914: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/brood-father-uncaught.ee678432c71b7061fae1.webp"
  },
  38918: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/brood-father.e48391955a574c1155fa.webp"
  },
  38926: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/carousel-uncaught.a92757620f569f31d7d2.webp"
  },
  38935: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/carousel.5fc13db7958067d6e1a3.webp"
  },
  38939: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/deadlock-uncaught.feadbdbbf2d040dce5c0.webp"
  },
  38943: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/deadlock.2bcaeaa57376fd78ddcb.webp"
  },
  38950: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/frost-revenant-uncaught.c0271636eeae988b1a40.webp"
  },
  38956: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/frost-revenant.fed6021646d7f0f81876.webp"
  },
  38962: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/hollow-choir-uncaught.7eaab76a15f82bd79558.webp"
  },
  38966: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/hollow-choir.05f9c51994aecece852a.webp"
  },
  38968: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/magma-warden-uncaught.5308736fbb8a503cdfc7.webp"
  },
  38977: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/magma-warden.cc4302a49a39ae962a31.webp"
  },
  38980: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/patient-zero-uncaught.1f9ec012a14c4dbdcc8f.webp"
  },
  38989: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/patient-zero.cc76984bb20e9f9ace76.webp"
  },
  38994: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/siege-engine-uncaught.88e0ad7fec37ba2b4a2e.webp"
  },
  38998: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/siege-engine.b2e2382e415f4ae470ac.webp"
  },
  39001: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/warp-stalker-uncaught.c3b1b82ecb18446b71b0.webp"
  },
  39010: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/warp-stalker.851972c629601b668aa7.webp"
  },
  38158: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYElEQVR4nGNgIBIwovH/45JnRFaUGN+Comr+whq4GiZ0RVycnGAMAlAxsC0sMN2fvn9DodEBzEQGdUV5hvNnV4JpGJuPkwtTIQh4umZhZWMonDqjGCsbHcCCBkQjs0kDAPeaHpfX1eroAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);