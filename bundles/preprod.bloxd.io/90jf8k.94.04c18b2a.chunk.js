export const id = 94;
export const ids = [94];
export const modules = {
  7799: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => OF,
      f: () => mW
    });
    var CF = SF(1046),
      AF = SF(46),
      uF = SF(1621),
      hF = SF(1629),
      bW = SF(918),
      dF = SF.n(bW),
      PF = SF(1266),
      RF = SF(11),
      iW = SF(89),
      eF = SF(107),
      EF = SF(3997),
      QF = SF(1955),
      rW = SF(231),
      gW = SF(1635),
      tW = SF(1637),
      TF = SF(7808),
      aW = SF(7816),
      kW = SF(220),
      qW = SF(971);
    const VF = {
      floating: "settingsMenu:joystickFloating",
      fixed_shown: "settingsMenu:joystickFixed",
      fixed_hidden: "settingsMenu:joystickHidden"
    };
    var NF = SF(7818);
    const DF = [function() {
      const {
        t: FF
      } = (0, CF.B)(), {
        joystickMode: WF,
        touchSpeedCurve: SF,
        autorun: AF
      } = (0, RF.d)(["clientEscMenuOptions"]).clientEscMenuOptions;
      return (0, qW.jsxs)(qW.Fragment, {
        children: [(0, qW.jsx)(EF.f, {
          label: FF("settingsMenu:joystick"),
          options: kW.Ab.map((WF => ({
            value: WF,
            label: FF(VF[WF])
          }))),
          value: WF,
          onChange: FF => {
            RF.b.setClientEscMenuOptions({
              joystickMode: FF
            })
          },
          circleInfoText: FF("settingsMenu:joystickInfo")
        }), (0, qW.jsx)(EF.b, {
          label: FF("settingsMenu:preciseWalking"),
          checked: SF,
          onClick: FF => {
            RF.b.setClientEscMenuOptions({
              touchSpeedCurve: FF
            })
          },
          circleInfoText: FF("settingsMenu:preciseWalkingInfo")
        }), (0, qW.jsx)(EF.b, {
          label: FF("settingsMenu:autoRun"),
          checked: AF,
          onClick: FF => {
            RF.b.setClientEscMenuOptions({
              autorun: FF
            })
          },
          circleInfoText: FF("settingsMenu:autoRunInfo")
        })]
      })
    }, function() {
      const {
        t: FF
      } = (0, CF.B)(), {
        clientEscMenuOptions: WF
      } = (0, RF.d)(["clientEscMenuOptions"]);
      return (0, aW.m)() ? (0, qW.jsx)(EF.b, {
        label: FF("touchSettings:actionButtons"),
        checked: WF.touchActionButtons,
        onClick: FF => {
          RF.b.setClientEscMenuOptions({
            touchActionButtons: FF
          })
        },
        circleInfoText: FF("touchSettings:actionButtonsInfo")
      }) : null
    }, function() {
      const {
        t: FF
      } = (0, CF.B)(), {
        clientEscMenuOptions: WF
      } = (0, RF.d)(["clientEscMenuOptions"]);
      return (0, NF.b)() ? (0, qW.jsx)(EF.b, {
        label: FF("settingsMenu:vibration"),
        checked: WF.vibration,
        onClick: FF => {
          RF.b.setClientEscMenuOptions({
            vibration: FF
          })
        },
        circleInfoText: FF("settingsMenu:vibrationInfo")
      }) : null
    }];

    function LF() {
      return (0, qW.jsx)(qW.Fragment, {
        children: DF.map(((FF, WF) => (0, qW.jsx)(FF, {}, WF)))
      })
    }

    function mW() {
      const {
        t: FF
      } = (0, CF.B)(), {
        isTouchScreen: WF,
        clientEscMenuOptions: SF,
        gameState: hF
      } = (0, RF.d)(["isTouchScreen", "clientEscMenuOptions", "gameState"]), bW = (0, QF.k)("ezBridging"), dF = (0, QF.k)("ezTowering"), gW = "inGame" !== hF || !0 === bW, tW = (0, rW.e)() && ("inGame" !== hF || !0 === dF), [, aW] = (0, AF.useReducer)((FF => FF + 1), 0), kW = (0, TF.g)();
      return (0, qW.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [kW && (0, qW.jsxs)("div", {
          className: "SettingBox ControlsControllerNote",
          children: [(0, qW.jsx)("div", {
            children: FF("controller:settingsControlsNote")
          }), (0, qW.jsx)(PF.N, {
            onClick: () => {
              RF.b.set({
                openSettingsCategory: "controller"
              })
            },
            children: FF("controller:settingsOpenController")
          })]
        }), (0, iW.isTouchscreen)() && !(0, iW.isMobile)() ? (0, qW.jsx)(qW.Fragment, {
          children: (0, qW.jsx)(EF.b, {
            label: FF("settingsMenu:useTouchControls"),
            checked: WF,
            onClick: FF => {
              RF.b.set({
                isTouchScreen: FF
              })
            }
          })
        }) : null, WF && (0, qW.jsx)(LF, {}), gW && (0, qW.jsx)(EF.b, {
          label: FF("settingsMenu:ezBridging"),
          checked: SF.ezBridging,
          onClick: FF => {
            RF.b.setClientEscMenuOptions({
              ezBridging: FF
            })
          },
          circleInfoText: FF("settingsMenu:ezBridgingInfo")
        }), tW && (0, qW.jsx)(EF.b, {
          label: FF("settingsMenu:ezTowering"),
          checked: SF.ezTowering,
          onClick: FF => {
            RF.b.setClientEscMenuOptions({
              ezTowering: FF
            })
          },
          circleInfoText: FF("settingsMenu:ezToweringInfo")
        }), (0, qW.jsx)(EF.b, {
          label: FF("settingsMenu:crouchToggle"),
          checked: SF.crouchIsToggle,
          onClick: FF => {
            RF.b.setClientEscMenuOptions({
              crouchIsToggle: FF
            })
          },
          circleInfoText: FF("settingsMenu:crouchToggleInfo")
        }), (0, qW.jsx)(EF.b, {
          label: FF("settingsMenu:hideUiToggle"),
          checked: SF.hideUiIsToggle,
          onClick: FF => {
            RF.b.setClientEscMenuOptions({
              hideUiIsToggle: FF
            })
          },
          circleInfoText: FF("settingsMenu:hideUiToggleInfo")
        }), "mouseOnly" !== (0, eF.c)() && (0, qW.jsx)(EF.j, {
          name: FF("settingsMenu:touchscreenSensitivity"),
          min: 1,
          max: 900,
          step: 1,
          initValue: SF.touchscreenSensitivity,
          onChange: FF => {
            RF.b.setClientEscMenuOptions({
              touchscreenSensitivity: FF
            })
          }
        }), !(0, iW.isMobile)() && (0, qW.jsx)(EF.j, {
          name: FF("settingsMenu:mouseSensitivity"),
          min: 1,
          max: 200,
          step: 1,
          initValue: SF.mouseSensitivity,
          onChange: FF => {
            RF.b.setClientEscMenuOptions({
              mouseSensitivity: FF
            })
          }
        }), !(0, iW.isMobile)() && (0, qW.jsxs)("div", {
          className: "ControlsContainer",
          children: [(0, qW.jsx)("div", {
            className: "SliderText",
            children: FF("settingsMenu:keyBindings")
          }), uF.h.map((WF => (0, qW.jsx)(OF, {
            title: FF(WF.name.translationKey, WF.name.params),
            defaultOpen: uF.l.has(WF.id),
            children: WF.actions.map((FF => (0, qW.jsx)(xW, {
              noaAction: FF,
              forceUpdate: aW,
              clashesWith: WF.clashesWith,
              showPadGlyph: kW
            }, FF)))
          }, WF.name.translationKey))), (0, qW.jsx)(PF.E, {
            className: "ResetBindingsButton",
            onClick: () => {
              (0, uF.I)(), aW()
            },
            children: FF("controls:resetBindings")
          })]
        })]
      })
    }

    function OF(FF) {
      let {
        title: WF,
        defaultOpen: SF,
        children: CF
      } = FF;
      const [uF, hF] = (0, AF.useState)(SF);
      return (0, qW.jsxs)("div", {
        className: dF()("ControlsSection", {
          Collapsed: !uF
        }),
        children: [(0, qW.jsxs)("div", {
          className: "ControlsSectionHeader",
          "data-pad-focusable": !0,
          onClick: () => {
            hF(!uF)
          },
          children: [(0, qW.jsx)("div", {
            className: "ControlsSectionTitle",
            children: WF
          }), (0, qW.jsx)("div", {
            className: "ControlsSectionChevron",
            children: "\u25be"
          })]
        }), uF && (0, qW.jsx)("div", {
          className: "ControlsSectionRows",
          children: CF
        })]
      })
    }

    function xW(FF) {
      let {
        noaAction: WF,
        forceUpdate: SF,
        clashesWith: bW,
        showPadGlyph: RF
      } = FF;
      const {
        t: iW
      } = (0, CF.B)(), eF = (0, tW.c)(WF), [EF, QF] = (0, AF.useState)(!1), [rW, TF] = (0, AF.useState)("controls:clickToEnterNewBinding"), [aW, kW] = (0, AF.useState)(null), [VF, NF] = (0, AF.useState)(null), DF = (0, AF.useRef)(null);
      (0, AF.useEffect)((() => {
        EF && DF.current && DF.current.focus()
      }), [EF]);
      const LF = uF.z[WF].filter((FF => hF.h[FF]));
      let mW = null;
      const OF = [],
        xW = bW.flatMap((FF => {
          var WF, SF;
          return null !== (WF = null === (SF = uF.h.find((WF => WF.id === FF))) || void 0 === SF ? void 0 : SF.actions) && void 0 !== WF ? WF : []
        }));
      for (const CF of xW) {
        if (CF === WF) continue;
        const FF = uF.z[CF];
        for (const WF of FF) LF.includes(WF) && OF.push(iW(uF.A[CF].translationKey, uF.A[CF].params))
      }
      OF.length > 0 && (mW = iW("controls:sharedBindingsWarning") + " ", mW += OF.join(", "));
      const ZF = () => {
          QF(!1), kW(null), TF("controls:clickToEnterNewBinding"), NF(null)
        },
        oF = () => "BindingInput_" + WF;
      return (0, qW.jsxs)("div", {
        className: dF()("ControlRow", {
          WarningBorder: null !== mW
        }),
        children: [(0, qW.jsxs)("div", {
          className: "ControlRowInner",
          children: [(0, qW.jsxs)("div", {
            className: "ControlName",
            children: [iW(uF.A[WF].translationKey, uF.A[WF].params), RF && eF && (0, qW.jsx)(gW.c, {
              glyph: eF,
              className: "ControlPadGlyph"
            })]
          }), (0, qW.jsxs)("div", {
            className: "ControlBindingsContainer",
            children: [(0, qW.jsxs)("div", {
              className: "ControlBindingsList",
              children: [LF.map((FF => (0, qW.jsxs)("div", {
                className: "ControlBinding",
                children: [(0, qW.jsx)("div", {
                  children: (0, uF.o)(FF)
                }), (0, qW.jsx)("div", {
                  className: "ControlBindingRemoveIcon",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    const CF = (0, uF.D)(WF, FF);
                    CF.isError() ? NF(CF.asError().message) : NF(null), SF()
                  },
                  children: "\xd7"
                })]
              }, FF))), !EF && (0, qW.jsx)("div", {
                className: "ControlBinding ControlBindingAdd",
                onClick: () => {
                  QF(!0), NF(null)
                },
                children: (0, qW.jsx)("div", {
                  className: "ControlBindingAddIcon",
                  children: "+"
                })
              })]
            }), EF && (0, qW.jsxs)("div", {
              className: "ControlBindingAddInput",
              children: [(0, qW.jsxs)("div", {
                className: "InputContainer",
                children: [(0, qW.jsx)("div", {
                  className: "InputOverlay",
                  children: aW ? (0, uF.o)(aW) : (0, qW.jsx)("div", {
                    className: "InputOverlayPlaceholder",
                    children: iW(rW)
                  })
                }), (0, qW.jsx)("input", {
                  ref: DF,
                  id: oF(),
                  "data-pad-no-osk": !0,
                  defaultValue: "",
                  onKeyDown: FF => {
                    if ("Escape" === FF.code) return ZF(), FF.preventDefault(), void FF.stopPropagation();
                    const WF = FF.code;
                    hF.d.includes(WF) ? (NF(null), kW(WF)) : (NF("controls:keyIsReserved"), kW(null)), FF.preventDefault(), FF.stopPropagation()
                  },
                  onMouseDown: FF => {
                    const WF = "Mouse" + (FF.button + 1);
                    document.activeElement && document.activeElement.id === oF() ? hF.d.includes(WF) ? (NF(null), kW(WF)) : (NF("controls:keyIsReserved"), kW(null)) : TF("controls:enterNewBinding"), FF.stopPropagation()
                  },
                  onBlur: () => {
                    TF("controls:clickToEnterNewBinding")
                  }
                })]
              }), (0, qW.jsx)(PF.e, {
                onPointerDown: FF => {
                  FF.preventDefault()
                },
                onClick: () => {
                  (0, uF.e)(WF, aW), SF(), ZF()
                },
                className: "ControlBindingAddButton",
                disabled: null === aW,
                children: iW("general:add")
              }), (0, qW.jsx)("div", {
                className: "ControlBindingAddCancel",
                onClick: () => {
                  ZF()
                },
                children: "\xd7"
              })]
            }), VF && (0, qW.jsx)("div", {
              className: "ControlBindingError",
              children: iW(VF)
            })]
          })]
        }), mW && (0, qW.jsx)("div", {
          className: "ControlRowWarning",
          children: mW
        })]
      })
    }
  },
  3997: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => QF,
      f: () => TF,
      j: () => rW,
      k: () => tW
    });
    var CF = SF(46),
      AF = SF(4003),
      uF = SF(3517),
      hF = SF(1198),
      bW = SF(4027),
      dF = SF(918),
      PF = SF.n(dF),
      RF = SF(1189),
      iW = SF(1510),
      eF = SF(4034),
      EF = SF(971);

    function QF(FF) {
      let {
        label: WF,
        onClick: SF,
        checked: CF,
        circleInfoText: AF,
        className: bW,
        disabled: dF
      } = FF;
      return (0, EF.jsx)("div", {
        "aria-disabled": dF || void 0,
        "data-pad-focusable": !0,
        className: PF()("SettingBox CheckboxContainer", {
          [bW]: bW,
          SettingBoxDisabled: dF
        }),
        onClick: () => {
          dF || SF(!CF)
        },
        children: (0, EF.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, EF.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, EF.jsx)(uF.b, {
              className: "SettingsCheckbox",
              checked: CF,
              disabled: dF,
              onChange: () => {}
            })
          }), (0, EF.jsxs)("div", {
            className: "CheckboxText",
            children: [WF, AF && (0, EF.jsx)("span", {
              onClick: FF => FF.stopPropagation(),
              children: (0, EF.jsx)(hF.e, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: AF
              })
            })]
          })]
        })
      })
    }

    function rW(FF) {
      let {
        name: WF,
        onChange: SF,
        min: AF,
        max: uF,
        step: bW,
        initValue: dF,
        circleInfoText: RF,
        format: iW,
        className: eF,
        padStep: QF,
        disabled: rW = !1,
        selectableMax: tW,
        cappedNote: TF
      } = FF;
      const [aW, kW] = (0, CF.useState)(dF);
      (0, CF.useEffect)((() => {
        kW(dF)
      }), [dF]);
      const qW = void 0 !== tW && tW < uF,
        VF = qW ? {
          "--slider-selectable": (tW - AF) / (uF - AF)
        } : void 0;
      return (0, EF.jsxs)("div", {
        className: PF()("SettingBox SettingsSliderDiv", {
          [eF]: eF,
          SettingBoxDisabled: rW,
          SliderCapped: qW
        }),
        style: VF,
        children: [(0, EF.jsxs)("div", {
          className: "SliderText",
          children: [`${WF}: ${iW?iW(aW):aW}`, RF && (0, EF.jsx)(hF.e, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: RF
          })]
        }), (0, EF.jsx)("div", {
          className: "SliderDiv",
          children: (0, EF.jsx)(gW, {
            value: aW,
            min: AF,
            max: uF,
            step: bW,
            onChange: FF => {
              if (qW && FF >= tW && aW === tW) return;
              const WF = qW ? Math.min(FF, tW) : FF;
              kW(WF), SF(WF)
            },
            format: iW,
            padStep: QF,
            disabled: rW
          })
        }), qW && TF && (0, EF.jsx)("div", {
          className: "SliderNote",
          children: TF
        })]
      })
    }

    function gW(FF) {
      var WF;
      let {
        value: SF,
        min: uF,
        max: hF,
        step: bW,
        onChange: dF,
        orientation: PF,
        reverse: RF,
        setIsChanging: iW,
        tooltip: QF,
        labels: rW,
        handleLabel: gW,
        format: tW,
        onChangeStart: TF,
        onChangeComplete: aW,
        padStep: kW,
        disabled: qW = !1
      } = FF;
      const VF = (0, CF.useRef)(null),
        NF = (0, CF.useRef)(null);
      (0, CF.useLayoutEffect)((() => {
        var FF, WF, SF;
        const CF = null !== (FF = null === (WF = VF.current) || void 0 === WF ? void 0 : WF.querySelector(".rangeslider")) && void 0 !== FF ? FF : null;
        null === CF || void 0 === CF || CF.setAttribute("data-pad-slider", ""), null === CF || void 0 === CF || CF.setAttribute("data-pad-focusable", ""), null === CF || void 0 === CF || null === (SF = CF.querySelector(".rangeslider__handle")) || void 0 === SF || SF.setAttribute("data-pad-slider-handle", ""), NF.current = CF
      }), []), (0, CF.useLayoutEffect)((() => {
        var FF, WF;
        qW ? null === (FF = NF.current) || void 0 === FF || FF.setAttribute("aria-disabled", "true") : null === (WF = NF.current) || void 0 === WF || WF.removeAttribute("aria-disabled")
      }), [qW]);
      const DF = (null !== (WF = String(bW).split(".")[1]) && void 0 !== WF ? WF : "").length,
        LF = FF => {
          const WF = Number((Math.round((FF - uF) / bW) * bW + uF).toFixed(DF));
          return Math.min(hF, Math.max(uF, WF))
        },
        mW = (0, CF.useRef)(!1);
      return (0, eF.c)(NF, {
        adjust: FF => {
          if (qW) return;
          const WF = null !== kW && void 0 !== kW ? kW : Math.max(bW, Math.round((hF - uF) / 20 / bW) * bW),
            CF = LF(SF + FF * WF * (RF ? -1 : 1));
          CF !== SF && (null === TF || void 0 === TF || TF(), dF(CF), null === aW || void 0 === aW || aW())
        },
        setFraction: FF => {
          if (qW) return;
          const WF = LF(uF + (RF ? 1 - FF : FF) * (hF - uF));
          WF !== SF && (mW.current || (mW.current = !0, null === TF || void 0 === TF || TF()), dF(WF))
        },
        endDrag: () => {
          mW.current && (mW.current = !1, null === aW || void 0 === aW || aW())
        }
      }), (0, EF.jsx)("div", {
        ref: VF,
        style: {
          display: "contents"
        },
        children: (0, EF.jsx)(AF.c, {
          value: SF,
          min: uF,
          max: hF,
          step: bW,
          onChange: dF,
          orientation: PF,
          reverse: RF,
          tooltip: QF,
          labels: rW,
          handleLabel: gW,
          format: tW,
          onChangeStart: () => {
            null === TF || void 0 === TF || TF(), null === iW || void 0 === iW || iW(!0)
          },
          onChangeComplete: () => {
            null === iW || void 0 === iW || iW(!1), null === aW || void 0 === aW || aW()
          }
        })
      })
    }
    async function tW() {
      const FF = RF.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: ""
      });
      !0 === await FF.getResult() && (0, iW.reloadBloxd)()
    }

    function TF(FF) {
      let {
        label: WF,
        options: SF,
        value: CF,
        onChange: AF,
        circleInfoText: uF
      } = FF;
      return (0, EF.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, EF.jsxs)("div", {
          className: "SliderText",
          children: [WF, uF && (0, EF.jsx)(hF.e, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: uF
          })]
        }), (0, EF.jsx)(bW.b, {
          ariaLabel: WF,
          options: SF,
          value: CF,
          onChange: AF
        })]
      })
    }
  },
  4027: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => hF
    });
    var CF = SF(918),
      AF = SF.n(CF),
      uF = SF(971);

    function hF(FF) {
      let {
        options: WF,
        value: SF,
        onChange: CF,
        ariaLabel: hF
      } = FF;
      return (0, uF.jsx)("div", {
        className: "SegmentedToggle",
        role: "group",
        "aria-label": hF,
        children: WF.map((FF => {
          const WF = FF.value === SF;
          return (0, uF.jsx)("button", {
            type: "button",
            "aria-pressed": WF,
            className: AF()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: WF
            }),
            onClick: () => {
              WF || CF(FF.value)
            },
            children: FF.label
          }, FF.value)
        }))
      })
    }
  },
  7816: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => dF,
      h: () => bW,
      l: () => hF,
      m: () => uF
    });
    var CF = SF(11),
      AF = SF(234);

    function uF() {
      return !AF.h
    }

    function hF(FF) {
      return uF() && FF
    }

    function bW(FF, WF) {
      return FF && !hF(WF)
    }

    function dF() {
      return bW(CF.b.get("isTouchScreen"), CF.b.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  7770: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => bW
    });
    var CF = SF(11),
      AF = SF(2636),
      uF = SF(1189),
      hF = SF(1223);
    const bW = async () => {
      if ((0, hF.f)()) {
        if (!0 !== await uF.NotificationProvider.showPromptPopup({
            title: "controller:menusLeaveGameTitle",
            confirmText: "controller:menusLeaveGameLeave",
            cancelText: "controller:menusLeaveGameStay",
            destructive: !0
          }).getResult() || "inGame" !== CF.b.get("gameState")) return
      }(0, AF.c)()
    }
  },
  7778: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => dF,
      g: () => uF,
      j: () => hF,
      k: () => AF,
      o: () => bW
    });
    var CF = SF(1603);
    const AF = "controllerPadShopOpen",
      uF = FF => CF.h.includes(FF),
      hF = FF => Object.values(FF).some((FF => !1 !== FF.canBuy && !FF.isRewardedAd)),
      bW = (FF, WF, SF) => {
        var CF, AF, hF, bW;
        const dF = FF.filter((FF => !uF(FF))),
          PF = null !== WF && FF.includes(WF) ? WF : null;
        return null !== PF && !uF(PF) && SF(PF) ? PF : null !== (CF = null !== (AF = null !== (hF = null !== (bW = dF.find(SF)) && void 0 !== bW ? bW : dF[0]) && void 0 !== hF ? hF : PF) && void 0 !== AF ? AF : FF[0]) && void 0 !== CF ? CF : null
      },
      dF = FF => FF.userInput || FF.isRewardedAd || "boolean" === typeof FF.isSelected ? null : JSON.stringify([FF.image, FF.cost, FF.currency, FF.amount, FF.customTitle, FF.buyButtonText, FF.description, FF.canBuy])
  },
  7808: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => PF,
      g: () => RF
    });
    var CF = SF(46),
      AF = SF(1262),
      uF = SF(1641),
      hF = SF(1234),
      bW = SF(1244),
      dF = SF(971);
    const PF = () => {
        const FF = (0, hF.r)();
        if ((0, CF.useEffect)((() => {
            (0, hF.n)()
          }), []), !FF) return null;
        const {
          ControllerCategory: WF
        } = FF;
        return (0, dF.jsx)(bW.e, {
          children: (0, dF.jsx)(WF, {})
        })
      },
      RF = () => {
        var FF;
        const WF = (0, hF.r)(),
          [, SF] = (0, CF.useReducer)((FF => FF + 1), 0);
        return (0, AF.e)(uF.d, SF), null !== (FF = null === WF || void 0 === WF ? void 0 : WF.hasActivePad()) && void 0 !== FF && FF
      }
  },
  4034: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => uF,
      c: () => hF
    });
    var CF = SF(46);
    const AF = new WeakMap,
      uF = FF => {
        var WF;
        const SF = FF.closest("[data-pad-slider]");
        return SF && null !== (WF = AF.get(SF)) && void 0 !== WF ? WF : null
      },
      hF = (FF, WF) => {
        const SF = (0, CF.useRef)(WF);
        SF.current = WF, (0, CF.useEffect)((() => {
          if (FF.current) return ((FF, WF) => (AF.set(FF, WF), () => {
            AF.get(FF) === WF && AF.delete(FF)
          }))(FF.current, {
            adjust: FF => {
              SF.current.adjust(FF)
            },
            setFraction: FF => {
              SF.current.setFraction(FF)
            },
            endDrag: () => {
              SF.current.endDrag()
            }
          })
        }), [FF])
      }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);