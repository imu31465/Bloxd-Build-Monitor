export const id = 31;
export const ids = [31];
export const modules = {
  5712: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => LR,
      e: () => nR
    });
    var yR = GR(1163),
      tR = GR.n(yR),
      uR = GR(66),
      ZR = GR(1270),
      qR = GR(5719),
      iR = GR(2105),
      fR = GR(3465),
      VR = GR(5728),
      KR = GR(1378);
    const wR = new WeakMap;
    let rR = 0;

    function eR(RR) {
      let JR = wR.get(RR);
      return void 0 === JR && (JR = rR++, wR.set(RR, JR)), JR
    }

    function aR(RR) {
      let {
        piece: JR
      } = RR;
      return "space" === JR.kind ? (0, KR.jsx)(KR.Fragment, {
        children: JR.text
      }) : (0, KR.jsx)("span", {
        className: "DialogueWord",
        style: {
          "--word-delay": `${JR.delayMs}ms`
        },
        children: (0, KR.jsx)(qR.b, {
          text: "icon" === JR.kind ? `[[${JR.icon}]]` : JR.text
        })
      })
    }

    function LR(RR) {
      let {
        display: JR
      } = RR;
      const {
        selectedLanguage: GR
      } = (0, ZR.A)(), yR = (0, uR.useMemo)((() => (0, VR.e)((0, VR.f)(JR).plan.pieces)), [JR, GR.code]);
      return (0, KR.jsxs)("div", {
        className: tR()("Dialogue", {
          DialogueAnimateIn: !1 !== JR.animateIn
        }),
        children: [JR.speakerName && (0, KR.jsx)(iR.c, {
          text: JR.speakerName,
          className: "DialogueSpeaker"
        }), (0, KR.jsx)("p", {
          className: "DialogueLine",
          children: yR.map(((RR, JR) => 1 === RR.length && "space" === RR[0].kind ? RR[0].text : (0, KR.jsx)("span", {
            className: "DialogueGlue",
            children: RR.map(((RR, JR) => (0, KR.jsx)(aR, {
              piece: RR
            }, JR)))
          }, JR)))
        })]
      })
    }
    const nR = (0, uR.memo)((function() {
      const RR = (0, fR.f)("dialogue");
      return (0, KR.jsx)("div", {
        className: "DialogueAnchor",
        "data-camera-keeper": "",
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: RR && (0, KR.jsx)(LR, {
          display: RR
        }, eR(RR))
      })
    }))
  },
  5719: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => qR
    });
    var yR = GR(66),
      tR = GR(359),
      uR = GR(2123),
      ZR = GR(1378);

    function qR(RR) {
      let {
        text: JR
      } = RR;
      const GR = [];
      let qR = "";
      return (0, tR.dc)(JR).forEach(((RR, JR) => {
        if ("string" === typeof RR || !(0, uR.c)(RR.icon)) return void(qR += "string" === typeof RR ? RR : RR.icon);
        const tR = Math.max(0, qR.trimEnd().search(/\S{1,12}$/));
        GR.push((0, ZR.jsxs)(yR.Fragment, {
          children: [qR.slice(0, tR), (0, ZR.jsxs)("span", {
            className: "InlineIconTextGlue",
            children: [qR.slice(tR), (0, ZR.jsx)("span", {
              className: "InlineIconTextIcon",
              role: "img",
              "aria-label": RR.icon,
              children: (0, ZR.jsx)(uR.b, {
                itemName: RR.icon,
                amount: 0
              })
            })]
          })]
        }, JR)), qR = ""
      })), GR.push(qR), (0, ZR.jsx)(ZR.Fragment, {
        children: GR
      })
    }
  },
  5728: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => DR,
      f: () => NR
    });
    var yR = GR(5733),
      tR = GR(359);
    const uR = 120,
      ZR = 260,
      qR = 1.15,
      iR = 1.2,
      fR = 2,
      VR = 1.08,
      KR = .8,
      wR = .95,
      rR = 8,
      eR = "[\"')\\]\u300d\u300f\uff09]*",
      aR = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${eR}$`),
      LR = new RegExp(`[?\uff1f]${eR}$`),
      nR = new RegExp(`[!\uff01]${eR}$`),
      UR = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      WR = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      AR = new RegExp(`[${WR}]`),
      CR = new RegExp(`[${WR}]|[^${WR}]+`, "g"),
      XR = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function MR(RR) {
      let JR = 2166136261;
      for (let GR = 0; GR < RR.length; GR++) JR ^= RR.charCodeAt(GR), JR = Math.imul(JR, 16777619);
      return (JR >>> 0) / 4294967295 * 2 - 1
    }

    function BR(RR) {
      var JR;
      if (AR.test(RR)) return 1;
      const GR = RR.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        yR = GR.replace(/[^0-9]/g, "");
      if (yR.length > 0 && !/\p{L}/u.test(GR)) return Math.min(yR.length, 4);
      const tR = null !== (JR = GR.match(XR)) && void 0 !== JR ? JR : [];
      if (0 === tR.length) {
        var uR, ZR;
        const RR = null !== (uR = null === (ZR = GR.match(/\p{L}/gu)) || void 0 === ZR ? void 0 : ZR.length) && void 0 !== uR ? uR : 0;
        return 0 === RR ? 0 : Math.min(Math.max(1, Math.round(RR / 2.5)), rR)
      }
      const qR = GR.replace(/[^\p{L}]/gu, ""),
        iR = tR.length > 1 && "e" === tR.at(-1) && qR.endsWith("e") && !qR.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(RR.replace(/[^\p{L}]/gu, ""));
      return Math.min(tR.length - (iR ? 1 : 0), rR)
    }

    function lR(RR) {
      return RR.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function pR(RR) {
      const JR = RR.replace(/[^\p{L}]/gu, "");
      return JR.length >= 2 && JR === JR.toUpperCase() && JR !== JR.toLowerCase()
    }

    function gR(RR, JR) {
      var GR;
      const rR = JR && (0, yR.i)(JR),
        eR = null !== (GR = null === rR || void 0 === rR ? void 0 : rR.syllableMs) && void 0 !== GR ? GR : yR.b,
        WR = function(RR) {
          const JR = [];
          for (const yR of (0, tR.dc)(RR))
            if ("string" === typeof yR)
              for (const RR of yR.split(/(\s+)/)) {
                if ("" === RR) continue;
                if (/^\s+$/.test(RR)) {
                  JR.push({
                    kind: "space",
                    text: RR
                  });
                  continue
                }
                if (!AR.test(RR)) {
                  JR.push({
                    kind: "word",
                    text: RR,
                    delayMs: 0
                  });
                  continue
                }
                let yR = !0;
                for (const tR of null !== (GR = RR.match(CR)) && void 0 !== GR ? GR : []) {
                  var GR;
                  const RR = JR.at(-1);
                  yR || "word" !== (null === RR || void 0 === RR ? void 0 : RR.kind) || AR.test(tR) || /[\p{L}\p{N}]/u.test(tR) ? (yR || JR.push({
                    kind: "space",
                    text: "\u200b"
                  }), JR.push({
                    kind: "word",
                    text: tR,
                    delayMs: 0
                  }), yR = !1) : RR.text += tR
                }
              } else JR.push({
                kind: "icon",
                text: yR.icon,
                delayMs: 0
              });
          return JR
        }(RR),
        XR = [];
      let gR = [];
      for (const yR of WR) "space" !== yR.kind && (gR.push(yR), aR.test(yR.text) && (XR.push(gR), gR = []));
      XR.push(gR);
      const bR = [];
      let vR = 0;
      for (const yR of XR) {
        var OR, xR;
        const RR = null !== (OR = null === (xR = yR.at(-1)) || void 0 === xR ? void 0 : xR.text) && void 0 !== OR ? OR : "",
          JR = LR.test(RR),
          GR = nR.test(RR),
          tR = yR.map((RR => "word" === RR.kind ? BR(RR.text) : 1)),
          WR = tR.findLastIndex((RR => RR > 0));
        for (const [LR, nR] of yR.entries()) {
          const RR = "word" === nR.kind,
            yR = tR[LR];
          nR.delayMs = vR;
          for (let tR = 0; rR && tR < yR; tR++) {
            const {
              intonation: uR
            } = rR;
            let ZR = WR > 0 ? -uR.declineSemitones * (LR / WR) : 0;
            ZR += MR(`${lR(nR.text)}|${tR}`) * uR.variationSemitones;
            const aR = Math.min(1, uR.variationSemitones);
            let UR = rR.glideSemitones,
              AR = 1;
            GR && (ZR += uR.exclaimLiftSemitones, AR *= qR), JR && LR === WR && (ZR += uR.questionRiseSemitones * (yR > 1 ? .5 + .5 * tR / (yR - 1) : 1), tR === yR - 1 && (UR = Math.abs(UR) + uR.questionRiseSemitones / 2)), RR && pR(nR.text) && (ZR += fR * aR, AR *= iR), yR > 1 && 0 === tR && (ZR += KR * aR, AR *= VR), bR.push({
              atMs: vR + tR * eR,
              semitones: ZR,
              glideSemitones: UR,
              durationMs: tR < yR - 1 ? Math.min(rR.durationMs, eR * wR) : rR.durationMs,
              level: AR
            })
          }
          vR += yR * eR + (aR.test(nR.text) ? ZR : UR.test(nR.text) ? uR : 0)
        }
      }
      return {
        pieces: WR.map((RR => "space" === RR.kind ? RR : "icon" === RR.kind ? {
          kind: "icon",
          icon: RR.text,
          delayMs: RR.delayMs
        } : {
          kind: "word",
          text: RR.text,
          delayMs: RR.delayMs
        })),
        blips: bR
      }
    }
    var bR = GR(1270),
      vR = GR(1343),
      OR = GR(2137);

    function xR(RR) {
      if ("string" === typeof RR) return RR;
      const JR = vR.g.get().getCurrentLanguageCode();
      return (0, bR.r)(JR, RR.translationKey, (0, bR.o)(RR.params, OR.e.shown))
    }

    function NR(RR) {
      const JR = void 0 === RR.voice ? null : (0, yR.m)(RR.voice),
        GR = JR && (0, yR.i)(JR);
      return {
        plan: gR(xR(RR.line), GR),
        synth: GR
      }
    }

    function DR(RR) {
      const JR = [];
      let GR = [];
      for (const [tR, uR] of RR.entries()) {
        var yR;
        "space" === uR.kind && (" " !== uR.text || "icon" !== (null === (yR = RR[tR + 1]) || void 0 === yR ? void 0 : yR.kind)) ? (GR.length > 0 && JR.push(GR), JR.push([uR]), GR = []) : GR.push(uR)
      }
      return GR.length > 0 && JR.push(GR), JR
    }
  },
  39691: (RR, JR, GR) => {
    function yR(RR, JR, GR) {
      const yR = new Set,
        tR = new ResizeObserver(GR),
        uR = () => {
          const JR = new Set(document.querySelectorAll(RR));
          let uR = !1;
          for (const RR of yR) JR.has(RR) || (tR.unobserve(RR), yR.delete(RR), uR = !0);
          for (const RR of JR) yR.has(RR) || (tR.observe(RR), ZR.observe(RR, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), yR.add(RR));
          uR && GR()
        },
        ZR = new MutationObserver((JR => {
          JR.some((RR => "attributes" === RR.type)) && GR(), JR.some((JR => function(RR, JR, GR) {
            if ("childList" !== RR.type) return !1;
            for (const yR of RR.addedNodes)
              if (yR instanceof Element && (yR.matches(JR) || yR.querySelector(JR))) return !0;
            for (const yR of RR.removedNodes)
              if (yR instanceof Element)
                for (const RR of GR)
                  if (yR.contains(RR)) return !0;
            return !1
          }(JR, RR, yR))) && uR()
        }));
      ZR.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const qR of JR) tR.observe(qR);
      return window.addEventListener("resize", GR), uR(), GR(), () => {
        tR.disconnect(), ZR.disconnect(), window.removeEventListener("resize", GR)
      }
    }
    GR.d(JR, {
      c: () => yR
    })
  },
  10238: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => qR,
      e: () => iR
    });
    var yR = GR(25),
      tR = GR(1449),
      uR = GR(103);
    const ZR = {
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

    function qR() {
      return (0, uR.isMobile)() && "function" === typeof navigator.vibrate
    }
    const iR = new class {
      constructor(RR) {
        this.deps = RR, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(RR, JR) {
        var GR;
        if (!this.deps.enabled()) return;
        const yR = ZR[RR],
          tR = null !== JR && void 0 !== JR ? JR : yR.pattern;
        if (null === tR) return void console.warn("No vibration pattern for", RR);
        const uR = this.deps.now();
        uR - this.lastAnyAt < 40 && yR.priority < this.playingPriority || uR - (null !== (GR = this.lastAt.get(RR)) && void 0 !== GR ? GR : -1 / 0) < yR.minGapMs || uR < this.playingUntil && yR.priority < this.playingPriority || (this.lastAt.set(RR, uR), this.lastAnyAt = uR, this.playingUntil = uR + tR.reduce(((RR, JR) => RR + JR), 0), this.playingPriority = yR.priority, this.deps.vibrate(tR))
      }
    }({
      vibrate: RR => {
        navigator.vibrate([...RR])
      },
      now: () => performance.now(),
      enabled: () => qR() && yR.d.get("isTouchScreen") && yR.d.get("clientEscMenuOptions").vibration && !(0, tR.g)()
    })
  },
  5733: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => tR,
      e: () => yR,
      f: () => uR,
      i: () => iR,
      m: () => ZR
    });
    const yR = ["sine", "triangle", "square", "sawtooth"],
      tR = 55,
      uR = {
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

    function ZR(RR) {
      return "string" !== typeof RR ? RR : Object.hasOwn(uR, RR) ? uR[RR] : null
    }

    function qR(RR, JR, GR) {
      return Math.min(GR, Math.max(JR, RR))
    }

    function iR(RR) {
      const JR = qR(RR.durationMs, 10, 500),
        GR = qR(RR.attackMs, 0, JR),
        {
          intonation: tR
        } = RR;
      return {
        waveform: yR.includes(RR.waveform) ? RR.waveform : "sine",
        pitchHz: qR(RR.pitchHz, 20, 4e3),
        glideSemitones: qR(RR.glideSemitones, -24, 24),
        durationMs: JR,
        attackMs: GR,
        releaseMs: qR(RR.releaseMs, 0, JR - GR),
        lowpassHz: null === RR.lowpassHz ? null : qR(RR.lowpassHz, 20, 2e4),
        volume: qR(RR.volume, 0, 2),
        intonation: {
          variationSemitones: qR(tR.variationSemitones, 0, 6),
          declineSemitones: qR(tR.declineSemitones, 0, 12),
          questionRiseSemitones: qR(tR.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: qR(tR.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: qR(RR.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);