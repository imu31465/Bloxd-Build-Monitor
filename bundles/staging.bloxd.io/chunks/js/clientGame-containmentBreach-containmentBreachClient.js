export const id = 14;
export const ids = [14];
export const modules = {
  36920: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => zk,
      g: () => sk,
      j: () => Vk,
      k: () => ek
    });
    var Xk = Ik(1055),
      Tk = Ik.n(Xk),
      ik = Ik(58),
      yk = Ik(74),
      lk = Ik(1341),
      ak = Ik(1406),
      qk = Ik(1333),
      Lk = Ik(1263),
      tk = Ik(1179),
      Zk = Ik(36927),
      jk = Ik(1096);

    function ek(kk) {
      const [Fk, Ik] = (0, ik.useState)((() => (0, Zk.m)(kk)));
      return (0, ik.useEffect)((() => (Ik((0, Zk.m)(kk)), (0, Zk.K)((() => {
        Ik((0, Zk.m)(kk))
      })))), [kk]), Fk
    }

    function wk(kk, Fk) {
      "function" === typeof kk ? kk(Fk) : kk && (kk.current = Fk)
    }

    function Hk(kk) {
      let {
        tutorial: Fk,
        step: Ik,
        enabled: Xk = !0
      } = kk;
      const Tk = ek(Fk);
      return Xk && Tk === Ik
    }

    function Jk(kk, Fk) {
      const Ik = (0, Zk.o)(kk),
        Xk = Ik.indexOf(Fk);
      return !Ik.slice(Xk + 1).some((Fk => (0, Zk.x)(kk, Fk)))
    }

    function xk(kk, Fk, Ik, Xk) {
      let {
        tutorial: Tk,
        step: ik,
        waitForClick: yk = !1,
        onPrevious: lk
      } = kk;
      const ak = Fk && (0, Zk.v)(Tk, ik),
        qk = Fk && !Jk(Tk, ik),
        tk = yk ? Xk : Ik;
      let jk = null;
      ak ? jk = () => {
        null === lk || void 0 === lk || lk(), (0, Zk.s)(Tk, ik)
      } : qk && (jk = () => {
        (0, Zk.j)(Tk)
      }), (0, Lk.t)("popup", null !== tk && void 0 !== tk ? tk : Ik, jk, Fk && null !== tk, null, ak ? void 0 : "controller:menusSkipTutorial")
    }

    function Pk(kk) {
      let {
        tutorial: Fk,
        step: Ik,
        text: Xk,
        waitForClick: Tk = !1,
        onPrevious: ik
      } = kk;
      const {
        t: yk
      } = (0, tk.y)(), lk = Jk(Fk, Ik);
      return (0, jk.jsxs)(jk.Fragment, {
        children: [(0, jk.jsx)("div", {
          className: "TutorialStepText",
          children: Xk
        }), (0, jk.jsxs)("div", {
          className: "TutorialStepButtons",
          children: [(0, Zk.v)(Fk, Ik) && (0, jk.jsx)(ak.g, {
            className: "TutorialStepButton",
            onClick: () => {
              null === ik || void 0 === ik || ik(), (0, Zk.s)(Fk, Ik)
            },
            children: yk("tutorial:back")
          }), !Tk && (0, jk.jsx)(ak.d, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, Zk.e)(Ik)
            },
            padDefaultFocus: !0,
            children: yk(lk ? "tutorial:done" : "tutorial:next")
          }), !lk && (0, jk.jsx)(ak.g, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, Zk.j)(Fk)
            },
            children: yk("tutorial:skip")
          })]
        })]
      })
    }
    const Kk = 6;

    function Qk(kk) {
      let {
        rect: Fk,
        margin: Ik
      } = kk;
      const Xk = Math.max(0, Fk.top - Ik),
        Tk = Fk.bottom + Ik,
        ik = Math.max(0, Fk.left - Ik),
        yk = Fk.right + Ik;
      return (0, jk.jsxs)(jk.Fragment, {
        children: [(0, jk.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: 0,
            left: 0,
            right: 0,
            height: Xk
          }
        }), (0, jk.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: Tk,
            left: 0,
            right: 0,
            bottom: 0
          }
        }), (0, jk.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: Xk,
            left: 0,
            width: ik,
            height: Tk - Xk
          }
        }), (0, jk.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: Xk,
            left: yk,
            right: 0,
            height: Tk - Xk
          }
        })]
      })
    }

    function sk(kk) {
      let {
        target: Fk,
        placement: Ik,
        boxRef: Xk,
        className: ak,
        spotlightMargin: Lk = Kk,
        children: tk
      } = kk;
      const {
        getArrowProps: Zk,
        getTooltipProps: ek,
        setTooltipRef: wk,
        setTriggerRef: Hk
      } = (0, lk.e)({
        placement: Ik,
        trigger: null,
        visible: !0,
        interactive: !0,
        closeOnOutsideClick: !1,
        offset: [0, Lk]
      });
      (0, ik.useLayoutEffect)((() => {
        Hk(Fk)
      }), [Fk, Hk]);
      const Jk = function(kk, Fk) {
        const [Ik, Xk] = (0, ik.useState)(null);
        return (0, ik.useEffect)((() => {
          if (!Fk || !kk) return void Xk(null);
          let Ik = 0,
            Tk = null;
          const ik = () => {
            const Fk = kk.getBoundingClientRect();
            Tk && Fk.left === Tk.left && Fk.top === Tk.top && Fk.width === Tk.width && Fk.height === Tk.height || (Tk = Fk, Xk(Fk)), Ik = requestAnimationFrame(ik)
          };
          return ik(), () => {
            cancelAnimationFrame(Ik)
          }
        }), [kk, Fk]), Ik
      }(Fk, !0);
      (0, ik.useEffect)((() => {
        null === Fk || void 0 === Fk || Fk.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        })
      }), [Fk]);
      const xk = (0, ik.useCallback)((kk => {
        wk(kk), Xk && (Xk.current = kk)
      }), [wk, Xk]);
      return (0, yk.createPortal)((0, jk.jsxs)(jk.Fragment, {
        children: [Jk && (0, jk.jsx)(Qk, {
          rect: Jk,
          margin: Lk
        }), (0, jk.jsxs)("div", {
          ref: xk,
          ...ek({
            className: Tk()("tooltip-container SmallTextLight TutorialStep", ak)
          }),
          children: [tk, (0, jk.jsx)("div", {
            ...Zk({
              className: "tooltip-arrow"
            })
          })]
        })]
      }), (0, qk.j)())
    }
    const Vk = (0, ik.forwardRef)((function(kk, Fk) {
      let {
        placement: Ik = "right",
        children: Xk,
        ...Tk
      } = kk;
      const yk = Hk(Tk),
        lk = (0, ik.useRef)(null),
        ak = (0, ik.useRef)(null);
      xk(Tk, yk, lk, ak);
      const [qk, Lk] = (0, ik.useState)(null), tk = Xk.ref, Zk = (0, ik.useCallback)((kk => {
        ak.current = kk, Lk(kk), wk(Fk, kk), wk(tk, kk)
      }), [Fk, tk]);
      return (0, jk.jsxs)(jk.Fragment, {
        children: [(0, ik.cloneElement)(Xk, {
          ref: Zk
        }), yk && (0, jk.jsx)(sk, {
          target: qk,
          placement: Ik,
          boxRef: lk,
          children: (0, jk.jsx)(Pk, {
            ...Tk
          })
        })]
      })
    }));

    function zk(kk) {
      const Fk = Hk(kk),
        Ik = (0, ik.useRef)(null);
      return xk(kk, Fk, Ik, null), Fk ? (0, yk.createPortal)((0, jk.jsx)("div", {
        className: "TutorialCentreBackdrop",
        children: (0, jk.jsx)("div", {
          ref: Ik,
          className: "tooltip-container SmallTextLight TutorialStep TutorialCentreStep",
          children: (0, jk.jsx)(Pk, {
            ...kk
          })
        })
      }), (0, qk.j)()) : null
    }
  },
  38540: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => yk
    });
    const Xk = 4,
      Tk = 12e3,
      ik = 1e3;
    class yk {
      constructor() {
        let {
          limit: kk = Xk,
          windowMs: Fk = Tk,
          spacingMs: Ik = ik,
          now: yk = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = kk, this.windowMs = Fk, this.spacingMs = Ik, this.now = yk
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
          Fk = this.lastSentAt + this.spacingMs,
          Ik = Math.min(Fk > kk ? Fk : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        Ik !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, Ik - kk)))
      }
      notify() {
        for (const kk of this.listeners) kk()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  36607: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      C: () => xk,
      e: () => ik,
      i: () => wk,
      k: () => Hk,
      o: () => lk,
      q: () => Zk,
      r: () => Jk,
      v: () => tk,
      x: () => Pk,
      y: () => ek
    });
    var Xk = Ik(25),
      Tk = Ik(34);
    const ik = "clientGameInventoryButtonsChanged",
      yk = new Map;

    function lk() {
      return [...yk.values()].sort(((kk, Fk) => {
        var Ik, Xk;
        return (null !== (Ik = kk.order) && void 0 !== Ik ? Ik : 0) - (null !== (Xk = Fk.order) && void 0 !== Xk ? Xk : 0)
      }))
    }
    let ak = null;

    function qk(kk) {
      ak = kk
    }
    let Lk = !1;

    function tk(kk) {
      Lk = !0;
      try {
        kk.onClick()
      } finally {
        Lk = !1
      }
      kk.panel && "clientGame" === Xk.d.get("openInGameMenuName") && qk(kk.id)
    }

    function Zk() {
      return Lk
    }

    function jk() {
      return lk().filter((kk => kk.panel && !kk.disabled))
    }

    function ek(kk) {
      const Fk = jk(),
        Ik = Fk.findIndex((kk => kk.id === ak));
      return !(Ik < 0 || Fk.length < 2) && (tk(Fk[(Ik + kk + Fk.length) % Fk.length]), !0)
    }

    function wk() {
      return null !== ak && jk().length > 1
    }

    function Hk() {
      qk(null)
    }

    function Jk() {
      "inventory" !== Xk.d.get("openInGameMenuName") && qk(null)
    }

    function xk() {
      const kk = ak;
      return qk(null), kk
    }

    function Pk(kk) {
      return yk.set(kk.id, kk), Tk.g.GL(ik, lk(), !0), () => {
        yk.get(kk.id) === kk && (yk.delete(kk.id), Tk.g.GL(ik, lk()))
      }
    }
  },
  38525: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => Xk
    });
    class Xk {
      constructor(kk, Fk, Ik) {
        this.GL = kk, this.beforeOpen = Fk, this.afterClose = Ik, this.open = !1, this.ee = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.ee && (this.open = !0, this.beforeOpen(this), this.emit())
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
        this.open = !1, this.emit(), this.ee = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.ee || (this.snapshot = this.buildSnapshot(), this.GL(this.snapshot))
      }
    }
  },
  36600: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => lk,
      e: () => Hk,
      f: () => Jk,
      j: () => Zk,
      m: () => qk,
      p: () => wk,
      r: () => jk,
      v: () => Lk
    });
    var Xk = Ik(25),
      Tk = Ik(34),
      ik = Ik(1270),
      yk = Ik(36607);
    const lk = "clientGameUiChanged";
    let ak = null;

    function qk() {
      return ak
    }

    function Lk(kk, Fk) {
      const Ik = {
        content: kk,
        menu: Fk
      };
      return ak = Ik, Tk.g.GL(lk, ak, !0), () => {
        ak === Ik && (ak = null, ek = !1, Hk(), Tk.g.GL(lk, null))
      }
    }
    let tk = null;

    function Zk() {
      return tk
    }

    function jk(kk) {
      return tk = kk, () => {
        tk === kk && (tk = null)
      }
    }
    let ek = !1;

    function wk() {
      const kk = Xk.d.get("openInGameMenuName");
      "clientGame" !== kk && (ek = "inventory" === kk), (0, yk.q)() || (0, yk.k)(), (0, ik.m)(ik.c), Xk.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function Hk() {
      xk(!1)
    }

    function Jk() {
      xk(ek)
    }

    function xk(kk) {
      "clientGame" === Xk.d.get("openInGameMenuName") && Xk.d.set({
        openInGameMenuName: kk ? "inventory" : null
      }), kk || (0, yk.k)(), ek = !1
    }
  },
  39299: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      default: () => tI
    });
    var Xk = Ik(58);
    var Tk = Ik(25),
      ik = Ik(1859),
      yk = Ik(34),
      lk = Ik(36600),
      ak = Ik(1055),
      qk = Ik.n(ak),
      Lk = Ik(1402),
      tk = Ik(1179),
      Zk = Ik(4516),
      jk = Ik(1320),
      ek = Ik(1406),
      wk = Ik(1864),
      Hk = Ik(1333),
      Jk = Ik(1849),
      xk = Ik(1907),
      Pk = Ik(198);
    const Kk = Ik(39305),
      Qk = Object.fromEntries(Kk.keys().map((kk => [kk.replace(/^\.\/(.*)\.webp$/, "$1"), Kk(kk)]))),
      sk = new Set;

    function Vk(kk, Fk) {
      const Ik = Fk ? kk : `${kk}-uncaught`,
        Xk = (0, Pk.d)(Qk, Ik);
      return void 0 !== Xk || sk.has(Ik) || (sk.add(Ik), console.warn(`Containment Breach has no mugshot ${Ik}: run tools/harnessCutouts/ContainmentMugshotCapture.ts`)), Xk
    }
    var zk = Ik(1096);
    const Sk = "containmentBreach",
      vk = "Gold Coin";

    function Ek(kk) {
      let {
        open: Fk,
        onDismiss: Ik,
        title: Xk,
        className: Tk,
        decor: ik,
        headerExtra: yk,
        status: lk,
        statusRefused: ak = !1,
        children: Lk
      } = kk;
      const tk = `${Tk}Title`;
      return (0, zk.jsx)(Zk.c, {
        show: Fk,
        close: Ik,
        togglePointerLock: !1,
        className: "ContainmentBoardOverlay",
        children: (0, zk.jsxs)("section", {
          className: qk()("ContainmentBoardPanel", Tk),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": tk,
          children: [ik && (0, zk.jsx)("div", {
            className: "BoardDecor",
            "aria-hidden": "true",
            children: ik
          }), (0, zk.jsxs)("header", {
            className: "BoardHeader",
            children: [(0, zk.jsx)("h2", {
              id: tk,
              className: "VisuallyHidden",
              children: Xk
            }), yk, (0, zk.jsx)(ek.k, {
              onClick: Ik
            })]
          }), (0, zk.jsx)("div", {
            className: "BoardBody",
            children: Lk
          }), void 0 !== lk && (0, zk.jsx)("footer", {
            className: qk()("BoardStatus", {
              Refused: ak
            }),
            children: lk
          })]
        })
      })
    }

    function Ok(kk) {
      let {
        itemName: Fk
      } = kk;
      return (0, zk.jsx)(wk.d, {
        itemName: Fk,
        amount: 0
      })
    }

    function nk(kk) {
      let {
        anomalyId: Fk,
        caught: Ik
      } = kk;
      const Tk = (0, Xk.useRef)(null);
      return (0, jk.c)(Tk, !Ik), (0, zk.jsx)("span", {
        ref: Tk,
        className: qk()("BoardMugshot", {
          Uncaught: !Ik
        }),
        children: (0, zk.jsx)("img", {
          src: Vk(Fk, Ik),
          alt: "",
          draggable: !1
        })
      })
    }

    function Gk(kk) {
      let {
        itemName: Fk,
        amount: Ik,
        eq: Xk,
        inTile: Tk = !1
      } = kk;
      return (0, zk.jsx)(Hk.g, {
        delayShow: 200,
        hoverOnly: Tk,
        placement: "top",
        tooltipClassName: "BoardChipTooltipBox",
        tooltipInner: (0, zk.jsx)(uk, {
          itemName: Fk,
          amount: Ik,
          eq: Xk
        }),
        children: (0, zk.jsxs)("span", {
          className: qk()("BoardChip", {
            Short: void 0 !== Xk && Xk < Ik
          }),
          children: [(0, zk.jsx)("span", {
            className: "BoardChipIcon",
            children: (0, zk.jsx)(Ok, {
              itemName: Fk
            })
          }), Ik.toLocaleString()]
        })
      })
    }
    const pk = /^(.*?)\s*Salvaged from (?:an? )?(.+?)\.?$/;

    function uk(kk) {
      var Fk;
      let {
        itemName: Ik,
        amount: Xk,
        eq: Tk
      } = kk;
      const {
        t: ik
      } = (0, tk.y)(), yk = (0, xk.i)("itemInfo", (kk => kk[Ik])), {
        lore: lk,
        droppedBy: ak
      } = function(kk) {
        if ("string" !== typeof kk) return {
          lore: kk,
          droppedBy: null
        };
        const Fk = pk.exec(kk);
        return null === Fk ? {
          lore: kk,
          droppedBy: null
        } : {
          lore: "" === Fk[1] ? void 0 : Fk[1],
          droppedBy: Fk[2]
        }
      }(null === yk || void 0 === yk ? void 0 : yk.description);
      return (0, zk.jsxs)("div", {
        className: "BoardChipTooltip",
        children: [(0, zk.jsxs)("div", {
          className: "BoardChipTooltipHeader",
          children: [(0, zk.jsx)("span", {
            className: "BoardChipTooltipIcon",
            children: (0, zk.jsx)(Ok, {
              itemName: Ik
            })
          }), (0, zk.jsx)(Jk.c, {
            text: null !== (Fk = null === yk || void 0 === yk ? void 0 : yk.displayName) && void 0 !== Fk ? Fk : Ik,
            className: "BoardChipTooltipName"
          })]
        }), (void 0 !== lk || null !== ak) && (0, zk.jsxs)("div", {
          className: "BoardChipTooltipBody",
          children: [void 0 !== lk && (0, zk.jsx)(Jk.c, {
            text: lk,
            className: "BoardChipTooltipDescription"
          }), null !== ak && (0, zk.jsxs)("span", {
            className: "BoardChipTooltipSource",
            children: [(0, zk.jsx)("span", {
              className: "BoardChipTooltipLabel",
              children: ik(`${Sk}:chipDroppedBy`)
            }), ak]
          })]
        }), void 0 !== Tk && (0, zk.jsxs)("div", {
          className: qk()("BoardChipTooltipHeld", {
            Short: Tk < Xk
          }),
          children: [(0, zk.jsx)("span", {
            className: "BoardChipTooltipLabel",
            children: ik(`${Sk}:chipYouHave`)
          }), (0, zk.jsxs)("span", {
            className: "BoardChipTooltipCount",
            children: [(0, zk.jsx)("span", {
              className: "BoardChipTooltipHeldAmount",
              children: Tk.toLocaleString()
            }), ` / ${Xk.toLocaleString()}`]
          }), (0, zk.jsx)("span", {
            className: "BoardChipTooltipMeter",
            children: (0, zk.jsx)("span", {
              style: {
                width: (Xk > 0 ? 100 * Math.min(1, Tk / Xk) : 100) + "%"
              }
            })
          })]
        })]
      })
    }

    function bk(kk) {
      let {
        icon: Fk,
        name: Ik,
        selected: Xk,
        locked: Tk,
        className: ik,
        buttonRef: yk,
        onSelect: lk,
        children: ak
      } = kk;
      return (0, zk.jsxs)("button", {
        ref: yk,
        type: "button",
        className: qk()("BoardTile", ik, {
          Selected: Xk,
          Locked: Tk
        }),
        onClick: lk,
        children: [(0, zk.jsx)("span", {
          className: "BoardTileIcon",
          children: Fk
        }), (0, zk.jsx)("span", {
          className: "BoardTileName",
          children: Ik
        }), ak]
      })
    }

    function Rk(kk) {
      let {
        icon: Fk,
        name: Ik,
        children: Xk
      } = kk;
      return (0, zk.jsxs)("header", {
        className: "BoardDetailHeader",
        children: [(0, zk.jsx)("span", {
          className: "BoardDetailIcon",
          children: Fk
        }), (0, zk.jsxs)("div", {
          className: "BoardDetailHeading",
          children: [(0, zk.jsx)("h3", {
            children: Ik
          }), (0, zk.jsx)("span", {
            className: "BoardDetailStatus",
            children: Xk
          })]
        })]
      })
    }

    function Uk(kk) {
      let {
        coins: Fk,
        children: Ik
      } = kk;
      return (0, zk.jsxs)("div", {
        className: "BoardWallet",
        children: [(0, zk.jsx)(Gk, {
          itemName: vk,
          amount: Fk
        }), Ik]
      })
    }
    var Ck = Ik(38525);
    const Nk = "containmentCodexView";
    class ck extends Ck.e {
      constructor() {
        super(...arguments), this.entries = [], this.selectedId = "", this.snapshot = this.buildSnapshot(), this.select = kk => {
          this.selectedId = kk, this.emit()
        }
      }
      Pe(kk) {
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
    const Wk = {
        codexAnyDifficulty: `${Sk}:codexNeedsAny`,
        codexNormalOnly: `${Sk}:codexNeedsNormal`,
        codexHardOnly: `${Sk}:codexNeedsHard`
      },
      fk = {
        codexContained: "Contained",
        codexEncountered: "Sighted",
        codexUnidentified: "Unknown"
      },
      Bk = {
        codexContained: `${Sk}:codexContainedBadge`,
        codexEncountered: `${Sk}:codexEncounteredBadge`,
        codexUnidentified: `${Sk}:codexUnidentifiedBadge`
      },
      dk = ["94%", "81%", "88%", "46%", "72%"];

    function Yk(kk) {
      let {
        entry: Fk
      } = kk;
      const {
        t: Ik
      } = (0, tk.y)();
      return (0, zk.jsx)("span", {
        className: qk()("BoardBadge", fk[Fk.codexEntryState]),
        children: Ik(Bk[Fk.codexEntryState])
      })
    }

    function Ak(kk) {
      const {
        t: Fk
      } = (0, tk.y)();
      return "codexUnidentified" === kk.codexEntryState ? Fk(`${Sk}:codexUnidentifiedName`) : kk.codexEntryName
    }

    function gk(kk) {
      let {
        entry: Fk
      } = kk;
      return "codexUnidentified" === Fk.codexEntryState ? (0, zk.jsx)(Ok, {
        itemName: "Book"
      }) : (0, zk.jsxs)("span", {
        className: "CodexPhoto",
        children: [(0, zk.jsx)(nk, {
          anomalyId: Fk.codexEntryId,
          caught: "codexContained" === Fk.codexEntryState
        }), (0, zk.jsx)("img", {
          className: "CodexPaperclip",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAMCAYAAACulacQAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGNggIIXb97/X7V57/+Wvtn/GZDBqs17UQTgClahScBATHrlf5ySeHWimo9NMbokCp9OkmD/oasGCaJLAAC5ZUIBS85GiAAAAABJRU5ErkJggg==",
          alt: "",
          draggable: !1
        })]
      })
    }

    function mk(kk) {
      let {
        entry: Fk,
        selected: Ik,
        onSelect: Xk
      } = kk;
      const Tk = "codexUnidentified" === Fk.codexEntryState;
      return (0, zk.jsxs)(bk, {
        icon: (0, zk.jsx)(gk, {
          entry: Fk
        }),
        name: Ak(Fk),
        selected: Ik,
        locked: Tk,
        className: qk()("CodexFolder", fk[Fk.codexEntryState]),
        onSelect: () => {
          Xk(Fk.codexEntryId)
        },
        children: [!Tk && (0, zk.jsx)(Yk, {
          entry: Fk
        }), Tk && (0, zk.jsx)("img", {
          className: "CodexSeal",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAARElEQVR4nGNggIIGHp7/MAzjw+TAnMf+/mB8RkQEjOGKYZLIgsiK4AqQJZA1gBXAOHgVwCRQJJEdCVOEYj8yQPciTAEAz0hgyamUqskAAAAASUVORK5CYII=",
          alt: "",
          draggable: !1
        })]
      })
    }

    function hk(kk) {
      let {
        count: Fk
      } = kk;
      const Ik = [];
      for (let Xk = Math.min(Fk, 25); Xk > 0; Xk -= 5) Ik.push(Math.min(Xk, 5));
      return (0, zk.jsx)("span", {
        className: "CodexTallyMarks",
        "aria-hidden": "true",
        children: Ik.map(((kk, Fk) => (0, zk.jsx)("span", {
          className: qk()("CodexTallyGroup", {
            Gate: 5 === kk
          }),
          children: Array.from({
            length: Math.min(kk, 4)
          }, ((kk, Fk) => (0, zk.jsx)("span", {
            className: "CodexTallyMark"
          }, Fk)))
        }, Fk)))
      })
    }

    function rk(kk) {
      let {
        contained: Fk,
        total: Ik
      } = kk;
      const {
        t: Xk
      } = (0, tk.y)();
      return (0, zk.jsxs)("div", {
        className: "CodexProgress",
        children: [Xk(`${Sk}:codexProgress`, {
          contained: String(Fk),
          total: String(Ik)
        }), (0, zk.jsx)("span", {
          className: "CodexProgressMeter",
          children: (0, zk.jsx)("span", {
            style: {
              width: Fk / Ik * 100 + "%"
            }
          })
        })]
      })
    }

    function Dk(kk) {
      let {
        entry: Fk,
        fileNumber: Ik
      } = kk;
      const {
        t: Xk
      } = (0, tk.y)(), Tk = "codexContained" === Fk.codexEntryState;
      return (0, zk.jsx)("section", {
        className: "BoardDetail",
        children: (0, zk.jsxs)("article", {
          className: qk()("CodexDossier", fk[Fk.codexEntryState]),
          children: [(0, zk.jsx)("span", {
            className: "CodexFileNumber",
            children: Xk(`${Sk}:codexFileNumber`, {
              number: String(Ik).padStart(3, "0")
            })
          }), (0, zk.jsx)(Rk, {
            icon: (0, zk.jsx)(gk, {
              entry: Fk
            }),
            name: Ak(Fk),
            children: (0, zk.jsx)(Yk, {
              entry: Fk
            })
          }), Tk && (0, zk.jsxs)(zk.Fragment, {
            children: [(0, zk.jsx)("p", {
              className: "BoardDescription",
              children: Fk.codexEntryLore
            }), (0, zk.jsxs)("p", {
              className: "CodexTally",
              children: [Xk(`${Sk}:codexContainments`, {
                count: String(Fk.codexEntryContainedCount)
              }), (0, zk.jsx)(hk, {
                count: Fk.codexEntryContainedCount
              })]
            }), (0, zk.jsx)("span", {
              className: "CodexClosedStamp",
              "aria-hidden": "true",
              children: Xk(`${Sk}:codexContainedBadge`)
            })]
          }), !Tk && (0, zk.jsxs)(zk.Fragment, {
            children: [(0, zk.jsxs)("div", {
              className: "CodexRedaction",
              children: [dk.map((kk => (0, zk.jsx)("span", {
                className: "CodexRedactedLine",
                style: {
                  width: kk
                }
              }, kk))), (0, zk.jsx)("p", {
                className: "CodexRedacted",
                children: Xk(`${Sk}:codexRedacted`)
              })]
            }), "" !== Fk.codexEntryHint && (0, zk.jsxs)("aside", {
              className: "CodexNote",
              children: [(0, zk.jsx)("h4", {
                children: Xk(`${Sk}:codexHintLabel`)
              }), (0, zk.jsx)("p", {
                children: Fk.codexEntryHint
              })]
            }), (0, zk.jsx)("p", {
              className: "CodexClearance",
              children: Xk(Wk[Fk.codexEntryDifficulty])
            })]
          })]
        })
      })
    }

    function Mk(kk) {
      let {
        controller: Fk
      } = kk;
      const Ik = (0, Lk.f)(Nk, Fk.getSnapshot()),
        {
          t: Xk
        } = (0, tk.y)();
      if (0 === Ik.entries.length) return null;
      const Tk = Ik.entries.find((kk => kk.codexEntryId === Ik.selectedId)),
        ik = Ik.entries.filter((kk => "codexContained" === kk.codexEntryState)).length,
        yk = Ik.entries.map((kk => kk.codexEntryId)).sort().indexOf(Tk.codexEntryId) + 1;
      return (0, zk.jsxs)(Ek, {
        open: Ik.open,
        onDismiss: Fk.dismiss,
        title: Xk(`${Sk}:codexTitle`),
        className: "ContainmentCodexPanel",
        headerExtra: (0, zk.jsx)(rk, {
          contained: ik,
          total: Ik.entries.length
        }),
        children: [(0, zk.jsx)("div", {
          className: "BoardTiles",
          children: Ik.entries.map((kk => (0, zk.jsx)(mk, {
            entry: kk,
            selected: kk === Tk,
            onSelect: Fk.select
          }, kk.codexEntryId)))
        }), (0, zk.jsx)(Dk, {
          entry: Tk,
          fileNumber: yk
        })]
      })
    }
    var kF = Ik(337);
    class FF extends Ck.e {
      constructor(kk, Fk, Ik, Xk, Tk, ik) {
        super(kk, Fk, Ik), this.pacer = Xk, this.command = Tk, this.predict = ik, this.board = null, this.confirmed = null, this.selectedId = "", this.notice = null, this.unsubscribePacer = void 0, this.select = kk => {
          this.selectedId = kk, this.emit()
        }, this.act = (kk, Fk) => {
          if (!this.open || null === this.board || !this.pacer.send(`${this.command} ${kk} ${Fk}`, this.rollBack)) return;
          const Ik = this.predict(this.board, kk, Fk);
          null !== Ik && (this.board = Ik.board, this.notice = Ik.notice, this.emit())
        }, this.rollBack = () => {
          this.board !== this.confirmed && (this.board = this.confirmed, this.notice = null)
        }, this.unsubscribePacer = Xk.subscribe((() => {
          this.emit()
        }))
      }
      Pe(kk) {
        const Fk = this.messageOpens(kk);
        if (Fk && this.open) return this.board === this.confirmed && (this.board = kk), this.confirmed = kk, void this.emit();
        if (this.board = kk, this.confirmed = kk, this.pacer.onReply(), Fk) return this.notice = null, this.selectedId = this.openingSelection(kk), void this.show();
        const Ik = this.messageNotice(kk);
        null !== Ik && (this.notice = Ik), this.emit()
      }
      dispose() {
        this.unsubscribePacer(), super.dispose()
      }
      onClosed() {
        this.notice = null
      }
    }

    function IF(kk, Fk) {
      return kk.loadoutCoins >= Fk.loadoutCostCoins && Fk.loadoutCostParts.every((Fk => function(kk, Fk) {
        return XF(kk, Fk).loadoutHeldPartAmount
      }(kk, Fk.loadoutPartCurrency) >= Fk.loadoutPartAmount))
    }

    function XF(kk, Fk) {
      return kk.loadoutHeldParts.find((kk => kk.loadoutHeldPartCurrency === Fk))
    }

    function TF(kk, Fk) {
      return kk.loadoutSlots.find((kk => kk.loadoutSlotKind === Fk))
    }

    function iF(kk) {
      return kk.loadoutPerks.filter((kk => kk.loadoutPerkEquipped)).length >= kk.loadoutMaxPerks
    }

    function yF(kk, Fk, Ik) {
      for (const Tk of kk.loadoutSlots) {
        const Xk = Tk.loadoutSlotOptions.find((kk => kk.loadoutOptionId === Ik));
        if (Xk) return "loadoutArmour" === Tk.loadoutSlotKind ? aF(kk, Tk, Xk, Fk) : lF(kk, Tk, Xk, Fk)
      }
      const Xk = kk.loadoutPerks.find((kk => kk.loadoutPerkId === Ik));
      return Xk ? function(kk, Fk, Ik) {
        const Xk = Fk.loadoutPerkOwned,
          Tk = Fk.loadoutPerkEquipped,
          ik = Fk.loadoutPerkName,
          yk = iF(kk);
        if ("loadoutUnlock" === Ik) {
          if (Xk || !IF(kk, Fk.loadoutPerkCost)) return null;
          const Ik = {
            ...Fk,
            loadoutPerkOwned: !0,
            loadoutPerkEquipped: !yk
          };
          return {
            board: LF(tF(kk, Fk.loadoutPerkCost), Ik),
            notice: ZF(yk ? "loadoutNoticeUnlockedNoRoom" : "loadoutNoticeUnlocked", ik)
          }
        }
        if ("loadoutUpgrade" === Ik || !Xk || "loadoutEquip" === Ik === Tk || !Tk && yk) return null;
        return {
          board: LF(kk, {
            ...Fk,
            loadoutPerkEquipped: !Tk
          }),
          notice: ZF(Tk ? "loadoutNoticeUnequipped" : "loadoutNoticeEquipped", ik)
        }
      }(kk, Xk, Fk) : null
    }

    function lF(kk, Fk, Ik, Xk) {
      const Tk = Ik.loadoutOptionOwnedTier,
        ik = Ik.loadoutOptionName;
      if ("loadoutEquip" === Xk) return 0 === Tk ? null : {
        board: qF(kk, Fk, Ik.loadoutOptionId, null),
        notice: ZF("loadoutNoticeEquipped", ik)
      };
      const yk = "loadoutUnlock" === Xk;
      if (yk && 0 !== Tk || "loadoutUpgrade" === Xk && (0 === Tk || Tk >= Ik.loadoutOptionTiers.length) || "loadoutUnequip" === Xk) return null;
      const lk = Ik.loadoutOptionTiers[Tk].loadoutTierCost;
      if (!IF(kk, lk)) return null;
      const ak = {
          ...Ik,
          loadoutOptionOwnedTier: Tk + 1
        },
        qk = yk ? Ik.loadoutOptionId : Fk.loadoutSlotEquippedId;
      return {
        board: qF(tF(kk, lk), Fk, qk, ak),
        notice: yk ? ZF("loadoutNoticeUnlocked", ik) : ZF("loadoutNoticeUpgraded", ik, Tk + 1)
      }
    }

    function aF(kk, Fk, Ik, Xk) {
      const Tk = Ik.loadoutOptionOwnedTier > 0,
        ik = Ik.loadoutOptionName;
      if ("loadoutEquip" === Xk && Tk) return {
        board: qF(kk, Fk, Ik.loadoutOptionId, null),
        notice: ZF("loadoutNoticeEquipped", ik)
      };
      const yk = Ik.loadoutOptionTiers[0].loadoutTierCost;
      return "loadoutUnlock" !== Xk || Tk || !IF(kk, yk) ? null : {
        board: qF(tF(kk, yk), Fk, Ik.loadoutOptionId, {
          ...Ik,
          loadoutOptionOwnedTier: 1
        }),
        notice: ZF("loadoutNoticeUnlocked", ik)
      }
    }

    function qF(kk, Fk, Ik, Xk) {
      const Tk = {
        ...Fk,
        loadoutSlotEquippedId: Ik,
        loadoutSlotOptions: Fk.loadoutSlotOptions.map((kk => null !== Xk && kk.loadoutOptionId === Xk.loadoutOptionId ? Xk : kk))
      };
      return {
        ...kk,
        loadoutSlots: kk.loadoutSlots.map((kk => kk === Fk ? Tk : kk))
      }
    }

    function LF(kk, Fk) {
      return {
        ...kk,
        loadoutPerks: kk.loadoutPerks.map((kk => kk.loadoutPerkId === Fk.loadoutPerkId ? Fk : kk))
      }
    }

    function tF(kk, Fk) {
      return {
        ...kk,
        loadoutCoins: kk.loadoutCoins - Fk.loadoutCostCoins,
        loadoutHeldParts: kk.loadoutHeldParts.map((kk => {
          const Ik = Fk.loadoutCostParts.find((Fk => Fk.loadoutPartCurrency === kk.loadoutHeldPartCurrency));
          return Ik ? {
            ...kk,
            loadoutHeldPartAmount: kk.loadoutHeldPartAmount - Ik.loadoutPartAmount
          } : kk
        }))
      }
    }

    function ZF(kk, Fk) {
      return {
        loadoutNoticeKey: kk,
        loadoutNoticeRefused: !1,
        loadoutNoticeName: Fk,
        loadoutNoticeTier: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
      }
    }
    const jF = "containmentLoadoutView";
    class eF extends FF {
      constructor(kk, Fk, Ik, Xk) {
        super(kk, Fk, Ik, Xk, "loadout", yF), this.slot = "loadoutPrimary", this.snapshot = this.buildSnapshot(), this.selectSlot = kk => {
          this.slot = kk, this.selectedId = wF(this.board, kk), this.emit()
        }
      }
      messageOpens(kk) {
        return kk.loadoutMessageOpens
      }
      messageNotice(kk) {
        return kk.loadoutNotice
      }
      openingSelection(kk) {
        return wF(kk, this.slot)
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

    function wF(kk, Fk) {
      if ("loadoutPerks" === Fk) {
        var Ik;
        const Fk = kk.loadoutPerks;
        return (null !== (Ik = Fk.find((kk => kk.loadoutPerkEquipped))) && void 0 !== Ik ? Ik : Fk[0]).loadoutPerkId
      }
      return TF(kk, Fk).loadoutSlotEquippedId
    }
    const HF = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAY0lEQVR4nGNgIAP8x4FRwP/sFt3/EYU6YBqGIwp1MBSDBUH4/3nW//83csD5DOgKfeKNsWIMhV+///qvbOT7/87cMjCG8TEUgiSLqlpRMEgMQ+HJvgy4aTAMEsPqc2KChyAAAFxNbnylK5O6AAAAAElFTkSuQmCC";
    var JF = Ik(36920),
      xF = Ik(1263);
    const PF = {
        loadoutPrimary: `${Sk}:loadoutSlotPrimary`,
        loadoutSecondary: `${Sk}:loadoutSlotSecondary`,
        loadoutOffensive: `${Sk}:loadoutSlotOffensive`,
        loadoutSelfHelp: `${Sk}:loadoutSlotSelfHelp`,
        loadoutArmour: `${Sk}:loadoutSlotArmour`,
        loadoutPerks: `${Sk}:loadoutSlotPerks`
      },
      KF = {
        section: "right",
        rZ: "bottom",
        act: "top"
      },
      QF = (0, Xk.createContext)({
        step: null,
        targetRef: () => {}
      });

    function sF() {
      const {
        step: kk,
        targetRef: Fk
      } = (0, Xk.useContext)(QF);
      return (Ik, Xk) => (null === kk || void 0 === kk ? void 0 : kk.kind) === Ik && kk.id === Xk ? Fk : void 0
    }

    function VF(kk, Fk) {
      const Ik = Fk.loadoutTargetId;
      if ("loadoutPerks" === Fk.loadoutTargetSection) {
        const Fk = kk.loadoutPerks.find((kk => kk.loadoutPerkId === Ik));
        return {
          name: Fk.loadoutPerkName,
          owned: Fk.loadoutPerkOwned,
          equipped: Fk.loadoutPerkEquipped
        }
      }
      const Xk = TF(kk, Fk.loadoutTargetSection),
        Tk = Xk.loadoutSlotOptions.find((kk => kk.loadoutOptionId === Ik));
      return {
        name: Tk.loadoutOptionName,
        owned: Tk.loadoutOptionOwnedTier > 0,
        equipped: Xk.loadoutSlotEquippedId === Ik
      }
    }

    function zF(kk, Fk, Ik, Xk) {
      const [Tk, ik] = kk(`${Sk}:${Fk}`, {
        [Ik]: "\x01"
      }).split("\x01");
      return (0, zk.jsxs)(zk.Fragment, {
        children: [Tk, (0, zk.jsx)("span", {
          className: "LoadoutWalkthroughName",
          children: Xk
        }), ik]
      })
    }

    function SF(kk) {
      let {
        view: Fk,
        onDismiss: Ik,
        children: Tk
      } = kk;
      const {
        t: ik
      } = (0, tk.y)(), yk = Fk.loadout, lk = Fk.open ? yk.loadoutWalkthrough.map((kk => ({
        target: kk,
        info: VF(yk, kk)
      }))).find((kk => {
        let {
          info: Fk
        } = kk;
        return !Fk.equipped
      })) : void 0;
      let ak = null,
        qk = null;
      if (void 0 !== lk) {
        const {
          target: kk,
          info: Ik
        } = lk;
        Fk.slot !== kk.loadoutTargetSection ? (ak = {
          kind: "section",
          id: kk.loadoutTargetSection
        }, qk = zF(ik, "loadoutWalkthroughSection", "section", ik(PF[kk.loadoutTargetSection]))) : Fk.selectedId !== kk.loadoutTargetId ? (ak = {
          kind: "rZ",
          id: kk.loadoutTargetId
        }, qk = zF(ik, "loadoutWalkthroughPick", "name", Ik.name)) : (ak = {
          kind: "act",
          id: kk.loadoutTargetId
        }, qk = zF(ik, Ik.owned ? "loadoutWalkthroughEquip" : "loadoutWalkthroughUnlock", "name", Ik.name))
      }
      const Lk = null === ak ? null : function(kk) {
          return `${kk.kind}:${kk.id}`
        }(ak),
        [Zk, jk] = (0, Xk.useState)(null),
        ek = (0, Xk.useCallback)((kk => {
          jk((Fk => null !== kk ? {
            key: Lk,
            node: kk
          } : (null === Fk || void 0 === Fk ? void 0 : Fk.key) === Lk ? null : Fk))
        }), [Lk]),
        wk = null !== Lk && (null === Zk || void 0 === Zk ? void 0 : Zk.key) === Lk ? Zk.node : null;
      return (0, zk.jsxs)(QF.Provider, {
        value: {
          step: ak,
          targetRef: ek
        },
        children: [Tk, null !== ak && null !== wk && (0, zk.jsx)(oF, {
          target: wk,
          placement: KF[ak.kind],
          onDismiss: Ik,
          children: qk
        }, Lk)]
      })
    }

    function oF(kk) {
      let {
        target: Fk,
        placement: Ik,
        onDismiss: Tk,
        children: ik
      } = kk;
      const {
        t: yk
      } = (0, tk.y)(), lk = (0, Xk.useRef)(Fk);
      return lk.current = Fk, (0, xF.t)("popup", lk, Tk), (0, zk.jsxs)(JF.g, {
        target: Fk,
        placement: Ik,
        className: "LoadoutWalkthroughStep",
        spotlightMargin: 10,
        children: [(0, zk.jsxs)("div", {
          className: "LoadoutWalkthroughHeader",
          children: [(0, zk.jsx)("img", {
            className: "LoadoutWalkthroughPortrait",
            src: HF,
            alt: "",
            draggable: !1
          }), (0, zk.jsx)("span", {
            className: "LoadoutWalkthroughSpeaker",
            children: yk(`${Sk}:operatorName`)
          }), (0, zk.jsx)(ek.k, {
            onClick: Tk,
            ariaLabel: yk(`${Sk}:loadoutWalkthroughClose`),
            padIgnore: !0
          })]
        }), (0, zk.jsx)("p", {
          className: "LoadoutWalkthroughText",
          children: ik
        })]
      })
    }
    const vF = new Set(["loadoutStatReload", "loadoutStatResupply"]);

    function EF(kk) {
      let {
        cost: Fk,
        loadout: Ik
      } = kk;
      const {
        t: Xk
      } = (0, tk.y)();
      return Fk.loadoutCostCoins <= 0 && 0 === Fk.loadoutCostParts.length ? (0, zk.jsx)("span", {
        className: "LoadoutCost",
        children: Xk(`${Sk}:loadoutFree`)
      }) : (0, zk.jsxs)("span", {
        className: "LoadoutCost",
        children: [Fk.loadoutCostCoins > 0 && (0, zk.jsx)(Gk, {
          itemName: vk,
          amount: Fk.loadoutCostCoins,
          eq: Ik.loadoutCoins
        }), Fk.loadoutCostParts.map((kk => {
          const Fk = XF(Ik, kk.loadoutPartCurrency);
          return (0, zk.jsx)(Gk, {
            itemName: Fk.loadoutHeldPartItem,
            amount: kk.loadoutPartAmount,
            eq: Fk.loadoutHeldPartAmount
          }, kk.loadoutPartCurrency)
        }))]
      })
    }
    const OF = {
      loadoutStatFireRate: `${Sk}:loadoutUnitPerMinute`,
      loadoutStatReload: `${Sk}:loadoutUnitSeconds`,
      loadoutStatResupply: `${Sk}:loadoutUnitSeconds`
    };

    function nF(kk) {
      return "loadoutStatPotency" === kk.loadoutStatKind ? (0, kF.S)(kk.loadoutStatValue) : String(kk.loadoutStatValue)
    }

    function GF(kk) {
      var Fk;
      let {
        option: Ik
      } = kk;
      const {
        t: Xk
      } = (0, tk.y)(), Tk = Ik.loadoutOptionTiers, ik = null === (Fk = Tk[0]) || void 0 === Fk ? void 0 : Fk.loadoutTierStats.map((kk => kk.loadoutStatKind));
      if (!ik || 0 === ik.length) return null;
      const yk = Ik.loadoutOptionOwnedTier,
        lk = (kk, Fk) => {
          var Ik;
          return null === (Ik = Tk[kk]) || void 0 === Ik ? void 0 : Ik.loadoutTierStats.find((kk => kk.loadoutStatKind === Fk))
        };
      return (0, zk.jsxs)("table", {
        className: "LoadoutTierTable",
        children: [(0, zk.jsx)("thead", {
          children: (0, zk.jsxs)("tr", {
            children: [(0, zk.jsx)("th", {}), Tk.map(((kk, Fk) => (0, zk.jsx)("th", {
              className: qk()({
                Current: Fk + 1 === yk,
                Next: Fk === yk
              }),
              children: Xk(`${Sk}:loadoutTier`, {
                tier: (0, kF.S)(Fk + 1)
              })
            }, Fk)))]
          })
        }), (0, zk.jsx)("tbody", {
          children: ik.map((kk => {
            const Fk = OF[kk];
            return (0, zk.jsxs)("tr", {
              children: [(0, zk.jsxs)("th", {
                scope: "row",
                children: [Xk(`${Sk}:${kk}`), Fk && (0, zk.jsx)("span", {
                  className: "LoadoutStatUnit",
                  children: Xk(Fk)
                })]
              }), Tk.map(((Fk, Ik) => {
                const Xk = lk(Ik, kk),
                  Tk = Ik > 0 ? lk(Ik - 1, kk) : void 0,
                  ik = Xk && Tk ? Xk.loadoutStatValue - Tk.loadoutStatValue : 0,
                  ak = vF.has(kk) ? ik < 0 : ik > 0,
                  Lk = Ik === yk;
                return (0, zk.jsxs)("td", {
                  className: qk()({
                    Current: Ik + 1 === yk,
                    Next: Lk,
                    Gain: ak,
                    Owned: Ik < yk
                  }),
                  children: [Lk && ak && (0, zk.jsx)("span", {
                    className: "LoadoutGainArrow",
                    "aria-hidden": "true",
                    children: ik < 0 ? "\u25bc" : "\u25b2"
                  }), Xk ? nF(Xk) : "-"]
                }, Ik)
              }))]
            }, kk)
          }))
        })]
      })
    }

    function pF(kk) {
      let {
        view: Fk,
        controller: Ik,
        slot: Xk,
        option: Tk
      } = kk;
      const {
        t: ik
      } = (0, tk.y)(), yk = Fk.loadout, lk = Tk.loadoutOptionOwnedTier, ak = Tk.loadoutOptionTiers.length, qk = Xk.loadoutSlotEquippedId === Tk.loadoutOptionId, Lk = lk < ak ? Tk.loadoutOptionTiers[lk].loadoutTierCost : null, Zk = null !== Lk && IF(yk, Lk), jk = Tk.loadoutOptionId, wk = sF();
      return (0, zk.jsxs)(zk.Fragment, {
        children: [(0, zk.jsx)(bF, {
          icon: Tk.loadoutOptionIcon,
          name: Tk.loadoutOptionName,
          status: 0 === lk ? ik(`${Sk}:loadoutLocked`) : ak > 1 ? ik(`${Sk}:loadoutTier`, {
            tier: (0, kF.S)(lk)
          }) : null,
          locked: 0 === lk,
          equipped: qk
        }), (0, zk.jsx)("p", {
          className: "BoardDescription",
          children: Tk.loadoutOptionDescription
        }), (0, zk.jsx)(GF, {
          option: Tk
        }), (0, zk.jsxs)("div", {
          ref: wk("act", jk),
          className: "BoardActions",
          children: [null !== Lk && (0, zk.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, zk.jsx)(EF, {
              cost: Lk,
              loadout: yk
            }), (0, zk.jsx)(ek.m, {
              disabled: !Zk || Fk.pending,
              onClick: () => {
                Ik.act(0 === lk ? "loadoutUnlock" : "loadoutUpgrade", jk)
              },
              children: 0 === lk ? ik(`${Sk}:loadoutUnlock`) : ik(`${Sk}:loadoutUpgrade`, {
                tier: (0, kF.S)(lk + 1)
              })
            })]
          }), null === Lk && ak > 1 && (0, zk.jsx)("span", {
            className: "BoardHint",
            children: ik(`${Sk}:loadoutMaxed`)
          }), lk > 0 && !qk && (0, zk.jsx)(ek.d, {
            disabled: Fk.pending,
            onClick: () => {
              Ik.act("loadoutEquip", jk)
            },
            children: ik(`${Sk}:loadoutEquip`)
          })]
        })]
      })
    }

    function uF(kk) {
      let {
        view: Fk,
        controller: Ik,
        perk: Xk
      } = kk;
      const {
        t: Tk
      } = (0, tk.y)(), ik = Fk.loadout, yk = iF(ik), lk = Xk.loadoutPerkId, ak = sF();
      return (0, zk.jsxs)(zk.Fragment, {
        children: [(0, zk.jsx)(bF, {
          icon: Xk.loadoutPerkIcon,
          name: Xk.loadoutPerkName,
          status: Xk.loadoutPerkOwned ? null : Tk(`${Sk}:loadoutLocked`),
          locked: !Xk.loadoutPerkOwned,
          equipped: Xk.loadoutPerkEquipped
        }), (0, zk.jsx)("p", {
          className: "BoardDescription",
          children: Xk.loadoutPerkDescription
        }), (0, zk.jsxs)("div", {
          ref: ak("act", lk),
          className: "BoardActions",
          children: [!Xk.loadoutPerkOwned && (0, zk.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, zk.jsx)(EF, {
              cost: Xk.loadoutPerkCost,
              loadout: ik
            }), (0, zk.jsx)(ek.m, {
              disabled: !IF(ik, Xk.loadoutPerkCost) || Fk.pending,
              onClick: () => {
                Ik.act("loadoutUnlock", lk)
              },
              children: Tk(`${Sk}:loadoutUnlock`)
            })]
          }), Xk.loadoutPerkOwned && !Xk.loadoutPerkEquipped && (0, zk.jsx)(ek.d, {
            disabled: yk || Fk.pending,
            onClick: () => {
              Ik.act("loadoutEquip", lk)
            },
            children: Tk(`${Sk}:loadoutEquip`)
          }), Xk.loadoutPerkOwned && !Xk.loadoutPerkEquipped && yk && (0, zk.jsx)("span", {
            className: "BoardHint",
            children: Tk(`${Sk}:loadoutSocketsFullHint`)
          }), Xk.loadoutPerkEquipped && (0, zk.jsx)(ek.Q, {
            disabled: Fk.pending,
            onClick: () => {
              Ik.act("loadoutUnequip", lk)
            },
            children: Tk(`${Sk}:loadoutUnequip`)
          })]
        })]
      })
    }

    function bF(kk) {
      let {
        icon: Fk,
        name: Ik,
        status: Xk,
        locked: Tk,
        equipped: ik
      } = kk;
      const {
        t: yk
      } = (0, tk.y)();
      return (0, zk.jsxs)(Rk, {
        icon: (0, zk.jsx)(Ok, {
          itemName: Fk
        }),
        name: Ik,
        children: [null !== Xk && (0, zk.jsx)("span", {
          className: qk()("LoadoutStatusText", {
            Locked: Tk
          }),
          children: Xk
        }), ik && (0, zk.jsx)("span", {
          className: "BoardBadge",
          children: yk(`${Sk}:loadoutEquippedBadge`)
        })]
      })
    }

    function RF(kk) {
      let {
        view: Fk,
        controller: Ik
      } = kk;
      const Xk = Fk.loadout;
      if ("loadoutPerks" === Fk.slot) {
        const kk = Xk.loadoutPerks.find((kk => kk.loadoutPerkId === Fk.selectedId));
        return (0, zk.jsx)("section", {
          className: "BoardDetail",
          children: kk && (0, zk.jsx)(uF, {
            view: Fk,
            controller: Ik,
            perk: kk
          })
        })
      }
      const Tk = TF(Xk, Fk.slot),
        ik = Tk.loadoutSlotOptions.find((kk => kk.loadoutOptionId === Fk.selectedId));
      return (0, zk.jsx)("section", {
        className: "BoardDetail",
        children: ik && (0, zk.jsx)(pF, {
          view: Fk,
          controller: Ik,
          slot: Tk,
          option: ik
        })
      })
    }

    function UF(kk) {
      let {
        owned: Fk,
        total: Ik
      } = kk;
      return Ik <= 1 ? null : (0, zk.jsx)("span", {
        className: "LoadoutPips",
        children: Array.from({
          length: Ik
        }, ((kk, Ik) => (0, zk.jsx)("span", {
          className: qk()("LoadoutPip", {
            Filled: Ik < Fk
          })
        }, Ik)))
      })
    }

    function CF(kk) {
      let {
        view: Fk,
        controller: Ik
      } = kk;
      const {
        t: Xk
      } = (0, tk.y)(), Tk = Fk.loadout, ik = sF();
      return (0, zk.jsxs)("nav", {
        className: "LoadoutKit",
        "aria-label": Xk(`${Sk}:loadoutKit`),
        children: [Tk.loadoutSlots.map((kk => {
          const Tk = kk.loadoutSlotOptions.find((Fk => Fk.loadoutOptionId === kk.loadoutSlotEquippedId));
          return (0, zk.jsxs)("button", {
            ref: ik("section", kk.loadoutSlotKind),
            type: "button",
            className: qk()("LoadoutKitSlot", {
              Selected: Fk.slot === kk.loadoutSlotKind
            }),
            onClick: () => {
              Ik.selectSlot(kk.loadoutSlotKind)
            },
            children: [(0, zk.jsx)("span", {
              className: "LoadoutKitIcon",
              children: Tk && (0, zk.jsx)(Ok, {
                itemName: Tk.loadoutOptionIcon
              })
            }), (0, zk.jsxs)("span", {
              className: "LoadoutKitText",
              children: [(0, zk.jsxs)("span", {
                className: "LoadoutKitTop",
                children: [(0, zk.jsx)("span", {
                  className: "LoadoutKitLabel",
                  children: Xk(PF[kk.loadoutSlotKind])
                }), Tk && (0, zk.jsx)(UF, {
                  owned: Tk.loadoutOptionOwnedTier,
                  total: Tk.loadoutOptionTiers.length
                })]
              }), (0, zk.jsx)("span", {
                className: "LoadoutKitName",
                children: null === Tk || void 0 === Tk ? void 0 : Tk.loadoutOptionName
              })]
            })]
          }, kk.loadoutSlotKind)
        })), (0, zk.jsx)(NF, {
          view: Fk,
          controller: Ik
        })]
      })
    }

    function NF(kk) {
      let {
        view: Fk,
        controller: Ik
      } = kk;
      const {
        t: Xk
      } = (0, tk.y)(), Tk = Fk.loadout, ik = Tk.loadoutPerks.filter((kk => kk.loadoutPerkEquipped)), yk = sF();
      return (0, zk.jsxs)("button", {
        ref: yk("section", "loadoutPerks"),
        type: "button",
        className: qk()("LoadoutKitSlot", "LoadoutPerks", {
          Selected: "loadoutPerks" === Fk.slot
        }),
        onClick: () => {
          Ik.selectSlot("loadoutPerks")
        },
        children: [(0, zk.jsxs)("span", {
          className: "LoadoutKitTop",
          children: [(0, zk.jsx)("span", {
            className: "LoadoutKitLabel",
            children: Xk(PF.loadoutPerks)
          }), (0, zk.jsx)("span", {
            className: "LoadoutPerkCount",
            children: Xk(`${Sk}:loadoutPerkCount`, {
              equipped: String(ik.length),
              max: String(Tk.loadoutMaxPerks)
            })
          })]
        }), (0, zk.jsx)("span", {
          className: "LoadoutSockets",
          children: Array.from({
            length: Tk.loadoutMaxPerks
          }, ((kk, Fk) => {
            const Ik = ik[Fk];
            return (0, zk.jsxs)("span", {
              className: qk()("LoadoutSocket", {
                Filled: Ik,
                Empty: !Ik
              }),
              children: [(0, zk.jsx)("span", {
                className: "LoadoutSocketWell",
                children: Ik && (0, zk.jsx)(Ok, {
                  itemName: Ik.loadoutPerkIcon
                })
              }), (0, zk.jsx)("span", {
                className: "LoadoutSocketName",
                children: Ik ? Ik.loadoutPerkName : Xk(`${Sk}:loadoutPerkSocketEmpty`)
              })]
            }, Fk)
          }))
        })]
      })
    }

    function cF(kk) {
      let {
        icon: Fk,
        name: Ik,
        selected: Xk,
        equipped: Tk,
        locked: ik,
        ownedTier: yk,
        tiers: lk,
        buttonRef: ak,
        onSelect: qk
      } = kk;
      const {
        t: Lk
      } = (0, tk.y)();
      return (0, zk.jsxs)(bk, {
        icon: (0, zk.jsx)(Ok, {
          itemName: Fk
        }),
        name: Ik,
        selected: Xk,
        locked: ik,
        buttonRef: ak,
        onSelect: qk,
        children: [Tk && (0, zk.jsx)("span", {
          className: "BoardBadge",
          children: Lk(`${Sk}:loadoutEquippedBadge`)
        }), ik && (0, zk.jsx)("span", {
          className: "BoardBadge Muted",
          children: Lk(`${Sk}:loadoutLocked`)
        }), !ik && (0, zk.jsx)(UF, {
          owned: yk,
          total: lk
        })]
      })
    }

    function WF(kk) {
      let {
        view: Fk,
        controller: Ik
      } = kk;
      const Xk = Fk.loadout,
        Tk = sF();
      if ("loadoutPerks" === Fk.slot) return (0, zk.jsx)("div", {
        className: "BoardTiles",
        children: Xk.loadoutPerks.map((kk => (0, zk.jsx)(cF, {
          icon: kk.loadoutPerkIcon,
          name: kk.loadoutPerkName,
          selected: Fk.selectedId === kk.loadoutPerkId,
          equipped: kk.loadoutPerkEquipped,
          locked: !kk.loadoutPerkOwned,
          ownedTier: 0,
          tiers: 0,
          buttonRef: Tk("rZ", kk.loadoutPerkId),
          onSelect: () => {
            Ik.select(kk.loadoutPerkId)
          }
        }, kk.loadoutPerkId)))
      });
      const ik = TF(Xk, Fk.slot);
      return (0, zk.jsx)("div", {
        className: "BoardTiles",
        children: ik.loadoutSlotOptions.map((kk => (0, zk.jsx)(cF, {
          icon: kk.loadoutOptionIcon,
          name: kk.loadoutOptionName,
          selected: Fk.selectedId === kk.loadoutOptionId,
          equipped: ik.loadoutSlotEquippedId === kk.loadoutOptionId,
          locked: 0 === kk.loadoutOptionOwnedTier,
          ownedTier: kk.loadoutOptionOwnedTier,
          tiers: kk.loadoutOptionTiers.length,
          buttonRef: Tk("rZ", kk.loadoutOptionId),
          onSelect: () => {
            Ik.select(kk.loadoutOptionId)
          }
        }, kk.loadoutOptionId)))
      })
    }

    function fF(kk) {
      let {
        loadout: Fk
      } = kk;
      return (0, zk.jsx)(Uk, {
        coins: Fk.loadoutCoins,
        children: Fk.loadoutHeldParts.filter((kk => kk.loadoutHeldPartAmount > 0)).map((kk => (0, zk.jsx)(Gk, {
          itemName: kk.loadoutHeldPartItem,
          amount: kk.loadoutHeldPartAmount
        }, kk.loadoutHeldPartCurrency)))
      })
    }

    function BF(kk) {
      let {
        controller: Fk
      } = kk;
      const Ik = (0, Lk.f)(jF, Fk.getSnapshot()),
        {
          t: Xk
        } = (0, tk.y)();
      if (null === Ik.loadout) return null;
      const Tk = Ik.notice;
      return (0, zk.jsx)(SF, {
        view: Ik,
        onDismiss: Fk.dismiss,
        children: (0, zk.jsxs)(Ek, {
          open: Ik.open,
          onDismiss: Fk.dismiss,
          title: Xk(`${Sk}:loadoutTitle`),
          className: "ContainmentLoadoutPanel",
          headerExtra: (0, zk.jsx)(fF, {
            loadout: Ik.loadout
          }),
          statusRefused: null === Tk || void 0 === Tk ? void 0 : Tk.loadoutNoticeRefused,
          status: (0, zk.jsxs)(zk.Fragment, {
            children: [(0, zk.jsx)("span", {
              className: "LoadoutRadioBadge",
              children: Xk(`${Sk}:loadoutRadioBadge`)
            }), null !== Tk && Xk(`${Sk}:${Tk.loadoutNoticeKey}`, {
              name: Tk.loadoutNoticeName,
              tier: (0, kF.S)(Tk.loadoutNoticeTier),
              max: String(Ik.loadout.loadoutMaxPerks)
            })]
          }),
          children: [(0, zk.jsx)(CF, {
            view: Ik,
            controller: Fk
          }), (0, zk.jsx)(WF, {
            view: Ik,
            controller: Fk
          }), (0, zk.jsx)(RF, {
            view: Ik,
            controller: Fk
          })]
        })
      })
    }

    function dF(kk, Fk, Ik) {
      const Xk = kk.locatorEntries.find((kk => kk.locatorEntryId === Ik));
      if (!Xk) return null;
      const Tk = Xk.locatorEntryName;
      if ("locatorDisarm" === Fk) return Xk.locatorEntryArmed ? {
        board: YF(kk, null),
        notice: AF("locatorNoticeDisarmed", Tk)
      } : null;
      if ("locatorArm" === Fk) return Xk.locatorEntryOwned && !Xk.locatorEntryArmed ? {
        board: YF(kk, Ik),
        notice: AF("locatorNoticeArmed", Tk)
      } : null;
      if (Xk.locatorEntryOwned || kk.locatorCoins < Xk.locatorEntryPrice) return null;
      const ik = YF({
        ...kk,
        locatorCoins: kk.locatorCoins - Xk.locatorEntryPrice
      }, Ik);
      return {
        board: {
          ...ik,
          locatorEntries: ik.locatorEntries.map((kk => kk.locatorEntryId === Ik ? {
            ...kk,
            locatorEntryOwned: !0
          } : kk))
        },
        notice: AF("locatorNoticeBought", Tk)
      }
    }

    function YF(kk, Fk) {
      return {
        ...kk,
        locatorEntries: kk.locatorEntries.map((kk => {
          const Ik = kk.locatorEntryId === Fk;
          return kk.locatorEntryArmed === Ik ? kk : {
            ...kk,
            locatorEntryArmed: Ik
          }
        }))
      }
    }

    function AF(kk, Fk) {
      return {
        locatorNoticeKey: kk,
        locatorNoticeRefused: !1,
        locatorNoticeName: Fk
      }
    }
    const gF = "containmentLocatorView";
    class mF extends FF {
      constructor(kk, Fk, Ik, Xk) {
        super(kk, Fk, Ik, Xk, "locator", dF), this.snapshot = this.buildSnapshot()
      }
      messageOpens(kk) {
        return kk.locatorMessageOpens
      }
      messageNotice(kk) {
        return kk.locatorNotice
      }
      openingSelection(kk) {
        var Fk;
        const Ik = kk.locatorEntries;
        return (null !== (Fk = Ik.find((kk => kk.locatorEntryArmed))) && void 0 !== Fk ? Fk : Ik[0]).locatorEntryId
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
    const hF = {
        locatorContained: `${Sk}:locatorFlavourContained`,
        locatorEncountered: `${Sk}:locatorFlavourEncountered`,
        locatorUnseen: `${Sk}:locatorFlavourUnseen`
      },
      rF = {
        codexAnyDifficulty: null,
        codexNormalOnly: `${Sk}:locatorAttunedNormal`,
        codexHardOnly: `${Sk}:locatorAttunedHard`
      };

    function DF() {
      return (0, zk.jsx)(zk.Fragment, {
        children: Array.from({
          length: 5
        }, ((kk, Fk) => (0, zk.jsx)("span", {
          className: "LocatorFly",
          children: (0, zk.jsx)("img", {
            src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAICAYAAADwdn+XAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYElEQVR4nGNgoBboMlb5LyUjD8YgNtHyJ6/d+Q/CILa1lz9YAbo4DCDLYxjQv3gt3AYQG90AdHkUQ/qhkjAb0BURkgcDmAQMo7sSXR7deyiGoIvDvIOsGasB+ACyBmTNACS0go3ibhumAAAAAElFTkSuQmCC",
            alt: "",
            draggable: !1
          })
        }, Fk)))
      })
    }

    function MF(kk) {
      let {
        entry: Fk
      } = kk;
      const {
        t: Ik
      } = (0, tk.y)();
      return Fk.locatorEntryArmed ? (0, zk.jsx)("span", {
        className: "BoardBadge Armed",
        children: Ik(`${Sk}:locatorArmedBadge`)
      }) : Fk.locatorEntryOwned ? (0, zk.jsx)("span", {
        className: "BoardBadge",
        children: Ik(`${Sk}:locatorOwnedBadge`)
      }) : null
    }

    function kI(kk) {
      let {
        entry: Fk,
        coins: Ik,
        inTile: Xk = !1
      } = kk;
      return (0, zk.jsx)(Gk, {
        itemName: vk,
        amount: Fk.locatorEntryPrice,
        eq: Ik,
        inTile: Xk
      })
    }

    function FI(kk) {
      let {
        view: Fk,
        controller: Ik,
        entry: Xk
      } = kk;
      const {
        t: Tk
      } = (0, tk.y)(), ik = Xk.locatorEntryId, yk = Fk.locators.locatorEntries.find((kk => kk.locatorEntryArmed && kk !== Xk));
      return (0, zk.jsxs)("div", {
        className: "BoardActions",
        children: [Xk.locatorEntryArmed && (0, zk.jsx)(ek.Q, {
          disabled: Fk.pending,
          onClick: () => {
            Ik.act("locatorDisarm", ik)
          },
          children: Tk(`${Sk}:locatorDisarm`)
        }), Xk.locatorEntryOwned && !Xk.locatorEntryArmed && (0, zk.jsx)(ek.d, {
          disabled: Fk.pending,
          onClick: () => {
            Ik.act("locatorArm", ik)
          },
          children: Tk(`${Sk}:locatorArm`)
        }), !Xk.locatorEntryOwned && (0, zk.jsxs)("div", {
          className: "LocatorBuy",
          children: [(0, zk.jsx)(kI, {
            entry: Xk,
            coins: Fk.locators.locatorCoins
          }), (0, zk.jsx)(ek.m, {
            disabled: Fk.locators.locatorCoins < Xk.locatorEntryPrice || Fk.pending,
            onClick: () => {
              Ik.act("locatorBuy", ik)
            },
            children: Tk(`${Sk}:locatorBuy`)
          })]
        }), yk && !Xk.locatorEntryArmed && (0, zk.jsx)("span", {
          className: "BoardHint",
          children: Tk(`${Sk}:locatorReplacesHint`, {
            name: yk.locatorEntryName
          })
        })]
      })
    }

    function II(kk) {
      let {
        entry: Fk
      } = kk;
      return "locatorUnseen" === Fk.locatorEntryStanding ? (0, zk.jsx)(Ok, {
        itemName: "Compass"
      }) : (0, zk.jsx)(nk, {
        anomalyId: Fk.locatorEntryId,
        caught: "locatorContained" === Fk.locatorEntryStanding
      })
    }

    function XI(kk) {
      let {
        view: Fk,
        controller: Ik,
        entry: Xk
      } = kk;
      const {
        t: Tk
      } = (0, tk.y)(), ik = rF[Xk.locatorEntryDifficulty];
      return (0, zk.jsxs)("section", {
        className: "BoardDetail",
        children: [(0, zk.jsxs)("div", {
          className: qk()("LocatorLabel", {
            Armed: Xk.locatorEntryArmed
          }),
          children: [(0, zk.jsx)(Rk, {
            icon: (0, zk.jsx)(II, {
              entry: Xk
            }),
            name: Tk(`${Sk}:locatorName`, {
              name: Xk.locatorEntryName
            }),
            children: (0, zk.jsx)(MF, {
              entry: Xk
            })
          }), (0, zk.jsx)("p", {
            className: "BoardDescription",
            children: Tk(Xk.locatorEntryArmed ? `${Sk}:locatorFlavourArmed` : hF[Xk.locatorEntryStanding])
          }), null !== ik && (0, zk.jsx)("p", {
            className: "LocatorAttuned",
            children: Tk(ik)
          }), (0, zk.jsx)("p", {
            className: "BoardDescription LocatorUsage",
            children: Tk(`${Sk}:locatorUsage`)
          })]
        }), (0, zk.jsx)(FI, {
          view: Fk,
          controller: Ik,
          entry: Xk
        })]
      })
    }

    function TI(kk) {
      let {
        controller: Fk
      } = kk;
      const Ik = (0, Lk.f)(gF, Fk.getSnapshot()),
        {
          t: Xk
        } = (0, tk.y)(),
        Tk = Ik.locators;
      if (null === Tk) return null;
      const ik = Tk.locatorEntries.find((kk => kk.locatorEntryId === Ik.selectedId)),
        yk = Ik.notice;
      return (0, zk.jsxs)(Ek, {
        open: Ik.open,
        onDismiss: Fk.dismiss,
        title: Xk(`${Sk}:locatorTitle`),
        className: "ContainmentLocatorPanel",
        decor: (0, zk.jsx)(DF, {}),
        headerExtra: (0, zk.jsx)(Uk, {
          coins: Tk.locatorCoins
        }),
        statusRefused: null === yk || void 0 === yk ? void 0 : yk.locatorNoticeRefused,
        status: (0, zk.jsxs)(zk.Fragment, {
          children: [(0, zk.jsx)("span", {
            className: "LocatorKeeperBadge",
            children: Xk(`${Sk}:locatorKeeperName`)
          }), null !== yk && Xk(`${Sk}:${yk.locatorNoticeKey}`, {
            name: yk.locatorNoticeName
          })]
        }),
        children: [(0, zk.jsx)("div", {
          className: "BoardTiles",
          children: Tk.locatorEntries.map((kk => (0, zk.jsxs)(bk, {
            icon: (0, zk.jsx)(II, {
              entry: kk
            }),
            name: kk.locatorEntryName,
            selected: kk === ik,
            locked: !1,
            className: qk()("LocatorTag", {
              Armed: kk.locatorEntryArmed
            }),
            onSelect: () => {
              Fk.select(kk.locatorEntryId)
            },
            children: [(0, zk.jsx)(MF, {
              entry: kk
            }), !kk.locatorEntryOwned && (0, zk.jsx)(kI, {
              entry: kk,
              coins: Tk.locatorCoins,
              inTile: !0
            })]
          }, kk.locatorEntryId)))
        }), (0, zk.jsx)(XI, {
          view: Ik,
          controller: Fk,
          entry: ik
        })]
      })
    }

    function iI(kk) {
      let {
        loadout: Fk,
        codex: Ik,
        locator: Xk
      } = kk;
      return (0, zk.jsxs)(zk.Fragment, {
        children: [(0, zk.jsx)(BF, {
          controller: Fk
        }), (0, zk.jsx)(Mk, {
          controller: Ik
        }), (0, zk.jsx)(TI, {
          controller: Xk
        })]
      })
    }
    var yI = Ik(38540);
    class lI {
      constructor(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.sendCommand = kk, this.budget = void 0, this.awaitingReply = !1, this.replyTimer = null, this.listeners = new Set, this.budget = new yI.e({
          spacingMs: 0,
          now: Fk
        }), this.budget.subscribe((() => {
          this.notify()
        }))
      }
      isPending() {
        return this.awaitingReply || this.budget.isPacing()
      }
      send(kk, Fk) {
        return !this.isPending() && (this.awaitingReply = !0, this.replyTimer = setTimeout((() => {
          this.replyTimer = null, this.awaitingReply = !1, Fk(), this.notify()
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
    var aI = Ik(38537);
    const qI = new Map([
      ["npc_general", HF],
      ["npc_tentacle_guy", aI]
    ]);

    function LI(kk) {
      const Fk = qI.get(kk);
      if (void 0 === Fk) return null;
      const Ik = document.createElement("img");
      return Ik.src = Fk, Ik.alt = "", Ik.draggable = !1, Ik.style.imageRendering = "pixelated", Ik
    }
    const tI = function() {
      let kk, Fk = !1,
        Ik = null,
        ak = null;
      const qk = [],
        Lk = kk => {
          for (const Fk of qk) Fk !== kk && Fk.close();
          (0, lk.p)()
        },
        tk = kk => {
          kk && (0, lk.f)()
        },
        Zk = new lI((Fk => {
          kk.sendCommand(Fk)
        })),
        jk = new eF((kk => {
          yk.g.GL(jF, kk, !0)
        }), Lk, tk, Zk),
        ek = new ck((kk => {
          yk.g.GL(Nk, kk, !0)
        }), Lk, tk),
        wk = new mF((kk => {
          yk.g.GL(gF, kk, !0)
        }), Lk, tk, Zk);
      qk.push(jk, ek, wk);
      return {
        onCreate: Fk => {
          kk = Fk, Ik = (0, lk.v)(null, {
            content: (0, Xk.createElement)(iI, {
              loadout: jk,
              codex: ek,
              locator: wk
            }),
            onClose: () => {
              for (const kk of qk) kk.close()
            }
          }), ak = (0, ik.e)(LI)
        },
        onReceivedMessageFromServer: (kk, Fk) => {
          "containmentLoadout" === kk ? jk.Pe(Fk) : "containmentLoadoutClose" === kk ? jk.isOpen() && (jk.close(), (0, lk.e)()) : "containmentCodex" === kk ? ek.Pe(Fk) : "containmentLocator" === kk && wk.Pe(Fk)
        },
        Dt: () => {
          Fk || Tk.d.get("loadingOverlayVisible") || (Fk = !0, kk.sendCommand("containmentEntered"))
        },
        onClose: () => {
          var kk, Fk;
          null === (kk = Ik) || void 0 === kk || kk(), Ik = null, null === (Fk = ak) || void 0 === Fk || Fk(), ak = null;
          for (const Ik of qk) Ik.dispose();
          Zk.dispose()
        }
      }
    }
  },
  36927: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      B: () => Rk,
      F: () => Uk,
      G: () => Ck,
      H: () => bk,
      K: () => Nk,
      c: () => ak,
      e: () => Ok,
      i: () => lk,
      j: () => uk,
      m: () => vk,
      o: () => sk,
      s: () => pk,
      v: () => Gk,
      x: () => Sk
    });
    var Xk = Ik(41);
    const Tk = {
        codeBlock: ["codeBlockIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "worldCodeButton", "exportButton", "helpButton"],
        worldCode: ["worldCodeIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "exportButton", "helpButton"]
      },
      ik = ["docsButton", "docsPanel", "docsClientOptionsTab", "docsClientOptions", "docsApiReferenceTab", "docsApiReference", "docsCallbacksTab", "docsCallbacks", "hideDocsButton"],
      yk = ["aiHelperButton", "aiPanel", "aiAskBox", "aiModelChip", "aiAnswer", "aiEdits", "aiGear", "aiNotes", "aiGameSettings", "hideAiHelperButton"],
      lk = ik.filter((kk => "docsButton" !== kk)),
      ak = yk.filter((kk => "aiHelperButton" !== kk)),
      qk = "codeEditorTutorials",
      Lk = {
        codeBlockIntro: "codeBlockIntroShown",
        worldCodeIntro: "worldCodeIntroShown"
      },
      tk = {
        welcome: "welcomeComplete",
        docsOverview: "docsOverviewComplete",
        aiHelperOverview: "aiHelperOverviewComplete"
      };
    let Zk = null,
      jk = null;
    const ek = new Set,
      wk = new Set;
    let Hk = null;
    const Jk = new Set,
      xk = new Set;

    function Pk() {
      xk.forEach((kk => {
        kk()
      }))
    }

    function Kk() {
      if (!Zk) {
        const kk = Xk.j.getItem(qk);
        Zk = {
          codeBlockIntroShown: !1,
          worldCodeIntroShown: !1,
          welcomeComplete: !1,
          docsOverviewComplete: !1,
          aiHelperOverviewComplete: !1,
          ..."object" === typeof kk && null !== kk ? kk : {}
        }
      }
      return Zk
    }

    function Qk(kk) {
      const Fk = Kk();
      Fk[kk] || (Zk = {
        ...Fk,
        [kk]: !0
      }, Xk.j.setItem(qk, Zk))
    }

    function sk(kk) {
      return "docsOverview" === kk ? ik : "aiHelperOverview" === kk ? yk : jk ? Tk[jk] : []
    }

    function Vk(kk) {
      return ("worldCodeButton" !== kk || !Kk().worldCodeIntroShown) && !Jk.has(kk)
    }

    function zk(kk) {
      var Fk;
      return (null === (Fk = Hk) || void 0 === Fk ? void 0 : Fk.name) === kk ? Hk.stepsDone : ek
    }

    function Sk(kk, Fk) {
      if (! function(kk) {
          return Hk ? Hk.name === kk : "welcome" === kk
        }(kk) || !Vk(Fk) || zk(kk).has(Fk)) return !1;
      if (Hk) return !0;
      const Ik = Lk[Fk];
      return Ik ? !Kk()[Ik] || wk.has(Fk) : !Kk()[tk[kk]]
    }

    function vk(kk) {
      var Fk;
      return null !== (Fk = sk(kk).find((Fk => Sk(kk, Fk)))) && void 0 !== Fk ? Fk : null
    }

    function Ek(kk) {
      var Fk;
      Qk(tk[kk]), (null === (Fk = Hk) || void 0 === Fk ? void 0 : Fk.name) === kk && (Hk = null)
    }

    function Ok(kk) {
      const Fk = (Hk ? [Hk.name] : ["welcome", "docsOverview"]).find((Fk => vk(Fk) === kk));
      if (!Fk) return;
      zk(Fk).add(kk);
      const Ik = Lk[kk];
      Ik && (Qk(Ik), Hk || wk.add(kk)), null === vk(Fk) && Ek(Fk), Pk()
    }

    function nk(kk, Fk) {
      const Ik = sk(kk),
        Xk = zk(kk);
      for (let Tk = Ik.indexOf(Fk) - 1; Tk >= 0; Tk--)
        if (Xk.has(Ik[Tk]) && Vk(Ik[Tk])) return Ik[Tk];
      return null
    }

    function Gk(kk, Fk) {
      return null !== nk(kk, Fk)
    }

    function pk(kk, Fk) {
      const Ik = nk(kk, Fk);
      Ik && (zk(kk).delete(Ik), Pk())
    }

    function uk(kk) {
      Ek(kk), "welcome" === kk && sk("welcome").forEach((kk => {
        const Fk = Lk[kk];
        Fk && Qk(Fk)
      })), Pk()
    }

    function bk(kk) {
      Hk = {
        name: kk,
        stepsDone: new Set
      }, Pk()
    }

    function Rk() {
      (Hk || 0 !== ek.size || 0 !== wk.size) && (Hk = null, ek.clear(), wk.clear(), Pk())
    }

    function Uk(kk, Fk) {
      const Ik = Fk ? kk : jk === kk ? null : jk;
      Ik !== jk && (jk = Ik, Pk())
    }

    function Ck(kk, Fk) {
      Jk.has(kk) === Fk && (Fk ? Jk.delete(kk) : Jk.add(kk), Pk())
    }

    function Nk(kk) {
      return xk.add(kk), () => {
        xk.delete(kk)
      }
    }
  },
  39305: (kk, Fk, Ik) => {
    var Xk = {
      "./breach-zero-uncaught.webp": 39314,
      "./breach-zero.webp": 39322,
      "./brood-father-uncaught.webp": 39327,
      "./brood-father.webp": 39335,
      "./carousel-uncaught.webp": 39339,
      "./carousel.webp": 39344,
      "./deadlock-uncaught.webp": 39353,
      "./deadlock.webp": 39362,
      "./frost-revenant-uncaught.webp": 39369,
      "./frost-revenant.webp": 39378,
      "./hollow-choir-uncaught.webp": 39382,
      "./hollow-choir.webp": 39385,
      "./magma-warden-uncaught.webp": 39387,
      "./magma-warden.webp": 39394,
      "./patient-zero-uncaught.webp": 39397,
      "./patient-zero.webp": 39402,
      "./siege-engine-uncaught.webp": 39404,
      "./siege-engine.webp": 39413,
      "./warp-stalker-uncaught.webp": 39418,
      "./warp-stalker.webp": 39425
    };

    function Tk(kk) {
      var Fk = ik(kk);
      return Ik(Fk)
    }

    function ik(kk) {
      if (!Ik.o(Xk, kk)) {
        var Fk = new Error("Cannot find module '" + kk + "'");
        throw Fk.code = "MODULE_NOT_FOUND", Fk
      }
      return Xk[kk]
    }
    Tk.keys = function() {
      return Object.keys(Xk)
    }, Tk.resolve = ik, kk.exports = Tk, Tk.id = 39305
  },
  39314: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/breach-zero-uncaught.c7d4410f99269ac1ee2f.webp"
  },
  39322: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/breach-zero.ef5aacecf502228cd20b.webp"
  },
  39327: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/brood-father-uncaught.ee678432c71b7061fae1.webp"
  },
  39335: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/brood-father.e48391955a574c1155fa.webp"
  },
  39339: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/carousel-uncaught.a92757620f569f31d7d2.webp"
  },
  39344: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/carousel.5fc13db7958067d6e1a3.webp"
  },
  39353: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/deadlock-uncaught.feadbdbbf2d040dce5c0.webp"
  },
  39362: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/deadlock.2bcaeaa57376fd78ddcb.webp"
  },
  39369: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/frost-revenant-uncaught.c0271636eeae988b1a40.webp"
  },
  39378: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/frost-revenant.fed6021646d7f0f81876.webp"
  },
  39382: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/hollow-choir-uncaught.7eaab76a15f82bd79558.webp"
  },
  39385: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/hollow-choir.05f9c51994aecece852a.webp"
  },
  39387: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/magma-warden-uncaught.5308736fbb8a503cdfc7.webp"
  },
  39394: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/magma-warden.cc4302a49a39ae962a31.webp"
  },
  39397: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/patient-zero-uncaught.1f9ec012a14c4dbdcc8f.webp"
  },
  39402: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/patient-zero.cc76984bb20e9f9ace76.webp"
  },
  39404: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/siege-engine-uncaught.88e0ad7fec37ba2b4a2e.webp"
  },
  39413: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/siege-engine.b2e2382e415f4ae470ac.webp"
  },
  39418: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/warp-stalker-uncaught.c3b1b82ecb18446b71b0.webp"
  },
  39425: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/warp-stalker.851972c629601b668aa7.webp"
  },
  38537: kk => {
    kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYElEQVR4nGNgIBIwovH/45JnRFaUGN+Comr+whq4GiZ0RVycnGAMAlAxsC0sMN2fvn9DodEBzEQGdUV5hvNnV4JpGJuPkwtTIQh4umZhZWMonDqjGCsbHcCCBkQjs0kDAPeaHpfX1eroAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);