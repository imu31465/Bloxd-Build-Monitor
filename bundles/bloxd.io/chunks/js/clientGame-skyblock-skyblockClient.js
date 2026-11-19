export const id = 25;
export const ids = [25];
export const modules = {
  35594: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => xT,
      e: () => cT,
      h: () => LT,
      l: () => DT
    });
    var iT = IT(8743),
      zT = IT(35599),
      kT = IT(35601),
      WT = IT(8139),
      XT = IT(1403),
      BT = IT(46),
      FT = IT(68),
      ST = IT(1083);

    function DT() {
      var TT;
      return (0, XT.i)(zT.c, (0, zT.k)()), (0, ST.jsx)(ST.Fragment, {
        children: null === (TT = (0, zT.k)()) || void 0 === TT ? void 0 : TT.content
      })
    }

    function LT(TT) {
      var oT;
      let {
        show: IT
      } = TT;
      (0, XT.i)(zT.c, (0, zT.k)());
      const FT = null === (oT = (0, zT.k)()) || void 0 === oT ? void 0 : oT.menu;
      return (0, BT.useEffect)((() => {
        var TT;
        IT || (null === FT || void 0 === FT || null === (TT = FT.onClose) || void 0 === TT || TT.call(FT), (0, kT.r)())
      }), [IT, FT]), (0, BT.useEffect)((() => IT ? (0, WT.f)(kT.x, kT.g) : void 0), [IT]), (0, ST.jsx)(iT.c, {
        showing: IT,
        globallyUniqueKey: "clientGameMenu",
        children: null === FT || void 0 === FT ? void 0 : FT.content
      })
    }

    function xT(TT) {
      let {
        placement: oT = "bottom"
      } = TT;
      return (0, ST.jsx)("div", {
        id: `clientGameHud-${oT}`,
        style: {
          display: "contents"
        }
      })
    }

    function cT(TT) {
      let {
        children: oT,
        placement: IT = "bottom"
      } = TT;
      const [iT, zT] = (0, BT.useState)(null);
      return (0, BT.useEffect)((() => {
        zT(document.getElementById(`clientGameHud-${IT}`))
      }), [IT]), iT ? (0, FT.createPortal)(oT, iT) : null
    }
  },
  4311: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => MT,
      g: () => rT
    });
    var iT = IT(1042),
      zT = IT.n(iT),
      kT = IT(46),
      WT = IT(1171),
      XT = IT(4320),
      BT = IT(1729),
      FT = IT(2227),
      ST = IT(4328),
      DT = IT(1083);
    const LT = new WeakMap;
    let xT = 0;

    function cT(TT) {
      let oT = LT.get(TT);
      return void 0 === oT && (oT = xT++, LT.set(TT, oT)), oT
    }

    function KT(TT) {
      let {
        piece: oT
      } = TT;
      return "space" === oT.kind ? (0, DT.jsx)(DT.Fragment, {
        children: oT.text
      }) : (0, DT.jsx)("span", {
        className: "DialogueWord",
        style: {
          "--word-delay": `${oT.delayMs}ms`
        },
        children: (0, DT.jsx)(XT.c, {
          text: "icon" === oT.kind ? `[[${oT.icon}]]` : oT.text
        })
      })
    }

    function MT(TT) {
      let {
        display: oT
      } = TT;
      const {
        selectedLanguage: IT
      } = (0, WT.t)(), iT = (0, kT.useMemo)((() => (0, ST.d)((0, ST.h)(oT).plan.pieces)), [oT, IT.code]);
      return (0, DT.jsxs)("div", {
        className: zT()("Dialogue", {
          DialogueAnimateIn: !1 !== oT.animateIn
        }),
        children: [oT.speakerName && (0, DT.jsx)(BT.c, {
          text: oT.speakerName,
          className: "DialogueSpeaker"
        }), (0, DT.jsx)("p", {
          className: "DialogueLine",
          children: iT.map(((TT, oT) => 1 === TT.length && "space" === TT[0].kind ? TT[0].text : (0, DT.jsx)("span", {
            className: "DialogueGlue",
            children: TT.map(((TT, oT) => (0, DT.jsx)(KT, {
              piece: TT
            }, oT)))
          }, oT)))
        })]
      })
    }
    const rT = (0, kT.memo)((function() {
      const TT = (0, FT.g)("dialogue");
      return (0, DT.jsx)("div", {
        className: "DialogueAnchor",
        "data-camera-keeper": "",
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: TT && (0, DT.jsx)(MT, {
          display: TT
        }, cT(TT))
      })
    }))
  },
  4320: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => XT
    });
    var iT = IT(46),
      zT = IT(306),
      kT = IT(1747),
      WT = IT(1083);

    function XT(TT) {
      let {
        text: oT
      } = TT;
      const IT = [];
      let XT = "";
      return (0, zT.ac)(oT).forEach(((TT, oT) => {
        if ("string" === typeof TT || !(0, kT.g)(TT.icon)) return void(XT += "string" === typeof TT ? TT : TT.icon);
        const zT = Math.max(0, XT.trimEnd().search(/\S{1,12}$/));
        IT.push((0, WT.jsxs)(iT.Fragment, {
          children: [XT.slice(0, zT), (0, WT.jsxs)("span", {
            className: "InlineIconTextGlue",
            children: [XT.slice(zT), (0, WT.jsx)("span", {
              className: "InlineIconTextIcon",
              role: "img",
              "aria-label": TT.icon,
              children: (0, WT.jsx)(kT.c, {
                itemName: TT.icon,
                amount: 0
              })
            })]
          })]
        }, oT)), XT = ""
      })), IT.push(XT), (0, WT.jsx)(WT.Fragment, {
        children: IT
      })
    }
  },
  8743: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => kT
    });
    var iT = IT(4057),
      zT = IT(4061);

    function kT(TT) {
      let {
        children: oT,
        showing: IT,
        globallyUniqueKey: kT,
        alwaysMountChildren: WT = !1,
        doGameplayStartStopOnShow: XT = !0,
        keepsMovement: BT = !1
      } = TT;
      return (0, zT.d)(!0, IT, kT, BT), (0, iT.e)(XT, IT), IT || WT ? oT : null
    }
  },
  4328: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => aT,
      h: () => UT
    });
    var iT = IT(4336),
      zT = IT(306);
    const kT = 120,
      WT = 260,
      XT = 1.15,
      BT = 1.2,
      FT = 2,
      ST = 1.08,
      DT = .8,
      LT = .95,
      xT = 8,
      cT = "[\"')\\]\u300d\u300f\uff09]*",
      KT = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${cT}$`),
      MT = new RegExp(`[?\uff1f]${cT}$`),
      rT = new RegExp(`[!\uff01]${cT}$`),
      AT = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      gT = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      hT = new RegExp(`[${gT}]`),
      wT = new RegExp(`[${gT}]|[^${gT}]+`, "g"),
      mT = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function eT(TT) {
      let oT = 2166136261;
      for (let IT = 0; IT < TT.length; IT++) oT ^= TT.charCodeAt(IT), oT = Math.imul(oT, 16777619);
      return (oT >>> 0) / 4294967295 * 2 - 1
    }

    function RT(TT) {
      var oT;
      if (hT.test(TT)) return 1;
      const IT = TT.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        iT = IT.replace(/[^0-9]/g, "");
      if (iT.length > 0 && !/\p{L}/u.test(IT)) return Math.min(iT.length, 4);
      const zT = null !== (oT = IT.match(mT)) && void 0 !== oT ? oT : [];
      if (0 === zT.length) {
        var kT, WT;
        const TT = null !== (kT = null === (WT = IT.match(/\p{L}/gu)) || void 0 === WT ? void 0 : WT.length) && void 0 !== kT ? kT : 0;
        return 0 === TT ? 0 : Math.min(Math.max(1, Math.round(TT / 2.5)), xT)
      }
      const XT = IT.replace(/[^\p{L}]/gu, ""),
        BT = zT.length > 1 && "e" === zT.at(-1) && XT.endsWith("e") && !XT.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(TT.replace(/[^\p{L}]/gu, ""));
      return Math.min(zT.length - (BT ? 1 : 0), xT)
    }

    function uT(TT) {
      return TT.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function vT(TT) {
      const oT = TT.replace(/[^\p{L}]/gu, "");
      return oT.length >= 2 && oT === oT.toUpperCase() && oT !== oT.toLowerCase()
    }

    function ET(TT, oT) {
      var IT;
      const xT = oT && (0, iT.j)(oT),
        cT = null !== (IT = null === xT || void 0 === xT ? void 0 : xT.syllableMs) && void 0 !== IT ? IT : iT.d,
        gT = function(TT) {
          const oT = [];
          for (const iT of (0, zT.ac)(TT))
            if ("string" === typeof iT)
              for (const TT of iT.split(/(\s+)/)) {
                if ("" === TT) continue;
                if (/^\s+$/.test(TT)) {
                  oT.push({
                    kind: "space",
                    text: TT
                  });
                  continue
                }
                if (!hT.test(TT)) {
                  oT.push({
                    kind: "word",
                    text: TT,
                    delayMs: 0
                  });
                  continue
                }
                let iT = !0;
                for (const zT of null !== (IT = TT.match(wT)) && void 0 !== IT ? IT : []) {
                  var IT;
                  const TT = oT.at(-1);
                  iT || "word" !== (null === TT || void 0 === TT ? void 0 : TT.kind) || hT.test(zT) || /[\p{L}\p{N}]/u.test(zT) ? (iT || oT.push({
                    kind: "space",
                    text: "\u200b"
                  }), oT.push({
                    kind: "word",
                    text: zT,
                    delayMs: 0
                  }), iT = !1) : TT.text += zT
                }
              } else oT.push({
                kind: "icon",
                text: iT.icon,
                delayMs: 0
              });
          return oT
        }(TT),
        mT = [];
      let ET = [];
      for (const iT of gT) "space" !== iT.kind && (ET.push(iT), KT.test(iT.text) && (mT.push(ET), ET = []));
      mT.push(ET);
      const fT = [];
      let CT = 0;
      for (const iT of mT) {
        var jT, JT;
        const TT = null !== (jT = null === (JT = iT.at(-1)) || void 0 === JT ? void 0 : JT.text) && void 0 !== jT ? jT : "",
          oT = MT.test(TT),
          IT = rT.test(TT),
          zT = iT.map((TT => "word" === TT.kind ? RT(TT.text) : 1)),
          gT = zT.findLastIndex((TT => TT > 0));
        for (const [MT, rT] of iT.entries()) {
          const TT = "word" === rT.kind,
            iT = zT[MT];
          rT.delayMs = CT;
          for (let zT = 0; xT && zT < iT; zT++) {
            const {
              intonation: kT
            } = xT;
            let WT = gT > 0 ? -kT.declineSemitones * (MT / gT) : 0;
            WT += eT(`${uT(rT.text)}|${zT}`) * kT.variationSemitones;
            const KT = Math.min(1, kT.variationSemitones);
            let AT = xT.glideSemitones,
              hT = 1;
            IT && (WT += kT.exclaimLiftSemitones, hT *= XT), oT && MT === gT && (WT += kT.questionRiseSemitones * (iT > 1 ? .5 + .5 * zT / (iT - 1) : 1), zT === iT - 1 && (AT = Math.abs(AT) + kT.questionRiseSemitones / 2)), TT && vT(rT.text) && (WT += FT * KT, hT *= BT), iT > 1 && 0 === zT && (WT += DT * KT, hT *= ST), fT.push({
              atMs: CT + zT * cT,
              semitones: WT,
              glideSemitones: AT,
              durationMs: zT < iT - 1 ? Math.min(xT.durationMs, cT * LT) : xT.durationMs,
              level: hT
            })
          }
          CT += iT * cT + (KT.test(rT.text) ? WT : AT.test(rT.text) ? kT : 0)
        }
      }
      return {
        pieces: gT.map((TT => "space" === TT.kind ? TT : "icon" === TT.kind ? {
          kind: "icon",
          icon: TT.text,
          delayMs: TT.delayMs
        } : {
          kind: "word",
          text: TT.text,
          delayMs: TT.delayMs
        })),
        blips: fT
      }
    }
    var fT = IT(1171),
      CT = IT(1220),
      jT = IT(1755);

    function JT(TT) {
      if ("string" === typeof TT) return TT;
      const oT = CT.d.get().getCurrentLanguageCode();
      return (0, fT.n)(oT, TT.translationKey, (0, fT.m)(TT.params, jT.e.shown))
    }

    function UT(TT) {
      const oT = void 0 === TT.voice ? null : (0, iT.m)(TT.voice),
        IT = oT && (0, iT.j)(oT);
      return {
        plan: ET(JT(TT.line), IT),
        synth: IT
      }
    }

    function aT(TT) {
      const oT = [];
      let IT = [];
      for (const [zT, kT] of TT.entries()) {
        var iT;
        "space" === kT.kind && (" " !== kT.text || "icon" !== (null === (iT = TT[zT + 1]) || void 0 === iT ? void 0 : iT.kind)) ? (IT.length > 0 && oT.push(IT), oT.push([kT]), IT = []) : IT.push(kT)
      }
      return IT.length > 0 && oT.push(IT), oT
    }
  },
  8139: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => kT,
      f: () => zT
    });
    let iT = null;
    const zT = function(TT) {
        const oT = {
          cycle: TT,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return iT = oT, () => {
          iT === oT && (iT = null)
        }
      },
      kT = () => {
        var TT;
        return null !== (TT = iT) && void 0 !== TT && TT.canCycle() ? iT.cycle : null
      }
  },
  35601: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => kT,
      g: () => KT,
      j: () => MT,
      m: () => XT,
      n: () => LT,
      r: () => rT,
      s: () => DT,
      w: () => gT,
      x: () => cT,
      y: () => AT
    });
    var iT = IT(12),
      zT = IT(16);
    const kT = "clientGameInventoryButtonsChanged",
      WT = new Map;

    function XT() {
      return [...WT.values()].sort(((TT, oT) => {
        var IT, iT;
        return (null !== (IT = TT.order) && void 0 !== IT ? IT : 0) - (null !== (iT = oT.order) && void 0 !== iT ? iT : 0)
      }))
    }
    let BT = null;

    function FT(TT) {
      BT = TT
    }
    let ST = !1;

    function DT(TT) {
      ST = !0;
      try {
        TT.onClick()
      } finally {
        ST = !1
      }
      TT.panel && "clientGame" === iT.c.get("openInGameMenuName") && FT(TT.id)
    }

    function LT() {
      return ST
    }

    function xT() {
      return XT().filter((TT => TT.panel && !TT.disabled))
    }

    function cT(TT) {
      const oT = xT(),
        IT = oT.findIndex((TT => TT.id === BT));
      return !(IT < 0 || oT.length < 2) && (DT(oT[(IT + TT + oT.length) % oT.length]), !0)
    }

    function KT() {
      return null !== BT && xT().length > 1
    }

    function MT() {
      FT(null)
    }

    function rT() {
      "inventory" !== iT.c.get("openInGameMenuName") && FT(null)
    }

    function AT() {
      const TT = BT;
      return FT(null), TT
    }

    function gT(TT) {
      return WT.set(TT.id, TT), zT.h.XM(kT, XT(), !0), () => {
        WT.get(TT.id) === TT && (WT.delete(TT.id), zT.h.XM(kT, XT()))
      }
    }
  },
  35599: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => XT,
      e: () => MT,
      h: () => rT,
      i: () => LT,
      k: () => FT,
      o: () => KT,
      s: () => xT,
      u: () => ST
    });
    var iT = IT(12),
      zT = IT(16),
      kT = IT(1253),
      WT = IT(35601);
    const XT = "clientGameUiChanged";
    let BT = null;

    function FT() {
      return BT
    }

    function ST(TT, oT) {
      const IT = {
        content: TT,
        menu: oT
      };
      return BT = IT, zT.h.XM(XT, BT, !0), () => {
        BT === IT && (BT = null, cT = !1, MT(), zT.h.XM(XT, null))
      }
    }
    let DT = null;

    function LT() {
      return DT
    }

    function xT(TT) {
      return DT = TT, () => {
        DT === TT && (DT = null)
      }
    }
    let cT = !1;

    function KT() {
      const TT = iT.c.get("openInGameMenuName");
      "clientGame" !== TT && (cT = "inventory" === TT), (0, WT.n)() || (0, WT.j)(), (0, kT.o)(kT.c), iT.c.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function MT() {
      AT(!1)
    }

    function rT() {
      AT(cT)
    }

    function AT(TT) {
      "clientGame" === iT.c.get("openInGameMenuName") && iT.c.set({
        openInGameMenuName: TT ? "inventory" : null
      }), TT || (0, WT.j)(), cT = !1
    }
  },
  37489: (TT, oT, IT) => {
    function iT(TT, oT, IT) {
      const iT = new Set,
        zT = new ResizeObserver(IT),
        kT = () => {
          const oT = new Set(document.querySelectorAll(TT));
          let kT = !1;
          for (const TT of iT) oT.has(TT) || (zT.unobserve(TT), iT.delete(TT), kT = !0);
          for (const TT of oT) iT.has(TT) || (zT.observe(TT), WT.observe(TT, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), iT.add(TT));
          kT && IT()
        },
        WT = new MutationObserver((oT => {
          oT.some((TT => "attributes" === TT.type)) && IT(), oT.some((oT => function(TT, oT, IT) {
            if ("childList" !== TT.type) return !1;
            for (const iT of TT.addedNodes)
              if (iT instanceof Element && (iT.matches(oT) || iT.querySelector(oT))) return !0;
            for (const iT of TT.removedNodes)
              if (iT instanceof Element)
                for (const TT of IT)
                  if (iT.contains(TT)) return !0;
            return !1
          }(oT, TT, iT))) && kT()
        }));
      WT.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const XT of oT) zT.observe(XT);
      return window.addEventListener("resize", IT), kT(), IT(), () => {
        zT.disconnect(), WT.disconnect(), window.removeEventListener("resize", IT)
      }
    }
    IT.d(oT, {
      e: () => iT
    })
  },
  8307: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => XT,
      g: () => BT
    });
    var iT = IT(12),
      zT = IT(1293),
      kT = IT(90);
    const WT = {
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

    function XT() {
      return (0, kT.isMobile)() && "function" === typeof navigator.vibrate
    }
    const BT = new class {
      constructor(TT) {
        this.deps = TT, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(TT, oT) {
        var IT;
        if (!this.deps.enabled()) return;
        const iT = WT[TT],
          zT = null !== oT && void 0 !== oT ? oT : iT.pattern;
        if (null === zT) return void console.warn("No vibration pattern for", TT);
        const kT = this.deps.now();
        kT - this.lastAnyAt < 40 && iT.priority < this.playingPriority || kT - (null !== (IT = this.lastAt.get(TT)) && void 0 !== IT ? IT : -1 / 0) < iT.minGapMs || kT < this.playingUntil && iT.priority < this.playingPriority || (this.lastAt.set(TT, kT), this.lastAnyAt = kT, this.playingUntil = kT + zT.reduce(((TT, oT) => TT + oT), 0), this.playingPriority = iT.priority, this.deps.vibrate(zT))
      }
    }({
      vibrate: TT => {
        navigator.vibrate([...TT])
      },
      now: () => performance.now(),
      enabled: () => XT() && iT.c.get("isTouchScreen") && iT.c.get("clientEscMenuOptions").vibration && !(0, zT.h)()
    })
  },
  36510: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => XT,
      e: () => WT
    });
    var iT = IT(36501),
      zT = IT(314),
      kT = IT(1724);

    function WT(TT) {
      if ("xz" in TT) return mT.createAnimationScript(TT);
      return new FT(TT).createAnimationScript()
    }

    function XT(TT, oT, IT, zT) {
      const kT = TT.xz <= 0 ? 1 : oT + IT * Math.max(0, zT) / TT.xz;
      return TT.Kz === iT.i.LoopOnLastFrame ? kT % 1 : TT.Kz === iT.i.NoLoop && kT >= 1 ? null : Math.min(1, kT)
    }
    class BT {
      createAnimationScript(TT) {
        const {
          xz: oT,
          loop: IT,
          Mz: iT
        } = TT;
        return {
          xz: Math.round(oT),
          Kz: this.createLoopMode(null !== IT && void 0 !== IT && IT),
          Mz: this.createNodeSkeletonAnimationScript(null !== iT && void 0 !== iT ? iT : null)
        }
      }
      createLoopMode(TT) {
        switch (TT) {
          case !1:
            return iT.i.NoLoop;
          case !0:
            return iT.i.LoopOnLastFrame;
          case "hold-on-last-frame":
            return iT.i.HoldOnLastFrame
        }
        throw new Error(`Invalid loop mode schema: ${TT}`)
      }
      createNodeSkeletonAnimationScript(TT) {
        if (null === TT) return null;
        const oT = {};
        for (const IT in TT) {
          const iT = TT[IT];
          oT[IT] = this.createNodeAnimationScript(iT)
        }
        return oT
      }
      createNodeAnimationScript(TT) {
        const {
          timeline: oT
        } = TT, IT = oT.filter((TT => Number.isFinite(TT.timeFraction)));
        return IT.sort(((TT, oT) => TT.timeFraction - oT.timeFraction)), {
          rotation: this.createTimelineFromKeyframes(IT, "rotation", LT),
          position: this.createTimelineFromKeyframes(IT, "position", cT)
        }
      }
      createTimelineFromKeyframes(TT, oT, IT) {
        const iT = [];
        for (const BT of TT) {
          const TT = BT[oT];
          if (TT) {
            const oT = this.createAnimationFrameWithoutPrecomputes(BT.timeFraction, TT);
            ST(oT) && iT.push(oT)
          }
        }
        const zT = [];
        for (let BT = 0; BT < iT.length; BT++) {
          var kT, WT, XT;
          const TT = iT[BT],
            oT = null !== (kT = iT[BT - 1]) && void 0 !== kT ? kT : TT,
            FT = null !== (WT = iT[BT + 1]) && void 0 !== WT ? WT : TT,
            ST = null !== (XT = iT[BT + 2]) && void 0 !== XT ? XT : FT;
          zT.push({
            ...TT,
            ...IT(oT.post, oT.timeFraction, TT.post, TT.timeFraction, FT.pre, FT.timeFraction, ST.pre, ST.timeFraction)
          })
        }
        return zT
      }
      createAnimationFrameWithoutPrecomputes(TT, oT) {
        let IT, iT, zT = null;
        var kT;
        if ("object" === typeof oT && "point" in oT) zT = null !== (kT = oT.gz) && void 0 !== kT ? kT : null, IT = oT.point, iT = oT.point;
        else if ("object" === typeof oT && "pre" in oT) {
          var WT;
          zT = null !== (WT = oT.gz) && void 0 !== WT ? WT : null, IT = oT.pre, iT = oT.post
        } else IT = oT, iT = oT;
        return {
          timeFraction: TT,
          gz: this.createLerpMode(zT),
          pre: IT,
          post: iT
        }
      }
      createLerpMode(TT) {
        return null === TT ? iT.h.Linear : BT.LERP_MODE_SCHEMA_MAPPING[TT]
      }
    }
    BT.LERP_MODE_SCHEMA_MAPPING = {
      linear: iT.h.Linear,
      "catmull-rom-spline": iT.h.CatmullRomSpline
    };
    class FT {
      constructor(TT) {
        this.animationSchema = TT
      }
      createAnimationScript() {
        const {
          animation_length: TT,
          loop: oT,
          bones: IT
        } = this.animationSchema;
        return {
          xz: Math.round(1e3 * TT),
          Kz: this.createLoopMode(null !== oT && void 0 !== oT && oT),
          Mz: this.createNodeSkeletonAnimationScript(null !== IT && void 0 !== IT ? IT : null)
        }
      }
      createLoopMode(TT) {
        switch (TT) {
          case !1:
            return iT.i.NoLoop;
          case !0:
            return iT.i.LoopOnLastFrame;
          case "hold_on_last_frame":
            return iT.i.HoldOnLastFrame
        }
        throw new Error(`Invalid Blockbench loop mode schema: ${TT}`)
      }
      createNodeSkeletonAnimationScript(TT) {
        if (null === TT) return null;
        const oT = {};
        for (const IT in TT) {
          const iT = TT[IT];
          oT[IT] = this.createNodeAnimationScript(iT)
        }
        return oT
      }
      createNodeAnimationScript(TT) {
        const {
          rotation: oT,
          position: IT
        } = TT;
        return {
          rotation: this.createAnimationTimeline(null !== oT && void 0 !== oT ? oT : null, MT, LT, !0),
          position: this.createAnimationTimeline(null !== IT && void 0 !== IT ? IT : null, AT, cT, !1)
        }
      }
      createAnimationTimeline(TT, oT, IT, iT) {
        if (null === TT) return [];
        if (Array.isArray(TT)) {
          TT = {
            "0.0": TT
          }
        }
        const zT = Object.entries(TT).map((TT => {
          let [IT, iT] = TT;
          const zT = Number(IT) / this.animationSchema.animation_length;
          return this.createAnimationFrameWithoutPrecomputes(zT, iT, oT)
        })).filter(ST);
        zT.sort(((TT, oT) => TT.timeFraction - oT.timeFraction)), iT && function(TT) {
          for (let oT = 1; oT < TT.length; oT++) {
            const IT = TT[oT - 1].post,
              iT = TT[oT],
              zT = gT(iT.pre),
              kT = gT(iT.post),
              WT = wT(IT, iT.pre);
            wT(IT, zT) < WT && (TT[oT] = {
              ...iT,
              pre: zT,
              post: kT
            })
          }
        }(zT);
        const kT = [];
        for (let FT = 0; FT < zT.length; FT++) {
          var WT, XT, BT;
          const TT = zT[FT],
            oT = null !== (WT = zT[FT - 1]) && void 0 !== WT ? WT : TT,
            iT = null !== (XT = zT[FT + 1]) && void 0 !== XT ? XT : TT,
            ST = null !== (BT = zT[FT + 2]) && void 0 !== BT ? BT : iT;
          kT.push({
            ...TT,
            ...IT(oT.post, oT.timeFraction, TT.post, TT.timeFraction, iT.pre, iT.timeFraction, ST.pre, ST.timeFraction)
          })
        }
        return kT
      }
      createAnimationFrameWithoutPrecomputes(TT, oT, IT) {
        let iT, zT, kT = null;
        if ("object" === typeof oT && "post" in oT) {
          var WT;
          kT = null !== (WT = oT.lerp_mode) && void 0 !== WT ? WT : null, zT = KT(oT.post, IT), iT = oT.pre ? KT(oT.pre, IT) : zT
        } else {
          const TT = KT(oT, IT);
          zT = TT, iT = TT
        }
        return {
          timeFraction: TT,
          gz: this.createLerpMode(kT),
          pre: iT,
          post: zT
        }
      }
      createLerpMode(TT) {
        return null === TT ? iT.h.Linear : FT.LERP_MODE_SCHEMA_MAPPING[TT]
      }
    }

    function ST(TT) {
      return Number.isFinite(TT.timeFraction) && DT(TT.pre) && DT(TT.post)
    }

    function DT(TT) {
      return Number.isFinite(TT[0]) && Number.isFinite(TT[1]) && Number.isFinite(TT[2])
    }

    function LT(TT, oT, IT, iT, zT, kT, WT, XT) {
      const BT = kT - oT,
        FT = kT - iT,
        ST = XT - iT,
        DT = [null, null, null];
      for (let LT = 0; LT < DT.length; LT++) DT[LT] = xT(TT[LT], IT[LT], zT[LT], WT[LT], BT, ST);
      return {
        hz: FT,
        wz: DT
      }
    }

    function xT(TT, oT, IT, iT, kT, WT) {
      return {
        ez: zT.e.computeShortestRotation(TT, IT) / kT,
        Rz: zT.e.computeShortestRotation(oT, iT) / WT,
        delta: zT.e.computeShortestRotation(oT, IT)
      }
    }

    function cT(TT, oT, IT, iT, zT, kT, WT, XT) {
      const BT = kT - oT,
        FT = kT - iT,
        ST = XT - iT,
        DT = [null, null, null];
      for (let LT = 0; LT < DT.length; LT++) DT[LT] = {
        ez: (zT[LT] - TT[LT]) / BT,
        Rz: (WT[LT] - IT[LT]) / ST,
        delta: zT[LT] - IT[LT]
      };
      return {
        hz: FT,
        wz: DT
      }
    }

    function KT(TT, oT) {
      return null === oT ? TT : oT(TT)
    }

    function MT(TT) {
      const [oT, IT, iT] = TT, WT = -(0, kT.m)(oT), XT = -(0, kT.m)(IT), BT = (0, kT.m)(iT), FT = zT.e.quaternionFromEulerZYX(WT, XT, BT);
      return zT.e.eulerYXZFromQuaternion(FT)
    }
    FT.LERP_MODE_SCHEMA_MAPPING = {
      linear: iT.h.Linear,
      catmullrom: iT.h.CatmullRomSpline
    };
    const rT = 1 / 16;

    function AT(TT) {
      return [-TT[0] * rT, TT[1] * rT, TT[2] * rT]
    }

    function gT(TT) {
      const [oT, IT, iT] = TT;
      return [oT >= 0 ? Math.PI - oT : -Math.PI - oT, hT(IT + Math.PI), hT(iT + Math.PI)]
    }

    function hT(TT) {
      return zT.e.mod(TT + Math.PI, 2 * Math.PI) - Math.PI
    }

    function wT(TT, oT) {
      return Math.abs(zT.e.computeShortestRotation(TT[0], oT[0])) + Math.abs(zT.e.computeShortestRotation(TT[1], oT[1])) + Math.abs(zT.e.computeShortestRotation(TT[2], oT[2]))
    }
    const mT = new BT
  },
  36501: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => WT,
      e: () => kT,
      h: () => iT,
      i: () => zT
    });
    let iT = function(TT) {
        return TT[TT.Linear = 0] = "Linear", TT[TT.CatmullRomSpline = 1] = "CatmullRomSpline", TT
      }({}),
      zT = function(TT) {
        return TT[TT.NoLoop = 0] = "NoLoop", TT[TT.LoopOnLastFrame = 1] = "LoopOnLastFrame", TT[TT.HoldOnLastFrame = 2] = "HoldOnLastFrame", TT
      }({}),
      kT = function(TT) {
        return TT[TT.Movement = 0] = "Movement", TT[TT.Action = 1] = "Action", TT[TT.Emote = 2] = "Emote", TT[TT.Custom = 3] = "Custom", TT
      }({}),
      WT = function(TT) {
        return TT[TT.Start = 0] = "Start", TT[TT.Stop = 1] = "Stop", TT
      }({})
  },
  4336: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => zT,
      f: () => iT,
      g: () => kT,
      j: () => BT,
      m: () => WT
    });
    const iT = ["sine", "triangle", "square", "sawtooth"],
      zT = 55,
      kT = {
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

    function WT(TT) {
      return "string" !== typeof TT ? TT : Object.hasOwn(kT, TT) ? kT[TT] : null
    }

    function XT(TT, oT, IT) {
      return Math.min(IT, Math.max(oT, TT))
    }

    function BT(TT) {
      const oT = XT(TT.durationMs, 10, 500),
        IT = XT(TT.attackMs, 0, oT),
        {
          intonation: zT
        } = TT;
      return {
        waveform: iT.includes(TT.waveform) ? TT.waveform : "sine",
        pitchHz: XT(TT.pitchHz, 20, 4e3),
        glideSemitones: XT(TT.glideSemitones, -24, 24),
        durationMs: oT,
        attackMs: IT,
        releaseMs: XT(TT.releaseMs, 0, oT - IT),
        lowpassHz: null === TT.lowpassHz ? null : XT(TT.lowpassHz, 20, 2e4),
        volume: XT(TT.volume, 0, 2),
        intonation: {
          variationSemitones: XT(zT.variationSemitones, 0, 6),
          declineSemitones: XT(zT.declineSemitones, 0, 12),
          questionRiseSemitones: XT(zT.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: XT(zT.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: XT(TT.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);