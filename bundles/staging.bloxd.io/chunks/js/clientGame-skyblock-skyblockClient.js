export const id = 25;
export const ids = [25];
export const modules = {
  36772: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Qd,
      g: () => Ld,
      h: () => ld,
      j: () => od
    });
    var pd = kd(9234),
      Nd = kd(36779),
      Wd = kd(36783),
      Pd = kd(8620),
      Zd = kd(1459),
      gd = kd(56),
      Cd = kd(72),
      Kd = kd(1103);

    function od() {
      var dd;
      return (0, Zd.i)(Nd.e, (0, Nd.o)()), (0, Kd.jsx)(Kd.Fragment, {
        children: null === (dd = (0, Nd.o)()) || void 0 === dd ? void 0 : dd.content
      })
    }

    function ld(dd) {
      var Jd;
      let {
        show: kd
      } = dd;
      (0, Zd.i)(Nd.e, (0, Nd.o)());
      const Cd = null === (Jd = (0, Nd.o)()) || void 0 === Jd ? void 0 : Jd.menu;
      return (0, gd.useEffect)((() => {
        var dd;
        kd || (null === Cd || void 0 === Cd || null === (dd = Cd.onClose) || void 0 === dd || dd.call(Cd), (0, Wd.s)())
      }), [kd, Cd]), (0, gd.useEffect)((() => kd ? (0, Pd.g)(Wd.B, Wd.h) : void 0), [kd]), (0, Kd.jsx)(pd.b, {
        showing: kd,
        globallyUniqueKey: "clientGameMenu",
        children: null === Cd || void 0 === Cd ? void 0 : Cd.content
      })
    }

    function Qd(dd) {
      let {
        placement: Jd = "bottom"
      } = dd;
      return (0, Kd.jsx)("div", {
        id: `clientGameHud-${Jd}`,
        style: {
          display: "contents"
        }
      })
    }

    function Ld(dd) {
      let {
        children: Jd,
        placement: kd = "bottom"
      } = dd;
      const [pd, Nd] = (0, gd.useState)(null);
      return (0, gd.useEffect)((() => {
        Nd(document.getElementById(`clientGameHud-${kd}`))
      }), [kd]), pd ? (0, Cd.createPortal)(Jd, pd) : null
    }
  },
  4722: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => ed,
      d: () => Rd
    });
    var pd = kd(1044),
      Nd = kd.n(pd),
      Wd = kd(56),
      Pd = kd(1211),
      Zd = kd(4726),
      gd = kd(1904),
      Cd = kd(2357),
      Kd = kd(4729),
      od = kd(1103);
    const ld = new WeakMap;
    let Qd = 0;

    function Ld(dd) {
      let Jd = ld.get(dd);
      return void 0 === Jd && (Jd = Qd++, ld.set(dd, Jd)), Jd
    }

    function Od(dd) {
      let {
        piece: Jd
      } = dd;
      return "space" === Jd.kind ? (0, od.jsx)(od.Fragment, {
        children: Jd.text
      }) : (0, od.jsx)("span", {
        className: "DialogueWord",
        style: {
          "--word-delay": `${Jd.delayMs}ms`
        },
        children: (0, od.jsx)(Zd.b, {
          text: "icon" === Jd.kind ? `[[${Jd.icon}]]` : Jd.text
        })
      })
    }

    function ed(dd) {
      let {
        display: Jd
      } = dd;
      const {
        selectedLanguage: kd
      } = (0, Pd.B)(), pd = (0, Wd.useMemo)((() => (0, Kd.c)((0, Kd.d)(Jd).plan.pieces)), [Jd, kd.code]);
      return (0, od.jsxs)("div", {
        className: Nd()("Dialogue", {
          DialogueAnimateIn: !1 !== Jd.animateIn
        }),
        children: [Jd.speakerName && (0, od.jsx)(gd.c, {
          text: Jd.speakerName,
          className: "DialogueSpeaker"
        }), (0, od.jsx)("p", {
          className: "DialogueLine",
          children: pd.map(((dd, Jd) => 1 === dd.length && "space" === dd[0].kind ? dd[0].text : (0, od.jsx)("span", {
            className: "DialogueGlue",
            children: dd.map(((dd, Jd) => (0, od.jsx)(Od, {
              piece: dd
            }, Jd)))
          }, Jd)))
        })]
      })
    }
    const Rd = (0, Wd.memo)((function() {
      const dd = (0, Cd.j)("dialogue");
      return (0, od.jsx)("div", {
        className: "DialogueAnchor",
        "data-camera-keeper": "",
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: dd && (0, od.jsx)(ed, {
          display: dd
        }, Ld(dd))
      })
    }))
  },
  4726: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Zd
    });
    var pd = kd(56),
      Nd = kd(300),
      Wd = kd(1924),
      Pd = kd(1103);

    function Zd(dd) {
      let {
        text: Jd
      } = dd;
      const kd = [];
      let Zd = "";
      return (0, Nd.Wb)(Jd).forEach(((dd, Jd) => {
        if ("string" === typeof dd || !(0, Wd.f)(dd.icon)) return void(Zd += "string" === typeof dd ? dd : dd.icon);
        const Nd = Math.max(0, Zd.trimEnd().search(/\S{1,12}$/));
        kd.push((0, Pd.jsxs)(pd.Fragment, {
          children: [Zd.slice(0, Nd), (0, Pd.jsxs)("span", {
            className: "InlineIconTextGlue",
            children: [Zd.slice(Nd), (0, Pd.jsx)("span", {
              className: "InlineIconTextIcon",
              role: "img",
              "aria-label": dd.icon,
              children: (0, Pd.jsx)(Wd.d, {
                itemName: dd.icon,
                amount: 0
              })
            })]
          })]
        }, Jd)), Zd = ""
      })), kd.push(Zd), (0, Pd.jsx)(Pd.Fragment, {
        children: kd
      })
    }
  },
  9234: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Wd
    });
    var pd = kd(4393),
      Nd = kd(4397);

    function Wd(dd) {
      let {
        children: Jd,
        showing: kd,
        globallyUniqueKey: Wd,
        alwaysMountChildren: Pd = !1,
        doGameplayStartStopOnShow: Zd = !0,
        keepsMovement: gd = !1
      } = dd;
      return (0, Nd.d)(!0, kd, Wd, gd), (0, pd.c)(Zd, kd), kd || Pd ? Jd : null
    }
  },
  4729: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Xd,
      d: () => jd
    });
    var pd = kd(4733),
      Nd = kd(300);
    const Wd = 120,
      Pd = 260,
      Zd = 1.15,
      gd = 1.2,
      Cd = 2,
      Kd = 1.08,
      od = .8,
      ld = .95,
      Qd = 8,
      Ld = "[\"')\\]\u300d\u300f\uff09]*",
      Od = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${Ld}$`),
      ed = new RegExp(`[?\uff1f]${Ld}$`),
      Rd = new RegExp(`[!\uff01]${Ld}$`),
      Id = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      Gd = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      vd = new RegExp(`[${Gd}]`),
      xd = new RegExp(`[${Gd}]|[^${Gd}]+`, "g"),
      qd = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function Bd(dd) {
      let Jd = 2166136261;
      for (let kd = 0; kd < dd.length; kd++) Jd ^= dd.charCodeAt(kd), Jd = Math.imul(Jd, 16777619);
      return (Jd >>> 0) / 4294967295 * 2 - 1
    }

    function sd(dd) {
      var Jd;
      if (vd.test(dd)) return 1;
      const kd = dd.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        pd = kd.replace(/[^0-9]/g, "");
      if (pd.length > 0 && !/\p{L}/u.test(kd)) return Math.min(pd.length, 4);
      const Nd = null !== (Jd = kd.match(qd)) && void 0 !== Jd ? Jd : [];
      if (0 === Nd.length) {
        var Wd, Pd;
        const dd = null !== (Wd = null === (Pd = kd.match(/\p{L}/gu)) || void 0 === Pd ? void 0 : Pd.length) && void 0 !== Wd ? Wd : 0;
        return 0 === dd ? 0 : Math.min(Math.max(1, Math.round(dd / 2.5)), Qd)
      }
      const Zd = kd.replace(/[^\p{L}]/gu, ""),
        gd = Nd.length > 1 && "e" === Nd.at(-1) && Zd.endsWith("e") && !Zd.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(dd.replace(/[^\p{L}]/gu, ""));
      return Math.min(Nd.length - (gd ? 1 : 0), Qd)
    }

    function ad(dd) {
      return dd.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function Md(dd) {
      const Jd = dd.replace(/[^\p{L}]/gu, "");
      return Jd.length >= 2 && Jd === Jd.toUpperCase() && Jd !== Jd.toLowerCase()
    }

    function Fd(dd, Jd) {
      var kd;
      const Qd = Jd && (0, pd.k)(Jd),
        Ld = null !== (kd = null === Qd || void 0 === Qd ? void 0 : Qd.syllableMs) && void 0 !== kd ? kd : pd.b,
        Gd = function(dd) {
          const Jd = [];
          for (const pd of (0, Nd.Wb)(dd))
            if ("string" === typeof pd)
              for (const dd of pd.split(/(\s+)/)) {
                if ("" === dd) continue;
                if (/^\s+$/.test(dd)) {
                  Jd.push({
                    kind: "space",
                    text: dd
                  });
                  continue
                }
                if (!vd.test(dd)) {
                  Jd.push({
                    kind: "word",
                    text: dd,
                    delayMs: 0
                  });
                  continue
                }
                let pd = !0;
                for (const Nd of null !== (kd = dd.match(xd)) && void 0 !== kd ? kd : []) {
                  var kd;
                  const dd = Jd.at(-1);
                  pd || "word" !== (null === dd || void 0 === dd ? void 0 : dd.kind) || vd.test(Nd) || /[\p{L}\p{N}]/u.test(Nd) ? (pd || Jd.push({
                    kind: "space",
                    text: "\u200b"
                  }), Jd.push({
                    kind: "word",
                    text: Nd,
                    delayMs: 0
                  }), pd = !1) : dd.text += Nd
                }
              } else Jd.push({
                kind: "icon",
                text: pd.icon,
                delayMs: 0
              });
          return Jd
        }(dd),
        qd = [];
      let Fd = [];
      for (const pd of Gd) "space" !== pd.kind && (Fd.push(pd), Od.test(pd.text) && (qd.push(Fd), Fd = []));
      qd.push(Fd);
      const Yd = [];
      let md = 0;
      for (const pd of qd) {
        var bd, Sd;
        const dd = null !== (bd = null === (Sd = pd.at(-1)) || void 0 === Sd ? void 0 : Sd.text) && void 0 !== bd ? bd : "",
          Jd = ed.test(dd),
          kd = Rd.test(dd),
          Nd = pd.map((dd => "word" === dd.kind ? sd(dd.text) : 1)),
          Gd = Nd.findLastIndex((dd => dd > 0));
        for (const [ed, Rd] of pd.entries()) {
          const dd = "word" === Rd.kind,
            pd = Nd[ed];
          Rd.delayMs = md;
          for (let Nd = 0; Qd && Nd < pd; Nd++) {
            const {
              intonation: Wd
            } = Qd;
            let Pd = Gd > 0 ? -Wd.declineSemitones * (ed / Gd) : 0;
            Pd += Bd(`${ad(Rd.text)}|${Nd}`) * Wd.variationSemitones;
            const Od = Math.min(1, Wd.variationSemitones);
            let Id = Qd.glideSemitones,
              vd = 1;
            kd && (Pd += Wd.exclaimLiftSemitones, vd *= Zd), Jd && ed === Gd && (Pd += Wd.questionRiseSemitones * (pd > 1 ? .5 + .5 * Nd / (pd - 1) : 1), Nd === pd - 1 && (Id = Math.abs(Id) + Wd.questionRiseSemitones / 2)), dd && Md(Rd.text) && (Pd += Cd * Od, vd *= gd), pd > 1 && 0 === Nd && (Pd += od * Od, vd *= Kd), Yd.push({
              atMs: md + Nd * Ld,
              semitones: Pd,
              glideSemitones: Id,
              durationMs: Nd < pd - 1 ? Math.min(Qd.durationMs, Ld * ld) : Qd.durationMs,
              level: vd
            })
          }
          md += pd * Ld + (Od.test(Rd.text) ? Pd : Id.test(Rd.text) ? Wd : 0)
        }
      }
      return {
        pieces: Gd.map((dd => "space" === dd.kind ? dd : "icon" === dd.kind ? {
          kind: "icon",
          icon: dd.text,
          delayMs: dd.delayMs
        } : {
          kind: "word",
          text: dd.text,
          delayMs: dd.delayMs
        })),
        blips: Yd
      }
    }
    var Yd = kd(1211),
      md = kd(1273),
      bd = kd(1938);

    function Sd(dd) {
      if ("string" === typeof dd) return dd;
      const Jd = md.c.get().getCurrentLanguageCode();
      return (0, Yd.t)(Jd, dd.translationKey, (0, Yd.r)(dd.params, bd.d.shown))
    }

    function jd(dd) {
      const Jd = void 0 === dd.voice ? null : (0, pd.m)(dd.voice),
        kd = Jd && (0, pd.k)(Jd);
      return {
        plan: Fd(Sd(dd.line), kd),
        synth: kd
      }
    }

    function Xd(dd) {
      const Jd = [];
      let kd = [];
      for (const [Nd, Wd] of dd.entries()) {
        var pd;
        "space" === Wd.kind && (" " !== Wd.text || "icon" !== (null === (pd = dd[Nd + 1]) || void 0 === pd ? void 0 : pd.kind)) ? (kd.length > 0 && Jd.push(kd), Jd.push([Wd]), kd = []) : kd.push(Wd)
      }
      return kd.length > 0 && Jd.push(kd), Jd
    }
  },
  8620: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Wd,
      g: () => Nd
    });
    let pd = null;
    const Nd = function(dd) {
        const Jd = {
          cycle: dd,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return pd = Jd, () => {
          pd === Jd && (pd = null)
        }
      },
      Wd = () => {
        var dd;
        return null !== (dd = pd) && void 0 !== dd && dd.canCycle() ? pd.cycle : null
      }
  },
  36783: (dd, Jd, kd) => {
    kd.d(Jd, {
      B: () => Ld,
      D: () => Id,
      e: () => Wd,
      h: () => Od,
      i: () => ed,
      m: () => Zd,
      o: () => ld,
      s: () => Rd,
      w: () => od,
      x: () => Gd
    });
    var pd = kd(22),
      Nd = kd(29);
    const Wd = "clientGameInventoryButtonsChanged",
      Pd = new Map;

    function Zd() {
      return [...Pd.values()].sort(((dd, Jd) => {
        var kd, pd;
        return (null !== (kd = dd.order) && void 0 !== kd ? kd : 0) - (null !== (pd = Jd.order) && void 0 !== pd ? pd : 0)
      }))
    }
    let gd = null;

    function Cd(dd) {
      gd = dd
    }
    let Kd = !1;

    function od(dd) {
      Kd = !0;
      try {
        dd.onClick()
      } finally {
        Kd = !1
      }
      dd.panel && "clientGame" === pd.d.get("openInGameMenuName") && Cd(dd.id)
    }

    function ld() {
      return Kd
    }

    function Qd() {
      return Zd().filter((dd => dd.panel && !dd.disabled))
    }

    function Ld(dd) {
      const Jd = Qd(),
        kd = Jd.findIndex((dd => dd.id === gd));
      return !(kd < 0 || Jd.length < 2) && (od(Jd[(kd + dd + Jd.length) % Jd.length]), !0)
    }

    function Od() {
      return null !== gd && Qd().length > 1
    }

    function ed() {
      Cd(null)
    }

    function Rd() {
      "inventory" !== pd.d.get("openInGameMenuName") && Cd(null)
    }

    function Id() {
      const dd = gd;
      return Cd(null), dd
    }

    function Gd(dd) {
      return Pd.set(dd.id, dd), Nd.j.nO(Wd, Zd(), !0), () => {
        Pd.get(dd.id) === dd && (Pd.delete(dd.id), Nd.j.nO(Wd, Zd()))
      }
    }
  },
  36779: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Zd,
      g: () => ed,
      j: () => Rd,
      m: () => ld,
      o: () => Cd,
      p: () => Od,
      t: () => Qd,
      w: () => Kd
    });
    var pd = kd(22),
      Nd = kd(29),
      Wd = kd(1307),
      Pd = kd(36783);
    const Zd = "clientGameUiChanged";
    let gd = null;

    function Cd() {
      return gd
    }

    function Kd(dd, Jd) {
      const kd = {
        content: dd,
        menu: Jd
      };
      return gd = kd, Nd.j.nO(Zd, gd, !0), () => {
        gd === kd && (gd = null, Ld = !1, ed(), Nd.j.nO(Zd, null))
      }
    }
    let od = null;

    function ld() {
      return od
    }

    function Qd(dd) {
      return od = dd, () => {
        od === dd && (od = null)
      }
    }
    let Ld = !1;

    function Od() {
      const dd = pd.d.get("openInGameMenuName");
      "clientGame" !== dd && (Ld = "inventory" === dd), (0, Pd.o)() || (0, Pd.i)(), (0, Wd.p)(Wd.d), pd.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function ed() {
      Id(!1)
    }

    function Rd() {
      Id(Ld)
    }

    function Id(dd) {
      "clientGame" === pd.d.get("openInGameMenuName") && pd.d.set({
        openInGameMenuName: dd ? "inventory" : null
      }), dd || (0, Pd.i)(), Ld = !1
    }
  },
  38651: (dd, Jd, kd) => {
    function pd(dd, Jd, kd) {
      const pd = new Set,
        Nd = new ResizeObserver(kd),
        Wd = () => {
          const Jd = new Set(document.querySelectorAll(dd));
          let Wd = !1;
          for (const dd of pd) Jd.has(dd) || (Nd.unobserve(dd), pd.delete(dd), Wd = !0);
          for (const dd of Jd) pd.has(dd) || (Nd.observe(dd), Pd.observe(dd, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), pd.add(dd));
          Wd && kd()
        },
        Pd = new MutationObserver((Jd => {
          Jd.some((dd => "attributes" === dd.type)) && kd(), Jd.some((Jd => function(dd, Jd, kd) {
            if ("childList" !== dd.type) return !1;
            for (const pd of dd.addedNodes)
              if (pd instanceof Element && (pd.matches(Jd) || pd.querySelector(Jd))) return !0;
            for (const pd of dd.removedNodes)
              if (pd instanceof Element)
                for (const dd of kd)
                  if (pd.contains(dd)) return !0;
            return !1
          }(Jd, dd, pd))) && Wd()
        }));
      Pd.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const Zd of Jd) Nd.observe(Zd);
      return window.addEventListener("resize", kd), Wd(), kd(), () => {
        Nd.disconnect(), Pd.disconnect(), window.removeEventListener("resize", kd)
      }
    }
    kd.d(Jd, {
      e: () => pd
    })
  },
  8809: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Zd,
      d: () => gd
    });
    var pd = kd(22),
      Nd = kd(1348),
      Wd = kd(95);
    const Pd = {
      blockMined: {
        pattern: [18],
        priority: 1,
        minGapMs: 120
      },
      hitLanded: {
        pattern: [20],
        priority: 2,
        minGapMs: 80
      },
      damageTaken: {
        pattern: [45],
        priority: 3,
        minGapMs: 250
      },
      fishBite: {
        pattern: null,
        priority: 3,
        minGapMs: 0
      },
      death: {
        pattern: [60, 70, 120],
        priority: 4,
        minGapMs: 0
      },
      lockReady: {
        pattern: [8],
        priority: 2,
        minGapMs: 0
      },
      lockLocked: {
        pattern: [15, 50, 15],
        priority: 2,
        minGapMs: 0
      },
      autorunLedgeStop: {
        pattern: [40],
        priority: 3,
        minGapMs: 0
      }
    };

    function Zd() {
      return (0, Wd.isMobile)() && "function" === typeof navigator.vibrate
    }
    const gd = new class {
      constructor(dd) {
        this.deps = dd, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(dd, Jd) {
        var kd;
        if (!this.deps.enabled()) return;
        const pd = Pd[dd],
          Nd = null !== Jd && void 0 !== Jd ? Jd : pd.pattern;
        if (null === Nd) return void console.warn("No vibration pattern for", dd);
        const Wd = this.deps.now();
        Wd - this.lastAnyAt < 40 && pd.priority < this.playingPriority || Wd - (null !== (kd = this.lastAt.get(dd)) && void 0 !== kd ? kd : -1 / 0) < pd.minGapMs || Wd < this.playingUntil && pd.priority < this.playingPriority || (this.lastAt.set(dd, Wd), this.lastAnyAt = Wd, this.playingUntil = Wd + Nd.reduce(((dd, Jd) => dd + Jd), 0), this.playingPriority = pd.priority, this.deps.vibrate(Nd))
      }
    }({
      vibrate: dd => {
        navigator.vibrate([...dd])
      },
      now: () => performance.now(),
      enabled: () => Zd() && pd.d.get("isTouchScreen") && pd.d.get("clientEscMenuOptions").vibration && !(0, Nd.g)()
    })
  },
  37329: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Zd,
      h: () => Pd
    });
    var pd = kd(37314),
      Nd = kd(313),
      Wd = kd(1901);

    function Pd(dd) {
      if ("Ld" in dd) return qd.createAnimationScript(dd);
      return new Cd(dd).createAnimationScript()
    }

    function Zd(dd, Jd, kd, Nd) {
      const Wd = dd.Ld <= 0 ? 1 : Jd + kd * Math.max(0, Nd) / dd.Ld;
      return dd.Od === pd.k.LoopOnLastFrame ? Wd % 1 : dd.Od === pd.k.NoLoop && Wd >= 1 ? null : Math.min(1, Wd)
    }
    class gd {
      createAnimationScript(dd) {
        const {
          Ld: Jd,
          loop: kd,
          Rd: pd
        } = dd;
        return {
          Ld: Math.round(Jd),
          Od: this.createLoopMode(null !== kd && void 0 !== kd && kd),
          Rd: this.createNodeSkeletonAnimationScript(null !== pd && void 0 !== pd ? pd : null)
        }
      }
      createLoopMode(dd) {
        switch (dd) {
          case !1:
            return pd.k.NoLoop;
          case !0:
            return pd.k.LoopOnLastFrame;
          case "hold-on-last-frame":
            return pd.k.HoldOnLastFrame
        }
        throw new Error(`Invalid loop mode schema: ${dd}`)
      }
      createNodeSkeletonAnimationScript(dd) {
        if (null === dd) return null;
        const Jd = {};
        for (const kd in dd) {
          const pd = dd[kd];
          Jd[kd] = this.createNodeAnimationScript(pd)
        }
        return Jd
      }
      createNodeAnimationScript(dd) {
        const {
          timeline: Jd
        } = dd, kd = Jd.filter((dd => Number.isFinite(dd.timeFraction)));
        return kd.sort(((dd, Jd) => dd.timeFraction - Jd.timeFraction)), {
          rotation: this.createTimelineFromKeyframes(kd, "rotation", ld),
          position: this.createTimelineFromKeyframes(kd, "position", Ld)
        }
      }
      createTimelineFromKeyframes(dd, Jd, kd) {
        const pd = [];
        for (const gd of dd) {
          const dd = gd[Jd];
          if (dd) {
            const Jd = this.createAnimationFrameWithoutPrecomputes(gd.timeFraction, dd);
            Kd(Jd) && pd.push(Jd)
          }
        }
        const Nd = [];
        for (let gd = 0; gd < pd.length; gd++) {
          var Wd, Pd, Zd;
          const dd = pd[gd],
            Jd = null !== (Wd = pd[gd - 1]) && void 0 !== Wd ? Wd : dd,
            Cd = null !== (Pd = pd[gd + 1]) && void 0 !== Pd ? Pd : dd,
            Kd = null !== (Zd = pd[gd + 2]) && void 0 !== Zd ? Zd : Cd;
          Nd.push({
            ...dd,
            ...kd(Jd.post, Jd.timeFraction, dd.post, dd.timeFraction, Cd.pre, Cd.timeFraction, Kd.pre, Kd.timeFraction)
          })
        }
        return Nd
      }
      createAnimationFrameWithoutPrecomputes(dd, Jd) {
        let kd, pd, Nd = null;
        var Wd;
        if ("object" === typeof Jd && "point" in Jd) Nd = null !== (Wd = Jd.vd) && void 0 !== Wd ? Wd : null, kd = Jd.point, pd = Jd.point;
        else if ("object" === typeof Jd && "pre" in Jd) {
          var Pd;
          Nd = null !== (Pd = Jd.vd) && void 0 !== Pd ? Pd : null, kd = Jd.pre, pd = Jd.post
        } else kd = Jd, pd = Jd;
        return {
          timeFraction: dd,
          vd: this.createLerpMode(Nd),
          pre: kd,
          post: pd
        }
      }
      createLerpMode(dd) {
        return null === dd ? pd.j.Linear : gd.LERP_MODE_SCHEMA_MAPPING[dd]
      }
    }
    gd.LERP_MODE_SCHEMA_MAPPING = {
      linear: pd.j.Linear,
      "catmull-rom-spline": pd.j.CatmullRomSpline
    };
    class Cd {
      constructor(dd) {
        this.animationSchema = dd
      }
      createAnimationScript() {
        const {
          animation_length: dd,
          loop: Jd,
          bones: kd
        } = this.animationSchema;
        return {
          Ld: Math.round(1e3 * dd),
          Od: this.createLoopMode(null !== Jd && void 0 !== Jd && Jd),
          Rd: this.createNodeSkeletonAnimationScript(null !== kd && void 0 !== kd ? kd : null)
        }
      }
      createLoopMode(dd) {
        switch (dd) {
          case !1:
            return pd.k.NoLoop;
          case !0:
            return pd.k.LoopOnLastFrame;
          case "hold_on_last_frame":
            return pd.k.HoldOnLastFrame
        }
        throw new Error(`Invalid Blockbench loop mode schema: ${dd}`)
      }
      createNodeSkeletonAnimationScript(dd) {
        if (null === dd) return null;
        const Jd = {};
        for (const kd in dd) {
          const pd = dd[kd];
          Jd[kd] = this.createNodeAnimationScript(pd)
        }
        return Jd
      }
      createNodeAnimationScript(dd) {
        const {
          rotation: Jd,
          position: kd
        } = dd;
        return {
          rotation: this.createAnimationTimeline(null !== Jd && void 0 !== Jd ? Jd : null, ed, ld, !0),
          position: this.createAnimationTimeline(null !== kd && void 0 !== kd ? kd : null, Id, Ld, !1)
        }
      }
      createAnimationTimeline(dd, Jd, kd, pd) {
        if (null === dd) return [];
        if (Array.isArray(dd)) {
          dd = {
            "0.0": dd
          }
        }
        const Nd = Object.entries(dd).map((dd => {
          let [kd, pd] = dd;
          const Nd = Number(kd) / this.animationSchema.animation_length;
          return this.createAnimationFrameWithoutPrecomputes(Nd, pd, Jd)
        })).filter(Kd);
        Nd.sort(((dd, Jd) => dd.timeFraction - Jd.timeFraction)), pd && function(dd) {
          for (let Jd = 1; Jd < dd.length; Jd++) {
            const kd = dd[Jd - 1].post,
              pd = dd[Jd],
              Nd = Gd(pd.pre),
              Wd = Gd(pd.post),
              Pd = xd(kd, pd.pre);
            xd(kd, Nd) < Pd && (dd[Jd] = {
              ...pd,
              pre: Nd,
              post: Wd
            })
          }
        }(Nd);
        const Wd = [];
        for (let Cd = 0; Cd < Nd.length; Cd++) {
          var Pd, Zd, gd;
          const dd = Nd[Cd],
            Jd = null !== (Pd = Nd[Cd - 1]) && void 0 !== Pd ? Pd : dd,
            pd = null !== (Zd = Nd[Cd + 1]) && void 0 !== Zd ? Zd : dd,
            Kd = null !== (gd = Nd[Cd + 2]) && void 0 !== gd ? gd : pd;
          Wd.push({
            ...dd,
            ...kd(Jd.post, Jd.timeFraction, dd.post, dd.timeFraction, pd.pre, pd.timeFraction, Kd.pre, Kd.timeFraction)
          })
        }
        return Wd
      }
      createAnimationFrameWithoutPrecomputes(dd, Jd, kd) {
        let pd, Nd, Wd = null;
        if ("object" === typeof Jd && "post" in Jd) {
          var Pd;
          Wd = null !== (Pd = Jd.lerp_mode) && void 0 !== Pd ? Pd : null, Nd = Od(Jd.post, kd), pd = Jd.pre ? Od(Jd.pre, kd) : Nd
        } else {
          const dd = Od(Jd, kd);
          Nd = dd, pd = dd
        }
        return {
          timeFraction: dd,
          vd: this.createLerpMode(Wd),
          pre: pd,
          post: Nd
        }
      }
      createLerpMode(dd) {
        return null === dd ? pd.j.Linear : Cd.LERP_MODE_SCHEMA_MAPPING[dd]
      }
    }

    function Kd(dd) {
      return Number.isFinite(dd.timeFraction) && od(dd.pre) && od(dd.post)
    }

    function od(dd) {
      return Number.isFinite(dd[0]) && Number.isFinite(dd[1]) && Number.isFinite(dd[2])
    }

    function ld(dd, Jd, kd, pd, Nd, Wd, Pd, Zd) {
      const gd = Wd - Jd,
        Cd = Wd - pd,
        Kd = Zd - pd,
        od = [null, null, null];
      for (let ld = 0; ld < od.length; ld++) od[ld] = Qd(dd[ld], kd[ld], Nd[ld], Pd[ld], gd, Kd);
      return {
        xd: Cd,
        qd: od
      }
    }

    function Qd(dd, Jd, kd, pd, Wd, Pd) {
      return {
        sd: Nd.b.computeShortestRotation(dd, kd) / Wd,
        Md: Nd.b.computeShortestRotation(Jd, pd) / Pd,
        delta: Nd.b.computeShortestRotation(Jd, kd)
      }
    }

    function Ld(dd, Jd, kd, pd, Nd, Wd, Pd, Zd) {
      const gd = Wd - Jd,
        Cd = Wd - pd,
        Kd = Zd - pd,
        od = [null, null, null];
      for (let ld = 0; ld < od.length; ld++) od[ld] = {
        sd: (Nd[ld] - dd[ld]) / gd,
        Md: (Pd[ld] - kd[ld]) / Kd,
        delta: Nd[ld] - kd[ld]
      };
      return {
        xd: Cd,
        qd: od
      }
    }

    function Od(dd, Jd) {
      return null === Jd ? dd : Jd(dd)
    }

    function ed(dd) {
      const [Jd, kd, pd] = dd, Pd = -(0, Wd.p)(Jd), Zd = -(0, Wd.p)(kd), gd = (0, Wd.p)(pd), Cd = Nd.b.quaternionFromEulerZYX(Pd, Zd, gd);
      return Nd.b.eulerYXZFromQuaternion(Cd)
    }
    Cd.LERP_MODE_SCHEMA_MAPPING = {
      linear: pd.j.Linear,
      catmullrom: pd.j.CatmullRomSpline
    };
    const Rd = 1 / 16;

    function Id(dd) {
      return [-dd[0] * Rd, dd[1] * Rd, dd[2] * Rd]
    }

    function Gd(dd) {
      const [Jd, kd, pd] = dd;
      return [Jd >= 0 ? Math.PI - Jd : -Math.PI - Jd, vd(kd + Math.PI), vd(pd + Math.PI)]
    }

    function vd(dd) {
      return Nd.b.mod(dd + Math.PI, 2 * Math.PI) - Math.PI
    }

    function xd(dd, Jd) {
      return Math.abs(Nd.b.computeShortestRotation(dd[0], Jd[0])) + Math.abs(Nd.b.computeShortestRotation(dd[1], Jd[1])) + Math.abs(Nd.b.computeShortestRotation(dd[2], Jd[2]))
    }
    const qd = new gd
  },
  37314: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Pd,
      h: () => Wd,
      j: () => pd,
      k: () => Nd
    });
    let pd = function(dd) {
        return dd[dd.Linear = 0] = "Linear", dd[dd.CatmullRomSpline = 1] = "CatmullRomSpline", dd
      }({}),
      Nd = function(dd) {
        return dd[dd.NoLoop = 0] = "NoLoop", dd[dd.LoopOnLastFrame = 1] = "LoopOnLastFrame", dd[dd.HoldOnLastFrame = 2] = "HoldOnLastFrame", dd
      }({}),
      Wd = function(dd) {
        return dd[dd.Movement = 0] = "Movement", dd[dd.Action = 1] = "Action", dd[dd.Emote = 2] = "Emote", dd[dd.Custom = 3] = "Custom", dd
      }({}),
      Pd = function(dd) {
        return dd[dd.Start = 0] = "Start", dd[dd.Stop = 1] = "Stop", dd
      }({})
  },
  4733: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Nd,
      f: () => pd,
      i: () => Wd,
      k: () => gd,
      m: () => Pd
    });
    const pd = ["sine", "triangle", "square", "sawtooth"],
      Nd = 55,
      Wd = {
        soft: {
          waveform: "sine",
          pitchHz: 300,
          glideSemitones: -.5,
          durationMs: 80,
          attackMs: 6,
          releaseMs: 18,
          lowpassHz: null,
          volume: .6,
          intonation: {
            variationSemitones: 1.2,
            declineSemitones: 1.5,
            questionRiseSemitones: 3.5,
            exclaimLiftSemitones: 1.5
          },
          syllableMs: 60
        },
        regular: {
          waveform: "triangle",
          pitchHz: 195,
          glideSemitones: -.6,
          durationMs: 70,
          attackMs: 2,
          releaseMs: 12,
          lowpassHz: null,
          volume: 1,
          intonation: {
            variationSemitones: 1.5,
            declineSemitones: 2,
            questionRiseSemitones: 4,
            exclaimLiftSemitones: 2
          },
          syllableMs: 52
        },
        dark: {
          waveform: "sawtooth",
          pitchHz: 80,
          glideSemitones: -.6,
          durationMs: 85,
          attackMs: 6,
          releaseMs: 16,
          lowpassHz: 420,
          volume: 1.05,
          intonation: {
            variationSemitones: 1,
            declineSemitones: 3.5,
            questionRiseSemitones: 2.5,
            exclaimLiftSemitones: 1
          },
          syllableMs: 64
        },
        "high-pitched": {
          waveform: "triangle",
          pitchHz: 300,
          glideSemitones: -.8,
          durationMs: 55,
          attackMs: 2,
          releaseMs: 10,
          lowpassHz: null,
          volume: .8,
          intonation: {
            variationSemitones: 2.2,
            declineSemitones: 2,
            questionRiseSemitones: 5,
            exclaimLiftSemitones: 3
          },
          syllableMs: 44
        },
        gruff: {
          waveform: "sawtooth",
          pitchHz: 105,
          glideSemitones: -.8,
          durationMs: 75,
          attackMs: 4,
          releaseMs: 14,
          lowpassHz: 900,
          volume: .85,
          intonation: {
            variationSemitones: 1.2,
            declineSemitones: 3,
            questionRiseSemitones: 3,
            exclaimLiftSemitones: 2
          },
          syllableMs: 58
        },
        lively: {
          waveform: "square",
          pitchHz: 230,
          glideSemitones: .6,
          durationMs: 55,
          attackMs: 2,
          releaseMs: 10,
          lowpassHz: 2400,
          volume: .5,
          intonation: {
            variationSemitones: 2.6,
            declineSemitones: 1.5,
            questionRiseSemitones: 5,
            exclaimLiftSemitones: 3.5
          },
          syllableMs: 44
        },
        posh: {
          waveform: "triangle",
          pitchHz: 175,
          glideSemitones: 1.2,
          durationMs: 90,
          attackMs: 6,
          releaseMs: 20,
          lowpassHz: 2e3,
          volume: 1,
          intonation: {
            variationSemitones: 2,
            declineSemitones: 4,
            questionRiseSemitones: 5,
            exclaimLiftSemitones: 2.5
          },
          syllableMs: 60
        },
        mechanical: {
          waveform: "square",
          pitchHz: 140,
          glideSemitones: 0,
          durationMs: 60,
          attackMs: 0,
          releaseMs: 4,
          lowpassHz: 1400,
          volume: .55,
          intonation: {
            variationSemitones: 0,
            declineSemitones: 0,
            questionRiseSemitones: 0,
            exclaimLiftSemitones: 0
          },
          syllableMs: 62
        }
      };

    function Pd(dd) {
      return "string" !== typeof dd ? dd : Object.hasOwn(Wd, dd) ? Wd[dd] : null
    }

    function Zd(dd, Jd, kd) {
      return Math.min(kd, Math.max(Jd, dd))
    }

    function gd(dd) {
      const Jd = Zd(dd.durationMs, 10, 500),
        kd = Zd(dd.attackMs, 0, Jd),
        {
          intonation: Nd
        } = dd;
      return {
        waveform: pd.includes(dd.waveform) ? dd.waveform : "sine",
        pitchHz: Zd(dd.pitchHz, 20, 4e3),
        glideSemitones: Zd(dd.glideSemitones, -24, 24),
        durationMs: Jd,
        attackMs: kd,
        releaseMs: Zd(dd.releaseMs, 0, Jd - kd),
        lowpassHz: null === dd.lowpassHz ? null : Zd(dd.lowpassHz, 20, 2e4),
        volume: Zd(dd.volume, 0, 2),
        intonation: {
          variationSemitones: Zd(Nd.variationSemitones, 0, 6),
          declineSemitones: Zd(Nd.declineSemitones, 0, 12),
          questionRiseSemitones: Zd(Nd.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: Zd(Nd.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: Zd(dd.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);