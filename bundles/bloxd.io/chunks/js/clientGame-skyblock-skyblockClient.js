export const id = 25;
export const ids = [25];
export const modules = {
  36853: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Et,
      g: () => ft,
      i: () => lt,
      m: () => Qt
    });
    var Ot = Vt(34371),
      qt = Vt(36861),
      Dt = Vt(36867),
      mt = Vt(8936),
      dt = Vt(1554),
      jt = Vt(63),
      Ht = Vt(83),
      Xt = Vt(1188);

    function Qt() {
      var tt;
      return (0, dt.h)(qt.b, (0, qt.l)()), (0, Xt.jsx)(Xt.Fragment, {
        children: null === (tt = (0, qt.l)()) || void 0 === tt ? void 0 : tt.content
      })
    }

    function lt(tt) {
      var et;
      let {
        show: Vt
      } = tt;
      (0, dt.h)(qt.b, (0, qt.l)());
      const Ht = null === (et = (0, qt.l)()) || void 0 === et ? void 0 : et.menu;
      return (0, jt.useEffect)((() => {
        var tt;
        Vt || (null === Ht || void 0 === Ht || null === (tt = Ht.onClose) || void 0 === tt || tt.call(Ht), (0, Dt.t)())
      }), [Vt, Ht]), (0, jt.useEffect)((() => Vt ? (0, mt.g)(Dt.A, Dt.f) : void 0), [Vt]), (0, Xt.jsx)(Ot.b, {
        showing: Vt,
        globallyUniqueKey: "clientGameMenu",
        children: null === Ht || void 0 === Ht ? void 0 : Ht.content
      })
    }

    function Et(tt) {
      let {
        placement: et = "bottom"
      } = tt;
      return (0, Xt.jsx)("div", {
        id: `clientGameHud-${et}`,
        style: {
          display: "contents"
        }
      })
    }

    function ft(tt) {
      let {
        children: et,
        placement: Vt = "bottom"
      } = tt;
      const [Ot, qt] = (0, jt.useState)(null);
      return (0, jt.useEffect)((() => {
        qt(document.getElementById(`clientGameHud-${Vt}`))
      }), [Vt]), Ot ? (0, Ht.createPortal)(et, Ot) : null
    }
  },
  5e3: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => yt,
      f: () => Nt
    });
    var Ot = Vt(1140),
      qt = Vt.n(Ot),
      Dt = Vt(63),
      mt = Vt(1286),
      dt = Vt(5003),
      jt = Vt(2001),
      Ht = Vt(2498),
      Xt = Vt(5010),
      Qt = Vt(1188);
    const lt = new WeakMap;
    let Et = 0;

    function ft(tt) {
      let et = lt.get(tt);
      return void 0 === et && (et = Et++, lt.set(tt, et)), et
    }

    function wt(tt) {
      let {
        piece: et
      } = tt;
      return "space" === et.kind ? (0, Qt.jsx)(Qt.Fragment, {
        children: et.text
      }) : (0, Qt.jsx)("span", {
        className: "DialogueWord",
        style: {
          "--word-delay": `${et.delayMs}ms`
        },
        children: (0, Qt.jsx)(dt.d, {
          text: "icon" === et.kind ? `[[${et.icon}]]` : et.text
        })
      })
    }

    function yt(tt) {
      let {
        display: et
      } = tt;
      const {
        selectedLanguage: Vt
      } = (0, mt.H)(), Ot = (0, Dt.useMemo)((() => (0, Xt.e)((0, Xt.f)(et).plan.pieces)), [et, Vt.code]);
      return (0, Qt.jsxs)("div", {
        className: qt()("Dialogue", {
          DialogueAnimateIn: !1 !== et.animateIn
        }),
        children: [et.speakerName && (0, Qt.jsx)(jt.e, {
          text: et.speakerName,
          className: "DialogueSpeaker"
        }), (0, Qt.jsx)("p", {
          className: "DialogueLine",
          children: Ot.map(((tt, et) => 1 === tt.length && "space" === tt[0].kind ? tt[0].text : (0, Qt.jsx)("span", {
            className: "DialogueGlue",
            children: tt.map(((tt, et) => (0, Qt.jsx)(wt, {
              piece: tt
            }, et)))
          }, et)))
        })]
      })
    }
    const Nt = (0, Dt.memo)((function() {
      const tt = (0, Ht.i)("dialogue");
      return (0, Qt.jsx)("div", {
        className: "DialogueAnchor",
        "data-camera-keeper": "",
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: tt && (0, Qt.jsx)(yt, {
          display: tt
        }, ft(tt))
      })
    }))
  },
  5003: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => dt
    });
    var Ot = Vt(63),
      qt = Vt(377),
      Dt = Vt(2018),
      mt = Vt(1188);

    function dt(tt) {
      let {
        text: et
      } = tt;
      const Vt = [];
      let dt = "";
      return (0, qt.Ob)(et).forEach(((tt, et) => {
        if ("string" === typeof tt || !(0, Dt.g)(tt.icon)) return void(dt += "string" === typeof tt ? tt : tt.icon);
        const qt = Math.max(0, dt.trimEnd().search(/\S{1,12}$/));
        Vt.push((0, mt.jsxs)(Ot.Fragment, {
          children: [dt.slice(0, qt), (0, mt.jsxs)("span", {
            className: "InlineIconTextGlue",
            children: [dt.slice(qt), (0, mt.jsx)("span", {
              className: "InlineIconTextIcon",
              role: "img",
              "aria-label": tt.icon,
              children: (0, mt.jsx)(Dt.e, {
                itemName: tt.icon,
                amount: 0
              })
            })]
          })]
        }, et)), dt = ""
      })), Vt.push(dt), (0, mt.jsx)(mt.Fragment, {
        children: Vt
      })
    }
  },
  34371: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Dt
    });
    var Ot = Vt(4668),
      qt = Vt(4677);

    function Dt(tt) {
      let {
        children: et,
        showing: Vt,
        globallyUniqueKey: Dt,
        alwaysMountChildren: mt = !1,
        doGameplayStartStopOnShow: dt = !0,
        keepsMovement: jt = !1
      } = tt;
      return (0, qt.d)(!0, Vt, Dt, jt), (0, Ot.e)(dt, Vt), Vt || mt ? et : null
    }
  },
  5010: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Lt,
      f: () => Zt
    });
    var Ot = Vt(5015),
      qt = Vt(377);
    const Dt = 120,
      mt = 260,
      dt = 1.15,
      jt = 1.2,
      Ht = 2,
      Xt = 1.08,
      Qt = .8,
      lt = .95,
      Et = 8,
      ft = "[\"')\\]\u300d\u300f\uff09]*",
      wt = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${ft}$`),
      yt = new RegExp(`[?\uff1f]${ft}$`),
      Nt = new RegExp(`[!\uff01]${ft}$`),
      Mt = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      bt = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      Jt = new RegExp(`[${bt}]`),
      Ct = new RegExp(`[${bt}]|[^${bt}]+`, "g"),
      ut = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function Kt(tt) {
      let et = 2166136261;
      for (let Vt = 0; Vt < tt.length; Vt++) et ^= tt.charCodeAt(Vt), et = Math.imul(et, 16777619);
      return (et >>> 0) / 4294967295 * 2 - 1
    }

    function ht(tt) {
      var et;
      if (Jt.test(tt)) return 1;
      const Vt = tt.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        Ot = Vt.replace(/[^0-9]/g, "");
      if (Ot.length > 0 && !/\p{L}/u.test(Vt)) return Math.min(Ot.length, 4);
      const qt = null !== (et = Vt.match(ut)) && void 0 !== et ? et : [];
      if (0 === qt.length) {
        var Dt, mt;
        const tt = null !== (Dt = null === (mt = Vt.match(/\p{L}/gu)) || void 0 === mt ? void 0 : mt.length) && void 0 !== Dt ? Dt : 0;
        return 0 === tt ? 0 : Math.min(Math.max(1, Math.round(tt / 2.5)), Et)
      }
      const dt = Vt.replace(/[^\p{L}]/gu, ""),
        jt = qt.length > 1 && "e" === qt.at(-1) && dt.endsWith("e") && !dt.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(tt.replace(/[^\p{L}]/gu, ""));
      return Math.min(qt.length - (jt ? 1 : 0), Et)
    }

    function vt(tt) {
      return tt.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function Wt(tt) {
      const et = tt.replace(/[^\p{L}]/gu, "");
      return et.length >= 2 && et === et.toUpperCase() && et !== et.toLowerCase()
    }

    function St(tt, et) {
      var Vt;
      const Et = et && (0, Ot.i)(et),
        ft = null !== (Vt = null === Et || void 0 === Et ? void 0 : Et.syllableMs) && void 0 !== Vt ? Vt : Ot.c,
        bt = function(tt) {
          const et = [];
          for (const Ot of (0, qt.Ob)(tt))
            if ("string" === typeof Ot)
              for (const tt of Ot.split(/(\s+)/)) {
                if ("" === tt) continue;
                if (/^\s+$/.test(tt)) {
                  et.push({
                    kind: "space",
                    text: tt
                  });
                  continue
                }
                if (!Jt.test(tt)) {
                  et.push({
                    kind: "word",
                    text: tt,
                    delayMs: 0
                  });
                  continue
                }
                let Ot = !0;
                for (const qt of null !== (Vt = tt.match(Ct)) && void 0 !== Vt ? Vt : []) {
                  var Vt;
                  const tt = et.at(-1);
                  Ot || "word" !== (null === tt || void 0 === tt ? void 0 : tt.kind) || Jt.test(qt) || /[\p{L}\p{N}]/u.test(qt) ? (Ot || et.push({
                    kind: "space",
                    text: "\u200b"
                  }), et.push({
                    kind: "word",
                    text: qt,
                    delayMs: 0
                  }), Ot = !1) : tt.text += qt
                }
              } else et.push({
                kind: "icon",
                text: Ot.icon,
                delayMs: 0
              });
          return et
        }(tt),
        ut = [];
      let St = [];
      for (const Ot of bt) "space" !== Ot.kind && (St.push(Ot), wt.test(Ot.text) && (ut.push(St), St = []));
      ut.push(St);
      const ct = [];
      let Rt = 0;
      for (const Ot of ut) {
        var It, Pt;
        const tt = null !== (It = null === (Pt = Ot.at(-1)) || void 0 === Pt ? void 0 : Pt.text) && void 0 !== It ? It : "",
          et = yt.test(tt),
          Vt = Nt.test(tt),
          qt = Ot.map((tt => "word" === tt.kind ? ht(tt.text) : 1)),
          bt = qt.findLastIndex((tt => tt > 0));
        for (const [yt, Nt] of Ot.entries()) {
          const tt = "word" === Nt.kind,
            Ot = qt[yt];
          Nt.delayMs = Rt;
          for (let qt = 0; Et && qt < Ot; qt++) {
            const {
              intonation: Dt
            } = Et;
            let mt = bt > 0 ? -Dt.declineSemitones * (yt / bt) : 0;
            mt += Kt(`${vt(Nt.text)}|${qt}`) * Dt.variationSemitones;
            const wt = Math.min(1, Dt.variationSemitones);
            let Mt = Et.glideSemitones,
              Jt = 1;
            Vt && (mt += Dt.exclaimLiftSemitones, Jt *= dt), et && yt === bt && (mt += Dt.questionRiseSemitones * (Ot > 1 ? .5 + .5 * qt / (Ot - 1) : 1), qt === Ot - 1 && (Mt = Math.abs(Mt) + Dt.questionRiseSemitones / 2)), tt && Wt(Nt.text) && (mt += Ht * wt, Jt *= jt), Ot > 1 && 0 === qt && (mt += Qt * wt, Jt *= Xt), ct.push({
              atMs: Rt + qt * ft,
              semitones: mt,
              glideSemitones: Mt,
              durationMs: qt < Ot - 1 ? Math.min(Et.durationMs, ft * lt) : Et.durationMs,
              level: Jt
            })
          }
          Rt += Ot * ft + (wt.test(Nt.text) ? mt : Mt.test(Nt.text) ? Dt : 0)
        }
      }
      return {
        pieces: bt.map((tt => "space" === tt.kind ? tt : "icon" === tt.kind ? {
          kind: "icon",
          icon: tt.text,
          delayMs: tt.delayMs
        } : {
          kind: "word",
          text: tt.text,
          delayMs: tt.delayMs
        })),
        blips: ct
      }
    }
    var ct = Vt(1286),
      Rt = Vt(1338),
      It = Vt(2026);

    function Pt(tt) {
      if ("string" === typeof tt) return tt;
      const et = Rt.e.get().getCurrentLanguageCode();
      return (0, ct.t)(et, tt.translationKey, (0, ct.p)(tt.params, It.d.shown))
    }

    function Zt(tt) {
      const et = void 0 === tt.voice ? null : (0, Ot.l)(tt.voice),
        Vt = et && (0, Ot.i)(et);
      return {
        plan: St(Pt(tt.line), Vt),
        synth: Vt
      }
    }

    function Lt(tt) {
      const et = [];
      let Vt = [];
      for (const [qt, Dt] of tt.entries()) {
        var Ot;
        "space" === Dt.kind && (" " !== Dt.text || "icon" !== (null === (Ot = tt[qt + 1]) || void 0 === Ot ? void 0 : Ot.kind)) ? (Vt.length > 0 && et.push(Vt), et.push([Dt]), Vt = []) : Vt.push(Dt)
      }
      return Vt.length > 0 && et.push(Vt), et
    }
  },
  8936: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Dt,
      g: () => qt
    });
    let Ot = null;
    const qt = function(tt) {
        const et = {
          cycle: tt,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Ot = et, () => {
          Ot === et && (Ot = null)
        }
      },
      Dt = () => {
        var tt;
        return null !== (tt = Ot) && void 0 !== tt && tt.canCycle() ? Ot.cycle : null
      }
  },
  36867: (tt, et, Vt) => {
    Vt.d(et, {
      A: () => ft,
      E: () => Mt,
      d: () => Dt,
      f: () => wt,
      j: () => yt,
      n: () => dt,
      q: () => lt,
      t: () => Nt,
      w: () => Qt,
      y: () => bt
    });
    var Ot = Vt(26),
      qt = Vt(31);
    const Dt = "clientGameInventoryButtonsChanged",
      mt = new Map;

    function dt() {
      return [...mt.values()].sort(((tt, et) => {
        var Vt, Ot;
        return (null !== (Vt = tt.order) && void 0 !== Vt ? Vt : 0) - (null !== (Ot = et.order) && void 0 !== Ot ? Ot : 0)
      }))
    }
    let jt = null;

    function Ht(tt) {
      jt = tt
    }
    let Xt = !1;

    function Qt(tt) {
      Xt = !0;
      try {
        tt.onClick()
      } finally {
        Xt = !1
      }
      tt.panel && "clientGame" === Ot.b.get("openInGameMenuName") && Ht(tt.id)
    }

    function lt() {
      return Xt
    }

    function Et() {
      return dt().filter((tt => tt.panel && !tt.disabled))
    }

    function ft(tt) {
      const et = Et(),
        Vt = et.findIndex((tt => tt.id === jt));
      return !(Vt < 0 || et.length < 2) && (Qt(et[(Vt + tt + et.length) % et.length]), !0)
    }

    function wt() {
      return null !== jt && Et().length > 1
    }

    function yt() {
      Ht(null)
    }

    function Nt() {
      "inventory" !== Ot.b.get("openInGameMenuName") && Ht(null)
    }

    function Mt() {
      const tt = jt;
      return Ht(null), tt
    }

    function bt(tt) {
      return mt.set(tt.id, tt), qt.j.sw(Dt, dt(), !0), () => {
        mt.get(tt.id) === tt && (mt.delete(tt.id), qt.j.sw(Dt, dt()))
      }
    }
  },
  36861: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => dt,
      c: () => yt,
      g: () => Nt,
      i: () => lt,
      l: () => Ht,
      m: () => wt,
      o: () => Et,
      q: () => Xt
    });
    var Ot = Vt(26),
      qt = Vt(31),
      Dt = Vt(1387),
      mt = Vt(36867);
    const dt = "clientGameUiChanged";
    let jt = null;

    function Ht() {
      return jt
    }

    function Xt(tt, et) {
      const Vt = {
        content: tt,
        menu: et
      };
      return jt = Vt, qt.j.sw(dt, jt, !0), () => {
        jt === Vt && (jt = null, ft = !1, yt(), qt.j.sw(dt, null))
      }
    }
    let Qt = null;

    function lt() {
      return Qt
    }

    function Et(tt) {
      return Qt = tt, () => {
        Qt === tt && (Qt = null)
      }
    }
    let ft = !1;

    function wt() {
      const tt = Ot.b.get("openInGameMenuName");
      "clientGame" !== tt && (ft = "inventory" === tt), (0, mt.q)() || (0, mt.j)(), (0, Dt.p)(Dt.c), Ot.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function yt() {
      Mt(!1)
    }

    function Nt() {
      Mt(ft)
    }

    function Mt(tt) {
      "clientGame" === Ot.b.get("openInGameMenuName") && Ot.b.set({
        openInGameMenuName: tt ? "inventory" : null
      }), tt || (0, mt.j)(), ft = !1
    }
  },
  38733: (tt, et, Vt) => {
    function Ot(tt, et, Vt) {
      const Ot = new Set,
        qt = new ResizeObserver(Vt),
        Dt = () => {
          const et = new Set(document.querySelectorAll(tt));
          let Dt = !1;
          for (const tt of Ot) et.has(tt) || (qt.unobserve(tt), Ot.delete(tt), Dt = !0);
          for (const tt of et) Ot.has(tt) || (qt.observe(tt), mt.observe(tt, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), Ot.add(tt));
          Dt && Vt()
        },
        mt = new MutationObserver((et => {
          et.some((tt => "attributes" === tt.type)) && Vt(), et.some((et => function(tt, et, Vt) {
            if ("childList" !== tt.type) return !1;
            for (const Ot of tt.addedNodes)
              if (Ot instanceof Element && (Ot.matches(et) || Ot.querySelector(et))) return !0;
            for (const Ot of tt.removedNodes)
              if (Ot instanceof Element)
                for (const tt of Vt)
                  if (Ot.contains(tt)) return !0;
            return !1
          }(et, tt, Ot))) && Dt()
        }));
      mt.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const dt of et) qt.observe(dt);
      return window.addEventListener("resize", Vt), Dt(), Vt(), () => {
        qt.disconnect(), mt.disconnect(), window.removeEventListener("resize", Vt)
      }
    }
    Vt.d(et, {
      d: () => Ot
    })
  },
  9101: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => dt,
      d: () => jt
    });
    var Ot = Vt(26),
      qt = Vt(1423),
      Dt = Vt(106);
    const mt = {
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

    function dt() {
      return (0, Dt.isMobile)() && "function" === typeof navigator.vibrate
    }
    const jt = new class {
      constructor(tt) {
        this.deps = tt, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(tt, et) {
        var Vt;
        if (!this.deps.enabled()) return;
        const Ot = mt[tt],
          qt = null !== et && void 0 !== et ? et : Ot.pattern;
        if (null === qt) return void console.warn("No vibration pattern for", tt);
        const Dt = this.deps.now();
        Dt - this.lastAnyAt < 40 && Ot.priority < this.playingPriority || Dt - (null !== (Vt = this.lastAt.get(tt)) && void 0 !== Vt ? Vt : -1 / 0) < Ot.minGapMs || Dt < this.playingUntil && Ot.priority < this.playingPriority || (this.lastAt.set(tt, Dt), this.lastAnyAt = Dt, this.playingUntil = Dt + qt.reduce(((tt, et) => tt + et), 0), this.playingPriority = Ot.priority, this.deps.vibrate(qt))
      }
    }({
      vibrate: tt => {
        navigator.vibrate([...tt])
      },
      now: () => performance.now(),
      enabled: () => dt() && Ot.b.get("isTouchScreen") && Ot.b.get("clientEscMenuOptions").vibration && !(0, qt.d)()
    })
  },
  5015: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => qt,
      d: () => Ot,
      g: () => Dt,
      i: () => jt,
      l: () => mt
    });
    const Ot = ["sine", "triangle", "square", "sawtooth"],
      qt = 55,
      Dt = {
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

    function mt(tt) {
      return "string" !== typeof tt ? tt : Object.hasOwn(Dt, tt) ? Dt[tt] : null
    }

    function dt(tt, et, Vt) {
      return Math.min(Vt, Math.max(et, tt))
    }

    function jt(tt) {
      const et = dt(tt.durationMs, 10, 500),
        Vt = dt(tt.attackMs, 0, et),
        {
          intonation: qt
        } = tt;
      return {
        waveform: Ot.includes(tt.waveform) ? tt.waveform : "sine",
        pitchHz: dt(tt.pitchHz, 20, 4e3),
        glideSemitones: dt(tt.glideSemitones, -24, 24),
        durationMs: et,
        attackMs: Vt,
        releaseMs: dt(tt.releaseMs, 0, et - Vt),
        lowpassHz: null === tt.lowpassHz ? null : dt(tt.lowpassHz, 20, 2e4),
        volume: dt(tt.volume, 0, 2),
        intonation: {
          variationSemitones: dt(qt.variationSemitones, 0, 6),
          declineSemitones: dt(qt.declineSemitones, 0, 12),
          questionRiseSemitones: dt(qt.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: dt(qt.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: dt(tt.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);