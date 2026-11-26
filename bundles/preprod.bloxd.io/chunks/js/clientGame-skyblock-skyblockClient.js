export const id = 30;
export const ids = [30];
export const modules = {
  5326: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => ZB,
      i: () => NB
    });
    var YB = GB(1090),
      DB = GB.n(YB),
      QB = GB(56),
      oB = GB(1175),
      jB = GB(5335),
      yB = GB(2e3),
      JB = GB(2653),
      MB = GB(5337),
      PB = GB(1282);
    const zB = new WeakMap;
    let lB = 0;

    function pB(BB) {
      let OB = zB.get(BB);
      return void 0 === OB && (OB = lB++, zB.set(BB, OB)), OB
    }

    function qB(BB) {
      let {
        piece: OB
      } = BB;
      return "space" === OB.kind ? (0, PB.jsx)(PB.Fragment, {
        children: OB.text
      }) : (0, PB.jsx)("span", {
        className: "DialogueWord",
        style: {
          "--word-delay": `${OB.delayMs}ms`
        },
        children: (0, PB.jsx)(jB.c, {
          text: "icon" === OB.kind ? `[[${OB.icon}]]` : OB.text
        })
      })
    }

    function ZB(BB) {
      let {
        display: OB
      } = BB;
      const {
        selectedLanguage: GB
      } = (0, oB.H)(), YB = (0, QB.useMemo)((() => (0, MB.b)((0, MB.c)(OB).plan.pieces)), [OB, GB.code]);
      return (0, PB.jsxs)("div", {
        className: DB()("Dialogue", {
          DialogueAnimateIn: !1 !== OB.animateIn
        }),
        children: [OB.speakerName && (0, PB.jsx)(yB.b, {
          text: OB.speakerName,
          className: "DialogueSpeaker"
        }), (0, PB.jsx)("p", {
          className: "DialogueLine",
          children: YB.map(((BB, OB) => 1 === BB.length && "space" === BB[0].kind ? BB[0].text : (0, PB.jsx)("span", {
            className: "DialogueGlue",
            children: BB.map(((BB, OB) => (0, PB.jsx)(qB, {
              piece: BB
            }, OB)))
          }, OB)))
        })]
      })
    }
    const NB = (0, QB.memo)((function() {
      const BB = (0, JB.g)("dialogue");
      return (0, PB.jsx)("div", {
        className: "DialogueAnchor",
        "data-camera-keeper": "",
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: BB && (0, PB.jsx)(ZB, {
          display: BB
        }, pB(BB))
      })
    }))
  },
  5335: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => jB
    });
    var YB = GB(56),
      DB = GB(331),
      QB = GB(2012),
      oB = GB(1282);

    function jB(BB) {
      let {
        text: OB
      } = BB;
      const GB = [];
      let jB = "";
      return (0, DB.hc)(OB).forEach(((BB, OB) => {
        if ("string" === typeof BB || !(0, QB.d)(BB.icon)) return void(jB += "string" === typeof BB ? BB : BB.icon);
        const DB = Math.max(0, jB.trimEnd().search(/\S{1,12}$/));
        GB.push((0, oB.jsxs)(YB.Fragment, {
          children: [jB.slice(0, DB), (0, oB.jsxs)("span", {
            className: "InlineIconTextGlue",
            children: [jB.slice(DB), (0, oB.jsx)("span", {
              className: "InlineIconTextIcon",
              role: "img",
              "aria-label": BB.icon,
              children: (0, oB.jsx)(QB.c, {
                itemName: BB.icon,
                amount: 0
              })
            })]
          })]
        }, OB)), jB = ""
      })), GB.push(jB), (0, oB.jsx)(oB.Fragment, {
        children: GB
      })
    }
  },
  34790: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => QB
    });
    var YB = GB(4949),
      DB = GB(4956);

    function QB(BB) {
      let {
        children: OB,
        showing: GB,
        globallyUniqueKey: QB,
        alwaysMountChildren: oB = !1,
        doGameplayStartStopOnShow: jB = !0,
        keepsMovement: yB = !1
      } = BB;
      return (0, DB.e)(!0, GB, QB, yB), (0, YB.c)(jB, GB), GB || oB ? OB : null
    }
  },
  5337: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => iB,
      c: () => FB
    });
    var YB = GB(5345),
      DB = GB(331);
    const QB = 120,
      oB = 260,
      jB = 1.15,
      yB = 1.2,
      JB = 2,
      MB = 1.08,
      PB = .8,
      zB = .95,
      lB = 8,
      pB = "[\"')\\]\u300d\u300f\uff09]*",
      qB = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${pB}$`),
      ZB = new RegExp(`[?\uff1f]${pB}$`),
      NB = new RegExp(`[!\uff01]${pB}$`),
      RB = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      WB = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      AB = new RegExp(`[${WB}]`),
      VB = new RegExp(`[${WB}]|[^${WB}]+`, "g"),
      SB = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function nB(BB) {
      let OB = 2166136261;
      for (let GB = 0; GB < BB.length; GB++) OB ^= BB.charCodeAt(GB), OB = Math.imul(OB, 16777619);
      return (OB >>> 0) / 4294967295 * 2 - 1
    }

    function UB(BB) {
      var OB;
      if (AB.test(BB)) return 1;
      const GB = BB.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        YB = GB.replace(/[^0-9]/g, "");
      if (YB.length > 0 && !/\p{L}/u.test(GB)) return Math.min(YB.length, 4);
      const DB = null !== (OB = GB.match(SB)) && void 0 !== OB ? OB : [];
      if (0 === DB.length) {
        var QB, oB;
        const BB = null !== (QB = null === (oB = GB.match(/\p{L}/gu)) || void 0 === oB ? void 0 : oB.length) && void 0 !== QB ? QB : 0;
        return 0 === BB ? 0 : Math.min(Math.max(1, Math.round(BB / 2.5)), lB)
      }
      const jB = GB.replace(/[^\p{L}]/gu, ""),
        yB = DB.length > 1 && "e" === DB.at(-1) && jB.endsWith("e") && !jB.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(BB.replace(/[^\p{L}]/gu, ""));
      return Math.min(DB.length - (yB ? 1 : 0), lB)
    }

    function fB(BB) {
      return BB.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function kB(BB) {
      const OB = BB.replace(/[^\p{L}]/gu, "");
      return OB.length >= 2 && OB === OB.toUpperCase() && OB !== OB.toLowerCase()
    }

    function dB(BB, OB) {
      var GB;
      const lB = OB && (0, YB.j)(OB),
        pB = null !== (GB = null === lB || void 0 === lB ? void 0 : lB.syllableMs) && void 0 !== GB ? GB : YB.d,
        WB = function(BB) {
          const OB = [];
          for (const YB of (0, DB.hc)(BB))
            if ("string" === typeof YB)
              for (const BB of YB.split(/(\s+)/)) {
                if ("" === BB) continue;
                if (/^\s+$/.test(BB)) {
                  OB.push({
                    kind: "space",
                    text: BB
                  });
                  continue
                }
                if (!AB.test(BB)) {
                  OB.push({
                    kind: "word",
                    text: BB,
                    delayMs: 0
                  });
                  continue
                }
                let YB = !0;
                for (const DB of null !== (GB = BB.match(VB)) && void 0 !== GB ? GB : []) {
                  var GB;
                  const BB = OB.at(-1);
                  YB || "word" !== (null === BB || void 0 === BB ? void 0 : BB.kind) || AB.test(DB) || /[\p{L}\p{N}]/u.test(DB) ? (YB || OB.push({
                    kind: "space",
                    text: "\u200b"
                  }), OB.push({
                    kind: "word",
                    text: DB,
                    delayMs: 0
                  }), YB = !1) : BB.text += DB
                }
              } else OB.push({
                kind: "icon",
                text: YB.icon,
                delayMs: 0
              });
          return OB
        }(BB),
        SB = [];
      let dB = [];
      for (const YB of WB) "space" !== YB.kind && (dB.push(YB), qB.test(YB.text) && (SB.push(dB), dB = []));
      SB.push(dB);
      const KB = [];
      let uB = 0;
      for (const YB of SB) {
        var mB, IB;
        const BB = null !== (mB = null === (IB = YB.at(-1)) || void 0 === IB ? void 0 : IB.text) && void 0 !== mB ? mB : "",
          OB = ZB.test(BB),
          GB = NB.test(BB),
          DB = YB.map((BB => "word" === BB.kind ? UB(BB.text) : 1)),
          WB = DB.findLastIndex((BB => BB > 0));
        for (const [ZB, NB] of YB.entries()) {
          const BB = "word" === NB.kind,
            YB = DB[ZB];
          NB.delayMs = uB;
          for (let DB = 0; lB && DB < YB; DB++) {
            const {
              intonation: QB
            } = lB;
            let oB = WB > 0 ? -QB.declineSemitones * (ZB / WB) : 0;
            oB += nB(`${fB(NB.text)}|${DB}`) * QB.variationSemitones;
            const qB = Math.min(1, QB.variationSemitones);
            let RB = lB.glideSemitones,
              AB = 1;
            GB && (oB += QB.exclaimLiftSemitones, AB *= jB), OB && ZB === WB && (oB += QB.questionRiseSemitones * (YB > 1 ? .5 + .5 * DB / (YB - 1) : 1), DB === YB - 1 && (RB = Math.abs(RB) + QB.questionRiseSemitones / 2)), BB && kB(NB.text) && (oB += JB * qB, AB *= yB), YB > 1 && 0 === DB && (oB += PB * qB, AB *= MB), KB.push({
              atMs: uB + DB * pB,
              semitones: oB,
              glideSemitones: RB,
              durationMs: DB < YB - 1 ? Math.min(lB.durationMs, pB * zB) : lB.durationMs,
              level: AB
            })
          }
          uB += YB * pB + (qB.test(NB.text) ? oB : RB.test(NB.text) ? QB : 0)
        }
      }
      return {
        pieces: WB.map((BB => "space" === BB.kind ? BB : "icon" === BB.kind ? {
          kind: "icon",
          icon: BB.text,
          delayMs: BB.delayMs
        } : {
          kind: "word",
          text: BB.text,
          delayMs: BB.delayMs
        })),
        blips: KB
      }
    }
    var KB = GB(1175),
      uB = GB(1253),
      mB = GB(2027);

    function IB(BB) {
      if ("string" === typeof BB) return BB;
      const OB = uB.e.get().getCurrentLanguageCode();
      return (0, KB.x)(OB, BB.translationKey, (0, KB.v)(BB.params, mB.d.shown))
    }

    function FB(BB) {
      const OB = void 0 === BB.voice ? null : (0, YB.k)(BB.voice),
        GB = OB && (0, YB.j)(OB);
      return {
        plan: dB(IB(BB.line), GB),
        synth: GB
      }
    }

    function iB(BB) {
      const OB = [];
      let GB = [];
      for (const [DB, QB] of BB.entries()) {
        var YB;
        "space" === QB.kind && (" " !== QB.text || "icon" !== (null === (YB = BB[DB + 1]) || void 0 === YB ? void 0 : YB.kind)) ? (GB.length > 0 && OB.push(GB), OB.push([QB]), GB = []) : GB.push(QB)
      }
      return GB.length > 0 && OB.push(GB), OB
    }
  },
  39173: (BB, OB, GB) => {
    function YB(BB, OB, GB) {
      const YB = new Set,
        DB = new ResizeObserver(GB),
        QB = () => {
          const OB = new Set(document.querySelectorAll(BB));
          let QB = !1;
          for (const BB of YB) OB.has(BB) || (DB.unobserve(BB), YB.delete(BB), QB = !0);
          for (const BB of OB) YB.has(BB) || (DB.observe(BB), oB.observe(BB, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), YB.add(BB));
          QB && GB()
        },
        oB = new MutationObserver((OB => {
          OB.some((BB => "attributes" === BB.type)) && GB(), OB.some((OB => function(BB, OB, GB) {
            if ("childList" !== BB.type) return !1;
            for (const YB of BB.addedNodes)
              if (YB instanceof Element && (YB.matches(OB) || YB.querySelector(OB))) return !0;
            for (const YB of BB.removedNodes)
              if (YB instanceof Element)
                for (const BB of GB)
                  if (YB.contains(BB)) return !0;
            return !1
          }(OB, BB, YB))) && QB()
        }));
      oB.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const jB of OB) DB.observe(jB);
      return window.addEventListener("resize", GB), QB(), GB(), () => {
        DB.disconnect(), oB.disconnect(), window.removeEventListener("resize", GB)
      }
    }
    GB.d(OB, {
      d: () => YB
    })
  },
  9545: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => jB,
      h: () => yB
    });
    var YB = GB(16),
      DB = GB(1350),
      QB = GB(92);
    const oB = {
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

    function jB() {
      return (0, QB.isMobile)() && "function" === typeof navigator.vibrate
    }
    const yB = new class {
      constructor(BB) {
        this.deps = BB, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(BB, OB) {
        var GB;
        if (!this.deps.enabled()) return;
        const YB = oB[BB],
          DB = null !== OB && void 0 !== OB ? OB : YB.pattern;
        if (null === DB) return void console.warn("No vibration pattern for", BB);
        const QB = this.deps.now();
        QB - this.lastAnyAt < 40 && YB.priority < this.playingPriority || QB - (null !== (GB = this.lastAt.get(BB)) && void 0 !== GB ? GB : -1 / 0) < YB.minGapMs || QB < this.playingUntil && YB.priority < this.playingPriority || (this.lastAt.set(BB, QB), this.lastAnyAt = QB, this.playingUntil = QB + DB.reduce(((BB, OB) => BB + OB), 0), this.playingPriority = YB.priority, this.deps.vibrate(DB))
      }
    }({
      vibrate: BB => {
        navigator.vibrate([...BB])
      },
      now: () => performance.now(),
      enabled: () => jB() && YB.c.get("isTouchScreen") && YB.c.get("clientEscMenuOptions").vibration && !(0, DB.f)()
    })
  },
  5345: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => DB,
      e: () => YB,
      g: () => QB,
      j: () => yB,
      k: () => oB
    });
    const YB = ["sine", "triangle", "square", "sawtooth"],
      DB = 55,
      QB = {
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

    function oB(BB) {
      return "string" !== typeof BB ? BB : Object.hasOwn(QB, BB) ? QB[BB] : null
    }

    function jB(BB, OB, GB) {
      return Math.min(GB, Math.max(OB, BB))
    }

    function yB(BB) {
      const OB = jB(BB.durationMs, 10, 500),
        GB = jB(BB.attackMs, 0, OB),
        {
          intonation: DB
        } = BB;
      return {
        waveform: YB.includes(BB.waveform) ? BB.waveform : "sine",
        pitchHz: jB(BB.pitchHz, 20, 4e3),
        glideSemitones: jB(BB.glideSemitones, -24, 24),
        durationMs: OB,
        attackMs: GB,
        releaseMs: jB(BB.releaseMs, 0, OB - GB),
        lowpassHz: null === BB.lowpassHz ? null : jB(BB.lowpassHz, 20, 2e4),
        volume: jB(BB.volume, 0, 2),
        intonation: {
          variationSemitones: jB(DB.variationSemitones, 0, 6),
          declineSemitones: jB(DB.declineSemitones, 0, 12),
          questionRiseSemitones: jB(DB.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: jB(DB.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: jB(BB.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);