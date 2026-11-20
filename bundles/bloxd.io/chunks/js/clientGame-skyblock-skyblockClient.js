export const id = 25;
export const ids = [25];
export const modules = {
  36132: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => wv,
      g: () => av,
      i: () => Wv,
      m: () => Tv
    });
    var hv = Pv(8997),
      Sv = Pv(36137),
      ev = Pv(36139),
      gv = Pv(8413),
      pv = Pv(1439),
      dv = Pv(52),
      Nv = Pv(62),
      lv = Pv(1082);

    function Tv() {
      var vv;
      return (0, pv.j)(Sv.d, (0, Sv.q)()), (0, lv.jsx)(lv.Fragment, {
        children: null === (vv = (0, Sv.q)()) || void 0 === vv ? void 0 : vv.content
      })
    }

    function Wv(vv) {
      var zv;
      let {
        show: Pv
      } = vv;
      (0, pv.j)(Sv.d, (0, Sv.q)());
      const Nv = null === (zv = (0, Sv.q)()) || void 0 === zv ? void 0 : zv.menu;
      return (0, dv.useEffect)((() => {
        var vv;
        Pv || (null === Nv || void 0 === Nv || null === (vv = Nv.onClose) || void 0 === vv || vv.call(Nv), (0, ev.o)())
      }), [Pv, Nv]), (0, dv.useEffect)((() => Pv ? (0, gv.f)(ev.y, ev.c) : void 0), [Pv]), (0, lv.jsx)(hv.d, {
        showing: Pv,
        globallyUniqueKey: "clientGameMenu",
        children: null === Nv || void 0 === Nv ? void 0 : Nv.content
      })
    }

    function wv(vv) {
      let {
        placement: zv = "bottom"
      } = vv;
      return (0, lv.jsx)("div", {
        id: `clientGameHud-${zv}`,
        style: {
          display: "contents"
        }
      })
    }

    function av(vv) {
      let {
        children: zv,
        placement: Pv = "bottom"
      } = vv;
      const [hv, Sv] = (0, dv.useState)(null);
      return (0, dv.useEffect)((() => {
        Sv(document.getElementById(`clientGameHud-${Pv}`))
      }), [Pv]), hv ? (0, Nv.createPortal)(zv, hv) : null
    }
  },
  4574: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => Cv,
      f: () => iv
    });
    var hv = Pv(1035),
      Sv = Pv.n(hv),
      ev = Pv(52),
      gv = Pv(1175),
      pv = Pv(4582),
      dv = Pv(1858),
      Nv = Pv(2324),
      lv = Pv(4589),
      Tv = Pv(1082);
    const Wv = new WeakMap;
    let wv = 0;

    function av(vv) {
      let zv = Wv.get(vv);
      return void 0 === zv && (zv = wv++, Wv.set(vv, zv)), zv
    }

    function sv(vv) {
      let {
        piece: zv
      } = vv;
      return "space" === zv.kind ? (0, Tv.jsx)(Tv.Fragment, {
        children: zv.text
      }) : (0, Tv.jsx)("span", {
        className: "DialogueWord",
        style: {
          "--word-delay": `${zv.delayMs}ms`
        },
        children: (0, Tv.jsx)(pv.c, {
          text: "icon" === zv.kind ? `[[${zv.icon}]]` : zv.text
        })
      })
    }

    function Cv(vv) {
      let {
        display: zv
      } = vv;
      const {
        selectedLanguage: Pv
      } = (0, gv.x)(), hv = (0, ev.useMemo)((() => (0, lv.d)((0, lv.e)(zv).plan.pieces)), [zv, Pv.code]);
      return (0, Tv.jsxs)("div", {
        className: Sv()("Dialogue", {
          DialogueAnimateIn: !1 !== zv.animateIn
        }),
        children: [zv.speakerName && (0, Tv.jsx)(dv.c, {
          text: zv.speakerName,
          className: "DialogueSpeaker"
        }), (0, Tv.jsx)("p", {
          className: "DialogueLine",
          children: hv.map(((vv, zv) => 1 === vv.length && "space" === vv[0].kind ? vv[0].text : (0, Tv.jsx)("span", {
            className: "DialogueGlue",
            children: vv.map(((vv, zv) => (0, Tv.jsx)(sv, {
              piece: vv
            }, zv)))
          }, zv)))
        })]
      })
    }
    const iv = (0, ev.memo)((function() {
      const vv = (0, Nv.i)("dialogue");
      return (0, Tv.jsx)("div", {
        className: "DialogueAnchor",
        "data-camera-keeper": "",
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: vv && (0, Tv.jsx)(Cv, {
          display: vv
        }, av(vv))
      })
    }))
  },
  4582: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => pv
    });
    var hv = Pv(52),
      Sv = Pv(302),
      ev = Pv(1871),
      gv = Pv(1082);

    function pv(vv) {
      let {
        text: zv
      } = vv;
      const Pv = [];
      let pv = "";
      return (0, Sv.Vb)(zv).forEach(((vv, zv) => {
        if ("string" === typeof vv || !(0, ev.d)(vv.icon)) return void(pv += "string" === typeof vv ? vv : vv.icon);
        const Sv = Math.max(0, pv.trimEnd().search(/\S{1,12}$/));
        Pv.push((0, gv.jsxs)(hv.Fragment, {
          children: [pv.slice(0, Sv), (0, gv.jsxs)("span", {
            className: "InlineIconTextGlue",
            children: [pv.slice(Sv), (0, gv.jsx)("span", {
              className: "InlineIconTextIcon",
              role: "img",
              "aria-label": vv.icon,
              children: (0, gv.jsx)(ev.b, {
                itemName: vv.icon,
                amount: 0
              })
            })]
          })]
        }, zv)), pv = ""
      })), Pv.push(pv), (0, gv.jsx)(gv.Fragment, {
        children: Pv
      })
    }
  },
  8997: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => ev
    });
    var hv = Pv(4287),
      Sv = Pv(4292);

    function ev(vv) {
      let {
        children: zv,
        showing: Pv,
        globallyUniqueKey: ev,
        alwaysMountChildren: gv = !1,
        doGameplayStartStopOnShow: pv = !0,
        keepsMovement: dv = !1
      } = vv;
      return (0, Sv.e)(!0, Pv, ev, dv), (0, hv.b)(pv, Pv), Pv || gv ? zv : null
    }
  },
  4589: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => tv,
      e: () => xv
    });
    var hv = Pv(4592),
      Sv = Pv(302);
    const ev = 120,
      gv = 260,
      pv = 1.15,
      dv = 1.2,
      Nv = 2,
      lv = 1.08,
      Tv = .8,
      Wv = .95,
      wv = 8,
      av = "[\"')\\]\u300d\u300f\uff09]*",
      sv = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${av}$`),
      Cv = new RegExp(`[?\uff1f]${av}$`),
      iv = new RegExp(`[!\uff01]${av}$`),
      cv = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      Gv = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      mv = new RegExp(`[${Gv}]`),
      jv = new RegExp(`[${Gv}]|[^${Gv}]+`, "g"),
      fv = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function Fv(vv) {
      let zv = 2166136261;
      for (let Pv = 0; Pv < vv.length; Pv++) zv ^= vv.charCodeAt(Pv), zv = Math.imul(zv, 16777619);
      return (zv >>> 0) / 4294967295 * 2 - 1
    }

    function Yv(vv) {
      var zv;
      if (mv.test(vv)) return 1;
      const Pv = vv.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        hv = Pv.replace(/[^0-9]/g, "");
      if (hv.length > 0 && !/\p{L}/u.test(Pv)) return Math.min(hv.length, 4);
      const Sv = null !== (zv = Pv.match(fv)) && void 0 !== zv ? zv : [];
      if (0 === Sv.length) {
        var ev, gv;
        const vv = null !== (ev = null === (gv = Pv.match(/\p{L}/gu)) || void 0 === gv ? void 0 : gv.length) && void 0 !== ev ? ev : 0;
        return 0 === vv ? 0 : Math.min(Math.max(1, Math.round(vv / 2.5)), wv)
      }
      const pv = Pv.replace(/[^\p{L}]/gu, ""),
        dv = Sv.length > 1 && "e" === Sv.at(-1) && pv.endsWith("e") && !pv.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(vv.replace(/[^\p{L}]/gu, ""));
      return Math.min(Sv.length - (dv ? 1 : 0), wv)
    }

    function nv(vv) {
      return vv.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function Ov(vv) {
      const zv = vv.replace(/[^\p{L}]/gu, "");
      return zv.length >= 2 && zv === zv.toUpperCase() && zv !== zv.toLowerCase()
    }

    function Dv(vv, zv) {
      var Pv;
      const wv = zv && (0, hv.h)(zv),
        av = null !== (Pv = null === wv || void 0 === wv ? void 0 : wv.syllableMs) && void 0 !== Pv ? Pv : hv.c,
        Gv = function(vv) {
          const zv = [];
          for (const hv of (0, Sv.Vb)(vv))
            if ("string" === typeof hv)
              for (const vv of hv.split(/(\s+)/)) {
                if ("" === vv) continue;
                if (/^\s+$/.test(vv)) {
                  zv.push({
                    kind: "space",
                    text: vv
                  });
                  continue
                }
                if (!mv.test(vv)) {
                  zv.push({
                    kind: "word",
                    text: vv,
                    delayMs: 0
                  });
                  continue
                }
                let hv = !0;
                for (const Sv of null !== (Pv = vv.match(jv)) && void 0 !== Pv ? Pv : []) {
                  var Pv;
                  const vv = zv.at(-1);
                  hv || "word" !== (null === vv || void 0 === vv ? void 0 : vv.kind) || mv.test(Sv) || /[\p{L}\p{N}]/u.test(Sv) ? (hv || zv.push({
                    kind: "space",
                    text: "\u200b"
                  }), zv.push({
                    kind: "word",
                    text: Sv,
                    delayMs: 0
                  }), hv = !1) : vv.text += Sv
                }
              } else zv.push({
                kind: "icon",
                text: hv.icon,
                delayMs: 0
              });
          return zv
        }(vv),
        fv = [];
      let Dv = [];
      for (const hv of Gv) "space" !== hv.kind && (Dv.push(hv), sv.test(hv.text) && (fv.push(Dv), Dv = []));
      fv.push(Dv);
      const Kv = [];
      let Vv = 0;
      for (const hv of fv) {
        var Uv, Rv;
        const vv = null !== (Uv = null === (Rv = hv.at(-1)) || void 0 === Rv ? void 0 : Rv.text) && void 0 !== Uv ? Uv : "",
          zv = Cv.test(vv),
          Pv = iv.test(vv),
          Sv = hv.map((vv => "word" === vv.kind ? Yv(vv.text) : 1)),
          Gv = Sv.findLastIndex((vv => vv > 0));
        for (const [Cv, iv] of hv.entries()) {
          const vv = "word" === iv.kind,
            hv = Sv[Cv];
          iv.delayMs = Vv;
          for (let Sv = 0; wv && Sv < hv; Sv++) {
            const {
              intonation: ev
            } = wv;
            let gv = Gv > 0 ? -ev.declineSemitones * (Cv / Gv) : 0;
            gv += Fv(`${nv(iv.text)}|${Sv}`) * ev.variationSemitones;
            const sv = Math.min(1, ev.variationSemitones);
            let cv = wv.glideSemitones,
              mv = 1;
            Pv && (gv += ev.exclaimLiftSemitones, mv *= pv), zv && Cv === Gv && (gv += ev.questionRiseSemitones * (hv > 1 ? .5 + .5 * Sv / (hv - 1) : 1), Sv === hv - 1 && (cv = Math.abs(cv) + ev.questionRiseSemitones / 2)), vv && Ov(iv.text) && (gv += Nv * sv, mv *= dv), hv > 1 && 0 === Sv && (gv += Tv * sv, mv *= lv), Kv.push({
              atMs: Vv + Sv * av,
              semitones: gv,
              glideSemitones: cv,
              durationMs: Sv < hv - 1 ? Math.min(wv.durationMs, av * Wv) : wv.durationMs,
              level: mv
            })
          }
          Vv += hv * av + (sv.test(iv.text) ? gv : cv.test(iv.text) ? ev : 0)
        }
      }
      return {
        pieces: Gv.map((vv => "space" === vv.kind ? vv : "icon" === vv.kind ? {
          kind: "icon",
          icon: vv.text,
          delayMs: vv.delayMs
        } : {
          kind: "word",
          text: vv.text,
          delayMs: vv.delayMs
        })),
        blips: Kv
      }
    }
    var Kv = Pv(1175),
      Vv = Pv(1234),
      Uv = Pv(1884);

    function Rv(vv) {
      if ("string" === typeof vv) return vv;
      const zv = Vv.f.get().getCurrentLanguageCode();
      return (0, Kv.j)(zv, vv.translationKey, (0, Kv.i)(vv.params, Uv.b.shown))
    }

    function xv(vv) {
      const zv = void 0 === vv.voice ? null : (0, hv.l)(vv.voice),
        Pv = zv && (0, hv.h)(zv);
      return {
        plan: Dv(Rv(vv.line), Pv),
        synth: Pv
      }
    }

    function tv(vv) {
      const zv = [];
      let Pv = [];
      for (const [Sv, ev] of vv.entries()) {
        var hv;
        "space" === ev.kind && (" " !== ev.text || "icon" !== (null === (hv = vv[Sv + 1]) || void 0 === hv ? void 0 : hv.kind)) ? (Pv.length > 0 && zv.push(Pv), zv.push([ev]), Pv = []) : Pv.push(ev)
      }
      return Pv.length > 0 && zv.push(Pv), zv
    }
  },
  8413: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => ev,
      f: () => Sv
    });
    let hv = null;
    const Sv = function(vv) {
        const zv = {
          cycle: vv,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return hv = zv, () => {
          hv === zv && (hv = null)
        }
      },
      ev = () => {
        var vv;
        return null !== (vv = hv) && void 0 !== vv && vv.canCycle() ? hv.cycle : null
      }
  },
  36139: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => ev,
      c: () => sv,
      e: () => Cv,
      i: () => pv,
      k: () => Wv,
      o: () => iv,
      r: () => Tv,
      u: () => Gv,
      y: () => av,
      z: () => cv
    });
    var hv = Pv(22),
      Sv = Pv(26);
    const ev = "clientGameInventoryButtonsChanged",
      gv = new Map;

    function pv() {
      return [...gv.values()].sort(((vv, zv) => {
        var Pv, hv;
        return (null !== (Pv = vv.order) && void 0 !== Pv ? Pv : 0) - (null !== (hv = zv.order) && void 0 !== hv ? hv : 0)
      }))
    }
    let dv = null;

    function Nv(vv) {
      dv = vv
    }
    let lv = !1;

    function Tv(vv) {
      lv = !0;
      try {
        vv.onClick()
      } finally {
        lv = !1
      }
      vv.panel && "clientGame" === hv.c.get("openInGameMenuName") && Nv(vv.id)
    }

    function Wv() {
      return lv
    }

    function wv() {
      return pv().filter((vv => vv.panel && !vv.disabled))
    }

    function av(vv) {
      const zv = wv(),
        Pv = zv.findIndex((vv => vv.id === dv));
      return !(Pv < 0 || zv.length < 2) && (Tv(zv[(Pv + vv + zv.length) % zv.length]), !0)
    }

    function sv() {
      return null !== dv && wv().length > 1
    }

    function Cv() {
      Nv(null)
    }

    function iv() {
      "inventory" !== hv.c.get("openInGameMenuName") && Nv(null)
    }

    function cv() {
      const vv = dv;
      return Nv(null), vv
    }

    function Gv(vv) {
      return gv.set(vv.id, vv), Sv.j.zC(ev, pv(), !0), () => {
        gv.get(vv.id) === vv && (gv.delete(vv.id), Sv.j.zC(ev, pv()))
      }
    }
  },
  36137: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => pv,
      g: () => Cv,
      j: () => iv,
      m: () => Wv,
      q: () => Nv,
      r: () => sv,
      u: () => wv,
      w: () => lv
    });
    var hv = Pv(22),
      Sv = Pv(26),
      ev = Pv(1272),
      gv = Pv(36139);
    const pv = "clientGameUiChanged";
    let dv = null;

    function Nv() {
      return dv
    }

    function lv(vv, zv) {
      const Pv = {
        content: vv,
        menu: zv
      };
      return dv = Pv, Sv.j.zC(pv, dv, !0), () => {
        dv === Pv && (dv = null, av = !1, Cv(), Sv.j.zC(pv, null))
      }
    }
    let Tv = null;

    function Wv() {
      return Tv
    }

    function wv(vv) {
      return Tv = vv, () => {
        Tv === vv && (Tv = null)
      }
    }
    let av = !1;

    function sv() {
      const vv = hv.c.get("openInGameMenuName");
      "clientGame" !== vv && (av = "inventory" === vv), (0, gv.k)() || (0, gv.e)(), (0, ev.r)(ev.e), hv.c.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function Cv() {
      cv(!1)
    }

    function iv() {
      cv(av)
    }

    function cv(vv) {
      "clientGame" === hv.c.get("openInGameMenuName") && hv.c.set({
        openInGameMenuName: vv ? "inventory" : null
      }), vv || (0, gv.e)(), av = !1
    }
  },
  38042: (vv, zv, Pv) => {
    function hv(vv, zv, Pv) {
      const hv = new Set,
        Sv = new ResizeObserver(Pv),
        ev = () => {
          const zv = new Set(document.querySelectorAll(vv));
          let ev = !1;
          for (const vv of hv) zv.has(vv) || (Sv.unobserve(vv), hv.delete(vv), ev = !0);
          for (const vv of zv) hv.has(vv) || (Sv.observe(vv), gv.observe(vv, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), hv.add(vv));
          ev && Pv()
        },
        gv = new MutationObserver((zv => {
          zv.some((vv => "attributes" === vv.type)) && Pv(), zv.some((zv => function(vv, zv, Pv) {
            if ("childList" !== vv.type) return !1;
            for (const hv of vv.addedNodes)
              if (hv instanceof Element && (hv.matches(zv) || hv.querySelector(zv))) return !0;
            for (const hv of vv.removedNodes)
              if (hv instanceof Element)
                for (const vv of Pv)
                  if (hv.contains(vv)) return !0;
            return !1
          }(zv, vv, hv))) && ev()
        }));
      gv.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const pv of zv) Sv.observe(pv);
      return window.addEventListener("resize", Pv), ev(), Pv(), () => {
        Sv.disconnect(), gv.disconnect(), window.removeEventListener("resize", Pv)
      }
    }
    Pv.d(zv, {
      e: () => hv
    })
  },
  8561: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => pv,
      e: () => dv
    });
    var hv = Pv(22),
      Sv = Pv(1306),
      ev = Pv(73);
    const gv = {
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

    function pv() {
      return (0, ev.isMobile)() && "function" === typeof navigator.vibrate
    }
    const dv = new class {
      constructor(vv) {
        this.deps = vv, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(vv, zv) {
        var Pv;
        if (!this.deps.enabled()) return;
        const hv = gv[vv],
          Sv = null !== zv && void 0 !== zv ? zv : hv.pattern;
        if (null === Sv) return void console.warn("No vibration pattern for", vv);
        const ev = this.deps.now();
        ev - this.lastAnyAt < 40 && hv.priority < this.playingPriority || ev - (null !== (Pv = this.lastAt.get(vv)) && void 0 !== Pv ? Pv : -1 / 0) < hv.minGapMs || ev < this.playingUntil && hv.priority < this.playingPriority || (this.lastAt.set(vv, ev), this.lastAnyAt = ev, this.playingUntil = ev + Sv.reduce(((vv, zv) => vv + zv), 0), this.playingPriority = hv.priority, this.deps.vibrate(Sv))
      }
    }({
      vibrate: vv => {
        navigator.vibrate([...vv])
      },
      now: () => performance.now(),
      enabled: () => pv() && hv.c.get("isTouchScreen") && hv.c.get("clientEscMenuOptions").vibration && !(0, Sv.g)()
    })
  },
  36647: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => pv,
      g: () => gv
    });
    var hv = Pv(36639),
      Sv = Pv(312),
      ev = Pv(1855);

    function gv(vv) {
      if ("cS" in vv) return fv.createAnimationScript(vv);
      return new Nv(vv).createAnimationScript()
    }

    function pv(vv, zv, Pv, Sv) {
      const ev = vv.cS <= 0 ? 1 : zv + Pv * Math.max(0, Sv) / vv.cS;
      return vv.GS === hv.l.LoopOnLastFrame ? ev % 1 : vv.GS === hv.l.NoLoop && ev >= 1 ? null : Math.min(1, ev)
    }
    class dv {
      createAnimationScript(vv) {
        const {
          cS: zv,
          loop: Pv,
          mS: hv
        } = vv;
        return {
          cS: Math.round(zv),
          GS: this.createLoopMode(null !== Pv && void 0 !== Pv && Pv),
          mS: this.createNodeSkeletonAnimationScript(null !== hv && void 0 !== hv ? hv : null)
        }
      }
      createLoopMode(vv) {
        switch (vv) {
          case !1:
            return hv.l.NoLoop;
          case !0:
            return hv.l.LoopOnLastFrame;
          case "hold-on-last-frame":
            return hv.l.HoldOnLastFrame
        }
        throw new Error(`Invalid loop mode schema: ${vv}`)
      }
      createNodeSkeletonAnimationScript(vv) {
        if (null === vv) return null;
        const zv = {};
        for (const Pv in vv) {
          const hv = vv[Pv];
          zv[Pv] = this.createNodeAnimationScript(hv)
        }
        return zv
      }
      createNodeAnimationScript(vv) {
        const {
          timeline: zv
        } = vv, Pv = zv.filter((vv => Number.isFinite(vv.timeFraction)));
        return Pv.sort(((vv, zv) => vv.timeFraction - zv.timeFraction)), {
          rotation: this.createTimelineFromKeyframes(Pv, "rotation", Wv),
          position: this.createTimelineFromKeyframes(Pv, "position", av)
        }
      }
      createTimelineFromKeyframes(vv, zv, Pv) {
        const hv = [];
        for (const dv of vv) {
          const vv = dv[zv];
          if (vv) {
            const zv = this.createAnimationFrameWithoutPrecomputes(dv.timeFraction, vv);
            lv(zv) && hv.push(zv)
          }
        }
        const Sv = [];
        for (let dv = 0; dv < hv.length; dv++) {
          var ev, gv, pv;
          const vv = hv[dv],
            zv = null !== (ev = hv[dv - 1]) && void 0 !== ev ? ev : vv,
            Nv = null !== (gv = hv[dv + 1]) && void 0 !== gv ? gv : vv,
            lv = null !== (pv = hv[dv + 2]) && void 0 !== pv ? pv : Nv;
          Sv.push({
            ...vv,
            ...Pv(zv.post, zv.timeFraction, vv.post, vv.timeFraction, Nv.pre, Nv.timeFraction, lv.pre, lv.timeFraction)
          })
        }
        return Sv
      }
      createAnimationFrameWithoutPrecomputes(vv, zv) {
        let Pv, hv, Sv = null;
        var ev;
        if ("object" === typeof zv && "point" in zv) Sv = null !== (ev = zv.FS) && void 0 !== ev ? ev : null, Pv = zv.point, hv = zv.point;
        else if ("object" === typeof zv && "pre" in zv) {
          var gv;
          Sv = null !== (gv = zv.FS) && void 0 !== gv ? gv : null, Pv = zv.pre, hv = zv.post
        } else Pv = zv, hv = zv;
        return {
          timeFraction: vv,
          FS: this.createLerpMode(Sv),
          pre: Pv,
          post: hv
        }
      }
      createLerpMode(vv) {
        return null === vv ? hv.h.Linear : dv.LERP_MODE_SCHEMA_MAPPING[vv]
      }
    }
    dv.LERP_MODE_SCHEMA_MAPPING = {
      linear: hv.h.Linear,
      "catmull-rom-spline": hv.h.CatmullRomSpline
    };
    class Nv {
      constructor(vv) {
        this.animationSchema = vv
      }
      createAnimationScript() {
        const {
          animation_length: vv,
          loop: zv,
          bones: Pv
        } = this.animationSchema;
        return {
          cS: Math.round(1e3 * vv),
          GS: this.createLoopMode(null !== zv && void 0 !== zv && zv),
          mS: this.createNodeSkeletonAnimationScript(null !== Pv && void 0 !== Pv ? Pv : null)
        }
      }
      createLoopMode(vv) {
        switch (vv) {
          case !1:
            return hv.l.NoLoop;
          case !0:
            return hv.l.LoopOnLastFrame;
          case "hold_on_last_frame":
            return hv.l.HoldOnLastFrame
        }
        throw new Error(`Invalid Blockbench loop mode schema: ${vv}`)
      }
      createNodeSkeletonAnimationScript(vv) {
        if (null === vv) return null;
        const zv = {};
        for (const Pv in vv) {
          const hv = vv[Pv];
          zv[Pv] = this.createNodeAnimationScript(hv)
        }
        return zv
      }
      createNodeAnimationScript(vv) {
        const {
          rotation: zv,
          position: Pv
        } = vv;
        return {
          rotation: this.createAnimationTimeline(null !== zv && void 0 !== zv ? zv : null, Cv, Wv, !0),
          position: this.createAnimationTimeline(null !== Pv && void 0 !== Pv ? Pv : null, cv, av, !1)
        }
      }
      createAnimationTimeline(vv, zv, Pv, hv) {
        if (null === vv) return [];
        if (Array.isArray(vv)) {
          vv = {
            "0.0": vv
          }
        }
        const Sv = Object.entries(vv).map((vv => {
          let [Pv, hv] = vv;
          const Sv = Number(Pv) / this.animationSchema.animation_length;
          return this.createAnimationFrameWithoutPrecomputes(Sv, hv, zv)
        })).filter(lv);
        Sv.sort(((vv, zv) => vv.timeFraction - zv.timeFraction)), hv && function(vv) {
          for (let zv = 1; zv < vv.length; zv++) {
            const Pv = vv[zv - 1].post,
              hv = vv[zv],
              Sv = Gv(hv.pre),
              ev = Gv(hv.post),
              gv = jv(Pv, hv.pre);
            jv(Pv, Sv) < gv && (vv[zv] = {
              ...hv,
              pre: Sv,
              post: ev
            })
          }
        }(Sv);
        const ev = [];
        for (let Nv = 0; Nv < Sv.length; Nv++) {
          var gv, pv, dv;
          const vv = Sv[Nv],
            zv = null !== (gv = Sv[Nv - 1]) && void 0 !== gv ? gv : vv,
            hv = null !== (pv = Sv[Nv + 1]) && void 0 !== pv ? pv : vv,
            lv = null !== (dv = Sv[Nv + 2]) && void 0 !== dv ? dv : hv;
          ev.push({
            ...vv,
            ...Pv(zv.post, zv.timeFraction, vv.post, vv.timeFraction, hv.pre, hv.timeFraction, lv.pre, lv.timeFraction)
          })
        }
        return ev
      }
      createAnimationFrameWithoutPrecomputes(vv, zv, Pv) {
        let hv, Sv, ev = null;
        if ("object" === typeof zv && "post" in zv) {
          var gv;
          ev = null !== (gv = zv.lerp_mode) && void 0 !== gv ? gv : null, Sv = sv(zv.post, Pv), hv = zv.pre ? sv(zv.pre, Pv) : Sv
        } else {
          const vv = sv(zv, Pv);
          Sv = vv, hv = vv
        }
        return {
          timeFraction: vv,
          FS: this.createLerpMode(ev),
          pre: hv,
          post: Sv
        }
      }
      createLerpMode(vv) {
        return null === vv ? hv.h.Linear : Nv.LERP_MODE_SCHEMA_MAPPING[vv]
      }
    }

    function lv(vv) {
      return Number.isFinite(vv.timeFraction) && Tv(vv.pre) && Tv(vv.post)
    }

    function Tv(vv) {
      return Number.isFinite(vv[0]) && Number.isFinite(vv[1]) && Number.isFinite(vv[2])
    }

    function Wv(vv, zv, Pv, hv, Sv, ev, gv, pv) {
      const dv = ev - zv,
        Nv = ev - hv,
        lv = pv - hv,
        Tv = [null, null, null];
      for (let Wv = 0; Wv < Tv.length; Wv++) Tv[Wv] = wv(vv[Wv], Pv[Wv], Sv[Wv], gv[Wv], dv, lv);
      return {
        YS: Nv,
        nS: Tv
      }
    }

    function wv(vv, zv, Pv, hv, ev, gv) {
      return {
        DS: Sv.d.computeShortestRotation(vv, Pv) / ev,
        KS: Sv.d.computeShortestRotation(zv, hv) / gv,
        delta: Sv.d.computeShortestRotation(zv, Pv)
      }
    }

    function av(vv, zv, Pv, hv, Sv, ev, gv, pv) {
      const dv = ev - zv,
        Nv = ev - hv,
        lv = pv - hv,
        Tv = [null, null, null];
      for (let Wv = 0; Wv < Tv.length; Wv++) Tv[Wv] = {
        DS: (Sv[Wv] - vv[Wv]) / dv,
        KS: (gv[Wv] - Pv[Wv]) / lv,
        delta: Sv[Wv] - Pv[Wv]
      };
      return {
        YS: Nv,
        nS: Tv
      }
    }

    function sv(vv, zv) {
      return null === zv ? vv : zv(vv)
    }

    function Cv(vv) {
      const [zv, Pv, hv] = vv, gv = -(0, ev.k)(zv), pv = -(0, ev.k)(Pv), dv = (0, ev.k)(hv), Nv = Sv.d.quaternionFromEulerZYX(gv, pv, dv);
      return Sv.d.eulerYXZFromQuaternion(Nv)
    }
    Nv.LERP_MODE_SCHEMA_MAPPING = {
      linear: hv.h.Linear,
      catmullrom: hv.h.CatmullRomSpline
    };
    const iv = 1 / 16;

    function cv(vv) {
      return [-vv[0] * iv, vv[1] * iv, vv[2] * iv]
    }

    function Gv(vv) {
      const [zv, Pv, hv] = vv;
      return [zv >= 0 ? Math.PI - zv : -Math.PI - zv, mv(Pv + Math.PI), mv(hv + Math.PI)]
    }

    function mv(vv) {
      return Sv.d.mod(vv + Math.PI, 2 * Math.PI) - Math.PI
    }

    function jv(vv, zv) {
      return Math.abs(Sv.d.computeShortestRotation(vv[0], zv[0])) + Math.abs(Sv.d.computeShortestRotation(vv[1], zv[1])) + Math.abs(Sv.d.computeShortestRotation(vv[2], zv[2]))
    }
    const fv = new dv
  },
  36639: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => gv,
      f: () => ev,
      h: () => hv,
      l: () => Sv
    });
    let hv = function(vv) {
        return vv[vv.Linear = 0] = "Linear", vv[vv.CatmullRomSpline = 1] = "CatmullRomSpline", vv
      }({}),
      Sv = function(vv) {
        return vv[vv.NoLoop = 0] = "NoLoop", vv[vv.LoopOnLastFrame = 1] = "LoopOnLastFrame", vv[vv.HoldOnLastFrame = 2] = "HoldOnLastFrame", vv
      }({}),
      ev = function(vv) {
        return vv[vv.Movement = 0] = "Movement", vv[vv.Action = 1] = "Action", vv[vv.Emote = 2] = "Emote", vv[vv.Custom = 3] = "Custom", vv
      }({}),
      gv = function(vv) {
        return vv[vv.Start = 0] = "Start", vv[vv.Stop = 1] = "Stop", vv
      }({})
  },
  4592: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => Sv,
      e: () => hv,
      f: () => ev,
      h: () => dv,
      l: () => gv
    });
    const hv = ["sine", "triangle", "square", "sawtooth"],
      Sv = 55,
      ev = {
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

    function gv(vv) {
      return "string" !== typeof vv ? vv : Object.hasOwn(ev, vv) ? ev[vv] : null
    }

    function pv(vv, zv, Pv) {
      return Math.min(Pv, Math.max(zv, vv))
    }

    function dv(vv) {
      const zv = pv(vv.durationMs, 10, 500),
        Pv = pv(vv.attackMs, 0, zv),
        {
          intonation: Sv
        } = vv;
      return {
        waveform: hv.includes(vv.waveform) ? vv.waveform : "sine",
        pitchHz: pv(vv.pitchHz, 20, 4e3),
        glideSemitones: pv(vv.glideSemitones, -24, 24),
        durationMs: zv,
        attackMs: Pv,
        releaseMs: pv(vv.releaseMs, 0, zv - Pv),
        lowpassHz: null === vv.lowpassHz ? null : pv(vv.lowpassHz, 20, 2e4),
        volume: pv(vv.volume, 0, 2),
        intonation: {
          variationSemitones: pv(Sv.variationSemitones, 0, 6),
          declineSemitones: pv(Sv.declineSemitones, 0, 12),
          questionRiseSemitones: pv(Sv.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: pv(Sv.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: pv(vv.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);