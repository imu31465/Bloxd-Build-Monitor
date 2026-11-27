export const id = 29;
export const ids = [29];
export const modules = {
  37868: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => jW,
      h: () => UW,
      l: () => xW,
      o: () => ZW
    });
    var mW = OW(35220),
      EW = OW(3361),
      NW = OW(3368),
      PW = OW(9954),
      LW = OW(1526),
      cW = OW(62),
      wW = OW(80),
      tW = OW(1283);

    function ZW() {
      var WW;
      return (0, LW.g)(EW.g, (0, EW.F)()), (0, tW.jsx)(tW.Fragment, {
        children: null === (WW = (0, EW.F)()) || void 0 === WW ? void 0 : WW.content
      })
    }

    function xW(WW) {
      var iW;
      let {
        show: OW
      } = WW;
      (0, LW.g)(EW.g, (0, EW.F)());
      const wW = null === (iW = (0, EW.F)()) || void 0 === iW ? void 0 : iW.menu;
      return (0, cW.useEffect)((() => {
        var WW;
        OW || (null === wW || void 0 === wW || null === (WW = wW.onClose) || void 0 === WW || WW.call(wW), (0, NW.s)())
      }), [OW, wW]), (0, cW.useEffect)((() => OW ? (0, PW.e)(NW.C, NW.f) : void 0), [OW]), (0, tW.jsx)(mW.d, {
        showing: OW,
        globallyUniqueKey: "clientGameMenu",
        children: null === wW || void 0 === wW ? void 0 : wW.content
      })
    }
    const lW = new Map,
      AW = new Set;

    function bW(WW, iW) {
      iW ? lW.set(WW, iW) : lW.delete(WW);
      for (const OW of AW) OW()
    }

    function jW(WW) {
      let {
        placement: iW = "bottom"
      } = WW;
      const OW = (0, cW.useRef)(null);
      return (0, cW.useLayoutEffect)((() => {
        const WW = OW.current;
        return bW(iW, WW), () => {
          lW.get(iW) === WW && bW(iW, null)
        }
      }), [iW]), (0, tW.jsx)("div", {
        ref: OW,
        id: `clientGameHud-${iW}`,
        style: {
          display: "contents"
        }
      })
    }

    function UW(WW) {
      let {
        children: iW,
        placement: OW = "bottom"
      } = WW;
      const [mW, EW] = (0, cW.useState)((() => {
        var WW;
        return null !== (WW = lW.get(OW)) && void 0 !== WW ? WW : null
      }));
      return (0, cW.useEffect)((() => {
        const WW = () => {
          var WW;
          EW(null !== (WW = lW.get(OW)) && void 0 !== WW ? WW : null)
        };
        return AW.add(WW), WW(), () => {
          AW.delete(WW)
        }
      }), [OW]), mW ? (0, wW.createPortal)(iW, mW) : null
    }
  },
  5668: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => xW
    });
    var mW = OW(1089),
      EW = OW.n(mW),
      NW = OW(1391),
      PW = OW(1383),
      LW = OW(4746),
      cW = OW(136),
      wW = OW(4787),
      tW = OW(4776),
      ZW = OW(1283);

    function xW(WW) {
      let {
        game: iW
      } = WW;
      const OW = (0, cW.is99NightsCrazyGamesBundle)() ? "large" : "small",
        mW = (0, wW.f)(iW, OW),
        xW = (0, LW.f)(mW),
        lW = void 0 !== xW.blurhash;
      return (0, ZW.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [xW.isLoading && !lW && (0, ZW.jsx)(PW.d, {
          loaderType: "Secondary"
        }), !xW.failed && (null !== xW.src || lW) && (0, ZW.jsx)("div", {
          className: EW()("SchematicImage", tW.j, {
            SchematicImageFadeIn: xW.fadeIn && !lW
          }),
          style: (0, tW.f)(xW),
          children: (0, ZW.jsx)(tW.b, {
            image: xW
          })
        }), xW.failed && (0, ZW.jsx)("div", {
          className: "SchematicImageError",
          children: (0, ZW.jsx)(NW.c, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  35220: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => NW
    });
    var mW = OW(5243),
      EW = OW(5251);

    function NW(WW) {
      let {
        children: iW,
        showing: OW,
        globallyUniqueKey: NW,
        alwaysMountChildren: PW = !1,
        doGameplayStartStopOnShow: LW = !0,
        keepsMovement: cW = !1
      } = WW;
      return (0, EW.b)(!0, OW, NW, cW), (0, mW.b)(LW, OW), OW || PW ? iW : null
    }
  },
  5673: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => LW
    });
    var mW = OW(62),
      EW = OW(1089),
      NW = OW.n(EW),
      PW = OW(1283);

    function LW(WW) {
      let {
        columns: iW,
        rows: OW,
        getRowKey: EW,
        renderRow: LW,
        className: cW
      } = WW;
      return (0, PW.jsxs)("table", {
        className: NW()("Table", cW),
        children: [(0, PW.jsx)("thead", {
          children: (0, PW.jsx)("tr", {
            children: iW.map((WW => (0, PW.jsx)("th", {
              children: WW.header
            }, WW.key)))
          })
        }), (0, PW.jsx)("tbody", {
          children: OW.map(((WW, iW) => (0, PW.jsx)(mW.Fragment, {
            children: LW(WW, iW)
          }, EW(WW))))
        })]
      })
    }
  },
  37919: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => LW,
      e: () => cW,
      h: () => wW,
      i: () => tW,
      j: () => AW
    });
    var mW = OW(62),
      EW = OW(4275),
      NW = OW(3457),
      PW = OW(27);
    const LW = 8,
      cW = "InGameHeaderContainer",
      wW = "TopRightElements";

    function tW(WW) {
      const [iW] = (0, EW.d)(), [OW, NW] = (0, mW.useState)(!1);
      return (0, mW.useLayoutEffect)((() => {
        if (!WW) return;
        const iW = document.querySelector(`.${cW}`),
          OW = document.querySelector(`.${wW}`),
          mW = () => {
            const mW = WW.getBoundingClientRect(),
              EW = iW ? iW.getBoundingClientRect().right : 0,
              PW = OW ? OW.getBoundingClientRect().left : window.innerWidth,
              cW = mW.left < EW + LW,
              wW = mW.right > PW - LW;
            NW(cW || wW)
          };
        mW();
        const EW = new ResizeObserver(mW);
        return EW.observe(WW), iW && EW.observe(iW), OW && EW.observe(OW), () => {
          EW.disconnect()
        }
      }), [WW, iW]), OW
    }
    const ZW = `.InGameUi .${cW}`,
      xW = [ZW, ".InGameUi .TopRightIcons", ".InGameUi .TopRightElementsRight"],
      lW = 1e3;

    function AW(WW) {
      let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : WW,
        OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const [EW, cW] = (0, mW.useState)(null);
      return (0, mW.useLayoutEffect)((() => {
        if (!WW) return;
        const mW = new ResizeObserver((() => {
          wW()
        }));
        mW.observe(WW), iW && iW !== WW && mW.observe(iW);
        let EW = [];

        function wW() {
          var NW, PW, wW;
          const tW = WW.getBoundingClientRect(),
            lW = function() {
              const WW = xW.map((WW => document.querySelector(WW))).filter((WW => null !== WW));
              for (const iW of WW) EW.includes(iW) || mW.observe(iW);
              for (const iW of EW) WW.includes(iW) || mW.unobserve(iW);
              return EW = WW, WW
            }(),
            AW = lW.filter((WW => {
              const iW = WW.getBoundingClientRect();
              return iW.width > 0 && iW.height > 0 && tW.left < iW.right + LW && tW.right > iW.left - LW
            }));
          if (0 === AW.length && !OW) return void cW(null);
          const bW = lW.find((WW => WW.matches(ZW))),
            jW = Math.max(null !== (NW = null === bW || void 0 === bW ? void 0 : bW.getBoundingClientRect().bottom) && void 0 !== NW ? NW : 0, ...AW.map((WW => WW.getBoundingClientRect().bottom))),
            UW = null !== (PW = null === iW || void 0 === iW || null === (wW = iW.offsetParent) || void 0 === wW ? void 0 : wW.getBoundingClientRect().top) && void 0 !== PW ? PW : 0;
          cW(Math.ceil(jW + LW / 2) - Math.round(UW))
        }
        const tW = setInterval(wW, lW);
        wW(), window.addEventListener("resize", wW);
        const AW = (0, PW.n)(NW.d, wW);
        return () => {
          mW.disconnect(), clearInterval(tW), window.removeEventListener("resize", wW), AW()
        }
      }), [WW, iW, OW]), EW
    }
  },
  37888: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => PW,
      e: () => EW,
      f: () => NW
    });
    var mW = OW(62);

    function EW(WW) {
      return LW(WW, cW)
    }

    function NW(WW) {
      return LW(WW, wW)
    }

    function PW(WW) {
      return `${Math.floor(WW/60)}:${String(WW%60).padStart(2,"0")}`
    }

    function LW(WW, iW) {
      const [, OW] = (0, mW.useState)(null);
      return (0, mW.useEffect)((() => {
        if (0 === WW) return;
        const mW = window.setInterval((() => {
          const mW = iW(WW);
          OW((iW => (null === iW || void 0 === iW ? void 0 : iW.endsAt) === WW && iW.value === mW ? iW : {
            endsAt: WW,
            value: mW
          }))
        }), 250);
        return () => {
          window.clearInterval(mW)
        }
      }), [WW, iW]), iW(WW)
    }

    function cW(WW) {
      return (WW - performance.now()) / 1e3
    }

    function wW(WW) {
      return Math.max(0, Math.ceil(cW(WW)))
    }
  },
  9954: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => NW,
      e: () => EW
    });
    let mW = null;
    const EW = function(WW) {
        const iW = {
          cycle: WW,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return mW = iW, () => {
          mW === iW && (mW = null)
        }
      },
      NW = () => {
        var WW;
        return null !== (WW = mW) && void 0 !== WW && WW.canCycle() ? mW.cycle : null
      }
  },
  39775: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => PW
    });
    const mW = 4,
      EW = 12e3,
      NW = 1e3;
    class PW {
      constructor() {
        let {
          limit: WW = mW,
          windowMs: iW = EW,
          spacingMs: OW = NW,
          now: PW = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = WW, this.windowMs = iW, this.spacingMs = OW, this.now = PW
      }
      isPacing() {
        return !this.canSendPriority() || this.isPriorityWaiting()
      }
      canSendPriority() {
        return this.prune(), this.sent.length < this.limit && this.now() - this.lastSentAt >= this.spacingMs
      }
      tryStart() {
        for (const WW of this.priority) WW.flush();
        return !this.isPacing() && (this.start(), !0)
      }
      start() {
        this.prune();
        const WW = this.now();
        this.sent.push(WW), this.lastSentAt = WW, this.schedule(), this.notify()
      }
      addPriority(WW) {
        return this.priority.add(WW), () => {
          this.priority.delete(WW)
        }
      }
      subscribe(WW) {
        return this.listeners.add(WW), () => {
          this.listeners.delete(WW)
        }
      }
      dispose() {
        this.clearTimer(), this.sent = [], this.listeners.clear(), this.priority.clear()
      }
      isPriorityWaiting() {
        for (const WW of this.priority)
          if (WW.waiting()) return !0;
        return !1
      }
      prune() {
        const WW = this.now() - this.windowMs;
        for (; this.sent.length > 0 && this.sent[0] <= WW;) this.sent.shift()
      }
      schedule() {
        this.clearTimer();
        const WW = this.now(),
          iW = this.lastSentAt + this.spacingMs,
          OW = Math.min(iW > WW ? iW : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        OW !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, OW - WW)))
      }
      notify() {
        for (const WW of this.listeners) WW()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  37783: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => cW,
      g: () => tW,
      k: () => PW,
      o: () => ZW,
      r: () => LW
    });
    var mW = OW(27),
      EW = OW(1351);
    let NW = null;

    function PW() {
      return (0, EW.f)() ? null : NW
    }

    function LW(WW) {
      return NW = WW, () => {
        NW === WW && (NW = null)
      }
    }
    const cW = "clientGameHeldItemLabelChanged";
    let wW = null;

    function tW() {
      return (0, EW.f)() ? null : wW
    }

    function ZW(WW) {
      return wW = WW, mW.l.iZ(cW), () => {
        wW === WW && (wW = null, mW.l.iZ(cW))
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);