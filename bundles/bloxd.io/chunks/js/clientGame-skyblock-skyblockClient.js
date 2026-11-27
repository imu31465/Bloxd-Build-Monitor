export const id = 31;
export const ids = [31];
export const modules = {
  5590: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => jW,
      h: () => UW
    });
    var mW = OW(1089),
      EW = OW.n(mW),
      NW = OW(62),
      PW = OW(1172),
      LW = OW(5593),
      cW = OW(2021),
      wW = OW(3332),
      tW = OW(5599),
      ZW = OW(1283);
    const xW = new WeakMap;
    let lW = 0;

    function AW(WW) {
      let iW = xW.get(WW);
      return void 0 === iW && (iW = lW++, xW.set(WW, iW)), iW
    }

    function bW(WW) {
      let {
        piece: iW
      } = WW;
      return "space" === iW.kind ? (0, ZW.jsx)(ZW.Fragment, {
        children: iW.text
      }) : (0, ZW.jsx)("span", {
        className: "DialogueWord",
        style: {
          "--word-delay": `${iW.delayMs}ms`
        },
        children: (0, ZW.jsx)(LW.b, {
          text: "icon" === iW.kind ? `[[${iW.icon}]]` : iW.text
        })
      })
    }

    function jW(WW) {
      let {
        display: iW
      } = WW;
      const {
        selectedLanguage: OW
      } = (0, PW.B)(), mW = (0, NW.useMemo)((() => (0, tW.e)((0, tW.g)(iW).plan.pieces)), [iW, OW.code]);
      return (0, ZW.jsxs)("div", {
        className: EW()("Dialogue", {
          DialogueAnimateIn: !1 !== iW.animateIn
        }),
        children: [iW.speakerName && (0, ZW.jsx)(cW.d, {
          text: iW.speakerName,
          className: "DialogueSpeaker"
        }), (0, ZW.jsx)("p", {
          className: "DialogueLine",
          children: mW.map(((WW, iW) => 1 === WW.length && "space" === WW[0].kind ? WW[0].text : (0, ZW.jsx)("span", {
            className: "DialogueGlue",
            children: WW.map(((WW, iW) => (0, ZW.jsx)(bW, {
              piece: WW
            }, iW)))
          }, iW)))
        })]
      })
    }
    const UW = (0, NW.memo)((function() {
      const WW = (0, wW.e)("dialogue");
      return (0, ZW.jsx)("div", {
        className: "DialogueAnchor",
        "data-camera-keeper": "",
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: WW && (0, ZW.jsx)(jW, {
          display: WW
        }, AW(WW))
      })
    }))
  },
  5593: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => LW
    });
    var mW = OW(62),
      EW = OW(327),
      NW = OW(2032),
      PW = OW(1283);

    function LW(WW) {
      let {
        text: iW
      } = WW;
      const OW = [];
      let LW = "";
      return (0, EW.kc)(iW).forEach(((WW, iW) => {
        if ("string" === typeof WW || !(0, NW.d)(WW.icon)) return void(LW += "string" === typeof WW ? WW : WW.icon);
        const EW = Math.max(0, LW.trimEnd().search(/\S{1,12}$/));
        OW.push((0, PW.jsxs)(mW.Fragment, {
          children: [LW.slice(0, EW), (0, PW.jsxs)("span", {
            className: "InlineIconTextGlue",
            children: [LW.slice(EW), (0, PW.jsx)("span", {
              className: "InlineIconTextIcon",
              role: "img",
              "aria-label": WW.icon,
              children: (0, PW.jsx)(NW.b, {
                itemName: WW.icon,
                amount: 0
              })
            })]
          })]
        }, iW)), LW = ""
      })), OW.push(LW), (0, PW.jsx)(PW.Fragment, {
        children: OW
      })
    }
  },
  5599: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => eW,
      g: () => dW
    });
    var mW = OW(5605),
      EW = OW(327);
    const NW = 120,
      PW = 260,
      LW = 1.15,
      cW = 1.2,
      wW = 2,
      tW = 1.08,
      ZW = .8,
      xW = .95,
      lW = 8,
      AW = "[\"')\\]\u300d\u300f\uff09]*",
      bW = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${AW}$`),
      jW = new RegExp(`[?\uff1f]${AW}$`),
      UW = new RegExp(`[!\uff01]${AW}$`),
      kW = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      sW = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      MW = new RegExp(`[${sW}]`),
      KW = new RegExp(`[${sW}]|[^${sW}]+`, "g"),
      SW = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function YW(WW) {
      let iW = 2166136261;
      for (let OW = 0; OW < WW.length; OW++) iW ^= WW.charCodeAt(OW), iW = Math.imul(iW, 16777619);
      return (iW >>> 0) / 4294967295 * 2 - 1
    }

    function yW(WW) {
      var iW;
      if (MW.test(WW)) return 1;
      const OW = WW.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        mW = OW.replace(/[^0-9]/g, "");
      if (mW.length > 0 && !/\p{L}/u.test(OW)) return Math.min(mW.length, 4);
      const EW = null !== (iW = OW.match(SW)) && void 0 !== iW ? iW : [];
      if (0 === EW.length) {
        var NW, PW;
        const WW = null !== (NW = null === (PW = OW.match(/\p{L}/gu)) || void 0 === PW ? void 0 : PW.length) && void 0 !== NW ? NW : 0;
        return 0 === WW ? 0 : Math.min(Math.max(1, Math.round(WW / 2.5)), lW)
      }
      const LW = OW.replace(/[^\p{L}]/gu, ""),
        cW = EW.length > 1 && "e" === EW.at(-1) && LW.endsWith("e") && !LW.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(WW.replace(/[^\p{L}]/gu, ""));
      return Math.min(EW.length - (cW ? 1 : 0), lW)
    }

    function TW(WW) {
      return WW.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function JW(WW) {
      const iW = WW.replace(/[^\p{L}]/gu, "");
      return iW.length >= 2 && iW === iW.toUpperCase() && iW !== iW.toLowerCase()
    }

    function hW(WW, iW) {
      var OW;
      const lW = iW && (0, mW.h)(iW),
        AW = null !== (OW = null === lW || void 0 === lW ? void 0 : lW.syllableMs) && void 0 !== OW ? OW : mW.d,
        sW = function(WW) {
          const iW = [];
          for (const mW of (0, EW.kc)(WW))
            if ("string" === typeof mW)
              for (const WW of mW.split(/(\s+)/)) {
                if ("" === WW) continue;
                if (/^\s+$/.test(WW)) {
                  iW.push({
                    kind: "space",
                    text: WW
                  });
                  continue
                }
                if (!MW.test(WW)) {
                  iW.push({
                    kind: "word",
                    text: WW,
                    delayMs: 0
                  });
                  continue
                }
                let mW = !0;
                for (const EW of null !== (OW = WW.match(KW)) && void 0 !== OW ? OW : []) {
                  var OW;
                  const WW = iW.at(-1);
                  mW || "word" !== (null === WW || void 0 === WW ? void 0 : WW.kind) || MW.test(EW) || /[\p{L}\p{N}]/u.test(EW) ? (mW || iW.push({
                    kind: "space",
                    text: "\u200b"
                  }), iW.push({
                    kind: "word",
                    text: EW,
                    delayMs: 0
                  }), mW = !1) : WW.text += EW
                }
              } else iW.push({
                kind: "icon",
                text: mW.icon,
                delayMs: 0
              });
          return iW
        }(WW),
        SW = [];
      let hW = [];
      for (const mW of sW) "space" !== mW.kind && (hW.push(mW), bW.test(mW.text) && (SW.push(hW), hW = []));
      SW.push(hW);
      const HW = [];
      let nW = 0;
      for (const mW of SW) {
        var uW, oW;
        const WW = null !== (uW = null === (oW = mW.at(-1)) || void 0 === oW ? void 0 : oW.text) && void 0 !== uW ? uW : "",
          iW = jW.test(WW),
          OW = UW.test(WW),
          EW = mW.map((WW => "word" === WW.kind ? yW(WW.text) : 1)),
          sW = EW.findLastIndex((WW => WW > 0));
        for (const [jW, UW] of mW.entries()) {
          const WW = "word" === UW.kind,
            mW = EW[jW];
          UW.delayMs = nW;
          for (let EW = 0; lW && EW < mW; EW++) {
            const {
              intonation: NW
            } = lW;
            let PW = sW > 0 ? -NW.declineSemitones * (jW / sW) : 0;
            PW += YW(`${TW(UW.text)}|${EW}`) * NW.variationSemitones;
            const bW = Math.min(1, NW.variationSemitones);
            let kW = lW.glideSemitones,
              MW = 1;
            OW && (PW += NW.exclaimLiftSemitones, MW *= LW), iW && jW === sW && (PW += NW.questionRiseSemitones * (mW > 1 ? .5 + .5 * EW / (mW - 1) : 1), EW === mW - 1 && (kW = Math.abs(kW) + NW.questionRiseSemitones / 2)), WW && JW(UW.text) && (PW += wW * bW, MW *= cW), mW > 1 && 0 === EW && (PW += ZW * bW, MW *= tW), HW.push({
              atMs: nW + EW * AW,
              semitones: PW,
              glideSemitones: kW,
              durationMs: EW < mW - 1 ? Math.min(lW.durationMs, AW * xW) : lW.durationMs,
              level: MW
            })
          }
          nW += mW * AW + (bW.test(UW.text) ? PW : kW.test(UW.text) ? NW : 0)
        }
      }
      return {
        pieces: sW.map((WW => "space" === WW.kind ? WW : "icon" === WW.kind ? {
          kind: "icon",
          icon: WW.text,
          delayMs: WW.delayMs
        } : {
          kind: "word",
          text: WW.text,
          delayMs: WW.delayMs
        })),
        blips: HW
      }
    }
    var HW = OW(1172),
      nW = OW(1244),
      uW = OW(2042);

    function oW(WW) {
      if ("string" === typeof WW) return WW;
      const iW = nW.e.get().getCurrentLanguageCode();
      return (0, HW.p)(iW, WW.translationKey, (0, HW.o)(WW.params, uW.e.shown))
    }

    function dW(WW) {
      const iW = void 0 === WW.voice ? null : (0, mW.j)(WW.voice),
        OW = iW && (0, mW.h)(iW);
      return {
        plan: hW(oW(WW.line), OW),
        synth: OW
      }
    }

    function eW(WW) {
      const iW = [];
      let OW = [];
      for (const [EW, NW] of WW.entries()) {
        var mW;
        "space" === NW.kind && (" " !== NW.text || "icon" !== (null === (mW = WW[EW + 1]) || void 0 === mW ? void 0 : mW.kind)) ? (OW.length > 0 && iW.push(OW), iW.push([NW]), OW = []) : OW.push(NW)
      }
      return OW.length > 0 && iW.push(OW), iW
    }
  },
  39701: (WW, iW, OW) => {
    function mW(WW, iW, OW) {
      const mW = new Set,
        EW = new ResizeObserver(OW),
        NW = () => {
          const iW = new Set(document.querySelectorAll(WW));
          let NW = !1;
          for (const WW of mW) iW.has(WW) || (EW.unobserve(WW), mW.delete(WW), NW = !0);
          for (const WW of iW) mW.has(WW) || (EW.observe(WW), PW.observe(WW, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), mW.add(WW));
          NW && OW()
        },
        PW = new MutationObserver((iW => {
          iW.some((WW => "attributes" === WW.type)) && OW(), iW.some((iW => function(WW, iW, OW) {
            if ("childList" !== WW.type) return !1;
            for (const mW of WW.addedNodes)
              if (mW instanceof Element && (mW.matches(iW) || mW.querySelector(iW))) return !0;
            for (const mW of WW.removedNodes)
              if (mW instanceof Element)
                for (const WW of OW)
                  if (mW.contains(WW)) return !0;
            return !1
          }(iW, WW, mW))) && NW()
        }));
      PW.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const LW of iW) EW.observe(LW);
      return window.addEventListener("resize", OW), NW(), OW(), () => {
        EW.disconnect(), PW.disconnect(), window.removeEventListener("resize", OW)
      }
    }
    OW.d(iW, {
      d: () => mW
    })
  },
  10114: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => LW,
      g: () => cW
    });
    var mW = OW(25),
      EW = OW(1351),
      NW = OW(100);
    const PW = {
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

    function LW() {
      return (0, NW.isMobile)() && "function" === typeof navigator.vibrate
    }
    const cW = new class {
      constructor(WW) {
        this.deps = WW, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(WW, iW) {
        var OW;
        if (!this.deps.enabled()) return;
        const mW = PW[WW],
          EW = null !== iW && void 0 !== iW ? iW : mW.pattern;
        if (null === EW) return void console.warn("No vibration pattern for", WW);
        const NW = this.deps.now();
        NW - this.lastAnyAt < 40 && mW.priority < this.playingPriority || NW - (null !== (OW = this.lastAt.get(WW)) && void 0 !== OW ? OW : -1 / 0) < mW.minGapMs || NW < this.playingUntil && mW.priority < this.playingPriority || (this.lastAt.set(WW, NW), this.lastAnyAt = NW, this.playingUntil = NW + EW.reduce(((WW, iW) => WW + iW), 0), this.playingPriority = mW.priority, this.deps.vibrate(EW))
      }
    }({
      vibrate: WW => {
        navigator.vibrate([...WW])
      },
      now: () => performance.now(),
      enabled: () => LW() && mW.d.get("isTouchScreen") && mW.d.get("clientEscMenuOptions").vibration && !(0, EW.f)()
    })
  },
  5605: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => EW,
      e: () => mW,
      g: () => NW,
      h: () => cW,
      j: () => PW
    });
    const mW = ["sine", "triangle", "square", "sawtooth"],
      EW = 55,
      NW = {
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

    function PW(WW) {
      return "string" !== typeof WW ? WW : Object.hasOwn(NW, WW) ? NW[WW] : null
    }

    function LW(WW, iW, OW) {
      return Math.min(OW, Math.max(iW, WW))
    }

    function cW(WW) {
      const iW = LW(WW.durationMs, 10, 500),
        OW = LW(WW.attackMs, 0, iW),
        {
          intonation: EW
        } = WW;
      return {
        waveform: mW.includes(WW.waveform) ? WW.waveform : "sine",
        pitchHz: LW(WW.pitchHz, 20, 4e3),
        glideSemitones: LW(WW.glideSemitones, -24, 24),
        durationMs: iW,
        attackMs: OW,
        releaseMs: LW(WW.releaseMs, 0, iW - OW),
        lowpassHz: null === WW.lowpassHz ? null : LW(WW.lowpassHz, 20, 2e4),
        volume: LW(WW.volume, 0, 2),
        intonation: {
          variationSemitones: LW(EW.variationSemitones, 0, 6),
          declineSemitones: LW(EW.declineSemitones, 0, 12),
          questionRiseSemitones: LW(EW.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: LW(EW.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: LW(WW.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);