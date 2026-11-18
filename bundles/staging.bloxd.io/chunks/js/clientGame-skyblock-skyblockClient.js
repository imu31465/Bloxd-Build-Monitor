export const id = 25;
export const ids = [25];
export const modules = {
  35589: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => OB,
      e: () => DB,
      h: () => LB,
      l: () => kB
    });
    var VB = dB(8570),
      yB = dB(35595),
      pB = dB(35601),
      lB = dB(8103),
      JB = dB(1317),
      YB = dB(62),
      gB = dB(72),
      oB = dB(980);

    function kB() {
      var BB;
      return (0, JB.f)(yB.c, (0, yB.k)()), (0, oB.jsx)(oB.Fragment, {
        children: null === (BB = (0, yB.k)()) || void 0 === BB ? void 0 : BB.content
      })
    }

    function LB(BB) {
      var TB;
      let {
        show: dB
      } = BB;
      (0, JB.f)(yB.c, (0, yB.k)());
      const gB = null === (TB = (0, yB.k)()) || void 0 === TB ? void 0 : TB.menu;
      return (0, YB.useEffect)((() => {
        var BB;
        dB || (null === gB || void 0 === gB || null === (BB = gB.onClose) || void 0 === BB || BB.call(gB), (0, pB.r)())
      }), [dB, gB]), (0, YB.useEffect)((() => dB ? (0, lB.c)(pB.x, pB.e) : void 0), [dB]), (0, oB.jsx)(VB.d, {
        showing: dB,
        globallyUniqueKey: "clientGameMenu",
        children: null === gB || void 0 === gB ? void 0 : gB.content
      })
    }

    function OB(BB) {
      let {
        placement: TB = "bottom"
      } = BB;
      return (0, oB.jsx)("div", {
        id: `clientGameHud-${TB}`,
        style: {
          display: "contents"
        }
      })
    }

    function DB(BB) {
      let {
        children: TB,
        placement: dB = "bottom"
      } = BB;
      const [VB, yB] = (0, YB.useState)(null);
      return (0, YB.useEffect)((() => {
        yB(document.getElementById(`clientGameHud-${dB}`))
      }), [dB]), VB ? (0, gB.createPortal)(TB, VB) : null
    }
  },
  4226: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => HB,
      h: () => EB
    });
    var VB = dB(933),
      yB = dB.n(VB),
      pB = dB(62),
      lB = dB(1078),
      JB = dB(4232),
      YB = dB(1657),
      gB = dB(2139),
      oB = dB(4240),
      kB = dB(980);
    const LB = new WeakMap;
    let OB = 0;

    function DB(BB) {
      let TB = LB.get(BB);
      return void 0 === TB && (TB = OB++, LB.set(BB, TB)), TB
    }

    function uB(BB) {
      let {
        piece: TB
      } = BB;
      return "space" === TB.kind ? (0, kB.jsx)(kB.Fragment, {
        children: TB.text
      }) : (0, kB.jsx)("span", {
        className: "DialogueWord",
        style: {
          "--word-delay": `${TB.delayMs}ms`
        },
        children: (0, kB.jsx)(JB.d, {
          text: "icon" === TB.kind ? `[[${TB.icon}]]` : TB.text
        })
      })
    }

    function HB(BB) {
      let {
        display: TB
      } = BB;
      const {
        selectedLanguage: dB
      } = (0, lB.z)(), VB = (0, pB.useMemo)((() => (0, oB.e)((0, oB.f)(TB).plan.pieces)), [TB, dB.code]);
      return (0, kB.jsxs)("div", {
        className: yB()("Dialogue", {
          DialogueAnimateIn: !1 !== TB.animateIn
        }),
        children: [TB.speakerName && (0, kB.jsx)(YB.e, {
          text: TB.speakerName,
          className: "DialogueSpeaker"
        }), (0, kB.jsx)("p", {
          className: "DialogueLine",
          children: VB.map(((BB, TB) => 1 === BB.length && "space" === BB[0].kind ? BB[0].text : (0, kB.jsx)("span", {
            className: "DialogueGlue",
            children: BB.map(((BB, TB) => (0, kB.jsx)(uB, {
              piece: BB
            }, TB)))
          }, TB)))
        })]
      })
    }
    const EB = (0, pB.memo)((function() {
      const BB = (0, gB.j)("dialogue");
      return (0, kB.jsx)("div", {
        className: "DialogueAnchor",
        "data-camera-keeper": "",
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: BB && (0, kB.jsx)(HB, {
          display: BB
        }, DB(BB))
      })
    }))
  },
  4232: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => JB
    });
    var VB = dB(62),
      yB = dB(270),
      pB = dB(1666),
      lB = dB(980);

    function JB(BB) {
      let {
        text: TB
      } = BB;
      const dB = [];
      let JB = "";
      return (0, yB.hc)(TB).forEach(((BB, TB) => {
        if ("string" === typeof BB || !(0, pB.d)(BB.icon)) return void(JB += "string" === typeof BB ? BB : BB.icon);
        const yB = Math.max(0, JB.trimEnd().search(/\S{1,12}$/));
        dB.push((0, lB.jsxs)(VB.Fragment, {
          children: [JB.slice(0, yB), (0, lB.jsxs)("span", {
            className: "InlineIconTextGlue",
            children: [JB.slice(yB), (0, lB.jsx)("span", {
              className: "InlineIconTextIcon",
              role: "img",
              "aria-label": BB.icon,
              children: (0, lB.jsx)(pB.c, {
                itemName: BB.icon,
                amount: 0
              })
            })]
          })]
        }, TB)), JB = ""
      })), dB.push(JB), (0, lB.jsx)(lB.Fragment, {
        children: dB
      })
    }
  },
  8570: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => pB
    });
    var VB = dB(3948),
      yB = dB(3951);

    function pB(BB) {
      let {
        children: TB,
        showing: dB,
        globallyUniqueKey: pB,
        alwaysMountChildren: lB = !1,
        doGameplayStartStopOnShow: JB = !0,
        keepsMovement: YB = !1
      } = BB;
      return (0, yB.d)(!0, dB, pB, YB), (0, VB.e)(JB, dB), dB || lB ? TB : null
    }
  },
  4240: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => cB,
      f: () => IB
    });
    var VB = dB(4247),
      yB = dB(270);
    const pB = 120,
      lB = 260,
      JB = 1.15,
      YB = 1.2,
      gB = 2,
      oB = 1.08,
      kB = .8,
      LB = .95,
      OB = 8,
      DB = "[\"')\\]\u300d\u300f\uff09]*",
      uB = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${DB}$`),
      HB = new RegExp(`[?\uff1f]${DB}$`),
      EB = new RegExp(`[!\uff01]${DB}$`),
      vB = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      mB = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      iB = new RegExp(`[${mB}]`),
      NB = new RegExp(`[${mB}]|[^${mB}]+`, "g"),
      tB = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function fB(BB) {
      let TB = 2166136261;
      for (let dB = 0; dB < BB.length; dB++) TB ^= BB.charCodeAt(dB), TB = Math.imul(TB, 16777619);
      return (TB >>> 0) / 4294967295 * 2 - 1
    }

    function sB(BB) {
      var TB;
      if (iB.test(BB)) return 1;
      const dB = BB.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        VB = dB.replace(/[^0-9]/g, "");
      if (VB.length > 0 && !/\p{L}/u.test(dB)) return Math.min(VB.length, 4);
      const yB = null !== (TB = dB.match(tB)) && void 0 !== TB ? TB : [];
      if (0 === yB.length) {
        var pB, lB;
        const BB = null !== (pB = null === (lB = dB.match(/\p{L}/gu)) || void 0 === lB ? void 0 : lB.length) && void 0 !== pB ? pB : 0;
        return 0 === BB ? 0 : Math.min(Math.max(1, Math.round(BB / 2.5)), OB)
      }
      const JB = dB.replace(/[^\p{L}]/gu, ""),
        YB = yB.length > 1 && "e" === yB.at(-1) && JB.endsWith("e") && !JB.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(BB.replace(/[^\p{L}]/gu, ""));
      return Math.min(yB.length - (YB ? 1 : 0), OB)
    }

    function MB(BB) {
      return BB.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function zB(BB) {
      const TB = BB.replace(/[^\p{L}]/gu, "");
      return TB.length >= 2 && TB === TB.toUpperCase() && TB !== TB.toLowerCase()
    }

    function wB(BB, TB) {
      var dB;
      const OB = TB && (0, VB.i)(TB),
        DB = null !== (dB = null === OB || void 0 === OB ? void 0 : OB.syllableMs) && void 0 !== dB ? dB : VB.b,
        mB = function(BB) {
          const TB = [];
          for (const VB of (0, yB.hc)(BB))
            if ("string" === typeof VB)
              for (const BB of VB.split(/(\s+)/)) {
                if ("" === BB) continue;
                if (/^\s+$/.test(BB)) {
                  TB.push({
                    kind: "space",
                    text: BB
                  });
                  continue
                }
                if (!iB.test(BB)) {
                  TB.push({
                    kind: "word",
                    text: BB,
                    delayMs: 0
                  });
                  continue
                }
                let VB = !0;
                for (const yB of null !== (dB = BB.match(NB)) && void 0 !== dB ? dB : []) {
                  var dB;
                  const BB = TB.at(-1);
                  VB || "word" !== (null === BB || void 0 === BB ? void 0 : BB.kind) || iB.test(yB) || /[\p{L}\p{N}]/u.test(yB) ? (VB || TB.push({
                    kind: "space",
                    text: "\u200b"
                  }), TB.push({
                    kind: "word",
                    text: yB,
                    delayMs: 0
                  }), VB = !1) : BB.text += yB
                }
              } else TB.push({
                kind: "icon",
                text: VB.icon,
                delayMs: 0
              });
          return TB
        }(BB),
        tB = [];
      let wB = [];
      for (const VB of mB) "space" !== VB.kind && (wB.push(VB), uB.test(VB.text) && (tB.push(wB), wB = []));
      tB.push(wB);
      const UB = [];
      let FB = 0;
      for (const VB of tB) {
        var KB, rB;
        const BB = null !== (KB = null === (rB = VB.at(-1)) || void 0 === rB ? void 0 : rB.text) && void 0 !== KB ? KB : "",
          TB = HB.test(BB),
          dB = EB.test(BB),
          yB = VB.map((BB => "word" === BB.kind ? sB(BB.text) : 1)),
          mB = yB.findLastIndex((BB => BB > 0));
        for (const [HB, EB] of VB.entries()) {
          const BB = "word" === EB.kind,
            VB = yB[HB];
          EB.delayMs = FB;
          for (let yB = 0; OB && yB < VB; yB++) {
            const {
              intonation: pB
            } = OB;
            let lB = mB > 0 ? -pB.declineSemitones * (HB / mB) : 0;
            lB += fB(`${MB(EB.text)}|${yB}`) * pB.variationSemitones;
            const uB = Math.min(1, pB.variationSemitones);
            let vB = OB.glideSemitones,
              iB = 1;
            dB && (lB += pB.exclaimLiftSemitones, iB *= JB), TB && HB === mB && (lB += pB.questionRiseSemitones * (VB > 1 ? .5 + .5 * yB / (VB - 1) : 1), yB === VB - 1 && (vB = Math.abs(vB) + pB.questionRiseSemitones / 2)), BB && zB(EB.text) && (lB += gB * uB, iB *= YB), VB > 1 && 0 === yB && (lB += kB * uB, iB *= oB), UB.push({
              atMs: FB + yB * DB,
              semitones: lB,
              glideSemitones: vB,
              durationMs: yB < VB - 1 ? Math.min(OB.durationMs, DB * LB) : OB.durationMs,
              level: iB
            })
          }
          FB += VB * DB + (uB.test(EB.text) ? lB : vB.test(EB.text) ? pB : 0)
        }
      }
      return {
        pieces: mB.map((BB => "space" === BB.kind ? BB : "icon" === BB.kind ? {
          kind: "icon",
          icon: BB.text,
          delayMs: BB.delayMs
        } : {
          kind: "word",
          text: BB.text,
          delayMs: BB.delayMs
        })),
        blips: UB
      }
    }
    var UB = dB(1078),
      FB = dB(1133),
      KB = dB(1685);

    function rB(BB) {
      if ("string" === typeof BB) return BB;
      const TB = FB.f.get().getCurrentLanguageCode();
      return (0, UB.r)(TB, BB.translationKey, (0, UB.o)(BB.params, KB.c.shown))
    }

    function IB(BB) {
      const TB = void 0 === BB.voice ? null : (0, VB.j)(BB.voice),
        dB = TB && (0, VB.i)(TB);
      return {
        plan: wB(rB(BB.line), dB),
        synth: dB
      }
    }

    function cB(BB) {
      const TB = [];
      let dB = [];
      for (const [yB, pB] of BB.entries()) {
        var VB;
        "space" === pB.kind && (" " !== pB.text || "icon" !== (null === (VB = BB[yB + 1]) || void 0 === VB ? void 0 : VB.kind)) ? (dB.length > 0 && TB.push(dB), TB.push([pB]), dB = []) : dB.push(pB)
      }
      return dB.length > 0 && TB.push(dB), TB
    }
  },
  8103: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => pB,
      c: () => yB
    });
    let VB = null;
    const yB = function(BB) {
        const TB = {
          cycle: BB,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return VB = TB, () => {
          VB === TB && (VB = null)
        }
      },
      pB = () => {
        var BB;
        return null !== (BB = VB) && void 0 !== BB && BB.canCycle() ? VB.cycle : null
      }
  },
  35601: (BB, TB, dB) => {
    dB.d(TB, {
      A: () => vB,
      c: () => pB,
      e: () => uB,
      i: () => HB,
      k: () => JB,
      n: () => LB,
      r: () => EB,
      s: () => kB,
      v: () => mB,
      x: () => DB
    });
    var VB = dB(21),
      yB = dB(24);
    const pB = "clientGameInventoryButtonsChanged",
      lB = new Map;

    function JB() {
      return [...lB.values()].sort(((BB, TB) => {
        var dB, VB;
        return (null !== (dB = BB.order) && void 0 !== dB ? dB : 0) - (null !== (VB = TB.order) && void 0 !== VB ? VB : 0)
      }))
    }
    let YB = null;

    function gB(BB) {
      YB = BB
    }
    let oB = !1;

    function kB(BB) {
      oB = !0;
      try {
        BB.onClick()
      } finally {
        oB = !1
      }
      BB.panel && "clientGame" === VB.d.get("openInGameMenuName") && gB(BB.id)
    }

    function LB() {
      return oB
    }

    function OB() {
      return JB().filter((BB => BB.panel && !BB.disabled))
    }

    function DB(BB) {
      const TB = OB(),
        dB = TB.findIndex((BB => BB.id === YB));
      return !(dB < 0 || TB.length < 2) && (kB(TB[(dB + BB + TB.length) % TB.length]), !0)
    }

    function uB() {
      return null !== YB && OB().length > 1
    }

    function HB() {
      gB(null)
    }

    function EB() {
      "inventory" !== VB.d.get("openInGameMenuName") && gB(null)
    }

    function vB() {
      const BB = YB;
      return gB(null), BB
    }

    function mB(BB) {
      return lB.set(BB.id, BB), yB.h.yH(pB, JB(), !0), () => {
        lB.get(BB.id) === BB && (lB.delete(BB.id), yB.h.yH(pB, JB()))
      }
    }
  },
  35595: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => JB,
      g: () => HB,
      h: () => EB,
      j: () => LB,
      k: () => gB,
      o: () => uB,
      p: () => OB,
      r: () => oB
    });
    var VB = dB(21),
      yB = dB(24),
      pB = dB(1173),
      lB = dB(35601);
    const JB = "clientGameUiChanged";
    let YB = null;

    function gB() {
      return YB
    }

    function oB(BB, TB) {
      const dB = {
        content: BB,
        menu: TB
      };
      return YB = dB, yB.h.yH(JB, YB, !0), () => {
        YB === dB && (YB = null, DB = !1, HB(), yB.h.yH(JB, null))
      }
    }
    let kB = null;

    function LB() {
      return kB
    }

    function OB(BB) {
      return kB = BB, () => {
        kB === BB && (kB = null)
      }
    }
    let DB = !1;

    function uB() {
      const BB = VB.d.get("openInGameMenuName");
      "clientGame" !== BB && (DB = "inventory" === BB), (0, lB.n)() || (0, lB.i)(), (0, pB.p)("InGameMenu"), VB.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function HB() {
      vB(!1)
    }

    function EB() {
      vB(DB)
    }

    function vB(BB) {
      "clientGame" === VB.d.get("openInGameMenuName") && VB.d.set({
        openInGameMenuName: BB ? "inventory" : null
      }), BB || (0, lB.i)(), DB = !1
    }
  },
  37463: (BB, TB, dB) => {
    function VB(BB, TB, dB) {
      const VB = new Set,
        yB = new ResizeObserver(dB),
        pB = () => {
          const TB = new Set(document.querySelectorAll(BB));
          let pB = !1;
          for (const BB of VB) TB.has(BB) || (yB.unobserve(BB), VB.delete(BB), pB = !0);
          for (const BB of TB) VB.has(BB) || (yB.observe(BB), lB.observe(BB, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), VB.add(BB));
          pB && dB()
        },
        lB = new MutationObserver((TB => {
          TB.some((BB => "attributes" === BB.type)) && dB(), TB.some((TB => function(BB, TB, dB) {
            if ("childList" !== BB.type) return !1;
            for (const VB of BB.addedNodes)
              if (VB instanceof Element && (VB.matches(TB) || VB.querySelector(TB))) return !0;
            for (const VB of BB.removedNodes)
              if (VB instanceof Element)
                for (const BB of dB)
                  if (VB.contains(BB)) return !0;
            return !1
          }(TB, BB, VB))) && pB()
        }));
      lB.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const JB of TB) yB.observe(JB);
      return window.addEventListener("resize", dB), pB(), dB(), () => {
        yB.disconnect(), lB.disconnect(), window.removeEventListener("resize", dB)
      }
    }
    dB.d(TB, {
      d: () => VB
    })
  },
  8204: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => JB,
      f: () => YB
    });
    var VB = dB(21),
      yB = dB(1209),
      pB = dB(95);
    const lB = {
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

    function JB() {
      return (0, pB.isMobile)() && "function" === typeof navigator.vibrate
    }
    const YB = new class {
      constructor(BB) {
        this.deps = BB, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(BB, TB) {
        var dB;
        if (!this.deps.enabled()) return;
        const VB = lB[BB],
          yB = null !== TB && void 0 !== TB ? TB : VB.pattern;
        if (null === yB) return void console.warn("No vibration pattern for", BB);
        const pB = this.deps.now();
        pB - this.lastAnyAt < 40 && VB.priority < this.playingPriority || pB - (null !== (dB = this.lastAt.get(BB)) && void 0 !== dB ? dB : -1 / 0) < VB.minGapMs || pB < this.playingUntil && VB.priority < this.playingPriority || (this.lastAt.set(BB, pB), this.lastAnyAt = pB, this.playingUntil = pB + yB.reduce(((BB, TB) => BB + TB), 0), this.playingPriority = VB.priority, this.deps.vibrate(yB))
      }
    }({
      vibrate: BB => {
        navigator.vibrate([...BB])
      },
      now: () => performance.now(),
      enabled: () => JB() && VB.d.get("isTouchScreen") && VB.d.get("clientEscMenuOptions").vibration && !(0, yB.h)()
    })
  },
  36496: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => JB,
      h: () => lB
    });
    var VB = dB(36491),
      yB = dB(279),
      pB = dB(1652);

    function lB(BB) {
      if ("Sy" in BB) return tB.createAnimationScript(BB);
      return new gB(BB).createAnimationScript()
    }

    function JB(BB, TB, dB, yB) {
      const pB = BB.Sy <= 0 ? 1 : TB + dB * Math.max(0, yB) / BB.Sy;
      return BB.Py === VB.n.LoopOnLastFrame ? pB % 1 : BB.Py === VB.n.NoLoop && pB >= 1 ? null : Math.min(1, pB)
    }
    class YB {
      createAnimationScript(BB) {
        const {
          Sy: TB,
          loop: dB,
          Qy: VB
        } = BB;
        return {
          Sy: Math.round(TB),
          Py: this.createLoopMode(null !== dB && void 0 !== dB && dB),
          Qy: this.createNodeSkeletonAnimationScript(null !== VB && void 0 !== VB ? VB : null)
        }
      }
      createLoopMode(BB) {
        switch (BB) {
          case !1:
            return VB.n.NoLoop;
          case !0:
            return VB.n.LoopOnLastFrame;
          case "hold-on-last-frame":
            return VB.n.HoldOnLastFrame
        }
        throw new Error(`Invalid loop mode schema: ${BB}`)
      }
      createNodeSkeletonAnimationScript(BB) {
        if (null === BB) return null;
        const TB = {};
        for (const dB in BB) {
          const VB = BB[dB];
          TB[dB] = this.createNodeAnimationScript(VB)
        }
        return TB
      }
      createNodeAnimationScript(BB) {
        const {
          timeline: TB
        } = BB, dB = TB.filter((BB => Number.isFinite(BB.timeFraction)));
        return dB.sort(((BB, TB) => BB.timeFraction - TB.timeFraction)), {
          rotation: this.createTimelineFromKeyframes(dB, "rotation", LB),
          position: this.createTimelineFromKeyframes(dB, "position", DB)
        }
      }
      createTimelineFromKeyframes(BB, TB, dB) {
        const VB = [];
        for (const YB of BB) {
          const BB = YB[TB];
          if (BB) {
            const TB = this.createAnimationFrameWithoutPrecomputes(YB.timeFraction, BB);
            oB(TB) && VB.push(TB)
          }
        }
        const yB = [];
        for (let YB = 0; YB < VB.length; YB++) {
          var pB, lB, JB;
          const BB = VB[YB],
            TB = null !== (pB = VB[YB - 1]) && void 0 !== pB ? pB : BB,
            gB = null !== (lB = VB[YB + 1]) && void 0 !== lB ? lB : BB,
            oB = null !== (JB = VB[YB + 2]) && void 0 !== JB ? JB : gB;
          yB.push({
            ...BB,
            ...dB(TB.post, TB.timeFraction, BB.post, BB.timeFraction, gB.pre, gB.timeFraction, oB.pre, oB.timeFraction)
          })
        }
        return yB
      }
      createAnimationFrameWithoutPrecomputes(BB, TB) {
        let dB, VB, yB = null;
        var pB;
        if ("object" === typeof TB && "point" in TB) yB = null !== (pB = TB.Xy) && void 0 !== pB ? pB : null, dB = TB.point, VB = TB.point;
        else if ("object" === typeof TB && "pre" in TB) {
          var lB;
          yB = null !== (lB = TB.Xy) && void 0 !== lB ? lB : null, dB = TB.pre, VB = TB.post
        } else dB = TB, VB = TB;
        return {
          timeFraction: BB,
          Xy: this.createLerpMode(yB),
          pre: dB,
          post: VB
        }
      }
      createLerpMode(BB) {
        return null === BB ? VB.j.Linear : YB.LERP_MODE_SCHEMA_MAPPING[BB]
      }
    }
    YB.LERP_MODE_SCHEMA_MAPPING = {
      linear: VB.j.Linear,
      "catmull-rom-spline": VB.j.CatmullRomSpline
    };
    class gB {
      constructor(BB) {
        this.animationSchema = BB
      }
      createAnimationScript() {
        const {
          animation_length: BB,
          loop: TB,
          bones: dB
        } = this.animationSchema;
        return {
          Sy: Math.round(1e3 * BB),
          Py: this.createLoopMode(null !== TB && void 0 !== TB && TB),
          Qy: this.createNodeSkeletonAnimationScript(null !== dB && void 0 !== dB ? dB : null)
        }
      }
      createLoopMode(BB) {
        switch (BB) {
          case !1:
            return VB.n.NoLoop;
          case !0:
            return VB.n.LoopOnLastFrame;
          case "hold_on_last_frame":
            return VB.n.HoldOnLastFrame
        }
        throw new Error(`Invalid Blockbench loop mode schema: ${BB}`)
      }
      createNodeSkeletonAnimationScript(BB) {
        if (null === BB) return null;
        const TB = {};
        for (const dB in BB) {
          const VB = BB[dB];
          TB[dB] = this.createNodeAnimationScript(VB)
        }
        return TB
      }
      createNodeAnimationScript(BB) {
        const {
          rotation: TB,
          position: dB
        } = BB;
        return {
          rotation: this.createAnimationTimeline(null !== TB && void 0 !== TB ? TB : null, HB, LB, !0),
          position: this.createAnimationTimeline(null !== dB && void 0 !== dB ? dB : null, vB, DB, !1)
        }
      }
      createAnimationTimeline(BB, TB, dB, VB) {
        if (null === BB) return [];
        if (Array.isArray(BB)) {
          BB = {
            "0.0": BB
          }
        }
        const yB = Object.entries(BB).map((BB => {
          let [dB, VB] = BB;
          const yB = Number(dB) / this.animationSchema.animation_length;
          return this.createAnimationFrameWithoutPrecomputes(yB, VB, TB)
        })).filter(oB);
        yB.sort(((BB, TB) => BB.timeFraction - TB.timeFraction)), VB && function(BB) {
          for (let TB = 1; TB < BB.length; TB++) {
            const dB = BB[TB - 1].post,
              VB = BB[TB],
              yB = mB(VB.pre),
              pB = mB(VB.post),
              lB = NB(dB, VB.pre);
            NB(dB, yB) < lB && (BB[TB] = {
              ...VB,
              pre: yB,
              post: pB
            })
          }
        }(yB);
        const pB = [];
        for (let gB = 0; gB < yB.length; gB++) {
          var lB, JB, YB;
          const BB = yB[gB],
            TB = null !== (lB = yB[gB - 1]) && void 0 !== lB ? lB : BB,
            VB = null !== (JB = yB[gB + 1]) && void 0 !== JB ? JB : BB,
            oB = null !== (YB = yB[gB + 2]) && void 0 !== YB ? YB : VB;
          pB.push({
            ...BB,
            ...dB(TB.post, TB.timeFraction, BB.post, BB.timeFraction, VB.pre, VB.timeFraction, oB.pre, oB.timeFraction)
          })
        }
        return pB
      }
      createAnimationFrameWithoutPrecomputes(BB, TB, dB) {
        let VB, yB, pB = null;
        if ("object" === typeof TB && "post" in TB) {
          var lB;
          pB = null !== (lB = TB.lerp_mode) && void 0 !== lB ? lB : null, yB = uB(TB.post, dB), VB = TB.pre ? uB(TB.pre, dB) : yB
        } else {
          const BB = uB(TB, dB);
          yB = BB, VB = BB
        }
        return {
          timeFraction: BB,
          Xy: this.createLerpMode(pB),
          pre: VB,
          post: yB
        }
      }
      createLerpMode(BB) {
        return null === BB ? VB.j.Linear : gB.LERP_MODE_SCHEMA_MAPPING[BB]
      }
    }

    function oB(BB) {
      return Number.isFinite(BB.timeFraction) && kB(BB.pre) && kB(BB.post)
    }

    function kB(BB) {
      return Number.isFinite(BB[0]) && Number.isFinite(BB[1]) && Number.isFinite(BB[2])
    }

    function LB(BB, TB, dB, VB, yB, pB, lB, JB) {
      const YB = pB - TB,
        gB = pB - VB,
        oB = JB - VB,
        kB = [null, null, null];
      for (let LB = 0; LB < kB.length; LB++) kB[LB] = OB(BB[LB], dB[LB], yB[LB], lB[LB], YB, oB);
      return {
        Wy: gB,
        hy: kB
      }
    }

    function OB(BB, TB, dB, VB, pB, lB) {
      return {
        Gy: yB.e.computeShortestRotation(BB, dB) / pB,
        qy: yB.e.computeShortestRotation(TB, VB) / lB,
        delta: yB.e.computeShortestRotation(TB, dB)
      }
    }

    function DB(BB, TB, dB, VB, yB, pB, lB, JB) {
      const YB = pB - TB,
        gB = pB - VB,
        oB = JB - VB,
        kB = [null, null, null];
      for (let LB = 0; LB < kB.length; LB++) kB[LB] = {
        Gy: (yB[LB] - BB[LB]) / YB,
        qy: (lB[LB] - dB[LB]) / oB,
        delta: yB[LB] - dB[LB]
      };
      return {
        Wy: gB,
        hy: kB
      }
    }

    function uB(BB, TB) {
      return null === TB ? BB : TB(BB)
    }

    function HB(BB) {
      const [TB, dB, VB] = BB, lB = -(0, pB.j)(TB), JB = -(0, pB.j)(dB), YB = (0, pB.j)(VB), gB = yB.e.quaternionFromEulerZYX(lB, JB, YB);
      return yB.e.eulerYXZFromQuaternion(gB)
    }
    gB.LERP_MODE_SCHEMA_MAPPING = {
      linear: VB.j.Linear,
      catmullrom: VB.j.CatmullRomSpline
    };
    const EB = 1 / 16;

    function vB(BB) {
      return [-BB[0] * EB, BB[1] * EB, BB[2] * EB]
    }

    function mB(BB) {
      const [TB, dB, VB] = BB;
      return [TB >= 0 ? Math.PI - TB : -Math.PI - TB, iB(dB + Math.PI), iB(VB + Math.PI)]
    }

    function iB(BB) {
      return yB.e.mod(BB + Math.PI, 2 * Math.PI) - Math.PI
    }

    function NB(BB, TB) {
      return Math.abs(yB.e.computeShortestRotation(BB[0], TB[0])) + Math.abs(yB.e.computeShortestRotation(BB[1], TB[1])) + Math.abs(yB.e.computeShortestRotation(BB[2], TB[2]))
    }
    const tB = new YB
  },
  36491: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => lB,
      f: () => pB,
      j: () => VB,
      n: () => yB
    });
    let VB = function(BB) {
        return BB[BB.Linear = 0] = "Linear", BB[BB.CatmullRomSpline = 1] = "CatmullRomSpline", BB
      }({}),
      yB = function(BB) {
        return BB[BB.NoLoop = 0] = "NoLoop", BB[BB.LoopOnLastFrame = 1] = "LoopOnLastFrame", BB[BB.HoldOnLastFrame = 2] = "HoldOnLastFrame", BB
      }({}),
      pB = function(BB) {
        return BB[BB.Movement = 0] = "Movement", BB[BB.Action = 1] = "Action", BB[BB.Emote = 2] = "Emote", BB[BB.Custom = 3] = "Custom", BB
      }({}),
      lB = function(BB) {
        return BB[BB.Start = 0] = "Start", BB[BB.Stop = 1] = "Stop", BB
      }({})
  },
  4247: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => yB,
      d: () => VB,
      e: () => pB,
      i: () => YB,
      j: () => lB
    });
    const VB = ["sine", "triangle", "square", "sawtooth"],
      yB = 55,
      pB = {
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

    function lB(BB) {
      return "string" !== typeof BB ? BB : Object.hasOwn(pB, BB) ? pB[BB] : null
    }

    function JB(BB, TB, dB) {
      return Math.min(dB, Math.max(TB, BB))
    }

    function YB(BB) {
      const TB = JB(BB.durationMs, 10, 500),
        dB = JB(BB.attackMs, 0, TB),
        {
          intonation: yB
        } = BB;
      return {
        waveform: VB.includes(BB.waveform) ? BB.waveform : "sine",
        pitchHz: JB(BB.pitchHz, 20, 4e3),
        glideSemitones: JB(BB.glideSemitones, -24, 24),
        durationMs: TB,
        attackMs: dB,
        releaseMs: JB(BB.releaseMs, 0, TB - dB),
        lowpassHz: null === BB.lowpassHz ? null : JB(BB.lowpassHz, 20, 2e4),
        volume: JB(BB.volume, 0, 2),
        intonation: {
          variationSemitones: JB(yB.variationSemitones, 0, 6),
          declineSemitones: JB(yB.declineSemitones, 0, 12),
          questionRiseSemitones: JB(yB.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: JB(yB.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: JB(BB.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);