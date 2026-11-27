export const id = 29;
export const ids = [29];
export const modules = {
  38154: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => hr,
      d: () => zr,
      h: () => mr,
      l: () => xr
    });
    var Zr = Qr(35448),
      Wr = Qr(3425),
      ar = Qr(3429),
      jr = Qr(9818),
      Ir = Qr(1573),
      fr = Qr(72),
      Er = Qr(92),
      pr = Qr(1338);

    function xr() {
      var rr;
      return (0, Ir.g)(Wr.e, (0, Wr.w)()), (0, pr.jsx)(pr.Fragment, {
        children: null === (rr = (0, Wr.w)()) || void 0 === rr ? void 0 : rr.content
      })
    }

    function mr(rr) {
      var Sr;
      let {
        show: Qr
      } = rr;
      (0, Ir.g)(Wr.e, (0, Wr.w)());
      const Er = null === (Sr = (0, Wr.w)()) || void 0 === Sr ? void 0 : Sr.menu;
      return (0, fr.useEffect)((() => {
        var rr;
        Qr || (null === Er || void 0 === Er || null === (rr = Er.onClose) || void 0 === rr || rr.call(Er), (0, ar.o)())
      }), [Qr, Er]), (0, fr.useEffect)((() => Qr ? (0, jr.f)(ar.v, ar.e) : void 0), [Qr]), (0, pr.jsx)(Zr.c, {
        showing: Qr,
        globallyUniqueKey: "clientGameMenu",
        children: null === Er || void 0 === Er ? void 0 : Er.content
      })
    }
    const Nr = new Map,
      Ur = new Set;

    function tr(rr, Sr) {
      Sr ? Nr.set(rr, Sr) : Nr.delete(rr);
      for (const Qr of Ur) Qr()
    }

    function hr(rr) {
      let {
        placement: Sr = "bottom"
      } = rr;
      const Qr = (0, fr.useRef)(null);
      return (0, fr.useLayoutEffect)((() => {
        const rr = Qr.current;
        return tr(Sr, rr), () => {
          Nr.get(Sr) === rr && tr(Sr, null)
        }
      }), [Sr]), (0, pr.jsx)("div", {
        ref: Qr,
        id: `clientGameHud-${Sr}`,
        style: {
          display: "contents"
        }
      })
    }

    function zr(rr) {
      let {
        children: Sr,
        placement: Qr = "bottom"
      } = rr;
      const [Zr, Wr] = (0, fr.useState)((() => {
        var rr;
        return null !== (rr = Nr.get(Qr)) && void 0 !== rr ? rr : null
      }));
      return (0, fr.useEffect)((() => {
        const rr = () => {
          var rr;
          Wr(null !== (rr = Nr.get(Qr)) && void 0 !== rr ? rr : null)
        };
        return Ur.add(rr), rr(), () => {
          Ur.delete(rr)
        }
      }), [Qr]), Zr ? (0, Er.createPortal)(Sr, Zr) : null
    }
  },
  5731: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => mr
    });
    var Zr = Qr(1155),
      Wr = Qr.n(Zr),
      ar = Qr(1448),
      jr = Qr(1444),
      Ir = Qr(4759),
      fr = Qr(139),
      Er = Qr(4791),
      pr = Qr(4777),
      xr = Qr(1338);

    function mr(rr) {
      let {
        game: Sr
      } = rr;
      const Qr = (0, fr.is99NightsCrazyGamesBundle)() ? "large" : "small",
        Zr = (0, Er.g)(Sr, Qr),
        mr = (0, Ir.f)(Zr),
        Nr = void 0 !== mr.blurhash;
      return (0, xr.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [mr.isLoading && !Nr && (0, xr.jsx)(jr.c, {
          loaderType: "Secondary"
        }), !mr.failed && (null !== mr.src || Nr) && (0, xr.jsx)("div", {
          className: Wr()("SchematicImage", pr.j, {
            SchematicImageFadeIn: mr.fadeIn && !Nr
          }),
          style: (0, pr.g)(mr),
          children: (0, xr.jsx)(pr.c, {
            image: mr
          })
        }), mr.failed && (0, xr.jsx)("div", {
          className: "SchematicImageError",
          children: (0, xr.jsx)(ar.c, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  35448: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => ar
    });
    var Zr = Qr(5301),
      Wr = Qr(5308);

    function ar(rr) {
      let {
        children: Sr,
        showing: Qr,
        globallyUniqueKey: ar,
        alwaysMountChildren: jr = !1,
        doGameplayStartStopOnShow: Ir = !0,
        keepsMovement: fr = !1
      } = rr;
      return (0, Wr.b)(!0, Qr, ar, fr), (0, Zr.e)(Ir, Qr), Qr || jr ? Sr : null
    }
  },
  5736: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Ir
    });
    var Zr = Qr(72),
      Wr = Qr(1155),
      ar = Qr.n(Wr),
      jr = Qr(1338);

    function Ir(rr) {
      let {
        columns: Sr,
        rows: Qr,
        getRowKey: Wr,
        renderRow: Ir,
        className: fr
      } = rr;
      return (0, jr.jsxs)("table", {
        className: ar()("Table", fr),
        children: [(0, jr.jsx)("thead", {
          children: (0, jr.jsx)("tr", {
            children: Sr.map((rr => (0, jr.jsx)("th", {
              children: rr.header
            }, rr.key)))
          })
        }), (0, jr.jsx)("tbody", {
          children: Qr.map(((rr, Sr) => (0, jr.jsx)(Zr.Fragment, {
            children: Ir(rr, Sr)
          }, Wr(rr))))
        })]
      })
    }
  },
  38214: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Ir,
      d: () => fr,
      e: () => Er,
      h: () => pr,
      l: () => Ur
    });
    var Zr = Qr(72),
      Wr = Qr(4302),
      ar = Qr(3515),
      jr = Qr(34);
    const Ir = 8,
      fr = "InGameHeaderContainer",
      Er = "TopRightElements";

    function pr(rr) {
      const [Sr] = (0, Wr.e)(), [Qr, ar] = (0, Zr.useState)(!1);
      return (0, Zr.useLayoutEffect)((() => {
        if (!rr) return;
        const Sr = document.querySelector(`.${fr}`),
          Qr = document.querySelector(`.${Er}`),
          Zr = () => {
            const Zr = rr.getBoundingClientRect(),
              Wr = Sr ? Sr.getBoundingClientRect().right : 0,
              jr = Qr ? Qr.getBoundingClientRect().left : window.innerWidth,
              fr = Zr.left < Wr + Ir,
              Er = Zr.right > jr - Ir;
            ar(fr || Er)
          };
        Zr();
        const Wr = new ResizeObserver(Zr);
        return Wr.observe(rr), Sr && Wr.observe(Sr), Qr && Wr.observe(Qr), () => {
          Wr.disconnect()
        }
      }), [rr, Sr]), Qr
    }
    const xr = `.InGameUi .${fr}`,
      mr = [xr, ".InGameUi .TopRightIcons", ".InGameUi .TopRightElementsRight"],
      Nr = 1e3;

    function Ur(rr) {
      let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : rr,
        Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const [Wr, fr] = (0, Zr.useState)(null);
      return (0, Zr.useLayoutEffect)((() => {
        if (!rr) return;
        const Zr = new ResizeObserver((() => {
          Er()
        }));
        Zr.observe(rr), Sr && Sr !== rr && Zr.observe(Sr);
        let Wr = [];

        function Er() {
          var ar, jr, Er;
          const pr = rr.getBoundingClientRect(),
            Nr = function() {
              const rr = mr.map((rr => document.querySelector(rr))).filter((rr => null !== rr));
              for (const Sr of rr) Wr.includes(Sr) || Zr.observe(Sr);
              for (const Sr of Wr) rr.includes(Sr) || Zr.unobserve(Sr);
              return Wr = rr, rr
            }(),
            Ur = Nr.filter((rr => {
              const Sr = rr.getBoundingClientRect();
              return Sr.width > 0 && Sr.height > 0 && pr.left < Sr.right + Ir && pr.right > Sr.left - Ir
            }));
          if (0 === Ur.length && !Qr) return void fr(null);
          const tr = Nr.find((rr => rr.matches(xr))),
            hr = Math.max(null !== (ar = null === tr || void 0 === tr ? void 0 : tr.getBoundingClientRect().bottom) && void 0 !== ar ? ar : 0, ...Ur.map((rr => rr.getBoundingClientRect().bottom))),
            zr = null !== (jr = null === Sr || void 0 === Sr || null === (Er = Sr.offsetParent) || void 0 === Er ? void 0 : Er.getBoundingClientRect().top) && void 0 !== jr ? jr : 0;
          fr(Math.ceil(hr + Ir / 2) - Math.round(zr))
        }
        const pr = setInterval(Er, Nr);
        Er(), window.addEventListener("resize", Er);
        const Ur = (0, jr.j)(ar.g, Er);
        return () => {
          Zr.disconnect(), clearInterval(pr), window.removeEventListener("resize", Er), Ur()
        }
      }), [rr, Sr, Qr]), Wr
    }
  },
  38175: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => jr,
      f: () => Wr,
      h: () => ar
    });
    var Zr = Qr(72);

    function Wr(rr) {
      return Ir(rr, fr)
    }

    function ar(rr) {
      return Ir(rr, Er)
    }

    function jr(rr) {
      return `${Math.floor(rr/60)}:${String(rr%60).padStart(2,"0")}`
    }

    function Ir(rr, Sr) {
      const [, Qr] = (0, Zr.useState)(null);
      return (0, Zr.useEffect)((() => {
        if (0 === rr) return;
        const Zr = window.setInterval((() => {
          const Zr = Sr(rr);
          Qr((Sr => (null === Sr || void 0 === Sr ? void 0 : Sr.endsAt) === rr && Sr.value === Zr ? Sr : {
            endsAt: rr,
            value: Zr
          }))
        }), 250);
        return () => {
          window.clearInterval(Zr)
        }
      }), [rr, Sr]), Sr(rr)
    }

    function fr(rr) {
      return (rr - performance.now()) / 1e3
    }

    function Er(rr) {
      return Math.max(0, Math.ceil(fr(rr)))
    }
  },
  9818: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => ar,
      f: () => Wr
    });
    let Zr = null;
    const Wr = function(rr) {
        const Sr = {
          cycle: rr,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Zr = Sr, () => {
          Zr === Sr && (Zr = null)
        }
      },
      ar = () => {
        var rr;
        return null !== (rr = Zr) && void 0 !== rr && rr.canCycle() ? Zr.cycle : null
      }
  },
  40092: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => jr
    });
    const Zr = 4,
      Wr = 12e3,
      ar = 1e3;
    class jr {
      constructor() {
        let {
          limit: rr = Zr,
          windowMs: Sr = Wr,
          spacingMs: Qr = ar,
          now: jr = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = rr, this.windowMs = Sr, this.spacingMs = Qr, this.now = jr
      }
      isPacing() {
        return !this.canSendPriority() || this.isPriorityWaiting()
      }
      canSendPriority() {
        return this.prune(), this.sent.length < this.limit && this.now() - this.lastSentAt >= this.spacingMs
      }
      tryStart() {
        for (const rr of this.priority) rr.flush();
        return !this.isPacing() && (this.start(), !0)
      }
      start() {
        this.prune();
        const rr = this.now();
        this.sent.push(rr), this.lastSentAt = rr, this.schedule(), this.notify()
      }
      addPriority(rr) {
        return this.priority.add(rr), () => {
          this.priority.delete(rr)
        }
      }
      subscribe(rr) {
        return this.listeners.add(rr), () => {
          this.listeners.delete(rr)
        }
      }
      dispose() {
        this.clearTimer(), this.sent = [], this.listeners.clear(), this.priority.clear()
      }
      isPriorityWaiting() {
        for (const rr of this.priority)
          if (rr.waiting()) return !0;
        return !1
      }
      prune() {
        const rr = this.now() - this.windowMs;
        for (; this.sent.length > 0 && this.sent[0] <= rr;) this.sent.shift()
      }
      schedule() {
        this.clearTimer();
        const rr = this.now(),
          Sr = this.lastSentAt + this.spacingMs,
          Qr = Math.min(Sr > rr ? Sr : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        Qr !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, Qr - rr)))
      }
      notify() {
        for (const rr of this.listeners) rr()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  38075: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => fr,
      i: () => pr,
      m: () => jr,
      q: () => xr,
      t: () => Ir
    });
    var Zr = Qr(34),
      Wr = Qr(1422);
    let ar = null;

    function jr() {
      return (0, Wr.e)() ? null : ar
    }

    function Ir(rr) {
      return ar = rr, () => {
        ar === rr && (ar = null)
      }
    }
    const fr = "clientGameHeldItemLabelChanged";
    let Er = null;

    function pr() {
      return (0, Wr.e)() ? null : Er
    }

    function xr(rr) {
      return Er = rr, Zr.i.Jp(fr), () => {
        Er === rr && (Er = null, Zr.i.Jp(fr))
      }
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);