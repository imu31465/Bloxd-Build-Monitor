export const id = 25;
export const ids = [25];
export const modules = {
  36687: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => pT,
      d: () => BT,
      h: () => LT,
      i: () => lT
    });
    var WT = mT(34270),
      zT = mT(36693),
      MT = mT(36698),
      gT = mT(8852),
      nT = mT(1567),
      HT = mT(63),
      kT = mT(85),
      jT = mT(1188);

    function lT() {
      var TT;
      return (0, nT.j)(zT.b, (0, zT.j)()), (0, jT.jsx)(jT.Fragment, {
        children: null === (TT = (0, zT.j)()) || void 0 === TT ? void 0 : TT.content
      })
    }

    function LT(TT) {
      var UT;
      let {
        show: mT
      } = TT;
      (0, nT.j)(zT.b, (0, zT.j)());
      const kT = null === (UT = (0, zT.j)()) || void 0 === UT ? void 0 : UT.menu;
      return (0, HT.useEffect)((() => {
        var TT;
        mT || (null === kT || void 0 === kT || null === (TT = kT.onClose) || void 0 === TT || TT.call(kT), (0, MT.n)())
      }), [mT, kT]), (0, HT.useEffect)((() => mT ? (0, gT.f)(MT.s, MT.d) : void 0), [mT]), (0, jT.jsx)(WT.e, {
        showing: mT,
        globallyUniqueKey: "clientGameMenu",
        children: null === kT || void 0 === kT ? void 0 : kT.content
      })
    }

    function pT(TT) {
      let {
        placement: UT = "bottom"
      } = TT;
      return (0, jT.jsx)("div", {
        id: `clientGameHud-${UT}`,
        style: {
          display: "contents"
        }
      })
    }

    function BT(TT) {
      let {
        children: UT,
        placement: mT = "bottom"
      } = TT;
      const [WT, zT] = (0, HT.useState)(null);
      return (0, HT.useEffect)((() => {
        zT(document.getElementById(`clientGameHud-${mT}`))
      }), [mT]), WT ? (0, kT.createPortal)(UT, WT) : null
    }
  },
  4932: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => cT,
      f: () => vT
    });
    var WT = mT(1126),
      zT = mT.n(WT),
      MT = mT(63),
      gT = mT(1288),
      nT = mT(4936),
      HT = mT(2023),
      kT = mT(2552),
      jT = mT(4939),
      lT = mT(1188);
    const LT = new WeakMap;
    let pT = 0;

    function BT(TT) {
      let UT = LT.get(TT);
      return void 0 === UT && (UT = pT++, LT.set(TT, UT)), UT
    }

    function ZT(TT) {
      let {
        piece: UT
      } = TT;
      return "space" === UT.kind ? (0, lT.jsx)(lT.Fragment, {
        children: UT.text
      }) : (0, lT.jsx)("span", {
        className: "DialogueWord",
        style: {
          "--word-delay": `${UT.delayMs}ms`
        },
        children: (0, lT.jsx)(nT.b, {
          text: "icon" === UT.kind ? `[[${UT.icon}]]` : UT.text
        })
      })
    }

    function cT(TT) {
      let {
        display: UT
      } = TT;
      const {
        selectedLanguage: mT
      } = (0, gT.z)(), WT = (0, MT.useMemo)((() => (0, jT.d)((0, jT.e)(UT).plan.pieces)), [UT, mT.code]);
      return (0, lT.jsxs)("div", {
        className: zT()("Dialogue", {
          DialogueAnimateIn: !1 !== UT.animateIn
        }),
        children: [UT.speakerName && (0, lT.jsx)(HT.e, {
          text: UT.speakerName,
          className: "DialogueSpeaker"
        }), (0, lT.jsx)("p", {
          className: "DialogueLine",
          children: WT.map(((TT, UT) => 1 === TT.length && "space" === TT[0].kind ? TT[0].text : (0, lT.jsx)("span", {
            className: "DialogueGlue",
            children: TT.map(((TT, UT) => (0, lT.jsx)(ZT, {
              piece: TT
            }, UT)))
          }, UT)))
        })]
      })
    }
    const vT = (0, MT.memo)((function() {
      const TT = (0, kT.f)("dialogue");
      return (0, lT.jsx)("div", {
        className: "DialogueAnchor",
        "data-camera-keeper": "",
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: TT && (0, lT.jsx)(cT, {
          display: TT
        }, BT(TT))
      })
    }))
  },
  4936: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => nT
    });
    var WT = mT(63),
      zT = mT(351),
      MT = mT(2034),
      gT = mT(1188);

    function nT(TT) {
      let {
        text: UT
      } = TT;
      const mT = [];
      let nT = "";
      return (0, zT.Wb)(UT).forEach(((TT, UT) => {
        if ("string" === typeof TT || !(0, MT.e)(TT.icon)) return void(nT += "string" === typeof TT ? TT : TT.icon);
        const zT = Math.max(0, nT.trimEnd().search(/\S{1,12}$/));
        mT.push((0, gT.jsxs)(WT.Fragment, {
          children: [nT.slice(0, zT), (0, gT.jsxs)("span", {
            className: "InlineIconTextGlue",
            children: [nT.slice(zT), (0, gT.jsx)("span", {
              className: "InlineIconTextIcon",
              role: "img",
              "aria-label": TT.icon,
              children: (0, gT.jsx)(MT.b, {
                itemName: TT.icon,
                amount: 0
              })
            })]
          })]
        }, UT)), nT = ""
      })), mT.push(nT), (0, gT.jsx)(gT.Fragment, {
        children: mT
      })
    }
  },
  34270: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => MT
    });
    var WT = mT(4641),
      zT = mT(4650);

    function MT(TT) {
      let {
        children: UT,
        showing: mT,
        globallyUniqueKey: MT,
        alwaysMountChildren: gT = !1,
        doGameplayStartStopOnShow: nT = !0,
        keepsMovement: HT = !1
      } = TT;
      return (0, zT.d)(!0, mT, MT, HT), (0, WT.c)(nT, mT), mT || gT ? UT : null
    }
  },
  4939: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => IT,
      e: () => XT
    });
    var WT = mT(4948),
      zT = mT(351);
    const MT = 120,
      gT = 260,
      nT = 1.15,
      HT = 1.2,
      kT = 2,
      jT = 1.08,
      lT = .8,
      LT = .95,
      pT = 8,
      BT = "[\"')\\]\u300d\u300f\uff09]*",
      ZT = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${BT}$`),
      cT = new RegExp(`[?\uff1f]${BT}$`),
      vT = new RegExp(`[!\uff01]${BT}$`),
      fT = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      qT = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      iT = new RegExp(`[${qT}]`),
      bT = new RegExp(`[${qT}]|[^${qT}]+`, "g"),
      OT = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function eT(TT) {
      let UT = 2166136261;
      for (let mT = 0; mT < TT.length; mT++) UT ^= TT.charCodeAt(mT), UT = Math.imul(UT, 16777619);
      return (UT >>> 0) / 4294967295 * 2 - 1
    }

    function YT(TT) {
      var UT;
      if (iT.test(TT)) return 1;
      const mT = TT.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        WT = mT.replace(/[^0-9]/g, "");
      if (WT.length > 0 && !/\p{L}/u.test(mT)) return Math.min(WT.length, 4);
      const zT = null !== (UT = mT.match(OT)) && void 0 !== UT ? UT : [];
      if (0 === zT.length) {
        var MT, gT;
        const TT = null !== (MT = null === (gT = mT.match(/\p{L}/gu)) || void 0 === gT ? void 0 : gT.length) && void 0 !== MT ? MT : 0;
        return 0 === TT ? 0 : Math.min(Math.max(1, Math.round(TT / 2.5)), pT)
      }
      const nT = mT.replace(/[^\p{L}]/gu, ""),
        HT = zT.length > 1 && "e" === zT.at(-1) && nT.endsWith("e") && !nT.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(TT.replace(/[^\p{L}]/gu, ""));
      return Math.min(zT.length - (HT ? 1 : 0), pT)
    }

    function JT(TT) {
      return TT.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function xT(TT) {
      const UT = TT.replace(/[^\p{L}]/gu, "");
      return UT.length >= 2 && UT === UT.toUpperCase() && UT !== UT.toLowerCase()
    }

    function dT(TT, UT) {
      var mT;
      const pT = UT && (0, WT.k)(UT),
        BT = null !== (mT = null === pT || void 0 === pT ? void 0 : pT.syllableMs) && void 0 !== mT ? mT : WT.d,
        qT = function(TT) {
          const UT = [];
          for (const WT of (0, zT.Wb)(TT))
            if ("string" === typeof WT)
              for (const TT of WT.split(/(\s+)/)) {
                if ("" === TT) continue;
                if (/^\s+$/.test(TT)) {
                  UT.push({
                    kind: "space",
                    text: TT
                  });
                  continue
                }
                if (!iT.test(TT)) {
                  UT.push({
                    kind: "word",
                    text: TT,
                    delayMs: 0
                  });
                  continue
                }
                let WT = !0;
                for (const zT of null !== (mT = TT.match(bT)) && void 0 !== mT ? mT : []) {
                  var mT;
                  const TT = UT.at(-1);
                  WT || "word" !== (null === TT || void 0 === TT ? void 0 : TT.kind) || iT.test(zT) || /[\p{L}\p{N}]/u.test(zT) ? (WT || UT.push({
                    kind: "space",
                    text: "\u200b"
                  }), UT.push({
                    kind: "word",
                    text: zT,
                    delayMs: 0
                  }), WT = !1) : TT.text += zT
                }
              } else UT.push({
                kind: "icon",
                text: WT.icon,
                delayMs: 0
              });
          return UT
        }(TT),
        OT = [];
      let dT = [];
      for (const WT of qT) "space" !== WT.kind && (dT.push(WT), ZT.test(WT.text) && (OT.push(dT), dT = []));
      OT.push(dT);
      const wT = [];
      let tT = 0;
      for (const WT of OT) {
        var aT, yT;
        const TT = null !== (aT = null === (yT = WT.at(-1)) || void 0 === yT ? void 0 : yT.text) && void 0 !== aT ? aT : "",
          UT = cT.test(TT),
          mT = vT.test(TT),
          zT = WT.map((TT => "word" === TT.kind ? YT(TT.text) : 1)),
          qT = zT.findLastIndex((TT => TT > 0));
        for (const [cT, vT] of WT.entries()) {
          const TT = "word" === vT.kind,
            WT = zT[cT];
          vT.delayMs = tT;
          for (let zT = 0; pT && zT < WT; zT++) {
            const {
              intonation: MT
            } = pT;
            let gT = qT > 0 ? -MT.declineSemitones * (cT / qT) : 0;
            gT += eT(`${JT(vT.text)}|${zT}`) * MT.variationSemitones;
            const ZT = Math.min(1, MT.variationSemitones);
            let fT = pT.glideSemitones,
              iT = 1;
            mT && (gT += MT.exclaimLiftSemitones, iT *= nT), UT && cT === qT && (gT += MT.questionRiseSemitones * (WT > 1 ? .5 + .5 * zT / (WT - 1) : 1), zT === WT - 1 && (fT = Math.abs(fT) + MT.questionRiseSemitones / 2)), TT && xT(vT.text) && (gT += kT * ZT, iT *= HT), WT > 1 && 0 === zT && (gT += lT * ZT, iT *= jT), wT.push({
              atMs: tT + zT * BT,
              semitones: gT,
              glideSemitones: fT,
              durationMs: zT < WT - 1 ? Math.min(pT.durationMs, BT * LT) : pT.durationMs,
              level: iT
            })
          }
          tT += WT * BT + (ZT.test(vT.text) ? gT : fT.test(vT.text) ? MT : 0)
        }
      }
      return {
        pieces: qT.map((TT => "space" === TT.kind ? TT : "icon" === TT.kind ? {
          kind: "icon",
          icon: TT.text,
          delayMs: TT.delayMs
        } : {
          kind: "word",
          text: TT.text,
          delayMs: TT.delayMs
        })),
        blips: wT
      }
    }
    var wT = mT(1288),
      tT = mT(1345),
      aT = mT(2054);

    function yT(TT) {
      if ("string" === typeof TT) return TT;
      const UT = tT.f.get().getCurrentLanguageCode();
      return (0, wT.r)(UT, TT.translationKey, (0, wT.o)(TT.params, aT.d.shown))
    }

    function XT(TT) {
      const UT = void 0 === TT.voice ? null : (0, WT.l)(TT.voice),
        mT = UT && (0, WT.k)(UT);
      return {
        plan: dT(yT(TT.line), mT),
        synth: mT
      }
    }

    function IT(TT) {
      const UT = [];
      let mT = [];
      for (const [zT, MT] of TT.entries()) {
        var WT;
        "space" === MT.kind && (" " !== MT.text || "icon" !== (null === (WT = TT[zT + 1]) || void 0 === WT ? void 0 : WT.kind)) ? (mT.length > 0 && UT.push(mT), UT.push([MT]), mT = []) : mT.push(MT)
      }
      return mT.length > 0 && UT.push(mT), UT
    }
  },
  8852: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => MT,
      f: () => zT
    });
    let WT = null;
    const zT = function(TT) {
        const UT = {
          cycle: TT,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return WT = UT, () => {
          WT === UT && (WT = null)
        }
      },
      MT = () => {
        var TT;
        return null !== (TT = WT) && void 0 !== TT && TT.canCycle() ? WT.cycle : null
      }
  },
  36698: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => MT,
      d: () => ZT,
      h: () => cT,
      j: () => nT,
      l: () => LT,
      n: () => vT,
      p: () => lT,
      r: () => qT,
      s: () => BT,
      v: () => fT
    });
    var WT = mT(25),
      zT = mT(31);
    const MT = "clientGameInventoryButtonsChanged",
      gT = new Map;

    function nT() {
      return [...gT.values()].sort(((TT, UT) => {
        var mT, WT;
        return (null !== (mT = TT.order) && void 0 !== mT ? mT : 0) - (null !== (WT = UT.order) && void 0 !== WT ? WT : 0)
      }))
    }
    let HT = null;

    function kT(TT) {
      HT = TT
    }
    let jT = !1;

    function lT(TT) {
      jT = !0;
      try {
        TT.onClick()
      } finally {
        jT = !1
      }
      TT.panel && "clientGame" === WT.b.get("openInGameMenuName") && kT(TT.id)
    }

    function LT() {
      return jT
    }

    function pT() {
      return nT().filter((TT => TT.panel && !TT.disabled))
    }

    function BT(TT) {
      const UT = pT(),
        mT = UT.findIndex((TT => TT.id === HT));
      return !(mT < 0 || UT.length < 2) && (lT(UT[(mT + TT + UT.length) % UT.length]), !0)
    }

    function ZT() {
      return null !== HT && pT().length > 1
    }

    function cT() {
      kT(null)
    }

    function vT() {
      "inventory" !== WT.b.get("openInGameMenuName") && kT(null)
    }

    function fT() {
      const TT = HT;
      return kT(null), TT
    }

    function qT(TT) {
      return gT.set(TT.id, TT), zT.j.EZ(MT, nT(), !0), () => {
        gT.get(TT.id) === TT && (gT.delete(TT.id), zT.j.EZ(MT, nT()))
      }
    }
  },
  36693: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => nT,
      d: () => cT,
      f: () => vT,
      i: () => LT,
      j: () => kT,
      l: () => ZT,
      n: () => pT,
      q: () => jT
    });
    var WT = mT(25),
      zT = mT(31),
      MT = mT(1388),
      gT = mT(36698);
    const nT = "clientGameUiChanged";
    let HT = null;

    function kT() {
      return HT
    }

    function jT(TT, UT) {
      const mT = {
        content: TT,
        menu: UT
      };
      return HT = mT, zT.j.EZ(nT, HT, !0), () => {
        HT === mT && (HT = null, BT = !1, cT(), zT.j.EZ(nT, null))
      }
    }
    let lT = null;

    function LT() {
      return lT
    }

    function pT(TT) {
      return lT = TT, () => {
        lT === TT && (lT = null)
      }
    }
    let BT = !1;

    function ZT() {
      const TT = WT.b.get("openInGameMenuName");
      "clientGame" !== TT && (BT = "inventory" === TT), (0, gT.l)() || (0, gT.h)(), (0, MT.s)(MT.d), WT.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function cT() {
      fT(!1)
    }

    function vT() {
      fT(BT)
    }

    function fT(TT) {
      "clientGame" === WT.b.get("openInGameMenuName") && WT.b.set({
        openInGameMenuName: TT ? "inventory" : null
      }), TT || (0, gT.h)(), BT = !1
    }
  },
  38649: (TT, UT, mT) => {
    function WT(TT, UT, mT) {
      const WT = new Set,
        zT = new ResizeObserver(mT),
        MT = () => {
          const UT = new Set(document.querySelectorAll(TT));
          let MT = !1;
          for (const TT of WT) UT.has(TT) || (zT.unobserve(TT), WT.delete(TT), MT = !0);
          for (const TT of UT) WT.has(TT) || (zT.observe(TT), gT.observe(TT, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), WT.add(TT));
          MT && mT()
        },
        gT = new MutationObserver((UT => {
          UT.some((TT => "attributes" === TT.type)) && mT(), UT.some((UT => function(TT, UT, mT) {
            if ("childList" !== TT.type) return !1;
            for (const WT of TT.addedNodes)
              if (WT instanceof Element && (WT.matches(UT) || WT.querySelector(UT))) return !0;
            for (const WT of TT.removedNodes)
              if (WT instanceof Element)
                for (const TT of mT)
                  if (WT.contains(TT)) return !0;
            return !1
          }(UT, TT, WT))) && MT()
        }));
      gT.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const nT of UT) zT.observe(nT);
      return window.addEventListener("resize", mT), MT(), mT(), () => {
        zT.disconnect(), gT.disconnect(), window.removeEventListener("resize", mT)
      }
    }
    mT.d(UT, {
      d: () => WT
    })
  },
  8986: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => nT,
      g: () => HT
    });
    var WT = mT(25),
      zT = mT(1429),
      MT = mT(102);
    const gT = {
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

    function nT() {
      return (0, MT.isMobile)() && "function" === typeof navigator.vibrate
    }
    const HT = new class {
      constructor(TT) {
        this.deps = TT, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(TT, UT) {
        var mT;
        if (!this.deps.enabled()) return;
        const WT = gT[TT],
          zT = null !== UT && void 0 !== UT ? UT : WT.pattern;
        if (null === zT) return void console.warn("No vibration pattern for", TT);
        const MT = this.deps.now();
        MT - this.lastAnyAt < 40 && WT.priority < this.playingPriority || MT - (null !== (mT = this.lastAt.get(TT)) && void 0 !== mT ? mT : -1 / 0) < WT.minGapMs || MT < this.playingUntil && WT.priority < this.playingPriority || (this.lastAt.set(TT, MT), this.lastAnyAt = MT, this.playingUntil = MT + zT.reduce(((TT, UT) => TT + UT), 0), this.playingPriority = WT.priority, this.deps.vibrate(zT))
      }
    }({
      vibrate: TT => {
        navigator.vibrate([...TT])
      },
      now: () => performance.now(),
      enabled: () => nT() && WT.b.get("isTouchScreen") && WT.b.get("clientEscMenuOptions").vibration && !(0, zT.e)()
    })
  },
  4948: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => zT,
      e: () => WT,
      h: () => MT,
      k: () => HT,
      l: () => gT
    });
    const WT = ["sine", "triangle", "square", "sawtooth"],
      zT = 55,
      MT = {
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

    function gT(TT) {
      return "string" !== typeof TT ? TT : Object.hasOwn(MT, TT) ? MT[TT] : null
    }

    function nT(TT, UT, mT) {
      return Math.min(mT, Math.max(UT, TT))
    }

    function HT(TT) {
      const UT = nT(TT.durationMs, 10, 500),
        mT = nT(TT.attackMs, 0, UT),
        {
          intonation: zT
        } = TT;
      return {
        waveform: WT.includes(TT.waveform) ? TT.waveform : "sine",
        pitchHz: nT(TT.pitchHz, 20, 4e3),
        glideSemitones: nT(TT.glideSemitones, -24, 24),
        durationMs: UT,
        attackMs: mT,
        releaseMs: nT(TT.releaseMs, 0, UT - mT),
        lowpassHz: null === TT.lowpassHz ? null : nT(TT.lowpassHz, 20, 2e4),
        volume: nT(TT.volume, 0, 2),
        intonation: {
          variationSemitones: nT(zT.variationSemitones, 0, 6),
          declineSemitones: nT(zT.declineSemitones, 0, 12),
          questionRiseSemitones: nT(zT.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: nT(zT.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: nT(TT.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);