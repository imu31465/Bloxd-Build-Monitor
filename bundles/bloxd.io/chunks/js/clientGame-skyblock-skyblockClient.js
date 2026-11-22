export const id = 25;
export const ids = [25];
export const modules = {
  36140: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => nk,
      h: () => Uk,
      l: () => xk,
      p: () => Kk
    });
    var Dk = ik(33763),
      fk = ik(36143),
      Sk = ik(36151),
      bk = ik(8560),
      rk = ik(1406),
      Pk = ik(60),
      mk = ik(75),
      Mk = ik(1066);

    function Kk() {
      var kk;
      return (0, rk.e)(fk.c, (0, fk.n)()), (0, Mk.jsx)(Mk.Fragment, {
        children: null === (kk = (0, fk.n)()) || void 0 === kk ? void 0 : kk.content
      })
    }

    function xk(kk) {
      var ek;
      let {
        show: ik
      } = kk;
      (0, rk.e)(fk.c, (0, fk.n)());
      const mk = null === (ek = (0, fk.n)()) || void 0 === ek ? void 0 : ek.menu;
      return (0, Pk.useEffect)((() => {
        var kk;
        ik || (null === mk || void 0 === mk || null === (kk = mk.onClose) || void 0 === kk || kk.call(mk), (0, Sk.t)())
      }), [ik, mk]), (0, Pk.useEffect)((() => ik ? (0, bk.f)(Sk.w, Sk.g) : void 0), [ik]), (0, Mk.jsx)(Dk.d, {
        showing: ik,
        globallyUniqueKey: "clientGameMenu",
        children: null === mk || void 0 === mk ? void 0 : mk.content
      })
    }

    function nk(kk) {
      let {
        placement: ek = "bottom"
      } = kk;
      return (0, Mk.jsx)("div", {
        id: `clientGameHud-${ek}`,
        style: {
          display: "contents"
        }
      })
    }

    function Uk(kk) {
      let {
        children: ek,
        placement: ik = "bottom"
      } = kk;
      const [Dk, fk] = (0, Pk.useState)(null);
      return (0, Pk.useEffect)((() => {
        fk(document.getElementById(`clientGameHud-${ik}`))
      }), [ik]), Dk ? (0, mk.createPortal)(ek, Dk) : null
    }
  },
  4766: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => wk,
      g: () => lk
    });
    var Dk = ik(1021),
      fk = ik.n(Dk),
      Sk = ik(60),
      bk = ik(1172),
      rk = ik(4769),
      Pk = ik(1858),
      mk = ik(2414),
      Mk = ik(4778),
      Kk = ik(1066);
    const xk = new WeakMap;
    let nk = 0;

    function Uk(kk) {
      let ek = xk.get(kk);
      return void 0 === ek && (ek = nk++, xk.set(kk, ek)), ek
    }

    function Hk(kk) {
      let {
        piece: ek
      } = kk;
      return "space" === ek.kind ? (0, Kk.jsx)(Kk.Fragment, {
        children: ek.text
      }) : (0, Kk.jsx)("span", {
        className: "DialogueWord",
        style: {
          "--word-delay": `${ek.delayMs}ms`
        },
        children: (0, Kk.jsx)(rk.e, {
          text: "icon" === ek.kind ? `[[${ek.icon}]]` : ek.text
        })
      })
    }

    function wk(kk) {
      let {
        display: ek
      } = kk;
      const {
        selectedLanguage: ik
      } = (0, bk.D)(), Dk = (0, Sk.useMemo)((() => (0, Mk.d)((0, Mk.f)(ek).plan.pieces)), [ek, ik.code]);
      return (0, Kk.jsxs)("div", {
        className: fk()("Dialogue", {
          DialogueAnimateIn: !1 !== ek.animateIn
        }),
        children: [ek.speakerName && (0, Kk.jsx)(Pk.e, {
          text: ek.speakerName,
          className: "DialogueSpeaker"
        }), (0, Kk.jsx)("p", {
          className: "DialogueLine",
          children: Dk.map(((kk, ek) => 1 === kk.length && "space" === kk[0].kind ? kk[0].text : (0, Kk.jsx)("span", {
            className: "DialogueGlue",
            children: kk.map(((kk, ek) => (0, Kk.jsx)(Hk, {
              piece: kk
            }, ek)))
          }, ek)))
        })]
      })
    }
    const lk = (0, Sk.memo)((function() {
      const kk = (0, mk.e)("dialogue");
      return (0, Kk.jsx)("div", {
        className: "DialogueAnchor",
        "data-camera-keeper": "",
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: kk && (0, Kk.jsx)(wk, {
          display: kk
        }, Uk(kk))
      })
    }))
  },
  4769: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => rk
    });
    var Dk = ik(60),
      fk = ik(302),
      Sk = ik(1877),
      bk = ik(1066);

    function rk(kk) {
      let {
        text: ek
      } = kk;
      const ik = [];
      let rk = "";
      return (0, fk.hc)(ek).forEach(((kk, ek) => {
        if ("string" === typeof kk || !(0, Sk.e)(kk.icon)) return void(rk += "string" === typeof kk ? kk : kk.icon);
        const fk = Math.max(0, rk.trimEnd().search(/\S{1,12}$/));
        ik.push((0, bk.jsxs)(Dk.Fragment, {
          children: [rk.slice(0, fk), (0, bk.jsxs)("span", {
            className: "InlineIconTextGlue",
            children: [rk.slice(fk), (0, bk.jsx)("span", {
              className: "InlineIconTextIcon",
              role: "img",
              "aria-label": kk.icon,
              children: (0, bk.jsx)(Sk.c, {
                itemName: kk.icon,
                amount: 0
              })
            })]
          })]
        }, ek)), rk = ""
      })), ik.push(rk), (0, bk.jsx)(bk.Fragment, {
        children: ik
      })
    }
  },
  33763: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Sk
    });
    var Dk = ik(4479),
      fk = ik(4482);

    function Sk(kk) {
      let {
        children: ek,
        showing: ik,
        globallyUniqueKey: Sk,
        alwaysMountChildren: bk = !1,
        doGameplayStartStopOnShow: rk = !0,
        keepsMovement: Pk = !1
      } = kk;
      return (0, fk.c)(!0, ik, Sk, Pk), (0, Dk.c)(rk, ik), ik || bk ? ek : null
    }
  },
  4778: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Qk,
      f: () => zk
    });
    var Dk = ik(4786),
      fk = ik(302);
    const Sk = 120,
      bk = 260,
      rk = 1.15,
      Pk = 1.2,
      mk = 2,
      Mk = 1.08,
      Kk = .8,
      xk = .95,
      nk = 8,
      Uk = "[\"')\\]\u300d\u300f\uff09]*",
      Hk = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${Uk}$`),
      wk = new RegExp(`[?\uff1f]${Uk}$`),
      lk = new RegExp(`[!\uff01]${Uk}$`),
      pk = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      yk = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      Yk = new RegExp(`[${yk}]`),
      Lk = new RegExp(`[${yk}]|[^${yk}]+`, "g"),
      Ck = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function Ak(kk) {
      let ek = 2166136261;
      for (let ik = 0; ik < kk.length; ik++) ek ^= kk.charCodeAt(ik), ek = Math.imul(ek, 16777619);
      return (ek >>> 0) / 4294967295 * 2 - 1
    }

    function jk(kk) {
      var ek;
      if (Yk.test(kk)) return 1;
      const ik = kk.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        Dk = ik.replace(/[^0-9]/g, "");
      if (Dk.length > 0 && !/\p{L}/u.test(ik)) return Math.min(Dk.length, 4);
      const fk = null !== (ek = ik.match(Ck)) && void 0 !== ek ? ek : [];
      if (0 === fk.length) {
        var Sk, bk;
        const kk = null !== (Sk = null === (bk = ik.match(/\p{L}/gu)) || void 0 === bk ? void 0 : bk.length) && void 0 !== Sk ? Sk : 0;
        return 0 === kk ? 0 : Math.min(Math.max(1, Math.round(kk / 2.5)), nk)
      }
      const rk = ik.replace(/[^\p{L}]/gu, ""),
        Pk = fk.length > 1 && "e" === fk.at(-1) && rk.endsWith("e") && !rk.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(kk.replace(/[^\p{L}]/gu, ""));
      return Math.min(fk.length - (Pk ? 1 : 0), nk)
    }

    function sk(kk) {
      return kk.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function dk(kk) {
      const ek = kk.replace(/[^\p{L}]/gu, "");
      return ek.length >= 2 && ek === ek.toUpperCase() && ek !== ek.toLowerCase()
    }

    function Vk(kk, ek) {
      var ik;
      const nk = ek && (0, Dk.i)(ek),
        Uk = null !== (ik = null === nk || void 0 === nk ? void 0 : nk.syllableMs) && void 0 !== ik ? ik : Dk.c,
        yk = function(kk) {
          const ek = [];
          for (const Dk of (0, fk.hc)(kk))
            if ("string" === typeof Dk)
              for (const kk of Dk.split(/(\s+)/)) {
                if ("" === kk) continue;
                if (/^\s+$/.test(kk)) {
                  ek.push({
                    kind: "space",
                    text: kk
                  });
                  continue
                }
                if (!Yk.test(kk)) {
                  ek.push({
                    kind: "word",
                    text: kk,
                    delayMs: 0
                  });
                  continue
                }
                let Dk = !0;
                for (const fk of null !== (ik = kk.match(Lk)) && void 0 !== ik ? ik : []) {
                  var ik;
                  const kk = ek.at(-1);
                  Dk || "word" !== (null === kk || void 0 === kk ? void 0 : kk.kind) || Yk.test(fk) || /[\p{L}\p{N}]/u.test(fk) ? (Dk || ek.push({
                    kind: "space",
                    text: "\u200b"
                  }), ek.push({
                    kind: "word",
                    text: fk,
                    delayMs: 0
                  }), Dk = !1) : kk.text += fk
                }
              } else ek.push({
                kind: "icon",
                text: Dk.icon,
                delayMs: 0
              });
          return ek
        }(kk),
        Ck = [];
      let Vk = [];
      for (const Dk of yk) "space" !== Dk.kind && (Vk.push(Dk), Hk.test(Dk.text) && (Ck.push(Vk), Vk = []));
      Ck.push(Vk);
      const Fk = [];
      let uk = 0;
      for (const Dk of Ck) {
        var qk, Ik;
        const kk = null !== (qk = null === (Ik = Dk.at(-1)) || void 0 === Ik ? void 0 : Ik.text) && void 0 !== qk ? qk : "",
          ek = wk.test(kk),
          ik = lk.test(kk),
          fk = Dk.map((kk => "word" === kk.kind ? jk(kk.text) : 1)),
          yk = fk.findLastIndex((kk => kk > 0));
        for (const [wk, lk] of Dk.entries()) {
          const kk = "word" === lk.kind,
            Dk = fk[wk];
          lk.delayMs = uk;
          for (let fk = 0; nk && fk < Dk; fk++) {
            const {
              intonation: Sk
            } = nk;
            let bk = yk > 0 ? -Sk.declineSemitones * (wk / yk) : 0;
            bk += Ak(`${sk(lk.text)}|${fk}`) * Sk.variationSemitones;
            const Hk = Math.min(1, Sk.variationSemitones);
            let pk = nk.glideSemitones,
              Yk = 1;
            ik && (bk += Sk.exclaimLiftSemitones, Yk *= rk), ek && wk === yk && (bk += Sk.questionRiseSemitones * (Dk > 1 ? .5 + .5 * fk / (Dk - 1) : 1), fk === Dk - 1 && (pk = Math.abs(pk) + Sk.questionRiseSemitones / 2)), kk && dk(lk.text) && (bk += mk * Hk, Yk *= Pk), Dk > 1 && 0 === fk && (bk += Kk * Hk, Yk *= Mk), Fk.push({
              atMs: uk + fk * Uk,
              semitones: bk,
              glideSemitones: pk,
              durationMs: fk < Dk - 1 ? Math.min(nk.durationMs, Uk * xk) : nk.durationMs,
              level: Yk
            })
          }
          uk += Dk * Uk + (Hk.test(lk.text) ? bk : pk.test(lk.text) ? Sk : 0)
        }
      }
      return {
        pieces: yk.map((kk => "space" === kk.kind ? kk : "icon" === kk.kind ? {
          kind: "icon",
          icon: kk.text,
          delayMs: kk.delayMs
        } : {
          kind: "word",
          text: kk.text,
          delayMs: kk.delayMs
        })),
        blips: Fk
      }
    }
    var Fk = ik(1172),
      uk = ik(1223),
      qk = ik(1895);

    function Ik(kk) {
      if ("string" === typeof kk) return kk;
      const ek = uk.f.get().getCurrentLanguageCode();
      return (0, Fk.u)(ek, kk.translationKey, (0, Fk.r)(kk.params, qk.c.shown))
    }

    function zk(kk) {
      const ek = void 0 === kk.voice ? null : (0, Dk.m)(kk.voice),
        ik = ek && (0, Dk.i)(ek);
      return {
        plan: Vk(Ik(kk.line), ik),
        synth: ik
      }
    }

    function Qk(kk) {
      const ek = [];
      let ik = [];
      for (const [fk, Sk] of kk.entries()) {
        var Dk;
        "space" === Sk.kind && (" " !== Sk.text || "icon" !== (null === (Dk = kk[fk + 1]) || void 0 === Dk ? void 0 : Dk.kind)) ? (ik.length > 0 && ek.push(ik), ek.push([Sk]), ik = []) : ik.push(Sk)
      }
      return ik.length > 0 && ek.push(ik), ek
    }
  },
  8560: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Sk,
      f: () => fk
    });
    let Dk = null;
    const fk = function(kk) {
        const ek = {
          cycle: kk,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Dk = ek, () => {
          Dk === ek && (Dk = null)
        }
      },
      Sk = () => {
        var kk;
        return null !== (kk = Dk) && void 0 !== kk && kk.canCycle() ? Dk.cycle : null
      }
  },
  36151: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Sk,
      g: () => Hk,
      i: () => wk,
      m: () => rk,
      p: () => xk,
      t: () => lk,
      u: () => Kk,
      v: () => yk,
      w: () => Uk,
      x: () => pk
    });
    var Dk = ik(22),
      fk = ik(26);
    const Sk = "clientGameInventoryButtonsChanged",
      bk = new Map;

    function rk() {
      return [...bk.values()].sort(((kk, ek) => {
        var ik, Dk;
        return (null !== (ik = kk.order) && void 0 !== ik ? ik : 0) - (null !== (Dk = ek.order) && void 0 !== Dk ? Dk : 0)
      }))
    }
    let Pk = null;

    function mk(kk) {
      Pk = kk
    }
    let Mk = !1;

    function Kk(kk) {
      Mk = !0;
      try {
        kk.onClick()
      } finally {
        Mk = !1
      }
      kk.panel && "clientGame" === Dk.b.get("openInGameMenuName") && mk(kk.id)
    }

    function xk() {
      return Mk
    }

    function nk() {
      return rk().filter((kk => kk.panel && !kk.disabled))
    }

    function Uk(kk) {
      const ek = nk(),
        ik = ek.findIndex((kk => kk.id === Pk));
      return !(ik < 0 || ek.length < 2) && (Kk(ek[(ik + kk + ek.length) % ek.length]), !0)
    }

    function Hk() {
      return null !== Pk && nk().length > 1
    }

    function wk() {
      mk(null)
    }

    function lk() {
      "inventory" !== Dk.b.get("openInGameMenuName") && mk(null)
    }

    function pk() {
      const kk = Pk;
      return mk(null), kk
    }

    function yk(kk) {
      return bk.set(kk.id, kk), fk.j.tm(Sk, rk(), !0), () => {
        bk.get(kk.id) === kk && (bk.delete(kk.id), fk.j.tm(Sk, rk()))
      }
    }
  },
  36143: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => rk,
      d: () => wk,
      h: () => lk,
      j: () => xk,
      n: () => mk,
      r: () => Hk,
      v: () => nk,
      z: () => Mk
    });
    var Dk = ik(22),
      fk = ik(26),
      Sk = ik(1273),
      bk = ik(36151);
    const rk = "clientGameUiChanged";
    let Pk = null;

    function mk() {
      return Pk
    }

    function Mk(kk, ek) {
      const ik = {
        content: kk,
        menu: ek
      };
      return Pk = ik, fk.j.tm(rk, Pk, !0), () => {
        Pk === ik && (Pk = null, Uk = !1, wk(), fk.j.tm(rk, null))
      }
    }
    let Kk = null;

    function xk() {
      return Kk
    }

    function nk(kk) {
      return Kk = kk, () => {
        Kk === kk && (Kk = null)
      }
    }
    let Uk = !1;

    function Hk() {
      const kk = Dk.b.get("openInGameMenuName");
      "clientGame" !== kk && (Uk = "inventory" === kk), (0, bk.p)() || (0, bk.i)(), (0, Sk.s)(Sk.c), Dk.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function wk() {
      pk(!1)
    }

    function lk() {
      pk(Uk)
    }

    function pk(kk) {
      "clientGame" === Dk.b.get("openInGameMenuName") && Dk.b.set({
        openInGameMenuName: kk ? "inventory" : null
      }), kk || (0, bk.i)(), Uk = !1
    }
  },
  38090: (kk, ek, ik) => {
    function Dk(kk, ek, ik) {
      const Dk = new Set,
        fk = new ResizeObserver(ik),
        Sk = () => {
          const ek = new Set(document.querySelectorAll(kk));
          let Sk = !1;
          for (const kk of Dk) ek.has(kk) || (fk.unobserve(kk), Dk.delete(kk), Sk = !0);
          for (const kk of ek) Dk.has(kk) || (fk.observe(kk), bk.observe(kk, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), Dk.add(kk));
          Sk && ik()
        },
        bk = new MutationObserver((ek => {
          ek.some((kk => "attributes" === kk.type)) && ik(), ek.some((ek => function(kk, ek, ik) {
            if ("childList" !== kk.type) return !1;
            for (const Dk of kk.addedNodes)
              if (Dk instanceof Element && (Dk.matches(ek) || Dk.querySelector(ek))) return !0;
            for (const Dk of kk.removedNodes)
              if (Dk instanceof Element)
                for (const kk of ik)
                  if (Dk.contains(kk)) return !0;
            return !1
          }(ek, kk, Dk))) && Sk()
        }));
      bk.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const rk of ek) fk.observe(rk);
      return window.addEventListener("resize", ik), Sk(), ik(), () => {
        fk.disconnect(), bk.disconnect(), window.removeEventListener("resize", ik)
      }
    }
    ik.d(ek, {
      d: () => Dk
    })
  },
  8708: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => rk,
      e: () => Pk
    });
    var Dk = ik(22),
      fk = ik(1302),
      Sk = ik(99);
    const bk = {
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

    function rk() {
      return (0, Sk.isMobile)() && "function" === typeof navigator.vibrate
    }
    const Pk = new class {
      constructor(kk) {
        this.deps = kk, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(kk, ek) {
        var ik;
        if (!this.deps.enabled()) return;
        const Dk = bk[kk],
          fk = null !== ek && void 0 !== ek ? ek : Dk.pattern;
        if (null === fk) return void console.warn("No vibration pattern for", kk);
        const Sk = this.deps.now();
        Sk - this.lastAnyAt < 40 && Dk.priority < this.playingPriority || Sk - (null !== (ik = this.lastAt.get(kk)) && void 0 !== ik ? ik : -1 / 0) < Dk.minGapMs || Sk < this.playingUntil && Dk.priority < this.playingPriority || (this.lastAt.set(kk, Sk), this.lastAnyAt = Sk, this.playingUntil = Sk + fk.reduce(((kk, ek) => kk + ek), 0), this.playingPriority = Dk.priority, this.deps.vibrate(fk))
      }
    }({
      vibrate: kk => {
        navigator.vibrate([...kk])
      },
      now: () => performance.now(),
      enabled: () => rk() && Dk.b.get("isTouchScreen") && Dk.b.get("clientEscMenuOptions").vibration && !(0, fk.e)()
    })
  },
  36754: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => rk,
      g: () => bk
    });
    var Dk = ik(36747),
      fk = ik(314),
      Sk = ik(1850);

    function bk(kk) {
      if ("Ii" in kk) return Ck.createAnimationScript(kk);
      return new mk(kk).createAnimationScript()
    }

    function rk(kk, ek, ik, fk) {
      const Sk = kk.Ii <= 0 ? 1 : ek + ik * Math.max(0, fk) / kk.Ii;
      return kk.zi === Dk.k.LoopOnLastFrame ? Sk % 1 : kk.zi === Dk.k.NoLoop && Sk >= 1 ? null : Math.min(1, Sk)
    }
    class Pk {
      createAnimationScript(kk) {
        const {
          Ii: ek,
          loop: ik,
          Qi: Dk
        } = kk;
        return {
          Ii: Math.round(ek),
          zi: this.createLoopMode(null !== ik && void 0 !== ik && ik),
          Qi: this.createNodeSkeletonAnimationScript(null !== Dk && void 0 !== Dk ? Dk : null)
        }
      }
      createLoopMode(kk) {
        switch (kk) {
          case !1:
            return Dk.k.NoLoop;
          case !0:
            return Dk.k.LoopOnLastFrame;
          case "hold-on-last-frame":
            return Dk.k.HoldOnLastFrame
        }
        throw new Error(`Invalid loop mode schema: ${kk}`)
      }
      createNodeSkeletonAnimationScript(kk) {
        if (null === kk) return null;
        const ek = {};
        for (const ik in kk) {
          const Dk = kk[ik];
          ek[ik] = this.createNodeAnimationScript(Dk)
        }
        return ek
      }
      createNodeAnimationScript(kk) {
        const {
          timeline: ek
        } = kk, ik = ek.filter((kk => Number.isFinite(kk.timeFraction)));
        return ik.sort(((kk, ek) => kk.timeFraction - ek.timeFraction)), {
          rotation: this.createTimelineFromKeyframes(ik, "rotation", xk),
          position: this.createTimelineFromKeyframes(ik, "position", Uk)
        }
      }
      createTimelineFromKeyframes(kk, ek, ik) {
        const Dk = [];
        for (const Pk of kk) {
          const kk = Pk[ek];
          if (kk) {
            const ek = this.createAnimationFrameWithoutPrecomputes(Pk.timeFraction, kk);
            Mk(ek) && Dk.push(ek)
          }
        }
        const fk = [];
        for (let Pk = 0; Pk < Dk.length; Pk++) {
          var Sk, bk, rk;
          const kk = Dk[Pk],
            ek = null !== (Sk = Dk[Pk - 1]) && void 0 !== Sk ? Sk : kk,
            mk = null !== (bk = Dk[Pk + 1]) && void 0 !== bk ? bk : kk,
            Mk = null !== (rk = Dk[Pk + 2]) && void 0 !== rk ? rk : mk;
          fk.push({
            ...kk,
            ...ik(ek.post, ek.timeFraction, kk.post, kk.timeFraction, mk.pre, mk.timeFraction, Mk.pre, Mk.timeFraction)
          })
        }
        return fk
      }
      createAnimationFrameWithoutPrecomputes(kk, ek) {
        let ik, Dk, fk = null;
        var Sk;
        if ("object" === typeof ek && "point" in ek) fk = null !== (Sk = ek.Wi) && void 0 !== Sk ? Sk : null, ik = ek.point, Dk = ek.point;
        else if ("object" === typeof ek && "pre" in ek) {
          var bk;
          fk = null !== (bk = ek.Wi) && void 0 !== bk ? bk : null, ik = ek.pre, Dk = ek.post
        } else ik = ek, Dk = ek;
        return {
          timeFraction: kk,
          Wi: this.createLerpMode(fk),
          pre: ik,
          post: Dk
        }
      }
      createLerpMode(kk) {
        return null === kk ? Dk.h.Linear : Pk.LERP_MODE_SCHEMA_MAPPING[kk]
      }
    }
    Pk.LERP_MODE_SCHEMA_MAPPING = {
      linear: Dk.h.Linear,
      "catmull-rom-spline": Dk.h.CatmullRomSpline
    };
    class mk {
      constructor(kk) {
        this.animationSchema = kk
      }
      createAnimationScript() {
        const {
          animation_length: kk,
          loop: ek,
          bones: ik
        } = this.animationSchema;
        return {
          Ii: Math.round(1e3 * kk),
          zi: this.createLoopMode(null !== ek && void 0 !== ek && ek),
          Qi: this.createNodeSkeletonAnimationScript(null !== ik && void 0 !== ik ? ik : null)
        }
      }
      createLoopMode(kk) {
        switch (kk) {
          case !1:
            return Dk.k.NoLoop;
          case !0:
            return Dk.k.LoopOnLastFrame;
          case "hold_on_last_frame":
            return Dk.k.HoldOnLastFrame
        }
        throw new Error(`Invalid Blockbench loop mode schema: ${kk}`)
      }
      createNodeSkeletonAnimationScript(kk) {
        if (null === kk) return null;
        const ek = {};
        for (const ik in kk) {
          const Dk = kk[ik];
          ek[ik] = this.createNodeAnimationScript(Dk)
        }
        return ek
      }
      createNodeAnimationScript(kk) {
        const {
          rotation: ek,
          position: ik
        } = kk;
        return {
          rotation: this.createAnimationTimeline(null !== ek && void 0 !== ek ? ek : null, wk, xk, !0),
          position: this.createAnimationTimeline(null !== ik && void 0 !== ik ? ik : null, pk, Uk, !1)
        }
      }
      createAnimationTimeline(kk, ek, ik, Dk) {
        if (null === kk) return [];
        if (Array.isArray(kk)) {
          kk = {
            "0.0": kk
          }
        }
        const fk = Object.entries(kk).map((kk => {
          let [ik, Dk] = kk;
          const fk = Number(ik) / this.animationSchema.animation_length;
          return this.createAnimationFrameWithoutPrecomputes(fk, Dk, ek)
        })).filter(Mk);
        fk.sort(((kk, ek) => kk.timeFraction - ek.timeFraction)), Dk && function(kk) {
          for (let ek = 1; ek < kk.length; ek++) {
            const ik = kk[ek - 1].post,
              Dk = kk[ek],
              fk = yk(Dk.pre),
              Sk = yk(Dk.post),
              bk = Lk(ik, Dk.pre);
            Lk(ik, fk) < bk && (kk[ek] = {
              ...Dk,
              pre: fk,
              post: Sk
            })
          }
        }(fk);
        const Sk = [];
        for (let mk = 0; mk < fk.length; mk++) {
          var bk, rk, Pk;
          const kk = fk[mk],
            ek = null !== (bk = fk[mk - 1]) && void 0 !== bk ? bk : kk,
            Dk = null !== (rk = fk[mk + 1]) && void 0 !== rk ? rk : kk,
            Mk = null !== (Pk = fk[mk + 2]) && void 0 !== Pk ? Pk : Dk;
          Sk.push({
            ...kk,
            ...ik(ek.post, ek.timeFraction, kk.post, kk.timeFraction, Dk.pre, Dk.timeFraction, Mk.pre, Mk.timeFraction)
          })
        }
        return Sk
      }
      createAnimationFrameWithoutPrecomputes(kk, ek, ik) {
        let Dk, fk, Sk = null;
        if ("object" === typeof ek && "post" in ek) {
          var bk;
          Sk = null !== (bk = ek.lerp_mode) && void 0 !== bk ? bk : null, fk = Hk(ek.post, ik), Dk = ek.pre ? Hk(ek.pre, ik) : fk
        } else {
          const kk = Hk(ek, ik);
          fk = kk, Dk = kk
        }
        return {
          timeFraction: kk,
          Wi: this.createLerpMode(Sk),
          pre: Dk,
          post: fk
        }
      }
      createLerpMode(kk) {
        return null === kk ? Dk.h.Linear : mk.LERP_MODE_SCHEMA_MAPPING[kk]
      }
    }

    function Mk(kk) {
      return Number.isFinite(kk.timeFraction) && Kk(kk.pre) && Kk(kk.post)
    }

    function Kk(kk) {
      return Number.isFinite(kk[0]) && Number.isFinite(kk[1]) && Number.isFinite(kk[2])
    }

    function xk(kk, ek, ik, Dk, fk, Sk, bk, rk) {
      const Pk = Sk - ek,
        mk = Sk - Dk,
        Mk = rk - Dk,
        Kk = [null, null, null];
      for (let xk = 0; xk < Kk.length; xk++) Kk[xk] = nk(kk[xk], ik[xk], fk[xk], bk[xk], Pk, Mk);
      return {
        Xi: mk,
        Bi: Kk
      }
    }

    function nk(kk, ek, ik, Dk, Sk, bk) {
      return {
        oi: fk.c.computeShortestRotation(kk, ik) / Sk,
        Zi: fk.c.computeShortestRotation(ek, Dk) / bk,
        delta: fk.c.computeShortestRotation(ek, ik)
      }
    }

    function Uk(kk, ek, ik, Dk, fk, Sk, bk, rk) {
      const Pk = Sk - ek,
        mk = Sk - Dk,
        Mk = rk - Dk,
        Kk = [null, null, null];
      for (let xk = 0; xk < Kk.length; xk++) Kk[xk] = {
        oi: (fk[xk] - kk[xk]) / Pk,
        Zi: (bk[xk] - ik[xk]) / Mk,
        delta: fk[xk] - ik[xk]
      };
      return {
        Xi: mk,
        Bi: Kk
      }
    }

    function Hk(kk, ek) {
      return null === ek ? kk : ek(kk)
    }

    function wk(kk) {
      const [ek, ik, Dk] = kk, bk = -(0, Sk.h)(ek), rk = -(0, Sk.h)(ik), Pk = (0, Sk.h)(Dk), mk = fk.c.quaternionFromEulerZYX(bk, rk, Pk);
      return fk.c.eulerYXZFromQuaternion(mk)
    }
    mk.LERP_MODE_SCHEMA_MAPPING = {
      linear: Dk.h.Linear,
      catmullrom: Dk.h.CatmullRomSpline
    };
    const lk = 1 / 16;

    function pk(kk) {
      return [-kk[0] * lk, kk[1] * lk, kk[2] * lk]
    }

    function yk(kk) {
      const [ek, ik, Dk] = kk;
      return [ek >= 0 ? Math.PI - ek : -Math.PI - ek, Yk(ik + Math.PI), Yk(Dk + Math.PI)]
    }

    function Yk(kk) {
      return fk.c.mod(kk + Math.PI, 2 * Math.PI) - Math.PI
    }

    function Lk(kk, ek) {
      return Math.abs(fk.c.computeShortestRotation(kk[0], ek[0])) + Math.abs(fk.c.computeShortestRotation(kk[1], ek[1])) + Math.abs(fk.c.computeShortestRotation(kk[2], ek[2]))
    }
    const Ck = new Pk
  },
  36747: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => bk,
      g: () => Sk,
      h: () => Dk,
      k: () => fk
    });
    let Dk = function(kk) {
        return kk[kk.Linear = 0] = "Linear", kk[kk.CatmullRomSpline = 1] = "CatmullRomSpline", kk
      }({}),
      fk = function(kk) {
        return kk[kk.NoLoop = 0] = "NoLoop", kk[kk.LoopOnLastFrame = 1] = "LoopOnLastFrame", kk[kk.HoldOnLastFrame = 2] = "HoldOnLastFrame", kk
      }({}),
      Sk = function(kk) {
        return kk[kk.Movement = 0] = "Movement", kk[kk.Action = 1] = "Action", kk[kk.Emote = 2] = "Emote", kk[kk.Custom = 3] = "Custom", kk
      }({}),
      bk = function(kk) {
        return kk[kk.Start = 0] = "Start", kk[kk.Stop = 1] = "Stop", kk
      }({})
  },
  4786: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => fk,
      d: () => Dk,
      g: () => Sk,
      i: () => Pk,
      m: () => bk
    });
    const Dk = ["sine", "triangle", "square", "sawtooth"],
      fk = 55,
      Sk = {
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

    function bk(kk) {
      return "string" !== typeof kk ? kk : Object.hasOwn(Sk, kk) ? Sk[kk] : null
    }

    function rk(kk, ek, ik) {
      return Math.min(ik, Math.max(ek, kk))
    }

    function Pk(kk) {
      const ek = rk(kk.durationMs, 10, 500),
        ik = rk(kk.attackMs, 0, ek),
        {
          intonation: fk
        } = kk;
      return {
        waveform: Dk.includes(kk.waveform) ? kk.waveform : "sine",
        pitchHz: rk(kk.pitchHz, 20, 4e3),
        glideSemitones: rk(kk.glideSemitones, -24, 24),
        durationMs: ek,
        attackMs: ik,
        releaseMs: rk(kk.releaseMs, 0, ek - ik),
        lowpassHz: null === kk.lowpassHz ? null : rk(kk.lowpassHz, 20, 2e4),
        volume: rk(kk.volume, 0, 2),
        intonation: {
          variationSemitones: rk(fk.variationSemitones, 0, 6),
          declineSemitones: rk(fk.declineSemitones, 0, 12),
          questionRiseSemitones: rk(fk.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: rk(fk.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: rk(kk.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);