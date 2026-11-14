export const id = 22;
export const ids = [22];
export const modules = {
  35122: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => EF,
      e: () => QF,
      f: () => eF,
      h: () => iW
    });
    var CF = SF(8210),
      AF = SF(35131),
      uF = SF(35133),
      hF = SF(7700),
      bW = SF(1262),
      dF = SF(46),
      PF = SF(61),
      RF = SF(971);

    function iW() {
      var FF;
      return (0, bW.i)(AF.b, (0, AF.j)()), (0, RF.jsx)(RF.Fragment, {
        children: null === (FF = (0, AF.j)()) || void 0 === FF ? void 0 : FF.content
      })
    }

    function eF(FF) {
      var WF;
      let {
        show: SF
      } = FF;
      (0, bW.i)(AF.b, (0, AF.j)());
      const PF = null === (WF = (0, AF.j)()) || void 0 === WF ? void 0 : WF.menu;
      return (0, dF.useEffect)((() => {
        SF || (null === PF || void 0 === PF || PF.onClose(), (0, uF.r)())
      }), [SF, PF]), (0, dF.useEffect)((() => SF ? (0, hF.i)(uF.A, uF.h) : void 0), [SF]), (0, RF.jsx)(CF.d, {
        showing: SF,
        globallyUniqueKey: "clientGameMenu",
        children: null === PF || void 0 === PF ? void 0 : PF.content
      })
    }

    function EF(FF) {
      let {
        placement: WF = "bottom"
      } = FF;
      return (0, RF.jsx)("div", {
        id: `clientGameHud-${WF}`,
        style: {
          display: "contents"
        }
      })
    }

    function QF(FF) {
      let {
        children: WF,
        placement: SF = "bottom"
      } = FF;
      const [CF, AF] = (0, dF.useState)(null);
      return (0, dF.useEffect)((() => {
        AF(document.getElementById(`clientGameHud-${SF}`))
      }), [SF]), CF ? (0, PF.createPortal)(WF, CF) : null
    }
  },
  3823: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => gW,
      f: () => tW
    });
    var CF = SF(918),
      AF = SF.n(CF),
      uF = SF(46),
      hF = SF(1046),
      bW = SF(3832),
      dF = SF(1546),
      PF = SF(1955),
      RF = SF(3840),
      iW = SF(971);
    const eF = new WeakMap;
    let EF = 0;

    function QF(FF) {
      let WF = eF.get(FF);
      return void 0 === WF && (WF = EF++, eF.set(FF, WF)), WF
    }

    function rW(FF) {
      let {
        piece: WF
      } = FF;
      return "space" === WF.kind ? (0, iW.jsx)(iW.Fragment, {
        children: WF.text
      }) : (0, iW.jsx)("span", {
        className: "DialogueWord",
        style: {
          "--word-delay": `${WF.delayMs}ms`
        },
        children: (0, iW.jsx)(bW.c, {
          text: "icon" === WF.kind ? `[[${WF.icon}]]` : WF.text
        })
      })
    }

    function gW(FF) {
      let {
        display: WF
      } = FF;
      const {
        selectedLanguage: SF
      } = (0, hF.B)(), CF = (0, uF.useMemo)((() => (0, RF.b)((0, RF.c)(WF).plan.pieces)), [WF, SF.code]);
      return (0, iW.jsxs)("div", {
        className: AF()("Dialogue", {
          DialogueAnimateIn: !1 !== WF.animateIn
        }),
        children: [WF.speakerName && (0, iW.jsx)(dF.d, {
          text: WF.speakerName,
          className: "DialogueSpeaker"
        }), (0, iW.jsx)("p", {
          className: "DialogueLine",
          children: CF.map(((FF, WF) => 1 === FF.length && "space" === FF[0].kind ? FF[0].text : (0, iW.jsx)("span", {
            className: "DialogueGlue",
            children: FF.map(((FF, WF) => (0, iW.jsx)(rW, {
              piece: FF
            }, WF)))
          }, WF)))
        })]
      })
    }
    const tW = (0, uF.memo)((function() {
      const FF = (0, PF.k)("dialogue");
      return (0, iW.jsx)("div", {
        className: "DialogueAnchor",
        "data-camera-keeper": "",
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: FF && (0, iW.jsx)(gW, {
          display: FF
        }, QF(FF))
      })
    }))
  },
  3832: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => bW
    });
    var CF = SF(46),
      AF = SF(220),
      uF = SF(1563),
      hF = SF(971);

    function bW(FF) {
      let {
        text: WF
      } = FF;
      const SF = [];
      let bW = "";
      return (0, AF.ec)(WF).forEach(((FF, WF) => {
        if ("string" === typeof FF || !(0, uF.c)(FF.icon)) return void(bW += "string" === typeof FF ? FF : FF.icon);
        const AF = Math.max(0, bW.trimEnd().search(/\S{1,12}$/));
        SF.push((0, hF.jsxs)(CF.Fragment, {
          children: [bW.slice(0, AF), (0, hF.jsxs)("span", {
            className: "InlineIconTextGlue",
            children: [bW.slice(AF), (0, hF.jsx)("span", {
              className: "InlineIconTextIcon",
              role: "img",
              "aria-label": FF.icon,
              children: (0, hF.jsx)(uF.b, {
                itemName: FF.icon,
                amount: 0
              })
            })]
          })]
        }, WF)), bW = ""
      })), SF.push(bW), (0, hF.jsx)(hF.Fragment, {
        children: SF
      })
    }
  },
  8210: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => uF
    });
    var CF = SF(3618),
      AF = SF(3621);

    function uF(FF) {
      let {
        children: WF,
        showing: SF,
        globallyUniqueKey: uF,
        alwaysMountChildren: hF = !1,
        doGameplayStartStopOnShow: bW = !0
      } = FF;
      return (0, AF.d)(!0, SF, uF), (0, CF.b)(bW, SF), SF || hF ? WF : null
    }
  },
  3840: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => cW,
      c: () => MF
    });
    var CF = SF(3847),
      AF = SF(220);
    const uF = 120,
      hF = 260,
      bW = 1.15,
      dF = 1.2,
      PF = 2,
      RF = 1.08,
      iW = .8,
      eF = .95,
      EF = 8,
      QF = "[\"')\\]\u300d\u300f\uff09]*",
      rW = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${QF}$`),
      gW = new RegExp(`[?\uff1f]${QF}$`),
      tW = new RegExp(`[!\uff01]${QF}$`),
      TF = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      aW = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      kW = new RegExp(`[${aW}]`),
      qW = new RegExp(`[${aW}]|[^${aW}]+`, "g"),
      VF = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function NF(FF) {
      let WF = 2166136261;
      for (let SF = 0; SF < FF.length; SF++) WF ^= FF.charCodeAt(SF), WF = Math.imul(WF, 16777619);
      return (WF >>> 0) / 4294967295 * 2 - 1
    }

    function DF(FF) {
      var WF;
      if (kW.test(FF)) return 1;
      const SF = FF.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        CF = SF.replace(/[^0-9]/g, "");
      if (CF.length > 0 && !/\p{L}/u.test(SF)) return Math.min(CF.length, 4);
      const AF = null !== (WF = SF.match(VF)) && void 0 !== WF ? WF : [];
      if (0 === AF.length) {
        var uF, hF;
        const FF = null !== (uF = null === (hF = SF.match(/\p{L}/gu)) || void 0 === hF ? void 0 : hF.length) && void 0 !== uF ? uF : 0;
        return 0 === FF ? 0 : Math.min(Math.max(1, Math.round(FF / 2.5)), EF)
      }
      const bW = SF.replace(/[^\p{L}]/gu, ""),
        dF = AF.length > 1 && "e" === AF.at(-1) && bW.endsWith("e") && !bW.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(FF.replace(/[^\p{L}]/gu, ""));
      return Math.min(AF.length - (dF ? 1 : 0), EF)
    }

    function LF(FF) {
      return FF.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function mW(FF) {
      const WF = FF.replace(/[^\p{L}]/gu, "");
      return WF.length >= 2 && WF === WF.toUpperCase() && WF !== WF.toLowerCase()
    }

    function OF(FF, WF) {
      var SF;
      const EF = WF && (0, CF.m)(WF),
        QF = null !== (SF = null === EF || void 0 === EF ? void 0 : EF.syllableMs) && void 0 !== SF ? SF : CF.d,
        aW = function(FF) {
          const WF = [];
          for (const CF of (0, AF.ec)(FF))
            if ("string" === typeof CF)
              for (const FF of CF.split(/(\s+)/)) {
                if ("" === FF) continue;
                if (/^\s+$/.test(FF)) {
                  WF.push({
                    kind: "space",
                    text: FF
                  });
                  continue
                }
                if (!kW.test(FF)) {
                  WF.push({
                    kind: "word",
                    text: FF,
                    delayMs: 0
                  });
                  continue
                }
                let CF = !0;
                for (const AF of null !== (SF = FF.match(qW)) && void 0 !== SF ? SF : []) {
                  var SF;
                  const FF = WF.at(-1);
                  CF || "word" !== (null === FF || void 0 === FF ? void 0 : FF.kind) || kW.test(AF) || /[\p{L}\p{N}]/u.test(AF) ? (CF || WF.push({
                    kind: "space",
                    text: "\u200b"
                  }), WF.push({
                    kind: "word",
                    text: AF,
                    delayMs: 0
                  }), CF = !1) : FF.text += AF
                }
              } else WF.push({
                kind: "icon",
                text: CF.icon,
                delayMs: 0
              });
          return WF
        }(FF),
        VF = [];
      let OF = [];
      for (const CF of aW) "space" !== CF.kind && (OF.push(CF), rW.test(CF.text) && (VF.push(OF), OF = []));
      VF.push(OF);
      const xW = [];
      let ZF = 0;
      for (const CF of VF) {
        var oF, YF;
        const FF = null !== (oF = null === (YF = CF.at(-1)) || void 0 === YF ? void 0 : YF.text) && void 0 !== oF ? oF : "",
          WF = gW.test(FF),
          SF = tW.test(FF),
          AF = CF.map((FF => "word" === FF.kind ? DF(FF.text) : 1)),
          aW = AF.findLastIndex((FF => FF > 0));
        for (const [gW, tW] of CF.entries()) {
          const FF = "word" === tW.kind,
            CF = AF[gW];
          tW.delayMs = ZF;
          for (let AF = 0; EF && AF < CF; AF++) {
            const {
              intonation: uF
            } = EF;
            let hF = aW > 0 ? -uF.declineSemitones * (gW / aW) : 0;
            hF += NF(`${LF(tW.text)}|${AF}`) * uF.variationSemitones;
            const rW = Math.min(1, uF.variationSemitones);
            let TF = EF.glideSemitones,
              kW = 1;
            SF && (hF += uF.exclaimLiftSemitones, kW *= bW), WF && gW === aW && (hF += uF.questionRiseSemitones * (CF > 1 ? .5 + .5 * AF / (CF - 1) : 1), AF === CF - 1 && (TF = Math.abs(TF) + uF.questionRiseSemitones / 2)), FF && mW(tW.text) && (hF += PF * rW, kW *= dF), CF > 1 && 0 === AF && (hF += iW * rW, kW *= RF), xW.push({
              atMs: ZF + AF * QF,
              semitones: hF,
              glideSemitones: TF,
              durationMs: AF < CF - 1 ? Math.min(EF.durationMs, QF * eF) : EF.durationMs,
              level: kW
            })
          }
          ZF += CF * QF + (rW.test(tW.text) ? hF : TF.test(tW.text) ? uF : 0)
        }
      }
      return {
        pieces: aW.map((FF => "space" === FF.kind ? FF : "icon" === FF.kind ? {
          kind: "icon",
          icon: FF.text,
          delayMs: FF.delayMs
        } : {
          kind: "word",
          text: FF.text,
          delayMs: FF.delayMs
        })),
        blips: xW
      }
    }
    var xW = SF(1046),
      ZF = SF(1115),
      oF = SF(1580);

    function YF(FF) {
      if ("string" === typeof FF) return FF;
      const WF = ZF.h.get().getCurrentLanguageCode();
      return (0, xW.o)(WF, FF.translationKey, (0, xW.n)(FF.params, oF.b.shown))
    }

    function MF(FF) {
      const WF = void 0 === FF.voice ? null : (0, CF.n)(FF.voice),
        SF = WF && (0, CF.m)(WF);
      return {
        plan: OF(YF(FF.line), SF),
        synth: SF
      }
    }

    function cW(FF) {
      const WF = [];
      let SF = [];
      for (const [AF, uF] of FF.entries()) {
        var CF;
        "space" === uF.kind && (" " !== uF.text || "icon" !== (null === (CF = FF[AF + 1]) || void 0 === CF ? void 0 : CF.kind)) ? (SF.length > 0 && WF.push(SF), WF.push([uF]), SF = []) : SF.push(uF)
      }
      return SF.length > 0 && WF.push(SF), WF
    }
  },
  7700: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => uF,
      i: () => AF
    });
    let CF = null;
    const AF = function(FF) {
        const WF = {
          cycle: FF,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return CF = WF, () => {
          CF === WF && (CF = null)
        }
      },
      uF = () => {
        var FF;
        return null !== (FF = CF) && void 0 !== FF && FF.canCycle() ? CF.cycle : null
      }
  },
  35133: (FF, WF, SF) => {
    SF.d(WF, {
      A: () => QF,
      D: () => TF,
      e: () => uF,
      h: () => rW,
      i: () => gW,
      l: () => bW,
      p: () => eF,
      r: () => tW,
      t: () => iW,
      w: () => aW
    });
    var CF = SF(11),
      AF = SF(20);
    const uF = "clientGameInventoryButtonsChanged",
      hF = new Map;

    function bW() {
      return [...hF.values()].sort(((FF, WF) => {
        var SF, CF;
        return (null !== (SF = FF.order) && void 0 !== SF ? SF : 0) - (null !== (CF = WF.order) && void 0 !== CF ? CF : 0)
      }))
    }
    let dF = null;

    function PF(FF) {
      dF = FF
    }
    let RF = !1;

    function iW(FF) {
      RF = !0;
      try {
        FF.onClick()
      } finally {
        RF = !1
      }
      FF.panel && "clientGame" === CF.b.get("openInGameMenuName") && PF(FF.id)
    }

    function eF() {
      return RF
    }

    function EF() {
      return bW().filter((FF => FF.panel && !FF.disabled))
    }

    function QF(FF) {
      const WF = EF(),
        SF = WF.findIndex((FF => FF.id === dF));
      return !(SF < 0 || WF.length < 2) && (iW(WF[(SF + FF + WF.length) % WF.length]), !0)
    }

    function rW() {
      return null !== dF && EF().length > 1
    }

    function gW() {
      PF(null)
    }

    function tW() {
      "inventory" !== CF.b.get("openInGameMenuName") && PF(null)
    }

    function TF() {
      const FF = dF;
      return PF(null), FF
    }

    function aW(FF) {
      return hF.set(FF.id, FF), AF.j.Uu(uF, bW(), !0), () => {
        hF.get(FF.id) === FF && (hF.delete(FF.id), AF.j.Uu(uF, bW()))
      }
    }
  },
  35131: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => bW,
      d: () => gW,
      e: () => tW,
      h: () => eF,
      j: () => PF,
      n: () => rW,
      p: () => EF,
      r: () => RF
    });
    var CF = SF(11),
      AF = SF(20),
      uF = SF(1144),
      hF = SF(35133);
    const bW = "clientGameUiChanged";
    let dF = null;

    function PF() {
      return dF
    }

    function RF(FF, WF) {
      const SF = {
        content: FF,
        menu: WF
      };
      return dF = SF, AF.j.Uu(bW, dF, !0), () => {
        dF === SF && (dF = null, QF = !1, gW(), AF.j.Uu(bW, null))
      }
    }
    let iW = null;

    function eF() {
      return iW
    }

    function EF(FF) {
      return iW = FF, () => {
        iW === FF && (iW = null)
      }
    }
    let QF = !1;

    function rW() {
      const FF = CF.b.get("openInGameMenuName");
      "clientGame" !== FF && (QF = "inventory" === FF), (0, hF.p)() || (0, hF.i)(), (0, uF.h)("InGameMenu"), CF.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function gW() {
      TF(!1)
    }

    function tW() {
      TF(QF)
    }

    function TF(FF) {
      "clientGame" === CF.b.get("openInGameMenuName") && CF.b.set({
        openInGameMenuName: FF ? "inventory" : null
      }), FF || (0, hF.i)(), QF = !1
    }
  },
  36934: (FF, WF, SF) => {
    function CF(FF, WF, SF) {
      const CF = new Set,
        AF = new ResizeObserver(SF),
        uF = () => {
          const WF = new Set(document.querySelectorAll(FF));
          let uF = !1;
          for (const FF of CF) WF.has(FF) || (AF.unobserve(FF), CF.delete(FF), uF = !0);
          for (const FF of WF) CF.has(FF) || (AF.observe(FF), hF.observe(FF, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), CF.add(FF));
          uF && SF()
        },
        hF = new MutationObserver((WF => {
          WF.some((FF => "attributes" === FF.type)) && SF(), WF.some((WF => function(FF, WF, SF) {
            if ("childList" !== FF.type) return !1;
            for (const CF of FF.addedNodes)
              if (CF instanceof Element && (CF.matches(WF) || CF.querySelector(WF))) return !0;
            for (const CF of FF.removedNodes)
              if (CF instanceof Element)
                for (const FF of SF)
                  if (CF.contains(FF)) return !0;
            return !1
          }(WF, FF, CF))) && uF()
        }));
      hF.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const bW of WF) AF.observe(bW);
      return window.addEventListener("resize", SF), uF(), SF(), () => {
        AF.disconnect(), hF.disconnect(), window.removeEventListener("resize", SF)
      }
    }
    SF.d(WF, {
      b: () => CF
    })
  },
  7818: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => bW,
      f: () => dF
    });
    var CF = SF(11),
      AF = SF(1175),
      uF = SF(89);
    const hF = {
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

    function bW() {
      return (0, uF.isMobile)() && "function" === typeof navigator.vibrate
    }
    const dF = new class {
      constructor(FF) {
        this.deps = FF, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(FF, WF) {
        var SF;
        if (!this.deps.enabled()) return;
        const CF = hF[FF],
          AF = null !== WF && void 0 !== WF ? WF : CF.pattern;
        if (null === AF) return void console.warn("No vibration pattern for", FF);
        const uF = this.deps.now();
        uF - this.lastAnyAt < 40 && CF.priority < this.playingPriority || uF - (null !== (SF = this.lastAt.get(FF)) && void 0 !== SF ? SF : -1 / 0) < CF.minGapMs || uF < this.playingUntil && CF.priority < this.playingPriority || (this.lastAt.set(FF, uF), this.lastAnyAt = uF, this.playingUntil = uF + AF.reduce(((FF, WF) => FF + WF), 0), this.playingPriority = CF.priority, this.deps.vibrate(AF))
      }
    }({
      vibrate: FF => {
        navigator.vibrate([...FF])
      },
      now: () => performance.now(),
      enabled: () => bW() && CF.b.get("isTouchScreen") && CF.b.get("clientEscMenuOptions").vibration && !(0, AF.i)()
    })
  },
  36909: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => QF
    });
    var CF = SF(161),
      AF = SF(36036);
    const uF = 1.2,
      hF = {
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
        xh: .5,
        MbF: !1
      },
      bW = {
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
        xh: .5,
        MbF: !1
      },
      dF = {
        physicsBodyDimensions: {
          width: CF.h.RV,
          height: CF.h.aN
        },
        hitBoxDimensions: {
          width: CF.h.RV + .4,
          height: CF.h.aN + .6
        },
        eyeHeight: CF.h.aN * CF.h.playerEyeToHeightRatio,
        rideHeight: CF.h.aN - .3,
        xh: .5,
        MbF: !1
      },
      PF = {
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
        xh: .5,
        MbF: !1
      },
      RF = {
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
        xh: .5,
        MbF: !1
      },
      iW = {
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
        xh: .5,
        MbF: !1
      },
      eF = {
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
        xh: .5,
        MbF: !1
      },
      EF = {
        Player: {
          defaultName: "Player",
          physicsBodyDimensions: {
            width: CF.h.RV,
            height: CF.h.aN
          },
          hitBoxDimensions: {
            width: CF.h.RV + .4,
            height: CF.h.aN + .6
          },
          eyeHeight: CF.h.aN * CF.h.playerEyeToHeightRatio,
          rideHeight: CF.h.aN - .1,
          xh: AF.g.xh,
          MbF: !0
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
          xh: .5,
          MbF: !1
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
          xh: .5,
          MbF: !1
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
          xh: .5,
          MbF: !1
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
          xh: .5,
          MbF: !1
        },
        Camel: {
          modelScale: uF,
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
          xh: .5,
          MbF: !1
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
          xh: .5,
          MbF: !1
        },
        "Cave Golem": hF,
        "Draugr Zombie": {
          ...dF,
          defaultPose: "zombie"
        },
        "Draugr Skeleton": dF,
        "Frost Golem": hF,
        "Frost Zombie": {
          ...dF,
          defaultPose: "zombie"
        },
        "Frost Skeleton": dF,
        "Draugr Knight": {
          physicsBodyDimensions: {
            width: CF.h.RV,
            height: CF.h.aN
          },
          hitBoxDimensions: {
            width: CF.h.RV + .4,
            height: 2.8
          },
          eyeHeight: 1.9,
          rideHeight: 1.8,
          xh: .5,
          MbF: !1
        },
        Wolf: PF,
        Bear: RF,
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
          xh: .5,
          MbF: !1
        },
        Stag: iW,
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
          xh: .5,
          MbF: !1
        },
        Gorilla: eF,
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
          xh: .5,
          MbF: !1
        },
        "Draugr Huntress": dF,
        "Magma Golem": hF,
        "Spirit Golem": hF,
        "Spirit Wolf": PF,
        "Spirit Bear": RF,
        "Spirit Stag": iW,
        "Spirit Gorilla": eF,
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
          xh: .5,
          MbF: !1
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
          xh: .5,
          MbF: !1
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
          xh: .5,
          MbF: !1
        },
        NPC: {
          physicsBodyDimensions: {
            width: CF.h.RV,
            height: CF.h.aN
          },
          hitBoxDimensions: {
            width: CF.h.RV + .4,
            height: CF.h.aN + .6
          },
          eyeHeight: CF.h.aN * CF.h.playerEyeToHeightRatio,
          rideHeight: CF.h.aN - .1,
          xh: .5,
          MbF: !1
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
          xh: .5,
          MbF: !1
        },
        "Bobino Musculino": {
          physicsBodyDimensions: {
            width: CF.h.RV,
            height: CF.h.aN
          },
          hitBoxDimensions: {
            width: CF.h.RV + .4,
            height: CF.h.aN + .6
          },
          eyeHeight: CF.h.aN * CF.h.playerEyeToHeightRatio,
          rideHeight: CF.h.aN - .1,
          xh: .5,
          MbF: !1
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
          xh: .5,
          MbF: !1
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
          xh: .5,
          MbF: !1
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
          xh: .5,
          MbF: !1
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
          xh: .5,
          MbF: !1
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
          xh: .5,
          MbF: !1
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
          xh: .5,
          MbF: !1
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
          xh: .5,
          MbF: !1
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
          xh: .5,
          MbF: !1
        },
        Zombie: {
          ...dF,
          defaultPose: "zombie"
        },
        Skeleton: dF,
        Mummy: {
          ...dF,
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
          xh: .5,
          MbF: !1
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
          xh: .5,
          MbF: !1
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
          xh: .5,
          MbF: !1
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
          xh: .5,
          MbF: !1
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
          xh: .5,
          MbF: !1
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
          xh: .5,
          MbF: !1
        },
        "Iron Guardian": bW,
        "Gold Guardian": bW,
        "Diamond Guardian": bW,
        "Moonstone Guardian": bW,
        "Iron Goofy Golem": bW,
        "Gold Goofy Golem": bW,
        "Diamond Goofy Golem": bW,
        "Moonstone Goofy Golem": bW,
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
          xh: .5,
          MbF: !1
        }
      };

    function QF(FF) {
      return EF[FF]
    }
  },
  35520: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => CF
    });
    const CF = {
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
  35983: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => bW,
      h: () => hF
    });
    var CF = SF(35977),
      AF = SF(271),
      uF = SF(1079);

    function hF(FF) {
      if ("xWF" in FF) return VF.createAnimationScript(FF);
      return new PF(FF).createAnimationScript()
    }

    function bW(FF, WF, SF, AF) {
      const uF = FF.xWF <= 0 ? 1 : WF + SF * Math.max(0, AF) / FF.xWF;
      return FF.ZFF === CF.h.LoopOnLastFrame ? uF % 1 : FF.ZFF === CF.h.NoLoop && uF >= 1 ? null : Math.min(1, uF)
    }
    class dF {
      createAnimationScript(FF) {
        const {
          xWF: WF,
          loop: SF,
          oFF: CF
        } = FF;
        return {
          xWF: Math.round(WF),
          ZFF: this.createLoopMode(null !== SF && void 0 !== SF && SF),
          oFF: this.createNodeSkeletonAnimationScript(null !== CF && void 0 !== CF ? CF : null)
        }
      }
      createLoopMode(FF) {
        switch (FF) {
          case !1:
            return CF.h.NoLoop;
          case !0:
            return CF.h.LoopOnLastFrame;
          case "hold-on-last-frame":
            return CF.h.HoldOnLastFrame
        }
        throw new Error(`Invalid loop mode schema: ${FF}`)
      }
      createNodeSkeletonAnimationScript(FF) {
        if (null === FF) return null;
        const WF = {};
        for (const SF in FF) {
          const CF = FF[SF];
          WF[SF] = this.createNodeAnimationScript(CF)
        }
        return WF
      }
      createNodeAnimationScript(FF) {
        const {
          timeline: WF
        } = FF, SF = WF.filter((FF => Number.isFinite(FF.timeFraction)));
        return SF.sort(((FF, WF) => FF.timeFraction - WF.timeFraction)), {
          rotation: this.createTimelineFromKeyframes(SF, "rotation", eF),
          position: this.createTimelineFromKeyframes(SF, "position", QF)
        }
      }
      createTimelineFromKeyframes(FF, WF, SF) {
        const CF = [];
        for (const dF of FF) {
          const FF = dF[WF];
          if (FF) {
            const WF = this.createAnimationFrameWithoutPrecomputes(dF.timeFraction, FF);
            RF(WF) && CF.push(WF)
          }
        }
        const AF = [];
        for (let dF = 0; dF < CF.length; dF++) {
          var uF, hF, bW;
          const FF = CF[dF],
            WF = null !== (uF = CF[dF - 1]) && void 0 !== uF ? uF : FF,
            PF = null !== (hF = CF[dF + 1]) && void 0 !== hF ? hF : FF,
            RF = null !== (bW = CF[dF + 2]) && void 0 !== bW ? bW : PF;
          AF.push({
            ...FF,
            ...SF(WF.post, WF.timeFraction, FF.post, FF.timeFraction, PF.pre, PF.timeFraction, RF.pre, RF.timeFraction)
          })
        }
        return AF
      }
      createAnimationFrameWithoutPrecomputes(FF, WF) {
        let SF, CF, AF = null;
        var uF;
        if ("object" === typeof WF && "point" in WF) AF = null !== (uF = WF.MFF) && void 0 !== uF ? uF : null, SF = WF.point, CF = WF.point;
        else if ("object" === typeof WF && "pre" in WF) {
          var hF;
          AF = null !== (hF = WF.MFF) && void 0 !== hF ? hF : null, SF = WF.pre, CF = WF.post
        } else SF = WF, CF = WF;
        return {
          timeFraction: FF,
          MFF: this.createLerpMode(AF),
          pre: SF,
          post: CF
        }
      }
      createLerpMode(FF) {
        return null === FF ? CF.f.Linear : dF.LERP_MODE_SCHEMA_MAPPING[FF]
      }
    }
    dF.LERP_MODE_SCHEMA_MAPPING = {
      linear: CF.f.Linear,
      "catmull-rom-spline": CF.f.CatmullRomSpline
    };
    class PF {
      constructor(FF) {
        this.animationSchema = FF
      }
      createAnimationScript() {
        const {
          animation_length: FF,
          loop: WF,
          bones: SF
        } = this.animationSchema;
        return {
          xWF: Math.round(1e3 * FF),
          ZFF: this.createLoopMode(null !== WF && void 0 !== WF && WF),
          oFF: this.createNodeSkeletonAnimationScript(null !== SF && void 0 !== SF ? SF : null)
        }
      }
      createLoopMode(FF) {
        switch (FF) {
          case !1:
            return CF.h.NoLoop;
          case !0:
            return CF.h.LoopOnLastFrame;
          case "hold_on_last_frame":
            return CF.h.HoldOnLastFrame
        }
        throw new Error(`Invalid Blockbench loop mode schema: ${FF}`)
      }
      createNodeSkeletonAnimationScript(FF) {
        if (null === FF) return null;
        const WF = {};
        for (const SF in FF) {
          const CF = FF[SF];
          WF[SF] = this.createNodeAnimationScript(CF)
        }
        return WF
      }
      createNodeAnimationScript(FF) {
        const {
          rotation: WF,
          position: SF
        } = FF;
        return {
          rotation: this.createAnimationTimeline(null !== WF && void 0 !== WF ? WF : null, gW, eF, !0),
          position: this.createAnimationTimeline(null !== SF && void 0 !== SF ? SF : null, TF, QF, !1)
        }
      }
      createAnimationTimeline(FF, WF, SF, CF) {
        if (null === FF) return [];
        if (Array.isArray(FF)) {
          FF = {
            "0.0": FF
          }
        }
        const AF = Object.entries(FF).map((FF => {
          let [SF, CF] = FF;
          const AF = Number(SF) / this.animationSchema.animation_length;
          return this.createAnimationFrameWithoutPrecomputes(AF, CF, WF)
        })).filter(RF);
        AF.sort(((FF, WF) => FF.timeFraction - WF.timeFraction)), CF && function(FF) {
          for (let WF = 1; WF < FF.length; WF++) {
            const SF = FF[WF - 1].post,
              CF = FF[WF],
              AF = aW(CF.pre),
              uF = aW(CF.post),
              hF = qW(SF, CF.pre);
            qW(SF, AF) < hF && (FF[WF] = {
              ...CF,
              pre: AF,
              post: uF
            })
          }
        }(AF);
        const uF = [];
        for (let PF = 0; PF < AF.length; PF++) {
          var hF, bW, dF;
          const FF = AF[PF],
            WF = null !== (hF = AF[PF - 1]) && void 0 !== hF ? hF : FF,
            CF = null !== (bW = AF[PF + 1]) && void 0 !== bW ? bW : FF,
            RF = null !== (dF = AF[PF + 2]) && void 0 !== dF ? dF : CF;
          uF.push({
            ...FF,
            ...SF(WF.post, WF.timeFraction, FF.post, FF.timeFraction, CF.pre, CF.timeFraction, RF.pre, RF.timeFraction)
          })
        }
        return uF
      }
      createAnimationFrameWithoutPrecomputes(FF, WF, SF) {
        let CF, AF, uF = null;
        if ("object" === typeof WF && "post" in WF) {
          var hF;
          uF = null !== (hF = WF.lerp_mode) && void 0 !== hF ? hF : null, AF = rW(WF.post, SF), CF = WF.pre ? rW(WF.pre, SF) : AF
        } else {
          const FF = rW(WF, SF);
          AF = FF, CF = FF
        }
        return {
          timeFraction: FF,
          MFF: this.createLerpMode(uF),
          pre: CF,
          post: AF
        }
      }
      createLerpMode(FF) {
        return null === FF ? CF.f.Linear : PF.LERP_MODE_SCHEMA_MAPPING[FF]
      }
    }

    function RF(FF) {
      return Number.isFinite(FF.timeFraction) && iW(FF.pre) && iW(FF.post)
    }

    function iW(FF) {
      return Number.isFinite(FF[0]) && Number.isFinite(FF[1]) && Number.isFinite(FF[2])
    }

    function eF(FF, WF, SF, CF, AF, uF, hF, bW) {
      const dF = uF - WF,
        PF = uF - CF,
        RF = bW - CF,
        iW = [null, null, null];
      for (let eF = 0; eF < iW.length; eF++) iW[eF] = EF(FF[eF], SF[eF], AF[eF], hF[eF], dF, RF);
      return {
        cWF: PF,
        GFF: iW
      }
    }

    function EF(FF, WF, SF, CF, uF, hF) {
      return {
        IFF: AF.c.computeShortestRotation(FF, SF) / uF,
        fFF: AF.c.computeShortestRotation(WF, CF) / hF,
        delta: AF.c.computeShortestRotation(WF, SF)
      }
    }

    function QF(FF, WF, SF, CF, AF, uF, hF, bW) {
      const dF = uF - WF,
        PF = uF - CF,
        RF = bW - CF,
        iW = [null, null, null];
      for (let eF = 0; eF < iW.length; eF++) iW[eF] = {
        IFF: (AF[eF] - FF[eF]) / dF,
        fFF: (hF[eF] - SF[eF]) / RF,
        delta: AF[eF] - SF[eF]
      };
      return {
        cWF: PF,
        GFF: iW
      }
    }

    function rW(FF, WF) {
      return null === WF ? FF : WF(FF)
    }

    function gW(FF) {
      const [WF, SF, CF] = FF, hF = -(0, uF.l)(WF), bW = -(0, uF.l)(SF), dF = (0, uF.l)(CF), PF = AF.c.quaternionFromEulerZYX(hF, bW, dF);
      return AF.c.eulerYXZFromQuaternion(PF)
    }
    PF.LERP_MODE_SCHEMA_MAPPING = {
      linear: CF.f.Linear,
      catmullrom: CF.f.CatmullRomSpline
    };
    const tW = 1 / 16;

    function TF(FF) {
      return [-FF[0] * tW, FF[1] * tW, FF[2] * tW]
    }

    function aW(FF) {
      const [WF, SF, CF] = FF;
      return [WF >= 0 ? Math.PI - WF : -Math.PI - WF, kW(SF + Math.PI), kW(CF + Math.PI)]
    }

    function kW(FF) {
      return AF.c.mod(FF + Math.PI, 2 * Math.PI) - Math.PI
    }

    function qW(FF, WF) {
      return Math.abs(AF.c.computeShortestRotation(FF[0], WF[0])) + Math.abs(AF.c.computeShortestRotation(FF[1], WF[1])) + Math.abs(AF.c.computeShortestRotation(FF[2], WF[2]))
    }
    const VF = new dF
  },
  36039: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => hF
    });
    var CF = SF(282),
      AF = SF.n(CF),
      uF = SF(1079);
    let hF;
    var bW, dF, PF, RF, iW, eF, EF, QF, rW;
    const gW = [2, 0, 1, "h", "c", "a", "i", 7, "e", 6, 4, 8, 255, "length", "undefined", void 0, "d", 3, 63, "fromCodePoint", 12, "push", 42, "b", 48, 118, 184, 91, 5, "f", 8191, 88, 13, 14, 113, "g", 249, 206, 109, 85, 79, "j", 27, 16, 512, 243, 182, 36, 102, 123, 127, 223, 242, 15, 221, 141, 9, 204, 200, 128, 121, 51, 86, 134, 1023, 31, 18, 32, 24, 10, 19, 64, 75, 65535, 136, 148, 149, 150, null, 144, 145, 146, 147, 151, 152, 153, 140, 142, 143, 159, 160, 164, 165, 166, 167, 28, 201, 187, "lu", 237, 177, 203, 108, 192, 248, 193, 213, 214, 224, "on"];

    function tW(...FF) {
      return FF[gW[13]] = gW[2], typeof bW[FF[gW[1]]] === gW[14] ? bW[FF[gW[1]]] = function(...FF) {
        for (ZF(FF[gW[13]] = gW[2], FF[gW[5]] = '2NbHdhl^4S&6pB$?K*tXC1:{3JR0z%m_jQyIV;Z,8U~>[|xAEsDwi7W=M)Og#+]<5Tq@9kvLeFr}PfuGY"/(cnoa!`.', FF[gW[0]] = "" + (FF[gW[1]] || ""), FF[gW[4]] = FF[gW[0]].length, FF[gW[10]] = [], FF[gW[8]] = gW[1], FF[gW[9]] = gW[1], FF[gW[7]] = -gW[2]), FF[gW[3]] = gW[1]; FF[gW[3]] < FF[gW[4]]; FF[gW[3]]++)
          if (FF[gW[6]] = FF[gW[5]].indexOf(FF[gW[0]][FF[gW[3]]]), FF[gW[6]] !== -gW[2])
            if (FF[gW[7]] < gW[1]) FF[gW[7]] = FF[gW[6]];
            else {
              ZF(FF[gW[7]] += FF[gW[6]] * gW[27], FF[gW[8]] |= FF[gW[7]] << FF[gW[9]], FF[gW[9]] += (FF[gW[7]] & gW[30]) > gW[31] ? gW[32] : gW[33]);
              do {
                ZF(FF[gW[10]].push(FF[gW[8]] & gW[12]), FF[gW[8]] >>= gW[11], FF[gW[9]] -= gW[11])
              } while (FF[gW[9]] > gW[7]);
              FF[gW[7]] = -gW[2]
            } return FF[gW[7]] > -gW[2] && FF[gW[10]].push((FF[gW[8]] | FF[gW[7]] << FF[gW[9]]) & gW[12]), TF(FF[gW[10]])
      }(dF[FF[gW[1]]]) : bW[FF[gW[1]]]
    }

    function TF(...FF) {
      return FF[gW[13]] = gW[2], typeof RF !== gW[14] && RF ? (new RF).decode(new iW(FF[gW[1]])) : typeof eF !== gW[14] && eF ? eF.from(FF[gW[1]]).toString("utf-8") : rW(FF[gW[1]])
    }

    function aW(FF, WF, SF) {
      if (FF === function(...FF) {
          return FF[gW[13]] = gW[2], typeof bW[FF[gW[1]]] === gW[14] ? bW[FF[gW[1]]] = function(...FF) {
            for (ZF(FF[gW[13]] = gW[2], FF[gW[24]] = 'ge3lTOQ_~zXP$0<G[9+S=fLM#8ZHFJbc*d1;Ny(Ktx%wv|qE!k]>57"pDVWIC6}auiBo^mr.Rn@s:AY)j{`,U?2/4&h', FF[gW[0]] = "" + (FF[gW[1]] || ""), FF[gW[17]] = FF[gW[0]].length, FF[gW[10]] = [], FF[gW[28]] = gW[1], FF[gW[29]] = gW[1], FF[gW[26]] = -gW[2]), FF[gW[3]] = gW[1]; FF[gW[3]] < FF[gW[17]]; FF[gW[3]]++)
              if (FF[gW[25]] = FF[gW[24]].indexOf(FF[gW[0]][FF[gW[3]]]), FF[gW[25]] !== -gW[2])
                if (FF[gW[26]] < gW[1]) FF[gW[26]] = FF[gW[25]];
                else {
                  ZF(FF[gW[26]] += FF[gW[25]] * gW[27], FF[gW[28]] |= FF[gW[26]] << FF[gW[29]], FF[gW[29]] += (FF[gW[26]] & gW[30]) > gW[31] ? gW[32] : gW[33]);
                  do {
                    ZF(FF[gW[10]].push(FF[gW[28]] & gW[12]), FF[gW[28]] >>= gW[11], FF[gW[29]] -= gW[11])
                  } while (FF[gW[29]] > gW[7]);
                  FF[gW[26]] = -gW[2]
                } return FF[gW[26]] > -gW[2] && FF[gW[10]].push((FF[gW[28]] | FF[gW[26]] << FF[gW[29]]) & gW[12]), TF(FF[gW[10]])
          }(dF[FF[gW[1]]]) : bW[FF[gW[1]]]
        }(112)) return WF + SF
    }

    function kW() {}
    ZF(bW = {}, dF = ['9zGd$"NUN#6}_g=yzWbj3uep>]Dk:Z5VRr1=xs=<ZO`VyB&C', "h)Nm183b", "+Cyj[<2", 'iW97w}(UvO#Y"VVmJT!l;AYiQt', "MSh^Dw?B3Oi3+Vb3DSU}v7]xJ*RkiKdm;RmdI87B9BlyqBy3y8(%f(8tKqw", ">w|=JuO3(55i7epCW$Nl~9R4YS{&!ADyP;mzJA@kl", "oE.fhycyL5<vwZb;/y9rZ/=Ui)AFN", '<]t0D}d~|7{Go$eJB8#%zY.8f7&m"Y]%', "JW2mcPfN", "qELl3)tiz1t};e,J*N", 'M9v=dyC5Eq@fRR"RQy1^xY+U/#DzA/^XC8}f}ZSBF*I', "i{AS+yTN1W<xYIg{]g7r2x;B}]FsLv,_89xSQsL^$?%]5($C.gm=1LEm^", "[;UWPrYx]68F<ZT3Z>^Q})xxt#33806", "nJ3s]rTBbSRBthb{x9d=!QDx#MXH7Ki00;?Q2V2", 'p{@jic:x^Onr9?530T@%X"%79)OiFd0*kEi7|M+Ug*:G^R[,m#H', "=$2SRi~pZ5nr_$(8[w,d=<Mmx7}?FE+{vWQWWfNBZB@z,Zqm?x0&=,2", 'u]w%##<ww5$}yJG,uMdfK"TNjS8', "A8yegv%}.C3TvJ2mr].f.nB7ft", "VlU0QWcy*t>q];pR{Rx=]Oa%Kp`X2H@V", "C{<sRF^Uxq)F>(ltBjYl2G2", 'v{3lzIuy/WXe"d"yDTXjI+?k@SLJ6/b3pLb', '3Chr4EDOnWsY@Ov3hLWiG"F^R*9FWBBX/|C^WemiO]"6*K2t.M[&,A(BB1', "nCVr}]*k]tY?(Z2>s_dr%FAN", "$d(h$)c3+7qfgZWU8r7=V+`^2)[P}$3%?#5s+e[bb)+se(ItBN", "5FDe1k;I|4kfgvoK}yX%Rgd3(XiY20T~:x^W:PSB0C%OS#ImURLsnPS7H", "]Tbw)f4i7OSHgOJUCw*ld]UN*qF@HLg%R98Wa)I%BqrI8(O~7{=SHx2", "TE<sbeZp^", '"EaSaQ/YI)y&JVkX/J,P><Eb', "d>^Q/(k^}T9Y=H", "Z>97Y(~x(#?}AvV_RjjFh#yV%t5I)d#%}M(h", "Nq)j.Zxx4BgfdLK,g$=i(D?^}Tpej0Xydjc7E,d5{B", ">pvz|<tb.6%PEHpJ,9<d", ';wr%"ZxOh', "jw$QpremdW!@hEVtb<k_]OWY%1`5)dWU]*nD~FhBG7b;</|,$Sx^L7!p;5Ek2", ".yz&!LZ5EpkYcAz~Hj@j9E{I2SA14H", 'sLdruV.pYSHmsdK0&%.jN"Py,C;3n3t,L;PrBD~3E7kq."MzOTb', "%%kR2#t4{5A]pHB,BN", "s;fDP(rp9SjeC0B0YwV%!)wNH#ye9d5%", "2Srw)v&mg$g1@OaIjW@D5O+%YSPrwHs,N<B&swoOspU^nd", 'iC5WZn&VE?Yva?]3*#alfkH}^BC}N+<~^)+z8/"%(X', '1W{PfV"wx6XGed#*l#H%:i1Au6VeYYT_[8#&', 'MT"W$=DOXX@F)3aUnTud],aNWX.@~Rg~MW.w~F`Ih5LIUeg~<$ESDsrm")D', "OH?Sc(zt57K}qsY0qE8FJi=B57o)UE_%O8w4veAUV)d{[0H*RCkRX", "~;Jm}Dmru4rFaIz~hrAF:)YlXSLxYIJ%Y]+P$r]o/#s*;d", 'pr;^MwmVV5"<pgC0U]@4ivObcXTY9(Q{Cl97YDj3WOQysEa:&sH&[W{N', "sR|r?Z_%]M@vN", "{rUmCLtb]7Q", "$d;_Dx:OTtXmVH.UGgLF~Ifw:5NQ($Q*1lq4IW9mVSNWp,PZ;9d=vE|N", ",W}%~;N}]MGNuJaUew9DzY8VE1[&VH@tkEKSt", "$#?SC]k<qW<Ix;8Z#El^r),^m??*NE_{O*%=Y=8p[g;yfE2~HWGWA;=A>gvvN", 'RRHe^"7N|4A&fdq_>]bwoL~mVS>]IbK,ngz&;n.yRC6e93wU8W]Sey2', "Nss4#7$i2SQ", '=l4Q##,XEth+KHmV{W~fv=MOn5=6LR8Rq~C%@e%"NS7iQKB', "9Wi_`FirS*XG?Hb_wLDf2eAUkOeF)ElZf]N", '>*w4H7zrC5"f?(:Up)Sw8I*B<?', 'Z{^Se#[O=B_kk"@mC8x=7MQ)9XU*AOw0L_b', "URHhLrVV}4%P4KBZ)H&eKLa%m1sqfEE0^W(R}kdmkW6;GZS", 'J#n^}k=NaCP7c?R~}|;=##E8"#ev0HMU)T7P#OW81B8', "?Wp^wxxOgCdGoR/,XN", 'f]aPoumtb#BOy+p,"Tkzy+{NE?aVl+IJnE.7Nx9pV5/%M0fRQEb', '[]R%#eMOkWa#hK53ypV%wwD8cX"x+V|,)*WzF)qOb?LY%s5~Sd3S$)&mH', "^<~j#cjiG4!Xc(izqHq4", "I;m=DwitrC&Tsd$Xo$X%!uZ3zg(:|K6", "!,?PgyXX:O8Y:+aIb>Pr=xdVVBEdDBhZURjSk7[3;XT4i?!:N1YWj9DxaC", "PMvFqrem(SW", 'H%Oj!g){5<,^!(5mtwSjprNX3CW^Ok;X1RTl<,l~}].V~B",4L%PK', "eW^WU},Xl", "g9@RI8*Ud", "(E`jXu$5jt<v#d_m=2", "Gwm=R)!xN)vfqJf0%8#%Z/PpC)[1)E~R=WH", "LSwj_i9l~6S0kd", "*W!lDcZOaB7<Sc^t194QmWUA)]p9$$SJU%[f$]Pr6T=<4H#m/T=zEcakcWCEN", ';>v_7f/p}6j$:hYRvSNwr"XNj1buN', "%#YSgx.xxgp9>L.U08XfNe?^!T#MN", "bS7_QF!iU]D$xs2{Kpyj0F{%rTx3Ten8e]ewznF^Bt7J1Ei0_{2W2oop+$y", "`ww%?PvxWXsPZRLt6{tw.Q`N[g*3jg@*O9De2#:x6*(fz(.V!2", "sySwyIMoS={B?/6X_N", "`~=PJivpS=/h+Vd_tN", "3Lk^6EQX6T3", "U]!wjA[m^", "=g=sJiJ%%t8", "K;]^E,9xQW&KN", "+{cDwwXAOT9qJeXU9]d&#e%X)]a:[geRrM|&", "XWk=lDemTp>Y@HYRT]?iM/d5@XT$N", "r~_z]ciOf65$C(2V5{:P)wHJP*3TBcvJ695wO7TU3T${D;kJZ9b%z", '^%&e!A0kz$x3TeN;zR(4G"xbM*ig1VpZ&)/jm+R4B$]<D;>XVw*01LCiZX', "Ul_s(DNUp*qY>v<;#TH", "<91_rrfUwSvF!EUJ|wNehe_)iWgs<$!:G]$P$Z?B%qZ&<Z2>N?eW3", "IENenQ.3.]fN{Zc:h<H&m", ".7DjVMW8oO8I_b@3cHbe)w*J`$ggXb", "bs2W0n)Ux6S9%+y3", "Q#H&}kk^J*n7)#etXxJlW,8i$qvYze_~SdlPj92", "B>;=;;IB*Wp{eH", "%95FRZ2", "YgrfA}`NSC9IN", "!|AsX)WxJCnfaL9mx)kd3Duy<M%CXb", "YvOjJg[m#ThAcA6,zN", "xCaiZn%X}$UFQ+b3Rxtfmnk},B<11E!I0WNe@EWb", "X)vP!iFB0g,F_(h;<WwrnL6Jst=Y?Lj~c~YSYP)IcXj_B#C0tN", "Ywv^q]Po4O20XDK0.MO4W7e3^", "O8#7qx:3lB*}.s)Ue_>%*)l3,5sqHR5V`E}jdEoO:BtlN", "]_js1ipt>MS;{Zy;q2", 'Vr&j"("I|1}ME0b;HdjW[/Vt&gqq>/8tH%~0u=={xq(rP#HJH11r/uI"@SKyN', ":WGPyu.iNSff7+qVr_%&<GbYnX.N:;]VH%/4[}nB?#.r2", "d)xP%F`{q#a<?$v3DHX%5Vt5d", "*lKl/ZVV()|=VAlJ>_?Pv]I%ggx_)dN_)9Q0Dva{p*DF;sF_jH&jhr{7K?I", "){d%:)jb2?{Tz(g{S9LP.|`)6g+NI$78mT/4),4ON#vN4H9;i2", "19i^yssI(X+6EHF,4<o^", '[l,d"LJX?q:w)E!K_HPrnn:54&<q%e,XDSslw}%%tpPfE?N3,C+=#vqll', 'wR"l`g4xX5dyUeN>UlJ0&#utOT0&cHg%Nj*uM,CV"WWP"kf,', "D_*ln(IAy?wt1e3znEAs~Mrty?gYN", '1jhr@Gjp7OsP6/9ZFM=i$ZBJj)R3"d{8+L3W$)voNS]Na$"0y9_d', "Ft9sj:#3", 'qwZ_f"Cb', "?2)Ktyqz", "r7t;", 'b>Wm?DSF}H@",.', "lgWmy!}$Q/HSuU", "ppoAy!Nn>gd]9A", "hyWhesd[Zu)J1U", "1V,]QJ}$Ngd/.U", "1QwA*L[#gQK", "jv|UR~60", "3)tme|QO", "B_DBnl@O", "qv;dJ", "B_DB!}zR", "kxtrA", "FY]{R,X9RoN;%,pl{i{T", ",6%THg.W!g{7jPAUddCf", "#[.Z!+<+@BSe&lZ9Qg7c", "+eI0^U(uCfL}z:$yaFz=", "2C1u^QD.", "{_8;", "AK1;%]}", "{Cd9", "^z_X(;b", "xV&Dr^Of", "sVWTZ+Of", "VVED", "xV#[h?2f", "dVi^O^Cf", "ma#[):3f", "LK1[C", "xV#[O^Cf", "ma&Dsw1f", "2g}PL+xf", "wm}LL:2f", ";QNL%[xf", "BQ+^[0Cf", "Ta[u/#zf", "tgWTvwCf", "Lc+^([5j", ">JJLS", "]V&D", "EV#u.", "gKtL]", "TUyQ&3!f", "N($XS", "tgQL@6rf", "LXQP]+b", "xV#[O^a]B.", "g!3LT;F.~1", "vO)W00$<B.", "tgQLS:sf", "ma}L)^Kj", "Ta*LIwUf", "]c+^([b", "O[D#XB]1", "$=ma0r41", '},Ua"y>4H%!SW]?RQYEGnnOfA[Km<b?RA|8kAQ}~gFmt^uQ,b,;#G', '},Ua"y>4H%!SW]?RQYEGnnOfA[Km<b?RSD.k::{1Q"!/`8Wpdx', "~7WQ!:GklUf%a/;==7DEtv!F0i?1{!<tsCH1d", "J%;F", "#{0C", "qYFk", "3lhG", "NwFk", "oXY<`", "(*~G", "&@AC", "i(*P", "ZV1[:0gf", "SP4hu_(V", "E.79KQE8", "CAxaRgk;", "#40v5_&;", "lxp9=4d;", 'O"0]&)hD', "c$bm)ziD", "$?0vfof<jeq", "Ht@z}V$XHjs", "f7l.>=U@*Ps", "MZV]+(AN8h/", "nU[l(B$tw~U", "(=8u(y9Q4qs", "qt^l8|9A2", "}36wGETDrS5l4Z@wqt=]/p!N$Mas1<L>71e^F,0|aMPP1<hWbf<9L(Aedf<{;", "*;ZPx)Eh[MKT%T]$;ZQ]Jpc?U[?U~XZ`!1e^t(aB]xX#ZXGWYZcz<B`KLPpE8", 'L1e^R"ahtP;dWXS$aaC]B|QNJP4U&Xi~9aC]*ToNu%?U~X8ho1U9d4D?O.bI8', "jeAD!>4f", "sO;^00Of", "*X{P", "Rg$X", "BKQLR#zf", "Nu{P", "sK{L?^1f", "Kc$@Kwrf", "%BCDw0Cf", "yz;iIwb", "zRwNTQdX", "03wN_Y?X", "fC`4j37q~@^1_KmonchA99<&yOLMz)moyt0synfeHkMFY!nC)C|?A", "rUn@[K^xXPg:hA?QI_]F))p.!&due4?Q:<>aCCzZI[gT9+h/6w", "z2.9{~h^VA|jt$dll2IckU{B>Opf[{ikqeSfX", "!jdB", "]lxNda2X", "&CxT", ",;wN1pyX", "mvzek:+", "jtIeGpEX", "#;xNFYBX", "HCwTJR+", "SdkC]rab", "pw}f1", "6Q+^[0Cf", "sK{L*[kf"]), ZF(PF = function() {
      var FF, WF, SF, CF = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }];
      ZF(FF = void 0, WF = []);
      try {
        ZF(FF = Object, WF[gW[21]]("".__proto__.constructor.name))
      } catch (iW) {}
      FF: for (SF = gW[1]; SF < CF[gW[13]]; SF++) try {
        var AF;
        for (FF = CF[SF](), AF = gW[1]; AF < WF[gW[13]]; AF++)
          if (typeof FF[WF[AF]] === gW[14]) continue FF;
        return FF
      } catch (iW) {}
      return FF || this
    }() || {}, RF = PF.TextDecoder, iW = PF.Uint8Array, eF = PF.NC, EF = PF.String || String, QF = PF.Array || Array, rW = function(...FF) {
      return ZF(FF[gW[13]] = gW[1], FF[-gW[22]] = new QF(gW[59]), FF[gW[23]] = EF[gW[19]] || EF.fromCharCode, FF[gW[4]] = []),
        function(...WF) {
          for (ZF(WF[gW[13]] = gW[2], WF[gW[5]] = gW[15], WF[gW[0]] = gW[15], WF[gW[17]] = WF[gW[1]][gW[13]], FF[gW[4]][gW[13]] = gW[1]), WF[gW[16]] = gW[1]; WF[gW[16]] < WF[gW[17]];) ZF(WF[gW[0]] = WF[gW[1]][WF[gW[16]]++], WF[gW[0]] <= gW[50] ? WF[gW[5]] = WF[gW[0]] : WF[gW[0]] <= gW[51] ? WF[gW[5]] = (WF[gW[0]] & gW[65]) << gW[9] | WF[gW[1]][WF[gW[16]]++] & gW[18] : WF[gW[0]] <= 239 ? WF[gW[5]] = (WF[gW[0]] & gW[53]) << gW[20] | (WF[gW[1]][WF[gW[16]]++] & gW[18]) << gW[9] | WF[gW[1]][WF[gW[16]]++] & gW[18] : EF[gW[19]] ? WF[gW[5]] = (WF[gW[0]] & gW[7]) << gW[66] | (WF[gW[1]][WF[gW[16]]++] & gW[18]) << gW[20] | (WF[gW[1]][WF[gW[16]]++] & gW[18]) << gW[9] | WF[gW[1]][WF[gW[16]]++] & gW[18] : (WF[gW[5]] = gW[18], WF[gW[16]] += gW[17]), FF[gW[4]][gW[21]](FF[-gW[22]][WF[gW[5]]] || (FF[-gW[22]][WF[gW[5]]] = FF[gW[23]](WF[gW[5]]))));
          return FF[gW[4]].join("")
        }
    }());
    const qW = AF()[tW(gW[34])](),
      VF = AF()[tW(gW[34])](),
      NF = AF()[tW(gW[34])](),
      DF = AF()[tW(gW[34])](),
      LF = AF()[tW(gW[34])](),
      mW = AF()[tW(gW[34])](),
      OF = AF()[tW(gW[34])](),
      xW = (...FF) => {
        function WF(...FF) {
          return FF[gW[13]] = gW[2], typeof bW[FF[gW[1]]] === gW[14] ? bW[FF[gW[1]]] = function(...FF) {
            for (ZF(FF[gW[13]] = gW[2], FF[gW[2]] = '}z.>m[7l;K9,Fx(f`cHI*d~)EVP{v3%Lu5DoT2G:S&/Cwjy^B4e1$"ga?ZX6=U<rAJYtQ@R]i|_kNphWMbs8+q#0!nO', FF[gW[23]] = "" + (FF[gW[1]] || ""), FF[gW[17]] = FF[gW[23]].length, FF[gW[16]] = [], FF[gW[28]] = gW[1], FF[gW[9]] = gW[1], FF[gW[35]] = -gW[2]), FF[gW[3]] = gW[1]; FF[gW[3]] < FF[gW[17]]; FF[gW[3]]++)
              if (FF[gW[6]] = FF[gW[2]].indexOf(FF[gW[23]][FF[gW[3]]]), FF[gW[6]] !== -gW[2])
                if (FF[gW[35]] < gW[1]) FF[gW[35]] = FF[gW[6]];
                else {
                  ZF(FF[gW[35]] += FF[gW[6]] * gW[27], FF[gW[28]] |= FF[gW[35]] << FF[gW[9]], FF[gW[9]] += (FF[gW[35]] & gW[30]) > gW[31] ? gW[32] : gW[33]);
                  do {
                    ZF(FF[gW[16]].push(FF[gW[28]] & gW[12]), FF[gW[28]] >>= gW[11], FF[gW[9]] -= gW[11])
                  } while (FF[gW[9]] > gW[7]);
                  FF[gW[35]] = -gW[2]
                } return FF[gW[35]] > -gW[2] && FF[gW[16]].push((FF[gW[28]] | FF[gW[35]] << FF[gW[9]]) & gW[12]), TF(FF[gW[16]])
          }(dF[FF[gW[1]]]) : bW[FF[gW[1]]]
        }
        FF[gW[13]] = gW[17], WF(114) in kW && function(...FF) {
          ZF(FF[gW[13]] = gW[1], FF[gW[5]] = function() {
            var FF, WF, SF = gW[1];

            function CF(FF) {
              return iW(PF(QF(FF)))
            }

            function AF(...FF) {
              return FF[gW[13]] = gW[0], iW(RF(QF(FF[gW[1]]), QF(FF[gW[2]])))
            }

            function uF(...FF) {
              return FF[gW[13]] = gW[0], eF(RF(QF(FF[gW[1]]), QF(FF[gW[2]])))
            }

            function hF(...FF) {
              return FF[gW[13]] = gW[17], EF(RF(QF(FF[gW[1]]), QF(FF[gW[2]])), FF[gW[0]])
            }

            function PF(...FF) {
              return FF[gW[13]] = gW[2], tW(xW(rW(FF[gW[1]]), FF[gW[1]].length * gW[11]))
            }

            function RF(FF, WF) {
              var SF, CF, AF;

              function uF(...FF) {
                for (ZF(FF[gW[13]] = gW[2], FF[gW[5]] = 'f!0%"/1EA<;:KgF^}|c7B[$.6qQ]jkxu(G+2=m,?vi>_&Md3H4O`w8X5s9)rhoCy#nDzVNpa*{@U~TSZRLPWJeIltYb', FF[gW[23]] = "" + (FF[gW[1]] || ""), FF[gW[17]] = FF[gW[23]].length, FF[gW[10]] = [], FF[gW[11]] = gW[1], FF[gW[9]] = gW[1], FF[gW[42]] = -gW[2]), FF[gW[40]] = gW[1]; FF[gW[40]] < FF[gW[17]]; FF[gW[40]]++)
                  if (FF[gW[41]] = FF[gW[5]].indexOf(FF[gW[23]][FF[gW[40]]]), FF[gW[41]] !== -gW[2])
                    if (FF[gW[42]] < gW[1]) FF[gW[42]] = FF[gW[41]];
                    else {
                      ZF(FF[gW[42]] += FF[gW[41]] * gW[27], FF[gW[11]] |= FF[gW[42]] << FF[gW[9]], FF[gW[9]] += (FF[gW[42]] & gW[30]) > gW[31] ? gW[32] : gW[33]);
                      do {
                        ZF(FF[gW[10]].push(FF[gW[11]] & gW[12]), FF[gW[11]] >>= gW[11], FF[gW[9]] -= gW[11])
                      } while (FF[gW[9]] > gW[7]);
                      FF[gW[42]] = -gW[2]
                    } return FF[gW[42]] > -gW[2] && FF[gW[10]].push((FF[gW[11]] | FF[gW[42]] << FF[gW[9]]) & gW[12]), TF(FF[gW[10]])
              }

              function hF(...FF) {
                return FF[gW[13]] = gW[2], typeof bW[FF[gW[1]]] === gW[14] ? bW[FF[gW[1]]] = uF(dF[FF[gW[1]]]) : bW[FF[gW[1]]]
              }(SF = rW(FF)).length > gW[43] && (SF = xW(SF, FF.length * gW[11]));
              var PF = Array(gW[43]),
                RF = Array(gW[43]);
              for (CF = gW[1]; CF < gW[43]; CF++) ZF(PF[CF] = 909522486 ^ SF[CF], RF[CF] = 1549556828 ^ SF[CF]);
              return AF = xW(PF.concat(rW(WF)), gW[44] + WF.length * gW[11]), tW(xW(RF.concat(AF), aW(hF(122), gW[44], 256)))
            }

            function iW(...FF) {
              function WF(...FF) {
                for (ZF(FF[gW[13]] = gW[2], FF[-gW[45]] = 'YOR9<%76c;+vxXzQyJs[$81(=A/B:?2k3N!Z|4CiD@5.El^#),jd&rM]P`LoU0{we_*~}u>mS"fhpTFnHWGVtIbagKq', FF[-gW[36]] = "" + (FF[gW[1]] || ""), FF[gW[4]] = FF[-gW[36]].length, FF[gW[37]] = [], FF[gW[8]] = gW[1], FF[-gW[48]] = gW[1], FF[gW[47]] = -gW[2]), FF[gW[3]] = gW[1]; FF[gW[3]] < FF[gW[4]]; FF[gW[3]]++)
                  if (FF[-gW[46]] = FF[-gW[45]].indexOf(FF[-gW[36]][FF[gW[3]]]), FF[-gW[46]] !== -gW[2])
                    if (FF[gW[47]] < gW[1]) FF[gW[47]] = FF[-gW[46]];
                    else {
                      ZF(FF[gW[47]] += FF[-gW[46]] * gW[27], FF[gW[8]] |= FF[gW[47]] << FF[-gW[48]], FF[-gW[48]] += (FF[gW[47]] & gW[30]) > gW[31] ? gW[32] : gW[33]);
                      do {
                        ZF(FF[gW[37]].push(FF[gW[8]] & gW[12]), FF[gW[8]] >>= gW[11], FF[-gW[48]] -= gW[11])
                      } while (FF[-gW[48]] > gW[7]);
                      FF[gW[47]] = -gW[2]
                    } return FF[gW[47]] > -gW[2] && FF[gW[37]].push((FF[gW[8]] | FF[gW[47]] << FF[-gW[48]]) & gW[12]), TF(FF[gW[37]])
              }

              function CF(...FF) {
                return FF[gW[13]] = gW[2], typeof bW[FF[gW[1]]] === gW[14] ? bW[FF[gW[1]]] = WF(dF[FF[gW[1]]]) : bW[FF[gW[1]]]
              }
              for (FF[gW[13]] = gW[2], ZF(FF[gW[5]] = SF ? CF(gW[49]) + CF(124) + CF(125) : CF(gW[49]) + CF(126) + CF(gW[50]), FF[-gW[51]] = "", FF[-gW[52]] = gW[15]), FF[gW[16]] = gW[1]; FF[gW[16]] < FF[gW[1]].length; FF[gW[16]]++) ZF(FF[-gW[52]] = FF[gW[1]].charCodeAt(FF[gW[16]]), FF[-gW[51]] += FF[gW[5]].charAt(FF[-gW[52]] >>> gW[10] & gW[53]) + FF[gW[5]].charAt(FF[-gW[52]] & gW[53]));
              return FF[-gW[51]]
            }

            function eF(...WF) {
              function SF(...FF) {
                for (ZF(FF[gW[13]] = gW[2], FF[gW[2]] = 'CHKv={YT^fcSuz;dpstykO5[|.Pl"%(FQwUn`7@19WNi&m><,!x6a?Z08o#~g_IGBRq4e$2jDV}+Lr)3/:J]XbAhEM*', FF[gW[23]] = "" + (FF[gW[1]] || ""), FF[-gW[55]] = FF[gW[23]].length, FF[gW[10]] = [], FF[gW[8]] = gW[1], FF[-gW[58]] = gW[1], FF[-gW[57]] = -gW[2]), FF[-gW[54]] = gW[1]; FF[-gW[54]] < FF[-gW[55]]; FF[-gW[54]]++)
                  if (FF[gW[56]] = FF[gW[2]].indexOf(FF[gW[23]][FF[-gW[54]]]), FF[gW[56]] !== -gW[2])
                    if (FF[-gW[57]] < gW[1]) FF[-gW[57]] = FF[gW[56]];
                    else {
                      ZF(FF[-gW[57]] += FF[gW[56]] * gW[27], FF[gW[8]] |= FF[-gW[57]] << FF[-gW[58]], FF[-gW[58]] += (FF[-gW[57]] & gW[30]) > gW[31] ? gW[32] : gW[33]);
                      do {
                        ZF(FF[gW[10]].push(FF[gW[8]] & gW[12]), FF[gW[8]] >>= gW[11], FF[-gW[58]] -= gW[11])
                      } while (FF[-gW[58]] > gW[7]);
                      FF[-gW[57]] = -gW[2]
                    } return FF[-gW[57]] > -gW[2] && FF[gW[10]].push((FF[gW[8]] | FF[-gW[57]] << FF[-gW[58]]) & gW[12]), TF(FF[gW[10]])
              }

              function CF(...FF) {
                return FF[gW[13]] = gW[2], typeof bW[FF[gW[1]]] === gW[14] ? bW[FF[gW[1]]] = SF(dF[FF[gW[1]]]) : bW[FF[gW[1]]]
              }
              for (WF[gW[13]] = gW[2], ZF(WF[gW[61]] = CF(gW[59]) + CF(129) + CF(130) + CF(131), WF[gW[60]] = "", WF[gW[17]] = WF[gW[1]].length), WF[gW[16]] = gW[1]; WF[gW[16]] < WF[gW[17]]; WF[gW[16]] += gW[17])
                for (WF[gW[8]] = WF[gW[1]].charCodeAt(WF[gW[16]]) << gW[43] | (WF[gW[16]] + gW[2] < WF[gW[17]] ? WF[gW[1]].charCodeAt(WF[gW[16]] + gW[2]) << gW[11] : gW[1]) | (WF[gW[16]] + gW[0] < WF[gW[17]] ? WF[gW[1]].charCodeAt(WF[gW[16]] + gW[0]) : gW[1]), WF[gW[29]] = gW[1]; WF[gW[29]] < gW[10]; WF[gW[29]]++) WF[gW[16]] * gW[11] + WF[gW[29]] * gW[9] > WF[gW[1]].length * gW[11] ? WF[gW[60]] += FF : WF[gW[60]] += WF[gW[61]].charAt(WF[gW[8]] >>> gW[9] * (gW[17] - WF[gW[29]]) & gW[18]);
              return WF[gW[60]]
            }

            function EF(...FF) {
              var WF, SF, CF, AF;
              for (ZF(FF[gW[13]] = gW[0], FF[gW[5]] = FF[gW[2]].length, FF[-gW[63]] = Array()), FF[-gW[62]] = Array(Math.ceil(FF[gW[1]].length / gW[0])), WF = gW[1]; WF < FF[-gW[62]].length; WF++) FF[-gW[62]][WF] = FF[gW[1]].charCodeAt(WF * gW[0]) << gW[11] | FF[gW[1]].charCodeAt(WF * gW[0] + gW[2]);
              for (; FF[-gW[62]].length > gW[1];) {
                for (ZF(AF = Array(), CF = gW[1]), WF = gW[1]; WF < FF[-gW[62]].length; WF++) ZF(CF = (CF << gW[43]) + FF[-gW[62]][WF], SF = Math.floor(CF / FF[gW[5]]), CF -= SF * FF[gW[5]]), (AF.length > gW[1] || SF > gW[1]) && (AF[AF.length] = SF);
                ZF(FF[-gW[63]][FF[-gW[63]].length] = CF, FF[-gW[62]] = AF)
              }
              for (FF[gW[16]] = "", WF = FF[-gW[63]].length - gW[2]; WF >= gW[1]; WF--) FF[gW[16]] += FF[gW[2]].charAt(FF[-gW[63]][WF]);
              for (FF[gW[8]] = Math.ceil(FF[gW[1]].length * gW[11] / (Math.log(FF[gW[2]].length) / Math.log(gW[0]))), WF = FF[gW[16]].length; WF < FF[gW[8]]; WF++) FF[gW[16]] = FF[gW[2]][gW[1]] + FF[gW[16]];
              return FF[gW[16]]
            }

            function QF(FF) {
              var WF, SF, CF, AF = "";
              for (WF = -gW[2]; ++WF < FF.length;) ZF(SF = FF.charCodeAt(WF), CF = WF + gW[2] < FF.length ? FF.charCodeAt(WF + gW[2]) : gW[1]), 55296 <= SF && SF <= 56319 && 56320 <= CF && CF <= 57343 && ZF(SF = 65536 + ((SF & gW[64]) << gW[69]) + (CF & gW[64]), WF++), SF <= gW[50] ? AF += String.fromCharCode(SF) : SF <= 2047 ? AF += String.fromCharCode(gW[103] | SF >>> gW[9] & gW[65], gW[59] | SF & gW[18]) : SF <= gW[73] ? AF += String.fromCharCode(gW[108] | SF >>> gW[20] & gW[53], gW[59] | SF >>> gW[9] & gW[18], gW[59] | SF & gW[18]) : SF <= 2097151 && (AF += String.fromCharCode(240 | SF >>> gW[66] & gW[7], gW[59] | SF >>> gW[20] & gW[18], gW[59] | SF >>> gW[9] & gW[18], gW[59] | SF & gW[18]));
              return AF
            }

            function rW(...FF) {
              for (ZF(FF[gW[13]] = gW[2], FF[gW[58]] = Array(FF[gW[1]].length >> gW[0])), FF[gW[23]] = gW[1]; FF[gW[23]] < FF[gW[58]].length; FF[gW[23]]++) FF[gW[58]][FF[gW[23]]] = gW[1];
              for (FF[gW[23]] = gW[1]; FF[gW[23]] < FF[gW[1]].length * gW[11]; FF[gW[23]] += gW[11]) FF[gW[58]][FF[gW[23]] >> gW[28]] |= (FF[gW[1]].charCodeAt(FF[gW[23]] / gW[11]) & gW[12]) << gW[68] - FF[gW[23]] % gW[67];
              return FF[gW[58]]
            }

            function tW(...FF) {
              for (ZF(FF[gW[13]] = gW[2], FF[gW[5]] = ""), FF[gW[0]] = gW[1]; FF[gW[0]] < FF[gW[1]].length * gW[67]; FF[gW[0]] += gW[11]) FF[gW[5]] += String.fromCharCode(FF[gW[1]][FF[gW[0]] >> gW[28]] >>> gW[68] - FF[gW[0]] % gW[67] & gW[12]);
              return FF[gW[5]]
            }

            function kW(FF, WF) {
              return FF >>> WF | FF << gW[67] - WF
            }

            function qW(FF, WF) {
              return FF >>> WF
            }

            function VF(...FF) {
              return FF[gW[13]] = gW[17], FF[gW[1]] & FF[gW[2]] ^ ~FF[gW[1]] & FF[gW[0]]
            }

            function NF(FF, WF, SF) {
              return FF & WF ^ FF & SF ^ WF & SF
            }

            function DF(...FF) {
              return FF[gW[13]] = gW[2], kW(FF[gW[1]], gW[0]) ^ kW(FF[gW[1]], gW[32]) ^ kW(FF[gW[1]], 22)
            }

            function LF(...FF) {
              return FF[gW[13]] = gW[2], kW(FF[gW[1]], gW[9]) ^ kW(FF[gW[1]], 11) ^ kW(FF[gW[1]], 25)
            }

            function mW(FF) {
              return kW(FF, gW[7]) ^ kW(FF, gW[66]) ^ qW(FF, gW[17])
            }

            function OF(...FF) {
              return FF[gW[13]] = gW[2], kW(FF[gW[1]], 17) ^ kW(FF[gW[1]], gW[70]) ^ qW(FF[gW[1]], gW[69])
            }

            function xW(...FF) {
              var SF, CF, AF, uF, hF, bW, dF, PF, RF, iW, eF, EF;
              for (ZF(FF[gW[13]] = gW[0], FF[gW[5]] = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225), FF[gW[72]] = new Array(gW[71])), ZF(FF[gW[1]][FF[gW[2]] >> gW[28]] |= gW[59] << gW[68] - FF[gW[2]] % gW[67], FF[gW[1]][(FF[gW[2]] + gW[71] >> gW[56] << gW[10]) + gW[53]] = FF[gW[2]]), RF = gW[1]; RF < FF[gW[1]].length; RF += gW[43]) {
                for (ZF(SF = FF[gW[5]][gW[1]], CF = FF[gW[5]][gW[2]], AF = FF[gW[5]][gW[0]], uF = FF[gW[5]][gW[17]], hF = FF[gW[5]][gW[10]], bW = FF[gW[5]][gW[28]], dF = FF[gW[5]][gW[9]], PF = FF[gW[5]][gW[7]]), iW = gW[1]; iW < gW[71]; iW++) ZF(FF[gW[72]][iW] = iW < gW[43] ? FF[gW[1]][iW + RF] : oF(oF(oF(OF(FF[gW[72]][iW - gW[0]]), FF[gW[72]][iW - gW[7]]), mW(FF[gW[72]][iW - gW[53]])), FF[gW[72]][iW - gW[43]]), eF = oF(oF(oF(oF(PF, LF(hF)), VF(hF, bW, dF)), WF[iW]), FF[gW[72]][iW]), EF = oF(DF(SF), NF(SF, CF, AF)), PF = dF, dF = bW, bW = hF, hF = oF(uF, eF), uF = AF, AF = CF, CF = SF, SF = oF(eF, EF));
                ZF(FF[gW[5]][gW[1]] = oF(SF, FF[gW[5]][gW[1]]), FF[gW[5]][gW[2]] = oF(CF, FF[gW[5]][gW[2]]), FF[gW[5]][gW[0]] = oF(AF, FF[gW[5]][gW[0]]), FF[gW[5]][gW[17]] = oF(uF, FF[gW[5]][gW[17]]), FF[gW[5]][gW[10]] = oF(hF, FF[gW[5]][gW[10]]), FF[gW[5]][gW[28]] = oF(bW, FF[gW[5]][gW[28]]), FF[gW[5]][gW[9]] = oF(dF, FF[gW[5]][gW[9]]), FF[gW[5]][gW[7]] = oF(PF, FF[gW[5]][gW[7]]))
              }
              return FF[gW[5]]
            }

            function oF(FF, WF) {
              var SF = (FF & gW[73]) + (WF & gW[73]);
              return (FF >> gW[43]) + (WF >> gW[43]) + (SF >> gW[43]) << gW[43] | SF & gW[73]
            }
            return FF = "", WF = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998), {
              hex: CF,
              b64: uF,
              any: hF,
              hex_hmac: AF,
              b64_hmac: uF,
              any_hmac: hF
            }
          }(), console.log(FF[gW[5]]))
        }();
        const SF = mW;
        return AF()[WF(132) + WF(133)](SF, FF[gW[0]]), AF()[WF(gW[63])](FF[gW[1]], SF, AF()[WF(135)](SF, FF[gW[2]]))
      };

    function ZF() {
      ZF = function() {}
    }
    hF = (FF, WF, SF, CF, hF, PF, RF, iW) => {
      function eF(...FF) {
        return FF[gW[13]] = gW[2], typeof bW[FF[gW[1]]] === gW[14] ? bW[FF[gW[1]]] = function(FF) {
          var WF, SF, CF, AF, uF, hF, bW;
          for (ZF(WF = "" + (FF || ""), SF = WF.length, CF = [], AF = gW[1], uF = gW[1], hF = -gW[2]), bW = gW[1]; bW < SF; bW++) {
            var dF = 'bjfJeEWMPXDGOHdVrFx.1&lZkSgNCh]iLvztsB2YaI~K/m!R4p3Q,AUTqcn*(7%o$="}#6;+_@u5^[:`w0>{9?<|8)y'.indexOf(WF[bW]);
            if (dF !== -gW[2])
              if (hF < gW[1]) hF = dF;
              else {
                ZF(hF += dF * gW[27], AF |= hF << uF, uF += (hF & gW[30]) > gW[31] ? gW[32] : gW[33]);
                do {
                  ZF(CF.push(AF & gW[12]), AF >>= gW[11], uF -= gW[11])
                } while (uF > gW[7]);
                hF = -gW[2]
              }
          }
          return hF > -gW[2] && CF.push((AF | hF << uF) & gW[12]), TF(CF)
        }(dF[FF[gW[1]]]) : bW[FF[gW[1]]]
      }
      const EF = FF[eF(gW[74])][eF(137) + eF(138) + eF(139)](WF);
      let QF = FF[eF(gW[74])][eF(gW[86]) + eF(gW[55]) + eF(gW[87]) + eF(gW[88])](EF);
      const rW = QF === gW[78] ? FF[eF(gW[74])][eF(gW[79]) + eF(gW[80]) + eF(gW[81]) + eF(gW[82])](WF, eF(gW[75]) + eF(gW[76]) + eF(gW[77]) + gW[8]) : QF[eF(gW[75]) + eF(gW[76]) + eF(gW[77]) + gW[8]],
        tW = QF === gW[78] ? FF[eF(gW[74])][eF(gW[79]) + eF(gW[80]) + eF(gW[81]) + eF(gW[82])](WF, eF(gW[83]) + eF(gW[84]) + eF(gW[85])) : QF[eF(gW[83]) + eF(gW[84]) + eF(gW[85])];
      ZF(AF()[eF(154)](qW, gW[1], gW[1], PF), AF().Sh(qW, qW, AF()[eF(155)], CF.heading), AF()[eF(156)](OF, hF.Th), OF[gW[2]] = gW[1]);
      const aW = SF[eF(157) + eF(158)]();
      QF = FF[eF(gW[74])][eF(gW[86]) + eF(gW[55]) + eF(gW[87]) + eF(gW[88])](EF);
      let mW = QF === gW[78] ? FF[eF(gW[74])][eF(gW[79]) + eF(gW[80]) + eF(gW[81]) + eF(gW[82])](WF, eF(gW[89]) + eF(gW[90])) : QF[eF(gW[89]) + eF(gW[90])];
      if (!aW && AF()[gW[98]](OF) && (QF === gW[78] ? FF[eF(gW[74])][eF(161) + eF(162) + eF(163)](WF, eF(gW[91]) + eF(gW[92]) + eF(gW[93]) + eF(gW[94])) : QF[eF(gW[91]) + eF(gW[92]) + eF(gW[93]) + eF(gW[94])])) {
        function zW(FF) {
          var WF, SF, CF, AF, uF, hF, bW;
          for (ZF(WF = "" + (FF || ""), SF = WF.length, CF = [], AF = gW[1], uF = gW[1], hF = -gW[2]), bW = gW[1]; bW < SF; bW++) {
            var dF = 'x(17*%^TCkGR@`DY]}ZK"hQq4+w3i&6#aWX?pPc|,d<lItSN$bume~;j.=J0{EvHF[2osM/g8B>Ayrn_z:OU9Vf)!5L'.indexOf(WF[bW]);
            if (dF !== -gW[2])
              if (hF < gW[1]) hF = dF;
              else {
                ZF(hF += dF * gW[27], AF |= hF << uF, uF += (hF & gW[30]) > gW[31] ? gW[32] : gW[33]);
                do {
                  ZF(CF.push(AF & gW[12]), AF >>= gW[11], uF -= gW[11])
                } while (uF > gW[7]);
                hF = -gW[2]
              }
          }
          return hF > -gW[2] && CF.push((AF | hF << uF) & gW[12]), TF(CF)
        }

        function IF(...FF) {
          return FF[gW[13]] = gW[2], typeof bW[FF[gW[1]]] === gW[14] ? bW[FF[gW[1]]] = zW(dF[FF[gW[1]]]) : bW[FF[gW[1]]]
        }

        function fF(...FF) {
          FF[gW[13]] = gW[1]
        }
        IF(168) in kW && fF(), ZF(xW(VF, qW, OF), xW(NF, OF, qW), AF()[IF(174)](DF, OF, NF));
        const yW = AF()[IF(175)](OF),
          sF = AF()[IF(176)](qW, OF) / PF / yW,
          nF = Math[IF(gW[100])](sF, gW[1]) + gW[2];
        if (PF * PF < AF()[gW[98]](NF)) {
          function HF(...FF) {
            for (ZF(FF[gW[13]] = gW[2], FF[gW[2]] = 'KZ%^AY,q3h<@"0RXdBav_SNoi:C[`$rup9)1D/t>E=+F.z]OLk&G7|fywlJWVb#csmPTn5?68H2xe*~}(I4{jgQU;M!', FF[gW[0]] = "" + (FF[gW[1]] || ""), FF[gW[4]] = FF[gW[0]].length, FF[gW[16]] = [], FF[gW[28]] = gW[1], FF[gW[9]] = gW[1], FF[gW[35]] = -gW[2]), FF[gW[3]] = gW[1]; FF[gW[3]] < FF[gW[4]]; FF[gW[3]]++)
              if (FF[gW[99]] = FF[gW[2]].indexOf(FF[gW[0]][FF[gW[3]]]), FF[gW[99]] !== -gW[2])
                if (FF[gW[35]] < gW[1]) FF[gW[35]] = FF[gW[99]];
                else {
                  ZF(FF[gW[35]] += FF[gW[99]] * gW[27], FF[gW[28]] |= FF[gW[35]] << FF[gW[9]], FF[gW[9]] += (FF[gW[35]] & gW[30]) > gW[31] ? gW[32] : gW[33]);
                  do {
                    ZF(FF[gW[16]].push(FF[gW[28]] & gW[12]), FF[gW[28]] >>= gW[11], FF[gW[9]] -= gW[11])
                  } while (FF[gW[9]] > gW[7]);
                  FF[gW[35]] = -gW[2]
                } return FF[gW[35]] > -gW[2] && FF[gW[16]].push((FF[gW[28]] | FF[gW[35]] << FF[gW[9]]) & gW[12]), TF(FF[gW[16]])
          }

          function KF(...FF) {
            return FF[gW[13]] = gW[2], typeof bW[FF[gW[1]]] === gW[14] ? bW[FF[gW[1]]] = HF(dF[FF[gW[1]]]) : bW[FF[gW[1]]]
          }
          AF()[KF(178)](qW, qW, NF, nF)
        }
        ZF(mW = (0, uF.x)(mW, 1, Math[IF(gW[100])](gW[2], Math[IF(179)](gW[1], -sF, gW[2] - yW / PF))), AF()[IF(180)](qW, qW, DF))
      }
      const oF = LF;
      ZF(AF()[eF(181)](oF, qW, OF), oF[gW[2]] = gW[1]);
      let YF = AF()[eF(gW[46])](oF);
      if (!aW) {
        function wF(...FF) {
          for (ZF(FF[gW[13]] = gW[2], FF[gW[2]] = 'aVU/?S"`15AN)H&QML6}DB{iX$!;%hEGR9vz7FIbWT>[u*PCpt]j4rwqkl3Ys_<xK2Jcg:f(mdOeZ+=.0n|,y^@8~#o', FF[gW[23]] = "" + (FF[gW[1]] || ""), FF[gW[4]] = FF[gW[23]].length, FF[gW[16]] = [], FF[gW[28]] = gW[1], FF[gW[29]] = gW[1], FF[gW[7]] = -gW[2]), FF[gW[3]] = gW[1]; FF[gW[3]] < FF[gW[4]]; FF[gW[3]]++)
            if (FF[gW[56]] = FF[gW[2]].indexOf(FF[gW[23]][FF[gW[3]]]), FF[gW[56]] !== -gW[2])
              if (FF[gW[7]] < gW[1]) FF[gW[7]] = FF[gW[56]];
              else {
                ZF(FF[gW[7]] += FF[gW[56]] * gW[27], FF[gW[28]] |= FF[gW[7]] << FF[gW[29]], FF[gW[29]] += (FF[gW[7]] & gW[30]) > gW[31] ? gW[32] : gW[33]);
                do {
                  ZF(FF[gW[16]].push(FF[gW[28]] & gW[12]), FF[gW[28]] >>= gW[11], FF[gW[29]] -= gW[11])
                } while (FF[gW[29]] > gW[7]);
                FF[gW[7]] = -gW[2]
              } return FF[gW[7]] > -gW[2] && FF[gW[16]].push((FF[gW[28]] | FF[gW[7]] << FF[gW[29]]) & gW[12]), TF(FF[gW[16]])
        }

        function XF(...FF) {
          return FF[gW[13]] = gW[2], typeof bW[FF[gW[1]]] === gW[14] ? bW[FF[gW[1]]] = wF(dF[FF[gW[1]]]) : bW[FF[gW[1]]]
        }

        function UF() {
          var FF, WF, SF;

          function CF(...FF) {
            return FF[gW[13]] = gW[2], typeof bW[FF[gW[1]]] === gW[14] ? bW[FF[gW[1]]] = function(...FF) {
              for (ZF(FF[gW[13]] = gW[2], FF[gW[5]] = '8;D2cCa[.u*%@XW3>xh`/~Jt<1]9(}^vw&"$|ZTbpdF=0GiKsljNPRYqUnOSgMfeBH56y#4z{I?Qmo)kE!7V:AL,_r+', FF[gW[0]] = "" + (FF[gW[1]] || ""), FF[gW[101]] = FF[gW[0]].length, FF[gW[102]] = [], FF[gW[8]] = gW[1], FF[gW[97]] = gW[1], FF[gW[7]] = -gW[2]), FF[gW[3]] = gW[1]; FF[gW[3]] < FF[gW[101]]; FF[gW[3]]++)
                if (FF[gW[56]] = FF[gW[5]].indexOf(FF[gW[0]][FF[gW[3]]]), FF[gW[56]] !== -gW[2])
                  if (FF[gW[7]] < gW[1]) FF[gW[7]] = FF[gW[56]];
                  else {
                    ZF(FF[gW[7]] += FF[gW[56]] * gW[27], FF[gW[8]] |= FF[gW[7]] << FF[gW[97]], FF[gW[97]] += (FF[gW[7]] & gW[30]) > gW[31] ? gW[32] : gW[33]);
                    do {
                      ZF(FF[gW[102]].push(FF[gW[8]] & gW[12]), FF[gW[8]] >>= gW[11], FF[gW[97]] -= gW[11])
                    } while (FF[gW[97]] > gW[7]);
                    FF[gW[7]] = -gW[2]
                  } return FF[gW[7]] > -gW[2] && FF[gW[102]].push((FF[gW[8]] | FF[gW[7]] << FF[gW[97]]) & gW[12]), TF(FF[gW[102]])
            }(dF[FF[gW[1]]]) : bW[FF[gW[1]]]
          }
          ZF(FF = CF(gW[26]) + CF(185) + CF(186) + CF(gW[97]) + CF(188) + CF(189) + "om", WF = CF(190) + CF(191) + CF(gW[103]) + CF(gW[105]) + CF(194) + CF(195) + CF(196), SF = CF(197) + CF(198) + CF(199) + ")", FF.match(WF + SF))
        }
        XF(183) + "R" in kW && UF(), YF *= mW
      }
      const MF = RF[eF(gW[58]) + eF(gW[96]) + eF(202)],
        cW = MF ? Math[eF(gW[101])](MF, YF) : YF;
      AF()[eF(gW[57]) + eF(205)](oF, oF);
      const GF = iW !== gW[78] && void 0 !== iW ? iW : RF[eF(gW[37]) + eF(207) + eF(208) + eF(209)];
      if (cW > gW[1]) {
        function BF(...FF) {
          for (ZF(FF[gW[13]] = gW[2], FF[gW[2]] = '+bXoOcDSTCengIMt>54VB^}!?1;uzjJfNWG,]vEU2s|l[Kd%0a<w`#yh*3F_A"m&HP8i{6/R(.Q7qYp@k:)x=r~9$LZ', FF[gW[23]] = "" + (FF[gW[1]] || ""), FF[gW[17]] = FF[gW[23]].length, FF[gW[104]] = [], FF[gW[28]] = gW[1], FF[gW[9]] = gW[1], FF[gW[35]] = -gW[2]), FF[gW[11]] = gW[1]; FF[gW[11]] < FF[gW[17]]; FF[gW[11]]++)
            if (FF[gW[56]] = FF[gW[2]].indexOf(FF[gW[23]][FF[gW[11]]]), FF[gW[56]] !== -gW[2])
              if (FF[gW[35]] < gW[1]) FF[gW[35]] = FF[gW[56]];
              else {
                ZF(FF[gW[35]] += FF[gW[56]] * gW[27], FF[gW[28]] |= FF[gW[35]] << FF[gW[9]], FF[gW[9]] += (FF[gW[35]] & gW[30]) > gW[31] ? gW[32] : gW[33]);
                do {
                  ZF(FF[gW[104]].push(FF[gW[28]] & gW[12]), FF[gW[28]] >>= gW[11], FF[gW[9]] -= gW[11])
                } while (FF[gW[9]] > gW[7]);
                FF[gW[35]] = -gW[2]
              } return FF[gW[35]] > -gW[2] && FF[gW[104]].push((FF[gW[28]] | FF[gW[35]] << FF[gW[9]]) & gW[12]), TF(FF[gW[104]])
        }

        function jW(...FF) {
          return FF[gW[13]] = gW[2], typeof bW[FF[gW[1]]] === gW[14] ? bW[FF[gW[1]]] = BF(dF[FF[gW[1]]]) : bW[FF[gW[1]]]
        }

        function vW(...FF) {
          FF[gW[13]] = gW[1]
        }
        jW(210) + gW[35] in kW && vW();
        let JF = SF[jW(216) + jW(217)] * GF;
        aW || (JF *= SF[jW(218) + jW(219)]);
        let pF = SF[jW(220) + jW(gW[54]) + "ss"] * cW;
        cW < .3 && (pF *= cW), JF > pF && (JF = pF), ZF(AF()[jW(222)](oF, oF, JF), hF[jW(gW[51]) + jW(gW[108])](oF))
      }
      hF[eF(225) + gW[109]] = SF[eF(226) + eF(gW[76]) + gW[109]] * (aW ? rW : tW)
    }
  },
  36036: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => dF,
      g: () => bW
    });
    var CF = SF(36039),
      AF = SF(1079);
    const uF = 2,
      hF = 1,
      bW = {
        xh: 1,
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

    function dF(FF, WF, SF, bW, dF, PF, RF) {
      if (dF.speed) return (0, CF.e)(WF, SF, bW, dF, PF, RF, FF), void(dF.ticksToReachMaxIdleFriction = uF);
      const iW = bW.isOnGround(),
        eF = WF.bloxd.getSyncedClientOptions(WF.bloxd.getPlayerReader(SF)),
        EF = null === eF ? WF.bloxd.getClientPredictedOption(SF, "groundFrictionScale") : eF.groundFrictionScale,
        QF = null === eF ? WF.bloxd.getClientPredictedOption(SF, "airFrictionScale") : eF.airFrictionScale,
        rW = iW ? EF : QF,
        gW = Math.max(hF, rW),
        tW = dF.ticksToReachMaxIdleFriction / uF,
        TF = (0, AF.x)(gW, rW, tW);
      PF.friction = FF.standingFriction * ((null === eF ? WF.bloxd.getClientPredictedOption(SF, "airMomentumConservation") : eF.airMomentumConservation) ? TF : rW), dF.ticksToReachMaxIdleFriction > 0 && dF.ticksToReachMaxIdleFriction--
    }
  },
  35977: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => hF,
      d: () => uF,
      f: () => CF,
      h: () => AF
    });
    let CF = function(FF) {
        return FF[FF.Linear = 0] = "Linear", FF[FF.CatmullRomSpline = 1] = "CatmullRomSpline", FF
      }({}),
      AF = function(FF) {
        return FF[FF.NoLoop = 0] = "NoLoop", FF[FF.LoopOnLastFrame = 1] = "LoopOnLastFrame", FF[FF.HoldOnLastFrame = 2] = "HoldOnLastFrame", FF
      }({}),
      uF = function(FF) {
        return FF[FF.Movement = 0] = "Movement", FF[FF.Action = 1] = "Action", FF[FF.Emote = 2] = "Emote", FF[FF.Custom = 3] = "Custom", FF
      }({}),
      hF = function(FF) {
        return FF[FF.Start = 0] = "Start", FF[FF.Stop = 1] = "Stop", FF
      }({})
  },
  3847: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => AF,
      g: () => CF,
      j: () => uF,
      m: () => dF,
      n: () => hF
    });
    const CF = ["sine", "triangle", "square", "sawtooth"],
      AF = 55,
      uF = {
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

    function hF(FF) {
      return "string" !== typeof FF ? FF : Object.hasOwn(uF, FF) ? uF[FF] : null
    }

    function bW(FF, WF, SF) {
      return Math.min(SF, Math.max(WF, FF))
    }

    function dF(FF) {
      const WF = bW(FF.durationMs, 10, 500),
        SF = bW(FF.attackMs, 0, WF),
        {
          intonation: AF
        } = FF;
      return {
        waveform: CF.includes(FF.waveform) ? FF.waveform : "sine",
        pitchHz: bW(FF.pitchHz, 20, 4e3),
        glideSemitones: bW(FF.glideSemitones, -24, 24),
        durationMs: WF,
        attackMs: SF,
        releaseMs: bW(FF.releaseMs, 0, WF - SF),
        lowpassHz: null === FF.lowpassHz ? null : bW(FF.lowpassHz, 20, 2e4),
        volume: bW(FF.volume, 0, 2),
        intonation: {
          variationSemitones: bW(AF.variationSemitones, 0, 6),
          declineSemitones: bW(AF.declineSemitones, 0, 12),
          questionRiseSemitones: bW(AF.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: bW(AF.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: bW(FF.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);