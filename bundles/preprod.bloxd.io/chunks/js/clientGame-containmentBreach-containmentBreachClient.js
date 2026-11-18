export const id = 14;
export const ids = [14];
export const modules = {
  37930: (yb, bb, Wy) => {
    var Uy = {
      "./breach-zero-uncaught.webp": 37933,
      "./breach-zero.webp": 37939,
      "./brood-father-uncaught.webp": 37946,
      "./brood-father.webp": 37954,
      "./carousel-uncaught.webp": 37961,
      "./carousel.webp": 37966,
      "./deadlock-uncaught.webp": 37968,
      "./deadlock.webp": 37975,
      "./frost-revenant-uncaught.webp": 37982,
      "./frost-revenant.webp": 37988,
      "./hollow-choir-uncaught.webp": 37994,
      "./hollow-choir.webp": 38e3,
      "./magma-warden-uncaught.webp": 38004,
      "./magma-warden.webp": 38012,
      "./patient-zero-uncaught.webp": 38016,
      "./patient-zero.webp": 38020,
      "./siege-engine-uncaught.webp": 38025,
      "./siege-engine.webp": 38029,
      "./warp-stalker-uncaught.webp": 38036,
      "./warp-stalker.webp": 38040
    };

    function hy(yb) {
      var bb = fy(yb);
      return Wy(bb)
    }

    function fy(yb) {
      if (!Wy.o(Uy, yb)) {
        var bb = new Error("Cannot find module '" + yb + "'");
        throw bb.code = "MODULE_NOT_FOUND", bb
      }
      return Uy[yb]
    }
    hy.keys = function() {
      return Object.keys(Uy)
    }, hy.resolve = fy, yb.exports = hy, hy.id = 37930
  },
  35619: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => Gy,
      f: () => Jy,
      g: () => gb,
      h: () => sy
    });
    var Uy = Wy(898),
      hy = Wy.n(Uy),
      fy = Wy(55),
      Zy = Wy(70),
      cb = Wy(1219),
      Py = Wy(1273),
      oy = Wy(1217),
      By = Wy(1136),
      Ky = Wy(1042),
      ey = Wy(35625),
      qb = Wy(952);

    function sy(yb) {
      const [bb, Wy] = (0, fy.useState)((() => (0, ey.n)(yb)));
      return (0, fy.useEffect)((() => (Wy((0, ey.n)(yb)), (0, ey.K)((() => {
        Wy((0, ey.n)(yb))
      })))), [yb]), bb
    }

    function Sy(yb, bb) {
      "function" === typeof yb ? yb(bb) : yb && (yb.current = bb)
    }

    function Ey(yb) {
      let {
        tutorial: bb,
        step: Wy,
        enabled: Uy = !0
      } = yb;
      const hy = sy(bb);
      return Uy && hy === Wy
    }

    function ly(yb, bb) {
      const Wy = (0, ey.r)(yb),
        Uy = Wy.indexOf(bb);
      return !Wy.slice(Uy + 1).some((bb => (0, ey.z)(yb, bb)))
    }

    function mb(yb, bb, Wy, Uy) {
      let {
        tutorial: hy,
        step: fy,
        waitForClick: Zy = !1,
        onPrevious: cb
      } = yb;
      const Py = bb && (0, ey.x)(hy, fy),
        oy = bb && !ly(hy, fy),
        Ky = Zy ? Uy : Wy;
      let qb = null;
      Py ? qb = () => {
        null === cb || void 0 === cb || cb(), (0, ey.v)(hy, fy)
      } : oy && (qb = () => {
        (0, ey.k)(hy)
      }), (0, By.x)("popup", null !== Ky && void 0 !== Ky ? Ky : Wy, qb, bb && null !== Ky, null, Py ? void 0 : "controller:menusSkipTutorial")
    }

    function Cy(yb) {
      let {
        tutorial: bb,
        step: Wy,
        text: Uy,
        waitForClick: hy = !1,
        onPrevious: fy
      } = yb;
      const {
        t: Zy
      } = (0, Ky.D)(), cb = ly(bb, Wy);
      return (0, qb.jsxs)(qb.Fragment, {
        children: [(0, qb.jsx)("div", {
          className: "TutorialStepText",
          children: Uy
        }), (0, qb.jsxs)("div", {
          className: "TutorialStepButtons",
          children: [(0, ey.x)(bb, Wy) && (0, qb.jsx)(Py.g, {
            className: "TutorialStepButton",
            onClick: () => {
              null === fy || void 0 === fy || fy(), (0, ey.v)(bb, Wy)
            },
            children: Zy("tutorial:back")
          }), !hy && (0, qb.jsx)(Py.f, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, ey.i)(Wy)
            },
            padDefaultFocus: !0,
            children: Zy(cb ? "tutorial:done" : "tutorial:next")
          }), !cb && (0, qb.jsx)(Py.g, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, ey.k)(bb)
            },
            children: Zy("tutorial:skip")
          })]
        })]
      })
    }
    const Ty = 6;

    function Vy(yb) {
      let {
        rect: bb,
        margin: Wy
      } = yb;
      const Uy = Math.max(0, bb.top - Wy),
        hy = bb.bottom + Wy,
        fy = Math.max(0, bb.left - Wy),
        Zy = bb.right + Wy;
      return (0, qb.jsxs)(qb.Fragment, {
        children: [(0, qb.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: 0,
            left: 0,
            right: 0,
            height: Uy
          }
        }), (0, qb.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: hy,
            left: 0,
            right: 0,
            bottom: 0
          }
        }), (0, qb.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: Uy,
            left: 0,
            width: fy,
            height: hy - Uy
          }
        }), (0, qb.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: Uy,
            left: Zy,
            right: 0,
            height: hy - Uy
          }
        })]
      })
    }

    function Jy(yb) {
      let {
        target: bb,
        placement: Wy,
        boxRef: Uy,
        className: Py,
        spotlightMargin: By = Ty,
        children: Ky
      } = yb;
      const {
        getArrowProps: ey,
        getTooltipProps: sy,
        setTooltipRef: Sy,
        setTriggerRef: Ey
      } = (0, cb.e)({
        placement: Wy,
        trigger: null,
        visible: !0,
        interactive: !0,
        closeOnOutsideClick: !1,
        offset: [0, By]
      });
      (0, fy.useLayoutEffect)((() => {
        Ey(bb)
      }), [bb, Ey]);
      const ly = function(yb, bb) {
        const [Wy, Uy] = (0, fy.useState)(null);
        return (0, fy.useEffect)((() => {
          if (!bb || !yb) return void Uy(null);
          let Wy = 0,
            hy = null;
          const fy = () => {
            const bb = yb.getBoundingClientRect();
            hy && bb.left === hy.left && bb.top === hy.top && bb.width === hy.width && bb.height === hy.height || (hy = bb, Uy(bb)), Wy = requestAnimationFrame(fy)
          };
          return fy(), () => {
            cancelAnimationFrame(Wy)
          }
        }), [yb, bb]), Wy
      }(bb, !0);
      (0, fy.useEffect)((() => {
        null === bb || void 0 === bb || bb.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        })
      }), [bb]);
      const mb = (0, fy.useCallback)((yb => {
        Sy(yb), Uy && (Uy.current = yb)
      }), [Sy, Uy]);
      return (0, Zy.createPortal)((0, qb.jsxs)(qb.Fragment, {
        children: [ly && (0, qb.jsx)(Vy, {
          rect: ly,
          margin: By
        }), (0, qb.jsxs)("div", {
          ref: mb,
          ...sy({
            className: hy()("tooltip-container SmallTextLight TutorialStep", Py)
          }),
          children: [Ky, (0, qb.jsx)("div", {
            ...ey({
              className: "tooltip-arrow"
            })
          })]
        })]
      }), (0, oy.i)())
    }
    const gb = (0, fy.forwardRef)((function(yb, bb) {
      let {
        placement: Wy = "right",
        children: Uy,
        ...hy
      } = yb;
      const Zy = Ey(hy),
        cb = (0, fy.useRef)(null),
        Py = (0, fy.useRef)(null);
      mb(hy, Zy, cb, Py);
      const [oy, By] = (0, fy.useState)(null), Ky = Uy.ref, ey = (0, fy.useCallback)((yb => {
        Py.current = yb, By(yb), Sy(bb, yb), Sy(Ky, yb)
      }), [bb, Ky]);
      return (0, qb.jsxs)(qb.Fragment, {
        children: [(0, fy.cloneElement)(Uy, {
          ref: ey
        }), Zy && (0, qb.jsx)(Jy, {
          target: oy,
          placement: Wy,
          boxRef: cb,
          children: (0, qb.jsx)(Cy, {
            ...hy
          })
        })]
      })
    }));

    function Gy(yb) {
      const bb = Ey(yb),
        Wy = (0, fy.useRef)(null);
      return mb(yb, bb, Wy, null), bb ? (0, Zy.createPortal)((0, qb.jsx)("div", {
        className: "TutorialCentreBackdrop",
        children: (0, qb.jsx)("div", {
          ref: Wy,
          className: "tooltip-container SmallTextLight TutorialStep TutorialCentreStep",
          children: (0, qb.jsx)(Cy, {
            ...yb
          })
        })
      }), (0, oy.i)()) : null
    }
  },
  37227: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => Zy
    });
    const Uy = 4,
      hy = 12e3,
      fy = 1e3;
    class Zy {
      constructor() {
        let {
          limit: yb = Uy,
          windowMs: bb = hy,
          spacingMs: Wy = fy,
          now: Zy = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = yb, this.windowMs = bb, this.spacingMs = Wy, this.now = Zy
      }
      isPacing() {
        return !this.canSendPriority() || this.isPriorityWaiting()
      }
      canSendPriority() {
        return this.prune(), this.sent.length < this.limit && this.now() - this.lastSentAt >= this.spacingMs
      }
      tryStart() {
        for (const yb of this.priority) yb.flush();
        return !this.isPacing() && (this.start(), !0)
      }
      start() {
        this.prune();
        const yb = this.now();
        this.sent.push(yb), this.lastSentAt = yb, this.schedule(), this.notify()
      }
      addPriority(yb) {
        return this.priority.add(yb), () => {
          this.priority.delete(yb)
        }
      }
      subscribe(yb) {
        return this.listeners.add(yb), () => {
          this.listeners.delete(yb)
        }
      }
      dispose() {
        this.clearTimer(), this.sent = [], this.listeners.clear(), this.priority.clear()
      }
      isPriorityWaiting() {
        for (const yb of this.priority)
          if (yb.waiting()) return !0;
        return !1
      }
      prune() {
        const yb = this.now() - this.windowMs;
        for (; this.sent.length > 0 && this.sent[0] <= yb;) this.sent.shift()
      }
      schedule() {
        this.clearTimer();
        const yb = this.now(),
          bb = this.lastSentAt + this.spacingMs,
          Wy = Math.min(bb > yb ? bb : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        Wy !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, Wy - yb)))
      }
      notify() {
        for (const yb of this.listeners) yb()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  35383: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => fy,
      e: () => Sy,
      g: () => Ey,
      j: () => cb,
      k: () => ey,
      l: () => ly,
      p: () => Ky,
      s: () => Cy,
      t: () => sy,
      w: () => mb
    });
    var Uy = Wy(19),
      hy = Wy(23);
    const fy = "clientGameInventoryButtonsChanged",
      Zy = new Map;

    function cb() {
      return [...Zy.values()].sort(((yb, bb) => {
        var Wy, Uy;
        return (null !== (Wy = yb.order) && void 0 !== Wy ? Wy : 0) - (null !== (Uy = bb.order) && void 0 !== Uy ? Uy : 0)
      }))
    }
    let Py = null;

    function oy(yb) {
      Py = yb
    }
    let By = !1;

    function Ky(yb) {
      By = !0;
      try {
        yb.onClick()
      } finally {
        By = !1
      }
      yb.panel && "clientGame" === Uy.d.get("openInGameMenuName") && oy(yb.id)
    }

    function ey() {
      return By
    }

    function qb() {
      return cb().filter((yb => yb.panel && !yb.disabled))
    }

    function sy(yb) {
      const bb = qb(),
        Wy = bb.findIndex((yb => yb.id === Py));
      return !(Wy < 0 || bb.length < 2) && (Ky(bb[(Wy + yb + bb.length) % bb.length]), !0)
    }

    function Sy() {
      return null !== Py && qb().length > 1
    }

    function Ey() {
      oy(null)
    }

    function ly() {
      "inventory" !== Uy.d.get("openInGameMenuName") && oy(null)
    }

    function mb() {
      const yb = Py;
      return oy(null), yb
    }

    function Cy(yb) {
      return Zy.set(yb.id, yb), hy.g.EZ(fy, cb(), !0), () => {
        Zy.get(yb.id) === yb && (Zy.delete(yb.id), hy.g.EZ(fy, cb()))
      }
    }
  },
  37207: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Uy
    });
    class Uy {
      constructor(yb, bb, Wy) {
        this.EZ = yb, this.beforeOpen = bb, this.afterClose = Wy, this.open = !1, this.rh = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.rh && (this.open = !0, this.beforeOpen(this), this.emit())
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
      closePanel(yb) {
        this.open = !1, this.onClosed(), this.emit(), this.afterClose(yb)
      }
      onClosed() {}
      dispose() {
        this.open = !1, this.emit(), this.rh = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.rh || (this.snapshot = this.buildSnapshot(), this.EZ(this.snapshot))
      }
    }
  },
  35379: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => cb,
      h: () => Ey,
      k: () => ly,
      o: () => ey,
      s: () => oy,
      t: () => Sy,
      v: () => qb,
      z: () => By
    });
    var Uy = Wy(19),
      hy = Wy(23),
      fy = Wy(1145),
      Zy = Wy(35383);
    const cb = "clientGameUiChanged";
    let Py = null;

    function oy() {
      return Py
    }

    function By(yb, bb) {
      const Wy = {
        content: yb,
        menu: bb
      };
      return Py = Wy, hy.g.EZ(cb, Py, !0), () => {
        Py === Wy && (Py = null, sy = !1, Ey(), hy.g.EZ(cb, null))
      }
    }
    let Ky = null;

    function ey() {
      return Ky
    }

    function qb(yb) {
      return Ky = yb, () => {
        Ky === yb && (Ky = null)
      }
    }
    let sy = !1;

    function Sy() {
      const yb = Uy.d.get("openInGameMenuName");
      "clientGame" !== yb && (sy = "inventory" === yb), (0, Zy.k)() || (0, Zy.g)(), (0, fy.h)("InGameMenu"), Uy.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function Ey() {
      mb(!1)
    }

    function ly() {
      mb(sy)
    }

    function mb(yb) {
      "clientGame" === Uy.d.get("openInGameMenuName") && Uy.d.set({
        openInGameMenuName: yb ? "inventory" : null
      }), yb || (0, Zy.g)(), sy = !1
    }
  },
  37924: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      default: () => BW
    });
    var Uy = Wy(55);
    var hy = Wy(19),
      fy = Wy(1552),
      Zy = Wy(23),
      cb = Wy(35379),
      Py = Wy(898),
      oy = Wy.n(Py),
      By = Wy(1268),
      Ky = Wy(1042),
      ey = Wy(3732),
      qb = Wy(1199),
      sy = Wy(1273),
      Sy = Wy(1556),
      Ey = Wy(1217),
      ly = Wy(1546),
      mb = Wy(1612),
      Cy = Wy(618);
    const Ty = Wy(37930),
      Vy = Object.fromEntries(Ty.keys().map((yb => [yb.replace(/^\.\/(.*)\.webp$/, "$1"), Ty(yb)]))),
      Jy = new Set;

    function gb(yb, bb) {
      const Wy = bb ? yb : `${yb}-uncaught`,
        Uy = (0, Cy.c)(Vy, Wy);
      return void 0 !== Uy || Jy.has(Wy) || (Jy.add(Wy), console.warn(`Containment Breach has no mugshot ${Wy}: run tools/harnessCutouts/ContainmentMugshotCapture.ts`)), Uy
    }
    var Gy = Wy(952);
    const Oy = "containmentBreach",
      Ry = "Gold Coin";

    function vb(yb) {
      let {
        open: bb,
        onDismiss: Wy,
        title: Uy,
        className: hy,
        decor: fy,
        headerExtra: Zy,
        status: cb,
        statusRefused: Py = !1,
        children: By
      } = yb;
      const Ky = `${hy}Title`;
      return (0, Gy.jsx)(ey.c, {
        show: bb,
        close: Wy,
        togglePointerLock: !1,
        className: "ContainmentBoardOverlay",
        children: (0, Gy.jsxs)("section", {
          className: oy()("ContainmentBoardPanel", hy),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": Ky,
          children: [fy && (0, Gy.jsx)("div", {
            className: "BoardDecor",
            "aria-hidden": "true",
            children: fy
          }), (0, Gy.jsxs)("header", {
            className: "BoardHeader",
            children: [(0, Gy.jsx)("h2", {
              id: Ky,
              className: "VisuallyHidden",
              children: Uy
            }), Zy, (0, Gy.jsx)(sy.h, {
              onClick: Wy
            })]
          }), (0, Gy.jsx)("div", {
            className: "BoardBody",
            children: By
          }), void 0 !== cb && (0, Gy.jsx)("footer", {
            className: oy()("BoardStatus", {
              Refused: Py
            }),
            children: cb
          })]
        })
      })
    }

    function ib(yb) {
      let {
        itemName: bb
      } = yb;
      return (0, Gy.jsx)(Sy.d, {
        itemName: bb,
        amount: 0
      })
    }

    function My(yb) {
      let {
        anomalyId: bb,
        caught: Wy
      } = yb;
      const hy = (0, Uy.useRef)(null);
      return (0, qb.d)(hy, !Wy), (0, Gy.jsx)("span", {
        ref: hy,
        className: oy()("BoardMugshot", {
          Uncaught: !Wy
        }),
        children: (0, Gy.jsx)("img", {
          src: gb(bb, Wy),
          alt: "",
          draggable: !1
        })
      })
    }

    function Yy(yb) {
      let {
        itemName: bb,
        amount: Wy,
        kW: Uy,
        inTile: hy = !1
      } = yb;
      return (0, Gy.jsx)(Ey.f, {
        delayShow: 200,
        hoverOnly: hy,
        placement: "top",
        tooltipClassName: "BoardChipTooltipBox",
        tooltipInner: (0, Gy.jsx)(ny, {
          itemName: bb,
          amount: Wy,
          kW: Uy
        }),
        children: (0, Gy.jsxs)("span", {
          className: oy()("BoardChip", {
            Short: void 0 !== Uy && Uy < Wy
          }),
          children: [(0, Gy.jsx)("span", {
            className: "BoardChipIcon",
            children: (0, Gy.jsx)(ib, {
              itemName: bb
            })
          }), Wy.toLocaleString()]
        })
      })
    }
    const Xy = /^(.*?)\s*Salvaged from (?:an? )?(.+?)\.?$/;

    function ny(yb) {
      var bb;
      let {
        itemName: Wy,
        amount: Uy,
        kW: hy
      } = yb;
      const {
        t: fy
      } = (0, Ky.D)(), Zy = (0, mb.i)("itemInfo", (yb => yb[Wy])), {
        lore: cb,
        droppedBy: Py
      } = function(yb) {
        if ("string" !== typeof yb) return {
          lore: yb,
          droppedBy: null
        };
        const bb = Xy.exec(yb);
        return null === bb ? {
          lore: yb,
          droppedBy: null
        } : {
          lore: "" === bb[1] ? void 0 : bb[1],
          droppedBy: bb[2]
        }
      }(null === Zy || void 0 === Zy ? void 0 : Zy.description);
      return (0, Gy.jsxs)("div", {
        className: "BoardChipTooltip",
        children: [(0, Gy.jsxs)("div", {
          className: "BoardChipTooltipHeader",
          children: [(0, Gy.jsx)("span", {
            className: "BoardChipTooltipIcon",
            children: (0, Gy.jsx)(ib, {
              itemName: Wy
            })
          }), (0, Gy.jsx)(ly.d, {
            text: null !== (bb = null === Zy || void 0 === Zy ? void 0 : Zy.displayName) && void 0 !== bb ? bb : Wy,
            className: "BoardChipTooltipName"
          })]
        }), (void 0 !== cb || null !== Py) && (0, Gy.jsxs)("div", {
          className: "BoardChipTooltipBody",
          children: [void 0 !== cb && (0, Gy.jsx)(ly.d, {
            text: cb,
            className: "BoardChipTooltipDescription"
          }), null !== Py && (0, Gy.jsxs)("span", {
            className: "BoardChipTooltipSource",
            children: [(0, Gy.jsx)("span", {
              className: "BoardChipTooltipLabel",
              children: fy(`${Oy}:chipDroppedBy`)
            }), Py]
          })]
        }), void 0 !== hy && (0, Gy.jsxs)("div", {
          className: oy()("BoardChipTooltipHeld", {
            Short: hy < Uy
          }),
          children: [(0, Gy.jsx)("span", {
            className: "BoardChipTooltipLabel",
            children: fy(`${Oy}:chipYouHave`)
          }), (0, Gy.jsxs)("span", {
            className: "BoardChipTooltipCount",
            children: [(0, Gy.jsx)("span", {
              className: "BoardChipTooltipHeldAmount",
              children: hy.toLocaleString()
            }), ` / ${Uy.toLocaleString()}`]
          }), (0, Gy.jsx)("span", {
            className: "BoardChipTooltipMeter",
            children: (0, Gy.jsx)("span", {
              style: {
                width: (Uy > 0 ? 100 * Math.min(1, hy / Uy) : 100) + "%"
              }
            })
          })]
        })]
      })
    }

    function uy(yb) {
      let {
        icon: bb,
        name: Wy,
        selected: Uy,
        locked: hy,
        className: fy,
        buttonRef: Zy,
        onSelect: cb,
        children: Py
      } = yb;
      return (0, Gy.jsxs)("button", {
        ref: Zy,
        type: "button",
        className: oy()("BoardTile", fy, {
          Selected: Uy,
          Locked: hy
        }),
        onClick: cb,
        children: [(0, Gy.jsx)("span", {
          className: "BoardTileIcon",
          children: bb
        }), (0, Gy.jsx)("span", {
          className: "BoardTileName",
          children: Wy
        }), Py]
      })
    }

    function rb(yb) {
      let {
        icon: bb,
        name: Wy,
        children: Uy
      } = yb;
      return (0, Gy.jsxs)("header", {
        className: "BoardDetailHeader",
        children: [(0, Gy.jsx)("span", {
          className: "BoardDetailIcon",
          children: bb
        }), (0, Gy.jsxs)("div", {
          className: "BoardDetailHeading",
          children: [(0, Gy.jsx)("h3", {
            children: Wy
          }), (0, Gy.jsx)("span", {
            className: "BoardDetailStatus",
            children: Uy
          })]
        })]
      })
    }

    function Hy(yb) {
      let {
        coins: bb,
        children: Wy
      } = yb;
      return (0, Gy.jsxs)("div", {
        className: "BoardWallet",
        children: [(0, Gy.jsx)(Yy, {
          itemName: Ry,
          amount: bb
        }), Wy]
      })
    }
    var ab = Wy(37207);
    const Fy = "containmentCodexView";
    class py extends ab.b {
      constructor() {
        super(...arguments), this.entries = [], this.selectedId = "", this.snapshot = this.buildSnapshot(), this.select = yb => {
          this.selectedId = yb, this.emit()
        }
      }
      pU(yb) {
        this.entries = yb.codexEntries, this.selectedId = this.entries[0].codexEntryId, this.showOrRefresh()
      }
      buildSnapshot() {
        return {
          open: this.open,
          entries: this.entries,
          selectedId: this.selectedId
        }
      }
    }
    const Ly = {
        codexAnyDifficulty: `${Oy}:codexNeedsAny`,
        codexNormalOnly: `${Oy}:codexNeedsNormal`,
        codexHardOnly: `${Oy}:codexNeedsHard`
      },
      Qy = {
        codexContained: "Contained",
        codexEncountered: "Sighted",
        codexUnidentified: "Unknown"
      },
      jb = {
        codexContained: `${Oy}:codexContainedBadge`,
        codexEncountered: `${Oy}:codexEncounteredBadge`,
        codexUnidentified: `${Oy}:codexUnidentifiedBadge`
      },
      Dy = ["94%", "81%", "88%", "46%", "72%"];

    function tb(yb) {
      let {
        entry: bb
      } = yb;
      const {
        t: Wy
      } = (0, Ky.D)();
      return (0, Gy.jsx)("span", {
        className: oy()("BoardBadge", Qy[bb.codexEntryState]),
        children: Wy(jb[bb.codexEntryState])
      })
    }

    function wy(yb) {
      const {
        t: bb
      } = (0, Ky.D)();
      return "codexUnidentified" === yb.codexEntryState ? bb(`${Oy}:codexUnidentifiedName`) : yb.codexEntryName
    }

    function kb(yb) {
      let {
        entry: bb
      } = yb;
      return "codexUnidentified" === bb.codexEntryState ? (0, Gy.jsx)(ib, {
        itemName: "Book"
      }) : (0, Gy.jsxs)("span", {
        className: "CodexPhoto",
        children: [(0, Gy.jsx)(My, {
          anomalyId: bb.codexEntryId,
          caught: "codexContained" === bb.codexEntryState
        }), (0, Gy.jsx)("img", {
          className: "CodexPaperclip",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAMCAYAAACulacQAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGNggIIXb97/X7V57/+Wvtn/GZDBqs17UQTgClahScBATHrlf5ySeHWimo9NMbokCp9OkmD/oasGCaJLAAC5ZUIBS85GiAAAAABJRU5ErkJggg==",
          alt: "",
          draggable: !1
        })]
      })
    }

    function Ny(yb) {
      let {
        entry: bb,
        selected: Wy,
        onSelect: Uy
      } = yb;
      const hy = "codexUnidentified" === bb.codexEntryState;
      return (0, Gy.jsxs)(uy, {
        icon: (0, Gy.jsx)(kb, {
          entry: bb
        }),
        name: wy(bb),
        selected: Wy,
        locked: hy,
        className: oy()("CodexFolder", Qy[bb.codexEntryState]),
        onSelect: () => {
          Uy(bb.codexEntryId)
        },
        children: [!hy && (0, Gy.jsx)(tb, {
          entry: bb
        }), hy && (0, Gy.jsx)("img", {
          className: "CodexSeal",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAARElEQVR4nGNggIIGHp7/MAzjw+TAnMf+/mB8RkQEjOGKYZLIgsiK4AqQJZA1gBXAOHgVwCRQJJEdCVOEYj8yQPciTAEAz0hgyamUqskAAAAASUVORK5CYII=",
          alt: "",
          draggable: !1
        })]
      })
    }

    function zb(yb) {
      let {
        count: bb
      } = yb;
      const Wy = [];
      for (let Uy = Math.min(bb, 25); Uy > 0; Uy -= 5) Wy.push(Math.min(Uy, 5));
      return (0, Gy.jsx)("span", {
        className: "CodexTallyMarks",
        "aria-hidden": "true",
        children: Wy.map(((yb, bb) => (0, Gy.jsx)("span", {
          className: oy()("CodexTallyGroup", {
            Gate: 5 === yb
          }),
          children: Array.from({
            length: Math.min(yb, 4)
          }, ((yb, bb) => (0, Gy.jsx)("span", {
            className: "CodexTallyMark"
          }, bb)))
        }, bb)))
      })
    }

    function Iy(yb) {
      let {
        contained: bb,
        total: Wy
      } = yb;
      const {
        t: Uy
      } = (0, Ky.D)();
      return (0, Gy.jsxs)("div", {
        className: "CodexProgress",
        children: [Uy(`${Oy}:codexProgress`, {
          contained: String(bb),
          total: String(Wy)
        }), (0, Gy.jsx)("span", {
          className: "CodexProgressMeter",
          children: (0, Gy.jsx)("span", {
            style: {
              width: bb / Wy * 100 + "%"
            }
          })
        })]
      })
    }

    function xb(yb) {
      let {
        entry: bb,
        fileNumber: Wy
      } = yb;
      const {
        t: Uy
      } = (0, Ky.D)(), hy = "codexContained" === bb.codexEntryState;
      return (0, Gy.jsx)("section", {
        className: "BoardDetail",
        children: (0, Gy.jsxs)("article", {
          className: oy()("CodexDossier", Qy[bb.codexEntryState]),
          children: [(0, Gy.jsx)("span", {
            className: "CodexFileNumber",
            children: Uy(`${Oy}:codexFileNumber`, {
              number: String(Wy).padStart(3, "0")
            })
          }), (0, Gy.jsx)(rb, {
            icon: (0, Gy.jsx)(kb, {
              entry: bb
            }),
            name: wy(bb),
            children: (0, Gy.jsx)(tb, {
              entry: bb
            })
          }), hy && (0, Gy.jsxs)(Gy.Fragment, {
            children: [(0, Gy.jsx)("p", {
              className: "BoardDescription",
              children: bb.codexEntryLore
            }), (0, Gy.jsxs)("p", {
              className: "CodexTally",
              children: [Uy(`${Oy}:codexContainments`, {
                count: String(bb.codexEntryContainedCount)
              }), (0, Gy.jsx)(zb, {
                count: bb.codexEntryContainedCount
              })]
            }), (0, Gy.jsx)("span", {
              className: "CodexClosedStamp",
              "aria-hidden": "true",
              children: Uy(`${Oy}:codexContainedBadge`)
            })]
          }), !hy && (0, Gy.jsxs)(Gy.Fragment, {
            children: [(0, Gy.jsxs)("div", {
              className: "CodexRedaction",
              children: [Dy.map((yb => (0, Gy.jsx)("span", {
                className: "CodexRedactedLine",
                style: {
                  width: yb
                }
              }, yb))), (0, Gy.jsx)("p", {
                className: "CodexRedacted",
                children: Uy(`${Oy}:codexRedacted`)
              })]
            }), "" !== bb.codexEntryHint && (0, Gy.jsxs)("aside", {
              className: "CodexNote",
              children: [(0, Gy.jsx)("h4", {
                children: Uy(`${Oy}:codexHintLabel`)
              }), (0, Gy.jsx)("p", {
                children: bb.codexEntryHint
              })]
            }), (0, Gy.jsx)("p", {
              className: "CodexClearance",
              children: Uy(Ly[bb.codexEntryDifficulty])
            })]
          })]
        })
      })
    }

    function Ay(yb) {
      let {
        controller: bb
      } = yb;
      const Wy = (0, By.m)(Fy, bb.getSnapshot()),
        {
          t: Uy
        } = (0, Ky.D)();
      if (0 === Wy.entries.length) return null;
      const hy = Wy.entries.find((yb => yb.codexEntryId === Wy.selectedId)),
        fy = Wy.entries.filter((yb => "codexContained" === yb.codexEntryState)).length,
        Zy = Wy.entries.map((yb => yb.codexEntryId)).sort().indexOf(hy.codexEntryId) + 1;
      return (0, Gy.jsxs)(vb, {
        open: Wy.open,
        onDismiss: bb.dismiss,
        title: Uy(`${Oy}:codexTitle`),
        className: "ContainmentCodexPanel",
        headerExtra: (0, Gy.jsx)(Iy, {
          contained: fy,
          total: Wy.entries.length
        }),
        children: [(0, Gy.jsx)("div", {
          className: "BoardTiles",
          children: Wy.entries.map((yb => (0, Gy.jsx)(Ny, {
            entry: yb,
            selected: yb === hy,
            onSelect: bb.select
          }, yb.codexEntryId)))
        }), (0, Gy.jsx)(xb, {
          entry: hy,
          fileNumber: Zy
        })]
      })
    }
    var dy = Wy(258);
    class yW extends ab.b {
      constructor(yb, bb, Wy, Uy, hy, fy) {
        super(yb, bb, Wy), this.pacer = Uy, this.command = hy, this.predict = fy, this.board = null, this.confirmed = null, this.selectedId = "", this.notice = null, this.unsubscribePacer = void 0, this.select = yb => {
          this.selectedId = yb, this.emit()
        }, this.act = (yb, bb) => {
          if (!this.open || null === this.board || !this.pacer.send(`${this.command} ${yb} ${bb}`, this.rollBack)) return;
          const Wy = this.predict(this.board, yb, bb);
          null !== Wy && (this.board = Wy.board, this.notice = Wy.notice, this.emit())
        }, this.rollBack = () => {
          this.board !== this.confirmed && (this.board = this.confirmed, this.notice = null)
        }, this.unsubscribePacer = Uy.subscribe((() => {
          this.emit()
        }))
      }
      pU(yb) {
        const bb = this.messageOpens(yb);
        if (bb && this.open) return this.board === this.confirmed && (this.board = yb), this.confirmed = yb, void this.emit();
        if (this.board = yb, this.confirmed = yb, this.pacer.onReply(), bb) return this.notice = null, this.selectedId = this.openingSelection(yb), void this.show();
        const Wy = this.messageNotice(yb);
        null !== Wy && (this.notice = Wy), this.emit()
      }
      dispose() {
        this.unsubscribePacer(), super.dispose()
      }
      onClosed() {
        this.notice = null
      }
    }

    function bW(yb, bb) {
      return yb.loadoutCoins >= bb.loadoutCostCoins && bb.loadoutCostParts.every((bb => function(yb, bb) {
        return Wb(yb, bb).loadoutHeldPartAmount
      }(yb, bb.loadoutPartCurrency) >= bb.loadoutPartAmount))
    }

    function Wb(yb, bb) {
      return yb.loadoutHeldParts.find((yb => yb.loadoutHeldPartCurrency === bb))
    }

    function Ub(yb, bb) {
      return yb.loadoutSlots.find((yb => yb.loadoutSlotKind === bb))
    }

    function hb(yb) {
      return yb.loadoutPerks.filter((yb => yb.loadoutPerkEquipped)).length >= yb.loadoutMaxPerks
    }

    function fb(yb, bb, Wy) {
      for (const hy of yb.loadoutSlots) {
        const Uy = hy.loadoutSlotOptions.find((yb => yb.loadoutOptionId === Wy));
        if (Uy) return "loadoutArmour" === hy.loadoutSlotKind ? cW(yb, hy, Uy, bb) : Zb(yb, hy, Uy, bb)
      }
      const Uy = yb.loadoutPerks.find((yb => yb.loadoutPerkId === Wy));
      return Uy ? function(yb, bb, Wy) {
        const Uy = bb.loadoutPerkOwned,
          hy = bb.loadoutPerkEquipped,
          fy = bb.loadoutPerkName,
          Zy = hb(yb);
        if ("loadoutUnlock" === Wy) {
          if (Uy || !bW(yb, bb.loadoutPerkCost)) return null;
          const Wy = {
            ...bb,
            loadoutPerkOwned: !0,
            loadoutPerkEquipped: !Zy
          };
          return {
            board: ob(Bb(yb, bb.loadoutPerkCost), Wy),
            notice: Kb(Zy ? "loadoutNoticeUnlockedNoRoom" : "loadoutNoticeUnlocked", fy)
          }
        }
        if ("loadoutUpgrade" === Wy || !Uy || "loadoutEquip" === Wy === hy || !hy && Zy) return null;
        return {
          board: ob(yb, {
            ...bb,
            loadoutPerkEquipped: !hy
          }),
          notice: Kb(hy ? "loadoutNoticeUnequipped" : "loadoutNoticeEquipped", fy)
        }
      }(yb, Uy, bb) : null
    }

    function Zb(yb, bb, Wy, Uy) {
      const hy = Wy.loadoutOptionOwnedTier,
        fy = Wy.loadoutOptionName;
      if ("loadoutEquip" === Uy) return 0 === hy ? null : {
        board: Pb(yb, bb, Wy.loadoutOptionId, null),
        notice: Kb("loadoutNoticeEquipped", fy)
      };
      const Zy = "loadoutUnlock" === Uy;
      if (Zy && 0 !== hy || "loadoutUpgrade" === Uy && (0 === hy || hy >= Wy.loadoutOptionTiers.length) || "loadoutUnequip" === Uy) return null;
      const cb = Wy.loadoutOptionTiers[hy].loadoutTierCost;
      if (!bW(yb, cb)) return null;
      const Py = {
          ...Wy,
          loadoutOptionOwnedTier: hy + 1
        },
        oy = Zy ? Wy.loadoutOptionId : bb.loadoutSlotEquippedId;
      return {
        board: Pb(Bb(yb, cb), bb, oy, Py),
        notice: Zy ? Kb("loadoutNoticeUnlocked", fy) : Kb("loadoutNoticeUpgraded", fy, hy + 1)
      }
    }

    function cW(yb, bb, Wy, Uy) {
      const hy = Wy.loadoutOptionOwnedTier > 0,
        fy = Wy.loadoutOptionName;
      if ("loadoutEquip" === Uy && hy) return {
        board: Pb(yb, bb, Wy.loadoutOptionId, null),
        notice: Kb("loadoutNoticeEquipped", fy)
      };
      const Zy = Wy.loadoutOptionTiers[0].loadoutTierCost;
      return "loadoutUnlock" !== Uy || hy || !bW(yb, Zy) ? null : {
        board: Pb(Bb(yb, Zy), bb, Wy.loadoutOptionId, {
          ...Wy,
          loadoutOptionOwnedTier: 1
        }),
        notice: Kb("loadoutNoticeUnlocked", fy)
      }
    }

    function Pb(yb, bb, Wy, Uy) {
      const hy = {
        ...bb,
        loadoutSlotEquippedId: Wy,
        loadoutSlotOptions: bb.loadoutSlotOptions.map((yb => null !== Uy && yb.loadoutOptionId === Uy.loadoutOptionId ? Uy : yb))
      };
      return {
        ...yb,
        loadoutSlots: yb.loadoutSlots.map((yb => yb === bb ? hy : yb))
      }
    }

    function ob(yb, bb) {
      return {
        ...yb,
        loadoutPerks: yb.loadoutPerks.map((yb => yb.loadoutPerkId === bb.loadoutPerkId ? bb : yb))
      }
    }

    function Bb(yb, bb) {
      return {
        ...yb,
        loadoutCoins: yb.loadoutCoins - bb.loadoutCostCoins,
        loadoutHeldParts: yb.loadoutHeldParts.map((yb => {
          const Wy = bb.loadoutCostParts.find((bb => bb.loadoutPartCurrency === yb.loadoutHeldPartCurrency));
          return Wy ? {
            ...yb,
            loadoutHeldPartAmount: yb.loadoutHeldPartAmount - Wy.loadoutPartAmount
          } : yb
        }))
      }
    }

    function Kb(yb, bb) {
      return {
        loadoutNoticeKey: yb,
        loadoutNoticeRefused: !1,
        loadoutNoticeName: bb,
        loadoutNoticeTier: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
      }
    }
    const eb = "containmentLoadoutView";
    class qW extends yW {
      constructor(yb, bb, Wy, Uy) {
        super(yb, bb, Wy, Uy, "loadout", fb), this.slot = "loadoutPrimary", this.snapshot = this.buildSnapshot(), this.selectSlot = yb => {
          this.slot = yb, this.selectedId = sb(this.board, yb), this.emit()
        }
      }
      messageOpens(yb) {
        return yb.loadoutMessageOpens
      }
      messageNotice(yb) {
        return yb.loadoutNotice
      }
      openingSelection(yb) {
        return sb(yb, this.slot)
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

    function sb(yb, bb) {
      if ("loadoutPerks" === bb) {
        var Wy;
        const bb = yb.loadoutPerks;
        return (null !== (Wy = bb.find((yb => yb.loadoutPerkEquipped))) && void 0 !== Wy ? Wy : bb[0]).loadoutPerkId
      }
      return Ub(yb, bb).loadoutSlotEquippedId
    }
    const Sb = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAY0lEQVR4nGNgIAP8x4FRwP/sFt3/EYU6YBqGIwp1MBSDBUH4/3nW//83csD5DOgKfeKNsWIMhV+///qvbOT7/87cMjCG8TEUgiSLqlpRMEgMQ+HJvgy4aTAMEsPqc2KChyAAAFxNbnylK5O6AAAAAElFTkSuQmCC";
    var Eb = Wy(35619),
      lb = Wy(1136);
    const mW = {
        loadoutPrimary: `${Oy}:loadoutSlotPrimary`,
        loadoutSecondary: `${Oy}:loadoutSlotSecondary`,
        loadoutOffensive: `${Oy}:loadoutSlotOffensive`,
        loadoutSelfHelp: `${Oy}:loadoutSlotSelfHelp`,
        loadoutArmour: `${Oy}:loadoutSlotArmour`,
        loadoutPerks: `${Oy}:loadoutSlotPerks`
      },
      Cb = {
        section: "right",
        cU: "bottom",
        act: "top"
      },
      Tb = (0, Uy.createContext)({
        step: null,
        targetRef: () => {}
      });

    function Vb() {
      const {
        step: yb,
        targetRef: bb
      } = (0, Uy.useContext)(Tb);
      return (Wy, Uy) => (null === yb || void 0 === yb ? void 0 : yb.kind) === Wy && yb.id === Uy ? bb : void 0
    }

    function Jb(yb, bb) {
      const Wy = bb.loadoutTargetId;
      if ("loadoutPerks" === bb.loadoutTargetSection) {
        const bb = yb.loadoutPerks.find((yb => yb.loadoutPerkId === Wy));
        return {
          name: bb.loadoutPerkName,
          owned: bb.loadoutPerkOwned,
          equipped: bb.loadoutPerkEquipped
        }
      }
      const Uy = Ub(yb, bb.loadoutTargetSection),
        hy = Uy.loadoutSlotOptions.find((yb => yb.loadoutOptionId === Wy));
      return {
        name: hy.loadoutOptionName,
        owned: hy.loadoutOptionOwnedTier > 0,
        equipped: Uy.loadoutSlotEquippedId === Wy
      }
    }

    function gW(yb, bb, Wy, Uy) {
      const [hy, fy] = yb(`${Oy}:${bb}`, {
        [Wy]: "\x01"
      }).split("\x01");
      return (0, Gy.jsxs)(Gy.Fragment, {
        children: [hy, (0, Gy.jsx)("span", {
          className: "LoadoutWalkthroughName",
          children: Uy
        }), fy]
      })
    }

    function Gb(yb) {
      let {
        view: bb,
        onDismiss: Wy,
        children: hy
      } = yb;
      const {
        t: fy
      } = (0, Ky.D)(), Zy = bb.loadout, cb = bb.open ? Zy.loadoutWalkthrough.map((yb => ({
        target: yb,
        info: Jb(Zy, yb)
      }))).find((yb => {
        let {
          info: bb
        } = yb;
        return !bb.equipped
      })) : void 0;
      let Py = null,
        oy = null;
      if (void 0 !== cb) {
        const {
          target: yb,
          info: Wy
        } = cb;
        bb.slot !== yb.loadoutTargetSection ? (Py = {
          kind: "section",
          id: yb.loadoutTargetSection
        }, oy = gW(fy, "loadoutWalkthroughSection", "section", fy(mW[yb.loadoutTargetSection]))) : bb.selectedId !== yb.loadoutTargetId ? (Py = {
          kind: "cU",
          id: yb.loadoutTargetId
        }, oy = gW(fy, "loadoutWalkthroughPick", "name", Wy.name)) : (Py = {
          kind: "act",
          id: yb.loadoutTargetId
        }, oy = gW(fy, Wy.owned ? "loadoutWalkthroughEquip" : "loadoutWalkthroughUnlock", "name", Wy.name))
      }
      const By = null === Py ? null : function(yb) {
          return `${yb.kind}:${yb.id}`
        }(Py),
        [ey, qb] = (0, Uy.useState)(null),
        sy = (0, Uy.useCallback)((yb => {
          qb((bb => null !== yb ? {
            key: By,
            node: yb
          } : (null === bb || void 0 === bb ? void 0 : bb.key) === By ? null : bb))
        }), [By]),
        Sy = null !== By && (null === ey || void 0 === ey ? void 0 : ey.key) === By ? ey.node : null;
      return (0, Gy.jsxs)(Tb.Provider, {
        value: {
          step: Py,
          targetRef: sy
        },
        children: [hy, null !== Py && null !== Sy && (0, Gy.jsx)(Ob, {
          target: Sy,
          placement: Cb[Py.kind],
          onDismiss: Wy,
          children: oy
        }, By)]
      })
    }

    function Ob(yb) {
      let {
        target: bb,
        placement: Wy,
        onDismiss: hy,
        children: fy
      } = yb;
      const {
        t: Zy
      } = (0, Ky.D)(), cb = (0, Uy.useRef)(bb);
      return cb.current = bb, (0, lb.x)("popup", cb, hy), (0, Gy.jsxs)(Eb.f, {
        target: bb,
        placement: Wy,
        className: "LoadoutWalkthroughStep",
        spotlightMargin: 10,
        children: [(0, Gy.jsxs)("div", {
          className: "LoadoutWalkthroughHeader",
          children: [(0, Gy.jsx)("img", {
            className: "LoadoutWalkthroughPortrait",
            src: Sb,
            alt: "",
            draggable: !1
          }), (0, Gy.jsx)("span", {
            className: "LoadoutWalkthroughSpeaker",
            children: Zy(`${Oy}:operatorName`)
          }), (0, Gy.jsx)(sy.h, {
            onClick: hy,
            ariaLabel: Zy(`${Oy}:loadoutWalkthroughClose`),
            padIgnore: !0
          })]
        }), (0, Gy.jsx)("p", {
          className: "LoadoutWalkthroughText",
          children: fy
        })]
      })
    }
    const Rb = new Set(["loadoutStatReload", "loadoutStatResupply"]);

    function vW(yb) {
      let {
        cost: bb,
        loadout: Wy
      } = yb;
      const {
        t: Uy
      } = (0, Ky.D)();
      return bb.loadoutCostCoins <= 0 && 0 === bb.loadoutCostParts.length ? (0, Gy.jsx)("span", {
        className: "LoadoutCost",
        children: Uy(`${Oy}:loadoutFree`)
      }) : (0, Gy.jsxs)("span", {
        className: "LoadoutCost",
        children: [bb.loadoutCostCoins > 0 && (0, Gy.jsx)(Yy, {
          itemName: Ry,
          amount: bb.loadoutCostCoins,
          kW: Wy.loadoutCoins
        }), bb.loadoutCostParts.map((yb => {
          const bb = Wb(Wy, yb.loadoutPartCurrency);
          return (0, Gy.jsx)(Yy, {
            itemName: bb.loadoutHeldPartItem,
            amount: yb.loadoutPartAmount,
            kW: bb.loadoutHeldPartAmount
          }, yb.loadoutPartCurrency)
        }))]
      })
    }
    const iW = {
      loadoutStatFireRate: `${Oy}:loadoutUnitPerMinute`,
      loadoutStatReload: `${Oy}:loadoutUnitSeconds`,
      loadoutStatResupply: `${Oy}:loadoutUnitSeconds`
    };

    function Mb(yb) {
      return "loadoutStatPotency" === yb.loadoutStatKind ? (0, dy.S)(yb.loadoutStatValue) : String(yb.loadoutStatValue)
    }

    function Yb(yb) {
      var bb;
      let {
        option: Wy
      } = yb;
      const {
        t: Uy
      } = (0, Ky.D)(), hy = Wy.loadoutOptionTiers, fy = null === (bb = hy[0]) || void 0 === bb ? void 0 : bb.loadoutTierStats.map((yb => yb.loadoutStatKind));
      if (!fy || 0 === fy.length) return null;
      const Zy = Wy.loadoutOptionOwnedTier,
        cb = (yb, bb) => {
          var Wy;
          return null === (Wy = hy[yb]) || void 0 === Wy ? void 0 : Wy.loadoutTierStats.find((yb => yb.loadoutStatKind === bb))
        };
      return (0, Gy.jsxs)("table", {
        className: "LoadoutTierTable",
        children: [(0, Gy.jsx)("thead", {
          children: (0, Gy.jsxs)("tr", {
            children: [(0, Gy.jsx)("th", {}), hy.map(((yb, bb) => (0, Gy.jsx)("th", {
              className: oy()({
                Current: bb + 1 === Zy,
                Next: bb === Zy
              }),
              children: Uy(`${Oy}:loadoutTier`, {
                tier: (0, dy.S)(bb + 1)
              })
            }, bb)))]
          })
        }), (0, Gy.jsx)("tbody", {
          children: fy.map((yb => {
            const bb = iW[yb];
            return (0, Gy.jsxs)("tr", {
              children: [(0, Gy.jsxs)("th", {
                scope: "row",
                children: [Uy(`${Oy}:${yb}`), bb && (0, Gy.jsx)("span", {
                  className: "LoadoutStatUnit",
                  children: Uy(bb)
                })]
              }), hy.map(((bb, Wy) => {
                const Uy = cb(Wy, yb),
                  hy = Wy > 0 ? cb(Wy - 1, yb) : void 0,
                  fy = Uy && hy ? Uy.loadoutStatValue - hy.loadoutStatValue : 0,
                  Py = Rb.has(yb) ? fy < 0 : fy > 0,
                  By = Wy === Zy;
                return (0, Gy.jsxs)("td", {
                  className: oy()({
                    Current: Wy + 1 === Zy,
                    Next: By,
                    Gain: Py,
                    Owned: Wy < Zy
                  }),
                  children: [By && Py && (0, Gy.jsx)("span", {
                    className: "LoadoutGainArrow",
                    "aria-hidden": "true",
                    children: fy < 0 ? "\u25bc" : "\u25b2"
                  }), Uy ? Mb(Uy) : "-"]
                }, Wy)
              }))]
            }, yb)
          }))
        })]
      })
    }

    function Xb(yb) {
      let {
        view: bb,
        controller: Wy,
        slot: Uy,
        option: hy
      } = yb;
      const {
        t: fy
      } = (0, Ky.D)(), Zy = bb.loadout, cb = hy.loadoutOptionOwnedTier, Py = hy.loadoutOptionTiers.length, oy = Uy.loadoutSlotEquippedId === hy.loadoutOptionId, By = cb < Py ? hy.loadoutOptionTiers[cb].loadoutTierCost : null, ey = null !== By && bW(Zy, By), qb = hy.loadoutOptionId, Sy = Vb();
      return (0, Gy.jsxs)(Gy.Fragment, {
        children: [(0, Gy.jsx)(ub, {
          icon: hy.loadoutOptionIcon,
          name: hy.loadoutOptionName,
          status: 0 === cb ? fy(`${Oy}:loadoutLocked`) : Py > 1 ? fy(`${Oy}:loadoutTier`, {
            tier: (0, dy.S)(cb)
          }) : null,
          locked: 0 === cb,
          equipped: oy
        }), (0, Gy.jsx)("p", {
          className: "BoardDescription",
          children: hy.loadoutOptionDescription
        }), (0, Gy.jsx)(Yb, {
          option: hy
        }), (0, Gy.jsxs)("div", {
          ref: Sy("act", qb),
          className: "BoardActions",
          children: [null !== By && (0, Gy.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, Gy.jsx)(vW, {
              cost: By,
              loadout: Zy
            }), (0, Gy.jsx)(sy.i, {
              disabled: !ey || bb.pending,
              onClick: () => {
                Wy.act(0 === cb ? "loadoutUnlock" : "loadoutUpgrade", qb)
              },
              children: 0 === cb ? fy(`${Oy}:loadoutUnlock`) : fy(`${Oy}:loadoutUpgrade`, {
                tier: (0, dy.S)(cb + 1)
              })
            })]
          }), null === By && Py > 1 && (0, Gy.jsx)("span", {
            className: "BoardHint",
            children: fy(`${Oy}:loadoutMaxed`)
          }), cb > 0 && !oy && (0, Gy.jsx)(sy.f, {
            disabled: bb.pending,
            onClick: () => {
              Wy.act("loadoutEquip", qb)
            },
            children: fy(`${Oy}:loadoutEquip`)
          })]
        })]
      })
    }

    function nb(yb) {
      let {
        view: bb,
        controller: Wy,
        perk: Uy
      } = yb;
      const {
        t: hy
      } = (0, Ky.D)(), fy = bb.loadout, Zy = hb(fy), cb = Uy.loadoutPerkId, Py = Vb();
      return (0, Gy.jsxs)(Gy.Fragment, {
        children: [(0, Gy.jsx)(ub, {
          icon: Uy.loadoutPerkIcon,
          name: Uy.loadoutPerkName,
          status: Uy.loadoutPerkOwned ? null : hy(`${Oy}:loadoutLocked`),
          locked: !Uy.loadoutPerkOwned,
          equipped: Uy.loadoutPerkEquipped
        }), (0, Gy.jsx)("p", {
          className: "BoardDescription",
          children: Uy.loadoutPerkDescription
        }), (0, Gy.jsxs)("div", {
          ref: Py("act", cb),
          className: "BoardActions",
          children: [!Uy.loadoutPerkOwned && (0, Gy.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, Gy.jsx)(vW, {
              cost: Uy.loadoutPerkCost,
              loadout: fy
            }), (0, Gy.jsx)(sy.i, {
              disabled: !bW(fy, Uy.loadoutPerkCost) || bb.pending,
              onClick: () => {
                Wy.act("loadoutUnlock", cb)
              },
              children: hy(`${Oy}:loadoutUnlock`)
            })]
          }), Uy.loadoutPerkOwned && !Uy.loadoutPerkEquipped && (0, Gy.jsx)(sy.f, {
            disabled: Zy || bb.pending,
            onClick: () => {
              Wy.act("loadoutEquip", cb)
            },
            children: hy(`${Oy}:loadoutEquip`)
          }), Uy.loadoutPerkOwned && !Uy.loadoutPerkEquipped && Zy && (0, Gy.jsx)("span", {
            className: "BoardHint",
            children: hy(`${Oy}:loadoutSocketsFullHint`)
          }), Uy.loadoutPerkEquipped && (0, Gy.jsx)(sy.M, {
            disabled: bb.pending,
            onClick: () => {
              Wy.act("loadoutUnequip", cb)
            },
            children: hy(`${Oy}:loadoutUnequip`)
          })]
        })]
      })
    }

    function ub(yb) {
      let {
        icon: bb,
        name: Wy,
        status: Uy,
        locked: hy,
        equipped: fy
      } = yb;
      const {
        t: Zy
      } = (0, Ky.D)();
      return (0, Gy.jsxs)(rb, {
        icon: (0, Gy.jsx)(ib, {
          itemName: bb
        }),
        name: Wy,
        children: [null !== Uy && (0, Gy.jsx)("span", {
          className: oy()("LoadoutStatusText", {
            Locked: hy
          }),
          children: Uy
        }), fy && (0, Gy.jsx)("span", {
          className: "BoardBadge",
          children: Zy(`${Oy}:loadoutEquippedBadge`)
        })]
      })
    }

    function rW(yb) {
      let {
        view: bb,
        controller: Wy
      } = yb;
      const Uy = bb.loadout;
      if ("loadoutPerks" === bb.slot) {
        const yb = Uy.loadoutPerks.find((yb => yb.loadoutPerkId === bb.selectedId));
        return (0, Gy.jsx)("section", {
          className: "BoardDetail",
          children: yb && (0, Gy.jsx)(nb, {
            view: bb,
            controller: Wy,
            perk: yb
          })
        })
      }
      const hy = Ub(Uy, bb.slot),
        fy = hy.loadoutSlotOptions.find((yb => yb.loadoutOptionId === bb.selectedId));
      return (0, Gy.jsx)("section", {
        className: "BoardDetail",
        children: fy && (0, Gy.jsx)(Xb, {
          view: bb,
          controller: Wy,
          slot: hy,
          option: fy
        })
      })
    }

    function Hb(yb) {
      let {
        owned: bb,
        total: Wy
      } = yb;
      return Wy <= 1 ? null : (0, Gy.jsx)("span", {
        className: "LoadoutPips",
        children: Array.from({
          length: Wy
        }, ((yb, Wy) => (0, Gy.jsx)("span", {
          className: oy()("LoadoutPip", {
            Filled: Wy < bb
          })
        }, Wy)))
      })
    }

    function aW(yb) {
      let {
        view: bb,
        controller: Wy
      } = yb;
      const {
        t: Uy
      } = (0, Ky.D)(), hy = bb.loadout, fy = Vb();
      return (0, Gy.jsxs)("nav", {
        className: "LoadoutKit",
        "aria-label": Uy(`${Oy}:loadoutKit`),
        children: [hy.loadoutSlots.map((yb => {
          const hy = yb.loadoutSlotOptions.find((bb => bb.loadoutOptionId === yb.loadoutSlotEquippedId));
          return (0, Gy.jsxs)("button", {
            ref: fy("section", yb.loadoutSlotKind),
            type: "button",
            className: oy()("LoadoutKitSlot", {
              Selected: bb.slot === yb.loadoutSlotKind
            }),
            onClick: () => {
              Wy.selectSlot(yb.loadoutSlotKind)
            },
            children: [(0, Gy.jsx)("span", {
              className: "LoadoutKitIcon",
              children: hy && (0, Gy.jsx)(ib, {
                itemName: hy.loadoutOptionIcon
              })
            }), (0, Gy.jsxs)("span", {
              className: "LoadoutKitText",
              children: [(0, Gy.jsxs)("span", {
                className: "LoadoutKitTop",
                children: [(0, Gy.jsx)("span", {
                  className: "LoadoutKitLabel",
                  children: Uy(mW[yb.loadoutSlotKind])
                }), hy && (0, Gy.jsx)(Hb, {
                  owned: hy.loadoutOptionOwnedTier,
                  total: hy.loadoutOptionTiers.length
                })]
              }), (0, Gy.jsx)("span", {
                className: "LoadoutKitName",
                children: null === hy || void 0 === hy ? void 0 : hy.loadoutOptionName
              })]
            })]
          }, yb.loadoutSlotKind)
        })), (0, Gy.jsx)(Fb, {
          view: bb,
          controller: Wy
        })]
      })
    }

    function Fb(yb) {
      let {
        view: bb,
        controller: Wy
      } = yb;
      const {
        t: Uy
      } = (0, Ky.D)(), hy = bb.loadout, fy = hy.loadoutPerks.filter((yb => yb.loadoutPerkEquipped)), Zy = Vb();
      return (0, Gy.jsxs)("button", {
        ref: Zy("section", "loadoutPerks"),
        type: "button",
        className: oy()("LoadoutKitSlot", "LoadoutPerks", {
          Selected: "loadoutPerks" === bb.slot
        }),
        onClick: () => {
          Wy.selectSlot("loadoutPerks")
        },
        children: [(0, Gy.jsxs)("span", {
          className: "LoadoutKitTop",
          children: [(0, Gy.jsx)("span", {
            className: "LoadoutKitLabel",
            children: Uy(mW.loadoutPerks)
          }), (0, Gy.jsx)("span", {
            className: "LoadoutPerkCount",
            children: Uy(`${Oy}:loadoutPerkCount`, {
              equipped: String(fy.length),
              max: String(hy.loadoutMaxPerks)
            })
          })]
        }), (0, Gy.jsx)("span", {
          className: "LoadoutSockets",
          children: Array.from({
            length: hy.loadoutMaxPerks
          }, ((yb, bb) => {
            const Wy = fy[bb];
            return (0, Gy.jsxs)("span", {
              className: oy()("LoadoutSocket", {
                Filled: Wy,
                Empty: !Wy
              }),
              children: [(0, Gy.jsx)("span", {
                className: "LoadoutSocketWell",
                children: Wy && (0, Gy.jsx)(ib, {
                  itemName: Wy.loadoutPerkIcon
                })
              }), (0, Gy.jsx)("span", {
                className: "LoadoutSocketName",
                children: Wy ? Wy.loadoutPerkName : Uy(`${Oy}:loadoutPerkSocketEmpty`)
              })]
            }, bb)
          }))
        })]
      })
    }

    function pb(yb) {
      let {
        icon: bb,
        name: Wy,
        selected: Uy,
        equipped: hy,
        locked: fy,
        ownedTier: Zy,
        tiers: cb,
        buttonRef: Py,
        onSelect: oy
      } = yb;
      const {
        t: By
      } = (0, Ky.D)();
      return (0, Gy.jsxs)(uy, {
        icon: (0, Gy.jsx)(ib, {
          itemName: bb
        }),
        name: Wy,
        selected: Uy,
        locked: fy,
        buttonRef: Py,
        onSelect: oy,
        children: [hy && (0, Gy.jsx)("span", {
          className: "BoardBadge",
          children: By(`${Oy}:loadoutEquippedBadge`)
        }), fy && (0, Gy.jsx)("span", {
          className: "BoardBadge Muted",
          children: By(`${Oy}:loadoutLocked`)
        }), !fy && (0, Gy.jsx)(Hb, {
          owned: Zy,
          total: cb
        })]
      })
    }

    function Lb(yb) {
      let {
        view: bb,
        controller: Wy
      } = yb;
      const Uy = bb.loadout,
        hy = Vb();
      if ("loadoutPerks" === bb.slot) return (0, Gy.jsx)("div", {
        className: "BoardTiles",
        children: Uy.loadoutPerks.map((yb => (0, Gy.jsx)(pb, {
          icon: yb.loadoutPerkIcon,
          name: yb.loadoutPerkName,
          selected: bb.selectedId === yb.loadoutPerkId,
          equipped: yb.loadoutPerkEquipped,
          locked: !yb.loadoutPerkOwned,
          ownedTier: 0,
          tiers: 0,
          buttonRef: hy("cU", yb.loadoutPerkId),
          onSelect: () => {
            Wy.select(yb.loadoutPerkId)
          }
        }, yb.loadoutPerkId)))
      });
      const fy = Ub(Uy, bb.slot);
      return (0, Gy.jsx)("div", {
        className: "BoardTiles",
        children: fy.loadoutSlotOptions.map((yb => (0, Gy.jsx)(pb, {
          icon: yb.loadoutOptionIcon,
          name: yb.loadoutOptionName,
          selected: bb.selectedId === yb.loadoutOptionId,
          equipped: fy.loadoutSlotEquippedId === yb.loadoutOptionId,
          locked: 0 === yb.loadoutOptionOwnedTier,
          ownedTier: yb.loadoutOptionOwnedTier,
          tiers: yb.loadoutOptionTiers.length,
          buttonRef: hy("cU", yb.loadoutOptionId),
          onSelect: () => {
            Wy.select(yb.loadoutOptionId)
          }
        }, yb.loadoutOptionId)))
      })
    }

    function Qb(yb) {
      let {
        loadout: bb
      } = yb;
      return (0, Gy.jsx)(Hy, {
        coins: bb.loadoutCoins,
        children: bb.loadoutHeldParts.filter((yb => yb.loadoutHeldPartAmount > 0)).map((yb => (0, Gy.jsx)(Yy, {
          itemName: yb.loadoutHeldPartItem,
          amount: yb.loadoutHeldPartAmount
        }, yb.loadoutHeldPartCurrency)))
      })
    }

    function jW(yb) {
      let {
        controller: bb
      } = yb;
      const Wy = (0, By.m)(eb, bb.getSnapshot()),
        {
          t: Uy
        } = (0, Ky.D)();
      if (null === Wy.loadout) return null;
      const hy = Wy.notice;
      return (0, Gy.jsx)(Gb, {
        view: Wy,
        onDismiss: bb.dismiss,
        children: (0, Gy.jsxs)(vb, {
          open: Wy.open,
          onDismiss: bb.dismiss,
          title: Uy(`${Oy}:loadoutTitle`),
          className: "ContainmentLoadoutPanel",
          headerExtra: (0, Gy.jsx)(Qb, {
            loadout: Wy.loadout
          }),
          statusRefused: null === hy || void 0 === hy ? void 0 : hy.loadoutNoticeRefused,
          status: (0, Gy.jsxs)(Gy.Fragment, {
            children: [(0, Gy.jsx)("span", {
              className: "LoadoutRadioBadge",
              children: Uy(`${Oy}:loadoutRadioBadge`)
            }), null !== hy && Uy(`${Oy}:${hy.loadoutNoticeKey}`, {
              name: hy.loadoutNoticeName,
              tier: (0, dy.S)(hy.loadoutNoticeTier),
              max: String(Wy.loadout.loadoutMaxPerks)
            })]
          }),
          children: [(0, Gy.jsx)(aW, {
            view: Wy,
            controller: bb
          }), (0, Gy.jsx)(Lb, {
            view: Wy,
            controller: bb
          }), (0, Gy.jsx)(rW, {
            view: Wy,
            controller: bb
          })]
        })
      })
    }

    function Db(yb, bb, Wy) {
      const Uy = yb.locatorEntries.find((yb => yb.locatorEntryId === Wy));
      if (!Uy) return null;
      const hy = Uy.locatorEntryName;
      if ("locatorDisarm" === bb) return Uy.locatorEntryArmed ? {
        board: tW(yb, null),
        notice: wb("locatorNoticeDisarmed", hy)
      } : null;
      if ("locatorArm" === bb) return Uy.locatorEntryOwned && !Uy.locatorEntryArmed ? {
        board: tW(yb, Wy),
        notice: wb("locatorNoticeArmed", hy)
      } : null;
      if (Uy.locatorEntryOwned || yb.locatorCoins < Uy.locatorEntryPrice) return null;
      const fy = tW({
        ...yb,
        locatorCoins: yb.locatorCoins - Uy.locatorEntryPrice
      }, Wy);
      return {
        board: {
          ...fy,
          locatorEntries: fy.locatorEntries.map((yb => yb.locatorEntryId === Wy ? {
            ...yb,
            locatorEntryOwned: !0
          } : yb))
        },
        notice: wb("locatorNoticeBought", hy)
      }
    }

    function tW(yb, bb) {
      return {
        ...yb,
        locatorEntries: yb.locatorEntries.map((yb => {
          const Wy = yb.locatorEntryId === bb;
          return yb.locatorEntryArmed === Wy ? yb : {
            ...yb,
            locatorEntryArmed: Wy
          }
        }))
      }
    }

    function wb(yb, bb) {
      return {
        locatorNoticeKey: yb,
        locatorNoticeRefused: !1,
        locatorNoticeName: bb
      }
    }
    const kW = "containmentLocatorView";
    class Nb extends yW {
      constructor(yb, bb, Wy, Uy) {
        super(yb, bb, Wy, Uy, "locator", Db), this.snapshot = this.buildSnapshot()
      }
      messageOpens(yb) {
        return yb.locatorMessageOpens
      }
      messageNotice(yb) {
        return yb.locatorNotice
      }
      openingSelection(yb) {
        var bb;
        const Wy = yb.locatorEntries;
        return (null !== (bb = Wy.find((yb => yb.locatorEntryArmed))) && void 0 !== bb ? bb : Wy[0]).locatorEntryId
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
    const zW = {
        locatorContained: `${Oy}:locatorFlavourContained`,
        locatorEncountered: `${Oy}:locatorFlavourEncountered`,
        locatorUnseen: `${Oy}:locatorFlavourUnseen`
      },
      Ib = {
        codexAnyDifficulty: null,
        codexNormalOnly: `${Oy}:locatorAttunedNormal`,
        codexHardOnly: `${Oy}:locatorAttunedHard`
      };

    function xW() {
      return (0, Gy.jsx)(Gy.Fragment, {
        children: Array.from({
          length: 5
        }, ((yb, bb) => (0, Gy.jsx)("span", {
          className: "LocatorFly",
          children: (0, Gy.jsx)("img", {
            src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAICAYAAADwdn+XAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYElEQVR4nGNgoBboMlb5LyUjD8YgNtHyJ6/d+Q/CILa1lz9YAbo4DCDLYxjQv3gt3AYQG90AdHkUQ/qhkjAb0BURkgcDmAQMo7sSXR7deyiGoIvDvIOsGasB+ACyBmTNACS0go3ibhumAAAAAElFTkSuQmCC",
            alt: "",
            draggable: !1
          })
        }, bb)))
      })
    }

    function Ab(yb) {
      let {
        entry: bb
      } = yb;
      const {
        t: Wy
      } = (0, Ky.D)();
      return bb.locatorEntryArmed ? (0, Gy.jsx)("span", {
        className: "BoardBadge Armed",
        children: Wy(`${Oy}:locatorArmedBadge`)
      }) : bb.locatorEntryOwned ? (0, Gy.jsx)("span", {
        className: "BoardBadge",
        children: Wy(`${Oy}:locatorOwnedBadge`)
      }) : null
    }

    function db(yb) {
      let {
        entry: bb,
        coins: Wy,
        inTile: Uy = !1
      } = yb;
      return (0, Gy.jsx)(Yy, {
        itemName: Ry,
        amount: bb.locatorEntryPrice,
        kW: Wy,
        inTile: Uy
      })
    }

    function yU(yb) {
      let {
        view: bb,
        controller: Wy,
        entry: Uy
      } = yb;
      const {
        t: hy
      } = (0, Ky.D)(), fy = Uy.locatorEntryId, Zy = bb.locators.locatorEntries.find((yb => yb.locatorEntryArmed && yb !== Uy));
      return (0, Gy.jsxs)("div", {
        className: "BoardActions",
        children: [Uy.locatorEntryArmed && (0, Gy.jsx)(sy.M, {
          disabled: bb.pending,
          onClick: () => {
            Wy.act("locatorDisarm", fy)
          },
          children: hy(`${Oy}:locatorDisarm`)
        }), Uy.locatorEntryOwned && !Uy.locatorEntryArmed && (0, Gy.jsx)(sy.f, {
          disabled: bb.pending,
          onClick: () => {
            Wy.act("locatorArm", fy)
          },
          children: hy(`${Oy}:locatorArm`)
        }), !Uy.locatorEntryOwned && (0, Gy.jsxs)("div", {
          className: "LocatorBuy",
          children: [(0, Gy.jsx)(db, {
            entry: Uy,
            coins: bb.locators.locatorCoins
          }), (0, Gy.jsx)(sy.i, {
            disabled: bb.locators.locatorCoins < Uy.locatorEntryPrice || bb.pending,
            onClick: () => {
              Wy.act("locatorBuy", fy)
            },
            children: hy(`${Oy}:locatorBuy`)
          })]
        }), Zy && !Uy.locatorEntryArmed && (0, Gy.jsx)("span", {
          className: "BoardHint",
          children: hy(`${Oy}:locatorReplacesHint`, {
            name: Zy.locatorEntryName
          })
        })]
      })
    }

    function bU(yb) {
      let {
        entry: bb
      } = yb;
      return "locatorUnseen" === bb.locatorEntryStanding ? (0, Gy.jsx)(ib, {
        itemName: "Compass"
      }) : (0, Gy.jsx)(My, {
        anomalyId: bb.locatorEntryId,
        caught: "locatorContained" === bb.locatorEntryStanding
      })
    }

    function WW(yb) {
      let {
        view: bb,
        controller: Wy,
        entry: Uy
      } = yb;
      const {
        t: hy
      } = (0, Ky.D)(), fy = Ib[Uy.locatorEntryDifficulty];
      return (0, Gy.jsxs)("section", {
        className: "BoardDetail",
        children: [(0, Gy.jsxs)("div", {
          className: oy()("LocatorLabel", {
            Armed: Uy.locatorEntryArmed
          }),
          children: [(0, Gy.jsx)(rb, {
            icon: (0, Gy.jsx)(bU, {
              entry: Uy
            }),
            name: hy(`${Oy}:locatorName`, {
              name: Uy.locatorEntryName
            }),
            children: (0, Gy.jsx)(Ab, {
              entry: Uy
            })
          }), (0, Gy.jsx)("p", {
            className: "BoardDescription",
            children: hy(Uy.locatorEntryArmed ? `${Oy}:locatorFlavourArmed` : zW[Uy.locatorEntryStanding])
          }), null !== fy && (0, Gy.jsx)("p", {
            className: "LocatorAttuned",
            children: hy(fy)
          }), (0, Gy.jsx)("p", {
            className: "BoardDescription LocatorUsage",
            children: hy(`${Oy}:locatorUsage`)
          })]
        }), (0, Gy.jsx)(yU, {
          view: bb,
          controller: Wy,
          entry: Uy
        })]
      })
    }

    function UW(yb) {
      let {
        controller: bb
      } = yb;
      const Wy = (0, By.m)(kW, bb.getSnapshot()),
        {
          t: Uy
        } = (0, Ky.D)(),
        hy = Wy.locators;
      if (null === hy) return null;
      const fy = hy.locatorEntries.find((yb => yb.locatorEntryId === Wy.selectedId)),
        Zy = Wy.notice;
      return (0, Gy.jsxs)(vb, {
        open: Wy.open,
        onDismiss: bb.dismiss,
        title: Uy(`${Oy}:locatorTitle`),
        className: "ContainmentLocatorPanel",
        decor: (0, Gy.jsx)(xW, {}),
        headerExtra: (0, Gy.jsx)(Hy, {
          coins: hy.locatorCoins
        }),
        statusRefused: null === Zy || void 0 === Zy ? void 0 : Zy.locatorNoticeRefused,
        status: (0, Gy.jsxs)(Gy.Fragment, {
          children: [(0, Gy.jsx)("span", {
            className: "LocatorKeeperBadge",
            children: Uy(`${Oy}:locatorKeeperName`)
          }), null !== Zy && Uy(`${Oy}:${Zy.locatorNoticeKey}`, {
            name: Zy.locatorNoticeName
          })]
        }),
        children: [(0, Gy.jsx)("div", {
          className: "BoardTiles",
          children: hy.locatorEntries.map((yb => (0, Gy.jsxs)(uy, {
            icon: (0, Gy.jsx)(bU, {
              entry: yb
            }),
            name: yb.locatorEntryName,
            selected: yb === fy,
            locked: !1,
            className: oy()("LocatorTag", {
              Armed: yb.locatorEntryArmed
            }),
            onSelect: () => {
              bb.select(yb.locatorEntryId)
            },
            children: [(0, Gy.jsx)(Ab, {
              entry: yb
            }), !yb.locatorEntryOwned && (0, Gy.jsx)(db, {
              entry: yb,
              coins: hy.locatorCoins,
              inTile: !0
            })]
          }, yb.locatorEntryId)))
        }), (0, Gy.jsx)(WW, {
          view: Wy,
          controller: bb,
          entry: fy
        })]
      })
    }

    function hW(yb) {
      let {
        loadout: bb,
        codex: Wy,
        locator: Uy
      } = yb;
      return (0, Gy.jsxs)(Gy.Fragment, {
        children: [(0, Gy.jsx)(jW, {
          controller: bb
        }), (0, Gy.jsx)(Ay, {
          controller: Wy
        }), (0, Gy.jsx)(UW, {
          controller: Uy
        })]
      })
    }
    var fW = Wy(37227);
    class ZW {
      constructor(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.sendCommand = yb, this.budget = void 0, this.awaitingReply = !1, this.replyTimer = null, this.listeners = new Set, this.budget = new fW.d({
          spacingMs: 0,
          now: bb
        }), this.budget.subscribe((() => {
          this.notify()
        }))
      }
      isPending() {
        return this.awaitingReply || this.budget.isPacing()
      }
      send(yb, bb) {
        return !this.isPending() && (this.awaitingReply = !0, this.replyTimer = setTimeout((() => {
          this.replyTimer = null, this.awaitingReply = !1, bb(), this.notify()
        }), 8e3), this.budget.start(), this.sendCommand(yb), !0)
      }
      onReply() {
        this.awaitingReply = !1, this.clearReplyTimer()
      }
      subscribe(yb) {
        return this.listeners.add(yb), () => {
          this.listeners.delete(yb)
        }
      }
      dispose() {
        this.clearReplyTimer(), this.budget.dispose(), this.listeners.clear()
      }
      clearReplyTimer() {
        null !== this.replyTimer && (clearTimeout(this.replyTimer), this.replyTimer = null)
      }
      notify() {
        for (const yb of this.listeners) yb()
      }
    }
    var cU = Wy(37217);
    const PW = new Map([
      ["npc_general", Sb],
      ["npc_tentacle_guy", cU]
    ]);

    function oW(yb) {
      const bb = PW.get(yb);
      if (void 0 === bb) return null;
      const Wy = document.createElement("img");
      return Wy.src = bb, Wy.alt = "", Wy.draggable = !1, Wy.style.imageRendering = "pixelated", Wy
    }
    const BW = function() {
      let yb, bb = !1,
        Wy = null,
        Py = null;
      const oy = [],
        By = yb => {
          for (const bb of oy) bb !== yb && bb.close();
          (0, cb.t)()
        },
        Ky = yb => {
          yb && (0, cb.k)()
        },
        ey = new ZW((bb => {
          yb.sendCommand(bb)
        })),
        qb = new qW((yb => {
          Zy.g.EZ(eb, yb, !0)
        }), By, Ky, ey),
        sy = new py((yb => {
          Zy.g.EZ(Fy, yb, !0)
        }), By, Ky),
        Sy = new Nb((yb => {
          Zy.g.EZ(kW, yb, !0)
        }), By, Ky, ey);
      oy.push(qb, sy, Sy);
      return {
        onCreate: bb => {
          yb = bb, Wy = (0, cb.z)(null, {
            content: (0, Uy.createElement)(hW, {
              loadout: qb,
              codex: sy,
              locator: Sy
            }),
            onClose: () => {
              for (const yb of oy) yb.close()
            }
          }), Py = (0, fy.f)(oW)
        },
        onReceivedMessageFromServer: (yb, bb) => {
          "containmentLoadout" === yb ? qb.pU(bb) : "containmentLoadoutClose" === yb ? qb.isOpen() && (qb.close(), (0, cb.h)()) : "containmentCodex" === yb ? sy.pU(bb) : "containmentLocator" === yb && Sy.pU(bb)
        },
        Zb: () => {
          bb || hy.d.get("loadingOverlayVisible") || (bb = !0, yb.sendCommand("containmentEntered"))
        },
        onClose: () => {
          var yb, bb;
          null === (yb = Wy) || void 0 === yb || yb(), Wy = null, null === (bb = Py) || void 0 === bb || bb(), Py = null;
          for (const Wy of oy) Wy.dispose();
          ey.dispose()
        }
      }
    }
  },
  35625: (yb, bb, Wy) => {
    Wy.d(bb, {
      C: () => rb,
      D: () => Hy,
      G: () => ab,
      I: () => uy,
      K: () => Fy,
      e: () => Py,
      i: () => ib,
      j: () => cb,
      k: () => ny,
      n: () => Ry,
      r: () => Jy,
      v: () => Xy,
      x: () => Yy,
      z: () => Oy
    });
    var Uy = Wy(33);
    const hy = {
        codeBlock: ["codeBlockIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "worldCodeButton", "exportButton", "helpButton"],
        worldCode: ["worldCodeIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "exportButton", "helpButton"]
      },
      fy = ["docsButton", "docsPanel", "docsClientOptionsTab", "docsClientOptions", "docsApiReferenceTab", "docsApiReference", "docsCallbacksTab", "docsCallbacks", "hideDocsButton"],
      Zy = ["aiHelperButton", "aiPanel", "aiAskBox", "aiModelChip", "aiAnswer", "aiEdits", "aiGear", "aiNotes", "aiGameSettings", "hideAiHelperButton"],
      cb = fy.filter((yb => "docsButton" !== yb)),
      Py = Zy.filter((yb => "aiHelperButton" !== yb)),
      oy = "codeEditorTutorials",
      By = {
        codeBlockIntro: "codeBlockIntroShown",
        worldCodeIntro: "worldCodeIntroShown"
      },
      Ky = {
        welcome: "welcomeComplete",
        docsOverview: "docsOverviewComplete",
        aiHelperOverview: "aiHelperOverviewComplete"
      };
    let ey = null,
      qb = null;
    const sy = new Set,
      Sy = new Set;
    let Ey = null;
    const ly = new Set,
      mb = new Set;

    function Cy() {
      mb.forEach((yb => {
        yb()
      }))
    }

    function Ty() {
      if (!ey) {
        const yb = Uy.e.getItem(oy);
        ey = {
          codeBlockIntroShown: !1,
          worldCodeIntroShown: !1,
          welcomeComplete: !1,
          docsOverviewComplete: !1,
          aiHelperOverviewComplete: !1,
          ..."object" === typeof yb && null !== yb ? yb : {}
        }
      }
      return ey
    }

    function Vy(yb) {
      const bb = Ty();
      bb[yb] || (ey = {
        ...bb,
        [yb]: !0
      }, Uy.e.setItem(oy, ey))
    }

    function Jy(yb) {
      return "docsOverview" === yb ? fy : "aiHelperOverview" === yb ? Zy : qb ? hy[qb] : []
    }

    function gb(yb) {
      return ("worldCodeButton" !== yb || !Ty().worldCodeIntroShown) && !ly.has(yb)
    }

    function Gy(yb) {
      var bb;
      return (null === (bb = Ey) || void 0 === bb ? void 0 : bb.name) === yb ? Ey.stepsDone : sy
    }

    function Oy(yb, bb) {
      if (! function(yb) {
          return Ey ? Ey.name === yb : "welcome" === yb
        }(yb) || !gb(bb) || Gy(yb).has(bb)) return !1;
      if (Ey) return !0;
      const Wy = By[bb];
      return Wy ? !Ty()[Wy] || Sy.has(bb) : !Ty()[Ky[yb]]
    }

    function Ry(yb) {
      var bb;
      return null !== (bb = Jy(yb).find((bb => Oy(yb, bb)))) && void 0 !== bb ? bb : null
    }

    function vb(yb) {
      var bb;
      Vy(Ky[yb]), (null === (bb = Ey) || void 0 === bb ? void 0 : bb.name) === yb && (Ey = null)
    }

    function ib(yb) {
      const bb = (Ey ? [Ey.name] : ["welcome", "docsOverview"]).find((bb => Ry(bb) === yb));
      if (!bb) return;
      Gy(bb).add(yb);
      const Wy = By[yb];
      Wy && (Vy(Wy), Ey || Sy.add(yb)), null === Ry(bb) && vb(bb), Cy()
    }

    function My(yb, bb) {
      const Wy = Jy(yb),
        Uy = Gy(yb);
      for (let hy = Wy.indexOf(bb) - 1; hy >= 0; hy--)
        if (Uy.has(Wy[hy]) && gb(Wy[hy])) return Wy[hy];
      return null
    }

    function Yy(yb, bb) {
      return null !== My(yb, bb)
    }

    function Xy(yb, bb) {
      const Wy = My(yb, bb);
      Wy && (Gy(yb).delete(Wy), Cy())
    }

    function ny(yb) {
      vb(yb), "welcome" === yb && Jy("welcome").forEach((yb => {
        const bb = By[yb];
        bb && Vy(bb)
      })), Cy()
    }

    function uy(yb) {
      Ey = {
        name: yb,
        stepsDone: new Set
      }, Cy()
    }

    function rb() {
      (Ey || 0 !== sy.size || 0 !== Sy.size) && (Ey = null, sy.clear(), Sy.clear(), Cy())
    }

    function Hy(yb, bb) {
      const Wy = bb ? yb : qb === yb ? null : qb;
      Wy !== qb && (qb = Wy, Cy())
    }

    function ab(yb, bb) {
      ly.has(yb) === bb && (bb ? ly.delete(yb) : ly.add(yb), Cy())
    }

    function Fy(yb) {
      return mb.add(yb), () => {
        mb.delete(yb)
      }
    }
  },
  37933: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/breach-zero-uncaught.c7d4410f99269ac1ee2f.webp"
  },
  37939: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/breach-zero.ef5aacecf502228cd20b.webp"
  },
  37946: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/brood-father-uncaught.ee678432c71b7061fae1.webp"
  },
  37954: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/brood-father.e48391955a574c1155fa.webp"
  },
  37961: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/carousel-uncaught.a92757620f569f31d7d2.webp"
  },
  37966: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/carousel.5fc13db7958067d6e1a3.webp"
  },
  37968: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/deadlock-uncaught.feadbdbbf2d040dce5c0.webp"
  },
  37975: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/deadlock.2bcaeaa57376fd78ddcb.webp"
  },
  37982: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/frost-revenant-uncaught.c0271636eeae988b1a40.webp"
  },
  37988: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/frost-revenant.fed6021646d7f0f81876.webp"
  },
  37994: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/hollow-choir-uncaught.7eaab76a15f82bd79558.webp"
  },
  38e3: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/hollow-choir.05f9c51994aecece852a.webp"
  },
  38004: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/magma-warden-uncaught.5308736fbb8a503cdfc7.webp"
  },
  38012: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/magma-warden.cc4302a49a39ae962a31.webp"
  },
  38016: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/patient-zero-uncaught.1f9ec012a14c4dbdcc8f.webp"
  },
  38020: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/patient-zero.cc76984bb20e9f9ace76.webp"
  },
  38025: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/siege-engine-uncaught.88e0ad7fec37ba2b4a2e.webp"
  },
  38029: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/siege-engine.b2e2382e415f4ae470ac.webp"
  },
  38036: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/warp-stalker-uncaught.c3b1b82ecb18446b71b0.webp"
  },
  38040: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/warp-stalker.851972c629601b668aa7.webp"
  },
  37217: yb => {
    yb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYElEQVR4nGNgIBIwovH/45JnRFaUGN+Comr+whq4GiZ0RVycnGAMAlAxsC0sMN2fvn9DodEBzEQGdUV5hvNnV4JpGJuPkwtTIQh4umZhZWMonDqjGCsbHcCCBkQjs0kDAPeaHpfX1eroAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);