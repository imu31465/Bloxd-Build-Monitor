export const id = 70;
export const ids = [70];
export const modules = {
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
  3735: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => PW,
      d: () => JW
    });
    var wW = MW(75),
      CW = MW(1253),
      zR = MW(1523),
      AW = MW(3741),
      bR = MW(940);
    const yR = (0, wW.memo)((function(WW) {
      let {
        initialParameters: RW
      } = WW;
      const MW = (0, wW.useRef)(null),
        CW = (0, wW.useRef)(null),
        yR = (0, wW.useRef)(0),
        NW = (0, wW.useRef)(null),
        eW = RW.description,
        BW = RW.o_,
        {
          scale: tR,
          rotation: TW
        } = null !== RW && void 0 !== RW ? RW : {},
        gR = (0, AW.d)();
      return (0, wW.useEffect)((() => {
        const WW = gR.onFrame((() => {
          const WW = gR.getState();
          if (!WW.isActive || !MW.current || !CW.current) return;
          const RW = WW.state;
          if (MW.current.value = RW.progress, RW.clickCount > yR.current) {
            yR.current = RW.clickCount;
            const WW = CW.current;
            WW.classList.add("pulse"), NW.current = setTimeout((() => {
              WW.classList.remove("pulse")
            }), 100)
          }
        }));
        return () => {
          clearTimeout(NW.current), WW()
        }
      }), [gR]), (0, bR.jsx)(bR.Fragment, {
        children: (0, bR.jsxs)("div", {
          className: "QTEProgressBarWrapper",
          style: {
            ...null !== tR && {
              "--scale": tR
            },
            ...null !== TW && {
              "--rotation": `${TW}deg`
            }
          },
          children: [(0, bR.jsx)("progress", {
            id: "catch",
            max: 100,
            className: "QTEProgressBar",
            ref: MW
          }), (0, bR.jsx)("span", {
            className: "QTEProgressBarInteractionIndicator",
            ref: CW,
            children: (0, bR.jsx)(zR.c, {
              text: [{
                icon: BW
              }]
            })
          }), (0, bR.jsx)("div", {
            className: "QTEProgressBarDescription",
            children: (0, bR.jsx)(zR.c, {
              text: eW
            })
          })]
        })
      })
    }));
    var NW = MW(897),
      eW = MW.n(NW);
    const BW = 2 * Math.PI * 90,
      tR = (0, wW.memo)((function(WW) {
        let {
          initialParameters: RW
        } = WW;
        const MW = (0, wW.useRef)(null),
          CW = (0, wW.useRef)(null),
          yR = (0, wW.useRef)(null),
          NW = RW.label,
          tR = RW.icon,
          TW = RW.f_,
          {
            scale: gR,
            rotation: iR,
            Q_: YW
          } = null !== RW && void 0 !== RW ? RW : {},
          JW = (0, AW.d)();
        return (0, wW.useEffect)((() => {
          const WW = JW.onFrame((() => {
            var WW, RW;
            const wW = JW.getState();
            if (!wW.isActive || !CW.current) return;
            const zR = wW.state,
              AW = null !== (WW = zR.timeRemaining) && void 0 !== WW ? WW : 0,
              bR = null !== (RW = zR.F_) && void 0 !== RW ? RW : 1,
              NW = BW * (1 - AW / bR);
            CW.current.style.strokeDashoffset = `${NW}`, MW.current && (MW.current.style.opacity = AW > 0 ? "1" : "0"), yR.current && TW && (yR.current.textContent = `${(AW/1e3).toFixed(1)}s`)
          }));
          return () => {
            WW()
          }
        }), [JW, TW]), (0, bR.jsxs)("div", {
          className: "QTETimedClick",
          ref: MW,
          style: {
            ...null !== gR && {
              "--scale": gR
            },
            ...null !== iR && {
              "--rotation": `${iR}deg`
            }
          },
          children: [(0, bR.jsxs)("div", {
            className: "QTETimedClickCircleContainer",
            children: [(0, bR.jsxs)("svg", {
              className: "QTETimedClickCircularProgress",
              viewBox: "0 0 200 200",
              children: [(0, bR.jsx)("circle", {
                className: "QTETimedClickProgressTrack",
                cx: "100",
                cy: "100",
                r: 90,
                fill: "none",
                strokeWidth: "12"
              }), (0, bR.jsx)("circle", {
                className: "QTETimedClickProgressArc",
                cx: "100",
                cy: "100",
                r: 90,
                fill: "none",
                strokeWidth: "12",
                strokeLinecap: "square",
                strokeDasharray: BW,
                ref: CW
              })]
            }), (0, bR.jsx)("div", {
              className: "QTETimedClickCenterContent",
              children: (0, bR.jsx)(zR.c, {
                text: [{
                  icon: tR
                }],
                className: eW()("QTETimedClickInnerText", {
                  QTETimedClickBreathe: YW
                })
              })
            })]
          }), (0, bR.jsxs)("div", {
            className: "QTETimedClickRightTextContainer",
            children: [(0, bR.jsx)(zR.c, {
              text: NW,
              className: "QTETimedClickLabelText"
            }), TW && (0, bR.jsx)("span", {
              className: "QTETimedClickTimeText",
              ref: yR
            })]
          })]
        })
      })),
      TW = (0, wW.memo)((function(WW) {
        let {
          initialParameters: RW
        } = WW;
        const MW = (0, wW.useRef)(null),
          CW = (0, wW.useRef)(null),
          yR = (0, wW.useRef)(null),
          NW = (0, wW.useRef)(!1),
          eW = RW.description,
          BW = null === RW || void 0 === RW ? void 0 : RW.icon,
          tR = (0, AW.d)();
        return (0, wW.useEffect)((() => {
          const WW = tR.onFrame((() => {
            const WW = tR.getState();
            if (!WW.isActive) return;
            const RW = WW.state;
            if (MW.current) {
              const WW = 100 * (RW.catchZonePosition - RW.h_ / 2);
              MW.current.style.left = `${WW}%`, MW.current.style.width = 100 * RW.h_ + "%", RW.isCatching !== NW.current && (NW.current = RW.isCatching, RW.isCatching ? MW.current.classList.add("catching") : MW.current.classList.remove("catching"))
            }
            CW.current && (CW.current.style.left = 100 * RW.moverPosition + "%"), yR.current && (yR.current.value = RW.progress)
          }));
          return () => {
            WW()
          }
        }), [tR]), (0, bR.jsxs)("div", {
          className: "QTEGravityBar",
          children: [(0, bR.jsx)("div", {
            className: "QTEGravityBarDescription",
            children: (0, bR.jsx)(zR.c, {
              text: eW
            })
          }), (0, bR.jsx)("progress", {
            max: 100,
            className: "QTEGravityBarProgress",
            ref: yR
          }), (0, bR.jsxs)("div", {
            className: "QTEGravityBarTrack",
            children: [(0, bR.jsx)("div", {
              className: "QTEGravityBarCatchZone",
              ref: MW
            }), (0, bR.jsx)("div", {
              className: "QTEGravityBarMover",
              ref: CW,
              children: (0, bR.jsx)("span", {
                children: BW && (0, bR.jsx)(zR.c, {
                  text: [{
                    icon: BW,
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
    var gR = MW(564);
    const iR = (0, wW.memo)((function(WW) {
        let {
          initialParameters: RW
        } = WW;
        const MW = (0, wW.useRef)(null),
          CW = RW.label,
          yR = RW.B3,
          {
            icon: NW,
            scale: eW,
            rotation: BW
          } = null !== RW && void 0 !== RW ? RW : {},
          tR = 100 * (.5 - yR / 2),
          TW = 100 * yR,
          iR = (0, AW.d)();
        return (0, wW.useEffect)((() => {
          const WW = iR.onFrame((() => {
            const WW = iR.getState();
            if (!WW.isActive || !MW.current) return;
            const RW = WW.state;
            MW.current.style.left = 100 * RW.markerPosition + "%"
          }));
          return () => {
            WW()
          }
        }), [iR]), (0, bR.jsxs)("div", {
          className: "QTEPrecisionBarWrapper",
          style: {
            ...!(0, gR.S)(eW) && {
              "--scale": eW
            },
            ...!(0, gR.S)(BW) && {
              "--rotation": `${BW}deg`
            }
          },
          children: [NW && (0, bR.jsx)(zR.c, {
            text: [{
              icon: NW
            }],
            className: "QTEPrecisionBarIcon"
          }), (0, bR.jsxs)("div", {
            className: "QTEPrecisionBarTrack",
            children: [(0, bR.jsx)("div", {
              className: "QTEPrecisionBarSuccessZone",
              style: {
                left: `${tR}%`,
                width: `${TW}%`
              }
            }), (0, bR.jsx)("div", {
              className: "QTEPrecisionBarMarker",
              ref: MW
            })]
          }), (0, bR.jsx)("div", {
            className: "QTEPrecisionBarLabel",
            children: (0, bR.jsx)(zR.c, {
              text: CW
            })
          })]
        })
      })),
      YW = (0, wW.memo)((function(WW) {
        let {
          initialParameters: RW
        } = WW;
        const MW = (0, wW.useRef)(null),
          [CW, yR] = (0, wW.useState)((() => new Array(RW.I3).fill("pending"))),
          [NW, eW] = (0, wW.useState)((() => {
            const WW = RW.X3;
            return (0, gR.S)(WW) || WW <= 0 ? [] : new Array(WW).fill("pending")
          })),
          BW = RW.label,
          {
            icon: tR
          } = RW,
          TW = (0, wW.useRef)(0),
          iR = (0, wW.useRef)(0),
          YW = (0, wW.useRef)([]),
          JW = (0, AW.d)();
        return (0, wW.useEffect)((() => {
          const WW = JW.onFrame((() => {
            const WW = JW.getState();
            if (!WW.isActive || !MW.current) return;
            const RW = WW.state,
              wW = 30 + 60 * RW.outerCircleProgress;
            if (MW.current.setAttribute("r", String(wW)), !0 === RW.lastClickResult && RW.successes > TW.current) {
              MW.current.classList.remove("QTERhythmClickOuterCircle--miss"), MW.current.classList.add("QTERhythmClickOuterCircle--hit");
              const WW = setTimeout((() => {
                var WW;
                null === (WW = MW.current) || void 0 === WW || WW.classList.remove("QTERhythmClickOuterCircle--hit")
              }), 200);
              YW.current.push(WW)
            } else if (!1 === RW.lastClickResult && RW.misses > iR.current) {
              MW.current.classList.remove("QTERhythmClickOuterCircle--hit"), MW.current.classList.add("QTERhythmClickOuterCircle--miss");
              const WW = setTimeout((() => {
                var WW;
                null === (WW = MW.current) || void 0 === WW || WW.classList.remove("QTERhythmClickOuterCircle--miss")
              }), 200);
              YW.current.push(WW)
            }
            RW.successes === TW.current && RW.misses === iR.current || (TW.current = RW.successes, iR.current = RW.misses, yR((WW => {
              const MW = [...WW];
              for (let wW = 0; wW < RW.I3; wW++) MW[wW] = wW < RW.successes ? "success" : "pending";
              return MW
            })), eW((WW => {
              if (0 === WW.length) return WW;
              const MW = [...WW];
              for (let wW = 0; wW < MW.length; wW++) MW[wW] = wW < RW.misses ? "miss" : "pending";
              return MW
            })))
          }));
          return () => {
            WW();
            for (const WW of YW.current) clearTimeout(WW);
            YW.current = []
          }
        }), [JW]), (0, bR.jsxs)("div", {
          className: "QTERhythmClickWrapper",
          children: [(0, bR.jsx)("div", {
            className: "QTERhythmClickProgress",
            children: CW.map(((WW, RW) => (0, bR.jsx)("div", {
              className: "QTERhythmClickDot" + ("success" === WW ? " QTERhythmClickDot--success" : " QTERhythmClickDot--pendingSuccess")
            }, RW)))
          }), (0, bR.jsxs)("div", {
            className: "QTERhythmClickCircleContainer",
            children: [(0, bR.jsxs)("svg", {
              className: "QTERhythmClickSvg",
              viewBox: "0 0 200 200",
              children: [(0, bR.jsx)("circle", {
                className: "QTERhythmClickInnerCircle",
                cx: "100",
                cy: "100",
                r: 30
              }), (0, bR.jsx)("circle", {
                className: "QTERhythmClickOuterCircle",
                cx: "100",
                cy: "100",
                r: 90,
                ref: MW
              })]
            }), tR && (0, bR.jsx)("div", {
              className: "QTERhythmClickCenterContent",
              children: (0, bR.jsx)(zR.c, {
                text: [{
                  icon: tR
                }],
                className: "QTERhythmClickIcon"
              })
            })]
          }), NW.length > 0 && (0, bR.jsx)("div", {
            className: "QTERhythmClickProgress",
            children: NW.map(((WW, RW) => (0, bR.jsx)("div", {
              className: "QTERhythmClickDot" + ("miss" === WW ? " QTERhythmClickDot--miss" : " QTERhythmClickDot--pendingMiss")
            }, RW)))
          }), (0, bR.jsx)("div", {
            className: "QTERhythmClickLabel",
            children: (0, bR.jsx)(zR.c, {
              text: BW
            })
          })]
        })
      }));

    function JW(WW) {
      let {
        qte: RW
      } = WW;
      switch (RW.type) {
        case "progressBar":
          return (0, bR.jsx)(yR, {
            initialParameters: RW.parameters
          });
        case "timedClick":
          return (0, bR.jsx)(tR, {
            initialParameters: RW.parameters
          });
        case "gravityBar":
          return (0, bR.jsx)(TW, {
            initialParameters: RW.parameters
          });
        case "precisionBar":
          return (0, bR.jsx)(iR, {
            initialParameters: RW.parameters
          });
        case "rhythmClick":
          return (0, bR.jsx)(YW, {
            initialParameters: RW.parameters
          });
        default:
          return console.warn("Unknown QTE type"), null
      }
    }
    const PW = (0, wW.memo)((function() {
      const [WW, RW] = (0, wW.useState)({
        type: null,
        parameters: null,
        state: null,
        isActive: !1
      });
      return (0, CW.f)("qteStateUpdated", (WW => {
        RW(WW)
      })), WW.isActive && WW.type ? (0, bR.jsx)("div", {
        className: "QTE",
        "data-camera-keeper": "",
        children: (0, bR.jsx)(JW, {
          qte: WW
        })
      }) : null
    }))
  },
  3741: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => bR,
      d: () => yR
    });
    var wW = MW(75),
      CW = MW(1126),
      zR = MW(3748);
    const AW = {
        getState: () => zR.e.getCurrentState(),
        onFrame: CW.g
      },
      bR = (0, wW.createContext)(AW);

    function yR() {
      return (0, wW.useContext)(bR)
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