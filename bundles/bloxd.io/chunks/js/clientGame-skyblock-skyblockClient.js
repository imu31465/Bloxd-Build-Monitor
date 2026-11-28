export const id = 31;
export const ids = [31];
export const modules = {
  5730: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Fb,
      e: () => Bb
    });
    var eb = Mb(1159),
      Hb = Mb.n(eb),
      pb = Mb(64),
      Vb = Mb(1259),
      gb = Mb(5734),
      lb = Mb(2116),
      Lb = Mb(3503),
      Ib = Mb(5743),
      Ob = Mb(1364);
    const Ub = new WeakMap;
    let tb = 0;

    function Cb(bb) {
      let wb = Ub.get(bb);
      return void 0 === wb && (wb = tb++, Ub.set(bb, wb)), wb
    }

    function Eb(bb) {
      let {
        piece: wb
      } = bb;
      return "space" === wb.kind ? (0, Ob.jsx)(Ob.Fragment, {
        children: wb.text
      }) : (0, Ob.jsx)("span", {
        className: "DialogueWord",
        style: {
          "--word-delay": `${wb.delayMs}ms`
        },
        children: (0, Ob.jsx)(gb.b, {
          text: "icon" === wb.kind ? `[[${wb.icon}]]` : wb.text
        })
      })
    }

    function Fb(bb) {
      let {
        display: wb
      } = bb;
      const {
        selectedLanguage: Mb
      } = (0, Vb.C)(), eb = (0, pb.useMemo)((() => (0, Ib.e)((0, Ib.f)(wb).plan.pieces)), [wb, Mb.code]);
      return (0, Ob.jsxs)("div", {
        className: Hb()("Dialogue", {
          DialogueAnimateIn: !1 !== wb.animateIn
        }),
        children: [wb.speakerName && (0, Ob.jsx)(lb.d, {
          text: wb.speakerName,
          className: "DialogueSpeaker"
        }), (0, Ob.jsx)("p", {
          className: "DialogueLine",
          children: eb.map(((bb, wb) => 1 === bb.length && "space" === bb[0].kind ? bb[0].text : (0, Ob.jsx)("span", {
            className: "DialogueGlue",
            children: bb.map(((bb, wb) => (0, Ob.jsx)(Eb, {
              piece: bb
            }, wb)))
          }, wb)))
        })]
      })
    }
    const Bb = (0, pb.memo)((function() {
      const bb = (0, Lb.k)("dialogue");
      return (0, Ob.jsx)("div", {
        className: "DialogueAnchor",
        "data-camera-keeper": "",
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: bb && (0, Ob.jsx)(Fb, {
          display: bb
        }, Cb(bb))
      })
    }))
  },
  5734: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => gb
    });
    var eb = Mb(64),
      Hb = Mb(366),
      pb = Mb(2130),
      Vb = Mb(1364);

    function gb(bb) {
      let {
        text: wb
      } = bb;
      const Mb = [];
      let gb = "";
      return (0, Hb.gc)(wb).forEach(((bb, wb) => {
        if ("string" === typeof bb || !(0, pb.d)(bb.icon)) return void(gb += "string" === typeof bb ? bb : bb.icon);
        const Hb = Math.max(0, gb.trimEnd().search(/\S{1,12}$/));
        Mb.push((0, Vb.jsxs)(eb.Fragment, {
          children: [gb.slice(0, Hb), (0, Vb.jsxs)("span", {
            className: "InlineIconTextGlue",
            children: [gb.slice(Hb), (0, Vb.jsx)("span", {
              className: "InlineIconTextIcon",
              role: "img",
              "aria-label": bb.icon,
              children: (0, Vb.jsx)(pb.c, {
                itemName: bb.icon,
                amount: 0
              })
            })]
          })]
        }, wb)), gb = ""
      })), Mb.push(gb), (0, Vb.jsx)(Vb.Fragment, {
        children: Mb
      })
    }
  },
  5743: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Ab,
      f: () => fb
    });
    var eb = Mb(5752),
      Hb = Mb(366);
    const pb = 120,
      Vb = 260,
      gb = 1.15,
      lb = 1.2,
      Lb = 2,
      Ib = 1.08,
      Ob = .8,
      Ub = .95,
      tb = 8,
      Cb = "[\"')\\]\u300d\u300f\uff09]*",
      Eb = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${Cb}$`),
      Fb = new RegExp(`[?\uff1f]${Cb}$`),
      Bb = new RegExp(`[!\uff01]${Cb}$`),
      sb = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      mb = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      hb = new RegExp(`[${mb}]`),
      zb = new RegExp(`[${mb}]|[^${mb}]+`, "g"),
      Xb = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function xb(bb) {
      let wb = 2166136261;
      for (let Mb = 0; Mb < bb.length; Mb++) wb ^= bb.charCodeAt(Mb), wb = Math.imul(wb, 16777619);
      return (wb >>> 0) / 4294967295 * 2 - 1
    }

    function jb(bb) {
      var wb;
      if (hb.test(bb)) return 1;
      const Mb = bb.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        eb = Mb.replace(/[^0-9]/g, "");
      if (eb.length > 0 && !/\p{L}/u.test(Mb)) return Math.min(eb.length, 4);
      const Hb = null !== (wb = Mb.match(Xb)) && void 0 !== wb ? wb : [];
      if (0 === Hb.length) {
        var pb, Vb;
        const bb = null !== (pb = null === (Vb = Mb.match(/\p{L}/gu)) || void 0 === Vb ? void 0 : Vb.length) && void 0 !== pb ? pb : 0;
        return 0 === bb ? 0 : Math.min(Math.max(1, Math.round(bb / 2.5)), tb)
      }
      const gb = Mb.replace(/[^\p{L}]/gu, ""),
        lb = Hb.length > 1 && "e" === Hb.at(-1) && gb.endsWith("e") && !gb.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(bb.replace(/[^\p{L}]/gu, ""));
      return Math.min(Hb.length - (lb ? 1 : 0), tb)
    }

    function Kb(bb) {
      return bb.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function rb(bb) {
      const wb = bb.replace(/[^\p{L}]/gu, "");
      return wb.length >= 2 && wb === wb.toUpperCase() && wb !== wb.toLowerCase()
    }

    function Rb(bb, wb) {
      var Mb;
      const tb = wb && (0, eb.k)(wb),
        Cb = null !== (Mb = null === tb || void 0 === tb ? void 0 : tb.syllableMs) && void 0 !== Mb ? Mb : eb.c,
        mb = function(bb) {
          const wb = [];
          for (const eb of (0, Hb.gc)(bb))
            if ("string" === typeof eb)
              for (const bb of eb.split(/(\s+)/)) {
                if ("" === bb) continue;
                if (/^\s+$/.test(bb)) {
                  wb.push({
                    kind: "space",
                    text: bb
                  });
                  continue
                }
                if (!hb.test(bb)) {
                  wb.push({
                    kind: "word",
                    text: bb,
                    delayMs: 0
                  });
                  continue
                }
                let eb = !0;
                for (const Hb of null !== (Mb = bb.match(zb)) && void 0 !== Mb ? Mb : []) {
                  var Mb;
                  const bb = wb.at(-1);
                  eb || "word" !== (null === bb || void 0 === bb ? void 0 : bb.kind) || hb.test(Hb) || /[\p{L}\p{N}]/u.test(Hb) ? (eb || wb.push({
                    kind: "space",
                    text: "\u200b"
                  }), wb.push({
                    kind: "word",
                    text: Hb,
                    delayMs: 0
                  }), eb = !1) : bb.text += Hb
                }
              } else wb.push({
                kind: "icon",
                text: eb.icon,
                delayMs: 0
              });
          return wb
        }(bb),
        Xb = [];
      let Rb = [];
      for (const eb of mb) "space" !== eb.kind && (Rb.push(eb), Eb.test(eb.text) && (Xb.push(Rb), Rb = []));
      Xb.push(Rb);
      const Db = [];
      let cb = 0;
      for (const eb of Xb) {
        var Yb, Zb;
        const bb = null !== (Yb = null === (Zb = eb.at(-1)) || void 0 === Zb ? void 0 : Zb.text) && void 0 !== Yb ? Yb : "",
          wb = Fb.test(bb),
          Mb = Bb.test(bb),
          Hb = eb.map((bb => "word" === bb.kind ? jb(bb.text) : 1)),
          mb = Hb.findLastIndex((bb => bb > 0));
        for (const [Fb, Bb] of eb.entries()) {
          const bb = "word" === Bb.kind,
            eb = Hb[Fb];
          Bb.delayMs = cb;
          for (let Hb = 0; tb && Hb < eb; Hb++) {
            const {
              intonation: pb
            } = tb;
            let Vb = mb > 0 ? -pb.declineSemitones * (Fb / mb) : 0;
            Vb += xb(`${Kb(Bb.text)}|${Hb}`) * pb.variationSemitones;
            const Eb = Math.min(1, pb.variationSemitones);
            let sb = tb.glideSemitones,
              hb = 1;
            Mb && (Vb += pb.exclaimLiftSemitones, hb *= gb), wb && Fb === mb && (Vb += pb.questionRiseSemitones * (eb > 1 ? .5 + .5 * Hb / (eb - 1) : 1), Hb === eb - 1 && (sb = Math.abs(sb) + pb.questionRiseSemitones / 2)), bb && rb(Bb.text) && (Vb += Lb * Eb, hb *= lb), eb > 1 && 0 === Hb && (Vb += Ob * Eb, hb *= Ib), Db.push({
              atMs: cb + Hb * Cb,
              semitones: Vb,
              glideSemitones: sb,
              durationMs: Hb < eb - 1 ? Math.min(tb.durationMs, Cb * Ub) : tb.durationMs,
              level: hb
            })
          }
          cb += eb * Cb + (Eb.test(Bb.text) ? Vb : sb.test(Bb.text) ? pb : 0)
        }
      }
      return {
        pieces: mb.map((bb => "space" === bb.kind ? bb : "icon" === bb.kind ? {
          kind: "icon",
          icon: bb.text,
          delayMs: bb.delayMs
        } : {
          kind: "word",
          text: bb.text,
          delayMs: bb.delayMs
        })),
        blips: Db
      }
    }
    var Db = Mb(1259),
      cb = Mb(1321),
      Yb = Mb(2146);

    function Zb(bb) {
      if ("string" === typeof bb) return bb;
      const wb = cb.g.get().getCurrentLanguageCode();
      return (0, Db.r)(wb, bb.translationKey, (0, Db.n)(bb.params, Yb.d.shown))
    }

    function fb(bb) {
      const wb = void 0 === bb.voice ? null : (0, eb.n)(bb.voice),
        Mb = wb && (0, eb.k)(wb);
      return {
        plan: Rb(Zb(bb.line), Mb),
        synth: Mb
      }
    }

    function Ab(bb) {
      const wb = [];
      let Mb = [];
      for (const [Hb, pb] of bb.entries()) {
        var eb;
        "space" === pb.kind && (" " !== pb.text || "icon" !== (null === (eb = bb[Hb + 1]) || void 0 === eb ? void 0 : eb.kind)) ? (Mb.length > 0 && wb.push(Mb), wb.push([pb]), Mb = []) : Mb.push(pb)
      }
      return Mb.length > 0 && wb.push(Mb), wb
    }
  },
  39752: (bb, wb, Mb) => {
    function eb(bb, wb, Mb) {
      const eb = new Set,
        Hb = new ResizeObserver(Mb),
        pb = () => {
          const wb = new Set(document.querySelectorAll(bb));
          let pb = !1;
          for (const bb of eb) wb.has(bb) || (Hb.unobserve(bb), eb.delete(bb), pb = !0);
          for (const bb of wb) eb.has(bb) || (Hb.observe(bb), Vb.observe(bb, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), eb.add(bb));
          pb && Mb()
        },
        Vb = new MutationObserver((wb => {
          wb.some((bb => "attributes" === bb.type)) && Mb(), wb.some((wb => function(bb, wb, Mb) {
            if ("childList" !== bb.type) return !1;
            for (const eb of bb.addedNodes)
              if (eb instanceof Element && (eb.matches(wb) || eb.querySelector(wb))) return !0;
            for (const eb of bb.removedNodes)
              if (eb instanceof Element)
                for (const bb of Mb)
                  if (eb.contains(bb)) return !0;
            return !1
          }(wb, bb, eb))) && pb()
        }));
      Vb.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const gb of wb) Hb.observe(gb);
      return window.addEventListener("resize", Mb), pb(), Mb(), () => {
        Hb.disconnect(), Vb.disconnect(), window.removeEventListener("resize", Mb)
      }
    }
    Mb.d(wb, {
      e: () => eb
    })
  },
  10212: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => gb,
      d: () => lb
    });
    var eb = Mb(26),
      Hb = Mb(1447),
      pb = Mb(110);
    const Vb = {
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

    function gb() {
      return (0, pb.isMobile)() && "function" === typeof navigator.vibrate
    }
    const lb = new class {
      constructor(bb) {
        this.deps = bb, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(bb, wb) {
        var Mb;
        if (!this.deps.enabled()) return;
        const eb = Vb[bb],
          Hb = null !== wb && void 0 !== wb ? wb : eb.pattern;
        if (null === Hb) return void console.warn("No vibration pattern for", bb);
        const pb = this.deps.now();
        pb - this.lastAnyAt < 40 && eb.priority < this.playingPriority || pb - (null !== (Mb = this.lastAt.get(bb)) && void 0 !== Mb ? Mb : -1 / 0) < eb.minGapMs || pb < this.playingUntil && eb.priority < this.playingPriority || (this.lastAt.set(bb, pb), this.lastAnyAt = pb, this.playingUntil = pb + Hb.reduce(((bb, wb) => bb + wb), 0), this.playingPriority = eb.priority, this.deps.vibrate(Hb))
      }
    }({
      vibrate: bb => {
        navigator.vibrate([...bb])
      },
      now: () => performance.now(),
      enabled: () => gb() && eb.c.get("isTouchScreen") && eb.c.get("clientEscMenuOptions").vibration && !(0, Hb.f)()
    })
  },
  5752: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Hb,
      g: () => eb,
      h: () => pb,
      k: () => lb,
      n: () => Vb
    });
    const eb = ["sine", "triangle", "square", "sawtooth"],
      Hb = 55,
      pb = {
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

    function Vb(bb) {
      return "string" !== typeof bb ? bb : Object.hasOwn(pb, bb) ? pb[bb] : null
    }

    function gb(bb, wb, Mb) {
      return Math.min(Mb, Math.max(wb, bb))
    }

    function lb(bb) {
      const wb = gb(bb.durationMs, 10, 500),
        Mb = gb(bb.attackMs, 0, wb),
        {
          intonation: Hb
        } = bb;
      return {
        waveform: eb.includes(bb.waveform) ? bb.waveform : "sine",
        pitchHz: gb(bb.pitchHz, 20, 4e3),
        glideSemitones: gb(bb.glideSemitones, -24, 24),
        durationMs: wb,
        attackMs: Mb,
        releaseMs: gb(bb.releaseMs, 0, wb - Mb),
        lowpassHz: null === bb.lowpassHz ? null : gb(bb.lowpassHz, 20, 2e4),
        volume: gb(bb.volume, 0, 2),
        intonation: {
          variationSemitones: gb(Hb.variationSemitones, 0, 6),
          declineSemitones: gb(Hb.declineSemitones, 0, 12),
          questionRiseSemitones: gb(Hb.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: gb(Hb.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: gb(bb.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);