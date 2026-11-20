export const id = 14;
export const ids = [14];
export const modules = {
  36209: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => mb,
      i: () => ib,
      j: () => fb,
      k: () => jb
    });
    var Ab = Ub(984),
      Mb = Ub.n(Ab),
      Tb = Ub(52),
      Eb = Ub(75),
      Yb = Ub(1273),
      Bb = Ub(1352),
      eb = Ub(1268),
      vb = Ub(1213),
      Lb = Ub(1134),
      Pb = Ub(36214),
      Xb = Ub(1023);

    function jb(bb) {
      const [ab, Ub] = (0, Tb.useState)((() => (0, Pb.k)(bb)));
      return (0, Tb.useEffect)((() => (Ub((0, Pb.k)(bb)), (0, Pb.M)((() => {
        Ub((0, Pb.k)(bb))
      })))), [bb]), ab
    }

    function Rb(bb, ab) {
      "function" === typeof bb ? bb(ab) : bb && (bb.current = ab)
    }

    function kb(bb) {
      let {
        tutorial: ab,
        step: Ub,
        enabled: Ab = !0
      } = bb;
      const Mb = jb(ab);
      return Ab && Mb === Ub
    }

    function yb(bb, ab) {
      const Ub = (0, Pb.m)(bb),
        Ab = Ub.indexOf(ab);
      return !Ub.slice(Ab + 1).some((ab => (0, Pb.v)(bb, ab)))
    }

    function Zb(bb, ab, Ub, Ab) {
      let {
        tutorial: Mb,
        step: Tb,
        waitForClick: Eb = !1,
        onPrevious: Yb
      } = bb;
      const Bb = ab && (0, Pb.r)(Mb, Tb),
        eb = ab && !yb(Mb, Tb),
        Lb = Eb ? Ab : Ub;
      let Xb = null;
      Bb ? Xb = () => {
        null === Yb || void 0 === Yb || Yb(), (0, Pb.p)(Mb, Tb)
      } : eb && (Xb = () => {
        (0, Pb.h)(Mb)
      }), (0, vb.r)("popup", null !== Lb && void 0 !== Lb ? Lb : Ub, Xb, ab && null !== Lb, null, Bb ? void 0 : "controller:menusSkipTutorial")
    }

    function Db(bb) {
      let {
        tutorial: ab,
        step: Ub,
        text: Ab,
        waitForClick: Mb = !1,
        onPrevious: Tb
      } = bb;
      const {
        t: Eb
      } = (0, Lb.A)(), Yb = yb(ab, Ub);
      return (0, Xb.jsxs)(Xb.Fragment, {
        children: [(0, Xb.jsx)("div", {
          className: "TutorialStepText",
          children: Ab
        }), (0, Xb.jsxs)("div", {
          className: "TutorialStepButtons",
          children: [(0, Pb.r)(ab, Ub) && (0, Xb.jsx)(Bb.h, {
            className: "TutorialStepButton",
            onClick: () => {
              null === Tb || void 0 === Tb || Tb(), (0, Pb.p)(ab, Ub)
            },
            children: Eb("tutorial:back")
          }), !Mb && (0, Xb.jsx)(Bb.g, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, Pb.e)(Ub)
            },
            padDefaultFocus: !0,
            children: Eb(Yb ? "tutorial:done" : "tutorial:next")
          }), !Yb && (0, Xb.jsx)(Bb.h, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, Pb.h)(ab)
            },
            children: Eb("tutorial:skip")
          })]
        })]
      })
    }
    const zb = 6;

    function xb(bb) {
      let {
        rect: ab,
        margin: Ub
      } = bb;
      const Ab = Math.max(0, ab.top - Ub),
        Mb = ab.bottom + Ub,
        Tb = Math.max(0, ab.left - Ub),
        Eb = ab.right + Ub;
      return (0, Xb.jsxs)(Xb.Fragment, {
        children: [(0, Xb.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: 0,
            left: 0,
            right: 0,
            height: Ab
          }
        }), (0, Xb.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: Mb,
            left: 0,
            right: 0,
            bottom: 0
          }
        }), (0, Xb.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: Ab,
            left: 0,
            width: Tb,
            height: Mb - Ab
          }
        }), (0, Xb.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: Ab,
            left: Eb,
            right: 0,
            height: Mb - Ab
          }
        })]
      })
    }

    function ib(bb) {
      let {
        target: ab,
        placement: Ub,
        boxRef: Ab,
        className: Bb,
        spotlightMargin: vb = zb,
        children: Lb
      } = bb;
      const {
        getArrowProps: Pb,
        getTooltipProps: jb,
        setTooltipRef: Rb,
        setTriggerRef: kb
      } = (0, Yb.d)({
        placement: Ub,
        trigger: null,
        visible: !0,
        interactive: !0,
        closeOnOutsideClick: !1,
        offset: [0, vb]
      });
      (0, Tb.useLayoutEffect)((() => {
        kb(ab)
      }), [ab, kb]);
      const yb = function(bb, ab) {
        const [Ub, Ab] = (0, Tb.useState)(null);
        return (0, Tb.useEffect)((() => {
          if (!ab || !bb) return void Ab(null);
          let Ub = 0,
            Mb = null;
          const Tb = () => {
            const ab = bb.getBoundingClientRect();
            Mb && ab.left === Mb.left && ab.top === Mb.top && ab.width === Mb.width && ab.height === Mb.height || (Mb = ab, Ab(ab)), Ub = requestAnimationFrame(Tb)
          };
          return Tb(), () => {
            cancelAnimationFrame(Ub)
          }
        }), [bb, ab]), Ub
      }(ab, !0);
      (0, Tb.useEffect)((() => {
        null === ab || void 0 === ab || ab.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        })
      }), [ab]);
      const Zb = (0, Tb.useCallback)((bb => {
        Rb(bb), Ab && (Ab.current = bb)
      }), [Rb, Ab]);
      return (0, Eb.createPortal)((0, Xb.jsxs)(Xb.Fragment, {
        children: [yb && (0, Xb.jsx)(xb, {
          rect: yb,
          margin: vb
        }), (0, Xb.jsxs)("div", {
          ref: Zb,
          ...jb({
            className: Mb()("tooltip-container SmallTextLight TutorialStep", Bb)
          }),
          children: [Lb, (0, Xb.jsx)("div", {
            ...Pb({
              className: "tooltip-arrow"
            })
          })]
        })]
      }), (0, eb.k)())
    }
    const fb = (0, Tb.forwardRef)((function(bb, ab) {
      let {
        placement: Ub = "right",
        children: Ab,
        ...Mb
      } = bb;
      const Eb = kb(Mb),
        Yb = (0, Tb.useRef)(null),
        Bb = (0, Tb.useRef)(null);
      Zb(Mb, Eb, Yb, Bb);
      const [eb, vb] = (0, Tb.useState)(null), Lb = Ab.ref, Pb = (0, Tb.useCallback)((bb => {
        Bb.current = bb, vb(bb), Rb(ab, bb), Rb(Lb, bb)
      }), [ab, Lb]);
      return (0, Xb.jsxs)(Xb.Fragment, {
        children: [(0, Tb.cloneElement)(Ab, {
          ref: Pb
        }), Eb && (0, Xb.jsx)(ib, {
          target: eb,
          placement: Ub,
          boxRef: Yb,
          children: (0, Xb.jsx)(Db, {
            ...Mb
          })
        })]
      })
    }));

    function mb(bb) {
      const ab = kb(bb),
        Ub = (0, Tb.useRef)(null);
      return Zb(bb, ab, Ub, null), ab ? (0, Eb.createPortal)((0, Xb.jsx)("div", {
        className: "TutorialCentreBackdrop",
        children: (0, Xb.jsx)("div", {
          ref: Ub,
          className: "tooltip-container SmallTextLight TutorialStep TutorialCentreStep",
          children: (0, Xb.jsx)(Db, {
            ...bb
          })
        })
      }), (0, eb.k)()) : null
    }
  },
  37875: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Eb
    });
    const Ab = 4,
      Mb = 12e3,
      Tb = 1e3;
    class Eb {
      constructor() {
        let {
          limit: bb = Ab,
          windowMs: ab = Mb,
          spacingMs: Ub = Tb,
          now: Eb = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = bb, this.windowMs = ab, this.spacingMs = Ub, this.now = Eb
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
          ab = this.lastSentAt + this.spacingMs,
          Ub = Math.min(ab > bb ? ab : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        Ub !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, Ub - bb)))
      }
      notify() {
        for (const bb of this.listeners) bb()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  36023: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Tb,
      i: () => Rb,
      j: () => kb,
      l: () => Yb,
      n: () => Pb,
      p: () => yb,
      s: () => Lb,
      u: () => Db,
      v: () => jb,
      x: () => Zb
    });
    var Ab = Ub(19),
      Mb = Ub(22);
    const Tb = "clientGameInventoryButtonsChanged",
      Eb = new Map;

    function Yb() {
      return [...Eb.values()].sort(((bb, ab) => {
        var Ub, Ab;
        return (null !== (Ub = bb.order) && void 0 !== Ub ? Ub : 0) - (null !== (Ab = ab.order) && void 0 !== Ab ? Ab : 0)
      }))
    }
    let Bb = null;

    function eb(bb) {
      Bb = bb
    }
    let vb = !1;

    function Lb(bb) {
      vb = !0;
      try {
        bb.onClick()
      } finally {
        vb = !1
      }
      bb.panel && "clientGame" === Ab.c.get("openInGameMenuName") && eb(bb.id)
    }

    function Pb() {
      return vb
    }

    function Xb() {
      return Yb().filter((bb => bb.panel && !bb.disabled))
    }

    function jb(bb) {
      const ab = Xb(),
        Ub = ab.findIndex((bb => bb.id === Bb));
      return !(Ub < 0 || ab.length < 2) && (Lb(ab[(Ub + bb + ab.length) % ab.length]), !0)
    }

    function Rb() {
      return null !== Bb && Xb().length > 1
    }

    function kb() {
      eb(null)
    }

    function yb() {
      "inventory" !== Ab.c.get("openInGameMenuName") && eb(null)
    }

    function Zb() {
      const bb = Bb;
      return eb(null), bb
    }

    function Db(bb) {
      return Eb.set(bb.id, bb), Mb.m.IR(Tb, Yb(), !0), () => {
        Eb.get(bb.id) === bb && (Eb.delete(bb.id), Mb.m.IR(Tb, Yb()))
      }
    }
  },
  37856: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Ab
    });
    class Ab {
      constructor(bb, ab, Ub) {
        this.IR = bb, this.beforeOpen = ab, this.afterClose = Ub, this.open = !1, this.cX = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.cX && (this.open = !0, this.beforeOpen(this), this.emit())
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
        this.open = !1, this.emit(), this.cX = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.cX || (this.snapshot = this.buildSnapshot(), this.IR(this.snapshot))
      }
    }
  },
  36017: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Yb,
      g: () => kb,
      i: () => yb,
      j: () => Pb,
      l: () => eb,
      o: () => Rb,
      s: () => Xb,
      w: () => vb
    });
    var Ab = Ub(19),
      Mb = Ub(22),
      Tb = Ub(1216),
      Eb = Ub(36023);
    const Yb = "clientGameUiChanged";
    let Bb = null;

    function eb() {
      return Bb
    }

    function vb(bb, ab) {
      const Ub = {
        content: bb,
        menu: ab
      };
      return Bb = Ub, Mb.m.IR(Yb, Bb, !0), () => {
        Bb === Ub && (Bb = null, jb = !1, kb(), Mb.m.IR(Yb, null))
      }
    }
    let Lb = null;

    function Pb() {
      return Lb
    }

    function Xb(bb) {
      return Lb = bb, () => {
        Lb === bb && (Lb = null)
      }
    }
    let jb = !1;

    function Rb() {
      const bb = Ab.c.get("openInGameMenuName");
      "clientGame" !== bb && (jb = "inventory" === bb), (0, Eb.n)() || (0, Eb.j)(), (0, Tb.h)(Tb.b), Ab.c.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function kb() {
      Zb(!1)
    }

    function yb() {
      Zb(jb)
    }

    function Zb(bb) {
      "clientGame" === Ab.c.get("openInGameMenuName") && Ab.c.set({
        openInGameMenuName: bb ? "inventory" : null
      }), bb || (0, Eb.j)(), jb = !1
    }
  },
  38541: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      default: () => vU
    });
    var Ab = Ub(52);
    var Mb = Ub(19),
      Tb = Ub(1805),
      Eb = Ub(22),
      Yb = Ub(36017),
      Bb = Ub(984),
      eb = Ub.n(Bb),
      vb = Ub(1345),
      Lb = Ub(1134),
      Pb = Ub(4211),
      Xb = Ub(1257),
      jb = Ub(1352),
      Rb = Ub(1812),
      kb = Ub(1268),
      yb = Ub(1794),
      Zb = Ub(1858),
      Db = Ub(212);
    const zb = Ub(38549),
      xb = Object.fromEntries(zb.keys().map((bb => [bb.replace(/^\.\/(.*)\.webp$/, "$1"), zb(bb)]))),
      ib = new Set;

    function fb(bb, ab) {
      const Ub = ab ? bb : `${bb}-uncaught`,
        Ab = (0, Db.c)(xb, Ub);
      return void 0 !== Ab || ib.has(Ub) || (ib.add(Ub), console.warn(`Containment Breach has no mugshot ${Ub}: run tools/harnessCutouts/ContainmentMugshotCapture.ts`)), Ab
    }
    var mb = Ub(1023);
    const pb = "containmentBreach",
      Nb = "Gold Coin";

    function Wb(bb) {
      let {
        open: ab,
        onDismiss: Ub,
        title: Ab,
        className: Mb,
        decor: Tb,
        headerExtra: Eb,
        status: Yb,
        statusRefused: Bb = !1,
        children: vb
      } = bb;
      const Lb = `${Mb}Title`;
      return (0, mb.jsx)(Pb.d, {
        show: ab,
        close: Ub,
        togglePointerLock: !1,
        className: "ContainmentBoardOverlay",
        children: (0, mb.jsxs)("section", {
          className: eb()("ContainmentBoardPanel", Mb),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": Lb,
          children: [Tb && (0, mb.jsx)("div", {
            className: "BoardDecor",
            "aria-hidden": "true",
            children: Tb
          }), (0, mb.jsxs)("header", {
            className: "BoardHeader",
            children: [(0, mb.jsx)("h2", {
              id: Lb,
              className: "VisuallyHidden",
              children: Ab
            }), Eb, (0, mb.jsx)(jb.k, {
              onClick: Ub
            })]
          }), (0, mb.jsx)("div", {
            className: "BoardBody",
            children: vb
          }), void 0 !== Yb && (0, mb.jsx)("footer", {
            className: eb()("BoardStatus", {
              Refused: Bb
            }),
            children: Yb
          })]
        })
      })
    }

    function Hb(bb) {
      let {
        itemName: ab
      } = bb;
      return (0, mb.jsx)(Rb.c, {
        itemName: ab,
        amount: 0
      })
    }

    function Ib(bb) {
      let {
        anomalyId: ab,
        caught: Ub
      } = bb;
      const Mb = (0, Ab.useRef)(null);
      return (0, Xb.b)(Mb, !Ub), (0, mb.jsx)("span", {
        ref: Mb,
        className: eb()("BoardMugshot", {
          Uncaught: !Ub
        }),
        children: (0, mb.jsx)("img", {
          src: fb(ab, Ub),
          alt: "",
          draggable: !1
        })
      })
    }

    function db(bb) {
      let {
        itemName: ab,
        amount: Ub,
        PY: Ab,
        inTile: Mb = !1
      } = bb;
      return (0, mb.jsx)(kb.g, {
        delayShow: 200,
        hoverOnly: Mb,
        placement: "top",
        tooltipClassName: "BoardChipTooltipBox",
        tooltipInner: (0, mb.jsx)(hb, {
          itemName: ab,
          amount: Ub,
          PY: Ab
        }),
        children: (0, mb.jsxs)("span", {
          className: eb()("BoardChip", {
            Short: void 0 !== Ab && Ab < Ub
          }),
          children: [(0, mb.jsx)("span", {
            className: "BoardChipIcon",
            children: (0, mb.jsx)(Hb, {
              itemName: ab
            })
          }), Ub.toLocaleString()]
        })
      })
    }
    const Fb = /^(.*?)\s*Salvaged from (?:an? )?(.+?)\.?$/;

    function hb(bb) {
      var ab;
      let {
        itemName: Ub,
        amount: Ab,
        PY: Mb
      } = bb;
      const {
        t: Tb
      } = (0, Lb.A)(), Eb = (0, Zb.g)("itemInfo", (bb => bb[Ub])), {
        lore: Yb,
        droppedBy: Bb
      } = function(bb) {
        if ("string" !== typeof bb) return {
          lore: bb,
          droppedBy: null
        };
        const ab = Fb.exec(bb);
        return null === ab ? {
          lore: bb,
          droppedBy: null
        } : {
          lore: "" === ab[1] ? void 0 : ab[1],
          droppedBy: ab[2]
        }
      }(null === Eb || void 0 === Eb ? void 0 : Eb.description);
      return (0, mb.jsxs)("div", {
        className: "BoardChipTooltip",
        children: [(0, mb.jsxs)("div", {
          className: "BoardChipTooltipHeader",
          children: [(0, mb.jsx)("span", {
            className: "BoardChipTooltipIcon",
            children: (0, mb.jsx)(Hb, {
              itemName: Ub
            })
          }), (0, mb.jsx)(yb.c, {
            text: null !== (ab = null === Eb || void 0 === Eb ? void 0 : Eb.displayName) && void 0 !== ab ? ab : Ub,
            className: "BoardChipTooltipName"
          })]
        }), (void 0 !== Yb || null !== Bb) && (0, mb.jsxs)("div", {
          className: "BoardChipTooltipBody",
          children: [void 0 !== Yb && (0, mb.jsx)(yb.c, {
            text: Yb,
            className: "BoardChipTooltipDescription"
          }), null !== Bb && (0, mb.jsxs)("span", {
            className: "BoardChipTooltipSource",
            children: [(0, mb.jsx)("span", {
              className: "BoardChipTooltipLabel",
              children: Tb(`${pb}:chipDroppedBy`)
            }), Bb]
          })]
        }), void 0 !== Mb && (0, mb.jsxs)("div", {
          className: eb()("BoardChipTooltipHeld", {
            Short: Mb < Ab
          }),
          children: [(0, mb.jsx)("span", {
            className: "BoardChipTooltipLabel",
            children: Tb(`${pb}:chipYouHave`)
          }), (0, mb.jsxs)("span", {
            className: "BoardChipTooltipCount",
            children: [(0, mb.jsx)("span", {
              className: "BoardChipTooltipHeldAmount",
              children: Mb.toLocaleString()
            }), ` / ${Ab.toLocaleString()}`]
          }), (0, mb.jsx)("span", {
            className: "BoardChipTooltipMeter",
            children: (0, mb.jsx)("span", {
              style: {
                width: (Ab > 0 ? 100 * Math.min(1, Mb / Ab) : 100) + "%"
              }
            })
          })]
        })]
      })
    }

    function Gb(bb) {
      let {
        icon: ab,
        name: Ub,
        selected: Ab,
        locked: Mb,
        className: Tb,
        buttonRef: Eb,
        onSelect: Yb,
        children: Bb
      } = bb;
      return (0, mb.jsxs)("button", {
        ref: Eb,
        type: "button",
        className: eb()("BoardTile", Tb, {
          Selected: Ab,
          Locked: Mb
        }),
        onClick: Yb,
        children: [(0, mb.jsx)("span", {
          className: "BoardTileIcon",
          children: ab
        }), (0, mb.jsx)("span", {
          className: "BoardTileName",
          children: Ub
        }), Bb]
      })
    }

    function Qb(bb) {
      let {
        icon: ab,
        name: Ub,
        children: Ab
      } = bb;
      return (0, mb.jsxs)("header", {
        className: "BoardDetailHeader",
        children: [(0, mb.jsx)("span", {
          className: "BoardDetailIcon",
          children: ab
        }), (0, mb.jsxs)("div", {
          className: "BoardDetailHeading",
          children: [(0, mb.jsx)("h3", {
            children: Ub
          }), (0, mb.jsx)("span", {
            className: "BoardDetailStatus",
            children: Ab
          })]
        })]
      })
    }

    function qb(bb) {
      let {
        coins: ab,
        children: Ub
      } = bb;
      return (0, mb.jsxs)("div", {
        className: "BoardWallet",
        children: [(0, mb.jsx)(db, {
          itemName: Nb,
          amount: ab
        }), Ub]
      })
    }
    var ub = Ub(37856);
    const rb = "containmentCodexView";
    class Kb extends ub.d {
      constructor() {
        super(...arguments), this.entries = [], this.selectedId = "", this.snapshot = this.buildSnapshot(), this.select = bb => {
          this.selectedId = bb, this.emit()
        }
      }
      aj(bb) {
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
    const ob = {
        codexAnyDifficulty: `${pb}:codexNeedsAny`,
        codexNormalOnly: `${pb}:codexNeedsNormal`,
        codexHardOnly: `${pb}:codexNeedsHard`
      },
      lb = {
        codexContained: "Contained",
        codexEncountered: "Sighted",
        codexUnidentified: "Unknown"
      },
      tb = {
        codexContained: `${pb}:codexContainedBadge`,
        codexEncountered: `${pb}:codexEncounteredBadge`,
        codexUnidentified: `${pb}:codexUnidentifiedBadge`
      },
      wb = ["94%", "81%", "88%", "46%", "72%"];

    function sb(bb) {
      let {
        entry: ab
      } = bb;
      const {
        t: Ub
      } = (0, Lb.A)();
      return (0, mb.jsx)("span", {
        className: eb()("BoardBadge", lb[ab.codexEntryState]),
        children: Ub(tb[ab.codexEntryState])
      })
    }

    function gb(bb) {
      const {
        t: ab
      } = (0, Lb.A)();
      return "codexUnidentified" === bb.codexEntryState ? ab(`${pb}:codexUnidentifiedName`) : bb.codexEntryName
    }

    function Cb(bb) {
      let {
        entry: ab
      } = bb;
      return "codexUnidentified" === ab.codexEntryState ? (0, mb.jsx)(Hb, {
        itemName: "Book"
      }) : (0, mb.jsxs)("span", {
        className: "CodexPhoto",
        children: [(0, mb.jsx)(Ib, {
          anomalyId: ab.codexEntryId,
          caught: "codexContained" === ab.codexEntryState
        }), (0, mb.jsx)("img", {
          className: "CodexPaperclip",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAMCAYAAACulacQAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGNggIIXb97/X7V57/+Wvtn/GZDBqs17UQTgClahScBATHrlf5ySeHWimo9NMbokCp9OkmD/oasGCaJLAAC5ZUIBS85GiAAAAABJRU5ErkJggg==",
          alt: "",
          draggable: !1
        })]
      })
    }

    function Vb(bb) {
      let {
        entry: ab,
        selected: Ub,
        onSelect: Ab
      } = bb;
      const Mb = "codexUnidentified" === ab.codexEntryState;
      return (0, mb.jsxs)(Gb, {
        icon: (0, mb.jsx)(Cb, {
          entry: ab
        }),
        name: gb(ab),
        selected: Ub,
        locked: Mb,
        className: eb()("CodexFolder", lb[ab.codexEntryState]),
        onSelect: () => {
          Ab(ab.codexEntryId)
        },
        children: [!Mb && (0, mb.jsx)(sb, {
          entry: ab
        }), Mb && (0, mb.jsx)("img", {
          className: "CodexSeal",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAARElEQVR4nGNggIIGHp7/MAzjw+TAnMf+/mB8RkQEjOGKYZLIgsiK4AqQJZA1gBXAOHgVwCRQJJEdCVOEYj8yQPciTAEAz0hgyamUqskAAAAASUVORK5CYII=",
          alt: "",
          draggable: !1
        })]
      })
    }

    function Ob(bb) {
      let {
        count: ab
      } = bb;
      const Ub = [];
      for (let Ab = Math.min(ab, 25); Ab > 0; Ab -= 5) Ub.push(Math.min(Ab, 5));
      return (0, mb.jsx)("span", {
        className: "CodexTallyMarks",
        "aria-hidden": "true",
        children: Ub.map(((bb, ab) => (0, mb.jsx)("span", {
          className: eb()("CodexTallyGroup", {
            Gate: 5 === bb
          }),
          children: Array.from({
            length: Math.min(bb, 4)
          }, ((bb, ab) => (0, mb.jsx)("span", {
            className: "CodexTallyMark"
          }, ab)))
        }, ab)))
      })
    }

    function cb(bb) {
      let {
        contained: ab,
        total: Ub
      } = bb;
      const {
        t: Ab
      } = (0, Lb.A)();
      return (0, mb.jsxs)("div", {
        className: "CodexProgress",
        children: [Ab(`${pb}:codexProgress`, {
          contained: String(ab),
          total: String(Ub)
        }), (0, mb.jsx)("span", {
          className: "CodexProgressMeter",
          children: (0, mb.jsx)("span", {
            style: {
              width: ab / Ub * 100 + "%"
            }
          })
        })]
      })
    }

    function Jb(bb) {
      let {
        entry: ab,
        fileNumber: Ub
      } = bb;
      const {
        t: Ab
      } = (0, Lb.A)(), Mb = "codexContained" === ab.codexEntryState;
      return (0, mb.jsx)("section", {
        className: "BoardDetail",
        children: (0, mb.jsxs)("article", {
          className: eb()("CodexDossier", lb[ab.codexEntryState]),
          children: [(0, mb.jsx)("span", {
            className: "CodexFileNumber",
            children: Ab(`${pb}:codexFileNumber`, {
              number: String(Ub).padStart(3, "0")
            })
          }), (0, mb.jsx)(Qb, {
            icon: (0, mb.jsx)(Cb, {
              entry: ab
            }),
            name: gb(ab),
            children: (0, mb.jsx)(sb, {
              entry: ab
            })
          }), Mb && (0, mb.jsxs)(mb.Fragment, {
            children: [(0, mb.jsx)("p", {
              className: "BoardDescription",
              children: ab.codexEntryLore
            }), (0, mb.jsxs)("p", {
              className: "CodexTally",
              children: [Ab(`${pb}:codexContainments`, {
                count: String(ab.codexEntryContainedCount)
              }), (0, mb.jsx)(Ob, {
                count: ab.codexEntryContainedCount
              })]
            }), (0, mb.jsx)("span", {
              className: "CodexClosedStamp",
              "aria-hidden": "true",
              children: Ab(`${pb}:codexContainedBadge`)
            })]
          }), !Mb && (0, mb.jsxs)(mb.Fragment, {
            children: [(0, mb.jsxs)("div", {
              className: "CodexRedaction",
              children: [wb.map((bb => (0, mb.jsx)("span", {
                className: "CodexRedactedLine",
                style: {
                  width: bb
                }
              }, bb))), (0, mb.jsx)("p", {
                className: "CodexRedacted",
                children: Ab(`${pb}:codexRedacted`)
              })]
            }), "" !== ab.codexEntryHint && (0, mb.jsxs)("aside", {
              className: "CodexNote",
              children: [(0, mb.jsx)("h4", {
                children: Ab(`${pb}:codexHintLabel`)
              }), (0, mb.jsx)("p", {
                children: ab.codexEntryHint
              })]
            }), (0, mb.jsx)("p", {
              className: "CodexClearance",
              children: Ab(ob[ab.codexEntryDifficulty])
            })]
          })]
        })
      })
    }

    function nb(bb) {
      let {
        controller: ab
      } = bb;
      const Ub = (0, vb.i)(rb, ab.getSnapshot()),
        {
          t: Ab
        } = (0, Lb.A)();
      if (0 === Ub.entries.length) return null;
      const Mb = Ub.entries.find((bb => bb.codexEntryId === Ub.selectedId)),
        Tb = Ub.entries.filter((bb => "codexContained" === bb.codexEntryState)).length,
        Eb = Ub.entries.map((bb => bb.codexEntryId)).sort().indexOf(Mb.codexEntryId) + 1;
      return (0, mb.jsxs)(Wb, {
        open: Ub.open,
        onDismiss: ab.dismiss,
        title: Ab(`${pb}:codexTitle`),
        className: "ContainmentCodexPanel",
        headerExtra: (0, mb.jsx)(cb, {
          contained: Tb,
          total: Ub.entries.length
        }),
        children: [(0, mb.jsx)("div", {
          className: "BoardTiles",
          children: Ub.entries.map((bb => (0, mb.jsx)(Vb, {
            entry: bb,
            selected: bb === Mb,
            onSelect: ab.select
          }, bb.codexEntryId)))
        }), (0, mb.jsx)(Jb, {
          entry: Mb,
          fileNumber: Eb
        })]
      })
    }
    var Sb = Ub(325);
    class ba extends ub.d {
      constructor(bb, ab, Ub, Ab, Mb, Tb) {
        super(bb, ab, Ub), this.pacer = Ab, this.command = Mb, this.predict = Tb, this.board = null, this.confirmed = null, this.selectedId = "", this.notice = null, this.unsubscribePacer = void 0, this.select = bb => {
          this.selectedId = bb, this.emit()
        }, this.act = (bb, ab) => {
          if (!this.open || null === this.board || !this.pacer.send(`${this.command} ${bb} ${ab}`, this.rollBack)) return;
          const Ub = this.predict(this.board, bb, ab);
          null !== Ub && (this.board = Ub.board, this.notice = Ub.notice, this.emit())
        }, this.rollBack = () => {
          this.board !== this.confirmed && (this.board = this.confirmed, this.notice = null)
        }, this.unsubscribePacer = Ab.subscribe((() => {
          this.emit()
        }))
      }
      aj(bb) {
        const ab = this.messageOpens(bb);
        if (ab && this.open) return this.board === this.confirmed && (this.board = bb), this.confirmed = bb, void this.emit();
        if (this.board = bb, this.confirmed = bb, this.pacer.onReply(), ab) return this.notice = null, this.selectedId = this.openingSelection(bb), void this.show();
        const Ub = this.messageNotice(bb);
        null !== Ub && (this.notice = Ub), this.emit()
      }
      dispose() {
        this.unsubscribePacer(), super.dispose()
      }
      onClosed() {
        this.notice = null
      }
    }

    function aa(bb, ab) {
      return bb.loadoutCoins >= ab.loadoutCostCoins && ab.loadoutCostParts.every((ab => function(bb, ab) {
        return Ua(bb, ab).loadoutHeldPartAmount
      }(bb, ab.loadoutPartCurrency) >= ab.loadoutPartAmount))
    }

    function Ua(bb, ab) {
      return bb.loadoutHeldParts.find((bb => bb.loadoutHeldPartCurrency === ab))
    }

    function Aa(bb, ab) {
      return bb.loadoutSlots.find((bb => bb.loadoutSlotKind === ab))
    }

    function Ma(bb) {
      return bb.loadoutPerks.filter((bb => bb.loadoutPerkEquipped)).length >= bb.loadoutMaxPerks
    }

    function Ta(bb, ab, Ub) {
      for (const Mb of bb.loadoutSlots) {
        const Ab = Mb.loadoutSlotOptions.find((bb => bb.loadoutOptionId === Ub));
        if (Ab) return "loadoutArmour" === Mb.loadoutSlotKind ? Ya(bb, Mb, Ab, ab) : Ea(bb, Mb, Ab, ab)
      }
      const Ab = bb.loadoutPerks.find((bb => bb.loadoutPerkId === Ub));
      return Ab ? function(bb, ab, Ub) {
        const Ab = ab.loadoutPerkOwned,
          Mb = ab.loadoutPerkEquipped,
          Tb = ab.loadoutPerkName,
          Eb = Ma(bb);
        if ("loadoutUnlock" === Ub) {
          if (Ab || !aa(bb, ab.loadoutPerkCost)) return null;
          const Ub = {
            ...ab,
            loadoutPerkOwned: !0,
            loadoutPerkEquipped: !Eb
          };
          return {
            board: ea(va(bb, ab.loadoutPerkCost), Ub),
            notice: La(Eb ? "loadoutNoticeUnlockedNoRoom" : "loadoutNoticeUnlocked", Tb)
          }
        }
        if ("loadoutUpgrade" === Ub || !Ab || "loadoutEquip" === Ub === Mb || !Mb && Eb) return null;
        return {
          board: ea(bb, {
            ...ab,
            loadoutPerkEquipped: !Mb
          }),
          notice: La(Mb ? "loadoutNoticeUnequipped" : "loadoutNoticeEquipped", Tb)
        }
      }(bb, Ab, ab) : null
    }

    function Ea(bb, ab, Ub, Ab) {
      const Mb = Ub.loadoutOptionOwnedTier,
        Tb = Ub.loadoutOptionName;
      if ("loadoutEquip" === Ab) return 0 === Mb ? null : {
        board: Ba(bb, ab, Ub.loadoutOptionId, null),
        notice: La("loadoutNoticeEquipped", Tb)
      };
      const Eb = "loadoutUnlock" === Ab;
      if (Eb && 0 !== Mb || "loadoutUpgrade" === Ab && (0 === Mb || Mb >= Ub.loadoutOptionTiers.length) || "loadoutUnequip" === Ab) return null;
      const Yb = Ub.loadoutOptionTiers[Mb].loadoutTierCost;
      if (!aa(bb, Yb)) return null;
      const Bb = {
          ...Ub,
          loadoutOptionOwnedTier: Mb + 1
        },
        eb = Eb ? Ub.loadoutOptionId : ab.loadoutSlotEquippedId;
      return {
        board: Ba(va(bb, Yb), ab, eb, Bb),
        notice: Eb ? La("loadoutNoticeUnlocked", Tb) : La("loadoutNoticeUpgraded", Tb, Mb + 1)
      }
    }

    function Ya(bb, ab, Ub, Ab) {
      const Mb = Ub.loadoutOptionOwnedTier > 0,
        Tb = Ub.loadoutOptionName;
      if ("loadoutEquip" === Ab && Mb) return {
        board: Ba(bb, ab, Ub.loadoutOptionId, null),
        notice: La("loadoutNoticeEquipped", Tb)
      };
      const Eb = Ub.loadoutOptionTiers[0].loadoutTierCost;
      return "loadoutUnlock" !== Ab || Mb || !aa(bb, Eb) ? null : {
        board: Ba(va(bb, Eb), ab, Ub.loadoutOptionId, {
          ...Ub,
          loadoutOptionOwnedTier: 1
        }),
        notice: La("loadoutNoticeUnlocked", Tb)
      }
    }

    function Ba(bb, ab, Ub, Ab) {
      const Mb = {
        ...ab,
        loadoutSlotEquippedId: Ub,
        loadoutSlotOptions: ab.loadoutSlotOptions.map((bb => null !== Ab && bb.loadoutOptionId === Ab.loadoutOptionId ? Ab : bb))
      };
      return {
        ...bb,
        loadoutSlots: bb.loadoutSlots.map((bb => bb === ab ? Mb : bb))
      }
    }

    function ea(bb, ab) {
      return {
        ...bb,
        loadoutPerks: bb.loadoutPerks.map((bb => bb.loadoutPerkId === ab.loadoutPerkId ? ab : bb))
      }
    }

    function va(bb, ab) {
      return {
        ...bb,
        loadoutCoins: bb.loadoutCoins - ab.loadoutCostCoins,
        loadoutHeldParts: bb.loadoutHeldParts.map((bb => {
          const Ub = ab.loadoutCostParts.find((ab => ab.loadoutPartCurrency === bb.loadoutHeldPartCurrency));
          return Ub ? {
            ...bb,
            loadoutHeldPartAmount: bb.loadoutHeldPartAmount - Ub.loadoutPartAmount
          } : bb
        }))
      }
    }

    function La(bb, ab) {
      return {
        loadoutNoticeKey: bb,
        loadoutNoticeRefused: !1,
        loadoutNoticeName: ab,
        loadoutNoticeTier: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
      }
    }
    const Pa = "containmentLoadoutView";
    class Xa extends ba {
      constructor(bb, ab, Ub, Ab) {
        super(bb, ab, Ub, Ab, "loadout", Ta), this.slot = "loadoutPrimary", this.snapshot = this.buildSnapshot(), this.selectSlot = bb => {
          this.slot = bb, this.selectedId = ja(this.board, bb), this.emit()
        }
      }
      messageOpens(bb) {
        return bb.loadoutMessageOpens
      }
      messageNotice(bb) {
        return bb.loadoutNotice
      }
      openingSelection(bb) {
        return ja(bb, this.slot)
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

    function ja(bb, ab) {
      if ("loadoutPerks" === ab) {
        var Ub;
        const ab = bb.loadoutPerks;
        return (null !== (Ub = ab.find((bb => bb.loadoutPerkEquipped))) && void 0 !== Ub ? Ub : ab[0]).loadoutPerkId
      }
      return Aa(bb, ab).loadoutSlotEquippedId
    }
    const Ra = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAY0lEQVR4nGNgIAP8x4FRwP/sFt3/EYU6YBqGIwp1MBSDBUH4/3nW//83csD5DOgKfeKNsWIMhV+///qvbOT7/87cMjCG8TEUgiSLqlpRMEgMQ+HJvgy4aTAMEsPqc2KChyAAAFxNbnylK5O6AAAAAElFTkSuQmCC";
    var ka = Ub(36209),
      ya = Ub(1213);
    const Za = {
        loadoutPrimary: `${pb}:loadoutSlotPrimary`,
        loadoutSecondary: `${pb}:loadoutSlotSecondary`,
        loadoutOffensive: `${pb}:loadoutSlotOffensive`,
        loadoutSelfHelp: `${pb}:loadoutSlotSelfHelp`,
        loadoutArmour: `${pb}:loadoutSlotArmour`,
        loadoutPerks: `${pb}:loadoutSlotPerks`
      },
      Da = {
        section: "right",
        GP: "bottom",
        act: "top"
      },
      za = (0, Ab.createContext)({
        step: null,
        targetRef: () => {}
      });

    function xa() {
      const {
        step: bb,
        targetRef: ab
      } = (0, Ab.useContext)(za);
      return (Ub, Ab) => (null === bb || void 0 === bb ? void 0 : bb.kind) === Ub && bb.id === Ab ? ab : void 0
    }

    function ia(bb, ab) {
      const Ub = ab.loadoutTargetId;
      if ("loadoutPerks" === ab.loadoutTargetSection) {
        const ab = bb.loadoutPerks.find((bb => bb.loadoutPerkId === Ub));
        return {
          name: ab.loadoutPerkName,
          owned: ab.loadoutPerkOwned,
          equipped: ab.loadoutPerkEquipped
        }
      }
      const Ab = Aa(bb, ab.loadoutTargetSection),
        Mb = Ab.loadoutSlotOptions.find((bb => bb.loadoutOptionId === Ub));
      return {
        name: Mb.loadoutOptionName,
        owned: Mb.loadoutOptionOwnedTier > 0,
        equipped: Ab.loadoutSlotEquippedId === Ub
      }
    }

    function fa(bb, ab, Ub, Ab) {
      const [Mb, Tb] = bb(`${pb}:${ab}`, {
        [Ub]: "\x01"
      }).split("\x01");
      return (0, mb.jsxs)(mb.Fragment, {
        children: [Mb, (0, mb.jsx)("span", {
          className: "LoadoutWalkthroughName",
          children: Ab
        }), Tb]
      })
    }

    function ma(bb) {
      let {
        view: ab,
        onDismiss: Ub,
        children: Mb
      } = bb;
      const {
        t: Tb
      } = (0, Lb.A)(), Eb = ab.loadout, Yb = ab.open ? Eb.loadoutWalkthrough.map((bb => ({
        target: bb,
        info: ia(Eb, bb)
      }))).find((bb => {
        let {
          info: ab
        } = bb;
        return !ab.equipped
      })) : void 0;
      let Bb = null,
        eb = null;
      if (void 0 !== Yb) {
        const {
          target: bb,
          info: Ub
        } = Yb;
        ab.slot !== bb.loadoutTargetSection ? (Bb = {
          kind: "section",
          id: bb.loadoutTargetSection
        }, eb = fa(Tb, "loadoutWalkthroughSection", "section", Tb(Za[bb.loadoutTargetSection]))) : ab.selectedId !== bb.loadoutTargetId ? (Bb = {
          kind: "GP",
          id: bb.loadoutTargetId
        }, eb = fa(Tb, "loadoutWalkthroughPick", "name", Ub.name)) : (Bb = {
          kind: "act",
          id: bb.loadoutTargetId
        }, eb = fa(Tb, Ub.owned ? "loadoutWalkthroughEquip" : "loadoutWalkthroughUnlock", "name", Ub.name))
      }
      const vb = null === Bb ? null : function(bb) {
          return `${bb.kind}:${bb.id}`
        }(Bb),
        [Pb, Xb] = (0, Ab.useState)(null),
        jb = (0, Ab.useCallback)((bb => {
          Xb((ab => null !== bb ? {
            key: vb,
            node: bb
          } : (null === ab || void 0 === ab ? void 0 : ab.key) === vb ? null : ab))
        }), [vb]),
        Rb = null !== vb && (null === Pb || void 0 === Pb ? void 0 : Pb.key) === vb ? Pb.node : null;
      return (0, mb.jsxs)(za.Provider, {
        value: {
          step: Bb,
          targetRef: jb
        },
        children: [Mb, null !== Bb && null !== Rb && (0, mb.jsx)(pa, {
          target: Rb,
          placement: Da[Bb.kind],
          onDismiss: Ub,
          children: eb
        }, vb)]
      })
    }

    function pa(bb) {
      let {
        target: ab,
        placement: Ub,
        onDismiss: Mb,
        children: Tb
      } = bb;
      const {
        t: Eb
      } = (0, Lb.A)(), Yb = (0, Ab.useRef)(ab);
      return Yb.current = ab, (0, ya.r)("popup", Yb, Mb), (0, mb.jsxs)(ka.i, {
        target: ab,
        placement: Ub,
        className: "LoadoutWalkthroughStep",
        spotlightMargin: 10,
        children: [(0, mb.jsxs)("div", {
          className: "LoadoutWalkthroughHeader",
          children: [(0, mb.jsx)("img", {
            className: "LoadoutWalkthroughPortrait",
            src: Ra,
            alt: "",
            draggable: !1
          }), (0, mb.jsx)("span", {
            className: "LoadoutWalkthroughSpeaker",
            children: Eb(`${pb}:operatorName`)
          }), (0, mb.jsx)(jb.k, {
            onClick: Mb,
            ariaLabel: Eb(`${pb}:loadoutWalkthroughClose`),
            padIgnore: !0
          })]
        }), (0, mb.jsx)("p", {
          className: "LoadoutWalkthroughText",
          children: Tb
        })]
      })
    }
    const Na = new Set(["loadoutStatReload", "loadoutStatResupply"]);

    function Wa(bb) {
      let {
        cost: ab,
        loadout: Ub
      } = bb;
      const {
        t: Ab
      } = (0, Lb.A)();
      return ab.loadoutCostCoins <= 0 && 0 === ab.loadoutCostParts.length ? (0, mb.jsx)("span", {
        className: "LoadoutCost",
        children: Ab(`${pb}:loadoutFree`)
      }) : (0, mb.jsxs)("span", {
        className: "LoadoutCost",
        children: [ab.loadoutCostCoins > 0 && (0, mb.jsx)(db, {
          itemName: Nb,
          amount: ab.loadoutCostCoins,
          PY: Ub.loadoutCoins
        }), ab.loadoutCostParts.map((bb => {
          const ab = Ua(Ub, bb.loadoutPartCurrency);
          return (0, mb.jsx)(db, {
            itemName: ab.loadoutHeldPartItem,
            amount: bb.loadoutPartAmount,
            PY: ab.loadoutHeldPartAmount
          }, bb.loadoutPartCurrency)
        }))]
      })
    }
    const Ha = {
      loadoutStatFireRate: `${pb}:loadoutUnitPerMinute`,
      loadoutStatReload: `${pb}:loadoutUnitSeconds`,
      loadoutStatResupply: `${pb}:loadoutUnitSeconds`
    };

    function Ia(bb) {
      return "loadoutStatPotency" === bb.loadoutStatKind ? (0, Sb.O)(bb.loadoutStatValue) : String(bb.loadoutStatValue)
    }

    function da(bb) {
      var ab;
      let {
        option: Ub
      } = bb;
      const {
        t: Ab
      } = (0, Lb.A)(), Mb = Ub.loadoutOptionTiers, Tb = null === (ab = Mb[0]) || void 0 === ab ? void 0 : ab.loadoutTierStats.map((bb => bb.loadoutStatKind));
      if (!Tb || 0 === Tb.length) return null;
      const Eb = Ub.loadoutOptionOwnedTier,
        Yb = (bb, ab) => {
          var Ub;
          return null === (Ub = Mb[bb]) || void 0 === Ub ? void 0 : Ub.loadoutTierStats.find((bb => bb.loadoutStatKind === ab))
        };
      return (0, mb.jsxs)("table", {
        className: "LoadoutTierTable",
        children: [(0, mb.jsx)("thead", {
          children: (0, mb.jsxs)("tr", {
            children: [(0, mb.jsx)("th", {}), Mb.map(((bb, ab) => (0, mb.jsx)("th", {
              className: eb()({
                Current: ab + 1 === Eb,
                Next: ab === Eb
              }),
              children: Ab(`${pb}:loadoutTier`, {
                tier: (0, Sb.O)(ab + 1)
              })
            }, ab)))]
          })
        }), (0, mb.jsx)("tbody", {
          children: Tb.map((bb => {
            const ab = Ha[bb];
            return (0, mb.jsxs)("tr", {
              children: [(0, mb.jsxs)("th", {
                scope: "row",
                children: [Ab(`${pb}:${bb}`), ab && (0, mb.jsx)("span", {
                  className: "LoadoutStatUnit",
                  children: Ab(ab)
                })]
              }), Mb.map(((ab, Ub) => {
                const Ab = Yb(Ub, bb),
                  Mb = Ub > 0 ? Yb(Ub - 1, bb) : void 0,
                  Tb = Ab && Mb ? Ab.loadoutStatValue - Mb.loadoutStatValue : 0,
                  Bb = Na.has(bb) ? Tb < 0 : Tb > 0,
                  vb = Ub === Eb;
                return (0, mb.jsxs)("td", {
                  className: eb()({
                    Current: Ub + 1 === Eb,
                    Next: vb,
                    Gain: Bb,
                    Owned: Ub < Eb
                  }),
                  children: [vb && Bb && (0, mb.jsx)("span", {
                    className: "LoadoutGainArrow",
                    "aria-hidden": "true",
                    children: Tb < 0 ? "\u25bc" : "\u25b2"
                  }), Ab ? Ia(Ab) : "-"]
                }, Ub)
              }))]
            }, bb)
          }))
        })]
      })
    }

    function Fa(bb) {
      let {
        view: ab,
        controller: Ub,
        slot: Ab,
        option: Mb
      } = bb;
      const {
        t: Tb
      } = (0, Lb.A)(), Eb = ab.loadout, Yb = Mb.loadoutOptionOwnedTier, Bb = Mb.loadoutOptionTiers.length, eb = Ab.loadoutSlotEquippedId === Mb.loadoutOptionId, vb = Yb < Bb ? Mb.loadoutOptionTiers[Yb].loadoutTierCost : null, Pb = null !== vb && aa(Eb, vb), Xb = Mb.loadoutOptionId, Rb = xa();
      return (0, mb.jsxs)(mb.Fragment, {
        children: [(0, mb.jsx)(Ga, {
          icon: Mb.loadoutOptionIcon,
          name: Mb.loadoutOptionName,
          status: 0 === Yb ? Tb(`${pb}:loadoutLocked`) : Bb > 1 ? Tb(`${pb}:loadoutTier`, {
            tier: (0, Sb.O)(Yb)
          }) : null,
          locked: 0 === Yb,
          equipped: eb
        }), (0, mb.jsx)("p", {
          className: "BoardDescription",
          children: Mb.loadoutOptionDescription
        }), (0, mb.jsx)(da, {
          option: Mb
        }), (0, mb.jsxs)("div", {
          ref: Rb("act", Xb),
          className: "BoardActions",
          children: [null !== vb && (0, mb.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, mb.jsx)(Wa, {
              cost: vb,
              loadout: Eb
            }), (0, mb.jsx)(jb.m, {
              disabled: !Pb || ab.pending,
              onClick: () => {
                Ub.act(0 === Yb ? "loadoutUnlock" : "loadoutUpgrade", Xb)
              },
              children: 0 === Yb ? Tb(`${pb}:loadoutUnlock`) : Tb(`${pb}:loadoutUpgrade`, {
                tier: (0, Sb.O)(Yb + 1)
              })
            })]
          }), null === vb && Bb > 1 && (0, mb.jsx)("span", {
            className: "BoardHint",
            children: Tb(`${pb}:loadoutMaxed`)
          }), Yb > 0 && !eb && (0, mb.jsx)(jb.g, {
            disabled: ab.pending,
            onClick: () => {
              Ub.act("loadoutEquip", Xb)
            },
            children: Tb(`${pb}:loadoutEquip`)
          })]
        })]
      })
    }

    function ha(bb) {
      let {
        view: ab,
        controller: Ub,
        perk: Ab
      } = bb;
      const {
        t: Mb
      } = (0, Lb.A)(), Tb = ab.loadout, Eb = Ma(Tb), Yb = Ab.loadoutPerkId, Bb = xa();
      return (0, mb.jsxs)(mb.Fragment, {
        children: [(0, mb.jsx)(Ga, {
          icon: Ab.loadoutPerkIcon,
          name: Ab.loadoutPerkName,
          status: Ab.loadoutPerkOwned ? null : Mb(`${pb}:loadoutLocked`),
          locked: !Ab.loadoutPerkOwned,
          equipped: Ab.loadoutPerkEquipped
        }), (0, mb.jsx)("p", {
          className: "BoardDescription",
          children: Ab.loadoutPerkDescription
        }), (0, mb.jsxs)("div", {
          ref: Bb("act", Yb),
          className: "BoardActions",
          children: [!Ab.loadoutPerkOwned && (0, mb.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, mb.jsx)(Wa, {
              cost: Ab.loadoutPerkCost,
              loadout: Tb
            }), (0, mb.jsx)(jb.m, {
              disabled: !aa(Tb, Ab.loadoutPerkCost) || ab.pending,
              onClick: () => {
                Ub.act("loadoutUnlock", Yb)
              },
              children: Mb(`${pb}:loadoutUnlock`)
            })]
          }), Ab.loadoutPerkOwned && !Ab.loadoutPerkEquipped && (0, mb.jsx)(jb.g, {
            disabled: Eb || ab.pending,
            onClick: () => {
              Ub.act("loadoutEquip", Yb)
            },
            children: Mb(`${pb}:loadoutEquip`)
          }), Ab.loadoutPerkOwned && !Ab.loadoutPerkEquipped && Eb && (0, mb.jsx)("span", {
            className: "BoardHint",
            children: Mb(`${pb}:loadoutSocketsFullHint`)
          }), Ab.loadoutPerkEquipped && (0, mb.jsx)(jb.M, {
            disabled: ab.pending,
            onClick: () => {
              Ub.act("loadoutUnequip", Yb)
            },
            children: Mb(`${pb}:loadoutUnequip`)
          })]
        })]
      })
    }

    function Ga(bb) {
      let {
        icon: ab,
        name: Ub,
        status: Ab,
        locked: Mb,
        equipped: Tb
      } = bb;
      const {
        t: Eb
      } = (0, Lb.A)();
      return (0, mb.jsxs)(Qb, {
        icon: (0, mb.jsx)(Hb, {
          itemName: ab
        }),
        name: Ub,
        children: [null !== Ab && (0, mb.jsx)("span", {
          className: eb()("LoadoutStatusText", {
            Locked: Mb
          }),
          children: Ab
        }), Tb && (0, mb.jsx)("span", {
          className: "BoardBadge",
          children: Eb(`${pb}:loadoutEquippedBadge`)
        })]
      })
    }

    function Qa(bb) {
      let {
        view: ab,
        controller: Ub
      } = bb;
      const Ab = ab.loadout;
      if ("loadoutPerks" === ab.slot) {
        const bb = Ab.loadoutPerks.find((bb => bb.loadoutPerkId === ab.selectedId));
        return (0, mb.jsx)("section", {
          className: "BoardDetail",
          children: bb && (0, mb.jsx)(ha, {
            view: ab,
            controller: Ub,
            perk: bb
          })
        })
      }
      const Mb = Aa(Ab, ab.slot),
        Tb = Mb.loadoutSlotOptions.find((bb => bb.loadoutOptionId === ab.selectedId));
      return (0, mb.jsx)("section", {
        className: "BoardDetail",
        children: Tb && (0, mb.jsx)(Fa, {
          view: ab,
          controller: Ub,
          slot: Mb,
          option: Tb
        })
      })
    }

    function qa(bb) {
      let {
        owned: ab,
        total: Ub
      } = bb;
      return Ub <= 1 ? null : (0, mb.jsx)("span", {
        className: "LoadoutPips",
        children: Array.from({
          length: Ub
        }, ((bb, Ub) => (0, mb.jsx)("span", {
          className: eb()("LoadoutPip", {
            Filled: Ub < ab
          })
        }, Ub)))
      })
    }

    function ua(bb) {
      let {
        view: ab,
        controller: Ub
      } = bb;
      const {
        t: Ab
      } = (0, Lb.A)(), Mb = ab.loadout, Tb = xa();
      return (0, mb.jsxs)("nav", {
        className: "LoadoutKit",
        "aria-label": Ab(`${pb}:loadoutKit`),
        children: [Mb.loadoutSlots.map((bb => {
          const Mb = bb.loadoutSlotOptions.find((ab => ab.loadoutOptionId === bb.loadoutSlotEquippedId));
          return (0, mb.jsxs)("button", {
            ref: Tb("section", bb.loadoutSlotKind),
            type: "button",
            className: eb()("LoadoutKitSlot", {
              Selected: ab.slot === bb.loadoutSlotKind
            }),
            onClick: () => {
              Ub.selectSlot(bb.loadoutSlotKind)
            },
            children: [(0, mb.jsx)("span", {
              className: "LoadoutKitIcon",
              children: Mb && (0, mb.jsx)(Hb, {
                itemName: Mb.loadoutOptionIcon
              })
            }), (0, mb.jsxs)("span", {
              className: "LoadoutKitText",
              children: [(0, mb.jsxs)("span", {
                className: "LoadoutKitTop",
                children: [(0, mb.jsx)("span", {
                  className: "LoadoutKitLabel",
                  children: Ab(Za[bb.loadoutSlotKind])
                }), Mb && (0, mb.jsx)(qa, {
                  owned: Mb.loadoutOptionOwnedTier,
                  total: Mb.loadoutOptionTiers.length
                })]
              }), (0, mb.jsx)("span", {
                className: "LoadoutKitName",
                children: null === Mb || void 0 === Mb ? void 0 : Mb.loadoutOptionName
              })]
            })]
          }, bb.loadoutSlotKind)
        })), (0, mb.jsx)(ra, {
          view: ab,
          controller: Ub
        })]
      })
    }

    function ra(bb) {
      let {
        view: ab,
        controller: Ub
      } = bb;
      const {
        t: Ab
      } = (0, Lb.A)(), Mb = ab.loadout, Tb = Mb.loadoutPerks.filter((bb => bb.loadoutPerkEquipped)), Eb = xa();
      return (0, mb.jsxs)("button", {
        ref: Eb("section", "loadoutPerks"),
        type: "button",
        className: eb()("LoadoutKitSlot", "LoadoutPerks", {
          Selected: "loadoutPerks" === ab.slot
        }),
        onClick: () => {
          Ub.selectSlot("loadoutPerks")
        },
        children: [(0, mb.jsxs)("span", {
          className: "LoadoutKitTop",
          children: [(0, mb.jsx)("span", {
            className: "LoadoutKitLabel",
            children: Ab(Za.loadoutPerks)
          }), (0, mb.jsx)("span", {
            className: "LoadoutPerkCount",
            children: Ab(`${pb}:loadoutPerkCount`, {
              equipped: String(Tb.length),
              max: String(Mb.loadoutMaxPerks)
            })
          })]
        }), (0, mb.jsx)("span", {
          className: "LoadoutSockets",
          children: Array.from({
            length: Mb.loadoutMaxPerks
          }, ((bb, ab) => {
            const Ub = Tb[ab];
            return (0, mb.jsxs)("span", {
              className: eb()("LoadoutSocket", {
                Filled: Ub,
                Empty: !Ub
              }),
              children: [(0, mb.jsx)("span", {
                className: "LoadoutSocketWell",
                children: Ub && (0, mb.jsx)(Hb, {
                  itemName: Ub.loadoutPerkIcon
                })
              }), (0, mb.jsx)("span", {
                className: "LoadoutSocketName",
                children: Ub ? Ub.loadoutPerkName : Ab(`${pb}:loadoutPerkSocketEmpty`)
              })]
            }, ab)
          }))
        })]
      })
    }

    function Ka(bb) {
      let {
        icon: ab,
        name: Ub,
        selected: Ab,
        equipped: Mb,
        locked: Tb,
        ownedTier: Eb,
        tiers: Yb,
        buttonRef: Bb,
        onSelect: eb
      } = bb;
      const {
        t: vb
      } = (0, Lb.A)();
      return (0, mb.jsxs)(Gb, {
        icon: (0, mb.jsx)(Hb, {
          itemName: ab
        }),
        name: Ub,
        selected: Ab,
        locked: Tb,
        buttonRef: Bb,
        onSelect: eb,
        children: [Mb && (0, mb.jsx)("span", {
          className: "BoardBadge",
          children: vb(`${pb}:loadoutEquippedBadge`)
        }), Tb && (0, mb.jsx)("span", {
          className: "BoardBadge Muted",
          children: vb(`${pb}:loadoutLocked`)
        }), !Tb && (0, mb.jsx)(qa, {
          owned: Eb,
          total: Yb
        })]
      })
    }

    function oa(bb) {
      let {
        view: ab,
        controller: Ub
      } = bb;
      const Ab = ab.loadout,
        Mb = xa();
      if ("loadoutPerks" === ab.slot) return (0, mb.jsx)("div", {
        className: "BoardTiles",
        children: Ab.loadoutPerks.map((bb => (0, mb.jsx)(Ka, {
          icon: bb.loadoutPerkIcon,
          name: bb.loadoutPerkName,
          selected: ab.selectedId === bb.loadoutPerkId,
          equipped: bb.loadoutPerkEquipped,
          locked: !bb.loadoutPerkOwned,
          ownedTier: 0,
          tiers: 0,
          buttonRef: Mb("GP", bb.loadoutPerkId),
          onSelect: () => {
            Ub.select(bb.loadoutPerkId)
          }
        }, bb.loadoutPerkId)))
      });
      const Tb = Aa(Ab, ab.slot);
      return (0, mb.jsx)("div", {
        className: "BoardTiles",
        children: Tb.loadoutSlotOptions.map((bb => (0, mb.jsx)(Ka, {
          icon: bb.loadoutOptionIcon,
          name: bb.loadoutOptionName,
          selected: ab.selectedId === bb.loadoutOptionId,
          equipped: Tb.loadoutSlotEquippedId === bb.loadoutOptionId,
          locked: 0 === bb.loadoutOptionOwnedTier,
          ownedTier: bb.loadoutOptionOwnedTier,
          tiers: bb.loadoutOptionTiers.length,
          buttonRef: Mb("GP", bb.loadoutOptionId),
          onSelect: () => {
            Ub.select(bb.loadoutOptionId)
          }
        }, bb.loadoutOptionId)))
      })
    }

    function la(bb) {
      let {
        loadout: ab
      } = bb;
      return (0, mb.jsx)(qb, {
        coins: ab.loadoutCoins,
        children: ab.loadoutHeldParts.filter((bb => bb.loadoutHeldPartAmount > 0)).map((bb => (0, mb.jsx)(db, {
          itemName: bb.loadoutHeldPartItem,
          amount: bb.loadoutHeldPartAmount
        }, bb.loadoutHeldPartCurrency)))
      })
    }

    function ta(bb) {
      let {
        controller: ab
      } = bb;
      const Ub = (0, vb.i)(Pa, ab.getSnapshot()),
        {
          t: Ab
        } = (0, Lb.A)();
      if (null === Ub.loadout) return null;
      const Mb = Ub.notice;
      return (0, mb.jsx)(ma, {
        view: Ub,
        onDismiss: ab.dismiss,
        children: (0, mb.jsxs)(Wb, {
          open: Ub.open,
          onDismiss: ab.dismiss,
          title: Ab(`${pb}:loadoutTitle`),
          className: "ContainmentLoadoutPanel",
          headerExtra: (0, mb.jsx)(la, {
            loadout: Ub.loadout
          }),
          statusRefused: null === Mb || void 0 === Mb ? void 0 : Mb.loadoutNoticeRefused,
          status: (0, mb.jsxs)(mb.Fragment, {
            children: [(0, mb.jsx)("span", {
              className: "LoadoutRadioBadge",
              children: Ab(`${pb}:loadoutRadioBadge`)
            }), null !== Mb && Ab(`${pb}:${Mb.loadoutNoticeKey}`, {
              name: Mb.loadoutNoticeName,
              tier: (0, Sb.O)(Mb.loadoutNoticeTier),
              max: String(Ub.loadout.loadoutMaxPerks)
            })]
          }),
          children: [(0, mb.jsx)(ua, {
            view: Ub,
            controller: ab
          }), (0, mb.jsx)(oa, {
            view: Ub,
            controller: ab
          }), (0, mb.jsx)(Qa, {
            view: Ub,
            controller: ab
          })]
        })
      })
    }

    function wa(bb, ab, Ub) {
      const Ab = bb.locatorEntries.find((bb => bb.locatorEntryId === Ub));
      if (!Ab) return null;
      const Mb = Ab.locatorEntryName;
      if ("locatorDisarm" === ab) return Ab.locatorEntryArmed ? {
        board: sa(bb, null),
        notice: ga("locatorNoticeDisarmed", Mb)
      } : null;
      if ("locatorArm" === ab) return Ab.locatorEntryOwned && !Ab.locatorEntryArmed ? {
        board: sa(bb, Ub),
        notice: ga("locatorNoticeArmed", Mb)
      } : null;
      if (Ab.locatorEntryOwned || bb.locatorCoins < Ab.locatorEntryPrice) return null;
      const Tb = sa({
        ...bb,
        locatorCoins: bb.locatorCoins - Ab.locatorEntryPrice
      }, Ub);
      return {
        board: {
          ...Tb,
          locatorEntries: Tb.locatorEntries.map((bb => bb.locatorEntryId === Ub ? {
            ...bb,
            locatorEntryOwned: !0
          } : bb))
        },
        notice: ga("locatorNoticeBought", Mb)
      }
    }

    function sa(bb, ab) {
      return {
        ...bb,
        locatorEntries: bb.locatorEntries.map((bb => {
          const Ub = bb.locatorEntryId === ab;
          return bb.locatorEntryArmed === Ub ? bb : {
            ...bb,
            locatorEntryArmed: Ub
          }
        }))
      }
    }

    function ga(bb, ab) {
      return {
        locatorNoticeKey: bb,
        locatorNoticeRefused: !1,
        locatorNoticeName: ab
      }
    }
    const Ca = "containmentLocatorView";
    class Va extends ba {
      constructor(bb, ab, Ub, Ab) {
        super(bb, ab, Ub, Ab, "locator", wa), this.snapshot = this.buildSnapshot()
      }
      messageOpens(bb) {
        return bb.locatorMessageOpens
      }
      messageNotice(bb) {
        return bb.locatorNotice
      }
      openingSelection(bb) {
        var ab;
        const Ub = bb.locatorEntries;
        return (null !== (ab = Ub.find((bb => bb.locatorEntryArmed))) && void 0 !== ab ? ab : Ub[0]).locatorEntryId
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
    const Oa = {
        locatorContained: `${pb}:locatorFlavourContained`,
        locatorEncountered: `${pb}:locatorFlavourEncountered`,
        locatorUnseen: `${pb}:locatorFlavourUnseen`
      },
      ca = {
        codexAnyDifficulty: null,
        codexNormalOnly: `${pb}:locatorAttunedNormal`,
        codexHardOnly: `${pb}:locatorAttunedHard`
      };

    function Ja() {
      return (0, mb.jsx)(mb.Fragment, {
        children: Array.from({
          length: 5
        }, ((bb, ab) => (0, mb.jsx)("span", {
          className: "LocatorFly",
          children: (0, mb.jsx)("img", {
            src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAICAYAAADwdn+XAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYElEQVR4nGNgoBboMlb5LyUjD8YgNtHyJ6/d+Q/CILa1lz9YAbo4DCDLYxjQv3gt3AYQG90AdHkUQ/qhkjAb0BURkgcDmAQMo7sSXR7deyiGoIvDvIOsGasB+ACyBmTNACS0go3ibhumAAAAAElFTkSuQmCC",
            alt: "",
            draggable: !1
          })
        }, ab)))
      })
    }

    function na(bb) {
      let {
        entry: ab
      } = bb;
      const {
        t: Ub
      } = (0, Lb.A)();
      return ab.locatorEntryArmed ? (0, mb.jsx)("span", {
        className: "BoardBadge Armed",
        children: Ub(`${pb}:locatorArmedBadge`)
      }) : ab.locatorEntryOwned ? (0, mb.jsx)("span", {
        className: "BoardBadge",
        children: Ub(`${pb}:locatorOwnedBadge`)
      }) : null
    }

    function Sa(bb) {
      let {
        entry: ab,
        coins: Ub,
        inTile: Ab = !1
      } = bb;
      return (0, mb.jsx)(db, {
        itemName: Nb,
        amount: ab.locatorEntryPrice,
        PY: Ub,
        inTile: Ab
      })
    }

    function bU(bb) {
      let {
        view: ab,
        controller: Ub,
        entry: Ab
      } = bb;
      const {
        t: Mb
      } = (0, Lb.A)(), Tb = Ab.locatorEntryId, Eb = ab.locators.locatorEntries.find((bb => bb.locatorEntryArmed && bb !== Ab));
      return (0, mb.jsxs)("div", {
        className: "BoardActions",
        children: [Ab.locatorEntryArmed && (0, mb.jsx)(jb.M, {
          disabled: ab.pending,
          onClick: () => {
            Ub.act("locatorDisarm", Tb)
          },
          children: Mb(`${pb}:locatorDisarm`)
        }), Ab.locatorEntryOwned && !Ab.locatorEntryArmed && (0, mb.jsx)(jb.g, {
          disabled: ab.pending,
          onClick: () => {
            Ub.act("locatorArm", Tb)
          },
          children: Mb(`${pb}:locatorArm`)
        }), !Ab.locatorEntryOwned && (0, mb.jsxs)("div", {
          className: "LocatorBuy",
          children: [(0, mb.jsx)(Sa, {
            entry: Ab,
            coins: ab.locators.locatorCoins
          }), (0, mb.jsx)(jb.m, {
            disabled: ab.locators.locatorCoins < Ab.locatorEntryPrice || ab.pending,
            onClick: () => {
              Ub.act("locatorBuy", Tb)
            },
            children: Mb(`${pb}:locatorBuy`)
          })]
        }), Eb && !Ab.locatorEntryArmed && (0, mb.jsx)("span", {
          className: "BoardHint",
          children: Mb(`${pb}:locatorReplacesHint`, {
            name: Eb.locatorEntryName
          })
        })]
      })
    }

    function aU(bb) {
      let {
        entry: ab
      } = bb;
      return "locatorUnseen" === ab.locatorEntryStanding ? (0, mb.jsx)(Hb, {
        itemName: "Compass"
      }) : (0, mb.jsx)(Ib, {
        anomalyId: ab.locatorEntryId,
        caught: "locatorContained" === ab.locatorEntryStanding
      })
    }

    function UU(bb) {
      let {
        view: ab,
        controller: Ub,
        entry: Ab
      } = bb;
      const {
        t: Mb
      } = (0, Lb.A)(), Tb = ca[Ab.locatorEntryDifficulty];
      return (0, mb.jsxs)("section", {
        className: "BoardDetail",
        children: [(0, mb.jsxs)("div", {
          className: eb()("LocatorLabel", {
            Armed: Ab.locatorEntryArmed
          }),
          children: [(0, mb.jsx)(Qb, {
            icon: (0, mb.jsx)(aU, {
              entry: Ab
            }),
            name: Mb(`${pb}:locatorName`, {
              name: Ab.locatorEntryName
            }),
            children: (0, mb.jsx)(na, {
              entry: Ab
            })
          }), (0, mb.jsx)("p", {
            className: "BoardDescription",
            children: Mb(Ab.locatorEntryArmed ? `${pb}:locatorFlavourArmed` : Oa[Ab.locatorEntryStanding])
          }), null !== Tb && (0, mb.jsx)("p", {
            className: "LocatorAttuned",
            children: Mb(Tb)
          }), (0, mb.jsx)("p", {
            className: "BoardDescription LocatorUsage",
            children: Mb(`${pb}:locatorUsage`)
          })]
        }), (0, mb.jsx)(bU, {
          view: ab,
          controller: Ub,
          entry: Ab
        })]
      })
    }

    function AU(bb) {
      let {
        controller: ab
      } = bb;
      const Ub = (0, vb.i)(Ca, ab.getSnapshot()),
        {
          t: Ab
        } = (0, Lb.A)(),
        Mb = Ub.locators;
      if (null === Mb) return null;
      const Tb = Mb.locatorEntries.find((bb => bb.locatorEntryId === Ub.selectedId)),
        Eb = Ub.notice;
      return (0, mb.jsxs)(Wb, {
        open: Ub.open,
        onDismiss: ab.dismiss,
        title: Ab(`${pb}:locatorTitle`),
        className: "ContainmentLocatorPanel",
        decor: (0, mb.jsx)(Ja, {}),
        headerExtra: (0, mb.jsx)(qb, {
          coins: Mb.locatorCoins
        }),
        statusRefused: null === Eb || void 0 === Eb ? void 0 : Eb.locatorNoticeRefused,
        status: (0, mb.jsxs)(mb.Fragment, {
          children: [(0, mb.jsx)("span", {
            className: "LocatorKeeperBadge",
            children: Ab(`${pb}:locatorKeeperName`)
          }), null !== Eb && Ab(`${pb}:${Eb.locatorNoticeKey}`, {
            name: Eb.locatorNoticeName
          })]
        }),
        children: [(0, mb.jsx)("div", {
          className: "BoardTiles",
          children: Mb.locatorEntries.map((bb => (0, mb.jsxs)(Gb, {
            icon: (0, mb.jsx)(aU, {
              entry: bb
            }),
            name: bb.locatorEntryName,
            selected: bb === Tb,
            locked: !1,
            className: eb()("LocatorTag", {
              Armed: bb.locatorEntryArmed
            }),
            onSelect: () => {
              ab.select(bb.locatorEntryId)
            },
            children: [(0, mb.jsx)(na, {
              entry: bb
            }), !bb.locatorEntryOwned && (0, mb.jsx)(Sa, {
              entry: bb,
              coins: Mb.locatorCoins,
              inTile: !0
            })]
          }, bb.locatorEntryId)))
        }), (0, mb.jsx)(UU, {
          view: Ub,
          controller: ab,
          entry: Tb
        })]
      })
    }

    function MU(bb) {
      let {
        loadout: ab,
        codex: Ub,
        locator: Ab
      } = bb;
      return (0, mb.jsxs)(mb.Fragment, {
        children: [(0, mb.jsx)(ta, {
          controller: ab
        }), (0, mb.jsx)(nb, {
          controller: Ub
        }), (0, mb.jsx)(AU, {
          controller: Ab
        })]
      })
    }
    var TU = Ub(37875);
    class EU {
      constructor(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.sendCommand = bb, this.budget = void 0, this.awaitingReply = !1, this.replyTimer = null, this.listeners = new Set, this.budget = new TU.b({
          spacingMs: 0,
          now: ab
        }), this.budget.subscribe((() => {
          this.notify()
        }))
      }
      isPending() {
        return this.awaitingReply || this.budget.isPacing()
      }
      send(bb, ab) {
        return !this.isPending() && (this.awaitingReply = !0, this.replyTimer = setTimeout((() => {
          this.replyTimer = null, this.awaitingReply = !1, ab(), this.notify()
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
    var YU = Ub(37873);
    const BU = new Map([
      ["npc_general", Ra],
      ["npc_tentacle_guy", YU]
    ]);

    function eU(bb) {
      const ab = BU.get(bb);
      if (void 0 === ab) return null;
      const Ub = document.createElement("img");
      return Ub.src = ab, Ub.alt = "", Ub.draggable = !1, Ub.style.imageRendering = "pixelated", Ub
    }
    const vU = function() {
      let bb, ab = !1,
        Ub = null,
        Bb = null;
      const eb = [],
        vb = bb => {
          for (const ab of eb) ab !== bb && ab.close();
          (0, Yb.o)()
        },
        Lb = bb => {
          bb && (0, Yb.i)()
        },
        Pb = new EU((ab => {
          bb.sendCommand(ab)
        })),
        Xb = new Xa((bb => {
          Eb.m.IR(Pa, bb, !0)
        }), vb, Lb, Pb),
        jb = new Kb((bb => {
          Eb.m.IR(rb, bb, !0)
        }), vb, Lb),
        Rb = new Va((bb => {
          Eb.m.IR(Ca, bb, !0)
        }), vb, Lb, Pb);
      eb.push(Xb, jb, Rb);
      return {
        onCreate: ab => {
          bb = ab, Ub = (0, Yb.w)(null, {
            content: (0, Ab.createElement)(MU, {
              loadout: Xb,
              codex: jb,
              locator: Rb
            }),
            onClose: () => {
              for (const bb of eb) bb.close()
            }
          }), Bb = (0, Tb.g)(eU)
        },
        onReceivedMessageFromServer: (bb, ab) => {
          "containmentLoadout" === bb ? Xb.aj(ab) : "containmentLoadoutClose" === bb ? Xb.isOpen() && (Xb.close(), (0, Yb.g)()) : "containmentCodex" === bb ? jb.aj(ab) : "containmentLocator" === bb && Rb.aj(ab)
        },
        qL: () => {
          ab || Mb.c.get("loadingOverlayVisible") || (ab = !0, bb.sendCommand("containmentEntered"))
        },
        onClose: () => {
          var bb, ab;
          null === (bb = Ub) || void 0 === bb || bb(), Ub = null, null === (ab = Bb) || void 0 === ab || ab(), Bb = null;
          for (const Ub of eb) Ub.dispose();
          Pb.dispose()
        }
      }
    }
  },
  36214: (bb, ab, Ub) => {
    Ub.d(ab, {
      D: () => qb,
      G: () => ub,
      J: () => Gb,
      M: () => rb,
      d: () => Bb,
      e: () => Hb,
      g: () => Yb,
      h: () => hb,
      k: () => Nb,
      m: () => ib,
      p: () => Fb,
      r: () => db,
      v: () => pb,
      z: () => Qb
    });
    var Ab = Ub(31);
    const Mb = {
        codeBlock: ["codeBlockIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "worldCodeButton", "exportButton", "helpButton"],
        worldCode: ["worldCodeIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "exportButton", "helpButton"]
      },
      Tb = ["docsButton", "docsPanel", "docsClientOptionsTab", "docsClientOptions", "docsApiReferenceTab", "docsApiReference", "docsCallbacksTab", "docsCallbacks", "hideDocsButton"],
      Eb = ["aiHelperButton", "aiPanel", "aiAskBox", "aiModelChip", "aiAnswer", "aiEdits", "aiGear", "aiNotes", "aiGameSettings", "hideAiHelperButton"],
      Yb = Tb.filter((bb => "docsButton" !== bb)),
      Bb = Eb.filter((bb => "aiHelperButton" !== bb)),
      eb = "codeEditorTutorials",
      vb = {
        codeBlockIntro: "codeBlockIntroShown",
        worldCodeIntro: "worldCodeIntroShown"
      },
      Lb = {
        welcome: "welcomeComplete",
        docsOverview: "docsOverviewComplete",
        aiHelperOverview: "aiHelperOverviewComplete"
      };
    let Pb = null,
      Xb = null;
    const jb = new Set,
      Rb = new Set;
    let kb = null;
    const yb = new Set,
      Zb = new Set;

    function Db() {
      Zb.forEach((bb => {
        bb()
      }))
    }

    function zb() {
      if (!Pb) {
        const bb = Ab.f.getItem(eb);
        Pb = {
          codeBlockIntroShown: !1,
          worldCodeIntroShown: !1,
          welcomeComplete: !1,
          docsOverviewComplete: !1,
          aiHelperOverviewComplete: !1,
          ..."object" === typeof bb && null !== bb ? bb : {}
        }
      }
      return Pb
    }

    function xb(bb) {
      const ab = zb();
      ab[bb] || (Pb = {
        ...ab,
        [bb]: !0
      }, Ab.f.setItem(eb, Pb))
    }

    function ib(bb) {
      return "docsOverview" === bb ? Tb : "aiHelperOverview" === bb ? Eb : Xb ? Mb[Xb] : []
    }

    function fb(bb) {
      return ("worldCodeButton" !== bb || !zb().worldCodeIntroShown) && !yb.has(bb)
    }

    function mb(bb) {
      var ab;
      return (null === (ab = kb) || void 0 === ab ? void 0 : ab.name) === bb ? kb.stepsDone : jb
    }

    function pb(bb, ab) {
      if (! function(bb) {
          return kb ? kb.name === bb : "welcome" === bb
        }(bb) || !fb(ab) || mb(bb).has(ab)) return !1;
      if (kb) return !0;
      const Ub = vb[ab];
      return Ub ? !zb()[Ub] || Rb.has(ab) : !zb()[Lb[bb]]
    }

    function Nb(bb) {
      var ab;
      return null !== (ab = ib(bb).find((ab => pb(bb, ab)))) && void 0 !== ab ? ab : null
    }

    function Wb(bb) {
      var ab;
      xb(Lb[bb]), (null === (ab = kb) || void 0 === ab ? void 0 : ab.name) === bb && (kb = null)
    }

    function Hb(bb) {
      const ab = (kb ? [kb.name] : ["welcome", "docsOverview"]).find((ab => Nb(ab) === bb));
      if (!ab) return;
      mb(ab).add(bb);
      const Ub = vb[bb];
      Ub && (xb(Ub), kb || Rb.add(bb)), null === Nb(ab) && Wb(ab), Db()
    }

    function Ib(bb, ab) {
      const Ub = ib(bb),
        Ab = mb(bb);
      for (let Mb = Ub.indexOf(ab) - 1; Mb >= 0; Mb--)
        if (Ab.has(Ub[Mb]) && fb(Ub[Mb])) return Ub[Mb];
      return null
    }

    function db(bb, ab) {
      return null !== Ib(bb, ab)
    }

    function Fb(bb, ab) {
      const Ub = Ib(bb, ab);
      Ub && (mb(bb).delete(Ub), Db())
    }

    function hb(bb) {
      Wb(bb), "welcome" === bb && ib("welcome").forEach((bb => {
        const ab = vb[bb];
        ab && xb(ab)
      })), Db()
    }

    function Gb(bb) {
      kb = {
        name: bb,
        stepsDone: new Set
      }, Db()
    }

    function Qb() {
      (kb || 0 !== jb.size || 0 !== Rb.size) && (kb = null, jb.clear(), Rb.clear(), Db())
    }

    function qb(bb, ab) {
      const Ub = ab ? bb : Xb === bb ? null : Xb;
      Ub !== Xb && (Xb = Ub, Db())
    }

    function ub(bb, ab) {
      yb.has(bb) === ab && (ab ? yb.delete(bb) : yb.add(bb), Db())
    }

    function rb(bb) {
      return Zb.add(bb), () => {
        Zb.delete(bb)
      }
    }
  },
  38549: (bb, ab, Ub) => {
    var Ab = {
      "./breach-zero-uncaught.webp": 38557,
      "./breach-zero.webp": 38563,
      "./brood-father-uncaught.webp": 38565,
      "./brood-father.webp": 38572,
      "./carousel-uncaught.webp": 38574,
      "./carousel.webp": 38576,
      "./deadlock-uncaught.webp": 38579,
      "./deadlock.webp": 38581,
      "./frost-revenant-uncaught.webp": 38589,
      "./frost-revenant.webp": 38595,
      "./hollow-choir-uncaught.webp": 38599,
      "./hollow-choir.webp": 38601,
      "./magma-warden-uncaught.webp": 38608,
      "./magma-warden.webp": 38611,
      "./patient-zero-uncaught.webp": 38615,
      "./patient-zero.webp": 38618,
      "./siege-engine-uncaught.webp": 38621,
      "./siege-engine.webp": 38627,
      "./warp-stalker-uncaught.webp": 38633,
      "./warp-stalker.webp": 38635
    };

    function Mb(bb) {
      var ab = Tb(bb);
      return Ub(ab)
    }

    function Tb(bb) {
      if (!Ub.o(Ab, bb)) {
        var ab = new Error("Cannot find module '" + bb + "'");
        throw ab.code = "MODULE_NOT_FOUND", ab
      }
      return Ab[bb]
    }
    Mb.keys = function() {
      return Object.keys(Ab)
    }, Mb.resolve = Tb, bb.exports = Mb, Mb.id = 38549
  },
  38557: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/breach-zero-uncaught.c7d4410f99269ac1ee2f.webp"
  },
  38563: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/breach-zero.ef5aacecf502228cd20b.webp"
  },
  38565: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/brood-father-uncaught.ee678432c71b7061fae1.webp"
  },
  38572: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/brood-father.e48391955a574c1155fa.webp"
  },
  38574: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/carousel-uncaught.a92757620f569f31d7d2.webp"
  },
  38576: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/carousel.5fc13db7958067d6e1a3.webp"
  },
  38579: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/deadlock-uncaught.feadbdbbf2d040dce5c0.webp"
  },
  38581: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/deadlock.2bcaeaa57376fd78ddcb.webp"
  },
  38589: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/frost-revenant-uncaught.c0271636eeae988b1a40.webp"
  },
  38595: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/frost-revenant.fed6021646d7f0f81876.webp"
  },
  38599: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/hollow-choir-uncaught.7eaab76a15f82bd79558.webp"
  },
  38601: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/hollow-choir.05f9c51994aecece852a.webp"
  },
  38608: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/magma-warden-uncaught.5308736fbb8a503cdfc7.webp"
  },
  38611: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/magma-warden.cc4302a49a39ae962a31.webp"
  },
  38615: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/patient-zero-uncaught.1f9ec012a14c4dbdcc8f.webp"
  },
  38618: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/patient-zero.cc76984bb20e9f9ace76.webp"
  },
  38621: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/siege-engine-uncaught.88e0ad7fec37ba2b4a2e.webp"
  },
  38627: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/siege-engine.b2e2382e415f4ae470ac.webp"
  },
  38633: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/warp-stalker-uncaught.c3b1b82ecb18446b71b0.webp"
  },
  38635: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/warp-stalker.851972c629601b668aa7.webp"
  },
  37873: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYElEQVR4nGNgIBIwovH/45JnRFaUGN+Comr+whq4GiZ0RVycnGAMAlAxsC0sMN2fvn9DodEBzEQGdUV5hvNnV4JpGJuPkwtTIQh4umZhZWMonDqjGCsbHcCCBkQjs0kDAPeaHpfX1eroAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);