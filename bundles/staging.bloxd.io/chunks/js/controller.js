export const id = 28;
export const ids = [28];
export const modules = {
  7537: (JJ, cJ, ZJ) => {
    var FJ = {
      "./nintendo/A.svg": 7544,
      "./nintendo/B.svg": 7552,
      "./nintendo/Down.svg": 7560,
      "./nintendo/Home.svg": 7569,
      "./nintendo/LB.svg": 7577,
      "./nintendo/LS.svg": 7583,
      "./nintendo/LT.svg": 7585,
      "./nintendo/Left.svg": 7589,
      "./nintendo/LeftStick.svg": 7596,
      "./nintendo/Menu.svg": 7601,
      "./nintendo/RB.svg": 7604,
      "./nintendo/RS.svg": 7610,
      "./nintendo/RT.svg": 7618,
      "./nintendo/Right.svg": 7624,
      "./nintendo/RightStick.svg": 7629,
      "./nintendo/Up.svg": 7633,
      "./nintendo/View.svg": 7637,
      "./nintendo/X.svg": 7645,
      "./nintendo/Y.svg": 7654,
      "./playstation/A.svg": 7657,
      "./playstation/B.svg": 7664,
      "./playstation/Down.svg": 7669,
      "./playstation/Home.svg": 7673,
      "./playstation/LB.svg": 7676,
      "./playstation/LS.svg": 7680,
      "./playstation/LT.svg": 7683,
      "./playstation/Left.svg": 7690,
      "./playstation/LeftStick.svg": 7696,
      "./playstation/Menu.svg": 7701,
      "./playstation/RB.svg": 7709,
      "./playstation/RS.svg": 7712,
      "./playstation/RT.svg": 7718,
      "./playstation/Right.svg": 7725,
      "./playstation/RightStick.svg": 7731,
      "./playstation/Up.svg": 7738,
      "./playstation/View.svg": 7740,
      "./playstation/X.svg": 7749,
      "./playstation/Y.svg": 7752,
      "./steamdeck/A.svg": 7759,
      "./steamdeck/B.svg": 7763,
      "./steamdeck/Down.svg": 7769,
      "./steamdeck/Home.svg": 7777,
      "./steamdeck/LB.svg": 7780,
      "./steamdeck/LS.svg": 7788,
      "./steamdeck/LT.svg": 7794,
      "./steamdeck/Left.svg": 7798,
      "./steamdeck/LeftStick.svg": 7807,
      "./steamdeck/Menu.svg": 7813,
      "./steamdeck/RB.svg": 7817,
      "./steamdeck/RS.svg": 7823,
      "./steamdeck/RT.svg": 7828,
      "./steamdeck/Right.svg": 7835,
      "./steamdeck/RightStick.svg": 7837,
      "./steamdeck/Up.svg": 7843,
      "./steamdeck/View.svg": 7849,
      "./steamdeck/X.svg": 7854,
      "./steamdeck/Y.svg": 7857,
      "./xbox/A.svg": 7861,
      "./xbox/B.svg": 7864,
      "./xbox/Down.svg": 7867,
      "./xbox/Home.svg": 7874,
      "./xbox/LB.svg": 7879,
      "./xbox/LS.svg": 7882,
      "./xbox/LT.svg": 7885,
      "./xbox/Left.svg": 7891,
      "./xbox/LeftStick.svg": 7894,
      "./xbox/Menu.svg": 7897,
      "./xbox/RB.svg": 7904,
      "./xbox/RS.svg": 7912,
      "./xbox/RT.svg": 7917,
      "./xbox/Right.svg": 7921,
      "./xbox/RightStick.svg": 7925,
      "./xbox/Up.svg": 7928,
      "./xbox/View.svg": 7937,
      "./xbox/X.svg": 7946,
      "./xbox/Y.svg": 7948
    };

    function UJ(JJ) {
      var cJ = eJ(JJ);
      return ZJ(cJ)
    }

    function eJ(JJ) {
      if (!ZJ.o(FJ, JJ)) {
        var cJ = new Error("Cannot find module '" + JJ + "'");
        throw cJ.code = "MODULE_NOT_FOUND", cJ
      }
      return FJ[JJ]
    }
    UJ.keys = function() {
      return Object.keys(FJ)
    }, UJ.resolve = eJ, JJ.exports = UJ, UJ.id = 7537
  },
  8167: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => IJ,
      h: () => SJ
    });
    var FJ = ZJ(1086),
      UJ = ZJ(47),
      eJ = ZJ(1756),
      XJ = ZJ(1769),
      AJ = ZJ(926),
      qJ = ZJ.n(AJ),
      jJ = ZJ(1329),
      YJ = ZJ(13),
      hJ = ZJ(80),
      DJ = ZJ(93),
      sJ = ZJ(4401),
      nJ = ZJ(2175),
      GJ = ZJ(105),
      fJ = ZJ(1778),
      xJ = ZJ(1782),
      rJ = ZJ(8176),
      vJ = ZJ(227),
      mJ = ZJ(990);
    const QJ = {
      floating: "settingsMenu:joystickFloating",
      fixed_shown: "settingsMenu:joystickFixed",
      fixed_hidden: "settingsMenu:joystickHidden"
    };
    var EJ = ZJ(8178);
    const VJ = [function() {
      const {
        t: JJ
      } = (0, FJ.F)(), {
        joystickMode: cJ,
        touchSpeedCurve: ZJ,
        autorun: UJ,
        jumpLock: eJ
      } = (0, YJ.j)(["clientEscMenuOptions"]).clientEscMenuOptions;
      return (0, mJ.jsxs)(mJ.Fragment, {
        children: [(0, mJ.jsx)(sJ.f, {
          label: JJ("settingsMenu:joystick"),
          options: vJ.nb.map((cJ => ({
            value: cJ,
            label: JJ(QJ[cJ])
          }))),
          value: cJ,
          onChange: JJ => {
            YJ.d.setClientEscMenuOptions({
              joystickMode: JJ
            })
          },
          circleInfoText: JJ("settingsMenu:joystickInfo")
        }), (0, mJ.jsx)(sJ.e, {
          label: JJ("settingsMenu:preciseWalking"),
          checked: ZJ,
          onClick: JJ => {
            YJ.d.setClientEscMenuOptions({
              touchSpeedCurve: JJ
            })
          },
          circleInfoText: JJ("settingsMenu:preciseWalkingInfo")
        }), (0, mJ.jsx)(sJ.e, {
          label: JJ("settingsMenu:autoRun"),
          checked: UJ,
          onClick: JJ => {
            YJ.d.setClientEscMenuOptions({
              autorun: JJ
            })
          },
          circleInfoText: JJ("settingsMenu:autoRunInfo")
        }), (0, mJ.jsx)(sJ.e, {
          label: JJ("settingsMenu:jumpLock"),
          checked: eJ,
          onClick: JJ => {
            YJ.d.setClientEscMenuOptions({
              jumpLock: JJ
            })
          },
          circleInfoText: JJ("settingsMenu:jumpLockInfo")
        })]
      })
    }, function() {
      const {
        t: JJ
      } = (0, FJ.F)(), {
        clientEscMenuOptions: cJ
      } = (0, YJ.j)(["clientEscMenuOptions"]);
      return (0, mJ.jsx)(sJ.e, {
        label: JJ("touchSettings:actionButtons"),
        checked: cJ.touchActionButtons,
        onClick: JJ => {
          YJ.d.setClientEscMenuOptions({
            touchActionButtons: JJ
          })
        },
        circleInfoText: JJ("touchSettings:actionButtonsInfo")
      })
    }, function() {
      const {
        t: JJ
      } = (0, FJ.F)(), {
        clientEscMenuOptions: cJ
      } = (0, YJ.j)(["clientEscMenuOptions"]);
      return (0, EJ.e)() ? (0, mJ.jsx)(sJ.e, {
        label: JJ("settingsMenu:vibration"),
        checked: cJ.vibration,
        onClick: JJ => {
          YJ.d.setClientEscMenuOptions({
            vibration: JJ
          })
        },
        circleInfoText: JJ("settingsMenu:vibrationInfo")
      }) : null
    }];

    function KJ() {
      return (0, mJ.jsx)(mJ.Fragment, {
        children: VJ.map(((JJ, cJ) => (0, mJ.jsx)(JJ, {}, cJ)))
      })
    }
    var yJ = ZJ(3833);

    function SJ() {
      const {
        t: JJ
      } = (0, FJ.F)(), {
        isTouchScreen: cJ,
        clientEscMenuOptions: ZJ,
        gameState: XJ
      } = (0, YJ.j)(["isTouchScreen", "clientEscMenuOptions", "gameState"]), AJ = (0, nJ.f)("ezBridging"), qJ = (0, nJ.f)("ezTowering"), fJ = "inGame" !== XJ || !0 === AJ, xJ = (0, GJ.e)() && ("inGame" !== XJ || !0 === qJ), [, vJ] = (0, UJ.useReducer)((JJ => JJ + 1), 0), QJ = (0, rJ.d)(), [EJ, VJ] = (0, UJ.useState)(yJ.e);
      return (0, mJ.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [QJ && (0, mJ.jsxs)("div", {
          className: "SettingBox ControlsControllerNote",
          children: [(0, mJ.jsx)("div", {
            children: JJ("controller:settingsControlsNote")
          }), (0, mJ.jsx)(jJ.O, {
            onClick: () => {
              YJ.d.set({
                openSettingsCategory: "controller"
              })
            },
            children: JJ("controller:settingsOpenController")
          })]
        }), (0, hJ.isTouchscreen)() && !(0, hJ.isMobile)() ? (0, mJ.jsx)(mJ.Fragment, {
          children: (0, mJ.jsx)(sJ.e, {
            label: JJ("settingsMenu:useTouchControls"),
            checked: EJ,
            onClick: JJ => {
              (0, yJ.b)(JJ), VJ(JJ)
            }
          })
        }) : null, cJ && (0, mJ.jsx)(KJ, {}), fJ && (0, mJ.jsx)(sJ.e, {
          label: JJ("settingsMenu:ezBridging"),
          checked: ZJ.ezBridging,
          onClick: JJ => {
            YJ.d.setClientEscMenuOptions({
              ezBridging: JJ
            })
          },
          circleInfoText: JJ("settingsMenu:ezBridgingInfo")
        }), xJ && (0, mJ.jsx)(sJ.e, {
          label: JJ("settingsMenu:ezTowering"),
          checked: ZJ.ezTowering,
          onClick: JJ => {
            YJ.d.setClientEscMenuOptions({
              ezTowering: JJ
            })
          },
          circleInfoText: JJ("settingsMenu:ezToweringInfo")
        }), (0, mJ.jsx)(sJ.e, {
          label: JJ("settingsMenu:crouchToggle"),
          checked: ZJ.crouchIsToggle,
          onClick: JJ => {
            YJ.d.setClientEscMenuOptions({
              crouchIsToggle: JJ
            })
          },
          circleInfoText: JJ("settingsMenu:crouchToggleInfo")
        }), (0, mJ.jsx)(sJ.e, {
          label: JJ("settingsMenu:hideUiToggle"),
          checked: ZJ.hideUiIsToggle,
          onClick: JJ => {
            YJ.d.setClientEscMenuOptions({
              hideUiIsToggle: JJ
            })
          },
          circleInfoText: JJ("settingsMenu:hideUiToggleInfo")
        }), "mouseOnly" !== (0, DJ.e)() && (0, mJ.jsx)(sJ.h, {
          name: JJ("settingsMenu:touchscreenSensitivity"),
          min: 1,
          max: 900,
          step: 1,
          initValue: ZJ.touchscreenSensitivity,
          onChange: JJ => {
            YJ.d.setClientEscMenuOptions({
              touchscreenSensitivity: JJ
            })
          }
        }), !(0, hJ.isMobile)() && (0, mJ.jsx)(sJ.h, {
          name: JJ("settingsMenu:mouseSensitivity"),
          min: 1,
          max: 200,
          step: 1,
          initValue: ZJ.mouseSensitivity,
          onChange: JJ => {
            YJ.d.setClientEscMenuOptions({
              mouseSensitivity: JJ
            })
          }
        }), !(0, hJ.isMobile)() && (0, mJ.jsxs)("div", {
          className: "ControlsContainer",
          children: [(0, mJ.jsx)("div", {
            className: "SliderText",
            children: JJ("settingsMenu:keyBindings")
          }), eJ.f.map((cJ => (0, mJ.jsx)(IJ, {
            title: JJ(cJ.name.translationKey, cJ.name.params),
            defaultOpen: eJ.j.has(cJ.id),
            children: cJ.actions.map((JJ => (0, mJ.jsx)(MJ, {
              noaAction: JJ,
              forceUpdate: vJ,
              clashesWith: cJ.clashesWith,
              showPadGlyph: QJ
            }, JJ)))
          }, cJ.name.translationKey))), (0, mJ.jsx)(jJ.I, {
            className: "ResetBindingsButton",
            onClick: () => {
              (0, eJ.H)(), vJ()
            },
            children: JJ("controls:resetBindings")
          })]
        })]
      })
    }

    function IJ(JJ) {
      let {
        title: cJ,
        defaultOpen: ZJ,
        children: FJ
      } = JJ;
      const [eJ, XJ] = (0, UJ.useState)(ZJ);
      return (0, mJ.jsxs)("div", {
        className: qJ()("ControlsSection", {
          Collapsed: !eJ
        }),
        children: [(0, mJ.jsxs)("div", {
          className: "ControlsSectionHeader",
          "data-pad-focusable": !0,
          onClick: () => {
            XJ(!eJ)
          },
          children: [(0, mJ.jsx)("div", {
            className: "ControlsSectionTitle",
            children: cJ
          }), (0, mJ.jsx)("div", {
            className: "ControlsSectionChevron",
            children: "\u25be"
          })]
        }), eJ && (0, mJ.jsx)("div", {
          className: "ControlsSectionRows",
          children: FJ
        })]
      })
    }

    function MJ(JJ) {
      let {
        noaAction: cJ,
        forceUpdate: ZJ,
        clashesWith: AJ,
        showPadGlyph: YJ
      } = JJ;
      const {
        t: hJ
      } = (0, FJ.F)(), DJ = (0, xJ.b)(cJ), [sJ, nJ] = (0, UJ.useState)(!1), [GJ, rJ] = (0, UJ.useState)("controls:clickToEnterNewBinding"), [vJ, QJ] = (0, UJ.useState)(null), [EJ, VJ] = (0, UJ.useState)(null), KJ = (0, UJ.useRef)(null);
      (0, UJ.useEffect)((() => {
        sJ && KJ.current && KJ.current.focus()
      }), [sJ]);
      const yJ = eJ.z[cJ].filter((JJ => XJ.f[JJ]));
      let SJ = null;
      const IJ = [],
        MJ = AJ.flatMap((JJ => {
          var cJ, ZJ;
          return null !== (cJ = null === (ZJ = eJ.f.find((cJ => cJ.id === JJ))) || void 0 === ZJ ? void 0 : ZJ.actions) && void 0 !== cJ ? cJ : []
        }));
      for (const FJ of MJ) {
        if (FJ === cJ) continue;
        const JJ = eJ.z[FJ];
        for (const cJ of JJ) yJ.includes(cJ) && IJ.push(hJ(eJ.A[FJ].translationKey, eJ.A[FJ].params))
      }
      IJ.length > 0 && (SJ = hJ("controls:sharedBindingsWarning") + " ", SJ += IJ.join(", "));
      const bJ = () => {
          nJ(!1), QJ(null), rJ("controls:clickToEnterNewBinding"), VJ(null)
        },
        wJ = () => "BindingInput_" + cJ;
      return (0, mJ.jsxs)("div", {
        className: qJ()("ControlRow", {
          WarningBorder: null !== SJ
        }),
        children: [(0, mJ.jsxs)("div", {
          className: "ControlRowInner",
          children: [(0, mJ.jsxs)("div", {
            className: "ControlName",
            children: [hJ(eJ.A[cJ].translationKey, eJ.A[cJ].params), YJ && DJ && (0, mJ.jsx)(fJ.e, {
              glyph: DJ,
              className: "ControlPadGlyph"
            })]
          }), (0, mJ.jsxs)("div", {
            className: "ControlBindingsContainer",
            children: [(0, mJ.jsxs)("div", {
              className: "ControlBindingsList",
              children: [yJ.map((JJ => (0, mJ.jsxs)("div", {
                className: "ControlBinding",
                children: [(0, mJ.jsx)("div", {
                  children: (0, eJ.r)(JJ)
                }), (0, mJ.jsx)("div", {
                  className: "ControlBindingRemoveIcon",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    const FJ = (0, eJ.C)(cJ, JJ);
                    FJ.isError() ? VJ(FJ.asError().message) : VJ(null), ZJ()
                  },
                  children: "\xd7"
                })]
              }, JJ))), !sJ && (0, mJ.jsx)("div", {
                className: "ControlBinding ControlBindingAdd",
                onClick: () => {
                  nJ(!0), VJ(null)
                },
                children: (0, mJ.jsx)("div", {
                  className: "ControlBindingAddIcon",
                  children: "+"
                })
              })]
            }), sJ && (0, mJ.jsxs)("div", {
              className: "ControlBindingAddInput",
              children: [(0, mJ.jsxs)("div", {
                className: "InputContainer",
                children: [(0, mJ.jsx)("div", {
                  className: "InputOverlay",
                  children: vJ ? (0, eJ.r)(vJ) : (0, mJ.jsx)("div", {
                    className: "InputOverlayPlaceholder",
                    children: hJ(GJ)
                  })
                }), (0, mJ.jsx)("input", {
                  ref: KJ,
                  id: wJ(),
                  "data-pad-no-osk": !0,
                  defaultValue: "",
                  onKeyDown: JJ => {
                    if ("Escape" === JJ.code) return bJ(), JJ.preventDefault(), void JJ.stopPropagation();
                    const cJ = JJ.code;
                    XJ.c.includes(cJ) ? (VJ(null), QJ(cJ)) : (VJ("controls:keyIsReserved"), QJ(null)), JJ.preventDefault(), JJ.stopPropagation()
                  },
                  onMouseDown: JJ => {
                    const cJ = "Mouse" + (JJ.button + 1);
                    document.activeElement && document.activeElement.id === wJ() ? XJ.c.includes(cJ) ? (VJ(null), QJ(cJ)) : (VJ("controls:keyIsReserved"), QJ(null)) : rJ("controls:enterNewBinding"), JJ.stopPropagation()
                  },
                  onBlur: () => {
                    rJ("controls:clickToEnterNewBinding")
                  }
                })]
              }), (0, mJ.jsx)(jJ.d, {
                onPointerDown: JJ => {
                  JJ.preventDefault()
                },
                onClick: () => {
                  (0, eJ.e)(cJ, vJ), ZJ(), bJ()
                },
                className: "ControlBindingAddButton",
                disabled: null === vJ,
                children: hJ("general:add")
              }), (0, mJ.jsx)("div", {
                className: "ControlBindingAddCancel",
                onClick: () => {
                  bJ()
                },
                children: "\xd7"
              })]
            }), EJ && (0, mJ.jsx)("div", {
              className: "ControlBindingError",
              children: hJ(EJ)
            })]
          })]
        }), SJ && (0, mJ.jsx)("div", {
          className: "ControlRowWarning",
          children: SJ
        })]
      })
    }
  },
  4401: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => nJ,
      f: () => rJ,
      h: () => GJ,
      l: () => xJ
    });
    var FJ = ZJ(47),
      UJ = ZJ(4407),
      eJ = ZJ(3826),
      XJ = ZJ(1259),
      AJ = ZJ(4426),
      qJ = ZJ(926),
      jJ = ZJ.n(qJ),
      YJ = ZJ(1247),
      hJ = ZJ(1599),
      DJ = ZJ(4433),
      sJ = ZJ(990);

    function nJ(JJ) {
      let {
        label: cJ,
        onClick: ZJ,
        checked: FJ,
        circleInfoText: UJ,
        className: AJ,
        disabled: qJ
      } = JJ;
      return (0, sJ.jsx)("div", {
        "aria-disabled": qJ || void 0,
        "data-pad-focusable": !0,
        className: jJ()("SettingBox CheckboxContainer", {
          [AJ]: AJ,
          SettingBoxDisabled: qJ
        }),
        onClick: () => {
          qJ || ZJ(!FJ)
        },
        children: (0, sJ.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, sJ.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, sJ.jsx)(eJ.e, {
              className: "SettingsCheckbox",
              checked: FJ,
              disabled: qJ,
              onChange: () => {}
            })
          }), (0, sJ.jsxs)("div", {
            className: "CheckboxText",
            children: [cJ, UJ && (0, sJ.jsx)("span", {
              onClick: JJ => JJ.stopPropagation(),
              children: (0, sJ.jsx)(XJ.e, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: UJ
              })
            })]
          })]
        })
      })
    }

    function GJ(JJ) {
      let {
        name: cJ,
        onChange: ZJ,
        min: UJ,
        max: eJ,
        step: AJ,
        initValue: qJ,
        circleInfoText: YJ,
        format: hJ,
        className: DJ,
        padStep: nJ,
        disabled: GJ = !1,
        selectableMax: xJ,
        cappedNote: rJ
      } = JJ;
      const [vJ, mJ] = (0, FJ.useState)(qJ);
      (0, FJ.useEffect)((() => {
        mJ(qJ)
      }), [qJ]);
      const QJ = void 0 !== xJ && xJ < eJ,
        EJ = QJ ? {
          "--slider-selectable": (xJ - UJ) / (eJ - UJ)
        } : void 0;
      return (0, sJ.jsxs)("div", {
        className: jJ()("SettingBox SettingsSliderDiv", {
          [DJ]: DJ,
          SettingBoxDisabled: GJ,
          SliderCapped: QJ
        }),
        style: EJ,
        children: [(0, sJ.jsxs)("div", {
          className: "SliderText",
          children: [`${cJ}: ${hJ?hJ(vJ):vJ}`, YJ && (0, sJ.jsx)(XJ.e, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: YJ
          })]
        }), (0, sJ.jsx)("div", {
          className: "SliderDiv",
          children: (0, sJ.jsx)(fJ, {
            value: vJ,
            min: UJ,
            max: eJ,
            step: AJ,
            onChange: JJ => {
              if (QJ && JJ >= xJ && vJ === xJ) return;
              const cJ = QJ ? Math.min(JJ, xJ) : JJ;
              mJ(cJ), ZJ(cJ)
            },
            format: hJ,
            padStep: nJ,
            disabled: GJ
          })
        }), QJ && rJ && (0, sJ.jsx)("div", {
          className: "SliderNote",
          children: rJ
        })]
      })
    }

    function fJ(JJ) {
      var cJ;
      let {
        value: ZJ,
        min: eJ,
        max: XJ,
        step: AJ,
        onChange: qJ,
        orientation: jJ,
        reverse: YJ,
        setIsChanging: hJ,
        tooltip: nJ,
        labels: GJ,
        handleLabel: fJ,
        format: xJ,
        onChangeStart: rJ,
        onChangeComplete: vJ,
        padStep: mJ,
        disabled: QJ = !1
      } = JJ;
      const EJ = (0, FJ.useRef)(null),
        VJ = (0, FJ.useRef)(null);
      (0, FJ.useLayoutEffect)((() => {
        var JJ, cJ, ZJ;
        const FJ = null !== (JJ = null === (cJ = EJ.current) || void 0 === cJ ? void 0 : cJ.querySelector(".rangeslider")) && void 0 !== JJ ? JJ : null;
        null === FJ || void 0 === FJ || FJ.setAttribute("data-pad-slider", ""), null === FJ || void 0 === FJ || FJ.setAttribute("data-pad-focusable", ""), null === FJ || void 0 === FJ || null === (ZJ = FJ.querySelector(".rangeslider__handle")) || void 0 === ZJ || ZJ.setAttribute("data-pad-slider-handle", ""), VJ.current = FJ
      }), []), (0, FJ.useLayoutEffect)((() => {
        var JJ, cJ;
        QJ ? null === (JJ = VJ.current) || void 0 === JJ || JJ.setAttribute("aria-disabled", "true") : null === (cJ = VJ.current) || void 0 === cJ || cJ.removeAttribute("aria-disabled")
      }), [QJ]);
      const KJ = (null !== (cJ = String(AJ).split(".")[1]) && void 0 !== cJ ? cJ : "").length,
        yJ = JJ => {
          const cJ = Number((Math.round((JJ - eJ) / AJ) * AJ + eJ).toFixed(KJ));
          return Math.min(XJ, Math.max(eJ, cJ))
        },
        SJ = (0, FJ.useRef)(!1);
      return (0, DJ.i)(VJ, {
        adjust: JJ => {
          if (QJ) return;
          const cJ = null !== mJ && void 0 !== mJ ? mJ : Math.max(AJ, Math.round((XJ - eJ) / 20 / AJ) * AJ),
            FJ = yJ(ZJ + JJ * cJ * (YJ ? -1 : 1));
          FJ !== ZJ && (null === rJ || void 0 === rJ || rJ(), qJ(FJ), null === vJ || void 0 === vJ || vJ())
        },
        setFraction: JJ => {
          if (QJ) return;
          const cJ = yJ(eJ + (YJ ? 1 - JJ : JJ) * (XJ - eJ));
          cJ !== ZJ && (SJ.current || (SJ.current = !0, null === rJ || void 0 === rJ || rJ()), qJ(cJ))
        },
        endDrag: () => {
          SJ.current && (SJ.current = !1, null === vJ || void 0 === vJ || vJ())
        }
      }), (0, sJ.jsx)("div", {
        ref: EJ,
        style: {
          display: "contents"
        },
        children: (0, sJ.jsx)(UJ.c, {
          value: ZJ,
          min: eJ,
          max: XJ,
          step: AJ,
          onChange: qJ,
          orientation: jJ,
          reverse: YJ,
          tooltip: nJ,
          labels: GJ,
          handleLabel: fJ,
          format: xJ,
          onChangeStart: () => {
            null === rJ || void 0 === rJ || rJ(), null === hJ || void 0 === hJ || hJ(!0)
          },
          onChangeComplete: () => {
            null === hJ || void 0 === hJ || hJ(!1), null === vJ || void 0 === vJ || vJ()
          }
        })
      })
    }
    async function xJ() {
      let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
      const cJ = YJ.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: "",
        unlockPointerKey: JJ
      });
      !0 === await cJ.getResult() && (0, hJ.reloadBloxd)()
    }

    function rJ(JJ) {
      let {
        label: cJ,
        options: ZJ,
        value: FJ,
        onChange: UJ,
        circleInfoText: eJ
      } = JJ;
      return (0, sJ.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, sJ.jsxs)("div", {
          className: "SliderText",
          children: [cJ, eJ && (0, sJ.jsx)(XJ.e, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: eJ
          })]
        }), (0, sJ.jsx)(AJ.b, {
          ariaLabel: cJ,
          options: ZJ,
          value: FJ,
          onChange: UJ
        })]
      })
    }
  },
  4426: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => XJ
    });
    var FJ = ZJ(926),
      UJ = ZJ.n(FJ),
      eJ = ZJ(990);

    function XJ(JJ) {
      let {
        options: cJ,
        value: ZJ,
        onChange: FJ,
        ariaLabel: XJ
      } = JJ;
      return (0, eJ.jsx)("div", {
        className: "SegmentedToggle",
        role: "group",
        "aria-label": XJ,
        children: cJ.map((JJ => {
          const cJ = JJ.value === ZJ;
          return (0, eJ.jsx)("button", {
            type: "button",
            "aria-pressed": cJ,
            className: UJ()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: cJ
            }),
            onClick: () => {
              cJ || FJ(JJ.value)
            },
            children: JJ.label
          }, JJ.value)
        }))
      })
    }
  },
  7486: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      A: () => sJ,
      B: () => nJ,
      e: () => UJ,
      i: () => eJ,
      k: () => DJ,
      m: () => hJ,
      p: () => jJ,
      t: () => AJ,
      w: () => FJ
    });
    const FJ = ["menuConfirm", "menuBack", "menuTabPrevious", "menuTabNext", "menuPageUp", "menuPageDown", "menuSecondary", "menuToggleCursor"],
      UJ = [{
        group: "gameplay",
        actions: ["jump", "sneak", "sneakToggle", "sprint", "attack", "use", "hotbarPrevious", "hotbarNext", "inventory", "actionButton", "perspective", "Am", "drop", "emoteWheel", "chat", "pause", "leaderboard"]
      }, {
        group: "menu",
        actions: FJ
      }, {
        group: "inventory",
        actions: ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryClose", "inventoryPanelPrevious", "inventoryPanelNext", "inventoryDrop", "inventoryHotbarSwap"]
      }, {
        group: "keyboard",
        actions: ["keyboardType", "keyboardBackspace", "keyboardSpace", "keyboardCaretLeft", "keyboardCaretRight", "keyboardShift", "keyboardSymbols", "keyboardSubmit", "keyboardClose", "keyboardChannel"]
      }],
      eJ = {
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
        Am: "Up",
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
      XJ = ["Am", "perspective"],
      AJ = JJ => XJ.includes(JJ) ? XJ : [JJ],
      qJ = Object.fromEntries(UJ.flatMap((JJ => {
        let {
          group: cJ,
          actions: ZJ
        } = JJ;
        return ZJ.map((JJ => [JJ, cJ]))
      }))),
      jJ = JJ => qJ[JJ],
      YJ = {
        pause: ["menu"],
        leaderboard: ["menu"],
        inventory: ["menu"],
        menuPageUp: ["inventory"],
        menuPageDown: ["inventory"]
      },
      hJ = JJ => {
        var cJ;
        return [jJ(JJ), ...null !== (cJ = YJ[JJ]) && void 0 !== cJ ? cJ : []]
      },
      DJ = new Set(["menu", "inventory", "keyboard"]),
      sJ = {
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
        "mid-fire": "Am",
        OpenInventory: "inventory",
        OpenSettings: "pause",
        OpenLobbyLeaderboard: "leaderboard",
        OpenShop: "leaderboard",
        OpenEmoteWheel: "emoteWheel"
      },
      nJ = new Set(["forward", "backward", "left", "right"])
  },
  7477: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      C: () => vJ,
      E: () => SJ,
      G: () => YJ,
      I: () => yJ,
      L: () => bJ,
      d: () => rJ,
      h: () => QJ,
      j: () => DJ,
      n: () => sJ,
      q: () => WJ,
      r: () => MJ,
      t: () => IJ,
      u: () => mJ,
      w: () => wJ,
      y: () => KJ
    });
    var FJ = ZJ(7486),
      UJ = ZJ(7494),
      eJ = ZJ(7473),
      XJ = ZJ(7515);
    const AJ = JJ => "Am" === JJ ? "perspective" : JJ,
      qJ = (JJ, cJ) => {
        var ZJ;
        const UJ = AJ(cJ);
        return null !== (ZJ = JJ[UJ]) && void 0 !== ZJ ? ZJ : FJ.i[UJ]
      },
      jJ = new Map([
        ["menuConfirm", "menuBack"],
        ["inventoryPrimary", "inventoryClose"],
        ["keyboardType", "keyboardClose"]
      ].flatMap((JJ => {
        let [cJ, ZJ] = JJ;
        return [
          [cJ, ZJ],
          [ZJ, cJ]
        ]
      }))),
      YJ = (JJ, cJ) => null !== JJ && void 0 !== JJ ? JJ : "nintendo" === cJ,
      hJ = JJ => YJ((0, UJ.k)().swapConfirmBack, (0, UJ.l)()) && jJ.get(JJ) || JJ,
      DJ = JJ => qJ((0, UJ.k)().Zn, hJ(JJ)),
      sJ = JJ => FJ.i[hJ(JJ)],
      nJ = Object.keys(FJ.i),
      GJ = JJ => "gameplay" === (0, FJ.p)(JJ) ? ["gameplay"] : (0, FJ.m)(JJ),
      fJ = (JJ, cJ) => {
        const ZJ = GJ(cJ);
        return GJ(JJ).some((JJ => ZJ.includes(JJ)))
      },
      xJ = (JJ, cJ, ZJ) => {
        const UJ = qJ(JJ, cJ),
          XJ = new Set((0, FJ.t)(cJ)),
          jJ = [...XJ];
        for (let FJ = jJ.pop(); FJ; FJ = jJ.pop())
          for (const cJ of nJ) {
            const eJ = qJ(JJ, cJ);
            XJ.has(cJ) || eJ !== ZJ && eJ !== UJ || !fJ(FJ, cJ) || (XJ.add(cJ), jJ.push(cJ))
          }
        const YJ = {
          ...JJ
        };
        for (const hJ of XJ) {
          const cJ = qJ(JJ, hJ) === UJ ? ZJ : UJ,
            XJ = (0, FJ.m)(hJ).some((JJ => FJ.k.has(JJ)));
          if ((0, eJ.G)(cJ) && XJ) return null;
          YJ[AJ(hJ)] = cJ
        }
        for (const eJ of Object.keys(YJ)) YJ[eJ] === FJ.i[eJ] && delete YJ[eJ];
        return YJ
      },
      rJ = (JJ, cJ) => null !== xJ((0, UJ.k)().Zn, hJ(JJ), cJ),
      vJ = (JJ, cJ) => {
        if (DJ(JJ) === cJ) return !0;
        const ZJ = xJ((0, UJ.k)().Zn, hJ(JJ), cJ);
        return !!ZJ && ((0, UJ.m)({
          Zn: ZJ
        }), !0)
      },
      mJ = (JJ, cJ) => {
        const ZJ = (0, FJ.t)(cJ);
        return nJ.filter((cJ => AJ(cJ) === cJ && !ZJ.includes(cJ) && qJ(JJ, hJ(cJ)) !== DJ(cJ)))
      },
      QJ = ["southpaw", "triggersSwapped"],
      EJ = {
        southpaw: {
          sprint: "RS",
          sneakToggle: "LS"
        },
        triggersSwapped: {
          attack: "LT",
          use: "RT"
        }
      },
      VJ = JJ => Object.keys(EJ[JJ]),
      KJ = (JJ, cJ) => "southpaw" === JJ ? cJ.swapSticks : VJ(JJ).every((ZJ => qJ(cJ.Zn, ZJ) === EJ[JJ][ZJ])),
      yJ = (JJ, cJ) => {
        const ZJ = (0, UJ.k)();
        let eJ = ZJ.Zn;
        for (const UJ of VJ(JJ)) {
          const ZJ = cJ ? EJ[JJ][UJ] : FJ.i[UJ];
          if (eJ = xJ(eJ, UJ, ZJ), !eJ) return !1
        }
        return (0, UJ.m)({
          swapSticks: "southpaw" === JJ ? cJ : ZJ.swapSticks,
          Zn: eJ
        }), !0
      },
      SJ = () => {
        (0, UJ.m)({
          swapSticks: !1,
          Zn: {}
        })
      },
      IJ = () => (0, UJ.k)().swapSticks ? "RightStick" : "LeftStick",
      MJ = () => (0, UJ.k)().swapSticks ? "LeftStick" : "RightStick",
      bJ = JJ => (0, UJ.k)().swapSticks && (0, eJ.G)(JJ),
      wJ = JJ => bJ(JJ) ? IJ() : MJ(),
      WJ = JJ => {
        if (FJ.B.has(JJ)) return IJ();
        const cJ = FJ.A[JJ];
        return cJ && ("leaderboard" !== cJ || (0, XJ.h)(JJ, (0, XJ.e)())) ? DJ(cJ) : null
      }
  },
  7463: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      ControllerCategory: () => qq,
      ControllerGlyph: () => mF,
      ControllerRoot: () => qA,
      PadLobbyShortcuts: () => KA,
      PadSneakChip: () => GA,
      PadTooltip: () => xA,
      attachPressToContinue: () => gA,
      getBoundButton: () => YJ.j,
      getControllerSettings: () => DJ.k,
      getGlyphForNoaAction: () => YJ.q,
      getInventoryCursorState: () => Yq,
      getMenuShortcutButton: () => iU,
      getPadGlyphIconName: () => DA,
      getPadGlyphIconUrl: () => sA,
      getPadRepeatTiming: () => GJ.f,
      hasActivePad: () => jq,
      isPadSteppingSlots: () => hq
    });
    const FJ = JSON.parse('{"controller":{"inventoryTake":"Take","inventoryTakeHalf":"Take half","inventoryPlace":"Place","inventoryPlaceOne":"Place one","inventoryQuickMove":"Quick move","inventoryToHotbar":"To hotbar","inventoryPutBack":"Put back","inventoryHotbarSwap":"Swap with hotbar","inventorySwapHere":"Swap here","inventoryCancel":"Cancel","inventoryClose":"Close","inventoryDrop":"Drop (hold: stack)","inventorySelect":"Select","inventoryCraft":"Craft (hold to repeat)","inventoryCraftAll":"Craft all","inventoryChooseRecipe":"Choose","inventoryBackToRecipes":"Back to recipes","inventoryType":"Type","inventoryPanels":"Switch panel","inventoryCategory":"Category","inventoryPage":"Page","disconnected":"Controller disconnected","gameplayReload":"Reload","gameplayActionWheelHint":"(hold for more)","gameplaySneaking":"Sneaking","gameplayLoadFailedTitle":"Controller unavailable","gameplayLoadFailedSubtitle":"Reload the page to play with your controller.","gameplayDropStack":"Keep holding to drop the stack","gameplayAttackLatched":"Attacking","gameplayPickBlock":"Pick block","padButtonView":"View","padButtonMenu":"Menu","padButtonHome":"Home","padButtonCreate":"Create","padButtonOptions":"Options","padButtonDpadUp":"D-pad \u2191","padButtonDpadDown":"D-pad \u2193","padButtonDpadLeft":"D-pad \u2190","padButtonDpadRight":"D-pad \u2192","padButtonLeftStick":"L Stick","padButtonRightStick":"R Stick","settingsLook":"Look","settingsLookSensitivityX":"Look sensitivity (horizontal)","settingsLookSensitivityY":"Look sensitivity (vertical)","settingsAimLookSensitivity":"Look sensitivity while aiming (use held)","settingsInvertLookX":"Invert horizontal look","settingsInvertLookY":"Invert vertical look","settingsLookCurve":"Look curve","settingsLookCurveHint":"Steep gives finer aim near the centre, Linear turns at an even rate, and Boost turns faster when you hold the stick all the way.","settingsCurveExponential":"Steep","settingsCurveLinear":"Linear","settingsCurveBoost":"Boost","settingsLookDeadzone":"Look deadzone","settingsGyro":"Gyro aiming","settingsGyroToggle":"Aim by moving the controller","settingsGyroToggleInfo":"Turn and tilt the controller to aim, on top of the right stick.","settingsGyroTogglePhone":"Aim by moving your phone or tablet","settingsGyroToggleInfoPhone":"Turn and tilt your phone or tablet to aim, on top of the right stick.","settingsGyroUnsupported":"Gyro aiming needs Chrome or Edge.","settingsGyroBlocked":"Gyro aiming isn\'t available on this site.","settingsGyroPhoneNeedsController":"Connect a controller to aim by moving your phone or tablet.","settingsGyroSteamHint":"If Steam already turns your gyro into mouse movement, leave this off.","settingsGyroConnect":"Connect motion controller","settingsGyroConnectHint":"Works with DualSense, DualShock 4 and Switch controllers.","settingsGyroConnectNeedsClick":"Click Connect with your mouse: the browser asks before sharing a controller.","settingsGyroOpenFailed":"Another app is using the controller. Close apps such as Steam or DS4Windows, then try again.","settingsGyroConnected":"Aiming with {{name}}.","settingsGyroAllowMotion":"Allow motion sensor","settingsGyroAllowNeedsTap":"Tap Allow motion sensor on your screen to turn it on.","settingsGyroPhoneOn":"Aiming with this device\'s motion sensor.","settingsGyroPhoneWaiting":"Waiting for this device\'s motion sensor\u2026","settingsGyroPhoneNoSensor":"No motion sensor found on this device.","settingsGyroPhoneDenied":"Motion access is blocked. Allow it in your browser settings.","settingsGyroSensitivity":"Gyro sensitivity","settingsGyroActivation":"Gyro turns on","settingsGyroAlways":"Always","settingsGyroWhileAiming":"While aiming","settingsGyroWhileButton":"While holding a button","settingsGyroAimingHint":"Hold {{button}} to aim with motion.","settingsGyroButton":"Gyro button","settingsGyroButtonHint":"While gyro aiming is on, this button only turns the gyro on in game, so pick one you rarely use.","settingsMovement":"Movement","settingsMoveDeadzone":"Move deadzone","settingsAutoSprint":"Sprint at full tilt","settingsAutoSprintInfo":"Push the movement stick all the way to sprint.","settingsSneak":"Sneak","settingsSneakHold":"Hold","settingsSneakToggle":"Toggle","settingsButtons":"Buttons","settingsPromptFamily":"Button prompts","settingsPromptAuto":"Match my controller","settingsPromptXbox":"Xbox","settingsPromptPlayStation":"PlayStation","settingsPromptNintendo":"Nintendo","settingsPromptSteamDeck":"Steam Deck","settingsPromptGeneric":"Generic","settingsHideButtonHints":"Hide button hints","settingsVibration":"Vibration","settingsCursorSpeed":"Virtual cursor speed","settingsCursorMagnetism":"Cursor snaps onto buttons","settingsMenuBackToCategories":"Back returns to the category list first","settingsAccessibility":"Accessibility","settingsSwapConfirmBack":"Swap confirm and back","settingsSwapToast":"Select and Back have swapped buttons.","settingsLayoutRefusedToast":"This layout doesn\'t fit your current buttons. Reset them to use it.","settingsSwapConfirmBackInfo":"Select with the right face button and go back with the bottom one, in menus, the inventory and the on-screen keyboard. On by default for Nintendo controllers.","settingsButtonRepeat":"Button repeat","settingsButtonRepeatHint":"How a held button repeats in menus, sliders, the on-screen keyboard and crafting. Off acts once per press, and holding drop in game drops just one item.","settingsButtonRepeatDefault":"Default","settingsButtonRepeatSlow":"Slow (0.8 s, then 4 a second)","settingsButtonRepeatOff":"Off (once per press)","settingsTapHoldTime":"Tap/hold time","settingsTapHoldTimeHint":"How long to hold the chat, emote or action button to open its wheel, or the view button to change view where a tap picks a block. Dropping a whole stack takes 0.8, 1 or 1.3 s.","settingsTapHoldShort":"Short (0.25 s)","settingsTapHoldMedium":"Medium (0.5 s)","settingsTapHoldLong":"Long (0.8 s)","settingsEmoteButton":"Emote button","settingsEmoteButtonTapHoldHint":"Tap to repeat your last emote, or hold to open the emote wheel.","settingsEmoteButtonWheelHint":"Any press opens the emote wheel, with no hold to time. Pick with the stick, then select.","settingsEmoteButtonTapHold":"Tap repeats, hold opens wheel","settingsEmoteButtonWheel":"Opens the wheel","settingsAttackMode":"Attack / mine","settingsAttackHoldHint":"Hold attack to keep attacking or mining.","settingsAttackToggleHint":"Press attack once to keep attacking or mining, and again to stop.","settingsAttackHold":"Hold","settingsAttackToggle":"Toggle","settingsLargePointer":"Large pointer and focus","settingsLargePointerInfo":"A bigger menu cursor, thicker selection brackets and bigger button hints.","settingsRemap":"Remap buttons","settingsRemapHint":"Select an action, then press a button. If that button is taken, the two swap.","settingsLayoutSouthpaw":"Southpaw (move with the right stick)","settingsLayoutTriggersSwapped":"Triggers swapped (attack with the left trigger)","settingsCapturePrompt":"Press a button","settingsCaptureCancelHint":"Press {{button}} to cancel","settingsCaptureCancelOrBindHint":"Tap {{button}} to cancel, or hold it to choose it","settingsReset":"Reset","settingsSwapNotice":"{{action}} moved to {{button}}","settingsResetAll":"Reset all buttons and sticks","settingsGroupGameplay":"Movement & gameplay","settingsGroupMenus":"Menus","settingsGroupInventory":"Inventory","settingsGroupKeyboard":"On-screen keyboard","settingsActionMove":"Move","settingsActionLook":"Look around","settingsActionJump":"Jump","settingsActionSneak":"Sneak","settingsActionSneakToggle":"Toggle sneak","settingsActionSprint":"Sprint","settingsActionAttack":"Attack / mine","settingsActionUse":"Use / place","settingsActionHotbarPrevious":"Previous hotbar slot","settingsActionHotbarNext":"Next hotbar slot","settingsActionInventory":"Inventory","settingsActionActionButton":"Game action","settingsActionPerspective":"Change view","settingsActionPickBlock":"Pick block (creative)","settingsActionDrop":"Drop item","settingsActionEmoteWheel":"Emotes","settingsActionChat":"Chat","settingsActionPause":"Pause menu","settingsActionLeaderboard":"Shop / leaderboard","settingsActionMenuConfirm":"Select","settingsActionMenuBack":"Back","settingsActionMenuTabPrevious":"Previous tab","settingsActionMenuTabNext":"Next tab","settingsActionMenuPageUp":"Page up","settingsActionMenuPageDown":"Page down","settingsActionMenuSecondary":"Secondary action","settingsActionMenuToggleCursor":"Switch to virtual cursor","settingsActionInventoryPrimary":"Pick up / place","settingsActionInventorySecondary":"Pick up half / place one","settingsActionInventoryQuickMove":"Quick move","settingsActionInventoryHotbarSwap":"Swap with hotbar slot","settingsActionInventoryClose":"Close","settingsActionInventoryPanelPrevious":"Previous panel","settingsActionInventoryPanelNext":"Next panel","settingsActionInventoryDrop":"Drop item","settingsActionKeyboardType":"Type key","settingsActionKeyboardBackspace":"Backspace","settingsActionKeyboardSpace":"Space","settingsActionKeyboardCaretLeft":"Move cursor left","settingsActionKeyboardCaretRight":"Move cursor right","settingsActionKeyboardShift":"Shift","settingsActionKeyboardSymbols":"Accents and symbols","settingsActionKeyboardSubmit":"Send","settingsActionKeyboardClose":"Close keyboard","settingsActionKeyboardChannel":"Chat channel","settingsAlternatives":"Try alternatives","settingsAlternativesHint":"Try each way of playing and keep the one that feels best.","settingsMenuNavigation":"Menu navigation","settingsMenuNavigationHint":"Steer a cursor with the stick and jump between buttons with the D-pad, or use just one.","settingsNavHybrid":"Cursor and D-pad","settingsMenuNavFocus":"Jump between buttons","settingsVirtualCursor":"Virtual cursor","settingsInventoryNavigation":"Inventory","settingsInventoryNavigationHint":"Steer a cursor with the stick and step slot by slot with the D-pad, or use just one.","settingsInventoryNavSlot":"Slot by slot","settingsQuickChat":"Hold chat button","settingsQuickChatHint":"Hold the chat button to pick a quick phrase. Tapping it still opens chat.","settingsQuickChatWheel":"Quick chat wheel","settingsQuickChatOff":"Off","settingsLeaderboardButton":"Shop / leaderboard button","settingsLeaderboardButtonHint":"Open the shop in one press in games that have one. The lobby leaderboard is still in the pause menu.","settingsLeaderboardButtonShop":"Shop, in games with one","settingsLeaderboardButtonLeaderboard":"Always the leaderboard","settingsTester":"Gamepad tester","settingsTesterNoPad":"Connect a gamepad and press any button to test it.","settingsTesterFamily":"Detected: {{family}}","settingsTesterHint":"Start a test to try every button and stick without moving through the menu.","settingsTesterStart":"Start test","settingsTesterStop":"Stop test","settingsTesterTesting":"Press anything to see it light up. To stop, hold {{button}} or press it three times.","settingsControlsNote":"Playing with a gamepad? Change its buttons and feel in Gamepad settings.","settingsOpenController":"Gamepad settings","keyboardSpace":"Space","keyboardSend":"Send","keyboardDone":"Done","keyboardTargetChat":"Chat","keyboardTargetSign":"Sign","keyboardTargetNameTag":"Name tag","keyboardTargetBook":"Book page","keyboardTargetBookTitle":"Book title","keyboardTargetText":"Text","keyboardPhraseGg":"gg","keyboardPhraseHi":"hi","keyboardPhraseThanks":"thanks","keyboardPhraseGl":"gl","keyboardPhraseBrb":"brb","keyboardPhraseYes":"yes","keyboardPhraseNo":"no","keyboardPhraseHelp":"help!","quickChatPick":"Pick a phrase","actionWheelPick":"Pick an action","wheelReleaseToPick":"Release to pick","wheelClose":"Close","wheelChoose":"Choose","menusSelect":"Select","menusBack":"Back","menusClose":"Close","menusQuickChat":"Quick chat (hold)","menusSkipTutorial":"Skip tutorial","menusTabs":"Tabs","menusRows":"Rows","menusCursorMode":"Cursor","menusFocusMode":"Focus","menusClick":"Click","menusRightClick":"Right-click","menusScroll":"Scroll","menusFriends":"Friends","menusSearch":"Search","menusSettings":"Settings","menusLeaveGameTitle":"Leave the game?","menusLeaveGameLeave":"Leave","menusLeaveGameStay":"Stay","menusNotifications":"Notifications","menusLobby":"Lobby","menusShop":"Shop","menusTasks":"Tasks & leaderboards","menusInvite":"Invite friends","menusAdjust":"Adjust","menusFavourite":"Favourite","screensPressToContinue":"Press {{button}} to continue","screensPressToEnterGame":"Press {{button}} to enter game","screensEnterGame":"Enter game","screensBackToGames":"Back to games","tutorialMine":"Mine","tutorialPlace":"Place / Use","tutorialInventory":"Inventory","tutorialPause":"Pause","menusUseMouse":"Use a mouse or touch here"}}');
    var UJ = ZJ(1086),
      eJ = ZJ(1300),
      XJ = ZJ(7465),
      AJ = ZJ(60),
      qJ = ZJ(13),
      jJ = ZJ(17),
      YJ = ZJ(7477),
      hJ = ZJ(7517),
      DJ = ZJ(7494),
      sJ = ZJ(7525),
      nJ = ZJ(7473),
      GJ = ZJ(7963),
      fJ = ZJ(7972),
      xJ = ZJ(1560);
    const rJ = (JJ, cJ, ZJ) => Math.max(cJ, Math.min(ZJ, JJ)),
      vJ = JJ => Math.min(JJ.width, JJ.height) / 720,
      mJ = JJ => Math.max(.15, JJ);
    class QJ {
      constructor() {
        this.locked = !1
      }
      lock() {
        this.locked = !0
      }
      update(JJ, cJ) {
        const ZJ = Math.hypot(JJ.x, JJ.y) >= (JJ => Math.max(.3, JJ))(cJ);
        return this.locked ? (this.locked = ZJ, !1) : ZJ
      }
    }
    const EJ = (JJ, cJ) => {
        const ZJ = rJ(cJ.dtMs, 0, 100),
          FJ = ZJ / 1e3,
          UJ = vJ(cJ.viewport) * (cJ.cursorSpeedPercent / 100),
          eJ = (0, nJ.m)(cJ.stick, mJ(cJ.moveDeadzone)),
          XJ = Math.hypot(eJ.x, eJ.y),
          AJ = ((JJ, cJ, ZJ) => {
            if (cJ < .3) return 0;
            const FJ = ZJ / 350;
            return cJ >= .85 ? Math.min(1, JJ + FJ) : Math.max(0, JJ - FJ)
          })(JJ.speedRamp, XJ, ZJ);
        let qJ = JJ.x,
          jJ = JJ.y;
        if (XJ > 0) {
          const JJ = .45 + .55 * AJ,
            ZJ = cJ.context.overInteractive ? .45 : 1,
            YJ = 1400 * (JJ => {
              const cJ = rJ(JJ, 0, 1);
              return .3 * cJ + .7 * cJ * cJ
            })(XJ) * UJ * JJ * ZJ;
          qJ += eJ.x / XJ * YJ * FJ, jJ += eJ.y / XJ * YJ * FJ
        }
        const YJ = Math.hypot(cJ.dpad.x, cJ.dpad.y);
        if (YJ > 0) {
          const JJ = 500 * UJ;
          qJ += cJ.dpad.x / YJ * JJ * FJ, jJ += cJ.dpad.y / YJ * JJ * FJ
        }
        const hJ = cJ.context.magnetTarget;
        if (hJ && XJ < .3 && 0 === YJ) {
          const JJ = ((JJ, cJ, ZJ, FJ, UJ) => {
            const eJ = cJ.x - JJ.x,
              XJ = cJ.y - JJ.y,
              AJ = Math.hypot(eJ, XJ);
            if (0 === AJ) return {
              x: 0,
              y: 0
            };
            const qJ = Math.min(AJ, UJ * (1 - FJ / .3));
            let jJ = eJ / AJ * qJ,
              YJ = XJ / AJ * qJ;
            if (FJ > 0) {
              const JJ = ZJ.x / FJ,
                cJ = ZJ.y / FJ,
                UJ = jJ * JJ + YJ * cJ;
              UJ < 0 && (jJ -= UJ * JJ, YJ -= UJ * cJ)
            }
            return {
              x: jJ,
              y: YJ
            }
          })({
            x: qJ,
            y: jJ
          }, hJ, eJ, XJ, 120 * vJ(cJ.viewport) * FJ);
          qJ += JJ.x, jJ += JJ.y
        }
        return {
          x: rJ(qJ, 0, Math.max(0, cJ.viewport.width - 1)),
          y: rJ(jJ, 0, Math.max(0, cJ.viewport.height - 1)),
          speedRamp: AJ
        }
      },
      VJ = JJ => {
        const cJ = (0, nJ.m)(JJ, .2);
        return 0 !== cJ.x || 0 !== cJ.y
      },
      KJ = (JJ, cJ) => {
        const ZJ = (0, nJ.m)(JJ, .2),
          FJ = Math.hypot(ZJ.x, ZJ.y);
        if (0 === FJ) return {
          x: 0,
          y: 0
        };
        const UJ = FJ * FJ * 1600,
          eJ = rJ(cJ, 0, 100) / 1e3;
        return {
          x: ZJ.x / FJ * UJ * eJ,
          y: ZJ.y / FJ * UJ * eJ
        }
      },
      yJ = (JJ, cJ) => "y" === cJ ? JJ.scrollHeight > JJ.clientHeight + 1 : JJ.scrollWidth > JJ.clientWidth + 1,
      SJ = (JJ, cJ) => {
        if (!yJ(JJ, cJ)) return !1;
        const ZJ = getComputedStyle(JJ),
          FJ = "y" === cJ ? ZJ.overflowY : ZJ.overflowX;
        return "auto" === FJ || "scroll" === FJ
      },
      IJ = (JJ, cJ, ZJ) => {
        for (let eJ = JJ instanceof HTMLElement ? JJ : null !== (FJ = null === JJ || void 0 === JJ ? void 0 : JJ.parentElement) && void 0 !== FJ ? FJ : null; eJ; eJ = eJ.parentElement) {
          var FJ;
          if (SJ(eJ, cJ)) return eJ;
          if (eJ === ZJ) return null
        }
        if (ZJ) return null;
        const UJ = document.scrollingElement;
        return UJ instanceof HTMLElement && yJ(UJ, cJ) ? UJ : null
      },
      MJ = new WeakMap,
      bJ = (JJ, cJ) => {
        const ZJ = performance.now(),
          FJ = MJ.get(JJ);
        if (FJ && FJ.axis === cJ && ZJ - FJ.atMs < 500 && (!FJ.container || FJ.container.isConnected)) return FJ.container;
        const UJ = wJ(JJ, cJ);
        return MJ.set(JJ, {
          axis: cJ,
          atMs: ZJ,
          container: UJ
        }), UJ
      },
      wJ = (JJ, cJ) => {
        let ZJ = SJ(JJ, cJ) ? JJ : null,
          FJ = ZJ ? ZJ.clientWidth * ZJ.clientHeight : 0;
        for (const UJ of JJ.querySelectorAll("*")) {
          const JJ = UJ.clientWidth * UJ.clientHeight;
          JJ > FJ && SJ(UJ, cJ) && (ZJ = UJ, FJ = JJ)
        }
        return ZJ
      },
      WJ = (JJ, cJ, ZJ) => "y" === cJ ? ZJ < 0 ? JJ.scrollTop > 0 : JJ.scrollTop + JJ.clientHeight < JJ.scrollHeight - 1 : ZJ < 0 ? JJ.scrollLeft > 0 : JJ.scrollLeft + JJ.clientWidth < JJ.scrollWidth - 1,
      gJ = (JJ, cJ, ZJ) => {
        "y" === cJ ? JJ.scrollBy({
          top: ZJ,
          behavior: "instant"
        }) : JJ.scrollBy({
          left: ZJ,
          behavior: "instant"
        })
      },
      HJ = JJ => {
        if (!JJ || JJ === document.scrollingElement) return new DOMRect(0, 0, window.innerWidth, window.innerHeight);
        const cJ = JJ.getBoundingClientRect(),
          ZJ = Math.max(0, cJ.left),
          FJ = Math.max(0, cJ.top);
        return new DOMRect(ZJ, FJ, Math.min(window.innerWidth, cJ.right) - ZJ, Math.min(window.innerHeight, cJ.bottom) - FJ)
      },
      PJ = (JJ, cJ) => JJ.left < cJ.right && cJ.left < JJ.right && JJ.top < cJ.bottom && cJ.top < JJ.bottom;
    var kJ = ZJ(47),
      pJ = ZJ(926),
      dJ = ZJ.n(pJ),
      zJ = ZJ(990);
    let NJ = 0,
      OJ = !1;
    class TJ {
      constructor() {
        this.element = null, this.shownKey = "", this.gap = null
      }
      setElement(JJ) {
        this.element = JJ, this.shownKey = "", this.gap = null
      }
      show(JJ) {
        const cJ = this.element;
        if (!cJ) return;
        const ZJ = JJ ? this.keepOnScreen(cJ, JJ) : null,
          FJ = ZJ ? `${ZJ.left},${ZJ.top},${ZJ.width},${ZJ.height}` : "";
        if (FJ === this.shownKey) return;
        const UJ = "" === this.shownKey;
        this.shownKey = FJ, cJ.classList.toggle("Visible", null !== ZJ), ZJ && (cJ.classList.toggle("Snap", UJ), cJ.style.width = `${ZJ.width}px`, cJ.style.height = `${ZJ.height}px`, cJ.style.transform = `translate(${ZJ.left}px, ${ZJ.top}px)`, UJ && (cJ.offsetWidth, cJ.classList.remove("Snap")))
      }
      hide() {
        this.show(null)
      }
      keepOnScreen(JJ, cJ) {
        var ZJ;
        const FJ = `${window.innerWidth}x${window.innerHeight}@${(()=>{if("undefined"===typeof ResizeObserver)return getComputedStyle(document.documentElement).fontSize;if(!OJ){OJ=!0;const JJ=document.createElement("div");JJ.setAttribute("aria-hidden","true"),JJ.style.cssText="position: fixed; top: 0; left: 0; width: 1rem; height: 0; visibility: hidden; pointer-events: none",document.body.appendChild(JJ),new ResizeObserver((()=>{NJ++})).observe(JJ)}return String(NJ)})()}`;
        (null === (ZJ = this.gap) || void 0 === ZJ ? void 0 : ZJ.key) !== FJ && (this.gap = {
          px: parseFloat(getComputedStyle(JJ).paddingLeft) || 0,
          key: FJ
        });
        const UJ = this.gap.px + 2,
          eJ = Math.max(cJ.left, UJ),
          XJ = Math.max(cJ.top, UJ),
          AJ = Math.min(cJ.left + cJ.width, window.innerWidth - UJ),
          qJ = Math.min(cJ.top + cJ.height, window.innerHeight - UJ);
        return AJ <= eJ || qJ <= XJ ? cJ : {
          left: eJ,
          top: XJ,
          width: AJ - eJ,
          height: qJ - XJ
        }
      }
    }
    const CJ = JJ => {
      let {
        placer: cJ,
        className: ZJ
      } = JJ;
      const FJ = (0, kJ.useCallback)((JJ => {
        cJ.setElement(JJ)
      }), [cJ]);
      return (0, zJ.jsx)("div", {
        ref: FJ,
        className: dJ()("PadReticle", ZJ),
        "aria-hidden": !0
      })
    };
    var uJ = ZJ(7977),
      iJ = ZJ(1603);
    const RJ = JJ => JJ >= 56320 && JJ <= 57343,
      LJ = JJ => JJ >= 55296 && JJ <= 56319,
      aJ = (JJ, cJ) => cJ >= 2 && RJ(JJ.charCodeAt(cJ - 1)) && LJ(JJ.charCodeAt(cJ - 2)) ? cJ - 2 : Math.max(0, cJ - 1),
      BJ = (JJ, cJ) => {
        let ZJ;
        var FJ, UJ;
        return ZJ = JJ.start !== JJ.end ? cJ < 0 ? JJ.start : JJ.end : cJ < 0 ? aJ(JJ.value, JJ.start) : (FJ = JJ.value, (UJ = JJ.start) + 1 < FJ.length && LJ(FJ.charCodeAt(UJ)) && RJ(FJ.charCodeAt(UJ + 1)) ? UJ + 2 : Math.min(FJ.length, UJ + 1)), {
          value: JJ.value,
          start: ZJ,
          end: ZJ
        }
      },
      tJ = ["text", "search", "url", "email", "tel", "password", "number"],
      oJ = JJ => !(!(0, iJ.d)(JJ) || JJ.isContentEditable || JJ.hasAttribute("data-pad-no-osk")) && (JJ instanceof HTMLTextAreaElement || JJ instanceof HTMLInputElement && tJ.includes(JJ.type)),
      lJ = JJ => null !== JJ.selectionStart,
      Jc = JJ => {
        var cJ, ZJ;
        const {
          value: FJ
        } = JJ;
        return {
          value: FJ,
          start: null !== (cJ = JJ.selectionStart) && void 0 !== cJ ? cJ : FJ.length,
          end: null !== (ZJ = JJ.selectionEnd) && void 0 !== ZJ ? ZJ : FJ.length
        }
      },
      cc = (JJ, cJ, ZJ) => {
        if (JJ.readOnly) return;
        const FJ = JJ instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
        Object.getOwnPropertyDescriptor(FJ, "value").set.call(JJ, cJ.value), lJ(JJ) && JJ.setSelectionRange(cJ.start, cJ.end), (0, xJ.e)(JJ, new InputEvent("input", {
          bubbles: !0,
          inputType: ZJ
        }))
      };
    let Zc = !1;
    const Fc = (JJ, cJ) => !!document.execCommand(JJ, !1, cJ) || (Zc || (Zc = !0, console.warn(`execCommand("${JJ}") failed; the on-screen keyboard is setting the value directly`)), !1),
      Uc = (JJ, cJ) => {
        Fc("insertText", cJ) || cc(JJ, function(JJ, cJ) {
          let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
          const FJ = JJ.value.slice(0, JJ.start),
            UJ = JJ.value.slice(JJ.end);
          let eJ = ZJ < 0 ? cJ.length : Math.max(0, ZJ - FJ.length - UJ.length);
          eJ > 0 && eJ < cJ.length && LJ(cJ.charCodeAt(eJ - 1)) && eJ--;
          const XJ = cJ.slice(0, eJ),
            AJ = FJ.length + XJ.length;
          return {
            value: FJ + XJ + UJ,
            start: AJ,
            end: AJ
          }
        }(Jc(JJ), cJ, JJ.maxLength), "insertText")
      },
      ec = JJ => {
        Fc("delete") || cc(JJ, (JJ => {
          const cJ = JJ.start === JJ.end ? aJ(JJ.value, JJ.start) : JJ.start;
          return {
            value: JJ.value.slice(0, cJ) + JJ.value.slice(JJ.end),
            start: cJ,
            end: cJ
          }
        })(Jc(JJ)), "deleteContentBackward")
      },
      Xc = (JJ, cJ) => {
        if (!lJ(JJ)) return;
        const ZJ = BJ(Jc(JJ), cJ);
        JJ.setSelectionRange(ZJ.start, ZJ.end)
      },
      Ac = ["button", "a[href]", "input:not([type=hidden])", "textarea", "select", "[role=button]", "[role=tab]", "[role=switch]", "[role=checkbox]", "[role=option]", "[role=menuitem]", "[data-pad-focusable]", "[data-pad-tab]", ".Dropdown-control", ".Dropdown-option"].join(","),
      qc = (JJ, cJ) => {
        if ("function" === typeof JJ.checkVisibility) return !JJ.checkVisibility({
          visibilityProperty: !0,
          checkVisibilityCSS: !0,
          opacityProperty: cJ,
          checkOpacity: cJ
        });
        const {
          visibility: ZJ
        } = getComputedStyle(JJ);
        if ("hidden" === ZJ || "collapse" === ZJ) return !0;
        if (!cJ) return !1;
        for (let FJ = JJ; FJ; FJ = FJ.parentElement)
          if ("0" === getComputedStyle(FJ).opacity) return !0;
        return !1
      },
      jc = JJ => {
        if (!JJ.isConnected || qc(JJ, !0)) return !1;
        const cJ = JJ.getBoundingClientRect();
        return cJ.width > 0 && cJ.height > 0
      },
      Yc = JJ => !!JJ.matches(":disabled, [aria-disabled='true']") || "button" === JJ.getAttribute("role") && "-1" === JJ.getAttribute("tabindex"),
      hc = JJ => {
        var cJ;
        if (JJ.closest("[data-pad-ignore]")) return !0;
        return !!(null === (cJ = JJ.parentElement) || void 0 === cJ ? void 0 : cJ.closest("[data-pad-focusable]"))
      },
      Dc = JJ => {
        const cJ = JJ.querySelectorAll(Ac);
        return JJ.matches(Ac) ? [JJ, ...cJ] : cJ
      },
      sc = JJ => {
        const cJ = [];
        for (const ZJ of Dc(JJ)) !hc(ZJ) && jc(ZJ) && cJ.push(ZJ);
        return cJ
      },
      nc = new WeakMap,
      Gc = JJ => {
        const cJ = nc.get(JJ);
        if (cJ && fc(cJ, JJ)) return !0;
        for (const ZJ of Dc(JJ))
          if (!hc(ZJ) && jc(ZJ)) return nc.set(JJ, ZJ), !0;
        return nc.delete(JJ), !1
      },
      fc = (JJ, cJ) => cJ.contains(JJ) && JJ.matches(Ac) && !hc(JJ) && jc(JJ),
      xc = (JJ, cJ) => fc(JJ, cJ) && !Yc(JJ),
      rc = JJ => {
        const cJ = cJ => {
          let ZJ = 0;
          for (let FJ = cJ.parentElement; FJ && FJ !== JJ; FJ = FJ.parentElement) ZJ++;
          return ZJ
        };
        return [...JJ.querySelectorAll("[data-pad-initial-area]")].filter(jc).sort(((JJ, ZJ) => cJ(ZJ) - cJ(JJ)))
      },
      vc = JJ => oJ(JJ),
      mc = JJ => {
        const cJ = JJ.getBoundingClientRect();
        return {
          x: cJ.left + cJ.width / 2,
          y: cJ.top + cJ.height / 2
        }
      },
      Qc = (JJ, cJ, ZJ) => ({
        bubbles: !0,
        cancelable: !0,
        composed: !0,
        view: window,
        clientX: JJ.x,
        clientY: JJ.y,
        screenX: JJ.x,
        screenY: JJ.y,
        button: cJ,
        buttons: ZJ,
        pointerId: 1,
        pointerType: "mouse",
        isPrimary: !0
      }),
      Ec = (JJ, cJ) => {
        (0, xJ.e)(JJ, cJ)
      },
      Vc = function(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const FJ = 0 === ZJ ? 1 : 2;
        Ec(JJ, new PointerEvent("pointerdown", Qc(cJ, ZJ, FJ))), Ec(JJ, new MouseEvent("mousedown", Qc(cJ, ZJ, FJ)))
      },
      Kc = function(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        Ec(JJ, new PointerEvent("pointerup", Qc(cJ, ZJ, 0))), Ec(JJ, new MouseEvent("mouseup", Qc(cJ, ZJ, 0)))
      },
      yc = function(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        Vc(JJ, cJ, ZJ), Kc(JJ, cJ, ZJ), Ec(JJ, 0 === ZJ ? new MouseEvent("click", Qc(cJ, 0, 0)) : new MouseEvent("contextmenu", Qc(cJ, 2, 0)))
      },
      Sc = function(JJ, cJ, ZJ) {
        let {
          leaveBelow: FJ = null,
          enterBelow: UJ = null
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (JJ !== cJ) {
          if (null !== JJ && void 0 !== JJ && JJ.isConnected) {
            const UJ = {
              ...Qc(ZJ, 0, 0),
              relatedTarget: cJ
            };
            Ec(JJ, new PointerEvent("pointerout", UJ)), Ec(JJ, new MouseEvent("mouseout", UJ));
            const eJ = JJ => !!cJ && JJ.contains(cJ) || !!FJ && JJ.contains(FJ);
            for (let cJ = JJ; cJ && !eJ(cJ); cJ = cJ.parentElement) Ec(cJ, new PointerEvent("pointerleave", {
              ...UJ,
              bubbles: !1
            })), Ec(cJ, new MouseEvent("mouseleave", {
              ...UJ,
              bubbles: !1
            }))
          }
          if (cJ) {
            const FJ = {
              ...Qc(ZJ, 0, 0),
              relatedTarget: JJ
            };
            Ec(cJ, new PointerEvent("pointerover", FJ)), Ec(cJ, new MouseEvent("mouseover", FJ));
            const eJ = [],
              XJ = cJ => !(null === JJ || void 0 === JJ || !JJ.isConnected) && cJ.contains(JJ) || !!UJ && cJ.contains(UJ);
            for (let JJ = cJ; JJ && !XJ(JJ); JJ = JJ.parentElement) eJ.push(JJ);
            for (const JJ of eJ.reverse()) Ec(JJ, new PointerEvent("pointerenter", {
              ...FJ,
              bubbles: !1
            })), Ec(JJ, new MouseEvent("mouseenter", {
              ...FJ,
              bubbles: !1
            }));
            Ec(cJ, new PointerEvent("pointermove", Qc(ZJ, 0, 0))), Ec(cJ, new MouseEvent("mousemove", Qc(ZJ, 0, 0)))
          }
        } else cJ && (Ec(cJ, new PointerEvent("pointermove", Qc(ZJ, 0, 0))), Ec(cJ, new MouseEvent("mousemove", Qc(ZJ, 0, 0))))
      },
      Ic = JJ => {
        jJ.i.Uf(uJ.f, JJ)
      },
      Mc = JJ => {
        if (vc(JJ)) return void Ic(JJ);
        const cJ = JJ.hasAttribute("data-pad-focusable") ? JJ.querySelector("a[href]") : null,
          ZJ = null !== cJ && void 0 !== cJ ? cJ : JJ;
        yc(ZJ, mc(ZJ))
      },
      bc = ".Dropdown-root.is-open",
      wc = JJ => {
        const cJ = JJ.querySelector(".Dropdown-control");
        return Mc(cJ), cJ
      },
      Wc = JJ => {
        var cJ;
        const ZJ = null !== (cJ = JJ.closest(bc)) && void 0 !== cJ ? cJ : JJ.querySelector(bc);
        return ZJ ? wc(ZJ) : null
      },
      gc = JJ => {
        for (const cJ of document.querySelectorAll(bc)) cJ.contains(JJ) || wc(cJ)
      },
      Hc = JJ => null !== JJ.closest("input[type=color], input[type=file], [data-pad-mouse-only]"),
      Pc = JJ => {
        const cJ = JJ ? document.elementFromPoint(JJ.x, JJ.y) : null;
        return !(null === cJ || void 0 === cJ || !cJ.closest("[data-pad-repeat]"))
      },
      kc = JJ => {
        var cJ;
        return null !== (cJ = [...JJ.querySelectorAll("[data-pad-back]")].find(jc)) && void 0 !== cJ ? cJ : null
      },
      pc = JJ => {
        const cJ = kc(JJ);
        return !!cJ && (Mc(cJ), !0)
      },
      dc = JJ => {
        var cJ, ZJ, FJ, UJ;
        return null !== (cJ = null !== (ZJ = null !== (FJ = JJ.getAttribute("data-pad-key")) && void 0 !== FJ ? FJ : JJ.getAttribute("href")) && void 0 !== ZJ ? ZJ : null === (UJ = JJ.querySelector("a[href]")) || void 0 === UJ ? void 0 : UJ.getAttribute("href")) && void 0 !== cJ ? cJ : null
      },
      zc = {
        x: 0,
        y: 0,
        visible: !1,
        pressed: !1
      };
    const Nc = new class {
        constructor() {
          this.state = zc, this.listeners = new Set
        }
        get() {
          return this.state
        }
        set(JJ) {
          if (cJ = this.state, ZJ = JJ, (cJ.visible || ZJ.visible) && (cJ.visible !== ZJ.visible || cJ.x !== ZJ.x || cJ.y !== ZJ.y || cJ.pressed !== ZJ.pressed)) {
            var cJ, ZJ;
            this.state = JJ;
            for (const cJ of this.listeners) cJ(JJ)
          }
        }
        hide() {
          this.set(zc)
        }
        subscribe(JJ) {
          return this.listeners.add(JJ), () => {
            this.listeners.delete(JJ)
          }
        }
      },
      Oc = (JJ, cJ) => {
        let {
          kind: ZJ,
          holding: FJ,
          hasPress: UJ,
          hasBack: eJ,
          slotHasItem: XJ
        } = cJ;
        switch (JJ) {
          case "primary":
            return "slot" === ZJ ? "slotPrimary" : "recipe" === ZJ || "button" === ZJ ? UJ ? "pressPrimary" : "click" : "textField" === ZJ ? "openKeyboard" : null;
          case "secondary":
            return "slot" === ZJ ? "slotSecondary" : "button" !== ZJ && "recipe" !== ZJ || !UJ ? null : "pressSecondary";
          case "quickMove":
            return "slot" === ZJ && XJ ? "slotQuickMove" : null;
          case "hotbarSwap":
            return "slot" === ZJ && XJ && !FJ ? "hotbarPick" : null;
          case "openButton":
            return "close";
          case "back":
            return FJ ? "cancel" : eJ ? "pressBack" : "close"
        }
      },
      Tc = JJ => {
        const cJ = [];
        if (JJ.hotbarPicking) return cJ.push({
          actions: ["inventoryPrimary", "inventoryHotbarSwap"],
          labelKey: "inventorySwapHere"
        }), cJ.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryCancel"
        }), cJ;
        if (JJ.holding) "slot" === JJ.kind ? (cJ.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryPlace"
        }), cJ.push({
          actions: ["inventorySecondary"],
          labelKey: "inventoryPlaceOne"
        })) : "textField" === JJ.kind && cJ.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryType"
        }), cJ.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryPutBack"
        }), cJ.push({
          actions: ["inventoryDrop"],
          labelKey: "inventoryDrop"
        }), JJ.openButtonCloses && cJ.push({
          actions: ["inventory"],
          labelKey: "inventoryClose"
        });
        else {
          var ZJ;
          "slot" === JJ.kind && JJ.slotHasItem ? (cJ.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryTake"
          }), cJ.push({
            actions: ["inventorySecondary"],
            labelKey: "inventoryTakeHalf"
          }), cJ.push({
            actions: ["inventoryQuickMove"],
            labelKey: JJ.quickMoveToHotbar ? "inventoryToHotbar" : "inventoryQuickMove"
          }), cJ.push({
            actions: ["inventoryHotbarSwap"],
            labelKey: "inventoryHotbarSwap"
          }), cJ.push({
            actions: ["inventoryDrop"],
            labelKey: "inventoryDrop"
          })) : "button" !== JJ.kind && "recipe" !== JJ.kind || !JJ.pressHints ? "button" === JJ.kind || "recipe" === JJ.kind ? cJ.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventorySelect"
          }) : "textField" === JJ.kind && cJ.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryType"
          }) : (JJ.pressHints.primary && cJ.push({
            actions: ["inventoryPrimary"],
            labelKey: JJ.pressHints.primary
          }), JJ.pressHints.secondary && cJ.push({
            actions: ["inventorySecondary"],
            labelKey: JJ.pressHints.secondary
          }));
          const FJ = null === (ZJ = JJ.pressHints) || void 0 === ZJ ? void 0 : ZJ.back;
          FJ && cJ.push({
            actions: ["inventoryClose"],
            labelKey: FJ
          });
          const UJ = [];
          JJ.openButtonCloses && UJ.push("inventory"), FJ || UJ.push("inventoryClose"), UJ.length > 0 && cJ.push({
            actions: UJ,
            labelKey: "inventoryClose"
          })
        }
        return cJ.push({
          actions: ["inventoryPanelPrevious", "inventoryPanelNext"],
          labelKey: "inventoryPanels"
        }), JJ.hasCategories ? cJ.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryCategory"
        }) : JJ.hasList && cJ.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryPage"
        }), cJ
      };
    var Cc = ZJ(7982);
    class uc {
      constructor(JJ) {
        this.probes = JJ, this.byContainer = new Map, this.byParent = new Map
      }
      find(JJ, cJ) {
        const ZJ = IJ(JJ, "y", cJ);
        if (!ZJ) return null;
        let FJ = this.byContainer.get(ZJ);
        return FJ || (this.probes.push({
          element: ZJ,
          rect: ac(ZJ.getBoundingClientRect())
        }), FJ = {
          container: ZJ,
          box: HJ(ZJ),
          group: Lc(ZJ)
        }, this.byContainer.set(ZJ, FJ)), FJ
      }
      findForParent(JJ, cJ) {
        let ZJ = this.byParent.get(JJ);
        return void 0 === ZJ && (ZJ = this.find(JJ, cJ), this.byParent.set(JJ, ZJ)), ZJ
      }
    }
    const ic = new WeakMap;
    let Rc = 0;
    const Lc = JJ => {
        let cJ = ic.get(JJ);
        return cJ || (cJ = "el:" + Rc++, ic.set(JJ, cJ)), cJ
      },
      ac = JJ => ({
        left: JJ.left,
        top: JJ.top,
        width: JJ.width,
        height: JJ.height
      }),
      Bc = JJ => JJ.width > 0 && JJ.height > 0,
      tc = (JJ, cJ) => Bc(JJ) && JJ.left + JJ.width > 0 && JJ.top + JJ.height > 0 && JJ.left < cJ.width && JJ.top < cJ.height,
      oc = (JJ, cJ, ZJ) => {
        const FJ = JJ.top + JJ.height / 2;
        return tc(JJ, cJ) && (!ZJ || FJ >= ZJ.top && FJ <= ZJ.bottom)
      },
      lc = JJ => ({
        x: JJ.left + JJ.width / 2,
        y: JJ.top + JJ.height / 2
      }),
      JZ = (JJ, cJ, ZJ) => JJ < 0 ? ZJ >= 0 ? 0 : cJ - 1 : ((JJ + ZJ) % cJ + cJ) % cJ,
      cZ = JJ => "Left" === JJ || "Right" === JJ,
      ZZ = (JJ, cJ, ZJ) => {
        const FJ = cZ(ZJ),
          UJ = FJ ? JJ.top : JJ.left,
          eJ = FJ ? JJ.height : JJ.width,
          XJ = FJ ? cJ.top : cJ.left,
          AJ = FJ ? cJ.height : cJ.width,
          qJ = Math.max(0, Math.max(XJ - (UJ + eJ), UJ - (XJ + AJ)));
        return eJ > 1.5 * AJ ? {
          gap: qJ,
          offset: Math.max(0, XJ - UJ) + .1 * Math.max(0, UJ - XJ)
        } : {
          gap: qJ,
          offset: Math.abs(XJ + AJ / 2 - (UJ + eJ / 2))
        }
      },
      FZ = (JJ, cJ, ZJ) => {
        const FJ = ((JJ, cJ, ZJ) => {
          const FJ = lc(JJ),
            UJ = lc(cJ),
            eJ = cZ(ZJ) ? Math.min(JJ.width, cJ.width) / 4 : Math.min(JJ.height, cJ.height) / 4;
          switch (ZJ) {
            case "Right":
              return UJ.x - FJ.x >= eJ ? Math.max(0, cJ.left - (JJ.left + JJ.width)) : null;
            case "Left":
              return FJ.x - UJ.x >= eJ ? Math.max(0, JJ.left - (cJ.left + cJ.width)) : null;
            case "Down":
              return UJ.y - FJ.y >= eJ ? Math.max(0, cJ.top - (JJ.top + JJ.height)) : null;
            case "Up":
              return FJ.y - UJ.y >= eJ ? Math.max(0, JJ.top - (cJ.top + cJ.height)) : null
          }
        })(JJ, cJ, ZJ);
        if (null === FJ) return null;
        const UJ = ZZ(JJ, cJ, ZJ);
        return FJ + 3 * UJ.gap + .5 * UJ.offset
      },
      UZ = (JJ, cJ) => cJ.visible || null !== cJ.scrollGroup && cJ.scrollGroup === JJ.scrollGroup,
      eZ = (JJ, cJ, ZJ, FJ) => {
        let UJ = null,
          eJ = 1 / 0;
        for (const XJ of cJ) {
          if (XJ.key === JJ.key || !UZ(JJ, XJ) || !FJ(XJ)) continue;
          const cJ = FZ(JJ.rect, XJ.rect, ZJ);
          null !== cJ && cJ < eJ && (UJ = XJ, eJ = cJ)
        }
        return UJ
      },
      XZ = (JJ, cJ, ZJ) => {
        const FJ = eZ(JJ, cJ, ZJ, (() => !0));
        if (!FJ || cZ(ZJ) || null === JJ.scrollGroup || FJ.scrollGroup === JJ.scrollGroup) return FJ;
        const UJ = eZ(JJ, cJ, ZJ, (cJ => 0 === ZZ(JJ.rect, cJ.rect, ZJ).gap));
        return null !== UJ && void 0 !== UJ ? UJ : FJ
      },
      AZ = (JJ, cJ, ZJ) => {
        let FJ = null,
          UJ = 1 / 0;
        for (const eJ of cJ) {
          if (!eJ.visible || ZJ && !ZJ(eJ)) continue;
          const cJ = lc(eJ.rect),
            XJ = Math.hypot(cJ.x - JJ.x, cJ.y - JJ.y);
          XJ < UJ && (FJ = eJ, UJ = XJ)
        }
        return FJ
      },
      qZ = JJ => {
        const {
          rect: cJ,
          clip: ZJ
        } = JJ;
        if (!ZJ) return cJ;
        const FJ = Math.max(cJ.left, ZJ.left),
          UJ = Math.max(cJ.top, ZJ.top);
        return {
          left: FJ,
          top: UJ,
          width: Math.min(cJ.left + cJ.width, ZJ.left + ZJ.width) - FJ,
          height: Math.min(cJ.top + cJ.height, ZJ.top + ZJ.height) - UJ
        }
      },
      jZ = (JJ, cJ) => cJ.x >= JJ.left && cJ.x < JJ.left + JJ.width && cJ.y >= JJ.top && cJ.y < JJ.top + JJ.height,
      YZ = (JJ, cJ) => {
        let ZJ = null,
          FJ = 1 / 0;
        for (const UJ of cJ) {
          const cJ = qZ(UJ);
          (UJ.visible || UJ.clip) && jZ(cJ, JJ) && (cJ.width * cJ.height < FJ && (ZJ = UJ, FJ = cJ.width * cJ.height))
        }
        return ZJ
      },
      hZ = JJ => {
        let cJ = null;
        for (const ZJ of JJ) {
          if (!ZJ.visible) continue;
          if (!cJ) {
            cJ = ZJ;
            continue
          }
          const JJ = Math.min(cJ.rect.height, ZJ.rect.height) / 2,
            FJ = ZJ.rect.top - cJ.rect.top;
          (FJ < -JJ || Math.abs(FJ) <= JJ && ZJ.rect.left < cJ.rect.left) && (cJ = ZJ)
        }
        return cJ
      },
      DZ = (JJ, cJ, ZJ, FJ, UJ) => {
        const eJ = UJ % cJ,
          XJ = Math.floor(UJ / cJ);
        return {
          left: JJ.left + eJ * ZJ,
          top: JJ.top + XJ * FJ,
          width: JJ.width,
          height: JJ.height
        }
      },
      sZ = ".EntireInventoryWrapper .Inventory, .HotBarGameItemsContainer",
      nZ = ".LazyLoadedItemWrapper",
      GZ = ["[data-inven-idx]", "[data-recipe-key]", "[role=button]", "button", "input:not([type=hidden])", "textarea", ".CreativeCategoryTab", ".CreativeCategoryDropdownButton", ".CreativeCategoryDropdownOption", "[data-craft-ingredient]"].join(","),
      fZ = [
        ["hotbar", ".HotBarGameItemsContainer"],
        ["gameButtons", ".ClientGameInventoryButtons"],
        ["categories", ".CreativeCategoryRail"],
        ["recipe", ".CraftableInfo"],
        ["armour", ".ArmourItemSlots"],
        ["main", ".InvenBodyRight"],
        ["left", ".InvenLeftSide"]
      ],
      xZ = ["gameButtons", "categories", "left", "recipe", "armour", "main", "hotbar"],
      rZ = JJ => JJ.hasAttribute("data-inven-idx") ? "slot" : JJ.hasAttribute("data-recipe-key") ? "recipe" : JJ.hasAttribute("data-craft-ingredient") || Yc(JJ) ? "info" : vc(JJ) ? "textField" : "button",
      vZ = (JJ, cJ) => "slot" === cJ ? Number(JJ.getAttribute("data-inven-idx")) : null,
      mZ = JJ => JJ.matches(nZ) ? JJ.querySelector(GZ) : JJ,
      QZ = JJ => {
        var cJ, ZJ;
        return {
          element: JJ,
          recipe: null !== (cJ = JJ && (null === (ZJ = mZ(JJ)) || void 0 === ZJ ? void 0 : ZJ.getAttribute("data-recipe-key"))) && void 0 !== cJ ? cJ : null
        }
      },
      EZ = JJ => {
        const cJ = mZ(JJ);
        if (!cJ) return {
          kind: "pending",
          idx: null
        };
        const ZJ = rZ(cJ);
        return {
          kind: ZJ,
          idx: vZ(cJ, ZJ)
        }
      },
      VZ = JJ => {
        const cJ = [];
        for (const [ZJ, FJ] of fZ) {
          JJ.matches(FJ) && cJ.push([ZJ, JJ]);
          for (const UJ of JJ.querySelectorAll(FJ)) cJ.push([ZJ, UJ])
        }
        return cJ
      },
      KZ = (JJ, cJ) => {
        for (const [ZJ, FJ] of JJ)
          if (FJ.contains(cJ)) return ZJ;
        return "other"
      },
      yZ = (JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ) => {
        var qJ;
        const jJ = JJ.children,
          YJ = ac(jJ[0].getBoundingClientRect()),
          hJ = [{
            element: jJ[0],
            rect: YJ
          }];
        if (eJ.push(hJ[0]), 0 === YJ.width || 0 === YJ.height) return;
        let DJ = 1;
        for (; DJ < jJ.length && Math.abs(jJ[DJ].getBoundingClientRect().top - YJ.top) < 1;) DJ++;
        const sJ = JJ => {
            const cJ = {
              element: jJ[JJ],
              rect: ac(jJ[JJ].getBoundingClientRect())
            };
            return eJ.push(cJ), hJ.push(cJ), cJ.rect
          },
          nJ = DJ > 1 ? sJ(1).left - YJ.left : YJ.width,
          GJ = jJ.length > DJ ? sJ(DJ).top - YJ.top : YJ.height,
          fJ = XJ.find(JJ, cJ);
        let xJ = null;
        if (fJ) {
          var rJ;
          const {
            container: JJ,
            box: cJ
          } = fJ;
          xJ = null !== (rJ = AJ.get(JJ)) && void 0 !== rJ ? rJ : null, xJ || (xJ = {
            top: JJ.scrollTop,
            left: JJ.scrollLeft,
            box: cJ,
            viewport: FJ,
            targets: [],
            probes: [],
            holdsOthers: !1
          }, AJ.set(JJ, xJ)), xJ.probes.push(...hJ)
        }
        const vJ = UJ.length;
        for (let VJ = 0; VJ < jJ.length; VJ++) {
          var mJ, QJ, EJ;
          const JJ = jJ[VJ],
            cJ = DZ(YJ, DJ, nJ, GJ, VJ),
            eJ = JJ.firstElementChild ? JJ.querySelector(GZ) : null,
            XJ = eJ ? rZ(eJ) : "pending";
          UJ.push({
            key: Lc(JJ),
            rect: cJ,
            panel: ZJ,
            scrollGroup: null !== (mJ = null === fJ || void 0 === fJ ? void 0 : fJ.group) && void 0 !== mJ ? mJ : null,
            visible: oc(cJ, FJ, null === fJ || void 0 === fJ ? void 0 : fJ.box),
            clip: null !== (QJ = null === fJ || void 0 === fJ ? void 0 : fJ.box) && void 0 !== QJ ? QJ : null,
            element: JJ,
            kind: XJ,
            idx: eJ ? vZ(eJ, XJ) : null,
            scrollContainer: null !== (EJ = null === fJ || void 0 === fJ ? void 0 : fJ.container) && void 0 !== EJ ? EJ : null
          })
        }
        null === (qJ = xJ) || void 0 === qJ || qJ.targets.push(...UJ.slice(vJ))
      },
      SZ = JJ => JJ instanceof Element && null !== JJ.closest(nZ),
      IZ = JJ => null !== JJ.scrollContainer && SZ(JJ.element);
    class MZ {
      constructor() {
        this.latched = null, this.presses = 0
      }
      press(JJ, cJ, ZJ, FJ) {
        this.latched = {
          source: JJ,
          focusKey: cJ,
          sinceMs: ZJ,
          hold: {
            id: ++this.presses,
            holdMs: FJ
          }
        }
      }
      update(JJ, cJ, ZJ) {
        const FJ = this.latched;
        return FJ ? JJ && cJ === FJ.focusKey ? ZJ - FJ.sinceMs < FJ.hold.holdMs ? null : (this.latched = null, FJ.source) : (this.latched = null, null) : null
      }
      getHold() {
        var JJ, cJ;
        return null !== (JJ = null === (cJ = this.latched) || void 0 === cJ ? void 0 : cJ.hold) && void 0 !== JJ ? JJ : null
      }
      reset() {
        this.latched = null
      }
    }
    var bZ = ZJ(7988);
    const wZ = {
        kind: "none"
      },
      WZ = JJ => ({
        x: JJ.clientX,
        y: JJ.clientY
      }),
      gZ = () => 2 * (parseFloat(getComputedStyle(document.documentElement).fontSize) || 16);
    class HZ {
      constructor() {
        this.hovered = wZ, this.signature = "", this.holding = !1, this.lastPoint = {
          clientX: 0,
          clientY: 0
        }
      }
      sync(JJ, cJ, ZJ, FJ, UJ) {
        const eJ = null !== cJ ? {
            kind: "slot",
            idx: cJ
          } : ZJ ? {
            kind: "element",
            element: ZJ
          } : wZ,
          XJ = `${UJ}|${Math.round(FJ.clientX)},${Math.round(FJ.clientY)}`,
          AJ = (qJ = this.hovered, jJ = eJ, "slot" === qJ.kind && "slot" === jJ.kind ? qJ.idx === jJ.idx : "element" === qJ.kind && "element" === jJ.kind ? qJ.element === jJ.element : qJ.kind === jJ.kind);
        var qJ, jJ;
        if (AJ && XJ === this.signature) return;
        const YJ = !AJ || UJ !== this.holding || "" === this.signature;
        this.signature = XJ, this.holding = UJ, this.lastPoint = FJ;
        const hJ = this.hovered;
        if (this.hovered = eJ, "slot" === eJ.kind) return this.leaveElement(hJ, null, FJ), void(YJ ? JJ.hover(eJ.idx, FJ) : JJ.moveTo(FJ));
        if (AJ) return void("element" === eJ.kind ? Sc(eJ.element, eJ.element, WZ(FJ)) : JJ.hover(null, FJ));
        JJ.hover(null, FJ);
        const DJ = "element" === eJ.kind ? eJ.element : null;
        "element" === hJ.kind ? Sc(hJ.element, DJ, WZ(FJ)) : DJ && Sc(null, DJ, WZ(FJ))
      }
      invalidate() {
        this.signature = ""
      }
      clear(JJ) {
        const cJ = this.hovered;
        this.hovered = wZ, this.signature = "", "none" !== cJ.kind && (this.leaveElement(cJ, null, this.lastPoint), JJ && "slot" === cJ.kind && JJ.hover(null, this.lastPoint))
      }
      leaveElement(JJ, cJ, ZJ) {
        "element" === JJ.kind && Sc(JJ.element, cJ, WZ(ZJ))
      }
    }
    class PZ {
      constructor() {
        this.lastTiltedMs = -1 / 0
      }
      update(JJ, cJ) {
        VJ(JJ) && (this.lastTiltedMs = cJ)
      }
      allowsClick(JJ) {
        return JJ - this.lastTiltedMs > 150
      }
    }
    class kZ {
      constructor() {
        this.remainder = 0, this.container = null
      }
      isScrolling(JJ) {
        return 0 !== (0, nJ.m)(JJ, .2).y
      }
      step(JJ, cJ, ZJ) {
        JJ !== this.container && (this.container = JJ, this.remainder = 0);
        const FJ = KJ(cJ, ZJ).y;
        if (0 === FJ) return this.remainder = 0, !1;
        const UJ = this.remainder + FJ,
          eJ = Math.trunc(UJ);
        if (this.remainder = UJ - eJ, 0 === eJ) return !1;
        const XJ = JJ.scrollTop;
        return JJ.scrollTop = XJ + eJ, JJ.scrollTop !== XJ
      }
      current() {
        var JJ;
        return null !== (JJ = this.container) && void 0 !== JJ && JJ.isConnected ? this.container : null
      }
      reset() {
        this.remainder = 0, this.container = null
      }
    }
    var pZ = ZJ(7996);
    const dZ = "[data-pad-inventory-default]",
      zZ = ".HotBarGameItemsContainer .InvenItem.Selected",
      NZ = {
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
      OZ = [
        ["primary", "inventoryPrimary"],
        ["secondary", "inventorySecondary"],
        ["quickMove", "inventoryQuickMove"],
        ["hotbarSwap", "inventoryHotbarSwap"],
        ["back", "inventoryClose"],
        ["openButton", "inventory"]
      ],
      TZ = ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryHotbarSwap", "inventoryClose", "inventoryDrop"],
      CZ = ["inventoryPanelPrevious", "inventoryPanelNext", "menuPageUp", "menuPageDown"],
      uZ = [...TZ, ...CZ],
      iZ = () => {
        return JJ = (0, YJ.j)("inventory"), !uZ.map(YJ.j).includes(JJ) && !(0, nJ.G)(JJ);
        var JJ
      },
      RZ = new Set(["slotPrimary", "slotSecondary", "slotQuickMove", "pressPrimary", "pressSecondary", "openKeyboard"]),
      LZ = (JJ, cJ) => {
        const ZJ = !(null === cJ || void 0 === cJ || !cJ.isHolding());
        return function(JJ, cJ) {
          const ZJ = JJ.find((JJ => JJ.visible && cJ(JJ)));
          if (ZJ) return ZJ;
          for (var FJ = arguments.length, UJ = new Array(FJ > 2 ? FJ - 2 : 0), eJ = 2; eJ < FJ; eJ++) UJ[eJ - 2] = arguments[eJ];
          for (const XJ of UJ) {
            const cJ = hZ(JJ.filter(XJ));
            if (cJ) return cJ
          }
          return hZ(JJ)
        }(JJ, (JJ => {
          const {
            element: cJ
          } = JJ;
          return cJ.matches(dZ) || null !== cJ.querySelector(dZ) || cJ.matches(zZ)
        }), (JJ => "slot" === JJ.kind ? ZJ || null !== JJ.idx && !(null === cJ || void 0 === cJ || !cJ.hasItemAt(JJ.idx)) : "recipe" === JJ.kind || "pending" === JJ.kind), (JJ => "slot" === JJ.kind || "button" === JJ.kind))
      };
    class aZ {
      constructor() {
        this.set = null, this.observer = new MutationObserver((JJ => {
          JJ.some((JJ => !SZ(JJ.target))) && (this.set = null)
        })), this.invalidate = () => {
          this.set = null
        }, this.onScroll = JJ => {
          this.scrolled(JJ.target)
        }
      }
      get() {
        if (!this.set) {
          this.set = (() => {
            const JJ = [],
              cJ = [];
            let ZJ = !1;
            const FJ = {
                width: window.innerWidth,
                height: window.innerHeight
              },
              UJ = new Map,
              eJ = new uc(cJ);
            for (const hJ of document.querySelectorAll(sZ)) {
              const YJ = VZ(hJ);
              ZJ ||= null !== hJ.querySelector(".CreativeCategoryTab");
              for (const ZJ of hJ.querySelectorAll(`${nZ}:first-child`)) {
                const XJ = ZJ.parentElement;
                yZ(XJ, hJ, KZ(YJ, XJ), FJ, JJ, cJ, eJ, UJ)
              }
              for (const ZJ of hJ.querySelectorAll(GZ)) {
                var XJ, AJ, qJ, jJ;
                if (ZJ.closest(nZ) || ZJ.closest("[data-pad-ignore]")) continue;
                const DJ = null === (XJ = ZJ.parentElement) || void 0 === XJ ? void 0 : XJ.closest(GZ);
                if (DJ && hJ.contains(DJ)) continue;
                const sJ = rZ(ZJ),
                  nJ = vZ(ZJ, sJ);
                if (-1 === nJ) continue;
                const GJ = ac(ZJ.getBoundingClientRect());
                cJ.push({
                  element: ZJ,
                  rect: GJ
                });
                const fJ = eJ.findForParent(ZJ.parentElement, hJ),
                  xJ = fJ && !UJ.has(fJ.container) ? fJ : null;
                (xJ ? Bc(GJ) : tc(GJ, FJ)) && JJ.push({
                  key: Lc(ZJ),
                  rect: GJ,
                  panel: KZ(YJ, ZJ),
                  scrollGroup: null !== (AJ = null === xJ || void 0 === xJ ? void 0 : xJ.group) && void 0 !== AJ ? AJ : null,
                  visible: oc(GJ, FJ, null === xJ || void 0 === xJ ? void 0 : xJ.box),
                  clip: null !== (qJ = null === xJ || void 0 === xJ ? void 0 : xJ.box) && void 0 !== qJ ? qJ : null,
                  element: ZJ,
                  kind: sJ,
                  idx: nJ,
                  scrollContainer: null !== (jJ = null === xJ || void 0 === xJ ? void 0 : xJ.container) && void 0 !== jJ ? jJ : null
                })
              }
            }
            for (const [hJ, DJ] of UJ) DJ.holdsOthers = cJ.some((JJ => JJ.element !== hJ && hJ.contains(JJ.element) && !JJ.element.closest(nZ)));
            const YJ = new Map;
            for (const hJ of JJ) YJ.set(hJ.element, hJ);
            return {
              targets: JJ,
              byElement: YJ,
              hasCategories: ZJ,
              probes: cJ,
              scrollers: UJ
            }
          })(), this.observer.disconnect();
          for (const JJ of document.querySelectorAll(sZ)) this.observer.observe(JJ, {
            childList: !0,
            subtree: !0,
            attributes: !0,
            attributeFilter: ["class", "disabled", "aria-disabled", "tabindex", "data-inven-idx"]
          })
        }
        return this.set
      }
      scrolled(JJ) {
        !this.set || JJ instanceof Element && ((JJ, cJ) => {
          const ZJ = JJ.scrollers.get(cJ);
          if (!ZJ || ZJ.holdsOthers || cJ.scrollLeft !== ZJ.left) return !1;
          const FJ = cJ.scrollTop - ZJ.top;
          if (0 === FJ) return !0;
          ZJ.top = cJ.scrollTop;
          for (const UJ of ZJ.probes) UJ.rect.top -= FJ;
          for (const UJ of ZJ.targets) UJ.rect.top -= FJ, UJ.visible = oc(UJ.rect, ZJ.viewport, ZJ.box);
          return !0
        })(this.set, JJ) || (this.set = null)
      }
      revalidate() {
        this.set && this.set.probes.some((JJ => {
          return cJ = JJ.rect, ZJ = JJ.element.getBoundingClientRect(), !(cJ.left === ZJ.left && cJ.top === ZJ.top && cJ.width === ZJ.width && cJ.height === ZJ.height);
          var cJ, ZJ
        })) && (this.set = null)
      }
      disconnect() {
        this.observer.disconnect(), this.set = null
      }
    }
    const BZ = new class {
        constructor() {
          this.focused = null, this.focusTarget = null, this.lastRect = null, this.panelMemory = new Map, this.reopenSlotIdx = null, this.dpadTimers = new Map(nJ.B.map((JJ => [JJ, (0, GJ.e)(nJ.D)]))), this.stickRepeat = new nJ.c((0, GJ.e)(nJ.eb)), this.pageUpTimer = (0, GJ.e)(nJ.$), this.pageDownTimer = (0, GJ.e)(nJ.$), this.stickGate = new QJ, this.pointer = null, this.activePress = null, this.dropLatch = new MZ, this.scroller = new kZ, this.scrollStickClick = new PZ, this.hover = new HZ, this.lastRealPointer = null, this.placeAfterCategory = null, this.hotbarPick = null, this.ring = new TJ, this.targets = new aZ, this.hasCategories = !1, this.wasShowing = !1, this.state = bZ.b, this.isActive = () => (0, Cc.j)(), this.isShowing = () => "inventory" === hJ.e.getActiveConsumerName() && (0, sJ.h)(), this.getState = () => this.state, this.isSteppingSlots = () => this.isShowing() && null === this.pointer, this.onDeactivate = () => {
            this.endInteraction((0, Cc.f)()), (0, Cc.j)() || this.forgetSurface()
          }, this.forgetSurface = () => {
            var JJ;
            this.reopenSlotIdx = null !== (JJ = this.focused ? EZ(this.focused).idx : null) && void 0 !== JJ ? JJ : this.reopenSlotIdx, this.focused = null, this.focusTarget = null, this.lastRect = null, this.placeAfterCategory = null, (0, Cc.v)(), this.panelMemory.clear(), this.targets.disconnect()
          }, this.onFrame = JJ => {
            (0, AJ.unstable_batchedUpdates)((() => {
              this.frame(JJ)
            }))
          }, this.shouldBlockRealPointer = JJ => JJ.isTrusted && !(0, xJ.q)(JJ) && this.isShowing(), this.noteRealPointer = JJ => {
            JJ instanceof MouseEvent && JJ.isTrusted && !(0, xJ.q)(JJ) && (this.lastRealPointer ??= {
              x: 0,
              y: 0
            }, this.lastRealPointer.x = JJ.clientX, this.lastRealPointer.y = JJ.clientY)
          }, this.wakePressActs = JJ => {
            var cJ;
            return JJ === (0, YJ.j)("inventoryClose") ? !(null !== (cJ = (0, Cc.f)()) && void 0 !== cJ && cJ.isHolding()) : !(JJ !== (0, YJ.j)("inventory") || !iZ()) || ((0, nJ.G)(JJ) ? this.isNavButton(JJ) : CZ.some((cJ => (0, YJ.j)(cJ) === JJ)))
          }
        }
        frame(JJ) {
          var cJ, ZJ, FJ, UJ, eJ;
          const XJ = (0, Cc.f)();
          if (!(0, sJ.h)()) return void(this.wasShowing && (this.endInteraction(XJ), this.rehoverRealPointer()));
          this.wasShowing = !0, this.applyFocusRequest(), JJ.wokeDevice && this.focusWakePointer(!(null === XJ || void 0 === XJ || !XJ.isHolding())), this.applyCategoryPlace(), this.ensureFocus(), "cursor" !== (0, DJ.k)().inventoryNavigation || this.pointer || this.engagePointer();
          const AJ = performance.now();
          this.handleNavigation(JJ, AJ), this.handlePanels(JJ), this.handlePaging(JJ, AJ), this.handleScroll(JJ), this.handleButtons(JJ, AJ, XJ), this.applyFocusRequest(), this.pointer && this.hoverAtPointer();
          const qJ = this.ensureFocus(),
            jJ = this.focusContext(XJ);
          this.ring.show(qJ);
          const hJ = "slot" === jJ.kind ? jJ.idx : null,
            nJ = null !== (cJ = null === (ZJ = jJ.actionElement) || void 0 === ZJ ? void 0 : ZJ.querySelector(".DoCraftItem")) && void 0 !== cJ ? cJ : jJ.actionElement;
          this.pointer ? (this.hover.sync(XJ, hJ, nJ, ((JJ, cJ) => {
            const ZJ = cJ ? gZ() : 0;
            return {
              clientX: JJ.x - ZJ,
              clientY: JJ.y - ZJ
            }
          })(this.pointer, jJ.holding), jJ.holding), Nc.set({
            x: this.pointer.x,
            y: this.pointer.y,
            visible: !0,
            pressed: JJ.isHeld((0, YJ.j)("inventoryPrimary"))
          })) : qJ && this.focused && this.hover.sync(XJ, hJ, nJ, ((JJ, cJ) => {
            if (!cJ) return {
              clientX: JJ.left + JJ.width - 10,
              clientY: JJ.top + JJ.height / 2 - 10
            };
            const ZJ = gZ();
            return {
              clientX: JJ.left + JJ.width / 2 - ZJ,
              clientY: JJ.top + JJ.height / 2 - ZJ
            }
          })(qJ, jJ.holding), jJ.holding), this.publishState({
            showing: !0,
            kind: jJ.kind,
            holding: jJ.holding,
            slotHasItem: jJ.slotHasItem,
            pressHints: null !== (FJ = null === (UJ = jJ.press) || void 0 === UJ ? void 0 : UJ.hints) && void 0 !== FJ ? FJ : null,
            hasCategories: this.hasCategories,
            hasList: !!this.focusTarget && IZ(this.focusTarget),
            openButtonCloses: iZ(),
            steppingSlots: null === this.pointer,
            quickMoveToHotbar: "slot" === jJ.kind && !(null === (eJ = jJ.actionElement) || void 0 === eJ || !eJ.closest(".CreativeItemSlots")),
            dropStackHold: this.dropLatch.getHold(),
            hotbarPicking: null !== this.hotbarPick
          })
        }
        focusWakePointer(JJ) {
          var cJ;
          const ZJ = (0, sJ.c)();
          if (!ZJ) return;
          this.targets.revalidate();
          const FJ = this.getTargets().targets;
          this.setFocus(null !== (cJ = YZ(ZJ, FJ)) && void 0 !== cJ ? cJ : JJ ? AZ(ZJ, FJ, (JJ => {
            let {
              rect: cJ
            } = JJ;
            const FJ = Math.max(cJ.left - ZJ.x, 0, ZJ.x - (cJ.left + cJ.width)),
              UJ = Math.max(cJ.top - ZJ.y, 0, ZJ.y - (cJ.top + cJ.height));
            return Math.hypot(FJ, UJ) <= Math.min(cJ.width, cJ.height) / 2
          })) : null, !1), "cursor" === (0, DJ.k)().inventoryNavigation && (this.pointer = {
            x: ZJ.x,
            y: ZJ.y,
            speedRamp: 0
          })
        }
        rehoverRealPointer() {
          const JJ = this.lastRealPointer;
          if (!JJ || "keyboardMouse" !== qJ.d.get("activeInputDevice")) return;
          const cJ = document.elementFromPoint(JJ.x, JJ.y);
          cJ && Sc(null, cJ, JJ)
        }
        endInteraction(JJ) {
          this.wasShowing = !1, this.hotbarPick = null, this.releasePress(), this.dropLatch.reset(), this.scroller.reset();
          for (const cJ of this.dpadTimers.values()) cJ.reset();
          this.stickRepeat.reset(), this.pageUpTimer.reset(), this.pageDownTimer.reset(), this.hover.clear(JJ), this.ring.hide(), this.releasePointer(), this.publishState(bZ.b)
        }
        getTargets() {
          const JJ = this.targets.get();
          return this.hasCategories = JJ.hasCategories, JJ
        }
        currentTarget() {
          var JJ;
          return this.focused && null !== (JJ = this.getTargets().byElement.get(this.focused)) && void 0 !== JJ ? JJ : null
        }
        readFocusRect() {
          const JJ = this.focused;
          if (null === JJ || void 0 === JJ || !JJ.isConnected || !JJ.closest(sZ)) return null;
          const cJ = JJ.getBoundingClientRect();
          return cJ.width > 0 && cJ.height > 0 ? {
            left: cJ.left,
            top: cJ.top,
            width: cJ.width,
            height: cJ.height
          } : null
        }
        ensureFocus() {
          const JJ = this.readFocusRect();
          if (JJ || this.pointer) return JJ;
          const {
            targets: cJ,
            byElement: ZJ
          } = this.getTargets();
          let FJ = null,
            UJ = !1;
          if (this.lastRect) FJ = AZ(lc(this.lastRect), cJ);
          else {
            var eJ, XJ;
            const JJ = ((JJ, cJ) => {
                const ZJ = document.querySelector(".EntireInventoryWrapper [data-pad-inventory-start]");
                return ZJ ? LZ(JJ.filter((JJ => ZJ.contains(JJ.element))), cJ) : null
              })(cJ, (0, Cc.f)()),
              AJ = cJ.find((JJ => null !== JJ.idx && JJ.idx === this.reopenSlotIdx)),
              qJ = document.querySelector(zZ);
            UJ = null !== JJ || void 0 !== AJ, FJ = null !== (eJ = null !== (XJ = null !== JJ && void 0 !== JJ ? JJ : AJ) && void 0 !== XJ ? XJ : qJ && ZJ.get(qJ)) && void 0 !== eJ ? eJ : hZ(cJ)
          }
          return this.setFocus(FJ, UJ), this.lastRect
        }
        setFocus(JJ) {
          let cJ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          JJ && (this.focused = JJ.element, this.focusTarget = JJ, this.panelMemory.set(JJ.panel, JJ.element), cJ && JJ.scrollContainer && ((JJ, cJ) => {
            const ZJ = JJ.getBoundingClientRect(),
              FJ = HJ(cJ),
              UJ = cJ.scrollTop;
            return ZJ.top < FJ.top ? cJ.scrollTop -= FJ.top - ZJ.top : ZJ.bottom > FJ.bottom && (cJ.scrollTop += ZJ.bottom - FJ.bottom), cJ.scrollTop !== UJ
          })(JJ.element, JJ.scrollContainer) && this.targets.invalidate(), this.lastRect = this.readFocusRect(), this.followFocusJump())
        }
        followFocusJump() {
          if (this.pointer)
            if ("cursor" === (0, DJ.k)().inventoryNavigation) {
              if (this.lastRect) {
                const JJ = lc(this.lastRect);
                this.pointer = {
                  x: JJ.x,
                  y: JJ.y,
                  speedRamp: 0
                }
              }
            } else this.releasePointer()
        }
        engagePointer() {
          const JJ = this.lastRect ? lc(this.lastRect) : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          };
          this.pointer = {
            x: JJ.x,
            y: JJ.y,
            speedRamp: 0
          }
        }
        releasePointer() {
          this.pointer = null, Nc.hide()
        }
        hoverAtPointer() {
          var JJ;
          const cJ = YZ(this.pointer, this.getTargets().targets);
          this.focusTarget = cJ, (null === cJ || void 0 === cJ ? void 0 : cJ.element) !== this.focused && (this.focused = null !== (JJ = null === cJ || void 0 === cJ ? void 0 : cJ.element) && void 0 !== JJ ? JJ : null, cJ && (this.panelMemory.set(cJ.panel, cJ.element), this.lastRect = this.readFocusRect()))
        }
        moveCursor(JJ, cJ) {
          const ZJ = this.focusTarget,
            FJ = ZJ && (0, DJ.k)().cursorMagnetism ? lc(qZ(ZJ)) : null;
          this.pointer = EJ(this.pointer, {
            stick: JJ.leftStick,
            moveDeadzone: (0, DJ.k)().moveDeadzone,
            dpad: cJ,
            dtMs: JJ.dtMs,
            cursorSpeedPercent: (0, DJ.k)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: {
              overInteractive: !1,
              magnetTarget: FJ
            }
          })
        }
        move(JJ) {
          this.targets.revalidate();
          const cJ = this.currentTarget();
          cJ && this.setFocus(XZ(cJ, this.getTargets().targets, JJ))
        }
        step(JJ) {
          const cJ = this.pointer;
          if (cJ && (this.releasePointer(), !this.focused)) return this.targets.revalidate(), void this.setFocus(((JJ, cJ, ZJ) => {
            var FJ;
            const UJ = {
              key: "",
              rect: {
                left: JJ.x,
                top: JJ.y,
                width: 0,
                height: 0
              },
              panel: "",
              scrollGroup: null,
              visible: !0,
              clip: null
            };
            return null !== (FJ = XZ(UJ, cJ, ZJ)) && void 0 !== FJ ? FJ : AZ(JJ, cJ)
          })(cJ, this.getTargets().targets, JJ));
          this.move(JJ)
        }
        isNavButton(JJ) {
          return !TZ.some((cJ => (0, YJ.j)(cJ) === JJ)) && !(JJ === (0, YJ.j)("inventory") && iZ())
        }
        handleNavigation(JJ, cJ) {
          const ZJ = (0, DJ.k)().inventoryNavigation,
            FJ = {
              x: 0,
              y: 0
            };
          let UJ = null;
          for (const qJ of nJ.B) {
            const eJ = this.isNavButton(qJ) && JJ.isHeld(qJ);
            eJ && (FJ.x += NZ[qJ].x, FJ.y += NZ[qJ].y), this.dpadTimers.get(qJ).update(eJ, cJ) && "cursor" !== ZJ && (UJ ??= qJ)
          }
          const eJ = this.stickGate.update(JJ.leftStick, (0, DJ.k)().moveDeadzone);
          if (UJ && (this.step(UJ), this.stickGate.lock()), "slot" !== ZJ) {
            const cJ = ((JJ, cJ, ZJ, FJ) => "hybrid" !== JJ ? "cursor" === JJ : !FJ && (cJ || ZJ))(ZJ, null !== this.pointer, eJ, null !== UJ);
            return cJ && !this.pointer && this.engagePointer(), void(this.pointer && this.moveCursor(JJ, "cursor" === ZJ ? FJ : {
              x: 0,
              y: 0
            }))
          }
          const XJ = (0, nJ.m)(JJ.leftStick, (0, DJ.k)().moveDeadzone),
            AJ = this.stickRepeat.update(eJ ? (0, nJ.ib)(XJ) : null, cJ);
          AJ && this.move(AJ)
        }
        applyCategoryPlace() {
          const JJ = this.placeAfterCategory;
          if (!JJ) return;
          this.placeAfterCategory = null, this.targets.invalidate();
          const cJ = AZ(lc(JJ.rect), this.getTargets().targets, (cJ => cJ.scrollGroup === JJ.scrollGroup));
          this.setFocus(cJ, !1)
        }
        applyFocusRequest() {
          const JJ = (0, Cc.v)();
          JJ && (this.targets.invalidate(), this.setFocus((0, Cc.d)(this.getTargets().targets, JJ)))
        }
        handlePanels(JJ) {
          var cJ, ZJ, FJ;
          const UJ = JJ.wasPressed((0, YJ.j)("inventoryPanelPrevious")),
            eJ = JJ.wasPressed((0, YJ.j)("inventoryPanelNext"));
          if (!UJ && !eJ) return;
          const {
            targets: XJ
          } = this.getTargets(), AJ = (qJ = ((JJ, cJ) => {
            const ZJ = [];
            for (const UJ of JJ) UJ.visible && !ZJ.includes(UJ.panel) && ZJ.push(UJ.panel);
            const FJ = JJ => {
              const FJ = cJ.indexOf(JJ);
              return -1 === FJ ? cJ.length + ZJ.indexOf(JJ) : FJ
            };
            return ZJ.sort(((JJ, cJ) => FJ(JJ) - FJ(cJ)))
          })(XJ, xZ), jJ = null !== (cJ = null === (ZJ = this.focusTarget) || void 0 === ZJ ? void 0 : ZJ.panel) && void 0 !== cJ ? cJ : null, hJ = eJ ? 1 : -1, 0 === qJ.length ? null : qJ[JZ(null === jJ ? -1 : qJ.indexOf(jJ), qJ.length, hJ)]);
          var qJ, jJ, hJ;
          if (null === AJ) return;
          const DJ = this.panelMemory.get(AJ),
            sJ = XJ.filter((JJ => JJ.panel === AJ)),
            nJ = null !== (FJ = sJ.find((JJ => JJ.element === DJ && JJ.visible))) && void 0 !== FJ ? FJ : LZ(sJ, (0, Cc.f)());
          this.setFocus(nJ)
        }
        handlePaging(JJ, cJ) {
          const ZJ = (0, YJ.j)("menuPageUp"),
            FJ = (0, YJ.j)("menuPageDown"),
            UJ = this.pageUpTimer.update(JJ.isHeld(ZJ), cJ),
            eJ = this.pageDownTimer.update(JJ.isHeld(FJ), cJ);
          if (!UJ && !eJ) return;
          const XJ = eJ ? 1 : -1;
          if (!JJ.wasPressed(eJ ? FJ : ZJ) && this.hasCategories) return;
          if ((JJ => {
              const cJ = Array.from(document.querySelectorAll(".EntireInventoryWrapper .CreativeCategoryTab"));
              if (0 === cJ.length) return !1;
              const ZJ = cJ.findIndex((JJ => JJ.classList.contains("Selected"))),
                FJ = cJ[JZ(ZJ, cJ.length, JJ)];
              return yc(FJ, mc(FJ)), !0
            })(XJ)) {
            var AJ, qJ;
            this.targets.invalidate();
            const JJ = null !== (AJ = null === (qJ = this.focusTarget) || void 0 === qJ ? void 0 : qJ.scrollGroup) && void 0 !== AJ ? AJ : null,
              cJ = this.readFocusRect();
            return void(this.placeAfterCategory = null !== JJ && cJ && !this.pointer ? {
              rect: cJ,
              scrollGroup: JJ
            } : null)
          }
          const {
            targets: jJ
          } = this.getTargets(), hJ = this.currentTarget(), DJ = hJ && IZ(hJ) ? hJ : jJ.find((JJ => IZ(JJ) && JJ.visible));
          if (!DJ) return;
          const sJ = ((JJ, cJ, ZJ, FJ) => {
            if (null === JJ.scrollGroup) return null;
            const UJ = lc(JJ.rect),
              eJ = UJ.x,
              XJ = UJ.y + ("Down" === ZJ ? FJ : -FJ);
            let AJ = null,
              qJ = 1 / 0;
            for (const jJ of cJ) {
              if (jJ.scrollGroup !== JJ.scrollGroup || jJ.key === JJ.key) continue;
              const cJ = lc(jJ.rect);
              if ("Down" === ZJ ? cJ.y <= UJ.y : cJ.y >= UJ.y) continue;
              const FJ = Math.hypot(cJ.x - eJ, cJ.y - XJ);
              FJ < qJ && (AJ = jJ, qJ = FJ)
            }
            return AJ
          })(DJ, jJ, XJ > 0 ? "Down" : "Up", DJ.scrollContainer.clientHeight);
          this.setFocus(null !== sJ && void 0 !== sJ ? sJ : DJ)
        }
        handleScroll(JJ) {
          var cJ, ZJ, FJ, UJ, eJ, XJ;
          if (!this.scroller.isScrolling(JJ.rightStick)) return void this.scroller.reset();
          const {
            targets: AJ
          } = this.getTargets(), qJ = this.pointer, jJ = !qJ && this.focusTarget && IZ(this.focusTarget) ? this.focusTarget.scrollContainer : null, YJ = qJ && (null === (cJ = AJ.find((JJ => JJ.clip && jZ(JJ.clip, qJ)))) || void 0 === cJ ? void 0 : cJ.scrollContainer), hJ = null !== (ZJ = null !== (FJ = null !== (UJ = this.scroller.current()) && void 0 !== UJ ? UJ : YJ) && void 0 !== FJ ? FJ : jJ) && void 0 !== ZJ ? ZJ : null === (eJ = AJ.find(IZ)) || void 0 === eJ ? void 0 : eJ.scrollContainer;
          if (!hJ || !this.scroller.step(hJ, JJ.rightStick, JJ.dtMs)) return;
          this.targets.scrolled(hJ);
          const DJ = qJ || (null === (XJ = this.focusTarget) || void 0 === XJ ? void 0 : XJ.scrollContainer) !== hJ ? null : this.readFocusRect();
          if (!DJ) return;
          const sJ = HJ(hJ),
            nJ = lc(DJ);
          if (nJ.y < sJ.top || nJ.y > sJ.bottom) {
            const JJ = this.focusTarget.scrollGroup,
              cJ = AZ(nJ, this.getTargets().targets, (cJ => cJ.scrollGroup === JJ));
            this.setFocus(cJ, !1)
          }
        }
        focusContext(JJ) {
          const {
            kind: cJ,
            idx: ZJ
          } = this.focused ? EZ(this.focused) : {
            kind: null,
            idx: null
          }, FJ = this.focused ? mZ(this.focused) : null, UJ = FJ ? (0, pZ.e)(FJ) : null;
          return {
            kind: cJ,
            idx: ZJ,
            actionElement: FJ,
            press: UJ,
            hasPress: null !== UJ,
            hasBack: !(null === UJ || void 0 === UJ || !UJ.back),
            holding: JJ.isHolding(),
            slotHasItem: null !== ZJ && JJ.hasItemAt(ZJ)
          }
        }
        handleButtons(JJ, cJ, ZJ) {
          var FJ, UJ;
          if (!this.activePress || JJ.isHeld(this.activePress.button) && (FJ = this.activePress.target, UJ = this.focused, null !== FJ.recipe ? QZ(UJ).recipe === FJ.recipe : UJ === FJ.element) || this.releasePress(), this.scrollStickClick.update(JJ.rightStick, cJ), !this.handleHotbarPick(JJ, ZJ)) {
            for (const [FJ, UJ] of OZ) {
              const eJ = (0, YJ.j)(UJ);
              if (!JJ.wasPressed(eJ) || "openButton" === FJ && !iZ()) continue;
              if ("RS" === eJ && !this.scrollStickClick.allowsClick(cJ)) continue;
              const XJ = this.focusContext(ZJ),
                AJ = Oc(FJ, XJ);
              AJ && this.runIntent(AJ, XJ, eJ, ZJ)
            }
            this.handleDrop(JJ, cJ, ZJ)
          }
        }
        handleHotbarPick(JJ, cJ) {
          const ZJ = this.hotbarPick;
          if (!ZJ) return !1;
          const FJ = JJ.wasPressed((0, YJ.j)("inventoryPrimary")) || JJ.wasPressed((0, YJ.j)("inventoryHotbarSwap"));
          if (!FJ && !JJ.wasPressed((0, YJ.j)("inventoryClose")) && !cJ.isHolding()) return !(JJ.wasPressed((0, YJ.j)("inventory")) && iZ());
          const UJ = this.focusTarget;
          FJ && "hotbar" === (null === UJ || void 0 === UJ ? void 0 : UJ.panel) && null !== UJ.idx && UJ.idx !== ZJ.idx && (cJ.swapWithHotbar(UJ.idx, ZJ.idx), this.afterAction()), this.hotbarPick = null;
          const eJ = ZJ.element.isConnected ? this.getTargets().byElement.get(ZJ.element) : void 0;
          return eJ && this.setFocus(eJ), !0
        }
        startHotbarPick(JJ) {
          var cJ;
          const {
            targets: ZJ,
            byElement: FJ
          } = this.getTargets(), UJ = document.querySelector(zZ), eJ = null !== (cJ = UJ && FJ.get(UJ)) && void 0 !== cJ ? cJ : ZJ.find((JJ => "hotbar" === JJ.panel));
          eJ && this.focused && (this.hotbarPick = {
            idx: JJ,
            element: this.focused
          }, this.setFocus(eJ))
        }
        focusKey() {
          return this.focused ? Lc(this.focused) : null
        }
        handleDrop(JJ, cJ, ZJ) {
          const FJ = (0, YJ.j)("inventoryDrop");
          if (JJ.wasPressed(FJ)) {
            const JJ = (UJ = this.focusContext(ZJ)).holding ? {
              kind: "hj"
            } : "slot" === UJ.kind && UJ.slotHasItem && null !== UJ.idx ? {
              kind: "slot",
              idx: UJ.idx
            } : null;
            return void(JJ && (this.dropFrom(JJ, !1, ZJ), this.dropLatch.press(JJ, this.focusKey(), cJ, fJ.e[(0, DJ.k)().tapHoldTime].dropStackMs), this.afterAction()))
          }
          var UJ;
          const eJ = this.dropLatch.update(JJ.isHeld(FJ), this.focusKey(), cJ);
          eJ && ((JJ, cJ, ZJ) => "hj" === JJ.kind ? cJ : !cJ && ZJ(JJ.idx))(eJ, ZJ.isHolding(), ZJ.hasItemAt) && (this.dropFrom(eJ, !0, ZJ), this.afterAction())
        }
        dropFrom(JJ, cJ, ZJ) {
          "hj" === JJ.kind ? ZJ.dropHeld(cJ, this.slotPoint()) : ZJ.dropSlot(JJ.idx, cJ)
        }
        slotPoint() {
          return this.pointer ? {
            clientX: this.pointer.x,
            clientY: this.pointer.y
          } : this.lastRect ? (JJ => {
            const cJ = lc(JJ);
            return {
              clientX: cJ.x,
              clientY: cJ.y
            }
          })(this.lastRect) : {
            clientX: 0,
            clientY: 0
          }
        }
        runIntent(JJ, cJ, ZJ, FJ) {
          const UJ = cJ.idx,
            eJ = cJ.actionElement;
          switch (eJ && RZ.has(JJ) && (0, xJ.s)(eJ), JJ) {
            case "slotPrimary":
              FJ.primary(UJ, this.slotPoint());
              break;
            case "slotSecondary":
              FJ.secondary(UJ, this.slotPoint());
              break;
            case "slotQuickMove":
              FJ.quickMove(UJ, this.slotPoint());
              break;
            case "hotbarPick":
              this.startHotbarPick(UJ);
              break;
            case "pressPrimary":
            case "pressSecondary":
              this.startPress(cJ.press, "pressPrimary" === JJ ? "primary" : "secondary", ZJ);
              break;
            case "click":
              yc(eJ, mc(eJ));
              break;
            case "openKeyboard":
              vc(eJ) && Ic(eJ);
              break;
            case "pressBack":
              cJ.press.back();
              break;
            case "cancel":
              FJ.cancel();
              break;
            case "close":
              return this.releasePress(), void FJ.close()
          }
          this.afterAction()
        }
        startPress(JJ, cJ, ZJ) {
          this.releasePress(), JJ.press(cJ) && (this.activePress = {
            handlers: JJ,
            button: ZJ,
            target: QZ(this.focused)
          })
        }
        releasePress() {
          var JJ, cJ, ZJ;
          null === (JJ = this.activePress) || void 0 === JJ || null === (cJ = (ZJ = JJ.handlers).release) || void 0 === cJ || cJ.call(ZJ), this.activePress = null
        }
        afterAction() {
          this.targets.invalidate(), this.hover.invalidate()
        }
        publishState(JJ) {
          ((JJ, cJ) => {
            var ZJ, FJ, UJ, eJ, XJ, AJ;
            return JJ.showing === cJ.showing && JJ.kind === cJ.kind && JJ.holding === cJ.holding && JJ.slotHasItem === cJ.slotHasItem && (null === (ZJ = JJ.pressHints) || void 0 === ZJ ? void 0 : ZJ.primary) === (null === (FJ = cJ.pressHints) || void 0 === FJ ? void 0 : FJ.primary) && (null === (UJ = JJ.pressHints) || void 0 === UJ ? void 0 : UJ.secondary) === (null === (eJ = cJ.pressHints) || void 0 === eJ ? void 0 : eJ.secondary) && (null === (XJ = JJ.pressHints) || void 0 === XJ ? void 0 : XJ.back) === (null === (AJ = cJ.pressHints) || void 0 === AJ ? void 0 : AJ.back) && JJ.hasCategories === cJ.hasCategories && JJ.hasList === cJ.hasList && JJ.openButtonCloses === cJ.openButtonCloses && JJ.steppingSlots === cJ.steppingSlots && JJ.hotbarPicking === cJ.hotbarPicking && JJ.quickMoveToHotbar === cJ.quickMoveToHotbar && JJ.dropStackHold === cJ.dropStackHold
          })(JJ, this.state) || (this.state = JJ, jJ.i.Uf(bZ.e, JJ))
        }
      },
      tZ = ["pointermove", "pointerover", "pointerout", "mouseover", "mouseout"];
    var oZ = ZJ(7527);
    var lZ = ZJ(7998);
    const JF = {
        duration: 80,
        strongMagnitude: .2,
        weakMagnitude: .2,
        needsPadInUse: !1
      },
      cF = {
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
          ...JF,
          minIntervalMs: 1e3
        },
        preview: {
          ...JF,
          minIntervalMs: 0
        }
      };
    const ZF = new class {
        constructor(JJ) {
          this.deps = JJ, this.lastPlayedMs = {}, this.loggedFailure = !1, this.logFailure = JJ => {
            this.loggedFailure || (this.loggedFailure = !0, console.warn("Controller vibration failed; further failures are not logged.", JJ))
          }
        }
        play(JJ, cJ) {
          const ZJ = cF[JJ];
          if (!this.deps.isVibrationOn() || ZJ.needsPadInUse && !this.deps.isPadInUse()) return !1;
          const FJ = this.lastPlayedMs[JJ];
          if (void 0 !== FJ && cJ - FJ < ZJ.minIntervalMs) return !1;
          const UJ = this.deps.getActuator();
          if (!UJ) return !1;
          this.lastPlayedMs[JJ] = cJ;
          const {
            duration: eJ,
            strongMagnitude: XJ,
            weakMagnitude: AJ
          } = ZJ;
          try {
            UJ.playEffect("dual-rumble", {
              duration: eJ,
              strongMagnitude: XJ,
              weakMagnitude: AJ
            }).catch(this.logFailure)
          } catch (qJ) {
            this.logFailure(qJ)
          }
          return !0
        }
      }({
        getActuator: () => (JJ => {
          const cJ = null === JJ || void 0 === JJ ? void 0 : JJ.vibrationActuator;
          return "function" === typeof(null === cJ || void 0 === cJ ? void 0 : cJ.playEffect) ? cJ : null
        })(XJ.e.getActiveGamepad()),
        isVibrationOn: () => (0, DJ.k)().vibration,
        isPadInUse: sJ.h
      }),
      FF = JJ => {
        ZF.play(JJ, performance.now())
      };
    var UF = ZJ(7531),
      eF = ZJ(2473),
      XF = ZJ(93),
      AF = ZJ(29),
      qF = ZJ(969);
    class jF {
      constructor(JJ) {
        this.deps = JJ
      }
      check() {
        let JJ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const cJ = this.deps.isPadActive() ? this.deps.getPadFamily() : null;
        if (!cJ) return "skipped";
        const ZJ = JJ ? this.deps.getVisitId() : this.deps.peekVisitId();
        return null === ZJ || this.deps.readReportedVisitId() === ZJ ? "skipped" : this.deps.canReport() ? (this.deps.writeReportedVisitId(ZJ), this.deps.ls(cJ, this.deps.getInputType()), "reported") : "notReady"
      }
    }
    const YF = "controllerUsageReportedVisit";
    var hF = ZJ(1247),
      DF = ZJ(1599),
      sF = ZJ(547),
      nF = ZJ(1326),
      GF = ZJ(1151);
    const fF = JJ => ({
        translationKey: `controller:${JJ}`
      }),
      xF = {
        A: "A",
        B: "B",
        X: "X",
        Y: "Y",
        LB: "LB",
        RB: "RB",
        LT: "LT",
        RT: "RT",
        View: fF("padButtonView"),
        Menu: fF("padButtonMenu"),
        LS: "L3",
        RS: "R3",
        Up: fF("padButtonDpadUp"),
        Down: fF("padButtonDpadDown"),
        Left: fF("padButtonDpadLeft"),
        Right: fF("padButtonDpadRight"),
        Home: fF("padButtonHome"),
        LeftStick: fF("padButtonLeftStick"),
        RightStick: fF("padButtonRightStick")
      },
      rF = {
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
          View: fF("padButtonCreate"),
          Menu: fF("padButtonOptions")
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
      vF = (JJ, cJ) => {
        var ZJ;
        const FJ = null !== (ZJ = rF[JJ][cJ]) && void 0 !== ZJ ? ZJ : xF[cJ];
        return "string" === typeof FJ ? FJ : (0, UJ.z)(GF.e.get().getCurrentLanguageCode(), FJ.translationKey)
      },
      mF = JJ => {
        let {
          glyph: cJ,
          family: ZJ,
          className: FJ
        } = JJ;
        const UJ = (0, sJ.w)(),
          eJ = null !== ZJ && void 0 !== ZJ ? ZJ : UJ,
          XJ = (0, UF.h)(eJ, cJ);
        return (0, zJ.jsx)("span", {
          className: dJ()("ControllerGlyph", FJ),
          role: "img",
          "aria-label": vF(eJ, cJ),
          style: {
            "--pad-glyph-mask": `url(${XJ})`,
            "--pad-glyph-aspect": (0, UF.d)(eJ, cJ)
          }
        })
      };
    var QF = ZJ(1675);
    const EF = JJ => {
      let {
        action: cJ
      } = JJ;
      const {
        t: ZJ
      } = (0, UJ.F)();
      switch (cJ.kind) {
        case "reload":
          return (0, zJ.jsx)("span", {
            children: ZJ("controller:gameplayReload")
          });
        case "specialAction":
          return null;
        case "customButton":
          return (0, zJ.jsx)(QF.d, {
            text: cJ.description ? [{
              icon: cJ.icon
            }, ` ${cJ.description}`] : [{
              icon: cJ.icon
            }]
          });
        case "touchButton":
          return (0, zJ.jsx)(QF.d, {
            text: cJ.label
          })
      }
    };
    var VF = ZJ(8004);
    const KF = JJ => {
      let {
        hold: cJ
      } = JJ;
      return (0, zJ.jsx)("div", {
        className: "DropStackFillTrack",
        style: {
          "--pad-drop-stack-hold": `${cJ.holdMs}ms`
        },
        children: (0, zJ.jsx)("div", {
          className: "DropStackFillBar"
        })
      }, cJ.id)
    };
    var yF = ZJ(8029),
      SF = ZJ(8034),
      IF = ZJ(8038),
      MF = ZJ(8024);
    const bF = () => {
        const {
          gameState: JJ
        } = (0, qJ.j)(["gameState"]), cJ = (0, sJ.u)(), [FJ, UJ] = (0, kJ.useState)(!1), [eJ, XJ] = (0, kJ.useState)(!1);
        return (0, kJ.useEffect)((() => {
          "inGame" === JJ && UJ(!0)
        }), [JJ]), (0, kJ.useEffect)((() => {
          if (!FJ) return;
          let JJ = null,
            cJ = !1;
          return (sF.r ? Promise.all([ZJ.e(64), ZJ.e(228), ZJ.e(182), ZJ.e(202), ZJ.e(78)]).then((() => ZJ(39304))).then((JJ => JJ.startWasmPadGameplay)) : Promise.all([ZJ.e(215), ZJ.e(64), ZJ.e(214), ZJ.e(67), ZJ.e(66), ZJ.e(65), ZJ.e(88), ZJ.e(206), ZJ.e(173), ZJ.e(211), ZJ.e(126), ZJ.e(185), ZJ.e(207), ZJ.e(77), ZJ.e(222), ZJ.e(205), ZJ.e(201), ZJ.e(106), ZJ.e(68), ZJ.e(223), ZJ.e(182), ZJ.e(87)]).then((() => ZJ(39442))).then((JJ => JJ.startPadGameplay))).then((ZJ => {
            cJ || (JJ = ZJ())
          })).catch((JJ => {
            console.error("Pad gameplay failed to load", JJ), cJ || XJ(!0)
          })), () => {
            var ZJ;
            cJ = !0, null === (ZJ = JJ) || void 0 === ZJ || ZJ()
          }
        }), [FJ]), (0, kJ.useEffect)((() => {
          eJ && cJ && (XJ(!1), hF.NotificationProvider.showPromptPopup({
            title: "controller:gameplayLoadFailedTitle",
            subtitle: "controller:gameplayLoadFailedSubtitle",
            confirmText: "settingsMenu:reloadPagePopupConfirm",
            confirmTooltip: "",
            cancelText: "general:cancel",
            cancelTooltip: ""
          }).getResult().then((JJ => {
            !0 === JJ && (0, DF.reloadBloxd)()
          })))
        }), [eJ, cJ]), (0, zJ.jsxs)(zJ.Fragment, {
          children: [(0, zJ.jsx)(wF, {}), (0, zJ.jsx)(WF, {}), (0, zJ.jsx)(gF, {})]
        })
      },
      wF = () => {
        const {
          t: JJ
        } = (0, UJ.F)(), cJ = (0, sJ.u)(), {
          gameState: ZJ,
          isUiHidden: FJ
        } = (0, qJ.j)(["gameState", "isUiHidden"]), {
          hideButtonHints: eJ
        } = (0, DJ.q)(), XJ = (0, VF.g)(), AJ = (0, VF.i)(), [jJ, hJ] = (0, kJ.useState)(IF.b);
        return (0, nF.i)(MF.m, hJ), !cJ || eJ || FJ || "inGame" !== ZJ || !XJ && !jJ ? null : (0, zJ.jsxs)("div", {
          className: "PadActionHint SmallTextBold",
          children: [XJ && (0, zJ.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, zJ.jsx)(mF, {
              glyph: (0, YJ.j)("actionButton")
            }), (0, zJ.jsx)(EF, {
              action: XJ
            }), AJ && (0, zJ.jsx)("span", {
              className: "PadActionHintMore",
              children: JJ("controller:gameplayActionWheelHint")
            })]
          }), jJ && (0, zJ.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, zJ.jsx)(mF, {
              glyph: (0, YJ.j)("Am")
            }), (0, zJ.jsx)("span", {
              children: JJ("controller:gameplayPickBlock")
            })]
          })]
        })
      },
      WF = () => {
        const {
          t: JJ
        } = (0, UJ.F)(), cJ = (0, sJ.u)(), {
          gameState: ZJ,
          isUiHidden: FJ
        } = (0, qJ.j)(["gameState", "isUiHidden"]), [eJ, XJ] = (0, kJ.useState)(yF.e);
        return (0, nF.i)(MF.i, XJ), cJ && !FJ && "inGame" === ZJ && eJ ? (0, zJ.jsxs)("div", {
          className: "PadDropStackFill SmallTextBold",
          children: [(0, zJ.jsx)("span", {
            children: JJ("controller:gameplayDropStack")
          }), (0, zJ.jsx)(KF, {
            hold: eJ
          })]
        }) : null
      },
      gF = () => {
        const {
          t: JJ
        } = (0, UJ.F)(), cJ = (0, sJ.u)(), {
          gameState: ZJ,
          isUiHidden: FJ
        } = (0, qJ.j)(["gameState", "isUiHidden"]), {
          hideButtonHints: eJ
        } = (0, DJ.q)(), [XJ, AJ] = (0, kJ.useState)(SF.b);
        return (0, nF.i)(MF.h, AJ), cJ && !FJ && "inGame" === ZJ && XJ ? (0, zJ.jsxs)("div", {
          className: "PadAttackLatchedHint SmallTextBold",
          children: [!eJ && (0, zJ.jsx)(mF, {
            glyph: (0, YJ.j)("attack")
          }), (0, zJ.jsx)("span", {
            children: JJ("controller:gameplayAttackLatched")
          })]
        }) : null
      };
    var HF = ZJ(8043),
      PF = ZJ(1725),
      kF = ZJ(2175),
      pF = ZJ(7515);
    const dF = JJ => JJ && !(0, HF.e)(PF.b.get("shopInfo")),
      zF = () => {
        const JJ = "inGame" === (0, qJ.j)(["gameState"]).gameState;
        return (0, kF.e)("shopInfo", (() => {
          (0, pF.l)(dF(JJ))
        })), (0, kJ.useEffect)((() => {
          (0, pF.l)(dF(JJ))
        }), [JJ]), null
      },
      NF = () => {
        const {
          t: JJ
        } = (0, UJ.F)(), {
          hideButtonHints: cJ
        } = (0, DJ.q)();
        (0, sJ.w)();
        const ZJ = (0, bZ.j)();
        return (0, kJ.useEffect)((() => (() => {
          const JJ = hJ.e.register({
              name: "inventory",
              isActive: BZ.isActive,
              onFrame: BZ.onFrame,
              onDeactivate: BZ.onDeactivate,
              wakePressActs: BZ.wakePressActs
            }),
            cJ = JJ => {
              BZ.noteRealPointer(JJ), BZ.shouldBlockRealPointer(JJ) && JJ.stopPropagation()
            };
          for (const XJ of tZ) window.addEventListener(XJ, cJ, !0);
          const ZJ = (0, Cc.m)((() => {
              "inventory" !== hJ.e.getActiveConsumerName() && BZ.forgetSurface()
            })),
            FJ = JJ => {
              const cJ = JJ.target;
              (0, sJ.h)() && oJ(cJ) && cJ.closest(sZ) && (0, Cc.j)() && (0, Cc.r)(cJ)
            };
          document.addEventListener("focusout", FJ, !0);
          const {
            invalidate: UJ,
            onScroll: eJ
          } = BZ.targets;
          return document.addEventListener("scroll", eJ, !0), window.addEventListener("resize", UJ), () => {
            JJ(), ZJ();
            for (const JJ of tZ) window.removeEventListener(JJ, cJ, !0);
            document.removeEventListener("scroll", eJ, !0), document.removeEventListener("focusout", FJ, !0), window.removeEventListener("resize", UJ), BZ.targets.disconnect()
          }
        })()), []), (0, zJ.jsxs)(zJ.Fragment, {
          children: [(0, zJ.jsx)(CJ, {
            placer: BZ.ring,
            className: "InventorySlotCursorRing"
          }), ZJ.showing && !cJ && (0, zJ.jsx)("div", {
            className: "InventorySlotCursorHints SmallTextBold",
            children: Tc(ZJ).map((cJ => {
              let {
                actions: FJ,
                labelKey: UJ
              } = cJ;
              return (0, zJ.jsxs)("div", {
                className: "InventorySlotCursorHint",
                children: [FJ.map((JJ => (0, zJ.jsx)(mF, {
                  glyph: (0, YJ.j)(JJ)
                }, JJ))), (0, zJ.jsx)("span", {
                  children: JJ(`controller:${UJ}`)
                }), "inventoryDrop" === UJ && ZJ.dropStackHold && (0, zJ.jsx)(KF, {
                  hold: ZJ.dropStackHold
                })]
              }, UJ)
            }))
          })]
        })
      },
      OF = [{
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
      TF = JJ => Array.from(JJ).map((JJ => ({
        type: "char",
        char: JJ,
        width: 1
      }))),
      CF = function(JJ) {
        return {
          type: "command",
          command: JJ,
          width: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
        }
      },
      uF = [CF("page", 2), CF("otherPage"), CF("caretLeft"), CF("space", 3), CF("caretRight"), CF("close", 1.5), CF("submit", 1.5)],
      iF = [CF("page", 2), CF("otherPage"), CF("caretLeft"), CF("space", 2), CF("caretRight"), CF("newline"), CF("close", 1.5), CF("submit", 1.5)],
      RF = [
        [...TF("1234567890"), CF("backspace")], TF("qwertyuiop/"), TF("asdfghjkl'?"), [CF("shift", 2), ...TF("zxcvbnm,.")]
      ],
      LF = [
        [...TF("1234567890"), CF("backspace")], TF("!@#$%^&*()/"), TF('-_=+[]{};:"'), TF("~`|\\<>'\u20ac\xa3,.")
      ],
      aF = {
        letters: RF,
        accents: [
          [...TF("1234567890"), CF("backspace")], TF("\xe1\xe9\xed\xf3\xfa\xe0\xe8\xec\xf2\xf9\xf1"), TF("\xe2\xea\xee\xf4\xfb\xe4\xeb\xef\xf6\xfc\xe7"), [CF("shift", 2), ...TF("\xe3\xf5\xdf\u0153\u011f\u015f\u0131\xbf\xa1")]
        ],
        symbols: LF
      },
      BF = new Set(["de", "es", "fr", "it", "nl", "pt", "pt-BR", "tr", "vi"]),
      tF = (JJ, cJ) => "letters" === JJ ? cJ ? {
        page: "accents",
        otherPage: "symbols"
      } : {
        page: "symbols",
        otherPage: "accents"
      } : {
        page: "letters",
        otherPage: "accents" === JJ ? "symbols" : "accents"
      },
      oF = function(JJ, cJ) {
        const ZJ = ((JJ, cJ) => [...aF[JJ], cJ ? iF : uF])(JJ, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]);
        if (0 === cJ) return ZJ;
        const FJ = Math.min(2, lF(ZJ[0]) / cJ);
        return [Array.from({
          length: cJ
        }, ((JJ, cJ) => ({
          type: "phrase",
          phraseIndex: cJ,
          width: FJ
        }))), ...ZJ]
      },
      lF = JJ => JJ.reduce(((JJ, cJ) => JJ + cJ.width), 0),
      JU = JJ => Math.max(...JJ.map(lF)),
      cU = (JJ, cJ) => {
        const ZJ = JJ[cJ.row];
        let FJ = (JU(JJ) - lF(ZJ)) / 2;
        for (let UJ = 0; UJ < cJ.col; UJ++) FJ += ZJ[UJ].width;
        return FJ + ZJ[cJ.col].width / 2
      },
      ZU = (JJ, cJ, ZJ) => {
        let FJ = 0,
          UJ = 1 / 0;
        for (let eJ = 0; eJ < JJ[cJ].length; eJ++) {
          const XJ = Math.abs(cU(JJ, {
            row: cJ,
            col: eJ
          }) - ZJ);
          XJ < UJ - 1e-9 && (FJ = eJ, UJ = XJ)
        }
        return FJ
      },
      FU = (JJ, cJ) => {
        const ZJ = Math.max(0, Math.min(JJ.length - 1, cJ.row));
        return {
          row: ZJ,
          col: Math.max(0, Math.min(JJ[ZJ].length - 1, cJ.col))
        }
      },
      UU = (JJ, cJ, ZJ) => "once" === JJ && cJ - ZJ <= 400 ? "caps" : "off" === JJ ? "once" : "off",
      eU = (JJ, cJ) => "once" === JJ && (JJ => JJ.toLowerCase() !== JJ.toUpperCase())(cJ) ? "off" : JJ,
      XU = (JJ, cJ, ZJ) => {
        if ("symbols" === cJ || "off" === ZJ) return JJ;
        const FJ = JJ.toUpperCase();
        return 1 === FJ.length ? FJ : JJ
      };
    var AU = ZJ(1569),
      qU = ZJ(7956),
      jU = ZJ(8058),
      YU = ZJ(227),
      hU = ZJ(1528),
      DU = ZJ(7486);
    const sU = "[data-pad-secondary]",
      nU = JJ => JJ instanceof HTMLElement && jc(JJ) && !Yc(JJ),
      GU = JJ => {
        const cJ = JJ.querySelector(sU);
        if (cJ && nU(cJ)) return cJ;
        for (const UJ of null !== (ZJ = null === (FJ = JJ.parentElement) || void 0 === FJ ? void 0 : FJ.children) && void 0 !== ZJ ? ZJ : []) {
          var ZJ, FJ;
          if (UJ !== JJ && UJ.matches(sU) && nU(UJ)) return UJ
        }
        return null
      },
      fU = (JJ, cJ, ZJ, FJ) => Math.max(0, Math.max(JJ, ZJ) - Math.min(cJ, FJ)),
      xU = (JJ, cJ, ZJ, FJ) => Math.max(0, Math.min(cJ, FJ) - Math.max(JJ, ZJ)),
      rU = (JJ, cJ, ZJ) => {
        const FJ = (JJ.left + JJ.right) / 2,
          UJ = (JJ.top + JJ.bottom) / 2,
          eJ = (cJ.left + cJ.right) / 2,
          XJ = (cJ.top + cJ.bottom) / 2;
        if ("Left" === ZJ || "Right" === ZJ) {
          const AJ = "Right" === ZJ ? 1 : -1;
          return {
            forwardGap: "Right" === ZJ ? cJ.left - JJ.right : JJ.left - cJ.right,
            centreForward: (eJ - FJ) * AJ,
            sidewaysGap: fU(JJ.top, JJ.bottom, cJ.top, cJ.bottom),
            sidewaysOverlap: xU(JJ.top, JJ.bottom, cJ.top, cJ.bottom),
            centreSideways: Math.abs(XJ - UJ),
            startSideways: Math.abs(cJ.top - JJ.top),
            fromSidewaysSize: JJ.bottom - JJ.top,
            toSidewaysSize: cJ.bottom - cJ.top,
            toLength: cJ.right - cJ.left
          }
        }
        const AJ = "Down" === ZJ ? 1 : -1;
        return {
          forwardGap: "Down" === ZJ ? cJ.top - JJ.bottom : JJ.top - cJ.bottom,
          centreForward: (XJ - UJ) * AJ,
          sidewaysGap: fU(JJ.left, JJ.right, cJ.left, cJ.right),
          sidewaysOverlap: xU(JJ.left, JJ.right, cJ.left, cJ.right),
          centreSideways: Math.abs(eJ - FJ),
          startSideways: Math.abs(cJ.left - JJ.left),
          fromSidewaysSize: JJ.right - JJ.left,
          toSidewaysSize: cJ.right - cJ.left,
          toLength: cJ.bottom - cJ.top
        }
      },
      vU = JJ => JJ.centreForward > .5 && JJ.forwardGap >= -JJ.toLength / 2,
      mU = JJ => {
        const cJ = JJ.sidewaysOverlap > 0 ? 0 : 2 * JJ.fromSidewaysSize,
          ZJ = JJ.fromSidewaysSize > 1.5 * JJ.toSidewaysSize ? JJ.startSideways : JJ.centreSideways;
        return Math.max(0, JJ.forwardGap) + 3 * JJ.sidewaysGap + cJ + .1 * ZJ
      },
      QU = (JJ, cJ) => xU(JJ.top, JJ.bottom, cJ.top, cJ.bottom) > 0 || cJ.bottom - cJ.top > cJ.right - cJ.left,
      EU = (JJ, cJ, ZJ, FJ, UJ, eJ) => {
        const XJ = UJ ? KU(JJ, cJ, ZJ, UJ) : new Set,
          AJ = SU(JJ, cJ, ZJ, XJ);
        return AJ < 0 && XJ.size > 0 && eJ ? VU(JJ, cJ, ZJ, eJ) : FJ && AJ >= 0 ? yU(JJ, cJ, ZJ, FJ, AJ, XJ) : AJ
      },
      VU = (JJ, cJ, ZJ, FJ) => {
        const UJ = new Set,
          eJ = SU(JJ, cJ, "Up", UJ) >= 0,
          XJ = SU(JJ, cJ, "Down", UJ) >= 0,
          AJ = new Set;
        return cJ.forEach(((cJ, ZJ) => {
          const UJ = cJ.top + cJ.bottom < JJ.top + JJ.bottom;
          FJ[ZJ] && !(UJ ? eJ : XJ) || AJ.add(ZJ)
        })), SU(JJ, cJ, ZJ, AJ)
      },
      KU = (JJ, cJ, ZJ, FJ) => {
        const UJ = new Set;
        return "Left" !== ZJ && "Right" !== ZJ || cJ.forEach(((cJ, ZJ) => {
          FJ[ZJ] && xU(JJ.top, JJ.bottom, cJ.top, cJ.bottom) <= 0 && UJ.add(ZJ)
        })), UJ
      },
      yU = (JJ, cJ, ZJ, FJ, UJ, eJ) => {
        const XJ = rU(JJ, cJ[UJ], ZJ).forwardGap;
        let AJ = UJ,
          qJ = FJ[UJ],
          jJ = 1 / 0;
        return cJ.forEach(((cJ, YJ) => {
          const hJ = FJ[YJ];
          if (eJ.has(YJ) || hJ < qJ || hJ === qJ && AJ === UJ) return;
          const DJ = rU(JJ, cJ, ZJ);
          if (!vU(DJ) || DJ.forwardGap < 0 || DJ.forwardGap >= XJ) return;
          const sJ = mU(DJ);
          (hJ > qJ || sJ < jJ) && (AJ = YJ, qJ = hJ, jJ = sJ)
        })), AJ
      },
      SU = (JJ, cJ, ZJ, FJ) => {
        let UJ = -1,
          eJ = 1 / 0;
        if (cJ.forEach(((cJ, XJ) => {
            const AJ = ((JJ, cJ, ZJ) => {
              const FJ = rU(JJ, cJ, ZJ);
              if (!vU(FJ)) return null;
              const UJ = Math.max(0, FJ.forwardGap);
              return FJ.sidewaysOverlap <= 0 && FJ.sidewaysGap > 2 * (UJ + 1) ? null : mU(FJ)
            })(JJ, cJ, ZJ);
            null !== AJ && AJ < eJ && !FJ.has(XJ) && (eJ = AJ, UJ = XJ)
          })), UJ < 0) return -1;
        const XJ = cJ[UJ],
          AJ = rU(JJ, XJ, ZJ).forwardGap;
        let qJ = AJ,
          jJ = UJ;
        return cJ.forEach(((cJ, eJ) => {
          if (eJ === UJ || FJ.has(eJ) || !((JJ, cJ, ZJ) => {
              const FJ = "Left" === ZJ || "Right" === ZJ,
                UJ = FJ ? xU(JJ.top, JJ.bottom, cJ.top, cJ.bottom) : xU(JJ.left, JJ.right, cJ.left, cJ.right),
                eJ = FJ ? Math.min(JJ.bottom - JJ.top, cJ.bottom - cJ.top) : Math.min(JJ.right - JJ.left, cJ.right - cJ.left);
              return UJ > 0 && UJ >= eJ / 2
            })(cJ, XJ, ZJ)) return;
          const YJ = rU(JJ, cJ, ZJ);
          vU(YJ) && YJ.forwardGap + YJ.toLength <= AJ + 1 && YJ.forwardGap < qJ && (qJ = YJ.forwardGap, jJ = eJ)
        })), jJ
      },
      IU = (JJ, cJ) => {
        let ZJ = -1,
          FJ = 1 / 0;
        return cJ.forEach(((cJ, UJ) => {
          const eJ = Math.max(cJ.left - JJ.x, 0, JJ.x - cJ.right),
            XJ = Math.max(cJ.top - JJ.y, 0, JJ.y - cJ.bottom),
            AJ = Math.hypot(eJ, XJ);
          AJ < FJ && (FJ = AJ, ZJ = UJ)
        })), ZJ
      },
      MU = (JJ, cJ) => {
        const ZJ = Math.min(JJ.bottom - JJ.top, cJ.bottom - cJ.top) / 2;
        return Math.abs(JJ.top - cJ.top) > ZJ ? JJ.top - cJ.top : JJ.left - cJ.left
      },
      bU = JJ => {
        let cJ = -1;
        for (let ZJ = 0; ZJ < JJ.length; ZJ++)(cJ < 0 || MU(JJ[ZJ], JJ[cJ]) < 0) && (cJ = ZJ);
        return cJ
      };
    var wU = ZJ(8061),
      WU = ZJ(8066);
    const gU = JJ => {
        if ("death" !== JJ || "inGame" !== qJ.d.get("gameState") || "off" === (0, DJ.k)().quickChat || null === (0, AU.e)()) return !1;
        const cJ = (0, YJ.j)("chat");
        return cJ !== (0, YJ.j)("menuConfirm") && cJ !== (0, YJ.j)("menuBack")
      },
      HU = new wU.d;
    var PU = ZJ(3766),
      kU = ZJ(8068);
    const pU = JJ => {
        let cJ = null;
        for (const ZJ of JJ.querySelectorAll("[data-pad-tabs]")) jc(ZJ) && (!cJ || Number(ZJ.dataset.padTabs) < Number(cJ.dataset.padTabs)) && (cJ = ZJ);
        return cJ
      },
      dU = (JJ, cJ, ZJ, FJ) => {
        JJ.focusWhenFound((() => {
          const UJ = JJ.pickInitial(cJ);
          if (UJ && !ZJ.has(UJ) && (null === FJ || void 0 === FJ || !FJ.contains(UJ))) return UJ;
          const eJ = ((JJ, cJ) => {
              const ZJ = cJ => JJ.getEnabledCandidates(cJ).filter((JJ => !JJ.closest("[data-pad-tabs]")));
              for (const FJ of rc(cJ)) {
                const JJ = ZJ(FJ);
                if (JJ.length > 0) return JJ
              }
              return ZJ(cJ)
            })(JJ, cJ).filter((JJ => !ZJ.has(JJ))),
            XJ = bU(eJ.map((JJ => JJ.getBoundingClientRect())));
          return XJ >= 0 ? eJ[XJ] : null
        }), 3e3)
      },
      zU = (JJ, cJ, ZJ, FJ) => {
        var UJ;
        const eJ = ((JJ, cJ) => {
          if (0 === JJ.length) return null;
          const ZJ = JJ.findIndex((JJ => "true" === JJ.dataset.padSelected));
          return ZJ < 0 ? cJ > 0 ? JJ[0] : JJ[JJ.length - 1] : JJ[(ZJ + cJ + JJ.length) % JJ.length]
        })([...ZJ.querySelectorAll("[data-pad-tab]")].filter((JJ => jc(JJ) && !Yc(JJ))), FJ);
        if (!eJ) return;
        const XJ = null !== (UJ = null === JJ || void 0 === JJ ? void 0 : JJ.getFocused()) && void 0 !== UJ ? UJ : null,
          AJ = !(null === XJ || void 0 === XJ || !XJ.isConnected) && ZJ.contains(XJ),
          qJ = JJ && !AJ ? new Set(JJ.getEnabledCandidates(cJ)) : null;
        Mc(eJ), JJ && (qJ ? dU(JJ, cJ, qJ, ZJ) : JJ.setFocus(eJ, {
          byUser: !0
        }))
      },
      NU = JJ => {
        var cJ;
        const ZJ = HJ(null !== (cJ = IJ(JJ, "x")) && void 0 !== cJ ? cJ : JJ),
          FJ = sc(JJ).filter((JJ => !Yc(JJ))),
          UJ = FJ.filter((JJ => PJ(JJ.getBoundingClientRect(), ZJ)));
        return (UJ.length > 0 ? UJ : FJ).sort(((JJ, cJ) => MU(JJ.getBoundingClientRect(), cJ.getBoundingClientRect())))
      },
      OU = (JJ, cJ, ZJ) => {
        const FJ = [...cJ.querySelectorAll("[data-pad-row]")].filter(jc),
          UJ = JJ.getFocused(),
          eJ = UJ ? FJ.findIndex((JJ => JJ.contains(UJ))) : -1;
        let XJ = 0,
          AJ = ZJ > 0 ? 0 : FJ.length - 1;
        if (eJ >= 0 && UJ) XJ = Math.max(0, NU(FJ[eJ]).indexOf(UJ)), AJ = eJ + ZJ;
        else if (UJ) {
          const JJ = UJ.getBoundingClientRect(),
            cJ = FJ.map((cJ => {
              const FJ = cJ.getBoundingClientRect();
              return ZJ > 0 ? FJ.top >= JJ.top : FJ.bottom <= JJ.bottom
            }));
          AJ = ZJ > 0 ? cJ.indexOf(!0) : cJ.lastIndexOf(!0)
        }
        for (let qJ = AJ; qJ >= 0 && qJ < FJ.length; qJ += ZJ) {
          const cJ = NU(FJ[qJ]);
          if (cJ.length > 0) return void JJ.setFocus(cJ[Math.min(XJ, cJ.length - 1)], {
            byUser: !0
          })
        }
      },
      TU = (JJ, cJ, ZJ) => {
        var FJ, UJ;
        const eJ = null !== (FJ = null === JJ || void 0 === JJ ? void 0 : JJ.getFocused()) && void 0 !== FJ ? FJ : null,
          XJ = null !== eJ && void 0 !== eJ && eJ.closest("[data-pad-row]") ? "x" : "y",
          AJ = null !== (UJ = eJ ? IJ(eJ, XJ, cJ) : null) && void 0 !== UJ ? UJ : bJ(cJ, XJ);
        if (!AJ) return;
        const qJ = eJ ? mc(eJ) : null;
        if (gJ(AJ, XJ, ZJ * ("y" === XJ ? AJ.clientHeight : AJ.clientWidth) * .85), !JJ || !qJ) return;
        const jJ = HJ(AJ),
          YJ = JJ.getEnabledCandidates(cJ).filter((JJ => AJ.contains(JJ) && PJ(JJ.getBoundingClientRect(), jJ))),
          hJ = IU(qJ, YJ.map((JJ => JJ.getBoundingClientRect())));
        hJ >= 0 && JJ.setFocus(YJ[hJ], {
          scroll: !1,
          byUser: !0
        })
      };
    let CU = null;
    const uU = (JJ, cJ) => {
        var ZJ, FJ;
        const UJ = cJ.querySelector("[data-pad-friends-column]"),
          eJ = JJ.getFocused();
        if (!UJ || !eJ || !UJ.contains(eJ)) return !1;
        const XJ = JJ.getEnabledCandidates(cJ).filter((JJ => !UJ.contains(JJ))),
          AJ = IU(mc(eJ), XJ.map((JJ => JJ.getBoundingClientRect()))),
          qJ = null === (ZJ = CU) || void 0 === ZJ ? void 0 : ZJ.deref();
        return JJ.setFocus(null !== qJ && void 0 !== qJ && qJ.isConnected ? qJ : null !== (FJ = XJ[AJ]) && void 0 !== FJ ? FJ : null, {
          byUser: !0
        }), !0
      },
      iU = JJ => {
        const cJ = (0, YJ.j)(JJ);
        return (0, nJ.G)(cJ) || DU.w.some((JJ => (0, YJ.j)(JJ) === cJ)) ? null : cJ
      },
      RU = (JJ, cJ) => {
        const ZJ = iU(cJ);
        return null !== ZJ && JJ.wasPressed(ZJ)
      },
      LU = function(JJ, cJ, ZJ) {
        let FJ = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const UJ = (JJ => {
            var cJ, ZJ;
            return null !== (cJ = null === (ZJ = pU(JJ)) || void 0 === ZJ ? void 0 : ZJ.querySelector("[data-pad-tab][data-pad-selected='true']")) && void 0 !== cJ ? cJ : null
          })(cJ),
          eJ = JJ && UJ ? new Set(JJ.getEnabledCandidates(cJ)) : null;
        (0, jU.b)(), ZJ === YU.m.SETTINGS && (0, hU.k)(qJ.d.get("openEverythingMenuName")) ? qJ.d.set({
          openEverythingMenuName: ZJ
        }) : (0, hU.s)(new Event("padMenuShortcut"), ZJ, FJ), JJ && eJ && UJ && dU(JJ, cJ, eJ, UJ.closest("[data-pad-tabs]"))
      },
      aU = JJ => null !== JJ.closest(".Dropdown-root") || null !== JJ.querySelector(".Dropdown-root.is-open"),
      BU = JJ => null !== (0, kU.d)() && "popup" !== JJ.layer.kind && !pU(JJ.root) && !aU(JJ.root),
      tU = (0, GJ.e)(nJ.$),
      oU = (0, GJ.e)(nJ.$),
      lU = (JJ, cJ, ZJ) => {
        if (((JJ, cJ) => {
            const ZJ = (0, YJ.j)("chat");
            return gU(cJ) && JJ.isHeld(ZJ) ? "hold" === HU.update(JJ.wasPressed(ZJ), JJ.isHeld(ZJ), performance.now(), fJ.e[(0, DJ.k)().tapHoldTime].wheelMs) && (hJ.e.consumeButton(ZJ), jJ.i.Uf(WU.o), !0) : (HU.release(), !1)
          })(cJ, ZJ.layer.kind)) return !0;
        const FJ = ZJ.root;
        for (const [XJ, AJ] of [
            ["menuTabPrevious", -1],
            ["menuTabNext", 1]
          ])
          if (cJ.wasPressed((0, YJ.j)(XJ))) {
            const cJ = aU(FJ) ? null : pU(FJ);
            if (cJ) zU(JJ, FJ, cJ, AJ);
            else if (BU(ZJ)) {
              var UJ;
              const cJ = JJ ? new Set(JJ.getEnabledCandidates(FJ)) : null;
              null !== (UJ = (0, kU.d)()) && void 0 !== UJ && UJ(AJ) && JJ && cJ && dU(JJ, FJ, cJ, null)
            } else JJ && OU(JJ, FJ, AJ);
            return !0
          } for (const [XJ, AJ, qJ] of [
            ["menuPageUp", -1, tU],
            ["menuPageDown", 1, oU]
          ]) {
          const ZJ = (0, YJ.j)(XJ);
          if (cJ.wasPressed(ZJ) && qJ.reset(), qJ.update(cJ.isHeld(ZJ), performance.now())) return TU(JJ, FJ, AJ), !0
        }
        const eJ = "popup" === ZJ.layer.kind;
        return RU(cJ, "pause") ? (eJ || (0, hU.o)() && "menu" !== ZJ.layer.kind || LU(JJ, FJ, (0, hU.o)() ? YU.m.SETTINGS : (0, PU.b)()), !0) : !!RU(cJ, "leaderboard") && ("home" === ZJ.layer.kind ? (JJ => {
          const cJ = [...JJ.querySelectorAll("[data-pad-notifications]")].find(jc);
          cJ && Mc(cJ)
        })(FJ) : eJ || LU(JJ, FJ, YU.m.LOBBY_LEADERBOARD, "inGame" === qJ.d.get("gameState")), !0)
      },
      Je = (JJ, cJ, ZJ) => {
        if (lU(JJ, cJ, ZJ)) return !0;
        const FJ = "home" === ZJ.layer.kind;
        if (cJ.wasPressed((0, YJ.j)("menuSecondary"))) {
          const cJ = JJ.getFocused(),
            UJ = cJ ? GU(cJ) : null;
          if (UJ) return Mc(UJ), !0;
          if (FJ) {
            const cJ = ZJ.root.querySelector("[data-pad-search] input");
            return cJ && xc(cJ, ZJ.root) ? (JJ.setFocus(cJ, {
              byUser: !0
            }), Mc(cJ)) : qJ.d.set({
              searchOpen: !0
            }), !0
          }
        }
        return !(!FJ || !RU(cJ, "inventory")) && (((JJ, cJ) => {
          var ZJ, FJ;
          const UJ = cJ.querySelector("[data-pad-friends-column]");
          if (!UJ || !jc(UJ)) return void(0, hU.s)(new Event("padMenuShortcut"), YU.m.SOCIAL);
          if (uU(JJ, cJ)) return;
          const eJ = null !== (ZJ = null === (FJ = UJ.querySelector("[data-pad-friends-start]")) || void 0 === FJ ? void 0 : FJ.getBoundingClientRect().top) && void 0 !== ZJ ? ZJ : -1 / 0,
            XJ = JJ.getEnabledCandidates(UJ),
            AJ = XJ.filter((JJ => JJ.getBoundingClientRect().top >= eJ)),
            qJ = AJ.length > 0 ? AJ : XJ,
            jJ = bU(qJ.map((JJ => JJ.getBoundingClientRect())));
          JJ.setFocus(jJ >= 0 ? qJ[jJ] : null, {
            byUser: !0
          })
        })(JJ, ZJ.root), !0)
      },
      ce = JJ => {
        var cJ, ZJ, FJ;
        const UJ = dc(JJ);
        if (null !== UJ) return UJ;
        const eJ = (null !== (cJ = null !== (ZJ = null !== (FJ = JJ.getAttribute("aria-label")) && void 0 !== FJ ? FJ : JJ.getAttribute("title")) && void 0 !== ZJ ? ZJ : JJ.textContent) && void 0 !== cJ ? cJ : "").replace(/\s+/g, " ").trim();
        return eJ ? `${JJ.tagName}:${eJ.slice(0,100)}` : null
      };
    class Ze {
      constructor() {
        this.remembered = new Map, this.history = []
      }
      enter(JJ) {
        const cJ = this.history.indexOf(JJ);
        if (cJ >= 0) {
          for (const JJ of this.history.splice(cJ + 1)) this.remembered.delete(JJ);
          return !0
        }
        return this.remembered.delete(JJ), this.history.push(JJ), this.history.length > 32 && this.forget(this.history[0]), !1
      }
      forget(JJ) {
        this.remembered.delete(JJ);
        const cJ = this.history.indexOf(JJ);
        cJ >= 0 && this.history.splice(cJ, 1)
      }
      remember(JJ, cJ, ZJ, FJ) {
        const UJ = ce(cJ),
          eJ = dc(cJ),
          XJ = null !== eJ && ((JJ, cJ) => {
            let ZJ = 0;
            for (const FJ of JJ.querySelectorAll("[data-pad-key], [href]"))
              if ((FJ.getAttribute("data-pad-key") === cJ || FJ.getAttribute("href") === cJ) && (ZJ++, ZJ > 1)) return !0;
            return !1
          })(ZJ, eJ) ? Math.max(0, this.twins(FJ(), eJ).indexOf(cJ)) : 0;
        this.remembered.set(JJ, {
          element: new WeakRef(cJ),
          identity: UJ,
          ordinal: XJ
        })
      }
      has(JJ) {
        return this.remembered.has(JJ)
      }
      recall(JJ, cJ) {
        var ZJ, FJ;
        const UJ = this.remembered.get(JJ);
        if (!UJ) return null;
        const eJ = UJ.element.deref();
        if (eJ && cJ.includes(eJ)) return eJ;
        if (null === UJ.identity) return null;
        const XJ = this.twins(cJ, UJ.identity);
        return null !== (ZJ = null !== (FJ = XJ[UJ.ordinal]) && void 0 !== FJ ? FJ : XJ[0]) && void 0 !== ZJ ? ZJ : null
      }
      twins(JJ, cJ) {
        return JJ.filter((JJ => ce(JJ) === cJ))
      }
    }
    var Fe = ZJ(1181);
    const Ue = JJ => {
        const cJ = [];
        let ZJ = JJ;
        for (; ZJ && ZJ !== document.body;) {
          const JJ = getComputedStyle(ZJ).zIndex;
          "auto" !== JJ && cJ.push(Number(JJ) || 0), ZJ = ZJ.parentElement
        }
        return cJ.reverse()
      },
      ee = (JJ, cJ) => {
        const ZJ = ((JJ, cJ) => {
          const ZJ = Math.max(JJ.length, cJ.length);
          for (let eJ = 0; eJ < ZJ; eJ++) {
            var FJ, UJ;
            const ZJ = (null !== (FJ = JJ[eJ]) && void 0 !== FJ ? FJ : 0) - (null !== (UJ = cJ[eJ]) && void 0 !== UJ ? UJ : 0);
            if (0 !== ZJ) return ZJ
          }
          return 0
        })(Ue(JJ), Ue(cJ));
        if (0 !== ZJ) return ZJ > 0;
        if (JJ.contains(cJ)) return !1;
        if (cJ.contains(JJ)) return !0;
        const FJ = JJ.compareDocumentPosition(cJ);
        return !!(FJ & Node.DOCUMENT_POSITION_PRECEDING) || !(FJ & Node.DOCUMENT_POSITION_FOLLOWING) && null
      },
      Xe = (JJ, cJ) => {
        var ZJ;
        return null !== (ZJ = ee(JJ.root, cJ.root)) && void 0 !== ZJ ? ZJ : JJ.order > cJ.order
      },
      Ae = (JJ, cJ) => cJ.some((cJ => !cJ.contains(JJ) && !JJ.contains(cJ) && !0 === ee(cJ, JJ)));
    let qe = null,
      je = null,
      Ye = -1;
    const he = () => {
        var JJ;
        const cJ = null === (JJ = document.timeline) || void 0 === JJ ? void 0 : JJ.currentTime,
          ZJ = "number" === typeof cJ ? cJ : null;
        if (null !== ZJ && ZJ === je && Ye === (0, Fe.b)()) return qe;
        let FJ = null;
        const UJ = [],
          eJ = [...document.querySelectorAll("[data-pad-covers]")].filter(jc);
        for (const XJ of (0, Fe.d)()) {
          const JJ = XJ.getRoot(),
            cJ = !!JJ && jc(JJ) && !Ae(JJ, eJ);
          if (XJ.shown && !cJ && UJ.push(XJ), XJ.shown = cJ, !JJ || !cJ) continue;
          const ZJ = {
            layer: XJ,
            root: JJ,
            order: XJ.order
          };
          FJ && !Xe(ZJ, FJ) || (FJ = ZJ)
        }
        qe = FJ, je = ZJ, Ye = (0, Fe.b)();
        for (const XJ of UJ)(0, Fe.g)(XJ);
        return qe
      },
      De = () => {
        const JJ = he();
        return !(null === JJ || void 0 === JJ || !JJ.layer.close) && (JJ.layer.close(), je = null, !0)
      },
      se = () => {
        var JJ, cJ;
        return null !== (JJ = null === (cJ = he()) || void 0 === cJ ? void 0 : cJ.root) && void 0 !== JJ ? JJ : null
      },
      ne = JJ => JJ ? {
        ...JJ,
        root: se()
      } : null;
    let Ge = null,
      fe = null,
      xe = (0, DJ.k)().menuNavigation,
      re = null;
    const ve = new QJ;
    let me = null;
    jJ.i.subscribe(DJ.g, (() => {
      const JJ = (0, DJ.k)().menuNavigation;
      JJ !== xe && (xe = JJ, Ge = null, fe = null)
    }));
    const Qe = () => {
        var JJ;
        return null !== (JJ = Ge) && void 0 !== JJ ? JJ : (0, DJ.k)().menuNavigation
      },
      Ee = JJ => {
        if (Se()) {
          if (re = ne(JJ), "hybrid" === Qe()) return ve.lock(), void(fe = fe ? null : se());
          Ge = "focus" === Qe() ? "cursor" : "focus"
        }
      },
      Ve = () => {
        const JJ = re;
        return re = null, JJ
      };
    let Ke = {
      root: null,
      firstSeenMs: -1 / 0,
      atMs: -1 / 0,
      has: !1
    };
    const ye = function(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const ZJ = Ke.root === JJ,
          FJ = ZJ ? Ke.firstSeenMs : cJ,
          UJ = Ke.has || cJ - FJ > 1e3;
        return (!ZJ || !UJ || cJ - Ke.atMs > 250) && (Ke = {
          root: JJ,
          firstSeenMs: FJ,
          atMs: cJ,
          has: Gc(JJ)
        }), Ke.has
      },
      Se = () => {
        const JJ = se();
        return null !== JJ && ye(JJ)
      },
      Ie = () => {
        const JJ = he();
        return fe && (null === JJ || void 0 === JJ ? void 0 : JJ.root) !== fe && (fe = null), (JJ => {
          let {
            mode: cJ,
            hasLayer: ZJ,
            hasCandidates: FJ,
            hybridCursorEngaged: UJ
          } = JJ;
          return ZJ ? "cursor" !== cJ && FJ() ? "hybrid" === cJ && UJ ? "cursor" : "focus" : "cursor" : null
        })({
          mode: Qe(),
          hasLayer: null !== JJ,
          hasCandidates: () => null !== JJ && ye(JJ.root),
          hybridCursorEngaged: null !== fe
        })
      },
      Me = () => "hybrid" === Qe() && Se(),
      be = "pad-focused";
    var we = ZJ(3972),
      We = ZJ(4433);
    const ge = "[data-pad-destructive]",
      He = `${ge}, [data-pad-back]`,
      Pe = JJ => ({
        rect: JJ.getBoundingClientRect(),
        destructive: JJ.matches(ge),
        closes: null !== JJ.closest("[data-pad-close-button]"),
        unavailable: JJ.matches("[data-pad-unavailable]")
      }),
      ke = JJ => {
        let {
          destructive: cJ,
          closes: ZJ,
          unavailable: FJ
        } = JJ;
        return cJ ? ZJ ? 2 : 3 : FJ ? 1 : 0
      },
      pe = JJ => {
        let cJ = -1;
        for (let ZJ = 0; ZJ < JJ.length; ZJ++) {
          if (cJ < 0) {
            cJ = ZJ;
            continue
          }
          const FJ = JJ[ZJ],
            UJ = JJ[cJ];
          ke(FJ) === ke(UJ) ? MU(FJ.rect, UJ.rect) < 0 && (cJ = ZJ) : ke(FJ) < ke(UJ) && (cJ = ZJ)
        }
        return cJ
      },
      de = "[data-pad-tabs]",
      ze = "[data-pad-tab]",
      Ne = (JJ, cJ) => {
        const ZJ = JJ.querySelector(`${ze}[data-pad-selected='true']`);
        return ZJ && cJ.includes(ZJ) ? ZJ : null
      },
      Oe = (JJ, cJ) => {
        let ZJ = cJ;
        for (let FJ = cJ.parentElement; FJ && !FJ.contains(JJ); FJ = FJ.parentElement) ZJ = FJ;
        return ZJ
      };
    class Te {
      constructor() {
        this.contentReturn = null
      }
      redirect(JJ, cJ, ZJ, FJ) {
        var UJ, eJ;
        const XJ = JJ.closest(de),
          AJ = cJ.closest(de);
        var qJ;
        if (AJ && AJ !== XJ) return XJ || (this.contentReturn = new WeakRef(JJ)), null !== (qJ = Ne(AJ, ZJ)) && void 0 !== qJ ? qJ : cJ;
        if (!XJ || AJ) return cJ;
        const jJ = Oe(JJ, cJ),
          YJ = null === (UJ = this.contentReturn) || void 0 === UJ ? void 0 : UJ.deref();
        return YJ && jJ.contains(YJ) && ZJ.includes(YJ) ? YJ : null !== (eJ = this.pickRegionStart(jJ, IJ(cJ, "y", FJ), ZJ)) && void 0 !== eJ ? eJ : cJ
      }
      findTabContent(JJ, cJ, ZJ) {
        const FJ = JJ.closest(de);
        if (!FJ || !JJ.matches(ze) || FJ.contains(cJ)) return null;
        const UJ = cJ.closest(de);
        if (UJ && Number(UJ.dataset.padTabs) <= Number(FJ.dataset.padTabs)) return null;
        const eJ = Oe(JJ, cJ);
        return ZJ.some((JJ => eJ.contains(JJ) && !JJ.closest(He))) || !cJ.closest(He) ? eJ : null
      }
      pickContentStart(JJ, cJ, ZJ) {
        return this.contentReturn = null, this.pickRegionStart(JJ, IJ(JJ, "y", ZJ), cJ)
      }
      pickReplacedContentStart(JJ, cJ, ZJ, FJ) {
        if (!cJ.contains(JJ)) return null;
        const UJ = Oe(cJ, JJ),
          eJ = ZJ.filter((JJ => cJ.contains(JJ) && !UJ.contains(JJ) && !JJ.closest(He)));
        return 0 === eJ.length ? null : (this.contentReturn = null, this.pickRegionStart(cJ, IJ(eJ[0], "y", FJ), eJ))
      }
      backToStrip(JJ, cJ, ZJ) {
        if (JJ.closest(de)) return null;
        const FJ = pU(ZJ);
        for (const UJ of ZJ.querySelectorAll(de)) {
          if (Number(UJ.dataset.padTabs) <= 1 || UJ === FJ) continue;
          const eJ = Ne(UJ, cJ),
            XJ = eJ ? Oe(JJ, UJ).parentElement : null;
          if (eJ && XJ && XJ !== ZJ && ZJ.contains(XJ)) return this.contentReturn = new WeakRef(JJ), eJ
        }
        return null
      }
      pickRegionStart(JJ, cJ, ZJ) {
        const FJ = HJ(cJ),
          UJ = JJ => {
            const cJ = ZJ.filter((cJ => JJ.contains(cJ) && !cJ.closest(de) && PJ(cJ.getBoundingClientRect(), FJ))),
              UJ = pe(cJ.map(Pe));
            return UJ >= 0 ? cJ[UJ] : null
          };
        for (const eJ of rc(JJ)) {
          const JJ = UJ(eJ);
          if (JJ) return JJ
        }
        for (const eJ of JJ.querySelectorAll(de)) {
          const JJ = Ne(eJ, ZJ);
          if (JJ) return JJ
        }
        return UJ(JJ)
      }
    }
    const Ce = "[data-pad-default-focus], .Dropdown-option.is-selected",
      ue = ".Dropdown-root.is-open > .Dropdown-menu",
      ie = "[data-pad-no-step-in]",
      Re = "[data-pad-tabs]",
      Le = "[data-pad-press-area]",
      ae = JJ => {
        let cJ = JJ;
        for (let ZJ = 0; cJ && ZJ <= 4; ZJ++, cJ = cJ.parentElement) {
          const ZJ = cJ.querySelector(".CircleInfo");
          if (ZJ) return cJ === JJ || cJ.querySelectorAll(Ac).length <= 1 ? ZJ : null;
          if (cJ !== JJ && cJ.querySelectorAll(Ac).length > 1) return null
        }
        return null
      },
      Be = (JJ, cJ, ZJ) => {
        Sc(JJ, cJ, ZJ);
        const FJ = null !== JJ && void 0 !== JJ && JJ.isConnected ? ae(JJ) : null,
          UJ = ae(cJ);
        FJ !== UJ && Sc(FJ, UJ, UJ ? mc(UJ) : ZJ, {
          leaveBelow: JJ,
          enterBelow: cJ
        })
      },
      te = JJ => JJ.getBoundingClientRect(),
      oe = (JJ, cJ, ZJ) => {
        const FJ = new Set(ZJ);
        for (let UJ = JJ; UJ; UJ = UJ === cJ ? null : UJ.parentElement)
          if (FJ.has(UJ)) return UJ;
        return null
      },
      le = (JJ, cJ) => !JJ.root || JJ.root === cJ || cJ.matches(ue) && JJ.root.contains(cJ);
    const JX = new class {
        constructor() {
          this.focused = null, this.layerKey = null, this.layerRoot = null, this.memory = new Ze, this.tabStripNav = new Te, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.confirmPressedOn = null, this.confirmRepeatKey = null, this.confirmRepeated = !1, this.confirmRepeat = (0, GJ.e)(nJ.v), this.dpadRepeats = new Map(nJ.B.map((JJ => [JJ, (0, GJ.e)(nJ.D)]))), this.stickRepeat = new nJ.c((0, GJ.e)(nJ.eb)), this.lastRefocusCheckMs = -1 / 0, this.enteredLayerAtMs = 0, this.lastFocusedCentre = null, this.lastActivatedKey = null, this.lastActivated = null, this.lastActivatedAtMs = -1 / 0, this.pendingFocus = null, this.tabOpenWait = null, this.retryMove = null, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.wasActive = !1, this.layerKind = null, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.listeners = new Set, this.dropdownLayers = new WeakMap, this.dropdownLayerCounter = 0
        }
        install() {
          const JJ = hJ.e.register({
              name: "focus",
              isActive: () => (0, sJ.h)() && "focus" === Ie(),
              onFrame: JJ => {
                this.onFrame(JJ)
              },
              onDeactivate: () => {
                this.deactivate()
              },
              wakePressActs: JJ => (0, hJ.i)(JJ) || JJ === (0, YJ.j)("menuConfirm") && Pc((0, sJ.c)())
            }),
            cJ = (0, Fe.i)((JJ => {
              const cJ = (0, Fe.l)(JJ);
              null === JJ.memoryKey && this.memory.forget(cJ), cJ === this.layerKey && (this.layerKey = null)
            }));
          let ZJ = -1 / 0;
          const FJ = XJ.e.onFrame((JJ => {
              (0, sJ.h)() || JJ.timestampMs - ZJ < 100 || (ZJ = JJ.timestampMs, he())
            })),
            UJ = JJ => {
              JJ.isTrusted && JJ.target instanceof Element && XJ.e.getActivePad() && this.noteChosenStop(JJ.target)
            };
          return document.addEventListener("click", UJ, !0), () => {
            JJ(), cJ(), FJ(), document.removeEventListener("click", UJ, !0), this.deactivate()
          }
        }
        noteChosenStop(JJ) {
          var cJ, ZJ;
          const FJ = he();
          if (!FJ || !FJ.root.contains(JJ)) return;
          const UJ = null !== (cJ = null === (ZJ = JJ.closest(".Dropdown-root")) || void 0 === ZJ ? void 0 : ZJ.querySelector(".Dropdown-control")) && void 0 !== cJ ? cJ : JJ,
            eJ = oe(UJ, FJ.root, this.getEnabledCandidates(FJ.root));
          if (!eJ) return;
          const XJ = (0, Fe.l)(FJ.layer);
          XJ === this.layerKey && FJ.root === this.layerRoot || this.beginLayer(FJ, XJ), this.wasActive ? this.setFocus(eJ, {
            scroll: !1,
            byUser: !0
          }) : (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.focused = eJ, this.lastFocusedCentre = mc(eJ), this.rememberFocus(eJ), this.notify())
        }
        getFocused() {
          return this.focused
        }
        isActive() {
          return this.wasActive
        }
        onChange(JJ) {
          return this.listeners.add(JJ), () => {
            this.listeners.delete(JJ)
          }
        }
        notify() {
          for (const JJ of this.listeners) JJ()
        }
        deactivate() {
          var JJ;
          if (this.wasActive) {
            this.wasActive = !1, this.layerKind = null, this.confirmPressedOn = null, this.retryMove = null, this.pendingFocus = null;
            for (const JJ of this.dpadRepeats.values()) JJ.reset();
            this.stickRepeat.reset(), null !== (JJ = this.focused) && void 0 !== JJ && JJ.isConnected && Be(this.focused, null, mc(this.focused)), this.notify()
          }
        }
        setFocus(JJ) {
          var cJ;
          let {
            scroll: ZJ = !0,
            byUser: FJ = !1
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (FJ && (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1), JJ === this.focused) return;
          const UJ = null !== (cJ = this.focused) && void 0 !== cJ && cJ.isConnected ? this.focused : null;
          if (this.focused = JJ, JJ) {
            ZJ && (JJ.classList.add(be), JJ.scrollIntoView({
              block: "nearest",
              inline: "nearest",
              behavior: "instant"
            })), FJ && ((JJ, cJ) => {
              const ZJ = cJ.closest("[data-pad-friends-column]");
              ZJ && JJ && !ZJ.contains(JJ) && (CU = new WeakRef(JJ))
            })(UJ, JJ);
            const cJ = mc(JJ);
            this.lastFocusedCentre = cJ, this.movedInLayer && this.rememberFocus(JJ), Be(UJ, JJ, cJ), "false" === JJ.getAttribute("aria-pressed") && JJ.closest("[data-pad-select-on-focus]") && Mc(JJ)
          } else UJ && Be(UJ, null, mc(UJ));
          this.notify()
        }
        rememberFocus(JJ) {
          const cJ = this.layerRoot;
          this.layerKey && cJ && this.memory.remember(this.layerKey, JJ, cJ, (() => this.getEnabledCandidates(cJ)))
        }
        noteCursorActivation(JJ) {
          const cJ = he();
          if (!cJ || !cJ.root.contains(JJ)) return;
          const ZJ = this.getEnabledCandidates(cJ.root),
            FJ = new Set(ZJ);
          let UJ = JJ;
          for (; UJ && !FJ.has(UJ);) UJ = UJ === cJ.root ? null : UJ.parentElement;
          if (!(UJ instanceof HTMLElement)) return;
          const eJ = (0, Fe.l)(cJ.layer);
          this.memory.enter(eJ), this.memory.remember(eJ, UJ, cJ.root, (() => ZJ))
        }
        notePageEnteredByCursor(JJ) {
          return this.memory.enter(JJ)
        }
        recallStop(JJ, cJ) {
          return this.findRemembered(JJ, cJ)
        }
        focusWhenFound(JJ) {
          let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
            ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
          this.pendingFocus = {
            find: JJ,
            untilMs: performance.now() + cJ,
            holdWhile: ZJ
          }
        }
        getEnabledCandidates(JJ) {
          return sc(JJ).filter((JJ => !Yc(JJ)))
        }
        onFrame(JJ) {
          var cJ;
          const ZJ = he();
          if (!ZJ) return;
          const FJ = null !== (cJ = this.findOpenDropdown(ZJ)) && void 0 !== cJ ? cJ : ZJ,
            UJ = performance.now(),
            eJ = (0, Fe.l)(FJ.layer);
          if (eJ !== this.layerKey || FJ.root !== this.layerRoot) {
            const cJ = this.focused;
            if (null !== this.layerKey && FJ.root === this.layerRoot && cJ && xc(cJ, FJ.root)) this.continueLayer(eJ, cJ), this.wasActive || this.resume(FJ.root, UJ);
            else {
              const cJ = !this.wasActive && !JJ.wokeDevice,
                XJ = "death" === this.layerKind || cJ,
                AJ = this.enterLayer(FJ, eJ);
              "popup" !== FJ.layer.kind || FJ !== ZJ || AJ ? "menu" === FJ.layer.kind && XJ && "inGame" === qJ.d.get("gameState") && !(0, jU.f)(3e3) && (this.pressGuardExtends = !0, this.pressGuardUntilMs = UJ + we.d) : (this.pressGuardExtends = cJ, this.pressGuardUntilMs = UJ + (cJ ? we.d : XJ ? 500 : 250))
            }
          } else this.wasActive || this.resume(FJ.root, UJ);
          if (this.layerKind = FJ.layer.kind, this.wasActive || (this.wasActive = !0, this.notify()), JJ.wokeDevice && this.focusPointedStop(FJ.root), this.validateFocus(FJ, UJ), UJ < this.pressGuardUntilMs && this.pressGuardExtends && (JJ.wasPressed((0, YJ.j)("menuConfirm")) || JJ.wasPressed((0, YJ.j)("menuBack"))) && (this.pressGuardUntilMs = UJ + we.d), UJ >= this.pressGuardUntilMs && this.handleButtons(JJ, FJ)) return;
          const XJ = "hybrid" === Qe();
          if (XJ && (JJ => {
              const cJ = se();
              return cJ !== me && (me = cJ, ve.lock()), ve.update(JJ, (0, DJ.k)().moveDeadzone)
            })(JJ.leftStick)) return AJ = this.getHandoff(), re = ne(AJ), fe = se(), void hJ.e.handOffHeldInput();
          var AJ;
          this.handleDirections(JJ, FJ, UJ, !XJ), this.handleScroll(JJ, FJ)
        }
        findOpenDropdown(JJ) {
          const cJ = JJ.root.querySelector(ue);
          if (!cJ || !jc(cJ)) return null;
          let ZJ = this.dropdownLayers.get(cJ);
          return ZJ || (this.dropdownLayerCounter++, ZJ = {
            id: `dropdown-${this.dropdownLayerCounter}`,
            kind: JJ.layer.kind,
            getRoot: () => cJ,
            close: () => {
              Wc(cJ)
            },
            memoryKey: null
          }, this.dropdownLayers.set(cJ, ZJ)), {
            layer: ZJ,
            root: cJ,
            order: JJ.order
          }
        }
        focusPointedStop(JJ) {
          const cJ = (0, sJ.c)(),
            ZJ = cJ ? document.elementFromPoint(cJ.x, cJ.y) : null;
          if (!ZJ || !JJ.contains(ZJ)) return;
          const FJ = oe(ZJ, JJ, this.getEnabledCandidates(JJ));
          FJ && this.setFocus(FJ, {
            scroll: !1,
            byUser: !0
          })
        }
        enterLayer(JJ, cJ) {
          const ZJ = this.beginLayer(JJ, cJ),
            FJ = Ve();
          return FJ && le(FJ, JJ.root) ? (this.takeOver(JJ.root, FJ, this.enteredLayerAtMs), ZJ) : (this.restoreLayerFocus(JJ.root, ZJ), ZJ)
        }
        beginLayer(JJ, cJ) {
          return this.layerKey = cJ, this.layerRoot = JJ.root, this.lastActivatedKey = null, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoreOnFocusLoss = !1, this.retryMove = null, this.pendingFocus = null, this.confirmPressedOn = null, this.lastRefocusCheckMs = -1 / 0, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.enteredLayerAtMs = performance.now(), this.lastFocusedCentre = null, this.memory.enter(cJ)
        }
        restoreLayerFocus(JJ, cJ) {
          const ZJ = cJ && this.layerKey ? this.findRemembered(JJ, this.layerKey) : null;
          this.restoredFromMemory = null !== ZJ, this.setFocus(null !== ZJ && void 0 !== ZJ ? ZJ : this.pickInitial(JJ, {
            waitForContent: !0
          }))
        }
        continueLayer(JJ, cJ) {
          this.layerKey = JJ;
          const ZJ = this.memory.enter(JJ);
          this.restoreOnFocusLoss = ZJ, this.movedInLayer && !ZJ && this.rememberFocus(cJ)
        }
        resume(JJ, cJ) {
          var ZJ;
          const FJ = Ve();
          FJ && le(FJ, JJ) ? this.takeOver(JJ, FJ, cJ) : null !== (ZJ = this.focused) && void 0 !== ZJ && ZJ.isConnected && Be(null, this.focused, mc(this.focused))
        }
        pickPreferred(JJ) {
          var cJ;
          return null !== (cJ = this.layerKey ? this.findRemembered(JJ, this.layerKey) : null) && void 0 !== cJ ? cJ : this.pickInitial(JJ, {
            waitForContent: !0
          })
        }
        findRemembered(JJ, cJ) {
          return this.memory.has(cJ) ? this.memory.recall(cJ, this.getEnabledCandidates(JJ)) : null
        }
        getHandoff() {
          var JJ, cJ, ZJ;
          const FJ = null !== (JJ = this.focused) && void 0 !== JJ && JJ.isConnected ? this.focused : null,
            UJ = null !== (cJ = this.layerRoot) && void 0 !== cJ && cJ.isConnected ? this.layerRoot : null;
          return {
            point: FJ ? mc(FJ) : null !== (ZJ = this.lastFocusedCentre) && void 0 !== ZJ ? ZJ : this.getLayerStartPoint(UJ),
            element: FJ,
            direction: null
          }
        }
        getLayerStartPoint(JJ) {
          if (!JJ) return {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          };
          const cJ = this.pickInitial(JJ, {
            includeDisabled: !0
          });
          return mc(null !== cJ && void 0 !== cJ ? cJ : JJ)
        }
        takeOver(JJ, cJ, ZJ) {
          const {
            element: FJ,
            direction: UJ,
            point: eJ
          } = cJ, XJ = FJ instanceof HTMLElement && xc(FJ, JJ) ? FJ : null;
          if (!UJ) {
            const cJ = this.focused;
            return XJ ? this.setFocus(XJ, {
              scroll: !1,
              byUser: !0
            }) : this.focusNearest(JJ, eJ), void(this.focused && this.focused === cJ && this.focused.isConnected && Be(null, this.focused, mc(this.focused)))
          }
          if (this.dpadRepeats.get(UJ).update(!0, ZJ), XJ) return this.setFocus(XJ, {
            scroll: !1,
            byUser: !0
          }), void this.move(JJ, UJ, ZJ, !0);
          const AJ = this.getEnabledCandidates(JJ),
            qJ = AJ.map(te),
            jJ = EU(new DOMRect(eJ.x, eJ.y, 0, 0), qJ, UJ),
            YJ = jJ >= 0 ? jJ : IU(eJ, qJ);
          this.setFocus(YJ >= 0 ? AJ[YJ] : this.pickInitial(JJ), {
            byUser: !0
          })
        }
        focusNearest(JJ, cJ) {
          const ZJ = this.getEnabledCandidates(JJ),
            FJ = IU(cJ, ZJ.map(te));
          this.setFocus(FJ >= 0 ? ZJ[FJ] : this.pickInitial(JJ), {
            byUser: !0
          })
        }
        pickDefault(JJ) {
          let {
            includeDisabled: cJ = !1,
            exclude: ZJ = null
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const FJ = [...JJ.querySelectorAll(Ce)].filter((FJ => (null === ZJ || void 0 === ZJ || !ZJ.has(FJ)) && (cJ ? fc(FJ, JJ) : xc(FJ, JJ)))),
            UJ = pe(FJ.map(Pe));
          return UJ >= 0 ? FJ[UJ] : null
        }
        pickNewAreaStart(JJ, cJ) {
          const ZJ = [...JJ.querySelectorAll(Le)].filter(jc);
          for (const FJ of [...rc(JJ), ...ZJ]) {
            if (cJ.has(FJ)) continue;
            const JJ = this.getEnabledCandidates(FJ),
              ZJ = pe(JJ.map(Pe));
            if (ZJ >= 0) return JJ[ZJ]
          }
          return null
        }
        pickInitial(JJ) {
          let {
            includeDisabled: cJ = !1,
            waitForContent: ZJ = !1,
            enteredAtMs: FJ = this.enteredLayerAtMs
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const UJ = this.pickDefault(JJ, {
            includeDisabled: cJ
          });
          if (UJ) return UJ;
          const eJ = JJ => cJ ? sc(JJ) : this.getEnabledCandidates(JJ);
          let XJ = [];
          for (const DJ of rc(JJ))
            if (XJ = eJ(DJ), XJ.length > 0) break;
          if (0 === XJ.length) {
            if (ZJ && performance.now() - FJ < 1e4 && (JJ => {
                for (const cJ of JJ.querySelectorAll("[data-pad-initial-area]"))
                  if (!qc(cJ, !1)) return !0;
                return !1
              })(JJ)) return null;
            XJ = eJ(JJ)
          }
          const AJ = XJ.map(te),
            qJ = HJ(null),
            jJ = XJ.filter(((JJ, cJ) => PJ(AJ[cJ], qJ))),
            YJ = jJ.length > 0 ? jJ : XJ,
            hJ = pe(YJ.map(Pe));
          return hJ >= 0 ? YJ[hJ] : null
        }
        validateFocus(JJ, cJ) {
          if (this.pendingFocus) {
            var ZJ, FJ;
            const UJ = this.pendingFocus.find();
            if (UJ && xc(UJ, JJ.root)) return this.pendingFocus = null, void this.setFocus(UJ, {
              byUser: !0
            });
            cJ > this.pendingFocus.untilMs && (null === (ZJ = (FJ = this.pendingFocus).holdWhile) || void 0 === ZJ || !ZJ.call(FJ)) && (this.pendingFocus = null)
          }
          const UJ = this.focused,
            eJ = !!UJ && xc(UJ, JJ.root);
          if (!(!eJ && UJ && UJ === this.lastActivated && cJ - this.lastActivatedAtMs < 5e3 && JJ.root.contains(UJ) && jc(UJ) && Yc(UJ))) {
            if (!eJ && this.restoreOnFocusLoss && this.layerKey) return this.restoreOnFocusLoss = !1, this.movedInLayer = !1, this.scrolledInLayer = !1, this.enteredLayerAtMs = cJ, void this.restoreLayerFocus(JJ.root, !0);
            if ((!eJ || !this.movedInLayer && !this.scrolledInLayer) && !(cJ - this.lastRefocusCheckMs < (eJ ? 200 : 50)))
              if (this.lastRefocusCheckMs = cJ, eJ) {
                const ZJ = cJ - this.enteredLayerAtMs < 15e3 ? this.pickPreferred(JJ.root) : null,
                  FJ = null !== ZJ && void 0 !== ZJ ? ZJ : this.restoredFromMemory ? null : this.pickDefault(JJ.root);
                FJ && FJ !== UJ && this.setFocus(FJ)
              } else {
                if (this.lastFocusedCentre && this.movedInLayer) {
                  const cJ = this.pendingFocus;
                  return this.focusNearest(JJ.root, this.lastFocusedCentre), void(this.pendingFocus = cJ)
                }
                this.setFocus(this.pickPreferred(JJ.root))
              }
          }
        }
        handleButtons(JJ, cJ) {
          if (JJ.wasPressed((0, YJ.j)("menuToggleCursor"))) return Ee(this.getHandoff()), !0;
          if (JJ.wasPressed((0, YJ.j)("menuBack"))) {
            const JJ = Wc(cJ.root);
            return JJ ? this.setFocus(JJ, {
              byUser: !0
            }) : uU(this, cJ.root) || (pc(cJ.root) ? this.returnToOpener(cJ.root) : this.backToStrip(cJ.root) || De()), !0
          }
          const ZJ = (0, YJ.j)("menuConfirm");
          var FJ, UJ;
          JJ.wasPressed(ZJ) && (this.confirmPressedOn = this.focused, this.confirmRepeatKey = null !== (FJ = null === (UJ = this.focused) || void 0 === UJ ? void 0 : UJ.getAttribute("data-pad-repeat")) && void 0 !== FJ ? FJ : null, this.confirmRepeated = JJ.wokeDevice, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now()));
          if (JJ.wasReleased(ZJ)) {
            const JJ = this.confirmPressedOn;
            if (this.confirmPressedOn = null, JJ && !this.confirmRepeated && JJ === this.focused && JJ.isConnected && !Yc(JJ)) {
              const ZJ = JJ.matches("[data-pad-tab]") ? JJ.closest(Re) : null;
              ZJ ? this.enterTab(JJ, ZJ, cJ.root, performance.now()) : this.activate(JJ)
            }
            return !0
          }
          return this.repeatConfirm(JJ, ZJ), Je(this, JJ, cJ)
        }
        repeatConfirm(JJ, cJ) {
          const ZJ = this.confirmPressedOn;
          ZJ && null !== this.confirmRepeatKey && JJ.isHeld(cJ) && (ZJ === this.focused && ZJ.isConnected && !Yc(ZJ) && ZJ.getAttribute("data-pad-repeat") === this.confirmRepeatKey ? ZJ.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.confirmRepeated = !0, this.activate(ZJ)) : this.confirmRepeatKey = null)
        }
        backToStrip(JJ) {
          const cJ = this.focused;
          if (!(0, DJ.k)().menuBackToCategories) return !1;
          const ZJ = null !== cJ && void 0 !== cJ && cJ.isConnected ? this.tabStripNav.backToStrip(cJ, this.getEnabledCandidates(JJ), JJ) : null;
          return ZJ && this.setFocus(ZJ, {
            byUser: !0
          }), null !== ZJ
        }
        returnToOpener(JJ) {
          const cJ = this.lastActivatedKey;
          cJ && (this.lastActivatedKey = null, this.focusWhenFound((() => {
            var ZJ;
            return null !== (ZJ = this.getEnabledCandidates(JJ).find((JJ => dc(JJ) === cJ))) && void 0 !== ZJ ? ZJ : null
          })))
        }
        activate(JJ) {
          var cJ;
          if ((0, We.e)(JJ) || Hc(JJ)) return;
          this.lastActivatedKey = null !== (cJ = dc(JJ)) && void 0 !== cJ ? cJ : this.lastActivatedKey, this.lastActivated = JJ, this.lastActivatedAtMs = performance.now(), this.rememberFocus(JJ);
          const ZJ = this.layerRoot;
          if (ZJ) {
            const cJ = new Set(ZJ.querySelectorAll(Ce)),
              FJ = new Set(ZJ.querySelectorAll(`[data-pad-initial-area], ${Le}`)),
              UJ = this.lastActivatedAtMs;
            this.focusWhenFound((() => {
              var UJ;
              return xc(JJ, ZJ) ? null : null !== (UJ = this.pickDefault(ZJ, {
                exclude: cJ
              })) && void 0 !== UJ ? UJ : this.pickNewAreaStart(ZJ, FJ)
            }), 5e3, (() => JJ.isConnected && Yc(JJ) && performance.now() - UJ < 6e4))
          }
          Mc(JJ), gc(JJ)
        }
        handleDirections(JJ, cJ, ZJ, FJ) {
          const UJ = gU(cJ.layer.kind) ? (0, YJ.j)("chat") : null;
          for (const AJ of nJ.B) {
            this.dpadRepeats.get(AJ).update(JJ.isHeld(AJ), ZJ) && (AJ !== UJ || JJ.wasPressed(AJ)) && this.move(cJ.root, AJ, ZJ, !0)
          }
          const eJ = FJ ? (0, nJ.m)(JJ.leftStick, (0, DJ.k)().moveDeadzone) : {
              x: 0,
              y: 0
            },
            XJ = this.stickRepeat.update((0, nJ.ib)(eJ), ZJ);
          if (XJ && this.move(cJ.root, XJ, ZJ, !0), this.retryMove && ZJ >= this.retryMove.atMs) {
            const {
              direction: JJ
            } = this.retryMove;
            this.retryMove = null, this.move(cJ.root, JJ, ZJ, !1)
          }
        }
        move(JJ, cJ, ZJ, FJ) {
          var UJ;
          let eJ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          if (this.pendingFocus && this.pendingFocus === (null === (UJ = this.tabOpenWait) || void 0 === UJ ? void 0 : UJ.wait) && cJ === this.tabOpenWait.direction) return;
          this.pendingFocus = null;
          const XJ = this.focused;
          if (!XJ || !XJ.isConnected) {
            const cJ = this.pickInitial(JJ);
            return void(cJ && this.setFocus(cJ, {
              byUser: !0
            }))
          }
          const AJ = "Left" === cJ || "Right" === cJ,
            qJ = AJ ? (0, We.e)(XJ) : null;
          if (qJ) return void qJ.adjust("Left" === cJ ? -1 : 1);
          const jJ = JJ => null !== JJ.closest("[data-pad-friends-column]"),
            YJ = jJ(XJ),
            hJ = te(XJ),
            DJ = AJ || XJ.closest(Re) ? null : (JJ => {
              const cJ = new Map;
              return ZJ => {
                const FJ = ZJ.closest(Re);
                if (!FJ) return !1;
                let UJ = cJ.get(FJ);
                if (void 0 === UJ) {
                  const ZJ = te(FJ);
                  UJ = QU(JJ, ZJ) && (ZJ.right <= JJ.left || ZJ.left >= JJ.right), cJ.set(FJ, UJ)
                }
                return UJ
              }
            })(hJ),
            sJ = null !== XJ.closest(ie),
            nJ = this.getEnabledCandidates(JJ).filter((JJ => JJ !== XJ && (AJ || jJ(JJ) === YJ) && !(null !== DJ && void 0 !== DJ && DJ(JJ)) && (sJ || !JJ.closest(ie)))),
            GJ = nJ.map(te),
            fJ = IJ(XJ, "y", JJ),
            xJ = HJ(fJ);
          if (!eJ && !PJ(hJ, xJ)) {
            const JJ = nJ.filter(((JJ, cJ) => PJ(GJ[cJ], xJ)));
            if (JJ.length > 0) {
              const cJ = {
                x: xJ.left + xJ.width / 2,
                y: xJ.top + xJ.height / 2
              };
              return void this.setFocus(JJ[IU(cJ, JJ.map(te))], {
                byUser: !0
              })
            }
          }
          const rJ = AJ ? ((JJ, cJ, ZJ) => {
              const FJ = te(JJ),
                UJ = JJ.closest(Re),
                eJ = UJ ? te(UJ) : null;
              return cJ.map(((cJ, XJ) => {
                const AJ = ZJ[XJ];
                if (AJ.bottom > FJ.top && AJ.top < FJ.bottom) return !0;
                const qJ = cJ.closest(Re);
                if (UJ && eJ) return qJ !== UJ && (null !== qJ || AJ.bottom <= eJ.top || AJ.top >= eJ.bottom);
                if (qJ) return !QU(FJ, te(qJ));
                let jJ = JJ;
                for (let ZJ = JJ.parentElement; ZJ && !ZJ.contains(cJ); ZJ = ZJ.parentElement) jJ = ZJ;
                const YJ = te(jJ);
                return AJ.right > YJ.left && AJ.left < YJ.right
              }))
            })(XJ, nJ, GJ) : void 0,
            vJ = AJ && !XJ.closest(Re) ? (JJ => JJ.map((JJ => !JJ.closest(He))))(nJ) : void 0,
            mJ = ((JJ, cJ) => {
              const ZJ = [];
              for (let UJ = JJ; UJ; UJ = UJ.parentElement) ZJ.push(UJ);
              const FJ = new Map;
              return ZJ.forEach(((JJ, cJ) => {
                FJ.set(JJ, ZJ.length - 1 - cJ)
              })), cJ.map((JJ => {
                for (let cJ = JJ; cJ; cJ = cJ.parentElement) {
                  const JJ = FJ.get(cJ);
                  if (void 0 !== JJ) return JJ
                }
                return -1
              }))
            })(XJ, nJ),
            QJ = AJ ? "x" : "y",
            EJ = IJ(XJ, QJ, JJ);
          let VJ = EU(hJ, GJ, cJ, mJ, rJ, vJ);
          if (VJ >= 0 && EJ && !EJ.contains(nJ[VJ])) {
            const JJ = nJ.flatMap(((JJ, cJ) => EJ.contains(JJ) ? [cJ] : [])),
              ZJ = cJ => cJ && JJ.map((JJ => cJ[JJ])),
              FJ = EU(hJ, JJ.map((JJ => GJ[JJ])), cJ, JJ.map((JJ => mJ[JJ])), ZJ(rJ), ZJ(vJ));
            VJ = FJ >= 0 ? JJ[FJ] : VJ
          }
          if (VJ >= 0) return void this.moveTo(XJ, nJ[VJ], nJ, JJ, cJ, eJ);
          if (!FJ) return;
          const KJ = "Right" === cJ || "Down" === cJ ? 1 : -1;
          if (EJ && WJ(EJ, QJ, KJ)) {
            const JJ = "y" === QJ ? EJ.clientHeight : EJ.clientWidth;
            gJ(EJ, QJ, KJ * JJ * .5), this.retryMove = {
              direction: cJ,
              atMs: ZJ + 80
            }
          }
        }
        moveTo(JJ, cJ, ZJ, FJ, UJ, eJ) {
          const XJ = this.tabStripNav.findTabContent(JJ, cJ, ZJ);
          XJ && "true" !== JJ.dataset.padSelected ? this.openTab(JJ, XJ, FJ, UJ) : eJ && !XJ || this.setFocus(this.tabStripNav.redirect(JJ, cJ, ZJ, FJ), {
            byUser: !0
          })
        }
        openTab(JJ, cJ, ZJ, FJ) {
          const UJ = cJ.parentElement;
          Mc(JJ), this.focusWhenFound((() => "true" !== JJ.dataset.padSelected ? null : cJ.isConnected ? this.tabStripNav.pickContentStart(cJ, this.getEnabledCandidates(ZJ), ZJ) : UJ ? this.tabStripNav.pickReplacedContentStart(JJ, UJ, this.getEnabledCandidates(ZJ), ZJ) : null), 3e3), this.tabOpenWait = {
            wait: this.pendingFocus,
            direction: FJ
          }
        }
        enterTab(JJ, cJ, ZJ, FJ) {
          this.move(ZJ, (JJ => {
            const cJ = [...JJ.querySelectorAll(ze)].filter((cJ => cJ.closest(de) === JJ));
            if (cJ.length >= 2) {
              const JJ = cJ[0].getBoundingClientRect(),
                ZJ = cJ[1].getBoundingClientRect();
              return Math.abs(ZJ.top - JJ.top) > Math.abs(ZJ.left - JJ.left) ? "Right" : "Down"
            }
            const ZJ = JJ.getBoundingClientRect();
            return ZJ.height > ZJ.width ? "Right" : "Down"
          })(cJ), FJ, !1, !0), this.focused !== JJ || this.pendingFocus || this.activate(JJ)
        }
        handleScroll(JJ, cJ) {
          const ZJ = (0, nJ.m)(JJ.rightStick, .2);
          if (0 === ZJ.x && 0 === ZJ.y) return void(this.scrollRemainder = {
            x: 0,
            y: 0
          });
          const FJ = JJ.dtMs / 1e3;
          for (const eJ of ["x", "y"]) {
            var UJ;
            const JJ = ZJ[eJ];
            if (0 === JJ) continue;
            const XJ = null !== (UJ = IJ(this.focused, eJ, cJ.root)) && void 0 !== UJ ? UJ : bJ(cJ.root, eJ);
            if (!XJ) continue;
            const AJ = Math.sign(JJ) * JJ * JJ * 1500 * FJ + this.scrollRemainder[eJ],
              qJ = Math.trunc(AJ);
            this.scrollRemainder[eJ] = AJ - qJ, 0 !== qJ && (gJ(XJ, eJ, qJ), this.scrolledInLayer = !0)
          }
        }
      },
      cX = ["controller:keyboardPhraseGg", "controller:keyboardPhraseHi", "controller:keyboardPhraseThanks", "controller:keyboardPhraseGl", "controller:keyboardPhraseBrb", "controller:keyboardPhraseYes", "controller:keyboardPhraseNo", "controller:keyboardPhraseHelp"];
    const ZX = new class {
        constructor() {
          this.lastSendMs = -1 / 0
        }
        claim(JJ) {
          return !(JJ - this.lastSendMs < 2e3) && (this.lastSendMs = JJ, !0)
        }
      },
      FX = {
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
      UX = ["sY", "nameTag"],
      eX = JJ => {
        const cJ = JJ.target instanceof HTMLTextAreaElement && !UX.includes(JJ.kind);
        return oF(JJ.page, "chat" === JJ.kind ? cX.length : 0, cJ)
      },
      XX = JJ => {
        const cJ = JJ.getBoundingClientRect(),
          ZJ = window.innerHeight,
          FJ = cJ.top + cJ.height / 2 < ZJ / 2 ? "bottom" : "top",
          UJ = "bottom" === FJ ? ZJ - cJ.bottom - 6 : cJ.top - 6;
        return {
          placement: FJ,
          maxHeightPx: Math.min(.46 * ZJ, Math.max(.3 * ZJ, UJ))
        }
      },
      AX = JJ => {
        (0, AU.l)(JJ) ? (0, AU.e)().close(): (JX.noteChosenStop(JJ), JJ.blur())
      };
    class qX {
      constructor(JJ) {
        this.host = JJ, this.lastShiftPressMs = -1 / 0, this.phraseTexts = [], this.phrasesFill = !1
      }
      setPhraseRow(JJ, cJ) {
        this.phraseTexts = JJ, this.phrasesFill = cJ
      }
      pressKey(JJ) {
        const cJ = this.host.getState(),
          ZJ = eX(cJ),
          FJ = ZJ[JJ.row][JJ.col];
        this.host.setState({
          ...cJ,
          focus: JJ,
          preferredX: cU(ZJ, JJ)
        }), "char" === FJ.type ? this.typeChar(FJ.char) : "command" === FJ.type ? this.runCommand(FJ.command) : this.sendPhrase(FJ.phraseIndex)
      }
      runCommand(JJ) {
        const cJ = this.host.getState();
        switch (JJ) {
          case "backspace":
            ec(cJ.target);
            break;
          case "space":
            Uc(cJ.target, " ");
            break;
          case "newline":
            Uc(cJ.target, "\n");
            break;
          case "caretLeft":
            Xc(cJ.target, -1);
            break;
          case "caretRight":
            Xc(cJ.target, 1);
            break;
          case "shift": {
            const JJ = performance.now();
            this.host.setState({
              ...cJ,
              shift: UU(cJ.shift, JJ, this.lastShiftPressMs)
            }), this.lastShiftPressMs = JJ;
            break
          }
          case "page":
          case "otherPage": {
            const ZJ = tF(cJ.page, cJ.accentsFirst)[JJ];
            this.host.setState({
              ...cJ,
              page: ZJ,
              focus: FU(eX({
                ...cJ,
                page: ZJ
              }), cJ.focus)
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
            (0, AU.l)(cJ.target) && (0, AU.e)().selectNextChannel()
        }
      }
      submit() {
        var JJ, cJ;
        const {
          target: ZJ
        } = this.host.getState();
        this.host.hide(), (0, AU.l)(ZJ) ? (0, AU.e)().submit() : (JX.noteChosenStop(ZJ), null === (JJ = (cJ = (0, AU.h)(ZJ)).submit) || void 0 === JJ || JJ.call(cJ), document.activeElement === ZJ && ZJ.blur())
      }
      close() {
        const {
          target: JJ
        } = this.host.getState();
        this.host.hide(), AX(JJ)
      }
      typeChar(JJ) {
        const {
          target: cJ,
          page: ZJ,
          shift: FJ
        } = this.host.getState();
        Uc(cJ, XU(JJ, ZJ, FJ)), this.host.setState({
          ...this.host.getState(),
          shift: eU(FJ, JJ)
        })
      }
      sendPhrase(JJ) {
        if (this.phrasesFill) {
          const {
            target: cJ
          } = this.host.getState(), ZJ = this.phraseTexts[JJ];
          ZJ && (cJ.setSelectionRange(0, cJ.value.length), Uc(cJ, ZJ))
        } else ZX.claim(performance.now()) && (this.host.hide(), (0, AU.e)().sendLine(this.phraseTexts[JJ]))
      }
    }
    const jX = {
        initialDelayMs: 380,
        intervalMs: 85
      },
      YX = {
        initialDelayMs: 400,
        intervalMs: 55
      };
    class hX {
      constructor(JJ, cJ) {
        this.host = JJ, this.editor = cJ, this.lastDirection = null, this.navRepeat = new nJ.c((0, GJ.e)(jX)), this.commandRepeats = new Map(OF.filter((JJ => {
          let {
            repeats: cJ
          } = JJ;
          return cJ
        })).map((JJ => {
          let {
            command: cJ
          } = JJ;
          return [cJ, (0, GJ.e)(YX)]
        })))
      }
      reset() {
        this.navRepeat.reset();
        for (const JJ of this.commandRepeats.values()) JJ.reset()
      }
      onVisibleFrame(JJ) {
        const cJ = performance.now();
        for (const {
            command: UJ,
            action: eJ
          }
          of OF) {
          const ZJ = (0, YJ.j)(eJ),
            FJ = this.commandRepeats.get(UJ);
          if ((FJ ? FJ.update(JJ.isHeld(ZJ), cJ) : JJ.wasPressed(ZJ)) && (this.editor.runCommand(UJ), !this.host.getState().visible)) return
        }
        if (JJ.wasPressed((0, YJ.j)("keyboardType")) && (this.editor.pressKey(this.host.getState().focus), !this.host.getState().visible)) return;
        const ZJ = this.readNavDirection(JJ);
        this.lastDirection = ZJ;
        const FJ = this.navRepeat.update(ZJ, cJ);
        FJ && this.navigate(FJ)
      }
      onHiddenFrame(JJ, cJ) {
        var ZJ;
        if (JJ.wasPressed((0, YJ.j)("keyboardClose"))) return void AX(cJ);
        const FJ = (0, YJ.j)("keyboardType");
        if (JJ.wasPressed(FJ)) return hJ.e.consumeButton(FJ), void this.host.open(cJ);
        const UJ = this.readNavDirection(JJ),
          eJ = null !== UJ && UJ !== this.lastDirection;
        if (this.lastDirection = UJ, !eJ || (0, AU.l)(cJ)) return;
        const XJ = (null === (ZJ = he()) || void 0 === ZJ ? void 0 : ZJ.root.contains(cJ)) || null !== cJ.closest(".EntireInventoryWrapper");
        AX(cJ), XJ && hJ.e.handOffHeldInput()
      }
      navigate(JJ) {
        const cJ = this.host.getState();
        if ("Up" === JJ && 0 === cJ.focus.row && "chat" === cJ.kind) return (0, AU.e)().stepHistory(), void this.host.setState({
          ...cJ
        });
        const ZJ = ((JJ, cJ, ZJ, FJ) => {
          if ("Left" === ZJ || "Right" === ZJ) {
            const FJ = JJ[cJ.row].length,
              UJ = (cJ.col + ("Right" === ZJ ? 1 : -1) + FJ) % FJ,
              eJ = {
                row: cJ.row,
                col: UJ
              };
            return {
              pos: eJ,
              preferredX: cU(JJ, eJ)
            }
          }
          const UJ = (cJ.row + ("Down" === ZJ ? 1 : -1) + JJ.length) % JJ.length;
          return {
            pos: {
              row: UJ,
              col: ZU(JJ, UJ, FJ)
            },
            preferredX: FJ
          }
        })(eX(cJ), cJ.focus, JJ, cJ.preferredX);
        this.host.setState({
          ...cJ,
          focus: ZJ.pos,
          preferredX: ZJ.preferredX
        })
      }
      readNavDirection(JJ) {
        for (const cJ of nJ.B)
          if (JJ.isHeld(cJ)) return cJ;
        return (0, nJ.ib)((0, nJ.m)(JJ.leftStick, (0, DJ.k)().moveDeadzone))
      }
    }
    const DX = ["Up", "Down", "Left", "Right"],
      sX = new Set(["CapsLock", "Control", "Fn", "FnLock", "Hyper", "NumLock", "ScrollLock", "Shift", "Super"]);
    const nX = new class {
      constructor() {
        this.state = FX, this.listeners = new Set, this.ownedField = null, this.pendingChatInput = null, this.pendingChatTimeout = 0, this.savedInputMode = null, this.editor = new qX(this), this.padInput = new hX(this, this.editor)
      }
      getState() {
        return this.state
      }
      setState(JJ) {
        const cJ = JJ.visible !== this.state.visible;
        this.state = JJ;
        for (const ZJ of this.listeners) ZJ();
        cJ && jJ.i.Uf(uJ.b, JJ.visible)
      }
      subscribe(JJ) {
        return this.listeners.add(JJ), () => {
          this.listeners.delete(JJ)
        }
      }
      install() {
        const JJ = hJ.e.register({
            name: "keyboard",
            isActive: () => this.state.visible || oJ(document.activeElement),
            onFrame: JJ => {
              this.onFrame(JJ)
            },
            onDeactivate: () => {
              this.padInput.reset()
            },
            wakePressActs: JJ => DX.includes(JJ) || !this.state.visible && JJ === (0, YJ.j)("keyboardType")
          }),
          cJ = JJ => {
            const cJ = JJ.target;
            oJ(cJ) && (cJ === this.pendingChatInput || (0, sJ.h)() ? this.open(cJ) : this.state.visible && cJ !== this.state.target && (this.ownedField = null, this.hide()))
          },
          ZJ = () => {
            setTimeout((() => {
              this.releaseLostField()
            }), 0)
          },
          FJ = JJ => {
            JJ.isTrusted && this.state.visible && (JJ => !JJ.repeat && !sX.has(JJ.key) && !(0, qU.b)(JJ.key) && !/^(Audio|Media|Browser|Launch|Gamepad)/.test(JJ.key))(JJ) && this.hide()
          },
          UJ = () => {
            this.state.visible && this.setState({
              ...this.state,
              ...XX(this.state.target)
            })
          };
        document.addEventListener("focusin", cJ, !0), document.addEventListener("focusout", ZJ, !0), window.addEventListener("keydown", FJ, !0), window.addEventListener("resize", UJ);
        const eJ = jJ.i.subscribe(MF.c, (() => {
            this.openChat()
          })),
          XJ = jJ.i.subscribe(uJ.f, (JJ => {
            this.openForField(JJ)
          }));
        return () => {
          JJ(), document.removeEventListener("focusin", cJ, !0), document.removeEventListener("focusout", ZJ, !0), window.removeEventListener("keydown", FJ, !0), window.removeEventListener("resize", UJ), jJ.i.unsubscribe(eJ), jJ.i.unsubscribe(XJ), this.clearPendingChat(), this.hide(), this.ownedField = null
        }
      }
      openChat() {
        const JJ = (0, AU.e)();
        JJ ? document.activeElement !== JJ.input ? (this.clearPendingChat(), this.pendingChatInput = JJ.input, this.pendingChatTimeout = window.setTimeout((() => {
          this.pendingChatInput = null
        }), 250), JJ.open()) : this.open(JJ.input) : console.warn("controllerOpenChat with no chat mounted")
      }
      openForField(JJ) {
        oJ(JJ) ? (document.activeElement !== JJ && JJ.focus(), document.activeElement === JJ && this.open(JJ)) : console.warn("controllerOpenKeyboard needs an editable input or textarea", JJ)
      }
      open(JJ) {
        var cJ;
        if (this.clearPendingChat(), this.ownedField = JJ, this.state.visible && this.state.target === JJ) return;
        this.restoreInputMode(), (JJ => {
          lJ(JJ) && 0 === JJ.selectionStart && 0 === JJ.selectionEnd && JJ.setSelectionRange(JJ.value.length, JJ.value.length)
        })(JJ), this.savedInputMode = JJ.getAttribute("inputmode"), JJ.setAttribute("inputmode", "none");
        const ZJ = {
          ...FX,
          visible: !0,
          target: JJ,
          kind: (0, AU.l)(JJ) ? "chat" : null !== (cJ = (0, AU.h)(JJ).kind) && void 0 !== cJ ? cJ : null,
          accentsFirst: (FJ = GF.e.get().getCurrentLanguageCode(), BF.has(FJ)),
          ...XX(JJ)
        };
        var FJ;
        const UJ = eX(ZJ),
          eJ = ((JJ, cJ) => {
            for (let ZJ = 0; ZJ < JJ.length; ZJ++) {
              const FJ = JJ[ZJ].findIndex((JJ => "char" === JJ.type && JJ.char === cJ));
              if (-1 !== FJ) return {
                row: ZJ,
                col: FJ
              }
            }
            return null
          })(UJ, "q");
        this.padInput.reset(), this.setState({
          ...ZJ,
          focus: eJ,
          preferredX: cU(UJ, eJ)
        })
      }
      hide() {
        this.state.visible && (this.restoreInputMode(), this.padInput.reset(), this.setState(FX))
      }
      onFrame(JJ) {
        if (this.releaseLostField()) return;
        const cJ = document.activeElement;
        this.state.visible ? this.padInput.onVisibleFrame(JJ) : oJ(cJ) && this.padInput.onHiddenFrame(JJ, cJ)
      }
      releaseLostField() {
        const JJ = this.ownedField;
        return !(null === JJ || JJ.isConnected && document.activeElement === JJ) && (this.ownedField = null, this.hide(), !0)
      }
      clearPendingChat() {
        window.clearTimeout(this.pendingChatTimeout), this.pendingChatInput = null
      }
      restoreInputMode() {
        const {
          target: JJ
        } = this.state;
        JJ && (null === this.savedInputMode ? JJ.removeAttribute("inputmode") : JJ.setAttribute("inputmode", this.savedInputMode), this.savedInputMode = null)
      }
    };
    var GX = ZJ(8070);
    const fX = new Map(OF.map((JJ => {
        let {
          command: cJ,
          action: ZJ
        } = JJ;
        return [cJ, ZJ]
      }))),
      xX = {
        letters: "ABC",
        accents: "\xe0\xe9",
        symbols: "&123"
      },
      rX = {
        chat: "controller:keyboardTargetChat",
        sign: "controller:keyboardTargetSign",
        nameTag: "controller:keyboardTargetNameTag",
        book: "controller:keyboardTargetBook",
        sY: "controller:keyboardTargetBookTitle"
      },
      vX = JJ => {
        const cJ = (() => {
          const [, JJ] = (0, kJ.useReducer)((JJ => JJ + 1), 0);
          return JJ
        })();
        (0, kJ.useEffect)((() => {
          if (!JJ) return;
          const ZJ = ["input", "select", "selectionchange", "keyup", "pointerup"];
          for (const UJ of ZJ) JJ.addEventListener(UJ, cJ);
          document.addEventListener("selectionchange", cJ);
          const FJ = new MutationObserver(cJ);
          return FJ.observe(JJ, {
            attributeFilter: ["placeholder"]
          }), () => {
            FJ.disconnect();
            for (const FJ of ZJ) JJ.removeEventListener(FJ, cJ);
            document.removeEventListener("selectionchange", cJ)
          }
        }), [JJ, cJ])
      },
      mX = JJ => {
        JJ.preventDefault()
      },
      QX = JJ => {
        "mouse" !== JJ.pointerType && JJ.preventDefault()
      },
      EX = () => {
        var JJ;
        const {
          t: cJ
        } = (0, UJ.F)(), ZJ = (() => {
          const [JJ, cJ] = (0, kJ.useState)(nX.getState());
          return (0, kJ.useEffect)((() => nX.subscribe((() => {
            cJ(nX.getState())
          }))), []), JJ
        })(), FJ = (0, sJ.u)(), eJ = (0, kJ.useRef)(null);
        (0, DJ.q)(), (0, sJ.w)(), (0, kJ.useEffect)((() => {
          const JJ = nX.install(),
            cJ = null;
          return () => {
            JJ(), null === cJ || void 0 === cJ || cJ()
          }
        }), []);
        const XJ = (0, kJ.useMemo)((() => cX.map((JJ => cJ(JJ)))), [cJ]),
          AJ = ZJ.visible && "chat" === ZJ.kind ? ZJ.target : null;
        vX(AJ);
        const qJ = null !== (JJ = null === AJ || void 0 === AJ ? void 0 : AJ.value) && void 0 !== JJ ? JJ : "",
          jJ = ((JJ, cJ, ZJ) => {
            if (!JJ.startsWith("/")) return [];
            const FJ = [];
            for (let UJ = cJ.length - 1; UJ >= 0 && FJ.length < ZJ; UJ--) {
              const ZJ = cJ[UJ].trim();
              ZJ.startsWith(JJ) && ZJ !== JJ && !FJ.includes(ZJ) && FJ.push(ZJ)
            }
            return FJ
          })(qJ, qJ.startsWith("/") ? (0, GX.g)() : [], cX.length),
          hJ = qJ.startsWith("/"),
          nJ = hJ ? cX.map(((JJ, cJ) => {
            var ZJ;
            return null !== (ZJ = jJ[cJ]) && void 0 !== ZJ ? ZJ : ""
          })) : XJ;
        if ((0, kJ.useEffect)((() => {
            nX.editor.setPhraseRow(nJ, hJ)
          })), (0, kJ.useEffect)((() => {
            const JJ = eJ.current;
            if (JJ) return JJ.addEventListener("touchstart", mX, {
              passive: !1
            }), () => {
              JJ.removeEventListener("touchstart", mX)
            }
          }), [ZJ.visible]), !ZJ.visible) return null;
        const GJ = eX(ZJ),
          fJ = JU(GJ),
          xJ = JJ => "char" === JJ.type ? XU(JJ.char, ZJ.page, ZJ.shift) : "phrase" === JJ.type ? nJ[JJ.phraseIndex] : (JJ => {
            switch (JJ) {
              case "backspace":
                return "\u232b";
              case "shift":
                return "caps" === ZJ.shift ? "\u21ea" : "\u21e7";
              case "page":
              case "otherPage":
                return xX[tF(ZJ.page, ZJ.accentsFirst)[JJ]];
              case "space":
                return cJ("controller:keyboardSpace");
              case "caretLeft":
                return "\u2190";
              case "caretRight":
                return "\u2192";
              case "newline":
                return "\u21b5";
              case "submit":
                return cJ("chat" === ZJ.kind ? "controller:keyboardSend" : "controller:keyboardDone");
              case "close":
                return "\u2715";
              case "channel":
                return "\u21c4"
            }
          })(JJ.command),
          rJ = JJ => {
            nX.editor.pressKey(JJ)
          };
        return (0, zJ.jsxs)("div", {
          ref: eJ,
          className: dJ()(AU.s, "top" === ZJ.placement ? "PadKeyboardTop" : "PadKeyboardBottom", {
            PadKeyboardMultiline: ZJ.target instanceof HTMLTextAreaElement
          }),
          style: {
            "--pad-keyboard-rows": GJ.length,
            "--pad-keyboard-height": `${ZJ.maxHeightPx}px`
          },
          onPointerDown: QX,
          onMouseDown: mX,
          children: [(0, zJ.jsx)(VX, {
            target: ZJ.target,
            label: ZJ.kind ? cJ(rX[ZJ.kind]) : ZJ.target.placeholder || cJ("controller:keyboardTargetText")
          }), (0, zJ.jsx)("div", {
            className: "PadKeyboardRows",
            children: GJ.map(((JJ, cJ) => (0, zJ.jsx)("div", {
              className: dJ()("PadKeyboardRow", {
                PadKeyboardPhraseRow: "phrase" === JJ[0].type
              }),
              children: JJ.map(((JJ, UJ) => {
                const eJ = FJ && ZJ.focus.row === cJ && ZJ.focus.col === UJ,
                  XJ = "command" === JJ.type ? fX.get(JJ.command) : void 0;
                return (0, zJ.jsx)("div", {
                  className: "PadKeyboardKeySlot",
                  style: {
                    width: JJ.width / fJ * 100 + "%"
                  },
                  children: (0, zJ.jsxs)("div", {
                    className: dJ()("PadKeyboardKey", {
                      PadKeyboardKeyFocused: eJ,
                      PadKeyboardKeyCommand: "command" === JJ.type,
                      PadKeyboardKeyPhrase: "phrase" === JJ.type,
                      PadKeyboardKeyActive: "command" === JJ.type && "shift" === JJ.command && "off" !== ZJ.shift,
                      PadKeyboardKeySubmit: "command" === JJ.type && "submit" === JJ.command
                    }),
                    role: "button",
                    onClick: () => {
                      rJ({
                        row: cJ,
                        col: UJ
                      })
                    },
                    onTouchEnd: JJ => {
                      var ZJ, FJ;
                      JJ.preventDefault(), ZJ = JJ.changedTouches[0], FJ = JJ.currentTarget.getBoundingClientRect(), ZJ && ZJ.clientX >= FJ.left && ZJ.clientX <= FJ.right && ZJ.clientY >= FJ.top && ZJ.clientY <= FJ.bottom && rJ({
                        row: cJ,
                        col: UJ
                      })
                    },
                    children: [(0, zJ.jsx)("span", {
                      className: "PadKeyboardKeyLabel",
                      children: xJ(JJ)
                    }), FJ && XJ && (0, zJ.jsx)(mF, {
                      className: "PadKeyboardKeyGlyph",
                      glyph: (0, YJ.j)(XJ)
                    })]
                  })
                }, UJ)
              }))
            }, cJ)))
          })]
        })
      },
      VX = JJ => {
        let {
          target: cJ,
          label: ZJ
        } = JJ;
        vX(cJ);
        const FJ = (0, kJ.useRef)(null),
          UJ = (0, kJ.useRef)(null),
          eJ = cJ instanceof HTMLTextAreaElement;
        (0, kJ.useLayoutEffect)((() => {
          const JJ = FJ.current,
            cJ = UJ.current;
          eJ ? JJ.scrollTop = cJ.offsetTop - JJ.clientHeight / 2 : JJ.scrollLeft = cJ.offsetLeft - JJ.clientWidth / 2
        }));
        const {
          value: XJ,
          start: AJ,
          end: qJ
        } = Jc(cJ), jJ = "password" === cJ.type ? "\u2022".repeat(XJ.length) : XJ;
        return (0, zJ.jsxs)("div", {
          className: "PadKeyboardPreview",
          children: [(0, zJ.jsx)("div", {
            className: "PadKeyboardPreviewLabel SmallTextBold",
            children: ZJ
          }), (0, zJ.jsxs)("div", {
            ref: FJ,
            className: dJ()("PadKeyboardPreviewText", {
              PadKeyboardPreviewMultiline: eJ
            }),
            children: [(0, zJ.jsx)("span", {
              children: jJ.slice(0, AJ)
            }), (0, zJ.jsx)("span", {
              ref: UJ,
              className: "PadKeyboardCaret"
            }), AJ !== qJ && (0, zJ.jsx)("span", {
              className: "PadKeyboardPreviewSelection",
              children: jJ.slice(AJ, qJ)
            }), (0, zJ.jsx)("span", {
              children: jJ.slice(qJ)
            }), 0 === jJ.length && cJ.placeholder && cJ.placeholder !== ZJ && (0, zJ.jsx)("span", {
              className: "PadKeyboardPreviewPlaceholder",
              children: cJ.placeholder
            })]
          })]
        })
      };
    var KX = ZJ(1294),
      yX = ZJ(2916);
    const SX = function() {
        for (var JJ = arguments.length, cJ = new Array(JJ), ZJ = 0; ZJ < JJ; ZJ++) cJ[ZJ] = arguments[ZJ];
        return cJ.map(YJ.j)
      },
      IX = (JJ, cJ) => {
        const ZJ = iU(JJ);
        return ZJ ? [{
          glyphs: [ZJ],
          labelKey: cJ
        }] : []
      },
      MX = [".BottomMiddleElements", ".BottomLeftElements > *", ".BottomRightElements > *", ".MiddleTextBottom .MiddleText"],
      bX = "--pad-hint-bar-clearance",
      wX = "[data-pad-hint-bar-avoid]",
      WX = JJ => {
        const cJ = [];
        for (const ZJ of JJ) jc(ZJ) && cJ.push(ZJ.getBoundingClientRect());
        return cJ
      },
      gX = JJ => {
        if (!JJ) return null;
        const cJ = he(),
          ZJ = cJ ? WX(((JJ, cJ) => {
            const ZJ = JJ.closest(wX);
            return ZJ ? [ZJ] : ("popup" === cJ ? document : JJ).querySelectorAll(wX)
          })(cJ.root, cJ.layer.kind)) : [],
          FJ = !cJ || cJ.root.hasAttribute("data-pad-shows-hud");
        if (((0, yX.h)(null === cJ || void 0 === cJ ? void 0 : cJ.layer.kind, (0, yX.k)()) || FJ) && ZJ.push(...WX(document.querySelectorAll(MX.join(",")))), 0 === ZJ.length) return null;
        const {
          width: UJ,
          height: eJ
        } = JJ.getBoundingClientRect(), XJ = window.innerHeight - 8, AJ = (0, yX.p)(XJ, {
          width: UJ,
          height: eJ
        }, window.innerWidth / 2, ZJ, 8);
        return AJ === XJ ? null : Math.round(window.innerHeight - AJ)
      },
      HX = JJ => {
        const cJ = document.documentElement.style,
          ZJ = JJ ? `${Math.round(window.innerHeight-JJ.getBoundingClientRect().top)}px` : "";
        cJ.getPropertyValue(bX) !== ZJ && (ZJ ? cJ.setProperty(bX, ZJ) : cJ.removeProperty(bX))
      },
      PX = () => {
        const {
          t: JJ
        } = (0, UJ.F)(), {
          hideButtonHints: cJ
        } = (0, DJ.q)(), ZJ = (0, sJ.u)(), [FJ, eJ] = (0, kJ.useState)(!1), [XJ, jJ] = (0, kJ.useState)([]), [GJ, fJ] = (0, kJ.useState)(null), xJ = (0, kJ.useRef)(null), rJ = (0, kJ.useRef)(null);
        (0, nF.i)(uJ.b, (JJ => {
          eJ(JJ)
        })), (0, nF.i)(yX.m, (() => {
          var JJ;
          null === (JJ = rJ.current) || void 0 === JJ || JJ.call(rJ)
        }));
        const vJ = ZJ && !cJ && !FJ;
        return (0, kJ.useEffect)((() => {
          if (!vJ) return;
          let JJ = null;
          const cJ = () => {
            const cJ = (() => {
                var JJ;
                const cJ = hJ.e.getActiveConsumerName(),
                  ZJ = (0, yX.d)();
                if (ZJ) {
                  const JJ = (0, YJ.j)(ZJ),
                    cJ = "emoteWheel" === ZJ && "wheel" === (0, DJ.k)().emoteButton || !(0, nJ.K)(hJ.e.getLastFrame().values, JJ) ? {
                      glyphs: SX("menuConfirm"),
                      labelKey: "controller:menusSelect"
                    } : {
                      glyphs: [JJ],
                      labelKey: "controller:wheelReleaseToPick"
                    };
                  return [{
                    glyphs: [(0, YJ.w)(JJ)],
                    labelKey: "controller:wheelChoose"
                  }, cJ, {
                    glyphs: SX("menuBack"),
                    labelKey: "controller:wheelClose"
                  }]
                }
                const FJ = he();
                if (!FJ || "focus" !== cJ && "cursor" !== cJ) return (0, yX.b)(YJ.j);
                const UJ = [],
                  eJ = {
                    glyphs: SX("menuBack"),
                    labelKey: "controller:menusBack"
                  },
                  XJ = kc(FJ.root),
                  AJ = XJ ? !Yc(XJ) : Boolean(FJ.layer.close),
                  jJ = !XJ && FJ.layer.closeLabelKey ? FJ.layer.closeLabelKey : eJ.labelKey,
                  sJ = AJ ? [{
                    ...eJ,
                    labelKey: jJ
                  }] : [],
                  GJ = gU(FJ.layer.kind) ? [{
                    glyphs: SX("chat"),
                    labelKey: "controller:menusQuickChat"
                  }] : [];
                if ("cursor" === cJ) return UJ.push({
                  glyphs: SX("menuConfirm"),
                  labelKey: "controller:menusClick"
                }), UJ.push({
                  glyphs: SX("menuSecondary"),
                  labelKey: "controller:menusRightClick"
                }), UJ.push(...sJ), UJ.push(...GJ), UJ.push({
                  glyphs: ["RightStick"],
                  labelKey: "controller:menusScroll"
                }), Se() && UJ.push({
                  glyphs: SX("menuToggleCursor"),
                  labelKey: "controller:menusFocusMode"
                }), UJ;
                const fJ = JX.getFocused();
                fJ && (0, We.e)(fJ) ? UJ.push({
                  glyphs: ["Left", "Right"],
                  labelKey: "controller:menusAdjust"
                }) : fJ && Hc(fJ) ? UJ.push({
                  glyphs: [],
                  labelKey: "controller:menusUseMouse"
                }) : UJ.push({
                  glyphs: SX("menuConfirm"),
                  labelKey: "controller:menusSelect"
                });
                const xJ = fJ ? null === (JJ = GU(fJ)) || void 0 === JJ ? void 0 : JJ.dataset.padSecondary : void 0;
                xJ && UJ.push({
                  glyphs: SX("menuSecondary"),
                  labelKey: xJ
                }), UJ.push(...null !== fJ && void 0 !== fJ && fJ.closest("[data-pad-friends-column]") ? [eJ] : sJ), UJ.push(...GJ);
                const rJ = "home" === FJ.layer.kind;
                aU(FJ.root) || !pU(FJ.root) && !BU(FJ) ? rJ && UJ.push({
                  glyphs: SX("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusRows"
                }) : UJ.push({
                  glyphs: SX("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusTabs"
                }), rJ && (UJ.push(...IX("inventory", "controller:menusFriends")), xJ || UJ.push({
                  glyphs: SX("menuSecondary"),
                  labelKey: "controller:menusSearch"
                }), UJ.push(...IX("pause", "controller:menusSettings")), UJ.push(...IX("leaderboard", "controller:menusNotifications")));
                const vJ = qJ.d.get("openEverythingMenuName");
                return "inGame" === qJ.d.get("gameState") && "popup" !== FJ.layer.kind && null !== vJ && ((0, hU.k)(vJ) ? UJ.push(...IX("leaderboard", "controller:menusClose")) : vJ !== YU.m.LOBBY_LEADERBOARD && UJ.push(...IX("leaderboard", "controller:menusLobby"))), UJ.push({
                  glyphs: SX("menuToggleCursor"),
                  labelKey: "controller:menusCursorMode"
                }), UJ
              })(),
              ZJ = gX(xJ.current),
              FJ = ((JJ, cJ) => `${JJ.map((JJ=>`${JJ.glyphs.join("+")}:${JJ.labelKey}`)).join("|")}@${cJ}`)(cJ, ZJ);
            FJ !== JJ && (JJ = FJ, (0, AJ.unstable_batchedUpdates)((() => {
              jJ(cJ), fJ(ZJ)
            }))), HX(xJ.current)
          };
          cJ(), rJ.current = cJ;
          const ZJ = requestAnimationFrame(cJ),
            FJ = setInterval(cJ, 150);
          return () => {
            rJ.current = null, cancelAnimationFrame(ZJ), clearInterval(FJ), HX(null)
          }
        }), [vJ]), (0, kJ.useLayoutEffect)((() => {
          if (!vJ) return;
          if (0 === XJ.length) return void HX(null);
          const JJ = gX(xJ.current);
          JJ === GJ ? HX(xJ.current) : fJ(JJ)
        }), [vJ, XJ, GJ]), vJ && 0 !== XJ.length ? (0, zJ.jsx)("div", {
          ref: xJ,
          className: "PadButtonHintBar SmallTextBold",
          style: null === GJ ? void 0 : {
            bottom: GJ
          },
          "aria-hidden": !0,
          children: XJ.map((cJ => (0, zJ.jsxs)("div", {
            className: "PadButtonHint",
            children: [cJ.glyphs.map((JJ => (0, zJ.jsx)(mF, {
              glyph: JJ,
              className: "PadButtonHintGlyph"
            }, JJ))), (0, zJ.jsx)("span", {
              children: JJ(cJ.labelKey)
            })]
          }, cJ.labelKey)))
        }) : null
      },
      kX = [Ac, "label", "[data-pad-slider]"].join(","),
      pX = "data-pad-cursor-probe",
      dX = JJ => {
        var cJ;
        const ZJ = (JJ => {
          const cJ = [];
          for (let FJ = JJ; FJ && FJ !== document.body && FJ !== document.documentElement && (cJ.push(FJ), !(cJ.length > 8)); FJ = FJ.parentElement);
          const ZJ = document.documentElement.classList.contains(sJ.o) ? cJ[cJ.length - 1] : void 0;
          null === ZJ || void 0 === ZJ || ZJ.setAttribute(pX, "");
          try {
            return cJ.map((JJ => ({
              element: JJ,
              cursor: getComputedStyle(JJ).cursor
            })))
          } finally {
            null === ZJ || void 0 === ZJ || ZJ.removeAttribute(pX)
          }
        })(JJ);
        if ("pointer" !== (null === (cJ = ZJ[0]) || void 0 === cJ ? void 0 : cJ.cursor)) return null;
        let FJ = 0;
        for (; FJ + 1 < ZJ.length && "pointer" === ZJ[FJ + 1].cursor;) FJ++;
        return ZJ[FJ].element
      },
      zX = (JJ, cJ, ZJ, FJ) => {
        const UJ = FJ.root.contains(JJ) ? FJ.root : null;
        for (let eJ = JJ; eJ && eJ !== document.body && eJ !== document.documentElement; eJ = eJ.parentElement) {
          if (eJ instanceof HTMLElement && SJ(eJ, cJ) && WJ(eJ, cJ, ZJ)) return eJ;
          if (eJ === UJ) break
        }
        return "home" === FJ.layer.kind || "gamePage" === FJ.layer.kind ? ((JJ, cJ) => {
          const ZJ = document.scrollingElement;
          return ZJ instanceof HTMLElement && ![document.documentElement, document.body].some((cJ => {
            const ZJ = getComputedStyle(cJ),
              FJ = "y" === JJ ? ZJ.overflowY : ZJ.overflowX;
            return "hidden" === FJ || "clip" === FJ
          })) && WJ(ZJ, JJ, cJ) ? ZJ : null
        })(cJ, ZJ) : null
      };
    const NX = new class {
        constructor() {
          this.state = {
            x: 0,
            y: 0,
            speedRamp: 0
          }, this.hasPosition = !1, this.active = !1, this.hidden = !1, this.hit = null, this.interactive = null, this.magnet = null, this.lastHitTestMs = -1 / 0, this.press = null, this.draggedSlider = null, this.repeatStop = null, this.repeatKey = null, this.repeated = !1, this.confirmRepeat = (0, GJ.e)(nJ.v), this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.layerRoot = null, this.layerOrder = 0, this.layerPoints = new WeakMap, this.page = null, this.pendingPageStart = null
        }
        install() {
          const JJ = hJ.e.register({
              name: "cursor",
              isActive: () => "cursor" === Ie(),
              onFrame: JJ => {
                this.onFrame(JJ)
              },
              onDeactivate: () => {
                this.deactivate()
              },
              wakePressActs: JJ => (0, hJ.i)(JJ) || JJ === (0, YJ.j)("menuConfirm") && Pc((0, sJ.c)())
            }),
            cJ = (0, Fe.i)((JJ => {
              const cJ = JJ.getRoot();
              cJ && this.layerPoints.delete(cJ), cJ === this.layerRoot && (this.layerRoot = null)
            })),
            ZJ = jJ.i.subscribe("appManagerUpdated|activeInputDevice", (JJ => {
              "gamepad" !== JJ && this.active && !this.hidden && this.hide()
            }));
          return () => {
            JJ(), cJ(), jJ.i.unsubscribe(ZJ), this.deactivate()
          }
        }
        getHighlighted() {
          return this.isVisible() ? this.interactive : null
        }
        isVisible() {
          return this.active && !this.hidden && (0, sJ.h)()
        }
        getPoint() {
          return {
            x: this.state.x,
            y: this.state.y
          }
        }
        hide() {
          this.hidden = !0, this.cancelPress(), this.secondaryArmed = !1, this.clearHover(), this.Uf()
        }
        activate(JJ) {
          this.active = !0, this.hidden = !1;
          const cJ = Ve();
          !cJ || cJ.root && cJ.root !== JJ.root ? this.jumpTo(this.hasPosition ? this.getPoint() : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          }) : (this.setLayer(JJ), this.jumpTo(cJ.point))
        }
        jumpTo(JJ) {
          this.state = {
            x: JJ.x,
            y: JJ.y,
            speedRamp: 0
          }, this.hasPosition = !0, this.lastHitTestMs = -1 / 0
        }
        deactivate() {
          this.active && (this.active = !1, this.page = null, this.pendingPageStart = null, this.cancelPress(), this.clearHover(), this.draggedSlider = null, this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.Uf())
        }
        onFrame(JJ) {
          const cJ = he();
          if (!cJ) return;
          if (this.active || this.activate(cJ), this.followPage(cJ)) return;
          this.followLayer(cJ);
          const ZJ = JJ.wokeDevice ? (0, sJ.c)() : null;
          if (ZJ && this.jumpTo(ZJ), !(0, sJ.h)()) return void this.hide();
          const FJ = (0, YJ.j)("menuToggleCursor");
          if (JJ.wasPressed(FJ)) return hJ.e.consumeButton(FJ), void Ee(this.getHandoff(null));
          if (this.handBackToFocus(JJ)) return;
          const UJ = (0, YJ.j)("menuConfirm"),
            eJ = (0, YJ.j)("menuSecondary");
          if (JJ.wasPressed((0, YJ.j)("menuBack"))) return Wc(cJ.root) || pc(cJ.root) || De(), void this.Uf();
          if (lU(null, JJ, cJ)) return JJ.wasReleased(UJ) && this.press && (this.updateHit(!1), this.updateConfirm(JJ, UJ)), void this.Uf();
          if (document.pointerLockElement) return void this.hide();
          const XJ = Me() ? {
              x: 0,
              y: 0
            } : (JJ => {
              const cJ = (JJ, cJ) => (JJ ? 1 : 0) - (cJ ? 1 : 0);
              return {
                x: cJ(JJ.isHeld("Right"), JJ.isHeld("Left")),
                y: cJ(JJ.isHeld("Down"), JJ.isHeld("Up"))
              }
            })(JJ),
            AJ = (0, DJ.k)().moveDeadzone,
            qJ = ((JJ, cJ) => {
              const ZJ = (0, nJ.m)(JJ, mJ(cJ));
              return Math.hypot(ZJ.x, ZJ.y)
            })(JJ.leftStick, AJ) > 0 || 0 !== XJ.x || 0 !== XJ.y;
          if (this.hidden) {
            const cJ = JJ.wasPressed(UJ),
              ZJ = JJ.wasPressed(eJ);
            if (!qJ && !VJ(JJ.rightStick) && !cJ && !ZJ && !JJ.wokeDevice) return void this.Uf();
            if (this.hidden = !1, this.updateHit(!1), cJ || ZJ) return cJ && (this.press = {
              kind: "ignored"
            }, JJ.wokeDevice && this.beginRepeat()), this.secondaryArmed = !1, void this.Uf()
          }
          this.movePendingPageStart(qJ);
          const jJ = this.getPoint();
          this.state = EJ(this.state, {
            stick: JJ.leftStick,
            moveDeadzone: AJ,
            dpad: XJ,
            dtMs: JJ.dtMs,
            cursorSpeedPercent: (0, DJ.k)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: this.getAssistContext()
          });
          const GJ = this.state.x !== jJ.x || this.state.y !== jJ.y,
            fJ = [UJ, eJ].some((cJ => JJ.wasPressed(cJ) || JJ.wasReleased(cJ)));
          (GJ || fJ || performance.now() - this.lastHitTestMs >= 100) && this.updateHit(GJ), this.updateConfirm(JJ, UJ), this.updateSecondary(JJ, eJ), this.updateScroll(JJ, cJ), this.Uf()
        }
        followPage(JJ) {
          const cJ = "home" === JJ.layer.kind || "gamePage" === JJ.layer.kind,
            ZJ = this.page;
          if (this.page = cJ ? {
              key: (0, Fe.l)(JJ.layer),
              root: JJ.root
            } : null, !this.page || !ZJ || ZJ.root !== JJ.root || ZJ.key === this.page.key) return !1;
          if (this.cancelPress(), this.secondaryArmed = !1, this.setLayer(JJ), "hybrid" === Qe()) return re = null, fe = null, ve.lock(), !0;
          const {
            key: FJ
          } = this.page;
          return this.pendingPageStart = {
            root: JJ.root,
            key: FJ,
            returning: JX.notePageEnteredByCursor(FJ),
            enteredAtMs: performance.now()
          }, !1
        }
        movePendingPageStart(JJ) {
          const cJ = this.pendingPageStart;
          if (!cJ) return;
          if (JJ || cJ.root !== this.layerRoot) return void(this.pendingPageStart = null);
          const ZJ = cJ.returning ? JX.recallStop(cJ.root, cJ.key) : null;
          if (!ZJ && cJ.returning && performance.now() - cJ.enteredAtMs < 1e3) return;
          const FJ = null !== ZJ && void 0 !== ZJ ? ZJ : JX.pickInitial(cJ.root, {
            includeDisabled: !0,
            waitForContent: !0,
            enteredAtMs: cJ.enteredAtMs
          });
          FJ && (this.pendingPageStart = null, this.jumpTo(mc(FJ)))
        }
        setLayer(JJ) {
          this.layerRoot = JJ.root, this.layerOrder = JJ.order
        }
        followLayer(JJ) {
          var cJ;
          if (JJ.root === this.layerRoot) return;
          null !== (cJ = this.layerRoot) && void 0 !== cJ && cJ.isConnected && this.layerPoints.set(this.layerRoot, this.getPoint()), this.cancelPress(), this.draggedSlider = null, this.secondaryArmed = !1;
          const ZJ = this.layerPoints.get(JJ.root),
            FJ = ZJ && JJ.order <= this.layerOrder ? ZJ : JX.getLayerStartPoint(JJ.root);
          this.setLayer(JJ), this.jumpTo(FJ)
        }
        getHandoff(JJ) {
          var cJ;
          return {
            point: this.getPoint(),
            element: null !== (cJ = this.interactive) && void 0 !== cJ ? cJ : this.findDraggedSliderNearby(),
            direction: JJ
          }
        }
        findDraggedSliderNearby() {
          const JJ = this.draggedSlider;
          if (null === JJ || void 0 === JJ || !JJ.isConnected) return null;
          const cJ = JJ.getBoundingClientRect(),
            {
              y: ZJ
            } = this.getPoint();
          return ZJ >= cJ.top - 40 && ZJ <= cJ.bottom + 40 ? JJ : null
        }
        handBackToFocus(JJ) {
          if (!Me()) return !1;
          const cJ = nJ.B.find((cJ => JJ.wasPressed(cJ)));
          return !!cJ && (ZJ = this.getHandoff(cJ), re = ne(ZJ), fe = null, ve.lock(), hJ.e.handOffHeldInput(), !0);
          var ZJ
        }
        getAssistContext() {
          const JJ = this.interactive;
          if (null === JJ || void 0 === JJ || !JJ.isConnected) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const cJ = JJ.getBoundingClientRect();
          if (cJ.width > .4 * window.innerWidth || cJ.height > .4 * window.innerHeight) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const ZJ = (0, DJ.k)().cursorMagnetism && !(0, iJ.d)(JJ) && !JJ.closest("[data-pad-slider]"),
            FJ = this.magnet && this.magnet !== JJ && this.magnet.isConnected ? this.magnet.getBoundingClientRect() : cJ;
          return {
            overInteractive: !0,
            magnetTarget: ZJ ? {
              x: FJ.left + FJ.width / 2,
              y: FJ.top + FJ.height / 2
            } : null
          }
        }
        updateHit(JJ) {
          this.lastHitTestMs = performance.now();
          const cJ = this.getPoint(),
            ZJ = document.elementFromPoint(cJ.x, cJ.y),
            FJ = ZJ && !(0, xJ.o)(ZJ) && (JJ => {
              var cJ;
              const ZJ = he();
              return !(ZJ && !ZJ.root.contains(JJ) && !JJ.closest(".tooltip-container")) || !(null !== (cJ = document.getElementById("root")) && void 0 !== cJ && cJ.contains(JJ))
            })(ZJ) ? ZJ : null;
          if (FJ !== this.hit) return Sc(this.hit, FJ, cJ), this.hit = FJ, void this.setInteractive(FJ ? (JJ => {
            const cJ = JJ.closest(kX);
            if (cJ) {
              var ZJ, FJ;
              const JJ = null !== (ZJ = null === (FJ = cJ.parentElement) || void 0 === FJ ? void 0 : FJ.closest("[data-pad-focusable]")) && void 0 !== ZJ ? ZJ : cJ;
              return Yc(JJ) ? {
                element: null,
                magnet: null
              } : {
                element: JJ,
                magnet: cJ
              }
            }
            const UJ = dX(JJ);
            return {
              element: UJ,
              magnet: UJ
            }
          })(FJ) : {
            element: null,
            magnet: null
          });
          JJ && FJ && Sc(FJ, FJ, cJ)
        }
        setInteractive(JJ) {
          let {
            element: cJ,
            magnet: ZJ
          } = JJ;
          this.interactive = cJ, this.magnet = ZJ
        }
        clearHover() {
          this.hit && Sc(this.hit, null, this.getPoint()), this.hit = null, this.setInteractive({
            element: null,
            magnet: null
          })
        }
        beginPress() {
          const JJ = this.hit;
          if (!JJ || Hc(JJ)) return {
            kind: "ignored"
          };
          const cJ = (0, We.e)(JJ),
            ZJ = JJ.closest("[data-pad-slider]");
          return cJ && ZJ ? {
            kind: "slider",
            slider: ZJ,
            adjuster: cJ
          } : (Vc(JJ, this.getPoint()), {
            kind: "pointer",
            target: JJ
          })
        }
        applySliderFraction(JJ) {
          var cJ;
          const ZJ = JJ.slider.getBoundingClientRect(),
            FJ = ZJ.height > ZJ.width,
            UJ = null === (cJ = JJ.slider.querySelector("[data-pad-slider-handle]")) || void 0 === cJ ? void 0 : cJ.getBoundingClientRect(),
            eJ = UJ ? FJ ? UJ.height : UJ.width : 0,
            XJ = (FJ ? ZJ.height : ZJ.width) - eJ;
          if (XJ <= 0) return;
          const AJ = FJ ? ZJ.bottom - eJ / 2 - this.state.y : this.state.x - ZJ.left - eJ / 2;
          JJ.adjuster.setFraction(Math.max(0, Math.min(1, AJ / XJ)))
        }
        updateConfirm(JJ, cJ) {
          JJ.wasPressed(cJ) && (this.press = JJ.wokeDevice ? {
            kind: "ignored"
          } : this.beginPress(), this.draggedSlider = "slider" === this.press.kind ? this.press.slider : null, this.beginRepeat());
          const ZJ = this.press;
          if (!ZJ) return;
          if (JJ.isHeld(cJ)) return "slider" === ZJ.kind && this.applySliderFraction(ZJ), void this.updateRepeat();
          this.press = null;
          const FJ = this.repeated;
          if (this.endRepeat(), !JJ.wasReleased(cJ)) return void this.endPressWithoutClick(ZJ);
          const UJ = this.getPoint(),
            eJ = this.hit;
          if ("slider" === ZJ.kind && ZJ.adjuster.endDrag(), "pointer" === ZJ.kind) {
            const JJ = null !== eJ && void 0 !== eJ ? eJ : ZJ.target.isConnected ? ZJ.target : null;
            JJ && Kc(JJ, UJ);
            const cJ = eJ && ZJ.target.isConnected && !FJ ? ((JJ, cJ) => {
              for (let ZJ = JJ; ZJ; ZJ = ZJ.parentElement)
                if (ZJ.contains(cJ)) return ZJ;
              return null
            })(ZJ.target, eJ) : null;
            cJ && (JX.noteCursorActivation(cJ), (0, xJ.e)(cJ, new MouseEvent("click", Qc(UJ, 0, 0))), gc(cJ), vc(cJ) && Ic(cJ))
          }
        }
        beginRepeat() {
          var JJ, cJ, ZJ;
          const FJ = null !== (JJ = null === (cJ = this.hit) || void 0 === cJ ? void 0 : cJ.closest("[data-pad-repeat]")) && void 0 !== JJ ? JJ : null;
          this.repeatStop = FJ, this.repeatKey = null !== (ZJ = null === FJ || void 0 === FJ ? void 0 : FJ.getAttribute("data-pad-repeat")) && void 0 !== ZJ ? ZJ : null, this.repeated = !1, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now())
        }
        updateRepeat() {
          const JJ = this.repeatStop;
          if (!JJ) return;
          const cJ = this.hit;
          JJ.isConnected && !Yc(JJ) && JJ.getAttribute("data-pad-repeat") === this.repeatKey && cJ && JJ.contains(cJ) ? JJ.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.repeated = !0, JX.noteCursorActivation(JJ), (0, xJ.e)(JJ, new MouseEvent("click", Qc(this.getPoint(), 0, 0)))) : this.repeatStop = null
        }
        endRepeat() {
          this.repeatStop = null, this.repeated = !1
        }
        endPressWithoutClick(JJ) {
          "slider" === JJ.kind && JJ.adjuster.endDrag(), "pointer" === JJ.kind && JJ.target.isConnected && Kc(JJ.target, this.getPoint())
        }
        cancelPress() {
          this.endRepeat(), this.press && (this.endPressWithoutClick(this.press), this.press = null)
        }
        updateSecondary(JJ, cJ) {
          JJ.wasPressed(cJ) && (this.secondaryArmed = null !== this.hit), this.secondaryArmed && !JJ.isHeld(cJ) && (this.secondaryArmed = !1, JJ.wasReleased(cJ) && this.hit && yc(this.hit, this.getPoint(), 2))
        }
        updateScroll(JJ, cJ) {
          const ZJ = KJ(JJ.rightStick, JJ.dtMs);
          if (0 === ZJ.x && 0 === ZJ.y) return void(this.scrollRemainder = {
            x: 0,
            y: 0
          });
          this.scrollRemainder = {
            x: this.scrollRemainder.x + ZJ.x,
            y: this.scrollRemainder.y + ZJ.y
          };
          const FJ = Math.trunc(this.scrollRemainder.x),
            UJ = Math.trunc(this.scrollRemainder.y);
          this.scrollRemainder = {
            x: this.scrollRemainder.x - FJ,
            y: this.scrollRemainder.y - UJ
          };
          const eJ = this.hit;
          if (!eJ) return;
          let XJ = !1;
          if (0 !== UJ) {
            const JJ = zX(eJ, "y", UJ > 0 ? 1 : -1, cJ);
            JJ && (JJ.scrollBy({
              top: UJ,
              behavior: "instant"
            }), XJ = !0)
          }
          if (0 !== FJ) {
            const JJ = zX(eJ, "x", FJ > 0 ? 1 : -1, cJ);
            JJ && (JJ.scrollBy({
              left: FJ,
              behavior: "instant"
            }), XJ = !0)
          }
          XJ && (this.lastHitTestMs = -1 / 0)
        }
        Uf() {
          Nc.set({
            x: this.state.x,
            y: this.state.y,
            visible: this.isVisible(),
            pressed: null !== this.press && "ignored" !== this.press.kind
          })
        }
      },
      OX = () => {
        const JJ = (0, kJ.useMemo)((() => new TJ), []),
          cJ = (0, sJ.u)();
        return (0, kJ.useEffect)((() => {
          if (!cJ) return;
          let ZJ = 0,
            FJ = {
              of: null,
              atMs: 0,
              list: []
            };
          const UJ = document.getElementsByClassName(be),
            eJ = JJ => {
              for (const cJ of [...UJ]) cJ !== JJ && cJ.classList.remove(be)
            },
            XJ = () => {
              var cJ;
              ZJ = requestAnimationFrame(XJ);
              const UJ = (() => {
                const JJ = JX.getFocused();
                if (JX.isActive() && null !== JJ && void 0 !== JJ && JJ.isConnected) return JJ;
                const cJ = NX.getHighlighted();
                return null !== cJ && void 0 !== cJ && cJ.isConnected ? cJ : null
              })();
              eJ(UJ), UJ && !UJ.classList.contains(be) && UJ.classList.add(be);
              const AJ = null !== (cJ = null === UJ || void 0 === UJ ? void 0 : UJ.closest("[data-pad-reticle-box]")) && void 0 !== cJ ? cJ : UJ;
              JJ.show(AJ ? ((JJ, cJ) => {
                let ZJ = JJ.left,
                  FJ = JJ.top,
                  UJ = JJ.right,
                  eJ = JJ.bottom;
                for (const XJ of cJ) {
                  if (!XJ) continue;
                  const JJ = HJ(XJ);
                  ZJ = Math.max(ZJ, JJ.left), FJ = Math.max(FJ, JJ.top), UJ = Math.min(UJ, JJ.right), eJ = Math.min(eJ, JJ.bottom)
                }
                return UJ <= ZJ || eJ <= FJ ? null : {
                  left: ZJ,
                  top: FJ,
                  width: UJ - ZJ,
                  height: eJ - FJ
                }
              })(AJ.getBoundingClientRect(), (JJ => {
                const cJ = performance.now();
                return (FJ.of !== JJ || cJ - FJ.atMs > 500) && (FJ = {
                  of: JJ,
                  atMs: cJ,
                  list: [IJ(JJ, "y"), IJ(JJ, "x")]
                }), FJ.list
              })(AJ)) : null)
            };
          return ZJ = requestAnimationFrame(XJ), () => {
            cancelAnimationFrame(ZJ), eJ(null), JJ.hide()
          }
        }), [cJ, JJ]), (0, zJ.jsx)(CJ, {
          placer: JJ,
          className: "PadFocusRing"
        })
      },
      TX = (JJ, cJ) => {
        JJ.style.transform = `translate3d(${cJ.x}px, ${cJ.y}px, 0)`, JJ.classList.toggle("Visible", cJ.visible), JJ.classList.toggle("Pressed", cJ.pressed)
      },
      CX = () => {
        const JJ = (0, kJ.useRef)(null);
        return (0, kJ.useEffect)((() => {
          const cJ = Nc.subscribe((cJ => {
            JJ.current && TX(JJ.current, cJ)
          }));
          return JJ.current && TX(JJ.current, Nc.get()), cJ
        }), []), (0, zJ.jsx)("div", {
          ref: JJ,
          className: "PadCursorView",
          "aria-hidden": "true",
          children: (0, zJ.jsx)("div", {
            className: "PadCursorGlyph",
            children: "+"
          })
        })
      },
      uX = "#ncmp__modal.ncmp__active",
      iX = [{
        id: "nitro-consent-banner",
        find: () => document.querySelector(uX) ? null : document.querySelector("#ncmp__tool > .ncmp__banner.ncmp__active"),
        startSelectors: ["[data-ncmp-cmd='reject']", "[data-ncmp-cmd='showModal']"]
      }, {
        id: "nitro-consent-modal",
        find: () => document.querySelector(uX),
        startSelectors: ["[data-ncmp-cmd='reject']"]
      }, {
        id: "google-consent",
        find: () => document.querySelector(".fc-consent-root"),
        startSelectors: [".fc-cta-do-not-consent", ".fc-cta-manage-options"]
      }],
      RX = "PadOverThirdParty",
      LX = new Set(iX.map((JJ => JJ.id))),
      aX = () => {
        const JJ = iX.map((JJ => {
            let {
              id: cJ,
              find: ZJ,
              startSelectors: FJ
            } = JJ;
            return (0, Fe.j)({
              id: cJ,
              kind: "popup",
              getRoot: () => {
                const JJ = ZJ(),
                  cJ = JJ ? ((JJ, cJ) => {
                    var ZJ;
                    for (const FJ of cJ) {
                      const cJ = JJ.querySelector(FJ);
                      if (cJ) return cJ
                    }
                    return null !== (ZJ = [...JJ.querySelectorAll("button")].find((JJ => !JJ.matches(".fc-cta-consent, [data-ncmp-cmd='save']")))) && void 0 !== ZJ ? ZJ : null
                  })(JJ, FJ) : null;
                if (JJ && cJ && !cJ.hasAttribute("data-pad-default-focus")) {
                  for (const cJ of JJ.querySelectorAll("[data-pad-default-focus]")) cJ.removeAttribute("data-pad-default-focus");
                  for (const cJ of JJ.querySelectorAll("[data-pad-hint-bar-avoid]")) cJ.removeAttribute("data-pad-hint-bar-avoid");
                  cJ.setAttribute("data-pad-default-focus", ""), ((JJ, cJ) => {
                    let ZJ = JJ;
                    for (let FJ = JJ.parentElement; FJ && cJ.contains(FJ) && !(FJ.getBoundingClientRect().height >= window.innerHeight / 2); FJ = FJ.parentElement) ZJ = FJ;
                    return ZJ
                  })(cJ, JJ).setAttribute("data-pad-hint-bar-avoid", "")
                }
                return JJ
              },
              close: null,
              memoryKey: null
            })
          })),
          cJ = document.documentElement,
          ZJ = XJ.e.onFrame((() => {
            const JJ = (0, sJ.h)() ? he() : null,
              ZJ = !!JJ && (FJ = JJ.layer, LX.has(FJ.id));
            var FJ;
            cJ.classList.contains(RX) !== ZJ && cJ.classList.toggle(RX, ZJ)
          }));
        return () => {
          for (const cJ of JJ) cJ();
          ZJ(), cJ.classList.remove(RX)
        }
      },
      BX = "PadLargePointer",
      tX = () => {
        (0, kJ.useEffect)((() => {
          const JJ = (0, xJ.l)(document.body),
            cJ = JX.install(),
            ZJ = NX.install(),
            FJ = aX();
          return () => {
            JJ(), cJ(), ZJ(), FJ()
          }
        }), []);
        const {
          largePointer: JJ
        } = (0, DJ.q)(), cJ = (0, KX.q)() && JJ;
        return (0, kJ.useEffect)((() => {
          if (cJ) return document.documentElement.classList.add(BX), () => {
            document.documentElement.classList.remove(BX)
          }
        }), [cJ]), (0, AJ.createPortal)((0, zJ.jsxs)(zJ.Fragment, {
          children: [(0, zJ.jsx)(PX, {}), (0, zJ.jsx)(OX, {}), (0, zJ.jsx)(CX, {})]
        }), document.body)
      };
    var oX = ZJ(8079),
      lX = ZJ(8104),
      JA = ZJ(8092);
    ZJ(8106);
    const cA = (JJ, cJ) => {
        const [ZJ, FJ] = (0, kJ.useState)(!1), [UJ, eJ] = (0, kJ.useState)(null), XJ = (0, kJ.useRef)(null), AJ = (0, kJ.useCallback)((JJ => {
          XJ.current = JJ, eJ(JJ)
        }), []), qJ = (0, kJ.useCallback)((() => {
          FJ(!1), AJ(null)
        }), [AJ]), YJ = (0, kJ.useCallback)((() => {
          FJ(!0)
        }), []), hJ = (0, kJ.useCallback)(((JJ, cJ) => {
          AJ((0, JA.F)(JJ, cJ, XJ.current))
        }), [AJ]);
        (0, kJ.useLayoutEffect)((() => (cJ(ZJ), (0, yX.s)(JJ, ZJ), jJ.i.Uf(yX.m), () => {
          cJ(!1), (0, yX.s)(JJ, !1), jJ.i.Uf(yX.m)
        })), [ZJ, JJ, cJ]), (0, nF.i)("appManagerUpdated|activeInputDevice", (JJ => {
          "gamepad" !== JJ && qJ()
        })), (0, nF.i)("appManagerUpdated|gameState", (JJ => {
          "inGame" !== JJ && qJ()
        }));
        const DJ = () => {
          (0, hU.l)() && qJ()
        };
        return (0, nF.i)("appManagerUpdated|openEverythingMenuName", DJ), (0, nF.i)("appManagerUpdated|openInGameMenuName", DJ), {
          open: ZJ,
          picked: UJ,
          pickedRef: XJ,
          show: YJ,
          aim: hJ,
          close: qJ
        }
      },
      ZA = JJ => {
        let {
          className: cJ,
          slotCount: ZJ,
          picked: FJ,
          slotLabel: UJ,
          renderSlot: eJ,
          centre: XJ
        } = JJ;
        const AJ = Array.from({
          length: ZJ
        }, ((JJ, cJ) => cJ));
        return (0, zJ.jsx)("div", {
          className: dJ()("EmoteWheelOverlay PadRadialWheel", cJ),
          children: (0, zJ.jsxs)("div", {
            className: "EmoteWheel",
            style: {
              width: 2 * JA.t + "rem",
              height: 2 * JA.t + "rem"
            },
            children: [(0, zJ.jsxs)("svg", {
              className: "EmoteWheelSvg",
              viewBox: `0 0 ${JA.p} ${JA.p}`,
              children: [AJ.map((JJ => (0, zJ.jsx)("path", {
                d: (0, JA.v)(JJ, ZJ, JA.h, JA.k, JA.l),
                className: dJ()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: JJ === FJ
                }),
                "aria-label": UJ(JJ)
              }, JJ))), (0, zJ.jsx)("circle", {
                className: "EmoteWheelOuterRing",
                cx: JA.h,
                cy: JA.h,
                r: JA.l
              }), (0, zJ.jsx)("circle", {
                className: "EmoteWheelInnerRing",
                cx: JA.h,
                cy: JA.h,
                r: JA.k
              }), null !== FJ && (0, zJ.jsx)("path", {
                className: "EmoteWheelWedgeOutline",
                d: (0, JA.v)(FJ, ZJ, JA.h, JA.k, JA.l)
              })]
            }), AJ.map((JJ => {
              const cJ = (0, JA.z)(JJ, ZJ);
              return (0, zJ.jsx)("div", {
                className: dJ()("PadRadialWheelSlot SmallTextBold", {
                  PadRadialWheelSlotPicked: JJ === FJ
                }),
                style: {
                  left: `calc(50% + ${JA.d*Math.cos(cJ)}rem)`,
                  top: `calc(50% + ${JA.d*Math.sin(cJ)}rem)`
                },
                "aria-hidden": !0,
                children: eJ(JJ)
              }, JJ)
            })), (0, zJ.jsx)("div", {
              className: "EmoteWheelHint SmallTextBold",
              children: XJ
            })]
          })
        })
      },
      FA = cX.length,
      UA = () => {
        const {
          t: JJ
        } = (0, UJ.F)(), cJ = cA("chat", WU.s), ZJ = (0, kJ.useMemo)((() => cX.map((cJ => JJ(cJ)))), [JJ]);
        return (0, nF.i)(WU.o, (() => {
          cJ.open || (0, oX.e)() || (0, lX.m)() || "inGame" !== qJ.d.get("gameState") || (0, hU.l)() || !(0, AU.e)() || cJ.show()
        })), (0, nF.i)(WU.g, (JJ => {
          cJ.open && cJ.aim(JJ, FA)
        })), (0, nF.i)(WU.k, (() => {
          var JJ;
          if (!cJ.open) return;
          const FJ = cJ.pickedRef.current;
          null !== FJ ? ZX.claim(performance.now()) && (cJ.close(), null === (JJ = (0, AU.e)()) || void 0 === JJ || JJ.sendLine(ZJ[FJ])) : cJ.close()
        })), (0, nF.i)(WU.h, cJ.close), cJ.open ? (0, zJ.jsx)(ZA, {
          className: "QuickChatWheel",
          slotCount: FA,
          picked: cJ.picked,
          slotLabel: JJ => ZJ[JJ],
          renderSlot: JJ => ZJ[JJ],
          centre: null !== cJ.picked ? ZJ[cJ.picked] : JJ("controller:quickChatPick")
        }) : null
      },
      eA = () => {
        const {
          t: JJ
        } = (0, UJ.F)(), cJ = cA("actionButton", lX.q), [ZJ, FJ] = (0, kJ.useState)([]);
        if ((0, nF.i)(lX.i, (JJ => {
            cJ.open || (0, oX.e)() || (0, WU.d)() || "inGame" !== qJ.d.get("gameState") || (0, hU.l)() || (FJ(JJ), cJ.show())
          })), (0, nF.i)(lX.b, (JJ => {
            cJ.open && cJ.aim(JJ, ZJ.length)
          })), (0, nF.i)(lX.e, (() => {
            if (!cJ.open) return;
            const JJ = cJ.pickedRef.current;
            cJ.close(), null !== JJ && jJ.i.Uf(lX.j, ZJ[JJ])
          })), (0, nF.i)(lX.c, cJ.close), !cJ.open) return null;
        const eJ = null !== cJ.picked ? ZJ[cJ.picked] : null;
        return (0, zJ.jsx)(ZA, {
          className: "ActionWheel",
          slotCount: ZJ.length,
          picked: cJ.picked,
          slotLabel: cJ => {
            const FJ = ZJ[cJ];
            return "reload" === FJ.kind ? JJ("controller:gameplayReload") : "customButton" === FJ.kind ? FJ.description || FJ.icon : "touchButton" === FJ.kind && "string" === typeof FJ.label ? FJ.label : ""
          },
          renderSlot: JJ => (0, zJ.jsx)(EF, {
            action: ZJ[JJ]
          }),
          centre: eJ ? (0, zJ.jsx)(EF, {
            action: eJ
          }) : JJ("controller:actionWheelPick")
        })
      };
    var XA = ZJ(80);
    const AA = () => ((0, kJ.useEffect)((() => {
        var JJ, cJ;
        const ZJ = (0, xJ.l)(document.getElementById("root")),
          FJ = (0, sJ.d)(),
          UJ = (() => {
            const JJ = [jJ.i.subscribe(lZ.g, (() => {
                FF("blockBreak")
              })), jJ.i.subscribe("damagedByOtherPlayer", (() => {
                FF("damage")
              })), jJ.i.subscribe("yourAttackHit", (JJ => {
                let {
                  hitSelf: cJ
                } = JJ;
                cJ || FF("hit")
              }))],
              cJ = XJ.e.onActivePadChanged((JJ => {
                JJ && FF("connect")
              }));
            return () => {
              for (const cJ of JJ) jJ.i.unsubscribe(cJ);
              cJ()
            }
          })(),
          eJ = (() => {
            const JJ = new jF({
              getVisitId: qF.d,
              peekVisitId: qF.peekVisitSessionId,
              readReportedVisitId: () => {
                const JJ = AF.k.getItem(YF);
                return "string" === typeof JJ ? JJ : null
              },
              writeReportedVisitId: JJ => {
                AF.k.setItem(YF, JJ)
              },
              isPadActive: sJ.h,
              getPadFamily: () => {
                var JJ, cJ;
                return null !== (JJ = null === (cJ = XJ.e.getActivePad()) || void 0 === cJ ? void 0 : cJ.family) && void 0 !== JJ ? JJ : null
              },
              canReport: eF.k,
              getInputType: XF.e,
              ls: eF.s
            });
            let cJ = 0,
              ZJ = null;
            const FJ = UJ => {
                null === ZJ && ("notReady" !== JJ.check(UJ) || null !== ZJ || cJ >= 20 || (cJ++, ZJ = setTimeout((() => {
                  ZJ = null, FJ(!1)
                }), 3e3)))
              },
              UJ = jJ.i.subscribe("appManagerUpdated|activeInputDevice", (() => {
                FJ(!0)
              })),
              eJ = (0, qF.g)((() => {
                cJ = 0, FJ(!0)
              }));
            return () => {
              jJ.i.unsubscribe(UJ), eJ(), null !== ZJ && clearTimeout(ZJ)
            }
          })(),
          AJ = XJ.e.onFrame(((JJ, cJ) => {
            const ZJ = (0, sJ.m)(JJ);
            hJ.e.dispatch(JJ, cJ, ZJ)
          }));
        let YJ = null !== (JJ = null === (cJ = XJ.e.getActivePad()) || void 0 === cJ ? void 0 : cJ.family) && void 0 !== JJ ? JJ : null;
        const nJ = XJ.e.onActivePadChanged((JJ => {
            var cJ, ZJ;
            (hJ.e.reset(), (0, sJ.p)(), jJ.i.Uf(XJ.d, JJ), (null !== (cJ = null === JJ || void 0 === JJ ? void 0 : JJ.family) && void 0 !== cJ ? cJ : null) !== YJ) && (YJ = null !== (ZJ = null === JJ || void 0 === JJ ? void 0 : JJ.family) && void 0 !== ZJ ? ZJ : null, jJ.i.Uf(DJ.d, (0, DJ.k)()));
            !JJ && (0, sJ.h)() && (0, sJ.s)(qJ.d.get("isTouchScreen") ? "touch" : "keyboardMouse")
          })),
          GJ = () => {
            "visible" !== document.visibilityState && hJ.e.clear()
          },
          fJ = () => {
            hJ.e.clear()
          };
        document.addEventListener("visibilitychange", GJ), window.addEventListener("blur", fJ), XJ.e.start(), (0, UF.k)();
        const rJ = null;
        return () => {
          ZJ(), FJ(), UJ(), eJ(), AJ(), nJ(), document.removeEventListener("visibilitychange", GJ), window.removeEventListener("blur", fJ), XJ.e.stop(), null === rJ || void 0 === rJ || rJ()
        }
      }), []), (0, zJ.jsxs)("div", {
        className: "ControllerRoot",
        children: [(0, zJ.jsx)(bF, {}), (0, zJ.jsx)(zF, {}), (0, zJ.jsx)(NF, {}), (0, zJ.jsx)(EX, {}), (0, zJ.jsx)(tX, {}), (0, zJ.jsx)(UA, {}), (0, zJ.jsx)(eA, {})]
      })),
      qA = () => XA.featureFlags.useControllerSupport ? (0, zJ.jsx)(AA, {}) : null;
    var jA = ZJ(7502),
      YA = ZJ(8120);
    const hA = new Set(UF.i),
      DA = JJ => `${YA.o}${(0,DJ.l)()}/${JJ}`,
      sA = JJ => {
        if (!(0, YA.k)(JJ)) return null;
        const [cJ, ZJ] = JJ.slice(YA.o.length).split("/");
        return (0, jA.d)(cJ) && hA.has(ZJ) ? (0, UF.h)(cJ, ZJ) : null
      };
    var nA = ZJ(8128);
    const GA = () => {
        const {
          t: JJ
        } = (0, UJ.F)(), cJ = (0, sJ.u)(), {
          gameState: ZJ,
          isUiHidden: FJ
        } = (0, qJ.j)(["gameState", "isUiHidden"]), {
          hideButtonHints: eJ,
          sneakMode: XJ
        } = (0, DJ.q)(), [AJ, jJ] = (0, kJ.useState)(nA.e);
        return (0, nF.i)(MF.q, jJ), cJ && !FJ && "inGame" === ZJ && AJ ? (0, zJ.jsxs)("div", {
          className: "PadSneakChip SmallTextBold",
          children: [!eJ && (0, zJ.jsx)(mF, {
            glyph: (0, YJ.j)("toggle" === XJ ? "sneak" : "sneakToggle")
          }), (0, zJ.jsx)("span", {
            children: JJ("controller:gameplaySneaking")
          })]
        }) : null
      },
      fA = 12,
      xA = JJ => {
        let {
          trigger: cJ,
          className: ZJ,
          children: FJ
        } = JJ;
        const UJ = (0, kJ.useRef)(null);
        return (0, kJ.useEffect)((() => {
          let JJ = 0;
          const ZJ = IJ(cJ, "y"),
            FJ = () => {
              JJ = requestAnimationFrame(FJ);
              const eJ = UJ.current;
              if (!eJ || null === cJ || void 0 === cJ || !cJ.isConnected) return;
              const {
                left: XJ,
                top: AJ
              } = function(JJ, cJ, ZJ) {
                let FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                  UJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                const eJ = JJ.left + JJ.width / 2,
                  XJ = Math.max(fA, ZJ.width - fA - cJ.width),
                  AJ = Math.min(Math.max(eJ - cJ.width / 2, fA), XJ),
                  qJ = ZJ.height - FJ;
                let jJ = 0,
                  YJ = qJ;
                if (UJ) {
                  const JJ = Math.max(0, UJ.top),
                    FJ = Math.min(qJ, UJ.bottom);
                  FJ - JJ >= Math.max(ZJ.height / 2, cJ.height + 24) && (jJ = JJ, YJ = FJ)
                }
                const hJ = JJ.top + JJ.height / 2 < (jJ + YJ) / 2 ? YJ - fA - cJ.height : jJ + fA;
                return {
                  left: AJ,
                  top: Math.max(fA, hJ)
                }
              }(cJ.getBoundingClientRect(), {
                width: eJ.offsetWidth,
                height: eJ.offsetHeight
              }, {
                width: window.innerWidth,
                height: window.innerHeight
              }, parseFloat(document.documentElement.style.getPropertyValue(bX)) || 0, null !== ZJ && void 0 !== ZJ && ZJ.isConnected ? ZJ.getBoundingClientRect() : null);
              eJ.style.transform = `translate3d(${Math.round(XJ)}px, ${Math.round(AJ)}px, 0)`, eJ.style.visibility = "visible"
            };
          return FJ(), () => {
            cancelAnimationFrame(JJ)
          }
        }), [cJ]), (0, zJ.jsx)("div", {
          ref: UJ,
          className: ZJ,
          style: {
            position: "fixed",
            left: 0,
            top: 0,
            visibility: "hidden"
          },
          children: FJ
        })
      };
    var rA = ZJ(942),
      vA = ZJ(8131),
      mA = ZJ(1329),
      QA = ZJ(8139),
      EA = ZJ(8145);
    const VA = {
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
        cn: {
          icon: "arrow-left",
          labelKey: "settingsMenu:exitGame"
        }
      },
      KA = () => {
        const {
          t: JJ
        } = (0, UJ.F)(), cJ = (0, sJ.u)(), ZJ = (0, vA.c)(), FJ = (0, kF.f)("_tasks"), eJ = (0, kF.f)("_availableLeaderboards");
        if (!cJ) return null;
        const XJ = (JJ => {
          let {
            hasShop: cJ,
            hasTasksOrLeaderboards: ZJ,
            canInvite: FJ
          } = JJ;
          const UJ = [];
          return cJ && UJ.push("shop"), ZJ && UJ.push("tasks"), FJ && UJ.push("invite"), UJ.push("cn"), UJ
        })({
          hasShop: ZJ,
          hasTasksOrLeaderboards: !(!FJ && !eJ),
          canInvite: !!XA.featureFlags.canUseInviteLinks
        });
        return (0, zJ.jsx)("div", {
          className: "PadLobbyShortcuts",
          children: XJ.map((cJ => {
            const {
              icon: ZJ,
              labelKey: FJ
            } = VA[cJ], UJ = "cn" === cJ ? mA.I : mA.d;
            return (0, zJ.jsx)(UJ, {
              className: "PadLobbyShortcut",
              onClick: () => {
                (JJ => {
                  switch (JJ) {
                    case "shop":
                      return jJ.i.Uf(EA.j), void qJ.d.set({
                        openEverythingMenuName: YU.m.SHOP
                      });
                    case "tasks":
                      return void jJ.i.Uf("toggleMenu", "retentionFeatures");
                    case "invite":
                      return void jJ.i.Uf("toggleMenu", "inviteLink");
                    case "cn":
                      (0, QA.c)()
                  }
                })(cJ)
              },
              children: (0, zJ.jsxs)("div", {
                className: "PadLobbyShortcutInner",
                children: [(0, zJ.jsx)(rA.c, {
                  name: ZJ
                }), (0, zJ.jsx)("span", {
                  children: JJ(FJ)
                })]
              })
            }, cJ)
          }))
        })
      };
    var yA = ZJ(1756);
    const SA = nJ.x,
      IA = ["forward", "backward", "left", "right", "sprint"],
      MA = JJ => JJ.ctrlKey || JJ.altKey || "Alt" === JJ.key || "ArrowUp" === JJ.key || "ArrowDown" === JJ.key || "Tab" === JJ.code || "/" === JJ.key || "Slash" === JJ.code;
    class bA {
      constructor() {
        this.armed = !1, this.swallowedKeys = new Set, this.previousHeld = new Array(nJ.V).fill(!1), this.leftStickWasPressed = !1, this.rightStickWasPressed = !1, this.consumeNextFrame = !1, this.consumeAfterContinue = !1
      }
      setArmed(JJ) {
        this.armed = JJ
      }
      blocksGameplay() {
        return this.armed || this.consumeNextFrame
      }
      onKeyDown(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZJ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return !this.armed || cJ ? !JJ.repeat && this.swallowedKeys.delete(JJ.code) ? {
          swallow: !1,
          continues: !1
        } : {
          swallow: this.swallowedKeys.has(JJ.code),
          continues: !1
        } : "Escape" === JJ.key || JJ.repeat && !this.swallowedKeys.has(JJ.code) ? {
          swallow: !1,
          continues: !1
        } : ZJ ? {
          swallow: !1,
          continues: !0
        } : (this.swallowedKeys.add(JJ.code), {
          swallow: !0,
          continues: (0, sJ.g)(JJ)
        })
      }
      onKeyUp(JJ) {
        return this.swallowedKeys.delete(JJ.code)
      }
      forgetKeys() {
        this.swallowedKeys.clear()
      }
      onPadFrame(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          FJ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const UJ = (0, nJ.t)(JJ.values, this.previousHeld),
          eJ = null === ZJ ? -1 : (0, nJ.p)(ZJ),
          XJ = eJ >= 0 && UJ[eJ] && !this.previousHeld[eJ],
          AJ = UJ.some(((JJ, cJ) => JJ && !this.previousHeld[cJ] && cJ !== eJ)),
          qJ = Math.hypot(JJ.leftStick.x, JJ.leftStick.y) >= SA,
          jJ = Math.hypot(JJ.rightStick.x, JJ.rightStick.y) >= SA,
          YJ = qJ && !this.leftStickWasPressed || jJ && !this.rightStickWasPressed;
        this.previousHeld = UJ, this.leftStickWasPressed = qJ, this.rightStickWasPressed = jJ;
        let hJ = !1;
        this.consumeNextFrame && (this.consumeNextFrame = !1, hJ = !0);
        const DJ = !cJ && XJ && !FJ,
          sJ = !DJ && this.armed && !cJ && (AJ || YJ);
        return (DJ || sJ) && (this.consumeNextFrame = !0, this.consumeAfterContinue = sJ, hJ = !0), {
          continues: sJ,
          back: DJ,
          consumeHeld: hJ
        }
      }
      consumeLeavesMoveStick() {
        return this.consumeAfterContinue
      }
    }
    const wA = new Set([...yA.n, ...yA.D]),
      WA = JJ => ((JJ, cJ, ZJ) => {
        const FJ = Object.keys(cJ).filter((FJ => !ZJ.has(FJ) && cJ[FJ].includes(JJ)));
        return FJ.length > 0 && FJ.every((JJ => IA.includes(JJ)))
      })(JJ, yA.z, wA),
      gA = (JJ, cJ, ZJ) => {
        const FJ = new bA,
          UJ = JJ => {
            if (!JJ.isTrusted) return;
            const {
              swallow: ZJ,
              continues: UJ
            } = FJ.onKeyDown(JJ, !(0, sJ.z)(JJ) || (0, oZ.l)() || (0, hU.l)(), WA(JJ.code));
            ZJ && (JJ.stopImmediatePropagation(), MA(JJ) && JJ.preventDefault()), UJ && ((0, sJ.s)("keyboardMouse"), cJ())
          },
          eJ = JJ => {
            JJ.isTrusted && FJ.onKeyUp(JJ) && (JJ.stopImmediatePropagation(), MA(JJ) && JJ.preventDefault())
          },
          AJ = () => {
            FJ.forgetKeys()
          };
        window.addEventListener("keydown", UJ, !0), window.addEventListener("keyup", eJ, !0), window.addEventListener("blur", AJ);
        const qJ = XJ.e.onFrame((JJ => {
            const UJ = hJ.e.getActiveConsumerName(),
              eJ = ZJ(),
              XJ = eJ ? (0, YJ.j)("menuBack") : null,
              AJ = null !== UJ && "gameplay" !== UJ,
              {
                continues: qJ,
                back: jJ,
                consumeHeld: nJ
              } = FJ.onPadFrame(JJ, AJ, XJ, (0, sJ.l)(JJ));
            if (nJ) {
              const JJ = (0, DJ.k)().swapSticks ? "right" : "left";
              hJ.e.consumeAllHeld(FJ.consumeLeavesMoveStick() ? JJ : null)
            }
            jJ ? null === eJ || void 0 === eJ || eJ() : qJ && cJ()
          })),
          jJ = (0, oZ.n)(`pressToContinue:${JJ}`, (() => FJ.blocksGameplay()));
        return {
          setArmed: JJ => {
            FJ.setArmed(JJ)
          },
          dispose: () => {
            window.removeEventListener("keydown", UJ, !0), window.removeEventListener("keyup", eJ, !0), window.removeEventListener("blur", AJ), qJ(), jJ()
          }
        }
      };
    var HA = ZJ(4401),
      PA = ZJ(2920),
      kA = ZJ(2623),
      pA = ZJ(7507);
    const dA = JJ => {
        let {
          text: cJ
        } = JJ;
        return (0, zJ.jsx)("div", {
          className: "ControllerSettingsHeading",
          children: cJ
        })
      },
      zA = JJ => {
        let {
          label: cJ,
          hint: ZJ,
          options: FJ,
          value: eJ,
          onChange: XJ
        } = JJ;
        const {
          t: AJ
        } = (0, UJ.F)();
        return (0, zJ.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, zJ.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: [(0, zJ.jsxs)("div", {
              className: "ControllerChoiceText",
              children: [(0, zJ.jsx)("div", {
                className: "SliderText",
                children: cJ
              }), ZJ && (0, zJ.jsx)("div", {
                className: "ControllerSettingsHint",
                children: ZJ
              })]
            }), (0, zJ.jsx)(kA.d, {
              options: FJ.map((JJ => ({
                label: "label" in JJ ? JJ.label : AJ(JJ.labelKey),
                value: JJ.value
              }))),
              value: eJ,
              onChange: JJ => {
                XJ(JJ.value)
              }
            })]
          })
        })
      },
      NA = JJ => {
        let {
          settingKey: cJ,
          label: ZJ,
          range: FJ,
          format: UJ
        } = JJ;
        const eJ = (0, DJ.q)();
        return (0, zJ.jsx)(HA.h, {
          name: ZJ,
          min: FJ.min,
          max: FJ.max,
          step: FJ.step,
          padStep: FJ.step,
          initValue: eJ[cJ],
          format: UJ,
          onChange: JJ => {
            (0, DJ.m)({
              [cJ]: (0, pA.y)(JJ, FJ)
            })
          }
        })
      };
    var OA = ZJ(8151),
      TA = ZJ(8159);
    const CA = JJ => JJ instanceof DOMException && ("SecurityError" === JJ.name || "NotAllowedError" === JJ.name),
      uA = JJ => {
        const [cJ] = [...JJ.controllers].sort(((JJ, cJ) => TA.o[JJ] - TA.o[cJ]));
        return TA.m[cJ]
      },
      iA = JJ => {
        (0, OA.c)().allowPhoneMotion().catch((cJ => {
          JJ && CA(cJ) ? JJ() : console.warn("Could not enable the motion sensor", cJ)
        }))
      },
      RA = {
        waiting: "controller:settingsGyroPhoneWaiting",
        noSensor: "controller:settingsGyroPhoneNoSensor",
        on: "controller:settingsGyroPhoneOn",
        denied: "controller:settingsGyroPhoneDenied"
      },
      LA = JJ => {
        let {
          status: cJ
        } = JJ;
        const {
          t: ZJ
        } = (0, UJ.F)(), [FJ, eJ] = (0, kJ.useState)(null), XJ = `${cJ.controllers.join(",")}|${cJ.phoneMotion}`;
        (0, kJ.useEffect)((() => {
          eJ(null)
        }), [XJ]);
        const AJ = () => {
          (0, OA.c)().connectController().then((JJ => {
            eJ(JJ > 0 ? "openFailed" : null)
          })).catch((JJ => {
            CA(JJ) ? eJ("needsClick") : console.warn("Could not connect motion controller", JJ)
          }))
        };
        if (cJ.hidSupported) {
          let JJ = ZJ("controller:settingsGyroConnectHint");
          return "needsClick" === FJ ? JJ = ZJ("controller:settingsGyroConnectNeedsClick") : "openFailed" === FJ ? JJ = ZJ("controller:settingsGyroOpenFailed") : cJ.controllers.length > 0 && (JJ = ZJ("controller:settingsGyroConnected", {
            name: uA(cJ)
          })), (0, zJ.jsx)("div", {
            className: "SettingBox ControllerChoiceSetting",
            children: (0, zJ.jsxs)("div", {
              className: "ControllerChoiceRow",
              children: [(0, zJ.jsx)("div", {
                className: "ControllerSettingsHint",
                children: JJ
              }), (0, zJ.jsx)(mA.d, {
                onClick: AJ,
                children: ZJ("controller:settingsGyroConnect")
              })]
            })
          })
        }
        if ("needsPermission" === cJ.phoneMotion) return (0, zJ.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, zJ.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: ["needsTap" === FJ && (0, zJ.jsx)("div", {
              className: "ControllerSettingsHint",
              children: ZJ("controller:settingsGyroAllowNeedsTap")
            }), (0, zJ.jsx)(mA.d, {
              onClick: () => {
                iA((() => {
                  eJ("needsTap")
                }))
              },
              children: ZJ("controller:settingsGyroAllowMotion")
            })]
          })
        });
        const qJ = RA[cJ.phoneMotion];
        return qJ ? (0, zJ.jsx)("div", {
          className: "ControllerSettingsHint",
          children: ZJ(qJ)
        }) : null
      },
      aA = () => {
        const {
          t: JJ
        } = (0, UJ.F)(), cJ = (0, DJ.q)(), ZJ = (0, OA.e)(), FJ = (0, sJ.w)(), eJ = !ZJ.hidSupported && ZJ.phoneSupported && !ZJ.padConnected, XJ = (ZJ.hidSupported || ZJ.phoneSupported) && !eJ, AJ = (0, YJ.j)("pause");
        return (0, zJ.jsxs)(zJ.Fragment, {
          children: [(0, zJ.jsx)(dA, {
            text: JJ("controller:settingsGyro")
          }), eJ && (0, zJ.jsx)("div", {
            className: "ControllerSettingsHint",
            children: JJ("controller:settingsGyroPhoneNeedsController")
          }), !XJ && !eJ && (0, zJ.jsx)("div", {
            className: "ControllerSettingsHint",
            children: JJ(ZJ.hidBlocked || ZJ.phoneBlocked ? "controller:settingsGyroBlocked" : "controller:settingsGyroUnsupported")
          }), XJ && (0, zJ.jsx)(HA.e, {
            label: JJ(ZJ.hidSupported ? "controller:settingsGyroToggle" : "controller:settingsGyroTogglePhone"),
            checked: cJ.gyroAiming,
            onClick: JJ => {
              var cJ, ZJ;
              (0, DJ.m)({
                gyroAiming: JJ
              });
              const FJ = null === (cJ = null === (ZJ = navigator.userActivation) || void 0 === ZJ ? void 0 : ZJ.isActive) || void 0 === cJ || cJ;
              if (!JJ || !FJ) return;
              const UJ = (0, OA.c)(),
                eJ = UJ.getStatus();
              eJ.hidSupported ? UJ.connectControllerIfNoneGranted().catch((JJ => {
                console.warn("Motion controller picker unavailable", JJ)
              })) : "needsPermission" === eJ.phoneMotion && iA()
            },
            circleInfoText: JJ(ZJ.hidSupported ? "controller:settingsGyroToggleInfo" : "controller:settingsGyroToggleInfoPhone")
          }), XJ && ZJ.hidSupported && (0, zJ.jsx)("div", {
            className: "ControllerSettingsHint",
            children: JJ("controller:settingsGyroSteamHint")
          }), XJ && cJ.gyroAiming && (0, zJ.jsxs)(zJ.Fragment, {
            children: [(0, zJ.jsx)(LA, {
              status: ZJ
            }), (0, zJ.jsx)(NA, {
              settingKey: "gyroSensitivity",
              label: JJ("controller:settingsGyroSensitivity"),
              range: pA.V,
              format: pA.N
            }), (0, zJ.jsx)(zA, {
              label: JJ("controller:settingsGyroActivation"),
              hint: "aiming" === cJ.gyroActivation && (0, zJ.jsx)(PA.d, {
                text: JJ("controller:settingsGyroAimingHint", {
                  button: PA.f
                }),
                glyph: (0, YJ.j)("use")
              }),
              options: pA.S,
              value: cJ.gyroActivation,
              onChange: JJ => {
                (0, DJ.m)({
                  gyroActivation: JJ
                })
              }
            }), "button" === cJ.gyroActivation && (0, zJ.jsx)(zA, {
              label: JJ("controller:settingsGyroButton"),
              hint: JJ("controller:settingsGyroButtonHint"),
              options: pA.v.filter((JJ => JJ !== AJ || JJ === cJ.gyroButton)).map((JJ => ({
                label: vF(FJ, JJ),
                value: JJ
              }))),
              value: cJ.gyroButton,
              onChange: JJ => {
                (0, DJ.m)({
                  gyroButton: JJ
                })
              }
            })]
          })]
        })
      };
    var BA = ZJ(1876);
    const tA = () => {
      const {
        t: JJ
      } = (0, UJ.F)(), cJ = (0, DJ.q)(), ZJ = (0, sJ.w)();
      return (0, zJ.jsxs)(zJ.Fragment, {
        children: [(0, zJ.jsx)(dA, {
          text: JJ("controller:settingsAccessibility")
        }), (0, zJ.jsx)(HA.e, {
          label: JJ("controller:settingsSwapConfirmBack"),
          checked: (0, YJ.G)(cJ.swapConfirmBack, ZJ),
          onClick: JJ => {
            (0, DJ.m)({
              swapConfirmBack: JJ === (0, YJ.G)(null, ZJ) ? null : JJ
            }), BA.f.showMessage({
              translationKey: "controller:settingsSwapToast"
            })
          },
          circleInfoText: JJ("controller:settingsSwapConfirmBackInfo")
        }), (0, zJ.jsx)(zA, {
          label: JJ("controller:settingsButtonRepeat"),
          hint: JJ("controller:settingsButtonRepeatHint"),
          options: pA.r,
          value: cJ.buttonRepeat,
          onChange: JJ => {
            (0, DJ.m)({
              buttonRepeat: JJ
            })
          }
        }), (0, zJ.jsx)(zA, {
          label: JJ("controller:settingsTapHoldTime"),
          hint: JJ("controller:settingsTapHoldTimeHint"),
          options: pA.yb,
          value: cJ.tapHoldTime,
          onChange: JJ => {
            (0, DJ.m)({
              tapHoldTime: JJ
            })
          }
        }), (0, zJ.jsx)(zA, {
          label: JJ("controller:settingsEmoteButton"),
          hint: JJ("wheel" === cJ.emoteButton ? "controller:settingsEmoteButtonWheelHint" : "controller:settingsEmoteButtonTapHoldHint"),
          options: pA.G,
          value: cJ.emoteButton,
          onChange: JJ => {
            (0, DJ.m)({
              emoteButton: JJ
            })
          }
        }), (0, zJ.jsx)(zA, {
          label: JJ("controller:settingsAttackMode"),
          hint: JJ("toggle" === cJ.attackMode ? "controller:settingsAttackToggleHint" : "controller:settingsAttackHoldHint"),
          options: pA.p,
          value: cJ.attackMode,
          onChange: JJ => {
            (0, DJ.m)({
              attackMode: JJ
            })
          }
        }), (0, zJ.jsx)(HA.e, {
          label: JJ("controller:settingsLargePointer"),
          checked: cJ.largePointer,
          onClick: JJ => {
            (0, DJ.m)({
              largePointer: JJ
            })
          },
          circleInfoText: JJ("controller:settingsLargePointerInfo")
        })]
      })
    };
    var oA = ZJ(8167);
    const lA = new class {
        constructor(JJ) {
          this.router = JJ, this.current = null
        }
        claim(JJ, cJ) {
          const ZJ = this.current;
          ZJ && (this.current = null, ZJ.release(), ZJ.onTakenOver());
          const FJ = this.router.register({
              ...JJ,
              name: "capture"
            }),
            UJ = {
              release: FJ,
              onTakenOver: cJ
            };
          return this.current = UJ, () => {
            this.current === UJ && (this.current = null), FJ()
          }
        }
      }(hJ.e),
      Jq = JJ => {
        (0, kJ.useEffect)((() => {
          if (!JJ) return;
          const cJ = JJ();
          let ZJ = !1;
          const FJ = () => {
              ZJ || (ZJ = !0, cJ.onEnd())
            },
            UJ = lA.claim({
              isActive: () => !ZJ,
              onFrame: JJ => {
                cJ.onFrame(JJ, FJ)
              }
            }, FJ),
            eJ = void 0 === cJ.timeoutMs ? void 0 : window.setTimeout(FJ, cJ.timeoutMs),
            XJ = JJ => {
              "Escape" === JJ.key && (JJ.preventDefault(), JJ.stopPropagation(), FJ())
            };
          return window.addEventListener("keydown", XJ, !0), () => {
            ZJ = !0, UJ(), window.clearTimeout(eJ), window.removeEventListener("keydown", XJ, !0)
          }
        }), [JJ])
      },
      cq = JJ => {
        let {
          row: cJ,
          capturing: ZJ,
          onCapture: FJ,
          holdFillRef: eJ,
          onRebind: XJ,
          swapped: AJ
        } = JJ;
        const {
          t: qJ
        } = (0, UJ.F)();
        if ("fixed" === cJ.kind) return (0, zJ.jsx)("div", {
          className: "ControlRow PadControlRow PadControlRowFixed",
          children: (0, zJ.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, zJ.jsx)("div", {
              className: "ControlName",
              children: qJ(cJ.labelKey)
            }), (0, zJ.jsx)("div", {
              className: "ControlBindingsContainer",
              children: (0, zJ.jsx)("div", {
                className: "ControlBindingsList",
                children: (0, zJ.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  children: (0, zJ.jsx)(mF, {
                    glyph: "move" === cJ.stick ? (0, YJ.t)() : (0, YJ.r)()
                  })
                })
              })
            })]
          })
        });
        const {
          action: jJ
        } = cJ, hJ = (0, YJ.j)(jJ), DJ = (0, YJ.n)(jJ), sJ = hJ !== DJ && (0, YJ.d)(jJ, DJ);
        return (0, zJ.jsxs)("div", {
          className: dJ()("ControlRow PadControlRow", {
            Capturing: ZJ
          }),
          children: [(0, zJ.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, zJ.jsx)("div", {
              className: "ControlName",
              children: qJ(pA.k[jJ])
            }), (0, zJ.jsxs)("div", {
              className: "ControlBindingsContainer",
              children: [!ZJ && (0, zJ.jsxs)("div", {
                className: "ControlBindingsList",
                children: [(0, zJ.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    FJ(jJ)
                  },
                  children: (0, zJ.jsx)(mF, {
                    glyph: hJ
                  })
                }), sJ && (0, zJ.jsx)("div", {
                  className: "ControlBinding PadBindingReset",
                  title: qJ("controller:settingsReset"),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    XJ(jJ, DJ)
                  },
                  children: (0, zJ.jsx)(rA.c, {
                    name: "arrows-rotate"
                  })
                })]
              }), ZJ && (0, zJ.jsxs)("div", {
                className: "ControlBindingAddInput",
                children: [(0, zJ.jsxs)("div", {
                  className: "PadCaptureBox",
                  children: [(0, zJ.jsx)("span", {
                    children: qJ("controller:settingsCapturePrompt")
                  }), (0, zJ.jsx)("div", {
                    ref: eJ,
                    className: "PadCaptureHoldFill"
                  })]
                }), (0, zJ.jsx)("div", {
                  className: "ControlBindingAddCancel",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    FJ(null)
                  },
                  children: "\xd7"
                })]
              }), ZJ && (0, zJ.jsx)("div", {
                className: "PadCaptureHint",
                children: (0, zJ.jsx)(PA.d, {
                  text: qJ((0, YJ.d)(jJ, (0, YJ.j)("menuBack")) ? "controller:settingsCaptureCancelOrBindHint" : "controller:settingsCaptureCancelHint", {
                    button: PA.f
                  }),
                  glyph: (0, YJ.j)("menuBack")
                })
              })]
            })]
          }), AJ.map((JJ => (0, zJ.jsx)("div", {
            className: "ControlRowWarning PadSwapNotice",
            children: (0, zJ.jsx)(PA.d, {
              text: qJ("controller:settingsSwapNotice", {
                action: qJ(pA.k[JJ]),
                button: PA.f
              }),
              glyph: (0, YJ.j)(JJ)
            })
          }, JJ))), ZJ && (0, zJ.jsx)("div", {
            className: "PadCaptureTimer",
            style: {
              animationDuration: `${pA.w}ms`
            }
          })]
        })
      },
      Zq = [],
      Fq = JJ => {
        let {
          layoutSetting: cJ
        } = JJ;
        const {
          t: ZJ
        } = (0, UJ.F)(), FJ = (0, DJ.q)();
        (0, sJ.w)();
        const eJ = (0, kJ.useRef)(null),
          [XJ, AJ] = (0, kJ.useState)(null),
          qJ = (0, kJ.useCallback)(((JJ, cJ) => {
            const ZJ = (0, DJ.k)().Zn;
            (0, YJ.C)(JJ, cJ);
            const FJ = (0, YJ.u)(ZJ, JJ);
            AJ(FJ.length > 0 ? {
              action: JJ,
              swapped: FJ
            } : null)
          }), []),
          [jJ, GJ] = ((JJ, cJ) => {
            const [ZJ, FJ] = (0, kJ.useState)(null), UJ = (0, kJ.useMemo)((() => ZJ ? () => {
              const UJ = (0, YJ.j)("menuBack"),
                eJ = new pA.e(UJ, (0, YJ.j)("menuConfirm"), (JJ => (0, YJ.d)(ZJ, JJ)));
              return {
                onFrame: (FJ, XJ) => {
                  var AJ;
                  const qJ = FJ.frame.timestampMs,
                    jJ = eJ.update({
                      ...FJ,
                      isDown: JJ => (0, nJ.K)(FJ.frame.values, JJ)
                    }, qJ);
                  null === (AJ = JJ.current) || void 0 === AJ || AJ.style.setProperty("width", 100 * eJ.getBindHoldProgress(qJ) + "%"), jJ && ("bind" === jJ.kind ? (hJ.e.consumeButton(jJ.button), cJ(ZJ, jJ.button)) : hJ.e.consumeButton(UJ), XJ())
                },
                onEnd: () => {
                  FJ(null)
                },
                timeoutMs: pA.w
              }
            } : null), [ZJ, JJ, cJ]);
            return Jq(UJ), [ZJ, FJ]
          })(eJ, qJ),
          fJ = JJ => {
            JJ && AJ(null), GJ(JJ)
          };
        (0, kJ.useEffect)((() => {
          if (!XJ) return;
          const JJ = window.setTimeout((() => {
            AJ(null)
          }), pA.vb);
          return () => {
            window.clearTimeout(JJ)
          }
        }), [XJ]);
        const xJ = !FJ.swapSticks && 0 === Object.keys(FJ.Zn).length;
        return (0, zJ.jsxs)("div", {
          className: "ControlsContainer PadControlsContainer",
          children: [(0, zJ.jsx)("div", {
            className: "SliderText",
            children: ZJ("controller:settingsRemap")
          }), (0, zJ.jsx)("div", {
            className: "ControllerSettingsHint",
            children: ZJ("controller:settingsRemapHint")
          }), (0, zJ.jsx)(mA.I, {
            className: "ResetBindingsButton PadResetAllButton",
            disabled: xJ,
            onClick: () => {
              fJ(null), AJ(null), (0, YJ.E)()
            },
            children: ZJ("controller:settingsResetAll")
          }), cJ, pA.nb.map(((JJ, cJ) => (0, zJ.jsx)(oA.d, {
            title: ZJ(JJ.titleKey),
            defaultOpen: 0 === cJ,
            children: JJ.rows.map((JJ => (0, zJ.jsx)(cq, {
              row: JJ,
              capturing: "action" === JJ.kind && JJ.action === jJ,
              onCapture: fJ,
              holdFillRef: eJ,
              onRebind: qJ,
              swapped: "action" === JJ.kind && (null === XJ || void 0 === XJ ? void 0 : XJ.action) === JJ.action ? XJ.swapped : Zq
            }, "action" === JJ.kind ? JJ.action : JJ.labelKey)))
          }, JJ.titleKey)))]
        })
      },
      Uq = JJ => {
        let {
          deadzone: cJ,
          dotRef: ZJ,
          labelKey: FJ
        } = JJ;
        const {
          t: eJ
        } = (0, UJ.F)();
        return (0, zJ.jsxs)("div", {
          className: "ControllerTesterStick",
          children: [(0, zJ.jsxs)("div", {
            className: "ControllerTesterStickCircle",
            children: [(0, zJ.jsx)("div", {
              className: "ControllerTesterDeadzone",
              style: {
                width: 100 * cJ + "%",
                height: 100 * cJ + "%"
              }
            }), (0, zJ.jsx)("div", {
              ref: ZJ,
              className: "ControllerTesterDot"
            })]
          }), (0, zJ.jsx)("div", {
            className: "ControllerTesterStickLabel",
            children: eJ(FJ)
          })]
        })
      },
      eq = (JJ, cJ, ZJ, FJ) => {
        var UJ;
        JJ && (JJ.style.left = 50 + 50 * Math.max(-1, Math.min(1, cJ.x)) + "%", JJ.style.top = 50 + 50 * Math.max(-1, Math.min(1, cJ.y)) + "%", null === (UJ = JJ.parentElement) || void 0 === UJ || UJ.classList.toggle("Active", FJ || Math.hypot(cJ.x, cJ.y) > ZJ))
      },
      Xq = JJ => {
        const cJ = {
            deadzone: JJ.moveDeadzone,
            labelKey: "controller:settingsActionMove"
          },
          ZJ = {
            deadzone: JJ.lookDeadzone,
            labelKey: "controller:settingsActionLook"
          };
        return JJ.swapSticks ? {
          left: ZJ,
          right: cJ
        } : {
          left: cJ,
          right: ZJ
        }
      },
      Aq = () => {
        const {
          t: JJ
        } = (0, UJ.F)(), cJ = (() => {
          const [JJ, cJ] = (0, kJ.useState)((() => XJ.e.getActivePad()));
          return (0, nF.i)(XJ.d, (() => {
            cJ(XJ.e.getActivePad())
          })), JJ
        })(), ZJ = Xq((0, DJ.q)()), FJ = (0, kJ.useRef)(null), eJ = (0, kJ.useRef)(null), AJ = (0, kJ.useRef)([]), qJ = (0, kJ.useRef)(null), jJ = (0, kJ.useRef)(null), [sJ, GJ] = (JJ => {
          const [cJ, ZJ] = (0, kJ.useState)(!1), FJ = (0, kJ.useMemo)((() => cJ ? () => {
            const cJ = (0, YJ.j)("menuBack"),
              FJ = new pA.g;
            return {
              onFrame: (ZJ, UJ) => {
                var eJ;
                const XJ = FJ.update({
                  pressed: ZJ.wasPressed(cJ),
                  hj: ZJ.isHeld(cJ)
                }, ZJ.frame.timestampMs);
                null === (eJ = JJ.current) || void 0 === eJ || eJ.style.setProperty("width", 100 * XJ + "%"), XJ >= 1 && (hJ.e.consumeButton(cJ), UJ())
              },
              onEnd: () => {
                ZJ(!1)
              }
            }
          } : null), [cJ, JJ]);
          return Jq(FJ), [cJ, ZJ]
        })(eJ);
        (0, kJ.useEffect)((() => {
          const JJ = JJ => {
            for (const ZJ of nJ.Z) {
              const cJ = (0, nJ.p)(ZJ),
                FJ = AJ.current[cJ];
              if (!FJ) continue;
              const UJ = JJ.values[cJ];
              FJ.classList.toggle("Pressed", UJ >= nJ.x), (0, nJ.M)(cJ) && FJ.style.setProperty("--trigger-fill", `${Math.round(100*UJ)}%`)
            }
            const cJ = Xq((0, DJ.k)());
            eq(qJ.current, JJ.leftStick, cJ.left.deadzone, JJ.values[(0, nJ.p)("LS")] >= nJ.x), eq(jJ.current, JJ.rightStick, cJ.right.deadzone, JJ.values[(0, nJ.p)("RS")] >= nJ.x)
          };
          return cJ || JJ((0, nJ.w)()), XJ.e.onFrame(JJ)
        }), [cJ]), (0, kJ.useEffect)((() => {
          cJ || GJ(!1)
        }), [cJ, GJ]), (0, kJ.useEffect)((() => {
          var JJ;
          sJ && (null === (JJ = FJ.current) || void 0 === JJ || JJ.scrollIntoView({
            block: "nearest"
          }))
        }), [sJ]);
        const fJ = pA.ib.find((JJ => JJ.value === (null === cJ || void 0 === cJ ? void 0 : cJ.family)));
        return (0, zJ.jsxs)("div", {
          ref: FJ,
          className: dJ()("SettingBox ControllerTester", {
            Testing: sJ
          }),
          children: [(0, zJ.jsxs)("div", {
            className: "ControllerTesterHeader",
            children: [(0, zJ.jsxs)("div", {
              className: "ControllerTesterInfo",
              children: [cJ && (0, zJ.jsx)("div", {
                children: JJ("controller:settingsTesterFamily", {
                  family: fJ ? JJ(fJ.labelKey) : cJ.family
                })
              }), cJ && (0, zJ.jsx)("div", {
                className: "ControllerTesterPadId",
                children: cJ.id
              }), !cJ && (0, zJ.jsx)("div", {
                children: JJ("controller:settingsTesterNoPad")
              })]
            }), (cJ || sJ) && (0, zJ.jsx)(mA.d, {
              className: "ControllerTesterToggle",
              onClick: () => {
                GJ(!sJ)
              },
              children: JJ(sJ ? "controller:settingsTesterStop" : "controller:settingsTesterStart")
            })]
          }), cJ && !sJ && (0, zJ.jsx)("div", {
            className: "ControllerSettingsHint",
            children: JJ("controller:settingsTesterHint")
          }), sJ && (0, zJ.jsxs)("div", {
            className: "ControllerTesterBanner",
            children: [(0, zJ.jsx)(PA.d, {
              text: JJ("controller:settingsTesterTesting", {
                button: PA.f
              }),
              glyph: (0, YJ.j)("menuBack")
            }), (0, zJ.jsx)("div", {
              ref: eJ,
              className: "ControllerTesterExitFill"
            })]
          }), (0, zJ.jsxs)("div", {
            className: "ControllerTesterBody",
            children: [(0, zJ.jsx)(Uq, {
              deadzone: ZJ.left.deadzone,
              dotRef: qJ,
              labelKey: ZJ.left.labelKey
            }), (0, zJ.jsx)("div", {
              className: "ControllerTesterButtons",
              children: nJ.Z.map((JJ => {
                const ZJ = (0, nJ.p)(JJ);
                return (0, zJ.jsx)("div", {
                  ref: JJ => {
                    AJ.current[ZJ] = JJ
                  },
                  className: (0, nJ.M)(ZJ) ? "ControllerTesterButton ControllerTesterTrigger" : "ControllerTesterButton",
                  children: (0, zJ.jsx)(mF, {
                    glyph: JJ,
                    family: null === cJ || void 0 === cJ ? void 0 : cJ.family
                  })
                }, JJ)
              }))
            }), (0, zJ.jsx)(Uq, {
              deadzone: ZJ.right.deadzone,
              dotRef: jJ,
              labelKey: ZJ.right.labelKey
            })]
          })]
        })
      },
      qq = (0, kJ.memo)((function() {
        const {
          t: JJ
        } = (0, UJ.F)(), cJ = (0, DJ.q)(), [ZJ, FJ] = (0, kJ.useState)(!1);
        return (0, kJ.useEffect)((() => {
          if (!ZJ) return;
          const JJ = window.setTimeout((() => {
            FJ(!1)
          }), pA.vb);
          return () => {
            window.clearTimeout(JJ)
          }
        }), [ZJ]), (0, zJ.jsxs)("div", {
          className: "SettingsMenuRightInner ControllerCategory",
          children: [(0, zJ.jsx)(dA, {
            text: JJ("controller:settingsLook")
          }), (0, zJ.jsx)(NA, {
            settingKey: "lookSensitivityX",
            label: JJ("controller:settingsLookSensitivityX"),
            range: pA.qb,
            format: pA.P
          }), (0, zJ.jsx)(NA, {
            settingKey: "lookSensitivityY",
            label: JJ("controller:settingsLookSensitivityY"),
            range: pA.qb,
            format: pA.P
          }), (0, zJ.jsx)(NA, {
            settingKey: "aimLookSensitivity",
            label: JJ("controller:settingsAimLookSensitivity"),
            range: pA.o,
            format: pA.P
          }), (0, zJ.jsx)(zA, {
            label: JJ("controller:settingsLookCurve"),
            hint: JJ("controller:settingsLookCurveHint"),
            options: pA.eb,
            value: cJ.lookCurve,
            onChange: JJ => {
              (0, DJ.m)({
                lookCurve: JJ
              })
            }
          }), (0, zJ.jsx)(HA.e, {
            label: JJ("controller:settingsInvertLookX"),
            checked: cJ.invertLookX,
            onClick: JJ => {
              (0, DJ.m)({
                invertLookX: JJ
              })
            }
          }), (0, zJ.jsx)(HA.e, {
            label: JJ("controller:settingsInvertLookY"),
            checked: cJ.invertLookY,
            onClick: JJ => {
              (0, DJ.m)({
                invertLookY: JJ
              })
            }
          }), (0, zJ.jsx)(NA, {
            settingKey: "lookDeadzone",
            label: JJ("controller:settingsLookDeadzone"),
            range: pA.C,
            format: pA.K
          }), (0, zJ.jsx)(aA, {}), (0, zJ.jsx)(dA, {
            text: JJ("controller:settingsMovement")
          }), (0, zJ.jsx)(NA, {
            settingKey: "moveDeadzone",
            label: JJ("controller:settingsMoveDeadzone"),
            range: pA.C,
            format: pA.K
          }), (0, zJ.jsx)(HA.e, {
            label: JJ("controller:settingsAutoSprint"),
            checked: cJ.autoSprint,
            onClick: JJ => {
              (0, DJ.m)({
                autoSprint: JJ
              })
            },
            circleInfoText: JJ("controller:settingsAutoSprintInfo")
          }), (0, zJ.jsx)(zA, {
            label: JJ("controller:settingsSneak"),
            options: pA.ub,
            value: cJ.sneakMode,
            onChange: JJ => {
              (0, DJ.m)({
                sneakMode: JJ
              })
            }
          }), (0, zJ.jsx)(dA, {
            text: JJ("controller:settingsButtons")
          }), (0, zJ.jsx)(zA, {
            label: JJ("controller:settingsPromptFamily"),
            options: pA.ib,
            value: cJ.promptFamily,
            onChange: JJ => {
              (0, DJ.m)({
                promptFamily: JJ
              })
            }
          }), (0, zJ.jsx)(HA.e, {
            label: JJ("controller:settingsHideButtonHints"),
            checked: cJ.hideButtonHints,
            onClick: JJ => {
              (0, DJ.m)({
                hideButtonHints: JJ
              })
            }
          }), (0, zJ.jsx)(HA.e, {
            label: JJ("controller:settingsVibration"),
            checked: cJ.vibration,
            onClick: JJ => {
              (0, DJ.m)({
                vibration: JJ
              }), JJ && FF("preview")
            }
          }), (0, zJ.jsx)(NA, {
            settingKey: "cursorSpeed",
            label: JJ("controller:settingsCursorSpeed"),
            range: pA.z,
            format: pA.P
          }), (0, zJ.jsx)(HA.e, {
            label: JJ("controller:settingsCursorMagnetism"),
            checked: cJ.cursorMagnetism,
            onClick: JJ => {
              (0, DJ.m)({
                cursorMagnetism: JJ
              })
            }
          }), (0, zJ.jsx)(HA.e, {
            label: JJ("controller:settingsMenuBackToCategories"),
            checked: cJ.menuBackToCategories,
            onClick: JJ => {
              (0, DJ.m)({
                menuBackToCategories: JJ
              })
            }
          }), (0, zJ.jsx)(Fq, {
            layoutSetting: (0, zJ.jsxs)(zJ.Fragment, {
              children: [YJ.h.map((ZJ => (0, zJ.jsx)(HA.e, {
                label: JJ(pA.$[ZJ]),
                checked: (0, YJ.y)(ZJ, cJ),
                onClick: JJ => {
                  FJ(!(0, YJ.I)(ZJ, JJ))
                }
              }, ZJ))), ZJ && (0, zJ.jsx)("div", {
                className: "PadLayoutRefusedNotice",
                role: "status",
                children: JJ("controller:settingsLayoutRefusedToast")
              })]
            })
          }), (0, zJ.jsx)(tA, {}), (0, zJ.jsx)(dA, {
            text: JJ("controller:settingsAlternatives")
          }), (0, zJ.jsx)("div", {
            className: "ControllerSettingsHint",
            children: JJ("controller:settingsAlternativesHint")
          }), (0, zJ.jsx)(zA, {
            label: JJ("controller:settingsMenuNavigation"),
            hint: JJ("controller:settingsMenuNavigationHint"),
            options: pA.fb,
            value: cJ.menuNavigation,
            onChange: JJ => {
              (0, DJ.m)({
                menuNavigation: JJ
              })
            }
          }), (0, zJ.jsx)(zA, {
            label: JJ("controller:settingsInventoryNavigation"),
            hint: JJ("controller:settingsInventoryNavigationHint"),
            options: pA.Y,
            value: cJ.inventoryNavigation,
            onChange: JJ => {
              (0, DJ.m)({
                inventoryNavigation: JJ
              })
            }
          }), (0, zJ.jsx)(zA, {
            label: JJ("controller:settingsQuickChat"),
            hint: JJ("controller:settingsQuickChatHint"),
            options: pA.kb,
            value: cJ.quickChat,
            onChange: JJ => {
              (0, DJ.m)({
                quickChat: JJ
              })
            }
          }), (0, zJ.jsx)(zA, {
            label: JJ("controller:settingsLeaderboardButton"),
            hint: JJ("controller:settingsLeaderboardButtonHint"),
            options: pA.cb,
            value: cJ.leaderboardButton,
            onChange: JJ => {
              (0, DJ.m)({
                leaderboardButton: JJ
              })
            }
          }), (0, zJ.jsx)(dA, {
            text: JJ("controller:settingsTester")
          }), (0, zJ.jsx)(Aq, {})]
        })
      }));
    (0, UJ.d)(FJ);
    for (const Dq of (0, eJ.r)()) Dq.connected ? XJ.e.handleConnectionEvent(Dq) : XJ.e.handleDisconnectionEvent(Dq);
    const jq = () => null !== XJ.e.getActivePad(),
      Yq = () => BZ.getState(),
      hq = () => BZ.isSteppingSlots()
  },
  7475: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => AJ,
      e: () => qJ
    });
    const FJ = {
        "054c": "playstation",
        "057e": "nintendo"
      },
      UJ = "28de",
      eJ = new Set(["1205"]),
      XJ = JJ => {
        const cJ = /vendor:\s*([0-9a-f]{4})\s*product:\s*([0-9a-f]{4})/i.exec(JJ);
        if (cJ) return {
          vendor: cJ[1].toLowerCase(),
          product: cJ[2].toLowerCase()
        };
        const ZJ = /^([0-9a-f]{1,4})-([0-9a-f]{1,4})-/i.exec(JJ);
        return ZJ ? {
          vendor: ZJ[1].toLowerCase().padStart(4, "0"),
          product: ZJ[2].toLowerCase().padStart(4, "0")
        } : null
      },
      AJ = (JJ, cJ) => {
        const ZJ = XJ(JJ);
        if ((null === ZJ || void 0 === ZJ ? void 0 : ZJ.vendor) === UJ) return eJ.has(ZJ.product) ? "steamdeck" : "xbox";
        if (ZJ && FJ[ZJ.vendor]) return FJ[ZJ.vendor];
        const AJ = `${JJ} ${null!==cJ&&void 0!==cJ?cJ:""}`.toLowerCase();
        return /dualsense|dualshock|playstation|sony/.test(AJ) ? "playstation" : /nintendo|switch|joy-con|pro controller/.test(AJ) ? "nintendo" : /steam deck/.test(AJ) ? "steamdeck" : "xbox"
      },
      qJ = JJ => {
        var cJ;
        return (null === (cJ = XJ(JJ)) || void 0 === cJ ? void 0 : cJ.vendor) === UJ
      }
  },
  7517: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => jJ,
      i: () => AJ
    });
    var FJ = ZJ(7473);
    const UJ = ["capture", "keyboard", "wheel", "inventory", "cursor", "focus", "gameplay"],
      eJ = new Set(["capture", "gameplay"]),
      XJ = ["Up", "Down", "Left", "Right"],
      AJ = JJ => XJ.includes(JJ),
      qJ = .25;
    const jJ = new class {
      constructor() {
        this.consumers = new Map, this.activeName = null, this.hj = new Array(FJ.V).fill(!1), this.previousHeld = new Array(FJ.V).fill(!1), this.consumedButtons = new Array(FJ.V).fill(!1), this.suppressedReleases = new Array(FJ.V).fill(!1), this.wakeOwned = new Array(FJ.V).fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.peek = null, this.lastFrame = (0, FJ.w)()
      }
      register(JJ) {
        return this.consumers.has(JJ.name) && console.warn(`Controller consumer "${JJ.name}" registered twice; the newer one replaces it.`), this.consumers.set(JJ.name, JJ), () => {
          var cJ;
          this.consumers.get(JJ.name) === JJ && (this.activeName === JJ.name ? (this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()) : (null === (cJ = this.peek) || void 0 === cJ ? void 0 : cJ.over) === JJ.name && (this.peek = null), this.consumers.delete(JJ.name))
        }
      }
      getActiveConsumerName() {
        return this.activeName
      }
      isButtonHeld(JJ) {
        return this.hj[(0, FJ.p)(JJ)]
      }
      getLastFrame() {
        return this.lastFrame
      }
      clear() {
        this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()
      }
      reset() {
        this.deactivateCurrent(), this.activeName = null, this.hj = new Array(FJ.V).fill(!1), this.previousHeld = new Array(FJ.V).fill(!1), this.consumedButtons.fill(!1), this.suppressedReleases.fill(!1), this.wakeOwned.fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.lastFrame = (0, FJ.w)()
      }
      dispatch(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.lastFrame = JJ, this.previousHeld = this.hj, this.hj = (0, FJ.t)(JJ.values, this.previousHeld);
        for (let eJ = 0; eJ < FJ.V; eJ++) this.suppressedReleases[eJ] = !this.hj[eJ] && this.consumedButtons[eJ], this.hj[eJ] || (this.consumedButtons[eJ] = !1), this.wakeOwned[eJ] && (this.hj[eJ] ? (this.consumedButtons[eJ] = !0, this.wakeOwned[eJ] = !1) : JJ.values[eJ] < FJ.R && (this.wakeOwned[eJ] = !1));
        Math.hypot(JJ.leftStick.x, JJ.leftStick.y) < qJ && (this.leftStickConsumed = !1), Math.hypot(JJ.rightStick.x, JJ.rightStick.y) < qJ && (this.rightStickConsumed = !1);
        const UJ = this.pickActive();
        if ((null === UJ || void 0 === UJ ? void 0 : UJ.name) !== this.activeName) {
          var XJ, AJ, jJ, YJ, hJ, DJ;
          const JJ = this.activeName,
            cJ = {
              left: !this.leftStickConsumed,
              right: !this.rightStickConsumed
            },
            ZJ = null !== (XJ = null === UJ || void 0 === UJ || null === (AJ = UJ.peek) || void 0 === AJ ? void 0 : AJ.call(UJ)) && void 0 !== XJ ? XJ : null,
            eJ = null === JJ && !!ZJ && !(null === (jJ = this.consumers.get(ZJ.over)) || void 0 === jJ || !jJ.onPeekFrame),
            qJ = ZJ && (ZJ.over === JJ || eJ) ? ZJ : null,
            sJ = null !== this.peek && this.peek.over === (null === UJ || void 0 === UJ ? void 0 : UJ.name) ? this.peek : null;
          this.deactivateCurrent(null !== qJ, null !== sJ), this.activeName = null !== (YJ = null === UJ || void 0 === UJ ? void 0 : UJ.name) && void 0 !== YJ ? YJ : null, null === JJ || this.handOffPending || this.consumeAllHeld();
          const nJ = null === (hJ = null !== qJ && void 0 !== qJ ? qJ : sJ) || void 0 === hJ ? void 0 : hJ.stick;
          "left" === nJ && cJ.left ? this.leftStickConsumed = !1 : "right" === nJ && cJ.right && (this.rightStickConsumed = !1), this.peek = qJ, UJ || null === JJ ? UJ && (null === (DJ = this.idleResume) || void 0 === DJ ? void 0 : DJ.name) === UJ.name && (this.idleResume.left && (this.leftStickConsumed = !1), this.idleResume.right && (this.rightStickConsumed = !1)) : this.idleResume = {
            name: JJ,
            left: cJ.left && this.leftStickConsumed,
            right: cJ.right && this.rightStickConsumed
          }, UJ && (this.idleResume = null);
          for (let UJ = 0; UJ < FJ.V; UJ++) this.previousHeld[UJ] && !this.hj[UJ] && (this.suppressedReleases[UJ] = !0)
        }
        var sJ, nJ;
        (this.handOffPending = !1, UJ) && (ZJ && !eJ.has(UJ.name) && this.consumeWakePress(UJ), UJ.onFrame(this.buildInput(JJ, cJ, ZJ)), this.peek && (null === (sJ = this.consumers.get(this.peek.over)) || void 0 === sJ || null === (nJ = sJ.onPeekFrame) || void 0 === nJ || nJ.call(sJ, this.buildInput(JJ, cJ, !1, this.peek.stick))))
      }
      consumeWakePress(JJ) {
        for (let UJ = 0; UJ < FJ.V; UJ++) {
          var cJ, ZJ;
          const eJ = FJ.Z[UJ];
          (null !== (cJ = null === (ZJ = JJ.wakePressActs) || void 0 === ZJ ? void 0 : ZJ.call(JJ, eJ)) && void 0 !== cJ ? cJ : XJ.includes(eJ)) || (this.hj[UJ] ? this.consumedButtons[UJ] = !0 : this.lastFrame.values[UJ] >= FJ.Q && (this.wakeOwned[UJ] = !0))
        }
      }
      pickActive() {
        for (const JJ of UJ) {
          const cJ = this.consumers.get(JJ);
          if (cJ && cJ.isActive()) return cJ
        }
        return null
      }
      deactivateCurrent() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        var ZJ, FJ, UJ, eJ;
        this.activeName && (null === (ZJ = this.consumers.get(this.activeName)) || void 0 === ZJ || null === (FJ = ZJ.onDeactivate) || void 0 === FJ || FJ.call(ZJ, JJ));
        this.peek && !cJ && (null === (UJ = this.consumers.get(this.peek.over)) || void 0 === UJ || null === (eJ = UJ.onDeactivate) || void 0 === eJ || eJ.call(UJ, !1));
        this.peek = null
      }
      consumeAllHeld() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.idleResume = null;
        for (let UJ = 0; UJ < FJ.V; UJ++) this.hj[UJ] && (this.consumedButtons[UJ] = !0);
        const {
          leftStick: cJ,
          rightStick: ZJ
        } = this.lastFrame;
        this.leftStickConsumed = "left" !== JJ && (this.leftStickConsumed || Math.hypot(cJ.x, cJ.y) >= qJ), this.rightStickConsumed = "right" !== JJ && (this.rightStickConsumed || Math.hypot(ZJ.x, ZJ.y) >= qJ)
      }
      handOffHeldInput() {
        this.handOffPending = !0
      }
      consumeButton(JJ) {
        const cJ = (0, FJ.p)(JJ);
        this.hj[cJ] && (this.consumedButtons[cJ] = !0)
      }
      buildInput(JJ, cJ, ZJ, UJ) {
        const eJ = this.hj,
          XJ = this.previousHeld,
          AJ = UJ ? new Array(FJ.V).fill(!0) : [...this.consumedButtons],
          qJ = UJ ? AJ : [...this.suppressedReleases],
          jJ = !this.leftStickConsumed && (!UJ || "left" === UJ),
          YJ = !this.rightStickConsumed && (!UJ || "right" === UJ);
        return {
          frame: JJ,
          dtMs: cJ,
          isHeld: JJ => {
            const cJ = (0, FJ.p)(JJ);
            return eJ[cJ] && !AJ[cJ]
          },
          wasPressed: JJ => {
            const cJ = (0, FJ.p)(JJ);
            return eJ[cJ] && !XJ[cJ] && !AJ[cJ]
          },
          wasReleased: JJ => {
            const cJ = (0, FJ.p)(JJ);
            return !eJ[cJ] && XJ[cJ] && !qJ[cJ]
          },
          value: cJ => {
            const ZJ = (0, FJ.p)(cJ);
            return AJ[ZJ] ? 0 : JJ.values[ZJ]
          },
          leftStick: jJ ? JJ.leftStick : {
            x: 0,
            y: 0
          },
          rightStick: YJ ? JJ.rightStick : {
            x: 0,
            y: 0
          },
          wokeDevice: ZJ
        }
      }
    }
  },
  7494: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => hJ.c,
      g: () => hJ.f,
      k: () => IJ,
      l: () => MJ,
      m: () => bJ,
      q: () => wJ
    });
    var FJ = ZJ(47),
      UJ = ZJ(17),
      eJ = ZJ(1326),
      XJ = ZJ(29),
      AJ = ZJ(7502),
      qJ = ZJ(7473),
      jJ = ZJ(7486),
      YJ = ZJ(7465),
      hJ = ZJ(1786),
      DJ = ZJ(7507);
    const sJ = {
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
        Zn: {}
      },
      nJ = "controllerSettings",
      GJ = ["Zn", "promptFamily", "hideButtonHints", "swapSticks", "swapConfirmBack", "leaderboardButton"],
      fJ = ["auto", ...AJ.c],
      xJ = (JJ, cJ) => "string" === typeof cJ && JJ.includes(cJ),
      rJ = JJ => cJ => "number" === typeof cJ && Number.isFinite(cJ) ? (0, DJ.y)(cJ, JJ) : void 0,
      vJ = JJ => "boolean" === typeof JJ ? JJ : void 0,
      mJ = JJ => cJ => xJ(JJ, cJ) ? cJ : void 0,
      QJ = {
        lookSensitivityX: rJ(DJ.qb),
        lookSensitivityY: rJ(DJ.qb),
        aimLookSensitivity: rJ(DJ.o),
        invertLookX: vJ,
        invertLookY: vJ,
        lookCurve: mJ(qJ.O),
        lookDeadzone: rJ(DJ.C),
        moveDeadzone: rJ(DJ.C),
        swapSticks: vJ,
        autoSprint: vJ,
        sneakMode: mJ(["toggle", "hold"]),
        tapHoldTime: mJ(["short", "medium", "long"]),
        attackMode: mJ(["hold", "toggle"]),
        promptFamily: mJ(fJ),
        hideButtonHints: vJ,
        vibration: vJ,
        cursorSpeed: rJ(DJ.z),
        cursorMagnetism: vJ,
        buttonRepeat: mJ(qJ.q),
        largePointer: vJ,
        menuBackToCategories: vJ,
        swapConfirmBack: vJ,
        menuNavigation: mJ(["hybrid", "focus", "cursor"]),
        inventoryNavigation: mJ(["hybrid", "slot", "cursor"]),
        quickChat: mJ(["wheel", "off"]),
        leaderboardButton: mJ(["shop", "leaderboard"]),
        gyroAiming: vJ,
        gyroSensitivity: rJ(DJ.V),
        gyroActivation: mJ(["always", "aiming", "button"]),
        gyroButton: mJ(qJ.Z),
        emoteButton: mJ(["tapHold", "wheel"])
      },
      EJ = [{
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
      VJ = JJ => {
        const cJ = {};
        if ("object" !== typeof JJ || null === JJ) return cJ;
        for (const [ZJ, FJ] of Object.entries(JJ)) Object.prototype.hasOwnProperty.call(jJ.i, ZJ) && xJ(qJ.Z, FJ) && (cJ[ZJ] = FJ);
        return cJ
      },
      KJ = JJ => {
        const cJ = {};
        for (const ZJ of Object.keys(sJ))("Zn" === ZJ ? Object.keys(JJ.Zn).length > 0 : JJ[ZJ] !== sJ[ZJ]) && (cJ[ZJ] = JJ[ZJ]);
        0 !== Object.keys(cJ).length ? XJ.j.setItem(nJ, cJ) : XJ.j.removeItem(nJ)
      };
    let yJ = (() => {
        const JJ = XJ.j.getItem(nJ),
          cJ = (JJ => {
            const cJ = "object" === typeof JJ && null !== JJ ? JJ : {},
              ZJ = {
                ...sJ,
                Zn: VJ(cJ.Zn)
              };
            for (const UJ of Object.keys(QJ)) {
              const JJ = QJ[UJ](cJ[UJ]);
              void 0 !== JJ && (ZJ[UJ] = JJ)
            }
            const FJ = Object.keys(cJ).filter((JJ => !!Object.prototype.hasOwnProperty.call(sJ, JJ) && ("Zn" === JJ ? "object" !== typeof cJ.Zn || null === cJ.Zn || Object.keys(cJ.Zn).length !== Object.keys(ZJ.Zn).length : ZJ[JJ] !== cJ[JJ])));
            return FJ.length > 0 && console.warn(`Stored controller settings had invalid values, replaced with defaults: ${FJ.join(", ")}`), ZJ
          })(JJ);
        return null !== JJ && void 0 !== JJ && KJ(cJ), cJ
      })(),
      SJ = {
        ...yJ,
        ...(() => {
          if ("undefined" === typeof window) return {};
          const JJ = {},
            cJ = new URLSearchParams(window.location.search);
          for (const {
              param: ZJ,
              key: FJ
            }
            of EJ) {
            const UJ = QJ[FJ](cJ.get(ZJ));
            void 0 !== UJ && (JJ[FJ] = UJ)
          }
          return JJ
        })()
      };
    const IJ = () => SJ,
      MJ = () => {
        var JJ, cJ;
        const ZJ = IJ().promptFamily;
        return "auto" !== ZJ ? ZJ : null !== (JJ = null === (cJ = YJ.e.getActivePad()) || void 0 === cJ ? void 0 : cJ.family) && void 0 !== JJ ? JJ : "xbox"
      },
      bJ = JJ => {
        const cJ = SJ;
        yJ = {
          ...yJ,
          ...JJ
        }, KJ(yJ), SJ = {
          ...SJ,
          ...JJ
        }, (JJ => {
          UJ.i.Uf(hJ.f, SJ), GJ.some((cJ => JJ[cJ] !== SJ[cJ])) && UJ.i.Uf(hJ.c, SJ)
        })(cJ)
      },
      wJ = () => {
        const [JJ, cJ] = (0, FJ.useState)(SJ);
        return (0, eJ.i)(hJ.f, cJ), JJ
      }
  },
  7956: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => UJ
    });
    const FJ = new Set(["Alt", "AltGraph", "Meta", "OS", "AudioVolumeUp", "AudioVolumeDown", "AudioVolumeMute", "MediaPlayPause", "MediaPlay", "MediaPause", "MediaStop", "MediaTrackNext", "MediaTrackPrevious", "BrowserBack", "BrowserForward", "BrowserHome", "GoBack", "LaunchApplication1", "LaunchApplication2", "LaunchMail", "PrintScreen", "Unidentified"]),
      UJ = JJ => FJ.has(JJ)
  },
  7465: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => sJ.b,
      e: () => xJ
    });
    var FJ = ZJ(7473),
      UJ = ZJ(7475);
    const eJ = .1,
      XJ = .3;
    class AJ {
      constructor() {
        this.deadzone = 0, this.anchor = null, this.steadyMs = 0, this.lastMs = null, this.returning = !0, this.anchorLearned = !1
      }
      observe(JJ, cJ) {
        const ZJ = null === this.lastMs ? 0 : Math.min(Math.max(0, cJ - this.lastMs), 100);
        this.lastMs = cJ;
        const FJ = Math.hypot(JJ.x, JJ.y);
        if (FJ >= XJ) return this.anchor = null, void(this.returning = !0);
        FJ >= eJ || (this.returning = !1);
        const UJ = this.anchor;
        if (!UJ || Math.hypot(JJ.x - UJ.x, JJ.y - UJ.y) > .03) return this.anchorLearned && (this.returning = !1), this.anchor = {
          x: JJ.x,
          y: JJ.y
        }, this.steadyMs = 0, void(this.anchorLearned = !1);
        if (this.steadyMs += ZJ, this.steadyMs < 1e3) return;
        const AJ = Math.max(FJ, Math.hypot(UJ.x, UJ.y));
        AJ < eJ ? this.deadzone = 0 : this.returning && (this.deadzone = AJ + .05, this.anchorLearned = !0)
      }
      getDeadzone() {
        return this.deadzone
      }
      apply(JJ) {
        return Math.hypot(JJ.x, JJ.y) < this.deadzone ? {
          x: 0,
          y: 0
        } : JJ
      }
    }
    const qJ = (JJ, cJ) => {
        var ZJ, FJ;
        return null !== (ZJ = JJ && (null === (FJ = Object.getOwnPropertyDescriptor(JJ, cJ)) || void 0 === FJ ? void 0 : FJ.get)) && void 0 !== ZJ ? ZJ : null
      },
      jJ = JJ => {
        const cJ = JJ.vendorName;
        return "string" === typeof cJ ? cJ : void 0
      },
      YJ = ((JJ, cJ) => {
        const ZJ = qJ(JJ, "index"),
          FJ = qJ(JJ, "id"),
          UJ = qJ(JJ, "connected"),
          eJ = qJ(JJ, "mapping"),
          XJ = qJ(JJ, "buttons"),
          AJ = qJ(JJ, "axes"),
          YJ = qJ(cJ, "pressed"),
          hJ = qJ(cJ, "value");
        return ZJ && FJ && UJ && eJ && XJ && AJ && YJ && hJ ? JJ => {
          const cJ = XJ.call(JJ),
            qJ = AJ.call(JJ),
            DJ = {
              index: Number(ZJ.call(JJ)),
              id: String(FJ.call(JJ)),
              connected: !0 === UJ.call(JJ),
              mapping: String(eJ.call(JJ)),
              buttons: [],
              axes: [],
              vendorName: jJ(JJ)
            };
          for (let ZJ = 0; ZJ < cJ.length; ZJ++) DJ.buttons.push({
            pressed: !0 === YJ.call(cJ[ZJ]),
            value: Number(hJ.call(cJ[ZJ]))
          });
          for (let ZJ = 0; ZJ < qJ.length; ZJ++) DJ.axes.push(Number(qJ[ZJ]));
          return DJ
        } : null
      })("undefined" === typeof Gamepad ? null : Gamepad.prototype, "undefined" === typeof GamepadButton ? null : GamepadButton.prototype),
      hJ = "undefined" === typeof Navigator ? null : Navigator.prototype.getGamepads;
    var DJ = ZJ(1307),
      sJ = ZJ(1786);
    const nJ = XJ,
      GJ = JJ => {
        const cJ = new Array(FJ.V).fill(0);
        for (let ZJ = 0; ZJ < FJ.V && ZJ < JJ.buttons.length; ZJ++) {
          const UJ = JJ.buttons[ZJ];
          cJ[ZJ] = UJ.pressed && !(0, FJ.M)(ZJ) ? Math.max(UJ.value, FJ.x) : UJ.value
        }
        return cJ
      },
      fJ = (JJ, cJ) => {
        var ZJ, FJ;
        return {
          x: null !== (ZJ = JJ.axes[cJ]) && void 0 !== ZJ ? ZJ : 0,
          y: null !== (FJ = JJ.axes[cJ + 1]) && void 0 !== FJ ? FJ : 0
        }
      };
    const xJ = new class {
      constructor(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : YJ;
        this.readGamepads = JJ, this.requireTrustedPads = cJ, this.nativeReader = ZJ, this.running = !1, this.listening = !1, this.rafId = 0, this.lastTimestampMs = 0, this.activeInfo = null, this.slots = [], this.trustedIndices = new Set, this.warnedNonStandardIds = new Set, this.loggedReadError = !1, this.frameListeners = new Set, this.connectionListeners = new Set, this.anyPadConnected = !1, this.connectedListeners = new Set, this.handleConnectionEvent = JJ => {
          JJ.isTrusted && this.trustedIndices.add(JJ.gamepad.index), this.wake()
        }, this.handleDisconnectionEvent = JJ => {
          this.trustedIndices.delete(JJ.gamepad.index)
        }, this.Hh = JJ => {
          if (this.rafId = 0, !this.running) return;
          const cJ = 0 === this.lastTimestampMs ? 16 : Math.min(100, JJ - this.lastTimestampMs);
          this.lastTimestampMs = JJ;
          try {
            this.poll(JJ, cJ)
          } finally {
            this.anyPadConnected && (this.rafId = requestAnimationFrame(this.Hh))
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
      onFrame(JJ) {
        return this.frameListeners.add(JJ), () => {
          this.frameListeners.delete(JJ)
        }
      }
      onActivePadChanged(JJ) {
        return this.connectionListeners.add(JJ), () => {
          this.connectionListeners.delete(JJ)
        }
      }
      getActivePad() {
        return this.activeInfo
      }
      hasConnectedPad() {
        return this.anyPadConnected
      }
      onConnectedPadsChanged(JJ) {
        return this.connectedListeners.add(JJ), () => {
          this.connectedListeners.delete(JJ)
        }
      }
      getActiveGamepad() {
        if (!this.activeInfo) return null;
        const JJ = this.readPads()[this.activeInfo.index],
          cJ = JJ ? this.readPad(JJ) : null;
        return cJ && cJ.id === this.activeInfo.id ? JJ : null
      }
      poll(JJ, cJ) {
        var ZJ, UJ;
        const eJ = this.readPads();
        let XJ = null,
          qJ = !1;
        const jJ = [],
          YJ = Math.max(eJ.length, this.slots.length);
        for (let vJ = 0; vJ < YJ; vJ++) {
          var hJ;
          const cJ = vJ < eJ.length ? eJ[vJ] : null,
            ZJ = cJ ? this.readPad(cJ) : null;
          if (!ZJ || !ZJ.connected || !this.isUsable(ZJ)) {
            this.slots[vJ] = null;
            continue
          }
          let UJ = this.slots[vJ];
          UJ && UJ.id === ZJ.id || (UJ = {
            id: ZJ.id,
            hj: [],
            leftSettled: !1,
            rightSettled: !1,
            leftRest: new AJ,
            rightRest: new AJ
          }, this.slots[vJ] = UJ);
          const YJ = fJ(ZJ, 0),
            DJ = fJ(ZJ, 2);
          !UJ.leftSettled && Math.hypot(YJ.x, YJ.y) < nJ && (UJ.leftSettled = !0), !UJ.rightSettled && Math.hypot(DJ.x, DJ.y) < nJ && (UJ.rightSettled = !0), UJ.leftRest.observe(YJ, JJ), UJ.rightRest.observe(DJ, JJ);
          const sJ = GJ(ZJ),
            xJ = (0, FJ.t)(sJ, UJ.hj),
            rJ = UJ.hj,
            mJ = xJ.map(((JJ, cJ) => JJ && !rJ[cJ]));
          UJ.hj = xJ;
          const QJ = {
            pad: ZJ,
            slot: UJ,
            values: sJ
          };
          vJ === (null === (hJ = this.activeInfo) || void 0 === hJ ? void 0 : hJ.index) && ZJ.id === this.activeInfo.id ? (XJ = QJ, qJ = mJ.includes(!0)) : mJ.includes(!0) && jJ.push({
            polled: QJ,
            rose: mJ
          })
        }
        const DJ = this.slots.some((JJ => null !== JJ));
        if (DJ !== this.anyPadConnected) {
          this.anyPadConnected = DJ;
          for (const JJ of this.connectedListeners) JJ()
        }
        const sJ = null !== (ZJ = null === (UJ = XJ) || void 0 === UJ ? void 0 : UJ.slot.hj) && void 0 !== ZJ ? ZJ : [],
          xJ = qJ ? void 0 : jJ.find((JJ => {
            let {
              rose: cJ
            } = JJ;
            return cJ.some(((JJ, cJ) => JJ && !sJ[cJ]))
          }));
        if (xJ ? (XJ = xJ.polled, this.setActive(xJ.polled.pad)) : this.activeInfo && !XJ && this.setActive(null), !XJ || !this.activeInfo) return;
        const rJ = ((JJ, cJ) => {
          let {
            pad: ZJ,
            slot: UJ,
            values: eJ
          } = JJ;
          const XJ = (0, FJ.w)(cJ);
          return XJ.values = eJ, UJ.leftSettled && (XJ.leftStick = UJ.leftRest.apply(fJ(ZJ, 0))), UJ.rightSettled && (XJ.rightStick = UJ.rightRest.apply(fJ(ZJ, 2))), XJ
        })(XJ, JJ);
        for (const FJ of this.frameListeners) FJ(rJ, cJ, this.activeInfo)
      }
      readPad(JJ) {
        if (this.nativeReader) try {
          return this.nativeReader(JJ)
        } catch {
          if (this.requireTrustedPads) return null
        }
        return this.requireTrustedPads ? null : (JJ => {
          const cJ = JJ;
          return {
            index: cJ.index,
            id: cJ.id,
            connected: cJ.connected,
            mapping: cJ.mapping,
            buttons: Array.from(cJ.buttons, (JJ => ({
              pressed: JJ.pressed,
              value: JJ.value
            }))),
            axes: Array.from(cJ.axes),
            vendorName: jJ(JJ)
          }
        })(JJ)
      }
      isUsable(JJ) {
        return !(0, DJ.d)(JJ.id) && ("standard" !== JJ.mapping ? (this.warnedNonStandardIds.has(JJ.id) || (this.warnedNonStandardIds.add(JJ.id), console.warn(`Controller "${JJ.id}" has no standard button mapping, so it is ignored.`)), !1) : !this.requireTrustedPads || this.trustedIndices.has(JJ.index))
      }
      setActive(JJ) {
        this.activeInfo = JJ ? {
          index: JJ.index,
          id: JJ.id,
          family: (0, UJ.c)(JJ.id, JJ.vendorName)
        } : null;
        for (const cJ of this.connectionListeners) cJ(this.activeInfo)
      }
      readPads() {
        try {
          return this.readGamepads()
        } catch (JJ) {
          return this.loggedReadError || (this.loggedReadError = !0, console.warn("Reading gamepads failed; controller input is unavailable.", JJ)), []
        }
      }
      wake() {
        this.running && 0 === this.rafId && (this.lastTimestampMs = 0, this.rafId = requestAnimationFrame(this.Hh))
      }
    }((() => hJ ? hJ.call(navigator) : []), !0);
    xJ.listenForConnections()
  },
  7972: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => FJ
    });
    const FJ = {
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
  8034: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => XJ,
      c: () => AJ
    });
    var FJ = ZJ(17),
      UJ = ZJ(8024);
    let eJ = !1;
    const XJ = () => eJ,
      AJ = JJ => {
        JJ !== eJ && (eJ = JJ, FJ.i.Uf(UJ.h, eJ))
      }
  },
  8029: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => AJ,
      f: () => qJ
    });
    var FJ = ZJ(17),
      UJ = ZJ(8024);
    let eJ = null,
      XJ = 0;
    const AJ = () => eJ,
      qJ = JJ => {
        null === JJ && null === eJ || (eJ = null === JJ ? null : {
          id: ++XJ,
          holdMs: JJ
        }, FJ.i.Uf(UJ.i, eJ))
      }
  },
  8038: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => XJ,
      e: () => AJ
    });
    var FJ = ZJ(17),
      UJ = ZJ(8024);
    let eJ = !1;
    const XJ = () => eJ,
      AJ = JJ => {
        JJ !== eJ && (eJ = JJ, FJ.i.Uf(UJ.m, eJ))
      }
  },
  8128: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => XJ,
      i: () => AJ
    });
    var FJ = ZJ(17),
      UJ = ZJ(8024);
    let eJ = !1;
    const XJ = () => eJ,
      AJ = JJ => {
        JJ !== eJ && (eJ = JJ, FJ.i.Uf(UJ.q, eJ))
      }
  },
  8061: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => FJ
    });
    class FJ {
      constructor() {
        this.downAtMs = null
      }
      update(JJ, cJ, ZJ, FJ) {
        if (JJ) return this.downAtMs = ZJ, null;
        if (null === this.downAtMs) return null;
        const UJ = ZJ - this.downAtMs >= FJ;
        return cJ ? UJ ? (this.downAtMs = null, "hold") : null : (this.downAtMs = null, UJ ? "hold" : "tap")
      }
      release() {
        this.downAtMs = null
      }
    }
  },
  7531: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => hJ,
      h: () => DJ,
      i: () => AJ,
      k: () => vJ,
      o: () => rJ
    });
    var FJ = ZJ(29),
      UJ = ZJ(7502),
      eJ = ZJ(7473);
    const XJ = (() => {
        try {
          return ZJ(7537)
        } catch {
          return null
        }
      })(),
      AJ = [...eJ.Z, "LeftStick", "RightStick"],
      qJ = new Map,
      jJ = {
        xbox: "xbox",
        playstation: "playstation",
        nintendo: "nintendo",
        steamdeck: "steamdeck",
        generic: "xbox"
      },
      YJ = (new Set(Object.values(jJ)), {
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
      hJ = (JJ, cJ) => {
        var ZJ, FJ;
        return null !== (ZJ = null === (FJ = YJ[jJ[JJ]]) || void 0 === FJ ? void 0 : FJ[cJ]) && void 0 !== ZJ ? ZJ : 1
      },
      DJ = (JJ, cJ) => {
        const ZJ = `./${jJ[JJ]}/${cJ}.svg`;
        let FJ = qJ.get(ZJ);
        return void 0 === FJ && (FJ = XJ ? XJ(ZJ) : "", qJ.set(ZJ, FJ)), FJ
      },
      sJ = new Set,
      nJ = [],
      GJ = JJ => {
        if (!sJ.has(JJ)) {
          sJ.add(JJ);
          for (const cJ of AJ) {
            const ZJ = DJ(JJ, cJ);
            if (ZJ) {
              const JJ = new Image;
              JJ.crossOrigin = "anonymous", JJ.src = ZJ, nJ.push(JJ)
            }
          }
        }
      },
      fJ = "controllerGlyphFamily";
    let xJ = null;
    const rJ = JJ => {
        JJ !== xJ && (xJ = JJ, FJ.j.setItem(fJ, JJ), GJ(JJ))
      },
      vJ = () => {
        const JJ = FJ.j.getItem(fJ);
        (0, UJ.d)(JJ) && JJ !== xJ && (xJ = JJ, GJ(JJ))
      }
  },
  8151: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => dJ,
      e: () => zJ
    });
    var FJ = ZJ(47),
      UJ = ZJ(17),
      eJ = ZJ(1326),
      XJ = ZJ(7477),
      AJ = ZJ(7465),
      qJ = ZJ(7517),
      jJ = ZJ(7494);
    const YJ = {
        x: 0,
        y: 0,
        z: 0
      },
      hJ = Math.PI / 180,
      DJ = JJ => Math.hypot(JJ.x, JJ.y, JJ.z),
      sJ = (JJ, cJ) => ({
        x: JJ.x * cJ,
        y: JJ.y * cJ,
        z: JJ.z * cJ
      }),
      nJ = (JJ, cJ) => ({
        x: JJ.x + cJ.x,
        y: JJ.y + cJ.y,
        z: JJ.z + cJ.z
      }),
      GJ = (JJ, cJ) => ({
        x: JJ.x - cJ.x,
        y: JJ.y - cJ.y,
        z: JJ.z - cJ.z
      }),
      fJ = JJ => {
        const cJ = DJ(JJ);
        return 0 === cJ ? YJ : sJ(JJ, 1 / cJ)
      },
      xJ = JJ => ({
        min: {
          ...JJ
        },
        max: {
          ...JJ
        }
      }),
      rJ = (JJ, cJ) => ({
        min: {
          x: Math.min(JJ.min.x, cJ.x),
          y: Math.min(JJ.min.y, cJ.y),
          z: Math.min(JJ.min.z, cJ.z)
        },
        max: {
          x: Math.max(JJ.max.x, cJ.x),
          y: Math.max(JJ.max.y, cJ.y),
          z: Math.max(JJ.max.z, cJ.z)
        }
      }),
      vJ = (JJ, cJ) => JJ.max.x - JJ.min.x <= cJ && JJ.max.y - JJ.min.y <= cJ && JJ.max.z - JJ.min.z <= cJ;
    class mJ {
      constructor() {
        this.bias = YJ, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = YJ, this.windowSec = 0
      }
      update(JJ) {
        const cJ = this.gyroRange ? rJ(this.gyroRange, JJ.gyro) : xJ(JJ.gyro),
          ZJ = JJ.accel ? this.accelRange ? rJ(this.accelRange, JJ.accel) : xJ(JJ.accel) : null;
        if (!vJ(cJ, 1) || ZJ && !vJ(ZJ, .01)) return void this.restartWindow(JJ);
        if (this.gyroRange = cJ, this.accelRange = ZJ, this.sum = nJ(this.sum, sJ(JJ.gyro, JJ.dtSec)), this.windowSec += JJ.dtSec, this.windowSec < 1) return;
        const FJ = sJ(this.sum, 1 / this.windowSec);
        if (DJ(FJ) > 5) return;
        const UJ = GJ(FJ, this.bias);
        let eJ = 0;
        !this.calibrated || this.windowSec >= 3 ? eJ = 1 : DJ(UJ) <= 1 && (eJ = Math.min(1, JJ.dtSec / 1)), this.bias = nJ(this.bias, sJ(UJ, eJ)), this.calibrated = this.calibrated || eJ > 0
      }
      correct(JJ) {
        return GJ(JJ, this.bias)
      }
      getBias() {
        return this.bias
      }
      isCalibrated() {
        return this.calibrated
      }
      reset() {
        this.bias = YJ, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = YJ, this.windowSec = 0
      }
      restartWindow(JJ) {
        this.gyroRange = xJ(JJ.gyro), this.accelRange = JJ.accel ? xJ(JJ.accel) : null, this.sum = YJ, this.windowSec = 0
      }
    }
    class QJ {
      constructor() {
        this.down = null
      }
      update(JJ, cJ, ZJ) {
        const FJ = fJ(sJ(cJ, -1));
        if (!this.down) return this.down = FJ, FJ;
        const UJ = sJ(JJ, hJ * ZJ),
          eJ = this.down,
          XJ = {
            x: eJ.x - (UJ.y * eJ.z - UJ.z * eJ.y),
            y: eJ.y - (UJ.z * eJ.x - UJ.x * eJ.z),
            z: eJ.z - (UJ.x * eJ.y - UJ.y * eJ.x)
          },
          AJ = 0 === DJ(FJ) ? 0 : Math.min(1, ZJ / .25);
        var qJ, jJ;
        return this.down = fJ((jJ = AJ, nJ(qJ = XJ, sJ(GJ(FJ, qJ), jJ)))), this.down
      }
      reset() {
        this.down = null
      }
    }
    class EJ {
      constructor() {
        this.entries = [], this.windowSec = 0
      }
      apply(JJ, cJ, ZJ) {
        const FJ = Math.hypot(JJ, cJ),
          UJ = Math.max(0, Math.min(1, (FJ - 2) / 2)),
          eJ = {
            yaw: JJ * (1 - UJ),
            pitch: cJ * (1 - UJ),
            dtSec: ZJ
          };
        for (this.entries.push(eJ), this.windowSec += ZJ; this.entries.length > 1 && this.windowSec - this.entries[0].dtSec >= .125;) this.windowSec -= this.entries[0].dtSec, this.entries.shift();
        let XJ = 0,
          AJ = 0;
        for (const jJ of this.entries) XJ += jJ.yaw * jJ.dtSec, AJ += jJ.pitch * jJ.dtSec;
        const qJ = this.windowSec > 0 ? {
          yaw: XJ / this.windowSec,
          pitch: AJ / this.windowSec
        } : {
          yaw: eJ.yaw,
          pitch: eJ.pitch
        };
        return {
          yaw: JJ * UJ + qJ.yaw,
          pitch: cJ * UJ + qJ.pitch
        }
      }
      reset() {
        this.entries = [], this.windowSec = 0
      }
    }
    class VJ {
      constructor() {
        this.calibrator = new mJ, this.gravity = new QJ, this.smoother = new EJ
      }
      process(JJ, cJ, ZJ) {
        const FJ = Math.max(0, Math.min(.05, cJ));
        this.calibrator.update({
          ...JJ,
          dtSec: FJ
        });
        const UJ = this.calibrator.correct(JJ.gyro);
        let eJ = UJ.y;
        "player" === ZJ && JJ.accel && (eJ = ((JJ, cJ) => {
          const ZJ = JJ.y * cJ.y + JJ.z * cJ.z;
          return -Math.sign(ZJ) * Math.min(1.41 * Math.abs(ZJ), Math.hypot(JJ.y, JJ.z))
        })(UJ, this.gravity.update(UJ, JJ.accel, FJ)));
        const XJ = this.smoother.apply(eJ, UJ.x, FJ),
          AJ = ((JJ, cJ) => {
            const ZJ = Math.hypot(JJ, cJ);
            if (ZJ >= 1) return {
              yaw: JJ,
              pitch: cJ
            };
            const FJ = ZJ / 1;
            return {
              yaw: JJ * FJ,
              pitch: cJ * FJ
            }
          })(XJ.yaw, XJ.pitch);
        return {
          yawDeg: AJ.yaw * FJ,
          pitchDeg: AJ.pitch * FJ
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
    const KJ = (JJ, cJ) => {
      var ZJ, FJ, UJ;
      const eJ = cJ * hJ,
        XJ = null !== (ZJ = JJ.beta) && void 0 !== ZJ ? ZJ : 0,
        AJ = null !== (FJ = JJ.gamma) && void 0 !== FJ ? FJ : 0;
      return {
        x: XJ * Math.cos(eJ) - AJ * Math.sin(eJ),
        y: XJ * Math.sin(eJ) + AJ * Math.cos(eJ),
        z: null !== (UJ = JJ.alpha) && void 0 !== UJ ? UJ : 0
      }
    };
    var yJ = ZJ(8159);
    class SJ {
      constructor(JJ, cJ, ZJ) {
        this.hid = JJ, this.sink = cJ, this.onControllersChanged = ZJ, this.controllers = new Map, this.running = !1, this.openedCount = 0, this.opening = new Set, this.disconnectedWhileOpening = new Set, this.switchPacketCounter = 0, this.onConnect = JJ => {
          this.openController(JJ.device).catch((JJ => {
            console.warn("Could not open motion controller", JJ)
          }))
        }, this.onDisconnect = JJ => {
          this.opening.has(JJ.device) && this.disconnectedWhileOpening.add(JJ.device);
          const cJ = this.controllers.get(JJ.device);
          cJ && (this.forget(cJ), this.onControllersChanged())
        }
      }
      async start() {
        if (this.running) return;
        this.running = !0, this.hid.addEventListener("connect", this.onConnect), this.hid.addEventListener("disconnect", this.onDisconnect);
        const JJ = await this.hid.getDevices();
        for (const cJ of JJ) await this.openController(cJ).catch((JJ => {
          console.warn("Could not open motion controller", JJ)
        }))
      }
      stop() {
        this.running = !1, this.hid.removeEventListener("connect", this.onConnect), this.hid.removeEventListener("disconnect", this.onDisconnect);
        for (const JJ of [...this.controllers.values()]) this.forget(JJ);
        this.onControllersChanged()
      }
      async request() {
        const JJ = await this.hid.requestDevice({
          filters: yJ.l
        });
        let cJ = 0;
        for (const ZJ of JJ) await this.openController(ZJ).catch((JJ => {
          console.warn("Could not open motion controller", JJ), cJ++
        }));
        return cJ
      }
      async hasGrantedController() {
        return (await this.hid.getDevices()).some((JJ => null !== (0, yJ.e)(JJ.vendorId, JJ.productId)))
      }
      getConnectedKinds() {
        return [...this.controllers.values()].map((JJ => JJ.kind))
      }
      forget(JJ) {
        JJ.device.removeEventListener("inputreport", JJ.onReport), this.controllers.get(JJ.device) === JJ && this.controllers.delete(JJ.device)
      }
      async openController(JJ) {
        const cJ = (0, yJ.e)(JJ.vendorId, JJ.productId);
        if (!cJ || !this.running || this.controllers.has(JJ) || this.opening.has(JJ)) return;
        this.opening.add(JJ);
        let ZJ = !1;
        try {
          JJ.opened || await JJ.open()
        } finally {
          this.opening.delete(JJ), ZJ = this.disconnectedWhileOpening.delete(JJ)
        }
        if (ZJ) return void JJ.close().catch((JJ => {
          console.debug("Could not close an unplugged motion controller", JJ)
        }));
        if (!this.running) return;
        const FJ = {
          device: JJ,
          kind: cJ,
          lastClock: null,
          lastEventMs: null,
          lastReadingMs: -1 / 0,
          openedOrder: this.openedCount++,
          onReport: JJ => {
            this.onReport(FJ, JJ)
          }
        };
        this.controllers.set(JJ, FJ), JJ.addEventListener("inputreport", FJ.onReport), this.onControllersChanged();
        try {
          await this.enableMotion(FJ)
        } catch (UJ) {
          console.warn(`Could not turn on motion for ${cJ}`, UJ), this.controllers.get(JJ) === FJ && (this.forget(FJ), this.onControllersChanged())
        }
      }
      async enableMotion(JJ) {
        let {
          device: cJ,
          kind: ZJ
        } = JJ;
        if ((0, yJ.i)(ZJ))
          for (const FJ of yJ.u[ZJ]) await cJ.receiveFeatureReport(FJ).catch((JJ => {
            console.debug(`Motion controller feature report ${FJ} unavailable`, JJ)
          }));
        else
          for (let FJ = 0; FJ < 2; FJ++)
            for (const {
                subcommand: JJ,
                args: ZJ
              }
              of yJ.y) await cJ.sendReport(yJ.A, (0, yJ.b)(this.switchPacketCounter++, JJ, ZJ)), await new Promise((JJ => {
              setTimeout(JJ, 60)
            }))
      }
      onReport(JJ, cJ) {
        const ZJ = (0, yJ.p)(JJ.kind, cJ.reportId, cJ.data, JJ.device.productId);
        if (!ZJ) return;
        const FJ = null === JJ.lastEventMs ? 0 : (cJ.timeStamp - JJ.lastEventMs) / 1e3;
        JJ.lastEventMs = cJ.timeStamp;
        let UJ = ZJ.dtSec;
        if (null !== UJ && FJ > 0 && (UJ = Math.max(.001, Math.min(.017, FJ / ZJ.readings.length))), null === UJ && null !== ZJ.sensorClock && (0, yJ.i)(JJ.kind)) {
          const cJ = (0, yJ.q)(JJ.kind, JJ.lastClock, ZJ.sensorClock);
          JJ.lastClock = ZJ.sensorClock, UJ = 0 === cJ ? null : cJ
        }
        if (JJ.lastReadingMs = cJ.timeStamp, this.isPreferred(JJ, cJ.timeStamp))
          for (const XJ of ZJ.readings) {
            var eJ;
            this.sink(XJ, null !== (eJ = UJ) && void 0 !== eJ ? eJ : FJ, `hid${JJ.openedOrder}`)
          }
      }
      isPreferred(JJ, cJ) {
        const ZJ = JJ => 1e6 * yJ.o[JJ.kind] + JJ.openedOrder;
        for (const FJ of this.controllers.values())
          if (FJ !== JJ && cJ - FJ.lastReadingMs < 500 && ZJ(FJ) < ZJ(JJ)) return !1;
        return !0
      }
    }
    var IJ = ZJ(80);
    const MJ = () => DeviceMotionEvent,
      bJ = () => "undefined" !== typeof window && "undefined" !== typeof DeviceMotionEvent && window.isSecureContext && (0, IJ.isMobile)(),
      wJ = () => {
        var JJ;
        const cJ = null === (JJ = window.screen.orientation) || void 0 === JJ ? void 0 : JJ.angle;
        return "number" === typeof cJ ? cJ : "number" === typeof window.orientation ? window.orientation : 0
      };
    class WJ {
      constructor(JJ, cJ) {
        this.sink = JJ, this.onStateChanged = cJ, this.state = "off", this.lastEventMs = null, this.noSensorTimer = null, this.wanted = !1, this.permissionRequest = null, this.granted = !1, this.onGesture = () => {
          this.requestPermission().catch((JJ => {
            console.warn("Could not enable the motion sensor", JJ)
          }))
        }, this.onMotion = JJ => {
          const cJ = JJ.rotationRate;
          if (!cJ || null === cJ.alpha && null === cJ.beta && null === cJ.gamma) return;
          const ZJ = null === this.lastEventMs ? 0 : (JJ.timeStamp - this.lastEventMs) / 1e3;
          this.lastEventMs = JJ.timeStamp, this.clearNoSensorTimer(), this.setState("on"), this.sink({
            gyro: KJ(cJ, wJ()),
            accel: null
          }, ZJ, "phone")
        }
      }
      getState() {
        return this.state
      }
      start() {
        if (this.wanted = !0, "off" === this.state) return "function" !== typeof MJ().requestPermission || this.granted ? void this.listen() : (this.setState("needsPermission"), void this.armGestureRequest())
      }
      requestPermission() {
        return this.permissionRequest || (this.permissionRequest = this.askPermission().finally((() => {
          this.permissionRequest = null
        }))), this.permissionRequest
      }
      async askPermission() {
        const JJ = MJ().requestPermission;
        if (!this.wanted) return;
        if ("function" !== typeof JJ) return void this.listen();
        let cJ;
        this.disarmGestureRequest();
        try {
          cJ = await JJ.call(DeviceMotionEvent)
        } catch (ZJ) {
          throw this.wanted && "needsPermission" === this.state && this.armGestureRequest(), ZJ
        }
        this.wanted && ("granted" === cJ ? (this.granted = !0, this.listen()) : this.setState("denied"))
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
      setState(JJ) {
        this.state !== JJ && (this.state = JJ, this.onStateChanged())
      }
    }
    const gJ = "controllerGyroStatusChanged",
      HJ = {
        bK: 0,
        zK: 0
      },
      PJ = JJ => {
        var cJ, ZJ;
        return "undefined" === typeof document || (null === (cJ = null === (ZJ = document.featurePolicy) || void 0 === ZJ ? void 0 : ZJ.allowsFeature(JJ)) || void 0 === cJ || cJ)
      };
    class kJ {
      constructor() {
        this.processor = new VJ, this.hid = void 0, this.hidBlocked = void 0, this.phone = void 0, this.phoneBlocked = void 0, this.source = null, this.pendingYawDeg = 0, this.pendingPitchDeg = 0, this.lastDrainMs = -1 / 0, this.lastHidReadingMs = -1 / 0, this.running = !1, this.phoneRunning = !1, this.syncWithSettings = JJ => {
          const cJ = JJ.gyroAiming && AJ.e.hasConnectedPad();
          var ZJ, FJ;
          cJ !== this.phoneRunning && (this.phoneRunning = cJ, cJ ? null === (ZJ = this.phone) || void 0 === ZJ || ZJ.start() : null === (FJ = this.phone) || void 0 === FJ || FJ.stop());
          if (JJ.gyroAiming !== this.running) {
            var UJ, eJ;
            if (this.running = JJ.gyroAiming, this.running) null === (UJ = this.hid) || void 0 === UJ || UJ.start().catch((JJ => {
              console.warn("Could not open motion controllers", JJ)
            }));
            else null === (eJ = this.hid) || void 0 === eJ || eJ.stop(), this.processor.reset(), this.source = null, this.discardPending();
            this.publishStatus()
          }
        }, this.publishStatus = () => {
          UJ.i.Uf(gJ, this.getStatus())
        };
        const JJ = (() => {
            var JJ;
            return "undefined" !== typeof navigator && window.isSecureContext && null !== (JJ = navigator.hid) && void 0 !== JJ ? JJ : null
          })(),
          cJ = PJ("hid");
        this.hidBlocked = null !== JJ && !cJ, this.hid = JJ && cJ ? new SJ(JJ, ((JJ, cJ, ZJ) => {
          this.lastHidReadingMs = performance.now(), this.feed(JJ, cJ, "player", ZJ)
        }), this.publishStatus) : null;
        const ZJ = PJ("accelerometer") && PJ("gyroscope");
        this.phoneBlocked = bJ() && !ZJ, this.phone = bJ() && ZJ ? new WJ(((JJ, cJ, ZJ) => {
          performance.now() - this.lastHidReadingMs >= 500 && this.feed(JJ, cJ, "local", ZJ)
        }), this.publishStatus) : null, UJ.i.subscribe(jJ.g, this.syncWithSettings), AJ.e.onConnectedPadsChanged((() => {
          this.syncWithSettings((0, jJ.k)()), this.publishStatus()
        })), this.syncWithSettings((0, jJ.k)())
      }
      isSupported() {
        return null !== this.hid || null !== this.phone
      }
      getStatus() {
        var JJ, cJ, ZJ, FJ;
        return {
          hidSupported: null !== this.hid,
          hidBlocked: this.hidBlocked,
          phoneSupported: null !== this.phone,
          phoneBlocked: this.phoneBlocked,
          controllers: null !== (JJ = null === (cJ = this.hid) || void 0 === cJ ? void 0 : cJ.getConnectedKinds()) && void 0 !== JJ ? JJ : [],
          phoneMotion: null !== (ZJ = null === (FJ = this.phone) || void 0 === FJ ? void 0 : FJ.getState()) && void 0 !== ZJ ? ZJ : "off",
          padConnected: AJ.e.hasConnectedPad()
        }
      }
      async connectController() {
        return this.hid ? this.hid.request() : 0
      }
      async connectControllerIfNoneGranted() {
        this.hid && !await this.hid.hasGrantedController() && await this.hid.request()
      }
      async allowPhoneMotion() {
        var JJ;
        await (null === (JJ = this.phone) || void 0 === JJ ? void 0 : JJ.requestPermission())
      }
      drainLookDelta() {
        const JJ = performance.now();
        JJ - this.lastDrainMs > 500 && this.discardPending(), this.lastDrainMs = JJ;
        const cJ = {
          yawDeg: this.pendingYawDeg,
          pitchDeg: this.pendingPitchDeg
        };
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0;
        const ZJ = (0, jJ.k)();
        return ZJ.gyroAiming && (JJ => {
          let {
            activation: cJ,
            isHeld: ZJ,
            useButton: FJ,
            gyroButton: UJ
          } = JJ;
          return "always" === cJ || ZJ("aiming" === cJ ? FJ : UJ)
        })({
          activation: ZJ.gyroActivation,
          isHeld: JJ => qJ.e.isButtonHeld(JJ),
          useButton: (0, XJ.j)("use"),
          gyroButton: ZJ.gyroButton
        }) ? ((JJ, cJ) => ({
          bK: -JJ.yawDeg * cJ * hJ,
          zK: -JJ.pitchDeg * cJ * hJ
        }))(cJ, ZJ.gyroSensitivity) : HJ
      }
      discardPending() {
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0
      }
      injectMotion(JJ, cJ) {
        this.feed(JJ, cJ, "local", "injected")
      }
      getCalibration() {
        return this.processor.getCalibration()
      }
      feed(JJ, cJ, ZJ, FJ) {
        this.source !== FJ && (this.processor.reset(), this.source = FJ);
        const UJ = this.processor.process(JJ, cJ, ZJ);
        this.pendingYawDeg += UJ.yawDeg, this.pendingPitchDeg += UJ.pitchDeg
      }
    }
    let pJ = null;
    const dJ = () => (pJ || (pJ = new kJ), pJ),
      zJ = () => {
        const [JJ, cJ] = (0, FJ.useState)((() => dJ().getStatus()));
        return (0, eJ.i)(gJ, cJ), (0, FJ.useEffect)((() => {
          cJ(dJ().getStatus())
        }), []), JJ
      }
  },
  8159: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      A: () => vJ,
      b: () => QJ,
      e: () => qJ,
      i: () => FJ,
      l: () => AJ,
      m: () => jJ,
      o: () => YJ,
      p: () => rJ,
      q: () => fJ,
      u: () => VJ,
      y: () => EJ
    });
    const FJ = JJ => "dualShock4" === JJ || "dualSense" === JJ,
      UJ = 1356,
      eJ = 1406,
      XJ = [{
        vendorId: UJ,
        productId: 1476,
        kind: "dualShock4"
      }, {
        vendorId: UJ,
        productId: 2508,
        kind: "dualShock4"
      }, {
        vendorId: UJ,
        productId: 2976,
        kind: "dualShock4"
      }, {
        vendorId: UJ,
        productId: 3302,
        kind: "dualSense"
      }, {
        vendorId: UJ,
        productId: 3570,
        kind: "dualSense"
      }, {
        vendorId: eJ,
        productId: 8201,
        kind: "switchPro"
      }, {
        vendorId: eJ,
        productId: 8198,
        kind: "joyConLeft"
      }, {
        vendorId: eJ,
        productId: 8199,
        kind: "joyConRight"
      }],
      AJ = XJ.map((JJ => {
        let {
          vendorId: cJ,
          productId: ZJ
        } = JJ;
        return {
          vendorId: cJ,
          productId: ZJ
        }
      })),
      qJ = (JJ, cJ) => {
        var ZJ, FJ;
        return null !== (ZJ = null === (FJ = XJ.find((ZJ => ZJ.vendorId === JJ && ZJ.productId === cJ))) || void 0 === FJ ? void 0 : FJ.kind) && void 0 !== ZJ ? ZJ : null
      },
      jJ = {
        dualShock4: "DualShock 4",
        dualSense: "DualSense",
        switchPro: "Switch Pro Controller",
        joyConLeft: "Joy-Con (L)",
        joyConRight: "Joy-Con (R)"
      },
      YJ = {
        dualSense: 0,
        dualShock4: 0,
        switchPro: 0,
        joyConRight: 1,
        joyConLeft: 2
      },
      hJ = 2e3 / 32767,
      DJ = 1 / 8192,
      sJ = 936 / 13371,
      nJ = (JJ, cJ, ZJ) => ({
        x: JJ.getInt16(cJ, !0) * ZJ,
        y: JJ.getInt16(cJ + 2, !0) * ZJ,
        z: JJ.getInt16(cJ + 4, !0) * ZJ
      }),
      GJ = JJ => 0 === JJ.x && 0 === JJ.y && 0 === JJ.z,
      fJ = (JJ, cJ, ZJ) => null === cJ ? null : "dualShock4" === JJ ? 16 * (ZJ - cJ & 65535) / 3 / 1e6 : (ZJ - cJ >>> 0) / 3 / 1e6,
      xJ = (JJ, cJ) => "joyConRight" === cJ ? {
        x: JJ.y,
        y: -JJ.z,
        z: -JJ.x
      } : {
        x: -JJ.y,
        y: JJ.z,
        z: -JJ.x
      },
      rJ = (JJ, cJ, ZJ, UJ) => FJ(JJ) ? ((JJ, cJ, ZJ, FJ) => {
        const UJ = ((JJ, cJ, ZJ) => "dualShock4" === JJ ? 1 === cJ && ZJ >= 63 ? 0 : 17 === cJ && ZJ >= 65 ? 2 : null : 1 === cJ && ZJ >= 62 ? 0 : 49 === cJ && ZJ >= 63 ? 1 : null)(JJ, cJ, ZJ.byteLength);
        if (null === UJ) return null;
        if (2976 === FJ && 1 === cJ && 0 !== (4 & ZJ.getUint8(30))) return null;
        const eJ = UJ + ("dualShock4" === JJ ? 12 : 15),
          XJ = nJ(ZJ, eJ, hJ),
          AJ = nJ(ZJ, eJ + 6, DJ);
        return GJ(XJ) && GJ(AJ) ? null : {
          readings: [{
            gyro: XJ,
            accel: AJ
          }],
          dtSec: null,
          sensorClock: "dualShock4" === JJ ? ZJ.getUint16(UJ + 9, !0) : ZJ.getUint32(UJ + 27, !0)
        }
      })(JJ, cJ, ZJ, UJ) : ((JJ, cJ, ZJ) => {
        if (48 !== cJ && 49 !== cJ || ZJ.byteLength < 48) return null;
        const FJ = [];
        for (let UJ = 0; UJ < 3; UJ++) {
          const cJ = nJ(ZJ, 12 + 12 * UJ, 244e-6),
            eJ = nJ(ZJ, 18 + 12 * UJ, sJ);
          if (GJ(eJ) && GJ(cJ)) return null;
          FJ.push({
            gyro: xJ(eJ, JJ),
            accel: xJ(cJ, JJ)
          })
        }
        return {
          readings: FJ,
          dtSec: .005,
          sensorClock: null
        }
      })(JJ, cJ, ZJ),
      vJ = 1,
      mJ = [0, 1, 64, 64, 0, 1, 64, 64],
      QJ = (JJ, cJ, ZJ) => new Uint8Array([15 & JJ, ...mJ, cJ, ...ZJ]),
      EJ = [{
        subcommand: 64,
        args: [1]
      }, {
        subcommand: 3,
        args: [48]
      }],
      VJ = {
        dualShock4: [2, 5],
        dualSense: [5]
      }
  },
  7525: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => MJ,
      d: () => kJ,
      g: () => xJ,
      h: () => sJ.e,
      l: () => WJ,
      m: () => wJ,
      o: () => rJ,
      p: () => gJ,
      s: () => sJ.p,
      u: () => sJ.q,
      w: () => pJ,
      z: () => sJ.r,
      A: () => KJ
    });
    var FJ = ZJ(47),
      UJ = ZJ(13),
      eJ = ZJ(17),
      XJ = ZJ(1326),
      AJ = ZJ(1184),
      qJ = ZJ(7494),
      jJ = ZJ(7527),
      YJ = ZJ(7475),
      hJ = ZJ(7465),
      DJ = ZJ(7531),
      sJ = ZJ(1294),
      nJ = ZJ(7473),
      GJ = ZJ(7956),
      fJ = ZJ(3835);
    const xJ = JJ => !JJ.repeat && !(0, GJ.b)(JJ.key),
      rJ = "PadHidesCursor";
    let vJ = !1;
    const mJ = JJ => {
        JJ !== vJ && (vJ = JJ, document.documentElement.classList.toggle(rJ, JJ))
      },
      QJ = new class {
        constructor() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
        observe(JJ) {
          let cJ = !1,
            ZJ = !1;
          JJ.values.forEach(((JJ, FJ) => {
            const UJ = JJ >= (this.buttonsDown[FJ] ? nJ.R : nJ.Q);
            UJ && !this.buttonsDown[FJ] && (cJ = !0, ZJ = !0), this.buttonsDown[FJ] = UJ
          }));
          return [JJ.leftStick, JJ.rightStick].forEach(((JJ, FJ) => {
            const UJ = this.stickAnchors[FJ];
            Math.hypot(JJ.x, JJ.y) < (UJ ? nJ.R : .3) ? this.stickAnchors[FJ] = null : (!UJ || Math.hypot(JJ.x - UJ.x, JJ.y - UJ.y) >= .3) && (this.stickAnchors[FJ] = {
              x: JJ.x,
              y: JJ.y
            }, cJ = !0, ZJ ||= !UJ)
          })), cJ && (this.lastActivityMs = JJ.timestampMs), this.onlyMovedOn = cJ && !ZJ, cJ
        }
        wasOnlyMoveOn() {
          return this.onlyMovedOn
        }
        isHolding(JJ) {
          return !(JJ - this.lastActivityMs >= 1e3) && (this.buttonsDown.some((JJ => JJ)) || this.stickAnchors.some((JJ => null !== JJ)))
        }
        isStickOffRest() {
          return this.stickAnchors.some((JJ => null !== JJ))
        }
        reset() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
      };
    let EJ = null,
      VJ = !1;
    const KJ = () => VJ;
    let yJ = null,
      SJ = !1,
      IJ = null;
    const MJ = () => IJ;
    let bJ = !1;
    const wJ = JJ => {
        if (!QJ.observe(JJ)) return !1;
        if (bJ && QJ.wasOnlyMoveOn() && !(0, sJ.e)()) return !1;
        bJ = !1, VJ = !1;
        const cJ = !(0, sJ.e)();
        return cJ && (EJ = JJ, IJ = !vJ && SJ && yJ ? {
          ...yJ
        } : null), SJ = !1, (0, sJ.p)("gamepad"), mJ(!0), (0, DJ.o)((0, qJ.l)()), cJ
      },
      WJ = JJ => !(0, sJ.e)() || JJ === EJ,
      gJ = () => {
        QJ.reset()
      },
      HJ = () => {
        const JJ = UJ.d.get("activeInputDevice"),
          cJ = "gamepad" === JJ ? hJ.e.getActivePad() : null;
        return {
          device: JJ,
          inGame: (0, AJ.j)(),
          padMovesMouse: null !== cJ && (0, YJ.e)(cJ.id)
        }
      },
      PJ = JJ => {
        document.pointerLockElement ? yJ = null : (yJ ??= {
          x: 0,
          y: 0
        }, yJ.x = JJ.clientX, yJ.y = JJ.clientY)
      },
      kJ = () => {
        const JJ = new fJ.b,
          cJ = cJ => {
            JJ.reset(), bJ = !1, (0, sJ.p)(cJ)
          },
          ZJ = JJ => {
            if (JJ.isTrusted) {
              if (JJ instanceof KeyboardEvent) {
                if ((0, sJ.l)(JJ), !xJ(JJ)) return;
                VJ = !0
              }
              if (JJ instanceof PointerEvent && "touch" === JJ.pointerType) return yJ = null, void cJ("touch");
              JJ instanceof PointerEvent && (PJ(JJ), SJ = !0), ("pointerdown" !== JJ.type || (JJ => {
                let {
                  device: cJ,
                  inGame: ZJ,
                  padMovesMouse: FJ
                } = JJ;
                return !("gamepad" === cJ && FJ && ZJ)
              })(HJ())) && cJ("keyboardMouse")
            }
          },
          FJ = JJ => {
            JJ.isTrusted && (yJ = null, cJ("touch"))
          },
          XJ = JJ => {
            JJ.isTrusted && "touch" !== JJ.pointerType && !JJ.relatedTarget && (yJ = null)
          },
          AJ = ZJ => {
            if (!ZJ.isTrusted || "touch" === ZJ.pointerType) return;
            PJ(ZJ);
            const FJ = ZJ.movementX || 0,
              eJ = ZJ.movementY || 0;
            if (0 === FJ && 0 === eJ) return;
            if (SJ = !0, mJ(!1), "keyboardMouse" === UJ.d.get("activeInputDevice")) return;
            const XJ = QJ.isHolding(ZJ.timeStamp),
              AJ = HJ(),
              qJ = (JJ => {
                let {
                  device: cJ,
                  inGame: ZJ,
                  padMovesMouse: FJ,
                  padHolding: UJ
                } = JJ;
                return ("gamepad" !== cJ || !FJ) && "keyboardMouse" !== cJ && (ZJ || !UJ)
              })({
                ...AJ,
                inGame: AJ.inGame && (0, jJ.h)(),
                padHolding: XJ
              });
            qJ && JJ.add(FJ, eJ, ZJ.timeStamp) && (cJ("keyboardMouse"), bJ = QJ.isStickOffRest())
          },
          qJ = JJ => {
            mJ("gamepad" === JJ)
          },
          YJ = {
            capture: !0,
            passive: !0
          };
        window.addEventListener("keydown", ZJ, YJ), window.addEventListener("pointerdown", ZJ, YJ), window.addEventListener("wheel", ZJ, YJ), window.addEventListener("touchstart", FJ, YJ), window.addEventListener("pointermove", AJ, YJ), window.addEventListener("pointerout", XJ, YJ);
        const hJ = eJ.i.subscribe("appManagerUpdated|activeInputDevice", qJ);
        return qJ(UJ.d.get("activeInputDevice")), () => {
          window.removeEventListener("keydown", ZJ, YJ), window.removeEventListener("pointerdown", ZJ, YJ), window.removeEventListener("wheel", ZJ, YJ), window.removeEventListener("touchstart", FJ, YJ), window.removeEventListener("pointermove", AJ, YJ), window.removeEventListener("pointerout", XJ, YJ), yJ = null, eJ.i.unsubscribe(hJ), mJ(!1)
        }
      },
      pJ = () => {
        const [JJ, cJ] = (0, FJ.useState)(qJ.l);
        return (0, XJ.i)(qJ.d, (() => {
          cJ((0, qJ.l)())
        })), (0, XJ.i)(hJ.d, (() => {
          cJ((0, qJ.l)())
        })), JJ
      }
  },
  7502: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => FJ,
      d: () => UJ
    });
    const FJ = ["xbox", "playstation", "nintendo", "steamdeck", "generic"],
      UJ = JJ => FJ.includes(JJ)
  },
  7527: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => jJ,
      h: () => YJ,
      l: () => qJ,
      n: () => AJ
    });
    var FJ = ZJ(13),
      UJ = ZJ(1528),
      eJ = ZJ(1603);
    const XJ = new Map,
      AJ = (JJ, cJ) => (XJ.has(JJ) && console.warn(`Gameplay blocker "${JJ}" registered twice; the newer one replaces it.`), XJ.set(JJ, cJ), () => {
        XJ.get(JJ) === cJ && XJ.delete(JJ)
      }),
      qJ = () => (0, eJ.d)(document.activeElement),
      jJ = function() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        for (const [cJ, ZJ] of XJ)
          if (!JJ.includes(cJ) && ZJ()) return cJ;
        return null
      },
      YJ = function() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return "inGame" === FJ.d.get("gameState") && (!(0, UJ.l)() && (!qJ() && null === jJ(JJ)))
      }
  },
  8139: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => AJ
    });
    var FJ = ZJ(13),
      UJ = ZJ(2924),
      eJ = ZJ(1247),
      XJ = ZJ(1294);
    const AJ = async () => {
      if ((0, XJ.e)()) {
        if (!0 !== await eJ.NotificationProvider.showPromptPopup({
            title: "controller:menusLeaveGameTitle",
            confirmText: "controller:menusLeaveGameLeave",
            cancelText: "controller:menusLeaveGameStay",
            destructive: !0
          }).getResult() || "inGame" !== FJ.d.get("gameState")) return
      }(0, UJ.e)()
    }
  },
  7473: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      $: () => EJ,
      B: () => vJ,
      D: () => bJ,
      G: () => mJ,
      K: () => xJ,
      M: () => fJ,
      O: () => jJ,
      Q: () => DJ,
      R: () => sJ,
      V: () => UJ,
      Z: () => FJ,
      bb: () => IJ,
      c: () => WJ,
      eb: () => wJ,
      g: () => MJ,
      i: () => YJ,
      ib: () => QJ,
      m: () => qJ,
      p: () => AJ,
      q: () => KJ,
      t: () => rJ,
      v: () => VJ,
      w: () => eJ,
      x: () => hJ
    });
    const FJ = ["A", "B", "X", "Y", "LB", "RB", "LT", "RT", "View", "Menu", "LS", "RS", "Up", "Down", "Left", "Right", "Home"],
      UJ = FJ.length,
      eJ = function() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return {
          values: new Array(UJ).fill(0),
          leftStick: {
            x: 0,
            y: 0
          },
          rightStick: {
            x: 0,
            y: 0
          },
          timestampMs: JJ
        }
      },
      XJ = Object.fromEntries(FJ.map(((JJ, cJ) => [JJ, cJ]))),
      AJ = JJ => XJ[JJ],
      qJ = function(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .95;
        const FJ = Math.hypot(JJ.x, JJ.y);
        if (FJ <= cJ) return {
          x: 0,
          y: 0
        };
        const UJ = Math.min(1, (FJ - cJ) / Math.max(1e-4, ZJ - cJ));
        return {
          x: JJ.x / FJ * UJ,
          y: JJ.y / FJ * UJ
        }
      },
      jJ = ["exponential", "linear", "boost"],
      YJ = (JJ, cJ) => {
        const ZJ = Math.hypot(JJ.x, JJ.y);
        if (0 === ZJ) return {
          x: 0,
          y: 0
        };
        const FJ = ((JJ, cJ) => {
          const ZJ = Math.max(0, Math.min(1, JJ));
          return "linear" === cJ ? ZJ : ZJ * ZJ
        })(ZJ, cJ);
        return {
          x: JJ.x / ZJ * FJ,
          y: JJ.y / ZJ * FJ
        }
      },
      hJ = .5,
      DJ = .3,
      sJ = .2,
      nJ = AJ("LT"),
      GJ = AJ("RT"),
      fJ = JJ => JJ === nJ || JJ === GJ,
      xJ = (JJ, cJ) => {
        const ZJ = AJ(cJ);
        return fJ(ZJ) ? JJ[ZJ] > .35 : JJ[ZJ] >= hJ
      },
      rJ = (JJ, cJ) => JJ.map(((JJ, ZJ) => fJ(ZJ) ? cJ[ZJ] ? JJ > .35 : JJ >= .55 : JJ >= hJ)),
      vJ = ["Up", "Down", "Left", "Right"],
      mJ = JJ => vJ.includes(JJ),
      QJ = function(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .5;
        return Math.hypot(JJ.x, JJ.y) < cJ ? null : Math.abs(JJ.x) > Math.abs(JJ.y) ? JJ.x > 0 ? "Right" : "Left" : JJ.y > 0 ? "Down" : "Up"
      },
      EJ = {
        initialDelayMs: 350,
        intervalMs: 120
      },
      VJ = {
        initialDelayMs: 350,
        intervalMs: 150
      },
      KJ = ["default", "slow", "off"],
      yJ = 800,
      SJ = 250,
      IJ = (JJ, cJ) => "off" === cJ ? null : "slow" === cJ ? {
        initialDelayMs: Math.max(JJ.initialDelayMs, yJ),
        intervalMs: Math.max(JJ.intervalMs, SJ)
      } : JJ;
    class MJ {
      constructor(JJ) {
        this.readTiming = JJ, this.hj = !1, this.timing = null, this.nextFireMs = 0
      }
      update(JJ, cJ) {
        return JJ ? this.hj ? !!(this.timing && cJ >= this.nextFireMs) && (this.nextFireMs = cJ + this.timing.intervalMs, !0) : (this.hj = !0, this.timing = this.readTiming(), this.nextFireMs = cJ + (null !== (ZJ = null === (FJ = this.timing) || void 0 === FJ ? void 0 : FJ.initialDelayMs) && void 0 !== ZJ ? ZJ : 0), !0) : (this.hj = !1, !1);
        var ZJ, FJ
      }
      reset() {
        this.hj = !1
      }
    }
    const bJ = {
        initialDelayMs: 350,
        intervalMs: 80
      },
      wJ = {
        initialDelayMs: 400,
        intervalMs: 90
      };
    class WJ {
      constructor(JJ) {
        this.timer = JJ, this.direction = null
      }
      update(JJ, cJ) {
        return JJ !== this.direction && (this.timer.reset(), this.direction = JJ), this.timer.update(null !== JJ, cJ) ? JJ : null
      }
      reset() {
        this.timer.reset(), this.direction = null
      }
    }
  },
  8058: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => UJ,
      f: () => eJ
    });
    let FJ = -1 / 0;
    const UJ = () => {
        FJ = performance.now()
      },
      eJ = JJ => performance.now() - FJ < JJ
  },
  7963: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => XJ,
      f: () => eJ
    });
    var FJ = ZJ(7494),
      UJ = ZJ(7473);
    const eJ = JJ => (0, UJ.bb)(JJ, (0, FJ.k)().buttonRepeat),
      XJ = JJ => new UJ.g((() => eJ(JJ)))
  },
  8145: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => qJ,
      e: () => eJ,
      i: () => XJ,
      j: () => UJ,
      l: () => AJ
    });
    var FJ = ZJ(1734);
    const UJ = "controllerPadShopOpen",
      eJ = JJ => FJ.j.includes(JJ),
      XJ = JJ => Object.values(JJ).some((JJ => !1 !== JJ.canBuy && !JJ.isRewardedAd)),
      AJ = (JJ, cJ, ZJ) => {
        var FJ, UJ, XJ, AJ;
        const qJ = JJ.filter((JJ => !eJ(JJ))),
          jJ = null !== cJ && JJ.includes(cJ) ? cJ : null;
        return null !== jJ && !eJ(jJ) && ZJ(jJ) ? jJ : null !== (FJ = null !== (UJ = null !== (XJ = null !== (AJ = qJ.find(ZJ)) && void 0 !== AJ ? AJ : qJ[0]) && void 0 !== XJ ? XJ : jJ) && void 0 !== UJ ? UJ : JJ[0]) && void 0 !== FJ ? FJ : null
      },
      qJ = JJ => JJ.userInput || JJ.isRewardedAd || "boolean" === typeof JJ.isSelected ? null : JSON.stringify([JJ.image, JJ.cost, JJ.currency, JJ.amount, JJ.customTitle, JJ.buyButtonText, JJ.description, JJ.canBuy])
  },
  7515: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => qJ,
      h: () => eJ,
      l: () => AJ
    });
    var FJ = ZJ(17),
      UJ = ZJ(7494);
    const eJ = (JJ, cJ) => "OpenShop" === JJ ? "shop" === cJ : "OpenLobbyLeaderboard" !== JJ || "leaderboard" === cJ;
    let XJ = !1;
    const AJ = JJ => {
        JJ !== XJ && (XJ = JJ, FJ.i.Uf(UJ.d, (0, UJ.k)()))
      },
      qJ = () => ((JJ, cJ) => "shop" === JJ && cJ ? "shop" : "leaderboard")((0, UJ.k)().leaderboardButton, XJ)
  },
  8176: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => jJ,
      d: () => YJ
    });
    var FJ = ZJ(47),
      UJ = ZJ(1326),
      eJ = ZJ(1786),
      XJ = ZJ(1300),
      AJ = ZJ(1314),
      qJ = ZJ(990);
    const jJ = () => {
        const JJ = (0, XJ.s)();
        if ((0, FJ.useEffect)((() => {
            (0, XJ.k)()
          }), []), !JJ) return null;
        const {
          ControllerCategory: cJ
        } = JJ;
        return (0, qJ.jsx)(AJ.e, {
          children: (0, qJ.jsx)(cJ, {})
        })
      },
      YJ = () => {
        var JJ;
        const cJ = (0, XJ.s)(),
          [, ZJ] = (0, FJ.useReducer)((JJ => JJ + 1), 0);
        return (0, UJ.i)(eJ.b, ZJ), null !== (JJ = null === cJ || void 0 === cJ ? void 0 : cJ.hasActivePad()) && void 0 !== JJ && JJ
      }
  },
  7507: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      $: () => SJ,
      C: () => AJ,
      G: () => QJ,
      K: () => DJ,
      N: () => sJ,
      P: () => hJ,
      S: () => mJ,
      V: () => jJ,
      Y: () => xJ,
      cb: () => vJ,
      e: () => HJ,
      eb: () => GJ,
      fb: () => fJ,
      g: () => kJ,
      ib: () => nJ,
      k: () => IJ,
      kb: () => rJ,
      nb: () => wJ,
      o: () => XJ,
      p: () => yJ,
      qb: () => eJ,
      r: () => VJ,
      ub: () => EJ,
      v: () => WJ,
      vb: () => PJ,
      w: () => gJ,
      y: () => YJ,
      yb: () => KJ,
      z: () => qJ
    });
    var FJ = ZJ(7486),
      UJ = ZJ(7473);
    const eJ = {
        min: 25,
        max: 500,
        step: 5
      },
      XJ = {
        min: 25,
        max: 100,
        step: 5
      },
      AJ = {
        min: 0,
        max: .4,
        step: .01
      },
      qJ = {
        min: 25,
        max: 300,
        step: 5
      },
      jJ = {
        min: .5,
        max: 6,
        step: .1
      },
      YJ = (JJ, cJ) => {
        if (!Number.isFinite(JJ)) return cJ.min;
        const ZJ = cJ.min + Math.round((JJ - cJ.min) / cJ.step) * cJ.step,
          FJ = Math.min(cJ.max, Math.max(cJ.min, ZJ));
        return Math.round(1e3 * FJ) / 1e3
      },
      hJ = JJ => `${Math.round(JJ)}%`,
      DJ = JJ => hJ(100 * JJ),
      sJ = JJ => `${JJ.toFixed(1)}\xd7`,
      nJ = [{
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
      GJ = [{
        value: "exponential",
        labelKey: "controller:settingsCurveExponential"
      }, {
        value: "linear",
        labelKey: "controller:settingsCurveLinear"
      }, {
        value: "boost",
        labelKey: "controller:settingsCurveBoost"
      }],
      fJ = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "focus",
        labelKey: "controller:settingsMenuNavFocus"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      xJ = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "slot",
        labelKey: "controller:settingsInventoryNavSlot"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      rJ = [{
        value: "wheel",
        labelKey: "controller:settingsQuickChatWheel"
      }, {
        value: "off",
        labelKey: "controller:settingsQuickChatOff"
      }],
      vJ = [{
        value: "shop",
        labelKey: "controller:settingsLeaderboardButtonShop"
      }, {
        value: "leaderboard",
        labelKey: "controller:settingsLeaderboardButtonLeaderboard"
      }],
      mJ = [{
        value: "always",
        labelKey: "controller:settingsGyroAlways"
      }, {
        value: "aiming",
        labelKey: "controller:settingsGyroWhileAiming"
      }, {
        value: "button",
        labelKey: "controller:settingsGyroWhileButton"
      }],
      QJ = [{
        value: "tapHold",
        labelKey: "controller:settingsEmoteButtonTapHold"
      }, {
        value: "wheel",
        labelKey: "controller:settingsEmoteButtonWheel"
      }],
      EJ = [{
        value: "toggle",
        labelKey: "controller:settingsSneakToggle"
      }, {
        value: "hold",
        labelKey: "controller:settingsSneakHold"
      }],
      VJ = [{
        value: "default",
        labelKey: "controller:settingsButtonRepeatDefault"
      }, {
        value: "slow",
        labelKey: "controller:settingsButtonRepeatSlow"
      }, {
        value: "off",
        labelKey: "controller:settingsButtonRepeatOff"
      }],
      KJ = [{
        value: "short",
        labelKey: "controller:settingsTapHoldShort"
      }, {
        value: "medium",
        labelKey: "controller:settingsTapHoldMedium"
      }, {
        value: "long",
        labelKey: "controller:settingsTapHoldLong"
      }],
      yJ = [{
        value: "hold",
        labelKey: "controller:settingsAttackHold"
      }, {
        value: "toggle",
        labelKey: "controller:settingsAttackToggle"
      }],
      SJ = {
        southpaw: "controller:settingsLayoutSouthpaw",
        triggersSwapped: "controller:settingsLayoutTriggersSwapped"
      },
      IJ = {
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
        Am: "controller:settingsActionPickBlock",
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
      MJ = {
        gameplay: "controller:settingsGroupGameplay",
        menu: "controller:settingsGroupMenus",
        inventory: "controller:settingsGroupInventory",
        keyboard: "controller:settingsGroupKeyboard"
      },
      bJ = [{
        kind: "fixed",
        stick: "move",
        labelKey: "controller:settingsActionMove"
      }, {
        kind: "fixed",
        stick: "look",
        labelKey: "controller:settingsActionLook"
      }],
      wJ = FJ.e.map((JJ => {
        let {
          group: cJ,
          actions: ZJ
        } = JJ;
        const FJ = ZJ.map((JJ => ({
          kind: "action",
          action: JJ
        })));
        return {
          titleKey: MJ[cJ],
          rows: "gameplay" === cJ ? [...bJ, ...FJ] : FJ
        }
      })),
      WJ = UJ.Z.filter((JJ => "Home" !== JJ)),
      gJ = 1e4;
    class HJ {
      constructor(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
        this.cancelButton = JJ, this.openButton = cJ, this.accepts = ZJ, this.startMs = null, this.ignoredUntilMs = new Map, this.cancelDownAtMs = null
      }
      update(JJ, cJ) {
        var ZJ;
        this.updateIgnored(JJ, cJ);
        const FJ = cJ - (null !== (ZJ = this.startMs) && void 0 !== ZJ ? ZJ : cJ) >= 250;
        for (const UJ of WJ)
          if (UJ !== this.cancelButton && FJ && !this.ignoredUntilMs.has(UJ) && JJ.wasPressed(UJ) && this.accepts(UJ)) return {
            kind: "bind",
            button: UJ
          };
        if (this.ignoredUntilMs.has(this.cancelButton)) return null;
        if (JJ.wasPressed(this.cancelButton)) {
          if (!this.accepts(this.cancelButton)) return {
            kind: "cancel"
          };
          this.cancelDownAtMs = cJ
        }
        return null === this.cancelDownAtMs ? null : JJ.isHeld(this.cancelButton) && cJ - this.cancelDownAtMs >= 700 ? (this.cancelDownAtMs = null, {
          kind: "bind",
          button: this.cancelButton
        }) : JJ.wasReleased(this.cancelButton) ? (this.cancelDownAtMs = null, {
          kind: "cancel"
        }) : null
      }
      getBindHoldProgress(JJ) {
        return null === this.cancelDownAtMs ? 0 : Math.min(1, (JJ - this.cancelDownAtMs) / 700)
      }
      updateIgnored(JJ, cJ) {
        if (null === this.startMs) {
          this.startMs = cJ;
          for (const cJ of WJ) JJ.isDown(cJ) && this.ignoredUntilMs.set(cJ, 1 / 0);
          this.openButton && !this.ignoredUntilMs.has(this.openButton) && this.ignoredUntilMs.set(this.openButton, cJ + 250)
        }
        for (const [ZJ, FJ] of this.ignoredUntilMs) {
          const UJ = JJ.isDown(ZJ);
          FJ === 1 / 0 ? UJ || ZJ !== this.openButton ? UJ || this.ignoredUntilMs.delete(ZJ) : this.ignoredUntilMs.set(ZJ, cJ + 250) : cJ >= FJ ? this.ignoredUntilMs.delete(ZJ) : UJ && this.ignoredUntilMs.set(ZJ, 1 / 0)
        }
      }
    }
    const PJ = 6e3;
    class kJ {
      constructor() {
        this.downAtMs = null, this.pressesAtMs = []
      }
      update(JJ, cJ) {
        let {
          pressed: ZJ,
          hj: FJ
        } = JJ;
        if (ZJ) {
          const JJ = this.pressesAtMs.at(-1);
          if (this.pressesAtMs = void 0 !== JJ && cJ - JJ < 1500 ? [...this.pressesAtMs, cJ] : [cJ], this.pressesAtMs.length >= 3) return 1
        }
        return FJ ? (this.downAtMs ??= cJ, Math.min(1, (cJ - this.downAtMs) / 1500)) : (this.downAtMs = null, 0)
      }
    }
  },
  4433: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => eJ,
      i: () => XJ
    });
    var FJ = ZJ(47);
    const UJ = new WeakMap,
      eJ = JJ => {
        var cJ;
        const ZJ = JJ.closest("[data-pad-slider]");
        return ZJ && null !== (cJ = UJ.get(ZJ)) && void 0 !== cJ ? cJ : null
      },
      XJ = (JJ, cJ) => {
        const ZJ = (0, FJ.useRef)(cJ);
        ZJ.current = cJ, (0, FJ.useEffect)((() => {
          if (JJ.current) return ((JJ, cJ) => (UJ.set(JJ, cJ), () => {
            UJ.get(JJ) === cJ && UJ.delete(JJ)
          }))(JJ.current, {
            adjust: JJ => {
              ZJ.current.adjust(JJ)
            },
            setFraction: JJ => {
              ZJ.current.setFraction(JJ)
            },
            endDrag: () => {
              ZJ.current.endDrag()
            }
          })
        }), [JJ])
      }
  },
  7998: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => eJ,
      g: () => UJ
    });
    var FJ = ZJ(17);
    const UJ = "localBlockBroken";

    function eJ() {
      return {
        onPlayerChangeBlock(JJ, cJ, ZJ, eJ, XJ, AJ) {
          "Air" === AJ && FJ.i.Uf(UJ)
        }
      }
    }
  },
  7544: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/A.926fb88933484dfbde14.svg"
  },
  7552: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/B.9f5ec099f78f84e44427.svg"
  },
  7560: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  7569: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  7577: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/LB.3a20b15927b55d5d8b60.svg"
  },
  7583: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  7585: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/LT.9fdc5e69011b9d41f50a.svg"
  },
  7589: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  7596: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  7601: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Menu.c903a662eb685211e52e.svg"
  },
  7604: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/RB.bba470ddb76ceec5d168.svg"
  },
  7610: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  7618: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/RT.e5a9fbcc3c79550111ca.svg"
  },
  7624: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  7629: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  7633: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  7637: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/View.0c9378b5d720a636d50d.svg"
  },
  7645: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/X.c9377519af94e6dce1d7.svg"
  },
  7654: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Y.62d8c17731dd2e172426.svg"
  },
  7657: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/A.958a6de9474f8d0c9caf.svg"
  },
  7664: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/B.d05958bfa88a1162b47a.svg"
  },
  7669: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Down.db68fb3980768eb54671.svg"
  },
  7673: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  7676: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/LB.37a3c5128c958ec2a0c2.svg"
  },
  7680: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/LS.15b0cc5bf3f2fe7bbd8b.svg"
  },
  7683: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/LT.5412ae5222c69f8c833f.svg"
  },
  7690: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Left.4457b2895ce94a5df32e.svg"
  },
  7696: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  7701: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Menu.1e8427f8133c9d456c53.svg"
  },
  7709: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/RB.c96c4aa2590209e930c7.svg"
  },
  7712: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/RS.8d70d147cf1ab136e845.svg"
  },
  7718: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/RT.1e4691bb5a7c049693df.svg"
  },
  7725: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Right.a1e101413040c540b879.svg"
  },
  7731: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  7738: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Up.7544a65ad4f611a55775.svg"
  },
  7740: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/View.003cae39de89cae0b9d8.svg"
  },
  7749: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/X.d88b6e62dd8fb4bda32a.svg"
  },
  7752: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Y.428d3e70775877892f82.svg"
  },
  7759: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  7763: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  7769: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  7777: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Home.ea8b009cfa9562aa644e.svg"
  },
  7780: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/LB.f283d355d22fc107d6d6.svg"
  },
  7788: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  7794: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/LT.13e66c122e7ee04bb876.svg"
  },
  7798: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  7807: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  7813: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Menu.90fc4e918900eb5062a0.svg"
  },
  7817: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/RB.918a7f16dc054d96b6f3.svg"
  },
  7823: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  7828: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/RT.a0523211130959598bed.svg"
  },
  7835: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  7837: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  7843: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  7849: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/View.0bc952e292c28c3baac2.svg"
  },
  7854: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  7857: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  },
  7861: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  7864: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  7867: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  7874: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Home.8898f76b20962fe52ab7.svg"
  },
  7879: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/LB.689ba3703ae248f2e4cc.svg"
  },
  7882: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  7885: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/LT.9c2d10d335ab5c590525.svg"
  },
  7891: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  7894: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  7897: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Menu.9e485791ea97009871ca.svg"
  },
  7904: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/RB.7ee5ce48dd551f993f80.svg"
  },
  7912: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  7917: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/RT.903ecadc55a9e9e00f07.svg"
  },
  7921: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  7925: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  7928: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  7937: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/View.3c5eeb34f0413bde4a65.svg"
  },
  7946: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  7948: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);