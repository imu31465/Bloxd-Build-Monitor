export const id = 29;
export const ids = [29];
export const modules = {
  37796: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => LR,
      d: () => nR,
      g: () => wR,
      j: () => KR
    });
    var yR = GR(35140),
      tR = GR(3494),
      uR = GR(3498),
      ZR = GR(10048),
      qR = GR(1581),
      iR = GR(66),
      fR = GR(83),
      VR = GR(1378);

    function KR() {
      var RR;
      return (0, qR.h)(tR.e, (0, tR.r)()), (0, VR.jsx)(VR.Fragment, {
        children: null === (RR = (0, tR.r)()) || void 0 === RR ? void 0 : RR.content
      })
    }

    function wR(RR) {
      var JR;
      let {
        show: GR
      } = RR;
      (0, qR.h)(tR.e, (0, tR.r)());
      const fR = null === (JR = (0, tR.r)()) || void 0 === JR ? void 0 : JR.menu;
      return (0, iR.useEffect)((() => {
        var RR;
        GR || (null === fR || void 0 === fR || null === (RR = fR.onClose) || void 0 === RR || RR.call(fR), (0, uR.m)())
      }), [GR, fR]), (0, iR.useEffect)((() => GR ? (0, ZR.e)(uR.q, uR.e) : void 0), [GR]), (0, VR.jsx)(yR.b, {
        showing: GR,
        globallyUniqueKey: "clientGameMenu",
        children: null === fR || void 0 === fR ? void 0 : fR.content
      })
    }
    const rR = new Map,
      eR = new Set;

    function aR(RR, JR) {
      JR ? rR.set(RR, JR) : rR.delete(RR);
      for (const GR of eR) GR()
    }

    function LR(RR) {
      let {
        placement: JR = "bottom"
      } = RR;
      const GR = (0, iR.useRef)(null);
      return (0, iR.useLayoutEffect)((() => {
        const RR = GR.current;
        return aR(JR, RR), () => {
          rR.get(JR) === RR && aR(JR, null)
        }
      }), [JR]), (0, VR.jsx)("div", {
        ref: GR,
        id: `clientGameHud-${JR}`,
        style: {
          display: "contents"
        }
      })
    }

    function nR(RR) {
      let {
        children: JR,
        placement: GR = "bottom"
      } = RR;
      const [yR, tR] = (0, iR.useState)((() => {
        var RR;
        return null !== (RR = rR.get(GR)) && void 0 !== RR ? RR : null
      }));
      return (0, iR.useEffect)((() => {
        const RR = () => {
          var RR;
          tR(null !== (RR = rR.get(GR)) && void 0 !== RR ? RR : null)
        };
        return eR.add(RR), RR(), () => {
          eR.delete(RR)
        }
      }), [GR]), yR ? (0, fR.createPortal)(JR, yR) : null
    }
  },
  5792: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => wR
    });
    var yR = GR(1163),
      tR = GR.n(yR),
      uR = GR(1468),
      ZR = GR(1465),
      qR = GR(4850),
      iR = GR(134),
      fR = GR(4889),
      VR = GR(4881),
      KR = GR(1378);

    function wR(RR) {
      let {
        game: JR
      } = RR;
      const GR = (0, iR.is99NightsCrazyGamesBundle)() ? "large" : "small",
        yR = (0, fR.d)(JR, GR),
        wR = (0, qR.h)(yR),
        rR = void 0 !== wR.blurhash;
      return (0, KR.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [wR.isLoading && !rR && (0, KR.jsx)(ZR.d, {
          loaderType: "Secondary"
        }), !wR.failed && (null !== wR.src || rR) && (0, KR.jsx)("div", {
          className: tR()("SchematicImage", VR.f, {
            SchematicImageFadeIn: wR.fadeIn && !rR
          }),
          style: (0, VR.c)(wR),
          children: (0, KR.jsx)(VR.b, {
            image: wR
          })
        }), wR.failed && (0, KR.jsx)("div", {
          className: "SchematicImageError",
          children: (0, KR.jsx)(uR.d, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  35140: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => uR
    });
    var yR = GR(5343),
      tR = GR(5347);

    function uR(RR) {
      let {
        children: JR,
        showing: GR,
        globallyUniqueKey: uR,
        alwaysMountChildren: ZR = !1,
        doGameplayStartStopOnShow: qR = !0,
        keepsMovement: iR = !1
      } = RR;
      return (0, tR.d)(!0, GR, uR, iR), (0, yR.d)(qR, GR), GR || ZR ? JR : null
    }
  },
  5798: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => qR
    });
    var yR = GR(66),
      tR = GR(1163),
      uR = GR.n(tR),
      ZR = GR(1378);

    function qR(RR) {
      let {
        columns: JR,
        rows: GR,
        getRowKey: tR,
        renderRow: qR,
        className: iR
      } = RR;
      return (0, ZR.jsxs)("table", {
        className: uR()("Table", iR),
        children: [(0, ZR.jsx)("thead", {
          children: (0, ZR.jsx)("tr", {
            children: JR.map((RR => (0, ZR.jsx)("th", {
              children: RR.header
            }, RR.key)))
          })
        }), (0, ZR.jsx)("tbody", {
          children: GR.map(((RR, JR) => (0, ZR.jsx)(yR.Fragment, {
            children: qR(RR, JR)
          }, tR(RR))))
        })]
      })
    }
  },
  37849: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => qR,
      e: () => iR,
      i: () => fR,
      k: () => VR,
      l: () => eR
    });
    var yR = GR(66),
      tR = GR(4352),
      uR = GR(3593),
      ZR = GR(32);
    const qR = 8,
      iR = "InGameHeaderContainer",
      fR = "TopRightElements";

    function VR(RR) {
      const [JR] = (0, tR.e)(), [GR, uR] = (0, yR.useState)(!1);
      return (0, yR.useLayoutEffect)((() => {
        if (!RR) return;
        const JR = document.querySelector(`.${iR}`),
          GR = document.querySelector(`.${fR}`),
          yR = () => {
            const yR = RR.getBoundingClientRect(),
              tR = JR ? JR.getBoundingClientRect().right : 0,
              ZR = GR ? GR.getBoundingClientRect().left : window.innerWidth,
              iR = yR.left < tR + qR,
              fR = yR.right > ZR - qR;
            uR(iR || fR)
          };
        yR();
        const tR = new ResizeObserver(yR);
        return tR.observe(RR), JR && tR.observe(JR), GR && tR.observe(GR), () => {
          tR.disconnect()
        }
      }), [RR, JR]), GR
    }
    const KR = `.InGameUi .${iR}`,
      wR = [KR, ".InGameUi .TopRightIcons", ".InGameUi .TopRightElementsRight"],
      rR = 1e3;

    function eR(RR) {
      let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : RR,
        GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const [tR, iR] = (0, yR.useState)(null);
      return (0, yR.useLayoutEffect)((() => {
        if (!RR) return;
        const yR = new ResizeObserver((() => {
          fR()
        }));
        yR.observe(RR), JR && JR !== RR && yR.observe(JR);
        let tR = [];

        function fR() {
          var uR, ZR, fR;
          const VR = RR.getBoundingClientRect(),
            rR = function() {
              const RR = wR.map((RR => document.querySelector(RR))).filter((RR => null !== RR));
              for (const JR of RR) tR.includes(JR) || yR.observe(JR);
              for (const JR of tR) RR.includes(JR) || yR.unobserve(JR);
              return tR = RR, RR
            }(),
            eR = rR.filter((RR => {
              const JR = RR.getBoundingClientRect();
              return JR.width > 0 && JR.height > 0 && VR.left < JR.right + qR && VR.right > JR.left - qR
            }));
          if (0 === eR.length && !GR) return void iR(null);
          const aR = rR.find((RR => RR.matches(KR))),
            LR = Math.max(null !== (uR = null === aR || void 0 === aR ? void 0 : aR.getBoundingClientRect().bottom) && void 0 !== uR ? uR : 0, ...eR.map((RR => RR.getBoundingClientRect().bottom))),
            nR = null !== (ZR = null === JR || void 0 === JR || null === (fR = JR.offsetParent) || void 0 === fR ? void 0 : fR.getBoundingClientRect().top) && void 0 !== ZR ? ZR : 0;
          iR(Math.ceil(LR + qR / 2) - Math.round(nR))
        }
        const VR = setInterval(fR, rR);
        fR(), window.addEventListener("resize", fR);
        const eR = (0, ZR.q)(uR.h, fR);
        return () => {
          yR.disconnect(), clearInterval(VR), window.removeEventListener("resize", fR), eR()
        }
      }), [RR, JR, GR]), tR
    }
  },
  37810: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => ZR,
      g: () => tR,
      j: () => uR
    });
    var yR = GR(66);

    function tR(RR) {
      return qR(RR, iR)
    }

    function uR(RR) {
      return qR(RR, fR)
    }

    function ZR(RR) {
      return `${Math.floor(RR/60)}:${String(RR%60).padStart(2,"0")}`
    }

    function qR(RR, JR) {
      const [, GR] = (0, yR.useState)(null);
      return (0, yR.useEffect)((() => {
        if (0 === RR) return;
        const yR = window.setInterval((() => {
          const yR = JR(RR);
          GR((JR => (null === JR || void 0 === JR ? void 0 : JR.endsAt) === RR && JR.value === yR ? JR : {
            endsAt: RR,
            value: yR
          }))
        }), 250);
        return () => {
          window.clearInterval(yR)
        }
      }), [RR, JR]), JR(RR)
    }

    function iR(RR) {
      return (RR - performance.now()) / 1e3
    }

    function fR(RR) {
      return Math.max(0, Math.ceil(iR(RR)))
    }
  },
  10048: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => uR,
      e: () => tR
    });
    let yR = null;
    const tR = function(RR) {
        const JR = {
          cycle: RR,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return yR = JR, () => {
          yR === JR && (yR = null)
        }
      },
      uR = () => {
        var RR;
        return null !== (RR = yR) && void 0 !== RR && RR.canCycle() ? yR.cycle : null
      }
  },
  39767: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => ZR
    });
    const yR = 4,
      tR = 12e3,
      uR = 1e3;
    class ZR {
      constructor() {
        let {
          limit: RR = yR,
          windowMs: JR = tR,
          spacingMs: GR = uR,
          now: ZR = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = RR, this.windowMs = JR, this.spacingMs = GR, this.now = ZR
      }
      isPacing() {
        return !this.canSendPriority() || this.isPriorityWaiting()
      }
      canSendPriority() {
        return this.prune(), this.sent.length < this.limit && this.now() - this.lastSentAt >= this.spacingMs
      }
      tryStart() {
        for (const RR of this.priority) RR.flush();
        return !this.isPacing() && (this.start(), !0)
      }
      start() {
        this.prune();
        const RR = this.now();
        this.sent.push(RR), this.lastSentAt = RR, this.schedule(), this.notify()
      }
      addPriority(RR) {
        return this.priority.add(RR), () => {
          this.priority.delete(RR)
        }
      }
      subscribe(RR) {
        return this.listeners.add(RR), () => {
          this.listeners.delete(RR)
        }
      }
      dispose() {
        this.clearTimer(), this.sent = [], this.listeners.clear(), this.priority.clear()
      }
      isPriorityWaiting() {
        for (const RR of this.priority)
          if (RR.waiting()) return !0;
        return !1
      }
      prune() {
        const RR = this.now() - this.windowMs;
        for (; this.sent.length > 0 && this.sent[0] <= RR;) this.sent.shift()
      }
      schedule() {
        this.clearTimer();
        const RR = this.now(),
          JR = this.lastSentAt + this.spacingMs,
          GR = Math.min(JR > RR ? JR : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        GR !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, GR - RR)))
      }
      notify() {
        for (const RR of this.listeners) RR()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  37712: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => iR,
      g: () => VR,
      i: () => ZR,
      l: () => KR,
      m: () => qR
    });
    var yR = GR(32),
      tR = GR(1449);
    let uR = null;

    function ZR() {
      return (0, tR.g)() ? null : uR
    }

    function qR(RR) {
      return uR = RR, () => {
        uR === RR && (uR = null)
      }
    }
    const iR = "clientGameHeldItemLabelChanged";
    let fR = null;

    function VR() {
      return (0, tR.g)() ? null : fR
    }

    function KR(RR) {
      return fR = RR, yR.n.JK(iR), () => {
        fR === RR && (fR = null, yR.n.JK(iR))
      }
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);