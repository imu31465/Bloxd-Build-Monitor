export const id = 30;
export const ids = [30];
export const modules = {
  5358: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => tU,
      f: () => gU
    });
    var cU = zU(1106),
      yU = zU.n(cU),
      QU = zU(61),
      AU = zU(1193),
      FU = zU(5360),
      oU = zU(1978),
      DU = zU(2616),
      EU = zU(5364),
      YU = zU(1305);
    const NU = new WeakMap;
    let IU = 0;

    function pU(UU) {
      let XU = NU.get(UU);
      return void 0 === XU && (XU = IU++, NU.set(UU, XU)), XU
    }

    function aU(UU) {
      let {
        piece: XU
      } = UU;
      return "space" === XU.kind ? (0, YU.jsx)(YU.Fragment, {
        children: XU.text
      }) : (0, YU.jsx)("span", {
        className: "DialogueWord",
        style: {
          "--word-delay": `${XU.delayMs}ms`
        },
        children: (0, YU.jsx)(FU.e, {
          text: "icon" === XU.kind ? `[[${XU.icon}]]` : XU.text
        })
      })
    }

    function tU(UU) {
      let {
        display: XU
      } = UU;
      const {
        selectedLanguage: zU
      } = (0, AU.I)(), cU = (0, QU.useMemo)((() => (0, EU.d)((0, EU.g)(XU).plan.pieces)), [XU, zU.code]);
      return (0, YU.jsxs)("div", {
        className: yU()("Dialogue", {
          DialogueAnimateIn: !1 !== XU.animateIn
        }),
        children: [XU.speakerName && (0, YU.jsx)(oU.d, {
          text: XU.speakerName,
          className: "DialogueSpeaker"
        }), (0, YU.jsx)("p", {
          className: "DialogueLine",
          children: cU.map(((UU, XU) => 1 === UU.length && "space" === UU[0].kind ? UU[0].text : (0, YU.jsx)("span", {
            className: "DialogueGlue",
            children: UU.map(((UU, XU) => (0, YU.jsx)(aU, {
              piece: UU
            }, XU)))
          }, XU)))
        })]
      })
    }
    const gU = (0, QU.memo)((function() {
      const UU = (0, DU.f)("dialogue");
      return (0, YU.jsx)("div", {
        className: "DialogueAnchor",
        "data-camera-keeper": "",
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: UU && (0, YU.jsx)(tU, {
          display: UU
        }, pU(UU))
      })
    }))
  },
  5360: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => FU
    });
    var cU = zU(61),
      yU = zU(320),
      QU = zU(1993),
      AU = zU(1305);

    function FU(UU) {
      let {
        text: XU
      } = UU;
      const zU = [];
      let FU = "";
      return (0, yU.rc)(XU).forEach(((UU, XU) => {
        if ("string" === typeof UU || !(0, QU.g)(UU.icon)) return void(FU += "string" === typeof UU ? UU : UU.icon);
        const yU = Math.max(0, FU.trimEnd().search(/\S{1,12}$/));
        zU.push((0, AU.jsxs)(cU.Fragment, {
          children: [FU.slice(0, yU), (0, AU.jsxs)("span", {
            className: "InlineIconTextGlue",
            children: [FU.slice(yU), (0, AU.jsx)("span", {
              className: "InlineIconTextIcon",
              role: "img",
              "aria-label": UU.icon,
              children: (0, AU.jsx)(QU.c, {
                itemName: UU.icon,
                amount: 0
              })
            })]
          })]
        }, XU)), FU = ""
      })), zU.push(FU), (0, AU.jsx)(AU.Fragment, {
        children: zU
      })
    }
  },
  34859: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => QU
    });
    var cU = zU(4977),
      yU = zU(4982);

    function QU(UU) {
      let {
        children: XU,
        showing: zU,
        globallyUniqueKey: QU,
        alwaysMountChildren: AU = !1,
        doGameplayStartStopOnShow: FU = !0,
        keepsMovement: oU = !1
      } = UU;
      return (0, yU.c)(!0, zU, QU, oU), (0, cU.d)(FU, zU), zU || AU ? XU : null
    }
  },
  5364: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => rU,
      g: () => SU
    });
    var cU = zU(5369),
      yU = zU(320);
    const QU = 120,
      AU = 260,
      FU = 1.15,
      oU = 1.2,
      DU = 2,
      EU = 1.08,
      YU = .8,
      NU = .95,
      IU = 8,
      pU = "[\"')\\]\u300d\u300f\uff09]*",
      aU = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${pU}$`),
      tU = new RegExp(`[?\uff1f]${pU}$`),
      gU = new RegExp(`[!\uff01]${pU}$`),
      kU = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      GU = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      BU = new RegExp(`[${GU}]`),
      ZU = new RegExp(`[${GU}]|[^${GU}]+`, "g"),
      RU = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function PU(UU) {
      let XU = 2166136261;
      for (let zU = 0; zU < UU.length; zU++) XU ^= UU.charCodeAt(zU), XU = Math.imul(XU, 16777619);
      return (XU >>> 0) / 4294967295 * 2 - 1
    }

    function WU(UU) {
      var XU;
      if (BU.test(UU)) return 1;
      const zU = UU.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        cU = zU.replace(/[^0-9]/g, "");
      if (cU.length > 0 && !/\p{L}/u.test(zU)) return Math.min(cU.length, 4);
      const yU = null !== (XU = zU.match(RU)) && void 0 !== XU ? XU : [];
      if (0 === yU.length) {
        var QU, AU;
        const UU = null !== (QU = null === (AU = zU.match(/\p{L}/gu)) || void 0 === AU ? void 0 : AU.length) && void 0 !== QU ? QU : 0;
        return 0 === UU ? 0 : Math.min(Math.max(1, Math.round(UU / 2.5)), IU)
      }
      const FU = zU.replace(/[^\p{L}]/gu, ""),
        oU = yU.length > 1 && "e" === yU.at(-1) && FU.endsWith("e") && !FU.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(UU.replace(/[^\p{L}]/gu, ""));
      return Math.min(yU.length - (oU ? 1 : 0), IU)
    }

    function dU(UU) {
      return UU.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function LU(UU) {
      const XU = UU.replace(/[^\p{L}]/gu, "");
      return XU.length >= 2 && XU === XU.toUpperCase() && XU !== XU.toLowerCase()
    }

    function eU(UU, XU) {
      var zU;
      const IU = XU && (0, cU.l)(XU),
        pU = null !== (zU = null === IU || void 0 === IU ? void 0 : IU.syllableMs) && void 0 !== zU ? zU : cU.e,
        GU = function(UU) {
          const XU = [];
          for (const cU of (0, yU.rc)(UU))
            if ("string" === typeof cU)
              for (const UU of cU.split(/(\s+)/)) {
                if ("" === UU) continue;
                if (/^\s+$/.test(UU)) {
                  XU.push({
                    kind: "space",
                    text: UU
                  });
                  continue
                }
                if (!BU.test(UU)) {
                  XU.push({
                    kind: "word",
                    text: UU,
                    delayMs: 0
                  });
                  continue
                }
                let cU = !0;
                for (const yU of null !== (zU = UU.match(ZU)) && void 0 !== zU ? zU : []) {
                  var zU;
                  const UU = XU.at(-1);
                  cU || "word" !== (null === UU || void 0 === UU ? void 0 : UU.kind) || BU.test(yU) || /[\p{L}\p{N}]/u.test(yU) ? (cU || XU.push({
                    kind: "space",
                    text: "\u200b"
                  }), XU.push({
                    kind: "word",
                    text: yU,
                    delayMs: 0
                  }), cU = !1) : UU.text += yU
                }
              } else XU.push({
                kind: "icon",
                text: cU.icon,
                delayMs: 0
              });
          return XU
        }(UU),
        RU = [];
      let eU = [];
      for (const cU of GU) "space" !== cU.kind && (eU.push(cU), aU.test(cU.text) && (RU.push(eU), eU = []));
      RU.push(eU);
      const CU = [];
      let wU = 0;
      for (const cU of RU) {
        var qU, OU;
        const UU = null !== (qU = null === (OU = cU.at(-1)) || void 0 === OU ? void 0 : OU.text) && void 0 !== qU ? qU : "",
          XU = tU.test(UU),
          zU = gU.test(UU),
          yU = cU.map((UU => "word" === UU.kind ? WU(UU.text) : 1)),
          GU = yU.findLastIndex((UU => UU > 0));
        for (const [tU, gU] of cU.entries()) {
          const UU = "word" === gU.kind,
            cU = yU[tU];
          gU.delayMs = wU;
          for (let yU = 0; IU && yU < cU; yU++) {
            const {
              intonation: QU
            } = IU;
            let AU = GU > 0 ? -QU.declineSemitones * (tU / GU) : 0;
            AU += PU(`${dU(gU.text)}|${yU}`) * QU.variationSemitones;
            const aU = Math.min(1, QU.variationSemitones);
            let kU = IU.glideSemitones,
              BU = 1;
            zU && (AU += QU.exclaimLiftSemitones, BU *= FU), XU && tU === GU && (AU += QU.questionRiseSemitones * (cU > 1 ? .5 + .5 * yU / (cU - 1) : 1), yU === cU - 1 && (kU = Math.abs(kU) + QU.questionRiseSemitones / 2)), UU && LU(gU.text) && (AU += DU * aU, BU *= oU), cU > 1 && 0 === yU && (AU += YU * aU, BU *= EU), CU.push({
              atMs: wU + yU * pU,
              semitones: AU,
              glideSemitones: kU,
              durationMs: yU < cU - 1 ? Math.min(IU.durationMs, pU * NU) : IU.durationMs,
              level: BU
            })
          }
          wU += cU * pU + (aU.test(gU.text) ? AU : kU.test(gU.text) ? QU : 0)
        }
      }
      return {
        pieces: GU.map((UU => "space" === UU.kind ? UU : "icon" === UU.kind ? {
          kind: "icon",
          icon: UU.text,
          delayMs: UU.delayMs
        } : {
          kind: "word",
          text: UU.text,
          delayMs: UU.delayMs
        })),
        blips: CU
      }
    }
    var CU = zU(1193),
      wU = zU(1266),
      qU = zU(2012);

    function OU(UU) {
      if ("string" === typeof UU) return UU;
      const XU = wU.h.get().getCurrentLanguageCode();
      return (0, CU.t)(XU, UU.translationKey, (0, CU.p)(UU.params, qU.c.shown))
    }

    function SU(UU) {
      const XU = void 0 === UU.voice ? null : (0, cU.o)(UU.voice),
        zU = XU && (0, cU.l)(XU);
      return {
        plan: eU(OU(UU.line), zU),
        synth: zU
      }
    }

    function rU(UU) {
      const XU = [];
      let zU = [];
      for (const [yU, QU] of UU.entries()) {
        var cU;
        "space" === QU.kind && (" " !== QU.text || "icon" !== (null === (cU = UU[yU + 1]) || void 0 === cU ? void 0 : cU.kind)) ? (zU.length > 0 && XU.push(zU), XU.push([QU]), zU = []) : zU.push(QU)
      }
      return zU.length > 0 && XU.push(zU), XU
    }
  },
  39296: (UU, XU, zU) => {
    function cU(UU, XU, zU) {
      const cU = new Set,
        yU = new ResizeObserver(zU),
        QU = () => {
          const XU = new Set(document.querySelectorAll(UU));
          let QU = !1;
          for (const UU of cU) XU.has(UU) || (yU.unobserve(UU), cU.delete(UU), QU = !0);
          for (const UU of XU) cU.has(UU) || (yU.observe(UU), AU.observe(UU, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), cU.add(UU));
          QU && zU()
        },
        AU = new MutationObserver((XU => {
          XU.some((UU => "attributes" === UU.type)) && zU(), XU.some((XU => function(UU, XU, zU) {
            if ("childList" !== UU.type) return !1;
            for (const cU of UU.addedNodes)
              if (cU instanceof Element && (cU.matches(XU) || cU.querySelector(XU))) return !0;
            for (const cU of UU.removedNodes)
              if (cU instanceof Element)
                for (const UU of zU)
                  if (cU.contains(UU)) return !0;
            return !1
          }(XU, UU, cU))) && QU()
        }));
      AU.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const FU of XU) yU.observe(FU);
      return window.addEventListener("resize", zU), QU(), zU(), () => {
        yU.disconnect(), AU.disconnect(), window.removeEventListener("resize", zU)
      }
    }
    zU.d(XU, {
      e: () => cU
    })
  },
  9449: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => FU,
      e: () => oU
    });
    var cU = zU(27),
      yU = zU(1360),
      QU = zU(97);
    const AU = {
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

    function FU() {
      return (0, QU.isMobile)() && "function" === typeof navigator.vibrate
    }
    const oU = new class {
      constructor(UU) {
        this.deps = UU, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(UU, XU) {
        var zU;
        if (!this.deps.enabled()) return;
        const cU = AU[UU],
          yU = null !== XU && void 0 !== XU ? XU : cU.pattern;
        if (null === yU) return void console.warn("No vibration pattern for", UU);
        const QU = this.deps.now();
        QU - this.lastAnyAt < 40 && cU.priority < this.playingPriority || QU - (null !== (zU = this.lastAt.get(UU)) && void 0 !== zU ? zU : -1 / 0) < cU.minGapMs || QU < this.playingUntil && cU.priority < this.playingPriority || (this.lastAt.set(UU, QU), this.lastAnyAt = QU, this.playingUntil = QU + yU.reduce(((UU, XU) => UU + XU), 0), this.playingPriority = cU.priority, this.deps.vibrate(yU))
      }
    }({
      vibrate: UU => {
        navigator.vibrate([...UU])
      },
      now: () => performance.now(),
      enabled: () => FU() && cU.e.get("isTouchScreen") && cU.e.get("clientEscMenuOptions").vibration && !(0, yU.c)()
    })
  },
  5369: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => yU,
      h: () => cU,
      i: () => QU,
      l: () => oU,
      o: () => AU
    });
    const cU = ["sine", "triangle", "square", "sawtooth"],
      yU = 55,
      QU = {
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

    function AU(UU) {
      return "string" !== typeof UU ? UU : Object.hasOwn(QU, UU) ? QU[UU] : null
    }

    function FU(UU, XU, zU) {
      return Math.min(zU, Math.max(XU, UU))
    }

    function oU(UU) {
      const XU = FU(UU.durationMs, 10, 500),
        zU = FU(UU.attackMs, 0, XU),
        {
          intonation: yU
        } = UU;
      return {
        waveform: cU.includes(UU.waveform) ? UU.waveform : "sine",
        pitchHz: FU(UU.pitchHz, 20, 4e3),
        glideSemitones: FU(UU.glideSemitones, -24, 24),
        durationMs: XU,
        attackMs: zU,
        releaseMs: FU(UU.releaseMs, 0, XU - zU),
        lowpassHz: null === UU.lowpassHz ? null : FU(UU.lowpassHz, 20, 2e4),
        volume: FU(UU.volume, 0, 2),
        intonation: {
          variationSemitones: FU(yU.variationSemitones, 0, 6),
          declineSemitones: FU(yU.declineSemitones, 0, 12),
          questionRiseSemitones: FU(yU.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: FU(yU.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: FU(UU.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);