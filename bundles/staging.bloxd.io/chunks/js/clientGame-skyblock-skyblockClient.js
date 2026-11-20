export const id = 25;
export const ids = [25];
export const modules = {
  36329: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Ak,
      g: () => ek,
      j: () => Jk,
      n: () => Vk
    });
    var Rk = Bk(9004),
      tk = Bk(36332),
      ak = Bk(36340),
      Xk = Bk(8372),
      bk = Bk(1387),
      wk = Bk(61),
      dk = Bk(67),
      sk = Bk(1069);

    function Vk() {
      var kk;
      return (0, bk.g)(tk.c, (0, tk.o)()), (0, sk.jsx)(sk.Fragment, {
        children: null === (kk = (0, tk.o)()) || void 0 === kk ? void 0 : kk.content
      })
    }

    function Jk(kk) {
      var Fk;
      let {
        show: Bk
      } = kk;
      (0, bk.g)(tk.c, (0, tk.o)());
      const dk = null === (Fk = (0, tk.o)()) || void 0 === Fk ? void 0 : Fk.menu;
      return (0, wk.useEffect)((() => {
        var kk;
        Bk || (null === dk || void 0 === dk || null === (kk = dk.onClose) || void 0 === kk || kk.call(dk), (0, ak.u)())
      }), [Bk, dk]), (0, wk.useEffect)((() => Bk ? (0, Xk.h)(ak.C, ak.h) : void 0), [Bk]), (0, sk.jsx)(Rk.d, {
        showing: Bk,
        globallyUniqueKey: "clientGameMenu",
        children: null === dk || void 0 === dk ? void 0 : dk.content
      })
    }

    function Ak(kk) {
      let {
        placement: Fk = "bottom"
      } = kk;
      return (0, sk.jsx)("div", {
        id: `clientGameHud-${Fk}`,
        style: {
          display: "contents"
        }
      })
    }

    function ek(kk) {
      let {
        children: Fk,
        placement: Bk = "bottom"
      } = kk;
      const [Rk, tk] = (0, wk.useState)(null);
      return (0, wk.useEffect)((() => {
        tk(document.getElementById(`clientGameHud-${Bk}`))
      }), [Bk]), Rk ? (0, dk.createPortal)(Fk, Rk) : null
    }
  },
  4559: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => fk,
      f: () => mk
    });
    var Rk = Bk(1020),
      tk = Bk.n(Rk),
      ak = Bk(61),
      Xk = Bk(1149),
      bk = Bk(4566),
      wk = Bk(1812),
      dk = Bk(2320),
      sk = Bk(4568),
      Vk = Bk(1069);
    const Jk = new WeakMap;
    let Ak = 0;

    function ek(kk) {
      let Fk = Jk.get(kk);
      return void 0 === Fk && (Fk = Ak++, Jk.set(kk, Fk)), Fk
    }

    function yk(kk) {
      let {
        piece: Fk
      } = kk;
      return "space" === Fk.kind ? (0, Vk.jsx)(Vk.Fragment, {
        children: Fk.text
      }) : (0, Vk.jsx)("span", {
        className: "DialogueWord",
        style: {
          "--word-delay": `${Fk.delayMs}ms`
        },
        children: (0, Vk.jsx)(bk.c, {
          text: "icon" === Fk.kind ? `[[${Fk.icon}]]` : Fk.text
        })
      })
    }

    function fk(kk) {
      let {
        display: Fk
      } = kk;
      const {
        selectedLanguage: Bk
      } = (0, Xk.x)(), Rk = (0, ak.useMemo)((() => (0, sk.e)((0, sk.h)(Fk).plan.pieces)), [Fk, Bk.code]);
      return (0, Vk.jsxs)("div", {
        className: tk()("Dialogue", {
          DialogueAnimateIn: !1 !== Fk.animateIn
        }),
        children: [Fk.speakerName && (0, Vk.jsx)(wk.d, {
          text: Fk.speakerName,
          className: "DialogueSpeaker"
        }), (0, Vk.jsx)("p", {
          className: "DialogueLine",
          children: Rk.map(((kk, Fk) => 1 === kk.length && "space" === kk[0].kind ? kk[0].text : (0, Vk.jsx)("span", {
            className: "DialogueGlue",
            children: kk.map(((kk, Fk) => (0, Vk.jsx)(yk, {
              piece: kk
            }, Fk)))
          }, Fk)))
        })]
      })
    }
    const mk = (0, ak.memo)((function() {
      const kk = (0, dk.j)("dialogue");
      return (0, Vk.jsx)("div", {
        className: "DialogueAnchor",
        "data-camera-keeper": "",
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: kk && (0, Vk.jsx)(fk, {
          display: kk
        }, ek(kk))
      })
    }))
  },
  4566: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => bk
    });
    var Rk = Bk(61),
      tk = Bk(279),
      ak = Bk(1835),
      Xk = Bk(1069);

    function bk(kk) {
      let {
        text: Fk
      } = kk;
      const Bk = [];
      let bk = "";
      return (0, tk.bc)(Fk).forEach(((kk, Fk) => {
        if ("string" === typeof kk || !(0, ak.f)(kk.icon)) return void(bk += "string" === typeof kk ? kk : kk.icon);
        const tk = Math.max(0, bk.trimEnd().search(/\S{1,12}$/));
        Bk.push((0, Xk.jsxs)(Rk.Fragment, {
          children: [bk.slice(0, tk), (0, Xk.jsxs)("span", {
            className: "InlineIconTextGlue",
            children: [bk.slice(tk), (0, Xk.jsx)("span", {
              className: "InlineIconTextIcon",
              role: "img",
              "aria-label": kk.icon,
              children: (0, Xk.jsx)(ak.e, {
                itemName: kk.icon,
                amount: 0
              })
            })]
          })]
        }, Fk)), bk = ""
      })), Bk.push(bk), (0, Xk.jsx)(Xk.Fragment, {
        children: Bk
      })
    }
  },
  9004: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => ak
    });
    var Rk = Bk(4277),
      tk = Bk(4283);

    function ak(kk) {
      let {
        children: Fk,
        showing: Bk,
        globallyUniqueKey: ak,
        alwaysMountChildren: Xk = !1,
        doGameplayStartStopOnShow: bk = !0,
        keepsMovement: wk = !1
      } = kk;
      return (0, tk.d)(!0, Bk, ak, wk), (0, Rk.e)(bk, Bk), Bk || Xk ? Fk : null
    }
  },
  4568: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Gk,
      h: () => ck
    });
    var Rk = Bk(4570),
      tk = Bk(279);
    const ak = 120,
      Xk = 260,
      bk = 1.15,
      wk = 1.2,
      dk = 2,
      sk = 1.08,
      Vk = .8,
      Jk = .95,
      Ak = 8,
      ek = "[\"')\\]\u300d\u300f\uff09]*",
      yk = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${ek}$`),
      fk = new RegExp(`[?\uff1f]${ek}$`),
      mk = new RegExp(`[!\uff01]${ek}$`),
      Wk = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      vk = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      ik = new RegExp(`[${vk}]`),
      Yk = new RegExp(`[${vk}]|[^${vk}]+`, "g"),
      Lk = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function Ok(kk) {
      let Fk = 2166136261;
      for (let Bk = 0; Bk < kk.length; Bk++) Fk ^= kk.charCodeAt(Bk), Fk = Math.imul(Fk, 16777619);
      return (Fk >>> 0) / 4294967295 * 2 - 1
    }

    function Ek(kk) {
      var Fk;
      if (ik.test(kk)) return 1;
      const Bk = kk.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        Rk = Bk.replace(/[^0-9]/g, "");
      if (Rk.length > 0 && !/\p{L}/u.test(Bk)) return Math.min(Rk.length, 4);
      const tk = null !== (Fk = Bk.match(Lk)) && void 0 !== Fk ? Fk : [];
      if (0 === tk.length) {
        var ak, Xk;
        const kk = null !== (ak = null === (Xk = Bk.match(/\p{L}/gu)) || void 0 === Xk ? void 0 : Xk.length) && void 0 !== ak ? ak : 0;
        return 0 === kk ? 0 : Math.min(Math.max(1, Math.round(kk / 2.5)), Ak)
      }
      const bk = Bk.replace(/[^\p{L}]/gu, ""),
        wk = tk.length > 1 && "e" === tk.at(-1) && bk.endsWith("e") && !bk.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(kk.replace(/[^\p{L}]/gu, ""));
      return Math.min(tk.length - (wk ? 1 : 0), Ak)
    }

    function Sk(kk) {
      return kk.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function Nk(kk) {
      const Fk = kk.replace(/[^\p{L}]/gu, "");
      return Fk.length >= 2 && Fk === Fk.toUpperCase() && Fk !== Fk.toLowerCase()
    }

    function Hk(kk, Fk) {
      var Bk;
      const Ak = Fk && (0, Rk.l)(Fk),
        ek = null !== (Bk = null === Ak || void 0 === Ak ? void 0 : Ak.syllableMs) && void 0 !== Bk ? Bk : Rk.e,
        vk = function(kk) {
          const Fk = [];
          for (const Rk of (0, tk.bc)(kk))
            if ("string" === typeof Rk)
              for (const kk of Rk.split(/(\s+)/)) {
                if ("" === kk) continue;
                if (/^\s+$/.test(kk)) {
                  Fk.push({
                    kind: "space",
                    text: kk
                  });
                  continue
                }
                if (!ik.test(kk)) {
                  Fk.push({
                    kind: "word",
                    text: kk,
                    delayMs: 0
                  });
                  continue
                }
                let Rk = !0;
                for (const tk of null !== (Bk = kk.match(Yk)) && void 0 !== Bk ? Bk : []) {
                  var Bk;
                  const kk = Fk.at(-1);
                  Rk || "word" !== (null === kk || void 0 === kk ? void 0 : kk.kind) || ik.test(tk) || /[\p{L}\p{N}]/u.test(tk) ? (Rk || Fk.push({
                    kind: "space",
                    text: "\u200b"
                  }), Fk.push({
                    kind: "word",
                    text: tk,
                    delayMs: 0
                  }), Rk = !1) : kk.text += tk
                }
              } else Fk.push({
                kind: "icon",
                text: Rk.icon,
                delayMs: 0
              });
          return Fk
        }(kk),
        Lk = [];
      let Hk = [];
      for (const Rk of vk) "space" !== Rk.kind && (Hk.push(Rk), yk.test(Rk.text) && (Lk.push(Hk), Hk = []));
      Lk.push(Hk);
      const uk = [];
      let Mk = 0;
      for (const Rk of Lk) {
        var gk, Uk;
        const kk = null !== (gk = null === (Uk = Rk.at(-1)) || void 0 === Uk ? void 0 : Uk.text) && void 0 !== gk ? gk : "",
          Fk = fk.test(kk),
          Bk = mk.test(kk),
          tk = Rk.map((kk => "word" === kk.kind ? Ek(kk.text) : 1)),
          vk = tk.findLastIndex((kk => kk > 0));
        for (const [fk, mk] of Rk.entries()) {
          const kk = "word" === mk.kind,
            Rk = tk[fk];
          mk.delayMs = Mk;
          for (let tk = 0; Ak && tk < Rk; tk++) {
            const {
              intonation: ak
            } = Ak;
            let Xk = vk > 0 ? -ak.declineSemitones * (fk / vk) : 0;
            Xk += Ok(`${Sk(mk.text)}|${tk}`) * ak.variationSemitones;
            const yk = Math.min(1, ak.variationSemitones);
            let Wk = Ak.glideSemitones,
              ik = 1;
            Bk && (Xk += ak.exclaimLiftSemitones, ik *= bk), Fk && fk === vk && (Xk += ak.questionRiseSemitones * (Rk > 1 ? .5 + .5 * tk / (Rk - 1) : 1), tk === Rk - 1 && (Wk = Math.abs(Wk) + ak.questionRiseSemitones / 2)), kk && Nk(mk.text) && (Xk += dk * yk, ik *= wk), Rk > 1 && 0 === tk && (Xk += Vk * yk, ik *= sk), uk.push({
              atMs: Mk + tk * ek,
              semitones: Xk,
              glideSemitones: Wk,
              durationMs: tk < Rk - 1 ? Math.min(Ak.durationMs, ek * Jk) : Ak.durationMs,
              level: ik
            })
          }
          Mk += Rk * ek + (yk.test(mk.text) ? Xk : Wk.test(mk.text) ? ak : 0)
        }
      }
      return {
        pieces: vk.map((kk => "space" === kk.kind ? kk : "icon" === kk.kind ? {
          kind: "icon",
          icon: kk.text,
          delayMs: kk.delayMs
        } : {
          kind: "word",
          text: kk.text,
          delayMs: kk.delayMs
        })),
        blips: uk
      }
    }
    var uk = Bk(1149),
      Mk = Bk(1203),
      gk = Bk(1849);

    function Uk(kk) {
      if ("string" === typeof kk) return kk;
      const Fk = Mk.c.get().getCurrentLanguageCode();
      return (0, uk.m)(Fk, kk.translationKey, (0, uk.k)(kk.params, gk.b.shown))
    }

    function ck(kk) {
      const Fk = void 0 === kk.voice ? null : (0, Rk.m)(kk.voice),
        Bk = Fk && (0, Rk.l)(Fk);
      return {
        plan: Hk(Uk(kk.line), Bk),
        synth: Bk
      }
    }

    function Gk(kk) {
      const Fk = [];
      let Bk = [];
      for (const [tk, ak] of kk.entries()) {
        var Rk;
        "space" === ak.kind && (" " !== ak.text || "icon" !== (null === (Rk = kk[tk + 1]) || void 0 === Rk ? void 0 : Rk.kind)) ? (Bk.length > 0 && Fk.push(Bk), Fk.push([ak]), Bk = []) : Bk.push(ak)
      }
      return Bk.length > 0 && Fk.push(Bk), Fk
    }
  },
  8372: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => ak,
      h: () => tk
    });
    let Rk = null;
    const tk = function(kk) {
        const Fk = {
          cycle: kk,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Rk = Fk, () => {
          Rk === Fk && (Rk = null)
        }
      },
      ak = () => {
        var kk;
        return null !== (kk = Rk) && void 0 !== kk && kk.canCycle() ? Rk.cycle : null
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
  38148: (kk, Fk, Bk) => {
    function Rk(kk, Fk, Bk) {
      const Rk = new Set,
        tk = new ResizeObserver(Bk),
        ak = () => {
          const Fk = new Set(document.querySelectorAll(kk));
          let ak = !1;
          for (const kk of Rk) Fk.has(kk) || (tk.unobserve(kk), Rk.delete(kk), ak = !0);
          for (const kk of Fk) Rk.has(kk) || (tk.observe(kk), Xk.observe(kk, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), Rk.add(kk));
          ak && Bk()
        },
        Xk = new MutationObserver((Fk => {
          Fk.some((kk => "attributes" === kk.type)) && Bk(), Fk.some((Fk => function(kk, Fk, Bk) {
            if ("childList" !== kk.type) return !1;
            for (const Rk of kk.addedNodes)
              if (Rk instanceof Element && (Rk.matches(Fk) || Rk.querySelector(Fk))) return !0;
            for (const Rk of kk.removedNodes)
              if (Rk instanceof Element)
                for (const kk of Bk)
                  if (Rk.contains(kk)) return !0;
            return !1
          }(Fk, kk, Rk))) && ak()
        }));
      Xk.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const bk of Fk) tk.observe(bk);
      return window.addEventListener("resize", Bk), ak(), Bk(), () => {
        tk.disconnect(), Xk.disconnect(), window.removeEventListener("resize", Bk)
      }
    }
    Bk.d(Fk, {
      d: () => Rk
    })
  },
  8565: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => bk,
      e: () => wk
    });
    var Rk = Bk(22),
      tk = Bk(1267),
      ak = Bk(98);
    const Xk = {
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

    function bk() {
      return (0, ak.isMobile)() && "function" === typeof navigator.vibrate
    }
    const wk = new class {
      constructor(kk) {
        this.deps = kk, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(kk, Fk) {
        var Bk;
        if (!this.deps.enabled()) return;
        const Rk = Xk[kk],
          tk = null !== Fk && void 0 !== Fk ? Fk : Rk.pattern;
        if (null === tk) return void console.warn("No vibration pattern for", kk);
        const ak = this.deps.now();
        ak - this.lastAnyAt < 40 && Rk.priority < this.playingPriority || ak - (null !== (Bk = this.lastAt.get(kk)) && void 0 !== Bk ? Bk : -1 / 0) < Rk.minGapMs || ak < this.playingUntil && Rk.priority < this.playingPriority || (this.lastAt.set(kk, ak), this.lastAnyAt = ak, this.playingUntil = ak + tk.reduce(((kk, Fk) => kk + Fk), 0), this.playingPriority = Rk.priority, this.deps.vibrate(tk))
      }
    }({
      vibrate: kk => {
        navigator.vibrate([...kk])
      },
      now: () => performance.now(),
      enabled: () => bk() && Rk.c.get("isTouchScreen") && Rk.c.get("clientEscMenuOptions").vibration && !(0, tk.i)()
    })
  },
  36813: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => bk,
      c: () => Xk
    });
    var Rk = Bk(36805),
      tk = Bk(291),
      ak = Bk(1808);

    function Xk(kk) {
      if ("La" in kk) return Lk.createAnimationScript(kk);
      return new dk(kk).createAnimationScript()
    }

    function bk(kk, Fk, Bk, tk) {
      const ak = kk.La <= 0 ? 1 : Fk + Bk * Math.max(0, tk) / kk.La;
      return kk.Oa === Rk.n.LoopOnLastFrame ? ak % 1 : kk.Oa === Rk.n.NoLoop && ak >= 1 ? null : Math.min(1, ak)
    }
    class wk {
      createAnimationScript(kk) {
        const {
          La: Fk,
          loop: Bk,
          Ea: Rk
        } = kk;
        return {
          La: Math.round(Fk),
          Oa: this.createLoopMode(null !== Bk && void 0 !== Bk && Bk),
          Ea: this.createNodeSkeletonAnimationScript(null !== Rk && void 0 !== Rk ? Rk : null)
        }
      }
      createLoopMode(kk) {
        switch (kk) {
          case !1:
            return Rk.n.NoLoop;
          case !0:
            return Rk.n.LoopOnLastFrame;
          case "hold-on-last-frame":
            return Rk.n.HoldOnLastFrame
        }
        throw new Error(`Invalid loop mode schema: ${kk}`)
      }
      createNodeSkeletonAnimationScript(kk) {
        if (null === kk) return null;
        const Fk = {};
        for (const Bk in kk) {
          const Rk = kk[Bk];
          Fk[Bk] = this.createNodeAnimationScript(Rk)
        }
        return Fk
      }
      createNodeAnimationScript(kk) {
        const {
          timeline: Fk
        } = kk, Bk = Fk.filter((kk => Number.isFinite(kk.timeFraction)));
        return Bk.sort(((kk, Fk) => kk.timeFraction - Fk.timeFraction)), {
          rotation: this.createTimelineFromKeyframes(Bk, "rotation", Jk),
          position: this.createTimelineFromKeyframes(Bk, "position", ek)
        }
      }
      createTimelineFromKeyframes(kk, Fk, Bk) {
        const Rk = [];
        for (const wk of kk) {
          const kk = wk[Fk];
          if (kk) {
            const Fk = this.createAnimationFrameWithoutPrecomputes(wk.timeFraction, kk);
            sk(Fk) && Rk.push(Fk)
          }
        }
        const tk = [];
        for (let wk = 0; wk < Rk.length; wk++) {
          var ak, Xk, bk;
          const kk = Rk[wk],
            Fk = null !== (ak = Rk[wk - 1]) && void 0 !== ak ? ak : kk,
            dk = null !== (Xk = Rk[wk + 1]) && void 0 !== Xk ? Xk : kk,
            sk = null !== (bk = Rk[wk + 2]) && void 0 !== bk ? bk : dk;
          tk.push({
            ...kk,
            ...Bk(Fk.post, Fk.timeFraction, kk.post, kk.timeFraction, dk.pre, dk.timeFraction, sk.pre, sk.timeFraction)
          })
        }
        return tk
      }
      createAnimationFrameWithoutPrecomputes(kk, Fk) {
        let Bk, Rk, tk = null;
        var ak;
        if ("object" === typeof Fk && "point" in Fk) tk = null !== (ak = Fk.Ha) && void 0 !== ak ? ak : null, Bk = Fk.point, Rk = Fk.point;
        else if ("object" === typeof Fk && "pre" in Fk) {
          var Xk;
          tk = null !== (Xk = Fk.Ha) && void 0 !== Xk ? Xk : null, Bk = Fk.pre, Rk = Fk.post
        } else Bk = Fk, Rk = Fk;
        return {
          timeFraction: kk,
          Ha: this.createLerpMode(tk),
          pre: Bk,
          post: Rk
        }
      }
      createLerpMode(kk) {
        return null === kk ? Rk.l.Linear : wk.LERP_MODE_SCHEMA_MAPPING[kk]
      }
    }
    wk.LERP_MODE_SCHEMA_MAPPING = {
      linear: Rk.l.Linear,
      "catmull-rom-spline": Rk.l.CatmullRomSpline
    };
    class dk {
      constructor(kk) {
        this.animationSchema = kk
      }
      createAnimationScript() {
        const {
          animation_length: kk,
          loop: Fk,
          bones: Bk
        } = this.animationSchema;
        return {
          La: Math.round(1e3 * kk),
          Oa: this.createLoopMode(null !== Fk && void 0 !== Fk && Fk),
          Ea: this.createNodeSkeletonAnimationScript(null !== Bk && void 0 !== Bk ? Bk : null)
        }
      }
      createLoopMode(kk) {
        switch (kk) {
          case !1:
            return Rk.n.NoLoop;
          case !0:
            return Rk.n.LoopOnLastFrame;
          case "hold_on_last_frame":
            return Rk.n.HoldOnLastFrame
        }
        throw new Error(`Invalid Blockbench loop mode schema: ${kk}`)
      }
      createNodeSkeletonAnimationScript(kk) {
        if (null === kk) return null;
        const Fk = {};
        for (const Bk in kk) {
          const Rk = kk[Bk];
          Fk[Bk] = this.createNodeAnimationScript(Rk)
        }
        return Fk
      }
      createNodeAnimationScript(kk) {
        const {
          rotation: Fk,
          position: Bk
        } = kk;
        return {
          rotation: this.createAnimationTimeline(null !== Fk && void 0 !== Fk ? Fk : null, fk, Jk, !0),
          position: this.createAnimationTimeline(null !== Bk && void 0 !== Bk ? Bk : null, Wk, ek, !1)
        }
      }
      createAnimationTimeline(kk, Fk, Bk, Rk) {
        if (null === kk) return [];
        if (Array.isArray(kk)) {
          kk = {
            "0.0": kk
          }
        }
        const tk = Object.entries(kk).map((kk => {
          let [Bk, Rk] = kk;
          const tk = Number(Bk) / this.animationSchema.animation_length;
          return this.createAnimationFrameWithoutPrecomputes(tk, Rk, Fk)
        })).filter(sk);
        tk.sort(((kk, Fk) => kk.timeFraction - Fk.timeFraction)), Rk && function(kk) {
          for (let Fk = 1; Fk < kk.length; Fk++) {
            const Bk = kk[Fk - 1].post,
              Rk = kk[Fk],
              tk = vk(Rk.pre),
              ak = vk(Rk.post),
              Xk = Yk(Bk, Rk.pre);
            Yk(Bk, tk) < Xk && (kk[Fk] = {
              ...Rk,
              pre: tk,
              post: ak
            })
          }
        }(tk);
        const ak = [];
        for (let dk = 0; dk < tk.length; dk++) {
          var Xk, bk, wk;
          const kk = tk[dk],
            Fk = null !== (Xk = tk[dk - 1]) && void 0 !== Xk ? Xk : kk,
            Rk = null !== (bk = tk[dk + 1]) && void 0 !== bk ? bk : kk,
            sk = null !== (wk = tk[dk + 2]) && void 0 !== wk ? wk : Rk;
          ak.push({
            ...kk,
            ...Bk(Fk.post, Fk.timeFraction, kk.post, kk.timeFraction, Rk.pre, Rk.timeFraction, sk.pre, sk.timeFraction)
          })
        }
        return ak
      }
      createAnimationFrameWithoutPrecomputes(kk, Fk, Bk) {
        let Rk, tk, ak = null;
        if ("object" === typeof Fk && "post" in Fk) {
          var Xk;
          ak = null !== (Xk = Fk.lerp_mode) && void 0 !== Xk ? Xk : null, tk = yk(Fk.post, Bk), Rk = Fk.pre ? yk(Fk.pre, Bk) : tk
        } else {
          const kk = yk(Fk, Bk);
          tk = kk, Rk = kk
        }
        return {
          timeFraction: kk,
          Ha: this.createLerpMode(ak),
          pre: Rk,
          post: tk
        }
      }
      createLerpMode(kk) {
        return null === kk ? Rk.l.Linear : dk.LERP_MODE_SCHEMA_MAPPING[kk]
      }
    }

    function sk(kk) {
      return Number.isFinite(kk.timeFraction) && Vk(kk.pre) && Vk(kk.post)
    }

    function Vk(kk) {
      return Number.isFinite(kk[0]) && Number.isFinite(kk[1]) && Number.isFinite(kk[2])
    }

    function Jk(kk, Fk, Bk, Rk, tk, ak, Xk, bk) {
      const wk = ak - Fk,
        dk = ak - Rk,
        sk = bk - Rk,
        Vk = [null, null, null];
      for (let Jk = 0; Jk < Vk.length; Jk++) Vk[Jk] = Ak(kk[Jk], Bk[Jk], tk[Jk], Xk[Jk], wk, sk);
      return {
        ua: dk,
        Ma: Vk
      }
    }

    function Ak(kk, Fk, Bk, Rk, ak, Xk) {
      return {
        Ua: tk.b.computeShortestRotation(kk, Bk) / ak,
        ca: tk.b.computeShortestRotation(Fk, Rk) / Xk,
        delta: tk.b.computeShortestRotation(Fk, Bk)
      }
    }

    function ek(kk, Fk, Bk, Rk, tk, ak, Xk, bk) {
      const wk = ak - Fk,
        dk = ak - Rk,
        sk = bk - Rk,
        Vk = [null, null, null];
      for (let Jk = 0; Jk < Vk.length; Jk++) Vk[Jk] = {
        Ua: (tk[Jk] - kk[Jk]) / wk,
        ca: (Xk[Jk] - Bk[Jk]) / sk,
        delta: tk[Jk] - Bk[Jk]
      };
      return {
        ua: dk,
        Ma: Vk
      }
    }

    function yk(kk, Fk) {
      return null === Fk ? kk : Fk(kk)
    }

    function fk(kk) {
      const [Fk, Bk, Rk] = kk, Xk = -(0, ak.k)(Fk), bk = -(0, ak.k)(Bk), wk = (0, ak.k)(Rk), dk = tk.b.quaternionFromEulerZYX(Xk, bk, wk);
      return tk.b.eulerYXZFromQuaternion(dk)
    }
    dk.LERP_MODE_SCHEMA_MAPPING = {
      linear: Rk.l.Linear,
      catmullrom: Rk.l.CatmullRomSpline
    };
    const mk = 1 / 16;

    function Wk(kk) {
      return [-kk[0] * mk, kk[1] * mk, kk[2] * mk]
    }

    function vk(kk) {
      const [Fk, Bk, Rk] = kk;
      return [Fk >= 0 ? Math.PI - Fk : -Math.PI - Fk, ik(Bk + Math.PI), ik(Rk + Math.PI)]
    }

    function ik(kk) {
      return tk.b.mod(kk + Math.PI, 2 * Math.PI) - Math.PI
    }

    function Yk(kk, Fk) {
      return Math.abs(tk.b.computeShortestRotation(kk[0], Fk[0])) + Math.abs(tk.b.computeShortestRotation(kk[1], Fk[1])) + Math.abs(tk.b.computeShortestRotation(kk[2], Fk[2]))
    }
    const Lk = new wk
  },
  36805: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Xk,
      h: () => ak,
      l: () => Rk,
      n: () => tk
    });
    let Rk = function(kk) {
        return kk[kk.Linear = 0] = "Linear", kk[kk.CatmullRomSpline = 1] = "CatmullRomSpline", kk
      }({}),
      tk = function(kk) {
        return kk[kk.NoLoop = 0] = "NoLoop", kk[kk.LoopOnLastFrame = 1] = "LoopOnLastFrame", kk[kk.HoldOnLastFrame = 2] = "HoldOnLastFrame", kk
      }({}),
      ak = function(kk) {
        return kk[kk.Movement = 0] = "Movement", kk[kk.Action = 1] = "Action", kk[kk.Emote = 2] = "Emote", kk[kk.Custom = 3] = "Custom", kk
      }({}),
      Xk = function(kk) {
        return kk[kk.Start = 0] = "Start", kk[kk.Stop = 1] = "Stop", kk
      }({})
  },
  4570: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => tk,
      i: () => Rk,
      j: () => ak,
      l: () => wk,
      m: () => Xk
    });
    const Rk = ["sine", "triangle", "square", "sawtooth"],
      tk = 55,
      ak = {
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

    function Xk(kk) {
      return "string" !== typeof kk ? kk : Object.hasOwn(ak, kk) ? ak[kk] : null
    }

    function bk(kk, Fk, Bk) {
      return Math.min(Bk, Math.max(Fk, kk))
    }

    function wk(kk) {
      const Fk = bk(kk.durationMs, 10, 500),
        Bk = bk(kk.attackMs, 0, Fk),
        {
          intonation: tk
        } = kk;
      return {
        waveform: Rk.includes(kk.waveform) ? kk.waveform : "sine",
        pitchHz: bk(kk.pitchHz, 20, 4e3),
        glideSemitones: bk(kk.glideSemitones, -24, 24),
        durationMs: Fk,
        attackMs: Bk,
        releaseMs: bk(kk.releaseMs, 0, Fk - Bk),
        lowpassHz: null === kk.lowpassHz ? null : bk(kk.lowpassHz, 20, 2e4),
        volume: bk(kk.volume, 0, 2),
        intonation: {
          variationSemitones: bk(tk.variationSemitones, 0, 6),
          declineSemitones: bk(tk.declineSemitones, 0, 12),
          questionRiseSemitones: bk(tk.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: bk(tk.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: bk(kk.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);