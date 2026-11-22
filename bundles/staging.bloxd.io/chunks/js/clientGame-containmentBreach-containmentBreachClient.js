export const id = 14;
export const ids = [14];
export const modules = {
  38865: (kk, ek, ik) => {
    var Dk = {
      "./breach-zero-uncaught.webp": 38874,
      "./breach-zero.webp": 38882,
      "./brood-father-uncaught.webp": 38888,
      "./brood-father.webp": 38897,
      "./carousel-uncaught.webp": 38906,
      "./carousel.webp": 38914,
      "./deadlock-uncaught.webp": 38919,
      "./deadlock.webp": 38924,
      "./frost-revenant-uncaught.webp": 38929,
      "./frost-revenant.webp": 38936,
      "./hollow-choir-uncaught.webp": 38944,
      "./hollow-choir.webp": 38952,
      "./magma-warden-uncaught.webp": 38956,
      "./magma-warden.webp": 38963,
      "./patient-zero-uncaught.webp": 38968,
      "./patient-zero.webp": 38972,
      "./siege-engine-uncaught.webp": 38974,
      "./siege-engine.webp": 38981,
      "./warp-stalker-uncaught.webp": 38985,
      "./warp-stalker.webp": 38989
    };

    function fk(kk) {
      var ek = Sk(kk);
      return ik(ek)
    }

    function Sk(kk) {
      if (!ik.o(Dk, kk)) {
        var ek = new Error("Cannot find module '" + kk + "'");
        throw ek.code = "MODULE_NOT_FOUND", ek
      }
      return Dk[kk]
    }
    fk.keys = function() {
      return Object.keys(Dk)
    }, fk.resolve = Sk, kk.exports = fk, fk.id = 38865
  },
  36486: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => jk,
      i: () => Ck,
      j: () => Ak,
      m: () => Uk
    });
    var Dk = ik(1021),
      fk = ik.n(Dk),
      Sk = ik(60),
      bk = ik(75),
      rk = ik(1349),
      Pk = ik(1410),
      mk = ik(1345),
      Mk = ik(1261),
      Kk = ik(1172),
      xk = ik(36489),
      nk = ik(1066);

    function Uk(kk) {
      const [ek, ik] = (0, Sk.useState)((() => (0, xk.l)(kk)));
      return (0, Sk.useEffect)((() => (ik((0, xk.l)(kk)), (0, xk.K)((() => {
        ik((0, xk.l)(kk))
      })))), [kk]), ek
    }

    function Hk(kk, ek) {
      "function" === typeof kk ? kk(ek) : kk && (kk.current = ek)
    }

    function wk(kk) {
      let {
        tutorial: ek,
        step: ik,
        enabled: Dk = !0
      } = kk;
      const fk = Uk(ek);
      return Dk && fk === ik
    }

    function lk(kk, ek) {
      const ik = (0, xk.p)(kk),
        Dk = ik.indexOf(ek);
      return !ik.slice(Dk + 1).some((ek => (0, xk.v)(kk, ek)))
    }

    function pk(kk, ek, ik, Dk) {
      let {
        tutorial: fk,
        step: Sk,
        waitForClick: bk = !1,
        onPrevious: rk
      } = kk;
      const Pk = ek && (0, xk.u)(fk, Sk),
        mk = ek && !lk(fk, Sk),
        Kk = bk ? Dk : ik;
      let nk = null;
      Pk ? nk = () => {
        null === rk || void 0 === rk || rk(), (0, xk.s)(fk, Sk)
      } : mk && (nk = () => {
        (0, xk.j)(fk)
      }), (0, Mk.u)("popup", null !== Kk && void 0 !== Kk ? Kk : ik, nk, ek && null !== Kk, null, Pk ? void 0 : "controller:menusSkipTutorial")
    }

    function yk(kk) {
      let {
        tutorial: ek,
        step: ik,
        text: Dk,
        waitForClick: fk = !1,
        onPrevious: Sk
      } = kk;
      const {
        t: bk
      } = (0, Kk.D)(), rk = lk(ek, ik);
      return (0, nk.jsxs)(nk.Fragment, {
        children: [(0, nk.jsx)("div", {
          className: "TutorialStepText",
          children: Dk
        }), (0, nk.jsxs)("div", {
          className: "TutorialStepButtons",
          children: [(0, xk.u)(ek, ik) && (0, nk.jsx)(Pk.j, {
            className: "TutorialStepButton",
            onClick: () => {
              null === Sk || void 0 === Sk || Sk(), (0, xk.s)(ek, ik)
            },
            children: bk("tutorial:back")
          }), !fk && (0, nk.jsx)(Pk.f, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, xk.e)(ik)
            },
            padDefaultFocus: !0,
            children: bk(rk ? "tutorial:done" : "tutorial:next")
          }), !rk && (0, nk.jsx)(Pk.j, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, xk.j)(ek)
            },
            children: bk("tutorial:skip")
          })]
        })]
      })
    }
    const Yk = 6;

    function Lk(kk) {
      let {
        rect: ek,
        margin: ik
      } = kk;
      const Dk = Math.max(0, ek.top - ik),
        fk = ek.bottom + ik,
        Sk = Math.max(0, ek.left - ik),
        bk = ek.right + ik;
      return (0, nk.jsxs)(nk.Fragment, {
        children: [(0, nk.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: 0,
            left: 0,
            right: 0,
            height: Dk
          }
        }), (0, nk.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: fk,
            left: 0,
            right: 0,
            bottom: 0
          }
        }), (0, nk.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: Dk,
            left: 0,
            width: Sk,
            height: fk - Dk
          }
        }), (0, nk.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: Dk,
            left: bk,
            right: 0,
            height: fk - Dk
          }
        })]
      })
    }

    function Ck(kk) {
      let {
        target: ek,
        placement: ik,
        boxRef: Dk,
        className: Pk,
        spotlightMargin: Mk = Yk,
        children: Kk
      } = kk;
      const {
        getArrowProps: xk,
        getTooltipProps: Uk,
        setTooltipRef: Hk,
        setTriggerRef: wk
      } = (0, rk.e)({
        placement: ik,
        trigger: null,
        visible: !0,
        interactive: !0,
        closeOnOutsideClick: !1,
        offset: [0, Mk]
      });
      (0, Sk.useLayoutEffect)((() => {
        wk(ek)
      }), [ek, wk]);
      const lk = function(kk, ek) {
        const [ik, Dk] = (0, Sk.useState)(null);
        return (0, Sk.useEffect)((() => {
          if (!ek || !kk) return void Dk(null);
          let ik = 0,
            fk = null;
          const Sk = () => {
            const ek = kk.getBoundingClientRect();
            fk && ek.left === fk.left && ek.top === fk.top && ek.width === fk.width && ek.height === fk.height || (fk = ek, Dk(ek)), ik = requestAnimationFrame(Sk)
          };
          return Sk(), () => {
            cancelAnimationFrame(ik)
          }
        }), [kk, ek]), ik
      }(ek, !0);
      (0, Sk.useEffect)((() => {
        null === ek || void 0 === ek || ek.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        })
      }), [ek]);
      const pk = (0, Sk.useCallback)((kk => {
        Hk(kk), Dk && (Dk.current = kk)
      }), [Hk, Dk]);
      return (0, bk.createPortal)((0, nk.jsxs)(nk.Fragment, {
        children: [lk && (0, nk.jsx)(Lk, {
          rect: lk,
          margin: Mk
        }), (0, nk.jsxs)("div", {
          ref: pk,
          ...Uk({
            className: fk()("tooltip-container SmallTextLight TutorialStep", Pk)
          }),
          children: [Kk, (0, nk.jsx)("div", {
            ...xk({
              className: "tooltip-arrow"
            })
          })]
        })]
      }), (0, mk.m)())
    }
    const Ak = (0, Sk.forwardRef)((function(kk, ek) {
      let {
        placement: ik = "right",
        children: Dk,
        ...fk
      } = kk;
      const bk = wk(fk),
        rk = (0, Sk.useRef)(null),
        Pk = (0, Sk.useRef)(null);
      pk(fk, bk, rk, Pk);
      const [mk, Mk] = (0, Sk.useState)(null), Kk = Dk.ref, xk = (0, Sk.useCallback)((kk => {
        Pk.current = kk, Mk(kk), Hk(ek, kk), Hk(Kk, kk)
      }), [ek, Kk]);
      return (0, nk.jsxs)(nk.Fragment, {
        children: [(0, Sk.cloneElement)(Dk, {
          ref: xk
        }), bk && (0, nk.jsx)(Ck, {
          target: mk,
          placement: ik,
          boxRef: rk,
          children: (0, nk.jsx)(yk, {
            ...fk
          })
        })]
      })
    }));

    function jk(kk) {
      const ek = wk(kk),
        ik = (0, Sk.useRef)(null);
      return pk(kk, ek, ik, null), ek ? (0, bk.createPortal)((0, nk.jsx)("div", {
        className: "TutorialCentreBackdrop",
        children: (0, nk.jsx)("div", {
          ref: ik,
          className: "tooltip-container SmallTextLight TutorialStep TutorialCentreStep",
          children: (0, nk.jsx)(yk, {
            ...kk
          })
        })
      }), (0, mk.m)()) : null
    }
  },
  38123: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => bk
    });
    const Dk = 4,
      fk = 12e3,
      Sk = 1e3;
    class bk {
      constructor() {
        let {
          limit: kk = Dk,
          windowMs: ek = fk,
          spacingMs: ik = Sk,
          now: bk = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = kk, this.windowMs = ek, this.spacingMs = ik, this.now = bk
      }
      isPacing() {
        return !this.canSendPriority() || this.isPriorityWaiting()
      }
      canSendPriority() {
        return this.prune(), this.sent.length < this.limit && this.now() - this.lastSentAt >= this.spacingMs
      }
      tryStart() {
        for (const kk of this.priority) kk.flush();
        return !this.isPacing() && (this.start(), !0)
      }
      start() {
        this.prune();
        const kk = this.now();
        this.sent.push(kk), this.lastSentAt = kk, this.schedule(), this.notify()
      }
      addPriority(kk) {
        return this.priority.add(kk), () => {
          this.priority.delete(kk)
        }
      }
      subscribe(kk) {
        return this.listeners.add(kk), () => {
          this.listeners.delete(kk)
        }
      }
      dispose() {
        this.clearTimer(), this.sent = [], this.listeners.clear(), this.priority.clear()
      }
      isPriorityWaiting() {
        for (const kk of this.priority)
          if (kk.waiting()) return !0;
        return !1
      }
      prune() {
        const kk = this.now() - this.windowMs;
        for (; this.sent.length > 0 && this.sent[0] <= kk;) this.sent.shift()
      }
      schedule() {
        this.clearTimer();
        const kk = this.now(),
          ek = this.lastSentAt + this.spacingMs,
          ik = Math.min(ek > kk ? ek : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        ik !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, ik - kk)))
      }
      notify() {
        for (const kk of this.listeners) kk()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  36151: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Sk,
      g: () => Hk,
      i: () => wk,
      m: () => rk,
      p: () => xk,
      t: () => lk,
      u: () => Kk,
      v: () => yk,
      w: () => Uk,
      x: () => pk
    });
    var Dk = ik(22),
      fk = ik(26);
    const Sk = "clientGameInventoryButtonsChanged",
      bk = new Map;

    function rk() {
      return [...bk.values()].sort(((kk, ek) => {
        var ik, Dk;
        return (null !== (ik = kk.order) && void 0 !== ik ? ik : 0) - (null !== (Dk = ek.order) && void 0 !== Dk ? Dk : 0)
      }))
    }
    let Pk = null;

    function mk(kk) {
      Pk = kk
    }
    let Mk = !1;

    function Kk(kk) {
      Mk = !0;
      try {
        kk.onClick()
      } finally {
        Mk = !1
      }
      kk.panel && "clientGame" === Dk.b.get("openInGameMenuName") && mk(kk.id)
    }

    function xk() {
      return Mk
    }

    function nk() {
      return rk().filter((kk => kk.panel && !kk.disabled))
    }

    function Uk(kk) {
      const ek = nk(),
        ik = ek.findIndex((kk => kk.id === Pk));
      return !(ik < 0 || ek.length < 2) && (Kk(ek[(ik + kk + ek.length) % ek.length]), !0)
    }

    function Hk() {
      return null !== Pk && nk().length > 1
    }

    function wk() {
      mk(null)
    }

    function lk() {
      "inventory" !== Dk.b.get("openInGameMenuName") && mk(null)
    }

    function pk() {
      const kk = Pk;
      return mk(null), kk
    }

    function yk(kk) {
      return bk.set(kk.id, kk), fk.j.tm(Sk, rk(), !0), () => {
        bk.get(kk.id) === kk && (bk.delete(kk.id), fk.j.tm(Sk, rk()))
      }
    }
  },
  38105: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Dk
    });
    class Dk {
      constructor(kk, ek, ik) {
        this.tm = kk, this.beforeOpen = ek, this.afterClose = ik, this.open = !1, this.aU = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.aU && (this.open = !0, this.beforeOpen(this), this.emit())
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
      closePanel(kk) {
        this.open = !1, this.onClosed(), this.emit(), this.afterClose(kk)
      }
      onClosed() {}
      dispose() {
        this.open = !1, this.emit(), this.aU = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.aU || (this.snapshot = this.buildSnapshot(), this.tm(this.snapshot))
      }
    }
  },
  36143: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => rk,
      d: () => wk,
      h: () => lk,
      j: () => xk,
      n: () => mk,
      r: () => Hk,
      v: () => nk,
      z: () => Mk
    });
    var Dk = ik(22),
      fk = ik(26),
      Sk = ik(1273),
      bk = ik(36151);
    const rk = "clientGameUiChanged";
    let Pk = null;

    function mk() {
      return Pk
    }

    function Mk(kk, ek) {
      const ik = {
        content: kk,
        menu: ek
      };
      return Pk = ik, fk.j.tm(rk, Pk, !0), () => {
        Pk === ik && (Pk = null, Uk = !1, wk(), fk.j.tm(rk, null))
      }
    }
    let Kk = null;

    function xk() {
      return Kk
    }

    function nk(kk) {
      return Kk = kk, () => {
        Kk === kk && (Kk = null)
      }
    }
    let Uk = !1;

    function Hk() {
      const kk = Dk.b.get("openInGameMenuName");
      "clientGame" !== kk && (Uk = "inventory" === kk), (0, bk.p)() || (0, bk.i)(), (0, Sk.s)(Sk.c), Dk.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function wk() {
      pk(!1)
    }

    function lk() {
      pk(Uk)
    }

    function pk(kk) {
      "clientGame" === Dk.b.get("openInGameMenuName") && Dk.b.set({
        openInGameMenuName: kk ? "inventory" : null
      }), kk || (0, bk.i)(), Uk = !1
    }
  },
  38859: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      default: () => Ki
    });
    var Dk = ik(60);
    var fk = ik(22),
      Sk = ik(1868),
      bk = ik(26),
      rk = ik(36143),
      Pk = ik(1021),
      mk = ik.n(Pk),
      Mk = ik(1406),
      Kk = ik(1172),
      xk = ik(4471),
      nk = ik(1329),
      Uk = ik(1410),
      Hk = ik(1877),
      wk = ik(1345),
      lk = ik(1858),
      pk = ik(1922),
      yk = ik(197);
    const Yk = ik(38865),
      Lk = Object.fromEntries(Yk.keys().map((kk => [kk.replace(/^\.\/(.*)\.webp$/, "$1"), Yk(kk)]))),
      Ck = new Set;

    function Ak(kk, ek) {
      const ik = ek ? kk : `${kk}-uncaught`,
        Dk = (0, yk.c)(Lk, ik);
      return void 0 !== Dk || Ck.has(ik) || (Ck.add(ik), console.warn(`Containment Breach has no mugshot ${ik}: run tools/harnessCutouts/ContainmentMugshotCapture.ts`)), Dk
    }
    var jk = ik(1066);
    const sk = "containmentBreach",
      dk = "Gold Coin";

    function Vk(kk) {
      let {
        open: ek,
        onDismiss: ik,
        title: Dk,
        className: fk,
        decor: Sk,
        headerExtra: bk,
        status: rk,
        statusRefused: Pk = !1,
        children: Mk
      } = kk;
      const Kk = `${fk}Title`;
      return (0, jk.jsx)(xk.e, {
        show: ek,
        close: ik,
        togglePointerLock: !1,
        className: "ContainmentBoardOverlay",
        children: (0, jk.jsxs)("section", {
          className: mk()("ContainmentBoardPanel", fk),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": Kk,
          children: [Sk && (0, jk.jsx)("div", {
            className: "BoardDecor",
            "aria-hidden": "true",
            children: Sk
          }), (0, jk.jsxs)("header", {
            className: "BoardHeader",
            children: [(0, jk.jsx)("h2", {
              id: Kk,
              className: "VisuallyHidden",
              children: Dk
            }), bk, (0, jk.jsx)(Uk.n, {
              onClick: ik
            })]
          }), (0, jk.jsx)("div", {
            className: "BoardBody",
            children: Mk
          }), void 0 !== rk && (0, jk.jsx)("footer", {
            className: mk()("BoardStatus", {
              Refused: Pk
            }),
            children: rk
          })]
        })
      })
    }

    function Fk(kk) {
      let {
        itemName: ek
      } = kk;
      return (0, jk.jsx)(Hk.c, {
        itemName: ek,
        amount: 0
      })
    }

    function uk(kk) {
      let {
        anomalyId: ek,
        caught: ik
      } = kk;
      const fk = (0, Dk.useRef)(null);
      return (0, nk.d)(fk, !ik), (0, jk.jsx)("span", {
        ref: fk,
        className: mk()("BoardMugshot", {
          Uncaught: !ik
        }),
        children: (0, jk.jsx)("img", {
          src: Ak(ek, ik),
          alt: "",
          draggable: !1
        })
      })
    }

    function qk(kk) {
      let {
        itemName: ek,
        amount: ik,
        XM: Dk,
        inTile: fk = !1
      } = kk;
      return (0, jk.jsx)(wk.i, {
        delayShow: 200,
        hoverOnly: fk,
        placement: "top",
        tooltipClassName: "BoardChipTooltipBox",
        tooltipInner: (0, jk.jsx)(zk, {
          itemName: ek,
          amount: ik,
          XM: Dk
        }),
        children: (0, jk.jsxs)("span", {
          className: mk()("BoardChip", {
            Short: void 0 !== Dk && Dk < ik
          }),
          children: [(0, jk.jsx)("span", {
            className: "BoardChipIcon",
            children: (0, jk.jsx)(Fk, {
              itemName: ek
            })
          }), ik.toLocaleString()]
        })
      })
    }
    const Ik = /^(.*?)\s*Salvaged from (?:an? )?(.+?)\.?$/;

    function zk(kk) {
      var ek;
      let {
        itemName: ik,
        amount: Dk,
        XM: fk
      } = kk;
      const {
        t: Sk
      } = (0, Kk.D)(), bk = (0, pk.e)("itemInfo", (kk => kk[ik])), {
        lore: rk,
        droppedBy: Pk
      } = function(kk) {
        if ("string" !== typeof kk) return {
          lore: kk,
          droppedBy: null
        };
        const ek = Ik.exec(kk);
        return null === ek ? {
          lore: kk,
          droppedBy: null
        } : {
          lore: "" === ek[1] ? void 0 : ek[1],
          droppedBy: ek[2]
        }
      }(null === bk || void 0 === bk ? void 0 : bk.description);
      return (0, jk.jsxs)("div", {
        className: "BoardChipTooltip",
        children: [(0, jk.jsxs)("div", {
          className: "BoardChipTooltipHeader",
          children: [(0, jk.jsx)("span", {
            className: "BoardChipTooltipIcon",
            children: (0, jk.jsx)(Fk, {
              itemName: ik
            })
          }), (0, jk.jsx)(lk.e, {
            text: null !== (ek = null === bk || void 0 === bk ? void 0 : bk.displayName) && void 0 !== ek ? ek : ik,
            className: "BoardChipTooltipName"
          })]
        }), (void 0 !== rk || null !== Pk) && (0, jk.jsxs)("div", {
          className: "BoardChipTooltipBody",
          children: [void 0 !== rk && (0, jk.jsx)(lk.e, {
            text: rk,
            className: "BoardChipTooltipDescription"
          }), null !== Pk && (0, jk.jsxs)("span", {
            className: "BoardChipTooltipSource",
            children: [(0, jk.jsx)("span", {
              className: "BoardChipTooltipLabel",
              children: Sk(`${sk}:chipDroppedBy`)
            }), Pk]
          })]
        }), void 0 !== fk && (0, jk.jsxs)("div", {
          className: mk()("BoardChipTooltipHeld", {
            Short: fk < Dk
          }),
          children: [(0, jk.jsx)("span", {
            className: "BoardChipTooltipLabel",
            children: Sk(`${sk}:chipYouHave`)
          }), (0, jk.jsxs)("span", {
            className: "BoardChipTooltipCount",
            children: [(0, jk.jsx)("span", {
              className: "BoardChipTooltipHeldAmount",
              children: fk.toLocaleString()
            }), ` / ${Dk.toLocaleString()}`]
          }), (0, jk.jsx)("span", {
            className: "BoardChipTooltipMeter",
            children: (0, jk.jsx)("span", {
              style: {
                width: (Dk > 0 ? 100 * Math.min(1, fk / Dk) : 100) + "%"
              }
            })
          })]
        })]
      })
    }

    function Qk(kk) {
      let {
        icon: ek,
        name: ik,
        selected: Dk,
        locked: fk,
        className: Sk,
        buttonRef: bk,
        onSelect: rk,
        children: Pk
      } = kk;
      return (0, jk.jsxs)("button", {
        ref: bk,
        type: "button",
        className: mk()("BoardTile", Sk, {
          Selected: Dk,
          Locked: fk
        }),
        onClick: rk,
        children: [(0, jk.jsx)("span", {
          className: "BoardTileIcon",
          children: ek
        }), (0, jk.jsx)("span", {
          className: "BoardTileName",
          children: ik
        }), Pk]
      })
    }

    function vk(kk) {
      let {
        icon: ek,
        name: ik,
        children: Dk
      } = kk;
      return (0, jk.jsxs)("header", {
        className: "BoardDetailHeader",
        children: [(0, jk.jsx)("span", {
          className: "BoardDetailIcon",
          children: ek
        }), (0, jk.jsxs)("div", {
          className: "BoardDetailHeading",
          children: [(0, jk.jsx)("h3", {
            children: ik
          }), (0, jk.jsx)("span", {
            className: "BoardDetailStatus",
            children: Dk
          })]
        })]
      })
    }

    function Ek(kk) {
      let {
        coins: ek,
        children: ik
      } = kk;
      return (0, jk.jsxs)("div", {
        className: "BoardWallet",
        children: [(0, jk.jsx)(qk, {
          itemName: dk,
          amount: ek
        }), ik]
      })
    }
    var hk = ik(38105);
    const ak = "containmentCodexView";
    class Wk extends hk.d {
      constructor() {
        super(...arguments), this.entries = [], this.selectedId = "", this.snapshot = this.buildSnapshot(), this.select = kk => {
          this.selectedId = kk, this.emit()
        }
      }
      BU(kk) {
        this.entries = kk.codexEntries, this.selectedId = this.entries[0].codexEntryId, this.showOrRefresh()
      }
      buildSnapshot() {
        return {
          open: this.open,
          entries: this.entries,
          selectedId: this.selectedId
        }
      }
    }
    const tk = {
        codexAnyDifficulty: `${sk}:codexNeedsAny`,
        codexNormalOnly: `${sk}:codexNeedsNormal`,
        codexHardOnly: `${sk}:codexNeedsHard`
      },
      Xk = {
        codexContained: "Contained",
        codexEncountered: "Sighted",
        codexUnidentified: "Unknown"
      },
      Bk = {
        codexContained: `${sk}:codexContainedBadge`,
        codexEncountered: `${sk}:codexEncounteredBadge`,
        codexUnidentified: `${sk}:codexUnidentifiedBadge`
      },
      ck = ["94%", "81%", "88%", "46%", "72%"];

    function Tk(kk) {
      let {
        entry: ek
      } = kk;
      const {
        t: ik
      } = (0, Kk.D)();
      return (0, jk.jsx)("span", {
        className: mk()("BoardBadge", Xk[ek.codexEntryState]),
        children: ik(Bk[ek.codexEntryState])
      })
    }

    function Zk(kk) {
      const {
        t: ek
      } = (0, Kk.D)();
      return "codexUnidentified" === kk.codexEntryState ? ek(`${sk}:codexUnidentifiedName`) : kk.codexEntryName
    }

    function Ok(kk) {
      let {
        entry: ek
      } = kk;
      return "codexUnidentified" === ek.codexEntryState ? (0, jk.jsx)(Fk, {
        itemName: "Book"
      }) : (0, jk.jsxs)("span", {
        className: "CodexPhoto",
        children: [(0, jk.jsx)(uk, {
          anomalyId: ek.codexEntryId,
          caught: "codexContained" === ek.codexEntryState
        }), (0, jk.jsx)("img", {
          className: "CodexPaperclip",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAMCAYAAACulacQAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGNggIIXb97/X7V57/+Wvtn/GZDBqs17UQTgClahScBATHrlf5ySeHWimo9NMbokCp9OkmD/oasGCaJLAAC5ZUIBS85GiAAAAABJRU5ErkJggg==",
          alt: "",
          draggable: !1
        })]
      })
    }

    function gk(kk) {
      let {
        entry: ek,
        selected: ik,
        onSelect: Dk
      } = kk;
      const fk = "codexUnidentified" === ek.codexEntryState;
      return (0, jk.jsxs)(Qk, {
        icon: (0, jk.jsx)(Ok, {
          entry: ek
        }),
        name: Zk(ek),
        selected: ik,
        locked: fk,
        className: mk()("CodexFolder", Xk[ek.codexEntryState]),
        onSelect: () => {
          Dk(ek.codexEntryId)
        },
        children: [!fk && (0, jk.jsx)(Tk, {
          entry: ek
        }), fk && (0, jk.jsx)("img", {
          className: "CodexSeal",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAARElEQVR4nGNggIIGHp7/MAzjw+TAnMf+/mB8RkQEjOGKYZLIgsiK4AqQJZA1gBXAOHgVwCRQJJEdCVOEYj8yQPciTAEAz0hgyamUqskAAAAASUVORK5CYII=",
          alt: "",
          draggable: !1
        })]
      })
    }

    function Gk(kk) {
      let {
        count: ek
      } = kk;
      const ik = [];
      for (let Dk = Math.min(ek, 25); Dk > 0; Dk -= 5) ik.push(Math.min(Dk, 5));
      return (0, jk.jsx)("span", {
        className: "CodexTallyMarks",
        "aria-hidden": "true",
        children: ik.map(((kk, ek) => (0, jk.jsx)("span", {
          className: mk()("CodexTallyGroup", {
            Gate: 5 === kk
          }),
          children: Array.from({
            length: Math.min(kk, 4)
          }, ((kk, ek) => (0, jk.jsx)("span", {
            className: "CodexTallyMark"
          }, ek)))
        }, ek)))
      })
    }

    function Nk(kk) {
      let {
        contained: ek,
        total: ik
      } = kk;
      const {
        t: Dk
      } = (0, Kk.D)();
      return (0, jk.jsxs)("div", {
        className: "CodexProgress",
        children: [Dk(`${sk}:codexProgress`, {
          contained: String(ek),
          total: String(ik)
        }), (0, jk.jsx)("span", {
          className: "CodexProgressMeter",
          children: (0, jk.jsx)("span", {
            style: {
              width: ek / ik * 100 + "%"
            }
          })
        })]
      })
    }

    function Rk(kk) {
      let {
        entry: ek,
        fileNumber: ik
      } = kk;
      const {
        t: Dk
      } = (0, Kk.D)(), fk = "codexContained" === ek.codexEntryState;
      return (0, jk.jsx)("section", {
        className: "BoardDetail",
        children: (0, jk.jsxs)("article", {
          className: mk()("CodexDossier", Xk[ek.codexEntryState]),
          children: [(0, jk.jsx)("span", {
            className: "CodexFileNumber",
            children: Dk(`${sk}:codexFileNumber`, {
              number: String(ik).padStart(3, "0")
            })
          }), (0, jk.jsx)(vk, {
            icon: (0, jk.jsx)(Ok, {
              entry: ek
            }),
            name: Zk(ek),
            children: (0, jk.jsx)(Tk, {
              entry: ek
            })
          }), fk && (0, jk.jsxs)(jk.Fragment, {
            children: [(0, jk.jsx)("p", {
              className: "BoardDescription",
              children: ek.codexEntryLore
            }), (0, jk.jsxs)("p", {
              className: "CodexTally",
              children: [Dk(`${sk}:codexContainments`, {
                count: String(ek.codexEntryContainedCount)
              }), (0, jk.jsx)(Gk, {
                count: ek.codexEntryContainedCount
              })]
            }), (0, jk.jsx)("span", {
              className: "CodexClosedStamp",
              "aria-hidden": "true",
              children: Dk(`${sk}:codexContainedBadge`)
            })]
          }), !fk && (0, jk.jsxs)(jk.Fragment, {
            children: [(0, jk.jsxs)("div", {
              className: "CodexRedaction",
              children: [ck.map((kk => (0, jk.jsx)("span", {
                className: "CodexRedactedLine",
                style: {
                  width: kk
                }
              }, kk))), (0, jk.jsx)("p", {
                className: "CodexRedacted",
                children: Dk(`${sk}:codexRedacted`)
              })]
            }), "" !== ek.codexEntryHint && (0, jk.jsxs)("aside", {
              className: "CodexNote",
              children: [(0, jk.jsx)("h4", {
                children: Dk(`${sk}:codexHintLabel`)
              }), (0, jk.jsx)("p", {
                children: ek.codexEntryHint
              })]
            }), (0, jk.jsx)("p", {
              className: "CodexClearance",
              children: Dk(tk[ek.codexEntryDifficulty])
            })]
          })]
        })
      })
    }

    function Jk(kk) {
      let {
        controller: ek
      } = kk;
      const ik = (0, Mk.e)(ak, ek.getSnapshot()),
        {
          t: Dk
        } = (0, Kk.D)();
      if (0 === ik.entries.length) return null;
      const fk = ik.entries.find((kk => kk.codexEntryId === ik.selectedId)),
        Sk = ik.entries.filter((kk => "codexContained" === kk.codexEntryState)).length,
        bk = ik.entries.map((kk => kk.codexEntryId)).sort().indexOf(fk.codexEntryId) + 1;
      return (0, jk.jsxs)(Vk, {
        open: ik.open,
        onDismiss: ek.dismiss,
        title: Dk(`${sk}:codexTitle`),
        className: "ContainmentCodexPanel",
        headerExtra: (0, jk.jsx)(Nk, {
          contained: Sk,
          total: ik.entries.length
        }),
        children: [(0, jk.jsx)("div", {
          className: "BoardTiles",
          children: ik.entries.map((kk => (0, jk.jsx)(gk, {
            entry: kk,
            selected: kk === fk,
            onSelect: ek.select
          }, kk.codexEntryId)))
        }), (0, jk.jsx)(Rk, {
          entry: fk,
          fileNumber: bk
        })]
      })
    }
    var ke = ik(314);
    class ee extends hk.d {
      constructor(kk, ek, ik, Dk, fk, Sk) {
        super(kk, ek, ik), this.pacer = Dk, this.command = fk, this.predict = Sk, this.board = null, this.confirmed = null, this.selectedId = "", this.notice = null, this.unsubscribePacer = void 0, this.select = kk => {
          this.selectedId = kk, this.emit()
        }, this.act = (kk, ek) => {
          if (!this.open || null === this.board || !this.pacer.send(`${this.command} ${kk} ${ek}`, this.rollBack)) return;
          const ik = this.predict(this.board, kk, ek);
          null !== ik && (this.board = ik.board, this.notice = ik.notice, this.emit())
        }, this.rollBack = () => {
          this.board !== this.confirmed && (this.board = this.confirmed, this.notice = null)
        }, this.unsubscribePacer = Dk.subscribe((() => {
          this.emit()
        }))
      }
      BU(kk) {
        const ek = this.messageOpens(kk);
        if (ek && this.open) return this.board === this.confirmed && (this.board = kk), this.confirmed = kk, void this.emit();
        if (this.board = kk, this.confirmed = kk, this.pacer.onReply(), ek) return this.notice = null, this.selectedId = this.openingSelection(kk), void this.show();
        const ik = this.messageNotice(kk);
        null !== ik && (this.notice = ik), this.emit()
      }
      dispose() {
        this.unsubscribePacer(), super.dispose()
      }
      onClosed() {
        this.notice = null
      }
    }

    function ie(kk, ek) {
      return kk.loadoutCoins >= ek.loadoutCostCoins && ek.loadoutCostParts.every((ek => function(kk, ek) {
        return De(kk, ek).loadoutHeldPartAmount
      }(kk, ek.loadoutPartCurrency) >= ek.loadoutPartAmount))
    }

    function De(kk, ek) {
      return kk.loadoutHeldParts.find((kk => kk.loadoutHeldPartCurrency === ek))
    }

    function fe(kk, ek) {
      return kk.loadoutSlots.find((kk => kk.loadoutSlotKind === ek))
    }

    function Se(kk) {
      return kk.loadoutPerks.filter((kk => kk.loadoutPerkEquipped)).length >= kk.loadoutMaxPerks
    }

    function be(kk, ek, ik) {
      for (const fk of kk.loadoutSlots) {
        const Dk = fk.loadoutSlotOptions.find((kk => kk.loadoutOptionId === ik));
        if (Dk) return "loadoutArmour" === fk.loadoutSlotKind ? Pe(kk, fk, Dk, ek) : re(kk, fk, Dk, ek)
      }
      const Dk = kk.loadoutPerks.find((kk => kk.loadoutPerkId === ik));
      return Dk ? function(kk, ek, ik) {
        const Dk = ek.loadoutPerkOwned,
          fk = ek.loadoutPerkEquipped,
          Sk = ek.loadoutPerkName,
          bk = Se(kk);
        if ("loadoutUnlock" === ik) {
          if (Dk || !ie(kk, ek.loadoutPerkCost)) return null;
          const ik = {
            ...ek,
            loadoutPerkOwned: !0,
            loadoutPerkEquipped: !bk
          };
          return {
            board: Me(Ke(kk, ek.loadoutPerkCost), ik),
            notice: xe(bk ? "loadoutNoticeUnlockedNoRoom" : "loadoutNoticeUnlocked", Sk)
          }
        }
        if ("loadoutUpgrade" === ik || !Dk || "loadoutEquip" === ik === fk || !fk && bk) return null;
        return {
          board: Me(kk, {
            ...ek,
            loadoutPerkEquipped: !fk
          }),
          notice: xe(fk ? "loadoutNoticeUnequipped" : "loadoutNoticeEquipped", Sk)
        }
      }(kk, Dk, ek) : null
    }

    function re(kk, ek, ik, Dk) {
      const fk = ik.loadoutOptionOwnedTier,
        Sk = ik.loadoutOptionName;
      if ("loadoutEquip" === Dk) return 0 === fk ? null : {
        board: me(kk, ek, ik.loadoutOptionId, null),
        notice: xe("loadoutNoticeEquipped", Sk)
      };
      const bk = "loadoutUnlock" === Dk;
      if (bk && 0 !== fk || "loadoutUpgrade" === Dk && (0 === fk || fk >= ik.loadoutOptionTiers.length) || "loadoutUnequip" === Dk) return null;
      const rk = ik.loadoutOptionTiers[fk].loadoutTierCost;
      if (!ie(kk, rk)) return null;
      const Pk = {
          ...ik,
          loadoutOptionOwnedTier: fk + 1
        },
        mk = bk ? ik.loadoutOptionId : ek.loadoutSlotEquippedId;
      return {
        board: me(Ke(kk, rk), ek, mk, Pk),
        notice: bk ? xe("loadoutNoticeUnlocked", Sk) : xe("loadoutNoticeUpgraded", Sk, fk + 1)
      }
    }

    function Pe(kk, ek, ik, Dk) {
      const fk = ik.loadoutOptionOwnedTier > 0,
        Sk = ik.loadoutOptionName;
      if ("loadoutEquip" === Dk && fk) return {
        board: me(kk, ek, ik.loadoutOptionId, null),
        notice: xe("loadoutNoticeEquipped", Sk)
      };
      const bk = ik.loadoutOptionTiers[0].loadoutTierCost;
      return "loadoutUnlock" !== Dk || fk || !ie(kk, bk) ? null : {
        board: me(Ke(kk, bk), ek, ik.loadoutOptionId, {
          ...ik,
          loadoutOptionOwnedTier: 1
        }),
        notice: xe("loadoutNoticeUnlocked", Sk)
      }
    }

    function me(kk, ek, ik, Dk) {
      const fk = {
        ...ek,
        loadoutSlotEquippedId: ik,
        loadoutSlotOptions: ek.loadoutSlotOptions.map((kk => null !== Dk && kk.loadoutOptionId === Dk.loadoutOptionId ? Dk : kk))
      };
      return {
        ...kk,
        loadoutSlots: kk.loadoutSlots.map((kk => kk === ek ? fk : kk))
      }
    }

    function Me(kk, ek) {
      return {
        ...kk,
        loadoutPerks: kk.loadoutPerks.map((kk => kk.loadoutPerkId === ek.loadoutPerkId ? ek : kk))
      }
    }

    function Ke(kk, ek) {
      return {
        ...kk,
        loadoutCoins: kk.loadoutCoins - ek.loadoutCostCoins,
        loadoutHeldParts: kk.loadoutHeldParts.map((kk => {
          const ik = ek.loadoutCostParts.find((ek => ek.loadoutPartCurrency === kk.loadoutHeldPartCurrency));
          return ik ? {
            ...kk,
            loadoutHeldPartAmount: kk.loadoutHeldPartAmount - ik.loadoutPartAmount
          } : kk
        }))
      }
    }

    function xe(kk, ek) {
      return {
        loadoutNoticeKey: kk,
        loadoutNoticeRefused: !1,
        loadoutNoticeName: ek,
        loadoutNoticeTier: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
      }
    }
    const ne = "containmentLoadoutView";
    class Ue extends ee {
      constructor(kk, ek, ik, Dk) {
        super(kk, ek, ik, Dk, "loadout", be), this.slot = "loadoutPrimary", this.snapshot = this.buildSnapshot(), this.selectSlot = kk => {
          this.slot = kk, this.selectedId = He(this.board, kk), this.emit()
        }
      }
      messageOpens(kk) {
        return kk.loadoutMessageOpens
      }
      messageNotice(kk) {
        return kk.loadoutNotice
      }
      openingSelection(kk) {
        return He(kk, this.slot)
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

    function He(kk, ek) {
      if ("loadoutPerks" === ek) {
        var ik;
        const ek = kk.loadoutPerks;
        return (null !== (ik = ek.find((kk => kk.loadoutPerkEquipped))) && void 0 !== ik ? ik : ek[0]).loadoutPerkId
      }
      return fe(kk, ek).loadoutSlotEquippedId
    }
    const we = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAY0lEQVR4nGNgIAP8x4FRwP/sFt3/EYU6YBqGIwp1MBSDBUH4/3nW//83csD5DOgKfeKNsWIMhV+///qvbOT7/87cMjCG8TEUgiSLqlpRMEgMQ+HJvgy4aTAMEsPqc2KChyAAAFxNbnylK5O6AAAAAElFTkSuQmCC";
    var le = ik(36486),
      pe = ik(1261);
    const ye = {
        loadoutPrimary: `${sk}:loadoutSlotPrimary`,
        loadoutSecondary: `${sk}:loadoutSlotSecondary`,
        loadoutOffensive: `${sk}:loadoutSlotOffensive`,
        loadoutSelfHelp: `${sk}:loadoutSlotSelfHelp`,
        loadoutArmour: `${sk}:loadoutSlotArmour`,
        loadoutPerks: `${sk}:loadoutSlotPerks`
      },
      Ye = {
        section: "right",
        Un: "bottom",
        act: "top"
      },
      Le = (0, Dk.createContext)({
        step: null,
        targetRef: () => {}
      });

    function Ce() {
      const {
        step: kk,
        targetRef: ek
      } = (0, Dk.useContext)(Le);
      return (ik, Dk) => (null === kk || void 0 === kk ? void 0 : kk.kind) === ik && kk.id === Dk ? ek : void 0
    }

    function Ae(kk, ek) {
      const ik = ek.loadoutTargetId;
      if ("loadoutPerks" === ek.loadoutTargetSection) {
        const ek = kk.loadoutPerks.find((kk => kk.loadoutPerkId === ik));
        return {
          name: ek.loadoutPerkName,
          owned: ek.loadoutPerkOwned,
          equipped: ek.loadoutPerkEquipped
        }
      }
      const Dk = fe(kk, ek.loadoutTargetSection),
        fk = Dk.loadoutSlotOptions.find((kk => kk.loadoutOptionId === ik));
      return {
        name: fk.loadoutOptionName,
        owned: fk.loadoutOptionOwnedTier > 0,
        equipped: Dk.loadoutSlotEquippedId === ik
      }
    }

    function je(kk, ek, ik, Dk) {
      const [fk, Sk] = kk(`${sk}:${ek}`, {
        [ik]: "\x01"
      }).split("\x01");
      return (0, jk.jsxs)(jk.Fragment, {
        children: [fk, (0, jk.jsx)("span", {
          className: "LoadoutWalkthroughName",
          children: Dk
        }), Sk]
      })
    }

    function se(kk) {
      let {
        view: ek,
        onDismiss: ik,
        children: fk
      } = kk;
      const {
        t: Sk
      } = (0, Kk.D)(), bk = ek.loadout, rk = ek.open ? bk.loadoutWalkthrough.map((kk => ({
        target: kk,
        info: Ae(bk, kk)
      }))).find((kk => {
        let {
          info: ek
        } = kk;
        return !ek.equipped
      })) : void 0;
      let Pk = null,
        mk = null;
      if (void 0 !== rk) {
        const {
          target: kk,
          info: ik
        } = rk;
        ek.slot !== kk.loadoutTargetSection ? (Pk = {
          kind: "section",
          id: kk.loadoutTargetSection
        }, mk = je(Sk, "loadoutWalkthroughSection", "section", Sk(ye[kk.loadoutTargetSection]))) : ek.selectedId !== kk.loadoutTargetId ? (Pk = {
          kind: "Un",
          id: kk.loadoutTargetId
        }, mk = je(Sk, "loadoutWalkthroughPick", "name", ik.name)) : (Pk = {
          kind: "act",
          id: kk.loadoutTargetId
        }, mk = je(Sk, ik.owned ? "loadoutWalkthroughEquip" : "loadoutWalkthroughUnlock", "name", ik.name))
      }
      const Mk = null === Pk ? null : function(kk) {
          return `${kk.kind}:${kk.id}`
        }(Pk),
        [xk, nk] = (0, Dk.useState)(null),
        Uk = (0, Dk.useCallback)((kk => {
          nk((ek => null !== kk ? {
            key: Mk,
            node: kk
          } : (null === ek || void 0 === ek ? void 0 : ek.key) === Mk ? null : ek))
        }), [Mk]),
        Hk = null !== Mk && (null === xk || void 0 === xk ? void 0 : xk.key) === Mk ? xk.node : null;
      return (0, jk.jsxs)(Le.Provider, {
        value: {
          step: Pk,
          targetRef: Uk
        },
        children: [fk, null !== Pk && null !== Hk && (0, jk.jsx)(de, {
          target: Hk,
          placement: Ye[Pk.kind],
          onDismiss: ik,
          children: mk
        }, Mk)]
      })
    }

    function de(kk) {
      let {
        target: ek,
        placement: ik,
        onDismiss: fk,
        children: Sk
      } = kk;
      const {
        t: bk
      } = (0, Kk.D)(), rk = (0, Dk.useRef)(ek);
      return rk.current = ek, (0, pe.u)("popup", rk, fk), (0, jk.jsxs)(le.i, {
        target: ek,
        placement: ik,
        className: "LoadoutWalkthroughStep",
        spotlightMargin: 10,
        children: [(0, jk.jsxs)("div", {
          className: "LoadoutWalkthroughHeader",
          children: [(0, jk.jsx)("img", {
            className: "LoadoutWalkthroughPortrait",
            src: we,
            alt: "",
            draggable: !1
          }), (0, jk.jsx)("span", {
            className: "LoadoutWalkthroughSpeaker",
            children: bk(`${sk}:operatorName`)
          }), (0, jk.jsx)(Uk.n, {
            onClick: fk,
            ariaLabel: bk(`${sk}:loadoutWalkthroughClose`),
            padIgnore: !0
          })]
        }), (0, jk.jsx)("p", {
          className: "LoadoutWalkthroughText",
          children: Sk
        })]
      })
    }
    const Ve = new Set(["loadoutStatReload", "loadoutStatResupply"]);

    function Fe(kk) {
      let {
        cost: ek,
        loadout: ik
      } = kk;
      const {
        t: Dk
      } = (0, Kk.D)();
      return ek.loadoutCostCoins <= 0 && 0 === ek.loadoutCostParts.length ? (0, jk.jsx)("span", {
        className: "LoadoutCost",
        children: Dk(`${sk}:loadoutFree`)
      }) : (0, jk.jsxs)("span", {
        className: "LoadoutCost",
        children: [ek.loadoutCostCoins > 0 && (0, jk.jsx)(qk, {
          itemName: dk,
          amount: ek.loadoutCostCoins,
          XM: ik.loadoutCoins
        }), ek.loadoutCostParts.map((kk => {
          const ek = De(ik, kk.loadoutPartCurrency);
          return (0, jk.jsx)(qk, {
            itemName: ek.loadoutHeldPartItem,
            amount: kk.loadoutPartAmount,
            XM: ek.loadoutHeldPartAmount
          }, kk.loadoutPartCurrency)
        }))]
      })
    }
    const ue = {
      loadoutStatFireRate: `${sk}:loadoutUnitPerMinute`,
      loadoutStatReload: `${sk}:loadoutUnitSeconds`,
      loadoutStatResupply: `${sk}:loadoutUnitSeconds`
    };

    function qe(kk) {
      return "loadoutStatPotency" === kk.loadoutStatKind ? (0, ke.K)(kk.loadoutStatValue) : String(kk.loadoutStatValue)
    }

    function Ie(kk) {
      var ek;
      let {
        option: ik
      } = kk;
      const {
        t: Dk
      } = (0, Kk.D)(), fk = ik.loadoutOptionTiers, Sk = null === (ek = fk[0]) || void 0 === ek ? void 0 : ek.loadoutTierStats.map((kk => kk.loadoutStatKind));
      if (!Sk || 0 === Sk.length) return null;
      const bk = ik.loadoutOptionOwnedTier,
        rk = (kk, ek) => {
          var ik;
          return null === (ik = fk[kk]) || void 0 === ik ? void 0 : ik.loadoutTierStats.find((kk => kk.loadoutStatKind === ek))
        };
      return (0, jk.jsxs)("table", {
        className: "LoadoutTierTable",
        children: [(0, jk.jsx)("thead", {
          children: (0, jk.jsxs)("tr", {
            children: [(0, jk.jsx)("th", {}), fk.map(((kk, ek) => (0, jk.jsx)("th", {
              className: mk()({
                Current: ek + 1 === bk,
                Next: ek === bk
              }),
              children: Dk(`${sk}:loadoutTier`, {
                tier: (0, ke.K)(ek + 1)
              })
            }, ek)))]
          })
        }), (0, jk.jsx)("tbody", {
          children: Sk.map((kk => {
            const ek = ue[kk];
            return (0, jk.jsxs)("tr", {
              children: [(0, jk.jsxs)("th", {
                scope: "row",
                children: [Dk(`${sk}:${kk}`), ek && (0, jk.jsx)("span", {
                  className: "LoadoutStatUnit",
                  children: Dk(ek)
                })]
              }), fk.map(((ek, ik) => {
                const Dk = rk(ik, kk),
                  fk = ik > 0 ? rk(ik - 1, kk) : void 0,
                  Sk = Dk && fk ? Dk.loadoutStatValue - fk.loadoutStatValue : 0,
                  Pk = Ve.has(kk) ? Sk < 0 : Sk > 0,
                  Mk = ik === bk;
                return (0, jk.jsxs)("td", {
                  className: mk()({
                    Current: ik + 1 === bk,
                    Next: Mk,
                    Gain: Pk,
                    Owned: ik < bk
                  }),
                  children: [Mk && Pk && (0, jk.jsx)("span", {
                    className: "LoadoutGainArrow",
                    "aria-hidden": "true",
                    children: Sk < 0 ? "\u25bc" : "\u25b2"
                  }), Dk ? qe(Dk) : "-"]
                }, ik)
              }))]
            }, kk)
          }))
        })]
      })
    }

    function ze(kk) {
      let {
        view: ek,
        controller: ik,
        slot: Dk,
        option: fk
      } = kk;
      const {
        t: Sk
      } = (0, Kk.D)(), bk = ek.loadout, rk = fk.loadoutOptionOwnedTier, Pk = fk.loadoutOptionTiers.length, mk = Dk.loadoutSlotEquippedId === fk.loadoutOptionId, Mk = rk < Pk ? fk.loadoutOptionTiers[rk].loadoutTierCost : null, xk = null !== Mk && ie(bk, Mk), nk = fk.loadoutOptionId, Hk = Ce();
      return (0, jk.jsxs)(jk.Fragment, {
        children: [(0, jk.jsx)(ve, {
          icon: fk.loadoutOptionIcon,
          name: fk.loadoutOptionName,
          status: 0 === rk ? Sk(`${sk}:loadoutLocked`) : Pk > 1 ? Sk(`${sk}:loadoutTier`, {
            tier: (0, ke.K)(rk)
          }) : null,
          locked: 0 === rk,
          equipped: mk
        }), (0, jk.jsx)("p", {
          className: "BoardDescription",
          children: fk.loadoutOptionDescription
        }), (0, jk.jsx)(Ie, {
          option: fk
        }), (0, jk.jsxs)("div", {
          ref: Hk("act", nk),
          className: "BoardActions",
          children: [null !== Mk && (0, jk.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, jk.jsx)(Fe, {
              cost: Mk,
              loadout: bk
            }), (0, jk.jsx)(Uk.r, {
              disabled: !xk || ek.pending,
              onClick: () => {
                ik.act(0 === rk ? "loadoutUnlock" : "loadoutUpgrade", nk)
              },
              children: 0 === rk ? Sk(`${sk}:loadoutUnlock`) : Sk(`${sk}:loadoutUpgrade`, {
                tier: (0, ke.K)(rk + 1)
              })
            })]
          }), null === Mk && Pk > 1 && (0, jk.jsx)("span", {
            className: "BoardHint",
            children: Sk(`${sk}:loadoutMaxed`)
          }), rk > 0 && !mk && (0, jk.jsx)(Uk.f, {
            disabled: ek.pending,
            onClick: () => {
              ik.act("loadoutEquip", nk)
            },
            children: Sk(`${sk}:loadoutEquip`)
          })]
        })]
      })
    }

    function Qe(kk) {
      let {
        view: ek,
        controller: ik,
        perk: Dk
      } = kk;
      const {
        t: fk
      } = (0, Kk.D)(), Sk = ek.loadout, bk = Se(Sk), rk = Dk.loadoutPerkId, Pk = Ce();
      return (0, jk.jsxs)(jk.Fragment, {
        children: [(0, jk.jsx)(ve, {
          icon: Dk.loadoutPerkIcon,
          name: Dk.loadoutPerkName,
          status: Dk.loadoutPerkOwned ? null : fk(`${sk}:loadoutLocked`),
          locked: !Dk.loadoutPerkOwned,
          equipped: Dk.loadoutPerkEquipped
        }), (0, jk.jsx)("p", {
          className: "BoardDescription",
          children: Dk.loadoutPerkDescription
        }), (0, jk.jsxs)("div", {
          ref: Pk("act", rk),
          className: "BoardActions",
          children: [!Dk.loadoutPerkOwned && (0, jk.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, jk.jsx)(Fe, {
              cost: Dk.loadoutPerkCost,
              loadout: Sk
            }), (0, jk.jsx)(Uk.r, {
              disabled: !ie(Sk, Dk.loadoutPerkCost) || ek.pending,
              onClick: () => {
                ik.act("loadoutUnlock", rk)
              },
              children: fk(`${sk}:loadoutUnlock`)
            })]
          }), Dk.loadoutPerkOwned && !Dk.loadoutPerkEquipped && (0, jk.jsx)(Uk.f, {
            disabled: bk || ek.pending,
            onClick: () => {
              ik.act("loadoutEquip", rk)
            },
            children: fk(`${sk}:loadoutEquip`)
          }), Dk.loadoutPerkOwned && !Dk.loadoutPerkEquipped && bk && (0, jk.jsx)("span", {
            className: "BoardHint",
            children: fk(`${sk}:loadoutSocketsFullHint`)
          }), Dk.loadoutPerkEquipped && (0, jk.jsx)(Uk.X, {
            disabled: ek.pending,
            onClick: () => {
              ik.act("loadoutUnequip", rk)
            },
            children: fk(`${sk}:loadoutUnequip`)
          })]
        })]
      })
    }

    function ve(kk) {
      let {
        icon: ek,
        name: ik,
        status: Dk,
        locked: fk,
        equipped: Sk
      } = kk;
      const {
        t: bk
      } = (0, Kk.D)();
      return (0, jk.jsxs)(vk, {
        icon: (0, jk.jsx)(Fk, {
          itemName: ek
        }),
        name: ik,
        children: [null !== Dk && (0, jk.jsx)("span", {
          className: mk()("LoadoutStatusText", {
            Locked: fk
          }),
          children: Dk
        }), Sk && (0, jk.jsx)("span", {
          className: "BoardBadge",
          children: bk(`${sk}:loadoutEquippedBadge`)
        })]
      })
    }

    function Ee(kk) {
      let {
        view: ek,
        controller: ik
      } = kk;
      const Dk = ek.loadout;
      if ("loadoutPerks" === ek.slot) {
        const kk = Dk.loadoutPerks.find((kk => kk.loadoutPerkId === ek.selectedId));
        return (0, jk.jsx)("section", {
          className: "BoardDetail",
          children: kk && (0, jk.jsx)(Qe, {
            view: ek,
            controller: ik,
            perk: kk
          })
        })
      }
      const fk = fe(Dk, ek.slot),
        Sk = fk.loadoutSlotOptions.find((kk => kk.loadoutOptionId === ek.selectedId));
      return (0, jk.jsx)("section", {
        className: "BoardDetail",
        children: Sk && (0, jk.jsx)(ze, {
          view: ek,
          controller: ik,
          slot: fk,
          option: Sk
        })
      })
    }

    function he(kk) {
      let {
        owned: ek,
        total: ik
      } = kk;
      return ik <= 1 ? null : (0, jk.jsx)("span", {
        className: "LoadoutPips",
        children: Array.from({
          length: ik
        }, ((kk, ik) => (0, jk.jsx)("span", {
          className: mk()("LoadoutPip", {
            Filled: ik < ek
          })
        }, ik)))
      })
    }

    function ae(kk) {
      let {
        view: ek,
        controller: ik
      } = kk;
      const {
        t: Dk
      } = (0, Kk.D)(), fk = ek.loadout, Sk = Ce();
      return (0, jk.jsxs)("nav", {
        className: "LoadoutKit",
        "aria-label": Dk(`${sk}:loadoutKit`),
        children: [fk.loadoutSlots.map((kk => {
          const fk = kk.loadoutSlotOptions.find((ek => ek.loadoutOptionId === kk.loadoutSlotEquippedId));
          return (0, jk.jsxs)("button", {
            ref: Sk("section", kk.loadoutSlotKind),
            type: "button",
            className: mk()("LoadoutKitSlot", {
              Selected: ek.slot === kk.loadoutSlotKind
            }),
            onClick: () => {
              ik.selectSlot(kk.loadoutSlotKind)
            },
            children: [(0, jk.jsx)("span", {
              className: "LoadoutKitIcon",
              children: fk && (0, jk.jsx)(Fk, {
                itemName: fk.loadoutOptionIcon
              })
            }), (0, jk.jsxs)("span", {
              className: "LoadoutKitText",
              children: [(0, jk.jsxs)("span", {
                className: "LoadoutKitTop",
                children: [(0, jk.jsx)("span", {
                  className: "LoadoutKitLabel",
                  children: Dk(ye[kk.loadoutSlotKind])
                }), fk && (0, jk.jsx)(he, {
                  owned: fk.loadoutOptionOwnedTier,
                  total: fk.loadoutOptionTiers.length
                })]
              }), (0, jk.jsx)("span", {
                className: "LoadoutKitName",
                children: null === fk || void 0 === fk ? void 0 : fk.loadoutOptionName
              })]
            })]
          }, kk.loadoutSlotKind)
        })), (0, jk.jsx)(We, {
          view: ek,
          controller: ik
        })]
      })
    }

    function We(kk) {
      let {
        view: ek,
        controller: ik
      } = kk;
      const {
        t: Dk
      } = (0, Kk.D)(), fk = ek.loadout, Sk = fk.loadoutPerks.filter((kk => kk.loadoutPerkEquipped)), bk = Ce();
      return (0, jk.jsxs)("button", {
        ref: bk("section", "loadoutPerks"),
        type: "button",
        className: mk()("LoadoutKitSlot", "LoadoutPerks", {
          Selected: "loadoutPerks" === ek.slot
        }),
        onClick: () => {
          ik.selectSlot("loadoutPerks")
        },
        children: [(0, jk.jsxs)("span", {
          className: "LoadoutKitTop",
          children: [(0, jk.jsx)("span", {
            className: "LoadoutKitLabel",
            children: Dk(ye.loadoutPerks)
          }), (0, jk.jsx)("span", {
            className: "LoadoutPerkCount",
            children: Dk(`${sk}:loadoutPerkCount`, {
              equipped: String(Sk.length),
              max: String(fk.loadoutMaxPerks)
            })
          })]
        }), (0, jk.jsx)("span", {
          className: "LoadoutSockets",
          children: Array.from({
            length: fk.loadoutMaxPerks
          }, ((kk, ek) => {
            const ik = Sk[ek];
            return (0, jk.jsxs)("span", {
              className: mk()("LoadoutSocket", {
                Filled: ik,
                Empty: !ik
              }),
              children: [(0, jk.jsx)("span", {
                className: "LoadoutSocketWell",
                children: ik && (0, jk.jsx)(Fk, {
                  itemName: ik.loadoutPerkIcon
                })
              }), (0, jk.jsx)("span", {
                className: "LoadoutSocketName",
                children: ik ? ik.loadoutPerkName : Dk(`${sk}:loadoutPerkSocketEmpty`)
              })]
            }, ek)
          }))
        })]
      })
    }

    function te(kk) {
      let {
        icon: ek,
        name: ik,
        selected: Dk,
        equipped: fk,
        locked: Sk,
        ownedTier: bk,
        tiers: rk,
        buttonRef: Pk,
        onSelect: mk
      } = kk;
      const {
        t: Mk
      } = (0, Kk.D)();
      return (0, jk.jsxs)(Qk, {
        icon: (0, jk.jsx)(Fk, {
          itemName: ek
        }),
        name: ik,
        selected: Dk,
        locked: Sk,
        buttonRef: Pk,
        onSelect: mk,
        children: [fk && (0, jk.jsx)("span", {
          className: "BoardBadge",
          children: Mk(`${sk}:loadoutEquippedBadge`)
        }), Sk && (0, jk.jsx)("span", {
          className: "BoardBadge Muted",
          children: Mk(`${sk}:loadoutLocked`)
        }), !Sk && (0, jk.jsx)(he, {
          owned: bk,
          total: rk
        })]
      })
    }

    function Xe(kk) {
      let {
        view: ek,
        controller: ik
      } = kk;
      const Dk = ek.loadout,
        fk = Ce();
      if ("loadoutPerks" === ek.slot) return (0, jk.jsx)("div", {
        className: "BoardTiles",
        children: Dk.loadoutPerks.map((kk => (0, jk.jsx)(te, {
          icon: kk.loadoutPerkIcon,
          name: kk.loadoutPerkName,
          selected: ek.selectedId === kk.loadoutPerkId,
          equipped: kk.loadoutPerkEquipped,
          locked: !kk.loadoutPerkOwned,
          ownedTier: 0,
          tiers: 0,
          buttonRef: fk("Un", kk.loadoutPerkId),
          onSelect: () => {
            ik.select(kk.loadoutPerkId)
          }
        }, kk.loadoutPerkId)))
      });
      const Sk = fe(Dk, ek.slot);
      return (0, jk.jsx)("div", {
        className: "BoardTiles",
        children: Sk.loadoutSlotOptions.map((kk => (0, jk.jsx)(te, {
          icon: kk.loadoutOptionIcon,
          name: kk.loadoutOptionName,
          selected: ek.selectedId === kk.loadoutOptionId,
          equipped: Sk.loadoutSlotEquippedId === kk.loadoutOptionId,
          locked: 0 === kk.loadoutOptionOwnedTier,
          ownedTier: kk.loadoutOptionOwnedTier,
          tiers: kk.loadoutOptionTiers.length,
          buttonRef: fk("Un", kk.loadoutOptionId),
          onSelect: () => {
            ik.select(kk.loadoutOptionId)
          }
        }, kk.loadoutOptionId)))
      })
    }

    function Be(kk) {
      let {
        loadout: ek
      } = kk;
      return (0, jk.jsx)(Ek, {
        coins: ek.loadoutCoins,
        children: ek.loadoutHeldParts.filter((kk => kk.loadoutHeldPartAmount > 0)).map((kk => (0, jk.jsx)(qk, {
          itemName: kk.loadoutHeldPartItem,
          amount: kk.loadoutHeldPartAmount
        }, kk.loadoutHeldPartCurrency)))
      })
    }

    function ce(kk) {
      let {
        controller: ek
      } = kk;
      const ik = (0, Mk.e)(ne, ek.getSnapshot()),
        {
          t: Dk
        } = (0, Kk.D)();
      if (null === ik.loadout) return null;
      const fk = ik.notice;
      return (0, jk.jsx)(se, {
        view: ik,
        onDismiss: ek.dismiss,
        children: (0, jk.jsxs)(Vk, {
          open: ik.open,
          onDismiss: ek.dismiss,
          title: Dk(`${sk}:loadoutTitle`),
          className: "ContainmentLoadoutPanel",
          headerExtra: (0, jk.jsx)(Be, {
            loadout: ik.loadout
          }),
          statusRefused: null === fk || void 0 === fk ? void 0 : fk.loadoutNoticeRefused,
          status: (0, jk.jsxs)(jk.Fragment, {
            children: [(0, jk.jsx)("span", {
              className: "LoadoutRadioBadge",
              children: Dk(`${sk}:loadoutRadioBadge`)
            }), null !== fk && Dk(`${sk}:${fk.loadoutNoticeKey}`, {
              name: fk.loadoutNoticeName,
              tier: (0, ke.K)(fk.loadoutNoticeTier),
              max: String(ik.loadout.loadoutMaxPerks)
            })]
          }),
          children: [(0, jk.jsx)(ae, {
            view: ik,
            controller: ek
          }), (0, jk.jsx)(Xe, {
            view: ik,
            controller: ek
          }), (0, jk.jsx)(Ee, {
            view: ik,
            controller: ek
          })]
        })
      })
    }

    function Te(kk, ek, ik) {
      const Dk = kk.locatorEntries.find((kk => kk.locatorEntryId === ik));
      if (!Dk) return null;
      const fk = Dk.locatorEntryName;
      if ("locatorDisarm" === ek) return Dk.locatorEntryArmed ? {
        board: oe(kk, null),
        notice: Ze("locatorNoticeDisarmed", fk)
      } : null;
      if ("locatorArm" === ek) return Dk.locatorEntryOwned && !Dk.locatorEntryArmed ? {
        board: oe(kk, ik),
        notice: Ze("locatorNoticeArmed", fk)
      } : null;
      if (Dk.locatorEntryOwned || kk.locatorCoins < Dk.locatorEntryPrice) return null;
      const Sk = oe({
        ...kk,
        locatorCoins: kk.locatorCoins - Dk.locatorEntryPrice
      }, ik);
      return {
        board: {
          ...Sk,
          locatorEntries: Sk.locatorEntries.map((kk => kk.locatorEntryId === ik ? {
            ...kk,
            locatorEntryOwned: !0
          } : kk))
        },
        notice: Ze("locatorNoticeBought", fk)
      }
    }

    function oe(kk, ek) {
      return {
        ...kk,
        locatorEntries: kk.locatorEntries.map((kk => {
          const ik = kk.locatorEntryId === ek;
          return kk.locatorEntryArmed === ik ? kk : {
            ...kk,
            locatorEntryArmed: ik
          }
        }))
      }
    }

    function Ze(kk, ek) {
      return {
        locatorNoticeKey: kk,
        locatorNoticeRefused: !1,
        locatorNoticeName: ek
      }
    }
    const Oe = "containmentLocatorView";
    class ge extends ee {
      constructor(kk, ek, ik, Dk) {
        super(kk, ek, ik, Dk, "locator", Te), this.snapshot = this.buildSnapshot()
      }
      messageOpens(kk) {
        return kk.locatorMessageOpens
      }
      messageNotice(kk) {
        return kk.locatorNotice
      }
      openingSelection(kk) {
        var ek;
        const ik = kk.locatorEntries;
        return (null !== (ek = ik.find((kk => kk.locatorEntryArmed))) && void 0 !== ek ? ek : ik[0]).locatorEntryId
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
    const Ge = {
        locatorContained: `${sk}:locatorFlavourContained`,
        locatorEncountered: `${sk}:locatorFlavourEncountered`,
        locatorUnseen: `${sk}:locatorFlavourUnseen`
      },
      Ne = {
        codexAnyDifficulty: null,
        codexNormalOnly: `${sk}:locatorAttunedNormal`,
        codexHardOnly: `${sk}:locatorAttunedHard`
      };

    function Re() {
      return (0, jk.jsx)(jk.Fragment, {
        children: Array.from({
          length: 5
        }, ((kk, ek) => (0, jk.jsx)("span", {
          className: "LocatorFly",
          children: (0, jk.jsx)("img", {
            src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAICAYAAADwdn+XAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYElEQVR4nGNgoBboMlb5LyUjD8YgNtHyJ6/d+Q/CILa1lz9YAbo4DCDLYxjQv3gt3AYQG90AdHkUQ/qhkjAb0BURkgcDmAQMo7sSXR7deyiGoIvDvIOsGasB+ACyBmTNACS0go3ibhumAAAAAElFTkSuQmCC",
            alt: "",
            draggable: !1
          })
        }, ek)))
      })
    }

    function Je(kk) {
      let {
        entry: ek
      } = kk;
      const {
        t: ik
      } = (0, Kk.D)();
      return ek.locatorEntryArmed ? (0, jk.jsx)("span", {
        className: "BoardBadge Armed",
        children: ik(`${sk}:locatorArmedBadge`)
      }) : ek.locatorEntryOwned ? (0, jk.jsx)("span", {
        className: "BoardBadge",
        children: ik(`${sk}:locatorOwnedBadge`)
      }) : null
    }

    function ki(kk) {
      let {
        entry: ek,
        coins: ik,
        inTile: Dk = !1
      } = kk;
      return (0, jk.jsx)(qk, {
        itemName: dk,
        amount: ek.locatorEntryPrice,
        XM: ik,
        inTile: Dk
      })
    }

    function ei(kk) {
      let {
        view: ek,
        controller: ik,
        entry: Dk
      } = kk;
      const {
        t: fk
      } = (0, Kk.D)(), Sk = Dk.locatorEntryId, bk = ek.locators.locatorEntries.find((kk => kk.locatorEntryArmed && kk !== Dk));
      return (0, jk.jsxs)("div", {
        className: "BoardActions",
        children: [Dk.locatorEntryArmed && (0, jk.jsx)(Uk.X, {
          disabled: ek.pending,
          onClick: () => {
            ik.act("locatorDisarm", Sk)
          },
          children: fk(`${sk}:locatorDisarm`)
        }), Dk.locatorEntryOwned && !Dk.locatorEntryArmed && (0, jk.jsx)(Uk.f, {
          disabled: ek.pending,
          onClick: () => {
            ik.act("locatorArm", Sk)
          },
          children: fk(`${sk}:locatorArm`)
        }), !Dk.locatorEntryOwned && (0, jk.jsxs)("div", {
          className: "LocatorBuy",
          children: [(0, jk.jsx)(ki, {
            entry: Dk,
            coins: ek.locators.locatorCoins
          }), (0, jk.jsx)(Uk.r, {
            disabled: ek.locators.locatorCoins < Dk.locatorEntryPrice || ek.pending,
            onClick: () => {
              ik.act("locatorBuy", Sk)
            },
            children: fk(`${sk}:locatorBuy`)
          })]
        }), bk && !Dk.locatorEntryArmed && (0, jk.jsx)("span", {
          className: "BoardHint",
          children: fk(`${sk}:locatorReplacesHint`, {
            name: bk.locatorEntryName
          })
        })]
      })
    }

    function ii(kk) {
      let {
        entry: ek
      } = kk;
      return "locatorUnseen" === ek.locatorEntryStanding ? (0, jk.jsx)(Fk, {
        itemName: "Compass"
      }) : (0, jk.jsx)(uk, {
        anomalyId: ek.locatorEntryId,
        caught: "locatorContained" === ek.locatorEntryStanding
      })
    }

    function Di(kk) {
      let {
        view: ek,
        controller: ik,
        entry: Dk
      } = kk;
      const {
        t: fk
      } = (0, Kk.D)(), Sk = Ne[Dk.locatorEntryDifficulty];
      return (0, jk.jsxs)("section", {
        className: "BoardDetail",
        children: [(0, jk.jsxs)("div", {
          className: mk()("LocatorLabel", {
            Armed: Dk.locatorEntryArmed
          }),
          children: [(0, jk.jsx)(vk, {
            icon: (0, jk.jsx)(ii, {
              entry: Dk
            }),
            name: fk(`${sk}:locatorName`, {
              name: Dk.locatorEntryName
            }),
            children: (0, jk.jsx)(Je, {
              entry: Dk
            })
          }), (0, jk.jsx)("p", {
            className: "BoardDescription",
            children: fk(Dk.locatorEntryArmed ? `${sk}:locatorFlavourArmed` : Ge[Dk.locatorEntryStanding])
          }), null !== Sk && (0, jk.jsx)("p", {
            className: "LocatorAttuned",
            children: fk(Sk)
          }), (0, jk.jsx)("p", {
            className: "BoardDescription LocatorUsage",
            children: fk(`${sk}:locatorUsage`)
          })]
        }), (0, jk.jsx)(ei, {
          view: ek,
          controller: ik,
          entry: Dk
        })]
      })
    }

    function fi(kk) {
      let {
        controller: ek
      } = kk;
      const ik = (0, Mk.e)(Oe, ek.getSnapshot()),
        {
          t: Dk
        } = (0, Kk.D)(),
        fk = ik.locators;
      if (null === fk) return null;
      const Sk = fk.locatorEntries.find((kk => kk.locatorEntryId === ik.selectedId)),
        bk = ik.notice;
      return (0, jk.jsxs)(Vk, {
        open: ik.open,
        onDismiss: ek.dismiss,
        title: Dk(`${sk}:locatorTitle`),
        className: "ContainmentLocatorPanel",
        decor: (0, jk.jsx)(Re, {}),
        headerExtra: (0, jk.jsx)(Ek, {
          coins: fk.locatorCoins
        }),
        statusRefused: null === bk || void 0 === bk ? void 0 : bk.locatorNoticeRefused,
        status: (0, jk.jsxs)(jk.Fragment, {
          children: [(0, jk.jsx)("span", {
            className: "LocatorKeeperBadge",
            children: Dk(`${sk}:locatorKeeperName`)
          }), null !== bk && Dk(`${sk}:${bk.locatorNoticeKey}`, {
            name: bk.locatorNoticeName
          })]
        }),
        children: [(0, jk.jsx)("div", {
          className: "BoardTiles",
          children: fk.locatorEntries.map((kk => (0, jk.jsxs)(Qk, {
            icon: (0, jk.jsx)(ii, {
              entry: kk
            }),
            name: kk.locatorEntryName,
            selected: kk === Sk,
            locked: !1,
            className: mk()("LocatorTag", {
              Armed: kk.locatorEntryArmed
            }),
            onSelect: () => {
              ek.select(kk.locatorEntryId)
            },
            children: [(0, jk.jsx)(Je, {
              entry: kk
            }), !kk.locatorEntryOwned && (0, jk.jsx)(ki, {
              entry: kk,
              coins: fk.locatorCoins,
              inTile: !0
            })]
          }, kk.locatorEntryId)))
        }), (0, jk.jsx)(Di, {
          view: ik,
          controller: ek,
          entry: Sk
        })]
      })
    }

    function Si(kk) {
      let {
        loadout: ek,
        codex: ik,
        locator: Dk
      } = kk;
      return (0, jk.jsxs)(jk.Fragment, {
        children: [(0, jk.jsx)(ce, {
          controller: ek
        }), (0, jk.jsx)(Jk, {
          controller: ik
        }), (0, jk.jsx)(fi, {
          controller: Dk
        })]
      })
    }
    var bi = ik(38123);
    class ri {
      constructor(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.sendCommand = kk, this.budget = void 0, this.awaitingReply = !1, this.replyTimer = null, this.listeners = new Set, this.budget = new bi.b({
          spacingMs: 0,
          now: ek
        }), this.budget.subscribe((() => {
          this.notify()
        }))
      }
      isPending() {
        return this.awaitingReply || this.budget.isPacing()
      }
      send(kk, ek) {
        return !this.isPending() && (this.awaitingReply = !0, this.replyTimer = setTimeout((() => {
          this.replyTimer = null, this.awaitingReply = !1, ek(), this.notify()
        }), 8e3), this.budget.start(), this.sendCommand(kk), !0)
      }
      onReply() {
        this.awaitingReply = !1, this.clearReplyTimer()
      }
      subscribe(kk) {
        return this.listeners.add(kk), () => {
          this.listeners.delete(kk)
        }
      }
      dispose() {
        this.clearReplyTimer(), this.budget.dispose(), this.listeners.clear()
      }
      clearReplyTimer() {
        null !== this.replyTimer && (clearTimeout(this.replyTimer), this.replyTimer = null)
      }
      notify() {
        for (const kk of this.listeners) kk()
      }
    }
    var Pi = ik(38120);
    const mi = new Map([
      ["npc_general", we],
      ["npc_tentacle_guy", Pi]
    ]);

    function Mi(kk) {
      const ek = mi.get(kk);
      if (void 0 === ek) return null;
      const ik = document.createElement("img");
      return ik.src = ek, ik.alt = "", ik.draggable = !1, ik.style.imageRendering = "pixelated", ik
    }
    const Ki = function() {
      let kk, ek = !1,
        ik = null,
        Pk = null;
      const mk = [],
        Mk = kk => {
          for (const ek of mk) ek !== kk && ek.close();
          (0, rk.r)()
        },
        Kk = kk => {
          kk && (0, rk.h)()
        },
        xk = new ri((ek => {
          kk.sendCommand(ek)
        })),
        nk = new Ue((kk => {
          bk.j.tm(ne, kk, !0)
        }), Mk, Kk, xk),
        Uk = new Wk((kk => {
          bk.j.tm(ak, kk, !0)
        }), Mk, Kk),
        Hk = new ge((kk => {
          bk.j.tm(Oe, kk, !0)
        }), Mk, Kk, xk);
      mk.push(nk, Uk, Hk);
      return {
        onCreate: ek => {
          kk = ek, ik = (0, rk.z)(null, {
            content: (0, Dk.createElement)(Si, {
              loadout: nk,
              codex: Uk,
              locator: Hk
            }),
            onClose: () => {
              for (const kk of mk) kk.close()
            }
          }), Pk = (0, Sk.f)(Mi)
        },
        onReceivedMessageFromServer: (kk, ek) => {
          "containmentLoadout" === kk ? nk.BU(ek) : "containmentLoadoutClose" === kk ? nk.isOpen() && (nk.close(), (0, rk.d)()) : "containmentCodex" === kk ? Uk.BU(ek) : "containmentLocator" === kk && Hk.BU(ek)
        },
        Px: () => {
          ek || fk.b.get("loadingOverlayVisible") || (ek = !0, kk.sendCommand("containmentEntered"))
        },
        onClose: () => {
          var kk, ek;
          null === (kk = ik) || void 0 === kk || kk(), ik = null, null === (ek = Pk) || void 0 === ek || ek(), Pk = null;
          for (const ik of mk) ik.dispose();
          xk.dispose()
        }
      }
    }
  },
  36489: (kk, ek, ik) => {
    ik.d(ek, {
      A: () => Ek,
      E: () => hk,
      H: () => Qk,
      K: () => ak,
      d: () => Pk,
      e: () => Fk,
      i: () => rk,
      j: () => zk,
      l: () => dk,
      p: () => Ck,
      s: () => Ik,
      u: () => qk,
      v: () => sk,
      y: () => vk
    });
    var Dk = ik(38);
    const fk = {
        codeBlock: ["codeBlockIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "worldCodeButton", "exportButton", "helpButton"],
        worldCode: ["worldCodeIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "exportButton", "helpButton"]
      },
      Sk = ["docsButton", "docsPanel", "docsClientOptionsTab", "docsClientOptions", "docsApiReferenceTab", "docsApiReference", "docsCallbacksTab", "docsCallbacks", "hideDocsButton"],
      bk = ["aiHelperButton", "aiPanel", "aiAskBox", "aiModelChip", "aiAnswer", "aiEdits", "aiGear", "aiNotes", "aiGameSettings", "hideAiHelperButton"],
      rk = Sk.filter((kk => "docsButton" !== kk)),
      Pk = bk.filter((kk => "aiHelperButton" !== kk)),
      mk = "codeEditorTutorials",
      Mk = {
        codeBlockIntro: "codeBlockIntroShown",
        worldCodeIntro: "worldCodeIntroShown"
      },
      Kk = {
        welcome: "welcomeComplete",
        docsOverview: "docsOverviewComplete",
        aiHelperOverview: "aiHelperOverviewComplete"
      };
    let xk = null,
      nk = null;
    const Uk = new Set,
      Hk = new Set;
    let wk = null;
    const lk = new Set,
      pk = new Set;

    function yk() {
      pk.forEach((kk => {
        kk()
      }))
    }

    function Yk() {
      if (!xk) {
        const kk = Dk.f.getItem(mk);
        xk = {
          codeBlockIntroShown: !1,
          worldCodeIntroShown: !1,
          welcomeComplete: !1,
          docsOverviewComplete: !1,
          aiHelperOverviewComplete: !1,
          ..."object" === typeof kk && null !== kk ? kk : {}
        }
      }
      return xk
    }

    function Lk(kk) {
      const ek = Yk();
      ek[kk] || (xk = {
        ...ek,
        [kk]: !0
      }, Dk.f.setItem(mk, xk))
    }

    function Ck(kk) {
      return "docsOverview" === kk ? Sk : "aiHelperOverview" === kk ? bk : nk ? fk[nk] : []
    }

    function Ak(kk) {
      return ("worldCodeButton" !== kk || !Yk().worldCodeIntroShown) && !lk.has(kk)
    }

    function jk(kk) {
      var ek;
      return (null === (ek = wk) || void 0 === ek ? void 0 : ek.name) === kk ? wk.stepsDone : Uk
    }

    function sk(kk, ek) {
      if (! function(kk) {
          return wk ? wk.name === kk : "welcome" === kk
        }(kk) || !Ak(ek) || jk(kk).has(ek)) return !1;
      if (wk) return !0;
      const ik = Mk[ek];
      return ik ? !Yk()[ik] || Hk.has(ek) : !Yk()[Kk[kk]]
    }

    function dk(kk) {
      var ek;
      return null !== (ek = Ck(kk).find((ek => sk(kk, ek)))) && void 0 !== ek ? ek : null
    }

    function Vk(kk) {
      var ek;
      Lk(Kk[kk]), (null === (ek = wk) || void 0 === ek ? void 0 : ek.name) === kk && (wk = null)
    }

    function Fk(kk) {
      const ek = (wk ? [wk.name] : ["welcome", "docsOverview"]).find((ek => dk(ek) === kk));
      if (!ek) return;
      jk(ek).add(kk);
      const ik = Mk[kk];
      ik && (Lk(ik), wk || Hk.add(kk)), null === dk(ek) && Vk(ek), yk()
    }

    function uk(kk, ek) {
      const ik = Ck(kk),
        Dk = jk(kk);
      for (let fk = ik.indexOf(ek) - 1; fk >= 0; fk--)
        if (Dk.has(ik[fk]) && Ak(ik[fk])) return ik[fk];
      return null
    }

    function qk(kk, ek) {
      return null !== uk(kk, ek)
    }

    function Ik(kk, ek) {
      const ik = uk(kk, ek);
      ik && (jk(kk).delete(ik), yk())
    }

    function zk(kk) {
      Vk(kk), "welcome" === kk && Ck("welcome").forEach((kk => {
        const ek = Mk[kk];
        ek && Lk(ek)
      })), yk()
    }

    function Qk(kk) {
      wk = {
        name: kk,
        stepsDone: new Set
      }, yk()
    }

    function vk() {
      (wk || 0 !== Uk.size || 0 !== Hk.size) && (wk = null, Uk.clear(), Hk.clear(), yk())
    }

    function Ek(kk, ek) {
      const ik = ek ? kk : nk === kk ? null : nk;
      ik !== nk && (nk = ik, yk())
    }

    function hk(kk, ek) {
      lk.has(kk) === ek && (ek ? lk.delete(kk) : lk.add(kk), yk())
    }

    function ak(kk) {
      return pk.add(kk), () => {
        pk.delete(kk)
      }
    }
  },
  38874: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/breach-zero-uncaught.c7d4410f99269ac1ee2f.webp"
  },
  38882: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/breach-zero.ef5aacecf502228cd20b.webp"
  },
  38888: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/brood-father-uncaught.ee678432c71b7061fae1.webp"
  },
  38897: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/brood-father.e48391955a574c1155fa.webp"
  },
  38906: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/carousel-uncaught.a92757620f569f31d7d2.webp"
  },
  38914: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/carousel.5fc13db7958067d6e1a3.webp"
  },
  38919: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/deadlock-uncaught.feadbdbbf2d040dce5c0.webp"
  },
  38924: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/deadlock.2bcaeaa57376fd78ddcb.webp"
  },
  38929: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/frost-revenant-uncaught.c0271636eeae988b1a40.webp"
  },
  38936: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/frost-revenant.fed6021646d7f0f81876.webp"
  },
  38944: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/hollow-choir-uncaught.7eaab76a15f82bd79558.webp"
  },
  38952: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/hollow-choir.05f9c51994aecece852a.webp"
  },
  38956: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/magma-warden-uncaught.5308736fbb8a503cdfc7.webp"
  },
  38963: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/magma-warden.cc4302a49a39ae962a31.webp"
  },
  38968: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/patient-zero-uncaught.1f9ec012a14c4dbdcc8f.webp"
  },
  38972: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/patient-zero.cc76984bb20e9f9ace76.webp"
  },
  38974: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/siege-engine-uncaught.88e0ad7fec37ba2b4a2e.webp"
  },
  38981: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/siege-engine.b2e2382e415f4ae470ac.webp"
  },
  38985: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/warp-stalker-uncaught.c3b1b82ecb18446b71b0.webp"
  },
  38989: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/warp-stalker.851972c629601b668aa7.webp"
  },
  38120: kk => {
    kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYElEQVR4nGNgIBIwovH/45JnRFaUGN+Comr+whq4GiZ0RVycnGAMAlAxsC0sMN2fvn9DodEBzEQGdUV5hvNnV4JpGJuPkwtTIQh4umZhZWMonDqjGCsbHcCCBkQjs0kDAPeaHpfX1eroAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);