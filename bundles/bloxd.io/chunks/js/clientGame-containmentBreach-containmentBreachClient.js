export const id = 14;
export const ids = [14];
export const modules = {
  36555: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => Ek,
      d: () => Lk,
      f: () => Ok,
      h: () => ek
    });
    var Rk = Bk(1020),
      tk = Bk.n(Rk),
      ak = Bk(61),
      Xk = Bk(67),
      bk = Bk(1319),
      wk = Bk(1389),
      dk = Bk(1312),
      sk = Bk(1230),
      Vk = Bk(1149),
      Jk = Bk(36563),
      Ak = Bk(1069);

    function ek(kk) {
      const [Fk, Bk] = (0, ak.useState)((() => (0, Jk.p)(kk)));
      return (0, ak.useEffect)((() => (Bk((0, Jk.p)(kk)), (0, Jk.G)((() => {
        Bk((0, Jk.p)(kk))
      })))), [kk]), Fk
    }

    function yk(kk, Fk) {
      "function" === typeof kk ? kk(Fk) : kk && (kk.current = Fk)
    }

    function fk(kk) {
      let {
        tutorial: Fk,
        step: Bk,
        enabled: Rk = !0
      } = kk;
      const tk = ek(Fk);
      return Rk && tk === Bk
    }

    function mk(kk, Fk) {
      const Bk = (0, Jk.r)(kk),
        Rk = Bk.indexOf(Fk);
      return !Bk.slice(Rk + 1).some((Fk => (0, Jk.y)(kk, Fk)))
    }

    function Wk(kk, Fk, Bk, Rk) {
      let {
        tutorial: tk,
        step: ak,
        waitForClick: Xk = !1,
        onPrevious: bk
      } = kk;
      const wk = Fk && (0, Jk.w)(tk, ak),
        dk = Fk && !mk(tk, ak),
        Vk = Xk ? Rk : Bk;
      let Ak = null;
      wk ? Ak = () => {
        null === bk || void 0 === bk || bk(), (0, Jk.u)(tk, ak)
      } : dk && (Ak = () => {
        (0, Jk.l)(tk)
      }), (0, sk.s)("popup", null !== Vk && void 0 !== Vk ? Vk : Bk, Ak, Fk && null !== Vk, null, wk ? void 0 : "controller:menusSkipTutorial")
    }

    function vk(kk) {
      let {
        tutorial: Fk,
        step: Bk,
        text: Rk,
        waitForClick: tk = !1,
        onPrevious: ak
      } = kk;
      const {
        t: Xk
      } = (0, Vk.x)(), bk = mk(Fk, Bk);
      return (0, Ak.jsxs)(Ak.Fragment, {
        children: [(0, Ak.jsx)("div", {
          className: "TutorialStepText",
          children: Rk
        }), (0, Ak.jsxs)("div", {
          className: "TutorialStepButtons",
          children: [(0, Jk.w)(Fk, Bk) && (0, Ak.jsx)(wk.j, {
            className: "TutorialStepButton",
            onClick: () => {
              null === ak || void 0 === ak || ak(), (0, Jk.u)(Fk, Bk)
            },
            children: Xk("tutorial:back")
          }), !tk && (0, Ak.jsx)(wk.g, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, Jk.g)(Bk)
            },
            padDefaultFocus: !0,
            children: Xk(bk ? "tutorial:done" : "tutorial:next")
          }), !bk && (0, Ak.jsx)(wk.j, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, Jk.l)(Fk)
            },
            children: Xk("tutorial:skip")
          })]
        })]
      })
    }
    const ik = 6;

    function Yk(kk) {
      let {
        rect: Fk,
        margin: Bk
      } = kk;
      const Rk = Math.max(0, Fk.top - Bk),
        tk = Fk.bottom + Bk,
        ak = Math.max(0, Fk.left - Bk),
        Xk = Fk.right + Bk;
      return (0, Ak.jsxs)(Ak.Fragment, {
        children: [(0, Ak.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: 0,
            left: 0,
            right: 0,
            height: Rk
          }
        }), (0, Ak.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: tk,
            left: 0,
            right: 0,
            bottom: 0
          }
        }), (0, Ak.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: Rk,
            left: 0,
            width: ak,
            height: tk - Rk
          }
        }), (0, Ak.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: Rk,
            left: Xk,
            right: 0,
            height: tk - Rk
          }
        })]
      })
    }

    function Lk(kk) {
      let {
        target: Fk,
        placement: Bk,
        boxRef: Rk,
        className: wk,
        spotlightMargin: sk = ik,
        children: Vk
      } = kk;
      const {
        getArrowProps: Jk,
        getTooltipProps: ek,
        setTooltipRef: yk,
        setTriggerRef: fk
      } = (0, bk.c)({
        placement: Bk,
        trigger: null,
        visible: !0,
        interactive: !0,
        closeOnOutsideClick: !1,
        offset: [0, sk]
      });
      (0, ak.useLayoutEffect)((() => {
        fk(Fk)
      }), [Fk, fk]);
      const mk = function(kk, Fk) {
        const [Bk, Rk] = (0, ak.useState)(null);
        return (0, ak.useEffect)((() => {
          if (!Fk || !kk) return void Rk(null);
          let Bk = 0,
            tk = null;
          const ak = () => {
            const Fk = kk.getBoundingClientRect();
            tk && Fk.left === tk.left && Fk.top === tk.top && Fk.width === tk.width && Fk.height === tk.height || (tk = Fk, Rk(Fk)), Bk = requestAnimationFrame(ak)
          };
          return ak(), () => {
            cancelAnimationFrame(Bk)
          }
        }), [kk, Fk]), Bk
      }(Fk, !0);
      (0, ak.useEffect)((() => {
        null === Fk || void 0 === Fk || Fk.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        })
      }), [Fk]);
      const Wk = (0, ak.useCallback)((kk => {
        yk(kk), Rk && (Rk.current = kk)
      }), [yk, Rk]);
      return (0, Xk.createPortal)((0, Ak.jsxs)(Ak.Fragment, {
        children: [mk && (0, Ak.jsx)(Yk, {
          rect: mk,
          margin: sk
        }), (0, Ak.jsxs)("div", {
          ref: Wk,
          ...ek({
            className: tk()("tooltip-container SmallTextLight TutorialStep", wk)
          }),
          children: [Vk, (0, Ak.jsx)("div", {
            ...Jk({
              className: "tooltip-arrow"
            })
          })]
        })]
      }), (0, dk.e)())
    }
    const Ok = (0, ak.forwardRef)((function(kk, Fk) {
      let {
        placement: Bk = "right",
        children: Rk,
        ...tk
      } = kk;
      const Xk = fk(tk),
        bk = (0, ak.useRef)(null),
        wk = (0, ak.useRef)(null);
      Wk(tk, Xk, bk, wk);
      const [dk, sk] = (0, ak.useState)(null), Vk = Rk.ref, Jk = (0, ak.useCallback)((kk => {
        wk.current = kk, sk(kk), yk(Fk, kk), yk(Vk, kk)
      }), [Fk, Vk]);
      return (0, Ak.jsxs)(Ak.Fragment, {
        children: [(0, ak.cloneElement)(Rk, {
          ref: Jk
        }), Xk && (0, Ak.jsx)(Lk, {
          target: dk,
          placement: Bk,
          boxRef: bk,
          children: (0, Ak.jsx)(vk, {
            ...tk
          })
        })]
      })
    }));

    function Ek(kk) {
      const Fk = fk(kk),
        Bk = (0, ak.useRef)(null);
      return Wk(kk, Fk, Bk, null), Fk ? (0, Xk.createPortal)((0, Ak.jsx)("div", {
        className: "TutorialCentreBackdrop",
        children: (0, Ak.jsx)("div", {
          ref: Bk,
          className: "tooltip-container SmallTextLight TutorialStep TutorialCentreStep",
          children: (0, Ak.jsx)(vk, {
            ...kk
          })
        })
      }), (0, dk.e)()) : null
    }
  },
  38188: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => Xk
    });
    const Rk = 4,
      tk = 12e3,
      ak = 1e3;
    class Xk {
      constructor() {
        let {
          limit: kk = Rk,
          windowMs: Fk = tk,
          spacingMs: Bk = ak,
          now: Xk = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = kk, this.windowMs = Fk, this.spacingMs = Bk, this.now = Xk
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
          Bk = Math.min(Fk > kk ? Fk : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        Bk !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, Bk - kk)))
      }
      notify() {
        for (const kk of this.listeners) kk()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  36340: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      C: () => ek,
      G: () => Wk,
      d: () => ak,
      h: () => yk,
      l: () => fk,
      p: () => bk,
      s: () => Jk,
      u: () => mk,
      w: () => Vk,
      z: () => vk
    });
    var Rk = Bk(22),
      tk = Bk(29);
    const ak = "clientGameInventoryButtonsChanged",
      Xk = new Map;

    function bk() {
      return [...Xk.values()].sort(((kk, Fk) => {
        var Bk, Rk;
        return (null !== (Bk = kk.order) && void 0 !== Bk ? Bk : 0) - (null !== (Rk = Fk.order) && void 0 !== Rk ? Rk : 0)
      }))
    }
    let wk = null;

    function dk(kk) {
      wk = kk
    }
    let sk = !1;

    function Vk(kk) {
      sk = !0;
      try {
        kk.onClick()
      } finally {
        sk = !1
      }
      kk.panel && "clientGame" === Rk.c.get("openInGameMenuName") && dk(kk.id)
    }

    function Jk() {
      return sk
    }

    function Ak() {
      return bk().filter((kk => kk.panel && !kk.disabled))
    }

    function ek(kk) {
      const Fk = Ak(),
        Bk = Fk.findIndex((kk => kk.id === wk));
      return !(Bk < 0 || Fk.length < 2) && (Vk(Fk[(Bk + kk + Fk.length) % Fk.length]), !0)
    }

    function yk() {
      return null !== wk && Ak().length > 1
    }

    function fk() {
      dk(null)
    }

    function mk() {
      "inventory" !== Rk.c.get("openInGameMenuName") && dk(null)
    }

    function Wk() {
      const kk = wk;
      return dk(null), kk
    }

    function vk(kk) {
      return Xk.set(kk.id, kk), tk.o.Hf(ak, bk(), !0), () => {
        Xk.get(kk.id) === kk && (Xk.delete(kk.id), tk.o.Hf(ak, bk()))
      }
    }
  },
  38166: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Rk
    });
    class Rk {
      constructor(kk, Fk, Bk) {
        this.Hf = kk, this.beforeOpen = Fk, this.afterClose = Bk, this.open = !1, this.Te = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.Te && (this.open = !0, this.beforeOpen(this), this.emit())
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
        this.open = !1, this.emit(), this.Te = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.Te || (this.snapshot = this.buildSnapshot(), this.Hf(this.snapshot))
      }
    }
  },
  36332: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => bk,
      f: () => fk,
      i: () => mk,
      l: () => Jk,
      o: () => dk,
      q: () => yk,
      s: () => Ak,
      w: () => sk
    });
    var Rk = Bk(22),
      tk = Bk(29),
      ak = Bk(1239),
      Xk = Bk(36340);
    const bk = "clientGameUiChanged";
    let wk = null;

    function dk() {
      return wk
    }

    function sk(kk, Fk) {
      const Bk = {
        content: kk,
        menu: Fk
      };
      return wk = Bk, tk.o.Hf(bk, wk, !0), () => {
        wk === Bk && (wk = null, ek = !1, fk(), tk.o.Hf(bk, null))
      }
    }
    let Vk = null;

    function Jk() {
      return Vk
    }

    function Ak(kk) {
      return Vk = kk, () => {
        Vk === kk && (Vk = null)
      }
    }
    let ek = !1;

    function yk() {
      const kk = Rk.c.get("openInGameMenuName");
      "clientGame" !== kk && (ek = "inventory" === kk), (0, Xk.s)() || (0, Xk.l)(), (0, ak.m)(ak.e), Rk.c.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function fk() {
      Wk(!1)
    }

    function mk() {
      Wk(ek)
    }

    function Wk(kk) {
      "clientGame" === Rk.c.get("openInGameMenuName") && Rk.c.set({
        openInGameMenuName: kk ? "inventory" : null
      }), kk || (0, Xk.l)(), ek = !1
    }
  },
  38890: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      default: () => VB
    });
    var Rk = Bk(61);
    var tk = Bk(22),
      ak = Bk(1826),
      Xk = Bk(29),
      bk = Bk(36332),
      wk = Bk(1020),
      dk = Bk.n(wk),
      sk = Bk(1387),
      Vk = Bk(1149),
      Jk = Bk(4268),
      Ak = Bk(1297),
      ek = Bk(1389),
      yk = Bk(1835),
      fk = Bk(1312),
      mk = Bk(1812),
      Wk = Bk(1876),
      vk = Bk(194);
    const ik = Bk(38894),
      Yk = Object.fromEntries(ik.keys().map((kk => [kk.replace(/^\.\/(.*)\.webp$/, "$1"), ik(kk)]))),
      Lk = new Set;

    function Ok(kk, Fk) {
      const Bk = Fk ? kk : `${kk}-uncaught`,
        Rk = (0, vk.d)(Yk, Bk);
      return void 0 !== Rk || Lk.has(Bk) || (Lk.add(Bk), console.warn(`Containment Breach has no mugshot ${Bk}: run tools/harnessCutouts/ContainmentMugshotCapture.ts`)), Rk
    }
    var Ek = Bk(1069);
    const Sk = "containmentBreach",
      Nk = "Gold Coin";

    function Hk(kk) {
      let {
        open: Fk,
        onDismiss: Bk,
        title: Rk,
        className: tk,
        decor: ak,
        headerExtra: Xk,
        status: bk,
        statusRefused: wk = !1,
        children: sk
      } = kk;
      const Vk = `${tk}Title`;
      return (0, Ek.jsx)(Jk.e, {
        show: Fk,
        close: Bk,
        togglePointerLock: !1,
        className: "ContainmentBoardOverlay",
        children: (0, Ek.jsxs)("section", {
          className: dk()("ContainmentBoardPanel", tk),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": Vk,
          children: [ak && (0, Ek.jsx)("div", {
            className: "BoardDecor",
            "aria-hidden": "true",
            children: ak
          }), (0, Ek.jsxs)("header", {
            className: "BoardHeader",
            children: [(0, Ek.jsx)("h2", {
              id: Vk,
              className: "VisuallyHidden",
              children: Rk
            }), Xk, (0, Ek.jsx)(ek.k, {
              onClick: Bk
            })]
          }), (0, Ek.jsx)("div", {
            className: "BoardBody",
            children: sk
          }), void 0 !== bk && (0, Ek.jsx)("footer", {
            className: dk()("BoardStatus", {
              Refused: wk
            }),
            children: bk
          })]
        })
      })
    }

    function uk(kk) {
      let {
        itemName: Fk
      } = kk;
      return (0, Ek.jsx)(yk.e, {
        itemName: Fk,
        amount: 0
      })
    }

    function Mk(kk) {
      let {
        anomalyId: Fk,
        caught: Bk
      } = kk;
      const tk = (0, Rk.useRef)(null);
      return (0, Ak.c)(tk, !Bk), (0, Ek.jsx)("span", {
        ref: tk,
        className: dk()("BoardMugshot", {
          Uncaught: !Bk
        }),
        children: (0, Ek.jsx)("img", {
          src: Ok(Fk, Bk),
          alt: "",
          draggable: !1
        })
      })
    }

    function gk(kk) {
      let {
        itemName: Fk,
        amount: Bk,
        Hb: Rk,
        inTile: tk = !1
      } = kk;
      return (0, Ek.jsx)(fk.d, {
        delayShow: 200,
        hoverOnly: tk,
        placement: "top",
        tooltipClassName: "BoardChipTooltipBox",
        tooltipInner: (0, Ek.jsx)(ck, {
          itemName: Fk,
          amount: Bk,
          Hb: Rk
        }),
        children: (0, Ek.jsxs)("span", {
          className: dk()("BoardChip", {
            Short: void 0 !== Rk && Rk < Bk
          }),
          children: [(0, Ek.jsx)("span", {
            className: "BoardChipIcon",
            children: (0, Ek.jsx)(uk, {
              itemName: Fk
            })
          }), Bk.toLocaleString()]
        })
      })
    }
    const Uk = /^(.*?)\s*Salvaged from (?:an? )?(.+?)\.?$/;

    function ck(kk) {
      var Fk;
      let {
        itemName: Bk,
        amount: Rk,
        Hb: tk
      } = kk;
      const {
        t: ak
      } = (0, Vk.x)(), Xk = (0, Wk.f)("itemInfo", (kk => kk[Bk])), {
        lore: bk,
        droppedBy: wk
      } = function(kk) {
        if ("string" !== typeof kk) return {
          lore: kk,
          droppedBy: null
        };
        const Fk = Uk.exec(kk);
        return null === Fk ? {
          lore: kk,
          droppedBy: null
        } : {
          lore: "" === Fk[1] ? void 0 : Fk[1],
          droppedBy: Fk[2]
        }
      }(null === Xk || void 0 === Xk ? void 0 : Xk.description);
      return (0, Ek.jsxs)("div", {
        className: "BoardChipTooltip",
        children: [(0, Ek.jsxs)("div", {
          className: "BoardChipTooltipHeader",
          children: [(0, Ek.jsx)("span", {
            className: "BoardChipTooltipIcon",
            children: (0, Ek.jsx)(uk, {
              itemName: Bk
            })
          }), (0, Ek.jsx)(mk.d, {
            text: null !== (Fk = null === Xk || void 0 === Xk ? void 0 : Xk.displayName) && void 0 !== Fk ? Fk : Bk,
            className: "BoardChipTooltipName"
          })]
        }), (void 0 !== bk || null !== wk) && (0, Ek.jsxs)("div", {
          className: "BoardChipTooltipBody",
          children: [void 0 !== bk && (0, Ek.jsx)(mk.d, {
            text: bk,
            className: "BoardChipTooltipDescription"
          }), null !== wk && (0, Ek.jsxs)("span", {
            className: "BoardChipTooltipSource",
            children: [(0, Ek.jsx)("span", {
              className: "BoardChipTooltipLabel",
              children: ak(`${Sk}:chipDroppedBy`)
            }), wk]
          })]
        }), void 0 !== tk && (0, Ek.jsxs)("div", {
          className: dk()("BoardChipTooltipHeld", {
            Short: tk < Rk
          }),
          children: [(0, Ek.jsx)("span", {
            className: "BoardChipTooltipLabel",
            children: ak(`${Sk}:chipYouHave`)
          }), (0, Ek.jsxs)("span", {
            className: "BoardChipTooltipCount",
            children: [(0, Ek.jsx)("span", {
              className: "BoardChipTooltipHeldAmount",
              children: tk.toLocaleString()
            }), ` / ${Rk.toLocaleString()}`]
          }), (0, Ek.jsx)("span", {
            className: "BoardChipTooltipMeter",
            children: (0, Ek.jsx)("span", {
              style: {
                width: (Rk > 0 ? 100 * Math.min(1, tk / Rk) : 100) + "%"
              }
            })
          })]
        })]
      })
    }

    function Gk(kk) {
      let {
        icon: Fk,
        name: Bk,
        selected: Rk,
        locked: tk,
        className: ak,
        buttonRef: Xk,
        onSelect: bk,
        children: wk
      } = kk;
      return (0, Ek.jsxs)("button", {
        ref: Xk,
        type: "button",
        className: dk()("BoardTile", ak, {
          Selected: Rk,
          Locked: tk
        }),
        onClick: bk,
        children: [(0, Ek.jsx)("span", {
          className: "BoardTileIcon",
          children: Fk
        }), (0, Ek.jsx)("span", {
          className: "BoardTileName",
          children: Bk
        }), wk]
      })
    }

    function Tk(kk) {
      let {
        icon: Fk,
        name: Bk,
        children: Rk
      } = kk;
      return (0, Ek.jsxs)("header", {
        className: "BoardDetailHeader",
        children: [(0, Ek.jsx)("span", {
          className: "BoardDetailIcon",
          children: Fk
        }), (0, Ek.jsxs)("div", {
          className: "BoardDetailHeading",
          children: [(0, Ek.jsx)("h3", {
            children: Bk
          }), (0, Ek.jsx)("span", {
            className: "BoardDetailStatus",
            children: Rk
          })]
        })]
      })
    }

    function rk(kk) {
      let {
        coins: Fk,
        children: Bk
      } = kk;
      return (0, Ek.jsxs)("div", {
        className: "BoardWallet",
        children: [(0, Ek.jsx)(gk, {
          itemName: Nk,
          amount: Fk
        }), Bk]
      })
    }
    var Dk = Bk(38166);
    const zk = "containmentCodexView";
    class Pk extends Dk.e {
      constructor() {
        super(...arguments), this.entries = [], this.selectedId = "", this.snapshot = this.buildSnapshot(), this.select = kk => {
          this.selectedId = kk, this.emit()
        }
      }
      he(kk) {
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
    const hk = {
        codexAnyDifficulty: `${Sk}:codexNeedsAny`,
        codexNormalOnly: `${Sk}:codexNeedsNormal`,
        codexHardOnly: `${Sk}:codexNeedsHard`
      },
      qk = {
        codexContained: "Contained",
        codexEncountered: "Sighted",
        codexUnidentified: "Unknown"
      },
      Ck = {
        codexContained: `${Sk}:codexContainedBadge`,
        codexEncountered: `${Sk}:codexEncounteredBadge`,
        codexUnidentified: `${Sk}:codexUnidentifiedBadge`
      },
      Zk = ["94%", "81%", "88%", "46%", "72%"];

    function pk(kk) {
      let {
        entry: Fk
      } = kk;
      const {
        t: Bk
      } = (0, Vk.x)();
      return (0, Ek.jsx)("span", {
        className: dk()("BoardBadge", qk[Fk.codexEntryState]),
        children: Bk(Ck[Fk.codexEntryState])
      })
    }

    function Kk(kk) {
      const {
        t: Fk
      } = (0, Vk.x)();
      return "codexUnidentified" === kk.codexEntryState ? Fk(`${Sk}:codexUnidentifiedName`) : kk.codexEntryName
    }

    function xk(kk) {
      let {
        entry: Fk
      } = kk;
      return "codexUnidentified" === Fk.codexEntryState ? (0, Ek.jsx)(uk, {
        itemName: "Book"
      }) : (0, Ek.jsxs)("span", {
        className: "CodexPhoto",
        children: [(0, Ek.jsx)(Mk, {
          anomalyId: Fk.codexEntryId,
          caught: "codexContained" === Fk.codexEntryState
        }), (0, Ek.jsx)("img", {
          className: "CodexPaperclip",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAMCAYAAACulacQAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGNggIIXb97/X7V57/+Wvtn/GZDBqs17UQTgClahScBATHrlf5ySeHWimo9NMbokCp9OkmD/oasGCaJLAAC5ZUIBS85GiAAAAABJRU5ErkJggg==",
          alt: "",
          draggable: !1
        })]
      })
    }

    function jk(kk) {
      let {
        entry: Fk,
        selected: Bk,
        onSelect: Rk
      } = kk;
      const tk = "codexUnidentified" === Fk.codexEntryState;
      return (0, Ek.jsxs)(Gk, {
        icon: (0, Ek.jsx)(xk, {
          entry: Fk
        }),
        name: Kk(Fk),
        selected: Bk,
        locked: tk,
        className: dk()("CodexFolder", qk[Fk.codexEntryState]),
        onSelect: () => {
          Rk(Fk.codexEntryId)
        },
        children: [!tk && (0, Ek.jsx)(pk, {
          entry: Fk
        }), tk && (0, Ek.jsx)("img", {
          className: "CodexSeal",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAARElEQVR4nGNggIIGHp7/MAzjw+TAnMf+/mB8RkQEjOGKYZLIgsiK4AqQJZA1gBXAOHgVwCRQJJEdCVOEYj8yQPciTAEAz0hgyamUqskAAAAASUVORK5CYII=",
          alt: "",
          draggable: !1
        })]
      })
    }

    function lk(kk) {
      let {
        count: Fk
      } = kk;
      const Bk = [];
      for (let Rk = Math.min(Fk, 25); Rk > 0; Rk -= 5) Bk.push(Math.min(Rk, 5));
      return (0, Ek.jsx)("span", {
        className: "CodexTallyMarks",
        "aria-hidden": "true",
        children: Bk.map(((kk, Fk) => (0, Ek.jsx)("span", {
          className: dk()("CodexTallyGroup", {
            Gate: 5 === kk
          }),
          children: Array.from({
            length: Math.min(kk, 4)
          }, ((kk, Fk) => (0, Ek.jsx)("span", {
            className: "CodexTallyMark"
          }, Fk)))
        }, Fk)))
      })
    }

    function nk(kk) {
      let {
        contained: Fk,
        total: Bk
      } = kk;
      const {
        t: Rk
      } = (0, Vk.x)();
      return (0, Ek.jsxs)("div", {
        className: "CodexProgress",
        children: [Rk(`${Sk}:codexProgress`, {
          contained: String(Fk),
          total: String(Bk)
        }), (0, Ek.jsx)("span", {
          className: "CodexProgressMeter",
          children: (0, Ek.jsx)("span", {
            style: {
              width: Fk / Bk * 100 + "%"
            }
          })
        })]
      })
    }

    function Ik(kk) {
      let {
        entry: Fk,
        fileNumber: Bk
      } = kk;
      const {
        t: Rk
      } = (0, Vk.x)(), tk = "codexContained" === Fk.codexEntryState;
      return (0, Ek.jsx)("section", {
        className: "BoardDetail",
        children: (0, Ek.jsxs)("article", {
          className: dk()("CodexDossier", qk[Fk.codexEntryState]),
          children: [(0, Ek.jsx)("span", {
            className: "CodexFileNumber",
            children: Rk(`${Sk}:codexFileNumber`, {
              number: String(Bk).padStart(3, "0")
            })
          }), (0, Ek.jsx)(Tk, {
            icon: (0, Ek.jsx)(xk, {
              entry: Fk
            }),
            name: Kk(Fk),
            children: (0, Ek.jsx)(pk, {
              entry: Fk
            })
          }), tk && (0, Ek.jsxs)(Ek.Fragment, {
            children: [(0, Ek.jsx)("p", {
              className: "BoardDescription",
              children: Fk.codexEntryLore
            }), (0, Ek.jsxs)("p", {
              className: "CodexTally",
              children: [Rk(`${Sk}:codexContainments`, {
                count: String(Fk.codexEntryContainedCount)
              }), (0, Ek.jsx)(lk, {
                count: Fk.codexEntryContainedCount
              })]
            }), (0, Ek.jsx)("span", {
              className: "CodexClosedStamp",
              "aria-hidden": "true",
              children: Rk(`${Sk}:codexContainedBadge`)
            })]
          }), !tk && (0, Ek.jsxs)(Ek.Fragment, {
            children: [(0, Ek.jsxs)("div", {
              className: "CodexRedaction",
              children: [Zk.map((kk => (0, Ek.jsx)("span", {
                className: "CodexRedactedLine",
                style: {
                  width: kk
                }
              }, kk))), (0, Ek.jsx)("p", {
                className: "CodexRedacted",
                children: Rk(`${Sk}:codexRedacted`)
              })]
            }), "" !== Fk.codexEntryHint && (0, Ek.jsxs)("aside", {
              className: "CodexNote",
              children: [(0, Ek.jsx)("h4", {
                children: Rk(`${Sk}:codexHintLabel`)
              }), (0, Ek.jsx)("p", {
                children: Fk.codexEntryHint
              })]
            }), (0, Ek.jsx)("p", {
              className: "CodexClearance",
              children: Rk(hk[Fk.codexEntryDifficulty])
            })]
          })]
        })
      })
    }

    function Qk(kk) {
      let {
        controller: Fk
      } = kk;
      const Bk = (0, sk.g)(zk, Fk.getSnapshot()),
        {
          t: Rk
        } = (0, Vk.x)();
      if (0 === Bk.entries.length) return null;
      const tk = Bk.entries.find((kk => kk.codexEntryId === Bk.selectedId)),
        ak = Bk.entries.filter((kk => "codexContained" === kk.codexEntryState)).length,
        Xk = Bk.entries.map((kk => kk.codexEntryId)).sort().indexOf(tk.codexEntryId) + 1;
      return (0, Ek.jsxs)(Hk, {
        open: Bk.open,
        onDismiss: Fk.dismiss,
        title: Rk(`${Sk}:codexTitle`),
        className: "ContainmentCodexPanel",
        headerExtra: (0, Ek.jsx)(nk, {
          contained: ak,
          total: Bk.entries.length
        }),
        children: [(0, Ek.jsx)("div", {
          className: "BoardTiles",
          children: Bk.entries.map((kk => (0, Ek.jsx)(jk, {
            entry: kk,
            selected: kk === tk,
            onSelect: Fk.select
          }, kk.codexEntryId)))
        }), (0, Ek.jsx)(Ik, {
          entry: tk,
          fileNumber: Xk
        })]
      })
    }
    var kF = Bk(291);
    class FF extends Dk.e {
      constructor(kk, Fk, Bk, Rk, tk, ak) {
        super(kk, Fk, Bk), this.pacer = Rk, this.command = tk, this.predict = ak, this.board = null, this.confirmed = null, this.selectedId = "", this.notice = null, this.unsubscribePacer = void 0, this.select = kk => {
          this.selectedId = kk, this.emit()
        }, this.act = (kk, Fk) => {
          if (!this.open || null === this.board || !this.pacer.send(`${this.command} ${kk} ${Fk}`, this.rollBack)) return;
          const Bk = this.predict(this.board, kk, Fk);
          null !== Bk && (this.board = Bk.board, this.notice = Bk.notice, this.emit())
        }, this.rollBack = () => {
          this.board !== this.confirmed && (this.board = this.confirmed, this.notice = null)
        }, this.unsubscribePacer = Rk.subscribe((() => {
          this.emit()
        }))
      }
      he(kk) {
        const Fk = this.messageOpens(kk);
        if (Fk && this.open) return this.board === this.confirmed && (this.board = kk), this.confirmed = kk, void this.emit();
        if (this.board = kk, this.confirmed = kk, this.pacer.onReply(), Fk) return this.notice = null, this.selectedId = this.openingSelection(kk), void this.show();
        const Bk = this.messageNotice(kk);
        null !== Bk && (this.notice = Bk), this.emit()
      }
      dispose() {
        this.unsubscribePacer(), super.dispose()
      }
      onClosed() {
        this.notice = null
      }
    }

    function BF(kk, Fk) {
      return kk.loadoutCoins >= Fk.loadoutCostCoins && Fk.loadoutCostParts.every((Fk => function(kk, Fk) {
        return RF(kk, Fk).loadoutHeldPartAmount
      }(kk, Fk.loadoutPartCurrency) >= Fk.loadoutPartAmount))
    }

    function RF(kk, Fk) {
      return kk.loadoutHeldParts.find((kk => kk.loadoutHeldPartCurrency === Fk))
    }

    function tF(kk, Fk) {
      return kk.loadoutSlots.find((kk => kk.loadoutSlotKind === Fk))
    }

    function aF(kk) {
      return kk.loadoutPerks.filter((kk => kk.loadoutPerkEquipped)).length >= kk.loadoutMaxPerks
    }

    function XF(kk, Fk, Bk) {
      for (const tk of kk.loadoutSlots) {
        const Rk = tk.loadoutSlotOptions.find((kk => kk.loadoutOptionId === Bk));
        if (Rk) return "loadoutArmour" === tk.loadoutSlotKind ? wF(kk, tk, Rk, Fk) : bF(kk, tk, Rk, Fk)
      }
      const Rk = kk.loadoutPerks.find((kk => kk.loadoutPerkId === Bk));
      return Rk ? function(kk, Fk, Bk) {
        const Rk = Fk.loadoutPerkOwned,
          tk = Fk.loadoutPerkEquipped,
          ak = Fk.loadoutPerkName,
          Xk = aF(kk);
        if ("loadoutUnlock" === Bk) {
          if (Rk || !BF(kk, Fk.loadoutPerkCost)) return null;
          const Bk = {
            ...Fk,
            loadoutPerkOwned: !0,
            loadoutPerkEquipped: !Xk
          };
          return {
            board: sF(VF(kk, Fk.loadoutPerkCost), Bk),
            notice: JF(Xk ? "loadoutNoticeUnlockedNoRoom" : "loadoutNoticeUnlocked", ak)
          }
        }
        if ("loadoutUpgrade" === Bk || !Rk || "loadoutEquip" === Bk === tk || !tk && Xk) return null;
        return {
          board: sF(kk, {
            ...Fk,
            loadoutPerkEquipped: !tk
          }),
          notice: JF(tk ? "loadoutNoticeUnequipped" : "loadoutNoticeEquipped", ak)
        }
      }(kk, Rk, Fk) : null
    }

    function bF(kk, Fk, Bk, Rk) {
      const tk = Bk.loadoutOptionOwnedTier,
        ak = Bk.loadoutOptionName;
      if ("loadoutEquip" === Rk) return 0 === tk ? null : {
        board: dF(kk, Fk, Bk.loadoutOptionId, null),
        notice: JF("loadoutNoticeEquipped", ak)
      };
      const Xk = "loadoutUnlock" === Rk;
      if (Xk && 0 !== tk || "loadoutUpgrade" === Rk && (0 === tk || tk >= Bk.loadoutOptionTiers.length) || "loadoutUnequip" === Rk) return null;
      const bk = Bk.loadoutOptionTiers[tk].loadoutTierCost;
      if (!BF(kk, bk)) return null;
      const wk = {
          ...Bk,
          loadoutOptionOwnedTier: tk + 1
        },
        dk = Xk ? Bk.loadoutOptionId : Fk.loadoutSlotEquippedId;
      return {
        board: dF(VF(kk, bk), Fk, dk, wk),
        notice: Xk ? JF("loadoutNoticeUnlocked", ak) : JF("loadoutNoticeUpgraded", ak, tk + 1)
      }
    }

    function wF(kk, Fk, Bk, Rk) {
      const tk = Bk.loadoutOptionOwnedTier > 0,
        ak = Bk.loadoutOptionName;
      if ("loadoutEquip" === Rk && tk) return {
        board: dF(kk, Fk, Bk.loadoutOptionId, null),
        notice: JF("loadoutNoticeEquipped", ak)
      };
      const Xk = Bk.loadoutOptionTiers[0].loadoutTierCost;
      return "loadoutUnlock" !== Rk || tk || !BF(kk, Xk) ? null : {
        board: dF(VF(kk, Xk), Fk, Bk.loadoutOptionId, {
          ...Bk,
          loadoutOptionOwnedTier: 1
        }),
        notice: JF("loadoutNoticeUnlocked", ak)
      }
    }

    function dF(kk, Fk, Bk, Rk) {
      const tk = {
        ...Fk,
        loadoutSlotEquippedId: Bk,
        loadoutSlotOptions: Fk.loadoutSlotOptions.map((kk => null !== Rk && kk.loadoutOptionId === Rk.loadoutOptionId ? Rk : kk))
      };
      return {
        ...kk,
        loadoutSlots: kk.loadoutSlots.map((kk => kk === Fk ? tk : kk))
      }
    }

    function sF(kk, Fk) {
      return {
        ...kk,
        loadoutPerks: kk.loadoutPerks.map((kk => kk.loadoutPerkId === Fk.loadoutPerkId ? Fk : kk))
      }
    }

    function VF(kk, Fk) {
      return {
        ...kk,
        loadoutCoins: kk.loadoutCoins - Fk.loadoutCostCoins,
        loadoutHeldParts: kk.loadoutHeldParts.map((kk => {
          const Bk = Fk.loadoutCostParts.find((Fk => Fk.loadoutPartCurrency === kk.loadoutHeldPartCurrency));
          return Bk ? {
            ...kk,
            loadoutHeldPartAmount: kk.loadoutHeldPartAmount - Bk.loadoutPartAmount
          } : kk
        }))
      }
    }

    function JF(kk, Fk) {
      return {
        loadoutNoticeKey: kk,
        loadoutNoticeRefused: !1,
        loadoutNoticeName: Fk,
        loadoutNoticeTier: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
      }
    }
    const AF = "containmentLoadoutView";
    class eF extends FF {
      constructor(kk, Fk, Bk, Rk) {
        super(kk, Fk, Bk, Rk, "loadout", XF), this.slot = "loadoutPrimary", this.snapshot = this.buildSnapshot(), this.selectSlot = kk => {
          this.slot = kk, this.selectedId = yF(this.board, kk), this.emit()
        }
      }
      messageOpens(kk) {
        return kk.loadoutMessageOpens
      }
      messageNotice(kk) {
        return kk.loadoutNotice
      }
      openingSelection(kk) {
        return yF(kk, this.slot)
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

    function yF(kk, Fk) {
      if ("loadoutPerks" === Fk) {
        var Bk;
        const Fk = kk.loadoutPerks;
        return (null !== (Bk = Fk.find((kk => kk.loadoutPerkEquipped))) && void 0 !== Bk ? Bk : Fk[0]).loadoutPerkId
      }
      return tF(kk, Fk).loadoutSlotEquippedId
    }
    const fF = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAY0lEQVR4nGNgIAP8x4FRwP/sFt3/EYU6YBqGIwp1MBSDBUH4/3nW//83csD5DOgKfeKNsWIMhV+///qvbOT7/87cMjCG8TEUgiSLqlpRMEgMQ+HJvgy4aTAMEsPqc2KChyAAAFxNbnylK5O6AAAAAElFTkSuQmCC";
    var mF = Bk(36555),
      WF = Bk(1230);
    const vF = {
        loadoutPrimary: `${Sk}:loadoutSlotPrimary`,
        loadoutSecondary: `${Sk}:loadoutSlotSecondary`,
        loadoutOffensive: `${Sk}:loadoutSlotOffensive`,
        loadoutSelfHelp: `${Sk}:loadoutSlotSelfHelp`,
        loadoutArmour: `${Sk}:loadoutSlotArmour`,
        loadoutPerks: `${Sk}:loadoutSlotPerks`
      },
      iF = {
        section: "right",
        AA: "bottom",
        act: "top"
      },
      YF = (0, Rk.createContext)({
        step: null,
        targetRef: () => {}
      });

    function oF() {
      const {
        step: kk,
        targetRef: Fk
      } = (0, Rk.useContext)(YF);
      return (Bk, Rk) => (null === kk || void 0 === kk ? void 0 : kk.kind) === Bk && kk.id === Rk ? Fk : void 0
    }

    function LF(kk, Fk) {
      const Bk = Fk.loadoutTargetId;
      if ("loadoutPerks" === Fk.loadoutTargetSection) {
        const Fk = kk.loadoutPerks.find((kk => kk.loadoutPerkId === Bk));
        return {
          name: Fk.loadoutPerkName,
          owned: Fk.loadoutPerkOwned,
          equipped: Fk.loadoutPerkEquipped
        }
      }
      const Rk = tF(kk, Fk.loadoutTargetSection),
        tk = Rk.loadoutSlotOptions.find((kk => kk.loadoutOptionId === Bk));
      return {
        name: tk.loadoutOptionName,
        owned: tk.loadoutOptionOwnedTier > 0,
        equipped: Rk.loadoutSlotEquippedId === Bk
      }
    }

    function OF(kk, Fk, Bk, Rk) {
      const [tk, ak] = kk(`${Sk}:${Fk}`, {
        [Bk]: "\x01"
      }).split("\x01");
      return (0, Ek.jsxs)(Ek.Fragment, {
        children: [tk, (0, Ek.jsx)("span", {
          className: "LoadoutWalkthroughName",
          children: Rk
        }), ak]
      })
    }

    function EF(kk) {
      let {
        view: Fk,
        onDismiss: Bk,
        children: tk
      } = kk;
      const {
        t: ak
      } = (0, Vk.x)(), Xk = Fk.loadout, bk = Fk.open ? Xk.loadoutWalkthrough.map((kk => ({
        target: kk,
        info: LF(Xk, kk)
      }))).find((kk => {
        let {
          info: Fk
        } = kk;
        return !Fk.equipped
      })) : void 0;
      let wk = null,
        dk = null;
      if (void 0 !== bk) {
        const {
          target: kk,
          info: Bk
        } = bk;
        Fk.slot !== kk.loadoutTargetSection ? (wk = {
          kind: "section",
          id: kk.loadoutTargetSection
        }, dk = OF(ak, "loadoutWalkthroughSection", "section", ak(vF[kk.loadoutTargetSection]))) : Fk.selectedId !== kk.loadoutTargetId ? (wk = {
          kind: "AA",
          id: kk.loadoutTargetId
        }, dk = OF(ak, "loadoutWalkthroughPick", "name", Bk.name)) : (wk = {
          kind: "act",
          id: kk.loadoutTargetId
        }, dk = OF(ak, Bk.owned ? "loadoutWalkthroughEquip" : "loadoutWalkthroughUnlock", "name", Bk.name))
      }
      const sk = null === wk ? null : function(kk) {
          return `${kk.kind}:${kk.id}`
        }(wk),
        [Jk, Ak] = (0, Rk.useState)(null),
        ek = (0, Rk.useCallback)((kk => {
          Ak((Fk => null !== kk ? {
            key: sk,
            node: kk
          } : (null === Fk || void 0 === Fk ? void 0 : Fk.key) === sk ? null : Fk))
        }), [sk]),
        yk = null !== sk && (null === Jk || void 0 === Jk ? void 0 : Jk.key) === sk ? Jk.node : null;
      return (0, Ek.jsxs)(YF.Provider, {
        value: {
          step: wk,
          targetRef: ek
        },
        children: [tk, null !== wk && null !== yk && (0, Ek.jsx)(SF, {
          target: yk,
          placement: iF[wk.kind],
          onDismiss: Bk,
          children: dk
        }, sk)]
      })
    }

    function SF(kk) {
      let {
        target: Fk,
        placement: Bk,
        onDismiss: tk,
        children: ak
      } = kk;
      const {
        t: Xk
      } = (0, Vk.x)(), bk = (0, Rk.useRef)(Fk);
      return bk.current = Fk, (0, WF.s)("popup", bk, tk), (0, Ek.jsxs)(mF.d, {
        target: Fk,
        placement: Bk,
        className: "LoadoutWalkthroughStep",
        spotlightMargin: 10,
        children: [(0, Ek.jsxs)("div", {
          className: "LoadoutWalkthroughHeader",
          children: [(0, Ek.jsx)("img", {
            className: "LoadoutWalkthroughPortrait",
            src: fF,
            alt: "",
            draggable: !1
          }), (0, Ek.jsx)("span", {
            className: "LoadoutWalkthroughSpeaker",
            children: Xk(`${Sk}:operatorName`)
          }), (0, Ek.jsx)(ek.k, {
            onClick: tk,
            ariaLabel: Xk(`${Sk}:loadoutWalkthroughClose`),
            padIgnore: !0
          })]
        }), (0, Ek.jsx)("p", {
          className: "LoadoutWalkthroughText",
          children: ak
        })]
      })
    }
    const NF = new Set(["loadoutStatReload", "loadoutStatResupply"]);

    function HF(kk) {
      let {
        cost: Fk,
        loadout: Bk
      } = kk;
      const {
        t: Rk
      } = (0, Vk.x)();
      return Fk.loadoutCostCoins <= 0 && 0 === Fk.loadoutCostParts.length ? (0, Ek.jsx)("span", {
        className: "LoadoutCost",
        children: Rk(`${Sk}:loadoutFree`)
      }) : (0, Ek.jsxs)("span", {
        className: "LoadoutCost",
        children: [Fk.loadoutCostCoins > 0 && (0, Ek.jsx)(gk, {
          itemName: Nk,
          amount: Fk.loadoutCostCoins,
          Hb: Bk.loadoutCoins
        }), Fk.loadoutCostParts.map((kk => {
          const Fk = RF(Bk, kk.loadoutPartCurrency);
          return (0, Ek.jsx)(gk, {
            itemName: Fk.loadoutHeldPartItem,
            amount: kk.loadoutPartAmount,
            Hb: Fk.loadoutHeldPartAmount
          }, kk.loadoutPartCurrency)
        }))]
      })
    }
    const uF = {
      loadoutStatFireRate: `${Sk}:loadoutUnitPerMinute`,
      loadoutStatReload: `${Sk}:loadoutUnitSeconds`,
      loadoutStatResupply: `${Sk}:loadoutUnitSeconds`
    };

    function MF(kk) {
      return "loadoutStatPotency" === kk.loadoutStatKind ? (0, kF.V)(kk.loadoutStatValue) : String(kk.loadoutStatValue)
    }

    function gF(kk) {
      var Fk;
      let {
        option: Bk
      } = kk;
      const {
        t: Rk
      } = (0, Vk.x)(), tk = Bk.loadoutOptionTiers, ak = null === (Fk = tk[0]) || void 0 === Fk ? void 0 : Fk.loadoutTierStats.map((kk => kk.loadoutStatKind));
      if (!ak || 0 === ak.length) return null;
      const Xk = Bk.loadoutOptionOwnedTier,
        bk = (kk, Fk) => {
          var Bk;
          return null === (Bk = tk[kk]) || void 0 === Bk ? void 0 : Bk.loadoutTierStats.find((kk => kk.loadoutStatKind === Fk))
        };
      return (0, Ek.jsxs)("table", {
        className: "LoadoutTierTable",
        children: [(0, Ek.jsx)("thead", {
          children: (0, Ek.jsxs)("tr", {
            children: [(0, Ek.jsx)("th", {}), tk.map(((kk, Fk) => (0, Ek.jsx)("th", {
              className: dk()({
                Current: Fk + 1 === Xk,
                Next: Fk === Xk
              }),
              children: Rk(`${Sk}:loadoutTier`, {
                tier: (0, kF.V)(Fk + 1)
              })
            }, Fk)))]
          })
        }), (0, Ek.jsx)("tbody", {
          children: ak.map((kk => {
            const Fk = uF[kk];
            return (0, Ek.jsxs)("tr", {
              children: [(0, Ek.jsxs)("th", {
                scope: "row",
                children: [Rk(`${Sk}:${kk}`), Fk && (0, Ek.jsx)("span", {
                  className: "LoadoutStatUnit",
                  children: Rk(Fk)
                })]
              }), tk.map(((Fk, Bk) => {
                const Rk = bk(Bk, kk),
                  tk = Bk > 0 ? bk(Bk - 1, kk) : void 0,
                  ak = Rk && tk ? Rk.loadoutStatValue - tk.loadoutStatValue : 0,
                  wk = NF.has(kk) ? ak < 0 : ak > 0,
                  sk = Bk === Xk;
                return (0, Ek.jsxs)("td", {
                  className: dk()({
                    Current: Bk + 1 === Xk,
                    Next: sk,
                    Gain: wk,
                    Owned: Bk < Xk
                  }),
                  children: [sk && wk && (0, Ek.jsx)("span", {
                    className: "LoadoutGainArrow",
                    "aria-hidden": "true",
                    children: ak < 0 ? "\u25bc" : "\u25b2"
                  }), Rk ? MF(Rk) : "-"]
                }, Bk)
              }))]
            }, kk)
          }))
        })]
      })
    }

    function UF(kk) {
      let {
        view: Fk,
        controller: Bk,
        slot: Rk,
        option: tk
      } = kk;
      const {
        t: ak
      } = (0, Vk.x)(), Xk = Fk.loadout, bk = tk.loadoutOptionOwnedTier, wk = tk.loadoutOptionTiers.length, dk = Rk.loadoutSlotEquippedId === tk.loadoutOptionId, sk = bk < wk ? tk.loadoutOptionTiers[bk].loadoutTierCost : null, Jk = null !== sk && BF(Xk, sk), Ak = tk.loadoutOptionId, yk = oF();
      return (0, Ek.jsxs)(Ek.Fragment, {
        children: [(0, Ek.jsx)(GF, {
          icon: tk.loadoutOptionIcon,
          name: tk.loadoutOptionName,
          status: 0 === bk ? ak(`${Sk}:loadoutLocked`) : wk > 1 ? ak(`${Sk}:loadoutTier`, {
            tier: (0, kF.V)(bk)
          }) : null,
          locked: 0 === bk,
          equipped: dk
        }), (0, Ek.jsx)("p", {
          className: "BoardDescription",
          children: tk.loadoutOptionDescription
        }), (0, Ek.jsx)(gF, {
          option: tk
        }), (0, Ek.jsxs)("div", {
          ref: yk("act", Ak),
          className: "BoardActions",
          children: [null !== sk && (0, Ek.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, Ek.jsx)(HF, {
              cost: sk,
              loadout: Xk
            }), (0, Ek.jsx)(ek.o, {
              disabled: !Jk || Fk.pending,
              onClick: () => {
                Bk.act(0 === bk ? "loadoutUnlock" : "loadoutUpgrade", Ak)
              },
              children: 0 === bk ? ak(`${Sk}:loadoutUnlock`) : ak(`${Sk}:loadoutUpgrade`, {
                tier: (0, kF.V)(bk + 1)
              })
            })]
          }), null === sk && wk > 1 && (0, Ek.jsx)("span", {
            className: "BoardHint",
            children: ak(`${Sk}:loadoutMaxed`)
          }), bk > 0 && !dk && (0, Ek.jsx)(ek.g, {
            disabled: Fk.pending,
            onClick: () => {
              Bk.act("loadoutEquip", Ak)
            },
            children: ak(`${Sk}:loadoutEquip`)
          })]
        })]
      })
    }

    function cF(kk) {
      let {
        view: Fk,
        controller: Bk,
        perk: Rk
      } = kk;
      const {
        t: tk
      } = (0, Vk.x)(), ak = Fk.loadout, Xk = aF(ak), bk = Rk.loadoutPerkId, wk = oF();
      return (0, Ek.jsxs)(Ek.Fragment, {
        children: [(0, Ek.jsx)(GF, {
          icon: Rk.loadoutPerkIcon,
          name: Rk.loadoutPerkName,
          status: Rk.loadoutPerkOwned ? null : tk(`${Sk}:loadoutLocked`),
          locked: !Rk.loadoutPerkOwned,
          equipped: Rk.loadoutPerkEquipped
        }), (0, Ek.jsx)("p", {
          className: "BoardDescription",
          children: Rk.loadoutPerkDescription
        }), (0, Ek.jsxs)("div", {
          ref: wk("act", bk),
          className: "BoardActions",
          children: [!Rk.loadoutPerkOwned && (0, Ek.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, Ek.jsx)(HF, {
              cost: Rk.loadoutPerkCost,
              loadout: ak
            }), (0, Ek.jsx)(ek.o, {
              disabled: !BF(ak, Rk.loadoutPerkCost) || Fk.pending,
              onClick: () => {
                Bk.act("loadoutUnlock", bk)
              },
              children: tk(`${Sk}:loadoutUnlock`)
            })]
          }), Rk.loadoutPerkOwned && !Rk.loadoutPerkEquipped && (0, Ek.jsx)(ek.g, {
            disabled: Xk || Fk.pending,
            onClick: () => {
              Bk.act("loadoutEquip", bk)
            },
            children: tk(`${Sk}:loadoutEquip`)
          }), Rk.loadoutPerkOwned && !Rk.loadoutPerkEquipped && Xk && (0, Ek.jsx)("span", {
            className: "BoardHint",
            children: tk(`${Sk}:loadoutSocketsFullHint`)
          }), Rk.loadoutPerkEquipped && (0, Ek.jsx)(ek.O, {
            disabled: Fk.pending,
            onClick: () => {
              Bk.act("loadoutUnequip", bk)
            },
            children: tk(`${Sk}:loadoutUnequip`)
          })]
        })]
      })
    }

    function GF(kk) {
      let {
        icon: Fk,
        name: Bk,
        status: Rk,
        locked: tk,
        equipped: ak
      } = kk;
      const {
        t: Xk
      } = (0, Vk.x)();
      return (0, Ek.jsxs)(Tk, {
        icon: (0, Ek.jsx)(uk, {
          itemName: Fk
        }),
        name: Bk,
        children: [null !== Rk && (0, Ek.jsx)("span", {
          className: dk()("LoadoutStatusText", {
            Locked: tk
          }),
          children: Rk
        }), ak && (0, Ek.jsx)("span", {
          className: "BoardBadge",
          children: Xk(`${Sk}:loadoutEquippedBadge`)
        })]
      })
    }

    function TF(kk) {
      let {
        view: Fk,
        controller: Bk
      } = kk;
      const Rk = Fk.loadout;
      if ("loadoutPerks" === Fk.slot) {
        const kk = Rk.loadoutPerks.find((kk => kk.loadoutPerkId === Fk.selectedId));
        return (0, Ek.jsx)("section", {
          className: "BoardDetail",
          children: kk && (0, Ek.jsx)(cF, {
            view: Fk,
            controller: Bk,
            perk: kk
          })
        })
      }
      const tk = tF(Rk, Fk.slot),
        ak = tk.loadoutSlotOptions.find((kk => kk.loadoutOptionId === Fk.selectedId));
      return (0, Ek.jsx)("section", {
        className: "BoardDetail",
        children: ak && (0, Ek.jsx)(UF, {
          view: Fk,
          controller: Bk,
          slot: tk,
          option: ak
        })
      })
    }

    function rF(kk) {
      let {
        owned: Fk,
        total: Bk
      } = kk;
      return Bk <= 1 ? null : (0, Ek.jsx)("span", {
        className: "LoadoutPips",
        children: Array.from({
          length: Bk
        }, ((kk, Bk) => (0, Ek.jsx)("span", {
          className: dk()("LoadoutPip", {
            Filled: Bk < Fk
          })
        }, Bk)))
      })
    }

    function DF(kk) {
      let {
        view: Fk,
        controller: Bk
      } = kk;
      const {
        t: Rk
      } = (0, Vk.x)(), tk = Fk.loadout, ak = oF();
      return (0, Ek.jsxs)("nav", {
        className: "LoadoutKit",
        "aria-label": Rk(`${Sk}:loadoutKit`),
        children: [tk.loadoutSlots.map((kk => {
          const tk = kk.loadoutSlotOptions.find((Fk => Fk.loadoutOptionId === kk.loadoutSlotEquippedId));
          return (0, Ek.jsxs)("button", {
            ref: ak("section", kk.loadoutSlotKind),
            type: "button",
            className: dk()("LoadoutKitSlot", {
              Selected: Fk.slot === kk.loadoutSlotKind
            }),
            onClick: () => {
              Bk.selectSlot(kk.loadoutSlotKind)
            },
            children: [(0, Ek.jsx)("span", {
              className: "LoadoutKitIcon",
              children: tk && (0, Ek.jsx)(uk, {
                itemName: tk.loadoutOptionIcon
              })
            }), (0, Ek.jsxs)("span", {
              className: "LoadoutKitText",
              children: [(0, Ek.jsxs)("span", {
                className: "LoadoutKitTop",
                children: [(0, Ek.jsx)("span", {
                  className: "LoadoutKitLabel",
                  children: Rk(vF[kk.loadoutSlotKind])
                }), tk && (0, Ek.jsx)(rF, {
                  owned: tk.loadoutOptionOwnedTier,
                  total: tk.loadoutOptionTiers.length
                })]
              }), (0, Ek.jsx)("span", {
                className: "LoadoutKitName",
                children: null === tk || void 0 === tk ? void 0 : tk.loadoutOptionName
              })]
            })]
          }, kk.loadoutSlotKind)
        })), (0, Ek.jsx)(zF, {
          view: Fk,
          controller: Bk
        })]
      })
    }

    function zF(kk) {
      let {
        view: Fk,
        controller: Bk
      } = kk;
      const {
        t: Rk
      } = (0, Vk.x)(), tk = Fk.loadout, ak = tk.loadoutPerks.filter((kk => kk.loadoutPerkEquipped)), Xk = oF();
      return (0, Ek.jsxs)("button", {
        ref: Xk("section", "loadoutPerks"),
        type: "button",
        className: dk()("LoadoutKitSlot", "LoadoutPerks", {
          Selected: "loadoutPerks" === Fk.slot
        }),
        onClick: () => {
          Bk.selectSlot("loadoutPerks")
        },
        children: [(0, Ek.jsxs)("span", {
          className: "LoadoutKitTop",
          children: [(0, Ek.jsx)("span", {
            className: "LoadoutKitLabel",
            children: Rk(vF.loadoutPerks)
          }), (0, Ek.jsx)("span", {
            className: "LoadoutPerkCount",
            children: Rk(`${Sk}:loadoutPerkCount`, {
              equipped: String(ak.length),
              max: String(tk.loadoutMaxPerks)
            })
          })]
        }), (0, Ek.jsx)("span", {
          className: "LoadoutSockets",
          children: Array.from({
            length: tk.loadoutMaxPerks
          }, ((kk, Fk) => {
            const Bk = ak[Fk];
            return (0, Ek.jsxs)("span", {
              className: dk()("LoadoutSocket", {
                Filled: Bk,
                Empty: !Bk
              }),
              children: [(0, Ek.jsx)("span", {
                className: "LoadoutSocketWell",
                children: Bk && (0, Ek.jsx)(uk, {
                  itemName: Bk.loadoutPerkIcon
                })
              }), (0, Ek.jsx)("span", {
                className: "LoadoutSocketName",
                children: Bk ? Bk.loadoutPerkName : Rk(`${Sk}:loadoutPerkSocketEmpty`)
              })]
            }, Fk)
          }))
        })]
      })
    }

    function PF(kk) {
      let {
        icon: Fk,
        name: Bk,
        selected: Rk,
        equipped: tk,
        locked: ak,
        ownedTier: Xk,
        tiers: bk,
        buttonRef: wk,
        onSelect: dk
      } = kk;
      const {
        t: sk
      } = (0, Vk.x)();
      return (0, Ek.jsxs)(Gk, {
        icon: (0, Ek.jsx)(uk, {
          itemName: Fk
        }),
        name: Bk,
        selected: Rk,
        locked: ak,
        buttonRef: wk,
        onSelect: dk,
        children: [tk && (0, Ek.jsx)("span", {
          className: "BoardBadge",
          children: sk(`${Sk}:loadoutEquippedBadge`)
        }), ak && (0, Ek.jsx)("span", {
          className: "BoardBadge Muted",
          children: sk(`${Sk}:loadoutLocked`)
        }), !ak && (0, Ek.jsx)(rF, {
          owned: Xk,
          total: bk
        })]
      })
    }

    function hF(kk) {
      let {
        view: Fk,
        controller: Bk
      } = kk;
      const Rk = Fk.loadout,
        tk = oF();
      if ("loadoutPerks" === Fk.slot) return (0, Ek.jsx)("div", {
        className: "BoardTiles",
        children: Rk.loadoutPerks.map((kk => (0, Ek.jsx)(PF, {
          icon: kk.loadoutPerkIcon,
          name: kk.loadoutPerkName,
          selected: Fk.selectedId === kk.loadoutPerkId,
          equipped: kk.loadoutPerkEquipped,
          locked: !kk.loadoutPerkOwned,
          ownedTier: 0,
          tiers: 0,
          buttonRef: tk("AA", kk.loadoutPerkId),
          onSelect: () => {
            Bk.select(kk.loadoutPerkId)
          }
        }, kk.loadoutPerkId)))
      });
      const ak = tF(Rk, Fk.slot);
      return (0, Ek.jsx)("div", {
        className: "BoardTiles",
        children: ak.loadoutSlotOptions.map((kk => (0, Ek.jsx)(PF, {
          icon: kk.loadoutOptionIcon,
          name: kk.loadoutOptionName,
          selected: Fk.selectedId === kk.loadoutOptionId,
          equipped: ak.loadoutSlotEquippedId === kk.loadoutOptionId,
          locked: 0 === kk.loadoutOptionOwnedTier,
          ownedTier: kk.loadoutOptionOwnedTier,
          tiers: kk.loadoutOptionTiers.length,
          buttonRef: tk("AA", kk.loadoutOptionId),
          onSelect: () => {
            Bk.select(kk.loadoutOptionId)
          }
        }, kk.loadoutOptionId)))
      })
    }

    function qF(kk) {
      let {
        loadout: Fk
      } = kk;
      return (0, Ek.jsx)(rk, {
        coins: Fk.loadoutCoins,
        children: Fk.loadoutHeldParts.filter((kk => kk.loadoutHeldPartAmount > 0)).map((kk => (0, Ek.jsx)(gk, {
          itemName: kk.loadoutHeldPartItem,
          amount: kk.loadoutHeldPartAmount
        }, kk.loadoutHeldPartCurrency)))
      })
    }

    function CF(kk) {
      let {
        controller: Fk
      } = kk;
      const Bk = (0, sk.g)(AF, Fk.getSnapshot()),
        {
          t: Rk
        } = (0, Vk.x)();
      if (null === Bk.loadout) return null;
      const tk = Bk.notice;
      return (0, Ek.jsx)(EF, {
        view: Bk,
        onDismiss: Fk.dismiss,
        children: (0, Ek.jsxs)(Hk, {
          open: Bk.open,
          onDismiss: Fk.dismiss,
          title: Rk(`${Sk}:loadoutTitle`),
          className: "ContainmentLoadoutPanel",
          headerExtra: (0, Ek.jsx)(qF, {
            loadout: Bk.loadout
          }),
          statusRefused: null === tk || void 0 === tk ? void 0 : tk.loadoutNoticeRefused,
          status: (0, Ek.jsxs)(Ek.Fragment, {
            children: [(0, Ek.jsx)("span", {
              className: "LoadoutRadioBadge",
              children: Rk(`${Sk}:loadoutRadioBadge`)
            }), null !== tk && Rk(`${Sk}:${tk.loadoutNoticeKey}`, {
              name: tk.loadoutNoticeName,
              tier: (0, kF.V)(tk.loadoutNoticeTier),
              max: String(Bk.loadout.loadoutMaxPerks)
            })]
          }),
          children: [(0, Ek.jsx)(DF, {
            view: Bk,
            controller: Fk
          }), (0, Ek.jsx)(hF, {
            view: Bk,
            controller: Fk
          }), (0, Ek.jsx)(TF, {
            view: Bk,
            controller: Fk
          })]
        })
      })
    }

    function ZF(kk, Fk, Bk) {
      const Rk = kk.locatorEntries.find((kk => kk.locatorEntryId === Bk));
      if (!Rk) return null;
      const tk = Rk.locatorEntryName;
      if ("locatorDisarm" === Fk) return Rk.locatorEntryArmed ? {
        board: pF(kk, null),
        notice: KF("locatorNoticeDisarmed", tk)
      } : null;
      if ("locatorArm" === Fk) return Rk.locatorEntryOwned && !Rk.locatorEntryArmed ? {
        board: pF(kk, Bk),
        notice: KF("locatorNoticeArmed", tk)
      } : null;
      if (Rk.locatorEntryOwned || kk.locatorCoins < Rk.locatorEntryPrice) return null;
      const ak = pF({
        ...kk,
        locatorCoins: kk.locatorCoins - Rk.locatorEntryPrice
      }, Bk);
      return {
        board: {
          ...ak,
          locatorEntries: ak.locatorEntries.map((kk => kk.locatorEntryId === Bk ? {
            ...kk,
            locatorEntryOwned: !0
          } : kk))
        },
        notice: KF("locatorNoticeBought", tk)
      }
    }

    function pF(kk, Fk) {
      return {
        ...kk,
        locatorEntries: kk.locatorEntries.map((kk => {
          const Bk = kk.locatorEntryId === Fk;
          return kk.locatorEntryArmed === Bk ? kk : {
            ...kk,
            locatorEntryArmed: Bk
          }
        }))
      }
    }

    function KF(kk, Fk) {
      return {
        locatorNoticeKey: kk,
        locatorNoticeRefused: !1,
        locatorNoticeName: Fk
      }
    }
    const xF = "containmentLocatorView";
    class jF extends FF {
      constructor(kk, Fk, Bk, Rk) {
        super(kk, Fk, Bk, Rk, "locator", ZF), this.snapshot = this.buildSnapshot()
      }
      messageOpens(kk) {
        return kk.locatorMessageOpens
      }
      messageNotice(kk) {
        return kk.locatorNotice
      }
      openingSelection(kk) {
        var Fk;
        const Bk = kk.locatorEntries;
        return (null !== (Fk = Bk.find((kk => kk.locatorEntryArmed))) && void 0 !== Fk ? Fk : Bk[0]).locatorEntryId
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
    const lF = {
        locatorContained: `${Sk}:locatorFlavourContained`,
        locatorEncountered: `${Sk}:locatorFlavourEncountered`,
        locatorUnseen: `${Sk}:locatorFlavourUnseen`
      },
      nF = {
        codexAnyDifficulty: null,
        codexNormalOnly: `${Sk}:locatorAttunedNormal`,
        codexHardOnly: `${Sk}:locatorAttunedHard`
      };

    function IF() {
      return (0, Ek.jsx)(Ek.Fragment, {
        children: Array.from({
          length: 5
        }, ((kk, Fk) => (0, Ek.jsx)("span", {
          className: "LocatorFly",
          children: (0, Ek.jsx)("img", {
            src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAICAYAAADwdn+XAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYElEQVR4nGNgoBboMlb5LyUjD8YgNtHyJ6/d+Q/CILa1lz9YAbo4DCDLYxjQv3gt3AYQG90AdHkUQ/qhkjAb0BURkgcDmAQMo7sSXR7deyiGoIvDvIOsGasB+ACyBmTNACS0go3ibhumAAAAAElFTkSuQmCC",
            alt: "",
            draggable: !1
          })
        }, Fk)))
      })
    }

    function QF(kk) {
      let {
        entry: Fk
      } = kk;
      const {
        t: Bk
      } = (0, Vk.x)();
      return Fk.locatorEntryArmed ? (0, Ek.jsx)("span", {
        className: "BoardBadge Armed",
        children: Bk(`${Sk}:locatorArmedBadge`)
      }) : Fk.locatorEntryOwned ? (0, Ek.jsx)("span", {
        className: "BoardBadge",
        children: Bk(`${Sk}:locatorOwnedBadge`)
      }) : null
    }

    function kB(kk) {
      let {
        entry: Fk,
        coins: Bk,
        inTile: Rk = !1
      } = kk;
      return (0, Ek.jsx)(gk, {
        itemName: Nk,
        amount: Fk.locatorEntryPrice,
        Hb: Bk,
        inTile: Rk
      })
    }

    function FB(kk) {
      let {
        view: Fk,
        controller: Bk,
        entry: Rk
      } = kk;
      const {
        t: tk
      } = (0, Vk.x)(), ak = Rk.locatorEntryId, Xk = Fk.locators.locatorEntries.find((kk => kk.locatorEntryArmed && kk !== Rk));
      return (0, Ek.jsxs)("div", {
        className: "BoardActions",
        children: [Rk.locatorEntryArmed && (0, Ek.jsx)(ek.O, {
          disabled: Fk.pending,
          onClick: () => {
            Bk.act("locatorDisarm", ak)
          },
          children: tk(`${Sk}:locatorDisarm`)
        }), Rk.locatorEntryOwned && !Rk.locatorEntryArmed && (0, Ek.jsx)(ek.g, {
          disabled: Fk.pending,
          onClick: () => {
            Bk.act("locatorArm", ak)
          },
          children: tk(`${Sk}:locatorArm`)
        }), !Rk.locatorEntryOwned && (0, Ek.jsxs)("div", {
          className: "LocatorBuy",
          children: [(0, Ek.jsx)(kB, {
            entry: Rk,
            coins: Fk.locators.locatorCoins
          }), (0, Ek.jsx)(ek.o, {
            disabled: Fk.locators.locatorCoins < Rk.locatorEntryPrice || Fk.pending,
            onClick: () => {
              Bk.act("locatorBuy", ak)
            },
            children: tk(`${Sk}:locatorBuy`)
          })]
        }), Xk && !Rk.locatorEntryArmed && (0, Ek.jsx)("span", {
          className: "BoardHint",
          children: tk(`${Sk}:locatorReplacesHint`, {
            name: Xk.locatorEntryName
          })
        })]
      })
    }

    function BB(kk) {
      let {
        entry: Fk
      } = kk;
      return "locatorUnseen" === Fk.locatorEntryStanding ? (0, Ek.jsx)(uk, {
        itemName: "Compass"
      }) : (0, Ek.jsx)(Mk, {
        anomalyId: Fk.locatorEntryId,
        caught: "locatorContained" === Fk.locatorEntryStanding
      })
    }

    function RB(kk) {
      let {
        view: Fk,
        controller: Bk,
        entry: Rk
      } = kk;
      const {
        t: tk
      } = (0, Vk.x)(), ak = nF[Rk.locatorEntryDifficulty];
      return (0, Ek.jsxs)("section", {
        className: "BoardDetail",
        children: [(0, Ek.jsxs)("div", {
          className: dk()("LocatorLabel", {
            Armed: Rk.locatorEntryArmed
          }),
          children: [(0, Ek.jsx)(Tk, {
            icon: (0, Ek.jsx)(BB, {
              entry: Rk
            }),
            name: tk(`${Sk}:locatorName`, {
              name: Rk.locatorEntryName
            }),
            children: (0, Ek.jsx)(QF, {
              entry: Rk
            })
          }), (0, Ek.jsx)("p", {
            className: "BoardDescription",
            children: tk(Rk.locatorEntryArmed ? `${Sk}:locatorFlavourArmed` : lF[Rk.locatorEntryStanding])
          }), null !== ak && (0, Ek.jsx)("p", {
            className: "LocatorAttuned",
            children: tk(ak)
          }), (0, Ek.jsx)("p", {
            className: "BoardDescription LocatorUsage",
            children: tk(`${Sk}:locatorUsage`)
          })]
        }), (0, Ek.jsx)(FB, {
          view: Fk,
          controller: Bk,
          entry: Rk
        })]
      })
    }

    function tB(kk) {
      let {
        controller: Fk
      } = kk;
      const Bk = (0, sk.g)(xF, Fk.getSnapshot()),
        {
          t: Rk
        } = (0, Vk.x)(),
        tk = Bk.locators;
      if (null === tk) return null;
      const ak = tk.locatorEntries.find((kk => kk.locatorEntryId === Bk.selectedId)),
        Xk = Bk.notice;
      return (0, Ek.jsxs)(Hk, {
        open: Bk.open,
        onDismiss: Fk.dismiss,
        title: Rk(`${Sk}:locatorTitle`),
        className: "ContainmentLocatorPanel",
        decor: (0, Ek.jsx)(IF, {}),
        headerExtra: (0, Ek.jsx)(rk, {
          coins: tk.locatorCoins
        }),
        statusRefused: null === Xk || void 0 === Xk ? void 0 : Xk.locatorNoticeRefused,
        status: (0, Ek.jsxs)(Ek.Fragment, {
          children: [(0, Ek.jsx)("span", {
            className: "LocatorKeeperBadge",
            children: Rk(`${Sk}:locatorKeeperName`)
          }), null !== Xk && Rk(`${Sk}:${Xk.locatorNoticeKey}`, {
            name: Xk.locatorNoticeName
          })]
        }),
        children: [(0, Ek.jsx)("div", {
          className: "BoardTiles",
          children: tk.locatorEntries.map((kk => (0, Ek.jsxs)(Gk, {
            icon: (0, Ek.jsx)(BB, {
              entry: kk
            }),
            name: kk.locatorEntryName,
            selected: kk === ak,
            locked: !1,
            className: dk()("LocatorTag", {
              Armed: kk.locatorEntryArmed
            }),
            onSelect: () => {
              Fk.select(kk.locatorEntryId)
            },
            children: [(0, Ek.jsx)(QF, {
              entry: kk
            }), !kk.locatorEntryOwned && (0, Ek.jsx)(kB, {
              entry: kk,
              coins: tk.locatorCoins,
              inTile: !0
            })]
          }, kk.locatorEntryId)))
        }), (0, Ek.jsx)(RB, {
          view: Bk,
          controller: Fk,
          entry: ak
        })]
      })
    }

    function aB(kk) {
      let {
        loadout: Fk,
        codex: Bk,
        locator: Rk
      } = kk;
      return (0, Ek.jsxs)(Ek.Fragment, {
        children: [(0, Ek.jsx)(CF, {
          controller: Fk
        }), (0, Ek.jsx)(Qk, {
          controller: Bk
        }), (0, Ek.jsx)(tB, {
          controller: Rk
        })]
      })
    }
    var XB = Bk(38188);
    class bB {
      constructor(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.sendCommand = kk, this.budget = void 0, this.awaitingReply = !1, this.replyTimer = null, this.listeners = new Set, this.budget = new XB.b({
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
    var wB = Bk(38182);
    const dB = new Map([
      ["npc_general", fF],
      ["npc_tentacle_guy", wB]
    ]);

    function sB(kk) {
      const Fk = dB.get(kk);
      if (void 0 === Fk) return null;
      const Bk = document.createElement("img");
      return Bk.src = Fk, Bk.alt = "", Bk.draggable = !1, Bk.style.imageRendering = "pixelated", Bk
    }
    const VB = function() {
      let kk, Fk = !1,
        Bk = null,
        wk = null;
      const dk = [],
        sk = kk => {
          for (const Fk of dk) Fk !== kk && Fk.close();
          (0, bk.q)()
        },
        Vk = kk => {
          kk && (0, bk.i)()
        },
        Jk = new bB((Fk => {
          kk.sendCommand(Fk)
        })),
        Ak = new eF((kk => {
          Xk.o.Hf(AF, kk, !0)
        }), sk, Vk, Jk),
        ek = new Pk((kk => {
          Xk.o.Hf(zk, kk, !0)
        }), sk, Vk),
        yk = new jF((kk => {
          Xk.o.Hf(xF, kk, !0)
        }), sk, Vk, Jk);
      dk.push(Ak, ek, yk);
      return {
        onCreate: Fk => {
          kk = Fk, Bk = (0, bk.w)(null, {
            content: (0, Rk.createElement)(aB, {
              loadout: Ak,
              codex: ek,
              locator: yk
            }),
            onClose: () => {
              for (const kk of dk) kk.close()
            }
          }), wk = (0, ak.e)(sB)
        },
        onReceivedMessageFromServer: (kk, Fk) => {
          "containmentLoadout" === kk ? Ak.he(Fk) : "containmentLoadoutClose" === kk ? Ak.isOpen() && (Ak.close(), (0, bk.f)()) : "containmentCodex" === kk ? ek.he(Fk) : "containmentLocator" === kk && yk.he(Fk)
        },
        yJ: () => {
          Fk || tk.c.get("loadingOverlayVisible") || (Fk = !0, kk.sendCommand("containmentEntered"))
        },
        onClose: () => {
          var kk, Fk;
          null === (kk = Bk) || void 0 === kk || kk(), Bk = null, null === (Fk = wk) || void 0 === Fk || Fk(), wk = null;
          for (const Bk of dk) Bk.dispose();
          Jk.dispose()
        }
      }
    }
  },
  36563: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      A: () => Tk,
      C: () => rk,
      E: () => Dk,
      F: () => Gk,
      G: () => zk,
      c: () => wk,
      g: () => uk,
      h: () => bk,
      l: () => ck,
      p: () => Nk,
      r: () => Lk,
      u: () => Uk,
      w: () => gk,
      y: () => Sk
    });
    var Rk = Bk(42);
    const tk = {
        codeBlock: ["codeBlockIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "worldCodeButton", "exportButton", "helpButton"],
        worldCode: ["worldCodeIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "exportButton", "helpButton"]
      },
      ak = ["docsButton", "docsPanel", "docsClientOptionsTab", "docsClientOptions", "docsApiReferenceTab", "docsApiReference", "docsCallbacksTab", "docsCallbacks", "hideDocsButton"],
      Xk = ["aiHelperButton", "aiPanel", "aiAskBox", "aiModelChip", "aiAnswer", "aiEdits", "aiGear", "aiNotes", "aiGameSettings", "hideAiHelperButton"],
      bk = ak.filter((kk => "docsButton" !== kk)),
      wk = Xk.filter((kk => "aiHelperButton" !== kk)),
      dk = "codeEditorTutorials",
      sk = {
        codeBlockIntro: "codeBlockIntroShown",
        worldCodeIntro: "worldCodeIntroShown"
      },
      Vk = {
        welcome: "welcomeComplete",
        docsOverview: "docsOverviewComplete",
        aiHelperOverview: "aiHelperOverviewComplete"
      };
    let Jk = null,
      Ak = null;
    const ek = new Set,
      yk = new Set;
    let fk = null;
    const mk = new Set,
      Wk = new Set;

    function vk() {
      Wk.forEach((kk => {
        kk()
      }))
    }

    function ik() {
      if (!Jk) {
        const kk = Rk.i.getItem(dk);
        Jk = {
          codeBlockIntroShown: !1,
          worldCodeIntroShown: !1,
          welcomeComplete: !1,
          docsOverviewComplete: !1,
          aiHelperOverviewComplete: !1,
          ..."object" === typeof kk && null !== kk ? kk : {}
        }
      }
      return Jk
    }

    function Yk(kk) {
      const Fk = ik();
      Fk[kk] || (Jk = {
        ...Fk,
        [kk]: !0
      }, Rk.i.setItem(dk, Jk))
    }

    function Lk(kk) {
      return "docsOverview" === kk ? ak : "aiHelperOverview" === kk ? Xk : Ak ? tk[Ak] : []
    }

    function Ok(kk) {
      return ("worldCodeButton" !== kk || !ik().worldCodeIntroShown) && !mk.has(kk)
    }

    function Ek(kk) {
      var Fk;
      return (null === (Fk = fk) || void 0 === Fk ? void 0 : Fk.name) === kk ? fk.stepsDone : ek
    }

    function Sk(kk, Fk) {
      if (! function(kk) {
          return fk ? fk.name === kk : "welcome" === kk
        }(kk) || !Ok(Fk) || Ek(kk).has(Fk)) return !1;
      if (fk) return !0;
      const Bk = sk[Fk];
      return Bk ? !ik()[Bk] || yk.has(Fk) : !ik()[Vk[kk]]
    }

    function Nk(kk) {
      var Fk;
      return null !== (Fk = Lk(kk).find((Fk => Sk(kk, Fk)))) && void 0 !== Fk ? Fk : null
    }

    function Hk(kk) {
      var Fk;
      Yk(Vk[kk]), (null === (Fk = fk) || void 0 === Fk ? void 0 : Fk.name) === kk && (fk = null)
    }

    function uk(kk) {
      const Fk = (fk ? [fk.name] : ["welcome", "docsOverview"]).find((Fk => Nk(Fk) === kk));
      if (!Fk) return;
      Ek(Fk).add(kk);
      const Bk = sk[kk];
      Bk && (Yk(Bk), fk || yk.add(kk)), null === Nk(Fk) && Hk(Fk), vk()
    }

    function Mk(kk, Fk) {
      const Bk = Lk(kk),
        Rk = Ek(kk);
      for (let tk = Bk.indexOf(Fk) - 1; tk >= 0; tk--)
        if (Rk.has(Bk[tk]) && Ok(Bk[tk])) return Bk[tk];
      return null
    }

    function gk(kk, Fk) {
      return null !== Mk(kk, Fk)
    }

    function Uk(kk, Fk) {
      const Bk = Mk(kk, Fk);
      Bk && (Ek(kk).delete(Bk), vk())
    }

    function ck(kk) {
      Hk(kk), "welcome" === kk && Lk("welcome").forEach((kk => {
        const Fk = sk[kk];
        Fk && Yk(Fk)
      })), vk()
    }

    function Gk(kk) {
      fk = {
        name: kk,
        stepsDone: new Set
      }, vk()
    }

    function Tk() {
      (fk || 0 !== ek.size || 0 !== yk.size) && (fk = null, ek.clear(), yk.clear(), vk())
    }

    function rk(kk, Fk) {
      const Bk = Fk ? kk : Ak === kk ? null : Ak;
      Bk !== Ak && (Ak = Bk, vk())
    }

    function Dk(kk, Fk) {
      mk.has(kk) === Fk && (Fk ? mk.delete(kk) : mk.add(kk), vk())
    }

    function zk(kk) {
      return Wk.add(kk), () => {
        Wk.delete(kk)
      }
    }
  },
  38894: (kk, Fk, Bk) => {
    var Rk = {
      "./breach-zero-uncaught.webp": 38897,
      "./breach-zero.webp": 38899,
      "./brood-father-uncaught.webp": 38901,
      "./brood-father.webp": 38906,
      "./carousel-uncaught.webp": 38910,
      "./carousel.webp": 38912,
      "./deadlock-uncaught.webp": 38915,
      "./deadlock.webp": 38922,
      "./frost-revenant-uncaught.webp": 38924,
      "./frost-revenant.webp": 38931,
      "./hollow-choir-uncaught.webp": 38939,
      "./hollow-choir.webp": 38941,
      "./magma-warden-uncaught.webp": 38945,
      "./magma-warden.webp": 38952,
      "./patient-zero-uncaught.webp": 38961,
      "./patient-zero.webp": 38967,
      "./siege-engine-uncaught.webp": 38971,
      "./siege-engine.webp": 38977,
      "./warp-stalker-uncaught.webp": 38982,
      "./warp-stalker.webp": 38987
    };

    function tk(kk) {
      var Fk = ak(kk);
      return Bk(Fk)
    }

    function ak(kk) {
      if (!Bk.o(Rk, kk)) {
        var Fk = new Error("Cannot find module '" + kk + "'");
        throw Fk.code = "MODULE_NOT_FOUND", Fk
      }
      return Rk[kk]
    }
    tk.keys = function() {
      return Object.keys(Rk)
    }, tk.resolve = ak, kk.exports = tk, tk.id = 38894
  },
  38897: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/breach-zero-uncaught.c7d4410f99269ac1ee2f.webp"
  },
  38899: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/breach-zero.ef5aacecf502228cd20b.webp"
  },
  38901: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/brood-father-uncaught.ee678432c71b7061fae1.webp"
  },
  38906: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/brood-father.e48391955a574c1155fa.webp"
  },
  38910: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/carousel-uncaught.a92757620f569f31d7d2.webp"
  },
  38912: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/carousel.5fc13db7958067d6e1a3.webp"
  },
  38915: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/deadlock-uncaught.feadbdbbf2d040dce5c0.webp"
  },
  38922: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/deadlock.2bcaeaa57376fd78ddcb.webp"
  },
  38924: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/frost-revenant-uncaught.c0271636eeae988b1a40.webp"
  },
  38931: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/frost-revenant.fed6021646d7f0f81876.webp"
  },
  38939: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/hollow-choir-uncaught.7eaab76a15f82bd79558.webp"
  },
  38941: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/hollow-choir.05f9c51994aecece852a.webp"
  },
  38945: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/magma-warden-uncaught.5308736fbb8a503cdfc7.webp"
  },
  38952: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/magma-warden.cc4302a49a39ae962a31.webp"
  },
  38961: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/patient-zero-uncaught.1f9ec012a14c4dbdcc8f.webp"
  },
  38967: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/patient-zero.cc76984bb20e9f9ace76.webp"
  },
  38971: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/siege-engine-uncaught.88e0ad7fec37ba2b4a2e.webp"
  },
  38977: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/siege-engine.b2e2382e415f4ae470ac.webp"
  },
  38982: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/warp-stalker-uncaught.c3b1b82ecb18446b71b0.webp"
  },
  38987: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/warp-stalker.851972c629601b668aa7.webp"
  },
  38182: kk => {
    kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYElEQVR4nGNgIBIwovH/45JnRFaUGN+Comr+whq4GiZ0RVycnGAMAlAxsC0sMN2fvn9DodEBzEQGdUV5hvNnV4JpGJuPkwtTIQh4umZhZWMonDqjGCsbHcCCBkQjs0kDAPeaHpfX1eroAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);