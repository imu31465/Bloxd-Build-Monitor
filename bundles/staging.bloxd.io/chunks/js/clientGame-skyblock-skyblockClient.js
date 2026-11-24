export const id = 25;
export const ids = [25];
export const modules = {
  36616: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => aS,
      g: () => KS,
      j: () => kS,
      k: () => fS
    });
    var tS = gS(34223),
      bS = gS(36624),
      XS = gS(36632),
      xS = gS(8920),
      NS = gS(1522),
      qS = gS(64),
      uS = gS(77),
      IS = gS(1181);

    function fS() {
      var SS;
      return (0, NS.i)(bS.e, (0, bS.s)()), (0, IS.jsx)(IS.Fragment, {
        children: null === (SS = (0, bS.s)()) || void 0 === SS ? void 0 : SS.content
      })
    }

    function kS(SS) {
      var HS;
      let {
        show: gS
      } = SS;
      (0, NS.i)(bS.e, (0, bS.s)());
      const uS = null === (HS = (0, bS.s)()) || void 0 === HS ? void 0 : HS.menu;
      return (0, qS.useEffect)((() => {
        var SS;
        gS || (null === uS || void 0 === uS || null === (SS = uS.onClose) || void 0 === SS || SS.call(uS), (0, XS.s)())
      }), [gS, uS]), (0, qS.useEffect)((() => gS ? (0, xS.c)(XS.v, XS.h) : void 0), [gS]), (0, IS.jsx)(tS.b, {
        showing: gS,
        globallyUniqueKey: "clientGameMenu",
        children: null === uS || void 0 === uS ? void 0 : uS.content
      })
    }

    function aS(SS) {
      let {
        placement: HS = "bottom"
      } = SS;
      return (0, IS.jsx)("div", {
        id: `clientGameHud-${HS}`,
        style: {
          display: "contents"
        }
      })
    }

    function KS(SS) {
      let {
        children: HS,
        placement: gS = "bottom"
      } = SS;
      const [tS, bS] = (0, qS.useState)(null);
      return (0, qS.useEffect)((() => {
        bS(document.getElementById(`clientGameHud-${gS}`))
      }), [gS]), tS ? (0, uS.createPortal)(HS, tS) : null
    }
  },
  4967: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => GS,
      f: () => CS
    });
    var tS = gS(1121),
      bS = gS.n(tS),
      XS = gS(64),
      xS = gS(1281),
      NS = gS(4976),
      qS = gS(2031),
      uS = gS(2537),
      IS = gS(4985),
      fS = gS(1181);
    const kS = new WeakMap;
    let aS = 0;

    function KS(SS) {
      let HS = kS.get(SS);
      return void 0 === HS && (HS = aS++, kS.set(SS, HS)), HS
    }

    function jS(SS) {
      let {
        piece: HS
      } = SS;
      return "space" === HS.kind ? (0, fS.jsx)(fS.Fragment, {
        children: HS.text
      }) : (0, fS.jsx)("span", {
        className: "DialogueWord",
        style: {
          "--word-delay": `${HS.delayMs}ms`
        },
        children: (0, fS.jsx)(NS.c, {
          text: "icon" === HS.kind ? `[[${HS.icon}]]` : HS.text
        })
      })
    }

    function GS(SS) {
      let {
        display: HS
      } = SS;
      const {
        selectedLanguage: gS
      } = (0, xS.F)(), tS = (0, XS.useMemo)((() => (0, IS.c)((0, IS.g)(HS).plan.pieces)), [HS, gS.code]);
      return (0, fS.jsxs)("div", {
        className: bS()("Dialogue", {
          DialogueAnimateIn: !1 !== HS.animateIn
        }),
        children: [HS.speakerName && (0, fS.jsx)(qS.c, {
          text: HS.speakerName,
          className: "DialogueSpeaker"
        }), (0, fS.jsx)("p", {
          className: "DialogueLine",
          children: tS.map(((SS, HS) => 1 === SS.length && "space" === SS[0].kind ? SS[0].text : (0, fS.jsx)("span", {
            className: "DialogueGlue",
            children: SS.map(((SS, HS) => (0, fS.jsx)(jS, {
              piece: SS
            }, HS)))
          }, HS)))
        })]
      })
    }
    const CS = (0, XS.memo)((function() {
      const SS = (0, uS.i)("dialogue");
      return (0, fS.jsx)("div", {
        className: "DialogueAnchor",
        "data-camera-keeper": "",
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: SS && (0, fS.jsx)(GS, {
          display: SS
        }, KS(SS))
      })
    }))
  },
  4976: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => NS
    });
    var tS = gS(64),
      bS = gS(369),
      XS = gS(2050),
      xS = gS(1181);

    function NS(SS) {
      let {
        text: HS
      } = SS;
      const gS = [];
      let NS = "";
      return (0, bS.ec)(HS).forEach(((SS, HS) => {
        if ("string" === typeof SS || !(0, XS.g)(SS.icon)) return void(NS += "string" === typeof SS ? SS : SS.icon);
        const bS = Math.max(0, NS.trimEnd().search(/\S{1,12}$/));
        gS.push((0, xS.jsxs)(tS.Fragment, {
          children: [NS.slice(0, bS), (0, xS.jsxs)("span", {
            className: "InlineIconTextGlue",
            children: [NS.slice(bS), (0, xS.jsx)("span", {
              className: "InlineIconTextIcon",
              role: "img",
              "aria-label": SS.icon,
              children: (0, xS.jsx)(XS.e, {
                itemName: SS.icon,
                amount: 0
              })
            })]
          })]
        }, HS)), NS = ""
      })), gS.push(NS), (0, xS.jsx)(xS.Fragment, {
        children: gS
      })
    }
  },
  34223: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => XS
    });
    var tS = gS(4669),
      bS = gS(4675);

    function XS(SS) {
      let {
        children: HS,
        showing: gS,
        globallyUniqueKey: XS,
        alwaysMountChildren: xS = !1,
        doGameplayStartStopOnShow: NS = !0,
        keepsMovement: qS = !1
      } = SS;
      return (0, bS.c)(!0, gS, XS, qS), (0, tS.c)(NS, gS), gS || xS ? HS : null
    }
  },
  4985: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => AS,
      g: () => YS
    });
    var tS = gS(4992),
      bS = gS(369);
    const XS = 120,
      xS = 260,
      NS = 1.15,
      qS = 1.2,
      uS = 2,
      IS = 1.08,
      fS = .8,
      kS = .95,
      aS = 8,
      KS = "[\"')\\]\u300d\u300f\uff09]*",
      jS = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${KS}$`),
      GS = new RegExp(`[?\uff1f]${KS}$`),
      CS = new RegExp(`[!\uff01]${KS}$`),
      nS = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      PS = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      QS = new RegExp(`[${PS}]`),
      DS = new RegExp(`[${PS}]|[^${PS}]+`, "g"),
      wS = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function hS(SS) {
      let HS = 2166136261;
      for (let gS = 0; gS < SS.length; gS++) HS ^= SS.charCodeAt(gS), HS = Math.imul(HS, 16777619);
      return (HS >>> 0) / 4294967295 * 2 - 1
    }

    function ZS(SS) {
      var HS;
      if (QS.test(SS)) return 1;
      const gS = SS.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        tS = gS.replace(/[^0-9]/g, "");
      if (tS.length > 0 && !/\p{L}/u.test(gS)) return Math.min(tS.length, 4);
      const bS = null !== (HS = gS.match(wS)) && void 0 !== HS ? HS : [];
      if (0 === bS.length) {
        var XS, xS;
        const SS = null !== (XS = null === (xS = gS.match(/\p{L}/gu)) || void 0 === xS ? void 0 : xS.length) && void 0 !== XS ? XS : 0;
        return 0 === SS ? 0 : Math.min(Math.max(1, Math.round(SS / 2.5)), aS)
      }
      const NS = gS.replace(/[^\p{L}]/gu, ""),
        qS = bS.length > 1 && "e" === bS.at(-1) && NS.endsWith("e") && !NS.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(SS.replace(/[^\p{L}]/gu, ""));
      return Math.min(bS.length - (qS ? 1 : 0), aS)
    }

    function JS(SS) {
      return SS.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function OS(SS) {
      const HS = SS.replace(/[^\p{L}]/gu, "");
      return HS.length >= 2 && HS === HS.toUpperCase() && HS !== HS.toLowerCase()
    }

    function dS(SS, HS) {
      var gS;
      const aS = HS && (0, tS.j)(HS),
        KS = null !== (gS = null === aS || void 0 === aS ? void 0 : aS.syllableMs) && void 0 !== gS ? gS : tS.d,
        PS = function(SS) {
          const HS = [];
          for (const tS of (0, bS.ec)(SS))
            if ("string" === typeof tS)
              for (const SS of tS.split(/(\s+)/)) {
                if ("" === SS) continue;
                if (/^\s+$/.test(SS)) {
                  HS.push({
                    kind: "space",
                    text: SS
                  });
                  continue
                }
                if (!QS.test(SS)) {
                  HS.push({
                    kind: "word",
                    text: SS,
                    delayMs: 0
                  });
                  continue
                }
                let tS = !0;
                for (const bS of null !== (gS = SS.match(DS)) && void 0 !== gS ? gS : []) {
                  var gS;
                  const SS = HS.at(-1);
                  tS || "word" !== (null === SS || void 0 === SS ? void 0 : SS.kind) || QS.test(bS) || /[\p{L}\p{N}]/u.test(bS) ? (tS || HS.push({
                    kind: "space",
                    text: "\u200b"
                  }), HS.push({
                    kind: "word",
                    text: bS,
                    delayMs: 0
                  }), tS = !1) : SS.text += bS
                }
              } else HS.push({
                kind: "icon",
                text: tS.icon,
                delayMs: 0
              });
          return HS
        }(SS),
        wS = [];
      let dS = [];
      for (const tS of PS) "space" !== tS.kind && (dS.push(tS), jS.test(tS.text) && (wS.push(dS), dS = []));
      wS.push(dS);
      const cS = [];
      let vS = 0;
      for (const tS of wS) {
        var ES, LS;
        const SS = null !== (ES = null === (LS = tS.at(-1)) || void 0 === LS ? void 0 : LS.text) && void 0 !== ES ? ES : "",
          HS = GS.test(SS),
          gS = CS.test(SS),
          bS = tS.map((SS => "word" === SS.kind ? ZS(SS.text) : 1)),
          PS = bS.findLastIndex((SS => SS > 0));
        for (const [GS, CS] of tS.entries()) {
          const SS = "word" === CS.kind,
            tS = bS[GS];
          CS.delayMs = vS;
          for (let bS = 0; aS && bS < tS; bS++) {
            const {
              intonation: XS
            } = aS;
            let xS = PS > 0 ? -XS.declineSemitones * (GS / PS) : 0;
            xS += hS(`${JS(CS.text)}|${bS}`) * XS.variationSemitones;
            const jS = Math.min(1, XS.variationSemitones);
            let nS = aS.glideSemitones,
              QS = 1;
            gS && (xS += XS.exclaimLiftSemitones, QS *= NS), HS && GS === PS && (xS += XS.questionRiseSemitones * (tS > 1 ? .5 + .5 * bS / (tS - 1) : 1), bS === tS - 1 && (nS = Math.abs(nS) + XS.questionRiseSemitones / 2)), SS && OS(CS.text) && (xS += uS * jS, QS *= qS), tS > 1 && 0 === bS && (xS += fS * jS, QS *= IS), cS.push({
              atMs: vS + bS * KS,
              semitones: xS,
              glideSemitones: nS,
              durationMs: bS < tS - 1 ? Math.min(aS.durationMs, KS * kS) : aS.durationMs,
              level: QS
            })
          }
          vS += tS * KS + (jS.test(CS.text) ? xS : nS.test(CS.text) ? XS : 0)
        }
      }
      return {
        pieces: PS.map((SS => "space" === SS.kind ? SS : "icon" === SS.kind ? {
          kind: "icon",
          icon: SS.text,
          delayMs: SS.delayMs
        } : {
          kind: "word",
          text: SS.text,
          delayMs: SS.delayMs
        })),
        blips: cS
      }
    }
    var cS = gS(1281),
      vS = gS(1334),
      ES = gS(2069);

    function LS(SS) {
      if ("string" === typeof SS) return SS;
      const HS = vS.f.get().getCurrentLanguageCode();
      return (0, cS.x)(HS, SS.translationKey, (0, cS.t)(SS.params, ES.c.shown))
    }

    function YS(SS) {
      const HS = void 0 === SS.voice ? null : (0, tS.k)(SS.voice),
        gS = HS && (0, tS.j)(HS);
      return {
        plan: dS(LS(SS.line), gS),
        synth: gS
      }
    }

    function AS(SS) {
      const HS = [];
      let gS = [];
      for (const [bS, XS] of SS.entries()) {
        var tS;
        "space" === XS.kind && (" " !== XS.text || "icon" !== (null === (tS = SS[bS + 1]) || void 0 === tS ? void 0 : tS.kind)) ? (gS.length > 0 && HS.push(gS), HS.push([XS]), gS = []) : gS.push(XS)
      }
      return gS.length > 0 && HS.push(gS), HS
    }
  },
  8920: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => XS,
      c: () => bS
    });
    let tS = null;
    const bS = function(SS) {
        const HS = {
          cycle: SS,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return tS = HS, () => {
          tS === HS && (tS = null)
        }
      },
      XS = () => {
        var SS;
        return null !== (SS = tS) && void 0 !== SS && SS.canCycle() ? tS.cycle : null
      }
  },
  36632: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => XS,
      h: () => jS,
      l: () => GS,
      m: () => NS,
      p: () => kS,
      s: () => CS,
      t: () => fS,
      u: () => PS,
      v: () => KS,
      w: () => nS
    });
    var tS = gS(24),
      bS = gS(31);
    const XS = "clientGameInventoryButtonsChanged",
      xS = new Map;

    function NS() {
      return [...xS.values()].sort(((SS, HS) => {
        var gS, tS;
        return (null !== (gS = SS.order) && void 0 !== gS ? gS : 0) - (null !== (tS = HS.order) && void 0 !== tS ? tS : 0)
      }))
    }
    let qS = null;

    function uS(SS) {
      qS = SS
    }
    let IS = !1;

    function fS(SS) {
      IS = !0;
      try {
        SS.onClick()
      } finally {
        IS = !1
      }
      SS.panel && "clientGame" === tS.b.get("openInGameMenuName") && uS(SS.id)
    }

    function kS() {
      return IS
    }

    function aS() {
      return NS().filter((SS => SS.panel && !SS.disabled))
    }

    function KS(SS) {
      const HS = aS(),
        gS = HS.findIndex((SS => SS.id === qS));
      return !(gS < 0 || HS.length < 2) && (fS(HS[(gS + SS + HS.length) % HS.length]), !0)
    }

    function jS() {
      return null !== qS && aS().length > 1
    }

    function GS() {
      uS(null)
    }

    function CS() {
      "inventory" !== tS.b.get("openInGameMenuName") && uS(null)
    }

    function nS() {
      const SS = qS;
      return uS(null), SS
    }

    function PS(SS) {
      return xS.set(SS.id, SS), bS.k.cj(XS, NS(), !0), () => {
        xS.get(SS.id) === SS && (xS.delete(SS.id), bS.k.cj(XS, NS()))
      }
    }
  },
  36624: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => NS,
      h: () => GS,
      k: () => CS,
      o: () => kS,
      s: () => uS,
      u: () => jS,
      w: () => aS,
      y: () => IS
    });
    var tS = gS(24),
      bS = gS(31),
      XS = gS(1366),
      xS = gS(36632);
    const NS = "clientGameUiChanged";
    let qS = null;

    function uS() {
      return qS
    }

    function IS(SS, HS) {
      const gS = {
        content: SS,
        menu: HS
      };
      return qS = gS, bS.k.cj(NS, qS, !0), () => {
        qS === gS && (qS = null, KS = !1, GS(), bS.k.cj(NS, null))
      }
    }
    let fS = null;

    function kS() {
      return fS
    }

    function aS(SS) {
      return fS = SS, () => {
        fS === SS && (fS = null)
      }
    }
    let KS = !1;

    function jS() {
      const SS = tS.b.get("openInGameMenuName");
      "clientGame" !== SS && (KS = "inventory" === SS), (0, xS.p)() || (0, xS.l)(), (0, XS.u)(XS.d), tS.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function GS() {
      nS(!1)
    }

    function CS() {
      nS(KS)
    }

    function nS(SS) {
      "clientGame" === tS.b.get("openInGameMenuName") && tS.b.set({
        openInGameMenuName: SS ? "inventory" : null
      }), SS || (0, xS.l)(), KS = !1
    }
  },
  38534: (SS, HS, gS) => {
    function tS(SS, HS, gS) {
      const tS = new Set,
        bS = new ResizeObserver(gS),
        XS = () => {
          const HS = new Set(document.querySelectorAll(SS));
          let XS = !1;
          for (const SS of tS) HS.has(SS) || (bS.unobserve(SS), tS.delete(SS), XS = !0);
          for (const SS of HS) tS.has(SS) || (bS.observe(SS), xS.observe(SS, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), tS.add(SS));
          XS && gS()
        },
        xS = new MutationObserver((HS => {
          HS.some((SS => "attributes" === SS.type)) && gS(), HS.some((HS => function(SS, HS, gS) {
            if ("childList" !== SS.type) return !1;
            for (const tS of SS.addedNodes)
              if (tS instanceof Element && (tS.matches(HS) || tS.querySelector(HS))) return !0;
            for (const tS of SS.removedNodes)
              if (tS instanceof Element)
                for (const SS of gS)
                  if (tS.contains(SS)) return !0;
            return !1
          }(HS, SS, tS))) && XS()
        }));
      xS.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const NS of HS) bS.observe(NS);
      return window.addEventListener("resize", gS), XS(), gS(), () => {
        bS.disconnect(), xS.disconnect(), window.removeEventListener("resize", gS)
      }
    }
    gS.d(HS, {
      d: () => tS
    })
  },
  9079: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => NS,
      g: () => qS
    });
    var tS = gS(24),
      bS = gS(1400),
      XS = gS(104);
    const xS = {
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

    function NS() {
      return (0, XS.isMobile)() && "function" === typeof navigator.vibrate
    }
    const qS = new class {
      constructor(SS) {
        this.deps = SS, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(SS, HS) {
        var gS;
        if (!this.deps.enabled()) return;
        const tS = xS[SS],
          bS = null !== HS && void 0 !== HS ? HS : tS.pattern;
        if (null === bS) return void console.warn("No vibration pattern for", SS);
        const XS = this.deps.now();
        XS - this.lastAnyAt < 40 && tS.priority < this.playingPriority || XS - (null !== (gS = this.lastAt.get(SS)) && void 0 !== gS ? gS : -1 / 0) < tS.minGapMs || XS < this.playingUntil && tS.priority < this.playingPriority || (this.lastAt.set(SS, XS), this.lastAnyAt = XS, this.playingUntil = XS + bS.reduce(((SS, HS) => SS + HS), 0), this.playingPriority = tS.priority, this.deps.vibrate(bS))
      }
    }({
      vibrate: SS => {
        navigator.vibrate([...SS])
      },
      now: () => performance.now(),
      enabled: () => NS() && tS.b.get("isTouchScreen") && tS.b.get("clientEscMenuOptions").vibration && !(0, bS.g)()
    })
  },
  37181: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => NS,
      d: () => xS
    });
    var tS = gS(37171),
      bS = gS(387),
      XS = gS(2022);

    function xS(SS) {
      if ("NX" in SS) return wS.createAnimationScript(SS);
      return new uS(SS).createAnimationScript()
    }

    function NS(SS, HS, gS, bS) {
      const XS = SS.NX <= 0 ? 1 : HS + gS * Math.max(0, bS) / SS.NX;
      return SS.qX === tS.m.LoopOnLastFrame ? XS % 1 : SS.qX === tS.m.NoLoop && XS >= 1 ? null : Math.min(1, XS)
    }
    class qS {
      createAnimationScript(SS) {
        const {
          NX: HS,
          loop: gS,
          uX: tS
        } = SS;
        return {
          NX: Math.round(HS),
          qX: this.createLoopMode(null !== gS && void 0 !== gS && gS),
          uX: this.createNodeSkeletonAnimationScript(null !== tS && void 0 !== tS ? tS : null)
        }
      }
      createLoopMode(SS) {
        switch (SS) {
          case !1:
            return tS.m.NoLoop;
          case !0:
            return tS.m.LoopOnLastFrame;
          case "hold-on-last-frame":
            return tS.m.HoldOnLastFrame
        }
        throw new Error(`Invalid loop mode schema: ${SS}`)
      }
      createNodeSkeletonAnimationScript(SS) {
        if (null === SS) return null;
        const HS = {};
        for (const gS in SS) {
          const tS = SS[gS];
          HS[gS] = this.createNodeAnimationScript(tS)
        }
        return HS
      }
      createNodeAnimationScript(SS) {
        const {
          timeline: HS
        } = SS, gS = HS.filter((SS => Number.isFinite(SS.timeFraction)));
        return gS.sort(((SS, HS) => SS.timeFraction - HS.timeFraction)), {
          rotation: this.createTimelineFromKeyframes(gS, "rotation", kS),
          position: this.createTimelineFromKeyframes(gS, "position", KS)
        }
      }
      createTimelineFromKeyframes(SS, HS, gS) {
        const tS = [];
        for (const qS of SS) {
          const SS = qS[HS];
          if (SS) {
            const HS = this.createAnimationFrameWithoutPrecomputes(qS.timeFraction, SS);
            IS(HS) && tS.push(HS)
          }
        }
        const bS = [];
        for (let qS = 0; qS < tS.length; qS++) {
          var XS, xS, NS;
          const SS = tS[qS],
            HS = null !== (XS = tS[qS - 1]) && void 0 !== XS ? XS : SS,
            uS = null !== (xS = tS[qS + 1]) && void 0 !== xS ? xS : SS,
            IS = null !== (NS = tS[qS + 2]) && void 0 !== NS ? NS : uS;
          bS.push({
            ...SS,
            ...gS(HS.post, HS.timeFraction, SS.post, SS.timeFraction, uS.pre, uS.timeFraction, IS.pre, IS.timeFraction)
          })
        }
        return bS
      }
      createAnimationFrameWithoutPrecomputes(SS, HS) {
        let gS, tS, bS = null;
        var XS;
        if ("object" === typeof HS && "point" in HS) bS = null !== (XS = HS.kX) && void 0 !== XS ? XS : null, gS = HS.point, tS = HS.point;
        else if ("object" === typeof HS && "pre" in HS) {
          var xS;
          bS = null !== (xS = HS.kX) && void 0 !== xS ? xS : null, gS = HS.pre, tS = HS.post
        } else gS = HS, tS = HS;
        return {
          timeFraction: SS,
          kX: this.createLerpMode(bS),
          pre: gS,
          post: tS
        }
      }
      createLerpMode(SS) {
        return null === SS ? tS.k.Linear : qS.LERP_MODE_SCHEMA_MAPPING[SS]
      }
    }
    qS.LERP_MODE_SCHEMA_MAPPING = {
      linear: tS.k.Linear,
      "catmull-rom-spline": tS.k.CatmullRomSpline
    };
    class uS {
      constructor(SS) {
        this.animationSchema = SS
      }
      createAnimationScript() {
        const {
          animation_length: SS,
          loop: HS,
          bones: gS
        } = this.animationSchema;
        return {
          NX: Math.round(1e3 * SS),
          qX: this.createLoopMode(null !== HS && void 0 !== HS && HS),
          uX: this.createNodeSkeletonAnimationScript(null !== gS && void 0 !== gS ? gS : null)
        }
      }
      createLoopMode(SS) {
        switch (SS) {
          case !1:
            return tS.m.NoLoop;
          case !0:
            return tS.m.LoopOnLastFrame;
          case "hold_on_last_frame":
            return tS.m.HoldOnLastFrame
        }
        throw new Error(`Invalid Blockbench loop mode schema: ${SS}`)
      }
      createNodeSkeletonAnimationScript(SS) {
        if (null === SS) return null;
        const HS = {};
        for (const gS in SS) {
          const tS = SS[gS];
          HS[gS] = this.createNodeAnimationScript(tS)
        }
        return HS
      }
      createNodeAnimationScript(SS) {
        const {
          rotation: HS,
          position: gS
        } = SS;
        return {
          rotation: this.createAnimationTimeline(null !== HS && void 0 !== HS ? HS : null, GS, kS, !0),
          position: this.createAnimationTimeline(null !== gS && void 0 !== gS ? gS : null, nS, KS, !1)
        }
      }
      createAnimationTimeline(SS, HS, gS, tS) {
        if (null === SS) return [];
        if (Array.isArray(SS)) {
          SS = {
            "0.0": SS
          }
        }
        const bS = Object.entries(SS).map((SS => {
          let [gS, tS] = SS;
          const bS = Number(gS) / this.animationSchema.animation_length;
          return this.createAnimationFrameWithoutPrecomputes(bS, tS, HS)
        })).filter(IS);
        bS.sort(((SS, HS) => SS.timeFraction - HS.timeFraction)), tS && function(SS) {
          for (let HS = 1; HS < SS.length; HS++) {
            const gS = SS[HS - 1].post,
              tS = SS[HS],
              bS = PS(tS.pre),
              XS = PS(tS.post),
              xS = DS(gS, tS.pre);
            DS(gS, bS) < xS && (SS[HS] = {
              ...tS,
              pre: bS,
              post: XS
            })
          }
        }(bS);
        const XS = [];
        for (let uS = 0; uS < bS.length; uS++) {
          var xS, NS, qS;
          const SS = bS[uS],
            HS = null !== (xS = bS[uS - 1]) && void 0 !== xS ? xS : SS,
            tS = null !== (NS = bS[uS + 1]) && void 0 !== NS ? NS : SS,
            IS = null !== (qS = bS[uS + 2]) && void 0 !== qS ? qS : tS;
          XS.push({
            ...SS,
            ...gS(HS.post, HS.timeFraction, SS.post, SS.timeFraction, tS.pre, tS.timeFraction, IS.pre, IS.timeFraction)
          })
        }
        return XS
      }
      createAnimationFrameWithoutPrecomputes(SS, HS, gS) {
        let tS, bS, XS = null;
        if ("object" === typeof HS && "post" in HS) {
          var xS;
          XS = null !== (xS = HS.lerp_mode) && void 0 !== xS ? xS : null, bS = jS(HS.post, gS), tS = HS.pre ? jS(HS.pre, gS) : bS
        } else {
          const SS = jS(HS, gS);
          bS = SS, tS = SS
        }
        return {
          timeFraction: SS,
          kX: this.createLerpMode(XS),
          pre: tS,
          post: bS
        }
      }
      createLerpMode(SS) {
        return null === SS ? tS.k.Linear : uS.LERP_MODE_SCHEMA_MAPPING[SS]
      }
    }

    function IS(SS) {
      return Number.isFinite(SS.timeFraction) && fS(SS.pre) && fS(SS.post)
    }

    function fS(SS) {
      return Number.isFinite(SS[0]) && Number.isFinite(SS[1]) && Number.isFinite(SS[2])
    }

    function kS(SS, HS, gS, tS, bS, XS, xS, NS) {
      const qS = XS - HS,
        uS = XS - tS,
        IS = NS - tS,
        fS = [null, null, null];
      for (let kS = 0; kS < fS.length; kS++) fS[kS] = aS(SS[kS], gS[kS], bS[kS], xS[kS], qS, IS);
      return {
        aX: uS,
        KX: fS
      }
    }

    function aS(SS, HS, gS, tS, XS, xS) {
      return {
        GX: bS.b.computeShortestRotation(SS, gS) / XS,
        CX: bS.b.computeShortestRotation(HS, tS) / xS,
        delta: bS.b.computeShortestRotation(HS, gS)
      }
    }

    function KS(SS, HS, gS, tS, bS, XS, xS, NS) {
      const qS = XS - HS,
        uS = XS - tS,
        IS = NS - tS,
        fS = [null, null, null];
      for (let kS = 0; kS < fS.length; kS++) fS[kS] = {
        GX: (bS[kS] - SS[kS]) / qS,
        CX: (xS[kS] - gS[kS]) / IS,
        delta: bS[kS] - gS[kS]
      };
      return {
        aX: uS,
        KX: fS
      }
    }

    function jS(SS, HS) {
      return null === HS ? SS : HS(SS)
    }

    function GS(SS) {
      const [HS, gS, tS] = SS, xS = -(0, XS.m)(HS), NS = -(0, XS.m)(gS), qS = (0, XS.m)(tS), uS = bS.b.quaternionFromEulerZYX(xS, NS, qS);
      return bS.b.eulerYXZFromQuaternion(uS)
    }
    uS.LERP_MODE_SCHEMA_MAPPING = {
      linear: tS.k.Linear,
      catmullrom: tS.k.CatmullRomSpline
    };
    const CS = 1 / 16;

    function nS(SS) {
      return [-SS[0] * CS, SS[1] * CS, SS[2] * CS]
    }

    function PS(SS) {
      const [HS, gS, tS] = SS;
      return [HS >= 0 ? Math.PI - HS : -Math.PI - HS, QS(gS + Math.PI), QS(tS + Math.PI)]
    }

    function QS(SS) {
      return bS.b.mod(SS + Math.PI, 2 * Math.PI) - Math.PI
    }

    function DS(SS, HS) {
      return Math.abs(bS.b.computeShortestRotation(SS[0], HS[0])) + Math.abs(bS.b.computeShortestRotation(SS[1], HS[1])) + Math.abs(bS.b.computeShortestRotation(SS[2], HS[2]))
    }
    const wS = new qS
  },
  37171: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => xS,
      g: () => XS,
      k: () => tS,
      m: () => bS
    });
    let tS = function(SS) {
        return SS[SS.Linear = 0] = "Linear", SS[SS.CatmullRomSpline = 1] = "CatmullRomSpline", SS
      }({}),
      bS = function(SS) {
        return SS[SS.NoLoop = 0] = "NoLoop", SS[SS.LoopOnLastFrame = 1] = "LoopOnLastFrame", SS[SS.HoldOnLastFrame = 2] = "HoldOnLastFrame", SS
      }({}),
      XS = function(SS) {
        return SS[SS.Movement = 0] = "Movement", SS[SS.Action = 1] = "Action", SS[SS.Emote = 2] = "Emote", SS[SS.Custom = 3] = "Custom", SS
      }({}),
      xS = function(SS) {
        return SS[SS.Start = 0] = "Start", SS[SS.Stop = 1] = "Stop", SS
      }({})
  },
  4992: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => bS,
      e: () => tS,
      g: () => XS,
      j: () => qS,
      k: () => xS
    });
    const tS = ["sine", "triangle", "square", "sawtooth"],
      bS = 55,
      XS = {
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

    function xS(SS) {
      return "string" !== typeof SS ? SS : Object.hasOwn(XS, SS) ? XS[SS] : null
    }

    function NS(SS, HS, gS) {
      return Math.min(gS, Math.max(HS, SS))
    }

    function qS(SS) {
      const HS = NS(SS.durationMs, 10, 500),
        gS = NS(SS.attackMs, 0, HS),
        {
          intonation: bS
        } = SS;
      return {
        waveform: tS.includes(SS.waveform) ? SS.waveform : "sine",
        pitchHz: NS(SS.pitchHz, 20, 4e3),
        glideSemitones: NS(SS.glideSemitones, -24, 24),
        durationMs: HS,
        attackMs: gS,
        releaseMs: NS(SS.releaseMs, 0, HS - gS),
        lowpassHz: null === SS.lowpassHz ? null : NS(SS.lowpassHz, 20, 2e4),
        volume: NS(SS.volume, 0, 2),
        intonation: {
          variationSemitones: NS(bS.variationSemitones, 0, 6),
          declineSemitones: NS(bS.declineSemitones, 0, 12),
          questionRiseSemitones: NS(bS.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: NS(bS.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: NS(SS.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);