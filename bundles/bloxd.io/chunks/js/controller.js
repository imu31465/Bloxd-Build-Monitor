export const id = 28;
export const ids = [28];
export const modules = {
  7667: (YY, rY, DY) => {
    var FY = {
      "./nintendo/A.svg": 7671,
      "./nintendo/B.svg": 7673,
      "./nintendo/Down.svg": 7675,
      "./nintendo/Home.svg": 7683,
      "./nintendo/LB.svg": 7686,
      "./nintendo/LS.svg": 7689,
      "./nintendo/LT.svg": 7691,
      "./nintendo/Left.svg": 7694,
      "./nintendo/LeftStick.svg": 7702,
      "./nintendo/Menu.svg": 7709,
      "./nintendo/RB.svg": 7713,
      "./nintendo/RS.svg": 7720,
      "./nintendo/RT.svg": 7729,
      "./nintendo/Right.svg": 7734,
      "./nintendo/RightStick.svg": 7739,
      "./nintendo/Up.svg": 7747,
      "./nintendo/View.svg": 7749,
      "./nintendo/X.svg": 7758,
      "./nintendo/Y.svg": 7762,
      "./playstation/A.svg": 7770,
      "./playstation/B.svg": 7774,
      "./playstation/Down.svg": 7778,
      "./playstation/Home.svg": 7784,
      "./playstation/LB.svg": 7793,
      "./playstation/LS.svg": 7802,
      "./playstation/LT.svg": 7807,
      "./playstation/Left.svg": 7812,
      "./playstation/LeftStick.svg": 7818,
      "./playstation/Menu.svg": 7824,
      "./playstation/RB.svg": 7826,
      "./playstation/RS.svg": 7829,
      "./playstation/RT.svg": 7838,
      "./playstation/Right.svg": 7843,
      "./playstation/RightStick.svg": 7845,
      "./playstation/Up.svg": 7851,
      "./playstation/View.svg": 7858,
      "./playstation/X.svg": 7860,
      "./playstation/Y.svg": 7864,
      "./steamdeck/A.svg": 7869,
      "./steamdeck/B.svg": 7874,
      "./steamdeck/Down.svg": 7879,
      "./steamdeck/Home.svg": 7881,
      "./steamdeck/LB.svg": 7884,
      "./steamdeck/LS.svg": 7892,
      "./steamdeck/LT.svg": 7901,
      "./steamdeck/Left.svg": 7903,
      "./steamdeck/LeftStick.svg": 7905,
      "./steamdeck/Menu.svg": 7910,
      "./steamdeck/RB.svg": 7917,
      "./steamdeck/RS.svg": 7924,
      "./steamdeck/RT.svg": 7932,
      "./steamdeck/Right.svg": 7939,
      "./steamdeck/RightStick.svg": 7945,
      "./steamdeck/Up.svg": 7950,
      "./steamdeck/View.svg": 7959,
      "./steamdeck/X.svg": 7962,
      "./steamdeck/Y.svg": 7964,
      "./xbox/A.svg": 7973,
      "./xbox/B.svg": 7977,
      "./xbox/Down.svg": 7982,
      "./xbox/Home.svg": 7986,
      "./xbox/LB.svg": 7994,
      "./xbox/LS.svg": 8002,
      "./xbox/LT.svg": 8009,
      "./xbox/Left.svg": 8016,
      "./xbox/LeftStick.svg": 8021,
      "./xbox/Menu.svg": 8023,
      "./xbox/RB.svg": 8028,
      "./xbox/RS.svg": 8035,
      "./xbox/RT.svg": 8042,
      "./xbox/Right.svg": 8044,
      "./xbox/RightStick.svg": 8046,
      "./xbox/Up.svg": 8053,
      "./xbox/View.svg": 8056,
      "./xbox/X.svg": 8062,
      "./xbox/Y.svg": 8067
    };

    function AY(YY) {
      var rY = IY(YY);
      return DY(rY)
    }

    function IY(YY) {
      if (!DY.o(FY, YY)) {
        var rY = new Error("Cannot find module '" + YY + "'");
        throw rY.code = "MODULE_NOT_FOUND", rY
      }
      return FY[YY]
    }
    AY.keys = function() {
      return Object.keys(FY)
    }, AY.resolve = IY, YY.exports = AY, AY.id = 7667
  },
  8202: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => zY,
      i: () => BY,
      l: () => cY
    });
    var FY = DY(61),
      AY = DY(4097),
      IY = DY(1152),
      RY = DY(1430),
      OY = DY(25),
      gY = DY(2984),
      aY = DY(2099),
      vY = DY(1244),
      uY = DY(8236),
      sY = DY(1808),
      iY = DY(1834),
      yY = DY(1211),
      QY = DY(19),
      oY = DY(1619),
      WY = DY(1092),
      EY = DY.n(WY),
      mY = DY(8208),
      VY = DY(8216),
      SY = DY(8225),
      lY = DY(8104),
      TY = DY(8230),
      eY = (DY(8233), DY(1125));
    let NY = null;

    function BY() {
      return null !== NY
    }

    function cY() {
      return "pad" === NY
    }

    function KY() {
      return "inGame" === QY.b.get("gameState") && !(0, oY.p)()
    }

    function HY(YY) {
      return (0, VY.x)(YY, vY.m, VY.f, VY.i, VY.m)
    }
    const zY = (0, FY.memo)((function() {
      const {
        t: YY
      } = (0, yY.C)(), {
        userContext: rY
      } = (0, IY.d)(), [DY, QY] = (0, FY.useState)(null), [WY, BY] = (0, FY.useState)(null), cY = (0, FY.useRef)(null), zY = (0, FY.useCallback)((YY => {
        cY.current = YY, BY(YY)
      }), []), ZY = (0, FY.useRef)(0), CY = (0, FY.useRef)(null), fY = (0, FY.useRef)({
        x: 0,
        y: 0
      }), [jY, hY] = (0, FY.useState)(0), dY = (0, FY.useMemo)((() => function(YY) {
        const rY = [];
        for (let FY = 0; FY < vY.m; FY++) {
          var DY;
          rY.push(null !== (DY = YY[FY]) && void 0 !== DY ? DY : null)
        }
        return rY
      }((0, uY.f)(rY.getPlayerCosmetics().emote))), [rY, jY]);
      (0, iY.c)("cosmeticsUpdated", (YY => {
        YY.some((YY => YY.local && "emote" === YY.rY)) && hY((YY => YY + 1))
      }));
      const JY = (0, FY.useRef)(!1),
        MY = (0, FY.useCallback)((function(YY) {
          let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          "pad" === YY && (0, SY.h)(), JY.current = rY, fY.current = {
            x: 0,
            y: 0
          }, zY(null), QY(YY)
        }), [zY]),
        wY = (0, FY.useCallback)((() => {
          QY(null), zY(null), fY.current = {
            x: 0,
            y: 0
          }
        }), [zY]),
        bY = (0, FY.useCallback)((YY => {
          if (Date.now() < ZY.current) return;
          const rY = (0, aY.h)(YY),
            DY = !!rY.holdUntilMove,
            FY = DY ? 600 : Math.ceil(1e3 * rY.animation.animation_length / aY.c) + 200;
          ZY.current = Date.now() + FY, CY.current = YY, sY.gameBridge.send("playEmote", YY), sY.gameBridge.send("applyTemporaryThirdPerson", DY ? {} : {
            durationMs: FY
          })
        }), []);
      (0, RY.g)("requestToggleEmoteWheel", (() => {
        null === DY ? KY() && MY("click") : wY()
      })), (0, RY.g)("requestEmoteWheelHoldOpen", (() => {
        null === DY && KY() && MY((0, mY.b)() ? "hold" : "click")
      })), (0, RY.g)("requestEmoteWheelPadOpen", (YY => {
        null !== DY || !KY() || (0, lY.d)() || (0, TY.o)() || MY("pad", YY)
      })), (0, RY.g)("requestEmoteRepeatLast", (() => {
        if (null !== DY || !KY() || (0, lY.d)() || (0, TY.o)()) return;
        const YY = CY.current;
        null !== YY && dY.includes(YY) ? bY(YY) : MY("pad", !0)
      }));
      const XY = () => {
        const YY = cY.current,
          rY = null !== YY ? dY[YY] : null;
        null !== rY && "pad" === DY && Date.now() < ZY.current || (wY(), null !== rY && bY(rY))
      };
      (0, RY.g)("emoteWheelPadAim", (YY => {
        if ("pad" !== DY) return;
        const rY = (0, VY.I)(YY, vY.m, cY.current);
        zY(null !== rY && null !== dY[rY] ? rY : null)
      })), (0, RY.g)("requestEmoteWheelPadCommit", (YY => {
        "pad" !== DY || YY && JY.current || XY()
      })), (0, RY.g)("appManagerUpdated|activeInputDevice", (YY => {
        null !== DY && "pad" === DY !== ("gamepad" === YY) && wY()
      })), (0, FY.useLayoutEffect)((() => (NY = DY, (0, gY.v)("emoteWheel", "pad" === DY), OY.g.vo(gY.n), () => {
        NY = null, (0, gY.v)("emoteWheel", !1), OY.g.vo(gY.n)
      })), [DY]), (0, RY.g)("requestEmoteWheelHoldRelease", (() => {
        "hold" === DY && XY()
      })), (0, RY.g)("requestEmoteWheelClose", (() => {
        null !== DY && wY()
      })), (0, RY.g)("appManagerUpdated|gameState", (YY => {
        "inGame" !== YY && wY()
      }));
      const qY = () => {
        (0, oY.p)() && wY()
      };
      if ((0, RY.g)("appManagerUpdated|openEverythingMenuName", qY), (0, RY.g)("appManagerUpdated|openInGameMenuName", qY), (0, RY.g)("pointerLockUpdate", (YY => {
          YY || "hold" !== DY || wY()
        })), (0, FY.useEffect)((() => {
          if (null === DY) return;
          const YY = YY => {
            "Escape" === YY.key && (YY.stopImmediatePropagation(), YY.preventDefault(), wY())
          };
          return document.addEventListener("keydown", YY, !0), () => {
            document.removeEventListener("keydown", YY, !0)
          }
        }), [DY, wY]), (0, AY.b)(!0, "click" === DY, "EmoteWheelOverlay"), (0, FY.useEffect)((() => {
          if ("hold" === DY) return sY.gameBridge.send("holdEmoteWheel", !0), () => {
            sY.gameBridge.send("holdEmoteWheel", !1)
          }
        }), [DY]), (0, FY.useEffect)((() => {
          if ("hold" !== DY) return;
          const YY = parseFloat(window.getComputedStyle(document.documentElement).fontSize),
            rY = VY.t * YY,
            FY = VY.r * YY,
            AY = YY => {
              let DY = fY.current.x + YY.movementX,
                AY = fY.current.y + YY.movementY;
              const IY = Math.hypot(DY, AY);
              if (IY > rY) {
                const YY = rY / IY;
                DY *= YY, AY *= YY
              }
              fY.current = {
                x: DY,
                y: AY
              }, zY(function(YY, rY, DY, FY) {
                if (Math.hypot(YY, rY) < DY) return null;
                const AY = (0, VY.B)(YY, rY, vY.m);
                return null === FY[AY] ? null : AY
              }(DY, AY, FY, dY))
            };
          return document.addEventListener("mousemove", AY), () => {
            document.removeEventListener("mousemove", AY)
          }
        }), [DY, dY, zY]), null === DY) return null;
      const pY = "hold" === DY || "pad" === DY,
        kY = null !== WY ? dY[WY] : null,
        GY = null !== kY ? (0, aY.h)(kY).displayName : YY("emotes:pickEmote");
      return (0, eY.jsx)("div", {
        className: EY()("EmoteWheelOverlay", {
          EmoteWheelOverlayPad: "pad" === DY
        }),
        onMouseDown: YY => {
          YY.target === YY.currentTarget && wY()
        },
        children: (0, eY.jsxs)("div", {
          className: "EmoteWheel",
          style: {
            width: 2 * VY.t + "rem",
            height: 2 * VY.t + "rem"
          },
          children: [(0, eY.jsxs)("svg", {
            className: "EmoteWheelSvg",
            viewBox: `0 0 ${VY.q} ${VY.q}`,
            children: [dY.map(((rY, DY) => {
              const FY = null !== rY,
                AY = pY && DY === WY;
              return (0, eY.jsx)("path", {
                d: HY(DY),
                className: EY()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: AY,
                  EmoteWheelWedgeDisabled: !FY
                }),
                onClick: YY => {
                  YY.stopPropagation(), null !== rY && (YY => {
                    wY(), bY(YY)
                  })(rY)
                },
                "aria-label": null !== rY ? (0, aY.h)(rY).displayName : YY("emotes:emptySlot")
              }, DY)
            })), (0, eY.jsx)("circle", {
              className: "EmoteWheelOuterRing",
              cx: VY.f,
              cy: VY.f,
              r: VY.m
            }), (0, eY.jsx)("circle", {
              className: "EmoteWheelInnerRing",
              cx: VY.f,
              cy: VY.f,
              r: VY.i
            }), pY && null !== WY && (0, eY.jsx)("path", {
              className: "EmoteWheelWedgeOutline",
              d: HY(WY)
            })]
          }), dY.map(((YY, rY) => {
            const DY = null !== YY,
              FY = pY && rY === WY,
              AY = (0, VY.E)(rY, vY.m),
              IY = VY.b * Math.cos(AY),
              RY = VY.b * Math.sin(AY);
            return (0, eY.jsx)("div", {
              className: EY()("EmoteWheelSlotIcon", {
                EmoteWheelSlotIconHighlighted: FY,
                EmoteWheelSlotIconDisabled: !DY
              }),
              style: {
                left: `calc(50% + ${IY}rem)`,
                top: `calc(50% + ${RY}rem)`,
                backgroundImage: DY ? `url(/textures/charSkins/previews/emote_${YY}_preview.png)` : void 0
              },
              "aria-hidden": !0
            }, rY)
          })), (0, eY.jsx)("div", {
            className: "EmoteWheelHint SmallTextBold",
            children: GY
          })]
        })
      })
    }))
  },
  4580: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => yY,
      f: () => mY,
      j: () => QY,
      m: () => EY
    });
    var FY = DY(61),
      AY = DY(4589),
      IY = DY(3920),
      RY = DY(1354),
      OY = DY(4608),
      gY = DY(1092),
      aY = DY.n(gY),
      vY = DY(1346),
      uY = DY(1699),
      sY = DY(4613),
      iY = DY(1125);

    function yY(YY) {
      let {
        label: rY,
        onClick: DY,
        checked: FY,
        circleInfoText: AY,
        className: OY,
        disabled: gY,
        note: vY
      } = YY;
      return (0, iY.jsxs)("div", {
        "aria-disabled": gY || void 0,
        "data-pad-focusable": !0,
        className: aY()("SettingBox CheckboxContainer", {
          [OY]: OY,
          SettingBoxDisabled: gY
        }),
        onClick: () => {
          gY || DY(!FY)
        },
        children: [(0, iY.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, iY.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, iY.jsx)(IY.d, {
              className: "SettingsCheckbox",
              checked: FY,
              disabled: gY,
              onChange: () => {}
            })
          }), (0, iY.jsxs)("div", {
            className: "CheckboxText",
            children: [rY, AY && (0, iY.jsx)("span", {
              onClick: YY => YY.stopPropagation(),
              children: (0, iY.jsx)(RY.d, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: AY
              })
            })]
          })]
        }), vY && (0, iY.jsx)("div", {
          className: "SettingNote",
          children: vY
        })]
      })
    }

    function QY(YY) {
      let {
        name: rY,
        onChange: DY,
        min: AY,
        max: IY,
        step: OY,
        initValue: gY,
        circleInfoText: vY,
        format: uY,
        className: sY,
        padStep: yY,
        disabled: QY = !1,
        selectableMax: oY,
        cappedNote: EY,
        onChangeComplete: mY
      } = YY;
      const [VY, SY] = (0, FY.useState)(gY), lY = (0, FY.useRef)(gY);
      (0, FY.useEffect)((() => {
        lY.current = gY, SY(gY)
      }), [gY]);
      const TY = void 0 !== oY && oY < IY,
        eY = TY ? {
          "--slider-selectable": (oY - AY) / (IY - AY)
        } : void 0;
      return (0, iY.jsxs)("div", {
        className: aY()("SettingBox SettingsSliderDiv", {
          [sY]: sY,
          SettingBoxDisabled: QY,
          SliderCapped: TY
        }),
        style: eY,
        children: [(0, iY.jsxs)("div", {
          className: "SliderText",
          children: [`${rY}: ${uY?uY(VY):VY}`, vY && (0, iY.jsx)(RY.d, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: vY
          })]
        }), (0, iY.jsx)("div", {
          className: "SliderDiv",
          children: (0, iY.jsx)(WY, {
            value: VY,
            min: AY,
            max: IY,
            step: OY,
            onChange: YY => {
              if (TY && YY >= oY && VY === oY) return;
              const rY = TY ? Math.min(YY, oY) : YY;
              lY.current = rY, SY(rY), DY(rY)
            },
            onChangeComplete: mY && (() => {
              mY(lY.current)
            }),
            format: uY,
            padStep: yY,
            disabled: QY
          })
        }), TY && EY && (0, iY.jsx)("div", {
          className: "SettingNote",
          children: EY
        })]
      })
    }
    const oY = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function WY(YY) {
      var rY;
      let {
        value: DY,
        min: IY,
        max: RY,
        step: OY,
        onChange: gY,
        orientation: aY,
        reverse: vY,
        setIsChanging: uY,
        tooltip: yY,
        labels: QY,
        handleLabel: WY,
        format: EY,
        onChangeStart: mY,
        onChangeComplete: VY,
        padStep: SY,
        disabled: lY = !1
      } = YY;
      const TY = (0, FY.useRef)(null),
        eY = (0, FY.useRef)(null);
      (0, FY.useLayoutEffect)((() => {
        var YY, rY, DY;
        const FY = null !== (YY = null === (rY = TY.current) || void 0 === rY ? void 0 : rY.querySelector(".rangeslider")) && void 0 !== YY ? YY : null;
        null === FY || void 0 === FY || FY.setAttribute("data-pad-slider", ""), null === FY || void 0 === FY || FY.setAttribute("data-pad-focusable", ""), null === FY || void 0 === FY || null === (DY = FY.querySelector(".rangeslider__handle")) || void 0 === DY || DY.setAttribute("data-pad-slider-handle", ""), eY.current = FY
      }), []), (0, FY.useLayoutEffect)((() => {
        var YY, rY;
        lY ? null === (YY = eY.current) || void 0 === YY || YY.setAttribute("aria-disabled", "true") : null === (rY = eY.current) || void 0 === rY || rY.removeAttribute("aria-disabled")
      }), [lY]);
      const NY = (null !== (rY = String(OY).split(".")[1]) && void 0 !== rY ? rY : "").length,
        BY = YY => {
          const rY = Number((Math.round((YY - IY) / OY) * OY + IY).toFixed(NY));
          return Math.min(RY, Math.max(IY, rY))
        },
        cY = (0, FY.useRef)(VY);
      cY.current = VY, (0, FY.useEffect)((() => {
        const YY = TY.current;
        if (!YY) return;
        const rY = YY => {
          var rY;
          oY.has(YY.key) && (null === (rY = cY.current) || void 0 === rY || rY.call(cY))
        };
        return YY.addEventListener("keyup", rY), () => {
          YY.removeEventListener("keyup", rY)
        }
      }), []);
      const KY = (0, FY.useRef)(!1);
      return (0, sY.d)(eY, {
        adjust: YY => {
          if (lY) return;
          const rY = null !== SY && void 0 !== SY ? SY : Math.max(OY, Math.round((RY - IY) / 20 / OY) * OY),
            FY = BY(DY + YY * rY * (vY ? -1 : 1));
          FY !== DY && (null === mY || void 0 === mY || mY(), gY(FY), null === VY || void 0 === VY || VY())
        },
        setFraction: YY => {
          if (lY) return;
          const rY = BY(IY + (vY ? 1 - YY : YY) * (RY - IY));
          rY !== DY && (KY.current || (KY.current = !0, null === mY || void 0 === mY || mY()), gY(rY))
        },
        endDrag: () => {
          KY.current && (KY.current = !1, null === VY || void 0 === VY || VY())
        }
      }), (0, iY.jsx)("div", {
        ref: TY,
        style: {
          display: "contents"
        },
        children: (0, iY.jsx)(AY.b, {
          value: DY,
          min: IY,
          max: RY,
          step: OY,
          onChange: gY,
          orientation: aY,
          reverse: vY,
          tooltip: yY,
          labels: QY,
          handleLabel: WY,
          format: EY,
          onChangeStart: () => {
            null === mY || void 0 === mY || mY(), null === uY || void 0 === uY || uY(!0)
          },
          onChangeComplete: () => {
            null === uY || void 0 === uY || uY(!1), null === VY || void 0 === VY || VY()
          }
        })
      })
    }
    async function EY() {
      let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
      const rY = vY.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: "",
        unlockPointerKey: YY
      });
      !0 === await rY.getResult() && (0, uY.reloadBloxd)()
    }

    function mY(YY) {
      let {
        label: rY,
        options: DY,
        value: FY,
        onChange: AY,
        circleInfoText: IY
      } = YY;
      return (0, iY.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, iY.jsxs)("div", {
          className: "SliderText",
          children: [rY, IY && (0, iY.jsx)(RY.d, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: IY
          })]
        }), (0, iY.jsx)(OY.d, {
          ariaLabel: rY,
          options: DY,
          value: FY,
          onChange: AY
        })]
      })
    }
  },
  4608: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => RY
    });
    var FY = DY(1092),
      AY = DY.n(FY),
      IY = DY(1125);

    function RY(YY) {
      let {
        options: rY,
        value: DY,
        onChange: FY,
        ariaLabel: RY,
        className: OY,
        reselectable: gY = !1,
        keepsFocus: aY = !1
      } = YY;
      return (0, IY.jsx)("div", {
        className: AY()("SegmentedToggle", OY),
        role: "group",
        "aria-label": RY,
        children: rY.map((YY => {
          const rY = YY.value === DY;
          return (0, IY.jsx)("button", {
            type: "button",
            "aria-pressed": rY,
            "aria-label": YY.ariaLabel,
            title: YY.ariaLabel,
            className: AY()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: rY
            }),
            onMouseDown: aY ? YY => {
              YY.preventDefault()
            } : void 0,
            onClick: () => {
              rY && !gY || FY(YY.value)
            },
            children: YY.label
          }, YY.value)
        }))
      })
    }
  },
  8189: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => uY,
      g: () => yY,
      k: () => QY,
      l: () => iY,
      n: () => sY
    });
    var FY = DY(61),
      AY = DY(8197),
      IY = DY(25),
      RY = DY(1808),
      OY = DY(40),
      gY = DY(1267),
      aY = DY(1823);
    const vY = 50;
    const uY = new class {
      constructor() {
        this.state = {
          messages: [],
          reportedPlayers: [],
          channel: null
        }, this.listeners = new Set, this.stopListening = [], this.nextClientChatMsgId = 0, this.subscribe = YY => {
          if (0 === this.listeners.size) {
            var rY, DY;
            this.state = {
              ...this.state,
              channel: null !== (rY = null === (DY = aY.b.get("chatChannels")) || void 0 === DY ? void 0 : DY[0]) && void 0 !== rY ? rY : null
            };
            const YY = IY.g.subscribe("reportPlayer", (YY => {
              let {
                playerEId: rY
              } = YY;
              this.setState({
                ...this.state,
                reportedPlayers: [...this.state.reportedPlayers, rY]
              })
            }));
            this.stopListening = [RY.gameBridge.subscribe("chatReceived", (YY => {
              let {
                serverChatMsgId: rY,
                content: DY,
                author: FY
              } = YY;
              this.addMessage(rY, DY, FY)
            })), () => {
              IY.g.unsubscribe(YY)
            }, aY.b.subscribe("chatChannels", (YY => {
              var rY;
              this.setState({
                ...this.state,
                channel: null !== (rY = null === YY || void 0 === YY ? void 0 : YY[0]) && void 0 !== rY ? rY : null
              })
            }))]
          }
          return this.listeners.add(YY), () => {
            if (this.listeners.delete(YY), 0 === this.listeners.size) {
              for (const YY of this.stopListening) YY();
              this.stopListening = [], this.state = {
                messages: [],
                reportedPlayers: [],
                channel: null
              }
            }
          }
        }, this.getState = () => this.state
      }
      addMessage(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const FY = {
          serverChatMsgId: YY,
          content: rY,
          clientChatMsgId: this.nextClientChatMsgId++,
          author: DY
        };
        this.setState({
          ...this.state,
          messages: [FY, ...this.state.messages].slice(0, AY.i)
        })
      }
      selectNextChannel() {
        const YY = aY.b.get("chatChannels");
        if (YY) {
          const rY = YY.findIndex((YY => {
            var rY;
            return YY.channelName === (null === (rY = this.state.channel) || void 0 === rY ? void 0 : rY.channelName)
          }));
          this.setState({
            ...this.state,
            channel: YY[(rY + 1) % YY.length]
          })
        }
      }
      setState(YY) {
        this.state = YY;
        for (const rY of this.listeners) rY()
      }
    };

    function sY() {
      const [YY, rY] = (0, FY.useState)(uY.getState);
      return (0, FY.useEffect)((() => {
        const YY = uY.subscribe((() => {
          rY(uY.getState())
        }));
        return rY(uY.getState()), YY
      }), []), YY
    }

    function iY(YY) {
      var rY, DY;
      if (YY.startsWith("/report")) {
        var FY;
        const rY = null !== (FY = YY.replace("/report", "").trim().split(" ")[0]) && void 0 !== FY ? FY : "";
        if ("" === rY) return void uY.addMessage(null, [{
          str: "You must type a player's name when reporting them.\nExample:\n/report Bob"
        }]);
        const DY = RY.gameBridge.latest("players"),
          AY = RY.gameBridge.latest("hiddenPlayerNames"),
          OY = YY => {
            var FY, IY;
            const RY = null !== (FY = null === (IY = DY.byId[YY]) || void 0 === IY ? void 0 : IY.name) && void 0 !== FY ? FY : null;
            return null !== RY && (RY === rY || (0, gY.c)(RY, AY) === rY)
          };
        if (null !== DY.localId && OY(DY.localId)) return void uY.addMessage(null, [{
          str: "You cannot report yourself."
        }]);
        for (const YY of DY.ids)
          if (OY(YY)) return IY.g.vo("OpenReportMenu", {
            playerEId: YY,
            playerName: DY.byId[YY].name,
            vv: null,
            serverChatMsgId: null
          }), void console.log("Opening report menu...");
        uY.addMessage(null, [{
          str: "Player not found in lobby."
        }])
      }
      RY.gameBridge.send("sendChatMessage", {
          vv: YY,
          channelName: null !== (rY = null === (DY = uY.getState().channel) || void 0 === DY ? void 0 : DY.channelName) && void 0 !== rY ? rY : null
        }),
        function(YY) {
          var rY;
          const DY = null !== (rY = OY.m.getItem("recentlySentChatMsgs")) && void 0 !== rY ? rY : [];
          DY.push(YY), DY.length > vY && DY.shift();
          OY.m.setItem("recentlySentChatMsgs", DY)
        }(YY)
    }

    function yY() {
      var YY;
      return null !== (YY = OY.m.getItem("recentlySentChatMsgs")) && void 0 !== YY ? YY : []
    }

    function QY(YY) {
      var rY;
      let DY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const FY = null !== (rY = OY.m.getItem("recentlySentChatMsgs")) && void 0 !== rY ? rY : [],
        AY = FY.length + 1,
        IY = DY ? (YY % AY + AY) % AY : Math.min(FY.length, Math.max(0, YY));
      return {
        stepsBack: IY,
        text: 0 === IY ? "" : FY[FY.length - IY]
      }
    }
  },
  8138: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => RY,
      g: () => IY
    });
    var FY = DY(1861);
    const AY = /^(?:Key[A-Z]|Digit[0-9]|Arrow(?:Up|Down|Left|Right)|Space)$/,
      IY = YY => "string" === typeof YY.icon && "" !== YY.icon && "string" === typeof YY.keycode && AY.test(YY.keycode),
      RY = YY => "Space" === YY ? "_" : FY.f[YY]
  },
  8208: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => AY
    });
    var FY = DY(19);

    function AY() {
      return !FY.b.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  8216: (YY, rY, DY) => {
    DY.d(rY, {
      B: () => uY,
      E: () => vY,
      G: () => sY,
      I: () => iY,
      b: () => IY,
      f: () => OY,
      i: () => aY,
      m: () => gY,
      q: () => RY,
      r: () => AY,
      t: () => FY,
      x: () => yY
    });
    const FY = 14,
      AY = 6,
      IY = (FY + AY) / 2,
      RY = 200,
      OY = RY / 2,
      gY = RY / 2 - 1,
      aY = AY / FY * (RY / 2),
      vY = (YY, rY) => -Math.PI / 2 + 2 * YY * Math.PI / rY,
      uY = (YY, rY, DY) => {
        const FY = 2 * Math.PI / DY;
        return (Math.round((Math.atan2(rY, YY) + Math.PI / 2) / FY) % DY + DY) % DY
      },
      sY = .5,
      iY = (YY, rY, DY) => Math.hypot(YY.x, YY.y) < sY ? DY : uY(YY.x, YY.y, rY),
      yY = (YY, rY, DY, FY, AY) => {
        const IY = Math.PI / rY,
          RY = vY(YY, rY),
          OY = RY - IY,
          gY = RY + IY,
          aY = (YY, rY) => `${DY+YY*Math.cos(rY)} ${DY+YY*Math.sin(rY)}`;
        return [`M ${aY(FY,OY)}`, `L ${aY(AY,OY)}`, `A ${AY} ${AY} 0 0 1 ${aY(AY,gY)}`, `L ${aY(FY,gY)}`, `A ${FY} ${FY} 0 0 0 ${aY(FY,OY)}`, "Z"].join(" ")
      }
  },
  8250: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => RY
    });
    var FY = DY(61),
      AY = DY(8173),
      IY = DY(2282);

    function RY() {
      const YY = (0, IY.j)("shopInfo"),
        [, rY] = (0, FY.useReducer)((YY => YY + 1), 0);
      return (0, IY.f)("shopInfo", rY), !(0, AY.d)(YY)
    }
  },
  7618: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => AY,
      e: () => IY,
      f: () => sY,
      g: () => uY,
      j: () => aY,
      n: () => OY,
      q: () => FY,
      u: () => iY,
      w: () => yY
    });
    const FY = ["menuConfirm", "menuBack", "menuTabPrevious", "menuTabNext", "menuPageUp", "menuPageDown", "menuSecondary", "menuToggleCursor"],
      AY = [{
        group: "gameplay",
        actions: ["jump", "sneak", "sneakToggle", "sprint", "attack", "use", "hotbarPrevious", "hotbarNext", "inventory", "actionButton", "perspective", "pickBlock", "drop", "emoteWheel", "chat", "pause", "leaderboard"]
      }, {
        group: "menu",
        actions: FY
      }, {
        group: "inventory",
        actions: ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryClose", "inventoryPanelPrevious", "inventoryPanelNext", "inventoryDrop", "inventoryHotbarSwap"]
      }, {
        group: "keyboard",
        actions: ["keyboardType", "keyboardBackspace", "keyboardSpace", "keyboardCaretLeft", "keyboardCaretRight", "keyboardShift", "keyboardSymbols", "keyboardSubmit", "keyboardClose", "keyboardChannel"]
      }],
      IY = {
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
      RY = ["pickBlock", "perspective"],
      OY = YY => RY.includes(YY) ? RY : [YY],
      gY = Object.fromEntries(AY.flatMap((YY => {
        let {
          group: rY,
          actions: DY
        } = YY;
        return DY.map((YY => [YY, rY]))
      }))),
      aY = YY => gY[YY],
      vY = {
        pause: ["menu"],
        leaderboard: ["menu"],
        inventory: ["menu"],
        menuPageUp: ["inventory"],
        menuPageDown: ["inventory"]
      },
      uY = YY => {
        var rY;
        return [aY(YY), ...null !== (rY = vY[YY]) && void 0 !== rY ? rY : []]
      },
      sY = new Set(["menu", "inventory", "keyboard"]),
      iY = {
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
      yY = new Set(["forward", "backward", "left", "right"])
  },
  7614: (YY, rY, DY) => {
    DY.d(rY, {
      B: () => mY,
      C: () => BY,
      F: () => vY,
      H: () => NY,
      J: () => HY,
      d: () => EY,
      e: () => SY,
      i: () => sY,
      l: () => iY,
      n: () => ZY,
      o: () => KY,
      q: () => cY,
      t: () => VY,
      u: () => zY,
      y: () => eY
    });
    var FY = DY(7618),
      AY = DY(7623),
      IY = DY(7598),
      RY = DY(7637);
    const OY = YY => "pickBlock" === YY ? "perspective" : YY,
      gY = (YY, rY) => {
        var DY;
        const AY = OY(rY);
        return null !== (DY = YY[AY]) && void 0 !== DY ? DY : FY.e[AY]
      },
      aY = new Map([
        ["menuConfirm", "menuBack"],
        ["inventoryPrimary", "inventoryClose"],
        ["keyboardType", "keyboardClose"]
      ].flatMap((YY => {
        let [rY, DY] = YY;
        return [
          [rY, DY],
          [DY, rY]
        ]
      }))),
      vY = (YY, rY) => null !== YY && void 0 !== YY ? YY : "nintendo" === rY,
      uY = YY => vY((0, AY.i)().swapConfirmBack, (0, AY.m)()) && aY.get(YY) || YY,
      sY = YY => gY((0, AY.i)().bindings, uY(YY)),
      iY = YY => FY.e[uY(YY)],
      yY = Object.keys(FY.e),
      QY = YY => "gameplay" === (0, FY.j)(YY) ? ["gameplay"] : (0, FY.g)(YY),
      oY = (YY, rY) => {
        const DY = QY(rY);
        return QY(YY).some((YY => DY.includes(YY)))
      },
      WY = (YY, rY, DY) => {
        const AY = gY(YY, rY),
          RY = new Set((0, FY.n)(rY)),
          aY = [...RY];
        for (let FY = aY.pop(); FY; FY = aY.pop())
          for (const rY of yY) {
            const IY = gY(YY, rY);
            RY.has(rY) || IY !== DY && IY !== AY || !oY(FY, rY) || (RY.add(rY), aY.push(rY))
          }
        const vY = {
          ...YY
        };
        for (const uY of RY) {
          const rY = gY(YY, uY) === AY ? DY : AY,
            RY = (0, FY.g)(uY).some((YY => FY.f.has(YY)));
          if ((0, IY.A)(rY) && RY) return null;
          vY[OY(uY)] = rY
        }
        for (const IY of Object.keys(vY)) vY[IY] === FY.e[IY] && delete vY[IY];
        return vY
      },
      EY = (YY, rY) => null !== WY((0, AY.i)().bindings, uY(YY), rY),
      mY = (YY, rY) => {
        if (sY(YY) === rY) return !0;
        const DY = WY((0, AY.i)().bindings, uY(YY), rY);
        return !!DY && ((0, AY.o)({
          bindings: DY
        }), !0)
      },
      VY = (YY, rY) => {
        const DY = (0, FY.n)(rY);
        return yY.filter((rY => OY(rY) === rY && !DY.includes(rY) && gY(YY, uY(rY)) !== sY(rY)))
      },
      SY = ["southpaw", "triggersSwapped"],
      lY = {
        southpaw: {
          sprint: "RS",
          sneakToggle: "LS"
        },
        triggersSwapped: {
          attack: "LT",
          use: "RT"
        }
      },
      TY = YY => Object.keys(lY[YY]),
      eY = (YY, rY) => "southpaw" === YY ? rY.swapSticks : TY(YY).every((DY => gY(rY.bindings, DY) === lY[YY][DY])),
      NY = (YY, rY) => {
        const DY = (0, AY.i)();
        let IY = DY.bindings;
        for (const AY of TY(YY)) {
          const DY = rY ? lY[YY][AY] : FY.e[AY];
          if (IY = WY(IY, AY, DY), !IY) return !1
        }
        return (0, AY.o)({
          swapSticks: "southpaw" === YY ? rY : DY.swapSticks,
          bindings: IY
        }), !0
      },
      BY = () => {
        (0, AY.o)({
          swapSticks: !1,
          bindings: {}
        })
      },
      cY = () => (0, AY.i)().swapSticks ? "RightStick" : "LeftStick",
      KY = () => (0, AY.i)().swapSticks ? "LeftStick" : "RightStick",
      HY = YY => (0, AY.i)().swapSticks && (0, IY.A)(YY),
      zY = YY => HY(YY) ? cY() : KY(),
      ZY = YY => {
        if (FY.w.has(YY)) return cY();
        const rY = FY.u[YY];
        return rY && ("leaderboard" !== rY || (0, RY.e)(YY, (0, RY.c)())) ? sY(rY) : null
      }
  },
  7591: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      ControllerCategory: () => gg,
      ControllerGlyph: () => iI,
      ControllerRoot: () => gO,
      PadLobbyShortcuts: () => eO,
      PadSneakChip: () => QO,
      PadTooltip: () => WO,
      attachPressToContinue: () => CO,
      getBoundButton: () => vY.i,
      getControllerSettings: () => sY.i,
      getGlyphForNoaAction: () => vY.n,
      getInventoryCursorState: () => vg,
      getMenuShortcutButton: () => jF,
      getPadGlyphIconName: () => sO,
      getPadGlyphIconUrl: () => iO,
      getPadRepeatTiming: () => QY.c,
      handOverPadFocus: () => sg,
      hasActivePad: () => ag,
      isPadSteppingSlots: () => ug
    });
    const FY = JSON.parse('{"controller":{"inventoryTake":"Take","inventoryTakeHalf":"Take half","inventoryPlace":"Place","inventoryPlaceOne":"Place one","inventoryQuickMove":"Quick move","inventoryToHotbar":"To hotbar","inventoryPutBack":"Put back","inventoryHotbarSwap":"Swap with hotbar","inventorySwapHere":"Swap here","inventoryCancel":"Cancel","inventoryClose":"Close","inventoryDrop":"Drop (hold: stack)","inventorySelect":"Select","inventoryCraft":"Craft (hold to repeat)","inventoryCraftAll":"Craft all","inventoryChooseRecipe":"Choose","inventoryBackToRecipes":"Back to recipes","inventoryType":"Type","inventoryPanels":"Switch panel","inventoryCategory":"Category","inventoryPage":"Page","disconnected":"Controller disconnected","gameplayReload":"Reload","gameplayActionWheelHint":"(hold for more)","gameplaySneaking":"Sneaking","gameplayLoadFailedTitle":"Controller unavailable","gameplayLoadFailedSubtitle":"Reload the page to play with your controller.","gameplayDropStack":"Keep holding to drop the stack","gameplayAttackLatched":"Attacking","gameplayPickBlock":"Pick block","padButtonView":"View","padButtonMenu":"Menu","padButtonHome":"Home","padButtonCreate":"Create","padButtonOptions":"Options","padButtonDpadUp":"D-pad \u2191","padButtonDpadDown":"D-pad \u2193","padButtonDpadLeft":"D-pad \u2190","padButtonDpadRight":"D-pad \u2192","padButtonLeftStick":"L Stick","padButtonRightStick":"R Stick","settingsLook":"Look","settingsLookSensitivityX":"Look sensitivity (horizontal)","settingsLookSensitivityY":"Look sensitivity (vertical)","settingsAimLookSensitivity":"Look sensitivity while aiming (use held)","settingsInvertLookX":"Invert horizontal look","settingsInvertLookY":"Invert vertical look","settingsLookCurve":"Look curve","settingsLookCurveHint":"Steep gives finer aim near the centre, Linear turns at an even rate, and Boost turns faster when you hold the stick all the way.","settingsCurveExponential":"Steep","settingsCurveLinear":"Linear","settingsCurveBoost":"Boost","settingsLookDeadzone":"Look deadzone","settingsGyro":"Gyro aiming","settingsGyroToggle":"Aim by moving the controller","settingsGyroToggleInfo":"Turn and tilt the controller to aim, on top of the right stick.","settingsGyroTogglePhone":"Aim by moving your phone or tablet","settingsGyroToggleInfoPhone":"Turn and tilt your phone or tablet to aim, on top of the right stick.","settingsGyroUnsupported":"Gyro aiming needs Chrome or Edge.","settingsGyroBlocked":"Gyro aiming isn\'t available on this site.","settingsGyroPhoneNeedsController":"Connect a controller to aim by moving your phone or tablet.","settingsGyroSteamHint":"If Steam already turns your gyro into mouse movement, leave this off.","settingsGyroConnect":"Connect motion controller","settingsGyroConnectHint":"Works with DualSense, DualShock 4 and Switch controllers.","settingsGyroConnectNeedsClick":"Click Connect with your mouse: the browser asks before sharing a controller.","settingsGyroOpenFailed":"Another app is using the controller. Close apps such as Steam or DS4Windows, then try again.","settingsGyroConnected":"Aiming with {{name}}.","settingsGyroAllowMotion":"Allow motion sensor","settingsGyroAllowNeedsTap":"Tap Allow motion sensor on your screen to turn it on.","settingsGyroPhoneOn":"Aiming with this device\'s motion sensor.","settingsGyroPhoneWaiting":"Waiting for this device\'s motion sensor\u2026","settingsGyroPhoneNoSensor":"No motion sensor found on this device.","settingsGyroPhoneDenied":"Motion access is blocked. Allow it in your browser settings.","settingsGyroSensitivity":"Gyro sensitivity","settingsGyroActivation":"Gyro turns on","settingsGyroAlways":"Always","settingsGyroWhileAiming":"While aiming","settingsGyroWhileButton":"While holding a button","settingsGyroAimingHint":"Hold {{button}} to aim with motion.","settingsGyroButton":"Gyro button","settingsGyroButtonHint":"While gyro aiming is on, this button only turns the gyro on in game, so pick one you rarely use.","settingsMovement":"Movement","settingsMoveDeadzone":"Move deadzone","settingsAutoSprint":"Sprint at full tilt","settingsAutoSprintInfo":"Push the movement stick all the way to sprint.","settingsSneak":"Sneak","settingsSneakHold":"Hold","settingsSneakToggle":"Toggle","settingsButtons":"Buttons","settingsPromptFamily":"Button prompts","settingsPromptAuto":"Match my controller","settingsPromptXbox":"Xbox","settingsPromptPlayStation":"PlayStation","settingsPromptNintendo":"Nintendo","settingsPromptSteamDeck":"Steam Deck","settingsPromptGeneric":"Generic","settingsHideButtonHints":"Hide button hints","settingsVibration":"Vibration","settingsCursorSpeed":"Virtual cursor speed","settingsCursorMagnetism":"Cursor snaps onto buttons","settingsMenuBackToCategories":"Back returns to the category list first","settingsAccessibility":"Accessibility","settingsSwapConfirmBack":"Swap confirm and back","settingsSwapToast":"Select and Back have swapped buttons.","settingsLayoutRefusedToast":"This layout doesn\'t fit your current buttons. Reset them to use it.","settingsSwapConfirmBackInfo":"Select with the right face button and go back with the bottom one, in menus, the inventory and the on-screen keyboard. On by default for Nintendo controllers.","settingsButtonRepeat":"Button repeat","settingsButtonRepeatHint":"How a held button repeats in menus, sliders, the on-screen keyboard and crafting. Off acts once per press, and holding drop in game drops just one item.","settingsButtonRepeatDefault":"Default","settingsButtonRepeatSlow":"Slow (0.8 s, then 4 a second)","settingsButtonRepeatOff":"Off (once per press)","settingsTapHoldTime":"Tap/hold time","settingsTapHoldTimeHint":"How long to hold the chat, emote or action button to open its wheel, or the view button to change view where a tap picks a block. Dropping a whole stack takes 0.8, 1 or 1.3 s.","settingsTapHoldShort":"Short (0.25 s)","settingsTapHoldMedium":"Medium (0.5 s)","settingsTapHoldLong":"Long (0.8 s)","settingsEmoteButton":"Emote button","settingsEmoteButtonTapHoldHint":"Tap to repeat your last emote, or hold to open the emote wheel.","settingsEmoteButtonWheelHint":"Any press opens the emote wheel, with no hold to time. Pick with the stick, then select.","settingsEmoteButtonTapHold":"Tap repeats, hold opens wheel","settingsEmoteButtonWheel":"Opens the wheel","settingsAttackMode":"Attack / mine","settingsAttackHoldHint":"Hold attack to keep attacking or mining.","settingsAttackToggleHint":"Press attack once to keep attacking or mining, and again to stop.","settingsAttackHold":"Hold","settingsAttackToggle":"Toggle","settingsLargePointer":"Large pointer and focus","settingsLargePointerInfo":"A bigger menu cursor, thicker selection brackets and bigger button hints.","settingsRemap":"Remap buttons","settingsRemapHint":"Select an action, then press a button. If that button is taken, the two swap.","settingsLayoutSouthpaw":"Southpaw (move with the right stick)","settingsLayoutTriggersSwapped":"Triggers swapped (attack with the left trigger)","settingsCapturePrompt":"Press a button","settingsCaptureCancelHint":"Press {{button}} to cancel","settingsCaptureCancelOrBindHint":"Tap {{button}} to cancel, or hold it to choose it","settingsReset":"Reset","settingsSwapNotice":"{{action}} moved to {{button}}","settingsResetAll":"Reset all buttons and sticks","settingsGroupGameplay":"Movement & gameplay","settingsGroupMenus":"Menus","settingsGroupInventory":"Inventory","settingsGroupKeyboard":"On-screen keyboard","settingsActionMove":"Move","settingsActionLook":"Look around","settingsActionJump":"Jump","settingsActionSneak":"Sneak","settingsActionSneakToggle":"Toggle sneak","settingsActionSprint":"Sprint","settingsActionAttack":"Attack / mine","settingsActionUse":"Use / place","settingsActionHotbarPrevious":"Previous hotbar slot","settingsActionHotbarNext":"Next hotbar slot","settingsActionInventory":"Inventory","settingsActionActionButton":"Game action","settingsActionPerspective":"Change view","settingsActionPickBlock":"Pick block (creative)","settingsActionDrop":"Drop item","settingsActionEmoteWheel":"Emotes","settingsActionChat":"Chat","settingsActionPause":"Pause menu","settingsActionLeaderboard":"Shop / leaderboard","settingsActionMenuConfirm":"Select","settingsActionMenuBack":"Back","settingsActionMenuTabPrevious":"Previous tab","settingsActionMenuTabNext":"Next tab","settingsActionMenuPageUp":"Page up","settingsActionMenuPageDown":"Page down","settingsActionMenuSecondary":"Secondary action","settingsActionMenuToggleCursor":"Switch to virtual cursor","settingsActionInventoryPrimary":"Pick up / place","settingsActionInventorySecondary":"Pick up half / place one","settingsActionInventoryQuickMove":"Quick move","settingsActionInventoryHotbarSwap":"Swap with hotbar slot","settingsActionInventoryClose":"Close","settingsActionInventoryPanelPrevious":"Previous panel","settingsActionInventoryPanelNext":"Next panel","settingsActionInventoryDrop":"Drop item","settingsActionKeyboardType":"Type key","settingsActionKeyboardBackspace":"Backspace","settingsActionKeyboardSpace":"Space","settingsActionKeyboardCaretLeft":"Move cursor left","settingsActionKeyboardCaretRight":"Move cursor right","settingsActionKeyboardShift":"Shift","settingsActionKeyboardSymbols":"Accents and symbols","settingsActionKeyboardSubmit":"Send","settingsActionKeyboardClose":"Close keyboard","settingsActionKeyboardChannel":"Chat channel","settingsAlternatives":"Try alternatives","settingsAlternativesHint":"Try each way of playing and keep the one that feels best.","settingsMenuNavigation":"Menu navigation","settingsMenuNavigationHint":"Steer a cursor with the stick and jump between buttons with the D-pad, or use just one.","settingsNavHybrid":"Cursor and D-pad","settingsMenuNavFocus":"Jump between buttons","settingsVirtualCursor":"Virtual cursor","settingsInventoryNavigation":"Inventory","settingsInventoryNavigationHint":"Steer a cursor with the stick and step slot by slot with the D-pad, or use just one.","settingsInventoryNavSlot":"Slot by slot","settingsQuickChat":"Hold chat button","settingsQuickChatHint":"Hold the chat button to pick a quick phrase. Tapping it still opens chat.","settingsQuickChatWheel":"Quick chat wheel","settingsQuickChatOff":"Off","settingsLeaderboardButton":"Shop / leaderboard button","settingsLeaderboardButtonHint":"Open the shop in one press in games that have one. The lobby leaderboard is still in the pause menu.","settingsLeaderboardButtonShop":"Shop, in games with one","settingsLeaderboardButtonLeaderboard":"Always the leaderboard","settingsTester":"Gamepad tester","settingsTesterNoPad":"Connect a gamepad and press any button to test it.","settingsTesterFamily":"Detected: {{family}}","settingsTesterHint":"Start a test to try every button and stick without moving through the menu.","settingsTesterStart":"Start test","settingsTesterStop":"Stop test","settingsTesterTesting":"Press anything to see it light up. To stop, hold {{button}} or press it three times.","settingsControlsNote":"Playing with a gamepad? Change its buttons and feel in Gamepad settings.","settingsOpenController":"Gamepad settings","keyboardSpace":"Space","keyboardSend":"Send","keyboardDone":"Done","keyboardTargetChat":"Chat","keyboardTargetSign":"Sign","keyboardTargetNameTag":"Name tag","keyboardTargetBook":"Book page","keyboardTargetBookTitle":"Book title","keyboardTargetText":"Text","keyboardPhraseGg":"gg","keyboardPhraseHi":"hi","keyboardPhraseThanks":"thanks","keyboardPhraseGl":"gl","keyboardPhraseBrb":"brb","keyboardPhraseYes":"yes","keyboardPhraseNo":"no","keyboardPhraseHelp":"help!","quickChatPick":"Pick a phrase","actionWheelPick":"Pick an action","wheelReleaseToPick":"Release to pick","wheelClose":"Close","wheelChoose":"Choose","menusSelect":"Select","menusBack":"Back","menusClose":"Close","menusQuickChat":"Quick chat (hold)","menusSkipTutorial":"Skip tutorial","menusTabs":"Tabs","menusRows":"Rows","menusCursorMode":"Cursor","menusFocusMode":"Focus","menusClick":"Click","menusRightClick":"Right-click","menusScroll":"Scroll","menusFriends":"Friends","menusSearch":"Search","menusSettings":"Settings","menusLeaveGameTitle":"Leave the game?","menusLeaveGameLeave":"Leave","menusLeaveGameStay":"Stay","menusNotifications":"Notifications","menusLobby":"Lobby","menusShop":"Shop","menusTasks":"Tasks & leaderboards","menusInvite":"Invite friends","menusAdjust":"Adjust","menusFavourite":"Favourite","screensPressToContinue":"Press {{button}} to continue","screensPressToEnterGame":"Press {{button}} to enter game","screensEnterGame":"Enter game","screensBackToGames":"Back to games","tutorialMine":"Mine","tutorialPlace":"Place / Use","tutorialInventory":"Inventory","tutorialPause":"Pause","menusUseMouse":"Use a mouse or touch here"}}');
    var AY = DY(1211),
      IY = DY(1392),
      RY = DY(7594),
      OY = DY(76),
      gY = DY(19),
      aY = DY(25),
      vY = DY(7614),
      uY = DY(7642),
      sY = DY(7623),
      iY = DY(7647),
      yY = DY(7598),
      QY = DY(8080),
      oY = DY(8082),
      WY = DY(1646);
    const EY = (YY, rY, DY) => Math.max(rY, Math.min(DY, YY)),
      mY = YY => Math.min(YY.width, YY.height) / 720,
      VY = YY => Math.max(.15, YY);
    class SY {
      constructor() {
        this.locked = !1
      }
      lock() {
        this.locked = !0
      }
      update(YY, rY) {
        const DY = Math.hypot(YY.x, YY.y) >= (YY => Math.max(.3, YY))(rY);
        return this.locked ? (this.locked = DY, !1) : DY
      }
    }
    const lY = (YY, rY) => {
        const DY = EY(rY.dtMs, 0, 100),
          FY = DY / 1e3,
          AY = mY(rY.viewport) * (rY.cursorSpeedPercent / 100),
          IY = (0, yY.g)(rY.stick, VY(rY.moveDeadzone)),
          RY = Math.hypot(IY.x, IY.y),
          OY = ((YY, rY, DY) => {
            if (rY < .3) return 0;
            const FY = DY / 350;
            return rY >= .85 ? Math.min(1, YY + FY) : Math.max(0, YY - FY)
          })(YY.speedRamp, RY, DY);
        let gY = YY.x,
          aY = YY.y;
        if (RY > 0) {
          const YY = .45 + .55 * OY,
            DY = rY.context.overInteractive ? .45 : 1,
            vY = 1400 * (YY => {
              const rY = EY(YY, 0, 1);
              return .3 * rY + .7 * rY * rY
            })(RY) * AY * YY * DY;
          gY += IY.x / RY * vY * FY, aY += IY.y / RY * vY * FY
        }
        const vY = Math.hypot(rY.dpad.x, rY.dpad.y);
        if (vY > 0) {
          const YY = 500 * AY;
          gY += rY.dpad.x / vY * YY * FY, aY += rY.dpad.y / vY * YY * FY
        }
        const uY = rY.context.magnetTarget;
        if (uY && RY < .3 && 0 === vY) {
          const YY = ((YY, rY, DY, FY, AY) => {
            const IY = rY.x - YY.x,
              RY = rY.y - YY.y,
              OY = Math.hypot(IY, RY);
            if (0 === OY) return {
              x: 0,
              y: 0
            };
            const gY = Math.min(OY, AY * (1 - FY / .3));
            let aY = IY / OY * gY,
              vY = RY / OY * gY;
            if (FY > 0) {
              const YY = DY.x / FY,
                rY = DY.y / FY,
                AY = aY * YY + vY * rY;
              AY < 0 && (aY -= AY * YY, vY -= AY * rY)
            }
            return {
              x: aY,
              y: vY
            }
          })({
            x: gY,
            y: aY
          }, uY, IY, RY, 120 * mY(rY.viewport) * FY);
          gY += YY.x, aY += YY.y
        }
        return {
          x: EY(gY, 0, Math.max(0, rY.viewport.width - 1)),
          y: EY(aY, 0, Math.max(0, rY.viewport.height - 1)),
          speedRamp: OY
        }
      },
      TY = YY => {
        const rY = (0, yY.g)(YY, .2);
        return 0 !== rY.x || 0 !== rY.y
      },
      eY = (YY, rY) => {
        const DY = (0, yY.g)(YY, .2),
          FY = Math.hypot(DY.x, DY.y);
        if (0 === FY) return {
          x: 0,
          y: 0
        };
        const AY = FY * FY * 1600,
          IY = EY(rY, 0, 100) / 1e3;
        return {
          x: DY.x / FY * AY * IY,
          y: DY.y / FY * AY * IY
        }
      },
      NY = (YY, rY) => "y" === rY ? YY.scrollHeight > YY.clientHeight + 1 : YY.scrollWidth > YY.clientWidth + 1,
      BY = (YY, rY) => {
        if (!NY(YY, rY)) return !1;
        const DY = getComputedStyle(YY),
          FY = "y" === rY ? DY.overflowY : DY.overflowX;
        return "auto" === FY || "scroll" === FY
      },
      cY = (YY, rY, DY) => {
        for (let IY = YY instanceof HTMLElement ? YY : null !== (FY = null === YY || void 0 === YY ? void 0 : YY.parentElement) && void 0 !== FY ? FY : null; IY; IY = IY.parentElement) {
          var FY;
          if (BY(IY, rY)) return IY;
          if (IY === DY) return null
        }
        if (DY) return null;
        const AY = document.scrollingElement;
        return AY instanceof HTMLElement && NY(AY, rY) ? AY : null
      },
      KY = new WeakMap,
      HY = (YY, rY) => {
        const DY = performance.now(),
          FY = KY.get(YY);
        if (FY && FY.axis === rY && DY - FY.atMs < 500 && (!FY.container || FY.container.isConnected)) return FY.container;
        const AY = zY(YY, rY);
        return KY.set(YY, {
          axis: rY,
          atMs: DY,
          container: AY
        }), AY
      },
      zY = (YY, rY) => {
        let DY = BY(YY, rY) ? YY : null,
          FY = DY ? DY.clientWidth * DY.clientHeight : 0;
        for (const AY of YY.querySelectorAll("*")) {
          const YY = AY.clientWidth * AY.clientHeight;
          YY > FY && BY(AY, rY) && (DY = AY, FY = YY)
        }
        return DY
      },
      ZY = (YY, rY, DY) => "y" === rY ? DY < 0 ? YY.scrollTop > 0 : YY.scrollTop + YY.clientHeight < YY.scrollHeight - 1 : DY < 0 ? YY.scrollLeft > 0 : YY.scrollLeft + YY.clientWidth < YY.scrollWidth - 1,
      CY = (YY, rY, DY) => {
        "y" === rY ? YY.scrollBy({
          top: DY,
          behavior: "instant"
        }) : YY.scrollBy({
          left: DY,
          behavior: "instant"
        })
      },
      fY = YY => {
        if (!YY || YY === document.scrollingElement) return new DOMRect(0, 0, window.innerWidth, window.innerHeight);
        const rY = YY.getBoundingClientRect(),
          DY = Math.max(0, rY.left),
          FY = Math.max(0, rY.top);
        return new DOMRect(DY, FY, Math.min(window.innerWidth, rY.right) - DY, Math.min(window.innerHeight, rY.bottom) - FY)
      },
      jY = (YY, rY) => YY.left < rY.right && rY.left < YY.right && YY.top < rY.bottom && rY.top < YY.bottom;
    var hY = DY(61),
      dY = DY(1092),
      JY = DY.n(dY),
      MY = DY(1125);
    let wY = 0,
      bY = !1;
    class XY {
      constructor() {
        this.element = null, this.shownKey = "", this.gap = null
      }
      setElement(YY) {
        this.element = YY, this.shownKey = "", this.gap = null
      }
      show(YY) {
        const rY = this.element;
        if (!rY) return;
        const DY = YY ? this.keepOnScreen(rY, YY) : null,
          FY = DY ? `${DY.left},${DY.top},${DY.width},${DY.height}` : "";
        if (FY === this.shownKey) return;
        const AY = "" === this.shownKey;
        this.shownKey = FY, rY.classList.toggle("Visible", null !== DY), DY && (rY.classList.toggle("Snap", AY), rY.style.width = `${DY.width}px`, rY.style.height = `${DY.height}px`, rY.style.transform = `translate(${DY.left}px, ${DY.top}px)`, AY && (rY.offsetWidth, rY.classList.remove("Snap")))
      }
      hide() {
        this.show(null)
      }
      keepOnScreen(YY, rY) {
        var DY;
        const FY = `${window.innerWidth}x${window.innerHeight}@${(()=>{if("undefined"===typeof ResizeObserver)return getComputedStyle(document.documentElement).fontSize;if(!bY){bY=!0;const YY=document.createElement("div");YY.setAttribute("aria-hidden","true"),YY.style.cssText="position: fixed; top: 0; left: 0; width: 1rem; height: 0; visibility: hidden; pointer-events: none",document.body.appendChild(YY),new ResizeObserver((()=>{wY++})).observe(YY)}return String(wY)})()}`;
        (null === (DY = this.gap) || void 0 === DY ? void 0 : DY.key) !== FY && (this.gap = {
          px: parseFloat(getComputedStyle(YY).paddingLeft) || 0,
          key: FY
        });
        const AY = this.gap.px + 2,
          IY = Math.max(rY.left, AY),
          RY = Math.max(rY.top, AY),
          OY = Math.min(rY.left + rY.width, window.innerWidth - AY),
          gY = Math.min(rY.top + rY.height, window.innerHeight - AY);
        return OY <= IY || gY <= RY ? rY : {
          left: IY,
          top: RY,
          width: OY - IY,
          height: gY - RY
        }
      }
    }
    const qY = YY => {
      let {
        placer: rY,
        className: DY
      } = YY;
      const FY = (0, hY.useCallback)((YY => {
        rY.setElement(YY)
      }), [rY]);
      return (0, MY.jsx)("div", {
        ref: FY,
        className: JY()("PadReticle", DY),
        "aria-hidden": !0
      })
    };
    var pY = DY(8084),
      kY = DY(1701);
    const GY = YY => YY >= 56320 && YY <= 57343,
      xY = YY => YY >= 55296 && YY <= 56319,
      nY = (YY, rY) => rY >= 2 && GY(YY.charCodeAt(rY - 1)) && xY(YY.charCodeAt(rY - 2)) ? rY - 2 : Math.max(0, rY - 1),
      PY = (YY, rY) => {
        let DY;
        var FY, AY;
        return DY = YY.start !== YY.end ? rY < 0 ? YY.start : YY.end : rY < 0 ? nY(YY.value, YY.start) : (FY = YY.value, (AY = YY.start) + 1 < FY.length && xY(FY.charCodeAt(AY)) && GY(FY.charCodeAt(AY + 1)) ? AY + 2 : Math.min(FY.length, AY + 1)), {
          value: YY.value,
          start: DY,
          end: DY
        }
      },
      UY = ["text", "search", "url", "email", "tel", "password", "number"],
      LY = YY => !(!(0, kY.b)(YY) || YY.isContentEditable || YY.hasAttribute("data-pad-no-osk")) && (YY instanceof HTMLTextAreaElement || YY instanceof HTMLInputElement && UY.includes(YY.type)),
      tY = YY => null !== YY.selectionStart,
      Yr = YY => {
        var rY, DY;
        const {
          value: FY
        } = YY;
        return {
          value: FY,
          start: null !== (rY = YY.selectionStart) && void 0 !== rY ? rY : FY.length,
          end: null !== (DY = YY.selectionEnd) && void 0 !== DY ? DY : FY.length
        }
      },
      rr = (YY, rY, DY) => {
        if (YY.readOnly) return;
        const FY = YY instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
        Object.getOwnPropertyDescriptor(FY, "value").set.call(YY, rY.value), tY(YY) && YY.setSelectionRange(rY.start, rY.end), (0, WY.e)(YY, new InputEvent("input", {
          bubbles: !0,
          inputType: DY
        }))
      };
    let Dr = !1;
    const Fr = (YY, rY) => !!document.execCommand(YY, !1, rY) || (Dr || (Dr = !0, console.warn(`execCommand("${YY}") failed; the on-screen keyboard is setting the value directly`)), !1),
      Ar = (YY, rY) => {
        Fr("insertText", rY) || rr(YY, function(YY, rY) {
          let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
          const FY = YY.value.slice(0, YY.start),
            AY = YY.value.slice(YY.end);
          let IY = DY < 0 ? rY.length : Math.max(0, DY - FY.length - AY.length);
          IY > 0 && IY < rY.length && xY(rY.charCodeAt(IY - 1)) && IY--;
          const RY = rY.slice(0, IY),
            OY = FY.length + RY.length;
          return {
            value: FY + RY + AY,
            start: OY,
            end: OY
          }
        }(Yr(YY), rY, YY.maxLength), "insertText")
      },
      Ir = YY => {
        Fr("delete") || rr(YY, (YY => {
          const rY = YY.start === YY.end ? nY(YY.value, YY.start) : YY.start;
          return {
            value: YY.value.slice(0, rY) + YY.value.slice(YY.end),
            start: rY,
            end: rY
          }
        })(Yr(YY)), "deleteContentBackward")
      },
      Rr = (YY, rY) => {
        if (!tY(YY)) return;
        const DY = PY(Yr(YY), rY);
        YY.setSelectionRange(DY.start, DY.end)
      },
      Or = ["button", "a[href]", "input:not([type=hidden])", "textarea", "select", "[role=button]", "[role=tab]", "[role=switch]", "[role=checkbox]", "[role=option]", "[role=menuitem]", "[data-pad-focusable]", "[data-pad-tab]", ".Dropdown-control", ".Dropdown-option"].join(","),
      gr = (YY, rY) => {
        if ("function" === typeof YY.checkVisibility) return !YY.checkVisibility({
          visibilityProperty: !0,
          checkVisibilityCSS: !0,
          opacityProperty: rY,
          checkOpacity: rY
        });
        const {
          visibility: DY
        } = getComputedStyle(YY);
        if ("hidden" === DY || "collapse" === DY) return !0;
        if (!rY) return !1;
        for (let FY = YY; FY; FY = FY.parentElement)
          if ("0" === getComputedStyle(FY).opacity) return !0;
        return !1
      },
      ar = YY => {
        if (!YY.isConnected || gr(YY, !0)) return !1;
        const rY = YY.getBoundingClientRect();
        return rY.width > 0 && rY.height > 0
      },
      vr = YY => !!YY.matches(":disabled, [aria-disabled='true']") || "button" === YY.getAttribute("role") && "-1" === YY.getAttribute("tabindex"),
      ur = YY => {
        var rY;
        if (YY.closest("[data-pad-ignore]")) return !0;
        return !!(null === (rY = YY.parentElement) || void 0 === rY ? void 0 : rY.closest("[data-pad-focusable]"))
      },
      sr = YY => {
        const rY = YY.querySelectorAll(Or);
        return YY.matches(Or) ? [YY, ...rY] : rY
      },
      ir = YY => {
        const rY = [];
        for (const DY of sr(YY)) !ur(DY) && ar(DY) && rY.push(DY);
        return rY
      },
      yr = new WeakMap,
      Qr = YY => {
        const rY = yr.get(YY);
        if (rY && or(rY, YY)) return !0;
        for (const DY of sr(YY))
          if (!ur(DY) && ar(DY)) return yr.set(YY, DY), !0;
        return yr.delete(YY), !1
      },
      or = (YY, rY) => rY.contains(YY) && YY.matches(Or) && !ur(YY) && ar(YY),
      Wr = (YY, rY) => or(YY, rY) && !vr(YY),
      Er = YY => {
        const rY = rY => {
          let DY = 0;
          for (let FY = rY.parentElement; FY && FY !== YY; FY = FY.parentElement) DY++;
          return DY
        };
        return [...YY.querySelectorAll("[data-pad-initial-area]")].filter(ar).sort(((YY, DY) => rY(DY) - rY(YY)))
      },
      mr = YY => LY(YY),
      Vr = YY => {
        const rY = YY.getBoundingClientRect();
        return {
          x: rY.left + rY.width / 2,
          y: rY.top + rY.height / 2
        }
      },
      Sr = (YY, rY, DY) => ({
        bubbles: !0,
        cancelable: !0,
        composed: !0,
        view: window,
        clientX: YY.x,
        clientY: YY.y,
        screenX: YY.x,
        screenY: YY.y,
        button: rY,
        buttons: DY,
        pointerId: 1,
        pointerType: "mouse",
        isPrimary: !0
      }),
      lr = (YY, rY) => {
        (0, WY.e)(YY, rY)
      },
      Tr = function(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const FY = 0 === DY ? 1 : 2;
        lr(YY, new PointerEvent("pointerdown", Sr(rY, DY, FY))), lr(YY, new MouseEvent("mousedown", Sr(rY, DY, FY)))
      },
      er = function(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        lr(YY, new PointerEvent("pointerup", Sr(rY, DY, 0))), lr(YY, new MouseEvent("mouseup", Sr(rY, DY, 0)))
      },
      Nr = function(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        Tr(YY, rY, DY), er(YY, rY, DY), lr(YY, 0 === DY ? new MouseEvent("click", Sr(rY, 0, 0)) : new MouseEvent("contextmenu", Sr(rY, 2, 0)))
      },
      Br = function(YY, rY, DY) {
        let {
          leaveBelow: FY = null,
          enterBelow: AY = null
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (YY !== rY) {
          if (null !== YY && void 0 !== YY && YY.isConnected) {
            const AY = {
              ...Sr(DY, 0, 0),
              relatedTarget: rY
            };
            lr(YY, new PointerEvent("pointerout", AY)), lr(YY, new MouseEvent("mouseout", AY));
            const IY = YY => !!rY && YY.contains(rY) || !!FY && YY.contains(FY);
            for (let rY = YY; rY && !IY(rY); rY = rY.parentElement) lr(rY, new PointerEvent("pointerleave", {
              ...AY,
              bubbles: !1
            })), lr(rY, new MouseEvent("mouseleave", {
              ...AY,
              bubbles: !1
            }))
          }
          if (rY) {
            const FY = {
              ...Sr(DY, 0, 0),
              relatedTarget: YY
            };
            lr(rY, new PointerEvent("pointerover", FY)), lr(rY, new MouseEvent("mouseover", FY));
            const IY = [],
              RY = rY => !(null === YY || void 0 === YY || !YY.isConnected) && rY.contains(YY) || !!AY && rY.contains(AY);
            for (let YY = rY; YY && !RY(YY); YY = YY.parentElement) IY.push(YY);
            for (const YY of IY.reverse()) lr(YY, new PointerEvent("pointerenter", {
              ...FY,
              bubbles: !1
            })), lr(YY, new MouseEvent("mouseenter", {
              ...FY,
              bubbles: !1
            }));
            lr(rY, new PointerEvent("pointermove", Sr(DY, 0, 0))), lr(rY, new MouseEvent("mousemove", Sr(DY, 0, 0)))
          }
        } else rY && (lr(rY, new PointerEvent("pointermove", Sr(DY, 0, 0))), lr(rY, new MouseEvent("mousemove", Sr(DY, 0, 0))))
      },
      cr = YY => {
        aY.g.vo(pY.i, YY)
      },
      Kr = YY => {
        if (mr(YY)) return void cr(YY);
        const rY = YY.hasAttribute("data-pad-focusable") ? YY.querySelector("a[href]") : null,
          DY = null !== rY && void 0 !== rY ? rY : YY;
        Nr(DY, Vr(DY))
      },
      Hr = ".Dropdown-root.is-open",
      zr = YY => {
        const rY = YY.querySelector(".Dropdown-control");
        return Kr(rY), rY
      },
      Zr = YY => {
        var rY;
        const DY = null !== (rY = YY.closest(Hr)) && void 0 !== rY ? rY : YY.querySelector(Hr);
        return DY ? zr(DY) : null
      },
      Cr = YY => {
        for (const rY of document.querySelectorAll(Hr)) rY.contains(YY) || zr(rY)
      },
      fr = YY => null !== YY.closest("input[type=color], input[type=file], [data-pad-mouse-only]"),
      jr = YY => {
        const rY = YY ? document.elementFromPoint(YY.x, YY.y) : null;
        return !(null === rY || void 0 === rY || !rY.closest("[data-pad-repeat]"))
      },
      hr = YY => {
        var rY;
        return null !== (rY = [...YY.querySelectorAll("[data-pad-back]")].find(ar)) && void 0 !== rY ? rY : null
      },
      dr = YY => {
        const rY = hr(YY);
        return !!rY && (Kr(rY), !0)
      },
      Jr = YY => {
        var rY, DY, FY, AY;
        return null !== (rY = null !== (DY = null !== (FY = YY.getAttribute("data-pad-key")) && void 0 !== FY ? FY : YY.getAttribute("href")) && void 0 !== DY ? DY : null === (AY = YY.querySelector("a[href]")) || void 0 === AY ? void 0 : AY.getAttribute("href")) && void 0 !== rY ? rY : null
      },
      Mr = {
        x: 0,
        y: 0,
        visible: !1,
        pressed: !1
      };
    const wr = new class {
        constructor() {
          this.state = Mr, this.listeners = new Set
        }
        get() {
          return this.state
        }
        set(YY) {
          if (rY = this.state, DY = YY, (rY.visible || DY.visible) && (rY.visible !== DY.visible || rY.x !== DY.x || rY.y !== DY.y || rY.pressed !== DY.pressed)) {
            var rY, DY;
            this.state = YY;
            for (const rY of this.listeners) rY(YY)
          }
        }
        hide() {
          this.set(Mr)
        }
        subscribe(YY) {
          return this.listeners.add(YY), () => {
            this.listeners.delete(YY)
          }
        }
      },
      br = (YY, rY) => {
        let {
          kind: DY,
          holding: FY,
          hasPress: AY,
          hasBack: IY,
          slotHasItem: RY
        } = rY;
        switch (YY) {
          case "primary":
            return "slot" === DY ? "slotPrimary" : "recipe" === DY || "button" === DY ? AY ? "pressPrimary" : "click" : "textField" === DY ? "openKeyboard" : null;
          case "secondary":
            return "slot" === DY ? "slotSecondary" : "button" !== DY && "recipe" !== DY || !AY ? null : "pressSecondary";
          case "quickMove":
            return "slot" === DY && RY ? "slotQuickMove" : null;
          case "hotbarSwap":
            return "slot" === DY && RY && !FY ? "hotbarPick" : null;
          case "openButton":
            return "close";
          case "back":
            return FY ? "cancel" : IY ? "pressBack" : "close"
        }
      },
      Xr = YY => {
        const rY = [];
        if (YY.hotbarPicking) return rY.push({
          actions: ["inventoryPrimary", "inventoryHotbarSwap"],
          labelKey: "inventorySwapHere"
        }), rY.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryCancel"
        }), rY;
        if (YY.holding) "slot" === YY.kind ? (rY.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryPlace"
        }), rY.push({
          actions: ["inventorySecondary"],
          labelKey: "inventoryPlaceOne"
        })) : "textField" === YY.kind && rY.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryType"
        }), rY.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryPutBack"
        }), rY.push({
          actions: ["inventoryDrop"],
          labelKey: "inventoryDrop"
        }), YY.openButtonCloses && rY.push({
          actions: ["inventory"],
          labelKey: "inventoryClose"
        });
        else {
          var DY;
          "slot" === YY.kind && YY.slotHasItem ? (rY.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryTake"
          }), rY.push({
            actions: ["inventorySecondary"],
            labelKey: "inventoryTakeHalf"
          }), rY.push({
            actions: ["inventoryQuickMove"],
            labelKey: YY.quickMoveToHotbar ? "inventoryToHotbar" : "inventoryQuickMove"
          }), rY.push({
            actions: ["inventoryHotbarSwap"],
            labelKey: "inventoryHotbarSwap"
          }), rY.push({
            actions: ["inventoryDrop"],
            labelKey: "inventoryDrop"
          })) : "button" !== YY.kind && "recipe" !== YY.kind || !YY.pressHints ? "button" === YY.kind || "recipe" === YY.kind ? rY.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventorySelect"
          }) : "textField" === YY.kind && rY.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryType"
          }) : (YY.pressHints.primary && rY.push({
            actions: ["inventoryPrimary"],
            labelKey: YY.pressHints.primary
          }), YY.pressHints.secondary && rY.push({
            actions: ["inventorySecondary"],
            labelKey: YY.pressHints.secondary
          }));
          const FY = null === (DY = YY.pressHints) || void 0 === DY ? void 0 : DY.back;
          FY && rY.push({
            actions: ["inventoryClose"],
            labelKey: FY
          });
          const AY = [];
          YY.openButtonCloses && AY.push("inventory"), FY || AY.push("inventoryClose"), AY.length > 0 && rY.push({
            actions: AY,
            labelKey: "inventoryClose"
          })
        }
        return rY.push({
          actions: ["inventoryPanelPrevious", "inventoryPanelNext"],
          labelKey: "inventoryPanels"
        }), YY.hasCategories ? rY.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryCategory"
        }) : YY.hasList && rY.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryPage"
        }), rY
      };
    var qr = DY(8087);
    class pr {
      constructor(YY) {
        this.probes = YY, this.byContainer = new Map, this.byParent = new Map
      }
      find(YY, rY) {
        const DY = cY(YY, "y", rY);
        if (!DY) return null;
        let FY = this.byContainer.get(DY);
        return FY || (this.probes.push({
          element: DY,
          rect: nr(DY.getBoundingClientRect())
        }), FY = {
          container: DY,
          box: fY(DY),
          group: xr(DY)
        }, this.byContainer.set(DY, FY)), FY
      }
      findForParent(YY, rY) {
        let DY = this.byParent.get(YY);
        return void 0 === DY && (DY = this.find(YY, rY), this.byParent.set(YY, DY)), DY
      }
    }
    const kr = new WeakMap;
    let Gr = 0;
    const xr = YY => {
        let rY = kr.get(YY);
        return rY || (rY = "el:" + Gr++, kr.set(YY, rY)), rY
      },
      nr = YY => ({
        left: YY.left,
        top: YY.top,
        width: YY.width,
        height: YY.height
      }),
      Pr = YY => YY.width > 0 && YY.height > 0,
      Ur = (YY, rY) => Pr(YY) && YY.left + YY.width > 0 && YY.top + YY.height > 0 && YY.left < rY.width && YY.top < rY.height,
      Lr = (YY, rY, DY) => {
        const FY = YY.top + YY.height / 2;
        return Ur(YY, rY) && (!DY || FY >= DY.top && FY <= DY.bottom)
      },
      tr = YY => ({
        x: YY.left + YY.width / 2,
        y: YY.top + YY.height / 2
      }),
      YD = (YY, rY, DY) => YY < 0 ? DY >= 0 ? 0 : rY - 1 : ((YY + DY) % rY + rY) % rY,
      rD = YY => "Left" === YY || "Right" === YY,
      DD = (YY, rY, DY) => {
        const FY = rD(DY),
          AY = FY ? YY.top : YY.left,
          IY = FY ? YY.height : YY.width,
          RY = FY ? rY.top : rY.left,
          OY = FY ? rY.height : rY.width,
          gY = Math.max(0, Math.max(RY - (AY + IY), AY - (RY + OY)));
        return IY > 1.5 * OY ? {
          gap: gY,
          offset: Math.max(0, RY - AY) + .1 * Math.max(0, AY - RY)
        } : {
          gap: gY,
          offset: Math.abs(RY + OY / 2 - (AY + IY / 2))
        }
      },
      FD = (YY, rY, DY) => {
        const FY = ((YY, rY, DY) => {
          const FY = tr(YY),
            AY = tr(rY),
            IY = rD(DY) ? Math.min(YY.width, rY.width) / 4 : Math.min(YY.height, rY.height) / 4;
          switch (DY) {
            case "Right":
              return AY.x - FY.x >= IY ? Math.max(0, rY.left - (YY.left + YY.width)) : null;
            case "Left":
              return FY.x - AY.x >= IY ? Math.max(0, YY.left - (rY.left + rY.width)) : null;
            case "Down":
              return AY.y - FY.y >= IY ? Math.max(0, rY.top - (YY.top + YY.height)) : null;
            case "Up":
              return FY.y - AY.y >= IY ? Math.max(0, YY.top - (rY.top + rY.height)) : null
          }
        })(YY, rY, DY);
        if (null === FY) return null;
        const AY = DD(YY, rY, DY);
        return FY + 3 * AY.gap + .5 * AY.offset
      },
      AD = (YY, rY) => rY.visible || null !== rY.scrollGroup && rY.scrollGroup === YY.scrollGroup,
      ID = (YY, rY, DY, FY) => {
        let AY = null,
          IY = 1 / 0;
        for (const RY of rY) {
          if (RY.key === YY.key || !AD(YY, RY) || !FY(RY)) continue;
          const rY = FD(YY.rect, RY.rect, DY);
          null !== rY && rY < IY && (AY = RY, IY = rY)
        }
        return AY
      },
      RD = (YY, rY, DY) => {
        const FY = ID(YY, rY, DY, (() => !0));
        if (!FY || rD(DY) || null === YY.scrollGroup || FY.scrollGroup === YY.scrollGroup) return FY;
        const AY = ID(YY, rY, DY, (rY => 0 === DD(YY.rect, rY.rect, DY).gap));
        return null !== AY && void 0 !== AY ? AY : FY
      },
      OD = (YY, rY, DY) => {
        let FY = null,
          AY = 1 / 0;
        for (const IY of rY) {
          if (!IY.visible || DY && !DY(IY)) continue;
          const rY = tr(IY.rect),
            RY = Math.hypot(rY.x - YY.x, rY.y - YY.y);
          RY < AY && (FY = IY, AY = RY)
        }
        return FY
      },
      gD = YY => {
        const {
          rect: rY,
          clip: DY
        } = YY;
        if (!DY) return rY;
        const FY = Math.max(rY.left, DY.left),
          AY = Math.max(rY.top, DY.top);
        return {
          left: FY,
          top: AY,
          width: Math.min(rY.left + rY.width, DY.left + DY.width) - FY,
          height: Math.min(rY.top + rY.height, DY.top + DY.height) - AY
        }
      },
      aD = (YY, rY) => rY.x >= YY.left && rY.x < YY.left + YY.width && rY.y >= YY.top && rY.y < YY.top + YY.height,
      vD = (YY, rY) => {
        let DY = null,
          FY = 1 / 0;
        for (const AY of rY) {
          const rY = gD(AY);
          (AY.visible || AY.clip) && aD(rY, YY) && (rY.width * rY.height < FY && (DY = AY, FY = rY.width * rY.height))
        }
        return DY
      },
      uD = YY => {
        let rY = null;
        for (const DY of YY) {
          if (!DY.visible) continue;
          if (!rY) {
            rY = DY;
            continue
          }
          const YY = Math.min(rY.rect.height, DY.rect.height) / 2,
            FY = DY.rect.top - rY.rect.top;
          (FY < -YY || Math.abs(FY) <= YY && DY.rect.left < rY.rect.left) && (rY = DY)
        }
        return rY
      },
      sD = (YY, rY, DY, FY, AY) => {
        const IY = AY % rY,
          RY = Math.floor(AY / rY);
        return {
          left: YY.left + IY * DY,
          top: YY.top + RY * FY,
          width: YY.width,
          height: YY.height
        }
      },
      iD = ".EntireInventoryWrapper .Inventory, .HotBarGameItemsContainer",
      yD = ".LazyLoadedItemWrapper",
      QD = ["[data-inven-idx]", "[data-recipe-key]", "[role=button]", "button", "input:not([type=hidden])", "textarea", ".CreativeCategoryTab", ".CreativeCategoryDropdownButton", ".CreativeCategoryDropdownOption", "[data-craft-ingredient]"].join(","),
      oD = [
        ["hotbar", ".HotBarGameItemsContainer"],
        ["gameButtons", ".ClientGameInventoryButtons"],
        ["categories", ".CreativeCategoryRail"],
        ["recipe", ".CraftableInfo"],
        ["armour", ".ArmourItemSlots"],
        ["main", ".InvenBodyRight"],
        ["left", ".InvenLeftSide"]
      ],
      WD = ["gameButtons", "categories", "left", "recipe", "armour", "main", "hotbar"],
      ED = YY => YY.hasAttribute("data-inven-idx") ? "slot" : YY.hasAttribute("data-recipe-key") ? "recipe" : YY.hasAttribute("data-craft-ingredient") || vr(YY) ? "info" : mr(YY) ? "textField" : "button",
      mD = (YY, rY) => "slot" === rY ? Number(YY.getAttribute("data-inven-idx")) : null,
      VD = YY => YY.matches(yD) ? YY.querySelector(QD) : YY,
      SD = YY => {
        var rY, DY;
        return {
          element: YY,
          recipe: null !== (rY = YY && (null === (DY = VD(YY)) || void 0 === DY ? void 0 : DY.getAttribute("data-recipe-key"))) && void 0 !== rY ? rY : null
        }
      },
      lD = YY => {
        const rY = VD(YY);
        if (!rY) return {
          kind: "pending",
          idx: null
        };
        const DY = ED(rY);
        return {
          kind: DY,
          idx: mD(rY, DY)
        }
      },
      TD = YY => {
        const rY = [];
        for (const [DY, FY] of oD) {
          YY.matches(FY) && rY.push([DY, YY]);
          for (const AY of YY.querySelectorAll(FY)) rY.push([DY, AY])
        }
        return rY
      },
      eD = (YY, rY) => {
        for (const [DY, FY] of YY)
          if (FY.contains(rY)) return DY;
        return "other"
      },
      ND = (YY, rY, DY, FY, AY, IY, RY, OY) => {
        var gY;
        const aY = YY.children,
          vY = nr(aY[0].getBoundingClientRect()),
          uY = [{
            element: aY[0],
            rect: vY
          }];
        if (IY.push(uY[0]), 0 === vY.width || 0 === vY.height) return;
        let sY = 1;
        for (; sY < aY.length && Math.abs(aY[sY].getBoundingClientRect().top - vY.top) < 1;) sY++;
        const iY = YY => {
            const rY = {
              element: aY[YY],
              rect: nr(aY[YY].getBoundingClientRect())
            };
            return IY.push(rY), uY.push(rY), rY.rect
          },
          yY = sY > 1 ? iY(1).left - vY.left : vY.width,
          QY = aY.length > sY ? iY(sY).top - vY.top : vY.height,
          oY = RY.find(YY, rY);
        let WY = null;
        if (oY) {
          var EY;
          const {
            container: YY,
            box: rY
          } = oY;
          WY = null !== (EY = OY.get(YY)) && void 0 !== EY ? EY : null, WY || (WY = {
            top: YY.scrollTop,
            left: YY.scrollLeft,
            box: rY,
            viewport: FY,
            targets: [],
            probes: [],
            holdsOthers: !1
          }, OY.set(YY, WY)), WY.probes.push(...uY)
        }
        const mY = AY.length;
        for (let TY = 0; TY < aY.length; TY++) {
          var VY, SY, lY;
          const YY = aY[TY],
            rY = sD(vY, sY, yY, QY, TY),
            IY = YY.firstElementChild ? YY.querySelector(QD) : null,
            RY = IY ? ED(IY) : "pending";
          AY.push({
            key: xr(YY),
            rect: rY,
            panel: DY,
            scrollGroup: null !== (VY = null === oY || void 0 === oY ? void 0 : oY.group) && void 0 !== VY ? VY : null,
            visible: Lr(rY, FY, null === oY || void 0 === oY ? void 0 : oY.box),
            clip: null !== (SY = null === oY || void 0 === oY ? void 0 : oY.box) && void 0 !== SY ? SY : null,
            element: YY,
            kind: RY,
            idx: IY ? mD(IY, RY) : null,
            scrollContainer: null !== (lY = null === oY || void 0 === oY ? void 0 : oY.container) && void 0 !== lY ? lY : null
          })
        }
        null === (gY = WY) || void 0 === gY || gY.targets.push(...AY.slice(mY))
      },
      BD = YY => YY instanceof Element && null !== YY.closest(yD),
      cD = YY => null !== YY.scrollContainer && BD(YY.element);
    class KD {
      constructor() {
        this.latched = null, this.presses = 0
      }
      press(YY, rY, DY, FY) {
        this.latched = {
          source: YY,
          focusKey: rY,
          sinceMs: DY,
          hold: {
            id: ++this.presses,
            holdMs: FY
          }
        }
      }
      update(YY, rY, DY) {
        const FY = this.latched;
        return FY ? YY && rY === FY.focusKey ? DY - FY.sinceMs < FY.hold.holdMs ? null : (this.latched = null, FY.source) : (this.latched = null, null) : null
      }
      getHold() {
        var YY, rY;
        return null !== (YY = null === (rY = this.latched) || void 0 === rY ? void 0 : rY.hold) && void 0 !== YY ? YY : null
      }
      reset() {
        this.latched = null
      }
    }
    var HD = DY(8090);
    const zD = {
        kind: "none"
      },
      ZD = YY => ({
        x: YY.clientX,
        y: YY.clientY
      }),
      CD = () => 2 * (parseFloat(getComputedStyle(document.documentElement).fontSize) || 16);
    class fD {
      constructor() {
        this.hovered = zD, this.signature = "", this.holding = !1, this.lastPoint = {
          clientX: 0,
          clientY: 0
        }
      }
      sync(YY, rY, DY, FY, AY) {
        const IY = null !== rY ? {
            kind: "slot",
            idx: rY
          } : DY ? {
            kind: "element",
            element: DY
          } : zD,
          RY = `${AY}|${Math.round(FY.clientX)},${Math.round(FY.clientY)}`,
          OY = (gY = this.hovered, aY = IY, "slot" === gY.kind && "slot" === aY.kind ? gY.idx === aY.idx : "element" === gY.kind && "element" === aY.kind ? gY.element === aY.element : gY.kind === aY.kind);
        var gY, aY;
        if (OY && RY === this.signature) return;
        const vY = !OY || AY !== this.holding || "" === this.signature;
        this.signature = RY, this.holding = AY, this.lastPoint = FY;
        const uY = this.hovered;
        if (this.hovered = IY, "slot" === IY.kind) return this.leaveElement(uY, null, FY), void(vY ? YY.hover(IY.idx, FY) : YY.moveTo(FY));
        if (OY) return void("element" === IY.kind ? Br(IY.element, IY.element, ZD(FY)) : YY.hover(null, FY));
        YY.hover(null, FY);
        const sY = "element" === IY.kind ? IY.element : null;
        "element" === uY.kind ? Br(uY.element, sY, ZD(FY)) : sY && Br(null, sY, ZD(FY))
      }
      invalidate() {
        this.signature = ""
      }
      clear(YY) {
        const rY = this.hovered;
        this.hovered = zD, this.signature = "", "none" !== rY.kind && (this.leaveElement(rY, null, this.lastPoint), YY && "slot" === rY.kind && YY.hover(null, this.lastPoint))
      }
      leaveElement(YY, rY, DY) {
        "element" === YY.kind && Br(YY.element, rY, ZD(DY))
      }
    }
    class jD {
      constructor() {
        this.lastTiltedMs = -1 / 0
      }
      update(YY, rY) {
        TY(YY) && (this.lastTiltedMs = rY)
      }
      allowsClick(YY) {
        return YY - this.lastTiltedMs > 150
      }
    }
    class hD {
      constructor() {
        this.remainder = 0, this.container = null
      }
      isScrolling(YY) {
        return 0 !== (0, yY.g)(YY, .2).y
      }
      step(YY, rY, DY) {
        YY !== this.container && (this.container = YY, this.remainder = 0);
        const FY = eY(rY, DY).y;
        if (0 === FY) return this.remainder = 0, !1;
        const AY = this.remainder + FY,
          IY = Math.trunc(AY);
        if (this.remainder = AY - IY, 0 === IY) return !1;
        const RY = YY.scrollTop;
        return YY.scrollTop = RY + IY, YY.scrollTop !== RY
      }
      current() {
        var YY;
        return null !== (YY = this.container) && void 0 !== YY && YY.isConnected ? this.container : null
      }
      reset() {
        this.remainder = 0, this.container = null
      }
    }
    var dD = DY(8094);
    const JD = "[data-pad-inventory-default]",
      MD = ".HotBarGameItemsContainer .InvenItem.Selected",
      wD = {
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
      bD = [
        ["primary", "inventoryPrimary"],
        ["secondary", "inventorySecondary"],
        ["quickMove", "inventoryQuickMove"],
        ["hotbarSwap", "inventoryHotbarSwap"],
        ["back", "inventoryClose"],
        ["openButton", "inventory"]
      ],
      XD = ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryHotbarSwap", "inventoryClose", "inventoryDrop"],
      qD = ["inventoryPanelPrevious", "inventoryPanelNext", "menuPageUp", "menuPageDown"],
      pD = [...XD, ...qD],
      kD = () => {
        return YY = (0, vY.i)("inventory"), !pD.map(vY.i).includes(YY) && !(0, yY.A)(YY);
        var YY
      },
      GD = new Set(["slotPrimary", "slotSecondary", "slotQuickMove", "pressPrimary", "pressSecondary", "openKeyboard"]),
      xD = (YY, rY) => {
        const DY = !(null === rY || void 0 === rY || !rY.isHolding());
        return function(YY, rY) {
          const DY = YY.find((YY => YY.visible && rY(YY)));
          if (DY) return DY;
          for (var FY = arguments.length, AY = new Array(FY > 2 ? FY - 2 : 0), IY = 2; IY < FY; IY++) AY[IY - 2] = arguments[IY];
          for (const RY of AY) {
            const rY = uD(YY.filter(RY));
            if (rY) return rY
          }
          return uD(YY)
        }(YY, (YY => {
          const {
            element: rY
          } = YY;
          return rY.matches(JD) || null !== rY.querySelector(JD) || rY.matches(MD)
        }), (YY => "slot" === YY.kind ? DY || null !== YY.idx && !(null === rY || void 0 === rY || !rY.hasItemAt(YY.idx)) : "recipe" === YY.kind || "pending" === YY.kind), (YY => "slot" === YY.kind || "button" === YY.kind))
      };
    class nD {
      constructor() {
        this.set = null, this.observer = new MutationObserver((YY => {
          YY.some((YY => !BD(YY.target))) && (this.set = null)
        })), this.invalidate = () => {
          this.set = null
        }, this.onScroll = YY => {
          this.scrolled(YY.target)
        }
      }
      get() {
        if (!this.set) {
          this.set = (() => {
            const YY = [],
              rY = [];
            let DY = !1;
            const FY = {
                width: window.innerWidth,
                height: window.innerHeight
              },
              AY = new Map,
              IY = new pr(rY);
            for (const uY of document.querySelectorAll(iD)) {
              const vY = TD(uY);
              DY ||= null !== uY.querySelector(".CreativeCategoryTab");
              for (const DY of uY.querySelectorAll(`${yD}:first-child`)) {
                const RY = DY.parentElement;
                ND(RY, uY, eD(vY, RY), FY, YY, rY, IY, AY)
              }
              for (const DY of uY.querySelectorAll(QD)) {
                var RY, OY, gY, aY;
                if (DY.closest(yD) || DY.closest("[data-pad-ignore]")) continue;
                const sY = null === (RY = DY.parentElement) || void 0 === RY ? void 0 : RY.closest(QD);
                if (sY && uY.contains(sY)) continue;
                const iY = ED(DY),
                  yY = mD(DY, iY);
                if (-1 === yY) continue;
                const QY = nr(DY.getBoundingClientRect());
                rY.push({
                  element: DY,
                  rect: QY
                });
                const oY = IY.findForParent(DY.parentElement, uY),
                  WY = oY && !AY.has(oY.container) ? oY : null;
                (WY ? Pr(QY) : Ur(QY, FY)) && YY.push({
                  key: xr(DY),
                  rect: QY,
                  panel: eD(vY, DY),
                  scrollGroup: null !== (OY = null === WY || void 0 === WY ? void 0 : WY.group) && void 0 !== OY ? OY : null,
                  visible: Lr(QY, FY, null === WY || void 0 === WY ? void 0 : WY.box),
                  clip: null !== (gY = null === WY || void 0 === WY ? void 0 : WY.box) && void 0 !== gY ? gY : null,
                  element: DY,
                  kind: iY,
                  idx: yY,
                  scrollContainer: null !== (aY = null === WY || void 0 === WY ? void 0 : WY.container) && void 0 !== aY ? aY : null
                })
              }
            }
            for (const [uY, sY] of AY) sY.holdsOthers = rY.some((YY => YY.element !== uY && uY.contains(YY.element) && !YY.element.closest(yD)));
            const vY = new Map;
            for (const uY of YY) vY.set(uY.element, uY);
            return {
              targets: YY,
              byElement: vY,
              hasCategories: DY,
              probes: rY,
              scrollers: AY
            }
          })(), this.observer.disconnect();
          for (const YY of document.querySelectorAll(iD)) this.observer.observe(YY, {
            childList: !0,
            subtree: !0,
            attributes: !0,
            attributeFilter: ["class", "disabled", "aria-disabled", "tabindex", "data-inven-idx"]
          })
        }
        return this.set
      }
      scrolled(YY) {
        !this.set || YY instanceof Element && ((YY, rY) => {
          const DY = YY.scrollers.get(rY);
          if (!DY || DY.holdsOthers || rY.scrollLeft !== DY.left) return !1;
          const FY = rY.scrollTop - DY.top;
          if (0 === FY) return !0;
          DY.top = rY.scrollTop;
          for (const AY of DY.probes) AY.rect.top -= FY;
          for (const AY of DY.targets) AY.rect.top -= FY, AY.visible = Lr(AY.rect, DY.viewport, DY.box);
          return !0
        })(this.set, YY) || (this.set = null)
      }
      revalidate() {
        this.set && this.set.probes.some((YY => {
          return rY = YY.rect, DY = YY.element.getBoundingClientRect(), !(rY.left === DY.left && rY.top === DY.top && rY.width === DY.width && rY.height === DY.height);
          var rY, DY
        })) && (this.set = null)
      }
      disconnect() {
        this.observer.disconnect(), this.set = null
      }
    }
    const PD = new class {
        constructor() {
          this.focused = null, this.focusTarget = null, this.lastRect = null, this.panelMemory = new Map, this.reopenSlotIdx = null, this.dpadTimers = new Map(yY.x.map((YY => [YY, (0, QY.b)(yY.z)]))), this.stickRepeat = new yY.b((0, QY.b)(yY.$)), this.pageUpTimer = (0, QY.b)(yY.Z), this.pageDownTimer = (0, QY.b)(yY.Z), this.stickGate = new SY, this.pointer = null, this.activePress = null, this.dropLatch = new KD, this.scroller = new hD, this.scrollStickClick = new jD, this.hover = new fD, this.lastRealPointer = null, this.placeAfterCategory = null, this.hotbarPick = null, this.ring = new XY, this.targets = new nD, this.hasCategories = !1, this.wasShowing = !1, this.state = HD.e, this.isActive = () => (0, qr.i)(), this.isShowing = () => "inventory" === uY.b.getActiveConsumerName() && (0, iY.i)(), this.getState = () => this.state, this.isSteppingSlots = () => this.isShowing() && null === this.pointer, this.onDeactivate = () => {
            this.endInteraction((0, qr.e)()), (0, qr.i)() || this.forgetSurface()
          }, this.forgetSurface = () => {
            var YY;
            this.reopenSlotIdx = null !== (YY = this.focused ? lD(this.focused).idx : null) && void 0 !== YY ? YY : this.reopenSlotIdx, this.focused = null, this.focusTarget = null, this.lastRect = null, this.placeAfterCategory = null, (0, qr.t)(), this.panelMemory.clear(), this.targets.disconnect()
          }, this.onFrame = YY => {
            (0, OY.unstable_batchedUpdates)((() => {
              this.frame(YY)
            }))
          }, this.shouldBlockRealPointer = YY => YY.isTrusted && !(0, WY.m)(YY) && this.isShowing(), this.noteRealPointer = YY => {
            YY instanceof MouseEvent && YY.isTrusted && !(0, WY.m)(YY) && (this.lastRealPointer ??= {
              x: 0,
              y: 0
            }, this.lastRealPointer.x = YY.clientX, this.lastRealPointer.y = YY.clientY)
          }, this.wakePressActs = YY => {
            var rY;
            return YY === (0, vY.i)("inventoryClose") ? !(null !== (rY = (0, qr.e)()) && void 0 !== rY && rY.isHolding()) : !(YY !== (0, vY.i)("inventory") || !kD()) || ((0, yY.A)(YY) ? this.isNavButton(YY) : qD.some((rY => (0, vY.i)(rY) === YY)))
          }
        }
        frame(YY) {
          var rY, DY, FY, AY, IY;
          const RY = (0, qr.e)();
          if (!(0, iY.i)()) return void(this.wasShowing && (this.endInteraction(RY), this.rehoverRealPointer()));
          this.wasShowing = !0, this.applyFocusRequest(), YY.wokeDevice && this.focusWakePointer(!(null === RY || void 0 === RY || !RY.isHolding())), this.applyCategoryPlace(), this.ensureFocus(), "cursor" !== (0, sY.i)().inventoryNavigation || this.pointer || this.engagePointer();
          const OY = performance.now();
          this.handleNavigation(YY, OY), this.handlePanels(YY), this.handlePaging(YY, OY), this.handleScroll(YY), this.handleButtons(YY, OY, RY), this.applyFocusRequest(), this.pointer && this.hoverAtPointer();
          const gY = this.ensureFocus(),
            aY = this.focusContext(RY);
          this.ring.show(gY);
          const uY = "slot" === aY.kind ? aY.idx : null,
            yY = null !== (rY = null === (DY = aY.actionElement) || void 0 === DY ? void 0 : DY.querySelector(".DoCraftItem")) && void 0 !== rY ? rY : aY.actionElement;
          this.pointer ? (this.hover.sync(RY, uY, yY, ((YY, rY) => {
            const DY = rY ? CD() : 0;
            return {
              clientX: YY.x - DY,
              clientY: YY.y - DY
            }
          })(this.pointer, aY.holding), aY.holding), wr.set({
            x: this.pointer.x,
            y: this.pointer.y,
            visible: !0,
            pressed: YY.isHeld((0, vY.i)("inventoryPrimary"))
          })) : gY && this.focused && this.hover.sync(RY, uY, yY, ((YY, rY) => {
            if (!rY) return {
              clientX: YY.left + YY.width - 10,
              clientY: YY.top + YY.height / 2 - 10
            };
            const DY = CD();
            return {
              clientX: YY.left + YY.width / 2 - DY,
              clientY: YY.top + YY.height / 2 - DY
            }
          })(gY, aY.holding), aY.holding), this.publishState({
            showing: !0,
            kind: aY.kind,
            holding: aY.holding,
            slotHasItem: aY.slotHasItem,
            pressHints: null !== (FY = null === (AY = aY.press) || void 0 === AY ? void 0 : AY.hints) && void 0 !== FY ? FY : null,
            hasCategories: this.hasCategories,
            hasList: !!this.focusTarget && cD(this.focusTarget),
            openButtonCloses: kD(),
            steppingSlots: null === this.pointer,
            quickMoveToHotbar: "slot" === aY.kind && !(null === (IY = aY.actionElement) || void 0 === IY || !IY.closest(".CreativeItemSlots")),
            dropStackHold: this.dropLatch.getHold(),
            hotbarPicking: null !== this.hotbarPick
          })
        }
        focusWakePointer(YY) {
          var rY;
          const DY = (0, iY.d)();
          if (!DY) return;
          this.targets.revalidate();
          const FY = this.getTargets().targets;
          this.setFocus(null !== (rY = vD(DY, FY)) && void 0 !== rY ? rY : YY ? OD(DY, FY, (YY => {
            let {
              rect: rY
            } = YY;
            const FY = Math.max(rY.left - DY.x, 0, DY.x - (rY.left + rY.width)),
              AY = Math.max(rY.top - DY.y, 0, DY.y - (rY.top + rY.height));
            return Math.hypot(FY, AY) <= Math.min(rY.width, rY.height) / 2
          })) : null, !1), "cursor" === (0, sY.i)().inventoryNavigation && (this.pointer = {
            x: DY.x,
            y: DY.y,
            speedRamp: 0
          })
        }
        rehoverRealPointer() {
          const YY = this.lastRealPointer;
          if (!YY || "keyboardMouse" !== gY.b.get("activeInputDevice")) return;
          const rY = document.elementFromPoint(YY.x, YY.y);
          rY && Br(null, rY, YY)
        }
        endInteraction(YY) {
          this.wasShowing = !1, this.hotbarPick = null, this.releasePress(), this.dropLatch.reset(), this.scroller.reset();
          for (const rY of this.dpadTimers.values()) rY.reset();
          this.stickRepeat.reset(), this.pageUpTimer.reset(), this.pageDownTimer.reset(), this.hover.clear(YY), this.ring.hide(), this.releasePointer(), this.publishState(HD.e)
        }
        getTargets() {
          const YY = this.targets.get();
          return this.hasCategories = YY.hasCategories, YY
        }
        currentTarget() {
          var YY;
          return this.focused && null !== (YY = this.getTargets().byElement.get(this.focused)) && void 0 !== YY ? YY : null
        }
        readFocusRect() {
          const YY = this.focused;
          if (null === YY || void 0 === YY || !YY.isConnected || !YY.closest(iD)) return null;
          const rY = YY.getBoundingClientRect();
          return rY.width > 0 && rY.height > 0 ? {
            left: rY.left,
            top: rY.top,
            width: rY.width,
            height: rY.height
          } : null
        }
        ensureFocus() {
          const YY = this.readFocusRect();
          if (YY || this.pointer) return YY;
          const {
            targets: rY,
            byElement: DY
          } = this.getTargets();
          let FY = null,
            AY = !1;
          if (this.lastRect) FY = OD(tr(this.lastRect), rY);
          else {
            var IY, RY;
            const YY = ((YY, rY) => {
                const DY = document.querySelector(".EntireInventoryWrapper [data-pad-inventory-start]");
                return DY ? xD(YY.filter((YY => DY.contains(YY.element))), rY) : null
              })(rY, (0, qr.e)()),
              OY = rY.find((YY => null !== YY.idx && YY.idx === this.reopenSlotIdx)),
              gY = document.querySelector(MD);
            AY = null !== YY || void 0 !== OY, FY = null !== (IY = null !== (RY = null !== YY && void 0 !== YY ? YY : OY) && void 0 !== RY ? RY : gY && DY.get(gY)) && void 0 !== IY ? IY : uD(rY)
          }
          return this.setFocus(FY, AY), this.lastRect
        }
        setFocus(YY) {
          let rY = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          YY && (this.focused = YY.element, this.focusTarget = YY, this.panelMemory.set(YY.panel, YY.element), rY && YY.scrollContainer && ((YY, rY) => {
            const DY = YY.getBoundingClientRect(),
              FY = fY(rY),
              AY = rY.scrollTop;
            return DY.top < FY.top ? rY.scrollTop -= FY.top - DY.top : DY.bottom > FY.bottom && (rY.scrollTop += DY.bottom - FY.bottom), rY.scrollTop !== AY
          })(YY.element, YY.scrollContainer) && this.targets.invalidate(), this.lastRect = this.readFocusRect(), this.followFocusJump())
        }
        followFocusJump() {
          if (this.pointer)
            if ("cursor" === (0, sY.i)().inventoryNavigation) {
              if (this.lastRect) {
                const YY = tr(this.lastRect);
                this.pointer = {
                  x: YY.x,
                  y: YY.y,
                  speedRamp: 0
                }
              }
            } else this.releasePointer()
        }
        engagePointer() {
          const YY = this.lastRect ? tr(this.lastRect) : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          };
          this.pointer = {
            x: YY.x,
            y: YY.y,
            speedRamp: 0
          }
        }
        releasePointer() {
          this.pointer = null, wr.hide()
        }
        hoverAtPointer() {
          var YY;
          const rY = vD(this.pointer, this.getTargets().targets);
          this.focusTarget = rY, (null === rY || void 0 === rY ? void 0 : rY.element) !== this.focused && (this.focused = null !== (YY = null === rY || void 0 === rY ? void 0 : rY.element) && void 0 !== YY ? YY : null, rY && (this.panelMemory.set(rY.panel, rY.element), this.lastRect = this.readFocusRect()))
        }
        moveCursor(YY, rY) {
          const DY = this.focusTarget,
            FY = DY && (0, sY.i)().cursorMagnetism ? tr(gD(DY)) : null;
          this.pointer = lY(this.pointer, {
            stick: YY.leftStick,
            moveDeadzone: (0, sY.i)().moveDeadzone,
            dpad: rY,
            dtMs: YY.dtMs,
            cursorSpeedPercent: (0, sY.i)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: {
              overInteractive: !1,
              magnetTarget: FY
            }
          })
        }
        move(YY) {
          this.targets.revalidate();
          const rY = this.currentTarget();
          rY && this.setFocus(RD(rY, this.getTargets().targets, YY))
        }
        step(YY) {
          const rY = this.pointer;
          if (rY && (this.releasePointer(), !this.focused)) return this.targets.revalidate(), void this.setFocus(((YY, rY, DY) => {
            var FY;
            const AY = {
              key: "",
              rect: {
                left: YY.x,
                top: YY.y,
                width: 0,
                height: 0
              },
              panel: "",
              scrollGroup: null,
              visible: !0,
              clip: null
            };
            return null !== (FY = RD(AY, rY, DY)) && void 0 !== FY ? FY : OD(YY, rY)
          })(rY, this.getTargets().targets, YY));
          this.move(YY)
        }
        isNavButton(YY) {
          return !XD.some((rY => (0, vY.i)(rY) === YY)) && !(YY === (0, vY.i)("inventory") && kD())
        }
        handleNavigation(YY, rY) {
          const DY = (0, sY.i)().inventoryNavigation,
            FY = {
              x: 0,
              y: 0
            };
          let AY = null;
          for (const gY of yY.x) {
            const IY = this.isNavButton(gY) && YY.isHeld(gY);
            IY && (FY.x += wD[gY].x, FY.y += wD[gY].y), this.dpadTimers.get(gY).update(IY, rY) && "cursor" !== DY && (AY ??= gY)
          }
          const IY = this.stickGate.update(YY.leftStick, (0, sY.i)().moveDeadzone);
          if (AY && (this.step(AY), this.stickGate.lock()), "slot" !== DY) {
            const rY = ((YY, rY, DY, FY) => "hybrid" !== YY ? "cursor" === YY : !FY && (rY || DY))(DY, null !== this.pointer, IY, null !== AY);
            return rY && !this.pointer && this.engagePointer(), void(this.pointer && this.moveCursor(YY, "cursor" === DY ? FY : {
              x: 0,
              y: 0
            }))
          }
          const RY = (0, yY.g)(YY.leftStick, (0, sY.i)().moveDeadzone),
            OY = this.stickRepeat.update(IY ? (0, yY.cb)(RY) : null, rY);
          OY && this.move(OY)
        }
        applyCategoryPlace() {
          const YY = this.placeAfterCategory;
          if (!YY) return;
          this.placeAfterCategory = null, this.targets.invalidate();
          const rY = OD(tr(YY.rect), this.getTargets().targets, (rY => rY.scrollGroup === YY.scrollGroup));
          this.setFocus(rY, !1)
        }
        applyFocusRequest() {
          const YY = (0, qr.t)();
          YY && (this.targets.invalidate(), this.setFocus((0, qr.c)(this.getTargets().targets, YY)))
        }
        handlePanels(YY) {
          var rY, DY, FY;
          const AY = YY.wasPressed((0, vY.i)("inventoryPanelPrevious")),
            IY = YY.wasPressed((0, vY.i)("inventoryPanelNext"));
          if (!AY && !IY) return;
          const {
            targets: RY
          } = this.getTargets(), OY = (gY = ((YY, rY) => {
            const DY = [];
            for (const AY of YY) AY.visible && !DY.includes(AY.panel) && DY.push(AY.panel);
            const FY = YY => {
              const FY = rY.indexOf(YY);
              return -1 === FY ? rY.length + DY.indexOf(YY) : FY
            };
            return DY.sort(((YY, rY) => FY(YY) - FY(rY)))
          })(RY, WD), aY = null !== (rY = null === (DY = this.focusTarget) || void 0 === DY ? void 0 : DY.panel) && void 0 !== rY ? rY : null, uY = IY ? 1 : -1, 0 === gY.length ? null : gY[YD(null === aY ? -1 : gY.indexOf(aY), gY.length, uY)]);
          var gY, aY, uY;
          if (null === OY) return;
          const sY = this.panelMemory.get(OY),
            iY = RY.filter((YY => YY.panel === OY)),
            yY = null !== (FY = iY.find((YY => YY.element === sY && YY.visible))) && void 0 !== FY ? FY : xD(iY, (0, qr.e)());
          this.setFocus(yY)
        }
        handlePaging(YY, rY) {
          const DY = (0, vY.i)("menuPageUp"),
            FY = (0, vY.i)("menuPageDown"),
            AY = this.pageUpTimer.update(YY.isHeld(DY), rY),
            IY = this.pageDownTimer.update(YY.isHeld(FY), rY);
          if (!AY && !IY) return;
          const RY = IY ? 1 : -1;
          if (!YY.wasPressed(IY ? FY : DY) && this.hasCategories) return;
          if ((YY => {
              const rY = Array.from(document.querySelectorAll(".EntireInventoryWrapper .CreativeCategoryTab"));
              if (0 === rY.length) return !1;
              const DY = rY.findIndex((YY => YY.classList.contains("Selected"))),
                FY = rY[YD(DY, rY.length, YY)];
              return Nr(FY, Vr(FY)), !0
            })(RY)) {
            var OY, gY;
            this.targets.invalidate();
            const YY = null !== (OY = null === (gY = this.focusTarget) || void 0 === gY ? void 0 : gY.scrollGroup) && void 0 !== OY ? OY : null,
              rY = this.readFocusRect();
            return void(this.placeAfterCategory = null !== YY && rY && !this.pointer ? {
              rect: rY,
              scrollGroup: YY
            } : null)
          }
          const {
            targets: aY
          } = this.getTargets(), uY = this.currentTarget(), sY = uY && cD(uY) ? uY : aY.find((YY => cD(YY) && YY.visible));
          if (!sY) return;
          const iY = ((YY, rY, DY, FY) => {
            if (null === YY.scrollGroup) return null;
            const AY = tr(YY.rect),
              IY = AY.x,
              RY = AY.y + ("Down" === DY ? FY : -FY);
            let OY = null,
              gY = 1 / 0;
            for (const aY of rY) {
              if (aY.scrollGroup !== YY.scrollGroup || aY.key === YY.key) continue;
              const rY = tr(aY.rect);
              if ("Down" === DY ? rY.y <= AY.y : rY.y >= AY.y) continue;
              const FY = Math.hypot(rY.x - IY, rY.y - RY);
              FY < gY && (OY = aY, gY = FY)
            }
            return OY
          })(sY, aY, RY > 0 ? "Down" : "Up", sY.scrollContainer.clientHeight);
          this.setFocus(null !== iY && void 0 !== iY ? iY : sY)
        }
        handleScroll(YY) {
          var rY, DY, FY, AY, IY, RY;
          if (!this.scroller.isScrolling(YY.rightStick)) return void this.scroller.reset();
          const {
            targets: OY
          } = this.getTargets(), gY = this.pointer, aY = !gY && this.focusTarget && cD(this.focusTarget) ? this.focusTarget.scrollContainer : null, vY = gY && (null === (rY = OY.find((YY => YY.clip && aD(YY.clip, gY)))) || void 0 === rY ? void 0 : rY.scrollContainer), uY = null !== (DY = null !== (FY = null !== (AY = this.scroller.current()) && void 0 !== AY ? AY : vY) && void 0 !== FY ? FY : aY) && void 0 !== DY ? DY : null === (IY = OY.find(cD)) || void 0 === IY ? void 0 : IY.scrollContainer;
          if (!uY || !this.scroller.step(uY, YY.rightStick, YY.dtMs)) return;
          this.targets.scrolled(uY);
          const sY = gY || (null === (RY = this.focusTarget) || void 0 === RY ? void 0 : RY.scrollContainer) !== uY ? null : this.readFocusRect();
          if (!sY) return;
          const iY = fY(uY),
            yY = tr(sY);
          if (yY.y < iY.top || yY.y > iY.bottom) {
            const YY = this.focusTarget.scrollGroup,
              rY = OD(yY, this.getTargets().targets, (rY => rY.scrollGroup === YY));
            this.setFocus(rY, !1)
          }
        }
        focusContext(YY) {
          const {
            kind: rY,
            idx: DY
          } = this.focused ? lD(this.focused) : {
            kind: null,
            idx: null
          }, FY = this.focused ? VD(this.focused) : null, AY = FY ? (0, dD.b)(FY) : null;
          return {
            kind: rY,
            idx: DY,
            actionElement: FY,
            press: AY,
            hasPress: null !== AY,
            hasBack: !(null === AY || void 0 === AY || !AY.back),
            holding: YY.isHolding(),
            slotHasItem: null !== DY && YY.hasItemAt(DY)
          }
        }
        handleButtons(YY, rY, DY) {
          var FY, AY;
          if (!this.activePress || YY.isHeld(this.activePress.button) && (FY = this.activePress.target, AY = this.focused, null !== FY.recipe ? SD(AY).recipe === FY.recipe : AY === FY.element) || this.releasePress(), this.scrollStickClick.update(YY.rightStick, rY), !this.handleHotbarPick(YY, DY)) {
            for (const [FY, AY] of bD) {
              const IY = (0, vY.i)(AY);
              if (!YY.wasPressed(IY) || "openButton" === FY && !kD()) continue;
              if ("RS" === IY && !this.scrollStickClick.allowsClick(rY)) continue;
              const RY = this.focusContext(DY),
                OY = br(FY, RY);
              OY && this.runIntent(OY, RY, IY, DY)
            }
            this.handleDrop(YY, rY, DY)
          }
        }
        handleHotbarPick(YY, rY) {
          const DY = this.hotbarPick;
          if (!DY) return !1;
          const FY = YY.wasPressed((0, vY.i)("inventoryPrimary")) || YY.wasPressed((0, vY.i)("inventoryHotbarSwap"));
          if (!FY && !YY.wasPressed((0, vY.i)("inventoryClose")) && !rY.isHolding()) return !(YY.wasPressed((0, vY.i)("inventory")) && kD());
          const AY = this.focusTarget;
          FY && "hotbar" === (null === AY || void 0 === AY ? void 0 : AY.panel) && null !== AY.idx && AY.idx !== DY.idx && (rY.swapWithHotbar(AY.idx, DY.idx), this.afterAction()), this.hotbarPick = null;
          const IY = DY.element.isConnected ? this.getTargets().byElement.get(DY.element) : void 0;
          return IY && this.setFocus(IY), !0
        }
        startHotbarPick(YY) {
          var rY;
          const {
            targets: DY,
            byElement: FY
          } = this.getTargets(), AY = document.querySelector(MD), IY = null !== (rY = AY && FY.get(AY)) && void 0 !== rY ? rY : DY.find((YY => "hotbar" === YY.panel));
          IY && this.focused && (this.hotbarPick = {
            idx: YY,
            element: this.focused
          }, this.setFocus(IY))
        }
        focusKey() {
          return this.focused ? xr(this.focused) : null
        }
        handleDrop(YY, rY, DY) {
          const FY = (0, vY.i)("inventoryDrop");
          if (YY.wasPressed(FY)) {
            const YY = (AY = this.focusContext(DY)).holding ? {
              kind: "ja"
            } : "slot" === AY.kind && AY.slotHasItem && null !== AY.idx ? {
              kind: "slot",
              idx: AY.idx
            } : null;
            return void(YY && (this.dropFrom(YY, !1, DY), this.dropLatch.press(YY, this.focusKey(), rY, oY.c[(0, sY.i)().tapHoldTime].dropStackMs), this.afterAction()))
          }
          var AY;
          const IY = this.dropLatch.update(YY.isHeld(FY), this.focusKey(), rY);
          IY && ((YY, rY, DY) => "ja" === YY.kind ? rY : !rY && DY(YY.idx))(IY, DY.isHolding(), DY.hasItemAt) && (this.dropFrom(IY, !0, DY), this.afterAction())
        }
        dropFrom(YY, rY, DY) {
          "ja" === YY.kind ? DY.dropHeld(rY, this.slotPoint()) : DY.dropSlot(YY.idx, rY)
        }
        slotPoint() {
          return this.pointer ? {
            clientX: this.pointer.x,
            clientY: this.pointer.y
          } : this.lastRect ? (YY => {
            const rY = tr(YY);
            return {
              clientX: rY.x,
              clientY: rY.y
            }
          })(this.lastRect) : {
            clientX: 0,
            clientY: 0
          }
        }
        runIntent(YY, rY, DY, FY) {
          const AY = rY.idx,
            IY = rY.actionElement;
          switch (IY && GD.has(YY) && (0, WY.p)(IY), YY) {
            case "slotPrimary":
              FY.primary(AY, this.slotPoint());
              break;
            case "slotSecondary":
              FY.secondary(AY, this.slotPoint());
              break;
            case "slotQuickMove":
              FY.quickMove(AY, this.slotPoint());
              break;
            case "hotbarPick":
              this.startHotbarPick(AY);
              break;
            case "pressPrimary":
            case "pressSecondary":
              this.startPress(rY.press, "pressPrimary" === YY ? "primary" : "secondary", DY);
              break;
            case "click":
              Nr(IY, Vr(IY));
              break;
            case "openKeyboard":
              mr(IY) && cr(IY);
              break;
            case "pressBack":
              rY.press.back();
              break;
            case "cancel":
              FY.cancel();
              break;
            case "close":
              return this.releasePress(), void FY.close()
          }
          this.afterAction()
        }
        startPress(YY, rY, DY) {
          this.releasePress(), YY.press(rY) && (this.activePress = {
            handlers: YY,
            button: DY,
            target: SD(this.focused)
          })
        }
        releasePress() {
          var YY, rY, DY;
          null === (YY = this.activePress) || void 0 === YY || null === (rY = (DY = YY.handlers).release) || void 0 === rY || rY.call(DY), this.activePress = null
        }
        afterAction() {
          this.targets.invalidate(), this.hover.invalidate()
        }
        publishState(YY) {
          ((YY, rY) => {
            var DY, FY, AY, IY, RY, OY;
            return YY.showing === rY.showing && YY.kind === rY.kind && YY.holding === rY.holding && YY.slotHasItem === rY.slotHasItem && (null === (DY = YY.pressHints) || void 0 === DY ? void 0 : DY.primary) === (null === (FY = rY.pressHints) || void 0 === FY ? void 0 : FY.primary) && (null === (AY = YY.pressHints) || void 0 === AY ? void 0 : AY.secondary) === (null === (IY = rY.pressHints) || void 0 === IY ? void 0 : IY.secondary) && (null === (RY = YY.pressHints) || void 0 === RY ? void 0 : RY.back) === (null === (OY = rY.pressHints) || void 0 === OY ? void 0 : OY.back) && YY.hasCategories === rY.hasCategories && YY.hasList === rY.hasList && YY.openButtonCloses === rY.openButtonCloses && YY.steppingSlots === rY.steppingSlots && YY.hotbarPicking === rY.hotbarPicking && YY.quickMoveToHotbar === rY.quickMoveToHotbar && YY.dropStackHold === rY.dropStackHold
          })(YY, this.state) || (this.state = YY, aY.g.vo(HD.g, YY))
        }
      },
      UD = ["pointermove", "pointerover", "pointerout", "mouseover", "mouseout"];
    var LD = DY(8098),
      tD = DY(332),
      YF = DY(1619),
      rF = DY(7618);
    const DF = "[data-pad-secondary]",
      FF = YY => YY instanceof HTMLElement && ar(YY) && !vr(YY),
      AF = YY => {
        const rY = YY.querySelector(DF);
        if (rY && FF(rY)) return rY;
        for (const AY of null !== (DY = null === (FY = YY.parentElement) || void 0 === FY ? void 0 : FY.children) && void 0 !== DY ? DY : []) {
          var DY, FY;
          if (AY !== YY && AY.matches(DF) && FF(AY)) return AY
        }
        return null
      },
      IF = (YY, rY, DY, FY) => Math.max(0, Math.max(YY, DY) - Math.min(rY, FY)),
      RF = (YY, rY, DY, FY) => Math.max(0, Math.min(rY, FY) - Math.max(YY, DY)),
      OF = (YY, rY, DY) => {
        const FY = (YY.left + YY.right) / 2,
          AY = (YY.top + YY.bottom) / 2,
          IY = (rY.left + rY.right) / 2,
          RY = (rY.top + rY.bottom) / 2;
        if ("Left" === DY || "Right" === DY) {
          const OY = "Right" === DY ? 1 : -1;
          return {
            forwardGap: "Right" === DY ? rY.left - YY.right : YY.left - rY.right,
            centreForward: (IY - FY) * OY,
            sidewaysGap: IF(YY.top, YY.bottom, rY.top, rY.bottom),
            sidewaysOverlap: RF(YY.top, YY.bottom, rY.top, rY.bottom),
            centreSideways: Math.abs(RY - AY),
            startSideways: Math.abs(rY.top - YY.top),
            fromSidewaysSize: YY.bottom - YY.top,
            toSidewaysSize: rY.bottom - rY.top,
            toLength: rY.right - rY.left
          }
        }
        const OY = "Down" === DY ? 1 : -1;
        return {
          forwardGap: "Down" === DY ? rY.top - YY.bottom : YY.top - rY.bottom,
          centreForward: (RY - AY) * OY,
          sidewaysGap: IF(YY.left, YY.right, rY.left, rY.right),
          sidewaysOverlap: RF(YY.left, YY.right, rY.left, rY.right),
          centreSideways: Math.abs(IY - FY),
          startSideways: Math.abs(rY.left - YY.left),
          fromSidewaysSize: YY.right - YY.left,
          toSidewaysSize: rY.right - rY.left,
          toLength: rY.bottom - rY.top
        }
      },
      gF = YY => YY.centreForward > .5 && YY.forwardGap >= -YY.toLength / 2,
      aF = YY => {
        const rY = YY.sidewaysOverlap > 0 ? 0 : 2 * YY.fromSidewaysSize,
          DY = YY.fromSidewaysSize > 1.5 * YY.toSidewaysSize ? YY.startSideways : YY.centreSideways;
        return Math.max(0, YY.forwardGap) + 3 * YY.sidewaysGap + rY + .1 * DY
      },
      vF = (YY, rY) => RF(YY.top, YY.bottom, rY.top, rY.bottom) > 0 || rY.bottom - rY.top > rY.right - rY.left,
      uF = (YY, rY, DY, FY, AY, IY) => {
        const RY = AY ? iF(YY, rY, DY, AY) : new Set,
          OY = QF(YY, rY, DY, RY);
        return OY < 0 && RY.size > 0 && IY ? sF(YY, rY, DY, IY) : FY && OY >= 0 ? yF(YY, rY, DY, FY, OY, RY) : OY
      },
      sF = (YY, rY, DY, FY) => {
        const AY = new Set,
          IY = QF(YY, rY, "Up", AY) >= 0,
          RY = QF(YY, rY, "Down", AY) >= 0,
          OY = new Set;
        return rY.forEach(((rY, DY) => {
          const AY = rY.top + rY.bottom < YY.top + YY.bottom;
          FY[DY] && !(AY ? IY : RY) || OY.add(DY)
        })), QF(YY, rY, DY, OY)
      },
      iF = (YY, rY, DY, FY) => {
        const AY = new Set;
        return "Left" !== DY && "Right" !== DY || rY.forEach(((rY, DY) => {
          FY[DY] && RF(YY.top, YY.bottom, rY.top, rY.bottom) <= 0 && AY.add(DY)
        })), AY
      },
      yF = (YY, rY, DY, FY, AY, IY) => {
        const RY = OF(YY, rY[AY], DY).forwardGap;
        let OY = AY,
          gY = FY[AY],
          aY = 1 / 0;
        return rY.forEach(((rY, vY) => {
          const uY = FY[vY];
          if (IY.has(vY) || uY < gY || uY === gY && OY === AY) return;
          const sY = OF(YY, rY, DY);
          if (!gF(sY) || sY.forwardGap < 0 || sY.forwardGap >= RY) return;
          const iY = aF(sY);
          (uY > gY || iY < aY) && (OY = vY, gY = uY, aY = iY)
        })), OY
      },
      QF = (YY, rY, DY, FY) => {
        let AY = -1,
          IY = 1 / 0;
        if (rY.forEach(((rY, RY) => {
            const OY = ((YY, rY, DY) => {
              const FY = OF(YY, rY, DY);
              if (!gF(FY)) return null;
              const AY = Math.max(0, FY.forwardGap);
              return FY.sidewaysOverlap <= 0 && FY.sidewaysGap > 2 * (AY + 1) ? null : aF(FY)
            })(YY, rY, DY);
            null !== OY && OY < IY && !FY.has(RY) && (IY = OY, AY = RY)
          })), AY < 0) return -1;
        const RY = rY[AY],
          OY = OF(YY, RY, DY).forwardGap;
        let gY = OY,
          aY = AY;
        return rY.forEach(((rY, IY) => {
          if (IY === AY || FY.has(IY) || !((YY, rY, DY) => {
              const FY = "Left" === DY || "Right" === DY,
                AY = FY ? RF(YY.top, YY.bottom, rY.top, rY.bottom) : RF(YY.left, YY.right, rY.left, rY.right),
                IY = FY ? Math.min(YY.bottom - YY.top, rY.bottom - rY.top) : Math.min(YY.right - YY.left, rY.right - rY.left);
              return AY > 0 && AY >= IY / 2
            })(rY, RY, DY)) return;
          const vY = OF(YY, rY, DY);
          gF(vY) && vY.forwardGap + vY.toLength <= OY + 1 && vY.forwardGap < gY && (gY = vY.forwardGap, aY = IY)
        })), aY
      },
      oF = (YY, rY) => {
        let DY = -1,
          FY = 1 / 0;
        return rY.forEach(((rY, AY) => {
          const IY = Math.max(rY.left - YY.x, 0, YY.x - rY.right),
            RY = Math.max(rY.top - YY.y, 0, YY.y - rY.bottom),
            OY = Math.hypot(IY, RY);
          OY < FY && (FY = OY, DY = AY)
        })), DY
      },
      WF = (YY, rY) => {
        const DY = Math.min(YY.bottom - YY.top, rY.bottom - rY.top) / 2;
        return Math.abs(YY.top - rY.top) > DY ? YY.top - rY.top : YY.left - rY.left
      },
      EF = YY => {
        let rY = -1;
        for (let DY = 0; DY < YY.length; DY++)(rY < 0 || WF(YY[DY], YY[rY]) < 0) && (rY = DY);
        return rY
      };
    var mF = DY(1663),
      VF = DY(8102),
      SF = DY(8104);
    const lF = YY => {
        if ("death" !== YY || "inGame" !== gY.b.get("gameState") || "off" === (0, sY.i)().quickChat || null === (0, mF.b)()) return !1;
        const rY = (0, vY.i)("chat");
        return rY !== (0, vY.i)("menuConfirm") && rY !== (0, vY.i)("menuBack")
      },
      TF = new VF.d;
    var eF = DY(3863),
      NF = DY(8111);
    const BF = YY => {
        let rY = null;
        for (const DY of YY.querySelectorAll("[data-pad-tabs]")) ar(DY) && (!rY || Number(DY.dataset.padTabs) < Number(rY.dataset.padTabs)) && (rY = DY);
        return rY
      },
      cF = (YY, rY, DY, FY) => {
        YY.focusWhenFound((() => {
          const AY = YY.pickInitial(rY);
          if (AY && !DY.has(AY) && (null === FY || void 0 === FY || !FY.contains(AY))) return AY;
          const IY = ((YY, rY) => {
              const DY = rY => YY.getEnabledCandidates(rY).filter((YY => !YY.closest("[data-pad-tabs]")));
              for (const FY of Er(rY)) {
                const YY = DY(FY);
                if (YY.length > 0) return YY
              }
              return DY(rY)
            })(YY, rY).filter((YY => !DY.has(YY))),
            RY = EF(IY.map((YY => YY.getBoundingClientRect())));
          return RY >= 0 ? IY[RY] : null
        }), 3e3)
      },
      KF = (YY, rY, DY, FY) => {
        var AY;
        const IY = ((YY, rY) => {
          if (0 === YY.length) return null;
          const DY = YY.findIndex((YY => "true" === YY.dataset.padSelected));
          return DY < 0 ? rY > 0 ? YY[0] : YY[YY.length - 1] : YY[(DY + rY + YY.length) % YY.length]
        })([...DY.querySelectorAll("[data-pad-tab]")].filter((YY => ar(YY) && !vr(YY))), FY);
        if (!IY) return;
        const RY = null !== (AY = null === YY || void 0 === YY ? void 0 : YY.getFocused()) && void 0 !== AY ? AY : null,
          OY = !(null === RY || void 0 === RY || !RY.isConnected) && DY.contains(RY),
          gY = YY && !OY ? new Set(YY.getEnabledCandidates(rY)) : null;
        Kr(IY), YY && (gY ? cF(YY, rY, gY, DY) : YY.setFocus(IY, {
          byUser: !0
        }))
      },
      HF = YY => {
        var rY;
        const DY = fY(null !== (rY = cY(YY, "x")) && void 0 !== rY ? rY : YY),
          FY = ir(YY).filter((YY => !vr(YY))),
          AY = FY.filter((YY => jY(YY.getBoundingClientRect(), DY)));
        return (AY.length > 0 ? AY : FY).sort(((YY, rY) => WF(YY.getBoundingClientRect(), rY.getBoundingClientRect())))
      },
      zF = (YY, rY, DY) => {
        const FY = [...rY.querySelectorAll("[data-pad-row]")].filter(ar),
          AY = YY.getFocused(),
          IY = AY ? FY.findIndex((YY => YY.contains(AY))) : -1;
        let RY = 0,
          OY = DY > 0 ? 0 : FY.length - 1;
        if (IY >= 0 && AY) RY = Math.max(0, HF(FY[IY]).indexOf(AY)), OY = IY + DY;
        else if (AY) {
          const YY = AY.getBoundingClientRect(),
            rY = FY.map((rY => {
              const FY = rY.getBoundingClientRect();
              return DY > 0 ? FY.top >= YY.top : FY.bottom <= YY.bottom
            }));
          OY = DY > 0 ? rY.indexOf(!0) : rY.lastIndexOf(!0)
        }
        for (let gY = OY; gY >= 0 && gY < FY.length; gY += DY) {
          const rY = HF(FY[gY]);
          if (rY.length > 0) return void YY.setFocus(rY[Math.min(RY, rY.length - 1)], {
            byUser: !0
          })
        }
      },
      ZF = (YY, rY, DY) => {
        var FY, AY;
        const IY = null !== (FY = null === YY || void 0 === YY ? void 0 : YY.getFocused()) && void 0 !== FY ? FY : null,
          RY = null !== IY && void 0 !== IY && IY.closest("[data-pad-row]") ? "x" : "y",
          OY = null !== (AY = IY ? cY(IY, RY, rY) : null) && void 0 !== AY ? AY : HY(rY, RY);
        if (!OY) return;
        const gY = IY ? Vr(IY) : null;
        if (CY(OY, RY, DY * ("y" === RY ? OY.clientHeight : OY.clientWidth) * .85), !YY || !gY) return;
        const aY = fY(OY),
          vY = YY.getEnabledCandidates(rY).filter((YY => OY.contains(YY) && jY(YY.getBoundingClientRect(), aY))),
          uY = oF(gY, vY.map((YY => YY.getBoundingClientRect())));
        uY >= 0 && YY.setFocus(vY[uY], {
          scroll: !1,
          byUser: !0
        })
      };
    let CF = null;
    const fF = (YY, rY) => {
        var DY, FY;
        const AY = rY.querySelector("[data-pad-friends-column]"),
          IY = YY.getFocused();
        if (!AY || !IY || !AY.contains(IY)) return !1;
        const RY = YY.getEnabledCandidates(rY).filter((YY => !AY.contains(YY))),
          OY = oF(Vr(IY), RY.map((YY => YY.getBoundingClientRect()))),
          gY = null === (DY = CF) || void 0 === DY ? void 0 : DY.deref();
        return YY.setFocus(null !== gY && void 0 !== gY && gY.isConnected ? gY : null !== (FY = RY[OY]) && void 0 !== FY ? FY : null, {
          byUser: !0
        }), !0
      },
      jF = YY => {
        const rY = (0, vY.i)(YY);
        return (0, yY.A)(rY) || rF.q.some((YY => (0, vY.i)(YY) === rY)) ? null : rY
      },
      hF = (YY, rY) => {
        const DY = jF(rY);
        return null !== DY && YY.wasPressed(DY)
      },
      dF = function(YY, rY, DY) {
        let FY = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const AY = (YY => {
            var rY, DY;
            return null !== (rY = null === (DY = BF(YY)) || void 0 === DY ? void 0 : DY.querySelector("[data-pad-tab][data-pad-selected='true']")) && void 0 !== rY ? rY : null
          })(rY),
          IY = YY && AY ? new Set(YY.getEnabledCandidates(rY)) : null;
        (0, LD.d)(), DY === tD.t.SETTINGS && (0, YF.l)(gY.b.get("openEverythingMenuName")) ? gY.b.set({
          openEverythingMenuName: DY
        }) : (0, YF.v)(new Event("padMenuShortcut"), DY, FY), YY && IY && AY && cF(YY, rY, IY, AY.closest("[data-pad-tabs]"))
      },
      JF = YY => null !== YY.closest(".Dropdown-root") || null !== YY.querySelector(".Dropdown-root.is-open"),
      MF = YY => null !== (0, NF.c)() && "popup" !== YY.layer.kind && !BF(YY.root) && !JF(YY.root),
      wF = (0, QY.b)(yY.Z),
      bF = (0, QY.b)(yY.Z),
      XF = (YY, rY, DY) => {
        if (((YY, rY) => {
            const DY = (0, vY.i)("chat");
            return lF(rY) && YY.isHeld(DY) ? "hold" === TF.update(YY.wasPressed(DY), YY.isHeld(DY), performance.now(), oY.c[(0, sY.i)().tapHoldTime].wheelMs) && (uY.b.consumeButton(DY), aY.g.vo(SF.k), !0) : (TF.release(), !1)
          })(rY, DY.layer.kind)) return !0;
        const FY = DY.root;
        for (const [RY, OY] of [
            ["menuTabPrevious", -1],
            ["menuTabNext", 1]
          ])
          if (rY.wasPressed((0, vY.i)(RY))) {
            const rY = JF(FY) ? null : BF(FY);
            if (rY) KF(YY, FY, rY, OY);
            else if (MF(DY)) {
              var AY;
              const rY = YY ? new Set(YY.getEnabledCandidates(FY)) : null;
              null !== (AY = (0, NF.c)()) && void 0 !== AY && AY(OY) && YY && rY && cF(YY, FY, rY, null)
            } else YY && zF(YY, FY, OY);
            return !0
          } for (const [RY, OY, gY] of [
            ["menuPageUp", -1, wF],
            ["menuPageDown", 1, bF]
          ]) {
          const DY = (0, vY.i)(RY);
          if (rY.wasPressed(DY) && gY.reset(), gY.update(rY.isHeld(DY), performance.now())) return ZF(YY, FY, OY), !0
        }
        const IY = "popup" === DY.layer.kind;
        return hF(rY, "pause") ? (IY || (0, YF.t)() && "menu" !== DY.layer.kind || dF(YY, FY, (0, YF.t)() ? tD.t.SETTINGS : (0, eF.c)()), !0) : !!hF(rY, "leaderboard") && ("home" === DY.layer.kind ? (YY => {
          const rY = [...YY.querySelectorAll("[data-pad-notifications]")].find(ar);
          rY && Kr(rY)
        })(FY) : IY || dF(YY, FY, tD.t.LOBBY_LEADERBOARD, "inGame" === gY.b.get("gameState")), !0)
      },
      qF = (YY, rY, DY) => {
        if (XF(YY, rY, DY)) return !0;
        const FY = "home" === DY.layer.kind;
        if (rY.wasPressed((0, vY.i)("menuSecondary"))) {
          const rY = YY.getFocused(),
            AY = rY ? AF(rY) : null;
          if (AY) return Kr(AY), !0;
          if (FY) {
            const rY = DY.root.querySelector("[data-pad-search] input");
            return rY && Wr(rY, DY.root) ? (YY.setFocus(rY, {
              byUser: !0
            }), Kr(rY)) : gY.b.set({
              searchOpen: !0
            }), !0
          }
        }
        return !(!FY || !hF(rY, "inventory")) && (((YY, rY) => {
          var DY, FY;
          const AY = rY.querySelector("[data-pad-friends-column]");
          if (!AY || !ar(AY)) return void(0, YF.v)(new Event("padMenuShortcut"), tD.t.SOCIAL);
          if (fF(YY, rY)) return;
          const IY = null !== (DY = null === (FY = AY.querySelector("[data-pad-friends-start]")) || void 0 === FY ? void 0 : FY.getBoundingClientRect().top) && void 0 !== DY ? DY : -1 / 0,
            RY = YY.getEnabledCandidates(AY),
            OY = RY.filter((YY => YY.getBoundingClientRect().top >= IY)),
            gY = OY.length > 0 ? OY : RY,
            aY = EF(gY.map((YY => YY.getBoundingClientRect())));
          YY.setFocus(aY >= 0 ? gY[aY] : null, {
            byUser: !0
          })
        })(YY, DY.root), !0)
      },
      pF = YY => {
        var rY, DY, FY;
        const AY = Jr(YY);
        if (null !== AY) return AY;
        const IY = (null !== (rY = null !== (DY = null !== (FY = YY.getAttribute("aria-label")) && void 0 !== FY ? FY : YY.getAttribute("title")) && void 0 !== DY ? DY : YY.textContent) && void 0 !== rY ? rY : "").replace(/\s+/g, " ").trim();
        return IY ? `${YY.tagName}:${IY.slice(0,100)}` : null
      };
    class kF {
      constructor() {
        this.remembered = new Map, this.history = []
      }
      enter(YY) {
        const rY = this.history.indexOf(YY);
        if (rY >= 0) {
          for (const YY of this.history.splice(rY + 1)) this.remembered.delete(YY);
          return !0
        }
        return this.remembered.delete(YY), this.history.push(YY), this.history.length > 32 && this.forget(this.history[0]), !1
      }
      forget(YY) {
        this.remembered.delete(YY);
        const rY = this.history.indexOf(YY);
        rY >= 0 && this.history.splice(rY, 1)
      }
      remember(YY, rY, DY, FY) {
        const AY = pF(rY),
          IY = Jr(rY),
          RY = null !== IY && ((YY, rY) => {
            let DY = 0;
            for (const FY of YY.querySelectorAll("[data-pad-key], [href]"))
              if ((FY.getAttribute("data-pad-key") === rY || FY.getAttribute("href") === rY) && (DY++, DY > 1)) return !0;
            return !1
          })(DY, IY) ? Math.max(0, this.twins(FY(), IY).indexOf(rY)) : 0;
        this.remembered.set(YY, {
          element: new WeakRef(rY),
          identity: AY,
          ordinal: RY
        })
      }
      has(YY) {
        return this.remembered.has(YY)
      }
      recall(YY, rY) {
        var DY, FY;
        const AY = this.remembered.get(YY);
        if (!AY) return null;
        const IY = AY.element.deref();
        if (IY && rY.includes(IY)) return IY;
        if (null === AY.identity) return null;
        const RY = this.twins(rY, AY.identity);
        return null !== (DY = null !== (FY = RY[AY.ordinal]) && void 0 !== FY ? FY : RY[0]) && void 0 !== DY ? DY : null
      }
      twins(YY, rY) {
        return YY.filter((YY => pF(YY) === rY))
      }
    }
    var GF = DY(1284);
    const xF = YY => {
        const rY = [];
        let DY = YY;
        for (; DY && DY !== document.body;) {
          const YY = getComputedStyle(DY).zIndex;
          "auto" !== YY && rY.push(Number(YY) || 0), DY = DY.parentElement
        }
        return rY.reverse()
      },
      nF = (YY, rY) => {
        const DY = ((YY, rY) => {
          const DY = Math.max(YY.length, rY.length);
          for (let IY = 0; IY < DY; IY++) {
            var FY, AY;
            const DY = (null !== (FY = YY[IY]) && void 0 !== FY ? FY : 0) - (null !== (AY = rY[IY]) && void 0 !== AY ? AY : 0);
            if (0 !== DY) return DY
          }
          return 0
        })(xF(YY), xF(rY));
        if (0 !== DY) return DY > 0;
        if (YY.contains(rY)) return !1;
        if (rY.contains(YY)) return !0;
        const FY = YY.compareDocumentPosition(rY);
        return !!(FY & Node.DOCUMENT_POSITION_PRECEDING) || !(FY & Node.DOCUMENT_POSITION_FOLLOWING) && null
      },
      PF = (YY, rY) => {
        var DY;
        return null !== (DY = nF(YY.root, rY.root)) && void 0 !== DY ? DY : YY.order > rY.order
      },
      UF = (YY, rY) => rY.some((rY => !rY.contains(YY) && !YY.contains(rY) && !0 === nF(rY, YY)));
    let LF = null,
      tF = null,
      YA = -1;
    const rA = () => {
        var YY;
        const rY = null === (YY = document.timeline) || void 0 === YY ? void 0 : YY.currentTime,
          DY = "number" === typeof rY ? rY : null;
        if (null !== DY && DY === tF && YA === (0, GF.d)()) return LF;
        let FY = null;
        const AY = [],
          IY = [...document.querySelectorAll("[data-pad-covers]")].filter(ar);
        for (const RY of (0, GF.f)()) {
          const YY = RY.getRoot(),
            rY = !!YY && ar(YY) && !UF(YY, IY);
          if (RY.shown && !rY && AY.push(RY), RY.shown = rY, !YY || !rY) continue;
          const DY = {
            layer: RY,
            root: YY,
            order: RY.order
          };
          FY && !PF(DY, FY) || (FY = DY)
        }
        LF = FY, tF = DY, YA = (0, GF.d)();
        for (const RY of AY)(0, GF.h)(RY);
        return LF
      },
      DA = () => {
        const YY = rA();
        return !(null === YY || void 0 === YY || !YY.layer.close) && (YY.layer.close(), tF = null, !0)
      },
      FA = () => {
        var YY, rY;
        return null !== (YY = null === (rY = rA()) || void 0 === rY ? void 0 : rY.root) && void 0 !== YY ? YY : null
      },
      AA = YY => YY ? {
        ...YY,
        root: FA()
      } : null;
    let IA = null,
      RA = null,
      OA = (0, sY.i)().menuNavigation,
      gA = null;
    const aA = new SY;
    let vA = null;
    aY.g.subscribe(sY.e, (() => {
      const YY = (0, sY.i)().menuNavigation;
      YY !== OA && (OA = YY, IA = null, RA = null)
    }));
    const uA = () => {
        var YY;
        return null !== (YY = IA) && void 0 !== YY ? YY : (0, sY.i)().menuNavigation
      },
      sA = YY => {
        if (oA()) {
          if (gA = AA(YY), "hybrid" === uA()) return aA.lock(), void(RA = RA ? null : FA());
          IA = "focus" === uA() ? "cursor" : "focus"
        }
      },
      iA = () => {
        const YY = gA;
        return gA = null, YY
      };
    let yA = {
      root: null,
      firstSeenMs: -1 / 0,
      atMs: -1 / 0,
      has: !1
    };
    const QA = function(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const DY = yA.root === YY,
          FY = DY ? yA.firstSeenMs : rY,
          AY = yA.has || rY - FY > 1e3;
        return (!DY || !AY || rY - yA.atMs > 250) && (yA = {
          root: YY,
          firstSeenMs: FY,
          atMs: rY,
          has: Qr(YY)
        }), yA.has
      },
      oA = () => {
        const YY = FA();
        return null !== YY && QA(YY)
      },
      WA = () => {
        const YY = rA();
        return RA && (null === YY || void 0 === YY ? void 0 : YY.root) !== RA && (RA = null), (YY => {
          let {
            mode: rY,
            hasLayer: DY,
            hasCandidates: FY,
            hybridCursorEngaged: AY
          } = YY;
          return DY ? "cursor" !== rY && FY() ? "hybrid" === rY && AY ? "cursor" : "focus" : "cursor" : null
        })({
          mode: uA(),
          hasLayer: null !== YY,
          hasCandidates: () => null !== YY && QA(YY.root),
          hybridCursorEngaged: null !== RA
        })
      },
      EA = () => "hybrid" === uA() && oA(),
      mA = "pad-focused";
    var VA = DY(4104),
      SA = DY(4613);
    const lA = "[data-pad-destructive]",
      TA = `${lA}, [data-pad-back]`,
      eA = YY => ({
        rect: YY.getBoundingClientRect(),
        destructive: YY.matches(lA),
        closes: null !== YY.closest("[data-pad-close-button]"),
        unavailable: YY.matches("[data-pad-unavailable]")
      }),
      NA = YY => {
        let {
          destructive: rY,
          closes: DY,
          unavailable: FY
        } = YY;
        return rY ? DY ? 2 : 3 : FY ? 1 : 0
      },
      BA = YY => {
        let rY = -1;
        for (let DY = 0; DY < YY.length; DY++) {
          if (rY < 0) {
            rY = DY;
            continue
          }
          const FY = YY[DY],
            AY = YY[rY];
          NA(FY) === NA(AY) ? WF(FY.rect, AY.rect) < 0 && (rY = DY) : NA(FY) < NA(AY) && (rY = DY)
        }
        return rY
      },
      cA = "[data-pad-tabs]",
      KA = "[data-pad-tab]",
      HA = (YY, rY) => {
        const DY = YY.querySelector(`${KA}[data-pad-selected='true']`);
        return DY && rY.includes(DY) ? DY : null
      },
      zA = (YY, rY) => {
        let DY = rY;
        for (let FY = rY.parentElement; FY && !FY.contains(YY); FY = FY.parentElement) DY = FY;
        return DY
      };
    class ZA {
      constructor() {
        this.contentReturn = null
      }
      redirect(YY, rY, DY, FY) {
        var AY, IY;
        const RY = YY.closest(cA),
          OY = rY.closest(cA);
        var gY;
        if (OY && OY !== RY) return RY || (this.contentReturn = new WeakRef(YY)), null !== (gY = HA(OY, DY)) && void 0 !== gY ? gY : rY;
        if (!RY || OY) return rY;
        const aY = zA(YY, rY),
          vY = null === (AY = this.contentReturn) || void 0 === AY ? void 0 : AY.deref();
        return vY && aY.contains(vY) && DY.includes(vY) ? vY : null !== (IY = this.pickRegionStart(aY, cY(rY, "y", FY), DY)) && void 0 !== IY ? IY : rY
      }
      findTabContent(YY, rY, DY) {
        const FY = YY.closest(cA);
        if (!FY || !YY.matches(KA) || FY.contains(rY)) return null;
        const AY = rY.closest(cA);
        if (AY && Number(AY.dataset.padTabs) <= Number(FY.dataset.padTabs)) return null;
        const IY = zA(YY, rY);
        return DY.some((YY => IY.contains(YY) && !YY.closest(TA))) || !rY.closest(TA) ? IY : null
      }
      pickContentStart(YY, rY, DY) {
        return this.contentReturn = null, this.pickRegionStart(YY, cY(YY, "y", DY), rY)
      }
      pickReplacedContentStart(YY, rY, DY, FY) {
        if (!rY.contains(YY)) return null;
        const AY = zA(rY, YY),
          IY = DY.filter((YY => rY.contains(YY) && !AY.contains(YY) && !YY.closest(TA)));
        return 0 === IY.length ? null : (this.contentReturn = null, this.pickRegionStart(rY, cY(IY[0], "y", FY), IY))
      }
      backToStrip(YY, rY, DY) {
        if (YY.closest(cA)) return null;
        const FY = BF(DY);
        for (const AY of DY.querySelectorAll(cA)) {
          if (Number(AY.dataset.padTabs) <= 1 || AY === FY) continue;
          const IY = HA(AY, rY),
            RY = IY ? zA(YY, AY).parentElement : null;
          if (IY && RY && RY !== DY && DY.contains(RY)) return this.contentReturn = new WeakRef(YY), IY
        }
        return null
      }
      pickRegionStart(YY, rY, DY) {
        const FY = fY(rY),
          AY = YY => {
            const rY = DY.filter((rY => YY.contains(rY) && !rY.closest(cA) && jY(rY.getBoundingClientRect(), FY))),
              AY = BA(rY.map(eA));
            return AY >= 0 ? rY[AY] : null
          };
        for (const IY of Er(YY)) {
          const YY = AY(IY);
          if (YY) return YY
        }
        for (const IY of YY.querySelectorAll(cA)) {
          const YY = HA(IY, DY);
          if (YY) return YY
        }
        return AY(YY)
      }
    }
    const CA = "[data-pad-default-focus], .Dropdown-option.is-selected",
      fA = ".Dropdown-root.is-open > .Dropdown-menu",
      jA = "[data-pad-no-step-in]",
      hA = "[data-pad-tabs]",
      dA = "[data-pad-press-area]",
      JA = YY => {
        let rY = YY;
        for (let DY = 0; rY && DY <= 4; DY++, rY = rY.parentElement) {
          const DY = rY.querySelector(".CircleInfo");
          if (DY) return rY === YY || rY.querySelectorAll(Or).length <= 1 ? DY : null;
          if (rY !== YY && rY.querySelectorAll(Or).length > 1) return null
        }
        return null
      },
      MA = (YY, rY, DY) => {
        Br(YY, rY, DY);
        const FY = null !== YY && void 0 !== YY && YY.isConnected ? JA(YY) : null,
          AY = JA(rY);
        FY !== AY && Br(FY, AY, AY ? Vr(AY) : DY, {
          leaveBelow: YY,
          enterBelow: rY
        })
      },
      wA = YY => YY.getBoundingClientRect(),
      bA = (YY, rY, DY) => {
        const FY = new Set(DY);
        for (let AY = YY; AY; AY = AY === rY ? null : AY.parentElement)
          if (FY.has(AY)) return AY;
        return null
      },
      XA = (YY, rY) => !YY.root || YY.root === rY || rY.matches(fA) && YY.root.contains(rY);
    const qA = new class {
      constructor() {
        this.focused = null, this.layerKey = null, this.layerRoot = null, this.memory = new kF, this.tabStripNav = new ZA, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.confirmPressedOn = null, this.confirmRepeatKey = null, this.confirmRepeated = !1, this.confirmRepeat = (0, QY.b)(yY.r), this.dpadRepeats = new Map(yY.x.map((YY => [YY, (0, QY.b)(yY.z)]))), this.stickRepeat = new yY.b((0, QY.b)(yY.$)), this.lastRefocusCheckMs = -1 / 0, this.enteredLayerAtMs = 0, this.lastFocusedCentre = null, this.lastActivatedKey = null, this.lastActivated = null, this.lastActivatedAtMs = -1 / 0, this.pendingFocus = null, this.tabOpenWait = null, this.retryMove = null, this.scrollRemainder = {
          x: 0,
          y: 0
        }, this.wasActive = !1, this.layerKind = null, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.listeners = new Set, this.dropdownLayers = new WeakMap, this.dropdownLayerCounter = 0
      }
      install() {
        const YY = uY.b.register({
            name: "focus",
            isActive: () => (0, iY.i)() && "focus" === WA(),
            onFrame: YY => {
              this.onFrame(YY)
            },
            onDeactivate: () => {
              this.deactivate()
            },
            wakePressActs: YY => (0, uY.f)(YY) || YY === (0, vY.i)("menuConfirm") && jr((0, iY.d)())
          }),
          rY = (0, GF.i)((YY => {
            const rY = (0, GF.p)(YY);
            null === YY.memoryKey && this.memory.forget(rY), rY === this.layerKey && (this.layerKey = null)
          }));
        let DY = -1 / 0;
        const FY = RY.f.onFrame((YY => {
            (0, iY.i)() || YY.timestampMs - DY < 100 || (DY = YY.timestampMs, rA())
          })),
          AY = YY => {
            YY.isTrusted && YY.target instanceof Element && RY.f.getActivePad() && this.noteChosenStop(YY.target)
          };
        return document.addEventListener("click", AY, !0), () => {
          YY(), rY(), FY(), document.removeEventListener("click", AY, !0), this.deactivate()
        }
      }
      noteChosenStop(YY) {
        var rY, DY;
        const FY = rA();
        if (!FY || !FY.root.contains(YY)) return;
        const AY = null !== (rY = null === (DY = YY.closest(".Dropdown-root")) || void 0 === DY ? void 0 : DY.querySelector(".Dropdown-control")) && void 0 !== rY ? rY : YY,
          IY = bA(AY, FY.root, this.getEnabledCandidates(FY.root));
        if (!IY) return;
        const RY = (0, GF.p)(FY.layer);
        RY === this.layerKey && FY.root === this.layerRoot || this.beginLayer(FY, RY), this.wasActive ? this.setFocus(IY, {
          scroll: !1,
          byUser: !0
        }) : (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.focused = IY, this.lastFocusedCentre = Vr(IY), this.rememberFocus(IY), this.notify())
      }
      getFocused() {
        return this.focused
      }
      isActive() {
        return this.wasActive
      }
      onChange(YY) {
        return this.listeners.add(YY), () => {
          this.listeners.delete(YY)
        }
      }
      notify() {
        for (const YY of this.listeners) YY()
      }
      deactivate() {
        var YY;
        if (this.wasActive) {
          this.wasActive = !1, this.layerKind = null, this.confirmPressedOn = null, this.retryMove = null, this.pendingFocus = null;
          for (const YY of this.dpadRepeats.values()) YY.reset();
          this.stickRepeat.reset(), null !== (YY = this.focused) && void 0 !== YY && YY.isConnected && MA(this.focused, null, Vr(this.focused)), this.notify()
        }
      }
      setFocus(YY) {
        var rY;
        let {
          scroll: DY = !0,
          byUser: FY = !1
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (FY && (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1), YY === this.focused) return;
        const AY = null !== (rY = this.focused) && void 0 !== rY && rY.isConnected ? this.focused : null;
        if (this.focused = YY, YY) {
          DY && (YY.classList.add(mA), YY.scrollIntoView({
            block: "nearest",
            inline: "nearest",
            behavior: "instant"
          })), FY && ((YY, rY) => {
            const DY = rY.closest("[data-pad-friends-column]");
            DY && YY && !DY.contains(YY) && (CF = new WeakRef(YY))
          })(AY, YY);
          const rY = Vr(YY);
          this.lastFocusedCentre = rY, this.movedInLayer && this.rememberFocus(YY), MA(AY, YY, rY), "false" === YY.getAttribute("aria-pressed") && YY.closest("[data-pad-select-on-focus]") && Kr(YY)
        } else AY && MA(AY, null, Vr(AY));
        this.notify()
      }
      rememberFocus(YY) {
        const rY = this.layerRoot;
        this.layerKey && rY && this.memory.remember(this.layerKey, YY, rY, (() => this.getEnabledCandidates(rY)))
      }
      noteCursorActivation(YY) {
        const rY = rA();
        if (!rY || !rY.root.contains(YY)) return;
        const DY = this.getEnabledCandidates(rY.root),
          FY = new Set(DY);
        let AY = YY;
        for (; AY && !FY.has(AY);) AY = AY === rY.root ? null : AY.parentElement;
        if (!(AY instanceof HTMLElement)) return;
        const IY = (0, GF.p)(rY.layer);
        this.memory.enter(IY), this.memory.remember(IY, AY, rY.root, (() => DY))
      }
      notePageEnteredByCursor(YY) {
        return this.memory.enter(YY)
      }
      recallStop(YY, rY) {
        return this.findRemembered(YY, rY)
      }
      focusWhenFound(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
          DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.pendingFocus = {
          find: YY,
          untilMs: performance.now() + rY,
          holdWhile: DY
        }
      }
      getEnabledCandidates(YY) {
        return ir(YY).filter((YY => !vr(YY)))
      }
      onFrame(YY) {
        var rY;
        const DY = rA();
        if (!DY) return;
        const FY = null !== (rY = this.findOpenDropdown(DY)) && void 0 !== rY ? rY : DY,
          AY = performance.now(),
          IY = (0, GF.p)(FY.layer);
        if (IY !== this.layerKey || FY.root !== this.layerRoot) {
          const rY = this.focused;
          if (null !== this.layerKey && FY.root === this.layerRoot && rY && Wr(rY, FY.root)) this.continueLayer(IY, rY), this.wasActive || this.resume(FY.root, AY);
          else {
            const rY = !this.wasActive && !YY.wokeDevice,
              RY = "death" === this.layerKind || rY,
              OY = this.enterLayer(FY, IY);
            "popup" !== FY.layer.kind || FY !== DY || OY ? "menu" === FY.layer.kind && RY && "inGame" === gY.b.get("gameState") && !(0, LD.g)(3e3) && (this.pressGuardExtends = !0, this.pressGuardUntilMs = AY + VA.d) : (this.pressGuardExtends = rY, this.pressGuardUntilMs = AY + (rY ? VA.d : RY ? 500 : 250))
          }
        } else this.wasActive || this.resume(FY.root, AY);
        if (this.layerKind = FY.layer.kind, this.wasActive || (this.wasActive = !0, this.notify()), YY.wokeDevice && this.focusPointedStop(FY.root), this.validateFocus(FY, AY), AY < this.pressGuardUntilMs && this.pressGuardExtends && (YY.wasPressed((0, vY.i)("menuConfirm")) || YY.wasPressed((0, vY.i)("menuBack"))) && (this.pressGuardUntilMs = AY + VA.d), AY >= this.pressGuardUntilMs && this.handleButtons(YY, FY)) return;
        const RY = "hybrid" === uA();
        if (RY && (YY => {
            const rY = FA();
            return rY !== vA && (vA = rY, aA.lock()), aA.update(YY, (0, sY.i)().moveDeadzone)
          })(YY.leftStick)) return OY = this.getHandoff(), gA = AA(OY), RA = FA(), void uY.b.handOffHeldInput();
        var OY;
        this.handleDirections(YY, FY, AY, !RY), this.handleScroll(YY, FY)
      }
      findOpenDropdown(YY) {
        const rY = YY.root.querySelector(fA);
        if (!rY || !ar(rY)) return null;
        let DY = this.dropdownLayers.get(rY);
        return DY || (this.dropdownLayerCounter++, DY = {
          id: `dropdown-${this.dropdownLayerCounter}`,
          kind: YY.layer.kind,
          getRoot: () => rY,
          close: () => {
            Zr(rY)
          },
          memoryKey: null
        }, this.dropdownLayers.set(rY, DY)), {
          layer: DY,
          root: rY,
          order: YY.order
        }
      }
      focusPointedStop(YY) {
        const rY = (0, iY.d)(),
          DY = rY ? document.elementFromPoint(rY.x, rY.y) : null;
        if (!DY || !YY.contains(DY)) return;
        const FY = bA(DY, YY, this.getEnabledCandidates(YY));
        FY && this.setFocus(FY, {
          scroll: !1,
          byUser: !0
        })
      }
      enterLayer(YY, rY) {
        const DY = this.beginLayer(YY, rY),
          FY = iA();
        return FY && XA(FY, YY.root) ? (this.takeOver(YY.root, FY, this.enteredLayerAtMs), DY) : (this.restoreLayerFocus(YY.root, DY), DY)
      }
      beginLayer(YY, rY) {
        return this.layerKey = rY, this.layerRoot = YY.root, this.lastActivatedKey = null, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoreOnFocusLoss = !1, this.retryMove = null, this.pendingFocus = null, this.confirmPressedOn = null, this.lastRefocusCheckMs = -1 / 0, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.enteredLayerAtMs = performance.now(), this.lastFocusedCentre = null, this.memory.enter(rY)
      }
      restoreLayerFocus(YY, rY) {
        const DY = rY && this.layerKey ? this.findRemembered(YY, this.layerKey) : null;
        this.restoredFromMemory = null !== DY, this.setFocus(null !== DY && void 0 !== DY ? DY : this.pickInitial(YY, {
          waitForContent: !0
        }))
      }
      continueLayer(YY, rY) {
        this.layerKey = YY;
        const DY = this.memory.enter(YY);
        this.restoreOnFocusLoss = DY, this.movedInLayer && !DY && this.rememberFocus(rY)
      }
      resume(YY, rY) {
        var DY;
        const FY = iA();
        FY && XA(FY, YY) ? this.takeOver(YY, FY, rY) : null !== (DY = this.focused) && void 0 !== DY && DY.isConnected && MA(null, this.focused, Vr(this.focused))
      }
      pickPreferred(YY) {
        var rY;
        return null !== (rY = this.layerKey ? this.findRemembered(YY, this.layerKey) : null) && void 0 !== rY ? rY : this.pickInitial(YY, {
          waitForContent: !0
        })
      }
      findRemembered(YY, rY) {
        return this.memory.has(rY) ? this.memory.recall(rY, this.getEnabledCandidates(YY)) : null
      }
      getHandoff() {
        var YY, rY, DY;
        const FY = null !== (YY = this.focused) && void 0 !== YY && YY.isConnected ? this.focused : null,
          AY = null !== (rY = this.layerRoot) && void 0 !== rY && rY.isConnected ? this.layerRoot : null;
        return {
          point: FY ? Vr(FY) : null !== (DY = this.lastFocusedCentre) && void 0 !== DY ? DY : this.getLayerStartPoint(AY),
          element: FY,
          direction: null
        }
      }
      getLayerStartPoint(YY) {
        if (!YY) return {
          x: window.innerWidth / 2,
          y: window.innerHeight / 2
        };
        const rY = this.pickInitial(YY, {
          includeDisabled: !0
        });
        return Vr(null !== rY && void 0 !== rY ? rY : YY)
      }
      takeOver(YY, rY, DY) {
        const {
          element: FY,
          direction: AY,
          point: IY
        } = rY, RY = FY instanceof HTMLElement && Wr(FY, YY) ? FY : null;
        if (!AY) {
          const rY = this.focused;
          return RY ? this.setFocus(RY, {
            scroll: !1,
            byUser: !0
          }) : this.focusNearest(YY, IY), void(this.focused && this.focused === rY && this.focused.isConnected && MA(null, this.focused, Vr(this.focused)))
        }
        if (this.dpadRepeats.get(AY).update(!0, DY), RY) return this.setFocus(RY, {
          scroll: !1,
          byUser: !0
        }), void this.move(YY, AY, DY, !0);
        const OY = this.getEnabledCandidates(YY),
          gY = OY.map(wA),
          aY = uF(new DOMRect(IY.x, IY.y, 0, 0), gY, AY),
          vY = aY >= 0 ? aY : oF(IY, gY);
        this.setFocus(vY >= 0 ? OY[vY] : this.pickInitial(YY), {
          byUser: !0
        })
      }
      focusNearest(YY, rY) {
        const DY = this.getEnabledCandidates(YY),
          FY = oF(rY, DY.map(wA));
        this.setFocus(FY >= 0 ? DY[FY] : this.pickInitial(YY), {
          byUser: !0
        })
      }
      pickDefault(YY) {
        let {
          includeDisabled: rY = !1,
          exclude: DY = null
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const FY = [...YY.querySelectorAll(CA)].filter((FY => (null === DY || void 0 === DY || !DY.has(FY)) && (rY ? or(FY, YY) : Wr(FY, YY)))),
          AY = BA(FY.map(eA));
        return AY >= 0 ? FY[AY] : null
      }
      pickNewAreaStart(YY, rY) {
        const DY = [...YY.querySelectorAll(dA)].filter(ar);
        for (const FY of [...Er(YY), ...DY]) {
          if (rY.has(FY)) continue;
          const YY = this.getEnabledCandidates(FY),
            DY = BA(YY.map(eA));
          if (DY >= 0) return YY[DY]
        }
        return null
      }
      pickInitial(YY) {
        let {
          includeDisabled: rY = !1,
          waitForContent: DY = !1,
          enteredAtMs: FY = this.enteredLayerAtMs
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const AY = this.pickDefault(YY, {
          includeDisabled: rY
        });
        if (AY) return AY;
        const IY = YY => rY ? ir(YY) : this.getEnabledCandidates(YY);
        let RY = [];
        for (const sY of Er(YY))
          if (RY = IY(sY), RY.length > 0) break;
        if (0 === RY.length) {
          if (DY && performance.now() - FY < 1e4 && (YY => {
              for (const rY of YY.querySelectorAll("[data-pad-initial-area]"))
                if (!gr(rY, !1)) return !0;
              return !1
            })(YY)) return null;
          RY = IY(YY)
        }
        const OY = RY.map(wA),
          gY = fY(null),
          aY = RY.filter(((YY, rY) => jY(OY[rY], gY))),
          vY = aY.length > 0 ? aY : RY,
          uY = BA(vY.map(eA));
        return uY >= 0 ? vY[uY] : null
      }
      validateFocus(YY, rY) {
        if (this.pendingFocus) {
          var DY, FY;
          const AY = this.pendingFocus.find();
          if (AY && Wr(AY, YY.root)) return this.pendingFocus = null, void this.setFocus(AY, {
            byUser: !0
          });
          rY > this.pendingFocus.untilMs && (null === (DY = (FY = this.pendingFocus).holdWhile) || void 0 === DY || !DY.call(FY)) && (this.pendingFocus = null)
        }
        const AY = this.focused,
          IY = !!AY && Wr(AY, YY.root);
        if (!(!IY && AY && AY === this.lastActivated && rY - this.lastActivatedAtMs < 5e3 && YY.root.contains(AY) && ar(AY) && vr(AY))) {
          if (!IY && this.restoreOnFocusLoss && this.layerKey) return this.restoreOnFocusLoss = !1, this.movedInLayer = !1, this.scrolledInLayer = !1, this.enteredLayerAtMs = rY, void this.restoreLayerFocus(YY.root, !0);
          if ((!IY || !this.movedInLayer && !this.scrolledInLayer) && !(rY - this.lastRefocusCheckMs < (IY ? 200 : 50)))
            if (this.lastRefocusCheckMs = rY, IY) {
              const DY = rY - this.enteredLayerAtMs < 15e3 ? this.pickPreferred(YY.root) : null,
                FY = null !== DY && void 0 !== DY ? DY : this.restoredFromMemory ? null : this.pickDefault(YY.root);
              FY && FY !== AY && this.setFocus(FY)
            } else {
              if (this.lastFocusedCentre && this.movedInLayer) {
                const rY = this.pendingFocus;
                return this.focusNearest(YY.root, this.lastFocusedCentre), void(this.pendingFocus = rY)
              }
              this.setFocus(this.pickPreferred(YY.root))
            }
        }
      }
      handleButtons(YY, rY) {
        if (YY.wasPressed((0, vY.i)("menuToggleCursor"))) return sA(this.getHandoff()), !0;
        if (YY.wasPressed((0, vY.i)("menuBack"))) {
          const YY = Zr(rY.root);
          return YY ? this.setFocus(YY, {
            byUser: !0
          }) : fF(this, rY.root) || (dr(rY.root) ? this.returnToOpener(rY.root) : this.backToStrip(rY.root) || DA()), !0
        }
        const DY = (0, vY.i)("menuConfirm");
        var FY, AY;
        YY.wasPressed(DY) && (this.confirmPressedOn = this.focused, this.confirmRepeatKey = null !== (FY = null === (AY = this.focused) || void 0 === AY ? void 0 : AY.getAttribute("data-pad-repeat")) && void 0 !== FY ? FY : null, this.confirmRepeated = YY.wokeDevice, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now()));
        if (YY.wasReleased(DY)) {
          const YY = this.confirmPressedOn;
          if (this.confirmPressedOn = null, YY && !this.confirmRepeated && YY === this.focused && YY.isConnected && !vr(YY)) {
            const DY = YY.matches("[data-pad-tab]") ? YY.closest(hA) : null;
            DY ? this.enterTab(YY, DY, rY.root, performance.now()) : this.activate(YY)
          }
          return !0
        }
        return this.repeatConfirm(YY, DY), qF(this, YY, rY)
      }
      repeatConfirm(YY, rY) {
        const DY = this.confirmPressedOn;
        DY && null !== this.confirmRepeatKey && YY.isHeld(rY) && (DY === this.focused && DY.isConnected && !vr(DY) && DY.getAttribute("data-pad-repeat") === this.confirmRepeatKey ? DY.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.confirmRepeated = !0, this.activate(DY)) : this.confirmRepeatKey = null)
      }
      backToStrip(YY) {
        const rY = this.focused;
        if (!(0, sY.i)().menuBackToCategories) return !1;
        const DY = null !== rY && void 0 !== rY && rY.isConnected ? this.tabStripNav.backToStrip(rY, this.getEnabledCandidates(YY), YY) : null;
        return DY && this.setFocus(DY, {
          byUser: !0
        }), null !== DY
      }
      returnToOpener(YY) {
        const rY = this.lastActivatedKey;
        rY && (this.lastActivatedKey = null, this.focusWhenFound((() => {
          var DY;
          return null !== (DY = this.getEnabledCandidates(YY).find((YY => Jr(YY) === rY))) && void 0 !== DY ? DY : null
        })))
      }
      activate(YY) {
        var rY;
        if ((0, SA.c)(YY) || fr(YY)) return;
        this.lastActivatedKey = null !== (rY = Jr(YY)) && void 0 !== rY ? rY : this.lastActivatedKey, this.lastActivated = YY, this.lastActivatedAtMs = performance.now(), this.rememberFocus(YY);
        const DY = this.layerRoot;
        if (DY) {
          const rY = new Set(DY.querySelectorAll(CA)),
            FY = new Set(DY.querySelectorAll(`[data-pad-initial-area], ${dA}`)),
            AY = this.lastActivatedAtMs;
          this.focusWhenFound((() => {
            var AY;
            return Wr(YY, DY) ? null : null !== (AY = this.pickDefault(DY, {
              exclude: rY
            })) && void 0 !== AY ? AY : this.pickNewAreaStart(DY, FY)
          }), 5e3, (() => YY.isConnected && vr(YY) && performance.now() - AY < 6e4))
        }
        Kr(YY), Cr(YY)
      }
      handleDirections(YY, rY, DY, FY) {
        const AY = lF(rY.layer.kind) ? (0, vY.i)("chat") : null;
        for (const OY of yY.x) {
          this.dpadRepeats.get(OY).update(YY.isHeld(OY), DY) && (OY !== AY || YY.wasPressed(OY)) && this.move(rY.root, OY, DY, !0)
        }
        const IY = FY ? (0, yY.g)(YY.leftStick, (0, sY.i)().moveDeadzone) : {
            x: 0,
            y: 0
          },
          RY = this.stickRepeat.update((0, yY.cb)(IY), DY);
        if (RY && this.move(rY.root, RY, DY, !0), this.retryMove && DY >= this.retryMove.atMs) {
          const {
            direction: YY
          } = this.retryMove;
          this.retryMove = null, this.move(rY.root, YY, DY, !1)
        }
      }
      move(YY, rY, DY, FY) {
        var AY;
        let IY = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.pendingFocus && this.pendingFocus === (null === (AY = this.tabOpenWait) || void 0 === AY ? void 0 : AY.wait) && rY === this.tabOpenWait.direction) return;
        this.pendingFocus = null;
        const RY = this.focused;
        if (!RY || !RY.isConnected) {
          const rY = this.pickInitial(YY);
          return void(rY && this.setFocus(rY, {
            byUser: !0
          }))
        }
        const OY = "Left" === rY || "Right" === rY,
          gY = OY ? (0, SA.c)(RY) : null;
        if (gY) return void gY.adjust("Left" === rY ? -1 : 1);
        const aY = YY => null !== YY.closest("[data-pad-friends-column]"),
          vY = aY(RY),
          uY = wA(RY),
          sY = OY || RY.closest(hA) ? null : (YY => {
            const rY = new Map;
            return DY => {
              const FY = DY.closest(hA);
              if (!FY) return !1;
              let AY = rY.get(FY);
              if (void 0 === AY) {
                const DY = wA(FY);
                AY = vF(YY, DY) && (DY.right <= YY.left || DY.left >= YY.right), rY.set(FY, AY)
              }
              return AY
            }
          })(uY),
          iY = null !== RY.closest(jA),
          yY = this.getEnabledCandidates(YY).filter((YY => YY !== RY && (OY || aY(YY) === vY) && !(null !== sY && void 0 !== sY && sY(YY)) && (iY || !YY.closest(jA)))),
          QY = yY.map(wA),
          oY = cY(RY, "y", YY),
          WY = fY(oY);
        if (!IY && !jY(uY, WY)) {
          const YY = yY.filter(((YY, rY) => jY(QY[rY], WY)));
          if (YY.length > 0) {
            const rY = {
              x: WY.left + WY.width / 2,
              y: WY.top + WY.height / 2
            };
            return void this.setFocus(YY[oF(rY, YY.map(wA))], {
              byUser: !0
            })
          }
        }
        const EY = OY ? ((YY, rY, DY) => {
            const FY = wA(YY),
              AY = YY.closest(hA),
              IY = AY ? wA(AY) : null;
            return rY.map(((rY, RY) => {
              const OY = DY[RY];
              if (OY.bottom > FY.top && OY.top < FY.bottom) return !0;
              const gY = rY.closest(hA);
              if (AY && IY) return gY !== AY && (null !== gY || OY.bottom <= IY.top || OY.top >= IY.bottom);
              if (gY) return !vF(FY, wA(gY));
              let aY = YY;
              for (let DY = YY.parentElement; DY && !DY.contains(rY); DY = DY.parentElement) aY = DY;
              const vY = wA(aY);
              return OY.right > vY.left && OY.left < vY.right
            }))
          })(RY, yY, QY) : void 0,
          mY = OY && !RY.closest(hA) ? (YY => YY.map((YY => !YY.closest(TA))))(yY) : void 0,
          VY = ((YY, rY) => {
            const DY = [];
            for (let AY = YY; AY; AY = AY.parentElement) DY.push(AY);
            const FY = new Map;
            return DY.forEach(((YY, rY) => {
              FY.set(YY, DY.length - 1 - rY)
            })), rY.map((YY => {
              for (let rY = YY; rY; rY = rY.parentElement) {
                const YY = FY.get(rY);
                if (void 0 !== YY) return YY
              }
              return -1
            }))
          })(RY, yY),
          SY = OY ? "x" : "y",
          lY = cY(RY, SY, YY);
        let TY = uF(uY, QY, rY, VY, EY, mY);
        if (TY >= 0 && lY && !lY.contains(yY[TY])) {
          const YY = yY.flatMap(((YY, rY) => lY.contains(YY) ? [rY] : [])),
            DY = rY => rY && YY.map((YY => rY[YY])),
            FY = uF(uY, YY.map((YY => QY[YY])), rY, YY.map((YY => VY[YY])), DY(EY), DY(mY));
          TY = FY >= 0 ? YY[FY] : TY
        }
        if (TY >= 0) return void this.moveTo(RY, yY[TY], yY, YY, rY, IY);
        if (!FY) return;
        const eY = "Right" === rY || "Down" === rY ? 1 : -1;
        if (lY && ZY(lY, SY, eY)) {
          const YY = "y" === SY ? lY.clientHeight : lY.clientWidth;
          CY(lY, SY, eY * YY * .5), this.retryMove = {
            direction: rY,
            atMs: DY + 80
          }
        }
      }
      moveTo(YY, rY, DY, FY, AY, IY) {
        const RY = this.tabStripNav.findTabContent(YY, rY, DY);
        RY && "true" !== YY.dataset.padSelected ? this.openTab(YY, RY, FY, AY) : IY && !RY || this.setFocus(this.tabStripNav.redirect(YY, rY, DY, FY), {
          byUser: !0
        })
      }
      openTab(YY, rY, DY, FY) {
        const AY = rY.parentElement;
        Kr(YY), this.focusWhenFound((() => "true" !== YY.dataset.padSelected ? null : rY.isConnected ? this.tabStripNav.pickContentStart(rY, this.getEnabledCandidates(DY), DY) : AY ? this.tabStripNav.pickReplacedContentStart(YY, AY, this.getEnabledCandidates(DY), DY) : null), 3e3), this.tabOpenWait = {
          wait: this.pendingFocus,
          direction: FY
        }
      }
      enterTab(YY, rY, DY, FY) {
        this.move(DY, (YY => {
          const rY = [...YY.querySelectorAll(KA)].filter((rY => rY.closest(cA) === YY));
          if (rY.length >= 2) {
            const YY = rY[0].getBoundingClientRect(),
              DY = rY[1].getBoundingClientRect();
            return Math.abs(DY.top - YY.top) > Math.abs(DY.left - YY.left) ? "Right" : "Down"
          }
          const DY = YY.getBoundingClientRect();
          return DY.height > DY.width ? "Right" : "Down"
        })(rY), FY, !1, !0), this.focused !== YY || this.pendingFocus || this.activate(YY)
      }
      handleScroll(YY, rY) {
        const DY = (0, yY.g)(YY.rightStick, .2);
        if (0 === DY.x && 0 === DY.y) return void(this.scrollRemainder = {
          x: 0,
          y: 0
        });
        const FY = YY.dtMs / 1e3;
        for (const IY of ["x", "y"]) {
          var AY;
          const YY = DY[IY];
          if (0 === YY) continue;
          const RY = null !== (AY = cY(this.focused, IY, rY.root)) && void 0 !== AY ? AY : HY(rY.root, IY);
          if (!RY) continue;
          const OY = Math.sign(YY) * YY * YY * 1500 * FY + this.scrollRemainder[IY],
            gY = Math.trunc(OY);
          this.scrollRemainder[IY] = OY - gY, 0 !== gY && (CY(RY, IY, gY), this.scrolledInLayer = !0)
        }
      }
    };
    var pA = DY(7655);
    var kA = DY(8118);
    const GA = {
        duration: 80,
        strongMagnitude: .2,
        weakMagnitude: .2,
        needsPadInUse: !1
      },
      xA = {
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
          ...GA,
          minIntervalMs: 1e3
        },
        preview: {
          ...GA,
          minIntervalMs: 0
        }
      };
    const nA = new class {
        constructor(YY) {
          this.deps = YY, this.lastPlayedMs = {}, this.loggedFailure = !1, this.logFailure = YY => {
            this.loggedFailure || (this.loggedFailure = !0, console.warn("Controller vibration failed; further failures are not logged.", YY))
          }
        }
        play(YY, rY) {
          const DY = xA[YY];
          if (!this.deps.isVibrationOn() || DY.needsPadInUse && !this.deps.isPadInUse()) return !1;
          const FY = this.lastPlayedMs[YY];
          if (void 0 !== FY && rY - FY < DY.minIntervalMs) return !1;
          const AY = this.deps.getActuator();
          if (!AY) return !1;
          this.lastPlayedMs[YY] = rY;
          const {
            duration: IY,
            strongMagnitude: RY,
            weakMagnitude: OY
          } = DY;
          try {
            AY.playEffect("dual-rumble", {
              duration: IY,
              strongMagnitude: RY,
              weakMagnitude: OY
            }).catch(this.logFailure)
          } catch (gY) {
            this.logFailure(gY)
          }
          return !0
        }
      }({
        getActuator: () => (YY => {
          const rY = null === YY || void 0 === YY ? void 0 : YY.vibrationActuator;
          return "function" === typeof(null === rY || void 0 === rY ? void 0 : rY.playEffect) ? rY : null
        })(RY.f.getActiveGamepad()),
        isVibrationOn: () => (0, sY.i)().vibration,
        isPadInUse: iY.i
      }),
      PA = YY => {
        nA.play(YY, performance.now())
      };
    var UA = DY(7664),
      LA = DY(2579),
      tA = DY(117),
      YI = DY(40),
      rI = DY(668);
    class DI {
      constructor(YY) {
        this.deps = YY
      }
      check() {
        let YY = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const rY = this.deps.isPadActive() ? this.deps.getPadFamily() : null;
        if (!rY) return "skipped";
        const DY = YY ? this.deps.getVisitId() : this.deps.peekVisitId();
        return null === DY || this.deps.readReportedVisitId() === DY ? "skipped" : this.deps.canReport() ? (this.deps.writeReportedVisitId(DY), this.deps.gy(rY, this.deps.getInputType()), "reported") : "notReady"
      }
    }
    const FI = "controllerUsageReportedVisit";
    var AI = DY(1346),
      II = DY(1699),
      RI = DY(649),
      OI = DY(1430),
      gI = DY(1256);
    const aI = YY => ({
        translationKey: `controller:${YY}`
      }),
      vI = {
        A: "A",
        B: "B",
        X: "X",
        Y: "Y",
        LB: "LB",
        RB: "RB",
        LT: "LT",
        RT: "RT",
        View: aI("padButtonView"),
        Menu: aI("padButtonMenu"),
        LS: "L3",
        RS: "R3",
        Up: aI("padButtonDpadUp"),
        Down: aI("padButtonDpadDown"),
        Left: aI("padButtonDpadLeft"),
        Right: aI("padButtonDpadRight"),
        Home: aI("padButtonHome"),
        LeftStick: aI("padButtonLeftStick"),
        RightStick: aI("padButtonRightStick")
      },
      uI = {
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
          View: aI("padButtonCreate"),
          Menu: aI("padButtonOptions")
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
      sI = (YY, rY) => {
        var DY;
        const FY = null !== (DY = uI[YY][rY]) && void 0 !== DY ? DY : vI[rY];
        return "string" === typeof FY ? FY : (0, AY.y)(gI.h.get().getCurrentLanguageCode(), FY.translationKey)
      },
      iI = YY => {
        let {
          glyph: rY,
          family: DY,
          className: FY
        } = YY;
        const AY = (0, iY.y)(),
          IY = null !== DY && void 0 !== DY ? DY : AY,
          RY = (0, UA.f)(IY, rY);
        return (0, MY.jsx)("span", {
          className: JY()("ControllerGlyph", FY),
          role: "img",
          "aria-label": sI(IY, rY),
          style: {
            "--pad-glyph-mask": `url(${RY})`,
            "--pad-glyph-aspect": (0, UA.c)(IY, rY)
          }
        })
      };
    var yI = DY(1778);
    const QI = YY => {
      let {
        action: rY
      } = YY;
      const {
        t: DY
      } = (0, AY.C)();
      switch (rY.kind) {
        case "reload":
          return (0, MY.jsx)("span", {
            children: DY("controller:gameplayReload")
          });
        case "specialAction":
          return null;
        case "customButton":
          return (0, MY.jsx)(yI.b, {
            text: rY.description ? [{
              icon: rY.icon
            }, ` ${rY.description}`] : [{
              icon: rY.icon
            }]
          });
        case "touchButton":
          return (0, MY.jsx)(yI.b, {
            text: rY.label
          })
      }
    };
    var oI = DY(8126);
    const WI = YY => {
      let {
        hold: rY
      } = YY;
      return (0, MY.jsx)("div", {
        className: "DropStackFillTrack",
        style: {
          "--pad-drop-stack-hold": `${rY.holdMs}ms`
        },
        children: (0, MY.jsx)("div", {
          className: "DropStackFillBar"
        })
      }, rY.id)
    };
    var EI = DY(8153),
      mI = DY(8159),
      VI = DY(8166),
      SI = DY(8146);
    const lI = () => {
        const {
          gameState: YY
        } = (0, gY.j)(["gameState"]), rY = (0, iY.x)(), [FY, AY] = (0, hY.useState)(!1), [IY, RY] = (0, hY.useState)(!1);
        return (0, hY.useEffect)((() => {
          "inGame" === YY && AY(!0)
        }), [YY]), (0, hY.useEffect)((() => {
          if (!FY) return;
          let YY = null,
            rY = !1;
          return (RI.r ? Promise.all([DY.e(69), DY.e(258), DY.e(237), DY.e(191), DY.e(211), DY.e(84)]).then((() => DY(39649))).then((YY => YY.startWasmPadGameplay)) : Promise.all([DY.e(69), DY.e(223), DY.e(222), DY.e(72), DY.e(71), DY.e(70), DY.e(95), DY.e(214), DY.e(181), DY.e(219), DY.e(74), DY.e(194), DY.e(215), DY.e(83), DY.e(230), DY.e(114), DY.e(231), DY.e(210), DY.e(73), DY.e(113), DY.e(232), DY.e(191), DY.e(93)]).then((() => DY(39770))).then((YY => YY.startPadGameplay))).then((DY => {
            rY || (YY = DY())
          })).catch((YY => {
            console.error("Pad gameplay failed to load", YY), rY || RY(!0)
          })), () => {
            var DY;
            rY = !0, null === (DY = YY) || void 0 === DY || DY()
          }
        }), [FY]), (0, hY.useEffect)((() => {
          IY && rY && (RY(!1), AI.NotificationProvider.showPromptPopup({
            title: "controller:gameplayLoadFailedTitle",
            subtitle: "controller:gameplayLoadFailedSubtitle",
            confirmText: "settingsMenu:reloadPagePopupConfirm",
            confirmTooltip: "",
            cancelText: "general:cancel",
            cancelTooltip: ""
          }).getResult().then((YY => {
            !0 === YY && (0, II.reloadBloxd)()
          })))
        }), [IY, rY]), (0, MY.jsxs)(MY.Fragment, {
          children: [(0, MY.jsx)(TI, {}), (0, MY.jsx)(eI, {}), (0, MY.jsx)(NI, {})]
        })
      },
      TI = () => {
        const {
          t: YY
        } = (0, AY.C)(), rY = (0, iY.x)(), {
          gameState: DY,
          isUiHidden: FY
        } = (0, gY.j)(["gameState", "isUiHidden"]), {
          hideButtonHints: IY
        } = (0, sY.s)(), RY = (0, oI.i)(), OY = (0, oI.k)(), [aY, uY] = (0, hY.useState)(VI.d);
        return (0, OI.g)(SI.p, uY), !rY || IY || FY || "inGame" !== DY || !RY && !aY ? null : (0, MY.jsxs)("div", {
          className: "PadActionHint SmallTextBold",
          children: [RY && (0, MY.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, MY.jsx)(iI, {
              glyph: (0, vY.i)("actionButton")
            }), (0, MY.jsx)(QI, {
              action: RY
            }), OY && (0, MY.jsx)("span", {
              className: "PadActionHintMore",
              children: YY("controller:gameplayActionWheelHint")
            })]
          }), aY && (0, MY.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, MY.jsx)(iI, {
              glyph: (0, vY.i)("pickBlock")
            }), (0, MY.jsx)("span", {
              children: YY("controller:gameplayPickBlock")
            })]
          })]
        })
      },
      eI = () => {
        const {
          t: YY
        } = (0, AY.C)(), rY = (0, iY.x)(), {
          gameState: DY,
          isUiHidden: FY
        } = (0, gY.j)(["gameState", "isUiHidden"]), [IY, RY] = (0, hY.useState)(EI.c);
        return (0, OI.g)(SI.o, RY), rY && !FY && "inGame" === DY && IY ? (0, MY.jsxs)("div", {
          className: "PadDropStackFill SmallTextBold",
          children: [(0, MY.jsx)("span", {
            children: YY("controller:gameplayDropStack")
          }), (0, MY.jsx)(WI, {
            hold: IY
          })]
        }) : null
      },
      NI = () => {
        const {
          t: YY
        } = (0, AY.C)(), rY = (0, iY.x)(), {
          gameState: DY,
          isUiHidden: FY
        } = (0, gY.j)(["gameState", "isUiHidden"]), {
          hideButtonHints: IY
        } = (0, sY.s)(), [RY, OY] = (0, hY.useState)(mI.b);
        return (0, OI.g)(SI.n, OY), rY && !FY && "inGame" === DY && RY ? (0, MY.jsxs)("div", {
          className: "PadAttackLatchedHint SmallTextBold",
          children: [!IY && (0, MY.jsx)(iI, {
            glyph: (0, vY.i)("attack")
          }), (0, MY.jsx)("span", {
            children: YY("controller:gameplayAttackLatched")
          })]
        }) : null
      };
    var BI = DY(8173),
      cI = DY(1823),
      KI = DY(2282),
      HI = DY(7637);
    const zI = YY => YY && !(0, BI.d)(cI.b.get("shopInfo")),
      ZI = () => {
        const YY = "inGame" === (0, gY.j)(["gameState"]).gameState;
        return (0, KI.f)("shopInfo", (() => {
          (0, HI.i)(zI(YY))
        })), (0, hY.useEffect)((() => {
          (0, HI.i)(zI(YY))
        }), [YY]), null
      },
      CI = () => {
        const {
          t: YY
        } = (0, AY.C)(), {
          hideButtonHints: rY
        } = (0, sY.s)();
        (0, iY.y)();
        const DY = (0, HD.k)();
        return (0, hY.useEffect)((() => (() => {
          const YY = uY.b.register({
              name: "inventory",
              isActive: PD.isActive,
              onFrame: PD.onFrame,
              onDeactivate: PD.onDeactivate,
              wakePressActs: PD.wakePressActs
            }),
            rY = YY => {
              PD.noteRealPointer(YY), PD.shouldBlockRealPointer(YY) && YY.stopPropagation()
            };
          for (const RY of UD) window.addEventListener(RY, rY, !0);
          const DY = (0, qr.m)((() => {
              "inventory" !== uY.b.getActiveConsumerName() && PD.forgetSurface()
            })),
            FY = YY => {
              const rY = YY.target;
              (0, iY.i)() && LY(rY) && rY.closest(iD) && (0, qr.i)() && (0, qr.s)(rY)
            };
          document.addEventListener("focusout", FY, !0);
          const {
            invalidate: AY,
            onScroll: IY
          } = PD.targets;
          return document.addEventListener("scroll", IY, !0), window.addEventListener("resize", AY), () => {
            YY(), DY();
            for (const YY of UD) window.removeEventListener(YY, rY, !0);
            document.removeEventListener("scroll", IY, !0), document.removeEventListener("focusout", FY, !0), window.removeEventListener("resize", AY), PD.targets.disconnect()
          }
        })()), []), (0, MY.jsxs)(MY.Fragment, {
          children: [(0, MY.jsx)(qY, {
            placer: PD.ring,
            className: "InventorySlotCursorRing"
          }), DY.showing && !rY && (0, MY.jsx)("div", {
            className: "InventorySlotCursorHints SmallTextBold",
            children: Xr(DY).map((rY => {
              let {
                actions: FY,
                labelKey: AY
              } = rY;
              return (0, MY.jsxs)("div", {
                className: "InventorySlotCursorHint",
                children: [FY.map((YY => (0, MY.jsx)(iI, {
                  glyph: (0, vY.i)(YY)
                }, YY))), (0, MY.jsx)("span", {
                  children: YY(`controller:${AY}`)
                }), "inventoryDrop" === AY && DY.dropStackHold && (0, MY.jsx)(WI, {
                  hold: DY.dropStackHold
                })]
              }, AY)
            }))
          })]
        })
      },
      fI = [{
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
      jI = YY => Array.from(YY).map((YY => ({
        type: "char",
        char: YY,
        width: 1
      }))),
      hI = function(YY) {
        return {
          type: "command",
          command: YY,
          width: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
        }
      },
      dI = [hI("page", 2), hI("otherPage"), hI("caretLeft"), hI("space", 3), hI("caretRight"), hI("close", 1.5), hI("submit", 1.5)],
      JI = [hI("page", 2), hI("otherPage"), hI("caretLeft"), hI("space", 2), hI("caretRight"), hI("newline"), hI("close", 1.5), hI("submit", 1.5)],
      MI = [
        [...jI("1234567890"), hI("backspace")], jI("qwertyuiop/"), jI("asdfghjkl'?"), [hI("shift", 2), ...jI("zxcvbnm,.")]
      ],
      wI = [
        [...jI("1234567890"), hI("backspace")], jI("!@#$%^&*()/"), jI('-_=+[]{};:"'), jI("~`|\\<>'\u20ac\xa3,.")
      ],
      bI = {
        letters: MI,
        accents: [
          [...jI("1234567890"), hI("backspace")], jI("\xe1\xe9\xed\xf3\xfa\xe0\xe8\xec\xf2\xf9\xf1"), jI("\xe2\xea\xee\xf4\xfb\xe4\xeb\xef\xf6\xfc\xe7"), [hI("shift", 2), ...jI("\xe3\xf5\xdf\u0153\u011f\u015f\u0131\xbf\xa1")]
        ],
        symbols: wI
      },
      XI = new Set(["de", "es", "fr", "it", "nl", "pt", "pt-BR", "tr", "vi"]),
      qI = (YY, rY) => "letters" === YY ? rY ? {
        page: "accents",
        otherPage: "symbols"
      } : {
        page: "symbols",
        otherPage: "accents"
      } : {
        page: "letters",
        otherPage: "accents" === YY ? "symbols" : "accents"
      },
      pI = function(YY, rY) {
        const DY = ((YY, rY) => [...bI[YY], rY ? JI : dI])(YY, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]);
        if (0 === rY) return DY;
        const FY = Math.min(2, kI(DY[0]) / rY);
        return [Array.from({
          length: rY
        }, ((YY, rY) => ({
          type: "phrase",
          phraseIndex: rY,
          width: FY
        }))), ...DY]
      },
      kI = YY => YY.reduce(((YY, rY) => YY + rY.width), 0),
      GI = YY => Math.max(...YY.map(kI)),
      xI = (YY, rY) => {
        const DY = YY[rY.row];
        let FY = (GI(YY) - kI(DY)) / 2;
        for (let AY = 0; AY < rY.col; AY++) FY += DY[AY].width;
        return FY + DY[rY.col].width / 2
      },
      nI = (YY, rY, DY) => {
        let FY = 0,
          AY = 1 / 0;
        for (let IY = 0; IY < YY[rY].length; IY++) {
          const RY = Math.abs(xI(YY, {
            row: rY,
            col: IY
          }) - DY);
          RY < AY - 1e-9 && (FY = IY, AY = RY)
        }
        return FY
      },
      PI = (YY, rY) => {
        const DY = Math.max(0, Math.min(YY.length - 1, rY.row));
        return {
          row: DY,
          col: Math.max(0, Math.min(YY[DY].length - 1, rY.col))
        }
      },
      UI = (YY, rY, DY) => "once" === YY && rY - DY <= 400 ? "caps" : "off" === YY ? "once" : "off",
      LI = (YY, rY) => "once" === YY && (YY => YY.toLowerCase() !== YY.toUpperCase())(rY) ? "off" : YY,
      tI = (YY, rY, DY) => {
        if ("symbols" === rY || "off" === DY) return YY;
        const FY = YY.toUpperCase();
        return 1 === FY.length ? FY : YY
      };
    var YR = DY(8075);
    const rR = ["controller:keyboardPhraseGg", "controller:keyboardPhraseHi", "controller:keyboardPhraseThanks", "controller:keyboardPhraseGl", "controller:keyboardPhraseBrb", "controller:keyboardPhraseYes", "controller:keyboardPhraseNo", "controller:keyboardPhraseHelp"];
    const DR = new class {
        constructor() {
          this.lastSendMs = -1 / 0
        }
        claim(YY) {
          return !(YY - this.lastSendMs < 2e3) && (this.lastSendMs = YY, !0)
        }
      },
      FR = {
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
      AR = ["LR", "nameTag"],
      IR = YY => {
        const rY = YY.target instanceof HTMLTextAreaElement && !AR.includes(YY.kind);
        return pI(YY.page, "chat" === YY.kind ? rR.length : 0, rY)
      },
      RR = YY => {
        const rY = YY.getBoundingClientRect(),
          DY = window.innerHeight,
          FY = rY.top + rY.height / 2 < DY / 2 ? "bottom" : "top",
          AY = "bottom" === FY ? DY - rY.bottom - 6 : rY.top - 6;
        return {
          placement: FY,
          maxHeightPx: Math.min(.46 * DY, Math.max(.3 * DY, AY))
        }
      },
      OR = YY => {
        (0, mF.h)(YY) ? (0, mF.b)().close(): (qA.noteChosenStop(YY), YY.blur())
      };
    class gR {
      constructor(YY) {
        this.host = YY, this.lastShiftPressMs = -1 / 0, this.phraseTexts = [], this.phrasesFill = !1
      }
      setPhraseRow(YY, rY) {
        this.phraseTexts = YY, this.phrasesFill = rY
      }
      pressKey(YY) {
        const rY = this.host.getState(),
          DY = IR(rY),
          FY = DY[YY.row][YY.col];
        this.host.setState({
          ...rY,
          focus: YY,
          preferredX: xI(DY, YY)
        }), "char" === FY.type ? this.typeChar(FY.char) : "command" === FY.type ? this.runCommand(FY.command) : this.sendPhrase(FY.phraseIndex)
      }
      runCommand(YY) {
        const rY = this.host.getState();
        switch (YY) {
          case "backspace":
            Ir(rY.target);
            break;
          case "space":
            Ar(rY.target, " ");
            break;
          case "newline":
            Ar(rY.target, "\n");
            break;
          case "caretLeft":
            Rr(rY.target, -1);
            break;
          case "caretRight":
            Rr(rY.target, 1);
            break;
          case "shift": {
            const YY = performance.now();
            this.host.setState({
              ...rY,
              shift: UI(rY.shift, YY, this.lastShiftPressMs)
            }), this.lastShiftPressMs = YY;
            break
          }
          case "page":
          case "otherPage": {
            const DY = qI(rY.page, rY.accentsFirst)[YY];
            this.host.setState({
              ...rY,
              page: DY,
              focus: PI(IR({
                ...rY,
                page: DY
              }), rY.focus)
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
            (0, mF.h)(rY.target) && (0, mF.b)().selectNextChannel()
        }
      }
      submit() {
        var YY, rY;
        const {
          target: DY
        } = this.host.getState();
        this.host.hide(), (0, mF.h)(DY) ? (0, mF.b)().submit() : (qA.noteChosenStop(DY), null === (YY = (rY = (0, mF.f)(DY)).submit) || void 0 === YY || YY.call(rY), document.activeElement === DY && DY.blur())
      }
      close() {
        const {
          target: YY
        } = this.host.getState();
        this.host.hide(), OR(YY)
      }
      typeChar(YY) {
        const {
          target: rY,
          page: DY,
          shift: FY
        } = this.host.getState();
        Ar(rY, tI(YY, DY, FY)), this.host.setState({
          ...this.host.getState(),
          shift: LI(FY, YY)
        })
      }
      sendPhrase(YY) {
        if (this.phrasesFill) {
          const {
            target: rY
          } = this.host.getState(), DY = this.phraseTexts[YY];
          DY && (rY.setSelectionRange(0, rY.value.length), Ar(rY, DY))
        } else DR.claim(performance.now()) && (this.host.hide(), (0, mF.b)().sendLine(this.phraseTexts[YY]))
      }
    }
    const aR = {
        initialDelayMs: 380,
        intervalMs: 85
      },
      vR = {
        initialDelayMs: 400,
        intervalMs: 55
      };
    class uR {
      constructor(YY, rY) {
        this.host = YY, this.editor = rY, this.lastDirection = null, this.navRepeat = new yY.b((0, QY.b)(aR)), this.commandRepeats = new Map(fI.filter((YY => {
          let {
            repeats: rY
          } = YY;
          return rY
        })).map((YY => {
          let {
            command: rY
          } = YY;
          return [rY, (0, QY.b)(vR)]
        })))
      }
      reset() {
        this.navRepeat.reset();
        for (const YY of this.commandRepeats.values()) YY.reset()
      }
      onVisibleFrame(YY) {
        const rY = performance.now();
        for (const {
            command: AY,
            action: IY
          }
          of fI) {
          const DY = (0, vY.i)(IY),
            FY = this.commandRepeats.get(AY);
          if ((FY ? FY.update(YY.isHeld(DY), rY) : YY.wasPressed(DY)) && (this.editor.runCommand(AY), !this.host.getState().visible)) return
        }
        if (YY.wasPressed((0, vY.i)("keyboardType")) && (this.editor.pressKey(this.host.getState().focus), !this.host.getState().visible)) return;
        const DY = this.readNavDirection(YY);
        this.lastDirection = DY;
        const FY = this.navRepeat.update(DY, rY);
        FY && this.navigate(FY)
      }
      onHiddenFrame(YY, rY) {
        var DY;
        if (YY.wasPressed((0, vY.i)("keyboardClose"))) return void OR(rY);
        const FY = (0, vY.i)("keyboardType");
        if (YY.wasPressed(FY)) return uY.b.consumeButton(FY), void this.host.open(rY);
        const AY = this.readNavDirection(YY),
          IY = null !== AY && AY !== this.lastDirection;
        if (this.lastDirection = AY, !IY || (0, mF.h)(rY)) return;
        const RY = (null === (DY = rA()) || void 0 === DY ? void 0 : DY.root.contains(rY)) || null !== rY.closest(".EntireInventoryWrapper");
        OR(rY), RY && uY.b.handOffHeldInput()
      }
      navigate(YY) {
        const rY = this.host.getState();
        if ("Up" === YY && 0 === rY.focus.row && "chat" === rY.kind) return (0, mF.b)().stepHistory(), void this.host.setState({
          ...rY
        });
        const DY = ((YY, rY, DY, FY) => {
          if ("Left" === DY || "Right" === DY) {
            const FY = YY[rY.row].length,
              AY = (rY.col + ("Right" === DY ? 1 : -1) + FY) % FY,
              IY = {
                row: rY.row,
                col: AY
              };
            return {
              pos: IY,
              preferredX: xI(YY, IY)
            }
          }
          const AY = (rY.row + ("Down" === DY ? 1 : -1) + YY.length) % YY.length;
          return {
            pos: {
              row: AY,
              col: nI(YY, AY, FY)
            },
            preferredX: FY
          }
        })(IR(rY), rY.focus, YY, rY.preferredX);
        this.host.setState({
          ...rY,
          focus: DY.pos,
          preferredX: DY.preferredX
        })
      }
      readNavDirection(YY) {
        for (const rY of yY.x)
          if (YY.isHeld(rY)) return rY;
        return (0, yY.cb)((0, yY.g)(YY.leftStick, (0, sY.i)().moveDeadzone))
      }
    }
    const sR = ["Up", "Down", "Left", "Right"],
      iR = new Set(["CapsLock", "Control", "Fn", "FnLock", "Hyper", "NumLock", "ScrollLock", "Shift", "Super"]);
    const yR = new class {
      constructor() {
        this.state = FR, this.listeners = new Set, this.ownedField = null, this.pendingChatInput = null, this.pendingChatTimeout = 0, this.savedInputMode = null, this.editor = new gR(this), this.padInput = new uR(this, this.editor)
      }
      getState() {
        return this.state
      }
      setState(YY) {
        const rY = YY.visible !== this.state.visible;
        this.state = YY;
        for (const DY of this.listeners) DY();
        rY && aY.g.vo(pY.e, YY.visible)
      }
      subscribe(YY) {
        return this.listeners.add(YY), () => {
          this.listeners.delete(YY)
        }
      }
      install() {
        const YY = uY.b.register({
            name: "keyboard",
            isActive: () => this.state.visible || LY(document.activeElement),
            onFrame: YY => {
              this.onFrame(YY)
            },
            onDeactivate: () => {
              this.padInput.reset()
            },
            wakePressActs: YY => sR.includes(YY) || !this.state.visible && YY === (0, vY.i)("keyboardType")
          }),
          rY = YY => {
            const rY = YY.target;
            LY(rY) && (rY === this.pendingChatInput || (0, iY.i)() ? this.open(rY) : this.state.visible && rY !== this.state.target && (this.ownedField = null, this.hide()))
          },
          DY = () => {
            setTimeout((() => {
              this.releaseLostField()
            }), 0)
          },
          FY = YY => {
            YY.isTrusted && this.state.visible && (YY => !YY.repeat && !iR.has(YY.key) && !(0, YR.d)(YY.key) && !/^(Audio|Media|Browser|Launch|Gamepad)/.test(YY.key))(YY) && this.hide()
          },
          AY = () => {
            this.state.visible && this.setState({
              ...this.state,
              ...RR(this.state.target)
            })
          };
        document.addEventListener("focusin", rY, !0), document.addEventListener("focusout", DY, !0), window.addEventListener("keydown", FY, !0), window.addEventListener("resize", AY);
        const IY = aY.g.subscribe(SI.e, (() => {
            this.openChat()
          })),
          RY = aY.g.subscribe(pY.i, (YY => {
            this.openForField(YY)
          }));
        return () => {
          YY(), document.removeEventListener("focusin", rY, !0), document.removeEventListener("focusout", DY, !0), window.removeEventListener("keydown", FY, !0), window.removeEventListener("resize", AY), aY.g.unsubscribe(IY), aY.g.unsubscribe(RY), this.clearPendingChat(), this.hide(), this.ownedField = null
        }
      }
      openChat() {
        const YY = (0, mF.b)();
        YY ? document.activeElement !== YY.input ? (this.clearPendingChat(), this.pendingChatInput = YY.input, this.pendingChatTimeout = window.setTimeout((() => {
          this.pendingChatInput = null
        }), 250), YY.open()) : this.open(YY.input) : console.warn("controllerOpenChat with no chat mounted")
      }
      openForField(YY) {
        LY(YY) ? (document.activeElement !== YY && YY.focus(), document.activeElement === YY && this.open(YY)) : console.warn("controllerOpenKeyboard needs an editable input or textarea", YY)
      }
      open(YY) {
        var rY;
        if (this.clearPendingChat(), this.ownedField = YY, this.state.visible && this.state.target === YY) return;
        this.restoreInputMode(), (YY => {
          tY(YY) && 0 === YY.selectionStart && 0 === YY.selectionEnd && YY.setSelectionRange(YY.value.length, YY.value.length)
        })(YY), this.savedInputMode = YY.getAttribute("inputmode"), YY.setAttribute("inputmode", "none");
        const DY = {
          ...FR,
          visible: !0,
          target: YY,
          kind: (0, mF.h)(YY) ? "chat" : null !== (rY = (0, mF.f)(YY).kind) && void 0 !== rY ? rY : null,
          accentsFirst: (FY = gI.h.get().getCurrentLanguageCode(), XI.has(FY)),
          ...RR(YY)
        };
        var FY;
        const AY = IR(DY),
          IY = ((YY, rY) => {
            for (let DY = 0; DY < YY.length; DY++) {
              const FY = YY[DY].findIndex((YY => "char" === YY.type && YY.char === rY));
              if (-1 !== FY) return {
                row: DY,
                col: FY
              }
            }
            return null
          })(AY, "q");
        this.padInput.reset(), this.setState({
          ...DY,
          focus: IY,
          preferredX: xI(AY, IY)
        })
      }
      hide() {
        this.state.visible && (this.restoreInputMode(), this.padInput.reset(), this.setState(FR))
      }
      onFrame(YY) {
        if (this.releaseLostField()) return;
        const rY = document.activeElement;
        this.state.visible ? this.padInput.onVisibleFrame(YY) : LY(rY) && this.padInput.onHiddenFrame(YY, rY)
      }
      releaseLostField() {
        const YY = this.ownedField;
        return !(null === YY || YY.isConnected && document.activeElement === YY) && (this.ownedField = null, this.hide(), !0)
      }
      clearPendingChat() {
        window.clearTimeout(this.pendingChatTimeout), this.pendingChatInput = null
      }
      restoreInputMode() {
        const {
          target: YY
        } = this.state;
        YY && (null === this.savedInputMode ? YY.removeAttribute("inputmode") : YY.setAttribute("inputmode", this.savedInputMode), this.savedInputMode = null)
      }
    };
    var QR = DY(8189);
    const oR = new Map(fI.map((YY => {
        let {
          command: rY,
          action: DY
        } = YY;
        return [rY, DY]
      }))),
      WR = {
        letters: "ABC",
        accents: "\xe0\xe9",
        symbols: "&123"
      },
      ER = {
        chat: "controller:keyboardTargetChat",
        sign: "controller:keyboardTargetSign",
        nameTag: "controller:keyboardTargetNameTag",
        book: "controller:keyboardTargetBook",
        LR: "controller:keyboardTargetBookTitle"
      },
      mR = YY => {
        const rY = (() => {
          const [, YY] = (0, hY.useReducer)((YY => YY + 1), 0);
          return YY
        })();
        (0, hY.useEffect)((() => {
          if (!YY) return;
          const DY = ["input", "select", "selectionchange", "keyup", "pointerup"];
          for (const AY of DY) YY.addEventListener(AY, rY);
          document.addEventListener("selectionchange", rY);
          const FY = new MutationObserver(rY);
          return FY.observe(YY, {
            attributeFilter: ["placeholder"]
          }), () => {
            FY.disconnect();
            for (const FY of DY) YY.removeEventListener(FY, rY);
            document.removeEventListener("selectionchange", rY)
          }
        }), [YY, rY])
      },
      VR = YY => {
        YY.preventDefault()
      },
      SR = YY => {
        "mouse" !== YY.pointerType && YY.preventDefault()
      },
      lR = () => {
        var YY;
        const {
          t: rY
        } = (0, AY.C)(), DY = (() => {
          const [YY, rY] = (0, hY.useState)(yR.getState());
          return (0, hY.useEffect)((() => yR.subscribe((() => {
            rY(yR.getState())
          }))), []), YY
        })(), FY = (0, iY.x)(), IY = (0, hY.useRef)(null);
        (0, sY.s)(), (0, iY.y)(), (0, hY.useEffect)((() => {
          const YY = yR.install(),
            rY = null;
          return () => {
            YY(), null === rY || void 0 === rY || rY()
          }
        }), []);
        const RY = (0, hY.useMemo)((() => rR.map((YY => rY(YY)))), [rY]),
          OY = DY.visible && "chat" === DY.kind ? DY.target : null;
        mR(OY);
        const gY = null !== (YY = null === OY || void 0 === OY ? void 0 : OY.value) && void 0 !== YY ? YY : "",
          aY = ((YY, rY, DY) => {
            if (!YY.startsWith("/")) return [];
            const FY = [];
            for (let AY = rY.length - 1; AY >= 0 && FY.length < DY; AY--) {
              const DY = rY[AY].trim();
              DY.startsWith(YY) && DY !== YY && !FY.includes(DY) && FY.push(DY)
            }
            return FY
          })(gY, gY.startsWith("/") ? (0, QR.g)() : [], rR.length),
          uY = gY.startsWith("/"),
          yY = uY ? rR.map(((YY, rY) => {
            var DY;
            return null !== (DY = aY[rY]) && void 0 !== DY ? DY : ""
          })) : RY;
        if ((0, hY.useEffect)((() => {
            yR.editor.setPhraseRow(yY, uY)
          })), (0, hY.useEffect)((() => {
            const YY = IY.current;
            if (YY) return YY.addEventListener("touchstart", VR, {
              passive: !1
            }), () => {
              YY.removeEventListener("touchstart", VR)
            }
          }), [DY.visible]), !DY.visible) return null;
        const QY = IR(DY),
          oY = GI(QY),
          WY = YY => "char" === YY.type ? tI(YY.char, DY.page, DY.shift) : "phrase" === YY.type ? yY[YY.phraseIndex] : (YY => {
            switch (YY) {
              case "backspace":
                return "\u232b";
              case "shift":
                return "caps" === DY.shift ? "\u21ea" : "\u21e7";
              case "page":
              case "otherPage":
                return WR[qI(DY.page, DY.accentsFirst)[YY]];
              case "space":
                return rY("controller:keyboardSpace");
              case "caretLeft":
                return "\u2190";
              case "caretRight":
                return "\u2192";
              case "newline":
                return "\u21b5";
              case "submit":
                return rY("chat" === DY.kind ? "controller:keyboardSend" : "controller:keyboardDone");
              case "close":
                return "\u2715";
              case "channel":
                return "\u21c4"
            }
          })(YY.command),
          EY = YY => {
            yR.editor.pressKey(YY)
          };
        return (0, MY.jsxs)("div", {
          ref: IY,
          className: JY()(mF.m, "top" === DY.placement ? "PadKeyboardTop" : "PadKeyboardBottom", {
            PadKeyboardMultiline: DY.target instanceof HTMLTextAreaElement
          }),
          style: {
            "--pad-keyboard-rows": QY.length,
            "--pad-keyboard-height": `${DY.maxHeightPx}px`
          },
          onPointerDown: SR,
          onMouseDown: VR,
          children: [(0, MY.jsx)(TR, {
            target: DY.target,
            label: DY.kind ? rY(ER[DY.kind]) : DY.target.placeholder || rY("controller:keyboardTargetText")
          }), (0, MY.jsx)("div", {
            className: "PadKeyboardRows",
            children: QY.map(((YY, rY) => (0, MY.jsx)("div", {
              className: JY()("PadKeyboardRow", {
                PadKeyboardPhraseRow: "phrase" === YY[0].type
              }),
              children: YY.map(((YY, AY) => {
                const IY = FY && DY.focus.row === rY && DY.focus.col === AY,
                  RY = "command" === YY.type ? oR.get(YY.command) : void 0;
                return (0, MY.jsx)("div", {
                  className: "PadKeyboardKeySlot",
                  style: {
                    width: YY.width / oY * 100 + "%"
                  },
                  children: (0, MY.jsxs)("div", {
                    className: JY()("PadKeyboardKey", {
                      PadKeyboardKeyFocused: IY,
                      PadKeyboardKeyCommand: "command" === YY.type,
                      PadKeyboardKeyPhrase: "phrase" === YY.type,
                      PadKeyboardKeyActive: "command" === YY.type && "shift" === YY.command && "off" !== DY.shift,
                      PadKeyboardKeySubmit: "command" === YY.type && "submit" === YY.command
                    }),
                    role: "button",
                    onClick: () => {
                      EY({
                        row: rY,
                        col: AY
                      })
                    },
                    onTouchEnd: YY => {
                      var DY, FY;
                      YY.preventDefault(), DY = YY.changedTouches[0], FY = YY.currentTarget.getBoundingClientRect(), DY && DY.clientX >= FY.left && DY.clientX <= FY.right && DY.clientY >= FY.top && DY.clientY <= FY.bottom && EY({
                        row: rY,
                        col: AY
                      })
                    },
                    children: [(0, MY.jsx)("span", {
                      className: "PadKeyboardKeyLabel",
                      children: WY(YY)
                    }), FY && RY && (0, MY.jsx)(iI, {
                      className: "PadKeyboardKeyGlyph",
                      glyph: (0, vY.i)(RY)
                    })]
                  })
                }, AY)
              }))
            }, rY)))
          })]
        })
      },
      TR = YY => {
        let {
          target: rY,
          label: DY
        } = YY;
        mR(rY);
        const FY = (0, hY.useRef)(null),
          AY = (0, hY.useRef)(null),
          IY = rY instanceof HTMLTextAreaElement;
        (0, hY.useLayoutEffect)((() => {
          const YY = FY.current,
            rY = AY.current;
          IY ? YY.scrollTop = rY.offsetTop - YY.clientHeight / 2 : YY.scrollLeft = rY.offsetLeft - YY.clientWidth / 2
        }));
        const {
          value: RY,
          start: OY,
          end: gY
        } = Yr(rY), aY = "password" === rY.type ? "\u2022".repeat(RY.length) : RY;
        return (0, MY.jsxs)("div", {
          className: "PadKeyboardPreview",
          children: [(0, MY.jsx)("div", {
            className: "PadKeyboardPreviewLabel SmallTextBold",
            children: DY
          }), (0, MY.jsxs)("div", {
            ref: FY,
            className: JY()("PadKeyboardPreviewText", {
              PadKeyboardPreviewMultiline: IY
            }),
            children: [(0, MY.jsx)("span", {
              children: aY.slice(0, OY)
            }), (0, MY.jsx)("span", {
              ref: AY,
              className: "PadKeyboardCaret"
            }), OY !== gY && (0, MY.jsx)("span", {
              className: "PadKeyboardPreviewSelection",
              children: aY.slice(OY, gY)
            }), (0, MY.jsx)("span", {
              children: aY.slice(gY)
            }), 0 === aY.length && rY.placeholder && rY.placeholder !== DY && (0, MY.jsx)("span", {
              className: "PadKeyboardPreviewPlaceholder",
              children: rY.placeholder
            })]
          })]
        })
      };
    var eR = DY(1384),
      NR = DY(2984);
    const BR = function() {
        for (var YY = arguments.length, rY = new Array(YY), DY = 0; DY < YY; DY++) rY[DY] = arguments[DY];
        return rY.map(vY.i)
      },
      cR = (YY, rY) => {
        const DY = jF(YY);
        return DY ? [{
          glyphs: [DY],
          labelKey: rY
        }] : []
      },
      KR = [".BottomMiddleElements", ".BottomLeftElements > *", ".BottomRightElements > *", ".MiddleTextBottom .MiddleText"],
      HR = "--pad-hint-bar-clearance",
      zR = "[data-pad-hint-bar-avoid]",
      ZR = YY => {
        const rY = [];
        for (const DY of YY) ar(DY) && rY.push(DY.getBoundingClientRect());
        return rY
      },
      CR = YY => {
        if (!YY) return null;
        const rY = rA(),
          DY = rY ? ZR(((YY, rY) => {
            const DY = YY.closest(zR);
            return DY ? [DY] : ("popup" === rY ? document : YY).querySelectorAll(zR)
          })(rY.root, rY.layer.kind)) : [],
          FY = !rY || rY.root.hasAttribute("data-pad-shows-hud");
        if (((0, NR.i)(null === rY || void 0 === rY ? void 0 : rY.layer.kind, (0, NR.j)()) || FY) && DY.push(...ZR(document.querySelectorAll(KR.join(",")))), 0 === DY.length) return null;
        const {
          width: AY,
          height: IY
        } = YY.getBoundingClientRect(), RY = window.innerHeight - 8, OY = (0, NR.q)(RY, {
          width: AY,
          height: IY
        }, window.innerWidth / 2, DY, 8);
        return OY === RY ? null : Math.round(window.innerHeight - OY)
      },
      fR = YY => {
        const rY = document.documentElement.style,
          DY = YY ? `${Math.round(window.innerHeight-YY.getBoundingClientRect().top)}px` : "";
        rY.getPropertyValue(HR) !== DY && (DY ? rY.setProperty(HR, DY) : rY.removeProperty(HR))
      },
      jR = () => {
        const {
          t: YY
        } = (0, AY.C)(), {
          hideButtonHints: rY
        } = (0, sY.s)(), DY = (0, iY.x)(), [FY, IY] = (0, hY.useState)(!1), [RY, aY] = (0, hY.useState)([]), [QY, oY] = (0, hY.useState)(null), WY = (0, hY.useRef)(null), EY = (0, hY.useRef)(null);
        (0, OI.g)(pY.e, (YY => {
          IY(YY)
        })), (0, OI.g)(NR.n, (() => {
          var YY;
          null === (YY = EY.current) || void 0 === YY || YY.call(EY)
        }));
        const mY = DY && !rY && !FY;
        return (0, hY.useEffect)((() => {
          if (!mY) return;
          let YY = null;
          const rY = () => {
            const rY = (() => {
                var YY;
                const rY = uY.b.getActiveConsumerName(),
                  DY = (0, NR.h)();
                if (DY) {
                  const YY = (0, vY.i)(DY),
                    rY = "emoteWheel" === DY && "wheel" === (0, sY.i)().emoteButton || !(0, yY.E)(uY.b.getLastFrame().values, YY) ? {
                      glyphs: BR("menuConfirm"),
                      labelKey: "controller:menusSelect"
                    } : {
                      glyphs: [YY],
                      labelKey: "controller:wheelReleaseToPick"
                    };
                  return [{
                    glyphs: [(0, vY.u)(YY)],
                    labelKey: "controller:wheelChoose"
                  }, rY, {
                    glyphs: BR("menuBack"),
                    labelKey: "controller:wheelClose"
                  }]
                }
                const FY = rA();
                if (!FY || "focus" !== rY && "cursor" !== rY) return (0, NR.d)(vY.i);
                const AY = [],
                  IY = {
                    glyphs: BR("menuBack"),
                    labelKey: "controller:menusBack"
                  },
                  RY = hr(FY.root),
                  OY = RY ? !vr(RY) : Boolean(FY.layer.close),
                  aY = !RY && FY.layer.closeLabelKey ? FY.layer.closeLabelKey : IY.labelKey,
                  iY = OY ? [{
                    ...IY,
                    labelKey: aY
                  }] : [],
                  QY = lF(FY.layer.kind) ? [{
                    glyphs: BR("chat"),
                    labelKey: "controller:menusQuickChat"
                  }] : [];
                if ("cursor" === rY) return AY.push({
                  glyphs: BR("menuConfirm"),
                  labelKey: "controller:menusClick"
                }), AY.push({
                  glyphs: BR("menuSecondary"),
                  labelKey: "controller:menusRightClick"
                }), AY.push(...iY), AY.push(...QY), AY.push({
                  glyphs: ["RightStick"],
                  labelKey: "controller:menusScroll"
                }), oA() && AY.push({
                  glyphs: BR("menuToggleCursor"),
                  labelKey: "controller:menusFocusMode"
                }), AY;
                const oY = qA.getFocused();
                oY && (0, SA.c)(oY) ? AY.push({
                  glyphs: ["Left", "Right"],
                  labelKey: "controller:menusAdjust"
                }) : oY && fr(oY) ? AY.push({
                  glyphs: [],
                  labelKey: "controller:menusUseMouse"
                }) : AY.push({
                  glyphs: BR("menuConfirm"),
                  labelKey: "controller:menusSelect"
                });
                const WY = oY ? null === (YY = AF(oY)) || void 0 === YY ? void 0 : YY.dataset.padSecondary : void 0;
                WY && AY.push({
                  glyphs: BR("menuSecondary"),
                  labelKey: WY
                }), AY.push(...null !== oY && void 0 !== oY && oY.closest("[data-pad-friends-column]") ? [IY] : iY), AY.push(...QY);
                const EY = "home" === FY.layer.kind;
                JF(FY.root) || !BF(FY.root) && !MF(FY) ? EY && AY.push({
                  glyphs: BR("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusRows"
                }) : AY.push({
                  glyphs: BR("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusTabs"
                }), EY && (AY.push(...cR("inventory", "controller:menusFriends")), WY || AY.push({
                  glyphs: BR("menuSecondary"),
                  labelKey: "controller:menusSearch"
                }), AY.push(...cR("pause", "controller:menusSettings")), AY.push(...cR("leaderboard", "controller:menusNotifications")));
                const mY = gY.b.get("openEverythingMenuName");
                return "inGame" === gY.b.get("gameState") && "popup" !== FY.layer.kind && null !== mY && ((0, YF.l)(mY) ? AY.push(...cR("leaderboard", "controller:menusClose")) : mY !== tD.t.LOBBY_LEADERBOARD && AY.push(...cR("leaderboard", "controller:menusLobby"))), AY.push({
                  glyphs: BR("menuToggleCursor"),
                  labelKey: "controller:menusCursorMode"
                }), AY
              })(),
              DY = CR(WY.current),
              FY = ((YY, rY) => `${YY.map((YY=>`${YY.glyphs.join("+")}:${YY.labelKey}`)).join("|")}@${rY}`)(rY, DY);
            FY !== YY && (YY = FY, (0, OY.unstable_batchedUpdates)((() => {
              aY(rY), oY(DY)
            }))), fR(WY.current)
          };
          rY(), EY.current = rY;
          const DY = requestAnimationFrame(rY),
            FY = setInterval(rY, 150);
          return () => {
            EY.current = null, cancelAnimationFrame(DY), clearInterval(FY), fR(null)
          }
        }), [mY]), (0, hY.useLayoutEffect)((() => {
          if (!mY) return;
          if (0 === RY.length) return void fR(null);
          const YY = CR(WY.current);
          YY === QY ? fR(WY.current) : oY(YY)
        }), [mY, RY, QY]), mY && 0 !== RY.length ? (0, MY.jsx)("div", {
          ref: WY,
          className: "PadButtonHintBar SmallTextBold",
          style: null === QY ? void 0 : {
            bottom: QY
          },
          "aria-hidden": !0,
          children: RY.map((rY => (0, MY.jsxs)("div", {
            className: "PadButtonHint",
            children: [rY.glyphs.map((YY => (0, MY.jsx)(iI, {
              glyph: YY,
              className: "PadButtonHintGlyph"
            }, YY))), (0, MY.jsx)("span", {
              children: YY(rY.labelKey)
            })]
          }, rY.labelKey)))
        }) : null
      },
      hR = [Or, "label", "[data-pad-slider]"].join(","),
      dR = "data-pad-cursor-probe",
      JR = YY => {
        var rY;
        const DY = (YY => {
          const rY = [];
          for (let FY = YY; FY && FY !== document.body && FY !== document.documentElement && (rY.push(FY), !(rY.length > 8)); FY = FY.parentElement);
          const DY = document.documentElement.classList.contains(iY.p) ? rY[rY.length - 1] : void 0;
          null === DY || void 0 === DY || DY.setAttribute(dR, "");
          try {
            return rY.map((YY => ({
              element: YY,
              cursor: getComputedStyle(YY).cursor
            })))
          } finally {
            null === DY || void 0 === DY || DY.removeAttribute(dR)
          }
        })(YY);
        if ("pointer" !== (null === (rY = DY[0]) || void 0 === rY ? void 0 : rY.cursor)) return null;
        let FY = 0;
        for (; FY + 1 < DY.length && "pointer" === DY[FY + 1].cursor;) FY++;
        return DY[FY].element
      },
      MR = (YY, rY, DY, FY) => {
        const AY = FY.root.contains(YY) ? FY.root : null;
        for (let IY = YY; IY && IY !== document.body && IY !== document.documentElement; IY = IY.parentElement) {
          if (IY instanceof HTMLElement && BY(IY, rY) && ZY(IY, rY, DY)) return IY;
          if (IY === AY) break
        }
        return "home" === FY.layer.kind || "gamePage" === FY.layer.kind ? ((YY, rY) => {
          const DY = document.scrollingElement;
          return DY instanceof HTMLElement && ![document.documentElement, document.body].some((rY => {
            const DY = getComputedStyle(rY),
              FY = "y" === YY ? DY.overflowY : DY.overflowX;
            return "hidden" === FY || "clip" === FY
          })) && ZY(DY, YY, rY) ? DY : null
        })(rY, DY) : null
      };
    const wR = new class {
        constructor() {
          this.state = {
            x: 0,
            y: 0,
            speedRamp: 0
          }, this.hasPosition = !1, this.active = !1, this.hidden = !1, this.hit = null, this.interactive = null, this.magnet = null, this.lastHitTestMs = -1 / 0, this.press = null, this.draggedSlider = null, this.repeatStop = null, this.repeatKey = null, this.repeated = !1, this.confirmRepeat = (0, QY.b)(yY.r), this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.layerRoot = null, this.layerOrder = 0, this.layerPoints = new WeakMap, this.page = null, this.pendingPageStart = null
        }
        install() {
          const YY = uY.b.register({
              name: "cursor",
              isActive: () => "cursor" === WA(),
              onFrame: YY => {
                this.onFrame(YY)
              },
              onDeactivate: () => {
                this.deactivate()
              },
              wakePressActs: YY => (0, uY.f)(YY) || YY === (0, vY.i)("menuConfirm") && jr((0, iY.d)())
            }),
            rY = (0, GF.i)((YY => {
              const rY = YY.getRoot();
              rY && this.layerPoints.delete(rY), rY === this.layerRoot && (this.layerRoot = null)
            })),
            DY = aY.g.subscribe("appManagerUpdated|activeInputDevice", (YY => {
              "gamepad" !== YY && this.active && !this.hidden && this.hide()
            }));
          return () => {
            YY(), rY(), aY.g.unsubscribe(DY), this.deactivate()
          }
        }
        getHighlighted() {
          return this.isVisible() ? this.interactive : null
        }
        isVisible() {
          return this.active && !this.hidden && (0, iY.i)()
        }
        getPoint() {
          return {
            x: this.state.x,
            y: this.state.y
          }
        }
        hide() {
          this.hidden = !0, this.cancelPress(), this.secondaryArmed = !1, this.clearHover(), this.vo()
        }
        activate(YY) {
          this.active = !0, this.hidden = !1;
          const rY = iA();
          !rY || rY.root && rY.root !== YY.root ? this.jumpTo(this.hasPosition ? this.getPoint() : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          }) : (this.setLayer(YY), this.jumpTo(rY.point))
        }
        jumpTo(YY) {
          this.state = {
            x: YY.x,
            y: YY.y,
            speedRamp: 0
          }, this.hasPosition = !0, this.lastHitTestMs = -1 / 0
        }
        deactivate() {
          this.active && (this.active = !1, this.page = null, this.pendingPageStart = null, this.cancelPress(), this.clearHover(), this.draggedSlider = null, this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.vo())
        }
        onFrame(YY) {
          const rY = rA();
          if (!rY) return;
          if (this.active || this.activate(rY), this.followPage(rY)) return;
          this.followLayer(rY);
          const DY = YY.wokeDevice ? (0, iY.d)() : null;
          if (DY && this.jumpTo(DY), !(0, iY.i)()) return void this.hide();
          const FY = (0, vY.i)("menuToggleCursor");
          if (YY.wasPressed(FY)) return uY.b.consumeButton(FY), void sA(this.getHandoff(null));
          if (this.handBackToFocus(YY)) return;
          const AY = (0, vY.i)("menuConfirm"),
            IY = (0, vY.i)("menuSecondary");
          if (YY.wasPressed((0, vY.i)("menuBack"))) return Zr(rY.root) || dr(rY.root) || DA(), void this.vo();
          if (XF(null, YY, rY)) return YY.wasReleased(AY) && this.press && (this.updateHit(!1), this.updateConfirm(YY, AY)), void this.vo();
          if (document.pointerLockElement) return void this.hide();
          const RY = EA() ? {
              x: 0,
              y: 0
            } : (YY => {
              const rY = (YY, rY) => (YY ? 1 : 0) - (rY ? 1 : 0);
              return {
                x: rY(YY.isHeld("Right"), YY.isHeld("Left")),
                y: rY(YY.isHeld("Down"), YY.isHeld("Up"))
              }
            })(YY),
            OY = (0, sY.i)().moveDeadzone,
            gY = ((YY, rY) => {
              const DY = (0, yY.g)(YY, VY(rY));
              return Math.hypot(DY.x, DY.y)
            })(YY.leftStick, OY) > 0 || 0 !== RY.x || 0 !== RY.y;
          if (this.hidden) {
            const rY = YY.wasPressed(AY),
              DY = YY.wasPressed(IY);
            if (!gY && !TY(YY.rightStick) && !rY && !DY && !YY.wokeDevice) return void this.vo();
            if (this.hidden = !1, this.updateHit(!1), rY || DY) return rY && (this.press = {
              kind: "ignored"
            }, YY.wokeDevice && this.beginRepeat()), this.secondaryArmed = !1, void this.vo()
          }
          this.movePendingPageStart(gY);
          const aY = this.getPoint();
          this.state = lY(this.state, {
            stick: YY.leftStick,
            moveDeadzone: OY,
            dpad: RY,
            dtMs: YY.dtMs,
            cursorSpeedPercent: (0, sY.i)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: this.getAssistContext()
          });
          const QY = this.state.x !== aY.x || this.state.y !== aY.y,
            oY = [AY, IY].some((rY => YY.wasPressed(rY) || YY.wasReleased(rY)));
          (QY || oY || performance.now() - this.lastHitTestMs >= 100) && this.updateHit(QY), this.updateConfirm(YY, AY), this.updateSecondary(YY, IY), this.updateScroll(YY, rY), this.vo()
        }
        followPage(YY) {
          const rY = "home" === YY.layer.kind || "gamePage" === YY.layer.kind,
            DY = this.page;
          if (this.page = rY ? {
              key: (0, GF.p)(YY.layer),
              root: YY.root
            } : null, !this.page || !DY || DY.root !== YY.root || DY.key === this.page.key) return !1;
          if (this.cancelPress(), this.secondaryArmed = !1, this.setLayer(YY), "hybrid" === uA()) return gA = null, RA = null, aA.lock(), !0;
          const {
            key: FY
          } = this.page;
          return this.pendingPageStart = {
            root: YY.root,
            key: FY,
            returning: qA.notePageEnteredByCursor(FY),
            enteredAtMs: performance.now()
          }, !1
        }
        movePendingPageStart(YY) {
          const rY = this.pendingPageStart;
          if (!rY) return;
          if (YY || rY.root !== this.layerRoot) return void(this.pendingPageStart = null);
          const DY = rY.returning ? qA.recallStop(rY.root, rY.key) : null;
          if (!DY && rY.returning && performance.now() - rY.enteredAtMs < 1e3) return;
          const FY = null !== DY && void 0 !== DY ? DY : qA.pickInitial(rY.root, {
            includeDisabled: !0,
            waitForContent: !0,
            enteredAtMs: rY.enteredAtMs
          });
          FY && (this.pendingPageStart = null, this.jumpTo(Vr(FY)))
        }
        setLayer(YY) {
          this.layerRoot = YY.root, this.layerOrder = YY.order
        }
        followLayer(YY) {
          var rY;
          if (YY.root === this.layerRoot) return;
          null !== (rY = this.layerRoot) && void 0 !== rY && rY.isConnected && this.layerPoints.set(this.layerRoot, this.getPoint()), this.cancelPress(), this.draggedSlider = null, this.secondaryArmed = !1;
          const DY = this.layerPoints.get(YY.root),
            FY = DY && YY.order <= this.layerOrder ? DY : qA.getLayerStartPoint(YY.root);
          this.setLayer(YY), this.jumpTo(FY)
        }
        getHandoff(YY) {
          var rY;
          return {
            point: this.getPoint(),
            element: null !== (rY = this.interactive) && void 0 !== rY ? rY : this.findDraggedSliderNearby(),
            direction: YY
          }
        }
        findDraggedSliderNearby() {
          const YY = this.draggedSlider;
          if (null === YY || void 0 === YY || !YY.isConnected) return null;
          const rY = YY.getBoundingClientRect(),
            {
              y: DY
            } = this.getPoint();
          return DY >= rY.top - 40 && DY <= rY.bottom + 40 ? YY : null
        }
        handBackToFocus(YY) {
          if (!EA()) return !1;
          const rY = yY.x.find((rY => YY.wasPressed(rY)));
          return !!rY && (DY = this.getHandoff(rY), gA = AA(DY), RA = null, aA.lock(), uY.b.handOffHeldInput(), !0);
          var DY
        }
        getAssistContext() {
          const YY = this.interactive;
          if (null === YY || void 0 === YY || !YY.isConnected) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const rY = YY.getBoundingClientRect();
          if (rY.width > .4 * window.innerWidth || rY.height > .4 * window.innerHeight) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const DY = (0, sY.i)().cursorMagnetism && !(0, kY.b)(YY) && !YY.closest("[data-pad-slider]"),
            FY = this.magnet && this.magnet !== YY && this.magnet.isConnected ? this.magnet.getBoundingClientRect() : rY;
          return {
            overInteractive: !0,
            magnetTarget: DY ? {
              x: FY.left + FY.width / 2,
              y: FY.top + FY.height / 2
            } : null
          }
        }
        updateHit(YY) {
          this.lastHitTestMs = performance.now();
          const rY = this.getPoint(),
            DY = document.elementFromPoint(rY.x, rY.y),
            FY = DY && !(0, WY.l)(DY) && (YY => {
              var rY;
              const DY = rA();
              return !(DY && !DY.root.contains(YY) && !YY.closest(".tooltip-container")) || !(null !== (rY = document.getElementById("root")) && void 0 !== rY && rY.contains(YY))
            })(DY) ? DY : null;
          if (FY !== this.hit) return Br(this.hit, FY, rY), this.hit = FY, void this.setInteractive(FY ? (YY => {
            const rY = YY.closest(hR);
            if (rY) {
              var DY, FY;
              const YY = null !== (DY = null === (FY = rY.parentElement) || void 0 === FY ? void 0 : FY.closest("[data-pad-focusable]")) && void 0 !== DY ? DY : rY;
              return vr(YY) ? {
                element: null,
                magnet: null
              } : {
                element: YY,
                magnet: rY
              }
            }
            const AY = JR(YY);
            return {
              element: AY,
              magnet: AY
            }
          })(FY) : {
            element: null,
            magnet: null
          });
          YY && FY && Br(FY, FY, rY)
        }
        setInteractive(YY) {
          let {
            element: rY,
            magnet: DY
          } = YY;
          this.interactive = rY, this.magnet = DY
        }
        clearHover() {
          this.hit && Br(this.hit, null, this.getPoint()), this.hit = null, this.setInteractive({
            element: null,
            magnet: null
          })
        }
        beginPress() {
          const YY = this.hit;
          if (!YY || fr(YY)) return {
            kind: "ignored"
          };
          const rY = (0, SA.c)(YY),
            DY = YY.closest("[data-pad-slider]");
          return rY && DY ? {
            kind: "slider",
            slider: DY,
            adjuster: rY
          } : (Tr(YY, this.getPoint()), {
            kind: "pointer",
            target: YY
          })
        }
        applySliderFraction(YY) {
          var rY;
          const DY = YY.slider.getBoundingClientRect(),
            FY = DY.height > DY.width,
            AY = null === (rY = YY.slider.querySelector("[data-pad-slider-handle]")) || void 0 === rY ? void 0 : rY.getBoundingClientRect(),
            IY = AY ? FY ? AY.height : AY.width : 0,
            RY = (FY ? DY.height : DY.width) - IY;
          if (RY <= 0) return;
          const OY = FY ? DY.bottom - IY / 2 - this.state.y : this.state.x - DY.left - IY / 2;
          YY.adjuster.setFraction(Math.max(0, Math.min(1, OY / RY)))
        }
        updateConfirm(YY, rY) {
          YY.wasPressed(rY) && (this.press = YY.wokeDevice ? {
            kind: "ignored"
          } : this.beginPress(), this.draggedSlider = "slider" === this.press.kind ? this.press.slider : null, this.beginRepeat());
          const DY = this.press;
          if (!DY) return;
          if (YY.isHeld(rY)) return "slider" === DY.kind && this.applySliderFraction(DY), void this.updateRepeat();
          this.press = null;
          const FY = this.repeated;
          if (this.endRepeat(), !YY.wasReleased(rY)) return void this.endPressWithoutClick(DY);
          const AY = this.getPoint(),
            IY = this.hit;
          if ("slider" === DY.kind && DY.adjuster.endDrag(), "pointer" === DY.kind) {
            const YY = null !== IY && void 0 !== IY ? IY : DY.target.isConnected ? DY.target : null;
            YY && er(YY, AY);
            const rY = IY && DY.target.isConnected && !FY ? ((YY, rY) => {
              for (let DY = YY; DY; DY = DY.parentElement)
                if (DY.contains(rY)) return DY;
              return null
            })(DY.target, IY) : null;
            rY && (qA.noteCursorActivation(rY), (0, WY.e)(rY, new MouseEvent("click", Sr(AY, 0, 0))), Cr(rY), mr(rY) && cr(rY))
          }
        }
        beginRepeat() {
          var YY, rY, DY;
          const FY = null !== (YY = null === (rY = this.hit) || void 0 === rY ? void 0 : rY.closest("[data-pad-repeat]")) && void 0 !== YY ? YY : null;
          this.repeatStop = FY, this.repeatKey = null !== (DY = null === FY || void 0 === FY ? void 0 : FY.getAttribute("data-pad-repeat")) && void 0 !== DY ? DY : null, this.repeated = !1, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now())
        }
        updateRepeat() {
          const YY = this.repeatStop;
          if (!YY) return;
          const rY = this.hit;
          YY.isConnected && !vr(YY) && YY.getAttribute("data-pad-repeat") === this.repeatKey && rY && YY.contains(rY) ? YY.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.repeated = !0, qA.noteCursorActivation(YY), (0, WY.e)(YY, new MouseEvent("click", Sr(this.getPoint(), 0, 0)))) : this.repeatStop = null
        }
        endRepeat() {
          this.repeatStop = null, this.repeated = !1
        }
        endPressWithoutClick(YY) {
          "slider" === YY.kind && YY.adjuster.endDrag(), "pointer" === YY.kind && YY.target.isConnected && er(YY.target, this.getPoint())
        }
        cancelPress() {
          this.endRepeat(), this.press && (this.endPressWithoutClick(this.press), this.press = null)
        }
        updateSecondary(YY, rY) {
          YY.wasPressed(rY) && (this.secondaryArmed = null !== this.hit), this.secondaryArmed && !YY.isHeld(rY) && (this.secondaryArmed = !1, YY.wasReleased(rY) && this.hit && Nr(this.hit, this.getPoint(), 2))
        }
        updateScroll(YY, rY) {
          const DY = eY(YY.rightStick, YY.dtMs);
          if (0 === DY.x && 0 === DY.y) return void(this.scrollRemainder = {
            x: 0,
            y: 0
          });
          this.scrollRemainder = {
            x: this.scrollRemainder.x + DY.x,
            y: this.scrollRemainder.y + DY.y
          };
          const FY = Math.trunc(this.scrollRemainder.x),
            AY = Math.trunc(this.scrollRemainder.y);
          this.scrollRemainder = {
            x: this.scrollRemainder.x - FY,
            y: this.scrollRemainder.y - AY
          };
          const IY = this.hit;
          if (!IY) return;
          let RY = !1;
          if (0 !== AY) {
            const YY = MR(IY, "y", AY > 0 ? 1 : -1, rY);
            YY && (YY.scrollBy({
              top: AY,
              behavior: "instant"
            }), RY = !0)
          }
          if (0 !== FY) {
            const YY = MR(IY, "x", FY > 0 ? 1 : -1, rY);
            YY && (YY.scrollBy({
              left: FY,
              behavior: "instant"
            }), RY = !0)
          }
          RY && (this.lastHitTestMs = -1 / 0)
        }
        vo() {
          wr.set({
            x: this.state.x,
            y: this.state.y,
            visible: this.isVisible(),
            pressed: null !== this.press && "ignored" !== this.press.kind
          })
        }
      },
      bR = () => {
        const YY = (0, hY.useMemo)((() => new XY), []),
          rY = (0, iY.x)();
        return (0, hY.useEffect)((() => {
          if (!rY) return;
          let DY = 0,
            FY = {
              of: null,
              atMs: 0,
              list: []
            };
          const AY = document.getElementsByClassName(mA),
            IY = YY => {
              for (const rY of [...AY]) rY !== YY && rY.classList.remove(mA)
            },
            RY = () => {
              var rY;
              DY = requestAnimationFrame(RY);
              const AY = (() => {
                const YY = qA.getFocused();
                if (qA.isActive() && null !== YY && void 0 !== YY && YY.isConnected) return YY;
                const rY = wR.getHighlighted();
                return null !== rY && void 0 !== rY && rY.isConnected ? rY : null
              })();
              IY(AY), AY && !AY.classList.contains(mA) && AY.classList.add(mA);
              const OY = null !== (rY = null === AY || void 0 === AY ? void 0 : AY.closest("[data-pad-reticle-box]")) && void 0 !== rY ? rY : AY;
              YY.show(OY ? ((YY, rY) => {
                let DY = YY.left,
                  FY = YY.top,
                  AY = YY.right,
                  IY = YY.bottom;
                for (const RY of rY) {
                  if (!RY) continue;
                  const YY = fY(RY);
                  DY = Math.max(DY, YY.left), FY = Math.max(FY, YY.top), AY = Math.min(AY, YY.right), IY = Math.min(IY, YY.bottom)
                }
                return AY <= DY || IY <= FY ? null : {
                  left: DY,
                  top: FY,
                  width: AY - DY,
                  height: IY - FY
                }
              })(OY.getBoundingClientRect(), (YY => {
                const rY = performance.now();
                return (FY.of !== YY || rY - FY.atMs > 500) && (FY = {
                  of: YY,
                  atMs: rY,
                  list: [cY(YY, "y"), cY(YY, "x")]
                }), FY.list
              })(OY)) : null)
            };
          return DY = requestAnimationFrame(RY), () => {
            cancelAnimationFrame(DY), IY(null), YY.hide()
          }
        }), [rY, YY]), (0, MY.jsx)(qY, {
          placer: YY,
          className: "PadFocusRing"
        })
      },
      XR = (YY, rY) => {
        YY.style.transform = `translate3d(${rY.x}px, ${rY.y}px, 0)`, YY.classList.toggle("Visible", rY.visible), YY.classList.toggle("Pressed", rY.pressed)
      },
      qR = () => {
        const YY = (0, hY.useRef)(null);
        return (0, hY.useEffect)((() => {
          const rY = wr.subscribe((rY => {
            YY.current && XR(YY.current, rY)
          }));
          return YY.current && XR(YY.current, wr.get()), rY
        }), []), (0, MY.jsx)("div", {
          ref: YY,
          className: "PadCursorView",
          "aria-hidden": "true",
          children: (0, MY.jsx)("div", {
            className: "PadCursorGlyph",
            children: "+"
          })
        })
      },
      pR = "#ncmp__modal.ncmp__active",
      kR = [{
        id: "nitro-consent-banner",
        find: () => document.querySelector(pR) ? null : document.querySelector("#ncmp__tool > .ncmp__banner.ncmp__active"),
        startSelectors: ["[data-ncmp-cmd='reject']", "[data-ncmp-cmd='showModal']"]
      }, {
        id: "nitro-consent-modal",
        find: () => document.querySelector(pR),
        startSelectors: ["[data-ncmp-cmd='reject']"]
      }, {
        id: "google-consent",
        find: () => document.querySelector(".fc-consent-root"),
        startSelectors: [".fc-cta-do-not-consent", ".fc-cta-manage-options"]
      }],
      GR = "PadOverThirdParty",
      xR = new Set(kR.map((YY => YY.id))),
      nR = () => {
        const YY = kR.map((YY => {
            let {
              id: rY,
              find: DY,
              startSelectors: FY
            } = YY;
            return (0, GF.m)({
              id: rY,
              kind: "popup",
              getRoot: () => {
                const YY = DY(),
                  rY = YY ? ((YY, rY) => {
                    var DY;
                    for (const FY of rY) {
                      const rY = YY.querySelector(FY);
                      if (rY) return rY
                    }
                    return null !== (DY = [...YY.querySelectorAll("button")].find((YY => !YY.matches(".fc-cta-consent, [data-ncmp-cmd='save']")))) && void 0 !== DY ? DY : null
                  })(YY, FY) : null;
                if (YY && rY && !rY.hasAttribute("data-pad-default-focus")) {
                  for (const rY of YY.querySelectorAll("[data-pad-default-focus]")) rY.removeAttribute("data-pad-default-focus");
                  for (const rY of YY.querySelectorAll("[data-pad-hint-bar-avoid]")) rY.removeAttribute("data-pad-hint-bar-avoid");
                  rY.setAttribute("data-pad-default-focus", ""), ((YY, rY) => {
                    let DY = YY;
                    for (let FY = YY.parentElement; FY && rY.contains(FY) && !(FY.getBoundingClientRect().height >= window.innerHeight / 2); FY = FY.parentElement) DY = FY;
                    return DY
                  })(rY, YY).setAttribute("data-pad-hint-bar-avoid", "")
                }
                return YY
              },
              close: null,
              memoryKey: null
            })
          })),
          rY = document.documentElement,
          DY = RY.f.onFrame((() => {
            const YY = (0, iY.i)() ? rA() : null,
              DY = !!YY && (FY = YY.layer, xR.has(FY.id));
            var FY;
            rY.classList.contains(GR) !== DY && rY.classList.toggle(GR, DY)
          }));
        return () => {
          for (const rY of YY) rY();
          DY(), rY.classList.remove(GR)
        }
      },
      PR = "PadLargePointer",
      UR = () => {
        (0, hY.useEffect)((() => {
          const YY = (0, WY.j)(document.body),
            rY = qA.install(),
            DY = wR.install(),
            FY = nR();
          return () => {
            YY(), rY(), DY(), FY()
          }
        }), []);
        const {
          largePointer: YY
        } = (0, sY.s)(), rY = (0, eR.p)() && YY;
        return (0, hY.useEffect)((() => {
          if (rY) return document.documentElement.classList.add(PR), () => {
            document.documentElement.classList.remove(PR)
          }
        }), [rY]), (0, OY.createPortal)((0, MY.jsxs)(MY.Fragment, {
          children: [(0, MY.jsx)(jR, {}), (0, MY.jsx)(bR, {}), (0, MY.jsx)(qR, {})]
        }), document.body)
      };
    var LR = DY(8202),
      tR = DY(8230),
      YO = DY(8216);
    DY(8233);
    const rO = (YY, rY) => {
        const [DY, FY] = (0, hY.useState)(!1), [AY, IY] = (0, hY.useState)(null), RY = (0, hY.useRef)(null), OY = (0, hY.useCallback)((YY => {
          RY.current = YY, IY(YY)
        }), []), gY = (0, hY.useCallback)((() => {
          FY(!1), OY(null)
        }), [OY]), vY = (0, hY.useCallback)((() => {
          FY(!0)
        }), []), uY = (0, hY.useCallback)(((YY, rY) => {
          OY((0, YO.I)(YY, rY, RY.current))
        }), [OY]);
        (0, hY.useLayoutEffect)((() => (rY(DY), (0, NR.v)(YY, DY), aY.g.vo(NR.n), () => {
          rY(!1), (0, NR.v)(YY, !1), aY.g.vo(NR.n)
        })), [DY, YY, rY]), (0, OI.g)("appManagerUpdated|activeInputDevice", (YY => {
          "gamepad" !== YY && gY()
        })), (0, OI.g)("appManagerUpdated|gameState", (YY => {
          "inGame" !== YY && gY()
        }));
        const sY = () => {
          (0, YF.p)() && gY()
        };
        return (0, OI.g)("appManagerUpdated|openEverythingMenuName", sY), (0, OI.g)("appManagerUpdated|openInGameMenuName", sY), {
          open: DY,
          picked: AY,
          pickedRef: RY,
          show: vY,
          aim: uY,
          close: gY
        }
      },
      DO = YY => {
        let {
          className: rY,
          slotCount: DY,
          picked: FY,
          slotLabel: AY,
          renderSlot: IY,
          centre: RY
        } = YY;
        const OY = Array.from({
          length: DY
        }, ((YY, rY) => rY));
        return (0, MY.jsx)("div", {
          className: JY()("EmoteWheelOverlay PadRadialWheel", rY),
          children: (0, MY.jsxs)("div", {
            className: "EmoteWheel",
            style: {
              width: 2 * YO.t + "rem",
              height: 2 * YO.t + "rem"
            },
            children: [(0, MY.jsxs)("svg", {
              className: "EmoteWheelSvg",
              viewBox: `0 0 ${YO.q} ${YO.q}`,
              children: [OY.map((YY => (0, MY.jsx)("path", {
                d: (0, YO.x)(YY, DY, YO.f, YO.i, YO.m),
                className: JY()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: YY === FY
                }),
                "aria-label": AY(YY)
              }, YY))), (0, MY.jsx)("circle", {
                className: "EmoteWheelOuterRing",
                cx: YO.f,
                cy: YO.f,
                r: YO.m
              }), (0, MY.jsx)("circle", {
                className: "EmoteWheelInnerRing",
                cx: YO.f,
                cy: YO.f,
                r: YO.i
              }), null !== FY && (0, MY.jsx)("path", {
                className: "EmoteWheelWedgeOutline",
                d: (0, YO.x)(FY, DY, YO.f, YO.i, YO.m)
              })]
            }), OY.map((YY => {
              const rY = (0, YO.E)(YY, DY);
              return (0, MY.jsx)("div", {
                className: JY()("PadRadialWheelSlot SmallTextBold", {
                  PadRadialWheelSlotPicked: YY === FY
                }),
                style: {
                  left: `calc(50% + ${YO.b*Math.cos(rY)}rem)`,
                  top: `calc(50% + ${YO.b*Math.sin(rY)}rem)`
                },
                "aria-hidden": !0,
                children: IY(YY)
              }, YY)
            })), (0, MY.jsx)("div", {
              className: "EmoteWheelHint SmallTextBold",
              children: RY
            })]
          })
        })
      },
      FO = rR.length,
      AO = () => {
        const {
          t: YY
        } = (0, AY.C)(), rY = rO("chat", SF.m), DY = (0, hY.useMemo)((() => rR.map((rY => YY(rY)))), [YY]);
        return (0, OI.g)(SF.k, (() => {
          rY.open || (0, LR.i)() || (0, tR.o)() || "inGame" !== gY.b.get("gameState") || (0, YF.p)() || !(0, mF.b)() || rY.show()
        })), (0, OI.g)(SF.g, (YY => {
          rY.open && rY.aim(YY, FO)
        })), (0, OI.g)(SF.i, (() => {
          var YY;
          if (!rY.open) return;
          const FY = rY.pickedRef.current;
          null !== FY ? DR.claim(performance.now()) && (rY.close(), null === (YY = (0, mF.b)()) || void 0 === YY || YY.sendLine(DY[FY])) : rY.close()
        })), (0, OI.g)(SF.h, rY.close), rY.open ? (0, MY.jsx)(DO, {
          className: "QuickChatWheel",
          slotCount: FO,
          picked: rY.picked,
          slotLabel: YY => DY[YY],
          renderSlot: YY => DY[YY],
          centre: null !== rY.picked ? DY[rY.picked] : YY("controller:quickChatPick")
        }) : null
      },
      IO = () => {
        const {
          t: YY
        } = (0, AY.C)(), rY = rO("actionButton", tR.r), [DY, FY] = (0, hY.useState)([]);
        if ((0, OI.g)(tR.l, (YY => {
            rY.open || (0, LR.i)() || (0, SF.d)() || "inGame" !== gY.b.get("gameState") || (0, YF.p)() || (FY(YY), rY.show())
          })), (0, OI.g)(tR.c, (YY => {
            rY.open && rY.aim(YY, DY.length)
          })), (0, OI.g)(tR.h, (() => {
            if (!rY.open) return;
            const YY = rY.pickedRef.current;
            rY.close(), null !== YY && aY.g.vo(tR.n, DY[YY])
          })), (0, OI.g)(tR.e, rY.close), !rY.open) return null;
        const IY = null !== rY.picked ? DY[rY.picked] : null;
        return (0, MY.jsx)(DO, {
          className: "ActionWheel",
          slotCount: DY.length,
          picked: rY.picked,
          slotLabel: rY => {
            const FY = DY[rY];
            return "reload" === FY.kind ? YY("controller:gameplayReload") : "customButton" === FY.kind ? FY.description || FY.icon : "touchButton" === FY.kind && "string" === typeof FY.label ? FY.label : ""
          },
          renderSlot: YY => (0, MY.jsx)(QI, {
            action: DY[YY]
          }),
          centre: IY ? (0, MY.jsx)(QI, {
            action: IY
          }) : YY("controller:actionWheelPick")
        })
      };
    var RO = DY(99);
    const OO = () => ((0, hY.useEffect)((() => {
        var YY, rY;
        const DY = (0, WY.j)(document.getElementById("root")),
          FY = (0, iY.f)(),
          AY = (() => {
            const YY = [aY.g.subscribe(kA.f, (() => {
                PA("blockBreak")
              })), aY.g.subscribe("damagedByOtherPlayer", (() => {
                PA("damage")
              })), aY.g.subscribe("yourAttackHit", (YY => {
                let {
                  hitSelf: rY
                } = YY;
                rY || PA("hit")
              }))],
              rY = RY.f.onActivePadChanged((YY => {
                YY && PA("connect")
              }));
            return () => {
              for (const rY of YY) aY.g.unsubscribe(rY);
              rY()
            }
          })(),
          IY = (() => {
            const YY = new DI({
              getVisitId: rI.d,
              peekVisitId: rI.peekVisitSessionId,
              readReportedVisitId: () => {
                const YY = YI.q.getItem(FI);
                return "string" === typeof YY ? YY : null
              },
              writeReportedVisitId: YY => {
                YI.q.setItem(FI, YY)
              },
              isPadActive: iY.i,
              getPadFamily: () => {
                var YY, rY;
                return null !== (YY = null === (rY = RY.f.getActivePad()) || void 0 === rY ? void 0 : rY.family) && void 0 !== YY ? YY : null
              },
              canReport: LA.g,
              getInputType: tA.d,
              gy: LA.i
            });
            let rY = 0,
              DY = null;
            const FY = AY => {
                null === DY && ("notReady" !== YY.check(AY) || null !== DY || rY >= 20 || (rY++, DY = setTimeout((() => {
                  DY = null, FY(!1)
                }), 3e3)))
              },
              AY = aY.g.subscribe("appManagerUpdated|activeInputDevice", (() => {
                FY(!0)
              })),
              IY = (0, rI.i)((() => {
                rY = 0, FY(!0)
              }));
            return () => {
              aY.g.unsubscribe(AY), IY(), null !== DY && clearTimeout(DY)
            }
          })(),
          OY = RY.f.onFrame(((YY, rY) => {
            const DY = (0, iY.n)(YY);
            uY.b.dispatch(YY, rY, DY)
          }));
        let vY = null !== (YY = null === (rY = RY.f.getActivePad()) || void 0 === rY ? void 0 : rY.family) && void 0 !== YY ? YY : null;
        const yY = RY.f.onActivePadChanged((YY => {
            var rY, DY;
            (uY.b.reset(), (0, iY.t)(), aY.g.vo(RY.c, YY), (null !== (rY = null === YY || void 0 === YY ? void 0 : YY.family) && void 0 !== rY ? rY : null) !== vY) && (vY = null !== (DY = null === YY || void 0 === YY ? void 0 : YY.family) && void 0 !== DY ? DY : null, aY.g.vo(sY.c, (0, sY.i)()));
            !YY && (0, iY.i)() && (0, iY.v)(gY.b.get("isTouchScreen") ? "touch" : "keyboardMouse")
          })),
          QY = () => {
            "visible" !== document.visibilityState && uY.b.clear()
          },
          oY = () => {
            uY.b.clear()
          };
        document.addEventListener("visibilitychange", QY), window.addEventListener("blur", oY), RY.f.start(), (0, UA.i)();
        const EY = null;
        return () => {
          DY(), FY(), AY(), IY(), OY(), yY(), document.removeEventListener("visibilitychange", QY), window.removeEventListener("blur", oY), RY.f.stop(), null === EY || void 0 === EY || EY()
        }
      }), []), (0, MY.jsxs)("div", {
        className: "ControllerRoot",
        children: [(0, MY.jsx)(lI, {}), (0, MY.jsx)(ZI, {}), (0, MY.jsx)(CI, {}), (0, MY.jsx)(lR, {}), (0, MY.jsx)(UR, {}), (0, MY.jsx)(AO, {}), (0, MY.jsx)(IO, {})]
      })),
      gO = () => RO.featureFlags.useControllerSupport ? (0, MY.jsx)(OO, {}) : null;
    var aO = DY(7629),
      vO = DY(8240);
    const uO = new Set(UA.h),
      sO = YY => `${vO.p}${(0,sY.m)()}/${YY}`,
      iO = YY => {
        if (!(0, vO.m)(YY)) return null;
        const [rY, DY] = YY.slice(vO.p.length).split("/");
        return (0, aO.e)(rY) && uO.has(DY) ? (0, UA.f)(rY, DY) : null
      };
    var yO = DY(8248);
    const QO = () => {
        const {
          t: YY
        } = (0, AY.C)(), rY = (0, iY.x)(), {
          gameState: DY,
          isUiHidden: FY
        } = (0, gY.j)(["gameState", "isUiHidden"]), {
          hideButtonHints: IY,
          sneakMode: RY
        } = (0, sY.s)(), [OY, aY] = (0, hY.useState)(yO.c);
        return (0, OI.g)(SI.t, aY), rY && !FY && "inGame" === DY && OY ? (0, MY.jsxs)("div", {
          className: "PadSneakChip SmallTextBold",
          children: [!IY && (0, MY.jsx)(iI, {
            glyph: (0, vY.i)("toggle" === RY ? "sneak" : "sneakToggle")
          }), (0, MY.jsx)("span", {
            children: YY("controller:gameplaySneaking")
          })]
        }) : null
      },
      oO = 12,
      WO = YY => {
        let {
          trigger: rY,
          className: DY,
          children: FY
        } = YY;
        const AY = (0, hY.useRef)(null);
        return (0, hY.useEffect)((() => {
          let YY = 0;
          const DY = cY(rY, "y"),
            FY = () => {
              YY = requestAnimationFrame(FY);
              const IY = AY.current;
              if (!IY || null === rY || void 0 === rY || !rY.isConnected) return;
              const {
                left: RY,
                top: OY
              } = function(YY, rY, DY) {
                let FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                  AY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                const IY = YY.left + YY.width / 2,
                  RY = Math.max(oO, DY.width - oO - rY.width),
                  OY = Math.min(Math.max(IY - rY.width / 2, oO), RY),
                  gY = DY.height - FY;
                let aY = 0,
                  vY = gY;
                if (AY) {
                  const YY = Math.max(0, AY.top),
                    FY = Math.min(gY, AY.bottom);
                  FY - YY >= Math.max(DY.height / 2, rY.height + 24) && (aY = YY, vY = FY)
                }
                const uY = YY.top + YY.height / 2 < (aY + vY) / 2 ? vY - oO - rY.height : aY + oO;
                return {
                  left: OY,
                  top: Math.max(oO, uY)
                }
              }(rY.getBoundingClientRect(), {
                width: IY.offsetWidth,
                height: IY.offsetHeight
              }, {
                width: window.innerWidth,
                height: window.innerHeight
              }, parseFloat(document.documentElement.style.getPropertyValue(HR)) || 0, null !== DY && void 0 !== DY && DY.isConnected ? DY.getBoundingClientRect() : null);
              IY.style.transform = `translate3d(${Math.round(RY)}px, ${Math.round(OY)}px, 0)`, IY.style.visibility = "visible"
            };
          return FY(), () => {
            cancelAnimationFrame(YY)
          }
        }), [rY]), (0, MY.jsx)("div", {
          ref: AY,
          className: DY,
          style: {
            position: "fixed",
            left: 0,
            top: 0,
            visibility: "hidden"
          },
          children: FY
        })
      };
    var EO = DY(1098),
      mO = DY(8250),
      VO = DY(1437),
      SO = DY(8253),
      lO = DY(8255);
    const TO = {
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
      eO = () => {
        const {
          t: YY
        } = (0, AY.C)(), rY = (0, iY.x)(), DY = (0, mO.b)(), FY = (0, KI.j)("_tasks"), IY = (0, KI.j)("_availableLeaderboards");
        if (!rY) return null;
        const RY = (YY => {
          let {
            hasShop: rY,
            hasTasksOrLeaderboards: DY,
            canInvite: FY
          } = YY;
          const AY = [];
          return rY && AY.push("shop"), DY && AY.push("tasks"), FY && AY.push("invite"), AY.push("leave"), AY
        })({
          hasShop: DY,
          hasTasksOrLeaderboards: !(!FY && !IY),
          canInvite: !!RO.featureFlags.canUseInviteLinks
        });
        return (0, MY.jsx)("div", {
          className: "PadLobbyShortcuts",
          children: RY.map((rY => {
            const {
              icon: DY,
              labelKey: FY
            } = TO[rY], AY = "leave" === rY ? VO.D : VO.f;
            return (0, MY.jsx)(AY, {
              className: "PadLobbyShortcut",
              onClick: () => {
                (YY => {
                  switch (YY) {
                    case "shop":
                      return aY.g.vo(lO.m), void gY.b.set({
                        openEverythingMenuName: tD.t.SHOP
                      });
                    case "tasks":
                      return void aY.g.vo("toggleMenu", "retentionFeatures");
                    case "invite":
                      return void aY.g.vo("toggleMenu", "inviteLink");
                    case "leave":
                      (0, SO.e)()
                  }
                })(rY)
              },
              children: (0, MY.jsxs)("div", {
                className: "PadLobbyShortcutInner",
                children: [(0, MY.jsx)(EO.e, {
                  name: DY
                }), (0, MY.jsx)("span", {
                  children: YY(FY)
                })]
              })
            }, rY)
          }))
        })
      };
    var NO = DY(1851);
    const BO = yY.w,
      cO = ["forward", "backward", "left", "right", "sprint"],
      KO = YY => YY.ctrlKey || YY.altKey || "Alt" === YY.key || "ArrowUp" === YY.key || "ArrowDown" === YY.key || "Tab" === YY.code || "/" === YY.key || "Slash" === YY.code;
    class HO {
      constructor() {
        this.armed = !1, this.swallowedKeys = new Set, this.previousHeld = new Array(yY.T).fill(!1), this.leftStickWasPressed = !1, this.rightStickWasPressed = !1, this.consumeNextFrame = !1, this.consumeAfterContinue = !1
      }
      setArmed(YY) {
        this.armed = YY
      }
      blocksGameplay() {
        return this.armed || this.consumeNextFrame
      }
      onKeyDown(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          DY = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return !this.armed || rY ? !YY.repeat && this.swallowedKeys.delete(YY.code) ? {
          swallow: !1,
          continues: !1
        } : {
          swallow: this.swallowedKeys.has(YY.code),
          continues: !1
        } : "Escape" === YY.key || YY.repeat && !this.swallowedKeys.has(YY.code) ? {
          swallow: !1,
          continues: !1
        } : DY ? {
          swallow: !1,
          continues: !0
        } : (this.swallowedKeys.add(YY.code), {
          swallow: !0,
          continues: (0, iY.h)(YY)
        })
      }
      onKeyUp(YY) {
        return this.swallowedKeys.delete(YY.code)
      }
      forgetKeys() {
        this.swallowedKeys.clear()
      }
      onPadFrame(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          FY = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const AY = (0, yY.o)(YY.values, this.previousHeld),
          IY = null === DY ? -1 : (0, yY.i)(DY),
          RY = IY >= 0 && AY[IY] && !this.previousHeld[IY],
          OY = AY.some(((YY, rY) => YY && !this.previousHeld[rY] && rY !== IY)),
          gY = Math.hypot(YY.leftStick.x, YY.leftStick.y) >= BO,
          aY = Math.hypot(YY.rightStick.x, YY.rightStick.y) >= BO,
          vY = gY && !this.leftStickWasPressed || aY && !this.rightStickWasPressed;
        this.previousHeld = AY, this.leftStickWasPressed = gY, this.rightStickWasPressed = aY;
        let uY = !1;
        this.consumeNextFrame && (this.consumeNextFrame = !1, uY = !0);
        const sY = !rY && RY && !FY,
          iY = !sY && this.armed && !rY && (OY || vY);
        return (sY || iY) && (this.consumeNextFrame = !0, this.consumeAfterContinue = iY, uY = !0), {
          continues: iY,
          back: sY,
          consumeHeld: uY
        }
      }
      consumeLeavesMoveStick() {
        return this.consumeAfterContinue
      }
    }
    const zO = new Set([...NO.m, ...NO.C]),
      ZO = YY => ((YY, rY, DY) => {
        const FY = Object.keys(rY).filter((FY => !DY.has(FY) && rY[FY].includes(YY)));
        return FY.length > 0 && FY.every((YY => cO.includes(YY)))
      })(YY, NO.u, zO),
      CO = (YY, rY, DY) => {
        const FY = new HO,
          AY = YY => {
            if (!YY.isTrusted) return;
            const {
              swallow: DY,
              continues: AY
            } = FY.onKeyDown(YY, !(0, iY.B)(YY) || (0, pA.g)() || (0, YF.p)(), ZO(YY.code));
            DY && (YY.stopImmediatePropagation(), KO(YY) && YY.preventDefault()), AY && ((0, iY.v)("keyboardMouse"), rY())
          },
          IY = YY => {
            YY.isTrusted && FY.onKeyUp(YY) && (YY.stopImmediatePropagation(), KO(YY) && YY.preventDefault())
          },
          OY = () => {
            FY.forgetKeys()
          };
        window.addEventListener("keydown", AY, !0), window.addEventListener("keyup", IY, !0), window.addEventListener("blur", OY);
        const gY = RY.f.onFrame((YY => {
            const AY = uY.b.getActiveConsumerName(),
              IY = DY(),
              RY = IY ? (0, vY.i)("menuBack") : null,
              OY = null !== AY && "gameplay" !== AY,
              {
                continues: gY,
                back: aY,
                consumeHeld: yY
              } = FY.onPadFrame(YY, OY, RY, (0, iY.m)(YY));
            if (yY) {
              const YY = (0, sY.i)().swapSticks ? "right" : "left";
              uY.b.consumeAllHeld(FY.consumeLeavesMoveStick() ? YY : null)
            }
            aY ? null === IY || void 0 === IY || IY() : gY && rY()
          })),
          aY = (0, pA.k)(`pressToContinue:${YY}`, (() => FY.blocksGameplay()));
        return {
          setArmed: YY => {
            FY.setArmed(YY)
          },
          dispose: () => {
            window.removeEventListener("keydown", AY, !0), window.removeEventListener("keyup", IY, !0), window.removeEventListener("blur", OY), gY(), aY()
          }
        }
      };
    var fO = DY(4580),
      jO = DY(2986),
      hO = DY(2722),
      dO = DY(7634);
    const JO = YY => {
        let {
          text: rY
        } = YY;
        return (0, MY.jsx)("div", {
          className: "ControllerSettingsHeading",
          children: rY
        })
      },
      MO = YY => {
        let {
          label: rY,
          hint: DY,
          options: FY,
          value: IY,
          onChange: RY
        } = YY;
        const {
          t: OY
        } = (0, AY.C)();
        return (0, MY.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, MY.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: [(0, MY.jsxs)("div", {
              className: "ControllerChoiceText",
              children: [(0, MY.jsx)("div", {
                className: "SliderText",
                children: rY
              }), DY && (0, MY.jsx)("div", {
                className: "ControllerSettingsHint",
                children: DY
              })]
            }), (0, MY.jsx)(hO.b, {
              options: FY.map((YY => ({
                label: "label" in YY ? YY.label : OY(YY.labelKey),
                value: YY.value
              }))),
              value: IY,
              onChange: YY => {
                RY(YY.value)
              }
            })]
          })
        })
      },
      wO = YY => {
        let {
          settingKey: rY,
          label: DY,
          range: FY,
          format: AY
        } = YY;
        const IY = (0, sY.s)();
        return (0, MY.jsx)(fO.j, {
          name: DY,
          min: FY.min,
          max: FY.max,
          step: FY.step,
          padStep: FY.step,
          initValue: IY[rY],
          format: AY,
          onChange: YY => {
            (0, sY.o)({
              [rY]: (0, dO.y)(YY, FY)
            })
          }
        })
      };
    var bO = DY(8263),
      XO = DY(8267);
    const qO = YY => YY instanceof DOMException && ("SecurityError" === YY.name || "NotAllowedError" === YY.name),
      pO = YY => {
        const [rY] = [...YY.controllers].sort(((YY, rY) => XO.v[YY] - XO.v[rY]));
        return XO.r[rY]
      },
      kO = YY => {
        (0, bO.e)().allowPhoneMotion().catch((rY => {
          YY && qO(rY) ? YY() : console.warn("Could not enable the motion sensor", rY)
        }))
      },
      GO = {
        waiting: "controller:settingsGyroPhoneWaiting",
        noSensor: "controller:settingsGyroPhoneNoSensor",
        on: "controller:settingsGyroPhoneOn",
        denied: "controller:settingsGyroPhoneDenied"
      },
      xO = YY => {
        let {
          status: rY
        } = YY;
        const {
          t: DY
        } = (0, AY.C)(), [FY, IY] = (0, hY.useState)(null), RY = `${rY.controllers.join(",")}|${rY.phoneMotion}`;
        (0, hY.useEffect)((() => {
          IY(null)
        }), [RY]);
        const OY = () => {
          (0, bO.e)().connectController().then((YY => {
            IY(YY > 0 ? "openFailed" : null)
          })).catch((YY => {
            qO(YY) ? IY("needsClick") : console.warn("Could not connect motion controller", YY)
          }))
        };
        if (rY.hidSupported) {
          let YY = DY("controller:settingsGyroConnectHint");
          return "needsClick" === FY ? YY = DY("controller:settingsGyroConnectNeedsClick") : "openFailed" === FY ? YY = DY("controller:settingsGyroOpenFailed") : rY.controllers.length > 0 && (YY = DY("controller:settingsGyroConnected", {
            name: pO(rY)
          })), (0, MY.jsx)("div", {
            className: "SettingBox ControllerChoiceSetting",
            children: (0, MY.jsxs)("div", {
              className: "ControllerChoiceRow",
              children: [(0, MY.jsx)("div", {
                className: "ControllerSettingsHint",
                children: YY
              }), (0, MY.jsx)(VO.f, {
                onClick: OY,
                children: DY("controller:settingsGyroConnect")
              })]
            })
          })
        }
        if ("needsPermission" === rY.phoneMotion) return (0, MY.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, MY.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: ["needsTap" === FY && (0, MY.jsx)("div", {
              className: "ControllerSettingsHint",
              children: DY("controller:settingsGyroAllowNeedsTap")
            }), (0, MY.jsx)(VO.f, {
              onClick: () => {
                kO((() => {
                  IY("needsTap")
                }))
              },
              children: DY("controller:settingsGyroAllowMotion")
            })]
          })
        });
        const gY = GO[rY.phoneMotion];
        return gY ? (0, MY.jsx)("div", {
          className: "ControllerSettingsHint",
          children: DY(gY)
        }) : null
      },
      nO = () => {
        const {
          t: YY
        } = (0, AY.C)(), rY = (0, sY.s)(), DY = (0, bO.h)(), FY = (0, iY.y)(), IY = !DY.hidSupported && DY.phoneSupported && !DY.padConnected, RY = (DY.hidSupported || DY.phoneSupported) && !IY, OY = (0, vY.i)("pause");
        return (0, MY.jsxs)(MY.Fragment, {
          children: [(0, MY.jsx)(JO, {
            text: YY("controller:settingsGyro")
          }), IY && (0, MY.jsx)("div", {
            className: "ControllerSettingsHint",
            children: YY("controller:settingsGyroPhoneNeedsController")
          }), !RY && !IY && (0, MY.jsx)("div", {
            className: "ControllerSettingsHint",
            children: YY(DY.hidBlocked || DY.phoneBlocked ? "controller:settingsGyroBlocked" : "controller:settingsGyroUnsupported")
          }), RY && (0, MY.jsx)(fO.c, {
            label: YY(DY.hidSupported ? "controller:settingsGyroToggle" : "controller:settingsGyroTogglePhone"),
            checked: rY.gyroAiming,
            onClick: YY => {
              var rY, DY;
              (0, sY.o)({
                gyroAiming: YY
              });
              const FY = null === (rY = null === (DY = navigator.userActivation) || void 0 === DY ? void 0 : DY.isActive) || void 0 === rY || rY;
              if (!YY || !FY) return;
              const AY = (0, bO.e)(),
                IY = AY.getStatus();
              IY.hidSupported ? AY.connectControllerIfNoneGranted().catch((YY => {
                console.warn("Motion controller picker unavailable", YY)
              })) : "needsPermission" === IY.phoneMotion && kO()
            },
            circleInfoText: YY(DY.hidSupported ? "controller:settingsGyroToggleInfo" : "controller:settingsGyroToggleInfoPhone")
          }), RY && DY.hidSupported && (0, MY.jsx)("div", {
            className: "ControllerSettingsHint",
            children: YY("controller:settingsGyroSteamHint")
          }), RY && rY.gyroAiming && (0, MY.jsxs)(MY.Fragment, {
            children: [(0, MY.jsx)(xO, {
              status: DY
            }), (0, MY.jsx)(wO, {
              settingKey: "gyroSensitivity",
              label: YY("controller:settingsGyroSensitivity"),
              range: dO.R,
              format: dO.J
            }), (0, MY.jsx)(MO, {
              label: YY("controller:settingsGyroActivation"),
              hint: "aiming" === rY.gyroActivation && (0, MY.jsx)(jO.e, {
                text: YY("controller:settingsGyroAimingHint", {
                  button: jO.h
                }),
                glyph: (0, vY.i)("use")
              }),
              options: dO.N,
              value: rY.gyroActivation,
              onChange: YY => {
                (0, sY.o)({
                  gyroActivation: YY
                })
              }
            }), "button" === rY.gyroActivation && (0, MY.jsx)(MO, {
              label: YY("controller:settingsGyroButton"),
              hint: YY("controller:settingsGyroButtonHint"),
              options: dO.u.filter((YY => YY !== OY || YY === rY.gyroButton)).map((YY => ({
                label: sI(FY, YY),
                value: YY
              }))),
              value: rY.gyroButton,
              onChange: YY => {
                (0, sY.o)({
                  gyroButton: YY
                })
              }
            })]
          })]
        })
      };
    var PO = DY(1966);
    const UO = () => {
      const {
        t: YY
      } = (0, AY.C)(), rY = (0, sY.s)(), DY = (0, iY.y)();
      return (0, MY.jsxs)(MY.Fragment, {
        children: [(0, MY.jsx)(JO, {
          text: YY("controller:settingsAccessibility")
        }), (0, MY.jsx)(fO.c, {
          label: YY("controller:settingsSwapConfirmBack"),
          checked: (0, vY.F)(rY.swapConfirmBack, DY),
          onClick: YY => {
            (0, sY.o)({
              swapConfirmBack: YY === (0, vY.F)(null, DY) ? null : YY
            }), PO.f.showMessage({
              translationKey: "controller:settingsSwapToast"
            })
          },
          circleInfoText: YY("controller:settingsSwapConfirmBackInfo")
        }), (0, MY.jsx)(MO, {
          label: YY("controller:settingsButtonRepeat"),
          hint: YY("controller:settingsButtonRepeatHint"),
          options: dO.q,
          value: rY.buttonRepeat,
          onChange: YY => {
            (0, sY.o)({
              buttonRepeat: YY
            })
          }
        }), (0, MY.jsx)(MO, {
          label: YY("controller:settingsTapHoldTime"),
          hint: YY("controller:settingsTapHoldTimeHint"),
          options: dO.wb,
          value: rY.tapHoldTime,
          onChange: YY => {
            (0, sY.o)({
              tapHoldTime: YY
            })
          }
        }), (0, MY.jsx)(MO, {
          label: YY("controller:settingsEmoteButton"),
          hint: YY("wheel" === rY.emoteButton ? "controller:settingsEmoteButtonWheelHint" : "controller:settingsEmoteButtonTapHoldHint"),
          options: dO.D,
          value: rY.emoteButton,
          onChange: YY => {
            (0, sY.o)({
              emoteButton: YY
            })
          }
        }), (0, MY.jsx)(MO, {
          label: YY("controller:settingsAttackMode"),
          hint: YY("toggle" === rY.attackMode ? "controller:settingsAttackToggleHint" : "controller:settingsAttackHoldHint"),
          options: dO.p,
          value: rY.attackMode,
          onChange: YY => {
            (0, sY.o)({
              attackMode: YY
            })
          }
        }), (0, MY.jsx)(fO.c, {
          label: YY("controller:settingsLargePointer"),
          checked: rY.largePointer,
          onClick: YY => {
            (0, sY.o)({
              largePointer: YY
            })
          },
          circleInfoText: YY("controller:settingsLargePointerInfo")
        })]
      })
    };
    var LO = DY(8269);
    const tO = new class {
        constructor(YY) {
          this.router = YY, this.current = null
        }
        claim(YY, rY) {
          const DY = this.current;
          DY && (this.current = null, DY.release(), DY.onTakenOver());
          const FY = this.router.register({
              ...YY,
              name: "capture"
            }),
            AY = {
              release: FY,
              onTakenOver: rY
            };
          return this.current = AY, () => {
            this.current === AY && (this.current = null), FY()
          }
        }
      }(uY.b),
      Yg = YY => {
        (0, hY.useEffect)((() => {
          if (!YY) return;
          const rY = YY();
          let DY = !1;
          const FY = () => {
              DY || (DY = !0, rY.onEnd())
            },
            AY = tO.claim({
              isActive: () => !DY,
              onFrame: YY => {
                rY.onFrame(YY, FY)
              }
            }, FY),
            IY = void 0 === rY.timeoutMs ? void 0 : window.setTimeout(FY, rY.timeoutMs),
            RY = YY => {
              "Escape" === YY.key && (YY.preventDefault(), YY.stopPropagation(), FY())
            };
          return window.addEventListener("keydown", RY, !0), () => {
            DY = !0, AY(), window.clearTimeout(IY), window.removeEventListener("keydown", RY, !0)
          }
        }), [YY])
      },
      rg = YY => {
        let {
          row: rY,
          capturing: DY,
          onCapture: FY,
          holdFillRef: IY,
          onRebind: RY,
          swapped: OY
        } = YY;
        const {
          t: gY
        } = (0, AY.C)();
        if ("fixed" === rY.kind) return (0, MY.jsx)("div", {
          className: "ControlRow PadControlRow PadControlRowFixed",
          children: (0, MY.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, MY.jsx)("div", {
              className: "ControlName",
              children: gY(rY.labelKey)
            }), (0, MY.jsx)("div", {
              className: "ControlBindingsContainer",
              children: (0, MY.jsx)("div", {
                className: "ControlBindingsList",
                children: (0, MY.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  children: (0, MY.jsx)(iI, {
                    glyph: "move" === rY.stick ? (0, vY.q)() : (0, vY.o)()
                  })
                })
              })
            })]
          })
        });
        const {
          action: aY
        } = rY, uY = (0, vY.i)(aY), sY = (0, vY.l)(aY), iY = uY !== sY && (0, vY.d)(aY, sY);
        return (0, MY.jsxs)("div", {
          className: JY()("ControlRow PadControlRow", {
            Capturing: DY
          }),
          children: [(0, MY.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, MY.jsx)("div", {
              className: "ControlName",
              children: gY(dO.i[aY])
            }), (0, MY.jsxs)("div", {
              className: "ControlBindingsContainer",
              children: [!DY && (0, MY.jsxs)("div", {
                className: "ControlBindingsList",
                children: [(0, MY.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    FY(aY)
                  },
                  children: (0, MY.jsx)(iI, {
                    glyph: uY
                  })
                }), iY && (0, MY.jsx)("div", {
                  className: "ControlBinding PadBindingReset",
                  title: gY("controller:settingsReset"),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    RY(aY, sY)
                  },
                  children: (0, MY.jsx)(EO.e, {
                    name: "arrows-rotate"
                  })
                })]
              }), DY && (0, MY.jsxs)("div", {
                className: "ControlBindingAddInput",
                children: [(0, MY.jsxs)("div", {
                  className: "PadCaptureBox",
                  children: [(0, MY.jsx)("span", {
                    children: gY("controller:settingsCapturePrompt")
                  }), (0, MY.jsx)("div", {
                    ref: IY,
                    className: "PadCaptureHoldFill"
                  })]
                }), (0, MY.jsx)("div", {
                  className: "ControlBindingAddCancel",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    FY(null)
                  },
                  children: "\xd7"
                })]
              }), DY && (0, MY.jsx)("div", {
                className: "PadCaptureHint",
                children: (0, MY.jsx)(jO.e, {
                  text: gY((0, vY.d)(aY, (0, vY.i)("menuBack")) ? "controller:settingsCaptureCancelOrBindHint" : "controller:settingsCaptureCancelHint", {
                    button: jO.h
                  }),
                  glyph: (0, vY.i)("menuBack")
                })
              })]
            })]
          }), OY.map((YY => (0, MY.jsx)("div", {
            className: "ControlRowWarning PadSwapNotice",
            children: (0, MY.jsx)(jO.e, {
              text: gY("controller:settingsSwapNotice", {
                action: gY(dO.i[YY]),
                button: jO.h
              }),
              glyph: (0, vY.i)(YY)
            })
          }, YY))), DY && (0, MY.jsx)("div", {
            className: "PadCaptureTimer",
            style: {
              animationDuration: `${dO.v}ms`
            }
          })]
        })
      },
      Dg = [],
      Fg = YY => {
        let {
          layoutSetting: rY
        } = YY;
        const {
          t: DY
        } = (0, AY.C)(), FY = (0, sY.s)();
        (0, iY.y)();
        const IY = (0, hY.useRef)(null),
          [RY, OY] = (0, hY.useState)(null),
          gY = (0, hY.useCallback)(((YY, rY) => {
            const DY = (0, sY.i)().bindings;
            (0, vY.B)(YY, rY);
            const FY = (0, vY.t)(DY, YY);
            OY(FY.length > 0 ? {
              action: YY,
              swapped: FY
            } : null)
          }), []),
          [aY, QY] = ((YY, rY) => {
            const [DY, FY] = (0, hY.useState)(null), AY = (0, hY.useMemo)((() => DY ? () => {
              const AY = (0, vY.i)("menuBack"),
                IY = new dO.e(AY, (0, vY.i)("menuConfirm"), (YY => (0, vY.d)(DY, YY)));
              return {
                onFrame: (FY, RY) => {
                  var OY;
                  const gY = FY.frame.timestampMs,
                    aY = IY.update({
                      ...FY,
                      isDown: YY => (0, yY.E)(FY.frame.values, YY)
                    }, gY);
                  null === (OY = YY.current) || void 0 === OY || OY.style.setProperty("width", 100 * IY.getBindHoldProgress(gY) + "%"), aY && ("bind" === aY.kind ? (uY.b.consumeButton(aY.button), rY(DY, aY.button)) : uY.b.consumeButton(AY), RY())
                },
                onEnd: () => {
                  FY(null)
                },
                timeoutMs: dO.v
              }
            } : null), [DY, YY, rY]);
            return Yg(AY), [DY, FY]
          })(IY, gY),
          oY = YY => {
            YY && OY(null), QY(YY)
          };
        (0, hY.useEffect)((() => {
          if (!RY) return;
          const YY = window.setTimeout((() => {
            OY(null)
          }), dO.ub);
          return () => {
            window.clearTimeout(YY)
          }
        }), [RY]);
        const WY = !FY.swapSticks && 0 === Object.keys(FY.bindings).length;
        return (0, MY.jsxs)("div", {
          className: "ControlsContainer PadControlsContainer",
          children: [(0, MY.jsx)("div", {
            className: "SliderText",
            children: DY("controller:settingsRemap")
          }), (0, MY.jsx)("div", {
            className: "ControllerSettingsHint",
            children: DY("controller:settingsRemapHint")
          }), (0, MY.jsx)(VO.D, {
            className: "ResetBindingsButton PadResetAllButton",
            disabled: WY,
            onClick: () => {
              oY(null), OY(null), (0, vY.C)()
            },
            children: DY("controller:settingsResetAll")
          }), rY, dO.mb.map(((YY, rY) => (0, MY.jsx)(LO.b, {
            title: DY(YY.titleKey),
            defaultOpen: 0 === rY,
            children: YY.rows.map((YY => (0, MY.jsx)(rg, {
              row: YY,
              capturing: "action" === YY.kind && YY.action === aY,
              onCapture: oY,
              holdFillRef: IY,
              onRebind: gY,
              swapped: "action" === YY.kind && (null === RY || void 0 === RY ? void 0 : RY.action) === YY.action ? RY.swapped : Dg
            }, "action" === YY.kind ? YY.action : YY.labelKey)))
          }, YY.titleKey)))]
        })
      },
      Ag = YY => {
        let {
          deadzone: rY,
          dotRef: DY,
          labelKey: FY
        } = YY;
        const {
          t: IY
        } = (0, AY.C)();
        return (0, MY.jsxs)("div", {
          className: "ControllerTesterStick",
          children: [(0, MY.jsxs)("div", {
            className: "ControllerTesterStickCircle",
            children: [(0, MY.jsx)("div", {
              className: "ControllerTesterDeadzone",
              style: {
                width: 100 * rY + "%",
                height: 100 * rY + "%"
              }
            }), (0, MY.jsx)("div", {
              ref: DY,
              className: "ControllerTesterDot"
            })]
          }), (0, MY.jsx)("div", {
            className: "ControllerTesterStickLabel",
            children: IY(FY)
          })]
        })
      },
      Ig = (YY, rY, DY, FY) => {
        var AY;
        YY && (YY.style.left = 50 + 50 * Math.max(-1, Math.min(1, rY.x)) + "%", YY.style.top = 50 + 50 * Math.max(-1, Math.min(1, rY.y)) + "%", null === (AY = YY.parentElement) || void 0 === AY || AY.classList.toggle("Active", FY || Math.hypot(rY.x, rY.y) > DY))
      },
      Rg = YY => {
        const rY = {
            deadzone: YY.moveDeadzone,
            labelKey: "controller:settingsActionMove"
          },
          DY = {
            deadzone: YY.lookDeadzone,
            labelKey: "controller:settingsActionLook"
          };
        return YY.swapSticks ? {
          left: DY,
          right: rY
        } : {
          left: rY,
          right: DY
        }
      },
      Og = () => {
        const {
          t: YY
        } = (0, AY.C)(), rY = (() => {
          const [YY, rY] = (0, hY.useState)((() => RY.f.getActivePad()));
          return (0, OI.g)(RY.c, (() => {
            rY(RY.f.getActivePad())
          })), YY
        })(), DY = Rg((0, sY.s)()), FY = (0, hY.useRef)(null), IY = (0, hY.useRef)(null), OY = (0, hY.useRef)([]), gY = (0, hY.useRef)(null), aY = (0, hY.useRef)(null), [iY, QY] = (YY => {
          const [rY, DY] = (0, hY.useState)(!1), FY = (0, hY.useMemo)((() => rY ? () => {
            const rY = (0, vY.i)("menuBack"),
              FY = new dO.g;
            return {
              onFrame: (DY, AY) => {
                var IY;
                const RY = FY.update({
                  pressed: DY.wasPressed(rY),
                  ja: DY.isHeld(rY)
                }, DY.frame.timestampMs);
                null === (IY = YY.current) || void 0 === IY || IY.style.setProperty("width", 100 * RY + "%"), RY >= 1 && (uY.b.consumeButton(rY), AY())
              },
              onEnd: () => {
                DY(!1)
              }
            }
          } : null), [rY, YY]);
          return Yg(FY), [rY, DY]
        })(IY);
        (0, hY.useEffect)((() => {
          const YY = YY => {
            for (const DY of yY.W) {
              const rY = (0, yY.i)(DY),
                FY = OY.current[rY];
              if (!FY) continue;
              const AY = YY.values[rY];
              FY.classList.toggle("Pressed", AY >= yY.w), (0, yY.H)(rY) && FY.style.setProperty("--trigger-fill", `${Math.round(100*AY)}%`)
            }
            const rY = Rg((0, sY.i)());
            Ig(gY.current, YY.leftStick, rY.left.deadzone, YY.values[(0, yY.i)("LS")] >= yY.w), Ig(aY.current, YY.rightStick, rY.right.deadzone, YY.values[(0, yY.i)("RS")] >= yY.w)
          };
          return rY || YY((0, yY.u)()), RY.f.onFrame(YY)
        }), [rY]), (0, hY.useEffect)((() => {
          rY || QY(!1)
        }), [rY, QY]), (0, hY.useEffect)((() => {
          var YY;
          iY && (null === (YY = FY.current) || void 0 === YY || YY.scrollIntoView({
            block: "nearest"
          }))
        }), [iY]);
        const oY = dO.fb.find((YY => YY.value === (null === rY || void 0 === rY ? void 0 : rY.family)));
        return (0, MY.jsxs)("div", {
          ref: FY,
          className: JY()("SettingBox ControllerTester", {
            Testing: iY
          }),
          children: [(0, MY.jsxs)("div", {
            className: "ControllerTesterHeader",
            children: [(0, MY.jsxs)("div", {
              className: "ControllerTesterInfo",
              children: [rY && (0, MY.jsx)("div", {
                children: YY("controller:settingsTesterFamily", {
                  family: oY ? YY(oY.labelKey) : rY.family
                })
              }), rY && (0, MY.jsx)("div", {
                className: "ControllerTesterPadId",
                children: rY.id
              }), !rY && (0, MY.jsx)("div", {
                children: YY("controller:settingsTesterNoPad")
              })]
            }), (rY || iY) && (0, MY.jsx)(VO.f, {
              className: "ControllerTesterToggle",
              onClick: () => {
                QY(!iY)
              },
              children: YY(iY ? "controller:settingsTesterStop" : "controller:settingsTesterStart")
            })]
          }), rY && !iY && (0, MY.jsx)("div", {
            className: "ControllerSettingsHint",
            children: YY("controller:settingsTesterHint")
          }), iY && (0, MY.jsxs)("div", {
            className: "ControllerTesterBanner",
            children: [(0, MY.jsx)(jO.e, {
              text: YY("controller:settingsTesterTesting", {
                button: jO.h
              }),
              glyph: (0, vY.i)("menuBack")
            }), (0, MY.jsx)("div", {
              ref: IY,
              className: "ControllerTesterExitFill"
            })]
          }), (0, MY.jsxs)("div", {
            className: "ControllerTesterBody",
            children: [(0, MY.jsx)(Ag, {
              deadzone: DY.left.deadzone,
              dotRef: gY,
              labelKey: DY.left.labelKey
            }), (0, MY.jsx)("div", {
              className: "ControllerTesterButtons",
              children: yY.W.map((YY => {
                const DY = (0, yY.i)(YY);
                return (0, MY.jsx)("div", {
                  ref: YY => {
                    OY.current[DY] = YY
                  },
                  className: (0, yY.H)(DY) ? "ControllerTesterButton ControllerTesterTrigger" : "ControllerTesterButton",
                  children: (0, MY.jsx)(iI, {
                    glyph: YY,
                    family: null === rY || void 0 === rY ? void 0 : rY.family
                  })
                }, YY)
              }))
            }), (0, MY.jsx)(Ag, {
              deadzone: DY.right.deadzone,
              dotRef: aY,
              labelKey: DY.right.labelKey
            })]
          })]
        })
      },
      gg = (0, hY.memo)((function() {
        const {
          t: YY
        } = (0, AY.C)(), rY = (0, sY.s)(), [DY, FY] = (0, hY.useState)(!1);
        return (0, hY.useEffect)((() => {
          if (!DY) return;
          const YY = window.setTimeout((() => {
            FY(!1)
          }), dO.ub);
          return () => {
            window.clearTimeout(YY)
          }
        }), [DY]), (0, MY.jsxs)("div", {
          className: "SettingsMenuRightInner ControllerCategory",
          children: [(0, MY.jsx)(JO, {
            text: YY("controller:settingsLook")
          }), (0, MY.jsx)(wO, {
            settingKey: "lookSensitivityX",
            label: YY("controller:settingsLookSensitivityX"),
            range: dO.qb,
            format: dO.M
          }), (0, MY.jsx)(wO, {
            settingKey: "lookSensitivityY",
            label: YY("controller:settingsLookSensitivityY"),
            range: dO.qb,
            format: dO.M
          }), (0, MY.jsx)(wO, {
            settingKey: "aimLookSensitivity",
            label: YY("controller:settingsAimLookSensitivity"),
            range: dO.l,
            format: dO.M
          }), (0, MY.jsx)(MO, {
            label: YY("controller:settingsLookCurve"),
            hint: YY("controller:settingsLookCurveHint"),
            options: dO.ab,
            value: rY.lookCurve,
            onChange: YY => {
              (0, sY.o)({
                lookCurve: YY
              })
            }
          }), (0, MY.jsx)(fO.c, {
            label: YY("controller:settingsInvertLookX"),
            checked: rY.invertLookX,
            onClick: YY => {
              (0, sY.o)({
                invertLookX: YY
              })
            }
          }), (0, MY.jsx)(fO.c, {
            label: YY("controller:settingsInvertLookY"),
            checked: rY.invertLookY,
            onClick: YY => {
              (0, sY.o)({
                invertLookY: YY
              })
            }
          }), (0, MY.jsx)(wO, {
            settingKey: "lookDeadzone",
            label: YY("controller:settingsLookDeadzone"),
            range: dO.C,
            format: dO.H
          }), (0, MY.jsx)(nO, {}), (0, MY.jsx)(JO, {
            text: YY("controller:settingsMovement")
          }), (0, MY.jsx)(wO, {
            settingKey: "moveDeadzone",
            label: YY("controller:settingsMoveDeadzone"),
            range: dO.C,
            format: dO.H
          }), (0, MY.jsx)(fO.c, {
            label: YY("controller:settingsAutoSprint"),
            checked: rY.autoSprint,
            onClick: YY => {
              (0, sY.o)({
                autoSprint: YY
              })
            },
            circleInfoText: YY("controller:settingsAutoSprintInfo")
          }), (0, MY.jsx)(MO, {
            label: YY("controller:settingsSneak"),
            options: dO.rb,
            value: rY.sneakMode,
            onChange: YY => {
              (0, sY.o)({
                sneakMode: YY
              })
            }
          }), (0, MY.jsx)(JO, {
            text: YY("controller:settingsButtons")
          }), (0, MY.jsx)(MO, {
            label: YY("controller:settingsPromptFamily"),
            options: dO.fb,
            value: rY.promptFamily,
            onChange: YY => {
              (0, sY.o)({
                promptFamily: YY
              })
            }
          }), (0, MY.jsx)(fO.c, {
            label: YY("controller:settingsHideButtonHints"),
            checked: rY.hideButtonHints,
            onClick: YY => {
              (0, sY.o)({
                hideButtonHints: YY
              })
            }
          }), (0, MY.jsx)(fO.c, {
            label: YY("controller:settingsVibration"),
            checked: rY.vibration,
            onClick: YY => {
              (0, sY.o)({
                vibration: YY
              }), YY && PA("preview")
            }
          }), (0, MY.jsx)(wO, {
            settingKey: "cursorSpeed",
            label: YY("controller:settingsCursorSpeed"),
            range: dO.B,
            format: dO.M
          }), (0, MY.jsx)(fO.c, {
            label: YY("controller:settingsCursorMagnetism"),
            checked: rY.cursorMagnetism,
            onClick: YY => {
              (0, sY.o)({
                cursorMagnetism: YY
              })
            }
          }), (0, MY.jsx)(fO.c, {
            label: YY("controller:settingsMenuBackToCategories"),
            checked: rY.menuBackToCategories,
            onClick: YY => {
              (0, sY.o)({
                menuBackToCategories: YY
              })
            }
          }), (0, MY.jsx)(Fg, {
            layoutSetting: (0, MY.jsxs)(MY.Fragment, {
              children: [vY.e.map((DY => (0, MY.jsx)(fO.c, {
                label: YY(dO.X[DY]),
                checked: (0, vY.y)(DY, rY),
                onClick: YY => {
                  FY(!(0, vY.H)(DY, YY))
                }
              }, DY))), DY && (0, MY.jsx)("div", {
                className: "PadLayoutRefusedNotice",
                role: "status",
                children: YY("controller:settingsLayoutRefusedToast")
              })]
            })
          }), (0, MY.jsx)(UO, {}), (0, MY.jsx)(JO, {
            text: YY("controller:settingsAlternatives")
          }), (0, MY.jsx)("div", {
            className: "ControllerSettingsHint",
            children: YY("controller:settingsAlternativesHint")
          }), (0, MY.jsx)(MO, {
            label: YY("controller:settingsMenuNavigation"),
            hint: YY("controller:settingsMenuNavigationHint"),
            options: dO.bb,
            value: rY.menuNavigation,
            onChange: YY => {
              (0, sY.o)({
                menuNavigation: YY
              })
            }
          }), (0, MY.jsx)(MO, {
            label: YY("controller:settingsInventoryNavigation"),
            hint: YY("controller:settingsInventoryNavigationHint"),
            options: dO.U,
            value: rY.inventoryNavigation,
            onChange: YY => {
              (0, sY.o)({
                inventoryNavigation: YY
              })
            }
          }), (0, MY.jsx)(MO, {
            label: YY("controller:settingsQuickChat"),
            hint: YY("controller:settingsQuickChatHint"),
            options: dO.jb,
            value: rY.quickChat,
            onChange: YY => {
              (0, sY.o)({
                quickChat: YY
              })
            }
          }), (0, MY.jsx)(MO, {
            label: YY("controller:settingsLeaderboardButton"),
            hint: YY("controller:settingsLeaderboardButtonHint"),
            options: dO.Z,
            value: rY.leaderboardButton,
            onChange: YY => {
              (0, sY.o)({
                leaderboardButton: YY
              })
            }
          }), (0, MY.jsx)(JO, {
            text: YY("controller:settingsTester")
          }), (0, MY.jsx)(Og, {})]
        })
      }));
    (0, AY.e)(FY);
    for (const ig of (0, IY.t)()) ig.connected ? RY.f.handleConnectionEvent(ig) : RY.f.handleDisconnectionEvent(ig);
    const ag = () => null !== RY.f.getActivePad(),
      vg = () => PD.getState(),
      ug = () => PD.isSteppingSlots(),
      sg = (YY, rY) => {
        const DY = qA.getFocused();
        qA.isActive() && DY && YY.contains(DY) && qA.setFocus(rY, {
          scroll: !1
        })
      }
  },
  7607: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => gY,
      g: () => aY
    });
    var FY = DY(1408),
      AY = DY(1403);
    const IY = {
        "054c": "playstation",
        "057e": "nintendo"
      },
      RY = "28de",
      OY = new Set(["1205"]),
      gY = (YY, rY) => {
        const DY = (0, FY.b)(YY);
        if ((null === DY || void 0 === DY ? void 0 : DY.vendor) === RY) return OY.has(DY.product) ? "steamdeck" : "xbox";
        if (DY && IY[DY.vendor]) return IY[DY.vendor];
        if ((0, AY.d)(YY)) return "nintendo";
        const gY = `${YY} ${null!==rY&&void 0!==rY?rY:""}`.toLowerCase();
        return /dualsense|dualshock|playstation|sony/.test(gY) ? "playstation" : /nintendo|switch|joy-con|pro controller/.test(gY) ? "nintendo" : /steam deck/.test(gY) ? "steamdeck" : "xbox"
      },
      aY = YY => {
        var rY;
        return (null === (rY = (0, FY.b)(YY)) || void 0 === rY ? void 0 : rY.vendor) === RY
      }
  },
  7642: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => aY,
      f: () => OY
    });
    var FY = DY(7598);
    const AY = ["capture", "keyboard", "wheel", "inventory", "cursor", "focus", "gameplay"],
      IY = new Set(["capture", "gameplay"]),
      RY = ["Up", "Down", "Left", "Right"],
      OY = YY => RY.includes(YY),
      gY = .25;
    const aY = new class {
      constructor() {
        this.consumers = new Map, this.activeName = null, this.ja = new Array(FY.T).fill(!1), this.previousHeld = new Array(FY.T).fill(!1), this.consumedButtons = new Array(FY.T).fill(!1), this.suppressedReleases = new Array(FY.T).fill(!1), this.wakeOwned = new Array(FY.T).fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.peek = null, this.lastFrame = (0, FY.u)()
      }
      register(YY) {
        return this.consumers.has(YY.name) && console.warn(`Controller consumer "${YY.name}" registered twice; the newer one replaces it.`), this.consumers.set(YY.name, YY), () => {
          var rY;
          this.consumers.get(YY.name) === YY && (this.activeName === YY.name ? (this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()) : (null === (rY = this.peek) || void 0 === rY ? void 0 : rY.over) === YY.name && (this.peek = null), this.consumers.delete(YY.name))
        }
      }
      getActiveConsumerName() {
        return this.activeName
      }
      isButtonHeld(YY) {
        return this.ja[(0, FY.i)(YY)]
      }
      getLastFrame() {
        return this.lastFrame
      }
      clear() {
        this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()
      }
      reset() {
        this.deactivateCurrent(), this.activeName = null, this.ja = new Array(FY.T).fill(!1), this.previousHeld = new Array(FY.T).fill(!1), this.consumedButtons.fill(!1), this.suppressedReleases.fill(!1), this.wakeOwned.fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.lastFrame = (0, FY.u)()
      }
      dispatch(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.lastFrame = YY, this.previousHeld = this.ja, this.ja = (0, FY.o)(YY.values, this.previousHeld);
        for (let IY = 0; IY < FY.T; IY++) this.suppressedReleases[IY] = !this.ja[IY] && this.consumedButtons[IY], this.ja[IY] || (this.consumedButtons[IY] = !1), this.wakeOwned[IY] && (this.ja[IY] ? (this.consumedButtons[IY] = !0, this.wakeOwned[IY] = !1) : YY.values[IY] < FY.S && (this.wakeOwned[IY] = !1));
        Math.hypot(YY.leftStick.x, YY.leftStick.y) < gY && (this.leftStickConsumed = !1), Math.hypot(YY.rightStick.x, YY.rightStick.y) < gY && (this.rightStickConsumed = !1);
        const AY = this.pickActive();
        if ((null === AY || void 0 === AY ? void 0 : AY.name) !== this.activeName) {
          var RY, OY, aY, vY, uY, sY;
          const YY = this.activeName,
            rY = {
              left: !this.leftStickConsumed,
              right: !this.rightStickConsumed
            },
            DY = null !== (RY = null === AY || void 0 === AY || null === (OY = AY.peek) || void 0 === OY ? void 0 : OY.call(AY)) && void 0 !== RY ? RY : null,
            IY = null === YY && !!DY && !(null === (aY = this.consumers.get(DY.over)) || void 0 === aY || !aY.onPeekFrame),
            gY = DY && (DY.over === YY || IY) ? DY : null,
            iY = null !== this.peek && this.peek.over === (null === AY || void 0 === AY ? void 0 : AY.name) ? this.peek : null;
          this.deactivateCurrent(null !== gY, null !== iY), this.activeName = null !== (vY = null === AY || void 0 === AY ? void 0 : AY.name) && void 0 !== vY ? vY : null, null === YY || this.handOffPending || this.consumeAllHeld();
          const yY = null === (uY = null !== gY && void 0 !== gY ? gY : iY) || void 0 === uY ? void 0 : uY.stick;
          "left" === yY && rY.left ? this.leftStickConsumed = !1 : "right" === yY && rY.right && (this.rightStickConsumed = !1), this.peek = gY, AY || null === YY ? AY && (null === (sY = this.idleResume) || void 0 === sY ? void 0 : sY.name) === AY.name && (this.idleResume.left && (this.leftStickConsumed = !1), this.idleResume.right && (this.rightStickConsumed = !1)) : this.idleResume = {
            name: YY,
            left: rY.left && this.leftStickConsumed,
            right: rY.right && this.rightStickConsumed
          }, AY && (this.idleResume = null);
          for (let AY = 0; AY < FY.T; AY++) this.previousHeld[AY] && !this.ja[AY] && (this.suppressedReleases[AY] = !0)
        }
        var iY, yY;
        (this.handOffPending = !1, AY) && (DY && !IY.has(AY.name) && this.consumeWakePress(AY), AY.onFrame(this.buildInput(YY, rY, DY)), this.peek && (null === (iY = this.consumers.get(this.peek.over)) || void 0 === iY || null === (yY = iY.onPeekFrame) || void 0 === yY || yY.call(iY, this.buildInput(YY, rY, !1, this.peek.stick))))
      }
      consumeWakePress(YY) {
        for (let AY = 0; AY < FY.T; AY++) {
          var rY, DY;
          const IY = FY.W[AY];
          (null !== (rY = null === (DY = YY.wakePressActs) || void 0 === DY ? void 0 : DY.call(YY, IY)) && void 0 !== rY ? rY : RY.includes(IY)) || (this.ja[AY] ? this.consumedButtons[AY] = !0 : this.lastFrame.values[AY] >= FY.O && (this.wakeOwned[AY] = !0))
        }
      }
      pickActive() {
        for (const YY of AY) {
          const rY = this.consumers.get(YY);
          if (rY && rY.isActive()) return rY
        }
        return null
      }
      deactivateCurrent() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        var DY, FY, AY, IY;
        this.activeName && (null === (DY = this.consumers.get(this.activeName)) || void 0 === DY || null === (FY = DY.onDeactivate) || void 0 === FY || FY.call(DY, YY));
        this.peek && !rY && (null === (AY = this.consumers.get(this.peek.over)) || void 0 === AY || null === (IY = AY.onDeactivate) || void 0 === IY || IY.call(AY, !1));
        this.peek = null
      }
      consumeAllHeld() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.idleResume = null;
        for (let AY = 0; AY < FY.T; AY++) this.ja[AY] && (this.consumedButtons[AY] = !0);
        const {
          leftStick: rY,
          rightStick: DY
        } = this.lastFrame;
        this.leftStickConsumed = "left" !== YY && (this.leftStickConsumed || Math.hypot(rY.x, rY.y) >= gY), this.rightStickConsumed = "right" !== YY && (this.rightStickConsumed || Math.hypot(DY.x, DY.y) >= gY)
      }
      handOffHeldInput() {
        this.handOffPending = !0
      }
      consumeButton(YY) {
        const rY = (0, FY.i)(YY);
        this.ja[rY] && (this.consumedButtons[rY] = !0)
      }
      buildInput(YY, rY, DY, AY) {
        const IY = this.ja,
          RY = this.previousHeld,
          OY = AY ? new Array(FY.T).fill(!0) : [...this.consumedButtons],
          gY = AY ? OY : [...this.suppressedReleases],
          aY = !this.leftStickConsumed && (!AY || "left" === AY),
          vY = !this.rightStickConsumed && (!AY || "right" === AY);
        return {
          frame: YY,
          dtMs: rY,
          isHeld: YY => {
            const rY = (0, FY.i)(YY);
            return IY[rY] && !OY[rY]
          },
          wasPressed: YY => {
            const rY = (0, FY.i)(YY);
            return IY[rY] && !RY[rY] && !OY[rY]
          },
          wasReleased: YY => {
            const rY = (0, FY.i)(YY);
            return !IY[rY] && RY[rY] && !gY[rY]
          },
          value: rY => {
            const DY = (0, FY.i)(rY);
            return OY[DY] ? 0 : YY.values[DY]
          },
          leftStick: aY ? YY.leftStick : {
            x: 0,
            y: 0
          },
          rightStick: vY ? YY.rightStick : {
            x: 0,
            y: 0
          },
          wokeDevice: DY
        }
      }
    }
  },
  7623: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => uY.f,
      e: () => uY.i,
      i: () => cY,
      m: () => KY,
      o: () => HY,
      s: () => zY
    });
    var FY = DY(61),
      AY = DY(25),
      IY = DY(1430),
      RY = DY(40),
      OY = DY(7629),
      gY = DY(7598),
      aY = DY(7618),
      vY = DY(7594),
      uY = DY(1874),
      sY = DY(7634);
    const iY = {
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
      yY = "controllerSettings",
      QY = ["bindings", "promptFamily", "hideButtonHints", "swapSticks", "swapConfirmBack", "leaderboardButton"],
      oY = ["auto", ...OY.b],
      WY = (YY, rY) => "string" === typeof rY && YY.includes(rY),
      EY = YY => rY => "number" === typeof rY && Number.isFinite(rY) ? (0, sY.y)(rY, YY) : void 0,
      mY = YY => "boolean" === typeof YY ? YY : void 0,
      VY = YY => rY => WY(YY, rY) ? rY : void 0,
      SY = {
        lookSensitivityX: EY(sY.qb),
        lookSensitivityY: EY(sY.qb),
        aimLookSensitivity: EY(sY.l),
        invertLookX: mY,
        invertLookY: mY,
        lookCurve: VY(gY.L),
        lookDeadzone: EY(sY.C),
        moveDeadzone: EY(sY.C),
        swapSticks: mY,
        autoSprint: mY,
        sneakMode: VY(["toggle", "hold"]),
        tapHoldTime: VY(["short", "medium", "long"]),
        attackMode: VY(["hold", "toggle"]),
        promptFamily: VY(oY),
        hideButtonHints: mY,
        vibration: mY,
        cursorSpeed: EY(sY.B),
        cursorMagnetism: mY,
        buttonRepeat: VY(gY.k),
        largePointer: mY,
        menuBackToCategories: mY,
        swapConfirmBack: mY,
        menuNavigation: VY(["hybrid", "focus", "cursor"]),
        inventoryNavigation: VY(["hybrid", "slot", "cursor"]),
        quickChat: VY(["wheel", "off"]),
        leaderboardButton: VY(["shop", "leaderboard"]),
        gyroAiming: mY,
        gyroSensitivity: EY(sY.R),
        gyroActivation: VY(["always", "aiming", "button"]),
        gyroButton: VY(gY.W),
        emoteButton: VY(["tapHold", "wheel"])
      },
      lY = [{
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
      TY = YY => {
        const rY = {};
        if ("object" !== typeof YY || null === YY) return rY;
        for (const [DY, FY] of Object.entries(YY)) Object.prototype.hasOwnProperty.call(aY.e, DY) && WY(gY.W, FY) && (rY[DY] = FY);
        return rY
      },
      eY = YY => {
        const rY = {};
        for (const DY of Object.keys(iY))("bindings" === DY ? Object.keys(YY.bindings).length > 0 : YY[DY] !== iY[DY]) && (rY[DY] = YY[DY]);
        0 !== Object.keys(rY).length ? RY.m.setItem(yY, rY) : RY.m.removeItem(yY)
      };
    let NY = (() => {
        const YY = RY.m.getItem(yY),
          rY = (YY => {
            const rY = "object" === typeof YY && null !== YY ? YY : {},
              DY = {
                ...iY,
                bindings: TY(rY.bindings)
              };
            for (const AY of Object.keys(SY)) {
              const YY = SY[AY](rY[AY]);
              void 0 !== YY && (DY[AY] = YY)
            }
            const FY = Object.keys(rY).filter((YY => !!Object.prototype.hasOwnProperty.call(iY, YY) && ("bindings" === YY ? "object" !== typeof rY.bindings || null === rY.bindings || Object.keys(rY.bindings).length !== Object.keys(DY.bindings).length : DY[YY] !== rY[YY])));
            return FY.length > 0 && console.warn(`Stored controller settings had invalid values, replaced with defaults: ${FY.join(", ")}`), DY
          })(YY);
        return null !== YY && void 0 !== YY && eY(rY), rY
      })(),
      BY = {
        ...NY,
        ...(() => {
          if ("undefined" === typeof window) return {};
          const YY = {},
            rY = new URLSearchParams(window.location.search);
          for (const {
              param: DY,
              key: FY
            }
            of lY) {
            const AY = SY[FY](rY.get(DY));
            void 0 !== AY && (YY[FY] = AY)
          }
          return YY
        })()
      };
    const cY = () => BY,
      KY = () => {
        var YY, rY;
        const DY = cY().promptFamily;
        return "auto" !== DY ? DY : null !== (YY = null === (rY = vY.f.getActivePad()) || void 0 === rY ? void 0 : rY.family) && void 0 !== YY ? YY : "xbox"
      },
      HY = YY => {
        const rY = BY;
        NY = {
          ...NY,
          ...YY
        }, eY(NY), BY = {
          ...BY,
          ...YY
        }, (YY => {
          AY.g.vo(uY.i, BY), QY.some((rY => YY[rY] !== BY[rY])) && AY.g.vo(uY.f, BY)
        })(rY)
      },
      zY = () => {
        const [YY, rY] = (0, FY.useState)(BY);
        return (0, IY.g)(uY.i, rY), YY
      }
  },
  8075: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => AY
    });
    const FY = new Set(["Alt", "AltGraph", "Meta", "OS", "AudioVolumeUp", "AudioVolumeDown", "AudioVolumeMute", "MediaPlayPause", "MediaPlay", "MediaPause", "MediaStop", "MediaTrackNext", "MediaTrackPrevious", "BrowserBack", "BrowserForward", "BrowserHome", "GoBack", "LaunchApplication1", "LaunchApplication2", "LaunchMail", "PrintScreen", "Unidentified"]),
      AY = YY => FY.has(YY)
  },
  7594: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => QY.e,
      f: () => mY
    });
    var FY = DY(7598),
      AY = DY(7607);
    const IY = .1,
      RY = .3;
    class OY {
      constructor() {
        this.deadzone = 0, this.anchor = null, this.steadyMs = 0, this.lastMs = null, this.returning = !0, this.anchorLearned = !1
      }
      observe(YY, rY) {
        const DY = null === this.lastMs ? 0 : Math.min(Math.max(0, rY - this.lastMs), 100);
        this.lastMs = rY;
        const FY = Math.hypot(YY.x, YY.y);
        if (FY >= RY) return this.anchor = null, void(this.returning = !0);
        FY >= IY || (this.returning = !1);
        const AY = this.anchor;
        if (!AY || Math.hypot(YY.x - AY.x, YY.y - AY.y) > .03) return this.anchorLearned && (this.returning = !1), this.anchor = {
          x: YY.x,
          y: YY.y
        }, this.steadyMs = 0, void(this.anchorLearned = !1);
        if (this.steadyMs += DY, this.steadyMs < 1e3) return;
        const OY = Math.max(FY, Math.hypot(AY.x, AY.y));
        OY < IY ? this.deadzone = 0 : this.returning && (this.deadzone = OY + .05, this.anchorLearned = !0)
      }
      getDeadzone() {
        return this.deadzone
      }
      apply(YY) {
        return Math.hypot(YY.x, YY.y) < this.deadzone ? {
          x: 0,
          y: 0
        } : YY
      }
    }
    const gY = (YY, rY) => {
        var DY, FY;
        return null !== (DY = YY && (null === (FY = Object.getOwnPropertyDescriptor(YY, rY)) || void 0 === FY ? void 0 : FY.get)) && void 0 !== DY ? DY : null
      },
      aY = YY => {
        const rY = YY.vendorName;
        return "string" === typeof rY ? rY : void 0
      },
      vY = ((YY, rY) => {
        const DY = gY(YY, "index"),
          FY = gY(YY, "id"),
          AY = gY(YY, "connected"),
          IY = gY(YY, "mapping"),
          RY = gY(YY, "buttons"),
          OY = gY(YY, "axes"),
          vY = gY(rY, "pressed"),
          uY = gY(rY, "value");
        return DY && FY && AY && IY && RY && OY && vY && uY ? YY => {
          const rY = RY.call(YY),
            gY = OY.call(YY),
            sY = {
              index: Number(DY.call(YY)),
              id: String(FY.call(YY)),
              connected: !0 === AY.call(YY),
              mapping: String(IY.call(YY)),
              buttons: [],
              axes: [],
              vendorName: aY(YY)
            };
          for (let DY = 0; DY < rY.length; DY++) sY.buttons.push({
            pressed: !0 === vY.call(rY[DY]),
            value: Number(uY.call(rY[DY]))
          });
          for (let DY = 0; DY < gY.length; DY++) sY.axes.push(Number(gY[DY]));
          return sY
        } : null
      })("undefined" === typeof Gamepad ? null : Gamepad.prototype, "undefined" === typeof GamepadButton ? null : GamepadButton.prototype),
      uY = "undefined" === typeof Navigator ? null : Navigator.prototype.getGamepads;
    var sY = DY(1399),
      iY = DY(1403);
    const yY = YY => ({
      pressed: YY,
      value: YY ? 1 : 0
    });
    var QY = DY(1874);
    const oY = RY,
      WY = YY => {
        const rY = new Array(FY.T).fill(0);
        for (let DY = 0; DY < FY.T && DY < YY.buttons.length; DY++) {
          const AY = YY.buttons[DY];
          rY[DY] = AY.pressed && !(0, FY.H)(DY) ? Math.max(AY.value, FY.w) : AY.value
        }
        return rY
      },
      EY = (YY, rY) => {
        var DY, FY;
        return {
          x: null !== (DY = YY.axes[rY]) && void 0 !== DY ? DY : 0,
          y: null !== (FY = YY.axes[rY + 1]) && void 0 !== FY ? FY : 0
        }
      };
    const mY = new class {
      constructor(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : vY;
        this.readGamepads = YY, this.requireTrustedPads = rY, this.nativeReader = DY, this.running = !1, this.listening = !1, this.rafId = 0, this.lastTimestampMs = 0, this.activeInfo = null, this.slots = [], this.trustedIndices = new Set, this.warnedNonStandardIds = new Set, this.loggedReadError = !1, this.frameListeners = new Set, this.connectionListeners = new Set, this.anyPadConnected = !1, this.connectedListeners = new Set, this.handleConnectionEvent = YY => {
          YY.isTrusted && this.trustedIndices.add(YY.gamepad.index), this.wake()
        }, this.handleDisconnectionEvent = YY => {
          this.trustedIndices.delete(YY.gamepad.index)
        }, this.Zu = YY => {
          if (this.rafId = 0, !this.running) return;
          const rY = 0 === this.lastTimestampMs ? 16 : Math.min(100, YY - this.lastTimestampMs);
          this.lastTimestampMs = YY;
          try {
            this.poll(YY, rY)
          } finally {
            this.anyPadConnected && (this.rafId = requestAnimationFrame(this.Zu))
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
      onFrame(YY) {
        return this.frameListeners.add(YY), () => {
          this.frameListeners.delete(YY)
        }
      }
      onActivePadChanged(YY) {
        return this.connectionListeners.add(YY), () => {
          this.connectionListeners.delete(YY)
        }
      }
      getActivePad() {
        return this.activeInfo
      }
      hasConnectedPad() {
        return this.anyPadConnected
      }
      onConnectedPadsChanged(YY) {
        return this.connectedListeners.add(YY), () => {
          this.connectedListeners.delete(YY)
        }
      }
      getActiveGamepad() {
        if (!this.activeInfo) return null;
        const YY = this.readPads()[this.activeInfo.index],
          rY = YY ? this.readPad(YY) : null;
        return rY && rY.id === this.activeInfo.id ? YY : null
      }
      poll(YY, rY) {
        var DY, AY;
        const IY = this.readPads();
        let RY = null,
          gY = !1;
        const aY = [],
          vY = Math.max(IY.length, this.slots.length);
        for (let mY = 0; mY < vY; mY++) {
          var uY;
          const rY = mY < IY.length ? IY[mY] : null,
            DY = rY ? this.readPad(rY) : null;
          if (!DY || !DY.connected || !this.isUsable(DY)) {
            this.slots[mY] = null;
            continue
          }
          let AY = this.slots[mY];
          AY && AY.id === DY.id || (AY = {
            id: DY.id,
            ja: [],
            leftSettled: !1,
            rightSettled: !1,
            leftRest: new OY,
            rightRest: new OY
          }, this.slots[mY] = AY);
          const vY = EY(DY, 0),
            sY = EY(DY, 2);
          !AY.leftSettled && Math.hypot(vY.x, vY.y) < oY && (AY.leftSettled = !0), !AY.rightSettled && Math.hypot(sY.x, sY.y) < oY && (AY.rightSettled = !0), AY.leftRest.observe(vY, YY), AY.rightRest.observe(sY, YY);
          const iY = WY(DY),
            yY = (0, FY.o)(iY, AY.ja),
            QY = AY.ja,
            VY = yY.map(((YY, rY) => YY && !QY[rY]));
          AY.ja = yY;
          const SY = {
            pad: DY,
            slot: AY,
            values: iY
          };
          mY === (null === (uY = this.activeInfo) || void 0 === uY ? void 0 : uY.index) && DY.id === this.activeInfo.id ? (RY = SY, gY = VY.includes(!0)) : VY.includes(!0) && aY.push({
            polled: SY,
            rose: VY
          })
        }
        const sY = this.slots.some((YY => null !== YY));
        if (sY !== this.anyPadConnected) {
          this.anyPadConnected = sY;
          for (const YY of this.connectedListeners) YY()
        }
        const iY = null !== (DY = null === (AY = RY) || void 0 === AY ? void 0 : AY.slot.ja) && void 0 !== DY ? DY : [],
          yY = gY ? void 0 : aY.find((YY => {
            let {
              rose: rY
            } = YY;
            return rY.some(((YY, rY) => YY && !iY[rY]))
          }));
        if (yY ? (RY = yY.polled, this.setActive(yY.polled.pad)) : this.activeInfo && !RY && this.setActive(null), !RY || !this.activeInfo) return;
        const QY = ((YY, rY) => {
          let {
            pad: DY,
            slot: AY,
            values: IY
          } = YY;
          const RY = (0, FY.u)(rY);
          return RY.values = IY, AY.leftSettled && (RY.leftStick = AY.leftRest.apply(EY(DY, 0))), AY.rightSettled && (RY.rightStick = AY.rightRest.apply(EY(DY, 2))), RY
        })(RY, YY);
        for (const FY of this.frameListeners) FY(QY, rY, this.activeInfo)
      }
      readPad(YY) {
        const rY = this.readSnapshot(YY);
        return rY && (0, iY.h)(rY) ? (YY => {
          const rY = rY => {
              var DY;
              return null !== (DY = YY.buttons[rY]) && void 0 !== DY ? DY : yY(!1)
            },
            DY = rY => {
              var DY;
              return null !== (DY = YY.axes[rY]) && void 0 !== DY ? DY : 0
            },
            FY = YY.axes.length > 9,
            AY = FY ? (YY => {
              const rY = 0 !== YY;
              return {
                up: rY && (YY >= -1 && YY < -.7 || YY >= .95 && YY <= 1),
                right: rY && YY >= -.75 && YY < -.1,
                down: rY && YY >= -.2 && YY < .45,
                left: rY && YY >= .4 && YY <= 1
              }
            })(DY(9)) : {
              up: DY(5) < -.5,
              down: DY(5) > .5,
              left: DY(4) < -.5,
              right: DY(4) > .5
            };
          return {
            ...YY,
            mapping: "standard",
            buttons: [rY(1), rY(2), rY(0), rY(3), rY(4), rY(5), rY(6), rY(7), rY(8), rY(9), rY(10), rY(11), yY(AY.up), yY(AY.down), yY(AY.left), yY(AY.right), rY(12)],
            axes: [DY(0), DY(1), DY(2), DY(FY ? 5 : 3)]
          }
        })(rY) : rY
      }
      readSnapshot(YY) {
        if (this.nativeReader) try {
          return this.nativeReader(YY)
        } catch {
          if (this.requireTrustedPads) return null
        }
        return this.requireTrustedPads ? null : (YY => {
          const rY = YY;
          return {
            index: rY.index,
            id: rY.id,
            connected: rY.connected,
            mapping: rY.mapping,
            buttons: Array.from(rY.buttons, (YY => ({
              pressed: YY.pressed,
              value: YY.value
            }))),
            axes: Array.from(rY.axes),
            vendorName: aY(YY)
          }
        })(YY)
      }
      isUsable(YY) {
        return !(0, sY.c)(YY.id) && ("standard" !== YY.mapping ? (this.warnedNonStandardIds.has(YY.id) || (this.warnedNonStandardIds.add(YY.id), console.warn(`Controller "${YY.id}" has no standard button mapping, so it is ignored.`)), !1) : !this.requireTrustedPads || this.trustedIndices.has(YY.index))
      }
      setActive(YY) {
        this.activeInfo = YY ? {
          index: YY.index,
          id: YY.id,
          family: (0, AY.d)(YY.id, YY.vendorName)
        } : null;
        for (const rY of this.connectionListeners) rY(this.activeInfo)
      }
      readPads() {
        try {
          return this.readGamepads()
        } catch (YY) {
          return this.loggedReadError || (this.loggedReadError = !0, console.warn("Reading gamepads failed; controller input is unavailable.", YY)), []
        }
      }
      wake() {
        this.running && 0 === this.rafId && (this.lastTimestampMs = 0, this.rafId = requestAnimationFrame(this.Zu))
      }
    }((() => uY ? uY.call(navigator) : []), !0);
    mY.listenForConnections()
  },
  8129: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => IY,
      h: () => RY,
      j: () => OY,
      l: () => AY
    });
    var FY = DY(8138);
    const AY = YY => {
        const rY = [];
        YY.holdingGun && rY.push({
          kind: "reload"
        }), YY.touchscreenActionButton && rY.push({
          kind: "touchButton",
          label: YY.touchscreenActionButton
        });
        for (const IY of null !== (DY = null === (AY = YY.customButtons) || void 0 === AY ? void 0 : AY.filter(FY.g)) && void 0 !== DY ? DY : []) {
          var DY, AY;
          rY.push({
            kind: "customButton",
            id: IY.id,
            icon: IY.icon,
            description: IY.description
          })
        }
        return rY
      },
      IY = YY => YY.length >= 2,
      RY = YY => "specialAction" !== YY.kind,
      OY = (YY, rY) => {
        if (null === YY || null === rY) return YY === rY;
        if (YY.kind !== rY.kind) return !1;
        switch (YY.kind) {
          case "reload":
            return !0;
          case "specialAction":
            return YY.action === rY.action;
          case "customButton":
            return YY.id === rY.id && YY.icon === rY.icon;
          case "touchButton":
            return YY.label === rY.label
        }
      }
  },
  8082: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => FY
    });
    const FY = {
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
  8126: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => vY,
      g: () => iY,
      i: () => uY,
      k: () => yY
    });
    var FY = DY(61),
      AY = DY(25),
      IY = DY(1430),
      RY = DY(8129),
      OY = DY(8146);
    let gY = null;
    const aY = () => gY,
      vY = YY => {
        (0, RY.j)(gY, YY) || (gY = YY, AY.g.vo(OY.h, gY))
      },
      uY = () => {
        const [YY, rY] = (0, FY.useState)(aY);
        return (0, IY.g)(OY.h, rY), YY
      };
    let sY = !1;
    const iY = YY => {
        YY !== sY && (sY = YY, AY.g.vo(OY.j, YY))
      },
      yY = () => {
        const [YY, rY] = (0, FY.useState)(sY);
        return (0, IY.g)(OY.j, rY), YY
      }
  },
  8159: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => RY,
      c: () => OY
    });
    var FY = DY(25),
      AY = DY(8146);
    let IY = !1;
    const RY = () => IY,
      OY = YY => {
        YY !== IY && (IY = YY, FY.g.vo(AY.n, IY))
      }
  },
  8153: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => OY,
      d: () => gY
    });
    var FY = DY(25),
      AY = DY(8146);
    let IY = null,
      RY = 0;
    const OY = () => IY,
      gY = YY => {
        null === YY && null === IY || (IY = null === YY ? null : {
          id: ++RY,
          holdMs: YY
        }, FY.g.vo(AY.o, IY))
      }
  },
  8146: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => IY,
      h: () => FY,
      j: () => AY,
      n: () => OY,
      o: () => gY,
      p: () => aY,
      t: () => RY
    });
    const FY = "controllerActionHintChanged",
      AY = "controllerActionWheelHintChanged",
      IY = "controllerOpenChat",
      RY = "controllerSneakToggledChanged",
      OY = "controllerAttackLatchedChanged",
      gY = "controllerDropStackHoldChanged",
      aY = "controllerPickBlockHintChanged"
  },
  8166: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => RY,
      g: () => OY
    });
    var FY = DY(25),
      AY = DY(8146);
    let IY = !1;
    const RY = () => IY,
      OY = YY => {
        YY !== IY && (IY = YY, FY.g.vo(AY.p, IY))
      }
  },
  8248: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => RY,
      g: () => OY
    });
    var FY = DY(25),
      AY = DY(8146);
    let IY = !1;
    const RY = () => IY,
      OY = YY => {
        YY !== IY && (IY = YY, FY.g.vo(AY.t, IY))
      }
  },
  8102: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => FY
    });
    class FY {
      constructor() {
        this.downAtMs = null
      }
      update(YY, rY, DY, FY) {
        if (YY) return this.downAtMs = DY, null;
        if (null === this.downAtMs) return null;
        const AY = DY - this.downAtMs >= FY;
        return rY ? AY ? (this.downAtMs = null, "hold") : null : (this.downAtMs = null, AY ? "hold" : "tap")
      }
      release() {
        this.downAtMs = null
      }
    }
  },
  7664: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => uY,
      f: () => sY,
      h: () => OY,
      i: () => mY,
      k: () => EY
    });
    var FY = DY(40),
      AY = DY(7629),
      IY = DY(7598);
    const RY = (() => {
        try {
          return DY(7667)
        } catch {
          return null
        }
      })(),
      OY = [...IY.W, "LeftStick", "RightStick"],
      gY = new Map,
      aY = {
        xbox: "xbox",
        playstation: "playstation",
        nintendo: "nintendo",
        steamdeck: "steamdeck",
        generic: "xbox"
      },
      vY = (new Set(Object.values(aY)), {
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
      uY = (YY, rY) => {
        var DY, FY;
        return null !== (DY = null === (FY = vY[aY[YY]]) || void 0 === FY ? void 0 : FY[rY]) && void 0 !== DY ? DY : 1
      },
      sY = (YY, rY) => {
        const DY = `./${aY[YY]}/${rY}.svg`;
        let FY = gY.get(DY);
        return void 0 === FY && (FY = RY ? RY(DY) : "", gY.set(DY, FY)), FY
      },
      iY = new Set,
      yY = [],
      QY = YY => {
        if (!iY.has(YY)) {
          iY.add(YY);
          for (const rY of OY) {
            const DY = sY(YY, rY);
            if (DY) {
              const YY = new Image;
              YY.crossOrigin = "anonymous", YY.src = DY, yY.push(YY)
            }
          }
        }
      },
      oY = "controllerGlyphFamily";
    let WY = null;
    const EY = YY => {
        YY !== WY && (WY = YY, FY.m.setItem(oY, YY), QY(YY))
      },
      mY = () => {
        const YY = FY.m.getItem(oY);
        (0, AY.e)(YY) && YY !== WY && (WY = YY, QY(YY))
      }
  },
  8263: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => JY,
      h: () => MY
    });
    var FY = DY(61),
      AY = DY(25),
      IY = DY(1430),
      RY = DY(7614),
      OY = DY(7594),
      gY = DY(7642),
      aY = DY(7623);
    const vY = {
        x: 0,
        y: 0,
        z: 0
      },
      uY = Math.PI / 180,
      sY = YY => Math.hypot(YY.x, YY.y, YY.z),
      iY = (YY, rY) => ({
        x: YY.x * rY,
        y: YY.y * rY,
        z: YY.z * rY
      }),
      yY = (YY, rY) => ({
        x: YY.x + rY.x,
        y: YY.y + rY.y,
        z: YY.z + rY.z
      }),
      QY = (YY, rY) => ({
        x: YY.x - rY.x,
        y: YY.y - rY.y,
        z: YY.z - rY.z
      }),
      oY = YY => {
        const rY = sY(YY);
        return 0 === rY ? vY : iY(YY, 1 / rY)
      },
      WY = YY => ({
        min: {
          ...YY
        },
        max: {
          ...YY
        }
      }),
      EY = (YY, rY) => ({
        min: {
          x: Math.min(YY.min.x, rY.x),
          y: Math.min(YY.min.y, rY.y),
          z: Math.min(YY.min.z, rY.z)
        },
        max: {
          x: Math.max(YY.max.x, rY.x),
          y: Math.max(YY.max.y, rY.y),
          z: Math.max(YY.max.z, rY.z)
        }
      }),
      mY = (YY, rY) => YY.max.x - YY.min.x <= rY && YY.max.y - YY.min.y <= rY && YY.max.z - YY.min.z <= rY;
    class VY {
      constructor() {
        this.bias = vY, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = vY, this.windowSec = 0
      }
      update(YY) {
        const rY = this.gyroRange ? EY(this.gyroRange, YY.gyro) : WY(YY.gyro),
          DY = YY.accel ? this.accelRange ? EY(this.accelRange, YY.accel) : WY(YY.accel) : null;
        if (!mY(rY, 1) || DY && !mY(DY, .01)) return void this.restartWindow(YY);
        if (this.gyroRange = rY, this.accelRange = DY, this.sum = yY(this.sum, iY(YY.gyro, YY.dtSec)), this.windowSec += YY.dtSec, this.windowSec < 1) return;
        const FY = iY(this.sum, 1 / this.windowSec);
        if (sY(FY) > 5) return;
        const AY = QY(FY, this.bias);
        let IY = 0;
        !this.calibrated || this.windowSec >= 3 ? IY = 1 : sY(AY) <= 1 && (IY = Math.min(1, YY.dtSec / 1)), this.bias = yY(this.bias, iY(AY, IY)), this.calibrated = this.calibrated || IY > 0
      }
      correct(YY) {
        return QY(YY, this.bias)
      }
      getBias() {
        return this.bias
      }
      isCalibrated() {
        return this.calibrated
      }
      reset() {
        this.bias = vY, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = vY, this.windowSec = 0
      }
      restartWindow(YY) {
        this.gyroRange = WY(YY.gyro), this.accelRange = YY.accel ? WY(YY.accel) : null, this.sum = vY, this.windowSec = 0
      }
    }
    class SY {
      constructor() {
        this.down = null
      }
      update(YY, rY, DY) {
        const FY = oY(iY(rY, -1));
        if (!this.down) return this.down = FY, FY;
        const AY = iY(YY, uY * DY),
          IY = this.down,
          RY = {
            x: IY.x - (AY.y * IY.z - AY.z * IY.y),
            y: IY.y - (AY.z * IY.x - AY.x * IY.z),
            z: IY.z - (AY.x * IY.y - AY.y * IY.x)
          },
          OY = 0 === sY(FY) ? 0 : Math.min(1, DY / .25);
        var gY, aY;
        return this.down = oY((aY = OY, yY(gY = RY, iY(QY(FY, gY), aY)))), this.down
      }
      reset() {
        this.down = null
      }
    }
    class lY {
      constructor() {
        this.entries = [], this.windowSec = 0
      }
      apply(YY, rY, DY) {
        const FY = Math.hypot(YY, rY),
          AY = Math.max(0, Math.min(1, (FY - 2) / 2)),
          IY = {
            yaw: YY * (1 - AY),
            pitch: rY * (1 - AY),
            dtSec: DY
          };
        for (this.entries.push(IY), this.windowSec += DY; this.entries.length > 1 && this.windowSec - this.entries[0].dtSec >= .125;) this.windowSec -= this.entries[0].dtSec, this.entries.shift();
        let RY = 0,
          OY = 0;
        for (const aY of this.entries) RY += aY.yaw * aY.dtSec, OY += aY.pitch * aY.dtSec;
        const gY = this.windowSec > 0 ? {
          yaw: RY / this.windowSec,
          pitch: OY / this.windowSec
        } : {
          yaw: IY.yaw,
          pitch: IY.pitch
        };
        return {
          yaw: YY * AY + gY.yaw,
          pitch: rY * AY + gY.pitch
        }
      }
      reset() {
        this.entries = [], this.windowSec = 0
      }
    }
    class TY {
      constructor() {
        this.calibrator = new VY, this.gravity = new SY, this.smoother = new lY
      }
      process(YY, rY, DY) {
        const FY = Math.max(0, Math.min(.05, rY));
        this.calibrator.update({
          ...YY,
          dtSec: FY
        });
        const AY = this.calibrator.correct(YY.gyro);
        let IY = AY.y;
        "player" === DY && YY.accel && (IY = ((YY, rY) => {
          const DY = YY.y * rY.y + YY.z * rY.z;
          return -Math.sign(DY) * Math.min(1.41 * Math.abs(DY), Math.hypot(YY.y, YY.z))
        })(AY, this.gravity.update(AY, YY.accel, FY)));
        const RY = this.smoother.apply(IY, AY.x, FY),
          OY = ((YY, rY) => {
            const DY = Math.hypot(YY, rY);
            if (DY >= 1) return {
              yaw: YY,
              pitch: rY
            };
            const FY = DY / 1;
            return {
              yaw: YY * FY,
              pitch: rY * FY
            }
          })(RY.yaw, RY.pitch);
        return {
          yawDeg: OY.yaw * FY,
          pitchDeg: OY.pitch * FY
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
    const eY = (YY, rY) => {
      var DY, FY, AY;
      const IY = rY * uY,
        RY = null !== (DY = YY.beta) && void 0 !== DY ? DY : 0,
        OY = null !== (FY = YY.gamma) && void 0 !== FY ? FY : 0;
      return {
        x: RY * Math.cos(IY) - OY * Math.sin(IY),
        y: RY * Math.sin(IY) + OY * Math.cos(IY),
        z: null !== (AY = YY.alpha) && void 0 !== AY ? AY : 0
      }
    };
    var NY = DY(8267);
    class BY {
      constructor(YY, rY, DY) {
        this.hid = YY, this.sink = rY, this.onControllersChanged = DY, this.controllers = new Map, this.running = !1, this.openedCount = 0, this.opening = new Set, this.disconnectedWhileOpening = new Set, this.switchPacketCounter = 0, this.onConnect = YY => {
          this.openController(YY.device).catch((YY => {
            console.warn("Could not open motion controller", YY)
          }))
        }, this.onDisconnect = YY => {
          this.opening.has(YY.device) && this.disconnectedWhileOpening.add(YY.device);
          const rY = this.controllers.get(YY.device);
          rY && (this.forget(rY), this.onControllersChanged())
        }
      }
      async start() {
        if (this.running) return;
        this.running = !0, this.hid.addEventListener("connect", this.onConnect), this.hid.addEventListener("disconnect", this.onDisconnect);
        const YY = await this.hid.getDevices();
        for (const rY of YY) await this.openController(rY).catch((YY => {
          console.warn("Could not open motion controller", YY)
        }))
      }
      stop() {
        this.running = !1, this.hid.removeEventListener("connect", this.onConnect), this.hid.removeEventListener("disconnect", this.onDisconnect);
        for (const YY of [...this.controllers.values()]) this.forget(YY);
        this.onControllersChanged()
      }
      async request() {
        const YY = await this.hid.requestDevice({
          filters: NY.n
        });
        let rY = 0;
        for (const DY of YY) await this.openController(DY).catch((YY => {
          console.warn("Could not open motion controller", YY), rY++
        }));
        return rY
      }
      async hasGrantedController() {
        return (await this.hid.getDevices()).some((YY => null !== (0, NY.g)(YY.vendorId, YY.productId)))
      }
      getConnectedKinds() {
        return [...this.controllers.values()].map((YY => YY.kind))
      }
      forget(YY) {
        YY.device.removeEventListener("inputreport", YY.onReport), this.controllers.get(YY.device) === YY && this.controllers.delete(YY.device)
      }
      async openController(YY) {
        const rY = (0, NY.g)(YY.vendorId, YY.productId);
        if (!rY || !this.running || this.controllers.has(YY) || this.opening.has(YY)) return;
        this.opening.add(YY);
        let DY = !1;
        try {
          YY.opened || await YY.open()
        } finally {
          this.opening.delete(YY), DY = this.disconnectedWhileOpening.delete(YY)
        }
        if (DY) return void YY.close().catch((YY => {
          console.debug("Could not close an unplugged motion controller", YY)
        }));
        if (!this.running) return;
        const FY = {
          device: YY,
          kind: rY,
          lastClock: null,
          lastEventMs: null,
          lastReadingMs: -1 / 0,
          openedOrder: this.openedCount++,
          onReport: YY => {
            this.onReport(FY, YY)
          }
        };
        this.controllers.set(YY, FY), YY.addEventListener("inputreport", FY.onReport), this.onControllersChanged();
        try {
          await this.enableMotion(FY)
        } catch (AY) {
          console.warn(`Could not turn on motion for ${rY}`, AY), this.controllers.get(YY) === FY && (this.forget(FY), this.onControllersChanged())
        }
      }
      async enableMotion(YY) {
        let {
          device: rY,
          kind: DY
        } = YY;
        if ((0, NY.k)(DY))
          for (const FY of NY.F[DY]) await rY.receiveFeatureReport(FY).catch((YY => {
            console.debug(`Motion controller feature report ${FY} unavailable`, YY)
          }));
        else
          for (let FY = 0; FY < 2; FY++)
            for (const {
                subcommand: YY,
                args: DY
              }
              of NY.J) await rY.sendReport(NY.L, (0, NY.e)(this.switchPacketCounter++, YY, DY)), await new Promise((YY => {
              setTimeout(YY, 60)
            }))
      }
      onReport(YY, rY) {
        const DY = (0, NY.z)(YY.kind, rY.reportId, rY.data, YY.device.productId);
        if (!DY) return;
        const FY = null === YY.lastEventMs ? 0 : (rY.timeStamp - YY.lastEventMs) / 1e3;
        YY.lastEventMs = rY.timeStamp;
        let AY = DY.dtSec;
        if (null !== AY && FY > 0 && (AY = Math.max(.001, Math.min(.017, FY / DY.readings.length))), null === AY && null !== DY.sensorClock && (0, NY.k)(YY.kind)) {
          const rY = (0, NY.B)(YY.kind, YY.lastClock, DY.sensorClock);
          YY.lastClock = DY.sensorClock, AY = 0 === rY ? null : rY
        }
        if (YY.lastReadingMs = rY.timeStamp, this.isPreferred(YY, rY.timeStamp))
          for (const RY of DY.readings) {
            var IY;
            this.sink(RY, null !== (IY = AY) && void 0 !== IY ? IY : FY, `hid${YY.openedOrder}`)
          }
      }
      isPreferred(YY, rY) {
        const DY = YY => 1e6 * NY.v[YY.kind] + YY.openedOrder;
        for (const FY of this.controllers.values())
          if (FY !== YY && rY - FY.lastReadingMs < 500 && DY(FY) < DY(YY)) return !1;
        return !0
      }
    }
    var cY = DY(99);
    const KY = () => DeviceMotionEvent,
      HY = () => "undefined" !== typeof window && "undefined" !== typeof DeviceMotionEvent && window.isSecureContext && (0, cY.isMobile)(),
      zY = () => {
        var YY;
        const rY = null === (YY = window.screen.orientation) || void 0 === YY ? void 0 : YY.angle;
        return "number" === typeof rY ? rY : "number" === typeof window.orientation ? window.orientation : 0
      };
    class ZY {
      constructor(YY, rY) {
        this.sink = YY, this.onStateChanged = rY, this.state = "off", this.lastEventMs = null, this.noSensorTimer = null, this.wanted = !1, this.permissionRequest = null, this.granted = !1, this.onGesture = () => {
          this.requestPermission().catch((YY => {
            console.warn("Could not enable the motion sensor", YY)
          }))
        }, this.onMotion = YY => {
          const rY = YY.rotationRate;
          if (!rY || null === rY.alpha && null === rY.beta && null === rY.gamma) return;
          const DY = null === this.lastEventMs ? 0 : (YY.timeStamp - this.lastEventMs) / 1e3;
          this.lastEventMs = YY.timeStamp, this.clearNoSensorTimer(), this.setState("on"), this.sink({
            gyro: eY(rY, zY()),
            accel: null
          }, DY, "phone")
        }
      }
      getState() {
        return this.state
      }
      start() {
        if (this.wanted = !0, "off" === this.state) return "function" !== typeof KY().requestPermission || this.granted ? void this.listen() : (this.setState("needsPermission"), void this.armGestureRequest())
      }
      requestPermission() {
        return this.permissionRequest || (this.permissionRequest = this.askPermission().finally((() => {
          this.permissionRequest = null
        }))), this.permissionRequest
      }
      async askPermission() {
        const YY = KY().requestPermission;
        if (!this.wanted) return;
        if ("function" !== typeof YY) return void this.listen();
        let rY;
        this.disarmGestureRequest();
        try {
          rY = await YY.call(DeviceMotionEvent)
        } catch (DY) {
          throw this.wanted && "needsPermission" === this.state && this.armGestureRequest(), DY
        }
        this.wanted && ("granted" === rY ? (this.granted = !0, this.listen()) : this.setState("denied"))
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
      setState(YY) {
        this.state !== YY && (this.state = YY, this.onStateChanged())
      }
    }
    const CY = "controllerGyroStatusChanged",
      fY = {
        Tl: 0,
        Bl: 0
      },
      jY = YY => {
        var rY, DY;
        return "undefined" === typeof document || (null === (rY = null === (DY = document.featurePolicy) || void 0 === DY ? void 0 : DY.allowsFeature(YY)) || void 0 === rY || rY)
      };
    class hY {
      constructor() {
        this.processor = new TY, this.hid = void 0, this.hidBlocked = void 0, this.phone = void 0, this.phoneBlocked = void 0, this.source = null, this.pendingYawDeg = 0, this.pendingPitchDeg = 0, this.lastDrainMs = -1 / 0, this.lastHidReadingMs = -1 / 0, this.running = !1, this.phoneRunning = !1, this.syncWithSettings = YY => {
          const rY = YY.gyroAiming && OY.f.hasConnectedPad();
          var DY, FY;
          rY !== this.phoneRunning && (this.phoneRunning = rY, rY ? null === (DY = this.phone) || void 0 === DY || DY.start() : null === (FY = this.phone) || void 0 === FY || FY.stop());
          if (YY.gyroAiming !== this.running) {
            var AY, IY;
            if (this.running = YY.gyroAiming, this.running) null === (AY = this.hid) || void 0 === AY || AY.start().catch((YY => {
              console.warn("Could not open motion controllers", YY)
            }));
            else null === (IY = this.hid) || void 0 === IY || IY.stop(), this.processor.reset(), this.source = null, this.discardPending();
            this.publishStatus()
          }
        }, this.publishStatus = () => {
          AY.g.vo(CY, this.getStatus())
        };
        const YY = (() => {
            var YY;
            return "undefined" !== typeof navigator && window.isSecureContext && null !== (YY = navigator.hid) && void 0 !== YY ? YY : null
          })(),
          rY = jY("hid");
        this.hidBlocked = null !== YY && !rY, this.hid = YY && rY ? new BY(YY, ((YY, rY, DY) => {
          this.lastHidReadingMs = performance.now(), this.feed(YY, rY, "player", DY)
        }), this.publishStatus) : null;
        const DY = jY("accelerometer") && jY("gyroscope");
        this.phoneBlocked = HY() && !DY, this.phone = HY() && DY ? new ZY(((YY, rY, DY) => {
          performance.now() - this.lastHidReadingMs >= 500 && this.feed(YY, rY, "local", DY)
        }), this.publishStatus) : null, AY.g.subscribe(aY.e, this.syncWithSettings), OY.f.onConnectedPadsChanged((() => {
          this.syncWithSettings((0, aY.i)()), this.publishStatus()
        })), this.syncWithSettings((0, aY.i)())
      }
      isSupported() {
        return null !== this.hid || null !== this.phone
      }
      getStatus() {
        var YY, rY, DY, FY;
        return {
          hidSupported: null !== this.hid,
          hidBlocked: this.hidBlocked,
          phoneSupported: null !== this.phone,
          phoneBlocked: this.phoneBlocked,
          controllers: null !== (YY = null === (rY = this.hid) || void 0 === rY ? void 0 : rY.getConnectedKinds()) && void 0 !== YY ? YY : [],
          phoneMotion: null !== (DY = null === (FY = this.phone) || void 0 === FY ? void 0 : FY.getState()) && void 0 !== DY ? DY : "off",
          padConnected: OY.f.hasConnectedPad()
        }
      }
      async connectController() {
        return this.hid ? this.hid.request() : 0
      }
      async connectControllerIfNoneGranted() {
        this.hid && !await this.hid.hasGrantedController() && await this.hid.request()
      }
      async allowPhoneMotion() {
        var YY;
        await (null === (YY = this.phone) || void 0 === YY ? void 0 : YY.requestPermission())
      }
      drainLookDelta() {
        const YY = performance.now();
        YY - this.lastDrainMs > 500 && this.discardPending(), this.lastDrainMs = YY;
        const rY = {
          yawDeg: this.pendingYawDeg,
          pitchDeg: this.pendingPitchDeg
        };
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0;
        const DY = (0, aY.i)();
        return DY.gyroAiming && (YY => {
          let {
            activation: rY,
            isHeld: DY,
            useButton: FY,
            gyroButton: AY
          } = YY;
          return "always" === rY || DY("aiming" === rY ? FY : AY)
        })({
          activation: DY.gyroActivation,
          isHeld: YY => gY.b.isButtonHeld(YY),
          useButton: (0, RY.i)("use"),
          gyroButton: DY.gyroButton
        }) ? ((YY, rY) => ({
          Tl: -YY.yawDeg * rY * uY,
          Bl: -YY.pitchDeg * rY * uY
        }))(rY, DY.gyroSensitivity) : fY
      }
      discardPending() {
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0
      }
      injectMotion(YY, rY) {
        this.feed(YY, rY, "local", "injected")
      }
      getCalibration() {
        return this.processor.getCalibration()
      }
      feed(YY, rY, DY, FY) {
        this.source !== FY && (this.processor.reset(), this.source = FY);
        const AY = this.processor.process(YY, rY, DY);
        this.pendingYawDeg += AY.yawDeg, this.pendingPitchDeg += AY.pitchDeg
      }
    }
    let dY = null;
    const JY = () => (dY || (dY = new hY), dY),
      MY = () => {
        const [YY, rY] = (0, FY.useState)((() => JY().getStatus()));
        return (0, IY.g)(CY, rY), (0, FY.useEffect)((() => {
          rY(JY().getStatus())
        }), []), YY
      }
  },
  8267: (YY, rY, DY) => {
    DY.d(rY, {
      B: () => oY,
      F: () => TY,
      J: () => lY,
      L: () => mY,
      e: () => SY,
      g: () => gY,
      k: () => FY,
      n: () => OY,
      r: () => aY,
      v: () => vY,
      z: () => EY
    });
    const FY = YY => "dualShock4" === YY || "dualSense" === YY,
      AY = 1356,
      IY = 1406,
      RY = [{
        vendorId: AY,
        productId: 1476,
        kind: "dualShock4"
      }, {
        vendorId: AY,
        productId: 2508,
        kind: "dualShock4"
      }, {
        vendorId: AY,
        productId: 2976,
        kind: "dualShock4"
      }, {
        vendorId: AY,
        productId: 3302,
        kind: "dualSense"
      }, {
        vendorId: AY,
        productId: 3570,
        kind: "dualSense"
      }, {
        vendorId: IY,
        productId: 8201,
        kind: "switchPro"
      }, {
        vendorId: IY,
        productId: 8198,
        kind: "joyConLeft"
      }, {
        vendorId: IY,
        productId: 8199,
        kind: "joyConRight"
      }],
      OY = RY.map((YY => {
        let {
          vendorId: rY,
          productId: DY
        } = YY;
        return {
          vendorId: rY,
          productId: DY
        }
      })),
      gY = (YY, rY) => {
        var DY, FY;
        return null !== (DY = null === (FY = RY.find((DY => DY.vendorId === YY && DY.productId === rY))) || void 0 === FY ? void 0 : FY.kind) && void 0 !== DY ? DY : null
      },
      aY = {
        dualShock4: "DualShock 4",
        dualSense: "DualSense",
        switchPro: "Switch Pro Controller",
        joyConLeft: "Joy-Con (L)",
        joyConRight: "Joy-Con (R)"
      },
      vY = {
        dualSense: 0,
        dualShock4: 0,
        switchPro: 0,
        joyConRight: 1,
        joyConLeft: 2
      },
      uY = 2e3 / 32767,
      sY = 1 / 8192,
      iY = 936 / 13371,
      yY = (YY, rY, DY) => ({
        x: YY.getInt16(rY, !0) * DY,
        y: YY.getInt16(rY + 2, !0) * DY,
        z: YY.getInt16(rY + 4, !0) * DY
      }),
      QY = YY => 0 === YY.x && 0 === YY.y && 0 === YY.z,
      oY = (YY, rY, DY) => null === rY ? null : "dualShock4" === YY ? 16 * (DY - rY & 65535) / 3 / 1e6 : (DY - rY >>> 0) / 3 / 1e6,
      WY = (YY, rY) => "joyConRight" === rY ? {
        x: YY.y,
        y: -YY.z,
        z: -YY.x
      } : {
        x: -YY.y,
        y: YY.z,
        z: -YY.x
      },
      EY = (YY, rY, DY, AY) => FY(YY) ? ((YY, rY, DY, FY) => {
        const AY = ((YY, rY, DY) => "dualShock4" === YY ? 1 === rY && DY >= 63 ? 0 : 17 === rY && DY >= 65 ? 2 : null : 1 === rY && DY >= 62 ? 0 : 49 === rY && DY >= 63 ? 1 : null)(YY, rY, DY.byteLength);
        if (null === AY) return null;
        if (2976 === FY && 1 === rY && 0 !== (4 & DY.getUint8(30))) return null;
        const IY = AY + ("dualShock4" === YY ? 12 : 15),
          RY = yY(DY, IY, uY),
          OY = yY(DY, IY + 6, sY);
        return QY(RY) && QY(OY) ? null : {
          readings: [{
            gyro: RY,
            accel: OY
          }],
          dtSec: null,
          sensorClock: "dualShock4" === YY ? DY.getUint16(AY + 9, !0) : DY.getUint32(AY + 27, !0)
        }
      })(YY, rY, DY, AY) : ((YY, rY, DY) => {
        if (48 !== rY && 49 !== rY || DY.byteLength < 48) return null;
        const FY = [];
        for (let AY = 0; AY < 3; AY++) {
          const rY = yY(DY, 12 + 12 * AY, 244e-6),
            IY = yY(DY, 18 + 12 * AY, iY);
          if (QY(IY) && QY(rY)) return null;
          FY.push({
            gyro: WY(IY, YY),
            accel: WY(rY, YY)
          })
        }
        return {
          readings: FY,
          dtSec: .005,
          sensorClock: null
        }
      })(YY, rY, DY),
      mY = 1,
      VY = [0, 1, 64, 64, 0, 1, 64, 64],
      SY = (YY, rY, DY) => new Uint8Array([15 & YY, ...VY, rY, ...DY]),
      lY = [{
        subcommand: 64,
        args: [1]
      }, {
        subcommand: 3,
        args: [48]
      }],
      TY = {
        dualShock4: [2, 5],
        dualSense: [5]
      }
  },
  7647: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => KY,
      f: () => hY,
      h: () => WY,
      i: () => iY.f,
      m: () => ZY,
      n: () => zY,
      p: () => EY,
      t: () => CY,
      v: () => iY.l,
      x: () => iY.p,
      y: () => dY,
      B: () => iY.t,
      E: () => eY
    });
    var FY = DY(61),
      AY = DY(19),
      IY = DY(25),
      RY = DY(1430),
      OY = DY(1287),
      gY = DY(7623),
      aY = DY(7655),
      vY = DY(7607),
      uY = DY(7594),
      sY = DY(7664),
      iY = DY(1384),
      yY = DY(7598),
      QY = DY(8075),
      oY = DY(3930);
    const WY = YY => !YY.repeat && !(0, QY.d)(YY.key),
      EY = "PadHidesCursor";
    let mY = !1;
    const VY = YY => {
        YY !== mY && (mY = YY, document.documentElement.classList.toggle(EY, YY))
      },
      SY = new class {
        constructor() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
        observe(YY) {
          let rY = !1,
            DY = !1;
          YY.values.forEach(((YY, FY) => {
            const AY = YY >= (this.buttonsDown[FY] ? yY.S : yY.O);
            AY && !this.buttonsDown[FY] && (rY = !0, DY = !0), this.buttonsDown[FY] = AY
          }));
          return [YY.leftStick, YY.rightStick].forEach(((YY, FY) => {
            const AY = this.stickAnchors[FY];
            Math.hypot(YY.x, YY.y) < (AY ? yY.S : .3) ? this.stickAnchors[FY] = null : (!AY || Math.hypot(YY.x - AY.x, YY.y - AY.y) >= .3) && (this.stickAnchors[FY] = {
              x: YY.x,
              y: YY.y
            }, rY = !0, DY ||= !AY)
          })), rY && (this.lastActivityMs = YY.timestampMs), this.onlyMovedOn = rY && !DY, rY
        }
        wasOnlyMoveOn() {
          return this.onlyMovedOn
        }
        isHolding(YY) {
          return !(YY - this.lastActivityMs >= 1e3) && (this.buttonsDown.some((YY => YY)) || this.stickAnchors.some((YY => null !== YY)))
        }
        isStickOffRest() {
          return this.stickAnchors.some((YY => null !== YY))
        }
        reset() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
      };
    let lY = null,
      TY = !1;
    const eY = () => TY;
    let NY = null,
      BY = !1,
      cY = null;
    const KY = () => cY;
    let HY = !1;
    const zY = YY => {
        if (!SY.observe(YY)) return !1;
        if (HY && SY.wasOnlyMoveOn() && !(0, iY.f)()) return !1;
        HY = !1, TY = !1;
        const rY = !(0, iY.f)();
        return rY && (lY = YY, cY = !mY && BY && NY ? {
          ...NY
        } : null), BY = !1, (0, iY.l)("gamepad"), VY(!0), (0, sY.k)((0, gY.m)()), rY
      },
      ZY = YY => !(0, iY.f)() || YY === lY,
      CY = () => {
        SY.reset()
      },
      fY = () => {
        const YY = AY.b.get("activeInputDevice"),
          rY = "gamepad" === YY ? uY.f.getActivePad() : null;
        return {
          device: YY,
          inGame: (0, OY.l)(),
          padMovesMouse: null !== rY && (0, vY.g)(rY.id)
        }
      },
      jY = YY => {
        document.pointerLockElement ? NY = null : (NY ??= {
          x: 0,
          y: 0
        }, NY.x = YY.clientX, NY.y = YY.clientY)
      },
      hY = () => {
        const YY = new oY.d,
          rY = rY => {
            YY.reset(), HY = !1, (0, iY.l)(rY)
          },
          DY = YY => {
            if (YY.isTrusted) {
              if (YY instanceof KeyboardEvent) {
                if ((0, iY.k)(YY), !WY(YY)) return;
                TY = !0
              }
              if (YY instanceof PointerEvent && "touch" === YY.pointerType) return NY = null, void rY("touch");
              YY instanceof PointerEvent && (jY(YY), BY = !0), ("pointerdown" !== YY.type || (YY => {
                let {
                  device: rY,
                  inGame: DY,
                  padMovesMouse: FY
                } = YY;
                return !("gamepad" === rY && FY && DY)
              })(fY())) && rY("keyboardMouse")
            }
          },
          FY = YY => {
            YY.isTrusted && (NY = null, rY("touch"))
          },
          RY = YY => {
            YY.isTrusted && "touch" !== YY.pointerType && !YY.relatedTarget && (NY = null)
          },
          OY = DY => {
            if (!DY.isTrusted || "touch" === DY.pointerType) return;
            jY(DY);
            const FY = DY.movementX || 0,
              IY = DY.movementY || 0;
            if (0 === FY && 0 === IY) return;
            if (BY = !0, VY(!1), "keyboardMouse" === AY.b.get("activeInputDevice")) return;
            const RY = SY.isHolding(DY.timeStamp),
              OY = fY(),
              gY = (YY => {
                let {
                  device: rY,
                  inGame: DY,
                  padMovesMouse: FY,
                  padHolding: AY
                } = YY;
                return ("gamepad" !== rY || !FY) && "keyboardMouse" !== rY && (DY || !AY)
              })({
                ...OY,
                inGame: OY.inGame && (0, aY.e)(),
                padHolding: RY
              });
            gY && YY.add(FY, IY, DY.timeStamp) && (rY("keyboardMouse"), HY = SY.isStickOffRest())
          },
          gY = YY => {
            VY("gamepad" === YY)
          },
          vY = {
            capture: !0,
            passive: !0
          };
        window.addEventListener("keydown", DY, vY), window.addEventListener("pointerdown", DY, vY), window.addEventListener("wheel", DY, vY), window.addEventListener("touchstart", FY, vY), window.addEventListener("pointermove", OY, vY), window.addEventListener("pointerout", RY, vY);
        const uY = IY.g.subscribe("appManagerUpdated|activeInputDevice", gY);
        return gY(AY.b.get("activeInputDevice")), () => {
          window.removeEventListener("keydown", DY, vY), window.removeEventListener("pointerdown", DY, vY), window.removeEventListener("wheel", DY, vY), window.removeEventListener("touchstart", FY, vY), window.removeEventListener("pointermove", OY, vY), window.removeEventListener("pointerout", RY, vY), NY = null, IY.g.unsubscribe(uY), VY(!1)
        }
      },
      dY = () => {
        const [YY, rY] = (0, FY.useState)(gY.m);
        return (0, RY.g)(gY.c, (() => {
          rY((0, gY.m)())
        })), (0, RY.g)(uY.c, (() => {
          rY((0, gY.m)())
        })), YY
      }
  },
  7629: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => FY,
      e: () => AY
    });
    const FY = ["xbox", "playstation", "nintendo", "steamdeck", "generic"],
      AY = YY => FY.includes(YY)
  },
  8090: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => RY,
      g: () => IY,
      i: () => gY,
      k: () => OY
    });
    var FY = DY(1430),
      AY = DY(1392);
    const IY = "controllerInventoryCursorChanged",
      RY = {
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
      OY = () => {
        var YY, rY;
        return (0, FY.k)(IY, null !== (YY = null === (rY = (0, AY.g)()) || void 0 === rY ? void 0 : rY.getInventoryCursorState()) && void 0 !== YY ? YY : RY)
      },
      gY = () => {
        var YY, rY;
        return null !== (YY = null === (rY = (0, AY.g)()) || void 0 === rY ? void 0 : rY.isPadSteppingSlots()) && void 0 !== YY && YY
      }
  },
  8087: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => sY,
      e: () => OY,
      i: () => gY,
      m: () => RY,
      o: () => IY,
      s: () => vY,
      t: () => uY
    });
    let FY = null;
    const AY = new Set,
      IY = YY => (FY = YY, () => {
        if (FY === YY) {
          FY = null;
          for (const YY of AY) YY()
        }
      }),
      RY = YY => (AY.add(YY), () => {
        AY.delete(YY)
      }),
      OY = () => FY,
      gY = () => null !== FY;
    let aY = null;
    const vY = YY => {
        aY = YY
      },
      uY = () => {
        const YY = aY;
        return aY = null, YY
      },
      sY = (YY, rY) => {
        var DY, FY;
        return null !== (DY = null !== (FY = YY.find((YY => YY.element === rY))) && void 0 !== FY ? FY : YY.find((YY => YY.element.contains(rY)))) && void 0 !== DY ? DY : null
      }
  },
  8094: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => IY,
      e: () => RY
    });
    var FY = DY(61);
    const AY = new WeakMap,
      IY = YY => {
        var rY, DY;
        return null !== (rY = null === (DY = AY.get(YY)) || void 0 === DY ? void 0 : DY.current) && void 0 !== rY ? rY : null
      },
      RY = (YY, rY) => {
        const DY = (0, FY.useRef)(rY);
        DY.current = rY;
        const IY = (0, FY.useRef)(null);
        (0, FY.useEffect)((() => {
          const rY = YY.current,
            FY = IY.current;
          rY !== FY && (FY && AY.get(FY) === DY && AY.delete(FY), IY.current = rY, rY && AY.set(rY, DY))
        })), (0, FY.useEffect)((() => () => {
          const YY = IY.current;
          YY && AY.get(YY) === DY && AY.delete(YY), IY.current = null
        }), [])
      }
  },
  8240: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => OY,
      g: () => aY,
      i: () => uY,
      m: () => vY,
      p: () => gY,
      r: () => iY
    });
    var FY = DY(25),
      AY = DY(1874),
      IY = DY(1392),
      RY = DY(1384);
    const OY = YY => {
        var rY, DY;
        return (0, RY.f)() && null !== (rY = null === (DY = (0, IY.g)()) || void 0 === DY ? void 0 : DY.getGlyphForNoaAction(YY)) && void 0 !== rY ? rY : null
      },
      gY = "controllerGlyph:",
      aY = YY => {
        var rY, DY;
        return null !== (rY = null === (DY = (0, IY.g)()) || void 0 === DY ? void 0 : DY.getPadGlyphIconName(YY)) && void 0 !== rY ? rY : `${gY}xbox/${YY}`
      },
      vY = YY => YY.startsWith(gY),
      uY = YY => {
        var rY, DY;
        return vY(YY) && null !== (rY = null === (DY = (0, IY.g)()) || void 0 === DY ? void 0 : DY.getPadGlyphIconUrl(YY)) && void 0 !== rY ? rY : null
      },
      sY = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", RY.b, AY.f, AY.e],
      iY = YY => {
        const rY = sY.map((rY => FY.g.subscribe(rY, YY)));
        return () => {
          for (const YY of rY) FY.g.unsubscribe(YY)
        }
      }
  },
  8084: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => AY,
      i: () => FY
    });
    const FY = "controllerOpenKeyboard",
      AY = "controllerKeyboardVisible"
  },
  7655: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => aY,
      e: () => vY,
      g: () => gY,
      k: () => OY
    });
    var FY = DY(19),
      AY = DY(1619),
      IY = DY(1701);
    const RY = new Map,
      OY = (YY, rY) => (RY.has(YY) && console.warn(`Gameplay blocker "${YY}" registered twice; the newer one replaces it.`), RY.set(YY, rY), () => {
        RY.get(YY) === rY && RY.delete(YY)
      }),
      gY = () => (0, IY.b)(document.activeElement),
      aY = function() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        for (const [rY, DY] of RY)
          if (!YY.includes(rY) && DY()) return rY;
        return null
      },
      vY = function() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return "inGame" === FY.b.get("gameState") && (!(0, AY.p)() && (!gY() && null === aY(YY)))
      }
  },
  7598: (YY, rY, DY) => {
    DY.d(rY, {
      $: () => zY,
      A: () => VY,
      E: () => WY,
      H: () => oY,
      L: () => aY,
      O: () => sY,
      S: () => iY,
      T: () => AY,
      W: () => FY,
      Z: () => lY,
      _: () => cY,
      b: () => ZY,
      c: () => KY,
      cb: () => SY,
      f: () => vY,
      g: () => gY,
      i: () => OY,
      k: () => eY,
      o: () => EY,
      r: () => TY,
      u: () => IY,
      w: () => uY,
      x: () => mY,
      z: () => HY
    });
    const FY = ["A", "B", "X", "Y", "LB", "RB", "LT", "RT", "View", "Menu", "LS", "RS", "Up", "Down", "Left", "Right", "Home"],
      AY = FY.length,
      IY = function() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return {
          values: new Array(AY).fill(0),
          leftStick: {
            x: 0,
            y: 0
          },
          rightStick: {
            x: 0,
            y: 0
          },
          timestampMs: YY
        }
      },
      RY = Object.fromEntries(FY.map(((YY, rY) => [YY, rY]))),
      OY = YY => RY[YY],
      gY = function(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .95;
        const FY = Math.hypot(YY.x, YY.y);
        if (FY <= rY) return {
          x: 0,
          y: 0
        };
        const AY = Math.min(1, (FY - rY) / Math.max(1e-4, DY - rY));
        return {
          x: YY.x / FY * AY,
          y: YY.y / FY * AY
        }
      },
      aY = ["exponential", "linear", "boost"],
      vY = (YY, rY) => {
        const DY = Math.hypot(YY.x, YY.y);
        if (0 === DY) return {
          x: 0,
          y: 0
        };
        const FY = ((YY, rY) => {
          const DY = Math.max(0, Math.min(1, YY));
          return "linear" === rY ? DY : DY * DY
        })(DY, rY);
        return {
          x: YY.x / DY * FY,
          y: YY.y / DY * FY
        }
      },
      uY = .5,
      sY = .3,
      iY = .2,
      yY = OY("LT"),
      QY = OY("RT"),
      oY = YY => YY === yY || YY === QY,
      WY = (YY, rY) => {
        const DY = OY(rY);
        return oY(DY) ? YY[DY] > .35 : YY[DY] >= uY
      },
      EY = (YY, rY) => YY.map(((YY, DY) => oY(DY) ? rY[DY] ? YY > .35 : YY >= .55 : YY >= uY)),
      mY = ["Up", "Down", "Left", "Right"],
      VY = YY => mY.includes(YY),
      SY = function(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .5;
        return Math.hypot(YY.x, YY.y) < rY ? null : Math.abs(YY.x) > Math.abs(YY.y) ? YY.x > 0 ? "Right" : "Left" : YY.y > 0 ? "Down" : "Up"
      },
      lY = {
        initialDelayMs: 350,
        intervalMs: 120
      },
      TY = {
        initialDelayMs: 350,
        intervalMs: 150
      },
      eY = ["default", "slow", "off"],
      NY = 800,
      BY = 250,
      cY = (YY, rY) => "off" === rY ? null : "slow" === rY ? {
        initialDelayMs: Math.max(YY.initialDelayMs, NY),
        intervalMs: Math.max(YY.intervalMs, BY)
      } : YY;
    class KY {
      constructor(YY) {
        this.readTiming = YY, this.ja = !1, this.timing = null, this.nextFireMs = 0
      }
      update(YY, rY) {
        return YY ? this.ja ? !!(this.timing && rY >= this.nextFireMs) && (this.nextFireMs = rY + this.timing.intervalMs, !0) : (this.ja = !0, this.timing = this.readTiming(), this.nextFireMs = rY + (null !== (DY = null === (FY = this.timing) || void 0 === FY ? void 0 : FY.initialDelayMs) && void 0 !== DY ? DY : 0), !0) : (this.ja = !1, !1);
        var DY, FY
      }
      reset() {
        this.ja = !1
      }
    }
    const HY = {
        initialDelayMs: 350,
        intervalMs: 80
      },
      zY = {
        initialDelayMs: 400,
        intervalMs: 90
      };
    class ZY {
      constructor(YY) {
        this.timer = YY, this.direction = null
      }
      update(YY, rY) {
        return YY !== this.direction && (this.timer.reset(), this.direction = YY), this.timer.update(null !== YY, rY) ? YY : null
      }
      reset() {
        this.timer.reset(), this.direction = null
      }
    }
  },
  8098: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => AY,
      g: () => IY
    });
    let FY = -1 / 0;
    const AY = () => {
        FY = performance.now()
      },
      IY = YY => performance.now() - FY < YY
  },
  8080: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => RY,
      c: () => IY
    });
    var FY = DY(7623),
      AY = DY(7598);
    const IY = YY => (0, AY._)(YY, (0, FY.i)().buttonRepeat),
      RY = YY => new AY.c((() => IY(YY)))
  },
  7637: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => gY,
      e: () => IY,
      i: () => OY
    });
    var FY = DY(25),
      AY = DY(7623);
    const IY = (YY, rY) => "OpenShop" === YY ? "shop" === rY : "OpenLobbyLeaderboard" !== YY || "leaderboard" === rY;
    let RY = !1;
    const OY = YY => {
        YY !== RY && (RY = YY, FY.g.vo(AY.c, (0, AY.i)()))
      },
      gY = () => ((YY, rY) => "shop" === YY && rY ? "shop" : "leaderboard")((0, AY.i)().leaderboardButton, RY)
  },
  7634: (YY, rY, DY) => {
    DY.d(rY, {
      B: () => gY,
      C: () => OY,
      D: () => SY,
      H: () => sY,
      J: () => iY,
      M: () => uY,
      N: () => VY,
      R: () => aY,
      U: () => WY,
      X: () => BY,
      Z: () => mY,
      ab: () => QY,
      bb: () => oY,
      e: () => fY,
      fb: () => yY,
      g: () => hY,
      i: () => cY,
      jb: () => EY,
      l: () => RY,
      mb: () => zY,
      p: () => NY,
      q: () => TY,
      qb: () => IY,
      rb: () => lY,
      u: () => ZY,
      ub: () => jY,
      v: () => CY,
      wb: () => eY,
      y: () => vY
    });
    var FY = DY(7618),
      AY = DY(7598);
    const IY = {
        min: 25,
        max: 500,
        step: 5
      },
      RY = {
        min: 25,
        max: 100,
        step: 5
      },
      OY = {
        min: 0,
        max: .4,
        step: .01
      },
      gY = {
        min: 25,
        max: 300,
        step: 5
      },
      aY = {
        min: .5,
        max: 6,
        step: .1
      },
      vY = (YY, rY) => {
        if (!Number.isFinite(YY)) return rY.min;
        const DY = rY.min + Math.round((YY - rY.min) / rY.step) * rY.step,
          FY = Math.min(rY.max, Math.max(rY.min, DY));
        return Math.round(1e3 * FY) / 1e3
      },
      uY = YY => `${Math.round(YY)}%`,
      sY = YY => uY(100 * YY),
      iY = YY => `${YY.toFixed(1)}\xd7`,
      yY = [{
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
      QY = [{
        value: "exponential",
        labelKey: "controller:settingsCurveExponential"
      }, {
        value: "linear",
        labelKey: "controller:settingsCurveLinear"
      }, {
        value: "boost",
        labelKey: "controller:settingsCurveBoost"
      }],
      oY = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "focus",
        labelKey: "controller:settingsMenuNavFocus"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      WY = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "slot",
        labelKey: "controller:settingsInventoryNavSlot"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      EY = [{
        value: "wheel",
        labelKey: "controller:settingsQuickChatWheel"
      }, {
        value: "off",
        labelKey: "controller:settingsQuickChatOff"
      }],
      mY = [{
        value: "shop",
        labelKey: "controller:settingsLeaderboardButtonShop"
      }, {
        value: "leaderboard",
        labelKey: "controller:settingsLeaderboardButtonLeaderboard"
      }],
      VY = [{
        value: "always",
        labelKey: "controller:settingsGyroAlways"
      }, {
        value: "aiming",
        labelKey: "controller:settingsGyroWhileAiming"
      }, {
        value: "button",
        labelKey: "controller:settingsGyroWhileButton"
      }],
      SY = [{
        value: "tapHold",
        labelKey: "controller:settingsEmoteButtonTapHold"
      }, {
        value: "wheel",
        labelKey: "controller:settingsEmoteButtonWheel"
      }],
      lY = [{
        value: "toggle",
        labelKey: "controller:settingsSneakToggle"
      }, {
        value: "hold",
        labelKey: "controller:settingsSneakHold"
      }],
      TY = [{
        value: "default",
        labelKey: "controller:settingsButtonRepeatDefault"
      }, {
        value: "slow",
        labelKey: "controller:settingsButtonRepeatSlow"
      }, {
        value: "off",
        labelKey: "controller:settingsButtonRepeatOff"
      }],
      eY = [{
        value: "short",
        labelKey: "controller:settingsTapHoldShort"
      }, {
        value: "medium",
        labelKey: "controller:settingsTapHoldMedium"
      }, {
        value: "long",
        labelKey: "controller:settingsTapHoldLong"
      }],
      NY = [{
        value: "hold",
        labelKey: "controller:settingsAttackHold"
      }, {
        value: "toggle",
        labelKey: "controller:settingsAttackToggle"
      }],
      BY = {
        southpaw: "controller:settingsLayoutSouthpaw",
        triggersSwapped: "controller:settingsLayoutTriggersSwapped"
      },
      cY = {
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
      KY = {
        gameplay: "controller:settingsGroupGameplay",
        menu: "controller:settingsGroupMenus",
        inventory: "controller:settingsGroupInventory",
        keyboard: "controller:settingsGroupKeyboard"
      },
      HY = [{
        kind: "fixed",
        stick: "move",
        labelKey: "controller:settingsActionMove"
      }, {
        kind: "fixed",
        stick: "look",
        labelKey: "controller:settingsActionLook"
      }],
      zY = FY.d.map((YY => {
        let {
          group: rY,
          actions: DY
        } = YY;
        const FY = DY.map((YY => ({
          kind: "action",
          action: YY
        })));
        return {
          titleKey: KY[rY],
          rows: "gameplay" === rY ? [...HY, ...FY] : FY
        }
      })),
      ZY = AY.W.filter((YY => "Home" !== YY)),
      CY = 1e4;
    class fY {
      constructor(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
        this.cancelButton = YY, this.openButton = rY, this.accepts = DY, this.startMs = null, this.ignoredUntilMs = new Map, this.cancelDownAtMs = null
      }
      update(YY, rY) {
        var DY;
        this.updateIgnored(YY, rY);
        const FY = rY - (null !== (DY = this.startMs) && void 0 !== DY ? DY : rY) >= 250;
        for (const AY of ZY)
          if (AY !== this.cancelButton && FY && !this.ignoredUntilMs.has(AY) && YY.wasPressed(AY) && this.accepts(AY)) return {
            kind: "bind",
            button: AY
          };
        if (this.ignoredUntilMs.has(this.cancelButton)) return null;
        if (YY.wasPressed(this.cancelButton)) {
          if (!this.accepts(this.cancelButton)) return {
            kind: "cancel"
          };
          this.cancelDownAtMs = rY
        }
        return null === this.cancelDownAtMs ? null : YY.isHeld(this.cancelButton) && rY - this.cancelDownAtMs >= 700 ? (this.cancelDownAtMs = null, {
          kind: "bind",
          button: this.cancelButton
        }) : YY.wasReleased(this.cancelButton) ? (this.cancelDownAtMs = null, {
          kind: "cancel"
        }) : null
      }
      getBindHoldProgress(YY) {
        return null === this.cancelDownAtMs ? 0 : Math.min(1, (YY - this.cancelDownAtMs) / 700)
      }
      updateIgnored(YY, rY) {
        if (null === this.startMs) {
          this.startMs = rY;
          for (const rY of ZY) YY.isDown(rY) && this.ignoredUntilMs.set(rY, 1 / 0);
          this.openButton && !this.ignoredUntilMs.has(this.openButton) && this.ignoredUntilMs.set(this.openButton, rY + 250)
        }
        for (const [DY, FY] of this.ignoredUntilMs) {
          const AY = YY.isDown(DY);
          FY === 1 / 0 ? AY || DY !== this.openButton ? AY || this.ignoredUntilMs.delete(DY) : this.ignoredUntilMs.set(DY, rY + 250) : rY >= FY ? this.ignoredUntilMs.delete(DY) : AY && this.ignoredUntilMs.set(DY, 1 / 0)
        }
      }
    }
    const jY = 6e3;
    class hY {
      constructor() {
        this.downAtMs = null, this.pressesAtMs = []
      }
      update(YY, rY) {
        let {
          pressed: DY,
          ja: FY
        } = YY;
        if (DY) {
          const YY = this.pressesAtMs.at(-1);
          if (this.pressesAtMs = void 0 !== YY && rY - YY < 1500 ? [...this.pressesAtMs, rY] : [rY], this.pressesAtMs.length >= 3) return 1
        }
        return FY ? (this.downAtMs ??= rY, Math.min(1, (rY - this.downAtMs) / 1500)) : (this.downAtMs = null, 0)
      }
    }
  },
  8111: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => IY,
      f: () => AY
    });
    let FY = null;
    const AY = function(YY) {
        const rY = {
          cycle: YY,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return FY = rY, () => {
          FY === rY && (FY = null)
        }
      },
      IY = () => {
        var YY;
        return null !== (YY = FY) && void 0 !== YY && YY.canCycle() ? FY.cycle : null
      }
  },
  4613: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => IY,
      d: () => RY
    });
    var FY = DY(61);
    const AY = new WeakMap,
      IY = YY => {
        var rY;
        const DY = YY.closest("[data-pad-slider]");
        return DY && null !== (rY = AY.get(DY)) && void 0 !== rY ? rY : null
      },
      RY = (YY, rY) => {
        const DY = (0, FY.useRef)(rY);
        DY.current = rY, (0, FY.useEffect)((() => {
          if (YY.current) return ((YY, rY) => (AY.set(YY, rY), () => {
            AY.get(YY) === rY && AY.delete(YY)
          }))(YY.current, {
            adjust: YY => {
              DY.current.adjust(YY)
            },
            setFraction: YY => {
              DY.current.setFraction(YY)
            },
            endDrag: () => {
              DY.current.endDrag()
            }
          })
        }), [YY])
      }
  },
  8230: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => AY,
      e: () => RY,
      h: () => IY,
      l: () => FY,
      n: () => OY,
      o: () => aY,
      r: () => vY
    });
    const FY = "controllerActionWheelOpen",
      AY = "controllerActionWheelAim",
      IY = "controllerActionWheelCommit",
      RY = "controllerActionWheelClose",
      OY = "controllerActionWheelPick";
    let gY = !1;
    const aY = () => gY,
      vY = YY => {
        gY = YY
      }
  },
  8225: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => IY,
      h: () => AY
    });
    let FY = 0;
    const AY = () => {
        FY++
      },
      IY = () => FY
  },
  8104: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => gY,
      g: () => AY,
      h: () => RY,
      i: () => IY,
      k: () => FY,
      m: () => aY
    });
    const FY = "controllerQuickChatWheelOpen",
      AY = "controllerQuickChatWheelAim",
      IY = "controllerQuickChatWheelCommit",
      RY = "controllerQuickChatWheelClose";
    let OY = !1;
    const gY = () => OY,
      aY = YY => {
        OY = YY
      }
  },
  8118: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => IY,
      f: () => AY
    });
    var FY = DY(25);
    const AY = "localBlockBroken";

    function IY() {
      return {
        onPlayerChangeBlock(YY, rY, DY, IY, RY, OY) {
          "Air" === OY && FY.g.vo(AY)
        }
      }
    }
  },
  8173: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => RY
    });
    var FY = DY(8181),
      AY = DY(625),
      IY = DY(144);

    function RY(YY) {
      var rY, DY;
      if ((0, AY.H)(YY)) return !0;
      const RY = null !== (rY = null === (DY = IY.l[IY.s]) || void 0 === DY ? void 0 : DY.adConfig.showRewardedAds) && void 0 !== rY && rY;
      for (const AY in YY) {
        const rY = YY[AY];
        if (null !== rY && void 0 !== rY && rY.items)
          for (const YY in rY.items)
            if ((0, FY.m)(rY.items[YY], RY)) return !1
      }
      return !0
    }
  },
  8197: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => AY,
      i: () => FY
    });
    const FY = 100;

    function AY(YY) {
      let {
        translationKeys: rY = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return YY.map((YY => {
        var DY;
        return null !== (DY = function(YY, rY) {
          if ("string" === typeof YY) return YY;
          const DY = "str" in YY ? YY.str : YY;
          if ("string" === typeof DY) return DY;
          if ("entityName" in DY) return DY.entityName;
          if (rY && "translationKey" in DY) return `{${DY.translationKey}${void 0===DY.params?"":` ${JSON.stringify(DY.params)}`}}`;
          return null
        }(YY, rY)) && void 0 !== DY ? DY : " "
      })).join("")
    }
  },
  8236: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => vY,
      f: () => OY,
      i: () => gY
    });
    var FY = DY(2091),
      AY = DY(1244),
      IY = DY(2099);
    const RY = ",";

    function OY(YY) {
      if (!YY) return [];
      const rY = new Set,
        DY = [];
      for (const FY of YY.split(RY)) {
        const YY = FY.trim();
        if ((0, IY.j)(YY) && !rY.has(YY) && (rY.add(YY), DY.push(YY), DY.length >= AY.m)) break
      }
      return DY
    }

    function gY(YY) {
      const rY = new Set,
        DY = [];
      for (const FY of YY)
        if ((0, IY.j)(FY) && !rY.has(FY) && (rY.add(FY), DY.push(FY), DY.length >= AY.m)) break;
      return DY.join(RY)
    }

    function aY() {
      return gY(IY.e)
    }

    function vY(YY) {
      var rY;
      return "emote" === YY ? aY() : null !== (rY = uY[YY][0]) && void 0 !== rY ? rY : sY[YY]
    }
    const uY = AY.u.reduce(((YY, rY) => {
        const DY = [];
        for (const IY in FY.g[rY]) {
          var AY;
          "default" === (null === (AY = (0, FY.n)(rY, IY)) || void 0 === AY ? void 0 : AY.cosmeticPack) && DY.push(IY)
        }
        return YY[rY] = DY, YY
      }), {}),
      sY = AY.u.reduce(((YY, rY) => (YY[rY] = Object.keys(FY.g[rY])[0], YY)), {})
  },
  8233: () => {},
  7671: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/A.926fb88933484dfbde14.svg"
  },
  7673: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/B.9f5ec099f78f84e44427.svg"
  },
  7675: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  7683: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  7686: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/LB.3a20b15927b55d5d8b60.svg"
  },
  7689: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  7691: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/LT.9fdc5e69011b9d41f50a.svg"
  },
  7694: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  7702: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  7709: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Menu.c903a662eb685211e52e.svg"
  },
  7713: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/RB.bba470ddb76ceec5d168.svg"
  },
  7720: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  7729: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/RT.e5a9fbcc3c79550111ca.svg"
  },
  7734: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  7739: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  7747: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  7749: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/View.0c9378b5d720a636d50d.svg"
  },
  7758: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/X.c9377519af94e6dce1d7.svg"
  },
  7762: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Y.62d8c17731dd2e172426.svg"
  },
  7770: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/A.958a6de9474f8d0c9caf.svg"
  },
  7774: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/B.d05958bfa88a1162b47a.svg"
  },
  7778: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Down.db68fb3980768eb54671.svg"
  },
  7784: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  7793: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/LB.37a3c5128c958ec2a0c2.svg"
  },
  7802: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/LS.15b0cc5bf3f2fe7bbd8b.svg"
  },
  7807: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/LT.5412ae5222c69f8c833f.svg"
  },
  7812: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Left.4457b2895ce94a5df32e.svg"
  },
  7818: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  7824: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Menu.1e8427f8133c9d456c53.svg"
  },
  7826: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/RB.c96c4aa2590209e930c7.svg"
  },
  7829: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/RS.8d70d147cf1ab136e845.svg"
  },
  7838: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/RT.1e4691bb5a7c049693df.svg"
  },
  7843: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Right.a1e101413040c540b879.svg"
  },
  7845: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  7851: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Up.7544a65ad4f611a55775.svg"
  },
  7858: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/View.003cae39de89cae0b9d8.svg"
  },
  7860: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/X.d88b6e62dd8fb4bda32a.svg"
  },
  7864: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Y.428d3e70775877892f82.svg"
  },
  7869: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  7874: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  7879: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  7881: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Home.ea8b009cfa9562aa644e.svg"
  },
  7884: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/LB.f283d355d22fc107d6d6.svg"
  },
  7892: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  7901: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/LT.13e66c122e7ee04bb876.svg"
  },
  7903: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  7905: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  7910: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Menu.90fc4e918900eb5062a0.svg"
  },
  7917: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/RB.918a7f16dc054d96b6f3.svg"
  },
  7924: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  7932: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/RT.a0523211130959598bed.svg"
  },
  7939: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  7945: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  7950: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  7959: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/View.0bc952e292c28c3baac2.svg"
  },
  7962: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  7964: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  },
  7973: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  7977: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  7982: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  7986: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Home.8898f76b20962fe52ab7.svg"
  },
  7994: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/LB.689ba3703ae248f2e4cc.svg"
  },
  8002: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  8009: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/LT.9c2d10d335ab5c590525.svg"
  },
  8016: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  8021: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8023: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Menu.9e485791ea97009871ca.svg"
  },
  8028: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/RB.7ee5ce48dd551f993f80.svg"
  },
  8035: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  8042: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/RT.903ecadc55a9e9e00f07.svg"
  },
  8044: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  8046: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8053: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  8056: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/View.3c5eeb34f0413bde4a65.svg"
  },
  8062: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  8067: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);