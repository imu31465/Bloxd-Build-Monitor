export const id = 14;
export const ids = [14];
export const modules = {
  39237: (qq, Eq, gq) => {
    var Yq = {
      "./breach-zero-uncaught.webp": 39246,
      "./breach-zero.webp": 39252,
      "./brood-father-uncaught.webp": 39258,
      "./brood-father.webp": 39266,
      "./carousel-uncaught.webp": 39271,
      "./carousel.webp": 39273,
      "./deadlock-uncaught.webp": 39275,
      "./deadlock.webp": 39284,
      "./frost-revenant-uncaught.webp": 39286,
      "./frost-revenant.webp": 39290,
      "./hollow-choir-uncaught.webp": 39294,
      "./hollow-choir.webp": 39298,
      "./magma-warden-uncaught.webp": 39301,
      "./magma-warden.webp": 39306,
      "./patient-zero-uncaught.webp": 39309,
      "./patient-zero.webp": 39311,
      "./siege-engine-uncaught.webp": 39313,
      "./siege-engine.webp": 39316,
      "./warp-stalker-uncaught.webp": 39321,
      "./warp-stalker.webp": 39327
    };

    function lq(qq) {
      var Eq = Oq(qq);
      return gq(Eq)
    }

    function Oq(qq) {
      if (!gq.o(Yq, qq)) {
        var Eq = new Error("Cannot find module '" + qq + "'");
        throw Eq.code = "MODULE_NOT_FOUND", Eq
      }
      return Yq[qq]
    }
    lq.keys = function() {
      return Object.keys(Yq)
    }, lq.resolve = Oq, qq.exports = lq, lq.id = 39237
  },
  36931: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => rq,
      e: () => yq,
      h: () => tq,
      l: () => aq
    });
    var Yq = gq(1018),
      lq = gq.n(Yq),
      Oq = gq(57),
      mq = gq(71),
      xq = gq(1343),
      Aq = gq(1422),
      cq = gq(1341),
      uq = gq(1267),
      Bq = gq(1183),
      Wq = gq(36935),
      Nq = gq(1070);

    function aq(qq) {
      const [Eq, gq] = (0, Oq.useState)((() => (0, Wq.j)(qq)));
      return (0, Oq.useEffect)((() => (gq((0, Wq.j)(qq)), (0, Wq.L)((() => {
        gq((0, Wq.j)(qq))
      })))), [qq]), Eq
    }

    function Vq(qq, Eq) {
      "function" === typeof qq ? qq(Eq) : qq && (qq.current = Eq)
    }

    function dq(qq) {
      let {
        tutorial: Eq,
        step: gq,
        enabled: Yq = !0
      } = qq;
      const lq = aq(Eq);
      return Yq && lq === gq
    }

    function jq(qq, Eq) {
      const gq = (0, Wq.m)(qq),
        Yq = gq.indexOf(Eq);
      return !gq.slice(Yq + 1).some((Eq => (0, Wq.u)(qq, Eq)))
    }

    function Hq(qq, Eq, gq, Yq) {
      let {
        tutorial: lq,
        step: Oq,
        waitForClick: mq = !1,
        onPrevious: xq
      } = qq;
      const Aq = Eq && (0, Wq.s)(lq, Oq),
        cq = Eq && !jq(lq, Oq),
        Bq = mq ? Yq : gq;
      let Nq = null;
      Aq ? Nq = () => {
        null === xq || void 0 === xq || xq(), (0, Wq.p)(lq, Oq)
      } : cq && (Nq = () => {
        (0, Wq.i)(lq)
      }), (0, uq.w)("popup", null !== Bq && void 0 !== Bq ? Bq : gq, Nq, Eq && null !== Bq, null, Aq ? void 0 : "controller:menusSkipTutorial")
    }

    function oq(qq) {
      let {
        tutorial: Eq,
        step: gq,
        text: Yq,
        waitForClick: lq = !1,
        onPrevious: Oq
      } = qq;
      const {
        t: mq
      } = (0, Bq.v)(), xq = jq(Eq, gq);
      return (0, Nq.jsxs)(Nq.Fragment, {
        children: [(0, Nq.jsx)("div", {
          className: "TutorialStepText",
          children: Yq
        }), (0, Nq.jsxs)("div", {
          className: "TutorialStepButtons",
          children: [(0, Wq.s)(Eq, gq) && (0, Nq.jsx)(Aq.i, {
            className: "TutorialStepButton",
            onClick: () => {
              null === Oq || void 0 === Oq || Oq(), (0, Wq.p)(Eq, gq)
            },
            children: mq("tutorial:back")
          }), !lq && (0, Nq.jsx)(Aq.g, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, Wq.e)(gq)
            },
            padDefaultFocus: !0,
            children: mq(xq ? "tutorial:done" : "tutorial:next")
          }), !xq && (0, Nq.jsx)(Aq.i, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, Wq.i)(Eq)
            },
            children: mq("tutorial:skip")
          })]
        })]
      })
    }
    const Pq = 6;

    function Qq(qq) {
      let {
        rect: Eq,
        margin: gq
      } = qq;
      const Yq = Math.max(0, Eq.top - gq),
        lq = Eq.bottom + gq,
        Oq = Math.max(0, Eq.left - gq),
        mq = Eq.right + gq;
      return (0, Nq.jsxs)(Nq.Fragment, {
        children: [(0, Nq.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: 0,
            left: 0,
            right: 0,
            height: Yq
          }
        }), (0, Nq.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: lq,
            left: 0,
            right: 0,
            bottom: 0
          }
        }), (0, Nq.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: Yq,
            left: 0,
            width: Oq,
            height: lq - Yq
          }
        }), (0, Nq.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: Yq,
            left: mq,
            right: 0,
            height: lq - Yq
          }
        })]
      })
    }

    function yq(qq) {
      let {
        target: Eq,
        placement: gq,
        boxRef: Yq,
        className: Aq,
        spotlightMargin: uq = Pq,
        children: Bq
      } = qq;
      const {
        getArrowProps: Wq,
        getTooltipProps: aq,
        setTooltipRef: Vq,
        setTriggerRef: dq
      } = (0, xq.d)({
        placement: gq,
        trigger: null,
        visible: !0,
        interactive: !0,
        closeOnOutsideClick: !1,
        offset: [0, uq]
      });
      (0, Oq.useLayoutEffect)((() => {
        dq(Eq)
      }), [Eq, dq]);
      const jq = function(qq, Eq) {
        const [gq, Yq] = (0, Oq.useState)(null);
        return (0, Oq.useEffect)((() => {
          if (!Eq || !qq) return void Yq(null);
          let gq = 0,
            lq = null;
          const Oq = () => {
            const Eq = qq.getBoundingClientRect();
            lq && Eq.left === lq.left && Eq.top === lq.top && Eq.width === lq.width && Eq.height === lq.height || (lq = Eq, Yq(Eq)), gq = requestAnimationFrame(Oq)
          };
          return Oq(), () => {
            cancelAnimationFrame(gq)
          }
        }), [qq, Eq]), gq
      }(Eq, !0);
      (0, Oq.useEffect)((() => {
        null === Eq || void 0 === Eq || Eq.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        })
      }), [Eq]);
      const Hq = (0, Oq.useCallback)((qq => {
        Vq(qq), Yq && (Yq.current = qq)
      }), [Vq, Yq]);
      return (0, mq.createPortal)((0, Nq.jsxs)(Nq.Fragment, {
        children: [jq && (0, Nq.jsx)(Qq, {
          rect: jq,
          margin: uq
        }), (0, Nq.jsxs)("div", {
          ref: Hq,
          ...aq({
            className: lq()("tooltip-container SmallTextLight TutorialStep", Aq)
          }),
          children: [Bq, (0, Nq.jsx)("div", {
            ...Wq({
              className: "tooltip-arrow"
            })
          })]
        })]
      }), (0, cq.f)())
    }
    const tq = (0, Oq.forwardRef)((function(qq, Eq) {
      let {
        placement: gq = "right",
        children: Yq,
        ...lq
      } = qq;
      const mq = dq(lq),
        xq = (0, Oq.useRef)(null),
        Aq = (0, Oq.useRef)(null);
      Hq(lq, mq, xq, Aq);
      const [cq, uq] = (0, Oq.useState)(null), Bq = Yq.ref, Wq = (0, Oq.useCallback)((qq => {
        Aq.current = qq, uq(qq), Vq(Eq, qq), Vq(Bq, qq)
      }), [Eq, Bq]);
      return (0, Nq.jsxs)(Nq.Fragment, {
        children: [(0, Oq.cloneElement)(Yq, {
          ref: Wq
        }), mq && (0, Nq.jsx)(yq, {
          target: cq,
          placement: gq,
          boxRef: xq,
          children: (0, Nq.jsx)(oq, {
            ...lq
          })
        })]
      })
    }));

    function rq(qq) {
      const Eq = dq(qq),
        gq = (0, Oq.useRef)(null);
      return Hq(qq, Eq, gq, null), Eq ? (0, mq.createPortal)((0, Nq.jsx)("div", {
        className: "TutorialCentreBackdrop",
        children: (0, Nq.jsx)("div", {
          ref: gq,
          className: "tooltip-container SmallTextLight TutorialStep TutorialCentreStep",
          children: (0, Nq.jsx)(oq, {
            ...qq
          })
        })
      }), (0, cq.f)()) : null
    }
  },
  38514: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => mq
    });
    const Yq = 4,
      lq = 12e3,
      Oq = 1e3;
    class mq {
      constructor() {
        let {
          limit: qq = Yq,
          windowMs: Eq = lq,
          spacingMs: gq = Oq,
          now: mq = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = qq, this.windowMs = Eq, this.spacingMs = gq, this.now = mq
      }
      isPacing() {
        return !this.canSendPriority() || this.isPriorityWaiting()
      }
      canSendPriority() {
        return this.prune(), this.sent.length < this.limit && this.now() - this.lastSentAt >= this.spacingMs
      }
      tryStart() {
        for (const qq of this.priority) qq.flush();
        return !this.isPacing() && (this.start(), !0)
      }
      start() {
        this.prune();
        const qq = this.now();
        this.sent.push(qq), this.lastSentAt = qq, this.schedule(), this.notify()
      }
      addPriority(qq) {
        return this.priority.add(qq), () => {
          this.priority.delete(qq)
        }
      }
      subscribe(qq) {
        return this.listeners.add(qq), () => {
          this.listeners.delete(qq)
        }
      }
      dispose() {
        this.clearTimer(), this.sent = [], this.listeners.clear(), this.priority.clear()
      }
      isPriorityWaiting() {
        for (const qq of this.priority)
          if (qq.waiting()) return !0;
        return !1
      }
      prune() {
        const qq = this.now() - this.windowMs;
        for (; this.sent.length > 0 && this.sent[0] <= qq;) this.sent.shift()
      }
      schedule() {
        this.clearTimer();
        const qq = this.now(),
          Eq = this.lastSentAt + this.spacingMs,
          gq = Math.min(Eq > qq ? Eq : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        gq !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, gq - qq)))
      }
      notify() {
        for (const qq of this.listeners) qq()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  36662: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Oq,
      d: () => Vq,
      g: () => dq,
      h: () => xq,
      l: () => Wq,
      m: () => jq,
      o: () => Bq,
      p: () => oq,
      r: () => aq,
      v: () => Hq
    });
    var Yq = gq(24),
      lq = gq(31);
    const Oq = "clientGameInventoryButtonsChanged",
      mq = new Map;

    function xq() {
      return [...mq.values()].sort(((qq, Eq) => {
        var gq, Yq;
        return (null !== (gq = qq.order) && void 0 !== gq ? gq : 0) - (null !== (Yq = Eq.order) && void 0 !== Yq ? Yq : 0)
      }))
    }
    let Aq = null;

    function cq(qq) {
      Aq = qq
    }
    let uq = !1;

    function Bq(qq) {
      uq = !0;
      try {
        qq.onClick()
      } finally {
        uq = !1
      }
      qq.panel && "clientGame" === Yq.b.get("openInGameMenuName") && cq(qq.id)
    }

    function Wq() {
      return uq
    }

    function Nq() {
      return xq().filter((qq => qq.panel && !qq.disabled))
    }

    function aq(qq) {
      const Eq = Nq(),
        gq = Eq.findIndex((qq => qq.id === Aq));
      return !(gq < 0 || Eq.length < 2) && (Bq(Eq[(gq + qq + Eq.length) % Eq.length]), !0)
    }

    function Vq() {
      return null !== Aq && Nq().length > 1
    }

    function dq() {
      cq(null)
    }

    function jq() {
      "inventory" !== Yq.b.get("openInGameMenuName") && cq(null)
    }

    function Hq() {
      const qq = Aq;
      return cq(null), qq
    }

    function oq(qq) {
      return mq.set(qq.id, qq), lq.i.TV(Oq, xq(), !0), () => {
        mq.get(qq.id) === qq && (mq.delete(qq.id), lq.i.TV(Oq, xq()))
      }
    }
  },
  38498: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Yq
    });
    class Yq {
      constructor(qq, Eq, gq) {
        this.TV = qq, this.beforeOpen = Eq, this.afterClose = gq, this.open = !1, this.eN = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.eN && (this.open = !0, this.beforeOpen(this), this.emit())
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
      closePanel(qq) {
        this.open = !1, this.onClosed(), this.emit(), this.afterClose(qq)
      }
      onClosed() {}
      dispose() {
        this.open = !1, this.emit(), this.eN = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.eN || (this.snapshot = this.buildSnapshot(), this.TV(this.snapshot))
      }
    }
  },
  36657: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => xq,
      e: () => dq,
      h: () => jq,
      j: () => Wq,
      l: () => cq,
      m: () => Vq,
      n: () => Nq,
      r: () => uq
    });
    var Yq = gq(24),
      lq = gq(31),
      Oq = gq(1274),
      mq = gq(36662);
    const xq = "clientGameUiChanged";
    let Aq = null;

    function cq() {
      return Aq
    }

    function uq(qq, Eq) {
      const gq = {
        content: qq,
        menu: Eq
      };
      return Aq = gq, lq.i.TV(xq, Aq, !0), () => {
        Aq === gq && (Aq = null, aq = !1, dq(), lq.i.TV(xq, null))
      }
    }
    let Bq = null;

    function Wq() {
      return Bq
    }

    function Nq(qq) {
      return Bq = qq, () => {
        Bq === qq && (Bq = null)
      }
    }
    let aq = !1;

    function Vq() {
      const qq = Yq.b.get("openInGameMenuName");
      "clientGame" !== qq && (aq = "inventory" === qq), (0, mq.l)() || (0, mq.g)(), (0, Oq.m)(Oq.d), Yq.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function dq() {
      Hq(!1)
    }

    function jq() {
      Hq(aq)
    }

    function Hq(qq) {
      "clientGame" === Yq.b.get("openInGameMenuName") && Yq.b.set({
        openInGameMenuName: qq ? "inventory" : null
      }), qq || (0, mq.g)(), aq = !1
    }
  },
  39232: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      default: () => ug
    });
    var Yq = gq(57);
    var lq = gq(24),
      Oq = gq(1893),
      mq = gq(31),
      xq = gq(36657),
      Aq = gq(1018),
      cq = gq.n(Aq),
      uq = gq(1416),
      Bq = gq(1183),
      Wq = gq(4359),
      Nq = gq(1332),
      aq = gq(1422),
      Vq = gq(1895),
      dq = gq(1341),
      jq = gq(1876),
      Hq = gq(1942),
      oq = gq(201);
    const Pq = gq(39237),
      Qq = Object.fromEntries(Pq.keys().map((qq => [qq.replace(/^\.\/(.*)\.webp$/, "$1"), Pq(qq)]))),
      yq = new Set;

    function tq(qq, Eq) {
      const gq = Eq ? qq : `${qq}-uncaught`,
        Yq = (0, oq.b)(Qq, gq);
      return void 0 !== Yq || yq.has(gq) || (yq.add(gq), console.warn(`Containment Breach has no mugshot ${gq}: run tools/harnessCutouts/ContainmentMugshotCapture.ts`)), Yq
    }
    var rq = gq(1070);
    const vq = "containmentBreach",
      hq = "Gold Coin";

    function nq(qq) {
      let {
        open: Eq,
        onDismiss: gq,
        title: Yq,
        className: lq,
        decor: Oq,
        headerExtra: mq,
        status: xq,
        statusRefused: Aq = !1,
        children: uq
      } = qq;
      const Bq = `${lq}Title`;
      return (0, rq.jsx)(Wq.c, {
        show: Eq,
        close: gq,
        togglePointerLock: !1,
        className: "ContainmentBoardOverlay",
        children: (0, rq.jsxs)("section", {
          className: cq()("ContainmentBoardPanel", lq),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": Bq,
          children: [Oq && (0, rq.jsx)("div", {
            className: "BoardDecor",
            "aria-hidden": "true",
            children: Oq
          }), (0, rq.jsxs)("header", {
            className: "BoardHeader",
            children: [(0, rq.jsx)("h2", {
              id: Bq,
              className: "VisuallyHidden",
              children: Yq
            }), mq, (0, rq.jsx)(aq.m, {
              onClick: gq
            })]
          }), (0, rq.jsx)("div", {
            className: "BoardBody",
            children: uq
          }), void 0 !== xq && (0, rq.jsx)("footer", {
            className: cq()("BoardStatus", {
              Refused: Aq
            }),
            children: xq
          })]
        })
      })
    }

    function bq(qq) {
      let {
        itemName: Eq
      } = qq;
      return (0, rq.jsx)(Vq.e, {
        itemName: Eq,
        amount: 0
      })
    }

    function iq(qq) {
      let {
        anomalyId: Eq,
        caught: gq
      } = qq;
      const lq = (0, Yq.useRef)(null);
      return (0, Nq.e)(lq, !gq), (0, rq.jsx)("span", {
        ref: lq,
        className: cq()("BoardMugshot", {
          Uncaught: !gq
        }),
        children: (0, rq.jsx)("img", {
          src: tq(Eq, gq),
          alt: "",
          draggable: !1
        })
      })
    }

    function Zq(qq) {
      let {
        itemName: Eq,
        amount: gq,
        Fc: Yq,
        inTile: lq = !1
      } = qq;
      return (0, rq.jsx)(dq.e, {
        delayShow: 200,
        hoverOnly: lq,
        placement: "top",
        tooltipClassName: "BoardChipTooltipBox",
        tooltipInner: (0, rq.jsx)(Mq, {
          itemName: Eq,
          amount: gq,
          Fc: Yq
        }),
        children: (0, rq.jsxs)("span", {
          className: cq()("BoardChip", {
            Short: void 0 !== Yq && Yq < gq
          }),
          children: [(0, rq.jsx)("span", {
            className: "BoardChipIcon",
            children: (0, rq.jsx)(bq, {
              itemName: Eq
            })
          }), gq.toLocaleString()]
        })
      })
    }
    const fq = /^(.*?)\s*Salvaged from (?:an? )?(.+?)\.?$/;

    function Mq(qq) {
      var Eq;
      let {
        itemName: gq,
        amount: Yq,
        Fc: lq
      } = qq;
      const {
        t: Oq
      } = (0, Bq.v)(), mq = (0, Hq.f)("itemInfo", (qq => qq[gq])), {
        lore: xq,
        droppedBy: Aq
      } = function(qq) {
        if ("string" !== typeof qq) return {
          lore: qq,
          droppedBy: null
        };
        const Eq = fq.exec(qq);
        return null === Eq ? {
          lore: qq,
          droppedBy: null
        } : {
          lore: "" === Eq[1] ? void 0 : Eq[1],
          droppedBy: Eq[2]
        }
      }(null === mq || void 0 === mq ? void 0 : mq.description);
      return (0, rq.jsxs)("div", {
        className: "BoardChipTooltip",
        children: [(0, rq.jsxs)("div", {
          className: "BoardChipTooltipHeader",
          children: [(0, rq.jsx)("span", {
            className: "BoardChipTooltipIcon",
            children: (0, rq.jsx)(bq, {
              itemName: gq
            })
          }), (0, rq.jsx)(jq.c, {
            text: null !== (Eq = null === mq || void 0 === mq ? void 0 : mq.displayName) && void 0 !== Eq ? Eq : gq,
            className: "BoardChipTooltipName"
          })]
        }), (void 0 !== xq || null !== Aq) && (0, rq.jsxs)("div", {
          className: "BoardChipTooltipBody",
          children: [void 0 !== xq && (0, rq.jsx)(jq.c, {
            text: xq,
            className: "BoardChipTooltipDescription"
          }), null !== Aq && (0, rq.jsxs)("span", {
            className: "BoardChipTooltipSource",
            children: [(0, rq.jsx)("span", {
              className: "BoardChipTooltipLabel",
              children: Oq(`${vq}:chipDroppedBy`)
            }), Aq]
          })]
        }), void 0 !== lq && (0, rq.jsxs)("div", {
          className: cq()("BoardChipTooltipHeld", {
            Short: lq < Yq
          }),
          children: [(0, rq.jsx)("span", {
            className: "BoardChipTooltipLabel",
            children: Oq(`${vq}:chipYouHave`)
          }), (0, rq.jsxs)("span", {
            className: "BoardChipTooltipCount",
            children: [(0, rq.jsx)("span", {
              className: "BoardChipTooltipHeldAmount",
              children: lq.toLocaleString()
            }), ` / ${Yq.toLocaleString()}`]
          }), (0, rq.jsx)("span", {
            className: "BoardChipTooltipMeter",
            children: (0, rq.jsx)("span", {
              style: {
                width: (Yq > 0 ? 100 * Math.min(1, lq / Yq) : 100) + "%"
              }
            })
          })]
        })]
      })
    }

    function Tq(qq) {
      let {
        icon: Eq,
        name: gq,
        selected: Yq,
        locked: lq,
        className: Oq,
        buttonRef: mq,
        onSelect: xq,
        children: Aq
      } = qq;
      return (0, rq.jsxs)("button", {
        ref: mq,
        type: "button",
        className: cq()("BoardTile", Oq, {
          Selected: Yq,
          Locked: lq
        }),
        onClick: xq,
        children: [(0, rq.jsx)("span", {
          className: "BoardTileIcon",
          children: Eq
        }), (0, rq.jsx)("span", {
          className: "BoardTileName",
          children: gq
        }), Aq]
      })
    }

    function zq(qq) {
      let {
        icon: Eq,
        name: gq,
        children: Yq
      } = qq;
      return (0, rq.jsxs)("header", {
        className: "BoardDetailHeader",
        children: [(0, rq.jsx)("span", {
          className: "BoardDetailIcon",
          children: Eq
        }), (0, rq.jsxs)("div", {
          className: "BoardDetailHeading",
          children: [(0, rq.jsx)("h3", {
            children: gq
          }), (0, rq.jsx)("span", {
            className: "BoardDetailStatus",
            children: Yq
          })]
        })]
      })
    }

    function Sq(qq) {
      let {
        coins: Eq,
        children: gq
      } = qq;
      return (0, rq.jsxs)("div", {
        className: "BoardWallet",
        children: [(0, rq.jsx)(Zq, {
          itemName: hq,
          amount: Eq
        }), gq]
      })
    }
    var pq = gq(38498);
    const Gq = "containmentCodexView";
    class Lq extends pq.c {
      constructor() {
        super(...arguments), this.entries = [], this.selectedId = "", this.snapshot = this.buildSnapshot(), this.select = qq => {
          this.selectedId = qq, this.emit()
        }
      }
      ga(qq) {
        this.entries = qq.codexEntries, this.selectedId = this.entries[0].codexEntryId, this.showOrRefresh()
      }
      buildSnapshot() {
        return {
          open: this.open,
          entries: this.entries,
          selectedId: this.selectedId
        }
      }
    }
    const Jq = {
        codexAnyDifficulty: `${vq}:codexNeedsAny`,
        codexNormalOnly: `${vq}:codexNeedsNormal`,
        codexHardOnly: `${vq}:codexNeedsHard`
      },
      kq = {
        codexContained: "Contained",
        codexEncountered: "Sighted",
        codexUnidentified: "Unknown"
      },
      Rq = {
        codexContained: `${vq}:codexContainedBadge`,
        codexEncountered: `${vq}:codexEncounteredBadge`,
        codexUnidentified: `${vq}:codexUnidentifiedBadge`
      },
      Uq = ["94%", "81%", "88%", "46%", "72%"];

    function Fq(qq) {
      let {
        entry: Eq
      } = qq;
      const {
        t: gq
      } = (0, Bq.v)();
      return (0, rq.jsx)("span", {
        className: cq()("BoardBadge", kq[Eq.codexEntryState]),
        children: gq(Rq[Eq.codexEntryState])
      })
    }

    function sq(qq) {
      const {
        t: Eq
      } = (0, Bq.v)();
      return "codexUnidentified" === qq.codexEntryState ? Eq(`${vq}:codexUnidentifiedName`) : qq.codexEntryName
    }

    function Xq(qq) {
      let {
        entry: Eq
      } = qq;
      return "codexUnidentified" === Eq.codexEntryState ? (0, rq.jsx)(bq, {
        itemName: "Book"
      }) : (0, rq.jsxs)("span", {
        className: "CodexPhoto",
        children: [(0, rq.jsx)(iq, {
          anomalyId: Eq.codexEntryId,
          caught: "codexContained" === Eq.codexEntryState
        }), (0, rq.jsx)("img", {
          className: "CodexPaperclip",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAMCAYAAACulacQAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGNggIIXb97/X7V57/+Wvtn/GZDBqs17UQTgClahScBATHrlf5ySeHWimo9NMbokCp9OkmD/oasGCaJLAAC5ZUIBS85GiAAAAABJRU5ErkJggg==",
          alt: "",
          draggable: !1
        })]
      })
    }

    function wq(qq) {
      let {
        entry: Eq,
        selected: gq,
        onSelect: Yq
      } = qq;
      const lq = "codexUnidentified" === Eq.codexEntryState;
      return (0, rq.jsxs)(Tq, {
        icon: (0, rq.jsx)(Xq, {
          entry: Eq
        }),
        name: sq(Eq),
        selected: gq,
        locked: lq,
        className: cq()("CodexFolder", kq[Eq.codexEntryState]),
        onSelect: () => {
          Yq(Eq.codexEntryId)
        },
        children: [!lq && (0, rq.jsx)(Fq, {
          entry: Eq
        }), lq && (0, rq.jsx)("img", {
          className: "CodexSeal",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAARElEQVR4nGNggIIGHp7/MAzjw+TAnMf+/mB8RkQEjOGKYZLIgsiK4AqQJZA1gBXAOHgVwCRQJJEdCVOEYj8yQPciTAEAz0hgyamUqskAAAAASUVORK5CYII=",
          alt: "",
          draggable: !1
        })]
      })
    }

    function Kq(qq) {
      let {
        count: Eq
      } = qq;
      const gq = [];
      for (let Yq = Math.min(Eq, 25); Yq > 0; Yq -= 5) gq.push(Math.min(Yq, 5));
      return (0, rq.jsx)("span", {
        className: "CodexTallyMarks",
        "aria-hidden": "true",
        children: gq.map(((qq, Eq) => (0, rq.jsx)("span", {
          className: cq()("CodexTallyGroup", {
            Gate: 5 === qq
          }),
          children: Array.from({
            length: Math.min(qq, 4)
          }, ((qq, Eq) => (0, rq.jsx)("span", {
            className: "CodexTallyMark"
          }, Eq)))
        }, Eq)))
      })
    }

    function Cq(qq) {
      let {
        contained: Eq,
        total: gq
      } = qq;
      const {
        t: Yq
      } = (0, Bq.v)();
      return (0, rq.jsxs)("div", {
        className: "CodexProgress",
        children: [Yq(`${vq}:codexProgress`, {
          contained: String(Eq),
          total: String(gq)
        }), (0, rq.jsx)("span", {
          className: "CodexProgressMeter",
          children: (0, rq.jsx)("span", {
            style: {
              width: Eq / gq * 100 + "%"
            }
          })
        })]
      })
    }

    function Iq(qq) {
      let {
        entry: Eq,
        fileNumber: gq
      } = qq;
      const {
        t: Yq
      } = (0, Bq.v)(), lq = "codexContained" === Eq.codexEntryState;
      return (0, rq.jsx)("section", {
        className: "BoardDetail",
        children: (0, rq.jsxs)("article", {
          className: cq()("CodexDossier", kq[Eq.codexEntryState]),
          children: [(0, rq.jsx)("span", {
            className: "CodexFileNumber",
            children: Yq(`${vq}:codexFileNumber`, {
              number: String(gq).padStart(3, "0")
            })
          }), (0, rq.jsx)(zq, {
            icon: (0, rq.jsx)(Xq, {
              entry: Eq
            }),
            name: sq(Eq),
            children: (0, rq.jsx)(Fq, {
              entry: Eq
            })
          }), lq && (0, rq.jsxs)(rq.Fragment, {
            children: [(0, rq.jsx)("p", {
              className: "BoardDescription",
              children: Eq.codexEntryLore
            }), (0, rq.jsxs)("p", {
              className: "CodexTally",
              children: [Yq(`${vq}:codexContainments`, {
                count: String(Eq.codexEntryContainedCount)
              }), (0, rq.jsx)(Kq, {
                count: Eq.codexEntryContainedCount
              })]
            }), (0, rq.jsx)("span", {
              className: "CodexClosedStamp",
              "aria-hidden": "true",
              children: Yq(`${vq}:codexContainedBadge`)
            })]
          }), !lq && (0, rq.jsxs)(rq.Fragment, {
            children: [(0, rq.jsxs)("div", {
              className: "CodexRedaction",
              children: [Uq.map((qq => (0, rq.jsx)("span", {
                className: "CodexRedactedLine",
                style: {
                  width: qq
                }
              }, qq))), (0, rq.jsx)("p", {
                className: "CodexRedacted",
                children: Yq(`${vq}:codexRedacted`)
              })]
            }), "" !== Eq.codexEntryHint && (0, rq.jsxs)("aside", {
              className: "CodexNote",
              children: [(0, rq.jsx)("h4", {
                children: Yq(`${vq}:codexHintLabel`)
              }), (0, rq.jsx)("p", {
                children: Eq.codexEntryHint
              })]
            }), (0, rq.jsx)("p", {
              className: "CodexClearance",
              children: Yq(Jq[Eq.codexEntryDifficulty])
            })]
          })]
        })
      })
    }

    function eq(qq) {
      let {
        controller: Eq
      } = qq;
      const gq = (0, uq.h)(Gq, Eq.getSnapshot()),
        {
          t: Yq
        } = (0, Bq.v)();
      if (0 === gq.entries.length) return null;
      const lq = gq.entries.find((qq => qq.codexEntryId === gq.selectedId)),
        Oq = gq.entries.filter((qq => "codexContained" === qq.codexEntryState)).length,
        mq = gq.entries.map((qq => qq.codexEntryId)).sort().indexOf(lq.codexEntryId) + 1;
      return (0, rq.jsxs)(nq, {
        open: gq.open,
        onDismiss: Eq.dismiss,
        title: Yq(`${vq}:codexTitle`),
        className: "ContainmentCodexPanel",
        headerExtra: (0, rq.jsx)(Cq, {
          contained: Oq,
          total: gq.entries.length
        }),
        children: [(0, rq.jsx)("div", {
          className: "BoardTiles",
          children: gq.entries.map((qq => (0, rq.jsx)(wq, {
            entry: qq,
            selected: qq === lq,
            onSelect: Eq.select
          }, qq.codexEntryId)))
        }), (0, rq.jsx)(Iq, {
          entry: lq,
          fileNumber: mq
        })]
      })
    }
    var Dq = gq(307);
    class qE extends pq.c {
      constructor(qq, Eq, gq, Yq, lq, Oq) {
        super(qq, Eq, gq), this.pacer = Yq, this.command = lq, this.predict = Oq, this.board = null, this.confirmed = null, this.selectedId = "", this.notice = null, this.unsubscribePacer = void 0, this.select = qq => {
          this.selectedId = qq, this.emit()
        }, this.act = (qq, Eq) => {
          if (!this.open || null === this.board || !this.pacer.send(`${this.command} ${qq} ${Eq}`, this.rollBack)) return;
          const gq = this.predict(this.board, qq, Eq);
          null !== gq && (this.board = gq.board, this.notice = gq.notice, this.emit())
        }, this.rollBack = () => {
          this.board !== this.confirmed && (this.board = this.confirmed, this.notice = null)
        }, this.unsubscribePacer = Yq.subscribe((() => {
          this.emit()
        }))
      }
      ga(qq) {
        const Eq = this.messageOpens(qq);
        if (Eq && this.open) return this.board === this.confirmed && (this.board = qq), this.confirmed = qq, void this.emit();
        if (this.board = qq, this.confirmed = qq, this.pacer.onReply(), Eq) return this.notice = null, this.selectedId = this.openingSelection(qq), void this.show();
        const gq = this.messageNotice(qq);
        null !== gq && (this.notice = gq), this.emit()
      }
      dispose() {
        this.unsubscribePacer(), super.dispose()
      }
      onClosed() {
        this.notice = null
      }
    }

    function EE(qq, Eq) {
      return qq.loadoutCoins >= Eq.loadoutCostCoins && Eq.loadoutCostParts.every((Eq => function(qq, Eq) {
        return gE(qq, Eq).loadoutHeldPartAmount
      }(qq, Eq.loadoutPartCurrency) >= Eq.loadoutPartAmount))
    }

    function gE(qq, Eq) {
      return qq.loadoutHeldParts.find((qq => qq.loadoutHeldPartCurrency === Eq))
    }

    function YE(qq, Eq) {
      return qq.loadoutSlots.find((qq => qq.loadoutSlotKind === Eq))
    }

    function lE(qq) {
      return qq.loadoutPerks.filter((qq => qq.loadoutPerkEquipped)).length >= qq.loadoutMaxPerks
    }

    function OE(qq, Eq, gq) {
      for (const lq of qq.loadoutSlots) {
        const Yq = lq.loadoutSlotOptions.find((qq => qq.loadoutOptionId === gq));
        if (Yq) return "loadoutArmour" === lq.loadoutSlotKind ? xE(qq, lq, Yq, Eq) : mE(qq, lq, Yq, Eq)
      }
      const Yq = qq.loadoutPerks.find((qq => qq.loadoutPerkId === gq));
      return Yq ? function(qq, Eq, gq) {
        const Yq = Eq.loadoutPerkOwned,
          lq = Eq.loadoutPerkEquipped,
          Oq = Eq.loadoutPerkName,
          mq = lE(qq);
        if ("loadoutUnlock" === gq) {
          if (Yq || !EE(qq, Eq.loadoutPerkCost)) return null;
          const gq = {
            ...Eq,
            loadoutPerkOwned: !0,
            loadoutPerkEquipped: !mq
          };
          return {
            board: cE(uE(qq, Eq.loadoutPerkCost), gq),
            notice: BE(mq ? "loadoutNoticeUnlockedNoRoom" : "loadoutNoticeUnlocked", Oq)
          }
        }
        if ("loadoutUpgrade" === gq || !Yq || "loadoutEquip" === gq === lq || !lq && mq) return null;
        return {
          board: cE(qq, {
            ...Eq,
            loadoutPerkEquipped: !lq
          }),
          notice: BE(lq ? "loadoutNoticeUnequipped" : "loadoutNoticeEquipped", Oq)
        }
      }(qq, Yq, Eq) : null
    }

    function mE(qq, Eq, gq, Yq) {
      const lq = gq.loadoutOptionOwnedTier,
        Oq = gq.loadoutOptionName;
      if ("loadoutEquip" === Yq) return 0 === lq ? null : {
        board: AE(qq, Eq, gq.loadoutOptionId, null),
        notice: BE("loadoutNoticeEquipped", Oq)
      };
      const mq = "loadoutUnlock" === Yq;
      if (mq && 0 !== lq || "loadoutUpgrade" === Yq && (0 === lq || lq >= gq.loadoutOptionTiers.length) || "loadoutUnequip" === Yq) return null;
      const xq = gq.loadoutOptionTiers[lq].loadoutTierCost;
      if (!EE(qq, xq)) return null;
      const Aq = {
          ...gq,
          loadoutOptionOwnedTier: lq + 1
        },
        cq = mq ? gq.loadoutOptionId : Eq.loadoutSlotEquippedId;
      return {
        board: AE(uE(qq, xq), Eq, cq, Aq),
        notice: mq ? BE("loadoutNoticeUnlocked", Oq) : BE("loadoutNoticeUpgraded", Oq, lq + 1)
      }
    }

    function xE(qq, Eq, gq, Yq) {
      const lq = gq.loadoutOptionOwnedTier > 0,
        Oq = gq.loadoutOptionName;
      if ("loadoutEquip" === Yq && lq) return {
        board: AE(qq, Eq, gq.loadoutOptionId, null),
        notice: BE("loadoutNoticeEquipped", Oq)
      };
      const mq = gq.loadoutOptionTiers[0].loadoutTierCost;
      return "loadoutUnlock" !== Yq || lq || !EE(qq, mq) ? null : {
        board: AE(uE(qq, mq), Eq, gq.loadoutOptionId, {
          ...gq,
          loadoutOptionOwnedTier: 1
        }),
        notice: BE("loadoutNoticeUnlocked", Oq)
      }
    }

    function AE(qq, Eq, gq, Yq) {
      const lq = {
        ...Eq,
        loadoutSlotEquippedId: gq,
        loadoutSlotOptions: Eq.loadoutSlotOptions.map((qq => null !== Yq && qq.loadoutOptionId === Yq.loadoutOptionId ? Yq : qq))
      };
      return {
        ...qq,
        loadoutSlots: qq.loadoutSlots.map((qq => qq === Eq ? lq : qq))
      }
    }

    function cE(qq, Eq) {
      return {
        ...qq,
        loadoutPerks: qq.loadoutPerks.map((qq => qq.loadoutPerkId === Eq.loadoutPerkId ? Eq : qq))
      }
    }

    function uE(qq, Eq) {
      return {
        ...qq,
        loadoutCoins: qq.loadoutCoins - Eq.loadoutCostCoins,
        loadoutHeldParts: qq.loadoutHeldParts.map((qq => {
          const gq = Eq.loadoutCostParts.find((Eq => Eq.loadoutPartCurrency === qq.loadoutHeldPartCurrency));
          return gq ? {
            ...qq,
            loadoutHeldPartAmount: qq.loadoutHeldPartAmount - gq.loadoutPartAmount
          } : qq
        }))
      }
    }

    function BE(qq, Eq) {
      return {
        loadoutNoticeKey: qq,
        loadoutNoticeRefused: !1,
        loadoutNoticeName: Eq,
        loadoutNoticeTier: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
      }
    }
    const WE = "containmentLoadoutView";
    class NE extends qE {
      constructor(qq, Eq, gq, Yq) {
        super(qq, Eq, gq, Yq, "loadout", OE), this.slot = "loadoutPrimary", this.snapshot = this.buildSnapshot(), this.selectSlot = qq => {
          this.slot = qq, this.selectedId = aE(this.board, qq), this.emit()
        }
      }
      messageOpens(qq) {
        return qq.loadoutMessageOpens
      }
      messageNotice(qq) {
        return qq.loadoutNotice
      }
      openingSelection(qq) {
        return aE(qq, this.slot)
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

    function aE(qq, Eq) {
      if ("loadoutPerks" === Eq) {
        var gq;
        const Eq = qq.loadoutPerks;
        return (null !== (gq = Eq.find((qq => qq.loadoutPerkEquipped))) && void 0 !== gq ? gq : Eq[0]).loadoutPerkId
      }
      return YE(qq, Eq).loadoutSlotEquippedId
    }
    const VE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAY0lEQVR4nGNgIAP8x4FRwP/sFt3/EYU6YBqGIwp1MBSDBUH4/3nW//83csD5DOgKfeKNsWIMhV+///qvbOT7/87cMjCG8TEUgiSLqlpRMEgMQ+HJvgy4aTAMEsPqc2KChyAAAFxNbnylK5O6AAAAAElFTkSuQmCC";
    var dE = gq(36931),
      jE = gq(1267);
    const HE = {
        loadoutPrimary: `${vq}:loadoutSlotPrimary`,
        loadoutSecondary: `${vq}:loadoutSlotSecondary`,
        loadoutOffensive: `${vq}:loadoutSlotOffensive`,
        loadoutSelfHelp: `${vq}:loadoutSlotSelfHelp`,
        loadoutArmour: `${vq}:loadoutSlotArmour`,
        loadoutPerks: `${vq}:loadoutSlotPerks`
      },
      oE = {
        section: "right",
        zW: "bottom",
        act: "top"
      },
      PE = (0, Yq.createContext)({
        step: null,
        targetRef: () => {}
      });

    function QE() {
      const {
        step: qq,
        targetRef: Eq
      } = (0, Yq.useContext)(PE);
      return (gq, Yq) => (null === qq || void 0 === qq ? void 0 : qq.kind) === gq && qq.id === Yq ? Eq : void 0
    }

    function yE(qq, Eq) {
      const gq = Eq.loadoutTargetId;
      if ("loadoutPerks" === Eq.loadoutTargetSection) {
        const Eq = qq.loadoutPerks.find((qq => qq.loadoutPerkId === gq));
        return {
          name: Eq.loadoutPerkName,
          owned: Eq.loadoutPerkOwned,
          equipped: Eq.loadoutPerkEquipped
        }
      }
      const Yq = YE(qq, Eq.loadoutTargetSection),
        lq = Yq.loadoutSlotOptions.find((qq => qq.loadoutOptionId === gq));
      return {
        name: lq.loadoutOptionName,
        owned: lq.loadoutOptionOwnedTier > 0,
        equipped: Yq.loadoutSlotEquippedId === gq
      }
    }

    function tE(qq, Eq, gq, Yq) {
      const [lq, Oq] = qq(`${vq}:${Eq}`, {
        [gq]: "\x01"
      }).split("\x01");
      return (0, rq.jsxs)(rq.Fragment, {
        children: [lq, (0, rq.jsx)("span", {
          className: "LoadoutWalkthroughName",
          children: Yq
        }), Oq]
      })
    }

    function rE(qq) {
      let {
        view: Eq,
        onDismiss: gq,
        children: lq
      } = qq;
      const {
        t: Oq
      } = (0, Bq.v)(), mq = Eq.loadout, xq = Eq.open ? mq.loadoutWalkthrough.map((qq => ({
        target: qq,
        info: yE(mq, qq)
      }))).find((qq => {
        let {
          info: Eq
        } = qq;
        return !Eq.equipped
      })) : void 0;
      let Aq = null,
        cq = null;
      if (void 0 !== xq) {
        const {
          target: qq,
          info: gq
        } = xq;
        Eq.slot !== qq.loadoutTargetSection ? (Aq = {
          kind: "section",
          id: qq.loadoutTargetSection
        }, cq = tE(Oq, "loadoutWalkthroughSection", "section", Oq(HE[qq.loadoutTargetSection]))) : Eq.selectedId !== qq.loadoutTargetId ? (Aq = {
          kind: "zW",
          id: qq.loadoutTargetId
        }, cq = tE(Oq, "loadoutWalkthroughPick", "name", gq.name)) : (Aq = {
          kind: "act",
          id: qq.loadoutTargetId
        }, cq = tE(Oq, gq.owned ? "loadoutWalkthroughEquip" : "loadoutWalkthroughUnlock", "name", gq.name))
      }
      const uq = null === Aq ? null : function(qq) {
          return `${qq.kind}:${qq.id}`
        }(Aq),
        [Wq, Nq] = (0, Yq.useState)(null),
        aq = (0, Yq.useCallback)((qq => {
          Nq((Eq => null !== qq ? {
            key: uq,
            node: qq
          } : (null === Eq || void 0 === Eq ? void 0 : Eq.key) === uq ? null : Eq))
        }), [uq]),
        Vq = null !== uq && (null === Wq || void 0 === Wq ? void 0 : Wq.key) === uq ? Wq.node : null;
      return (0, rq.jsxs)(PE.Provider, {
        value: {
          step: Aq,
          targetRef: aq
        },
        children: [lq, null !== Aq && null !== Vq && (0, rq.jsx)(vE, {
          target: Vq,
          placement: oE[Aq.kind],
          onDismiss: gq,
          children: cq
        }, uq)]
      })
    }

    function vE(qq) {
      let {
        target: Eq,
        placement: gq,
        onDismiss: lq,
        children: Oq
      } = qq;
      const {
        t: mq
      } = (0, Bq.v)(), xq = (0, Yq.useRef)(Eq);
      return xq.current = Eq, (0, jE.w)("popup", xq, lq), (0, rq.jsxs)(dE.e, {
        target: Eq,
        placement: gq,
        className: "LoadoutWalkthroughStep",
        spotlightMargin: 10,
        children: [(0, rq.jsxs)("div", {
          className: "LoadoutWalkthroughHeader",
          children: [(0, rq.jsx)("img", {
            className: "LoadoutWalkthroughPortrait",
            src: VE,
            alt: "",
            draggable: !1
          }), (0, rq.jsx)("span", {
            className: "LoadoutWalkthroughSpeaker",
            children: mq(`${vq}:operatorName`)
          }), (0, rq.jsx)(aq.m, {
            onClick: lq,
            ariaLabel: mq(`${vq}:loadoutWalkthroughClose`),
            padIgnore: !0
          })]
        }), (0, rq.jsx)("p", {
          className: "LoadoutWalkthroughText",
          children: Oq
        })]
      })
    }
    const hE = new Set(["loadoutStatReload", "loadoutStatResupply"]);

    function nE(qq) {
      let {
        cost: Eq,
        loadout: gq
      } = qq;
      const {
        t: Yq
      } = (0, Bq.v)();
      return Eq.loadoutCostCoins <= 0 && 0 === Eq.loadoutCostParts.length ? (0, rq.jsx)("span", {
        className: "LoadoutCost",
        children: Yq(`${vq}:loadoutFree`)
      }) : (0, rq.jsxs)("span", {
        className: "LoadoutCost",
        children: [Eq.loadoutCostCoins > 0 && (0, rq.jsx)(Zq, {
          itemName: hq,
          amount: Eq.loadoutCostCoins,
          Fc: gq.loadoutCoins
        }), Eq.loadoutCostParts.map((qq => {
          const Eq = gE(gq, qq.loadoutPartCurrency);
          return (0, rq.jsx)(Zq, {
            itemName: Eq.loadoutHeldPartItem,
            amount: qq.loadoutPartAmount,
            Fc: Eq.loadoutHeldPartAmount
          }, qq.loadoutPartCurrency)
        }))]
      })
    }
    const bE = {
      loadoutStatFireRate: `${vq}:loadoutUnitPerMinute`,
      loadoutStatReload: `${vq}:loadoutUnitSeconds`,
      loadoutStatResupply: `${vq}:loadoutUnitSeconds`
    };

    function iE(qq) {
      return "loadoutStatPotency" === qq.loadoutStatKind ? (0, Dq.X)(qq.loadoutStatValue) : String(qq.loadoutStatValue)
    }

    function ZE(qq) {
      var Eq;
      let {
        option: gq
      } = qq;
      const {
        t: Yq
      } = (0, Bq.v)(), lq = gq.loadoutOptionTiers, Oq = null === (Eq = lq[0]) || void 0 === Eq ? void 0 : Eq.loadoutTierStats.map((qq => qq.loadoutStatKind));
      if (!Oq || 0 === Oq.length) return null;
      const mq = gq.loadoutOptionOwnedTier,
        xq = (qq, Eq) => {
          var gq;
          return null === (gq = lq[qq]) || void 0 === gq ? void 0 : gq.loadoutTierStats.find((qq => qq.loadoutStatKind === Eq))
        };
      return (0, rq.jsxs)("table", {
        className: "LoadoutTierTable",
        children: [(0, rq.jsx)("thead", {
          children: (0, rq.jsxs)("tr", {
            children: [(0, rq.jsx)("th", {}), lq.map(((qq, Eq) => (0, rq.jsx)("th", {
              className: cq()({
                Current: Eq + 1 === mq,
                Next: Eq === mq
              }),
              children: Yq(`${vq}:loadoutTier`, {
                tier: (0, Dq.X)(Eq + 1)
              })
            }, Eq)))]
          })
        }), (0, rq.jsx)("tbody", {
          children: Oq.map((qq => {
            const Eq = bE[qq];
            return (0, rq.jsxs)("tr", {
              children: [(0, rq.jsxs)("th", {
                scope: "row",
                children: [Yq(`${vq}:${qq}`), Eq && (0, rq.jsx)("span", {
                  className: "LoadoutStatUnit",
                  children: Yq(Eq)
                })]
              }), lq.map(((Eq, gq) => {
                const Yq = xq(gq, qq),
                  lq = gq > 0 ? xq(gq - 1, qq) : void 0,
                  Oq = Yq && lq ? Yq.loadoutStatValue - lq.loadoutStatValue : 0,
                  Aq = hE.has(qq) ? Oq < 0 : Oq > 0,
                  uq = gq === mq;
                return (0, rq.jsxs)("td", {
                  className: cq()({
                    Current: gq + 1 === mq,
                    Next: uq,
                    Gain: Aq,
                    Owned: gq < mq
                  }),
                  children: [uq && Aq && (0, rq.jsx)("span", {
                    className: "LoadoutGainArrow",
                    "aria-hidden": "true",
                    children: Oq < 0 ? "\u25bc" : "\u25b2"
                  }), Yq ? iE(Yq) : "-"]
                }, gq)
              }))]
            }, qq)
          }))
        })]
      })
    }

    function fE(qq) {
      let {
        view: Eq,
        controller: gq,
        slot: Yq,
        option: lq
      } = qq;
      const {
        t: Oq
      } = (0, Bq.v)(), mq = Eq.loadout, xq = lq.loadoutOptionOwnedTier, Aq = lq.loadoutOptionTiers.length, cq = Yq.loadoutSlotEquippedId === lq.loadoutOptionId, uq = xq < Aq ? lq.loadoutOptionTiers[xq].loadoutTierCost : null, Wq = null !== uq && EE(mq, uq), Nq = lq.loadoutOptionId, Vq = QE();
      return (0, rq.jsxs)(rq.Fragment, {
        children: [(0, rq.jsx)(TE, {
          icon: lq.loadoutOptionIcon,
          name: lq.loadoutOptionName,
          status: 0 === xq ? Oq(`${vq}:loadoutLocked`) : Aq > 1 ? Oq(`${vq}:loadoutTier`, {
            tier: (0, Dq.X)(xq)
          }) : null,
          locked: 0 === xq,
          equipped: cq
        }), (0, rq.jsx)("p", {
          className: "BoardDescription",
          children: lq.loadoutOptionDescription
        }), (0, rq.jsx)(ZE, {
          option: lq
        }), (0, rq.jsxs)("div", {
          ref: Vq("act", Nq),
          className: "BoardActions",
          children: [null !== uq && (0, rq.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, rq.jsx)(nE, {
              cost: uq,
              loadout: mq
            }), (0, rq.jsx)(aq.p, {
              disabled: !Wq || Eq.pending,
              onClick: () => {
                gq.act(0 === xq ? "loadoutUnlock" : "loadoutUpgrade", Nq)
              },
              children: 0 === xq ? Oq(`${vq}:loadoutUnlock`) : Oq(`${vq}:loadoutUpgrade`, {
                tier: (0, Dq.X)(xq + 1)
              })
            })]
          }), null === uq && Aq > 1 && (0, rq.jsx)("span", {
            className: "BoardHint",
            children: Oq(`${vq}:loadoutMaxed`)
          }), xq > 0 && !cq && (0, rq.jsx)(aq.g, {
            disabled: Eq.pending,
            onClick: () => {
              gq.act("loadoutEquip", Nq)
            },
            children: Oq(`${vq}:loadoutEquip`)
          })]
        })]
      })
    }

    function ME(qq) {
      let {
        view: Eq,
        controller: gq,
        perk: Yq
      } = qq;
      const {
        t: lq
      } = (0, Bq.v)(), Oq = Eq.loadout, mq = lE(Oq), xq = Yq.loadoutPerkId, Aq = QE();
      return (0, rq.jsxs)(rq.Fragment, {
        children: [(0, rq.jsx)(TE, {
          icon: Yq.loadoutPerkIcon,
          name: Yq.loadoutPerkName,
          status: Yq.loadoutPerkOwned ? null : lq(`${vq}:loadoutLocked`),
          locked: !Yq.loadoutPerkOwned,
          equipped: Yq.loadoutPerkEquipped
        }), (0, rq.jsx)("p", {
          className: "BoardDescription",
          children: Yq.loadoutPerkDescription
        }), (0, rq.jsxs)("div", {
          ref: Aq("act", xq),
          className: "BoardActions",
          children: [!Yq.loadoutPerkOwned && (0, rq.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, rq.jsx)(nE, {
              cost: Yq.loadoutPerkCost,
              loadout: Oq
            }), (0, rq.jsx)(aq.p, {
              disabled: !EE(Oq, Yq.loadoutPerkCost) || Eq.pending,
              onClick: () => {
                gq.act("loadoutUnlock", xq)
              },
              children: lq(`${vq}:loadoutUnlock`)
            })]
          }), Yq.loadoutPerkOwned && !Yq.loadoutPerkEquipped && (0, rq.jsx)(aq.g, {
            disabled: mq || Eq.pending,
            onClick: () => {
              gq.act("loadoutEquip", xq)
            },
            children: lq(`${vq}:loadoutEquip`)
          }), Yq.loadoutPerkOwned && !Yq.loadoutPerkEquipped && mq && (0, rq.jsx)("span", {
            className: "BoardHint",
            children: lq(`${vq}:loadoutSocketsFullHint`)
          }), Yq.loadoutPerkEquipped && (0, rq.jsx)(aq.Q, {
            disabled: Eq.pending,
            onClick: () => {
              gq.act("loadoutUnequip", xq)
            },
            children: lq(`${vq}:loadoutUnequip`)
          })]
        })]
      })
    }

    function TE(qq) {
      let {
        icon: Eq,
        name: gq,
        status: Yq,
        locked: lq,
        equipped: Oq
      } = qq;
      const {
        t: mq
      } = (0, Bq.v)();
      return (0, rq.jsxs)(zq, {
        icon: (0, rq.jsx)(bq, {
          itemName: Eq
        }),
        name: gq,
        children: [null !== Yq && (0, rq.jsx)("span", {
          className: cq()("LoadoutStatusText", {
            Locked: lq
          }),
          children: Yq
        }), Oq && (0, rq.jsx)("span", {
          className: "BoardBadge",
          children: mq(`${vq}:loadoutEquippedBadge`)
        })]
      })
    }

    function zE(qq) {
      let {
        view: Eq,
        controller: gq
      } = qq;
      const Yq = Eq.loadout;
      if ("loadoutPerks" === Eq.slot) {
        const qq = Yq.loadoutPerks.find((qq => qq.loadoutPerkId === Eq.selectedId));
        return (0, rq.jsx)("section", {
          className: "BoardDetail",
          children: qq && (0, rq.jsx)(ME, {
            view: Eq,
            controller: gq,
            perk: qq
          })
        })
      }
      const lq = YE(Yq, Eq.slot),
        Oq = lq.loadoutSlotOptions.find((qq => qq.loadoutOptionId === Eq.selectedId));
      return (0, rq.jsx)("section", {
        className: "BoardDetail",
        children: Oq && (0, rq.jsx)(fE, {
          view: Eq,
          controller: gq,
          slot: lq,
          option: Oq
        })
      })
    }

    function SE(qq) {
      let {
        owned: Eq,
        total: gq
      } = qq;
      return gq <= 1 ? null : (0, rq.jsx)("span", {
        className: "LoadoutPips",
        children: Array.from({
          length: gq
        }, ((qq, gq) => (0, rq.jsx)("span", {
          className: cq()("LoadoutPip", {
            Filled: gq < Eq
          })
        }, gq)))
      })
    }

    function pE(qq) {
      let {
        view: Eq,
        controller: gq
      } = qq;
      const {
        t: Yq
      } = (0, Bq.v)(), lq = Eq.loadout, Oq = QE();
      return (0, rq.jsxs)("nav", {
        className: "LoadoutKit",
        "aria-label": Yq(`${vq}:loadoutKit`),
        children: [lq.loadoutSlots.map((qq => {
          const lq = qq.loadoutSlotOptions.find((Eq => Eq.loadoutOptionId === qq.loadoutSlotEquippedId));
          return (0, rq.jsxs)("button", {
            ref: Oq("section", qq.loadoutSlotKind),
            type: "button",
            className: cq()("LoadoutKitSlot", {
              Selected: Eq.slot === qq.loadoutSlotKind
            }),
            onClick: () => {
              gq.selectSlot(qq.loadoutSlotKind)
            },
            children: [(0, rq.jsx)("span", {
              className: "LoadoutKitIcon",
              children: lq && (0, rq.jsx)(bq, {
                itemName: lq.loadoutOptionIcon
              })
            }), (0, rq.jsxs)("span", {
              className: "LoadoutKitText",
              children: [(0, rq.jsxs)("span", {
                className: "LoadoutKitTop",
                children: [(0, rq.jsx)("span", {
                  className: "LoadoutKitLabel",
                  children: Yq(HE[qq.loadoutSlotKind])
                }), lq && (0, rq.jsx)(SE, {
                  owned: lq.loadoutOptionOwnedTier,
                  total: lq.loadoutOptionTiers.length
                })]
              }), (0, rq.jsx)("span", {
                className: "LoadoutKitName",
                children: null === lq || void 0 === lq ? void 0 : lq.loadoutOptionName
              })]
            })]
          }, qq.loadoutSlotKind)
        })), (0, rq.jsx)(GE, {
          view: Eq,
          controller: gq
        })]
      })
    }

    function GE(qq) {
      let {
        view: Eq,
        controller: gq
      } = qq;
      const {
        t: Yq
      } = (0, Bq.v)(), lq = Eq.loadout, Oq = lq.loadoutPerks.filter((qq => qq.loadoutPerkEquipped)), mq = QE();
      return (0, rq.jsxs)("button", {
        ref: mq("section", "loadoutPerks"),
        type: "button",
        className: cq()("LoadoutKitSlot", "LoadoutPerks", {
          Selected: "loadoutPerks" === Eq.slot
        }),
        onClick: () => {
          gq.selectSlot("loadoutPerks")
        },
        children: [(0, rq.jsxs)("span", {
          className: "LoadoutKitTop",
          children: [(0, rq.jsx)("span", {
            className: "LoadoutKitLabel",
            children: Yq(HE.loadoutPerks)
          }), (0, rq.jsx)("span", {
            className: "LoadoutPerkCount",
            children: Yq(`${vq}:loadoutPerkCount`, {
              equipped: String(Oq.length),
              max: String(lq.loadoutMaxPerks)
            })
          })]
        }), (0, rq.jsx)("span", {
          className: "LoadoutSockets",
          children: Array.from({
            length: lq.loadoutMaxPerks
          }, ((qq, Eq) => {
            const gq = Oq[Eq];
            return (0, rq.jsxs)("span", {
              className: cq()("LoadoutSocket", {
                Filled: gq,
                Empty: !gq
              }),
              children: [(0, rq.jsx)("span", {
                className: "LoadoutSocketWell",
                children: gq && (0, rq.jsx)(bq, {
                  itemName: gq.loadoutPerkIcon
                })
              }), (0, rq.jsx)("span", {
                className: "LoadoutSocketName",
                children: gq ? gq.loadoutPerkName : Yq(`${vq}:loadoutPerkSocketEmpty`)
              })]
            }, Eq)
          }))
        })]
      })
    }

    function LE(qq) {
      let {
        icon: Eq,
        name: gq,
        selected: Yq,
        equipped: lq,
        locked: Oq,
        ownedTier: mq,
        tiers: xq,
        buttonRef: Aq,
        onSelect: cq
      } = qq;
      const {
        t: uq
      } = (0, Bq.v)();
      return (0, rq.jsxs)(Tq, {
        icon: (0, rq.jsx)(bq, {
          itemName: Eq
        }),
        name: gq,
        selected: Yq,
        locked: Oq,
        buttonRef: Aq,
        onSelect: cq,
        children: [lq && (0, rq.jsx)("span", {
          className: "BoardBadge",
          children: uq(`${vq}:loadoutEquippedBadge`)
        }), Oq && (0, rq.jsx)("span", {
          className: "BoardBadge Muted",
          children: uq(`${vq}:loadoutLocked`)
        }), !Oq && (0, rq.jsx)(SE, {
          owned: mq,
          total: xq
        })]
      })
    }

    function JE(qq) {
      let {
        view: Eq,
        controller: gq
      } = qq;
      const Yq = Eq.loadout,
        lq = QE();
      if ("loadoutPerks" === Eq.slot) return (0, rq.jsx)("div", {
        className: "BoardTiles",
        children: Yq.loadoutPerks.map((qq => (0, rq.jsx)(LE, {
          icon: qq.loadoutPerkIcon,
          name: qq.loadoutPerkName,
          selected: Eq.selectedId === qq.loadoutPerkId,
          equipped: qq.loadoutPerkEquipped,
          locked: !qq.loadoutPerkOwned,
          ownedTier: 0,
          tiers: 0,
          buttonRef: lq("zW", qq.loadoutPerkId),
          onSelect: () => {
            gq.select(qq.loadoutPerkId)
          }
        }, qq.loadoutPerkId)))
      });
      const Oq = YE(Yq, Eq.slot);
      return (0, rq.jsx)("div", {
        className: "BoardTiles",
        children: Oq.loadoutSlotOptions.map((qq => (0, rq.jsx)(LE, {
          icon: qq.loadoutOptionIcon,
          name: qq.loadoutOptionName,
          selected: Eq.selectedId === qq.loadoutOptionId,
          equipped: Oq.loadoutSlotEquippedId === qq.loadoutOptionId,
          locked: 0 === qq.loadoutOptionOwnedTier,
          ownedTier: qq.loadoutOptionOwnedTier,
          tiers: qq.loadoutOptionTiers.length,
          buttonRef: lq("zW", qq.loadoutOptionId),
          onSelect: () => {
            gq.select(qq.loadoutOptionId)
          }
        }, qq.loadoutOptionId)))
      })
    }

    function kE(qq) {
      let {
        loadout: Eq
      } = qq;
      return (0, rq.jsx)(Sq, {
        coins: Eq.loadoutCoins,
        children: Eq.loadoutHeldParts.filter((qq => qq.loadoutHeldPartAmount > 0)).map((qq => (0, rq.jsx)(Zq, {
          itemName: qq.loadoutHeldPartItem,
          amount: qq.loadoutHeldPartAmount
        }, qq.loadoutHeldPartCurrency)))
      })
    }

    function RE(qq) {
      let {
        controller: Eq
      } = qq;
      const gq = (0, uq.h)(WE, Eq.getSnapshot()),
        {
          t: Yq
        } = (0, Bq.v)();
      if (null === gq.loadout) return null;
      const lq = gq.notice;
      return (0, rq.jsx)(rE, {
        view: gq,
        onDismiss: Eq.dismiss,
        children: (0, rq.jsxs)(nq, {
          open: gq.open,
          onDismiss: Eq.dismiss,
          title: Yq(`${vq}:loadoutTitle`),
          className: "ContainmentLoadoutPanel",
          headerExtra: (0, rq.jsx)(kE, {
            loadout: gq.loadout
          }),
          statusRefused: null === lq || void 0 === lq ? void 0 : lq.loadoutNoticeRefused,
          status: (0, rq.jsxs)(rq.Fragment, {
            children: [(0, rq.jsx)("span", {
              className: "LoadoutRadioBadge",
              children: Yq(`${vq}:loadoutRadioBadge`)
            }), null !== lq && Yq(`${vq}:${lq.loadoutNoticeKey}`, {
              name: lq.loadoutNoticeName,
              tier: (0, Dq.X)(lq.loadoutNoticeTier),
              max: String(gq.loadout.loadoutMaxPerks)
            })]
          }),
          children: [(0, rq.jsx)(pE, {
            view: gq,
            controller: Eq
          }), (0, rq.jsx)(JE, {
            view: gq,
            controller: Eq
          }), (0, rq.jsx)(zE, {
            view: gq,
            controller: Eq
          })]
        })
      })
    }

    function UE(qq, Eq, gq) {
      const Yq = qq.locatorEntries.find((qq => qq.locatorEntryId === gq));
      if (!Yq) return null;
      const lq = Yq.locatorEntryName;
      if ("locatorDisarm" === Eq) return Yq.locatorEntryArmed ? {
        board: FE(qq, null),
        notice: sE("locatorNoticeDisarmed", lq)
      } : null;
      if ("locatorArm" === Eq) return Yq.locatorEntryOwned && !Yq.locatorEntryArmed ? {
        board: FE(qq, gq),
        notice: sE("locatorNoticeArmed", lq)
      } : null;
      if (Yq.locatorEntryOwned || qq.locatorCoins < Yq.locatorEntryPrice) return null;
      const Oq = FE({
        ...qq,
        locatorCoins: qq.locatorCoins - Yq.locatorEntryPrice
      }, gq);
      return {
        board: {
          ...Oq,
          locatorEntries: Oq.locatorEntries.map((qq => qq.locatorEntryId === gq ? {
            ...qq,
            locatorEntryOwned: !0
          } : qq))
        },
        notice: sE("locatorNoticeBought", lq)
      }
    }

    function FE(qq, Eq) {
      return {
        ...qq,
        locatorEntries: qq.locatorEntries.map((qq => {
          const gq = qq.locatorEntryId === Eq;
          return qq.locatorEntryArmed === gq ? qq : {
            ...qq,
            locatorEntryArmed: gq
          }
        }))
      }
    }

    function sE(qq, Eq) {
      return {
        locatorNoticeKey: qq,
        locatorNoticeRefused: !1,
        locatorNoticeName: Eq
      }
    }
    const XE = "containmentLocatorView";
    class wE extends qE {
      constructor(qq, Eq, gq, Yq) {
        super(qq, Eq, gq, Yq, "locator", UE), this.snapshot = this.buildSnapshot()
      }
      messageOpens(qq) {
        return qq.locatorMessageOpens
      }
      messageNotice(qq) {
        return qq.locatorNotice
      }
      openingSelection(qq) {
        var Eq;
        const gq = qq.locatorEntries;
        return (null !== (Eq = gq.find((qq => qq.locatorEntryArmed))) && void 0 !== Eq ? Eq : gq[0]).locatorEntryId
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
    const KE = {
        locatorContained: `${vq}:locatorFlavourContained`,
        locatorEncountered: `${vq}:locatorFlavourEncountered`,
        locatorUnseen: `${vq}:locatorFlavourUnseen`
      },
      CE = {
        codexAnyDifficulty: null,
        codexNormalOnly: `${vq}:locatorAttunedNormal`,
        codexHardOnly: `${vq}:locatorAttunedHard`
      };

    function IE() {
      return (0, rq.jsx)(rq.Fragment, {
        children: Array.from({
          length: 5
        }, ((qq, Eq) => (0, rq.jsx)("span", {
          className: "LocatorFly",
          children: (0, rq.jsx)("img", {
            src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAICAYAAADwdn+XAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYElEQVR4nGNgoBboMlb5LyUjD8YgNtHyJ6/d+Q/CILa1lz9YAbo4DCDLYxjQv3gt3AYQG90AdHkUQ/qhkjAb0BURkgcDmAQMo7sSXR7deyiGoIvDvIOsGasB+ACyBmTNACS0go3ibhumAAAAAElFTkSuQmCC",
            alt: "",
            draggable: !1
          })
        }, Eq)))
      })
    }

    function eE(qq) {
      let {
        entry: Eq
      } = qq;
      const {
        t: gq
      } = (0, Bq.v)();
      return Eq.locatorEntryArmed ? (0, rq.jsx)("span", {
        className: "BoardBadge Armed",
        children: gq(`${vq}:locatorArmedBadge`)
      }) : Eq.locatorEntryOwned ? (0, rq.jsx)("span", {
        className: "BoardBadge",
        children: gq(`${vq}:locatorOwnedBadge`)
      }) : null
    }

    function DE(qq) {
      let {
        entry: Eq,
        coins: gq,
        inTile: Yq = !1
      } = qq;
      return (0, rq.jsx)(Zq, {
        itemName: hq,
        amount: Eq.locatorEntryPrice,
        Fc: gq,
        inTile: Yq
      })
    }

    function qg(qq) {
      let {
        view: Eq,
        controller: gq,
        entry: Yq
      } = qq;
      const {
        t: lq
      } = (0, Bq.v)(), Oq = Yq.locatorEntryId, mq = Eq.locators.locatorEntries.find((qq => qq.locatorEntryArmed && qq !== Yq));
      return (0, rq.jsxs)("div", {
        className: "BoardActions",
        children: [Yq.locatorEntryArmed && (0, rq.jsx)(aq.Q, {
          disabled: Eq.pending,
          onClick: () => {
            gq.act("locatorDisarm", Oq)
          },
          children: lq(`${vq}:locatorDisarm`)
        }), Yq.locatorEntryOwned && !Yq.locatorEntryArmed && (0, rq.jsx)(aq.g, {
          disabled: Eq.pending,
          onClick: () => {
            gq.act("locatorArm", Oq)
          },
          children: lq(`${vq}:locatorArm`)
        }), !Yq.locatorEntryOwned && (0, rq.jsxs)("div", {
          className: "LocatorBuy",
          children: [(0, rq.jsx)(DE, {
            entry: Yq,
            coins: Eq.locators.locatorCoins
          }), (0, rq.jsx)(aq.p, {
            disabled: Eq.locators.locatorCoins < Yq.locatorEntryPrice || Eq.pending,
            onClick: () => {
              gq.act("locatorBuy", Oq)
            },
            children: lq(`${vq}:locatorBuy`)
          })]
        }), mq && !Yq.locatorEntryArmed && (0, rq.jsx)("span", {
          className: "BoardHint",
          children: lq(`${vq}:locatorReplacesHint`, {
            name: mq.locatorEntryName
          })
        })]
      })
    }

    function Eg(qq) {
      let {
        entry: Eq
      } = qq;
      return "locatorUnseen" === Eq.locatorEntryStanding ? (0, rq.jsx)(bq, {
        itemName: "Compass"
      }) : (0, rq.jsx)(iq, {
        anomalyId: Eq.locatorEntryId,
        caught: "locatorContained" === Eq.locatorEntryStanding
      })
    }

    function gg(qq) {
      let {
        view: Eq,
        controller: gq,
        entry: Yq
      } = qq;
      const {
        t: lq
      } = (0, Bq.v)(), Oq = CE[Yq.locatorEntryDifficulty];
      return (0, rq.jsxs)("section", {
        className: "BoardDetail",
        children: [(0, rq.jsxs)("div", {
          className: cq()("LocatorLabel", {
            Armed: Yq.locatorEntryArmed
          }),
          children: [(0, rq.jsx)(zq, {
            icon: (0, rq.jsx)(Eg, {
              entry: Yq
            }),
            name: lq(`${vq}:locatorName`, {
              name: Yq.locatorEntryName
            }),
            children: (0, rq.jsx)(eE, {
              entry: Yq
            })
          }), (0, rq.jsx)("p", {
            className: "BoardDescription",
            children: lq(Yq.locatorEntryArmed ? `${vq}:locatorFlavourArmed` : KE[Yq.locatorEntryStanding])
          }), null !== Oq && (0, rq.jsx)("p", {
            className: "LocatorAttuned",
            children: lq(Oq)
          }), (0, rq.jsx)("p", {
            className: "BoardDescription LocatorUsage",
            children: lq(`${vq}:locatorUsage`)
          })]
        }), (0, rq.jsx)(qg, {
          view: Eq,
          controller: gq,
          entry: Yq
        })]
      })
    }

    function Yg(qq) {
      let {
        controller: Eq
      } = qq;
      const gq = (0, uq.h)(XE, Eq.getSnapshot()),
        {
          t: Yq
        } = (0, Bq.v)(),
        lq = gq.locators;
      if (null === lq) return null;
      const Oq = lq.locatorEntries.find((qq => qq.locatorEntryId === gq.selectedId)),
        mq = gq.notice;
      return (0, rq.jsxs)(nq, {
        open: gq.open,
        onDismiss: Eq.dismiss,
        title: Yq(`${vq}:locatorTitle`),
        className: "ContainmentLocatorPanel",
        decor: (0, rq.jsx)(IE, {}),
        headerExtra: (0, rq.jsx)(Sq, {
          coins: lq.locatorCoins
        }),
        statusRefused: null === mq || void 0 === mq ? void 0 : mq.locatorNoticeRefused,
        status: (0, rq.jsxs)(rq.Fragment, {
          children: [(0, rq.jsx)("span", {
            className: "LocatorKeeperBadge",
            children: Yq(`${vq}:locatorKeeperName`)
          }), null !== mq && Yq(`${vq}:${mq.locatorNoticeKey}`, {
            name: mq.locatorNoticeName
          })]
        }),
        children: [(0, rq.jsx)("div", {
          className: "BoardTiles",
          children: lq.locatorEntries.map((qq => (0, rq.jsxs)(Tq, {
            icon: (0, rq.jsx)(Eg, {
              entry: qq
            }),
            name: qq.locatorEntryName,
            selected: qq === Oq,
            locked: !1,
            className: cq()("LocatorTag", {
              Armed: qq.locatorEntryArmed
            }),
            onSelect: () => {
              Eq.select(qq.locatorEntryId)
            },
            children: [(0, rq.jsx)(eE, {
              entry: qq
            }), !qq.locatorEntryOwned && (0, rq.jsx)(DE, {
              entry: qq,
              coins: lq.locatorCoins,
              inTile: !0
            })]
          }, qq.locatorEntryId)))
        }), (0, rq.jsx)(gg, {
          view: gq,
          controller: Eq,
          entry: Oq
        })]
      })
    }

    function lg(qq) {
      let {
        loadout: Eq,
        codex: gq,
        locator: Yq
      } = qq;
      return (0, rq.jsxs)(rq.Fragment, {
        children: [(0, rq.jsx)(RE, {
          controller: Eq
        }), (0, rq.jsx)(eq, {
          controller: gq
        }), (0, rq.jsx)(Yg, {
          controller: Yq
        })]
      })
    }
    var Og = gq(38514);
    class mg {
      constructor(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.sendCommand = qq, this.budget = void 0, this.awaitingReply = !1, this.replyTimer = null, this.listeners = new Set, this.budget = new Og.b({
          spacingMs: 0,
          now: Eq
        }), this.budget.subscribe((() => {
          this.notify()
        }))
      }
      isPending() {
        return this.awaitingReply || this.budget.isPacing()
      }
      send(qq, Eq) {
        return !this.isPending() && (this.awaitingReply = !0, this.replyTimer = setTimeout((() => {
          this.replyTimer = null, this.awaitingReply = !1, Eq(), this.notify()
        }), 8e3), this.budget.start(), this.sendCommand(qq), !0)
      }
      onReply() {
        this.awaitingReply = !1, this.clearReplyTimer()
      }
      subscribe(qq) {
        return this.listeners.add(qq), () => {
          this.listeners.delete(qq)
        }
      }
      dispose() {
        this.clearReplyTimer(), this.budget.dispose(), this.listeners.clear()
      }
      clearReplyTimer() {
        null !== this.replyTimer && (clearTimeout(this.replyTimer), this.replyTimer = null)
      }
      notify() {
        for (const qq of this.listeners) qq()
      }
    }
    var xg = gq(38510);
    const Ag = new Map([
      ["npc_general", VE],
      ["npc_tentacle_guy", xg]
    ]);

    function cg(qq) {
      const Eq = Ag.get(qq);
      if (void 0 === Eq) return null;
      const gq = document.createElement("img");
      return gq.src = Eq, gq.alt = "", gq.draggable = !1, gq.style.imageRendering = "pixelated", gq
    }
    const ug = function() {
      let qq, Eq = !1,
        gq = null,
        Aq = null;
      const cq = [],
        uq = qq => {
          for (const Eq of cq) Eq !== qq && Eq.close();
          (0, xq.m)()
        },
        Bq = qq => {
          qq && (0, xq.h)()
        },
        Wq = new mg((Eq => {
          qq.sendCommand(Eq)
        })),
        Nq = new NE((qq => {
          mq.i.TV(WE, qq, !0)
        }), uq, Bq, Wq),
        aq = new Lq((qq => {
          mq.i.TV(Gq, qq, !0)
        }), uq, Bq),
        Vq = new wE((qq => {
          mq.i.TV(XE, qq, !0)
        }), uq, Bq, Wq);
      cq.push(Nq, aq, Vq);
      return {
        onCreate: Eq => {
          qq = Eq, gq = (0, xq.r)(null, {
            content: (0, Yq.createElement)(lg, {
              loadout: Nq,
              codex: aq,
              locator: Vq
            }),
            onClose: () => {
              for (const qq of cq) qq.close()
            }
          }), Aq = (0, Oq.e)(cg)
        },
        onReceivedMessageFromServer: (qq, Eq) => {
          "containmentLoadout" === qq ? Nq.ga(Eq) : "containmentLoadoutClose" === qq ? Nq.isOpen() && (Nq.close(), (0, xq.e)()) : "containmentCodex" === qq ? aq.ga(Eq) : "containmentLocator" === qq && Vq.ga(Eq)
        },
        SB: () => {
          Eq || lq.b.get("loadingOverlayVisible") || (Eq = !0, qq.sendCommand("containmentEntered"))
        },
        onClose: () => {
          var qq, Eq;
          null === (qq = gq) || void 0 === qq || qq(), gq = null, null === (Eq = Aq) || void 0 === Eq || Eq(), Aq = null;
          for (const gq of cq) gq.dispose();
          Wq.dispose()
        }
      }
    }
  },
  36935: (qq, Eq, gq) => {
    gq.d(Eq, {
      A: () => Sq,
      E: () => pq,
      I: () => Tq,
      L: () => Gq,
      b: () => Aq,
      e: () => bq,
      h: () => xq,
      i: () => Mq,
      j: () => hq,
      m: () => yq,
      p: () => fq,
      s: () => Zq,
      u: () => vq,
      y: () => zq
    });
    var Yq = gq(38);
    const lq = {
        codeBlock: ["codeBlockIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "worldCodeButton", "exportButton", "helpButton"],
        worldCode: ["worldCodeIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "exportButton", "helpButton"]
      },
      Oq = ["docsButton", "docsPanel", "docsClientOptionsTab", "docsClientOptions", "docsApiReferenceTab", "docsApiReference", "docsCallbacksTab", "docsCallbacks", "hideDocsButton"],
      mq = ["aiHelperButton", "aiPanel", "aiAskBox", "aiModelChip", "aiAnswer", "aiEdits", "aiGear", "aiNotes", "aiGameSettings", "hideAiHelperButton"],
      xq = Oq.filter((qq => "docsButton" !== qq)),
      Aq = mq.filter((qq => "aiHelperButton" !== qq)),
      cq = "codeEditorTutorials",
      uq = {
        codeBlockIntro: "codeBlockIntroShown",
        worldCodeIntro: "worldCodeIntroShown"
      },
      Bq = {
        welcome: "welcomeComplete",
        docsOverview: "docsOverviewComplete",
        aiHelperOverview: "aiHelperOverviewComplete"
      };
    let Wq = null,
      Nq = null;
    const aq = new Set,
      Vq = new Set;
    let dq = null;
    const jq = new Set,
      Hq = new Set;

    function oq() {
      Hq.forEach((qq => {
        qq()
      }))
    }

    function Pq() {
      if (!Wq) {
        const qq = Yq.i.getItem(cq);
        Wq = {
          codeBlockIntroShown: !1,
          worldCodeIntroShown: !1,
          welcomeComplete: !1,
          docsOverviewComplete: !1,
          aiHelperOverviewComplete: !1,
          ..."object" === typeof qq && null !== qq ? qq : {}
        }
      }
      return Wq
    }

    function Qq(qq) {
      const Eq = Pq();
      Eq[qq] || (Wq = {
        ...Eq,
        [qq]: !0
      }, Yq.i.setItem(cq, Wq))
    }

    function yq(qq) {
      return "docsOverview" === qq ? Oq : "aiHelperOverview" === qq ? mq : Nq ? lq[Nq] : []
    }

    function tq(qq) {
      return ("worldCodeButton" !== qq || !Pq().worldCodeIntroShown) && !jq.has(qq)
    }

    function rq(qq) {
      var Eq;
      return (null === (Eq = dq) || void 0 === Eq ? void 0 : Eq.name) === qq ? dq.stepsDone : aq
    }

    function vq(qq, Eq) {
      if (! function(qq) {
          return dq ? dq.name === qq : "welcome" === qq
        }(qq) || !tq(Eq) || rq(qq).has(Eq)) return !1;
      if (dq) return !0;
      const gq = uq[Eq];
      return gq ? !Pq()[gq] || Vq.has(Eq) : !Pq()[Bq[qq]]
    }

    function hq(qq) {
      var Eq;
      return null !== (Eq = yq(qq).find((Eq => vq(qq, Eq)))) && void 0 !== Eq ? Eq : null
    }

    function nq(qq) {
      var Eq;
      Qq(Bq[qq]), (null === (Eq = dq) || void 0 === Eq ? void 0 : Eq.name) === qq && (dq = null)
    }

    function bq(qq) {
      const Eq = (dq ? [dq.name] : ["welcome", "docsOverview"]).find((Eq => hq(Eq) === qq));
      if (!Eq) return;
      rq(Eq).add(qq);
      const gq = uq[qq];
      gq && (Qq(gq), dq || Vq.add(qq)), null === hq(Eq) && nq(Eq), oq()
    }

    function iq(qq, Eq) {
      const gq = yq(qq),
        Yq = rq(qq);
      for (let lq = gq.indexOf(Eq) - 1; lq >= 0; lq--)
        if (Yq.has(gq[lq]) && tq(gq[lq])) return gq[lq];
      return null
    }

    function Zq(qq, Eq) {
      return null !== iq(qq, Eq)
    }

    function fq(qq, Eq) {
      const gq = iq(qq, Eq);
      gq && (rq(qq).delete(gq), oq())
    }

    function Mq(qq) {
      nq(qq), "welcome" === qq && yq("welcome").forEach((qq => {
        const Eq = uq[qq];
        Eq && Qq(Eq)
      })), oq()
    }

    function Tq(qq) {
      dq = {
        name: qq,
        stepsDone: new Set
      }, oq()
    }

    function zq() {
      (dq || 0 !== aq.size || 0 !== Vq.size) && (dq = null, aq.clear(), Vq.clear(), oq())
    }

    function Sq(qq, Eq) {
      const gq = Eq ? qq : Nq === qq ? null : Nq;
      gq !== Nq && (Nq = gq, oq())
    }

    function pq(qq, Eq) {
      jq.has(qq) === Eq && (Eq ? jq.delete(qq) : jq.add(qq), oq())
    }

    function Gq(qq) {
      return Hq.add(qq), () => {
        Hq.delete(qq)
      }
    }
  },
  39246: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/breach-zero-uncaught.c7d4410f99269ac1ee2f.webp"
  },
  39252: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/breach-zero.ef5aacecf502228cd20b.webp"
  },
  39258: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/brood-father-uncaught.ee678432c71b7061fae1.webp"
  },
  39266: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/brood-father.e48391955a574c1155fa.webp"
  },
  39271: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/carousel-uncaught.a92757620f569f31d7d2.webp"
  },
  39273: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/carousel.5fc13db7958067d6e1a3.webp"
  },
  39275: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/deadlock-uncaught.feadbdbbf2d040dce5c0.webp"
  },
  39284: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/deadlock.2bcaeaa57376fd78ddcb.webp"
  },
  39286: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/frost-revenant-uncaught.c0271636eeae988b1a40.webp"
  },
  39290: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/frost-revenant.fed6021646d7f0f81876.webp"
  },
  39294: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/hollow-choir-uncaught.7eaab76a15f82bd79558.webp"
  },
  39298: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/hollow-choir.05f9c51994aecece852a.webp"
  },
  39301: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/magma-warden-uncaught.5308736fbb8a503cdfc7.webp"
  },
  39306: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/magma-warden.cc4302a49a39ae962a31.webp"
  },
  39309: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/patient-zero-uncaught.1f9ec012a14c4dbdcc8f.webp"
  },
  39311: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/patient-zero.cc76984bb20e9f9ace76.webp"
  },
  39313: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/siege-engine-uncaught.88e0ad7fec37ba2b4a2e.webp"
  },
  39316: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/siege-engine.b2e2382e415f4ae470ac.webp"
  },
  39321: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/warp-stalker-uncaught.c3b1b82ecb18446b71b0.webp"
  },
  39327: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/warp-stalker.851972c629601b668aa7.webp"
  },
  38510: qq => {
    qq.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYElEQVR4nGNgIBIwovH/45JnRFaUGN+Comr+whq4GiZ0RVycnGAMAlAxsC0sMN2fvn9DodEBzEQGdUV5hvNnV4JpGJuPkwtTIQh4umZhZWMonDqjGCsbHcCCBkQjs0kDAPeaHpfX1eroAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);