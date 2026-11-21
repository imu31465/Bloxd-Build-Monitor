export const id = 25;
export const ids = [25];
export const modules = {
  36228: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => YQ,
      d: () => xQ,
      g: () => bQ,
      j: () => HQ
    });
    var LQ = wQ(9094),
      qQ = wQ(36235),
      oQ = wQ(36238),
      DQ = wQ(8464),
      kQ = wQ(1447),
      vQ = wQ(53),
      mQ = wQ(71),
      uQ = wQ(1107);

    function HQ() {
      var QQ;
      return (0, kQ.i)(qQ.b, (0, qQ.k)()), (0, uQ.jsx)(uQ.Fragment, {
        children: null === (QQ = (0, qQ.k)()) || void 0 === QQ ? void 0 : QQ.content
      })
    }

    function bQ(QQ) {
      var FQ;
      let {
        show: wQ
      } = QQ;
      (0, kQ.i)(qQ.b, (0, qQ.k)());
      const mQ = null === (FQ = (0, qQ.k)()) || void 0 === FQ ? void 0 : FQ.menu;
      return (0, vQ.useEffect)((() => {
        var QQ;
        wQ || (null === mQ || void 0 === mQ || null === (QQ = mQ.onClose) || void 0 === QQ || QQ.call(mQ), (0, oQ.o)())
      }), [wQ, mQ]), (0, vQ.useEffect)((() => wQ ? (0, DQ.h)(oQ.v, oQ.g) : void 0), [wQ]), (0, uQ.jsx)(LQ.c, {
        showing: wQ,
        globallyUniqueKey: "clientGameMenu",
        children: null === mQ || void 0 === mQ ? void 0 : mQ.content
      })
    }

    function YQ(QQ) {
      let {
        placement: FQ = "bottom"
      } = QQ;
      return (0, uQ.jsx)("div", {
        id: `clientGameHud-${FQ}`,
        style: {
          display: "contents"
        }
      })
    }

    function xQ(QQ) {
      let {
        children: FQ,
        placement: wQ = "bottom"
      } = QQ;
      const [LQ, qQ] = (0, vQ.useState)(null);
      return (0, vQ.useEffect)((() => {
        qQ(document.getElementById(`clientGameHud-${wQ}`))
      }), [wQ]), LQ ? (0, mQ.createPortal)(FQ, LQ) : null
    }
  },
  4665: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => tQ,
      f: () => eQ
    });
    var LQ = wQ(1070),
      qQ = wQ.n(LQ),
      oQ = wQ(53),
      DQ = wQ(1207),
      kQ = wQ(4674),
      vQ = wQ(1873),
      mQ = wQ(2345),
      uQ = wQ(4680),
      HQ = wQ(1107);
    const bQ = new WeakMap;
    let YQ = 0;

    function xQ(QQ) {
      let FQ = bQ.get(QQ);
      return void 0 === FQ && (FQ = YQ++, bQ.set(QQ, FQ)), FQ
    }

    function AQ(QQ) {
      let {
        piece: FQ
      } = QQ;
      return "space" === FQ.kind ? (0, HQ.jsx)(HQ.Fragment, {
        children: FQ.text
      }) : (0, HQ.jsx)("span", {
        className: "DialogueWord",
        style: {
          "--word-delay": `${FQ.delayMs}ms`
        },
        children: (0, HQ.jsx)(kQ.d, {
          text: "icon" === FQ.kind ? `[[${FQ.icon}]]` : FQ.text
        })
      })
    }

    function tQ(QQ) {
      let {
        display: FQ
      } = QQ;
      const {
        selectedLanguage: wQ
      } = (0, DQ.y)(), LQ = (0, oQ.useMemo)((() => (0, uQ.b)((0, uQ.f)(FQ).plan.pieces)), [FQ, wQ.code]);
      return (0, HQ.jsxs)("div", {
        className: qQ()("Dialogue", {
          DialogueAnimateIn: !1 !== FQ.animateIn
        }),
        children: [FQ.speakerName && (0, HQ.jsx)(vQ.e, {
          text: FQ.speakerName,
          className: "DialogueSpeaker"
        }), (0, HQ.jsx)("p", {
          className: "DialogueLine",
          children: LQ.map(((QQ, FQ) => 1 === QQ.length && "space" === QQ[0].kind ? QQ[0].text : (0, HQ.jsx)("span", {
            className: "DialogueGlue",
            children: QQ.map(((QQ, FQ) => (0, HQ.jsx)(AQ, {
              piece: QQ
            }, FQ)))
          }, FQ)))
        })]
      })
    }
    const eQ = (0, oQ.memo)((function() {
      const QQ = (0, mQ.l)("dialogue");
      return (0, HQ.jsx)("div", {
        className: "DialogueAnchor",
        "data-camera-keeper": "",
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: QQ && (0, HQ.jsx)(tQ, {
          display: QQ
        }, xQ(QQ))
      })
    }))
  },
  4674: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => kQ
    });
    var LQ = wQ(53),
      qQ = wQ(307),
      oQ = wQ(1887),
      DQ = wQ(1107);

    function kQ(QQ) {
      let {
        text: FQ
      } = QQ;
      const wQ = [];
      let kQ = "";
      return (0, qQ.ec)(FQ).forEach(((QQ, FQ) => {
        if ("string" === typeof QQ || !(0, oQ.g)(QQ.icon)) return void(kQ += "string" === typeof QQ ? QQ : QQ.icon);
        const qQ = Math.max(0, kQ.trimEnd().search(/\S{1,12}$/));
        wQ.push((0, DQ.jsxs)(LQ.Fragment, {
          children: [kQ.slice(0, qQ), (0, DQ.jsxs)("span", {
            className: "InlineIconTextGlue",
            children: [kQ.slice(qQ), (0, DQ.jsx)("span", {
              className: "InlineIconTextIcon",
              role: "img",
              "aria-label": QQ.icon,
              children: (0, DQ.jsx)(oQ.e, {
                itemName: QQ.icon,
                amount: 0
              })
            })]
          })]
        }, FQ)), kQ = ""
      })), wQ.push(kQ), (0, DQ.jsx)(DQ.Fragment, {
        children: wQ
      })
    }
  },
  9094: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => oQ
    });
    var LQ = wQ(4380),
      qQ = wQ(4388);

    function oQ(QQ) {
      let {
        children: FQ,
        showing: wQ,
        globallyUniqueKey: oQ,
        alwaysMountChildren: DQ = !1,
        doGameplayStartStopOnShow: kQ = !0,
        keepsMovement: vQ = !1
      } = QQ;
      return (0, qQ.d)(!0, wQ, oQ, vQ), (0, LQ.b)(kQ, wQ), wQ || DQ ? FQ : null
    }
  },
  4680: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => TQ,
      f: () => NQ
    });
    var LQ = wQ(4686),
      qQ = wQ(307);
    const oQ = 120,
      DQ = 260,
      kQ = 1.15,
      vQ = 1.2,
      mQ = 2,
      uQ = 1.08,
      HQ = .8,
      bQ = .95,
      YQ = 8,
      xQ = "[\"')\\]\u300d\u300f\uff09]*",
      AQ = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${xQ}$`),
      tQ = new RegExp(`[?\uff1f]${xQ}$`),
      eQ = new RegExp(`[!\uff01]${xQ}$`),
      MQ = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      GQ = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      pQ = new RegExp(`[${GQ}]`),
      cQ = new RegExp(`[${GQ}]|[^${GQ}]+`, "g"),
      CQ = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function SQ(QQ) {
      let FQ = 2166136261;
      for (let wQ = 0; wQ < QQ.length; wQ++) FQ ^= QQ.charCodeAt(wQ), FQ = Math.imul(FQ, 16777619);
      return (FQ >>> 0) / 4294967295 * 2 - 1
    }

    function iQ(QQ) {
      var FQ;
      if (pQ.test(QQ)) return 1;
      const wQ = QQ.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        LQ = wQ.replace(/[^0-9]/g, "");
      if (LQ.length > 0 && !/\p{L}/u.test(wQ)) return Math.min(LQ.length, 4);
      const qQ = null !== (FQ = wQ.match(CQ)) && void 0 !== FQ ? FQ : [];
      if (0 === qQ.length) {
        var oQ, DQ;
        const QQ = null !== (oQ = null === (DQ = wQ.match(/\p{L}/gu)) || void 0 === DQ ? void 0 : DQ.length) && void 0 !== oQ ? oQ : 0;
        return 0 === QQ ? 0 : Math.min(Math.max(1, Math.round(QQ / 2.5)), YQ)
      }
      const kQ = wQ.replace(/[^\p{L}]/gu, ""),
        vQ = qQ.length > 1 && "e" === qQ.at(-1) && kQ.endsWith("e") && !kQ.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(QQ.replace(/[^\p{L}]/gu, ""));
      return Math.min(qQ.length - (vQ ? 1 : 0), YQ)
    }

    function WQ(QQ) {
      return QQ.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function RQ(QQ) {
      const FQ = QQ.replace(/[^\p{L}]/gu, "");
      return FQ.length >= 2 && FQ === FQ.toUpperCase() && FQ !== FQ.toLowerCase()
    }

    function OQ(QQ, FQ) {
      var wQ;
      const YQ = FQ && (0, LQ.i)(FQ),
        xQ = null !== (wQ = null === YQ || void 0 === YQ ? void 0 : YQ.syllableMs) && void 0 !== wQ ? wQ : LQ.c,
        GQ = function(QQ) {
          const FQ = [];
          for (const LQ of (0, qQ.ec)(QQ))
            if ("string" === typeof LQ)
              for (const QQ of LQ.split(/(\s+)/)) {
                if ("" === QQ) continue;
                if (/^\s+$/.test(QQ)) {
                  FQ.push({
                    kind: "space",
                    text: QQ
                  });
                  continue
                }
                if (!pQ.test(QQ)) {
                  FQ.push({
                    kind: "word",
                    text: QQ,
                    delayMs: 0
                  });
                  continue
                }
                let LQ = !0;
                for (const qQ of null !== (wQ = QQ.match(cQ)) && void 0 !== wQ ? wQ : []) {
                  var wQ;
                  const QQ = FQ.at(-1);
                  LQ || "word" !== (null === QQ || void 0 === QQ ? void 0 : QQ.kind) || pQ.test(qQ) || /[\p{L}\p{N}]/u.test(qQ) ? (LQ || FQ.push({
                    kind: "space",
                    text: "\u200b"
                  }), FQ.push({
                    kind: "word",
                    text: qQ,
                    delayMs: 0
                  }), LQ = !1) : QQ.text += qQ
                }
              } else FQ.push({
                kind: "icon",
                text: LQ.icon,
                delayMs: 0
              });
          return FQ
        }(QQ),
        CQ = [];
      let OQ = [];
      for (const LQ of GQ) "space" !== LQ.kind && (OQ.push(LQ), AQ.test(LQ.text) && (CQ.push(OQ), OQ = []));
      CQ.push(OQ);
      const sQ = [];
      let rQ = 0;
      for (const LQ of CQ) {
        var IQ, UQ;
        const QQ = null !== (IQ = null === (UQ = LQ.at(-1)) || void 0 === UQ ? void 0 : UQ.text) && void 0 !== IQ ? IQ : "",
          FQ = tQ.test(QQ),
          wQ = eQ.test(QQ),
          qQ = LQ.map((QQ => "word" === QQ.kind ? iQ(QQ.text) : 1)),
          GQ = qQ.findLastIndex((QQ => QQ > 0));
        for (const [tQ, eQ] of LQ.entries()) {
          const QQ = "word" === eQ.kind,
            LQ = qQ[tQ];
          eQ.delayMs = rQ;
          for (let qQ = 0; YQ && qQ < LQ; qQ++) {
            const {
              intonation: oQ
            } = YQ;
            let DQ = GQ > 0 ? -oQ.declineSemitones * (tQ / GQ) : 0;
            DQ += SQ(`${WQ(eQ.text)}|${qQ}`) * oQ.variationSemitones;
            const AQ = Math.min(1, oQ.variationSemitones);
            let MQ = YQ.glideSemitones,
              pQ = 1;
            wQ && (DQ += oQ.exclaimLiftSemitones, pQ *= kQ), FQ && tQ === GQ && (DQ += oQ.questionRiseSemitones * (LQ > 1 ? .5 + .5 * qQ / (LQ - 1) : 1), qQ === LQ - 1 && (MQ = Math.abs(MQ) + oQ.questionRiseSemitones / 2)), QQ && RQ(eQ.text) && (DQ += mQ * AQ, pQ *= vQ), LQ > 1 && 0 === qQ && (DQ += HQ * AQ, pQ *= uQ), sQ.push({
              atMs: rQ + qQ * xQ,
              semitones: DQ,
              glideSemitones: MQ,
              durationMs: qQ < LQ - 1 ? Math.min(YQ.durationMs, xQ * bQ) : YQ.durationMs,
              level: pQ
            })
          }
          rQ += LQ * xQ + (AQ.test(eQ.text) ? DQ : MQ.test(eQ.text) ? oQ : 0)
        }
      }
      return {
        pieces: GQ.map((QQ => "space" === QQ.kind ? QQ : "icon" === QQ.kind ? {
          kind: "icon",
          icon: QQ.text,
          delayMs: QQ.delayMs
        } : {
          kind: "word",
          text: QQ.text,
          delayMs: QQ.delayMs
        })),
        blips: sQ
      }
    }
    var sQ = wQ(1207),
      rQ = wQ(1265),
      IQ = wQ(1899);

    function UQ(QQ) {
      if ("string" === typeof QQ) return QQ;
      const FQ = rQ.e.get().getCurrentLanguageCode();
      return (0, sQ.o)(FQ, QQ.translationKey, (0, sQ.m)(QQ.params, IQ.b.shown))
    }

    function NQ(QQ) {
      const FQ = void 0 === QQ.voice ? null : (0, LQ.k)(QQ.voice),
        wQ = FQ && (0, LQ.i)(FQ);
      return {
        plan: OQ(UQ(QQ.line), wQ),
        synth: wQ
      }
    }

    function TQ(QQ) {
      const FQ = [];
      let wQ = [];
      for (const [qQ, oQ] of QQ.entries()) {
        var LQ;
        "space" === oQ.kind && (" " !== oQ.text || "icon" !== (null === (LQ = QQ[qQ + 1]) || void 0 === LQ ? void 0 : LQ.kind)) ? (wQ.length > 0 && FQ.push(wQ), FQ.push([oQ]), wQ = []) : wQ.push(oQ)
      }
      return wQ.length > 0 && FQ.push(wQ), FQ
    }
  },
  8464: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => oQ,
      h: () => qQ
    });
    let LQ = null;
    const qQ = function(QQ) {
        const FQ = {
          cycle: QQ,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return LQ = FQ, () => {
          LQ === FQ && (LQ = null)
        }
      },
      oQ = () => {
        var QQ;
        return null !== (QQ = LQ) && void 0 !== QQ && QQ.canCycle() ? LQ.cycle : null
      }
  },
  36238: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => oQ,
      g: () => AQ,
      i: () => tQ,
      m: () => kQ,
      n: () => bQ,
      o: () => eQ,
      q: () => HQ,
      u: () => GQ,
      v: () => xQ,
      w: () => MQ
    });
    var LQ = wQ(17),
      qQ = wQ(22);
    const oQ = "clientGameInventoryButtonsChanged",
      DQ = new Map;

    function kQ() {
      return [...DQ.values()].sort(((QQ, FQ) => {
        var wQ, LQ;
        return (null !== (wQ = QQ.order) && void 0 !== wQ ? wQ : 0) - (null !== (LQ = FQ.order) && void 0 !== LQ ? LQ : 0)
      }))
    }
    let vQ = null;

    function mQ(QQ) {
      vQ = QQ
    }
    let uQ = !1;

    function HQ(QQ) {
      uQ = !0;
      try {
        QQ.onClick()
      } finally {
        uQ = !1
      }
      QQ.panel && "clientGame" === LQ.c.get("openInGameMenuName") && mQ(QQ.id)
    }

    function bQ() {
      return uQ
    }

    function YQ() {
      return kQ().filter((QQ => QQ.panel && !QQ.disabled))
    }

    function xQ(QQ) {
      const FQ = YQ(),
        wQ = FQ.findIndex((QQ => QQ.id === vQ));
      return !(wQ < 0 || FQ.length < 2) && (HQ(FQ[(wQ + QQ + FQ.length) % FQ.length]), !0)
    }

    function AQ() {
      return null !== vQ && YQ().length > 1
    }

    function tQ() {
      mQ(null)
    }

    function eQ() {
      "inventory" !== LQ.c.get("openInGameMenuName") && mQ(null)
    }

    function MQ() {
      const QQ = vQ;
      return mQ(null), QQ
    }

    function GQ(QQ) {
      return DQ.set(QQ.id, QQ), qQ.l.GA(oQ, kQ(), !0), () => {
        DQ.get(QQ.id) === QQ && (DQ.delete(QQ.id), qQ.l.GA(oQ, kQ()))
      }
    }
  },
  36235: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => kQ,
      f: () => tQ,
      i: () => eQ,
      j: () => bQ,
      k: () => mQ,
      o: () => AQ,
      q: () => YQ,
      u: () => uQ
    });
    var LQ = wQ(17),
      qQ = wQ(22),
      oQ = wQ(1302),
      DQ = wQ(36238);
    const kQ = "clientGameUiChanged";
    let vQ = null;

    function mQ() {
      return vQ
    }

    function uQ(QQ, FQ) {
      const wQ = {
        content: QQ,
        menu: FQ
      };
      return vQ = wQ, qQ.l.GA(kQ, vQ, !0), () => {
        vQ === wQ && (vQ = null, xQ = !1, tQ(), qQ.l.GA(kQ, null))
      }
    }
    let HQ = null;

    function bQ() {
      return HQ
    }

    function YQ(QQ) {
      return HQ = QQ, () => {
        HQ === QQ && (HQ = null)
      }
    }
    let xQ = !1;

    function AQ() {
      const QQ = LQ.c.get("openInGameMenuName");
      "clientGame" !== QQ && (xQ = "inventory" === QQ), (0, DQ.n)() || (0, DQ.i)(), (0, oQ.n)(oQ.d), LQ.c.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function tQ() {
      MQ(!1)
    }

    function eQ() {
      MQ(xQ)
    }

    function MQ(QQ) {
      "clientGame" === LQ.c.get("openInGameMenuName") && LQ.c.set({
        openInGameMenuName: QQ ? "inventory" : null
      }), QQ || (0, DQ.i)(), xQ = !1
    }
  },
  38044: (QQ, FQ, wQ) => {
    function LQ(QQ, FQ, wQ) {
      const LQ = new Set,
        qQ = new ResizeObserver(wQ),
        oQ = () => {
          const FQ = new Set(document.querySelectorAll(QQ));
          let oQ = !1;
          for (const QQ of LQ) FQ.has(QQ) || (qQ.unobserve(QQ), LQ.delete(QQ), oQ = !0);
          for (const QQ of FQ) LQ.has(QQ) || (qQ.observe(QQ), DQ.observe(QQ, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), LQ.add(QQ));
          oQ && wQ()
        },
        DQ = new MutationObserver((FQ => {
          FQ.some((QQ => "attributes" === QQ.type)) && wQ(), FQ.some((FQ => function(QQ, FQ, wQ) {
            if ("childList" !== QQ.type) return !1;
            for (const LQ of QQ.addedNodes)
              if (LQ instanceof Element && (LQ.matches(FQ) || LQ.querySelector(FQ))) return !0;
            for (const LQ of QQ.removedNodes)
              if (LQ instanceof Element)
                for (const QQ of wQ)
                  if (LQ.contains(QQ)) return !0;
            return !1
          }(FQ, QQ, LQ))) && oQ()
        }));
      DQ.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const kQ of FQ) qQ.observe(kQ);
      return window.addEventListener("resize", wQ), oQ(), wQ(), () => {
        qQ.disconnect(), DQ.disconnect(), window.removeEventListener("resize", wQ)
      }
    }
    wQ.d(FQ, {
      e: () => LQ
    })
  },
  8644: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => kQ,
      f: () => vQ
    });
    var LQ = wQ(17),
      qQ = wQ(1339),
      oQ = wQ(96);
    const DQ = {
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

    function kQ() {
      return (0, oQ.isMobile)() && "function" === typeof navigator.vibrate
    }
    const vQ = new class {
      constructor(QQ) {
        this.deps = QQ, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(QQ, FQ) {
        var wQ;
        if (!this.deps.enabled()) return;
        const LQ = DQ[QQ],
          qQ = null !== FQ && void 0 !== FQ ? FQ : LQ.pattern;
        if (null === qQ) return void console.warn("No vibration pattern for", QQ);
        const oQ = this.deps.now();
        oQ - this.lastAnyAt < 40 && LQ.priority < this.playingPriority || oQ - (null !== (wQ = this.lastAt.get(QQ)) && void 0 !== wQ ? wQ : -1 / 0) < LQ.minGapMs || oQ < this.playingUntil && LQ.priority < this.playingPriority || (this.lastAt.set(QQ, oQ), this.lastAnyAt = oQ, this.playingUntil = oQ + qQ.reduce(((QQ, FQ) => QQ + FQ), 0), this.playingPriority = LQ.priority, this.deps.vibrate(qQ))
      }
    }({
      vibrate: QQ => {
        navigator.vibrate([...QQ])
      },
      now: () => performance.now(),
      enabled: () => kQ() && LQ.c.get("isTouchScreen") && LQ.c.get("clientEscMenuOptions").vibration && !(0, qQ.e)()
    })
  },
  36768: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => kQ,
      h: () => DQ
    });
    var LQ = wQ(36753),
      qQ = wQ(317),
      oQ = wQ(1870);

    function DQ(QQ) {
      if ("YQ" in QQ) return CQ.createAnimationScript(QQ);
      return new mQ(QQ).createAnimationScript()
    }

    function kQ(QQ, FQ, wQ, qQ) {
      const oQ = QQ.YQ <= 0 ? 1 : FQ + wQ * Math.max(0, qQ) / QQ.YQ;
      return QQ.xQ === LQ.n.LoopOnLastFrame ? oQ % 1 : QQ.xQ === LQ.n.NoLoop && oQ >= 1 ? null : Math.min(1, oQ)
    }
    class vQ {
      createAnimationScript(QQ) {
        const {
          YQ: FQ,
          loop: wQ,
          AQ: LQ
        } = QQ;
        return {
          YQ: Math.round(FQ),
          xQ: this.createLoopMode(null !== wQ && void 0 !== wQ && wQ),
          AQ: this.createNodeSkeletonAnimationScript(null !== LQ && void 0 !== LQ ? LQ : null)
        }
      }
      createLoopMode(QQ) {
        switch (QQ) {
          case !1:
            return LQ.n.NoLoop;
          case !0:
            return LQ.n.LoopOnLastFrame;
          case "hold-on-last-frame":
            return LQ.n.HoldOnLastFrame
        }
        throw new Error(`Invalid loop mode schema: ${QQ}`)
      }
      createNodeSkeletonAnimationScript(QQ) {
        if (null === QQ) return null;
        const FQ = {};
        for (const wQ in QQ) {
          const LQ = QQ[wQ];
          FQ[wQ] = this.createNodeAnimationScript(LQ)
        }
        return FQ
      }
      createNodeAnimationScript(QQ) {
        const {
          timeline: FQ
        } = QQ, wQ = FQ.filter((QQ => Number.isFinite(QQ.timeFraction)));
        return wQ.sort(((QQ, FQ) => QQ.timeFraction - FQ.timeFraction)), {
          rotation: this.createTimelineFromKeyframes(wQ, "rotation", bQ),
          position: this.createTimelineFromKeyframes(wQ, "position", xQ)
        }
      }
      createTimelineFromKeyframes(QQ, FQ, wQ) {
        const LQ = [];
        for (const vQ of QQ) {
          const QQ = vQ[FQ];
          if (QQ) {
            const FQ = this.createAnimationFrameWithoutPrecomputes(vQ.timeFraction, QQ);
            uQ(FQ) && LQ.push(FQ)
          }
        }
        const qQ = [];
        for (let vQ = 0; vQ < LQ.length; vQ++) {
          var oQ, DQ, kQ;
          const QQ = LQ[vQ],
            FQ = null !== (oQ = LQ[vQ - 1]) && void 0 !== oQ ? oQ : QQ,
            mQ = null !== (DQ = LQ[vQ + 1]) && void 0 !== DQ ? DQ : QQ,
            uQ = null !== (kQ = LQ[vQ + 2]) && void 0 !== kQ ? kQ : mQ;
          qQ.push({
            ...QQ,
            ...wQ(FQ.post, FQ.timeFraction, QQ.post, QQ.timeFraction, mQ.pre, mQ.timeFraction, uQ.pre, uQ.timeFraction)
          })
        }
        return qQ
      }
      createAnimationFrameWithoutPrecomputes(QQ, FQ) {
        let wQ, LQ, qQ = null;
        var oQ;
        if ("object" === typeof FQ && "point" in FQ) qQ = null !== (oQ = FQ.MQ) && void 0 !== oQ ? oQ : null, wQ = FQ.point, LQ = FQ.point;
        else if ("object" === typeof FQ && "pre" in FQ) {
          var DQ;
          qQ = null !== (DQ = FQ.MQ) && void 0 !== DQ ? DQ : null, wQ = FQ.pre, LQ = FQ.post
        } else wQ = FQ, LQ = FQ;
        return {
          timeFraction: QQ,
          MQ: this.createLerpMode(qQ),
          pre: wQ,
          post: LQ
        }
      }
      createLerpMode(QQ) {
        return null === QQ ? LQ.j.Linear : vQ.LERP_MODE_SCHEMA_MAPPING[QQ]
      }
    }
    vQ.LERP_MODE_SCHEMA_MAPPING = {
      linear: LQ.j.Linear,
      "catmull-rom-spline": LQ.j.CatmullRomSpline
    };
    class mQ {
      constructor(QQ) {
        this.animationSchema = QQ
      }
      createAnimationScript() {
        const {
          animation_length: QQ,
          loop: FQ,
          bones: wQ
        } = this.animationSchema;
        return {
          YQ: Math.round(1e3 * QQ),
          xQ: this.createLoopMode(null !== FQ && void 0 !== FQ && FQ),
          AQ: this.createNodeSkeletonAnimationScript(null !== wQ && void 0 !== wQ ? wQ : null)
        }
      }
      createLoopMode(QQ) {
        switch (QQ) {
          case !1:
            return LQ.n.NoLoop;
          case !0:
            return LQ.n.LoopOnLastFrame;
          case "hold_on_last_frame":
            return LQ.n.HoldOnLastFrame
        }
        throw new Error(`Invalid Blockbench loop mode schema: ${QQ}`)
      }
      createNodeSkeletonAnimationScript(QQ) {
        if (null === QQ) return null;
        const FQ = {};
        for (const wQ in QQ) {
          const LQ = QQ[wQ];
          FQ[wQ] = this.createNodeAnimationScript(LQ)
        }
        return FQ
      }
      createNodeAnimationScript(QQ) {
        const {
          rotation: FQ,
          position: wQ
        } = QQ;
        return {
          rotation: this.createAnimationTimeline(null !== FQ && void 0 !== FQ ? FQ : null, tQ, bQ, !0),
          position: this.createAnimationTimeline(null !== wQ && void 0 !== wQ ? wQ : null, MQ, xQ, !1)
        }
      }
      createAnimationTimeline(QQ, FQ, wQ, LQ) {
        if (null === QQ) return [];
        if (Array.isArray(QQ)) {
          QQ = {
            "0.0": QQ
          }
        }
        const qQ = Object.entries(QQ).map((QQ => {
          let [wQ, LQ] = QQ;
          const qQ = Number(wQ) / this.animationSchema.animation_length;
          return this.createAnimationFrameWithoutPrecomputes(qQ, LQ, FQ)
        })).filter(uQ);
        qQ.sort(((QQ, FQ) => QQ.timeFraction - FQ.timeFraction)), LQ && function(QQ) {
          for (let FQ = 1; FQ < QQ.length; FQ++) {
            const wQ = QQ[FQ - 1].post,
              LQ = QQ[FQ],
              qQ = GQ(LQ.pre),
              oQ = GQ(LQ.post),
              DQ = cQ(wQ, LQ.pre);
            cQ(wQ, qQ) < DQ && (QQ[FQ] = {
              ...LQ,
              pre: qQ,
              post: oQ
            })
          }
        }(qQ);
        const oQ = [];
        for (let mQ = 0; mQ < qQ.length; mQ++) {
          var DQ, kQ, vQ;
          const QQ = qQ[mQ],
            FQ = null !== (DQ = qQ[mQ - 1]) && void 0 !== DQ ? DQ : QQ,
            LQ = null !== (kQ = qQ[mQ + 1]) && void 0 !== kQ ? kQ : QQ,
            uQ = null !== (vQ = qQ[mQ + 2]) && void 0 !== vQ ? vQ : LQ;
          oQ.push({
            ...QQ,
            ...wQ(FQ.post, FQ.timeFraction, QQ.post, QQ.timeFraction, LQ.pre, LQ.timeFraction, uQ.pre, uQ.timeFraction)
          })
        }
        return oQ
      }
      createAnimationFrameWithoutPrecomputes(QQ, FQ, wQ) {
        let LQ, qQ, oQ = null;
        if ("object" === typeof FQ && "post" in FQ) {
          var DQ;
          oQ = null !== (DQ = FQ.lerp_mode) && void 0 !== DQ ? DQ : null, qQ = AQ(FQ.post, wQ), LQ = FQ.pre ? AQ(FQ.pre, wQ) : qQ
        } else {
          const QQ = AQ(FQ, wQ);
          qQ = QQ, LQ = QQ
        }
        return {
          timeFraction: QQ,
          MQ: this.createLerpMode(oQ),
          pre: LQ,
          post: qQ
        }
      }
      createLerpMode(QQ) {
        return null === QQ ? LQ.j.Linear : mQ.LERP_MODE_SCHEMA_MAPPING[QQ]
      }
    }

    function uQ(QQ) {
      return Number.isFinite(QQ.timeFraction) && HQ(QQ.pre) && HQ(QQ.post)
    }

    function HQ(QQ) {
      return Number.isFinite(QQ[0]) && Number.isFinite(QQ[1]) && Number.isFinite(QQ[2])
    }

    function bQ(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ) {
      const vQ = oQ - FQ,
        mQ = oQ - LQ,
        uQ = kQ - LQ,
        HQ = [null, null, null];
      for (let bQ = 0; bQ < HQ.length; bQ++) HQ[bQ] = YQ(QQ[bQ], wQ[bQ], qQ[bQ], DQ[bQ], vQ, uQ);
      return {
        GQ: mQ,
        pQ: HQ
      }
    }

    function YQ(QQ, FQ, wQ, LQ, oQ, DQ) {
      return {
        CQ: qQ.e.computeShortestRotation(QQ, wQ) / oQ,
        SQ: qQ.e.computeShortestRotation(FQ, LQ) / DQ,
        delta: qQ.e.computeShortestRotation(FQ, wQ)
      }
    }

    function xQ(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ) {
      const vQ = oQ - FQ,
        mQ = oQ - LQ,
        uQ = kQ - LQ,
        HQ = [null, null, null];
      for (let bQ = 0; bQ < HQ.length; bQ++) HQ[bQ] = {
        CQ: (qQ[bQ] - QQ[bQ]) / vQ,
        SQ: (DQ[bQ] - wQ[bQ]) / uQ,
        delta: qQ[bQ] - wQ[bQ]
      };
      return {
        GQ: mQ,
        pQ: HQ
      }
    }

    function AQ(QQ, FQ) {
      return null === FQ ? QQ : FQ(QQ)
    }

    function tQ(QQ) {
      const [FQ, wQ, LQ] = QQ, DQ = -(0, oQ.n)(FQ), kQ = -(0, oQ.n)(wQ), vQ = (0, oQ.n)(LQ), mQ = qQ.e.quaternionFromEulerZYX(DQ, kQ, vQ);
      return qQ.e.eulerYXZFromQuaternion(mQ)
    }
    mQ.LERP_MODE_SCHEMA_MAPPING = {
      linear: LQ.j.Linear,
      catmullrom: LQ.j.CatmullRomSpline
    };
    const eQ = 1 / 16;

    function MQ(QQ) {
      return [-QQ[0] * eQ, QQ[1] * eQ, QQ[2] * eQ]
    }

    function GQ(QQ) {
      const [FQ, wQ, LQ] = QQ;
      return [FQ >= 0 ? Math.PI - FQ : -Math.PI - FQ, pQ(wQ + Math.PI), pQ(LQ + Math.PI)]
    }

    function pQ(QQ) {
      return qQ.e.mod(QQ + Math.PI, 2 * Math.PI) - Math.PI
    }

    function cQ(QQ, FQ) {
      return Math.abs(qQ.e.computeShortestRotation(QQ[0], FQ[0])) + Math.abs(qQ.e.computeShortestRotation(QQ[1], FQ[1])) + Math.abs(qQ.e.computeShortestRotation(QQ[2], FQ[2]))
    }
    const CQ = new vQ
  },
  36753: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => DQ,
      h: () => oQ,
      j: () => LQ,
      n: () => qQ
    });
    let LQ = function(QQ) {
        return QQ[QQ.Linear = 0] = "Linear", QQ[QQ.CatmullRomSpline = 1] = "CatmullRomSpline", QQ
      }({}),
      qQ = function(QQ) {
        return QQ[QQ.NoLoop = 0] = "NoLoop", QQ[QQ.LoopOnLastFrame = 1] = "LoopOnLastFrame", QQ[QQ.HoldOnLastFrame = 2] = "HoldOnLastFrame", QQ
      }({}),
      oQ = function(QQ) {
        return QQ[QQ.Movement = 0] = "Movement", QQ[QQ.Action = 1] = "Action", QQ[QQ.Emote = 2] = "Emote", QQ[QQ.Custom = 3] = "Custom", QQ
      }({}),
      DQ = function(QQ) {
        return QQ[QQ.Start = 0] = "Start", QQ[QQ.Stop = 1] = "Stop", QQ
      }({})
  },
  4686: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => qQ,
      d: () => LQ,
      f: () => oQ,
      i: () => vQ,
      k: () => DQ
    });
    const LQ = ["sine", "triangle", "square", "sawtooth"],
      qQ = 55,
      oQ = {
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

    function DQ(QQ) {
      return "string" !== typeof QQ ? QQ : Object.hasOwn(oQ, QQ) ? oQ[QQ] : null
    }

    function kQ(QQ, FQ, wQ) {
      return Math.min(wQ, Math.max(FQ, QQ))
    }

    function vQ(QQ) {
      const FQ = kQ(QQ.durationMs, 10, 500),
        wQ = kQ(QQ.attackMs, 0, FQ),
        {
          intonation: qQ
        } = QQ;
      return {
        waveform: LQ.includes(QQ.waveform) ? QQ.waveform : "sine",
        pitchHz: kQ(QQ.pitchHz, 20, 4e3),
        glideSemitones: kQ(QQ.glideSemitones, -24, 24),
        durationMs: FQ,
        attackMs: wQ,
        releaseMs: kQ(QQ.releaseMs, 0, FQ - wQ),
        lowpassHz: null === QQ.lowpassHz ? null : kQ(QQ.lowpassHz, 20, 2e4),
        volume: kQ(QQ.volume, 0, 2),
        intonation: {
          variationSemitones: kQ(qQ.variationSemitones, 0, 6),
          declineSemitones: kQ(qQ.declineSemitones, 0, 12),
          questionRiseSemitones: kQ(qQ.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: kQ(qQ.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: kQ(QQ.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);