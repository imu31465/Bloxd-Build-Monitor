export const id = 25;
export const ids = [25];
export const modules = {
  36577: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => fD,
      g: () => ID,
      i: () => UD,
      l: () => AD
    });
    var pD = wD(34206),
      sD = wD(36580),
      KD = wD(36586),
      rD = wD(8726),
      LD = wD(1442),
      cD = wD(58),
      gD = wD(79),
      RD = wD(1096);

    function AD() {
      var DD;
      return (0, LD.k)(sD.c, (0, sD.p)()), (0, RD.jsx)(RD.Fragment, {
        children: null === (DD = (0, sD.p)()) || void 0 === DD ? void 0 : DD.content
      })
    }

    function UD(DD) {
      var zD;
      let {
        show: wD
      } = DD;
      (0, LD.k)(sD.c, (0, sD.p)());
      const gD = null === (zD = (0, sD.p)()) || void 0 === zD ? void 0 : zD.menu;
      return (0, cD.useEffect)((() => {
        var DD;
        wD || (null === gD || void 0 === gD || null === (DD = gD.onClose) || void 0 === DD || DD.call(gD), (0, KD.q)())
      }), [wD, gD]), (0, cD.useEffect)((() => wD ? (0, rD.g)(KD.y, KD.h) : void 0), [wD]), (0, RD.jsx)(pD.d, {
        showing: wD,
        globallyUniqueKey: "clientGameMenu",
        children: null === gD || void 0 === gD ? void 0 : gD.content
      })
    }

    function fD(DD) {
      let {
        placement: zD = "bottom"
      } = DD;
      return (0, RD.jsx)("div", {
        id: `clientGameHud-${zD}`,
        style: {
          display: "contents"
        }
      })
    }

    function ID(DD) {
      let {
        children: zD,
        placement: wD = "bottom"
      } = DD;
      const [pD, sD] = (0, cD.useState)(null);
      return (0, cD.useEffect)((() => {
        sD(document.getElementById(`clientGameHud-${wD}`))
      }), [wD]), pD ? (0, gD.createPortal)(zD, pD) : null
    }
  },
  4849: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => GD,
      i: () => hD
    });
    var pD = wD(1044),
      sD = wD.n(pD),
      KD = wD(58),
      rD = wD(1200),
      LD = wD(4852),
      cD = wD(1895),
      gD = wD(2402),
      RD = wD(4859),
      AD = wD(1096);
    const UD = new WeakMap;
    let fD = 0;

    function ID(DD) {
      let zD = UD.get(DD);
      return void 0 === zD && (zD = fD++, UD.set(DD, zD)), zD
    }

    function BD(DD) {
      let {
        piece: zD
      } = DD;
      return "space" === zD.kind ? (0, AD.jsx)(AD.Fragment, {
        children: zD.text
      }) : (0, AD.jsx)("span", {
        className: "DialogueWord",
        style: {
          "--word-delay": `${zD.delayMs}ms`
        },
        children: (0, AD.jsx)(LD.d, {
          text: "icon" === zD.kind ? `[[${zD.icon}]]` : zD.text
        })
      })
    }

    function GD(DD) {
      let {
        display: zD
      } = DD;
      const {
        selectedLanguage: wD
      } = (0, rD.E)(), pD = (0, KD.useMemo)((() => (0, RD.d)((0, RD.g)(zD).plan.pieces)), [zD, wD.code]);
      return (0, AD.jsxs)("div", {
        className: sD()("Dialogue", {
          DialogueAnimateIn: !1 !== zD.animateIn
        }),
        children: [zD.speakerName && (0, AD.jsx)(cD.e, {
          text: zD.speakerName,
          className: "DialogueSpeaker"
        }), (0, AD.jsx)("p", {
          className: "DialogueLine",
          children: pD.map(((DD, zD) => 1 === DD.length && "space" === DD[0].kind ? DD[0].text : (0, AD.jsx)("span", {
            className: "DialogueGlue",
            children: DD.map(((DD, zD) => (0, AD.jsx)(BD, {
              piece: DD
            }, zD)))
          }, zD)))
        })]
      })
    }
    const hD = (0, KD.memo)((function() {
      const DD = (0, gD.h)("dialogue");
      return (0, AD.jsx)("div", {
        className: "DialogueAnchor",
        "data-camera-keeper": "",
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: DD && (0, AD.jsx)(GD, {
          display: DD
        }, ID(DD))
      })
    }))
  },
  4852: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => LD
    });
    var pD = wD(58),
      sD = wD(338),
      KD = wD(1915),
      rD = wD(1096);

    function LD(DD) {
      let {
        text: zD
      } = DD;
      const wD = [];
      let LD = "";
      return (0, sD.Vb)(zD).forEach(((DD, zD) => {
        if ("string" === typeof DD || !(0, KD.f)(DD.icon)) return void(LD += "string" === typeof DD ? DD : DD.icon);
        const sD = Math.max(0, LD.trimEnd().search(/\S{1,12}$/));
        wD.push((0, rD.jsxs)(pD.Fragment, {
          children: [LD.slice(0, sD), (0, rD.jsxs)("span", {
            className: "InlineIconTextGlue",
            children: [LD.slice(sD), (0, rD.jsx)("span", {
              className: "InlineIconTextIcon",
              role: "img",
              "aria-label": DD.icon,
              children: (0, rD.jsx)(KD.d, {
                itemName: DD.icon,
                amount: 0
              })
            })]
          })]
        }, zD)), LD = ""
      })), wD.push(LD), (0, rD.jsx)(rD.Fragment, {
        children: wD
      })
    }
  },
  34206: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => KD
    });
    var pD = wD(4555),
      sD = wD(4562);

    function KD(DD) {
      let {
        children: zD,
        showing: wD,
        globallyUniqueKey: KD,
        alwaysMountChildren: rD = !1,
        doGameplayStartStopOnShow: LD = !0,
        keepsMovement: cD = !1
      } = DD;
      return (0, sD.e)(!0, wD, KD, cD), (0, pD.b)(LD, wD), wD || rD ? zD : null
    }
  },
  4859: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => SD,
      g: () => dD
    });
    var pD = wD(4866),
      sD = wD(338);
    const KD = 120,
      rD = 260,
      LD = 1.15,
      cD = 1.2,
      gD = 2,
      RD = 1.08,
      AD = .8,
      UD = .95,
      fD = 8,
      ID = "[\"')\\]\u300d\u300f\uff09]*",
      BD = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${ID}$`),
      GD = new RegExp(`[?\uff1f]${ID}$`),
      hD = new RegExp(`[!\uff01]${ID}$`),
      nD = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      MD = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      OD = new RegExp(`[${MD}]`),
      JD = new RegExp(`[${MD}]|[^${MD}]+`, "g"),
      ED = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function QD(DD) {
      let zD = 2166136261;
      for (let wD = 0; wD < DD.length; wD++) zD ^= DD.charCodeAt(wD), zD = Math.imul(zD, 16777619);
      return (zD >>> 0) / 4294967295 * 2 - 1
    }

    function XD(DD) {
      var zD;
      if (OD.test(DD)) return 1;
      const wD = DD.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        pD = wD.replace(/[^0-9]/g, "");
      if (pD.length > 0 && !/\p{L}/u.test(wD)) return Math.min(pD.length, 4);
      const sD = null !== (zD = wD.match(ED)) && void 0 !== zD ? zD : [];
      if (0 === sD.length) {
        var KD, rD;
        const DD = null !== (KD = null === (rD = wD.match(/\p{L}/gu)) || void 0 === rD ? void 0 : rD.length) && void 0 !== KD ? KD : 0;
        return 0 === DD ? 0 : Math.min(Math.max(1, Math.round(DD / 2.5)), fD)
      }
      const LD = wD.replace(/[^\p{L}]/gu, ""),
        cD = sD.length > 1 && "e" === sD.at(-1) && LD.endsWith("e") && !LD.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(DD.replace(/[^\p{L}]/gu, ""));
      return Math.min(sD.length - (cD ? 1 : 0), fD)
    }

    function VD(DD) {
      return DD.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function PD(DD) {
      const zD = DD.replace(/[^\p{L}]/gu, "");
      return zD.length >= 2 && zD === zD.toUpperCase() && zD !== zD.toLowerCase()
    }

    function CD(DD, zD) {
      var wD;
      const fD = zD && (0, pD.i)(zD),
        ID = null !== (wD = null === fD || void 0 === fD ? void 0 : fD.syllableMs) && void 0 !== wD ? wD : pD.c,
        MD = function(DD) {
          const zD = [];
          for (const pD of (0, sD.Vb)(DD))
            if ("string" === typeof pD)
              for (const DD of pD.split(/(\s+)/)) {
                if ("" === DD) continue;
                if (/^\s+$/.test(DD)) {
                  zD.push({
                    kind: "space",
                    text: DD
                  });
                  continue
                }
                if (!OD.test(DD)) {
                  zD.push({
                    kind: "word",
                    text: DD,
                    delayMs: 0
                  });
                  continue
                }
                let pD = !0;
                for (const sD of null !== (wD = DD.match(JD)) && void 0 !== wD ? wD : []) {
                  var wD;
                  const DD = zD.at(-1);
                  pD || "word" !== (null === DD || void 0 === DD ? void 0 : DD.kind) || OD.test(sD) || /[\p{L}\p{N}]/u.test(sD) ? (pD || zD.push({
                    kind: "space",
                    text: "\u200b"
                  }), zD.push({
                    kind: "word",
                    text: sD,
                    delayMs: 0
                  }), pD = !1) : DD.text += sD
                }
              } else zD.push({
                kind: "icon",
                text: pD.icon,
                delayMs: 0
              });
          return zD
        }(DD),
        ED = [];
      let CD = [];
      for (const pD of MD) "space" !== pD.kind && (CD.push(pD), BD.test(pD.text) && (ED.push(CD), CD = []));
      ED.push(CD);
      const xD = [];
      let TD = 0;
      for (const pD of ED) {
        var bD, jD;
        const DD = null !== (bD = null === (jD = pD.at(-1)) || void 0 === jD ? void 0 : jD.text) && void 0 !== bD ? bD : "",
          zD = GD.test(DD),
          wD = hD.test(DD),
          sD = pD.map((DD => "word" === DD.kind ? XD(DD.text) : 1)),
          MD = sD.findLastIndex((DD => DD > 0));
        for (const [GD, hD] of pD.entries()) {
          const DD = "word" === hD.kind,
            pD = sD[GD];
          hD.delayMs = TD;
          for (let sD = 0; fD && sD < pD; sD++) {
            const {
              intonation: KD
            } = fD;
            let rD = MD > 0 ? -KD.declineSemitones * (GD / MD) : 0;
            rD += QD(`${VD(hD.text)}|${sD}`) * KD.variationSemitones;
            const BD = Math.min(1, KD.variationSemitones);
            let nD = fD.glideSemitones,
              OD = 1;
            wD && (rD += KD.exclaimLiftSemitones, OD *= LD), zD && GD === MD && (rD += KD.questionRiseSemitones * (pD > 1 ? .5 + .5 * sD / (pD - 1) : 1), sD === pD - 1 && (nD = Math.abs(nD) + KD.questionRiseSemitones / 2)), DD && PD(hD.text) && (rD += gD * BD, OD *= cD), pD > 1 && 0 === sD && (rD += AD * BD, OD *= RD), xD.push({
              atMs: TD + sD * ID,
              semitones: rD,
              glideSemitones: nD,
              durationMs: sD < pD - 1 ? Math.min(fD.durationMs, ID * UD) : fD.durationMs,
              level: OD
            })
          }
          TD += pD * ID + (BD.test(hD.text) ? rD : nD.test(hD.text) ? KD : 0)
        }
      }
      return {
        pieces: MD.map((DD => "space" === DD.kind ? DD : "icon" === DD.kind ? {
          kind: "icon",
          icon: DD.text,
          delayMs: DD.delayMs
        } : {
          kind: "word",
          text: DD.text,
          delayMs: DD.delayMs
        })),
        blips: xD
      }
    }
    var xD = wD(1200),
      TD = wD(1260),
      bD = wD(1932);

    function jD(DD) {
      if ("string" === typeof DD) return DD;
      const zD = TD.e.get().getCurrentLanguageCode();
      return (0, xD.s)(zD, DD.translationKey, (0, xD.r)(DD.params, bD.d.shown))
    }

    function dD(DD) {
      const zD = void 0 === DD.voice ? null : (0, pD.l)(DD.voice),
        wD = zD && (0, pD.i)(zD);
      return {
        plan: CD(jD(DD.line), wD),
        synth: wD
      }
    }

    function SD(DD) {
      const zD = [];
      let wD = [];
      for (const [sD, KD] of DD.entries()) {
        var pD;
        "space" === KD.kind && (" " !== KD.text || "icon" !== (null === (pD = DD[sD + 1]) || void 0 === pD ? void 0 : pD.kind)) ? (wD.length > 0 && zD.push(wD), zD.push([KD]), wD = []) : wD.push(KD)
      }
      return wD.length > 0 && zD.push(wD), zD
    }
  },
  8726: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => KD,
      g: () => sD
    });
    let pD = null;
    const sD = function(DD) {
        const zD = {
          cycle: DD,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return pD = zD, () => {
          pD === zD && (pD = null)
        }
      },
      KD = () => {
        var DD;
        return null !== (DD = pD) && void 0 !== DD && DD.canCycle() ? pD.cycle : null
      }
  },
  36586: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => KD,
      h: () => BD,
      j: () => GD,
      k: () => LD,
      m: () => UD,
      q: () => hD,
      s: () => AD,
      v: () => MD,
      y: () => ID,
      z: () => nD
    });
    var pD = wD(20),
      sD = wD(25);
    const KD = "clientGameInventoryButtonsChanged",
      rD = new Map;

    function LD() {
      return [...rD.values()].sort(((DD, zD) => {
        var wD, pD;
        return (null !== (wD = DD.order) && void 0 !== wD ? wD : 0) - (null !== (pD = zD.order) && void 0 !== pD ? pD : 0)
      }))
    }
    let cD = null;

    function gD(DD) {
      cD = DD
    }
    let RD = !1;

    function AD(DD) {
      RD = !0;
      try {
        DD.onClick()
      } finally {
        RD = !1
      }
      DD.panel && "clientGame" === pD.e.get("openInGameMenuName") && gD(DD.id)
    }

    function UD() {
      return RD
    }

    function fD() {
      return LD().filter((DD => DD.panel && !DD.disabled))
    }

    function ID(DD) {
      const zD = fD(),
        wD = zD.findIndex((DD => DD.id === cD));
      return !(wD < 0 || zD.length < 2) && (AD(zD[(wD + DD + zD.length) % zD.length]), !0)
    }

    function BD() {
      return null !== cD && fD().length > 1
    }

    function GD() {
      gD(null)
    }

    function hD() {
      "inventory" !== pD.e.get("openInGameMenuName") && gD(null)
    }

    function nD() {
      const DD = cD;
      return gD(null), DD
    }

    function MD(DD) {
      return rD.set(DD.id, DD), sD.l.KG(KD, LD(), !0), () => {
        rD.get(DD.id) === DD && (rD.delete(DD.id), sD.l.KG(KD, LD()))
      }
    }
  },
  36580: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => LD,
      g: () => GD,
      i: () => hD,
      m: () => UD,
      p: () => gD,
      r: () => BD,
      t: () => fD,
      w: () => RD
    });
    var pD = wD(20),
      sD = wD(25),
      KD = wD(1299),
      rD = wD(36586);
    const LD = "clientGameUiChanged";
    let cD = null;

    function gD() {
      return cD
    }

    function RD(DD, zD) {
      const wD = {
        content: DD,
        menu: zD
      };
      return cD = wD, sD.l.KG(LD, cD, !0), () => {
        cD === wD && (cD = null, ID = !1, GD(), sD.l.KG(LD, null))
      }
    }
    let AD = null;

    function UD() {
      return AD
    }

    function fD(DD) {
      return AD = DD, () => {
        AD === DD && (AD = null)
      }
    }
    let ID = !1;

    function BD() {
      const DD = pD.e.get("openInGameMenuName");
      "clientGame" !== DD && (ID = "inventory" === DD), (0, rD.m)() || (0, rD.j)(), (0, KD.p)(KD.b), pD.e.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function GD() {
      nD(!1)
    }

    function hD() {
      nD(ID)
    }

    function nD(DD) {
      "clientGame" === pD.e.get("openInGameMenuName") && pD.e.set({
        openInGameMenuName: DD ? "inventory" : null
      }), DD || (0, rD.j)(), ID = !1
    }
  },
  38493: (DD, zD, wD) => {
    function pD(DD, zD, wD) {
      const pD = new Set,
        sD = new ResizeObserver(wD),
        KD = () => {
          const zD = new Set(document.querySelectorAll(DD));
          let KD = !1;
          for (const DD of pD) zD.has(DD) || (sD.unobserve(DD), pD.delete(DD), KD = !0);
          for (const DD of zD) pD.has(DD) || (sD.observe(DD), rD.observe(DD, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), pD.add(DD));
          KD && wD()
        },
        rD = new MutationObserver((zD => {
          zD.some((DD => "attributes" === DD.type)) && wD(), zD.some((zD => function(DD, zD, wD) {
            if ("childList" !== DD.type) return !1;
            for (const pD of DD.addedNodes)
              if (pD instanceof Element && (pD.matches(zD) || pD.querySelector(zD))) return !0;
            for (const pD of DD.removedNodes)
              if (pD instanceof Element)
                for (const DD of wD)
                  if (pD.contains(DD)) return !0;
            return !1
          }(zD, DD, pD))) && KD()
        }));
      rD.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const LD of zD) sD.observe(LD);
      return window.addEventListener("resize", wD), KD(), wD(), () => {
        sD.disconnect(), rD.disconnect(), window.removeEventListener("resize", wD)
      }
    }
    wD.d(zD, {
      d: () => pD
    })
  },
  8883: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => LD,
      g: () => cD
    });
    var pD = wD(20),
      sD = wD(1332),
      KD = wD(103);
    const rD = {
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

    function LD() {
      return (0, KD.isMobile)() && "function" === typeof navigator.vibrate
    }
    const cD = new class {
      constructor(DD) {
        this.deps = DD, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(DD, zD) {
        var wD;
        if (!this.deps.enabled()) return;
        const pD = rD[DD],
          sD = null !== zD && void 0 !== zD ? zD : pD.pattern;
        if (null === sD) return void console.warn("No vibration pattern for", DD);
        const KD = this.deps.now();
        KD - this.lastAnyAt < 40 && pD.priority < this.playingPriority || KD - (null !== (wD = this.lastAt.get(DD)) && void 0 !== wD ? wD : -1 / 0) < pD.minGapMs || KD < this.playingUntil && pD.priority < this.playingPriority || (this.lastAt.set(DD, KD), this.lastAnyAt = KD, this.playingUntil = KD + sD.reduce(((DD, zD) => DD + zD), 0), this.playingPriority = pD.priority, this.deps.vibrate(sD))
      }
    }({
      vibrate: DD => {
        navigator.vibrate([...DD])
      },
      now: () => performance.now(),
      enabled: () => LD() && pD.e.get("isTouchScreen") && pD.e.get("clientEscMenuOptions").vibration && !(0, sD.g)()
    })
  },
  37164: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => LD,
      f: () => rD
    });
    var pD = wD(37151),
      sD = wD(351),
      KD = wD(1886);

    function rD(DD) {
      if ("nK" in DD) return ED.createAnimationScript(DD);
      return new gD(DD).createAnimationScript()
    }

    function LD(DD, zD, wD, sD) {
      const KD = DD.nK <= 0 ? 1 : zD + wD * Math.max(0, sD) / DD.nK;
      return DD.MK === pD.h.LoopOnLastFrame ? KD % 1 : DD.MK === pD.h.NoLoop && KD >= 1 ? null : Math.min(1, KD)
    }
    class cD {
      createAnimationScript(DD) {
        const {
          nK: zD,
          loop: wD,
          JK: pD
        } = DD;
        return {
          nK: Math.round(zD),
          MK: this.createLoopMode(null !== wD && void 0 !== wD && wD),
          JK: this.createNodeSkeletonAnimationScript(null !== pD && void 0 !== pD ? pD : null)
        }
      }
      createLoopMode(DD) {
        switch (DD) {
          case !1:
            return pD.h.NoLoop;
          case !0:
            return pD.h.LoopOnLastFrame;
          case "hold-on-last-frame":
            return pD.h.HoldOnLastFrame
        }
        throw new Error(`Invalid loop mode schema: ${DD}`)
      }
      createNodeSkeletonAnimationScript(DD) {
        if (null === DD) return null;
        const zD = {};
        for (const wD in DD) {
          const pD = DD[wD];
          zD[wD] = this.createNodeAnimationScript(pD)
        }
        return zD
      }
      createNodeAnimationScript(DD) {
        const {
          timeline: zD
        } = DD, wD = zD.filter((DD => Number.isFinite(DD.timeFraction)));
        return wD.sort(((DD, zD) => DD.timeFraction - zD.timeFraction)), {
          rotation: this.createTimelineFromKeyframes(wD, "rotation", UD),
          position: this.createTimelineFromKeyframes(wD, "position", ID)
        }
      }
      createTimelineFromKeyframes(DD, zD, wD) {
        const pD = [];
        for (const cD of DD) {
          const DD = cD[zD];
          if (DD) {
            const zD = this.createAnimationFrameWithoutPrecomputes(cD.timeFraction, DD);
            RD(zD) && pD.push(zD)
          }
        }
        const sD = [];
        for (let cD = 0; cD < pD.length; cD++) {
          var KD, rD, LD;
          const DD = pD[cD],
            zD = null !== (KD = pD[cD - 1]) && void 0 !== KD ? KD : DD,
            gD = null !== (rD = pD[cD + 1]) && void 0 !== rD ? rD : DD,
            RD = null !== (LD = pD[cD + 2]) && void 0 !== LD ? LD : gD;
          sD.push({
            ...DD,
            ...wD(zD.post, zD.timeFraction, DD.post, DD.timeFraction, gD.pre, gD.timeFraction, RD.pre, RD.timeFraction)
          })
        }
        return sD
      }
      createAnimationFrameWithoutPrecomputes(DD, zD) {
        let wD, pD, sD = null;
        var KD;
        if ("object" === typeof zD && "point" in zD) sD = null !== (KD = zD.XK) && void 0 !== KD ? KD : null, wD = zD.point, pD = zD.point;
        else if ("object" === typeof zD && "pre" in zD) {
          var rD;
          sD = null !== (rD = zD.XK) && void 0 !== rD ? rD : null, wD = zD.pre, pD = zD.post
        } else wD = zD, pD = zD;
        return {
          timeFraction: DD,
          XK: this.createLerpMode(sD),
          pre: wD,
          post: pD
        }
      }
      createLerpMode(DD) {
        return null === DD ? pD.e.Linear : cD.LERP_MODE_SCHEMA_MAPPING[DD]
      }
    }
    cD.LERP_MODE_SCHEMA_MAPPING = {
      linear: pD.e.Linear,
      "catmull-rom-spline": pD.e.CatmullRomSpline
    };
    class gD {
      constructor(DD) {
        this.animationSchema = DD
      }
      createAnimationScript() {
        const {
          animation_length: DD,
          loop: zD,
          bones: wD
        } = this.animationSchema;
        return {
          nK: Math.round(1e3 * DD),
          MK: this.createLoopMode(null !== zD && void 0 !== zD && zD),
          JK: this.createNodeSkeletonAnimationScript(null !== wD && void 0 !== wD ? wD : null)
        }
      }
      createLoopMode(DD) {
        switch (DD) {
          case !1:
            return pD.h.NoLoop;
          case !0:
            return pD.h.LoopOnLastFrame;
          case "hold_on_last_frame":
            return pD.h.HoldOnLastFrame
        }
        throw new Error(`Invalid Blockbench loop mode schema: ${DD}`)
      }
      createNodeSkeletonAnimationScript(DD) {
        if (null === DD) return null;
        const zD = {};
        for (const wD in DD) {
          const pD = DD[wD];
          zD[wD] = this.createNodeAnimationScript(pD)
        }
        return zD
      }
      createNodeAnimationScript(DD) {
        const {
          rotation: zD,
          position: wD
        } = DD;
        return {
          rotation: this.createAnimationTimeline(null !== zD && void 0 !== zD ? zD : null, GD, UD, !0),
          position: this.createAnimationTimeline(null !== wD && void 0 !== wD ? wD : null, nD, ID, !1)
        }
      }
      createAnimationTimeline(DD, zD, wD, pD) {
        if (null === DD) return [];
        if (Array.isArray(DD)) {
          DD = {
            "0.0": DD
          }
        }
        const sD = Object.entries(DD).map((DD => {
          let [wD, pD] = DD;
          const sD = Number(wD) / this.animationSchema.animation_length;
          return this.createAnimationFrameWithoutPrecomputes(sD, pD, zD)
        })).filter(RD);
        sD.sort(((DD, zD) => DD.timeFraction - zD.timeFraction)), pD && function(DD) {
          for (let zD = 1; zD < DD.length; zD++) {
            const wD = DD[zD - 1].post,
              pD = DD[zD],
              sD = MD(pD.pre),
              KD = MD(pD.post),
              rD = JD(wD, pD.pre);
            JD(wD, sD) < rD && (DD[zD] = {
              ...pD,
              pre: sD,
              post: KD
            })
          }
        }(sD);
        const KD = [];
        for (let gD = 0; gD < sD.length; gD++) {
          var rD, LD, cD;
          const DD = sD[gD],
            zD = null !== (rD = sD[gD - 1]) && void 0 !== rD ? rD : DD,
            pD = null !== (LD = sD[gD + 1]) && void 0 !== LD ? LD : DD,
            RD = null !== (cD = sD[gD + 2]) && void 0 !== cD ? cD : pD;
          KD.push({
            ...DD,
            ...wD(zD.post, zD.timeFraction, DD.post, DD.timeFraction, pD.pre, pD.timeFraction, RD.pre, RD.timeFraction)
          })
        }
        return KD
      }
      createAnimationFrameWithoutPrecomputes(DD, zD, wD) {
        let pD, sD, KD = null;
        if ("object" === typeof zD && "post" in zD) {
          var rD;
          KD = null !== (rD = zD.lerp_mode) && void 0 !== rD ? rD : null, sD = BD(zD.post, wD), pD = zD.pre ? BD(zD.pre, wD) : sD
        } else {
          const DD = BD(zD, wD);
          sD = DD, pD = DD
        }
        return {
          timeFraction: DD,
          XK: this.createLerpMode(KD),
          pre: pD,
          post: sD
        }
      }
      createLerpMode(DD) {
        return null === DD ? pD.e.Linear : gD.LERP_MODE_SCHEMA_MAPPING[DD]
      }
    }

    function RD(DD) {
      return Number.isFinite(DD.timeFraction) && AD(DD.pre) && AD(DD.post)
    }

    function AD(DD) {
      return Number.isFinite(DD[0]) && Number.isFinite(DD[1]) && Number.isFinite(DD[2])
    }

    function UD(DD, zD, wD, pD, sD, KD, rD, LD) {
      const cD = KD - zD,
        gD = KD - pD,
        RD = LD - pD,
        AD = [null, null, null];
      for (let UD = 0; UD < AD.length; UD++) AD[UD] = fD(DD[UD], wD[UD], sD[UD], rD[UD], cD, RD);
      return {
        VK: gD,
        PK: AD
      }
    }

    function fD(DD, zD, wD, pD, KD, rD) {
      return {
        xK: sD.c.computeShortestRotation(DD, wD) / KD,
        TK: sD.c.computeShortestRotation(zD, pD) / rD,
        delta: sD.c.computeShortestRotation(zD, wD)
      }
    }

    function ID(DD, zD, wD, pD, sD, KD, rD, LD) {
      const cD = KD - zD,
        gD = KD - pD,
        RD = LD - pD,
        AD = [null, null, null];
      for (let UD = 0; UD < AD.length; UD++) AD[UD] = {
        xK: (sD[UD] - DD[UD]) / cD,
        TK: (rD[UD] - wD[UD]) / RD,
        delta: sD[UD] - wD[UD]
      };
      return {
        VK: gD,
        PK: AD
      }
    }

    function BD(DD, zD) {
      return null === zD ? DD : zD(DD)
    }

    function GD(DD) {
      const [zD, wD, pD] = DD, rD = -(0, KD.l)(zD), LD = -(0, KD.l)(wD), cD = (0, KD.l)(pD), gD = sD.c.quaternionFromEulerZYX(rD, LD, cD);
      return sD.c.eulerYXZFromQuaternion(gD)
    }
    gD.LERP_MODE_SCHEMA_MAPPING = {
      linear: pD.e.Linear,
      catmullrom: pD.e.CatmullRomSpline
    };
    const hD = 1 / 16;

    function nD(DD) {
      return [-DD[0] * hD, DD[1] * hD, DD[2] * hD]
    }

    function MD(DD) {
      const [zD, wD, pD] = DD;
      return [zD >= 0 ? Math.PI - zD : -Math.PI - zD, OD(wD + Math.PI), OD(pD + Math.PI)]
    }

    function OD(DD) {
      return sD.c.mod(DD + Math.PI, 2 * Math.PI) - Math.PI
    }

    function JD(DD, zD) {
      return Math.abs(sD.c.computeShortestRotation(DD[0], zD[0])) + Math.abs(sD.c.computeShortestRotation(DD[1], zD[1])) + Math.abs(sD.c.computeShortestRotation(DD[2], zD[2]))
    }
    const ED = new cD
  },
  37151: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => rD,
      c: () => KD,
      e: () => pD,
      h: () => sD
    });
    let pD = function(DD) {
        return DD[DD.Linear = 0] = "Linear", DD[DD.CatmullRomSpline = 1] = "CatmullRomSpline", DD
      }({}),
      sD = function(DD) {
        return DD[DD.NoLoop = 0] = "NoLoop", DD[DD.LoopOnLastFrame = 1] = "LoopOnLastFrame", DD[DD.HoldOnLastFrame = 2] = "HoldOnLastFrame", DD
      }({}),
      KD = function(DD) {
        return DD[DD.Movement = 0] = "Movement", DD[DD.Action = 1] = "Action", DD[DD.Emote = 2] = "Emote", DD[DD.Custom = 3] = "Custom", DD
      }({}),
      rD = function(DD) {
        return DD[DD.Start = 0] = "Start", DD[DD.Stop = 1] = "Stop", DD
      }({})
  },
  4866: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => sD,
      g: () => pD,
      h: () => KD,
      i: () => cD,
      l: () => rD
    });
    const pD = ["sine", "triangle", "square", "sawtooth"],
      sD = 55,
      KD = {
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

    function rD(DD) {
      return "string" !== typeof DD ? DD : Object.hasOwn(KD, DD) ? KD[DD] : null
    }

    function LD(DD, zD, wD) {
      return Math.min(wD, Math.max(zD, DD))
    }

    function cD(DD) {
      const zD = LD(DD.durationMs, 10, 500),
        wD = LD(DD.attackMs, 0, zD),
        {
          intonation: sD
        } = DD;
      return {
        waveform: pD.includes(DD.waveform) ? DD.waveform : "sine",
        pitchHz: LD(DD.pitchHz, 20, 4e3),
        glideSemitones: LD(DD.glideSemitones, -24, 24),
        durationMs: zD,
        attackMs: wD,
        releaseMs: LD(DD.releaseMs, 0, zD - wD),
        lowpassHz: null === DD.lowpassHz ? null : LD(DD.lowpassHz, 20, 2e4),
        volume: LD(DD.volume, 0, 2),
        intonation: {
          variationSemitones: LD(sD.variationSemitones, 0, 6),
          declineSemitones: LD(sD.declineSemitones, 0, 12),
          questionRiseSemitones: LD(sD.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: LD(sD.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: LD(DD.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);