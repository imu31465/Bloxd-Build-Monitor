export const id = 25;
export const ids = [25];
export const modules = {
  36613: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => FB,
      h: () => NB,
      l: () => zB,
      n: () => hB
    });
    var TB = ZB(34184),
      JB = ZB(36619),
      oB = ZB(36625),
      GB = ZB(8840),
      vB = ZB(1507),
      kB = ZB(63),
      cB = ZB(82),
      nB = ZB(1153);

    function hB() {
      var BB;
      return (0, vB.h)(JB.d, (0, JB.q)()), (0, nB.jsx)(nB.Fragment, {
        children: null === (BB = (0, JB.q)()) || void 0 === BB ? void 0 : BB.content
      })
    }

    function zB(BB) {
      var IB;
      let {
        show: ZB
      } = BB;
      (0, vB.h)(JB.d, (0, JB.q)());
      const cB = null === (IB = (0, JB.q)()) || void 0 === IB ? void 0 : IB.menu;
      return (0, kB.useEffect)((() => {
        var BB;
        ZB || (null === cB || void 0 === cB || null === (BB = cB.onClose) || void 0 === BB || BB.call(cB), (0, oB.p)())
      }), [ZB, cB]), (0, kB.useEffect)((() => ZB ? (0, GB.g)(oB.t, oB.c) : void 0), [ZB]), (0, nB.jsx)(TB.e, {
        showing: ZB,
        globallyUniqueKey: "clientGameMenu",
        children: null === cB || void 0 === cB ? void 0 : cB.content
      })
    }

    function FB(BB) {
      let {
        placement: IB = "bottom"
      } = BB;
      return (0, nB.jsx)("div", {
        id: `clientGameHud-${IB}`,
        style: {
          display: "contents"
        }
      })
    }

    function NB(BB) {
      let {
        children: IB,
        placement: ZB = "bottom"
      } = BB;
      const [TB, JB] = (0, kB.useState)(null);
      return (0, kB.useEffect)((() => {
        JB(document.getElementById(`clientGameHud-${ZB}`))
      }), [ZB]), TB ? (0, cB.createPortal)(IB, TB) : null
    }
  },
  5001: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => qB,
      d: () => yB
    });
    var TB = ZB(1091),
      JB = ZB.n(TB),
      oB = ZB(63),
      GB = ZB(1248),
      vB = ZB(5007),
      kB = ZB(1960),
      cB = ZB(2526),
      nB = ZB(5011),
      hB = ZB(1153);
    const zB = new WeakMap;
    let FB = 0;

    function NB(BB) {
      let IB = zB.get(BB);
      return void 0 === IB && (IB = FB++, zB.set(BB, IB)), IB
    }

    function gB(BB) {
      let {
        piece: IB
      } = BB;
      return "space" === IB.kind ? (0, hB.jsx)(hB.Fragment, {
        children: IB.text
      }) : (0, hB.jsx)("span", {
        className: "DialogueWord",
        style: {
          "--word-delay": `${IB.delayMs}ms`
        },
        children: (0, hB.jsx)(vB.c, {
          text: "icon" === IB.kind ? `[[${IB.icon}]]` : IB.text
        })
      })
    }

    function qB(BB) {
      let {
        display: IB
      } = BB;
      const {
        selectedLanguage: ZB
      } = (0, GB.G)(), TB = (0, oB.useMemo)((() => (0, nB.b)((0, nB.c)(IB).plan.pieces)), [IB, ZB.code]);
      return (0, hB.jsxs)("div", {
        className: JB()("Dialogue", {
          DialogueAnimateIn: !1 !== IB.animateIn
        }),
        children: [IB.speakerName && (0, hB.jsx)(kB.e, {
          text: IB.speakerName,
          className: "DialogueSpeaker"
        }), (0, hB.jsx)("p", {
          className: "DialogueLine",
          children: TB.map(((BB, IB) => 1 === BB.length && "space" === BB[0].kind ? BB[0].text : (0, hB.jsx)("span", {
            className: "DialogueGlue",
            children: BB.map(((BB, IB) => (0, hB.jsx)(gB, {
              piece: BB
            }, IB)))
          }, IB)))
        })]
      })
    }
    const yB = (0, oB.memo)((function() {
      const BB = (0, cB.d)("dialogue");
      return (0, hB.jsx)("div", {
        className: "DialogueAnchor",
        "data-camera-keeper": "",
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: BB && (0, hB.jsx)(qB, {
          display: BB
        }, NB(BB))
      })
    }))
  },
  5007: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => vB
    });
    var TB = ZB(63),
      JB = ZB(342),
      oB = ZB(1979),
      GB = ZB(1153);

    function vB(BB) {
      let {
        text: IB
      } = BB;
      const ZB = [];
      let vB = "";
      return (0, JB.rc)(IB).forEach(((BB, IB) => {
        if ("string" === typeof BB || !(0, oB.g)(BB.icon)) return void(vB += "string" === typeof BB ? BB : BB.icon);
        const JB = Math.max(0, vB.trimEnd().search(/\S{1,12}$/));
        ZB.push((0, GB.jsxs)(TB.Fragment, {
          children: [vB.slice(0, JB), (0, GB.jsxs)("span", {
            className: "InlineIconTextGlue",
            children: [vB.slice(JB), (0, GB.jsx)("span", {
              className: "InlineIconTextIcon",
              role: "img",
              "aria-label": BB.icon,
              children: (0, GB.jsx)(oB.e, {
                itemName: BB.icon,
                amount: 0
              })
            })]
          })]
        }, IB)), vB = ""
      })), ZB.push(vB), (0, GB.jsx)(GB.Fragment, {
        children: ZB
      })
    }
  },
  34184: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => oB
    });
    var TB = ZB(4721),
      JB = ZB(4728);

    function oB(BB) {
      let {
        children: IB,
        showing: ZB,
        globallyUniqueKey: oB,
        alwaysMountChildren: GB = !1,
        doGameplayStartStopOnShow: vB = !0,
        keepsMovement: kB = !1
      } = BB;
      return (0, JB.e)(!0, ZB, oB, kB), (0, TB.e)(vB, ZB), ZB || GB ? IB : null
    }
  },
  5011: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => PB,
      c: () => jB
    });
    var TB = ZB(5016),
      JB = ZB(342);
    const oB = 120,
      GB = 260,
      vB = 1.15,
      kB = 1.2,
      cB = 2,
      nB = 1.08,
      hB = .8,
      zB = .95,
      FB = 8,
      NB = "[\"')\\]\u300d\u300f\uff09]*",
      gB = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${NB}$`),
      qB = new RegExp(`[?\uff1f]${NB}$`),
      yB = new RegExp(`[!\uff01]${NB}$`),
      UB = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      WB = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      dB = new RegExp(`[${WB}]`),
      CB = new RegExp(`[${WB}]|[^${WB}]+`, "g"),
      QB = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function sB(BB) {
      let IB = 2166136261;
      for (let ZB = 0; ZB < BB.length; ZB++) IB ^= BB.charCodeAt(ZB), IB = Math.imul(IB, 16777619);
      return (IB >>> 0) / 4294967295 * 2 - 1
    }

    function wB(BB) {
      var IB;
      if (dB.test(BB)) return 1;
      const ZB = BB.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        TB = ZB.replace(/[^0-9]/g, "");
      if (TB.length > 0 && !/\p{L}/u.test(ZB)) return Math.min(TB.length, 4);
      const JB = null !== (IB = ZB.match(QB)) && void 0 !== IB ? IB : [];
      if (0 === JB.length) {
        var oB, GB;
        const BB = null !== (oB = null === (GB = ZB.match(/\p{L}/gu)) || void 0 === GB ? void 0 : GB.length) && void 0 !== oB ? oB : 0;
        return 0 === BB ? 0 : Math.min(Math.max(1, Math.round(BB / 2.5)), FB)
      }
      const vB = ZB.replace(/[^\p{L}]/gu, ""),
        kB = JB.length > 1 && "e" === JB.at(-1) && vB.endsWith("e") && !vB.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(BB.replace(/[^\p{L}]/gu, ""));
      return Math.min(JB.length - (kB ? 1 : 0), FB)
    }

    function OB(BB) {
      return BB.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function YB(BB) {
      const IB = BB.replace(/[^\p{L}]/gu, "");
      return IB.length >= 2 && IB === IB.toUpperCase() && IB !== IB.toLowerCase()
    }

    function iB(BB, IB) {
      var ZB;
      const FB = IB && (0, TB.j)(IB),
        NB = null !== (ZB = null === FB || void 0 === FB ? void 0 : FB.syllableMs) && void 0 !== ZB ? ZB : TB.c,
        WB = function(BB) {
          const IB = [];
          for (const TB of (0, JB.rc)(BB))
            if ("string" === typeof TB)
              for (const BB of TB.split(/(\s+)/)) {
                if ("" === BB) continue;
                if (/^\s+$/.test(BB)) {
                  IB.push({
                    kind: "space",
                    text: BB
                  });
                  continue
                }
                if (!dB.test(BB)) {
                  IB.push({
                    kind: "word",
                    text: BB,
                    delayMs: 0
                  });
                  continue
                }
                let TB = !0;
                for (const JB of null !== (ZB = BB.match(CB)) && void 0 !== ZB ? ZB : []) {
                  var ZB;
                  const BB = IB.at(-1);
                  TB || "word" !== (null === BB || void 0 === BB ? void 0 : BB.kind) || dB.test(JB) || /[\p{L}\p{N}]/u.test(JB) ? (TB || IB.push({
                    kind: "space",
                    text: "\u200b"
                  }), IB.push({
                    kind: "word",
                    text: JB,
                    delayMs: 0
                  }), TB = !1) : BB.text += JB
                }
              } else IB.push({
                kind: "icon",
                text: TB.icon,
                delayMs: 0
              });
          return IB
        }(BB),
        QB = [];
      let iB = [];
      for (const TB of WB) "space" !== TB.kind && (iB.push(TB), gB.test(TB.text) && (QB.push(iB), iB = []));
      QB.push(iB);
      const pB = [];
      let aB = 0;
      for (const TB of QB) {
        var HB, MB;
        const BB = null !== (HB = null === (MB = TB.at(-1)) || void 0 === MB ? void 0 : MB.text) && void 0 !== HB ? HB : "",
          IB = qB.test(BB),
          ZB = yB.test(BB),
          JB = TB.map((BB => "word" === BB.kind ? wB(BB.text) : 1)),
          WB = JB.findLastIndex((BB => BB > 0));
        for (const [qB, yB] of TB.entries()) {
          const BB = "word" === yB.kind,
            TB = JB[qB];
          yB.delayMs = aB;
          for (let JB = 0; FB && JB < TB; JB++) {
            const {
              intonation: oB
            } = FB;
            let GB = WB > 0 ? -oB.declineSemitones * (qB / WB) : 0;
            GB += sB(`${OB(yB.text)}|${JB}`) * oB.variationSemitones;
            const gB = Math.min(1, oB.variationSemitones);
            let UB = FB.glideSemitones,
              dB = 1;
            ZB && (GB += oB.exclaimLiftSemitones, dB *= vB), IB && qB === WB && (GB += oB.questionRiseSemitones * (TB > 1 ? .5 + .5 * JB / (TB - 1) : 1), JB === TB - 1 && (UB = Math.abs(UB) + oB.questionRiseSemitones / 2)), BB && YB(yB.text) && (GB += cB * gB, dB *= kB), TB > 1 && 0 === JB && (GB += hB * gB, dB *= nB), pB.push({
              atMs: aB + JB * NB,
              semitones: GB,
              glideSemitones: UB,
              durationMs: JB < TB - 1 ? Math.min(FB.durationMs, NB * zB) : FB.durationMs,
              level: dB
            })
          }
          aB += TB * NB + (gB.test(yB.text) ? GB : UB.test(yB.text) ? oB : 0)
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
        blips: pB
      }
    }
    var pB = ZB(1248),
      aB = ZB(1310),
      HB = ZB(2003);

    function MB(BB) {
      if ("string" === typeof BB) return BB;
      const IB = aB.h.get().getCurrentLanguageCode();
      return (0, pB.w)(IB, BB.translationKey, (0, pB.s)(BB.params, HB.b.shown))
    }

    function jB(BB) {
      const IB = void 0 === BB.voice ? null : (0, TB.k)(BB.voice),
        ZB = IB && (0, TB.j)(IB);
      return {
        plan: iB(MB(BB.line), ZB),
        synth: ZB
      }
    }

    function PB(BB) {
      const IB = [];
      let ZB = [];
      for (const [JB, oB] of BB.entries()) {
        var TB;
        "space" === oB.kind && (" " !== oB.text || "icon" !== (null === (TB = BB[JB + 1]) || void 0 === TB ? void 0 : TB.kind)) ? (ZB.length > 0 && IB.push(ZB), IB.push([oB]), ZB = []) : ZB.push(oB)
      }
      return ZB.length > 0 && IB.push(ZB), IB
    }
  },
  8840: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => oB,
      g: () => JB
    });
    let TB = null;
    const JB = function(BB) {
        const IB = {
          cycle: BB,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return TB = IB, () => {
          TB === IB && (TB = null)
        }
      },
      oB = () => {
        var BB;
        return null !== (BB = TB) && void 0 !== BB && BB.canCycle() ? TB.cycle : null
      }
  },
  36625: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => oB,
      c: () => gB,
      g: () => qB,
      h: () => vB,
      l: () => zB,
      p: () => yB,
      q: () => hB,
      s: () => WB,
      t: () => NB,
      w: () => UB
    });
    var TB = ZB(20),
      JB = ZB(24);
    const oB = "clientGameInventoryButtonsChanged",
      GB = new Map;

    function vB() {
      return [...GB.values()].sort(((BB, IB) => {
        var ZB, TB;
        return (null !== (ZB = BB.order) && void 0 !== ZB ? ZB : 0) - (null !== (TB = IB.order) && void 0 !== TB ? TB : 0)
      }))
    }
    let kB = null;

    function cB(BB) {
      kB = BB
    }
    let nB = !1;

    function hB(BB) {
      nB = !0;
      try {
        BB.onClick()
      } finally {
        nB = !1
      }
      BB.panel && "clientGame" === TB.d.get("openInGameMenuName") && cB(BB.id)
    }

    function zB() {
      return nB
    }

    function FB() {
      return vB().filter((BB => BB.panel && !BB.disabled))
    }

    function NB(BB) {
      const IB = FB(),
        ZB = IB.findIndex((BB => BB.id === kB));
      return !(ZB < 0 || IB.length < 2) && (hB(IB[(ZB + BB + IB.length) % IB.length]), !0)
    }

    function gB() {
      return null !== kB && FB().length > 1
    }

    function qB() {
      cB(null)
    }

    function yB() {
      "inventory" !== TB.d.get("openInGameMenuName") && cB(null)
    }

    function UB() {
      const BB = kB;
      return cB(null), BB
    }

    function WB(BB) {
      return GB.set(BB.id, BB), JB.l.Gq(oB, vB(), !0), () => {
        GB.get(BB.id) === BB && (GB.delete(BB.id), JB.l.Gq(oB, vB()))
      }
    }
  },
  36619: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => vB,
      f: () => qB,
      i: () => yB,
      m: () => zB,
      q: () => cB,
      t: () => gB,
      v: () => FB,
      x: () => nB
    });
    var TB = ZB(20),
      JB = ZB(24),
      oB = ZB(1353),
      GB = ZB(36625);
    const vB = "clientGameUiChanged";
    let kB = null;

    function cB() {
      return kB
    }

    function nB(BB, IB) {
      const ZB = {
        content: BB,
        menu: IB
      };
      return kB = ZB, JB.l.Gq(vB, kB, !0), () => {
        kB === ZB && (kB = null, NB = !1, qB(), JB.l.Gq(vB, null))
      }
    }
    let hB = null;

    function zB() {
      return hB
    }

    function FB(BB) {
      return hB = BB, () => {
        hB === BB && (hB = null)
      }
    }
    let NB = !1;

    function gB() {
      const BB = TB.d.get("openInGameMenuName");
      "clientGame" !== BB && (NB = "inventory" === BB), (0, GB.l)() || (0, GB.g)(), (0, oB.t)(oB.e), TB.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function qB() {
      UB(!1)
    }

    function yB() {
      UB(NB)
    }

    function UB(BB) {
      "clientGame" === TB.d.get("openInGameMenuName") && TB.d.set({
        openInGameMenuName: BB ? "inventory" : null
      }), BB || (0, GB.g)(), NB = !1
    }
  },
  38557: (BB, IB, ZB) => {
    function TB(BB, IB, ZB) {
      const TB = new Set,
        JB = new ResizeObserver(ZB),
        oB = () => {
          const IB = new Set(document.querySelectorAll(BB));
          let oB = !1;
          for (const BB of TB) IB.has(BB) || (JB.unobserve(BB), TB.delete(BB), oB = !0);
          for (const BB of IB) TB.has(BB) || (JB.observe(BB), GB.observe(BB, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), TB.add(BB));
          oB && ZB()
        },
        GB = new MutationObserver((IB => {
          IB.some((BB => "attributes" === BB.type)) && ZB(), IB.some((IB => function(BB, IB, ZB) {
            if ("childList" !== BB.type) return !1;
            for (const TB of BB.addedNodes)
              if (TB instanceof Element && (TB.matches(IB) || TB.querySelector(IB))) return !0;
            for (const TB of BB.removedNodes)
              if (TB instanceof Element)
                for (const BB of ZB)
                  if (TB.contains(BB)) return !0;
            return !1
          }(IB, BB, TB))) && oB()
        }));
      GB.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const vB of IB) JB.observe(vB);
      return window.addEventListener("resize", ZB), oB(), ZB(), () => {
        JB.disconnect(), GB.disconnect(), window.removeEventListener("resize", ZB)
      }
    }
    ZB.d(IB, {
      e: () => TB
    })
  },
  8985: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => vB,
      d: () => kB
    });
    var TB = ZB(20),
      JB = ZB(1382),
      oB = ZB(105);
    const GB = {
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

    function vB() {
      return (0, oB.isMobile)() && "function" === typeof navigator.vibrate
    }
    const kB = new class {
      constructor(BB) {
        this.deps = BB, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(BB, IB) {
        var ZB;
        if (!this.deps.enabled()) return;
        const TB = GB[BB],
          JB = null !== IB && void 0 !== IB ? IB : TB.pattern;
        if (null === JB) return void console.warn("No vibration pattern for", BB);
        const oB = this.deps.now();
        oB - this.lastAnyAt < 40 && TB.priority < this.playingPriority || oB - (null !== (ZB = this.lastAt.get(BB)) && void 0 !== ZB ? ZB : -1 / 0) < TB.minGapMs || oB < this.playingUntil && TB.priority < this.playingPriority || (this.lastAt.set(BB, oB), this.lastAnyAt = oB, this.playingUntil = oB + JB.reduce(((BB, IB) => BB + IB), 0), this.playingPriority = TB.priority, this.deps.vibrate(JB))
      }
    }({
      vibrate: BB => {
        navigator.vibrate([...BB])
      },
      now: () => performance.now(),
      enabled: () => vB() && TB.d.get("isTouchScreen") && TB.d.get("clientEscMenuOptions").vibration && !(0, JB.e)()
    })
  },
  5016: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => JB,
      f: () => TB,
      i: () => oB,
      j: () => kB,
      k: () => GB
    });
    const TB = ["sine", "triangle", "square", "sawtooth"],
      JB = 55,
      oB = {
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

    function GB(BB) {
      return "string" !== typeof BB ? BB : Object.hasOwn(oB, BB) ? oB[BB] : null
    }

    function vB(BB, IB, ZB) {
      return Math.min(ZB, Math.max(IB, BB))
    }

    function kB(BB) {
      const IB = vB(BB.durationMs, 10, 500),
        ZB = vB(BB.attackMs, 0, IB),
        {
          intonation: JB
        } = BB;
      return {
        waveform: TB.includes(BB.waveform) ? BB.waveform : "sine",
        pitchHz: vB(BB.pitchHz, 20, 4e3),
        glideSemitones: vB(BB.glideSemitones, -24, 24),
        durationMs: IB,
        attackMs: ZB,
        releaseMs: vB(BB.releaseMs, 0, IB - ZB),
        lowpassHz: null === BB.lowpassHz ? null : vB(BB.lowpassHz, 20, 2e4),
        volume: vB(BB.volume, 0, 2),
        intonation: {
          variationSemitones: vB(JB.variationSemitones, 0, 6),
          declineSemitones: vB(JB.declineSemitones, 0, 12),
          questionRiseSemitones: vB(JB.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: vB(JB.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: vB(BB.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);