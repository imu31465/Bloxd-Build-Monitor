export const id = 29;
export const ids = [29];
export const modules = {
  8619: (QQ, WQ, XQ) => {
    var wQ = {
      "./nintendo/A.svg": 8626,
      "./nintendo/B.svg": 8633,
      "./nintendo/Down.svg": 8635,
      "./nintendo/Home.svg": 8640,
      "./nintendo/LB.svg": 8642,
      "./nintendo/LS.svg": 8644,
      "./nintendo/LT.svg": 8652,
      "./nintendo/Left.svg": 8655,
      "./nintendo/LeftStick.svg": 8660,
      "./nintendo/Menu.svg": 8664,
      "./nintendo/RB.svg": 8670,
      "./nintendo/RS.svg": 8677,
      "./nintendo/RT.svg": 8684,
      "./nintendo/Right.svg": 8692,
      "./nintendo/RightStick.svg": 8697,
      "./nintendo/Up.svg": 8703,
      "./nintendo/View.svg": 8711,
      "./nintendo/X.svg": 8715,
      "./nintendo/Y.svg": 8717,
      "./playstation/A.svg": 8722,
      "./playstation/B.svg": 8727,
      "./playstation/Down.svg": 8734,
      "./playstation/Home.svg": 8741,
      "./playstation/LB.svg": 8745,
      "./playstation/LS.svg": 8748,
      "./playstation/LT.svg": 8753,
      "./playstation/Left.svg": 8762,
      "./playstation/LeftStick.svg": 8770,
      "./playstation/Menu.svg": 8775,
      "./playstation/RB.svg": 8777,
      "./playstation/RS.svg": 8786,
      "./playstation/RT.svg": 8788,
      "./playstation/Right.svg": 8795,
      "./playstation/RightStick.svg": 8802,
      "./playstation/Up.svg": 8806,
      "./playstation/View.svg": 8812,
      "./playstation/X.svg": 8818,
      "./playstation/Y.svg": 8827,
      "./steamdeck/A.svg": 8830,
      "./steamdeck/B.svg": 8836,
      "./steamdeck/Down.svg": 8840,
      "./steamdeck/Home.svg": 8846,
      "./steamdeck/LB.svg": 8855,
      "./steamdeck/LS.svg": 8857,
      "./steamdeck/LT.svg": 8864,
      "./steamdeck/Left.svg": 8866,
      "./steamdeck/LeftStick.svg": 8872,
      "./steamdeck/Menu.svg": 8879,
      "./steamdeck/RB.svg": 8885,
      "./steamdeck/RS.svg": 8887,
      "./steamdeck/RT.svg": 8894,
      "./steamdeck/Right.svg": 8899,
      "./steamdeck/RightStick.svg": 8908,
      "./steamdeck/Up.svg": 8916,
      "./steamdeck/View.svg": 8921,
      "./steamdeck/X.svg": 8924,
      "./steamdeck/Y.svg": 8931,
      "./xbox/A.svg": 8936,
      "./xbox/B.svg": 8945,
      "./xbox/Down.svg": 8951,
      "./xbox/Home.svg": 8956,
      "./xbox/LB.svg": 8961,
      "./xbox/LS.svg": 8969,
      "./xbox/LT.svg": 8971,
      "./xbox/Left.svg": 8976,
      "./xbox/LeftStick.svg": 8978,
      "./xbox/Menu.svg": 8983,
      "./xbox/RB.svg": 8990,
      "./xbox/RS.svg": 8993,
      "./xbox/RT.svg": 8999,
      "./xbox/Right.svg": 9006,
      "./xbox/RightStick.svg": 9008,
      "./xbox/Up.svg": 9017,
      "./xbox/View.svg": 9023,
      "./xbox/X.svg": 9027,
      "./xbox/Y.svg": 9033
    };

    function qQ(QQ) {
      var WQ = TQ(QQ);
      return XQ(WQ)
    }

    function TQ(QQ) {
      if (!XQ.o(wQ, QQ)) {
        var WQ = new Error("Cannot find module '" + QQ + "'");
        throw WQ.code = "MODULE_NOT_FOUND", WQ
      }
      return wQ[QQ]
    }
    qQ.keys = function() {
      return Object.keys(wQ)
    }, qQ.resolve = TQ, QQ.exports = qQ, qQ.id = 8619
  },
  9159: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => cQ,
      c: () => aQ,
      g: () => lQ
    });
    var wQ = XQ(61),
      qQ = XQ(4863),
      TQ = XQ(1162),
      zQ = XQ(1498),
      sQ = XQ(31),
      FQ = XQ(3688),
      PQ = XQ(2318),
      gQ = XQ(1273),
      JQ = XQ(2678),
      rQ = XQ(2003),
      IQ = XQ(2052),
      jQ = XQ(1226),
      BQ = XQ(26),
      yQ = XQ(1698),
      VQ = XQ(1081),
      DQ = XQ.n(VQ),
      pQ = XQ(9168),
      GQ = XQ(9170),
      UQ = XQ(9174),
      bQ = XQ(9096),
      vQ = XQ(9176),
      dQ = (XQ(9179), XQ(1145));
    let HQ = null;

    function aQ() {
      return null !== HQ
    }

    function lQ() {
      return "pad" === HQ
    }

    function hQ() {
      return "inGame" === BQ.b.get("gameState") && !(0, yQ.r)()
    }

    function iQ(QQ) {
      return (0, GQ.z)(QQ, gQ.o, GQ.i, GQ.m, GQ.p)
    }
    const cQ = (0, wQ.memo)((function() {
      const {
        t: QQ
      } = (0, jQ.C)(), {
        userContext: WQ
      } = (0, TQ.c)(), [XQ, BQ] = (0, wQ.useState)(null), [VQ, aQ] = (0, wQ.useState)(null), lQ = (0, wQ.useRef)(null), cQ = (0, wQ.useCallback)((QQ => {
        lQ.current = QQ, aQ(QQ)
      }), []), AQ = (0, wQ.useRef)(0), RQ = (0, wQ.useRef)(null), EQ = (0, wQ.useRef)({
        x: 0,
        y: 0
      }), [CQ, uQ] = (0, wQ.useState)(0), LQ = (0, wQ.useMemo)((() => function(QQ) {
        const WQ = [];
        for (let wQ = 0; wQ < gQ.o; wQ++) {
          var XQ;
          WQ.push(null !== (XQ = QQ[wQ]) && void 0 !== XQ ? XQ : null)
        }
        return WQ
      }((0, JQ.i)(WQ.getPlayerCosmetics().emote))), [WQ, CQ]);
      (0, IQ.b)("cosmeticsUpdated", (QQ => {
        QQ.some((QQ => QQ.local && "emote" === QQ.dT)) && uQ((QQ => QQ + 1))
      }));
      const kQ = (0, wQ.useRef)(!1),
        fQ = (0, wQ.useCallback)((function(QQ) {
          let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          "pad" === QQ && (0, UQ.f)(), kQ.current = WQ, EQ.current = {
            x: 0,
            y: 0
          }, cQ(null), BQ(QQ)
        }), [cQ]),
        SQ = (0, wQ.useCallback)((() => {
          BQ(null), cQ(null), EQ.current = {
            x: 0,
            y: 0
          }
        }), [cQ]),
        tQ = (0, wQ.useCallback)((QQ => {
          if (Date.now() < AQ.current) return;
          const WQ = (0, PQ.i)(QQ),
            XQ = !!WQ.holdUntilMove,
            wQ = XQ ? 600 : Math.ceil(1e3 * WQ.animation.animation_length / PQ.d) + 200;
          AQ.current = Date.now() + wQ, RQ.current = QQ, rQ.gameBridge.send("playEmote", QQ), rQ.gameBridge.send("applyTemporaryThirdPerson", XQ ? {} : {
            durationMs: wQ
          })
        }), []);
      (0, zQ.f)("requestToggleEmoteWheel", (() => {
        null === XQ ? hQ() && fQ("click") : SQ()
      })), (0, zQ.f)("requestEmoteWheelHoldOpen", (() => {
        null === XQ && hQ() && fQ((0, pQ.b)() ? "hold" : "click")
      })), (0, zQ.f)("requestEmoteWheelPadOpen", (QQ => {
        null !== XQ || !hQ() || (0, bQ.d)() || (0, vQ.t)() || fQ("pad", QQ)
      })), (0, zQ.f)("requestEmoteRepeatLast", (() => {
        if (null !== XQ || !hQ() || (0, bQ.d)() || (0, vQ.t)()) return;
        const QQ = RQ.current;
        null !== QQ && LQ.includes(QQ) ? tQ(QQ) : fQ("pad", !0)
      }));
      const oQ = () => {
        const QQ = lQ.current,
          WQ = null !== QQ ? LQ[QQ] : null;
        null !== WQ && "pad" === XQ && Date.now() < AQ.current || (SQ(), null !== WQ && tQ(WQ))
      };
      (0, zQ.f)("emoteWheelPadAim", (QQ => {
        if ("pad" !== XQ) return;
        const WQ = (0, GQ.H)(QQ, gQ.o, lQ.current);
        cQ(null !== WQ && null !== LQ[WQ] ? WQ : null)
      })), (0, zQ.f)("requestEmoteWheelPadCommit", (QQ => {
        "pad" !== XQ || QQ && kQ.current || oQ()
      })), (0, zQ.f)("appManagerUpdated|activeInputDevice", (QQ => {
        null !== XQ && "pad" === XQ !== ("gamepad" === QQ) && SQ()
      })), (0, wQ.useLayoutEffect)((() => (HQ = XQ, (0, FQ.s)("emoteWheel", "pad" === XQ), sQ.k.mB(FQ.o), () => {
        HQ = null, (0, FQ.s)("emoteWheel", !1), sQ.k.mB(FQ.o)
      })), [XQ]), (0, zQ.f)("requestEmoteWheelHoldRelease", (() => {
        "hold" === XQ && oQ()
      })), (0, zQ.f)("requestEmoteWheelClose", (() => {
        null !== XQ && SQ()
      })), (0, zQ.f)("appManagerUpdated|gameState", (QQ => {
        "inGame" !== QQ && SQ()
      }));
      const eQ = () => {
        (0, yQ.r)() && SQ()
      };
      if ((0, zQ.f)("appManagerUpdated|openEverythingMenuName", eQ), (0, zQ.f)("appManagerUpdated|openInGameMenuName", eQ), (0, zQ.f)("pointerLockUpdate", (QQ => {
          QQ || "hold" !== XQ || SQ()
        })), (0, wQ.useEffect)((() => {
          if (null === XQ) return;
          const QQ = QQ => {
            "Escape" === QQ.key && (QQ.stopImmediatePropagation(), QQ.preventDefault(), SQ())
          };
          return document.addEventListener("keydown", QQ, !0), () => {
            document.removeEventListener("keydown", QQ, !0)
          }
        }), [XQ, SQ]), (0, qQ.c)(!0, "click" === XQ, "EmoteWheelOverlay"), (0, wQ.useEffect)((() => {
          if ("hold" === XQ) return rQ.gameBridge.send("holdEmoteWheel", !0), () => {
            rQ.gameBridge.send("holdEmoteWheel", !1)
          }
        }), [XQ]), (0, wQ.useEffect)((() => {
          if ("hold" !== XQ) return;
          const QQ = parseFloat(window.getComputedStyle(document.documentElement).fontSize),
            WQ = GQ.y * QQ,
            wQ = GQ.v * QQ,
            qQ = QQ => {
              let XQ = EQ.current.x + QQ.movementX,
                qQ = EQ.current.y + QQ.movementY;
              const TQ = Math.hypot(XQ, qQ);
              if (TQ > WQ) {
                const QQ = WQ / TQ;
                XQ *= QQ, qQ *= QQ
              }
              EQ.current = {
                x: XQ,
                y: qQ
              }, cQ(function(QQ, WQ, XQ, wQ) {
                if (Math.hypot(QQ, WQ) < XQ) return null;
                const qQ = (0, GQ.B)(QQ, WQ, gQ.o);
                return null === wQ[qQ] ? null : qQ
              }(XQ, qQ, wQ, LQ))
            };
          return document.addEventListener("mousemove", qQ), () => {
            document.removeEventListener("mousemove", qQ)
          }
        }), [XQ, LQ, cQ]), null === XQ) return null;
      const nQ = "hold" === XQ || "pad" === XQ,
        xQ = null !== VQ ? LQ[VQ] : null,
        YQ = null !== xQ ? (0, PQ.i)(xQ).displayName : QQ("emotes:pickEmote");
      return (0, dQ.jsx)("div", {
        className: DQ()("EmoteWheelOverlay", {
          EmoteWheelOverlayPad: "pad" === XQ
        }),
        onMouseDown: QQ => {
          QQ.target === QQ.currentTarget && SQ()
        },
        children: (0, dQ.jsxs)("div", {
          className: "EmoteWheel",
          style: {
            width: 2 * GQ.y + "rem",
            height: 2 * GQ.y + "rem"
          },
          children: [(0, dQ.jsxs)("svg", {
            className: "EmoteWheelSvg",
            viewBox: `0 0 ${GQ.r} ${GQ.r}`,
            children: [LQ.map(((WQ, XQ) => {
              const wQ = null !== WQ,
                qQ = nQ && XQ === VQ;
              return (0, dQ.jsx)("path", {
                d: iQ(XQ),
                className: DQ()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: qQ,
                  EmoteWheelWedgeDisabled: !wQ
                }),
                onClick: QQ => {
                  QQ.stopPropagation(), null !== WQ && (QQ => {
                    SQ(), tQ(QQ)
                  })(WQ)
                },
                "aria-label": null !== WQ ? (0, PQ.i)(WQ).displayName : QQ("emotes:emptySlot")
              }, XQ)
            })), (0, dQ.jsx)("circle", {
              className: "EmoteWheelOuterRing",
              cx: GQ.i,
              cy: GQ.i,
              r: GQ.p
            }), (0, dQ.jsx)("circle", {
              className: "EmoteWheelInnerRing",
              cx: GQ.i,
              cy: GQ.i,
              r: GQ.m
            }), nQ && null !== VQ && (0, dQ.jsx)("path", {
              className: "EmoteWheelWedgeOutline",
              d: iQ(VQ)
            })]
          }), LQ.map(((QQ, WQ) => {
            const XQ = null !== QQ,
              wQ = nQ && WQ === VQ,
              qQ = (0, GQ.D)(WQ, gQ.o),
              TQ = GQ.e * Math.cos(qQ),
              zQ = GQ.e * Math.sin(qQ);
            return (0, dQ.jsx)("div", {
              className: DQ()("EmoteWheelSlotIcon", {
                EmoteWheelSlotIconHighlighted: wQ,
                EmoteWheelSlotIconDisabled: !XQ
              }),
              style: {
                left: `calc(50% + ${TQ}rem)`,
                top: `calc(50% + ${zQ}rem)`,
                backgroundImage: XQ ? `url(/textures/charSkins/previews/emote_${QQ}_preview.png)` : void 0
              },
              "aria-hidden": !0
            }, WQ)
          })), (0, dQ.jsx)("div", {
            className: "EmoteWheelHint SmallTextBold",
            children: YQ
          })]
        })
      })
    }))
  },
  9268: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => VQ,
      c: () => GQ
    });
    var wQ = XQ(61),
      qQ = XQ(31),
      TQ = XQ(2585),
      zQ = XQ(3678);
    const sQ = 6,
      FQ = 4;

    function PQ(QQ) {
      let {
        slotsLeft: WQ,
        slotsRight: XQ,
        width: wQ,
        height: qQ,
        zoneRight: TQ,
        rowTop: zQ,
        besideBottom: PQ,
        obstacles: gQ
      } = QQ;
      const JQ = Math.max(0, Math.floor(XQ - WQ - wQ)),
        rQ = null === TQ ? 0 : Math.min(JQ, Math.max(0, Math.ceil(TQ + sQ - WQ))),
        IQ = WQ + rQ - sQ,
        jQ = WQ + rQ + wQ + sQ,
        BQ = gQ.filter((QQ => QQ.left < jQ && QQ.right > IQ));
      let yQ = PQ;
      for (let sQ = 0; sQ <= BQ.length; sQ++) {
        const QQ = BQ.filter((QQ => QQ.top < yQ + FQ && QQ.bottom > yQ - qQ - FQ));
        if (0 === QQ.length) break;
        yQ = Math.min(...QQ.map((QQ => QQ.top))) - FQ
      }
      return {
        shift: rQ,
        rise: yQ === PQ ? null : Math.ceil(zQ - yQ)
      }
    }

    function gQ(QQ) {
      return Array.from(QQ.children).filter((QQ => !QQ.classList.contains("HotBarRow")))
    }

    function JQ(QQ) {
      return function(QQ) {
        const WQ = [],
          XQ = (QQ, wQ) => {
            const qQ = QQ.getBoundingClientRect();
            if (qQ.width > 0 && qQ.height > 0) WQ.push(QQ);
            else if (wQ < 2)
              for (const WQ of Array.from(QQ.children)) XQ(WQ, wQ + 1)
          };
        for (const wQ of QQ) XQ(wQ, 0);
        return WQ
      }(gQ(QQ).flatMap((QQ => QQ.classList.contains("AuraBarWrapper") ? [] : QQ.classList.contains("BottomScreenStatBarList") ? Array.from(QQ.children) : [QQ])))
    }

    function rQ(QQ) {
      var WQ;
      const XQ = QQ.getBoundingClientRect();
      if (0 === XQ.width) return null;
      const wQ = null === (WQ = QQ.parentElement) || void 0 === WQ ? void 0 : WQ.getBoundingClientRect();
      return wQ && wQ.width > 0 ? Math.min(XQ.right, wQ.left + wQ.width * IQ) : XQ.right
    }
    const IQ = .35,
      jQ = new WeakMap,
      BQ = ".BottomScreenMessage, [role='status']",
      yQ = new WeakMap;

    function VQ(QQ) {
      DQ(QQ) && DQ(QQ)
    }

    function DQ(QQ) {
      var WQ, XQ, wQ, qQ, TQ, zQ;
      const sQ = QQ.documentElement.classList;
      if (!sQ.contains("TouchHotbar") || sQ.contains("TouchHotbarKeysAbove") || sQ.contains("HudMove-inventory") || sQ.contains("HudLocked-inventory") || null === (WQ = QQ.defaultView) || void 0 === WQ || null === (XQ = WQ.matchMedia) || void 0 === XQ || !XQ.call(WQ, pQ).matches) return !1;
      const gQ = QQ.querySelector(".HotBarContainer.Touch .TouchInventoryKey.ShopKey"),
        IQ = null === gQ || void 0 === gQ ? void 0 : gQ.parentElement,
        VQ = null === gQ || void 0 === gQ ? void 0 : gQ.closest(".BottomMiddleElements"),
        DQ = null === VQ || void 0 === VQ ? void 0 : VQ.querySelector(".HotBarContainer.Touch .HotBarGameItemsContainer");
      if (!gQ || !IQ || !VQ || !DQ || VQ.classList.contains("TouchInventoryOpen")) return !1;
      const GQ = gQ.getBoundingClientRect();
      if (0 === GQ.width) return !1;
      const UQ = QQ.querySelector(".JoystickZone"),
        bQ = DQ.getBoundingClientRect(),
        vQ = IQ.getBoundingClientRect().top,
        dQ = null === (wQ = VQ.querySelector(":scope > .AuraBarWrapper")) || void 0 === wQ ? void 0 : wQ.getBoundingClientRect(),
        HQ = JQ(VQ),
        aQ = {
          slotsLeft: bQ.left,
          slotsRight: bQ.right,
          width: GQ.width,
          height: GQ.height,
          zoneRight: UQ ? rQ(UQ) : null,
          rowTop: vQ,
          besideBottom: (dQ && dQ.height > 0 ? dQ.top : vQ) - FQ,
          obstacles: HQ.map((QQ => QQ.getBoundingClientRect()))
        },
        lQ = PQ({
          ...aQ,
          obstacles: HQ.filter((QQ => !QQ.matches(BQ))).map((QQ => QQ.getBoundingClientRect()))
        }),
        hQ = QQ.defaultView,
        iQ = `${null===hQ||void 0===hQ?void 0:hQ.innerWidth}x${null===hQ||void 0===hQ?void 0:hQ.innerHeight}:${lQ.shift}:${Math.round(GQ.width)}:${Math.round(vQ)}`,
        cQ = yQ.get(VQ),
        AQ = (null === cQ || void 0 === cQ ? void 0 : cQ.at) === iQ ? (RQ = cQ.rise, EQ = lQ.rise, null === RQ ? EQ : null === EQ ? RQ : Math.max(RQ, EQ)) : lQ.rise;
      var RQ, EQ;
      const CQ = PQ({
          ...aQ,
          besideBottom: null === AQ ? aQ.besideBottom : vQ - AQ
        }),
        uQ = {
          shift: lQ.shift,
          rise: null !== (qQ = CQ.rise) && void 0 !== qQ ? qQ : AQ
        },
        LQ = jQ.get(VQ);
      return (null !== (TQ = null === LQ || void 0 === LQ ? void 0 : LQ.shift) && void 0 !== TQ ? TQ : 0) === uQ.shift && yQ.set(VQ, {
        at: iQ,
        rise: AQ
      }), (null === LQ || void 0 === LQ ? void 0 : LQ.shift) !== uQ.shift && VQ.style.setProperty("--touch-shop-above-shift", `${uQ.shift}px`), (null === LQ || void 0 === LQ ? void 0 : LQ.rise) !== uQ.rise && (VQ.classList.toggle("ShopAboveUp", null !== uQ.rise), null === uQ.rise ? VQ.style.removeProperty("--touch-shop-above-rise") : VQ.style.setProperty("--touch-shop-above-rise", `${uQ.rise}px`)), jQ.set(VQ, uQ), (null !== (zQ = null === LQ || void 0 === LQ ? void 0 : LQ.shift) && void 0 !== zQ ? zQ : 0) !== uQ.shift
    }
    const pQ = "(orientation: landscape) and (max-height: 500px)";

    function GQ(QQ, WQ, XQ) {
      (0, wQ.useLayoutEffect)((() => {
        var WQ;
        const wQ = null === (WQ = QQ.current) || void 0 === WQ ? void 0 : WQ.closest(".BottomMiddleElements");
        if (!wQ || XQ) return;
        const sQ = new ResizeObserver((() => {
            IQ(!1)
          })),
          FQ = () => {
            sQ.disconnect();
            const QQ = document.querySelector(".JoystickZone");
            for (const WQ of [QQ, wQ, wQ.querySelector(".HotBarGameItemsContainer"), ...JQ(wQ)]) WQ && sQ.observe(WQ)
          };
        let PQ = null,
          rQ = !1;
        const IQ = QQ => {
            rQ ||= QQ, PQ ??= requestAnimationFrame((() => {
              PQ = null, rQ && (rQ = !1, FQ()), VQ(document)
            }))
          },
          jQ = new MutationObserver((() => {
            IQ(!0)
          }));
        jQ.observe(wQ, {
          childList: !0
        });
        for (const QQ of gQ(wQ)) jQ.observe(QQ, {
          childList: !0,
          subtree: !0
        });
        VQ(document), FQ();
        const BQ = () => {
            IQ(!0)
          },
          yQ = [(0, qQ.o)(TQ.h, BQ), (0, qQ.o)(zQ.d, BQ)];
        return () => {
          null !== PQ && cancelAnimationFrame(PQ), sQ.disconnect(), jQ.disconnect();
          for (const QQ of yQ) QQ()
        }
      }), [QQ, WQ, XQ])
    }
  },
  5349: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => jQ,
      g: () => pQ,
      h: () => BQ,
      i: () => DQ
    });
    var wQ = XQ(61),
      qQ = XQ(5351),
      TQ = XQ(4677),
      zQ = XQ(1416),
      sQ = XQ(5376),
      FQ = XQ(1081),
      PQ = XQ.n(FQ),
      gQ = XQ(1404),
      JQ = XQ(1802),
      rQ = XQ(5378),
      IQ = XQ(1145);

    function jQ(QQ) {
      let {
        label: WQ,
        onClick: XQ,
        checked: wQ,
        circleInfoText: qQ,
        className: sQ,
        disabled: FQ,
        note: gQ
      } = QQ;
      return (0, IQ.jsxs)("div", {
        "aria-disabled": FQ || void 0,
        "data-pad-focusable": !0,
        className: PQ()("SettingBox CheckboxContainer", {
          [sQ]: sQ,
          SettingBoxDisabled: FQ
        }),
        onClick: () => {
          FQ || XQ(!wQ)
        },
        children: [(0, IQ.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, IQ.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, IQ.jsx)(TQ.b, {
              className: "SettingsCheckbox",
              checked: wQ,
              disabled: FQ,
              onChange: () => {}
            })
          }), (0, IQ.jsxs)("div", {
            className: "CheckboxText",
            children: [WQ, qQ && (0, IQ.jsx)("span", {
              onClick: QQ => QQ.stopPropagation(),
              children: (0, IQ.jsx)(zQ.b, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: qQ
              })
            })]
          })]
        }), gQ && (0, IQ.jsx)("div", {
          className: "SettingNote",
          children: gQ
        })]
      })
    }

    function BQ(QQ) {
      let {
        name: WQ,
        onChange: XQ,
        min: qQ,
        max: TQ,
        step: sQ,
        initValue: FQ,
        circleInfoText: gQ,
        format: JQ,
        className: rQ,
        padStep: jQ,
        disabled: BQ = !1,
        selectableMax: yQ,
        cappedNote: DQ,
        onChangeComplete: pQ
      } = QQ;
      const [GQ, UQ] = (0, wQ.useState)(FQ), bQ = (0, wQ.useRef)(FQ);
      (0, wQ.useEffect)((() => {
        bQ.current = FQ, UQ(FQ)
      }), [FQ]);
      const vQ = void 0 !== yQ && yQ < TQ,
        dQ = vQ ? {
          "--slider-selectable": (yQ - qQ) / (TQ - qQ)
        } : void 0;
      return (0, IQ.jsxs)("div", {
        className: PQ()("SettingBox SettingsSliderDiv", {
          [rQ]: rQ,
          SettingBoxDisabled: BQ,
          SliderCapped: vQ
        }),
        style: dQ,
        children: [(0, IQ.jsxs)("div", {
          className: "SliderText",
          children: [`${WQ}: ${JQ?JQ(GQ):GQ}`, gQ && (0, IQ.jsx)(zQ.b, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: gQ
          })]
        }), (0, IQ.jsx)("div", {
          className: "SliderDiv",
          children: (0, IQ.jsx)(VQ, {
            value: GQ,
            min: qQ,
            max: TQ,
            step: sQ,
            onChange: QQ => {
              if (vQ && QQ >= yQ && GQ === yQ) return;
              const WQ = vQ ? Math.min(QQ, yQ) : QQ;
              bQ.current = WQ, UQ(WQ), XQ(WQ)
            },
            onChangeComplete: pQ && (() => {
              pQ(bQ.current)
            }),
            format: JQ,
            padStep: jQ,
            disabled: BQ
          })
        }), vQ && DQ && (0, IQ.jsx)("div", {
          className: "SettingNote",
          children: DQ
        })]
      })
    }
    const yQ = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function VQ(QQ) {
      var WQ;
      let {
        value: XQ,
        min: TQ,
        max: zQ,
        step: sQ,
        onChange: FQ,
        orientation: PQ,
        reverse: gQ,
        setIsChanging: JQ,
        tooltip: jQ,
        labels: BQ,
        handleLabel: VQ,
        format: DQ,
        onChangeStart: pQ,
        onChangeComplete: GQ,
        padStep: UQ,
        disabled: bQ = !1
      } = QQ;
      const vQ = (0, wQ.useRef)(null),
        dQ = (0, wQ.useRef)(null);
      (0, wQ.useLayoutEffect)((() => {
        var QQ, WQ, XQ;
        const wQ = null !== (QQ = null === (WQ = vQ.current) || void 0 === WQ ? void 0 : WQ.querySelector(".rangeslider")) && void 0 !== QQ ? QQ : null;
        null === wQ || void 0 === wQ || wQ.setAttribute("data-pad-slider", ""), null === wQ || void 0 === wQ || wQ.setAttribute("data-pad-focusable", ""), null === wQ || void 0 === wQ || null === (XQ = wQ.querySelector(".rangeslider__handle")) || void 0 === XQ || XQ.setAttribute("data-pad-slider-handle", ""), dQ.current = wQ
      }), []), (0, wQ.useLayoutEffect)((() => {
        var QQ, WQ;
        bQ ? null === (QQ = dQ.current) || void 0 === QQ || QQ.setAttribute("aria-disabled", "true") : null === (WQ = dQ.current) || void 0 === WQ || WQ.removeAttribute("aria-disabled")
      }), [bQ]);
      const HQ = (null !== (WQ = String(sQ).split(".")[1]) && void 0 !== WQ ? WQ : "").length,
        aQ = QQ => {
          const WQ = Number((Math.round((QQ - TQ) / sQ) * sQ + TQ).toFixed(HQ));
          return Math.min(zQ, Math.max(TQ, WQ))
        },
        lQ = (0, wQ.useRef)(GQ);
      lQ.current = GQ, (0, wQ.useEffect)((() => {
        const QQ = vQ.current;
        if (!QQ) return;
        const WQ = QQ => {
          var WQ;
          yQ.has(QQ.key) && (null === (WQ = lQ.current) || void 0 === WQ || WQ.call(lQ))
        };
        return QQ.addEventListener("keyup", WQ), () => {
          QQ.removeEventListener("keyup", WQ)
        }
      }), []);
      const hQ = (0, wQ.useRef)(!1);
      return (0, rQ.i)(dQ, {
        adjust: QQ => {
          if (bQ) return;
          const WQ = null !== UQ && void 0 !== UQ ? UQ : Math.max(sQ, Math.round((zQ - TQ) / 20 / sQ) * sQ),
            wQ = aQ(XQ + QQ * WQ * (gQ ? -1 : 1));
          wQ !== XQ && (null === pQ || void 0 === pQ || pQ(), FQ(wQ), null === GQ || void 0 === GQ || GQ())
        },
        setFraction: QQ => {
          if (bQ) return;
          const WQ = aQ(TQ + (gQ ? 1 - QQ : QQ) * (zQ - TQ));
          WQ !== XQ && (hQ.current || (hQ.current = !0, null === pQ || void 0 === pQ || pQ()), FQ(WQ))
        },
        endDrag: () => {
          hQ.current && (hQ.current = !1, null === GQ || void 0 === GQ || GQ())
        }
      }), (0, IQ.jsx)("div", {
        ref: vQ,
        style: {
          display: "contents"
        },
        children: (0, IQ.jsx)(qQ.c, {
          value: XQ,
          min: TQ,
          max: zQ,
          step: sQ,
          onChange: FQ,
          orientation: PQ,
          reverse: gQ,
          tooltip: jQ,
          labels: BQ,
          handleLabel: VQ,
          format: DQ,
          onChangeStart: () => {
            null === pQ || void 0 === pQ || pQ(), null === JQ || void 0 === JQ || JQ(!0)
          },
          onChangeComplete: () => {
            null === JQ || void 0 === JQ || JQ(!1), null === GQ || void 0 === GQ || GQ()
          }
        })
      })
    }
    async function DQ() {
      const QQ = gQ.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: ""
      });
      !0 === await QQ.getResult() && (0, JQ.reloadBloxd)()
    }

    function pQ(QQ) {
      let {
        label: WQ,
        options: XQ,
        value: wQ,
        onChange: qQ,
        circleInfoText: TQ
      } = QQ;
      return (0, IQ.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, IQ.jsxs)("div", {
          className: "SliderText",
          children: [WQ, TQ && (0, IQ.jsx)(zQ.b, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: TQ
          })]
        }), (0, IQ.jsx)(sQ.d, {
          ariaLabel: WQ,
          options: XQ,
          value: wQ,
          onChange: qQ
        })]
      })
    }
  },
  5376: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => zQ
    });
    var wQ = XQ(1081),
      qQ = XQ.n(wQ),
      TQ = XQ(1145);

    function zQ(QQ) {
      let {
        options: WQ,
        value: XQ,
        onChange: wQ,
        ariaLabel: zQ,
        className: sQ,
        reselectable: FQ = !1,
        keepsFocus: PQ = !1,
        padTabs: gQ
      } = QQ;
      const JQ = void 0 !== gQ;
      return (0, TQ.jsx)("div", {
        className: qQ()("SegmentedToggle", sQ),
        role: "group",
        "aria-label": zQ,
        "data-pad-tabs": gQ,
        children: WQ.map((QQ => {
          const WQ = QQ.value === XQ;
          return (0, TQ.jsx)("button", {
            type: "button",
            "aria-pressed": WQ,
            "data-pad-tab": JQ || void 0,
            "data-pad-selected": JQ && WQ ? "true" : void 0,
            "data-pad-default-focus": JQ && WQ || void 0,
            "aria-label": QQ.ariaLabel,
            title: QQ.ariaLabel,
            className: qQ()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: WQ
            }),
            onMouseDown: PQ ? QQ => {
              QQ.preventDefault()
            } : void 0,
            onClick: () => {
              WQ && !FQ || wQ(QQ.value)
            },
            children: QQ.label
          }, QQ.value)
        }))
      })
    }
  },
  9119: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => zQ,
      i: () => TQ
    });
    var wQ = XQ(2067);
    const qQ = /^(?:Key[A-Z]|Digit[0-9]|Arrow(?:Up|Down|Left|Right)|Space)$/,
      TQ = QQ => "string" === typeof QQ.icon && "" !== QQ.icon && "string" === typeof QQ.keycode && qQ.test(QQ.keycode),
      zQ = QQ => "Space" === QQ ? "_" : wQ.f[QQ]
  },
  9168: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => qQ
    });
    var wQ = XQ(26);

    function qQ() {
      return !wQ.b.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  9257: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => qQ,
      c: () => sQ,
      f: () => wQ,
      h: () => BQ,
      j: () => IQ,
      k: () => gQ,
      l: () => zQ,
      m: () => yQ,
      p: () => JQ,
      r: () => FQ,
      s: () => rQ,
      t: () => PQ,
      u: () => jQ,
      v: () => TQ
    });
    const wQ = QQ => ({
      left: QQ.left,
      top: QQ.top,
      right: QQ.right,
      bottom: QQ.bottom
    });

    function qQ(QQ) {
      return {
        x: (QQ.left + QQ.right) / 2,
        y: (QQ.top + QQ.bottom) / 2
      }
    }

    function TQ(QQ) {
      return 0 === QQ.length ? null : QQ.reduce(((QQ, WQ) => ({
        left: Math.min(QQ.left, WQ.left),
        top: Math.min(QQ.top, WQ.top),
        right: Math.max(QQ.right, WQ.right),
        bottom: Math.max(QQ.bottom, WQ.bottom)
      })))
    }

    function zQ(QQ, WQ) {
      const XQ = Math.max(0, (WQ - (QQ.right - QQ.left)) / 2),
        wQ = Math.max(0, (WQ - (QQ.bottom - QQ.top)) / 2);
      return {
        left: QQ.left - XQ,
        top: QQ.top - wQ,
        right: QQ.right + XQ,
        bottom: QQ.bottom + wQ
      }
    }

    function sQ(QQ, WQ) {
      return WQ.x >= QQ.left && WQ.x <= QQ.right && WQ.y >= QQ.top && WQ.y <= QQ.bottom
    }

    function FQ(QQ, WQ, XQ) {
      let wQ = null,
        TQ = 1 / 0;
      for (const {
          id: qQ,
          box: zQ
        }
        of WQ) {
        const WQ = (zQ.right - zQ.left) * (zQ.bottom - zQ.top);
        sQ(zQ, QQ) && WQ < TQ && (TQ = WQ, wQ = qQ)
      }
      if (null !== wQ) return wQ;
      let FQ = 1 / 0;
      for (const {
          id: PQ,
          box: gQ
        }
        of WQ) {
        if (!sQ(zQ(gQ, XQ), QQ)) continue;
        const WQ = qQ(gQ),
          TQ = Math.hypot(QQ.x - WQ.x, QQ.y - WQ.y);
        TQ < FQ && (FQ = TQ, wQ = PQ)
      }
      return wQ
    }

    function PQ(QQ, WQ, XQ) {
      return {
        left: XQ.left,
        top: XQ.top,
        right: QQ - XQ.right,
        bottom: WQ - XQ.bottom
      }
    }

    function gQ(QQ, WQ, XQ, wQ) {
      const qQ = (QQ, WQ, XQ) => Math.max(Math.min(WQ, 0), Math.min(Math.max(XQ, 0), QQ));
      return {
        x: qQ(WQ, wQ.left - QQ.left, wQ.right - QQ.right),
        y: qQ(XQ, wQ.top - QQ.top, wQ.bottom - QQ.bottom)
      }
    }

    function JQ(QQ, WQ, XQ, wQ, qQ) {
      const TQ = QQ.dx * wQ + WQ,
        zQ = QQ.dy * qQ + XQ,
        sQ = QQ => Math.max(-1, Math.min(1, QQ));
      return {
        dx: sQ(TQ / wQ),
        dy: sQ(zQ / qQ)
      }
    }

    function rQ(QQ, WQ, XQ, wQ) {
      return WQ <= 0 || XQ <= 0 ? 1 : Math.max(.05, Math.min(1, QQ / WQ, wQ / XQ))
    }

    function IQ(QQ, WQ, XQ) {
      return Math.min(QQ.right, WQ.right) - Math.max(QQ.left, WQ.left) > XQ && Math.min(QQ.bottom, WQ.bottom) - Math.max(QQ.top, WQ.top) > XQ
    }

    function jQ(QQ, WQ) {
      const XQ = (QQ, WQ, XQ, wQ) => WQ - QQ > wQ - XQ ? XQ - QQ > WQ - wQ ? wQ - WQ : XQ - QQ : QQ < XQ ? XQ - QQ : WQ > wQ ? wQ - WQ : 0;
      return {
        x: XQ(QQ.left, QQ.right, WQ.left, WQ.right),
        y: XQ(QQ.top, QQ.bottom, WQ.top, WQ.bottom)
      }
    }

    function BQ(QQ, WQ, XQ) {
      return IQ(QQ, {
        left: 0,
        top: 0,
        right: WQ,
        bottom: XQ
      }, 0)
    }

    function yQ(QQ, WQ) {
      let {
        avoid: XQ = null,
        bounds: wQ = null
      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, qQ = 0, TQ = 1 / 0;
      return QQ.forEach(((QQ, zQ) => {
        const sQ = WQ.filter((WQ => IQ(QQ, WQ, 0))).length,
          FQ = null !== wQ && (QQ.left < wQ.left || QQ.top < wQ.top || QQ.right > wQ.right || QQ.bottom > wQ.bottom),
          PQ = sQ + (XQ && IQ(QQ, XQ, 0) ? 1e3 : 0) + (FQ ? 1e6 : 0);
        PQ < TQ && (qQ = zQ, TQ = PQ)
      })), qQ
    }
  },
  9262: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => sQ,
      f: () => TQ,
      j: () => qQ,
      m: () => zQ,
      o: () => JQ,
      r: () => gQ,
      s: () => PQ,
      u: () => FQ
    });
    var wQ = XQ(2563);
    const qQ = ["J", "C", "A", "P", "U", "X", "G"],
      TQ = {
        J: "jump",
        C: "crouch",
        A: "attack",
        P: "attack",
        U: "use",
        X: "extra",
        G: "game"
      };

    function zQ(QQ) {
      return QQ ? ["X"] : ["P", "X"]
    }
    const sQ = Object.freeze({
      faces: null,
      names: Object.freeze({}),
      shop: !0,
      bag: !0,
      sprint: !0,
      items: null,
      rowIcons: wQ.E,
      pinnedIcons: Object.freeze({
        rightOfCamera: null,
        leftEnd: null
      })
    });

    function FQ(QQ, WQ, XQ) {
      const wQ = QQ.querySelector(".InGameUi .TouchComponentsButtons");
      if (!wQ) return sQ;
      const TQ = {},
        zQ = {};
      for (const sQ of qQ) {
        const QQ = wQ.querySelector(`.TouchSlot${sQ} > .TouchKey`);
        if (QQ) {
          var FQ, PQ;
          TQ[sQ] = QQ.cloneNode(!0);
          const WQ = (null !== (FQ = null === (PQ = QQ.querySelector(".TouchKeyLabel")) || void 0 === PQ ? void 0 : PQ.textContent) && void 0 !== FQ ? FQ : "").split(/\s+/).filter((QQ => !/[\d\xd7]/.test(QQ))).join(" ");
          WQ && (zQ[sQ] = WQ)
        }
      }
      const gQ = WQ => {
          const XQ = QQ.querySelector(`.InGameUi ${WQ}`);
          return null !== XQ && !XQ.classList.contains("Hidden")
        },
        JQ = [...QQ.querySelectorAll(".InGameUi .HotBarContainer.Touch .HotBarGameItemsContainer .InvenItem")].map((QQ => QQ.cloneNode(!0)));
      return {
        faces: Object.keys(TQ).length > 0 ? TQ : null,
        names: zQ,
        shop: gQ(".TouchInventoryKey.ShopKey"),
        bag: gQ(".TouchInventoryKey.BagKey"),
        sprint: gQ(".TouchSprintHit"),
        items: JQ.length > 0 ? JQ : null,
        rowIcons: WQ,
        pinnedIcons: XQ
      }
    }

    function PQ(QQ, WQ) {
      const XQ = {};
      for (const wQ of [...zQ(WQ), "G"]) {
        const WQ = QQ.names[wQ];
        WQ && (XQ[TQ[wQ]] = WQ)
      }
      return XQ
    }

    function gQ(QQ, WQ) {
      const {
        faces: XQ
      } = QQ;
      if (null === XQ) return [];
      const wQ = new Set(Object.keys(XQ).map((QQ => TQ[QQ])));
      return zQ(WQ).filter((QQ => !wQ.has(TQ[QQ])))
    }

    function JQ(QQ, WQ) {
      QQ.replaceChildren(...[...WQ.childNodes].map((QQ => QQ.cloneNode(!0))))
    }
  },
  9170: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      B: () => JQ,
      D: () => gQ,
      G: () => rQ,
      H: () => IQ,
      e: () => TQ,
      i: () => sQ,
      m: () => PQ,
      p: () => FQ,
      r: () => zQ,
      v: () => qQ,
      y: () => wQ,
      z: () => jQ
    });
    const wQ = 14,
      qQ = 6,
      TQ = (wQ + qQ) / 2,
      zQ = 200,
      sQ = zQ / 2,
      FQ = zQ / 2 - 1,
      PQ = qQ / wQ * (zQ / 2),
      gQ = (QQ, WQ) => -Math.PI / 2 + 2 * QQ * Math.PI / WQ,
      JQ = (QQ, WQ, XQ) => {
        const wQ = 2 * Math.PI / XQ;
        return (Math.round((Math.atan2(WQ, QQ) + Math.PI / 2) / wQ) % XQ + XQ) % XQ
      },
      rQ = .5,
      IQ = (QQ, WQ, XQ) => Math.hypot(QQ.x, QQ.y) < rQ ? XQ : JQ(QQ.x, QQ.y, WQ),
      jQ = (QQ, WQ, XQ, wQ, qQ) => {
        const TQ = Math.PI / WQ,
          zQ = gQ(QQ, WQ),
          sQ = zQ - TQ,
          FQ = zQ + TQ,
          PQ = (QQ, WQ) => `${XQ+QQ*Math.cos(WQ)} ${XQ+QQ*Math.sin(WQ)}`;
        return [`M ${PQ(wQ,sQ)}`, `L ${PQ(qQ,sQ)}`, `A ${qQ} ${qQ} 0 0 1 ${PQ(qQ,FQ)}`, `L ${PQ(wQ,FQ)}`, `A ${wQ} ${wQ} 0 0 0 ${PQ(wQ,sQ)}`, "Z"].join(" ")
      }
  },
  9195: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => zQ
    });
    var wQ = XQ(61),
      qQ = XQ(9145),
      TQ = XQ(2535);

    function zQ() {
      const QQ = (0, TQ.g)("shopInfo"),
        [, WQ] = (0, wQ.useReducer)((QQ => QQ + 1), 0);
      return (0, TQ.d)("shopInfo", WQ), !(0, qQ.b)(QQ)
    }
  },
  8563: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => qQ,
      c: () => TQ,
      g: () => rQ,
      j: () => JQ,
      n: () => PQ,
      o: () => sQ,
      r: () => wQ,
      v: () => IQ,
      w: () => jQ
    });
    const wQ = ["menuConfirm", "menuBack", "menuTabPrevious", "menuTabNext", "menuPageUp", "menuPageDown", "menuSecondary", "menuToggleCursor"],
      qQ = [{
        group: "gameplay",
        actions: ["jump", "sneak", "sneakToggle", "sprint", "attack", "use", "hotbarPrevious", "hotbarNext", "inventory", "actionButton", "perspective", "pickBlock", "drop", "emoteWheel", "chat", "pause", "leaderboard"]
      }, {
        group: "menu",
        actions: wQ
      }, {
        group: "inventory",
        actions: ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryClose", "inventoryPanelPrevious", "inventoryPanelNext", "inventoryDrop", "inventoryHotbarSwap"]
      }, {
        group: "keyboard",
        actions: ["keyboardType", "keyboardBackspace", "keyboardSpace", "keyboardCaretLeft", "keyboardCaretRight", "keyboardShift", "keyboardSymbols", "keyboardSubmit", "keyboardClose", "keyboardChannel"]
      }],
      TQ = {
        jump: "A",
        sneak: "B",
        sneakToggle: "RS",
        sprint: "LS",
        attack: "RT",
        use: "LT",
        hotbarPrevious: "LB",
        hotbarNext: "RB",
        inventory: "Y",
        actionButton: "X",
        perspective: "Up",
        pickBlock: "Up",
        drop: "Down",
        emoteWheel: "Left",
        chat: "Right",
        pause: "Menu",
        leaderboard: "View",
        menuConfirm: "A",
        menuBack: "B",
        menuTabPrevious: "LB",
        menuTabNext: "RB",
        menuPageUp: "LT",
        menuPageDown: "RT",
        menuSecondary: "X",
        menuToggleCursor: "LS",
        inventoryPrimary: "A",
        inventorySecondary: "X",
        inventoryQuickMove: "RS",
        inventoryClose: "B",
        inventoryPanelPrevious: "LB",
        inventoryPanelNext: "RB",
        inventoryDrop: "View",
        inventoryHotbarSwap: "LS",
        keyboardType: "A",
        keyboardBackspace: "X",
        keyboardSpace: "Y",
        keyboardCaretLeft: "LB",
        keyboardCaretRight: "RB",
        keyboardShift: "LT",
        keyboardSymbols: "RT",
        keyboardSubmit: "Menu",
        keyboardClose: "B",
        keyboardChannel: "View"
      },
      zQ = ["pickBlock", "perspective"],
      sQ = QQ => zQ.includes(QQ) ? zQ : [QQ],
      FQ = Object.fromEntries(qQ.flatMap((QQ => {
        let {
          group: WQ,
          actions: XQ
        } = QQ;
        return XQ.map((QQ => [QQ, WQ]))
      }))),
      PQ = QQ => FQ[QQ],
      gQ = {
        pause: ["menu"],
        leaderboard: ["menu"],
        inventory: ["menu"],
        menuPageUp: ["inventory"],
        menuPageDown: ["inventory"]
      },
      JQ = QQ => {
        var WQ;
        return [PQ(QQ), ...null !== (WQ = gQ[QQ]) && void 0 !== WQ ? WQ : []]
      },
      rQ = new Set(["menu", "inventory", "keyboard"]),
      IQ = {
        jump: "jump",
        crouch: "sneak",
        sprint: "sprint",
        "primary-fire": "attack",
        "alt-fire": "use",
        SpecialAction1: "actionButton",
        SpecialAction2: "actionButton",
        ReloadGun: "actionButton",
        DropItem: "drop",
        SwapCameraZoom: "perspective",
        "mid-fire": "pickBlock",
        OpenInventory: "inventory",
        OpenSettings: "pause",
        OpenLobbyLeaderboard: "leaderboard",
        OpenShop: "leaderboard",
        OpenEmoteWheel: "emoteWheel"
      },
      jQ = new Set(["forward", "backward", "left", "right"])
  },
  8561: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      C: () => gQ,
      D: () => HQ,
      E: () => iQ,
      b: () => DQ,
      c: () => UQ,
      g: () => rQ,
      j: () => IQ,
      k: () => AQ,
      l: () => hQ,
      n: () => lQ,
      o: () => GQ,
      r: () => cQ,
      t: () => dQ,
      v: () => pQ,
      y: () => aQ
    });
    var wQ = XQ(8563),
      qQ = XQ(8572),
      TQ = XQ(8545),
      zQ = XQ(8590);
    const sQ = QQ => "pickBlock" === QQ ? "perspective" : QQ,
      FQ = (QQ, WQ) => {
        var XQ;
        const qQ = sQ(WQ);
        return null !== (XQ = QQ[qQ]) && void 0 !== XQ ? XQ : wQ.c[qQ]
      },
      PQ = new Map([
        ["menuConfirm", "menuBack"],
        ["inventoryPrimary", "inventoryClose"],
        ["keyboardType", "keyboardClose"]
      ].flatMap((QQ => {
        let [WQ, XQ] = QQ;
        return [
          [WQ, XQ],
          [XQ, WQ]
        ]
      }))),
      gQ = (QQ, WQ) => null !== QQ && void 0 !== QQ ? QQ : "nintendo" === WQ,
      JQ = QQ => gQ((0, qQ.g)().swapConfirmBack, (0, qQ.i)()) && PQ.get(QQ) || QQ,
      rQ = QQ => FQ((0, qQ.g)().bindings, JQ(QQ)),
      IQ = QQ => wQ.c[JQ(QQ)],
      jQ = Object.keys(wQ.c),
      BQ = QQ => "gameplay" === (0, wQ.n)(QQ) ? ["gameplay"] : (0, wQ.j)(QQ),
      yQ = (QQ, WQ) => {
        const XQ = BQ(WQ);
        return BQ(QQ).some((QQ => XQ.includes(QQ)))
      },
      VQ = (QQ, WQ, XQ) => {
        const qQ = FQ(QQ, WQ),
          zQ = new Set((0, wQ.o)(WQ)),
          PQ = [...zQ];
        for (let wQ = PQ.pop(); wQ; wQ = PQ.pop())
          for (const WQ of jQ) {
            const TQ = FQ(QQ, WQ);
            zQ.has(WQ) || TQ !== XQ && TQ !== qQ || !yQ(wQ, WQ) || (zQ.add(WQ), PQ.push(WQ))
          }
        const gQ = {
          ...QQ
        };
        for (const JQ of zQ) {
          const WQ = FQ(QQ, JQ) === qQ ? XQ : qQ,
            zQ = (0, wQ.j)(JQ).some((QQ => wQ.g.has(QQ)));
          if ((0, TQ.K)(WQ) && zQ) return null;
          gQ[sQ(JQ)] = WQ
        }
        for (const TQ of Object.keys(gQ)) gQ[TQ] === wQ.c[TQ] && delete gQ[TQ];
        return gQ
      },
      DQ = (QQ, WQ) => null !== VQ((0, qQ.g)().bindings, JQ(QQ), WQ),
      pQ = (QQ, WQ) => {
        if (rQ(QQ) === WQ) return !0;
        const XQ = VQ((0, qQ.g)().bindings, JQ(QQ), WQ);
        return !!XQ && ((0, qQ.l)({
          bindings: XQ
        }), !0)
      },
      GQ = (QQ, WQ) => {
        const XQ = (0, wQ.o)(WQ);
        return jQ.filter((WQ => sQ(WQ) === WQ && !XQ.includes(WQ) && FQ(QQ, JQ(WQ)) !== rQ(WQ)))
      },
      UQ = ["southpaw", "triggersSwapped"],
      bQ = {
        southpaw: {
          sprint: "RS",
          sneakToggle: "LS"
        },
        triggersSwapped: {
          attack: "LT",
          use: "RT"
        }
      },
      vQ = QQ => Object.keys(bQ[QQ]),
      dQ = (QQ, WQ) => "southpaw" === QQ ? WQ.swapSticks : vQ(QQ).every((XQ => FQ(WQ.bindings, XQ) === bQ[QQ][XQ])),
      HQ = (QQ, WQ) => {
        const XQ = (0, qQ.g)();
        let TQ = XQ.bindings;
        for (const qQ of vQ(QQ)) {
          const XQ = WQ ? bQ[QQ][qQ] : wQ.c[qQ];
          if (TQ = VQ(TQ, qQ, XQ), !TQ) return !1
        }
        return (0, qQ.l)({
          swapSticks: "southpaw" === QQ ? WQ : XQ.swapSticks,
          bindings: TQ
        }), !0
      },
      aQ = () => {
        (0, qQ.l)({
          swapSticks: !1,
          bindings: {}
        })
      },
      lQ = () => (0, qQ.g)().swapSticks ? "RightStick" : "LeftStick",
      hQ = () => (0, qQ.g)().swapSticks ? "LeftStick" : "RightStick",
      iQ = QQ => (0, qQ.g)().swapSticks && (0, TQ.K)(QQ),
      cQ = QQ => iQ(QQ) ? lQ() : hQ(),
      AQ = QQ => {
        if (wQ.w.has(QQ)) return lQ();
        const WQ = wQ.v[QQ];
        return WQ && ("leaderboard" !== WQ || (0, zQ.h)(QQ, (0, zQ.d)())) ? rQ(WQ) : null
      }
  },
  8527: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      ControllerCategory: () => bs,
      ControllerGlyph: () => vq,
      ControllerRoot: () => Gz,
      PadLobbyShortcuts: () => Lz,
      PadSneakChip: () => lz,
      PadTooltip: () => iz,
      attachPressToContinue: () => xz,
      getBoundButton: () => gQ.g,
      getControllerSettings: () => rQ.g,
      getGlyphForNoaAction: () => gQ.k,
      getInventoryCursorState: () => ds,
      getMenuShortcutButton: () => nX,
      getPadGlyphIconName: () => dz,
      getPadGlyphIconUrl: () => Hz,
      getPadRepeatTiming: () => BQ.e,
      handOverPadFocus: () => as,
      hasActivePad: () => vs,
      isPadSteppingSlots: () => Hs
    });
    const wQ = JSON.parse('{"controller":{"inventoryTake":"Take","inventoryTakeHalf":"Take half","inventoryPlace":"Place","inventoryPlaceOne":"Place one","inventoryQuickMove":"Quick move","inventoryToHotbar":"To hotbar","inventoryPutBack":"Put back","inventoryHotbarSwap":"Swap with hotbar","inventorySwapHere":"Swap here","inventoryCancel":"Cancel","inventoryClose":"Close","inventoryDrop":"Drop (hold: stack)","inventorySelect":"Select","inventoryCraft":"Craft (hold to repeat)","inventoryCraftAll":"Craft all","inventoryChooseRecipe":"Choose","inventoryBackToRecipes":"Back to recipes","inventoryType":"Type","inventoryPanels":"Switch panel","inventoryCategory":"Category","inventoryPage":"Page","disconnected":"Controller disconnected","gameplayReload":"Reload","gameplayActionWheelHint":"(hold for more)","gameplaySneaking":"Sneaking","gameplayLoadFailedTitle":"Controller unavailable","gameplayLoadFailedSubtitle":"Reload the page to play with your controller.","gameplayDropStack":"Keep holding to drop the stack","gameplayAttackLatched":"Attacking","gameplayPickBlock":"Pick block","padButtonView":"View","padButtonMenu":"Menu","padButtonHome":"Home","padButtonCreate":"Create","padButtonOptions":"Options","padButtonDpadUp":"D-pad \u2191","padButtonDpadDown":"D-pad \u2193","padButtonDpadLeft":"D-pad \u2190","padButtonDpadRight":"D-pad \u2192","padButtonLeftStick":"L Stick","padButtonRightStick":"R Stick","settingsLook":"Look","settingsLookSensitivityX":"Look sensitivity (horizontal)","settingsLookSensitivityY":"Look sensitivity (vertical)","settingsAimLookSensitivity":"Look sensitivity while aiming (use held)","settingsInvertLookX":"Invert horizontal look","settingsInvertLookY":"Invert vertical look","settingsLookCurve":"Look curve","settingsLookCurveHint":"Steep gives finer aim near the centre, Linear turns at an even rate, and Boost turns faster when you hold the stick all the way.","settingsCurveExponential":"Steep","settingsCurveLinear":"Linear","settingsCurveBoost":"Boost","settingsLookDeadzone":"Look deadzone","settingsGyro":"Gyro aiming","settingsGyroToggle":"Aim by moving the controller","settingsGyroToggleInfo":"Turn and tilt the controller to aim, on top of the right stick.","settingsGyroTogglePhone":"Aim by moving your phone or tablet","settingsGyroToggleInfoPhone":"Turn and tilt your phone or tablet to aim, on top of the right stick.","settingsGyroUnsupported":"Gyro aiming needs Chrome or Edge.","settingsGyroBlocked":"Gyro aiming isn\'t available on this site.","settingsGyroPhoneNeedsController":"Connect a controller to aim by moving your phone or tablet.","settingsGyroSteamHint":"If Steam already turns your gyro into mouse movement, leave this off.","settingsGyroConnect":"Connect motion controller","settingsGyroConnectHint":"Works with DualSense, DualShock 4 and Switch controllers.","settingsGyroConnectNeedsClick":"Click Connect with your mouse: the browser asks before sharing a controller.","settingsGyroOpenFailed":"Another app is using the controller. Close apps such as Steam or DS4Windows, then try again.","settingsGyroConnected":"Aiming with {{name}}.","settingsGyroAllowMotion":"Allow motion sensor","settingsGyroAllowNeedsTap":"Tap Allow motion sensor on your screen to turn it on.","settingsGyroPhoneOn":"Aiming with this device\'s motion sensor.","settingsGyroPhoneWaiting":"Waiting for this device\'s motion sensor\u2026","settingsGyroPhoneNoSensor":"No motion sensor found on this device.","settingsGyroPhoneDenied":"Motion access is blocked. Allow it in your browser settings.","settingsGyroSensitivity":"Gyro sensitivity","settingsGyroActivation":"Gyro turns on","settingsGyroAlways":"Always","settingsGyroWhileAiming":"While aiming","settingsGyroWhileButton":"While holding a button","settingsGyroAimingHint":"Hold {{button}} to aim with motion.","settingsGyroButton":"Gyro button","settingsGyroButtonHint":"While gyro aiming is on, this button only turns the gyro on in game, so pick one you rarely use.","settingsMovement":"Movement","settingsMoveDeadzone":"Move deadzone","settingsAutoSprint":"Sprint at full tilt","settingsAutoSprintInfo":"Push the movement stick all the way to sprint.","settingsSneak":"Sneak","settingsSneakHold":"Hold","settingsSneakToggle":"Toggle","settingsButtons":"Buttons","settingsPromptFamily":"Button prompts","settingsPromptAuto":"Match my controller","settingsPromptXbox":"Xbox","settingsPromptPlayStation":"PlayStation","settingsPromptNintendo":"Nintendo","settingsPromptSteamDeck":"Steam Deck","settingsPromptGeneric":"Generic","settingsHideButtonHints":"Hide button hints","settingsVibration":"Vibration","settingsCursorSpeed":"Virtual cursor speed","settingsCursorMagnetism":"Cursor snaps onto buttons","settingsMenuBackToCategories":"Back returns to the category list first","settingsAccessibility":"Accessibility","settingsSwapConfirmBack":"Swap confirm and back","settingsSwapToast":"Select and Back have swapped buttons.","settingsLayoutRefusedToast":"This layout doesn\'t fit your current buttons. Reset them to use it.","settingsSwapConfirmBackInfo":"Select with the right face button and go back with the bottom one, in menus, the inventory and the on-screen keyboard. On by default for Nintendo controllers.","settingsButtonRepeat":"Button repeat","settingsButtonRepeatHint":"How a held button repeats in menus, sliders, the on-screen keyboard and crafting. Off acts once per press, and holding drop in game drops just one item.","settingsButtonRepeatDefault":"Default","settingsButtonRepeatSlow":"Slow (0.8 s, then 4 a second)","settingsButtonRepeatOff":"Off (once per press)","settingsTapHoldTime":"Tap/hold time","settingsTapHoldTimeHint":"How long to hold the chat, emote or action button to open its wheel, or the view button to change view where a tap picks a block. Dropping a whole stack takes 0.8, 1 or 1.3 s.","settingsTapHoldShort":"Short (0.25 s)","settingsTapHoldMedium":"Medium (0.5 s)","settingsTapHoldLong":"Long (0.8 s)","settingsEmoteButton":"Emote button","settingsEmoteButtonTapHoldHint":"Tap to repeat your last emote, or hold to open the emote wheel.","settingsEmoteButtonWheelHint":"Any press opens the emote wheel, with no hold to time. Pick with the stick, then select.","settingsEmoteButtonTapHold":"Tap repeats, hold opens wheel","settingsEmoteButtonWheel":"Opens the wheel","settingsAttackMode":"Attack / mine","settingsAttackHoldHint":"Hold attack to keep attacking or mining.","settingsAttackToggleHint":"Press attack once to keep attacking or mining, and again to stop.","settingsAttackHold":"Hold","settingsAttackToggle":"Toggle","settingsLargePointer":"Large pointer and focus","settingsLargePointerInfo":"A bigger menu cursor, thicker selection brackets and bigger button hints.","settingsRemap":"Remap buttons","settingsRemapHint":"Select an action, then press a button. If that button is taken, the two swap.","settingsLayoutSouthpaw":"Southpaw (move with the right stick)","settingsLayoutTriggersSwapped":"Triggers swapped (attack with the left trigger)","settingsCapturePrompt":"Press a button","settingsCaptureCancelHint":"Press {{button}} to cancel","settingsCaptureCancelOrBindHint":"Tap {{button}} to cancel, or hold it to choose it","settingsReset":"Reset","settingsSwapNotice":"{{action}} moved to {{button}}","settingsResetAll":"Reset all buttons and sticks","settingsGroupGameplay":"Movement & gameplay","settingsGroupMenus":"Menus","settingsGroupInventory":"Inventory","settingsGroupKeyboard":"On-screen keyboard","settingsActionMove":"Move","settingsActionLook":"Look around","settingsActionJump":"Jump","settingsActionSneak":"Sneak","settingsActionSneakToggle":"Toggle sneak","settingsActionSprint":"Sprint","settingsActionAttack":"Attack / mine","settingsActionUse":"Use / place","settingsActionHotbarPrevious":"Previous hotbar slot","settingsActionHotbarNext":"Next hotbar slot","settingsActionInventory":"Inventory","settingsActionActionButton":"Game action","settingsActionPerspective":"Change view","settingsActionPickBlock":"Pick block (creative)","settingsActionDrop":"Drop item","settingsActionEmoteWheel":"Emotes","settingsActionChat":"Chat","settingsActionPause":"Pause menu","settingsActionLeaderboard":"Shop / leaderboard","settingsActionMenuConfirm":"Select","settingsActionMenuBack":"Back","settingsActionMenuTabPrevious":"Previous tab","settingsActionMenuTabNext":"Next tab","settingsActionMenuPageUp":"Page up","settingsActionMenuPageDown":"Page down","settingsActionMenuSecondary":"Secondary action","settingsActionMenuToggleCursor":"Switch to virtual cursor","settingsActionInventoryPrimary":"Pick up / place","settingsActionInventorySecondary":"Pick up half / place one","settingsActionInventoryQuickMove":"Quick move","settingsActionInventoryHotbarSwap":"Swap with hotbar slot","settingsActionInventoryClose":"Close","settingsActionInventoryPanelPrevious":"Previous panel","settingsActionInventoryPanelNext":"Next panel","settingsActionInventoryDrop":"Drop item","settingsActionKeyboardType":"Type key","settingsActionKeyboardBackspace":"Backspace","settingsActionKeyboardSpace":"Space","settingsActionKeyboardCaretLeft":"Move cursor left","settingsActionKeyboardCaretRight":"Move cursor right","settingsActionKeyboardShift":"Shift","settingsActionKeyboardSymbols":"Accents and symbols","settingsActionKeyboardSubmit":"Send","settingsActionKeyboardClose":"Close keyboard","settingsActionKeyboardChannel":"Chat channel","settingsAlternatives":"Try alternatives","settingsAlternativesHint":"Try each way of playing and keep the one that feels best.","settingsMenuNavigation":"Menu navigation","settingsMenuNavigationHint":"Steer a cursor with the stick and jump between buttons with the D-pad, or use just one.","settingsNavHybrid":"Cursor and D-pad","settingsMenuNavFocus":"Jump between buttons","settingsVirtualCursor":"Virtual cursor","settingsInventoryNavigation":"Inventory","settingsInventoryNavigationHint":"Steer a cursor with the stick and step slot by slot with the D-pad, or use just one.","settingsInventoryNavSlot":"Slot by slot","settingsQuickChat":"Hold chat button","settingsQuickChatHint":"Hold the chat button to pick a quick phrase. Tapping it still opens chat.","settingsQuickChatWheel":"Quick chat wheel","settingsQuickChatOff":"Off","settingsLeaderboardButton":"Shop / leaderboard button","settingsLeaderboardButtonHint":"Open the shop in one press in games that have one. The lobby leaderboard is still in the pause menu.","settingsLeaderboardButtonShop":"Shop, in games with one","settingsLeaderboardButtonLeaderboard":"Always the leaderboard","settingsTester":"Gamepad tester","settingsTesterNoPad":"Connect a gamepad and press any button to test it.","settingsTesterFamily":"Detected: {{family}}","settingsTesterHint":"Start a test to try every button and stick without moving through the menu.","settingsTesterStart":"Start test","settingsTesterStop":"Stop test","settingsTesterTesting":"Press anything to see it light up. To stop, hold {{button}} or press it three times.","settingsControlsNote":"Playing with a gamepad? Change its buttons and feel in Gamepad settings.","settingsOpenController":"Gamepad settings","keyboardSpace":"Space","keyboardSend":"Send","keyboardDone":"Done","keyboardTargetChat":"Chat","keyboardTargetSign":"Sign","keyboardTargetNameTag":"Name tag","keyboardTargetBook":"Book page","keyboardTargetBookTitle":"Book title","keyboardTargetText":"Text","keyboardPhraseGg":"gg","keyboardPhraseHi":"hi","keyboardPhraseThanks":"thanks","keyboardPhraseGl":"gl","keyboardPhraseBrb":"brb","keyboardPhraseYes":"yes","keyboardPhraseNo":"no","keyboardPhraseHelp":"help!","quickChatPick":"Pick a phrase","actionWheelPick":"Pick an action","wheelReleaseToPick":"Release to pick","wheelClose":"Close","wheelChoose":"Choose","menusSelect":"Select","menusBack":"Back","menusClose":"Close","menusQuickChat":"Quick chat (hold)","menusSkipTutorial":"Skip tutorial","menusTabs":"Tabs","menusRows":"Rows","menusCursorMode":"Cursor","menusFocusMode":"Focus","menusClick":"Click","menusRightClick":"Right-click","menusScroll":"Scroll","menusFriends":"Friends","menusSearch":"Search","menusSettings":"Settings","menusLeaveGameTitle":"Leave the game?","menusLeaveGameLeave":"Leave","menusLeaveGameStay":"Stay","menusNotifications":"Notifications","menusLobby":"Lobby","menusShop":"Shop","menusTasks":"Tasks & leaderboards","menusInvite":"Invite friends","menusAdjust":"Adjust","menusFavourite":"Favourite","screensPressToContinue":"Press {{button}} to continue","screensPressToEnterGame":"Press {{button}} to enter game","screensEnterGame":"Enter game","screensBackToGames":"Back to games","tutorialMine":"Mine","tutorialPlace":"Place / Use","tutorialInventory":"Inventory","tutorialPause":"Pause","menusUseMouse":"Use a mouse or touch here"}}');
    var qQ = XQ(1226),
      TQ = XQ(1468),
      zQ = XQ(8536),
      sQ = XQ(78),
      FQ = XQ(26),
      PQ = XQ(31),
      gQ = XQ(8561),
      JQ = XQ(8596),
      rQ = XQ(8572),
      IQ = XQ(8605),
      jQ = XQ(8545),
      BQ = XQ(9041),
      yQ = XQ(9043),
      VQ = XQ(1728);
    const DQ = (QQ, WQ, XQ) => Math.max(WQ, Math.min(XQ, QQ)),
      pQ = QQ => Math.min(QQ.width, QQ.height) / 720,
      GQ = QQ => Math.max(.15, QQ);
    class UQ {
      constructor() {
        this.locked = !1
      }
      lock() {
        this.locked = !0
      }
      update(QQ, WQ) {
        const XQ = Math.hypot(QQ.x, QQ.y) >= (QQ => Math.max(.3, QQ))(WQ);
        return this.locked ? (this.locked = XQ, !1) : XQ
      }
    }
    const bQ = (QQ, WQ) => {
        const XQ = DQ(WQ.dtMs, 0, 100),
          wQ = XQ / 1e3,
          qQ = pQ(WQ.viewport) * (WQ.cursorSpeedPercent / 100),
          TQ = (0, jQ.p)(WQ.stick, GQ(WQ.moveDeadzone)),
          zQ = Math.hypot(TQ.x, TQ.y),
          sQ = ((QQ, WQ, XQ) => {
            if (WQ < .3) return 0;
            const wQ = XQ / 350;
            return WQ >= .85 ? Math.min(1, QQ + wQ) : Math.max(0, QQ - wQ)
          })(QQ.speedRamp, zQ, XQ);
        let FQ = QQ.x,
          PQ = QQ.y;
        if (zQ > 0) {
          const QQ = .45 + .55 * sQ,
            XQ = WQ.context.overInteractive ? .45 : 1,
            gQ = 1400 * (QQ => {
              const WQ = DQ(QQ, 0, 1);
              return .3 * WQ + .7 * WQ * WQ
            })(zQ) * qQ * QQ * XQ;
          FQ += TQ.x / zQ * gQ * wQ, PQ += TQ.y / zQ * gQ * wQ
        }
        const gQ = Math.hypot(WQ.dpad.x, WQ.dpad.y);
        if (gQ > 0) {
          const QQ = 500 * qQ;
          FQ += WQ.dpad.x / gQ * QQ * wQ, PQ += WQ.dpad.y / gQ * QQ * wQ
        }
        const JQ = WQ.context.magnetTarget;
        if (JQ && zQ < .3 && 0 === gQ) {
          const QQ = ((QQ, WQ, XQ, wQ, qQ) => {
            const TQ = WQ.x - QQ.x,
              zQ = WQ.y - QQ.y,
              sQ = Math.hypot(TQ, zQ);
            if (0 === sQ) return {
              x: 0,
              y: 0
            };
            const FQ = Math.min(sQ, qQ * (1 - wQ / .3));
            let PQ = TQ / sQ * FQ,
              gQ = zQ / sQ * FQ;
            if (wQ > 0) {
              const QQ = XQ.x / wQ,
                WQ = XQ.y / wQ,
                qQ = PQ * QQ + gQ * WQ;
              qQ < 0 && (PQ -= qQ * QQ, gQ -= qQ * WQ)
            }
            return {
              x: PQ,
              y: gQ
            }
          })({
            x: FQ,
            y: PQ
          }, JQ, TQ, zQ, 120 * pQ(WQ.viewport) * wQ);
          FQ += QQ.x, PQ += QQ.y
        }
        return {
          x: DQ(FQ, 0, Math.max(0, WQ.viewport.width - 1)),
          y: DQ(PQ, 0, Math.max(0, WQ.viewport.height - 1)),
          speedRamp: sQ
        }
      },
      vQ = QQ => {
        const WQ = (0, jQ.p)(QQ, .2);
        return 0 !== WQ.x || 0 !== WQ.y
      },
      dQ = (QQ, WQ) => {
        const XQ = (0, jQ.p)(QQ, .2),
          wQ = Math.hypot(XQ.x, XQ.y);
        if (0 === wQ) return {
          x: 0,
          y: 0
        };
        const qQ = wQ * wQ * 1600,
          TQ = DQ(WQ, 0, 100) / 1e3;
        return {
          x: XQ.x / wQ * qQ * TQ,
          y: XQ.y / wQ * qQ * TQ
        }
      },
      HQ = (QQ, WQ) => "y" === WQ ? QQ.scrollHeight > QQ.clientHeight + 1 : QQ.scrollWidth > QQ.clientWidth + 1,
      aQ = (QQ, WQ) => {
        if (!HQ(QQ, WQ)) return !1;
        const XQ = getComputedStyle(QQ),
          wQ = "y" === WQ ? XQ.overflowY : XQ.overflowX;
        return "auto" === wQ || "scroll" === wQ
      },
      lQ = (QQ, WQ, XQ) => {
        for (let TQ = QQ instanceof HTMLElement ? QQ : null !== (wQ = null === QQ || void 0 === QQ ? void 0 : QQ.parentElement) && void 0 !== wQ ? wQ : null; TQ; TQ = TQ.parentElement) {
          var wQ;
          if (aQ(TQ, WQ)) return TQ;
          if (TQ === XQ) return null
        }
        if (XQ) return null;
        const qQ = document.scrollingElement;
        return qQ instanceof HTMLElement && HQ(qQ, WQ) ? qQ : null
      },
      hQ = new WeakMap,
      iQ = (QQ, WQ) => {
        const XQ = performance.now(),
          wQ = hQ.get(QQ);
        if (wQ && wQ.axis === WQ && XQ - wQ.atMs < 500 && (!wQ.container || wQ.container.isConnected)) return wQ.container;
        const qQ = cQ(QQ, WQ);
        return hQ.set(QQ, {
          axis: WQ,
          atMs: XQ,
          container: qQ
        }), qQ
      },
      cQ = (QQ, WQ) => {
        let XQ = aQ(QQ, WQ) ? QQ : null,
          wQ = XQ ? XQ.clientWidth * XQ.clientHeight : 0;
        for (const qQ of QQ.querySelectorAll("*")) {
          const QQ = qQ.clientWidth * qQ.clientHeight;
          QQ > wQ && aQ(qQ, WQ) && (XQ = qQ, wQ = QQ)
        }
        return XQ
      },
      AQ = (QQ, WQ, XQ) => "y" === WQ ? XQ < 0 ? QQ.scrollTop > 0 : QQ.scrollTop + QQ.clientHeight < QQ.scrollHeight - 1 : XQ < 0 ? QQ.scrollLeft > 0 : QQ.scrollLeft + QQ.clientWidth < QQ.scrollWidth - 1,
      RQ = (QQ, WQ, XQ) => {
        "y" === WQ ? QQ.scrollBy({
          top: XQ,
          behavior: "instant"
        }) : QQ.scrollBy({
          left: XQ,
          behavior: "instant"
        })
      },
      EQ = QQ => {
        if (!QQ || QQ === document.scrollingElement) return new DOMRect(0, 0, window.innerWidth, window.innerHeight);
        const WQ = QQ.getBoundingClientRect(),
          XQ = Math.max(0, WQ.left),
          wQ = Math.max(0, WQ.top);
        return new DOMRect(XQ, wQ, Math.min(window.innerWidth, WQ.right) - XQ, Math.min(window.innerHeight, WQ.bottom) - wQ)
      },
      CQ = (QQ, WQ) => QQ.left < WQ.right && WQ.left < QQ.right && QQ.top < WQ.bottom && WQ.top < QQ.bottom;
    var uQ = XQ(61),
      LQ = XQ(1081),
      kQ = XQ.n(LQ),
      fQ = XQ(1145);
    let SQ = 0,
      tQ = !1;
    class oQ {
      constructor() {
        this.element = null, this.shownKey = "", this.gap = null
      }
      setElement(QQ) {
        this.element = QQ, this.shownKey = "", this.gap = null
      }
      show(QQ) {
        const WQ = this.element;
        if (!WQ) return;
        const XQ = QQ ? this.keepOnScreen(WQ, QQ) : null,
          wQ = XQ ? `${XQ.left},${XQ.top},${XQ.width},${XQ.height}` : "";
        if (wQ === this.shownKey) return;
        const qQ = "" === this.shownKey;
        this.shownKey = wQ, WQ.classList.toggle("Visible", null !== XQ), XQ && (WQ.classList.toggle("Snap", qQ), WQ.style.width = `${XQ.width}px`, WQ.style.height = `${XQ.height}px`, WQ.style.transform = `translate(${XQ.left}px, ${XQ.top}px)`, qQ && (WQ.offsetWidth, WQ.classList.remove("Snap")))
      }
      hide() {
        this.show(null)
      }
      keepOnScreen(QQ, WQ) {
        var XQ;
        const wQ = `${window.innerWidth}x${window.innerHeight}@${(()=>{if("undefined"===typeof ResizeObserver)return getComputedStyle(document.documentElement).fontSize;if(!tQ){tQ=!0;const QQ=document.createElement("div");QQ.setAttribute("aria-hidden","true"),QQ.style.cssText="position: fixed; top: 0; left: 0; width: 1rem; height: 0; visibility: hidden; pointer-events: none",document.body.appendChild(QQ),new ResizeObserver((()=>{SQ++})).observe(QQ)}return String(SQ)})()}`;
        (null === (XQ = this.gap) || void 0 === XQ ? void 0 : XQ.key) !== wQ && (this.gap = {
          px: parseFloat(getComputedStyle(QQ).paddingLeft) || 0,
          key: wQ
        });
        const qQ = this.gap.px + 2,
          TQ = Math.max(WQ.left, qQ),
          zQ = Math.max(WQ.top, qQ),
          sQ = Math.min(WQ.left + WQ.width, window.innerWidth - qQ),
          FQ = Math.min(WQ.top + WQ.height, window.innerHeight - qQ);
        return sQ <= TQ || FQ <= zQ ? WQ : {
          left: TQ,
          top: zQ,
          width: sQ - TQ,
          height: FQ - zQ
        }
      }
    }
    const eQ = QQ => {
      let {
        placer: WQ,
        className: XQ
      } = QQ;
      const wQ = (0, uQ.useCallback)((QQ => {
        WQ.setElement(QQ)
      }), [WQ]);
      return (0, fQ.jsx)("div", {
        ref: wQ,
        className: kQ()("PadReticle", XQ),
        "aria-hidden": !0
      })
    };
    var nQ = XQ(9048);
    const xQ = {
      x: 0,
      y: 0,
      visible: !1,
      pressed: !1
    };
    const YQ = new class {
      constructor() {
        this.state = xQ, this.listeners = new Set
      }
      get() {
        return this.state
      }
      set(QQ) {
        if (WQ = this.state, XQ = QQ, (WQ.visible || XQ.visible) && (WQ.visible !== XQ.visible || WQ.x !== XQ.x || WQ.y !== XQ.y || WQ.pressed !== XQ.pressed)) {
          var WQ, XQ;
          this.state = QQ;
          for (const WQ of this.listeners) WQ(QQ)
        }
      }
      hide() {
        this.set(xQ)
      }
      subscribe(QQ) {
        return this.listeners.add(QQ), () => {
          this.listeners.delete(QQ)
        }
      }
    };
    var NQ = XQ(9065);
    const ZQ = (QQ, WQ) => {
        let {
          kind: XQ,
          holding: wQ,
          hasPress: qQ,
          hasBack: TQ,
          slotHasItem: zQ
        } = WQ;
        switch (QQ) {
          case "primary":
            return "slot" === XQ ? "slotPrimary" : "recipe" === XQ || "button" === XQ ? qQ ? "pressPrimary" : "click" : "textField" === XQ ? "openKeyboard" : null;
          case "secondary":
            return "slot" === XQ ? "slotSecondary" : "button" !== XQ && "recipe" !== XQ || !qQ ? null : "pressSecondary";
          case "quickMove":
            return "slot" === XQ && zQ ? "slotQuickMove" : null;
          case "hotbarSwap":
            return "slot" === XQ && zQ && !wQ ? "hotbarPick" : null;
          case "openButton":
            return "close";
          case "back":
            return wQ ? "cancel" : TQ ? "pressBack" : "close"
        }
      },
      OQ = QQ => {
        const WQ = [];
        if (QQ.hotbarPicking) return WQ.push({
          actions: ["inventoryPrimary", "inventoryHotbarSwap"],
          labelKey: "inventorySwapHere"
        }), WQ.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryCancel"
        }), WQ;
        if (QQ.holding) "slot" === QQ.kind ? (WQ.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryPlace"
        }), WQ.push({
          actions: ["inventorySecondary"],
          labelKey: "inventoryPlaceOne"
        })) : "textField" === QQ.kind && WQ.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryType"
        }), WQ.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryPutBack"
        }), WQ.push({
          actions: ["inventoryDrop"],
          labelKey: "inventoryDrop"
        }), QQ.openButtonCloses && WQ.push({
          actions: ["inventory"],
          labelKey: "inventoryClose"
        });
        else {
          var XQ;
          "slot" === QQ.kind && QQ.slotHasItem ? (WQ.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryTake"
          }), WQ.push({
            actions: ["inventorySecondary"],
            labelKey: "inventoryTakeHalf"
          }), WQ.push({
            actions: ["inventoryQuickMove"],
            labelKey: QQ.quickMoveToHotbar ? "inventoryToHotbar" : "inventoryQuickMove"
          }), WQ.push({
            actions: ["inventoryHotbarSwap"],
            labelKey: "inventoryHotbarSwap"
          }), WQ.push({
            actions: ["inventoryDrop"],
            labelKey: "inventoryDrop"
          })) : "button" !== QQ.kind && "recipe" !== QQ.kind || !QQ.pressHints ? "button" === QQ.kind || "recipe" === QQ.kind ? WQ.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventorySelect"
          }) : "textField" === QQ.kind && WQ.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryType"
          }) : (QQ.pressHints.primary && WQ.push({
            actions: ["inventoryPrimary"],
            labelKey: QQ.pressHints.primary
          }), QQ.pressHints.secondary && WQ.push({
            actions: ["inventorySecondary"],
            labelKey: QQ.pressHints.secondary
          }));
          const wQ = null === (XQ = QQ.pressHints) || void 0 === XQ ? void 0 : XQ.back;
          wQ && WQ.push({
            actions: ["inventoryClose"],
            labelKey: wQ
          });
          const qQ = [];
          QQ.openButtonCloses && qQ.push("inventory"), wQ || qQ.push("inventoryClose"), qQ.length > 0 && WQ.push({
            actions: qQ,
            labelKey: "inventoryClose"
          })
        }
        return WQ.push({
          actions: ["inventoryPanelPrevious", "inventoryPanelNext"],
          labelKey: "inventoryPanels"
        }), QQ.hasCategories ? WQ.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryCategory"
        }) : QQ.hasList && WQ.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryPage"
        }), WQ
      };
    var KQ = XQ(9069),
      mQ = XQ(2474);
    class MQ {
      constructor(QQ) {
        this.probes = QQ, this.byContainer = new Map, this.byParent = new Map
      }
      find(QQ, WQ) {
        const XQ = lQ(QQ, "y", WQ);
        if (!XQ) return null;
        let wQ = this.byContainer.get(XQ);
        return wQ || (this.probes.push({
          element: XQ,
          rect: wW(XQ.getBoundingClientRect())
        }), wQ = {
          container: XQ,
          box: EQ(XQ),
          group: XW(XQ)
        }, this.byContainer.set(XQ, wQ)), wQ
      }
      findForParent(QQ, WQ) {
        let XQ = this.byParent.get(QQ);
        return void 0 === XQ && (XQ = this.find(QQ, WQ), this.byParent.set(QQ, XQ)), XQ
      }
    }
    const QW = new WeakMap;
    let WW = 0;
    const XW = QQ => {
        let WQ = QW.get(QQ);
        return WQ || (WQ = "el:" + WW++, QW.set(QQ, WQ)), WQ
      },
      wW = QQ => ({
        left: QQ.left,
        top: QQ.top,
        width: QQ.width,
        height: QQ.height
      }),
      qW = QQ => QQ.width > 0 && QQ.height > 0,
      TW = (QQ, WQ) => qW(QQ) && QQ.left + QQ.width > 0 && QQ.top + QQ.height > 0 && QQ.left < WQ.width && QQ.top < WQ.height,
      zW = (QQ, WQ, XQ) => {
        const wQ = QQ.top + QQ.height / 2;
        return TW(QQ, WQ) && (!XQ || wQ >= XQ.top && wQ <= XQ.bottom)
      },
      sW = QQ => ({
        x: QQ.left + QQ.width / 2,
        y: QQ.top + QQ.height / 2
      }),
      FW = (QQ, WQ, XQ) => QQ < 0 ? XQ >= 0 ? 0 : WQ - 1 : ((QQ + XQ) % WQ + WQ) % WQ,
      PW = QQ => "Left" === QQ || "Right" === QQ,
      gW = (QQ, WQ, XQ) => {
        const wQ = PW(XQ),
          qQ = wQ ? QQ.top : QQ.left,
          TQ = wQ ? QQ.height : QQ.width,
          zQ = wQ ? WQ.top : WQ.left,
          sQ = wQ ? WQ.height : WQ.width,
          FQ = Math.max(0, Math.max(zQ - (qQ + TQ), qQ - (zQ + sQ)));
        return TQ > 1.5 * sQ ? {
          gap: FQ,
          offset: Math.max(0, zQ - qQ) + .1 * Math.max(0, qQ - zQ)
        } : {
          gap: FQ,
          offset: Math.abs(zQ + sQ / 2 - (qQ + TQ / 2))
        }
      },
      JW = (QQ, WQ, XQ) => {
        const wQ = ((QQ, WQ, XQ) => {
          const wQ = sW(QQ),
            qQ = sW(WQ),
            TQ = PW(XQ) ? Math.min(QQ.width, WQ.width) / 4 : Math.min(QQ.height, WQ.height) / 4;
          switch (XQ) {
            case "Right":
              return qQ.x - wQ.x >= TQ ? Math.max(0, WQ.left - (QQ.left + QQ.width)) : null;
            case "Left":
              return wQ.x - qQ.x >= TQ ? Math.max(0, QQ.left - (WQ.left + WQ.width)) : null;
            case "Down":
              return qQ.y - wQ.y >= TQ ? Math.max(0, WQ.top - (QQ.top + QQ.height)) : null;
            case "Up":
              return wQ.y - qQ.y >= TQ ? Math.max(0, QQ.top - (WQ.top + WQ.height)) : null
          }
        })(QQ, WQ, XQ);
        if (null === wQ) return null;
        const qQ = gW(QQ, WQ, XQ);
        return wQ + 3 * qQ.gap + .5 * qQ.offset
      },
      rW = (QQ, WQ) => WQ.visible || null !== WQ.scrollGroup && WQ.scrollGroup === QQ.scrollGroup,
      IW = (QQ, WQ, XQ, wQ) => {
        let qQ = null,
          TQ = 1 / 0;
        for (const zQ of WQ) {
          if (zQ.key === QQ.key || !rW(QQ, zQ) || !wQ(zQ)) continue;
          const WQ = JW(QQ.rect, zQ.rect, XQ);
          null !== WQ && WQ < TQ && (qQ = zQ, TQ = WQ)
        }
        return qQ
      },
      jW = (QQ, WQ, XQ) => {
        const wQ = IW(QQ, WQ, XQ, (() => !0));
        if (!wQ || PW(XQ) || null === QQ.scrollGroup || wQ.scrollGroup === QQ.scrollGroup) return wQ;
        const qQ = IW(QQ, WQ, XQ, (WQ => 0 === gW(QQ.rect, WQ.rect, XQ).gap));
        return null !== qQ && void 0 !== qQ ? qQ : wQ
      },
      BW = (QQ, WQ, XQ) => {
        let wQ = null,
          qQ = 1 / 0;
        for (const TQ of WQ) {
          if (!TQ.visible || XQ && !XQ(TQ)) continue;
          const WQ = sW(TQ.rect),
            zQ = Math.hypot(WQ.x - QQ.x, WQ.y - QQ.y);
          zQ < qQ && (wQ = TQ, qQ = zQ)
        }
        return wQ
      },
      yW = QQ => {
        const {
          rect: WQ,
          clip: XQ
        } = QQ;
        if (!XQ) return WQ;
        const wQ = Math.max(WQ.left, XQ.left),
          qQ = Math.max(WQ.top, XQ.top);
        return {
          left: wQ,
          top: qQ,
          width: Math.min(WQ.left + WQ.width, XQ.left + XQ.width) - wQ,
          height: Math.min(WQ.top + WQ.height, XQ.top + XQ.height) - qQ
        }
      },
      VW = (QQ, WQ) => WQ.x >= QQ.left && WQ.x < QQ.left + QQ.width && WQ.y >= QQ.top && WQ.y < QQ.top + QQ.height,
      DW = (QQ, WQ) => {
        let XQ = null,
          wQ = 1 / 0;
        for (const qQ of WQ) {
          const WQ = yW(qQ);
          (qQ.visible || qQ.clip) && VW(WQ, QQ) && (WQ.width * WQ.height < wQ && (XQ = qQ, wQ = WQ.width * WQ.height))
        }
        return XQ
      },
      pW = QQ => {
        let WQ = null;
        for (const XQ of QQ) {
          if (!XQ.visible) continue;
          if (!WQ) {
            WQ = XQ;
            continue
          }
          const QQ = Math.min(WQ.rect.height, XQ.rect.height) / 2,
            wQ = XQ.rect.top - WQ.rect.top;
          (wQ < -QQ || Math.abs(wQ) <= QQ && XQ.rect.left < WQ.rect.left) && (WQ = XQ)
        }
        return WQ
      },
      GW = (QQ, WQ, XQ, wQ, qQ) => {
        const TQ = qQ % WQ,
          zQ = Math.floor(qQ / WQ);
        return {
          left: QQ.left + TQ * XQ,
          top: QQ.top + zQ * wQ,
          width: QQ.width,
          height: QQ.height
        }
      },
      UW = ".EntireInventoryWrapper .Inventory, .HotBarGameItemsContainer",
      bW = ".LazyLoadedItemWrapper",
      vW = ["[data-inven-idx]", "[data-recipe-key]", "[role=button]", "button", "input:not([type=hidden])", "textarea", ".CreativeCategoryTab", ".CreativeCategoryDropdownButton", ".CreativeCategoryDropdownOption", "[data-craft-ingredient]"].join(","),
      dW = [
        ["hotbar", ".HotBarGameItemsContainer"],
        ["gameButtons", ".ClientGameInventoryButtons"],
        ["categories", ".CreativeCategoryRail"],
        ["recipe", ".CraftableInfo"],
        ["armour", ".ArmourItemSlots"],
        ["main", ".InvenBodyRight"],
        ["left", ".InvenLeftSide"]
      ],
      HW = ["gameButtons", "categories", "left", "recipe", "armour", "main", "hotbar"],
      aW = QQ => QQ.hasAttribute("data-inven-idx") ? "slot" : QQ.hasAttribute("data-recipe-key") ? "recipe" : QQ.hasAttribute("data-craft-ingredient") || (0, mQ.A)(QQ) ? "info" : (0, nQ.M)(QQ) ? "textField" : "button",
      lW = (QQ, WQ) => "slot" === WQ ? Number(QQ.getAttribute("data-inven-idx")) : null,
      hW = QQ => QQ.matches(bW) ? QQ.querySelector(vW) : QQ,
      iW = QQ => {
        var WQ, XQ;
        return {
          element: QQ,
          recipe: null !== (WQ = QQ && (null === (XQ = hW(QQ)) || void 0 === XQ ? void 0 : XQ.getAttribute("data-recipe-key"))) && void 0 !== WQ ? WQ : null
        }
      },
      cW = QQ => {
        const WQ = hW(QQ);
        if (!WQ) return {
          kind: "pending",
          idx: null
        };
        const XQ = aW(WQ);
        return {
          kind: XQ,
          idx: lW(WQ, XQ)
        }
      },
      AW = QQ => {
        const WQ = [];
        for (const [XQ, wQ] of dW) {
          QQ.matches(wQ) && WQ.push([XQ, QQ]);
          for (const qQ of QQ.querySelectorAll(wQ)) WQ.push([XQ, qQ])
        }
        return WQ
      },
      RW = (QQ, WQ) => {
        for (const [XQ, wQ] of QQ)
          if (wQ.contains(WQ)) return XQ;
        return "other"
      },
      EW = (QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ) => {
        var FQ;
        const PQ = QQ.children,
          gQ = wW(PQ[0].getBoundingClientRect()),
          JQ = [{
            element: PQ[0],
            rect: gQ
          }];
        if (TQ.push(JQ[0]), 0 === gQ.width || 0 === gQ.height) return;
        let rQ = 1;
        for (; rQ < PQ.length && Math.abs(PQ[rQ].getBoundingClientRect().top - gQ.top) < 1;) rQ++;
        const IQ = QQ => {
            const WQ = {
              element: PQ[QQ],
              rect: wW(PQ[QQ].getBoundingClientRect())
            };
            return TQ.push(WQ), JQ.push(WQ), WQ.rect
          },
          jQ = rQ > 1 ? IQ(1).left - gQ.left : gQ.width,
          BQ = PQ.length > rQ ? IQ(rQ).top - gQ.top : gQ.height,
          yQ = zQ.find(QQ, WQ);
        let VQ = null;
        if (yQ) {
          var DQ;
          const {
            container: QQ,
            box: WQ
          } = yQ;
          VQ = null !== (DQ = sQ.get(QQ)) && void 0 !== DQ ? DQ : null, VQ || (VQ = {
            top: QQ.scrollTop,
            left: QQ.scrollLeft,
            box: WQ,
            viewport: wQ,
            targets: [],
            probes: [],
            holdsOthers: !1
          }, sQ.set(QQ, VQ)), VQ.probes.push(...JQ)
        }
        const pQ = qQ.length;
        for (let vQ = 0; vQ < PQ.length; vQ++) {
          var GQ, UQ, bQ;
          const QQ = PQ[vQ],
            WQ = GW(gQ, rQ, jQ, BQ, vQ),
            TQ = QQ.firstElementChild ? QQ.querySelector(vW) : null,
            zQ = TQ ? aW(TQ) : "pending";
          qQ.push({
            key: XW(QQ),
            rect: WQ,
            panel: XQ,
            scrollGroup: null !== (GQ = null === yQ || void 0 === yQ ? void 0 : yQ.group) && void 0 !== GQ ? GQ : null,
            visible: zW(WQ, wQ, null === yQ || void 0 === yQ ? void 0 : yQ.box),
            clip: null !== (UQ = null === yQ || void 0 === yQ ? void 0 : yQ.box) && void 0 !== UQ ? UQ : null,
            element: QQ,
            kind: zQ,
            idx: TQ ? lW(TQ, zQ) : null,
            scrollContainer: null !== (bQ = null === yQ || void 0 === yQ ? void 0 : yQ.container) && void 0 !== bQ ? bQ : null
          })
        }
        null === (FQ = VQ) || void 0 === FQ || FQ.targets.push(...qQ.slice(pQ))
      },
      CW = QQ => QQ instanceof Element && null !== QQ.closest(bW),
      uW = QQ => null !== QQ.scrollContainer && CW(QQ.element);
    class LW {
      constructor() {
        this.latched = null, this.presses = 0
      }
      press(QQ, WQ, XQ, wQ) {
        this.latched = {
          source: QQ,
          focusKey: WQ,
          sinceMs: XQ,
          hold: {
            id: ++this.presses,
            holdMs: wQ
          }
        }
      }
      update(QQ, WQ, XQ) {
        const wQ = this.latched;
        return wQ ? QQ && WQ === wQ.focusKey ? XQ - wQ.sinceMs < wQ.hold.holdMs ? null : (this.latched = null, wQ.source) : (this.latched = null, null) : null
      }
      getHold() {
        var QQ, WQ;
        return null !== (QQ = null === (WQ = this.latched) || void 0 === WQ ? void 0 : WQ.hold) && void 0 !== QQ ? QQ : null
      }
      reset() {
        this.latched = null
      }
    }
    var kW = XQ(9071);
    const fW = {
        kind: "none"
      },
      SW = QQ => ({
        x: QQ.clientX,
        y: QQ.clientY
      }),
      tW = () => 2 * (parseFloat(getComputedStyle(document.documentElement).fontSize) || 16);
    class oW {
      constructor() {
        this.hovered = fW, this.signature = "", this.holding = !1, this.lastPoint = {
          clientX: 0,
          clientY: 0
        }
      }
      sync(QQ, WQ, XQ, wQ, qQ) {
        const TQ = null !== WQ ? {
            kind: "slot",
            idx: WQ
          } : XQ ? {
            kind: "element",
            element: XQ
          } : fW,
          zQ = `${qQ}|${Math.round(wQ.clientX)},${Math.round(wQ.clientY)}`,
          sQ = (FQ = this.hovered, PQ = TQ, "slot" === FQ.kind && "slot" === PQ.kind ? FQ.idx === PQ.idx : "element" === FQ.kind && "element" === PQ.kind ? FQ.element === PQ.element : FQ.kind === PQ.kind);
        var FQ, PQ;
        if (sQ && zQ === this.signature) return;
        const gQ = !sQ || qQ !== this.holding || "" === this.signature;
        this.signature = zQ, this.holding = qQ, this.lastPoint = wQ;
        const JQ = this.hovered;
        if (this.hovered = TQ, "slot" === TQ.kind) return this.leaveElement(JQ, null, wQ), void(gQ ? QQ.hover(TQ.idx, wQ) : QQ.moveTo(wQ));
        if (sQ) return void("element" === TQ.kind ? (0, nQ.r)(TQ.element, TQ.element, SW(wQ)) : QQ.hover(null, wQ));
        QQ.hover(null, wQ);
        const rQ = "element" === TQ.kind ? TQ.element : null;
        "element" === JQ.kind ? (0, nQ.r)(JQ.element, rQ, SW(wQ)) : rQ && (0, nQ.r)(null, rQ, SW(wQ))
      }
      invalidate() {
        this.signature = ""
      }
      clear(QQ) {
        const WQ = this.hovered;
        this.hovered = fW, this.signature = "", "none" !== WQ.kind && (this.leaveElement(WQ, null, this.lastPoint), QQ && "slot" === WQ.kind && QQ.hover(null, this.lastPoint))
      }
      leaveElement(QQ, WQ, XQ) {
        "element" === QQ.kind && (0, nQ.r)(QQ.element, WQ, SW(XQ))
      }
    }
    class eW {
      constructor() {
        this.lastTiltedMs = -1 / 0
      }
      update(QQ, WQ) {
        vQ(QQ) && (this.lastTiltedMs = WQ)
      }
      allowsClick(QQ) {
        return QQ - this.lastTiltedMs > 150
      }
    }
    class nW {
      constructor() {
        this.remainder = 0, this.container = null
      }
      isScrolling(QQ) {
        return 0 !== (0, jQ.p)(QQ, .2).y
      }
      step(QQ, WQ, XQ) {
        QQ !== this.container && (this.container = QQ, this.remainder = 0);
        const wQ = dQ(WQ, XQ).y;
        if (0 === wQ) return this.remainder = 0, !1;
        const qQ = this.remainder + wQ,
          TQ = Math.trunc(qQ);
        if (this.remainder = qQ - TQ, 0 === TQ) return !1;
        const zQ = QQ.scrollTop;
        return QQ.scrollTop = zQ + TQ, QQ.scrollTop !== zQ
      }
      current() {
        var QQ;
        return null !== (QQ = this.container) && void 0 !== QQ && QQ.isConnected ? this.container : null
      }
      reset() {
        this.remainder = 0, this.container = null
      }
    }
    var xW = XQ(9079);
    const YW = "[data-pad-inventory-default]",
      NW = ".HotBarGameItemsContainer .InvenItem.Selected",
      ZW = {
        Up: {
          x: 0,
          y: -1
        },
        Down: {
          x: 0,
          y: 1
        },
        Left: {
          x: -1,
          y: 0
        },
        Right: {
          x: 1,
          y: 0
        }
      },
      OW = [
        ["primary", "inventoryPrimary"],
        ["secondary", "inventorySecondary"],
        ["quickMove", "inventoryQuickMove"],
        ["hotbarSwap", "inventoryHotbarSwap"],
        ["back", "inventoryClose"],
        ["openButton", "inventory"]
      ],
      KW = ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryHotbarSwap", "inventoryClose", "inventoryDrop"],
      mW = ["inventoryPanelPrevious", "inventoryPanelNext", "menuPageUp", "menuPageDown"],
      MW = [...KW, ...mW],
      QX = () => {
        return QQ = (0, gQ.g)("inventory"), !MW.map(gQ.g).includes(QQ) && !(0, jQ.K)(QQ);
        var QQ
      },
      WX = new Set(["slotPrimary", "slotSecondary", "slotQuickMove", "pressPrimary", "pressSecondary", "openKeyboard"]),
      XX = (QQ, WQ) => {
        const XQ = !(null === WQ || void 0 === WQ || !WQ.isHolding());
        return function(QQ, WQ) {
          const XQ = QQ.find((QQ => QQ.visible && WQ(QQ)));
          if (XQ) return XQ;
          for (var wQ = arguments.length, qQ = new Array(wQ > 2 ? wQ - 2 : 0), TQ = 2; TQ < wQ; TQ++) qQ[TQ - 2] = arguments[TQ];
          for (const zQ of qQ) {
            const WQ = pW(QQ.filter(zQ));
            if (WQ) return WQ
          }
          return pW(QQ)
        }(QQ, (QQ => {
          const {
            element: WQ
          } = QQ;
          return WQ.matches(YW) || null !== WQ.querySelector(YW) || WQ.matches(NW)
        }), (QQ => "slot" === QQ.kind ? XQ || null !== QQ.idx && !(null === WQ || void 0 === WQ || !WQ.hasItemAt(QQ.idx)) : "recipe" === QQ.kind || "pending" === QQ.kind), (QQ => "slot" === QQ.kind || "button" === QQ.kind))
      };
    class wX {
      constructor() {
        this.set = null, this.observer = new MutationObserver((QQ => {
          QQ.some((QQ => !CW(QQ.target))) && (this.set = null)
        })), this.invalidate = () => {
          this.set = null
        }, this.onScroll = QQ => {
          this.scrolled(QQ.target)
        }
      }
      get() {
        if (!this.set) {
          this.set = (() => {
            const QQ = [],
              WQ = [];
            let XQ = !1;
            const wQ = {
                width: window.innerWidth,
                height: window.innerHeight
              },
              qQ = new Map,
              TQ = new MQ(WQ);
            for (const JQ of document.querySelectorAll(UW)) {
              const gQ = AW(JQ);
              XQ ||= null !== JQ.querySelector(".CreativeCategoryTab");
              for (const XQ of JQ.querySelectorAll(`${bW}:first-child`)) {
                const zQ = XQ.parentElement;
                EW(zQ, JQ, RW(gQ, zQ), wQ, QQ, WQ, TQ, qQ)
              }
              for (const XQ of JQ.querySelectorAll(vW)) {
                var zQ, sQ, FQ, PQ;
                if (XQ.closest(bW) || XQ.closest("[data-pad-ignore]")) continue;
                const rQ = null === (zQ = XQ.parentElement) || void 0 === zQ ? void 0 : zQ.closest(vW);
                if (rQ && JQ.contains(rQ)) continue;
                const IQ = aW(XQ),
                  jQ = lW(XQ, IQ);
                if (-1 === jQ) continue;
                const BQ = wW(XQ.getBoundingClientRect());
                WQ.push({
                  element: XQ,
                  rect: BQ
                });
                const yQ = TQ.findForParent(XQ.parentElement, JQ),
                  VQ = yQ && !qQ.has(yQ.container) ? yQ : null;
                (VQ ? qW(BQ) : TW(BQ, wQ)) && QQ.push({
                  key: XW(XQ),
                  rect: BQ,
                  panel: RW(gQ, XQ),
                  scrollGroup: null !== (sQ = null === VQ || void 0 === VQ ? void 0 : VQ.group) && void 0 !== sQ ? sQ : null,
                  visible: zW(BQ, wQ, null === VQ || void 0 === VQ ? void 0 : VQ.box),
                  clip: null !== (FQ = null === VQ || void 0 === VQ ? void 0 : VQ.box) && void 0 !== FQ ? FQ : null,
                  element: XQ,
                  kind: IQ,
                  idx: jQ,
                  scrollContainer: null !== (PQ = null === VQ || void 0 === VQ ? void 0 : VQ.container) && void 0 !== PQ ? PQ : null
                })
              }
            }
            for (const [JQ, rQ] of qQ) rQ.holdsOthers = WQ.some((QQ => QQ.element !== JQ && JQ.contains(QQ.element) && !QQ.element.closest(bW)));
            const gQ = new Map;
            for (const JQ of QQ) gQ.set(JQ.element, JQ);
            return {
              targets: QQ,
              byElement: gQ,
              hasCategories: XQ,
              probes: WQ,
              scrollers: qQ
            }
          })(), this.observer.disconnect();
          for (const QQ of document.querySelectorAll(UW)) this.observer.observe(QQ, {
            childList: !0,
            subtree: !0,
            attributes: !0,
            attributeFilter: ["class", "disabled", "aria-disabled", "tabindex", "data-inven-idx"]
          })
        }
        return this.set
      }
      scrolled(QQ) {
        !this.set || QQ instanceof Element && ((QQ, WQ) => {
          const XQ = QQ.scrollers.get(WQ);
          if (!XQ || XQ.holdsOthers || WQ.scrollLeft !== XQ.left) return !1;
          const wQ = WQ.scrollTop - XQ.top;
          if (0 === wQ) return !0;
          XQ.top = WQ.scrollTop;
          for (const qQ of XQ.probes) qQ.rect.top -= wQ;
          for (const qQ of XQ.targets) qQ.rect.top -= wQ, qQ.visible = zW(qQ.rect, XQ.viewport, XQ.box);
          return !0
        })(this.set, QQ) || (this.set = null)
      }
      revalidate() {
        this.set && this.set.probes.some((QQ => {
          return WQ = QQ.rect, XQ = QQ.element.getBoundingClientRect(), !(WQ.left === XQ.left && WQ.top === XQ.top && WQ.width === XQ.width && WQ.height === XQ.height);
          var WQ, XQ
        })) && (this.set = null)
      }
      disconnect() {
        this.observer.disconnect(), this.set = null
      }
    }
    const qX = new class {
        constructor() {
          this.focused = null, this.focusTarget = null, this.lastRect = null, this.panelMemory = new Map, this.reopenSlotIdx = null, this.dpadTimers = new Map(jQ.D.map((QQ => [QQ, (0, BQ.d)(jQ.G)]))), this.stickRepeat = new jQ.d((0, BQ.d)(jQ.gb)), this.pageUpTimer = (0, BQ.d)(jQ.cb), this.pageDownTimer = (0, BQ.d)(jQ.cb), this.stickGate = new UQ, this.pointer = null, this.activePress = null, this.dropLatch = new LW, this.scroller = new nW, this.scrollStickClick = new eW, this.hover = new oW, this.lastRealPointer = null, this.placeAfterCategory = null, this.hotbarPick = null, this.ring = new oQ, this.targets = new wX, this.hasCategories = !1, this.wasShowing = !1, this.state = kW.e, this.isActive = () => (0, KQ.g)(), this.isShowing = () => "inventory" === JQ.b.getActiveConsumerName() && (0, IQ.i)(), this.getState = () => this.state, this.isSteppingSlots = () => this.isShowing() && null === this.pointer, this.onDeactivate = () => {
            this.endInteraction((0, KQ.e)()), (0, KQ.g)() || this.forgetSurface()
          }, this.forgetSurface = () => {
            var QQ;
            this.reopenSlotIdx = null !== (QQ = this.focused ? cW(this.focused).idx : null) && void 0 !== QQ ? QQ : this.reopenSlotIdx, this.focused = null, this.focusTarget = null, this.lastRect = null, this.placeAfterCategory = null, (0, KQ.o)(), this.panelMemory.clear(), this.targets.disconnect()
          }, this.onFrame = QQ => {
            (0, sQ.unstable_batchedUpdates)((() => {
              this.frame(QQ)
            }))
          }, this.shouldBlockRealPointer = QQ => QQ.isTrusted && !(0, VQ.t)(QQ) && this.isShowing(), this.noteRealPointer = QQ => {
            QQ instanceof MouseEvent && QQ.isTrusted && !(0, VQ.t)(QQ) && (this.lastRealPointer ??= {
              x: 0,
              y: 0
            }, this.lastRealPointer.x = QQ.clientX, this.lastRealPointer.y = QQ.clientY)
          }, this.wakePressActs = QQ => {
            var WQ;
            return QQ === (0, gQ.g)("inventoryClose") ? !(null !== (WQ = (0, KQ.e)()) && void 0 !== WQ && WQ.isHolding()) : !(QQ !== (0, gQ.g)("inventory") || !QX()) || ((0, jQ.K)(QQ) ? this.isNavButton(QQ) : mW.some((WQ => (0, gQ.g)(WQ) === QQ)))
          }
        }
        frame(QQ) {
          var WQ, XQ, wQ, qQ, TQ;
          const zQ = (0, KQ.e)();
          if (!(0, IQ.i)()) return void(this.wasShowing && (this.endInteraction(zQ), this.rehoverRealPointer()));
          this.wasShowing = !0, this.applyFocusRequest(), QQ.wokeDevice && this.focusWakePointer(!(null === zQ || void 0 === zQ || !zQ.isHolding())), this.applyCategoryPlace(), this.ensureFocus(), "cursor" !== (0, rQ.g)().inventoryNavigation || this.pointer || this.engagePointer();
          const sQ = performance.now();
          this.handleNavigation(QQ, sQ), this.handlePanels(QQ), this.handlePaging(QQ, sQ), this.handleScroll(QQ), this.handleButtons(QQ, sQ, zQ), this.applyFocusRequest(), this.pointer && this.hoverAtPointer();
          const FQ = this.ensureFocus(),
            PQ = this.focusContext(zQ);
          this.ring.show(FQ);
          const JQ = "slot" === PQ.kind ? PQ.idx : null,
            jQ = null !== (WQ = null === (XQ = PQ.actionElement) || void 0 === XQ ? void 0 : XQ.querySelector(".DoCraftItem")) && void 0 !== WQ ? WQ : PQ.actionElement;
          this.pointer ? (this.hover.sync(zQ, JQ, jQ, ((QQ, WQ) => {
            const XQ = WQ ? tW() : 0;
            return {
              clientX: QQ.x - XQ,
              clientY: QQ.y - XQ
            }
          })(this.pointer, PQ.holding), PQ.holding), YQ.set({
            x: this.pointer.x,
            y: this.pointer.y,
            visible: !0,
            pressed: QQ.isHeld((0, gQ.g)("inventoryPrimary"))
          })) : FQ && this.focused && this.hover.sync(zQ, JQ, jQ, ((QQ, WQ) => {
            if (!WQ) return {
              clientX: QQ.left + QQ.width - 10,
              clientY: QQ.top + QQ.height / 2 - 10
            };
            const XQ = tW();
            return {
              clientX: QQ.left + QQ.width / 2 - XQ,
              clientY: QQ.top + QQ.height / 2 - XQ
            }
          })(FQ, PQ.holding), PQ.holding), this.publishState({
            showing: !0,
            kind: PQ.kind,
            holding: PQ.holding,
            slotHasItem: PQ.slotHasItem,
            pressHints: null !== (wQ = null === (qQ = PQ.press) || void 0 === qQ ? void 0 : qQ.hints) && void 0 !== wQ ? wQ : null,
            hasCategories: this.hasCategories,
            hasList: !!this.focusTarget && uW(this.focusTarget),
            openButtonCloses: QX(),
            steppingSlots: null === this.pointer,
            quickMoveToHotbar: "slot" === PQ.kind && !(null === (TQ = PQ.actionElement) || void 0 === TQ || !TQ.closest(".CreativeItemSlots")),
            dropStackHold: this.dropLatch.getHold(),
            hotbarPicking: null !== this.hotbarPick
          })
        }
        focusWakePointer(QQ) {
          var WQ;
          const XQ = (0, IQ.c)();
          if (!XQ) return;
          this.targets.revalidate();
          const wQ = this.getTargets().targets;
          this.setFocus(null !== (WQ = DW(XQ, wQ)) && void 0 !== WQ ? WQ : QQ ? BW(XQ, wQ, (QQ => {
            let {
              rect: WQ
            } = QQ;
            const wQ = Math.max(WQ.left - XQ.x, 0, XQ.x - (WQ.left + WQ.width)),
              qQ = Math.max(WQ.top - XQ.y, 0, XQ.y - (WQ.top + WQ.height));
            return Math.hypot(wQ, qQ) <= Math.min(WQ.width, WQ.height) / 2
          })) : null, !1), "cursor" === (0, rQ.g)().inventoryNavigation && (this.pointer = {
            x: XQ.x,
            y: XQ.y,
            speedRamp: 0
          })
        }
        rehoverRealPointer() {
          const QQ = this.lastRealPointer;
          if (!QQ || "keyboardMouse" !== FQ.b.get("activeInputDevice")) return;
          const WQ = document.elementFromPoint(QQ.x, QQ.y);
          WQ && (0, nQ.r)(null, WQ, QQ)
        }
        endInteraction(QQ) {
          this.wasShowing = !1, this.hotbarPick = null, this.releasePress(), this.dropLatch.reset(), this.scroller.reset();
          for (const WQ of this.dpadTimers.values()) WQ.reset();
          this.stickRepeat.reset(), this.pageUpTimer.reset(), this.pageDownTimer.reset(), this.hover.clear(QQ), this.ring.hide(), this.releasePointer(), this.publishState(kW.e)
        }
        getTargets() {
          const QQ = this.targets.get();
          return this.hasCategories = QQ.hasCategories, QQ
        }
        currentTarget() {
          var QQ;
          return this.focused && null !== (QQ = this.getTargets().byElement.get(this.focused)) && void 0 !== QQ ? QQ : null
        }
        readFocusRect() {
          const QQ = this.focused;
          if (null === QQ || void 0 === QQ || !QQ.isConnected || !QQ.closest(UW)) return null;
          const WQ = QQ.getBoundingClientRect();
          return WQ.width > 0 && WQ.height > 0 ? {
            left: WQ.left,
            top: WQ.top,
            width: WQ.width,
            height: WQ.height
          } : null
        }
        ensureFocus() {
          const QQ = this.readFocusRect();
          if (QQ || this.pointer) return QQ;
          const {
            targets: WQ,
            byElement: XQ
          } = this.getTargets();
          let wQ = null,
            qQ = !1;
          if (this.lastRect) wQ = BW(sW(this.lastRect), WQ);
          else {
            var TQ, zQ;
            const QQ = ((QQ, WQ) => {
                const XQ = document.querySelector(".EntireInventoryWrapper [data-pad-inventory-start]");
                return XQ ? XX(QQ.filter((QQ => XQ.contains(QQ.element))), WQ) : null
              })(WQ, (0, KQ.e)()),
              sQ = WQ.find((QQ => null !== QQ.idx && QQ.idx === this.reopenSlotIdx)),
              FQ = document.querySelector(NW);
            qQ = null !== QQ || void 0 !== sQ, wQ = null !== (TQ = null !== (zQ = null !== QQ && void 0 !== QQ ? QQ : sQ) && void 0 !== zQ ? zQ : FQ && XQ.get(FQ)) && void 0 !== TQ ? TQ : pW(WQ)
          }
          return this.setFocus(wQ, qQ), this.lastRect
        }
        setFocus(QQ) {
          let WQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          QQ && (this.focused = QQ.element, this.focusTarget = QQ, this.panelMemory.set(QQ.panel, QQ.element), WQ && QQ.scrollContainer && ((QQ, WQ) => {
            const XQ = QQ.getBoundingClientRect(),
              wQ = EQ(WQ),
              qQ = WQ.scrollTop;
            return XQ.top < wQ.top ? WQ.scrollTop -= wQ.top - XQ.top : XQ.bottom > wQ.bottom && (WQ.scrollTop += XQ.bottom - wQ.bottom), WQ.scrollTop !== qQ
          })(QQ.element, QQ.scrollContainer) && this.targets.invalidate(), this.lastRect = this.readFocusRect(), this.followFocusJump())
        }
        followFocusJump() {
          if (this.pointer)
            if ("cursor" === (0, rQ.g)().inventoryNavigation) {
              if (this.lastRect) {
                const QQ = sW(this.lastRect);
                this.pointer = {
                  x: QQ.x,
                  y: QQ.y,
                  speedRamp: 0
                }
              }
            } else this.releasePointer()
        }
        engagePointer() {
          const QQ = this.lastRect ? sW(this.lastRect) : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          };
          this.pointer = {
            x: QQ.x,
            y: QQ.y,
            speedRamp: 0
          }
        }
        releasePointer() {
          this.pointer = null, YQ.hide()
        }
        hoverAtPointer() {
          var QQ;
          const WQ = DW(this.pointer, this.getTargets().targets);
          this.focusTarget = WQ, (null === WQ || void 0 === WQ ? void 0 : WQ.element) !== this.focused && (this.focused = null !== (QQ = null === WQ || void 0 === WQ ? void 0 : WQ.element) && void 0 !== QQ ? QQ : null, WQ && (this.panelMemory.set(WQ.panel, WQ.element), this.lastRect = this.readFocusRect()))
        }
        moveCursor(QQ, WQ) {
          const XQ = this.focusTarget,
            wQ = XQ && (0, rQ.g)().cursorMagnetism ? sW(yW(XQ)) : null;
          this.pointer = bQ(this.pointer, {
            stick: QQ.leftStick,
            moveDeadzone: (0, rQ.g)().moveDeadzone,
            dpad: WQ,
            dtMs: QQ.dtMs,
            cursorSpeedPercent: (0, rQ.g)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: {
              overInteractive: !1,
              magnetTarget: wQ
            }
          })
        }
        move(QQ) {
          this.targets.revalidate();
          const WQ = this.currentTarget();
          WQ && this.setFocus(jW(WQ, this.getTargets().targets, QQ))
        }
        step(QQ) {
          const WQ = this.pointer;
          if (WQ && (this.releasePointer(), !this.focused)) return this.targets.revalidate(), void this.setFocus(((QQ, WQ, XQ) => {
            var wQ;
            const qQ = {
              key: "",
              rect: {
                left: QQ.x,
                top: QQ.y,
                width: 0,
                height: 0
              },
              panel: "",
              scrollGroup: null,
              visible: !0,
              clip: null
            };
            return null !== (wQ = jW(qQ, WQ, XQ)) && void 0 !== wQ ? wQ : BW(QQ, WQ)
          })(WQ, this.getTargets().targets, QQ));
          this.move(QQ)
        }
        isNavButton(QQ) {
          return !KW.some((WQ => (0, gQ.g)(WQ) === QQ)) && !(QQ === (0, gQ.g)("inventory") && QX())
        }
        handleNavigation(QQ, WQ) {
          const XQ = (0, rQ.g)().inventoryNavigation,
            wQ = {
              x: 0,
              y: 0
            };
          let qQ = null;
          for (const FQ of jQ.D) {
            const TQ = this.isNavButton(FQ) && QQ.isHeld(FQ);
            TQ && (wQ.x += ZW[FQ].x, wQ.y += ZW[FQ].y), this.dpadTimers.get(FQ).update(TQ, WQ) && "cursor" !== XQ && (qQ ??= FQ)
          }
          const TQ = this.stickGate.update(QQ.leftStick, (0, rQ.g)().moveDeadzone);
          if (qQ && (this.step(qQ), this.stickGate.lock()), "slot" !== XQ) {
            const WQ = ((QQ, WQ, XQ, wQ) => "hybrid" !== QQ ? "cursor" === QQ : !wQ && (WQ || XQ))(XQ, null !== this.pointer, TQ, null !== qQ);
            return WQ && !this.pointer && this.engagePointer(), void(this.pointer && this.moveCursor(QQ, "cursor" === XQ ? wQ : {
              x: 0,
              y: 0
            }))
          }
          const zQ = (0, jQ.p)(QQ.leftStick, (0, rQ.g)().moveDeadzone),
            sQ = this.stickRepeat.update(TQ ? (0, jQ.ib)(zQ) : null, WQ);
          sQ && this.move(sQ)
        }
        applyCategoryPlace() {
          const QQ = this.placeAfterCategory;
          if (!QQ) return;
          this.placeAfterCategory = null, this.targets.invalidate();
          const WQ = BW(sW(QQ.rect), this.getTargets().targets, (WQ => WQ.scrollGroup === QQ.scrollGroup));
          this.setFocus(WQ, !1)
        }
        applyFocusRequest() {
          const QQ = (0, KQ.o)();
          QQ && (this.targets.invalidate(), this.setFocus((0, KQ.d)(this.getTargets().targets, QQ)))
        }
        handlePanels(QQ) {
          var WQ, XQ, wQ;
          const qQ = QQ.wasPressed((0, gQ.g)("inventoryPanelPrevious")),
            TQ = QQ.wasPressed((0, gQ.g)("inventoryPanelNext"));
          if (!qQ && !TQ) return;
          const {
            targets: zQ
          } = this.getTargets(), sQ = (FQ = ((QQ, WQ) => {
            const XQ = [];
            for (const qQ of QQ) qQ.visible && !XQ.includes(qQ.panel) && XQ.push(qQ.panel);
            const wQ = QQ => {
              const wQ = WQ.indexOf(QQ);
              return -1 === wQ ? WQ.length + XQ.indexOf(QQ) : wQ
            };
            return XQ.sort(((QQ, WQ) => wQ(QQ) - wQ(WQ)))
          })(zQ, HW), PQ = null !== (WQ = null === (XQ = this.focusTarget) || void 0 === XQ ? void 0 : XQ.panel) && void 0 !== WQ ? WQ : null, JQ = TQ ? 1 : -1, 0 === FQ.length ? null : FQ[FW(null === PQ ? -1 : FQ.indexOf(PQ), FQ.length, JQ)]);
          var FQ, PQ, JQ;
          if (null === sQ) return;
          const rQ = this.panelMemory.get(sQ),
            IQ = zQ.filter((QQ => QQ.panel === sQ)),
            jQ = null !== (wQ = IQ.find((QQ => QQ.element === rQ && QQ.visible))) && void 0 !== wQ ? wQ : XX(IQ, (0, KQ.e)());
          this.setFocus(jQ)
        }
        handlePaging(QQ, WQ) {
          const XQ = (0, gQ.g)("menuPageUp"),
            wQ = (0, gQ.g)("menuPageDown"),
            qQ = this.pageUpTimer.update(QQ.isHeld(XQ), WQ),
            TQ = this.pageDownTimer.update(QQ.isHeld(wQ), WQ);
          if (!qQ && !TQ) return;
          const zQ = TQ ? 1 : -1;
          if (!QQ.wasPressed(TQ ? wQ : XQ) && this.hasCategories) return;
          if ((QQ => {
              const WQ = Array.from(document.querySelectorAll(".EntireInventoryWrapper .CreativeCategoryTab"));
              if (0 === WQ.length) return !1;
              const XQ = WQ.findIndex((QQ => QQ.classList.contains("Selected"))),
                wQ = WQ[FW(XQ, WQ.length, QQ)];
              return (0, nQ.n)(wQ, (0, nQ.y)(wQ)), !0
            })(zQ)) {
            var sQ, FQ;
            this.targets.invalidate();
            const QQ = null !== (sQ = null === (FQ = this.focusTarget) || void 0 === FQ ? void 0 : FQ.scrollGroup) && void 0 !== sQ ? sQ : null,
              WQ = this.readFocusRect();
            return void(this.placeAfterCategory = null !== QQ && WQ && !this.pointer ? {
              rect: WQ,
              scrollGroup: QQ
            } : null)
          }
          const {
            targets: PQ
          } = this.getTargets(), JQ = this.currentTarget(), rQ = JQ && uW(JQ) ? JQ : PQ.find((QQ => uW(QQ) && QQ.visible));
          if (!rQ) return;
          const IQ = ((QQ, WQ, XQ, wQ) => {
            if (null === QQ.scrollGroup) return null;
            const qQ = sW(QQ.rect),
              TQ = qQ.x,
              zQ = qQ.y + ("Down" === XQ ? wQ : -wQ);
            let sQ = null,
              FQ = 1 / 0;
            for (const PQ of WQ) {
              if (PQ.scrollGroup !== QQ.scrollGroup || PQ.key === QQ.key) continue;
              const WQ = sW(PQ.rect);
              if ("Down" === XQ ? WQ.y <= qQ.y : WQ.y >= qQ.y) continue;
              const wQ = Math.hypot(WQ.x - TQ, WQ.y - zQ);
              wQ < FQ && (sQ = PQ, FQ = wQ)
            }
            return sQ
          })(rQ, PQ, zQ > 0 ? "Down" : "Up", rQ.scrollContainer.clientHeight);
          this.setFocus(null !== IQ && void 0 !== IQ ? IQ : rQ)
        }
        handleScroll(QQ) {
          var WQ, XQ, wQ, qQ, TQ, zQ;
          if (!this.scroller.isScrolling(QQ.rightStick)) return void this.scroller.reset();
          const {
            targets: sQ
          } = this.getTargets(), FQ = this.pointer, PQ = !FQ && this.focusTarget && uW(this.focusTarget) ? this.focusTarget.scrollContainer : null, gQ = FQ && (null === (WQ = sQ.find((QQ => QQ.clip && VW(QQ.clip, FQ)))) || void 0 === WQ ? void 0 : WQ.scrollContainer), JQ = null !== (XQ = null !== (wQ = null !== (qQ = this.scroller.current()) && void 0 !== qQ ? qQ : gQ) && void 0 !== wQ ? wQ : PQ) && void 0 !== XQ ? XQ : null === (TQ = sQ.find(uW)) || void 0 === TQ ? void 0 : TQ.scrollContainer;
          if (!JQ || !this.scroller.step(JQ, QQ.rightStick, QQ.dtMs)) return;
          this.targets.scrolled(JQ);
          const rQ = FQ || (null === (zQ = this.focusTarget) || void 0 === zQ ? void 0 : zQ.scrollContainer) !== JQ ? null : this.readFocusRect();
          if (!rQ) return;
          const IQ = EQ(JQ),
            jQ = sW(rQ);
          if (jQ.y < IQ.top || jQ.y > IQ.bottom) {
            const QQ = this.focusTarget.scrollGroup,
              WQ = BW(jQ, this.getTargets().targets, (WQ => WQ.scrollGroup === QQ));
            this.setFocus(WQ, !1)
          }
        }
        focusContext(QQ) {
          const {
            kind: WQ,
            idx: XQ
          } = this.focused ? cW(this.focused) : {
            kind: null,
            idx: null
          }, wQ = this.focused ? hW(this.focused) : null, qQ = wQ ? (0, xW.b)(wQ) : null;
          return {
            kind: WQ,
            idx: XQ,
            actionElement: wQ,
            press: qQ,
            hasPress: null !== qQ,
            hasBack: !(null === qQ || void 0 === qQ || !qQ.back),
            holding: QQ.isHolding(),
            slotHasItem: null !== XQ && QQ.hasItemAt(XQ)
          }
        }
        handleButtons(QQ, WQ, XQ) {
          var wQ, qQ;
          if (!this.activePress || QQ.isHeld(this.activePress.button) && (wQ = this.activePress.target, qQ = this.focused, null !== wQ.recipe ? iW(qQ).recipe === wQ.recipe : qQ === wQ.element) || this.releasePress(), this.scrollStickClick.update(QQ.rightStick, WQ), !this.handleHotbarPick(QQ, XQ)) {
            for (const [wQ, qQ] of OW) {
              const TQ = (0, gQ.g)(qQ);
              if (!QQ.wasPressed(TQ) || "openButton" === wQ && !QX()) continue;
              if ("RS" === TQ && !this.scrollStickClick.allowsClick(WQ)) continue;
              const zQ = this.focusContext(XQ),
                sQ = ZQ(wQ, zQ);
              sQ && this.runIntent(sQ, zQ, TQ, XQ)
            }
            this.handleDrop(QQ, WQ, XQ)
          }
        }
        handleHotbarPick(QQ, WQ) {
          const XQ = this.hotbarPick;
          if (!XQ) return !1;
          const wQ = QQ.wasPressed((0, gQ.g)("inventoryPrimary")) || QQ.wasPressed((0, gQ.g)("inventoryHotbarSwap"));
          if (!wQ && !QQ.wasPressed((0, gQ.g)("inventoryClose")) && !WQ.isHolding()) return !(QQ.wasPressed((0, gQ.g)("inventory")) && QX());
          const qQ = this.focusTarget;
          wQ && "hotbar" === (null === qQ || void 0 === qQ ? void 0 : qQ.panel) && null !== qQ.idx && qQ.idx !== XQ.idx && (WQ.swapWithHotbar(qQ.idx, XQ.idx), this.afterAction()), this.hotbarPick = null;
          const TQ = XQ.element.isConnected ? this.getTargets().byElement.get(XQ.element) : void 0;
          return TQ && this.setFocus(TQ), !0
        }
        startHotbarPick(QQ) {
          var WQ;
          const {
            targets: XQ,
            byElement: wQ
          } = this.getTargets(), qQ = document.querySelector(NW), TQ = null !== (WQ = qQ && wQ.get(qQ)) && void 0 !== WQ ? WQ : XQ.find((QQ => "hotbar" === QQ.panel));
          TQ && this.focused && (this.hotbarPick = {
            idx: QQ,
            element: this.focused
          }, this.setFocus(TQ))
        }
        focusKey() {
          return this.focused ? XW(this.focused) : null
        }
        handleDrop(QQ, WQ, XQ) {
          const wQ = (0, gQ.g)("inventoryDrop");
          if (QQ.wasPressed(wQ)) {
            const QQ = (qQ = this.focusContext(XQ)).holding ? {
              kind: "Ds"
            } : "slot" === qQ.kind && qQ.slotHasItem && null !== qQ.idx ? {
              kind: "slot",
              idx: qQ.idx
            } : null;
            return void(QQ && (this.dropFrom(QQ, !1, XQ), this.dropLatch.press(QQ, this.focusKey(), WQ, yQ.b[(0, rQ.g)().tapHoldTime].dropStackMs), this.afterAction()))
          }
          var qQ;
          const TQ = this.dropLatch.update(QQ.isHeld(wQ), this.focusKey(), WQ);
          TQ && ((QQ, WQ, XQ) => "Ds" === QQ.kind ? WQ : !WQ && XQ(QQ.idx))(TQ, XQ.isHolding(), XQ.hasItemAt) && (this.dropFrom(TQ, !0, XQ), this.afterAction())
        }
        dropFrom(QQ, WQ, XQ) {
          "Ds" === QQ.kind ? XQ.dropHeld(WQ, this.slotPoint()) : XQ.dropSlot(QQ.idx, WQ)
        }
        slotPoint() {
          return this.pointer ? {
            clientX: this.pointer.x,
            clientY: this.pointer.y
          } : this.lastRect ? (QQ => {
            const WQ = sW(QQ);
            return {
              clientX: WQ.x,
              clientY: WQ.y
            }
          })(this.lastRect) : {
            clientX: 0,
            clientY: 0
          }
        }
        runIntent(QQ, WQ, XQ, wQ) {
          const qQ = WQ.idx,
            TQ = WQ.actionElement;
          switch (TQ && WX.has(QQ) && (0, VQ.x)(TQ), QQ) {
            case "slotPrimary":
              wQ.primary(qQ, this.slotPoint());
              break;
            case "slotSecondary":
              wQ.secondary(qQ, this.slotPoint());
              break;
            case "slotQuickMove":
              wQ.quickMove(qQ, this.slotPoint());
              break;
            case "hotbarPick":
              this.startHotbarPick(qQ);
              break;
            case "pressPrimary":
            case "pressSecondary":
              this.startPress(WQ.press, "pressPrimary" === QQ ? "primary" : "secondary", XQ);
              break;
            case "click":
              (0, nQ.n)(TQ, (0, nQ.y)(TQ));
              break;
            case "openKeyboard":
              (0, nQ.M)(TQ) && (0, nQ.J)(TQ);
              break;
            case "pressBack":
              WQ.press.back();
              break;
            case "cancel":
              wQ.cancel();
              break;
            case "close":
              return this.releasePress(), void wQ.close()
          }
          this.afterAction()
        }
        startPress(QQ, WQ, XQ) {
          this.releasePress(), QQ.press(WQ) && (this.activePress = {
            handlers: QQ,
            button: XQ,
            target: iW(this.focused)
          })
        }
        releasePress() {
          var QQ, WQ, XQ;
          null === (QQ = this.activePress) || void 0 === QQ || null === (WQ = (XQ = QQ.handlers).release) || void 0 === WQ || WQ.call(XQ), this.activePress = null
        }
        afterAction() {
          this.targets.invalidate(), this.hover.invalidate()
        }
        publishState(QQ) {
          ((QQ, WQ) => {
            var XQ, wQ, qQ, TQ, zQ, sQ;
            return QQ.showing === WQ.showing && QQ.kind === WQ.kind && QQ.holding === WQ.holding && QQ.slotHasItem === WQ.slotHasItem && (null === (XQ = QQ.pressHints) || void 0 === XQ ? void 0 : XQ.primary) === (null === (wQ = WQ.pressHints) || void 0 === wQ ? void 0 : wQ.primary) && (null === (qQ = QQ.pressHints) || void 0 === qQ ? void 0 : qQ.secondary) === (null === (TQ = WQ.pressHints) || void 0 === TQ ? void 0 : TQ.secondary) && (null === (zQ = QQ.pressHints) || void 0 === zQ ? void 0 : zQ.back) === (null === (sQ = WQ.pressHints) || void 0 === sQ ? void 0 : sQ.back) && QQ.hasCategories === WQ.hasCategories && QQ.hasList === WQ.hasList && QQ.openButtonCloses === WQ.openButtonCloses && QQ.steppingSlots === WQ.steppingSlots && QQ.hotbarPicking === WQ.hotbarPicking && QQ.quickMoveToHotbar === WQ.quickMoveToHotbar && QQ.dropStackHold === WQ.dropStackHold
          })(QQ, this.state) || (this.state = QQ, PQ.k.mB(kW.g, QQ))
        }
      },
      TX = ["pointermove", "pointerover", "pointerout", "mouseover", "mouseout"];
    var zX = XQ(9084),
      sX = XQ(382),
      FX = XQ(1698),
      PX = XQ(8563);
    const gX = "[data-pad-secondary]",
      JX = QQ => QQ instanceof HTMLElement && (0, mQ.u)(QQ) && !(0, mQ.A)(QQ),
      rX = QQ => {
        const WQ = QQ.querySelector(gX);
        if (WQ && JX(WQ)) return WQ;
        for (const qQ of null !== (XQ = null === (wQ = QQ.parentElement) || void 0 === wQ ? void 0 : wQ.children) && void 0 !== XQ ? XQ : []) {
          var XQ, wQ;
          if (qQ !== QQ && qQ.matches(gX) && JX(qQ)) return qQ
        }
        return null
      },
      IX = (QQ, WQ, XQ, wQ) => Math.max(0, Math.max(QQ, XQ) - Math.min(WQ, wQ)),
      jX = (QQ, WQ, XQ, wQ) => Math.max(0, Math.min(WQ, wQ) - Math.max(QQ, XQ)),
      BX = (QQ, WQ, XQ) => {
        const wQ = (QQ.left + QQ.right) / 2,
          qQ = (QQ.top + QQ.bottom) / 2,
          TQ = (WQ.left + WQ.right) / 2,
          zQ = (WQ.top + WQ.bottom) / 2;
        if ("Left" === XQ || "Right" === XQ) {
          const sQ = "Right" === XQ ? 1 : -1;
          return {
            forwardGap: "Right" === XQ ? WQ.left - QQ.right : QQ.left - WQ.right,
            centreForward: (TQ - wQ) * sQ,
            sidewaysGap: IX(QQ.top, QQ.bottom, WQ.top, WQ.bottom),
            sidewaysOverlap: jX(QQ.top, QQ.bottom, WQ.top, WQ.bottom),
            centreSideways: Math.abs(zQ - qQ),
            startSideways: Math.abs(WQ.top - QQ.top),
            fromSidewaysSize: QQ.bottom - QQ.top,
            toSidewaysSize: WQ.bottom - WQ.top,
            toLength: WQ.right - WQ.left
          }
        }
        const sQ = "Down" === XQ ? 1 : -1;
        return {
          forwardGap: "Down" === XQ ? WQ.top - QQ.bottom : QQ.top - WQ.bottom,
          centreForward: (zQ - qQ) * sQ,
          sidewaysGap: IX(QQ.left, QQ.right, WQ.left, WQ.right),
          sidewaysOverlap: jX(QQ.left, QQ.right, WQ.left, WQ.right),
          centreSideways: Math.abs(TQ - wQ),
          startSideways: Math.abs(WQ.left - QQ.left),
          fromSidewaysSize: QQ.right - QQ.left,
          toSidewaysSize: WQ.right - WQ.left,
          toLength: WQ.bottom - WQ.top
        }
      },
      yX = QQ => QQ.centreForward > .5 && QQ.forwardGap >= -QQ.toLength / 2,
      VX = QQ => {
        const WQ = QQ.sidewaysOverlap > 0 ? 0 : 2 * QQ.fromSidewaysSize,
          XQ = QQ.fromSidewaysSize > 1.5 * QQ.toSidewaysSize ? QQ.startSideways : QQ.centreSideways;
        return Math.max(0, QQ.forwardGap) + 3 * QQ.sidewaysGap + WQ + .1 * XQ
      },
      DX = (QQ, WQ) => jX(QQ.top, QQ.bottom, WQ.top, WQ.bottom) > 0 || WQ.bottom - WQ.top > WQ.right - WQ.left,
      pX = (QQ, WQ, XQ, wQ, qQ, TQ) => {
        const zQ = qQ ? UX(QQ, WQ, XQ, qQ) : new Set,
          sQ = vX(QQ, WQ, XQ, zQ);
        return sQ < 0 && zQ.size > 0 && TQ ? GX(QQ, WQ, XQ, TQ) : wQ && sQ >= 0 ? bX(QQ, WQ, XQ, wQ, sQ, zQ) : sQ
      },
      GX = (QQ, WQ, XQ, wQ) => {
        const qQ = new Set,
          TQ = vX(QQ, WQ, "Up", qQ) >= 0,
          zQ = vX(QQ, WQ, "Down", qQ) >= 0,
          sQ = new Set;
        return WQ.forEach(((WQ, XQ) => {
          const qQ = WQ.top + WQ.bottom < QQ.top + QQ.bottom;
          wQ[XQ] && !(qQ ? TQ : zQ) || sQ.add(XQ)
        })), vX(QQ, WQ, XQ, sQ)
      },
      UX = (QQ, WQ, XQ, wQ) => {
        const qQ = new Set;
        return "Left" !== XQ && "Right" !== XQ || WQ.forEach(((WQ, XQ) => {
          wQ[XQ] && jX(QQ.top, QQ.bottom, WQ.top, WQ.bottom) <= 0 && qQ.add(XQ)
        })), qQ
      },
      bX = (QQ, WQ, XQ, wQ, qQ, TQ) => {
        const zQ = BX(QQ, WQ[qQ], XQ).forwardGap;
        let sQ = qQ,
          FQ = wQ[qQ],
          PQ = 1 / 0;
        return WQ.forEach(((WQ, gQ) => {
          const JQ = wQ[gQ];
          if (TQ.has(gQ) || JQ < FQ || JQ === FQ && sQ === qQ) return;
          const rQ = BX(QQ, WQ, XQ);
          if (!yX(rQ) || rQ.forwardGap < 0 || rQ.forwardGap >= zQ) return;
          const IQ = VX(rQ);
          (JQ > FQ || IQ < PQ) && (sQ = gQ, FQ = JQ, PQ = IQ)
        })), sQ
      },
      vX = (QQ, WQ, XQ, wQ) => {
        let qQ = -1,
          TQ = 1 / 0;
        if (WQ.forEach(((WQ, zQ) => {
            const sQ = ((QQ, WQ, XQ) => {
              const wQ = BX(QQ, WQ, XQ);
              if (!yX(wQ)) return null;
              const qQ = Math.max(0, wQ.forwardGap);
              return wQ.sidewaysOverlap <= 0 && wQ.sidewaysGap > 2 * (qQ + 1) ? null : VX(wQ)
            })(QQ, WQ, XQ);
            null !== sQ && sQ < TQ && !wQ.has(zQ) && (TQ = sQ, qQ = zQ)
          })), qQ < 0) return -1;
        const zQ = WQ[qQ],
          sQ = BX(QQ, zQ, XQ).forwardGap;
        let FQ = sQ,
          PQ = qQ;
        return WQ.forEach(((WQ, TQ) => {
          if (TQ === qQ || wQ.has(TQ) || !((QQ, WQ, XQ) => {
              const wQ = "Left" === XQ || "Right" === XQ,
                qQ = wQ ? jX(QQ.top, QQ.bottom, WQ.top, WQ.bottom) : jX(QQ.left, QQ.right, WQ.left, WQ.right),
                TQ = wQ ? Math.min(QQ.bottom - QQ.top, WQ.bottom - WQ.top) : Math.min(QQ.right - QQ.left, WQ.right - WQ.left);
              return qQ > 0 && qQ >= TQ / 2
            })(WQ, zQ, XQ)) return;
          const gQ = BX(QQ, WQ, XQ);
          yX(gQ) && gQ.forwardGap + gQ.toLength <= sQ + 1 && gQ.forwardGap < FQ && (FQ = gQ.forwardGap, PQ = TQ)
        })), PQ
      },
      dX = (QQ, WQ) => {
        let XQ = -1,
          wQ = 1 / 0;
        return WQ.forEach(((WQ, qQ) => {
          const TQ = Math.max(WQ.left - QQ.x, 0, QQ.x - WQ.right),
            zQ = Math.max(WQ.top - QQ.y, 0, QQ.y - WQ.bottom),
            sQ = Math.hypot(TQ, zQ);
          sQ < wQ && (wQ = sQ, XQ = qQ)
        })), XQ
      },
      HX = (QQ, WQ) => {
        const XQ = Math.min(QQ.bottom - QQ.top, WQ.bottom - WQ.top) / 2;
        return Math.abs(QQ.top - WQ.top) > XQ ? QQ.top - WQ.top : QQ.left - WQ.left
      },
      aX = QQ => {
        let WQ = -1;
        for (let XQ = 0; XQ < QQ.length; XQ++)(WQ < 0 || HX(QQ[XQ], QQ[WQ]) < 0) && (WQ = XQ);
        return WQ
      };
    var lX = XQ(1744),
      hX = XQ(9093),
      iX = XQ(9096);
    const cX = QQ => {
        if ("death" !== QQ || "inGame" !== FQ.b.get("gameState") || "off" === (0, rQ.g)().quickChat || null === (0, lX.d)()) return !1;
        const WQ = (0, gQ.g)("chat");
        return WQ !== (0, gQ.g)("menuConfirm") && WQ !== (0, gQ.g)("menuBack")
      },
      AX = new hX.d;
    var RX = XQ(4582),
      EX = XQ(9099),
      CX = XQ(9101);
    const uX = QQ => {
        let WQ = null;
        for (const XQ of QQ.querySelectorAll("[data-pad-tabs]"))(0, mQ.u)(XQ) && (!WQ || Number(XQ.dataset.padTabs) < Number(WQ.dataset.padTabs)) && (WQ = XQ);
        return WQ
      },
      LX = (QQ, WQ, XQ, wQ) => {
        QQ.focusWhenFound((() => {
          const qQ = QQ.pickInitial(WQ);
          if (qQ && !XQ.has(qQ) && (null === wQ || void 0 === wQ || !wQ.contains(qQ))) return qQ;
          const TQ = ((QQ, WQ) => {
              const XQ = WQ => QQ.getEnabledCandidates(WQ).filter((QQ => !QQ.closest("[data-pad-tabs]")));
              for (const wQ of (0, mQ.i)(WQ)) {
                const QQ = XQ(wQ);
                if (QQ.length > 0) return QQ
              }
              return XQ(WQ)
            })(QQ, WQ).filter((QQ => !XQ.has(QQ))),
            zQ = aX(TQ.map((QQ => QQ.getBoundingClientRect())));
          return zQ >= 0 ? TQ[zQ] : null
        }), 3e3)
      },
      kX = (QQ, WQ, XQ, wQ) => {
        var qQ;
        const TQ = ((QQ, WQ) => {
          if (0 === QQ.length) return null;
          const XQ = QQ.findIndex((QQ => "true" === QQ.dataset.padSelected));
          return XQ < 0 ? WQ > 0 ? QQ[0] : QQ[QQ.length - 1] : QQ[(XQ + WQ + QQ.length) % QQ.length]
        })([...XQ.querySelectorAll("[data-pad-tab]")].filter((QQ => (0, mQ.u)(QQ) && !(0, mQ.A)(QQ))), wQ);
        if (!TQ) return;
        const zQ = null !== (qQ = null === QQ || void 0 === QQ ? void 0 : QQ.getFocused()) && void 0 !== qQ ? qQ : null,
          sQ = !(null === zQ || void 0 === zQ || !zQ.isConnected) && XQ.contains(zQ),
          FQ = QQ && !sQ ? new Set(QQ.getEnabledCandidates(WQ)) : null;
        (0, nQ.c)(TQ), QQ && (FQ ? LX(QQ, WQ, FQ, XQ) : QQ.setFocus(TQ, {
          byUser: !0
        }))
      },
      fX = QQ => {
        var WQ;
        const XQ = EQ(null !== (WQ = lQ(QQ, "x")) && void 0 !== WQ ? WQ : QQ),
          wQ = (0, mQ.g)(QQ).filter((QQ => !(0, mQ.A)(QQ))),
          qQ = wQ.filter((QQ => CQ(QQ.getBoundingClientRect(), XQ)));
        return (qQ.length > 0 ? qQ : wQ).sort(((QQ, WQ) => HX(QQ.getBoundingClientRect(), WQ.getBoundingClientRect())))
      },
      SX = (QQ, WQ, XQ) => {
        const wQ = [...WQ.querySelectorAll("[data-pad-row]")].filter(mQ.u),
          qQ = QQ.getFocused(),
          TQ = qQ ? wQ.findIndex((QQ => QQ.contains(qQ))) : -1;
        let zQ = 0,
          sQ = XQ > 0 ? 0 : wQ.length - 1;
        if (TQ >= 0 && qQ) zQ = Math.max(0, fX(wQ[TQ]).indexOf(qQ)), sQ = TQ + XQ;
        else if (qQ) {
          const QQ = qQ.getBoundingClientRect(),
            WQ = wQ.map((WQ => {
              const wQ = WQ.getBoundingClientRect();
              return XQ > 0 ? wQ.top >= QQ.top : wQ.bottom <= QQ.bottom
            }));
          sQ = XQ > 0 ? WQ.indexOf(!0) : WQ.lastIndexOf(!0)
        }
        for (let FQ = sQ; FQ >= 0 && FQ < wQ.length; FQ += XQ) {
          const WQ = fX(wQ[FQ]);
          if (WQ.length > 0) return void QQ.setFocus(WQ[Math.min(zQ, WQ.length - 1)], {
            byUser: !0
          })
        }
      },
      tX = (QQ, WQ, XQ) => {
        var wQ, qQ;
        const TQ = null !== (wQ = null === QQ || void 0 === QQ ? void 0 : QQ.getFocused()) && void 0 !== wQ ? wQ : null,
          zQ = null !== TQ && void 0 !== TQ && TQ.closest("[data-pad-row]") ? "x" : "y",
          sQ = null !== (qQ = TQ ? lQ(TQ, zQ, WQ) : null) && void 0 !== qQ ? qQ : iQ(WQ, zQ);
        if (!sQ) return;
        const FQ = TQ ? (0, nQ.y)(TQ) : null;
        if (RQ(sQ, zQ, XQ * ("y" === zQ ? sQ.clientHeight : sQ.clientWidth) * .85), !QQ || !FQ) return;
        const PQ = EQ(sQ),
          gQ = QQ.getEnabledCandidates(WQ).filter((QQ => sQ.contains(QQ) && CQ(QQ.getBoundingClientRect(), PQ))),
          JQ = dX(FQ, gQ.map((QQ => QQ.getBoundingClientRect())));
        JQ >= 0 && QQ.setFocus(gQ[JQ], {
          scroll: !1,
          byUser: !0
        })
      };
    let oX = null;
    const eX = (QQ, WQ) => {
        var XQ, wQ;
        const qQ = WQ.querySelector("[data-pad-friends-column]"),
          TQ = QQ.getFocused();
        if (!qQ || !TQ || !qQ.contains(TQ)) return !1;
        const zQ = QQ.getEnabledCandidates(WQ).filter((QQ => !qQ.contains(QQ))),
          sQ = dX((0, nQ.y)(TQ), zQ.map((QQ => QQ.getBoundingClientRect()))),
          FQ = null === (XQ = oX) || void 0 === XQ ? void 0 : XQ.deref();
        return QQ.setFocus(null !== FQ && void 0 !== FQ && FQ.isConnected ? FQ : null !== (wQ = zQ[sQ]) && void 0 !== wQ ? wQ : null, {
          byUser: !0
        }), !0
      },
      nX = QQ => {
        const WQ = (0, gQ.g)(QQ);
        return (0, jQ.K)(WQ) || PX.r.some((QQ => (0, gQ.g)(QQ) === WQ)) ? null : WQ
      },
      xX = (QQ, WQ) => {
        const XQ = nX(WQ);
        return null !== XQ && QQ.wasPressed(XQ)
      },
      YX = function(QQ, WQ, XQ) {
        let wQ = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const qQ = (QQ => {
            var WQ, XQ;
            return null !== (WQ = null === (XQ = uX(QQ)) || void 0 === XQ ? void 0 : XQ.querySelector("[data-pad-tab][data-pad-selected='true']")) && void 0 !== WQ ? WQ : null
          })(WQ),
          TQ = QQ && qQ ? new Set(QQ.getEnabledCandidates(WQ)) : null;
        (0, zX.b)(), XQ === sX.r.SETTINGS && (0, FX.m)(FQ.b.get("openEverythingMenuName")) ? FQ.b.set({
          openEverythingMenuName: XQ
        }) : (0, FX.w)((0, CX.d)("padMenuShortcut"), XQ, wQ), QQ && TQ && qQ && LX(QQ, WQ, TQ, qQ.closest("[data-pad-tabs]"))
      },
      NX = QQ => null !== QQ.closest(".Dropdown-root") || null !== QQ.querySelector(".Dropdown-root.is-open"),
      ZX = QQ => null !== (0, EX.d)() && "popup" !== QQ.layer.kind && !uX(QQ.root) && !NX(QQ.root),
      OX = (0, BQ.d)(jQ.cb),
      KX = (0, BQ.d)(jQ.cb),
      mX = (QQ, WQ, XQ) => {
        if (((QQ, WQ) => {
            const XQ = (0, gQ.g)("chat");
            return cX(WQ) && QQ.isHeld(XQ) ? "hold" === AX.update(QQ.wasPressed(XQ), QQ.isHeld(XQ), performance.now(), yQ.b[(0, rQ.g)().tapHoldTime].wheelMs) && (JQ.b.consumeButton(XQ), PQ.k.mB(iX.p), !0) : (AX.release(), !1)
          })(WQ, XQ.layer.kind)) return !0;
        const wQ = XQ.root;
        for (const [zQ, sQ] of [
            ["menuTabPrevious", -1],
            ["menuTabNext", 1]
          ])
          if (WQ.wasPressed((0, gQ.g)(zQ))) {
            const WQ = NX(wQ) ? null : uX(wQ);
            if (WQ) kX(QQ, wQ, WQ, sQ);
            else if (ZX(XQ)) {
              var qQ;
              const WQ = QQ ? new Set(QQ.getEnabledCandidates(wQ)) : null;
              null !== (qQ = (0, EX.d)()) && void 0 !== qQ && qQ(sQ) && QQ && WQ && LX(QQ, wQ, WQ, null)
            } else QQ && SX(QQ, wQ, sQ);
            return !0
          } for (const [zQ, sQ, FQ] of [
            ["menuPageUp", -1, OX],
            ["menuPageDown", 1, KX]
          ]) {
          const XQ = (0, gQ.g)(zQ);
          if (WQ.wasPressed(XQ) && FQ.reset(), FQ.update(WQ.isHeld(XQ), performance.now())) return tX(QQ, wQ, sQ), !0
        }
        const TQ = "popup" === XQ.layer.kind;
        return xX(WQ, "pause") ? (TQ || (0, FX.t)() && "menu" !== XQ.layer.kind || YX(QQ, wQ, (0, FX.t)() ? sX.r.SETTINGS : (0, RX.e)()), !0) : !!xX(WQ, "leaderboard") && ("home" === XQ.layer.kind ? (QQ => {
          const WQ = [...QQ.querySelectorAll("[data-pad-notifications]")].find(mQ.u);
          WQ && (0, nQ.c)(WQ)
        })(wQ) : TQ || YX(QQ, wQ, sX.r.LOBBY_LEADERBOARD, "inGame" === FQ.b.get("gameState")), !0)
      },
      MX = (QQ, WQ, XQ) => {
        if (mX(QQ, WQ, XQ)) return !0;
        const wQ = "home" === XQ.layer.kind;
        if (WQ.wasPressed((0, gQ.g)("menuSecondary"))) {
          const WQ = QQ.getFocused(),
            qQ = WQ ? rX(WQ) : null;
          if (qQ) return (0, nQ.c)(qQ), !0;
          if (wQ) {
            const WQ = XQ.root.querySelector("[data-pad-search] input");
            return WQ && (0, mQ.w)(WQ, XQ.root) ? (QQ.setFocus(WQ, {
              byUser: !0
            }), (0, nQ.c)(WQ)) : FQ.b.set({
              searchOpen: !0
            }), !0
          }
        }
        return !(!wQ || !xX(WQ, "inventory")) && (((QQ, WQ) => {
          var XQ, wQ;
          const qQ = WQ.querySelector("[data-pad-friends-column]");
          if (!qQ || !(0, mQ.u)(qQ)) return void(0, FX.w)((0, CX.d)("padMenuShortcut"), sX.r.SOCIAL);
          if (eX(QQ, WQ)) return;
          const TQ = null !== (XQ = null === (wQ = qQ.querySelector("[data-pad-friends-start]")) || void 0 === wQ ? void 0 : wQ.getBoundingClientRect().top) && void 0 !== XQ ? XQ : -1 / 0,
            zQ = QQ.getEnabledCandidates(qQ),
            sQ = zQ.filter((QQ => QQ.getBoundingClientRect().top >= TQ)),
            FQ = sQ.length > 0 ? sQ : zQ,
            PQ = aX(FQ.map((QQ => QQ.getBoundingClientRect())));
          QQ.setFocus(PQ >= 0 ? FQ[PQ] : null, {
            byUser: !0
          })
        })(QQ, XQ.root), !0)
      },
      Qw = QQ => {
        var WQ, XQ, wQ;
        const qQ = (0, nQ.B)(QQ);
        if (null !== qQ) return qQ;
        const TQ = (null !== (WQ = null !== (XQ = null !== (wQ = QQ.getAttribute("aria-label")) && void 0 !== wQ ? wQ : QQ.getAttribute("title")) && void 0 !== XQ ? XQ : QQ.textContent) && void 0 !== WQ ? WQ : "").replace(/\s+/g, " ").trim();
        return TQ ? `${QQ.tagName}:${TQ.slice(0,100)}` : null
      };
    class Ww {
      constructor() {
        this.remembered = new Map, this.history = []
      }
      enter(QQ) {
        const WQ = this.history.indexOf(QQ);
        if (WQ >= 0) {
          for (const QQ of this.history.splice(WQ + 1)) this.remembered.delete(QQ);
          return !0
        }
        return this.remembered.delete(QQ), this.history.push(QQ), this.history.length > 32 && this.forget(this.history[0]), !1
      }
      forget(QQ) {
        this.remembered.delete(QQ);
        const WQ = this.history.indexOf(QQ);
        WQ >= 0 && this.history.splice(WQ, 1)
      }
      remember(QQ, WQ, XQ, wQ) {
        const qQ = Qw(WQ),
          TQ = (0, nQ.B)(WQ),
          zQ = null !== TQ && ((QQ, WQ) => {
            let XQ = 0;
            for (const wQ of QQ.querySelectorAll("[data-pad-key], [href]"))
              if ((wQ.getAttribute("data-pad-key") === WQ || wQ.getAttribute("href") === WQ) && (XQ++, XQ > 1)) return !0;
            return !1
          })(XQ, TQ) ? Math.max(0, this.twins(wQ(), TQ).indexOf(WQ)) : 0;
        this.remembered.set(QQ, {
          element: new WeakRef(WQ),
          identity: qQ,
          ordinal: zQ
        })
      }
      has(QQ) {
        return this.remembered.has(QQ)
      }
      recall(QQ, WQ) {
        var XQ, wQ;
        const qQ = this.remembered.get(QQ);
        if (!qQ) return null;
        const TQ = qQ.element.deref();
        if (TQ && WQ.includes(TQ)) return TQ;
        if (null === qQ.identity) return null;
        const zQ = this.twins(WQ, qQ.identity);
        return null !== (XQ = null !== (wQ = zQ[qQ.ordinal]) && void 0 !== wQ ? wQ : zQ[0]) && void 0 !== XQ ? XQ : null
      }
      twins(QQ, WQ) {
        return QQ.filter((QQ => Qw(QQ) === WQ))
      }
    }
    var Xw = XQ(1318);
    const ww = QQ => {
        const WQ = [];
        let XQ = QQ;
        for (; XQ && XQ !== document.body;) {
          const QQ = getComputedStyle(XQ).zIndex;
          "auto" !== QQ && WQ.push(Number(QQ) || 0), XQ = XQ.parentElement
        }
        return WQ.reverse()
      },
      qw = (QQ, WQ) => {
        const XQ = ((QQ, WQ) => {
          const XQ = Math.max(QQ.length, WQ.length);
          for (let TQ = 0; TQ < XQ; TQ++) {
            var wQ, qQ;
            const XQ = (null !== (wQ = QQ[TQ]) && void 0 !== wQ ? wQ : 0) - (null !== (qQ = WQ[TQ]) && void 0 !== qQ ? qQ : 0);
            if (0 !== XQ) return XQ
          }
          return 0
        })(ww(QQ), ww(WQ));
        if (0 !== XQ) return XQ > 0;
        if (QQ.contains(WQ)) return !1;
        if (WQ.contains(QQ)) return !0;
        const wQ = QQ.compareDocumentPosition(WQ);
        return !!(wQ & Node.DOCUMENT_POSITION_PRECEDING) || !(wQ & Node.DOCUMENT_POSITION_FOLLOWING) && null
      },
      Tw = (QQ, WQ) => {
        var XQ;
        return null !== (XQ = qw(QQ.root, WQ.root)) && void 0 !== XQ ? XQ : QQ.order > WQ.order
      },
      zw = (QQ, WQ) => WQ.some((WQ => !WQ.contains(QQ) && !QQ.contains(WQ) && !0 === qw(WQ, QQ)));
    let sw = null,
      Fw = null,
      Pw = -1;
    const gw = () => {
        var QQ;
        const WQ = null === (QQ = document.timeline) || void 0 === QQ ? void 0 : QQ.currentTime,
          XQ = "number" === typeof WQ ? WQ : null;
        if (null !== XQ && XQ === Fw && Pw === (0, Xw.c)()) return sw;
        let wQ = null;
        const qQ = [],
          TQ = [...document.querySelectorAll("[data-pad-covers]")].filter(mQ.u);
        for (const zQ of (0, Xw.d)()) {
          const QQ = zQ.getRoot(),
            WQ = !!QQ && (0, mQ.u)(QQ) && !zw(QQ, TQ);
          if (zQ.shown && !WQ && qQ.push(zQ), zQ.shown = WQ, !QQ || !WQ) continue;
          const XQ = {
            layer: zQ,
            root: QQ,
            order: zQ.order
          };
          wQ && !Tw(XQ, wQ) || (wQ = XQ)
        }
        sw = wQ, Fw = XQ, Pw = (0, Xw.c)();
        for (const zQ of qQ)(0, Xw.e)(zQ);
        return sw
      },
      Jw = () => {
        const QQ = gw();
        return !(null === QQ || void 0 === QQ || !QQ.layer.close) && (QQ.layer.close(), Fw = null, !0)
      },
      rw = () => {
        var QQ, WQ;
        return null !== (QQ = null === (WQ = gw()) || void 0 === WQ ? void 0 : WQ.root) && void 0 !== QQ ? QQ : null
      },
      Iw = QQ => QQ ? {
        ...QQ,
        root: rw()
      } : null;
    let jw = null,
      Bw = null,
      yw = (0, rQ.g)().menuNavigation,
      Vw = null;
    const Dw = new UQ;
    let pw = null;
    PQ.k.subscribe(rQ.c, (() => {
      const QQ = (0, rQ.g)().menuNavigation;
      QQ !== yw && (yw = QQ, jw = null, Bw = null)
    }));
    const Gw = () => {
        var QQ;
        return null !== (QQ = jw) && void 0 !== QQ ? QQ : (0, rQ.g)().menuNavigation
      },
      Uw = QQ => {
        if (Hw()) {
          if (Vw = Iw(QQ), "hybrid" === Gw()) return Dw.lock(), void(Bw = Bw ? null : rw());
          jw = "focus" === Gw() ? "cursor" : "focus"
        }
      },
      bw = () => {
        const QQ = Vw;
        return Vw = null, QQ
      };
    let vw = {
      root: null,
      firstSeenMs: -1 / 0,
      atMs: -1 / 0,
      has: !1
    };
    const dw = function(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const XQ = vw.root === QQ,
          wQ = XQ ? vw.firstSeenMs : WQ,
          qQ = vw.has || WQ - wQ > 1e3;
        return (!XQ || !qQ || WQ - vw.atMs > 250) && (vw = {
          root: QQ,
          firstSeenMs: wQ,
          atMs: WQ,
          has: (0, mQ.m)(QQ)
        }), vw.has
      },
      Hw = () => {
        const QQ = rw();
        return null !== QQ && dw(QQ)
      },
      aw = () => {
        const QQ = gw();
        return Bw && (null === QQ || void 0 === QQ ? void 0 : QQ.root) !== Bw && (Bw = null), (QQ => {
          let {
            mode: WQ,
            hasLayer: XQ,
            hasCandidates: wQ,
            hybridCursorEngaged: qQ
          } = QQ;
          return XQ ? "cursor" !== WQ && wQ() ? "hybrid" === WQ && qQ ? "cursor" : "focus" : "cursor" : null
        })({
          mode: Gw(),
          hasLayer: null !== QQ,
          hasCandidates: () => null !== QQ && dw(QQ.root),
          hybridCursorEngaged: null !== Bw
        })
      },
      lw = () => "hybrid" === Gw() && Hw(),
      hw = "pad-focused";
    var iw = XQ(4871),
      Aw = XQ(5378);
    const Rw = "[data-pad-destructive]",
      Ew = `${Rw}, [data-pad-back]`,
      Cw = QQ => ({
        rect: QQ.getBoundingClientRect(),
        destructive: QQ.matches(Rw),
        closes: null !== QQ.closest("[data-pad-close-button]"),
        unavailable: QQ.matches("[data-pad-unavailable]")
      }),
      uw = QQ => {
        let {
          destructive: WQ,
          closes: XQ,
          unavailable: wQ
        } = QQ;
        return WQ ? XQ ? 2 : 3 : wQ ? 1 : 0
      },
      Lw = QQ => {
        let WQ = -1;
        for (let XQ = 0; XQ < QQ.length; XQ++) {
          if (WQ < 0) {
            WQ = XQ;
            continue
          }
          const wQ = QQ[XQ],
            qQ = QQ[WQ];
          uw(wQ) === uw(qQ) ? HX(wQ.rect, qQ.rect) < 0 && (WQ = XQ) : uw(wQ) < uw(qQ) && (WQ = XQ)
        }
        return WQ
      },
      kw = "[data-pad-tabs]",
      fw = "[data-pad-tab]",
      Sw = (QQ, WQ) => {
        const XQ = QQ.querySelector(`${fw}[data-pad-selected='true']`);
        return XQ && WQ.includes(XQ) ? XQ : null
      },
      tw = (QQ, WQ) => {
        let XQ = WQ;
        for (let wQ = WQ.parentElement; wQ && !wQ.contains(QQ); wQ = wQ.parentElement) XQ = wQ;
        return XQ
      };
    class ow {
      constructor() {
        this.contentReturn = null
      }
      redirect(QQ, WQ, XQ, wQ) {
        var qQ, TQ;
        const zQ = QQ.closest(kw),
          sQ = WQ.closest(kw);
        var FQ;
        if (sQ && sQ !== zQ) return zQ || (this.contentReturn = new WeakRef(QQ)), null !== (FQ = Sw(sQ, XQ)) && void 0 !== FQ ? FQ : WQ;
        if (!zQ || sQ) return WQ;
        const PQ = tw(QQ, WQ),
          gQ = null === (qQ = this.contentReturn) || void 0 === qQ ? void 0 : qQ.deref();
        return gQ && PQ.contains(gQ) && XQ.includes(gQ) ? gQ : null !== (TQ = this.pickRegionStart(PQ, lQ(WQ, "y", wQ), XQ)) && void 0 !== TQ ? TQ : WQ
      }
      findTabContent(QQ, WQ, XQ) {
        const wQ = QQ.closest(kw);
        if (!wQ || !QQ.matches(fw) || wQ.contains(WQ)) return null;
        const qQ = WQ.closest(kw);
        if (qQ && Number(qQ.dataset.padTabs) <= Number(wQ.dataset.padTabs)) return null;
        const TQ = tw(QQ, WQ);
        return XQ.some((QQ => TQ.contains(QQ) && !QQ.closest(Ew))) || !WQ.closest(Ew) ? TQ : null
      }
      pickContentStart(QQ, WQ, XQ) {
        return this.contentReturn = null, this.pickRegionStart(QQ, lQ(QQ, "y", XQ), WQ)
      }
      pickReplacedContentStart(QQ, WQ, XQ, wQ) {
        if (!WQ.contains(QQ)) return null;
        const qQ = tw(WQ, QQ),
          TQ = XQ.filter((QQ => WQ.contains(QQ) && !qQ.contains(QQ) && !QQ.closest(Ew)));
        return 0 === TQ.length ? null : (this.contentReturn = null, this.pickRegionStart(WQ, lQ(TQ[0], "y", wQ), TQ))
      }
      backToStrip(QQ, WQ, XQ) {
        if (QQ.closest(kw)) return null;
        const wQ = uX(XQ);
        for (const qQ of XQ.querySelectorAll(kw)) {
          if (Number(qQ.dataset.padTabs) <= 1 || qQ === wQ) continue;
          const TQ = Sw(qQ, WQ),
            zQ = TQ ? tw(QQ, qQ).parentElement : null;
          if (TQ && zQ && zQ !== XQ && XQ.contains(zQ)) return this.contentReturn = new WeakRef(QQ), TQ
        }
        return null
      }
      pickRegionStart(QQ, WQ, XQ) {
        const wQ = EQ(WQ),
          qQ = QQ => {
            const WQ = XQ.filter((WQ => QQ.contains(WQ) && !WQ.closest(kw) && CQ(WQ.getBoundingClientRect(), wQ))),
              qQ = Lw(WQ.map(Cw));
            return qQ >= 0 ? WQ[qQ] : null
          };
        for (const TQ of (0, mQ.i)(QQ)) {
          const QQ = qQ(TQ);
          if (QQ) return QQ
        }
        for (const TQ of QQ.querySelectorAll(kw)) {
          const QQ = Sw(TQ, XQ);
          if (QQ) return QQ
        }
        return qQ(QQ)
      }
    }
    const ew = "[data-pad-default-focus], .Dropdown-option.is-selected",
      nw = ".Dropdown-root.is-open > .Dropdown-menu",
      xw = "[data-pad-no-step-in]",
      Yw = "[data-pad-tabs]",
      Nw = "[data-pad-press-area]",
      Zw = QQ => {
        let WQ = QQ;
        for (let XQ = 0; WQ && XQ <= 4; XQ++, WQ = WQ.parentElement) {
          const XQ = WQ.querySelector(".CircleInfo");
          if (XQ) return WQ === QQ || WQ.querySelectorAll(mQ.d).length <= 1 ? XQ : null;
          if (WQ !== QQ && WQ.querySelectorAll(mQ.d).length > 1) return null
        }
        return null
      },
      Ow = (QQ, WQ, XQ) => {
        (0, nQ.r)(QQ, WQ, XQ);
        const wQ = null !== QQ && void 0 !== QQ && QQ.isConnected ? Zw(QQ) : null,
          qQ = Zw(WQ);
        wQ !== qQ && (0, nQ.r)(wQ, qQ, qQ ? (0, nQ.y)(qQ) : XQ, {
          leaveBelow: QQ,
          enterBelow: WQ
        })
      },
      Kw = QQ => QQ.getBoundingClientRect(),
      mw = (QQ, WQ, XQ) => {
        const wQ = new Set(XQ);
        for (let qQ = QQ; qQ; qQ = qQ === WQ ? null : qQ.parentElement)
          if (wQ.has(qQ)) return qQ;
        return null
      },
      Mw = (QQ, WQ) => !QQ.root || QQ.root === WQ || WQ.matches(nw) && QQ.root.contains(WQ);
    const Qq = new class {
      constructor() {
        this.focused = null, this.layerKey = null, this.layerRoot = null, this.memory = new Ww, this.tabStripNav = new ow, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.confirmPressedOn = null, this.confirmRepeatKey = null, this.confirmRepeated = !1, this.confirmRepeat = (0, BQ.d)(jQ.v), this.dpadRepeats = new Map(jQ.D.map((QQ => [QQ, (0, BQ.d)(jQ.G)]))), this.stickRepeat = new jQ.d((0, BQ.d)(jQ.gb)), this.lastRefocusCheckMs = -1 / 0, this.enteredLayerAtMs = 0, this.lastFocusedCentre = null, this.lastActivatedKey = null, this.lastActivated = null, this.lastActivatedAtMs = -1 / 0, this.pendingFocus = null, this.tabOpenWait = null, this.retryMove = null, this.scrollRemainder = {
          x: 0,
          y: 0
        }, this.wasActive = !1, this.layerKind = null, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.listeners = new Set, this.dropdownLayers = new WeakMap, this.dropdownLayerCounter = 0
      }
      install() {
        const QQ = JQ.b.register({
            name: "focus",
            isActive: () => (0, IQ.i)() && "focus" === aw(),
            onFrame: QQ => {
              this.onFrame(QQ)
            },
            onDeactivate: () => {
              this.deactivate()
            },
            wakePressActs: QQ => (0, JQ.c)(QQ) || QQ === (0, gQ.g)("menuConfirm") && (0, nQ.G)((0, IQ.c)())
          }),
          WQ = (0, Xw.f)((QQ => {
            const WQ = (0, Xw.j)(QQ);
            null === QQ.memoryKey && this.memory.forget(WQ), WQ === this.layerKey && (this.layerKey = null)
          }));
        let XQ = -1 / 0;
        const wQ = zQ.i.onFrame((QQ => {
            (0, IQ.i)() || QQ.timestampMs - XQ < 100 || (XQ = QQ.timestampMs, gw())
          })),
          qQ = QQ => {
            QQ.isTrusted && QQ.target instanceof Element && zQ.i.getActivePad() && this.noteChosenStop(QQ.target)
          };
        return document.addEventListener("click", qQ, !0), () => {
          QQ(), WQ(), wQ(), document.removeEventListener("click", qQ, !0), this.deactivate()
        }
      }
      noteChosenStop(QQ) {
        var WQ, XQ;
        const wQ = gw();
        if (!wQ || !wQ.root.contains(QQ)) return;
        const qQ = null !== (WQ = null === (XQ = QQ.closest(".Dropdown-root")) || void 0 === XQ ? void 0 : XQ.querySelector(".Dropdown-control")) && void 0 !== WQ ? WQ : QQ,
          TQ = mw(qQ, wQ.root, this.getEnabledCandidates(wQ.root));
        if (!TQ) return;
        const zQ = (0, Xw.j)(wQ.layer);
        zQ === this.layerKey && wQ.root === this.layerRoot || this.beginLayer(wQ, zQ), this.wasActive ? this.setFocus(TQ, {
          scroll: !1,
          byUser: !0
        }) : (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.focused = TQ, this.lastFocusedCentre = (0, nQ.y)(TQ), this.rememberFocus(TQ), this.notify())
      }
      getFocused() {
        return this.focused
      }
      isActive() {
        return this.wasActive
      }
      onChange(QQ) {
        return this.listeners.add(QQ), () => {
          this.listeners.delete(QQ)
        }
      }
      notify() {
        for (const QQ of this.listeners) QQ()
      }
      deactivate() {
        var QQ;
        if (this.wasActive) {
          this.wasActive = !1, this.layerKind = null, this.confirmPressedOn = null, this.retryMove = null, this.pendingFocus = null;
          for (const QQ of this.dpadRepeats.values()) QQ.reset();
          this.stickRepeat.reset(), null !== (QQ = this.focused) && void 0 !== QQ && QQ.isConnected && Ow(this.focused, null, (0, nQ.y)(this.focused)), this.notify()
        }
      }
      setFocus(QQ) {
        var WQ;
        let {
          scroll: XQ = !0,
          byUser: wQ = !1
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (wQ && (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1), QQ === this.focused) return;
        const qQ = null !== (WQ = this.focused) && void 0 !== WQ && WQ.isConnected ? this.focused : null;
        if (this.focused = QQ, QQ) {
          XQ && (QQ.classList.add(hw), QQ.scrollIntoView({
            block: "nearest",
            inline: "nearest",
            behavior: "instant"
          })), wQ && ((QQ, WQ) => {
            const XQ = WQ.closest("[data-pad-friends-column]");
            XQ && QQ && !XQ.contains(QQ) && (oX = new WeakRef(QQ))
          })(qQ, QQ);
          const WQ = (0, nQ.y)(QQ);
          this.lastFocusedCentre = WQ, this.movedInLayer && this.rememberFocus(QQ), Ow(qQ, QQ, WQ), "false" === QQ.getAttribute("aria-pressed") && QQ.closest("[data-pad-select-on-focus]") && (0, nQ.c)(QQ)
        } else qQ && Ow(qQ, null, (0, nQ.y)(qQ));
        this.notify()
      }
      rememberFocus(QQ) {
        const WQ = this.layerRoot;
        this.layerKey && WQ && this.memory.remember(this.layerKey, QQ, WQ, (() => this.getEnabledCandidates(WQ)))
      }
      noteCursorActivation(QQ) {
        const WQ = gw();
        if (!WQ || !WQ.root.contains(QQ)) return;
        const XQ = this.getEnabledCandidates(WQ.root),
          wQ = new Set(XQ);
        let qQ = QQ;
        for (; qQ && !wQ.has(qQ);) qQ = qQ === WQ.root ? null : qQ.parentElement;
        if (!(qQ instanceof HTMLElement)) return;
        const TQ = (0, Xw.j)(WQ.layer);
        this.memory.enter(TQ), this.memory.remember(TQ, qQ, WQ.root, (() => XQ))
      }
      notePageEnteredByCursor(QQ) {
        return this.memory.enter(QQ)
      }
      recallStop(QQ, WQ) {
        return this.findRemembered(QQ, WQ)
      }
      focusWhenFound(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
          XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.pendingFocus = {
          find: QQ,
          untilMs: performance.now() + WQ,
          holdWhile: XQ
        }
      }
      getEnabledCandidates(QQ) {
        return (0, mQ.g)(QQ).filter((QQ => !(0, mQ.A)(QQ)))
      }
      onFrame(QQ) {
        var WQ;
        const XQ = gw();
        if (!XQ) return;
        const wQ = null !== (WQ = this.findOpenDropdown(XQ)) && void 0 !== WQ ? WQ : XQ,
          qQ = performance.now(),
          TQ = (0, Xw.j)(wQ.layer);
        if (TQ !== this.layerKey || wQ.root !== this.layerRoot) {
          const WQ = this.focused;
          if (null !== this.layerKey && wQ.root === this.layerRoot && WQ && (0, mQ.w)(WQ, wQ.root)) this.continueLayer(TQ, WQ), this.wasActive || this.resume(wQ.root, qQ);
          else {
            const WQ = !this.wasActive && !QQ.wokeDevice,
              zQ = "death" === this.layerKind || WQ,
              sQ = this.enterLayer(wQ, TQ);
            "popup" !== wQ.layer.kind || wQ !== XQ || sQ ? "menu" === wQ.layer.kind && zQ && "inGame" === FQ.b.get("gameState") && !(0, zX.d)(3e3) && (this.pressGuardExtends = !0, this.pressGuardUntilMs = qQ + iw.d) : (this.pressGuardExtends = WQ, this.pressGuardUntilMs = qQ + (WQ ? iw.d : zQ ? 500 : 250))
          }
        } else this.wasActive || this.resume(wQ.root, qQ);
        if (this.layerKind = wQ.layer.kind, this.wasActive || (this.wasActive = !0, this.notify()), QQ.wokeDevice && this.focusPointedStop(wQ.root), this.validateFocus(wQ, qQ), qQ < this.pressGuardUntilMs && this.pressGuardExtends && (QQ.wasPressed((0, gQ.g)("menuConfirm")) || QQ.wasPressed((0, gQ.g)("menuBack"))) && (this.pressGuardUntilMs = qQ + iw.d), qQ >= this.pressGuardUntilMs && this.handleButtons(QQ, wQ)) return;
        const zQ = "hybrid" === Gw();
        if (zQ && (QQ => {
            const WQ = rw();
            return WQ !== pw && (pw = WQ, Dw.lock()), Dw.update(QQ, (0, rQ.g)().moveDeadzone)
          })(QQ.leftStick)) return sQ = this.getHandoff(), Vw = Iw(sQ), Bw = rw(), void JQ.b.handOffHeldInput();
        var sQ;
        this.handleDirections(QQ, wQ, qQ, !zQ), this.handleScroll(QQ, wQ)
      }
      findOpenDropdown(QQ) {
        const WQ = QQ.root.querySelector(nw);
        if (!WQ || !(0, mQ.u)(WQ)) return null;
        let XQ = this.dropdownLayers.get(WQ);
        return XQ || (this.dropdownLayerCounter++, XQ = {
          id: `dropdown-${this.dropdownLayerCounter}`,
          kind: QQ.layer.kind,
          getRoot: () => WQ,
          close: () => {
            (0, nQ.k)(WQ)
          },
          memoryKey: null
        }, this.dropdownLayers.set(WQ, XQ)), {
          layer: XQ,
          root: WQ,
          order: QQ.order
        }
      }
      focusPointedStop(QQ) {
        const WQ = (0, IQ.c)(),
          XQ = WQ ? document.elementFromPoint(WQ.x, WQ.y) : null;
        if (!XQ || !QQ.contains(XQ)) return;
        const wQ = mw(XQ, QQ, this.getEnabledCandidates(QQ));
        wQ && this.setFocus(wQ, {
          scroll: !1,
          byUser: !0
        })
      }
      enterLayer(QQ, WQ) {
        const XQ = this.beginLayer(QQ, WQ),
          wQ = bw();
        return wQ && Mw(wQ, QQ.root) ? (this.takeOver(QQ.root, wQ, this.enteredLayerAtMs), XQ) : (this.restoreLayerFocus(QQ.root, XQ), XQ)
      }
      beginLayer(QQ, WQ) {
        return this.layerKey = WQ, this.layerRoot = QQ.root, this.lastActivatedKey = null, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoreOnFocusLoss = !1, this.retryMove = null, this.pendingFocus = null, this.confirmPressedOn = null, this.lastRefocusCheckMs = -1 / 0, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.enteredLayerAtMs = performance.now(), this.lastFocusedCentre = null, this.memory.enter(WQ)
      }
      restoreLayerFocus(QQ, WQ) {
        const XQ = WQ && this.layerKey ? this.findRemembered(QQ, this.layerKey) : null;
        this.restoredFromMemory = null !== XQ, this.setFocus(null !== XQ && void 0 !== XQ ? XQ : this.pickInitial(QQ, {
          waitForContent: !0
        }))
      }
      continueLayer(QQ, WQ) {
        this.layerKey = QQ;
        const XQ = this.memory.enter(QQ);
        this.restoreOnFocusLoss = XQ, this.movedInLayer && !XQ && this.rememberFocus(WQ)
      }
      resume(QQ, WQ) {
        var XQ;
        const wQ = bw();
        wQ && Mw(wQ, QQ) ? this.takeOver(QQ, wQ, WQ) : null !== (XQ = this.focused) && void 0 !== XQ && XQ.isConnected && Ow(null, this.focused, (0, nQ.y)(this.focused))
      }
      pickPreferred(QQ) {
        var WQ;
        return null !== (WQ = this.layerKey ? this.findRemembered(QQ, this.layerKey) : null) && void 0 !== WQ ? WQ : this.pickInitial(QQ, {
          waitForContent: !0
        })
      }
      findRemembered(QQ, WQ) {
        return this.memory.has(WQ) ? this.memory.recall(WQ, this.getEnabledCandidates(QQ)) : null
      }
      getHandoff() {
        var QQ, WQ, XQ;
        const wQ = null !== (QQ = this.focused) && void 0 !== QQ && QQ.isConnected ? this.focused : null,
          qQ = null !== (WQ = this.layerRoot) && void 0 !== WQ && WQ.isConnected ? this.layerRoot : null;
        return {
          point: wQ ? (0, nQ.y)(wQ) : null !== (XQ = this.lastFocusedCentre) && void 0 !== XQ ? XQ : this.getLayerStartPoint(qQ),
          element: wQ,
          direction: null
        }
      }
      getLayerStartPoint(QQ) {
        if (!QQ) return {
          x: window.innerWidth / 2,
          y: window.innerHeight / 2
        };
        const WQ = this.pickInitial(QQ, {
          includeDisabled: !0
        });
        return (0, nQ.y)(null !== WQ && void 0 !== WQ ? WQ : QQ)
      }
      takeOver(QQ, WQ, XQ) {
        const {
          element: wQ,
          direction: qQ,
          point: TQ
        } = WQ, zQ = wQ instanceof HTMLElement && (0, mQ.w)(wQ, QQ) ? wQ : null;
        if (!qQ) {
          const WQ = this.focused;
          return zQ ? this.setFocus(zQ, {
            scroll: !1,
            byUser: !0
          }) : this.focusNearest(QQ, TQ), void(this.focused && this.focused === WQ && this.focused.isConnected && Ow(null, this.focused, (0, nQ.y)(this.focused)))
        }
        if (this.dpadRepeats.get(qQ).update(!0, XQ), zQ) return this.setFocus(zQ, {
          scroll: !1,
          byUser: !0
        }), void this.move(QQ, qQ, XQ, !0);
        const sQ = this.getEnabledCandidates(QQ),
          FQ = sQ.map(Kw),
          PQ = pX(new DOMRect(TQ.x, TQ.y, 0, 0), FQ, qQ),
          gQ = PQ >= 0 ? PQ : dX(TQ, FQ);
        this.setFocus(gQ >= 0 ? sQ[gQ] : this.pickInitial(QQ), {
          byUser: !0
        })
      }
      focusNearest(QQ, WQ) {
        const XQ = this.getEnabledCandidates(QQ),
          wQ = dX(WQ, XQ.map(Kw));
        this.setFocus(wQ >= 0 ? XQ[wQ] : this.pickInitial(QQ), {
          byUser: !0
        })
      }
      pickDefault(QQ) {
        let {
          includeDisabled: WQ = !1,
          exclude: XQ = null
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const wQ = [...QQ.querySelectorAll(ew)].filter((wQ => (null === XQ || void 0 === XQ || !XQ.has(wQ)) && (WQ ? (0, mQ.C)(wQ, QQ) : (0, mQ.w)(wQ, QQ)))),
          qQ = Lw(wQ.map(Cw));
        return qQ >= 0 ? wQ[qQ] : null
      }
      pickNewAreaStart(QQ, WQ) {
        const XQ = [...QQ.querySelectorAll(Nw)].filter(mQ.u);
        for (const wQ of [...(0, mQ.i)(QQ), ...XQ]) {
          if (WQ.has(wQ)) continue;
          const QQ = this.getEnabledCandidates(wQ),
            XQ = Lw(QQ.map(Cw));
          if (XQ >= 0) return QQ[XQ]
        }
        return null
      }
      pickInitial(QQ) {
        let {
          includeDisabled: WQ = !1,
          waitForContent: XQ = !1,
          enteredAtMs: wQ = this.enteredLayerAtMs
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const qQ = this.pickDefault(QQ, {
          includeDisabled: WQ
        });
        if (qQ) return qQ;
        const TQ = QQ => WQ ? (0, mQ.g)(QQ) : this.getEnabledCandidates(QQ);
        let zQ = [];
        for (const rQ of (0, mQ.i)(QQ))
          if (zQ = TQ(rQ), zQ.length > 0) break;
        if (0 === zQ.length) {
          if (XQ && performance.now() - wQ < 1e4 && (0, mQ.q)(QQ)) return null;
          zQ = TQ(QQ)
        }
        const sQ = zQ.map(Kw),
          FQ = EQ(null),
          PQ = zQ.filter(((QQ, WQ) => CQ(sQ[WQ], FQ))),
          gQ = PQ.length > 0 ? PQ : zQ,
          JQ = Lw(gQ.map(Cw));
        return JQ >= 0 ? gQ[JQ] : null
      }
      validateFocus(QQ, WQ) {
        if (this.pendingFocus) {
          var XQ, wQ;
          const qQ = this.pendingFocus.find();
          if (qQ && (0, mQ.w)(qQ, QQ.root)) return this.pendingFocus = null, void this.setFocus(qQ, {
            byUser: !0
          });
          WQ > this.pendingFocus.untilMs && (null === (XQ = (wQ = this.pendingFocus).holdWhile) || void 0 === XQ || !XQ.call(wQ)) && (this.pendingFocus = null)
        }
        const qQ = this.focused,
          TQ = !!qQ && (0, mQ.w)(qQ, QQ.root);
        if (!(!TQ && qQ && qQ === this.lastActivated && WQ - this.lastActivatedAtMs < 5e3 && QQ.root.contains(qQ) && (0, mQ.u)(qQ) && (0, mQ.A)(qQ))) {
          if (!TQ && this.restoreOnFocusLoss && this.layerKey) return this.restoreOnFocusLoss = !1, this.movedInLayer = !1, this.scrolledInLayer = !1, this.enteredLayerAtMs = WQ, void this.restoreLayerFocus(QQ.root, !0);
          if ((!TQ || !this.movedInLayer && !this.scrolledInLayer) && !(WQ - this.lastRefocusCheckMs < (TQ ? 200 : 50)))
            if (this.lastRefocusCheckMs = WQ, TQ) {
              const XQ = WQ - this.enteredLayerAtMs < 15e3 ? this.pickPreferred(QQ.root) : null,
                wQ = null !== XQ && void 0 !== XQ ? XQ : this.restoredFromMemory ? null : this.pickDefault(QQ.root);
              wQ && wQ !== qQ && this.setFocus(wQ)
            } else {
              if (this.lastFocusedCentre && this.movedInLayer) {
                const WQ = this.pendingFocus;
                return this.focusNearest(QQ.root, this.lastFocusedCentre), void(this.pendingFocus = WQ)
              }
              this.setFocus(this.pickPreferred(QQ.root))
            }
        }
      }
      handleButtons(QQ, WQ) {
        if (QQ.wasPressed((0, gQ.g)("menuToggleCursor"))) return Uw(this.getHandoff()), !0;
        if (QQ.wasPressed((0, gQ.g)("menuBack"))) {
          const QQ = (0, nQ.k)(WQ.root);
          return QQ ? this.setFocus(QQ, {
            byUser: !0
          }) : eX(this, WQ.root) || ((0, nQ.e)(WQ.root) ? this.returnToOpener(WQ.root) : this.backToStrip(WQ.root) || Jw()), !0
        }
        const XQ = (0, gQ.g)("menuConfirm");
        var wQ, qQ;
        QQ.wasPressed(XQ) && (this.confirmPressedOn = this.focused, this.confirmRepeatKey = null !== (wQ = null === (qQ = this.focused) || void 0 === qQ ? void 0 : qQ.getAttribute("data-pad-repeat")) && void 0 !== wQ ? wQ : null, this.confirmRepeated = QQ.wokeDevice, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now()));
        if (QQ.wasReleased(XQ)) {
          const QQ = this.confirmPressedOn;
          if (this.confirmPressedOn = null, QQ && !this.confirmRepeated && QQ === this.focused && QQ.isConnected && !(0, mQ.A)(QQ)) {
            const XQ = QQ.matches("[data-pad-tab]") ? QQ.closest(Yw) : null;
            XQ ? this.enterTab(QQ, XQ, WQ.root, performance.now()) : this.activate(QQ)
          }
          return !0
        }
        return this.repeatConfirm(QQ, XQ), MX(this, QQ, WQ)
      }
      repeatConfirm(QQ, WQ) {
        const XQ = this.confirmPressedOn;
        XQ && null !== this.confirmRepeatKey && QQ.isHeld(WQ) && (XQ === this.focused && XQ.isConnected && !(0, mQ.A)(XQ) && XQ.getAttribute("data-pad-repeat") === this.confirmRepeatKey ? XQ.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.confirmRepeated = !0, this.activate(XQ)) : this.confirmRepeatKey = null)
      }
      backToStrip(QQ) {
        const WQ = this.focused;
        if (!(0, rQ.g)().menuBackToCategories) return !1;
        const XQ = null !== WQ && void 0 !== WQ && WQ.isConnected ? this.tabStripNav.backToStrip(WQ, this.getEnabledCandidates(QQ), QQ) : null;
        return XQ && this.setFocus(XQ, {
          byUser: !0
        }), null !== XQ
      }
      returnToOpener(QQ) {
        const WQ = this.lastActivatedKey;
        WQ && (this.lastActivatedKey = null, this.focusWhenFound((() => {
          var XQ;
          return null !== (XQ = this.getEnabledCandidates(QQ).find((QQ => (0, nQ.B)(QQ) === WQ))) && void 0 !== XQ ? XQ : null
        })))
      }
      activate(QQ) {
        var WQ;
        if ((0, Aw.e)(QQ) || (0, nQ.F)(QQ)) return;
        this.lastActivatedKey = null !== (WQ = (0, nQ.B)(QQ)) && void 0 !== WQ ? WQ : this.lastActivatedKey, this.lastActivated = QQ, this.lastActivatedAtMs = performance.now(), this.rememberFocus(QQ);
        const XQ = this.layerRoot;
        if (XQ) {
          const WQ = new Set(XQ.querySelectorAll(ew)),
            wQ = new Set(XQ.querySelectorAll(`[data-pad-initial-area], ${Nw}`)),
            qQ = this.lastActivatedAtMs;
          this.focusWhenFound((() => {
            var qQ;
            return (0, mQ.w)(QQ, XQ) ? null : null !== (qQ = this.pickDefault(XQ, {
              exclude: WQ
            })) && void 0 !== qQ ? qQ : this.pickNewAreaStart(XQ, wQ)
          }), 5e3, (() => QQ.isConnected && (0, mQ.A)(QQ) && performance.now() - qQ < 6e4))
        }(0, nQ.c)(QQ), (0, nQ.h)(QQ)
      }
      handleDirections(QQ, WQ, XQ, wQ) {
        const qQ = cX(WQ.layer.kind) ? (0, gQ.g)("chat") : null;
        for (const sQ of jQ.D) {
          this.dpadRepeats.get(sQ).update(QQ.isHeld(sQ), XQ) && (sQ !== qQ || QQ.wasPressed(sQ)) && this.move(WQ.root, sQ, XQ, !0)
        }
        const TQ = wQ ? (0, jQ.p)(QQ.leftStick, (0, rQ.g)().moveDeadzone) : {
            x: 0,
            y: 0
          },
          zQ = this.stickRepeat.update((0, jQ.ib)(TQ), XQ);
        if (zQ && this.move(WQ.root, zQ, XQ, !0), this.retryMove && XQ >= this.retryMove.atMs) {
          const {
            direction: QQ
          } = this.retryMove;
          this.retryMove = null, this.move(WQ.root, QQ, XQ, !1)
        }
      }
      move(QQ, WQ, XQ, wQ) {
        var qQ;
        let TQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.pendingFocus && this.pendingFocus === (null === (qQ = this.tabOpenWait) || void 0 === qQ ? void 0 : qQ.wait) && WQ === this.tabOpenWait.direction) return;
        this.pendingFocus = null;
        const zQ = this.focused;
        if (!zQ || !zQ.isConnected) {
          const WQ = this.pickInitial(QQ);
          return void(WQ && this.setFocus(WQ, {
            byUser: !0
          }))
        }
        const sQ = "Left" === WQ || "Right" === WQ,
          FQ = sQ ? (0, Aw.e)(zQ) : null;
        if (FQ) return void FQ.adjust("Left" === WQ ? -1 : 1);
        const PQ = QQ => null !== QQ.closest("[data-pad-friends-column]"),
          gQ = PQ(zQ),
          JQ = Kw(zQ),
          rQ = sQ || zQ.closest(Yw) ? null : (QQ => {
            const WQ = new Map;
            return XQ => {
              const wQ = XQ.closest(Yw);
              if (!wQ) return !1;
              let qQ = WQ.get(wQ);
              if (void 0 === qQ) {
                const XQ = Kw(wQ);
                qQ = DX(QQ, XQ) && (XQ.right <= QQ.left || XQ.left >= QQ.right), WQ.set(wQ, qQ)
              }
              return qQ
            }
          })(JQ),
          IQ = null !== zQ.closest(xw),
          jQ = this.getEnabledCandidates(QQ).filter((QQ => QQ !== zQ && (sQ || PQ(QQ) === gQ) && !(null !== rQ && void 0 !== rQ && rQ(QQ)) && (IQ || !QQ.closest(xw)))),
          BQ = jQ.map(Kw),
          yQ = lQ(zQ, "y", QQ),
          VQ = EQ(yQ);
        if (!TQ && !CQ(JQ, VQ)) {
          const QQ = jQ.filter(((QQ, WQ) => CQ(BQ[WQ], VQ)));
          if (QQ.length > 0) {
            const WQ = {
              x: VQ.left + VQ.width / 2,
              y: VQ.top + VQ.height / 2
            };
            return void this.setFocus(QQ[dX(WQ, QQ.map(Kw))], {
              byUser: !0
            })
          }
        }
        const DQ = sQ ? ((QQ, WQ, XQ) => {
            const wQ = Kw(QQ),
              qQ = QQ.closest(Yw),
              TQ = qQ ? Kw(qQ) : null;
            return WQ.map(((WQ, zQ) => {
              const sQ = XQ[zQ];
              if (sQ.bottom > wQ.top && sQ.top < wQ.bottom) return !0;
              const FQ = WQ.closest(Yw);
              if (qQ && TQ) return FQ !== qQ && (null !== FQ || sQ.bottom <= TQ.top || sQ.top >= TQ.bottom);
              if (FQ) return !DX(wQ, Kw(FQ));
              let PQ = QQ;
              for (let XQ = QQ.parentElement; XQ && !XQ.contains(WQ); XQ = XQ.parentElement) PQ = XQ;
              const gQ = Kw(PQ);
              return sQ.right > gQ.left && sQ.left < gQ.right
            }))
          })(zQ, jQ, BQ) : void 0,
          pQ = sQ && !zQ.closest(Yw) ? (QQ => QQ.map((QQ => !QQ.closest(Ew))))(jQ) : void 0,
          GQ = ((QQ, WQ) => {
            const XQ = [];
            for (let qQ = QQ; qQ; qQ = qQ.parentElement) XQ.push(qQ);
            const wQ = new Map;
            return XQ.forEach(((QQ, WQ) => {
              wQ.set(QQ, XQ.length - 1 - WQ)
            })), WQ.map((QQ => {
              for (let WQ = QQ; WQ; WQ = WQ.parentElement) {
                const QQ = wQ.get(WQ);
                if (void 0 !== QQ) return QQ
              }
              return -1
            }))
          })(zQ, jQ),
          UQ = sQ ? "x" : "y",
          bQ = lQ(zQ, UQ, QQ);
        let vQ = pX(JQ, BQ, WQ, GQ, DQ, pQ);
        if (vQ >= 0 && bQ && !bQ.contains(jQ[vQ])) {
          const QQ = jQ.flatMap(((QQ, WQ) => bQ.contains(QQ) ? [WQ] : [])),
            XQ = WQ => WQ && QQ.map((QQ => WQ[QQ])),
            wQ = pX(JQ, QQ.map((QQ => BQ[QQ])), WQ, QQ.map((QQ => GQ[QQ])), XQ(DQ), XQ(pQ));
          vQ = wQ >= 0 ? QQ[wQ] : vQ
        }
        if (vQ >= 0) return void this.moveTo(zQ, jQ[vQ], jQ, QQ, WQ, TQ);
        if (!wQ) return;
        const dQ = "Right" === WQ || "Down" === WQ ? 1 : -1;
        if (bQ && AQ(bQ, UQ, dQ)) {
          const QQ = "y" === UQ ? bQ.clientHeight : bQ.clientWidth;
          RQ(bQ, UQ, dQ * QQ * .5), this.retryMove = {
            direction: WQ,
            atMs: XQ + 80
          }
        }
      }
      moveTo(QQ, WQ, XQ, wQ, qQ, TQ) {
        const zQ = this.tabStripNav.findTabContent(QQ, WQ, XQ);
        zQ && "true" !== QQ.dataset.padSelected ? this.openTab(QQ, zQ, wQ, qQ) : TQ && !zQ || this.setFocus(this.tabStripNav.redirect(QQ, WQ, XQ, wQ), {
          byUser: !0
        })
      }
      openTab(QQ, WQ, XQ, wQ) {
        const qQ = WQ.parentElement;
        (0, nQ.c)(QQ), this.focusWhenFound((() => "true" !== QQ.dataset.padSelected ? null : WQ.isConnected ? this.tabStripNav.pickContentStart(WQ, this.getEnabledCandidates(XQ), XQ) : qQ ? this.tabStripNav.pickReplacedContentStart(QQ, qQ, this.getEnabledCandidates(XQ), XQ) : null), 3e3), this.tabOpenWait = {
          wait: this.pendingFocus,
          direction: wQ
        }
      }
      enterTab(QQ, WQ, XQ, wQ) {
        this.move(XQ, (QQ => {
          const WQ = [...QQ.querySelectorAll(fw)].filter((WQ => WQ.closest(kw) === QQ));
          if (WQ.length >= 2) {
            const QQ = WQ[0].getBoundingClientRect(),
              XQ = WQ[1].getBoundingClientRect();
            return Math.abs(XQ.top - QQ.top) > Math.abs(XQ.left - QQ.left) ? "Right" : "Down"
          }
          const XQ = QQ.getBoundingClientRect();
          return XQ.height > XQ.width ? "Right" : "Down"
        })(WQ), wQ, !1, !0), this.focused !== QQ || this.pendingFocus || this.activate(QQ)
      }
      handleScroll(QQ, WQ) {
        const XQ = (0, jQ.p)(QQ.rightStick, .2);
        if (0 === XQ.x && 0 === XQ.y) return void(this.scrollRemainder = {
          x: 0,
          y: 0
        });
        const wQ = QQ.dtMs / 1e3;
        for (const TQ of ["x", "y"]) {
          var qQ;
          const QQ = XQ[TQ];
          if (0 === QQ) continue;
          const zQ = null !== (qQ = lQ(this.focused, TQ, WQ.root)) && void 0 !== qQ ? qQ : iQ(WQ.root, TQ);
          if (!zQ) continue;
          const sQ = Math.sign(QQ) * QQ * QQ * 1500 * wQ + this.scrollRemainder[TQ],
            FQ = Math.trunc(sQ);
          this.scrollRemainder[TQ] = sQ - FQ, 0 !== FQ && (RQ(zQ, TQ, FQ), this.scrolledInLayer = !0)
        }
      }
    };
    var Wq = XQ(8608);
    var Xq = XQ(9104);
    const wq = {
        duration: 80,
        strongMagnitude: .2,
        weakMagnitude: .2,
        needsPadInUse: !1
      },
      qq = {
        damage: {
          duration: 120,
          strongMagnitude: .45,
          weakMagnitude: .3,
          minIntervalMs: 250,
          needsPadInUse: !0
        },
        blockBreak: {
          duration: 40,
          strongMagnitude: 0,
          weakMagnitude: .25,
          minIntervalMs: 120,
          needsPadInUse: !0
        },
        hit: {
          duration: 50,
          strongMagnitude: .15,
          weakMagnitude: .35,
          minIntervalMs: 120,
          needsPadInUse: !0
        },
        connect: {
          ...wq,
          minIntervalMs: 1e3
        },
        preview: {
          ...wq,
          minIntervalMs: 0
        }
      };
    const Tq = new class {
        constructor(QQ) {
          this.deps = QQ, this.lastPlayedMs = {}, this.loggedFailure = !1, this.logFailure = QQ => {
            this.loggedFailure || (this.loggedFailure = !0, console.warn("Controller vibration failed; further failures are not logged.", QQ))
          }
        }
        play(QQ, WQ) {
          const XQ = qq[QQ];
          if (!this.deps.isVibrationOn() || XQ.needsPadInUse && !this.deps.isPadInUse()) return !1;
          const wQ = this.lastPlayedMs[QQ];
          if (void 0 !== wQ && WQ - wQ < XQ.minIntervalMs) return !1;
          const qQ = this.deps.getActuator();
          if (!qQ) return !1;
          this.lastPlayedMs[QQ] = WQ;
          const {
            duration: TQ,
            strongMagnitude: zQ,
            weakMagnitude: sQ
          } = XQ;
          try {
            qQ.playEffect("dual-rumble", {
              duration: TQ,
              strongMagnitude: zQ,
              weakMagnitude: sQ
            }).catch(this.logFailure)
          } catch (FQ) {
            this.logFailure(FQ)
          }
          return !0
        }
      }({
        getActuator: () => (QQ => {
          const WQ = null === QQ || void 0 === QQ ? void 0 : QQ.vibrationActuator;
          return "function" === typeof(null === WQ || void 0 === WQ ? void 0 : WQ.playEffect) ? WQ : null
        })(zQ.i.getActiveGamepad()),
        isVibrationOn: () => (0, rQ.g)().vibration,
        isPadInUse: IQ.i
      }),
      zq = QQ => {
        Tq.play(QQ, performance.now())
      };
    var sq = XQ(8613),
      Fq = XQ(3158),
      Pq = XQ(129),
      gq = XQ(43),
      Jq = XQ(698);
    class rq {
      constructor(QQ) {
        this.deps = QQ
      }
      check() {
        let QQ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const WQ = this.deps.isPadActive() ? this.deps.getPadFamily() : null;
        if (!WQ) return "skipped";
        const XQ = QQ ? this.deps.getVisitId() : this.deps.peekVisitId();
        return null === XQ || this.deps.readReportedVisitId() === XQ ? "skipped" : this.deps.canReport() ? (this.deps.writeReportedVisitId(XQ), this.deps.nI(WQ, this.deps.getInputType()), "reported") : "notReady"
      }
    }
    const Iq = "controllerUsageReportedVisit";
    var jq = XQ(1404),
      Bq = XQ(1802),
      yq = XQ(691),
      Vq = XQ(1498),
      Dq = XQ(1285);
    const pq = QQ => ({
        translationKey: `controller:${QQ}`
      }),
      Gq = {
        A: "A",
        B: "B",
        X: "X",
        Y: "Y",
        LB: "LB",
        RB: "RB",
        LT: "LT",
        RT: "RT",
        View: pq("padButtonView"),
        Menu: pq("padButtonMenu"),
        LS: "L3",
        RS: "R3",
        Up: pq("padButtonDpadUp"),
        Down: pq("padButtonDpadDown"),
        Left: pq("padButtonDpadLeft"),
        Right: pq("padButtonDpadRight"),
        Home: pq("padButtonHome"),
        LeftStick: pq("padButtonLeftStick"),
        RightStick: pq("padButtonRightStick")
      },
      Uq = {
        xbox: {
          LS: "LS",
          RS: "RS"
        },
        generic: {},
        steamdeck: {
          LB: "L1",
          RB: "R1",
          LT: "L2",
          RT: "R2"
        },
        playstation: {
          A: "\u2715",
          B: "\u25cb",
          X: "\u25a1",
          Y: "\u25b3",
          LB: "L1",
          RB: "R1",
          LT: "L2",
          RT: "R2",
          View: pq("padButtonCreate"),
          Menu: pq("padButtonOptions")
        },
        nintendo: {
          A: "B",
          B: "A",
          X: "Y",
          Y: "X",
          LB: "L",
          RB: "R",
          LT: "ZL",
          RT: "ZR",
          View: "\u2212",
          Menu: "+"
        }
      },
      bq = (QQ, WQ) => {
        var XQ;
        const wQ = null !== (XQ = Uq[QQ][WQ]) && void 0 !== XQ ? XQ : Gq[WQ];
        return "string" === typeof wQ ? wQ : (0, qQ.x)(Dq.h.get().getCurrentLanguageCode(), wQ.translationKey)
      },
      vq = QQ => {
        let {
          glyph: WQ,
          family: XQ,
          className: wQ
        } = QQ;
        const qQ = (0, IQ.x)(),
          TQ = null !== XQ && void 0 !== XQ ? XQ : qQ,
          zQ = (0, sq.e)(TQ, WQ);
        return (0, fQ.jsx)("span", {
          className: kQ()("ControllerGlyph", wQ),
          role: "img",
          "aria-label": bq(TQ, WQ),
          style: {
            "--pad-glyph-mask": `url(${zQ})`,
            "--pad-glyph-aspect": (0, sq.c)(TQ, WQ)
          }
        })
      };
    var dq = XQ(1975);
    const Hq = QQ => {
      let {
        action: WQ
      } = QQ;
      const {
        t: XQ
      } = (0, qQ.C)();
      switch (WQ.kind) {
        case "reload":
          return (0, fQ.jsx)("span", {
            children: XQ("controller:gameplayReload")
          });
        case "specialAction":
          return null;
        case "customButton":
          return (0, fQ.jsx)(dq.e, {
            text: WQ.description ? [{
              icon: WQ.icon
            }, ` ${WQ.description}`] : [{
              icon: WQ.icon
            }]
          });
        case "touchButton":
          return (0, fQ.jsx)(dq.e, {
            text: WQ.label
          })
      }
    };
    var aq = XQ(9106);
    const lq = QQ => {
      let {
        hold: WQ
      } = QQ;
      return (0, fQ.jsx)("div", {
        className: "DropStackFillTrack",
        style: {
          "--pad-drop-stack-hold": `${WQ.holdMs}ms`
        },
        children: (0, fQ.jsx)("div", {
          className: "DropStackFillBar"
        })
      }, WQ.id)
    };
    var hq = XQ(9130),
      iq = XQ(9137),
      cq = XQ(9143),
      Aq = XQ(9128);
    const Rq = () => {
        const {
          gameState: QQ
        } = (0, FQ.n)(["gameState"]), WQ = (0, IQ.w)(), [wQ, qQ] = (0, uQ.useState)(!1), [TQ, zQ] = (0, uQ.useState)(!1);
        return (0, uQ.useEffect)((() => {
          "inGame" === QQ && qQ(!0)
        }), [QQ]), (0, uQ.useEffect)((() => {
          if (!wQ) return;
          let QQ = null,
            WQ = !1;
          return (yq.x ? Promise.all([XQ.e(75), XQ.e(93), XQ.e(277), XQ.e(193), XQ.e(233), XQ.e(232), XQ.e(92)]).then((() => XQ(40781))).then((QQ => QQ.startWasmPadGameplay)) : Promise.all([XQ.e(75), XQ.e(241), XQ.e(240), XQ.e(101), XQ.e(78), XQ.e(77), XQ.e(76), XQ.e(189), XQ.e(237), XQ.e(80), XQ.e(93), XQ.e(190), XQ.e(231), XQ.e(100), XQ.e(243), XQ.e(234), XQ.e(250), XQ.e(219), XQ.e(123), XQ.e(90), XQ.e(251), XQ.e(79), XQ.e(162), XQ.e(252), XQ.e(233), XQ.e(205)]).then((() => XQ(40891))).then((QQ => QQ.startPadGameplay))).then((XQ => {
            WQ || (QQ = XQ())
          })).catch((QQ => {
            console.error("Pad gameplay failed to load", QQ), WQ || zQ(!0)
          })), () => {
            var XQ;
            WQ = !0, null === (XQ = QQ) || void 0 === XQ || XQ()
          }
        }), [wQ]), (0, uQ.useEffect)((() => {
          TQ && WQ && (zQ(!1), jq.NotificationProvider.showPromptPopup({
            title: "controller:gameplayLoadFailedTitle",
            subtitle: "controller:gameplayLoadFailedSubtitle",
            confirmText: "settingsMenu:reloadPagePopupConfirm",
            confirmTooltip: "",
            cancelText: "general:cancel",
            cancelTooltip: ""
          }).getResult().then((QQ => {
            !0 === QQ && (0, Bq.reloadBloxd)()
          })))
        }), [TQ, WQ]), (0, fQ.jsxs)(fQ.Fragment, {
          children: [(0, fQ.jsx)(Eq, {}), (0, fQ.jsx)(Cq, {}), (0, fQ.jsx)(uq, {})]
        })
      },
      Eq = () => {
        const {
          t: QQ
        } = (0, qQ.C)(), WQ = (0, IQ.w)(), {
          gameState: XQ,
          isUiHidden: wQ
        } = (0, FQ.n)(["gameState", "isUiHidden"]), {
          hideButtonHints: TQ
        } = (0, rQ.m)(), zQ = (0, aq.l)(), sQ = (0, aq.n)(), [PQ, JQ] = (0, uQ.useState)(cq.c);
        return (0, Vq.f)(Aq.o, JQ), !WQ || TQ || wQ || "inGame" !== XQ || !zQ && !PQ ? null : (0, fQ.jsxs)("div", {
          className: "PadActionHint SmallTextBold",
          children: [zQ && (0, fQ.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, fQ.jsx)(vq, {
              glyph: (0, gQ.g)("actionButton")
            }), (0, fQ.jsx)(Hq, {
              action: zQ
            }), sQ && (0, fQ.jsx)("span", {
              className: "PadActionHintMore",
              children: QQ("controller:gameplayActionWheelHint")
            })]
          }), PQ && (0, fQ.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, fQ.jsx)(vq, {
              glyph: (0, gQ.g)("pickBlock")
            }), (0, fQ.jsx)("span", {
              children: QQ("controller:gameplayPickBlock")
            })]
          })]
        })
      },
      Cq = () => {
        const {
          t: QQ
        } = (0, qQ.C)(), WQ = (0, IQ.w)(), {
          gameState: XQ,
          isUiHidden: wQ
        } = (0, FQ.n)(["gameState", "isUiHidden"]), [TQ, zQ] = (0, uQ.useState)(hq.e);
        return (0, Vq.f)(Aq.l, zQ), WQ && !wQ && "inGame" === XQ && TQ ? (0, fQ.jsxs)("div", {
          className: "PadDropStackFill SmallTextBold",
          children: [(0, fQ.jsx)("span", {
            children: QQ("controller:gameplayDropStack")
          }), (0, fQ.jsx)(lq, {
            hold: TQ
          })]
        }) : null
      },
      uq = () => {
        const {
          t: QQ
        } = (0, qQ.C)(), WQ = (0, IQ.w)(), {
          gameState: XQ,
          isUiHidden: wQ
        } = (0, FQ.n)(["gameState", "isUiHidden"]), {
          hideButtonHints: TQ
        } = (0, rQ.m)(), [zQ, sQ] = (0, uQ.useState)(iq.c);
        return (0, Vq.f)(Aq.j, sQ), WQ && !wQ && "inGame" === XQ && zQ ? (0, fQ.jsxs)("div", {
          className: "PadAttackLatchedHint SmallTextBold",
          children: [!TQ && (0, fQ.jsx)(vq, {
            glyph: (0, gQ.g)("attack")
          }), (0, fQ.jsx)("span", {
            children: QQ("controller:gameplayAttackLatched")
          })]
        }) : null
      };
    var Lq = XQ(9145),
      kq = XQ(2036),
      fq = XQ(2535),
      Sq = XQ(8590);
    const tq = QQ => QQ && !(0, Lq.b)(kq.e.get("shopInfo")),
      oq = () => {
        const QQ = "inGame" === (0, FQ.n)(["gameState"]).gameState;
        return (0, fq.d)("shopInfo", (() => {
          (0, Sq.l)(tq(QQ))
        })), (0, uQ.useEffect)((() => {
          (0, Sq.l)(tq(QQ))
        }), [QQ]), null
      },
      eq = () => {
        const {
          t: QQ
        } = (0, qQ.C)(), {
          hideButtonHints: WQ
        } = (0, rQ.m)();
        (0, IQ.x)();
        const XQ = (0, kW.l)();
        return (0, uQ.useEffect)((() => (() => {
          const QQ = JQ.b.register({
              name: "inventory",
              isActive: qX.isActive,
              onFrame: qX.onFrame,
              onDeactivate: qX.onDeactivate,
              wakePressActs: qX.wakePressActs
            }),
            WQ = QQ => {
              qX.noteRealPointer(QQ), qX.shouldBlockRealPointer(QQ) && QQ.stopPropagation()
            };
          for (const zQ of TX) window.addEventListener(zQ, WQ, !0);
          const XQ = (0, KQ.i)((() => {
              "inventory" !== JQ.b.getActiveConsumerName() && qX.forgetSurface()
            })),
            wQ = QQ => {
              const WQ = QQ.target;
              (0, IQ.i)() && (0, NQ.h)(WQ) && WQ.closest(UW) && (0, KQ.g)() && (0, KQ.n)(WQ)
            };
          document.addEventListener("focusout", wQ, !0);
          const {
            invalidate: qQ,
            onScroll: TQ
          } = qX.targets;
          return document.addEventListener("scroll", TQ, !0), window.addEventListener("resize", qQ), () => {
            QQ(), XQ();
            for (const QQ of TX) window.removeEventListener(QQ, WQ, !0);
            document.removeEventListener("scroll", TQ, !0), document.removeEventListener("focusout", wQ, !0), window.removeEventListener("resize", qQ), qX.targets.disconnect()
          }
        })()), []), (0, fQ.jsxs)(fQ.Fragment, {
          children: [(0, fQ.jsx)(eQ, {
            placer: qX.ring,
            className: "InventorySlotCursorRing"
          }), XQ.showing && !WQ && (0, fQ.jsx)("div", {
            className: "InventorySlotCursorHints SmallTextBold",
            children: OQ(XQ).map((WQ => {
              let {
                actions: wQ,
                labelKey: qQ
              } = WQ;
              return (0, fQ.jsxs)("div", {
                className: "InventorySlotCursorHint",
                children: [wQ.map((QQ => (0, fQ.jsx)(vq, {
                  glyph: (0, gQ.g)(QQ)
                }, QQ))), (0, fQ.jsx)("span", {
                  children: QQ(`controller:${qQ}`)
                }), "inventoryDrop" === qQ && XQ.dropStackHold && (0, fQ.jsx)(lq, {
                  hold: XQ.dropStackHold
                })]
              }, qQ)
            }))
          })]
        })
      },
      nq = [{
        command: "close",
        action: "keyboardClose",
        repeats: !1
      }, {
        command: "submit",
        action: "keyboardSubmit",
        repeats: !1
      }, {
        command: "backspace",
        action: "keyboardBackspace",
        repeats: !0
      }, {
        command: "space",
        action: "keyboardSpace",
        repeats: !1
      }, {
        command: "caretLeft",
        action: "keyboardCaretLeft",
        repeats: !0
      }, {
        command: "caretRight",
        action: "keyboardCaretRight",
        repeats: !0
      }, {
        command: "shift",
        action: "keyboardShift",
        repeats: !1
      }, {
        command: "page",
        action: "keyboardSymbols",
        repeats: !1
      }, {
        command: "channel",
        action: "keyboardChannel",
        repeats: !1
      }],
      xq = QQ => Array.from(QQ).map((QQ => ({
        type: "char",
        char: QQ,
        width: 1
      }))),
      Yq = function(QQ) {
        return {
          type: "command",
          command: QQ,
          width: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
        }
      },
      Nq = [Yq("page", 2), Yq("otherPage"), Yq("caretLeft"), Yq("space", 3), Yq("caretRight"), Yq("close", 1.5), Yq("submit", 1.5)],
      Zq = [Yq("page", 2), Yq("otherPage"), Yq("caretLeft"), Yq("space", 2), Yq("caretRight"), Yq("newline"), Yq("close", 1.5), Yq("submit", 1.5)],
      Oq = [
        [...xq("1234567890"), Yq("backspace")], xq("qwertyuiop/"), xq("asdfghjkl'?"), [Yq("shift", 2), ...xq("zxcvbnm,.")]
      ],
      Kq = [
        [...xq("1234567890"), Yq("backspace")], xq("!@#$%^&*()/"), xq('-_=+[]{};:"'), xq("~`|\\<>'\u20ac\xa3,.")
      ],
      mq = {
        letters: Oq,
        accents: [
          [...xq("1234567890"), Yq("backspace")], xq("\xe1\xe9\xed\xf3\xfa\xe0\xe8\xec\xf2\xf9\xf1"), xq("\xe2\xea\xee\xf4\xfb\xe4\xeb\xef\xf6\xfc\xe7"), [Yq("shift", 2), ...xq("\xe3\xf5\xdf\u0153\u011f\u015f\u0131\xbf\xa1")]
        ],
        symbols: Kq
      },
      Mq = new Set(["de", "es", "fr", "it", "nl", "pt", "pt-BR", "tr", "vi"]),
      QT = (QQ, WQ) => "letters" === QQ ? WQ ? {
        page: "accents",
        otherPage: "symbols"
      } : {
        page: "symbols",
        otherPage: "accents"
      } : {
        page: "letters",
        otherPage: "accents" === QQ ? "symbols" : "accents"
      },
      WT = function(QQ, WQ) {
        const XQ = ((QQ, WQ) => [...mq[QQ], WQ ? Zq : Nq])(QQ, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]);
        if (0 === WQ) return XQ;
        const wQ = Math.min(2, XT(XQ[0]) / WQ);
        return [Array.from({
          length: WQ
        }, ((QQ, WQ) => ({
          type: "phrase",
          phraseIndex: WQ,
          width: wQ
        }))), ...XQ]
      },
      XT = QQ => QQ.reduce(((QQ, WQ) => QQ + WQ.width), 0),
      wT = QQ => Math.max(...QQ.map(XT)),
      qT = (QQ, WQ) => {
        const XQ = QQ[WQ.row];
        let wQ = (wT(QQ) - XT(XQ)) / 2;
        for (let qQ = 0; qQ < WQ.col; qQ++) wQ += XQ[qQ].width;
        return wQ + XQ[WQ.col].width / 2
      },
      TT = (QQ, WQ, XQ) => {
        let wQ = 0,
          qQ = 1 / 0;
        for (let TQ = 0; TQ < QQ[WQ].length; TQ++) {
          const zQ = Math.abs(qT(QQ, {
            row: WQ,
            col: TQ
          }) - XQ);
          zQ < qQ - 1e-9 && (wQ = TQ, qQ = zQ)
        }
        return wQ
      },
      zT = (QQ, WQ) => {
        const XQ = Math.max(0, Math.min(QQ.length - 1, WQ.row));
        return {
          row: XQ,
          col: Math.max(0, Math.min(QQ[XQ].length - 1, WQ.col))
        }
      },
      sT = (QQ, WQ, XQ) => "once" === QQ && WQ - XQ <= 400 ? "caps" : "off" === QQ ? "once" : "off",
      FT = (QQ, WQ) => "once" === QQ && (QQ => QQ.toLowerCase() !== QQ.toUpperCase())(WQ) ? "off" : QQ,
      PT = (QQ, WQ, XQ) => {
        if ("symbols" === WQ || "off" === XQ) return QQ;
        const wQ = QQ.toUpperCase();
        return 1 === wQ.length ? wQ : QQ
      };
    var gT = XQ(9037);
    const JT = ["controller:keyboardPhraseGg", "controller:keyboardPhraseHi", "controller:keyboardPhraseThanks", "controller:keyboardPhraseGl", "controller:keyboardPhraseBrb", "controller:keyboardPhraseYes", "controller:keyboardPhraseNo", "controller:keyboardPhraseHelp"];
    const rT = new class {
        constructor() {
          this.lastSendMs = -1 / 0
        }
        claim(QQ) {
          return !(QQ - this.lastSendMs < 2e3) && (this.lastSendMs = QQ, !0)
        }
      },
      IT = {
        visible: !1,
        target: null,
        kind: null,
        page: "letters",
        accentsFirst: !1,
        shift: "off",
        focus: {
          row: 0,
          col: 0
        },
        preferredX: 0,
        placement: "bottom",
        maxHeightPx: 0
      },
      jT = ["fz", "nameTag"],
      BT = QQ => {
        const WQ = QQ.target instanceof HTMLTextAreaElement && !jT.includes(QQ.kind);
        return WT(QQ.page, "chat" === QQ.kind ? JT.length : 0, WQ)
      },
      yT = QQ => {
        const WQ = QQ.getBoundingClientRect(),
          XQ = window.innerHeight,
          wQ = WQ.top + WQ.height / 2 < XQ / 2 ? "bottom" : "top",
          qQ = "bottom" === wQ ? XQ - WQ.bottom - 6 : WQ.top - 6;
        return {
          placement: wQ,
          maxHeightPx: Math.min(.46 * XQ, Math.max(.3 * XQ, qQ))
        }
      },
      VT = QQ => {
        (0, lX.j)(QQ) ? (0, lX.d)().close(): (Qq.noteChosenStop(QQ), QQ.blur())
      };
    class DT {
      constructor(QQ) {
        this.host = QQ, this.lastShiftPressMs = -1 / 0, this.phraseTexts = [], this.phrasesFill = !1
      }
      setPhraseRow(QQ, WQ) {
        this.phraseTexts = QQ, this.phrasesFill = WQ
      }
      pressKey(QQ) {
        const WQ = this.host.getState(),
          XQ = BT(WQ),
          wQ = XQ[QQ.row][QQ.col];
        this.host.setState({
          ...WQ,
          focus: QQ,
          preferredX: qT(XQ, QQ)
        }), "char" === wQ.type ? this.typeChar(wQ.char) : "command" === wQ.type ? this.runCommand(wQ.command) : this.sendPhrase(wQ.phraseIndex)
      }
      runCommand(QQ) {
        const WQ = this.host.getState();
        switch (QQ) {
          case "backspace":
            (0, NQ.b)(WQ.target);
            break;
          case "space":
            (0, NQ.f)(WQ.target, " ");
            break;
          case "newline":
            (0, NQ.f)(WQ.target, "\n");
            break;
          case "caretLeft":
            (0, NQ.j)(WQ.target, -1);
            break;
          case "caretRight":
            (0, NQ.j)(WQ.target, 1);
            break;
          case "shift": {
            const QQ = performance.now();
            this.host.setState({
              ...WQ,
              shift: sT(WQ.shift, QQ, this.lastShiftPressMs)
            }), this.lastShiftPressMs = QQ;
            break
          }
          case "page":
          case "otherPage": {
            const XQ = QT(WQ.page, WQ.accentsFirst)[QQ];
            this.host.setState({
              ...WQ,
              page: XQ,
              focus: zT(BT({
                ...WQ,
                page: XQ
              }), WQ.focus)
            });
            break
          }
          case "submit":
            this.submit();
            break;
          case "close":
            this.close();
            break;
          case "channel":
            (0, lX.j)(WQ.target) && (0, lX.d)().selectNextChannel()
        }
      }
      submit() {
        var QQ, WQ;
        const {
          target: XQ
        } = this.host.getState();
        this.host.hide(), (0, lX.j)(XQ) ? (0, lX.d)().submit() : (Qq.noteChosenStop(XQ), null === (QQ = (WQ = (0, lX.f)(XQ)).submit) || void 0 === QQ || QQ.call(WQ), document.activeElement === XQ && XQ.blur())
      }
      close() {
        const {
          target: QQ
        } = this.host.getState();
        this.host.hide(), VT(QQ)
      }
      typeChar(QQ) {
        const {
          target: WQ,
          page: XQ,
          shift: wQ
        } = this.host.getState();
        (0, NQ.f)(WQ, PT(QQ, XQ, wQ)), this.host.setState({
          ...this.host.getState(),
          shift: FT(wQ, QQ)
        })
      }
      sendPhrase(QQ) {
        if (this.phrasesFill) {
          const {
            target: WQ
          } = this.host.getState(), XQ = this.phraseTexts[QQ];
          XQ && (WQ.setSelectionRange(0, WQ.value.length), (0, NQ.f)(WQ, XQ))
        } else rT.claim(performance.now()) && (this.host.hide(), (0, lX.d)().sendLine(this.phraseTexts[QQ]))
      }
    }
    var pT = XQ(9056);
    const GT = {
        initialDelayMs: 380,
        intervalMs: 85
      },
      UT = {
        initialDelayMs: 400,
        intervalMs: 55
      };
    class bT {
      constructor(QQ, WQ) {
        this.host = QQ, this.editor = WQ, this.lastDirection = null, this.navRepeat = new jQ.d((0, BQ.d)(GT)), this.commandRepeats = new Map(nq.filter((QQ => {
          let {
            repeats: WQ
          } = QQ;
          return WQ
        })).map((QQ => {
          let {
            command: WQ
          } = QQ;
          return [WQ, (0, BQ.d)(UT)]
        })))
      }
      reset() {
        this.navRepeat.reset();
        for (const QQ of this.commandRepeats.values()) QQ.reset()
      }
      onVisibleFrame(QQ) {
        const WQ = performance.now();
        for (const {
            command: qQ,
            action: TQ
          }
          of nq) {
          const XQ = (0, gQ.g)(TQ),
            wQ = this.commandRepeats.get(qQ);
          if ((wQ ? wQ.update(QQ.isHeld(XQ), WQ) : QQ.wasPressed(XQ)) && (this.editor.runCommand(qQ), !this.host.getState().visible)) return
        }
        if (QQ.wasPressed((0, gQ.g)("keyboardType")) && (this.editor.pressKey(this.host.getState().focus), !this.host.getState().visible)) return;
        const XQ = this.readNavDirection(QQ);
        this.lastDirection = XQ;
        const wQ = this.navRepeat.update(XQ, WQ);
        wQ && this.navigate(wQ)
      }
      onHiddenFrame(QQ, WQ) {
        var XQ;
        if (QQ.wasPressed((0, gQ.g)("keyboardClose"))) return void VT(WQ);
        const wQ = (0, gQ.g)("keyboardType");
        if (QQ.wasPressed(wQ)) return JQ.b.consumeButton(wQ), void this.host.open(WQ);
        const qQ = this.readNavDirection(QQ),
          TQ = null !== qQ && qQ !== this.lastDirection;
        if (this.lastDirection = qQ, !TQ || (0, lX.j)(WQ)) return;
        const zQ = (null === (XQ = gw()) || void 0 === XQ ? void 0 : XQ.root.contains(WQ)) || null !== WQ.closest(".EntireInventoryWrapper");
        VT(WQ), zQ && JQ.b.handOffHeldInput()
      }
      navigate(QQ) {
        const WQ = this.host.getState();
        if ("Up" === QQ && 0 === WQ.focus.row && "chat" === WQ.kind) return (0, lX.d)().stepHistory(), void this.host.setState({
          ...WQ
        });
        const XQ = ((QQ, WQ, XQ, wQ) => {
          if ("Left" === XQ || "Right" === XQ) {
            const wQ = QQ[WQ.row].length,
              qQ = (WQ.col + ("Right" === XQ ? 1 : -1) + wQ) % wQ,
              TQ = {
                row: WQ.row,
                col: qQ
              };
            return {
              pos: TQ,
              preferredX: qT(QQ, TQ)
            }
          }
          const qQ = (WQ.row + ("Down" === XQ ? 1 : -1) + QQ.length) % QQ.length;
          return {
            pos: {
              row: qQ,
              col: TT(QQ, qQ, wQ)
            },
            preferredX: wQ
          }
        })(BT(WQ), WQ.focus, QQ, WQ.preferredX);
        this.host.setState({
          ...WQ,
          focus: XQ.pos,
          preferredX: XQ.preferredX
        })
      }
      readNavDirection(QQ) {
        for (const WQ of jQ.D)
          if (QQ.isHeld(WQ)) return WQ;
        return (0, jQ.ib)((0, jQ.p)(QQ.leftStick, (0, rQ.g)().moveDeadzone))
      }
    }
    const vT = ["Up", "Down", "Left", "Right"],
      dT = new Set(["CapsLock", "Control", "Fn", "FnLock", "Hyper", "NumLock", "ScrollLock", "Shift", "Super"]);
    const HT = new class {
      constructor() {
        this.state = IT, this.listeners = new Set, this.ownedField = null, this.pendingChatInput = null, this.pendingChatTimeout = 0, this.savedInputMode = null, this.editor = new DT(this), this.padInput = new bT(this, this.editor)
      }
      getState() {
        return this.state
      }
      setState(QQ) {
        const WQ = QQ.visible !== this.state.visible;
        this.state = QQ;
        for (const XQ of this.listeners) XQ();
        WQ && PQ.k.mB(pT.b, QQ.visible)
      }
      subscribe(QQ) {
        return this.listeners.add(QQ), () => {
          this.listeners.delete(QQ)
        }
      }
      install() {
        const QQ = JQ.b.register({
            name: "keyboard",
            isActive: () => this.state.visible || (0, NQ.h)(document.activeElement),
            onFrame: QQ => {
              this.onFrame(QQ)
            },
            onDeactivate: () => {
              this.padInput.reset()
            },
            wakePressActs: QQ => vT.includes(QQ) || !this.state.visible && QQ === (0, gQ.g)("keyboardType")
          }),
          WQ = QQ => {
            const WQ = QQ.target;
            (0, NQ.h)(WQ) && (WQ === this.pendingChatInput || (0, IQ.i)() ? this.open(WQ) : this.state.visible && WQ !== this.state.target && (this.ownedField = null, this.hide()))
          },
          XQ = () => {
            setTimeout((() => {
              this.releaseLostField()
            }), 0)
          },
          wQ = QQ => {
            QQ.isTrusted && this.state.visible && (QQ => !QQ.repeat && !dT.has(QQ.key) && !(0, gT.c)(QQ.key) && !/^(Audio|Media|Browser|Launch|Gamepad)/.test(QQ.key))(QQ) && this.hide()
          },
          qQ = () => {
            this.state.visible && this.setState({
              ...this.state,
              ...yT(this.state.target)
            })
          };
        document.addEventListener("focusin", WQ, !0), document.addEventListener("focusout", XQ, !0), window.addEventListener("keydown", wQ, !0), window.addEventListener("resize", qQ);
        const TQ = PQ.k.subscribe(Aq.c, (() => {
            this.openChat()
          })),
          zQ = PQ.k.subscribe(pT.f, (QQ => {
            this.openForField(QQ)
          }));
        return () => {
          QQ(), document.removeEventListener("focusin", WQ, !0), document.removeEventListener("focusout", XQ, !0), window.removeEventListener("keydown", wQ, !0), window.removeEventListener("resize", qQ), PQ.k.unsubscribe(TQ), PQ.k.unsubscribe(zQ), this.clearPendingChat(), this.hide(), this.ownedField = null
        }
      }
      openChat() {
        const QQ = (0, lX.d)();
        QQ ? document.activeElement !== QQ.input ? (this.clearPendingChat(), this.pendingChatInput = QQ.input, this.pendingChatTimeout = window.setTimeout((() => {
          this.pendingChatInput = null
        }), 250), QQ.open()) : this.open(QQ.input) : console.warn("controllerOpenChat with no chat mounted")
      }
      openForField(QQ) {
        (0, NQ.h)(QQ) ? (document.activeElement !== QQ && QQ.focus(), document.activeElement === QQ && this.open(QQ)) : console.warn("controllerOpenKeyboard needs an editable input or textarea", QQ)
      }
      open(QQ) {
        var WQ;
        if (this.clearPendingChat(), this.ownedField = QQ, this.state.visible && this.state.target === QQ) return;
        this.restoreInputMode(), (0, NQ.m)(QQ), this.savedInputMode = QQ.getAttribute("inputmode"), QQ.setAttribute("inputmode", "none");
        const XQ = {
          ...IT,
          visible: !0,
          target: QQ,
          kind: (0, lX.j)(QQ) ? "chat" : null !== (WQ = (0, lX.f)(QQ).kind) && void 0 !== WQ ? WQ : null,
          accentsFirst: (wQ = Dq.h.get().getCurrentLanguageCode(), Mq.has(wQ)),
          ...yT(QQ)
        };
        var wQ;
        const qQ = BT(XQ),
          TQ = ((QQ, WQ) => {
            for (let XQ = 0; XQ < QQ.length; XQ++) {
              const wQ = QQ[XQ].findIndex((QQ => "char" === QQ.type && QQ.char === WQ));
              if (-1 !== wQ) return {
                row: XQ,
                col: wQ
              }
            }
            return null
          })(qQ, "q");
        this.padInput.reset(), this.setState({
          ...XQ,
          focus: TQ,
          preferredX: qT(qQ, TQ)
        })
      }
      hide() {
        this.state.visible && (this.restoreInputMode(), this.padInput.reset(), this.setState(IT))
      }
      onFrame(QQ) {
        if (this.releaseLostField()) return;
        const WQ = document.activeElement;
        this.state.visible ? this.padInput.onVisibleFrame(QQ) : (0, NQ.h)(WQ) && this.padInput.onHiddenFrame(QQ, WQ)
      }
      releaseLostField() {
        const QQ = this.ownedField;
        return !(null === QQ || QQ.isConnected && document.activeElement === QQ) && (this.ownedField = null, this.hide(), !0)
      }
      clearPendingChat() {
        window.clearTimeout(this.pendingChatTimeout), this.pendingChatInput = null
      }
      restoreInputMode() {
        const {
          target: QQ
        } = this.state;
        QQ && (null === this.savedInputMode ? QQ.removeAttribute("inputmode") : QQ.setAttribute("inputmode", this.savedInputMode), this.savedInputMode = null)
      }
    };
    var aT = XQ(2943);
    const lT = new Map(nq.map((QQ => {
        let {
          command: WQ,
          action: XQ
        } = QQ;
        return [WQ, XQ]
      }))),
      hT = {
        letters: "ABC",
        accents: "\xe0\xe9",
        symbols: "&123"
      },
      iT = {
        chat: "controller:keyboardTargetChat",
        sign: "controller:keyboardTargetSign",
        nameTag: "controller:keyboardTargetNameTag",
        book: "controller:keyboardTargetBook",
        fz: "controller:keyboardTargetBookTitle"
      },
      cT = QQ => {
        const WQ = (() => {
          const [, QQ] = (0, uQ.useReducer)((QQ => QQ + 1), 0);
          return QQ
        })();
        (0, uQ.useEffect)((() => {
          if (!QQ) return;
          const XQ = ["input", "select", "selectionchange", "keyup", "pointerup"];
          for (const qQ of XQ) QQ.addEventListener(qQ, WQ);
          document.addEventListener("selectionchange", WQ);
          const wQ = new MutationObserver(WQ);
          return wQ.observe(QQ, {
            attributeFilter: ["placeholder"]
          }), () => {
            wQ.disconnect();
            for (const wQ of XQ) QQ.removeEventListener(wQ, WQ);
            document.removeEventListener("selectionchange", WQ)
          }
        }), [QQ, WQ])
      },
      AT = QQ => {
        QQ.preventDefault()
      },
      RT = QQ => {
        "mouse" !== QQ.pointerType && QQ.preventDefault()
      },
      ET = () => {
        var QQ;
        const {
          t: WQ
        } = (0, qQ.C)(), XQ = (() => {
          const [QQ, WQ] = (0, uQ.useState)(HT.getState());
          return (0, uQ.useEffect)((() => HT.subscribe((() => {
            WQ(HT.getState())
          }))), []), QQ
        })(), wQ = (0, IQ.w)(), TQ = (0, uQ.useRef)(null);
        (0, rQ.m)(), (0, IQ.x)(), (0, uQ.useEffect)((() => {
          const QQ = HT.install(),
            WQ = null;
          return () => {
            QQ(), null === WQ || void 0 === WQ || WQ()
          }
        }), []);
        const zQ = (0, uQ.useMemo)((() => JT.map((QQ => WQ(QQ)))), [WQ]),
          sQ = XQ.visible && "chat" === XQ.kind ? XQ.target : null;
        cT(sQ);
        const FQ = null !== (QQ = null === sQ || void 0 === sQ ? void 0 : sQ.value) && void 0 !== QQ ? QQ : "",
          PQ = ((QQ, WQ, XQ) => {
            if (!QQ.startsWith("/")) return [];
            const wQ = [];
            for (let qQ = WQ.length - 1; qQ >= 0 && wQ.length < XQ; qQ--) {
              const XQ = WQ[qQ].trim();
              XQ.startsWith(QQ) && XQ !== QQ && !wQ.includes(XQ) && wQ.push(XQ)
            }
            return wQ
          })(FQ, FQ.startsWith("/") ? (0, aT.f)() : [], JT.length),
          JQ = FQ.startsWith("/"),
          jQ = JQ ? JT.map(((QQ, WQ) => {
            var XQ;
            return null !== (XQ = PQ[WQ]) && void 0 !== XQ ? XQ : ""
          })) : zQ;
        if ((0, uQ.useEffect)((() => {
            HT.editor.setPhraseRow(jQ, JQ)
          })), (0, uQ.useEffect)((() => {
            const QQ = TQ.current;
            if (QQ) return QQ.addEventListener("touchstart", AT, {
              passive: !1
            }), () => {
              QQ.removeEventListener("touchstart", AT)
            }
          }), [XQ.visible]), !XQ.visible) return null;
        const BQ = BT(XQ),
          yQ = wT(BQ),
          VQ = QQ => "char" === QQ.type ? PT(QQ.char, XQ.page, XQ.shift) : "phrase" === QQ.type ? jQ[QQ.phraseIndex] : (QQ => {
            switch (QQ) {
              case "backspace":
                return "\u232b";
              case "shift":
                return "caps" === XQ.shift ? "\u21ea" : "\u21e7";
              case "page":
              case "otherPage":
                return hT[QT(XQ.page, XQ.accentsFirst)[QQ]];
              case "space":
                return WQ("controller:keyboardSpace");
              case "caretLeft":
                return "\u2190";
              case "caretRight":
                return "\u2192";
              case "newline":
                return "\u21b5";
              case "submit":
                return WQ("chat" === XQ.kind ? "controller:keyboardSend" : "controller:keyboardDone");
              case "close":
                return "\u2715";
              case "channel":
                return "\u21c4"
            }
          })(QQ.command),
          DQ = QQ => {
            HT.editor.pressKey(QQ)
          };
        return (0, fQ.jsxs)("div", {
          ref: TQ,
          className: kQ()(lX.p, "top" === XQ.placement ? "PadKeyboardTop" : "PadKeyboardBottom", {
            PadKeyboardMultiline: XQ.target instanceof HTMLTextAreaElement
          }),
          style: {
            "--pad-keyboard-rows": BQ.length,
            "--pad-keyboard-height": `${XQ.maxHeightPx}px`
          },
          onPointerDown: RT,
          onMouseDown: AT,
          children: [(0, fQ.jsx)(CT, {
            target: XQ.target,
            label: XQ.kind ? WQ(iT[XQ.kind]) : XQ.target.placeholder || WQ("controller:keyboardTargetText")
          }), (0, fQ.jsx)("div", {
            className: "PadKeyboardRows",
            children: BQ.map(((QQ, WQ) => (0, fQ.jsx)("div", {
              className: kQ()("PadKeyboardRow", {
                PadKeyboardPhraseRow: "phrase" === QQ[0].type
              }),
              children: QQ.map(((QQ, qQ) => {
                const TQ = wQ && XQ.focus.row === WQ && XQ.focus.col === qQ,
                  zQ = "command" === QQ.type ? lT.get(QQ.command) : void 0;
                return (0, fQ.jsx)("div", {
                  className: "PadKeyboardKeySlot",
                  style: {
                    width: QQ.width / yQ * 100 + "%"
                  },
                  children: (0, fQ.jsxs)("div", {
                    className: kQ()("PadKeyboardKey", {
                      PadKeyboardKeyFocused: TQ,
                      PadKeyboardKeyCommand: "command" === QQ.type,
                      PadKeyboardKeyPhrase: "phrase" === QQ.type,
                      PadKeyboardKeyActive: "command" === QQ.type && "shift" === QQ.command && "off" !== XQ.shift,
                      PadKeyboardKeySubmit: "command" === QQ.type && "submit" === QQ.command
                    }),
                    role: "button",
                    onClick: () => {
                      DQ({
                        row: WQ,
                        col: qQ
                      })
                    },
                    onTouchEnd: QQ => {
                      var XQ, wQ;
                      QQ.preventDefault(), XQ = QQ.changedTouches[0], wQ = QQ.currentTarget.getBoundingClientRect(), XQ && XQ.clientX >= wQ.left && XQ.clientX <= wQ.right && XQ.clientY >= wQ.top && XQ.clientY <= wQ.bottom && DQ({
                        row: WQ,
                        col: qQ
                      })
                    },
                    children: [(0, fQ.jsx)("span", {
                      className: "PadKeyboardKeyLabel",
                      children: VQ(QQ)
                    }), wQ && zQ && (0, fQ.jsx)(vq, {
                      className: "PadKeyboardKeyGlyph",
                      glyph: (0, gQ.g)(zQ)
                    })]
                  })
                }, qQ)
              }))
            }, WQ)))
          })]
        })
      },
      CT = QQ => {
        let {
          target: WQ,
          label: XQ
        } = QQ;
        cT(WQ);
        const wQ = (0, uQ.useRef)(null),
          qQ = (0, uQ.useRef)(null),
          TQ = WQ instanceof HTMLTextAreaElement;
        (0, uQ.useLayoutEffect)((() => {
          const QQ = wQ.current,
            WQ = qQ.current;
          TQ ? QQ.scrollTop = WQ.offsetTop - QQ.clientHeight / 2 : QQ.scrollLeft = WQ.offsetLeft - QQ.clientWidth / 2
        }));
        const {
          value: zQ,
          start: sQ,
          end: FQ
        } = (0, NQ.p)(WQ), PQ = "password" === WQ.type ? "\u2022".repeat(zQ.length) : zQ;
        return (0, fQ.jsxs)("div", {
          className: "PadKeyboardPreview",
          children: [(0, fQ.jsx)("div", {
            className: "PadKeyboardPreviewLabel SmallTextBold",
            children: XQ
          }), (0, fQ.jsxs)("div", {
            ref: wQ,
            className: kQ()("PadKeyboardPreviewText", {
              PadKeyboardPreviewMultiline: TQ
            }),
            children: [(0, fQ.jsx)("span", {
              children: PQ.slice(0, sQ)
            }), (0, fQ.jsx)("span", {
              ref: qQ,
              className: "PadKeyboardCaret"
            }), sQ !== FQ && (0, fQ.jsx)("span", {
              className: "PadKeyboardPreviewSelection",
              children: PQ.slice(sQ, FQ)
            }), (0, fQ.jsx)("span", {
              children: PQ.slice(FQ)
            }), 0 === PQ.length && WQ.placeholder && WQ.placeholder !== XQ && (0, fQ.jsx)("span", {
              className: "PadKeyboardPreviewPlaceholder",
              children: WQ.placeholder
            })]
          })]
        })
      };
    var uT = XQ(1454),
      LT = XQ(3688);
    const kT = function() {
        for (var QQ = arguments.length, WQ = new Array(QQ), XQ = 0; XQ < QQ; XQ++) WQ[XQ] = arguments[XQ];
        return WQ.map(gQ.g)
      },
      fT = (QQ, WQ) => {
        const XQ = nX(QQ);
        return XQ ? [{
          glyphs: [XQ],
          labelKey: WQ
        }] : []
      },
      ST = [".BottomMiddleElements", ".BottomLeftElements > *", ".BottomRightElements > *", ".MiddleTextBottom .MiddleText"],
      tT = "--pad-hint-bar-clearance",
      oT = "[data-pad-hint-bar-avoid]",
      eT = QQ => {
        const WQ = [];
        for (const XQ of QQ)(0, mQ.u)(XQ) && WQ.push(XQ.getBoundingClientRect());
        return WQ
      },
      nT = QQ => {
        if (!QQ) return null;
        const WQ = gw(),
          XQ = WQ ? eT(((QQ, WQ) => {
            const XQ = QQ.closest(oT);
            return XQ ? [XQ] : ("popup" === WQ ? document : QQ).querySelectorAll(oT)
          })(WQ.root, WQ.layer.kind)) : [],
          wQ = !WQ || WQ.root.hasAttribute("data-pad-shows-hud");
        if (((0, LT.i)(null === WQ || void 0 === WQ ? void 0 : WQ.layer.kind, (0, LT.l)()) || wQ) && XQ.push(...eT(document.querySelectorAll(ST.join(",")))), 0 === XQ.length) return null;
        const {
          width: qQ,
          height: TQ
        } = QQ.getBoundingClientRect(), zQ = window.innerHeight - 8, sQ = (0, LT.p)(zQ, {
          width: qQ,
          height: TQ
        }, window.innerWidth / 2, XQ, 8);
        return sQ === zQ ? null : Math.round(window.innerHeight - sQ)
      },
      xT = QQ => {
        const WQ = document.documentElement.style,
          XQ = QQ ? `${Math.round(window.innerHeight-QQ.getBoundingClientRect().top)}px` : "";
        WQ.getPropertyValue(tT) !== XQ && (XQ ? WQ.setProperty(tT, XQ) : WQ.removeProperty(tT))
      },
      YT = () => {
        const {
          t: QQ
        } = (0, qQ.C)(), {
          hideButtonHints: WQ
        } = (0, rQ.m)(), XQ = (0, IQ.w)(), [wQ, TQ] = (0, uQ.useState)(!1), [zQ, PQ] = (0, uQ.useState)([]), [BQ, yQ] = (0, uQ.useState)(null), VQ = (0, uQ.useRef)(null), DQ = (0, uQ.useRef)(null);
        (0, Vq.f)(pT.b, (QQ => {
          TQ(QQ)
        })), (0, Vq.f)(LT.o, (() => {
          var QQ;
          null === (QQ = DQ.current) || void 0 === QQ || QQ.call(DQ)
        }));
        const pQ = XQ && !WQ && !wQ;
        return (0, uQ.useEffect)((() => {
          if (!pQ) return;
          let QQ = null;
          const WQ = () => {
            const WQ = (() => {
                var QQ;
                const WQ = JQ.b.getActiveConsumerName(),
                  XQ = (0, LT.g)();
                if (XQ) {
                  const QQ = (0, gQ.g)(XQ),
                    WQ = "emoteWheel" === XQ && "wheel" === (0, rQ.g)().emoteButton || !(0, jQ.O)(JQ.b.getLastFrame().values, QQ) ? {
                      glyphs: kT("menuConfirm"),
                      labelKey: "controller:menusSelect"
                    } : {
                      glyphs: [QQ],
                      labelKey: "controller:wheelReleaseToPick"
                    };
                  return [{
                    glyphs: [(0, gQ.r)(QQ)],
                    labelKey: "controller:wheelChoose"
                  }, WQ, {
                    glyphs: kT("menuBack"),
                    labelKey: "controller:wheelClose"
                  }]
                }
                const wQ = gw();
                if (!wQ || "focus" !== WQ && "cursor" !== WQ) return (0, LT.e)(gQ.g);
                const qQ = [],
                  TQ = {
                    glyphs: kT("menuBack"),
                    labelKey: "controller:menusBack"
                  },
                  zQ = (0, nQ.v)(wQ.root),
                  sQ = zQ ? !(0, mQ.A)(zQ) : Boolean(wQ.layer.close),
                  PQ = !zQ && wQ.layer.closeLabelKey ? wQ.layer.closeLabelKey : TQ.labelKey,
                  IQ = sQ ? [{
                    ...TQ,
                    labelKey: PQ
                  }] : [],
                  BQ = cX(wQ.layer.kind) ? [{
                    glyphs: kT("chat"),
                    labelKey: "controller:menusQuickChat"
                  }] : [];
                if ("cursor" === WQ) return qQ.push({
                  glyphs: kT("menuConfirm"),
                  labelKey: "controller:menusClick"
                }), qQ.push({
                  glyphs: kT("menuSecondary"),
                  labelKey: "controller:menusRightClick"
                }), qQ.push(...IQ), qQ.push(...BQ), qQ.push({
                  glyphs: ["RightStick"],
                  labelKey: "controller:menusScroll"
                }), Hw() && qQ.push({
                  glyphs: kT("menuToggleCursor"),
                  labelKey: "controller:menusFocusMode"
                }), qQ;
                const yQ = Qq.getFocused();
                yQ && (0, Aw.e)(yQ) ? qQ.push({
                  glyphs: ["Left", "Right"],
                  labelKey: "controller:menusAdjust"
                }) : yQ && (0, nQ.F)(yQ) ? qQ.push({
                  glyphs: [],
                  labelKey: "controller:menusUseMouse"
                }) : qQ.push({
                  glyphs: kT("menuConfirm"),
                  labelKey: "controller:menusSelect"
                });
                const VQ = yQ ? null === (QQ = rX(yQ)) || void 0 === QQ ? void 0 : QQ.dataset.padSecondary : void 0;
                VQ && qQ.push({
                  glyphs: kT("menuSecondary"),
                  labelKey: VQ
                }), qQ.push(...null !== yQ && void 0 !== yQ && yQ.closest("[data-pad-friends-column]") ? [TQ] : IQ), qQ.push(...BQ);
                const DQ = "home" === wQ.layer.kind;
                NX(wQ.root) || !uX(wQ.root) && !ZX(wQ) ? DQ && qQ.push({
                  glyphs: kT("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusRows"
                }) : qQ.push({
                  glyphs: kT("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusTabs"
                }), DQ && (qQ.push(...fT("inventory", "controller:menusFriends")), VQ || qQ.push({
                  glyphs: kT("menuSecondary"),
                  labelKey: "controller:menusSearch"
                }), qQ.push(...fT("pause", "controller:menusSettings")), qQ.push(...fT("leaderboard", "controller:menusNotifications")));
                const pQ = FQ.b.get("openEverythingMenuName");
                return "inGame" === FQ.b.get("gameState") && "popup" !== wQ.layer.kind && null !== pQ && ((0, FX.m)(pQ) ? qQ.push(...fT("leaderboard", "controller:menusClose")) : pQ !== sX.r.LOBBY_LEADERBOARD && qQ.push(...fT("leaderboard", "controller:menusLobby"))), qQ.push({
                  glyphs: kT("menuToggleCursor"),
                  labelKey: "controller:menusCursorMode"
                }), qQ
              })(),
              XQ = nT(VQ.current),
              wQ = ((QQ, WQ) => `${QQ.map((QQ=>`${QQ.glyphs.join("+")}:${QQ.labelKey}`)).join("|")}@${WQ}`)(WQ, XQ);
            wQ !== QQ && (QQ = wQ, (0, sQ.unstable_batchedUpdates)((() => {
              PQ(WQ), yQ(XQ)
            }))), xT(VQ.current)
          };
          WQ(), DQ.current = WQ;
          const XQ = requestAnimationFrame(WQ),
            wQ = setInterval(WQ, 150);
          return () => {
            DQ.current = null, cancelAnimationFrame(XQ), clearInterval(wQ), xT(null)
          }
        }), [pQ]), (0, uQ.useLayoutEffect)((() => {
          if (!pQ) return;
          if (0 === zQ.length) return void xT(null);
          const QQ = nT(VQ.current);
          QQ === BQ ? xT(VQ.current) : yQ(QQ)
        }), [pQ, zQ, BQ]), pQ && 0 !== zQ.length ? (0, fQ.jsx)("div", {
          ref: VQ,
          className: "PadButtonHintBar SmallTextBold",
          style: null === BQ ? void 0 : {
            bottom: BQ
          },
          "aria-hidden": !0,
          children: zQ.map((WQ => (0, fQ.jsxs)("div", {
            className: "PadButtonHint",
            children: [WQ.glyphs.map((QQ => (0, fQ.jsx)(vq, {
              glyph: QQ,
              className: "PadButtonHintGlyph"
            }, QQ))), (0, fQ.jsx)("span", {
              children: QQ(WQ.labelKey)
            })]
          }, WQ.labelKey)))
        }) : null
      };
    var NT = XQ(1806);
    const ZT = [mQ.d, "label", "[data-pad-slider]"].join(","),
      OT = "data-pad-cursor-probe",
      KT = QQ => {
        var WQ;
        const XQ = (QQ => {
          const WQ = [];
          for (let wQ = QQ; wQ && wQ !== document.body && wQ !== document.documentElement && (WQ.push(wQ), !(WQ.length > 8)); wQ = wQ.parentElement);
          const XQ = document.documentElement.classList.contains(IQ.p) ? WQ[WQ.length - 1] : void 0;
          null === XQ || void 0 === XQ || XQ.setAttribute(OT, "");
          try {
            return WQ.map((QQ => ({
              element: QQ,
              cursor: getComputedStyle(QQ).cursor
            })))
          } finally {
            null === XQ || void 0 === XQ || XQ.removeAttribute(OT)
          }
        })(QQ);
        if ("pointer" !== (null === (WQ = XQ[0]) || void 0 === WQ ? void 0 : WQ.cursor)) return null;
        let wQ = 0;
        for (; wQ + 1 < XQ.length && "pointer" === XQ[wQ + 1].cursor;) wQ++;
        return XQ[wQ].element
      },
      mT = (QQ, WQ, XQ, wQ) => {
        const qQ = wQ.root.contains(QQ) ? wQ.root : null;
        for (let TQ = QQ; TQ && TQ !== document.body && TQ !== document.documentElement; TQ = TQ.parentElement) {
          if (TQ instanceof HTMLElement && aQ(TQ, WQ) && AQ(TQ, WQ, XQ)) return TQ;
          if (TQ === qQ) break
        }
        return "home" === wQ.layer.kind || "gamePage" === wQ.layer.kind ? ((QQ, WQ) => {
          const XQ = document.scrollingElement;
          return XQ instanceof HTMLElement && ![document.documentElement, document.body].some((WQ => {
            const XQ = getComputedStyle(WQ),
              wQ = "y" === QQ ? XQ.overflowY : XQ.overflowX;
            return "hidden" === wQ || "clip" === wQ
          })) && AQ(XQ, QQ, WQ) ? XQ : null
        })(WQ, XQ) : null
      };
    const MT = new class {
        constructor() {
          this.state = {
            x: 0,
            y: 0,
            speedRamp: 0
          }, this.hasPosition = !1, this.active = !1, this.hidden = !1, this.hit = null, this.interactive = null, this.magnet = null, this.lastHitTestMs = -1 / 0, this.press = null, this.draggedSlider = null, this.repeatStop = null, this.repeatKey = null, this.repeated = !1, this.confirmRepeat = (0, BQ.d)(jQ.v), this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.layerRoot = null, this.layerOrder = 0, this.layerPoints = new WeakMap, this.page = null, this.pendingPageStart = null
        }
        install() {
          const QQ = JQ.b.register({
              name: "cursor",
              isActive: () => "cursor" === aw(),
              onFrame: QQ => {
                this.onFrame(QQ)
              },
              onDeactivate: () => {
                this.deactivate()
              },
              wakePressActs: QQ => (0, JQ.c)(QQ) || QQ === (0, gQ.g)("menuConfirm") && (0, nQ.G)((0, IQ.c)())
            }),
            WQ = (0, Xw.f)((QQ => {
              const WQ = QQ.getRoot();
              WQ && this.layerPoints.delete(WQ), WQ === this.layerRoot && (this.layerRoot = null)
            })),
            XQ = PQ.k.subscribe("appManagerUpdated|activeInputDevice", (QQ => {
              "gamepad" !== QQ && this.active && !this.hidden && this.hide()
            }));
          return () => {
            QQ(), WQ(), PQ.k.unsubscribe(XQ), this.deactivate()
          }
        }
        getHighlighted() {
          return this.isVisible() ? this.interactive : null
        }
        isVisible() {
          return this.active && !this.hidden && (0, IQ.i)()
        }
        getPoint() {
          return {
            x: this.state.x,
            y: this.state.y
          }
        }
        hide() {
          this.hidden = !0, this.cancelPress(), this.secondaryArmed = !1, this.clearHover(), this.mB()
        }
        activate(QQ) {
          this.active = !0, this.hidden = !1;
          const WQ = bw();
          !WQ || WQ.root && WQ.root !== QQ.root ? this.jumpTo(this.hasPosition ? this.getPoint() : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          }) : (this.setLayer(QQ), this.jumpTo(WQ.point))
        }
        jumpTo(QQ) {
          this.state = {
            x: QQ.x,
            y: QQ.y,
            speedRamp: 0
          }, this.hasPosition = !0, this.lastHitTestMs = -1 / 0
        }
        deactivate() {
          this.active && (this.active = !1, this.page = null, this.pendingPageStart = null, this.cancelPress(), this.clearHover(), this.draggedSlider = null, this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.mB())
        }
        onFrame(QQ) {
          const WQ = gw();
          if (!WQ) return;
          if (this.active || this.activate(WQ), this.followPage(WQ)) return;
          this.followLayer(WQ);
          const XQ = QQ.wokeDevice ? (0, IQ.c)() : null;
          if (XQ && this.jumpTo(XQ), !(0, IQ.i)()) return void this.hide();
          const wQ = (0, gQ.g)("menuToggleCursor");
          if (QQ.wasPressed(wQ)) return JQ.b.consumeButton(wQ), void Uw(this.getHandoff(null));
          if (this.handBackToFocus(QQ)) return;
          const qQ = (0, gQ.g)("menuConfirm"),
            TQ = (0, gQ.g)("menuSecondary");
          if (QQ.wasPressed((0, gQ.g)("menuBack"))) return (0, nQ.k)(WQ.root) || (0, nQ.e)(WQ.root) || Jw(), void this.mB();
          if (mX(null, QQ, WQ)) return QQ.wasReleased(qQ) && this.press && (this.updateHit(!1), this.updateConfirm(QQ, qQ)), void this.mB();
          if (document.pointerLockElement) return void this.hide();
          const zQ = lw() ? {
              x: 0,
              y: 0
            } : (QQ => {
              const WQ = (QQ, WQ) => (QQ ? 1 : 0) - (WQ ? 1 : 0);
              return {
                x: WQ(QQ.isHeld("Right"), QQ.isHeld("Left")),
                y: WQ(QQ.isHeld("Down"), QQ.isHeld("Up"))
              }
            })(QQ),
            sQ = (0, rQ.g)().moveDeadzone,
            FQ = ((QQ, WQ) => {
              const XQ = (0, jQ.p)(QQ, GQ(WQ));
              return Math.hypot(XQ.x, XQ.y)
            })(QQ.leftStick, sQ) > 0 || 0 !== zQ.x || 0 !== zQ.y;
          if (this.hidden) {
            const WQ = QQ.wasPressed(qQ),
              XQ = QQ.wasPressed(TQ);
            if (!FQ && !vQ(QQ.rightStick) && !WQ && !XQ && !QQ.wokeDevice) return void this.mB();
            if (this.hidden = !1, this.updateHit(!1), WQ || XQ) return WQ && (this.press = {
              kind: "ignored"
            }, QQ.wokeDevice && this.beginRepeat()), this.secondaryArmed = !1, void this.mB()
          }
          this.movePendingPageStart(FQ);
          const PQ = this.getPoint();
          this.state = bQ(this.state, {
            stick: QQ.leftStick,
            moveDeadzone: sQ,
            dpad: zQ,
            dtMs: QQ.dtMs,
            cursorSpeedPercent: (0, rQ.g)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: this.getAssistContext()
          });
          const BQ = this.state.x !== PQ.x || this.state.y !== PQ.y,
            yQ = [qQ, TQ].some((WQ => QQ.wasPressed(WQ) || QQ.wasReleased(WQ)));
          (BQ || yQ || performance.now() - this.lastHitTestMs >= 100) && this.updateHit(BQ), this.updateConfirm(QQ, qQ), this.updateSecondary(QQ, TQ), this.updateScroll(QQ, WQ), this.mB()
        }
        followPage(QQ) {
          const WQ = "home" === QQ.layer.kind || "gamePage" === QQ.layer.kind,
            XQ = this.page;
          if (this.page = WQ ? {
              key: (0, Xw.j)(QQ.layer),
              root: QQ.root
            } : null, !this.page || !XQ || XQ.root !== QQ.root || XQ.key === this.page.key) return !1;
          if (this.cancelPress(), this.secondaryArmed = !1, this.setLayer(QQ), "hybrid" === Gw()) return Vw = null, Bw = null, Dw.lock(), !0;
          const {
            key: wQ
          } = this.page;
          return this.pendingPageStart = {
            root: QQ.root,
            key: wQ,
            returning: Qq.notePageEnteredByCursor(wQ),
            enteredAtMs: performance.now()
          }, !1
        }
        movePendingPageStart(QQ) {
          const WQ = this.pendingPageStart;
          if (!WQ) return;
          if (QQ || WQ.root !== this.layerRoot) return void(this.pendingPageStart = null);
          const XQ = WQ.returning ? Qq.recallStop(WQ.root, WQ.key) : null;
          if (!XQ && WQ.returning && performance.now() - WQ.enteredAtMs < 1e3) return;
          const wQ = null !== XQ && void 0 !== XQ ? XQ : Qq.pickInitial(WQ.root, {
            includeDisabled: !0,
            waitForContent: !0,
            enteredAtMs: WQ.enteredAtMs
          });
          wQ && (this.pendingPageStart = null, this.jumpTo((0, nQ.y)(wQ)))
        }
        setLayer(QQ) {
          this.layerRoot = QQ.root, this.layerOrder = QQ.order
        }
        followLayer(QQ) {
          var WQ;
          if (QQ.root === this.layerRoot) return;
          null !== (WQ = this.layerRoot) && void 0 !== WQ && WQ.isConnected && this.layerPoints.set(this.layerRoot, this.getPoint()), this.cancelPress(), this.draggedSlider = null, this.secondaryArmed = !1;
          const XQ = this.layerPoints.get(QQ.root),
            wQ = XQ && QQ.order <= this.layerOrder ? XQ : Qq.getLayerStartPoint(QQ.root);
          this.setLayer(QQ), this.jumpTo(wQ)
        }
        getHandoff(QQ) {
          var WQ;
          return {
            point: this.getPoint(),
            element: null !== (WQ = this.interactive) && void 0 !== WQ ? WQ : this.findDraggedSliderNearby(),
            direction: QQ
          }
        }
        findDraggedSliderNearby() {
          const QQ = this.draggedSlider;
          if (null === QQ || void 0 === QQ || !QQ.isConnected) return null;
          const WQ = QQ.getBoundingClientRect(),
            {
              y: XQ
            } = this.getPoint();
          return XQ >= WQ.top - 40 && XQ <= WQ.bottom + 40 ? QQ : null
        }
        handBackToFocus(QQ) {
          if (!lw()) return !1;
          const WQ = jQ.D.find((WQ => QQ.wasPressed(WQ)));
          return !!WQ && (XQ = this.getHandoff(WQ), Vw = Iw(XQ), Bw = null, Dw.lock(), JQ.b.handOffHeldInput(), !0);
          var XQ
        }
        getAssistContext() {
          const QQ = this.interactive;
          if (null === QQ || void 0 === QQ || !QQ.isConnected) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const WQ = QQ.getBoundingClientRect();
          if (WQ.width > .4 * window.innerWidth || WQ.height > .4 * window.innerHeight) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const XQ = (0, rQ.g)().cursorMagnetism && !(0, NT.b)(QQ) && !QQ.closest("[data-pad-slider]"),
            wQ = this.magnet && this.magnet !== QQ && this.magnet.isConnected ? this.magnet.getBoundingClientRect() : WQ;
          return {
            overInteractive: !0,
            magnetTarget: XQ ? {
              x: wQ.left + wQ.width / 2,
              y: wQ.top + wQ.height / 2
            } : null
          }
        }
        updateHit(QQ) {
          this.lastHitTestMs = performance.now();
          const WQ = this.getPoint(),
            XQ = document.elementFromPoint(WQ.x, WQ.y),
            wQ = XQ && !(0, VQ.q)(XQ) && (QQ => {
              var WQ;
              const XQ = gw();
              return !(XQ && !XQ.root.contains(QQ) && !QQ.closest(".tooltip-container")) || !(null !== (WQ = document.getElementById("root")) && void 0 !== WQ && WQ.contains(QQ))
            })(XQ) ? XQ : null;
          if (wQ !== this.hit) return (0, nQ.r)(this.hit, wQ, WQ), this.hit = wQ, void this.setInteractive(wQ ? (QQ => {
            const WQ = QQ.closest(ZT);
            if (WQ) {
              var XQ, wQ;
              const QQ = null !== (XQ = null === (wQ = WQ.parentElement) || void 0 === wQ ? void 0 : wQ.closest("[data-pad-focusable]")) && void 0 !== XQ ? XQ : WQ;
              return (0, mQ.A)(QQ) ? {
                element: null,
                magnet: null
              } : {
                element: QQ,
                magnet: WQ
              }
            }
            const qQ = KT(QQ);
            return {
              element: qQ,
              magnet: qQ
            }
          })(wQ) : {
            element: null,
            magnet: null
          });
          QQ && wQ && (0, nQ.r)(wQ, wQ, WQ)
        }
        setInteractive(QQ) {
          let {
            element: WQ,
            magnet: XQ
          } = QQ;
          this.interactive = WQ, this.magnet = XQ
        }
        clearHover() {
          this.hit && (0, nQ.r)(this.hit, null, this.getPoint()), this.hit = null, this.setInteractive({
            element: null,
            magnet: null
          })
        }
        beginPress() {
          const QQ = this.hit;
          if (!QQ || (0, nQ.F)(QQ)) return {
            kind: "ignored"
          };
          const WQ = (0, Aw.e)(QQ),
            XQ = QQ.closest("[data-pad-slider]");
          return WQ && XQ ? {
            kind: "slider",
            slider: XQ,
            adjuster: WQ
          } : ((0, nQ.s)(QQ, this.getPoint()), {
            kind: "pointer",
            target: QQ
          })
        }
        applySliderFraction(QQ) {
          var WQ;
          const XQ = QQ.slider.getBoundingClientRect(),
            wQ = XQ.height > XQ.width,
            qQ = null === (WQ = QQ.slider.querySelector("[data-pad-slider-handle]")) || void 0 === WQ ? void 0 : WQ.getBoundingClientRect(),
            TQ = qQ ? wQ ? qQ.height : qQ.width : 0,
            zQ = (wQ ? XQ.height : XQ.width) - TQ;
          if (zQ <= 0) return;
          const sQ = wQ ? XQ.bottom - TQ / 2 - this.state.y : this.state.x - XQ.left - TQ / 2;
          QQ.adjuster.setFraction(Math.max(0, Math.min(1, sQ / zQ)))
        }
        updateConfirm(QQ, WQ) {
          QQ.wasPressed(WQ) && (this.press = QQ.wokeDevice ? {
            kind: "ignored"
          } : this.beginPress(), this.draggedSlider = "slider" === this.press.kind ? this.press.slider : null, this.beginRepeat());
          const XQ = this.press;
          if (!XQ) return;
          if (QQ.isHeld(WQ)) return "slider" === XQ.kind && this.applySliderFraction(XQ), void this.updateRepeat();
          this.press = null;
          const wQ = this.repeated;
          if (this.endRepeat(), !QQ.wasReleased(WQ)) return void this.endPressWithoutClick(XQ);
          const qQ = this.getPoint(),
            TQ = this.hit;
          if ("slider" === XQ.kind && XQ.adjuster.endDrag(), "pointer" === XQ.kind) {
            const QQ = null !== TQ && void 0 !== TQ ? TQ : XQ.target.isConnected ? XQ.target : null;
            QQ && (0, nQ.t)(QQ, qQ);
            const WQ = TQ && XQ.target.isConnected && !wQ ? ((QQ, WQ) => {
              for (let XQ = QQ; XQ; XQ = XQ.parentElement)
                if (XQ.contains(WQ)) return XQ;
              return null
            })(XQ.target, TQ) : null;
            WQ && (Qq.noteCursorActivation(WQ), (0, VQ.g)(WQ, new MouseEvent("click", (0, nQ.P)(qQ, 0, 0))), (0, nQ.h)(WQ), (0, nQ.M)(WQ) && (0, nQ.J)(WQ))
          }
        }
        beginRepeat() {
          var QQ, WQ, XQ;
          const wQ = null !== (QQ = null === (WQ = this.hit) || void 0 === WQ ? void 0 : WQ.closest("[data-pad-repeat]")) && void 0 !== QQ ? QQ : null;
          this.repeatStop = wQ, this.repeatKey = null !== (XQ = null === wQ || void 0 === wQ ? void 0 : wQ.getAttribute("data-pad-repeat")) && void 0 !== XQ ? XQ : null, this.repeated = !1, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now())
        }
        updateRepeat() {
          const QQ = this.repeatStop;
          if (!QQ) return;
          const WQ = this.hit;
          QQ.isConnected && !(0, mQ.A)(QQ) && QQ.getAttribute("data-pad-repeat") === this.repeatKey && WQ && QQ.contains(WQ) ? QQ.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.repeated = !0, Qq.noteCursorActivation(QQ), (0, VQ.g)(QQ, new MouseEvent("click", (0, nQ.P)(this.getPoint(), 0, 0)))) : this.repeatStop = null
        }
        endRepeat() {
          this.repeatStop = null, this.repeated = !1
        }
        endPressWithoutClick(QQ) {
          "slider" === QQ.kind && QQ.adjuster.endDrag(), "pointer" === QQ.kind && QQ.target.isConnected && (0, nQ.t)(QQ.target, this.getPoint())
        }
        cancelPress() {
          this.endRepeat(), this.press && (this.endPressWithoutClick(this.press), this.press = null)
        }
        updateSecondary(QQ, WQ) {
          QQ.wasPressed(WQ) && (this.secondaryArmed = null !== this.hit), this.secondaryArmed && !QQ.isHeld(WQ) && (this.secondaryArmed = !1, QQ.wasReleased(WQ) && this.hit && (0, nQ.n)(this.hit, this.getPoint(), 2))
        }
        updateScroll(QQ, WQ) {
          const XQ = dQ(QQ.rightStick, QQ.dtMs);
          if (0 === XQ.x && 0 === XQ.y) return void(this.scrollRemainder = {
            x: 0,
            y: 0
          });
          this.scrollRemainder = {
            x: this.scrollRemainder.x + XQ.x,
            y: this.scrollRemainder.y + XQ.y
          };
          const wQ = Math.trunc(this.scrollRemainder.x),
            qQ = Math.trunc(this.scrollRemainder.y);
          this.scrollRemainder = {
            x: this.scrollRemainder.x - wQ,
            y: this.scrollRemainder.y - qQ
          };
          const TQ = this.hit;
          if (!TQ) return;
          let zQ = !1;
          if (0 !== qQ) {
            const QQ = mT(TQ, "y", qQ > 0 ? 1 : -1, WQ);
            QQ && (QQ.scrollBy({
              top: qQ,
              behavior: "instant"
            }), zQ = !0)
          }
          if (0 !== wQ) {
            const QQ = mT(TQ, "x", wQ > 0 ? 1 : -1, WQ);
            QQ && (QQ.scrollBy({
              left: wQ,
              behavior: "instant"
            }), zQ = !0)
          }
          zQ && (this.lastHitTestMs = -1 / 0)
        }
        mB() {
          YQ.set({
            x: this.state.x,
            y: this.state.y,
            visible: this.isVisible(),
            pressed: null !== this.press && "ignored" !== this.press.kind
          })
        }
      },
      Qz = () => {
        const QQ = (0, uQ.useMemo)((() => new oQ), []),
          WQ = (0, IQ.w)();
        return (0, uQ.useEffect)((() => {
          if (!WQ) return;
          let XQ = 0,
            wQ = {
              of: null,
              atMs: 0,
              list: []
            };
          const qQ = document.getElementsByClassName(hw),
            TQ = QQ => {
              for (const WQ of [...qQ]) WQ !== QQ && WQ.classList.remove(hw)
            },
            zQ = () => {
              var WQ;
              XQ = requestAnimationFrame(zQ);
              const qQ = (() => {
                const QQ = Qq.getFocused();
                if (Qq.isActive() && null !== QQ && void 0 !== QQ && QQ.isConnected) return QQ;
                const WQ = MT.getHighlighted();
                return null !== WQ && void 0 !== WQ && WQ.isConnected ? WQ : null
              })();
              TQ(qQ), qQ && !qQ.classList.contains(hw) && qQ.classList.add(hw);
              const sQ = null !== (WQ = null === qQ || void 0 === qQ ? void 0 : qQ.closest("[data-pad-reticle-box]")) && void 0 !== WQ ? WQ : qQ;
              QQ.show(sQ ? ((QQ, WQ) => {
                let XQ = QQ.left,
                  wQ = QQ.top,
                  qQ = QQ.right,
                  TQ = QQ.bottom;
                for (const zQ of WQ) {
                  if (!zQ) continue;
                  const QQ = EQ(zQ);
                  XQ = Math.max(XQ, QQ.left), wQ = Math.max(wQ, QQ.top), qQ = Math.min(qQ, QQ.right), TQ = Math.min(TQ, QQ.bottom)
                }
                return qQ <= XQ || TQ <= wQ ? null : {
                  left: XQ,
                  top: wQ,
                  width: qQ - XQ,
                  height: TQ - wQ
                }
              })(sQ.getBoundingClientRect(), (QQ => {
                const WQ = performance.now();
                return (wQ.of !== QQ || WQ - wQ.atMs > 500) && (wQ = {
                  of: QQ,
                  atMs: WQ,
                  list: [lQ(QQ, "y"), lQ(QQ, "x")]
                }), wQ.list
              })(sQ)) : null)
            };
          return XQ = requestAnimationFrame(zQ), () => {
            cancelAnimationFrame(XQ), TQ(null), QQ.hide()
          }
        }), [WQ, QQ]), (0, fQ.jsx)(eQ, {
          placer: QQ,
          className: "PadFocusRing"
        })
      },
      Wz = (QQ, WQ) => {
        QQ.style.transform = `translate3d(${WQ.x}px, ${WQ.y}px, 0)`, QQ.classList.toggle("Visible", WQ.visible), QQ.classList.toggle("Pressed", WQ.pressed)
      },
      Xz = () => {
        const QQ = (0, uQ.useRef)(null);
        return (0, uQ.useEffect)((() => {
          const WQ = YQ.subscribe((WQ => {
            QQ.current && Wz(QQ.current, WQ)
          }));
          return QQ.current && Wz(QQ.current, YQ.get()), WQ
        }), []), (0, fQ.jsx)("div", {
          ref: QQ,
          className: "PadCursorView",
          "aria-hidden": "true",
          children: (0, fQ.jsx)("div", {
            className: "PadCursorGlyph",
            children: "+"
          })
        })
      },
      wz = "#ncmp__modal.ncmp__active",
      qz = [{
        id: "nitro-consent-banner",
        find: () => document.querySelector(wz) ? null : document.querySelector("#ncmp__tool > .ncmp__banner.ncmp__active"),
        startSelectors: ["[data-ncmp-cmd='reject']", "[data-ncmp-cmd='showModal']"]
      }, {
        id: "nitro-consent-modal",
        find: () => document.querySelector(wz),
        startSelectors: ["[data-ncmp-cmd='reject']"]
      }, {
        id: "google-consent",
        find: () => document.querySelector(".fc-consent-root"),
        startSelectors: [".fc-cta-do-not-consent", ".fc-cta-manage-options"]
      }],
      Tz = "PadOverThirdParty",
      zz = new Set(qz.map((QQ => QQ.id))),
      sz = () => {
        const QQ = qz.map((QQ => {
            let {
              id: WQ,
              find: XQ,
              startSelectors: wQ
            } = QQ;
            return (0, Xw.i)({
              id: WQ,
              kind: "popup",
              getRoot: () => {
                const QQ = XQ(),
                  WQ = QQ ? ((QQ, WQ) => {
                    var XQ;
                    for (const wQ of WQ) {
                      const WQ = QQ.querySelector(wQ);
                      if (WQ) return WQ
                    }
                    return null !== (XQ = [...QQ.querySelectorAll("button")].find((QQ => !QQ.matches(".fc-cta-consent, [data-ncmp-cmd='save']")))) && void 0 !== XQ ? XQ : null
                  })(QQ, wQ) : null;
                if (QQ && WQ && !WQ.hasAttribute("data-pad-default-focus")) {
                  for (const WQ of QQ.querySelectorAll("[data-pad-default-focus]")) WQ.removeAttribute("data-pad-default-focus");
                  for (const WQ of QQ.querySelectorAll("[data-pad-hint-bar-avoid]")) WQ.removeAttribute("data-pad-hint-bar-avoid");
                  WQ.setAttribute("data-pad-default-focus", ""), ((QQ, WQ) => {
                    let XQ = QQ;
                    for (let wQ = QQ.parentElement; wQ && WQ.contains(wQ) && !(wQ.getBoundingClientRect().height >= window.innerHeight / 2); wQ = wQ.parentElement) XQ = wQ;
                    return XQ
                  })(WQ, QQ).setAttribute("data-pad-hint-bar-avoid", "")
                }
                return QQ
              },
              close: null,
              memoryKey: null
            })
          })),
          WQ = document.documentElement,
          XQ = zQ.i.onFrame((() => {
            const QQ = (0, IQ.i)() ? gw() : null,
              XQ = !!QQ && (wQ = QQ.layer, zz.has(wQ.id));
            var wQ;
            WQ.classList.contains(Tz) !== XQ && WQ.classList.toggle(Tz, XQ)
          }));
        return () => {
          for (const WQ of QQ) WQ();
          XQ(), WQ.classList.remove(Tz)
        }
      },
      Fz = "PadLargePointer",
      Pz = () => {
        (0, uQ.useEffect)((() => {
          const QQ = (0, VQ.l)(document.body),
            WQ = Qq.install(),
            XQ = MT.install(),
            wQ = sz();
          return () => {
            QQ(), WQ(), XQ(), wQ()
          }
        }), []);
        const {
          largePointer: QQ
        } = (0, rQ.m)(), WQ = (0, uT.A)() && QQ;
        return (0, uQ.useEffect)((() => {
          if (WQ) return document.documentElement.classList.add(Fz), () => {
            document.documentElement.classList.remove(Fz)
          }
        }), [WQ]), (0, sQ.createPortal)((0, fQ.jsxs)(fQ.Fragment, {
          children: [(0, fQ.jsx)(YT, {}), (0, fQ.jsx)(Qz, {}), (0, fQ.jsx)(Xz, {})]
        }), document.body)
      };
    var gz = XQ(9159),
      Jz = XQ(9176),
      rz = XQ(9170);
    XQ(9179);
    const Iz = (QQ, WQ) => {
        const [XQ, wQ] = (0, uQ.useState)(!1), [qQ, TQ] = (0, uQ.useState)(null), zQ = (0, uQ.useRef)(null), sQ = (0, uQ.useCallback)((QQ => {
          zQ.current = QQ, TQ(QQ)
        }), []), FQ = (0, uQ.useCallback)((() => {
          wQ(!1), sQ(null)
        }), [sQ]), gQ = (0, uQ.useCallback)((() => {
          wQ(!0)
        }), []), JQ = (0, uQ.useCallback)(((QQ, WQ) => {
          sQ((0, rz.H)(QQ, WQ, zQ.current))
        }), [sQ]);
        (0, uQ.useLayoutEffect)((() => (WQ(XQ), (0, LT.s)(QQ, XQ), PQ.k.mB(LT.o), () => {
          WQ(!1), (0, LT.s)(QQ, !1), PQ.k.mB(LT.o)
        })), [XQ, QQ, WQ]), (0, Vq.f)("appManagerUpdated|activeInputDevice", (QQ => {
          "gamepad" !== QQ && FQ()
        })), (0, Vq.f)("appManagerUpdated|gameState", (QQ => {
          "inGame" !== QQ && FQ()
        }));
        const rQ = () => {
          (0, FX.r)() && FQ()
        };
        return (0, Vq.f)("appManagerUpdated|openEverythingMenuName", rQ), (0, Vq.f)("appManagerUpdated|openInGameMenuName", rQ), {
          open: XQ,
          picked: qQ,
          pickedRef: zQ,
          show: gQ,
          aim: JQ,
          close: FQ
        }
      },
      jz = QQ => {
        let {
          className: WQ,
          slotCount: XQ,
          picked: wQ,
          slotLabel: qQ,
          renderSlot: TQ,
          centre: zQ
        } = QQ;
        const sQ = Array.from({
          length: XQ
        }, ((QQ, WQ) => WQ));
        return (0, fQ.jsx)("div", {
          className: kQ()("EmoteWheelOverlay PadRadialWheel", WQ),
          children: (0, fQ.jsxs)("div", {
            className: "EmoteWheel",
            style: {
              width: 2 * rz.y + "rem",
              height: 2 * rz.y + "rem"
            },
            children: [(0, fQ.jsxs)("svg", {
              className: "EmoteWheelSvg",
              viewBox: `0 0 ${rz.r} ${rz.r}`,
              children: [sQ.map((QQ => (0, fQ.jsx)("path", {
                d: (0, rz.z)(QQ, XQ, rz.i, rz.m, rz.p),
                className: kQ()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: QQ === wQ
                }),
                "aria-label": qQ(QQ)
              }, QQ))), (0, fQ.jsx)("circle", {
                className: "EmoteWheelOuterRing",
                cx: rz.i,
                cy: rz.i,
                r: rz.p
              }), (0, fQ.jsx)("circle", {
                className: "EmoteWheelInnerRing",
                cx: rz.i,
                cy: rz.i,
                r: rz.m
              }), null !== wQ && (0, fQ.jsx)("path", {
                className: "EmoteWheelWedgeOutline",
                d: (0, rz.z)(wQ, XQ, rz.i, rz.m, rz.p)
              })]
            }), sQ.map((QQ => {
              const WQ = (0, rz.D)(QQ, XQ);
              return (0, fQ.jsx)("div", {
                className: kQ()("PadRadialWheelSlot SmallTextBold", {
                  PadRadialWheelSlotPicked: QQ === wQ
                }),
                style: {
                  left: `calc(50% + ${rz.e*Math.cos(WQ)}rem)`,
                  top: `calc(50% + ${rz.e*Math.sin(WQ)}rem)`
                },
                "aria-hidden": !0,
                children: TQ(QQ)
              }, QQ)
            })), (0, fQ.jsx)("div", {
              className: "EmoteWheelHint SmallTextBold",
              children: zQ
            })]
          })
        })
      },
      Bz = JT.length,
      yz = () => {
        const {
          t: QQ
        } = (0, qQ.C)(), WQ = Iz("chat", iX.q), XQ = (0, uQ.useMemo)((() => JT.map((WQ => QQ(WQ)))), [QQ]);
        return (0, Vq.f)(iX.p, (() => {
          WQ.open || (0, gz.c)() || (0, Jz.t)() || "inGame" !== FQ.b.get("gameState") || (0, FX.r)() || !(0, lX.d)() || WQ.show()
        })), (0, Vq.f)(iX.g, (QQ => {
          WQ.open && WQ.aim(QQ, Bz)
        })), (0, Vq.f)(iX.l, (() => {
          var QQ;
          if (!WQ.open) return;
          const wQ = WQ.pickedRef.current;
          null !== wQ ? rT.claim(performance.now()) && (WQ.close(), null === (QQ = (0, lX.d)()) || void 0 === QQ || QQ.sendLine(XQ[wQ])) : WQ.close()
        })), (0, Vq.f)(iX.k, WQ.close), WQ.open ? (0, fQ.jsx)(jz, {
          className: "QuickChatWheel",
          slotCount: Bz,
          picked: WQ.picked,
          slotLabel: QQ => XQ[QQ],
          renderSlot: QQ => XQ[QQ],
          centre: null !== WQ.picked ? XQ[WQ.picked] : QQ("controller:quickChatPick")
        }) : null
      },
      Vz = () => {
        const {
          t: QQ
        } = (0, qQ.C)(), WQ = Iz("actionButton", Jz.w), [XQ, wQ] = (0, uQ.useState)([]);
        if ((0, Vq.f)(Jz.n, (QQ => {
            WQ.open || (0, gz.c)() || (0, iX.d)() || "inGame" !== FQ.b.get("gameState") || (0, FX.r)() || (wQ(QQ), WQ.show())
          })), (0, Vq.f)(Jz.e, (QQ => {
            WQ.open && WQ.aim(QQ, XQ.length)
          })), (0, Vq.f)(Jz.j, (() => {
            if (!WQ.open) return;
            const QQ = WQ.pickedRef.current;
            WQ.close(), null !== QQ && PQ.k.mB(Jz.r, XQ[QQ])
          })), (0, Vq.f)(Jz.g, WQ.close), !WQ.open) return null;
        const TQ = null !== WQ.picked ? XQ[WQ.picked] : null;
        return (0, fQ.jsx)(jz, {
          className: "ActionWheel",
          slotCount: XQ.length,
          picked: WQ.picked,
          slotLabel: WQ => {
            const wQ = XQ[WQ];
            return "reload" === wQ.kind ? QQ("controller:gameplayReload") : "customButton" === wQ.kind ? wQ.description || wQ.icon : "touchButton" === wQ.kind && "string" === typeof wQ.label ? wQ.label : ""
          },
          renderSlot: QQ => (0, fQ.jsx)(Hq, {
            action: XQ[QQ]
          }),
          centre: TQ ? (0, fQ.jsx)(Hq, {
            action: TQ
          }) : QQ("controller:actionWheelPick")
        })
      };
    var Dz = XQ(105);
    const pz = () => ((0, uQ.useEffect)((() => {
        var QQ, WQ;
        const XQ = (0, VQ.l)(document.getElementById("root")),
          wQ = (0, IQ.e)(),
          qQ = (() => {
            const QQ = [PQ.k.subscribe(Xq.g, (() => {
                zq("blockBreak")
              })), PQ.k.subscribe("damagedByOtherPlayer", (() => {
                zq("damage")
              })), PQ.k.subscribe("yourAttackHit", (QQ => {
                let {
                  hitSelf: WQ
                } = QQ;
                WQ || zq("hit")
              }))],
              WQ = zQ.i.onActivePadChanged((QQ => {
                QQ && zq("connect")
              }));
            return () => {
              for (const WQ of QQ) PQ.k.unsubscribe(WQ);
              WQ()
            }
          })(),
          TQ = (() => {
            const QQ = new rq({
              getVisitId: Jq.d,
              peekVisitId: Jq.peekVisitSessionId,
              readReportedVisitId: () => {
                const QQ = gq.m.getItem(Iq);
                return "string" === typeof QQ ? QQ : null
              },
              writeReportedVisitId: QQ => {
                gq.m.setItem(Iq, QQ)
              },
              isPadActive: IQ.i,
              getPadFamily: () => {
                var QQ, WQ;
                return null !== (QQ = null === (WQ = zQ.i.getActivePad()) || void 0 === WQ ? void 0 : WQ.family) && void 0 !== QQ ? QQ : null
              },
              canReport: Fq.isBloxdGa4Ready,
              getInputType: Pq.c,
              nI: Fq.logControllerUsedToGtag
            });
            let WQ = 0,
              XQ = null;
            const wQ = qQ => {
                null === XQ && ("notReady" !== QQ.check(qQ) || null !== XQ || WQ >= 20 || (WQ++, XQ = setTimeout((() => {
                  XQ = null, wQ(!1)
                }), 3e3)))
              },
              qQ = PQ.k.subscribe("appManagerUpdated|activeInputDevice", (() => {
                wQ(!0)
              })),
              TQ = (0, Jq.j)((() => {
                WQ = 0, wQ(!0)
              }));
            return () => {
              PQ.k.unsubscribe(qQ), TQ(), null !== XQ && clearTimeout(XQ)
            }
          })(),
          sQ = zQ.i.onFrame(((QQ, WQ, XQ) => {
            const wQ = (0, IQ.m)(QQ, XQ);
            JQ.b.dispatch(QQ, WQ, wQ)
          }));
        let gQ = null !== (QQ = null === (WQ = zQ.i.getActivePad()) || void 0 === WQ ? void 0 : WQ.family) && void 0 !== QQ ? QQ : null;
        const jQ = zQ.i.onActivePadChanged((QQ => {
            var WQ, XQ;
            (JQ.b.reset(), (0, IQ.t)(), PQ.k.mB(zQ.e, QQ), (null !== (WQ = null === QQ || void 0 === QQ ? void 0 : QQ.family) && void 0 !== WQ ? WQ : null) !== gQ) && (gQ = null !== (XQ = null === QQ || void 0 === QQ ? void 0 : QQ.family) && void 0 !== XQ ? XQ : null, PQ.k.mB(rQ.b, (0, rQ.g)()));
            !QQ && (0, IQ.i)() && (0, IQ.u)(FQ.b.get("isTouchScreen") ? "touch" : "keyboardMouse")
          })),
          BQ = () => {
            "visible" !== document.visibilityState && JQ.b.clear()
          },
          yQ = () => {
            JQ.b.clear()
          };
        document.addEventListener("visibilitychange", BQ), window.addEventListener("blur", yQ), zQ.i.start(), (0, sq.i)();
        const DQ = null;
        return () => {
          XQ(), wQ(), qQ(), TQ(), sQ(), jQ(), document.removeEventListener("visibilitychange", BQ), window.removeEventListener("blur", yQ), zQ.i.stop(), null === DQ || void 0 === DQ || DQ()
        }
      }), []), (0, fQ.jsxs)("div", {
        className: "ControllerRoot",
        children: [(0, fQ.jsx)(Rq, {}), (0, fQ.jsx)(oq, {}), (0, fQ.jsx)(eq, {}), (0, fQ.jsx)(ET, {}), (0, fQ.jsx)(Pz, {}), (0, fQ.jsx)(yz, {}), (0, fQ.jsx)(Vz, {})]
      })),
      Gz = () => Dz.featureFlags.useControllerSupport ? (0, fQ.jsx)(pz, {}) : null;
    var Uz = XQ(8580),
      bz = XQ(9187);
    const vz = new Set(sq.f),
      dz = QQ => `${bz.j}${(0,rQ.i)()}/${QQ}`,
      Hz = QQ => {
        if (!(0, bz.i)(QQ)) return null;
        const [WQ, XQ] = QQ.slice(bz.j.length).split("/");
        return (0, Uz.f)(WQ) && vz.has(XQ) ? (0, sq.e)(WQ, XQ) : null
      };
    var az = XQ(9189);
    const lz = () => {
        const {
          t: QQ
        } = (0, qQ.C)(), WQ = (0, IQ.w)(), {
          gameState: XQ,
          isUiHidden: wQ
        } = (0, FQ.n)(["gameState", "isUiHidden"]), {
          hideButtonHints: TQ,
          sneakMode: zQ
        } = (0, rQ.m)(), [sQ, PQ] = (0, uQ.useState)(az.c);
        return (0, Vq.f)(Aq.p, PQ), WQ && !wQ && "inGame" === XQ && sQ ? (0, fQ.jsxs)("div", {
          className: "PadSneakChip SmallTextBold",
          children: [!TQ && (0, fQ.jsx)(vq, {
            glyph: (0, gQ.g)("toggle" === zQ ? "sneak" : "sneakToggle")
          }), (0, fQ.jsx)("span", {
            children: QQ("controller:gameplaySneaking")
          })]
        }) : null
      },
      hz = 12,
      iz = QQ => {
        let {
          trigger: WQ,
          className: XQ,
          children: wQ
        } = QQ;
        const qQ = (0, uQ.useRef)(null);
        return (0, uQ.useEffect)((() => {
          let QQ = 0;
          const XQ = lQ(WQ, "y"),
            wQ = () => {
              QQ = requestAnimationFrame(wQ);
              const TQ = qQ.current;
              if (!TQ || null === WQ || void 0 === WQ || !WQ.isConnected) return;
              const {
                left: zQ,
                top: sQ
              } = function(QQ, WQ, XQ) {
                let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                  qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                const TQ = QQ.left + QQ.width / 2,
                  zQ = Math.max(hz, XQ.width - hz - WQ.width),
                  sQ = Math.min(Math.max(TQ - WQ.width / 2, hz), zQ),
                  FQ = XQ.height - wQ;
                let PQ = 0,
                  gQ = FQ;
                if (qQ) {
                  const QQ = Math.max(0, qQ.top),
                    wQ = Math.min(FQ, qQ.bottom);
                  wQ - QQ >= Math.max(XQ.height / 2, WQ.height + 24) && (PQ = QQ, gQ = wQ)
                }
                const JQ = QQ.top + QQ.height / 2 < (PQ + gQ) / 2 ? gQ - hz - WQ.height : PQ + hz;
                return {
                  left: sQ,
                  top: Math.max(hz, JQ)
                }
              }(WQ.getBoundingClientRect(), {
                width: TQ.offsetWidth,
                height: TQ.offsetHeight
              }, {
                width: window.innerWidth,
                height: window.innerHeight
              }, parseFloat(document.documentElement.style.getPropertyValue(tT)) || 0, null !== XQ && void 0 !== XQ && XQ.isConnected ? XQ.getBoundingClientRect() : null);
              TQ.style.transform = `translate3d(${Math.round(zQ)}px, ${Math.round(sQ)}px, 0)`, TQ.style.visibility = "visible"
            };
          return wQ(), () => {
            cancelAnimationFrame(QQ)
          }
        }), [WQ]), (0, fQ.jsx)("div", {
          ref: qQ,
          className: XQ,
          style: {
            position: "fixed",
            left: 0,
            top: 0,
            visibility: "hidden"
          },
          children: wQ
        })
      };
    var cz = XQ(1094),
      Az = XQ(9195),
      Rz = XQ(1507),
      Ez = XQ(9202),
      Cz = XQ(9211);
    const uz = {
        shop: {
          icon: "cart-shopping",
          labelKey: "controller:menusShop"
        },
        tasks: {
          icon: "bars",
          labelKey: "controller:menusTasks"
        },
        invite: {
          icon: "user-plus",
          labelKey: "controller:menusInvite"
        },
        leave: {
          icon: "arrow-left",
          labelKey: "settingsMenu:exitGame"
        }
      },
      Lz = () => {
        const {
          t: QQ
        } = (0, qQ.C)(), WQ = (0, IQ.w)(), XQ = (0, Az.e)(), wQ = (0, fq.g)("_tasks"), TQ = (0, fq.g)("_availableLeaderboards");
        if (!WQ) return null;
        const zQ = (QQ => {
          let {
            hasShop: WQ,
            hasTasksOrLeaderboards: XQ,
            canInvite: wQ
          } = QQ;
          const qQ = [];
          return WQ && qQ.push("shop"), XQ && qQ.push("tasks"), wQ && qQ.push("invite"), qQ.push("leave"), qQ
        })({
          hasShop: XQ,
          hasTasksOrLeaderboards: !(!wQ && !TQ),
          canInvite: !!Dz.featureFlags.canUseInviteLinks
        });
        return (0, fQ.jsx)("div", {
          className: "PadLobbyShortcuts",
          children: zQ.map((WQ => {
            const {
              icon: XQ,
              labelKey: wQ
            } = uz[WQ], qQ = "leave" === WQ ? Rz.P : Rz.h;
            return (0, fQ.jsx)(qQ, {
              className: "PadLobbyShortcut",
              onClick: () => {
                (QQ => {
                  switch (QQ) {
                    case "shop":
                      return PQ.k.mB(Cz.k), void FQ.b.set({
                        openEverythingMenuName: sX.r.SHOP
                      });
                    case "tasks":
                      return void PQ.k.mB("toggleMenu", "retentionFeatures");
                    case "invite":
                      return void PQ.k.mB("toggleMenu", "inviteLink");
                    case "leave":
                      (0, Ez.c)()
                  }
                })(WQ)
              },
              children: (0, fQ.jsxs)("div", {
                className: "PadLobbyShortcutInner",
                children: [(0, fQ.jsx)(cz.d, {
                  name: XQ
                }), (0, fQ.jsx)("span", {
                  children: QQ(wQ)
                })]
              })
            }, WQ)
          }))
        })
      };
    var kz = XQ(2061);
    const fz = jQ.z,
      Sz = ["forward", "backward", "left", "right", "sprint"],
      tz = QQ => QQ.ctrlKey || QQ.altKey || "Alt" === QQ.key || "ArrowUp" === QQ.key || "ArrowDown" === QQ.key || "Tab" === QQ.code || "/" === QQ.key || "Slash" === QQ.code;
    class oz {
      constructor() {
        this.armed = !1, this.swallowedKeys = new Set, this.previousHeld = new Array(jQ.Z).fill(!1), this.leftStickWasPressed = !1, this.rightStickWasPressed = !1, this.consumeNextFrame = !1, this.consumeAfterContinue = !1
      }
      setArmed(QQ) {
        this.armed = QQ
      }
      blocksGameplay() {
        return this.armed || this.consumeNextFrame
      }
      onKeyDown(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return !this.armed || WQ ? !QQ.repeat && this.swallowedKeys.delete(QQ.code) ? {
          swallow: !1,
          continues: !1
        } : {
          swallow: this.swallowedKeys.has(QQ.code),
          continues: !1
        } : "Escape" === QQ.key || QQ.repeat && !this.swallowedKeys.has(QQ.code) ? {
          swallow: !1,
          continues: !1
        } : XQ ? {
          swallow: !1,
          continues: !0
        } : (this.swallowedKeys.add(QQ.code), {
          swallow: !0,
          continues: (0, IQ.g)(QQ)
        })
      }
      onKeyUp(QQ) {
        return this.swallowedKeys.delete(QQ.code)
      }
      forgetKeys() {
        this.swallowedKeys.clear()
      }
      onPadFrame(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          wQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const qQ = (0, jQ.u)(QQ.values, this.previousHeld),
          TQ = null === XQ ? -1 : (0, jQ.s)(XQ),
          zQ = TQ >= 0 && qQ[TQ] && !this.previousHeld[TQ],
          sQ = qQ.some(((QQ, WQ) => QQ && !this.previousHeld[WQ] && WQ !== TQ)),
          FQ = Math.hypot(QQ.leftStick.x, QQ.leftStick.y) >= fz,
          PQ = Math.hypot(QQ.rightStick.x, QQ.rightStick.y) >= fz,
          gQ = FQ && !this.leftStickWasPressed || PQ && !this.rightStickWasPressed;
        this.previousHeld = qQ, this.leftStickWasPressed = FQ, this.rightStickWasPressed = PQ;
        let JQ = !1;
        this.consumeNextFrame && (this.consumeNextFrame = !1, JQ = !0);
        const rQ = !WQ && zQ && !wQ,
          IQ = !rQ && this.armed && !WQ && (sQ || gQ);
        return (rQ || IQ) && (this.consumeNextFrame = !0, this.consumeAfterContinue = IQ, JQ = !0), {
          continues: IQ,
          back: rQ,
          consumeHeld: JQ
        }
      }
      consumeLeavesMoveStick() {
        return this.consumeAfterContinue
      }
    }
    const ez = new Set([...kz.j, ...kz.z]),
      nz = QQ => ((QQ, WQ, XQ) => {
        const wQ = Object.keys(WQ).filter((wQ => !XQ.has(wQ) && WQ[wQ].includes(QQ)));
        return wQ.length > 0 && wQ.every((QQ => Sz.includes(QQ)))
      })(QQ, kz.s, ez),
      xz = (QQ, WQ, XQ) => {
        const wQ = new oz,
          qQ = QQ => {
            if (!QQ.isTrusted) return;
            const {
              swallow: XQ,
              continues: qQ
            } = wQ.onKeyDown(QQ, !(0, IQ.A)(QQ) || (0, Wq.f)() || (0, FX.r)(), nz(QQ.code));
            XQ && (QQ.stopImmediatePropagation(), tz(QQ) && QQ.preventDefault()), qQ && ((0, IQ.u)("keyboardMouse"), WQ())
          },
          TQ = QQ => {
            QQ.isTrusted && wQ.onKeyUp(QQ) && (QQ.stopImmediatePropagation(), tz(QQ) && QQ.preventDefault())
          },
          sQ = () => {
            wQ.forgetKeys()
          };
        window.addEventListener("keydown", qQ, !0), window.addEventListener("keyup", TQ, !0), window.addEventListener("blur", sQ);
        const FQ = zQ.i.onFrame((QQ => {
            const qQ = JQ.b.getActiveConsumerName(),
              TQ = XQ(),
              zQ = TQ ? (0, gQ.g)("menuBack") : null,
              sQ = null !== qQ && "gameplay" !== qQ,
              {
                continues: FQ,
                back: PQ,
                consumeHeld: jQ
              } = wQ.onPadFrame(QQ, sQ, zQ, (0, IQ.l)(QQ));
            if (jQ) {
              const QQ = (0, rQ.g)().swapSticks ? "right" : "left";
              JQ.b.consumeAllHeld(wQ.consumeLeavesMoveStick() ? QQ : null)
            }
            PQ ? null === TQ || void 0 === TQ || TQ() : FQ && WQ()
          })),
          PQ = (0, Wq.h)(`pressToContinue:${QQ}`, (() => wQ.blocksGameplay()));
        return {
          setArmed: QQ => {
            wQ.setArmed(QQ)
          },
          dispose: () => {
            window.removeEventListener("keydown", qQ, !0), window.removeEventListener("keyup", TQ, !0), window.removeEventListener("blur", sQ), FQ(), PQ()
          }
        }
      };
    var Yz = XQ(5349),
      Nz = XQ(3692),
      Zz = XQ(3398),
      Oz = XQ(8585);
    const Kz = QQ => {
        let {
          text: WQ
        } = QQ;
        return (0, fQ.jsx)("div", {
          className: "ControllerSettingsHeading",
          children: WQ
        })
      },
      mz = QQ => {
        let {
          label: WQ,
          hint: XQ,
          options: wQ,
          value: TQ,
          onChange: zQ
        } = QQ;
        const {
          t: sQ
        } = (0, qQ.C)();
        return (0, fQ.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, fQ.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: [(0, fQ.jsxs)("div", {
              className: "ControllerChoiceText",
              children: [(0, fQ.jsx)("div", {
                className: "SliderText",
                children: WQ
              }), XQ && (0, fQ.jsx)("div", {
                className: "ControllerSettingsHint",
                children: XQ
              })]
            }), (0, fQ.jsx)(Zz.c, {
              options: wQ.map((QQ => ({
                label: "label" in QQ ? QQ.label : sQ(QQ.labelKey),
                value: QQ.value
              }))),
              value: TQ,
              onChange: QQ => {
                zQ(QQ.value)
              }
            })]
          })
        })
      },
      Mz = QQ => {
        let {
          settingKey: WQ,
          label: XQ,
          range: wQ,
          format: qQ
        } = QQ;
        const TQ = (0, rQ.m)();
        return (0, fQ.jsx)(Yz.h, {
          name: XQ,
          min: wQ.min,
          max: wQ.max,
          step: wQ.step,
          padStep: wQ.step,
          initValue: TQ[WQ],
          format: qQ,
          onChange: QQ => {
            (0, rQ.l)({
              [WQ]: (0, Oz.A)(QQ, wQ)
            })
          }
        })
      };
    var Qs = XQ(9220),
      Ws = XQ(9224);
    const Xs = QQ => QQ instanceof DOMException && ("SecurityError" === QQ.name || "NotAllowedError" === QQ.name),
      ws = QQ => {
        const [WQ] = [...QQ.controllers].sort(((QQ, WQ) => Ws.o[QQ] - Ws.o[WQ]));
        return Ws.l[WQ]
      },
      qs = QQ => {
        (0, Qs.d)().allowPhoneMotion().catch((WQ => {
          QQ && Xs(WQ) ? QQ() : console.warn("Could not enable the motion sensor", WQ)
        }))
      },
      Ts = {
        waiting: "controller:settingsGyroPhoneWaiting",
        noSensor: "controller:settingsGyroPhoneNoSensor",
        on: "controller:settingsGyroPhoneOn",
        denied: "controller:settingsGyroPhoneDenied"
      },
      zs = QQ => {
        let {
          status: WQ
        } = QQ;
        const {
          t: XQ
        } = (0, qQ.C)(), [wQ, TQ] = (0, uQ.useState)(null), zQ = `${WQ.controllers.join(",")}|${WQ.phoneMotion}`;
        (0, uQ.useEffect)((() => {
          TQ(null)
        }), [zQ]);
        const sQ = () => {
          (0, Qs.d)().connectController().then((QQ => {
            TQ(QQ > 0 ? "openFailed" : null)
          })).catch((QQ => {
            Xs(QQ) ? TQ("needsClick") : console.warn("Could not connect motion controller", QQ)
          }))
        };
        if (WQ.hidSupported) {
          let QQ = XQ("controller:settingsGyroConnectHint");
          return "needsClick" === wQ ? QQ = XQ("controller:settingsGyroConnectNeedsClick") : "openFailed" === wQ ? QQ = XQ("controller:settingsGyroOpenFailed") : WQ.controllers.length > 0 && (QQ = XQ("controller:settingsGyroConnected", {
            name: ws(WQ)
          })), (0, fQ.jsx)("div", {
            className: "SettingBox ControllerChoiceSetting",
            children: (0, fQ.jsxs)("div", {
              className: "ControllerChoiceRow",
              children: [(0, fQ.jsx)("div", {
                className: "ControllerSettingsHint",
                children: QQ
              }), (0, fQ.jsx)(Rz.h, {
                onClick: sQ,
                children: XQ("controller:settingsGyroConnect")
              })]
            })
          })
        }
        if ("needsPermission" === WQ.phoneMotion) return (0, fQ.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, fQ.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: ["needsTap" === wQ && (0, fQ.jsx)("div", {
              className: "ControllerSettingsHint",
              children: XQ("controller:settingsGyroAllowNeedsTap")
            }), (0, fQ.jsx)(Rz.h, {
              onClick: () => {
                qs((() => {
                  TQ("needsTap")
                }))
              },
              children: XQ("controller:settingsGyroAllowMotion")
            })]
          })
        });
        const FQ = Ts[WQ.phoneMotion];
        return FQ ? (0, fQ.jsx)("div", {
          className: "ControllerSettingsHint",
          children: XQ(FQ)
        }) : null
      },
      ss = () => {
        const {
          t: QQ
        } = (0, qQ.C)(), WQ = (0, rQ.m)(), XQ = (0, Qs.f)(), wQ = (0, IQ.x)(), TQ = !XQ.hidSupported && XQ.phoneSupported && !XQ.padConnected, zQ = (XQ.hidSupported || XQ.phoneSupported) && !TQ, sQ = (0, gQ.g)("pause");
        return (0, fQ.jsxs)(fQ.Fragment, {
          children: [(0, fQ.jsx)(Kz, {
            text: QQ("controller:settingsGyro")
          }), TQ && (0, fQ.jsx)("div", {
            className: "ControllerSettingsHint",
            children: QQ("controller:settingsGyroPhoneNeedsController")
          }), !zQ && !TQ && (0, fQ.jsx)("div", {
            className: "ControllerSettingsHint",
            children: QQ(XQ.hidBlocked || XQ.phoneBlocked ? "controller:settingsGyroBlocked" : "controller:settingsGyroUnsupported")
          }), zQ && (0, fQ.jsx)(Yz.e, {
            label: QQ(XQ.hidSupported ? "controller:settingsGyroToggle" : "controller:settingsGyroTogglePhone"),
            checked: WQ.gyroAiming,
            onClick: QQ => {
              var WQ, XQ;
              (0, rQ.l)({
                gyroAiming: QQ
              });
              const wQ = null === (WQ = null === (XQ = navigator.userActivation) || void 0 === XQ ? void 0 : XQ.isActive) || void 0 === WQ || WQ;
              if (!QQ || !wQ) return;
              const qQ = (0, Qs.d)(),
                TQ = qQ.getStatus();
              TQ.hidSupported ? qQ.connectControllerIfNoneGranted().catch((QQ => {
                console.warn("Motion controller picker unavailable", QQ)
              })) : "needsPermission" === TQ.phoneMotion && qs()
            },
            circleInfoText: QQ(XQ.hidSupported ? "controller:settingsGyroToggleInfo" : "controller:settingsGyroToggleInfoPhone")
          }), zQ && XQ.hidSupported && (0, fQ.jsx)("div", {
            className: "ControllerSettingsHint",
            children: QQ("controller:settingsGyroSteamHint")
          }), zQ && WQ.gyroAiming && (0, fQ.jsxs)(fQ.Fragment, {
            children: [(0, fQ.jsx)(zs, {
              status: XQ
            }), (0, fQ.jsx)(Mz, {
              settingKey: "gyroSensitivity",
              label: QQ("controller:settingsGyroSensitivity"),
              range: Oz.R,
              format: Oz.K
            }), (0, fQ.jsx)(mz, {
              label: QQ("controller:settingsGyroActivation"),
              hint: "aiming" === WQ.gyroActivation && (0, fQ.jsx)(Nz.b, {
                text: QQ("controller:settingsGyroAimingHint", {
                  button: Nz.c
                }),
                glyph: (0, gQ.g)("use")
              }),
              options: Oz.O,
              value: WQ.gyroActivation,
              onChange: QQ => {
                (0, rQ.l)({
                  gyroActivation: QQ
                })
              }
            }), "button" === WQ.gyroActivation && (0, fQ.jsx)(mz, {
              label: QQ("controller:settingsGyroButton"),
              hint: QQ("controller:settingsGyroButtonHint"),
              options: Oz.t.filter((QQ => QQ !== sQ || QQ === WQ.gyroButton)).map((QQ => ({
                label: bq(wQ, QQ),
                value: QQ
              }))),
              value: WQ.gyroButton,
              onChange: QQ => {
                (0, rQ.l)({
                  gyroButton: QQ
                })
              }
            })]
          })]
        })
      };
    var Fs = XQ(1927);
    const Ps = () => {
      const {
        t: QQ
      } = (0, qQ.C)(), WQ = (0, rQ.m)(), XQ = (0, IQ.x)();
      return (0, fQ.jsxs)(fQ.Fragment, {
        children: [(0, fQ.jsx)(Kz, {
          text: QQ("controller:settingsAccessibility")
        }), (0, fQ.jsx)(Yz.e, {
          label: QQ("controller:settingsSwapConfirmBack"),
          checked: (0, gQ.C)(WQ.swapConfirmBack, XQ),
          onClick: QQ => {
            (0, rQ.l)({
              swapConfirmBack: QQ === (0, gQ.C)(null, XQ) ? null : QQ
            }), Fs.g.showMessage({
              translationKey: "controller:settingsSwapToast"
            })
          },
          circleInfoText: QQ("controller:settingsSwapConfirmBackInfo")
        }), (0, fQ.jsx)(mz, {
          label: QQ("controller:settingsButtonRepeat"),
          hint: QQ("controller:settingsButtonRepeatHint"),
          options: Oz.s,
          value: WQ.buttonRepeat,
          onChange: QQ => {
            (0, rQ.l)({
              buttonRepeat: QQ
            })
          }
        }), (0, fQ.jsx)(mz, {
          label: QQ("controller:settingsTapHoldTime"),
          hint: QQ("controller:settingsTapHoldTimeHint"),
          options: Oz.rb,
          value: WQ.tapHoldTime,
          onChange: QQ => {
            (0, rQ.l)({
              tapHoldTime: QQ
            })
          }
        }), (0, fQ.jsx)(mz, {
          label: QQ("controller:settingsEmoteButton"),
          hint: QQ("wheel" === WQ.emoteButton ? "controller:settingsEmoteButtonWheelHint" : "controller:settingsEmoteButtonTapHoldHint"),
          options: Oz.G,
          value: WQ.emoteButton,
          onChange: QQ => {
            (0, rQ.l)({
              emoteButton: QQ
            })
          }
        }), (0, fQ.jsx)(mz, {
          label: QQ("controller:settingsAttackMode"),
          hint: QQ("toggle" === WQ.attackMode ? "controller:settingsAttackToggleHint" : "controller:settingsAttackHoldHint"),
          options: Oz.o,
          value: WQ.attackMode,
          onChange: QQ => {
            (0, rQ.l)({
              attackMode: QQ
            })
          }
        }), (0, fQ.jsx)(Yz.e, {
          label: QQ("controller:settingsLargePointer"),
          checked: WQ.largePointer,
          onClick: QQ => {
            (0, rQ.l)({
              largePointer: QQ
            })
          },
          circleInfoText: QQ("controller:settingsLargePointerInfo")
        })]
      })
    };
    var gs = XQ(9228);
    const rs = new class {
        constructor(QQ) {
          this.router = QQ, this.current = null
        }
        claim(QQ, WQ) {
          const XQ = this.current;
          XQ && (this.current = null, XQ.release(), XQ.onTakenOver());
          const wQ = this.router.register({
              ...QQ,
              name: "capture"
            }),
            qQ = {
              release: wQ,
              onTakenOver: WQ
            };
          return this.current = qQ, () => {
            this.current === qQ && (this.current = null), wQ()
          }
        }
      }(JQ.b),
      Is = QQ => {
        (0, uQ.useEffect)((() => {
          if (!QQ) return;
          const WQ = QQ();
          let XQ = !1;
          const wQ = () => {
              XQ || (XQ = !0, WQ.onEnd())
            },
            qQ = rs.claim({
              isActive: () => !XQ,
              onFrame: QQ => {
                WQ.onFrame(QQ, wQ)
              }
            }, wQ),
            TQ = void 0 === WQ.timeoutMs ? void 0 : window.setTimeout(wQ, WQ.timeoutMs),
            zQ = QQ => {
              "Escape" === QQ.key && (QQ.preventDefault(), QQ.stopPropagation(), wQ())
            };
          return window.addEventListener("keydown", zQ, !0), () => {
            XQ = !0, qQ(), window.clearTimeout(TQ), window.removeEventListener("keydown", zQ, !0)
          }
        }), [QQ])
      },
      Bs = QQ => {
        let {
          row: WQ,
          capturing: XQ,
          onCapture: wQ,
          holdFillRef: TQ,
          onRebind: zQ,
          swapped: sQ
        } = QQ;
        const {
          t: FQ
        } = (0, qQ.C)();
        if ("fixed" === WQ.kind) return (0, fQ.jsx)("div", {
          className: "ControlRow PadControlRow PadControlRowFixed",
          children: (0, fQ.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, fQ.jsx)("div", {
              className: "ControlName",
              children: FQ(WQ.labelKey)
            }), (0, fQ.jsx)("div", {
              className: "ControlBindingsContainer",
              children: (0, fQ.jsx)("div", {
                className: "ControlBindingsList",
                children: (0, fQ.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  children: (0, fQ.jsx)(vq, {
                    glyph: "move" === WQ.stick ? (0, gQ.n)() : (0, gQ.l)()
                  })
                })
              })
            })]
          })
        });
        const {
          action: PQ
        } = WQ, JQ = (0, gQ.g)(PQ), rQ = (0, gQ.j)(PQ), IQ = JQ !== rQ && (0, gQ.b)(PQ, rQ);
        return (0, fQ.jsxs)("div", {
          className: kQ()("ControlRow PadControlRow", {
            Capturing: XQ
          }),
          children: [(0, fQ.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, fQ.jsx)("div", {
              className: "ControlName",
              children: FQ(Oz.j[PQ])
            }), (0, fQ.jsxs)("div", {
              className: "ControlBindingsContainer",
              children: [!XQ && (0, fQ.jsxs)("div", {
                className: "ControlBindingsList",
                children: [(0, fQ.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    wQ(PQ)
                  },
                  children: (0, fQ.jsx)(vq, {
                    glyph: JQ
                  })
                }), IQ && (0, fQ.jsx)("div", {
                  className: "ControlBinding PadBindingReset",
                  title: FQ("controller:settingsReset"),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    zQ(PQ, rQ)
                  },
                  children: (0, fQ.jsx)(cz.d, {
                    name: "arrows-rotate"
                  })
                })]
              }), XQ && (0, fQ.jsxs)("div", {
                className: "ControlBindingAddInput",
                children: [(0, fQ.jsxs)("div", {
                  className: "PadCaptureBox",
                  children: [(0, fQ.jsx)("span", {
                    children: FQ("controller:settingsCapturePrompt")
                  }), (0, fQ.jsx)("div", {
                    ref: TQ,
                    className: "PadCaptureHoldFill"
                  })]
                }), (0, fQ.jsx)("div", {
                  className: "ControlBindingAddCancel",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    wQ(null)
                  },
                  children: "\xd7"
                })]
              }), XQ && (0, fQ.jsx)("div", {
                className: "PadCaptureHint",
                children: (0, fQ.jsx)(Nz.b, {
                  text: FQ((0, gQ.b)(PQ, (0, gQ.g)("menuBack")) ? "controller:settingsCaptureCancelOrBindHint" : "controller:settingsCaptureCancelHint", {
                    button: Nz.c
                  }),
                  glyph: (0, gQ.g)("menuBack")
                })
              })]
            })]
          }), sQ.map((QQ => (0, fQ.jsx)("div", {
            className: "ControlRowWarning PadSwapNotice",
            children: (0, fQ.jsx)(Nz.b, {
              text: FQ("controller:settingsSwapNotice", {
                action: FQ(Oz.j[QQ]),
                button: Nz.c
              }),
              glyph: (0, gQ.g)(QQ)
            })
          }, QQ))), XQ && (0, fQ.jsx)("div", {
            className: "PadCaptureTimer",
            style: {
              animationDuration: `${Oz.w}ms`
            }
          })]
        })
      },
      ys = [],
      Vs = QQ => {
        let {
          layoutSetting: WQ
        } = QQ;
        const {
          t: XQ
        } = (0, qQ.C)(), wQ = (0, rQ.m)();
        (0, IQ.x)();
        const TQ = (0, uQ.useRef)(null),
          [zQ, sQ] = (0, uQ.useState)(null),
          FQ = (0, uQ.useCallback)(((QQ, WQ) => {
            const XQ = (0, rQ.g)().bindings;
            (0, gQ.v)(QQ, WQ);
            const wQ = (0, gQ.o)(XQ, QQ);
            sQ(wQ.length > 0 ? {
              action: QQ,
              swapped: wQ
            } : null)
          }), []),
          [PQ, BQ] = ((QQ, WQ) => {
            const [XQ, wQ] = (0, uQ.useState)(null), qQ = (0, uQ.useMemo)((() => XQ ? () => {
              const qQ = (0, gQ.g)("menuBack"),
                TQ = new Oz.d(qQ, (0, gQ.g)("menuConfirm"), (QQ => (0, gQ.b)(XQ, QQ)));
              return {
                onFrame: (wQ, zQ) => {
                  var sQ;
                  const FQ = wQ.frame.timestampMs,
                    PQ = TQ.update({
                      ...wQ,
                      isDown: QQ => (0, jQ.O)(wQ.frame.values, QQ)
                    }, FQ);
                  null === (sQ = QQ.current) || void 0 === sQ || sQ.style.setProperty("width", 100 * TQ.getBindHoldProgress(FQ) + "%"), PQ && ("bind" === PQ.kind ? (JQ.b.consumeButton(PQ.button), WQ(XQ, PQ.button)) : JQ.b.consumeButton(qQ), zQ())
                },
                onEnd: () => {
                  wQ(null)
                },
                timeoutMs: Oz.w
              }
            } : null), [XQ, QQ, WQ]);
            return Is(qQ), [XQ, wQ]
          })(TQ, FQ),
          yQ = QQ => {
            QQ && sQ(null), BQ(QQ)
          };
        (0, uQ.useEffect)((() => {
          if (!zQ) return;
          const QQ = window.setTimeout((() => {
            sQ(null)
          }), Oz.ob);
          return () => {
            window.clearTimeout(QQ)
          }
        }), [zQ]);
        const VQ = !wQ.swapSticks && 0 === Object.keys(wQ.bindings).length;
        return (0, fQ.jsxs)("div", {
          className: "ControlsContainer PadControlsContainer",
          children: [(0, fQ.jsx)("div", {
            className: "SliderText",
            children: XQ("controller:settingsRemap")
          }), (0, fQ.jsx)("div", {
            className: "ControllerSettingsHint",
            children: XQ("controller:settingsRemapHint")
          }), (0, fQ.jsx)(Rz.P, {
            className: "ResetBindingsButton PadResetAllButton",
            disabled: VQ,
            onClick: () => {
              yQ(null), sQ(null), (0, gQ.y)()
            },
            children: XQ("controller:settingsResetAll")
          }), WQ, Oz.jb.map(((QQ, WQ) => (0, fQ.jsx)(gs.d, {
            title: XQ(QQ.titleKey),
            defaultOpen: 0 === WQ,
            children: QQ.rows.map((QQ => (0, fQ.jsx)(Bs, {
              row: QQ,
              capturing: "action" === QQ.kind && QQ.action === PQ,
              onCapture: yQ,
              holdFillRef: TQ,
              onRebind: FQ,
              swapped: "action" === QQ.kind && (null === zQ || void 0 === zQ ? void 0 : zQ.action) === QQ.action ? zQ.swapped : ys
            }, "action" === QQ.kind ? QQ.action : QQ.labelKey)))
          }, QQ.titleKey)))]
        })
      },
      Ds = QQ => {
        let {
          deadzone: WQ,
          dotRef: XQ,
          labelKey: wQ
        } = QQ;
        const {
          t: TQ
        } = (0, qQ.C)();
        return (0, fQ.jsxs)("div", {
          className: "ControllerTesterStick",
          children: [(0, fQ.jsxs)("div", {
            className: "ControllerTesterStickCircle",
            children: [(0, fQ.jsx)("div", {
              className: "ControllerTesterDeadzone",
              style: {
                width: 100 * WQ + "%",
                height: 100 * WQ + "%"
              }
            }), (0, fQ.jsx)("div", {
              ref: XQ,
              className: "ControllerTesterDot"
            })]
          }), (0, fQ.jsx)("div", {
            className: "ControllerTesterStickLabel",
            children: TQ(wQ)
          })]
        })
      },
      ps = (QQ, WQ, XQ, wQ) => {
        var qQ;
        QQ && (QQ.style.left = 50 + 50 * Math.max(-1, Math.min(1, WQ.x)) + "%", QQ.style.top = 50 + 50 * Math.max(-1, Math.min(1, WQ.y)) + "%", null === (qQ = QQ.parentElement) || void 0 === qQ || qQ.classList.toggle("Active", wQ || Math.hypot(WQ.x, WQ.y) > XQ))
      },
      Gs = QQ => {
        const WQ = {
            deadzone: QQ.moveDeadzone,
            labelKey: "controller:settingsActionMove"
          },
          XQ = {
            deadzone: QQ.lookDeadzone,
            labelKey: "controller:settingsActionLook"
          };
        return QQ.swapSticks ? {
          left: XQ,
          right: WQ
        } : {
          left: WQ,
          right: XQ
        }
      },
      Us = () => {
        const {
          t: QQ
        } = (0, qQ.C)(), WQ = (() => {
          const [QQ, WQ] = (0, uQ.useState)((() => zQ.i.getActivePad()));
          return (0, Vq.f)(zQ.e, (() => {
            WQ(zQ.i.getActivePad())
          })), QQ
        })(), XQ = Gs((0, rQ.m)()), wQ = (0, uQ.useRef)(null), TQ = (0, uQ.useRef)(null), sQ = (0, uQ.useRef)([]), FQ = (0, uQ.useRef)(null), PQ = (0, uQ.useRef)(null), [IQ, BQ] = (QQ => {
          const [WQ, XQ] = (0, uQ.useState)(!1), wQ = (0, uQ.useMemo)((() => WQ ? () => {
            const WQ = (0, gQ.g)("menuBack"),
              wQ = new Oz.f;
            return {
              onFrame: (XQ, qQ) => {
                var TQ;
                const zQ = wQ.update({
                  pressed: XQ.wasPressed(WQ),
                  Ds: XQ.isHeld(WQ)
                }, XQ.frame.timestampMs);
                null === (TQ = QQ.current) || void 0 === TQ || TQ.style.setProperty("width", 100 * zQ + "%"), zQ >= 1 && (JQ.b.consumeButton(WQ), qQ())
              },
              onEnd: () => {
                XQ(!1)
              }
            }
          } : null), [WQ, QQ]);
          return Is(wQ), [WQ, XQ]
        })(TQ);
        (0, uQ.useEffect)((() => {
          const QQ = QQ => {
            for (const XQ of jQ.$) {
              const WQ = (0, jQ.s)(XQ),
                wQ = sQ.current[WQ];
              if (!wQ) continue;
              const qQ = QQ.values[WQ];
              wQ.classList.toggle("Pressed", qQ >= jQ.z), (0, jQ.S)(WQ) && wQ.style.setProperty("--trigger-fill", `${Math.round(100*qQ)}%`)
            }
            const WQ = Gs((0, rQ.g)());
            ps(FQ.current, QQ.leftStick, WQ.left.deadzone, QQ.values[(0, jQ.s)("LS")] >= jQ.z), ps(PQ.current, QQ.rightStick, WQ.right.deadzone, QQ.values[(0, jQ.s)("RS")] >= jQ.z)
          };
          return WQ || QQ((0, jQ.w)()), zQ.i.onFrame(QQ)
        }), [WQ]), (0, uQ.useEffect)((() => {
          WQ || BQ(!1)
        }), [WQ, BQ]), (0, uQ.useEffect)((() => {
          var QQ;
          IQ && (null === (QQ = wQ.current) || void 0 === QQ || QQ.scrollIntoView({
            block: "nearest"
          }))
        }), [IQ]);
        const yQ = Oz.hb.find((QQ => QQ.value === (null === WQ || void 0 === WQ ? void 0 : WQ.family)));
        return (0, fQ.jsxs)("div", {
          ref: wQ,
          className: kQ()("SettingBox ControllerTester", {
            Testing: IQ
          }),
          children: [(0, fQ.jsxs)("div", {
            className: "ControllerTesterHeader",
            children: [(0, fQ.jsxs)("div", {
              className: "ControllerTesterInfo",
              children: [WQ && (0, fQ.jsx)("div", {
                children: QQ("controller:settingsTesterFamily", {
                  family: yQ ? QQ(yQ.labelKey) : WQ.family
                })
              }), WQ && (0, fQ.jsx)("div", {
                className: "ControllerTesterPadId",
                children: WQ.id
              }), !WQ && (0, fQ.jsx)("div", {
                children: QQ("controller:settingsTesterNoPad")
              })]
            }), (WQ || IQ) && (0, fQ.jsx)(Rz.h, {
              className: "ControllerTesterToggle",
              onClick: () => {
                BQ(!IQ)
              },
              children: QQ(IQ ? "controller:settingsTesterStop" : "controller:settingsTesterStart")
            })]
          }), WQ && !IQ && (0, fQ.jsx)("div", {
            className: "ControllerSettingsHint",
            children: QQ("controller:settingsTesterHint")
          }), IQ && (0, fQ.jsxs)("div", {
            className: "ControllerTesterBanner",
            children: [(0, fQ.jsx)(Nz.b, {
              text: QQ("controller:settingsTesterTesting", {
                button: Nz.c
              }),
              glyph: (0, gQ.g)("menuBack")
            }), (0, fQ.jsx)("div", {
              ref: TQ,
              className: "ControllerTesterExitFill"
            })]
          }), (0, fQ.jsxs)("div", {
            className: "ControllerTesterBody",
            children: [(0, fQ.jsx)(Ds, {
              deadzone: XQ.left.deadzone,
              dotRef: FQ,
              labelKey: XQ.left.labelKey
            }), (0, fQ.jsx)("div", {
              className: "ControllerTesterButtons",
              children: jQ.$.map((QQ => {
                const XQ = (0, jQ.s)(QQ);
                return (0, fQ.jsx)("div", {
                  ref: QQ => {
                    sQ.current[XQ] = QQ
                  },
                  className: (0, jQ.S)(XQ) ? "ControllerTesterButton ControllerTesterTrigger" : "ControllerTesterButton",
                  children: (0, fQ.jsx)(vq, {
                    glyph: QQ,
                    family: null === WQ || void 0 === WQ ? void 0 : WQ.family
                  })
                }, QQ)
              }))
            }), (0, fQ.jsx)(Ds, {
              deadzone: XQ.right.deadzone,
              dotRef: PQ,
              labelKey: XQ.right.labelKey
            })]
          })]
        })
      },
      bs = (0, uQ.memo)((function() {
        const {
          t: QQ
        } = (0, qQ.C)(), WQ = (0, rQ.m)(), [XQ, wQ] = (0, uQ.useState)(!1);
        return (0, uQ.useEffect)((() => {
          if (!XQ) return;
          const QQ = window.setTimeout((() => {
            wQ(!1)
          }), Oz.ob);
          return () => {
            window.clearTimeout(QQ)
          }
        }), [XQ]), (0, fQ.jsxs)("div", {
          className: "SettingsMenuRightInner ControllerCategory",
          children: [(0, fQ.jsx)(Kz, {
            text: QQ("controller:settingsLook")
          }), (0, fQ.jsx)(Mz, {
            settingKey: "lookSensitivityX",
            label: QQ("controller:settingsLookSensitivityX"),
            range: Oz.lb,
            format: Oz.N
          }), (0, fQ.jsx)(Mz, {
            settingKey: "lookSensitivityY",
            label: QQ("controller:settingsLookSensitivityY"),
            range: Oz.lb,
            format: Oz.N
          }), (0, fQ.jsx)(Mz, {
            settingKey: "aimLookSensitivity",
            label: QQ("controller:settingsAimLookSensitivity"),
            range: Oz.n,
            format: Oz.N
          }), (0, fQ.jsx)(mz, {
            label: QQ("controller:settingsLookCurve"),
            hint: QQ("controller:settingsLookCurveHint"),
            options: Oz.$,
            value: WQ.lookCurve,
            onChange: QQ => {
              (0, rQ.l)({
                lookCurve: QQ
              })
            }
          }), (0, fQ.jsx)(Yz.e, {
            label: QQ("controller:settingsInvertLookX"),
            checked: WQ.invertLookX,
            onClick: QQ => {
              (0, rQ.l)({
                invertLookX: QQ
              })
            }
          }), (0, fQ.jsx)(Yz.e, {
            label: QQ("controller:settingsInvertLookY"),
            checked: WQ.invertLookY,
            onClick: QQ => {
              (0, rQ.l)({
                invertLookY: QQ
              })
            }
          }), (0, fQ.jsx)(Mz, {
            settingKey: "lookDeadzone",
            label: QQ("controller:settingsLookDeadzone"),
            range: Oz.C,
            format: Oz.I
          }), (0, fQ.jsx)(ss, {}), (0, fQ.jsx)(Kz, {
            text: QQ("controller:settingsMovement")
          }), (0, fQ.jsx)(Mz, {
            settingKey: "moveDeadzone",
            label: QQ("controller:settingsMoveDeadzone"),
            range: Oz.C,
            format: Oz.I
          }), (0, fQ.jsx)(Yz.e, {
            label: QQ("controller:settingsAutoSprint"),
            checked: WQ.autoSprint,
            onClick: QQ => {
              (0, rQ.l)({
                autoSprint: QQ
              })
            },
            circleInfoText: QQ("controller:settingsAutoSprintInfo")
          }), (0, fQ.jsx)(mz, {
            label: QQ("controller:settingsSneak"),
            options: Oz.mb,
            value: WQ.sneakMode,
            onChange: QQ => {
              (0, rQ.l)({
                sneakMode: QQ
              })
            }
          }), (0, fQ.jsx)(Kz, {
            text: QQ("controller:settingsButtons")
          }), (0, fQ.jsx)(mz, {
            label: QQ("controller:settingsPromptFamily"),
            options: Oz.hb,
            value: WQ.promptFamily,
            onChange: QQ => {
              (0, rQ.l)({
                promptFamily: QQ
              })
            }
          }), (0, fQ.jsx)(Yz.e, {
            label: QQ("controller:settingsHideButtonHints"),
            checked: WQ.hideButtonHints,
            onClick: QQ => {
              (0, rQ.l)({
                hideButtonHints: QQ
              })
            }
          }), (0, fQ.jsx)(Yz.e, {
            label: QQ("controller:settingsVibration"),
            checked: WQ.vibration,
            onClick: QQ => {
              (0, rQ.l)({
                vibration: QQ
              }), QQ && zq("preview")
            }
          }), (0, fQ.jsx)(Mz, {
            settingKey: "cursorSpeed",
            label: QQ("controller:settingsCursorSpeed"),
            range: Oz.B,
            format: Oz.N
          }), (0, fQ.jsx)(Yz.e, {
            label: QQ("controller:settingsCursorMagnetism"),
            checked: WQ.cursorMagnetism,
            onClick: QQ => {
              (0, rQ.l)({
                cursorMagnetism: QQ
              })
            }
          }), (0, fQ.jsx)(Yz.e, {
            label: QQ("controller:settingsMenuBackToCategories"),
            checked: WQ.menuBackToCategories,
            onClick: QQ => {
              (0, rQ.l)({
                menuBackToCategories: QQ
              })
            }
          }), (0, fQ.jsx)(Vs, {
            layoutSetting: (0, fQ.jsxs)(fQ.Fragment, {
              children: [gQ.c.map((XQ => (0, fQ.jsx)(Yz.e, {
                label: QQ(Oz.V[XQ]),
                checked: (0, gQ.t)(XQ, WQ),
                onClick: QQ => {
                  wQ(!(0, gQ.D)(XQ, QQ))
                }
              }, XQ))), XQ && (0, fQ.jsx)("div", {
                className: "PadLayoutRefusedNotice",
                role: "status",
                children: QQ("controller:settingsLayoutRefusedToast")
              })]
            })
          }), (0, fQ.jsx)(Ps, {}), (0, fQ.jsx)(Kz, {
            text: QQ("controller:settingsAlternatives")
          }), (0, fQ.jsx)("div", {
            className: "ControllerSettingsHint",
            children: QQ("controller:settingsAlternativesHint")
          }), (0, fQ.jsx)(mz, {
            label: QQ("controller:settingsMenuNavigation"),
            hint: QQ("controller:settingsMenuNavigationHint"),
            options: Oz.db,
            value: WQ.menuNavigation,
            onChange: QQ => {
              (0, rQ.l)({
                menuNavigation: QQ
              })
            }
          }), (0, fQ.jsx)(mz, {
            label: QQ("controller:settingsInventoryNavigation"),
            hint: QQ("controller:settingsInventoryNavigationHint"),
            options: Oz.U,
            value: WQ.inventoryNavigation,
            onChange: QQ => {
              (0, rQ.l)({
                inventoryNavigation: QQ
              })
            }
          }), (0, fQ.jsx)(mz, {
            label: QQ("controller:settingsQuickChat"),
            hint: QQ("controller:settingsQuickChatHint"),
            options: Oz.ib,
            value: WQ.quickChat,
            onChange: QQ => {
              (0, rQ.l)({
                quickChat: QQ
              })
            }
          }), (0, fQ.jsx)(mz, {
            label: QQ("controller:settingsLeaderboardButton"),
            hint: QQ("controller:settingsLeaderboardButtonHint"),
            options: Oz.X,
            value: WQ.leaderboardButton,
            onChange: QQ => {
              (0, rQ.l)({
                leaderboardButton: QQ
              })
            }
          }), (0, fQ.jsx)(Kz, {
            text: QQ("controller:settingsTester")
          }), (0, fQ.jsx)(Us, {})]
        })
      }));
    (0, qQ.d)(wQ);
    for (const ls of (0, TQ.q)()) ls.connected ? zQ.i.handleConnectionEvent(ls) : zQ.i.handleDisconnectionEvent(ls);
    const vs = () => null !== zQ.i.getActivePad(),
      ds = () => qX.getState(),
      Hs = () => qX.isSteppingSlots(),
      as = (QQ, WQ) => {
        const XQ = Qq.getFocused();
        Qq.isActive() && XQ && QQ.contains(XQ) && Qq.setFocus(WQ, {
          scroll: !1
        })
      }
  },
  8554: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => FQ,
      h: () => PQ
    });
    var wQ = XQ(1480),
      qQ = XQ(1475);
    const TQ = {
        "054c": "playstation",
        "057e": "nintendo"
      },
      zQ = "28de",
      sQ = new Set(["1205"]),
      FQ = (QQ, WQ) => {
        const XQ = (0, wQ.e)(QQ);
        if ((null === XQ || void 0 === XQ ? void 0 : XQ.vendor) === zQ) return sQ.has(XQ.product) ? "steamdeck" : "xbox";
        if (XQ && TQ[XQ.vendor]) return TQ[XQ.vendor];
        if ((0, qQ.e)(QQ)) return "nintendo";
        const FQ = `${QQ} ${null!==WQ&&void 0!==WQ?WQ:""}`.toLowerCase();
        return /dualsense|dualshock|playstation|sony/.test(FQ) ? "playstation" : /nintendo|switch|joy-con|pro controller/.test(FQ) ? "nintendo" : /steam deck/.test(FQ) ? "steamdeck" : "xbox"
      },
      PQ = QQ => {
        var WQ;
        return (null === (WQ = (0, wQ.e)(QQ)) || void 0 === WQ ? void 0 : WQ.vendor) === zQ
      }
  },
  8596: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => PQ,
      c: () => sQ
    });
    var wQ = XQ(8545);
    const qQ = ["capture", "keyboard", "wheel", "inventory", "cursor", "focus", "gameplay"],
      TQ = new Set(["capture", "gameplay"]),
      zQ = ["Up", "Down", "Left", "Right"],
      sQ = QQ => zQ.includes(QQ),
      FQ = .25;
    const PQ = new class {
      constructor() {
        this.consumers = new Map, this.activeName = null, this.Ds = new Array(wQ.Z).fill(!1), this.previousHeld = new Array(wQ.Z).fill(!1), this.consumedButtons = new Array(wQ.Z).fill(!1), this.suppressedReleases = new Array(wQ.Z).fill(!1), this.wakeOwned = new Array(wQ.Z).fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.peek = null, this.lastFrame = (0, wQ.w)()
      }
      register(QQ) {
        return this.consumers.has(QQ.name) && console.warn(`Controller consumer "${QQ.name}" registered twice; the newer one replaces it.`), this.consumers.set(QQ.name, QQ), () => {
          var WQ;
          this.consumers.get(QQ.name) === QQ && (this.activeName === QQ.name ? (this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()) : (null === (WQ = this.peek) || void 0 === WQ ? void 0 : WQ.over) === QQ.name && (this.peek = null), this.consumers.delete(QQ.name))
        }
      }
      getActiveConsumerName() {
        return this.activeName
      }
      isButtonHeld(QQ) {
        return this.Ds[(0, wQ.s)(QQ)]
      }
      getLastFrame() {
        return this.lastFrame
      }
      clear() {
        this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()
      }
      reset() {
        this.deactivateCurrent(), this.activeName = null, this.Ds = new Array(wQ.Z).fill(!1), this.previousHeld = new Array(wQ.Z).fill(!1), this.consumedButtons.fill(!1), this.suppressedReleases.fill(!1), this.wakeOwned.fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.lastFrame = (0, wQ.w)()
      }
      dispatch(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.lastFrame = QQ, this.previousHeld = this.Ds, this.Ds = (0, wQ.u)(QQ.values, this.previousHeld);
        for (let TQ = 0; TQ < wQ.Z; TQ++) this.suppressedReleases[TQ] = !this.Ds[TQ] && this.consumedButtons[TQ], this.Ds[TQ] || (this.consumedButtons[TQ] = !1), this.wakeOwned[TQ] && (this.Ds[TQ] ? (this.consumedButtons[TQ] = !0, this.wakeOwned[TQ] = !1) : QQ.values[TQ] < wQ.Y && (this.wakeOwned[TQ] = !1));
        Math.hypot(QQ.leftStick.x, QQ.leftStick.y) < FQ && (this.leftStickConsumed = !1), Math.hypot(QQ.rightStick.x, QQ.rightStick.y) < FQ && (this.rightStickConsumed = !1);
        const qQ = this.pickActive();
        if ((null === qQ || void 0 === qQ ? void 0 : qQ.name) !== this.activeName) {
          var zQ, sQ, PQ, gQ, JQ, rQ;
          const QQ = this.activeName,
            WQ = {
              left: !this.leftStickConsumed,
              right: !this.rightStickConsumed
            },
            XQ = null !== (zQ = null === qQ || void 0 === qQ || null === (sQ = qQ.peek) || void 0 === sQ ? void 0 : sQ.call(qQ)) && void 0 !== zQ ? zQ : null,
            TQ = null === QQ && !!XQ && !(null === (PQ = this.consumers.get(XQ.over)) || void 0 === PQ || !PQ.onPeekFrame),
            FQ = XQ && (XQ.over === QQ || TQ) ? XQ : null,
            IQ = null !== this.peek && this.peek.over === (null === qQ || void 0 === qQ ? void 0 : qQ.name) ? this.peek : null;
          this.deactivateCurrent(null !== FQ, null !== IQ), this.activeName = null !== (gQ = null === qQ || void 0 === qQ ? void 0 : qQ.name) && void 0 !== gQ ? gQ : null, null === QQ || this.handOffPending || this.consumeAllHeld();
          const jQ = null === (JQ = null !== FQ && void 0 !== FQ ? FQ : IQ) || void 0 === JQ ? void 0 : JQ.stick;
          "left" === jQ && WQ.left ? this.leftStickConsumed = !1 : "right" === jQ && WQ.right && (this.rightStickConsumed = !1), this.peek = FQ, qQ || null === QQ ? qQ && (null === (rQ = this.idleResume) || void 0 === rQ ? void 0 : rQ.name) === qQ.name && (this.idleResume.left && (this.leftStickConsumed = !1), this.idleResume.right && (this.rightStickConsumed = !1)) : this.idleResume = {
            name: QQ,
            left: WQ.left && this.leftStickConsumed,
            right: WQ.right && this.rightStickConsumed
          }, qQ && (this.idleResume = null);
          for (let qQ = 0; qQ < wQ.Z; qQ++) this.previousHeld[qQ] && !this.Ds[qQ] && (this.suppressedReleases[qQ] = !0)
        }
        var IQ, jQ;
        (this.handOffPending = !1, qQ) && (XQ && !TQ.has(qQ.name) && this.consumeWakePress(qQ), qQ.onFrame(this.buildInput(QQ, WQ, XQ)), this.peek && (null === (IQ = this.consumers.get(this.peek.over)) || void 0 === IQ || null === (jQ = IQ.onPeekFrame) || void 0 === jQ || jQ.call(IQ, this.buildInput(QQ, WQ, !1, this.peek.stick))))
      }
      consumeWakePress(QQ) {
        for (let qQ = 0; qQ < wQ.Z; qQ++) {
          var WQ, XQ;
          const TQ = wQ.$[qQ];
          (null !== (WQ = null === (XQ = QQ.wakePressActs) || void 0 === XQ ? void 0 : XQ.call(QQ, TQ)) && void 0 !== WQ ? WQ : zQ.includes(TQ)) || (this.Ds[qQ] ? this.consumedButtons[qQ] = !0 : this.lastFrame.values[qQ] >= wQ.X && (this.wakeOwned[qQ] = !0))
        }
      }
      pickActive() {
        for (const QQ of qQ) {
          const WQ = this.consumers.get(QQ);
          if (WQ && WQ.isActive()) return WQ
        }
        return null
      }
      deactivateCurrent() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        var XQ, wQ, qQ, TQ;
        this.activeName && (null === (XQ = this.consumers.get(this.activeName)) || void 0 === XQ || null === (wQ = XQ.onDeactivate) || void 0 === wQ || wQ.call(XQ, QQ));
        this.peek && !WQ && (null === (qQ = this.consumers.get(this.peek.over)) || void 0 === qQ || null === (TQ = qQ.onDeactivate) || void 0 === TQ || TQ.call(qQ, !1));
        this.peek = null
      }
      consumeAllHeld() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.idleResume = null;
        for (let qQ = 0; qQ < wQ.Z; qQ++) this.Ds[qQ] && (this.consumedButtons[qQ] = !0);
        const {
          leftStick: WQ,
          rightStick: XQ
        } = this.lastFrame;
        this.leftStickConsumed = "left" !== QQ && (this.leftStickConsumed || Math.hypot(WQ.x, WQ.y) >= FQ), this.rightStickConsumed = "right" !== QQ && (this.rightStickConsumed || Math.hypot(XQ.x, XQ.y) >= FQ)
      }
      handOffHeldInput() {
        this.handOffPending = !0
      }
      consumeButton(QQ) {
        const WQ = (0, wQ.s)(QQ);
        this.Ds[WQ] && (this.consumedButtons[WQ] = !0)
      }
      buildInput(QQ, WQ, XQ, qQ) {
        const TQ = this.Ds,
          zQ = this.previousHeld,
          sQ = qQ ? new Array(wQ.Z).fill(!0) : [...this.consumedButtons],
          FQ = qQ ? sQ : [...this.suppressedReleases],
          PQ = !this.leftStickConsumed && (!qQ || "left" === qQ),
          gQ = !this.rightStickConsumed && (!qQ || "right" === qQ);
        return {
          frame: QQ,
          dtMs: WQ,
          isHeld: QQ => {
            const WQ = (0, wQ.s)(QQ);
            return TQ[WQ] && !sQ[WQ]
          },
          wasPressed: QQ => {
            const WQ = (0, wQ.s)(QQ);
            return TQ[WQ] && !zQ[WQ] && !sQ[WQ]
          },
          wasReleased: QQ => {
            const WQ = (0, wQ.s)(QQ);
            return !TQ[WQ] && zQ[WQ] && !FQ[WQ]
          },
          value: WQ => {
            const XQ = (0, wQ.s)(WQ);
            return sQ[XQ] ? 0 : QQ.values[XQ]
          },
          leftStick: PQ ? QQ.leftStick : {
            x: 0,
            y: 0
          },
          rightStick: gQ ? QQ.rightStick : {
            x: 0,
            y: 0
          },
          wokeDevice: XQ
        }
      }
    }
  },
  8572: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => JQ.f,
      c: () => JQ.g,
      g: () => lQ,
      i: () => hQ,
      l: () => iQ,
      m: () => cQ
    });
    var wQ = XQ(61),
      qQ = XQ(31),
      TQ = XQ(1498),
      zQ = XQ(43),
      sQ = XQ(8580),
      FQ = XQ(8545),
      PQ = XQ(8563),
      gQ = XQ(8536),
      JQ = XQ(2083),
      rQ = XQ(8585);
    const IQ = {
        lookSensitivityX: 100,
        lookSensitivityY: 100,
        aimLookSensitivity: 100,
        invertLookX: !1,
        invertLookY: !1,
        lookCurve: "exponential",
        lookDeadzone: .12,
        moveDeadzone: .15,
        swapSticks: !1,
        autoSprint: !0,
        sneakMode: "toggle",
        tapHoldTime: "short",
        attackMode: "hold",
        promptFamily: "auto",
        hideButtonHints: !1,
        vibration: !0,
        cursorSpeed: 100,
        cursorMagnetism: !1,
        buttonRepeat: "default",
        largePointer: !1,
        menuBackToCategories: !0,
        swapConfirmBack: null,
        menuNavigation: "hybrid",
        inventoryNavigation: "hybrid",
        quickChat: "wheel",
        leaderboardButton: "shop",
        gyroAiming: !1,
        gyroSensitivity: 2,
        gyroActivation: "always",
        gyroButton: "RB",
        emoteButton: "tapHold",
        bindings: {}
      },
      jQ = "controllerSettings",
      BQ = ["bindings", "promptFamily", "hideButtonHints", "swapSticks", "swapConfirmBack", "leaderboardButton"],
      yQ = ["auto", ...sQ.c],
      VQ = (QQ, WQ) => "string" === typeof WQ && QQ.includes(WQ),
      DQ = QQ => WQ => "number" === typeof WQ && Number.isFinite(WQ) ? (0, rQ.A)(WQ, QQ) : void 0,
      pQ = QQ => "boolean" === typeof QQ ? QQ : void 0,
      GQ = QQ => WQ => VQ(QQ, WQ) ? WQ : void 0,
      UQ = {
        lookSensitivityX: DQ(rQ.lb),
        lookSensitivityY: DQ(rQ.lb),
        aimLookSensitivity: DQ(rQ.n),
        invertLookX: pQ,
        invertLookY: pQ,
        lookCurve: GQ(FQ.V),
        lookDeadzone: DQ(rQ.C),
        moveDeadzone: DQ(rQ.C),
        swapSticks: pQ,
        autoSprint: pQ,
        sneakMode: GQ(["toggle", "hold"]),
        tapHoldTime: GQ(["short", "medium", "long"]),
        attackMode: GQ(["hold", "toggle"]),
        promptFamily: GQ(yQ),
        hideButtonHints: pQ,
        vibration: pQ,
        cursorSpeed: DQ(rQ.B),
        cursorMagnetism: pQ,
        buttonRepeat: GQ(FQ.t),
        largePointer: pQ,
        menuBackToCategories: pQ,
        swapConfirmBack: pQ,
        menuNavigation: GQ(["hybrid", "focus", "cursor"]),
        inventoryNavigation: GQ(["hybrid", "slot", "cursor"]),
        quickChat: GQ(["wheel", "off"]),
        leaderboardButton: GQ(["shop", "leaderboard"]),
        gyroAiming: pQ,
        gyroSensitivity: DQ(rQ.R),
        gyroActivation: GQ(["always", "aiming", "button"]),
        gyroButton: GQ(FQ.$),
        emoteButton: GQ(["tapHold", "wheel"])
      },
      bQ = [{
        param: "padMenuNav",
        key: "menuNavigation"
      }, {
        param: "padInventoryNav",
        key: "inventoryNavigation"
      }, {
        param: "padQuickChat",
        key: "quickChat"
      }, {
        param: "padSneak",
        key: "sneakMode"
      }, {
        param: "padGyro",
        key: "gyroActivation"
      }, {
        param: "padLeaderboardButton",
        key: "leaderboardButton"
      }],
      vQ = QQ => {
        const WQ = {};
        if ("object" !== typeof QQ || null === QQ) return WQ;
        for (const [XQ, wQ] of Object.entries(QQ)) Object.prototype.hasOwnProperty.call(PQ.c, XQ) && VQ(FQ.$, wQ) && (WQ[XQ] = wQ);
        return WQ
      },
      dQ = QQ => {
        const WQ = {};
        for (const XQ of Object.keys(IQ))("bindings" === XQ ? Object.keys(QQ.bindings).length > 0 : QQ[XQ] !== IQ[XQ]) && (WQ[XQ] = QQ[XQ]);
        0 !== Object.keys(WQ).length ? zQ.i.setItem(jQ, WQ) : zQ.i.removeItem(jQ)
      };
    let HQ = (() => {
        const QQ = zQ.i.getItem(jQ),
          WQ = (QQ => {
            const WQ = "object" === typeof QQ && null !== QQ ? QQ : {},
              XQ = {
                ...IQ,
                bindings: vQ(WQ.bindings)
              };
            for (const qQ of Object.keys(UQ)) {
              const QQ = UQ[qQ](WQ[qQ]);
              void 0 !== QQ && (XQ[qQ] = QQ)
            }
            const wQ = Object.keys(WQ).filter((QQ => !!Object.prototype.hasOwnProperty.call(IQ, QQ) && ("bindings" === QQ ? "object" !== typeof WQ.bindings || null === WQ.bindings || Object.keys(WQ.bindings).length !== Object.keys(XQ.bindings).length : XQ[QQ] !== WQ[QQ])));
            return wQ.length > 0 && console.warn(`Stored controller settings had invalid values, replaced with defaults: ${wQ.join(", ")}`), XQ
          })(QQ);
        return null !== QQ && void 0 !== QQ && dQ(WQ), WQ
      })(),
      aQ = {
        ...HQ,
        ...(() => {
          if ("undefined" === typeof window) return {};
          const QQ = {},
            WQ = new URLSearchParams(window.location.search);
          for (const {
              param: XQ,
              key: wQ
            }
            of bQ) {
            const qQ = UQ[wQ](WQ.get(XQ));
            void 0 !== qQ && (QQ[wQ] = qQ)
          }
          return QQ
        })()
      };
    const lQ = () => aQ,
      hQ = () => {
        var QQ, WQ;
        const XQ = lQ().promptFamily;
        return "auto" !== XQ ? XQ : null !== (QQ = null === (WQ = gQ.i.getActivePad()) || void 0 === WQ ? void 0 : WQ.family) && void 0 !== QQ ? QQ : "xbox"
      },
      iQ = QQ => {
        const WQ = aQ;
        HQ = {
          ...HQ,
          ...QQ
        }, dQ(HQ), aQ = {
          ...aQ,
          ...QQ
        }, (QQ => {
          qQ.k.mB(JQ.g, aQ), BQ.some((WQ => QQ[WQ] !== aQ[WQ])) && qQ.k.mB(JQ.f, aQ)
        })(WQ)
      },
      cQ = () => {
        const [QQ, WQ] = (0, wQ.useState)(aQ);
        return (0, TQ.f)(JQ.g, WQ), QQ
      }
  },
  9037: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => qQ
    });
    const wQ = new Set(["Alt", "AltGraph", "Meta", "OS", "AudioVolumeUp", "AudioVolumeDown", "AudioVolumeMute", "MediaPlayPause", "MediaPlay", "MediaPause", "MediaStop", "MediaTrackNext", "MediaTrackPrevious", "BrowserBack", "BrowserForward", "BrowserHome", "GoBack", "LaunchApplication1", "LaunchApplication2", "LaunchMail", "PrintScreen", "Unidentified"]),
      qQ = QQ => wQ.has(QQ)
  },
  8536: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => BQ.d,
      i: () => pQ
    });
    var wQ = XQ(8545),
      qQ = XQ(8554);
    const TQ = .1,
      zQ = .3;
    class sQ {
      constructor() {
        this.deadzone = 0, this.anchor = null, this.steadyMs = 0, this.lastMs = null, this.returning = !0, this.anchorLearned = !1
      }
      observe(QQ, WQ) {
        const XQ = null === this.lastMs ? 0 : Math.min(Math.max(0, WQ - this.lastMs), 100);
        this.lastMs = WQ;
        const wQ = Math.hypot(QQ.x, QQ.y);
        if (wQ >= zQ) return this.anchor = null, void(this.returning = !0);
        wQ >= TQ || (this.returning = !1);
        const qQ = this.anchor;
        if (!qQ || Math.hypot(QQ.x - qQ.x, QQ.y - qQ.y) > .03) return this.anchorLearned && (this.returning = !1), this.anchor = {
          x: QQ.x,
          y: QQ.y
        }, this.steadyMs = 0, void(this.anchorLearned = !1);
        if (this.steadyMs += XQ, this.steadyMs < 1e3) return;
        const sQ = Math.max(wQ, Math.hypot(qQ.x, qQ.y));
        sQ < TQ ? this.deadzone = 0 : this.returning && (this.deadzone = sQ + .05, this.anchorLearned = !0)
      }
      getDeadzone() {
        return this.deadzone
      }
      apply(QQ) {
        return Math.hypot(QQ.x, QQ.y) < this.deadzone ? {
          x: 0,
          y: 0
        } : QQ
      }
    }
    const FQ = (QQ, WQ) => {
        var XQ, wQ;
        return null !== (XQ = QQ && (null === (wQ = Object.getOwnPropertyDescriptor(QQ, WQ)) || void 0 === wQ ? void 0 : wQ.get)) && void 0 !== XQ ? XQ : null
      },
      PQ = QQ => {
        const WQ = QQ.vendorName;
        return "string" === typeof WQ ? WQ : void 0
      },
      gQ = ((QQ, WQ) => {
        const XQ = FQ(QQ, "index"),
          wQ = FQ(QQ, "id"),
          qQ = FQ(QQ, "connected"),
          TQ = FQ(QQ, "mapping"),
          zQ = FQ(QQ, "buttons"),
          sQ = FQ(QQ, "axes"),
          gQ = FQ(WQ, "pressed"),
          JQ = FQ(WQ, "value");
        return XQ && wQ && qQ && TQ && zQ && sQ && gQ && JQ ? QQ => {
          const WQ = zQ.call(QQ),
            FQ = sQ.call(QQ),
            rQ = {
              index: Number(XQ.call(QQ)),
              id: String(wQ.call(QQ)),
              connected: !0 === qQ.call(QQ),
              mapping: String(TQ.call(QQ)),
              buttons: [],
              axes: [],
              vendorName: PQ(QQ)
            };
          for (let XQ = 0; XQ < WQ.length; XQ++) rQ.buttons.push({
            pressed: !0 === gQ.call(WQ[XQ]),
            value: Number(JQ.call(WQ[XQ]))
          });
          for (let XQ = 0; XQ < FQ.length; XQ++) rQ.axes.push(Number(FQ[XQ]));
          return rQ
        } : null
      })("undefined" === typeof Gamepad ? null : Gamepad.prototype, "undefined" === typeof GamepadButton ? null : GamepadButton.prototype),
      JQ = "undefined" === typeof Navigator ? null : Navigator.prototype.getGamepads;
    var rQ = XQ(1470),
      IQ = XQ(1475);
    const jQ = QQ => ({
      pressed: QQ,
      value: QQ ? 1 : 0
    });
    var BQ = XQ(2083);
    const yQ = zQ,
      VQ = QQ => {
        const WQ = new Array(wQ.Z).fill(0);
        for (let XQ = 0; XQ < wQ.Z && XQ < QQ.buttons.length; XQ++) {
          const qQ = QQ.buttons[XQ];
          WQ[XQ] = qQ.pressed && !(0, wQ.S)(XQ) ? Math.max(qQ.value, wQ.z) : qQ.value
        }
        return WQ
      },
      DQ = (QQ, WQ) => {
        var XQ, wQ;
        return {
          x: null !== (XQ = QQ.axes[WQ]) && void 0 !== XQ ? XQ : 0,
          y: null !== (wQ = QQ.axes[WQ + 1]) && void 0 !== wQ ? wQ : 0
        }
      };
    const pQ = new class {
      constructor(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : gQ;
        this.readGamepads = QQ, this.requireTrustedPads = WQ, this.nativeReader = XQ, this.running = !1, this.listening = !1, this.rafId = 0, this.lastTimestampMs = 0, this.activeInfo = null, this.slots = [], this.trustedIndices = new Set, this.warnedNonStandardIds = new Set, this.loggedReadError = !1, this.frameListeners = new Set, this.connectionListeners = new Set, this.anyPadConnected = !1, this.connectedListeners = new Set, this.handleConnectionEvent = QQ => {
          QQ.isTrusted && this.trustedIndices.add(QQ.gamepad.index), this.wake()
        }, this.handleDisconnectionEvent = QQ => {
          this.trustedIndices.delete(QQ.gamepad.index)
        }, this.fJ = QQ => {
          if (this.rafId = 0, !this.running) return;
          const WQ = 0 === this.lastTimestampMs ? 16 : Math.min(100, QQ - this.lastTimestampMs);
          this.lastTimestampMs = QQ;
          try {
            this.poll(QQ, WQ)
          } finally {
            this.anyPadConnected && (this.rafId = requestAnimationFrame(this.fJ))
          }
        }
      }
      start() {
        this.running || "undefined" === typeof navigator || "function" !== typeof navigator.getGamepads || (this.running = !0, this.listenForConnections(), this.wake())
      }
      stop() {
        this.running = !1, cancelAnimationFrame(this.rafId), this.rafId = 0, this.listening = !1, window.removeEventListener("gamepadconnected", this.handleConnectionEvent), window.removeEventListener("gamepaddisconnected", this.handleDisconnectionEvent)
      }
      listenForConnections() {
        this.listening || "undefined" === typeof window || (this.listening = !0, window.addEventListener("gamepadconnected", this.handleConnectionEvent), window.addEventListener("gamepaddisconnected", this.handleDisconnectionEvent))
      }
      onFrame(QQ) {
        return this.frameListeners.add(QQ), () => {
          this.frameListeners.delete(QQ)
        }
      }
      onActivePadChanged(QQ) {
        return this.connectionListeners.add(QQ), () => {
          this.connectionListeners.delete(QQ)
        }
      }
      getActivePad() {
        return this.activeInfo
      }
      hasConnectedPad() {
        return this.anyPadConnected
      }
      onConnectedPadsChanged(QQ) {
        return this.connectedListeners.add(QQ), () => {
          this.connectedListeners.delete(QQ)
        }
      }
      getActiveGamepad() {
        if (!this.activeInfo) return null;
        const QQ = this.readPads()[this.activeInfo.index],
          WQ = QQ ? this.readPad(QQ) : null;
        return WQ && WQ.id === this.activeInfo.id ? QQ : null
      }
      poll(QQ, WQ) {
        var XQ, qQ;
        const TQ = this.readPads();
        let zQ = null,
          FQ = !1;
        const PQ = [],
          gQ = Math.max(TQ.length, this.slots.length);
        for (let pQ = 0; pQ < gQ; pQ++) {
          var JQ;
          const WQ = pQ < TQ.length ? TQ[pQ] : null,
            XQ = WQ ? this.readPad(WQ) : null;
          if (!XQ || !XQ.connected || !this.isUsable(XQ)) {
            this.slots[pQ] = null;
            continue
          }
          let qQ = this.slots[pQ];
          qQ && qQ.id === XQ.id || (qQ = {
            id: XQ.id,
            Ds: [],
            leftSettled: !1,
            rightSettled: !1,
            leftRest: new sQ,
            rightRest: new sQ
          }, this.slots[pQ] = qQ);
          const gQ = DQ(XQ, 0),
            rQ = DQ(XQ, 2);
          !qQ.leftSettled && Math.hypot(gQ.x, gQ.y) < yQ && (qQ.leftSettled = !0), !qQ.rightSettled && Math.hypot(rQ.x, rQ.y) < yQ && (qQ.rightSettled = !0), qQ.leftRest.observe(gQ, QQ), qQ.rightRest.observe(rQ, QQ);
          const IQ = VQ(XQ),
            jQ = (0, wQ.u)(IQ, qQ.Ds),
            BQ = qQ.Ds,
            GQ = jQ.map(((QQ, WQ) => QQ && !BQ[WQ]));
          qQ.Ds = jQ;
          const UQ = {
            pad: XQ,
            slot: qQ,
            values: IQ
          };
          pQ === (null === (JQ = this.activeInfo) || void 0 === JQ ? void 0 : JQ.index) && XQ.id === this.activeInfo.id ? (zQ = UQ, FQ = GQ.includes(!0)) : GQ.includes(!0) && PQ.push({
            polled: UQ,
            rose: GQ
          })
        }
        const rQ = this.slots.some((QQ => null !== QQ));
        if (rQ !== this.anyPadConnected) {
          this.anyPadConnected = rQ;
          for (const QQ of this.connectedListeners) QQ()
        }
        const IQ = null !== (XQ = null === (qQ = zQ) || void 0 === qQ ? void 0 : qQ.slot.Ds) && void 0 !== XQ ? XQ : [],
          jQ = FQ ? void 0 : PQ.find((QQ => {
            let {
              rose: WQ
            } = QQ;
            return WQ.some(((QQ, WQ) => QQ && !IQ[WQ]))
          }));
        if (jQ ? (zQ = jQ.polled, this.setActive(jQ.polled.pad)) : this.activeInfo && !zQ && this.setActive(null), !zQ || !this.activeInfo) return;
        const BQ = ((QQ, WQ) => {
          let {
            pad: XQ,
            slot: qQ,
            values: TQ
          } = QQ;
          const zQ = (0, wQ.w)(WQ);
          return zQ.values = TQ, qQ.leftSettled && (zQ.leftStick = qQ.leftRest.apply(DQ(XQ, 0))), qQ.rightSettled && (zQ.rightStick = qQ.rightRest.apply(DQ(XQ, 2))), zQ
        })(zQ, QQ);
        for (const wQ of this.frameListeners) wQ(BQ, WQ, this.activeInfo)
      }
      readPad(QQ) {
        const WQ = this.readSnapshot(QQ);
        return WQ && (0, IQ.i)(WQ) ? (QQ => {
          const WQ = WQ => {
              var XQ;
              return null !== (XQ = QQ.buttons[WQ]) && void 0 !== XQ ? XQ : jQ(!1)
            },
            XQ = WQ => {
              var XQ;
              return null !== (XQ = QQ.axes[WQ]) && void 0 !== XQ ? XQ : 0
            },
            wQ = QQ.axes.length > 9,
            qQ = wQ ? (QQ => {
              const WQ = 0 !== QQ;
              return {
                up: WQ && (QQ >= -1 && QQ < -.7 || QQ >= .95 && QQ <= 1),
                right: WQ && QQ >= -.75 && QQ < -.1,
                down: WQ && QQ >= -.2 && QQ < .45,
                left: WQ && QQ >= .4 && QQ <= 1
              }
            })(XQ(9)) : {
              up: XQ(5) < -.5,
              down: XQ(5) > .5,
              left: XQ(4) < -.5,
              right: XQ(4) > .5
            };
          return {
            ...QQ,
            mapping: "standard",
            buttons: [WQ(1), WQ(2), WQ(0), WQ(3), WQ(4), WQ(5), WQ(6), WQ(7), WQ(8), WQ(9), WQ(10), WQ(11), jQ(qQ.up), jQ(qQ.down), jQ(qQ.left), jQ(qQ.right), WQ(12)],
            axes: [XQ(0), XQ(1), XQ(2), XQ(wQ ? 5 : 3)]
          }
        })(WQ) : WQ
      }
      readSnapshot(QQ) {
        if (this.nativeReader) try {
          return this.nativeReader(QQ)
        } catch {
          if (this.requireTrustedPads) return null
        }
        return this.requireTrustedPads ? null : (QQ => {
          const WQ = QQ;
          return {
            index: WQ.index,
            id: WQ.id,
            connected: WQ.connected,
            mapping: WQ.mapping,
            buttons: Array.from(WQ.buttons, (QQ => ({
              pressed: QQ.pressed,
              value: QQ.value
            }))),
            axes: Array.from(WQ.axes),
            vendorName: PQ(QQ)
          }
        })(QQ)
      }
      isUsable(QQ) {
        return !(0, rQ.d)(QQ.id) && ("standard" !== QQ.mapping ? (this.warnedNonStandardIds.has(QQ.id) || (this.warnedNonStandardIds.add(QQ.id), console.warn(`Controller "${QQ.id}" has no standard button mapping, so it is ignored.`)), !1) : !this.requireTrustedPads || this.trustedIndices.has(QQ.index))
      }
      setActive(QQ) {
        this.activeInfo = QQ ? {
          index: QQ.index,
          id: QQ.id,
          family: (0, qQ.e)(QQ.id, QQ.vendorName)
        } : null;
        for (const WQ of this.connectionListeners) WQ(this.activeInfo)
      }
      readPads() {
        try {
          return this.readGamepads()
        } catch (QQ) {
          return this.loggedReadError || (this.loggedReadError = !0, console.warn("Reading gamepads failed; controller input is unavailable.", QQ)), []
        }
      }
      wake() {
        this.running && 0 === this.rafId && (this.lastTimestampMs = 0, this.rafId = requestAnimationFrame(this.fJ))
      }
    }((() => JQ ? JQ.call(navigator) : []), !0);
    pQ.listenForConnections()
  },
  9111: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => TQ,
      e: () => zQ,
      f: () => sQ,
      i: () => qQ
    });
    var wQ = XQ(9119);
    const qQ = QQ => {
        const WQ = [];
        QQ.holdingGun && WQ.push({
          kind: "reload"
        }), QQ.touchscreenActionButton && WQ.push({
          kind: "touchButton",
          label: QQ.touchscreenActionButton
        });
        for (const TQ of null !== (XQ = null === (qQ = QQ.customButtons) || void 0 === qQ ? void 0 : qQ.filter(wQ.i)) && void 0 !== XQ ? XQ : []) {
          var XQ, qQ;
          WQ.push({
            kind: "customButton",
            id: TQ.id,
            icon: TQ.icon,
            description: TQ.description
          })
        }
        return WQ
      },
      TQ = QQ => QQ.length >= 2,
      zQ = QQ => "specialAction" !== QQ.kind,
      sQ = (QQ, WQ) => {
        if (null === QQ || null === WQ) return QQ === WQ;
        if (QQ.kind !== WQ.kind) return !1;
        switch (QQ.kind) {
          case "reload":
            return !0;
          case "specialAction":
            return QQ.action === WQ.action;
          case "customButton":
            return QQ.id === WQ.id && QQ.icon === WQ.icon;
          case "touchButton":
            return QQ.label === WQ.label
        }
      }
  },
  9043: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => wQ
    });
    const wQ = {
      short: {
        wheelMs: 250,
        dropStackMs: 800
      },
      medium: {
        wheelMs: 500,
        dropStackMs: 1e3
      },
      long: {
        wheelMs: 800,
        dropStackMs: 1300
      }
    }
  },
  9106: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => gQ,
      i: () => IQ,
      l: () => JQ,
      n: () => jQ
    });
    var wQ = XQ(61),
      qQ = XQ(31),
      TQ = XQ(1498),
      zQ = XQ(9111),
      sQ = XQ(9128);
    let FQ = null;
    const PQ = () => FQ,
      gQ = QQ => {
        (0, zQ.f)(FQ, QQ) || (FQ = QQ, qQ.k.mB(sQ.e, FQ))
      },
      JQ = () => {
        const [QQ, WQ] = (0, wQ.useState)(PQ);
        return (0, TQ.f)(sQ.e, WQ), QQ
      };
    let rQ = !1;
    const IQ = QQ => {
        QQ !== rQ && (rQ = QQ, qQ.k.mB(sQ.f, QQ))
      },
      jQ = () => {
        const [QQ, WQ] = (0, wQ.useState)(rQ);
        return (0, TQ.f)(sQ.f, WQ), QQ
      }
  },
  9137: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => zQ,
      e: () => sQ
    });
    var wQ = XQ(31),
      qQ = XQ(9128);
    let TQ = !1;
    const zQ = () => TQ,
      sQ = QQ => {
        QQ !== TQ && (TQ = QQ, wQ.k.mB(qQ.j, TQ))
      }
  },
  9130: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => sQ,
      i: () => FQ
    });
    var wQ = XQ(31),
      qQ = XQ(9128);
    let TQ = null,
      zQ = 0;
    const sQ = () => TQ,
      FQ = QQ => {
        null === QQ && null === TQ || (TQ = null === QQ ? null : {
          id: ++zQ,
          holdMs: QQ
        }, wQ.k.mB(qQ.l, TQ))
      }
  },
  9128: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => TQ,
      e: () => wQ,
      f: () => qQ,
      j: () => sQ,
      l: () => FQ,
      o: () => PQ,
      p: () => zQ
    });
    const wQ = "controllerActionHintChanged",
      qQ = "controllerActionWheelHintChanged",
      TQ = "controllerOpenChat",
      zQ = "controllerSneakToggledChanged",
      sQ = "controllerAttackLatchedChanged",
      FQ = "controllerDropStackHoldChanged",
      PQ = "controllerPickBlockHintChanged"
  },
  9143: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => zQ,
      g: () => sQ
    });
    var wQ = XQ(31),
      qQ = XQ(9128);
    let TQ = !1;
    const zQ = () => TQ,
      sQ = QQ => {
        QQ !== TQ && (TQ = QQ, wQ.k.mB(qQ.o, TQ))
      }
  },
  9189: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => zQ,
      g: () => sQ
    });
    var wQ = XQ(31),
      qQ = XQ(9128);
    let TQ = !1;
    const zQ = () => TQ,
      sQ = QQ => {
        QQ !== TQ && (TQ = QQ, wQ.k.mB(qQ.p, TQ))
      }
  },
  9093: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => wQ
    });
    class wQ {
      constructor() {
        this.downAtMs = null
      }
      update(QQ, WQ, XQ, wQ) {
        if (QQ) return this.downAtMs = XQ, null;
        if (null === this.downAtMs) return null;
        const qQ = XQ - this.downAtMs >= wQ;
        return WQ ? qQ ? (this.downAtMs = null, "hold") : null : (this.downAtMs = null, qQ ? "hold" : "tap")
      }
      release() {
        this.downAtMs = null
      }
    }
  },
  8613: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => JQ,
      e: () => rQ,
      f: () => sQ,
      i: () => pQ,
      j: () => DQ
    });
    var wQ = XQ(43),
      qQ = XQ(8580),
      TQ = XQ(8545);
    const zQ = (() => {
        try {
          return XQ(8619)
        } catch {
          return null
        }
      })(),
      sQ = [...TQ.$, "LeftStick", "RightStick"],
      FQ = new Map,
      PQ = {
        xbox: "xbox",
        playstation: "playstation",
        nintendo: "nintendo",
        steamdeck: "steamdeck",
        generic: "xbox"
      },
      gQ = (new Set(Object.values(PQ)), {
        xbox: {
          LB: 1.5,
          RB: 1.5
        },
        steamdeck: {
          Home: 2,
          Menu: 2,
          View: 2
        }
      }),
      JQ = (QQ, WQ) => {
        var XQ, wQ;
        return null !== (XQ = null === (wQ = gQ[PQ[QQ]]) || void 0 === wQ ? void 0 : wQ[WQ]) && void 0 !== XQ ? XQ : 1
      },
      rQ = (QQ, WQ) => {
        const XQ = `./${PQ[QQ]}/${WQ}.svg`;
        let wQ = FQ.get(XQ);
        return void 0 === wQ && (wQ = zQ ? zQ(XQ) : "", FQ.set(XQ, wQ)), wQ
      },
      IQ = new Set,
      jQ = [],
      BQ = QQ => {
        if (!IQ.has(QQ)) {
          IQ.add(QQ);
          for (const WQ of sQ) {
            const XQ = rQ(QQ, WQ);
            if (XQ) {
              const QQ = new Image;
              QQ.crossOrigin = "anonymous", QQ.src = XQ, jQ.push(QQ)
            }
          }
        }
      },
      yQ = "controllerGlyphFamily";
    let VQ = null;
    const DQ = QQ => {
        QQ !== VQ && (VQ = QQ, wQ.i.setItem(yQ, QQ), BQ(QQ))
      },
      pQ = () => {
        const QQ = wQ.i.getItem(yQ);
        (0, qQ.f)(QQ) && QQ !== VQ && (VQ = QQ, BQ(QQ))
      }
  },
  9220: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => kQ,
      f: () => fQ
    });
    var wQ = XQ(61),
      qQ = XQ(31),
      TQ = XQ(1498),
      zQ = XQ(8561),
      sQ = XQ(8536),
      FQ = XQ(8596),
      PQ = XQ(8572);
    const gQ = {
        x: 0,
        y: 0,
        z: 0
      },
      JQ = Math.PI / 180,
      rQ = QQ => Math.hypot(QQ.x, QQ.y, QQ.z),
      IQ = (QQ, WQ) => ({
        x: QQ.x * WQ,
        y: QQ.y * WQ,
        z: QQ.z * WQ
      }),
      jQ = (QQ, WQ) => ({
        x: QQ.x + WQ.x,
        y: QQ.y + WQ.y,
        z: QQ.z + WQ.z
      }),
      BQ = (QQ, WQ) => ({
        x: QQ.x - WQ.x,
        y: QQ.y - WQ.y,
        z: QQ.z - WQ.z
      }),
      yQ = QQ => {
        const WQ = rQ(QQ);
        return 0 === WQ ? gQ : IQ(QQ, 1 / WQ)
      },
      VQ = QQ => ({
        min: {
          ...QQ
        },
        max: {
          ...QQ
        }
      }),
      DQ = (QQ, WQ) => ({
        min: {
          x: Math.min(QQ.min.x, WQ.x),
          y: Math.min(QQ.min.y, WQ.y),
          z: Math.min(QQ.min.z, WQ.z)
        },
        max: {
          x: Math.max(QQ.max.x, WQ.x),
          y: Math.max(QQ.max.y, WQ.y),
          z: Math.max(QQ.max.z, WQ.z)
        }
      }),
      pQ = (QQ, WQ) => QQ.max.x - QQ.min.x <= WQ && QQ.max.y - QQ.min.y <= WQ && QQ.max.z - QQ.min.z <= WQ;
    class GQ {
      constructor() {
        this.bias = gQ, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = gQ, this.windowSec = 0
      }
      update(QQ) {
        const WQ = this.gyroRange ? DQ(this.gyroRange, QQ.gyro) : VQ(QQ.gyro),
          XQ = QQ.accel ? this.accelRange ? DQ(this.accelRange, QQ.accel) : VQ(QQ.accel) : null;
        if (!pQ(WQ, 1) || XQ && !pQ(XQ, .01)) return void this.restartWindow(QQ);
        if (this.gyroRange = WQ, this.accelRange = XQ, this.sum = jQ(this.sum, IQ(QQ.gyro, QQ.dtSec)), this.windowSec += QQ.dtSec, this.windowSec < 1) return;
        const wQ = IQ(this.sum, 1 / this.windowSec);
        if (rQ(wQ) > 5) return;
        const qQ = BQ(wQ, this.bias);
        let TQ = 0;
        !this.calibrated || this.windowSec >= 3 ? TQ = 1 : rQ(qQ) <= 1 && (TQ = Math.min(1, QQ.dtSec / 1)), this.bias = jQ(this.bias, IQ(qQ, TQ)), this.calibrated = this.calibrated || TQ > 0
      }
      correct(QQ) {
        return BQ(QQ, this.bias)
      }
      getBias() {
        return this.bias
      }
      isCalibrated() {
        return this.calibrated
      }
      reset() {
        this.bias = gQ, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = gQ, this.windowSec = 0
      }
      restartWindow(QQ) {
        this.gyroRange = VQ(QQ.gyro), this.accelRange = QQ.accel ? VQ(QQ.accel) : null, this.sum = gQ, this.windowSec = 0
      }
    }
    class UQ {
      constructor() {
        this.down = null
      }
      update(QQ, WQ, XQ) {
        const wQ = yQ(IQ(WQ, -1));
        if (!this.down) return this.down = wQ, wQ;
        const qQ = IQ(QQ, JQ * XQ),
          TQ = this.down,
          zQ = {
            x: TQ.x - (qQ.y * TQ.z - qQ.z * TQ.y),
            y: TQ.y - (qQ.z * TQ.x - qQ.x * TQ.z),
            z: TQ.z - (qQ.x * TQ.y - qQ.y * TQ.x)
          },
          sQ = 0 === rQ(wQ) ? 0 : Math.min(1, XQ / .25);
        var FQ, PQ;
        return this.down = yQ((PQ = sQ, jQ(FQ = zQ, IQ(BQ(wQ, FQ), PQ)))), this.down
      }
      reset() {
        this.down = null
      }
    }
    class bQ {
      constructor() {
        this.entries = [], this.windowSec = 0
      }
      apply(QQ, WQ, XQ) {
        const wQ = Math.hypot(QQ, WQ),
          qQ = Math.max(0, Math.min(1, (wQ - 2) / 2)),
          TQ = {
            yaw: QQ * (1 - qQ),
            pitch: WQ * (1 - qQ),
            dtSec: XQ
          };
        for (this.entries.push(TQ), this.windowSec += XQ; this.entries.length > 1 && this.windowSec - this.entries[0].dtSec >= .125;) this.windowSec -= this.entries[0].dtSec, this.entries.shift();
        let zQ = 0,
          sQ = 0;
        for (const PQ of this.entries) zQ += PQ.yaw * PQ.dtSec, sQ += PQ.pitch * PQ.dtSec;
        const FQ = this.windowSec > 0 ? {
          yaw: zQ / this.windowSec,
          pitch: sQ / this.windowSec
        } : {
          yaw: TQ.yaw,
          pitch: TQ.pitch
        };
        return {
          yaw: QQ * qQ + FQ.yaw,
          pitch: WQ * qQ + FQ.pitch
        }
      }
      reset() {
        this.entries = [], this.windowSec = 0
      }
    }
    class vQ {
      constructor() {
        this.calibrator = new GQ, this.gravity = new UQ, this.smoother = new bQ
      }
      process(QQ, WQ, XQ) {
        const wQ = Math.max(0, Math.min(.05, WQ));
        this.calibrator.update({
          ...QQ,
          dtSec: wQ
        });
        const qQ = this.calibrator.correct(QQ.gyro);
        let TQ = qQ.y;
        "player" === XQ && QQ.accel && (TQ = ((QQ, WQ) => {
          const XQ = QQ.y * WQ.y + QQ.z * WQ.z;
          return -Math.sign(XQ) * Math.min(1.41 * Math.abs(XQ), Math.hypot(QQ.y, QQ.z))
        })(qQ, this.gravity.update(qQ, QQ.accel, wQ)));
        const zQ = this.smoother.apply(TQ, qQ.x, wQ),
          sQ = ((QQ, WQ) => {
            const XQ = Math.hypot(QQ, WQ);
            if (XQ >= 1) return {
              yaw: QQ,
              pitch: WQ
            };
            const wQ = XQ / 1;
            return {
              yaw: QQ * wQ,
              pitch: WQ * wQ
            }
          })(zQ.yaw, zQ.pitch);
        return {
          yawDeg: sQ.yaw * wQ,
          pitchDeg: sQ.pitch * wQ
        }
      }
      getCalibration() {
        return {
          calibrated: this.calibrator.isCalibrated(),
          bias: this.calibrator.getBias()
        }
      }
      reset() {
        this.calibrator.reset(), this.gravity.reset(), this.smoother.reset()
      }
    }
    const dQ = (QQ, WQ) => {
      var XQ, wQ, qQ;
      const TQ = WQ * JQ,
        zQ = null !== (XQ = QQ.beta) && void 0 !== XQ ? XQ : 0,
        sQ = null !== (wQ = QQ.gamma) && void 0 !== wQ ? wQ : 0;
      return {
        x: zQ * Math.cos(TQ) - sQ * Math.sin(TQ),
        y: zQ * Math.sin(TQ) + sQ * Math.cos(TQ),
        z: null !== (qQ = QQ.alpha) && void 0 !== qQ ? qQ : 0
      }
    };
    var HQ = XQ(9224);
    class aQ {
      constructor(QQ, WQ, XQ) {
        this.hid = QQ, this.sink = WQ, this.onControllersChanged = XQ, this.controllers = new Map, this.running = !1, this.openedCount = 0, this.opening = new Set, this.disconnectedWhileOpening = new Set, this.switchPacketCounter = 0, this.onConnect = QQ => {
          this.openController(QQ.device).catch((QQ => {
            console.warn("Could not open motion controller", QQ)
          }))
        }, this.onDisconnect = QQ => {
          this.opening.has(QQ.device) && this.disconnectedWhileOpening.add(QQ.device);
          const WQ = this.controllers.get(QQ.device);
          WQ && (this.forget(WQ), this.onControllersChanged())
        }
      }
      async start() {
        if (this.running) return;
        this.running = !0, this.hid.addEventListener("connect", this.onConnect), this.hid.addEventListener("disconnect", this.onDisconnect);
        const QQ = await this.hid.getDevices();
        for (const WQ of QQ) await this.openController(WQ).catch((QQ => {
          console.warn("Could not open motion controller", QQ)
        }))
      }
      stop() {
        this.running = !1, this.hid.removeEventListener("connect", this.onConnect), this.hid.removeEventListener("disconnect", this.onDisconnect);
        for (const QQ of [...this.controllers.values()]) this.forget(QQ);
        this.onControllersChanged()
      }
      async request() {
        const QQ = await this.hid.requestDevice({
          filters: HQ.h
        });
        let WQ = 0;
        for (const XQ of QQ) await this.openController(XQ).catch((QQ => {
          console.warn("Could not open motion controller", QQ), WQ++
        }));
        return WQ
      }
      async hasGrantedController() {
        return (await this.hid.getDevices()).some((QQ => null !== (0, HQ.e)(QQ.vendorId, QQ.productId)))
      }
      getConnectedKinds() {
        return [...this.controllers.values()].map((QQ => QQ.kind))
      }
      forget(QQ) {
        QQ.device.removeEventListener("inputreport", QQ.onReport), this.controllers.get(QQ.device) === QQ && this.controllers.delete(QQ.device)
      }
      async openController(QQ) {
        const WQ = (0, HQ.e)(QQ.vendorId, QQ.productId);
        if (!WQ || !this.running || this.controllers.has(QQ) || this.opening.has(QQ)) return;
        this.opening.add(QQ);
        let XQ = !1;
        try {
          QQ.opened || await QQ.open()
        } finally {
          this.opening.delete(QQ), XQ = this.disconnectedWhileOpening.delete(QQ)
        }
        if (XQ) return void QQ.close().catch((QQ => {
          console.debug("Could not close an unplugged motion controller", QQ)
        }));
        if (!this.running) return;
        const wQ = {
          device: QQ,
          kind: WQ,
          lastClock: null,
          lastEventMs: null,
          lastReadingMs: -1 / 0,
          openedOrder: this.openedCount++,
          onReport: QQ => {
            this.onReport(wQ, QQ)
          }
        };
        this.controllers.set(QQ, wQ), QQ.addEventListener("inputreport", wQ.onReport), this.onControllersChanged();
        try {
          await this.enableMotion(wQ)
        } catch (qQ) {
          console.warn(`Could not turn on motion for ${WQ}`, qQ), this.controllers.get(QQ) === wQ && (this.forget(wQ), this.onControllersChanged())
        }
      }
      async enableMotion(QQ) {
        let {
          device: WQ,
          kind: XQ
        } = QQ;
        if ((0, HQ.f)(XQ))
          for (const wQ of HQ.s[XQ]) await WQ.receiveFeatureReport(wQ).catch((QQ => {
            console.debug(`Motion controller feature report ${wQ} unavailable`, QQ)
          }));
        else
          for (let wQ = 0; wQ < 2; wQ++)
            for (const {
                subcommand: QQ,
                args: XQ
              }
              of HQ.u) await WQ.sendReport(HQ.y, (0, HQ.d)(this.switchPacketCounter++, QQ, XQ)), await new Promise((QQ => {
              setTimeout(QQ, 60)
            }))
      }
      onReport(QQ, WQ) {
        const XQ = (0, HQ.p)(QQ.kind, WQ.reportId, WQ.data, QQ.device.productId);
        if (!XQ) return;
        const wQ = null === QQ.lastEventMs ? 0 : (WQ.timeStamp - QQ.lastEventMs) / 1e3;
        QQ.lastEventMs = WQ.timeStamp;
        let qQ = XQ.dtSec;
        if (null !== qQ && wQ > 0 && (qQ = Math.max(.001, Math.min(.017, wQ / XQ.readings.length))), null === qQ && null !== XQ.sensorClock && (0, HQ.f)(QQ.kind)) {
          const WQ = (0, HQ.q)(QQ.kind, QQ.lastClock, XQ.sensorClock);
          QQ.lastClock = XQ.sensorClock, qQ = 0 === WQ ? null : WQ
        }
        if (QQ.lastReadingMs = WQ.timeStamp, this.isPreferred(QQ, WQ.timeStamp))
          for (const zQ of XQ.readings) {
            var TQ;
            this.sink(zQ, null !== (TQ = qQ) && void 0 !== TQ ? TQ : wQ, `hid${QQ.openedOrder}`)
          }
      }
      isPreferred(QQ, WQ) {
        const XQ = QQ => 1e6 * HQ.o[QQ.kind] + QQ.openedOrder;
        for (const wQ of this.controllers.values())
          if (wQ !== QQ && WQ - wQ.lastReadingMs < 500 && XQ(wQ) < XQ(QQ)) return !1;
        return !0
      }
    }
    var lQ = XQ(105);
    const hQ = () => DeviceMotionEvent,
      iQ = () => "undefined" !== typeof window && "undefined" !== typeof DeviceMotionEvent && window.isSecureContext && (0, lQ.isMobile)(),
      cQ = () => {
        var QQ;
        const WQ = null === (QQ = window.screen.orientation) || void 0 === QQ ? void 0 : QQ.angle;
        return "number" === typeof WQ ? WQ : "number" === typeof window.orientation ? window.orientation : 0
      };
    class AQ {
      constructor(QQ, WQ) {
        this.sink = QQ, this.onStateChanged = WQ, this.state = "off", this.lastEventMs = null, this.noSensorTimer = null, this.wanted = !1, this.permissionRequest = null, this.granted = !1, this.onGesture = () => {
          this.requestPermission().catch((QQ => {
            console.warn("Could not enable the motion sensor", QQ)
          }))
        }, this.onMotion = QQ => {
          const WQ = QQ.rotationRate;
          if (!WQ || null === WQ.alpha && null === WQ.beta && null === WQ.gamma) return;
          const XQ = null === this.lastEventMs ? 0 : (QQ.timeStamp - this.lastEventMs) / 1e3;
          this.lastEventMs = QQ.timeStamp, this.clearNoSensorTimer(), this.setState("on"), this.sink({
            gyro: dQ(WQ, cQ()),
            accel: null
          }, XQ, "phone")
        }
      }
      getState() {
        return this.state
      }
      start() {
        if (this.wanted = !0, "off" === this.state) return "function" !== typeof hQ().requestPermission || this.granted ? void this.listen() : (this.setState("needsPermission"), void this.armGestureRequest())
      }
      requestPermission() {
        return this.permissionRequest || (this.permissionRequest = this.askPermission().finally((() => {
          this.permissionRequest = null
        }))), this.permissionRequest
      }
      async askPermission() {
        const QQ = hQ().requestPermission;
        if (!this.wanted) return;
        if ("function" !== typeof QQ) return void this.listen();
        let WQ;
        this.disarmGestureRequest();
        try {
          WQ = await QQ.call(DeviceMotionEvent)
        } catch (XQ) {
          throw this.wanted && "needsPermission" === this.state && this.armGestureRequest(), XQ
        }
        this.wanted && ("granted" === WQ ? (this.granted = !0, this.listen()) : this.setState("denied"))
      }
      stop() {
        this.wanted = !1, this.disarmGestureRequest(), window.removeEventListener("devicemotion", this.onMotion), this.clearNoSensorTimer(), this.lastEventMs = null, this.setState("off")
      }
      armGestureRequest() {
        window.addEventListener("touchend", this.onGesture), window.addEventListener("click", this.onGesture)
      }
      disarmGestureRequest() {
        window.removeEventListener("touchend", this.onGesture), window.removeEventListener("click", this.onGesture)
      }
      listen() {
        this.disarmGestureRequest(), window.removeEventListener("devicemotion", this.onMotion), window.addEventListener("devicemotion", this.onMotion), this.setState("waiting"), this.clearNoSensorTimer(), this.noSensorTimer = setTimeout((() => {
          this.noSensorTimer = null, "waiting" === this.state && this.setState("noSensor")
        }), 3e3)
      }
      clearNoSensorTimer() {
        null !== this.noSensorTimer && (clearTimeout(this.noSensorTimer), this.noSensorTimer = null)
      }
      setState(QQ) {
        this.state !== QQ && (this.state = QQ, this.onStateChanged())
      }
    }
    const RQ = "controllerGyroStatusChanged",
      EQ = {
        jR: 0,
        yR: 0
      },
      CQ = QQ => {
        var WQ, XQ;
        return "undefined" === typeof document || (null === (WQ = null === (XQ = document.featurePolicy) || void 0 === XQ ? void 0 : XQ.allowsFeature(QQ)) || void 0 === WQ || WQ)
      };
    class uQ {
      constructor() {
        this.processor = new vQ, this.hid = void 0, this.hidBlocked = void 0, this.phone = void 0, this.phoneBlocked = void 0, this.source = null, this.pendingYawDeg = 0, this.pendingPitchDeg = 0, this.lastDrainMs = -1 / 0, this.lastHidReadingMs = -1 / 0, this.running = !1, this.phoneRunning = !1, this.syncWithSettings = QQ => {
          const WQ = QQ.gyroAiming && sQ.i.hasConnectedPad();
          var XQ, wQ;
          WQ !== this.phoneRunning && (this.phoneRunning = WQ, WQ ? null === (XQ = this.phone) || void 0 === XQ || XQ.start() : null === (wQ = this.phone) || void 0 === wQ || wQ.stop());
          if (QQ.gyroAiming !== this.running) {
            var qQ, TQ;
            if (this.running = QQ.gyroAiming, this.running) null === (qQ = this.hid) || void 0 === qQ || qQ.start().catch((QQ => {
              console.warn("Could not open motion controllers", QQ)
            }));
            else null === (TQ = this.hid) || void 0 === TQ || TQ.stop(), this.processor.reset(), this.source = null, this.discardPending();
            this.publishStatus()
          }
        }, this.publishStatus = () => {
          qQ.k.mB(RQ, this.getStatus())
        };
        const QQ = (() => {
            var QQ;
            return "undefined" !== typeof navigator && window.isSecureContext && null !== (QQ = navigator.hid) && void 0 !== QQ ? QQ : null
          })(),
          WQ = CQ("hid");
        this.hidBlocked = null !== QQ && !WQ, this.hid = QQ && WQ ? new aQ(QQ, ((QQ, WQ, XQ) => {
          this.lastHidReadingMs = performance.now(), this.feed(QQ, WQ, "player", XQ)
        }), this.publishStatus) : null;
        const XQ = CQ("accelerometer") && CQ("gyroscope");
        this.phoneBlocked = iQ() && !XQ, this.phone = iQ() && XQ ? new AQ(((QQ, WQ, XQ) => {
          performance.now() - this.lastHidReadingMs >= 500 && this.feed(QQ, WQ, "local", XQ)
        }), this.publishStatus) : null, qQ.k.subscribe(PQ.c, this.syncWithSettings), sQ.i.onConnectedPadsChanged((() => {
          this.syncWithSettings((0, PQ.g)()), this.publishStatus()
        })), this.syncWithSettings((0, PQ.g)())
      }
      isSupported() {
        return null !== this.hid || null !== this.phone
      }
      getStatus() {
        var QQ, WQ, XQ, wQ;
        return {
          hidSupported: null !== this.hid,
          hidBlocked: this.hidBlocked,
          phoneSupported: null !== this.phone,
          phoneBlocked: this.phoneBlocked,
          controllers: null !== (QQ = null === (WQ = this.hid) || void 0 === WQ ? void 0 : WQ.getConnectedKinds()) && void 0 !== QQ ? QQ : [],
          phoneMotion: null !== (XQ = null === (wQ = this.phone) || void 0 === wQ ? void 0 : wQ.getState()) && void 0 !== XQ ? XQ : "off",
          padConnected: sQ.i.hasConnectedPad()
        }
      }
      async connectController() {
        return this.hid ? this.hid.request() : 0
      }
      async connectControllerIfNoneGranted() {
        this.hid && !await this.hid.hasGrantedController() && await this.hid.request()
      }
      async allowPhoneMotion() {
        var QQ;
        await (null === (QQ = this.phone) || void 0 === QQ ? void 0 : QQ.requestPermission())
      }
      drainLookDelta() {
        const QQ = performance.now();
        QQ - this.lastDrainMs > 500 && this.discardPending(), this.lastDrainMs = QQ;
        const WQ = {
          yawDeg: this.pendingYawDeg,
          pitchDeg: this.pendingPitchDeg
        };
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0;
        const XQ = (0, PQ.g)();
        return XQ.gyroAiming && (QQ => {
          let {
            activation: WQ,
            isHeld: XQ,
            useButton: wQ,
            gyroButton: qQ
          } = QQ;
          return "always" === WQ || XQ("aiming" === WQ ? wQ : qQ)
        })({
          activation: XQ.gyroActivation,
          isHeld: QQ => FQ.b.isButtonHeld(QQ),
          useButton: (0, zQ.g)("use"),
          gyroButton: XQ.gyroButton
        }) ? ((QQ, WQ) => ({
          jR: -QQ.yawDeg * WQ * JQ,
          yR: -QQ.pitchDeg * WQ * JQ
        }))(WQ, XQ.gyroSensitivity) : EQ
      }
      discardPending() {
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0
      }
      injectMotion(QQ, WQ) {
        this.feed(QQ, WQ, "local", "injected")
      }
      getCalibration() {
        return this.processor.getCalibration()
      }
      feed(QQ, WQ, XQ, wQ) {
        this.source !== wQ && (this.processor.reset(), this.source = wQ);
        const qQ = this.processor.process(QQ, WQ, XQ);
        this.pendingYawDeg += qQ.yawDeg, this.pendingPitchDeg += qQ.pitchDeg
      }
    }
    let LQ = null;
    const kQ = () => (LQ || (LQ = new uQ), LQ),
      fQ = () => {
        const [QQ, WQ] = (0, wQ.useState)((() => kQ().getStatus()));
        return (0, TQ.f)(RQ, WQ), (0, wQ.useEffect)((() => {
          WQ(kQ().getStatus())
        }), []), QQ
      }
  },
  9224: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => UQ,
      e: () => FQ,
      f: () => wQ,
      h: () => sQ,
      l: () => PQ,
      o: () => gQ,
      p: () => DQ,
      q: () => yQ,
      s: () => vQ,
      u: () => bQ,
      y: () => pQ
    });
    const wQ = QQ => "dualShock4" === QQ || "dualSense" === QQ,
      qQ = 1356,
      TQ = 1406,
      zQ = [{
        vendorId: qQ,
        productId: 1476,
        kind: "dualShock4"
      }, {
        vendorId: qQ,
        productId: 2508,
        kind: "dualShock4"
      }, {
        vendorId: qQ,
        productId: 2976,
        kind: "dualShock4"
      }, {
        vendorId: qQ,
        productId: 3302,
        kind: "dualSense"
      }, {
        vendorId: qQ,
        productId: 3570,
        kind: "dualSense"
      }, {
        vendorId: TQ,
        productId: 8201,
        kind: "switchPro"
      }, {
        vendorId: TQ,
        productId: 8198,
        kind: "joyConLeft"
      }, {
        vendorId: TQ,
        productId: 8199,
        kind: "joyConRight"
      }],
      sQ = zQ.map((QQ => {
        let {
          vendorId: WQ,
          productId: XQ
        } = QQ;
        return {
          vendorId: WQ,
          productId: XQ
        }
      })),
      FQ = (QQ, WQ) => {
        var XQ, wQ;
        return null !== (XQ = null === (wQ = zQ.find((XQ => XQ.vendorId === QQ && XQ.productId === WQ))) || void 0 === wQ ? void 0 : wQ.kind) && void 0 !== XQ ? XQ : null
      },
      PQ = {
        dualShock4: "DualShock 4",
        dualSense: "DualSense",
        switchPro: "Switch Pro Controller",
        joyConLeft: "Joy-Con (L)",
        joyConRight: "Joy-Con (R)"
      },
      gQ = {
        dualSense: 0,
        dualShock4: 0,
        switchPro: 0,
        joyConRight: 1,
        joyConLeft: 2
      },
      JQ = 2e3 / 32767,
      rQ = 1 / 8192,
      IQ = 936 / 13371,
      jQ = (QQ, WQ, XQ) => ({
        x: QQ.getInt16(WQ, !0) * XQ,
        y: QQ.getInt16(WQ + 2, !0) * XQ,
        z: QQ.getInt16(WQ + 4, !0) * XQ
      }),
      BQ = QQ => 0 === QQ.x && 0 === QQ.y && 0 === QQ.z,
      yQ = (QQ, WQ, XQ) => null === WQ ? null : "dualShock4" === QQ ? 16 * (XQ - WQ & 65535) / 3 / 1e6 : (XQ - WQ >>> 0) / 3 / 1e6,
      VQ = (QQ, WQ) => "joyConRight" === WQ ? {
        x: QQ.y,
        y: -QQ.z,
        z: -QQ.x
      } : {
        x: -QQ.y,
        y: QQ.z,
        z: -QQ.x
      },
      DQ = (QQ, WQ, XQ, qQ) => wQ(QQ) ? ((QQ, WQ, XQ, wQ) => {
        const qQ = ((QQ, WQ, XQ) => "dualShock4" === QQ ? 1 === WQ && XQ >= 63 ? 0 : 17 === WQ && XQ >= 65 ? 2 : null : 1 === WQ && XQ >= 62 ? 0 : 49 === WQ && XQ >= 63 ? 1 : null)(QQ, WQ, XQ.byteLength);
        if (null === qQ) return null;
        if (2976 === wQ && 1 === WQ && 0 !== (4 & XQ.getUint8(30))) return null;
        const TQ = qQ + ("dualShock4" === QQ ? 12 : 15),
          zQ = jQ(XQ, TQ, JQ),
          sQ = jQ(XQ, TQ + 6, rQ);
        return BQ(zQ) && BQ(sQ) ? null : {
          readings: [{
            gyro: zQ,
            accel: sQ
          }],
          dtSec: null,
          sensorClock: "dualShock4" === QQ ? XQ.getUint16(qQ + 9, !0) : XQ.getUint32(qQ + 27, !0)
        }
      })(QQ, WQ, XQ, qQ) : ((QQ, WQ, XQ) => {
        if (48 !== WQ && 49 !== WQ || XQ.byteLength < 48) return null;
        const wQ = [];
        for (let qQ = 0; qQ < 3; qQ++) {
          const WQ = jQ(XQ, 12 + 12 * qQ, 244e-6),
            TQ = jQ(XQ, 18 + 12 * qQ, IQ);
          if (BQ(TQ) && BQ(WQ)) return null;
          wQ.push({
            gyro: VQ(TQ, QQ),
            accel: VQ(WQ, QQ)
          })
        }
        return {
          readings: wQ,
          dtSec: .005,
          sensorClock: null
        }
      })(QQ, WQ, XQ),
      pQ = 1,
      GQ = [0, 1, 64, 64, 0, 1, 64, 64],
      UQ = (QQ, WQ, XQ) => new Uint8Array([15 & QQ, ...GQ, WQ, ...XQ]),
      bQ = [{
        subcommand: 64,
        args: [1]
      }, {
        subcommand: 3,
        args: [48]
      }],
      vQ = {
        dualShock4: [2, 5],
        dualSense: [5]
      }
  },
  8605: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => uQ,
      e: () => eQ,
      g: () => bQ,
      i: () => IQ.l,
      l: () => fQ,
      m: () => kQ,
      p: () => vQ,
      t: () => SQ,
      u: () => IQ.w,
      w: () => IQ.A,
      x: () => nQ,
      A: () => IQ.H,
      C: () => AQ
    });
    var wQ = XQ(61),
      qQ = XQ(26),
      TQ = XQ(31),
      zQ = XQ(1498),
      sQ = XQ(1335),
      FQ = XQ(8572),
      PQ = XQ(8608),
      gQ = XQ(8554),
      JQ = XQ(8536),
      rQ = XQ(8613),
      IQ = XQ(1454),
      jQ = XQ(8545),
      BQ = XQ(9037),
      yQ = XQ(4692),
      VQ = XQ(129);
    class DQ {
      constructor(QQ) {
        this.deps = QQ, this.pads = new Map
      }
      observe(QQ, WQ, XQ) {
        if (!this.deps.touchOnly) return;
        const wQ = this.pads.get(WQ.id);
        "proven" !== wQ && XQ ? (this.pads.set(WQ.id, "proven"), void 0 !== wQ && this.deps.onReleased(WQ, QQ, QQ.timestampMs - wQ)) : void 0 === wQ && (this.pads.set(WQ.id, QQ.timestampMs), this.deps.onHeld(WQ, QQ)), this.deps.setMayHide("proven" === this.pads.get(WQ.id))
      }
    }
    const pQ = QQ => QQ.values.flatMap(((QQ, WQ) => QQ >= jQ.X ? [String(WQ)] : [])).join(",") || "none",
      GQ = (QQ, WQ, wQ, qQ, TQ) => {
        const zQ = (0, IQ.h)(),
          sQ = document.visibilityState,
          FQ = document.hasFocus();
        Promise.all([Promise.resolve().then((() => XQ(3158))), Promise.resolve().then((() => XQ(1109))), Promise.resolve().then((() => XQ(158)))]).then((XQ => {
          let [{
            logControllerHudHoldToGtag: PQ
          }, {
            logClientLineFromEveryPage: gQ
          }, {
            siteUsed: JQ
          }] = XQ;
          PQ(QQ, WQ.family, null === TQ ? void 0 : Math.round(TQ / 1e3)), gQ(`touch HUD pad ${QQ}`, UQ(WQ, wQ, qQ, TQ, zQ, sQ, FQ, JQ))
        }), (() => {}))
      },
      UQ = (QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ) => {
        var FQ;
        const PQ = {
          pad_id: QQ.id.slice(0, 120),
          pad_family: QQ.family,
          pad_mapping: null !== (FQ = null === XQ || void 0 === XQ ? void 0 : XQ.mapping) && void 0 !== FQ ? FQ : "unread",
          pad_axes: XQ ? String(XQ.axes.length) : "unread",
          pad_buttons: XQ ? String(XQ.buttons.length) : "unread",
          pressed: pQ(WQ),
          ms_since_touch: null === qQ ? "none" : String(Math.round(WQ.timestampMs - qQ)),
          visibility: TQ,
          focused: String(zQ),
          site: sQ
        };
        return null !== wQ && (PQ.held_ms = String(Math.round(wQ))), PQ
      };
    const bQ = QQ => !QQ.repeat && !(0, BQ.c)(QQ.key),
      vQ = "PadHidesCursor";
    let dQ = !1;
    const HQ = QQ => {
        QQ !== dQ && (dQ = QQ, document.documentElement.classList.toggle(vQ, QQ))
      },
      aQ = new class {
        constructor() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
        observe(QQ) {
          let WQ = !1,
            XQ = !1;
          QQ.values.forEach(((QQ, wQ) => {
            const qQ = QQ >= (this.buttonsDown[wQ] ? jQ.Y : jQ.X);
            qQ && !this.buttonsDown[wQ] && (WQ = !0, XQ = !0), this.buttonsDown[wQ] = qQ
          }));
          return [QQ.leftStick, QQ.rightStick].forEach(((QQ, wQ) => {
            const qQ = this.stickAnchors[wQ];
            Math.hypot(QQ.x, QQ.y) < (qQ ? jQ.Y : .3) ? this.stickAnchors[wQ] = null : (!qQ || Math.hypot(QQ.x - qQ.x, QQ.y - qQ.y) >= .3) && (this.stickAnchors[wQ] = {
              x: QQ.x,
              y: QQ.y
            }, WQ = !0, XQ ||= !qQ)
          })), WQ && (this.lastActivityMs = QQ.timestampMs), this.onlyMovedOn = WQ && !XQ, WQ
        }
        wasOnlyMoveOn() {
          return this.onlyMovedOn
        }
        isHolding(QQ) {
          return !(QQ - this.lastActivityMs >= 1e3) && (this.buttonsDown.some((QQ => QQ)) || this.stickAnchors.some((QQ => null !== QQ)))
        }
        isStickOffRest() {
          return this.stickAnchors.some((QQ => null !== QQ))
        }
        reset() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
      },
      lQ = (hQ = () => JQ.i.getActiveGamepad(), new DQ({
        touchOnly: "touchOnly" === (0, VQ.c)(),
        setMayHide: IQ.z,
        onHeld: (QQ, WQ) => {
          GQ("Ds", QQ, WQ, hQ(), null)
        },
        onReleased: (QQ, WQ, XQ) => {
          GQ("released", QQ, WQ, hQ(), XQ)
        }
      }));
    var hQ;
    let iQ = null,
      cQ = !1;
    const AQ = () => cQ;
    let RQ = null,
      EQ = !1,
      CQ = null;
    const uQ = () => CQ;
    let LQ = !1;
    const kQ = (QQ, WQ) => {
        if (!aQ.observe(QQ)) return !1;
        if (lQ.observe(QQ, WQ, aQ.isStickOffRest()), LQ && aQ.wasOnlyMoveOn() && !(0, IQ.l)()) return !1;
        LQ = !1, cQ = !1;
        const XQ = !(0, IQ.l)();
        return XQ && (iQ = QQ, CQ = !dQ && EQ && RQ ? {
          ...RQ
        } : null), EQ = !1, (0, IQ.w)("gamepad"), HQ(!0), (0, rQ.j)((0, FQ.i)()), XQ
      },
      fQ = QQ => !(0, IQ.l)() || QQ === iQ,
      SQ = () => {
        aQ.reset()
      },
      tQ = () => {
        const QQ = qQ.b.get("activeInputDevice"),
          WQ = "gamepad" === QQ ? JQ.i.getActivePad() : null;
        return {
          device: QQ,
          inGame: (0, sQ.A)(),
          padMovesMouse: null !== WQ && (0, gQ.h)(WQ.id)
        }
      },
      oQ = QQ => {
        document.pointerLockElement ? RQ = null : (RQ ??= {
          x: 0,
          y: 0
        }, RQ.x = QQ.clientX, RQ.y = QQ.clientY)
      },
      eQ = () => {
        const QQ = new yQ.d,
          WQ = WQ => {
            QQ.reset(), LQ = !1, (0, IQ.w)(WQ)
          },
          XQ = QQ => {
            if (QQ.isTrusted) {
              if (QQ instanceof KeyboardEvent) {
                if ((0, IQ.s)(QQ), !bQ(QQ)) return;
                cQ = !0
              }
              if (QQ instanceof PointerEvent && "touch" === QQ.pointerType) return RQ = null, void WQ("touch");
              QQ instanceof PointerEvent && (oQ(QQ), EQ = !0), ("pointerdown" !== QQ.type || (QQ => {
                let {
                  device: WQ,
                  inGame: XQ,
                  padMovesMouse: wQ
                } = QQ;
                return !("gamepad" === WQ && wQ && XQ)
              })(tQ())) && WQ("keyboardMouse")
            }
          },
          wQ = QQ => {
            QQ.isTrusted && (RQ = null, WQ("touch"))
          },
          zQ = QQ => {
            QQ.isTrusted && "touch" !== QQ.pointerType && !QQ.relatedTarget && (RQ = null)
          },
          sQ = XQ => {
            if (!XQ.isTrusted || "touch" === XQ.pointerType) return;
            oQ(XQ);
            const wQ = XQ.movementX || 0,
              TQ = XQ.movementY || 0;
            if (0 === wQ && 0 === TQ) return;
            if (EQ = !0, HQ(!1), "keyboardMouse" === qQ.b.get("activeInputDevice")) return;
            const zQ = aQ.isHolding(XQ.timeStamp),
              sQ = tQ(),
              FQ = (QQ => {
                let {
                  device: WQ,
                  inGame: XQ,
                  padMovesMouse: wQ,
                  padHolding: qQ
                } = QQ;
                return ("gamepad" !== WQ || !wQ) && "keyboardMouse" !== WQ && (XQ || !qQ)
              })({
                ...sQ,
                inGame: sQ.inGame && (0, PQ.e)(),
                padHolding: zQ
              });
            FQ && QQ.add(wQ, TQ, XQ.timeStamp) && (WQ("keyboardMouse"), LQ = aQ.isStickOffRest())
          },
          FQ = QQ => {
            HQ("gamepad" === QQ)
          },
          gQ = {
            capture: !0,
            passive: !0
          };
        window.addEventListener("keydown", XQ, gQ), window.addEventListener("pointerdown", XQ, gQ), window.addEventListener("wheel", XQ, gQ), window.addEventListener("touchstart", wQ, gQ), window.addEventListener("pointermove", sQ, gQ), window.addEventListener("pointerout", zQ, gQ);
        const JQ = TQ.k.subscribe("appManagerUpdated|activeInputDevice", FQ);
        return FQ(qQ.b.get("activeInputDevice")), () => {
          window.removeEventListener("keydown", XQ, gQ), window.removeEventListener("pointerdown", XQ, gQ), window.removeEventListener("wheel", XQ, gQ), window.removeEventListener("touchstart", wQ, gQ), window.removeEventListener("pointermove", sQ, gQ), window.removeEventListener("pointerout", zQ, gQ), RQ = null, TQ.k.unsubscribe(JQ), HQ(!1)
        }
      },
      nQ = () => {
        const [QQ, WQ] = (0, wQ.useState)(FQ.i);
        return (0, zQ.f)(FQ.b, (() => {
          WQ((0, FQ.i)())
        })), (0, zQ.f)(JQ.e, (() => {
          WQ((0, FQ.i)())
        })), QQ
      }
  },
  8580: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => wQ,
      f: () => qQ
    });
    const wQ = ["xbox", "playstation", "nintendo", "steamdeck", "generic"],
      qQ = QQ => wQ.includes(QQ)
  },
  9071: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => zQ,
      g: () => TQ,
      k: () => FQ,
      l: () => sQ
    });
    var wQ = XQ(1498),
      qQ = XQ(1468);
    const TQ = "controllerInventoryCursorChanged",
      zQ = {
        showing: !1,
        kind: null,
        holding: !1,
        slotHasItem: !1,
        pressHints: null,
        hasCategories: !1,
        hasList: !1,
        openButtonCloses: !1,
        steppingSlots: !1,
        quickMoveToHotbar: !1,
        dropStackHold: null,
        hotbarPicking: !1
      },
      sQ = () => {
        var QQ, WQ;
        return (0, wQ.j)(TQ, null !== (QQ = null === (WQ = (0, qQ.f)()) || void 0 === WQ ? void 0 : WQ.getInventoryCursorState()) && void 0 !== QQ ? QQ : zQ)
      },
      FQ = () => {
        var QQ, WQ;
        return null !== (QQ = null === (WQ = (0, qQ.f)()) || void 0 === WQ ? void 0 : WQ.isPadSteppingSlots()) && void 0 !== QQ && QQ
      }
  },
  9069: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => rQ,
      e: () => sQ,
      g: () => FQ,
      i: () => zQ,
      k: () => TQ,
      n: () => gQ,
      o: () => JQ
    });
    let wQ = null;
    const qQ = new Set,
      TQ = QQ => (wQ = QQ, () => {
        if (wQ === QQ) {
          wQ = null;
          for (const QQ of qQ) QQ()
        }
      }),
      zQ = QQ => (qQ.add(QQ), () => {
        qQ.delete(QQ)
      }),
      sQ = () => wQ,
      FQ = () => null !== wQ;
    let PQ = null;
    const gQ = QQ => {
        PQ = QQ
      },
      JQ = () => {
        const QQ = PQ;
        return PQ = null, QQ
      },
      rQ = (QQ, WQ) => {
        var XQ, wQ;
        return null !== (XQ = null !== (wQ = QQ.find((QQ => QQ.element === WQ))) && void 0 !== wQ ? wQ : QQ.find((QQ => QQ.element.contains(WQ)))) && void 0 !== XQ ? XQ : null
      }
  },
  9079: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => TQ,
      c: () => zQ
    });
    var wQ = XQ(61);
    const qQ = new WeakMap,
      TQ = QQ => {
        var WQ, XQ;
        return null !== (WQ = null === (XQ = qQ.get(QQ)) || void 0 === XQ ? void 0 : XQ.current) && void 0 !== WQ ? WQ : null
      },
      zQ = (QQ, WQ) => {
        const XQ = (0, wQ.useRef)(WQ);
        XQ.current = WQ;
        const TQ = (0, wQ.useRef)(null);
        (0, wQ.useEffect)((() => {
          const WQ = QQ.current,
            wQ = TQ.current;
          WQ !== wQ && (wQ && qQ.get(wQ) === XQ && qQ.delete(wQ), TQ.current = WQ, WQ && qQ.set(WQ, XQ))
        })), (0, wQ.useEffect)((() => () => {
          const QQ = TQ.current;
          QQ && qQ.get(QQ) === XQ && qQ.delete(QQ), TQ.current = null
        }), [])
      }
  },
  9187: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => sQ,
      e: () => PQ,
      g: () => JQ,
      i: () => gQ,
      j: () => FQ,
      n: () => IQ
    });
    var wQ = XQ(31),
      qQ = XQ(2083),
      TQ = XQ(1468),
      zQ = XQ(1454);
    const sQ = QQ => {
        var WQ, XQ;
        return (0, zQ.l)() && null !== (WQ = null === (XQ = (0, TQ.f)()) || void 0 === XQ ? void 0 : XQ.getGlyphForNoaAction(QQ)) && void 0 !== WQ ? WQ : null
      },
      FQ = "controllerGlyph:",
      PQ = QQ => {
        var WQ, XQ;
        return null !== (WQ = null === (XQ = (0, TQ.f)()) || void 0 === XQ ? void 0 : XQ.getPadGlyphIconName(QQ)) && void 0 !== WQ ? WQ : `${FQ}xbox/${QQ}`
      },
      gQ = QQ => QQ.startsWith(FQ),
      JQ = QQ => {
        var WQ, XQ;
        return gQ(QQ) && null !== (WQ = null === (XQ = (0, TQ.f)()) || void 0 === XQ ? void 0 : XQ.getPadGlyphIconUrl(QQ)) && void 0 !== WQ ? WQ : null
      },
      rQ = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", zQ.e, qQ.f, qQ.d],
      IQ = QQ => {
        const WQ = rQ.map((WQ => wQ.k.subscribe(WQ, QQ)));
        return () => {
          for (const QQ of WQ) wQ.k.unsubscribe(QQ)
        }
      }
  },
  9056: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => qQ,
      f: () => wQ
    });
    const wQ = "controllerOpenKeyboard",
      qQ = "controllerKeyboardVisible"
  },
  8608: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => PQ,
      e: () => gQ,
      f: () => FQ,
      h: () => sQ
    });
    var wQ = XQ(26),
      qQ = XQ(1698),
      TQ = XQ(1806);
    const zQ = new Map,
      sQ = (QQ, WQ) => (zQ.has(QQ) && console.warn(`Gameplay blocker "${QQ}" registered twice; the newer one replaces it.`), zQ.set(QQ, WQ), () => {
        zQ.get(QQ) === WQ && zQ.delete(QQ)
      }),
      FQ = () => (0, TQ.b)(document.activeElement),
      PQ = function() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        for (const [WQ, XQ] of zQ)
          if (!QQ.includes(WQ) && XQ()) return WQ;
        return null
      },
      gQ = function() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return "inGame" === wQ.b.get("gameState") && (!(0, qQ.r)() && (!FQ() && null === PQ(QQ)))
      }
  },
  8545: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      $: () => wQ,
      D: () => pQ,
      G: () => iQ,
      K: () => GQ,
      O: () => VQ,
      S: () => yQ,
      V: () => PQ,
      X: () => rQ,
      Y: () => IQ,
      Z: () => qQ,
      cb: () => bQ,
      d: () => AQ,
      fb: () => lQ,
      gb: () => cQ,
      h: () => hQ,
      ib: () => UQ,
      l: () => gQ,
      p: () => FQ,
      s: () => sQ,
      t: () => dQ,
      u: () => DQ,
      v: () => vQ,
      w: () => TQ,
      z: () => JQ
    });
    const wQ = ["A", "B", "X", "Y", "LB", "RB", "LT", "RT", "View", "Menu", "LS", "RS", "Up", "Down", "Left", "Right", "Home"],
      qQ = wQ.length,
      TQ = function() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return {
          values: new Array(qQ).fill(0),
          leftStick: {
            x: 0,
            y: 0
          },
          rightStick: {
            x: 0,
            y: 0
          },
          timestampMs: QQ
        }
      },
      zQ = Object.fromEntries(wQ.map(((QQ, WQ) => [QQ, WQ]))),
      sQ = QQ => zQ[QQ],
      FQ = function(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .95;
        const wQ = Math.hypot(QQ.x, QQ.y);
        if (wQ <= WQ) return {
          x: 0,
          y: 0
        };
        const qQ = Math.min(1, (wQ - WQ) / Math.max(1e-4, XQ - WQ));
        return {
          x: QQ.x / wQ * qQ,
          y: QQ.y / wQ * qQ
        }
      },
      PQ = ["exponential", "linear", "boost"],
      gQ = (QQ, WQ) => {
        const XQ = Math.hypot(QQ.x, QQ.y);
        if (0 === XQ) return {
          x: 0,
          y: 0
        };
        const wQ = ((QQ, WQ) => {
          const XQ = Math.max(0, Math.min(1, QQ));
          return "linear" === WQ ? XQ : XQ * XQ
        })(XQ, WQ);
        return {
          x: QQ.x / XQ * wQ,
          y: QQ.y / XQ * wQ
        }
      },
      JQ = .5,
      rQ = .3,
      IQ = .2,
      jQ = sQ("LT"),
      BQ = sQ("RT"),
      yQ = QQ => QQ === jQ || QQ === BQ,
      VQ = (QQ, WQ) => {
        const XQ = sQ(WQ);
        return yQ(XQ) ? QQ[XQ] > .35 : QQ[XQ] >= JQ
      },
      DQ = (QQ, WQ) => QQ.map(((QQ, XQ) => yQ(XQ) ? WQ[XQ] ? QQ > .35 : QQ >= .55 : QQ >= JQ)),
      pQ = ["Up", "Down", "Left", "Right"],
      GQ = QQ => pQ.includes(QQ),
      UQ = function(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .5;
        return Math.hypot(QQ.x, QQ.y) < WQ ? null : Math.abs(QQ.x) > Math.abs(QQ.y) ? QQ.x > 0 ? "Right" : "Left" : QQ.y > 0 ? "Down" : "Up"
      },
      bQ = {
        initialDelayMs: 350,
        intervalMs: 120
      },
      vQ = {
        initialDelayMs: 350,
        intervalMs: 150
      },
      dQ = ["default", "slow", "off"],
      HQ = 800,
      aQ = 250,
      lQ = (QQ, WQ) => "off" === WQ ? null : "slow" === WQ ? {
        initialDelayMs: Math.max(QQ.initialDelayMs, HQ),
        intervalMs: Math.max(QQ.intervalMs, aQ)
      } : QQ;
    class hQ {
      constructor(QQ) {
        this.readTiming = QQ, this.Ds = !1, this.timing = null, this.nextFireMs = 0
      }
      update(QQ, WQ) {
        return QQ ? this.Ds ? !!(this.timing && WQ >= this.nextFireMs) && (this.nextFireMs = WQ + this.timing.intervalMs, !0) : (this.Ds = !0, this.timing = this.readTiming(), this.nextFireMs = WQ + (null !== (XQ = null === (wQ = this.timing) || void 0 === wQ ? void 0 : wQ.initialDelayMs) && void 0 !== XQ ? XQ : 0), !0) : (this.Ds = !1, !1);
        var XQ, wQ
      }
      reset() {
        this.Ds = !1
      }
    }
    const iQ = {
        initialDelayMs: 350,
        intervalMs: 80
      },
      cQ = {
        initialDelayMs: 400,
        intervalMs: 90
      };
    class AQ {
      constructor(QQ) {
        this.timer = QQ, this.direction = null
      }
      update(QQ, WQ) {
        return QQ !== this.direction && (this.timer.reset(), this.direction = QQ), this.timer.update(null !== QQ, WQ) ? QQ : null
      }
      reset() {
        this.timer.reset(), this.direction = null
      }
    }
  },
  9084: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => qQ,
      d: () => TQ
    });
    let wQ = -1 / 0;
    const qQ = () => {
        wQ = performance.now()
      },
      TQ = QQ => performance.now() - wQ < QQ
  },
  9041: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => zQ,
      e: () => TQ
    });
    var wQ = XQ(8572),
      qQ = XQ(8545);
    const TQ = QQ => (0, qQ.fb)(QQ, (0, wQ.g)().buttonRepeat),
      zQ = QQ => new qQ.h((() => TQ(QQ)))
  },
  8590: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => FQ,
      h: () => TQ,
      l: () => sQ
    });
    var wQ = XQ(31),
      qQ = XQ(8572);
    const TQ = (QQ, WQ) => "OpenShop" === QQ ? "shop" === WQ : "OpenLobbyLeaderboard" !== QQ || "leaderboard" === WQ;
    let zQ = !1;
    const sQ = QQ => {
        QQ !== zQ && (zQ = QQ, wQ.k.mB(qQ.b, (0, qQ.g)()))
      },
      FQ = () => ((QQ, WQ) => "shop" === QQ && WQ ? "shop" : "leaderboard")((0, qQ.g)().leaderboardButton, zQ)
  },
  8585: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      $: () => BQ,
      A: () => gQ,
      B: () => FQ,
      C: () => sQ,
      G: () => UQ,
      I: () => rQ,
      K: () => IQ,
      N: () => JQ,
      O: () => GQ,
      R: () => PQ,
      U: () => VQ,
      V: () => aQ,
      X: () => pQ,
      d: () => EQ,
      db: () => yQ,
      f: () => uQ,
      hb: () => jQ,
      ib: () => DQ,
      j: () => lQ,
      jb: () => cQ,
      lb: () => TQ,
      mb: () => bQ,
      n: () => zQ,
      o: () => HQ,
      ob: () => CQ,
      rb: () => dQ,
      s: () => vQ,
      t: () => AQ,
      w: () => RQ
    });
    var wQ = XQ(8563),
      qQ = XQ(8545);
    const TQ = {
        min: 25,
        max: 500,
        step: 5
      },
      zQ = {
        min: 25,
        max: 100,
        step: 5
      },
      sQ = {
        min: 0,
        max: .4,
        step: .01
      },
      FQ = {
        min: 25,
        max: 300,
        step: 5
      },
      PQ = {
        min: .5,
        max: 6,
        step: .1
      },
      gQ = (QQ, WQ) => {
        if (!Number.isFinite(QQ)) return WQ.min;
        const XQ = WQ.min + Math.round((QQ - WQ.min) / WQ.step) * WQ.step,
          wQ = Math.min(WQ.max, Math.max(WQ.min, XQ));
        return Math.round(1e3 * wQ) / 1e3
      },
      JQ = QQ => `${Math.round(QQ)}%`,
      rQ = QQ => JQ(100 * QQ),
      IQ = QQ => `${QQ.toFixed(1)}\xd7`,
      jQ = [{
        value: "auto",
        labelKey: "controller:settingsPromptAuto"
      }, {
        value: "xbox",
        labelKey: "controller:settingsPromptXbox"
      }, {
        value: "playstation",
        labelKey: "controller:settingsPromptPlayStation"
      }, {
        value: "nintendo",
        labelKey: "controller:settingsPromptNintendo"
      }, {
        value: "steamdeck",
        labelKey: "controller:settingsPromptSteamDeck"
      }, {
        value: "generic",
        labelKey: "controller:settingsPromptGeneric"
      }],
      BQ = [{
        value: "exponential",
        labelKey: "controller:settingsCurveExponential"
      }, {
        value: "linear",
        labelKey: "controller:settingsCurveLinear"
      }, {
        value: "boost",
        labelKey: "controller:settingsCurveBoost"
      }],
      yQ = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "focus",
        labelKey: "controller:settingsMenuNavFocus"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      VQ = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "slot",
        labelKey: "controller:settingsInventoryNavSlot"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      DQ = [{
        value: "wheel",
        labelKey: "controller:settingsQuickChatWheel"
      }, {
        value: "off",
        labelKey: "controller:settingsQuickChatOff"
      }],
      pQ = [{
        value: "shop",
        labelKey: "controller:settingsLeaderboardButtonShop"
      }, {
        value: "leaderboard",
        labelKey: "controller:settingsLeaderboardButtonLeaderboard"
      }],
      GQ = [{
        value: "always",
        labelKey: "controller:settingsGyroAlways"
      }, {
        value: "aiming",
        labelKey: "controller:settingsGyroWhileAiming"
      }, {
        value: "button",
        labelKey: "controller:settingsGyroWhileButton"
      }],
      UQ = [{
        value: "tapHold",
        labelKey: "controller:settingsEmoteButtonTapHold"
      }, {
        value: "wheel",
        labelKey: "controller:settingsEmoteButtonWheel"
      }],
      bQ = [{
        value: "toggle",
        labelKey: "controller:settingsSneakToggle"
      }, {
        value: "hold",
        labelKey: "controller:settingsSneakHold"
      }],
      vQ = [{
        value: "default",
        labelKey: "controller:settingsButtonRepeatDefault"
      }, {
        value: "slow",
        labelKey: "controller:settingsButtonRepeatSlow"
      }, {
        value: "off",
        labelKey: "controller:settingsButtonRepeatOff"
      }],
      dQ = [{
        value: "short",
        labelKey: "controller:settingsTapHoldShort"
      }, {
        value: "medium",
        labelKey: "controller:settingsTapHoldMedium"
      }, {
        value: "long",
        labelKey: "controller:settingsTapHoldLong"
      }],
      HQ = [{
        value: "hold",
        labelKey: "controller:settingsAttackHold"
      }, {
        value: "toggle",
        labelKey: "controller:settingsAttackToggle"
      }],
      aQ = {
        southpaw: "controller:settingsLayoutSouthpaw",
        triggersSwapped: "controller:settingsLayoutTriggersSwapped"
      },
      lQ = {
        jump: "controller:settingsActionJump",
        sneak: "controller:settingsActionSneak",
        sneakToggle: "controller:settingsActionSneakToggle",
        sprint: "controller:settingsActionSprint",
        attack: "controller:settingsActionAttack",
        use: "controller:settingsActionUse",
        hotbarPrevious: "controller:settingsActionHotbarPrevious",
        hotbarNext: "controller:settingsActionHotbarNext",
        inventory: "controller:settingsActionInventory",
        actionButton: "controller:settingsActionActionButton",
        perspective: "controller:settingsActionPerspective",
        pickBlock: "controller:settingsActionPickBlock",
        drop: "controller:settingsActionDrop",
        emoteWheel: "controller:settingsActionEmoteWheel",
        chat: "controller:settingsActionChat",
        pause: "controller:settingsActionPause",
        leaderboard: "controller:settingsActionLeaderboard",
        menuConfirm: "controller:settingsActionMenuConfirm",
        menuBack: "controller:settingsActionMenuBack",
        menuTabPrevious: "controller:settingsActionMenuTabPrevious",
        menuTabNext: "controller:settingsActionMenuTabNext",
        menuPageUp: "controller:settingsActionMenuPageUp",
        menuPageDown: "controller:settingsActionMenuPageDown",
        menuSecondary: "controller:settingsActionMenuSecondary",
        menuToggleCursor: "controller:settingsActionMenuToggleCursor",
        inventoryPrimary: "controller:settingsActionInventoryPrimary",
        inventorySecondary: "controller:settingsActionInventorySecondary",
        inventoryQuickMove: "controller:settingsActionInventoryQuickMove",
        inventoryClose: "controller:settingsActionInventoryClose",
        inventoryPanelPrevious: "controller:settingsActionInventoryPanelPrevious",
        inventoryPanelNext: "controller:settingsActionInventoryPanelNext",
        inventoryDrop: "controller:settingsActionInventoryDrop",
        inventoryHotbarSwap: "controller:settingsActionInventoryHotbarSwap",
        keyboardType: "controller:settingsActionKeyboardType",
        keyboardBackspace: "controller:settingsActionKeyboardBackspace",
        keyboardSpace: "controller:settingsActionKeyboardSpace",
        keyboardCaretLeft: "controller:settingsActionKeyboardCaretLeft",
        keyboardCaretRight: "controller:settingsActionKeyboardCaretRight",
        keyboardShift: "controller:settingsActionKeyboardShift",
        keyboardSymbols: "controller:settingsActionKeyboardSymbols",
        keyboardSubmit: "controller:settingsActionKeyboardSubmit",
        keyboardClose: "controller:settingsActionKeyboardClose",
        keyboardChannel: "controller:settingsActionKeyboardChannel"
      },
      hQ = {
        gameplay: "controller:settingsGroupGameplay",
        menu: "controller:settingsGroupMenus",
        inventory: "controller:settingsGroupInventory",
        keyboard: "controller:settingsGroupKeyboard"
      },
      iQ = [{
        kind: "fixed",
        stick: "move",
        labelKey: "controller:settingsActionMove"
      }, {
        kind: "fixed",
        stick: "look",
        labelKey: "controller:settingsActionLook"
      }],
      cQ = wQ.b.map((QQ => {
        let {
          group: WQ,
          actions: XQ
        } = QQ;
        const wQ = XQ.map((QQ => ({
          kind: "action",
          action: QQ
        })));
        return {
          titleKey: hQ[WQ],
          rows: "gameplay" === WQ ? [...iQ, ...wQ] : wQ
        }
      })),
      AQ = qQ.$.filter((QQ => "Home" !== QQ)),
      RQ = 1e4;
    class EQ {
      constructor(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
        this.cancelButton = QQ, this.openButton = WQ, this.accepts = XQ, this.startMs = null, this.ignoredUntilMs = new Map, this.cancelDownAtMs = null
      }
      update(QQ, WQ) {
        var XQ;
        this.updateIgnored(QQ, WQ);
        const wQ = WQ - (null !== (XQ = this.startMs) && void 0 !== XQ ? XQ : WQ) >= 250;
        for (const qQ of AQ)
          if (qQ !== this.cancelButton && wQ && !this.ignoredUntilMs.has(qQ) && QQ.wasPressed(qQ) && this.accepts(qQ)) return {
            kind: "bind",
            button: qQ
          };
        if (this.ignoredUntilMs.has(this.cancelButton)) return null;
        if (QQ.wasPressed(this.cancelButton)) {
          if (!this.accepts(this.cancelButton)) return {
            kind: "cancel"
          };
          this.cancelDownAtMs = WQ
        }
        return null === this.cancelDownAtMs ? null : QQ.isHeld(this.cancelButton) && WQ - this.cancelDownAtMs >= 700 ? (this.cancelDownAtMs = null, {
          kind: "bind",
          button: this.cancelButton
        }) : QQ.wasReleased(this.cancelButton) ? (this.cancelDownAtMs = null, {
          kind: "cancel"
        }) : null
      }
      getBindHoldProgress(QQ) {
        return null === this.cancelDownAtMs ? 0 : Math.min(1, (QQ - this.cancelDownAtMs) / 700)
      }
      updateIgnored(QQ, WQ) {
        if (null === this.startMs) {
          this.startMs = WQ;
          for (const WQ of AQ) QQ.isDown(WQ) && this.ignoredUntilMs.set(WQ, 1 / 0);
          this.openButton && !this.ignoredUntilMs.has(this.openButton) && this.ignoredUntilMs.set(this.openButton, WQ + 250)
        }
        for (const [XQ, wQ] of this.ignoredUntilMs) {
          const qQ = QQ.isDown(XQ);
          wQ === 1 / 0 ? qQ || XQ !== this.openButton ? qQ || this.ignoredUntilMs.delete(XQ) : this.ignoredUntilMs.set(XQ, WQ + 250) : WQ >= wQ ? this.ignoredUntilMs.delete(XQ) : qQ && this.ignoredUntilMs.set(XQ, 1 / 0)
        }
      }
    }
    const CQ = 6e3;
    class uQ {
      constructor() {
        this.downAtMs = null, this.pressesAtMs = []
      }
      update(QQ, WQ) {
        let {
          pressed: XQ,
          Ds: wQ
        } = QQ;
        if (XQ) {
          const QQ = this.pressesAtMs.at(-1);
          if (this.pressesAtMs = void 0 !== QQ && WQ - QQ < 1500 ? [...this.pressesAtMs, WQ] : [WQ], this.pressesAtMs.length >= 3) return 1
        }
        return wQ ? (this.downAtMs ??= WQ, Math.min(1, (WQ - this.downAtMs) / 1500)) : (this.downAtMs = null, 0)
      }
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
  5378: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => TQ,
      i: () => zQ
    });
    var wQ = XQ(61);
    const qQ = new WeakMap,
      TQ = QQ => {
        var WQ;
        const XQ = QQ.closest("[data-pad-slider]");
        return XQ && null !== (WQ = qQ.get(XQ)) && void 0 !== WQ ? WQ : null
      },
      zQ = (QQ, WQ) => {
        const XQ = (0, wQ.useRef)(WQ);
        XQ.current = WQ, (0, wQ.useEffect)((() => {
          if (QQ.current) return ((QQ, WQ) => (qQ.set(QQ, WQ), () => {
            qQ.get(QQ) === WQ && qQ.delete(QQ)
          }))(QQ.current, {
            adjust: QQ => {
              XQ.current.adjust(QQ)
            },
            setFraction: QQ => {
              XQ.current.setFraction(QQ)
            },
            endDrag: () => {
              XQ.current.endDrag()
            }
          })
        }), [QQ])
      }
  },
  9176: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => qQ,
      g: () => zQ,
      j: () => TQ,
      n: () => wQ,
      r: () => sQ,
      t: () => PQ,
      w: () => gQ
    });
    const wQ = "controllerActionWheelOpen",
      qQ = "controllerActionWheelAim",
      TQ = "controllerActionWheelCommit",
      zQ = "controllerActionWheelClose",
      sQ = "controllerActionWheelPick";
    let FQ = !1;
    const PQ = () => FQ,
      gQ = QQ => {
        FQ = QQ
      }
  },
  9174: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => TQ,
      f: () => qQ
    });
    let wQ = 0;
    const qQ = () => {
        wQ++
      },
      TQ = () => wQ
  },
  9096: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => FQ,
      g: () => qQ,
      k: () => zQ,
      l: () => TQ,
      p: () => wQ,
      q: () => PQ
    });
    const wQ = "controllerQuickChatWheelOpen",
      qQ = "controllerQuickChatWheelAim",
      TQ = "controllerQuickChatWheelCommit",
      zQ = "controllerQuickChatWheelClose";
    let sQ = !1;
    const FQ = () => sQ,
      PQ = QQ => {
        sQ = QQ
      }
  },
  9104: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => TQ,
      g: () => qQ
    });
    var wQ = XQ(31);
    const qQ = "localBlockBroken";

    function TQ() {
      return {
        onPlayerChangeBlock(QQ, WQ, XQ, TQ, zQ, sQ) {
          "Air" === sQ && wQ.k.mB(qQ)
        }
      }
    }
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
  9101: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => qQ
    });
    var wQ = XQ(1290);

    function qQ(QQ, WQ) {
      var XQ, qQ;
      try {
        const XQ = (0, wQ.c)();
        if ("function" === typeof XQ) {
          const wQ = new XQ(QQ, WQ);
          if (wQ.type === QQ) return wQ
        }
      } catch {}
      const TQ = document.createEvent("Event");
      return TQ.initEvent(QQ, null !== (XQ = null === WQ || void 0 === WQ ? void 0 : WQ.bubbles) && void 0 !== XQ && XQ, null !== (qQ = null === WQ || void 0 === WQ ? void 0 : WQ.cancelable) && void 0 !== qQ && qQ), TQ
    }
  },
  9145: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => zQ
    });
    var wQ = XQ(9153),
      qQ = XQ(663),
      TQ = XQ(158);

    function zQ(QQ) {
      var WQ, XQ;
      if ((0, qQ.G)(QQ)) return !0;
      const zQ = null !== (WQ = null === (XQ = TQ.siteUsedData[TQ.siteUsed]) || void 0 === XQ ? void 0 : XQ.adConfig.showRewardedAds) && void 0 !== WQ && WQ;
      for (const qQ in QQ) {
        const WQ = QQ[qQ];
        if (null !== WQ && void 0 !== WQ && WQ.items)
          for (const QQ in WQ.items)
            if ((0, wQ.k)(WQ.items[QQ], zQ)) return !1
      }
      return !0
    }
  },
  9153: (QQ, WQ, XQ) => {
    function wQ(QQ, WQ) {
      return !QQ.hidden && (WQ || !QQ.isRewardedAd)
    }

    function qQ(QQ) {
      return "object" === typeof QQ ? QQ.option : QQ
    }

    function TQ(QQ, WQ) {
      var XQ;
      if ("dropdown" === (null === (XQ = QQ.userInput) || void 0 === XQ ? void 0 : XQ.type) && "object" === typeof QQ.userInput.dropdownOptions[0]) {
        for (const XQ of QQ.userInput.dropdownOptions)
          if (qQ(XQ) === WQ) return "object" === typeof XQ ? XQ.cost : QQ.cost;
        console.error("Didn't find matching option for dropdown item. Item:", QQ, "input:", WQ)
      }
      return QQ.cost
    }

    function zQ(QQ, WQ, XQ) {
      var wQ;
      const qQ = null !== (wQ = XQ.excludedPlayers) && void 0 !== wQ ? wQ : [WQ];
      return QQ.filter((QQ => !qQ.includes(QQ)))
    }
    XQ.d(WQ, {
      c: () => TQ,
      e: () => qQ,
      i: () => zQ,
      k: () => wQ
    })
  },
  9179: () => {},
  8626: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/A.926fb88933484dfbde14.svg"
  },
  8633: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/B.9f5ec099f78f84e44427.svg"
  },
  8635: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  8640: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  8642: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/LB.3a20b15927b55d5d8b60.svg"
  },
  8644: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  8652: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/LT.9fdc5e69011b9d41f50a.svg"
  },
  8655: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  8660: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8664: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Menu.c903a662eb685211e52e.svg"
  },
  8670: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/RB.bba470ddb76ceec5d168.svg"
  },
  8677: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  8684: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/RT.e5a9fbcc3c79550111ca.svg"
  },
  8692: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  8697: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8703: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  8711: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/View.0c9378b5d720a636d50d.svg"
  },
  8715: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/X.c9377519af94e6dce1d7.svg"
  },
  8717: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Y.62d8c17731dd2e172426.svg"
  },
  8722: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/A.958a6de9474f8d0c9caf.svg"
  },
  8727: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/B.d05958bfa88a1162b47a.svg"
  },
  8734: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Down.db68fb3980768eb54671.svg"
  },
  8741: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  8745: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/LB.37a3c5128c958ec2a0c2.svg"
  },
  8748: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/LS.15b0cc5bf3f2fe7bbd8b.svg"
  },
  8753: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/LT.5412ae5222c69f8c833f.svg"
  },
  8762: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Left.4457b2895ce94a5df32e.svg"
  },
  8770: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8775: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Menu.1e8427f8133c9d456c53.svg"
  },
  8777: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/RB.c96c4aa2590209e930c7.svg"
  },
  8786: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/RS.8d70d147cf1ab136e845.svg"
  },
  8788: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/RT.1e4691bb5a7c049693df.svg"
  },
  8795: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Right.a1e101413040c540b879.svg"
  },
  8802: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8806: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Up.7544a65ad4f611a55775.svg"
  },
  8812: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/View.003cae39de89cae0b9d8.svg"
  },
  8818: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/X.d88b6e62dd8fb4bda32a.svg"
  },
  8827: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Y.428d3e70775877892f82.svg"
  },
  8830: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  8836: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  8840: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  8846: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Home.ea8b009cfa9562aa644e.svg"
  },
  8855: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/LB.f283d355d22fc107d6d6.svg"
  },
  8857: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  8864: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/LT.13e66c122e7ee04bb876.svg"
  },
  8866: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  8872: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8879: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Menu.90fc4e918900eb5062a0.svg"
  },
  8885: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/RB.918a7f16dc054d96b6f3.svg"
  },
  8887: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  8894: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/RT.a0523211130959598bed.svg"
  },
  8899: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  8908: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8916: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  8921: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/View.0bc952e292c28c3baac2.svg"
  },
  8924: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  8931: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  },
  8936: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  8945: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  8951: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  8956: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Home.8898f76b20962fe52ab7.svg"
  },
  8961: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/LB.689ba3703ae248f2e4cc.svg"
  },
  8969: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  8971: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/LT.9c2d10d335ab5c590525.svg"
  },
  8976: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  8978: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8983: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Menu.9e485791ea97009871ca.svg"
  },
  8990: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/RB.7ee5ce48dd551f993f80.svg"
  },
  8993: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  8999: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/RT.903ecadc55a9e9e00f07.svg"
  },
  9006: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  9008: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  9017: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  9023: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/View.3c5eeb34f0413bde4a65.svg"
  },
  9027: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  9033: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);