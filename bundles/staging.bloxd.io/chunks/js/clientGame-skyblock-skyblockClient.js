export const id = 25;
export const ids = [25];
export const modules = {
  36436: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => xu,
      d: () => Su,
      g: () => Bu,
      h: () => ru
    });
    var Eu = yu(9048),
      Ku = yu(36445),
      Qu = yu(36449),
      mu = yu(8447),
      Ju = yu(1400),
      Nu = yu(64),
      Xu = yu(80),
      Vu = yu(1079);

    function ru() {
      var uu;
      return (0, Ju.h)(Ku.c, (0, Ku.o)()), (0, Vu.jsx)(Vu.Fragment, {
        children: null === (uu = (0, Ku.o)()) || void 0 === uu ? void 0 : uu.content
      })
    }

    function Bu(uu) {
      var Ru;
      let {
        show: yu
      } = uu;
      (0, Ju.h)(Ku.c, (0, Ku.o)());
      const Xu = null === (Ru = (0, Ku.o)()) || void 0 === Ru ? void 0 : Ru.menu;
      return (0, Nu.useEffect)((() => {
        var uu;
        yu || (null === Xu || void 0 === Xu || null === (uu = Xu.onClose) || void 0 === uu || uu.call(Xu), (0, Qu.p)())
      }), [yu, Xu]), (0, Nu.useEffect)((() => yu ? (0, mu.g)(Qu.v, Qu.d) : void 0), [yu]), (0, Vu.jsx)(Eu.c, {
        showing: yu,
        globallyUniqueKey: "clientGameMenu",
        children: null === Xu || void 0 === Xu ? void 0 : Xu.content
      })
    }

    function xu(uu) {
      let {
        placement: Ru = "bottom"
      } = uu;
      return (0, Vu.jsx)("div", {
        id: `clientGameHud-${Ru}`,
        style: {
          display: "contents"
        }
      })
    }

    function Su(uu) {
      let {
        children: Ru,
        placement: yu = "bottom"
      } = uu;
      const [Eu, Ku] = (0, Nu.useState)(null);
      return (0, Nu.useEffect)((() => {
        Ku(document.getElementById(`clientGameHud-${yu}`))
      }), [yu]), Eu ? (0, Xu.createPortal)(Ru, Eu) : null
    }
  },
  4598: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Tu,
      e: () => Wu
    });
    var Eu = yu(1035),
      Ku = yu.n(Eu),
      Qu = yu(64),
      mu = yu(1170),
      Ju = yu(4604),
      Nu = yu(1825),
      Xu = yu(2335),
      Vu = yu(4611),
      ru = yu(1079);
    const Bu = new WeakMap;
    let xu = 0;

    function Su(uu) {
      let Ru = Bu.get(uu);
      return void 0 === Ru && (Ru = xu++, Bu.set(uu, Ru)), Ru
    }

    function pu(uu) {
      let {
        piece: Ru
      } = uu;
      return "space" === Ru.kind ? (0, ru.jsx)(ru.Fragment, {
        children: Ru.text
      }) : (0, ru.jsx)("span", {
        className: "DialogueWord",
        style: {
          "--word-delay": `${Ru.delayMs}ms`
        },
        children: (0, ru.jsx)(Ju.c, {
          text: "icon" === Ru.kind ? `[[${Ru.icon}]]` : Ru.text
        })
      })
    }

    function Tu(uu) {
      let {
        display: Ru
      } = uu;
      const {
        selectedLanguage: yu
      } = (0, mu.E)(), Eu = (0, Qu.useMemo)((() => (0, Vu.d)((0, Vu.g)(Ru).plan.pieces)), [Ru, yu.code]);
      return (0, ru.jsxs)("div", {
        className: Ku()("Dialogue", {
          DialogueAnimateIn: !1 !== Ru.animateIn
        }),
        children: [Ru.speakerName && (0, ru.jsx)(Nu.d, {
          text: Ru.speakerName,
          className: "DialogueSpeaker"
        }), (0, ru.jsx)("p", {
          className: "DialogueLine",
          children: Eu.map(((uu, Ru) => 1 === uu.length && "space" === uu[0].kind ? uu[0].text : (0, ru.jsx)("span", {
            className: "DialogueGlue",
            children: uu.map(((uu, Ru) => (0, ru.jsx)(pu, {
              piece: uu
            }, Ru)))
          }, Ru)))
        })]
      })
    }
    const Wu = (0, Qu.memo)((function() {
      const uu = (0, Xu.g)("dialogue");
      return (0, ru.jsx)("div", {
        className: "DialogueAnchor",
        "data-camera-keeper": "",
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: uu && (0, ru.jsx)(Tu, {
          display: uu
        }, Su(uu))
      })
    }))
  },
  4604: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Ju
    });
    var Eu = yu(64),
      Ku = yu(330),
      Qu = yu(1841),
      mu = yu(1079);

    function Ju(uu) {
      let {
        text: Ru
      } = uu;
      const yu = [];
      let Ju = "";
      return (0, Ku.ic)(Ru).forEach(((uu, Ru) => {
        if ("string" === typeof uu || !(0, Qu.d)(uu.icon)) return void(Ju += "string" === typeof uu ? uu : uu.icon);
        const Ku = Math.max(0, Ju.trimEnd().search(/\S{1,12}$/));
        yu.push((0, mu.jsxs)(Eu.Fragment, {
          children: [Ju.slice(0, Ku), (0, mu.jsxs)("span", {
            className: "InlineIconTextGlue",
            children: [Ju.slice(Ku), (0, mu.jsx)("span", {
              className: "InlineIconTextIcon",
              role: "img",
              "aria-label": uu.icon,
              children: (0, mu.jsx)(Qu.c, {
                itemName: uu.icon,
                amount: 0
              })
            })]
          })]
        }, Ru)), Ju = ""
      })), yu.push(Ju), (0, mu.jsx)(mu.Fragment, {
        children: yu
      })
    }
  },
  9048: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Qu
    });
    var Eu = yu(4307),
      Ku = yu(4314);

    function Qu(uu) {
      let {
        children: Ru,
        showing: yu,
        globallyUniqueKey: Qu,
        alwaysMountChildren: mu = !1,
        doGameplayStartStopOnShow: Ju = !0,
        keepsMovement: Nu = !1
      } = uu;
      return (0, Ku.c)(!0, yu, Qu, Nu), (0, Eu.e)(Ju, yu), yu || mu ? Ru : null
    }
  },
  4611: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => tu,
      g: () => su
    });
    var Eu = yu(4617),
      Ku = yu(330);
    const Qu = 120,
      mu = 260,
      Ju = 1.15,
      Nu = 1.2,
      Xu = 2,
      Vu = 1.08,
      ru = .8,
      Bu = .95,
      xu = 8,
      Su = "[\"')\\]\u300d\u300f\uff09]*",
      pu = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${Su}$`),
      Tu = new RegExp(`[?\uff1f]${Su}$`),
      Wu = new RegExp(`[!\uff01]${Su}$`),
      ju = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      Hu = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      du = new RegExp(`[${Hu}]`),
      bu = new RegExp(`[${Hu}]|[^${Hu}]+`, "g"),
      Cu = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function ku(uu) {
      let Ru = 2166136261;
      for (let yu = 0; yu < uu.length; yu++) Ru ^= uu.charCodeAt(yu), Ru = Math.imul(Ru, 16777619);
      return (Ru >>> 0) / 4294967295 * 2 - 1
    }

    function eu(uu) {
      var Ru;
      if (du.test(uu)) return 1;
      const yu = uu.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        Eu = yu.replace(/[^0-9]/g, "");
      if (Eu.length > 0 && !/\p{L}/u.test(yu)) return Math.min(Eu.length, 4);
      const Ku = null !== (Ru = yu.match(Cu)) && void 0 !== Ru ? Ru : [];
      if (0 === Ku.length) {
        var Qu, mu;
        const uu = null !== (Qu = null === (mu = yu.match(/\p{L}/gu)) || void 0 === mu ? void 0 : mu.length) && void 0 !== Qu ? Qu : 0;
        return 0 === uu ? 0 : Math.min(Math.max(1, Math.round(uu / 2.5)), xu)
      }
      const Ju = yu.replace(/[^\p{L}]/gu, ""),
        Nu = Ku.length > 1 && "e" === Ku.at(-1) && Ju.endsWith("e") && !Ju.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(uu.replace(/[^\p{L}]/gu, ""));
      return Math.min(Ku.length - (Nu ? 1 : 0), xu)
    }

    function Au(uu) {
      return uu.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function Du(uu) {
      const Ru = uu.replace(/[^\p{L}]/gu, "");
      return Ru.length >= 2 && Ru === Ru.toUpperCase() && Ru !== Ru.toLowerCase()
    }

    function Mu(uu, Ru) {
      var yu;
      const xu = Ru && (0, Eu.k)(Ru),
        Su = null !== (yu = null === xu || void 0 === xu ? void 0 : xu.syllableMs) && void 0 !== yu ? yu : Eu.c,
        Hu = function(uu) {
          const Ru = [];
          for (const Eu of (0, Ku.ic)(uu))
            if ("string" === typeof Eu)
              for (const uu of Eu.split(/(\s+)/)) {
                if ("" === uu) continue;
                if (/^\s+$/.test(uu)) {
                  Ru.push({
                    kind: "space",
                    text: uu
                  });
                  continue
                }
                if (!du.test(uu)) {
                  Ru.push({
                    kind: "word",
                    text: uu,
                    delayMs: 0
                  });
                  continue
                }
                let Eu = !0;
                for (const Ku of null !== (yu = uu.match(bu)) && void 0 !== yu ? yu : []) {
                  var yu;
                  const uu = Ru.at(-1);
                  Eu || "word" !== (null === uu || void 0 === uu ? void 0 : uu.kind) || du.test(Ku) || /[\p{L}\p{N}]/u.test(Ku) ? (Eu || Ru.push({
                    kind: "space",
                    text: "\u200b"
                  }), Ru.push({
                    kind: "word",
                    text: Ku,
                    delayMs: 0
                  }), Eu = !1) : uu.text += Ku
                }
              } else Ru.push({
                kind: "icon",
                text: Eu.icon,
                delayMs: 0
              });
          return Ru
        }(uu),
        Cu = [];
      let Mu = [];
      for (const Eu of Hu) "space" !== Eu.kind && (Mu.push(Eu), pu.test(Eu.text) && (Cu.push(Mu), Mu = []));
      Cu.push(Mu);
      const Iu = [];
      let Gu = 0;
      for (const Eu of Cu) {
        var Uu, nu;
        const uu = null !== (Uu = null === (nu = Eu.at(-1)) || void 0 === nu ? void 0 : nu.text) && void 0 !== Uu ? Uu : "",
          Ru = Tu.test(uu),
          yu = Wu.test(uu),
          Ku = Eu.map((uu => "word" === uu.kind ? eu(uu.text) : 1)),
          Hu = Ku.findLastIndex((uu => uu > 0));
        for (const [Tu, Wu] of Eu.entries()) {
          const uu = "word" === Wu.kind,
            Eu = Ku[Tu];
          Wu.delayMs = Gu;
          for (let Ku = 0; xu && Ku < Eu; Ku++) {
            const {
              intonation: Qu
            } = xu;
            let mu = Hu > 0 ? -Qu.declineSemitones * (Tu / Hu) : 0;
            mu += ku(`${Au(Wu.text)}|${Ku}`) * Qu.variationSemitones;
            const pu = Math.min(1, Qu.variationSemitones);
            let ju = xu.glideSemitones,
              du = 1;
            yu && (mu += Qu.exclaimLiftSemitones, du *= Ju), Ru && Tu === Hu && (mu += Qu.questionRiseSemitones * (Eu > 1 ? .5 + .5 * Ku / (Eu - 1) : 1), Ku === Eu - 1 && (ju = Math.abs(ju) + Qu.questionRiseSemitones / 2)), uu && Du(Wu.text) && (mu += Xu * pu, du *= Nu), Eu > 1 && 0 === Ku && (mu += ru * pu, du *= Vu), Iu.push({
              atMs: Gu + Ku * Su,
              semitones: mu,
              glideSemitones: ju,
              durationMs: Ku < Eu - 1 ? Math.min(xu.durationMs, Su * Bu) : xu.durationMs,
              level: du
            })
          }
          Gu += Eu * Su + (pu.test(Wu.text) ? mu : ju.test(Wu.text) ? Qu : 0)
        }
      }
      return {
        pieces: Hu.map((uu => "space" === uu.kind ? uu : "icon" === uu.kind ? {
          kind: "icon",
          icon: uu.text,
          delayMs: uu.delayMs
        } : {
          kind: "word",
          text: uu.text,
          delayMs: uu.delayMs
        })),
        blips: Iu
      }
    }
    var Iu = yu(1170),
      Gu = yu(1224),
      Uu = yu(1862);

    function nu(uu) {
      if ("string" === typeof uu) return uu;
      const Ru = Gu.f.get().getCurrentLanguageCode();
      return (0, Iu.q)(Ru, uu.translationKey, (0, Iu.o)(uu.params, Uu.d.shown))
    }

    function su(uu) {
      const Ru = void 0 === uu.voice ? null : (0, Eu.m)(uu.voice),
        yu = Ru && (0, Eu.k)(Ru);
      return {
        plan: Mu(nu(uu.line), yu),
        synth: yu
      }
    }

    function tu(uu) {
      const Ru = [];
      let yu = [];
      for (const [Ku, Qu] of uu.entries()) {
        var Eu;
        "space" === Qu.kind && (" " !== Qu.text || "icon" !== (null === (Eu = uu[Ku + 1]) || void 0 === Eu ? void 0 : Eu.kind)) ? (yu.length > 0 && Ru.push(yu), Ru.push([Qu]), yu = []) : yu.push(Qu)
      }
      return yu.length > 0 && Ru.push(yu), Ru
    }
  },
  8447: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Qu,
      g: () => Ku
    });
    let Eu = null;
    const Ku = function(uu) {
        const Ru = {
          cycle: uu,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Eu = Ru, () => {
          Eu === Ru && (Eu = null)
        }
      },
      Qu = () => {
        var uu;
        return null !== (uu = Eu) && void 0 !== uu && uu.canCycle() ? Eu.cycle : null
      }
  },
  36449: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Qu,
      d: () => pu,
      h: () => Tu,
      k: () => Ju,
      o: () => Bu,
      p: () => Wu,
      q: () => ru,
      u: () => Hu,
      v: () => Su,
      w: () => ju
    });
    var Eu = yu(27),
      Ku = yu(34);
    const Qu = "clientGameInventoryButtonsChanged",
      mu = new Map;

    function Ju() {
      return [...mu.values()].sort(((uu, Ru) => {
        var yu, Eu;
        return (null !== (yu = uu.order) && void 0 !== yu ? yu : 0) - (null !== (Eu = Ru.order) && void 0 !== Eu ? Eu : 0)
      }))
    }
    let Nu = null;

    function Xu(uu) {
      Nu = uu
    }
    let Vu = !1;

    function ru(uu) {
      Vu = !0;
      try {
        uu.onClick()
      } finally {
        Vu = !1
      }
      uu.panel && "clientGame" === Eu.d.get("openInGameMenuName") && Xu(uu.id)
    }

    function Bu() {
      return Vu
    }

    function xu() {
      return Ju().filter((uu => uu.panel && !uu.disabled))
    }

    function Su(uu) {
      const Ru = xu(),
        yu = Ru.findIndex((uu => uu.id === Nu));
      return !(yu < 0 || Ru.length < 2) && (ru(Ru[(yu + uu + Ru.length) % Ru.length]), !0)
    }

    function pu() {
      return null !== Nu && xu().length > 1
    }

    function Tu() {
      Xu(null)
    }

    function Wu() {
      "inventory" !== Eu.d.get("openInGameMenuName") && Xu(null)
    }

    function ju() {
      const uu = Nu;
      return Xu(null), uu
    }

    function Hu(uu) {
      return mu.set(uu.id, uu), Ku.k.Op(Qu, Ju(), !0), () => {
        mu.get(uu.id) === uu && (mu.delete(uu.id), Ku.k.Op(Qu, Ju()))
      }
    }
  },
  36445: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Ju,
      f: () => Tu,
      i: () => Wu,
      m: () => Bu,
      o: () => Xu,
      q: () => pu,
      u: () => xu,
      w: () => Vu
    });
    var Eu = yu(27),
      Ku = yu(34),
      Qu = yu(1250),
      mu = yu(36449);
    const Ju = "clientGameUiChanged";
    let Nu = null;

    function Xu() {
      return Nu
    }

    function Vu(uu, Ru) {
      const yu = {
        content: uu,
        menu: Ru
      };
      return Nu = yu, Ku.k.Op(Ju, Nu, !0), () => {
        Nu === yu && (Nu = null, Su = !1, Tu(), Ku.k.Op(Ju, null))
      }
    }
    let ru = null;

    function Bu() {
      return ru
    }

    function xu(uu) {
      return ru = uu, () => {
        ru === uu && (ru = null)
      }
    }
    let Su = !1;

    function pu() {
      const uu = Eu.d.get("openInGameMenuName");
      "clientGame" !== uu && (Su = "inventory" === uu), (0, mu.o)() || (0, mu.h)(), (0, Qu.o)(Qu.b), Eu.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function Tu() {
      ju(!1)
    }

    function Wu() {
      ju(Su)
    }

    function ju(uu) {
      "clientGame" === Eu.d.get("openInGameMenuName") && Eu.d.set({
        openInGameMenuName: uu ? "inventory" : null
      }), uu || (0, mu.h)(), Su = !1
    }
  },
  38279: (uu, Ru, yu) => {
    function Eu(uu, Ru, yu) {
      const Eu = new Set,
        Ku = new ResizeObserver(yu),
        Qu = () => {
          const Ru = new Set(document.querySelectorAll(uu));
          let Qu = !1;
          for (const uu of Eu) Ru.has(uu) || (Ku.unobserve(uu), Eu.delete(uu), Qu = !0);
          for (const uu of Ru) Eu.has(uu) || (Ku.observe(uu), mu.observe(uu, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), Eu.add(uu));
          Qu && yu()
        },
        mu = new MutationObserver((Ru => {
          Ru.some((uu => "attributes" === uu.type)) && yu(), Ru.some((Ru => function(uu, Ru, yu) {
            if ("childList" !== uu.type) return !1;
            for (const Eu of uu.addedNodes)
              if (Eu instanceof Element && (Eu.matches(Ru) || Eu.querySelector(Ru))) return !0;
            for (const Eu of uu.removedNodes)
              if (Eu instanceof Element)
                for (const uu of yu)
                  if (Eu.contains(uu)) return !0;
            return !1
          }(Ru, uu, Eu))) && Qu()
        }));
      mu.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const Ju of Ru) Ku.observe(Ju);
      return window.addEventListener("resize", yu), Qu(), yu(), () => {
        Ku.disconnect(), mu.disconnect(), window.removeEventListener("resize", yu)
      }
    }
    yu.d(Ru, {
      c: () => Eu
    })
  },
  8631: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Ju,
      d: () => Nu
    });
    var Eu = yu(27),
      Ku = yu(1280),
      Qu = yu(106);
    const mu = {
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

    function Ju() {
      return (0, Qu.isMobile)() && "function" === typeof navigator.vibrate
    }
    const Nu = new class {
      constructor(uu) {
        this.deps = uu, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(uu, Ru) {
        var yu;
        if (!this.deps.enabled()) return;
        const Eu = mu[uu],
          Ku = null !== Ru && void 0 !== Ru ? Ru : Eu.pattern;
        if (null === Ku) return void console.warn("No vibration pattern for", uu);
        const Qu = this.deps.now();
        Qu - this.lastAnyAt < 40 && Eu.priority < this.playingPriority || Qu - (null !== (yu = this.lastAt.get(uu)) && void 0 !== yu ? yu : -1 / 0) < Eu.minGapMs || Qu < this.playingUntil && Eu.priority < this.playingPriority || (this.lastAt.set(uu, Qu), this.lastAnyAt = Qu, this.playingUntil = Qu + Ku.reduce(((uu, Ru) => uu + Ru), 0), this.playingPriority = Eu.priority, this.deps.vibrate(Ku))
      }
    }({
      vibrate: uu => {
        navigator.vibrate([...uu])
      },
      now: () => performance.now(),
      enabled: () => Ju() && Eu.d.get("isTouchScreen") && Eu.d.get("clientEscMenuOptions").vibration && !(0, Ku.e)()
    })
  },
  36889: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Ju,
      e: () => mu
    });
    var Eu = yu(36882),
      Ku = yu(343),
      Qu = yu(1823);

    function mu(uu) {
      if ("TQ" in uu) return Cu.createAnimationScript(uu);
      return new Xu(uu).createAnimationScript()
    }

    function Ju(uu, Ru, yu, Ku) {
      const Qu = uu.TQ <= 0 ? 1 : Ru + yu * Math.max(0, Ku) / uu.TQ;
      return uu.WQ === Eu.j.LoopOnLastFrame ? Qu % 1 : uu.WQ === Eu.j.NoLoop && Qu >= 1 ? null : Math.min(1, Qu)
    }
    class Nu {
      createAnimationScript(uu) {
        const {
          TQ: Ru,
          loop: yu,
          jQ: Eu
        } = uu;
        return {
          TQ: Math.round(Ru),
          WQ: this.createLoopMode(null !== yu && void 0 !== yu && yu),
          jQ: this.createNodeSkeletonAnimationScript(null !== Eu && void 0 !== Eu ? Eu : null)
        }
      }
      createLoopMode(uu) {
        switch (uu) {
          case !1:
            return Eu.j.NoLoop;
          case !0:
            return Eu.j.LoopOnLastFrame;
          case "hold-on-last-frame":
            return Eu.j.HoldOnLastFrame
        }
        throw new Error(`Invalid loop mode schema: ${uu}`)
      }
      createNodeSkeletonAnimationScript(uu) {
        if (null === uu) return null;
        const Ru = {};
        for (const yu in uu) {
          const Eu = uu[yu];
          Ru[yu] = this.createNodeAnimationScript(Eu)
        }
        return Ru
      }
      createNodeAnimationScript(uu) {
        const {
          timeline: Ru
        } = uu, yu = Ru.filter((uu => Number.isFinite(uu.timeFraction)));
        return yu.sort(((uu, Ru) => uu.timeFraction - Ru.timeFraction)), {
          rotation: this.createTimelineFromKeyframes(yu, "rotation", Bu),
          position: this.createTimelineFromKeyframes(yu, "position", Su)
        }
      }
      createTimelineFromKeyframes(uu, Ru, yu) {
        const Eu = [];
        for (const Nu of uu) {
          const uu = Nu[Ru];
          if (uu) {
            const Ru = this.createAnimationFrameWithoutPrecomputes(Nu.timeFraction, uu);
            Vu(Ru) && Eu.push(Ru)
          }
        }
        const Ku = [];
        for (let Nu = 0; Nu < Eu.length; Nu++) {
          var Qu, mu, Ju;
          const uu = Eu[Nu],
            Ru = null !== (Qu = Eu[Nu - 1]) && void 0 !== Qu ? Qu : uu,
            Xu = null !== (mu = Eu[Nu + 1]) && void 0 !== mu ? mu : uu,
            Vu = null !== (Ju = Eu[Nu + 2]) && void 0 !== Ju ? Ju : Xu;
          Ku.push({
            ...uu,
            ...yu(Ru.post, Ru.timeFraction, uu.post, uu.timeFraction, Xu.pre, Xu.timeFraction, Vu.pre, Vu.timeFraction)
          })
        }
        return Ku
      }
      createAnimationFrameWithoutPrecomputes(uu, Ru) {
        let yu, Eu, Ku = null;
        var Qu;
        if ("object" === typeof Ru && "point" in Ru) Ku = null !== (Qu = Ru.bQ) && void 0 !== Qu ? Qu : null, yu = Ru.point, Eu = Ru.point;
        else if ("object" === typeof Ru && "pre" in Ru) {
          var mu;
          Ku = null !== (mu = Ru.bQ) && void 0 !== mu ? mu : null, yu = Ru.pre, Eu = Ru.post
        } else yu = Ru, Eu = Ru;
        return {
          timeFraction: uu,
          bQ: this.createLerpMode(Ku),
          pre: yu,
          post: Eu
        }
      }
      createLerpMode(uu) {
        return null === uu ? Eu.g.Linear : Nu.LERP_MODE_SCHEMA_MAPPING[uu]
      }
    }
    Nu.LERP_MODE_SCHEMA_MAPPING = {
      linear: Eu.g.Linear,
      "catmull-rom-spline": Eu.g.CatmullRomSpline
    };
    class Xu {
      constructor(uu) {
        this.animationSchema = uu
      }
      createAnimationScript() {
        const {
          animation_length: uu,
          loop: Ru,
          bones: yu
        } = this.animationSchema;
        return {
          TQ: Math.round(1e3 * uu),
          WQ: this.createLoopMode(null !== Ru && void 0 !== Ru && Ru),
          jQ: this.createNodeSkeletonAnimationScript(null !== yu && void 0 !== yu ? yu : null)
        }
      }
      createLoopMode(uu) {
        switch (uu) {
          case !1:
            return Eu.j.NoLoop;
          case !0:
            return Eu.j.LoopOnLastFrame;
          case "hold_on_last_frame":
            return Eu.j.HoldOnLastFrame
        }
        throw new Error(`Invalid Blockbench loop mode schema: ${uu}`)
      }
      createNodeSkeletonAnimationScript(uu) {
        if (null === uu) return null;
        const Ru = {};
        for (const yu in uu) {
          const Eu = uu[yu];
          Ru[yu] = this.createNodeAnimationScript(Eu)
        }
        return Ru
      }
      createNodeAnimationScript(uu) {
        const {
          rotation: Ru,
          position: yu
        } = uu;
        return {
          rotation: this.createAnimationTimeline(null !== Ru && void 0 !== Ru ? Ru : null, Tu, Bu, !0),
          position: this.createAnimationTimeline(null !== yu && void 0 !== yu ? yu : null, ju, Su, !1)
        }
      }
      createAnimationTimeline(uu, Ru, yu, Eu) {
        if (null === uu) return [];
        if (Array.isArray(uu)) {
          uu = {
            "0.0": uu
          }
        }
        const Ku = Object.entries(uu).map((uu => {
          let [yu, Eu] = uu;
          const Ku = Number(yu) / this.animationSchema.animation_length;
          return this.createAnimationFrameWithoutPrecomputes(Ku, Eu, Ru)
        })).filter(Vu);
        Ku.sort(((uu, Ru) => uu.timeFraction - Ru.timeFraction)), Eu && function(uu) {
          for (let Ru = 1; Ru < uu.length; Ru++) {
            const yu = uu[Ru - 1].post,
              Eu = uu[Ru],
              Ku = Hu(Eu.pre),
              Qu = Hu(Eu.post),
              mu = bu(yu, Eu.pre);
            bu(yu, Ku) < mu && (uu[Ru] = {
              ...Eu,
              pre: Ku,
              post: Qu
            })
          }
        }(Ku);
        const Qu = [];
        for (let Xu = 0; Xu < Ku.length; Xu++) {
          var mu, Ju, Nu;
          const uu = Ku[Xu],
            Ru = null !== (mu = Ku[Xu - 1]) && void 0 !== mu ? mu : uu,
            Eu = null !== (Ju = Ku[Xu + 1]) && void 0 !== Ju ? Ju : uu,
            Vu = null !== (Nu = Ku[Xu + 2]) && void 0 !== Nu ? Nu : Eu;
          Qu.push({
            ...uu,
            ...yu(Ru.post, Ru.timeFraction, uu.post, uu.timeFraction, Eu.pre, Eu.timeFraction, Vu.pre, Vu.timeFraction)
          })
        }
        return Qu
      }
      createAnimationFrameWithoutPrecomputes(uu, Ru, yu) {
        let Eu, Ku, Qu = null;
        if ("object" === typeof Ru && "post" in Ru) {
          var mu;
          Qu = null !== (mu = Ru.lerp_mode) && void 0 !== mu ? mu : null, Ku = pu(Ru.post, yu), Eu = Ru.pre ? pu(Ru.pre, yu) : Ku
        } else {
          const uu = pu(Ru, yu);
          Ku = uu, Eu = uu
        }
        return {
          timeFraction: uu,
          bQ: this.createLerpMode(Qu),
          pre: Eu,
          post: Ku
        }
      }
      createLerpMode(uu) {
        return null === uu ? Eu.g.Linear : Xu.LERP_MODE_SCHEMA_MAPPING[uu]
      }
    }

    function Vu(uu) {
      return Number.isFinite(uu.timeFraction) && ru(uu.pre) && ru(uu.post)
    }

    function ru(uu) {
      return Number.isFinite(uu[0]) && Number.isFinite(uu[1]) && Number.isFinite(uu[2])
    }

    function Bu(uu, Ru, yu, Eu, Ku, Qu, mu, Ju) {
      const Nu = Qu - Ru,
        Xu = Qu - Eu,
        Vu = Ju - Eu,
        ru = [null, null, null];
      for (let Bu = 0; Bu < ru.length; Bu++) ru[Bu] = xu(uu[Bu], yu[Bu], Ku[Bu], mu[Bu], Nu, Vu);
      return {
        CQ: Xu,
        kQ: ru
      }
    }

    function xu(uu, Ru, yu, Eu, Qu, mu) {
      return {
        AQ: Ku.c.computeShortestRotation(uu, yu) / Qu,
        DQ: Ku.c.computeShortestRotation(Ru, Eu) / mu,
        delta: Ku.c.computeShortestRotation(Ru, yu)
      }
    }

    function Su(uu, Ru, yu, Eu, Ku, Qu, mu, Ju) {
      const Nu = Qu - Ru,
        Xu = Qu - Eu,
        Vu = Ju - Eu,
        ru = [null, null, null];
      for (let Bu = 0; Bu < ru.length; Bu++) ru[Bu] = {
        AQ: (Ku[Bu] - uu[Bu]) / Nu,
        DQ: (mu[Bu] - yu[Bu]) / Vu,
        delta: Ku[Bu] - yu[Bu]
      };
      return {
        CQ: Xu,
        kQ: ru
      }
    }

    function pu(uu, Ru) {
      return null === Ru ? uu : Ru(uu)
    }

    function Tu(uu) {
      const [Ru, yu, Eu] = uu, mu = -(0, Qu.i)(Ru), Ju = -(0, Qu.i)(yu), Nu = (0, Qu.i)(Eu), Xu = Ku.c.quaternionFromEulerZYX(mu, Ju, Nu);
      return Ku.c.eulerYXZFromQuaternion(Xu)
    }
    Xu.LERP_MODE_SCHEMA_MAPPING = {
      linear: Eu.g.Linear,
      catmullrom: Eu.g.CatmullRomSpline
    };
    const Wu = 1 / 16;

    function ju(uu) {
      return [-uu[0] * Wu, uu[1] * Wu, uu[2] * Wu]
    }

    function Hu(uu) {
      const [Ru, yu, Eu] = uu;
      return [Ru >= 0 ? Math.PI - Ru : -Math.PI - Ru, du(yu + Math.PI), du(Eu + Math.PI)]
    }

    function du(uu) {
      return Ku.c.mod(uu + Math.PI, 2 * Math.PI) - Math.PI
    }

    function bu(uu, Ru) {
      return Math.abs(Ku.c.computeShortestRotation(uu[0], Ru[0])) + Math.abs(Ku.c.computeShortestRotation(uu[1], Ru[1])) + Math.abs(Ku.c.computeShortestRotation(uu[2], Ru[2]))
    }
    const Cu = new Nu
  },
  36882: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => mu,
      f: () => Qu,
      g: () => Eu,
      j: () => Ku
    });
    let Eu = function(uu) {
        return uu[uu.Linear = 0] = "Linear", uu[uu.CatmullRomSpline = 1] = "CatmullRomSpline", uu
      }({}),
      Ku = function(uu) {
        return uu[uu.NoLoop = 0] = "NoLoop", uu[uu.LoopOnLastFrame = 1] = "LoopOnLastFrame", uu[uu.HoldOnLastFrame = 2] = "HoldOnLastFrame", uu
      }({}),
      Qu = function(uu) {
        return uu[uu.Movement = 0] = "Movement", uu[uu.Action = 1] = "Action", uu[uu.Emote = 2] = "Emote", uu[uu.Custom = 3] = "Custom", uu
      }({}),
      mu = function(uu) {
        return uu[uu.Start = 0] = "Start", uu[uu.Stop = 1] = "Stop", uu
      }({})
  },
  4617: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Ku,
      d: () => Eu,
      g: () => Qu,
      k: () => Nu,
      m: () => mu
    });
    const Eu = ["sine", "triangle", "square", "sawtooth"],
      Ku = 55,
      Qu = {
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

    function mu(uu) {
      return "string" !== typeof uu ? uu : Object.hasOwn(Qu, uu) ? Qu[uu] : null
    }

    function Ju(uu, Ru, yu) {
      return Math.min(yu, Math.max(Ru, uu))
    }

    function Nu(uu) {
      const Ru = Ju(uu.durationMs, 10, 500),
        yu = Ju(uu.attackMs, 0, Ru),
        {
          intonation: Ku
        } = uu;
      return {
        waveform: Eu.includes(uu.waveform) ? uu.waveform : "sine",
        pitchHz: Ju(uu.pitchHz, 20, 4e3),
        glideSemitones: Ju(uu.glideSemitones, -24, 24),
        durationMs: Ru,
        attackMs: yu,
        releaseMs: Ju(uu.releaseMs, 0, Ru - yu),
        lowpassHz: null === uu.lowpassHz ? null : Ju(uu.lowpassHz, 20, 2e4),
        volume: Ju(uu.volume, 0, 2),
        intonation: {
          variationSemitones: Ju(Ku.variationSemitones, 0, 6),
          declineSemitones: Ju(Ku.declineSemitones, 0, 12),
          questionRiseSemitones: Ju(Ku.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: Ju(Ku.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: Ju(uu.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);