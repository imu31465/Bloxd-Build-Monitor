export const id = 70;
export const ids = [70];
export const modules = {
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
  3755: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => TF,
      d: () => tW
    });
    var CF = SF(46),
      AF = SF(1262),
      uF = SF(1546),
      hF = SF(3759),
      bW = SF(971);
    const dF = (0, CF.memo)((function(FF) {
      let {
        initialParameters: WF
      } = FF;
      const SF = (0, CF.useRef)(null),
        AF = (0, CF.useRef)(null),
        dF = (0, CF.useRef)(0),
        PF = (0, CF.useRef)(null),
        RF = WF.description,
        iW = WF.aJ,
        {
          scale: eF,
          rotation: EF
        } = null !== WF && void 0 !== WF ? WF : {},
        QF = (0, hF.g)();
      return (0, CF.useEffect)((() => {
        const FF = QF.onFrame((() => {
          const FF = QF.getState();
          if (!FF.isActive || !SF.current || !AF.current) return;
          const WF = FF.state;
          if (SF.current.value = WF.progress, WF.clickCount > dF.current) {
            dF.current = WF.clickCount;
            const FF = AF.current;
            FF.classList.add("pulse"), PF.current = setTimeout((() => {
              FF.classList.remove("pulse")
            }), 100)
          }
        }));
        return () => {
          clearTimeout(PF.current), FF()
        }
      }), [QF]), (0, bW.jsx)(bW.Fragment, {
        children: (0, bW.jsxs)("div", {
          className: "QTEProgressBarWrapper",
          style: {
            ...null !== eF && {
              "--scale": eF
            },
            ...null !== EF && {
              "--rotation": `${EF}deg`
            }
          },
          children: [(0, bW.jsx)("progress", {
            id: "catch",
            max: 100,
            className: "QTEProgressBar",
            ref: SF
          }), (0, bW.jsx)("span", {
            className: "QTEProgressBarInteractionIndicator",
            ref: AF,
            children: (0, bW.jsx)(uF.d, {
              text: [{
                icon: iW
              }]
            })
          }), (0, bW.jsx)("div", {
            className: "QTEProgressBarDescription",
            children: (0, bW.jsx)(uF.d, {
              text: RF
            })
          })]
        })
      })
    }));
    var PF = SF(918),
      RF = SF.n(PF);
    const iW = 2 * Math.PI * 90,
      eF = (0, CF.memo)((function(FF) {
        let {
          initialParameters: WF
        } = FF;
        const SF = (0, CF.useRef)(null),
          AF = (0, CF.useRef)(null),
          dF = (0, CF.useRef)(null),
          PF = WF.label,
          eF = WF.icon,
          EF = WF.mJ,
          {
            scale: QF,
            rotation: rW,
            xJ: gW
          } = null !== WF && void 0 !== WF ? WF : {},
          tW = (0, hF.g)();
        return (0, CF.useEffect)((() => {
          const FF = tW.onFrame((() => {
            var FF, WF;
            const CF = tW.getState();
            if (!CF.isActive || !AF.current) return;
            const uF = CF.state,
              hF = null !== (FF = uF.timeRemaining) && void 0 !== FF ? FF : 0,
              bW = null !== (WF = uF.Dv) && void 0 !== WF ? WF : 1,
              PF = iW * (1 - hF / bW);
            AF.current.style.strokeDashoffset = `${PF}`, SF.current && (SF.current.style.opacity = hF > 0 ? "1" : "0"), dF.current && EF && (dF.current.textContent = `${(hF/1e3).toFixed(1)}s`)
          }));
          return () => {
            FF()
          }
        }), [tW, EF]), (0, bW.jsxs)("div", {
          className: "QTETimedClick",
          ref: SF,
          style: {
            ...null !== QF && {
              "--scale": QF
            },
            ...null !== rW && {
              "--rotation": `${rW}deg`
            }
          },
          children: [(0, bW.jsxs)("div", {
            className: "QTETimedClickCircleContainer",
            children: [(0, bW.jsxs)("svg", {
              className: "QTETimedClickCircularProgress",
              viewBox: "0 0 200 200",
              children: [(0, bW.jsx)("circle", {
                className: "QTETimedClickProgressTrack",
                cx: "100",
                cy: "100",
                r: 90,
                fill: "none",
                strokeWidth: "12"
              }), (0, bW.jsx)("circle", {
                className: "QTETimedClickProgressArc",
                cx: "100",
                cy: "100",
                r: 90,
                fill: "none",
                strokeWidth: "12",
                strokeLinecap: "square",
                strokeDasharray: iW,
                ref: AF
              })]
            }), (0, bW.jsx)("div", {
              className: "QTETimedClickCenterContent",
              children: (0, bW.jsx)(uF.d, {
                text: [{
                  icon: eF
                }],
                className: RF()("QTETimedClickInnerText", {
                  QTETimedClickBreathe: gW
                })
              })
            })]
          }), (0, bW.jsxs)("div", {
            className: "QTETimedClickRightTextContainer",
            children: [(0, bW.jsx)(uF.d, {
              text: PF,
              className: "QTETimedClickLabelText"
            }), EF && (0, bW.jsx)("span", {
              className: "QTETimedClickTimeText",
              ref: dF
            })]
          })]
        })
      })),
      EF = (0, CF.memo)((function(FF) {
        let {
          initialParameters: WF
        } = FF;
        const SF = (0, CF.useRef)(null),
          AF = (0, CF.useRef)(null),
          dF = (0, CF.useRef)(null),
          PF = (0, CF.useRef)(!1),
          RF = WF.description,
          iW = null === WF || void 0 === WF ? void 0 : WF.icon,
          eF = (0, hF.g)();
        return (0, CF.useEffect)((() => {
          const FF = eF.onFrame((() => {
            const FF = eF.getState();
            if (!FF.isActive) return;
            const WF = FF.state;
            if (SF.current) {
              const FF = 100 * (WF.catchZonePosition - WF.vJ / 2);
              SF.current.style.left = `${FF}%`, SF.current.style.width = 100 * WF.vJ + "%", WF.isCatching !== PF.current && (PF.current = WF.isCatching, WF.isCatching ? SF.current.classList.add("catching") : SF.current.classList.remove("catching"))
            }
            AF.current && (AF.current.style.left = 100 * WF.moverPosition + "%"), dF.current && (dF.current.value = WF.progress)
          }));
          return () => {
            FF()
          }
        }), [eF]), (0, bW.jsxs)("div", {
          className: "QTEGravityBar",
          children: [(0, bW.jsx)("div", {
            className: "QTEGravityBarDescription",
            children: (0, bW.jsx)(uF.d, {
              text: RF
            })
          }), (0, bW.jsx)("progress", {
            max: 100,
            className: "QTEGravityBarProgress",
            ref: dF
          }), (0, bW.jsxs)("div", {
            className: "QTEGravityBarTrack",
            children: [(0, bW.jsx)("div", {
              className: "QTEGravityBarCatchZone",
              ref: SF
            }), (0, bW.jsx)("div", {
              className: "QTEGravityBarMover",
              ref: AF,
              children: (0, bW.jsx)("span", {
                children: iW && (0, bW.jsx)(uF.d, {
                  text: [{
                    icon: iW,
                    style: {
                      fontSize: "4rem"
                    }
                  }]
                })
              })
            })]
          })]
        })
      }));
    var QF = SF(568);
    const rW = (0, CF.memo)((function(FF) {
        let {
          initialParameters: WF
        } = FF;
        const SF = (0, CF.useRef)(null),
          AF = WF.label,
          dF = WF.VJ,
          {
            icon: PF,
            scale: RF,
            rotation: iW
          } = null !== WF && void 0 !== WF ? WF : {},
          eF = 100 * (.5 - dF / 2),
          EF = 100 * dF,
          rW = (0, hF.g)();
        return (0, CF.useEffect)((() => {
          const FF = rW.onFrame((() => {
            const FF = rW.getState();
            if (!FF.isActive || !SF.current) return;
            const WF = FF.state;
            SF.current.style.left = 100 * WF.markerPosition + "%"
          }));
          return () => {
            FF()
          }
        }), [rW]), (0, bW.jsxs)("div", {
          className: "QTEPrecisionBarWrapper",
          style: {
            ...!(0, QF.Q)(RF) && {
              "--scale": RF
            },
            ...!(0, QF.Q)(iW) && {
              "--rotation": `${iW}deg`
            }
          },
          children: [PF && (0, bW.jsx)(uF.d, {
            text: [{
              icon: PF
            }],
            className: "QTEPrecisionBarIcon"
          }), (0, bW.jsxs)("div", {
            className: "QTEPrecisionBarTrack",
            children: [(0, bW.jsx)("div", {
              className: "QTEPrecisionBarSuccessZone",
              style: {
                left: `${eF}%`,
                width: `${EF}%`
              }
            }), (0, bW.jsx)("div", {
              className: "QTEPrecisionBarMarker",
              ref: SF
            })]
          }), (0, bW.jsx)("div", {
            className: "QTEPrecisionBarLabel",
            children: (0, bW.jsx)(uF.d, {
              text: AF
            })
          })]
        })
      })),
      gW = (0, CF.memo)((function(FF) {
        let {
          initialParameters: WF
        } = FF;
        const SF = (0, CF.useRef)(null),
          [AF, dF] = (0, CF.useState)((() => new Array(WF.LJ).fill("pending"))),
          [PF, RF] = (0, CF.useState)((() => {
            const FF = WF.ZJ;
            return (0, QF.Q)(FF) || FF <= 0 ? [] : new Array(FF).fill("pending")
          })),
          iW = WF.label,
          {
            icon: eF
          } = WF,
          EF = (0, CF.useRef)(0),
          rW = (0, CF.useRef)(0),
          gW = (0, CF.useRef)([]),
          tW = (0, hF.g)();
        return (0, CF.useEffect)((() => {
          const FF = tW.onFrame((() => {
            const FF = tW.getState();
            if (!FF.isActive || !SF.current) return;
            const WF = FF.state,
              CF = 30 + 60 * WF.outerCircleProgress;
            if (SF.current.setAttribute("r", String(CF)), !0 === WF.lastClickResult && WF.successes > EF.current) {
              SF.current.classList.remove("QTERhythmClickOuterCircle--miss"), SF.current.classList.add("QTERhythmClickOuterCircle--hit");
              const FF = setTimeout((() => {
                var FF;
                null === (FF = SF.current) || void 0 === FF || FF.classList.remove("QTERhythmClickOuterCircle--hit")
              }), 200);
              gW.current.push(FF)
            } else if (!1 === WF.lastClickResult && WF.misses > rW.current) {
              SF.current.classList.remove("QTERhythmClickOuterCircle--hit"), SF.current.classList.add("QTERhythmClickOuterCircle--miss");
              const FF = setTimeout((() => {
                var FF;
                null === (FF = SF.current) || void 0 === FF || FF.classList.remove("QTERhythmClickOuterCircle--miss")
              }), 200);
              gW.current.push(FF)
            }
            WF.successes === EF.current && WF.misses === rW.current || (EF.current = WF.successes, rW.current = WF.misses, dF((FF => {
              const SF = [...FF];
              for (let CF = 0; CF < WF.LJ; CF++) SF[CF] = CF < WF.successes ? "success" : "pending";
              return SF
            })), RF((FF => {
              if (0 === FF.length) return FF;
              const SF = [...FF];
              for (let CF = 0; CF < SF.length; CF++) SF[CF] = CF < WF.misses ? "miss" : "pending";
              return SF
            })))
          }));
          return () => {
            FF();
            for (const FF of gW.current) clearTimeout(FF);
            gW.current = []
          }
        }), [tW]), (0, bW.jsxs)("div", {
          className: "QTERhythmClickWrapper",
          children: [(0, bW.jsx)("div", {
            className: "QTERhythmClickProgress",
            children: AF.map(((FF, WF) => (0, bW.jsx)("div", {
              className: "QTERhythmClickDot" + ("success" === FF ? " QTERhythmClickDot--success" : " QTERhythmClickDot--pendingSuccess")
            }, WF)))
          }), (0, bW.jsxs)("div", {
            className: "QTERhythmClickCircleContainer",
            children: [(0, bW.jsxs)("svg", {
              className: "QTERhythmClickSvg",
              viewBox: "0 0 200 200",
              children: [(0, bW.jsx)("circle", {
                className: "QTERhythmClickInnerCircle",
                cx: "100",
                cy: "100",
                r: 30
              }), (0, bW.jsx)("circle", {
                className: "QTERhythmClickOuterCircle",
                cx: "100",
                cy: "100",
                r: 90,
                ref: SF
              })]
            }), eF && (0, bW.jsx)("div", {
              className: "QTERhythmClickCenterContent",
              children: (0, bW.jsx)(uF.d, {
                text: [{
                  icon: eF
                }],
                className: "QTERhythmClickIcon"
              })
            })]
          }), PF.length > 0 && (0, bW.jsx)("div", {
            className: "QTERhythmClickProgress",
            children: PF.map(((FF, WF) => (0, bW.jsx)("div", {
              className: "QTERhythmClickDot" + ("miss" === FF ? " QTERhythmClickDot--miss" : " QTERhythmClickDot--pendingMiss")
            }, WF)))
          }), (0, bW.jsx)("div", {
            className: "QTERhythmClickLabel",
            children: (0, bW.jsx)(uF.d, {
              text: iW
            })
          })]
        })
      }));

    function tW(FF) {
      let {
        qte: WF
      } = FF;
      switch (WF.type) {
        case "progressBar":
          return (0, bW.jsx)(dF, {
            initialParameters: WF.parameters
          });
        case "timedClick":
          return (0, bW.jsx)(eF, {
            initialParameters: WF.parameters
          });
        case "gravityBar":
          return (0, bW.jsx)(EF, {
            initialParameters: WF.parameters
          });
        case "precisionBar":
          return (0, bW.jsx)(rW, {
            initialParameters: WF.parameters
          });
        case "rhythmClick":
          return (0, bW.jsx)(gW, {
            initialParameters: WF.parameters
          });
        default:
          return console.warn("Unknown QTE type"), null
      }
    }
    const TF = (0, CF.memo)((function() {
      const [FF, WF] = (0, CF.useState)({
        type: null,
        parameters: null,
        state: null,
        isActive: !1
      });
      return (0, AF.e)("qteStateUpdated", (FF => {
        WF(FF)
      })), FF.isActive && FF.type ? (0, bW.jsx)("div", {
        className: "QTE",
        "data-camera-keeper": "",
        children: (0, bW.jsx)(tW, {
          qte: FF
        })
      }) : null
    }))
  },
  3759: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => bW,
      g: () => dF
    });
    var CF = SF(46),
      AF = SF(1153),
      uF = SF(3764);
    const hF = {
        getState: () => uF.c.getCurrentState(),
        onFrame: AF.c
      },
      bW = (0, CF.createContext)(hF);

    function dF() {
      return (0, CF.useContext)(bW)
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