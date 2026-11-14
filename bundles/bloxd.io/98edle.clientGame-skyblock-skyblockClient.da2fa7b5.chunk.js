export const id = 22;
export const ids = [22];
export const modules = {
  34827: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => TW,
      g: () => gR,
      k: () => tR,
      n: () => BW
    });
    var wW = MW(8135),
      CW = MW(34830),
      zR = MW(34838),
      AW = MW(7672),
      bR = MW(1253),
      yR = MW(75),
      NW = MW(93),
      eW = MW(940);

    function BW() {
      var WW;
      return (0, bR.i)(CW.c, (0, CW.h)()), (0, eW.jsx)(eW.Fragment, {
        children: null === (WW = (0, CW.h)()) || void 0 === WW ? void 0 : WW.content
      })
    }

    function tR(WW) {
      var RW;
      let {
        show: MW
      } = WW;
      (0, bR.i)(CW.c, (0, CW.h)());
      const NW = null === (RW = (0, CW.h)()) || void 0 === RW ? void 0 : RW.menu;
      return (0, yR.useEffect)((() => {
        MW || (null === NW || void 0 === NW || NW.onClose(), (0, zR.s)())
      }), [MW, NW]), (0, yR.useEffect)((() => MW ? (0, AW.g)(zR.D, zR.e) : void 0), [MW]), (0, eW.jsx)(wW.c, {
        showing: MW,
        globallyUniqueKey: "clientGameMenu",
        children: null === NW || void 0 === NW ? void 0 : NW.content
      })
    }

    function TW(WW) {
      let {
        placement: RW = "bottom"
      } = WW;
      return (0, eW.jsx)("div", {
        id: `clientGameHud-${RW}`,
        style: {
          display: "contents"
        }
      })
    }

    function gR(WW) {
      let {
        children: RW,
        placement: MW = "bottom"
      } = WW;
      const [wW, CW] = (0, yR.useState)(null);
      return (0, yR.useEffect)((() => {
        CW(document.getElementById(`clientGameHud-${MW}`))
      }), [MW]), wW ? (0, NW.createPortal)(RW, wW) : null
    }
  },
  3803: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => YW,
      f: () => JW
    });
    var wW = MW(897),
      CW = MW.n(wW),
      zR = MW(75),
      AW = MW(1027),
      bR = MW(3811),
      yR = MW(1523),
      NW = MW(1953),
      eW = MW(3813),
      BW = MW(940);
    const tR = new WeakMap;
    let TW = 0;

    function gR(WW) {
      let RW = tR.get(WW);
      return void 0 === RW && (RW = TW++, tR.set(WW, RW)), RW
    }

    function iR(WW) {
      let {
        piece: RW
      } = WW;
      return "space" === RW.kind ? (0, BW.jsx)(BW.Fragment, {
        children: RW.text
      }) : (0, BW.jsx)("span", {
        className: "DialogueWord",
        style: {
          "--word-delay": `${RW.delayMs}ms`
        },
        children: (0, BW.jsx)(bR.b, {
          text: "icon" === RW.kind ? `[[${RW.icon}]]` : RW.text
        })
      })
    }

    function YW(WW) {
      let {
        display: RW
      } = WW;
      const {
        selectedLanguage: MW
      } = (0, AW.C)(), wW = (0, zR.useMemo)((() => (0, eW.d)((0, eW.g)(RW).plan.pieces)), [RW, MW.code]);
      return (0, BW.jsxs)("div", {
        className: CW()("Dialogue", {
          DialogueAnimateIn: !1 !== RW.animateIn
        }),
        children: [RW.speakerName && (0, BW.jsx)(yR.c, {
          text: RW.speakerName,
          className: "DialogueSpeaker"
        }), (0, BW.jsx)("p", {
          className: "DialogueLine",
          children: wW.map(((WW, RW) => 1 === WW.length && "space" === WW[0].kind ? WW[0].text : (0, BW.jsx)("span", {
            className: "DialogueGlue",
            children: WW.map(((WW, RW) => (0, BW.jsx)(iR, {
              piece: WW
            }, RW)))
          }, RW)))
        })]
      })
    }
    const JW = (0, zR.memo)((function() {
      const WW = (0, NW.h)("dialogue");
      return (0, BW.jsx)("div", {
        className: "DialogueAnchor",
        "data-camera-keeper": "",
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: WW && (0, BW.jsx)(YW, {
          display: WW
        }, gR(WW))
      })
    }))
  },
  3811: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => bR
    });
    var wW = MW(75),
      CW = MW(232),
      zR = MW(1537),
      AW = MW(940);

    function bR(WW) {
      let {
        text: RW
      } = WW;
      const MW = [];
      let bR = "";
      return (0, CW.Vb)(RW).forEach(((WW, RW) => {
        if ("string" === typeof WW || !(0, zR.d)(WW.icon)) return void(bR += "string" === typeof WW ? WW : WW.icon);
        const CW = Math.max(0, bR.trimEnd().search(/\S{1,12}$/));
        MW.push((0, AW.jsxs)(wW.Fragment, {
          children: [bR.slice(0, CW), (0, AW.jsxs)("span", {
            className: "InlineIconTextGlue",
            children: [bR.slice(CW), (0, AW.jsx)("span", {
              className: "InlineIconTextIcon",
              role: "img",
              "aria-label": WW.icon,
              children: (0, AW.jsx)(zR.c, {
                itemName: WW.icon,
                amount: 0
              })
            })]
          })]
        }, RW)), bR = ""
      })), MW.push(bR), (0, AW.jsx)(AW.Fragment, {
        children: MW
      })
    }
  },
  8135: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => zR
    });
    var wW = MW(3578),
      CW = MW(3587);

    function zR(WW) {
      let {
        children: RW,
        showing: MW,
        globallyUniqueKey: zR,
        alwaysMountChildren: AW = !1,
        doGameplayStartStopOnShow: bR = !0
      } = WW;
      return (0, CW.d)(!0, MW, zR), (0, wW.c)(bR, MW), MW || AW ? RW : null
    }
  },
  3813: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => pW,
      g: () => dW
    });
    var wW = MW(3820),
      CW = MW(232);
    const zR = 120,
      AW = 260,
      bR = 1.15,
      yR = 1.2,
      NW = 2,
      eW = 1.08,
      BW = .8,
      tR = .95,
      TW = 8,
      gR = "[\"')\\]\u300d\u300f\uff09]*",
      iR = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${gR}$`),
      YW = new RegExp(`[?\uff1f]${gR}$`),
      JW = new RegExp(`[!\uff01]${gR}$`),
      PW = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      IW = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      oW = new RegExp(`[${IW}]`),
      lW = new RegExp(`[${IW}]|[^${IW}]+`, "g"),
      FW = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function fW(WW) {
      let RW = 2166136261;
      for (let MW = 0; MW < WW.length; MW++) RW ^= WW.charCodeAt(MW), RW = Math.imul(RW, 16777619);
      return (RW >>> 0) / 4294967295 * 2 - 1
    }

    function QW(WW) {
      var RW;
      if (oW.test(WW)) return 1;
      const MW = WW.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        wW = MW.replace(/[^0-9]/g, "");
      if (wW.length > 0 && !/\p{L}/u.test(MW)) return Math.min(wW.length, 4);
      const CW = null !== (RW = MW.match(FW)) && void 0 !== RW ? RW : [];
      if (0 === CW.length) {
        var zR, AW;
        const WW = null !== (zR = null === (AW = MW.match(/\p{L}/gu)) || void 0 === AW ? void 0 : AW.length) && void 0 !== zR ? zR : 0;
        return 0 === WW ? 0 : Math.min(Math.max(1, Math.round(WW / 2.5)), TW)
      }
      const bR = MW.replace(/[^\p{L}]/gu, ""),
        yR = CW.length > 1 && "e" === CW.at(-1) && bR.endsWith("e") && !bR.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(WW.replace(/[^\p{L}]/gu, ""));
      return Math.min(CW.length - (yR ? 1 : 0), TW)
    }

    function rR(WW) {
      return WW.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function cR(WW) {
      const RW = WW.replace(/[^\p{L}]/gu, "");
      return RW.length >= 2 && RW === RW.toUpperCase() && RW !== RW.toLowerCase()
    }

    function XW(WW, RW) {
      var MW;
      const TW = RW && (0, wW.m)(RW),
        gR = null !== (MW = null === TW || void 0 === TW ? void 0 : TW.syllableMs) && void 0 !== MW ? MW : wW.d,
        IW = function(WW) {
          const RW = [];
          for (const wW of (0, CW.Vb)(WW))
            if ("string" === typeof wW)
              for (const WW of wW.split(/(\s+)/)) {
                if ("" === WW) continue;
                if (/^\s+$/.test(WW)) {
                  RW.push({
                    kind: "space",
                    text: WW
                  });
                  continue
                }
                if (!oW.test(WW)) {
                  RW.push({
                    kind: "word",
                    text: WW,
                    delayMs: 0
                  });
                  continue
                }
                let wW = !0;
                for (const CW of null !== (MW = WW.match(lW)) && void 0 !== MW ? MW : []) {
                  var MW;
                  const WW = RW.at(-1);
                  wW || "word" !== (null === WW || void 0 === WW ? void 0 : WW.kind) || oW.test(CW) || /[\p{L}\p{N}]/u.test(CW) ? (wW || RW.push({
                    kind: "space",
                    text: "\u200b"
                  }), RW.push({
                    kind: "word",
                    text: CW,
                    delayMs: 0
                  }), wW = !1) : WW.text += CW
                }
              } else RW.push({
                kind: "icon",
                text: wW.icon,
                delayMs: 0
              });
          return RW
        }(WW),
        FW = [];
      let XW = [];
      for (const wW of IW) "space" !== wW.kind && (XW.push(wW), iR.test(wW.text) && (FW.push(XW), XW = []));
      FW.push(XW);
      const jR = [];
      let kR = 0;
      for (const wW of FW) {
        var aR, sW;
        const WW = null !== (aR = null === (sW = wW.at(-1)) || void 0 === sW ? void 0 : sW.text) && void 0 !== aR ? aR : "",
          RW = YW.test(WW),
          MW = JW.test(WW),
          CW = wW.map((WW => "word" === WW.kind ? QW(WW.text) : 1)),
          IW = CW.findLastIndex((WW => WW > 0));
        for (const [YW, JW] of wW.entries()) {
          const WW = "word" === JW.kind,
            wW = CW[YW];
          JW.delayMs = kR;
          for (let CW = 0; TW && CW < wW; CW++) {
            const {
              intonation: zR
            } = TW;
            let AW = IW > 0 ? -zR.declineSemitones * (YW / IW) : 0;
            AW += fW(`${rR(JW.text)}|${CW}`) * zR.variationSemitones;
            const iR = Math.min(1, zR.variationSemitones);
            let PW = TW.glideSemitones,
              oW = 1;
            MW && (AW += zR.exclaimLiftSemitones, oW *= bR), RW && YW === IW && (AW += zR.questionRiseSemitones * (wW > 1 ? .5 + .5 * CW / (wW - 1) : 1), CW === wW - 1 && (PW = Math.abs(PW) + zR.questionRiseSemitones / 2)), WW && cR(JW.text) && (AW += NW * iR, oW *= yR), wW > 1 && 0 === CW && (AW += BW * iR, oW *= eW), jR.push({
              atMs: kR + CW * gR,
              semitones: AW,
              glideSemitones: PW,
              durationMs: CW < wW - 1 ? Math.min(TW.durationMs, gR * tR) : TW.durationMs,
              level: oW
            })
          }
          kR += wW * gR + (iR.test(JW.text) ? AW : PW.test(JW.text) ? zR : 0)
        }
      }
      return {
        pieces: IW.map((WW => "space" === WW.kind ? WW : "icon" === WW.kind ? {
          kind: "icon",
          icon: WW.text,
          delayMs: WW.delayMs
        } : {
          kind: "word",
          text: WW.text,
          delayMs: WW.delayMs
        })),
        blips: jR
      }
    }
    var jR = MW(1027),
      kR = MW(1080),
      aR = MW(1548);

    function sW(WW) {
      if ("string" === typeof WW) return WW;
      const RW = kR.d.get().getCurrentLanguageCode();
      return (0, jR.s)(RW, WW.translationKey, (0, jR.p)(WW.params, aR.d.shown))
    }

    function dW(WW) {
      const RW = void 0 === WW.voice ? null : (0, wW.o)(WW.voice),
        MW = RW && (0, wW.m)(RW);
      return {
        plan: XW(sW(WW.line), MW),
        synth: MW
      }
    }

    function pW(WW) {
      const RW = [];
      let MW = [];
      for (const [CW, zR] of WW.entries()) {
        var wW;
        "space" === zR.kind && (" " !== zR.text || "icon" !== (null === (wW = WW[CW + 1]) || void 0 === wW ? void 0 : wW.kind)) ? (MW.length > 0 && RW.push(MW), RW.push([zR]), MW = []) : MW.push(zR)
      }
      return MW.length > 0 && RW.push(MW), RW
    }
  },
  7672: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => zR,
      g: () => CW
    });
    let wW = null;
    const CW = function(WW) {
        const RW = {
          cycle: WW,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return wW = RW, () => {
          wW === RW && (wW = null)
        }
      },
      zR = () => {
        var WW;
        return null !== (WW = wW) && void 0 !== WW && WW.canCycle() ? wW.cycle : null
      }
  },
  34838: (WW, RW, MW) => {
    MW.d(RW, {
      A: () => IW,
      D: () => gR,
      E: () => PW,
      c: () => zR,
      e: () => iR,
      i: () => YW,
      m: () => bR,
      q: () => tR,
      s: () => JW,
      w: () => BW
    });
    var wW = MW(27),
      CW = MW(33);
    const zR = "clientGameInventoryButtonsChanged",
      AW = new Map;

    function bR() {
      return [...AW.values()].sort(((WW, RW) => {
        var MW, wW;
        return (null !== (MW = WW.order) && void 0 !== MW ? MW : 0) - (null !== (wW = RW.order) && void 0 !== wW ? wW : 0)
      }))
    }
    let yR = null;

    function NW(WW) {
      yR = WW
    }
    let eW = !1;

    function BW(WW) {
      eW = !0;
      try {
        WW.onClick()
      } finally {
        eW = !1
      }
      WW.panel && "clientGame" === wW.b.get("openInGameMenuName") && NW(WW.id)
    }

    function tR() {
      return eW
    }

    function TW() {
      return bR().filter((WW => WW.panel && !WW.disabled))
    }

    function gR(WW) {
      const RW = TW(),
        MW = RW.findIndex((WW => WW.id === yR));
      return !(MW < 0 || RW.length < 2) && (BW(RW[(MW + WW + RW.length) % RW.length]), !0)
    }

    function iR() {
      return null !== yR && TW().length > 1
    }

    function YW() {
      NW(null)
    }

    function JW() {
      "inventory" !== wW.b.get("openInGameMenuName") && NW(null)
    }

    function PW() {
      const WW = yR;
      return NW(null), WW
    }

    function IW(WW) {
      return AW.set(WW.id, WW), CW.k.Sz(zR, bR(), !0), () => {
        AW.get(WW.id) === WW && (AW.delete(WW.id), CW.k.Sz(zR, bR()))
      }
    }
  },
  34830: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => bR,
      e: () => YW,
      f: () => JW,
      g: () => tR,
      h: () => NW,
      j: () => iR,
      k: () => TW,
      l: () => eW
    });
    var wW = MW(27),
      CW = MW(33),
      zR = MW(1115),
      AW = MW(34838);
    const bR = "clientGameUiChanged";
    let yR = null;

    function NW() {
      return yR
    }

    function eW(WW, RW) {
      const MW = {
        content: WW,
        menu: RW
      };
      return yR = MW, CW.k.Sz(bR, yR, !0), () => {
        yR === MW && (yR = null, gR = !1, YW(), CW.k.Sz(bR, null))
      }
    }
    let BW = null;

    function tR() {
      return BW
    }

    function TW(WW) {
      return BW = WW, () => {
        BW === WW && (BW = null)
      }
    }
    let gR = !1;

    function iR() {
      const WW = wW.b.get("openInGameMenuName");
      "clientGame" !== WW && (gR = "inventory" === WW), (0, AW.q)() || (0, AW.i)(), (0, zR.n)("InGameMenu"), wW.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function YW() {
      PW(!1)
    }

    function JW() {
      PW(gR)
    }

    function PW(WW) {
      "clientGame" === wW.b.get("openInGameMenuName") && wW.b.set({
        openInGameMenuName: WW ? "inventory" : null
      }), WW || (0, AW.i)(), gR = !1
    }
  },
  36571: (WW, RW, MW) => {
    function wW(WW, RW, MW) {
      const wW = new Set,
        CW = new ResizeObserver(MW),
        zR = () => {
          const RW = new Set(document.querySelectorAll(WW));
          let zR = !1;
          for (const WW of wW) RW.has(WW) || (CW.unobserve(WW), wW.delete(WW), zR = !0);
          for (const WW of RW) wW.has(WW) || (CW.observe(WW), AW.observe(WW, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), wW.add(WW));
          zR && MW()
        },
        AW = new MutationObserver((RW => {
          RW.some((WW => "attributes" === WW.type)) && MW(), RW.some((RW => function(WW, RW, MW) {
            if ("childList" !== WW.type) return !1;
            for (const wW of WW.addedNodes)
              if (wW instanceof Element && (wW.matches(RW) || wW.querySelector(RW))) return !0;
            for (const wW of WW.removedNodes)
              if (wW instanceof Element)
                for (const WW of MW)
                  if (wW.contains(WW)) return !0;
            return !1
          }(RW, WW, wW))) && zR()
        }));
      AW.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const bR of RW) CW.observe(bR);
      return window.addEventListener("resize", MW), zR(), MW(), () => {
        CW.disconnect(), AW.disconnect(), window.removeEventListener("resize", MW)
      }
    }
    MW.d(RW, {
      d: () => wW
    })
  },
  7759: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => bR,
      d: () => yR
    });
    var wW = MW(27),
      CW = MW(1148),
      zR = MW(116);
    const AW = {
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
      autorunReady: {
        pattern: [8],
        priority: 2,
        minGapMs: 0
      },
      autorunLocked: {
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

    function bR() {
      return (0, zR.isMobile)() && "function" === typeof navigator.vibrate
    }
    const yR = new class {
      constructor(WW) {
        this.deps = WW, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(WW, RW) {
        var MW;
        if (!this.deps.enabled()) return;
        const wW = AW[WW],
          CW = null !== RW && void 0 !== RW ? RW : wW.pattern;
        if (null === CW) return void console.warn("No vibration pattern for", WW);
        const zR = this.deps.now();
        zR - this.lastAnyAt < 40 && wW.priority < this.playingPriority || zR - (null !== (MW = this.lastAt.get(WW)) && void 0 !== MW ? MW : -1 / 0) < wW.minGapMs || zR < this.playingUntil && wW.priority < this.playingPriority || (this.lastAt.set(WW, zR), this.lastAnyAt = zR, this.playingUntil = zR + CW.reduce(((WW, RW) => WW + RW), 0), this.playingPriority = wW.priority, this.deps.vibrate(CW))
      }
    }({
      vibrate: WW => {
        navigator.vibrate([...WW])
      },
      now: () => performance.now(),
      enabled: () => bR() && wW.b.get("isTouchScreen") && wW.b.get("clientEscMenuOptions").vibration && !(0, CW.f)()
    })
  },
  36537: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => gR
    });
    var wW = MW(173),
      CW = MW(35716);
    const zR = 1.2,
      AW = {
        poseRig: "golem",
        physicsBodyDimensions: {
          width: .5,
          height: 2.5
        },
        hitBoxDimensions: {
          width: 2.2,
          height: 2.8
        },
        eyeHeight: 2.3,
        rideHeight: 2.3,
        aA: .5,
        jyW: !1
      },
      bR = {
        physicsBodyDimensions: {
          width: .5,
          height: 2.5
        },
        hitBoxDimensions: {
          width: 1.8,
          height: 2.6
        },
        eyeHeight: 2.3,
        rideHeight: 2.3,
        aA: .5,
        jyW: !1
      },
      yR = {
        physicsBodyDimensions: {
          width: wW.c.bI,
          height: wW.c.yI
        },
        hitBoxDimensions: {
          width: wW.c.bI + .4,
          height: wW.c.yI + .6
        },
        eyeHeight: wW.c.yI * wW.c.playerEyeToHeightRatio,
        rideHeight: wW.c.yI - .3,
        aA: .5,
        jyW: !1
      },
      NW = {
        physicsBodyDimensions: {
          width: .5,
          height: .95
        },
        hitBoxDimensions: {
          width: 1.6,
          height: 1.1
        },
        eyeHeight: .9,
        rideHeight: .5,
        aA: .5,
        jyW: !1
      },
      eW = {
        physicsBodyDimensions: {
          width: .5,
          height: 1.8
        },
        hitBoxDimensions: {
          width: 1.7,
          height: 1.9
        },
        eyeHeight: 1.3,
        rideHeight: 1.3,
        aA: .5,
        jyW: !1
      },
      BW = {
        physicsBodyDimensions: {
          width: .5,
          height: 1.9
        },
        hitBoxDimensions: {
          width: 1.5,
          height: 2.1
        },
        eyeHeight: 1.9,
        rideHeight: 1,
        aA: .5,
        jyW: !1
      },
      tR = {
        physicsBodyDimensions: {
          width: .5,
          height: 1.9
        },
        hitBoxDimensions: {
          width: 1.5,
          height: 2.4
        },
        eyeHeight: 2,
        rideHeight: 1.8,
        aA: .5,
        jyW: !1
      },
      TW = {
        Player: {
          defaultName: "Player",
          physicsBodyDimensions: {
            width: wW.c.bI,
            height: wW.c.yI
          },
          hitBoxDimensions: {
            width: wW.c.bI + .4,
            height: wW.c.yI + .6
          },
          eyeHeight: wW.c.yI * wW.c.playerEyeToHeightRatio,
          rideHeight: wW.c.yI - .1,
          aA: CW.f.aA,
          jyW: !0
        },
        Pig: {
          poseNameRise: {
            sitting: 1.4
          },
          physicsBodyDimensions: {
            width: .5,
            height: .8
          },
          hitBoxDimensions: {
            width: 1.5,
            height: 1.2
          },
          eyeHeight: .8,
          rideHeight: .5,
          aA: .5,
          jyW: !1
        },
        Cow: {
          physicsBodyDimensions: {
            width: .5,
            height: 1.1
          },
          hitBoxDimensions: {
            width: 1.6,
            height: 1.4
          },
          eyeHeight: 1.2,
          rideHeight: 1,
          aA: .5,
          jyW: !1
        },
        Sheep: {
          physicsBodyDimensions: {
            width: .5,
            height: 1.1
          },
          hitBoxDimensions: {
            width: 1.6,
            height: 1.3
          },
          eyeHeight: 1.2,
          rideHeight: .8,
          aA: .5,
          jyW: !1
        },
        Horse: {
          physicsBodyDimensions: {
            width: .5,
            height: 1.9
          },
          hitBoxDimensions: {
            width: 1.5,
            height: 2.1
          },
          eyeHeight: 1.9,
          rideHeight: .9,
          aA: .5,
          jyW: !1
        },
        Camel: {
          modelScale: zR,
          physicsBodyDimensions: {
            width: .6,
            height: 2.52
          },
          hitBoxDimensions: {
            width: 1.92,
            height: 2.76
          },
          eyeHeight: 2.52,
          rideHeight: 1.7999999999999998,
          aA: .5,
          jyW: !1
        },
        Slime: {
          physicsBodyDimensions: {
            width: .6,
            height: .8
          },
          hitBoxDimensions: {
            width: 1,
            height: .9
          },
          eyeHeight: .5,
          rideHeight: .5,
          aA: .5,
          jyW: !1
        },
        "Cave Golem": AW,
        "Draugr Zombie": {
          ...yR,
          defaultPose: "zombie"
        },
        "Draugr Skeleton": yR,
        "Frost Golem": AW,
        "Frost Zombie": {
          ...yR,
          defaultPose: "zombie"
        },
        "Frost Skeleton": yR,
        "Draugr Knight": {
          physicsBodyDimensions: {
            width: wW.c.bI,
            height: wW.c.yI
          },
          hitBoxDimensions: {
            width: wW.c.bI + .4,
            height: 2.8
          },
          eyeHeight: 1.9,
          rideHeight: 1.8,
          aA: .5,
          jyW: !1
        },
        Wolf: NW,
        Bear: eW,
        Deer: {
          physicsBodyDimensions: {
            width: .5,
            height: 1.9
          },
          hitBoxDimensions: {
            width: 1.5,
            height: 2.1
          },
          eyeHeight: 1.8,
          rideHeight: .8,
          aA: .5,
          jyW: !1
        },
        Stag: BW,
        "Gold Watermelon Stag": {
          physicsBodyDimensions: {
            width: .5,
            height: 1.9
          },
          hitBoxDimensions: {
            width: 1.5,
            height: 2.1
          },
          eyeHeight: 1.9,
          rideHeight: 1,
          aA: .5,
          jyW: !1
        },
        Gorilla: tR,
        Wildcat: {
          physicsBodyDimensions: {
            width: .5,
            height: .7
          },
          hitBoxDimensions: {
            width: 1.5,
            height: .7
          },
          eyeHeight: .55,
          rideHeight: .4,
          aA: .5,
          jyW: !1
        },
        "Draugr Huntress": yR,
        "Magma Golem": AW,
        "Spirit Golem": AW,
        "Spirit Wolf": NW,
        "Spirit Bear": eW,
        "Spirit Stag": BW,
        "Spirit Gorilla": tR,
        "Draugr Warper": {
          physicsBodyDimensions: {
            width: .5,
            height: 2.5
          },
          hitBoxDimensions: {
            width: .6,
            height: 3
          },
          eyeHeight: 2.4,
          rideHeight: 2.8,
          aA: .5,
          jyW: !1
        },
        "Frost Wraith": {
          poseRig: "wraith",
          physicsBodyDimensions: {
            width: .5,
            height: 2.7
          },
          hitBoxDimensions: {
            width: .6,
            height: 2.8
          },
          eyeHeight: 2.3,
          rideHeight: 2.6,
          aA: .5,
          jyW: !1
        },
        "Draugr Reaver": {
          physicsBodyDimensions: {
            width: .5,
            height: 2.6
          },
          hitBoxDimensions: {
            width: .6,
            height: 2.7
          },
          eyeHeight: 2.2,
          rideHeight: 2.5,
          aA: .5,
          jyW: !1
        },
        NPC: {
          physicsBodyDimensions: {
            width: wW.c.bI,
            height: wW.c.yI
          },
          hitBoxDimensions: {
            width: wW.c.bI + .4,
            height: wW.c.yI + .6
          },
          eyeHeight: wW.c.yI * wW.c.playerEyeToHeightRatio,
          rideHeight: wW.c.yI - .1,
          aA: .5,
          jyW: !1
        },
        67: {
          physicsBodyDimensions: {
            width: .5,
            height: 2.5
          },
          hitBoxDimensions: {
            width: 3,
            height: 2.5
          },
          eyeHeight: 1.9,
          rideHeight: 2.5,
          aA: .5,
          jyW: !1
        },
        "Bobino Musculino": {
          physicsBodyDimensions: {
            width: wW.c.bI,
            height: wW.c.yI
          },
          hitBoxDimensions: {
            width: wW.c.bI + .4,
            height: wW.c.yI + .6
          },
          eyeHeight: wW.c.yI * wW.c.playerEyeToHeightRatio,
          rideHeight: wW.c.yI - .1,
          aA: .5,
          jyW: !1
        },
        "Capitano Explovissimo": {
          physicsBodyDimensions: {
            width: .5,
            height: 1.8
          },
          hitBoxDimensions: {
            width: .5,
            height: 2.5
          },
          eyeHeight: 1.5,
          rideHeight: 2,
          aA: .5,
          jyW: !1
        },
        "Desert Fennec": {
          physicsBodyDimensions: {
            width: .4,
            height: .8
          },
          hitBoxDimensions: {
            width: .8,
            height: .8
          },
          eyeHeight: .65,
          rideHeight: .6,
          aA: .5,
          jyW: !1
        },
        "Armour Collector": {
          physicsBodyDimensions: {
            width: 1,
            height: 3.5
          },
          hitBoxDimensions: {
            width: 2,
            height: 3.7
          },
          eyeHeight: 3.1,
          rideHeight: 3.6,
          aA: .5,
          jyW: !1
        },
        "Furnace Knight": {
          physicsBodyDimensions: {
            width: .8,
            height: 2.4
          },
          hitBoxDimensions: {
            width: 1.6,
            height: 2.5
          },
          eyeHeight: 2,
          rideHeight: 2.45,
          aA: .5,
          jyW: !1
        },
        "Lil Knight": {
          physicsBodyDimensions: {
            width: .8,
            height: 2.4
          },
          hitBoxDimensions: {
            width: 1.6,
            height: 2.55
          },
          eyeHeight: 2,
          rideHeight: 2.5,
          aA: .5,
          jyW: !1
        },
        "Glass Gremlin": {
          physicsBodyDimensions: {
            width: .6,
            height: 2.5
          },
          hitBoxDimensions: {
            width: 1,
            height: 2.6
          },
          eyeHeight: 2.2,
          rideHeight: 2.55,
          aA: .5,
          jyW: !1
        },
        "Glass Bro": {
          physicsBodyDimensions: {
            width: .8,
            height: 2.1
          },
          hitBoxDimensions: {
            width: 1.3,
            height: 2.2
          },
          eyeHeight: 1.8,
          rideHeight: 2.1,
          aA: .5,
          jyW: !1
        },
        "Lord Vulcan": {
          physicsBodyDimensions: {
            width: 1.2,
            height: 5.4
          },
          hitBoxDimensions: {
            width: 2.4,
            height: 5.4
          },
          eyeHeight: 4.1,
          rideHeight: 5.4,
          aA: .5,
          jyW: !1
        },
        Zombie: {
          ...yR,
          defaultPose: "zombie"
        },
        Skeleton: yR,
        Mummy: {
          ...yR,
          defaultPose: "zombie"
        },
        Scorpion: {
          physicsBodyDimensions: {
            width: 1,
            height: .9
          },
          hitBoxDimensions: {
            width: 1.6,
            height: 1.4
          },
          eyeHeight: .6,
          rideHeight: .9,
          aA: .5,
          jyW: !1
        },
        Vulcanite: {
          physicsBodyDimensions: {
            width: .8,
            height: 2
          },
          hitBoxDimensions: {
            width: 1.3,
            height: 2.1
          },
          eyeHeight: 1.6,
          rideHeight: 2.1,
          aA: .5,
          jyW: !1
        },
        "Evil Tome": {
          physicsBodyDimensions: {
            width: .6,
            height: .9
          },
          hitBoxDimensions: {
            width: .9,
            height: .95
          },
          eyeHeight: .6,
          rideHeight: .95,
          aA: .5,
          jyW: !1
        },
        "Magma Toad": {
          physicsBodyDimensions: {
            width: 1,
            height: 1
          },
          hitBoxDimensions: {
            width: 1.5,
            height: 1.15
          },
          eyeHeight: 1,
          rideHeight: 1.1,
          aA: .5,
          jyW: !1
        },
        Stalker: {
          physicsBodyDimensions: {
            width: .5,
            height: 2.6
          },
          hitBoxDimensions: {
            width: .6,
            height: 2.9
          },
          eyeHeight: 2.4,
          rideHeight: 2.5,
          aA: .5,
          jyW: !1
        },
        Crone: {
          turnRate: 1.2,
          physicsBodyDimensions: {
            width: .6,
            height: 2.9
          },
          hitBoxDimensions: {
            width: .7,
            height: 3.2
          },
          eyeHeight: 2.7,
          rideHeight: 2.8,
          aA: .5,
          jyW: !1
        },
        "Iron Guardian": bR,
        "Gold Guardian": bR,
        "Diamond Guardian": bR,
        "Moonstone Guardian": bR,
        "Iron Goofy Golem": bR,
        "Gold Goofy Golem": bR,
        "Diamond Goofy Golem": bR,
        "Moonstone Goofy Golem": bR,
        "Tiki Terror": {
          poseRig: "tiki",
          physicsBodyDimensions: {
            width: 1,
            height: 4.3
          },
          hitBoxDimensions: {
            width: 2.4,
            height: 4.5
          },
          eyeHeight: 3.9,
          rideHeight: 4.3,
          aA: .5,
          jyW: !1
        }
      };

    function gR(WW) {
      return TW[WW]
    }
  },
  35221: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => wW
    });
    const wW = {
      "skyblock:forged:astral-astral-astral": {
        name: "Heart of the Cosmos",
        lore: "Three shards of the night sky, forged as one. The stars answer whoever holds it.",
        damageMultiplier: 1.8,
        cooldownMultiplier: .8,
        ability: "starfall"
      },
      "skyblock:forged:astral-moonstone-sanguine": {
        name: "Eclipse Edge",
        lore: "Moonlight over starlight over blood: the sky goes dark wherever it is drawn.",
        damageMultiplier: 1.7,
        cooldownMultiplier: .81,
        ability: "eclipseField"
      },
      "skyblock:forged:astral-diamond-moonstone": {
        name: "Starcutter",
        lore: "A blade so sharp the Forge Mother swears it once cut a falling star in two.",
        damageMultiplier: 1.65,
        cooldownMultiplier: .83,
        ability: "starfall"
      },
      "skyblock:forged:astral-sanguine-magmasteel": {
        name: "Triune Flame",
        lore: "Each of Lord Vulcan's three faces, bound into one burning edge.",
        damageMultiplier: 1.65,
        cooldownMultiplier: .83,
        ability: "magmaWave"
      },
      "skyblock:forged:magmasteel-magmasteel-magmasteel": {
        name: "Vulcan's Bane",
        lore: "Forged in the heat of his own rift. It remembers the way down.",
        damageMultiplier: 1.56,
        cooldownMultiplier: .83,
        ability: "magmaWave"
      },
      "skyblock:forged:magmasteel-astral-sanguine": {
        name: "Comet's Wake",
        lore: "It leaves a trail of fire through the air, like something falling from very far up.",
        damageMultiplier: 1.56,
        cooldownMultiplier: .83,
        ability: "starfall"
      },
      "skyblock:forged:magmasteel-sanguine-astral": {
        name: "Vulcan's Ruin",
        lore: "The Forge Mother made only one, then sat down for a long while.",
        damageMultiplier: 1.6,
        cooldownMultiplier: .83,
        ability: "warcry"
      },
      "skyblock:forged:magmasteel-iron-stone": {
        name: "Forgehand",
        lore: "A smith's sword: plain to look at, and it hits like a hammer.",
        damageMultiplier: 1.4,
        cooldownMultiplier: .9,
        ability: "quake"
      },
      "skyblock:forged:sanguine-sanguine-sanguine": {
        name: "Crimson Covenant",
        lore: "It drinks, and so do you.",
        damageMultiplier: 1.53,
        cooldownMultiplier: .83,
        ability: "bloodPact"
      },
      "skyblock:forged:sanguine-astral-moonstone": {
        name: "Nightbloom",
        lore: "A red flower that only opens after dark.",
        damageMultiplier: 1.56,
        cooldownMultiplier: .83,
        ability: "eclipseField"
      },
      "skyblock:forged:sanguine-iron-wood": {
        name: "Butcher's Oath",
        lore: "Heavy, honest and always hungry.",
        damageMultiplier: 1.35,
        cooldownMultiplier: .95,
        ability: "bloodPact"
      },
      "skyblock:forged:moonstone-moonstone-moonstone": {
        name: "Lunar Requiem",
        lore: "Swung, it leaves a pale arc that lingers like a second moon.",
        damageMultiplier: 1.35,
        cooldownMultiplier: .85,
        ability: "moonDash"
      },
      "skyblock:forged:moonstone-astral-moonstone": {
        name: "Silver Tide",
        lore: "Pulled by the same moon that pulls the sea.",
        damageMultiplier: 1.4,
        cooldownMultiplier: .84,
        ability: "moonDash"
      },
      "skyblock:forged:diamond-diamond-diamond": {
        name: "Prism Fang",
        lore: "Every facet catches a different light, and every strike finds a different weakness.",
        damageMultiplier: 1.29,
        cooldownMultiplier: .88,
        ability: "gildedEdge",
        traits: {
          crit: 1.8
        }
      },
      "skyblock:forged:diamond-moonstone-gold": {
        name: "Jeweller's Pride",
        lore: "Too pretty to fight with. Fight with it anyway.",
        damageMultiplier: 1.24,
        cooldownMultiplier: .91,
        ability: "gildedEdge"
      },
      "skyblock:forged:gold-gold-gold": {
        name: "King's Ransom",
        lore: "Worth more than the treasure it guards.",
        damageMultiplier: 1.18,
        cooldownMultiplier: .91,
        ability: "gildedEdge",
        traits: {
          coins: 2.5
        }
      },
      "skyblock:forged:gold-moonstone-gold": {
        name: "Midas Moon",
        lore: "Mobs it fells seem to rattle with coins.",
        damageMultiplier: 1.18,
        cooldownMultiplier: .92,
        ability: "gildedEdge",
        traits: {
          coins: 2,
          bossBane: .6
        }
      },
      "skyblock:forged:iron-iron-iron": {
        name: "Old Faithful",
        lore: "It has never let anyone down. It never will.",
        damageMultiplier: 1.15,
        cooldownMultiplier: .94,
        ability: "warcry"
      },
      "skyblock:forged:iron-wood-wood": {
        name: "Militia Blade",
        lore: "Handed out at the outpost gate when the rift first opened.",
        damageMultiplier: 1.09,
        cooldownMultiplier: .97,
        ability: "warcry"
      },
      "skyblock:forged:stone-stone-stone": {
        name: "Quarryman's Cleaver",
        lore: "Chipped from one block of stone, handle and all.",
        damageMultiplier: 1.09,
        cooldownMultiplier: .97,
        ability: "quake"
      },
      "skyblock:forged:wood-wood-wood": {
        name: "Lorenzo's Lesson",
        lore: "Courage matters more than the blade. This one is mostly courage.",
        damageMultiplier: 1.06,
        cooldownMultiplier: .97,
        ability: "warcry"
      }
    }
  },
  35678: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => bR,
      h: () => AW
    });
    var wW = MW(35669),
      CW = MW(284),
      zR = MW(1050);

    function AW(WW) {
      if ("wWW" in WW) return FW.createAnimationScript(WW);
      return new NW(WW).createAnimationScript()
    }

    function bR(WW, RW, MW, CW) {
      const zR = WW.wWW <= 0 ? 1 : RW + MW * Math.max(0, CW) / WW.wWW;
      return WW.CWW === wW.h.LoopOnLastFrame ? zR % 1 : WW.CWW === wW.h.NoLoop && zR >= 1 ? null : Math.min(1, zR)
    }
    class yR {
      createAnimationScript(WW) {
        const {
          wWW: RW,
          loop: MW,
          zRW: wW
        } = WW;
        return {
          wWW: Math.round(RW),
          CWW: this.createLoopMode(null !== MW && void 0 !== MW && MW),
          zRW: this.createNodeSkeletonAnimationScript(null !== wW && void 0 !== wW ? wW : null)
        }
      }
      createLoopMode(WW) {
        switch (WW) {
          case !1:
            return wW.h.NoLoop;
          case !0:
            return wW.h.LoopOnLastFrame;
          case "hold-on-last-frame":
            return wW.h.HoldOnLastFrame
        }
        throw new Error(`Invalid loop mode schema: ${WW}`)
      }
      createNodeSkeletonAnimationScript(WW) {
        if (null === WW) return null;
        const RW = {};
        for (const MW in WW) {
          const wW = WW[MW];
          RW[MW] = this.createNodeAnimationScript(wW)
        }
        return RW
      }
      createNodeAnimationScript(WW) {
        const {
          timeline: RW
        } = WW, MW = RW.filter((WW => Number.isFinite(WW.timeFraction)));
        return MW.sort(((WW, RW) => WW.timeFraction - RW.timeFraction)), {
          rotation: this.createTimelineFromKeyframes(MW, "rotation", tR),
          position: this.createTimelineFromKeyframes(MW, "position", gR)
        }
      }
      createTimelineFromKeyframes(WW, RW, MW) {
        const wW = [];
        for (const yR of WW) {
          const WW = yR[RW];
          if (WW) {
            const RW = this.createAnimationFrameWithoutPrecomputes(yR.timeFraction, WW);
            eW(RW) && wW.push(RW)
          }
        }
        const CW = [];
        for (let yR = 0; yR < wW.length; yR++) {
          var zR, AW, bR;
          const WW = wW[yR],
            RW = null !== (zR = wW[yR - 1]) && void 0 !== zR ? zR : WW,
            NW = null !== (AW = wW[yR + 1]) && void 0 !== AW ? AW : WW,
            eW = null !== (bR = wW[yR + 2]) && void 0 !== bR ? bR : NW;
          CW.push({
            ...WW,
            ...MW(RW.post, RW.timeFraction, WW.post, WW.timeFraction, NW.pre, NW.timeFraction, eW.pre, eW.timeFraction)
          })
        }
        return CW
      }
      createAnimationFrameWithoutPrecomputes(WW, RW) {
        let MW, wW, CW = null;
        var zR;
        if ("object" === typeof RW && "point" in RW) CW = null !== (zR = RW.bRW) && void 0 !== zR ? zR : null, MW = RW.point, wW = RW.point;
        else if ("object" === typeof RW && "pre" in RW) {
          var AW;
          CW = null !== (AW = RW.bRW) && void 0 !== AW ? AW : null, MW = RW.pre, wW = RW.post
        } else MW = RW, wW = RW;
        return {
          timeFraction: WW,
          bRW: this.createLerpMode(CW),
          pre: MW,
          post: wW
        }
      }
      createLerpMode(WW) {
        return null === WW ? wW.g.Linear : yR.LERP_MODE_SCHEMA_MAPPING[WW]
      }
    }
    yR.LERP_MODE_SCHEMA_MAPPING = {
      linear: wW.g.Linear,
      "catmull-rom-spline": wW.g.CatmullRomSpline
    };
    class NW {
      constructor(WW) {
        this.animationSchema = WW
      }
      createAnimationScript() {
        const {
          animation_length: WW,
          loop: RW,
          bones: MW
        } = this.animationSchema;
        return {
          wWW: Math.round(1e3 * WW),
          CWW: this.createLoopMode(null !== RW && void 0 !== RW && RW),
          zRW: this.createNodeSkeletonAnimationScript(null !== MW && void 0 !== MW ? MW : null)
        }
      }
      createLoopMode(WW) {
        switch (WW) {
          case !1:
            return wW.h.NoLoop;
          case !0:
            return wW.h.LoopOnLastFrame;
          case "hold_on_last_frame":
            return wW.h.HoldOnLastFrame
        }
        throw new Error(`Invalid Blockbench loop mode schema: ${WW}`)
      }
      createNodeSkeletonAnimationScript(WW) {
        if (null === WW) return null;
        const RW = {};
        for (const MW in WW) {
          const wW = WW[MW];
          RW[MW] = this.createNodeAnimationScript(wW)
        }
        return RW
      }
      createNodeAnimationScript(WW) {
        const {
          rotation: RW,
          position: MW
        } = WW;
        return {
          rotation: this.createAnimationTimeline(null !== RW && void 0 !== RW ? RW : null, YW, tR, !0),
          position: this.createAnimationTimeline(null !== MW && void 0 !== MW ? MW : null, PW, gR, !1)
        }
      }
      createAnimationTimeline(WW, RW, MW, wW) {
        if (null === WW) return [];
        if (Array.isArray(WW)) {
          WW = {
            "0.0": WW
          }
        }
        const CW = Object.entries(WW).map((WW => {
          let [MW, wW] = WW;
          const CW = Number(MW) / this.animationSchema.animation_length;
          return this.createAnimationFrameWithoutPrecomputes(CW, wW, RW)
        })).filter(eW);
        CW.sort(((WW, RW) => WW.timeFraction - RW.timeFraction)), wW && function(WW) {
          for (let RW = 1; RW < WW.length; RW++) {
            const MW = WW[RW - 1].post,
              wW = WW[RW],
              CW = IW(wW.pre),
              zR = IW(wW.post),
              AW = lW(MW, wW.pre);
            lW(MW, CW) < AW && (WW[RW] = {
              ...wW,
              pre: CW,
              post: zR
            })
          }
        }(CW);
        const zR = [];
        for (let NW = 0; NW < CW.length; NW++) {
          var AW, bR, yR;
          const WW = CW[NW],
            RW = null !== (AW = CW[NW - 1]) && void 0 !== AW ? AW : WW,
            wW = null !== (bR = CW[NW + 1]) && void 0 !== bR ? bR : WW,
            eW = null !== (yR = CW[NW + 2]) && void 0 !== yR ? yR : wW;
          zR.push({
            ...WW,
            ...MW(RW.post, RW.timeFraction, WW.post, WW.timeFraction, wW.pre, wW.timeFraction, eW.pre, eW.timeFraction)
          })
        }
        return zR
      }
      createAnimationFrameWithoutPrecomputes(WW, RW, MW) {
        let wW, CW, zR = null;
        if ("object" === typeof RW && "post" in RW) {
          var AW;
          zR = null !== (AW = RW.lerp_mode) && void 0 !== AW ? AW : null, CW = iR(RW.post, MW), wW = RW.pre ? iR(RW.pre, MW) : CW
        } else {
          const WW = iR(RW, MW);
          CW = WW, wW = WW
        }
        return {
          timeFraction: WW,
          bRW: this.createLerpMode(zR),
          pre: wW,
          post: CW
        }
      }
      createLerpMode(WW) {
        return null === WW ? wW.g.Linear : NW.LERP_MODE_SCHEMA_MAPPING[WW]
      }
    }

    function eW(WW) {
      return Number.isFinite(WW.timeFraction) && BW(WW.pre) && BW(WW.post)
    }

    function BW(WW) {
      return Number.isFinite(WW[0]) && Number.isFinite(WW[1]) && Number.isFinite(WW[2])
    }

    function tR(WW, RW, MW, wW, CW, zR, AW, bR) {
      const yR = zR - RW,
        NW = zR - wW,
        eW = bR - wW,
        BW = [null, null, null];
      for (let tR = 0; tR < BW.length; tR++) BW[tR] = TW(WW[tR], MW[tR], CW[tR], AW[tR], yR, eW);
      return {
        yRW: NW,
        NWW: BW
      }
    }

    function TW(WW, RW, MW, wW, zR, AW) {
      return {
        BWW: CW.d.computeShortestRotation(WW, MW) / zR,
        tRW: CW.d.computeShortestRotation(RW, wW) / AW,
        delta: CW.d.computeShortestRotation(RW, MW)
      }
    }

    function gR(WW, RW, MW, wW, CW, zR, AW, bR) {
      const yR = zR - RW,
        NW = zR - wW,
        eW = bR - wW,
        BW = [null, null, null];
      for (let tR = 0; tR < BW.length; tR++) BW[tR] = {
        BWW: (CW[tR] - WW[tR]) / yR,
        tRW: (AW[tR] - MW[tR]) / eW,
        delta: CW[tR] - MW[tR]
      };
      return {
        yRW: NW,
        NWW: BW
      }
    }

    function iR(WW, RW) {
      return null === RW ? WW : RW(WW)
    }

    function YW(WW) {
      const [RW, MW, wW] = WW, AW = -(0, zR.i)(RW), bR = -(0, zR.i)(MW), yR = (0, zR.i)(wW), NW = CW.d.quaternionFromEulerZYX(AW, bR, yR);
      return CW.d.eulerYXZFromQuaternion(NW)
    }
    NW.LERP_MODE_SCHEMA_MAPPING = {
      linear: wW.g.Linear,
      catmullrom: wW.g.CatmullRomSpline
    };
    const JW = 1 / 16;

    function PW(WW) {
      return [-WW[0] * JW, WW[1] * JW, WW[2] * JW]
    }

    function IW(WW) {
      const [RW, MW, wW] = WW;
      return [RW >= 0 ? Math.PI - RW : -Math.PI - RW, oW(MW + Math.PI), oW(wW + Math.PI)]
    }

    function oW(WW) {
      return CW.d.mod(WW + Math.PI, 2 * Math.PI) - Math.PI
    }

    function lW(WW, RW) {
      return Math.abs(CW.d.computeShortestRotation(WW[0], RW[0])) + Math.abs(CW.d.computeShortestRotation(WW[1], RW[1])) + Math.abs(CW.d.computeShortestRotation(WW[2], RW[2]))
    }
    const FW = new yR
  },
  35721: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => AW
    });
    var wW = MW(290),
      CW = MW.n(wW),
      zR = MW(1050);
    let AW;
    var bR, yR, NW, eW, BW, tR, TW, gR, iR;
    const YW = [2, 0, 1, "h", 159, 164, "i", "g", 190, 176, "d", 8, 255, "length", 3, 19, "e", "undefined", void 0, 4, 58, "a", 63, 6, "fromCodePoint", 7, 12, "push", "c", 242, 119, 235, 144, 214, 77, 91, "f", 8191, 88, 13, 14, 156, 5, 232, 127, 128, 125, 137, 138, 139, null, 133, 134, 135, 136, 140, 141, 142, 129, 130, 131, 132, 148, 149, 153, 154, 155, 199, 9, 244, 145, !1, "CA", 146, "b", 161, 101, 111, 104, 247, 236, 120, 218, 230, 185, 201, 102, 95, 29, 207, 246, 16, 60, "=", ";", 97, 87, 28, 49, !0, 26, "on"];

    function JW(...WW) {
      return WW[YW[13]] = YW[2], typeof bR[WW[YW[1]]] === YW[17] ? bR[WW[YW[1]]] = function(...WW) {
        for (jR(WW[YW[13]] = YW[2], WW[-YW[5]] = '$qWzZ&jy`_i2*g3L6o]=sECldH1~)rx#.^{%wVv/Bup;<T}GM+R5DU(?P>kNK@n!|09S,:ect7aQ4hfAIYXF[Om"bJ8', WW[YW[0]] = "" + (WW[YW[1]] || ""), WW[-YW[4]] = WW[YW[0]].length, WW[YW[10]] = [], WW[YW[8]] = YW[1], WW[YW[9]] = YW[1], WW[YW[7]] = -YW[2]), WW[YW[3]] = YW[1]; WW[YW[3]] < WW[-YW[4]]; WW[YW[3]]++)
          if (WW[YW[6]] = WW[-YW[5]].indexOf(WW[YW[0]][WW[YW[3]]]), WW[YW[6]] !== -YW[2])
            if (WW[YW[7]] < YW[1]) WW[YW[7]] = WW[YW[6]];
            else {
              jR(WW[YW[7]] += WW[YW[6]] * YW[35], WW[YW[8]] |= WW[YW[7]] << WW[YW[9]], WW[YW[9]] += (WW[YW[7]] & YW[37]) > YW[38] ? YW[39] : YW[40]);
              do {
                jR(WW[YW[10]].push(WW[YW[8]] & YW[12]), WW[YW[8]] >>= YW[11], WW[YW[9]] -= YW[11])
              } while (WW[YW[9]] > YW[25]);
              WW[YW[7]] = -YW[2]
            } return WW[YW[7]] > -YW[2] && WW[YW[10]].push((WW[YW[8]] | WW[YW[7]] << WW[YW[9]]) & YW[12]), PW(WW[YW[10]])
      }(yR[WW[YW[1]]]) : bR[WW[YW[1]]]
    }

    function PW(...WW) {
      return WW[YW[13]] = YW[2], typeof eW !== YW[17] && eW ? (new eW).decode(new BW(WW[YW[1]])) : typeof tR !== YW[17] && tR ? tR.from(WW[YW[1]]).toString("utf-8") : iR(WW[YW[1]])
    }

    function IW() {}
    jR(bR = {}, yR = ["P(2a3Y<]r3cq21h=YeGj.7+GJo8.kgv]PTz", 'c_;.14":a3L,N3rx_cF1(!Q5UgIwx&xlANCZ*?Qy<o"}kg:ve$', 'a5ojs:|x@Um>vHU{t3l^xD2="k]A:+/=7T{~&?0!)n~d~W>l', "KVcD1BYu%*7+Iz.pANL(8FbnQoXP7wwdQ$", "oKk`AR5QKP?e`Fqoh085$t<B5*ls<N.d,{;.x", "6K/_cAMDLE2t(k:V>$", '2>n)L>Y>D_!!OdVV#,ec^,kxX=ba"%=~tjc4ke~=~NRI=W', '#_[rZt]`"sG7pVeHnnsh[DS%=|/', "D_S.av8dt0V?MGZ;#a[R>[}*]_", "6LbjM!w*i?zA6tCu+cSr>[cy?|+7NXo~e71QFNrQ{*VDWY<vOH*i1DryG]", ";n2htnDW", ";06(TXuqKo@3GejdV*C#Ic{d6]8rbc.ltVq5LaLqF*C5I%*", "%M6jG@RIj", "Vr)rlFry#]8Uy1i#;l]~},?%TnwySvq#Izv#A:p|AU@3)F/=6!PjF^_yhUl?q", "[/]tw%p*}E/)+M.w(j(Z", "=c&D9K$", "OpsrZaOuA!&WNe[BUl@iZn@rkouIbMS]#(4h@AV:~N=k6zZo72$(iM:l?|haq", '+#+5lFq%GE"a^Hw#b{#D?};Gmgv{C&@x"Mz', ",,o.qwmmx]D#OZ`1HlwitYSlMU1", "E1b(7Y#:q_", "QnS&Re{DA]arqwZd5_H(>/c:bsx0PF|xW]W", "w(8&.7V>43qjtNrrlagyUXejjg4%|~~%k_u5?}2UV=", "AeO)$Mm*<2o,/GeVEj$_%%{xC=G733J{9)6(A4yU~NJ`*Ns)J$", "XTZ#UXu>>0`~fHu/Y{CZPA,*A*Wfs6s)/nb_rOA5D>&Ap1*", "<{^~AY.dJ3Aq/vzVvM)yw(8{rn(", '2.si@59]fN$5ce`1yr"7?!7uS=[CRVL/9(9&F^V>ioitw6(uhlgi', "0)6jw(DBBs:hx@g", "@0Kr6Fjw<UqG/1Pump#D7w=uf]qxv@@%7l3yZ{HQf]jXE69xsKtj", "M*C)RV*w9_E:tLeVp;j?zn^up2", "YHP7(X4*[gbeX+)wBaOy", "i>#ZG/g!0_?I2LsBmTxyUh`w#!():dQ/5MKyo?4a+Lg6q", "xKrDF:j|o_R", "mN#+mOE:x]", "d,F`N5?g{=h+,LL/@#wi:U^%BkP7*~i", "^Bn#A>fdHk7`#Wr%Q{q~mcd`6LFeQLnwx0oQg", "x(?jl>,x3E@yBN@%", "sa)iFv=:9Krt31WwQs95:Mc5.9)M4cdpVc*r{,!g9!s#=3/v`az", 'CKn+B%VY!LSh7K&;n,l4)Dh>}PJ."1Z#Bcf_Xwaj9*ZlZc1u9VY("fBd43eI$', "}sc)T%TgZ", "d5&yvVbaw|otoV>l}5G4e?A5[=WWI%RBz1/DWKEg}!V7eHvH,5~tNt$", "~B@#Q>]d^(#4X30Vb/85fTtd*N{#Dz3", 'MBb7/(XB#E*Al3P%Q{")xDtm.9`x>631f,Eyt{}Wm=1z^6`#|nofE', "bN4aHBJ>;oOaDM)%P1*hpIj`*N3juZY1o}=.=c^upn#t;z2", "M1o(hTPB^_3QttT~1;?41BYyH0H~>tA~:,C)mv0q", "q!whP5_g/k4!:tg", "LKQa$}YuM_", "+><hE>C`|U+oAWj#5MVi", 'kn}7CcOu^(XRgKbC@c")8Tb{F=KhH6/#+1!)Ia$', "8U*hm:KkV=D:9YEu97;tp7qHA*zg5vOBsavyfa/q=*2t#F(uD#R51BpW", 'RBr?.%"qboiMCVc=:V3?&Uhu[_0%C&duU,q', "}1=tPt05NPqj9H^wKsA)fTjD}25", "QPEZa4]WIUMN>tQ1%r7()", "1}<rp@km%=b*+Z!dXM+`bR$", "/rBxw@!QhNSNDLBVK0{r[NEq:(2Vx+31<0!4_YM}Y*]d6~Fu", "#,*rrDP}Y!1?U6.xtN(Dp(8*IKV7HZWoYzt_iwje>0+:Azl{L}@Z", "2}qf,?G>.Eo5%3$w[7d(g:g:J0Y}Bz86,$", "@z7(>K$", 'H;ux"4oG}PN9OZw#sq', 'zrxD8D;=<3`gpg")W+2rmDSl+9*{K~X)]_ShyRArp0zt_69xJ/qQAa!q', "Vr/7~BOu}LDEhd:dh,lfcAXdR(5", "1Bl_8FWe8n%#{V|l=]^54:XB_3&kOMwx", "fou(8FrG&", "K)=rM+UG;Npdn+t1#>4c2:_y;nt)8:i", "Mc!4a>Jq#*Tn3&SdITa&5XrGz", "$9LDAv~%}UdkBzgs.}O4w%dmG!3iu6Bvkn2h>KuQj", "NcLDeMUlu3?IEV;/[##4c?0lQ2aPILeVL56~34jpM91?q", "rKY(h?+%z(rAAGtv_]ga6YI}s_}?;v^o|7l+wP1`+!r4kgvd", "UcP_74tjp0?4JM,d.lo(o", '^aO1R+F%ls~g>K/VezT#*v"u6*g0[z{VC,jDdG&Q69P4*6*H(0u.U/dW', "k{^~]w(W", "vs{~~>nkfPk", "U5TZ<X==nUa`SXL1_1I(awRW", 'ir_x^,emGU8wPL#x]j3DN{hr0>v3{VY~1chcB7OqW>hr@M.w"TT4E4&q', "X5ah+Q9d@NZjUt_", "3;x4[:cqgn9e+HWde5U?[n~=un`l)c*/h2H(@t.W", "]>@?7:$", ">c=h9}~Y_olzW@a1&(k`9wC`K`+E/31)*,$f$/kk@NT4lW", "/5]QsBiw#!=z[c:HP0o(jn_UvgCXk+>rV_c_sc1xF=;o;3C{U{L4$tZk7kgQq", "y%v){(/G%=thCY8r,oraZ{[Dq!]tq", "+z!Z:AX*S=hq]&NufNec6D8}poN+Ut;H~lQhy?v*K3wt}v8CnVq(PKw]Z", ".L$^T!s}N35:)Na1(c8`h?ajY(?", "Vc~rdFjd[=<n_Mb%N,Lf},i`z=4Zng3/[MJ(]ngua357ow2/{L^~Mka}y", 'rcr?I4x*%=w:,Mno2c*#AF"q', "{(_towwW#*/79+g~&cS1pIe}f]loCVj]x(<i", "Erwh;IFgX*Fe}g()@7EiKe2qE($flFQH@,vy", "%5=ru@|]R_cIsG_", 'RVzhI>t]<209scxxH}l(A?":!U0Nv+}1DMVymT;qaN2g|L!p_;eZ', "^ae4oY4{vgeIyLe#cj^QsFnxAL$VUKM{h#3?{fSgn20++MS#v5q", "Ij@a^Ip}7n;om:O).l{QxG)ws(U7Zz2", "W;v#*MPDq9vA`[9d{_`^bFpd|U;95ep1k(Z#HB`D|L+:!XJllL7(7>$", "A0gi6a}D!]9h@VzV^M]h<Ijeis^t>YT/:M:#QRSu`oah%X`1@#T#<PzufL/oq", '>_H~O4qH#!03"1#xCKy4(UYq', "Z9{rLvfj?|e.Gkq#?TA4,UFuz", "kcB_RhquI!wtRX:VcTE4W}/>O(s{4~D)?nx4cA}|U=aa9+nd", "({1QnUQ5|L|E%kL/aN4U5kj]lkcI0M(B5$", "p*M(awj`:|}y~3JC|_0514_Qm|MnfY&=UBJj", "U*@#5eNG>3os~1nxG0I_oF{xf`+2pVzo)05is", "Q,nDztY%YK(3D~t]J$", "S7J5AaAr%*YZSkF~z.6x6>wx~3Wxq", "Dl#)L:G%13+4[z_1I3ShED;>|UXH+6$wC_[hg", "=}uxQ:!:fPc7|M3sxKc_%Qu!YLD7V@CBP,(_o", '3_1QsB>rS(B7"F8C?c~aO>M]aomePd4/*BB7mv?y3]ba=z', 'H,@yP}Hu7s,H@M;/=BB_"vsW', "{LiQbFvxALsjuZI~bjB(]", "o(B~q/2q_s", ';nC7#N#GGP"S,Z', 'Y{;.Hf3dtspyIN[)")6^B+AAIK/%.cjVbn"Zb^.x>k{nceBvCLz', "z9c(&KgqM!Y.9g1w4$", "Y).76v!guoC?lW", "g.I_IvYy|L/zces)pcm#R,;%801gYt</J0Dy", '$+_(T!v|v|@3*cV#**1~nM&"jkszkV+~,pB+cawdh`v:AWe#)_gyy:cuj', "ejfZ7>6}%(Se%NQ/ANn#qM@Q$K<D}g^lmeo~t4KmUgQ+T6OuVoMjJ7#y+>^", "a#ran{`]AUsM9gA1vjI+Q:p}Pog,vW_", '1.c+7Aqu4o2x/v*1Ejwagwvx3N{N:w3B:55i@5"r5*.NWHi', "Z9X5wN*k%>teLW#p,zA)x@ddY_!D<FaHx;G70Yajmg$l$L`", "NBW5gRI{@3AeUt|l", 'xao5DV}kisaa|~muMBW~zmor(k(D@K5~"MX&+PEr,(S)KzI/H(w#SY$', "@B&#1B%:tsLx7deVR>Q&*:Z]=|d4[L1%ELqQNhv]e|d4=1zHy]*hJ7Qu%(D", "O{4a.fwDps*0;e~o", "95v#hYsW", "Ozuc0]m3", "pBqev!tx", "@^&6", "=Aq6,Lw", "@B1{", "oCm;iqT", "SxB%powX", "Vx|F^?wX", "xxR%", 'Sx9"!0bX', "6xEowo_X", 'dQ9"=D3X', 'l,~"_', 'Sx9"wo_X', "dQB%V]~X", "bNM(l?SX", "]dMllDbX", 'qytl:"SX', 'zy?o"7_X', 'FQ"+49CX', "1N|F*]_X", 'l[?oi"#A', "eHHl@", "`xB%", "Rx9+8", "N,1l`", "FLfyB3IX", "tic;@", "1NylZ>pX", "l;y(`?T", 'Sx9"woQ`z8', "NI3lFqg8s~", "*w=|77cuz8", "1Nyl@DVX", "dQMl=o,A", "FQ.la]LX", '`[?oi"T', "W^DL^Du`", "M#vk", ")$q%", '_"[P', "i/q%", "0w|u0ZDO", "rRG~f", "`^,P", "gW(k", "Ei.(", '^x~"D7NX', "_kQd;[DH", "AU/%Ie}X", "Vwqo77wX", ".;k(", "jNc;", "z,ylj9CX", "t+k(", "V,kl0o~X", ",[cZ,]pX", ":z_%]7_X", "fCqEa]T", "x:l9]Utu", "j@l{", "]$pS0G7A", "Pt>Xz+Z", 'F3.>w/"u', "4,l9`c$u", ";48uoN27", ".^6]Eq2l", "X(9YE03k", ";rh6W:xE", "?@m{C+<", "z]S@xnU[", "/mfMR", '>y?o"7_X', 'V,kl."OX']), jR(NW = function(...WW) {
      jR(WW[YW[13]] = YW[1], WW[-YW[15]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], WW[YW[2]] = YW[18], WW[YW[0]] = []);
      try {
        jR(WW[YW[2]] = Object, WW[YW[0]][YW[27]]("".__proto__.constructor.name))
      } catch (yR) {}
      WW: for (WW[YW[14]] = YW[1]; WW[YW[14]] < WW[-YW[15]][YW[13]]; WW[YW[14]]++) try {
        for (WW[YW[2]] = WW[-YW[15]][WW[YW[14]]](), WW[YW[16]] = YW[1]; WW[YW[16]] < WW[YW[0]][YW[13]]; WW[YW[16]]++)
          if (typeof WW[YW[2]][WW[YW[0]][WW[YW[16]]]] === YW[17]) continue WW;
        return WW[YW[2]]
      } catch (yR) {}
      return WW[YW[2]] || this
    }() || {}, eW = NW.TextDecoder, BW = NW.Uint8Array, tR = NW.fw, TW = NW.String || String, gR = NW.Array || Array, iR = function(...WW) {
      return jR(WW[YW[13]] = YW[1], WW[YW[28]] = new gR(YW[45]), WW[-YW[29]] = TW[YW[24]] || TW.fromCharCode, WW[YW[0]] = []),
        function(...RW) {
          for (jR(RW[YW[13]] = YW[2], RW[YW[21]] = YW[18], RW[YW[0]] = YW[18], RW[-YW[20]] = RW[YW[1]][YW[13]], WW[YW[0]][YW[13]] = YW[1]), RW[YW[19]] = YW[1]; RW[YW[19]] < RW[-YW[20]];) jR(RW[YW[0]] = RW[YW[1]][RW[YW[19]]++], RW[YW[0]] <= YW[44] ? RW[YW[21]] = RW[YW[0]] : RW[YW[0]] <= 223 ? RW[YW[21]] = (31 & RW[YW[0]]) << YW[23] | RW[YW[1]][RW[YW[19]]++] & YW[22] : RW[YW[0]] <= 239 ? RW[YW[21]] = (15 & RW[YW[0]]) << YW[26] | (RW[YW[1]][RW[YW[19]]++] & YW[22]) << YW[23] | RW[YW[1]][RW[YW[19]]++] & YW[22] : TW[YW[24]] ? RW[YW[21]] = (RW[YW[0]] & YW[25]) << 18 | (RW[YW[1]][RW[YW[19]]++] & YW[22]) << YW[26] | (RW[YW[1]][RW[YW[19]]++] & YW[22]) << YW[23] | RW[YW[1]][RW[YW[19]]++] & YW[22] : (RW[YW[21]] = YW[22], RW[YW[19]] += YW[14]), WW[YW[0]][YW[27]](WW[YW[28]][RW[YW[21]]] || (WW[YW[28]][RW[YW[21]]] = WW[-YW[29]](RW[YW[21]]))));
          return WW[YW[0]].join("")
        }
    }());
    const oW = CW()[JW(YW[30])](),
      lW = CW()[JW(YW[30])](),
      FW = CW()[JW(YW[30])](),
      fW = CW()[JW(YW[30])](),
      QW = CW()[JW(YW[30])](),
      rR = CW()[JW(YW[30])](),
      cR = CW()[JW(YW[30])](),
      XW = (...WW) => {
        function RW(...WW) {
          return WW[YW[13]] = YW[2], typeof bR[WW[YW[1]]] === YW[17] ? bR[WW[YW[1]]] = function(...WW) {
            for (jR(WW[YW[13]] = YW[2], WW[YW[33]] = 'w3x}<)y;6A{O8Hfd?SWYM1o5aUZ@.c,ReEt`/pT#9_4BJDjvG~0qCgr[iQu>z%s(=2K7!IFLXV^|N]$k+mb&*h"Pln:', WW[YW[31]] = "" + (WW[YW[1]] || ""), WW[-YW[32]] = WW[YW[31]].length, WW[-YW[41]] = [], WW[YW[16]] = YW[1], WW[YW[36]] = YW[1], WW[YW[7]] = -YW[2]), WW[YW[11]] = YW[1]; WW[YW[11]] < WW[-YW[32]]; WW[YW[11]]++)
              if (WW[-YW[34]] = WW[YW[33]].indexOf(WW[YW[31]][WW[YW[11]]]), WW[-YW[34]] !== -YW[2])
                if (WW[YW[7]] < YW[1]) WW[YW[7]] = WW[-YW[34]];
                else {
                  jR(WW[YW[7]] += WW[-YW[34]] * YW[35], WW[YW[16]] |= WW[YW[7]] << WW[YW[36]], WW[YW[36]] += (WW[YW[7]] & YW[37]) > YW[38] ? YW[39] : YW[40]);
                  do {
                    jR(WW[-YW[41]].push(WW[YW[16]] & YW[12]), WW[YW[16]] >>= YW[11], WW[YW[36]] -= YW[11])
                  } while (WW[YW[36]] > YW[25]);
                  WW[YW[7]] = -YW[2]
                } return WW[YW[7]] > -YW[2] && WW[-YW[41]].push((WW[YW[16]] | WW[YW[7]] << WW[YW[36]]) & YW[12]), PW(WW[-YW[41]])
          }(yR[WW[YW[1]]]) : bR[WW[YW[1]]]
        }
        WW[YW[13]] = YW[14], RW(YW[81]) in IW && function(...WW) {
          WW[YW[13]] = YW[1]
        }();
        const MW = rR;
        return CW()[RW(121) + RW(122)](MW, WW[YW[0]]), CW()[RW(123)](WW[YW[1]], MW, CW()[RW(124)](MW, WW[YW[2]]))
      };

    function jR() {
      jR = function() {}
    }
    AW = (...WW) => {
      function RW(...WW) {
        return WW[YW[13]] = YW[2], typeof bR[WW[YW[1]]] === YW[17] ? bR[WW[YW[1]]] = function(...WW) {
          for (jR(WW[YW[13]] = YW[2], WW[YW[2]] = 'TAXHUR|&(;%rw<6xpgS8~Bh^O@Nt_!`El*C1VzbWQas,4dIj}53yn/LFv[K.iP:$cYJM9>q?mZ+#o"DG]7ek{0u2)=f', WW[YW[43]] = "" + (WW[YW[1]] || ""), WW[YW[28]] = WW[YW[43]].length, WW[YW[19]] = [], WW[YW[42]] = YW[1], WW[YW[23]] = YW[1], WW[YW[7]] = -YW[2]), WW[YW[3]] = YW[1]; WW[YW[3]] < WW[YW[28]]; WW[YW[3]]++)
            if (WW[YW[6]] = WW[YW[2]].indexOf(WW[YW[43]][WW[YW[3]]]), WW[YW[6]] !== -YW[2])
              if (WW[YW[7]] < YW[1]) WW[YW[7]] = WW[YW[6]];
              else {
                jR(WW[YW[7]] += WW[YW[6]] * YW[35], WW[YW[42]] |= WW[YW[7]] << WW[YW[23]], WW[YW[23]] += (WW[YW[7]] & YW[37]) > YW[38] ? YW[39] : YW[40]);
                do {
                  jR(WW[YW[19]].push(WW[YW[42]] & YW[12]), WW[YW[42]] >>= YW[11], WW[YW[23]] -= YW[11])
                } while (WW[YW[23]] > YW[25]);
                WW[YW[7]] = -YW[2]
              } return WW[YW[7]] > -YW[2] && WW[YW[19]].push((WW[YW[42]] | WW[YW[7]] << WW[YW[23]]) & YW[12]), PW(WW[YW[19]])
        }(yR[WW[YW[1]]]) : bR[WW[YW[1]]]
      }
      WW[YW[13]] = YW[11];
      const MW = WW[YW[1]][RW(YW[46])][RW(126) + RW(YW[44]) + RW(YW[45])](WW[YW[2]]);
      WW[YW[11]] = WW[YW[1]][RW(YW[46])][RW(YW[58]) + RW(YW[59]) + RW(YW[60]) + RW(YW[61])](MW);
      const wW = WW[YW[11]] === YW[50] ? WW[YW[1]][RW(YW[46])][RW(YW[51]) + RW(YW[52]) + RW(YW[53]) + RW(YW[54])](WW[YW[2]], RW(YW[47]) + RW(YW[48]) + RW(YW[49]) + YW[16]) : WW[YW[11]][RW(YW[47]) + RW(YW[48]) + RW(YW[49]) + YW[16]],
        AW = WW[YW[11]] === YW[50] ? WW[YW[1]][RW(YW[46])][RW(YW[51]) + RW(YW[52]) + RW(YW[53]) + RW(YW[54])](WW[YW[2]], RW(YW[55]) + RW(YW[56]) + RW(YW[57])) : WW[YW[11]][RW(YW[55]) + RW(YW[56]) + RW(YW[57])];
      jR(CW()[RW(143)](oW, YW[1], YW[1], WW[YW[42]]), CW().bb(oW, oW, CW()[RW(YW[32])], WW[YW[14]].heading), CW()[RW(YW[70])](cR, WW[YW[19]].lA), cR[YW[2]] = YW[1]);
      const NW = WW[YW[0]][RW(YW[73]) + RW(147)]();
      if (jR(WW[YW[11]] = WW[YW[1]][RW(YW[46])][RW(YW[58]) + RW(YW[59]) + RW(YW[60]) + RW(YW[61])](MW), WW[YW[74]] = WW[YW[11]] === YW[50] ? WW[YW[1]][RW(YW[46])][RW(YW[51]) + RW(YW[52]) + RW(YW[53]) + RW(YW[54])](WW[YW[2]], RW(YW[62]) + RW(YW[63])) : WW[YW[11]][RW(YW[62]) + RW(YW[63])]), !NW && CW()[YW[72]](cR) && (WW[YW[11]] === YW[50] ? WW[YW[1]][RW(YW[46])][RW(150) + RW(151) + RW(152)](WW[YW[2]], RW(YW[64]) + RW(YW[65]) + RW(YW[66]) + RW(YW[41])) : WW[YW[11]][RW(YW[64]) + RW(YW[65]) + RW(YW[66]) + RW(YW[41])])) {
        function gR(...WW) {
          for (jR(WW[YW[13]] = YW[2], WW[YW[2]] = '!`Np^3VAk%P>Wzj$KYo:*[.)4X/_1gxMEUD~8ZO9rly"eu=i<G{?|,T7R+Sv#&HCqIh;b6tfLB}(cF@a5wQmn0Js]2d', WW[YW[0]] = "" + (WW[YW[1]] || ""), WW[YW[28]] = WW[YW[0]].length, WW[YW[10]] = [], WW[YW[69]] = YW[1], WW[YW[23]] = YW[1], WW[YW[7]] = -YW[2]), WW[YW[67]] = YW[1]; WW[YW[67]] < WW[YW[28]]; WW[YW[67]]++)
            if (WW[YW[68]] = WW[YW[2]].indexOf(WW[YW[0]][WW[YW[67]]]), WW[YW[68]] !== -YW[2])
              if (WW[YW[7]] < YW[1]) WW[YW[7]] = WW[YW[68]];
              else {
                jR(WW[YW[7]] += WW[YW[68]] * YW[35], WW[YW[69]] |= WW[YW[7]] << WW[YW[23]], WW[YW[23]] += (WW[YW[7]] & YW[37]) > YW[38] ? YW[39] : YW[40]);
                do {
                  jR(WW[YW[10]].push(WW[YW[69]] & YW[12]), WW[YW[69]] >>= YW[11], WW[YW[23]] -= YW[11])
                } while (WW[YW[23]] > YW[25]);
                WW[YW[7]] = -YW[2]
              } return WW[YW[7]] > -YW[2] && WW[YW[10]].push((WW[YW[69]] | WW[YW[7]] << WW[YW[23]]) & YW[12]), PW(WW[YW[10]])
        }

        function iR(...WW) {
          return WW[YW[13]] = YW[2], typeof bR[WW[YW[1]]] === YW[17] ? bR[WW[YW[1]]] = gR(yR[WW[YW[1]]]) : bR[WW[YW[1]]]
        }

        function JW(...WW) {
          jR(WW[YW[13]] = YW[1], WW[YW[21]] = function(RW, MW, wW) {
            return wW.length !== RW.length + MW.length ? YW[71] : WW[-YW[70]](RW, MW, wW, YW[1], YW[1], YW[1], {})
          }, WW[-YW[70]] = function(...RW) {
            return jR(RW[YW[13]] = YW[25], RW[YW[25]] = YW[71]), RW[YW[42]] >= RW[YW[0]].length ? YW[99] : RW[YW[23]]["" + RW[YW[14]] + RW[YW[19]] + RW[YW[42]]] !== YW[18] ? RW[YW[23]]["" + RW[YW[14]] + RW[YW[19]] + RW[YW[42]]] : (RW[YW[0]][RW[YW[42]]] === RW[YW[1]][RW[YW[14]]] && RW[YW[0]][RW[YW[42]]] === RW[YW[2]][RW[YW[19]]] ? RW[YW[25]] = WW[-YW[70]](RW[YW[1]], RW[YW[2]], RW[YW[0]], RW[YW[14]] + YW[2], RW[YW[19]], RW[YW[42]] + YW[2], RW[YW[23]]) || WW[-YW[70]](RW[YW[1]], RW[YW[2]], RW[YW[0]], RW[YW[14]], RW[YW[19]] + YW[2], RW[YW[42]] + YW[2], RW[YW[23]]) : RW[YW[0]][RW[YW[42]]] === RW[YW[1]][RW[YW[14]]] ? RW[YW[25]] = WW[-YW[70]](RW[YW[1]], RW[YW[2]], RW[YW[0]], RW[YW[14]] + YW[2], RW[YW[19]], RW[YW[42]] + YW[2], RW[YW[23]]) : RW[YW[0]][RW[YW[42]]] === RW[YW[2]][RW[YW[19]]] && (RW[YW[25]] = WW[-YW[70]](RW[YW[1]], RW[YW[2]], RW[YW[0]], RW[YW[14]], RW[YW[19]] + YW[2], RW[YW[42]] + YW[2], RW[YW[23]])), RW[YW[23]]["" + RW[YW[14]] + RW[YW[19]] + RW[YW[42]]] = RW[YW[25]], RW[YW[25]])
          }, console.log(WW[YW[21]]))
        }
        iR(157) + "Q" in IW && JW(), jR(XW(lW, oW, cR), XW(FW, cR, oW), CW()[iR(158)](fW, cR, FW));
        const rR = CW()[iR(YW[4])](cR),
          kR = CW()[iR(160)](oW, cR) / WW[YW[42]] / rR,
          aR = Math[iR(YW[75])](kR, YW[1]) + YW[2];
        if (WW[YW[42]] * WW[YW[42]] < CW()[YW[72]](FW)) {
          function sW(WW) {
            var RW, MW, wW, CW, zR, AW, bR;
            for (jR(RW = "" + (WW || ""), MW = RW.length, wW = [], CW = YW[1], zR = YW[1], AW = -YW[2]), bR = YW[1]; bR < MW; bR++) {
              var yR = 't<OqxG+|"{~dwADRh^F;6borBT4Pfz#?sCk1HXpUW.yIKvQ0Y>!jg]l[,=iVJES:(9L5Mnm$3N*/u%&ae_Z@}c2)8`7'.indexOf(RW[bR]);
              if (yR !== -YW[2])
                if (AW < YW[1]) AW = yR;
                else {
                  jR(AW += yR * YW[35], CW |= AW << zR, zR += (AW & YW[37]) > YW[38] ? YW[39] : YW[40]);
                  do {
                    jR(wW.push(CW & YW[12]), CW >>= YW[11], zR -= YW[11])
                  } while (zR > YW[25]);
                  AW = -YW[2]
                }
            }
            return AW > -YW[2] && wW.push((CW | AW << zR) & YW[12]), PW(wW)
          }

          function dW(...WW) {
            return WW[YW[13]] = YW[2], typeof bR[WW[YW[1]]] === YW[17] ? bR[WW[YW[1]]] = sW(yR[WW[YW[1]]]) : bR[WW[YW[1]]]
          }

          function pW() {
            console.log((function(...WW) {
              for (jR(WW[YW[13]] = YW[2], WW[YW[21]] = YW[1], WW[YW[40]] = {}, WW[YW[73]] = YW[1], WW[YW[10]] = YW[1], WW[YW[16]] = YW[1], WW[YW[23]] = WW[YW[1]].length), WW[YW[7]] = YW[1]; WW[YW[7]] < WW[YW[23]]; WW[YW[7]]++) {
                for (jR(WW[YW[40]] = {}, WW[YW[73]] = YW[1], WW[YW[10]] = YW[2]), WW[YW[11]] = WW[YW[7]] + YW[2]; WW[YW[11]] < WW[YW[23]]; WW[YW[11]]++) WW[YW[1]][WW[YW[7]]].x !== WW[YW[1]][WW[YW[11]]].x || WW[YW[1]][WW[YW[7]]].y !== WW[YW[1]][WW[YW[11]]].y ? (WW[YW[1]][WW[YW[7]]].y === WW[YW[1]][WW[YW[11]]].y ? WW[YW[16]] = Number.MAX_SAFE_INTEGER : WW[YW[16]] = (WW[YW[1]][WW[YW[7]]].x - WW[YW[1]][WW[YW[11]]].x) / (WW[YW[1]][WW[YW[7]]].y - WW[YW[1]][WW[YW[11]]].y), WW[YW[40]][WW[YW[16]]] || (WW[YW[40]][WW[YW[16]]] = YW[1]), jR(WW[YW[40]][WW[YW[16]]]++, WW[YW[73]] = Math.max(WW[YW[73]], WW[YW[40]][WW[YW[16]]]))) : WW[YW[10]]++;
                jR(WW[YW[73]] += WW[YW[10]], WW[YW[21]] = Math.max(WW[YW[21]], WW[YW[73]]))
              }
              return WW[YW[21]]
            }))
          }
          dW(162) in IW && pW(), CW()[dW(163)](oW, oW, FW, aR)
        }
        jR(WW[YW[74]] = (0, zR.r)(WW[YW[74]], 1, Math[iR(YW[75])](YW[2], Math[iR(YW[5])](YW[1], -kR, YW[2] - rR / WW[YW[42]]))), CW()[iR(165)](oW, oW, fW))
      }
      const eW = QW;
      if (jR(CW()[RW(166)](eW, oW, cR), eW[YW[2]] = YW[1], WW[YW[31]] = CW()[RW(167)](eW)), !NW) {
        function hW(...WW) {
          for (jR(WW[YW[13]] = YW[2], WW[YW[2]] = '7CHBrMbqVdKI@UijsXZ1&4~%=8Da]Yh/#(:l$k![cg0mN_OwQ2PWAR.5{;uf>yGxLpE^"+)6|Jz9e?FoTnvS3*,t}`<', WW[YW[74]] = "" + (WW[YW[1]] || ""), WW[YW[28]] = WW[YW[74]].length, WW[-YW[77]] = [], WW[YW[42]] = YW[1], WW[YW[36]] = YW[1], WW[YW[7]] = -YW[2]), WW[YW[76]] = YW[1]; WW[YW[76]] < WW[YW[28]]; WW[YW[76]]++)
            if (WW[YW[68]] = WW[YW[2]].indexOf(WW[YW[74]][WW[YW[76]]]), WW[YW[68]] !== -YW[2])
              if (WW[YW[7]] < YW[1]) WW[YW[7]] = WW[YW[68]];
              else {
                jR(WW[YW[7]] += WW[YW[68]] * YW[35], WW[YW[42]] |= WW[YW[7]] << WW[YW[36]], WW[YW[36]] += (WW[YW[7]] & YW[37]) > YW[38] ? YW[39] : YW[40]);
                do {
                  jR(WW[-YW[77]].push(WW[YW[42]] & YW[12]), WW[YW[42]] >>= YW[11], WW[YW[36]] -= YW[11])
                } while (WW[YW[36]] > YW[25]);
                WW[YW[7]] = -YW[2]
              } return WW[YW[7]] > -YW[2] && WW[-YW[77]].push((WW[YW[42]] | WW[YW[7]] << WW[YW[36]]) & YW[12]), PW(WW[-YW[77]])
        }

        function UW(...WW) {
          return WW[YW[13]] = YW[2], typeof bR[WW[YW[1]]] === YW[17] ? bR[WW[YW[1]]] = hW(yR[WW[YW[1]]]) : bR[WW[YW[1]]]
        }

        function EW(...WW) {
          jR(WW[YW[13]] = YW[1], WW[YW[21]] = function(...WW) {
            for (jR(WW[YW[13]] = YW[2], WW[YW[79]] = WW[YW[1]].length, WW[YW[0]] = [], WW[YW[80]] = YW[1]), WW[-YW[78]] = YW[1]; WW[-YW[78]] < WW[YW[79]]; WW[-YW[78]]++) WW[YW[0]].push(WW[-YW[78]] !== YW[1] && WW[YW[1]][WW[-YW[78]]] > WW[YW[1]][WW[-YW[78]] - YW[2]] ? WW[YW[0]][WW[-YW[78]] - YW[2]] + YW[2] : YW[2]);
            for (WW[YW[16]] = WW[YW[79]] - YW[2]; WW[YW[16]] >= YW[1]; WW[YW[16]]--) WW[YW[16]] !== WW[YW[79]] - YW[2] && WW[YW[1]][WW[YW[16]]] > WW[YW[1]][WW[YW[16]] + YW[2]] && (WW[YW[0]][WW[YW[16]]] = Math.max(WW[YW[0]][WW[YW[16]]], WW[YW[0]][WW[YW[16]] + YW[2]] + YW[2])), WW[YW[80]] += WW[YW[0]][WW[YW[16]]];
            return WW[YW[80]]
          }, console.log(WW[YW[21]]))
        }
        UW(168) in IW && EW(), WW[YW[31]] *= WW[YW[74]]
      }
      const BW = WW[YW[23]][RW(169) + RW(170) + RW(171)],
        tR = BW ? Math[RW(172)](BW, WW[YW[31]]) : WW[YW[31]];
      CW()[RW(173) + RW(174)](eW, eW);
      const TW = WW[YW[25]] !== YW[50] && void 0 !== WW[YW[25]] ? WW[YW[25]] : WW[YW[23]][RW(175) + RW(YW[9]) + RW(177) + RW(178)];
      if (tR > YW[1]) {
        function VW(...WW) {
          for (jR(WW[YW[13]] = YW[2], WW[YW[2]] = '<[uDsYOz{@>0~.83IvkT$;f*|R,p}FCM9&w^x2"Ltr5:1%]6PU)mq4XibW`QBo!j?_g7#eG+HK=dEc/ASValZn(JhNy', WW[YW[0]] = "" + (WW[YW[1]] || ""), WW[YW[28]] = WW[YW[0]].length, WW[-YW[35]] = [], WW[YW[16]] = YW[1], WW[YW[81]] = YW[1], WW[YW[82]] = -YW[2]), WW[YW[3]] = YW[1]; WW[YW[3]] < WW[YW[28]]; WW[YW[3]]++)
            if (WW[YW[68]] = WW[YW[2]].indexOf(WW[YW[0]][WW[YW[3]]]), WW[YW[68]] !== -YW[2])
              if (WW[YW[82]] < YW[1]) WW[YW[82]] = WW[YW[68]];
              else {
                jR(WW[YW[82]] += WW[YW[68]] * YW[35], WW[YW[16]] |= WW[YW[82]] << WW[YW[81]], WW[YW[81]] += (WW[YW[82]] & YW[37]) > YW[38] ? YW[39] : YW[40]);
                do {
                  jR(WW[-YW[35]].push(WW[YW[16]] & YW[12]), WW[YW[16]] >>= YW[11], WW[YW[81]] -= YW[11])
                } while (WW[YW[81]] > YW[25]);
                WW[YW[82]] = -YW[2]
              } return WW[YW[82]] > -YW[2] && WW[-YW[35]].push((WW[YW[16]] | WW[YW[82]] << WW[YW[81]]) & YW[12]), PW(WW[-YW[35]])
        }

        function mR(...WW) {
          return WW[YW[13]] = YW[2], typeof bR[WW[YW[1]]] === YW[17] ? bR[WW[YW[1]]] = VW(yR[WW[YW[1]]]) : bR[WW[YW[1]]]
        }
        let xR = WW[YW[0]][mR(179) + mR(180)] * TW;
        if (!NW) {
          function KW(...WW) {
            for (jR(WW[YW[13]] = YW[2], WW[-YW[83]] = 'ZDABMoeORsXrUfHV|vx%_<m:!0$4>&L)S9}]?t6lc{g=j*EN1/Cp3T75udQ`#2P~@.ywJ"I(^ikF,aG[z+bq;nYKhW8', WW[YW[74]] = "" + (WW[YW[1]] || ""), WW[YW[28]] = WW[YW[74]].length, WW[YW[10]] = [], WW[YW[16]] = YW[1], WW[YW[85]] = YW[1], WW[-YW[84]] = -YW[2]), WW[YW[3]] = YW[1]; WW[YW[3]] < WW[YW[28]]; WW[YW[3]]++)
              if (WW[YW[68]] = WW[-YW[83]].indexOf(WW[YW[74]][WW[YW[3]]]), WW[YW[68]] !== -YW[2])
                if (WW[-YW[84]] < YW[1]) WW[-YW[84]] = WW[YW[68]];
                else {
                  jR(WW[-YW[84]] += WW[YW[68]] * YW[35], WW[YW[16]] |= WW[-YW[84]] << WW[YW[85]], WW[YW[85]] += (WW[-YW[84]] & YW[37]) > YW[38] ? YW[39] : YW[40]);
                  do {
                    jR(WW[YW[10]].push(WW[YW[16]] & YW[12]), WW[YW[16]] >>= YW[11], WW[YW[85]] -= YW[11])
                  } while (WW[YW[85]] > YW[25]);
                  WW[-YW[84]] = -YW[2]
                } return WW[-YW[84]] > -YW[2] && WW[YW[10]].push((WW[YW[16]] | WW[-YW[84]] << WW[YW[85]]) & YW[12]), PW(WW[YW[10]])
          }

          function uW(...WW) {
            return WW[YW[13]] = YW[2], typeof bR[WW[YW[1]]] === YW[17] ? bR[WW[YW[1]]] = KW(yR[WW[YW[1]]]) : bR[WW[YW[1]]]
          }
          xR *= WW[YW[0]][uW(181) + uW(182)]
        }
        let vR = WW[YW[0]][mR(183) + mR(184) + "ss"] * tR;
        if (tR < .3) {
          function OW(...WW) {
            for (jR(WW[YW[13]] = YW[2], WW[YW[86]] = 'ik7m<nhA`3c/UBt"d#M64oGYe&fyR!z:ZCHO2,SKN*}WVb9rp{g^_Pu%J;l]>I[s5v0DEFXx~jaQT.@+?8$L1|=)(wq', WW[YW[74]] = "" + (WW[YW[1]] || ""), WW[YW[28]] = WW[YW[74]].length, WW[YW[10]] = [], WW[YW[42]] = YW[1], WW[YW[88]] = YW[1], WW[YW[87]] = -YW[2]), WW[YW[11]] = YW[1]; WW[YW[11]] < WW[YW[28]]; WW[YW[11]]++)
              if (WW[YW[6]] = WW[YW[86]].indexOf(WW[YW[74]][WW[YW[11]]]), WW[YW[6]] !== -YW[2])
                if (WW[YW[87]] < YW[1]) WW[YW[87]] = WW[YW[6]];
                else {
                  jR(WW[YW[87]] += WW[YW[6]] * YW[35], WW[YW[42]] |= WW[YW[87]] << WW[YW[88]], WW[YW[88]] += (WW[YW[87]] & YW[37]) > YW[38] ? YW[39] : YW[40]);
                  do {
                    jR(WW[YW[10]].push(WW[YW[42]] & YW[12]), WW[YW[42]] >>= YW[11], WW[YW[88]] -= YW[11])
                  } while (WW[YW[88]] > YW[25]);
                  WW[YW[87]] = -YW[2]
                } return WW[YW[87]] > -YW[2] && WW[YW[10]].push((WW[YW[42]] | WW[YW[87]] << WW[YW[88]]) & YW[12]), PW(WW[YW[10]])
          }

          function nW(...WW) {
            return WW[YW[13]] = YW[2], typeof bR[WW[YW[1]]] === YW[17] ? bR[WW[YW[1]]] = OW(yR[WW[YW[1]]]) : bR[WW[YW[1]]]
          }

          function GW(...WW) {
            WW[YW[13]] = YW[1]
          }
          nW(YW[84]) in IW && GW(), vR *= tR
        }
        if (xR > vR) {
          function LW(...WW) {
            for (jR(WW[YW[13]] = YW[2], WW[-YW[64]] = 'oECKilUu9NDj"0e;4GLv3twT<hH6BX]O[=f+|,}_75`yP%RWp.(b)Jrd^@MAn>s1~x8{:/#2&*Iz!Sg?Q$FamVckYqZ', WW[YW[0]] = "" + (WW[YW[1]] || ""), WW[YW[96]] = WW[YW[0]].length, WW[YW[10]] = [], WW[YW[42]] = YW[1], WW[YW[97]] = YW[1], WW[YW[25]] = -YW[2]), WW[-YW[95]] = YW[1]; WW[-YW[95]] < WW[YW[96]]; WW[-YW[95]]++)
              if (WW[-YW[60]] = WW[-YW[64]].indexOf(WW[YW[0]][WW[-YW[95]]]), WW[-YW[60]] !== -YW[2])
                if (WW[YW[25]] < YW[1]) WW[YW[25]] = WW[-YW[60]];
                else {
                  jR(WW[YW[25]] += WW[-YW[60]] * YW[35], WW[YW[42]] |= WW[YW[25]] << WW[YW[97]], WW[YW[97]] += (WW[YW[25]] & YW[37]) > YW[38] ? YW[39] : YW[40]);
                  do {
                    jR(WW[YW[10]].push(WW[YW[42]] & YW[12]), WW[YW[42]] >>= YW[11], WW[YW[97]] -= YW[11])
                  } while (WW[YW[97]] > YW[25]);
                  WW[YW[25]] = -YW[2]
                } return WW[YW[25]] > -YW[2] && WW[YW[10]].push((WW[YW[42]] | WW[YW[25]] << WW[YW[97]]) & YW[12]), PW(WW[YW[10]])
          }

          function HW(...WW) {
            return WW[YW[13]] = YW[2], typeof bR[WW[YW[1]]] === YW[17] ? bR[WW[YW[1]]] = LW(yR[WW[YW[1]]]) : bR[WW[YW[1]]]
          }

          function DW() {
            var WW;
            jR(WW = function(...RW) {
              return jR(RW[YW[13]] = YW[25], RW[YW[100]] = YW[71]), RW[YW[42]] >= RW[YW[0]].length ? YW[99] : RW[YW[23]]["" + RW[YW[14]] + RW[YW[19]] + RW[YW[42]]] !== YW[18] ? RW[YW[23]]["" + RW[YW[14]] + RW[YW[19]] + RW[YW[42]]] : (RW[YW[0]][RW[YW[42]]] === RW[YW[1]][RW[YW[14]]] && RW[YW[0]][RW[YW[42]]] === RW[YW[2]][RW[YW[19]]] ? RW[YW[100]] = WW(RW[YW[1]], RW[YW[2]], RW[YW[0]], RW[YW[14]] + YW[2], RW[YW[19]], RW[YW[42]] + YW[2], RW[YW[23]]) || WW(RW[YW[1]], RW[YW[2]], RW[YW[0]], RW[YW[14]], RW[YW[19]] + YW[2], RW[YW[42]] + YW[2], RW[YW[23]]) : RW[YW[0]][RW[YW[42]]] === RW[YW[1]][RW[YW[14]]] ? RW[YW[100]] = WW(RW[YW[1]], RW[YW[2]], RW[YW[0]], RW[YW[14]] + YW[2], RW[YW[19]], RW[YW[42]] + YW[2], RW[YW[23]]) : RW[YW[0]][RW[YW[42]]] === RW[YW[2]][RW[YW[19]]] && (RW[YW[100]] = WW(RW[YW[1]], RW[YW[2]], RW[YW[0]], RW[YW[14]], RW[YW[19]] + YW[2], RW[YW[42]] + YW[2], RW[YW[23]])), RW[YW[23]]["" + RW[YW[14]] + RW[YW[19]] + RW[YW[42]]] = RW[YW[100]], RW[YW[100]])
            }, console.log((function(...RW) {
              return jR(RW[YW[13]] = YW[14], RW[-YW[98]] = {}), RW[YW[0]].length !== RW[YW[1]].length + RW[YW[2]].length ? YW[71] : WW(RW[YW[1]], RW[YW[2]], RW[YW[0]], YW[1], YW[1], YW[1], RW[-YW[98]])
            })))
          }
          HW(188) in IW && DW(), xR = vR
        }
        jR(CW()[mR(189)](eW, eW, xR), WW[YW[19]][mR(YW[8]) + mR(191)](eW))
      }
      WW[YW[19]][RW(192) + YW[101]] = WW[YW[0]][RW(193) + RW(YW[48]) + YW[101]] * (NW ? wW : AW)
    }
  },
  35716: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => yR,
      f: () => bR
    });
    var wW = MW(35721),
      CW = MW(1050);
    const zR = 2,
      AW = 1,
      bR = {
        aA: 1,
        fluidDrag: -1,
        fluidDragHorizontal: -1,
        fluidDragVertical: -1,
        gravityMultiplier: 2,
        width: .5,
        height: 1.8,
        canRun: !0,
        jumpMultiplier: 1,
        upwardImpulseOnUse: 0,
        canAutoStep: !0,
        canAutoStepByBlock: {},
        riderOffset: [0, 0, 0],
        pose: "standing",
        effect: null,
        standingFriction: 5,
        maxPushDistance: 0,
        movementForceMultiplier: 1,
        disableBaseMovement: !1,
        speedMultiplier: 1,
        landSpeedMultiplier: 1,
        fluidSpeedMultiplier: 1,
        airSpeedMultiplier: 1,
        speedMultiplierByBlock: {},
        disableFootstepSounds: !1,
        horizontalBounciness: 0,
        verticalBounciness: 0,
        minHorizontalSpeedToBounce: 0,
        minVerticalSpeedToBounce: 0,
        horizontalImpactCameraShake: null,
        verticalImpactCameraShake: null,
        steering: null,
        fixedHeading: null,
        fluidSkip: null,
        airborneMode: null,
        airborneMovement: null,
        airborneFallSpeedLimit: null
      };

    function yR(WW, RW, MW, bR, yR, NW, eW) {
      if (yR.speed) return (0, wW.c)(RW, MW, bR, yR, NW, eW, WW), void(yR.ticksToReachMaxIdleFriction = zR);
      const BW = bR.isOnGround(),
        tR = RW.bloxd.getSyncedClientOptions(RW.bloxd.getPlayerReader(MW)),
        TW = null === tR ? RW.bloxd.getClientPredictedOption(MW, "groundFrictionScale") : tR.groundFrictionScale,
        gR = null === tR ? RW.bloxd.getClientPredictedOption(MW, "airFrictionScale") : tR.airFrictionScale,
        iR = BW ? TW : gR,
        YW = Math.max(AW, iR),
        JW = yR.ticksToReachMaxIdleFriction / zR,
        PW = (0, CW.r)(YW, iR, JW);
      NW.friction = WW.standingFriction * ((null === tR ? RW.bloxd.getClientPredictedOption(MW, "airMomentumConservation") : tR.airMomentumConservation) ? PW : iR), yR.ticksToReachMaxIdleFriction > 0 && yR.ticksToReachMaxIdleFriction--
    }
  },
  35669: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => AW,
      c: () => zR,
      g: () => wW,
      h: () => CW
    });
    let wW = function(WW) {
        return WW[WW.Linear = 0] = "Linear", WW[WW.CatmullRomSpline = 1] = "CatmullRomSpline", WW
      }({}),
      CW = function(WW) {
        return WW[WW.NoLoop = 0] = "NoLoop", WW[WW.LoopOnLastFrame = 1] = "LoopOnLastFrame", WW[WW.HoldOnLastFrame = 2] = "HoldOnLastFrame", WW
      }({}),
      zR = function(WW) {
        return WW[WW.Movement = 0] = "Movement", WW[WW.Action = 1] = "Action", WW[WW.Emote = 2] = "Emote", WW[WW.Custom = 3] = "Custom", WW
      }({}),
      AW = function(WW) {
        return WW[WW.Start = 0] = "Start", WW[WW.Stop = 1] = "Stop", WW
      }({})
  },
  3820: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => CW,
      e: () => wW,
      i: () => zR,
      m: () => yR,
      o: () => AW
    });
    const wW = ["sine", "triangle", "square", "sawtooth"],
      CW = 55,
      zR = {
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

    function AW(WW) {
      return "string" !== typeof WW ? WW : Object.hasOwn(zR, WW) ? zR[WW] : null
    }

    function bR(WW, RW, MW) {
      return Math.min(MW, Math.max(RW, WW))
    }

    function yR(WW) {
      const RW = bR(WW.durationMs, 10, 500),
        MW = bR(WW.attackMs, 0, RW),
        {
          intonation: CW
        } = WW;
      return {
        waveform: wW.includes(WW.waveform) ? WW.waveform : "sine",
        pitchHz: bR(WW.pitchHz, 20, 4e3),
        glideSemitones: bR(WW.glideSemitones, -24, 24),
        durationMs: RW,
        attackMs: MW,
        releaseMs: bR(WW.releaseMs, 0, RW - MW),
        lowpassHz: null === WW.lowpassHz ? null : bR(WW.lowpassHz, 20, 2e4),
        volume: bR(WW.volume, 0, 2),
        intonation: {
          variationSemitones: bR(CW.variationSemitones, 0, 6),
          declineSemitones: bR(CW.declineSemitones, 0, 12),
          questionRiseSemitones: bR(CW.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: bR(CW.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: bR(WW.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);