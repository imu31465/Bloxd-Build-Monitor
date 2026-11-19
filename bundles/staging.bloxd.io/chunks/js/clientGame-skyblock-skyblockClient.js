export const id = 25;
export const ids = [25];
export const modules = {
  35994: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => MD,
      e: () => tD,
      f: () => yD,
      h: () => BD
    });
    var ID = cD(9041),
      pD = cD(35996),
      iD = cD(36002),
      fD = cD(8394),
      bD = cD(1440),
      QD = cD(53),
      wD = cD(62),
      SD = cD(1093);

    function BD() {
      var DD;
      return (0, bD.g)(pD.b, (0, pD.o)()), (0, SD.jsx)(SD.Fragment, {
        children: null === (DD = (0, pD.o)()) || void 0 === DD ? void 0 : DD.content
      })
    }

    function yD(DD) {
      var CD;
      let {
        show: cD
      } = DD;
      (0, bD.g)(pD.b, (0, pD.o)());
      const wD = null === (CD = (0, pD.o)()) || void 0 === CD ? void 0 : CD.menu;
      return (0, QD.useEffect)((() => {
        var DD;
        cD || (null === wD || void 0 === wD || null === (DD = wD.onClose) || void 0 === DD || DD.call(wD), (0, iD.q)())
      }), [cD, wD]), (0, QD.useEffect)((() => cD ? (0, fD.i)(iD.B, iD.e) : void 0), [cD]), (0, SD.jsx)(ID.c, {
        showing: cD,
        globallyUniqueKey: "clientGameMenu",
        children: null === wD || void 0 === wD ? void 0 : wD.content
      })
    }

    function MD(DD) {
      let {
        placement: CD = "bottom"
      } = DD;
      return (0, SD.jsx)("div", {
        id: `clientGameHud-${CD}`,
        style: {
          display: "contents"
        }
      })
    }

    function tD(DD) {
      let {
        children: CD,
        placement: cD = "bottom"
      } = DD;
      const [ID, pD] = (0, QD.useState)(null);
      return (0, QD.useEffect)((() => {
        pD(document.getElementById(`clientGameHud-${cD}`))
      }), [cD]), ID ? (0, wD.createPortal)(CD, ID) : null
    }
  },
  4599: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => oD,
      e: () => vD
    });
    var ID = cD(1049),
      pD = cD.n(ID),
      iD = cD(53),
      fD = cD(1192),
      bD = cD(4606),
      QD = cD(1872),
      wD = cD(2358),
      SD = cD(4608),
      BD = cD(1093);
    const yD = new WeakMap;
    let MD = 0;

    function tD(DD) {
      let CD = yD.get(DD);
      return void 0 === CD && (CD = MD++, yD.set(DD, CD)), CD
    }

    function ZD(DD) {
      let {
        piece: CD
      } = DD;
      return "space" === CD.kind ? (0, BD.jsx)(BD.Fragment, {
        children: CD.text
      }) : (0, BD.jsx)("span", {
        className: "DialogueWord",
        style: {
          "--word-delay": `${CD.delayMs}ms`
        },
        children: (0, BD.jsx)(bD.b, {
          text: "icon" === CD.kind ? `[[${CD.icon}]]` : CD.text
        })
      })
    }

    function oD(DD) {
      let {
        display: CD
      } = DD;
      const {
        selectedLanguage: cD
      } = (0, fD.F)(), ID = (0, iD.useMemo)((() => (0, SD.d)((0, SD.e)(CD).plan.pieces)), [CD, cD.code]);
      return (0, BD.jsxs)("div", {
        className: pD()("Dialogue", {
          DialogueAnimateIn: !1 !== CD.animateIn
        }),
        children: [CD.speakerName && (0, BD.jsx)(QD.c, {
          text: CD.speakerName,
          className: "DialogueSpeaker"
        }), (0, BD.jsx)("p", {
          className: "DialogueLine",
          children: ID.map(((DD, CD) => 1 === DD.length && "space" === DD[0].kind ? DD[0].text : (0, BD.jsx)("span", {
            className: "DialogueGlue",
            children: DD.map(((DD, CD) => (0, BD.jsx)(ZD, {
              piece: DD
            }, CD)))
          }, CD)))
        })]
      })
    }
    const vD = (0, iD.memo)((function() {
      const DD = (0, wD.h)("dialogue");
      return (0, BD.jsx)("div", {
        className: "DialogueAnchor",
        "data-camera-keeper": "",
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: DD && (0, BD.jsx)(oD, {
          display: DD
        }, tD(DD))
      })
    }))
  },
  4606: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => bD
    });
    var ID = cD(53),
      pD = cD(312),
      iD = cD(1893),
      fD = cD(1093);

    function bD(DD) {
      let {
        text: CD
      } = DD;
      const cD = [];
      let bD = "";
      return (0, pD.bc)(CD).forEach(((DD, CD) => {
        if ("string" === typeof DD || !(0, iD.g)(DD.icon)) return void(bD += "string" === typeof DD ? DD : DD.icon);
        const pD = Math.max(0, bD.trimEnd().search(/\S{1,12}$/));
        cD.push((0, fD.jsxs)(ID.Fragment, {
          children: [bD.slice(0, pD), (0, fD.jsxs)("span", {
            className: "InlineIconTextGlue",
            children: [bD.slice(pD), (0, fD.jsx)("span", {
              className: "InlineIconTextIcon",
              role: "img",
              "aria-label": DD.icon,
              children: (0, fD.jsx)(iD.d, {
                itemName: DD.icon,
                amount: 0
              })
            })]
          })]
        }, CD)), bD = ""
      })), cD.push(bD), (0, fD.jsx)(fD.Fragment, {
        children: cD
      })
    }
  },
  9041: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => iD
    });
    var ID = cD(4329),
      pD = cD(4337);

    function iD(DD) {
      let {
        children: CD,
        showing: cD,
        globallyUniqueKey: iD,
        alwaysMountChildren: fD = !1,
        doGameplayStartStopOnShow: bD = !0,
        keepsMovement: QD = !1
      } = DD;
      return (0, pD.e)(!0, cD, iD, QD), (0, ID.b)(bD, cD), cD || fD ? CD : null
    }
  },
  4608: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => zD,
      e: () => VD
    });
    var ID = cD(4615),
      pD = cD(312);
    const iD = 120,
      fD = 260,
      bD = 1.15,
      QD = 1.2,
      wD = 2,
      SD = 1.08,
      BD = .8,
      yD = .95,
      MD = 8,
      tD = "[\"')\\]\u300d\u300f\uff09]*",
      ZD = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${tD}$`),
      oD = new RegExp(`[?\uff1f]${tD}$`),
      vD = new RegExp(`[!\uff01]${tD}$`),
      ND = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      gD = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      XD = new RegExp(`[${gD}]`),
      mD = new RegExp(`[${gD}]|[^${gD}]+`, "g"),
      nD = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function OD(DD) {
      let CD = 2166136261;
      for (let cD = 0; cD < DD.length; cD++) CD ^= DD.charCodeAt(cD), CD = Math.imul(CD, 16777619);
      return (CD >>> 0) / 4294967295 * 2 - 1
    }

    function PD(DD) {
      var CD;
      if (XD.test(DD)) return 1;
      const cD = DD.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        ID = cD.replace(/[^0-9]/g, "");
      if (ID.length > 0 && !/\p{L}/u.test(cD)) return Math.min(ID.length, 4);
      const pD = null !== (CD = cD.match(nD)) && void 0 !== CD ? CD : [];
      if (0 === pD.length) {
        var iD, fD;
        const DD = null !== (iD = null === (fD = cD.match(/\p{L}/gu)) || void 0 === fD ? void 0 : fD.length) && void 0 !== iD ? iD : 0;
        return 0 === DD ? 0 : Math.min(Math.max(1, Math.round(DD / 2.5)), MD)
      }
      const bD = cD.replace(/[^\p{L}]/gu, ""),
        QD = pD.length > 1 && "e" === pD.at(-1) && bD.endsWith("e") && !bD.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(DD.replace(/[^\p{L}]/gu, ""));
      return Math.min(pD.length - (QD ? 1 : 0), MD)
    }

    function HD(DD) {
      return DD.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function UD(DD) {
      const CD = DD.replace(/[^\p{L}]/gu, "");
      return CD.length >= 2 && CD === CD.toUpperCase() && CD !== CD.toLowerCase()
    }

    function xD(DD, CD) {
      var cD;
      const MD = CD && (0, ID.l)(CD),
        tD = null !== (cD = null === MD || void 0 === MD ? void 0 : MD.syllableMs) && void 0 !== cD ? cD : ID.d,
        gD = function(DD) {
          const CD = [];
          for (const ID of (0, pD.bc)(DD))
            if ("string" === typeof ID)
              for (const DD of ID.split(/(\s+)/)) {
                if ("" === DD) continue;
                if (/^\s+$/.test(DD)) {
                  CD.push({
                    kind: "space",
                    text: DD
                  });
                  continue
                }
                if (!XD.test(DD)) {
                  CD.push({
                    kind: "word",
                    text: DD,
                    delayMs: 0
                  });
                  continue
                }
                let ID = !0;
                for (const pD of null !== (cD = DD.match(mD)) && void 0 !== cD ? cD : []) {
                  var cD;
                  const DD = CD.at(-1);
                  ID || "word" !== (null === DD || void 0 === DD ? void 0 : DD.kind) || XD.test(pD) || /[\p{L}\p{N}]/u.test(pD) ? (ID || CD.push({
                    kind: "space",
                    text: "\u200b"
                  }), CD.push({
                    kind: "word",
                    text: pD,
                    delayMs: 0
                  }), ID = !1) : DD.text += pD
                }
              } else CD.push({
                kind: "icon",
                text: ID.icon,
                delayMs: 0
              });
          return CD
        }(DD),
        nD = [];
      let xD = [];
      for (const ID of gD) "space" !== ID.kind && (xD.push(ID), ZD.test(ID.text) && (nD.push(xD), xD = []));
      nD.push(xD);
      const qD = [];
      let JD = 0;
      for (const ID of nD) {
        var KD, aD;
        const DD = null !== (KD = null === (aD = ID.at(-1)) || void 0 === aD ? void 0 : aD.text) && void 0 !== KD ? KD : "",
          CD = oD.test(DD),
          cD = vD.test(DD),
          pD = ID.map((DD => "word" === DD.kind ? PD(DD.text) : 1)),
          gD = pD.findLastIndex((DD => DD > 0));
        for (const [oD, vD] of ID.entries()) {
          const DD = "word" === vD.kind,
            ID = pD[oD];
          vD.delayMs = JD;
          for (let pD = 0; MD && pD < ID; pD++) {
            const {
              intonation: iD
            } = MD;
            let fD = gD > 0 ? -iD.declineSemitones * (oD / gD) : 0;
            fD += OD(`${HD(vD.text)}|${pD}`) * iD.variationSemitones;
            const ZD = Math.min(1, iD.variationSemitones);
            let ND = MD.glideSemitones,
              XD = 1;
            cD && (fD += iD.exclaimLiftSemitones, XD *= bD), CD && oD === gD && (fD += iD.questionRiseSemitones * (ID > 1 ? .5 + .5 * pD / (ID - 1) : 1), pD === ID - 1 && (ND = Math.abs(ND) + iD.questionRiseSemitones / 2)), DD && UD(vD.text) && (fD += wD * ZD, XD *= QD), ID > 1 && 0 === pD && (fD += BD * ZD, XD *= SD), qD.push({
              atMs: JD + pD * tD,
              semitones: fD,
              glideSemitones: ND,
              durationMs: pD < ID - 1 ? Math.min(MD.durationMs, tD * yD) : MD.durationMs,
              level: XD
            })
          }
          JD += ID * tD + (ZD.test(vD.text) ? fD : ND.test(vD.text) ? iD : 0)
        }
      }
      return {
        pieces: gD.map((DD => "space" === DD.kind ? DD : "icon" === DD.kind ? {
          kind: "icon",
          icon: DD.text,
          delayMs: DD.delayMs
        } : {
          kind: "word",
          text: DD.text,
          delayMs: DD.delayMs
        })),
        blips: qD
      }
    }
    var qD = cD(1192),
      JD = cD(1250),
      KD = cD(1913);

    function aD(DD) {
      if ("string" === typeof DD) return DD;
      const CD = JD.e.get().getCurrentLanguageCode();
      return (0, qD.s)(CD, DD.translationKey, (0, qD.o)(DD.params, KD.c.shown))
    }

    function VD(DD) {
      const CD = void 0 === DD.voice ? null : (0, ID.p)(DD.voice),
        cD = CD && (0, ID.l)(CD);
      return {
        plan: xD(aD(DD.line), cD),
        synth: cD
      }
    }

    function zD(DD) {
      const CD = [];
      let cD = [];
      for (const [pD, iD] of DD.entries()) {
        var ID;
        "space" === iD.kind && (" " !== iD.text || "icon" !== (null === (ID = DD[pD + 1]) || void 0 === ID ? void 0 : ID.kind)) ? (cD.length > 0 && CD.push(cD), CD.push([iD]), cD = []) : cD.push(iD)
      }
      return cD.length > 0 && CD.push(cD), CD
    }
  },
  8394: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => iD,
      i: () => pD
    });
    let ID = null;
    const pD = function(DD) {
        const CD = {
          cycle: DD,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return ID = CD, () => {
          ID === CD && (ID = null)
        }
      },
      iD = () => {
        var DD;
        return null !== (DD = ID) && void 0 !== DD && DD.canCycle() ? ID.cycle : null
      }
  },
  36002: (DD, CD, cD) => {
    cD.d(CD, {
      B: () => tD,
      C: () => ND,
      b: () => iD,
      e: () => ZD,
      i: () => oD,
      l: () => bD,
      p: () => yD,
      q: () => vD,
      t: () => BD,
      x: () => gD
    });
    var ID = cD(16),
      pD = cD(20);
    const iD = "clientGameInventoryButtonsChanged",
      fD = new Map;

    function bD() {
      return [...fD.values()].sort(((DD, CD) => {
        var cD, ID;
        return (null !== (cD = DD.order) && void 0 !== cD ? cD : 0) - (null !== (ID = CD.order) && void 0 !== ID ? ID : 0)
      }))
    }
    let QD = null;

    function wD(DD) {
      QD = DD
    }
    let SD = !1;

    function BD(DD) {
      SD = !0;
      try {
        DD.onClick()
      } finally {
        SD = !1
      }
      DD.panel && "clientGame" === ID.d.get("openInGameMenuName") && wD(DD.id)
    }

    function yD() {
      return SD
    }

    function MD() {
      return bD().filter((DD => DD.panel && !DD.disabled))
    }

    function tD(DD) {
      const CD = MD(),
        cD = CD.findIndex((DD => DD.id === QD));
      return !(cD < 0 || CD.length < 2) && (BD(CD[(cD + DD + CD.length) % CD.length]), !0)
    }

    function ZD() {
      return null !== QD && MD().length > 1
    }

    function oD() {
      wD(null)
    }

    function vD() {
      "inventory" !== ID.d.get("openInGameMenuName") && wD(null)
    }

    function ND() {
      const DD = QD;
      return wD(null), DD
    }

    function gD(DD) {
      return fD.set(DD.id, DD), pD.i.Uo(iD, bD(), !0), () => {
        fD.get(DD.id) === DD && (fD.delete(DD.id), pD.i.Uo(iD, bD()))
      }
    }
  },
  35996: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => bD,
      e: () => oD,
      i: () => vD,
      m: () => yD,
      o: () => wD,
      s: () => ZD,
      u: () => MD,
      v: () => SD
    });
    var ID = cD(16),
      pD = cD(20),
      iD = cD(1284),
      fD = cD(36002);
    const bD = "clientGameUiChanged";
    let QD = null;

    function wD() {
      return QD
    }

    function SD(DD, CD) {
      const cD = {
        content: DD,
        menu: CD
      };
      return QD = cD, pD.i.Uo(bD, QD, !0), () => {
        QD === cD && (QD = null, tD = !1, oD(), pD.i.Uo(bD, null))
      }
    }
    let BD = null;

    function yD() {
      return BD
    }

    function MD(DD) {
      return BD = DD, () => {
        BD === DD && (BD = null)
      }
    }
    let tD = !1;

    function ZD() {
      const DD = ID.d.get("openInGameMenuName");
      "clientGame" !== DD && (tD = "inventory" === DD), (0, fD.p)() || (0, fD.i)(), (0, iD.p)(iD.e), ID.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function oD() {
      ND(!1)
    }

    function vD() {
      ND(tD)
    }

    function ND(DD) {
      "clientGame" === ID.d.get("openInGameMenuName") && ID.d.set({
        openInGameMenuName: DD ? "inventory" : null
      }), DD || (0, fD.i)(), tD = !1
    }
  },
  37885: (DD, CD, cD) => {
    function ID(DD, CD, cD) {
      const ID = new Set,
        pD = new ResizeObserver(cD),
        iD = () => {
          const CD = new Set(document.querySelectorAll(DD));
          let iD = !1;
          for (const DD of ID) CD.has(DD) || (pD.unobserve(DD), ID.delete(DD), iD = !0);
          for (const DD of CD) ID.has(DD) || (pD.observe(DD), fD.observe(DD, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), ID.add(DD));
          iD && cD()
        },
        fD = new MutationObserver((CD => {
          CD.some((DD => "attributes" === DD.type)) && cD(), CD.some((CD => function(DD, CD, cD) {
            if ("childList" !== DD.type) return !1;
            for (const ID of DD.addedNodes)
              if (ID instanceof Element && (ID.matches(CD) || ID.querySelector(CD))) return !0;
            for (const ID of DD.removedNodes)
              if (ID instanceof Element)
                for (const DD of cD)
                  if (ID.contains(DD)) return !0;
            return !1
          }(CD, DD, ID))) && iD()
        }));
      fD.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const bD of CD) pD.observe(bD);
      return window.addEventListener("resize", cD), iD(), cD(), () => {
        pD.disconnect(), fD.disconnect(), window.removeEventListener("resize", cD)
      }
    }
    cD.d(CD, {
      d: () => ID
    })
  },
  8583: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => bD,
      d: () => QD
    });
    var ID = cD(16),
      pD = cD(1317),
      iD = cD(90);
    const fD = {
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

    function bD() {
      return (0, iD.isMobile)() && "function" === typeof navigator.vibrate
    }
    const QD = new class {
      constructor(DD) {
        this.deps = DD, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(DD, CD) {
        var cD;
        if (!this.deps.enabled()) return;
        const ID = fD[DD],
          pD = null !== CD && void 0 !== CD ? CD : ID.pattern;
        if (null === pD) return void console.warn("No vibration pattern for", DD);
        const iD = this.deps.now();
        iD - this.lastAnyAt < 40 && ID.priority < this.playingPriority || iD - (null !== (cD = this.lastAt.get(DD)) && void 0 !== cD ? cD : -1 / 0) < ID.minGapMs || iD < this.playingUntil && ID.priority < this.playingPriority || (this.lastAt.set(DD, iD), this.lastAnyAt = iD, this.playingUntil = iD + pD.reduce(((DD, CD) => DD + CD), 0), this.playingPriority = ID.priority, this.deps.vibrate(pD))
      }
    }({
      vibrate: DD => {
        navigator.vibrate([...DD])
      },
      now: () => performance.now(),
      enabled: () => bD() && ID.d.get("isTouchScreen") && ID.d.get("clientEscMenuOptions").vibration && !(0, pD.c)()
    })
  },
  36517: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => bD,
      f: () => fD
    });
    var ID = cD(36501),
      pD = cD(326),
      iD = cD(1865);

    function fD(DD) {
      if ("mi" in DD) return nD.createAnimationScript(DD);
      return new wD(DD).createAnimationScript()
    }

    function bD(DD, CD, cD, pD) {
      const iD = DD.mi <= 0 ? 1 : CD + cD * Math.max(0, pD) / DD.mi;
      return DD.ni === ID.h.LoopOnLastFrame ? iD % 1 : DD.ni === ID.h.NoLoop && iD >= 1 ? null : Math.min(1, iD)
    }
    class QD {
      createAnimationScript(DD) {
        const {
          mi: CD,
          loop: cD,
          Oi: ID
        } = DD;
        return {
          mi: Math.round(CD),
          ni: this.createLoopMode(null !== cD && void 0 !== cD && cD),
          Oi: this.createNodeSkeletonAnimationScript(null !== ID && void 0 !== ID ? ID : null)
        }
      }
      createLoopMode(DD) {
        switch (DD) {
          case !1:
            return ID.h.NoLoop;
          case !0:
            return ID.h.LoopOnLastFrame;
          case "hold-on-last-frame":
            return ID.h.HoldOnLastFrame
        }
        throw new Error(`Invalid loop mode schema: ${DD}`)
      }
      createNodeSkeletonAnimationScript(DD) {
        if (null === DD) return null;
        const CD = {};
        for (const cD in DD) {
          const ID = DD[cD];
          CD[cD] = this.createNodeAnimationScript(ID)
        }
        return CD
      }
      createNodeAnimationScript(DD) {
        const {
          timeline: CD
        } = DD, cD = CD.filter((DD => Number.isFinite(DD.timeFraction)));
        return cD.sort(((DD, CD) => DD.timeFraction - CD.timeFraction)), {
          rotation: this.createTimelineFromKeyframes(cD, "rotation", yD),
          position: this.createTimelineFromKeyframes(cD, "position", tD)
        }
      }
      createTimelineFromKeyframes(DD, CD, cD) {
        const ID = [];
        for (const QD of DD) {
          const DD = QD[CD];
          if (DD) {
            const CD = this.createAnimationFrameWithoutPrecomputes(QD.timeFraction, DD);
            SD(CD) && ID.push(CD)
          }
        }
        const pD = [];
        for (let QD = 0; QD < ID.length; QD++) {
          var iD, fD, bD;
          const DD = ID[QD],
            CD = null !== (iD = ID[QD - 1]) && void 0 !== iD ? iD : DD,
            wD = null !== (fD = ID[QD + 1]) && void 0 !== fD ? fD : DD,
            SD = null !== (bD = ID[QD + 2]) && void 0 !== bD ? bD : wD;
          pD.push({
            ...DD,
            ...cD(CD.post, CD.timeFraction, DD.post, DD.timeFraction, wD.pre, wD.timeFraction, SD.pre, SD.timeFraction)
          })
        }
        return pD
      }
      createAnimationFrameWithoutPrecomputes(DD, CD) {
        let cD, ID, pD = null;
        var iD;
        if ("object" === typeof CD && "point" in CD) pD = null !== (iD = CD.Ui) && void 0 !== iD ? iD : null, cD = CD.point, ID = CD.point;
        else if ("object" === typeof CD && "pre" in CD) {
          var fD;
          pD = null !== (fD = CD.Ui) && void 0 !== fD ? fD : null, cD = CD.pre, ID = CD.post
        } else cD = CD, ID = CD;
        return {
          timeFraction: DD,
          Ui: this.createLerpMode(pD),
          pre: cD,
          post: ID
        }
      }
      createLerpMode(DD) {
        return null === DD ? ID.e.Linear : QD.LERP_MODE_SCHEMA_MAPPING[DD]
      }
    }
    QD.LERP_MODE_SCHEMA_MAPPING = {
      linear: ID.e.Linear,
      "catmull-rom-spline": ID.e.CatmullRomSpline
    };
    class wD {
      constructor(DD) {
        this.animationSchema = DD
      }
      createAnimationScript() {
        const {
          animation_length: DD,
          loop: CD,
          bones: cD
        } = this.animationSchema;
        return {
          mi: Math.round(1e3 * DD),
          ni: this.createLoopMode(null !== CD && void 0 !== CD && CD),
          Oi: this.createNodeSkeletonAnimationScript(null !== cD && void 0 !== cD ? cD : null)
        }
      }
      createLoopMode(DD) {
        switch (DD) {
          case !1:
            return ID.h.NoLoop;
          case !0:
            return ID.h.LoopOnLastFrame;
          case "hold_on_last_frame":
            return ID.h.HoldOnLastFrame
        }
        throw new Error(`Invalid Blockbench loop mode schema: ${DD}`)
      }
      createNodeSkeletonAnimationScript(DD) {
        if (null === DD) return null;
        const CD = {};
        for (const cD in DD) {
          const ID = DD[cD];
          CD[cD] = this.createNodeAnimationScript(ID)
        }
        return CD
      }
      createNodeAnimationScript(DD) {
        const {
          rotation: CD,
          position: cD
        } = DD;
        return {
          rotation: this.createAnimationTimeline(null !== CD && void 0 !== CD ? CD : null, oD, yD, !0),
          position: this.createAnimationTimeline(null !== cD && void 0 !== cD ? cD : null, ND, tD, !1)
        }
      }
      createAnimationTimeline(DD, CD, cD, ID) {
        if (null === DD) return [];
        if (Array.isArray(DD)) {
          DD = {
            "0.0": DD
          }
        }
        const pD = Object.entries(DD).map((DD => {
          let [cD, ID] = DD;
          const pD = Number(cD) / this.animationSchema.animation_length;
          return this.createAnimationFrameWithoutPrecomputes(pD, ID, CD)
        })).filter(SD);
        pD.sort(((DD, CD) => DD.timeFraction - CD.timeFraction)), ID && function(DD) {
          for (let CD = 1; CD < DD.length; CD++) {
            const cD = DD[CD - 1].post,
              ID = DD[CD],
              pD = gD(ID.pre),
              iD = gD(ID.post),
              fD = mD(cD, ID.pre);
            mD(cD, pD) < fD && (DD[CD] = {
              ...ID,
              pre: pD,
              post: iD
            })
          }
        }(pD);
        const iD = [];
        for (let wD = 0; wD < pD.length; wD++) {
          var fD, bD, QD;
          const DD = pD[wD],
            CD = null !== (fD = pD[wD - 1]) && void 0 !== fD ? fD : DD,
            ID = null !== (bD = pD[wD + 1]) && void 0 !== bD ? bD : DD,
            SD = null !== (QD = pD[wD + 2]) && void 0 !== QD ? QD : ID;
          iD.push({
            ...DD,
            ...cD(CD.post, CD.timeFraction, DD.post, DD.timeFraction, ID.pre, ID.timeFraction, SD.pre, SD.timeFraction)
          })
        }
        return iD
      }
      createAnimationFrameWithoutPrecomputes(DD, CD, cD) {
        let ID, pD, iD = null;
        if ("object" === typeof CD && "post" in CD) {
          var fD;
          iD = null !== (fD = CD.lerp_mode) && void 0 !== fD ? fD : null, pD = ZD(CD.post, cD), ID = CD.pre ? ZD(CD.pre, cD) : pD
        } else {
          const DD = ZD(CD, cD);
          pD = DD, ID = DD
        }
        return {
          timeFraction: DD,
          Ui: this.createLerpMode(iD),
          pre: ID,
          post: pD
        }
      }
      createLerpMode(DD) {
        return null === DD ? ID.e.Linear : wD.LERP_MODE_SCHEMA_MAPPING[DD]
      }
    }

    function SD(DD) {
      return Number.isFinite(DD.timeFraction) && BD(DD.pre) && BD(DD.post)
    }

    function BD(DD) {
      return Number.isFinite(DD[0]) && Number.isFinite(DD[1]) && Number.isFinite(DD[2])
    }

    function yD(DD, CD, cD, ID, pD, iD, fD, bD) {
      const QD = iD - CD,
        wD = iD - ID,
        SD = bD - ID,
        BD = [null, null, null];
      for (let yD = 0; yD < BD.length; yD++) BD[yD] = MD(DD[yD], cD[yD], pD[yD], fD[yD], QD, SD);
      return {
        xi: wD,
        qi: BD
      }
    }

    function MD(DD, CD, cD, ID, iD, fD) {
      return {
        Ki: pD.e.computeShortestRotation(DD, cD) / iD,
        ai: pD.e.computeShortestRotation(CD, ID) / fD,
        delta: pD.e.computeShortestRotation(CD, cD)
      }
    }

    function tD(DD, CD, cD, ID, pD, iD, fD, bD) {
      const QD = iD - CD,
        wD = iD - ID,
        SD = bD - ID,
        BD = [null, null, null];
      for (let yD = 0; yD < BD.length; yD++) BD[yD] = {
        Ki: (pD[yD] - DD[yD]) / QD,
        ai: (fD[yD] - cD[yD]) / SD,
        delta: pD[yD] - cD[yD]
      };
      return {
        xi: wD,
        qi: BD
      }
    }

    function ZD(DD, CD) {
      return null === CD ? DD : CD(DD)
    }

    function oD(DD) {
      const [CD, cD, ID] = DD, fD = -(0, iD.o)(CD), bD = -(0, iD.o)(cD), QD = (0, iD.o)(ID), wD = pD.e.quaternionFromEulerZYX(fD, bD, QD);
      return pD.e.eulerYXZFromQuaternion(wD)
    }
    wD.LERP_MODE_SCHEMA_MAPPING = {
      linear: ID.e.Linear,
      catmullrom: ID.e.CatmullRomSpline
    };
    const vD = 1 / 16;

    function ND(DD) {
      return [-DD[0] * vD, DD[1] * vD, DD[2] * vD]
    }

    function gD(DD) {
      const [CD, cD, ID] = DD;
      return [CD >= 0 ? Math.PI - CD : -Math.PI - CD, XD(cD + Math.PI), XD(ID + Math.PI)]
    }

    function XD(DD) {
      return pD.e.mod(DD + Math.PI, 2 * Math.PI) - Math.PI
    }

    function mD(DD, CD) {
      return Math.abs(pD.e.computeShortestRotation(DD[0], CD[0])) + Math.abs(pD.e.computeShortestRotation(DD[1], CD[1])) + Math.abs(pD.e.computeShortestRotation(DD[2], CD[2]))
    }
    const nD = new QD
  },
  36501: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => fD,
      d: () => iD,
      e: () => ID,
      h: () => pD
    });
    let ID = function(DD) {
        return DD[DD.Linear = 0] = "Linear", DD[DD.CatmullRomSpline = 1] = "CatmullRomSpline", DD
      }({}),
      pD = function(DD) {
        return DD[DD.NoLoop = 0] = "NoLoop", DD[DD.LoopOnLastFrame = 1] = "LoopOnLastFrame", DD[DD.HoldOnLastFrame = 2] = "HoldOnLastFrame", DD
      }({}),
      iD = function(DD) {
        return DD[DD.Movement = 0] = "Movement", DD[DD.Action = 1] = "Action", DD[DD.Emote = 2] = "Emote", DD[DD.Custom = 3] = "Custom", DD
      }({}),
      fD = function(DD) {
        return DD[DD.Start = 0] = "Start", DD[DD.Stop = 1] = "Stop", DD
      }({})
  },
  4615: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => pD,
      h: () => ID,
      k: () => iD,
      l: () => QD,
      p: () => fD
    });
    const ID = ["sine", "triangle", "square", "sawtooth"],
      pD = 55,
      iD = {
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

    function fD(DD) {
      return "string" !== typeof DD ? DD : Object.hasOwn(iD, DD) ? iD[DD] : null
    }

    function bD(DD, CD, cD) {
      return Math.min(cD, Math.max(CD, DD))
    }

    function QD(DD) {
      const CD = bD(DD.durationMs, 10, 500),
        cD = bD(DD.attackMs, 0, CD),
        {
          intonation: pD
        } = DD;
      return {
        waveform: ID.includes(DD.waveform) ? DD.waveform : "sine",
        pitchHz: bD(DD.pitchHz, 20, 4e3),
        glideSemitones: bD(DD.glideSemitones, -24, 24),
        durationMs: CD,
        attackMs: cD,
        releaseMs: bD(DD.releaseMs, 0, CD - cD),
        lowpassHz: null === DD.lowpassHz ? null : bD(DD.lowpassHz, 20, 2e4),
        volume: bD(DD.volume, 0, 2),
        intonation: {
          variationSemitones: bD(pD.variationSemitones, 0, 6),
          declineSemitones: bD(pD.declineSemitones, 0, 12),
          questionRiseSemitones: bD(pD.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: bD(pD.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: bD(DD.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);