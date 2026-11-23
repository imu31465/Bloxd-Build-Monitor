export const id = 25;
export const ids = [25];
export const modules = {
  36597: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => jk,
      f: () => ek,
      g: () => Zk,
      j: () => tk
    });
    var Xk = Ik(34164),
      Tk = Ik(36600),
      ik = Ik(36607),
      yk = Ik(8691),
      lk = Ik(1402),
      ak = Ik(58),
      qk = Ik(74),
      Lk = Ik(1096);

    function tk() {
      var kk;
      return (0, lk.f)(Tk.c, (0, Tk.m)()), (0, Lk.jsx)(Lk.Fragment, {
        children: null === (kk = (0, Tk.m)()) || void 0 === kk ? void 0 : kk.content
      })
    }

    function Zk(kk) {
      var Fk;
      let {
        show: Ik
      } = kk;
      (0, lk.f)(Tk.c, (0, Tk.m)());
      const qk = null === (Fk = (0, Tk.m)()) || void 0 === Fk ? void 0 : Fk.menu;
      return (0, ak.useEffect)((() => {
        var kk;
        Ik || (null === qk || void 0 === qk || null === (kk = qk.onClose) || void 0 === kk || kk.call(qk), (0, ik.r)())
      }), [Ik, qk]), (0, ak.useEffect)((() => Ik ? (0, yk.f)(ik.y, ik.i) : void 0), [Ik]), (0, Lk.jsx)(Xk.e, {
        showing: Ik,
        globallyUniqueKey: "clientGameMenu",
        children: null === qk || void 0 === qk ? void 0 : qk.content
      })
    }

    function jk(kk) {
      let {
        placement: Fk = "bottom"
      } = kk;
      return (0, Lk.jsx)("div", {
        id: `clientGameHud-${Fk}`,
        style: {
          display: "contents"
        }
      })
    }

    function ek(kk) {
      let {
        children: Fk,
        placement: Ik = "bottom"
      } = kk;
      const [Xk, Tk] = (0, ak.useState)(null);
      return (0, ak.useEffect)((() => {
        Tk(document.getElementById(`clientGameHud-${Ik}`))
      }), [Ik]), Xk ? (0, qk.createPortal)(Fk, Xk) : null
    }
  },
  4829: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => Hk,
      h: () => Jk
    });
    var Xk = Ik(1055),
      Tk = Ik.n(Xk),
      ik = Ik(58),
      yk = Ik(1179),
      lk = Ik(4833),
      ak = Ik(1849),
      qk = Ik(2349),
      Lk = Ik(4837),
      tk = Ik(1096);
    const Zk = new WeakMap;
    let jk = 0;

    function ek(kk) {
      let Fk = Zk.get(kk);
      return void 0 === Fk && (Fk = jk++, Zk.set(kk, Fk)), Fk
    }

    function wk(kk) {
      let {
        piece: Fk
      } = kk;
      return "space" === Fk.kind ? (0, tk.jsx)(tk.Fragment, {
        children: Fk.text
      }) : (0, tk.jsx)("span", {
        className: "DialogueWord",
        style: {
          "--word-delay": `${Fk.delayMs}ms`
        },
        children: (0, tk.jsx)(lk.b, {
          text: "icon" === Fk.kind ? `[[${Fk.icon}]]` : Fk.text
        })
      })
    }

    function Hk(kk) {
      let {
        display: Fk
      } = kk;
      const {
        selectedLanguage: Ik
      } = (0, yk.y)(), Xk = (0, ik.useMemo)((() => (0, Lk.d)((0, Lk.e)(Fk).plan.pieces)), [Fk, Ik.code]);
      return (0, tk.jsxs)("div", {
        className: Tk()("Dialogue", {
          DialogueAnimateIn: !1 !== Fk.animateIn
        }),
        children: [Fk.speakerName && (0, tk.jsx)(ak.c, {
          text: Fk.speakerName,
          className: "DialogueSpeaker"
        }), (0, tk.jsx)("p", {
          className: "DialogueLine",
          children: Xk.map(((kk, Fk) => 1 === kk.length && "space" === kk[0].kind ? kk[0].text : (0, tk.jsx)("span", {
            className: "DialogueGlue",
            children: kk.map(((kk, Fk) => (0, tk.jsx)(wk, {
              piece: kk
            }, Fk)))
          }, Fk)))
        })]
      })
    }
    const Jk = (0, ik.memo)((function() {
      const kk = (0, qk.j)("dialogue");
      return (0, tk.jsx)("div", {
        className: "DialogueAnchor",
        "data-camera-keeper": "",
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: kk && (0, tk.jsx)(Hk, {
          display: kk
        }, ek(kk))
      })
    }))
  },
  4833: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => lk
    });
    var Xk = Ik(58),
      Tk = Ik(318),
      ik = Ik(1864),
      yk = Ik(1096);

    function lk(kk) {
      let {
        text: Fk
      } = kk;
      const Ik = [];
      let lk = "";
      return (0, Tk.oc)(Fk).forEach(((kk, Fk) => {
        if ("string" === typeof kk || !(0, ik.e)(kk.icon)) return void(lk += "string" === typeof kk ? kk : kk.icon);
        const Tk = Math.max(0, lk.trimEnd().search(/\S{1,12}$/));
        Ik.push((0, yk.jsxs)(Xk.Fragment, {
          children: [lk.slice(0, Tk), (0, yk.jsxs)("span", {
            className: "InlineIconTextGlue",
            children: [lk.slice(Tk), (0, yk.jsx)("span", {
              className: "InlineIconTextIcon",
              role: "img",
              "aria-label": kk.icon,
              children: (0, yk.jsx)(ik.d, {
                itemName: kk.icon,
                amount: 0
              })
            })]
          })]
        }, Fk)), lk = ""
      })), Ik.push(lk), (0, yk.jsx)(yk.Fragment, {
        children: Ik
      })
    }
  },
  34164: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => ik
    });
    var Xk = Ik(4525),
      Tk = Ik(4529);

    function ik(kk) {
      let {
        children: Fk,
        showing: Ik,
        globallyUniqueKey: ik,
        alwaysMountChildren: yk = !1,
        doGameplayStartStopOnShow: lk = !0,
        keepsMovement: ak = !1
      } = kk;
      return (0, Tk.e)(!0, Ik, ik, ak), (0, Xk.b)(lk, Ik), Ik || yk ? Fk : null
    }
  },
  4837: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => bk,
      e: () => uk
    });
    var Xk = Ik(4843),
      Tk = Ik(318);
    const ik = 120,
      yk = 260,
      lk = 1.15,
      ak = 1.2,
      qk = 2,
      Lk = 1.08,
      tk = .8,
      Zk = .95,
      jk = 8,
      ek = "[\"')\\]\u300d\u300f\uff09]*",
      wk = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${ek}$`),
      Hk = new RegExp(`[?\uff1f]${ek}$`),
      Jk = new RegExp(`[!\uff01]${ek}$`),
      xk = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      Pk = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      Kk = new RegExp(`[${Pk}]`),
      Qk = new RegExp(`[${Pk}]|[^${Pk}]+`, "g"),
      sk = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function Vk(kk) {
      let Fk = 2166136261;
      for (let Ik = 0; Ik < kk.length; Ik++) Fk ^= kk.charCodeAt(Ik), Fk = Math.imul(Fk, 16777619);
      return (Fk >>> 0) / 4294967295 * 2 - 1
    }

    function zk(kk) {
      var Fk;
      if (Kk.test(kk)) return 1;
      const Ik = kk.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        Xk = Ik.replace(/[^0-9]/g, "");
      if (Xk.length > 0 && !/\p{L}/u.test(Ik)) return Math.min(Xk.length, 4);
      const Tk = null !== (Fk = Ik.match(sk)) && void 0 !== Fk ? Fk : [];
      if (0 === Tk.length) {
        var ik, yk;
        const kk = null !== (ik = null === (yk = Ik.match(/\p{L}/gu)) || void 0 === yk ? void 0 : yk.length) && void 0 !== ik ? ik : 0;
        return 0 === kk ? 0 : Math.min(Math.max(1, Math.round(kk / 2.5)), jk)
      }
      const lk = Ik.replace(/[^\p{L}]/gu, ""),
        ak = Tk.length > 1 && "e" === Tk.at(-1) && lk.endsWith("e") && !lk.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(kk.replace(/[^\p{L}]/gu, ""));
      return Math.min(Tk.length - (ak ? 1 : 0), jk)
    }

    function Sk(kk) {
      return kk.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function vk(kk) {
      const Fk = kk.replace(/[^\p{L}]/gu, "");
      return Fk.length >= 2 && Fk === Fk.toUpperCase() && Fk !== Fk.toLowerCase()
    }

    function Ek(kk, Fk) {
      var Ik;
      const jk = Fk && (0, Xk.k)(Fk),
        ek = null !== (Ik = null === jk || void 0 === jk ? void 0 : jk.syllableMs) && void 0 !== Ik ? Ik : Xk.b,
        Pk = function(kk) {
          const Fk = [];
          for (const Xk of (0, Tk.oc)(kk))
            if ("string" === typeof Xk)
              for (const kk of Xk.split(/(\s+)/)) {
                if ("" === kk) continue;
                if (/^\s+$/.test(kk)) {
                  Fk.push({
                    kind: "space",
                    text: kk
                  });
                  continue
                }
                if (!Kk.test(kk)) {
                  Fk.push({
                    kind: "word",
                    text: kk,
                    delayMs: 0
                  });
                  continue
                }
                let Xk = !0;
                for (const Tk of null !== (Ik = kk.match(Qk)) && void 0 !== Ik ? Ik : []) {
                  var Ik;
                  const kk = Fk.at(-1);
                  Xk || "word" !== (null === kk || void 0 === kk ? void 0 : kk.kind) || Kk.test(Tk) || /[\p{L}\p{N}]/u.test(Tk) ? (Xk || Fk.push({
                    kind: "space",
                    text: "\u200b"
                  }), Fk.push({
                    kind: "word",
                    text: Tk,
                    delayMs: 0
                  }), Xk = !1) : kk.text += Tk
                }
              } else Fk.push({
                kind: "icon",
                text: Xk.icon,
                delayMs: 0
              });
          return Fk
        }(kk),
        sk = [];
      let Ek = [];
      for (const Xk of Pk) "space" !== Xk.kind && (Ek.push(Xk), wk.test(Xk.text) && (sk.push(Ek), Ek = []));
      sk.push(Ek);
      const Ok = [];
      let nk = 0;
      for (const Xk of sk) {
        var Gk, pk;
        const kk = null !== (Gk = null === (pk = Xk.at(-1)) || void 0 === pk ? void 0 : pk.text) && void 0 !== Gk ? Gk : "",
          Fk = Hk.test(kk),
          Ik = Jk.test(kk),
          Tk = Xk.map((kk => "word" === kk.kind ? zk(kk.text) : 1)),
          Pk = Tk.findLastIndex((kk => kk > 0));
        for (const [Hk, Jk] of Xk.entries()) {
          const kk = "word" === Jk.kind,
            Xk = Tk[Hk];
          Jk.delayMs = nk;
          for (let Tk = 0; jk && Tk < Xk; Tk++) {
            const {
              intonation: ik
            } = jk;
            let yk = Pk > 0 ? -ik.declineSemitones * (Hk / Pk) : 0;
            yk += Vk(`${Sk(Jk.text)}|${Tk}`) * ik.variationSemitones;
            const wk = Math.min(1, ik.variationSemitones);
            let xk = jk.glideSemitones,
              Kk = 1;
            Ik && (yk += ik.exclaimLiftSemitones, Kk *= lk), Fk && Hk === Pk && (yk += ik.questionRiseSemitones * (Xk > 1 ? .5 + .5 * Tk / (Xk - 1) : 1), Tk === Xk - 1 && (xk = Math.abs(xk) + ik.questionRiseSemitones / 2)), kk && vk(Jk.text) && (yk += qk * wk, Kk *= ak), Xk > 1 && 0 === Tk && (yk += tk * wk, Kk *= Lk), Ok.push({
              atMs: nk + Tk * ek,
              semitones: yk,
              glideSemitones: xk,
              durationMs: Tk < Xk - 1 ? Math.min(jk.durationMs, ek * Zk) : jk.durationMs,
              level: Kk
            })
          }
          nk += Xk * ek + (wk.test(Jk.text) ? yk : xk.test(Jk.text) ? ik : 0)
        }
      }
      return {
        pieces: Pk.map((kk => "space" === kk.kind ? kk : "icon" === kk.kind ? {
          kind: "icon",
          icon: kk.text,
          delayMs: kk.delayMs
        } : {
          kind: "word",
          text: kk.text,
          delayMs: kk.delayMs
        })),
        blips: Ok
      }
    }
    var Ok = Ik(1179),
      nk = Ik(1241),
      Gk = Ik(1881);

    function pk(kk) {
      if ("string" === typeof kk) return kk;
      const Fk = nk.d.get().getCurrentLanguageCode();
      return (0, Ok.q)(Fk, kk.translationKey, (0, Ok.m)(kk.params, Gk.d.shown))
    }

    function uk(kk) {
      const Fk = void 0 === kk.voice ? null : (0, Xk.n)(kk.voice),
        Ik = Fk && (0, Xk.k)(Fk);
      return {
        plan: Ek(pk(kk.line), Ik),
        synth: Ik
      }
    }

    function bk(kk) {
      const Fk = [];
      let Ik = [];
      for (const [Tk, ik] of kk.entries()) {
        var Xk;
        "space" === ik.kind && (" " !== ik.text || "icon" !== (null === (Xk = kk[Tk + 1]) || void 0 === Xk ? void 0 : Xk.kind)) ? (Ik.length > 0 && Fk.push(Ik), Fk.push([ik]), Ik = []) : Ik.push(ik)
      }
      return Ik.length > 0 && Fk.push(Ik), Fk
    }
  },
  8691: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => ik,
      f: () => Tk
    });
    let Xk = null;
    const Tk = function(kk) {
        const Fk = {
          cycle: kk,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Xk = Fk, () => {
          Xk === Fk && (Xk = null)
        }
      },
      ik = () => {
        var kk;
        return null !== (kk = Xk) && void 0 !== kk && kk.canCycle() ? Xk.cycle : null
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
  38503: (kk, Fk, Ik) => {
    function Xk(kk, Fk, Ik) {
      const Xk = new Set,
        Tk = new ResizeObserver(Ik),
        ik = () => {
          const Fk = new Set(document.querySelectorAll(kk));
          let ik = !1;
          for (const kk of Xk) Fk.has(kk) || (Tk.unobserve(kk), Xk.delete(kk), ik = !0);
          for (const kk of Fk) Xk.has(kk) || (Tk.observe(kk), yk.observe(kk, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), Xk.add(kk));
          ik && Ik()
        },
        yk = new MutationObserver((Fk => {
          Fk.some((kk => "attributes" === kk.type)) && Ik(), Fk.some((Fk => function(kk, Fk, Ik) {
            if ("childList" !== kk.type) return !1;
            for (const Xk of kk.addedNodes)
              if (Xk instanceof Element && (Xk.matches(Fk) || Xk.querySelector(Fk))) return !0;
            for (const Xk of kk.removedNodes)
              if (Xk instanceof Element)
                for (const kk of Ik)
                  if (Xk.contains(kk)) return !0;
            return !1
          }(Fk, kk, Xk))) && ik()
        }));
      yk.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const lk of Fk) Tk.observe(lk);
      return window.addEventListener("resize", Ik), ik(), Ik(), () => {
        Tk.disconnect(), yk.disconnect(), window.removeEventListener("resize", Ik)
      }
    }
    Ik.d(Fk, {
      b: () => Xk
    })
  },
  8862: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => lk,
      h: () => ak
    });
    var Xk = Ik(25),
      Tk = Ik(1301),
      ik = Ik(95);
    const yk = {
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

    function lk() {
      return (0, ik.isMobile)() && "function" === typeof navigator.vibrate
    }
    const ak = new class {
      constructor(kk) {
        this.deps = kk, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(kk, Fk) {
        var Ik;
        if (!this.deps.enabled()) return;
        const Xk = yk[kk],
          Tk = null !== Fk && void 0 !== Fk ? Fk : Xk.pattern;
        if (null === Tk) return void console.warn("No vibration pattern for", kk);
        const ik = this.deps.now();
        ik - this.lastAnyAt < 40 && Xk.priority < this.playingPriority || ik - (null !== (Ik = this.lastAt.get(kk)) && void 0 !== Ik ? Ik : -1 / 0) < Xk.minGapMs || ik < this.playingUntil && Xk.priority < this.playingPriority || (this.lastAt.set(kk, ik), this.lastAnyAt = ik, this.playingUntil = ik + Tk.reduce(((kk, Fk) => kk + Fk), 0), this.playingPriority = Xk.priority, this.deps.vibrate(Tk))
      }
    }({
      vibrate: kk => {
        navigator.vibrate([...kk])
      },
      now: () => performance.now(),
      enabled: () => lk() && Xk.d.get("isTouchScreen") && Xk.d.get("clientEscMenuOptions").vibration && !(0, Tk.h)()
    })
  },
  37224: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => lk,
      i: () => yk
    });
    var Xk = Ik(37215),
      Tk = Ik(337),
      ik = Ik(1844);

    function yk(kk) {
      if ("ki" in kk) return sk.createAnimationScript(kk);
      return new qk(kk).createAnimationScript()
    }

    function lk(kk, Fk, Ik, Tk) {
      const ik = kk.ki <= 0 ? 1 : Fk + Ik * Math.max(0, Tk) / kk.ki;
      return kk.Fi === Xk.k.LoopOnLastFrame ? ik % 1 : kk.Fi === Xk.k.NoLoop && ik >= 1 ? null : Math.min(1, ik)
    }
    class ak {
      createAnimationScript(kk) {
        const {
          ki: Fk,
          loop: Ik,
          Ii: Xk
        } = kk;
        return {
          ki: Math.round(Fk),
          Fi: this.createLoopMode(null !== Ik && void 0 !== Ik && Ik),
          Ii: this.createNodeSkeletonAnimationScript(null !== Xk && void 0 !== Xk ? Xk : null)
        }
      }
      createLoopMode(kk) {
        switch (kk) {
          case !1:
            return Xk.k.NoLoop;
          case !0:
            return Xk.k.LoopOnLastFrame;
          case "hold-on-last-frame":
            return Xk.k.HoldOnLastFrame
        }
        throw new Error(`Invalid loop mode schema: ${kk}`)
      }
      createNodeSkeletonAnimationScript(kk) {
        if (null === kk) return null;
        const Fk = {};
        for (const Ik in kk) {
          const Xk = kk[Ik];
          Fk[Ik] = this.createNodeAnimationScript(Xk)
        }
        return Fk
      }
      createNodeAnimationScript(kk) {
        const {
          timeline: Fk
        } = kk, Ik = Fk.filter((kk => Number.isFinite(kk.timeFraction)));
        return Ik.sort(((kk, Fk) => kk.timeFraction - Fk.timeFraction)), {
          rotation: this.createTimelineFromKeyframes(Ik, "rotation", Zk),
          position: this.createTimelineFromKeyframes(Ik, "position", ek)
        }
      }
      createTimelineFromKeyframes(kk, Fk, Ik) {
        const Xk = [];
        for (const ak of kk) {
          const kk = ak[Fk];
          if (kk) {
            const Fk = this.createAnimationFrameWithoutPrecomputes(ak.timeFraction, kk);
            Lk(Fk) && Xk.push(Fk)
          }
        }
        const Tk = [];
        for (let ak = 0; ak < Xk.length; ak++) {
          var ik, yk, lk;
          const kk = Xk[ak],
            Fk = null !== (ik = Xk[ak - 1]) && void 0 !== ik ? ik : kk,
            qk = null !== (yk = Xk[ak + 1]) && void 0 !== yk ? yk : kk,
            Lk = null !== (lk = Xk[ak + 2]) && void 0 !== lk ? lk : qk;
          Tk.push({
            ...kk,
            ...Ik(Fk.post, Fk.timeFraction, kk.post, kk.timeFraction, qk.pre, qk.timeFraction, Lk.pre, Lk.timeFraction)
          })
        }
        return Tk
      }
      createAnimationFrameWithoutPrecomputes(kk, Fk) {
        let Ik, Xk, Tk = null;
        var ik;
        if ("object" === typeof Fk && "point" in Fk) Tk = null !== (ik = Fk.ii) && void 0 !== ik ? ik : null, Ik = Fk.point, Xk = Fk.point;
        else if ("object" === typeof Fk && "pre" in Fk) {
          var yk;
          Tk = null !== (yk = Fk.ii) && void 0 !== yk ? yk : null, Ik = Fk.pre, Xk = Fk.post
        } else Ik = Fk, Xk = Fk;
        return {
          timeFraction: kk,
          ii: this.createLerpMode(Tk),
          pre: Ik,
          post: Xk
        }
      }
      createLerpMode(kk) {
        return null === kk ? Xk.g.Linear : ak.LERP_MODE_SCHEMA_MAPPING[kk]
      }
    }
    ak.LERP_MODE_SCHEMA_MAPPING = {
      linear: Xk.g.Linear,
      "catmull-rom-spline": Xk.g.CatmullRomSpline
    };
    class qk {
      constructor(kk) {
        this.animationSchema = kk
      }
      createAnimationScript() {
        const {
          animation_length: kk,
          loop: Fk,
          bones: Ik
        } = this.animationSchema;
        return {
          ki: Math.round(1e3 * kk),
          Fi: this.createLoopMode(null !== Fk && void 0 !== Fk && Fk),
          Ii: this.createNodeSkeletonAnimationScript(null !== Ik && void 0 !== Ik ? Ik : null)
        }
      }
      createLoopMode(kk) {
        switch (kk) {
          case !1:
            return Xk.k.NoLoop;
          case !0:
            return Xk.k.LoopOnLastFrame;
          case "hold_on_last_frame":
            return Xk.k.HoldOnLastFrame
        }
        throw new Error(`Invalid Blockbench loop mode schema: ${kk}`)
      }
      createNodeSkeletonAnimationScript(kk) {
        if (null === kk) return null;
        const Fk = {};
        for (const Ik in kk) {
          const Xk = kk[Ik];
          Fk[Ik] = this.createNodeAnimationScript(Xk)
        }
        return Fk
      }
      createNodeAnimationScript(kk) {
        const {
          rotation: Fk,
          position: Ik
        } = kk;
        return {
          rotation: this.createAnimationTimeline(null !== Fk && void 0 !== Fk ? Fk : null, Hk, Zk, !0),
          position: this.createAnimationTimeline(null !== Ik && void 0 !== Ik ? Ik : null, xk, ek, !1)
        }
      }
      createAnimationTimeline(kk, Fk, Ik, Xk) {
        if (null === kk) return [];
        if (Array.isArray(kk)) {
          kk = {
            "0.0": kk
          }
        }
        const Tk = Object.entries(kk).map((kk => {
          let [Ik, Xk] = kk;
          const Tk = Number(Ik) / this.animationSchema.animation_length;
          return this.createAnimationFrameWithoutPrecomputes(Tk, Xk, Fk)
        })).filter(Lk);
        Tk.sort(((kk, Fk) => kk.timeFraction - Fk.timeFraction)), Xk && function(kk) {
          for (let Fk = 1; Fk < kk.length; Fk++) {
            const Ik = kk[Fk - 1].post,
              Xk = kk[Fk],
              Tk = Pk(Xk.pre),
              ik = Pk(Xk.post),
              yk = Qk(Ik, Xk.pre);
            Qk(Ik, Tk) < yk && (kk[Fk] = {
              ...Xk,
              pre: Tk,
              post: ik
            })
          }
        }(Tk);
        const ik = [];
        for (let qk = 0; qk < Tk.length; qk++) {
          var yk, lk, ak;
          const kk = Tk[qk],
            Fk = null !== (yk = Tk[qk - 1]) && void 0 !== yk ? yk : kk,
            Xk = null !== (lk = Tk[qk + 1]) && void 0 !== lk ? lk : kk,
            Lk = null !== (ak = Tk[qk + 2]) && void 0 !== ak ? ak : Xk;
          ik.push({
            ...kk,
            ...Ik(Fk.post, Fk.timeFraction, kk.post, kk.timeFraction, Xk.pre, Xk.timeFraction, Lk.pre, Lk.timeFraction)
          })
        }
        return ik
      }
      createAnimationFrameWithoutPrecomputes(kk, Fk, Ik) {
        let Xk, Tk, ik = null;
        if ("object" === typeof Fk && "post" in Fk) {
          var yk;
          ik = null !== (yk = Fk.lerp_mode) && void 0 !== yk ? yk : null, Tk = wk(Fk.post, Ik), Xk = Fk.pre ? wk(Fk.pre, Ik) : Tk
        } else {
          const kk = wk(Fk, Ik);
          Tk = kk, Xk = kk
        }
        return {
          timeFraction: kk,
          ii: this.createLerpMode(ik),
          pre: Xk,
          post: Tk
        }
      }
      createLerpMode(kk) {
        return null === kk ? Xk.g.Linear : qk.LERP_MODE_SCHEMA_MAPPING[kk]
      }
    }

    function Lk(kk) {
      return Number.isFinite(kk.timeFraction) && tk(kk.pre) && tk(kk.post)
    }

    function tk(kk) {
      return Number.isFinite(kk[0]) && Number.isFinite(kk[1]) && Number.isFinite(kk[2])
    }

    function Zk(kk, Fk, Ik, Xk, Tk, ik, yk, lk) {
      const ak = ik - Fk,
        qk = ik - Xk,
        Lk = lk - Xk,
        tk = [null, null, null];
      for (let Zk = 0; Zk < tk.length; Zk++) tk[Zk] = jk(kk[Zk], Ik[Zk], Tk[Zk], yk[Zk], ak, Lk);
      return {
        yi: qk,
        li: tk
      }
    }

    function jk(kk, Fk, Ik, Xk, ik, yk) {
      return {
        qi: Tk.e.computeShortestRotation(kk, Ik) / ik,
        Li: Tk.e.computeShortestRotation(Fk, Xk) / yk,
        delta: Tk.e.computeShortestRotation(Fk, Ik)
      }
    }

    function ek(kk, Fk, Ik, Xk, Tk, ik, yk, lk) {
      const ak = ik - Fk,
        qk = ik - Xk,
        Lk = lk - Xk,
        tk = [null, null, null];
      for (let Zk = 0; Zk < tk.length; Zk++) tk[Zk] = {
        qi: (Tk[Zk] - kk[Zk]) / ak,
        Li: (yk[Zk] - Ik[Zk]) / Lk,
        delta: Tk[Zk] - Ik[Zk]
      };
      return {
        yi: qk,
        li: tk
      }
    }

    function wk(kk, Fk) {
      return null === Fk ? kk : Fk(kk)
    }

    function Hk(kk) {
      const [Fk, Ik, Xk] = kk, yk = -(0, ik.k)(Fk), lk = -(0, ik.k)(Ik), ak = (0, ik.k)(Xk), qk = Tk.e.quaternionFromEulerZYX(yk, lk, ak);
      return Tk.e.eulerYXZFromQuaternion(qk)
    }
    qk.LERP_MODE_SCHEMA_MAPPING = {
      linear: Xk.g.Linear,
      catmullrom: Xk.g.CatmullRomSpline
    };
    const Jk = 1 / 16;

    function xk(kk) {
      return [-kk[0] * Jk, kk[1] * Jk, kk[2] * Jk]
    }

    function Pk(kk) {
      const [Fk, Ik, Xk] = kk;
      return [Fk >= 0 ? Math.PI - Fk : -Math.PI - Fk, Kk(Ik + Math.PI), Kk(Xk + Math.PI)]
    }

    function Kk(kk) {
      return Tk.e.mod(kk + Math.PI, 2 * Math.PI) - Math.PI
    }

    function Qk(kk, Fk) {
      return Math.abs(Tk.e.computeShortestRotation(kk[0], Fk[0])) + Math.abs(Tk.e.computeShortestRotation(kk[1], Fk[1])) + Math.abs(Tk.e.computeShortestRotation(kk[2], Fk[2]))
    }
    const sk = new ak
  },
  37215: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => yk,
      c: () => ik,
      g: () => Xk,
      k: () => Tk
    });
    let Xk = function(kk) {
        return kk[kk.Linear = 0] = "Linear", kk[kk.CatmullRomSpline = 1] = "CatmullRomSpline", kk
      }({}),
      Tk = function(kk) {
        return kk[kk.NoLoop = 0] = "NoLoop", kk[kk.LoopOnLastFrame = 1] = "LoopOnLastFrame", kk[kk.HoldOnLastFrame = 2] = "HoldOnLastFrame", kk
      }({}),
      ik = function(kk) {
        return kk[kk.Movement = 0] = "Movement", kk[kk.Action = 1] = "Action", kk[kk.Emote = 2] = "Emote", kk[kk.Custom = 3] = "Custom", kk
      }({}),
      yk = function(kk) {
        return kk[kk.Start = 0] = "Start", kk[kk.Stop = 1] = "Stop", kk
      }({})
  },
  4843: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Tk,
      d: () => Xk,
      g: () => ik,
      k: () => ak,
      n: () => yk
    });
    const Xk = ["sine", "triangle", "square", "sawtooth"],
      Tk = 55,
      ik = {
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

    function yk(kk) {
      return "string" !== typeof kk ? kk : Object.hasOwn(ik, kk) ? ik[kk] : null
    }

    function lk(kk, Fk, Ik) {
      return Math.min(Ik, Math.max(Fk, kk))
    }

    function ak(kk) {
      const Fk = lk(kk.durationMs, 10, 500),
        Ik = lk(kk.attackMs, 0, Fk),
        {
          intonation: Tk
        } = kk;
      return {
        waveform: Xk.includes(kk.waveform) ? kk.waveform : "sine",
        pitchHz: lk(kk.pitchHz, 20, 4e3),
        glideSemitones: lk(kk.glideSemitones, -24, 24),
        durationMs: Fk,
        attackMs: Ik,
        releaseMs: lk(kk.releaseMs, 0, Fk - Ik),
        lowpassHz: null === kk.lowpassHz ? null : lk(kk.lowpassHz, 20, 2e4),
        volume: lk(kk.volume, 0, 2),
        intonation: {
          variationSemitones: lk(Tk.variationSemitones, 0, 6),
          declineSemitones: lk(Tk.declineSemitones, 0, 12),
          questionRiseSemitones: lk(Tk.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: lk(Tk.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: lk(kk.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);