export const id = 25;
export const ids = [25];
export const modules = {
  36946: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => QG,
      d: () => KG,
      g: () => fG,
      j: () => pG
    });
    var wG = ZG(34472),
      SG = ZG(36951),
      LG = ZG(36955),
      yG = ZG(8759),
      kG = ZG(1389),
      UG = ZG(51),
      YG = ZG(59),
      VG = ZG(1067);

    function pG() {
      var GG;
      return (0, kG.j)(SG.c, (0, SG.l)()), (0, VG.jsx)(VG.Fragment, {
        children: null === (GG = (0, SG.l)()) || void 0 === GG ? void 0 : GG.content
      })
    }

    function fG(GG) {
      var bG;
      let {
        show: ZG
      } = GG;
      (0, kG.j)(SG.c, (0, SG.l)());
      const YG = null === (bG = (0, SG.l)()) || void 0 === bG ? void 0 : bG.menu;
      return (0, UG.useEffect)((() => {
        var GG;
        ZG || (null === YG || void 0 === YG || null === (GG = YG.onClose) || void 0 === GG || GG.call(YG), (0, LG.m)())
      }), [ZG, YG]), (0, UG.useEffect)((() => ZG ? (0, yG.g)(LG.t, LG.f) : void 0), [ZG]), (0, VG.jsx)(wG.b, {
        showing: ZG,
        globallyUniqueKey: "clientGameMenu",
        children: null === YG || void 0 === YG ? void 0 : YG.content
      })
    }

    function QG(GG) {
      let {
        placement: bG = "bottom"
      } = GG;
      return (0, VG.jsx)("div", {
        id: `clientGameHud-${bG}`,
        style: {
          display: "contents"
        }
      })
    }

    function KG(GG) {
      let {
        children: bG,
        placement: ZG = "bottom"
      } = GG;
      const [wG, SG] = (0, UG.useState)(null);
      return (0, UG.useEffect)((() => {
        SG(document.getElementById(`clientGameHud-${ZG}`))
      }), [ZG]), wG ? (0, YG.createPortal)(bG, wG) : null
    }
  },
  4851: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => dG,
      e: () => JG
    });
    var wG = ZG(1006),
      SG = ZG.n(wG),
      LG = ZG(51),
      yG = ZG(1151),
      kG = ZG(4858),
      UG = ZG(1876),
      YG = ZG(2409),
      VG = ZG(4864),
      pG = ZG(1067);
    const fG = new WeakMap;
    let QG = 0;

    function KG(GG) {
      let bG = fG.get(GG);
      return void 0 === bG && (bG = QG++, fG.set(GG, bG)), bG
    }

    function hG(GG) {
      let {
        piece: bG
      } = GG;
      return "space" === bG.kind ? (0, pG.jsx)(pG.Fragment, {
        children: bG.text
      }) : (0, pG.jsx)("span", {
        className: "DialogueWord",
        style: {
          "--word-delay": `${bG.delayMs}ms`
        },
        children: (0, pG.jsx)(kG.b, {
          text: "icon" === bG.kind ? `[[${bG.icon}]]` : bG.text
        })
      })
    }

    function dG(GG) {
      let {
        display: bG
      } = GG;
      const {
        selectedLanguage: ZG
      } = (0, yG.w)(), wG = (0, LG.useMemo)((() => (0, VG.d)((0, VG.f)(bG).plan.pieces)), [bG, ZG.code]);
      return (0, pG.jsxs)("div", {
        className: SG()("Dialogue", {
          DialogueAnimateIn: !1 !== bG.animateIn
        }),
        children: [bG.speakerName && (0, pG.jsx)(UG.c, {
          text: bG.speakerName,
          className: "DialogueSpeaker"
        }), (0, pG.jsx)("p", {
          className: "DialogueLine",
          children: wG.map(((GG, bG) => 1 === GG.length && "space" === GG[0].kind ? GG[0].text : (0, pG.jsx)("span", {
            className: "DialogueGlue",
            children: GG.map(((GG, bG) => (0, pG.jsx)(hG, {
              piece: GG
            }, bG)))
          }, bG)))
        })]
      })
    }
    const JG = (0, LG.memo)((function() {
      const GG = (0, YG.i)("dialogue");
      return (0, pG.jsx)("div", {
        className: "DialogueAnchor",
        "data-camera-keeper": "",
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: GG && (0, pG.jsx)(dG, {
          display: GG
        }, KG(GG))
      })
    }))
  },
  4858: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => kG
    });
    var wG = ZG(51),
      SG = ZG(333),
      LG = ZG(1889),
      yG = ZG(1067);

    function kG(GG) {
      let {
        text: bG
      } = GG;
      const ZG = [];
      let kG = "";
      return (0, SG.xc)(bG).forEach(((GG, bG) => {
        if ("string" === typeof GG || !(0, LG.e)(GG.icon)) return void(kG += "string" === typeof GG ? GG : GG.icon);
        const SG = Math.max(0, kG.trimEnd().search(/\S{1,12}$/));
        ZG.push((0, yG.jsxs)(wG.Fragment, {
          children: [kG.slice(0, SG), (0, yG.jsxs)("span", {
            className: "InlineIconTextGlue",
            children: [kG.slice(SG), (0, yG.jsx)("span", {
              className: "InlineIconTextIcon",
              role: "img",
              "aria-label": GG.icon,
              children: (0, yG.jsx)(LG.b, {
                itemName: GG.icon,
                amount: 0
              })
            })]
          })]
        }, bG)), kG = ""
      })), ZG.push(kG), (0, yG.jsx)(yG.Fragment, {
        children: ZG
      })
    }
  },
  34472: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => LG
    });
    var wG = ZG(4558),
      SG = ZG(4561);

    function LG(GG) {
      let {
        children: bG,
        showing: ZG,
        globallyUniqueKey: LG,
        alwaysMountChildren: yG = !1,
        doGameplayStartStopOnShow: kG = !0,
        keepsMovement: UG = !1
      } = GG;
      return (0, SG.e)(!0, ZG, LG, UG), (0, wG.d)(kG, ZG), ZG || yG ? bG : null
    }
  },
  4864: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => lG,
      f: () => cG
    });
    var wG = ZG(4871),
      SG = ZG(333);
    const LG = 120,
      yG = 260,
      kG = 1.15,
      UG = 1.2,
      YG = 2,
      VG = 1.08,
      pG = .8,
      fG = .95,
      QG = 8,
      KG = "[\"')\\]\u300d\u300f\uff09]*",
      hG = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${KG}$`),
      dG = new RegExp(`[?\uff1f]${KG}$`),
      JG = new RegExp(`[!\uff01]${KG}$`),
      rG = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      zG = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      EG = new RegExp(`[${zG}]`),
      oG = new RegExp(`[${zG}]|[^${zG}]+`, "g"),
      XG = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function uG(GG) {
      let bG = 2166136261;
      for (let ZG = 0; ZG < GG.length; ZG++) bG ^= GG.charCodeAt(ZG), bG = Math.imul(bG, 16777619);
      return (bG >>> 0) / 4294967295 * 2 - 1
    }

    function iG(GG) {
      var bG;
      if (EG.test(GG)) return 1;
      const ZG = GG.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        wG = ZG.replace(/[^0-9]/g, "");
      if (wG.length > 0 && !/\p{L}/u.test(ZG)) return Math.min(wG.length, 4);
      const SG = null !== (bG = ZG.match(XG)) && void 0 !== bG ? bG : [];
      if (0 === SG.length) {
        var LG, yG;
        const GG = null !== (LG = null === (yG = ZG.match(/\p{L}/gu)) || void 0 === yG ? void 0 : yG.length) && void 0 !== LG ? LG : 0;
        return 0 === GG ? 0 : Math.min(Math.max(1, Math.round(GG / 2.5)), QG)
      }
      const kG = ZG.replace(/[^\p{L}]/gu, ""),
        UG = SG.length > 1 && "e" === SG.at(-1) && kG.endsWith("e") && !kG.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(GG.replace(/[^\p{L}]/gu, ""));
      return Math.min(SG.length - (UG ? 1 : 0), QG)
    }

    function CG(GG) {
      return GG.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function WG(GG) {
      const bG = GG.replace(/[^\p{L}]/gu, "");
      return bG.length >= 2 && bG === bG.toUpperCase() && bG !== bG.toLowerCase()
    }

    function mG(GG, bG) {
      var ZG;
      const QG = bG && (0, wG.i)(bG),
        KG = null !== (ZG = null === QG || void 0 === QG ? void 0 : QG.syllableMs) && void 0 !== ZG ? ZG : wG.d,
        zG = function(GG) {
          const bG = [];
          for (const wG of (0, SG.xc)(GG))
            if ("string" === typeof wG)
              for (const GG of wG.split(/(\s+)/)) {
                if ("" === GG) continue;
                if (/^\s+$/.test(GG)) {
                  bG.push({
                    kind: "space",
                    text: GG
                  });
                  continue
                }
                if (!EG.test(GG)) {
                  bG.push({
                    kind: "word",
                    text: GG,
                    delayMs: 0
                  });
                  continue
                }
                let wG = !0;
                for (const SG of null !== (ZG = GG.match(oG)) && void 0 !== ZG ? ZG : []) {
                  var ZG;
                  const GG = bG.at(-1);
                  wG || "word" !== (null === GG || void 0 === GG ? void 0 : GG.kind) || EG.test(SG) || /[\p{L}\p{N}]/u.test(SG) ? (wG || bG.push({
                    kind: "space",
                    text: "\u200b"
                  }), bG.push({
                    kind: "word",
                    text: SG,
                    delayMs: 0
                  }), wG = !1) : GG.text += SG
                }
              } else bG.push({
                kind: "icon",
                text: wG.icon,
                delayMs: 0
              });
          return bG
        }(GG),
        XG = [];
      let mG = [];
      for (const wG of zG) "space" !== wG.kind && (mG.push(wG), hG.test(wG.text) && (XG.push(mG), mG = []));
      XG.push(mG);
      const IG = [];
      let FG = 0;
      for (const wG of XG) {
        var vG, aG;
        const GG = null !== (vG = null === (aG = wG.at(-1)) || void 0 === aG ? void 0 : aG.text) && void 0 !== vG ? vG : "",
          bG = dG.test(GG),
          ZG = JG.test(GG),
          SG = wG.map((GG => "word" === GG.kind ? iG(GG.text) : 1)),
          zG = SG.findLastIndex((GG => GG > 0));
        for (const [dG, JG] of wG.entries()) {
          const GG = "word" === JG.kind,
            wG = SG[dG];
          JG.delayMs = FG;
          for (let SG = 0; QG && SG < wG; SG++) {
            const {
              intonation: LG
            } = QG;
            let yG = zG > 0 ? -LG.declineSemitones * (dG / zG) : 0;
            yG += uG(`${CG(JG.text)}|${SG}`) * LG.variationSemitones;
            const hG = Math.min(1, LG.variationSemitones);
            let rG = QG.glideSemitones,
              EG = 1;
            ZG && (yG += LG.exclaimLiftSemitones, EG *= kG), bG && dG === zG && (yG += LG.questionRiseSemitones * (wG > 1 ? .5 + .5 * SG / (wG - 1) : 1), SG === wG - 1 && (rG = Math.abs(rG) + LG.questionRiseSemitones / 2)), GG && WG(JG.text) && (yG += YG * hG, EG *= UG), wG > 1 && 0 === SG && (yG += pG * hG, EG *= VG), IG.push({
              atMs: FG + SG * KG,
              semitones: yG,
              glideSemitones: rG,
              durationMs: SG < wG - 1 ? Math.min(QG.durationMs, KG * fG) : QG.durationMs,
              level: EG
            })
          }
          FG += wG * KG + (hG.test(JG.text) ? yG : rG.test(JG.text) ? LG : 0)
        }
      }
      return {
        pieces: zG.map((GG => "space" === GG.kind ? GG : "icon" === GG.kind ? {
          kind: "icon",
          icon: GG.text,
          delayMs: GG.delayMs
        } : {
          kind: "word",
          text: GG.text,
          delayMs: GG.delayMs
        })),
        blips: IG
      }
    }
    var IG = ZG(1151),
      FG = ZG(1204),
      vG = ZG(1903);

    function aG(GG) {
      if ("string" === typeof GG) return GG;
      const bG = FG.d.get().getCurrentLanguageCode();
      return (0, IG.o)(bG, GG.translationKey, (0, IG.k)(GG.params, vG.b.shown))
    }

    function cG(GG) {
      const bG = void 0 === GG.voice ? null : (0, wG.j)(GG.voice),
        ZG = bG && (0, wG.i)(bG);
      return {
        plan: mG(aG(GG.line), ZG),
        synth: ZG
      }
    }

    function lG(GG) {
      const bG = [];
      let ZG = [];
      for (const [SG, LG] of GG.entries()) {
        var wG;
        "space" === LG.kind && (" " !== LG.text || "icon" !== (null === (wG = GG[SG + 1]) || void 0 === wG ? void 0 : wG.kind)) ? (ZG.length > 0 && bG.push(ZG), bG.push([LG]), ZG = []) : ZG.push(LG)
      }
      return ZG.length > 0 && bG.push(ZG), bG
    }
  },
  8759: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => LG,
      g: () => SG
    });
    let wG = null;
    const SG = function(GG) {
        const bG = {
          cycle: GG,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return wG = bG, () => {
          wG === bG && (wG = null)
        }
      },
      LG = () => {
        var GG;
        return null !== (GG = wG) && void 0 !== GG && GG.canCycle() ? wG.cycle : null
      }
  },
  36955: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => LG,
      f: () => hG,
      h: () => dG,
      j: () => kG,
      k: () => fG,
      m: () => JG,
      p: () => pG,
      r: () => zG,
      t: () => KG,
      x: () => rG
    });
    var wG = ZG(17),
      SG = ZG(19);
    const LG = "clientGameInventoryButtonsChanged",
      yG = new Map;

    function kG() {
      return [...yG.values()].sort(((GG, bG) => {
        var ZG, wG;
        return (null !== (ZG = GG.order) && void 0 !== ZG ? ZG : 0) - (null !== (wG = bG.order) && void 0 !== wG ? wG : 0)
      }))
    }
    let UG = null;

    function YG(GG) {
      UG = GG
    }
    let VG = !1;

    function pG(GG) {
      VG = !0;
      try {
        GG.onClick()
      } finally {
        VG = !1
      }
      GG.panel && "clientGame" === wG.e.get("openInGameMenuName") && YG(GG.id)
    }

    function fG() {
      return VG
    }

    function QG() {
      return kG().filter((GG => GG.panel && !GG.disabled))
    }

    function KG(GG) {
      const bG = QG(),
        ZG = bG.findIndex((GG => GG.id === UG));
      return !(ZG < 0 || bG.length < 2) && (pG(bG[(ZG + GG + bG.length) % bG.length]), !0)
    }

    function hG() {
      return null !== UG && QG().length > 1
    }

    function dG() {
      YG(null)
    }

    function JG() {
      "inventory" !== wG.e.get("openInGameMenuName") && YG(null)
    }

    function rG() {
      const GG = UG;
      return YG(null), GG
    }

    function zG(GG) {
      return yG.set(GG.id, GG), SG.l.xh(LG, kG(), !0), () => {
        yG.get(GG.id) === GG && (yG.delete(GG.id), SG.l.xh(LG, kG()))
      }
    }
  },
  36951: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => kG,
      f: () => dG,
      i: () => JG,
      j: () => fG,
      l: () => YG,
      m: () => hG,
      n: () => QG,
      q: () => VG
    });
    var wG = ZG(17),
      SG = ZG(19),
      LG = ZG(1251),
      yG = ZG(36955);
    const kG = "clientGameUiChanged";
    let UG = null;

    function YG() {
      return UG
    }

    function VG(GG, bG) {
      const ZG = {
        content: GG,
        menu: bG
      };
      return UG = ZG, SG.l.xh(kG, UG, !0), () => {
        UG === ZG && (UG = null, KG = !1, dG(), SG.l.xh(kG, null))
      }
    }
    let pG = null;

    function fG() {
      return pG
    }

    function QG(GG) {
      return pG = GG, () => {
        pG === GG && (pG = null)
      }
    }
    let KG = !1;

    function hG() {
      const GG = wG.e.get("openInGameMenuName");
      "clientGame" !== GG && (KG = "inventory" === GG), (0, yG.k)() || (0, yG.h)(), (0, LG.z)(LG.e), wG.e.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function dG() {
      rG(!1)
    }

    function JG() {
      rG(KG)
    }

    function rG(GG) {
      "clientGame" === wG.e.get("openInGameMenuName") && wG.e.set({
        openInGameMenuName: GG ? "inventory" : null
      }), GG || (0, yG.h)(), KG = !1
    }
  },
  38925: (GG, bG, ZG) => {
    function wG(GG, bG, ZG) {
      const wG = new Set,
        SG = new ResizeObserver(ZG),
        LG = () => {
          const bG = new Set(document.querySelectorAll(GG));
          let LG = !1;
          for (const GG of wG) bG.has(GG) || (SG.unobserve(GG), wG.delete(GG), LG = !0);
          for (const GG of bG) wG.has(GG) || (SG.observe(GG), yG.observe(GG, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), wG.add(GG));
          LG && ZG()
        },
        yG = new MutationObserver((bG => {
          bG.some((GG => "attributes" === GG.type)) && ZG(), bG.some((bG => function(GG, bG, ZG) {
            if ("childList" !== GG.type) return !1;
            for (const wG of GG.addedNodes)
              if (wG instanceof Element && (wG.matches(bG) || wG.querySelector(bG))) return !0;
            for (const wG of GG.removedNodes)
              if (wG instanceof Element)
                for (const GG of ZG)
                  if (wG.contains(GG)) return !0;
            return !1
          }(bG, GG, wG))) && LG()
        }));
      yG.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const kG of bG) SG.observe(kG);
      return window.addEventListener("resize", ZG), LG(), ZG(), () => {
        SG.disconnect(), yG.disconnect(), window.removeEventListener("resize", ZG)
      }
    }
    ZG.d(bG, {
      c: () => wG
    })
  },
  8926: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => kG,
      i: () => UG
    });
    var wG = ZG(17),
      SG = ZG(1287),
      LG = ZG(80);
    const yG = {
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

    function kG() {
      return (0, LG.isMobile)() && "function" === typeof navigator.vibrate
    }
    const UG = new class {
      constructor(GG) {
        this.deps = GG, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(GG, bG) {
        var ZG;
        if (!this.deps.enabled()) return;
        const wG = yG[GG],
          SG = null !== bG && void 0 !== bG ? bG : wG.pattern;
        if (null === SG) return void console.warn("No vibration pattern for", GG);
        const LG = this.deps.now();
        LG - this.lastAnyAt < 40 && wG.priority < this.playingPriority || LG - (null !== (ZG = this.lastAt.get(GG)) && void 0 !== ZG ? ZG : -1 / 0) < wG.minGapMs || LG < this.playingUntil && wG.priority < this.playingPriority || (this.lastAt.set(GG, LG), this.lastAnyAt = LG, this.playingUntil = LG + SG.reduce(((GG, bG) => GG + bG), 0), this.playingPriority = wG.priority, this.deps.vibrate(SG))
      }
    }({
      vibrate: GG => {
        navigator.vibrate([...GG])
      },
      now: () => performance.now(),
      enabled: () => kG() && wG.e.get("isTouchScreen") && wG.e.get("clientEscMenuOptions").vibration && !(0, SG.f)()
    })
  },
  4871: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => SG,
      e: () => wG,
      g: () => LG,
      i: () => UG,
      j: () => yG
    });
    const wG = ["sine", "triangle", "square", "sawtooth"],
      SG = 55,
      LG = {
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

    function yG(GG) {
      return "string" !== typeof GG ? GG : Object.hasOwn(LG, GG) ? LG[GG] : null
    }

    function kG(GG, bG, ZG) {
      return Math.min(ZG, Math.max(bG, GG))
    }

    function UG(GG) {
      const bG = kG(GG.durationMs, 10, 500),
        ZG = kG(GG.attackMs, 0, bG),
        {
          intonation: SG
        } = GG;
      return {
        waveform: wG.includes(GG.waveform) ? GG.waveform : "sine",
        pitchHz: kG(GG.pitchHz, 20, 4e3),
        glideSemitones: kG(GG.glideSemitones, -24, 24),
        durationMs: bG,
        attackMs: ZG,
        releaseMs: kG(GG.releaseMs, 0, bG - ZG),
        lowpassHz: null === GG.lowpassHz ? null : kG(GG.lowpassHz, 20, 2e4),
        volume: kG(GG.volume, 0, 2),
        intonation: {
          variationSemitones: kG(SG.variationSemitones, 0, 6),
          declineSemitones: kG(SG.declineSemitones, 0, 12),
          questionRiseSemitones: kG(SG.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: kG(SG.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: kG(GG.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);