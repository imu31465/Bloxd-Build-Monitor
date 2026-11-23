export const id = 25;
export const ids = [25];
export const modules = {
  36483: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => MC,
      c: () => gC,
      d: () => NC,
      f: () => WC
    });
    var QC = ZC(34153),
      wC = ZC(36488),
      bC = ZC(36490),
      nC = ZC(8735),
      fC = ZC(1383),
      oC = ZC(48),
      qC = ZC(60),
      FC = ZC(1056);

    function WC() {
      var CC;
      return (0, fC.f)(wC.d, (0, wC.q)()), (0, FC.jsx)(FC.Fragment, {
        children: null === (CC = (0, wC.q)()) || void 0 === CC ? void 0 : CC.content
      })
    }

    function NC(CC) {
      var zC;
      let {
        show: ZC
      } = CC;
      (0, fC.f)(wC.d, (0, wC.q)());
      const qC = null === (zC = (0, wC.q)()) || void 0 === zC ? void 0 : zC.menu;
      return (0, oC.useEffect)((() => {
        var CC;
        ZC || (null === qC || void 0 === qC || null === (CC = qC.onClose) || void 0 === CC || CC.call(qC), (0, bC.p)())
      }), [ZC, qC]), (0, oC.useEffect)((() => ZC ? (0, nC.f)(bC.z, bC.g) : void 0), [ZC]), (0, FC.jsx)(QC.d, {
        showing: ZC,
        globallyUniqueKey: "clientGameMenu",
        children: null === qC || void 0 === qC ? void 0 : qC.content
      })
    }

    function MC(CC) {
      let {
        placement: zC = "bottom"
      } = CC;
      return (0, FC.jsx)("div", {
        id: `clientGameHud-${zC}`,
        style: {
          display: "contents"
        }
      })
    }

    function gC(CC) {
      let {
        children: zC,
        placement: ZC = "bottom"
      } = CC;
      const [QC, wC] = (0, oC.useState)(null);
      return (0, oC.useEffect)((() => {
        wC(document.getElementById(`clientGameHud-${ZC}`))
      }), [ZC]), QC ? (0, qC.createPortal)(zC, QC) : null
    }
  },
  4760: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => pC,
      d: () => PC
    });
    var QC = ZC(1002),
      wC = ZC.n(QC),
      bC = ZC(48),
      nC = ZC(1143),
      fC = ZC(4769),
      oC = ZC(1811),
      qC = ZC(2369),
      FC = ZC(4775),
      WC = ZC(1056);
    const NC = new WeakMap;
    let MC = 0;

    function gC(CC) {
      let zC = NC.get(CC);
      return void 0 === zC && (zC = MC++, NC.set(CC, zC)), zC
    }

    function SC(CC) {
      let {
        piece: zC
      } = CC;
      return "space" === zC.kind ? (0, WC.jsx)(WC.Fragment, {
        children: zC.text
      }) : (0, WC.jsx)("span", {
        className: "DialogueWord",
        style: {
          "--word-delay": `${zC.delayMs}ms`
        },
        children: (0, WC.jsx)(fC.e, {
          text: "icon" === zC.kind ? `[[${zC.icon}]]` : zC.text
        })
      })
    }

    function pC(CC) {
      let {
        display: zC
      } = CC;
      const {
        selectedLanguage: ZC
      } = (0, nC.y)(), QC = (0, bC.useMemo)((() => (0, FC.c)((0, FC.f)(zC).plan.pieces)), [zC, ZC.code]);
      return (0, WC.jsxs)("div", {
        className: wC()("Dialogue", {
          DialogueAnimateIn: !1 !== zC.animateIn
        }),
        children: [zC.speakerName && (0, WC.jsx)(oC.e, {
          text: zC.speakerName,
          className: "DialogueSpeaker"
        }), (0, WC.jsx)("p", {
          className: "DialogueLine",
          children: QC.map(((CC, zC) => 1 === CC.length && "space" === CC[0].kind ? CC[0].text : (0, WC.jsx)("span", {
            className: "DialogueGlue",
            children: CC.map(((CC, zC) => (0, WC.jsx)(SC, {
              piece: CC
            }, zC)))
          }, zC)))
        })]
      })
    }
    const PC = (0, bC.memo)((function() {
      const CC = (0, qC.h)("dialogue");
      return (0, WC.jsx)("div", {
        className: "DialogueAnchor",
        "data-camera-keeper": "",
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: CC && (0, WC.jsx)(pC, {
          display: CC
        }, gC(CC))
      })
    }))
  },
  4769: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => fC
    });
    var QC = ZC(48),
      wC = ZC(310),
      bC = ZC(1822),
      nC = ZC(1056);

    function fC(CC) {
      let {
        text: zC
      } = CC;
      const ZC = [];
      let fC = "";
      return (0, wC.dc)(zC).forEach(((CC, zC) => {
        if ("string" === typeof CC || !(0, bC.h)(CC.icon)) return void(fC += "string" === typeof CC ? CC : CC.icon);
        const wC = Math.max(0, fC.trimEnd().search(/\S{1,12}$/));
        ZC.push((0, nC.jsxs)(QC.Fragment, {
          children: [fC.slice(0, wC), (0, nC.jsxs)("span", {
            className: "InlineIconTextGlue",
            children: [fC.slice(wC), (0, nC.jsx)("span", {
              className: "InlineIconTextIcon",
              role: "img",
              "aria-label": CC.icon,
              children: (0, nC.jsx)(bC.e, {
                itemName: CC.icon,
                amount: 0
              })
            })]
          })]
        }, zC)), fC = ""
      })), ZC.push(fC), (0, nC.jsx)(nC.Fragment, {
        children: ZC
      })
    }
  },
  34153: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => bC
    });
    var QC = ZC(4473),
      wC = ZC(4479);

    function bC(CC) {
      let {
        children: zC,
        showing: ZC,
        globallyUniqueKey: bC,
        alwaysMountChildren: nC = !1,
        doGameplayStartStopOnShow: fC = !0,
        keepsMovement: oC = !1
      } = CC;
      return (0, wC.b)(!0, ZC, bC, oC), (0, QC.d)(fC, ZC), ZC || nC ? zC : null
    }
  },
  4775: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => EC,
      f: () => HC
    });
    var QC = ZC(4783),
      wC = ZC(310);
    const bC = 120,
      nC = 260,
      fC = 1.15,
      oC = 1.2,
      qC = 2,
      FC = 1.08,
      WC = .8,
      NC = .95,
      MC = 8,
      gC = "[\"')\\]\u300d\u300f\uff09]*",
      SC = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${gC}$`),
      pC = new RegExp(`[?\uff1f]${gC}$`),
      PC = new RegExp(`[!\uff01]${gC}$`),
      GC = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      RC = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      AC = new RegExp(`[${RC}]`),
      xC = new RegExp(`[${RC}]|[^${RC}]+`, "g"),
      JC = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function IC(CC) {
      let zC = 2166136261;
      for (let ZC = 0; ZC < CC.length; ZC++) zC ^= CC.charCodeAt(ZC), zC = Math.imul(zC, 16777619);
      return (zC >>> 0) / 4294967295 * 2 - 1
    }

    function iC(CC) {
      var zC;
      if (AC.test(CC)) return 1;
      const ZC = CC.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        QC = ZC.replace(/[^0-9]/g, "");
      if (QC.length > 0 && !/\p{L}/u.test(ZC)) return Math.min(QC.length, 4);
      const wC = null !== (zC = ZC.match(JC)) && void 0 !== zC ? zC : [];
      if (0 === wC.length) {
        var bC, nC;
        const CC = null !== (bC = null === (nC = ZC.match(/\p{L}/gu)) || void 0 === nC ? void 0 : nC.length) && void 0 !== bC ? bC : 0;
        return 0 === CC ? 0 : Math.min(Math.max(1, Math.round(CC / 2.5)), MC)
      }
      const fC = ZC.replace(/[^\p{L}]/gu, ""),
        oC = wC.length > 1 && "e" === wC.at(-1) && fC.endsWith("e") && !fC.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(CC.replace(/[^\p{L}]/gu, ""));
      return Math.min(wC.length - (oC ? 1 : 0), MC)
    }

    function vC(CC) {
      return CC.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function eC(CC) {
      const zC = CC.replace(/[^\p{L}]/gu, "");
      return zC.length >= 2 && zC === zC.toUpperCase() && zC !== zC.toLowerCase()
    }

    function hC(CC, zC) {
      var ZC;
      const MC = zC && (0, QC.m)(zC),
        gC = null !== (ZC = null === MC || void 0 === MC ? void 0 : MC.syllableMs) && void 0 !== ZC ? ZC : QC.b,
        RC = function(CC) {
          const zC = [];
          for (const QC of (0, wC.dc)(CC))
            if ("string" === typeof QC)
              for (const CC of QC.split(/(\s+)/)) {
                if ("" === CC) continue;
                if (/^\s+$/.test(CC)) {
                  zC.push({
                    kind: "space",
                    text: CC
                  });
                  continue
                }
                if (!AC.test(CC)) {
                  zC.push({
                    kind: "word",
                    text: CC,
                    delayMs: 0
                  });
                  continue
                }
                let QC = !0;
                for (const wC of null !== (ZC = CC.match(xC)) && void 0 !== ZC ? ZC : []) {
                  var ZC;
                  const CC = zC.at(-1);
                  QC || "word" !== (null === CC || void 0 === CC ? void 0 : CC.kind) || AC.test(wC) || /[\p{L}\p{N}]/u.test(wC) ? (QC || zC.push({
                    kind: "space",
                    text: "\u200b"
                  }), zC.push({
                    kind: "word",
                    text: wC,
                    delayMs: 0
                  }), QC = !1) : CC.text += wC
                }
              } else zC.push({
                kind: "icon",
                text: QC.icon,
                delayMs: 0
              });
          return zC
        }(CC),
        JC = [];
      let hC = [];
      for (const QC of RC) "space" !== QC.kind && (hC.push(QC), SC.test(QC.text) && (JC.push(hC), hC = []));
      JC.push(hC);
      const KC = [];
      let YC = 0;
      for (const QC of JC) {
        var dC, mC;
        const CC = null !== (dC = null === (mC = QC.at(-1)) || void 0 === mC ? void 0 : mC.text) && void 0 !== dC ? dC : "",
          zC = pC.test(CC),
          ZC = PC.test(CC),
          wC = QC.map((CC => "word" === CC.kind ? iC(CC.text) : 1)),
          RC = wC.findLastIndex((CC => CC > 0));
        for (const [pC, PC] of QC.entries()) {
          const CC = "word" === PC.kind,
            QC = wC[pC];
          PC.delayMs = YC;
          for (let wC = 0; MC && wC < QC; wC++) {
            const {
              intonation: bC
            } = MC;
            let nC = RC > 0 ? -bC.declineSemitones * (pC / RC) : 0;
            nC += IC(`${vC(PC.text)}|${wC}`) * bC.variationSemitones;
            const SC = Math.min(1, bC.variationSemitones);
            let GC = MC.glideSemitones,
              AC = 1;
            ZC && (nC += bC.exclaimLiftSemitones, AC *= fC), zC && pC === RC && (nC += bC.questionRiseSemitones * (QC > 1 ? .5 + .5 * wC / (QC - 1) : 1), wC === QC - 1 && (GC = Math.abs(GC) + bC.questionRiseSemitones / 2)), CC && eC(PC.text) && (nC += qC * SC, AC *= oC), QC > 1 && 0 === wC && (nC += WC * SC, AC *= FC), KC.push({
              atMs: YC + wC * gC,
              semitones: nC,
              glideSemitones: GC,
              durationMs: wC < QC - 1 ? Math.min(MC.durationMs, gC * NC) : MC.durationMs,
              level: AC
            })
          }
          YC += QC * gC + (SC.test(PC.text) ? nC : GC.test(PC.text) ? bC : 0)
        }
      }
      return {
        pieces: RC.map((CC => "space" === CC.kind ? CC : "icon" === CC.kind ? {
          kind: "icon",
          icon: CC.text,
          delayMs: CC.delayMs
        } : {
          kind: "word",
          text: CC.text,
          delayMs: CC.delayMs
        })),
        blips: KC
      }
    }
    var KC = ZC(1143),
      YC = ZC(1192),
      dC = ZC(1843);

    function mC(CC) {
      if ("string" === typeof CC) return CC;
      const zC = YC.h.get().getCurrentLanguageCode();
      return (0, KC.r)(zC, CC.translationKey, (0, KC.q)(CC.params, dC.d.shown))
    }

    function HC(CC) {
      const zC = void 0 === CC.voice ? null : (0, QC.q)(CC.voice),
        ZC = zC && (0, QC.m)(zC);
      return {
        plan: hC(mC(CC.line), ZC),
        synth: ZC
      }
    }

    function EC(CC) {
      const zC = [];
      let ZC = [];
      for (const [wC, bC] of CC.entries()) {
        var QC;
        "space" === bC.kind && (" " !== bC.text || "icon" !== (null === (QC = CC[wC + 1]) || void 0 === QC ? void 0 : QC.kind)) ? (ZC.length > 0 && zC.push(ZC), zC.push([bC]), ZC = []) : ZC.push(bC)
      }
      return ZC.length > 0 && zC.push(ZC), zC
    }
  },
  8735: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => bC,
      f: () => wC
    });
    let QC = null;
    const wC = function(CC) {
        const zC = {
          cycle: CC,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return QC = zC, () => {
          QC === zC && (QC = null)
        }
      },
      bC = () => {
        var CC;
        return null !== (CC = QC) && void 0 !== CC && CC.canCycle() ? QC.cycle : null
      }
  },
  36490: (CC, zC, ZC) => {
    ZC.d(zC, {
      B: () => GC,
      c: () => bC,
      g: () => SC,
      j: () => pC,
      m: () => fC,
      o: () => NC,
      p: () => PC,
      r: () => WC,
      v: () => RC,
      z: () => gC
    });
    var QC = ZC(20),
      wC = ZC(28);
    const bC = "clientGameInventoryButtonsChanged",
      nC = new Map;

    function fC() {
      return [...nC.values()].sort(((CC, zC) => {
        var ZC, QC;
        return (null !== (ZC = CC.order) && void 0 !== ZC ? ZC : 0) - (null !== (QC = zC.order) && void 0 !== QC ? QC : 0)
      }))
    }
    let oC = null;

    function qC(CC) {
      oC = CC
    }
    let FC = !1;

    function WC(CC) {
      FC = !0;
      try {
        CC.onClick()
      } finally {
        FC = !1
      }
      CC.panel && "clientGame" === QC.b.get("openInGameMenuName") && qC(CC.id)
    }

    function NC() {
      return FC
    }

    function MC() {
      return fC().filter((CC => CC.panel && !CC.disabled))
    }

    function gC(CC) {
      const zC = MC(),
        ZC = zC.findIndex((CC => CC.id === oC));
      return !(ZC < 0 || zC.length < 2) && (WC(zC[(ZC + CC + zC.length) % zC.length]), !0)
    }

    function SC() {
      return null !== oC && MC().length > 1
    }

    function pC() {
      qC(null)
    }

    function PC() {
      "inventory" !== QC.b.get("openInGameMenuName") && qC(null)
    }

    function GC() {
      const CC = oC;
      return qC(null), CC
    }

    function RC(CC) {
      return nC.set(CC.id, CC), wC.o.bp(bC, fC(), !0), () => {
        nC.get(CC.id) === CC && (nC.delete(CC.id), wC.o.bp(bC, fC()))
      }
    }
  },
  36488: (CC, zC, ZC) => {
    ZC.d(zC, {
      C: () => FC,
      d: () => fC,
      h: () => pC,
      k: () => PC,
      o: () => NC,
      q: () => qC,
      u: () => SC,
      y: () => MC
    });
    var QC = ZC(20),
      wC = ZC(28),
      bC = ZC(1240),
      nC = ZC(36490);
    const fC = "clientGameUiChanged";
    let oC = null;

    function qC() {
      return oC
    }

    function FC(CC, zC) {
      const ZC = {
        content: CC,
        menu: zC
      };
      return oC = ZC, wC.o.bp(fC, oC, !0), () => {
        oC === ZC && (oC = null, gC = !1, pC(), wC.o.bp(fC, null))
      }
    }
    let WC = null;

    function NC() {
      return WC
    }

    function MC(CC) {
      return WC = CC, () => {
        WC === CC && (WC = null)
      }
    }
    let gC = !1;

    function SC() {
      const CC = QC.b.get("openInGameMenuName");
      "clientGame" !== CC && (gC = "inventory" === CC), (0, nC.o)() || (0, nC.j)(), (0, bC.u)(bC.e), QC.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function pC() {
      GC(!1)
    }

    function PC() {
      GC(gC)
    }

    function GC(CC) {
      "clientGame" === QC.b.get("openInGameMenuName") && QC.b.set({
        openInGameMenuName: CC ? "inventory" : null
      }), CC || (0, nC.j)(), gC = !1
    }
  },
  38341: (CC, zC, ZC) => {
    function QC(CC, zC, ZC) {
      const QC = new Set,
        wC = new ResizeObserver(ZC),
        bC = () => {
          const zC = new Set(document.querySelectorAll(CC));
          let bC = !1;
          for (const CC of QC) zC.has(CC) || (wC.unobserve(CC), QC.delete(CC), bC = !0);
          for (const CC of zC) QC.has(CC) || (wC.observe(CC), nC.observe(CC, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), QC.add(CC));
          bC && ZC()
        },
        nC = new MutationObserver((zC => {
          zC.some((CC => "attributes" === CC.type)) && ZC(), zC.some((zC => function(CC, zC, ZC) {
            if ("childList" !== CC.type) return !1;
            for (const QC of CC.addedNodes)
              if (QC instanceof Element && (QC.matches(zC) || QC.querySelector(zC))) return !0;
            for (const QC of CC.removedNodes)
              if (QC instanceof Element)
                for (const CC of ZC)
                  if (QC.contains(CC)) return !0;
            return !1
          }(zC, CC, QC))) && bC()
        }));
      nC.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const fC of zC) wC.observe(fC);
      return window.addEventListener("resize", ZC), bC(), ZC(), () => {
        wC.disconnect(), nC.disconnect(), window.removeEventListener("resize", ZC)
      }
    }
    ZC.d(zC, {
      b: () => QC
    })
  },
  8876: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => fC,
      f: () => oC
    });
    var QC = ZC(20),
      wC = ZC(1275),
      bC = ZC(77);
    const nC = {
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

    function fC() {
      return (0, bC.isMobile)() && "function" === typeof navigator.vibrate
    }
    const oC = new class {
      constructor(CC) {
        this.deps = CC, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(CC, zC) {
        var ZC;
        if (!this.deps.enabled()) return;
        const QC = nC[CC],
          wC = null !== zC && void 0 !== zC ? zC : QC.pattern;
        if (null === wC) return void console.warn("No vibration pattern for", CC);
        const bC = this.deps.now();
        bC - this.lastAnyAt < 40 && QC.priority < this.playingPriority || bC - (null !== (ZC = this.lastAt.get(CC)) && void 0 !== ZC ? ZC : -1 / 0) < QC.minGapMs || bC < this.playingUntil && QC.priority < this.playingPriority || (this.lastAt.set(CC, bC), this.lastAnyAt = bC, this.playingUntil = bC + wC.reduce(((CC, zC) => CC + zC), 0), this.playingPriority = QC.priority, this.deps.vibrate(wC))
      }
    }({
      vibrate: CC => {
        navigator.vibrate([...CC])
      },
      now: () => performance.now(),
      enabled: () => fC() && QC.b.get("isTouchScreen") && QC.b.get("clientEscMenuOptions").vibration && !(0, wC.g)()
    })
  },
  37023: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => fC,
      f: () => nC
    });
    var QC = ZC(37014),
      wC = ZC(326),
      bC = ZC(1806);

    function nC(CC) {
      if ("Cb" in CC) return JC.createAnimationScript(CC);
      return new qC(CC).createAnimationScript()
    }

    function fC(CC, zC, ZC, wC) {
      const bC = CC.Cb <= 0 ? 1 : zC + ZC * Math.max(0, wC) / CC.Cb;
      return CC.zb === QC.g.LoopOnLastFrame ? bC % 1 : CC.zb === QC.g.NoLoop && bC >= 1 ? null : Math.min(1, bC)
    }
    class oC {
      createAnimationScript(CC) {
        const {
          Cb: zC,
          loop: ZC,
          Zb: QC
        } = CC;
        return {
          Cb: Math.round(zC),
          zb: this.createLoopMode(null !== ZC && void 0 !== ZC && ZC),
          Zb: this.createNodeSkeletonAnimationScript(null !== QC && void 0 !== QC ? QC : null)
        }
      }
      createLoopMode(CC) {
        switch (CC) {
          case !1:
            return QC.g.NoLoop;
          case !0:
            return QC.g.LoopOnLastFrame;
          case "hold-on-last-frame":
            return QC.g.HoldOnLastFrame
        }
        throw new Error(`Invalid loop mode schema: ${CC}`)
      }
      createNodeSkeletonAnimationScript(CC) {
        if (null === CC) return null;
        const zC = {};
        for (const ZC in CC) {
          const QC = CC[ZC];
          zC[ZC] = this.createNodeAnimationScript(QC)
        }
        return zC
      }
      createNodeAnimationScript(CC) {
        const {
          timeline: zC
        } = CC, ZC = zC.filter((CC => Number.isFinite(CC.timeFraction)));
        return ZC.sort(((CC, zC) => CC.timeFraction - zC.timeFraction)), {
          rotation: this.createTimelineFromKeyframes(ZC, "rotation", NC),
          position: this.createTimelineFromKeyframes(ZC, "position", gC)
        }
      }
      createTimelineFromKeyframes(CC, zC, ZC) {
        const QC = [];
        for (const oC of CC) {
          const CC = oC[zC];
          if (CC) {
            const zC = this.createAnimationFrameWithoutPrecomputes(oC.timeFraction, CC);
            FC(zC) && QC.push(zC)
          }
        }
        const wC = [];
        for (let oC = 0; oC < QC.length; oC++) {
          var bC, nC, fC;
          const CC = QC[oC],
            zC = null !== (bC = QC[oC - 1]) && void 0 !== bC ? bC : CC,
            qC = null !== (nC = QC[oC + 1]) && void 0 !== nC ? nC : CC,
            FC = null !== (fC = QC[oC + 2]) && void 0 !== fC ? fC : qC;
          wC.push({
            ...CC,
            ...ZC(zC.post, zC.timeFraction, CC.post, CC.timeFraction, qC.pre, qC.timeFraction, FC.pre, FC.timeFraction)
          })
        }
        return wC
      }
      createAnimationFrameWithoutPrecomputes(CC, zC) {
        let ZC, QC, wC = null;
        var bC;
        if ("object" === typeof zC && "point" in zC) wC = null !== (bC = zC.nb) && void 0 !== bC ? bC : null, ZC = zC.point, QC = zC.point;
        else if ("object" === typeof zC && "pre" in zC) {
          var nC;
          wC = null !== (nC = zC.nb) && void 0 !== nC ? nC : null, ZC = zC.pre, QC = zC.post
        } else ZC = zC, QC = zC;
        return {
          timeFraction: CC,
          nb: this.createLerpMode(wC),
          pre: ZC,
          post: QC
        }
      }
      createLerpMode(CC) {
        return null === CC ? QC.f.Linear : oC.LERP_MODE_SCHEMA_MAPPING[CC]
      }
    }
    oC.LERP_MODE_SCHEMA_MAPPING = {
      linear: QC.f.Linear,
      "catmull-rom-spline": QC.f.CatmullRomSpline
    };
    class qC {
      constructor(CC) {
        this.animationSchema = CC
      }
      createAnimationScript() {
        const {
          animation_length: CC,
          loop: zC,
          bones: ZC
        } = this.animationSchema;
        return {
          Cb: Math.round(1e3 * CC),
          zb: this.createLoopMode(null !== zC && void 0 !== zC && zC),
          Zb: this.createNodeSkeletonAnimationScript(null !== ZC && void 0 !== ZC ? ZC : null)
        }
      }
      createLoopMode(CC) {
        switch (CC) {
          case !1:
            return QC.g.NoLoop;
          case !0:
            return QC.g.LoopOnLastFrame;
          case "hold_on_last_frame":
            return QC.g.HoldOnLastFrame
        }
        throw new Error(`Invalid Blockbench loop mode schema: ${CC}`)
      }
      createNodeSkeletonAnimationScript(CC) {
        if (null === CC) return null;
        const zC = {};
        for (const ZC in CC) {
          const QC = CC[ZC];
          zC[ZC] = this.createNodeAnimationScript(QC)
        }
        return zC
      }
      createNodeAnimationScript(CC) {
        const {
          rotation: zC,
          position: ZC
        } = CC;
        return {
          rotation: this.createAnimationTimeline(null !== zC && void 0 !== zC ? zC : null, pC, NC, !0),
          position: this.createAnimationTimeline(null !== ZC && void 0 !== ZC ? ZC : null, GC, gC, !1)
        }
      }
      createAnimationTimeline(CC, zC, ZC, QC) {
        if (null === CC) return [];
        if (Array.isArray(CC)) {
          CC = {
            "0.0": CC
          }
        }
        const wC = Object.entries(CC).map((CC => {
          let [ZC, QC] = CC;
          const wC = Number(ZC) / this.animationSchema.animation_length;
          return this.createAnimationFrameWithoutPrecomputes(wC, QC, zC)
        })).filter(FC);
        wC.sort(((CC, zC) => CC.timeFraction - zC.timeFraction)), QC && function(CC) {
          for (let zC = 1; zC < CC.length; zC++) {
            const ZC = CC[zC - 1].post,
              QC = CC[zC],
              wC = RC(QC.pre),
              bC = RC(QC.post),
              nC = xC(ZC, QC.pre);
            xC(ZC, wC) < nC && (CC[zC] = {
              ...QC,
              pre: wC,
              post: bC
            })
          }
        }(wC);
        const bC = [];
        for (let qC = 0; qC < wC.length; qC++) {
          var nC, fC, oC;
          const CC = wC[qC],
            zC = null !== (nC = wC[qC - 1]) && void 0 !== nC ? nC : CC,
            QC = null !== (fC = wC[qC + 1]) && void 0 !== fC ? fC : CC,
            FC = null !== (oC = wC[qC + 2]) && void 0 !== oC ? oC : QC;
          bC.push({
            ...CC,
            ...ZC(zC.post, zC.timeFraction, CC.post, CC.timeFraction, QC.pre, QC.timeFraction, FC.pre, FC.timeFraction)
          })
        }
        return bC
      }
      createAnimationFrameWithoutPrecomputes(CC, zC, ZC) {
        let QC, wC, bC = null;
        if ("object" === typeof zC && "post" in zC) {
          var nC;
          bC = null !== (nC = zC.lerp_mode) && void 0 !== nC ? nC : null, wC = SC(zC.post, ZC), QC = zC.pre ? SC(zC.pre, ZC) : wC
        } else {
          const CC = SC(zC, ZC);
          wC = CC, QC = CC
        }
        return {
          timeFraction: CC,
          nb: this.createLerpMode(bC),
          pre: QC,
          post: wC
        }
      }
      createLerpMode(CC) {
        return null === CC ? QC.f.Linear : qC.LERP_MODE_SCHEMA_MAPPING[CC]
      }
    }

    function FC(CC) {
      return Number.isFinite(CC.timeFraction) && WC(CC.pre) && WC(CC.post)
    }

    function WC(CC) {
      return Number.isFinite(CC[0]) && Number.isFinite(CC[1]) && Number.isFinite(CC[2])
    }

    function NC(CC, zC, ZC, QC, wC, bC, nC, fC) {
      const oC = bC - zC,
        qC = bC - QC,
        FC = fC - QC,
        WC = [null, null, null];
      for (let NC = 0; NC < WC.length; NC++) WC[NC] = MC(CC[NC], ZC[NC], wC[NC], nC[NC], oC, FC);
      return {
        fb: qC,
        ob: WC
      }
    }

    function MC(CC, zC, ZC, QC, bC, nC) {
      return {
        Fb: wC.c.computeShortestRotation(CC, ZC) / bC,
        Wb: wC.c.computeShortestRotation(zC, QC) / nC,
        delta: wC.c.computeShortestRotation(zC, ZC)
      }
    }

    function gC(CC, zC, ZC, QC, wC, bC, nC, fC) {
      const oC = bC - zC,
        qC = bC - QC,
        FC = fC - QC,
        WC = [null, null, null];
      for (let NC = 0; NC < WC.length; NC++) WC[NC] = {
        Fb: (wC[NC] - CC[NC]) / oC,
        Wb: (nC[NC] - ZC[NC]) / FC,
        delta: wC[NC] - ZC[NC]
      };
      return {
        fb: qC,
        ob: WC
      }
    }

    function SC(CC, zC) {
      return null === zC ? CC : zC(CC)
    }

    function pC(CC) {
      const [zC, ZC, QC] = CC, nC = -(0, bC.j)(zC), fC = -(0, bC.j)(ZC), oC = (0, bC.j)(QC), qC = wC.c.quaternionFromEulerZYX(nC, fC, oC);
      return wC.c.eulerYXZFromQuaternion(qC)
    }
    qC.LERP_MODE_SCHEMA_MAPPING = {
      linear: QC.f.Linear,
      catmullrom: QC.f.CatmullRomSpline
    };
    const PC = 1 / 16;

    function GC(CC) {
      return [-CC[0] * PC, CC[1] * PC, CC[2] * PC]
    }

    function RC(CC) {
      const [zC, ZC, QC] = CC;
      return [zC >= 0 ? Math.PI - zC : -Math.PI - zC, AC(ZC + Math.PI), AC(QC + Math.PI)]
    }

    function AC(CC) {
      return wC.c.mod(CC + Math.PI, 2 * Math.PI) - Math.PI
    }

    function xC(CC, zC) {
      return Math.abs(wC.c.computeShortestRotation(CC[0], zC[0])) + Math.abs(wC.c.computeShortestRotation(CC[1], zC[1])) + Math.abs(wC.c.computeShortestRotation(CC[2], zC[2]))
    }
    const JC = new oC
  },
  37014: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => nC,
      d: () => bC,
      f: () => QC,
      g: () => wC
    });
    let QC = function(CC) {
        return CC[CC.Linear = 0] = "Linear", CC[CC.CatmullRomSpline = 1] = "CatmullRomSpline", CC
      }({}),
      wC = function(CC) {
        return CC[CC.NoLoop = 0] = "NoLoop", CC[CC.LoopOnLastFrame = 1] = "LoopOnLastFrame", CC[CC.HoldOnLastFrame = 2] = "HoldOnLastFrame", CC
      }({}),
      bC = function(CC) {
        return CC[CC.Movement = 0] = "Movement", CC[CC.Action = 1] = "Action", CC[CC.Emote = 2] = "Emote", CC[CC.Custom = 3] = "Custom", CC
      }({}),
      nC = function(CC) {
        return CC[CC.Start = 0] = "Start", CC[CC.Stop = 1] = "Stop", CC
      }({})
  },
  4783: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => wC,
      f: () => QC,
      i: () => bC,
      m: () => oC,
      q: () => nC
    });
    const QC = ["sine", "triangle", "square", "sawtooth"],
      wC = 55,
      bC = {
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

    function nC(CC) {
      return "string" !== typeof CC ? CC : Object.hasOwn(bC, CC) ? bC[CC] : null
    }

    function fC(CC, zC, ZC) {
      return Math.min(ZC, Math.max(zC, CC))
    }

    function oC(CC) {
      const zC = fC(CC.durationMs, 10, 500),
        ZC = fC(CC.attackMs, 0, zC),
        {
          intonation: wC
        } = CC;
      return {
        waveform: QC.includes(CC.waveform) ? CC.waveform : "sine",
        pitchHz: fC(CC.pitchHz, 20, 4e3),
        glideSemitones: fC(CC.glideSemitones, -24, 24),
        durationMs: zC,
        attackMs: ZC,
        releaseMs: fC(CC.releaseMs, 0, zC - ZC),
        lowpassHz: null === CC.lowpassHz ? null : fC(CC.lowpassHz, 20, 2e4),
        volume: fC(CC.volume, 0, 2),
        intonation: {
          variationSemitones: fC(wC.variationSemitones, 0, 6),
          declineSemitones: fC(wC.declineSemitones, 0, 12),
          questionRiseSemitones: fC(wC.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: fC(wC.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: fC(CC.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);