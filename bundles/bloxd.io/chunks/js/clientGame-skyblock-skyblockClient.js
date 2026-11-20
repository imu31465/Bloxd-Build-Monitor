export const id = 25;
export const ids = [25];
export const modules = {
  36187: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => uU,
      e: () => CU,
      h: () => jU,
      l: () => GU
    });
    var tU = gU(8982),
      pU = gU(36191),
      EU = gU(36197),
      PU = gU(8340),
      TU = gU(1410),
      qU = gU(56),
      KU = gU(74),
      cU = gU(1090);

    function GU() {
      var UU;
      return (0, TU.h)(pU.e, (0, pU.t)()), (0, cU.jsx)(cU.Fragment, {
        children: null === (UU = (0, pU.t)()) || void 0 === UU ? void 0 : UU.content
      })
    }

    function jU(UU) {
      var RU;
      let {
        show: gU
      } = UU;
      (0, TU.h)(pU.e, (0, pU.t)());
      const KU = null === (RU = (0, pU.t)()) || void 0 === RU ? void 0 : RU.menu;
      return (0, qU.useEffect)((() => {
        var UU;
        gU || (null === KU || void 0 === KU || null === (UU = KU.onClose) || void 0 === UU || UU.call(KU), (0, EU.q)())
      }), [gU, KU]), (0, qU.useEffect)((() => gU ? (0, PU.f)(EU.w, EU.e) : void 0), [gU]), (0, cU.jsx)(tU.d, {
        showing: gU,
        globallyUniqueKey: "clientGameMenu",
        children: null === KU || void 0 === KU ? void 0 : KU.content
      })
    }

    function uU(UU) {
      let {
        placement: RU = "bottom"
      } = UU;
      return (0, cU.jsx)("div", {
        id: `clientGameHud-${RU}`,
        style: {
          display: "contents"
        }
      })
    }

    function CU(UU) {
      let {
        children: RU,
        placement: gU = "bottom"
      } = UU;
      const [tU, pU] = (0, qU.useState)(null);
      return (0, qU.useEffect)((() => {
        pU(document.getElementById(`clientGameHud-${gU}`))
      }), [gU]), tU ? (0, KU.createPortal)(RU, tU) : null
    }
  },
  4487: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => QU,
      e: () => eU
    });
    var tU = gU(1037),
      pU = gU.n(tU),
      EU = gU(56),
      PU = gU(1181),
      TU = gU(4495),
      qU = gU(1777),
      KU = gU(2254),
      cU = gU(4501),
      GU = gU(1090);
    const jU = new WeakMap;
    let uU = 0;

    function CU(UU) {
      let RU = jU.get(UU);
      return void 0 === RU && (RU = uU++, jU.set(UU, RU)), RU
    }

    function hU(UU) {
      let {
        piece: RU
      } = UU;
      return "space" === RU.kind ? (0, GU.jsx)(GU.Fragment, {
        children: RU.text
      }) : (0, GU.jsx)("span", {
        className: "DialogueWord",
        style: {
          "--word-delay": `${RU.delayMs}ms`
        },
        children: (0, GU.jsx)(TU.c, {
          text: "icon" === RU.kind ? `[[${RU.icon}]]` : RU.text
        })
      })
    }

    function QU(UU) {
      let {
        display: RU
      } = UU;
      const {
        selectedLanguage: gU
      } = (0, PU.B)(), tU = (0, EU.useMemo)((() => (0, cU.b)((0, cU.c)(RU).plan.pieces)), [RU, gU.code]);
      return (0, GU.jsxs)("div", {
        className: pU()("Dialogue", {
          DialogueAnimateIn: !1 !== RU.animateIn
        }),
        children: [RU.speakerName && (0, GU.jsx)(qU.e, {
          text: RU.speakerName,
          className: "DialogueSpeaker"
        }), (0, GU.jsx)("p", {
          className: "DialogueLine",
          children: tU.map(((UU, RU) => 1 === UU.length && "space" === UU[0].kind ? UU[0].text : (0, GU.jsx)("span", {
            className: "DialogueGlue",
            children: UU.map(((UU, RU) => (0, GU.jsx)(hU, {
              piece: UU
            }, RU)))
          }, RU)))
        })]
      })
    }
    const eU = (0, EU.memo)((function() {
      const UU = (0, KU.g)("dialogue");
      return (0, GU.jsx)("div", {
        className: "DialogueAnchor",
        "data-camera-keeper": "",
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: UU && (0, GU.jsx)(QU, {
          display: UU
        }, CU(UU))
      })
    }))
  },
  4495: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => TU
    });
    var tU = gU(56),
      pU = gU(299),
      EU = gU(1790),
      PU = gU(1090);

    function TU(UU) {
      let {
        text: RU
      } = UU;
      const gU = [];
      let TU = "";
      return (0, pU.dc)(RU).forEach(((UU, RU) => {
        if ("string" === typeof UU || !(0, EU.f)(UU.icon)) return void(TU += "string" === typeof UU ? UU : UU.icon);
        const pU = Math.max(0, TU.trimEnd().search(/\S{1,12}$/));
        gU.push((0, PU.jsxs)(tU.Fragment, {
          children: [TU.slice(0, pU), (0, PU.jsxs)("span", {
            className: "InlineIconTextGlue",
            children: [TU.slice(pU), (0, PU.jsx)("span", {
              className: "InlineIconTextIcon",
              role: "img",
              "aria-label": UU.icon,
              children: (0, PU.jsx)(EU.c, {
                itemName: UU.icon,
                amount: 0
              })
            })]
          })]
        }, RU)), TU = ""
      })), gU.push(TU), (0, PU.jsx)(PU.Fragment, {
        children: gU
      })
    }
  },
  8982: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => EU
    });
    var tU = gU(4200),
      pU = gU(4206);

    function EU(UU) {
      let {
        children: RU,
        showing: gU,
        globallyUniqueKey: EU,
        alwaysMountChildren: PU = !1,
        doGameplayStartStopOnShow: TU = !0,
        keepsMovement: qU = !1
      } = UU;
      return (0, pU.e)(!0, gU, EU, qU), (0, tU.c)(TU, gU), gU || PU ? RU : null
    }
  },
  4501: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => rU,
      c: () => VU
    });
    var tU = gU(4503),
      pU = gU(299);
    const EU = 120,
      PU = 260,
      TU = 1.15,
      qU = 1.2,
      KU = 2,
      cU = 1.08,
      GU = .8,
      jU = .95,
      uU = 8,
      CU = "[\"')\\]\u300d\u300f\uff09]*",
      hU = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${CU}$`),
      QU = new RegExp(`[?\uff1f]${CU}$`),
      eU = new RegExp(`[!\uff01]${CU}$`),
      WU = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      fU = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      xU = new RegExp(`[${fU}]`),
      mU = new RegExp(`[${fU}]|[^${fU}]+`, "g"),
      IU = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function JU(UU) {
      let RU = 2166136261;
      for (let gU = 0; gU < UU.length; gU++) RU ^= UU.charCodeAt(gU), RU = Math.imul(RU, 16777619);
      return (RU >>> 0) / 4294967295 * 2 - 1
    }

    function wU(UU) {
      var RU;
      if (xU.test(UU)) return 1;
      const gU = UU.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        tU = gU.replace(/[^0-9]/g, "");
      if (tU.length > 0 && !/\p{L}/u.test(gU)) return Math.min(tU.length, 4);
      const pU = null !== (RU = gU.match(IU)) && void 0 !== RU ? RU : [];
      if (0 === pU.length) {
        var EU, PU;
        const UU = null !== (EU = null === (PU = gU.match(/\p{L}/gu)) || void 0 === PU ? void 0 : PU.length) && void 0 !== EU ? EU : 0;
        return 0 === UU ? 0 : Math.min(Math.max(1, Math.round(UU / 2.5)), uU)
      }
      const TU = gU.replace(/[^\p{L}]/gu, ""),
        qU = pU.length > 1 && "e" === pU.at(-1) && TU.endsWith("e") && !TU.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(UU.replace(/[^\p{L}]/gu, ""));
      return Math.min(pU.length - (qU ? 1 : 0), uU)
    }

    function nU(UU) {
      return UU.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function bU(UU) {
      const RU = UU.replace(/[^\p{L}]/gu, "");
      return RU.length >= 2 && RU === RU.toUpperCase() && RU !== RU.toLowerCase()
    }

    function oU(UU, RU) {
      var gU;
      const uU = RU && (0, tU.k)(RU),
        CU = null !== (gU = null === uU || void 0 === uU ? void 0 : uU.syllableMs) && void 0 !== gU ? gU : tU.c,
        fU = function(UU) {
          const RU = [];
          for (const tU of (0, pU.dc)(UU))
            if ("string" === typeof tU)
              for (const UU of tU.split(/(\s+)/)) {
                if ("" === UU) continue;
                if (/^\s+$/.test(UU)) {
                  RU.push({
                    kind: "space",
                    text: UU
                  });
                  continue
                }
                if (!xU.test(UU)) {
                  RU.push({
                    kind: "word",
                    text: UU,
                    delayMs: 0
                  });
                  continue
                }
                let tU = !0;
                for (const pU of null !== (gU = UU.match(mU)) && void 0 !== gU ? gU : []) {
                  var gU;
                  const UU = RU.at(-1);
                  tU || "word" !== (null === UU || void 0 === UU ? void 0 : UU.kind) || xU.test(pU) || /[\p{L}\p{N}]/u.test(pU) ? (tU || RU.push({
                    kind: "space",
                    text: "\u200b"
                  }), RU.push({
                    kind: "word",
                    text: pU,
                    delayMs: 0
                  }), tU = !1) : UU.text += pU
                }
              } else RU.push({
                kind: "icon",
                text: tU.icon,
                delayMs: 0
              });
          return RU
        }(UU),
        IU = [];
      let oU = [];
      for (const tU of fU) "space" !== tU.kind && (oU.push(tU), hU.test(tU.text) && (IU.push(oU), oU = []));
      IU.push(oU);
      const ZU = [];
      let aU = 0;
      for (const tU of IU) {
        var YU, BU;
        const UU = null !== (YU = null === (BU = tU.at(-1)) || void 0 === BU ? void 0 : BU.text) && void 0 !== YU ? YU : "",
          RU = QU.test(UU),
          gU = eU.test(UU),
          pU = tU.map((UU => "word" === UU.kind ? wU(UU.text) : 1)),
          fU = pU.findLastIndex((UU => UU > 0));
        for (const [QU, eU] of tU.entries()) {
          const UU = "word" === eU.kind,
            tU = pU[QU];
          eU.delayMs = aU;
          for (let pU = 0; uU && pU < tU; pU++) {
            const {
              intonation: EU
            } = uU;
            let PU = fU > 0 ? -EU.declineSemitones * (QU / fU) : 0;
            PU += JU(`${nU(eU.text)}|${pU}`) * EU.variationSemitones;
            const hU = Math.min(1, EU.variationSemitones);
            let WU = uU.glideSemitones,
              xU = 1;
            gU && (PU += EU.exclaimLiftSemitones, xU *= TU), RU && QU === fU && (PU += EU.questionRiseSemitones * (tU > 1 ? .5 + .5 * pU / (tU - 1) : 1), pU === tU - 1 && (WU = Math.abs(WU) + EU.questionRiseSemitones / 2)), UU && bU(eU.text) && (PU += KU * hU, xU *= qU), tU > 1 && 0 === pU && (PU += GU * hU, xU *= cU), ZU.push({
              atMs: aU + pU * CU,
              semitones: PU,
              glideSemitones: WU,
              durationMs: pU < tU - 1 ? Math.min(uU.durationMs, CU * jU) : uU.durationMs,
              level: xU
            })
          }
          aU += tU * CU + (hU.test(eU.text) ? PU : WU.test(eU.text) ? EU : 0)
        }
      }
      return {
        pieces: fU.map((UU => "space" === UU.kind ? UU : "icon" === UU.kind ? {
          kind: "icon",
          icon: UU.text,
          delayMs: UU.delayMs
        } : {
          kind: "word",
          text: UU.text,
          delayMs: UU.delayMs
        })),
        blips: ZU
      }
    }
    var ZU = gU(1181),
      aU = gU(1249),
      YU = gU(1802);

    function BU(UU) {
      if ("string" === typeof UU) return UU;
      const RU = aU.g.get().getCurrentLanguageCode();
      return (0, ZU.s)(RU, UU.translationKey, (0, ZU.r)(UU.params, YU.b.shown))
    }

    function VU(UU) {
      const RU = void 0 === UU.voice ? null : (0, tU.n)(UU.voice),
        gU = RU && (0, tU.k)(RU);
      return {
        plan: oU(BU(UU.line), gU),
        synth: gU
      }
    }

    function rU(UU) {
      const RU = [];
      let gU = [];
      for (const [pU, EU] of UU.entries()) {
        var tU;
        "space" === EU.kind && (" " !== EU.text || "icon" !== (null === (tU = UU[pU + 1]) || void 0 === tU ? void 0 : tU.kind)) ? (gU.length > 0 && RU.push(gU), RU.push([EU]), gU = []) : gU.push(EU)
      }
      return gU.length > 0 && RU.push(gU), RU
    }
  },
  8340: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => EU,
      f: () => pU
    });
    let tU = null;
    const pU = function(UU) {
        const RU = {
          cycle: UU,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return tU = RU, () => {
          tU === RU && (tU = null)
        }
      },
      EU = () => {
        var UU;
        return null !== (UU = tU) && void 0 !== UU && UU.canCycle() ? tU.cycle : null
      }
  },
  36197: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => EU,
      e: () => hU,
      g: () => QU,
      j: () => TU,
      n: () => jU,
      q: () => eU,
      r: () => GU,
      t: () => fU,
      w: () => CU,
      x: () => WU
    });
    var tU = gU(21),
      pU = gU(24);
    const EU = "clientGameInventoryButtonsChanged",
      PU = new Map;

    function TU() {
      return [...PU.values()].sort(((UU, RU) => {
        var gU, tU;
        return (null !== (gU = UU.order) && void 0 !== gU ? gU : 0) - (null !== (tU = RU.order) && void 0 !== tU ? tU : 0)
      }))
    }
    let qU = null;

    function KU(UU) {
      qU = UU
    }
    let cU = !1;

    function GU(UU) {
      cU = !0;
      try {
        UU.onClick()
      } finally {
        cU = !1
      }
      UU.panel && "clientGame" === tU.b.get("openInGameMenuName") && KU(UU.id)
    }

    function jU() {
      return cU
    }

    function uU() {
      return TU().filter((UU => UU.panel && !UU.disabled))
    }

    function CU(UU) {
      const RU = uU(),
        gU = RU.findIndex((UU => UU.id === qU));
      return !(gU < 0 || RU.length < 2) && (GU(RU[(gU + UU + RU.length) % RU.length]), !0)
    }

    function hU() {
      return null !== qU && uU().length > 1
    }

    function QU() {
      KU(null)
    }

    function eU() {
      "inventory" !== tU.b.get("openInGameMenuName") && KU(null)
    }

    function WU() {
      const UU = qU;
      return KU(null), UU
    }

    function fU(UU) {
      return PU.set(UU.id, UU), pU.p.yh(EU, TU(), !0), () => {
        PU.get(UU.id) === UU && (PU.delete(UU.id), pU.p.yh(EU, TU()))
      }
    }
  },
  36191: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => TU,
      h: () => QU,
      l: () => eU,
      p: () => jU,
      t: () => KU,
      w: () => hU,
      x: () => uU,
      y: () => cU
    });
    var tU = gU(21),
      pU = gU(24),
      EU = gU(1287),
      PU = gU(36197);
    const TU = "clientGameUiChanged";
    let qU = null;

    function KU() {
      return qU
    }

    function cU(UU, RU) {
      const gU = {
        content: UU,
        menu: RU
      };
      return qU = gU, pU.p.yh(TU, qU, !0), () => {
        qU === gU && (qU = null, CU = !1, QU(), pU.p.yh(TU, null))
      }
    }
    let GU = null;

    function jU() {
      return GU
    }

    function uU(UU) {
      return GU = UU, () => {
        GU === UU && (GU = null)
      }
    }
    let CU = !1;

    function hU() {
      const UU = tU.b.get("openInGameMenuName");
      "clientGame" !== UU && (CU = "inventory" === UU), (0, PU.n)() || (0, PU.g)(), (0, EU.o)(EU.c), tU.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function QU() {
      WU(!1)
    }

    function eU() {
      WU(CU)
    }

    function WU(UU) {
      "clientGame" === tU.b.get("openInGameMenuName") && tU.b.set({
        openInGameMenuName: UU ? "inventory" : null
      }), UU || (0, PU.g)(), CU = !1
    }
  },
  38061: (UU, RU, gU) => {
    function tU(UU, RU, gU) {
      const tU = new Set,
        pU = new ResizeObserver(gU),
        EU = () => {
          const RU = new Set(document.querySelectorAll(UU));
          let EU = !1;
          for (const UU of tU) RU.has(UU) || (pU.unobserve(UU), tU.delete(UU), EU = !0);
          for (const UU of RU) tU.has(UU) || (pU.observe(UU), PU.observe(UU, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), tU.add(UU));
          EU && gU()
        },
        PU = new MutationObserver((RU => {
          RU.some((UU => "attributes" === UU.type)) && gU(), RU.some((RU => function(UU, RU, gU) {
            if ("childList" !== UU.type) return !1;
            for (const tU of UU.addedNodes)
              if (tU instanceof Element && (tU.matches(RU) || tU.querySelector(RU))) return !0;
            for (const tU of UU.removedNodes)
              if (tU instanceof Element)
                for (const UU of gU)
                  if (tU.contains(UU)) return !0;
            return !1
          }(RU, UU, tU))) && EU()
        }));
      PU.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const TU of RU) pU.observe(TU);
      return window.addEventListener("resize", gU), EU(), gU(), () => {
        pU.disconnect(), PU.disconnect(), window.removeEventListener("resize", gU)
      }
    }
    gU.d(RU, {
      b: () => tU
    })
  },
  8512: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => TU,
      d: () => qU
    });
    var tU = gU(21),
      pU = gU(1316),
      EU = gU(96);
    const PU = {
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

    function TU() {
      return (0, EU.isMobile)() && "function" === typeof navigator.vibrate
    }
    const qU = new class {
      constructor(UU) {
        this.deps = UU, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(UU, RU) {
        var gU;
        if (!this.deps.enabled()) return;
        const tU = PU[UU],
          pU = null !== RU && void 0 !== RU ? RU : tU.pattern;
        if (null === pU) return void console.warn("No vibration pattern for", UU);
        const EU = this.deps.now();
        EU - this.lastAnyAt < 40 && tU.priority < this.playingPriority || EU - (null !== (gU = this.lastAt.get(UU)) && void 0 !== gU ? gU : -1 / 0) < tU.minGapMs || EU < this.playingUntil && tU.priority < this.playingPriority || (this.lastAt.set(UU, EU), this.lastAnyAt = EU, this.playingUntil = EU + pU.reduce(((UU, RU) => UU + RU), 0), this.playingPriority = tU.priority, this.deps.vibrate(pU))
      }
    }({
      vibrate: UU => {
        navigator.vibrate([...UU])
      },
      now: () => performance.now(),
      enabled: () => TU() && tU.b.get("isTouchScreen") && tU.b.get("clientEscMenuOptions").vibration && !(0, pU.h)()
    })
  },
  36664: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => TU,
      f: () => PU
    });
    var tU = gU(36651),
      pU = gU(311),
      EU = gU(1771);

    function PU(UU) {
      if ("xE" in UU) return IU.createAnimationScript(UU);
      return new KU(UU).createAnimationScript()
    }

    function TU(UU, RU, gU, pU) {
      const EU = UU.xE <= 0 ? 1 : RU + gU * Math.max(0, pU) / UU.xE;
      return UU.mE === tU.k.LoopOnLastFrame ? EU % 1 : UU.mE === tU.k.NoLoop && EU >= 1 ? null : Math.min(1, EU)
    }
    class qU {
      createAnimationScript(UU) {
        const {
          xE: RU,
          loop: gU,
          IE: tU
        } = UU;
        return {
          xE: Math.round(RU),
          mE: this.createLoopMode(null !== gU && void 0 !== gU && gU),
          IE: this.createNodeSkeletonAnimationScript(null !== tU && void 0 !== tU ? tU : null)
        }
      }
      createLoopMode(UU) {
        switch (UU) {
          case !1:
            return tU.k.NoLoop;
          case !0:
            return tU.k.LoopOnLastFrame;
          case "hold-on-last-frame":
            return tU.k.HoldOnLastFrame
        }
        throw new Error(`Invalid loop mode schema: ${UU}`)
      }
      createNodeSkeletonAnimationScript(UU) {
        if (null === UU) return null;
        const RU = {};
        for (const gU in UU) {
          const tU = UU[gU];
          RU[gU] = this.createNodeAnimationScript(tU)
        }
        return RU
      }
      createNodeAnimationScript(UU) {
        const {
          timeline: RU
        } = UU, gU = RU.filter((UU => Number.isFinite(UU.timeFraction)));
        return gU.sort(((UU, RU) => UU.timeFraction - RU.timeFraction)), {
          rotation: this.createTimelineFromKeyframes(gU, "rotation", jU),
          position: this.createTimelineFromKeyframes(gU, "position", CU)
        }
      }
      createTimelineFromKeyframes(UU, RU, gU) {
        const tU = [];
        for (const qU of UU) {
          const UU = qU[RU];
          if (UU) {
            const RU = this.createAnimationFrameWithoutPrecomputes(qU.timeFraction, UU);
            cU(RU) && tU.push(RU)
          }
        }
        const pU = [];
        for (let qU = 0; qU < tU.length; qU++) {
          var EU, PU, TU;
          const UU = tU[qU],
            RU = null !== (EU = tU[qU - 1]) && void 0 !== EU ? EU : UU,
            KU = null !== (PU = tU[qU + 1]) && void 0 !== PU ? PU : UU,
            cU = null !== (TU = tU[qU + 2]) && void 0 !== TU ? TU : KU;
          pU.push({
            ...UU,
            ...gU(RU.post, RU.timeFraction, UU.post, UU.timeFraction, KU.pre, KU.timeFraction, cU.pre, cU.timeFraction)
          })
        }
        return pU
      }
      createAnimationFrameWithoutPrecomputes(UU, RU) {
        let gU, tU, pU = null;
        var EU;
        if ("object" === typeof RU && "point" in RU) pU = null !== (EU = RU.nE) && void 0 !== EU ? EU : null, gU = RU.point, tU = RU.point;
        else if ("object" === typeof RU && "pre" in RU) {
          var PU;
          pU = null !== (PU = RU.nE) && void 0 !== PU ? PU : null, gU = RU.pre, tU = RU.post
        } else gU = RU, tU = RU;
        return {
          timeFraction: UU,
          nE: this.createLerpMode(pU),
          pre: gU,
          post: tU
        }
      }
      createLerpMode(UU) {
        return null === UU ? tU.h.Linear : qU.LERP_MODE_SCHEMA_MAPPING[UU]
      }
    }
    qU.LERP_MODE_SCHEMA_MAPPING = {
      linear: tU.h.Linear,
      "catmull-rom-spline": tU.h.CatmullRomSpline
    };
    class KU {
      constructor(UU) {
        this.animationSchema = UU
      }
      createAnimationScript() {
        const {
          animation_length: UU,
          loop: RU,
          bones: gU
        } = this.animationSchema;
        return {
          xE: Math.round(1e3 * UU),
          mE: this.createLoopMode(null !== RU && void 0 !== RU && RU),
          IE: this.createNodeSkeletonAnimationScript(null !== gU && void 0 !== gU ? gU : null)
        }
      }
      createLoopMode(UU) {
        switch (UU) {
          case !1:
            return tU.k.NoLoop;
          case !0:
            return tU.k.LoopOnLastFrame;
          case "hold_on_last_frame":
            return tU.k.HoldOnLastFrame
        }
        throw new Error(`Invalid Blockbench loop mode schema: ${UU}`)
      }
      createNodeSkeletonAnimationScript(UU) {
        if (null === UU) return null;
        const RU = {};
        for (const gU in UU) {
          const tU = UU[gU];
          RU[gU] = this.createNodeAnimationScript(tU)
        }
        return RU
      }
      createNodeAnimationScript(UU) {
        const {
          rotation: RU,
          position: gU
        } = UU;
        return {
          rotation: this.createAnimationTimeline(null !== RU && void 0 !== RU ? RU : null, QU, jU, !0),
          position: this.createAnimationTimeline(null !== gU && void 0 !== gU ? gU : null, WU, CU, !1)
        }
      }
      createAnimationTimeline(UU, RU, gU, tU) {
        if (null === UU) return [];
        if (Array.isArray(UU)) {
          UU = {
            "0.0": UU
          }
        }
        const pU = Object.entries(UU).map((UU => {
          let [gU, tU] = UU;
          const pU = Number(gU) / this.animationSchema.animation_length;
          return this.createAnimationFrameWithoutPrecomputes(pU, tU, RU)
        })).filter(cU);
        pU.sort(((UU, RU) => UU.timeFraction - RU.timeFraction)), tU && function(UU) {
          for (let RU = 1; RU < UU.length; RU++) {
            const gU = UU[RU - 1].post,
              tU = UU[RU],
              pU = fU(tU.pre),
              EU = fU(tU.post),
              PU = mU(gU, tU.pre);
            mU(gU, pU) < PU && (UU[RU] = {
              ...tU,
              pre: pU,
              post: EU
            })
          }
        }(pU);
        const EU = [];
        for (let KU = 0; KU < pU.length; KU++) {
          var PU, TU, qU;
          const UU = pU[KU],
            RU = null !== (PU = pU[KU - 1]) && void 0 !== PU ? PU : UU,
            tU = null !== (TU = pU[KU + 1]) && void 0 !== TU ? TU : UU,
            cU = null !== (qU = pU[KU + 2]) && void 0 !== qU ? qU : tU;
          EU.push({
            ...UU,
            ...gU(RU.post, RU.timeFraction, UU.post, UU.timeFraction, tU.pre, tU.timeFraction, cU.pre, cU.timeFraction)
          })
        }
        return EU
      }
      createAnimationFrameWithoutPrecomputes(UU, RU, gU) {
        let tU, pU, EU = null;
        if ("object" === typeof RU && "post" in RU) {
          var PU;
          EU = null !== (PU = RU.lerp_mode) && void 0 !== PU ? PU : null, pU = hU(RU.post, gU), tU = RU.pre ? hU(RU.pre, gU) : pU
        } else {
          const UU = hU(RU, gU);
          pU = UU, tU = UU
        }
        return {
          timeFraction: UU,
          nE: this.createLerpMode(EU),
          pre: tU,
          post: pU
        }
      }
      createLerpMode(UU) {
        return null === UU ? tU.h.Linear : KU.LERP_MODE_SCHEMA_MAPPING[UU]
      }
    }

    function cU(UU) {
      return Number.isFinite(UU.timeFraction) && GU(UU.pre) && GU(UU.post)
    }

    function GU(UU) {
      return Number.isFinite(UU[0]) && Number.isFinite(UU[1]) && Number.isFinite(UU[2])
    }

    function jU(UU, RU, gU, tU, pU, EU, PU, TU) {
      const qU = EU - RU,
        KU = EU - tU,
        cU = TU - tU,
        GU = [null, null, null];
      for (let jU = 0; jU < GU.length; jU++) GU[jU] = uU(UU[jU], gU[jU], pU[jU], PU[jU], qU, cU);
      return {
        bE: KU,
        oE: GU
      }
    }

    function uU(UU, RU, gU, tU, EU, PU) {
      return {
        aE: pU.c.computeShortestRotation(UU, gU) / EU,
        YE: pU.c.computeShortestRotation(RU, tU) / PU,
        delta: pU.c.computeShortestRotation(RU, gU)
      }
    }

    function CU(UU, RU, gU, tU, pU, EU, PU, TU) {
      const qU = EU - RU,
        KU = EU - tU,
        cU = TU - tU,
        GU = [null, null, null];
      for (let jU = 0; jU < GU.length; jU++) GU[jU] = {
        aE: (pU[jU] - UU[jU]) / qU,
        YE: (PU[jU] - gU[jU]) / cU,
        delta: pU[jU] - gU[jU]
      };
      return {
        bE: KU,
        oE: GU
      }
    }

    function hU(UU, RU) {
      return null === RU ? UU : RU(UU)
    }

    function QU(UU) {
      const [RU, gU, tU] = UU, PU = -(0, EU.j)(RU), TU = -(0, EU.j)(gU), qU = (0, EU.j)(tU), KU = pU.c.quaternionFromEulerZYX(PU, TU, qU);
      return pU.c.eulerYXZFromQuaternion(KU)
    }
    KU.LERP_MODE_SCHEMA_MAPPING = {
      linear: tU.h.Linear,
      catmullrom: tU.h.CatmullRomSpline
    };
    const eU = 1 / 16;

    function WU(UU) {
      return [-UU[0] * eU, UU[1] * eU, UU[2] * eU]
    }

    function fU(UU) {
      const [RU, gU, tU] = UU;
      return [RU >= 0 ? Math.PI - RU : -Math.PI - RU, xU(gU + Math.PI), xU(tU + Math.PI)]
    }

    function xU(UU) {
      return pU.c.mod(UU + Math.PI, 2 * Math.PI) - Math.PI
    }

    function mU(UU, RU) {
      return Math.abs(pU.c.computeShortestRotation(UU[0], RU[0])) + Math.abs(pU.c.computeShortestRotation(UU[1], RU[1])) + Math.abs(pU.c.computeShortestRotation(UU[2], RU[2]))
    }
    const IU = new qU
  },
  36651: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => PU,
      f: () => EU,
      h: () => tU,
      k: () => pU
    });
    let tU = function(UU) {
        return UU[UU.Linear = 0] = "Linear", UU[UU.CatmullRomSpline = 1] = "CatmullRomSpline", UU
      }({}),
      pU = function(UU) {
        return UU[UU.NoLoop = 0] = "NoLoop", UU[UU.LoopOnLastFrame = 1] = "LoopOnLastFrame", UU[UU.HoldOnLastFrame = 2] = "HoldOnLastFrame", UU
      }({}),
      EU = function(UU) {
        return UU[UU.Movement = 0] = "Movement", UU[UU.Action = 1] = "Action", UU[UU.Emote = 2] = "Emote", UU[UU.Custom = 3] = "Custom", UU
      }({}),
      PU = function(UU) {
        return UU[UU.Start = 0] = "Start", UU[UU.Stop = 1] = "Stop", UU
      }({})
  },
  4503: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => pU,
      f: () => tU,
      j: () => EU,
      k: () => qU,
      n: () => PU
    });
    const tU = ["sine", "triangle", "square", "sawtooth"],
      pU = 55,
      EU = {
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

    function PU(UU) {
      return "string" !== typeof UU ? UU : Object.hasOwn(EU, UU) ? EU[UU] : null
    }

    function TU(UU, RU, gU) {
      return Math.min(gU, Math.max(RU, UU))
    }

    function qU(UU) {
      const RU = TU(UU.durationMs, 10, 500),
        gU = TU(UU.attackMs, 0, RU),
        {
          intonation: pU
        } = UU;
      return {
        waveform: tU.includes(UU.waveform) ? UU.waveform : "sine",
        pitchHz: TU(UU.pitchHz, 20, 4e3),
        glideSemitones: TU(UU.glideSemitones, -24, 24),
        durationMs: RU,
        attackMs: gU,
        releaseMs: TU(UU.releaseMs, 0, RU - gU),
        lowpassHz: null === UU.lowpassHz ? null : TU(UU.lowpassHz, 20, 2e4),
        volume: TU(UU.volume, 0, 2),
        intonation: {
          variationSemitones: TU(pU.variationSemitones, 0, 6),
          declineSemitones: TU(pU.declineSemitones, 0, 12),
          questionRiseSemitones: TU(pU.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: TU(pU.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: TU(UU.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);