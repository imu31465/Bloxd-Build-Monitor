export const id = 34;
export const ids = [34];
export const modules = {
  9433: (WW, iW, OW) => {
    var mW = {
      "./nintendo/A.svg": 9442,
      "./nintendo/B.svg": 9445,
      "./nintendo/Down.svg": 9451,
      "./nintendo/Home.svg": 9456,
      "./nintendo/LB.svg": 9461,
      "./nintendo/LS.svg": 9468,
      "./nintendo/LT.svg": 9476,
      "./nintendo/Left.svg": 9485,
      "./nintendo/LeftStick.svg": 9493,
      "./nintendo/Menu.svg": 9496,
      "./nintendo/RB.svg": 9501,
      "./nintendo/RS.svg": 9508,
      "./nintendo/RT.svg": 9517,
      "./nintendo/Right.svg": 9520,
      "./nintendo/RightStick.svg": 9523,
      "./nintendo/Up.svg": 9526,
      "./nintendo/View.svg": 9531,
      "./nintendo/X.svg": 9535,
      "./nintendo/Y.svg": 9544,
      "./playstation/A.svg": 9551,
      "./playstation/B.svg": 9560,
      "./playstation/Down.svg": 9564,
      "./playstation/Home.svg": 9569,
      "./playstation/LB.svg": 9578,
      "./playstation/LS.svg": 9584,
      "./playstation/LT.svg": 9589,
      "./playstation/Left.svg": 9593,
      "./playstation/LeftStick.svg": 9602,
      "./playstation/Menu.svg": 9611,
      "./playstation/RB.svg": 9620,
      "./playstation/RS.svg": 9626,
      "./playstation/RT.svg": 9631,
      "./playstation/Right.svg": 9637,
      "./playstation/RightStick.svg": 9644,
      "./playstation/Up.svg": 9652,
      "./playstation/View.svg": 9657,
      "./playstation/X.svg": 9666,
      "./playstation/Y.svg": 9668,
      "./steamdeck/A.svg": 9673,
      "./steamdeck/B.svg": 9677,
      "./steamdeck/Down.svg": 9685,
      "./steamdeck/Home.svg": 9693,
      "./steamdeck/LB.svg": 9695,
      "./steamdeck/LS.svg": 9700,
      "./steamdeck/LT.svg": 9706,
      "./steamdeck/Left.svg": 9712,
      "./steamdeck/LeftStick.svg": 9716,
      "./steamdeck/Menu.svg": 9721,
      "./steamdeck/RB.svg": 9729,
      "./steamdeck/RS.svg": 9736,
      "./steamdeck/RT.svg": 9744,
      "./steamdeck/Right.svg": 9751,
      "./steamdeck/RightStick.svg": 9758,
      "./steamdeck/Up.svg": 9765,
      "./steamdeck/View.svg": 9770,
      "./steamdeck/X.svg": 9779,
      "./steamdeck/Y.svg": 9784,
      "./xbox/A.svg": 9791,
      "./xbox/B.svg": 9794,
      "./xbox/Down.svg": 9798,
      "./xbox/Home.svg": 9804,
      "./xbox/LB.svg": 9809,
      "./xbox/LS.svg": 9812,
      "./xbox/LT.svg": 9818,
      "./xbox/Left.svg": 9827,
      "./xbox/LeftStick.svg": 9831,
      "./xbox/Menu.svg": 9836,
      "./xbox/RB.svg": 9845,
      "./xbox/RS.svg": 9853,
      "./xbox/RT.svg": 9858,
      "./xbox/Right.svg": 9860,
      "./xbox/RightStick.svg": 9866,
      "./xbox/Up.svg": 9870,
      "./xbox/View.svg": 9879,
      "./xbox/X.svg": 9888,
      "./xbox/Y.svg": 9891
    };

    function EW(WW) {
      var iW = NW(WW);
      return OW(iW)
    }

    function NW(WW) {
      if (!OW.o(mW, WW)) {
        var iW = new Error("Cannot find module '" + WW + "'");
        throw iW.code = "MODULE_NOT_FOUND", iW
      }
      return mW[WW]
    }
    EW.keys = function() {
      return Object.keys(mW)
    }, EW.resolve = NW, WW.exports = EW, EW.id = 9433
  },
  10025: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => oW,
      f: () => hW,
      g: () => HW
    });
    var mW = OW(62),
      EW = OW(5251),
      NW = OW(1107),
      PW = OW(1526),
      LW = OW(27),
      cW = OW(4629),
      wW = OW(3090),
      tW = OW(1230),
      ZW = OW(3540),
      xW = OW(2037),
      lW = OW(2075),
      AW = OW(1172),
      bW = OW(25),
      jW = OW(1729),
      UW = OW(1089),
      kW = OW.n(UW),
      sW = OW(10027),
      MW = OW(10031),
      KW = OW(10033),
      SW = OW(9952),
      YW = OW(10038),
      yW = OW(4266),
      TW = (OW(10046), OW(1283));
    let JW = null;

    function hW() {
      return null !== JW
    }

    function HW() {
      return "pad" === JW
    }

    function nW() {
      return "inGame" === bW.d.get("gameState") && !(0, jW.l)()
    }

    function uW(WW) {
      return (0, MW.u)(WW, tW.h, MW.i, MW.j, MW.k)
    }
    const oW = (0, mW.memo)((function() {
      const {
        t: WW
      } = (0, AW.B)(), {
        userContext: iW
      } = (0, NW.e)(), [OW, bW] = (0, mW.useState)(null), [UW, hW] = (0, mW.useState)(null), HW = (0, mW.useRef)(null), oW = (0, mW.useCallback)((WW => {
        HW.current = WW, hW(WW)
      }), []), dW = (0, mW.useRef)(0), eW = (0, mW.useRef)(null), vW = (0, mW.useRef)({
        x: 0,
        y: 0
      }), [gW, DW] = (0, mW.useState)(0), VW = (0, mW.useMemo)((() => function(WW) {
        const iW = [];
        for (let mW = 0; mW < tW.h; mW++) {
          var OW;
          iW.push(null !== (OW = WW[mW]) && void 0 !== OW ? OW : null)
        }
        return iW
      }((0, ZW.k)(iW.getPlayerCosmetics().emote))), [iW, gW]);
      (0, lW.c)("cosmeticsUpdated", (WW => {
        WW.some((WW => WW.local && "emote" === WW.NE)) && DW((WW => WW + 1))
      }));
      const pW = (0, mW.useRef)(!1),
        fW = (0, mW.useCallback)((function(WW) {
          let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          "pad" === WW && (0, KW.h)(), pW.current = iW, vW.current = {
            x: 0,
            y: 0
          }, oW(null), bW(WW)
        }), [oW]),
        CW = (0, mW.useCallback)((() => {
          bW(null), oW(null), vW.current = {
            x: 0,
            y: 0
          }
        }), [oW]),
        XW = (0, mW.useCallback)((WW => {
          if (Date.now() < dW.current) return;
          const iW = (0, wW.j)(WW),
            OW = !!iW.holdUntilMove,
            mW = OW ? 600 : Math.ceil(1e3 * iW.animation.animation_length / wW.d) + 200;
          dW.current = Date.now() + mW, eW.current = WW, xW.gameBridge.send("playEmote", WW), xW.gameBridge.send("applyTemporaryThirdPerson", OW ? {} : {
            durationMs: mW
          })
        }), []);
      (0, PW.e)("requestToggleEmoteWheel", (() => {
        null === OW ? nW() && fW("click") : CW()
      })), (0, PW.e)("requestEmoteWheelHoldOpen", (() => {
        null === OW && nW() && fW((0, sW.d)() ? "hold" : "click")
      })), (0, PW.e)("requestEmoteWheelPadOpen", (WW => {
        null !== OW || !nW() || (0, SW.e)() || (0, YW.o)() || fW("pad", WW)
      })), (0, PW.e)("requestEmoteRepeatLast", (() => {
        if (null !== OW || !nW() || (0, SW.e)() || (0, YW.o)()) return;
        const WW = eW.current;
        null !== WW && VW.includes(WW) ? XW(WW) : fW("pad", !0)
      }));
      const BW = () => {
        const WW = HW.current,
          iW = null !== WW ? VW[WW] : null;
        null !== iW && "pad" === OW && Date.now() < dW.current || (CW(), null !== iW && XW(iW))
      };
      (0, PW.e)("emoteWheelPadAim", (WW => {
        if ("pad" !== OW) return;
        const iW = (0, MW.E)(WW, tW.h, HW.current);
        oW(null !== iW && null !== VW[iW] ? iW : null)
      })), (0, PW.e)("requestEmoteWheelPadCommit", (WW => {
        "pad" !== OW || WW && pW.current || BW()
      })), (0, PW.e)("appManagerUpdated|activeInputDevice", (WW => {
        null !== OW && "pad" === OW !== ("gamepad" === WW) && CW()
      })), (0, mW.useLayoutEffect)((() => (JW = OW, (0, cW.x)("emoteWheel", "pad" === OW), LW.l.iZ(cW.p), () => {
        JW = null, (0, cW.x)("emoteWheel", !1), LW.l.iZ(cW.p)
      })), [OW]), (0, PW.e)("requestEmoteWheelHoldRelease", (() => {
        "hold" === OW && BW()
      })), (0, PW.e)("requestEmoteWheelClose", (() => {
        null !== OW && CW()
      })), (0, PW.e)("appManagerUpdated|gameState", (WW => {
        "inGame" !== WW && CW()
      }));
      const qW = () => {
        (0, jW.l)() && CW()
      };
      if ((0, PW.e)("appManagerUpdated|openEverythingMenuName", qW), (0, PW.e)("appManagerUpdated|openInGameMenuName", qW), (0, PW.e)("pointerLockUpdate", (WW => {
          WW || "hold" !== OW || CW()
        })), (0, mW.useEffect)((() => {
          if (null === OW) return;
          const WW = WW => {
            "Escape" === WW.key && (WW.stopImmediatePropagation(), WW.preventDefault(), CW())
          };
          return document.addEventListener("keydown", WW, !0), () => {
            document.removeEventListener("keydown", WW, !0)
          }
        }), [OW, CW]), (0, EW.b)(!0, "click" === OW, "EmoteWheelOverlay"), (0, mW.useEffect)((() => {
          if ("hold" === OW) return xW.gameBridge.send("holdEmoteWheel", !0), () => {
            xW.gameBridge.send("holdEmoteWheel", !1)
          }
        }), [OW]), (0, mW.useEffect)((() => {
          if ("hold" !== OW) return;
          const WW = parseFloat(window.getComputedStyle(document.documentElement).fontSize),
            iW = MW.t * WW,
            mW = MW.r * WW,
            EW = WW => {
              let OW = vW.current.x + WW.movementX,
                EW = vW.current.y + WW.movementY;
              const NW = Math.hypot(OW, EW);
              if (NW > iW) {
                const WW = iW / NW;
                OW *= WW, EW *= WW
              }
              vW.current = {
                x: OW,
                y: EW
              }, oW(function(WW, iW, OW, mW) {
                if (Math.hypot(WW, iW) < OW) return null;
                const EW = (0, MW.v)(WW, iW, tW.h);
                return null === mW[EW] ? null : EW
              }(OW, EW, mW, VW))
            };
          return document.addEventListener("mousemove", EW), () => {
            document.removeEventListener("mousemove", EW)
          }
        }), [OW, VW, oW]), null === OW) return null;
      const RW = "hold" === OW || "pad" === OW,
        GW = null !== UW ? VW[UW] : null,
        IW = null !== GW ? (0, wW.j)(GW).displayName : WW("emotes:pickEmote");
      return (0, TW.jsx)("div", {
        className: kW()("EmoteWheelOverlay", {
          EmoteWheelOverlayPad: "pad" === OW
        }),
        onMouseDown: WW => {
          WW.target === WW.currentTarget && CW()
        },
        children: (0, TW.jsxs)("div", {
          className: "EmoteWheel",
          style: {
            width: 2 * MW.t + "rem",
            height: 2 * MW.t + "rem"
          },
          children: [(0, TW.jsxs)("svg", {
            className: "EmoteWheelSvg",
            viewBox: `0 0 ${MW.o} ${MW.o}`,
            children: [VW.map(((iW, OW) => {
              const mW = null !== iW,
                EW = RW && OW === UW;
              return (0, TW.jsx)("path", {
                d: uW(OW),
                className: kW()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: EW,
                  EmoteWheelWedgeDisabled: !mW
                }),
                onClick: WW => {
                  WW.stopPropagation(), null !== iW && (WW => {
                    CW(), XW(WW)
                  })(iW)
                },
                "aria-label": null !== iW ? (0, wW.j)(iW).displayName : WW("emotes:emptySlot")
              }, OW)
            })), (0, TW.jsx)("circle", {
              className: "EmoteWheelOuterRing",
              cx: MW.i,
              cy: MW.i,
              r: MW.k
            }), (0, TW.jsx)("circle", {
              className: "EmoteWheelInnerRing",
              cx: MW.i,
              cy: MW.i,
              r: MW.j
            }), RW && null !== UW && (0, TW.jsx)("path", {
              className: "EmoteWheelWedgeOutline",
              d: uW(UW)
            })]
          }), VW.map(((WW, iW) => {
            const OW = null !== WW,
              mW = RW && iW === UW,
              EW = (0, MW.w)(iW, tW.h),
              NW = MW.e * Math.cos(EW),
              PW = MW.e * Math.sin(EW);
            return (0, TW.jsx)("div", {
              className: kW()("EmoteWheelSlotIcon", {
                EmoteWheelSlotIconHighlighted: mW,
                EmoteWheelSlotIconDisabled: !OW
              }),
              style: {
                left: `calc(50% + ${NW}rem)`,
                top: `calc(50% + ${PW}rem)`,
                backgroundImage: OW ? `url(${(0,yW.e)("emote",WW)})` : void 0
              },
              "aria-hidden": !0
            }, iW)
          })), (0, TW.jsx)("div", {
            className: "EmoteWheelHint SmallTextBold",
            children: IW
          })]
        })
      })
    }))
  },
  5910: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => AW,
      h: () => MW,
      k: () => bW,
      n: () => sW
    });
    var mW = OW(62),
      EW = OW(5919),
      NW = OW(5041),
      PW = OW(1434),
      LW = OW(4171),
      cW = OW(1089),
      wW = OW.n(cW),
      tW = OW(1422),
      ZW = OW(1856),
      xW = OW(5940),
      lW = OW(1283);

    function AW(WW) {
      let {
        label: iW,
        onClick: OW,
        checked: mW,
        circleInfoText: EW,
        className: LW,
        disabled: cW,
        note: tW
      } = WW;
      return (0, lW.jsxs)("div", {
        "aria-disabled": cW || void 0,
        "data-pad-focusable": !0,
        className: wW()("SettingBox CheckboxContainer", {
          [LW]: LW,
          SettingBoxDisabled: cW
        }),
        onClick: () => {
          cW || OW(!mW)
        },
        children: [(0, lW.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, lW.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, lW.jsx)(NW.e, {
              className: "SettingsCheckbox",
              checked: mW,
              disabled: cW,
              onChange: () => {}
            })
          }), (0, lW.jsxs)("div", {
            className: "CheckboxText",
            children: [iW, EW && (0, lW.jsx)("span", {
              onClick: WW => WW.stopPropagation(),
              children: (0, lW.jsx)(PW.d, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: EW
              })
            })]
          })]
        }), tW && (0, lW.jsx)("div", {
          className: "SettingNote",
          children: tW
        })]
      })
    }

    function bW(WW) {
      let {
        name: iW,
        onChange: OW,
        min: EW,
        max: NW,
        step: LW,
        initValue: cW,
        circleInfoText: tW,
        format: ZW,
        className: xW,
        padStep: AW,
        disabled: bW = !1,
        selectableMax: jW,
        cappedNote: UW,
        note: sW,
        onChangeComplete: MW
      } = WW;
      const [KW, SW] = (0, mW.useState)(cW), YW = (0, mW.useRef)(cW);
      (0, mW.useEffect)((() => {
        YW.current = cW, SW(cW)
      }), [cW]);
      const yW = void 0 !== jW && jW < NW,
        TW = yW ? {
          "--slider-selectable": (jW - EW) / (NW - EW)
        } : void 0,
        JW = yW && UW ? UW : sW;
      return (0, lW.jsxs)("div", {
        className: wW()("SettingBox SettingsSliderDiv", {
          [xW]: xW,
          SettingBoxDisabled: bW,
          SliderCapped: yW
        }),
        style: TW,
        children: [(0, lW.jsxs)("div", {
          className: "SliderText",
          children: [`${iW}: ${ZW?ZW(KW):KW}`, tW && (0, lW.jsx)(PW.d, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: tW
          })]
        }), (0, lW.jsx)("div", {
          className: "SliderDiv",
          children: (0, lW.jsx)(kW, {
            value: KW,
            min: EW,
            max: NW,
            step: LW,
            onChange: WW => {
              if (yW && WW >= jW && KW === jW) return;
              const iW = yW ? Math.min(WW, jW) : WW;
              YW.current = iW, SW(iW), OW(iW)
            },
            onChangeComplete: MW && (() => {
              MW(YW.current)
            }),
            format: ZW,
            padStep: AW,
            disabled: bW
          })
        }), JW && (0, lW.jsx)("div", {
          className: "SettingNote",
          children: JW
        })]
      })
    }
    const jW = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function UW(WW) {
      var iW;
      return (null !== (iW = String(WW).split(".")[1]) && void 0 !== iW ? iW : "").length
    }

    function kW(WW) {
      let {
        value: iW,
        min: OW,
        max: NW,
        step: PW,
        onChange: LW,
        orientation: cW,
        reverse: wW,
        setIsChanging: tW,
        tooltip: ZW,
        labels: AW,
        handleLabel: bW,
        format: kW,
        onChangeStart: sW,
        onChangeComplete: MW,
        padStep: KW,
        disabled: SW = !1
      } = WW;
      const YW = (0, mW.useRef)(null),
        yW = (0, mW.useRef)(null);
      (0, mW.useLayoutEffect)((() => {
        var WW, iW, OW;
        const mW = null !== (WW = null === (iW = YW.current) || void 0 === iW ? void 0 : iW.querySelector(".rangeslider")) && void 0 !== WW ? WW : null;
        null === mW || void 0 === mW || mW.setAttribute("data-pad-slider", ""), null === mW || void 0 === mW || mW.setAttribute("data-pad-focusable", ""), null === mW || void 0 === mW || null === (OW = mW.querySelector(".rangeslider__handle")) || void 0 === OW || OW.setAttribute("data-pad-slider-handle", ""), yW.current = mW
      }), []), (0, mW.useLayoutEffect)((() => {
        var WW, iW;
        SW ? null === (WW = yW.current) || void 0 === WW || WW.setAttribute("aria-disabled", "true") : null === (iW = yW.current) || void 0 === iW || iW.removeAttribute("aria-disabled")
      }), [SW]);
      const TW = Math.max(UW(PW), UW(OW)),
        JW = WW => {
          if (WW >= NW) return NW;
          if (WW <= OW) return OW;
          const iW = Number((Math.round((WW - OW) / PW) * PW + OW).toFixed(TW));
          return Math.min(NW, Math.max(OW, iW))
        },
        hW = (0, mW.useRef)(MW);
      hW.current = MW, (0, mW.useEffect)((() => {
        const WW = YW.current;
        if (!WW) return;
        const iW = WW => {
          var iW;
          jW.has(WW.key) && (null === (iW = hW.current) || void 0 === iW || iW.call(hW))
        };
        return WW.addEventListener("keyup", iW), () => {
          WW.removeEventListener("keyup", iW)
        }
      }), []);
      const HW = (0, mW.useRef)(!1);
      return (0, xW.d)(yW, {
        adjust: WW => {
          if (SW) return;
          const mW = null !== KW && void 0 !== KW ? KW : Math.max(PW, Math.round((NW - OW) / 20 / PW) * PW),
            EW = JW(iW + WW * mW * (wW ? -1 : 1));
          EW !== iW && (null === sW || void 0 === sW || sW(), LW(EW), null === MW || void 0 === MW || MW())
        },
        setFraction: WW => {
          if (SW) return;
          const mW = JW(OW + (wW ? 1 - WW : WW) * (NW - OW));
          mW !== iW && (HW.current || (HW.current = !0, null === sW || void 0 === sW || sW()), LW(mW))
        },
        endDrag: () => {
          HW.current && (HW.current = !1, null === MW || void 0 === MW || MW())
        }
      }), (0, lW.jsx)("div", {
        ref: YW,
        style: {
          display: "contents"
        },
        children: (0, lW.jsx)(EW.c, {
          value: iW,
          min: OW,
          max: NW,
          step: PW,
          onChange: WW => {
            LW(JW(WW))
          },
          orientation: cW,
          reverse: wW,
          tooltip: ZW,
          labels: AW,
          handleLabel: bW,
          format: kW,
          onChangeStart: () => {
            null === sW || void 0 === sW || sW(), null === tW || void 0 === tW || tW(!0)
          },
          onChangeComplete: () => {
            null === tW || void 0 === tW || tW(!1), null === MW || void 0 === MW || MW()
          }
        })
      })
    }
    async function sW() {
      const WW = tW.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: ""
      });
      !0 === await WW.getResult() && (0, ZW.reloadBloxd)()
    }

    function MW(WW) {
      let {
        label: iW,
        options: OW,
        value: mW,
        onChange: EW,
        circleInfoText: NW
      } = WW;
      return (0, lW.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, lW.jsxs)("div", {
          className: "SliderText",
          children: [iW, NW && (0, lW.jsx)(PW.d, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: NW
          })]
        }), (0, lW.jsx)(LW.c, {
          ariaLabel: iW,
          options: OW,
          value: mW,
          onChange: EW
        })]
      })
    }
  },
  9972: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => PW,
      e: () => NW
    });
    var mW = OW(2095);
    const EW = /^(?:Key[A-Z]|Digit[0-9]|Arrow(?:Up|Down|Left|Right)|Space)$/,
      NW = WW => "string" === typeof WW.icon && "" !== WW.icon && "string" === typeof WW.keycode && EW.test(WW.keycode),
      PW = WW => "Space" === WW ? "_" : mW.h[WW]
  },
  10027: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => EW
    });
    var mW = OW(25);

    function EW() {
      return !mW.d.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  10031: (WW, iW, OW) => {
    OW.d(iW, {
      A: () => xW,
      E: () => lW,
      e: () => NW,
      i: () => LW,
      j: () => wW,
      k: () => cW,
      o: () => PW,
      r: () => EW,
      t: () => mW,
      u: () => AW,
      v: () => ZW,
      w: () => tW
    });
    const mW = 14,
      EW = 6,
      NW = (mW + EW) / 2,
      PW = 200,
      LW = PW / 2,
      cW = PW / 2 - 1,
      wW = EW / mW * (PW / 2),
      tW = (WW, iW) => -Math.PI / 2 + 2 * WW * Math.PI / iW,
      ZW = (WW, iW, OW) => {
        const mW = 2 * Math.PI / OW;
        return (Math.round((Math.atan2(iW, WW) + Math.PI / 2) / mW) % OW + OW) % OW
      },
      xW = .5,
      lW = (WW, iW, OW) => Math.hypot(WW.x, WW.y) < xW ? OW : ZW(WW.x, WW.y, iW),
      AW = (WW, iW, OW, mW, EW) => {
        const NW = Math.PI / iW,
          PW = tW(WW, iW),
          LW = PW - NW,
          cW = PW + NW,
          wW = (WW, iW) => `${OW+WW*Math.cos(iW)} ${OW+WW*Math.sin(iW)}`;
        return [`M ${wW(mW,LW)}`, `L ${wW(EW,LW)}`, `A ${EW} ${EW} 0 0 1 ${wW(EW,cW)}`, `L ${wW(mW,cW)}`, `A ${mW} ${mW} 0 0 0 ${wW(mW,LW)}`, "Z"].join(" ")
      }
  },
  10059: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => PW
    });
    var mW = OW(62),
      EW = OW(9997),
      NW = OW(3332);

    function PW() {
      const WW = (0, NW.e)("shopInfo"),
        [, iW] = (0, mW.useState)((() => (0, EW.b)(WW)));
      return (0, NW.d)("shopInfo", (WW => {
        iW((0, EW.b)(WW))
      })), !(0, EW.b)(WW)
    }
  },
  9382: (WW, iW, OW) => {
    OW.d(iW, {
      A: () => AW,
      e: () => PW,
      h: () => EW,
      k: () => NW,
      m: () => xW,
      p: () => ZW,
      q: () => wW,
      s: () => LW,
      v: () => mW,
      y: () => lW
    });
    const mW = ["menuConfirm", "menuBack", "menuTabPrevious", "menuTabNext", "menuPageUp", "menuPageDown", "menuSecondary", "menuToggleCursor"],
      EW = [{
        group: "gameplay",
        actions: ["jump", "sneak", "sneakToggle", "zoom", "sprint", "attack", "use", "hotbarPrevious", "hotbarNext", "inventory", "actionButton", "perspective", "pickBlock", "drop", "emoteWheel", "chat", "pause", "leaderboard"]
      }, {
        group: "menu",
        actions: mW
      }, {
        group: "inventory",
        actions: ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryClose", "inventoryPanelPrevious", "inventoryPanelNext", "inventoryDrop", "inventoryHotbarSwap"]
      }, {
        group: "keyboard",
        actions: ["keyboardType", "keyboardBackspace", "keyboardSpace", "keyboardCaretLeft", "keyboardCaretRight", "keyboardShift", "keyboardSymbols", "keyboardSubmit", "keyboardClose", "keyboardChannel"]
      }],
      NW = {
        jump: "A",
        sneak: "B",
        sneakToggle: "RS",
        zoom: "RS",
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
      PW = [
        ["pickBlock", "perspective"],
        ["zoom", "sneakToggle"]
      ],
      LW = WW => {
        var iW;
        return null !== (iW = PW.find((iW => iW.includes(WW)))) && void 0 !== iW ? iW : [WW]
      },
      cW = Object.fromEntries(EW.flatMap((WW => {
        let {
          group: iW,
          actions: OW
        } = WW;
        return OW.map((WW => [WW, iW]))
      }))),
      wW = WW => cW[WW],
      tW = {
        pause: ["menu"],
        leaderboard: ["menu"],
        inventory: ["menu"],
        menuPageUp: ["inventory"],
        menuPageDown: ["inventory"]
      },
      ZW = WW => {
        var iW;
        return [wW(WW), ...null !== (iW = tW[WW]) && void 0 !== iW ? iW : []]
      },
      xW = new Set(["menu", "inventory", "keyboard"]),
      lW = {
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
        Zoom: "zoom",
        "mid-fire": "pickBlock",
        OpenInventory: "inventory",
        OpenSettings: "pause",
        OpenLobbyLeaderboard: "leaderboard",
        OpenShop: "leaderboard",
        OpenEmoteWheel: "emoteWheel"
      },
      AW = new Set(["forward", "backward", "left", "right"])
  },
  9379: (WW, iW, OW) => {
    OW.d(iW, {
      A: () => uW,
      C: () => yW,
      F: () => sW,
      J: () => JW,
      M: () => tW,
      N: () => TW,
      Q: () => nW,
      b: () => kW,
      f: () => KW,
      h: () => xW,
      k: () => lW,
      o: () => oW,
      r: () => HW,
      v: () => hW,
      y: () => MW
    });
    var mW = OW(9382),
      EW = OW(9384),
      NW = OW(9364),
      PW = OW(9407);
    const LW = WW => {
        var iW, OW;
        return null !== (iW = null === (OW = mW.e.find((iW => {
          let [OW] = iW;
          return OW === WW
        }))) || void 0 === OW ? void 0 : OW[1]) && void 0 !== iW ? iW : WW
      },
      cW = (WW, iW) => {
        var OW;
        const EW = LW(iW);
        return null !== (OW = WW[EW]) && void 0 !== OW ? OW : mW.k[EW]
      },
      wW = new Map([
        ["menuConfirm", "menuBack"],
        ["inventoryPrimary", "inventoryClose"],
        ["keyboardType", "keyboardClose"]
      ].flatMap((WW => {
        let [iW, OW] = WW;
        return [
          [iW, OW],
          [OW, iW]
        ]
      }))),
      tW = (WW, iW) => null !== WW && void 0 !== WW ? WW : "nintendo" === iW,
      ZW = WW => tW((0, EW.m)().swapConfirmBack, (0, EW.q)()) && wW.get(WW) || WW,
      xW = WW => cW((0, EW.m)().bindings, ZW(WW)),
      lW = WW => mW.k[LW(ZW(WW))],
      AW = Object.keys(mW.k),
      bW = WW => "gameplay" === (0, mW.q)(WW) ? ["gameplay"] : (0, mW.p)(WW),
      jW = (WW, iW) => {
        const OW = bW(iW);
        return bW(WW).some((WW => OW.includes(WW)))
      },
      UW = (WW, iW, OW) => {
        const EW = cW(WW, iW),
          PW = new Set((0, mW.s)(iW)),
          wW = [...PW];
        for (let mW = wW.pop(); mW; mW = wW.pop())
          for (const iW of AW) {
            const NW = cW(WW, iW);
            PW.has(iW) || NW !== OW && NW !== EW || !jW(mW, iW) || (PW.add(iW), wW.push(iW))
          }
        const tW = {
          ...WW
        };
        for (const ZW of PW) {
          const iW = cW(WW, ZW) === EW ? OW : EW,
            PW = (0, mW.p)(ZW).some((WW => mW.m.has(WW)));
          if ((0, NW.E)(iW) && PW) return null;
          tW[LW(ZW)] = iW
        }
        for (const NW of Object.keys(tW)) tW[NW] === mW.k[NW] && delete tW[NW];
        return tW
      },
      kW = (WW, iW) => null !== UW((0, EW.m)().bindings, ZW(WW), iW),
      sW = (WW, iW) => {
        if (xW(WW) === iW) return !0;
        const OW = UW((0, EW.m)().bindings, ZW(WW), iW);
        return !!OW && ((0, EW.r)({
          bindings: OW
        }), !0)
      },
      MW = (WW, iW) => {
        const OW = (0, mW.s)(iW);
        return AW.filter((iW => LW(iW) === iW && !OW.includes(iW) && cW(WW, ZW(iW)) !== xW(iW)))
      },
      KW = ["southpaw", "triggersSwapped"],
      SW = {
        southpaw: {
          sprint: "RS",
          sneakToggle: "LS"
        },
        triggersSwapped: {
          attack: "LT",
          use: "RT"
        }
      },
      YW = WW => Object.keys(SW[WW]),
      yW = (WW, iW) => "southpaw" === WW ? iW.swapSticks : YW(WW).every((OW => cW(iW.bindings, OW) === SW[WW][OW])),
      TW = (WW, iW) => {
        const OW = (0, EW.m)();
        let NW = OW.bindings;
        for (const EW of YW(WW)) {
          const OW = iW ? SW[WW][EW] : mW.k[EW];
          if (NW = UW(NW, EW, OW), !NW) return !1
        }
        return (0, EW.r)({
          swapSticks: "southpaw" === WW ? iW : OW.swapSticks,
          bindings: NW
        }), !0
      },
      JW = () => {
        (0, EW.r)({
          swapSticks: !1,
          bindings: {}
        })
      },
      hW = () => (0, EW.m)().swapSticks ? "RightStick" : "LeftStick",
      HW = () => (0, EW.m)().swapSticks ? "LeftStick" : "RightStick",
      nW = WW => (0, EW.m)().swapSticks && (0, NW.E)(WW),
      uW = WW => nW(WW) ? hW() : HW(),
      oW = WW => {
        if (mW.A.has(WW)) return hW();
        const iW = mW.y[WW];
        return iW && ("leaderboard" !== iW || (0, PW.f)(WW, (0, PW.b)())) ? xW(iW) : null
      }
  },
  9348: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      ControllerCategory: () => KL,
      ControllerGlyph: () => TE,
      ControllerRoot: () => KP,
      PadLobbyShortcuts: () => VP,
      PadSneakChip: () => HP,
      PadTooltip: () => uP,
      attachPressToContinue: () => GP,
      getBoundButton: () => tW.h,
      getControllerSettings: () => xW.m,
      getGlyphForNoaAction: () => tW.o,
      getInventoryCursorState: () => YL,
      getMenuShortcutButton: () => GO,
      getPadGlyphIconName: () => TP,
      getPadGlyphIconUrl: () => JP,
      getPadRepeatTiming: () => bW.f,
      handOverPadFocus: () => TL,
      hasActivePad: () => SL,
      isPadSteppingSlots: () => yL
    });
    const mW = JSON.parse('{"controller":{"inventoryTake":"Take","inventoryTakeHalf":"Take half","inventoryPlace":"Place","inventoryPlaceOne":"Place one","inventoryQuickMove":"Quick move","inventoryToHotbar":"To hotbar","inventoryPutBack":"Put back","inventoryHotbarSwap":"Swap with hotbar","inventorySwapHere":"Swap here","inventoryCancel":"Cancel","inventoryClose":"Close","inventoryDrop":"Drop (hold: stack)","inventorySelect":"Select","inventoryCraft":"Craft (hold to repeat)","inventoryCraftAll":"Craft all","inventoryChooseRecipe":"Choose","inventoryBackToRecipes":"Back to recipes","inventoryType":"Type","inventoryPanels":"Switch panel","inventoryCategory":"Category","inventoryPage":"Page","disconnected":"Controller disconnected","gameplayReload":"Reload","gameplayActionWheelHint":"(hold for more)","gameplaySneaking":"Sneaking","gameplayLoadFailedTitle":"Controller unavailable","gameplayLoadFailedSubtitle":"Reload the page to play with your controller.","gameplayDropStack":"Keep holding to drop the stack","gameplayAttackLatched":"Attacking","gameplayPickBlock":"Pick block","padButtonView":"View","padButtonMenu":"Menu","padButtonHome":"Home","padButtonCreate":"Create","padButtonOptions":"Options","padButtonDpadUp":"D-pad \u2191","padButtonDpadDown":"D-pad \u2193","padButtonDpadLeft":"D-pad \u2190","padButtonDpadRight":"D-pad \u2192","padButtonLeftStick":"L Stick","padButtonRightStick":"R Stick","settingsLook":"Look","settingsLookSensitivityX":"Look sensitivity (horizontal)","settingsLookSensitivityY":"Look sensitivity (vertical)","settingsAimLookSensitivity":"Look sensitivity while aiming (use held)","settingsInvertLookX":"Invert horizontal look","settingsInvertLookY":"Invert vertical look","settingsLookCurve":"Look curve","settingsLookCurveHint":"Steep gives finer aim near the centre, Linear turns at an even rate, and Boost turns faster when you hold the stick all the way.","settingsCurveExponential":"Steep","settingsCurveLinear":"Linear","settingsCurveBoost":"Boost","settingsLookDeadzone":"Look deadzone","settingsGyro":"Gyro aiming","settingsGyroToggle":"Aim by moving the controller","settingsGyroToggleInfo":"Turn and tilt the controller to aim, on top of the right stick.","settingsGyroTogglePhone":"Aim by moving your phone or tablet","settingsGyroToggleInfoPhone":"Turn and tilt your phone or tablet to aim, on top of the right stick.","settingsGyroUnsupported":"Gyro aiming needs Chrome or Edge.","settingsGyroBlocked":"Gyro aiming isn\'t available on this site.","settingsGyroPhoneNeedsController":"Connect a controller to aim by moving your phone or tablet.","settingsGyroSteamHint":"If Steam already turns your gyro into mouse movement, leave this off.","settingsGyroConnect":"Connect motion controller","settingsGyroConnectHint":"Works with DualSense, DualShock 4 and Switch controllers.","settingsGyroConnectNeedsClick":"Click Connect with your mouse: the browser asks before sharing a controller.","settingsGyroOpenFailed":"Another app is using the controller. Close apps such as Steam or DS4Windows, then try again.","settingsGyroConnected":"Aiming with {{name}}.","settingsGyroAllowMotion":"Allow motion sensor","settingsGyroAllowNeedsTap":"Tap Allow motion sensor on your screen to turn it on.","settingsGyroPhoneOn":"Aiming with this device\'s motion sensor.","settingsGyroPhoneWaiting":"Waiting for this device\'s motion sensor\u2026","settingsGyroPhoneNoSensor":"No motion sensor found on this device.","settingsGyroPhoneDenied":"Motion access is blocked. Allow it in your browser settings.","settingsGyroSensitivity":"Gyro sensitivity","settingsGyroActivation":"Gyro turns on","settingsGyroAlways":"Always","settingsGyroWhileAiming":"While aiming","settingsGyroWhileButton":"While holding a button","settingsGyroAimingHint":"Hold {{button}} to aim with motion.","settingsGyroButton":"Gyro button","settingsGyroButtonHint":"While gyro aiming is on, this button only turns the gyro on in game, so pick one you rarely use.","settingsMovement":"Movement","settingsMoveDeadzone":"Move deadzone","settingsAutoSprint":"Sprint at full tilt","settingsAutoSprintInfo":"Push the movement stick all the way to sprint.","settingsSneak":"Sneak","settingsSneakHold":"Hold","settingsSneakToggle":"Toggle","settingsButtons":"Buttons","settingsPromptFamily":"Button prompts","settingsPromptAuto":"Match my controller","settingsPromptXbox":"Xbox","settingsPromptPlayStation":"PlayStation","settingsPromptNintendo":"Nintendo","settingsPromptSteamDeck":"Steam Deck","settingsPromptGeneric":"Generic","settingsHideButtonHints":"Hide button hints","settingsVibration":"Vibration","settingsCursorSpeed":"Virtual cursor speed","settingsCursorMagnetism":"Cursor snaps onto buttons","settingsMenuBackToCategories":"Back returns to the category list first","settingsAccessibility":"Accessibility","settingsSwapConfirmBack":"Swap confirm and back","settingsSwapToast":"Select and Back have swapped buttons.","settingsLayoutRefusedToast":"This layout doesn\'t fit your current buttons. Reset them to use it.","settingsSwapConfirmBackInfo":"Select with the right face button and go back with the bottom one, in menus, the inventory and the on-screen keyboard. On by default for Nintendo controllers.","settingsButtonRepeat":"Button repeat","settingsButtonRepeatHint":"How a held button repeats in menus, sliders, the on-screen keyboard and crafting. Off acts once per press, and holding drop in game drops just one item.","settingsButtonRepeatDefault":"Default","settingsButtonRepeatSlow":"Slow (0.8 s, then 4 a second)","settingsButtonRepeatOff":"Off (once per press)","settingsTapHoldTime":"Tap/hold time","settingsTapHoldTimeHint":"How long to hold the chat, emote or action button to open its wheel, or the view button to change view where a tap picks a block. Dropping a whole stack takes 0.8, 1 or 1.3 s.","settingsTapHoldShort":"Short (0.25 s)","settingsTapHoldMedium":"Medium (0.5 s)","settingsTapHoldLong":"Long (0.8 s)","settingsEmoteButton":"Emote button","settingsEmoteButtonTapHoldHint":"Tap to repeat your last emote, or hold to open the emote wheel.","settingsEmoteButtonWheelHint":"Any press opens the emote wheel, with no hold to time. Pick with the stick, then select.","settingsEmoteButtonTapHold":"Tap repeats, hold opens wheel","settingsEmoteButtonWheel":"Opens the wheel","settingsAttackMode":"Attack / mine","settingsAttackHoldHint":"Hold attack to keep attacking or mining.","settingsAttackToggleHint":"Press attack once to keep attacking or mining, and again to stop.","settingsAttackHold":"Hold","settingsAttackToggle":"Toggle","settingsLargePointer":"Large pointer and focus","settingsLargePointerInfo":"A bigger menu cursor, thicker selection brackets and bigger button hints.","settingsRemap":"Remap buttons","settingsRemapHint":"Select an action, then press a button. If that button is taken, the two swap.","settingsLayoutSouthpaw":"Southpaw (move with the right stick)","settingsLayoutTriggersSwapped":"Triggers swapped (attack with the left trigger)","settingsCapturePrompt":"Press a button","settingsCaptureCancelHint":"Press {{button}} to cancel","settingsCaptureCancelOrBindHint":"Tap {{button}} to cancel, or hold it to choose it","settingsReset":"Reset","settingsSwapNotice":"{{action}} moved to {{button}}","settingsResetAll":"Reset all buttons and sticks","settingsGroupGameplay":"Movement & gameplay","settingsGroupMenus":"Menus","settingsGroupInventory":"Inventory","settingsGroupKeyboard":"On-screen keyboard","settingsActionMove":"Move","settingsActionLook":"Look around","settingsActionJump":"Jump","settingsActionSneak":"Sneak","settingsActionSneakToggle":"Toggle sneak","settingsActionZoom":"Zoom (hold)","settingsActionSprint":"Sprint","settingsActionAttack":"Attack / mine","settingsActionUse":"Use / place","settingsActionHotbarPrevious":"Previous hotbar slot","settingsActionHotbarNext":"Next hotbar slot","settingsActionInventory":"Inventory","settingsActionActionButton":"Game action","settingsActionPerspective":"Change view","settingsActionPickBlock":"Pick block (creative)","settingsActionDrop":"Drop item","settingsActionEmoteWheel":"Emotes","settingsActionChat":"Chat","settingsActionPause":"Pause menu","settingsActionLeaderboard":"Shop / leaderboard","settingsActionMenuConfirm":"Select","settingsActionMenuBack":"Back","settingsActionMenuTabPrevious":"Previous tab","settingsActionMenuTabNext":"Next tab","settingsActionMenuPageUp":"Page up","settingsActionMenuPageDown":"Page down","settingsActionMenuSecondary":"Secondary action","settingsActionMenuToggleCursor":"Switch to virtual cursor","settingsActionInventoryPrimary":"Pick up / place","settingsActionInventorySecondary":"Pick up half / place one","settingsActionInventoryQuickMove":"Quick move","settingsActionInventoryHotbarSwap":"Swap with hotbar slot","settingsActionInventoryClose":"Close","settingsActionInventoryPanelPrevious":"Previous panel","settingsActionInventoryPanelNext":"Next panel","settingsActionInventoryDrop":"Drop item","settingsActionKeyboardType":"Type key","settingsActionKeyboardBackspace":"Backspace","settingsActionKeyboardSpace":"Space","settingsActionKeyboardCaretLeft":"Move cursor left","settingsActionKeyboardCaretRight":"Move cursor right","settingsActionKeyboardShift":"Shift","settingsActionKeyboardSymbols":"Accents and symbols","settingsActionKeyboardSubmit":"Send","settingsActionKeyboardClose":"Close keyboard","settingsActionKeyboardChannel":"Chat channel","settingsAlternatives":"Try alternatives","settingsAlternativesHint":"Try each way of playing and keep the one that feels best.","settingsMenuNavigation":"Menu navigation","settingsMenuNavigationHint":"Steer a cursor with the stick and jump between buttons with the D-pad, or use just one.","settingsNavHybrid":"Cursor and D-pad","settingsMenuNavFocus":"Jump between buttons","settingsVirtualCursor":"Virtual cursor","settingsInventoryNavigation":"Inventory","settingsInventoryNavigationHint":"Steer a cursor with the stick and step slot by slot with the D-pad, or use just one.","settingsInventoryNavSlot":"Slot by slot","settingsQuickChat":"Hold chat button","settingsQuickChatHint":"Hold the chat button to pick a quick phrase. Tapping it still opens chat.","settingsQuickChatWheel":"Quick chat wheel","settingsQuickChatOff":"Off","settingsLeaderboardButton":"Shop / leaderboard button","settingsLeaderboardButtonHint":"Open the shop in one press in games that have one. The lobby leaderboard is still in the pause menu.","settingsLeaderboardButtonShop":"Shop, in games with one","settingsLeaderboardButtonLeaderboard":"Always the leaderboard","settingsTester":"Gamepad tester","settingsTesterNoPad":"Connect a gamepad and press any button to test it.","settingsTesterFamily":"Detected: {{family}}","settingsTesterHint":"Start a test to try every button and stick without moving through the menu.","settingsTesterStart":"Start test","settingsTesterStop":"Stop test","settingsTesterTesting":"Press anything to see it light up. To stop, hold {{button}} or press it three times.","settingsControlsNote":"Playing with a gamepad? Change its buttons and feel in Gamepad settings.","settingsOpenController":"Gamepad settings","keyboardSpace":"Space","keyboardSend":"Send","keyboardDone":"Done","keyboardTargetChat":"Chat","keyboardTargetSign":"Sign","keyboardTargetNameTag":"Name tag","keyboardTargetBook":"Book page","keyboardTargetBookTitle":"Book title","keyboardTargetText":"Text","quickChatPick":"Pick a phrase","actionWheelPick":"Pick an action","wheelReleaseToPick":"Release to pick","wheelClose":"Close","wheelChoose":"Choose","menusSelect":"Select","menusBack":"Back","menusClose":"Close","menusQuickChat":"Quick chat (hold)","menusSkipTutorial":"Skip tutorial","menusTabs":"Tabs","menusRows":"Rows","menusCursorMode":"Cursor","menusFocusMode":"Focus","menusClick":"Click","menusRightClick":"Right-click","menusScroll":"Scroll","menusFriends":"Friends","menusSearch":"Search","menusSettings":"Settings","menusLeaveGameTitle":"Leave the game?","menusLeaveGameLeave":"Leave","menusLeaveGameStay":"Stay","menusNotifications":"Notifications","menusLobby":"Lobby","menusShop":"Shop","menusTasks":"Tasks & leaderboards","menusInvite":"Invite friends","menusAdjust":"Adjust","menusFavourite":"Favourite","screensPressToContinue":"Press {{button}} to continue","screensPressToEnterGame":"Press {{button}} to enter game","screensEnterGame":"Enter game","screensBackToGames":"Back to games","tutorialMine":"Mine","tutorialPlace":"Place / Use","tutorialInventory":"Inventory","tutorialPause":"Pause","menusUseMouse":"Use a mouse or touch here"}}');
    var EW = OW(1172),
      NW = OW(1479),
      PW = OW(9357),
      LW = OW(80),
      cW = OW(25),
      wW = OW(27),
      tW = OW(9379),
      ZW = OW(9413),
      xW = OW(9384),
      lW = OW(9417),
      AW = OW(9364),
      bW = OW(9905),
      jW = OW(9908),
      UW = OW(1774);
    const kW = (WW, iW, OW) => Math.max(iW, Math.min(OW, WW)),
      sW = WW => Math.min(WW.width, WW.height) / 720,
      MW = WW => Math.max(.15, WW);
    class KW {
      constructor() {
        this.locked = !1
      }
      lock() {
        this.locked = !0
      }
      update(WW, iW) {
        const OW = Math.hypot(WW.x, WW.y) >= (WW => Math.max(.3, WW))(iW);
        return this.locked ? (this.locked = OW, !1) : OW
      }
    }
    const SW = (WW, iW) => {
        const OW = kW(iW.dtMs, 0, 100),
          mW = OW / 1e3,
          EW = sW(iW.viewport) * (iW.cursorSpeedPercent / 100),
          NW = (0, AW.l)(iW.stick, MW(iW.moveDeadzone)),
          PW = Math.hypot(NW.x, NW.y),
          LW = ((WW, iW, OW) => {
            if (iW < .3) return 0;
            const mW = OW / 350;
            return iW >= .85 ? Math.min(1, WW + mW) : Math.max(0, WW - mW)
          })(WW.speedRamp, PW, OW);
        let cW = WW.x,
          wW = WW.y;
        if (PW > 0) {
          const WW = .45 + .55 * LW,
            OW = iW.context.overInteractive ? .45 : 1,
            tW = 1400 * (WW => {
              const iW = kW(WW, 0, 1);
              return .3 * iW + .7 * iW * iW
            })(PW) * EW * WW * OW;
          cW += NW.x / PW * tW * mW, wW += NW.y / PW * tW * mW
        }
        const tW = Math.hypot(iW.dpad.x, iW.dpad.y);
        if (tW > 0) {
          const WW = 500 * EW;
          cW += iW.dpad.x / tW * WW * mW, wW += iW.dpad.y / tW * WW * mW
        }
        const ZW = iW.context.magnetTarget;
        if (ZW && PW < .3 && 0 === tW) {
          const WW = ((WW, iW, OW, mW, EW) => {
            const NW = iW.x - WW.x,
              PW = iW.y - WW.y,
              LW = Math.hypot(NW, PW);
            if (0 === LW) return {
              x: 0,
              y: 0
            };
            const cW = Math.min(LW, EW * (1 - mW / .3));
            let wW = NW / LW * cW,
              tW = PW / LW * cW;
            if (mW > 0) {
              const WW = OW.x / mW,
                iW = OW.y / mW,
                EW = wW * WW + tW * iW;
              EW < 0 && (wW -= EW * WW, tW -= EW * iW)
            }
            return {
              x: wW,
              y: tW
            }
          })({
            x: cW,
            y: wW
          }, ZW, NW, PW, 120 * sW(iW.viewport) * mW);
          cW += WW.x, wW += WW.y
        }
        return {
          x: kW(cW, 0, Math.max(0, iW.viewport.width - 1)),
          y: kW(wW, 0, Math.max(0, iW.viewport.height - 1)),
          speedRamp: LW
        }
      },
      YW = WW => {
        const iW = (0, AW.l)(WW, .2);
        return 0 !== iW.x || 0 !== iW.y
      },
      yW = (WW, iW) => {
        const OW = (0, AW.l)(WW, .2),
          mW = Math.hypot(OW.x, OW.y);
        if (0 === mW) return {
          x: 0,
          y: 0
        };
        const EW = mW * mW * 1600,
          NW = kW(iW, 0, 100) / 1e3;
        return {
          x: OW.x / mW * EW * NW,
          y: OW.y / mW * EW * NW
        }
      },
      TW = (WW, iW) => "y" === iW ? WW.scrollHeight > WW.clientHeight + 1 : WW.scrollWidth > WW.clientWidth + 1,
      JW = (WW, iW) => {
        if (!TW(WW, iW)) return !1;
        const OW = getComputedStyle(WW),
          mW = "y" === iW ? OW.overflowY : OW.overflowX;
        return "auto" === mW || "scroll" === mW
      },
      hW = (WW, iW, OW) => {
        for (let NW = WW instanceof HTMLElement ? WW : null !== (mW = null === WW || void 0 === WW ? void 0 : WW.parentElement) && void 0 !== mW ? mW : null; NW; NW = NW.parentElement) {
          var mW;
          if (JW(NW, iW)) return NW;
          if (NW === OW) return null
        }
        if (OW) return null;
        const EW = document.scrollingElement;
        return EW instanceof HTMLElement && TW(EW, iW) ? EW : null
      },
      HW = new WeakMap,
      nW = (WW, iW) => {
        const OW = performance.now(),
          mW = HW.get(WW);
        if (mW && mW.axis === iW && OW - mW.atMs < 500 && (!mW.container || mW.container.isConnected)) return mW.container;
        const EW = uW(WW, iW);
        return HW.set(WW, {
          axis: iW,
          atMs: OW,
          container: EW
        }), EW
      },
      uW = (WW, iW) => {
        let OW = JW(WW, iW) ? WW : null,
          mW = OW ? OW.clientWidth * OW.clientHeight : 0;
        for (const EW of WW.querySelectorAll("*")) {
          const WW = EW.clientWidth * EW.clientHeight;
          WW > mW && JW(EW, iW) && (OW = EW, mW = WW)
        }
        return OW
      },
      oW = (WW, iW, OW) => "y" === iW ? OW < 0 ? WW.scrollTop > 0 : WW.scrollTop + WW.clientHeight < WW.scrollHeight - 1 : OW < 0 ? WW.scrollLeft > 0 : WW.scrollLeft + WW.clientWidth < WW.scrollWidth - 1,
      dW = (WW, iW, OW) => {
        "y" === iW ? WW.scrollBy({
          top: OW,
          behavior: "instant"
        }) : WW.scrollBy({
          left: OW,
          behavior: "instant"
        })
      },
      eW = WW => {
        if (!WW || WW === document.scrollingElement) return new DOMRect(0, 0, window.innerWidth, window.innerHeight);
        const iW = WW.getBoundingClientRect(),
          OW = Math.max(0, iW.left),
          mW = Math.max(0, iW.top);
        return new DOMRect(OW, mW, Math.min(window.innerWidth, iW.right) - OW, Math.min(window.innerHeight, iW.bottom) - mW)
      },
      vW = (WW, iW) => WW.left < iW.right && iW.left < WW.right && WW.top < iW.bottom && iW.top < WW.bottom;
    var gW = OW(62),
      DW = OW(1089),
      VW = OW.n(DW),
      pW = OW(1283);
    let fW = 0,
      CW = !1;
    class XW {
      constructor() {
        this.element = null, this.shownKey = "", this.gap = null
      }
      setElement(WW) {
        this.element = WW, this.shownKey = "", this.gap = null
      }
      show(WW) {
        const iW = this.element;
        if (!iW) return;
        const OW = WW ? this.keepOnScreen(iW, WW) : null,
          mW = OW ? `${OW.left},${OW.top},${OW.width},${OW.height}` : "";
        if (mW === this.shownKey) return;
        const EW = "" === this.shownKey;
        this.shownKey = mW, iW.classList.toggle("Visible", null !== OW), OW && (iW.classList.toggle("Snap", EW), iW.style.width = `${OW.width}px`, iW.style.height = `${OW.height}px`, iW.style.transform = `translate(${OW.left}px, ${OW.top}px)`, EW && (iW.offsetWidth, iW.classList.remove("Snap")))
      }
      hide() {
        this.show(null)
      }
      keepOnScreen(WW, iW) {
        var OW;
        const mW = `${window.innerWidth}x${window.innerHeight}@${(()=>{if("undefined"===typeof ResizeObserver)return getComputedStyle(document.documentElement).fontSize;if(!CW){CW=!0;const WW=document.createElement("div");WW.setAttribute("aria-hidden","true"),WW.style.cssText="position: fixed; top: 0; left: 0; width: 1rem; height: 0; visibility: hidden; pointer-events: none",document.body.appendChild(WW),new ResizeObserver((()=>{fW++})).observe(WW)}return String(fW)})()}`;
        (null === (OW = this.gap) || void 0 === OW ? void 0 : OW.key) !== mW && (this.gap = {
          px: parseFloat(getComputedStyle(WW).paddingLeft) || 0,
          key: mW
        });
        const EW = this.gap.px + 2,
          NW = Math.max(iW.left, EW),
          PW = Math.max(iW.top, EW),
          LW = Math.min(iW.left + iW.width, window.innerWidth - EW),
          cW = Math.min(iW.top + iW.height, window.innerHeight - EW);
        return LW <= NW || cW <= PW ? iW : {
          left: NW,
          top: PW,
          width: LW - NW,
          height: cW - PW
        }
      }
    }
    const BW = WW => {
      let {
        placer: iW,
        className: OW
      } = WW;
      const mW = (0, gW.useCallback)((WW => {
        iW.setElement(WW)
      }), [iW]);
      return (0, pW.jsx)("div", {
        ref: mW,
        className: VW()("PadReticle", OW),
        "aria-hidden": !0
      })
    };
    var qW = OW(9910);
    const RW = {
      x: 0,
      y: 0,
      visible: !1,
      pressed: !1
    };
    const GW = new class {
      constructor() {
        this.state = RW, this.listeners = new Set
      }
      get() {
        return this.state
      }
      set(WW) {
        if (iW = this.state, OW = WW, (iW.visible || OW.visible) && (iW.visible !== OW.visible || iW.x !== OW.x || iW.y !== OW.y || iW.pressed !== OW.pressed)) {
          var iW, OW;
          this.state = WW;
          for (const iW of this.listeners) iW(WW)
        }
      }
      hide() {
        this.set(RW)
      }
      subscribe(WW) {
        return this.listeners.add(WW), () => {
          this.listeners.delete(WW)
        }
      }
    };
    var IW = OW(9919);
    const aW = (WW, iW) => {
        let {
          kind: OW,
          holding: mW,
          hasPress: EW,
          hasBack: NW,
          slotHasItem: PW
        } = iW;
        switch (WW) {
          case "primary":
            return "slot" === OW ? "slotPrimary" : "recipe" === OW || "button" === OW ? EW ? "pressPrimary" : "click" : "textField" === OW ? "openKeyboard" : null;
          case "secondary":
            return "slot" === OW ? "slotSecondary" : "button" !== OW && "recipe" !== OW || !EW ? null : "pressSecondary";
          case "quickMove":
            return "slot" === OW && PW ? "slotQuickMove" : null;
          case "hotbarSwap":
            return "slot" === OW && PW && !mW ? "hotbarPick" : null;
          case "openButton":
            return "close";
          case "back":
            return mW ? "cancel" : NW ? "pressBack" : "close"
        }
      },
      rW = WW => {
        const iW = [];
        if (WW.hotbarPicking) return iW.push({
          actions: ["inventoryPrimary", "inventoryHotbarSwap"],
          labelKey: "inventorySwapHere"
        }), iW.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryCancel"
        }), iW;
        if (WW.holding) "slot" === WW.kind ? (iW.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryPlace"
        }), iW.push({
          actions: ["inventorySecondary"],
          labelKey: "inventoryPlaceOne"
        })) : "textField" === WW.kind && iW.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryType"
        }), iW.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryPutBack"
        }), iW.push({
          actions: ["inventoryDrop"],
          labelKey: "inventoryDrop"
        }), WW.openButtonCloses && iW.push({
          actions: ["inventory"],
          labelKey: "inventoryClose"
        });
        else {
          var OW;
          "slot" === WW.kind && WW.slotHasItem ? (iW.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryTake"
          }), iW.push({
            actions: ["inventorySecondary"],
            labelKey: "inventoryTakeHalf"
          }), iW.push({
            actions: ["inventoryQuickMove"],
            labelKey: WW.quickMoveToHotbar ? "inventoryToHotbar" : "inventoryQuickMove"
          }), iW.push({
            actions: ["inventoryHotbarSwap"],
            labelKey: "inventoryHotbarSwap"
          }), iW.push({
            actions: ["inventoryDrop"],
            labelKey: "inventoryDrop"
          })) : "button" !== WW.kind && "recipe" !== WW.kind || !WW.pressHints ? "button" === WW.kind || "recipe" === WW.kind ? iW.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventorySelect"
          }) : "textField" === WW.kind && iW.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryType"
          }) : (WW.pressHints.primary && iW.push({
            actions: ["inventoryPrimary"],
            labelKey: WW.pressHints.primary
          }), WW.pressHints.secondary && iW.push({
            actions: ["inventorySecondary"],
            labelKey: WW.pressHints.secondary
          }));
          const mW = null === (OW = WW.pressHints) || void 0 === OW ? void 0 : OW.back;
          mW && iW.push({
            actions: ["inventoryClose"],
            labelKey: mW
          });
          const EW = [];
          WW.openButtonCloses && EW.push("inventory"), mW || EW.push("inventoryClose"), EW.length > 0 && iW.push({
            actions: EW,
            labelKey: "inventoryClose"
          })
        }
        return iW.push({
          actions: ["inventoryPanelPrevious", "inventoryPanelNext"],
          labelKey: "inventoryPanels"
        }), WW.hasCategories ? iW.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryCategory"
        }) : WW.hasList && iW.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryPage"
        }), iW
      };
    var zW = OW(9928),
      FW = OW(3267);
    class QW {
      constructor(WW) {
        this.probes = WW, this.byContainer = new Map, this.byParent = new Map
      }
      find(WW, iW) {
        const OW = hW(WW, "y", iW);
        if (!OW) return null;
        let mW = this.byContainer.get(OW);
        return mW || (this.probes.push({
          element: OW,
          rect: mi(OW.getBoundingClientRect())
        }), mW = {
          container: OW,
          box: eW(OW),
          group: Oi(OW)
        }, this.byContainer.set(OW, mW)), mW
      }
      findForParent(WW, iW) {
        let OW = this.byParent.get(WW);
        return void 0 === OW && (OW = this.find(WW, iW), this.byParent.set(WW, OW)), OW
      }
    }
    const Wi = new WeakMap;
    let ii = 0;
    const Oi = WW => {
        let iW = Wi.get(WW);
        return iW || (iW = "el:" + ii++, Wi.set(WW, iW)), iW
      },
      mi = WW => ({
        left: WW.left,
        top: WW.top,
        width: WW.width,
        height: WW.height
      }),
      Ei = WW => WW.width > 0 && WW.height > 0,
      Ni = (WW, iW) => Ei(WW) && WW.left + WW.width > 0 && WW.top + WW.height > 0 && WW.left < iW.width && WW.top < iW.height,
      Pi = (WW, iW, OW) => {
        const mW = WW.top + WW.height / 2;
        return Ni(WW, iW) && (!OW || mW >= OW.top && mW <= OW.bottom)
      },
      Li = WW => ({
        x: WW.left + WW.width / 2,
        y: WW.top + WW.height / 2
      }),
      ci = (WW, iW, OW) => WW < 0 ? OW >= 0 ? 0 : iW - 1 : ((WW + OW) % iW + iW) % iW,
      wi = WW => "Left" === WW || "Right" === WW,
      ti = (WW, iW, OW) => {
        const mW = wi(OW),
          EW = mW ? WW.top : WW.left,
          NW = mW ? WW.height : WW.width,
          PW = mW ? iW.top : iW.left,
          LW = mW ? iW.height : iW.width,
          cW = Math.max(0, Math.max(PW - (EW + NW), EW - (PW + LW)));
        return NW > 1.5 * LW ? {
          gap: cW,
          offset: Math.max(0, PW - EW) + .1 * Math.max(0, EW - PW)
        } : {
          gap: cW,
          offset: Math.abs(PW + LW / 2 - (EW + NW / 2))
        }
      },
      Zi = (WW, iW, OW) => {
        const mW = ((WW, iW, OW) => {
          const mW = Li(WW),
            EW = Li(iW),
            NW = wi(OW) ? Math.min(WW.width, iW.width) / 4 : Math.min(WW.height, iW.height) / 4;
          switch (OW) {
            case "Right":
              return EW.x - mW.x >= NW ? Math.max(0, iW.left - (WW.left + WW.width)) : null;
            case "Left":
              return mW.x - EW.x >= NW ? Math.max(0, WW.left - (iW.left + iW.width)) : null;
            case "Down":
              return EW.y - mW.y >= NW ? Math.max(0, iW.top - (WW.top + WW.height)) : null;
            case "Up":
              return mW.y - EW.y >= NW ? Math.max(0, WW.top - (iW.top + iW.height)) : null
          }
        })(WW, iW, OW);
        if (null === mW) return null;
        const EW = ti(WW, iW, OW);
        return mW + 3 * EW.gap + .5 * EW.offset
      },
      xi = (WW, iW) => iW.visible || null !== iW.scrollGroup && iW.scrollGroup === WW.scrollGroup,
      li = (WW, iW, OW, mW) => {
        let EW = null,
          NW = 1 / 0;
        for (const PW of iW) {
          if (PW.key === WW.key || !xi(WW, PW) || !mW(PW)) continue;
          const iW = Zi(WW.rect, PW.rect, OW);
          null !== iW && iW < NW && (EW = PW, NW = iW)
        }
        return EW
      },
      Ai = (WW, iW, OW) => {
        const mW = li(WW, iW, OW, (() => !0));
        if (!mW || wi(OW) || null === WW.scrollGroup || mW.scrollGroup === WW.scrollGroup) return mW;
        const EW = li(WW, iW, OW, (iW => 0 === ti(WW.rect, iW.rect, OW).gap));
        return null !== EW && void 0 !== EW ? EW : mW
      },
      bi = (WW, iW, OW) => {
        let mW = null,
          EW = 1 / 0;
        for (const NW of iW) {
          if (!NW.visible || OW && !OW(NW)) continue;
          const iW = Li(NW.rect),
            PW = Math.hypot(iW.x - WW.x, iW.y - WW.y);
          PW < EW && (mW = NW, EW = PW)
        }
        return mW
      },
      ji = WW => {
        const {
          rect: iW,
          clip: OW
        } = WW;
        if (!OW) return iW;
        const mW = Math.max(iW.left, OW.left),
          EW = Math.max(iW.top, OW.top);
        return {
          left: mW,
          top: EW,
          width: Math.min(iW.left + iW.width, OW.left + OW.width) - mW,
          height: Math.min(iW.top + iW.height, OW.top + OW.height) - EW
        }
      },
      Ui = (WW, iW) => iW.x >= WW.left && iW.x < WW.left + WW.width && iW.y >= WW.top && iW.y < WW.top + WW.height,
      ki = (WW, iW) => {
        let OW = null,
          mW = 1 / 0;
        for (const EW of iW) {
          const iW = ji(EW);
          (EW.visible || EW.clip) && Ui(iW, WW) && (iW.width * iW.height < mW && (OW = EW, mW = iW.width * iW.height))
        }
        return OW
      },
      si = WW => {
        let iW = null;
        for (const OW of WW) {
          if (!OW.visible) continue;
          if (!iW) {
            iW = OW;
            continue
          }
          const WW = Math.min(iW.rect.height, OW.rect.height) / 2,
            mW = OW.rect.top - iW.rect.top;
          (mW < -WW || Math.abs(mW) <= WW && OW.rect.left < iW.rect.left) && (iW = OW)
        }
        return iW
      },
      Mi = (WW, iW, OW, mW, EW) => {
        const NW = EW % iW,
          PW = Math.floor(EW / iW);
        return {
          left: WW.left + NW * OW,
          top: WW.top + PW * mW,
          width: WW.width,
          height: WW.height
        }
      },
      Ki = ".EntireInventoryWrapper .Inventory, .HotBarGameItemsContainer",
      Si = ".LazyLoadedItemWrapper",
      Yi = ["[data-inven-idx]", "[data-recipe-key]", "[role=button]", "button", "input:not([type=hidden])", "textarea", ".CreativeCategoryTab", ".CreativeCategoryDropdownButton", ".CreativeCategoryDropdownOption", "[data-craft-ingredient]"].join(","),
      yi = [
        ["hotbar", ".HotBarGameItemsContainer"],
        ["gameButtons", ".ClientGameInventoryButtons"],
        ["categories", ".CreativeCategoryRail"],
        ["recipe", ".CraftableInfo"],
        ["armour", ".ArmourItemSlots"],
        ["main", ".InvenBodyRight"],
        ["left", ".InvenLeftSide"]
      ],
      Ti = ["gameButtons", "categories", "left", "recipe", "armour", "main", "hotbar"],
      Ji = WW => WW.hasAttribute("data-inven-idx") ? "slot" : WW.hasAttribute("data-recipe-key") ? "recipe" : WW.hasAttribute("data-craft-ingredient") || (0, FW.u)(WW) ? "info" : (0, qW.O)(WW) ? "textField" : "button",
      Hi = (WW, iW) => "slot" === iW ? Number(WW.getAttribute("data-inven-idx")) : null,
      ni = WW => WW.matches(Si) ? WW.querySelector(Yi) : WW,
      ui = WW => {
        var iW, OW;
        return {
          element: WW,
          recipe: null !== (iW = WW && (null === (OW = ni(WW)) || void 0 === OW ? void 0 : OW.getAttribute("data-recipe-key"))) && void 0 !== iW ? iW : null
        }
      },
      oi = WW => {
        const iW = ni(WW);
        if (!iW) return {
          kind: "pending",
          idx: null
        };
        const OW = Ji(iW);
        return {
          kind: OW,
          idx: Hi(iW, OW)
        }
      },
      di = WW => {
        const iW = [];
        for (const [OW, mW] of yi) {
          WW.matches(mW) && iW.push([OW, WW]);
          for (const EW of WW.querySelectorAll(mW)) iW.push([OW, EW])
        }
        return iW
      },
      ei = (WW, iW) => {
        for (const [OW, mW] of WW)
          if (mW.contains(iW)) return OW;
        return "other"
      },
      vi = (WW, iW, OW, mW, EW, NW, PW, LW) => {
        var cW;
        const wW = WW.children,
          tW = mi(wW[0].getBoundingClientRect()),
          ZW = [{
            element: wW[0],
            rect: tW
          }];
        if (NW.push(ZW[0]), 0 === tW.width || 0 === tW.height) return;
        let xW = 1;
        for (; xW < wW.length && Math.abs(wW[xW].getBoundingClientRect().top - tW.top) < 1;) xW++;
        const lW = WW => {
            const iW = {
              element: wW[WW],
              rect: mi(wW[WW].getBoundingClientRect())
            };
            return NW.push(iW), ZW.push(iW), iW.rect
          },
          AW = xW > 1 ? lW(1).left - tW.left : tW.width,
          bW = wW.length > xW ? lW(xW).top - tW.top : tW.height,
          jW = PW.find(WW, iW);
        let UW = null;
        if (jW) {
          var kW;
          const {
            container: WW,
            box: iW
          } = jW;
          UW = null !== (kW = LW.get(WW)) && void 0 !== kW ? kW : null, UW || (UW = {
            top: WW.scrollTop,
            left: WW.scrollLeft,
            box: iW,
            viewport: mW,
            targets: [],
            probes: [],
            holdsOthers: !1
          }, LW.set(WW, UW)), UW.probes.push(...ZW)
        }
        const sW = EW.length;
        for (let YW = 0; YW < wW.length; YW++) {
          var MW, KW, SW;
          const WW = wW[YW],
            iW = Mi(tW, xW, AW, bW, YW),
            NW = WW.firstElementChild ? WW.querySelector(Yi) : null,
            PW = NW ? Ji(NW) : "pending";
          EW.push({
            key: Oi(WW),
            rect: iW,
            panel: OW,
            scrollGroup: null !== (MW = null === jW || void 0 === jW ? void 0 : jW.group) && void 0 !== MW ? MW : null,
            visible: Pi(iW, mW, null === jW || void 0 === jW ? void 0 : jW.box),
            clip: null !== (KW = null === jW || void 0 === jW ? void 0 : jW.box) && void 0 !== KW ? KW : null,
            element: WW,
            kind: PW,
            idx: NW ? Hi(NW, PW) : null,
            scrollContainer: null !== (SW = null === jW || void 0 === jW ? void 0 : jW.container) && void 0 !== SW ? SW : null
          })
        }
        null === (cW = UW) || void 0 === cW || cW.targets.push(...EW.slice(sW))
      },
      gi = WW => WW instanceof Element && null !== WW.closest(Si),
      Di = WW => null !== WW.scrollContainer && gi(WW.element);
    class Vi {
      constructor() {
        this.latched = null, this.presses = 0
      }
      press(WW, iW, OW, mW) {
        this.latched = {
          source: WW,
          focusKey: iW,
          sinceMs: OW,
          hold: {
            id: ++this.presses,
            holdMs: mW
          }
        }
      }
      update(WW, iW, OW) {
        const mW = this.latched;
        return mW ? WW && iW === mW.focusKey ? OW - mW.sinceMs < mW.hold.holdMs ? null : (this.latched = null, mW.source) : (this.latched = null, null) : null
      }
      getHold() {
        var WW, iW;
        return null !== (WW = null === (iW = this.latched) || void 0 === iW ? void 0 : iW.hold) && void 0 !== WW ? WW : null
      }
      reset() {
        this.latched = null
      }
    }
    var fi = OW(9931);
    const Ci = {
        kind: "none"
      },
      Xi = WW => ({
        x: WW.clientX,
        y: WW.clientY
      }),
      Bi = () => 2 * (parseFloat(getComputedStyle(document.documentElement).fontSize) || 16);
    class qi {
      constructor() {
        this.hovered = Ci, this.signature = "", this.holding = !1, this.lastPoint = {
          clientX: 0,
          clientY: 0
        }
      }
      sync(WW, iW, OW, mW, EW) {
        const NW = null !== iW ? {
            kind: "slot",
            idx: iW
          } : OW ? {
            kind: "element",
            element: OW
          } : Ci,
          PW = `${EW}|${Math.round(mW.clientX)},${Math.round(mW.clientY)}`,
          LW = (cW = this.hovered, wW = NW, "slot" === cW.kind && "slot" === wW.kind ? cW.idx === wW.idx : "element" === cW.kind && "element" === wW.kind ? cW.element === wW.element : cW.kind === wW.kind);
        var cW, wW;
        if (LW && PW === this.signature) return;
        const tW = !LW || EW !== this.holding || "" === this.signature;
        this.signature = PW, this.holding = EW, this.lastPoint = mW;
        const ZW = this.hovered;
        if (this.hovered = NW, "slot" === NW.kind) return this.leaveElement(ZW, null, mW), void(tW ? WW.hover(NW.idx, mW) : WW.moveTo(mW));
        if (LW) return void("element" === NW.kind ? (0, qW.r)(NW.element, NW.element, Xi(mW)) : WW.hover(null, mW));
        WW.hover(null, mW);
        const xW = "element" === NW.kind ? NW.element : null;
        "element" === ZW.kind ? (0, qW.r)(ZW.element, xW, Xi(mW)) : xW && (0, qW.r)(null, xW, Xi(mW))
      }
      invalidate() {
        this.signature = ""
      }
      clear(WW) {
        const iW = this.hovered;
        this.hovered = Ci, this.signature = "", "none" !== iW.kind && (this.leaveElement(iW, null, this.lastPoint), WW && "slot" === iW.kind && WW.hover(null, this.lastPoint))
      }
      leaveElement(WW, iW, OW) {
        "element" === WW.kind && (0, qW.r)(WW.element, iW, Xi(OW))
      }
    }
    class Ri {
      constructor() {
        this.lastTiltedMs = -1 / 0
      }
      update(WW, iW) {
        YW(WW) && (this.lastTiltedMs = iW)
      }
      allowsClick(WW) {
        return WW - this.lastTiltedMs > 150
      }
    }
    class Gi {
      constructor() {
        this.remainder = 0, this.container = null
      }
      isScrolling(WW) {
        return 0 !== (0, AW.l)(WW, .2).y
      }
      step(WW, iW, OW) {
        WW !== this.container && (this.container = WW, this.remainder = 0);
        const mW = yW(iW, OW).y;
        if (0 === mW) return this.remainder = 0, !1;
        const EW = this.remainder + mW,
          NW = Math.trunc(EW);
        if (this.remainder = EW - NW, 0 === NW) return !1;
        const PW = WW.scrollTop;
        return WW.scrollTop = PW + NW, WW.scrollTop !== PW
      }
      current() {
        var WW;
        return null !== (WW = this.container) && void 0 !== WW && WW.isConnected ? this.container : null
      }
      reset() {
        this.remainder = 0, this.container = null
      }
    }
    var Ii = OW(9939);
    const ai = "[data-pad-inventory-default]",
      ri = ".HotBarGameItemsContainer .InvenItem.Selected",
      zi = {
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
      Fi = [
        ["primary", "inventoryPrimary"],
        ["secondary", "inventorySecondary"],
        ["quickMove", "inventoryQuickMove"],
        ["hotbarSwap", "inventoryHotbarSwap"],
        ["back", "inventoryClose"],
        ["openButton", "inventory"]
      ],
      Qi = ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryHotbarSwap", "inventoryClose", "inventoryDrop"],
      WO = ["inventoryPanelPrevious", "inventoryPanelNext", "menuPageUp", "menuPageDown"],
      iO = [...Qi, ...WO],
      OO = () => {
        return WW = (0, tW.h)("inventory"), !iO.map(tW.h).includes(WW) && !(0, AW.E)(WW);
        var WW
      },
      mO = new Set(["slotPrimary", "slotSecondary", "slotQuickMove", "pressPrimary", "pressSecondary", "openKeyboard"]),
      EO = (WW, iW) => {
        const OW = !(null === iW || void 0 === iW || !iW.isHolding());
        return function(WW, iW) {
          const OW = WW.find((WW => WW.visible && iW(WW)));
          if (OW) return OW;
          for (var mW = arguments.length, EW = new Array(mW > 2 ? mW - 2 : 0), NW = 2; NW < mW; NW++) EW[NW - 2] = arguments[NW];
          for (const PW of EW) {
            const iW = si(WW.filter(PW));
            if (iW) return iW
          }
          return si(WW)
        }(WW, (WW => {
          const {
            element: iW
          } = WW;
          return iW.matches(ai) || null !== iW.querySelector(ai) || iW.matches(ri)
        }), (WW => "slot" === WW.kind ? OW || null !== WW.idx && !(null === iW || void 0 === iW || !iW.hasItemAt(WW.idx)) : "recipe" === WW.kind || "pending" === WW.kind), (WW => "slot" === WW.kind || "button" === WW.kind))
      };
    class NO {
      constructor() {
        this.set = null, this.observer = new MutationObserver((WW => {
          WW.some((WW => !gi(WW.target))) && (this.set = null)
        })), this.invalidate = () => {
          this.set = null
        }, this.onScroll = WW => {
          this.scrolled(WW.target)
        }
      }
      get() {
        if (!this.set) {
          this.set = (() => {
            const WW = [],
              iW = [];
            let OW = !1;
            const mW = {
                width: window.innerWidth,
                height: window.innerHeight
              },
              EW = new Map,
              NW = new QW(iW);
            for (const ZW of document.querySelectorAll(Ki)) {
              const tW = di(ZW);
              OW ||= null !== ZW.querySelector(".CreativeCategoryTab");
              for (const OW of ZW.querySelectorAll(`${Si}:first-child`)) {
                const PW = OW.parentElement;
                vi(PW, ZW, ei(tW, PW), mW, WW, iW, NW, EW)
              }
              for (const OW of ZW.querySelectorAll(Yi)) {
                var PW, LW, cW, wW;
                if (OW.closest(Si) || OW.closest("[data-pad-ignore]")) continue;
                const xW = null === (PW = OW.parentElement) || void 0 === PW ? void 0 : PW.closest(Yi);
                if (xW && ZW.contains(xW)) continue;
                const lW = Ji(OW),
                  AW = Hi(OW, lW);
                if (-1 === AW) continue;
                const bW = mi(OW.getBoundingClientRect());
                iW.push({
                  element: OW,
                  rect: bW
                });
                const jW = NW.findForParent(OW.parentElement, ZW),
                  UW = jW && !EW.has(jW.container) ? jW : null;
                (UW ? Ei(bW) : Ni(bW, mW)) && WW.push({
                  key: Oi(OW),
                  rect: bW,
                  panel: ei(tW, OW),
                  scrollGroup: null !== (LW = null === UW || void 0 === UW ? void 0 : UW.group) && void 0 !== LW ? LW : null,
                  visible: Pi(bW, mW, null === UW || void 0 === UW ? void 0 : UW.box),
                  clip: null !== (cW = null === UW || void 0 === UW ? void 0 : UW.box) && void 0 !== cW ? cW : null,
                  element: OW,
                  kind: lW,
                  idx: AW,
                  scrollContainer: null !== (wW = null === UW || void 0 === UW ? void 0 : UW.container) && void 0 !== wW ? wW : null
                })
              }
            }
            for (const [ZW, xW] of EW) xW.holdsOthers = iW.some((WW => WW.element !== ZW && ZW.contains(WW.element) && !WW.element.closest(Si)));
            const tW = new Map;
            for (const ZW of WW) tW.set(ZW.element, ZW);
            return {
              targets: WW,
              byElement: tW,
              hasCategories: OW,
              probes: iW,
              scrollers: EW
            }
          })(), this.observer.disconnect();
          for (const WW of document.querySelectorAll(Ki)) this.observer.observe(WW, {
            childList: !0,
            subtree: !0,
            attributes: !0,
            attributeFilter: ["class", "disabled", "aria-disabled", "tabindex", "data-inven-idx"]
          })
        }
        return this.set
      }
      scrolled(WW) {
        !this.set || WW instanceof Element && ((WW, iW) => {
          const OW = WW.scrollers.get(iW);
          if (!OW || OW.holdsOthers || iW.scrollLeft !== OW.left) return !1;
          const mW = iW.scrollTop - OW.top;
          if (0 === mW) return !0;
          OW.top = iW.scrollTop;
          for (const EW of OW.probes) EW.rect.top -= mW;
          for (const EW of OW.targets) EW.rect.top -= mW, EW.visible = Pi(EW.rect, OW.viewport, OW.box);
          return !0
        })(this.set, WW) || (this.set = null)
      }
      revalidate() {
        this.set && this.set.probes.some((WW => {
          return iW = WW.rect, OW = WW.element.getBoundingClientRect(), !(iW.left === OW.left && iW.top === OW.top && iW.width === OW.width && iW.height === OW.height);
          var iW, OW
        })) && (this.set = null)
      }
      disconnect() {
        this.observer.disconnect(), this.set = null
      }
    }
    const PO = new class {
        constructor() {
          this.focused = null, this.focusTarget = null, this.lastRect = null, this.panelMemory = new Map, this.reopenSlotIdx = null, this.dpadTimers = new Map(AW.A.map((WW => [WW, (0, bW.c)(AW.D)]))), this.stickRepeat = new AW.b((0, bW.c)(AW.Z)), this.pageUpTimer = (0, bW.c)(AW.R), this.pageDownTimer = (0, bW.c)(AW.R), this.stickGate = new KW, this.pointer = null, this.activePress = null, this.dropLatch = new Vi, this.scroller = new Gi, this.scrollStickClick = new Ri, this.hover = new qi, this.lastRealPointer = null, this.placeAfterCategory = null, this.hotbarPick = null, this.ring = new XW, this.targets = new NO, this.hasCategories = !1, this.wasShowing = !1, this.state = fi.c, this.isActive = () => (0, zW.h)(), this.isShowing = () => "inventory" === ZW.c.getActiveConsumerName() && (0, lW.l)(), this.getState = () => this.state, this.isSteppingSlots = () => this.isShowing() && null === this.pointer, this.onDeactivate = () => {
            this.endInteraction((0, zW.d)()), (0, zW.h)() || this.forgetSurface()
          }, this.forgetSurface = () => {
            var WW;
            this.reopenSlotIdx = null !== (WW = this.focused ? oi(this.focused).idx : null) && void 0 !== WW ? WW : this.reopenSlotIdx, this.focused = null, this.focusTarget = null, this.lastRect = null, this.placeAfterCategory = null, (0, zW.s)(), this.panelMemory.clear(), this.targets.disconnect()
          }, this.onFrame = WW => {
            (0, LW.unstable_batchedUpdates)((() => {
              this.frame(WW)
            }))
          }, this.shouldBlockRealPointer = WW => WW.isTrusted && !(0, UW.t)(WW) && this.isShowing(), this.noteRealPointer = WW => {
            WW instanceof MouseEvent && WW.isTrusted && !(0, UW.t)(WW) && (this.lastRealPointer ??= {
              x: 0,
              y: 0
            }, this.lastRealPointer.x = WW.clientX, this.lastRealPointer.y = WW.clientY)
          }, this.wakePressActs = WW => {
            var iW;
            return WW === (0, tW.h)("inventoryClose") ? !(null !== (iW = (0, zW.d)()) && void 0 !== iW && iW.isHolding()) : !(WW !== (0, tW.h)("inventory") || !OO()) || ((0, AW.E)(WW) ? this.isNavButton(WW) : WO.some((iW => (0, tW.h)(iW) === WW)))
          }
        }
        frame(WW) {
          var iW, OW, mW, EW, NW;
          const PW = (0, zW.d)();
          if (!(0, lW.l)()) return void(this.wasShowing && (this.endInteraction(PW), this.rehoverRealPointer()));
          this.wasShowing = !0, this.applyFocusRequest(), WW.wokeDevice && this.focusWakePointer(!(null === PW || void 0 === PW || !PW.isHolding())), this.applyCategoryPlace(), this.ensureFocus(), "cursor" !== (0, xW.m)().inventoryNavigation || this.pointer || this.engagePointer();
          const LW = performance.now();
          this.handleNavigation(WW, LW), this.handlePanels(WW), this.handlePaging(WW, LW), this.handleScroll(WW), this.handleButtons(WW, LW, PW), this.applyFocusRequest(), this.pointer && this.hoverAtPointer();
          const cW = this.ensureFocus(),
            wW = this.focusContext(PW);
          this.ring.show(cW);
          const ZW = "slot" === wW.kind ? wW.idx : null,
            AW = null !== (iW = null === (OW = wW.actionElement) || void 0 === OW ? void 0 : OW.querySelector(".DoCraftItem")) && void 0 !== iW ? iW : wW.actionElement;
          this.pointer ? (this.hover.sync(PW, ZW, AW, ((WW, iW) => {
            const OW = iW ? Bi() : 0;
            return {
              clientX: WW.x - OW,
              clientY: WW.y - OW
            }
          })(this.pointer, wW.holding), wW.holding), GW.set({
            x: this.pointer.x,
            y: this.pointer.y,
            visible: !0,
            pressed: WW.isHeld((0, tW.h)("inventoryPrimary"))
          })) : cW && this.focused && this.hover.sync(PW, ZW, AW, ((WW, iW) => {
            if (!iW) return {
              clientX: WW.left + WW.width - 10,
              clientY: WW.top + WW.height / 2 - 10
            };
            const OW = Bi();
            return {
              clientX: WW.left + WW.width / 2 - OW,
              clientY: WW.top + WW.height / 2 - OW
            }
          })(cW, wW.holding), wW.holding), this.publishState({
            showing: !0,
            kind: wW.kind,
            holding: wW.holding,
            slotHasItem: wW.slotHasItem,
            pressHints: null !== (mW = null === (EW = wW.press) || void 0 === EW ? void 0 : EW.hints) && void 0 !== mW ? mW : null,
            hasCategories: this.hasCategories,
            hasList: !!this.focusTarget && Di(this.focusTarget),
            openButtonCloses: OO(),
            steppingSlots: null === this.pointer,
            quickMoveToHotbar: "slot" === wW.kind && !(null === (NW = wW.actionElement) || void 0 === NW || !NW.closest(".CreativeItemSlots")),
            dropStackHold: this.dropLatch.getHold(),
            hotbarPicking: null !== this.hotbarPick
          })
        }
        focusWakePointer(WW) {
          var iW;
          const OW = (0, lW.e)();
          if (!OW) return;
          this.targets.revalidate();
          const mW = this.getTargets().targets;
          this.setFocus(null !== (iW = ki(OW, mW)) && void 0 !== iW ? iW : WW ? bi(OW, mW, (WW => {
            let {
              rect: iW
            } = WW;
            const mW = Math.max(iW.left - OW.x, 0, OW.x - (iW.left + iW.width)),
              EW = Math.max(iW.top - OW.y, 0, OW.y - (iW.top + iW.height));
            return Math.hypot(mW, EW) <= Math.min(iW.width, iW.height) / 2
          })) : null, !1), "cursor" === (0, xW.m)().inventoryNavigation && (this.pointer = {
            x: OW.x,
            y: OW.y,
            speedRamp: 0
          })
        }
        rehoverRealPointer() {
          const WW = this.lastRealPointer;
          if (!WW || "keyboardMouse" !== cW.d.get("activeInputDevice")) return;
          const iW = document.elementFromPoint(WW.x, WW.y);
          iW && (0, qW.r)(null, iW, WW)
        }
        endInteraction(WW) {
          this.wasShowing = !1, this.hotbarPick = null, this.releasePress(), this.dropLatch.reset(), this.scroller.reset();
          for (const iW of this.dpadTimers.values()) iW.reset();
          this.stickRepeat.reset(), this.pageUpTimer.reset(), this.pageDownTimer.reset(), this.hover.clear(WW), this.ring.hide(), this.releasePointer(), this.publishState(fi.c)
        }
        getTargets() {
          const WW = this.targets.get();
          return this.hasCategories = WW.hasCategories, WW
        }
        currentTarget() {
          var WW;
          return this.focused && null !== (WW = this.getTargets().byElement.get(this.focused)) && void 0 !== WW ? WW : null
        }
        readFocusRect() {
          const WW = this.focused;
          if (null === WW || void 0 === WW || !WW.isConnected || !WW.closest(Ki)) return null;
          const iW = WW.getBoundingClientRect();
          return iW.width > 0 && iW.height > 0 ? {
            left: iW.left,
            top: iW.top,
            width: iW.width,
            height: iW.height
          } : null
        }
        ensureFocus() {
          const WW = this.readFocusRect();
          if (WW || this.pointer) return WW;
          const {
            targets: iW,
            byElement: OW
          } = this.getTargets();
          let mW = null,
            EW = !1;
          if (this.lastRect) mW = bi(Li(this.lastRect), iW);
          else {
            var NW, PW;
            const WW = ((WW, iW) => {
                const OW = document.querySelector(".EntireInventoryWrapper [data-pad-inventory-start]");
                return OW ? EO(WW.filter((WW => OW.contains(WW.element))), iW) : null
              })(iW, (0, zW.d)()),
              LW = iW.find((WW => null !== WW.idx && WW.idx === this.reopenSlotIdx)),
              cW = document.querySelector(ri);
            EW = null !== WW || void 0 !== LW, mW = null !== (NW = null !== (PW = null !== WW && void 0 !== WW ? WW : LW) && void 0 !== PW ? PW : cW && OW.get(cW)) && void 0 !== NW ? NW : si(iW)
          }
          return this.setFocus(mW, EW), this.lastRect
        }
        setFocus(WW) {
          let iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          WW && (this.focused = WW.element, this.focusTarget = WW, this.panelMemory.set(WW.panel, WW.element), iW && WW.scrollContainer && ((WW, iW) => {
            const OW = WW.getBoundingClientRect(),
              mW = eW(iW),
              EW = iW.scrollTop;
            return OW.top < mW.top ? iW.scrollTop -= mW.top - OW.top : OW.bottom > mW.bottom && (iW.scrollTop += OW.bottom - mW.bottom), iW.scrollTop !== EW
          })(WW.element, WW.scrollContainer) && this.targets.invalidate(), this.lastRect = this.readFocusRect(), this.followFocusJump())
        }
        followFocusJump() {
          if (this.pointer)
            if ("cursor" === (0, xW.m)().inventoryNavigation) {
              if (this.lastRect) {
                const WW = Li(this.lastRect);
                this.pointer = {
                  x: WW.x,
                  y: WW.y,
                  speedRamp: 0
                }
              }
            } else this.releasePointer()
        }
        engagePointer() {
          const WW = this.lastRect ? Li(this.lastRect) : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          };
          this.pointer = {
            x: WW.x,
            y: WW.y,
            speedRamp: 0
          }
        }
        releasePointer() {
          this.pointer = null, GW.hide()
        }
        hoverAtPointer() {
          var WW;
          const iW = ki(this.pointer, this.getTargets().targets);
          this.focusTarget = iW, (null === iW || void 0 === iW ? void 0 : iW.element) !== this.focused && (this.focused = null !== (WW = null === iW || void 0 === iW ? void 0 : iW.element) && void 0 !== WW ? WW : null, iW && (this.panelMemory.set(iW.panel, iW.element), this.lastRect = this.readFocusRect()))
        }
        moveCursor(WW, iW) {
          const OW = this.focusTarget,
            mW = OW && (0, xW.m)().cursorMagnetism ? Li(ji(OW)) : null;
          this.pointer = SW(this.pointer, {
            stick: WW.leftStick,
            moveDeadzone: (0, xW.m)().moveDeadzone,
            dpad: iW,
            dtMs: WW.dtMs,
            cursorSpeedPercent: (0, xW.m)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: {
              overInteractive: !1,
              magnetTarget: mW
            }
          })
        }
        move(WW) {
          this.targets.revalidate();
          const iW = this.currentTarget();
          iW && this.setFocus(Ai(iW, this.getTargets().targets, WW))
        }
        step(WW) {
          const iW = this.pointer;
          if (iW && (this.releasePointer(), !this.focused)) return this.targets.revalidate(), void this.setFocus(((WW, iW, OW) => {
            var mW;
            const EW = {
              key: "",
              rect: {
                left: WW.x,
                top: WW.y,
                width: 0,
                height: 0
              },
              panel: "",
              scrollGroup: null,
              visible: !0,
              clip: null
            };
            return null !== (mW = Ai(EW, iW, OW)) && void 0 !== mW ? mW : bi(WW, iW)
          })(iW, this.getTargets().targets, WW));
          this.move(WW)
        }
        isNavButton(WW) {
          return !Qi.some((iW => (0, tW.h)(iW) === WW)) && !(WW === (0, tW.h)("inventory") && OO())
        }
        handleNavigation(WW, iW) {
          const OW = (0, xW.m)().inventoryNavigation,
            mW = {
              x: 0,
              y: 0
            };
          let EW = null;
          for (const cW of AW.A) {
            const NW = this.isNavButton(cW) && WW.isHeld(cW);
            NW && (mW.x += zi[cW].x, mW.y += zi[cW].y), this.dpadTimers.get(cW).update(NW, iW) && "cursor" !== OW && (EW ??= cW)
          }
          const NW = this.stickGate.update(WW.leftStick, (0, xW.m)().moveDeadzone);
          if (EW && (this.step(EW), this.stickGate.lock()), "slot" !== OW) {
            const iW = ((WW, iW, OW, mW) => "hybrid" !== WW ? "cursor" === WW : !mW && (iW || OW))(OW, null !== this.pointer, NW, null !== EW);
            return iW && !this.pointer && this.engagePointer(), void(this.pointer && this.moveCursor(WW, "cursor" === OW ? mW : {
              x: 0,
              y: 0
            }))
          }
          const PW = (0, AW.l)(WW.leftStick, (0, xW.m)().moveDeadzone),
            LW = this.stickRepeat.update(NW ? (0, AW.ab)(PW) : null, iW);
          LW && this.move(LW)
        }
        applyCategoryPlace() {
          const WW = this.placeAfterCategory;
          if (!WW) return;
          this.placeAfterCategory = null, this.targets.invalidate();
          const iW = bi(Li(WW.rect), this.getTargets().targets, (iW => iW.scrollGroup === WW.scrollGroup));
          this.setFocus(iW, !1)
        }
        applyFocusRequest() {
          const WW = (0, zW.s)();
          WW && (this.targets.invalidate(), this.setFocus((0, zW.c)(this.getTargets().targets, WW)))
        }
        handlePanels(WW) {
          var iW, OW, mW;
          const EW = WW.wasPressed((0, tW.h)("inventoryPanelPrevious")),
            NW = WW.wasPressed((0, tW.h)("inventoryPanelNext"));
          if (!EW && !NW) return;
          const {
            targets: PW
          } = this.getTargets(), LW = (cW = ((WW, iW) => {
            const OW = [];
            for (const EW of WW) EW.visible && !OW.includes(EW.panel) && OW.push(EW.panel);
            const mW = WW => {
              const mW = iW.indexOf(WW);
              return -1 === mW ? iW.length + OW.indexOf(WW) : mW
            };
            return OW.sort(((WW, iW) => mW(WW) - mW(iW)))
          })(PW, Ti), wW = null !== (iW = null === (OW = this.focusTarget) || void 0 === OW ? void 0 : OW.panel) && void 0 !== iW ? iW : null, ZW = NW ? 1 : -1, 0 === cW.length ? null : cW[ci(null === wW ? -1 : cW.indexOf(wW), cW.length, ZW)]);
          var cW, wW, ZW;
          if (null === LW) return;
          const xW = this.panelMemory.get(LW),
            lW = PW.filter((WW => WW.panel === LW)),
            AW = null !== (mW = lW.find((WW => WW.element === xW && WW.visible))) && void 0 !== mW ? mW : EO(lW, (0, zW.d)());
          this.setFocus(AW)
        }
        handlePaging(WW, iW) {
          const OW = (0, tW.h)("menuPageUp"),
            mW = (0, tW.h)("menuPageDown"),
            EW = this.pageUpTimer.update(WW.isHeld(OW), iW),
            NW = this.pageDownTimer.update(WW.isHeld(mW), iW);
          if (!EW && !NW) return;
          const PW = NW ? 1 : -1;
          if (!WW.wasPressed(NW ? mW : OW) && this.hasCategories) return;
          if ((WW => {
              const iW = Array.from(document.querySelectorAll(".EntireInventoryWrapper .CreativeCategoryTab"));
              if (0 === iW.length) return !1;
              const OW = iW.findIndex((WW => WW.classList.contains("Selected"))),
                mW = iW[ci(OW, iW.length, WW)];
              return (0, qW.n)(mW, (0, qW.B)(mW)), !0
            })(PW)) {
            var LW, cW;
            this.targets.invalidate();
            const WW = null !== (LW = null === (cW = this.focusTarget) || void 0 === cW ? void 0 : cW.scrollGroup) && void 0 !== LW ? LW : null,
              iW = this.readFocusRect();
            return void(this.placeAfterCategory = null !== WW && iW && !this.pointer ? {
              rect: iW,
              scrollGroup: WW
            } : null)
          }
          const {
            targets: wW
          } = this.getTargets(), ZW = this.currentTarget(), xW = ZW && Di(ZW) ? ZW : wW.find((WW => Di(WW) && WW.visible));
          if (!xW) return;
          const lW = ((WW, iW, OW, mW) => {
            if (null === WW.scrollGroup) return null;
            const EW = Li(WW.rect),
              NW = EW.x,
              PW = EW.y + ("Down" === OW ? mW : -mW);
            let LW = null,
              cW = 1 / 0;
            for (const wW of iW) {
              if (wW.scrollGroup !== WW.scrollGroup || wW.key === WW.key) continue;
              const iW = Li(wW.rect);
              if ("Down" === OW ? iW.y <= EW.y : iW.y >= EW.y) continue;
              const mW = Math.hypot(iW.x - NW, iW.y - PW);
              mW < cW && (LW = wW, cW = mW)
            }
            return LW
          })(xW, wW, PW > 0 ? "Down" : "Up", xW.scrollContainer.clientHeight);
          this.setFocus(null !== lW && void 0 !== lW ? lW : xW)
        }
        handleScroll(WW) {
          var iW, OW, mW, EW, NW, PW;
          if (!this.scroller.isScrolling(WW.rightStick)) return void this.scroller.reset();
          const {
            targets: LW
          } = this.getTargets(), cW = this.pointer, wW = !cW && this.focusTarget && Di(this.focusTarget) ? this.focusTarget.scrollContainer : null, tW = cW && (null === (iW = LW.find((WW => WW.clip && Ui(WW.clip, cW)))) || void 0 === iW ? void 0 : iW.scrollContainer), ZW = null !== (OW = null !== (mW = null !== (EW = this.scroller.current()) && void 0 !== EW ? EW : tW) && void 0 !== mW ? mW : wW) && void 0 !== OW ? OW : null === (NW = LW.find(Di)) || void 0 === NW ? void 0 : NW.scrollContainer;
          if (!ZW || !this.scroller.step(ZW, WW.rightStick, WW.dtMs)) return;
          this.targets.scrolled(ZW);
          const xW = cW || (null === (PW = this.focusTarget) || void 0 === PW ? void 0 : PW.scrollContainer) !== ZW ? null : this.readFocusRect();
          if (!xW) return;
          const lW = eW(ZW),
            AW = Li(xW);
          if (AW.y < lW.top || AW.y > lW.bottom) {
            const WW = this.focusTarget.scrollGroup,
              iW = bi(AW, this.getTargets().targets, (iW => iW.scrollGroup === WW));
            this.setFocus(iW, !1)
          }
        }
        focusContext(WW) {
          const {
            kind: iW,
            idx: OW
          } = this.focused ? oi(this.focused) : {
            kind: null,
            idx: null
          }, mW = this.focused ? ni(this.focused) : null, EW = mW ? (0, Ii.b)(mW) : null;
          return {
            kind: iW,
            idx: OW,
            actionElement: mW,
            press: EW,
            hasPress: null !== EW,
            hasBack: !(null === EW || void 0 === EW || !EW.back),
            holding: WW.isHolding(),
            slotHasItem: null !== OW && WW.hasItemAt(OW)
          }
        }
        handleButtons(WW, iW, OW) {
          var mW, EW;
          if (!this.activePress || WW.isHeld(this.activePress.button) && (mW = this.activePress.target, EW = this.focused, null !== mW.recipe ? ui(EW).recipe === mW.recipe : EW === mW.element) || this.releasePress(), this.scrollStickClick.update(WW.rightStick, iW), !this.handleHotbarPick(WW, OW)) {
            for (const [mW, EW] of Fi) {
              const NW = (0, tW.h)(EW);
              if (!WW.wasPressed(NW) || "openButton" === mW && !OO()) continue;
              if ("RS" === NW && !this.scrollStickClick.allowsClick(iW)) continue;
              const PW = this.focusContext(OW),
                LW = aW(mW, PW);
              LW && this.runIntent(LW, PW, NW, OW)
            }
            this.handleDrop(WW, iW, OW)
          }
        }
        handleHotbarPick(WW, iW) {
          const OW = this.hotbarPick;
          if (!OW) return !1;
          const mW = WW.wasPressed((0, tW.h)("inventoryPrimary")) || WW.wasPressed((0, tW.h)("inventoryHotbarSwap"));
          if (!mW && !WW.wasPressed((0, tW.h)("inventoryClose")) && !iW.isHolding()) return !(WW.wasPressed((0, tW.h)("inventory")) && OO());
          const EW = this.focusTarget;
          mW && "hotbar" === (null === EW || void 0 === EW ? void 0 : EW.panel) && null !== EW.idx && EW.idx !== OW.idx && (iW.swapWithHotbar(EW.idx, OW.idx), this.afterAction()), this.hotbarPick = null;
          const NW = OW.element.isConnected ? this.getTargets().byElement.get(OW.element) : void 0;
          return NW && this.setFocus(NW), !0
        }
        startHotbarPick(WW) {
          var iW;
          const {
            targets: OW,
            byElement: mW
          } = this.getTargets(), EW = document.querySelector(ri), NW = null !== (iW = EW && mW.get(EW)) && void 0 !== iW ? iW : OW.find((WW => "hotbar" === WW.panel));
          NW && this.focused && (this.hotbarPick = {
            idx: WW,
            element: this.focused
          }, this.setFocus(NW))
        }
        focusKey() {
          return this.focused ? Oi(this.focused) : null
        }
        handleDrop(WW, iW, OW) {
          const mW = (0, tW.h)("inventoryDrop");
          if (WW.wasPressed(mW)) {
            const WW = (EW = this.focusContext(OW)).holding ? {
              kind: "BL"
            } : "slot" === EW.kind && EW.slotHasItem && null !== EW.idx ? {
              kind: "slot",
              idx: EW.idx
            } : null;
            return void(WW && (this.dropFrom(WW, !1, OW), this.dropLatch.press(WW, this.focusKey(), iW, jW.d[(0, xW.m)().tapHoldTime].dropStackMs), this.afterAction()))
          }
          var EW;
          const NW = this.dropLatch.update(WW.isHeld(mW), this.focusKey(), iW);
          NW && ((WW, iW, OW) => "BL" === WW.kind ? iW : !iW && OW(WW.idx))(NW, OW.isHolding(), OW.hasItemAt) && (this.dropFrom(NW, !0, OW), this.afterAction())
        }
        dropFrom(WW, iW, OW) {
          "BL" === WW.kind ? OW.dropHeld(iW, this.slotPoint()) : OW.dropSlot(WW.idx, iW)
        }
        slotPoint() {
          return this.pointer ? {
            clientX: this.pointer.x,
            clientY: this.pointer.y
          } : this.lastRect ? (WW => {
            const iW = Li(WW);
            return {
              clientX: iW.x,
              clientY: iW.y
            }
          })(this.lastRect) : {
            clientX: 0,
            clientY: 0
          }
        }
        runIntent(WW, iW, OW, mW) {
          const EW = iW.idx,
            NW = iW.actionElement;
          switch (NW && mO.has(WW) && (0, UW.A)(NW), WW) {
            case "slotPrimary":
              mW.primary(EW, this.slotPoint());
              break;
            case "slotSecondary":
              mW.secondary(EW, this.slotPoint());
              break;
            case "slotQuickMove":
              mW.quickMove(EW, this.slotPoint());
              break;
            case "hotbarPick":
              this.startHotbarPick(EW);
              break;
            case "pressPrimary":
            case "pressSecondary":
              this.startPress(iW.press, "pressPrimary" === WW ? "primary" : "secondary", OW);
              break;
            case "click":
              (0, qW.n)(NW, (0, qW.B)(NW));
              break;
            case "openKeyboard":
              (0, qW.O)(NW) && (0, qW.L)(NW);
              break;
            case "pressBack":
              iW.press.back();
              break;
            case "cancel":
              mW.cancel();
              break;
            case "close":
              return this.releasePress(), void mW.close()
          }
          this.afterAction()
        }
        startPress(WW, iW, OW) {
          this.releasePress(), WW.press(iW) && (this.activePress = {
            handlers: WW,
            button: OW,
            target: ui(this.focused)
          })
        }
        releasePress() {
          var WW, iW, OW;
          null === (WW = this.activePress) || void 0 === WW || null === (iW = (OW = WW.handlers).release) || void 0 === iW || iW.call(OW), this.activePress = null
        }
        afterAction() {
          this.targets.invalidate(), this.hover.invalidate()
        }
        publishState(WW) {
          ((WW, iW) => {
            var OW, mW, EW, NW, PW, LW;
            return WW.showing === iW.showing && WW.kind === iW.kind && WW.holding === iW.holding && WW.slotHasItem === iW.slotHasItem && (null === (OW = WW.pressHints) || void 0 === OW ? void 0 : OW.primary) === (null === (mW = iW.pressHints) || void 0 === mW ? void 0 : mW.primary) && (null === (EW = WW.pressHints) || void 0 === EW ? void 0 : EW.secondary) === (null === (NW = iW.pressHints) || void 0 === NW ? void 0 : NW.secondary) && (null === (PW = WW.pressHints) || void 0 === PW ? void 0 : PW.back) === (null === (LW = iW.pressHints) || void 0 === LW ? void 0 : LW.back) && WW.hasCategories === iW.hasCategories && WW.hasList === iW.hasList && WW.openButtonCloses === iW.openButtonCloses && WW.steppingSlots === iW.steppingSlots && WW.hotbarPicking === iW.hotbarPicking && WW.quickMoveToHotbar === iW.quickMoveToHotbar && WW.dropStackHold === iW.dropStackHold
          })(WW, this.state) || (this.state = WW, wW.l.iZ(fi.d, WW))
        }
      },
      LO = ["pointermove", "pointerover", "pointerout", "mouseover", "mouseout"];
    var cO = OW(9942),
      wO = OW(327),
      tO = OW(1729),
      ZO = OW(9382);
    const xO = "[data-pad-secondary]",
      lO = WW => WW instanceof HTMLElement && (0, FW.p)(WW) && !(0, FW.u)(WW),
      AO = WW => {
        const iW = WW.querySelector(xO);
        if (iW && lO(iW)) return iW;
        for (const EW of null !== (OW = null === (mW = WW.parentElement) || void 0 === mW ? void 0 : mW.children) && void 0 !== OW ? OW : []) {
          var OW, mW;
          if (EW !== WW && EW.matches(xO) && lO(EW)) return EW
        }
        return null
      },
      bO = (WW, iW, OW, mW) => Math.max(0, Math.max(WW, OW) - Math.min(iW, mW)),
      jO = (WW, iW, OW, mW) => Math.max(0, Math.min(iW, mW) - Math.max(WW, OW)),
      UO = (WW, iW, OW) => {
        const mW = (WW.left + WW.right) / 2,
          EW = (WW.top + WW.bottom) / 2,
          NW = (iW.left + iW.right) / 2,
          PW = (iW.top + iW.bottom) / 2;
        if ("Left" === OW || "Right" === OW) {
          const LW = "Right" === OW ? 1 : -1;
          return {
            forwardGap: "Right" === OW ? iW.left - WW.right : WW.left - iW.right,
            centreForward: (NW - mW) * LW,
            sidewaysGap: bO(WW.top, WW.bottom, iW.top, iW.bottom),
            sidewaysOverlap: jO(WW.top, WW.bottom, iW.top, iW.bottom),
            centreSideways: Math.abs(PW - EW),
            startSideways: Math.abs(iW.top - WW.top),
            fromSidewaysSize: WW.bottom - WW.top,
            toSidewaysSize: iW.bottom - iW.top,
            toLength: iW.right - iW.left
          }
        }
        const LW = "Down" === OW ? 1 : -1;
        return {
          forwardGap: "Down" === OW ? iW.top - WW.bottom : WW.top - iW.bottom,
          centreForward: (PW - EW) * LW,
          sidewaysGap: bO(WW.left, WW.right, iW.left, iW.right),
          sidewaysOverlap: jO(WW.left, WW.right, iW.left, iW.right),
          centreSideways: Math.abs(NW - mW),
          startSideways: Math.abs(iW.left - WW.left),
          fromSidewaysSize: WW.right - WW.left,
          toSidewaysSize: iW.right - iW.left,
          toLength: iW.bottom - iW.top
        }
      },
      kO = WW => WW.centreForward > .5 && WW.forwardGap >= -WW.toLength / 2,
      sO = WW => {
        const iW = WW.sidewaysOverlap > 0 ? 0 : 2 * WW.fromSidewaysSize,
          OW = WW.fromSidewaysSize > 1.5 * WW.toSidewaysSize ? WW.startSideways : WW.centreSideways;
        return Math.max(0, WW.forwardGap) + 3 * WW.sidewaysGap + iW + .1 * OW
      },
      MO = (WW, iW) => jO(WW.top, WW.bottom, iW.top, iW.bottom) > 0 || iW.bottom - iW.top > iW.right - iW.left,
      KO = (WW, iW, OW, mW, EW, NW) => {
        const PW = EW ? YO(WW, iW, OW, EW) : new Set,
          LW = TO(WW, iW, OW, PW);
        return LW < 0 && PW.size > 0 && NW ? SO(WW, iW, OW, NW) : mW && LW >= 0 ? yO(WW, iW, OW, mW, LW, PW) : LW
      },
      SO = (WW, iW, OW, mW) => {
        const EW = new Set,
          NW = TO(WW, iW, "Up", EW) >= 0,
          PW = TO(WW, iW, "Down", EW) >= 0,
          LW = new Set;
        return iW.forEach(((iW, OW) => {
          const EW = iW.top + iW.bottom < WW.top + WW.bottom;
          mW[OW] && !(EW ? NW : PW) || LW.add(OW)
        })), TO(WW, iW, OW, LW)
      },
      YO = (WW, iW, OW, mW) => {
        const EW = new Set;
        return "Left" !== OW && "Right" !== OW || iW.forEach(((iW, OW) => {
          mW[OW] && jO(WW.top, WW.bottom, iW.top, iW.bottom) <= 0 && EW.add(OW)
        })), EW
      },
      yO = (WW, iW, OW, mW, EW, NW) => {
        const PW = UO(WW, iW[EW], OW).forwardGap;
        let LW = EW,
          cW = mW[EW],
          wW = 1 / 0;
        return iW.forEach(((iW, tW) => {
          const ZW = mW[tW];
          if (NW.has(tW) || ZW < cW || ZW === cW && LW === EW) return;
          const xW = UO(WW, iW, OW);
          if (!kO(xW) || xW.forwardGap < 0 || xW.forwardGap >= PW) return;
          const lW = sO(xW);
          (ZW > cW || lW < wW) && (LW = tW, cW = ZW, wW = lW)
        })), LW
      },
      TO = (WW, iW, OW, mW) => {
        let EW = -1,
          NW = 1 / 0;
        if (iW.forEach(((iW, PW) => {
            const LW = ((WW, iW, OW) => {
              const mW = UO(WW, iW, OW);
              if (!kO(mW)) return null;
              const EW = Math.max(0, mW.forwardGap);
              return mW.sidewaysOverlap <= 0 && mW.sidewaysGap > 2 * (EW + 1) ? null : sO(mW)
            })(WW, iW, OW);
            null !== LW && LW < NW && !mW.has(PW) && (NW = LW, EW = PW)
          })), EW < 0) return -1;
        const PW = iW[EW],
          LW = UO(WW, PW, OW).forwardGap;
        let cW = LW,
          wW = EW;
        return iW.forEach(((iW, NW) => {
          if (NW === EW || mW.has(NW) || !((WW, iW, OW) => {
              const mW = "Left" === OW || "Right" === OW,
                EW = mW ? jO(WW.top, WW.bottom, iW.top, iW.bottom) : jO(WW.left, WW.right, iW.left, iW.right),
                NW = mW ? Math.min(WW.bottom - WW.top, iW.bottom - iW.top) : Math.min(WW.right - WW.left, iW.right - iW.left);
              return EW > 0 && EW >= NW / 2
            })(iW, PW, OW)) return;
          const tW = UO(WW, iW, OW);
          kO(tW) && tW.forwardGap + tW.toLength <= LW + 1 && tW.forwardGap < cW && (cW = tW.forwardGap, wW = NW)
        })), wW
      },
      JO = (WW, iW) => {
        let OW = -1,
          mW = 1 / 0;
        return iW.forEach(((iW, EW) => {
          const NW = Math.max(iW.left - WW.x, 0, WW.x - iW.right),
            PW = Math.max(iW.top - WW.y, 0, WW.y - iW.bottom),
            LW = Math.hypot(NW, PW);
          LW < mW && (mW = LW, OW = EW)
        })), OW
      },
      hO = (WW, iW) => {
        const OW = Math.min(WW.bottom - WW.top, iW.bottom - iW.top) / 2;
        return Math.abs(WW.top - iW.top) > OW ? WW.top - iW.top : WW.left - iW.left
      },
      HO = WW => {
        let iW = -1;
        for (let OW = 0; OW < WW.length; OW++)(iW < 0 || hO(WW[OW], WW[iW]) < 0) && (iW = OW);
        return iW
      };
    var nO = OW(1784),
      uO = OW(9946),
      oO = OW(9952);
    const dO = WW => {
        if ("death" !== WW || "inGame" !== cW.d.get("gameState") || "off" === (0, xW.m)().quickChat || null === (0, nO.b)()) return !1;
        const iW = (0, tW.h)("chat");
        return iW !== (0, tW.h)("menuConfirm") && iW !== (0, tW.h)("menuBack")
      },
      eO = new uO.e;
    var vO = OW(4948),
      gO = OW(9954),
      DO = OW(9957);
    const VO = WW => {
        let iW = null;
        for (const OW of WW.querySelectorAll("[data-pad-tabs]"))(0, FW.p)(OW) && (!iW || Number(OW.dataset.padTabs) < Number(iW.dataset.padTabs)) && (iW = OW);
        return iW
      },
      pO = (WW, iW, OW, mW) => {
        WW.focusWhenFound((() => {
          const EW = WW.pickInitial(iW);
          if (EW && !OW.has(EW) && (null === mW || void 0 === mW || !mW.contains(EW))) return EW;
          const NW = ((WW, iW) => {
              const OW = iW => WW.getEnabledCandidates(iW).filter((WW => !WW.closest("[data-pad-tabs]")));
              for (const mW of (0, FW.g)(iW)) {
                const WW = OW(mW);
                if (WW.length > 0) return WW
              }
              return OW(iW)
            })(WW, iW).filter((WW => !OW.has(WW))),
            PW = HO(NW.map((WW => WW.getBoundingClientRect())));
          return PW >= 0 ? NW[PW] : null
        }), 3e3)
      },
      fO = (WW, iW, OW, mW) => {
        var EW;
        const NW = ((WW, iW) => {
          if (0 === WW.length) return null;
          const OW = WW.findIndex((WW => "true" === WW.dataset.padSelected));
          return OW < 0 ? iW > 0 ? WW[0] : WW[WW.length - 1] : WW[(OW + iW + WW.length) % WW.length]
        })([...OW.querySelectorAll("[data-pad-tab]")].filter((WW => (0, FW.p)(WW) && !(0, FW.u)(WW))), mW);
        if (!NW) return;
        const PW = null !== (EW = null === WW || void 0 === WW ? void 0 : WW.getFocused()) && void 0 !== EW ? EW : null,
          LW = !(null === PW || void 0 === PW || !PW.isConnected) && OW.contains(PW),
          cW = WW && !LW ? new Set(WW.getEnabledCandidates(iW)) : null;
        (0, qW.c)(NW), WW && (cW ? pO(WW, iW, cW, OW) : WW.setFocus(NW, {
          byUser: !0
        }))
      },
      CO = WW => {
        var iW;
        const OW = eW(null !== (iW = hW(WW, "x")) && void 0 !== iW ? iW : WW),
          mW = (0, FW.f)(WW).filter((WW => !(0, FW.u)(WW))),
          EW = mW.filter((WW => vW(WW.getBoundingClientRect(), OW)));
        return (EW.length > 0 ? EW : mW).sort(((WW, iW) => hO(WW.getBoundingClientRect(), iW.getBoundingClientRect())))
      },
      XO = (WW, iW, OW) => {
        const mW = [...iW.querySelectorAll("[data-pad-row]")].filter(FW.p),
          EW = WW.getFocused(),
          NW = EW ? mW.findIndex((WW => WW.contains(EW))) : -1;
        let PW = 0,
          LW = OW > 0 ? 0 : mW.length - 1;
        if (NW >= 0 && EW) PW = Math.max(0, CO(mW[NW]).indexOf(EW)), LW = NW + OW;
        else if (EW) {
          const WW = EW.getBoundingClientRect(),
            iW = mW.map((iW => {
              const mW = iW.getBoundingClientRect();
              return OW > 0 ? mW.top >= WW.top : mW.bottom <= WW.bottom
            }));
          LW = OW > 0 ? iW.indexOf(!0) : iW.lastIndexOf(!0)
        }
        for (let cW = LW; cW >= 0 && cW < mW.length; cW += OW) {
          const iW = CO(mW[cW]);
          if (iW.length > 0) return void WW.setFocus(iW[Math.min(PW, iW.length - 1)], {
            byUser: !0
          })
        }
      },
      BO = (WW, iW, OW) => {
        var mW, EW;
        const NW = null !== (mW = null === WW || void 0 === WW ? void 0 : WW.getFocused()) && void 0 !== mW ? mW : null,
          PW = null !== NW && void 0 !== NW && NW.closest("[data-pad-row]") ? "x" : "y",
          LW = null !== (EW = NW ? hW(NW, PW, iW) : null) && void 0 !== EW ? EW : nW(iW, PW);
        if (!LW) return;
        const cW = NW ? (0, qW.B)(NW) : null;
        if (dW(LW, PW, OW * ("y" === PW ? LW.clientHeight : LW.clientWidth) * .85), !WW || !cW) return;
        const wW = eW(LW),
          tW = WW.getEnabledCandidates(iW).filter((WW => LW.contains(WW) && vW(WW.getBoundingClientRect(), wW))),
          ZW = JO(cW, tW.map((WW => WW.getBoundingClientRect())));
        ZW >= 0 && WW.setFocus(tW[ZW], {
          scroll: !1,
          byUser: !0
        })
      };
    let qO = null;
    const RO = (WW, iW) => {
        var OW, mW;
        const EW = iW.querySelector("[data-pad-friends-column]"),
          NW = WW.getFocused();
        if (!EW || !NW || !EW.contains(NW)) return !1;
        const PW = WW.getEnabledCandidates(iW).filter((WW => !EW.contains(WW))),
          LW = JO((0, qW.B)(NW), PW.map((WW => WW.getBoundingClientRect()))),
          cW = null === (OW = qO) || void 0 === OW ? void 0 : OW.deref();
        return WW.setFocus(null !== cW && void 0 !== cW && cW.isConnected ? cW : null !== (mW = PW[LW]) && void 0 !== mW ? mW : null, {
          byUser: !0
        }), !0
      },
      GO = WW => {
        const iW = (0, tW.h)(WW);
        return (0, AW.E)(iW) || ZO.v.some((WW => (0, tW.h)(WW) === iW)) ? null : iW
      },
      IO = (WW, iW) => {
        const OW = GO(iW);
        return null !== OW && WW.wasPressed(OW)
      },
      aO = function(WW, iW, OW) {
        let mW = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const EW = (WW => {
            var iW, OW;
            return null !== (iW = null === (OW = VO(WW)) || void 0 === OW ? void 0 : OW.querySelector("[data-pad-tab][data-pad-selected='true']")) && void 0 !== iW ? iW : null
          })(iW),
          NW = WW && EW ? new Set(WW.getEnabledCandidates(iW)) : null;
        (0, cO.e)(), OW === wO.m.SETTINGS && (0, tO.j)(cW.d.get("openEverythingMenuName")) ? cW.d.set({
          openEverythingMenuName: OW
        }) : (0, tO.s)((0, DO.e)("padMenuShortcut"), OW, mW), WW && NW && EW && pO(WW, iW, NW, EW.closest("[data-pad-tabs]"))
      },
      rO = WW => null !== WW.closest(".Dropdown-root") || null !== WW.querySelector(".Dropdown-root.is-open"),
      zO = WW => null !== (0, gO.d)() && "popup" !== WW.layer.kind && !VO(WW.root) && !rO(WW.root),
      FO = (0, bW.c)(AW.R),
      QO = (0, bW.c)(AW.R),
      Wm = (WW, iW, OW) => {
        if (((WW, iW) => {
            const OW = (0, tW.h)("chat");
            return dO(iW) && WW.isHeld(OW) ? "hold" === eO.update(WW.wasPressed(OW), WW.isHeld(OW), performance.now(), jW.d[(0, xW.m)().tapHoldTime].wheelMs) && (ZW.c.consumeButton(OW), wW.l.iZ(oO.o), !0) : (eO.release(), !1)
          })(iW, OW.layer.kind)) return !0;
        const mW = OW.root;
        for (const [PW, LW] of [
            ["menuTabPrevious", -1],
            ["menuTabNext", 1]
          ])
          if (iW.wasPressed((0, tW.h)(PW))) {
            const iW = rO(mW) ? null : VO(mW);
            if (iW) fO(WW, mW, iW, LW);
            else if (zO(OW)) {
              var EW;
              const iW = WW ? new Set(WW.getEnabledCandidates(mW)) : null;
              null !== (EW = (0, gO.d)()) && void 0 !== EW && EW(LW) && WW && iW && pO(WW, mW, iW, null)
            } else WW && XO(WW, mW, LW);
            return !0
          } for (const [PW, LW, cW] of [
            ["menuPageUp", -1, FO],
            ["menuPageDown", 1, QO]
          ]) {
          const OW = (0, tW.h)(PW);
          if (iW.wasPressed(OW) && cW.reset(), cW.update(iW.isHeld(OW), performance.now())) return BO(WW, mW, LW), !0
        }
        const NW = "popup" === OW.layer.kind;
        return IO(iW, "pause") ? (NW || (0, tO.m)() && "menu" !== OW.layer.kind || aO(WW, mW, (0, tO.m)() ? wO.m.SETTINGS : (0, vO.e)()), !0) : !!IO(iW, "leaderboard") && ("home" === OW.layer.kind ? (WW => {
          const iW = [...WW.querySelectorAll("[data-pad-notifications]")].find(FW.p);
          iW && (0, qW.c)(iW)
        })(mW) : NW || aO(WW, mW, wO.m.LOBBY_LEADERBOARD, "inGame" === cW.d.get("gameState")), !0)
      },
      im = (WW, iW, OW) => {
        if (Wm(WW, iW, OW)) return !0;
        const mW = "home" === OW.layer.kind;
        if (iW.wasPressed((0, tW.h)("menuSecondary"))) {
          const iW = WW.getFocused(),
            EW = iW ? AO(iW) : null;
          if (EW) return (0, qW.c)(EW), !0;
          if (mW) {
            const iW = OW.root.querySelector("[data-pad-search] input");
            return iW && (0, FW.t)(iW, OW.root) ? (WW.setFocus(iW, {
              byUser: !0
            }), (0, qW.c)(iW)) : cW.d.set({
              searchOpen: !0
            }), !0
          }
        }
        return !(!mW || !IO(iW, "inventory")) && (((WW, iW) => {
          var OW, mW;
          const EW = iW.querySelector("[data-pad-friends-column]");
          if (!EW || !(0, FW.p)(EW)) return void(0, tO.s)((0, DO.e)("padMenuShortcut"), wO.m.SOCIAL);
          if (RO(WW, iW)) return;
          const NW = null !== (OW = null === (mW = EW.querySelector("[data-pad-friends-start]")) || void 0 === mW ? void 0 : mW.getBoundingClientRect().top) && void 0 !== OW ? OW : -1 / 0,
            PW = WW.getEnabledCandidates(EW),
            LW = PW.filter((WW => WW.getBoundingClientRect().top >= NW)),
            cW = LW.length > 0 ? LW : PW,
            wW = HO(cW.map((WW => WW.getBoundingClientRect())));
          WW.setFocus(wW >= 0 ? cW[wW] : null, {
            byUser: !0
          })
        })(WW, OW.root), !0)
      },
      Om = WW => {
        var iW, OW, mW;
        const EW = (0, qW.D)(WW);
        if (null !== EW) return EW;
        const NW = (null !== (iW = null !== (OW = null !== (mW = WW.getAttribute("aria-label")) && void 0 !== mW ? mW : WW.getAttribute("title")) && void 0 !== OW ? OW : WW.textContent) && void 0 !== iW ? iW : "").replace(/\s+/g, " ").trim();
        return NW ? `${WW.tagName}:${NW.slice(0,100)}` : null
      };
    class mm {
      constructor() {
        this.remembered = new Map, this.history = []
      }
      enter(WW) {
        const iW = this.history.indexOf(WW);
        if (iW >= 0) {
          for (const WW of this.history.splice(iW + 1)) this.remembered.delete(WW);
          return !0
        }
        return this.remembered.delete(WW), this.history.push(WW), this.history.length > 32 && this.forget(this.history[0]), !1
      }
      forget(WW) {
        this.remembered.delete(WW);
        const iW = this.history.indexOf(WW);
        iW >= 0 && this.history.splice(iW, 1)
      }
      remember(WW, iW, OW, mW) {
        const EW = Om(iW),
          NW = (0, qW.D)(iW),
          PW = null !== NW && ((WW, iW) => {
            let OW = 0;
            for (const mW of WW.querySelectorAll("[data-pad-key], [href]"))
              if ((mW.getAttribute("data-pad-key") === iW || mW.getAttribute("href") === iW) && (OW++, OW > 1)) return !0;
            return !1
          })(OW, NW) ? Math.max(0, this.twins(mW(), NW).indexOf(iW)) : 0;
        this.remembered.set(WW, {
          element: new WeakRef(iW),
          identity: EW,
          ordinal: PW
        })
      }
      has(WW) {
        return this.remembered.has(WW)
      }
      recall(WW, iW) {
        var OW, mW;
        const EW = this.remembered.get(WW);
        if (!EW) return null;
        const NW = EW.element.deref();
        if (NW && iW.includes(NW)) return NW;
        if (null === EW.identity) return null;
        const PW = this.twins(iW, EW.identity);
        return null !== (OW = null !== (mW = PW[EW.ordinal]) && void 0 !== mW ? mW : PW[0]) && void 0 !== OW ? OW : null
      }
      twins(WW, iW) {
        return WW.filter((WW => Om(WW) === iW))
      }
    }
    var Em = OW(1269);
    const Nm = WW => {
        const iW = [];
        let OW = WW;
        for (; OW && OW !== document.body;) {
          const WW = getComputedStyle(OW).zIndex;
          "auto" !== WW && iW.push(Number(WW) || 0), OW = OW.parentElement
        }
        return iW.reverse()
      },
      Pm = (WW, iW) => {
        const OW = ((WW, iW) => {
          const OW = Math.max(WW.length, iW.length);
          for (let NW = 0; NW < OW; NW++) {
            var mW, EW;
            const OW = (null !== (mW = WW[NW]) && void 0 !== mW ? mW : 0) - (null !== (EW = iW[NW]) && void 0 !== EW ? EW : 0);
            if (0 !== OW) return OW
          }
          return 0
        })(Nm(WW), Nm(iW));
        if (0 !== OW) return OW > 0;
        if (WW.contains(iW)) return !1;
        if (iW.contains(WW)) return !0;
        const mW = WW.compareDocumentPosition(iW);
        return !!(mW & Node.DOCUMENT_POSITION_PRECEDING) || !(mW & Node.DOCUMENT_POSITION_FOLLOWING) && null
      },
      Lm = (WW, iW) => {
        var OW;
        return null !== (OW = Pm(WW.root, iW.root)) && void 0 !== OW ? OW : WW.order > iW.order
      },
      cm = (WW, iW) => iW.some((iW => !iW.contains(WW) && !WW.contains(iW) && !0 === Pm(iW, WW)));
    let wm = null,
      tm = null,
      Zm = -1;
    const xm = () => {
        var WW;
        const iW = null === (WW = document.timeline) || void 0 === WW ? void 0 : WW.currentTime,
          OW = "number" === typeof iW ? iW : null;
        if (null !== OW && OW === tm && Zm === (0, Em.e)()) return wm;
        let mW = null;
        const EW = [],
          NW = [...document.querySelectorAll("[data-pad-covers]")].filter(FW.p);
        for (const PW of (0, Em.h)()) {
          const WW = PW.getRoot(),
            iW = !!WW && (0, FW.p)(WW) && !cm(WW, NW);
          if (PW.shown && !iW && EW.push(PW), PW.shown = iW, !WW || !iW) continue;
          const OW = {
            layer: PW,
            root: WW,
            order: PW.order
          };
          mW && !Lm(OW, mW) || (mW = OW)
        }
        wm = mW, tm = OW, Zm = (0, Em.e)();
        for (const PW of EW)(0, Em.i)(PW);
        return wm
      },
      lm = () => {
        const WW = xm();
        return !(null === WW || void 0 === WW || !WW.layer.close) && (WW.layer.close(), tm = null, !0)
      },
      Am = () => {
        var WW, iW;
        return null !== (WW = null === (iW = xm()) || void 0 === iW ? void 0 : iW.root) && void 0 !== WW ? WW : null
      },
      bm = WW => WW ? {
        ...WW,
        root: Am()
      } : null;
    let jm = null,
      Um = null,
      km = (0, xW.m)().menuNavigation,
      sm = null;
    const Mm = new KW;
    let Km = null;
    wW.l.subscribe(xW.i, (() => {
      const WW = (0, xW.m)().menuNavigation;
      WW !== km && (km = WW, jm = null, Um = null)
    }));
    const Sm = () => {
        var WW;
        return null !== (WW = jm) && void 0 !== WW ? WW : (0, xW.m)().menuNavigation
      },
      Ym = WW => {
        if (hm()) {
          if (sm = bm(WW), "hybrid" === Sm()) return Mm.lock(), void(Um = Um ? null : Am());
          jm = "focus" === Sm() ? "cursor" : "focus"
        }
      },
      ym = () => {
        const WW = sm;
        return sm = null, WW
      };
    let Tm = {
      root: null,
      firstSeenMs: -1 / 0,
      atMs: -1 / 0,
      has: !1
    };
    const Jm = function(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const OW = Tm.root === WW,
          mW = OW ? Tm.firstSeenMs : iW,
          EW = Tm.has || iW - mW > 1e3;
        return (!OW || !EW || iW - Tm.atMs > 250) && (Tm = {
          root: WW,
          firstSeenMs: mW,
          atMs: iW,
          has: (0, FW.j)(WW)
        }), Tm.has
      },
      hm = () => {
        const WW = Am();
        return null !== WW && Jm(WW)
      },
      Hm = () => {
        const WW = xm();
        return Um && (null === WW || void 0 === WW ? void 0 : WW.root) !== Um && (Um = null), (WW => {
          let {
            mode: iW,
            hasLayer: OW,
            hasCandidates: mW,
            hybridCursorEngaged: EW
          } = WW;
          return OW ? "cursor" !== iW && mW() ? "hybrid" === iW && EW ? "cursor" : "focus" : "cursor" : null
        })({
          mode: Sm(),
          hasLayer: null !== WW,
          hasCandidates: () => null !== WW && Jm(WW.root),
          hybridCursorEngaged: null !== Um
        })
      },
      nm = () => "hybrid" === Sm() && hm(),
      um = "pad-focused";
    var om = OW(5253),
      dm = OW(5940);
    const em = "[data-pad-destructive]",
      gm = `${em}, [data-pad-back]`,
      Dm = WW => ({
        rect: WW.getBoundingClientRect(),
        destructive: WW.matches(em),
        closes: null !== WW.closest("[data-pad-close-button]"),
        unavailable: WW.matches("[data-pad-unavailable]")
      }),
      Vm = WW => {
        let {
          destructive: iW,
          closes: OW,
          unavailable: mW
        } = WW;
        return iW ? OW ? 2 : 3 : mW ? 1 : 0
      },
      pm = WW => {
        let iW = -1;
        for (let OW = 0; OW < WW.length; OW++) {
          if (iW < 0) {
            iW = OW;
            continue
          }
          const mW = WW[OW],
            EW = WW[iW];
          Vm(mW) === Vm(EW) ? hO(mW.rect, EW.rect) < 0 && (iW = OW) : Vm(mW) < Vm(EW) && (iW = OW)
        }
        return iW
      },
      fm = "[data-pad-tabs]",
      Cm = "[data-pad-tab]",
      Xm = (WW, iW) => {
        const OW = WW.querySelector(`${Cm}[data-pad-selected='true']`);
        return OW && iW.includes(OW) ? OW : null
      },
      Bm = (WW, iW) => {
        let OW = iW;
        for (let mW = iW.parentElement; mW && !mW.contains(WW); mW = mW.parentElement) OW = mW;
        return OW
      };
    class qm {
      constructor() {
        this.contentReturn = null
      }
      redirect(WW, iW, OW, mW) {
        var EW, NW;
        const PW = WW.closest(fm),
          LW = iW.closest(fm);
        var cW;
        if (LW && LW !== PW) return PW || (this.contentReturn = new WeakRef(WW)), null !== (cW = Xm(LW, OW)) && void 0 !== cW ? cW : iW;
        if (!PW || LW) return iW;
        const wW = Bm(WW, iW),
          tW = null === (EW = this.contentReturn) || void 0 === EW ? void 0 : EW.deref();
        return tW && wW.contains(tW) && OW.includes(tW) ? tW : null !== (NW = this.pickRegionStart(wW, hW(iW, "y", mW), OW)) && void 0 !== NW ? NW : iW
      }
      findTabContent(WW, iW, OW) {
        const mW = WW.closest(fm);
        if (!mW || !WW.matches(Cm) || mW.contains(iW)) return null;
        const EW = iW.closest(fm);
        if (EW && Number(EW.dataset.padTabs) <= Number(mW.dataset.padTabs)) return null;
        const NW = Bm(WW, iW);
        return OW.some((WW => NW.contains(WW) && !WW.closest(gm))) || !iW.closest(gm) ? NW : null
      }
      pickContentStart(WW, iW, OW) {
        return this.contentReturn = null, this.pickRegionStart(WW, hW(WW, "y", OW), iW)
      }
      pickReplacedContentStart(WW, iW, OW, mW) {
        if (!iW.contains(WW)) return null;
        const EW = Bm(iW, WW),
          NW = OW.filter((WW => iW.contains(WW) && !EW.contains(WW) && !WW.closest(gm)));
        return 0 === NW.length ? null : (this.contentReturn = null, this.pickRegionStart(iW, hW(NW[0], "y", mW), NW))
      }
      backToStrip(WW, iW, OW) {
        if (WW.closest(fm)) return null;
        const mW = VO(OW);
        for (const EW of OW.querySelectorAll(fm)) {
          if (Number(EW.dataset.padTabs) <= 1 || EW === mW) continue;
          const NW = Xm(EW, iW),
            PW = NW ? Bm(WW, EW).parentElement : null;
          if (NW && PW && PW !== OW && OW.contains(PW)) return this.contentReturn = new WeakRef(WW), NW
        }
        return null
      }
      pickRegionStart(WW, iW, OW) {
        const mW = eW(iW),
          EW = WW => {
            const iW = OW.filter((iW => WW.contains(iW) && !iW.closest(fm) && vW(iW.getBoundingClientRect(), mW))),
              EW = pm(iW.map(Dm));
            return EW >= 0 ? iW[EW] : null
          };
        for (const NW of (0, FW.g)(WW)) {
          const WW = EW(NW);
          if (WW) return WW
        }
        for (const NW of WW.querySelectorAll(fm)) {
          const WW = Xm(NW, OW);
          if (WW) return WW
        }
        return EW(WW)
      }
    }
    const Rm = "[data-pad-default-focus], .Dropdown-option.is-selected",
      Gm = ".Dropdown-root.is-open > .Dropdown-menu",
      Im = "[data-pad-no-step-in]",
      am = "[data-pad-tabs]",
      rm = "[data-pad-press-area]",
      zm = WW => {
        let iW = WW;
        for (let OW = 0; iW && OW <= 4; OW++, iW = iW.parentElement) {
          const OW = iW.querySelector(".CircleInfo");
          if (OW) return iW === WW || iW.querySelectorAll(FW.d).length <= 1 ? OW : null;
          if (iW !== WW && iW.querySelectorAll(FW.d).length > 1) return null
        }
        return null
      },
      Fm = (WW, iW, OW) => {
        (0, qW.r)(WW, iW, OW);
        const mW = null !== WW && void 0 !== WW && WW.isConnected ? zm(WW) : null,
          EW = zm(iW);
        mW !== EW && (0, qW.r)(mW, EW, EW ? (0, qW.B)(EW) : OW, {
          leaveBelow: WW,
          enterBelow: iW
        })
      },
      Qm = WW => WW.getBoundingClientRect(),
      WE = (WW, iW, OW) => {
        const mW = new Set(OW);
        for (let EW = WW; EW; EW = EW === iW ? null : EW.parentElement)
          if (mW.has(EW)) return EW;
        return null
      },
      iE = (WW, iW) => !WW.root || WW.root === iW || iW.matches(Gm) && WW.root.contains(iW);
    const OE = new class {
      constructor() {
        this.focused = null, this.layerKey = null, this.layerRoot = null, this.memory = new mm, this.tabStripNav = new qm, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.confirmPressedOn = null, this.confirmRepeatKey = null, this.confirmRepeated = !1, this.confirmRepeat = (0, bW.c)(AW.u), this.dpadRepeats = new Map(AW.A.map((WW => [WW, (0, bW.c)(AW.D)]))), this.stickRepeat = new AW.b((0, bW.c)(AW.Z)), this.lastRefocusCheckMs = -1 / 0, this.enteredLayerAtMs = 0, this.lastFocusedCentre = null, this.lastActivatedKey = null, this.lastActivated = null, this.lastActivatedAtMs = -1 / 0, this.pendingFocus = null, this.tabOpenWait = null, this.retryMove = null, this.scrollRemainder = {
          x: 0,
          y: 0
        }, this.wasActive = !1, this.layerKind = null, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.listeners = new Set, this.dropdownLayers = new WeakMap, this.dropdownLayerCounter = 0
      }
      install() {
        const WW = ZW.c.register({
            name: "focus",
            isActive: () => (0, lW.l)() && "focus" === Hm(),
            onFrame: WW => {
              this.onFrame(WW)
            },
            onDeactivate: () => {
              this.deactivate()
            },
            wakePressActs: WW => (0, ZW.d)(WW) || WW === (0, tW.h)("menuConfirm") && (0, qW.H)((0, lW.e)())
          }),
          iW = (0, Em.l)((WW => {
            const iW = (0, Em.n)(WW);
            null === WW.memoryKey && this.memory.forget(iW), iW === this.layerKey && (this.layerKey = null)
          }));
        let OW = -1 / 0;
        const mW = PW.d.onFrame((WW => {
            (0, lW.l)() || WW.timestampMs - OW < 100 || (OW = WW.timestampMs, xm())
          })),
          EW = WW => {
            WW.isTrusted && WW.target instanceof Element && PW.d.getActivePad() && this.noteChosenStop(WW.target)
          };
        return document.addEventListener("click", EW, !0), () => {
          WW(), iW(), mW(), document.removeEventListener("click", EW, !0), this.deactivate()
        }
      }
      noteChosenStop(WW) {
        var iW, OW;
        const mW = xm();
        if (!mW || !mW.root.contains(WW)) return;
        const EW = null !== (iW = null === (OW = WW.closest(".Dropdown-root")) || void 0 === OW ? void 0 : OW.querySelector(".Dropdown-control")) && void 0 !== iW ? iW : WW,
          NW = WE(EW, mW.root, this.getEnabledCandidates(mW.root));
        if (!NW) return;
        const PW = (0, Em.n)(mW.layer);
        PW === this.layerKey && mW.root === this.layerRoot || this.beginLayer(mW, PW), this.wasActive ? this.setFocus(NW, {
          scroll: !1,
          byUser: !0
        }) : (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.focused = NW, this.lastFocusedCentre = (0, qW.B)(NW), this.rememberFocus(NW), this.notify())
      }
      getFocused() {
        return this.focused
      }
      isActive() {
        return this.wasActive
      }
      onChange(WW) {
        return this.listeners.add(WW), () => {
          this.listeners.delete(WW)
        }
      }
      notify() {
        for (const WW of this.listeners) WW()
      }
      deactivate() {
        var WW;
        if (this.wasActive) {
          this.wasActive = !1, this.layerKind = null, this.confirmPressedOn = null, this.retryMove = null, this.pendingFocus = null;
          for (const WW of this.dpadRepeats.values()) WW.reset();
          this.stickRepeat.reset(), null !== (WW = this.focused) && void 0 !== WW && WW.isConnected && Fm(this.focused, null, (0, qW.B)(this.focused)), this.notify()
        }
      }
      setFocus(WW) {
        var iW;
        let {
          scroll: OW = !0,
          byUser: mW = !1
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (mW && (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1), WW === this.focused) return;
        const EW = null !== (iW = this.focused) && void 0 !== iW && iW.isConnected ? this.focused : null;
        if (this.focused = WW, WW) {
          OW && (WW.classList.add(um), WW.scrollIntoView({
            block: "nearest",
            inline: "nearest",
            behavior: "instant"
          })), mW && ((WW, iW) => {
            const OW = iW.closest("[data-pad-friends-column]");
            OW && WW && !OW.contains(WW) && (qO = new WeakRef(WW))
          })(EW, WW);
          const iW = (0, qW.B)(WW);
          this.lastFocusedCentre = iW, this.movedInLayer && this.rememberFocus(WW), Fm(EW, WW, iW), "false" === WW.getAttribute("aria-pressed") && WW.closest("[data-pad-select-on-focus]") && (0, qW.c)(WW)
        } else EW && Fm(EW, null, (0, qW.B)(EW));
        this.notify()
      }
      rememberFocus(WW) {
        const iW = this.layerRoot;
        this.layerKey && iW && this.memory.remember(this.layerKey, WW, iW, (() => this.getEnabledCandidates(iW)))
      }
      noteCursorActivation(WW) {
        const iW = xm();
        if (!iW || !iW.root.contains(WW)) return;
        const OW = this.getEnabledCandidates(iW.root),
          mW = new Set(OW);
        let EW = WW;
        for (; EW && !mW.has(EW);) EW = EW === iW.root ? null : EW.parentElement;
        if (!(EW instanceof HTMLElement)) return;
        const NW = (0, Em.n)(iW.layer);
        this.memory.enter(NW), this.memory.remember(NW, EW, iW.root, (() => OW))
      }
      notePageEnteredByCursor(WW) {
        return this.memory.enter(WW)
      }
      recallStop(WW, iW) {
        return this.findRemembered(WW, iW)
      }
      focusWhenFound(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
          OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.pendingFocus = {
          find: WW,
          untilMs: performance.now() + iW,
          holdWhile: OW
        }
      }
      getEnabledCandidates(WW) {
        return (0, FW.f)(WW).filter((WW => !(0, FW.u)(WW)))
      }
      onFrame(WW) {
        var iW;
        const OW = xm();
        if (!OW) return;
        const mW = null !== (iW = this.findOpenDropdown(OW)) && void 0 !== iW ? iW : OW,
          EW = performance.now(),
          NW = (0, Em.n)(mW.layer);
        if (NW !== this.layerKey || mW.root !== this.layerRoot) {
          const iW = this.focused;
          if (null !== this.layerKey && mW.root === this.layerRoot && iW && (0, FW.t)(iW, mW.root)) this.continueLayer(NW, iW), this.wasActive || this.resume(mW.root, EW);
          else {
            const iW = !this.wasActive && !WW.wokeDevice,
              PW = "death" === this.layerKind || iW,
              LW = this.enterLayer(mW, NW);
            "popup" !== mW.layer.kind || mW !== OW || LW ? "menu" === mW.layer.kind && PW && "inGame" === cW.d.get("gameState") && !(0, cO.g)(3e3) && (this.pressGuardExtends = !0, this.pressGuardUntilMs = EW + om.e) : (this.pressGuardExtends = iW, this.pressGuardUntilMs = EW + (iW ? om.e : PW ? 500 : 250))
          }
        } else this.wasActive || this.resume(mW.root, EW);
        if (this.layerKind = mW.layer.kind, this.wasActive || (this.wasActive = !0, this.notify()), WW.wokeDevice && this.focusPointedStop(mW.root), this.validateFocus(mW, EW), EW < this.pressGuardUntilMs && this.pressGuardExtends && (WW.wasPressed((0, tW.h)("menuConfirm")) || WW.wasPressed((0, tW.h)("menuBack"))) && (this.pressGuardUntilMs = EW + om.e), EW >= this.pressGuardUntilMs && this.handleButtons(WW, mW)) return;
        const PW = "hybrid" === Sm();
        if (PW && (WW => {
            const iW = Am();
            return iW !== Km && (Km = iW, Mm.lock()), Mm.update(WW, (0, xW.m)().moveDeadzone)
          })(WW.leftStick)) return LW = this.getHandoff(), sm = bm(LW), Um = Am(), void ZW.c.handOffHeldInput();
        var LW;
        this.handleDirections(WW, mW, EW, !PW), this.handleScroll(WW, mW)
      }
      findOpenDropdown(WW) {
        const iW = WW.root.querySelector(Gm);
        if (!iW || !(0, FW.p)(iW)) return null;
        let OW = this.dropdownLayers.get(iW);
        return OW || (this.dropdownLayerCounter++, OW = {
          id: `dropdown-${this.dropdownLayerCounter}`,
          kind: WW.layer.kind,
          getRoot: () => iW,
          close: () => {
            (0, qW.l)(iW)
          },
          memoryKey: null
        }, this.dropdownLayers.set(iW, OW)), {
          layer: OW,
          root: iW,
          order: WW.order
        }
      }
      focusPointedStop(WW) {
        const iW = (0, lW.e)(),
          OW = iW ? document.elementFromPoint(iW.x, iW.y) : null;
        if (!OW || !WW.contains(OW)) return;
        const mW = WE(OW, WW, this.getEnabledCandidates(WW));
        mW && this.setFocus(mW, {
          scroll: !1,
          byUser: !0
        })
      }
      enterLayer(WW, iW) {
        const OW = this.beginLayer(WW, iW),
          mW = ym();
        return mW && iE(mW, WW.root) ? (this.takeOver(WW.root, mW, this.enteredLayerAtMs), OW) : (this.restoreLayerFocus(WW.root, OW), OW)
      }
      beginLayer(WW, iW) {
        return this.layerKey = iW, this.layerRoot = WW.root, this.lastActivatedKey = null, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoreOnFocusLoss = !1, this.retryMove = null, this.pendingFocus = null, this.confirmPressedOn = null, this.lastRefocusCheckMs = -1 / 0, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.enteredLayerAtMs = performance.now(), this.lastFocusedCentre = null, this.memory.enter(iW)
      }
      restoreLayerFocus(WW, iW) {
        const OW = iW && this.layerKey ? this.findRemembered(WW, this.layerKey) : null;
        this.restoredFromMemory = null !== OW, this.setFocus(null !== OW && void 0 !== OW ? OW : this.pickInitial(WW, {
          waitForContent: !0
        }))
      }
      continueLayer(WW, iW) {
        this.layerKey = WW;
        const OW = this.memory.enter(WW);
        this.restoreOnFocusLoss = OW, this.movedInLayer && !OW && this.rememberFocus(iW)
      }
      resume(WW, iW) {
        var OW;
        const mW = ym();
        mW && iE(mW, WW) ? this.takeOver(WW, mW, iW) : null !== (OW = this.focused) && void 0 !== OW && OW.isConnected && Fm(null, this.focused, (0, qW.B)(this.focused))
      }
      pickPreferred(WW) {
        var iW;
        return null !== (iW = this.layerKey ? this.findRemembered(WW, this.layerKey) : null) && void 0 !== iW ? iW : this.pickInitial(WW, {
          waitForContent: !0
        })
      }
      findRemembered(WW, iW) {
        return this.memory.has(iW) ? this.memory.recall(iW, this.getEnabledCandidates(WW)) : null
      }
      getHandoff() {
        var WW, iW, OW;
        const mW = null !== (WW = this.focused) && void 0 !== WW && WW.isConnected ? this.focused : null,
          EW = null !== (iW = this.layerRoot) && void 0 !== iW && iW.isConnected ? this.layerRoot : null;
        return {
          point: mW ? (0, qW.B)(mW) : null !== (OW = this.lastFocusedCentre) && void 0 !== OW ? OW : this.getLayerStartPoint(EW),
          element: mW,
          direction: null
        }
      }
      getLayerStartPoint(WW) {
        if (!WW) return {
          x: window.innerWidth / 2,
          y: window.innerHeight / 2
        };
        const iW = this.pickInitial(WW, {
          includeDisabled: !0
        });
        return (0, qW.B)(null !== iW && void 0 !== iW ? iW : WW)
      }
      takeOver(WW, iW, OW) {
        const {
          element: mW,
          direction: EW,
          point: NW
        } = iW, PW = mW instanceof HTMLElement && (0, FW.t)(mW, WW) ? mW : null;
        if (!EW) {
          const iW = this.focused;
          return PW ? this.setFocus(PW, {
            scroll: !1,
            byUser: !0
          }) : this.focusNearest(WW, NW), void(this.focused && this.focused === iW && this.focused.isConnected && Fm(null, this.focused, (0, qW.B)(this.focused)))
        }
        if (this.dpadRepeats.get(EW).update(!0, OW), PW) return this.setFocus(PW, {
          scroll: !1,
          byUser: !0
        }), void this.move(WW, EW, OW, !0);
        const LW = this.getEnabledCandidates(WW),
          cW = LW.map(Qm),
          wW = KO(new DOMRect(NW.x, NW.y, 0, 0), cW, EW),
          tW = wW >= 0 ? wW : JO(NW, cW);
        this.setFocus(tW >= 0 ? LW[tW] : this.pickInitial(WW), {
          byUser: !0
        })
      }
      focusNearest(WW, iW) {
        const OW = this.getEnabledCandidates(WW),
          mW = JO(iW, OW.map(Qm));
        this.setFocus(mW >= 0 ? OW[mW] : this.pickInitial(WW), {
          byUser: !0
        })
      }
      pickDefault(WW) {
        let {
          includeDisabled: iW = !1,
          exclude: OW = null
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const mW = [...WW.querySelectorAll(Rm)].filter((mW => (null === OW || void 0 === OW || !OW.has(mW)) && (iW ? (0, FW.w)(mW, WW) : (0, FW.t)(mW, WW)))),
          EW = pm(mW.map(Dm));
        return EW >= 0 ? mW[EW] : null
      }
      pickNewAreaStart(WW, iW) {
        const OW = [...WW.querySelectorAll(rm)].filter(FW.p);
        for (const mW of [...(0, FW.g)(WW), ...OW]) {
          if (iW.has(mW)) continue;
          const WW = this.getEnabledCandidates(mW),
            OW = pm(WW.map(Dm));
          if (OW >= 0) return WW[OW]
        }
        return null
      }
      pickInitial(WW) {
        let {
          includeDisabled: iW = !1,
          waitForContent: OW = !1,
          enteredAtMs: mW = this.enteredLayerAtMs
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const EW = this.pickDefault(WW, {
          includeDisabled: iW
        });
        if (EW) return EW;
        const NW = WW => iW ? (0, FW.f)(WW) : this.getEnabledCandidates(WW);
        let PW = [];
        for (const xW of (0, FW.g)(WW))
          if (PW = NW(xW), PW.length > 0) break;
        if (0 === PW.length) {
          if (OW && performance.now() - mW < 1e4 && (0, FW.m)(WW)) return null;
          PW = NW(WW)
        }
        const LW = PW.map(Qm),
          cW = eW(null),
          wW = PW.filter(((WW, iW) => vW(LW[iW], cW))),
          tW = wW.length > 0 ? wW : PW,
          ZW = pm(tW.map(Dm));
        return ZW >= 0 ? tW[ZW] : null
      }
      validateFocus(WW, iW) {
        if (this.pendingFocus) {
          var OW, mW;
          const EW = this.pendingFocus.find();
          if (EW && (0, FW.t)(EW, WW.root)) return this.pendingFocus = null, void this.setFocus(EW, {
            byUser: !0
          });
          iW > this.pendingFocus.untilMs && (null === (OW = (mW = this.pendingFocus).holdWhile) || void 0 === OW || !OW.call(mW)) && (this.pendingFocus = null)
        }
        const EW = this.focused,
          NW = !!EW && (0, FW.t)(EW, WW.root);
        if (!(!NW && EW && EW === this.lastActivated && iW - this.lastActivatedAtMs < 5e3 && WW.root.contains(EW) && (0, FW.p)(EW) && (0, FW.u)(EW))) {
          if (!NW && this.restoreOnFocusLoss && this.layerKey) return this.restoreOnFocusLoss = !1, this.movedInLayer = !1, this.scrolledInLayer = !1, this.enteredLayerAtMs = iW, void this.restoreLayerFocus(WW.root, !0);
          if ((!NW || !this.movedInLayer && !this.scrolledInLayer) && !(iW - this.lastRefocusCheckMs < (NW ? 200 : 50)))
            if (this.lastRefocusCheckMs = iW, NW) {
              const OW = iW - this.enteredLayerAtMs < 15e3 ? this.pickPreferred(WW.root) : null,
                mW = null !== OW && void 0 !== OW ? OW : this.restoredFromMemory ? null : this.pickDefault(WW.root);
              mW && mW !== EW && this.setFocus(mW)
            } else {
              if (this.lastFocusedCentre && this.movedInLayer) {
                const iW = this.pendingFocus;
                return this.focusNearest(WW.root, this.lastFocusedCentre), void(this.pendingFocus = iW)
              }
              this.setFocus(this.pickPreferred(WW.root))
            }
        }
      }
      handleButtons(WW, iW) {
        if (WW.wasPressed((0, tW.h)("menuToggleCursor"))) return Ym(this.getHandoff()), !0;
        if (WW.wasPressed((0, tW.h)("menuBack"))) {
          const WW = (0, qW.l)(iW.root);
          return WW ? this.setFocus(WW, {
            byUser: !0
          }) : RO(this, iW.root) || ((0, qW.g)(iW.root) ? this.returnToOpener(iW.root) : this.backToStrip(iW.root) || lm()), !0
        }
        const OW = (0, tW.h)("menuConfirm");
        var mW, EW;
        WW.wasPressed(OW) && (this.confirmPressedOn = this.focused, this.confirmRepeatKey = null !== (mW = null === (EW = this.focused) || void 0 === EW ? void 0 : EW.getAttribute("data-pad-repeat")) && void 0 !== mW ? mW : null, this.confirmRepeated = WW.wokeDevice, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now()));
        if (WW.wasReleased(OW)) {
          const WW = this.confirmPressedOn;
          if (this.confirmPressedOn = null, WW && !this.confirmRepeated && WW === this.focused && WW.isConnected && !(0, FW.u)(WW)) {
            const OW = WW.matches("[data-pad-tab]") ? WW.closest(am) : null;
            OW ? this.enterTab(WW, OW, iW.root, performance.now()) : this.activate(WW)
          }
          return !0
        }
        return this.repeatConfirm(WW, OW), im(this, WW, iW)
      }
      repeatConfirm(WW, iW) {
        const OW = this.confirmPressedOn;
        OW && null !== this.confirmRepeatKey && WW.isHeld(iW) && (OW === this.focused && OW.isConnected && !(0, FW.u)(OW) && OW.getAttribute("data-pad-repeat") === this.confirmRepeatKey ? OW.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.confirmRepeated = !0, this.activate(OW)) : this.confirmRepeatKey = null)
      }
      backToStrip(WW) {
        const iW = this.focused;
        if (!(0, xW.m)().menuBackToCategories) return !1;
        const OW = null !== iW && void 0 !== iW && iW.isConnected ? this.tabStripNav.backToStrip(iW, this.getEnabledCandidates(WW), WW) : null;
        return OW && this.setFocus(OW, {
          byUser: !0
        }), null !== OW
      }
      returnToOpener(WW) {
        const iW = this.lastActivatedKey;
        iW && (this.lastActivatedKey = null, this.focusWhenFound((() => {
          var OW;
          return null !== (OW = this.getEnabledCandidates(WW).find((WW => (0, qW.D)(WW) === iW))) && void 0 !== OW ? OW : null
        })))
      }
      activate(WW) {
        var iW;
        if ((0, dm.b)(WW) || (0, qW.E)(WW)) return;
        this.lastActivatedKey = null !== (iW = (0, qW.D)(WW)) && void 0 !== iW ? iW : this.lastActivatedKey, this.lastActivated = WW, this.lastActivatedAtMs = performance.now(), this.rememberFocus(WW);
        const OW = this.layerRoot;
        if (OW) {
          const iW = new Set(OW.querySelectorAll(Rm)),
            mW = new Set(OW.querySelectorAll(`[data-pad-initial-area], ${rm}`)),
            EW = this.lastActivatedAtMs;
          this.focusWhenFound((() => {
            var EW;
            return (0, FW.t)(WW, OW) ? null : null !== (EW = this.pickDefault(OW, {
              exclude: iW
            })) && void 0 !== EW ? EW : this.pickNewAreaStart(OW, mW)
          }), 5e3, (() => WW.isConnected && (0, FW.u)(WW) && performance.now() - EW < 6e4))
        }(0, qW.c)(WW), (0, qW.j)(WW)
      }
      handleDirections(WW, iW, OW, mW) {
        const EW = dO(iW.layer.kind) ? (0, tW.h)("chat") : null;
        for (const LW of AW.A) {
          this.dpadRepeats.get(LW).update(WW.isHeld(LW), OW) && (LW !== EW || WW.wasPressed(LW)) && this.move(iW.root, LW, OW, !0)
        }
        const NW = mW ? (0, AW.l)(WW.leftStick, (0, xW.m)().moveDeadzone) : {
            x: 0,
            y: 0
          },
          PW = this.stickRepeat.update((0, AW.ab)(NW), OW);
        if (PW && this.move(iW.root, PW, OW, !0), this.retryMove && OW >= this.retryMove.atMs) {
          const {
            direction: WW
          } = this.retryMove;
          this.retryMove = null, this.move(iW.root, WW, OW, !1)
        }
      }
      move(WW, iW, OW, mW) {
        var EW;
        let NW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.pendingFocus && this.pendingFocus === (null === (EW = this.tabOpenWait) || void 0 === EW ? void 0 : EW.wait) && iW === this.tabOpenWait.direction) return;
        this.pendingFocus = null;
        const PW = this.focused;
        if (!PW || !PW.isConnected) {
          const iW = this.pickInitial(WW);
          return void(iW && this.setFocus(iW, {
            byUser: !0
          }))
        }
        const LW = "Left" === iW || "Right" === iW,
          cW = LW ? (0, dm.b)(PW) : null;
        if (cW) return void cW.adjust("Left" === iW ? -1 : 1);
        const wW = WW => null !== WW.closest("[data-pad-friends-column]"),
          tW = wW(PW),
          ZW = Qm(PW),
          xW = LW || PW.closest(am) ? null : (WW => {
            const iW = new Map;
            return OW => {
              const mW = OW.closest(am);
              if (!mW) return !1;
              let EW = iW.get(mW);
              if (void 0 === EW) {
                const OW = Qm(mW);
                EW = MO(WW, OW) && (OW.right <= WW.left || OW.left >= WW.right), iW.set(mW, EW)
              }
              return EW
            }
          })(ZW),
          lW = null !== PW.closest(Im),
          AW = this.getEnabledCandidates(WW).filter((WW => WW !== PW && (LW || wW(WW) === tW) && !(null !== xW && void 0 !== xW && xW(WW)) && (lW || !WW.closest(Im)))),
          bW = AW.map(Qm),
          jW = hW(PW, "y", WW),
          UW = eW(jW);
        if (!NW && !vW(ZW, UW)) {
          const WW = AW.filter(((WW, iW) => vW(bW[iW], UW)));
          if (WW.length > 0) {
            const iW = {
              x: UW.left + UW.width / 2,
              y: UW.top + UW.height / 2
            };
            return void this.setFocus(WW[JO(iW, WW.map(Qm))], {
              byUser: !0
            })
          }
        }
        const kW = LW ? ((WW, iW, OW) => {
            const mW = Qm(WW),
              EW = WW.closest(am),
              NW = EW ? Qm(EW) : null;
            return iW.map(((iW, PW) => {
              const LW = OW[PW];
              if (LW.bottom > mW.top && LW.top < mW.bottom) return !0;
              const cW = iW.closest(am);
              if (EW && NW) return cW !== EW && (null !== cW || LW.bottom <= NW.top || LW.top >= NW.bottom);
              if (cW) return !MO(mW, Qm(cW));
              let wW = WW;
              for (let OW = WW.parentElement; OW && !OW.contains(iW); OW = OW.parentElement) wW = OW;
              const tW = Qm(wW);
              return LW.right > tW.left && LW.left < tW.right
            }))
          })(PW, AW, bW) : void 0,
          sW = LW && !PW.closest(am) ? (WW => WW.map((WW => !WW.closest(gm))))(AW) : void 0,
          MW = ((WW, iW) => {
            const OW = [];
            for (let EW = WW; EW; EW = EW.parentElement) OW.push(EW);
            const mW = new Map;
            return OW.forEach(((WW, iW) => {
              mW.set(WW, OW.length - 1 - iW)
            })), iW.map((WW => {
              for (let iW = WW; iW; iW = iW.parentElement) {
                const WW = mW.get(iW);
                if (void 0 !== WW) return WW
              }
              return -1
            }))
          })(PW, AW),
          KW = LW ? "x" : "y",
          SW = hW(PW, KW, WW);
        let YW = KO(ZW, bW, iW, MW, kW, sW);
        if (YW >= 0 && SW && !SW.contains(AW[YW])) {
          const WW = AW.flatMap(((WW, iW) => SW.contains(WW) ? [iW] : [])),
            OW = iW => iW && WW.map((WW => iW[WW])),
            mW = KO(ZW, WW.map((WW => bW[WW])), iW, WW.map((WW => MW[WW])), OW(kW), OW(sW));
          YW = mW >= 0 ? WW[mW] : YW
        }
        if (YW >= 0) return void this.moveTo(PW, AW[YW], AW, WW, iW, NW);
        if (!mW) return;
        const yW = "Right" === iW || "Down" === iW ? 1 : -1;
        if (SW && oW(SW, KW, yW)) {
          const WW = "y" === KW ? SW.clientHeight : SW.clientWidth;
          dW(SW, KW, yW * WW * .5), this.retryMove = {
            direction: iW,
            atMs: OW + 80
          }
        }
      }
      moveTo(WW, iW, OW, mW, EW, NW) {
        const PW = this.tabStripNav.findTabContent(WW, iW, OW);
        PW && "true" !== WW.dataset.padSelected ? this.openTab(WW, PW, mW, EW) : NW && !PW || this.setFocus(this.tabStripNav.redirect(WW, iW, OW, mW), {
          byUser: !0
        })
      }
      openTab(WW, iW, OW, mW) {
        const EW = iW.parentElement;
        (0, qW.c)(WW), this.focusWhenFound((() => "true" !== WW.dataset.padSelected ? null : iW.isConnected ? this.tabStripNav.pickContentStart(iW, this.getEnabledCandidates(OW), OW) : EW ? this.tabStripNav.pickReplacedContentStart(WW, EW, this.getEnabledCandidates(OW), OW) : null), 3e3), this.tabOpenWait = {
          wait: this.pendingFocus,
          direction: mW
        }
      }
      enterTab(WW, iW, OW, mW) {
        this.move(OW, (WW => {
          const iW = [...WW.querySelectorAll(Cm)].filter((iW => iW.closest(fm) === WW));
          if (iW.length >= 2) {
            const WW = iW[0].getBoundingClientRect(),
              OW = iW[1].getBoundingClientRect();
            return Math.abs(OW.top - WW.top) > Math.abs(OW.left - WW.left) ? "Right" : "Down"
          }
          const OW = WW.getBoundingClientRect();
          return OW.height > OW.width ? "Right" : "Down"
        })(iW), mW, !1, !0), this.focused !== WW || this.pendingFocus || this.activate(WW)
      }
      handleScroll(WW, iW) {
        const OW = (0, AW.l)(WW.rightStick, .2);
        if (0 === OW.x && 0 === OW.y) return void(this.scrollRemainder = {
          x: 0,
          y: 0
        });
        const mW = WW.dtMs / 1e3;
        for (const NW of ["x", "y"]) {
          var EW;
          const WW = OW[NW];
          if (0 === WW) continue;
          const PW = null !== (EW = hW(this.focused, NW, iW.root)) && void 0 !== EW ? EW : nW(iW.root, NW);
          if (!PW) continue;
          const LW = Math.sign(WW) * WW * WW * 1500 * mW + this.scrollRemainder[NW],
            cW = Math.trunc(LW);
          this.scrollRemainder[NW] = LW - cW, 0 !== cW && (dW(PW, NW, cW), this.scrolledInLayer = !0)
        }
      }
    };
    var mE = OW(9421);
    var EE = OW(9963);
    const NE = {
        duration: 80,
        strongMagnitude: .2,
        weakMagnitude: .2,
        needsPadInUse: !1
      },
      PE = {
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
          ...NE,
          minIntervalMs: 1e3
        },
        preview: {
          ...NE,
          minIntervalMs: 0
        }
      };
    const LE = new class {
        constructor(WW) {
          this.deps = WW, this.lastPlayedMs = {}, this.loggedFailure = !1, this.logFailure = WW => {
            this.loggedFailure || (this.loggedFailure = !0, console.warn("Controller vibration failed; further failures are not logged.", WW))
          }
        }
        play(WW, iW) {
          const OW = PE[WW];
          if (!this.deps.isVibrationOn() || OW.needsPadInUse && !this.deps.isPadInUse()) return !1;
          const mW = this.lastPlayedMs[WW];
          if (void 0 !== mW && iW - mW < OW.minIntervalMs) return !1;
          const EW = this.deps.getActuator();
          if (!EW) return !1;
          this.lastPlayedMs[WW] = iW;
          const {
            duration: NW,
            strongMagnitude: PW,
            weakMagnitude: LW
          } = OW;
          try {
            EW.playEffect("dual-rumble", {
              duration: NW,
              strongMagnitude: PW,
              weakMagnitude: LW
            }).catch(this.logFailure)
          } catch (cW) {
            this.logFailure(cW)
          }
          return !0
        }
      }({
        getActuator: () => (WW => {
          const iW = null === WW || void 0 === WW ? void 0 : WW.vibrationActuator;
          return "function" === typeof(null === iW || void 0 === iW ? void 0 : iW.playEffect) ? iW : null
        })(PW.d.getActiveGamepad()),
        isVibrationOn: () => (0, xW.m)().vibration,
        isPadInUse: lW.l
      }),
      cE = WW => {
        LE.play(WW, performance.now())
      };
    var wE = OW(9425),
      tE = OW(3960),
      ZE = OW(117),
      xE = OW(39),
      lE = OW(683);
    class AE {
      constructor(WW) {
        this.deps = WW
      }
      check() {
        let WW = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const iW = this.deps.isPadActive() ? this.deps.getPadFamily() : null;
        if (!iW) return "skipped";
        const OW = WW ? this.deps.getVisitId() : this.deps.peekVisitId();
        return null === OW || this.deps.readReportedVisitId() === OW ? "skipped" : this.deps.canReport() ? (this.deps.writeReportedVisitId(OW), this.deps.wZ(iW, this.deps.getInputType()), "reported") : "notReady"
      }
    }
    const bE = "controllerUsageReportedVisit";
    var jE = OW(1422),
      UE = OW(1856),
      kE = OW(671),
      sE = OW(1526),
      ME = OW(1244);
    const KE = WW => ({
        translationKey: `controller:${WW}`
      }),
      SE = {
        A: "A",
        B: "B",
        X: "X",
        Y: "Y",
        LB: "LB",
        RB: "RB",
        LT: "LT",
        RT: "RT",
        View: KE("padButtonView"),
        Menu: KE("padButtonMenu"),
        LS: "L3",
        RS: "R3",
        Up: KE("padButtonDpadUp"),
        Down: KE("padButtonDpadDown"),
        Left: KE("padButtonDpadLeft"),
        Right: KE("padButtonDpadRight"),
        Home: KE("padButtonHome"),
        LeftStick: KE("padButtonLeftStick"),
        RightStick: KE("padButtonRightStick")
      },
      YE = {
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
          View: KE("padButtonCreate"),
          Menu: KE("padButtonOptions")
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
      yE = (WW, iW) => {
        var OW;
        const mW = null !== (OW = YE[WW][iW]) && void 0 !== OW ? OW : SE[iW];
        return "string" === typeof mW ? mW : (0, EW.u)(ME.e.get().getCurrentLanguageCode(), mW.translationKey)
      },
      TE = WW => {
        let {
          glyph: iW,
          family: OW,
          className: mW
        } = WW;
        const EW = (0, lW.D)(),
          NW = null !== OW && void 0 !== OW ? OW : EW,
          PW = (0, wE.d)(NW, iW);
        return (0, pW.jsx)("span", {
          className: VW()("ControllerGlyph", mW),
          role: "img",
          "aria-label": yE(NW, iW),
          style: {
            "--pad-glyph-mask": `url(${PW})`,
            "--pad-glyph-aspect": (0, wE.c)(NW, iW)
          }
        })
      };
    var JE = OW(2021);
    const hE = WW => {
      let {
        action: iW
      } = WW;
      const {
        t: OW
      } = (0, EW.B)();
      switch (iW.kind) {
        case "reload":
          return (0, pW.jsx)("span", {
            children: OW("controller:gameplayReload")
          });
        case "specialAction":
          return null;
        case "customButton":
          return (0, pW.jsx)(JE.d, {
            text: iW.description ? [{
              icon: iW.icon
            }, ` ${iW.description}`] : [{
              icon: iW.icon
            }]
          });
        case "touchButton":
          return (0, pW.jsx)(JE.d, {
            text: iW.label
          })
      }
    };
    var HE = OW(9966);
    const nE = WW => {
      let {
        hold: iW
      } = WW;
      return (0, pW.jsx)("div", {
        className: "DropStackFillTrack",
        style: {
          "--pad-drop-stack-hold": `${iW.holdMs}ms`
        },
        children: (0, pW.jsx)("div", {
          className: "DropStackFillBar"
        })
      }, iW.id)
    };
    var uE = OW(9980),
      oE = OW(9986),
      dE = OW(9988),
      eE = OW(9976);
    const vE = () => {
        const {
          gameState: WW
        } = (0, cW.p)(["gameState"]), iW = (0, lW.B)(), [mW, EW] = (0, gW.useState)(!1), [NW, PW] = (0, gW.useState)(!1);
        return (0, gW.useEffect)((() => {
          "inGame" === WW && EW(!0)
        }), [WW]), (0, gW.useEffect)((() => {
          if (!mW) return;
          let WW = null,
            iW = !1;
          return (kE.K ? Promise.all([OW.e(85), OW.e(105), OW.e(306), OW.e(127), OW.e(256), OW.e(254), OW.e(104)]).then((() => OW(42056))).then((WW => WW.startWasmPadGameplay)) : Promise.all([OW.e(85), OW.e(264), OW.e(263), OW.e(113), OW.e(89), OW.e(86), OW.e(87), OW.e(88), OW.e(213), OW.e(260), OW.e(91), OW.e(105), OW.e(252), OW.e(266), OW.e(112), OW.e(124), OW.e(257), OW.e(142), OW.e(240), OW.e(102), OW.e(90), OW.e(250), OW.e(185), OW.e(256), OW.e(123)]).then((() => OW(42192))).then((WW => WW.startPadGameplay))).then((OW => {
            iW || (WW = OW())
          })).catch((WW => {
            console.error("Pad gameplay failed to load", WW), iW || PW(!0)
          })), () => {
            var OW;
            iW = !0, null === (OW = WW) || void 0 === OW || OW()
          }
        }), [mW]), (0, gW.useEffect)((() => {
          NW && iW && (PW(!1), jE.NotificationProvider.showPromptPopup({
            title: "controller:gameplayLoadFailedTitle",
            subtitle: "controller:gameplayLoadFailedSubtitle",
            confirmText: "settingsMenu:reloadPagePopupConfirm",
            confirmTooltip: "",
            cancelText: "general:cancel",
            cancelTooltip: ""
          }).getResult().then((WW => {
            !0 === WW && (0, UE.reloadBloxd)()
          })))
        }), [NW, iW]), (0, pW.jsxs)(pW.Fragment, {
          children: [(0, pW.jsx)(gE, {}), (0, pW.jsx)(DE, {}), (0, pW.jsx)(VE, {})]
        })
      },
      gE = () => {
        const {
          t: WW
        } = (0, EW.B)(), iW = (0, lW.B)(), {
          gameState: OW,
          isUiHidden: mW
        } = (0, cW.p)(["gameState", "isUiHidden"]), {
          hideButtonHints: NW
        } = (0, xW.s)(), PW = (0, HE.f)(), LW = (0, HE.g)(), [wW, ZW] = (0, gW.useState)(dE.c);
        return (0, sE.e)(eE.n, ZW), !iW || NW || mW || "inGame" !== OW || !PW && !wW ? null : (0, pW.jsxs)("div", {
          className: "PadActionHint SmallTextBold",
          children: [PW && (0, pW.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, pW.jsx)(TE, {
              glyph: (0, tW.h)("actionButton")
            }), (0, pW.jsx)(hE, {
              action: PW
            }), LW && (0, pW.jsx)("span", {
              className: "PadActionHintMore",
              children: WW("controller:gameplayActionWheelHint")
            })]
          }), wW && (0, pW.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, pW.jsx)(TE, {
              glyph: (0, tW.h)("pickBlock")
            }), (0, pW.jsx)("span", {
              children: WW("controller:gameplayPickBlock")
            })]
          })]
        })
      },
      DE = () => {
        const {
          t: WW
        } = (0, EW.B)(), iW = (0, lW.B)(), {
          gameState: OW,
          isUiHidden: mW
        } = (0, cW.p)(["gameState", "isUiHidden"]), [NW, PW] = (0, gW.useState)(uE.c);
        return (0, sE.e)(eE.m, PW), iW && !mW && "inGame" === OW && NW ? (0, pW.jsxs)("div", {
          className: "PadDropStackFill SmallTextBold",
          children: [(0, pW.jsx)("span", {
            children: WW("controller:gameplayDropStack")
          }), (0, pW.jsx)(nE, {
            hold: NW
          })]
        }) : null
      },
      VE = () => {
        const {
          t: WW
        } = (0, EW.B)(), iW = (0, lW.B)(), {
          gameState: OW,
          isUiHidden: mW
        } = (0, cW.p)(["gameState", "isUiHidden"]), {
          hideButtonHints: NW
        } = (0, xW.s)(), [PW, LW] = (0, gW.useState)(oE.c);
        return (0, sE.e)(eE.j, LW), iW && !mW && "inGame" === OW && PW ? (0, pW.jsxs)("div", {
          className: "PadAttackLatchedHint SmallTextBold",
          children: [!NW && (0, pW.jsx)(TE, {
            glyph: (0, tW.h)("attack")
          }), (0, pW.jsx)("span", {
            children: WW("controller:gameplayAttackLatched")
          })]
        }) : null
      };
    var pE = OW(9997),
      fE = OW(2061),
      CE = OW(3332),
      XE = OW(9407);
    const BE = WW => WW && !(0, pE.b)(fE.d.get("shopInfo")),
      qE = () => {
        const WW = "inGame" === (0, cW.p)(["gameState"]).gameState;
        return (0, CE.d)("shopInfo", (() => {
          (0, XE.g)(BE(WW))
        })), (0, gW.useEffect)((() => {
          (0, XE.g)(BE(WW))
        }), [WW]), null
      },
      RE = () => {
        const {
          t: WW
        } = (0, EW.B)(), {
          hideButtonHints: iW
        } = (0, xW.s)();
        (0, lW.D)();
        const OW = (0, fi.h)();
        return (0, gW.useEffect)((() => (() => {
          const WW = ZW.c.register({
              name: "inventory",
              isActive: PO.isActive,
              onFrame: PO.onFrame,
              onDeactivate: PO.onDeactivate,
              wakePressActs: PO.wakePressActs
            }),
            iW = WW => {
              PO.noteRealPointer(WW), PO.shouldBlockRealPointer(WW) && WW.stopPropagation()
            };
          for (const PW of LO) window.addEventListener(PW, iW, !0);
          const OW = (0, zW.i)((() => {
              "inventory" !== ZW.c.getActiveConsumerName() && PO.forgetSurface()
            })),
            mW = WW => {
              const iW = WW.target;
              (0, lW.l)() && (0, IW.i)(iW) && iW.closest(Ki) && (0, zW.h)() && (0, zW.p)(iW)
            };
          document.addEventListener("focusout", mW, !0);
          const {
            invalidate: EW,
            onScroll: NW
          } = PO.targets;
          return document.addEventListener("scroll", NW, !0), window.addEventListener("resize", EW), () => {
            WW(), OW();
            for (const WW of LO) window.removeEventListener(WW, iW, !0);
            document.removeEventListener("scroll", NW, !0), document.removeEventListener("focusout", mW, !0), window.removeEventListener("resize", EW), PO.targets.disconnect()
          }
        })()), []), (0, pW.jsxs)(pW.Fragment, {
          children: [(0, pW.jsx)(BW, {
            placer: PO.ring,
            className: "InventorySlotCursorRing"
          }), OW.showing && !iW && (0, pW.jsx)("div", {
            className: "InventorySlotCursorHints SmallTextBold",
            children: rW(OW).map((iW => {
              let {
                actions: mW,
                labelKey: EW
              } = iW;
              return (0, pW.jsxs)("div", {
                className: "InventorySlotCursorHint",
                children: [mW.map((WW => (0, pW.jsx)(TE, {
                  glyph: (0, tW.h)(WW)
                }, WW))), (0, pW.jsx)("span", {
                  children: WW(`controller:${EW}`)
                }), "inventoryDrop" === EW && OW.dropStackHold && (0, pW.jsx)(nE, {
                  hold: OW.dropStackHold
                })]
              }, EW)
            }))
          })]
        })
      },
      GE = [{
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
      IE = WW => Array.from(WW).map((WW => ({
        type: "char",
        char: WW,
        width: 1
      }))),
      aE = function(WW) {
        return {
          type: "command",
          command: WW,
          width: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
        }
      },
      rE = [aE("page", 2), aE("otherPage"), aE("caretLeft"), aE("space", 3), aE("caretRight"), aE("close", 1.5), aE("submit", 1.5)],
      zE = [aE("page", 2), aE("otherPage"), aE("caretLeft"), aE("space", 2), aE("caretRight"), aE("newline"), aE("close", 1.5), aE("submit", 1.5)],
      FE = [
        [...IE("1234567890"), aE("backspace")], IE("qwertyuiop/"), IE("asdfghjkl'?"), [aE("shift", 2), ...IE("zxcvbnm,.")]
      ],
      QE = [
        [...IE("1234567890"), aE("backspace")], IE("!@#$%^&*()/"), IE('-_=+[]{};:"'), IE("~`|\\<>'\u20ac\xa3,.")
      ],
      WN = {
        letters: FE,
        accents: [
          [...IE("1234567890"), aE("backspace")], IE("\xe1\xe9\xed\xf3\xfa\xe0\xe8\xec\xf2\xf9\xf1"), IE("\xe2\xea\xee\xf4\xfb\xe4\xeb\xef\xf6\xfc\xe7"), [aE("shift", 2), ...IE("\xe3\xf5\xdf\u0153\u011f\u015f\u0131\xbf\xa1")]
        ],
        symbols: QE
      },
      iN = new Set(["de", "es", "fr", "it", "nl", "pt", "pt-BR", "tr", "vi"]),
      ON = (WW, iW) => "letters" === WW ? iW ? {
        page: "accents",
        otherPage: "symbols"
      } : {
        page: "symbols",
        otherPage: "accents"
      } : {
        page: "letters",
        otherPage: "accents" === WW ? "symbols" : "accents"
      },
      mN = function(WW, iW) {
        const OW = ((WW, iW) => [...WN[WW], iW ? zE : rE])(WW, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]);
        if (0 === iW) return OW;
        const mW = Math.min(2, EN(OW[0]) / iW);
        return [Array.from({
          length: iW
        }, ((WW, iW) => ({
          type: "phrase",
          phraseIndex: iW,
          width: mW
        }))), ...OW]
      },
      EN = WW => WW.reduce(((WW, iW) => WW + iW.width), 0),
      NN = WW => Math.max(...WW.map(EN)),
      PN = (WW, iW) => {
        const OW = WW[iW.row];
        let mW = (NN(WW) - EN(OW)) / 2;
        for (let EW = 0; EW < iW.col; EW++) mW += OW[EW].width;
        return mW + OW[iW.col].width / 2
      },
      LN = (WW, iW, OW) => {
        let mW = 0,
          EW = 1 / 0;
        for (let NW = 0; NW < WW[iW].length; NW++) {
          const PW = Math.abs(PN(WW, {
            row: iW,
            col: NW
          }) - OW);
          PW < EW - 1e-9 && (mW = NW, EW = PW)
        }
        return mW
      },
      cN = (WW, iW) => {
        const OW = Math.max(0, Math.min(WW.length - 1, iW.row));
        return {
          row: OW,
          col: Math.max(0, Math.min(WW[OW].length - 1, iW.col))
        }
      },
      wN = (WW, iW, OW) => "once" === WW && iW - OW <= 400 ? "caps" : "off" === WW ? "once" : "off",
      tN = (WW, iW) => "once" === WW && (WW => WW.toLowerCase() !== WW.toUpperCase())(iW) ? "off" : WW,
      ZN = (WW, iW, OW) => {
        if ("symbols" === iW || "off" === OW) return WW;
        const mW = WW.toUpperCase();
        return 1 === mW.length ? mW : WW
      };
    var xN = OW(9899),
      lN = OW(10011);
    const AN = {
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
      bN = ["kt", "nameTag"],
      jN = WW => {
        const iW = WW.target instanceof HTMLTextAreaElement && !bN.includes(WW.kind);
        return mN(WW.page, "chat" === WW.kind ? lN.f.length : 0, iW)
      },
      UN = WW => {
        const iW = WW.getBoundingClientRect(),
          OW = window.innerHeight,
          mW = iW.top + iW.height / 2 < OW / 2 ? "bottom" : "top",
          EW = "bottom" === mW ? OW - iW.bottom - 6 : iW.top - 6;
        return {
          placement: mW,
          maxHeightPx: Math.min(.46 * OW, Math.max(.3 * OW, EW))
        }
      },
      kN = WW => {
        (0, nO.g)(WW) ? (0, nO.b)().close(): (OE.noteChosenStop(WW), WW.blur())
      };
    class sN {
      constructor(WW) {
        this.host = WW, this.lastShiftPressMs = -1 / 0, this.phraseTexts = [], this.phrasesFill = !1
      }
      setPhraseRow(WW, iW) {
        this.phraseTexts = WW, this.phrasesFill = iW
      }
      pressKey(WW) {
        const iW = this.host.getState(),
          OW = jN(iW),
          mW = OW[WW.row][WW.col];
        this.host.setState({
          ...iW,
          focus: WW,
          preferredX: PN(OW, WW)
        }), "char" === mW.type ? this.typeChar(mW.char) : "command" === mW.type ? this.runCommand(mW.command) : this.sendPhrase(mW.phraseIndex)
      }
      runCommand(WW) {
        const iW = this.host.getState();
        switch (WW) {
          case "backspace":
            (0, IW.d)(iW.target);
            break;
          case "space":
            (0, IW.g)(iW.target, " ");
            break;
          case "newline":
            (0, IW.g)(iW.target, "\n");
            break;
          case "caretLeft":
            (0, IW.m)(iW.target, -1);
            break;
          case "caretRight":
            (0, IW.m)(iW.target, 1);
            break;
          case "shift": {
            const WW = performance.now();
            this.host.setState({
              ...iW,
              shift: wN(iW.shift, WW, this.lastShiftPressMs)
            }), this.lastShiftPressMs = WW;
            break
          }
          case "page":
          case "otherPage": {
            const OW = ON(iW.page, iW.accentsFirst)[WW];
            this.host.setState({
              ...iW,
              page: OW,
              focus: cN(jN({
                ...iW,
                page: OW
              }), iW.focus)
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
            (0, nO.g)(iW.target) && (0, nO.b)().selectNextChannel()
        }
      }
      submit() {
        var WW, iW;
        const {
          target: OW
        } = this.host.getState();
        this.host.hide(), (0, nO.g)(OW) ? (0, nO.b)().submit() : (OE.noteChosenStop(OW), null === (WW = (iW = (0, nO.e)(OW)).submit) || void 0 === WW || WW.call(iW), document.activeElement === OW && OW.blur())
      }
      close() {
        const {
          target: WW
        } = this.host.getState();
        this.host.hide(), kN(WW)
      }
      typeChar(WW) {
        const {
          target: iW,
          page: OW,
          shift: mW
        } = this.host.getState();
        (0, IW.g)(iW, ZN(WW, OW, mW)), this.host.setState({
          ...this.host.getState(),
          shift: tN(mW, WW)
        })
      }
      sendPhrase(WW) {
        if (this.phrasesFill) {
          const {
            target: iW
          } = this.host.getState(), OW = this.phraseTexts[WW];
          OW && (iW.setSelectionRange(0, iW.value.length), (0, IW.g)(iW, OW))
        } else lN.g.claim(performance.now()) && (this.host.hide(), (0, nO.b)().sendLine(this.phraseTexts[WW]))
      }
    }
    var MN = OW(9913);
    const KN = {
        initialDelayMs: 380,
        intervalMs: 85
      },
      SN = {
        initialDelayMs: 400,
        intervalMs: 55
      };
    class YN {
      constructor(WW, iW) {
        this.host = WW, this.editor = iW, this.lastDirection = null, this.navRepeat = new AW.b((0, bW.c)(KN)), this.commandRepeats = new Map(GE.filter((WW => {
          let {
            repeats: iW
          } = WW;
          return iW
        })).map((WW => {
          let {
            command: iW
          } = WW;
          return [iW, (0, bW.c)(SN)]
        })))
      }
      reset() {
        this.navRepeat.reset();
        for (const WW of this.commandRepeats.values()) WW.reset()
      }
      onVisibleFrame(WW) {
        const iW = performance.now();
        for (const {
            command: EW,
            action: NW
          }
          of GE) {
          const OW = (0, tW.h)(NW),
            mW = this.commandRepeats.get(EW);
          if ((mW ? mW.update(WW.isHeld(OW), iW) : WW.wasPressed(OW)) && (this.editor.runCommand(EW), !this.host.getState().visible)) return
        }
        if (WW.wasPressed((0, tW.h)("keyboardType")) && (this.editor.pressKey(this.host.getState().focus), !this.host.getState().visible)) return;
        const OW = this.readNavDirection(WW);
        this.lastDirection = OW;
        const mW = this.navRepeat.update(OW, iW);
        mW && this.navigate(mW)
      }
      onHiddenFrame(WW, iW) {
        var OW;
        if (WW.wasPressed((0, tW.h)("keyboardClose"))) return void kN(iW);
        const mW = (0, tW.h)("keyboardType");
        if (WW.wasPressed(mW)) return ZW.c.consumeButton(mW), void this.host.open(iW);
        const EW = this.readNavDirection(WW),
          NW = null !== EW && EW !== this.lastDirection;
        if (this.lastDirection = EW, !NW || (0, nO.g)(iW)) return;
        const PW = (null === (OW = xm()) || void 0 === OW ? void 0 : OW.root.contains(iW)) || null !== iW.closest(".EntireInventoryWrapper");
        kN(iW), PW && ZW.c.handOffHeldInput()
      }
      navigate(WW) {
        const iW = this.host.getState();
        if ("Up" === WW && 0 === iW.focus.row && "chat" === iW.kind) return (0, nO.b)().stepHistory(), void this.host.setState({
          ...iW
        });
        const OW = ((WW, iW, OW, mW) => {
          if ("Left" === OW || "Right" === OW) {
            const mW = WW[iW.row].length,
              EW = (iW.col + ("Right" === OW ? 1 : -1) + mW) % mW,
              NW = {
                row: iW.row,
                col: EW
              };
            return {
              pos: NW,
              preferredX: PN(WW, NW)
            }
          }
          const EW = (iW.row + ("Down" === OW ? 1 : -1) + WW.length) % WW.length;
          return {
            pos: {
              row: EW,
              col: LN(WW, EW, mW)
            },
            preferredX: mW
          }
        })(jN(iW), iW.focus, WW, iW.preferredX);
        this.host.setState({
          ...iW,
          focus: OW.pos,
          preferredX: OW.preferredX
        })
      }
      readNavDirection(WW) {
        for (const iW of AW.A)
          if (WW.isHeld(iW)) return iW;
        return (0, AW.ab)((0, AW.l)(WW.leftStick, (0, xW.m)().moveDeadzone))
      }
    }
    const yN = ["Up", "Down", "Left", "Right"],
      TN = new Set(["CapsLock", "Control", "Fn", "FnLock", "Hyper", "NumLock", "ScrollLock", "Shift", "Super"]);
    const JN = new class {
      constructor() {
        this.state = AN, this.listeners = new Set, this.ownedField = null, this.pendingChatInput = null, this.pendingChatTimeout = 0, this.savedInputMode = null, this.editor = new sN(this), this.padInput = new YN(this, this.editor)
      }
      getState() {
        return this.state
      }
      setState(WW) {
        const iW = WW.visible !== this.state.visible;
        this.state = WW;
        for (const OW of this.listeners) OW();
        iW && wW.l.iZ(MN.c, WW.visible)
      }
      subscribe(WW) {
        return this.listeners.add(WW), () => {
          this.listeners.delete(WW)
        }
      }
      install() {
        const WW = ZW.c.register({
            name: "keyboard",
            isActive: () => this.state.visible || (0, IW.i)(document.activeElement),
            onFrame: WW => {
              this.onFrame(WW)
            },
            onDeactivate: () => {
              this.padInput.reset()
            },
            wakePressActs: WW => yN.includes(WW) || !this.state.visible && WW === (0, tW.h)("keyboardType")
          }),
          iW = WW => {
            const iW = WW.target;
            (0, IW.i)(iW) && (iW === this.pendingChatInput || (0, lW.l)() ? this.open(iW) : this.state.visible && iW !== this.state.target && (this.ownedField = null, this.hide()))
          },
          OW = () => {
            setTimeout((() => {
              this.releaseLostField()
            }), 0)
          },
          mW = WW => {
            WW.isTrusted && this.state.visible && (WW => !WW.repeat && !TN.has(WW.key) && !(0, xN.e)(WW.key) && !/^(Audio|Media|Browser|Launch|Gamepad)/.test(WW.key))(WW) && this.hide()
          },
          EW = () => {
            this.state.visible && this.setState({
              ...this.state,
              ...UN(this.state.target)
            })
          };
        document.addEventListener("focusin", iW, !0), document.addEventListener("focusout", OW, !0), window.addEventListener("keydown", mW, !0), window.addEventListener("resize", EW);
        const NW = wW.l.subscribe(eE.e, (() => {
            this.openChat()
          })),
          PW = wW.l.subscribe(MN.e, (WW => {
            this.openForField(WW)
          }));
        return () => {
          WW(), document.removeEventListener("focusin", iW, !0), document.removeEventListener("focusout", OW, !0), window.removeEventListener("keydown", mW, !0), window.removeEventListener("resize", EW), wW.l.unsubscribe(NW), wW.l.unsubscribe(PW), this.clearPendingChat(), this.hide(), this.ownedField = null
        }
      }
      openChat() {
        const WW = (0, nO.b)();
        WW ? document.activeElement !== WW.input ? (this.clearPendingChat(), this.pendingChatInput = WW.input, this.pendingChatTimeout = window.setTimeout((() => {
          this.pendingChatInput = null
        }), 250), WW.open()) : this.open(WW.input) : console.warn("controllerOpenChat with no chat mounted")
      }
      openForField(WW) {
        (0, IW.i)(WW) ? (document.activeElement !== WW && WW.focus(), document.activeElement === WW && this.open(WW)) : console.warn("controllerOpenKeyboard needs an editable input or textarea", WW)
      }
      open(WW) {
        var iW;
        if (this.clearPendingChat(), this.ownedField = WW, this.state.visible && this.state.target === WW) return;
        this.restoreInputMode(), (0, IW.n)(WW), this.savedInputMode = WW.getAttribute("inputmode"), WW.setAttribute("inputmode", "none");
        const OW = {
          ...AN,
          visible: !0,
          target: WW,
          kind: (0, nO.g)(WW) ? "chat" : null !== (iW = (0, nO.e)(WW).kind) && void 0 !== iW ? iW : null,
          accentsFirst: (mW = ME.e.get().getCurrentLanguageCode(), iN.has(mW)),
          ...UN(WW)
        };
        var mW;
        const EW = jN(OW),
          NW = ((WW, iW) => {
            for (let OW = 0; OW < WW.length; OW++) {
              const mW = WW[OW].findIndex((WW => "char" === WW.type && WW.char === iW));
              if (-1 !== mW) return {
                row: OW,
                col: mW
              }
            }
            return null
          })(EW, "q");
        this.padInput.reset(), this.setState({
          ...OW,
          focus: NW,
          preferredX: PN(EW, NW)
        })
      }
      hide() {
        this.state.visible && (this.restoreInputMode(), this.padInput.reset(), this.setState(AN))
      }
      onFrame(WW) {
        if (this.releaseLostField()) return;
        const iW = document.activeElement;
        this.state.visible ? this.padInput.onVisibleFrame(WW) : (0, IW.i)(iW) && this.padInput.onHiddenFrame(WW, iW)
      }
      releaseLostField() {
        const WW = this.ownedField;
        return !(null === WW || WW.isConnected && document.activeElement === WW) && (this.ownedField = null, this.hide(), !0)
      }
      clearPendingChat() {
        window.clearTimeout(this.pendingChatTimeout), this.pendingChatInput = null
      }
      restoreInputMode() {
        const {
          target: WW
        } = this.state;
        WW && (null === this.savedInputMode ? WW.removeAttribute("inputmode") : WW.setAttribute("inputmode", this.savedInputMode), this.savedInputMode = null)
      }
    };
    var hN = OW(10020),
      HN = OW(3781);
    const nN = new Map(GE.map((WW => {
        let {
          command: iW,
          action: OW
        } = WW;
        return [iW, OW]
      }))),
      uN = {
        letters: "ABC",
        accents: "\xe0\xe9",
        symbols: "&123"
      },
      oN = {
        chat: "controller:keyboardTargetChat",
        sign: "controller:keyboardTargetSign",
        nameTag: "controller:keyboardTargetNameTag",
        book: "controller:keyboardTargetBook",
        kt: "controller:keyboardTargetBookTitle"
      },
      dN = WW => {
        const iW = (() => {
          const [, WW] = (0, gW.useReducer)((WW => WW + 1), 0);
          return WW
        })();
        (0, gW.useEffect)((() => {
          if (!WW) return;
          const OW = ["input", "select", "selectionchange", "keyup", "pointerup"];
          for (const EW of OW) WW.addEventListener(EW, iW);
          document.addEventListener("selectionchange", iW);
          const mW = new MutationObserver(iW);
          return mW.observe(WW, {
            attributeFilter: ["placeholder"]
          }), () => {
            mW.disconnect();
            for (const mW of OW) WW.removeEventListener(mW, iW);
            document.removeEventListener("selectionchange", iW)
          }
        }), [WW, iW])
      },
      eN = WW => {
        WW.preventDefault()
      },
      vN = WW => {
        "mouse" !== WW.pointerType && WW.preventDefault()
      },
      gN = () => {
        var WW;
        const {
          t: iW
        } = (0, EW.B)(), OW = (() => {
          const [WW, iW] = (0, gW.useState)(JN.getState());
          return (0, gW.useEffect)((() => JN.subscribe((() => {
            iW(JN.getState())
          }))), []), WW
        })(), mW = (0, lW.B)(), NW = (0, gW.useRef)(null);
        (0, xW.s)(), (0, lW.D)(), (0, gW.useEffect)((() => {
          const WW = JN.install(),
            iW = null;
          return () => {
            WW(), null === iW || void 0 === iW || iW()
          }
        }), []);
        const PW = (0, hN.n)(),
          LW = OW.visible && "chat" === OW.kind ? OW.target : null;
        dN(LW);
        const cW = null !== (WW = null === LW || void 0 === LW ? void 0 : LW.value) && void 0 !== WW ? WW : "",
          wW = (0, lN.d)(cW, cW.startsWith("/") ? (0, HN.g)() : [], lN.f.length),
          ZW = cW.startsWith("/"),
          AW = ZW ? lN.f.map(((WW, iW) => {
            var OW;
            return null !== (OW = wW[iW]) && void 0 !== OW ? OW : ""
          })) : PW;
        if ((0, gW.useEffect)((() => {
            JN.editor.setPhraseRow(AW, ZW)
          })), (0, gW.useEffect)((() => {
            const WW = NW.current;
            if (WW) return WW.addEventListener("touchstart", eN, {
              passive: !1
            }), () => {
              WW.removeEventListener("touchstart", eN)
            }
          }), [OW.visible]), !OW.visible) return null;
        const bW = jN(OW),
          jW = NN(bW),
          UW = WW => "char" === WW.type ? ZN(WW.char, OW.page, OW.shift) : "phrase" === WW.type ? AW[WW.phraseIndex] : (WW => {
            switch (WW) {
              case "backspace":
                return "\u232b";
              case "shift":
                return "caps" === OW.shift ? "\u21ea" : "\u21e7";
              case "page":
              case "otherPage":
                return uN[ON(OW.page, OW.accentsFirst)[WW]];
              case "space":
                return iW("controller:keyboardSpace");
              case "caretLeft":
                return "\u2190";
              case "caretRight":
                return "\u2192";
              case "newline":
                return "\u21b5";
              case "submit":
                return iW("chat" === OW.kind ? "controller:keyboardSend" : "controller:keyboardDone");
              case "close":
                return "\u2715";
              case "channel":
                return "\u21c4"
            }
          })(WW.command),
          kW = WW => {
            JN.editor.pressKey(WW)
          };
        return (0, pW.jsxs)("div", {
          ref: NW,
          className: VW()(nO.l, "top" === OW.placement ? "PadKeyboardTop" : "PadKeyboardBottom", {
            PadKeyboardMultiline: OW.target instanceof HTMLTextAreaElement
          }),
          style: {
            "--pad-keyboard-rows": bW.length,
            "--pad-keyboard-height": `${OW.maxHeightPx}px`
          },
          onPointerDown: vN,
          onMouseDown: eN,
          children: [(0, pW.jsx)(DN, {
            target: OW.target,
            label: OW.kind ? iW(oN[OW.kind]) : OW.target.placeholder || iW("controller:keyboardTargetText")
          }), (0, pW.jsx)("div", {
            className: "PadKeyboardRows",
            children: bW.map(((WW, iW) => (0, pW.jsx)("div", {
              className: VW()("PadKeyboardRow", {
                PadKeyboardPhraseRow: "phrase" === WW[0].type
              }),
              children: WW.map(((WW, EW) => {
                const NW = mW && OW.focus.row === iW && OW.focus.col === EW,
                  PW = "command" === WW.type ? nN.get(WW.command) : void 0;
                return (0, pW.jsx)("div", {
                  className: "PadKeyboardKeySlot",
                  style: {
                    width: WW.width / jW * 100 + "%"
                  },
                  children: (0, pW.jsxs)("div", {
                    className: VW()("PadKeyboardKey", {
                      PadKeyboardKeyFocused: NW,
                      PadKeyboardKeyCommand: "command" === WW.type,
                      PadKeyboardKeyPhrase: "phrase" === WW.type,
                      PadKeyboardKeyActive: "command" === WW.type && "shift" === WW.command && "off" !== OW.shift,
                      PadKeyboardKeySubmit: "command" === WW.type && "submit" === WW.command
                    }),
                    role: "button",
                    onClick: () => {
                      kW({
                        row: iW,
                        col: EW
                      })
                    },
                    onTouchEnd: WW => {
                      var OW, mW;
                      WW.preventDefault(), OW = WW.changedTouches[0], mW = WW.currentTarget.getBoundingClientRect(), OW && OW.clientX >= mW.left && OW.clientX <= mW.right && OW.clientY >= mW.top && OW.clientY <= mW.bottom && kW({
                        row: iW,
                        col: EW
                      })
                    },
                    children: [(0, pW.jsx)("span", {
                      className: "PadKeyboardKeyLabel",
                      children: UW(WW)
                    }), mW && PW && (0, pW.jsx)(TE, {
                      className: "PadKeyboardKeyGlyph",
                      glyph: (0, tW.h)(PW)
                    })]
                  })
                }, EW)
              }))
            }, iW)))
          })]
        })
      },
      DN = WW => {
        let {
          target: iW,
          label: OW
        } = WW;
        dN(iW);
        const mW = (0, gW.useRef)(null),
          EW = (0, gW.useRef)(null),
          NW = iW instanceof HTMLTextAreaElement;
        (0, gW.useLayoutEffect)((() => {
          const WW = mW.current,
            iW = EW.current;
          NW ? WW.scrollTop = iW.offsetTop - WW.clientHeight / 2 : WW.scrollLeft = iW.offsetLeft - WW.clientWidth / 2
        }));
        const {
          value: PW,
          start: LW,
          end: cW
        } = (0, IW.o)(iW), wW = "password" === iW.type ? "\u2022".repeat(PW.length) : PW;
        return (0, pW.jsxs)("div", {
          className: "PadKeyboardPreview",
          children: [(0, pW.jsx)("div", {
            className: "PadKeyboardPreviewLabel SmallTextBold",
            children: OW
          }), (0, pW.jsxs)("div", {
            ref: mW,
            className: VW()("PadKeyboardPreviewText", {
              PadKeyboardPreviewMultiline: NW
            }),
            children: [(0, pW.jsx)("span", {
              children: wW.slice(0, LW)
            }), (0, pW.jsx)("span", {
              ref: EW,
              className: "PadKeyboardCaret"
            }), LW !== cW && (0, pW.jsx)("span", {
              className: "PadKeyboardPreviewSelection",
              children: wW.slice(LW, cW)
            }), (0, pW.jsx)("span", {
              children: wW.slice(cW)
            }), 0 === wW.length && iW.placeholder && iW.placeholder !== OW && (0, pW.jsx)("span", {
              className: "PadKeyboardPreviewPlaceholder",
              children: iW.placeholder
            })]
          })]
        })
      };
    var VN = OW(1459),
      pN = OW(4629);
    const fN = function() {
        for (var WW = arguments.length, iW = new Array(WW), OW = 0; OW < WW; OW++) iW[OW] = arguments[OW];
        return iW.map(tW.h)
      },
      CN = (WW, iW) => {
        const OW = GO(WW);
        return OW ? [{
          glyphs: [OW],
          labelKey: iW
        }] : []
      },
      XN = [".BottomMiddleElements", ".BottomLeftElements > *", ".BottomRightElements > *", ".MiddleTextBottom .MiddleText"],
      BN = "--pad-hint-bar-clearance",
      qN = "[data-pad-hint-bar-avoid]",
      RN = WW => {
        const iW = [];
        for (const OW of WW)(0, FW.p)(OW) && iW.push(OW.getBoundingClientRect());
        return iW
      },
      GN = WW => {
        if (!WW) return null;
        const iW = xm(),
          OW = iW ? RN(((WW, iW) => {
            const OW = WW.closest(qN);
            return OW ? [OW] : ("popup" === iW ? document : WW).querySelectorAll(qN)
          })(iW.root, iW.layer.kind)) : [],
          mW = !iW || iW.root.hasAttribute("data-pad-shows-hud");
        if (((0, pN.j)(null === iW || void 0 === iW ? void 0 : iW.layer.kind, (0, pN.n)()) || mW) && OW.push(...RN(document.querySelectorAll(XN.join(",")))), 0 === OW.length) return null;
        const {
          width: EW,
          height: NW
        } = WW.getBoundingClientRect(), PW = window.innerHeight - 8, LW = (0, pN.t)(PW, {
          width: EW,
          height: NW
        }, window.innerWidth / 2, OW, 8);
        return LW === PW ? null : Math.round(window.innerHeight - LW)
      },
      IN = WW => {
        const iW = document.documentElement.style,
          OW = WW ? `${Math.round(window.innerHeight-WW.getBoundingClientRect().top)}px` : "";
        iW.getPropertyValue(BN) !== OW && (OW ? iW.setProperty(BN, OW) : iW.removeProperty(BN))
      },
      aN = () => {
        const {
          t: WW
        } = (0, EW.B)(), {
          hideButtonHints: iW
        } = (0, xW.s)(), OW = (0, lW.B)(), [mW, NW] = (0, gW.useState)(!1), [PW, wW] = (0, gW.useState)([]), [bW, jW] = (0, gW.useState)(null), UW = (0, gW.useRef)(null), kW = (0, gW.useRef)(null);
        (0, sE.e)(MN.c, (WW => {
          NW(WW)
        })), (0, sE.e)(pN.p, (() => {
          var WW;
          null === (WW = kW.current) || void 0 === WW || WW.call(kW)
        }));
        const sW = OW && !iW && !mW;
        return (0, gW.useEffect)((() => {
          if (!sW) return;
          let WW = null;
          const iW = () => {
            const iW = (() => {
                var WW;
                const iW = ZW.c.getActiveConsumerName(),
                  OW = (0, pN.h)();
                if (OW) {
                  const WW = (0, tW.h)(OW),
                    iW = "emoteWheel" === OW && "wheel" === (0, xW.m)().emoteButton || !(0, AW.F)(ZW.c.getLastFrame().values, WW) ? {
                      glyphs: fN("menuConfirm"),
                      labelKey: "controller:menusSelect"
                    } : {
                      glyphs: [WW],
                      labelKey: "controller:wheelReleaseToPick"
                    };
                  return [{
                    glyphs: [(0, tW.A)(WW)],
                    labelKey: "controller:wheelChoose"
                  }, iW, {
                    glyphs: fN("menuBack"),
                    labelKey: "controller:wheelClose"
                  }]
                }
                const mW = xm();
                if (!mW || "focus" !== iW && "cursor" !== iW) return (0, pN.d)(tW.h);
                const EW = [],
                  NW = {
                    glyphs: fN("menuBack"),
                    labelKey: "controller:menusBack"
                  },
                  PW = (0, qW.z)(mW.root),
                  LW = PW ? !(0, FW.u)(PW) : Boolean(mW.layer.close),
                  wW = !PW && mW.layer.closeLabelKey ? mW.layer.closeLabelKey : NW.labelKey,
                  lW = LW ? [{
                    ...NW,
                    labelKey: wW
                  }] : [],
                  bW = dO(mW.layer.kind) ? [{
                    glyphs: fN("chat"),
                    labelKey: "controller:menusQuickChat"
                  }] : [];
                if ("cursor" === iW) return EW.push({
                  glyphs: fN("menuConfirm"),
                  labelKey: "controller:menusClick"
                }), EW.push({
                  glyphs: fN("menuSecondary"),
                  labelKey: "controller:menusRightClick"
                }), EW.push(...lW), EW.push(...bW), EW.push({
                  glyphs: ["RightStick"],
                  labelKey: "controller:menusScroll"
                }), hm() && EW.push({
                  glyphs: fN("menuToggleCursor"),
                  labelKey: "controller:menusFocusMode"
                }), EW;
                const jW = OE.getFocused();
                jW && (0, dm.b)(jW) ? EW.push({
                  glyphs: ["Left", "Right"],
                  labelKey: "controller:menusAdjust"
                }) : jW && (0, qW.E)(jW) ? EW.push({
                  glyphs: [],
                  labelKey: "controller:menusUseMouse"
                }) : EW.push({
                  glyphs: fN("menuConfirm"),
                  labelKey: "controller:menusSelect"
                });
                const UW = jW ? null === (WW = AO(jW)) || void 0 === WW ? void 0 : WW.dataset.padSecondary : void 0;
                UW && EW.push({
                  glyphs: fN("menuSecondary"),
                  labelKey: UW
                }), EW.push(...null !== jW && void 0 !== jW && jW.closest("[data-pad-friends-column]") ? [NW] : lW), EW.push(...bW);
                const kW = "home" === mW.layer.kind;
                rO(mW.root) || !VO(mW.root) && !zO(mW) ? kW && EW.push({
                  glyphs: fN("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusRows"
                }) : EW.push({
                  glyphs: fN("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusTabs"
                }), kW && (EW.push(...CN("inventory", "controller:menusFriends")), UW || EW.push({
                  glyphs: fN("menuSecondary"),
                  labelKey: "controller:menusSearch"
                }), EW.push(...CN("pause", "controller:menusSettings")), EW.push(...CN("leaderboard", "controller:menusNotifications")));
                const sW = cW.d.get("openEverythingMenuName");
                return "inGame" === cW.d.get("gameState") && "popup" !== mW.layer.kind && null !== sW && ((0, tO.j)(sW) ? EW.push(...CN("leaderboard", "controller:menusClose")) : sW !== wO.m.LOBBY_LEADERBOARD && EW.push(...CN("leaderboard", "controller:menusLobby"))), EW.push({
                  glyphs: fN("menuToggleCursor"),
                  labelKey: "controller:menusCursorMode"
                }), EW
              })(),
              OW = GN(UW.current),
              mW = ((WW, iW) => `${WW.map((WW=>`${WW.glyphs.join("+")}:${WW.labelKey}`)).join("|")}@${iW}`)(iW, OW);
            mW !== WW && (WW = mW, (0, LW.unstable_batchedUpdates)((() => {
              wW(iW), jW(OW)
            }))), IN(UW.current)
          };
          iW(), kW.current = iW;
          const OW = requestAnimationFrame(iW),
            mW = setInterval(iW, 150);
          return () => {
            kW.current = null, cancelAnimationFrame(OW), clearInterval(mW), IN(null)
          }
        }), [sW]), (0, gW.useLayoutEffect)((() => {
          if (!sW) return;
          if (0 === PW.length) return void IN(null);
          const WW = GN(UW.current);
          WW === bW ? IN(UW.current) : jW(WW)
        }), [sW, PW, bW]), sW && 0 !== PW.length ? (0, pW.jsx)("div", {
          ref: UW,
          className: "PadButtonHintBar SmallTextBold",
          style: null === bW ? void 0 : {
            bottom: bW
          },
          "aria-hidden": !0,
          children: PW.map((iW => (0, pW.jsxs)("div", {
            className: "PadButtonHint",
            children: [iW.glyphs.map((WW => (0, pW.jsx)(TE, {
              glyph: WW,
              className: "PadButtonHintGlyph"
            }, WW))), (0, pW.jsx)("span", {
              children: WW(iW.labelKey)
            })]
          }, iW.labelKey)))
        }) : null
      };
    var rN = OW(1864);
    const zN = [FW.d, "label", "[data-pad-slider]"].join(","),
      FN = "data-pad-cursor-probe",
      QN = WW => {
        var iW;
        const OW = (WW => {
          const iW = [];
          for (let mW = WW; mW && mW !== document.body && mW !== document.documentElement && (iW.push(mW), !(iW.length > 8)); mW = mW.parentElement);
          const OW = document.documentElement.classList.contains(lW.t) ? iW[iW.length - 1] : void 0;
          null === OW || void 0 === OW || OW.setAttribute(FN, "");
          try {
            return iW.map((WW => ({
              element: WW,
              cursor: getComputedStyle(WW).cursor
            })))
          } finally {
            null === OW || void 0 === OW || OW.removeAttribute(FN)
          }
        })(WW);
        if ("pointer" !== (null === (iW = OW[0]) || void 0 === iW ? void 0 : iW.cursor)) return null;
        let mW = 0;
        for (; mW + 1 < OW.length && "pointer" === OW[mW + 1].cursor;) mW++;
        return OW[mW].element
      },
      WP = (WW, iW, OW, mW) => {
        const EW = mW.root.contains(WW) ? mW.root : null;
        for (let NW = WW; NW && NW !== document.body && NW !== document.documentElement; NW = NW.parentElement) {
          if (NW instanceof HTMLElement && JW(NW, iW) && oW(NW, iW, OW)) return NW;
          if (NW === EW) break
        }
        return "home" === mW.layer.kind || "gamePage" === mW.layer.kind ? ((WW, iW) => {
          const OW = document.scrollingElement;
          return OW instanceof HTMLElement && ![document.documentElement, document.body].some((iW => {
            const OW = getComputedStyle(iW),
              mW = "y" === WW ? OW.overflowY : OW.overflowX;
            return "hidden" === mW || "clip" === mW
          })) && oW(OW, WW, iW) ? OW : null
        })(iW, OW) : null
      };
    const iP = new class {
        constructor() {
          this.state = {
            x: 0,
            y: 0,
            speedRamp: 0
          }, this.hasPosition = !1, this.active = !1, this.hidden = !1, this.hit = null, this.interactive = null, this.magnet = null, this.lastHitTestMs = -1 / 0, this.press = null, this.draggedSlider = null, this.repeatStop = null, this.repeatKey = null, this.repeated = !1, this.confirmRepeat = (0, bW.c)(AW.u), this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.layerRoot = null, this.layerOrder = 0, this.layerPoints = new WeakMap, this.page = null, this.pendingPageStart = null
        }
        install() {
          const WW = ZW.c.register({
              name: "cursor",
              isActive: () => "cursor" === Hm(),
              onFrame: WW => {
                this.onFrame(WW)
              },
              onDeactivate: () => {
                this.deactivate()
              },
              wakePressActs: WW => (0, ZW.d)(WW) || WW === (0, tW.h)("menuConfirm") && (0, qW.H)((0, lW.e)())
            }),
            iW = (0, Em.l)((WW => {
              const iW = WW.getRoot();
              iW && this.layerPoints.delete(iW), iW === this.layerRoot && (this.layerRoot = null)
            })),
            OW = wW.l.subscribe("appManagerUpdated|activeInputDevice", (WW => {
              "gamepad" !== WW && this.active && !this.hidden && this.hide()
            }));
          return () => {
            WW(), iW(), wW.l.unsubscribe(OW), this.deactivate()
          }
        }
        getHighlighted() {
          return this.isVisible() ? this.interactive : null
        }
        isVisible() {
          return this.active && !this.hidden && (0, lW.l)()
        }
        getPoint() {
          return {
            x: this.state.x,
            y: this.state.y
          }
        }
        hide() {
          this.hidden = !0, this.cancelPress(), this.secondaryArmed = !1, this.clearHover(), this.iZ()
        }
        activate(WW) {
          this.active = !0, this.hidden = !1;
          const iW = ym();
          !iW || iW.root && iW.root !== WW.root ? this.jumpTo(this.hasPosition ? this.getPoint() : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          }) : (this.setLayer(WW), this.jumpTo(iW.point))
        }
        jumpTo(WW) {
          this.state = {
            x: WW.x,
            y: WW.y,
            speedRamp: 0
          }, this.hasPosition = !0, this.lastHitTestMs = -1 / 0
        }
        deactivate() {
          this.active && (this.active = !1, this.page = null, this.pendingPageStart = null, this.cancelPress(), this.clearHover(), this.draggedSlider = null, this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.iZ())
        }
        onFrame(WW) {
          const iW = xm();
          if (!iW) return;
          if (this.active || this.activate(iW), this.followPage(iW)) return;
          this.followLayer(iW);
          const OW = WW.wokeDevice ? (0, lW.e)() : null;
          if (OW && this.jumpTo(OW), !(0, lW.l)()) return void this.hide();
          const mW = (0, tW.h)("menuToggleCursor");
          if (WW.wasPressed(mW)) return ZW.c.consumeButton(mW), void Ym(this.getHandoff(null));
          if (this.handBackToFocus(WW)) return;
          const EW = (0, tW.h)("menuConfirm"),
            NW = (0, tW.h)("menuSecondary");
          if (WW.wasPressed((0, tW.h)("menuBack"))) return (0, qW.l)(iW.root) || (0, qW.g)(iW.root) || lm(), void this.iZ();
          if (Wm(null, WW, iW)) return WW.wasReleased(EW) && this.press && (this.updateHit(!1), this.updateConfirm(WW, EW)), void this.iZ();
          if (document.pointerLockElement) return void this.hide();
          const PW = nm() ? {
              x: 0,
              y: 0
            } : (WW => {
              const iW = (WW, iW) => (WW ? 1 : 0) - (iW ? 1 : 0);
              return {
                x: iW(WW.isHeld("Right"), WW.isHeld("Left")),
                y: iW(WW.isHeld("Down"), WW.isHeld("Up"))
              }
            })(WW),
            LW = (0, xW.m)().moveDeadzone,
            cW = ((WW, iW) => {
              const OW = (0, AW.l)(WW, MW(iW));
              return Math.hypot(OW.x, OW.y)
            })(WW.leftStick, LW) > 0 || 0 !== PW.x || 0 !== PW.y;
          if (this.hidden) {
            const iW = WW.wasPressed(EW),
              OW = WW.wasPressed(NW);
            if (!cW && !YW(WW.rightStick) && !iW && !OW && !WW.wokeDevice) return void this.iZ();
            if (this.hidden = !1, this.updateHit(!1), iW || OW) return iW && (this.press = {
              kind: "ignored"
            }, WW.wokeDevice && this.beginRepeat()), this.secondaryArmed = !1, void this.iZ()
          }
          this.movePendingPageStart(cW);
          const wW = this.getPoint();
          this.state = SW(this.state, {
            stick: WW.leftStick,
            moveDeadzone: LW,
            dpad: PW,
            dtMs: WW.dtMs,
            cursorSpeedPercent: (0, xW.m)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: this.getAssistContext()
          });
          const bW = this.state.x !== wW.x || this.state.y !== wW.y,
            jW = [EW, NW].some((iW => WW.wasPressed(iW) || WW.wasReleased(iW)));
          (bW || jW || performance.now() - this.lastHitTestMs >= 100) && this.updateHit(bW), this.updateConfirm(WW, EW), this.updateSecondary(WW, NW), this.updateScroll(WW, iW), this.iZ()
        }
        followPage(WW) {
          const iW = "home" === WW.layer.kind || "gamePage" === WW.layer.kind,
            OW = this.page;
          if (this.page = iW ? {
              key: (0, Em.n)(WW.layer),
              root: WW.root
            } : null, !this.page || !OW || OW.root !== WW.root || OW.key === this.page.key) return !1;
          if (this.cancelPress(), this.secondaryArmed = !1, this.setLayer(WW), "hybrid" === Sm()) return sm = null, Um = null, Mm.lock(), !0;
          const {
            key: mW
          } = this.page;
          return this.pendingPageStart = {
            root: WW.root,
            key: mW,
            returning: OE.notePageEnteredByCursor(mW),
            enteredAtMs: performance.now()
          }, !1
        }
        movePendingPageStart(WW) {
          const iW = this.pendingPageStart;
          if (!iW) return;
          if (WW || iW.root !== this.layerRoot) return void(this.pendingPageStart = null);
          const OW = iW.returning ? OE.recallStop(iW.root, iW.key) : null;
          if (!OW && iW.returning && performance.now() - iW.enteredAtMs < 1e3) return;
          const mW = null !== OW && void 0 !== OW ? OW : OE.pickInitial(iW.root, {
            includeDisabled: !0,
            waitForContent: !0,
            enteredAtMs: iW.enteredAtMs
          });
          mW && (this.pendingPageStart = null, this.jumpTo((0, qW.B)(mW)))
        }
        setLayer(WW) {
          this.layerRoot = WW.root, this.layerOrder = WW.order
        }
        followLayer(WW) {
          var iW;
          if (WW.root === this.layerRoot) return;
          null !== (iW = this.layerRoot) && void 0 !== iW && iW.isConnected && this.layerPoints.set(this.layerRoot, this.getPoint()), this.cancelPress(), this.draggedSlider = null, this.secondaryArmed = !1;
          const OW = this.layerPoints.get(WW.root),
            mW = OW && WW.order <= this.layerOrder ? OW : OE.getLayerStartPoint(WW.root);
          this.setLayer(WW), this.jumpTo(mW)
        }
        getHandoff(WW) {
          var iW;
          return {
            point: this.getPoint(),
            element: null !== (iW = this.interactive) && void 0 !== iW ? iW : this.findDraggedSliderNearby(),
            direction: WW
          }
        }
        findDraggedSliderNearby() {
          const WW = this.draggedSlider;
          if (null === WW || void 0 === WW || !WW.isConnected) return null;
          const iW = WW.getBoundingClientRect(),
            {
              y: OW
            } = this.getPoint();
          return OW >= iW.top - 40 && OW <= iW.bottom + 40 ? WW : null
        }
        handBackToFocus(WW) {
          if (!nm()) return !1;
          const iW = AW.A.find((iW => WW.wasPressed(iW)));
          return !!iW && (OW = this.getHandoff(iW), sm = bm(OW), Um = null, Mm.lock(), ZW.c.handOffHeldInput(), !0);
          var OW
        }
        getAssistContext() {
          const WW = this.interactive;
          if (null === WW || void 0 === WW || !WW.isConnected) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const iW = WW.getBoundingClientRect();
          if (iW.width > .4 * window.innerWidth || iW.height > .4 * window.innerHeight) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const OW = (0, xW.m)().cursorMagnetism && !(0, rN.b)(WW) && !WW.closest("[data-pad-slider]"),
            mW = this.magnet && this.magnet !== WW && this.magnet.isConnected ? this.magnet.getBoundingClientRect() : iW;
          return {
            overInteractive: !0,
            magnetTarget: OW ? {
              x: mW.left + mW.width / 2,
              y: mW.top + mW.height / 2
            } : null
          }
        }
        updateHit(WW) {
          this.lastHitTestMs = performance.now();
          const iW = this.getPoint(),
            OW = document.elementFromPoint(iW.x, iW.y),
            mW = OW && !(0, UW.r)(OW) && (WW => {
              var iW;
              const OW = xm();
              return !(OW && !OW.root.contains(WW) && !WW.closest(".tooltip-container")) || !(null !== (iW = document.getElementById("root")) && void 0 !== iW && iW.contains(WW))
            })(OW) ? OW : null;
          if (mW !== this.hit) return (0, qW.r)(this.hit, mW, iW), this.hit = mW, void this.setInteractive(mW ? (WW => {
            const iW = WW.closest(zN);
            if (iW) {
              var OW, mW;
              const WW = null !== (OW = null === (mW = iW.parentElement) || void 0 === mW ? void 0 : mW.closest("[data-pad-focusable]")) && void 0 !== OW ? OW : iW;
              return (0, FW.u)(WW) ? {
                element: null,
                magnet: null
              } : {
                element: WW,
                magnet: iW
              }
            }
            const EW = QN(WW);
            return {
              element: EW,
              magnet: EW
            }
          })(mW) : {
            element: null,
            magnet: null
          });
          WW && mW && (0, qW.r)(mW, mW, iW)
        }
        setInteractive(WW) {
          let {
            element: iW,
            magnet: OW
          } = WW;
          this.interactive = iW, this.magnet = OW
        }
        clearHover() {
          this.hit && (0, qW.r)(this.hit, null, this.getPoint()), this.hit = null, this.setInteractive({
            element: null,
            magnet: null
          })
        }
        beginPress() {
          const WW = this.hit;
          if (!WW || (0, qW.E)(WW)) return {
            kind: "ignored"
          };
          const iW = (0, dm.b)(WW),
            OW = WW.closest("[data-pad-slider]");
          return iW && OW ? {
            kind: "slider",
            slider: OW,
            adjuster: iW
          } : ((0, qW.t)(WW, this.getPoint()), {
            kind: "pointer",
            target: WW
          })
        }
        applySliderFraction(WW) {
          var iW;
          const OW = WW.slider.getBoundingClientRect(),
            mW = OW.height > OW.width,
            EW = null === (iW = WW.slider.querySelector("[data-pad-slider-handle]")) || void 0 === iW ? void 0 : iW.getBoundingClientRect(),
            NW = EW ? mW ? EW.height : EW.width : 0,
            PW = (mW ? OW.height : OW.width) - NW;
          if (PW <= 0) return;
          const LW = mW ? OW.bottom - NW / 2 - this.state.y : this.state.x - OW.left - NW / 2;
          WW.adjuster.setFraction(Math.max(0, Math.min(1, LW / PW)))
        }
        updateConfirm(WW, iW) {
          WW.wasPressed(iW) && (this.press = WW.wokeDevice ? {
            kind: "ignored"
          } : this.beginPress(), this.draggedSlider = "slider" === this.press.kind ? this.press.slider : null, this.beginRepeat());
          const OW = this.press;
          if (!OW) return;
          if (WW.isHeld(iW)) return "slider" === OW.kind && this.applySliderFraction(OW), void this.updateRepeat();
          this.press = null;
          const mW = this.repeated;
          if (this.endRepeat(), !WW.wasReleased(iW)) return void this.endPressWithoutClick(OW);
          const EW = this.getPoint(),
            NW = this.hit;
          if ("slider" === OW.kind && OW.adjuster.endDrag(), "pointer" === OW.kind) {
            const WW = null !== NW && void 0 !== NW ? NW : OW.target.isConnected ? OW.target : null;
            WW && (0, qW.x)(WW, EW);
            const iW = NW && OW.target.isConnected && !mW ? ((WW, iW) => {
              for (let OW = WW; OW; OW = OW.parentElement)
                if (OW.contains(iW)) return OW;
              return null
            })(OW.target, NW) : null;
            iW && (OE.noteCursorActivation(iW), (0, UW.i)(iW, new MouseEvent("click", (0, qW.R)(EW, 0, 0))), (0, qW.j)(iW), (0, qW.O)(iW) && (0, qW.L)(iW))
          }
        }
        beginRepeat() {
          var WW, iW, OW;
          const mW = null !== (WW = null === (iW = this.hit) || void 0 === iW ? void 0 : iW.closest("[data-pad-repeat]")) && void 0 !== WW ? WW : null;
          this.repeatStop = mW, this.repeatKey = null !== (OW = null === mW || void 0 === mW ? void 0 : mW.getAttribute("data-pad-repeat")) && void 0 !== OW ? OW : null, this.repeated = !1, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now())
        }
        updateRepeat() {
          const WW = this.repeatStop;
          if (!WW) return;
          const iW = this.hit;
          WW.isConnected && !(0, FW.u)(WW) && WW.getAttribute("data-pad-repeat") === this.repeatKey && iW && WW.contains(iW) ? WW.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.repeated = !0, OE.noteCursorActivation(WW), (0, UW.i)(WW, new MouseEvent("click", (0, qW.R)(this.getPoint(), 0, 0)))) : this.repeatStop = null
        }
        endRepeat() {
          this.repeatStop = null, this.repeated = !1
        }
        endPressWithoutClick(WW) {
          "slider" === WW.kind && WW.adjuster.endDrag(), "pointer" === WW.kind && WW.target.isConnected && (0, qW.x)(WW.target, this.getPoint())
        }
        cancelPress() {
          this.endRepeat(), this.press && (this.endPressWithoutClick(this.press), this.press = null)
        }
        updateSecondary(WW, iW) {
          WW.wasPressed(iW) && (this.secondaryArmed = null !== this.hit), this.secondaryArmed && !WW.isHeld(iW) && (this.secondaryArmed = !1, WW.wasReleased(iW) && this.hit && (0, qW.n)(this.hit, this.getPoint(), 2))
        }
        updateScroll(WW, iW) {
          const OW = yW(WW.rightStick, WW.dtMs);
          if (0 === OW.x && 0 === OW.y) return void(this.scrollRemainder = {
            x: 0,
            y: 0
          });
          this.scrollRemainder = {
            x: this.scrollRemainder.x + OW.x,
            y: this.scrollRemainder.y + OW.y
          };
          const mW = Math.trunc(this.scrollRemainder.x),
            EW = Math.trunc(this.scrollRemainder.y);
          this.scrollRemainder = {
            x: this.scrollRemainder.x - mW,
            y: this.scrollRemainder.y - EW
          };
          const NW = this.hit;
          if (!NW) return;
          let PW = !1;
          if (0 !== EW) {
            const WW = WP(NW, "y", EW > 0 ? 1 : -1, iW);
            WW && (WW.scrollBy({
              top: EW,
              behavior: "instant"
            }), PW = !0)
          }
          if (0 !== mW) {
            const WW = WP(NW, "x", mW > 0 ? 1 : -1, iW);
            WW && (WW.scrollBy({
              left: mW,
              behavior: "instant"
            }), PW = !0)
          }
          PW && (this.lastHitTestMs = -1 / 0)
        }
        iZ() {
          GW.set({
            x: this.state.x,
            y: this.state.y,
            visible: this.isVisible(),
            pressed: null !== this.press && "ignored" !== this.press.kind
          })
        }
      },
      OP = () => {
        const WW = (0, gW.useMemo)((() => new XW), []),
          iW = (0, lW.B)();
        return (0, gW.useEffect)((() => {
          if (!iW) return;
          let OW = 0,
            mW = {
              of: null,
              atMs: 0,
              list: []
            };
          const EW = document.getElementsByClassName(um),
            NW = WW => {
              for (const iW of [...EW]) iW !== WW && iW.classList.remove(um)
            },
            PW = () => {
              var iW;
              OW = requestAnimationFrame(PW);
              const EW = (() => {
                const WW = OE.getFocused();
                if (OE.isActive() && null !== WW && void 0 !== WW && WW.isConnected) return WW;
                const iW = iP.getHighlighted();
                return null !== iW && void 0 !== iW && iW.isConnected ? iW : null
              })();
              NW(EW), EW && !EW.classList.contains(um) && EW.classList.add(um);
              const LW = null !== (iW = null === EW || void 0 === EW ? void 0 : EW.closest("[data-pad-reticle-box]")) && void 0 !== iW ? iW : EW;
              WW.show(LW ? ((WW, iW) => {
                let OW = WW.left,
                  mW = WW.top,
                  EW = WW.right,
                  NW = WW.bottom;
                for (const PW of iW) {
                  if (!PW) continue;
                  const WW = eW(PW);
                  OW = Math.max(OW, WW.left), mW = Math.max(mW, WW.top), EW = Math.min(EW, WW.right), NW = Math.min(NW, WW.bottom)
                }
                return EW <= OW || NW <= mW ? null : {
                  left: OW,
                  top: mW,
                  width: EW - OW,
                  height: NW - mW
                }
              })(LW.getBoundingClientRect(), (WW => {
                const iW = performance.now();
                return (mW.of !== WW || iW - mW.atMs > 500) && (mW = {
                  of: WW,
                  atMs: iW,
                  list: [hW(WW, "y"), hW(WW, "x")]
                }), mW.list
              })(LW)) : null)
            };
          return OW = requestAnimationFrame(PW), () => {
            cancelAnimationFrame(OW), NW(null), WW.hide()
          }
        }), [iW, WW]), (0, pW.jsx)(BW, {
          placer: WW,
          className: "PadFocusRing"
        })
      },
      mP = (WW, iW) => {
        WW.style.transform = `translate3d(${iW.x}px, ${iW.y}px, 0)`, WW.classList.toggle("Visible", iW.visible), WW.classList.toggle("Pressed", iW.pressed)
      },
      EP = () => {
        const WW = (0, gW.useRef)(null);
        return (0, gW.useEffect)((() => {
          const iW = GW.subscribe((iW => {
            WW.current && mP(WW.current, iW)
          }));
          return WW.current && mP(WW.current, GW.get()), iW
        }), []), (0, pW.jsx)("div", {
          ref: WW,
          className: "PadCursorView",
          "aria-hidden": "true",
          children: (0, pW.jsx)("div", {
            className: "PadCursorGlyph",
            children: "+"
          })
        })
      },
      NP = [{
        id: "google-consent",
        find: () => document.querySelector(".fc-consent-root"),
        startSelectors: [".fc-cta-do-not-consent", ".fc-cta-manage-options"]
      }],
      PP = "PadOverThirdParty",
      LP = new Set(NP.map((WW => WW.id))),
      cP = () => {
        const WW = NP.map((WW => {
            let {
              id: iW,
              find: OW,
              startSelectors: mW
            } = WW;
            return (0, Em.m)({
              id: iW,
              kind: "popup",
              getRoot: () => {
                const WW = OW(),
                  iW = WW ? ((WW, iW) => {
                    var OW;
                    for (const mW of iW) {
                      const iW = WW.querySelector(mW);
                      if (iW) return iW
                    }
                    return null !== (OW = [...WW.querySelectorAll("button")].find((WW => !WW.matches(".fc-cta-consent")))) && void 0 !== OW ? OW : null
                  })(WW, mW) : null;
                if (WW && iW && !iW.hasAttribute("data-pad-default-focus")) {
                  for (const iW of WW.querySelectorAll("[data-pad-default-focus]")) iW.removeAttribute("data-pad-default-focus");
                  for (const iW of WW.querySelectorAll("[data-pad-hint-bar-avoid]")) iW.removeAttribute("data-pad-hint-bar-avoid");
                  iW.setAttribute("data-pad-default-focus", ""), ((WW, iW) => {
                    let OW = WW;
                    for (let mW = WW.parentElement; mW && iW.contains(mW) && !(mW.getBoundingClientRect().height >= window.innerHeight / 2); mW = mW.parentElement) OW = mW;
                    return OW
                  })(iW, WW).setAttribute("data-pad-hint-bar-avoid", "")
                }
                return WW
              },
              close: null,
              memoryKey: null
            })
          })),
          iW = document.documentElement,
          OW = PW.d.onFrame((() => {
            const WW = (0, lW.l)() ? xm() : null,
              OW = !!WW && (mW = WW.layer, LP.has(mW.id));
            var mW;
            iW.classList.contains(PP) !== OW && iW.classList.toggle(PP, OW)
          }));
        return () => {
          for (const iW of WW) iW();
          OW(), iW.classList.remove(PP)
        }
      },
      wP = "PadLargePointer",
      tP = () => {
        (0, gW.useEffect)((() => {
          const WW = (0, UW.m)(document.body),
            iW = OE.install(),
            OW = iP.install(),
            mW = cP();
          return () => {
            WW(), iW(), OW(), mW()
          }
        }), []);
        const {
          largePointer: WW
        } = (0, xW.s)(), iW = (0, VN.x)() && WW;
        return (0, gW.useEffect)((() => {
          if (iW) return document.documentElement.classList.add(wP), () => {
            document.documentElement.classList.remove(wP)
          }
        }), [iW]), (0, LW.createPortal)((0, pW.jsxs)(pW.Fragment, {
          children: [(0, pW.jsx)(aN, {}), (0, pW.jsx)(OP, {}), (0, pW.jsx)(EP, {})]
        }), document.body)
      };
    var ZP = OW(10025),
      xP = OW(10038),
      lP = OW(10031);
    OW(10046);
    const AP = (WW, iW) => {
        const [OW, mW] = (0, gW.useState)(!1), [EW, NW] = (0, gW.useState)(null), PW = (0, gW.useRef)(null), LW = (0, gW.useCallback)((WW => {
          PW.current = WW, NW(WW)
        }), []), cW = (0, gW.useCallback)((() => {
          mW(!1), LW(null)
        }), [LW]), tW = (0, gW.useCallback)((() => {
          mW(!0)
        }), []), ZW = (0, gW.useCallback)(((WW, iW) => {
          LW((0, lP.E)(WW, iW, PW.current))
        }), [LW]);
        (0, gW.useLayoutEffect)((() => (iW(OW), (0, pN.x)(WW, OW), wW.l.iZ(pN.p), () => {
          iW(!1), (0, pN.x)(WW, !1), wW.l.iZ(pN.p)
        })), [OW, WW, iW]), (0, sE.e)("appManagerUpdated|activeInputDevice", (WW => {
          "gamepad" !== WW && cW()
        })), (0, sE.e)("appManagerUpdated|gameState", (WW => {
          "inGame" !== WW && cW()
        }));
        const xW = () => {
          (0, tO.l)() && cW()
        };
        return (0, sE.e)("appManagerUpdated|openEverythingMenuName", xW), (0, sE.e)("appManagerUpdated|openInGameMenuName", xW), {
          open: OW,
          picked: EW,
          pickedRef: PW,
          show: tW,
          aim: ZW,
          close: cW
        }
      },
      bP = WW => {
        let {
          className: iW,
          slotCount: OW,
          picked: mW,
          slotLabel: EW,
          renderSlot: NW,
          centre: PW
        } = WW;
        const LW = Array.from({
          length: OW
        }, ((WW, iW) => iW));
        return (0, pW.jsx)("div", {
          className: VW()("EmoteWheelOverlay PadRadialWheel", iW),
          children: (0, pW.jsxs)("div", {
            className: "EmoteWheel",
            style: {
              width: 2 * lP.t + "rem",
              height: 2 * lP.t + "rem"
            },
            children: [(0, pW.jsxs)("svg", {
              className: "EmoteWheelSvg",
              viewBox: `0 0 ${lP.o} ${lP.o}`,
              children: [LW.map((WW => (0, pW.jsx)("path", {
                d: (0, lP.u)(WW, OW, lP.i, lP.j, lP.k),
                className: VW()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: WW === mW
                }),
                "aria-label": EW(WW)
              }, WW))), (0, pW.jsx)("circle", {
                className: "EmoteWheelOuterRing",
                cx: lP.i,
                cy: lP.i,
                r: lP.k
              }), (0, pW.jsx)("circle", {
                className: "EmoteWheelInnerRing",
                cx: lP.i,
                cy: lP.i,
                r: lP.j
              }), null !== mW && (0, pW.jsx)("path", {
                className: "EmoteWheelWedgeOutline",
                d: (0, lP.u)(mW, OW, lP.i, lP.j, lP.k)
              })]
            }), LW.map((WW => {
              const iW = (0, lP.w)(WW, OW);
              return (0, pW.jsx)("div", {
                className: VW()("PadRadialWheelSlot SmallTextBold", {
                  PadRadialWheelSlotPicked: WW === mW
                }),
                style: {
                  left: `calc(50% + ${lP.e*Math.cos(iW)}rem)`,
                  top: `calc(50% + ${lP.e*Math.sin(iW)}rem)`
                },
                "aria-hidden": !0,
                children: NW(WW)
              }, WW)
            })), (0, pW.jsx)("div", {
              className: "EmoteWheelHint SmallTextBold",
              children: PW
            })]
          })
        })
      },
      jP = lN.f.length,
      UP = () => {
        const {
          t: WW
        } = (0, EW.B)(), iW = AP("chat", oO.s), OW = (0, hN.n)();
        return (0, sE.e)(oO.o, (() => {
          iW.open || (0, ZP.f)() || (0, xP.o)() || "inGame" !== cW.d.get("gameState") || (0, tO.l)() || !(0, nO.b)() || iW.show()
        })), (0, sE.e)(oO.g, (WW => {
          iW.open && iW.aim(WW, jP)
        })), (0, sE.e)(oO.k, (() => {
          var WW;
          if (!iW.open) return;
          const mW = iW.pickedRef.current;
          null !== mW ? lN.g.claim(performance.now()) && (iW.close(), null === (WW = (0, nO.b)()) || void 0 === WW || WW.sendLine(OW[mW])) : iW.close()
        })), (0, sE.e)(oO.i, iW.close), iW.open ? (0, pW.jsx)(bP, {
          className: "QuickChatWheel",
          slotCount: jP,
          picked: iW.picked,
          slotLabel: WW => OW[WW],
          renderSlot: WW => OW[WW],
          centre: null !== iW.picked ? OW[iW.picked] : WW("controller:quickChatPick")
        }) : null
      },
      kP = () => {
        const {
          t: WW
        } = (0, EW.B)(), iW = AP("actionButton", xP.s), [OW, mW] = (0, gW.useState)([]);
        if ((0, sE.e)(xP.j, (WW => {
            iW.open || (0, ZP.f)() || (0, oO.e)() || "inGame" !== cW.d.get("gameState") || (0, tO.l)() || (mW(WW), iW.show())
          })), (0, sE.e)(xP.d, (WW => {
            iW.open && iW.aim(WW, OW.length)
          })), (0, sE.e)(xP.i, (() => {
            if (!iW.open) return;
            const WW = iW.pickedRef.current;
            iW.close(), null !== WW && wW.l.iZ(xP.l, OW[WW])
          })), (0, sE.e)(xP.f, iW.close), !iW.open) return null;
        const NW = null !== iW.picked ? OW[iW.picked] : null;
        return (0, pW.jsx)(bP, {
          className: "ActionWheel",
          slotCount: OW.length,
          picked: iW.picked,
          slotLabel: iW => {
            const mW = OW[iW];
            return "reload" === mW.kind ? WW("controller:gameplayReload") : "customButton" === mW.kind ? mW.description || mW.icon : "touchButton" === mW.kind && "string" === typeof mW.label ? mW.label : ""
          },
          renderSlot: WW => (0, pW.jsx)(hE, {
            action: OW[WW]
          }),
          centre: NW ? (0, pW.jsx)(hE, {
            action: NW
          }) : WW("controller:actionWheelPick")
        })
      };
    var sP = OW(100);
    const MP = () => ((0, gW.useEffect)((() => {
        var WW, iW;
        const OW = (0, UW.m)(document.getElementById("root")),
          mW = (0, lW.g)(),
          EW = (() => {
            const WW = [wW.l.subscribe(EE.e, (() => {
                cE("blockBreak")
              })), wW.l.subscribe("damagedByOtherPlayer", (() => {
                cE("damage")
              })), wW.l.subscribe("yourAttackHit", (WW => {
                let {
                  hitSelf: iW
                } = WW;
                iW || cE("hit")
              }))],
              iW = PW.d.onActivePadChanged((WW => {
                WW && cE("connect")
              }));
            return () => {
              for (const iW of WW) wW.l.unsubscribe(iW);
              iW()
            }
          })(),
          NW = (() => {
            const WW = new AE({
              getVisitId: lE.getVisitSessionId,
              peekVisitId: lE.peekVisitSessionId,
              readReportedVisitId: () => {
                const WW = xE.j.getItem(bE);
                return "string" === typeof WW ? WW : null
              },
              writeReportedVisitId: WW => {
                xE.j.setItem(bE, WW)
              },
              isPadActive: lW.l,
              getPadFamily: () => {
                var WW, iW;
                return null !== (WW = null === (iW = PW.d.getActivePad()) || void 0 === iW ? void 0 : iW.family) && void 0 !== WW ? WW : null
              },
              canReport: tE.isBloxdGa4Ready,
              getInputType: ZE.d,
              wZ: tE.logControllerUsedToGtag
            });
            let iW = 0,
              OW = null;
            const mW = EW => {
                null === OW && ("notReady" !== WW.check(EW) || null !== OW || iW >= 20 || (iW++, OW = setTimeout((() => {
                  OW = null, mW(!1)
                }), 3e3)))
              },
              EW = wW.l.subscribe("appManagerUpdated|activeInputDevice", (() => {
                mW(!0)
              })),
              NW = (0, lE.onVisitStarted)((() => {
                iW = 0, mW(!0)
              }));
            return () => {
              wW.l.unsubscribe(EW), NW(), null !== OW && clearTimeout(OW)
            }
          })(),
          LW = PW.d.onFrame(((WW, iW, OW) => {
            const mW = (0, lW.r)(WW, OW);
            ZW.c.dispatch(WW, iW, mW)
          }));
        let tW = null !== (WW = null === (iW = PW.d.getActivePad()) || void 0 === iW ? void 0 : iW.family) && void 0 !== WW ? WW : null;
        const AW = PW.d.onActivePadChanged((WW => {
            var iW, OW;
            (ZW.c.reset(), (0, lW.w)(), wW.l.iZ(PW.c, WW), (null !== (iW = null === WW || void 0 === WW ? void 0 : WW.family) && void 0 !== iW ? iW : null) !== tW) && (tW = null !== (OW = null === WW || void 0 === WW ? void 0 : WW.family) && void 0 !== OW ? OW : null, wW.l.iZ(xW.e, (0, xW.m)()));
            !WW && (0, lW.l)() && (0, lW.A)(cW.d.get("isTouchScreen") ? "touch" : "keyboardMouse")
          })),
          bW = () => {
            "visible" !== document.visibilityState && ZW.c.clear()
          },
          jW = () => {
            ZW.c.clear()
          };
        document.addEventListener("visibilitychange", bW), window.addEventListener("blur", jW), PW.d.start(), (0, wE.l)();
        const kW = null;
        return () => {
          OW(), mW(), EW(), NW(), LW(), AW(), document.removeEventListener("visibilitychange", bW), window.removeEventListener("blur", jW), PW.d.stop(), null === kW || void 0 === kW || kW()
        }
      }), []), (0, pW.jsxs)("div", {
        className: "ControllerRoot",
        children: [(0, pW.jsx)(vE, {}), (0, pW.jsx)(qE, {}), (0, pW.jsx)(RE, {}), (0, pW.jsx)(gN, {}), (0, pW.jsx)(tP, {}), (0, pW.jsx)(UP, {}), (0, pW.jsx)(kP, {})]
      })),
      KP = () => sP.featureFlags.useControllerSupport ? (0, pW.jsx)(MP, {}) : null;
    var SP = OW(9393),
      YP = OW(10049);
    const yP = new Set(wE.h),
      TP = WW => `${YP.p}${(0,xW.q)()}/${WW}`,
      JP = WW => {
        if (!(0, YP.l)(WW)) return null;
        const [iW, OW] = WW.slice(YP.p.length).split("/");
        return (0, SP.e)(iW) && yP.has(OW) ? (0, wE.d)(iW, OW) : null
      };
    var hP = OW(10053);
    const HP = () => {
        const {
          t: WW
        } = (0, EW.B)(), iW = (0, lW.B)(), {
          gameState: OW,
          isUiHidden: mW
        } = (0, cW.p)(["gameState", "isUiHidden"]), {
          hideButtonHints: NW,
          sneakMode: PW
        } = (0, xW.s)(), [LW, wW] = (0, gW.useState)(hP.e);
        return (0, sE.e)(eE.r, wW), iW && !mW && "inGame" === OW && LW ? (0, pW.jsxs)("div", {
          className: "PadSneakChip SmallTextBold",
          children: [!NW && (0, pW.jsx)(TE, {
            glyph: (0, tW.h)("toggle" === PW ? "sneak" : "sneakToggle")
          }), (0, pW.jsx)("span", {
            children: WW("controller:gameplaySneaking")
          })]
        }) : null
      },
      nP = 12,
      uP = WW => {
        let {
          trigger: iW,
          className: OW,
          children: mW
        } = WW;
        const EW = (0, gW.useRef)(null);
        return (0, gW.useEffect)((() => {
          let WW = 0;
          const OW = hW(iW, "y"),
            mW = () => {
              WW = requestAnimationFrame(mW);
              const NW = EW.current;
              if (!NW || null === iW || void 0 === iW || !iW.isConnected) return;
              const {
                left: PW,
                top: LW
              } = function(WW, iW, OW) {
                let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                  EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                const NW = WW.left + WW.width / 2,
                  PW = Math.max(nP, OW.width - nP - iW.width),
                  LW = Math.min(Math.max(NW - iW.width / 2, nP), PW),
                  cW = OW.height - mW;
                let wW = 0,
                  tW = cW;
                if (EW) {
                  const WW = Math.max(0, EW.top),
                    mW = Math.min(cW, EW.bottom);
                  mW - WW >= Math.max(OW.height / 2, iW.height + 24) && (wW = WW, tW = mW)
                }
                const ZW = WW.top + WW.height / 2 < (wW + tW) / 2 ? tW - nP - iW.height : wW + nP;
                return {
                  left: LW,
                  top: Math.max(nP, ZW)
                }
              }(iW.getBoundingClientRect(), {
                width: NW.offsetWidth,
                height: NW.offsetHeight
              }, {
                width: window.innerWidth,
                height: window.innerHeight
              }, parseFloat(document.documentElement.style.getPropertyValue(BN)) || 0, null !== OW && void 0 !== OW && OW.isConnected ? OW.getBoundingClientRect() : null);
              NW.style.transform = `translate3d(${Math.round(PW)}px, ${Math.round(LW)}px, 0)`, NW.style.visibility = "visible"
            };
          return mW(), () => {
            cancelAnimationFrame(WW)
          }
        }), [iW]), (0, pW.jsx)("div", {
          ref: EW,
          className: OW,
          style: {
            position: "fixed",
            left: 0,
            top: 0,
            visibility: "hidden"
          },
          children: mW
        })
      };
    var oP = OW(1391),
      dP = OW(10059),
      eP = OW(1532),
      vP = OW(10066),
      gP = OW(10071);
    const DP = {
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
      VP = () => {
        const {
          t: WW
        } = (0, EW.B)(), iW = (0, lW.B)(), OW = (0, dP.b)(), mW = (0, CE.e)("_tasks"), NW = (0, CE.e)("_availableLeaderboards");
        if (!iW) return null;
        const PW = (WW => {
          let {
            hasShop: iW,
            hasTasksOrLeaderboards: OW,
            canInvite: mW
          } = WW;
          const EW = [];
          return iW && EW.push("shop"), OW && EW.push("tasks"), mW && EW.push("invite"), EW.push("leave"), EW
        })({
          hasShop: OW,
          hasTasksOrLeaderboards: !(!mW && !NW),
          canInvite: !!sP.featureFlags.canUseInviteLinks
        });
        return (0, pW.jsx)("div", {
          className: "PadLobbyShortcuts",
          children: PW.map((iW => {
            const {
              icon: OW,
              labelKey: mW
            } = DP[iW], EW = "leave" === iW ? eP.O : eP.f;
            return (0, pW.jsx)(EW, {
              className: "PadLobbyShortcut",
              onClick: () => {
                (WW => {
                  switch (WW) {
                    case "shop":
                      return wW.l.iZ(gP.i), void cW.d.set({
                        openEverythingMenuName: wO.m.SHOP
                      });
                    case "tasks":
                      return void wW.l.iZ("toggleMenu", "retentionFeatures");
                    case "invite":
                      return void wW.l.iZ("toggleMenu", "inviteLink");
                    case "leave":
                      (0, vP.d)()
                  }
                })(iW)
              },
              children: (0, pW.jsxs)("div", {
                className: "PadLobbyShortcutInner",
                children: [(0, pW.jsx)(oP.c, {
                  name: OW
                }), (0, pW.jsx)("span", {
                  children: WW(mW)
                })]
              })
            }, iW)
          }))
        })
      };
    var pP = OW(2085);
    const fP = AW.w,
      CP = ["forward", "backward", "left", "right", "sprint"],
      XP = WW => WW.ctrlKey || WW.altKey || "Alt" === WW.key || "ArrowUp" === WW.key || "ArrowDown" === WW.key || "Tab" === WW.code || "/" === WW.key || "Slash" === WW.code;
    class BP {
      constructor() {
        this.armed = !1, this.swallowedKeys = new Set, this.previousHeld = new Array(AW.M).fill(!1), this.leftStickWasPressed = !1, this.rightStickWasPressed = !1, this.consumeNextFrame = !1, this.consumeAfterContinue = !1
      }
      setArmed(WW) {
        this.armed = WW
      }
      blocksGameplay() {
        return this.armed || this.consumeNextFrame
      }
      onKeyDown(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return !this.armed || iW ? !WW.repeat && this.swallowedKeys.delete(WW.code) ? {
          swallow: !1,
          continues: !1
        } : {
          swallow: this.swallowedKeys.has(WW.code),
          continues: !1
        } : "Escape" === WW.key || WW.repeat && !this.swallowedKeys.has(WW.code) ? {
          swallow: !1,
          continues: !1
        } : OW ? {
          swallow: !1,
          continues: !0
        } : (this.swallowedKeys.add(WW.code), {
          swallow: !0,
          continues: (0, lW.k)(WW)
        })
      }
      onKeyUp(WW) {
        return this.swallowedKeys.delete(WW.code)
      }
      forgetKeys() {
        this.swallowedKeys.clear()
      }
      onPadFrame(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          mW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const EW = (0, AW.t)(WW.values, this.previousHeld),
          NW = null === OW ? -1 : (0, AW.m)(OW),
          PW = NW >= 0 && EW[NW] && !this.previousHeld[NW],
          LW = EW.some(((WW, iW) => WW && !this.previousHeld[iW] && iW !== NW)),
          cW = Math.hypot(WW.leftStick.x, WW.leftStick.y) >= fP,
          wW = Math.hypot(WW.rightStick.x, WW.rightStick.y) >= fP,
          tW = cW && !this.leftStickWasPressed || wW && !this.rightStickWasPressed;
        this.previousHeld = EW, this.leftStickWasPressed = cW, this.rightStickWasPressed = wW;
        let ZW = !1;
        this.consumeNextFrame && (this.consumeNextFrame = !1, ZW = !0);
        const xW = !iW && PW && !mW,
          lW = !xW && this.armed && !iW && (LW || tW);
        return (xW || lW) && (this.consumeNextFrame = !0, this.consumeAfterContinue = lW, ZW = !0), {
          continues: lW,
          back: xW,
          consumeHeld: ZW
        }
      }
      consumeLeavesMoveStick() {
        return this.consumeAfterContinue
      }
    }
    const qP = new Set([...pP.j, ...pP.F]),
      RP = WW => ((WW, iW, OW) => {
        const mW = Object.keys(iW).filter((mW => !OW.has(mW) && iW[mW].includes(WW)));
        return mW.length > 0 && mW.every((WW => CP.includes(WW)))
      })(WW, pP.v, qP),
      GP = (WW, iW, OW) => {
        const mW = new BP,
          EW = WW => {
            if (!WW.isTrusted) return;
            const {
              swallow: OW,
              continues: EW
            } = mW.onKeyDown(WW, !(0, lW.H)(WW) || (0, mE.j)() || (0, tO.l)(), RP(WW.code));
            OW && (WW.stopImmediatePropagation(), XP(WW) && WW.preventDefault()), EW && ((0, lW.A)("keyboardMouse"), iW())
          },
          NW = WW => {
            WW.isTrusted && mW.onKeyUp(WW) && (WW.stopImmediatePropagation(), XP(WW) && WW.preventDefault())
          },
          LW = () => {
            mW.forgetKeys()
          };
        window.addEventListener("keydown", EW, !0), window.addEventListener("keyup", NW, !0), window.addEventListener("blur", LW);
        const cW = PW.d.onFrame((WW => {
            const EW = ZW.c.getActiveConsumerName(),
              NW = OW(),
              PW = NW ? (0, tW.h)("menuBack") : null,
              LW = null !== EW && "gameplay" !== EW,
              {
                continues: cW,
                back: wW,
                consumeHeld: AW
              } = mW.onPadFrame(WW, LW, PW, (0, lW.o)(WW));
            if (AW) {
              const WW = (0, xW.m)().swapSticks ? "right" : "left";
              ZW.c.consumeAllHeld(mW.consumeLeavesMoveStick() ? WW : null)
            }
            wW ? null === NW || void 0 === NW || NW() : cW && iW()
          })),
          wW = (0, mE.k)(`pressToContinue:${WW}`, (() => mW.blocksGameplay()));
        return {
          setArmed: WW => {
            mW.setArmed(WW)
          },
          dispose: () => {
            window.removeEventListener("keydown", EW, !0), window.removeEventListener("keyup", NW, !0), window.removeEventListener("blur", LW), cW(), wW()
          }
        }
      };
    var IP = OW(5910),
      aP = OW(4638),
      rP = OW(4292),
      zP = OW(9400);
    const FP = WW => {
        let {
          text: iW
        } = WW;
        return (0, pW.jsx)("div", {
          className: "ControllerSettingsHeading",
          children: iW
        })
      },
      QP = WW => {
        let {
          label: iW,
          hint: OW,
          options: mW,
          value: NW,
          onChange: PW
        } = WW;
        const {
          t: LW
        } = (0, EW.B)();
        return (0, pW.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, pW.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: [(0, pW.jsxs)("div", {
              className: "ControllerChoiceText",
              children: [(0, pW.jsx)("div", {
                className: "SliderText",
                children: iW
              }), OW && (0, pW.jsx)("div", {
                className: "ControllerSettingsHint",
                children: OW
              })]
            }), (0, pW.jsx)(rP.e, {
              options: mW.map((WW => ({
                label: "label" in WW ? WW.label : LW(WW.labelKey),
                value: WW.value
              }))),
              value: NW,
              onChange: WW => {
                PW(WW.value)
              }
            })]
          })
        })
      },
      WL = WW => {
        let {
          settingKey: iW,
          label: OW,
          range: mW,
          format: EW
        } = WW;
        const NW = (0, xW.s)();
        return (0, pW.jsx)(IP.k, {
          name: OW,
          min: mW.min,
          max: mW.max,
          step: mW.step,
          padStep: mW.step,
          initValue: NW[iW],
          format: EW,
          onChange: WW => {
            (0, xW.r)({
              [iW]: (0, zP.w)(WW, mW)
            })
          }
        })
      };
    var iL = OW(10079),
      OL = OW(10085);
    const mL = WW => WW instanceof DOMException && ("SecurityError" === WW.name || "NotAllowedError" === WW.name),
      EL = WW => {
        const [iW] = [...WW.controllers].sort(((WW, iW) => OL.q[WW] - OL.q[iW]));
        return OL.m[iW]
      },
      NL = WW => {
        (0, iL.d)().allowPhoneMotion().catch((iW => {
          WW && mL(iW) ? WW() : console.warn("Could not enable the motion sensor", iW)
        }))
      },
      PL = {
        waiting: "controller:settingsGyroPhoneWaiting",
        noSensor: "controller:settingsGyroPhoneNoSensor",
        on: "controller:settingsGyroPhoneOn",
        denied: "controller:settingsGyroPhoneDenied"
      },
      LL = WW => {
        let {
          status: iW
        } = WW;
        const {
          t: OW
        } = (0, EW.B)(), [mW, NW] = (0, gW.useState)(null), PW = `${iW.controllers.join(",")}|${iW.phoneMotion}`;
        (0, gW.useEffect)((() => {
          NW(null)
        }), [PW]);
        const LW = () => {
          (0, iL.d)().connectController().then((WW => {
            NW(WW > 0 ? "openFailed" : null)
          })).catch((WW => {
            mL(WW) ? NW("needsClick") : console.warn("Could not connect motion controller", WW)
          }))
        };
        if (iW.hidSupported) {
          let WW = OW("controller:settingsGyroConnectHint");
          return "needsClick" === mW ? WW = OW("controller:settingsGyroConnectNeedsClick") : "openFailed" === mW ? WW = OW("controller:settingsGyroOpenFailed") : iW.controllers.length > 0 && (WW = OW("controller:settingsGyroConnected", {
            name: EL(iW)
          })), (0, pW.jsx)("div", {
            className: "SettingBox ControllerChoiceSetting",
            children: (0, pW.jsxs)("div", {
              className: "ControllerChoiceRow",
              children: [(0, pW.jsx)("div", {
                className: "ControllerSettingsHint",
                children: WW
              }), (0, pW.jsx)(eP.f, {
                onClick: LW,
                children: OW("controller:settingsGyroConnect")
              })]
            })
          })
        }
        if ("needsPermission" === iW.phoneMotion) return (0, pW.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, pW.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: ["needsTap" === mW && (0, pW.jsx)("div", {
              className: "ControllerSettingsHint",
              children: OW("controller:settingsGyroAllowNeedsTap")
            }), (0, pW.jsx)(eP.f, {
              onClick: () => {
                NL((() => {
                  NW("needsTap")
                }))
              },
              children: OW("controller:settingsGyroAllowMotion")
            })]
          })
        });
        const cW = PL[iW.phoneMotion];
        return cW ? (0, pW.jsx)("div", {
          className: "ControllerSettingsHint",
          children: OW(cW)
        }) : null
      },
      cL = () => {
        const {
          t: WW
        } = (0, EW.B)(), iW = (0, xW.s)(), OW = (0, iL.g)(), mW = (0, lW.D)(), NW = !OW.hidSupported && OW.phoneSupported && !OW.padConnected, PW = (OW.hidSupported || OW.phoneSupported) && !NW, LW = (0, tW.h)("pause");
        return (0, pW.jsxs)(pW.Fragment, {
          children: [(0, pW.jsx)(FP, {
            text: WW("controller:settingsGyro")
          }), NW && (0, pW.jsx)("div", {
            className: "ControllerSettingsHint",
            children: WW("controller:settingsGyroPhoneNeedsController")
          }), !PW && !NW && (0, pW.jsx)("div", {
            className: "ControllerSettingsHint",
            children: WW(OW.hidBlocked || OW.phoneBlocked ? "controller:settingsGyroBlocked" : "controller:settingsGyroUnsupported")
          }), PW && (0, pW.jsx)(IP.e, {
            label: WW(OW.hidSupported ? "controller:settingsGyroToggle" : "controller:settingsGyroTogglePhone"),
            checked: iW.gyroAiming,
            onClick: WW => {
              var iW, OW;
              (0, xW.r)({
                gyroAiming: WW
              });
              const mW = null === (iW = null === (OW = navigator.userActivation) || void 0 === OW ? void 0 : OW.isActive) || void 0 === iW || iW;
              if (!WW || !mW) return;
              const EW = (0, iL.d)(),
                NW = EW.getStatus();
              NW.hidSupported ? EW.connectControllerIfNoneGranted().catch((WW => {
                console.warn("Motion controller picker unavailable", WW)
              })) : "needsPermission" === NW.phoneMotion && NL()
            },
            circleInfoText: WW(OW.hidSupported ? "controller:settingsGyroToggleInfo" : "controller:settingsGyroToggleInfoPhone")
          }), PW && OW.hidSupported && (0, pW.jsx)("div", {
            className: "ControllerSettingsHint",
            children: WW("controller:settingsGyroSteamHint")
          }), PW && iW.gyroAiming && (0, pW.jsxs)(pW.Fragment, {
            children: [(0, pW.jsx)(LL, {
              status: OW
            }), (0, pW.jsx)(WL, {
              settingKey: "gyroSensitivity",
              label: WW("controller:settingsGyroSensitivity"),
              range: zP.J,
              format: zP.C
            }), (0, pW.jsx)(QP, {
              label: WW("controller:settingsGyroActivation"),
              hint: "aiming" === iW.gyroActivation && (0, pW.jsx)(aP.c, {
                text: WW("controller:settingsGyroAimingHint", {
                  button: aP.d
                }),
                glyph: (0, tW.h)("use")
              }),
              options: zP.G,
              value: iW.gyroActivation,
              onChange: WW => {
                (0, xW.r)({
                  gyroActivation: WW
                })
              }
            }), "button" === iW.gyroActivation && (0, pW.jsx)(QP, {
              label: WW("controller:settingsGyroButton"),
              hint: WW("controller:settingsGyroButtonHint"),
              options: zP.r.filter((WW => WW !== LW || WW === iW.gyroButton)).map((WW => ({
                label: yE(mW, WW),
                value: WW
              }))),
              value: iW.gyroButton,
              onChange: WW => {
                (0, xW.r)({
                  gyroButton: WW
                })
              }
            })]
          })]
        })
      };
    var wL = OW(1977);
    const tL = () => {
      const {
        t: WW
      } = (0, EW.B)(), iW = (0, xW.s)(), OW = (0, lW.D)();
      return (0, pW.jsxs)(pW.Fragment, {
        children: [(0, pW.jsx)(FP, {
          text: WW("controller:settingsAccessibility")
        }), (0, pW.jsx)(IP.e, {
          label: WW("controller:settingsSwapConfirmBack"),
          checked: (0, tW.M)(iW.swapConfirmBack, OW),
          onClick: WW => {
            (0, xW.r)({
              swapConfirmBack: WW === (0, tW.M)(null, OW) ? null : WW
            }), wL.g.showMessage({
              translationKey: "controller:settingsSwapToast"
            })
          },
          circleInfoText: WW("controller:settingsSwapConfirmBackInfo")
        }), (0, pW.jsx)(QP, {
          label: WW("controller:settingsButtonRepeat"),
          hint: WW("controller:settingsButtonRepeatHint"),
          options: zP.p,
          value: iW.buttonRepeat,
          onChange: WW => {
            (0, xW.r)({
              buttonRepeat: WW
            })
          }
        }), (0, pW.jsx)(QP, {
          label: WW("controller:settingsTapHoldTime"),
          hint: WW("controller:settingsTapHoldTimeHint"),
          options: zP.mb,
          value: iW.tapHoldTime,
          onChange: WW => {
            (0, xW.r)({
              tapHoldTime: WW
            })
          }
        }), (0, pW.jsx)(QP, {
          label: WW("controller:settingsEmoteButton"),
          hint: WW("wheel" === iW.emoteButton ? "controller:settingsEmoteButtonWheelHint" : "controller:settingsEmoteButtonTapHoldHint"),
          options: zP.z,
          value: iW.emoteButton,
          onChange: WW => {
            (0, xW.r)({
              emoteButton: WW
            })
          }
        }), (0, pW.jsx)(QP, {
          label: WW("controller:settingsAttackMode"),
          hint: WW("toggle" === iW.attackMode ? "controller:settingsAttackToggleHint" : "controller:settingsAttackHoldHint"),
          options: zP.o,
          value: iW.attackMode,
          onChange: WW => {
            (0, xW.r)({
              attackMode: WW
            })
          }
        }), (0, pW.jsx)(IP.e, {
          label: WW("controller:settingsLargePointer"),
          checked: iW.largePointer,
          onClick: WW => {
            (0, xW.r)({
              largePointer: WW
            })
          },
          circleInfoText: WW("controller:settingsLargePointerInfo")
        })]
      })
    };
    var ZL = OW(10092);
    const xL = new class {
        constructor(WW) {
          this.router = WW, this.current = null
        }
        claim(WW, iW) {
          const OW = this.current;
          OW && (this.current = null, OW.release(), OW.onTakenOver());
          const mW = this.router.register({
              ...WW,
              name: "capture"
            }),
            EW = {
              release: mW,
              onTakenOver: iW
            };
          return this.current = EW, () => {
            this.current === EW && (this.current = null), mW()
          }
        }
      }(ZW.c),
      lL = WW => {
        (0, gW.useEffect)((() => {
          if (!WW) return;
          const iW = WW();
          let OW = !1;
          const mW = () => {
              OW || (OW = !0, iW.onEnd())
            },
            EW = xL.claim({
              isActive: () => !OW,
              onFrame: WW => {
                iW.onFrame(WW, mW)
              }
            }, mW),
            NW = void 0 === iW.timeoutMs ? void 0 : window.setTimeout(mW, iW.timeoutMs),
            PW = WW => {
              "Escape" === WW.key && (WW.preventDefault(), WW.stopPropagation(), mW())
            };
          return window.addEventListener("keydown", PW, !0), () => {
            OW = !0, EW(), window.clearTimeout(NW), window.removeEventListener("keydown", PW, !0)
          }
        }), [WW])
      },
      AL = WW => {
        let {
          row: iW,
          capturing: OW,
          onCapture: mW,
          holdFillRef: NW,
          onRebind: PW,
          swapped: LW
        } = WW;
        const {
          t: cW
        } = (0, EW.B)();
        if ("fixed" === iW.kind) return (0, pW.jsx)("div", {
          className: "ControlRow PadControlRow PadControlRowFixed",
          children: (0, pW.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, pW.jsx)("div", {
              className: "ControlName",
              children: cW(iW.labelKey)
            }), (0, pW.jsx)("div", {
              className: "ControlBindingsContainer",
              children: (0, pW.jsx)("div", {
                className: "ControlBindingsList",
                children: (0, pW.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  children: (0, pW.jsx)(TE, {
                    glyph: "move" === iW.stick ? (0, tW.v)() : (0, tW.r)()
                  })
                })
              })
            })]
          })
        });
        const {
          action: wW
        } = iW, ZW = (0, tW.h)(wW), xW = (0, tW.k)(wW), lW = ZW !== xW && (0, tW.b)(wW, xW);
        return (0, pW.jsxs)("div", {
          className: VW()("ControlRow PadControlRow", {
            Capturing: OW
          }),
          children: [(0, pW.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, pW.jsx)("div", {
              className: "ControlName",
              children: cW(zP.i[wW])
            }), (0, pW.jsxs)("div", {
              className: "ControlBindingsContainer",
              children: [!OW && (0, pW.jsxs)("div", {
                className: "ControlBindingsList",
                children: [(0, pW.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    mW(wW)
                  },
                  children: (0, pW.jsx)(TE, {
                    glyph: ZW
                  })
                }), lW && (0, pW.jsx)("div", {
                  className: "ControlBinding PadBindingReset",
                  title: cW("controller:settingsReset"),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    PW(wW, xW)
                  },
                  children: (0, pW.jsx)(oP.c, {
                    name: "arrows-rotate"
                  })
                })]
              }), OW && (0, pW.jsxs)("div", {
                className: "ControlBindingAddInput",
                children: [(0, pW.jsxs)("div", {
                  className: "PadCaptureBox",
                  children: [(0, pW.jsx)("span", {
                    children: cW("controller:settingsCapturePrompt")
                  }), (0, pW.jsx)("div", {
                    ref: NW,
                    className: "PadCaptureHoldFill"
                  })]
                }), (0, pW.jsx)("div", {
                  className: "ControlBindingAddCancel",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    mW(null)
                  },
                  children: "\xd7"
                })]
              }), OW && (0, pW.jsx)("div", {
                className: "PadCaptureHint",
                children: (0, pW.jsx)(aP.c, {
                  text: cW((0, tW.b)(wW, (0, tW.h)("menuBack")) ? "controller:settingsCaptureCancelOrBindHint" : "controller:settingsCaptureCancelHint", {
                    button: aP.d
                  }),
                  glyph: (0, tW.h)("menuBack")
                })
              })]
            })]
          }), LW.map((WW => (0, pW.jsx)("div", {
            className: "ControlRowWarning PadSwapNotice",
            children: (0, pW.jsx)(aP.c, {
              text: cW("controller:settingsSwapNotice", {
                action: cW(zP.i[WW]),
                button: aP.d
              }),
              glyph: (0, tW.h)(WW)
            })
          }, WW))), OW && (0, pW.jsx)("div", {
            className: "PadCaptureTimer",
            style: {
              animationDuration: `${zP.v}ms`
            }
          })]
        })
      },
      bL = [],
      jL = WW => {
        let {
          layoutSetting: iW
        } = WW;
        const {
          t: OW
        } = (0, EW.B)(), mW = (0, xW.s)();
        (0, lW.D)();
        const NW = (0, gW.useRef)(null),
          [PW, LW] = (0, gW.useState)(null),
          cW = (0, gW.useCallback)(((WW, iW) => {
            const OW = (0, xW.m)().bindings;
            (0, tW.F)(WW, iW);
            const mW = (0, tW.y)(OW, WW);
            LW(mW.length > 0 ? {
              action: WW,
              swapped: mW
            } : null)
          }), []),
          [wW, bW] = ((WW, iW) => {
            const [OW, mW] = (0, gW.useState)(null), EW = (0, gW.useMemo)((() => OW ? () => {
              const EW = (0, tW.h)("menuBack"),
                NW = new zP.d(EW, (0, tW.h)("menuConfirm"), (WW => (0, tW.b)(OW, WW)));
              return {
                onFrame: (mW, PW) => {
                  var LW;
                  const cW = mW.frame.timestampMs,
                    wW = NW.update({
                      ...mW,
                      isDown: WW => (0, AW.F)(mW.frame.values, WW)
                    }, cW);
                  null === (LW = WW.current) || void 0 === LW || LW.style.setProperty("width", 100 * NW.getBindHoldProgress(cW) + "%"), wW && ("bind" === wW.kind ? (ZW.c.consumeButton(wW.button), iW(OW, wW.button)) : ZW.c.consumeButton(EW), PW())
                },
                onEnd: () => {
                  mW(null)
                },
                timeoutMs: zP.v
              }
            } : null), [OW, WW, iW]);
            return lL(EW), [OW, mW]
          })(NW, cW),
          jW = WW => {
            WW && LW(null), bW(WW)
          };
        (0, gW.useEffect)((() => {
          if (!PW) return;
          const WW = window.setTimeout((() => {
            LW(null)
          }), zP.jb);
          return () => {
            window.clearTimeout(WW)
          }
        }), [PW]);
        const UW = !mW.swapSticks && 0 === Object.keys(mW.bindings).length;
        return (0, pW.jsxs)("div", {
          className: "ControlsContainer PadControlsContainer",
          children: [(0, pW.jsx)("div", {
            className: "SliderText",
            children: OW("controller:settingsRemap")
          }), (0, pW.jsx)("div", {
            className: "ControllerSettingsHint",
            children: OW("controller:settingsRemapHint")
          }), (0, pW.jsx)(eP.O, {
            className: "ResetBindingsButton PadResetAllButton",
            disabled: UW,
            onClick: () => {
              jW(null), LW(null), (0, tW.J)()
            },
            children: OW("controller:settingsResetAll")
          }), iW, zP.db.map(((WW, iW) => (0, pW.jsx)(ZL.e, {
            title: OW(WW.titleKey),
            defaultOpen: 0 === iW,
            children: WW.rows.map((WW => (0, pW.jsx)(AL, {
              row: WW,
              capturing: "action" === WW.kind && WW.action === wW,
              onCapture: jW,
              holdFillRef: NW,
              onRebind: cW,
              swapped: "action" === WW.kind && (null === PW || void 0 === PW ? void 0 : PW.action) === WW.action ? PW.swapped : bL
            }, "action" === WW.kind ? WW.action : WW.labelKey)))
          }, WW.titleKey)))]
        })
      },
      UL = WW => {
        let {
          deadzone: iW,
          dotRef: OW,
          labelKey: mW
        } = WW;
        const {
          t: NW
        } = (0, EW.B)();
        return (0, pW.jsxs)("div", {
          className: "ControllerTesterStick",
          children: [(0, pW.jsxs)("div", {
            className: "ControllerTesterStickCircle",
            children: [(0, pW.jsx)("div", {
              className: "ControllerTesterDeadzone",
              style: {
                width: 100 * iW + "%",
                height: 100 * iW + "%"
              }
            }), (0, pW.jsx)("div", {
              ref: OW,
              className: "ControllerTesterDot"
            })]
          }), (0, pW.jsx)("div", {
            className: "ControllerTesterStickLabel",
            children: NW(mW)
          })]
        })
      },
      kL = (WW, iW, OW, mW) => {
        var EW;
        WW && (WW.style.left = 50 + 50 * Math.max(-1, Math.min(1, iW.x)) + "%", WW.style.top = 50 + 50 * Math.max(-1, Math.min(1, iW.y)) + "%", null === (EW = WW.parentElement) || void 0 === EW || EW.classList.toggle("Active", mW || Math.hypot(iW.x, iW.y) > OW))
      },
      sL = WW => {
        const iW = {
            deadzone: WW.moveDeadzone,
            labelKey: "controller:settingsActionMove"
          },
          OW = {
            deadzone: WW.lookDeadzone,
            labelKey: "controller:settingsActionLook"
          };
        return WW.swapSticks ? {
          left: OW,
          right: iW
        } : {
          left: iW,
          right: OW
        }
      },
      ML = () => {
        const {
          t: WW
        } = (0, EW.B)(), iW = (() => {
          const [WW, iW] = (0, gW.useState)((() => PW.d.getActivePad()));
          return (0, sE.e)(PW.c, (() => {
            iW(PW.d.getActivePad())
          })), WW
        })(), OW = sL((0, xW.s)()), mW = (0, gW.useRef)(null), NW = (0, gW.useRef)(null), LW = (0, gW.useRef)([]), cW = (0, gW.useRef)(null), wW = (0, gW.useRef)(null), [lW, bW] = (WW => {
          const [iW, OW] = (0, gW.useState)(!1), mW = (0, gW.useMemo)((() => iW ? () => {
            const iW = (0, tW.h)("menuBack"),
              mW = new zP.h;
            return {
              onFrame: (OW, EW) => {
                var NW;
                const PW = mW.update({
                  pressed: OW.wasPressed(iW),
                  BL: OW.isHeld(iW)
                }, OW.frame.timestampMs);
                null === (NW = WW.current) || void 0 === NW || NW.style.setProperty("width", 100 * PW + "%"), PW >= 1 && (ZW.c.consumeButton(iW), EW())
              },
              onEnd: () => {
                OW(!1)
              }
            }
          } : null), [iW, WW]);
          return lL(mW), [iW, OW]
        })(NW);
        (0, gW.useEffect)((() => {
          const WW = WW => {
            for (const OW of AW.Q) {
              const iW = (0, AW.m)(OW),
                mW = LW.current[iW];
              if (!mW) continue;
              const EW = WW.values[iW];
              mW.classList.toggle("Pressed", EW >= AW.w), (0, AW.H)(iW) && mW.style.setProperty("--trigger-fill", `${Math.round(100*EW)}%`)
            }
            const iW = sL((0, xW.m)());
            kL(cW.current, WW.leftStick, iW.left.deadzone, WW.values[(0, AW.m)("LS")] >= AW.w), kL(wW.current, WW.rightStick, iW.right.deadzone, WW.values[(0, AW.m)("RS")] >= AW.w)
          };
          return iW || WW((0, AW.v)()), PW.d.onFrame(WW)
        }), [iW]), (0, gW.useEffect)((() => {
          iW || bW(!1)
        }), [iW, bW]), (0, gW.useEffect)((() => {
          var WW;
          lW && (null === (WW = mW.current) || void 0 === WW || WW.scrollIntoView({
            block: "nearest"
          }))
        }), [lW]);
        const jW = zP.Y.find((WW => WW.value === (null === iW || void 0 === iW ? void 0 : iW.family)));
        return (0, pW.jsxs)("div", {
          ref: mW,
          className: VW()("SettingBox ControllerTester", {
            Testing: lW
          }),
          children: [(0, pW.jsxs)("div", {
            className: "ControllerTesterHeader",
            children: [(0, pW.jsxs)("div", {
              className: "ControllerTesterInfo",
              children: [iW && (0, pW.jsx)("div", {
                children: WW("controller:settingsTesterFamily", {
                  family: jW ? WW(jW.labelKey) : iW.family
                })
              }), iW && (0, pW.jsx)("div", {
                className: "ControllerTesterPadId",
                children: iW.id
              }), !iW && (0, pW.jsx)("div", {
                children: WW("controller:settingsTesterNoPad")
              })]
            }), (iW || lW) && (0, pW.jsx)(eP.f, {
              className: "ControllerTesterToggle",
              onClick: () => {
                bW(!lW)
              },
              children: WW(lW ? "controller:settingsTesterStop" : "controller:settingsTesterStart")
            })]
          }), iW && !lW && (0, pW.jsx)("div", {
            className: "ControllerSettingsHint",
            children: WW("controller:settingsTesterHint")
          }), lW && (0, pW.jsxs)("div", {
            className: "ControllerTesterBanner",
            children: [(0, pW.jsx)(aP.c, {
              text: WW("controller:settingsTesterTesting", {
                button: aP.d
              }),
              glyph: (0, tW.h)("menuBack")
            }), (0, pW.jsx)("div", {
              ref: NW,
              className: "ControllerTesterExitFill"
            })]
          }), (0, pW.jsxs)("div", {
            className: "ControllerTesterBody",
            children: [(0, pW.jsx)(UL, {
              deadzone: OW.left.deadzone,
              dotRef: cW,
              labelKey: OW.left.labelKey
            }), (0, pW.jsx)("div", {
              className: "ControllerTesterButtons",
              children: AW.Q.map((WW => {
                const OW = (0, AW.m)(WW);
                return (0, pW.jsx)("div", {
                  ref: WW => {
                    LW.current[OW] = WW
                  },
                  className: (0, AW.H)(OW) ? "ControllerTesterButton ControllerTesterTrigger" : "ControllerTesterButton",
                  children: (0, pW.jsx)(TE, {
                    glyph: WW,
                    family: null === iW || void 0 === iW ? void 0 : iW.family
                  })
                }, WW)
              }))
            }), (0, pW.jsx)(UL, {
              deadzone: OW.right.deadzone,
              dotRef: wW,
              labelKey: OW.right.labelKey
            })]
          })]
        })
      },
      KL = (0, gW.memo)((function() {
        const {
          t: WW
        } = (0, EW.B)(), iW = (0, xW.s)(), [OW, mW] = (0, gW.useState)(!1);
        return (0, gW.useEffect)((() => {
          if (!OW) return;
          const WW = window.setTimeout((() => {
            mW(!1)
          }), zP.jb);
          return () => {
            window.clearTimeout(WW)
          }
        }), [OW]), (0, pW.jsxs)("div", {
          className: "SettingsMenuRightInner ControllerCategory",
          children: [(0, pW.jsx)(FP, {
            text: WW("controller:settingsLook")
          }), (0, pW.jsx)(WL, {
            settingKey: "lookSensitivityX",
            label: WW("controller:settingsLookSensitivityX"),
            range: zP.eb,
            format: zP.D
          }), (0, pW.jsx)(WL, {
            settingKey: "lookSensitivityY",
            label: WW("controller:settingsLookSensitivityY"),
            range: zP.eb,
            format: zP.D
          }), (0, pW.jsx)(WL, {
            settingKey: "aimLookSensitivity",
            label: WW("controller:settingsAimLookSensitivity"),
            range: zP.l,
            format: zP.D
          }), (0, pW.jsx)(QP, {
            label: WW("controller:settingsLookCurve"),
            hint: WW("controller:settingsLookCurveHint"),
            options: zP.U,
            value: iW.lookCurve,
            onChange: WW => {
              (0, xW.r)({
                lookCurve: WW
              })
            }
          }), (0, pW.jsx)(IP.e, {
            label: WW("controller:settingsInvertLookX"),
            checked: iW.invertLookX,
            onClick: WW => {
              (0, xW.r)({
                invertLookX: WW
              })
            }
          }), (0, pW.jsx)(IP.e, {
            label: WW("controller:settingsInvertLookY"),
            checked: iW.invertLookY,
            onClick: WW => {
              (0, xW.r)({
                invertLookY: WW
              })
            }
          }), (0, pW.jsx)(WL, {
            settingKey: "lookDeadzone",
            label: WW("controller:settingsLookDeadzone"),
            range: zP.y,
            format: zP.A
          }), (0, pW.jsx)(cL, {}), (0, pW.jsx)(FP, {
            text: WW("controller:settingsMovement")
          }), (0, pW.jsx)(WL, {
            settingKey: "moveDeadzone",
            label: WW("controller:settingsMoveDeadzone"),
            range: zP.y,
            format: zP.A
          }), (0, pW.jsx)(IP.e, {
            label: WW("controller:settingsAutoSprint"),
            checked: iW.autoSprint,
            onClick: WW => {
              (0, xW.r)({
                autoSprint: WW
              })
            },
            circleInfoText: WW("controller:settingsAutoSprintInfo")
          }), (0, pW.jsx)(QP, {
            label: WW("controller:settingsSneak"),
            options: zP.ib,
            value: iW.sneakMode,
            onChange: WW => {
              (0, xW.r)({
                sneakMode: WW
              })
            }
          }), (0, pW.jsx)(FP, {
            text: WW("controller:settingsButtons")
          }), (0, pW.jsx)(QP, {
            label: WW("controller:settingsPromptFamily"),
            options: zP.Y,
            value: iW.promptFamily,
            onChange: WW => {
              (0, xW.r)({
                promptFamily: WW
              })
            }
          }), (0, pW.jsx)(IP.e, {
            label: WW("controller:settingsHideButtonHints"),
            checked: iW.hideButtonHints,
            onClick: WW => {
              (0, xW.r)({
                hideButtonHints: WW
              })
            }
          }), (0, pW.jsx)(IP.e, {
            label: WW("controller:settingsVibration"),
            checked: iW.vibration,
            onClick: WW => {
              (0, xW.r)({
                vibration: WW
              }), WW && cE("preview")
            }
          }), (0, pW.jsx)(WL, {
            settingKey: "cursorSpeed",
            label: WW("controller:settingsCursorSpeed"),
            range: zP.x,
            format: zP.D
          }), (0, pW.jsx)(IP.e, {
            label: WW("controller:settingsCursorMagnetism"),
            checked: iW.cursorMagnetism,
            onClick: WW => {
              (0, xW.r)({
                cursorMagnetism: WW
              })
            }
          }), (0, pW.jsx)(IP.e, {
            label: WW("controller:settingsMenuBackToCategories"),
            checked: iW.menuBackToCategories,
            onClick: WW => {
              (0, xW.r)({
                menuBackToCategories: WW
              })
            }
          }), (0, pW.jsx)(jL, {
            layoutSetting: (0, pW.jsxs)(pW.Fragment, {
              children: [tW.f.map((OW => (0, pW.jsx)(IP.e, {
                label: WW(zP.O[OW]),
                checked: (0, tW.C)(OW, iW),
                onClick: WW => {
                  mW(!(0, tW.N)(OW, WW))
                }
              }, OW))), OW && (0, pW.jsx)("div", {
                className: "PadLayoutRefusedNotice",
                role: "status",
                children: WW("controller:settingsLayoutRefusedToast")
              })]
            })
          }), (0, pW.jsx)(tL, {}), (0, pW.jsx)(FP, {
            text: WW("controller:settingsAlternatives")
          }), (0, pW.jsx)("div", {
            className: "ControllerSettingsHint",
            children: WW("controller:settingsAlternativesHint")
          }), (0, pW.jsx)(QP, {
            label: WW("controller:settingsMenuNavigation"),
            hint: WW("controller:settingsMenuNavigationHint"),
            options: zP.X,
            value: iW.menuNavigation,
            onChange: WW => {
              (0, xW.r)({
                menuNavigation: WW
              })
            }
          }), (0, pW.jsx)(QP, {
            label: WW("controller:settingsInventoryNavigation"),
            hint: WW("controller:settingsInventoryNavigationHint"),
            options: zP.K,
            value: iW.inventoryNavigation,
            onChange: WW => {
              (0, xW.r)({
                inventoryNavigation: WW
              })
            }
          }), (0, pW.jsx)(QP, {
            label: WW("controller:settingsQuickChat"),
            hint: WW("controller:settingsQuickChatHint"),
            options: zP.$,
            value: iW.quickChat,
            onChange: WW => {
              (0, xW.r)({
                quickChat: WW
              })
            }
          }), (0, pW.jsx)(QP, {
            label: WW("controller:settingsLeaderboardButton"),
            hint: WW("controller:settingsLeaderboardButtonHint"),
            options: zP.S,
            value: iW.leaderboardButton,
            onChange: WW => {
              (0, xW.r)({
                leaderboardButton: WW
              })
            }
          }), (0, pW.jsx)(FP, {
            text: WW("controller:settingsTester")
          }), (0, pW.jsx)(ML, {})]
        })
      }));
    (0, EW.b)(mW);
    for (const JL of (0, NW.u)()) JL.connected ? PW.d.handleConnectionEvent(JL) : PW.d.handleDisconnectionEvent(JL);
    const SL = () => null !== PW.d.getActivePad(),
      YL = () => PO.getState(),
      yL = () => PO.isSteppingSlots(),
      TL = (WW, iW) => {
        const OW = OE.getFocused();
        OE.isActive() && OW && WW.contains(OW) && OE.setFocus(iW, {
          scroll: !1
        })
      }
  },
  9373: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => cW,
      d: () => wW
    });
    var mW = OW(1497),
      EW = OW(1495);
    const NW = {
        "054c": "playstation",
        "057e": "nintendo"
      },
      PW = "28de",
      LW = new Set(["1205"]),
      cW = (WW, iW) => {
        const OW = (0, mW.c)(WW);
        if ((null === OW || void 0 === OW ? void 0 : OW.vendor) === PW) return LW.has(OW.product) ? "steamdeck" : "xbox";
        if (OW && NW[OW.vendor]) return NW[OW.vendor];
        if ((0, EW.c)(WW)) return "nintendo";
        const cW = `${WW} ${null!==iW&&void 0!==iW?iW:""}`.toLowerCase();
        return /dualsense|dualshock|playstation|sony/.test(cW) ? "playstation" : /nintendo|switch|joy-con|pro controller/.test(cW) ? "nintendo" : /steam deck/.test(cW) ? "steamdeck" : "xbox"
      },
      wW = WW => {
        var iW;
        return (null === (iW = (0, mW.c)(WW)) || void 0 === iW ? void 0 : iW.vendor) === PW
      }
  },
  9413: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => wW,
      d: () => LW
    });
    var mW = OW(9364);
    const EW = ["capture", "keyboard", "wheel", "inventory", "cursor", "focus", "gameplay"],
      NW = new Set(["capture", "gameplay"]),
      PW = ["Up", "Down", "Left", "Right"],
      LW = WW => PW.includes(WW),
      cW = .25;
    const wW = new class {
      constructor() {
        this.consumers = new Map, this.activeName = null, this.BL = new Array(mW.M).fill(!1), this.previousHeld = new Array(mW.M).fill(!1), this.consumedButtons = new Array(mW.M).fill(!1), this.suppressedReleases = new Array(mW.M).fill(!1), this.wakeOwned = new Array(mW.M).fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.peek = null, this.lastFrame = (0, mW.v)()
      }
      register(WW) {
        return this.consumers.has(WW.name) && console.warn(`Controller consumer "${WW.name}" registered twice; the newer one replaces it.`), this.consumers.set(WW.name, WW), () => {
          var iW;
          this.consumers.get(WW.name) === WW && (this.activeName === WW.name ? (this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()) : (null === (iW = this.peek) || void 0 === iW ? void 0 : iW.over) === WW.name && (this.peek = null), this.consumers.delete(WW.name))
        }
      }
      getActiveConsumerName() {
        return this.activeName
      }
      isButtonHeld(WW) {
        return this.BL[(0, mW.m)(WW)]
      }
      getLastFrame() {
        return this.lastFrame
      }
      clear() {
        this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()
      }
      reset() {
        this.deactivateCurrent(), this.activeName = null, this.BL = new Array(mW.M).fill(!1), this.previousHeld = new Array(mW.M).fill(!1), this.consumedButtons.fill(!1), this.suppressedReleases.fill(!1), this.wakeOwned.fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.lastFrame = (0, mW.v)()
      }
      dispatch(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.lastFrame = WW, this.previousHeld = this.BL, this.BL = (0, mW.t)(WW.values, this.previousHeld);
        for (let NW = 0; NW < mW.M; NW++) this.suppressedReleases[NW] = !this.BL[NW] && this.consumedButtons[NW], this.BL[NW] || (this.consumedButtons[NW] = !1), this.wakeOwned[NW] && (this.BL[NW] ? (this.consumedButtons[NW] = !0, this.wakeOwned[NW] = !1) : WW.values[NW] < mW.L && (this.wakeOwned[NW] = !1));
        Math.hypot(WW.leftStick.x, WW.leftStick.y) < cW && (this.leftStickConsumed = !1), Math.hypot(WW.rightStick.x, WW.rightStick.y) < cW && (this.rightStickConsumed = !1);
        const EW = this.pickActive();
        if ((null === EW || void 0 === EW ? void 0 : EW.name) !== this.activeName) {
          var PW, LW, wW, tW, ZW, xW;
          const WW = this.activeName,
            iW = {
              left: !this.leftStickConsumed,
              right: !this.rightStickConsumed
            },
            OW = null !== (PW = null === EW || void 0 === EW || null === (LW = EW.peek) || void 0 === LW ? void 0 : LW.call(EW)) && void 0 !== PW ? PW : null,
            NW = null === WW && !!OW && !(null === (wW = this.consumers.get(OW.over)) || void 0 === wW || !wW.onPeekFrame),
            cW = OW && (OW.over === WW || NW) ? OW : null,
            lW = null !== this.peek && this.peek.over === (null === EW || void 0 === EW ? void 0 : EW.name) ? this.peek : null;
          this.deactivateCurrent(null !== cW, null !== lW), this.activeName = null !== (tW = null === EW || void 0 === EW ? void 0 : EW.name) && void 0 !== tW ? tW : null, null === WW || this.handOffPending || this.consumeAllHeld();
          const AW = null === (ZW = null !== cW && void 0 !== cW ? cW : lW) || void 0 === ZW ? void 0 : ZW.stick;
          "left" === AW && iW.left ? this.leftStickConsumed = !1 : "right" === AW && iW.right && (this.rightStickConsumed = !1), this.peek = cW, EW || null === WW ? EW && (null === (xW = this.idleResume) || void 0 === xW ? void 0 : xW.name) === EW.name && (this.idleResume.left && (this.leftStickConsumed = !1), this.idleResume.right && (this.rightStickConsumed = !1)) : this.idleResume = {
            name: WW,
            left: iW.left && this.leftStickConsumed,
            right: iW.right && this.rightStickConsumed
          }, EW && (this.idleResume = null);
          for (let EW = 0; EW < mW.M; EW++) this.previousHeld[EW] && !this.BL[EW] && (this.suppressedReleases[EW] = !0)
        }
        var lW, AW;
        (this.handOffPending = !1, EW) && (OW && !NW.has(EW.name) && this.consumeWakePress(EW), EW.onFrame(this.buildInput(WW, iW, OW)), this.peek && (null === (lW = this.consumers.get(this.peek.over)) || void 0 === lW || null === (AW = lW.onPeekFrame) || void 0 === AW || AW.call(lW, this.buildInput(WW, iW, !1, this.peek.stick))))
      }
      consumeWakePress(WW) {
        for (let EW = 0; EW < mW.M; EW++) {
          var iW, OW;
          const NW = mW.Q[EW];
          (null !== (iW = null === (OW = WW.wakePressActs) || void 0 === OW ? void 0 : OW.call(WW, NW)) && void 0 !== iW ? iW : PW.includes(NW)) || (this.BL[EW] ? this.consumedButtons[EW] = !0 : this.lastFrame.values[EW] >= mW.K && (this.wakeOwned[EW] = !0))
        }
      }
      pickActive() {
        for (const WW of EW) {
          const iW = this.consumers.get(WW);
          if (iW && iW.isActive()) return iW
        }
        return null
      }
      deactivateCurrent() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        var OW, mW, EW, NW;
        this.activeName && (null === (OW = this.consumers.get(this.activeName)) || void 0 === OW || null === (mW = OW.onDeactivate) || void 0 === mW || mW.call(OW, WW));
        this.peek && !iW && (null === (EW = this.consumers.get(this.peek.over)) || void 0 === EW || null === (NW = EW.onDeactivate) || void 0 === NW || NW.call(EW, !1));
        this.peek = null
      }
      consumeAllHeld() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.idleResume = null;
        for (let EW = 0; EW < mW.M; EW++) this.BL[EW] && (this.consumedButtons[EW] = !0);
        const {
          leftStick: iW,
          rightStick: OW
        } = this.lastFrame;
        this.leftStickConsumed = "left" !== WW && (this.leftStickConsumed || Math.hypot(iW.x, iW.y) >= cW), this.rightStickConsumed = "right" !== WW && (this.rightStickConsumed || Math.hypot(OW.x, OW.y) >= cW)
      }
      handOffHeldInput() {
        this.handOffPending = !0
      }
      consumeButton(WW) {
        const iW = (0, mW.m)(WW);
        this.BL[iW] && (this.consumedButtons[iW] = !0)
      }
      buildInput(WW, iW, OW, EW) {
        const NW = this.BL,
          PW = this.previousHeld,
          LW = EW ? new Array(mW.M).fill(!0) : [...this.consumedButtons],
          cW = EW ? LW : [...this.suppressedReleases],
          wW = !this.leftStickConsumed && (!EW || "left" === EW),
          tW = !this.rightStickConsumed && (!EW || "right" === EW);
        return {
          frame: WW,
          dtMs: iW,
          isHeld: WW => {
            const iW = (0, mW.m)(WW);
            return NW[iW] && !LW[iW]
          },
          wasPressed: WW => {
            const iW = (0, mW.m)(WW);
            return NW[iW] && !PW[iW] && !LW[iW]
          },
          wasReleased: WW => {
            const iW = (0, mW.m)(WW);
            return !NW[iW] && PW[iW] && !cW[iW]
          },
          value: iW => {
            const OW = (0, mW.m)(iW);
            return LW[OW] ? 0 : WW.values[OW]
          },
          leftStick: wW ? WW.leftStick : {
            x: 0,
            y: 0
          },
          rightStick: tW ? WW.rightStick : {
            x: 0,
            y: 0
          },
          wokeDevice: OW
        }
      }
    }
  },
  9384: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => ZW.e,
      i: () => ZW.f,
      m: () => hW,
      q: () => HW,
      r: () => nW,
      s: () => uW
    });
    var mW = OW(62),
      EW = OW(27),
      NW = OW(1526),
      PW = OW(39),
      LW = OW(9393),
      cW = OW(9364),
      wW = OW(9382),
      tW = OW(9357),
      ZW = OW(2111),
      xW = OW(9400);
    const lW = {
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
      AW = "controllerSettings",
      bW = ["bindings", "promptFamily", "hideButtonHints", "swapSticks", "swapConfirmBack", "leaderboardButton"],
      jW = ["auto", ...LW.b],
      UW = (WW, iW) => "string" === typeof iW && WW.includes(iW),
      kW = WW => iW => "number" === typeof iW && Number.isFinite(iW) ? (0, xW.w)(iW, WW) : void 0,
      sW = WW => "boolean" === typeof WW ? WW : void 0,
      MW = WW => iW => UW(WW, iW) ? iW : void 0,
      KW = {
        lookSensitivityX: kW(xW.eb),
        lookSensitivityY: kW(xW.eb),
        aimLookSensitivity: kW(xW.l),
        invertLookX: sW,
        invertLookY: sW,
        lookCurve: MW(cW.I),
        lookDeadzone: kW(xW.y),
        moveDeadzone: kW(xW.y),
        swapSticks: sW,
        autoSprint: sW,
        sneakMode: MW(["toggle", "hold"]),
        tapHoldTime: MW(["short", "medium", "long"]),
        attackMode: MW(["hold", "toggle"]),
        promptFamily: MW(jW),
        hideButtonHints: sW,
        vibration: sW,
        cursorSpeed: kW(xW.x),
        cursorMagnetism: sW,
        buttonRepeat: MW(cW.q),
        largePointer: sW,
        menuBackToCategories: sW,
        swapConfirmBack: sW,
        menuNavigation: MW(["hybrid", "focus", "cursor"]),
        inventoryNavigation: MW(["hybrid", "slot", "cursor"]),
        quickChat: MW(["wheel", "off"]),
        leaderboardButton: MW(["shop", "leaderboard"]),
        gyroAiming: sW,
        gyroSensitivity: kW(xW.J),
        gyroActivation: MW(["always", "aiming", "button"]),
        gyroButton: MW(cW.Q),
        emoteButton: MW(["tapHold", "wheel"])
      },
      SW = [{
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
      YW = WW => {
        const iW = {};
        if ("object" !== typeof WW || null === WW) return iW;
        for (const [OW, mW] of Object.entries(WW)) Object.prototype.hasOwnProperty.call(wW.k, OW) && UW(cW.Q, mW) && (iW[OW] = mW);
        return iW
      },
      yW = WW => {
        const iW = {};
        for (const OW of Object.keys(lW))("bindings" === OW ? Object.keys(WW.bindings).length > 0 : WW[OW] !== lW[OW]) && (iW[OW] = WW[OW]);
        0 !== Object.keys(iW).length ? PW.i.setItem(AW, iW) : PW.i.removeItem(AW)
      };
    let TW = (() => {
        const WW = PW.i.getItem(AW),
          iW = (WW => {
            const iW = "object" === typeof WW && null !== WW ? WW : {},
              OW = {
                ...lW,
                bindings: YW(iW.bindings)
              };
            for (const EW of Object.keys(KW)) {
              const WW = KW[EW](iW[EW]);
              void 0 !== WW && (OW[EW] = WW)
            }
            const mW = Object.keys(iW).filter((WW => !!Object.prototype.hasOwnProperty.call(lW, WW) && ("bindings" === WW ? "object" !== typeof iW.bindings || null === iW.bindings || Object.keys(iW.bindings).length !== Object.keys(OW.bindings).length : OW[WW] !== iW[WW])));
            return mW.length > 0 && console.warn(`Stored controller settings had invalid values, replaced with defaults: ${mW.join(", ")}`), OW
          })(WW);
        return null !== WW && void 0 !== WW && yW(iW), iW
      })(),
      JW = {
        ...TW,
        ...(() => {
          if ("undefined" === typeof window) return {};
          const WW = {},
            iW = new URLSearchParams(window.location.search);
          for (const {
              param: OW,
              key: mW
            }
            of SW) {
            const EW = KW[mW](iW.get(OW));
            void 0 !== EW && (WW[mW] = EW)
          }
          return WW
        })()
      };
    const hW = () => JW,
      HW = () => {
        var WW, iW;
        const OW = hW().promptFamily;
        return "auto" !== OW ? OW : null !== (WW = null === (iW = tW.d.getActivePad()) || void 0 === iW ? void 0 : iW.family) && void 0 !== WW ? WW : "xbox"
      },
      nW = WW => {
        const iW = JW;
        TW = {
          ...TW,
          ...WW
        }, yW(TW), JW = {
          ...JW,
          ...WW
        }, (WW => {
          EW.l.iZ(ZW.f, JW), bW.some((iW => WW[iW] !== JW[iW])) && EW.l.iZ(ZW.e, JW)
        })(iW)
      },
      uW = () => {
        const [WW, iW] = (0, mW.useState)(JW);
        return (0, NW.e)(ZW.f, iW), WW
      }
  },
  9899: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => EW
    });
    const mW = new Set(["Alt", "AltGraph", "Meta", "OS", "AudioVolumeUp", "AudioVolumeDown", "AudioVolumeMute", "MediaPlayPause", "MediaPlay", "MediaPause", "MediaStop", "MediaTrackNext", "MediaTrackPrevious", "BrowserBack", "BrowserForward", "BrowserHome", "GoBack", "LaunchApplication1", "LaunchApplication2", "LaunchMail", "PrintScreen", "Unidentified"]),
      EW = WW => mW.has(WW)
  },
  9357: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => bW.b,
      d: () => sW
    });
    var mW = OW(9364),
      EW = OW(9373);
    const NW = .1,
      PW = .3;
    class LW {
      constructor() {
        this.deadzone = 0, this.anchor = null, this.steadyMs = 0, this.lastMs = null, this.returning = !0, this.anchorLearned = !1
      }
      observe(WW, iW) {
        const OW = null === this.lastMs ? 0 : Math.min(Math.max(0, iW - this.lastMs), 100);
        this.lastMs = iW;
        const mW = Math.hypot(WW.x, WW.y);
        if (mW >= PW) return this.anchor = null, void(this.returning = !0);
        mW >= NW || (this.returning = !1);
        const EW = this.anchor;
        if (!EW || Math.hypot(WW.x - EW.x, WW.y - EW.y) > .03) return this.anchorLearned && (this.returning = !1), this.anchor = {
          x: WW.x,
          y: WW.y
        }, this.steadyMs = 0, void(this.anchorLearned = !1);
        if (this.steadyMs += OW, this.steadyMs < 1e3) return;
        const LW = Math.max(mW, Math.hypot(EW.x, EW.y));
        LW < NW ? this.deadzone = 0 : this.returning && (this.deadzone = LW + .05, this.anchorLearned = !0)
      }
      getDeadzone() {
        return this.deadzone
      }
      apply(WW) {
        return Math.hypot(WW.x, WW.y) < this.deadzone ? {
          x: 0,
          y: 0
        } : WW
      }
    }
    const cW = (WW, iW) => {
        var OW, mW;
        return null !== (OW = WW && (null === (mW = Object.getOwnPropertyDescriptor(WW, iW)) || void 0 === mW ? void 0 : mW.get)) && void 0 !== OW ? OW : null
      },
      wW = WW => {
        const iW = WW.vendorName;
        return "string" === typeof iW ? iW : void 0
      },
      tW = ((WW, iW) => {
        const OW = cW(WW, "index"),
          mW = cW(WW, "id"),
          EW = cW(WW, "connected"),
          NW = cW(WW, "mapping"),
          PW = cW(WW, "buttons"),
          LW = cW(WW, "axes"),
          tW = cW(iW, "pressed"),
          ZW = cW(iW, "value");
        return OW && mW && EW && NW && PW && LW && tW && ZW ? WW => {
          const iW = PW.call(WW),
            cW = LW.call(WW),
            xW = {
              index: Number(OW.call(WW)),
              id: String(mW.call(WW)),
              connected: !0 === EW.call(WW),
              mapping: String(NW.call(WW)),
              buttons: [],
              axes: [],
              vendorName: wW(WW)
            };
          for (let OW = 0; OW < iW.length; OW++) xW.buttons.push({
            pressed: !0 === tW.call(iW[OW]),
            value: Number(ZW.call(iW[OW]))
          });
          for (let OW = 0; OW < cW.length; OW++) xW.axes.push(Number(cW[OW]));
          return xW
        } : null
      })("undefined" === typeof Gamepad ? null : Gamepad.prototype, "undefined" === typeof GamepadButton ? null : GamepadButton.prototype),
      ZW = "undefined" === typeof Navigator ? null : Navigator.prototype.getGamepads;
    var xW = OW(1487),
      lW = OW(1495);
    const AW = WW => ({
      pressed: WW,
      value: WW ? 1 : 0
    });
    var bW = OW(2111);
    const jW = PW,
      UW = WW => {
        const iW = new Array(mW.M).fill(0);
        for (let OW = 0; OW < mW.M && OW < WW.buttons.length; OW++) {
          const EW = WW.buttons[OW];
          iW[OW] = EW.pressed && !(0, mW.H)(OW) ? Math.max(EW.value, mW.w) : EW.value
        }
        return iW
      },
      kW = (WW, iW) => {
        var OW, mW;
        return {
          x: null !== (OW = WW.axes[iW]) && void 0 !== OW ? OW : 0,
          y: null !== (mW = WW.axes[iW + 1]) && void 0 !== mW ? mW : 0
        }
      };
    const sW = new class {
      constructor(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : tW;
        this.readGamepads = WW, this.requireTrustedPads = iW, this.nativeReader = OW, this.running = !1, this.listening = !1, this.rafId = 0, this.lastTimestampMs = 0, this.activeInfo = null, this.slots = [], this.trustedIndices = new Set, this.warnedNonStandardIds = new Set, this.loggedReadError = !1, this.frameListeners = new Set, this.connectionListeners = new Set, this.anyPadConnected = !1, this.connectedListeners = new Set, this.handleConnectionEvent = WW => {
          WW.isTrusted && this.trustedIndices.add(WW.gamepad.index), this.wake()
        }, this.handleDisconnectionEvent = WW => {
          this.trustedIndices.delete(WW.gamepad.index)
        }, this.hZ = WW => {
          if (this.rafId = 0, !this.running) return;
          const iW = 0 === this.lastTimestampMs ? 16 : Math.min(100, WW - this.lastTimestampMs);
          this.lastTimestampMs = WW;
          try {
            this.poll(WW, iW)
          } finally {
            this.anyPadConnected && (this.rafId = requestAnimationFrame(this.hZ))
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
      onFrame(WW) {
        return this.frameListeners.add(WW), () => {
          this.frameListeners.delete(WW)
        }
      }
      onActivePadChanged(WW) {
        return this.connectionListeners.add(WW), () => {
          this.connectionListeners.delete(WW)
        }
      }
      getActivePad() {
        return this.activeInfo
      }
      hasConnectedPad() {
        return this.anyPadConnected
      }
      onConnectedPadsChanged(WW) {
        return this.connectedListeners.add(WW), () => {
          this.connectedListeners.delete(WW)
        }
      }
      getActiveGamepad() {
        if (!this.activeInfo) return null;
        const WW = this.readPads()[this.activeInfo.index],
          iW = WW ? this.readPad(WW) : null;
        return iW && iW.id === this.activeInfo.id ? WW : null
      }
      poll(WW, iW) {
        var OW, EW;
        const NW = this.readPads();
        let PW = null,
          cW = !1;
        const wW = [],
          tW = Math.max(NW.length, this.slots.length);
        for (let sW = 0; sW < tW; sW++) {
          var ZW;
          const iW = sW < NW.length ? NW[sW] : null,
            OW = iW ? this.readPad(iW) : null;
          if (!OW || !OW.connected || !this.isUsable(OW)) {
            this.slots[sW] = null;
            continue
          }
          let EW = this.slots[sW];
          EW && EW.id === OW.id || (EW = {
            id: OW.id,
            BL: [],
            leftSettled: !1,
            rightSettled: !1,
            leftRest: new LW,
            rightRest: new LW
          }, this.slots[sW] = EW);
          const tW = kW(OW, 0),
            xW = kW(OW, 2);
          !EW.leftSettled && Math.hypot(tW.x, tW.y) < jW && (EW.leftSettled = !0), !EW.rightSettled && Math.hypot(xW.x, xW.y) < jW && (EW.rightSettled = !0), EW.leftRest.observe(tW, WW), EW.rightRest.observe(xW, WW);
          const lW = UW(OW),
            AW = (0, mW.t)(lW, EW.BL),
            bW = EW.BL,
            MW = AW.map(((WW, iW) => WW && !bW[iW]));
          EW.BL = AW;
          const KW = {
            pad: OW,
            slot: EW,
            values: lW
          };
          sW === (null === (ZW = this.activeInfo) || void 0 === ZW ? void 0 : ZW.index) && OW.id === this.activeInfo.id ? (PW = KW, cW = MW.includes(!0)) : MW.includes(!0) && wW.push({
            polled: KW,
            rose: MW
          })
        }
        const xW = this.slots.some((WW => null !== WW));
        if (xW !== this.anyPadConnected) {
          this.anyPadConnected = xW;
          for (const WW of this.connectedListeners) WW()
        }
        const lW = null !== (OW = null === (EW = PW) || void 0 === EW ? void 0 : EW.slot.BL) && void 0 !== OW ? OW : [],
          AW = cW ? void 0 : wW.find((WW => {
            let {
              rose: iW
            } = WW;
            return iW.some(((WW, iW) => WW && !lW[iW]))
          }));
        if (AW ? (PW = AW.polled, this.setActive(AW.polled.pad)) : this.activeInfo && !PW && this.setActive(null), !PW || !this.activeInfo) return;
        const bW = ((WW, iW) => {
          let {
            pad: OW,
            slot: EW,
            values: NW
          } = WW;
          const PW = (0, mW.v)(iW);
          return PW.values = NW, EW.leftSettled && (PW.leftStick = EW.leftRest.apply(kW(OW, 0))), EW.rightSettled && (PW.rightStick = EW.rightRest.apply(kW(OW, 2))), PW
        })(PW, WW);
        for (const mW of this.frameListeners) mW(bW, iW, this.activeInfo)
      }
      readPad(WW) {
        const iW = this.readSnapshot(WW);
        return iW && (0, lW.d)(iW) ? (WW => {
          const iW = iW => {
              var OW;
              return null !== (OW = WW.buttons[iW]) && void 0 !== OW ? OW : AW(!1)
            },
            OW = iW => {
              var OW;
              return null !== (OW = WW.axes[iW]) && void 0 !== OW ? OW : 0
            },
            mW = WW.axes.length > 9,
            EW = mW ? (WW => {
              const iW = 0 !== WW;
              return {
                up: iW && (WW >= -1 && WW < -.7 || WW >= .95 && WW <= 1),
                right: iW && WW >= -.75 && WW < -.1,
                down: iW && WW >= -.2 && WW < .45,
                left: iW && WW >= .4 && WW <= 1
              }
            })(OW(9)) : {
              up: OW(5) < -.5,
              down: OW(5) > .5,
              left: OW(4) < -.5,
              right: OW(4) > .5
            };
          return {
            ...WW,
            mapping: "standard",
            buttons: [iW(1), iW(2), iW(0), iW(3), iW(4), iW(5), iW(6), iW(7), iW(8), iW(9), iW(10), iW(11), AW(EW.up), AW(EW.down), AW(EW.left), AW(EW.right), iW(12)],
            axes: [OW(0), OW(1), OW(2), OW(mW ? 5 : 3)]
          }
        })(iW) : iW
      }
      readSnapshot(WW) {
        if (this.nativeReader) try {
          return this.nativeReader(WW)
        } catch {
          if (this.requireTrustedPads) return null
        }
        return this.requireTrustedPads ? null : (WW => {
          const iW = WW;
          return {
            index: iW.index,
            id: iW.id,
            connected: iW.connected,
            mapping: iW.mapping,
            buttons: Array.from(iW.buttons, (WW => ({
              pressed: WW.pressed,
              value: WW.value
            }))),
            axes: Array.from(iW.axes),
            vendorName: wW(WW)
          }
        })(WW)
      }
      isUsable(WW) {
        return !(0, xW.g)(WW.id) && ("standard" !== WW.mapping ? (this.warnedNonStandardIds.has(WW.id) || (this.warnedNonStandardIds.add(WW.id), console.warn(`Controller "${WW.id}" has no standard button mapping, so it is ignored.`)), !1) : !this.requireTrustedPads || this.trustedIndices.has(WW.index))
      }
      setActive(WW) {
        this.activeInfo = WW ? {
          index: WW.index,
          id: WW.id,
          family: (0, EW.c)(WW.id, WW.vendorName)
        } : null;
        for (const iW of this.connectionListeners) iW(this.activeInfo)
      }
      readPads() {
        try {
          return this.readGamepads()
        } catch (WW) {
          return this.loggedReadError || (this.loggedReadError = !0, console.warn("Reading gamepads failed; controller input is unavailable.", WW)), []
        }
      }
      wake() {
        this.running && 0 === this.rafId && (this.lastTimestampMs = 0, this.rafId = requestAnimationFrame(this.hZ))
      }
    }((() => ZW ? ZW.call(navigator) : []), !0);
    sW.listenForConnections()
  },
  9968: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => NW,
      f: () => PW,
      i: () => LW,
      j: () => EW
    });
    var mW = OW(9972);
    const EW = WW => {
        const iW = [];
        WW.holdingGun && iW.push({
          kind: "reload"
        }), WW.touchscreenActionButton && iW.push({
          kind: "touchButton",
          label: WW.touchscreenActionButton
        });
        for (const NW of null !== (OW = null === (EW = WW.customButtons) || void 0 === EW ? void 0 : EW.filter(mW.e)) && void 0 !== OW ? OW : []) {
          var OW, EW;
          iW.push({
            kind: "customButton",
            id: NW.id,
            icon: NW.icon,
            description: NW.description
          })
        }
        return iW
      },
      NW = WW => WW.length >= 2,
      PW = WW => "specialAction" !== WW.kind,
      LW = (WW, iW) => {
        if (null === WW || null === iW) return WW === iW;
        if (WW.kind !== iW.kind) return !1;
        switch (WW.kind) {
          case "reload":
            return !0;
          case "specialAction":
            return WW.action === iW.action;
          case "customButton":
            return WW.id === iW.id && WW.icon === iW.icon;
          case "touchButton":
            return WW.label === iW.label
        }
      }
  },
  9908: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => mW
    });
    const mW = {
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
  9966: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => tW,
      e: () => lW,
      f: () => ZW,
      g: () => AW
    });
    var mW = OW(62),
      EW = OW(27),
      NW = OW(1526),
      PW = OW(9968),
      LW = OW(9976);
    let cW = null;
    const wW = () => cW,
      tW = WW => {
        (0, PW.i)(cW, WW) || (cW = WW, EW.l.iZ(LW.g, cW))
      },
      ZW = () => {
        const [WW, iW] = (0, mW.useState)(wW);
        return (0, NW.e)(LW.g, iW), WW
      };
    let xW = !1;
    const lW = WW => {
        WW !== xW && (xW = WW, EW.l.iZ(LW.i, WW))
      },
      AW = () => {
        const [WW, iW] = (0, mW.useState)(xW);
        return (0, NW.e)(LW.i, iW), WW
      }
  },
  9986: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => PW,
      g: () => LW
    });
    var mW = OW(27),
      EW = OW(9976);
    let NW = !1;
    const PW = () => NW,
      LW = WW => {
        WW !== NW && (NW = WW, mW.l.iZ(EW.j, NW))
      }
  },
  9980: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => LW,
      e: () => cW
    });
    var mW = OW(27),
      EW = OW(9976);
    let NW = null,
      PW = 0;
    const LW = () => NW,
      cW = WW => {
        null === WW && null === NW || (NW = null === WW ? null : {
          id: ++PW,
          holdMs: WW
        }, mW.l.iZ(EW.m, NW))
      }
  },
  9976: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => NW,
      g: () => mW,
      i: () => EW,
      j: () => LW,
      m: () => cW,
      n: () => wW,
      r: () => PW
    });
    const mW = "controllerActionHintChanged",
      EW = "controllerActionWheelHintChanged",
      NW = "controllerOpenChat",
      PW = "controllerSneakToggledChanged",
      LW = "controllerAttackLatchedChanged",
      cW = "controllerDropStackHoldChanged",
      wW = "controllerPickBlockHintChanged"
  },
  9988: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => PW,
      d: () => LW
    });
    var mW = OW(27),
      EW = OW(9976);
    let NW = !1;
    const PW = () => NW,
      LW = WW => {
        WW !== NW && (NW = WW, mW.l.iZ(EW.n, NW))
      }
  },
  10053: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => PW,
      g: () => LW
    });
    var mW = OW(27),
      EW = OW(9976);
    let NW = !1;
    const PW = () => NW,
      LW = WW => {
        WW !== NW && (NW = WW, mW.l.iZ(EW.r, NW))
      }
  },
  9946: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => mW
    });
    class mW {
      constructor() {
        this.downAtMs = null
      }
      update(WW, iW, OW, mW) {
        if (WW) return this.downAtMs = OW, null;
        if (null === this.downAtMs) return null;
        const EW = OW - this.downAtMs >= mW;
        return iW ? EW ? (this.downAtMs = null, "hold") : null : (this.downAtMs = null, EW ? "hold" : "tap")
      }
      release() {
        this.downAtMs = null
      }
    }
  },
  9425: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => ZW,
      d: () => xW,
      h: () => LW,
      l: () => sW,
      n: () => kW
    });
    var mW = OW(39),
      EW = OW(9393),
      NW = OW(9364);
    const PW = (() => {
        try {
          return OW(9433)
        } catch {
          return null
        }
      })(),
      LW = [...NW.Q, "LeftStick", "RightStick"],
      cW = new Map,
      wW = {
        xbox: "xbox",
        playstation: "playstation",
        nintendo: "nintendo",
        steamdeck: "steamdeck",
        generic: "xbox"
      },
      tW = (new Set(Object.values(wW)), {
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
      ZW = (WW, iW) => {
        var OW, mW;
        return null !== (OW = null === (mW = tW[wW[WW]]) || void 0 === mW ? void 0 : mW[iW]) && void 0 !== OW ? OW : 1
      },
      xW = (WW, iW) => {
        const OW = `./${wW[WW]}/${iW}.svg`;
        let mW = cW.get(OW);
        return void 0 === mW && (mW = PW ? PW(OW) : "", cW.set(OW, mW)), mW
      },
      lW = new Set,
      AW = [],
      bW = WW => {
        if (!lW.has(WW)) {
          lW.add(WW);
          for (const iW of LW) {
            const OW = xW(WW, iW);
            if (OW) {
              const WW = new Image;
              WW.crossOrigin = "anonymous", WW.src = OW, AW.push(WW)
            }
          }
        }
      },
      jW = "controllerGlyphFamily";
    let UW = null;
    const kW = WW => {
        WW !== UW && (UW = WW, mW.i.setItem(jW, WW), bW(WW))
      },
      sW = () => {
        const WW = mW.i.getItem(jW);
        (0, EW.e)(WW) && WW !== UW && (UW = WW, bW(WW))
      }
  },
  10079: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => VW,
      g: () => pW
    });
    var mW = OW(62),
      EW = OW(27),
      NW = OW(1526),
      PW = OW(9379),
      LW = OW(9357),
      cW = OW(9413),
      wW = OW(9384);
    const tW = {
        x: 0,
        y: 0,
        z: 0
      },
      ZW = Math.PI / 180,
      xW = WW => Math.hypot(WW.x, WW.y, WW.z),
      lW = (WW, iW) => ({
        x: WW.x * iW,
        y: WW.y * iW,
        z: WW.z * iW
      }),
      AW = (WW, iW) => ({
        x: WW.x + iW.x,
        y: WW.y + iW.y,
        z: WW.z + iW.z
      }),
      bW = (WW, iW) => ({
        x: WW.x - iW.x,
        y: WW.y - iW.y,
        z: WW.z - iW.z
      }),
      jW = WW => {
        const iW = xW(WW);
        return 0 === iW ? tW : lW(WW, 1 / iW)
      },
      UW = WW => ({
        min: {
          ...WW
        },
        max: {
          ...WW
        }
      }),
      kW = (WW, iW) => ({
        min: {
          x: Math.min(WW.min.x, iW.x),
          y: Math.min(WW.min.y, iW.y),
          z: Math.min(WW.min.z, iW.z)
        },
        max: {
          x: Math.max(WW.max.x, iW.x),
          y: Math.max(WW.max.y, iW.y),
          z: Math.max(WW.max.z, iW.z)
        }
      }),
      sW = (WW, iW) => WW.max.x - WW.min.x <= iW && WW.max.y - WW.min.y <= iW && WW.max.z - WW.min.z <= iW;
    class MW {
      constructor() {
        this.bias = tW, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = tW, this.windowSec = 0
      }
      update(WW) {
        const iW = this.gyroRange ? kW(this.gyroRange, WW.gyro) : UW(WW.gyro),
          OW = WW.accel ? this.accelRange ? kW(this.accelRange, WW.accel) : UW(WW.accel) : null;
        if (!sW(iW, 1) || OW && !sW(OW, .01)) return void this.restartWindow(WW);
        if (this.gyroRange = iW, this.accelRange = OW, this.sum = AW(this.sum, lW(WW.gyro, WW.dtSec)), this.windowSec += WW.dtSec, this.windowSec < 1) return;
        const mW = lW(this.sum, 1 / this.windowSec);
        if (xW(mW) > 5) return;
        const EW = bW(mW, this.bias);
        let NW = 0;
        !this.calibrated || this.windowSec >= 3 ? NW = 1 : xW(EW) <= 1 && (NW = Math.min(1, WW.dtSec / 1)), this.bias = AW(this.bias, lW(EW, NW)), this.calibrated = this.calibrated || NW > 0
      }
      correct(WW) {
        return bW(WW, this.bias)
      }
      getBias() {
        return this.bias
      }
      isCalibrated() {
        return this.calibrated
      }
      reset() {
        this.bias = tW, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = tW, this.windowSec = 0
      }
      restartWindow(WW) {
        this.gyroRange = UW(WW.gyro), this.accelRange = WW.accel ? UW(WW.accel) : null, this.sum = tW, this.windowSec = 0
      }
    }
    class KW {
      constructor() {
        this.down = null
      }
      update(WW, iW, OW) {
        const mW = jW(lW(iW, -1));
        if (!this.down) return this.down = mW, mW;
        const EW = lW(WW, ZW * OW),
          NW = this.down,
          PW = {
            x: NW.x - (EW.y * NW.z - EW.z * NW.y),
            y: NW.y - (EW.z * NW.x - EW.x * NW.z),
            z: NW.z - (EW.x * NW.y - EW.y * NW.x)
          },
          LW = 0 === xW(mW) ? 0 : Math.min(1, OW / .25);
        var cW, wW;
        return this.down = jW((wW = LW, AW(cW = PW, lW(bW(mW, cW), wW)))), this.down
      }
      reset() {
        this.down = null
      }
    }
    class SW {
      constructor() {
        this.entries = [], this.windowSec = 0
      }
      apply(WW, iW, OW) {
        const mW = Math.hypot(WW, iW),
          EW = Math.max(0, Math.min(1, (mW - 2) / 2)),
          NW = {
            yaw: WW * (1 - EW),
            pitch: iW * (1 - EW),
            dtSec: OW
          };
        for (this.entries.push(NW), this.windowSec += OW; this.entries.length > 1 && this.windowSec - this.entries[0].dtSec >= .125;) this.windowSec -= this.entries[0].dtSec, this.entries.shift();
        let PW = 0,
          LW = 0;
        for (const wW of this.entries) PW += wW.yaw * wW.dtSec, LW += wW.pitch * wW.dtSec;
        const cW = this.windowSec > 0 ? {
          yaw: PW / this.windowSec,
          pitch: LW / this.windowSec
        } : {
          yaw: NW.yaw,
          pitch: NW.pitch
        };
        return {
          yaw: WW * EW + cW.yaw,
          pitch: iW * EW + cW.pitch
        }
      }
      reset() {
        this.entries = [], this.windowSec = 0
      }
    }
    class YW {
      constructor() {
        this.calibrator = new MW, this.gravity = new KW, this.smoother = new SW
      }
      process(WW, iW, OW) {
        const mW = Math.max(0, Math.min(.05, iW));
        this.calibrator.update({
          ...WW,
          dtSec: mW
        });
        const EW = this.calibrator.correct(WW.gyro);
        let NW = EW.y;
        "player" === OW && WW.accel && (NW = ((WW, iW) => {
          const OW = WW.y * iW.y + WW.z * iW.z;
          return -Math.sign(OW) * Math.min(1.41 * Math.abs(OW), Math.hypot(WW.y, WW.z))
        })(EW, this.gravity.update(EW, WW.accel, mW)));
        const PW = this.smoother.apply(NW, EW.x, mW),
          LW = ((WW, iW) => {
            const OW = Math.hypot(WW, iW);
            if (OW >= 1) return {
              yaw: WW,
              pitch: iW
            };
            const mW = OW / 1;
            return {
              yaw: WW * mW,
              pitch: iW * mW
            }
          })(PW.yaw, PW.pitch);
        return {
          yawDeg: LW.yaw * mW,
          pitchDeg: LW.pitch * mW
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
    const yW = (WW, iW) => {
      var OW, mW, EW;
      const NW = iW * ZW,
        PW = null !== (OW = WW.beta) && void 0 !== OW ? OW : 0,
        LW = null !== (mW = WW.gamma) && void 0 !== mW ? mW : 0;
      return {
        x: PW * Math.cos(NW) - LW * Math.sin(NW),
        y: PW * Math.sin(NW) + LW * Math.cos(NW),
        z: null !== (EW = WW.alpha) && void 0 !== EW ? EW : 0
      }
    };
    var TW = OW(10085);
    class JW {
      constructor(WW, iW, OW) {
        this.hid = WW, this.sink = iW, this.onControllersChanged = OW, this.controllers = new Map, this.running = !1, this.openedCount = 0, this.opening = new Set, this.disconnectedWhileOpening = new Set, this.switchPacketCounter = 0, this.onConnect = WW => {
          this.openController(WW.device).catch((WW => {
            console.warn("Could not open motion controller", WW)
          }))
        }, this.onDisconnect = WW => {
          this.opening.has(WW.device) && this.disconnectedWhileOpening.add(WW.device);
          const iW = this.controllers.get(WW.device);
          iW && (this.forget(iW), this.onControllersChanged())
        }
      }
      async start() {
        if (this.running) return;
        this.running = !0, this.hid.addEventListener("connect", this.onConnect), this.hid.addEventListener("disconnect", this.onDisconnect);
        const WW = await this.hid.getDevices();
        for (const iW of WW) await this.openController(iW).catch((WW => {
          console.warn("Could not open motion controller", WW)
        }))
      }
      stop() {
        this.running = !1, this.hid.removeEventListener("connect", this.onConnect), this.hid.removeEventListener("disconnect", this.onDisconnect);
        for (const WW of [...this.controllers.values()]) this.forget(WW);
        this.onControllersChanged()
      }
      async request() {
        const WW = await this.hid.requestDevice({
          filters: TW.i
        });
        let iW = 0;
        for (const OW of WW) await this.openController(OW).catch((WW => {
          console.warn("Could not open motion controller", WW), iW++
        }));
        return iW
      }
      async hasGrantedController() {
        return (await this.hid.getDevices()).some((WW => null !== (0, TW.d)(WW.vendorId, WW.productId)))
      }
      getConnectedKinds() {
        return [...this.controllers.values()].map((WW => WW.kind))
      }
      forget(WW) {
        WW.device.removeEventListener("inputreport", WW.onReport), this.controllers.get(WW.device) === WW && this.controllers.delete(WW.device)
      }
      async openController(WW) {
        const iW = (0, TW.d)(WW.vendorId, WW.productId);
        if (!iW || !this.running || this.controllers.has(WW) || this.opening.has(WW)) return;
        this.opening.add(WW);
        let OW = !1;
        try {
          WW.opened || await WW.open()
        } finally {
          this.opening.delete(WW), OW = this.disconnectedWhileOpening.delete(WW)
        }
        if (OW) return void WW.close().catch((WW => {
          console.debug("Could not close an unplugged motion controller", WW)
        }));
        if (!this.running) return;
        const mW = {
          device: WW,
          kind: iW,
          lastClock: null,
          lastEventMs: null,
          lastReadingMs: -1 / 0,
          openedOrder: this.openedCount++,
          onReport: WW => {
            this.onReport(mW, WW)
          }
        };
        this.controllers.set(WW, mW), WW.addEventListener("inputreport", mW.onReport), this.onControllersChanged();
        try {
          await this.enableMotion(mW)
        } catch (EW) {
          console.warn(`Could not turn on motion for ${iW}`, EW), this.controllers.get(WW) === mW && (this.forget(mW), this.onControllersChanged())
        }
      }
      async enableMotion(WW) {
        let {
          device: iW,
          kind: OW
        } = WW;
        if ((0, TW.g)(OW))
          for (const mW of TW.z[OW]) await iW.receiveFeatureReport(mW).catch((WW => {
            console.debug(`Motion controller feature report ${mW} unavailable`, WW)
          }));
        else
          for (let mW = 0; mW < 2; mW++)
            for (const {
                subcommand: WW,
                args: OW
              }
              of TW.D) await iW.sendReport(TW.F, (0, TW.c)(this.switchPacketCounter++, WW, OW)), await new Promise((WW => {
              setTimeout(WW, 60)
            }))
      }
      onReport(WW, iW) {
        const OW = (0, TW.u)(WW.kind, iW.reportId, iW.data, WW.device.productId);
        if (!OW) return;
        const mW = null === WW.lastEventMs ? 0 : (iW.timeStamp - WW.lastEventMs) / 1e3;
        WW.lastEventMs = iW.timeStamp;
        let EW = OW.dtSec;
        if (null !== EW && mW > 0 && (EW = Math.max(.001, Math.min(.017, mW / OW.readings.length))), null === EW && null !== OW.sensorClock && (0, TW.g)(WW.kind)) {
          const iW = (0, TW.v)(WW.kind, WW.lastClock, OW.sensorClock);
          WW.lastClock = OW.sensorClock, EW = 0 === iW ? null : iW
        }
        if (WW.lastReadingMs = iW.timeStamp, this.isPreferred(WW, iW.timeStamp))
          for (const PW of OW.readings) {
            var NW;
            this.sink(PW, null !== (NW = EW) && void 0 !== NW ? NW : mW, `hid${WW.openedOrder}`)
          }
      }
      isPreferred(WW, iW) {
        const OW = WW => 1e6 * TW.q[WW.kind] + WW.openedOrder;
        for (const mW of this.controllers.values())
          if (mW !== WW && iW - mW.lastReadingMs < 500 && OW(mW) < OW(WW)) return !1;
        return !0
      }
    }
    var hW = OW(100);
    const HW = () => DeviceMotionEvent,
      nW = () => "undefined" !== typeof window && "undefined" !== typeof DeviceMotionEvent && window.isSecureContext && (0, hW.isMobile)(),
      uW = () => {
        var WW;
        const iW = null === (WW = window.screen.orientation) || void 0 === WW ? void 0 : WW.angle;
        return "number" === typeof iW ? iW : "number" === typeof window.orientation ? window.orientation : 0
      };
    class oW {
      constructor(WW, iW) {
        this.sink = WW, this.onStateChanged = iW, this.state = "off", this.lastEventMs = null, this.noSensorTimer = null, this.wanted = !1, this.permissionRequest = null, this.granted = !1, this.onGesture = () => {
          this.requestPermission().catch((WW => {
            console.warn("Could not enable the motion sensor", WW)
          }))
        }, this.onMotion = WW => {
          const iW = WW.rotationRate;
          if (!iW || null === iW.alpha && null === iW.beta && null === iW.gamma) return;
          const OW = null === this.lastEventMs ? 0 : (WW.timeStamp - this.lastEventMs) / 1e3;
          this.lastEventMs = WW.timeStamp, this.clearNoSensorTimer(), this.setState("on"), this.sink({
            gyro: yW(iW, uW()),
            accel: null
          }, OW, "phone")
        }
      }
      getState() {
        return this.state
      }
      start() {
        if (this.wanted = !0, "off" === this.state) return "function" !== typeof HW().requestPermission || this.granted ? void this.listen() : (this.setState("needsPermission"), void this.armGestureRequest())
      }
      requestPermission() {
        return this.permissionRequest || (this.permissionRequest = this.askPermission().finally((() => {
          this.permissionRequest = null
        }))), this.permissionRequest
      }
      async askPermission() {
        const WW = HW().requestPermission;
        if (!this.wanted) return;
        if ("function" !== typeof WW) return void this.listen();
        let iW;
        this.disarmGestureRequest();
        try {
          iW = await WW.call(DeviceMotionEvent)
        } catch (OW) {
          throw this.wanted && "needsPermission" === this.state && this.armGestureRequest(), OW
        }
        this.wanted && ("granted" === iW ? (this.granted = !0, this.listen()) : this.setState("denied"))
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
      setState(WW) {
        this.state !== WW && (this.state = WW, this.onStateChanged())
      }
    }
    const dW = "controllerGyroStatusChanged",
      eW = {
        jH: 0,
        UH: 0
      },
      vW = WW => {
        var iW, OW;
        return "undefined" === typeof document || (null === (iW = null === (OW = document.featurePolicy) || void 0 === OW ? void 0 : OW.allowsFeature(WW)) || void 0 === iW || iW)
      };
    class gW {
      constructor() {
        this.processor = new YW, this.hid = void 0, this.hidBlocked = void 0, this.phone = void 0, this.phoneBlocked = void 0, this.source = null, this.pendingYawDeg = 0, this.pendingPitchDeg = 0, this.lastDrainMs = -1 / 0, this.lastHidReadingMs = -1 / 0, this.running = !1, this.phoneRunning = !1, this.syncWithSettings = WW => {
          const iW = WW.gyroAiming && LW.d.hasConnectedPad();
          var OW, mW;
          iW !== this.phoneRunning && (this.phoneRunning = iW, iW ? null === (OW = this.phone) || void 0 === OW || OW.start() : null === (mW = this.phone) || void 0 === mW || mW.stop());
          if (WW.gyroAiming !== this.running) {
            var EW, NW;
            if (this.running = WW.gyroAiming, this.running) null === (EW = this.hid) || void 0 === EW || EW.start().catch((WW => {
              console.warn("Could not open motion controllers", WW)
            }));
            else null === (NW = this.hid) || void 0 === NW || NW.stop(), this.processor.reset(), this.source = null, this.discardPending();
            this.publishStatus()
          }
        }, this.publishStatus = () => {
          EW.l.iZ(dW, this.getStatus())
        };
        const WW = (() => {
            var WW;
            return "undefined" !== typeof navigator && window.isSecureContext && null !== (WW = navigator.hid) && void 0 !== WW ? WW : null
          })(),
          iW = vW("hid");
        this.hidBlocked = null !== WW && !iW, this.hid = WW && iW ? new JW(WW, ((WW, iW, OW) => {
          this.lastHidReadingMs = performance.now(), this.feed(WW, iW, "player", OW)
        }), this.publishStatus) : null;
        const OW = vW("accelerometer") && vW("gyroscope");
        this.phoneBlocked = nW() && !OW, this.phone = nW() && OW ? new oW(((WW, iW, OW) => {
          performance.now() - this.lastHidReadingMs >= 500 && this.feed(WW, iW, "local", OW)
        }), this.publishStatus) : null, EW.l.subscribe(wW.i, this.syncWithSettings), LW.d.onConnectedPadsChanged((() => {
          this.syncWithSettings((0, wW.m)()), this.publishStatus()
        })), this.syncWithSettings((0, wW.m)())
      }
      isSupported() {
        return null !== this.hid || null !== this.phone
      }
      getStatus() {
        var WW, iW, OW, mW;
        return {
          hidSupported: null !== this.hid,
          hidBlocked: this.hidBlocked,
          phoneSupported: null !== this.phone,
          phoneBlocked: this.phoneBlocked,
          controllers: null !== (WW = null === (iW = this.hid) || void 0 === iW ? void 0 : iW.getConnectedKinds()) && void 0 !== WW ? WW : [],
          phoneMotion: null !== (OW = null === (mW = this.phone) || void 0 === mW ? void 0 : mW.getState()) && void 0 !== OW ? OW : "off",
          padConnected: LW.d.hasConnectedPad()
        }
      }
      async connectController() {
        return this.hid ? this.hid.request() : 0
      }
      async connectControllerIfNoneGranted() {
        this.hid && !await this.hid.hasGrantedController() && await this.hid.request()
      }
      async allowPhoneMotion() {
        var WW;
        await (null === (WW = this.phone) || void 0 === WW ? void 0 : WW.requestPermission())
      }
      drainLookDelta() {
        const WW = performance.now();
        WW - this.lastDrainMs > 500 && this.discardPending(), this.lastDrainMs = WW;
        const iW = {
          yawDeg: this.pendingYawDeg,
          pitchDeg: this.pendingPitchDeg
        };
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0;
        const OW = (0, wW.m)();
        return OW.gyroAiming && (WW => {
          let {
            activation: iW,
            isHeld: OW,
            useButton: mW,
            gyroButton: EW
          } = WW;
          return "always" === iW || OW("aiming" === iW ? mW : EW)
        })({
          activation: OW.gyroActivation,
          isHeld: WW => cW.c.isButtonHeld(WW),
          useButton: (0, PW.h)("use"),
          gyroButton: OW.gyroButton
        }) ? ((WW, iW) => ({
          jH: -WW.yawDeg * iW * ZW,
          UH: -WW.pitchDeg * iW * ZW
        }))(iW, OW.gyroSensitivity) : eW
      }
      discardPending() {
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0
      }
      injectMotion(WW, iW) {
        this.feed(WW, iW, "local", "injected")
      }
      getCalibration() {
        return this.processor.getCalibration()
      }
      feed(WW, iW, OW, mW) {
        this.source !== mW && (this.processor.reset(), this.source = mW);
        const EW = this.processor.process(WW, iW, OW);
        this.pendingYawDeg += EW.yawDeg, this.pendingPitchDeg += EW.pitchDeg
      }
    }
    let DW = null;
    const VW = () => (DW || (DW = new gW), DW),
      pW = () => {
        const [WW, iW] = (0, mW.useState)((() => VW().getStatus()));
        return (0, NW.e)(dW, iW), (0, mW.useEffect)((() => {
          iW(VW().getStatus())
        }), []), WW
      }
  },
  10085: (WW, iW, OW) => {
    OW.d(iW, {
      D: () => SW,
      F: () => sW,
      c: () => KW,
      d: () => cW,
      g: () => mW,
      i: () => LW,
      m: () => wW,
      q: () => tW,
      u: () => kW,
      v: () => jW,
      z: () => YW
    });
    const mW = WW => "dualShock4" === WW || "dualSense" === WW,
      EW = 1356,
      NW = 1406,
      PW = [{
        vendorId: EW,
        productId: 1476,
        kind: "dualShock4"
      }, {
        vendorId: EW,
        productId: 2508,
        kind: "dualShock4"
      }, {
        vendorId: EW,
        productId: 2976,
        kind: "dualShock4"
      }, {
        vendorId: EW,
        productId: 3302,
        kind: "dualSense"
      }, {
        vendorId: EW,
        productId: 3570,
        kind: "dualSense"
      }, {
        vendorId: NW,
        productId: 8201,
        kind: "switchPro"
      }, {
        vendorId: NW,
        productId: 8198,
        kind: "joyConLeft"
      }, {
        vendorId: NW,
        productId: 8199,
        kind: "joyConRight"
      }],
      LW = PW.map((WW => {
        let {
          vendorId: iW,
          productId: OW
        } = WW;
        return {
          vendorId: iW,
          productId: OW
        }
      })),
      cW = (WW, iW) => {
        var OW, mW;
        return null !== (OW = null === (mW = PW.find((OW => OW.vendorId === WW && OW.productId === iW))) || void 0 === mW ? void 0 : mW.kind) && void 0 !== OW ? OW : null
      },
      wW = {
        dualShock4: "DualShock 4",
        dualSense: "DualSense",
        switchPro: "Switch Pro Controller",
        joyConLeft: "Joy-Con (L)",
        joyConRight: "Joy-Con (R)"
      },
      tW = {
        dualSense: 0,
        dualShock4: 0,
        switchPro: 0,
        joyConRight: 1,
        joyConLeft: 2
      },
      ZW = 2e3 / 32767,
      xW = 1 / 8192,
      lW = 936 / 13371,
      AW = (WW, iW, OW) => ({
        x: WW.getInt16(iW, !0) * OW,
        y: WW.getInt16(iW + 2, !0) * OW,
        z: WW.getInt16(iW + 4, !0) * OW
      }),
      bW = WW => 0 === WW.x && 0 === WW.y && 0 === WW.z,
      jW = (WW, iW, OW) => null === iW ? null : "dualShock4" === WW ? 16 * (OW - iW & 65535) / 3 / 1e6 : (OW - iW >>> 0) / 3 / 1e6,
      UW = (WW, iW) => "joyConRight" === iW ? {
        x: WW.y,
        y: -WW.z,
        z: -WW.x
      } : {
        x: -WW.y,
        y: WW.z,
        z: -WW.x
      },
      kW = (WW, iW, OW, EW) => mW(WW) ? ((WW, iW, OW, mW) => {
        const EW = ((WW, iW, OW) => "dualShock4" === WW ? 1 === iW && OW >= 63 ? 0 : 17 === iW && OW >= 65 ? 2 : null : 1 === iW && OW >= 62 ? 0 : 49 === iW && OW >= 63 ? 1 : null)(WW, iW, OW.byteLength);
        if (null === EW) return null;
        if (2976 === mW && 1 === iW && 0 !== (4 & OW.getUint8(30))) return null;
        const NW = EW + ("dualShock4" === WW ? 12 : 15),
          PW = AW(OW, NW, ZW),
          LW = AW(OW, NW + 6, xW);
        return bW(PW) && bW(LW) ? null : {
          readings: [{
            gyro: PW,
            accel: LW
          }],
          dtSec: null,
          sensorClock: "dualShock4" === WW ? OW.getUint16(EW + 9, !0) : OW.getUint32(EW + 27, !0)
        }
      })(WW, iW, OW, EW) : ((WW, iW, OW) => {
        if (48 !== iW && 49 !== iW || OW.byteLength < 48) return null;
        const mW = [];
        for (let EW = 0; EW < 3; EW++) {
          const iW = AW(OW, 12 + 12 * EW, 244e-6),
            NW = AW(OW, 18 + 12 * EW, lW);
          if (bW(NW) && bW(iW)) return null;
          mW.push({
            gyro: UW(NW, WW),
            accel: UW(iW, WW)
          })
        }
        return {
          readings: mW,
          dtSec: .005,
          sensorClock: null
        }
      })(WW, iW, OW),
      sW = 1,
      MW = [0, 1, 64, 64, 0, 1, 64, 64],
      KW = (WW, iW, OW) => new Uint8Array([15 & WW, ...MW, iW, ...OW]),
      SW = [{
        subcommand: 64,
        args: [1]
      }, {
        subcommand: 3,
        args: [48]
      }],
      YW = {
        dualShock4: [2, 5],
        dualSense: [5]
      }
  },
  9417: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => gW,
      g: () => BW,
      k: () => SW,
      l: () => lW.k,
      o: () => pW,
      r: () => VW,
      t: () => YW,
      w: () => fW,
      A: () => lW.r,
      B: () => lW.x,
      D: () => qW,
      H: () => lW.B,
      I: () => oW
    });
    var mW = OW(62),
      EW = OW(25),
      NW = OW(27),
      PW = OW(1526),
      LW = OW(1294),
      cW = OW(9384),
      wW = OW(9421),
      tW = OW(9373),
      ZW = OW(9357),
      xW = OW(9425),
      lW = OW(1459),
      AW = OW(9364),
      bW = OW(9899),
      jW = OW(5052),
      UW = OW(117);
    class kW {
      constructor(WW) {
        this.deps = WW, this.pads = new Map
      }
      observe(WW, iW, OW) {
        if (!this.deps.touchOnly) return;
        const mW = this.pads.get(iW.id);
        "proven" !== mW && OW ? (this.pads.set(iW.id, "proven"), void 0 !== mW && this.deps.onReleased(iW, WW, WW.timestampMs - mW)) : void 0 === mW && (this.pads.set(iW.id, WW.timestampMs), this.deps.onHeld(iW, WW)), this.deps.setMayHide("proven" === this.pads.get(iW.id))
      }
    }
    const sW = WW => WW.values.flatMap(((WW, iW) => WW >= AW.K ? [String(iW)] : [])).join(",") || "none",
      MW = (WW, iW, mW, EW, NW) => {
        const PW = (0, lW.h)(),
          LW = document.visibilityState,
          cW = document.hasFocus(),
          wW = "BL" === WW ? "touch HUD pad held" : "touch HUD pad released";
        Promise.all([Promise.resolve().then((() => OW(3960))), Promise.resolve().then((() => OW(1303))), Promise.resolve().then((() => OW(136)))]).then((OW => {
          let [{
            logControllerHudHoldToGtag: tW
          }, {
            logClientLineFromEveryPage: ZW
          }, {
            siteUsed: xW
          }] = OW;
          tW(WW, iW.family, null === NW ? void 0 : Math.round(NW / 1e3)), ZW(wW, KW(iW, mW, EW, NW, PW, LW, cW, xW))
        }), (() => {}))
      },
      KW = (WW, iW, OW, mW, EW, NW, PW, LW) => {
        var cW;
        const wW = {
          pad_id: WW.id.slice(0, 120),
          pad_family: WW.family,
          pad_mapping: null !== (cW = null === OW || void 0 === OW ? void 0 : OW.mapping) && void 0 !== cW ? cW : "unread",
          pad_axes: OW ? String(OW.axes.length) : "unread",
          pad_buttons: OW ? String(OW.buttons.length) : "unread",
          pressed: sW(iW),
          ms_since_touch: null === EW ? "none" : String(Math.round(iW.timestampMs - EW)),
          visibility: NW,
          focused: String(PW),
          site: LW
        };
        return null !== mW && (wW.held_ms = String(Math.round(mW))), wW
      };
    const SW = WW => !WW.repeat && !(0, bW.e)(WW.key),
      YW = "PadHidesCursor";
    let yW = !1;
    const TW = WW => {
        WW !== yW && (yW = WW, document.documentElement.classList.toggle(YW, WW))
      },
      JW = new class {
        constructor() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
        observe(WW) {
          let iW = !1,
            OW = !1;
          WW.values.forEach(((WW, mW) => {
            const EW = WW >= (this.buttonsDown[mW] ? AW.L : AW.K);
            EW && !this.buttonsDown[mW] && (iW = !0, OW = !0), this.buttonsDown[mW] = EW
          }));
          return [WW.leftStick, WW.rightStick].forEach(((WW, mW) => {
            const EW = this.stickAnchors[mW];
            Math.hypot(WW.x, WW.y) < (EW ? AW.L : .3) ? this.stickAnchors[mW] = null : (!EW || Math.hypot(WW.x - EW.x, WW.y - EW.y) >= .3) && (this.stickAnchors[mW] = {
              x: WW.x,
              y: WW.y
            }, iW = !0, OW ||= !EW)
          })), iW && (this.lastActivityMs = WW.timestampMs), this.onlyMovedOn = iW && !OW, iW
        }
        wasOnlyMoveOn() {
          return this.onlyMovedOn
        }
        isHolding(WW) {
          return !(WW - this.lastActivityMs >= 1e3) && (this.buttonsDown.some((WW => WW)) || this.stickAnchors.some((WW => null !== WW)))
        }
        isStickOffRest() {
          return this.stickAnchors.some((WW => null !== WW))
        }
        reset() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
      },
      hW = (HW = () => ZW.d.getActiveGamepad(), new kW({
        touchOnly: "touchOnly" === (0, UW.d)(),
        setMayHide: lW.t,
        onHeld: (WW, iW) => {
          MW("BL", WW, iW, HW(), null)
        },
        onReleased: (WW, iW, OW) => {
          MW("released", WW, iW, HW(), OW)
        }
      }));
    var HW;
    let nW = null,
      uW = !1;
    const oW = () => uW;
    let dW = null,
      eW = !1,
      vW = null;
    const gW = () => vW;
    let DW = !1;
    const VW = (WW, iW) => {
        if (!JW.observe(WW)) return !1;
        if (hW.observe(WW, iW, JW.isStickOffRest()), DW && JW.wasOnlyMoveOn() && !(0, lW.k)()) return !1;
        DW = !1, uW = !1;
        const OW = !(0, lW.k)();
        return OW && (nW = WW, vW = !yW && eW && dW ? {
          ...dW
        } : null), eW = !1, (0, lW.r)("gamepad"), TW(!0), (0, xW.n)((0, cW.q)()), OW
      },
      pW = WW => !(0, lW.k)() || WW === nW,
      fW = () => {
        JW.reset()
      },
      CW = () => {
        const WW = EW.d.get("activeInputDevice"),
          iW = "gamepad" === WW ? ZW.d.getActivePad() : null;
        return {
          device: WW,
          inGame: (0, LW.z)(),
          padMovesMouse: null !== iW && (0, tW.d)(iW.id)
        }
      },
      XW = WW => {
        document.pointerLockElement ? dW = null : (dW ??= {
          x: 0,
          y: 0
        }, dW.x = WW.clientX, dW.y = WW.clientY)
      },
      BW = () => {
        const WW = new jW.c,
          iW = iW => {
            WW.reset(), DW = !1, (0, lW.r)(iW)
          },
          OW = WW => {
            if (WW.isTrusted) {
              if (WW instanceof KeyboardEvent) {
                if ((0, lW.p)(WW), !SW(WW)) return;
                uW = !0
              }
              if (WW instanceof PointerEvent && "touch" === WW.pointerType) return dW = null, void iW("touch");
              WW instanceof PointerEvent && (XW(WW), eW = !0), ("pointerdown" !== WW.type || (WW => {
                let {
                  device: iW,
                  inGame: OW,
                  padMovesMouse: mW
                } = WW;
                return !("gamepad" === iW && mW && OW)
              })(CW())) && iW("keyboardMouse")
            }
          },
          mW = WW => {
            WW.isTrusted && (dW = null, iW("touch"))
          },
          PW = WW => {
            WW.isTrusted && "touch" !== WW.pointerType && !WW.relatedTarget && (dW = null)
          },
          LW = OW => {
            if (!OW.isTrusted || "touch" === OW.pointerType) return;
            XW(OW);
            const mW = OW.movementX || 0,
              NW = OW.movementY || 0;
            if (0 === mW && 0 === NW) return;
            if (eW = !0, TW(!1), "keyboardMouse" === EW.d.get("activeInputDevice")) return;
            const PW = JW.isHolding(OW.timeStamp),
              LW = CW(),
              cW = (WW => {
                let {
                  device: iW,
                  inGame: OW,
                  padMovesMouse: mW,
                  padHolding: EW
                } = WW;
                return ("gamepad" !== iW || !mW) && "keyboardMouse" !== iW && (OW || !EW)
              })({
                ...LW,
                inGame: LW.inGame && (0, wW.f)(),
                padHolding: PW
              });
            cW && WW.add(mW, NW, OW.timeStamp) && (iW("keyboardMouse"), DW = JW.isStickOffRest())
          },
          cW = WW => {
            TW("gamepad" === WW)
          },
          tW = {
            capture: !0,
            passive: !0
          };
        window.addEventListener("keydown", OW, tW), window.addEventListener("pointerdown", OW, tW), window.addEventListener("wheel", OW, tW), window.addEventListener("touchstart", mW, tW), window.addEventListener("pointermove", LW, tW), window.addEventListener("pointerout", PW, tW);
        const ZW = NW.l.subscribe("appManagerUpdated|activeInputDevice", cW);
        return cW(EW.d.get("activeInputDevice")), () => {
          window.removeEventListener("keydown", OW, tW), window.removeEventListener("pointerdown", OW, tW), window.removeEventListener("wheel", OW, tW), window.removeEventListener("touchstart", mW, tW), window.removeEventListener("pointermove", LW, tW), window.removeEventListener("pointerout", PW, tW), dW = null, NW.l.unsubscribe(ZW), TW(!1)
        }
      },
      qW = () => {
        const [WW, iW] = (0, mW.useState)(cW.q);
        return (0, PW.e)(cW.e, (() => {
          iW((0, cW.q)())
        })), (0, PW.e)(ZW.c, (() => {
          iW((0, cW.q)())
        })), WW
      }
  },
  9393: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => mW,
      e: () => EW
    });
    const mW = ["xbox", "playstation", "nintendo", "steamdeck", "generic"],
      EW = WW => mW.includes(WW)
  },
  9931: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => PW,
      d: () => NW,
      e: () => cW,
      h: () => LW
    });
    var mW = OW(1526),
      EW = OW(1479);
    const NW = "controllerInventoryCursorChanged",
      PW = {
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
      LW = () => {
        var WW, iW;
        return (0, mW.g)(NW, null !== (WW = null === (iW = (0, EW.h)()) || void 0 === iW ? void 0 : iW.getInventoryCursorState()) && void 0 !== WW ? WW : PW)
      },
      cW = () => {
        var WW, iW;
        return null !== (WW = null === (iW = (0, EW.h)()) || void 0 === iW ? void 0 : iW.isPadSteppingSlots()) && void 0 !== WW && WW
      }
  },
  9928: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => xW,
      d: () => LW,
      h: () => cW,
      i: () => PW,
      m: () => NW,
      p: () => tW,
      s: () => ZW
    });
    let mW = null;
    const EW = new Set,
      NW = WW => (mW = WW, () => {
        if (mW === WW) {
          mW = null;
          for (const WW of EW) WW()
        }
      }),
      PW = WW => (EW.add(WW), () => {
        EW.delete(WW)
      }),
      LW = () => mW,
      cW = () => null !== mW;
    let wW = null;
    const tW = WW => {
        wW = WW
      },
      ZW = () => {
        const WW = wW;
        return wW = null, WW
      },
      xW = (WW, iW) => {
        var OW, mW;
        return null !== (OW = null !== (mW = WW.find((WW => WW.element === iW))) && void 0 !== mW ? mW : WW.find((WW => WW.element.contains(iW)))) && void 0 !== OW ? OW : null
      }
  },
  9939: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => NW,
      c: () => PW
    });
    var mW = OW(62);
    const EW = new WeakMap,
      NW = WW => {
        var iW, OW;
        return null !== (iW = null === (OW = EW.get(WW)) || void 0 === OW ? void 0 : OW.current) && void 0 !== iW ? iW : null
      },
      PW = (WW, iW) => {
        const OW = (0, mW.useRef)(iW);
        OW.current = iW;
        const NW = (0, mW.useRef)(null);
        (0, mW.useEffect)((() => {
          const iW = WW.current,
            mW = NW.current;
          iW !== mW && (mW && EW.get(mW) === OW && EW.delete(mW), NW.current = iW, iW && EW.set(iW, OW))
        })), (0, mW.useEffect)((() => () => {
          const WW = NW.current;
          WW && EW.get(WW) === OW && EW.delete(WW), NW.current = null
        }), [])
      }
  },
  10049: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => LW,
      e: () => wW,
      i: () => ZW,
      l: () => tW,
      p: () => cW,
      q: () => lW
    });
    var mW = OW(27),
      EW = OW(2111),
      NW = OW(1479),
      PW = OW(1459);
    const LW = WW => {
        var iW, OW;
        return (0, PW.k)() && null !== (iW = null === (OW = (0, NW.h)()) || void 0 === OW ? void 0 : OW.getGlyphForNoaAction(WW)) && void 0 !== iW ? iW : null
      },
      cW = "controllerGlyph:",
      wW = WW => {
        var iW, OW;
        return null !== (iW = null === (OW = (0, NW.h)()) || void 0 === OW ? void 0 : OW.getPadGlyphIconName(WW)) && void 0 !== iW ? iW : `${cW}xbox/${WW}`
      },
      tW = WW => WW.startsWith(cW),
      ZW = WW => {
        var iW, OW;
        return tW(WW) && null !== (iW = null === (OW = (0, NW.h)()) || void 0 === OW ? void 0 : OW.getPadGlyphIconUrl(WW)) && void 0 !== iW ? iW : null
      },
      xW = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", PW.d, EW.e, EW.b],
      lW = WW => {
        const iW = xW.map((iW => mW.l.subscribe(iW, WW)));
        return () => {
          for (const WW of iW) mW.l.unsubscribe(WW)
        }
      }
  },
  9421: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => wW,
      f: () => tW,
      j: () => cW,
      k: () => LW
    });
    var mW = OW(25),
      EW = OW(1729),
      NW = OW(1864);
    const PW = new Map,
      LW = (WW, iW) => (PW.has(WW) && console.warn(`Gameplay blocker "${WW}" registered twice; the newer one replaces it.`), PW.set(WW, iW), () => {
        PW.get(WW) === iW && PW.delete(WW)
      }),
      cW = () => (0, NW.b)(document.activeElement),
      wW = function() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        for (const [iW, OW] of PW)
          if (!WW.includes(iW) && OW()) return iW;
        return null
      },
      tW = function() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return "inGame" === mW.d.get("gameState") && (!(0, EW.l)() && (!cW() && null === wW(WW)))
      }
  },
  9364: (WW, iW, OW) => {
    OW.d(iW, {
      A: () => sW,
      D: () => nW,
      E: () => MW,
      F: () => UW,
      H: () => jW,
      I: () => wW,
      K: () => xW,
      L: () => lW,
      M: () => EW,
      Q: () => mW,
      R: () => SW,
      V: () => hW,
      Z: () => uW,
      ab: () => KW,
      b: () => oW,
      f: () => HW,
      h: () => tW,
      l: () => cW,
      m: () => LW,
      q: () => yW,
      t: () => kW,
      u: () => YW,
      v: () => NW,
      w: () => ZW
    });
    const mW = ["A", "B", "X", "Y", "LB", "RB", "LT", "RT", "View", "Menu", "LS", "RS", "Up", "Down", "Left", "Right", "Home"],
      EW = mW.length,
      NW = function() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return {
          values: new Array(EW).fill(0),
          leftStick: {
            x: 0,
            y: 0
          },
          rightStick: {
            x: 0,
            y: 0
          },
          timestampMs: WW
        }
      },
      PW = Object.fromEntries(mW.map(((WW, iW) => [WW, iW]))),
      LW = WW => PW[WW],
      cW = function(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .95;
        const mW = Math.hypot(WW.x, WW.y);
        if (mW <= iW) return {
          x: 0,
          y: 0
        };
        const EW = Math.min(1, (mW - iW) / Math.max(1e-4, OW - iW));
        return {
          x: WW.x / mW * EW,
          y: WW.y / mW * EW
        }
      },
      wW = ["exponential", "linear", "boost"],
      tW = (WW, iW) => {
        const OW = Math.hypot(WW.x, WW.y);
        if (0 === OW) return {
          x: 0,
          y: 0
        };
        const mW = ((WW, iW) => {
          const OW = Math.max(0, Math.min(1, WW));
          return "linear" === iW ? OW : OW * OW
        })(OW, iW);
        return {
          x: WW.x / OW * mW,
          y: WW.y / OW * mW
        }
      },
      ZW = .5,
      xW = .3,
      lW = .2,
      AW = LW("LT"),
      bW = LW("RT"),
      jW = WW => WW === AW || WW === bW,
      UW = (WW, iW) => {
        const OW = LW(iW);
        return jW(OW) ? WW[OW] > .35 : WW[OW] >= ZW
      },
      kW = (WW, iW) => WW.map(((WW, OW) => jW(OW) ? iW[OW] ? WW > .35 : WW >= .55 : WW >= ZW)),
      sW = ["Up", "Down", "Left", "Right"],
      MW = WW => sW.includes(WW),
      KW = function(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .5;
        return Math.hypot(WW.x, WW.y) < iW ? null : Math.abs(WW.x) > Math.abs(WW.y) ? WW.x > 0 ? "Right" : "Left" : WW.y > 0 ? "Down" : "Up"
      },
      SW = {
        initialDelayMs: 350,
        intervalMs: 120
      },
      YW = {
        initialDelayMs: 350,
        intervalMs: 150
      },
      yW = ["default", "slow", "off"],
      TW = 800,
      JW = 250,
      hW = (WW, iW) => "off" === iW ? null : "slow" === iW ? {
        initialDelayMs: Math.max(WW.initialDelayMs, TW),
        intervalMs: Math.max(WW.intervalMs, JW)
      } : WW;
    class HW {
      constructor(WW) {
        this.readTiming = WW, this.BL = !1, this.timing = null, this.nextFireMs = 0
      }
      update(WW, iW) {
        return WW ? this.BL ? !!(this.timing && iW >= this.nextFireMs) && (this.nextFireMs = iW + this.timing.intervalMs, !0) : (this.BL = !0, this.timing = this.readTiming(), this.nextFireMs = iW + (null !== (OW = null === (mW = this.timing) || void 0 === mW ? void 0 : mW.initialDelayMs) && void 0 !== OW ? OW : 0), !0) : (this.BL = !1, !1);
        var OW, mW
      }
      reset() {
        this.BL = !1
      }
    }
    const nW = {
        initialDelayMs: 350,
        intervalMs: 80
      },
      uW = {
        initialDelayMs: 400,
        intervalMs: 90
      };
    class oW {
      constructor(WW) {
        this.timer = WW, this.direction = null
      }
      update(WW, iW) {
        return WW !== this.direction && (this.timer.reset(), this.direction = WW), this.timer.update(null !== WW, iW) ? WW : null
      }
      reset() {
        this.timer.reset(), this.direction = null
      }
    }
  },
  9942: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => EW,
      g: () => NW
    });
    let mW = -1 / 0;
    const EW = () => {
        mW = performance.now()
      },
      NW = WW => performance.now() - mW < WW
  },
  9905: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => PW,
      f: () => NW
    });
    var mW = OW(9384),
      EW = OW(9364);
    const NW = WW => (0, EW.V)(WW, (0, mW.m)().buttonRepeat),
      PW = WW => new EW.f((() => NW(WW)))
  },
  9407: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => cW,
      f: () => NW,
      g: () => LW
    });
    var mW = OW(27),
      EW = OW(9384);
    const NW = (WW, iW) => "OpenShop" === WW ? "shop" === iW : "OpenLobbyLeaderboard" !== WW || "leaderboard" === iW;
    let PW = !1;
    const LW = WW => {
        WW !== PW && (PW = WW, mW.l.iZ(EW.e, (0, EW.m)()))
      },
      cW = () => ((WW, iW) => "shop" === WW && iW ? "shop" : "leaderboard")((0, EW.m)().leaderboardButton, PW)
  },
  9400: (WW, iW, OW) => {
    OW.d(iW, {
      $: () => kW,
      A: () => xW,
      C: () => lW,
      D: () => ZW,
      G: () => MW,
      J: () => wW,
      K: () => UW,
      O: () => JW,
      S: () => sW,
      U: () => bW,
      X: () => jW,
      Y: () => AW,
      d: () => eW,
      db: () => uW,
      eb: () => NW,
      h: () => gW,
      i: () => hW,
      ib: () => SW,
      jb: () => vW,
      l: () => PW,
      mb: () => yW,
      o: () => TW,
      p: () => YW,
      r: () => oW,
      v: () => dW,
      w: () => tW,
      x: () => cW,
      y: () => LW,
      z: () => KW
    });
    var mW = OW(9382),
      EW = OW(9364);
    const NW = {
        min: 25,
        max: 500,
        step: 5
      },
      PW = {
        min: 25,
        max: 100,
        step: 5
      },
      LW = {
        min: 0,
        max: .4,
        step: .01
      },
      cW = {
        min: 25,
        max: 300,
        step: 5
      },
      wW = {
        min: .5,
        max: 6,
        step: .1
      },
      tW = (WW, iW) => {
        if (!Number.isFinite(WW)) return iW.min;
        const OW = iW.min + Math.round((WW - iW.min) / iW.step) * iW.step,
          mW = Math.min(iW.max, Math.max(iW.min, OW));
        return Math.round(1e3 * mW) / 1e3
      },
      ZW = WW => `${Math.round(WW)}%`,
      xW = WW => ZW(100 * WW),
      lW = WW => `${WW.toFixed(1)}\xd7`,
      AW = [{
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
      bW = [{
        value: "exponential",
        labelKey: "controller:settingsCurveExponential"
      }, {
        value: "linear",
        labelKey: "controller:settingsCurveLinear"
      }, {
        value: "boost",
        labelKey: "controller:settingsCurveBoost"
      }],
      jW = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "focus",
        labelKey: "controller:settingsMenuNavFocus"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      UW = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "slot",
        labelKey: "controller:settingsInventoryNavSlot"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      kW = [{
        value: "wheel",
        labelKey: "controller:settingsQuickChatWheel"
      }, {
        value: "off",
        labelKey: "controller:settingsQuickChatOff"
      }],
      sW = [{
        value: "shop",
        labelKey: "controller:settingsLeaderboardButtonShop"
      }, {
        value: "leaderboard",
        labelKey: "controller:settingsLeaderboardButtonLeaderboard"
      }],
      MW = [{
        value: "always",
        labelKey: "controller:settingsGyroAlways"
      }, {
        value: "aiming",
        labelKey: "controller:settingsGyroWhileAiming"
      }, {
        value: "button",
        labelKey: "controller:settingsGyroWhileButton"
      }],
      KW = [{
        value: "tapHold",
        labelKey: "controller:settingsEmoteButtonTapHold"
      }, {
        value: "wheel",
        labelKey: "controller:settingsEmoteButtonWheel"
      }],
      SW = [{
        value: "toggle",
        labelKey: "controller:settingsSneakToggle"
      }, {
        value: "hold",
        labelKey: "controller:settingsSneakHold"
      }],
      YW = [{
        value: "default",
        labelKey: "controller:settingsButtonRepeatDefault"
      }, {
        value: "slow",
        labelKey: "controller:settingsButtonRepeatSlow"
      }, {
        value: "off",
        labelKey: "controller:settingsButtonRepeatOff"
      }],
      yW = [{
        value: "short",
        labelKey: "controller:settingsTapHoldShort"
      }, {
        value: "medium",
        labelKey: "controller:settingsTapHoldMedium"
      }, {
        value: "long",
        labelKey: "controller:settingsTapHoldLong"
      }],
      TW = [{
        value: "hold",
        labelKey: "controller:settingsAttackHold"
      }, {
        value: "toggle",
        labelKey: "controller:settingsAttackToggle"
      }],
      JW = {
        southpaw: "controller:settingsLayoutSouthpaw",
        triggersSwapped: "controller:settingsLayoutTriggersSwapped"
      },
      hW = {
        jump: "controller:settingsActionJump",
        sneak: "controller:settingsActionSneak",
        sneakToggle: "controller:settingsActionSneakToggle",
        zoom: "controller:settingsActionZoom",
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
      HW = {
        gameplay: "controller:settingsGroupGameplay",
        menu: "controller:settingsGroupMenus",
        inventory: "controller:settingsGroupInventory",
        keyboard: "controller:settingsGroupKeyboard"
      },
      nW = [{
        kind: "fixed",
        stick: "move",
        labelKey: "controller:settingsActionMove"
      }, {
        kind: "fixed",
        stick: "look",
        labelKey: "controller:settingsActionLook"
      }],
      uW = mW.h.map((WW => {
        let {
          group: iW,
          actions: OW
        } = WW;
        const mW = OW.map((WW => ({
          kind: "action",
          action: WW
        })));
        return {
          titleKey: HW[iW],
          rows: "gameplay" === iW ? [...nW, ...mW] : mW
        }
      })),
      oW = EW.Q.filter((WW => "Home" !== WW)),
      dW = 1e4;
    class eW {
      constructor(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
        this.cancelButton = WW, this.openButton = iW, this.accepts = OW, this.startMs = null, this.ignoredUntilMs = new Map, this.cancelDownAtMs = null
      }
      update(WW, iW) {
        var OW;
        this.updateIgnored(WW, iW);
        const mW = iW - (null !== (OW = this.startMs) && void 0 !== OW ? OW : iW) >= 250;
        for (const EW of oW)
          if (EW !== this.cancelButton && mW && !this.ignoredUntilMs.has(EW) && WW.wasPressed(EW) && this.accepts(EW)) return {
            kind: "bind",
            button: EW
          };
        if (this.ignoredUntilMs.has(this.cancelButton)) return null;
        if (WW.wasPressed(this.cancelButton)) {
          if (!this.accepts(this.cancelButton)) return {
            kind: "cancel"
          };
          this.cancelDownAtMs = iW
        }
        return null === this.cancelDownAtMs ? null : WW.isHeld(this.cancelButton) && iW - this.cancelDownAtMs >= 700 ? (this.cancelDownAtMs = null, {
          kind: "bind",
          button: this.cancelButton
        }) : WW.wasReleased(this.cancelButton) ? (this.cancelDownAtMs = null, {
          kind: "cancel"
        }) : null
      }
      getBindHoldProgress(WW) {
        return null === this.cancelDownAtMs ? 0 : Math.min(1, (WW - this.cancelDownAtMs) / 700)
      }
      updateIgnored(WW, iW) {
        if (null === this.startMs) {
          this.startMs = iW;
          for (const iW of oW) WW.isDown(iW) && this.ignoredUntilMs.set(iW, 1 / 0);
          this.openButton && !this.ignoredUntilMs.has(this.openButton) && this.ignoredUntilMs.set(this.openButton, iW + 250)
        }
        for (const [OW, mW] of this.ignoredUntilMs) {
          const EW = WW.isDown(OW);
          mW === 1 / 0 ? EW || OW !== this.openButton ? EW || this.ignoredUntilMs.delete(OW) : this.ignoredUntilMs.set(OW, iW + 250) : iW >= mW ? this.ignoredUntilMs.delete(OW) : EW && this.ignoredUntilMs.set(OW, 1 / 0)
        }
      }
    }
    const vW = 6e3;
    class gW {
      constructor() {
        this.downAtMs = null, this.pressesAtMs = []
      }
      update(WW, iW) {
        let {
          pressed: OW,
          BL: mW
        } = WW;
        if (OW) {
          const WW = this.pressesAtMs.at(-1);
          if (this.pressesAtMs = void 0 !== WW && iW - WW < 1500 ? [...this.pressesAtMs, iW] : [iW], this.pressesAtMs.length >= 3) return 1
        }
        return mW ? (this.downAtMs ??= iW, Math.min(1, (iW - this.downAtMs) / 1500)) : (this.downAtMs = null, 0)
      }
    }
  },
  9954: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => NW,
      e: () => EW
    });
    let mW = null;
    const EW = function(WW) {
        const iW = {
          cycle: WW,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return mW = iW, () => {
          mW === iW && (mW = null)
        }
      },
      NW = () => {
        var WW;
        return null !== (WW = mW) && void 0 !== WW && WW.canCycle() ? mW.cycle : null
      }
  },
  5940: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => NW,
      d: () => PW
    });
    var mW = OW(62);
    const EW = new WeakMap,
      NW = WW => {
        var iW;
        const OW = WW.closest("[data-pad-slider]");
        return OW && null !== (iW = EW.get(OW)) && void 0 !== iW ? iW : null
      },
      PW = (WW, iW) => {
        const OW = (0, mW.useRef)(iW);
        OW.current = iW, (0, mW.useEffect)((() => {
          if (WW.current) return ((WW, iW) => (EW.set(WW, iW), () => {
            EW.get(WW) === iW && EW.delete(WW)
          }))(WW.current, {
            adjust: WW => {
              OW.current.adjust(WW)
            },
            setFraction: WW => {
              OW.current.setFraction(WW)
            },
            endDrag: () => {
              OW.current.endDrag()
            }
          })
        }), [WW])
      }
  },
  10038: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => EW,
      f: () => PW,
      i: () => NW,
      j: () => mW,
      l: () => LW,
      o: () => wW,
      s: () => tW
    });
    const mW = "controllerActionWheelOpen",
      EW = "controllerActionWheelAim",
      NW = "controllerActionWheelCommit",
      PW = "controllerActionWheelClose",
      LW = "controllerActionWheelPick";
    let cW = !1;
    const wW = () => cW,
      tW = WW => {
        cW = WW
      }
  },
  10033: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => NW,
      h: () => EW
    });
    let mW = 0;
    const EW = () => {
        mW++
      },
      NW = () => mW
  },
  9952: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => cW,
      g: () => EW,
      i: () => PW,
      k: () => NW,
      o: () => mW,
      s: () => wW
    });
    const mW = "controllerQuickChatWheelOpen",
      EW = "controllerQuickChatWheelAim",
      NW = "controllerQuickChatWheelCommit",
      PW = "controllerQuickChatWheelClose";
    let LW = !1;
    const cW = () => LW,
      wW = WW => {
        LW = WW
      }
  },
  9963: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => NW,
      e: () => EW
    });
    var mW = OW(27);
    const EW = "localBlockBroken";

    function NW() {
      return {
        onPlayerChangeBlock(WW, iW, OW, NW, PW, LW) {
          "Air" === LW && mW.l.iZ(EW)
        }
      }
    }
  },
  9957: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => EW
    });
    var mW = OW(1250);

    function EW(WW, iW) {
      var OW, EW;
      try {
        const OW = (0, mW.e)();
        if ("function" === typeof OW) {
          const mW = new OW(WW, iW);
          if (mW.type === WW) return mW
        }
      } catch {}
      const NW = document.createEvent("Event");
      return NW.initEvent(WW, null !== (OW = null === iW || void 0 === iW ? void 0 : iW.bubbles) && void 0 !== OW && OW, null !== (EW = null === iW || void 0 === iW ? void 0 : iW.cancelable) && void 0 !== EW && EW), NW
    }
  },
  9997: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => PW
    });
    var mW = OW(10006),
      EW = OW(643),
      NW = OW(136);

    function PW(WW) {
      var iW, OW;
      if ((0, EW.K)(WW)) return !0;
      const PW = null !== (iW = null === (OW = NW.siteUsedData[NW.siteUsed]) || void 0 === OW ? void 0 : OW.adConfig.showRewardedAds) && void 0 !== iW && iW;
      for (const EW in WW) {
        const iW = WW[EW];
        if (null !== iW && void 0 !== iW && iW.items)
          for (const WW in iW.items)
            if ((0, mW.g)(iW.items[WW], PW)) return !1
      }
      return !0
    }
  },
  10046: () => {},
  9442: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/A.926fb88933484dfbde14.svg"
  },
  9445: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/B.9f5ec099f78f84e44427.svg"
  },
  9451: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  9456: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  9461: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/LB.3a20b15927b55d5d8b60.svg"
  },
  9468: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  9476: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/LT.9fdc5e69011b9d41f50a.svg"
  },
  9485: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  9493: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  9496: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Menu.c903a662eb685211e52e.svg"
  },
  9501: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/RB.bba470ddb76ceec5d168.svg"
  },
  9508: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  9517: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/RT.e5a9fbcc3c79550111ca.svg"
  },
  9520: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  9523: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  9526: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  9531: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/View.0c9378b5d720a636d50d.svg"
  },
  9535: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/X.c9377519af94e6dce1d7.svg"
  },
  9544: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Y.62d8c17731dd2e172426.svg"
  },
  9551: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/A.958a6de9474f8d0c9caf.svg"
  },
  9560: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/B.d05958bfa88a1162b47a.svg"
  },
  9564: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Down.db68fb3980768eb54671.svg"
  },
  9569: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  9578: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/LB.37a3c5128c958ec2a0c2.svg"
  },
  9584: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/LS.15b0cc5bf3f2fe7bbd8b.svg"
  },
  9589: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/LT.5412ae5222c69f8c833f.svg"
  },
  9593: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Left.4457b2895ce94a5df32e.svg"
  },
  9602: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  9611: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Menu.1e8427f8133c9d456c53.svg"
  },
  9620: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/RB.c96c4aa2590209e930c7.svg"
  },
  9626: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/RS.8d70d147cf1ab136e845.svg"
  },
  9631: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/RT.1e4691bb5a7c049693df.svg"
  },
  9637: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Right.a1e101413040c540b879.svg"
  },
  9644: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  9652: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Up.7544a65ad4f611a55775.svg"
  },
  9657: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/View.003cae39de89cae0b9d8.svg"
  },
  9666: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/X.d88b6e62dd8fb4bda32a.svg"
  },
  9668: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Y.428d3e70775877892f82.svg"
  },
  9673: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  9677: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  9685: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  9693: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Home.ea8b009cfa9562aa644e.svg"
  },
  9695: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/LB.f283d355d22fc107d6d6.svg"
  },
  9700: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  9706: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/LT.13e66c122e7ee04bb876.svg"
  },
  9712: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  9716: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  9721: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Menu.90fc4e918900eb5062a0.svg"
  },
  9729: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/RB.918a7f16dc054d96b6f3.svg"
  },
  9736: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  9744: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/RT.a0523211130959598bed.svg"
  },
  9751: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  9758: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  9765: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  9770: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/View.0bc952e292c28c3baac2.svg"
  },
  9779: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  9784: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  },
  9791: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  9794: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  9798: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  9804: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Home.8898f76b20962fe52ab7.svg"
  },
  9809: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/LB.689ba3703ae248f2e4cc.svg"
  },
  9812: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  9818: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/LT.9c2d10d335ab5c590525.svg"
  },
  9827: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  9831: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  9836: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Menu.9e485791ea97009871ca.svg"
  },
  9845: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/RB.7ee5ce48dd551f993f80.svg"
  },
  9853: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  9858: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/RT.903ecadc55a9e9e00f07.svg"
  },
  9860: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  9866: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  9870: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  9879: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/View.3c5eeb34f0413bde4a65.svg"
  },
  9888: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  9891: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);