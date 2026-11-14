export const id = 71;
export const ids = [71];
export const modules = {
  3876: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => tB,
      h: () => Sc
    });
    var Vc = nc(912),
      Ic = nc.n(Vc),
      rB = nc(73),
      uc = nc(1051),
      sc = nc(3883),
      Mc = nc(1536),
      Pc = nc(1946),
      qB = nc(3885),
      Oc = nc(957);
    const Tc = new WeakMap;
    let fc = 0;

    function mB(cB) {
      let Bc = Tc.get(cB);
      return void 0 === Bc && (Bc = fc++, Tc.set(cB, Bc)), Bc
    }

    function ec(cB) {
      let {
        piece: Bc
      } = cB;
      return "space" === Bc.kind ? (0, Oc.jsx)(Oc.Fragment, {
        children: Bc.text
      }) : (0, Oc.jsx)("span", {
        className: "DialogueWord",
        style: {
          "--word-delay": `${Bc.delayMs}ms`
        },
        children: (0, Oc.jsx)(sc.e, {
          text: "icon" === Bc.kind ? `[[${Bc.icon}]]` : Bc.text
        })
      })
    }

    function tB(cB) {
      let {
        display: Bc
      } = cB;
      const {
        selectedLanguage: nc
      } = (0, uc.x)(), Vc = (0, rB.useMemo)((() => (0, qB.e)((0, qB.h)(Bc).plan.pieces)), [Bc, nc.code]);
      return (0, Oc.jsxs)("div", {
        className: Ic()("Dialogue", {
          DialogueAnimateIn: !1 !== Bc.animateIn
        }),
        children: [Bc.speakerName && (0, Oc.jsx)(Mc.e, {
          text: Bc.speakerName,
          className: "DialogueSpeaker"
        }), (0, Oc.jsx)("p", {
          className: "DialogueLine",
          children: Vc.map(((cB, Bc) => 1 === cB.length && "space" === cB[0].kind ? cB[0].text : (0, Oc.jsx)("span", {
            className: "DialogueGlue",
            children: cB.map(((cB, Bc) => (0, Oc.jsx)(ec, {
              piece: cB
            }, Bc)))
          }, Bc)))
        })]
      })
    }
    const Sc = (0, rB.memo)((function() {
      const cB = (0, Pc.j)("dialogue");
      return (0, Oc.jsx)("div", {
        className: "DialogueAnchor",
        "data-camera-keeper": "",
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: cB && (0, Oc.jsx)(tB, {
          display: cB
        }, mB(cB))
      })
    }))
  },
  3883: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => sc
    });
    var Vc = nc(73),
      Ic = nc(244),
      rB = nc(1553),
      uc = nc(957);

    function sc(cB) {
      let {
        text: Bc
      } = cB;
      const nc = [];
      let sc = "";
      return (0, Ic.Zb)(Bc).forEach(((cB, Bc) => {
        if ("string" === typeof cB || !(0, rB.g)(cB.icon)) return void(sc += "string" === typeof cB ? cB : cB.icon);
        const Ic = Math.max(0, sc.trimEnd().search(/\S{1,12}$/));
        nc.push((0, uc.jsxs)(Vc.Fragment, {
          children: [sc.slice(0, Ic), (0, uc.jsxs)("span", {
            className: "InlineIconTextGlue",
            children: [sc.slice(Ic), (0, uc.jsx)("span", {
              className: "InlineIconTextIcon",
              role: "img",
              "aria-label": cB.icon,
              children: (0, uc.jsx)(rB.d, {
                itemName: cB.icon,
                amount: 0
              })
            })]
          })]
        }, Bc)), sc = ""
      })), nc.push(sc), (0, uc.jsx)(uc.Fragment, {
        children: nc
      })
    }
  },
  3808: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => yB,
      c: () => Sc
    });
    var Vc = nc(73),
      Ic = nc(1252),
      rB = nc(1536),
      uc = nc(3814),
      sc = nc(957);
    const Mc = (0, Vc.memo)((function(cB) {
      let {
        initialParameters: Bc
      } = cB;
      const nc = (0, Vc.useRef)(null),
        Ic = (0, Vc.useRef)(null),
        Mc = (0, Vc.useRef)(0),
        Pc = (0, Vc.useRef)(null),
        qB = Bc.description,
        Oc = Bc.yG,
        {
          scale: Tc,
          rotation: fc
        } = null !== Bc && void 0 !== Bc ? Bc : {},
        mB = (0, uc.i)();
      return (0, Vc.useEffect)((() => {
        const cB = mB.onFrame((() => {
          const cB = mB.getState();
          if (!cB.isActive || !nc.current || !Ic.current) return;
          const Bc = cB.state;
          if (nc.current.value = Bc.progress, Bc.clickCount > Mc.current) {
            Mc.current = Bc.clickCount;
            const cB = Ic.current;
            cB.classList.add("pulse"), Pc.current = setTimeout((() => {
              cB.classList.remove("pulse")
            }), 100)
          }
        }));
        return () => {
          clearTimeout(Pc.current), cB()
        }
      }), [mB]), (0, sc.jsx)(sc.Fragment, {
        children: (0, sc.jsxs)("div", {
          className: "QTEProgressBarWrapper",
          style: {
            ...null !== Tc && {
              "--scale": Tc
            },
            ...null !== fc && {
              "--rotation": `${fc}deg`
            }
          },
          children: [(0, sc.jsx)("progress", {
            id: "catch",
            max: 100,
            className: "QTEProgressBar",
            ref: nc
          }), (0, sc.jsx)("span", {
            className: "QTEProgressBarInteractionIndicator",
            ref: Ic,
            children: (0, sc.jsx)(rB.e, {
              text: [{
                icon: Oc
              }]
            })
          }), (0, sc.jsx)("div", {
            className: "QTEProgressBarDescription",
            children: (0, sc.jsx)(rB.e, {
              text: qB
            })
          })]
        })
      })
    }));
    var Pc = nc(912),
      qB = nc.n(Pc);
    const Oc = 2 * Math.PI * 90,
      Tc = (0, Vc.memo)((function(cB) {
        let {
          initialParameters: Bc
        } = cB;
        const nc = (0, Vc.useRef)(null),
          Ic = (0, Vc.useRef)(null),
          Mc = (0, Vc.useRef)(null),
          Pc = Bc.label,
          Tc = Bc.icon,
          fc = Bc.HA,
          {
            scale: mB,
            rotation: ec,
            JA: tB
          } = null !== Bc && void 0 !== Bc ? Bc : {},
          Sc = (0, uc.i)();
        return (0, Vc.useEffect)((() => {
          const cB = Sc.onFrame((() => {
            var cB, Bc;
            const Vc = Sc.getState();
            if (!Vc.isActive || !Ic.current) return;
            const rB = Vc.state,
              uc = null !== (cB = rB.timeRemaining) && void 0 !== cB ? cB : 0,
              sc = null !== (Bc = rB.aG) && void 0 !== Bc ? Bc : 1,
              Pc = Oc * (1 - uc / sc);
            Ic.current.style.strokeDashoffset = `${Pc}`, nc.current && (nc.current.style.opacity = uc > 0 ? "1" : "0"), Mc.current && fc && (Mc.current.textContent = `${(uc/1e3).toFixed(1)}s`)
          }));
          return () => {
            cB()
          }
        }), [Sc, fc]), (0, sc.jsxs)("div", {
          className: "QTETimedClick",
          ref: nc,
          style: {
            ...null !== mB && {
              "--scale": mB
            },
            ...null !== ec && {
              "--rotation": `${ec}deg`
            }
          },
          children: [(0, sc.jsxs)("div", {
            className: "QTETimedClickCircleContainer",
            children: [(0, sc.jsxs)("svg", {
              className: "QTETimedClickCircularProgress",
              viewBox: "0 0 200 200",
              children: [(0, sc.jsx)("circle", {
                className: "QTETimedClickProgressTrack",
                cx: "100",
                cy: "100",
                r: 90,
                fill: "none",
                strokeWidth: "12"
              }), (0, sc.jsx)("circle", {
                className: "QTETimedClickProgressArc",
                cx: "100",
                cy: "100",
                r: 90,
                fill: "none",
                strokeWidth: "12",
                strokeLinecap: "square",
                strokeDasharray: Oc,
                ref: Ic
              })]
            }), (0, sc.jsx)("div", {
              className: "QTETimedClickCenterContent",
              children: (0, sc.jsx)(rB.e, {
                text: [{
                  icon: Tc
                }],
                className: qB()("QTETimedClickInnerText", {
                  QTETimedClickBreathe: tB
                })
              })
            })]
          }), (0, sc.jsxs)("div", {
            className: "QTETimedClickRightTextContainer",
            children: [(0, sc.jsx)(rB.e, {
              text: Pc,
              className: "QTETimedClickLabelText"
            }), fc && (0, sc.jsx)("span", {
              className: "QTETimedClickTimeText",
              ref: Mc
            })]
          })]
        })
      })),
      fc = (0, Vc.memo)((function(cB) {
        let {
          initialParameters: Bc
        } = cB;
        const nc = (0, Vc.useRef)(null),
          Ic = (0, Vc.useRef)(null),
          Mc = (0, Vc.useRef)(null),
          Pc = (0, Vc.useRef)(!1),
          qB = Bc.description,
          Oc = null === Bc || void 0 === Bc ? void 0 : Bc.icon,
          Tc = (0, uc.i)();
        return (0, Vc.useEffect)((() => {
          const cB = Tc.onFrame((() => {
            const cB = Tc.getState();
            if (!cB.isActive) return;
            const Bc = cB.state;
            if (nc.current) {
              const cB = 100 * (Bc.catchZonePosition - Bc.iG / 2);
              nc.current.style.left = `${cB}%`, nc.current.style.width = 100 * Bc.iG + "%", Bc.isCatching !== Pc.current && (Pc.current = Bc.isCatching, Bc.isCatching ? nc.current.classList.add("catching") : nc.current.classList.remove("catching"))
            }
            Ic.current && (Ic.current.style.left = 100 * Bc.moverPosition + "%"), Mc.current && (Mc.current.value = Bc.progress)
          }));
          return () => {
            cB()
          }
        }), [Tc]), (0, sc.jsxs)("div", {
          className: "QTEGravityBar",
          children: [(0, sc.jsx)("div", {
            className: "QTEGravityBarDescription",
            children: (0, sc.jsx)(rB.e, {
              text: qB
            })
          }), (0, sc.jsx)("progress", {
            max: 100,
            className: "QTEGravityBarProgress",
            ref: Mc
          }), (0, sc.jsxs)("div", {
            className: "QTEGravityBarTrack",
            children: [(0, sc.jsx)("div", {
              className: "QTEGravityBarCatchZone",
              ref: nc
            }), (0, sc.jsx)("div", {
              className: "QTEGravityBarMover",
              ref: Ic,
              children: (0, sc.jsx)("span", {
                children: Oc && (0, sc.jsx)(rB.e, {
                  text: [{
                    icon: Oc,
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
    var mB = nc(569);
    const ec = (0, Vc.memo)((function(cB) {
        let {
          initialParameters: Bc
        } = cB;
        const nc = (0, Vc.useRef)(null),
          Ic = Bc.label,
          Mc = Bc.lG,
          {
            icon: Pc,
            scale: qB,
            rotation: Oc
          } = null !== Bc && void 0 !== Bc ? Bc : {},
          Tc = 100 * (.5 - Mc / 2),
          fc = 100 * Mc,
          ec = (0, uc.i)();
        return (0, Vc.useEffect)((() => {
          const cB = ec.onFrame((() => {
            const cB = ec.getState();
            if (!cB.isActive || !nc.current) return;
            const Bc = cB.state;
            nc.current.style.left = 100 * Bc.markerPosition + "%"
          }));
          return () => {
            cB()
          }
        }), [ec]), (0, sc.jsxs)("div", {
          className: "QTEPrecisionBarWrapper",
          style: {
            ...!(0, mB.E)(qB) && {
              "--scale": qB
            },
            ...!(0, mB.E)(Oc) && {
              "--rotation": `${Oc}deg`
            }
          },
          children: [Pc && (0, sc.jsx)(rB.e, {
            text: [{
              icon: Pc
            }],
            className: "QTEPrecisionBarIcon"
          }), (0, sc.jsxs)("div", {
            className: "QTEPrecisionBarTrack",
            children: [(0, sc.jsx)("div", {
              className: "QTEPrecisionBarSuccessZone",
              style: {
                left: `${Tc}%`,
                width: `${fc}%`
              }
            }), (0, sc.jsx)("div", {
              className: "QTEPrecisionBarMarker",
              ref: nc
            })]
          }), (0, sc.jsx)("div", {
            className: "QTEPrecisionBarLabel",
            children: (0, sc.jsx)(rB.e, {
              text: Ic
            })
          })]
        })
      })),
      tB = (0, Vc.memo)((function(cB) {
        let {
          initialParameters: Bc
        } = cB;
        const nc = (0, Vc.useRef)(null),
          [Ic, Mc] = (0, Vc.useState)((() => new Array(Bc.QG).fill("pending"))),
          [Pc, qB] = (0, Vc.useState)((() => {
            const cB = Bc.i4;
            return (0, mB.E)(cB) || cB <= 0 ? [] : new Array(cB).fill("pending")
          })),
          Oc = Bc.label,
          {
            icon: Tc
          } = Bc,
          fc = (0, Vc.useRef)(0),
          ec = (0, Vc.useRef)(0),
          tB = (0, Vc.useRef)([]),
          Sc = (0, uc.i)();
        return (0, Vc.useEffect)((() => {
          const cB = Sc.onFrame((() => {
            const cB = Sc.getState();
            if (!cB.isActive || !nc.current) return;
            const Bc = cB.state,
              Vc = 30 + 60 * Bc.outerCircleProgress;
            if (nc.current.setAttribute("r", String(Vc)), !0 === Bc.lastClickResult && Bc.successes > fc.current) {
              nc.current.classList.remove("QTERhythmClickOuterCircle--miss"), nc.current.classList.add("QTERhythmClickOuterCircle--hit");
              const cB = setTimeout((() => {
                var cB;
                null === (cB = nc.current) || void 0 === cB || cB.classList.remove("QTERhythmClickOuterCircle--hit")
              }), 200);
              tB.current.push(cB)
            } else if (!1 === Bc.lastClickResult && Bc.misses > ec.current) {
              nc.current.classList.remove("QTERhythmClickOuterCircle--hit"), nc.current.classList.add("QTERhythmClickOuterCircle--miss");
              const cB = setTimeout((() => {
                var cB;
                null === (cB = nc.current) || void 0 === cB || cB.classList.remove("QTERhythmClickOuterCircle--miss")
              }), 200);
              tB.current.push(cB)
            }
            Bc.successes === fc.current && Bc.misses === ec.current || (fc.current = Bc.successes, ec.current = Bc.misses, Mc((cB => {
              const nc = [...cB];
              for (let Vc = 0; Vc < Bc.QG; Vc++) nc[Vc] = Vc < Bc.successes ? "success" : "pending";
              return nc
            })), qB((cB => {
              if (0 === cB.length) return cB;
              const nc = [...cB];
              for (let Vc = 0; Vc < nc.length; Vc++) nc[Vc] = Vc < Bc.misses ? "miss" : "pending";
              return nc
            })))
          }));
          return () => {
            cB();
            for (const cB of tB.current) clearTimeout(cB);
            tB.current = []
          }
        }), [Sc]), (0, sc.jsxs)("div", {
          className: "QTERhythmClickWrapper",
          children: [(0, sc.jsx)("div", {
            className: "QTERhythmClickProgress",
            children: Ic.map(((cB, Bc) => (0, sc.jsx)("div", {
              className: "QTERhythmClickDot" + ("success" === cB ? " QTERhythmClickDot--success" : " QTERhythmClickDot--pendingSuccess")
            }, Bc)))
          }), (0, sc.jsxs)("div", {
            className: "QTERhythmClickCircleContainer",
            children: [(0, sc.jsxs)("svg", {
              className: "QTERhythmClickSvg",
              viewBox: "0 0 200 200",
              children: [(0, sc.jsx)("circle", {
                className: "QTERhythmClickInnerCircle",
                cx: "100",
                cy: "100",
                r: 30
              }), (0, sc.jsx)("circle", {
                className: "QTERhythmClickOuterCircle",
                cx: "100",
                cy: "100",
                r: 90,
                ref: nc
              })]
            }), Tc && (0, sc.jsx)("div", {
              className: "QTERhythmClickCenterContent",
              children: (0, sc.jsx)(rB.e, {
                text: [{
                  icon: Tc
                }],
                className: "QTERhythmClickIcon"
              })
            })]
          }), Pc.length > 0 && (0, sc.jsx)("div", {
            className: "QTERhythmClickProgress",
            children: Pc.map(((cB, Bc) => (0, sc.jsx)("div", {
              className: "QTERhythmClickDot" + ("miss" === cB ? " QTERhythmClickDot--miss" : " QTERhythmClickDot--pendingMiss")
            }, Bc)))
          }), (0, sc.jsx)("div", {
            className: "QTERhythmClickLabel",
            children: (0, sc.jsx)(rB.e, {
              text: Oc
            })
          })]
        })
      }));

    function Sc(cB) {
      let {
        qte: Bc
      } = cB;
      switch (Bc.type) {
        case "progressBar":
          return (0, sc.jsx)(Mc, {
            initialParameters: Bc.parameters
          });
        case "timedClick":
          return (0, sc.jsx)(Tc, {
            initialParameters: Bc.parameters
          });
        case "gravityBar":
          return (0, sc.jsx)(fc, {
            initialParameters: Bc.parameters
          });
        case "precisionBar":
          return (0, sc.jsx)(ec, {
            initialParameters: Bc.parameters
          });
        case "rhythmClick":
          return (0, sc.jsx)(tB, {
            initialParameters: Bc.parameters
          });
        default:
          return console.warn("Unknown QTE type"), null
      }
    }
    const yB = (0, Vc.memo)((function() {
      const [cB, Bc] = (0, Vc.useState)({
        type: null,
        parameters: null,
        state: null,
        isActive: !1
      });
      return (0, Ic.f)("qteStateUpdated", (cB => {
        Bc(cB)
      })), cB.isActive && cB.type ? (0, sc.jsx)("div", {
        className: "QTE",
        "data-camera-keeper": "",
        children: (0, sc.jsx)(Sc, {
          qte: cB
        })
      }) : null
    }))
  },
  3814: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => sc,
      i: () => Mc
    });
    var Vc = nc(73),
      Ic = nc(1152),
      rB = nc(3823);
    const uc = {
        getState: () => rB.e.getCurrentState(),
        onFrame: Ic.f
      },
      sc = (0, Vc.createContext)(uc);

    function Mc() {
      return (0, Vc.useContext)(sc)
    }
  },
  3885: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Dc,
      h: () => vB
    });
    var Vc = nc(3893),
      Ic = nc(244);
    const rB = 120,
      uc = 260,
      sc = 1.15,
      Mc = 1.2,
      Pc = 2,
      qB = 1.08,
      Oc = .8,
      Tc = .95,
      fc = 8,
      mB = "[\"')\\]\u300d\u300f\uff09]*",
      ec = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${mB}$`),
      tB = new RegExp(`[?\uff1f]${mB}$`),
      Sc = new RegExp(`[!\uff01]${mB}$`),
      yB = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      zB = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      pc = new RegExp(`[${zB}]`),
      hc = new RegExp(`[${zB}]|[^${zB}]+`, "g"),
      aB = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function lc(cB) {
      let Bc = 2166136261;
      for (let nc = 0; nc < cB.length; nc++) Bc ^= cB.charCodeAt(nc), Bc = Math.imul(Bc, 16777619);
      return (Bc >>> 0) / 4294967295 * 2 - 1
    }

    function Yc(cB) {
      var Bc;
      if (pc.test(cB)) return 1;
      const nc = cB.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        Vc = nc.replace(/[^0-9]/g, "");
      if (Vc.length > 0 && !/\p{L}/u.test(nc)) return Math.min(Vc.length, 4);
      const Ic = null !== (Bc = nc.match(aB)) && void 0 !== Bc ? Bc : [];
      if (0 === Ic.length) {
        var rB, uc;
        const cB = null !== (rB = null === (uc = nc.match(/\p{L}/gu)) || void 0 === uc ? void 0 : uc.length) && void 0 !== rB ? rB : 0;
        return 0 === cB ? 0 : Math.min(Math.max(1, Math.round(cB / 2.5)), fc)
      }
      const sc = nc.replace(/[^\p{L}]/gu, ""),
        Mc = Ic.length > 1 && "e" === Ic.at(-1) && sc.endsWith("e") && !sc.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(cB.replace(/[^\p{L}]/gu, ""));
      return Math.min(Ic.length - (Mc ? 1 : 0), fc)
    }

    function Lc(cB) {
      return cB.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function gB(cB) {
      const Bc = cB.replace(/[^\p{L}]/gu, "");
      return Bc.length >= 2 && Bc === Bc.toUpperCase() && Bc !== Bc.toLowerCase()
    }

    function Uc(cB, Bc) {
      var nc;
      const fc = Bc && (0, Vc.k)(Bc),
        mB = null !== (nc = null === fc || void 0 === fc ? void 0 : fc.syllableMs) && void 0 !== nc ? nc : Vc.e,
        zB = function(cB) {
          const Bc = [];
          for (const Vc of (0, Ic.Zb)(cB))
            if ("string" === typeof Vc)
              for (const cB of Vc.split(/(\s+)/)) {
                if ("" === cB) continue;
                if (/^\s+$/.test(cB)) {
                  Bc.push({
                    kind: "space",
                    text: cB
                  });
                  continue
                }
                if (!pc.test(cB)) {
                  Bc.push({
                    kind: "word",
                    text: cB,
                    delayMs: 0
                  });
                  continue
                }
                let Vc = !0;
                for (const Ic of null !== (nc = cB.match(hc)) && void 0 !== nc ? nc : []) {
                  var nc;
                  const cB = Bc.at(-1);
                  Vc || "word" !== (null === cB || void 0 === cB ? void 0 : cB.kind) || pc.test(Ic) || /[\p{L}\p{N}]/u.test(Ic) ? (Vc || Bc.push({
                    kind: "space",
                    text: "\u200b"
                  }), Bc.push({
                    kind: "word",
                    text: Ic,
                    delayMs: 0
                  }), Vc = !1) : cB.text += Ic
                }
              } else Bc.push({
                kind: "icon",
                text: Vc.icon,
                delayMs: 0
              });
          return Bc
        }(cB),
        aB = [];
      let Uc = [];
      for (const Vc of zB) "space" !== Vc.kind && (Uc.push(Vc), ec.test(Vc.text) && (aB.push(Uc), Uc = []));
      aB.push(Uc);
      const bB = [];
      let Zc = 0;
      for (const Vc of aB) {
        var Qc, Cc;
        const cB = null !== (Qc = null === (Cc = Vc.at(-1)) || void 0 === Cc ? void 0 : Cc.text) && void 0 !== Qc ? Qc : "",
          Bc = tB.test(cB),
          nc = Sc.test(cB),
          Ic = Vc.map((cB => "word" === cB.kind ? Yc(cB.text) : 1)),
          zB = Ic.findLastIndex((cB => cB > 0));
        for (const [tB, Sc] of Vc.entries()) {
          const cB = "word" === Sc.kind,
            Vc = Ic[tB];
          Sc.delayMs = Zc;
          for (let Ic = 0; fc && Ic < Vc; Ic++) {
            const {
              intonation: rB
            } = fc;
            let uc = zB > 0 ? -rB.declineSemitones * (tB / zB) : 0;
            uc += lc(`${Lc(Sc.text)}|${Ic}`) * rB.variationSemitones;
            const ec = Math.min(1, rB.variationSemitones);
            let yB = fc.glideSemitones,
              pc = 1;
            nc && (uc += rB.exclaimLiftSemitones, pc *= sc), Bc && tB === zB && (uc += rB.questionRiseSemitones * (Vc > 1 ? .5 + .5 * Ic / (Vc - 1) : 1), Ic === Vc - 1 && (yB = Math.abs(yB) + rB.questionRiseSemitones / 2)), cB && gB(Sc.text) && (uc += Pc * ec, pc *= Mc), Vc > 1 && 0 === Ic && (uc += Oc * ec, pc *= qB), bB.push({
              atMs: Zc + Ic * mB,
              semitones: uc,
              glideSemitones: yB,
              durationMs: Ic < Vc - 1 ? Math.min(fc.durationMs, mB * Tc) : fc.durationMs,
              level: pc
            })
          }
          Zc += Vc * mB + (ec.test(Sc.text) ? uc : yB.test(Sc.text) ? rB : 0)
        }
      }
      return {
        pieces: zB.map((cB => "space" === cB.kind ? cB : "icon" === cB.kind ? {
          kind: "icon",
          icon: cB.text,
          delayMs: cB.delayMs
        } : {
          kind: "word",
          text: cB.text,
          delayMs: cB.delayMs
        })),
        blips: bB
      }
    }
    var bB = nc(1051),
      Zc = nc(1117),
      Qc = nc(1572);

    function Cc(cB) {
      if ("string" === typeof cB) return cB;
      const Bc = Zc.e.get().getCurrentLanguageCode();
      return (0, bB.l)(Bc, cB.translationKey, (0, bB.j)(cB.params, Qc.d.shown))
    }

    function vB(cB) {
      const Bc = void 0 === cB.voice ? null : (0, Vc.m)(cB.voice),
        nc = Bc && (0, Vc.k)(Bc);
      return {
        plan: Uc(Cc(cB.line), nc),
        synth: nc
      }
    }

    function Dc(cB) {
      const Bc = [];
      let nc = [];
      for (const [Ic, rB] of cB.entries()) {
        var Vc;
        "space" === rB.kind && (" " !== rB.text || "icon" !== (null === (Vc = cB[Ic + 1]) || void 0 === Vc ? void 0 : Vc.kind)) ? (nc.length > 0 && Bc.push(nc), Bc.push([rB]), nc = []) : nc.push(rB)
      }
      return nc.length > 0 && Bc.push(nc), Bc
    }
  },
  3893: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Ic,
      f: () => Vc,
      j: () => rB,
      k: () => Mc,
      m: () => uc
    });
    const Vc = ["sine", "triangle", "square", "sawtooth"],
      Ic = 55,
      rB = {
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

    function uc(cB) {
      return "string" !== typeof cB ? cB : Object.hasOwn(rB, cB) ? rB[cB] : null
    }

    function sc(cB, Bc, nc) {
      return Math.min(nc, Math.max(Bc, cB))
    }

    function Mc(cB) {
      const Bc = sc(cB.durationMs, 10, 500),
        nc = sc(cB.attackMs, 0, Bc),
        {
          intonation: Ic
        } = cB;
      return {
        waveform: Vc.includes(cB.waveform) ? cB.waveform : "sine",
        pitchHz: sc(cB.pitchHz, 20, 4e3),
        glideSemitones: sc(cB.glideSemitones, -24, 24),
        durationMs: Bc,
        attackMs: nc,
        releaseMs: sc(cB.releaseMs, 0, Bc - nc),
        lowpassHz: null === cB.lowpassHz ? null : sc(cB.lowpassHz, 20, 2e4),
        volume: sc(cB.volume, 0, 2),
        intonation: {
          variationSemitones: sc(Ic.variationSemitones, 0, 6),
          declineSemitones: sc(Ic.declineSemitones, 0, 12),
          questionRiseSemitones: sc(Ic.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: sc(Ic.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: sc(cB.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);