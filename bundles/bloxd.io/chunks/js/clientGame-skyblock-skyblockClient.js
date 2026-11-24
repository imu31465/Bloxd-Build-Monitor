export const id = 25;
export const ids = [25];
export const modules = {
  36677: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => sB,
      e: () => JB,
      g: () => rB,
      h: () => pB
    });
    var QB = zB(34242),
      nB = zB(36682),
      dB = zB(36687),
      IB = zB(8722),
      NB = zB(1471),
      uB = zB(62),
      UB = zB(83),
      aB = zB(1148);

    function pB() {
      var BB;
      return (0, NB.h)(nB.c, (0, nB.n)()), (0, aB.jsx)(aB.Fragment, {
        children: null === (BB = (0, nB.n)()) || void 0 === BB ? void 0 : BB.content
      })
    }

    function rB(BB) {
      var jB;
      let {
        show: zB
      } = BB;
      (0, NB.h)(nB.c, (0, nB.n)());
      const UB = null === (jB = (0, nB.n)()) || void 0 === jB ? void 0 : jB.menu;
      return (0, uB.useEffect)((() => {
        var BB;
        zB || (null === UB || void 0 === UB || null === (BB = UB.onClose) || void 0 === BB || BB.call(UB), (0, dB.n)())
      }), [zB, UB]), (0, uB.useEffect)((() => zB ? (0, IB.f)(dB.w, dB.f) : void 0), [zB]), (0, aB.jsx)(QB.b, {
        showing: zB,
        globallyUniqueKey: "clientGameMenu",
        children: null === UB || void 0 === UB ? void 0 : UB.content
      })
    }

    function sB(BB) {
      let {
        placement: jB = "bottom"
      } = BB;
      return (0, aB.jsx)("div", {
        id: `clientGameHud-${jB}`,
        style: {
          display: "contents"
        }
      })
    }

    function JB(BB) {
      let {
        children: jB,
        placement: zB = "bottom"
      } = BB;
      const [QB, nB] = (0, uB.useState)(null);
      return (0, uB.useEffect)((() => {
        nB(document.getElementById(`clientGameHud-${zB}`))
      }), [zB]), QB ? (0, UB.createPortal)(jB, QB) : null
    }
  },
  4925: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => yB,
      f: () => kB
    });
    var QB = zB(1091),
      nB = zB.n(QB),
      dB = zB(62),
      IB = zB(1240),
      NB = zB(4928),
      uB = zB(1952),
      UB = zB(2516),
      aB = zB(4932),
      pB = zB(1148);
    const rB = new WeakMap;
    let sB = 0;

    function JB(BB) {
      let jB = rB.get(BB);
      return void 0 === jB && (jB = sB++, rB.set(BB, jB)), jB
    }

    function mB(BB) {
      let {
        piece: jB
      } = BB;
      return "space" === jB.kind ? (0, pB.jsx)(pB.Fragment, {
        children: jB.text
      }) : (0, pB.jsx)("span", {
        className: "DialogueWord",
        style: {
          "--word-delay": `${jB.delayMs}ms`
        },
        children: (0, pB.jsx)(NB.e, {
          text: "icon" === jB.kind ? `[[${jB.icon}]]` : jB.text
        })
      })
    }

    function yB(BB) {
      let {
        display: jB
      } = BB;
      const {
        selectedLanguage: zB
      } = (0, IB.D)(), QB = (0, dB.useMemo)((() => (0, aB.e)((0, aB.g)(jB).plan.pieces)), [jB, zB.code]);
      return (0, pB.jsxs)("div", {
        className: nB()("Dialogue", {
          DialogueAnimateIn: !1 !== jB.animateIn
        }),
        children: [jB.speakerName && (0, pB.jsx)(uB.e, {
          text: jB.speakerName,
          className: "DialogueSpeaker"
        }), (0, pB.jsx)("p", {
          className: "DialogueLine",
          children: QB.map(((BB, jB) => 1 === BB.length && "space" === BB[0].kind ? BB[0].text : (0, pB.jsx)("span", {
            className: "DialogueGlue",
            children: BB.map(((BB, jB) => (0, pB.jsx)(mB, {
              piece: BB
            }, jB)))
          }, jB)))
        })]
      })
    }
    const kB = (0, dB.memo)((function() {
      const BB = (0, UB.i)("dialogue");
      return (0, pB.jsx)("div", {
        className: "DialogueAnchor",
        "data-camera-keeper": "",
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: BB && (0, pB.jsx)(yB, {
          display: BB
        }, JB(BB))
      })
    }))
  },
  4928: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => NB
    });
    var QB = zB(62),
      nB = zB(363),
      dB = zB(1971),
      IB = zB(1148);

    function NB(BB) {
      let {
        text: jB
      } = BB;
      const zB = [];
      let NB = "";
      return (0, nB.Rb)(jB).forEach(((BB, jB) => {
        if ("string" === typeof BB || !(0, dB.d)(BB.icon)) return void(NB += "string" === typeof BB ? BB : BB.icon);
        const nB = Math.max(0, NB.trimEnd().search(/\S{1,12}$/));
        zB.push((0, IB.jsxs)(QB.Fragment, {
          children: [NB.slice(0, nB), (0, IB.jsxs)("span", {
            className: "InlineIconTextGlue",
            children: [NB.slice(nB), (0, IB.jsx)("span", {
              className: "InlineIconTextIcon",
              role: "img",
              "aria-label": BB.icon,
              children: (0, IB.jsx)(dB.c, {
                itemName: BB.icon,
                amount: 0
              })
            })]
          })]
        }, jB)), NB = ""
      })), zB.push(NB), (0, IB.jsx)(IB.Fragment, {
        children: zB
      })
    }
  },
  34242: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => dB
    });
    var QB = zB(4657),
      nB = zB(4664);

    function dB(BB) {
      let {
        children: jB,
        showing: zB,
        globallyUniqueKey: dB,
        alwaysMountChildren: IB = !1,
        doGameplayStartStopOnShow: NB = !0,
        keepsMovement: uB = !1
      } = BB;
      return (0, nB.c)(!0, zB, dB, uB), (0, QB.d)(NB, zB), zB || IB ? jB : null
    }
  },
  4932: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => VB,
      g: () => YB
    });
    var QB = zB(4939),
      nB = zB(363);
    const dB = 120,
      IB = 260,
      NB = 1.15,
      uB = 1.2,
      UB = 2,
      aB = 1.08,
      pB = .8,
      rB = .95,
      sB = 8,
      JB = "[\"')\\]\u300d\u300f\uff09]*",
      mB = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${JB}$`),
      yB = new RegExp(`[?\uff1f]${JB}$`),
      kB = new RegExp(`[!\uff01]${JB}$`),
      GB = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      LB = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      gB = new RegExp(`[${LB}]`),
      tB = new RegExp(`[${LB}]|[^${LB}]+`, "g"),
      SB = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function MB(BB) {
      let jB = 2166136261;
      for (let zB = 0; zB < BB.length; zB++) jB ^= BB.charCodeAt(zB), jB = Math.imul(jB, 16777619);
      return (jB >>> 0) / 4294967295 * 2 - 1
    }

    function EB(BB) {
      var jB;
      if (gB.test(BB)) return 1;
      const zB = BB.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        QB = zB.replace(/[^0-9]/g, "");
      if (QB.length > 0 && !/\p{L}/u.test(zB)) return Math.min(QB.length, 4);
      const nB = null !== (jB = zB.match(SB)) && void 0 !== jB ? jB : [];
      if (0 === nB.length) {
        var dB, IB;
        const BB = null !== (dB = null === (IB = zB.match(/\p{L}/gu)) || void 0 === IB ? void 0 : IB.length) && void 0 !== dB ? dB : 0;
        return 0 === BB ? 0 : Math.min(Math.max(1, Math.round(BB / 2.5)), sB)
      }
      const NB = zB.replace(/[^\p{L}]/gu, ""),
        uB = nB.length > 1 && "e" === nB.at(-1) && NB.endsWith("e") && !NB.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(BB.replace(/[^\p{L}]/gu, ""));
      return Math.min(nB.length - (uB ? 1 : 0), sB)
    }

    function iB(BB) {
      return BB.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function qB(BB) {
      const jB = BB.replace(/[^\p{L}]/gu, "");
      return jB.length >= 2 && jB === jB.toUpperCase() && jB !== jB.toLowerCase()
    }

    function fB(BB, jB) {
      var zB;
      const sB = jB && (0, QB.i)(jB),
        JB = null !== (zB = null === sB || void 0 === sB ? void 0 : sB.syllableMs) && void 0 !== zB ? zB : QB.d,
        LB = function(BB) {
          const jB = [];
          for (const QB of (0, nB.Rb)(BB))
            if ("string" === typeof QB)
              for (const BB of QB.split(/(\s+)/)) {
                if ("" === BB) continue;
                if (/^\s+$/.test(BB)) {
                  jB.push({
                    kind: "space",
                    text: BB
                  });
                  continue
                }
                if (!gB.test(BB)) {
                  jB.push({
                    kind: "word",
                    text: BB,
                    delayMs: 0
                  });
                  continue
                }
                let QB = !0;
                for (const nB of null !== (zB = BB.match(tB)) && void 0 !== zB ? zB : []) {
                  var zB;
                  const BB = jB.at(-1);
                  QB || "word" !== (null === BB || void 0 === BB ? void 0 : BB.kind) || gB.test(nB) || /[\p{L}\p{N}]/u.test(nB) ? (QB || jB.push({
                    kind: "space",
                    text: "\u200b"
                  }), jB.push({
                    kind: "word",
                    text: nB,
                    delayMs: 0
                  }), QB = !1) : BB.text += nB
                }
              } else jB.push({
                kind: "icon",
                text: QB.icon,
                delayMs: 0
              });
          return jB
        }(BB),
        SB = [];
      let fB = [];
      for (const QB of LB) "space" !== QB.kind && (fB.push(QB), mB.test(QB.text) && (SB.push(fB), fB = []));
      SB.push(fB);
      const oB = [];
      let HB = 0;
      for (const QB of SB) {
        var DB, FB;
        const BB = null !== (DB = null === (FB = QB.at(-1)) || void 0 === FB ? void 0 : FB.text) && void 0 !== DB ? DB : "",
          jB = yB.test(BB),
          zB = kB.test(BB),
          nB = QB.map((BB => "word" === BB.kind ? EB(BB.text) : 1)),
          LB = nB.findLastIndex((BB => BB > 0));
        for (const [yB, kB] of QB.entries()) {
          const BB = "word" === kB.kind,
            QB = nB[yB];
          kB.delayMs = HB;
          for (let nB = 0; sB && nB < QB; nB++) {
            const {
              intonation: dB
            } = sB;
            let IB = LB > 0 ? -dB.declineSemitones * (yB / LB) : 0;
            IB += MB(`${iB(kB.text)}|${nB}`) * dB.variationSemitones;
            const mB = Math.min(1, dB.variationSemitones);
            let GB = sB.glideSemitones,
              gB = 1;
            zB && (IB += dB.exclaimLiftSemitones, gB *= NB), jB && yB === LB && (IB += dB.questionRiseSemitones * (QB > 1 ? .5 + .5 * nB / (QB - 1) : 1), nB === QB - 1 && (GB = Math.abs(GB) + dB.questionRiseSemitones / 2)), BB && qB(kB.text) && (IB += UB * mB, gB *= uB), QB > 1 && 0 === nB && (IB += pB * mB, gB *= aB), oB.push({
              atMs: HB + nB * JB,
              semitones: IB,
              glideSemitones: GB,
              durationMs: nB < QB - 1 ? Math.min(sB.durationMs, JB * rB) : sB.durationMs,
              level: gB
            })
          }
          HB += QB * JB + (mB.test(kB.text) ? IB : GB.test(kB.text) ? dB : 0)
        }
      }
      return {
        pieces: LB.map((BB => "space" === BB.kind ? BB : "icon" === BB.kind ? {
          kind: "icon",
          icon: BB.text,
          delayMs: BB.delayMs
        } : {
          kind: "word",
          text: BB.text,
          delayMs: BB.delayMs
        })),
        blips: oB
      }
    }
    var oB = zB(1240),
      HB = zB(1284),
      DB = zB(1991);

    function FB(BB) {
      if ("string" === typeof BB) return BB;
      const jB = HB.c.get().getCurrentLanguageCode();
      return (0, oB.t)(jB, BB.translationKey, (0, oB.p)(BB.params, DB.b.shown))
    }

    function YB(BB) {
      const jB = void 0 === BB.voice ? null : (0, QB.k)(BB.voice),
        zB = jB && (0, QB.i)(jB);
      return {
        plan: fB(FB(BB.line), zB),
        synth: zB
      }
    }

    function VB(BB) {
      const jB = [];
      let zB = [];
      for (const [nB, dB] of BB.entries()) {
        var QB;
        "space" === dB.kind && (" " !== dB.text || "icon" !== (null === (QB = BB[nB + 1]) || void 0 === QB ? void 0 : QB.kind)) ? (zB.length > 0 && jB.push(zB), jB.push([dB]), zB = []) : zB.push(dB)
      }
      return zB.length > 0 && jB.push(zB), jB
    }
  },
  8722: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => dB,
      f: () => nB
    });
    let QB = null;
    const nB = function(BB) {
        const jB = {
          cycle: BB,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return QB = jB, () => {
          QB === jB && (QB = null)
        }
      },
      dB = () => {
        var BB;
        return null !== (BB = QB) && void 0 !== BB && BB.canCycle() ? QB.cycle : null
      }
  },
  36687: (BB, jB, zB) => {
    zB.d(jB, {
      A: () => GB,
      e: () => dB,
      f: () => mB,
      i: () => yB,
      l: () => NB,
      m: () => rB,
      n: () => kB,
      r: () => pB,
      t: () => LB,
      w: () => JB
    });
    var QB = zB(28),
      nB = zB(31);
    const dB = "clientGameInventoryButtonsChanged",
      IB = new Map;

    function NB() {
      return [...IB.values()].sort(((BB, jB) => {
        var zB, QB;
        return (null !== (zB = BB.order) && void 0 !== zB ? zB : 0) - (null !== (QB = jB.order) && void 0 !== QB ? QB : 0)
      }))
    }
    let uB = null;

    function UB(BB) {
      uB = BB
    }
    let aB = !1;

    function pB(BB) {
      aB = !0;
      try {
        BB.onClick()
      } finally {
        aB = !1
      }
      BB.panel && "clientGame" === QB.c.get("openInGameMenuName") && UB(BB.id)
    }

    function rB() {
      return aB
    }

    function sB() {
      return NB().filter((BB => BB.panel && !BB.disabled))
    }

    function JB(BB) {
      const jB = sB(),
        zB = jB.findIndex((BB => BB.id === uB));
      return !(zB < 0 || jB.length < 2) && (pB(jB[(zB + BB + jB.length) % jB.length]), !0)
    }

    function mB() {
      return null !== uB && sB().length > 1
    }

    function yB() {
      UB(null)
    }

    function kB() {
      "inventory" !== QB.c.get("openInGameMenuName") && UB(null)
    }

    function GB() {
      const BB = uB;
      return UB(null), BB
    }

    function LB(BB) {
      return IB.set(BB.id, BB), nB.n.Ly(dB, NB(), !0), () => {
        IB.get(BB.id) === BB && (IB.delete(BB.id), nB.n.Ly(dB, NB()))
      }
    }
  },
  36682: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => NB,
      d: () => yB,
      f: () => kB,
      j: () => rB,
      n: () => UB,
      o: () => mB,
      r: () => sB,
      t: () => aB
    });
    var QB = zB(28),
      nB = zB(31),
      dB = zB(1316),
      IB = zB(36687);
    const NB = "clientGameUiChanged";
    let uB = null;

    function UB() {
      return uB
    }

    function aB(BB, jB) {
      const zB = {
        content: BB,
        menu: jB
      };
      return uB = zB, nB.n.Ly(NB, uB, !0), () => {
        uB === zB && (uB = null, JB = !1, yB(), nB.n.Ly(NB, null))
      }
    }
    let pB = null;

    function rB() {
      return pB
    }

    function sB(BB) {
      return pB = BB, () => {
        pB === BB && (pB = null)
      }
    }
    let JB = !1;

    function mB() {
      const BB = QB.c.get("openInGameMenuName");
      "clientGame" !== BB && (JB = "inventory" === BB), (0, IB.m)() || (0, IB.i)(), (0, dB.u)(dB.e), QB.c.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function yB() {
      GB(!1)
    }

    function kB() {
      GB(JB)
    }

    function GB(BB) {
      "clientGame" === QB.c.get("openInGameMenuName") && QB.c.set({
        openInGameMenuName: BB ? "inventory" : null
      }), BB || (0, IB.i)(), JB = !1
    }
  },
  38599: (BB, jB, zB) => {
    function QB(BB, jB, zB) {
      const QB = new Set,
        nB = new ResizeObserver(zB),
        dB = () => {
          const jB = new Set(document.querySelectorAll(BB));
          let dB = !1;
          for (const BB of QB) jB.has(BB) || (nB.unobserve(BB), QB.delete(BB), dB = !0);
          for (const BB of jB) QB.has(BB) || (nB.observe(BB), IB.observe(BB, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), QB.add(BB));
          dB && zB()
        },
        IB = new MutationObserver((jB => {
          jB.some((BB => "attributes" === BB.type)) && zB(), jB.some((jB => function(BB, jB, zB) {
            if ("childList" !== BB.type) return !1;
            for (const QB of BB.addedNodes)
              if (QB instanceof Element && (QB.matches(jB) || QB.querySelector(jB))) return !0;
            for (const QB of BB.removedNodes)
              if (QB instanceof Element)
                for (const BB of zB)
                  if (QB.contains(BB)) return !0;
            return !1
          }(jB, BB, QB))) && dB()
        }));
      IB.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const NB of jB) nB.observe(NB);
      return window.addEventListener("resize", zB), dB(), zB(), () => {
        nB.disconnect(), IB.disconnect(), window.removeEventListener("resize", zB)
      }
    }
    zB.d(jB, {
      b: () => QB
    })
  },
  8888: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => NB,
      h: () => uB
    });
    var QB = zB(28),
      nB = zB(1357),
      dB = zB(106);
    const IB = {
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

    function NB() {
      return (0, dB.isMobile)() && "function" === typeof navigator.vibrate
    }
    const uB = new class {
      constructor(BB) {
        this.deps = BB, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(BB, jB) {
        var zB;
        if (!this.deps.enabled()) return;
        const QB = IB[BB],
          nB = null !== jB && void 0 !== jB ? jB : QB.pattern;
        if (null === nB) return void console.warn("No vibration pattern for", BB);
        const dB = this.deps.now();
        dB - this.lastAnyAt < 40 && QB.priority < this.playingPriority || dB - (null !== (zB = this.lastAt.get(BB)) && void 0 !== zB ? zB : -1 / 0) < QB.minGapMs || dB < this.playingUntil && QB.priority < this.playingPriority || (this.lastAt.set(BB, dB), this.lastAnyAt = dB, this.playingUntil = dB + nB.reduce(((BB, jB) => BB + jB), 0), this.playingPriority = QB.priority, this.deps.vibrate(nB))
      }
    }({
      vibrate: BB => {
        navigator.vibrate([...BB])
      },
      now: () => performance.now(),
      enabled: () => NB() && QB.c.get("isTouchScreen") && QB.c.get("clientEscMenuOptions").vibration && !(0, nB.e)()
    })
  },
  4939: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => nB,
      e: () => QB,
      h: () => dB,
      i: () => uB,
      k: () => IB
    });
    const QB = ["sine", "triangle", "square", "sawtooth"],
      nB = 55,
      dB = {
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

    function IB(BB) {
      return "string" !== typeof BB ? BB : Object.hasOwn(dB, BB) ? dB[BB] : null
    }

    function NB(BB, jB, zB) {
      return Math.min(zB, Math.max(jB, BB))
    }

    function uB(BB) {
      const jB = NB(BB.durationMs, 10, 500),
        zB = NB(BB.attackMs, 0, jB),
        {
          intonation: nB
        } = BB;
      return {
        waveform: QB.includes(BB.waveform) ? BB.waveform : "sine",
        pitchHz: NB(BB.pitchHz, 20, 4e3),
        glideSemitones: NB(BB.glideSemitones, -24, 24),
        durationMs: jB,
        attackMs: zB,
        releaseMs: NB(BB.releaseMs, 0, jB - zB),
        lowpassHz: null === BB.lowpassHz ? null : NB(BB.lowpassHz, 20, 2e4),
        volume: NB(BB.volume, 0, 2),
        intonation: {
          variationSemitones: NB(nB.variationSemitones, 0, 6),
          declineSemitones: NB(nB.declineSemitones, 0, 12),
          questionRiseSemitones: NB(nB.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: NB(nB.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: NB(BB.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);