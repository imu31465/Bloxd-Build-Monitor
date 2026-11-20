export const id = 25;
export const ids = [25];
export const modules = {
  36416: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => jT,
      g: () => vT,
      j: () => CT,
      k: () => AT
    });
    var lT = cT(9359),
      MT = cT(36423),
      KT = cT(36432),
      OT = cT(8746),
      yT = cT(1461),
      fT = cT(71),
      xT = cT(94),
      IT = cT(1099);

    function AT() {
      var TT;
      return (0, yT.i)(MT.b, (0, MT.j)()), (0, IT.jsx)(IT.Fragment, {
        children: null === (TT = (0, MT.j)()) || void 0 === TT ? void 0 : TT.content
      })
    }

    function CT(TT) {
      var kT;
      let {
        show: cT
      } = TT;
      (0, yT.i)(MT.b, (0, MT.j)());
      const xT = null === (kT = (0, MT.j)()) || void 0 === kT ? void 0 : kT.menu;
      return (0, fT.useEffect)((() => {
        var TT;
        cT || (null === xT || void 0 === xT || null === (TT = xT.onClose) || void 0 === TT || TT.call(xT), (0, KT.q)())
      }), [cT, xT]), (0, fT.useEffect)((() => cT ? (0, OT.e)(KT.A, KT.h) : void 0), [cT]), (0, IT.jsx)(lT.b, {
        showing: cT,
        globallyUniqueKey: "clientGameMenu",
        children: null === xT || void 0 === xT ? void 0 : xT.content
      })
    }

    function jT(TT) {
      let {
        placement: kT = "bottom"
      } = TT;
      return (0, IT.jsx)("div", {
        id: `clientGameHud-${kT}`,
        style: {
          display: "contents"
        }
      })
    }

    function vT(TT) {
      let {
        children: kT,
        placement: cT = "bottom"
      } = TT;
      const [lT, MT] = (0, fT.useState)(null);
      return (0, fT.useEffect)((() => {
        MT(document.getElementById(`clientGameHud-${cT}`))
      }), [cT]), lT ? (0, xT.createPortal)(kT, lT) : null
    }
  },
  4798: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => hT,
      i: () => NT
    });
    var lT = cT(1046),
      MT = cT.n(lT),
      KT = cT(71),
      OT = cT(1195),
      yT = cT(4800),
      fT = cT(1921),
      xT = cT(2462),
      IT = cT(4806),
      AT = cT(1099);
    const CT = new WeakMap;
    let jT = 0;

    function vT(TT) {
      let kT = CT.get(TT);
      return void 0 === kT && (kT = jT++, CT.set(TT, kT)), kT
    }

    function tT(TT) {
      let {
        piece: kT
      } = TT;
      return "space" === kT.kind ? (0, AT.jsx)(AT.Fragment, {
        children: kT.text
      }) : (0, AT.jsx)("span", {
        className: "DialogueWord",
        style: {
          "--word-delay": `${kT.delayMs}ms`
        },
        children: (0, AT.jsx)(yT.e, {
          text: "icon" === kT.kind ? `[[${kT.icon}]]` : kT.text
        })
      })
    }

    function hT(TT) {
      let {
        display: kT
      } = TT;
      const {
        selectedLanguage: cT
      } = (0, OT.B)(), lT = (0, KT.useMemo)((() => (0, IT.b)((0, IT.e)(kT).plan.pieces)), [kT, cT.code]);
      return (0, AT.jsxs)("div", {
        className: MT()("Dialogue", {
          DialogueAnimateIn: !1 !== kT.animateIn
        }),
        children: [kT.speakerName && (0, AT.jsx)(fT.b, {
          text: kT.speakerName,
          className: "DialogueSpeaker"
        }), (0, AT.jsx)("p", {
          className: "DialogueLine",
          children: lT.map(((TT, kT) => 1 === TT.length && "space" === TT[0].kind ? TT[0].text : (0, AT.jsx)("span", {
            className: "DialogueGlue",
            children: TT.map(((TT, kT) => (0, AT.jsx)(tT, {
              piece: TT
            }, kT)))
          }, kT)))
        })]
      })
    }
    const NT = (0, KT.memo)((function() {
      const TT = (0, xT.f)("dialogue");
      return (0, AT.jsx)("div", {
        className: "DialogueAnchor",
        "data-camera-keeper": "",
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: TT && (0, AT.jsx)(hT, {
          display: TT
        }, vT(TT))
      })
    }))
  },
  4800: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => yT
    });
    var lT = cT(71),
      MT = cT(328),
      KT = cT(1943),
      OT = cT(1099);

    function yT(TT) {
      let {
        text: kT
      } = TT;
      const cT = [];
      let yT = "";
      return (0, MT.Pb)(kT).forEach(((TT, kT) => {
        if ("string" === typeof TT || !(0, KT.e)(TT.icon)) return void(yT += "string" === typeof TT ? TT : TT.icon);
        const MT = Math.max(0, yT.trimEnd().search(/\S{1,12}$/));
        cT.push((0, OT.jsxs)(lT.Fragment, {
          children: [yT.slice(0, MT), (0, OT.jsxs)("span", {
            className: "InlineIconTextGlue",
            children: [yT.slice(MT), (0, OT.jsx)("span", {
              className: "InlineIconTextIcon",
              role: "img",
              "aria-label": TT.icon,
              children: (0, OT.jsx)(KT.d, {
                itemName: TT.icon,
                amount: 0
              })
            })]
          })]
        }, kT)), yT = ""
      })), cT.push(yT), (0, OT.jsx)(OT.Fragment, {
        children: cT
      })
    }
  },
  9359: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => KT
    });
    var lT = cT(4521),
      MT = cT(4528);

    function KT(TT) {
      let {
        children: kT,
        showing: cT,
        globallyUniqueKey: KT,
        alwaysMountChildren: OT = !1,
        doGameplayStartStopOnShow: yT = !0,
        keepsMovement: fT = !1
      } = TT;
      return (0, MT.c)(!0, cT, KT, fT), (0, lT.e)(yT, cT), cT || OT ? kT : null
    }
  },
  4806: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => GT,
      e: () => eT
    });
    var lT = cT(4813),
      MT = cT(328);
    const KT = 120,
      OT = 260,
      yT = 1.15,
      fT = 1.2,
      xT = 2,
      IT = 1.08,
      AT = .8,
      CT = .95,
      jT = 8,
      vT = "[\"')\\]\u300d\u300f\uff09]*",
      tT = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${vT}$`),
      hT = new RegExp(`[?\uff1f]${vT}$`),
      NT = new RegExp(`[!\uff01]${vT}$`),
      QT = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      ST = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      DT = new RegExp(`[${ST}]`),
      aT = new RegExp(`[${ST}]|[^${ST}]+`, "g"),
      FT = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function rT(TT) {
      let kT = 2166136261;
      for (let cT = 0; cT < TT.length; cT++) kT ^= TT.charCodeAt(cT), kT = Math.imul(kT, 16777619);
      return (kT >>> 0) / 4294967295 * 2 - 1
    }

    function PT(TT) {
      var kT;
      if (DT.test(TT)) return 1;
      const cT = TT.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        lT = cT.replace(/[^0-9]/g, "");
      if (lT.length > 0 && !/\p{L}/u.test(cT)) return Math.min(lT.length, 4);
      const MT = null !== (kT = cT.match(FT)) && void 0 !== kT ? kT : [];
      if (0 === MT.length) {
        var KT, OT;
        const TT = null !== (KT = null === (OT = cT.match(/\p{L}/gu)) || void 0 === OT ? void 0 : OT.length) && void 0 !== KT ? KT : 0;
        return 0 === TT ? 0 : Math.min(Math.max(1, Math.round(TT / 2.5)), jT)
      }
      const yT = cT.replace(/[^\p{L}]/gu, ""),
        fT = MT.length > 1 && "e" === MT.at(-1) && yT.endsWith("e") && !yT.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(TT.replace(/[^\p{L}]/gu, ""));
      return Math.min(MT.length - (fT ? 1 : 0), jT)
    }

    function wT(TT) {
      return TT.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function mT(TT) {
      const kT = TT.replace(/[^\p{L}]/gu, "");
      return kT.length >= 2 && kT === kT.toUpperCase() && kT !== kT.toLowerCase()
    }

    function bT(TT, kT) {
      var cT;
      const jT = kT && (0, lT.j)(kT),
        vT = null !== (cT = null === jT || void 0 === jT ? void 0 : jT.syllableMs) && void 0 !== cT ? cT : lT.b,
        ST = function(TT) {
          const kT = [];
          for (const lT of (0, MT.Pb)(TT))
            if ("string" === typeof lT)
              for (const TT of lT.split(/(\s+)/)) {
                if ("" === TT) continue;
                if (/^\s+$/.test(TT)) {
                  kT.push({
                    kind: "space",
                    text: TT
                  });
                  continue
                }
                if (!DT.test(TT)) {
                  kT.push({
                    kind: "word",
                    text: TT,
                    delayMs: 0
                  });
                  continue
                }
                let lT = !0;
                for (const MT of null !== (cT = TT.match(aT)) && void 0 !== cT ? cT : []) {
                  var cT;
                  const TT = kT.at(-1);
                  lT || "word" !== (null === TT || void 0 === TT ? void 0 : TT.kind) || DT.test(MT) || /[\p{L}\p{N}]/u.test(MT) ? (lT || kT.push({
                    kind: "space",
                    text: "\u200b"
                  }), kT.push({
                    kind: "word",
                    text: MT,
                    delayMs: 0
                  }), lT = !1) : TT.text += MT
                }
              } else kT.push({
                kind: "icon",
                text: lT.icon,
                delayMs: 0
              });
          return kT
        }(TT),
        FT = [];
      let bT = [];
      for (const lT of ST) "space" !== lT.kind && (bT.push(lT), tT.test(lT.text) && (FT.push(bT), bT = []));
      FT.push(bT);
      const zT = [];
      let JT = 0;
      for (const lT of FT) {
        var oT, HT;
        const TT = null !== (oT = null === (HT = lT.at(-1)) || void 0 === HT ? void 0 : HT.text) && void 0 !== oT ? oT : "",
          kT = hT.test(TT),
          cT = NT.test(TT),
          MT = lT.map((TT => "word" === TT.kind ? PT(TT.text) : 1)),
          ST = MT.findLastIndex((TT => TT > 0));
        for (const [hT, NT] of lT.entries()) {
          const TT = "word" === NT.kind,
            lT = MT[hT];
          NT.delayMs = JT;
          for (let MT = 0; jT && MT < lT; MT++) {
            const {
              intonation: KT
            } = jT;
            let OT = ST > 0 ? -KT.declineSemitones * (hT / ST) : 0;
            OT += rT(`${wT(NT.text)}|${MT}`) * KT.variationSemitones;
            const tT = Math.min(1, KT.variationSemitones);
            let QT = jT.glideSemitones,
              DT = 1;
            cT && (OT += KT.exclaimLiftSemitones, DT *= yT), kT && hT === ST && (OT += KT.questionRiseSemitones * (lT > 1 ? .5 + .5 * MT / (lT - 1) : 1), MT === lT - 1 && (QT = Math.abs(QT) + KT.questionRiseSemitones / 2)), TT && mT(NT.text) && (OT += xT * tT, DT *= fT), lT > 1 && 0 === MT && (OT += AT * tT, DT *= IT), zT.push({
              atMs: JT + MT * vT,
              semitones: OT,
              glideSemitones: QT,
              durationMs: MT < lT - 1 ? Math.min(jT.durationMs, vT * CT) : jT.durationMs,
              level: DT
            })
          }
          JT += lT * vT + (tT.test(NT.text) ? OT : QT.test(NT.text) ? KT : 0)
        }
      }
      return {
        pieces: ST.map((TT => "space" === TT.kind ? TT : "icon" === TT.kind ? {
          kind: "icon",
          icon: TT.text,
          delayMs: TT.delayMs
        } : {
          kind: "word",
          text: TT.text,
          delayMs: TT.delayMs
        })),
        blips: zT
      }
    }
    var zT = cT(1195),
      JT = cT(1261),
      oT = cT(1960);

    function HT(TT) {
      if ("string" === typeof TT) return TT;
      const kT = JT.f.get().getCurrentLanguageCode();
      return (0, zT.p)(kT, TT.translationKey, (0, zT.m)(TT.params, oT.c.shown))
    }

    function eT(TT) {
      const kT = void 0 === TT.voice ? null : (0, lT.m)(TT.voice),
        cT = kT && (0, lT.j)(kT);
      return {
        plan: bT(HT(TT.line), cT),
        synth: cT
      }
    }

    function GT(TT) {
      const kT = [];
      let cT = [];
      for (const [MT, KT] of TT.entries()) {
        var lT;
        "space" === KT.kind && (" " !== KT.text || "icon" !== (null === (lT = TT[MT + 1]) || void 0 === lT ? void 0 : lT.kind)) ? (cT.length > 0 && kT.push(cT), kT.push([KT]), cT = []) : cT.push(KT)
      }
      return cT.length > 0 && kT.push(cT), kT
    }
  },
  8746: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => KT,
      e: () => MT
    });
    let lT = null;
    const MT = function(TT) {
        const kT = {
          cycle: TT,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return lT = kT, () => {
          lT === kT && (lT = null)
        }
      },
      KT = () => {
        var TT;
        return null !== (TT = lT) && void 0 !== TT && TT.canCycle() ? lT.cycle : null
      }
  },
  36432: (TT, kT, cT) => {
    cT.d(kT, {
      A: () => vT,
      B: () => QT,
      d: () => KT,
      h: () => tT,
      k: () => hT,
      l: () => yT,
      p: () => CT,
      q: () => NT,
      s: () => AT,
      w: () => ST
    });
    var lT = cT(31),
      MT = cT(36);
    const KT = "clientGameInventoryButtonsChanged",
      OT = new Map;

    function yT() {
      return [...OT.values()].sort(((TT, kT) => {
        var cT, lT;
        return (null !== (cT = TT.order) && void 0 !== cT ? cT : 0) - (null !== (lT = kT.order) && void 0 !== lT ? lT : 0)
      }))
    }
    let fT = null;

    function xT(TT) {
      fT = TT
    }
    let IT = !1;

    function AT(TT) {
      IT = !0;
      try {
        TT.onClick()
      } finally {
        IT = !1
      }
      TT.panel && "clientGame" === lT.e.get("openInGameMenuName") && xT(TT.id)
    }

    function CT() {
      return IT
    }

    function jT() {
      return yT().filter((TT => TT.panel && !TT.disabled))
    }

    function vT(TT) {
      const kT = jT(),
        cT = kT.findIndex((TT => TT.id === fT));
      return !(cT < 0 || kT.length < 2) && (AT(kT[(cT + TT + kT.length) % kT.length]), !0)
    }

    function tT() {
      return null !== fT && jT().length > 1
    }

    function hT() {
      xT(null)
    }

    function NT() {
      "inventory" !== lT.e.get("openInGameMenuName") && xT(null)
    }

    function QT() {
      const TT = fT;
      return xT(null), TT
    }

    function ST(TT) {
      return OT.set(TT.id, TT), MT.k.nt(KT, yT(), !0), () => {
        OT.get(TT.id) === TT && (OT.delete(TT.id), MT.k.nt(KT, yT()))
      }
    }
  },
  36423: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => yT,
      d: () => hT,
      f: () => NT,
      h: () => CT,
      j: () => xT,
      m: () => tT,
      p: () => jT,
      q: () => IT
    });
    var lT = cT(31),
      MT = cT(36),
      KT = cT(1292),
      OT = cT(36432);
    const yT = "clientGameUiChanged";
    let fT = null;

    function xT() {
      return fT
    }

    function IT(TT, kT) {
      const cT = {
        content: TT,
        menu: kT
      };
      return fT = cT, MT.k.nt(yT, fT, !0), () => {
        fT === cT && (fT = null, vT = !1, hT(), MT.k.nt(yT, null))
      }
    }
    let AT = null;

    function CT() {
      return AT
    }

    function jT(TT) {
      return AT = TT, () => {
        AT === TT && (AT = null)
      }
    }
    let vT = !1;

    function tT() {
      const TT = lT.e.get("openInGameMenuName");
      "clientGame" !== TT && (vT = "inventory" === TT), (0, OT.p)() || (0, OT.k)(), (0, KT.p)(KT.c), lT.e.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function hT() {
      QT(!1)
    }

    function NT() {
      QT(vT)
    }

    function QT(TT) {
      "clientGame" === lT.e.get("openInGameMenuName") && lT.e.set({
        openInGameMenuName: TT ? "inventory" : null
      }), TT || (0, OT.k)(), vT = !1
    }
  },
  38359: (TT, kT, cT) => {
    function lT(TT, kT, cT) {
      const lT = new Set,
        MT = new ResizeObserver(cT),
        KT = () => {
          const kT = new Set(document.querySelectorAll(TT));
          let KT = !1;
          for (const TT of lT) kT.has(TT) || (MT.unobserve(TT), lT.delete(TT), KT = !0);
          for (const TT of kT) lT.has(TT) || (MT.observe(TT), OT.observe(TT, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), lT.add(TT));
          KT && cT()
        },
        OT = new MutationObserver((kT => {
          kT.some((TT => "attributes" === TT.type)) && cT(), kT.some((kT => function(TT, kT, cT) {
            if ("childList" !== TT.type) return !1;
            for (const lT of TT.addedNodes)
              if (lT instanceof Element && (lT.matches(kT) || lT.querySelector(kT))) return !0;
            for (const lT of TT.removedNodes)
              if (lT instanceof Element)
                for (const TT of cT)
                  if (lT.contains(TT)) return !0;
            return !1
          }(kT, TT, lT))) && KT()
        }));
      OT.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const yT of kT) MT.observe(yT);
      return window.addEventListener("resize", cT), KT(), cT(), () => {
        MT.disconnect(), OT.disconnect(), window.removeEventListener("resize", cT)
      }
    }
    cT.d(kT, {
      b: () => lT
    })
  },
  8911: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => yT,
      f: () => fT
    });
    var lT = cT(31),
      MT = cT(1327),
      KT = cT(118);
    const OT = {
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

    function yT() {
      return (0, KT.isMobile)() && "function" === typeof navigator.vibrate
    }
    const fT = new class {
      constructor(TT) {
        this.deps = TT, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(TT, kT) {
        var cT;
        if (!this.deps.enabled()) return;
        const lT = OT[TT],
          MT = null !== kT && void 0 !== kT ? kT : lT.pattern;
        if (null === MT) return void console.warn("No vibration pattern for", TT);
        const KT = this.deps.now();
        KT - this.lastAnyAt < 40 && lT.priority < this.playingPriority || KT - (null !== (cT = this.lastAt.get(TT)) && void 0 !== cT ? cT : -1 / 0) < lT.minGapMs || KT < this.playingUntil && lT.priority < this.playingPriority || (this.lastAt.set(TT, KT), this.lastAnyAt = KT, this.playingUntil = KT + MT.reduce(((TT, kT) => TT + kT), 0), this.playingPriority = lT.priority, this.deps.vibrate(MT))
      }
    }({
      vibrate: TT => {
        navigator.vibrate([...TT])
      },
      now: () => performance.now(),
      enabled: () => yT() && lT.e.get("isTouchScreen") && lT.e.get("clientEscMenuOptions").vibration && !(0, MT.e)()
    })
  },
  36971: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => yT,
      g: () => OT
    });
    var lT = cT(36955),
      MT = cT(339),
      KT = cT(1915);

    function OT(TT) {
      if ("vM" in TT) return FT.createAnimationScript(TT);
      return new xT(TT).createAnimationScript()
    }

    function yT(TT, kT, cT, MT) {
      const KT = TT.vM <= 0 ? 1 : kT + cT * Math.max(0, MT) / TT.vM;
      return TT.tM === lT.k.LoopOnLastFrame ? KT % 1 : TT.tM === lT.k.NoLoop && KT >= 1 ? null : Math.min(1, KT)
    }
    class fT {
      createAnimationScript(TT) {
        const {
          vM: kT,
          loop: cT,
          hM: lT
        } = TT;
        return {
          vM: Math.round(kT),
          tM: this.createLoopMode(null !== cT && void 0 !== cT && cT),
          hM: this.createNodeSkeletonAnimationScript(null !== lT && void 0 !== lT ? lT : null)
        }
      }
      createLoopMode(TT) {
        switch (TT) {
          case !1:
            return lT.k.NoLoop;
          case !0:
            return lT.k.LoopOnLastFrame;
          case "hold-on-last-frame":
            return lT.k.HoldOnLastFrame
        }
        throw new Error(`Invalid loop mode schema: ${TT}`)
      }
      createNodeSkeletonAnimationScript(TT) {
        if (null === TT) return null;
        const kT = {};
        for (const cT in TT) {
          const lT = TT[cT];
          kT[cT] = this.createNodeAnimationScript(lT)
        }
        return kT
      }
      createNodeAnimationScript(TT) {
        const {
          timeline: kT
        } = TT, cT = kT.filter((TT => Number.isFinite(TT.timeFraction)));
        return cT.sort(((TT, kT) => TT.timeFraction - kT.timeFraction)), {
          rotation: this.createTimelineFromKeyframes(cT, "rotation", CT),
          position: this.createTimelineFromKeyframes(cT, "position", vT)
        }
      }
      createTimelineFromKeyframes(TT, kT, cT) {
        const lT = [];
        for (const fT of TT) {
          const TT = fT[kT];
          if (TT) {
            const kT = this.createAnimationFrameWithoutPrecomputes(fT.timeFraction, TT);
            IT(kT) && lT.push(kT)
          }
        }
        const MT = [];
        for (let fT = 0; fT < lT.length; fT++) {
          var KT, OT, yT;
          const TT = lT[fT],
            kT = null !== (KT = lT[fT - 1]) && void 0 !== KT ? KT : TT,
            xT = null !== (OT = lT[fT + 1]) && void 0 !== OT ? OT : TT,
            IT = null !== (yT = lT[fT + 2]) && void 0 !== yT ? yT : xT;
          MT.push({
            ...TT,
            ...cT(kT.post, kT.timeFraction, TT.post, TT.timeFraction, xT.pre, xT.timeFraction, IT.pre, IT.timeFraction)
          })
        }
        return MT
      }
      createAnimationFrameWithoutPrecomputes(TT, kT) {
        let cT, lT, MT = null;
        var KT;
        if ("object" === typeof kT && "point" in kT) MT = null !== (KT = kT.SM) && void 0 !== KT ? KT : null, cT = kT.point, lT = kT.point;
        else if ("object" === typeof kT && "pre" in kT) {
          var OT;
          MT = null !== (OT = kT.SM) && void 0 !== OT ? OT : null, cT = kT.pre, lT = kT.post
        } else cT = kT, lT = kT;
        return {
          timeFraction: TT,
          SM: this.createLerpMode(MT),
          pre: cT,
          post: lT
        }
      }
      createLerpMode(TT) {
        return null === TT ? lT.j.Linear : fT.LERP_MODE_SCHEMA_MAPPING[TT]
      }
    }
    fT.LERP_MODE_SCHEMA_MAPPING = {
      linear: lT.j.Linear,
      "catmull-rom-spline": lT.j.CatmullRomSpline
    };
    class xT {
      constructor(TT) {
        this.animationSchema = TT
      }
      createAnimationScript() {
        const {
          animation_length: TT,
          loop: kT,
          bones: cT
        } = this.animationSchema;
        return {
          vM: Math.round(1e3 * TT),
          tM: this.createLoopMode(null !== kT && void 0 !== kT && kT),
          hM: this.createNodeSkeletonAnimationScript(null !== cT && void 0 !== cT ? cT : null)
        }
      }
      createLoopMode(TT) {
        switch (TT) {
          case !1:
            return lT.k.NoLoop;
          case !0:
            return lT.k.LoopOnLastFrame;
          case "hold_on_last_frame":
            return lT.k.HoldOnLastFrame
        }
        throw new Error(`Invalid Blockbench loop mode schema: ${TT}`)
      }
      createNodeSkeletonAnimationScript(TT) {
        if (null === TT) return null;
        const kT = {};
        for (const cT in TT) {
          const lT = TT[cT];
          kT[cT] = this.createNodeAnimationScript(lT)
        }
        return kT
      }
      createNodeAnimationScript(TT) {
        const {
          rotation: kT,
          position: cT
        } = TT;
        return {
          rotation: this.createAnimationTimeline(null !== kT && void 0 !== kT ? kT : null, hT, CT, !0),
          position: this.createAnimationTimeline(null !== cT && void 0 !== cT ? cT : null, QT, vT, !1)
        }
      }
      createAnimationTimeline(TT, kT, cT, lT) {
        if (null === TT) return [];
        if (Array.isArray(TT)) {
          TT = {
            "0.0": TT
          }
        }
        const MT = Object.entries(TT).map((TT => {
          let [cT, lT] = TT;
          const MT = Number(cT) / this.animationSchema.animation_length;
          return this.createAnimationFrameWithoutPrecomputes(MT, lT, kT)
        })).filter(IT);
        MT.sort(((TT, kT) => TT.timeFraction - kT.timeFraction)), lT && function(TT) {
          for (let kT = 1; kT < TT.length; kT++) {
            const cT = TT[kT - 1].post,
              lT = TT[kT],
              MT = ST(lT.pre),
              KT = ST(lT.post),
              OT = aT(cT, lT.pre);
            aT(cT, MT) < OT && (TT[kT] = {
              ...lT,
              pre: MT,
              post: KT
            })
          }
        }(MT);
        const KT = [];
        for (let xT = 0; xT < MT.length; xT++) {
          var OT, yT, fT;
          const TT = MT[xT],
            kT = null !== (OT = MT[xT - 1]) && void 0 !== OT ? OT : TT,
            lT = null !== (yT = MT[xT + 1]) && void 0 !== yT ? yT : TT,
            IT = null !== (fT = MT[xT + 2]) && void 0 !== fT ? fT : lT;
          KT.push({
            ...TT,
            ...cT(kT.post, kT.timeFraction, TT.post, TT.timeFraction, lT.pre, lT.timeFraction, IT.pre, IT.timeFraction)
          })
        }
        return KT
      }
      createAnimationFrameWithoutPrecomputes(TT, kT, cT) {
        let lT, MT, KT = null;
        if ("object" === typeof kT && "post" in kT) {
          var OT;
          KT = null !== (OT = kT.lerp_mode) && void 0 !== OT ? OT : null, MT = tT(kT.post, cT), lT = kT.pre ? tT(kT.pre, cT) : MT
        } else {
          const TT = tT(kT, cT);
          MT = TT, lT = TT
        }
        return {
          timeFraction: TT,
          SM: this.createLerpMode(KT),
          pre: lT,
          post: MT
        }
      }
      createLerpMode(TT) {
        return null === TT ? lT.j.Linear : xT.LERP_MODE_SCHEMA_MAPPING[TT]
      }
    }

    function IT(TT) {
      return Number.isFinite(TT.timeFraction) && AT(TT.pre) && AT(TT.post)
    }

    function AT(TT) {
      return Number.isFinite(TT[0]) && Number.isFinite(TT[1]) && Number.isFinite(TT[2])
    }

    function CT(TT, kT, cT, lT, MT, KT, OT, yT) {
      const fT = KT - kT,
        xT = KT - lT,
        IT = yT - lT,
        AT = [null, null, null];
      for (let CT = 0; CT < AT.length; CT++) AT[CT] = jT(TT[CT], cT[CT], MT[CT], OT[CT], fT, IT);
      return {
        DM: xT,
        aM: AT
      }
    }

    function jT(TT, kT, cT, lT, KT, OT) {
      return {
        rM: MT.d.computeShortestRotation(TT, cT) / KT,
        PM: MT.d.computeShortestRotation(kT, lT) / OT,
        delta: MT.d.computeShortestRotation(kT, cT)
      }
    }

    function vT(TT, kT, cT, lT, MT, KT, OT, yT) {
      const fT = KT - kT,
        xT = KT - lT,
        IT = yT - lT,
        AT = [null, null, null];
      for (let CT = 0; CT < AT.length; CT++) AT[CT] = {
        rM: (MT[CT] - TT[CT]) / fT,
        PM: (OT[CT] - cT[CT]) / IT,
        delta: MT[CT] - cT[CT]
      };
      return {
        DM: xT,
        aM: AT
      }
    }

    function tT(TT, kT) {
      return null === kT ? TT : kT(TT)
    }

    function hT(TT) {
      const [kT, cT, lT] = TT, OT = -(0, KT.k)(kT), yT = -(0, KT.k)(cT), fT = (0, KT.k)(lT), xT = MT.d.quaternionFromEulerZYX(OT, yT, fT);
      return MT.d.eulerYXZFromQuaternion(xT)
    }
    xT.LERP_MODE_SCHEMA_MAPPING = {
      linear: lT.j.Linear,
      catmullrom: lT.j.CatmullRomSpline
    };
    const NT = 1 / 16;

    function QT(TT) {
      return [-TT[0] * NT, TT[1] * NT, TT[2] * NT]
    }

    function ST(TT) {
      const [kT, cT, lT] = TT;
      return [kT >= 0 ? Math.PI - kT : -Math.PI - kT, DT(cT + Math.PI), DT(lT + Math.PI)]
    }

    function DT(TT) {
      return MT.d.mod(TT + Math.PI, 2 * Math.PI) - Math.PI
    }

    function aT(TT, kT) {
      return Math.abs(MT.d.computeShortestRotation(TT[0], kT[0])) + Math.abs(MT.d.computeShortestRotation(TT[1], kT[1])) + Math.abs(MT.d.computeShortestRotation(TT[2], kT[2]))
    }
    const FT = new fT
  },
  36955: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => OT,
      g: () => KT,
      j: () => lT,
      k: () => MT
    });
    let lT = function(TT) {
        return TT[TT.Linear = 0] = "Linear", TT[TT.CatmullRomSpline = 1] = "CatmullRomSpline", TT
      }({}),
      MT = function(TT) {
        return TT[TT.NoLoop = 0] = "NoLoop", TT[TT.LoopOnLastFrame = 1] = "LoopOnLastFrame", TT[TT.HoldOnLastFrame = 2] = "HoldOnLastFrame", TT
      }({}),
      KT = function(TT) {
        return TT[TT.Movement = 0] = "Movement", TT[TT.Action = 1] = "Action", TT[TT.Emote = 2] = "Emote", TT[TT.Custom = 3] = "Custom", TT
      }({}),
      OT = function(TT) {
        return TT[TT.Start = 0] = "Start", TT[TT.Stop = 1] = "Stop", TT
      }({})
  },
  4813: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => MT,
      f: () => lT,
      h: () => KT,
      j: () => fT,
      m: () => OT
    });
    const lT = ["sine", "triangle", "square", "sawtooth"],
      MT = 55,
      KT = {
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

    function OT(TT) {
      return "string" !== typeof TT ? TT : Object.hasOwn(KT, TT) ? KT[TT] : null
    }

    function yT(TT, kT, cT) {
      return Math.min(cT, Math.max(kT, TT))
    }

    function fT(TT) {
      const kT = yT(TT.durationMs, 10, 500),
        cT = yT(TT.attackMs, 0, kT),
        {
          intonation: MT
        } = TT;
      return {
        waveform: lT.includes(TT.waveform) ? TT.waveform : "sine",
        pitchHz: yT(TT.pitchHz, 20, 4e3),
        glideSemitones: yT(TT.glideSemitones, -24, 24),
        durationMs: kT,
        attackMs: cT,
        releaseMs: yT(TT.releaseMs, 0, kT - cT),
        lowpassHz: null === TT.lowpassHz ? null : yT(TT.lowpassHz, 20, 2e4),
        volume: yT(TT.volume, 0, 2),
        intonation: {
          variationSemitones: yT(MT.variationSemitones, 0, 6),
          declineSemitones: yT(MT.declineSemitones, 0, 12),
          questionRiseSemitones: yT(MT.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: yT(MT.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: yT(TT.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);