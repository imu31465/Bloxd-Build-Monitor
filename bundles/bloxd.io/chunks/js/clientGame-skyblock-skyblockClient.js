export const id = 30;
export const ids = [30];
export const modules = {
  5308: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => WH,
      h: () => MH
    });
    var AH = LH(1038),
      rH = LH.n(AH),
      SH = LH(45),
      hH = LH(1123),
      tH = LH(5314),
      zH = LH(1967),
      CH = LH(2628),
      EH = LH(5319),
      XH = LH(1225);
    const GH = new WeakMap;
    let YH = 0;

    function uH(HH) {
      let BH = GH.get(HH);
      return void 0 === BH && (BH = YH++, GH.set(HH, BH)), BH
    }

    function QH(HH) {
      let {
        piece: BH
      } = HH;
      return "space" === BH.kind ? (0, XH.jsx)(XH.Fragment, {
        children: BH.text
      }) : (0, XH.jsx)("span", {
        className: "DialogueWord",
        style: {
          "--word-delay": `${BH.delayMs}ms`
        },
        children: (0, XH.jsx)(tH.b, {
          text: "icon" === BH.kind ? `[[${BH.icon}]]` : BH.text
        })
      })
    }

    function WH(HH) {
      let {
        display: BH
      } = HH;
      const {
        selectedLanguage: LH
      } = (0, hH.B)(), AH = (0, SH.useMemo)((() => (0, EH.b)((0, EH.d)(BH).plan.pieces)), [BH, LH.code]);
      return (0, XH.jsxs)("div", {
        className: rH()("Dialogue", {
          DialogueAnimateIn: !1 !== BH.animateIn
        }),
        children: [BH.speakerName && (0, XH.jsx)(zH.b, {
          text: BH.speakerName,
          className: "DialogueSpeaker"
        }), (0, XH.jsx)("p", {
          className: "DialogueLine",
          children: AH.map(((HH, BH) => 1 === HH.length && "space" === HH[0].kind ? HH[0].text : (0, XH.jsx)("span", {
            className: "DialogueGlue",
            children: HH.map(((HH, BH) => (0, XH.jsx)(QH, {
              piece: HH
            }, BH)))
          }, BH)))
        })]
      })
    }
    const MH = (0, SH.memo)((function() {
      const HH = (0, CH.j)("dialogue");
      return (0, XH.jsx)("div", {
        className: "DialogueAnchor",
        "data-camera-keeper": "",
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: HH && (0, XH.jsx)(WH, {
          display: HH
        }, uH(HH))
      })
    }))
  },
  5314: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => tH
    });
    var AH = LH(45),
      rH = LH(304),
      SH = LH(1986),
      hH = LH(1225);

    function tH(HH) {
      let {
        text: BH
      } = HH;
      const LH = [];
      let tH = "";
      return (0, rH.tc)(BH).forEach(((HH, BH) => {
        if ("string" === typeof HH || !(0, SH.f)(HH.icon)) return void(tH += "string" === typeof HH ? HH : HH.icon);
        const rH = Math.max(0, tH.trimEnd().search(/\S{1,12}$/));
        LH.push((0, hH.jsxs)(AH.Fragment, {
          children: [tH.slice(0, rH), (0, hH.jsxs)("span", {
            className: "InlineIconTextGlue",
            children: [tH.slice(rH), (0, hH.jsx)("span", {
              className: "InlineIconTextIcon",
              role: "img",
              "aria-label": HH.icon,
              children: (0, hH.jsx)(SH.e, {
                itemName: HH.icon,
                amount: 0
              })
            })]
          })]
        }, BH)), tH = ""
      })), LH.push(tH), (0, hH.jsx)(hH.Fragment, {
        children: LH
      })
    }
  },
  34986: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => SH
    });
    var AH = LH(4947),
      rH = LH(4951);

    function SH(HH) {
      let {
        children: BH,
        showing: LH,
        globallyUniqueKey: SH,
        alwaysMountChildren: hH = !1,
        doGameplayStartStopOnShow: tH = !0,
        keepsMovement: zH = !1
      } = HH;
      return (0, rH.c)(!0, LH, SH, zH), (0, AH.e)(tH, LH), LH || hH ? BH : null
    }
  },
  5319: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => cH,
      d: () => KH
    });
    var AH = LH(5325),
      rH = LH(304);
    const SH = 120,
      hH = 260,
      tH = 1.15,
      zH = 1.2,
      CH = 2,
      EH = 1.08,
      XH = .8,
      GH = .95,
      YH = 8,
      uH = "[\"')\\]\u300d\u300f\uff09]*",
      QH = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${uH}$`),
      WH = new RegExp(`[?\uff1f]${uH}$`),
      MH = new RegExp(`[!\uff01]${uH}$`),
      xH = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      vH = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      PH = new RegExp(`[${vH}]`),
      TH = new RegExp(`[${vH}]|[^${vH}]+`, "g"),
      UH = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function VH(HH) {
      let BH = 2166136261;
      for (let LH = 0; LH < HH.length; LH++) BH ^= HH.charCodeAt(LH), BH = Math.imul(BH, 16777619);
      return (BH >>> 0) / 4294967295 * 2 - 1
    }

    function OH(HH) {
      var BH;
      if (PH.test(HH)) return 1;
      const LH = HH.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        AH = LH.replace(/[^0-9]/g, "");
      if (AH.length > 0 && !/\p{L}/u.test(LH)) return Math.min(AH.length, 4);
      const rH = null !== (BH = LH.match(UH)) && void 0 !== BH ? BH : [];
      if (0 === rH.length) {
        var SH, hH;
        const HH = null !== (SH = null === (hH = LH.match(/\p{L}/gu)) || void 0 === hH ? void 0 : hH.length) && void 0 !== SH ? SH : 0;
        return 0 === HH ? 0 : Math.min(Math.max(1, Math.round(HH / 2.5)), YH)
      }
      const tH = LH.replace(/[^\p{L}]/gu, ""),
        zH = rH.length > 1 && "e" === rH.at(-1) && tH.endsWith("e") && !tH.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(HH.replace(/[^\p{L}]/gu, ""));
      return Math.min(rH.length - (zH ? 1 : 0), YH)
    }

    function bH(HH) {
      return HH.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function kH(HH) {
      const BH = HH.replace(/[^\p{L}]/gu, "");
      return BH.length >= 2 && BH === BH.toUpperCase() && BH !== BH.toLowerCase()
    }

    function mH(HH, BH) {
      var LH;
      const YH = BH && (0, AH.k)(BH),
        uH = null !== (LH = null === YH || void 0 === YH ? void 0 : YH.syllableMs) && void 0 !== LH ? LH : AH.e,
        vH = function(HH) {
          const BH = [];
          for (const AH of (0, rH.tc)(HH))
            if ("string" === typeof AH)
              for (const HH of AH.split(/(\s+)/)) {
                if ("" === HH) continue;
                if (/^\s+$/.test(HH)) {
                  BH.push({
                    kind: "space",
                    text: HH
                  });
                  continue
                }
                if (!PH.test(HH)) {
                  BH.push({
                    kind: "word",
                    text: HH,
                    delayMs: 0
                  });
                  continue
                }
                let AH = !0;
                for (const rH of null !== (LH = HH.match(TH)) && void 0 !== LH ? LH : []) {
                  var LH;
                  const HH = BH.at(-1);
                  AH || "word" !== (null === HH || void 0 === HH ? void 0 : HH.kind) || PH.test(rH) || /[\p{L}\p{N}]/u.test(rH) ? (AH || BH.push({
                    kind: "space",
                    text: "\u200b"
                  }), BH.push({
                    kind: "word",
                    text: rH,
                    delayMs: 0
                  }), AH = !1) : HH.text += rH
                }
              } else BH.push({
                kind: "icon",
                text: AH.icon,
                delayMs: 0
              });
          return BH
        }(HH),
        UH = [];
      let mH = [];
      for (const AH of vH) "space" !== AH.kind && (mH.push(AH), QH.test(AH.text) && (UH.push(mH), mH = []));
      UH.push(mH);
      const oH = [];
      let IH = 0;
      for (const AH of UH) {
        var fH, lH;
        const HH = null !== (fH = null === (lH = AH.at(-1)) || void 0 === lH ? void 0 : lH.text) && void 0 !== fH ? fH : "",
          BH = WH.test(HH),
          LH = MH.test(HH),
          rH = AH.map((HH => "word" === HH.kind ? OH(HH.text) : 1)),
          vH = rH.findLastIndex((HH => HH > 0));
        for (const [WH, MH] of AH.entries()) {
          const HH = "word" === MH.kind,
            AH = rH[WH];
          MH.delayMs = IH;
          for (let rH = 0; YH && rH < AH; rH++) {
            const {
              intonation: SH
            } = YH;
            let hH = vH > 0 ? -SH.declineSemitones * (WH / vH) : 0;
            hH += VH(`${bH(MH.text)}|${rH}`) * SH.variationSemitones;
            const QH = Math.min(1, SH.variationSemitones);
            let xH = YH.glideSemitones,
              PH = 1;
            LH && (hH += SH.exclaimLiftSemitones, PH *= tH), BH && WH === vH && (hH += SH.questionRiseSemitones * (AH > 1 ? .5 + .5 * rH / (AH - 1) : 1), rH === AH - 1 && (xH = Math.abs(xH) + SH.questionRiseSemitones / 2)), HH && kH(MH.text) && (hH += CH * QH, PH *= zH), AH > 1 && 0 === rH && (hH += XH * QH, PH *= EH), oH.push({
              atMs: IH + rH * uH,
              semitones: hH,
              glideSemitones: xH,
              durationMs: rH < AH - 1 ? Math.min(YH.durationMs, uH * GH) : YH.durationMs,
              level: PH
            })
          }
          IH += AH * uH + (QH.test(MH.text) ? hH : xH.test(MH.text) ? SH : 0)
        }
      }
      return {
        pieces: vH.map((HH => "space" === HH.kind ? HH : "icon" === HH.kind ? {
          kind: "icon",
          icon: HH.text,
          delayMs: HH.delayMs
        } : {
          kind: "word",
          text: HH.text,
          delayMs: HH.delayMs
        })),
        blips: oH
      }
    }
    var oH = LH(1123),
      IH = LH(1194),
      fH = LH(2003);

    function lH(HH) {
      if ("string" === typeof HH) return HH;
      const BH = IH.g.get().getCurrentLanguageCode();
      return (0, oH.r)(BH, HH.translationKey, (0, oH.q)(HH.params, fH.c.shown))
    }

    function KH(HH) {
      const BH = void 0 === HH.voice ? null : (0, AH.l)(HH.voice),
        LH = BH && (0, AH.k)(BH);
      return {
        plan: mH(lH(HH.line), LH),
        synth: LH
      }
    }

    function cH(HH) {
      const BH = [];
      let LH = [];
      for (const [rH, SH] of HH.entries()) {
        var AH;
        "space" === SH.kind && (" " !== SH.text || "icon" !== (null === (AH = HH[rH + 1]) || void 0 === AH ? void 0 : AH.kind)) ? (LH.length > 0 && BH.push(LH), BH.push([SH]), LH = []) : LH.push(SH)
      }
      return LH.length > 0 && BH.push(LH), BH
    }
  },
  39388: (HH, BH, LH) => {
    function AH(HH, BH, LH) {
      const AH = new Set,
        rH = new ResizeObserver(LH),
        SH = () => {
          const BH = new Set(document.querySelectorAll(HH));
          let SH = !1;
          for (const HH of AH) BH.has(HH) || (rH.unobserve(HH), AH.delete(HH), SH = !0);
          for (const HH of BH) AH.has(HH) || (rH.observe(HH), hH.observe(HH, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), AH.add(HH));
          SH && LH()
        },
        hH = new MutationObserver((BH => {
          BH.some((HH => "attributes" === HH.type)) && LH(), BH.some((BH => function(HH, BH, LH) {
            if ("childList" !== HH.type) return !1;
            for (const AH of HH.addedNodes)
              if (AH instanceof Element && (AH.matches(BH) || AH.querySelector(BH))) return !0;
            for (const AH of HH.removedNodes)
              if (AH instanceof Element)
                for (const HH of LH)
                  if (AH.contains(HH)) return !0;
            return !1
          }(BH, HH, AH))) && SH()
        }));
      hH.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const tH of BH) rH.observe(tH);
      return window.addEventListener("resize", LH), SH(), LH(), () => {
        rH.disconnect(), hH.disconnect(), window.removeEventListener("resize", LH)
      }
    }
    LH.d(BH, {
      c: () => AH
    })
  },
  9577: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => tH,
      g: () => zH
    });
    var AH = LH(15),
      rH = LH(1297),
      SH = LH(81);
    const hH = {
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

    function tH() {
      return (0, SH.isMobile)() && "function" === typeof navigator.vibrate
    }
    const zH = new class {
      constructor(HH) {
        this.deps = HH, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(HH, BH) {
        var LH;
        if (!this.deps.enabled()) return;
        const AH = hH[HH],
          rH = null !== BH && void 0 !== BH ? BH : AH.pattern;
        if (null === rH) return void console.warn("No vibration pattern for", HH);
        const SH = this.deps.now();
        SH - this.lastAnyAt < 40 && AH.priority < this.playingPriority || SH - (null !== (LH = this.lastAt.get(HH)) && void 0 !== LH ? LH : -1 / 0) < AH.minGapMs || SH < this.playingUntil && AH.priority < this.playingPriority || (this.lastAt.set(HH, SH), this.lastAnyAt = SH, this.playingUntil = SH + rH.reduce(((HH, BH) => HH + BH), 0), this.playingPriority = AH.priority, this.deps.vibrate(rH))
      }
    }({
      vibrate: HH => {
        navigator.vibrate([...HH])
      },
      now: () => performance.now(),
      enabled: () => tH() && AH.c.get("isTouchScreen") && AH.c.get("clientEscMenuOptions").vibration && !(0, rH.d)()
    })
  },
  5325: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => rH,
      g: () => AH,
      i: () => SH,
      k: () => zH,
      l: () => hH
    });
    const AH = ["sine", "triangle", "square", "sawtooth"],
      rH = 55,
      SH = {
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

    function hH(HH) {
      return "string" !== typeof HH ? HH : Object.hasOwn(SH, HH) ? SH[HH] : null
    }

    function tH(HH, BH, LH) {
      return Math.min(LH, Math.max(BH, HH))
    }

    function zH(HH) {
      const BH = tH(HH.durationMs, 10, 500),
        LH = tH(HH.attackMs, 0, BH),
        {
          intonation: rH
        } = HH;
      return {
        waveform: AH.includes(HH.waveform) ? HH.waveform : "sine",
        pitchHz: tH(HH.pitchHz, 20, 4e3),
        glideSemitones: tH(HH.glideSemitones, -24, 24),
        durationMs: BH,
        attackMs: LH,
        releaseMs: tH(HH.releaseMs, 0, BH - LH),
        lowpassHz: null === HH.lowpassHz ? null : tH(HH.lowpassHz, 20, 2e4),
        volume: tH(HH.volume, 0, 2),
        intonation: {
          variationSemitones: tH(rH.variationSemitones, 0, 6),
          declineSemitones: tH(rH.declineSemitones, 0, 12),
          questionRiseSemitones: tH(rH.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: tH(rH.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: tH(HH.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);