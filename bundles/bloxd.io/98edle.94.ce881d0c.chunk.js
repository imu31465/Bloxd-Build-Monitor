export const id = 94;
export const ids = [94];
export const modules = {
  7742: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => XW,
      e: () => cR
    });
    var wW = MW(1027),
      CW = MW(75),
      zR = MW(1578),
      AW = MW(1586),
      bR = MW(897),
      yR = MW.n(bR),
      NW = MW(1255),
      eW = MW(27),
      BW = MW(116),
      tR = MW(130),
      TW = MW(3965),
      gR = MW(1953),
      iR = MW(249),
      YW = MW(1595),
      JW = MW(1600),
      PW = MW(7749),
      IW = MW(7753),
      oW = MW(232),
      lW = MW(940);
    const FW = {
      floating: "settingsMenu:joystickFloating",
      fixed_shown: "settingsMenu:joystickFixed",
      fixed_hidden: "settingsMenu:joystickHidden"
    };
    var fW = MW(7759);
    const QW = [function() {
      const {
        t: WW
      } = (0, wW.C)(), {
        joystickMode: RW,
        touchSpeedCurve: MW,
        autorun: CW
      } = (0, eW.i)(["clientEscMenuOptions"]).clientEscMenuOptions;
      return (0, lW.jsxs)(lW.Fragment, {
        children: [(0, lW.jsx)(TW.f, {
          label: WW("settingsMenu:joystick"),
          options: oW.tb.map((RW => ({
            value: RW,
            label: WW(FW[RW])
          }))),
          value: RW,
          onChange: WW => {
            eW.b.setClientEscMenuOptions({
              joystickMode: WW
            })
          },
          circleInfoText: WW("settingsMenu:joystickInfo")
        }), (0, lW.jsx)(TW.b, {
          label: WW("settingsMenu:preciseWalking"),
          checked: MW,
          onClick: WW => {
            eW.b.setClientEscMenuOptions({
              touchSpeedCurve: WW
            })
          },
          circleInfoText: WW("settingsMenu:preciseWalkingInfo")
        }), (0, lW.jsx)(TW.b, {
          label: WW("settingsMenu:autoRun"),
          checked: CW,
          onClick: WW => {
            eW.b.setClientEscMenuOptions({
              autorun: WW
            })
          },
          circleInfoText: WW("settingsMenu:autoRunInfo")
        })]
      })
    }, function() {
      const {
        t: WW
      } = (0, wW.C)(), {
        clientEscMenuOptions: RW
      } = (0, eW.i)(["clientEscMenuOptions"]);
      return (0, IW.n)() ? (0, lW.jsx)(TW.b, {
        label: WW("touchSettings:actionButtons"),
        checked: RW.touchActionButtons,
        onClick: WW => {
          eW.b.setClientEscMenuOptions({
            touchActionButtons: WW
          })
        },
        circleInfoText: WW("touchSettings:actionButtonsInfo")
      }) : null
    }, function() {
      const {
        t: WW
      } = (0, wW.C)(), {
        clientEscMenuOptions: RW
      } = (0, eW.i)(["clientEscMenuOptions"]);
      return (0, fW.c)() ? (0, lW.jsx)(TW.b, {
        label: WW("settingsMenu:vibration"),
        checked: RW.vibration,
        onClick: WW => {
          eW.b.setClientEscMenuOptions({
            vibration: WW
          })
        },
        circleInfoText: WW("settingsMenu:vibrationInfo")
      }) : null
    }];

    function rR() {
      return (0, lW.jsx)(lW.Fragment, {
        children: QW.map(((WW, RW) => (0, lW.jsx)(WW, {}, RW)))
      })
    }

    function cR() {
      const {
        t: WW
      } = (0, wW.C)(), {
        isTouchScreen: RW,
        clientEscMenuOptions: MW,
        gameState: AW
      } = (0, eW.i)(["isTouchScreen", "clientEscMenuOptions", "gameState"]), bR = (0, gR.h)("ezBridging"), yR = (0, gR.h)("ezTowering"), YW = "inGame" !== AW || !0 === bR, JW = (0, iR.e)() && ("inGame" !== AW || !0 === yR), [, IW] = (0, CW.useReducer)((WW => WW + 1), 0), oW = (0, PW.c)();
      return (0, lW.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [oW && (0, lW.jsxs)("div", {
          className: "SettingBox ControlsControllerNote",
          children: [(0, lW.jsx)("div", {
            children: WW("controller:settingsControlsNote")
          }), (0, lW.jsx)(NW.O, {
            onClick: () => {
              eW.b.set({
                openSettingsCategory: "controller"
              })
            },
            children: WW("controller:settingsOpenController")
          })]
        }), (0, BW.isTouchscreen)() && !(0, BW.isMobile)() ? (0, lW.jsx)(lW.Fragment, {
          children: (0, lW.jsx)(TW.b, {
            label: WW("settingsMenu:useTouchControls"),
            checked: RW,
            onClick: WW => {
              eW.b.set({
                isTouchScreen: WW
              })
            }
          })
        }) : null, RW && (0, lW.jsx)(rR, {}), YW && (0, lW.jsx)(TW.b, {
          label: WW("settingsMenu:ezBridging"),
          checked: MW.ezBridging,
          onClick: WW => {
            eW.b.setClientEscMenuOptions({
              ezBridging: WW
            })
          },
          circleInfoText: WW("settingsMenu:ezBridgingInfo")
        }), JW && (0, lW.jsx)(TW.b, {
          label: WW("settingsMenu:ezTowering"),
          checked: MW.ezTowering,
          onClick: WW => {
            eW.b.setClientEscMenuOptions({
              ezTowering: WW
            })
          },
          circleInfoText: WW("settingsMenu:ezToweringInfo")
        }), (0, lW.jsx)(TW.b, {
          label: WW("settingsMenu:crouchToggle"),
          checked: MW.crouchIsToggle,
          onClick: WW => {
            eW.b.setClientEscMenuOptions({
              crouchIsToggle: WW
            })
          },
          circleInfoText: WW("settingsMenu:crouchToggleInfo")
        }), (0, lW.jsx)(TW.b, {
          label: WW("settingsMenu:hideUiToggle"),
          checked: MW.hideUiIsToggle,
          onClick: WW => {
            eW.b.setClientEscMenuOptions({
              hideUiIsToggle: WW
            })
          },
          circleInfoText: WW("settingsMenu:hideUiToggleInfo")
        }), "mouseOnly" !== (0, tR.c)() && (0, lW.jsx)(TW.g, {
          name: WW("settingsMenu:touchscreenSensitivity"),
          min: 1,
          max: 900,
          step: 1,
          initValue: MW.touchscreenSensitivity,
          onChange: WW => {
            eW.b.setClientEscMenuOptions({
              touchscreenSensitivity: WW
            })
          }
        }), !(0, BW.isMobile)() && (0, lW.jsx)(TW.g, {
          name: WW("settingsMenu:mouseSensitivity"),
          min: 1,
          max: 200,
          step: 1,
          initValue: MW.mouseSensitivity,
          onChange: WW => {
            eW.b.setClientEscMenuOptions({
              mouseSensitivity: WW
            })
          }
        }), !(0, BW.isMobile)() && (0, lW.jsxs)("div", {
          className: "ControlsContainer",
          children: [(0, lW.jsx)("div", {
            className: "SliderText",
            children: WW("settingsMenu:keyBindings")
          }), zR.f.map((RW => (0, lW.jsx)(XW, {
            title: WW(RW.name.translationKey, RW.name.params),
            defaultOpen: zR.g.has(RW.id),
            children: RW.actions.map((WW => (0, lW.jsx)(jR, {
              noaAction: WW,
              forceUpdate: IW,
              clashesWith: RW.clashesWith,
              showPadGlyph: oW
            }, WW)))
          }, RW.name.translationKey))), (0, lW.jsx)(NW.E, {
            className: "ResetBindingsButton",
            onClick: () => {
              (0, zR.B)(), IW()
            },
            children: WW("controls:resetBindings")
          })]
        })]
      })
    }

    function XW(WW) {
      let {
        title: RW,
        defaultOpen: MW,
        children: wW
      } = WW;
      const [zR, AW] = (0, CW.useState)(MW);
      return (0, lW.jsxs)("div", {
        className: yR()("ControlsSection", {
          Collapsed: !zR
        }),
        children: [(0, lW.jsxs)("div", {
          className: "ControlsSectionHeader",
          "data-pad-focusable": !0,
          onClick: () => {
            AW(!zR)
          },
          children: [(0, lW.jsx)("div", {
            className: "ControlsSectionTitle",
            children: RW
          }), (0, lW.jsx)("div", {
            className: "ControlsSectionChevron",
            children: "\u25be"
          })]
        }), zR && (0, lW.jsx)("div", {
          className: "ControlsSectionRows",
          children: wW
        })]
      })
    }

    function jR(WW) {
      let {
        noaAction: RW,
        forceUpdate: MW,
        clashesWith: bR,
        showPadGlyph: eW
      } = WW;
      const {
        t: BW
      } = (0, wW.C)(), tR = (0, JW.d)(RW), [TW, gR] = (0, CW.useState)(!1), [iR, PW] = (0, CW.useState)("controls:clickToEnterNewBinding"), [IW, oW] = (0, CW.useState)(null), [FW, fW] = (0, CW.useState)(null), QW = (0, CW.useRef)(null);
      (0, CW.useEffect)((() => {
        TW && QW.current && QW.current.focus()
      }), [TW]);
      const rR = zR.q[RW].filter((WW => AW.g[WW]));
      let cR = null;
      const XW = [],
        jR = bR.flatMap((WW => {
          var RW, MW;
          return null !== (RW = null === (MW = zR.f.find((RW => RW.id === WW))) || void 0 === MW ? void 0 : MW.actions) && void 0 !== RW ? RW : []
        }));
      for (const wW of jR) {
        if (wW === RW) continue;
        const WW = zR.q[wW];
        for (const RW of WW) rR.includes(RW) && XW.push(BW(zR.u[wW].translationKey, zR.u[wW].params))
      }
      XW.length > 0 && (cR = BW("controls:sharedBindingsWarning") + " ", cR += XW.join(", "));
      const kR = () => {
          gR(!1), oW(null), PW("controls:clickToEnterNewBinding"), fW(null)
        },
        aR = () => "BindingInput_" + RW;
      return (0, lW.jsxs)("div", {
        className: yR()("ControlRow", {
          WarningBorder: null !== cR
        }),
        children: [(0, lW.jsxs)("div", {
          className: "ControlRowInner",
          children: [(0, lW.jsxs)("div", {
            className: "ControlName",
            children: [BW(zR.u[RW].translationKey, zR.u[RW].params), eW && tR && (0, lW.jsx)(YW.d, {
              glyph: tR,
              className: "ControlPadGlyph"
            })]
          }), (0, lW.jsxs)("div", {
            className: "ControlBindingsContainer",
            children: [(0, lW.jsxs)("div", {
              className: "ControlBindingsList",
              children: [rR.map((WW => (0, lW.jsxs)("div", {
                className: "ControlBinding",
                children: [(0, lW.jsx)("div", {
                  children: (0, zR.k)(WW)
                }), (0, lW.jsx)("div", {
                  className: "ControlBindingRemoveIcon",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    const wW = (0, zR.w)(RW, WW);
                    wW.isError() ? fW(wW.asError().message) : fW(null), MW()
                  },
                  children: "\xd7"
                })]
              }, WW))), !TW && (0, lW.jsx)("div", {
                className: "ControlBinding ControlBindingAdd",
                onClick: () => {
                  gR(!0), fW(null)
                },
                children: (0, lW.jsx)("div", {
                  className: "ControlBindingAddIcon",
                  children: "+"
                })
              })]
            }), TW && (0, lW.jsxs)("div", {
              className: "ControlBindingAddInput",
              children: [(0, lW.jsxs)("div", {
                className: "InputContainer",
                children: [(0, lW.jsx)("div", {
                  className: "InputOverlay",
                  children: IW ? (0, zR.k)(IW) : (0, lW.jsx)("div", {
                    className: "InputOverlayPlaceholder",
                    children: BW(iR)
                  })
                }), (0, lW.jsx)("input", {
                  ref: QW,
                  id: aR(),
                  "data-pad-no-osk": !0,
                  defaultValue: "",
                  onKeyDown: WW => {
                    if ("Escape" === WW.code) return kR(), WW.preventDefault(), void WW.stopPropagation();
                    const RW = WW.code;
                    AW.c.includes(RW) ? (fW(null), oW(RW)) : (fW("controls:keyIsReserved"), oW(null)), WW.preventDefault(), WW.stopPropagation()
                  },
                  onMouseDown: WW => {
                    const RW = "Mouse" + (WW.button + 1);
                    document.activeElement && document.activeElement.id === aR() ? AW.c.includes(RW) ? (fW(null), oW(RW)) : (fW("controls:keyIsReserved"), oW(null)) : PW("controls:enterNewBinding"), WW.stopPropagation()
                  },
                  onBlur: () => {
                    PW("controls:clickToEnterNewBinding")
                  }
                })]
              }), (0, lW.jsx)(NW.h, {
                onPointerDown: WW => {
                  WW.preventDefault()
                },
                onClick: () => {
                  (0, zR.c)(RW, IW), MW(), kR()
                },
                className: "ControlBindingAddButton",
                disabled: null === IW,
                children: BW("general:add")
              }), (0, lW.jsx)("div", {
                className: "ControlBindingAddCancel",
                onClick: () => {
                  kR()
                },
                children: "\xd7"
              })]
            }), FW && (0, lW.jsx)("div", {
              className: "ControlBindingError",
              children: BW(FW)
            })]
          })]
        }), cR && (0, lW.jsx)("div", {
          className: "ControlRowWarning",
          children: cR
        })]
      })
    }
  },
  3965: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => gR,
      f: () => PW,
      g: () => iR,
      i: () => JW
    });
    var wW = MW(75),
      CW = MW(3974),
      zR = MW(3458),
      AW = MW(1180),
      bR = MW(3991),
      yR = MW(897),
      NW = MW.n(yR),
      eW = MW(1166),
      BW = MW(1495),
      tR = MW(3994),
      TW = MW(940);

    function gR(WW) {
      let {
        label: RW,
        onClick: MW,
        checked: wW,
        circleInfoText: CW,
        className: bR,
        disabled: yR
      } = WW;
      return (0, TW.jsx)("div", {
        "aria-disabled": yR || void 0,
        "data-pad-focusable": !0,
        className: NW()("SettingBox CheckboxContainer", {
          [bR]: bR,
          SettingBoxDisabled: yR
        }),
        onClick: () => {
          yR || MW(!wW)
        },
        children: (0, TW.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, TW.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, TW.jsx)(zR.e, {
              className: "SettingsCheckbox",
              checked: wW,
              disabled: yR,
              onChange: () => {}
            })
          }), (0, TW.jsxs)("div", {
            className: "CheckboxText",
            children: [RW, CW && (0, TW.jsx)("span", {
              onClick: WW => WW.stopPropagation(),
              children: (0, TW.jsx)(AW.b, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: CW
              })
            })]
          })]
        })
      })
    }

    function iR(WW) {
      let {
        name: RW,
        onChange: MW,
        min: CW,
        max: zR,
        step: bR,
        initValue: yR,
        circleInfoText: eW,
        format: BW,
        className: tR,
        padStep: gR,
        disabled: iR = !1,
        selectableMax: JW,
        cappedNote: PW
      } = WW;
      const [IW, oW] = (0, wW.useState)(yR);
      (0, wW.useEffect)((() => {
        oW(yR)
      }), [yR]);
      const lW = void 0 !== JW && JW < zR,
        FW = lW ? {
          "--slider-selectable": (JW - CW) / (zR - CW)
        } : void 0;
      return (0, TW.jsxs)("div", {
        className: NW()("SettingBox SettingsSliderDiv", {
          [tR]: tR,
          SettingBoxDisabled: iR,
          SliderCapped: lW
        }),
        style: FW,
        children: [(0, TW.jsxs)("div", {
          className: "SliderText",
          children: [`${RW}: ${BW?BW(IW):IW}`, eW && (0, TW.jsx)(AW.b, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: eW
          })]
        }), (0, TW.jsx)("div", {
          className: "SliderDiv",
          children: (0, TW.jsx)(YW, {
            value: IW,
            min: CW,
            max: zR,
            step: bR,
            onChange: WW => {
              if (lW && WW >= JW && IW === JW) return;
              const RW = lW ? Math.min(WW, JW) : WW;
              oW(RW), MW(RW)
            },
            format: BW,
            padStep: gR,
            disabled: iR
          })
        }), lW && PW && (0, TW.jsx)("div", {
          className: "SliderNote",
          children: PW
        })]
      })
    }

    function YW(WW) {
      var RW;
      let {
        value: MW,
        min: zR,
        max: AW,
        step: bR,
        onChange: yR,
        orientation: NW,
        reverse: eW,
        setIsChanging: BW,
        tooltip: gR,
        labels: iR,
        handleLabel: YW,
        format: JW,
        onChangeStart: PW,
        onChangeComplete: IW,
        padStep: oW,
        disabled: lW = !1
      } = WW;
      const FW = (0, wW.useRef)(null),
        fW = (0, wW.useRef)(null);
      (0, wW.useLayoutEffect)((() => {
        var WW, RW, MW;
        const wW = null !== (WW = null === (RW = FW.current) || void 0 === RW ? void 0 : RW.querySelector(".rangeslider")) && void 0 !== WW ? WW : null;
        null === wW || void 0 === wW || wW.setAttribute("data-pad-slider", ""), null === wW || void 0 === wW || wW.setAttribute("data-pad-focusable", ""), null === wW || void 0 === wW || null === (MW = wW.querySelector(".rangeslider__handle")) || void 0 === MW || MW.setAttribute("data-pad-slider-handle", ""), fW.current = wW
      }), []), (0, wW.useLayoutEffect)((() => {
        var WW, RW;
        lW ? null === (WW = fW.current) || void 0 === WW || WW.setAttribute("aria-disabled", "true") : null === (RW = fW.current) || void 0 === RW || RW.removeAttribute("aria-disabled")
      }), [lW]);
      const QW = (null !== (RW = String(bR).split(".")[1]) && void 0 !== RW ? RW : "").length,
        rR = WW => {
          const RW = Number((Math.round((WW - zR) / bR) * bR + zR).toFixed(QW));
          return Math.min(AW, Math.max(zR, RW))
        },
        cR = (0, wW.useRef)(!1);
      return (0, tR.i)(fW, {
        adjust: WW => {
          if (lW) return;
          const RW = null !== oW && void 0 !== oW ? oW : Math.max(bR, Math.round((AW - zR) / 20 / bR) * bR),
            wW = rR(MW + WW * RW * (eW ? -1 : 1));
          wW !== MW && (null === PW || void 0 === PW || PW(), yR(wW), null === IW || void 0 === IW || IW())
        },
        setFraction: WW => {
          if (lW) return;
          const RW = rR(zR + (eW ? 1 - WW : WW) * (AW - zR));
          RW !== MW && (cR.current || (cR.current = !0, null === PW || void 0 === PW || PW()), yR(RW))
        },
        endDrag: () => {
          cR.current && (cR.current = !1, null === IW || void 0 === IW || IW())
        }
      }), (0, TW.jsx)("div", {
        ref: FW,
        style: {
          display: "contents"
        },
        children: (0, TW.jsx)(CW.e, {
          value: MW,
          min: zR,
          max: AW,
          step: bR,
          onChange: yR,
          orientation: NW,
          reverse: eW,
          tooltip: gR,
          labels: iR,
          handleLabel: YW,
          format: JW,
          onChangeStart: () => {
            null === PW || void 0 === PW || PW(), null === BW || void 0 === BW || BW(!0)
          },
          onChangeComplete: () => {
            null === BW || void 0 === BW || BW(!1), null === IW || void 0 === IW || IW()
          }
        })
      })
    }
    async function JW() {
      const WW = eW.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: ""
      });
      !0 === await WW.getResult() && (0, BW.reloadBloxd)()
    }

    function PW(WW) {
      let {
        label: RW,
        options: MW,
        value: wW,
        onChange: CW,
        circleInfoText: zR
      } = WW;
      return (0, TW.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, TW.jsxs)("div", {
          className: "SliderText",
          children: [RW, zR && (0, TW.jsx)(AW.b, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: zR
          })]
        }), (0, TW.jsx)(bR.c, {
          ariaLabel: RW,
          options: MW,
          value: wW,
          onChange: CW
        })]
      })
    }
  },
  3991: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => AW
    });
    var wW = MW(897),
      CW = MW.n(wW),
      zR = MW(940);

    function AW(WW) {
      let {
        options: RW,
        value: MW,
        onChange: wW,
        ariaLabel: AW
      } = WW;
      return (0, zR.jsx)("div", {
        className: "SegmentedToggle",
        role: "group",
        "aria-label": AW,
        children: RW.map((WW => {
          const RW = WW.value === MW;
          return (0, zR.jsx)("button", {
            type: "button",
            "aria-pressed": RW,
            className: CW()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: RW
            }),
            onClick: () => {
              RW || wW(WW.value)
            },
            children: WW.label
          }, WW.value)
        }))
      })
    }
  },
  7753: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => yR,
      f: () => bR,
      j: () => AW,
      n: () => zR
    });
    var wW = MW(27),
      CW = MW(253);

    function zR() {
      return !CW.q
    }

    function AW(WW) {
      return zR() && WW
    }

    function bR(WW, RW) {
      return WW && !AW(RW)
    }

    function yR() {
      return bR(wW.b.get("isTouchScreen"), wW.b.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  7733: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => bR
    });
    var wW = MW(27),
      CW = MW(2569),
      zR = MW(1166),
      AW = MW(1208);
    const bR = async () => {
      if ((0, AW.d)()) {
        if (!0 !== await zR.NotificationProvider.showPromptPopup({
            title: "controller:menusLeaveGameTitle",
            confirmText: "controller:menusLeaveGameLeave",
            cancelText: "controller:menusLeaveGameStay",
            destructive: !0
          }).getResult() || "inGame" !== wW.b.get("gameState")) return
      }(0, CW.d)()
    }
  },
  7736: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => yR,
      d: () => zR,
      g: () => AW,
      k: () => CW,
      l: () => bR
    });
    var wW = MW(1560);
    const CW = "controllerPadShopOpen",
      zR = WW => wW.f.includes(WW),
      AW = WW => Object.values(WW).some((WW => !1 !== WW.canBuy && !WW.isRewardedAd)),
      bR = (WW, RW, MW) => {
        var wW, CW, AW, bR;
        const yR = WW.filter((WW => !zR(WW))),
          NW = null !== RW && WW.includes(RW) ? RW : null;
        return null !== NW && !zR(NW) && MW(NW) ? NW : null !== (wW = null !== (CW = null !== (AW = null !== (bR = yR.find(MW)) && void 0 !== bR ? bR : yR[0]) && void 0 !== AW ? AW : NW) && void 0 !== CW ? CW : WW[0]) && void 0 !== wW ? wW : null
      },
      yR = WW => WW.userInput || WW.isRewardedAd || "boolean" === typeof WW.isSelected ? null : JSON.stringify([WW.image, WW.cost, WW.currency, WW.amount, WW.customTitle, WW.buyButtonText, WW.description, WW.canBuy])
  },
  7749: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => NW,
      c: () => eW
    });
    var wW = MW(75),
      CW = MW(1253),
      zR = MW(1604),
      AW = MW(1216),
      bR = MW(1227),
      yR = MW(940);
    const NW = () => {
        const WW = (0, AW.v)();
        if ((0, wW.useEffect)((() => {
            (0, AW.k)()
          }), []), !WW) return null;
        const {
          ControllerCategory: RW
        } = WW;
        return (0, yR.jsx)(bR.c, {
          children: (0, yR.jsx)(RW, {})
        })
      },
      eW = () => {
        var WW;
        const RW = (0, AW.v)(),
          [, MW] = (0, wW.useReducer)((WW => WW + 1), 0);
        return (0, CW.f)(zR.e, MW), null !== (WW = null === RW || void 0 === RW ? void 0 : RW.hasActivePad()) && void 0 !== WW && WW
      }
  },
  3994: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => zR,
      i: () => AW
    });
    var wW = MW(75);
    const CW = new WeakMap,
      zR = WW => {
        var RW;
        const MW = WW.closest("[data-pad-slider]");
        return MW && null !== (RW = CW.get(MW)) && void 0 !== RW ? RW : null
      },
      AW = (WW, RW) => {
        const MW = (0, wW.useRef)(RW);
        MW.current = RW, (0, wW.useEffect)((() => {
          if (WW.current) return ((WW, RW) => (CW.set(WW, RW), () => {
            CW.get(WW) === RW && CW.delete(WW)
          }))(WW.current, {
            adjust: WW => {
              MW.current.adjust(WW)
            },
            setFraction: WW => {
              MW.current.setFraction(WW)
            },
            endDrag: () => {
              MW.current.endDrag()
            }
          })
        }), [WW])
      }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);