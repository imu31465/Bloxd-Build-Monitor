export const id = 30;
export const ids = [30];
export const modules = {
  5233: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => dM,
      e: () => yM
    });
    var OM = iM(1116),
      SM = iM.n(OM),
      jM = iM(44),
      aM = iM(1188),
      PM = iM(5242),
      nM = iM(2006),
      QM = iM(2640),
      zM = iM(5248),
      LM = iM(1303);
    const mM = new WeakMap;
    let HM = 0;

    function hM(MM) {
      let rM = mM.get(MM);
      return void 0 === rM && (rM = HM++, mM.set(MM, rM)), rM
    }

    function JM(MM) {
      let {
        piece: rM
      } = MM;
      return "space" === rM.kind ? (0, LM.jsx)(LM.Fragment, {
        children: rM.text
      }) : (0, LM.jsx)("span", {
        className: "DialogueWord",
        style: {
          "--word-delay": `${rM.delayMs}ms`
        },
        children: (0, LM.jsx)(PM.c, {
          text: "icon" === rM.kind ? `[[${rM.icon}]]` : rM.text
        })
      })
    }

    function dM(MM) {
      let {
        display: rM
      } = MM;
      const {
        selectedLanguage: iM
      } = (0, aM.A)(), OM = (0, jM.useMemo)((() => (0, zM.e)((0, zM.i)(rM).plan.pieces)), [rM, iM.code]);
      return (0, LM.jsxs)("div", {
        className: SM()("Dialogue", {
          DialogueAnimateIn: !1 !== rM.animateIn
        }),
        children: [rM.speakerName && (0, LM.jsx)(nM.b, {
          text: rM.speakerName,
          className: "DialogueSpeaker"
        }), (0, LM.jsx)("p", {
          className: "DialogueLine",
          children: OM.map(((MM, rM) => 1 === MM.length && "space" === MM[0].kind ? MM[0].text : (0, LM.jsx)("span", {
            className: "DialogueGlue",
            children: MM.map(((MM, rM) => (0, LM.jsx)(JM, {
              piece: MM
            }, rM)))
          }, rM)))
        })]
      })
    }
    const yM = (0, jM.memo)((function() {
      const MM = (0, QM.f)("dialogue");
      return (0, LM.jsx)("div", {
        className: "DialogueAnchor",
        "data-camera-keeper": "",
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: MM && (0, LM.jsx)(dM, {
          display: MM
        }, hM(MM))
      })
    }))
  },
  5242: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => PM
    });
    var OM = iM(44),
      SM = iM(313),
      jM = iM(2026),
      aM = iM(1303);

    function PM(MM) {
      let {
        text: rM
      } = MM;
      const iM = [];
      let PM = "";
      return (0, SM.bc)(rM).forEach(((MM, rM) => {
        if ("string" === typeof MM || !(0, jM.d)(MM.icon)) return void(PM += "string" === typeof MM ? MM : MM.icon);
        const SM = Math.max(0, PM.trimEnd().search(/\S{1,12}$/));
        iM.push((0, aM.jsxs)(OM.Fragment, {
          children: [PM.slice(0, SM), (0, aM.jsxs)("span", {
            className: "InlineIconTextGlue",
            children: [PM.slice(SM), (0, aM.jsx)("span", {
              className: "InlineIconTextIcon",
              role: "img",
              "aria-label": MM.icon,
              children: (0, aM.jsx)(jM.b, {
                itemName: MM.icon,
                amount: 0
              })
            })]
          })]
        }, rM)), PM = ""
      })), iM.push(PM), (0, aM.jsx)(aM.Fragment, {
        children: iM
      })
    }
  },
  35017: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => jM
    });
    var OM = iM(4919),
      SM = iM(4923);

    function jM(MM) {
      let {
        children: rM,
        showing: iM,
        globallyUniqueKey: jM,
        alwaysMountChildren: aM = !1,
        doGameplayStartStopOnShow: PM = !0,
        keepsMovement: nM = !1
      } = MM;
      return (0, SM.c)(!0, iM, jM, nM), (0, OM.c)(PM, iM), iM || aM ? rM : null
    }
  },
  5248: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => DM,
      i: () => sM
    });
    var OM = iM(5251),
      SM = iM(313);
    const jM = 120,
      aM = 260,
      PM = 1.15,
      nM = 1.2,
      QM = 2,
      zM = 1.08,
      LM = .8,
      mM = .95,
      HM = 8,
      hM = "[\"')\\]\u300d\u300f\uff09]*",
      JM = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${hM}$`),
      dM = new RegExp(`[?\uff1f]${hM}$`),
      yM = new RegExp(`[!\uff01]${hM}$`),
      lM = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      EM = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      UM = new RegExp(`[${EM}]`),
      GM = new RegExp(`[${EM}]|[^${EM}]+`, "g"),
      CM = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function eM(MM) {
      let rM = 2166136261;
      for (let iM = 0; iM < MM.length; iM++) rM ^= MM.charCodeAt(iM), rM = Math.imul(rM, 16777619);
      return (rM >>> 0) / 4294967295 * 2 - 1
    }

    function bM(MM) {
      var rM;
      if (UM.test(MM)) return 1;
      const iM = MM.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        OM = iM.replace(/[^0-9]/g, "");
      if (OM.length > 0 && !/\p{L}/u.test(iM)) return Math.min(OM.length, 4);
      const SM = null !== (rM = iM.match(CM)) && void 0 !== rM ? rM : [];
      if (0 === SM.length) {
        var jM, aM;
        const MM = null !== (jM = null === (aM = iM.match(/\p{L}/gu)) || void 0 === aM ? void 0 : aM.length) && void 0 !== jM ? jM : 0;
        return 0 === MM ? 0 : Math.min(Math.max(1, Math.round(MM / 2.5)), HM)
      }
      const PM = iM.replace(/[^\p{L}]/gu, ""),
        nM = SM.length > 1 && "e" === SM.at(-1) && PM.endsWith("e") && !PM.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(MM.replace(/[^\p{L}]/gu, ""));
      return Math.min(SM.length - (nM ? 1 : 0), HM)
    }

    function wM(MM) {
      return MM.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function tM(MM) {
      const rM = MM.replace(/[^\p{L}]/gu, "");
      return rM.length >= 2 && rM === rM.toUpperCase() && rM !== rM.toLowerCase()
    }

    function gM(MM, rM) {
      var iM;
      const HM = rM && (0, OM.p)(rM),
        hM = null !== (iM = null === HM || void 0 === HM ? void 0 : HM.syllableMs) && void 0 !== iM ? iM : OM.d,
        EM = function(MM) {
          const rM = [];
          for (const OM of (0, SM.bc)(MM))
            if ("string" === typeof OM)
              for (const MM of OM.split(/(\s+)/)) {
                if ("" === MM) continue;
                if (/^\s+$/.test(MM)) {
                  rM.push({
                    kind: "space",
                    text: MM
                  });
                  continue
                }
                if (!UM.test(MM)) {
                  rM.push({
                    kind: "word",
                    text: MM,
                    delayMs: 0
                  });
                  continue
                }
                let OM = !0;
                for (const SM of null !== (iM = MM.match(GM)) && void 0 !== iM ? iM : []) {
                  var iM;
                  const MM = rM.at(-1);
                  OM || "word" !== (null === MM || void 0 === MM ? void 0 : MM.kind) || UM.test(SM) || /[\p{L}\p{N}]/u.test(SM) ? (OM || rM.push({
                    kind: "space",
                    text: "\u200b"
                  }), rM.push({
                    kind: "word",
                    text: SM,
                    delayMs: 0
                  }), OM = !1) : MM.text += SM
                }
              } else rM.push({
                kind: "icon",
                text: OM.icon,
                delayMs: 0
              });
          return rM
        }(MM),
        CM = [];
      let gM = [];
      for (const OM of EM) "space" !== OM.kind && (gM.push(OM), JM.test(OM.text) && (CM.push(gM), gM = []));
      CM.push(gM);
      const uM = [];
      let RM = 0;
      for (const OM of CM) {
        var pM, WM;
        const MM = null !== (pM = null === (WM = OM.at(-1)) || void 0 === WM ? void 0 : WM.text) && void 0 !== pM ? pM : "",
          rM = dM.test(MM),
          iM = yM.test(MM),
          SM = OM.map((MM => "word" === MM.kind ? bM(MM.text) : 1)),
          EM = SM.findLastIndex((MM => MM > 0));
        for (const [dM, yM] of OM.entries()) {
          const MM = "word" === yM.kind,
            OM = SM[dM];
          yM.delayMs = RM;
          for (let SM = 0; HM && SM < OM; SM++) {
            const {
              intonation: jM
            } = HM;
            let aM = EM > 0 ? -jM.declineSemitones * (dM / EM) : 0;
            aM += eM(`${wM(yM.text)}|${SM}`) * jM.variationSemitones;
            const JM = Math.min(1, jM.variationSemitones);
            let lM = HM.glideSemitones,
              UM = 1;
            iM && (aM += jM.exclaimLiftSemitones, UM *= PM), rM && dM === EM && (aM += jM.questionRiseSemitones * (OM > 1 ? .5 + .5 * SM / (OM - 1) : 1), SM === OM - 1 && (lM = Math.abs(lM) + jM.questionRiseSemitones / 2)), MM && tM(yM.text) && (aM += QM * JM, UM *= nM), OM > 1 && 0 === SM && (aM += LM * JM, UM *= zM), uM.push({
              atMs: RM + SM * hM,
              semitones: aM,
              glideSemitones: lM,
              durationMs: SM < OM - 1 ? Math.min(HM.durationMs, hM * mM) : HM.durationMs,
              level: UM
            })
          }
          RM += OM * hM + (JM.test(yM.text) ? aM : lM.test(yM.text) ? jM : 0)
        }
      }
      return {
        pieces: EM.map((MM => "space" === MM.kind ? MM : "icon" === MM.kind ? {
          kind: "icon",
          icon: MM.text,
          delayMs: MM.delayMs
        } : {
          kind: "word",
          text: MM.text,
          delayMs: MM.delayMs
        })),
        blips: uM
      }
    }
    var uM = iM(1188),
      RM = iM(1258),
      pM = iM(2045);

    function WM(MM) {
      if ("string" === typeof MM) return MM;
      const rM = RM.e.get().getCurrentLanguageCode();
      return (0, uM.r)(rM, MM.translationKey, (0, uM.o)(MM.params, pM.c.shown))
    }

    function sM(MM) {
      const rM = void 0 === MM.voice ? null : (0, OM.r)(MM.voice),
        iM = rM && (0, OM.p)(rM);
      return {
        plan: gM(WM(MM.line), iM),
        synth: iM
      }
    }

    function DM(MM) {
      const rM = [];
      let iM = [];
      for (const [SM, jM] of MM.entries()) {
        var OM;
        "space" === jM.kind && (" " !== jM.text || "icon" !== (null === (OM = MM[SM + 1]) || void 0 === OM ? void 0 : OM.kind)) ? (iM.length > 0 && rM.push(iM), rM.push([jM]), iM = []) : iM.push(jM)
      }
      return iM.length > 0 && rM.push(iM), rM
    }
  },
  39509: (MM, rM, iM) => {
    function OM(MM, rM, iM) {
      const OM = new Set,
        SM = new ResizeObserver(iM),
        jM = () => {
          const rM = new Set(document.querySelectorAll(MM));
          let jM = !1;
          for (const MM of OM) rM.has(MM) || (SM.unobserve(MM), OM.delete(MM), jM = !0);
          for (const MM of rM) OM.has(MM) || (SM.observe(MM), aM.observe(MM, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), OM.add(MM));
          jM && iM()
        },
        aM = new MutationObserver((rM => {
          rM.some((MM => "attributes" === MM.type)) && iM(), rM.some((rM => function(MM, rM, iM) {
            if ("childList" !== MM.type) return !1;
            for (const OM of MM.addedNodes)
              if (OM instanceof Element && (OM.matches(rM) || OM.querySelector(rM))) return !0;
            for (const OM of MM.removedNodes)
              if (OM instanceof Element)
                for (const MM of iM)
                  if (OM.contains(MM)) return !0;
            return !1
          }(rM, MM, OM))) && jM()
        }));
      aM.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const PM of rM) SM.observe(PM);
      return window.addEventListener("resize", iM), jM(), iM(), () => {
        SM.disconnect(), aM.disconnect(), window.removeEventListener("resize", iM)
      }
    }
    iM.d(rM, {
      b: () => OM
    })
  },
  9467: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => PM,
      e: () => nM
    });
    var OM = iM(19),
      SM = iM(1373),
      jM = iM(83);
    const aM = {
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

    function PM() {
      return (0, jM.isMobile)() && "function" === typeof navigator.vibrate
    }
    const nM = new class {
      constructor(MM) {
        this.deps = MM, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(MM, rM) {
        var iM;
        if (!this.deps.enabled()) return;
        const OM = aM[MM],
          SM = null !== rM && void 0 !== rM ? rM : OM.pattern;
        if (null === SM) return void console.warn("No vibration pattern for", MM);
        const jM = this.deps.now();
        jM - this.lastAnyAt < 40 && OM.priority < this.playingPriority || jM - (null !== (iM = this.lastAt.get(MM)) && void 0 !== iM ? iM : -1 / 0) < OM.minGapMs || jM < this.playingUntil && OM.priority < this.playingPriority || (this.lastAt.set(MM, jM), this.lastAnyAt = jM, this.playingUntil = jM + SM.reduce(((MM, rM) => MM + rM), 0), this.playingPriority = OM.priority, this.deps.vibrate(SM))
      }
    }({
      vibrate: MM => {
        navigator.vibrate([...MM])
      },
      now: () => performance.now(),
      enabled: () => PM() && OM.d.get("isTouchScreen") && OM.d.get("clientEscMenuOptions").vibration && !(0, SM.i)()
    })
  },
  5251: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => SM,
      h: () => OM,
      l: () => jM,
      p: () => nM,
      r: () => aM
    });
    const OM = ["sine", "triangle", "square", "sawtooth"],
      SM = 55,
      jM = {
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

    function aM(MM) {
      return "string" !== typeof MM ? MM : Object.hasOwn(jM, MM) ? jM[MM] : null
    }

    function PM(MM, rM, iM) {
      return Math.min(iM, Math.max(rM, MM))
    }

    function nM(MM) {
      const rM = PM(MM.durationMs, 10, 500),
        iM = PM(MM.attackMs, 0, rM),
        {
          intonation: SM
        } = MM;
      return {
        waveform: OM.includes(MM.waveform) ? MM.waveform : "sine",
        pitchHz: PM(MM.pitchHz, 20, 4e3),
        glideSemitones: PM(MM.glideSemitones, -24, 24),
        durationMs: rM,
        attackMs: iM,
        releaseMs: PM(MM.releaseMs, 0, rM - iM),
        lowpassHz: null === MM.lowpassHz ? null : PM(MM.lowpassHz, 20, 2e4),
        volume: PM(MM.volume, 0, 2),
        intonation: {
          variationSemitones: PM(SM.variationSemitones, 0, 6),
          declineSemitones: PM(SM.declineSemitones, 0, 12),
          questionRiseSemitones: PM(SM.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: PM(SM.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: PM(MM.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);