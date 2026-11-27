export const id = 31;
export const ids = [31];
export const modules = {
  5642: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => hr,
      e: () => zr
    });
    var Zr = Qr(1155),
      Wr = Qr.n(Zr),
      ar = Qr(72),
      jr = Qr(1251),
      Ir = Qr(5649),
      fr = Qr(2057),
      Er = Qr(3404),
      pr = Qr(5658),
      xr = Qr(1338);
    const mr = new WeakMap;
    let Nr = 0;

    function Ur(rr) {
      let Sr = mr.get(rr);
      return void 0 === Sr && (Sr = Nr++, mr.set(rr, Sr)), Sr
    }

    function tr(rr) {
      let {
        piece: Sr
      } = rr;
      return "space" === Sr.kind ? (0, xr.jsx)(xr.Fragment, {
        children: Sr.text
      }) : (0, xr.jsx)("span", {
        className: "DialogueWord",
        style: {
          "--word-delay": `${Sr.delayMs}ms`
        },
        children: (0, xr.jsx)(Ir.e, {
          text: "icon" === Sr.kind ? `[[${Sr.icon}]]` : Sr.text
        })
      })
    }

    function hr(rr) {
      let {
        display: Sr
      } = rr;
      const {
        selectedLanguage: Qr
      } = (0, jr.E)(), Zr = (0, ar.useMemo)((() => (0, pr.d)((0, pr.h)(Sr).plan.pieces)), [Sr, Qr.code]);
      return (0, xr.jsxs)("div", {
        className: Wr()("Dialogue", {
          DialogueAnimateIn: !1 !== Sr.animateIn
        }),
        children: [Sr.speakerName && (0, xr.jsx)(fr.c, {
          text: Sr.speakerName,
          className: "DialogueSpeaker"
        }), (0, xr.jsx)("p", {
          className: "DialogueLine",
          children: Zr.map(((rr, Sr) => 1 === rr.length && "space" === rr[0].kind ? rr[0].text : (0, xr.jsx)("span", {
            className: "DialogueGlue",
            children: rr.map(((rr, Sr) => (0, xr.jsx)(tr, {
              piece: rr
            }, Sr)))
          }, Sr)))
        })]
      })
    }
    const zr = (0, ar.memo)((function() {
      const rr = (0, Er.l)("dialogue");
      return (0, xr.jsx)("div", {
        className: "DialogueAnchor",
        "data-camera-keeper": "",
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: rr && (0, xr.jsx)(hr, {
          display: rr
        }, Ur(rr))
      })
    }))
  },
  5649: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Ir
    });
    var Zr = Qr(72),
      Wr = Qr(360),
      ar = Qr(2075),
      jr = Qr(1338);

    function Ir(rr) {
      let {
        text: Sr
      } = rr;
      const Qr = [];
      let Ir = "";
      return (0, Wr.gc)(Sr).forEach(((rr, Sr) => {
        if ("string" === typeof rr || !(0, ar.h)(rr.icon)) return void(Ir += "string" === typeof rr ? rr : rr.icon);
        const Wr = Math.max(0, Ir.trimEnd().search(/\S{1,12}$/));
        Qr.push((0, jr.jsxs)(Zr.Fragment, {
          children: [Ir.slice(0, Wr), (0, jr.jsxs)("span", {
            className: "InlineIconTextGlue",
            children: [Ir.slice(Wr), (0, jr.jsx)("span", {
              className: "InlineIconTextIcon",
              role: "img",
              "aria-label": rr.icon,
              children: (0, jr.jsx)(ar.d, {
                itemName: rr.icon,
                amount: 0
              })
            })]
          })]
        }, Sr)), Ir = ""
      })), Qr.push(Ir), (0, jr.jsx)(jr.Fragment, {
        children: Qr
      })
    }
  },
  5658: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Rr,
      h: () => qr
    });
    var Zr = Qr(5667),
      Wr = Qr(360);
    const ar = 120,
      jr = 260,
      Ir = 1.15,
      fr = 1.2,
      Er = 2,
      pr = 1.08,
      xr = .8,
      mr = .95,
      Nr = 8,
      Ur = "[\"')\\]\u300d\u300f\uff09]*",
      tr = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${Ur}$`),
      hr = new RegExp(`[?\uff1f]${Ur}$`),
      zr = new RegExp(`[!\uff01]${Ur}$`),
      Yr = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      nr = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      er = new RegExp(`[${nr}]`),
      Kr = new RegExp(`[${nr}]|[^${nr}]+`, "g"),
      yr = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function Br(rr) {
      let Sr = 2166136261;
      for (let Qr = 0; Qr < rr.length; Qr++) Sr ^= rr.charCodeAt(Qr), Sr = Math.imul(Sr, 16777619);
      return (Sr >>> 0) / 4294967295 * 2 - 1
    }

    function Tr(rr) {
      var Sr;
      if (er.test(rr)) return 1;
      const Qr = rr.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        Zr = Qr.replace(/[^0-9]/g, "");
      if (Zr.length > 0 && !/\p{L}/u.test(Qr)) return Math.min(Zr.length, 4);
      const Wr = null !== (Sr = Qr.match(yr)) && void 0 !== Sr ? Sr : [];
      if (0 === Wr.length) {
        var ar, jr;
        const rr = null !== (ar = null === (jr = Qr.match(/\p{L}/gu)) || void 0 === jr ? void 0 : jr.length) && void 0 !== ar ? ar : 0;
        return 0 === rr ? 0 : Math.min(Math.max(1, Math.round(rr / 2.5)), Nr)
      }
      const Ir = Qr.replace(/[^\p{L}]/gu, ""),
        fr = Wr.length > 1 && "e" === Wr.at(-1) && Ir.endsWith("e") && !Ir.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(rr.replace(/[^\p{L}]/gu, ""));
      return Math.min(Wr.length - (fr ? 1 : 0), Nr)
    }

    function vr(rr) {
      return rr.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function Or(rr) {
      const Sr = rr.replace(/[^\p{L}]/gu, "");
      return Sr.length >= 2 && Sr === Sr.toUpperCase() && Sr !== Sr.toLowerCase()
    }

    function Lr(rr, Sr) {
      var Qr;
      const Nr = Sr && (0, Zr.n)(Sr),
        Ur = null !== (Qr = null === Nr || void 0 === Nr ? void 0 : Nr.syllableMs) && void 0 !== Qr ? Qr : Zr.e,
        nr = function(rr) {
          const Sr = [];
          for (const Zr of (0, Wr.gc)(rr))
            if ("string" === typeof Zr)
              for (const rr of Zr.split(/(\s+)/)) {
                if ("" === rr) continue;
                if (/^\s+$/.test(rr)) {
                  Sr.push({
                    kind: "space",
                    text: rr
                  });
                  continue
                }
                if (!er.test(rr)) {
                  Sr.push({
                    kind: "word",
                    text: rr,
                    delayMs: 0
                  });
                  continue
                }
                let Zr = !0;
                for (const Wr of null !== (Qr = rr.match(Kr)) && void 0 !== Qr ? Qr : []) {
                  var Qr;
                  const rr = Sr.at(-1);
                  Zr || "word" !== (null === rr || void 0 === rr ? void 0 : rr.kind) || er.test(Wr) || /[\p{L}\p{N}]/u.test(Wr) ? (Zr || Sr.push({
                    kind: "space",
                    text: "\u200b"
                  }), Sr.push({
                    kind: "word",
                    text: Wr,
                    delayMs: 0
                  }), Zr = !1) : rr.text += Wr
                }
              } else Sr.push({
                kind: "icon",
                text: Zr.icon,
                delayMs: 0
              });
          return Sr
        }(rr),
        yr = [];
      let Lr = [];
      for (const Zr of nr) "space" !== Zr.kind && (Lr.push(Zr), tr.test(Zr.text) && (yr.push(Lr), Lr = []));
      yr.push(Lr);
      const lr = [];
      let Xr = 0;
      for (const Zr of yr) {
        var Pr, Hr;
        const rr = null !== (Pr = null === (Hr = Zr.at(-1)) || void 0 === Hr ? void 0 : Hr.text) && void 0 !== Pr ? Pr : "",
          Sr = hr.test(rr),
          Qr = zr.test(rr),
          Wr = Zr.map((rr => "word" === rr.kind ? Tr(rr.text) : 1)),
          nr = Wr.findLastIndex((rr => rr > 0));
        for (const [hr, zr] of Zr.entries()) {
          const rr = "word" === zr.kind,
            Zr = Wr[hr];
          zr.delayMs = Xr;
          for (let Wr = 0; Nr && Wr < Zr; Wr++) {
            const {
              intonation: ar
            } = Nr;
            let jr = nr > 0 ? -ar.declineSemitones * (hr / nr) : 0;
            jr += Br(`${vr(zr.text)}|${Wr}`) * ar.variationSemitones;
            const tr = Math.min(1, ar.variationSemitones);
            let Yr = Nr.glideSemitones,
              er = 1;
            Qr && (jr += ar.exclaimLiftSemitones, er *= Ir), Sr && hr === nr && (jr += ar.questionRiseSemitones * (Zr > 1 ? .5 + .5 * Wr / (Zr - 1) : 1), Wr === Zr - 1 && (Yr = Math.abs(Yr) + ar.questionRiseSemitones / 2)), rr && Or(zr.text) && (jr += Er * tr, er *= fr), Zr > 1 && 0 === Wr && (jr += xr * tr, er *= pr), lr.push({
              atMs: Xr + Wr * Ur,
              semitones: jr,
              glideSemitones: Yr,
              durationMs: Wr < Zr - 1 ? Math.min(Nr.durationMs, Ur * mr) : Nr.durationMs,
              level: er
            })
          }
          Xr += Zr * Ur + (tr.test(zr.text) ? jr : Yr.test(zr.text) ? ar : 0)
        }
      }
      return {
        pieces: nr.map((rr => "space" === rr.kind ? rr : "icon" === rr.kind ? {
          kind: "icon",
          icon: rr.text,
          delayMs: rr.delayMs
        } : {
          kind: "word",
          text: rr.text,
          delayMs: rr.delayMs
        })),
        blips: lr
      }
    }
    var lr = Qr(1251),
      Xr = Qr(1304),
      Pr = Qr(2093);

    function Hr(rr) {
      if ("string" === typeof rr) return rr;
      const Sr = Xr.f.get().getCurrentLanguageCode();
      return (0, lr.s)(Sr, rr.translationKey, (0, lr.p)(rr.params, Pr.b.shown))
    }

    function qr(rr) {
      const Sr = void 0 === rr.voice ? null : (0, Zr.p)(rr.voice),
        Qr = Sr && (0, Zr.n)(Sr);
      return {
        plan: Lr(Hr(rr.line), Qr),
        synth: Qr
      }
    }

    function Rr(rr) {
      const Sr = [];
      let Qr = [];
      for (const [Wr, ar] of rr.entries()) {
        var Zr;
        "space" === ar.kind && (" " !== ar.text || "icon" !== (null === (Zr = rr[Wr + 1]) || void 0 === Zr ? void 0 : Zr.kind)) ? (Qr.length > 0 && Sr.push(Qr), Sr.push([ar]), Qr = []) : Qr.push(ar)
      }
      return Qr.length > 0 && Sr.push(Qr), Sr
    }
  },
  40033: (rr, Sr, Qr) => {
    function Zr(rr, Sr, Qr) {
      const Zr = new Set,
        Wr = new ResizeObserver(Qr),
        ar = () => {
          const Sr = new Set(document.querySelectorAll(rr));
          let ar = !1;
          for (const rr of Zr) Sr.has(rr) || (Wr.unobserve(rr), Zr.delete(rr), ar = !0);
          for (const rr of Sr) Zr.has(rr) || (Wr.observe(rr), jr.observe(rr, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), Zr.add(rr));
          ar && Qr()
        },
        jr = new MutationObserver((Sr => {
          Sr.some((rr => "attributes" === rr.type)) && Qr(), Sr.some((Sr => function(rr, Sr, Qr) {
            if ("childList" !== rr.type) return !1;
            for (const Zr of rr.addedNodes)
              if (Zr instanceof Element && (Zr.matches(Sr) || Zr.querySelector(Sr))) return !0;
            for (const Zr of rr.removedNodes)
              if (Zr instanceof Element)
                for (const rr of Qr)
                  if (Zr.contains(rr)) return !0;
            return !1
          }(Sr, rr, Zr))) && ar()
        }));
      jr.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const Ir of Sr) Wr.observe(Ir);
      return window.addEventListener("resize", Qr), ar(), Qr(), () => {
        Wr.disconnect(), jr.disconnect(), window.removeEventListener("resize", Qr)
      }
    }
    Qr.d(Sr, {
      b: () => Zr
    })
  },
  1e4: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Ir,
      f: () => fr
    });
    var Zr = Qr(26),
      Wr = Qr(1422),
      ar = Qr(109);
    const jr = {
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

    function Ir() {
      return (0, ar.isMobile)() && "function" === typeof navigator.vibrate
    }
    const fr = new class {
      constructor(rr) {
        this.deps = rr, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(rr, Sr) {
        var Qr;
        if (!this.deps.enabled()) return;
        const Zr = jr[rr],
          Wr = null !== Sr && void 0 !== Sr ? Sr : Zr.pattern;
        if (null === Wr) return void console.warn("No vibration pattern for", rr);
        const ar = this.deps.now();
        ar - this.lastAnyAt < 40 && Zr.priority < this.playingPriority || ar - (null !== (Qr = this.lastAt.get(rr)) && void 0 !== Qr ? Qr : -1 / 0) < Zr.minGapMs || ar < this.playingUntil && Zr.priority < this.playingPriority || (this.lastAt.set(rr, ar), this.lastAnyAt = ar, this.playingUntil = ar + Wr.reduce(((rr, Sr) => rr + Sr), 0), this.playingPriority = Zr.priority, this.deps.vibrate(Wr))
      }
    }({
      vibrate: rr => {
        navigator.vibrate([...rr])
      },
      now: () => performance.now(),
      enabled: () => Ir() && Zr.c.get("isTouchScreen") && Zr.c.get("clientEscMenuOptions").vibration && !(0, Wr.e)()
    })
  },
  5667: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Wr,
      h: () => Zr,
      l: () => ar,
      n: () => fr,
      p: () => jr
    });
    const Zr = ["sine", "triangle", "square", "sawtooth"],
      Wr = 55,
      ar = {
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

    function jr(rr) {
      return "string" !== typeof rr ? rr : Object.hasOwn(ar, rr) ? ar[rr] : null
    }

    function Ir(rr, Sr, Qr) {
      return Math.min(Qr, Math.max(Sr, rr))
    }

    function fr(rr) {
      const Sr = Ir(rr.durationMs, 10, 500),
        Qr = Ir(rr.attackMs, 0, Sr),
        {
          intonation: Wr
        } = rr;
      return {
        waveform: Zr.includes(rr.waveform) ? rr.waveform : "sine",
        pitchHz: Ir(rr.pitchHz, 20, 4e3),
        glideSemitones: Ir(rr.glideSemitones, -24, 24),
        durationMs: Sr,
        attackMs: Qr,
        releaseMs: Ir(rr.releaseMs, 0, Sr - Qr),
        lowpassHz: null === rr.lowpassHz ? null : Ir(rr.lowpassHz, 20, 2e4),
        volume: Ir(rr.volume, 0, 2),
        intonation: {
          variationSemitones: Ir(Wr.variationSemitones, 0, 6),
          declineSemitones: Ir(Wr.declineSemitones, 0, 12),
          questionRiseSemitones: Ir(Wr.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: Ir(Wr.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: Ir(rr.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);