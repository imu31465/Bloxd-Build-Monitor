export const id = 30;
export const ids = [30];
export const modules = {
  5333: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => EV,
      i: () => BV
    });
    var JV = xV(1146),
      YV = xV.n(JV),
      UV = xV(62),
      yV = xV(1220),
      pV = xV(5335),
      QV = xV(2021),
      nV = xV(2693),
      wV = xV(5339),
      ZV = xV(1321);
    const vV = new WeakMap;
    let rV = 0;

    function kV(VV) {
      let eV = vV.get(VV);
      return void 0 === eV && (eV = rV++, vV.set(VV, eV)), eV
    }

    function bV(VV) {
      let {
        piece: eV
      } = VV;
      return "space" === eV.kind ? (0, ZV.jsx)(ZV.Fragment, {
        children: eV.text
      }) : (0, ZV.jsx)("span", {
        className: "DialogueWord",
        style: {
          "--word-delay": `${eV.delayMs}ms`
        },
        children: (0, ZV.jsx)(pV.e, {
          text: "icon" === eV.kind ? `[[${eV.icon}]]` : eV.text
        })
      })
    }

    function EV(VV) {
      let {
        display: eV
      } = VV;
      const {
        selectedLanguage: xV
      } = (0, yV.A)(), JV = (0, UV.useMemo)((() => (0, wV.c)((0, wV.g)(eV).plan.pieces)), [eV, xV.code]);
      return (0, ZV.jsxs)("div", {
        className: YV()("Dialogue", {
          DialogueAnimateIn: !1 !== eV.animateIn
        }),
        children: [eV.speakerName && (0, ZV.jsx)(QV.b, {
          text: eV.speakerName,
          className: "DialogueSpeaker"
        }), (0, ZV.jsx)("p", {
          className: "DialogueLine",
          children: JV.map(((VV, eV) => 1 === VV.length && "space" === VV[0].kind ? VV[0].text : (0, ZV.jsx)("span", {
            className: "DialogueGlue",
            children: VV.map(((VV, eV) => (0, ZV.jsx)(bV, {
              piece: VV
            }, eV)))
          }, eV)))
        })]
      })
    }
    const BV = (0, UV.memo)((function() {
      const VV = (0, nV.j)("dialogue");
      return (0, ZV.jsx)("div", {
        className: "DialogueAnchor",
        "data-camera-keeper": "",
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: VV && (0, ZV.jsx)(EV, {
          display: VV
        }, kV(VV))
      })
    }))
  },
  5335: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => pV
    });
    var JV = xV(62),
      YV = xV(364),
      UV = xV(2039),
      yV = xV(1321);

    function pV(VV) {
      let {
        text: eV
      } = VV;
      const xV = [];
      let pV = "";
      return (0, YV.dc)(eV).forEach(((VV, eV) => {
        if ("string" === typeof VV || !(0, UV.h)(VV.icon)) return void(pV += "string" === typeof VV ? VV : VV.icon);
        const YV = Math.max(0, pV.trimEnd().search(/\S{1,12}$/));
        xV.push((0, yV.jsxs)(JV.Fragment, {
          children: [pV.slice(0, YV), (0, yV.jsxs)("span", {
            className: "InlineIconTextGlue",
            children: [pV.slice(YV), (0, yV.jsx)("span", {
              className: "InlineIconTextIcon",
              role: "img",
              "aria-label": VV.icon,
              children: (0, yV.jsx)(UV.e, {
                itemName: VV.icon,
                amount: 0
              })
            })]
          })]
        }, eV)), pV = ""
      })), xV.push(pV), (0, yV.jsx)(yV.Fragment, {
        children: xV
      })
    }
  },
  35300: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => UV
    });
    var JV = xV(5015),
      YV = xV(5020);

    function UV(VV) {
      let {
        children: eV,
        showing: xV,
        globallyUniqueKey: UV,
        alwaysMountChildren: yV = !1,
        doGameplayStartStopOnShow: pV = !0,
        keepsMovement: QV = !1
      } = VV;
      return (0, YV.b)(!0, xV, UV, QV), (0, JV.c)(pV, xV), xV || yV ? eV : null
    }
  },
  5339: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => DV,
      g: () => gV
    });
    var JV = xV(5342),
      YV = xV(364);
    const UV = 120,
      yV = 260,
      pV = 1.15,
      QV = 1.2,
      nV = 2,
      wV = 1.08,
      ZV = .8,
      vV = .95,
      rV = 8,
      kV = "[\"')\\]\u300d\u300f\uff09]*",
      bV = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${kV}$`),
      EV = new RegExp(`[?\uff1f]${kV}$`),
      BV = new RegExp(`[!\uff01]${kV}$`),
      jV = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      qV = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      tV = new RegExp(`[${qV}]`),
      FV = new RegExp(`[${qV}]|[^${qV}]+`, "g"),
      TV = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function PV(VV) {
      let eV = 2166136261;
      for (let xV = 0; xV < VV.length; xV++) eV ^= VV.charCodeAt(xV), eV = Math.imul(eV, 16777619);
      return (eV >>> 0) / 4294967295 * 2 - 1
    }

    function AV(VV) {
      var eV;
      if (tV.test(VV)) return 1;
      const xV = VV.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        JV = xV.replace(/[^0-9]/g, "");
      if (JV.length > 0 && !/\p{L}/u.test(xV)) return Math.min(JV.length, 4);
      const YV = null !== (eV = xV.match(TV)) && void 0 !== eV ? eV : [];
      if (0 === YV.length) {
        var UV, yV;
        const VV = null !== (UV = null === (yV = xV.match(/\p{L}/gu)) || void 0 === yV ? void 0 : yV.length) && void 0 !== UV ? UV : 0;
        return 0 === VV ? 0 : Math.min(Math.max(1, Math.round(VV / 2.5)), rV)
      }
      const pV = xV.replace(/[^\p{L}]/gu, ""),
        QV = YV.length > 1 && "e" === YV.at(-1) && pV.endsWith("e") && !pV.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(VV.replace(/[^\p{L}]/gu, ""));
      return Math.min(YV.length - (QV ? 1 : 0), rV)
    }

    function NV(VV) {
      return VV.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function XV(VV) {
      const eV = VV.replace(/[^\p{L}]/gu, "");
      return eV.length >= 2 && eV === eV.toUpperCase() && eV !== eV.toLowerCase()
    }

    function MV(VV, eV) {
      var xV;
      const rV = eV && (0, JV.j)(eV),
        kV = null !== (xV = null === rV || void 0 === rV ? void 0 : rV.syllableMs) && void 0 !== xV ? xV : JV.e,
        qV = function(VV) {
          const eV = [];
          for (const JV of (0, YV.dc)(VV))
            if ("string" === typeof JV)
              for (const VV of JV.split(/(\s+)/)) {
                if ("" === VV) continue;
                if (/^\s+$/.test(VV)) {
                  eV.push({
                    kind: "space",
                    text: VV
                  });
                  continue
                }
                if (!tV.test(VV)) {
                  eV.push({
                    kind: "word",
                    text: VV,
                    delayMs: 0
                  });
                  continue
                }
                let JV = !0;
                for (const YV of null !== (xV = VV.match(FV)) && void 0 !== xV ? xV : []) {
                  var xV;
                  const VV = eV.at(-1);
                  JV || "word" !== (null === VV || void 0 === VV ? void 0 : VV.kind) || tV.test(YV) || /[\p{L}\p{N}]/u.test(YV) ? (JV || eV.push({
                    kind: "space",
                    text: "\u200b"
                  }), eV.push({
                    kind: "word",
                    text: YV,
                    delayMs: 0
                  }), JV = !1) : VV.text += YV
                }
              } else eV.push({
                kind: "icon",
                text: JV.icon,
                delayMs: 0
              });
          return eV
        }(VV),
        TV = [];
      let MV = [];
      for (const JV of qV) "space" !== JV.kind && (MV.push(JV), bV.test(JV.text) && (TV.push(MV), MV = []));
      TV.push(MV);
      const zV = [];
      let GV = 0;
      for (const JV of TV) {
        var WV, RV;
        const VV = null !== (WV = null === (RV = JV.at(-1)) || void 0 === RV ? void 0 : RV.text) && void 0 !== WV ? WV : "",
          eV = EV.test(VV),
          xV = BV.test(VV),
          YV = JV.map((VV => "word" === VV.kind ? AV(VV.text) : 1)),
          qV = YV.findLastIndex((VV => VV > 0));
        for (const [EV, BV] of JV.entries()) {
          const VV = "word" === BV.kind,
            JV = YV[EV];
          BV.delayMs = GV;
          for (let YV = 0; rV && YV < JV; YV++) {
            const {
              intonation: UV
            } = rV;
            let yV = qV > 0 ? -UV.declineSemitones * (EV / qV) : 0;
            yV += PV(`${NV(BV.text)}|${YV}`) * UV.variationSemitones;
            const bV = Math.min(1, UV.variationSemitones);
            let jV = rV.glideSemitones,
              tV = 1;
            xV && (yV += UV.exclaimLiftSemitones, tV *= pV), eV && EV === qV && (yV += UV.questionRiseSemitones * (JV > 1 ? .5 + .5 * YV / (JV - 1) : 1), YV === JV - 1 && (jV = Math.abs(jV) + UV.questionRiseSemitones / 2)), VV && XV(BV.text) && (yV += nV * bV, tV *= QV), JV > 1 && 0 === YV && (yV += ZV * bV, tV *= wV), zV.push({
              atMs: GV + YV * kV,
              semitones: yV,
              glideSemitones: jV,
              durationMs: YV < JV - 1 ? Math.min(rV.durationMs, kV * vV) : rV.durationMs,
              level: tV
            })
          }
          GV += JV * kV + (bV.test(BV.text) ? yV : jV.test(BV.text) ? UV : 0)
        }
      }
      return {
        pieces: qV.map((VV => "space" === VV.kind ? VV : "icon" === VV.kind ? {
          kind: "icon",
          icon: VV.text,
          delayMs: VV.delayMs
        } : {
          kind: "word",
          text: VV.text,
          delayMs: VV.delayMs
        })),
        blips: zV
      }
    }
    var zV = xV(1220),
      GV = xV(1279),
      WV = xV(2059);

    function RV(VV) {
      if ("string" === typeof VV) return VV;
      const eV = GV.c.get().getCurrentLanguageCode();
      return (0, zV.r)(eV, VV.translationKey, (0, zV.p)(VV.params, WV.e.shown))
    }

    function gV(VV) {
      const eV = void 0 === VV.voice ? null : (0, JV.n)(VV.voice),
        xV = eV && (0, JV.j)(eV);
      return {
        plan: MV(RV(VV.line), xV),
        synth: xV
      }
    }

    function DV(VV) {
      const eV = [];
      let xV = [];
      for (const [YV, UV] of VV.entries()) {
        var JV;
        "space" === UV.kind && (" " !== UV.text || "icon" !== (null === (JV = VV[YV + 1]) || void 0 === JV ? void 0 : JV.kind)) ? (xV.length > 0 && eV.push(xV), eV.push([UV]), xV = []) : xV.push(UV)
      }
      return xV.length > 0 && eV.push(xV), eV
    }
  },
  39665: (VV, eV, xV) => {
    function JV(VV, eV, xV) {
      const JV = new Set,
        YV = new ResizeObserver(xV),
        UV = () => {
          const eV = new Set(document.querySelectorAll(VV));
          let UV = !1;
          for (const VV of JV) eV.has(VV) || (YV.unobserve(VV), JV.delete(VV), UV = !0);
          for (const VV of eV) JV.has(VV) || (YV.observe(VV), yV.observe(VV, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), JV.add(VV));
          UV && xV()
        },
        yV = new MutationObserver((eV => {
          eV.some((VV => "attributes" === VV.type)) && xV(), eV.some((eV => function(VV, eV, xV) {
            if ("childList" !== VV.type) return !1;
            for (const JV of VV.addedNodes)
              if (JV instanceof Element && (JV.matches(eV) || JV.querySelector(eV))) return !0;
            for (const JV of VV.removedNodes)
              if (JV instanceof Element)
                for (const VV of xV)
                  if (JV.contains(VV)) return !0;
            return !1
          }(eV, VV, JV))) && UV()
        }));
      yV.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const pV of eV) YV.observe(pV);
      return window.addEventListener("resize", xV), UV(), xV(), () => {
        YV.disconnect(), yV.disconnect(), window.removeEventListener("resize", xV)
      }
    }
    xV.d(eV, {
      b: () => JV
    })
  },
  9477: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => pV,
      g: () => QV
    });
    var JV = xV(27),
      YV = xV(1391),
      UV = xV(99);
    const yV = {
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

    function pV() {
      return (0, UV.isMobile)() && "function" === typeof navigator.vibrate
    }
    const QV = new class {
      constructor(VV) {
        this.deps = VV, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(VV, eV) {
        var xV;
        if (!this.deps.enabled()) return;
        const JV = yV[VV],
          YV = null !== eV && void 0 !== eV ? eV : JV.pattern;
        if (null === YV) return void console.warn("No vibration pattern for", VV);
        const UV = this.deps.now();
        UV - this.lastAnyAt < 40 && JV.priority < this.playingPriority || UV - (null !== (xV = this.lastAt.get(VV)) && void 0 !== xV ? xV : -1 / 0) < JV.minGapMs || UV < this.playingUntil && JV.priority < this.playingPriority || (this.lastAt.set(VV, UV), this.lastAnyAt = UV, this.playingUntil = UV + YV.reduce(((VV, eV) => VV + eV), 0), this.playingPriority = JV.priority, this.deps.vibrate(YV))
      }
    }({
      vibrate: VV => {
        navigator.vibrate([...VV])
      },
      now: () => performance.now(),
      enabled: () => pV() && JV.b.get("isTouchScreen") && JV.b.get("clientEscMenuOptions").vibration && !(0, YV.f)()
    })
  },
  5342: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => YV,
      g: () => JV,
      i: () => UV,
      j: () => QV,
      n: () => yV
    });
    const JV = ["sine", "triangle", "square", "sawtooth"],
      YV = 55,
      UV = {
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

    function yV(VV) {
      return "string" !== typeof VV ? VV : Object.hasOwn(UV, VV) ? UV[VV] : null
    }

    function pV(VV, eV, xV) {
      return Math.min(xV, Math.max(eV, VV))
    }

    function QV(VV) {
      const eV = pV(VV.durationMs, 10, 500),
        xV = pV(VV.attackMs, 0, eV),
        {
          intonation: YV
        } = VV;
      return {
        waveform: JV.includes(VV.waveform) ? VV.waveform : "sine",
        pitchHz: pV(VV.pitchHz, 20, 4e3),
        glideSemitones: pV(VV.glideSemitones, -24, 24),
        durationMs: eV,
        attackMs: xV,
        releaseMs: pV(VV.releaseMs, 0, eV - xV),
        lowpassHz: null === VV.lowpassHz ? null : pV(VV.lowpassHz, 20, 2e4),
        volume: pV(VV.volume, 0, 2),
        intonation: {
          variationSemitones: pV(YV.variationSemitones, 0, 6),
          declineSemitones: pV(YV.declineSemitones, 0, 12),
          questionRiseSemitones: pV(YV.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: pV(YV.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: pV(VV.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);