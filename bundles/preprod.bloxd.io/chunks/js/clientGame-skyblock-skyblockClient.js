export const id = 26;
export const ids = [26];
export const modules = {
  36891: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => IQ,
      g: () => jQ,
      k: () => rQ,
      o: () => JQ
    });
    var wQ = XQ(34500),
      qQ = XQ(36900),
      TQ = XQ(36906),
      zQ = XQ(9099),
      sQ = XQ(1498),
      FQ = XQ(61),
      PQ = XQ(78),
      gQ = XQ(1145);

    function JQ() {
      var QQ;
      return (0, sQ.j)(qQ.c, (0, qQ.s)()), (0, gQ.jsx)(gQ.Fragment, {
        children: null === (QQ = (0, qQ.s)()) || void 0 === QQ ? void 0 : QQ.content
      })
    }

    function rQ(QQ) {
      var WQ;
      let {
        show: XQ
      } = QQ;
      (0, sQ.j)(qQ.c, (0, qQ.s)());
      const PQ = null === (WQ = (0, qQ.s)()) || void 0 === WQ ? void 0 : WQ.menu;
      return (0, FQ.useEffect)((() => {
        var QQ;
        XQ || (null === PQ || void 0 === PQ || null === (QQ = PQ.onClose) || void 0 === QQ || QQ.call(PQ), (0, TQ.r)())
      }), [XQ, PQ]), (0, FQ.useEffect)((() => XQ ? (0, zQ.e)(TQ.y, TQ.f) : void 0), [XQ]), (0, gQ.jsx)(wQ.c, {
        showing: XQ,
        globallyUniqueKey: "clientGameMenu",
        children: null === PQ || void 0 === PQ ? void 0 : PQ.content
      })
    }

    function IQ(QQ) {
      let {
        placement: WQ = "bottom"
      } = QQ;
      return (0, gQ.jsx)("div", {
        id: `clientGameHud-${WQ}`,
        style: {
          display: "contents"
        }
      })
    }

    function jQ(QQ) {
      let {
        children: WQ,
        placement: XQ = "bottom"
      } = QQ;
      const [wQ, qQ] = (0, FQ.useState)(null);
      return (0, FQ.useEffect)((() => {
        qQ(document.getElementById(`clientGameHud-${XQ}`))
      }), [XQ]), wQ ? (0, PQ.createPortal)(WQ, wQ) : null
    }
  },
  5178: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => yQ,
      f: () => VQ
    });
    var wQ = XQ(1081),
      qQ = XQ.n(wQ),
      TQ = XQ(61),
      zQ = XQ(1226),
      sQ = XQ(5181),
      FQ = XQ(1975),
      PQ = XQ(2535),
      gQ = XQ(5187),
      JQ = XQ(1145);
    const rQ = new WeakMap;
    let IQ = 0;

    function jQ(QQ) {
      let WQ = rQ.get(QQ);
      return void 0 === WQ && (WQ = IQ++, rQ.set(QQ, WQ)), WQ
    }

    function BQ(QQ) {
      let {
        piece: WQ
      } = QQ;
      return "space" === WQ.kind ? (0, JQ.jsx)(JQ.Fragment, {
        children: WQ.text
      }) : (0, JQ.jsx)("span", {
        className: "DialogueWord",
        style: {
          "--word-delay": `${WQ.delayMs}ms`
        },
        children: (0, JQ.jsx)(sQ.e, {
          text: "icon" === WQ.kind ? `[[${WQ.icon}]]` : WQ.text
        })
      })
    }

    function yQ(QQ) {
      let {
        display: WQ
      } = QQ;
      const {
        selectedLanguage: XQ
      } = (0, zQ.C)(), wQ = (0, TQ.useMemo)((() => (0, gQ.c)((0, gQ.f)(WQ).plan.pieces)), [WQ, XQ.code]);
      return (0, JQ.jsxs)("div", {
        className: qQ()("Dialogue", {
          DialogueAnimateIn: !1 !== WQ.animateIn
        }),
        children: [WQ.speakerName && (0, JQ.jsx)(FQ.e, {
          text: WQ.speakerName,
          className: "DialogueSpeaker"
        }), (0, JQ.jsx)("p", {
          className: "DialogueLine",
          children: wQ.map(((QQ, WQ) => 1 === QQ.length && "space" === QQ[0].kind ? QQ[0].text : (0, JQ.jsx)("span", {
            className: "DialogueGlue",
            children: QQ.map(((QQ, WQ) => (0, JQ.jsx)(BQ, {
              piece: QQ
            }, WQ)))
          }, WQ)))
        })]
      })
    }
    const VQ = (0, TQ.memo)((function() {
      const QQ = (0, PQ.g)("dialogue");
      return (0, JQ.jsx)("div", {
        className: "DialogueAnchor",
        "data-camera-keeper": "",
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: QQ && (0, JQ.jsx)(yQ, {
          display: QQ
        }, jQ(QQ))
      })
    }))
  },
  5181: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => sQ
    });
    var wQ = XQ(61),
      qQ = XQ(382),
      TQ = XQ(1988),
      zQ = XQ(1145);

    function sQ(QQ) {
      let {
        text: WQ
      } = QQ;
      const XQ = [];
      let sQ = "";
      return (0, qQ.gc)(WQ).forEach(((QQ, WQ) => {
        if ("string" === typeof QQ || !(0, TQ.e)(QQ.icon)) return void(sQ += "string" === typeof QQ ? QQ : QQ.icon);
        const qQ = Math.max(0, sQ.trimEnd().search(/\S{1,12}$/));
        XQ.push((0, zQ.jsxs)(wQ.Fragment, {
          children: [sQ.slice(0, qQ), (0, zQ.jsxs)("span", {
            className: "InlineIconTextGlue",
            children: [sQ.slice(qQ), (0, zQ.jsx)("span", {
              className: "InlineIconTextIcon",
              role: "img",
              "aria-label": QQ.icon,
              children: (0, zQ.jsx)(TQ.d, {
                itemName: QQ.icon,
                amount: 0
              })
            })]
          })]
        }, WQ)), sQ = ""
      })), XQ.push(sQ), (0, zQ.jsx)(zQ.Fragment, {
        children: XQ
      })
    }
  },
  34500: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => TQ
    });
    var wQ = XQ(4859),
      qQ = XQ(4863);

    function TQ(QQ) {
      let {
        children: WQ,
        showing: XQ,
        globallyUniqueKey: TQ,
        alwaysMountChildren: zQ = !1,
        doGameplayStartStopOnShow: sQ = !0,
        keepsMovement: FQ = !1
      } = QQ;
      return (0, qQ.c)(!0, XQ, TQ, FQ), (0, wQ.c)(sQ, XQ), XQ || zQ ? WQ : null
    }
  },
  5187: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => EQ,
      f: () => RQ
    });
    var wQ = XQ(5196),
      qQ = XQ(382);
    const TQ = 120,
      zQ = 260,
      sQ = 1.15,
      FQ = 1.2,
      PQ = 2,
      gQ = 1.08,
      JQ = .8,
      rQ = .95,
      IQ = 8,
      jQ = "[\"')\\]\u300d\u300f\uff09]*",
      BQ = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${jQ}$`),
      yQ = new RegExp(`[?\uff1f]${jQ}$`),
      VQ = new RegExp(`[!\uff01]${jQ}$`),
      DQ = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      pQ = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      GQ = new RegExp(`[${pQ}]`),
      UQ = new RegExp(`[${pQ}]|[^${pQ}]+`, "g"),
      bQ = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function vQ(QQ) {
      let WQ = 2166136261;
      for (let XQ = 0; XQ < QQ.length; XQ++) WQ ^= QQ.charCodeAt(XQ), WQ = Math.imul(WQ, 16777619);
      return (WQ >>> 0) / 4294967295 * 2 - 1
    }

    function dQ(QQ) {
      var WQ;
      if (GQ.test(QQ)) return 1;
      const XQ = QQ.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        wQ = XQ.replace(/[^0-9]/g, "");
      if (wQ.length > 0 && !/\p{L}/u.test(XQ)) return Math.min(wQ.length, 4);
      const qQ = null !== (WQ = XQ.match(bQ)) && void 0 !== WQ ? WQ : [];
      if (0 === qQ.length) {
        var TQ, zQ;
        const QQ = null !== (TQ = null === (zQ = XQ.match(/\p{L}/gu)) || void 0 === zQ ? void 0 : zQ.length) && void 0 !== TQ ? TQ : 0;
        return 0 === QQ ? 0 : Math.min(Math.max(1, Math.round(QQ / 2.5)), IQ)
      }
      const sQ = XQ.replace(/[^\p{L}]/gu, ""),
        FQ = qQ.length > 1 && "e" === qQ.at(-1) && sQ.endsWith("e") && !sQ.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(QQ.replace(/[^\p{L}]/gu, ""));
      return Math.min(qQ.length - (FQ ? 1 : 0), IQ)
    }

    function HQ(QQ) {
      return QQ.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function aQ(QQ) {
      const WQ = QQ.replace(/[^\p{L}]/gu, "");
      return WQ.length >= 2 && WQ === WQ.toUpperCase() && WQ !== WQ.toLowerCase()
    }

    function lQ(QQ, WQ) {
      var XQ;
      const IQ = WQ && (0, wQ.l)(WQ),
        jQ = null !== (XQ = null === IQ || void 0 === IQ ? void 0 : IQ.syllableMs) && void 0 !== XQ ? XQ : wQ.d,
        pQ = function(QQ) {
          const WQ = [];
          for (const wQ of (0, qQ.gc)(QQ))
            if ("string" === typeof wQ)
              for (const QQ of wQ.split(/(\s+)/)) {
                if ("" === QQ) continue;
                if (/^\s+$/.test(QQ)) {
                  WQ.push({
                    kind: "space",
                    text: QQ
                  });
                  continue
                }
                if (!GQ.test(QQ)) {
                  WQ.push({
                    kind: "word",
                    text: QQ,
                    delayMs: 0
                  });
                  continue
                }
                let wQ = !0;
                for (const qQ of null !== (XQ = QQ.match(UQ)) && void 0 !== XQ ? XQ : []) {
                  var XQ;
                  const QQ = WQ.at(-1);
                  wQ || "word" !== (null === QQ || void 0 === QQ ? void 0 : QQ.kind) || GQ.test(qQ) || /[\p{L}\p{N}]/u.test(qQ) ? (wQ || WQ.push({
                    kind: "space",
                    text: "\u200b"
                  }), WQ.push({
                    kind: "word",
                    text: qQ,
                    delayMs: 0
                  }), wQ = !1) : QQ.text += qQ
                }
              } else WQ.push({
                kind: "icon",
                text: wQ.icon,
                delayMs: 0
              });
          return WQ
        }(QQ),
        bQ = [];
      let lQ = [];
      for (const wQ of pQ) "space" !== wQ.kind && (lQ.push(wQ), BQ.test(wQ.text) && (bQ.push(lQ), lQ = []));
      bQ.push(lQ);
      const hQ = [];
      let iQ = 0;
      for (const wQ of bQ) {
        var cQ, AQ;
        const QQ = null !== (cQ = null === (AQ = wQ.at(-1)) || void 0 === AQ ? void 0 : AQ.text) && void 0 !== cQ ? cQ : "",
          WQ = yQ.test(QQ),
          XQ = VQ.test(QQ),
          qQ = wQ.map((QQ => "word" === QQ.kind ? dQ(QQ.text) : 1)),
          pQ = qQ.findLastIndex((QQ => QQ > 0));
        for (const [yQ, VQ] of wQ.entries()) {
          const QQ = "word" === VQ.kind,
            wQ = qQ[yQ];
          VQ.delayMs = iQ;
          for (let qQ = 0; IQ && qQ < wQ; qQ++) {
            const {
              intonation: TQ
            } = IQ;
            let zQ = pQ > 0 ? -TQ.declineSemitones * (yQ / pQ) : 0;
            zQ += vQ(`${HQ(VQ.text)}|${qQ}`) * TQ.variationSemitones;
            const BQ = Math.min(1, TQ.variationSemitones);
            let DQ = IQ.glideSemitones,
              GQ = 1;
            XQ && (zQ += TQ.exclaimLiftSemitones, GQ *= sQ), WQ && yQ === pQ && (zQ += TQ.questionRiseSemitones * (wQ > 1 ? .5 + .5 * qQ / (wQ - 1) : 1), qQ === wQ - 1 && (DQ = Math.abs(DQ) + TQ.questionRiseSemitones / 2)), QQ && aQ(VQ.text) && (zQ += PQ * BQ, GQ *= FQ), wQ > 1 && 0 === qQ && (zQ += JQ * BQ, GQ *= gQ), hQ.push({
              atMs: iQ + qQ * jQ,
              semitones: zQ,
              glideSemitones: DQ,
              durationMs: qQ < wQ - 1 ? Math.min(IQ.durationMs, jQ * rQ) : IQ.durationMs,
              level: GQ
            })
          }
          iQ += wQ * jQ + (BQ.test(VQ.text) ? zQ : DQ.test(VQ.text) ? TQ : 0)
        }
      }
      return {
        pieces: pQ.map((QQ => "space" === QQ.kind ? QQ : "icon" === QQ.kind ? {
          kind: "icon",
          icon: QQ.text,
          delayMs: QQ.delayMs
        } : {
          kind: "word",
          text: QQ.text,
          delayMs: QQ.delayMs
        })),
        blips: hQ
      }
    }
    var hQ = XQ(1226),
      iQ = XQ(1285),
      cQ = XQ(2010);

    function AQ(QQ) {
      if ("string" === typeof QQ) return QQ;
      const WQ = iQ.h.get().getCurrentLanguageCode();
      return (0, hQ.t)(WQ, QQ.translationKey, (0, hQ.r)(QQ.params, cQ.e.shown))
    }

    function RQ(QQ) {
      const WQ = void 0 === QQ.voice ? null : (0, wQ.p)(QQ.voice),
        XQ = WQ && (0, wQ.l)(WQ);
      return {
        plan: lQ(AQ(QQ.line), XQ),
        synth: XQ
      }
    }

    function EQ(QQ) {
      const WQ = [];
      let XQ = [];
      for (const [qQ, TQ] of QQ.entries()) {
        var wQ;
        "space" === TQ.kind && (" " !== TQ.text || "icon" !== (null === (wQ = QQ[qQ + 1]) || void 0 === wQ ? void 0 : wQ.kind)) ? (XQ.length > 0 && WQ.push(XQ), WQ.push([TQ]), XQ = []) : XQ.push(TQ)
      }
      return XQ.length > 0 && WQ.push(XQ), WQ
    }
  },
  9099: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => TQ,
      e: () => qQ
    });
    let wQ = null;
    const qQ = function(QQ) {
        const WQ = {
          cycle: QQ,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return wQ = WQ, () => {
          wQ === WQ && (wQ = null)
        }
      },
      TQ = () => {
        var QQ;
        return null !== (QQ = wQ) && void 0 !== QQ && QQ.canCycle() ? wQ.cycle : null
      }
  },
  36906: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      B: () => DQ,
      b: () => TQ,
      f: () => BQ,
      h: () => yQ,
      j: () => sQ,
      n: () => rQ,
      r: () => VQ,
      t: () => JQ,
      u: () => pQ,
      y: () => jQ
    });
    var wQ = XQ(26),
      qQ = XQ(31);
    const TQ = "clientGameInventoryButtonsChanged",
      zQ = new Map;

    function sQ() {
      return [...zQ.values()].sort(((QQ, WQ) => {
        var XQ, wQ;
        return (null !== (XQ = QQ.order) && void 0 !== XQ ? XQ : 0) - (null !== (wQ = WQ.order) && void 0 !== wQ ? wQ : 0)
      }))
    }
    let FQ = null;

    function PQ(QQ) {
      FQ = QQ
    }
    let gQ = !1;

    function JQ(QQ) {
      gQ = !0;
      try {
        QQ.onClick()
      } finally {
        gQ = !1
      }
      QQ.panel && "clientGame" === wQ.b.get("openInGameMenuName") && PQ(QQ.id)
    }

    function rQ() {
      return gQ
    }

    function IQ() {
      return sQ().filter((QQ => QQ.panel && !QQ.disabled))
    }

    function jQ(QQ) {
      const WQ = IQ(),
        XQ = WQ.findIndex((QQ => QQ.id === FQ));
      return !(XQ < 0 || WQ.length < 2) && (JQ(WQ[(XQ + QQ + WQ.length) % WQ.length]), !0)
    }

    function BQ() {
      return null !== FQ && IQ().length > 1
    }

    function yQ() {
      PQ(null)
    }

    function VQ() {
      "inventory" !== wQ.b.get("openInGameMenuName") && PQ(null)
    }

    function DQ() {
      const QQ = FQ;
      return PQ(null), QQ
    }

    function pQ(QQ) {
      return zQ.set(QQ.id, QQ), qQ.k.mB(TQ, sQ(), !0), () => {
        zQ.get(QQ.id) === QQ && (zQ.delete(QQ.id), qQ.k.mB(TQ, sQ()))
      }
    }
  },
  36900: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      A: () => gQ,
      c: () => sQ,
      g: () => DQ,
      j: () => yQ,
      n: () => VQ,
      q: () => rQ,
      s: () => PQ,
      u: () => BQ,
      y: () => IQ
    });
    var wQ = XQ(26),
      qQ = XQ(31),
      TQ = XQ(1335),
      zQ = XQ(36906);
    const sQ = "clientGameUiChanged";
    let FQ = null;

    function PQ() {
      return FQ
    }

    function gQ(QQ, WQ) {
      const XQ = {
        content: QQ,
        menu: WQ
      };
      return FQ = XQ, qQ.k.mB(sQ, FQ, !0), () => {
        FQ === XQ && (FQ = null, jQ = !1, yQ(), qQ.k.mB(sQ, null))
      }
    }
    let JQ = null;

    function rQ() {
      return JQ
    }

    function IQ(QQ) {
      return JQ = QQ, () => {
        JQ === QQ && (JQ = null)
      }
    }
    let jQ = !1;

    function BQ() {
      const QQ = wQ.b.get("openInGameMenuName");
      "clientGame" !== QQ && (jQ = "inventory" === QQ), (0, zQ.n)() || (0, zQ.h)(), (0, TQ.z)(TQ.e), wQ.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function yQ() {
      pQ(!1)
    }

    function VQ() {
      pQ(jQ)
    }

    function DQ() {
      jQ && pQ(!1)
    }

    function pQ(QQ) {
      "clientGame" === wQ.b.get("openInGameMenuName") && wQ.b.set({
        openInGameMenuName: QQ ? "inventory" : null
      }), QQ || (0, zQ.h)(), jQ = !1
    }
  },
  38797: (QQ, WQ, XQ) => {
    function wQ(QQ, WQ, XQ) {
      const wQ = new Set,
        qQ = new ResizeObserver(XQ),
        TQ = () => {
          const WQ = new Set(document.querySelectorAll(QQ));
          let TQ = !1;
          for (const QQ of wQ) WQ.has(QQ) || (qQ.unobserve(QQ), wQ.delete(QQ), TQ = !0);
          for (const QQ of WQ) wQ.has(QQ) || (qQ.observe(QQ), zQ.observe(QQ, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), wQ.add(QQ));
          TQ && XQ()
        },
        zQ = new MutationObserver((WQ => {
          WQ.some((QQ => "attributes" === QQ.type)) && XQ(), WQ.some((WQ => function(QQ, WQ, XQ) {
            if ("childList" !== QQ.type) return !1;
            for (const wQ of QQ.addedNodes)
              if (wQ instanceof Element && (wQ.matches(WQ) || wQ.querySelector(WQ))) return !0;
            for (const wQ of QQ.removedNodes)
              if (wQ instanceof Element)
                for (const QQ of XQ)
                  if (wQ.contains(QQ)) return !0;
            return !1
          }(WQ, QQ, wQ))) && TQ()
        }));
      zQ.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const sQ of WQ) qQ.observe(sQ);
      return window.addEventListener("resize", XQ), TQ(), XQ(), () => {
        qQ.disconnect(), zQ.disconnect(), window.removeEventListener("resize", XQ)
      }
    }
    XQ.d(WQ, {
      c: () => wQ
    })
  },
  9246: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => sQ,
      e: () => FQ
    });
    var wQ = XQ(26),
      qQ = XQ(1376),
      TQ = XQ(105);
    const zQ = {
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

    function sQ() {
      return (0, TQ.isMobile)() && "function" === typeof navigator.vibrate
    }
    const FQ = new class {
      constructor(QQ) {
        this.deps = QQ, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(QQ, WQ) {
        var XQ;
        if (!this.deps.enabled()) return;
        const wQ = zQ[QQ],
          qQ = null !== WQ && void 0 !== WQ ? WQ : wQ.pattern;
        if (null === qQ) return void console.warn("No vibration pattern for", QQ);
        const TQ = this.deps.now();
        TQ - this.lastAnyAt < 40 && wQ.priority < this.playingPriority || TQ - (null !== (XQ = this.lastAt.get(QQ)) && void 0 !== XQ ? XQ : -1 / 0) < wQ.minGapMs || TQ < this.playingUntil && wQ.priority < this.playingPriority || (this.lastAt.set(QQ, TQ), this.lastAnyAt = TQ, this.playingUntil = TQ + qQ.reduce(((QQ, WQ) => QQ + WQ), 0), this.playingPriority = wQ.priority, this.deps.vibrate(qQ))
      }
    }({
      vibrate: QQ => {
        navigator.vibrate([...QQ])
      },
      now: () => performance.now(),
      enabled: () => sQ() && wQ.b.get("isTouchScreen") && wQ.b.get("clientEscMenuOptions").vibration && !(0, qQ.i)()
    })
  },
  5196: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => qQ,
      f: () => wQ,
      h: () => TQ,
      l: () => FQ,
      p: () => zQ
    });
    const wQ = ["sine", "triangle", "square", "sawtooth"],
      qQ = 55,
      TQ = {
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

    function zQ(QQ) {
      return "string" !== typeof QQ ? QQ : Object.hasOwn(TQ, QQ) ? TQ[QQ] : null
    }

    function sQ(QQ, WQ, XQ) {
      return Math.min(XQ, Math.max(WQ, QQ))
    }

    function FQ(QQ) {
      const WQ = sQ(QQ.durationMs, 10, 500),
        XQ = sQ(QQ.attackMs, 0, WQ),
        {
          intonation: qQ
        } = QQ;
      return {
        waveform: wQ.includes(QQ.waveform) ? QQ.waveform : "sine",
        pitchHz: sQ(QQ.pitchHz, 20, 4e3),
        glideSemitones: sQ(QQ.glideSemitones, -24, 24),
        durationMs: WQ,
        attackMs: XQ,
        releaseMs: sQ(QQ.releaseMs, 0, WQ - XQ),
        lowpassHz: null === QQ.lowpassHz ? null : sQ(QQ.lowpassHz, 20, 2e4),
        volume: sQ(QQ.volume, 0, 2),
        intonation: {
          variationSemitones: sQ(qQ.variationSemitones, 0, 6),
          declineSemitones: sQ(qQ.declineSemitones, 0, 12),
          questionRiseSemitones: sQ(qQ.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: sQ(qQ.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: sQ(QQ.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);