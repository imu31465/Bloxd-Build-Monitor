export const id = 25;
export const ids = [25];
export const modules = {
  35658: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => sJ,
      f: () => nJ,
      j: () => DJ,
      m: () => hJ
    });
    var FJ = ZJ(8557),
      UJ = ZJ(35661),
      eJ = ZJ(35665),
      XJ = ZJ(8068),
      AJ = ZJ(1326),
      qJ = ZJ(47),
      jJ = ZJ(60),
      YJ = ZJ(990);

    function hJ() {
      var JJ;
      return (0, AJ.m)(UJ.b, (0, UJ.m)()), (0, YJ.jsx)(YJ.Fragment, {
        children: null === (JJ = (0, UJ.m)()) || void 0 === JJ ? void 0 : JJ.content
      })
    }

    function DJ(JJ) {
      var cJ;
      let {
        show: ZJ
      } = JJ;
      (0, AJ.m)(UJ.b, (0, UJ.m)());
      const jJ = null === (cJ = (0, UJ.m)()) || void 0 === cJ ? void 0 : cJ.menu;
      return (0, qJ.useEffect)((() => {
        var JJ;
        ZJ || (null === jJ || void 0 === jJ || null === (JJ = jJ.onClose) || void 0 === JJ || JJ.call(jJ), (0, eJ.m)())
      }), [ZJ, jJ]), (0, qJ.useEffect)((() => ZJ ? (0, XJ.f)(eJ.v, eJ.c) : void 0), [ZJ]), (0, YJ.jsx)(FJ.c, {
        showing: ZJ,
        globallyUniqueKey: "clientGameMenu",
        children: null === jJ || void 0 === jJ ? void 0 : jJ.content
      })
    }

    function sJ(JJ) {
      let {
        placement: cJ = "bottom"
      } = JJ;
      return (0, YJ.jsx)("div", {
        id: `clientGameHud-${cJ}`,
        style: {
          display: "contents"
        }
      })
    }

    function nJ(JJ) {
      let {
        children: cJ,
        placement: ZJ = "bottom"
      } = JJ;
      const [FJ, UJ] = (0, qJ.useState)(null);
      return (0, qJ.useEffect)((() => {
        UJ(document.getElementById(`clientGameHud-${ZJ}`))
      }), [ZJ]), FJ ? (0, jJ.createPortal)(cJ, FJ) : null
    }
  },
  4225: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => fJ,
      d: () => xJ
    });
    var FJ = ZJ(926),
      UJ = ZJ.n(FJ),
      eJ = ZJ(47),
      XJ = ZJ(1086),
      AJ = ZJ(4233),
      qJ = ZJ(1675),
      jJ = ZJ(2175),
      YJ = ZJ(4242),
      hJ = ZJ(990);
    const DJ = new WeakMap;
    let sJ = 0;

    function nJ(JJ) {
      let cJ = DJ.get(JJ);
      return void 0 === cJ && (cJ = sJ++, DJ.set(JJ, cJ)), cJ
    }

    function GJ(JJ) {
      let {
        piece: cJ
      } = JJ;
      return "space" === cJ.kind ? (0, hJ.jsx)(hJ.Fragment, {
        children: cJ.text
      }) : (0, hJ.jsx)("span", {
        className: "DialogueWord",
        style: {
          "--word-delay": `${cJ.delayMs}ms`
        },
        children: (0, hJ.jsx)(AJ.c, {
          text: "icon" === cJ.kind ? `[[${cJ.icon}]]` : cJ.text
        })
      })
    }

    function fJ(JJ) {
      let {
        display: cJ
      } = JJ;
      const {
        selectedLanguage: ZJ
      } = (0, XJ.F)(), FJ = (0, eJ.useMemo)((() => (0, YJ.d)((0, YJ.f)(cJ).plan.pieces)), [cJ, ZJ.code]);
      return (0, hJ.jsxs)("div", {
        className: UJ()("Dialogue", {
          DialogueAnimateIn: !1 !== cJ.animateIn
        }),
        children: [cJ.speakerName && (0, hJ.jsx)(qJ.d, {
          text: cJ.speakerName,
          className: "DialogueSpeaker"
        }), (0, hJ.jsx)("p", {
          className: "DialogueLine",
          children: FJ.map(((JJ, cJ) => 1 === JJ.length && "space" === JJ[0].kind ? JJ[0].text : (0, hJ.jsx)("span", {
            className: "DialogueGlue",
            children: JJ.map(((JJ, cJ) => (0, hJ.jsx)(GJ, {
              piece: JJ
            }, cJ)))
          }, cJ)))
        })]
      })
    }
    const xJ = (0, eJ.memo)((function() {
      const JJ = (0, jJ.f)("dialogue");
      return (0, hJ.jsx)("div", {
        className: "DialogueAnchor",
        "data-camera-keeper": "",
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: JJ && (0, hJ.jsx)(fJ, {
          display: JJ
        }, nJ(JJ))
      })
    }))
  },
  4233: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => AJ
    });
    var FJ = ZJ(47),
      UJ = ZJ(227),
      eJ = ZJ(1688),
      XJ = ZJ(990);

    function AJ(JJ) {
      let {
        text: cJ
      } = JJ;
      const ZJ = [];
      let AJ = "";
      return (0, UJ.Sb)(cJ).forEach(((JJ, cJ) => {
        if ("string" === typeof JJ || !(0, eJ.e)(JJ.icon)) return void(AJ += "string" === typeof JJ ? JJ : JJ.icon);
        const UJ = Math.max(0, AJ.trimEnd().search(/\S{1,12}$/));
        ZJ.push((0, XJ.jsxs)(FJ.Fragment, {
          children: [AJ.slice(0, UJ), (0, XJ.jsxs)("span", {
            className: "InlineIconTextGlue",
            children: [AJ.slice(UJ), (0, XJ.jsx)("span", {
              className: "InlineIconTextIcon",
              role: "img",
              "aria-label": JJ.icon,
              children: (0, XJ.jsx)(eJ.d, {
                itemName: JJ.icon,
                amount: 0
              })
            })]
          })]
        }, cJ)), AJ = ""
      })), ZJ.push(AJ), (0, XJ.jsx)(XJ.Fragment, {
        children: ZJ
      })
    }
  },
  8557: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => eJ
    });
    var FJ = ZJ(3957),
      UJ = ZJ(3966);

    function eJ(JJ) {
      let {
        children: cJ,
        showing: ZJ,
        globallyUniqueKey: eJ,
        alwaysMountChildren: XJ = !1,
        doGameplayStartStopOnShow: AJ = !0,
        keepsMovement: qJ = !1
      } = JJ;
      return (0, UJ.c)(!0, ZJ, eJ, qJ), (0, FJ.c)(AJ, ZJ), ZJ || XJ ? cJ : null
    }
  },
  4242: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => HJ,
      f: () => gJ
    });
    var FJ = ZJ(4245),
      UJ = ZJ(227);
    const eJ = 120,
      XJ = 260,
      AJ = 1.15,
      qJ = 1.2,
      jJ = 2,
      YJ = 1.08,
      hJ = .8,
      DJ = .95,
      sJ = 8,
      nJ = "[\"')\\]\u300d\u300f\uff09]*",
      GJ = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${nJ}$`),
      fJ = new RegExp(`[?\uff1f]${nJ}$`),
      xJ = new RegExp(`[!\uff01]${nJ}$`),
      rJ = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      vJ = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      mJ = new RegExp(`[${vJ}]`),
      QJ = new RegExp(`[${vJ}]|[^${vJ}]+`, "g"),
      EJ = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function VJ(JJ) {
      let cJ = 2166136261;
      for (let ZJ = 0; ZJ < JJ.length; ZJ++) cJ ^= JJ.charCodeAt(ZJ), cJ = Math.imul(cJ, 16777619);
      return (cJ >>> 0) / 4294967295 * 2 - 1
    }

    function KJ(JJ) {
      var cJ;
      if (mJ.test(JJ)) return 1;
      const ZJ = JJ.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        FJ = ZJ.replace(/[^0-9]/g, "");
      if (FJ.length > 0 && !/\p{L}/u.test(ZJ)) return Math.min(FJ.length, 4);
      const UJ = null !== (cJ = ZJ.match(EJ)) && void 0 !== cJ ? cJ : [];
      if (0 === UJ.length) {
        var eJ, XJ;
        const JJ = null !== (eJ = null === (XJ = ZJ.match(/\p{L}/gu)) || void 0 === XJ ? void 0 : XJ.length) && void 0 !== eJ ? eJ : 0;
        return 0 === JJ ? 0 : Math.min(Math.max(1, Math.round(JJ / 2.5)), sJ)
      }
      const AJ = ZJ.replace(/[^\p{L}]/gu, ""),
        qJ = UJ.length > 1 && "e" === UJ.at(-1) && AJ.endsWith("e") && !AJ.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(JJ.replace(/[^\p{L}]/gu, ""));
      return Math.min(UJ.length - (qJ ? 1 : 0), sJ)
    }

    function yJ(JJ) {
      return JJ.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function SJ(JJ) {
      const cJ = JJ.replace(/[^\p{L}]/gu, "");
      return cJ.length >= 2 && cJ === cJ.toUpperCase() && cJ !== cJ.toLowerCase()
    }

    function IJ(JJ, cJ) {
      var ZJ;
      const sJ = cJ && (0, FJ.h)(cJ),
        nJ = null !== (ZJ = null === sJ || void 0 === sJ ? void 0 : sJ.syllableMs) && void 0 !== ZJ ? ZJ : FJ.c,
        vJ = function(JJ) {
          const cJ = [];
          for (const FJ of (0, UJ.Sb)(JJ))
            if ("string" === typeof FJ)
              for (const JJ of FJ.split(/(\s+)/)) {
                if ("" === JJ) continue;
                if (/^\s+$/.test(JJ)) {
                  cJ.push({
                    kind: "space",
                    text: JJ
                  });
                  continue
                }
                if (!mJ.test(JJ)) {
                  cJ.push({
                    kind: "word",
                    text: JJ,
                    delayMs: 0
                  });
                  continue
                }
                let FJ = !0;
                for (const UJ of null !== (ZJ = JJ.match(QJ)) && void 0 !== ZJ ? ZJ : []) {
                  var ZJ;
                  const JJ = cJ.at(-1);
                  FJ || "word" !== (null === JJ || void 0 === JJ ? void 0 : JJ.kind) || mJ.test(UJ) || /[\p{L}\p{N}]/u.test(UJ) ? (FJ || cJ.push({
                    kind: "space",
                    text: "\u200b"
                  }), cJ.push({
                    kind: "word",
                    text: UJ,
                    delayMs: 0
                  }), FJ = !1) : JJ.text += UJ
                }
              } else cJ.push({
                kind: "icon",
                text: FJ.icon,
                delayMs: 0
              });
          return cJ
        }(JJ),
        EJ = [];
      let IJ = [];
      for (const FJ of vJ) "space" !== FJ.kind && (IJ.push(FJ), GJ.test(FJ.text) && (EJ.push(IJ), IJ = []));
      EJ.push(IJ);
      const MJ = [];
      let bJ = 0;
      for (const FJ of EJ) {
        var wJ, WJ;
        const JJ = null !== (wJ = null === (WJ = FJ.at(-1)) || void 0 === WJ ? void 0 : WJ.text) && void 0 !== wJ ? wJ : "",
          cJ = fJ.test(JJ),
          ZJ = xJ.test(JJ),
          UJ = FJ.map((JJ => "word" === JJ.kind ? KJ(JJ.text) : 1)),
          vJ = UJ.findLastIndex((JJ => JJ > 0));
        for (const [fJ, xJ] of FJ.entries()) {
          const JJ = "word" === xJ.kind,
            FJ = UJ[fJ];
          xJ.delayMs = bJ;
          for (let UJ = 0; sJ && UJ < FJ; UJ++) {
            const {
              intonation: eJ
            } = sJ;
            let XJ = vJ > 0 ? -eJ.declineSemitones * (fJ / vJ) : 0;
            XJ += VJ(`${yJ(xJ.text)}|${UJ}`) * eJ.variationSemitones;
            const GJ = Math.min(1, eJ.variationSemitones);
            let rJ = sJ.glideSemitones,
              mJ = 1;
            ZJ && (XJ += eJ.exclaimLiftSemitones, mJ *= AJ), cJ && fJ === vJ && (XJ += eJ.questionRiseSemitones * (FJ > 1 ? .5 + .5 * UJ / (FJ - 1) : 1), UJ === FJ - 1 && (rJ = Math.abs(rJ) + eJ.questionRiseSemitones / 2)), JJ && SJ(xJ.text) && (XJ += jJ * GJ, mJ *= qJ), FJ > 1 && 0 === UJ && (XJ += hJ * GJ, mJ *= YJ), MJ.push({
              atMs: bJ + UJ * nJ,
              semitones: XJ,
              glideSemitones: rJ,
              durationMs: UJ < FJ - 1 ? Math.min(sJ.durationMs, nJ * DJ) : sJ.durationMs,
              level: mJ
            })
          }
          bJ += FJ * nJ + (GJ.test(xJ.text) ? XJ : rJ.test(xJ.text) ? eJ : 0)
        }
      }
      return {
        pieces: vJ.map((JJ => "space" === JJ.kind ? JJ : "icon" === JJ.kind ? {
          kind: "icon",
          icon: JJ.text,
          delayMs: JJ.delayMs
        } : {
          kind: "word",
          text: JJ.text,
          delayMs: JJ.delayMs
        })),
        blips: MJ
      }
    }
    var MJ = ZJ(1086),
      bJ = ZJ(1151),
      wJ = ZJ(1712);

    function WJ(JJ) {
      if ("string" === typeof JJ) return JJ;
      const cJ = bJ.e.get().getCurrentLanguageCode();
      return (0, MJ.t)(cJ, JJ.translationKey, (0, MJ.s)(JJ.params, wJ.d.shown))
    }

    function gJ(JJ) {
      const cJ = void 0 === JJ.voice ? null : (0, FJ.k)(JJ.voice),
        ZJ = cJ && (0, FJ.h)(cJ);
      return {
        plan: IJ(WJ(JJ.line), ZJ),
        synth: ZJ
      }
    }

    function HJ(JJ) {
      const cJ = [];
      let ZJ = [];
      for (const [UJ, eJ] of JJ.entries()) {
        var FJ;
        "space" === eJ.kind && (" " !== eJ.text || "icon" !== (null === (FJ = JJ[UJ + 1]) || void 0 === FJ ? void 0 : FJ.kind)) ? (ZJ.length > 0 && cJ.push(ZJ), cJ.push([eJ]), ZJ = []) : ZJ.push(eJ)
      }
      return ZJ.length > 0 && cJ.push(ZJ), cJ
    }
  },
  8068: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => eJ,
      f: () => UJ
    });
    let FJ = null;
    const UJ = function(JJ) {
        const cJ = {
          cycle: JJ,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return FJ = cJ, () => {
          FJ === cJ && (FJ = null)
        }
      },
      eJ = () => {
        var JJ;
        return null !== (JJ = FJ) && void 0 !== JJ && JJ.canCycle() ? FJ.cycle : null
      }
  },
  35665: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => eJ,
      c: () => GJ,
      f: () => fJ,
      j: () => AJ,
      l: () => DJ,
      m: () => xJ,
      p: () => hJ,
      t: () => vJ,
      v: () => nJ,
      z: () => rJ
    });
    var FJ = ZJ(13),
      UJ = ZJ(17);
    const eJ = "clientGameInventoryButtonsChanged",
      XJ = new Map;

    function AJ() {
      return [...XJ.values()].sort(((JJ, cJ) => {
        var ZJ, FJ;
        return (null !== (ZJ = JJ.order) && void 0 !== ZJ ? ZJ : 0) - (null !== (FJ = cJ.order) && void 0 !== FJ ? FJ : 0)
      }))
    }
    let qJ = null;

    function jJ(JJ) {
      qJ = JJ
    }
    let YJ = !1;

    function hJ(JJ) {
      YJ = !0;
      try {
        JJ.onClick()
      } finally {
        YJ = !1
      }
      JJ.panel && "clientGame" === FJ.d.get("openInGameMenuName") && jJ(JJ.id)
    }

    function DJ() {
      return YJ
    }

    function sJ() {
      return AJ().filter((JJ => JJ.panel && !JJ.disabled))
    }

    function nJ(JJ) {
      const cJ = sJ(),
        ZJ = cJ.findIndex((JJ => JJ.id === qJ));
      return !(ZJ < 0 || cJ.length < 2) && (hJ(cJ[(ZJ + JJ + cJ.length) % cJ.length]), !0)
    }

    function GJ() {
      return null !== qJ && sJ().length > 1
    }

    function fJ() {
      jJ(null)
    }

    function xJ() {
      "inventory" !== FJ.d.get("openInGameMenuName") && jJ(null)
    }

    function rJ() {
      const JJ = qJ;
      return jJ(null), JJ
    }

    function vJ(JJ) {
      return XJ.set(JJ.id, JJ), UJ.i.Uf(eJ, AJ(), !0), () => {
        XJ.get(JJ.id) === JJ && (XJ.delete(JJ.id), UJ.i.Uf(eJ, AJ()))
      }
    }
  },
  35661: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => AJ,
      f: () => fJ,
      j: () => xJ,
      k: () => DJ,
      m: () => jJ,
      n: () => GJ,
      r: () => sJ,
      u: () => YJ
    });
    var FJ = ZJ(13),
      UJ = ZJ(17),
      eJ = ZJ(1184),
      XJ = ZJ(35665);
    const AJ = "clientGameUiChanged";
    let qJ = null;

    function jJ() {
      return qJ
    }

    function YJ(JJ, cJ) {
      const ZJ = {
        content: JJ,
        menu: cJ
      };
      return qJ = ZJ, UJ.i.Uf(AJ, qJ, !0), () => {
        qJ === ZJ && (qJ = null, nJ = !1, fJ(), UJ.i.Uf(AJ, null))
      }
    }
    let hJ = null;

    function DJ() {
      return hJ
    }

    function sJ(JJ) {
      return hJ = JJ, () => {
        hJ === JJ && (hJ = null)
      }
    }
    let nJ = !1;

    function GJ() {
      const JJ = FJ.d.get("openInGameMenuName");
      "clientGame" !== JJ && (nJ = "inventory" === JJ), (0, XJ.l)() || (0, XJ.f)(), (0, eJ.h)("InGameMenu"), FJ.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function fJ() {
      rJ(!1)
    }

    function xJ() {
      rJ(nJ)
    }

    function rJ(JJ) {
      "clientGame" === FJ.d.get("openInGameMenuName") && FJ.d.set({
        openInGameMenuName: JJ ? "inventory" : null
      }), JJ || (0, XJ.f)(), nJ = !1
    }
  },
  37499: (JJ, cJ, ZJ) => {
    function FJ(JJ, cJ, ZJ) {
      const FJ = new Set,
        UJ = new ResizeObserver(ZJ),
        eJ = () => {
          const cJ = new Set(document.querySelectorAll(JJ));
          let eJ = !1;
          for (const JJ of FJ) cJ.has(JJ) || (UJ.unobserve(JJ), FJ.delete(JJ), eJ = !0);
          for (const JJ of cJ) FJ.has(JJ) || (UJ.observe(JJ), XJ.observe(JJ, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), FJ.add(JJ));
          eJ && ZJ()
        },
        XJ = new MutationObserver((cJ => {
          cJ.some((JJ => "attributes" === JJ.type)) && ZJ(), cJ.some((cJ => function(JJ, cJ, ZJ) {
            if ("childList" !== JJ.type) return !1;
            for (const FJ of JJ.addedNodes)
              if (FJ instanceof Element && (FJ.matches(cJ) || FJ.querySelector(cJ))) return !0;
            for (const FJ of JJ.removedNodes)
              if (FJ instanceof Element)
                for (const JJ of ZJ)
                  if (FJ.contains(JJ)) return !0;
            return !1
          }(cJ, JJ, FJ))) && eJ()
        }));
      XJ.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const AJ of cJ) UJ.observe(AJ);
      return window.addEventListener("resize", ZJ), eJ(), ZJ(), () => {
        UJ.disconnect(), XJ.disconnect(), window.removeEventListener("resize", ZJ)
      }
    }
    ZJ.d(cJ, {
      d: () => FJ
    })
  },
  8178: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => AJ,
      g: () => qJ
    });
    var FJ = ZJ(13),
      UJ = ZJ(1213),
      eJ = ZJ(80);
    const XJ = {
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

    function AJ() {
      return (0, eJ.isMobile)() && "function" === typeof navigator.vibrate
    }
    const qJ = new class {
      constructor(JJ) {
        this.deps = JJ, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(JJ, cJ) {
        var ZJ;
        if (!this.deps.enabled()) return;
        const FJ = XJ[JJ],
          UJ = null !== cJ && void 0 !== cJ ? cJ : FJ.pattern;
        if (null === UJ) return void console.warn("No vibration pattern for", JJ);
        const eJ = this.deps.now();
        eJ - this.lastAnyAt < 40 && FJ.priority < this.playingPriority || eJ - (null !== (ZJ = this.lastAt.get(JJ)) && void 0 !== ZJ ? ZJ : -1 / 0) < FJ.minGapMs || eJ < this.playingUntil && FJ.priority < this.playingPriority || (this.lastAt.set(JJ, eJ), this.lastAnyAt = eJ, this.playingUntil = eJ + UJ.reduce(((JJ, cJ) => JJ + cJ), 0), this.playingPriority = FJ.priority, this.deps.vibrate(UJ))
      }
    }({
      vibrate: JJ => {
        navigator.vibrate([...JJ])
      },
      now: () => performance.now(),
      enabled: () => AJ() && FJ.d.get("isTouchScreen") && FJ.d.get("clientEscMenuOptions").vibration && !(0, UJ.g)()
    })
  },
  36562: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => AJ,
      g: () => XJ
    });
    var FJ = ZJ(36555),
      UJ = ZJ(235),
      eJ = ZJ(1671);

    function XJ(JJ) {
      if ("Ic" in JJ) return EJ.createAnimationScript(JJ);
      return new jJ(JJ).createAnimationScript()
    }

    function AJ(JJ, cJ, ZJ, UJ) {
      const eJ = JJ.Ic <= 0 ? 1 : cJ + ZJ * Math.max(0, UJ) / JJ.Ic;
      return JJ.Mc === FJ.n.LoopOnLastFrame ? eJ % 1 : JJ.Mc === FJ.n.NoLoop && eJ >= 1 ? null : Math.min(1, eJ)
    }
    class qJ {
      createAnimationScript(JJ) {
        const {
          Ic: cJ,
          loop: ZJ,
          bc: FJ
        } = JJ;
        return {
          Ic: Math.round(cJ),
          Mc: this.createLoopMode(null !== ZJ && void 0 !== ZJ && ZJ),
          bc: this.createNodeSkeletonAnimationScript(null !== FJ && void 0 !== FJ ? FJ : null)
        }
      }
      createLoopMode(JJ) {
        switch (JJ) {
          case !1:
            return FJ.n.NoLoop;
          case !0:
            return FJ.n.LoopOnLastFrame;
          case "hold-on-last-frame":
            return FJ.n.HoldOnLastFrame
        }
        throw new Error(`Invalid loop mode schema: ${JJ}`)
      }
      createNodeSkeletonAnimationScript(JJ) {
        if (null === JJ) return null;
        const cJ = {};
        for (const ZJ in JJ) {
          const FJ = JJ[ZJ];
          cJ[ZJ] = this.createNodeAnimationScript(FJ)
        }
        return cJ
      }
      createNodeAnimationScript(JJ) {
        const {
          timeline: cJ
        } = JJ, ZJ = cJ.filter((JJ => Number.isFinite(JJ.timeFraction)));
        return ZJ.sort(((JJ, cJ) => JJ.timeFraction - cJ.timeFraction)), {
          rotation: this.createTimelineFromKeyframes(ZJ, "rotation", DJ),
          position: this.createTimelineFromKeyframes(ZJ, "position", nJ)
        }
      }
      createTimelineFromKeyframes(JJ, cJ, ZJ) {
        const FJ = [];
        for (const qJ of JJ) {
          const JJ = qJ[cJ];
          if (JJ) {
            const cJ = this.createAnimationFrameWithoutPrecomputes(qJ.timeFraction, JJ);
            YJ(cJ) && FJ.push(cJ)
          }
        }
        const UJ = [];
        for (let qJ = 0; qJ < FJ.length; qJ++) {
          var eJ, XJ, AJ;
          const JJ = FJ[qJ],
            cJ = null !== (eJ = FJ[qJ - 1]) && void 0 !== eJ ? eJ : JJ,
            jJ = null !== (XJ = FJ[qJ + 1]) && void 0 !== XJ ? XJ : JJ,
            YJ = null !== (AJ = FJ[qJ + 2]) && void 0 !== AJ ? AJ : jJ;
          UJ.push({
            ...JJ,
            ...ZJ(cJ.post, cJ.timeFraction, JJ.post, JJ.timeFraction, jJ.pre, jJ.timeFraction, YJ.pre, YJ.timeFraction)
          })
        }
        return UJ
      }
      createAnimationFrameWithoutPrecomputes(JJ, cJ) {
        let ZJ, FJ, UJ = null;
        var eJ;
        if ("object" === typeof cJ && "point" in cJ) UJ = null !== (eJ = cJ.Hc) && void 0 !== eJ ? eJ : null, ZJ = cJ.point, FJ = cJ.point;
        else if ("object" === typeof cJ && "pre" in cJ) {
          var XJ;
          UJ = null !== (XJ = cJ.Hc) && void 0 !== XJ ? XJ : null, ZJ = cJ.pre, FJ = cJ.post
        } else ZJ = cJ, FJ = cJ;
        return {
          timeFraction: JJ,
          Hc: this.createLerpMode(UJ),
          pre: ZJ,
          post: FJ
        }
      }
      createLerpMode(JJ) {
        return null === JJ ? FJ.j.Linear : qJ.LERP_MODE_SCHEMA_MAPPING[JJ]
      }
    }
    qJ.LERP_MODE_SCHEMA_MAPPING = {
      linear: FJ.j.Linear,
      "catmull-rom-spline": FJ.j.CatmullRomSpline
    };
    class jJ {
      constructor(JJ) {
        this.animationSchema = JJ
      }
      createAnimationScript() {
        const {
          animation_length: JJ,
          loop: cJ,
          bones: ZJ
        } = this.animationSchema;
        return {
          Ic: Math.round(1e3 * JJ),
          Mc: this.createLoopMode(null !== cJ && void 0 !== cJ && cJ),
          bc: this.createNodeSkeletonAnimationScript(null !== ZJ && void 0 !== ZJ ? ZJ : null)
        }
      }
      createLoopMode(JJ) {
        switch (JJ) {
          case !1:
            return FJ.n.NoLoop;
          case !0:
            return FJ.n.LoopOnLastFrame;
          case "hold_on_last_frame":
            return FJ.n.HoldOnLastFrame
        }
        throw new Error(`Invalid Blockbench loop mode schema: ${JJ}`)
      }
      createNodeSkeletonAnimationScript(JJ) {
        if (null === JJ) return null;
        const cJ = {};
        for (const ZJ in JJ) {
          const FJ = JJ[ZJ];
          cJ[ZJ] = this.createNodeAnimationScript(FJ)
        }
        return cJ
      }
      createNodeAnimationScript(JJ) {
        const {
          rotation: cJ,
          position: ZJ
        } = JJ;
        return {
          rotation: this.createAnimationTimeline(null !== cJ && void 0 !== cJ ? cJ : null, fJ, DJ, !0),
          position: this.createAnimationTimeline(null !== ZJ && void 0 !== ZJ ? ZJ : null, rJ, nJ, !1)
        }
      }
      createAnimationTimeline(JJ, cJ, ZJ, FJ) {
        if (null === JJ) return [];
        if (Array.isArray(JJ)) {
          JJ = {
            "0.0": JJ
          }
        }
        const UJ = Object.entries(JJ).map((JJ => {
          let [ZJ, FJ] = JJ;
          const UJ = Number(ZJ) / this.animationSchema.animation_length;
          return this.createAnimationFrameWithoutPrecomputes(UJ, FJ, cJ)
        })).filter(YJ);
        UJ.sort(((JJ, cJ) => JJ.timeFraction - cJ.timeFraction)), FJ && function(JJ) {
          for (let cJ = 1; cJ < JJ.length; cJ++) {
            const ZJ = JJ[cJ - 1].post,
              FJ = JJ[cJ],
              UJ = vJ(FJ.pre),
              eJ = vJ(FJ.post),
              XJ = QJ(ZJ, FJ.pre);
            QJ(ZJ, UJ) < XJ && (JJ[cJ] = {
              ...FJ,
              pre: UJ,
              post: eJ
            })
          }
        }(UJ);
        const eJ = [];
        for (let jJ = 0; jJ < UJ.length; jJ++) {
          var XJ, AJ, qJ;
          const JJ = UJ[jJ],
            cJ = null !== (XJ = UJ[jJ - 1]) && void 0 !== XJ ? XJ : JJ,
            FJ = null !== (AJ = UJ[jJ + 1]) && void 0 !== AJ ? AJ : JJ,
            YJ = null !== (qJ = UJ[jJ + 2]) && void 0 !== qJ ? qJ : FJ;
          eJ.push({
            ...JJ,
            ...ZJ(cJ.post, cJ.timeFraction, JJ.post, JJ.timeFraction, FJ.pre, FJ.timeFraction, YJ.pre, YJ.timeFraction)
          })
        }
        return eJ
      }
      createAnimationFrameWithoutPrecomputes(JJ, cJ, ZJ) {
        let FJ, UJ, eJ = null;
        if ("object" === typeof cJ && "post" in cJ) {
          var XJ;
          eJ = null !== (XJ = cJ.lerp_mode) && void 0 !== XJ ? XJ : null, UJ = GJ(cJ.post, ZJ), FJ = cJ.pre ? GJ(cJ.pre, ZJ) : UJ
        } else {
          const JJ = GJ(cJ, ZJ);
          UJ = JJ, FJ = JJ
        }
        return {
          timeFraction: JJ,
          Hc: this.createLerpMode(eJ),
          pre: FJ,
          post: UJ
        }
      }
      createLerpMode(JJ) {
        return null === JJ ? FJ.j.Linear : jJ.LERP_MODE_SCHEMA_MAPPING[JJ]
      }
    }

    function YJ(JJ) {
      return Number.isFinite(JJ.timeFraction) && hJ(JJ.pre) && hJ(JJ.post)
    }

    function hJ(JJ) {
      return Number.isFinite(JJ[0]) && Number.isFinite(JJ[1]) && Number.isFinite(JJ[2])
    }

    function DJ(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ) {
      const qJ = eJ - cJ,
        jJ = eJ - FJ,
        YJ = AJ - FJ,
        hJ = [null, null, null];
      for (let DJ = 0; DJ < hJ.length; DJ++) hJ[DJ] = sJ(JJ[DJ], ZJ[DJ], UJ[DJ], XJ[DJ], qJ, YJ);
      return {
        Pc: jJ,
        kc: hJ
      }
    }

    function sJ(JJ, cJ, ZJ, FJ, eJ, XJ) {
      return {
        zc: UJ.c.computeShortestRotation(JJ, ZJ) / eJ,
        Nc: UJ.c.computeShortestRotation(cJ, FJ) / XJ,
        delta: UJ.c.computeShortestRotation(cJ, ZJ)
      }
    }

    function nJ(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ) {
      const qJ = eJ - cJ,
        jJ = eJ - FJ,
        YJ = AJ - FJ,
        hJ = [null, null, null];
      for (let DJ = 0; DJ < hJ.length; DJ++) hJ[DJ] = {
        zc: (UJ[DJ] - JJ[DJ]) / qJ,
        Nc: (XJ[DJ] - ZJ[DJ]) / YJ,
        delta: UJ[DJ] - ZJ[DJ]
      };
      return {
        Pc: jJ,
        kc: hJ
      }
    }

    function GJ(JJ, cJ) {
      return null === cJ ? JJ : cJ(JJ)
    }

    function fJ(JJ) {
      const [cJ, ZJ, FJ] = JJ, XJ = -(0, eJ.k)(cJ), AJ = -(0, eJ.k)(ZJ), qJ = (0, eJ.k)(FJ), jJ = UJ.c.quaternionFromEulerZYX(XJ, AJ, qJ);
      return UJ.c.eulerYXZFromQuaternion(jJ)
    }
    jJ.LERP_MODE_SCHEMA_MAPPING = {
      linear: FJ.j.Linear,
      catmullrom: FJ.j.CatmullRomSpline
    };
    const xJ = 1 / 16;

    function rJ(JJ) {
      return [-JJ[0] * xJ, JJ[1] * xJ, JJ[2] * xJ]
    }

    function vJ(JJ) {
      const [cJ, ZJ, FJ] = JJ;
      return [cJ >= 0 ? Math.PI - cJ : -Math.PI - cJ, mJ(ZJ + Math.PI), mJ(FJ + Math.PI)]
    }

    function mJ(JJ) {
      return UJ.c.mod(JJ + Math.PI, 2 * Math.PI) - Math.PI
    }

    function QJ(JJ, cJ) {
      return Math.abs(UJ.c.computeShortestRotation(JJ[0], cJ[0])) + Math.abs(UJ.c.computeShortestRotation(JJ[1], cJ[1])) + Math.abs(UJ.c.computeShortestRotation(JJ[2], cJ[2]))
    }
    const EJ = new qJ
  },
  36555: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => XJ,
      f: () => eJ,
      j: () => FJ,
      n: () => UJ
    });
    let FJ = function(JJ) {
        return JJ[JJ.Linear = 0] = "Linear", JJ[JJ.CatmullRomSpline = 1] = "CatmullRomSpline", JJ
      }({}),
      UJ = function(JJ) {
        return JJ[JJ.NoLoop = 0] = "NoLoop", JJ[JJ.LoopOnLastFrame = 1] = "LoopOnLastFrame", JJ[JJ.HoldOnLastFrame = 2] = "HoldOnLastFrame", JJ
      }({}),
      eJ = function(JJ) {
        return JJ[JJ.Movement = 0] = "Movement", JJ[JJ.Action = 1] = "Action", JJ[JJ.Emote = 2] = "Emote", JJ[JJ.Custom = 3] = "Custom", JJ
      }({}),
      XJ = function(JJ) {
        return JJ[JJ.Start = 0] = "Start", JJ[JJ.Stop = 1] = "Stop", JJ
      }({})
  },
  4245: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => UJ,
      d: () => FJ,
      f: () => eJ,
      h: () => qJ,
      k: () => XJ
    });
    const FJ = ["sine", "triangle", "square", "sawtooth"],
      UJ = 55,
      eJ = {
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

    function XJ(JJ) {
      return "string" !== typeof JJ ? JJ : Object.hasOwn(eJ, JJ) ? eJ[JJ] : null
    }

    function AJ(JJ, cJ, ZJ) {
      return Math.min(ZJ, Math.max(cJ, JJ))
    }

    function qJ(JJ) {
      const cJ = AJ(JJ.durationMs, 10, 500),
        ZJ = AJ(JJ.attackMs, 0, cJ),
        {
          intonation: UJ
        } = JJ;
      return {
        waveform: FJ.includes(JJ.waveform) ? JJ.waveform : "sine",
        pitchHz: AJ(JJ.pitchHz, 20, 4e3),
        glideSemitones: AJ(JJ.glideSemitones, -24, 24),
        durationMs: cJ,
        attackMs: ZJ,
        releaseMs: AJ(JJ.releaseMs, 0, cJ - ZJ),
        lowpassHz: null === JJ.lowpassHz ? null : AJ(JJ.lowpassHz, 20, 2e4),
        volume: AJ(JJ.volume, 0, 2),
        intonation: {
          variationSemitones: AJ(UJ.variationSemitones, 0, 6),
          declineSemitones: AJ(UJ.declineSemitones, 0, 12),
          questionRiseSemitones: AJ(UJ.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: AJ(UJ.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: AJ(JJ.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);