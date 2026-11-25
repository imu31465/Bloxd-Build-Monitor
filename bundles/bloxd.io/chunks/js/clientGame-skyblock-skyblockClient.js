export const id = 25;
export const ids = [25];
export const modules = {
  36990: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Nu,
      h: () => Ou,
      k: () => cu,
      n: () => bu
    });
    var su = ju(34547),
      Uu = ju(36992),
      Zu = ju(36998),
      Xu = ju(8942),
      lu = ju(1499),
      qu = ju(58),
      fu = ju(65),
      Cu = ju(1154);

    function bu() {
      var uu;
      return (0, lu.g)(Uu.c, (0, Uu.l)()), (0, Cu.jsx)(Cu.Fragment, {
        children: null === (uu = (0, Uu.l)()) || void 0 === uu ? void 0 : uu.content
      })
    }

    function cu(uu) {
      var Eu;
      let {
        show: ju
      } = uu;
      (0, lu.g)(Uu.c, (0, Uu.l)());
      const fu = null === (Eu = (0, Uu.l)()) || void 0 === Eu ? void 0 : Eu.menu;
      return (0, qu.useEffect)((() => {
        var uu;
        ju || (null === fu || void 0 === fu || null === (uu = fu.onClose) || void 0 === uu || uu.call(fu), (0, Zu.q)())
      }), [ju, fu]), (0, qu.useEffect)((() => ju ? (0, Xu.f)(Zu.x, Zu.h) : void 0), [ju]), (0, Cu.jsx)(su.b, {
        showing: ju,
        globallyUniqueKey: "clientGameMenu",
        children: null === fu || void 0 === fu ? void 0 : fu.content
      })
    }

    function Nu(uu) {
      let {
        placement: Eu = "bottom"
      } = uu;
      return (0, Cu.jsx)("div", {
        id: `clientGameHud-${Eu}`,
        style: {
          display: "contents"
        }
      })
    }

    function Ou(uu) {
      let {
        children: Eu,
        placement: ju = "bottom"
      } = uu;
      const [su, Uu] = (0, qu.useState)(null);
      return (0, qu.useEffect)((() => {
        Uu(document.getElementById(`clientGameHud-${ju}`))
      }), [ju]), su ? (0, fu.createPortal)(Eu, su) : null
    }
  },
  4997: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => hu,
      e: () => Du
    });
    var su = ju(1105),
      Uu = ju.n(su),
      Zu = ju(58),
      Xu = ju(1244),
      lu = ju(4999),
      qu = ju(1964),
      fu = ju(2543),
      Cu = ju(5003),
      bu = ju(1154);
    const cu = new WeakMap;
    let Nu = 0;

    function Ou(uu) {
      let Eu = cu.get(uu);
      return void 0 === Eu && (Eu = Nu++, cu.set(uu, Eu)), Eu
    }

    function Yu(uu) {
      let {
        piece: Eu
      } = uu;
      return "space" === Eu.kind ? (0, bu.jsx)(bu.Fragment, {
        children: Eu.text
      }) : (0, bu.jsx)("span", {
        className: "DialogueWord",
        style: {
          "--word-delay": `${Eu.delayMs}ms`
        },
        children: (0, bu.jsx)(lu.e, {
          text: "icon" === Eu.kind ? `[[${Eu.icon}]]` : Eu.text
        })
      })
    }

    function hu(uu) {
      let {
        display: Eu
      } = uu;
      const {
        selectedLanguage: ju
      } = (0, Xu.A)(), su = (0, Zu.useMemo)((() => (0, Cu.e)((0, Cu.i)(Eu).plan.pieces)), [Eu, ju.code]);
      return (0, bu.jsxs)("div", {
        className: Uu()("Dialogue", {
          DialogueAnimateIn: !1 !== Eu.animateIn
        }),
        children: [Eu.speakerName && (0, bu.jsx)(qu.d, {
          text: Eu.speakerName,
          className: "DialogueSpeaker"
        }), (0, bu.jsx)("p", {
          className: "DialogueLine",
          children: su.map(((uu, Eu) => 1 === uu.length && "space" === uu[0].kind ? uu[0].text : (0, bu.jsx)("span", {
            className: "DialogueGlue",
            children: uu.map(((uu, Eu) => (0, bu.jsx)(Yu, {
              piece: uu
            }, Eu)))
          }, Eu)))
        })]
      })
    }
    const Du = (0, Zu.memo)((function() {
      const uu = (0, fu.h)("dialogue");
      return (0, bu.jsx)("div", {
        className: "DialogueAnchor",
        "data-camera-keeper": "",
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: uu && (0, bu.jsx)(hu, {
          display: uu
        }, Ou(uu))
      })
    }))
  },
  4999: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => lu
    });
    var su = ju(58),
      Uu = ju(337),
      Zu = ju(1971),
      Xu = ju(1154);

    function lu(uu) {
      let {
        text: Eu
      } = uu;
      const ju = [];
      let lu = "";
      return (0, Uu.gc)(Eu).forEach(((uu, Eu) => {
        if ("string" === typeof uu || !(0, Zu.h)(uu.icon)) return void(lu += "string" === typeof uu ? uu : uu.icon);
        const Uu = Math.max(0, lu.trimEnd().search(/\S{1,12}$/));
        ju.push((0, Xu.jsxs)(su.Fragment, {
          children: [lu.slice(0, Uu), (0, Xu.jsxs)("span", {
            className: "InlineIconTextGlue",
            children: [lu.slice(Uu), (0, Xu.jsx)("span", {
              className: "InlineIconTextIcon",
              role: "img",
              "aria-label": uu.icon,
              children: (0, Xu.jsx)(Zu.d, {
                itemName: uu.icon,
                amount: 0
              })
            })]
          })]
        }, Eu)), lu = ""
      })), ju.push(lu), (0, Xu.jsx)(Xu.Fragment, {
        children: ju
      })
    }
  },
  34547: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Zu
    });
    var su = ju(4723),
      Uu = ju(4726);

    function Zu(uu) {
      let {
        children: Eu,
        showing: ju,
        globallyUniqueKey: Zu,
        alwaysMountChildren: Xu = !1,
        doGameplayStartStopOnShow: lu = !0,
        keepsMovement: qu = !1
      } = uu;
      return (0, Uu.e)(!0, ju, Zu, qu), (0, su.e)(lu, ju), ju || Xu ? Eu : null
    }
  },
  5003: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Vu,
      i: () => Ku
    });
    var su = ju(5011),
      Uu = ju(337);
    const Zu = 120,
      Xu = 260,
      lu = 1.15,
      qu = 1.2,
      fu = 2,
      Cu = 1.08,
      bu = .8,
      cu = .95,
      Nu = 8,
      Ou = "[\"')\\]\u300d\u300f\uff09]*",
      Yu = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${Ou}$`),
      hu = new RegExp(`[?\uff1f]${Ou}$`),
      Du = new RegExp(`[!\uff01]${Ou}$`),
      gu = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      Mu = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      eu = new RegExp(`[${Mu}]`),
      Gu = new RegExp(`[${Mu}]|[^${Mu}]+`, "g"),
      pu = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function wu(uu) {
      let Eu = 2166136261;
      for (let ju = 0; ju < uu.length; ju++) Eu ^= uu.charCodeAt(ju), Eu = Math.imul(Eu, 16777619);
      return (Eu >>> 0) / 4294967295 * 2 - 1
    }

    function Ju(uu) {
      var Eu;
      if (eu.test(uu)) return 1;
      const ju = uu.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        su = ju.replace(/[^0-9]/g, "");
      if (su.length > 0 && !/\p{L}/u.test(ju)) return Math.min(su.length, 4);
      const Uu = null !== (Eu = ju.match(pu)) && void 0 !== Eu ? Eu : [];
      if (0 === Uu.length) {
        var Zu, Xu;
        const uu = null !== (Zu = null === (Xu = ju.match(/\p{L}/gu)) || void 0 === Xu ? void 0 : Xu.length) && void 0 !== Zu ? Zu : 0;
        return 0 === uu ? 0 : Math.min(Math.max(1, Math.round(uu / 2.5)), Nu)
      }
      const lu = ju.replace(/[^\p{L}]/gu, ""),
        qu = Uu.length > 1 && "e" === Uu.at(-1) && lu.endsWith("e") && !lu.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(uu.replace(/[^\p{L}]/gu, ""));
      return Math.min(Uu.length - (qu ? 1 : 0), Nu)
    }

    function du(uu) {
      return uu.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function au(uu) {
      const Eu = uu.replace(/[^\p{L}]/gu, "");
      return Eu.length >= 2 && Eu === Eu.toUpperCase() && Eu !== Eu.toLowerCase()
    }

    function Pu(uu, Eu) {
      var ju;
      const Nu = Eu && (0, su.l)(Eu),
        Ou = null !== (ju = null === Nu || void 0 === Nu ? void 0 : Nu.syllableMs) && void 0 !== ju ? ju : su.e,
        Mu = function(uu) {
          const Eu = [];
          for (const su of (0, Uu.gc)(uu))
            if ("string" === typeof su)
              for (const uu of su.split(/(\s+)/)) {
                if ("" === uu) continue;
                if (/^\s+$/.test(uu)) {
                  Eu.push({
                    kind: "space",
                    text: uu
                  });
                  continue
                }
                if (!eu.test(uu)) {
                  Eu.push({
                    kind: "word",
                    text: uu,
                    delayMs: 0
                  });
                  continue
                }
                let su = !0;
                for (const Uu of null !== (ju = uu.match(Gu)) && void 0 !== ju ? ju : []) {
                  var ju;
                  const uu = Eu.at(-1);
                  su || "word" !== (null === uu || void 0 === uu ? void 0 : uu.kind) || eu.test(Uu) || /[\p{L}\p{N}]/u.test(Uu) ? (su || Eu.push({
                    kind: "space",
                    text: "\u200b"
                  }), Eu.push({
                    kind: "word",
                    text: Uu,
                    delayMs: 0
                  }), su = !1) : uu.text += Uu
                }
              } else Eu.push({
                kind: "icon",
                text: su.icon,
                delayMs: 0
              });
          return Eu
        }(uu),
        pu = [];
      let Pu = [];
      for (const su of Mu) "space" !== su.kind && (Pu.push(su), Yu.test(su.text) && (pu.push(Pu), Pu = []));
      pu.push(Pu);
      const ou = [];
      let ku = 0;
      for (const su of pu) {
        var mu, vu;
        const uu = null !== (mu = null === (vu = su.at(-1)) || void 0 === vu ? void 0 : vu.text) && void 0 !== mu ? mu : "",
          Eu = hu.test(uu),
          ju = Du.test(uu),
          Uu = su.map((uu => "word" === uu.kind ? Ju(uu.text) : 1)),
          Mu = Uu.findLastIndex((uu => uu > 0));
        for (const [hu, Du] of su.entries()) {
          const uu = "word" === Du.kind,
            su = Uu[hu];
          Du.delayMs = ku;
          for (let Uu = 0; Nu && Uu < su; Uu++) {
            const {
              intonation: Zu
            } = Nu;
            let Xu = Mu > 0 ? -Zu.declineSemitones * (hu / Mu) : 0;
            Xu += wu(`${du(Du.text)}|${Uu}`) * Zu.variationSemitones;
            const Yu = Math.min(1, Zu.variationSemitones);
            let gu = Nu.glideSemitones,
              eu = 1;
            ju && (Xu += Zu.exclaimLiftSemitones, eu *= lu), Eu && hu === Mu && (Xu += Zu.questionRiseSemitones * (su > 1 ? .5 + .5 * Uu / (su - 1) : 1), Uu === su - 1 && (gu = Math.abs(gu) + Zu.questionRiseSemitones / 2)), uu && au(Du.text) && (Xu += fu * Yu, eu *= qu), su > 1 && 0 === Uu && (Xu += bu * Yu, eu *= Cu), ou.push({
              atMs: ku + Uu * Ou,
              semitones: Xu,
              glideSemitones: gu,
              durationMs: Uu < su - 1 ? Math.min(Nu.durationMs, Ou * cu) : Nu.durationMs,
              level: eu
            })
          }
          ku += su * Ou + (Yu.test(Du.text) ? Xu : gu.test(Du.text) ? Zu : 0)
        }
      }
      return {
        pieces: Mu.map((uu => "space" === uu.kind ? uu : "icon" === uu.kind ? {
          kind: "icon",
          icon: uu.text,
          delayMs: uu.delayMs
        } : {
          kind: "word",
          text: uu.text,
          delayMs: uu.delayMs
        })),
        blips: ou
      }
    }
    var ou = ju(1244),
      ku = ju(1303),
      mu = ju(1995);

    function vu(uu) {
      if ("string" === typeof uu) return uu;
      const Eu = ku.h.get().getCurrentLanguageCode();
      return (0, ou.u)(Eu, uu.translationKey, (0, ou.r)(uu.params, mu.e.shown))
    }

    function Ku(uu) {
      const Eu = void 0 === uu.voice ? null : (0, su.o)(uu.voice),
        ju = Eu && (0, su.l)(Eu);
      return {
        plan: Pu(vu(uu.line), ju),
        synth: ju
      }
    }

    function Vu(uu) {
      const Eu = [];
      let ju = [];
      for (const [Uu, Zu] of uu.entries()) {
        var su;
        "space" === Zu.kind && (" " !== Zu.text || "icon" !== (null === (su = uu[Uu + 1]) || void 0 === su ? void 0 : su.kind)) ? (ju.length > 0 && Eu.push(ju), Eu.push([Zu]), ju = []) : ju.push(Zu)
      }
      return ju.length > 0 && Eu.push(ju), Eu
    }
  },
  8942: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Zu,
      f: () => Uu
    });
    let su = null;
    const Uu = function(uu) {
        const Eu = {
          cycle: uu,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return su = Eu, () => {
          su === Eu && (su = null)
        }
      },
      Zu = () => {
        var uu;
        return null !== (uu = su) && void 0 !== uu && uu.canCycle() ? su.cycle : null
      }
  },
  36998: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Zu,
      h: () => Yu,
      j: () => hu,
      k: () => lu,
      o: () => cu,
      q: () => Du,
      r: () => bu,
      t: () => Mu,
      x: () => Ou,
      y: () => gu
    });
    var su = ju(22),
      Uu = ju(24);
    const Zu = "clientGameInventoryButtonsChanged",
      Xu = new Map;

    function lu() {
      return [...Xu.values()].sort(((uu, Eu) => {
        var ju, su;
        return (null !== (ju = uu.order) && void 0 !== ju ? ju : 0) - (null !== (su = Eu.order) && void 0 !== su ? su : 0)
      }))
    }
    let qu = null;

    function fu(uu) {
      qu = uu
    }
    let Cu = !1;

    function bu(uu) {
      Cu = !0;
      try {
        uu.onClick()
      } finally {
        Cu = !1
      }
      uu.panel && "clientGame" === su.d.get("openInGameMenuName") && fu(uu.id)
    }

    function cu() {
      return Cu
    }

    function Nu() {
      return lu().filter((uu => uu.panel && !uu.disabled))
    }

    function Ou(uu) {
      const Eu = Nu(),
        ju = Eu.findIndex((uu => uu.id === qu));
      return !(ju < 0 || Eu.length < 2) && (bu(Eu[(ju + uu + Eu.length) % Eu.length]), !0)
    }

    function Yu() {
      return null !== qu && Nu().length > 1
    }

    function hu() {
      fu(null)
    }

    function Du() {
      "inventory" !== su.d.get("openInGameMenuName") && fu(null)
    }

    function gu() {
      const uu = qu;
      return fu(null), uu
    }

    function Mu(uu) {
      return Xu.set(uu.id, uu), Uu.h.TY(Zu, lu(), !0), () => {
        Xu.get(uu.id) === uu && (Xu.delete(uu.id), Uu.h.TY(Zu, lu()))
      }
    }
  },
  36992: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => lu,
      e: () => hu,
      g: () => Du,
      k: () => cu,
      l: () => fu,
      m: () => Yu,
      n: () => Nu,
      o: () => Cu
    });
    var su = ju(22),
      Uu = ju(24),
      Zu = ju(1343),
      Xu = ju(36998);
    const lu = "clientGameUiChanged";
    let qu = null;

    function fu() {
      return qu
    }

    function Cu(uu, Eu) {
      const ju = {
        content: uu,
        menu: Eu
      };
      return qu = ju, Uu.h.TY(lu, qu, !0), () => {
        qu === ju && (qu = null, Ou = !1, hu(), Uu.h.TY(lu, null))
      }
    }
    let bu = null;

    function cu() {
      return bu
    }

    function Nu(uu) {
      return bu = uu, () => {
        bu === uu && (bu = null)
      }
    }
    let Ou = !1;

    function Yu() {
      const uu = su.d.get("openInGameMenuName");
      "clientGame" !== uu && (Ou = "inventory" === uu), (0, Xu.o)() || (0, Xu.j)(), (0, Zu.t)(Zu.b), su.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function hu() {
      gu(!1)
    }

    function Du() {
      gu(Ou)
    }

    function gu(uu) {
      "clientGame" === su.d.get("openInGameMenuName") && su.d.set({
        openInGameMenuName: uu ? "inventory" : null
      }), uu || (0, Xu.j)(), Ou = !1
    }
  },
  38834: (uu, Eu, ju) => {
    function su(uu, Eu, ju) {
      const su = new Set,
        Uu = new ResizeObserver(ju),
        Zu = () => {
          const Eu = new Set(document.querySelectorAll(uu));
          let Zu = !1;
          for (const uu of su) Eu.has(uu) || (Uu.unobserve(uu), su.delete(uu), Zu = !0);
          for (const uu of Eu) su.has(uu) || (Uu.observe(uu), Xu.observe(uu, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), su.add(uu));
          Zu && ju()
        },
        Xu = new MutationObserver((Eu => {
          Eu.some((uu => "attributes" === uu.type)) && ju(), Eu.some((Eu => function(uu, Eu, ju) {
            if ("childList" !== uu.type) return !1;
            for (const su of uu.addedNodes)
              if (su instanceof Element && (su.matches(Eu) || su.querySelector(Eu))) return !0;
            for (const su of uu.removedNodes)
              if (su instanceof Element)
                for (const uu of ju)
                  if (su.contains(uu)) return !0;
            return !1
          }(Eu, uu, su))) && Zu()
        }));
      Xu.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const lu of Eu) Uu.observe(lu);
      return window.addEventListener("resize", ju), Zu(), ju(), () => {
        Uu.disconnect(), Xu.disconnect(), window.removeEventListener("resize", ju)
      }
    }
    ju.d(Eu, {
      e: () => su
    })
  },
  9091: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => lu,
      e: () => qu
    });
    var su = ju(22),
      Uu = ju(1369),
      Zu = ju(91);
    const Xu = {
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

    function lu() {
      return (0, Zu.isMobile)() && "function" === typeof navigator.vibrate
    }
    const qu = new class {
      constructor(uu) {
        this.deps = uu, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(uu, Eu) {
        var ju;
        if (!this.deps.enabled()) return;
        const su = Xu[uu],
          Uu = null !== Eu && void 0 !== Eu ? Eu : su.pattern;
        if (null === Uu) return void console.warn("No vibration pattern for", uu);
        const Zu = this.deps.now();
        Zu - this.lastAnyAt < 40 && su.priority < this.playingPriority || Zu - (null !== (ju = this.lastAt.get(uu)) && void 0 !== ju ? ju : -1 / 0) < su.minGapMs || Zu < this.playingUntil && su.priority < this.playingPriority || (this.lastAt.set(uu, Zu), this.lastAnyAt = Zu, this.playingUntil = Zu + Uu.reduce(((uu, Eu) => uu + Eu), 0), this.playingPriority = su.priority, this.deps.vibrate(Uu))
      }
    }({
      vibrate: uu => {
        navigator.vibrate([...uu])
      },
      now: () => performance.now(),
      enabled: () => lu() && su.d.get("isTouchScreen") && su.d.get("clientEscMenuOptions").vibration && !(0, Uu.c)()
    })
  },
  5011: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Uu,
      h: () => su,
      j: () => Zu,
      l: () => qu,
      o: () => Xu
    });
    const su = ["sine", "triangle", "square", "sawtooth"],
      Uu = 55,
      Zu = {
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

    function Xu(uu) {
      return "string" !== typeof uu ? uu : Object.hasOwn(Zu, uu) ? Zu[uu] : null
    }

    function lu(uu, Eu, ju) {
      return Math.min(ju, Math.max(Eu, uu))
    }

    function qu(uu) {
      const Eu = lu(uu.durationMs, 10, 500),
        ju = lu(uu.attackMs, 0, Eu),
        {
          intonation: Uu
        } = uu;
      return {
        waveform: su.includes(uu.waveform) ? uu.waveform : "sine",
        pitchHz: lu(uu.pitchHz, 20, 4e3),
        glideSemitones: lu(uu.glideSemitones, -24, 24),
        durationMs: Eu,
        attackMs: ju,
        releaseMs: lu(uu.releaseMs, 0, Eu - ju),
        lowpassHz: null === uu.lowpassHz ? null : lu(uu.lowpassHz, 20, 2e4),
        volume: lu(uu.volume, 0, 2),
        intonation: {
          variationSemitones: lu(Uu.variationSemitones, 0, 6),
          declineSemitones: lu(Uu.declineSemitones, 0, 12),
          questionRiseSemitones: lu(Uu.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: lu(Uu.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: lu(uu.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);