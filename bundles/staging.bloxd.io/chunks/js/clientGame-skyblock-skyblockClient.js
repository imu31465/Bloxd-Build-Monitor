export const id = 30;
export const ids = [30];
export const modules = {
  5311: (ee, ie, He) => {
    He.d(ie, {
      d: () => pe,
      e: () => Xe
    });
    var ye = He(1053),
      be = He.n(ye),
      Me = He(59),
      Ke = He(1127),
      Ue = He(5317),
      Fe = He(1956),
      Je = He(2532),
      oe = He(5319),
      Re = He(1228);
    const ke = new WeakMap;
    let qe = 0;

    function fe(ee) {
      let ie = ke.get(ee);
      return void 0 === ie && (ie = qe++, ke.set(ee, ie)), ie
    }

    function Te(ee) {
      let {
        piece: ie
      } = ee;
      return "space" === ie.kind ? (0, Re.jsx)(Re.Fragment, {
        children: ie.text
      }) : (0, Re.jsx)("span", {
        className: "DialogueWord",
        style: {
          "--word-delay": `${ie.delayMs}ms`
        },
        children: (0, Re.jsx)(Ue.c, {
          text: "icon" === ie.kind ? `[[${ie.icon}]]` : ie.text
        })
      })
    }

    function pe(ee) {
      let {
        display: ie
      } = ee;
      const {
        selectedLanguage: He
      } = (0, Ke.v)(), ye = (0, Me.useMemo)((() => (0, oe.e)((0, oe.g)(ie).plan.pieces)), [ie, He.code]);
      return (0, Re.jsxs)("div", {
        className: be()("Dialogue", {
          DialogueAnimateIn: !1 !== ie.animateIn
        }),
        children: [ie.speakerName && (0, Re.jsx)(Fe.e, {
          text: ie.speakerName,
          className: "DialogueSpeaker"
        }), (0, Re.jsx)("p", {
          className: "DialogueLine",
          children: ye.map(((ee, ie) => 1 === ee.length && "space" === ee[0].kind ? ee[0].text : (0, Re.jsx)("span", {
            className: "DialogueGlue",
            children: ee.map(((ee, ie) => (0, Re.jsx)(Te, {
              piece: ee
            }, ie)))
          }, ie)))
        })]
      })
    }
    const Xe = (0, Me.memo)((function() {
      const ee = (0, Je.i)("dialogue");
      return (0, Re.jsx)("div", {
        className: "DialogueAnchor",
        "data-camera-keeper": "",
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: ee && (0, Re.jsx)(pe, {
          display: ee
        }, fe(ee))
      })
    }))
  },
  5317: (ee, ie, He) => {
    He.d(ie, {
      c: () => Ue
    });
    var ye = He(59),
      be = He(335),
      Me = He(1970),
      Ke = He(1228);

    function Ue(ee) {
      let {
        text: ie
      } = ee;
      const He = [];
      let Ue = "";
      return (0, be.kc)(ie).forEach(((ee, ie) => {
        if ("string" === typeof ee || !(0, Me.e)(ee.icon)) return void(Ue += "string" === typeof ee ? ee : ee.icon);
        const be = Math.max(0, Ue.trimEnd().search(/\S{1,12}$/));
        He.push((0, Ke.jsxs)(ye.Fragment, {
          children: [Ue.slice(0, be), (0, Ke.jsxs)("span", {
            className: "InlineIconTextGlue",
            children: [Ue.slice(be), (0, Ke.jsx)("span", {
              className: "InlineIconTextIcon",
              role: "img",
              "aria-label": ee.icon,
              children: (0, Ke.jsx)(Me.c, {
                itemName: ee.icon,
                amount: 0
              })
            })]
          })]
        }, ie)), Ue = ""
      })), He.push(Ue), (0, Ke.jsx)(Ke.Fragment, {
        children: He
      })
    }
  },
  34867: (ee, ie, He) => {
    He.d(ie, {
      e: () => Me
    });
    var ye = He(4931),
      be = He(4937);

    function Me(ee) {
      let {
        children: ie,
        showing: He,
        globallyUniqueKey: Me,
        alwaysMountChildren: Ke = !1,
        doGameplayStartStopOnShow: Ue = !0,
        keepsMovement: Fe = !1
      } = ee;
      return (0, be.e)(!0, He, Me, Fe), (0, ye.c)(Ue, He), He || Ke ? ie : null
    }
  },
  5319: (ee, ie, He) => {
    He.d(ie, {
      e: () => ae,
      g: () => Ve
    });
    var ye = He(5326),
      be = He(335);
    const Me = 120,
      Ke = 260,
      Ue = 1.15,
      Fe = 1.2,
      Je = 2,
      oe = 1.08,
      Re = .8,
      ke = .95,
      qe = 8,
      fe = "[\"')\\]\u300d\u300f\uff09]*",
      Te = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${fe}$`),
      pe = new RegExp(`[?\uff1f]${fe}$`),
      Xe = new RegExp(`[!\uff01]${fe}$`),
      ze = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      Be = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      Ee = new RegExp(`[${Be}]`),
      ge = new RegExp(`[${Be}]|[^${Be}]+`, "g"),
      Oe = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function de(ee) {
      let ie = 2166136261;
      for (let He = 0; He < ee.length; He++) ie ^= ee.charCodeAt(He), ie = Math.imul(ie, 16777619);
      return (ie >>> 0) / 4294967295 * 2 - 1
    }

    function We(ee) {
      var ie;
      if (Ee.test(ee)) return 1;
      const He = ee.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        ye = He.replace(/[^0-9]/g, "");
      if (ye.length > 0 && !/\p{L}/u.test(He)) return Math.min(ye.length, 4);
      const be = null !== (ie = He.match(Oe)) && void 0 !== ie ? ie : [];
      if (0 === be.length) {
        var Me, Ke;
        const ee = null !== (Me = null === (Ke = He.match(/\p{L}/gu)) || void 0 === Ke ? void 0 : Ke.length) && void 0 !== Me ? Me : 0;
        return 0 === ee ? 0 : Math.min(Math.max(1, Math.round(ee / 2.5)), qe)
      }
      const Ue = He.replace(/[^\p{L}]/gu, ""),
        Fe = be.length > 1 && "e" === be.at(-1) && Ue.endsWith("e") && !Ue.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(ee.replace(/[^\p{L}]/gu, ""));
      return Math.min(be.length - (Fe ? 1 : 0), qe)
    }

    function te(ee) {
      return ee.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function Ze(ee) {
      const ie = ee.replace(/[^\p{L}]/gu, "");
      return ie.length >= 2 && ie === ie.toUpperCase() && ie !== ie.toLowerCase()
    }

    function we(ee, ie) {
      var He;
      const qe = ie && (0, ye.l)(ie),
        fe = null !== (He = null === qe || void 0 === qe ? void 0 : qe.syllableMs) && void 0 !== He ? He : ye.d,
        Be = function(ee) {
          const ie = [];
          for (const ye of (0, be.kc)(ee))
            if ("string" === typeof ye)
              for (const ee of ye.split(/(\s+)/)) {
                if ("" === ee) continue;
                if (/^\s+$/.test(ee)) {
                  ie.push({
                    kind: "space",
                    text: ee
                  });
                  continue
                }
                if (!Ee.test(ee)) {
                  ie.push({
                    kind: "word",
                    text: ee,
                    delayMs: 0
                  });
                  continue
                }
                let ye = !0;
                for (const be of null !== (He = ee.match(ge)) && void 0 !== He ? He : []) {
                  var He;
                  const ee = ie.at(-1);
                  ye || "word" !== (null === ee || void 0 === ee ? void 0 : ee.kind) || Ee.test(be) || /[\p{L}\p{N}]/u.test(be) ? (ye || ie.push({
                    kind: "space",
                    text: "\u200b"
                  }), ie.push({
                    kind: "word",
                    text: be,
                    delayMs: 0
                  }), ye = !1) : ee.text += be
                }
              } else ie.push({
                kind: "icon",
                text: ye.icon,
                delayMs: 0
              });
          return ie
        }(ee),
        Oe = [];
      let we = [];
      for (const ye of Be) "space" !== ye.kind && (we.push(ye), Te.test(ye.text) && (Oe.push(we), we = []));
      Oe.push(we);
      const De = [];
      let Pe = 0;
      for (const ye of Oe) {
        var Ae, Ye;
        const ee = null !== (Ae = null === (Ye = ye.at(-1)) || void 0 === Ye ? void 0 : Ye.text) && void 0 !== Ae ? Ae : "",
          ie = pe.test(ee),
          He = Xe.test(ee),
          be = ye.map((ee => "word" === ee.kind ? We(ee.text) : 1)),
          Be = be.findLastIndex((ee => ee > 0));
        for (const [pe, Xe] of ye.entries()) {
          const ee = "word" === Xe.kind,
            ye = be[pe];
          Xe.delayMs = Pe;
          for (let be = 0; qe && be < ye; be++) {
            const {
              intonation: Me
            } = qe;
            let Ke = Be > 0 ? -Me.declineSemitones * (pe / Be) : 0;
            Ke += de(`${te(Xe.text)}|${be}`) * Me.variationSemitones;
            const Te = Math.min(1, Me.variationSemitones);
            let ze = qe.glideSemitones,
              Ee = 1;
            He && (Ke += Me.exclaimLiftSemitones, Ee *= Ue), ie && pe === Be && (Ke += Me.questionRiseSemitones * (ye > 1 ? .5 + .5 * be / (ye - 1) : 1), be === ye - 1 && (ze = Math.abs(ze) + Me.questionRiseSemitones / 2)), ee && Ze(Xe.text) && (Ke += Je * Te, Ee *= Fe), ye > 1 && 0 === be && (Ke += Re * Te, Ee *= oe), De.push({
              atMs: Pe + be * fe,
              semitones: Ke,
              glideSemitones: ze,
              durationMs: be < ye - 1 ? Math.min(qe.durationMs, fe * ke) : qe.durationMs,
              level: Ee
            })
          }
          Pe += ye * fe + (Te.test(Xe.text) ? Ke : ze.test(Xe.text) ? Me : 0)
        }
      }
      return {
        pieces: Be.map((ee => "space" === ee.kind ? ee : "icon" === ee.kind ? {
          kind: "icon",
          icon: ee.text,
          delayMs: ee.delayMs
        } : {
          kind: "word",
          text: ee.text,
          delayMs: ee.delayMs
        })),
        blips: De
      }
    }
    var De = He(1127),
      Pe = He(1196),
      Ae = He(1988);

    function Ye(ee) {
      if ("string" === typeof ee) return ee;
      const ie = Pe.f.get().getCurrentLanguageCode();
      return (0, De.o)(ie, ee.translationKey, (0, De.m)(ee.params, Ae.c.shown))
    }

    function Ve(ee) {
      const ie = void 0 === ee.voice ? null : (0, ye.n)(ee.voice),
        He = ie && (0, ye.l)(ie);
      return {
        plan: we(Ye(ee.line), He),
        synth: He
      }
    }

    function ae(ee) {
      const ie = [];
      let He = [];
      for (const [be, Me] of ee.entries()) {
        var ye;
        "space" === Me.kind && (" " !== Me.text || "icon" !== (null === (ye = ee[be + 1]) || void 0 === ye ? void 0 : ye.kind)) ? (He.length > 0 && ie.push(He), ie.push([Me]), He = []) : He.push(Me)
      }
      return He.length > 0 && ie.push(He), ie
    }
  },
  39309: (ee, ie, He) => {
    function ye(ee, ie, He) {
      const ye = new Set,
        be = new ResizeObserver(He),
        Me = () => {
          const ie = new Set(document.querySelectorAll(ee));
          let Me = !1;
          for (const ee of ye) ie.has(ee) || (be.unobserve(ee), ye.delete(ee), Me = !0);
          for (const ee of ie) ye.has(ee) || (be.observe(ee), Ke.observe(ee, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), ye.add(ee));
          Me && He()
        },
        Ke = new MutationObserver((ie => {
          ie.some((ee => "attributes" === ee.type)) && He(), ie.some((ie => function(ee, ie, He) {
            if ("childList" !== ee.type) return !1;
            for (const ye of ee.addedNodes)
              if (ye instanceof Element && (ye.matches(ie) || ye.querySelector(ie))) return !0;
            for (const ye of ee.removedNodes)
              if (ye instanceof Element)
                for (const ee of He)
                  if (ye.contains(ee)) return !0;
            return !1
          }(ie, ee, ye))) && Me()
        }));
      Ke.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const Ue of ie) be.observe(Ue);
      return window.addEventListener("resize", He), Me(), He(), () => {
        be.disconnect(), Ke.disconnect(), window.removeEventListener("resize", He)
      }
    }
    He.d(ie, {
      b: () => ye
    })
  },
  9609: (ee, ie, He) => {
    He.d(ie, {
      d: () => Ue,
      h: () => Fe
    });
    var ye = He(18),
      be = He(1305),
      Me = He(97);
    const Ke = {
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

    function Ue() {
      return (0, Me.isMobile)() && "function" === typeof navigator.vibrate
    }
    const Fe = new class {
      constructor(ee) {
        this.deps = ee, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(ee, ie) {
        var He;
        if (!this.deps.enabled()) return;
        const ye = Ke[ee],
          be = null !== ie && void 0 !== ie ? ie : ye.pattern;
        if (null === be) return void console.warn("No vibration pattern for", ee);
        const Me = this.deps.now();
        Me - this.lastAnyAt < 40 && ye.priority < this.playingPriority || Me - (null !== (He = this.lastAt.get(ee)) && void 0 !== He ? He : -1 / 0) < ye.minGapMs || Me < this.playingUntil && ye.priority < this.playingPriority || (this.lastAt.set(ee, Me), this.lastAnyAt = Me, this.playingUntil = Me + be.reduce(((ee, ie) => ee + ie), 0), this.playingPriority = ye.priority, this.deps.vibrate(be))
      }
    }({
      vibrate: ee => {
        navigator.vibrate([...ee])
      },
      now: () => performance.now(),
      enabled: () => Ue() && ye.e.get("isTouchScreen") && ye.e.get("clientEscMenuOptions").vibration && !(0, be.g)()
    })
  },
  5326: (ee, ie, He) => {
    He.d(ie, {
      d: () => be,
      h: () => ye,
      k: () => Me,
      l: () => Fe,
      n: () => Ke
    });
    const ye = ["sine", "triangle", "square", "sawtooth"],
      be = 55,
      Me = {
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

    function Ke(ee) {
      return "string" !== typeof ee ? ee : Object.hasOwn(Me, ee) ? Me[ee] : null
    }

    function Ue(ee, ie, He) {
      return Math.min(He, Math.max(ie, ee))
    }

    function Fe(ee) {
      const ie = Ue(ee.durationMs, 10, 500),
        He = Ue(ee.attackMs, 0, ie),
        {
          intonation: be
        } = ee;
      return {
        waveform: ye.includes(ee.waveform) ? ee.waveform : "sine",
        pitchHz: Ue(ee.pitchHz, 20, 4e3),
        glideSemitones: Ue(ee.glideSemitones, -24, 24),
        durationMs: ie,
        attackMs: He,
        releaseMs: Ue(ee.releaseMs, 0, ie - He),
        lowpassHz: null === ee.lowpassHz ? null : Ue(ee.lowpassHz, 20, 2e4),
        volume: Ue(ee.volume, 0, 2),
        intonation: {
          variationSemitones: Ue(be.variationSemitones, 0, 6),
          declineSemitones: Ue(be.declineSemitones, 0, 12),
          questionRiseSemitones: Ue(be.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: Ue(be.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: Ue(ee.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);