export const id = 29;
export const ids = [29];
export const modules = {
  38243: (dd, Od, md) => {
    md.d(Od, {
      e: () => yd,
      h: () => bd,
      i: () => od,
      k: () => td
    });
    var Wd = md(35535),
      Fd = md(3428),
      Rd = md(3432),
      Xd = md(9850),
      Kd = md(1566),
      hd = md(66),
      vd = md(86),
      Qd = md(1341);

    function td() {
      var dd;
      return (0, Kd.i)(Fd.d, (0, Fd.n)()), (0, Qd.jsx)(Qd.Fragment, {
        children: null === (dd = (0, Fd.n)()) || void 0 === dd ? void 0 : dd.content
      })
    }

    function od(dd) {
      var Od;
      let {
        show: md
      } = dd;
      (0, Kd.i)(Fd.d, (0, Fd.n)());
      const vd = null === (Od = (0, Fd.n)()) || void 0 === Od ? void 0 : Od.menu;
      return (0, hd.useEffect)((() => {
        var dd;
        md || (null === vd || void 0 === vd || null === (dd = vd.onClose) || void 0 === dd || dd.call(vd), (0, Rd.q)())
      }), [md, vd]), (0, hd.useEffect)((() => md ? (0, Xd.d)(Rd.y, Rd.h) : void 0), [md]), (0, Qd.jsx)(Wd.b, {
        showing: md,
        globallyUniqueKey: "clientGameMenu",
        children: null === vd || void 0 === vd ? void 0 : vd.content
      })
    }
    const Nd = new Map,
      qd = new Set;

    function Hd(dd, Od) {
      Od ? Nd.set(dd, Od) : Nd.delete(dd);
      for (const md of qd) md()
    }

    function yd(dd) {
      let {
        placement: Od = "bottom"
      } = dd;
      const md = (0, hd.useRef)(null);
      return (0, hd.useLayoutEffect)((() => {
        const dd = md.current;
        return Hd(Od, dd), () => {
          Nd.get(Od) === dd && Hd(Od, null)
        }
      }), [Od]), (0, Qd.jsx)("div", {
        ref: md,
        id: `clientGameHud-${Od}`,
        style: {
          display: "contents"
        }
      })
    }

    function bd(dd) {
      let {
        children: Od,
        placement: md = "bottom"
      } = dd;
      const [Wd, Fd] = (0, hd.useState)((() => {
        var dd;
        return null !== (dd = Nd.get(md)) && void 0 !== dd ? dd : null
      }));
      return (0, hd.useEffect)((() => {
        const dd = () => {
          var dd;
          Fd(null !== (dd = Nd.get(md)) && void 0 !== dd ? dd : null)
        };
        return qd.add(dd), dd(), () => {
          qd.delete(dd)
        }
      }), [md]), Wd ? (0, vd.createPortal)(Od, Wd) : null
    }
  },
  5691: (dd, Od, md) => {
    md.d(Od, {
      e: () => od
    });
    var Wd = md(1155),
      Fd = md.n(Wd),
      Rd = md(1443),
      Xd = md(1436),
      Kd = md(4734),
      hd = md(151),
      vd = md(4776),
      Qd = md(4767),
      td = md(1341);

    function od(dd) {
      let {
        game: Od
      } = dd;
      const md = (0, hd.is99NightsCrazyGamesBundle)() ? "large" : "small",
        Wd = (0, vd.i)(Od, md),
        od = (0, Kd.g)(Wd),
        Nd = void 0 !== od.blurhash;
      return (0, td.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [od.isLoading && !Nd && (0, td.jsx)(Xd.c, {
          loaderType: "Secondary"
        }), !od.failed && (null !== od.src || Nd) && (0, td.jsx)("div", {
          className: Fd()("SchematicImage", Qd.j, {
            SchematicImageFadeIn: od.fadeIn && !Nd
          }),
          style: (0, Qd.g)(od),
          children: (0, td.jsx)(Qd.e, {
            image: od
          })
        }), od.failed && (0, td.jsx)("div", {
          className: "SchematicImageError",
          children: (0, td.jsx)(Rd.c, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  35535: (dd, Od, md) => {
    md.d(Od, {
      b: () => Rd
    });
    var Wd = md(5197),
      Fd = md(5206);

    function Rd(dd) {
      let {
        children: Od,
        showing: md,
        globallyUniqueKey: Rd,
        alwaysMountChildren: Xd = !1,
        doGameplayStartStopOnShow: Kd = !0,
        keepsMovement: hd = !1
      } = dd;
      return (0, Fd.e)(!0, md, Rd, hd), (0, Wd.b)(Kd, md), md || Xd ? Od : null
    }
  },
  5693: (dd, Od, md) => {
    md.d(Od, {
      e: () => Kd
    });
    var Wd = md(66),
      Fd = md(1155),
      Rd = md.n(Fd),
      Xd = md(1341);

    function Kd(dd) {
      let {
        columns: Od,
        rows: md,
        getRowKey: Fd,
        renderRow: Kd,
        className: hd
      } = dd;
      return (0, Xd.jsxs)("table", {
        className: Rd()("Table", hd),
        children: [(0, Xd.jsx)("thead", {
          children: (0, Xd.jsx)("tr", {
            children: Od.map((dd => (0, Xd.jsx)("th", {
              children: dd.header
            }, dd.key)))
          })
        }), (0, Xd.jsx)("tbody", {
          children: md.map(((dd, Od) => (0, Xd.jsx)(Wd.Fragment, {
            children: Kd(dd, Od)
          }, Fd(dd))))
        })]
      })
    }
  },
  38302: (dd, Od, md) => {
    md.d(Od, {
      d: () => Kd,
      e: () => hd,
      h: () => vd,
      j: () => Qd,
      l: () => qd
    });
    var Wd = md(66),
      Fd = md(4308),
      Rd = md(3510),
      Xd = md(32);
    const Kd = 8,
      hd = "InGameHeaderContainer",
      vd = "TopRightElements";

    function Qd(dd) {
      const [Od] = (0, Fd.b)(), [md, Rd] = (0, Wd.useState)(!1);
      return (0, Wd.useLayoutEffect)((() => {
        if (!dd) return;
        const Od = document.querySelector(`.${hd}`),
          md = document.querySelector(`.${vd}`),
          Wd = () => {
            const Wd = dd.getBoundingClientRect(),
              Fd = Od ? Od.getBoundingClientRect().right : 0,
              Xd = md ? md.getBoundingClientRect().left : window.innerWidth,
              hd = Wd.left < Fd + Kd,
              vd = Wd.right > Xd - Kd;
            Rd(hd || vd)
          };
        Wd();
        const Fd = new ResizeObserver(Wd);
        return Fd.observe(dd), Od && Fd.observe(Od), md && Fd.observe(md), () => {
          Fd.disconnect()
        }
      }), [dd, Od]), md
    }
    const td = `.InGameUi .${hd}`,
      od = [td, ".InGameUi .TopRightIcons", ".InGameUi .TopRightElementsRight"],
      Nd = 1e3;

    function qd(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : dd,
        md = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const [Fd, hd] = (0, Wd.useState)(null);
      return (0, Wd.useLayoutEffect)((() => {
        if (!dd) return;
        const Wd = new ResizeObserver((() => {
          vd()
        }));
        Wd.observe(dd), Od && Od !== dd && Wd.observe(Od);
        let Fd = [];

        function vd() {
          var Rd, Xd, vd;
          const Qd = dd.getBoundingClientRect(),
            Nd = function() {
              const dd = od.map((dd => document.querySelector(dd))).filter((dd => null !== dd));
              for (const Od of dd) Fd.includes(Od) || Wd.observe(Od);
              for (const Od of Fd) dd.includes(Od) || Wd.unobserve(Od);
              return Fd = dd, dd
            }(),
            qd = Nd.filter((dd => {
              const Od = dd.getBoundingClientRect();
              return Od.width > 0 && Od.height > 0 && Qd.left < Od.right + Kd && Qd.right > Od.left - Kd
            }));
          if (0 === qd.length && !md) return void hd(null);
          const Hd = Nd.find((dd => dd.matches(td))),
            yd = Math.max(null !== (Rd = null === Hd || void 0 === Hd ? void 0 : Hd.getBoundingClientRect().bottom) && void 0 !== Rd ? Rd : 0, ...qd.map((dd => dd.getBoundingClientRect().bottom))),
            bd = null !== (Xd = null === Od || void 0 === Od || null === (vd = Od.offsetParent) || void 0 === vd ? void 0 : vd.getBoundingClientRect().top) && void 0 !== Xd ? Xd : 0;
          hd(Math.ceil(yd + Kd / 2) - Math.round(bd))
        }
        const Qd = setInterval(vd, Nd);
        vd(), window.addEventListener("resize", vd);
        const qd = (0, Xd.l)(Rd.c, vd);
        return () => {
          Wd.disconnect(), clearInterval(Qd), window.removeEventListener("resize", vd), qd()
        }
      }), [dd, Od, md]), Fd
    }
  },
  38259: (dd, Od, md) => {
    md.d(Od, {
      d: () => Xd,
      g: () => Fd,
      h: () => Rd
    });
    var Wd = md(66);

    function Fd(dd) {
      return Kd(dd, hd)
    }

    function Rd(dd) {
      return Kd(dd, vd)
    }

    function Xd(dd) {
      return `${Math.floor(dd/60)}:${String(dd%60).padStart(2,"0")}`
    }

    function Kd(dd, Od) {
      const [, md] = (0, Wd.useState)(null);
      return (0, Wd.useEffect)((() => {
        if (0 === dd) return;
        const Wd = window.setInterval((() => {
          const Wd = Od(dd);
          md((Od => (null === Od || void 0 === Od ? void 0 : Od.endsAt) === dd && Od.value === Wd ? Od : {
            endsAt: dd,
            value: Wd
          }))
        }), 250);
        return () => {
          window.clearInterval(Wd)
        }
      }), [dd, Od]), Od(dd)
    }

    function hd(dd) {
      return (dd - performance.now()) / 1e3
    }

    function vd(dd) {
      return Math.max(0, Math.ceil(hd(dd)))
    }
  },
  9850: (dd, Od, md) => {
    md.d(Od, {
      b: () => Rd,
      d: () => Fd
    });
    let Wd = null;
    const Fd = function(dd) {
        const Od = {
          cycle: dd,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Wd = Od, () => {
          Wd === Od && (Wd = null)
        }
      },
      Rd = () => {
        var dd;
        return null !== (dd = Wd) && void 0 !== dd && dd.canCycle() ? Wd.cycle : null
      }
  },
  40123: (dd, Od, md) => {
    md.d(Od, {
      d: () => Xd
    });
    const Wd = 4,
      Fd = 12e3,
      Rd = 1e3;
    class Xd {
      constructor() {
        let {
          limit: dd = Wd,
          windowMs: Od = Fd,
          spacingMs: md = Rd,
          now: Xd = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = dd, this.windowMs = Od, this.spacingMs = md, this.now = Xd
      }
      isPacing() {
        return !this.canSendPriority() || this.isPriorityWaiting()
      }
      canSendPriority() {
        return this.prune(), this.sent.length < this.limit && this.now() - this.lastSentAt >= this.spacingMs
      }
      tryStart() {
        for (const dd of this.priority) dd.flush();
        return !this.isPacing() && (this.start(), !0)
      }
      start() {
        this.prune();
        const dd = this.now();
        this.sent.push(dd), this.lastSentAt = dd, this.schedule(), this.notify()
      }
      addPriority(dd) {
        return this.priority.add(dd), () => {
          this.priority.delete(dd)
        }
      }
      subscribe(dd) {
        return this.listeners.add(dd), () => {
          this.listeners.delete(dd)
        }
      }
      dispose() {
        this.clearTimer(), this.sent = [], this.listeners.clear(), this.priority.clear()
      }
      isPriorityWaiting() {
        for (const dd of this.priority)
          if (dd.waiting()) return !0;
        return !1
      }
      prune() {
        const dd = this.now() - this.windowMs;
        for (; this.sent.length > 0 && this.sent[0] <= dd;) this.sent.shift()
      }
      schedule() {
        this.clearTimer();
        const dd = this.now(),
          Od = this.lastSentAt + this.spacingMs,
          md = Math.min(Od > dd ? Od : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        md !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, md - dd)))
      }
      notify() {
        for (const dd of this.listeners) dd()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  38172: (dd, Od, md) => {
    md.d(Od, {
      d: () => hd,
      g: () => Qd,
      i: () => Xd,
      j: () => td,
      l: () => Kd
    });
    var Wd = md(32),
      Fd = md(1415);
    let Rd = null;

    function Xd() {
      return (0, Fd.c)() ? null : Rd
    }

    function Kd(dd) {
      return Rd = dd, () => {
        Rd === dd && (Rd = null)
      }
    }
    const hd = "clientGameHeldItemLabelChanged";
    let vd = null;

    function Qd() {
      return (0, Fd.c)() ? null : vd
    }

    function td(dd) {
      return vd = dd, Wd.j.lQ(hd), () => {
        vd === dd && (vd = null, Wd.j.lQ(hd))
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);