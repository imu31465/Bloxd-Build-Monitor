export const id = 31;
export const ids = [31];
export const modules = {
  5609: (dd, Od, md) => {
    md.d(Od, {
      e: () => yd,
      f: () => bd
    });
    var Wd = md(1155),
      Fd = md.n(Wd),
      Rd = md(66),
      Xd = md(1238),
      Kd = md(5616),
      hd = md(2060),
      vd = md(3403),
      Qd = md(5620),
      td = md(1341);
    const od = new WeakMap;
    let Nd = 0;

    function qd(dd) {
      let Od = od.get(dd);
      return void 0 === Od && (Od = Nd++, od.set(dd, Od)), Od
    }

    function Hd(dd) {
      let {
        piece: Od
      } = dd;
      return "space" === Od.kind ? (0, td.jsx)(td.Fragment, {
        children: Od.text
      }) : (0, td.jsx)("span", {
        className: "DialogueWord",
        style: {
          "--word-delay": `${Od.delayMs}ms`
        },
        children: (0, td.jsx)(Kd.c, {
          text: "icon" === Od.kind ? `[[${Od.icon}]]` : Od.text
        })
      })
    }

    function yd(dd) {
      let {
        display: Od
      } = dd;
      const {
        selectedLanguage: md
      } = (0, Xd.G)(), Wd = (0, Rd.useMemo)((() => (0, Qd.c)((0, Qd.e)(Od).plan.pieces)), [Od, md.code]);
      return (0, td.jsxs)("div", {
        className: Fd()("Dialogue", {
          DialogueAnimateIn: !1 !== Od.animateIn
        }),
        children: [Od.speakerName && (0, td.jsx)(hd.d, {
          text: Od.speakerName,
          className: "DialogueSpeaker"
        }), (0, td.jsx)("p", {
          className: "DialogueLine",
          children: Wd.map(((dd, Od) => 1 === dd.length && "space" === dd[0].kind ? dd[0].text : (0, td.jsx)("span", {
            className: "DialogueGlue",
            children: dd.map(((dd, Od) => (0, td.jsx)(Hd, {
              piece: dd
            }, Od)))
          }, Od)))
        })]
      })
    }
    const bd = (0, Rd.memo)((function() {
      const dd = (0, vd.j)("dialogue");
      return (0, td.jsx)("div", {
        className: "DialogueAnchor",
        "data-camera-keeper": "",
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: dd && (0, td.jsx)(yd, {
          display: dd
        }, qd(dd))
      })
    }))
  },
  5616: (dd, Od, md) => {
    md.d(Od, {
      c: () => Kd
    });
    var Wd = md(66),
      Fd = md(387),
      Rd = md(2079),
      Xd = md(1341);

    function Kd(dd) {
      let {
        text: Od
      } = dd;
      const md = [];
      let Kd = "";
      return (0, Fd.dc)(Od).forEach(((dd, Od) => {
        if ("string" === typeof dd || !(0, Rd.f)(dd.icon)) return void(Kd += "string" === typeof dd ? dd : dd.icon);
        const Fd = Math.max(0, Kd.trimEnd().search(/\S{1,12}$/));
        md.push((0, Xd.jsxs)(Wd.Fragment, {
          children: [Kd.slice(0, Fd), (0, Xd.jsxs)("span", {
            className: "InlineIconTextGlue",
            children: [Kd.slice(Fd), (0, Xd.jsx)("span", {
              className: "InlineIconTextIcon",
              role: "img",
              "aria-label": dd.icon,
              children: (0, Xd.jsx)(Rd.c, {
                itemName: dd.icon,
                amount: 0
              })
            })]
          })]
        }, Od)), Kd = ""
      })), md.push(Kd), (0, Xd.jsx)(Xd.Fragment, {
        children: md
      })
    }
  },
  5620: (dd, Od, md) => {
    md.d(Od, {
      c: () => rd,
      e: () => Ad
    });
    var Wd = md(5623),
      Fd = md(387);
    const Rd = 120,
      Xd = 260,
      Kd = 1.15,
      hd = 1.2,
      vd = 2,
      Qd = 1.08,
      td = .8,
      od = .95,
      Nd = 8,
      qd = "[\"')\\]\u300d\u300f\uff09]*",
      Hd = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${qd}$`),
      yd = new RegExp(`[?\uff1f]${qd}$`),
      bd = new RegExp(`[!\uff01]${qd}$`),
      Td = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      pd = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      Yd = new RegExp(`[${pd}]`),
      gd = new RegExp(`[${pd}]|[^${pd}]+`, "g"),
      wd = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function Ed(dd) {
      let Od = 2166136261;
      for (let md = 0; md < dd.length; md++) Od ^= dd.charCodeAt(md), Od = Math.imul(Od, 16777619);
      return (Od >>> 0) / 4294967295 * 2 - 1
    }

    function Jd(dd) {
      var Od;
      if (Yd.test(dd)) return 1;
      const md = dd.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        Wd = md.replace(/[^0-9]/g, "");
      if (Wd.length > 0 && !/\p{L}/u.test(md)) return Math.min(Wd.length, 4);
      const Fd = null !== (Od = md.match(wd)) && void 0 !== Od ? Od : [];
      if (0 === Fd.length) {
        var Rd, Xd;
        const dd = null !== (Rd = null === (Xd = md.match(/\p{L}/gu)) || void 0 === Xd ? void 0 : Xd.length) && void 0 !== Rd ? Rd : 0;
        return 0 === dd ? 0 : Math.min(Math.max(1, Math.round(dd / 2.5)), Nd)
      }
      const Kd = md.replace(/[^\p{L}]/gu, ""),
        hd = Fd.length > 1 && "e" === Fd.at(-1) && Kd.endsWith("e") && !Kd.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(dd.replace(/[^\p{L}]/gu, ""));
      return Math.min(Fd.length - (hd ? 1 : 0), Nd)
    }

    function Ud(dd) {
      return dd.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function xd(dd) {
      const Od = dd.replace(/[^\p{L}]/gu, "");
      return Od.length >= 2 && Od === Od.toUpperCase() && Od !== Od.toLowerCase()
    }

    function Bd(dd, Od) {
      var md;
      const Nd = Od && (0, Wd.k)(Od),
        qd = null !== (md = null === Nd || void 0 === Nd ? void 0 : Nd.syllableMs) && void 0 !== md ? md : Wd.d,
        pd = function(dd) {
          const Od = [];
          for (const Wd of (0, Fd.dc)(dd))
            if ("string" === typeof Wd)
              for (const dd of Wd.split(/(\s+)/)) {
                if ("" === dd) continue;
                if (/^\s+$/.test(dd)) {
                  Od.push({
                    kind: "space",
                    text: dd
                  });
                  continue
                }
                if (!Yd.test(dd)) {
                  Od.push({
                    kind: "word",
                    text: dd,
                    delayMs: 0
                  });
                  continue
                }
                let Wd = !0;
                for (const Fd of null !== (md = dd.match(gd)) && void 0 !== md ? md : []) {
                  var md;
                  const dd = Od.at(-1);
                  Wd || "word" !== (null === dd || void 0 === dd ? void 0 : dd.kind) || Yd.test(Fd) || /[\p{L}\p{N}]/u.test(Fd) ? (Wd || Od.push({
                    kind: "space",
                    text: "\u200b"
                  }), Od.push({
                    kind: "word",
                    text: Fd,
                    delayMs: 0
                  }), Wd = !1) : dd.text += Fd
                }
              } else Od.push({
                kind: "icon",
                text: Wd.icon,
                delayMs: 0
              });
          return Od
        }(dd),
        wd = [];
      let Bd = [];
      for (const Wd of pd) "space" !== Wd.kind && (Bd.push(Wd), Hd.test(Wd.text) && (wd.push(Bd), Bd = []));
      wd.push(Bd);
      const Sd = [];
      let sd = 0;
      for (const Wd of wd) {
        var ud, Vd;
        const dd = null !== (ud = null === (Vd = Wd.at(-1)) || void 0 === Vd ? void 0 : Vd.text) && void 0 !== ud ? ud : "",
          Od = yd.test(dd),
          md = bd.test(dd),
          Fd = Wd.map((dd => "word" === dd.kind ? Jd(dd.text) : 1)),
          pd = Fd.findLastIndex((dd => dd > 0));
        for (const [yd, bd] of Wd.entries()) {
          const dd = "word" === bd.kind,
            Wd = Fd[yd];
          bd.delayMs = sd;
          for (let Fd = 0; Nd && Fd < Wd; Fd++) {
            const {
              intonation: Rd
            } = Nd;
            let Xd = pd > 0 ? -Rd.declineSemitones * (yd / pd) : 0;
            Xd += Ed(`${Ud(bd.text)}|${Fd}`) * Rd.variationSemitones;
            const Hd = Math.min(1, Rd.variationSemitones);
            let Td = Nd.glideSemitones,
              Yd = 1;
            md && (Xd += Rd.exclaimLiftSemitones, Yd *= Kd), Od && yd === pd && (Xd += Rd.questionRiseSemitones * (Wd > 1 ? .5 + .5 * Fd / (Wd - 1) : 1), Fd === Wd - 1 && (Td = Math.abs(Td) + Rd.questionRiseSemitones / 2)), dd && xd(bd.text) && (Xd += vd * Hd, Yd *= hd), Wd > 1 && 0 === Fd && (Xd += td * Hd, Yd *= Qd), Sd.push({
              atMs: sd + Fd * qd,
              semitones: Xd,
              glideSemitones: Td,
              durationMs: Fd < Wd - 1 ? Math.min(Nd.durationMs, qd * od) : Nd.durationMs,
              level: Yd
            })
          }
          sd += Wd * qd + (Hd.test(bd.text) ? Xd : Td.test(bd.text) ? Rd : 0)
        }
      }
      return {
        pieces: pd.map((dd => "space" === dd.kind ? dd : "icon" === dd.kind ? {
          kind: "icon",
          icon: dd.text,
          delayMs: dd.delayMs
        } : {
          kind: "word",
          text: dd.text,
          delayMs: dd.delayMs
        })),
        blips: Sd
      }
    }
    var Sd = md(1238),
      sd = md(1306),
      ud = md(2094);

    function Vd(dd) {
      if ("string" === typeof dd) return dd;
      const Od = sd.f.get().getCurrentLanguageCode();
      return (0, Sd.u)(Od, dd.translationKey, (0, Sd.s)(dd.params, ud.c.shown))
    }

    function Ad(dd) {
      const Od = void 0 === dd.voice ? null : (0, Wd.l)(dd.voice),
        md = Od && (0, Wd.k)(Od);
      return {
        plan: Bd(Vd(dd.line), md),
        synth: md
      }
    }

    function rd(dd) {
      const Od = [];
      let md = [];
      for (const [Fd, Rd] of dd.entries()) {
        var Wd;
        "space" === Rd.kind && (" " !== Rd.text || "icon" !== (null === (Wd = dd[Fd + 1]) || void 0 === Wd ? void 0 : Wd.kind)) ? (md.length > 0 && Od.push(md), Od.push([Rd]), md = []) : md.push(Rd)
      }
      return md.length > 0 && Od.push(md), Od
    }
  },
  40057: (dd, Od, md) => {
    function Wd(dd, Od, md) {
      const Wd = new Set,
        Fd = new ResizeObserver(md),
        Rd = () => {
          const Od = new Set(document.querySelectorAll(dd));
          let Rd = !1;
          for (const dd of Wd) Od.has(dd) || (Fd.unobserve(dd), Wd.delete(dd), Rd = !0);
          for (const dd of Od) Wd.has(dd) || (Fd.observe(dd), Xd.observe(dd, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), Wd.add(dd));
          Rd && md()
        },
        Xd = new MutationObserver((Od => {
          Od.some((dd => "attributes" === dd.type)) && md(), Od.some((Od => function(dd, Od, md) {
            if ("childList" !== dd.type) return !1;
            for (const Wd of dd.addedNodes)
              if (Wd instanceof Element && (Wd.matches(Od) || Wd.querySelector(Od))) return !0;
            for (const Wd of dd.removedNodes)
              if (Wd instanceof Element)
                for (const dd of md)
                  if (Wd.contains(dd)) return !0;
            return !1
          }(Od, dd, Wd))) && Rd()
        }));
      Xd.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const Kd of Od) Fd.observe(Kd);
      return window.addEventListener("resize", md), Rd(), md(), () => {
        Fd.disconnect(), Xd.disconnect(), window.removeEventListener("resize", md)
      }
    }
    md.d(Od, {
      b: () => Wd
    })
  },
  10023: (dd, Od, md) => {
    md.d(Od, {
      e: () => Kd,
      i: () => hd
    });
    var Wd = md(29),
      Fd = md(1415),
      Rd = md(107);
    const Xd = {
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

    function Kd() {
      return (0, Rd.isMobile)() && "function" === typeof navigator.vibrate
    }
    const hd = new class {
      constructor(dd) {
        this.deps = dd, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(dd, Od) {
        var md;
        if (!this.deps.enabled()) return;
        const Wd = Xd[dd],
          Fd = null !== Od && void 0 !== Od ? Od : Wd.pattern;
        if (null === Fd) return void console.warn("No vibration pattern for", dd);
        const Rd = this.deps.now();
        Rd - this.lastAnyAt < 40 && Wd.priority < this.playingPriority || Rd - (null !== (md = this.lastAt.get(dd)) && void 0 !== md ? md : -1 / 0) < Wd.minGapMs || Rd < this.playingUntil && Wd.priority < this.playingPriority || (this.lastAt.set(dd, Rd), this.lastAnyAt = Rd, this.playingUntil = Rd + Fd.reduce(((dd, Od) => dd + Od), 0), this.playingPriority = Wd.priority, this.deps.vibrate(Fd))
      }
    }({
      vibrate: dd => {
        navigator.vibrate([...dd])
      },
      now: () => performance.now(),
      enabled: () => Kd() && Wd.e.get("isTouchScreen") && Wd.e.get("clientEscMenuOptions").vibration && !(0, Fd.c)()
    })
  },
  5623: (dd, Od, md) => {
    md.d(Od, {
      d: () => Fd,
      h: () => Wd,
      j: () => Rd,
      k: () => hd,
      l: () => Xd
    });
    const Wd = ["sine", "triangle", "square", "sawtooth"],
      Fd = 55,
      Rd = {
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

    function Xd(dd) {
      return "string" !== typeof dd ? dd : Object.hasOwn(Rd, dd) ? Rd[dd] : null
    }

    function Kd(dd, Od, md) {
      return Math.min(md, Math.max(Od, dd))
    }

    function hd(dd) {
      const Od = Kd(dd.durationMs, 10, 500),
        md = Kd(dd.attackMs, 0, Od),
        {
          intonation: Fd
        } = dd;
      return {
        waveform: Wd.includes(dd.waveform) ? dd.waveform : "sine",
        pitchHz: Kd(dd.pitchHz, 20, 4e3),
        glideSemitones: Kd(dd.glideSemitones, -24, 24),
        durationMs: Od,
        attackMs: md,
        releaseMs: Kd(dd.releaseMs, 0, Od - md),
        lowpassHz: null === dd.lowpassHz ? null : Kd(dd.lowpassHz, 20, 2e4),
        volume: Kd(dd.volume, 0, 2),
        intonation: {
          variationSemitones: Kd(Fd.variationSemitones, 0, 6),
          declineSemitones: Kd(Fd.declineSemitones, 0, 12),
          questionRiseSemitones: Kd(Fd.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: Kd(Fd.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: Kd(dd.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);