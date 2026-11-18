export const id = 28;
export const ids = [28];
export const modules = {
  7564: (BB, TB, dB) => {
    var VB = {
      "./nintendo/A.svg": 7571,
      "./nintendo/B.svg": 7574,
      "./nintendo/Down.svg": 7577,
      "./nintendo/Home.svg": 7579,
      "./nintendo/LB.svg": 7587,
      "./nintendo/LS.svg": 7594,
      "./nintendo/LT.svg": 7596,
      "./nintendo/Left.svg": 7602,
      "./nintendo/LeftStick.svg": 7610,
      "./nintendo/Menu.svg": 7616,
      "./nintendo/RB.svg": 7624,
      "./nintendo/RS.svg": 7628,
      "./nintendo/RT.svg": 7634,
      "./nintendo/Right.svg": 7643,
      "./nintendo/RightStick.svg": 7649,
      "./nintendo/Up.svg": 7654,
      "./nintendo/View.svg": 7661,
      "./nintendo/X.svg": 7670,
      "./nintendo/Y.svg": 7678,
      "./playstation/A.svg": 7687,
      "./playstation/B.svg": 7689,
      "./playstation/Down.svg": 7696,
      "./playstation/Home.svg": 7705,
      "./playstation/LB.svg": 7707,
      "./playstation/LS.svg": 7713,
      "./playstation/LT.svg": 7718,
      "./playstation/Left.svg": 7726,
      "./playstation/LeftStick.svg": 7735,
      "./playstation/Menu.svg": 7740,
      "./playstation/RB.svg": 7744,
      "./playstation/RS.svg": 7748,
      "./playstation/RT.svg": 7751,
      "./playstation/Right.svg": 7754,
      "./playstation/RightStick.svg": 7759,
      "./playstation/Up.svg": 7767,
      "./playstation/View.svg": 7773,
      "./playstation/X.svg": 7782,
      "./playstation/Y.svg": 7786,
      "./steamdeck/A.svg": 7795,
      "./steamdeck/B.svg": 7801,
      "./steamdeck/Down.svg": 7803,
      "./steamdeck/Home.svg": 7808,
      "./steamdeck/LB.svg": 7814,
      "./steamdeck/LS.svg": 7817,
      "./steamdeck/LT.svg": 7819,
      "./steamdeck/Left.svg": 7825,
      "./steamdeck/LeftStick.svg": 7830,
      "./steamdeck/Menu.svg": 7834,
      "./steamdeck/RB.svg": 7837,
      "./steamdeck/RS.svg": 7841,
      "./steamdeck/RT.svg": 7846,
      "./steamdeck/Right.svg": 7855,
      "./steamdeck/RightStick.svg": 7860,
      "./steamdeck/Up.svg": 7865,
      "./steamdeck/View.svg": 7874,
      "./steamdeck/X.svg": 7878,
      "./steamdeck/Y.svg": 7887,
      "./xbox/A.svg": 7891,
      "./xbox/B.svg": 7897,
      "./xbox/Down.svg": 7901,
      "./xbox/Home.svg": 7904,
      "./xbox/LB.svg": 7907,
      "./xbox/LS.svg": 7916,
      "./xbox/LT.svg": 7920,
      "./xbox/Left.svg": 7924,
      "./xbox/LeftStick.svg": 7928,
      "./xbox/Menu.svg": 7935,
      "./xbox/RB.svg": 7939,
      "./xbox/RS.svg": 7945,
      "./xbox/RT.svg": 7949,
      "./xbox/Right.svg": 7956,
      "./xbox/RightStick.svg": 7958,
      "./xbox/Up.svg": 7965,
      "./xbox/View.svg": 7971,
      "./xbox/X.svg": 7979,
      "./xbox/Y.svg": 7987
    };

    function yB(BB) {
      var TB = pB(BB);
      return dB(TB)
    }

    function pB(BB) {
      if (!dB.o(VB, BB)) {
        var TB = new Error("Cannot find module '" + BB + "'");
        throw TB.code = "MODULE_NOT_FOUND", TB
      }
      return VB[BB]
    }
    yB.keys = function() {
      return Object.keys(VB)
    }, yB.resolve = pB, BB.exports = yB, yB.id = 7564
  },
  8194: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => wB,
      f: () => zB
    });
    var VB = dB(1078),
      yB = dB(62),
      pB = dB(1738),
      lB = dB(1751),
      JB = dB(933),
      YB = dB.n(JB),
      gB = dB(1324),
      oB = dB(21),
      kB = dB(95),
      LB = dB(105),
      OB = dB(4411),
      DB = dB(2139),
      uB = dB(127),
      HB = dB(1754),
      EB = dB(1757),
      vB = dB(8196),
      mB = dB(270),
      iB = dB(980);
    const NB = {
      floating: "settingsMenu:joystickFloating",
      fixed_shown: "settingsMenu:joystickFixed",
      fixed_hidden: "settingsMenu:joystickHidden"
    };
    var tB = dB(8204);
    const fB = [function() {
      const {
        t: BB
      } = (0, VB.z)(), {
        joystickMode: TB,
        touchSpeedCurve: dB,
        autorun: yB,
        jumpLock: pB
      } = (0, oB.m)(["clientEscMenuOptions"]).clientEscMenuOptions;
      return (0, iB.jsxs)(iB.Fragment, {
        children: [(0, iB.jsx)(OB.g, {
          label: BB("settingsMenu:joystick"),
          options: mB.wb.map((TB => ({
            value: TB,
            label: BB(NB[TB])
          }))),
          value: TB,
          onChange: BB => {
            oB.d.setClientEscMenuOptions({
              joystickMode: BB
            })
          },
          circleInfoText: BB("settingsMenu:joystickInfo")
        }), (0, iB.jsx)(OB.e, {
          label: BB("settingsMenu:preciseWalking"),
          checked: dB,
          onClick: BB => {
            oB.d.setClientEscMenuOptions({
              touchSpeedCurve: BB
            })
          },
          circleInfoText: BB("settingsMenu:preciseWalkingInfo")
        }), (0, iB.jsx)(OB.e, {
          label: BB("settingsMenu:autoRun"),
          checked: yB,
          onClick: BB => {
            oB.d.setClientEscMenuOptions({
              autorun: BB
            })
          },
          circleInfoText: BB("settingsMenu:autoRunInfo")
        }), (0, iB.jsx)(OB.e, {
          label: BB("settingsMenu:jumpLock"),
          checked: pB,
          onClick: BB => {
            oB.d.setClientEscMenuOptions({
              jumpLock: BB
            })
          },
          circleInfoText: BB("settingsMenu:jumpLockInfo")
        })]
      })
    }, function() {
      const {
        t: BB
      } = (0, VB.z)(), {
        clientEscMenuOptions: TB
      } = (0, oB.m)(["clientEscMenuOptions"]);
      return (0, iB.jsx)(OB.e, {
        label: BB("touchSettings:actionButtons"),
        checked: TB.touchActionButtons,
        onClick: BB => {
          oB.d.setClientEscMenuOptions({
            touchActionButtons: BB
          })
        },
        circleInfoText: BB("touchSettings:actionButtonsInfo")
      })
    }, function() {
      const {
        t: BB
      } = (0, VB.z)(), {
        clientEscMenuOptions: TB
      } = (0, oB.m)(["clientEscMenuOptions"]);
      return (0, tB.c)() ? (0, iB.jsx)(OB.e, {
        label: BB("settingsMenu:vibration"),
        checked: TB.vibration,
        onClick: BB => {
          oB.d.setClientEscMenuOptions({
            vibration: BB
          })
        },
        circleInfoText: BB("settingsMenu:vibrationInfo")
      }) : null
    }];

    function sB() {
      return (0, iB.jsx)(iB.Fragment, {
        children: fB.map(((BB, TB) => (0, iB.jsx)(BB, {}, TB)))
      })
    }
    var MB = dB(3825);

    function zB() {
      const {
        t: BB
      } = (0, VB.z)(), {
        isTouchScreen: TB,
        clientEscMenuOptions: dB,
        gameState: lB
      } = (0, oB.m)(["isTouchScreen", "clientEscMenuOptions", "gameState"]), JB = (0, DB.j)("ezBridging"), YB = (0, DB.j)("ezTowering"), HB = "inGame" !== lB || !0 === JB, EB = (0, uB.h)() && ("inGame" !== lB || !0 === YB), [, mB] = (0, yB.useReducer)((BB => BB + 1), 0), NB = (0, vB.f)(), [tB, fB] = (0, yB.useState)(MB.f);
      return (0, iB.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [NB && (0, iB.jsxs)("div", {
          className: "SettingBox ControlsControllerNote",
          children: [(0, iB.jsx)("div", {
            children: BB("controller:settingsControlsNote")
          }), (0, iB.jsx)(gB.T, {
            onClick: () => {
              oB.d.set({
                openSettingsCategory: "controller"
              })
            },
            children: BB("controller:settingsOpenController")
          })]
        }), (0, kB.isTouchscreen)() && !(0, kB.isMobile)() ? (0, iB.jsx)(iB.Fragment, {
          children: (0, iB.jsx)(OB.e, {
            label: BB("settingsMenu:useTouchControls"),
            checked: tB,
            onClick: BB => {
              (0, MB.e)(BB), fB(BB)
            }
          })
        }) : null, TB && (0, iB.jsx)(sB, {}), HB && (0, iB.jsx)(OB.e, {
          label: BB("settingsMenu:ezBridging"),
          checked: dB.ezBridging,
          onClick: BB => {
            oB.d.setClientEscMenuOptions({
              ezBridging: BB
            })
          },
          circleInfoText: BB("settingsMenu:ezBridgingInfo")
        }), EB && (0, iB.jsx)(OB.e, {
          label: BB("settingsMenu:ezTowering"),
          checked: dB.ezTowering,
          onClick: BB => {
            oB.d.setClientEscMenuOptions({
              ezTowering: BB
            })
          },
          circleInfoText: BB("settingsMenu:ezToweringInfo")
        }), (0, iB.jsx)(OB.e, {
          label: BB("settingsMenu:crouchToggle"),
          checked: dB.crouchIsToggle,
          onClick: BB => {
            oB.d.setClientEscMenuOptions({
              crouchIsToggle: BB
            })
          },
          circleInfoText: BB("settingsMenu:crouchToggleInfo")
        }), (0, iB.jsx)(OB.e, {
          label: BB("settingsMenu:hideUiToggle"),
          checked: dB.hideUiIsToggle,
          onClick: BB => {
            oB.d.setClientEscMenuOptions({
              hideUiIsToggle: BB
            })
          },
          circleInfoText: BB("settingsMenu:hideUiToggleInfo")
        }), "mouseOnly" !== (0, LB.e)() && (0, iB.jsx)(OB.k, {
          name: BB("settingsMenu:touchscreenSensitivity"),
          min: 1,
          max: 900,
          step: 1,
          initValue: dB.touchscreenSensitivity,
          onChange: BB => {
            oB.d.setClientEscMenuOptions({
              touchscreenSensitivity: BB
            })
          }
        }), !(0, kB.isMobile)() && (0, iB.jsx)(OB.k, {
          name: BB("settingsMenu:mouseSensitivity"),
          min: 1,
          max: 200,
          step: 1,
          initValue: dB.mouseSensitivity,
          onChange: BB => {
            oB.d.setClientEscMenuOptions({
              mouseSensitivity: BB
            })
          }
        }), !(0, kB.isMobile)() && (0, iB.jsxs)("div", {
          className: "ControlsContainer",
          children: [(0, iB.jsx)("div", {
            className: "SliderText",
            children: BB("settingsMenu:keyBindings")
          }), pB.f.map((TB => (0, iB.jsx)(wB, {
            title: BB(TB.name.translationKey, TB.name.params),
            defaultOpen: pB.g.has(TB.id),
            children: TB.actions.map((BB => (0, iB.jsx)(UB, {
              noaAction: BB,
              forceUpdate: mB,
              clashesWith: TB.clashesWith,
              showPadGlyph: NB
            }, BB)))
          }, TB.name.translationKey))), (0, iB.jsx)(gB.K, {
            className: "ResetBindingsButton",
            onClick: () => {
              (0, pB.y)(), mB()
            },
            children: BB("controls:resetBindings")
          })]
        })]
      })
    }

    function wB(BB) {
      let {
        title: TB,
        defaultOpen: dB,
        children: VB
      } = BB;
      const [pB, lB] = (0, yB.useState)(dB);
      return (0, iB.jsxs)("div", {
        className: YB()("ControlsSection", {
          Collapsed: !pB
        }),
        children: [(0, iB.jsxs)("div", {
          className: "ControlsSectionHeader",
          "data-pad-focusable": !0,
          onClick: () => {
            lB(!pB)
          },
          children: [(0, iB.jsx)("div", {
            className: "ControlsSectionTitle",
            children: TB
          }), (0, iB.jsx)("div", {
            className: "ControlsSectionChevron",
            children: "\u25be"
          })]
        }), pB && (0, iB.jsx)("div", {
          className: "ControlsSectionRows",
          children: VB
        })]
      })
    }

    function UB(BB) {
      let {
        noaAction: TB,
        forceUpdate: dB,
        clashesWith: JB,
        showPadGlyph: oB
      } = BB;
      const {
        t: kB
      } = (0, VB.z)(), LB = (0, EB.b)(TB), [OB, DB] = (0, yB.useState)(!1), [uB, vB] = (0, yB.useState)("controls:clickToEnterNewBinding"), [mB, NB] = (0, yB.useState)(null), [tB, fB] = (0, yB.useState)(null), sB = (0, yB.useRef)(null);
      (0, yB.useEffect)((() => {
        OB && sB.current && sB.current.focus()
      }), [OB]);
      const MB = pB.r[TB].filter((BB => lB.j[BB]));
      let zB = null;
      const wB = [],
        UB = JB.flatMap((BB => {
          var TB, dB;
          return null !== (TB = null === (dB = pB.f.find((TB => TB.id === BB))) || void 0 === dB ? void 0 : dB.actions) && void 0 !== TB ? TB : []
        }));
      for (const VB of UB) {
        if (VB === TB) continue;
        const BB = pB.r[VB];
        for (const TB of BB) MB.includes(TB) && wB.push(kB(pB.u[VB].translationKey, pB.u[VB].params))
      }
      wB.length > 0 && (zB = kB("controls:sharedBindingsWarning") + " ", zB += wB.join(", "));
      const FB = () => {
          DB(!1), NB(null), vB("controls:clickToEnterNewBinding"), fB(null)
        },
        KB = () => "BindingInput_" + TB;
      return (0, iB.jsxs)("div", {
        className: YB()("ControlRow", {
          WarningBorder: null !== zB
        }),
        children: [(0, iB.jsxs)("div", {
          className: "ControlRowInner",
          children: [(0, iB.jsxs)("div", {
            className: "ControlName",
            children: [kB(pB.u[TB].translationKey, pB.u[TB].params), oB && LB && (0, iB.jsx)(HB.c, {
              glyph: LB,
              className: "ControlPadGlyph"
            })]
          }), (0, iB.jsxs)("div", {
            className: "ControlBindingsContainer",
            children: [(0, iB.jsxs)("div", {
              className: "ControlBindingsList",
              children: [MB.map((BB => (0, iB.jsxs)("div", {
                className: "ControlBinding",
                children: [(0, iB.jsx)("div", {
                  children: (0, pB.k)(BB)
                }), (0, iB.jsx)("div", {
                  className: "ControlBindingRemoveIcon",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    const VB = (0, pB.v)(TB, BB);
                    VB.isError() ? fB(VB.asError().message) : fB(null), dB()
                  },
                  children: "\xd7"
                })]
              }, BB))), !OB && (0, iB.jsx)("div", {
                className: "ControlBinding ControlBindingAdd",
                onClick: () => {
                  DB(!0), fB(null)
                },
                children: (0, iB.jsx)("div", {
                  className: "ControlBindingAddIcon",
                  children: "+"
                })
              })]
            }), OB && (0, iB.jsxs)("div", {
              className: "ControlBindingAddInput",
              children: [(0, iB.jsxs)("div", {
                className: "InputContainer",
                children: [(0, iB.jsx)("div", {
                  className: "InputOverlay",
                  children: mB ? (0, pB.k)(mB) : (0, iB.jsx)("div", {
                    className: "InputOverlayPlaceholder",
                    children: kB(uB)
                  })
                }), (0, iB.jsx)("input", {
                  ref: sB,
                  id: KB(),
                  "data-pad-no-osk": !0,
                  defaultValue: "",
                  onKeyDown: BB => {
                    if ("Escape" === BB.code) return FB(), BB.preventDefault(), void BB.stopPropagation();
                    const TB = BB.code;
                    lB.e.includes(TB) ? (fB(null), NB(TB)) : (fB("controls:keyIsReserved"), NB(null)), BB.preventDefault(), BB.stopPropagation()
                  },
                  onMouseDown: BB => {
                    const TB = "Mouse" + (BB.button + 1);
                    document.activeElement && document.activeElement.id === KB() ? lB.e.includes(TB) ? (fB(null), NB(TB)) : (fB("controls:keyIsReserved"), NB(null)) : vB("controls:enterNewBinding"), BB.stopPropagation()
                  },
                  onBlur: () => {
                    vB("controls:clickToEnterNewBinding")
                  }
                })]
              }), (0, iB.jsx)(gB.d, {
                onPointerDown: BB => {
                  BB.preventDefault()
                },
                onClick: () => {
                  (0, pB.e)(TB, mB), dB(), FB()
                },
                className: "ControlBindingAddButton",
                disabled: null === mB,
                children: kB("general:add")
              }), (0, iB.jsx)("div", {
                className: "ControlBindingAddCancel",
                onClick: () => {
                  FB()
                },
                children: "\xd7"
              })]
            }), tB && (0, iB.jsx)("div", {
              className: "ControlBindingError",
              children: kB(tB)
            })]
          })]
        }), zB && (0, iB.jsx)("div", {
          className: "ControlRowWarning",
          children: zB
        })]
      })
    }
  },
  4411: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => DB,
      g: () => vB,
      k: () => uB,
      n: () => EB
    });
    var VB = dB(62),
      yB = dB(4415),
      pB = dB(3821),
      lB = dB(1249),
      JB = dB(4438),
      YB = dB(933),
      gB = dB.n(YB),
      oB = dB(1235),
      kB = dB(1596),
      LB = dB(4447),
      OB = dB(980);

    function DB(BB) {
      let {
        label: TB,
        onClick: dB,
        checked: VB,
        circleInfoText: yB,
        className: JB,
        disabled: YB
      } = BB;
      return (0, OB.jsx)("div", {
        "aria-disabled": YB || void 0,
        "data-pad-focusable": !0,
        className: gB()("SettingBox CheckboxContainer", {
          [JB]: JB,
          SettingBoxDisabled: YB
        }),
        onClick: () => {
          YB || dB(!VB)
        },
        children: (0, OB.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, OB.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, OB.jsx)(pB.b, {
              className: "SettingsCheckbox",
              checked: VB,
              disabled: YB,
              onChange: () => {}
            })
          }), (0, OB.jsxs)("div", {
            className: "CheckboxText",
            children: [TB, yB && (0, OB.jsx)("span", {
              onClick: BB => BB.stopPropagation(),
              children: (0, OB.jsx)(lB.e, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: yB
              })
            })]
          })]
        })
      })
    }

    function uB(BB) {
      let {
        name: TB,
        onChange: dB,
        min: yB,
        max: pB,
        step: JB,
        initValue: YB,
        circleInfoText: oB,
        format: kB,
        className: LB,
        padStep: DB,
        disabled: uB = !1,
        selectableMax: EB,
        cappedNote: vB
      } = BB;
      const [mB, iB] = (0, VB.useState)(YB);
      (0, VB.useEffect)((() => {
        iB(YB)
      }), [YB]);
      const NB = void 0 !== EB && EB < pB,
        tB = NB ? {
          "--slider-selectable": (EB - yB) / (pB - yB)
        } : void 0;
      return (0, OB.jsxs)("div", {
        className: gB()("SettingBox SettingsSliderDiv", {
          [LB]: LB,
          SettingBoxDisabled: uB,
          SliderCapped: NB
        }),
        style: tB,
        children: [(0, OB.jsxs)("div", {
          className: "SliderText",
          children: [`${TB}: ${kB?kB(mB):mB}`, oB && (0, OB.jsx)(lB.e, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: oB
          })]
        }), (0, OB.jsx)("div", {
          className: "SliderDiv",
          children: (0, OB.jsx)(HB, {
            value: mB,
            min: yB,
            max: pB,
            step: JB,
            onChange: BB => {
              if (NB && BB >= EB && mB === EB) return;
              const TB = NB ? Math.min(BB, EB) : BB;
              iB(TB), dB(TB)
            },
            format: kB,
            padStep: DB,
            disabled: uB
          })
        }), NB && vB && (0, OB.jsx)("div", {
          className: "SliderNote",
          children: vB
        })]
      })
    }

    function HB(BB) {
      var TB;
      let {
        value: dB,
        min: pB,
        max: lB,
        step: JB,
        onChange: YB,
        orientation: gB,
        reverse: oB,
        setIsChanging: kB,
        tooltip: DB,
        labels: uB,
        handleLabel: HB,
        format: EB,
        onChangeStart: vB,
        onChangeComplete: mB,
        padStep: iB,
        disabled: NB = !1
      } = BB;
      const tB = (0, VB.useRef)(null),
        fB = (0, VB.useRef)(null);
      (0, VB.useLayoutEffect)((() => {
        var BB, TB, dB;
        const VB = null !== (BB = null === (TB = tB.current) || void 0 === TB ? void 0 : TB.querySelector(".rangeslider")) && void 0 !== BB ? BB : null;
        null === VB || void 0 === VB || VB.setAttribute("data-pad-slider", ""), null === VB || void 0 === VB || VB.setAttribute("data-pad-focusable", ""), null === VB || void 0 === VB || null === (dB = VB.querySelector(".rangeslider__handle")) || void 0 === dB || dB.setAttribute("data-pad-slider-handle", ""), fB.current = VB
      }), []), (0, VB.useLayoutEffect)((() => {
        var BB, TB;
        NB ? null === (BB = fB.current) || void 0 === BB || BB.setAttribute("aria-disabled", "true") : null === (TB = fB.current) || void 0 === TB || TB.removeAttribute("aria-disabled")
      }), [NB]);
      const sB = (null !== (TB = String(JB).split(".")[1]) && void 0 !== TB ? TB : "").length,
        MB = BB => {
          const TB = Number((Math.round((BB - pB) / JB) * JB + pB).toFixed(sB));
          return Math.min(lB, Math.max(pB, TB))
        },
        zB = (0, VB.useRef)(!1);
      return (0, LB.c)(fB, {
        adjust: BB => {
          if (NB) return;
          const TB = null !== iB && void 0 !== iB ? iB : Math.max(JB, Math.round((lB - pB) / 20 / JB) * JB),
            VB = MB(dB + BB * TB * (oB ? -1 : 1));
          VB !== dB && (null === vB || void 0 === vB || vB(), YB(VB), null === mB || void 0 === mB || mB())
        },
        setFraction: BB => {
          if (NB) return;
          const TB = MB(pB + (oB ? 1 - BB : BB) * (lB - pB));
          TB !== dB && (zB.current || (zB.current = !0, null === vB || void 0 === vB || vB()), YB(TB))
        },
        endDrag: () => {
          zB.current && (zB.current = !1, null === mB || void 0 === mB || mB())
        }
      }), (0, OB.jsx)("div", {
        ref: tB,
        style: {
          display: "contents"
        },
        children: (0, OB.jsx)(yB.b, {
          value: dB,
          min: pB,
          max: lB,
          step: JB,
          onChange: YB,
          orientation: gB,
          reverse: oB,
          tooltip: DB,
          labels: uB,
          handleLabel: HB,
          format: EB,
          onChangeStart: () => {
            null === vB || void 0 === vB || vB(), null === kB || void 0 === kB || kB(!0)
          },
          onChangeComplete: () => {
            null === kB || void 0 === kB || kB(!1), null === mB || void 0 === mB || mB()
          }
        })
      })
    }
    async function EB() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
      const TB = oB.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: "",
        unlockPointerKey: BB
      });
      !0 === await TB.getResult() && (0, kB.reloadBloxd)()
    }

    function vB(BB) {
      let {
        label: TB,
        options: dB,
        value: VB,
        onChange: yB,
        circleInfoText: pB
      } = BB;
      return (0, OB.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, OB.jsxs)("div", {
          className: "SliderText",
          children: [TB, pB && (0, OB.jsx)(lB.e, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: pB
          })]
        }), (0, OB.jsx)(JB.d, {
          ariaLabel: TB,
          options: dB,
          value: VB,
          onChange: yB
        })]
      })
    }
  },
  4438: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => lB
    });
    var VB = dB(933),
      yB = dB.n(VB),
      pB = dB(980);

    function lB(BB) {
      let {
        options: TB,
        value: dB,
        onChange: VB,
        ariaLabel: lB
      } = BB;
      return (0, pB.jsx)("div", {
        className: "SegmentedToggle",
        role: "group",
        "aria-label": lB,
        children: TB.map((BB => {
          const TB = BB.value === dB;
          return (0, pB.jsx)("button", {
            type: "button",
            "aria-pressed": TB,
            className: yB()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: TB
            }),
            onClick: () => {
              TB || VB(BB.value)
            },
            children: BB.label
          }, BB.value)
        }))
      })
    }
  },
  7513: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => yB,
      d: () => pB,
      g: () => LB,
      h: () => kB,
      l: () => gB,
      n: () => JB,
      q: () => VB,
      u: () => OB,
      y: () => DB
    });
    const VB = ["menuConfirm", "menuBack", "menuTabPrevious", "menuTabNext", "menuPageUp", "menuPageDown", "menuSecondary", "menuToggleCursor"],
      yB = [{
        group: "gameplay",
        actions: ["jump", "sneak", "sneakToggle", "sprint", "attack", "use", "hotbarPrevious", "hotbarNext", "inventory", "actionButton", "perspective", "aE", "drop", "emoteWheel", "chat", "pause", "leaderboard"]
      }, {
        group: "menu",
        actions: VB
      }, {
        group: "inventory",
        actions: ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryClose", "inventoryPanelPrevious", "inventoryPanelNext", "inventoryDrop", "inventoryHotbarSwap"]
      }, {
        group: "keyboard",
        actions: ["keyboardType", "keyboardBackspace", "keyboardSpace", "keyboardCaretLeft", "keyboardCaretRight", "keyboardShift", "keyboardSymbols", "keyboardSubmit", "keyboardClose", "keyboardChannel"]
      }],
      pB = {
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
        aE: "Up",
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
      lB = ["aE", "perspective"],
      JB = BB => lB.includes(BB) ? lB : [BB],
      YB = Object.fromEntries(yB.flatMap((BB => {
        let {
          group: TB,
          actions: dB
        } = BB;
        return dB.map((BB => [BB, TB]))
      }))),
      gB = BB => YB[BB],
      oB = {
        pause: ["menu"],
        leaderboard: ["menu"],
        inventory: ["menu"],
        menuPageUp: ["inventory"],
        menuPageDown: ["inventory"]
      },
      kB = BB => {
        var TB;
        return [gB(BB), ...null !== (TB = oB[BB]) && void 0 !== TB ? TB : []]
      },
      LB = new Set(["menu", "inventory", "keyboard"]),
      OB = {
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
        "mid-fire": "aE",
        OpenInventory: "inventory",
        OpenSettings: "pause",
        OpenLobbyLeaderboard: "leaderboard",
        OpenShop: "leaderboard",
        OpenEmoteWheel: "emoteWheel"
      },
      DB = new Set(["forward", "backward", "left", "right"])
  },
  7511: (BB, TB, dB) => {
    dB.d(TB, {
      C: () => wB,
      F: () => iB,
      J: () => KB,
      M: () => sB,
      Q: () => mB,
      U: () => zB,
      W: () => oB,
      _: () => MB,
      cb: () => FB,
      e: () => vB,
      i: () => NB,
      m: () => LB,
      q: () => OB,
      u: () => rB,
      y: () => UB
    });
    var VB = dB(7513),
      yB = dB(7515),
      pB = dB(7500),
      lB = dB(7532);
    const JB = BB => "aE" === BB ? "perspective" : BB,
      YB = (BB, TB) => {
        var dB;
        const yB = JB(TB);
        return null !== (dB = BB[yB]) && void 0 !== dB ? dB : VB.d[yB]
      },
      gB = new Map([
        ["menuConfirm", "menuBack"],
        ["inventoryPrimary", "inventoryClose"],
        ["keyboardType", "keyboardClose"]
      ].flatMap((BB => {
        let [TB, dB] = BB;
        return [
          [TB, dB],
          [dB, TB]
        ]
      }))),
      oB = (BB, TB) => null !== BB && void 0 !== BB ? BB : "nintendo" === TB,
      kB = BB => oB((0, yB.h)().swapConfirmBack, (0, yB.l)()) && gB.get(BB) || BB,
      LB = BB => YB((0, yB.h)().JD, kB(BB)),
      OB = BB => VB.d[kB(BB)],
      DB = Object.keys(VB.d),
      uB = BB => "gameplay" === (0, VB.l)(BB) ? ["gameplay"] : (0, VB.h)(BB),
      HB = (BB, TB) => {
        const dB = uB(TB);
        return uB(BB).some((BB => dB.includes(BB)))
      },
      EB = (BB, TB, dB) => {
        const yB = YB(BB, TB),
          lB = new Set((0, VB.n)(TB)),
          gB = [...lB];
        for (let VB = gB.pop(); VB; VB = gB.pop())
          for (const TB of DB) {
            const pB = YB(BB, TB);
            lB.has(TB) || pB !== dB && pB !== yB || !HB(VB, TB) || (lB.add(TB), gB.push(TB))
          }
        const oB = {
          ...BB
        };
        for (const kB of lB) {
          const TB = YB(BB, kB) === yB ? dB : yB,
            lB = (0, VB.h)(kB).some((BB => VB.g.has(BB)));
          if ((0, pB.G)(TB) && lB) return null;
          oB[JB(kB)] = TB
        }
        for (const pB of Object.keys(oB)) oB[pB] === VB.d[pB] && delete oB[pB];
        return oB
      },
      vB = (BB, TB) => null !== EB((0, yB.h)().JD, kB(BB), TB),
      mB = (BB, TB) => {
        if (LB(BB) === TB) return !0;
        const dB = EB((0, yB.h)().JD, kB(BB), TB);
        return !!dB && ((0, yB.o)({
          JD: dB
        }), !0)
      },
      iB = (BB, TB) => {
        const dB = (0, VB.n)(TB);
        return DB.filter((TB => JB(TB) === TB && !dB.includes(TB) && YB(BB, kB(TB)) !== LB(TB)))
      },
      NB = ["southpaw", "triggersSwapped"],
      tB = {
        southpaw: {
          sprint: "RS",
          sneakToggle: "LS"
        },
        triggersSwapped: {
          attack: "LT",
          use: "RT"
        }
      },
      fB = BB => Object.keys(tB[BB]),
      sB = (BB, TB) => "southpaw" === BB ? TB.swapSticks : fB(BB).every((dB => YB(TB.JD, dB) === tB[BB][dB])),
      MB = (BB, TB) => {
        const dB = (0, yB.h)();
        let pB = dB.JD;
        for (const yB of fB(BB)) {
          const dB = TB ? tB[BB][yB] : VB.d[yB];
          if (pB = EB(pB, yB, dB), !pB) return !1
        }
        return (0, yB.o)({
          swapSticks: "southpaw" === BB ? TB : dB.swapSticks,
          JD: pB
        }), !0
      },
      zB = () => {
        (0, yB.o)({
          swapSticks: !1,
          JD: {}
        })
      },
      wB = () => (0, yB.h)().swapSticks ? "RightStick" : "LeftStick",
      UB = () => (0, yB.h)().swapSticks ? "LeftStick" : "RightStick",
      FB = BB => (0, yB.h)().swapSticks && (0, pB.G)(BB),
      KB = BB => FB(BB) ? wB() : UB(),
      rB = BB => {
        if (VB.y.has(BB)) return wB();
        const TB = VB.u[BB];
        return TB && ("leaderboard" !== TB || (0, lB.i)(BB, (0, lB.e)())) ? LB(TB) : null
      }
  },
  7484: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      ControllerCategory: () => oY,
      ControllerGlyph: () => NV,
      ControllerRoot: () => oJ,
      PadLobbyShortcuts: () => zJ,
      PadSneakChip: () => EJ,
      PadTooltip: () => mJ,
      attachPressToContinue: () => SJ,
      getBoundButton: () => oB.m,
      getControllerSettings: () => LB.h,
      getGlyphForNoaAction: () => oB.u,
      getInventoryCursorState: () => LY,
      getMenuShortcutButton: () => qy,
      getPadGlyphIconName: () => DJ,
      getPadGlyphIconUrl: () => uJ,
      getPadRepeatTiming: () => uB.g,
      hasActivePad: () => kY,
      isPadSteppingSlots: () => OY
    });
    const VB = JSON.parse('{"controller":{"inventoryTake":"Take","inventoryTakeHalf":"Take half","inventoryPlace":"Place","inventoryPlaceOne":"Place one","inventoryQuickMove":"Quick move","inventoryToHotbar":"To hotbar","inventoryPutBack":"Put back","inventoryHotbarSwap":"Swap with hotbar","inventorySwapHere":"Swap here","inventoryCancel":"Cancel","inventoryClose":"Close","inventoryDrop":"Drop (hold: stack)","inventorySelect":"Select","inventoryCraft":"Craft (hold to repeat)","inventoryCraftAll":"Craft all","inventoryChooseRecipe":"Choose","inventoryBackToRecipes":"Back to recipes","inventoryType":"Type","inventoryPanels":"Switch panel","inventoryCategory":"Category","inventoryPage":"Page","disconnected":"Controller disconnected","gameplayReload":"Reload","gameplayActionWheelHint":"(hold for more)","gameplaySneaking":"Sneaking","gameplayLoadFailedTitle":"Controller unavailable","gameplayLoadFailedSubtitle":"Reload the page to play with your controller.","gameplayDropStack":"Keep holding to drop the stack","gameplayAttackLatched":"Attacking","gameplayPickBlock":"Pick block","padButtonView":"View","padButtonMenu":"Menu","padButtonHome":"Home","padButtonCreate":"Create","padButtonOptions":"Options","padButtonDpadUp":"D-pad \u2191","padButtonDpadDown":"D-pad \u2193","padButtonDpadLeft":"D-pad \u2190","padButtonDpadRight":"D-pad \u2192","padButtonLeftStick":"L Stick","padButtonRightStick":"R Stick","settingsLook":"Look","settingsLookSensitivityX":"Look sensitivity (horizontal)","settingsLookSensitivityY":"Look sensitivity (vertical)","settingsAimLookSensitivity":"Look sensitivity while aiming (use held)","settingsInvertLookX":"Invert horizontal look","settingsInvertLookY":"Invert vertical look","settingsLookCurve":"Look curve","settingsLookCurveHint":"Steep gives finer aim near the centre, Linear turns at an even rate, and Boost turns faster when you hold the stick all the way.","settingsCurveExponential":"Steep","settingsCurveLinear":"Linear","settingsCurveBoost":"Boost","settingsLookDeadzone":"Look deadzone","settingsGyro":"Gyro aiming","settingsGyroToggle":"Aim by moving the controller","settingsGyroToggleInfo":"Turn and tilt the controller to aim, on top of the right stick.","settingsGyroTogglePhone":"Aim by moving your phone or tablet","settingsGyroToggleInfoPhone":"Turn and tilt your phone or tablet to aim, on top of the right stick.","settingsGyroUnsupported":"Gyro aiming needs Chrome or Edge.","settingsGyroBlocked":"Gyro aiming isn\'t available on this site.","settingsGyroPhoneNeedsController":"Connect a controller to aim by moving your phone or tablet.","settingsGyroSteamHint":"If Steam already turns your gyro into mouse movement, leave this off.","settingsGyroConnect":"Connect motion controller","settingsGyroConnectHint":"Works with DualSense, DualShock 4 and Switch controllers.","settingsGyroConnectNeedsClick":"Click Connect with your mouse: the browser asks before sharing a controller.","settingsGyroOpenFailed":"Another app is using the controller. Close apps such as Steam or DS4Windows, then try again.","settingsGyroConnected":"Aiming with {{name}}.","settingsGyroAllowMotion":"Allow motion sensor","settingsGyroAllowNeedsTap":"Tap Allow motion sensor on your screen to turn it on.","settingsGyroPhoneOn":"Aiming with this device\'s motion sensor.","settingsGyroPhoneWaiting":"Waiting for this device\'s motion sensor\u2026","settingsGyroPhoneNoSensor":"No motion sensor found on this device.","settingsGyroPhoneDenied":"Motion access is blocked. Allow it in your browser settings.","settingsGyroSensitivity":"Gyro sensitivity","settingsGyroActivation":"Gyro turns on","settingsGyroAlways":"Always","settingsGyroWhileAiming":"While aiming","settingsGyroWhileButton":"While holding a button","settingsGyroAimingHint":"Hold {{button}} to aim with motion.","settingsGyroButton":"Gyro button","settingsGyroButtonHint":"While gyro aiming is on, this button only turns the gyro on in game, so pick one you rarely use.","settingsMovement":"Movement","settingsMoveDeadzone":"Move deadzone","settingsAutoSprint":"Sprint at full tilt","settingsAutoSprintInfo":"Push the movement stick all the way to sprint.","settingsSneak":"Sneak","settingsSneakHold":"Hold","settingsSneakToggle":"Toggle","settingsButtons":"Buttons","settingsPromptFamily":"Button prompts","settingsPromptAuto":"Match my controller","settingsPromptXbox":"Xbox","settingsPromptPlayStation":"PlayStation","settingsPromptNintendo":"Nintendo","settingsPromptSteamDeck":"Steam Deck","settingsPromptGeneric":"Generic","settingsHideButtonHints":"Hide button hints","settingsVibration":"Vibration","settingsCursorSpeed":"Virtual cursor speed","settingsCursorMagnetism":"Cursor snaps onto buttons","settingsMenuBackToCategories":"Back returns to the category list first","settingsAccessibility":"Accessibility","settingsSwapConfirmBack":"Swap confirm and back","settingsSwapToast":"Select and Back have swapped buttons.","settingsLayoutRefusedToast":"This layout doesn\'t fit your current buttons. Reset them to use it.","settingsSwapConfirmBackInfo":"Select with the right face button and go back with the bottom one, in menus, the inventory and the on-screen keyboard. On by default for Nintendo controllers.","settingsButtonRepeat":"Button repeat","settingsButtonRepeatHint":"How a held button repeats in menus, sliders, the on-screen keyboard and crafting. Off acts once per press, and holding drop in game drops just one item.","settingsButtonRepeatDefault":"Default","settingsButtonRepeatSlow":"Slow (0.8 s, then 4 a second)","settingsButtonRepeatOff":"Off (once per press)","settingsTapHoldTime":"Tap/hold time","settingsTapHoldTimeHint":"How long to hold the chat, emote or action button to open its wheel, or the view button to change view where a tap picks a block. Dropping a whole stack takes 0.8, 1 or 1.3 s.","settingsTapHoldShort":"Short (0.25 s)","settingsTapHoldMedium":"Medium (0.5 s)","settingsTapHoldLong":"Long (0.8 s)","settingsEmoteButton":"Emote button","settingsEmoteButtonTapHoldHint":"Tap to repeat your last emote, or hold to open the emote wheel.","settingsEmoteButtonWheelHint":"Any press opens the emote wheel, with no hold to time. Pick with the stick, then select.","settingsEmoteButtonTapHold":"Tap repeats, hold opens wheel","settingsEmoteButtonWheel":"Opens the wheel","settingsAttackMode":"Attack / mine","settingsAttackHoldHint":"Hold attack to keep attacking or mining.","settingsAttackToggleHint":"Press attack once to keep attacking or mining, and again to stop.","settingsAttackHold":"Hold","settingsAttackToggle":"Toggle","settingsLargePointer":"Large pointer and focus","settingsLargePointerInfo":"A bigger menu cursor, thicker selection brackets and bigger button hints.","settingsRemap":"Remap buttons","settingsRemapHint":"Select an action, then press a button. If that button is taken, the two swap.","settingsLayoutSouthpaw":"Southpaw (move with the right stick)","settingsLayoutTriggersSwapped":"Triggers swapped (attack with the left trigger)","settingsCapturePrompt":"Press a button","settingsCaptureCancelHint":"Press {{button}} to cancel","settingsCaptureCancelOrBindHint":"Tap {{button}} to cancel, or hold it to choose it","settingsReset":"Reset","settingsSwapNotice":"{{action}} moved to {{button}}","settingsResetAll":"Reset all buttons and sticks","settingsGroupGameplay":"Movement & gameplay","settingsGroupMenus":"Menus","settingsGroupInventory":"Inventory","settingsGroupKeyboard":"On-screen keyboard","settingsActionMove":"Move","settingsActionLook":"Look around","settingsActionJump":"Jump","settingsActionSneak":"Sneak","settingsActionSneakToggle":"Toggle sneak","settingsActionSprint":"Sprint","settingsActionAttack":"Attack / mine","settingsActionUse":"Use / place","settingsActionHotbarPrevious":"Previous hotbar slot","settingsActionHotbarNext":"Next hotbar slot","settingsActionInventory":"Inventory","settingsActionActionButton":"Game action","settingsActionPerspective":"Change view","settingsActionPickBlock":"Pick block (creative)","settingsActionDrop":"Drop item","settingsActionEmoteWheel":"Emotes","settingsActionChat":"Chat","settingsActionPause":"Pause menu","settingsActionLeaderboard":"Shop / leaderboard","settingsActionMenuConfirm":"Select","settingsActionMenuBack":"Back","settingsActionMenuTabPrevious":"Previous tab","settingsActionMenuTabNext":"Next tab","settingsActionMenuPageUp":"Page up","settingsActionMenuPageDown":"Page down","settingsActionMenuSecondary":"Secondary action","settingsActionMenuToggleCursor":"Switch to virtual cursor","settingsActionInventoryPrimary":"Pick up / place","settingsActionInventorySecondary":"Pick up half / place one","settingsActionInventoryQuickMove":"Quick move","settingsActionInventoryHotbarSwap":"Swap with hotbar slot","settingsActionInventoryClose":"Close","settingsActionInventoryPanelPrevious":"Previous panel","settingsActionInventoryPanelNext":"Next panel","settingsActionInventoryDrop":"Drop item","settingsActionKeyboardType":"Type key","settingsActionKeyboardBackspace":"Backspace","settingsActionKeyboardSpace":"Space","settingsActionKeyboardCaretLeft":"Move cursor left","settingsActionKeyboardCaretRight":"Move cursor right","settingsActionKeyboardShift":"Shift","settingsActionKeyboardSymbols":"Accents and symbols","settingsActionKeyboardSubmit":"Send","settingsActionKeyboardClose":"Close keyboard","settingsActionKeyboardChannel":"Chat channel","settingsAlternatives":"Try alternatives","settingsAlternativesHint":"Try each way of playing and keep the one that feels best.","settingsMenuNavigation":"Menu navigation","settingsMenuNavigationHint":"Steer a cursor with the stick and jump between buttons with the D-pad, or use just one.","settingsNavHybrid":"Cursor and D-pad","settingsMenuNavFocus":"Jump between buttons","settingsVirtualCursor":"Virtual cursor","settingsInventoryNavigation":"Inventory","settingsInventoryNavigationHint":"Steer a cursor with the stick and step slot by slot with the D-pad, or use just one.","settingsInventoryNavSlot":"Slot by slot","settingsQuickChat":"Hold chat button","settingsQuickChatHint":"Hold the chat button to pick a quick phrase. Tapping it still opens chat.","settingsQuickChatWheel":"Quick chat wheel","settingsQuickChatOff":"Off","settingsLeaderboardButton":"Shop / leaderboard button","settingsLeaderboardButtonHint":"Open the shop in one press in games that have one. The lobby leaderboard is still in the pause menu.","settingsLeaderboardButtonShop":"Shop, in games with one","settingsLeaderboardButtonLeaderboard":"Always the leaderboard","settingsTester":"Gamepad tester","settingsTesterNoPad":"Connect a gamepad and press any button to test it.","settingsTesterFamily":"Detected: {{family}}","settingsTesterHint":"Start a test to try every button and stick without moving through the menu.","settingsTesterStart":"Start test","settingsTesterStop":"Stop test","settingsTesterTesting":"Press anything to see it light up. To stop, hold {{button}} or press it three times.","settingsControlsNote":"Playing with a gamepad? Change its buttons and feel in Gamepad settings.","settingsOpenController":"Gamepad settings","keyboardSpace":"Space","keyboardSend":"Send","keyboardDone":"Done","keyboardTargetChat":"Chat","keyboardTargetSign":"Sign","keyboardTargetNameTag":"Name tag","keyboardTargetBook":"Book page","keyboardTargetBookTitle":"Book title","keyboardTargetText":"Text","keyboardPhraseGg":"gg","keyboardPhraseHi":"hi","keyboardPhraseThanks":"thanks","keyboardPhraseGl":"gl","keyboardPhraseBrb":"brb","keyboardPhraseYes":"yes","keyboardPhraseNo":"no","keyboardPhraseHelp":"help!","quickChatPick":"Pick a phrase","actionWheelPick":"Pick an action","wheelReleaseToPick":"Release to pick","wheelClose":"Close","wheelChoose":"Choose","menusSelect":"Select","menusBack":"Back","menusClose":"Close","menusQuickChat":"Quick chat (hold)","menusSkipTutorial":"Skip tutorial","menusTabs":"Tabs","menusRows":"Rows","menusCursorMode":"Cursor","menusFocusMode":"Focus","menusClick":"Click","menusRightClick":"Right-click","menusScroll":"Scroll","menusFriends":"Friends","menusSearch":"Search","menusSettings":"Settings","menusLeaveGameTitle":"Leave the game?","menusLeaveGameLeave":"Leave","menusLeaveGameStay":"Stay","menusNotifications":"Notifications","menusLobby":"Lobby","menusShop":"Shop","menusTasks":"Tasks & leaderboards","menusInvite":"Invite friends","menusAdjust":"Adjust","menusFavourite":"Favourite","screensPressToContinue":"Press {{button}} to continue","screensPressToEnterGame":"Press {{button}} to enter game","screensEnterGame":"Enter game","screensBackToGames":"Back to games","tutorialMine":"Mine","tutorialPlace":"Place / Use","tutorialInventory":"Inventory","tutorialPause":"Pause","menusUseMouse":"Use a mouse or touch here"}}');
    var yB = dB(1078),
      pB = dB(1286),
      lB = dB(7493),
      JB = dB(72),
      YB = dB(21),
      gB = dB(24),
      oB = dB(7511),
      kB = dB(7535),
      LB = dB(7515),
      OB = dB(7543),
      DB = dB(7500),
      uB = dB(7997),
      HB = dB(8006),
      EB = dB(1546);
    const vB = (BB, TB, dB) => Math.max(TB, Math.min(dB, BB)),
      mB = BB => Math.min(BB.width, BB.height) / 720,
      iB = BB => Math.max(.15, BB);
    class NB {
      constructor() {
        this.locked = !1
      }
      lock() {
        this.locked = !0
      }
      update(BB, TB) {
        const dB = Math.hypot(BB.x, BB.y) >= (BB => Math.max(.3, BB))(TB);
        return this.locked ? (this.locked = dB, !1) : dB
      }
    }
    const tB = (BB, TB) => {
        const dB = vB(TB.dtMs, 0, 100),
          VB = dB / 1e3,
          yB = mB(TB.viewport) * (TB.cursorSpeedPercent / 100),
          pB = (0, DB.k)(TB.stick, iB(TB.moveDeadzone)),
          lB = Math.hypot(pB.x, pB.y),
          JB = ((BB, TB, dB) => {
            if (TB < .3) return 0;
            const VB = dB / 350;
            return TB >= .85 ? Math.min(1, BB + VB) : Math.max(0, BB - VB)
          })(BB.speedRamp, lB, dB);
        let YB = BB.x,
          gB = BB.y;
        if (lB > 0) {
          const BB = .45 + .55 * JB,
            dB = TB.context.overInteractive ? .45 : 1,
            oB = 1400 * (BB => {
              const TB = vB(BB, 0, 1);
              return .3 * TB + .7 * TB * TB
            })(lB) * yB * BB * dB;
          YB += pB.x / lB * oB * VB, gB += pB.y / lB * oB * VB
        }
        const oB = Math.hypot(TB.dpad.x, TB.dpad.y);
        if (oB > 0) {
          const BB = 500 * yB;
          YB += TB.dpad.x / oB * BB * VB, gB += TB.dpad.y / oB * BB * VB
        }
        const kB = TB.context.magnetTarget;
        if (kB && lB < .3 && 0 === oB) {
          const BB = ((BB, TB, dB, VB, yB) => {
            const pB = TB.x - BB.x,
              lB = TB.y - BB.y,
              JB = Math.hypot(pB, lB);
            if (0 === JB) return {
              x: 0,
              y: 0
            };
            const YB = Math.min(JB, yB * (1 - VB / .3));
            let gB = pB / JB * YB,
              oB = lB / JB * YB;
            if (VB > 0) {
              const BB = dB.x / VB,
                TB = dB.y / VB,
                yB = gB * BB + oB * TB;
              yB < 0 && (gB -= yB * BB, oB -= yB * TB)
            }
            return {
              x: gB,
              y: oB
            }
          })({
            x: YB,
            y: gB
          }, kB, pB, lB, 120 * mB(TB.viewport) * VB);
          YB += BB.x, gB += BB.y
        }
        return {
          x: vB(YB, 0, Math.max(0, TB.viewport.width - 1)),
          y: vB(gB, 0, Math.max(0, TB.viewport.height - 1)),
          speedRamp: JB
        }
      },
      fB = BB => {
        const TB = (0, DB.k)(BB, .2);
        return 0 !== TB.x || 0 !== TB.y
      },
      sB = (BB, TB) => {
        const dB = (0, DB.k)(BB, .2),
          VB = Math.hypot(dB.x, dB.y);
        if (0 === VB) return {
          x: 0,
          y: 0
        };
        const yB = VB * VB * 1600,
          pB = vB(TB, 0, 100) / 1e3;
        return {
          x: dB.x / VB * yB * pB,
          y: dB.y / VB * yB * pB
        }
      },
      MB = (BB, TB) => "y" === TB ? BB.scrollHeight > BB.clientHeight + 1 : BB.scrollWidth > BB.clientWidth + 1,
      zB = (BB, TB) => {
        if (!MB(BB, TB)) return !1;
        const dB = getComputedStyle(BB),
          VB = "y" === TB ? dB.overflowY : dB.overflowX;
        return "auto" === VB || "scroll" === VB
      },
      wB = (BB, TB, dB) => {
        for (let pB = BB instanceof HTMLElement ? BB : null !== (VB = null === BB || void 0 === BB ? void 0 : BB.parentElement) && void 0 !== VB ? VB : null; pB; pB = pB.parentElement) {
          var VB;
          if (zB(pB, TB)) return pB;
          if (pB === dB) return null
        }
        if (dB) return null;
        const yB = document.scrollingElement;
        return yB instanceof HTMLElement && MB(yB, TB) ? yB : null
      },
      UB = new WeakMap,
      FB = (BB, TB) => {
        const dB = performance.now(),
          VB = UB.get(BB);
        if (VB && VB.axis === TB && dB - VB.atMs < 500 && (!VB.container || VB.container.isConnected)) return VB.container;
        const yB = KB(BB, TB);
        return UB.set(BB, {
          axis: TB,
          atMs: dB,
          container: yB
        }), yB
      },
      KB = (BB, TB) => {
        let dB = zB(BB, TB) ? BB : null,
          VB = dB ? dB.clientWidth * dB.clientHeight : 0;
        for (const yB of BB.querySelectorAll("*")) {
          const BB = yB.clientWidth * yB.clientHeight;
          BB > VB && zB(yB, TB) && (dB = yB, VB = BB)
        }
        return dB
      },
      rB = (BB, TB, dB) => "y" === TB ? dB < 0 ? BB.scrollTop > 0 : BB.scrollTop + BB.clientHeight < BB.scrollHeight - 1 : dB < 0 ? BB.scrollLeft > 0 : BB.scrollLeft + BB.clientWidth < BB.scrollWidth - 1,
      IB = (BB, TB, dB) => {
        "y" === TB ? BB.scrollBy({
          top: dB,
          behavior: "instant"
        }) : BB.scrollBy({
          left: dB,
          behavior: "instant"
        })
      },
      cB = BB => {
        if (!BB || BB === document.scrollingElement) return new DOMRect(0, 0, window.innerWidth, window.innerHeight);
        const TB = BB.getBoundingClientRect(),
          dB = Math.max(0, TB.left),
          VB = Math.max(0, TB.top);
        return new DOMRect(dB, VB, Math.min(window.innerWidth, TB.right) - dB, Math.min(window.innerHeight, TB.bottom) - VB)
      },
      SB = (BB, TB) => BB.left < TB.right && TB.left < BB.right && BB.top < TB.bottom && TB.top < BB.bottom;
    var PB = dB(62),
      QB = dB(933),
      RB = dB.n(QB),
      aB = dB(980);
    let ZB = 0,
      XB = !1;
    class WB {
      constructor() {
        this.element = null, this.shownKey = "", this.gap = null
      }
      setElement(BB) {
        this.element = BB, this.shownKey = "", this.gap = null
      }
      show(BB) {
        const TB = this.element;
        if (!TB) return;
        const dB = BB ? this.keepOnScreen(TB, BB) : null,
          VB = dB ? `${dB.left},${dB.top},${dB.width},${dB.height}` : "";
        if (VB === this.shownKey) return;
        const yB = "" === this.shownKey;
        this.shownKey = VB, TB.classList.toggle("Visible", null !== dB), dB && (TB.classList.toggle("Snap", yB), TB.style.width = `${dB.width}px`, TB.style.height = `${dB.height}px`, TB.style.transform = `translate(${dB.left}px, ${dB.top}px)`, yB && (TB.offsetWidth, TB.classList.remove("Snap")))
      }
      hide() {
        this.show(null)
      }
      keepOnScreen(BB, TB) {
        var dB;
        const VB = `${window.innerWidth}x${window.innerHeight}@${(()=>{if("undefined"===typeof ResizeObserver)return getComputedStyle(document.documentElement).fontSize;if(!XB){XB=!0;const BB=document.createElement("div");BB.setAttribute("aria-hidden","true"),BB.style.cssText="position: fixed; top: 0; left: 0; width: 1rem; height: 0; visibility: hidden; pointer-events: none",document.body.appendChild(BB),new ResizeObserver((()=>{ZB++})).observe(BB)}return String(ZB)})()}`;
        (null === (dB = this.gap) || void 0 === dB ? void 0 : dB.key) !== VB && (this.gap = {
          px: parseFloat(getComputedStyle(BB).paddingLeft) || 0,
          key: VB
        });
        const yB = this.gap.px + 2,
          pB = Math.max(TB.left, yB),
          lB = Math.max(TB.top, yB),
          JB = Math.min(TB.left + TB.width, window.innerWidth - yB),
          YB = Math.min(TB.top + TB.height, window.innerHeight - yB);
        return JB <= pB || YB <= lB ? TB : {
          left: pB,
          top: lB,
          width: JB - pB,
          height: YB - lB
        }
      }
    }
    const hB = BB => {
      let {
        placer: TB,
        className: dB
      } = BB;
      const VB = (0, PB.useCallback)((BB => {
        TB.setElement(BB)
      }), [TB]);
      return (0, aB.jsx)("div", {
        ref: VB,
        className: RB()("PadReticle", dB),
        "aria-hidden": !0
      })
    };
    var CB = dB(8009),
      GB = dB(1603);
    const qB = BB => BB >= 56320 && BB <= 57343,
      xB = BB => BB >= 55296 && BB <= 56319,
      jB = (BB, TB) => TB >= 2 && qB(BB.charCodeAt(TB - 1)) && xB(BB.charCodeAt(TB - 2)) ? TB - 2 : Math.max(0, TB - 1),
      AB = (BB, TB) => {
        let dB;
        var VB, yB;
        return dB = BB.start !== BB.end ? TB < 0 ? BB.start : BB.end : TB < 0 ? jB(BB.value, BB.start) : (VB = BB.value, (yB = BB.start) + 1 < VB.length && xB(VB.charCodeAt(yB)) && qB(VB.charCodeAt(yB + 1)) ? yB + 2 : Math.min(VB.length, yB + 1)), {
          value: BB.value,
          start: dB,
          end: dB
        }
      },
      bB = ["text", "search", "url", "email", "tel", "password", "number"],
      nB = BB => !(!(0, GB.c)(BB) || BB.isContentEditable || BB.hasAttribute("data-pad-no-osk")) && (BB instanceof HTMLTextAreaElement || BB instanceof HTMLInputElement && bB.includes(BB.type)),
      eB = BB => null !== BB.selectionStart,
      BT = BB => {
        var TB, dB;
        const {
          value: VB
        } = BB;
        return {
          value: VB,
          start: null !== (TB = BB.selectionStart) && void 0 !== TB ? TB : VB.length,
          end: null !== (dB = BB.selectionEnd) && void 0 !== dB ? dB : VB.length
        }
      },
      TT = (BB, TB, dB) => {
        if (BB.readOnly) return;
        const VB = BB instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
        Object.getOwnPropertyDescriptor(VB, "value").set.call(BB, TB.value), eB(BB) && BB.setSelectionRange(TB.start, TB.end), (0, EB.e)(BB, new InputEvent("input", {
          bubbles: !0,
          inputType: dB
        }))
      };
    let dT = !1;
    const VT = (BB, TB) => !!document.execCommand(BB, !1, TB) || (dT || (dT = !0, console.warn(`execCommand("${BB}") failed; the on-screen keyboard is setting the value directly`)), !1),
      yT = (BB, TB) => {
        VT("insertText", TB) || TT(BB, function(BB, TB) {
          let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
          const VB = BB.value.slice(0, BB.start),
            yB = BB.value.slice(BB.end);
          let pB = dB < 0 ? TB.length : Math.max(0, dB - VB.length - yB.length);
          pB > 0 && pB < TB.length && xB(TB.charCodeAt(pB - 1)) && pB--;
          const lB = TB.slice(0, pB),
            JB = VB.length + lB.length;
          return {
            value: VB + lB + yB,
            start: JB,
            end: JB
          }
        }(BT(BB), TB, BB.maxLength), "insertText")
      },
      pT = BB => {
        VT("delete") || TT(BB, (BB => {
          const TB = BB.start === BB.end ? jB(BB.value, BB.start) : BB.start;
          return {
            value: BB.value.slice(0, TB) + BB.value.slice(BB.end),
            start: TB,
            end: TB
          }
        })(BT(BB)), "deleteContentBackward")
      },
      lT = (BB, TB) => {
        if (!eB(BB)) return;
        const dB = AB(BT(BB), TB);
        BB.setSelectionRange(dB.start, dB.end)
      },
      JT = ["button", "a[href]", "input:not([type=hidden])", "textarea", "select", "[role=button]", "[role=tab]", "[role=switch]", "[role=checkbox]", "[role=option]", "[role=menuitem]", "[data-pad-focusable]", "[data-pad-tab]", ".Dropdown-control", ".Dropdown-option"].join(","),
      YT = (BB, TB) => {
        if ("function" === typeof BB.checkVisibility) return !BB.checkVisibility({
          visibilityProperty: !0,
          checkVisibilityCSS: !0,
          opacityProperty: TB,
          checkOpacity: TB
        });
        const {
          visibility: dB
        } = getComputedStyle(BB);
        if ("hidden" === dB || "collapse" === dB) return !0;
        if (!TB) return !1;
        for (let VB = BB; VB; VB = VB.parentElement)
          if ("0" === getComputedStyle(VB).opacity) return !0;
        return !1
      },
      gT = BB => {
        if (!BB.isConnected || YT(BB, !0)) return !1;
        const TB = BB.getBoundingClientRect();
        return TB.width > 0 && TB.height > 0
      },
      oT = BB => !!BB.matches(":disabled, [aria-disabled='true']") || "button" === BB.getAttribute("role") && "-1" === BB.getAttribute("tabindex"),
      kT = BB => {
        var TB;
        if (BB.closest("[data-pad-ignore]")) return !0;
        return !!(null === (TB = BB.parentElement) || void 0 === TB ? void 0 : TB.closest("[data-pad-focusable]"))
      },
      LT = BB => {
        const TB = BB.querySelectorAll(JT);
        return BB.matches(JT) ? [BB, ...TB] : TB
      },
      OT = BB => {
        const TB = [];
        for (const dB of LT(BB)) !kT(dB) && gT(dB) && TB.push(dB);
        return TB
      },
      DT = new WeakMap,
      uT = BB => {
        const TB = DT.get(BB);
        if (TB && HT(TB, BB)) return !0;
        for (const dB of LT(BB))
          if (!kT(dB) && gT(dB)) return DT.set(BB, dB), !0;
        return DT.delete(BB), !1
      },
      HT = (BB, TB) => TB.contains(BB) && BB.matches(JT) && !kT(BB) && gT(BB),
      ET = (BB, TB) => HT(BB, TB) && !oT(BB),
      vT = BB => {
        const TB = TB => {
          let dB = 0;
          for (let VB = TB.parentElement; VB && VB !== BB; VB = VB.parentElement) dB++;
          return dB
        };
        return [...BB.querySelectorAll("[data-pad-initial-area]")].filter(gT).sort(((BB, dB) => TB(dB) - TB(BB)))
      },
      mT = BB => nB(BB),
      iT = BB => {
        const TB = BB.getBoundingClientRect();
        return {
          x: TB.left + TB.width / 2,
          y: TB.top + TB.height / 2
        }
      },
      NT = (BB, TB, dB) => ({
        bubbles: !0,
        cancelable: !0,
        composed: !0,
        view: window,
        clientX: BB.x,
        clientY: BB.y,
        screenX: BB.x,
        screenY: BB.y,
        button: TB,
        buttons: dB,
        pointerId: 1,
        pointerType: "mouse",
        isPrimary: !0
      }),
      tT = (BB, TB) => {
        (0, EB.e)(BB, TB)
      },
      fT = function(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const VB = 0 === dB ? 1 : 2;
        tT(BB, new PointerEvent("pointerdown", NT(TB, dB, VB))), tT(BB, new MouseEvent("mousedown", NT(TB, dB, VB)))
      },
      sT = function(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        tT(BB, new PointerEvent("pointerup", NT(TB, dB, 0))), tT(BB, new MouseEvent("mouseup", NT(TB, dB, 0)))
      },
      MT = function(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        fT(BB, TB, dB), sT(BB, TB, dB), tT(BB, 0 === dB ? new MouseEvent("click", NT(TB, 0, 0)) : new MouseEvent("contextmenu", NT(TB, 2, 0)))
      },
      zT = function(BB, TB, dB) {
        let {
          leaveBelow: VB = null,
          enterBelow: yB = null
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (BB !== TB) {
          if (null !== BB && void 0 !== BB && BB.isConnected) {
            const yB = {
              ...NT(dB, 0, 0),
              relatedTarget: TB
            };
            tT(BB, new PointerEvent("pointerout", yB)), tT(BB, new MouseEvent("mouseout", yB));
            const pB = BB => !!TB && BB.contains(TB) || !!VB && BB.contains(VB);
            for (let TB = BB; TB && !pB(TB); TB = TB.parentElement) tT(TB, new PointerEvent("pointerleave", {
              ...yB,
              bubbles: !1
            })), tT(TB, new MouseEvent("mouseleave", {
              ...yB,
              bubbles: !1
            }))
          }
          if (TB) {
            const VB = {
              ...NT(dB, 0, 0),
              relatedTarget: BB
            };
            tT(TB, new PointerEvent("pointerover", VB)), tT(TB, new MouseEvent("mouseover", VB));
            const pB = [],
              lB = TB => !(null === BB || void 0 === BB || !BB.isConnected) && TB.contains(BB) || !!yB && TB.contains(yB);
            for (let BB = TB; BB && !lB(BB); BB = BB.parentElement) pB.push(BB);
            for (const BB of pB.reverse()) tT(BB, new PointerEvent("pointerenter", {
              ...VB,
              bubbles: !1
            })), tT(BB, new MouseEvent("mouseenter", {
              ...VB,
              bubbles: !1
            }));
            tT(TB, new PointerEvent("pointermove", NT(dB, 0, 0))), tT(TB, new MouseEvent("mousemove", NT(dB, 0, 0)))
          }
        } else TB && (tT(TB, new PointerEvent("pointermove", NT(dB, 0, 0))), tT(TB, new MouseEvent("mousemove", NT(dB, 0, 0))))
      },
      wT = BB => {
        gB.h.yH(CB.f, BB)
      },
      UT = BB => {
        if (mT(BB)) return void wT(BB);
        const TB = BB.hasAttribute("data-pad-focusable") ? BB.querySelector("a[href]") : null,
          dB = null !== TB && void 0 !== TB ? TB : BB;
        MT(dB, iT(dB))
      },
      FT = ".Dropdown-root.is-open",
      KT = BB => {
        const TB = BB.querySelector(".Dropdown-control");
        return UT(TB), TB
      },
      rT = BB => {
        var TB;
        const dB = null !== (TB = BB.closest(FT)) && void 0 !== TB ? TB : BB.querySelector(FT);
        return dB ? KT(dB) : null
      },
      IT = BB => {
        for (const TB of document.querySelectorAll(FT)) TB.contains(BB) || KT(TB)
      },
      cT = BB => null !== BB.closest("input[type=color], input[type=file], [data-pad-mouse-only]"),
      ST = BB => {
        const TB = BB ? document.elementFromPoint(BB.x, BB.y) : null;
        return !(null === TB || void 0 === TB || !TB.closest("[data-pad-repeat]"))
      },
      PT = BB => {
        var TB;
        return null !== (TB = [...BB.querySelectorAll("[data-pad-back]")].find(gT)) && void 0 !== TB ? TB : null
      },
      QT = BB => {
        const TB = PT(BB);
        return !!TB && (UT(TB), !0)
      },
      RT = BB => {
        var TB, dB, VB, yB;
        return null !== (TB = null !== (dB = null !== (VB = BB.getAttribute("data-pad-key")) && void 0 !== VB ? VB : BB.getAttribute("href")) && void 0 !== dB ? dB : null === (yB = BB.querySelector("a[href]")) || void 0 === yB ? void 0 : yB.getAttribute("href")) && void 0 !== TB ? TB : null
      },
      aT = {
        x: 0,
        y: 0,
        visible: !1,
        pressed: !1
      };
    const ZT = new class {
        constructor() {
          this.state = aT, this.listeners = new Set
        }
        get() {
          return this.state
        }
        set(BB) {
          if (TB = this.state, dB = BB, (TB.visible || dB.visible) && (TB.visible !== dB.visible || TB.x !== dB.x || TB.y !== dB.y || TB.pressed !== dB.pressed)) {
            var TB, dB;
            this.state = BB;
            for (const TB of this.listeners) TB(BB)
          }
        }
        hide() {
          this.set(aT)
        }
        subscribe(BB) {
          return this.listeners.add(BB), () => {
            this.listeners.delete(BB)
          }
        }
      },
      XT = (BB, TB) => {
        let {
          kind: dB,
          holding: VB,
          hasPress: yB,
          hasBack: pB,
          slotHasItem: lB
        } = TB;
        switch (BB) {
          case "primary":
            return "slot" === dB ? "slotPrimary" : "recipe" === dB || "button" === dB ? yB ? "pressPrimary" : "click" : "textField" === dB ? "openKeyboard" : null;
          case "secondary":
            return "slot" === dB ? "slotSecondary" : "button" !== dB && "recipe" !== dB || !yB ? null : "pressSecondary";
          case "quickMove":
            return "slot" === dB && lB ? "slotQuickMove" : null;
          case "hotbarSwap":
            return "slot" === dB && lB && !VB ? "hotbarPick" : null;
          case "openButton":
            return "close";
          case "back":
            return VB ? "cancel" : pB ? "pressBack" : "close"
        }
      },
      WT = BB => {
        const TB = [];
        if (BB.hotbarPicking) return TB.push({
          actions: ["inventoryPrimary", "inventoryHotbarSwap"],
          labelKey: "inventorySwapHere"
        }), TB.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryCancel"
        }), TB;
        if (BB.holding) "slot" === BB.kind ? (TB.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryPlace"
        }), TB.push({
          actions: ["inventorySecondary"],
          labelKey: "inventoryPlaceOne"
        })) : "textField" === BB.kind && TB.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryType"
        }), TB.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryPutBack"
        }), TB.push({
          actions: ["inventoryDrop"],
          labelKey: "inventoryDrop"
        }), BB.openButtonCloses && TB.push({
          actions: ["inventory"],
          labelKey: "inventoryClose"
        });
        else {
          var dB;
          "slot" === BB.kind && BB.slotHasItem ? (TB.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryTake"
          }), TB.push({
            actions: ["inventorySecondary"],
            labelKey: "inventoryTakeHalf"
          }), TB.push({
            actions: ["inventoryQuickMove"],
            labelKey: BB.quickMoveToHotbar ? "inventoryToHotbar" : "inventoryQuickMove"
          }), TB.push({
            actions: ["inventoryHotbarSwap"],
            labelKey: "inventoryHotbarSwap"
          }), TB.push({
            actions: ["inventoryDrop"],
            labelKey: "inventoryDrop"
          })) : "button" !== BB.kind && "recipe" !== BB.kind || !BB.pressHints ? "button" === BB.kind || "recipe" === BB.kind ? TB.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventorySelect"
          }) : "textField" === BB.kind && TB.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryType"
          }) : (BB.pressHints.primary && TB.push({
            actions: ["inventoryPrimary"],
            labelKey: BB.pressHints.primary
          }), BB.pressHints.secondary && TB.push({
            actions: ["inventorySecondary"],
            labelKey: BB.pressHints.secondary
          }));
          const VB = null === (dB = BB.pressHints) || void 0 === dB ? void 0 : dB.back;
          VB && TB.push({
            actions: ["inventoryClose"],
            labelKey: VB
          });
          const yB = [];
          BB.openButtonCloses && yB.push("inventory"), VB || yB.push("inventoryClose"), yB.length > 0 && TB.push({
            actions: yB,
            labelKey: "inventoryClose"
          })
        }
        return TB.push({
          actions: ["inventoryPanelPrevious", "inventoryPanelNext"],
          labelKey: "inventoryPanels"
        }), BB.hasCategories ? TB.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryCategory"
        }) : BB.hasList && TB.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryPage"
        }), TB
      };
    var hT = dB(8013);
    class CT {
      constructor(BB) {
        this.probes = BB, this.byContainer = new Map, this.byParent = new Map
      }
      find(BB, TB) {
        const dB = wB(BB, "y", TB);
        if (!dB) return null;
        let VB = this.byContainer.get(dB);
        return VB || (this.probes.push({
          element: dB,
          rect: jT(dB.getBoundingClientRect())
        }), VB = {
          container: dB,
          box: cB(dB),
          group: xT(dB)
        }, this.byContainer.set(dB, VB)), VB
      }
      findForParent(BB, TB) {
        let dB = this.byParent.get(BB);
        return void 0 === dB && (dB = this.find(BB, TB), this.byParent.set(BB, dB)), dB
      }
    }
    const GT = new WeakMap;
    let qT = 0;
    const xT = BB => {
        let TB = GT.get(BB);
        return TB || (TB = "el:" + qT++, GT.set(BB, TB)), TB
      },
      jT = BB => ({
        left: BB.left,
        top: BB.top,
        width: BB.width,
        height: BB.height
      }),
      AT = BB => BB.width > 0 && BB.height > 0,
      bT = (BB, TB) => AT(BB) && BB.left + BB.width > 0 && BB.top + BB.height > 0 && BB.left < TB.width && BB.top < TB.height,
      nT = (BB, TB, dB) => {
        const VB = BB.top + BB.height / 2;
        return bT(BB, TB) && (!dB || VB >= dB.top && VB <= dB.bottom)
      },
      eT = BB => ({
        x: BB.left + BB.width / 2,
        y: BB.top + BB.height / 2
      }),
      Bd = (BB, TB, dB) => BB < 0 ? dB >= 0 ? 0 : TB - 1 : ((BB + dB) % TB + TB) % TB,
      Td = BB => "Left" === BB || "Right" === BB,
      dd = (BB, TB, dB) => {
        const VB = Td(dB),
          yB = VB ? BB.top : BB.left,
          pB = VB ? BB.height : BB.width,
          lB = VB ? TB.top : TB.left,
          JB = VB ? TB.height : TB.width,
          YB = Math.max(0, Math.max(lB - (yB + pB), yB - (lB + JB)));
        return pB > 1.5 * JB ? {
          gap: YB,
          offset: Math.max(0, lB - yB) + .1 * Math.max(0, yB - lB)
        } : {
          gap: YB,
          offset: Math.abs(lB + JB / 2 - (yB + pB / 2))
        }
      },
      Vd = (BB, TB, dB) => {
        const VB = ((BB, TB, dB) => {
          const VB = eT(BB),
            yB = eT(TB),
            pB = Td(dB) ? Math.min(BB.width, TB.width) / 4 : Math.min(BB.height, TB.height) / 4;
          switch (dB) {
            case "Right":
              return yB.x - VB.x >= pB ? Math.max(0, TB.left - (BB.left + BB.width)) : null;
            case "Left":
              return VB.x - yB.x >= pB ? Math.max(0, BB.left - (TB.left + TB.width)) : null;
            case "Down":
              return yB.y - VB.y >= pB ? Math.max(0, TB.top - (BB.top + BB.height)) : null;
            case "Up":
              return VB.y - yB.y >= pB ? Math.max(0, BB.top - (TB.top + TB.height)) : null
          }
        })(BB, TB, dB);
        if (null === VB) return null;
        const yB = dd(BB, TB, dB);
        return VB + 3 * yB.gap + .5 * yB.offset
      },
      yd = (BB, TB) => TB.visible || null !== TB.scrollGroup && TB.scrollGroup === BB.scrollGroup,
      pd = (BB, TB, dB, VB) => {
        let yB = null,
          pB = 1 / 0;
        for (const lB of TB) {
          if (lB.key === BB.key || !yd(BB, lB) || !VB(lB)) continue;
          const TB = Vd(BB.rect, lB.rect, dB);
          null !== TB && TB < pB && (yB = lB, pB = TB)
        }
        return yB
      },
      ld = (BB, TB, dB) => {
        const VB = pd(BB, TB, dB, (() => !0));
        if (!VB || Td(dB) || null === BB.scrollGroup || VB.scrollGroup === BB.scrollGroup) return VB;
        const yB = pd(BB, TB, dB, (TB => 0 === dd(BB.rect, TB.rect, dB).gap));
        return null !== yB && void 0 !== yB ? yB : VB
      },
      Jd = (BB, TB, dB) => {
        let VB = null,
          yB = 1 / 0;
        for (const pB of TB) {
          if (!pB.visible || dB && !dB(pB)) continue;
          const TB = eT(pB.rect),
            lB = Math.hypot(TB.x - BB.x, TB.y - BB.y);
          lB < yB && (VB = pB, yB = lB)
        }
        return VB
      },
      Yd = BB => {
        const {
          rect: TB,
          clip: dB
        } = BB;
        if (!dB) return TB;
        const VB = Math.max(TB.left, dB.left),
          yB = Math.max(TB.top, dB.top);
        return {
          left: VB,
          top: yB,
          width: Math.min(TB.left + TB.width, dB.left + dB.width) - VB,
          height: Math.min(TB.top + TB.height, dB.top + dB.height) - yB
        }
      },
      gd = (BB, TB) => TB.x >= BB.left && TB.x < BB.left + BB.width && TB.y >= BB.top && TB.y < BB.top + BB.height,
      od = (BB, TB) => {
        let dB = null,
          VB = 1 / 0;
        for (const yB of TB) {
          const TB = Yd(yB);
          (yB.visible || yB.clip) && gd(TB, BB) && (TB.width * TB.height < VB && (dB = yB, VB = TB.width * TB.height))
        }
        return dB
      },
      kd = BB => {
        let TB = null;
        for (const dB of BB) {
          if (!dB.visible) continue;
          if (!TB) {
            TB = dB;
            continue
          }
          const BB = Math.min(TB.rect.height, dB.rect.height) / 2,
            VB = dB.rect.top - TB.rect.top;
          (VB < -BB || Math.abs(VB) <= BB && dB.rect.left < TB.rect.left) && (TB = dB)
        }
        return TB
      },
      Ld = (BB, TB, dB, VB, yB) => {
        const pB = yB % TB,
          lB = Math.floor(yB / TB);
        return {
          left: BB.left + pB * dB,
          top: BB.top + lB * VB,
          width: BB.width,
          height: BB.height
        }
      },
      Od = ".EntireInventoryWrapper .Inventory, .HotBarGameItemsContainer",
      Dd = ".LazyLoadedItemWrapper",
      ud = ["[data-inven-idx]", "[data-recipe-key]", "[role=button]", "button", "input:not([type=hidden])", "textarea", ".CreativeCategoryTab", ".CreativeCategoryDropdownButton", ".CreativeCategoryDropdownOption", "[data-craft-ingredient]"].join(","),
      Hd = [
        ["hotbar", ".HotBarGameItemsContainer"],
        ["gameButtons", ".ClientGameInventoryButtons"],
        ["categories", ".CreativeCategoryRail"],
        ["recipe", ".CraftableInfo"],
        ["armour", ".ArmourItemSlots"],
        ["main", ".InvenBodyRight"],
        ["left", ".InvenLeftSide"]
      ],
      Ed = ["gameButtons", "categories", "left", "recipe", "armour", "main", "hotbar"],
      vd = BB => BB.hasAttribute("data-inven-idx") ? "slot" : BB.hasAttribute("data-recipe-key") ? "recipe" : BB.hasAttribute("data-craft-ingredient") || oT(BB) ? "info" : mT(BB) ? "textField" : "button",
      md = (BB, TB) => "slot" === TB ? Number(BB.getAttribute("data-inven-idx")) : null,
      Nd = BB => BB.matches(Dd) ? BB.querySelector(ud) : BB,
      td = BB => {
        var TB, dB;
        return {
          element: BB,
          recipe: null !== (TB = BB && (null === (dB = Nd(BB)) || void 0 === dB ? void 0 : dB.getAttribute("data-recipe-key"))) && void 0 !== TB ? TB : null
        }
      },
      fd = BB => {
        const TB = Nd(BB);
        if (!TB) return {
          kind: "pending",
          idx: null
        };
        const dB = vd(TB);
        return {
          kind: dB,
          idx: md(TB, dB)
        }
      },
      sd = BB => {
        const TB = [];
        for (const [dB, VB] of Hd) {
          BB.matches(VB) && TB.push([dB, BB]);
          for (const yB of BB.querySelectorAll(VB)) TB.push([dB, yB])
        }
        return TB
      },
      Md = (BB, TB) => {
        for (const [dB, VB] of BB)
          if (VB.contains(TB)) return dB;
        return "other"
      },
      zd = (BB, TB, dB, VB, yB, pB, lB, JB) => {
        var YB;
        const gB = BB.children,
          oB = jT(gB[0].getBoundingClientRect()),
          kB = [{
            element: gB[0],
            rect: oB
          }];
        if (pB.push(kB[0]), 0 === oB.width || 0 === oB.height) return;
        let LB = 1;
        for (; LB < gB.length && Math.abs(gB[LB].getBoundingClientRect().top - oB.top) < 1;) LB++;
        const OB = BB => {
            const TB = {
              element: gB[BB],
              rect: jT(gB[BB].getBoundingClientRect())
            };
            return pB.push(TB), kB.push(TB), TB.rect
          },
          DB = LB > 1 ? OB(1).left - oB.left : oB.width,
          uB = gB.length > LB ? OB(LB).top - oB.top : oB.height,
          HB = lB.find(BB, TB);
        let EB = null;
        if (HB) {
          var vB;
          const {
            container: BB,
            box: TB
          } = HB;
          EB = null !== (vB = JB.get(BB)) && void 0 !== vB ? vB : null, EB || (EB = {
            top: BB.scrollTop,
            left: BB.scrollLeft,
            box: TB,
            viewport: VB,
            targets: [],
            probes: [],
            holdsOthers: !1
          }, JB.set(BB, EB)), EB.probes.push(...kB)
        }
        const mB = yB.length;
        for (let fB = 0; fB < gB.length; fB++) {
          var iB, NB, tB;
          const BB = gB[fB],
            TB = Ld(oB, LB, DB, uB, fB),
            pB = BB.firstElementChild ? BB.querySelector(ud) : null,
            lB = pB ? vd(pB) : "pending";
          yB.push({
            key: xT(BB),
            rect: TB,
            panel: dB,
            scrollGroup: null !== (iB = null === HB || void 0 === HB ? void 0 : HB.group) && void 0 !== iB ? iB : null,
            visible: nT(TB, VB, null === HB || void 0 === HB ? void 0 : HB.box),
            clip: null !== (NB = null === HB || void 0 === HB ? void 0 : HB.box) && void 0 !== NB ? NB : null,
            element: BB,
            kind: lB,
            idx: pB ? md(pB, lB) : null,
            scrollContainer: null !== (tB = null === HB || void 0 === HB ? void 0 : HB.container) && void 0 !== tB ? tB : null
          })
        }
        null === (YB = EB) || void 0 === YB || YB.targets.push(...yB.slice(mB))
      },
      wd = BB => BB instanceof Element && null !== BB.closest(Dd),
      Ud = BB => null !== BB.scrollContainer && wd(BB.element);
    class Fd {
      constructor() {
        this.latched = null, this.presses = 0
      }
      press(BB, TB, dB, VB) {
        this.latched = {
          source: BB,
          focusKey: TB,
          sinceMs: dB,
          hold: {
            id: ++this.presses,
            holdMs: VB
          }
        }
      }
      update(BB, TB, dB) {
        const VB = this.latched;
        return VB ? BB && TB === VB.focusKey ? dB - VB.sinceMs < VB.hold.holdMs ? null : (this.latched = null, VB.source) : (this.latched = null, null) : null
      }
      getHold() {
        var BB, TB;
        return null !== (BB = null === (TB = this.latched) || void 0 === TB ? void 0 : TB.hold) && void 0 !== BB ? BB : null
      }
      reset() {
        this.latched = null
      }
    }
    var Kd = dB(8016);
    const rd = {
        kind: "none"
      },
      Id = BB => ({
        x: BB.clientX,
        y: BB.clientY
      }),
      cd = () => 2 * (parseFloat(getComputedStyle(document.documentElement).fontSize) || 16);
    class Sd {
      constructor() {
        this.hovered = rd, this.signature = "", this.holding = !1, this.lastPoint = {
          clientX: 0,
          clientY: 0
        }
      }
      sync(BB, TB, dB, VB, yB) {
        const pB = null !== TB ? {
            kind: "slot",
            idx: TB
          } : dB ? {
            kind: "element",
            element: dB
          } : rd,
          lB = `${yB}|${Math.round(VB.clientX)},${Math.round(VB.clientY)}`,
          JB = (YB = this.hovered, gB = pB, "slot" === YB.kind && "slot" === gB.kind ? YB.idx === gB.idx : "element" === YB.kind && "element" === gB.kind ? YB.element === gB.element : YB.kind === gB.kind);
        var YB, gB;
        if (JB && lB === this.signature) return;
        const oB = !JB || yB !== this.holding || "" === this.signature;
        this.signature = lB, this.holding = yB, this.lastPoint = VB;
        const kB = this.hovered;
        if (this.hovered = pB, "slot" === pB.kind) return this.leaveElement(kB, null, VB), void(oB ? BB.hover(pB.idx, VB) : BB.moveTo(VB));
        if (JB) return void("element" === pB.kind ? zT(pB.element, pB.element, Id(VB)) : BB.hover(null, VB));
        BB.hover(null, VB);
        const LB = "element" === pB.kind ? pB.element : null;
        "element" === kB.kind ? zT(kB.element, LB, Id(VB)) : LB && zT(null, LB, Id(VB))
      }
      invalidate() {
        this.signature = ""
      }
      clear(BB) {
        const TB = this.hovered;
        this.hovered = rd, this.signature = "", "none" !== TB.kind && (this.leaveElement(TB, null, this.lastPoint), BB && "slot" === TB.kind && BB.hover(null, this.lastPoint))
      }
      leaveElement(BB, TB, dB) {
        "element" === BB.kind && zT(BB.element, TB, Id(dB))
      }
    }
    class Pd {
      constructor() {
        this.lastTiltedMs = -1 / 0
      }
      update(BB, TB) {
        fB(BB) && (this.lastTiltedMs = TB)
      }
      allowsClick(BB) {
        return BB - this.lastTiltedMs > 150
      }
    }
    class Qd {
      constructor() {
        this.remainder = 0, this.container = null
      }
      isScrolling(BB) {
        return 0 !== (0, DB.k)(BB, .2).y
      }
      step(BB, TB, dB) {
        BB !== this.container && (this.container = BB, this.remainder = 0);
        const VB = sB(TB, dB).y;
        if (0 === VB) return this.remainder = 0, !1;
        const yB = this.remainder + VB,
          pB = Math.trunc(yB);
        if (this.remainder = yB - pB, 0 === pB) return !1;
        const lB = BB.scrollTop;
        return BB.scrollTop = lB + pB, BB.scrollTop !== lB
      }
      current() {
        var BB;
        return null !== (BB = this.container) && void 0 !== BB && BB.isConnected ? this.container : null
      }
      reset() {
        this.remainder = 0, this.container = null
      }
    }
    var Rd = dB(8018);
    const ad = "[data-pad-inventory-default]",
      Zd = ".HotBarGameItemsContainer .InvenItem.Selected",
      Xd = {
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
      Wd = [
        ["primary", "inventoryPrimary"],
        ["secondary", "inventorySecondary"],
        ["quickMove", "inventoryQuickMove"],
        ["hotbarSwap", "inventoryHotbarSwap"],
        ["back", "inventoryClose"],
        ["openButton", "inventory"]
      ],
      hd = ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryHotbarSwap", "inventoryClose", "inventoryDrop"],
      Cd = ["inventoryPanelPrevious", "inventoryPanelNext", "menuPageUp", "menuPageDown"],
      Gd = [...hd, ...Cd],
      qd = () => {
        return BB = (0, oB.m)("inventory"), !Gd.map(oB.m).includes(BB) && !(0, DB.G)(BB);
        var BB
      },
      xd = new Set(["slotPrimary", "slotSecondary", "slotQuickMove", "pressPrimary", "pressSecondary", "openKeyboard"]),
      jd = (BB, TB) => {
        const dB = !(null === TB || void 0 === TB || !TB.isHolding());
        return function(BB, TB) {
          const dB = BB.find((BB => BB.visible && TB(BB)));
          if (dB) return dB;
          for (var VB = arguments.length, yB = new Array(VB > 2 ? VB - 2 : 0), pB = 2; pB < VB; pB++) yB[pB - 2] = arguments[pB];
          for (const lB of yB) {
            const TB = kd(BB.filter(lB));
            if (TB) return TB
          }
          return kd(BB)
        }(BB, (BB => {
          const {
            element: TB
          } = BB;
          return TB.matches(ad) || null !== TB.querySelector(ad) || TB.matches(Zd)
        }), (BB => "slot" === BB.kind ? dB || null !== BB.idx && !(null === TB || void 0 === TB || !TB.hasItemAt(BB.idx)) : "recipe" === BB.kind || "pending" === BB.kind), (BB => "slot" === BB.kind || "button" === BB.kind))
      };
    class Ad {
      constructor() {
        this.set = null, this.observer = new MutationObserver((BB => {
          BB.some((BB => !wd(BB.target))) && (this.set = null)
        })), this.invalidate = () => {
          this.set = null
        }, this.onScroll = BB => {
          this.scrolled(BB.target)
        }
      }
      get() {
        if (!this.set) {
          this.set = (() => {
            const BB = [],
              TB = [];
            let dB = !1;
            const VB = {
                width: window.innerWidth,
                height: window.innerHeight
              },
              yB = new Map,
              pB = new CT(TB);
            for (const kB of document.querySelectorAll(Od)) {
              const oB = sd(kB);
              dB ||= null !== kB.querySelector(".CreativeCategoryTab");
              for (const dB of kB.querySelectorAll(`${Dd}:first-child`)) {
                const lB = dB.parentElement;
                zd(lB, kB, Md(oB, lB), VB, BB, TB, pB, yB)
              }
              for (const dB of kB.querySelectorAll(ud)) {
                var lB, JB, YB, gB;
                if (dB.closest(Dd) || dB.closest("[data-pad-ignore]")) continue;
                const LB = null === (lB = dB.parentElement) || void 0 === lB ? void 0 : lB.closest(ud);
                if (LB && kB.contains(LB)) continue;
                const OB = vd(dB),
                  DB = md(dB, OB);
                if (-1 === DB) continue;
                const uB = jT(dB.getBoundingClientRect());
                TB.push({
                  element: dB,
                  rect: uB
                });
                const HB = pB.findForParent(dB.parentElement, kB),
                  EB = HB && !yB.has(HB.container) ? HB : null;
                (EB ? AT(uB) : bT(uB, VB)) && BB.push({
                  key: xT(dB),
                  rect: uB,
                  panel: Md(oB, dB),
                  scrollGroup: null !== (JB = null === EB || void 0 === EB ? void 0 : EB.group) && void 0 !== JB ? JB : null,
                  visible: nT(uB, VB, null === EB || void 0 === EB ? void 0 : EB.box),
                  clip: null !== (YB = null === EB || void 0 === EB ? void 0 : EB.box) && void 0 !== YB ? YB : null,
                  element: dB,
                  kind: OB,
                  idx: DB,
                  scrollContainer: null !== (gB = null === EB || void 0 === EB ? void 0 : EB.container) && void 0 !== gB ? gB : null
                })
              }
            }
            for (const [kB, LB] of yB) LB.holdsOthers = TB.some((BB => BB.element !== kB && kB.contains(BB.element) && !BB.element.closest(Dd)));
            const oB = new Map;
            for (const kB of BB) oB.set(kB.element, kB);
            return {
              targets: BB,
              byElement: oB,
              hasCategories: dB,
              probes: TB,
              scrollers: yB
            }
          })(), this.observer.disconnect();
          for (const BB of document.querySelectorAll(Od)) this.observer.observe(BB, {
            childList: !0,
            subtree: !0,
            attributes: !0,
            attributeFilter: ["class", "disabled", "aria-disabled", "tabindex", "data-inven-idx"]
          })
        }
        return this.set
      }
      scrolled(BB) {
        !this.set || BB instanceof Element && ((BB, TB) => {
          const dB = BB.scrollers.get(TB);
          if (!dB || dB.holdsOthers || TB.scrollLeft !== dB.left) return !1;
          const VB = TB.scrollTop - dB.top;
          if (0 === VB) return !0;
          dB.top = TB.scrollTop;
          for (const yB of dB.probes) yB.rect.top -= VB;
          for (const yB of dB.targets) yB.rect.top -= VB, yB.visible = nT(yB.rect, dB.viewport, dB.box);
          return !0
        })(this.set, BB) || (this.set = null)
      }
      revalidate() {
        this.set && this.set.probes.some((BB => {
          return TB = BB.rect, dB = BB.element.getBoundingClientRect(), !(TB.left === dB.left && TB.top === dB.top && TB.width === dB.width && TB.height === dB.height);
          var TB, dB
        })) && (this.set = null)
      }
      disconnect() {
        this.observer.disconnect(), this.set = null
      }
    }
    const bd = new class {
        constructor() {
          this.focused = null, this.focusTarget = null, this.lastRect = null, this.panelMemory = new Map, this.reopenSlotIdx = null, this.dpadTimers = new Map(DB.D.map((BB => [BB, (0, uB.d)(DB.F)]))), this.stickRepeat = new DB.e((0, uB.d)(DB.eb)), this.pageUpTimer = (0, uB.d)(DB.Y), this.pageDownTimer = (0, uB.d)(DB.Y), this.stickGate = new NB, this.pointer = null, this.activePress = null, this.dropLatch = new Fd, this.scroller = new Qd, this.scrollStickClick = new Pd, this.hover = new Sd, this.lastRealPointer = null, this.placeAfterCategory = null, this.hotbarPick = null, this.ring = new WB, this.targets = new Ad, this.hasCategories = !1, this.wasShowing = !1, this.state = Kd.b, this.isActive = () => (0, hT.i)(), this.isShowing = () => "inventory" === kB.d.getActiveConsumerName() && (0, OB.k)(), this.getState = () => this.state, this.isSteppingSlots = () => this.isShowing() && null === this.pointer, this.onDeactivate = () => {
            this.endInteraction((0, hT.g)()), (0, hT.i)() || this.forgetSurface()
          }, this.forgetSurface = () => {
            var BB;
            this.reopenSlotIdx = null !== (BB = this.focused ? fd(this.focused).idx : null) && void 0 !== BB ? BB : this.reopenSlotIdx, this.focused = null, this.focusTarget = null, this.lastRect = null, this.placeAfterCategory = null, (0, hT.s)(), this.panelMemory.clear(), this.targets.disconnect()
          }, this.onFrame = BB => {
            (0, JB.unstable_batchedUpdates)((() => {
              this.frame(BB)
            }))
          }, this.shouldBlockRealPointer = BB => BB.isTrusted && !(0, EB.o)(BB) && this.isShowing(), this.noteRealPointer = BB => {
            BB instanceof MouseEvent && BB.isTrusted && !(0, EB.o)(BB) && (this.lastRealPointer ??= {
              x: 0,
              y: 0
            }, this.lastRealPointer.x = BB.clientX, this.lastRealPointer.y = BB.clientY)
          }, this.wakePressActs = BB => {
            var TB;
            return BB === (0, oB.m)("inventoryClose") ? !(null !== (TB = (0, hT.g)()) && void 0 !== TB && TB.isHolding()) : !(BB !== (0, oB.m)("inventory") || !qd()) || ((0, DB.G)(BB) ? this.isNavButton(BB) : Cd.some((TB => (0, oB.m)(TB) === BB)))
          }
        }
        frame(BB) {
          var TB, dB, VB, yB, pB;
          const lB = (0, hT.g)();
          if (!(0, OB.k)()) return void(this.wasShowing && (this.endInteraction(lB), this.rehoverRealPointer()));
          this.wasShowing = !0, this.applyFocusRequest(), BB.wokeDevice && this.focusWakePointer(!(null === lB || void 0 === lB || !lB.isHolding())), this.applyCategoryPlace(), this.ensureFocus(), "cursor" !== (0, LB.h)().inventoryNavigation || this.pointer || this.engagePointer();
          const JB = performance.now();
          this.handleNavigation(BB, JB), this.handlePanels(BB), this.handlePaging(BB, JB), this.handleScroll(BB), this.handleButtons(BB, JB, lB), this.applyFocusRequest(), this.pointer && this.hoverAtPointer();
          const YB = this.ensureFocus(),
            gB = this.focusContext(lB);
          this.ring.show(YB);
          const kB = "slot" === gB.kind ? gB.idx : null,
            DB = null !== (TB = null === (dB = gB.actionElement) || void 0 === dB ? void 0 : dB.querySelector(".DoCraftItem")) && void 0 !== TB ? TB : gB.actionElement;
          this.pointer ? (this.hover.sync(lB, kB, DB, ((BB, TB) => {
            const dB = TB ? cd() : 0;
            return {
              clientX: BB.x - dB,
              clientY: BB.y - dB
            }
          })(this.pointer, gB.holding), gB.holding), ZT.set({
            x: this.pointer.x,
            y: this.pointer.y,
            visible: !0,
            pressed: BB.isHeld((0, oB.m)("inventoryPrimary"))
          })) : YB && this.focused && this.hover.sync(lB, kB, DB, ((BB, TB) => {
            if (!TB) return {
              clientX: BB.left + BB.width - 10,
              clientY: BB.top + BB.height / 2 - 10
            };
            const dB = cd();
            return {
              clientX: BB.left + BB.width / 2 - dB,
              clientY: BB.top + BB.height / 2 - dB
            }
          })(YB, gB.holding), gB.holding), this.publishState({
            showing: !0,
            kind: gB.kind,
            holding: gB.holding,
            slotHasItem: gB.slotHasItem,
            pressHints: null !== (VB = null === (yB = gB.press) || void 0 === yB ? void 0 : yB.hints) && void 0 !== VB ? VB : null,
            hasCategories: this.hasCategories,
            hasList: !!this.focusTarget && Ud(this.focusTarget),
            openButtonCloses: qd(),
            steppingSlots: null === this.pointer,
            quickMoveToHotbar: "slot" === gB.kind && !(null === (pB = gB.actionElement) || void 0 === pB || !pB.closest(".CreativeItemSlots")),
            dropStackHold: this.dropLatch.getHold(),
            hotbarPicking: null !== this.hotbarPick
          })
        }
        focusWakePointer(BB) {
          var TB;
          const dB = (0, OB.b)();
          if (!dB) return;
          this.targets.revalidate();
          const VB = this.getTargets().targets;
          this.setFocus(null !== (TB = od(dB, VB)) && void 0 !== TB ? TB : BB ? Jd(dB, VB, (BB => {
            let {
              rect: TB
            } = BB;
            const VB = Math.max(TB.left - dB.x, 0, dB.x - (TB.left + TB.width)),
              yB = Math.max(TB.top - dB.y, 0, dB.y - (TB.top + TB.height));
            return Math.hypot(VB, yB) <= Math.min(TB.width, TB.height) / 2
          })) : null, !1), "cursor" === (0, LB.h)().inventoryNavigation && (this.pointer = {
            x: dB.x,
            y: dB.y,
            speedRamp: 0
          })
        }
        rehoverRealPointer() {
          const BB = this.lastRealPointer;
          if (!BB || "keyboardMouse" !== YB.d.get("activeInputDevice")) return;
          const TB = document.elementFromPoint(BB.x, BB.y);
          TB && zT(null, TB, BB)
        }
        endInteraction(BB) {
          this.wasShowing = !1, this.hotbarPick = null, this.releasePress(), this.dropLatch.reset(), this.scroller.reset();
          for (const TB of this.dpadTimers.values()) TB.reset();
          this.stickRepeat.reset(), this.pageUpTimer.reset(), this.pageDownTimer.reset(), this.hover.clear(BB), this.ring.hide(), this.releasePointer(), this.publishState(Kd.b)
        }
        getTargets() {
          const BB = this.targets.get();
          return this.hasCategories = BB.hasCategories, BB
        }
        currentTarget() {
          var BB;
          return this.focused && null !== (BB = this.getTargets().byElement.get(this.focused)) && void 0 !== BB ? BB : null
        }
        readFocusRect() {
          const BB = this.focused;
          if (null === BB || void 0 === BB || !BB.isConnected || !BB.closest(Od)) return null;
          const TB = BB.getBoundingClientRect();
          return TB.width > 0 && TB.height > 0 ? {
            left: TB.left,
            top: TB.top,
            width: TB.width,
            height: TB.height
          } : null
        }
        ensureFocus() {
          const BB = this.readFocusRect();
          if (BB || this.pointer) return BB;
          const {
            targets: TB,
            byElement: dB
          } = this.getTargets();
          let VB = null,
            yB = !1;
          if (this.lastRect) VB = Jd(eT(this.lastRect), TB);
          else {
            var pB, lB;
            const BB = ((BB, TB) => {
                const dB = document.querySelector(".EntireInventoryWrapper [data-pad-inventory-start]");
                return dB ? jd(BB.filter((BB => dB.contains(BB.element))), TB) : null
              })(TB, (0, hT.g)()),
              JB = TB.find((BB => null !== BB.idx && BB.idx === this.reopenSlotIdx)),
              YB = document.querySelector(Zd);
            yB = null !== BB || void 0 !== JB, VB = null !== (pB = null !== (lB = null !== BB && void 0 !== BB ? BB : JB) && void 0 !== lB ? lB : YB && dB.get(YB)) && void 0 !== pB ? pB : kd(TB)
          }
          return this.setFocus(VB, yB), this.lastRect
        }
        setFocus(BB) {
          let TB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          BB && (this.focused = BB.element, this.focusTarget = BB, this.panelMemory.set(BB.panel, BB.element), TB && BB.scrollContainer && ((BB, TB) => {
            const dB = BB.getBoundingClientRect(),
              VB = cB(TB),
              yB = TB.scrollTop;
            return dB.top < VB.top ? TB.scrollTop -= VB.top - dB.top : dB.bottom > VB.bottom && (TB.scrollTop += dB.bottom - VB.bottom), TB.scrollTop !== yB
          })(BB.element, BB.scrollContainer) && this.targets.invalidate(), this.lastRect = this.readFocusRect(), this.followFocusJump())
        }
        followFocusJump() {
          if (this.pointer)
            if ("cursor" === (0, LB.h)().inventoryNavigation) {
              if (this.lastRect) {
                const BB = eT(this.lastRect);
                this.pointer = {
                  x: BB.x,
                  y: BB.y,
                  speedRamp: 0
                }
              }
            } else this.releasePointer()
        }
        engagePointer() {
          const BB = this.lastRect ? eT(this.lastRect) : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          };
          this.pointer = {
            x: BB.x,
            y: BB.y,
            speedRamp: 0
          }
        }
        releasePointer() {
          this.pointer = null, ZT.hide()
        }
        hoverAtPointer() {
          var BB;
          const TB = od(this.pointer, this.getTargets().targets);
          this.focusTarget = TB, (null === TB || void 0 === TB ? void 0 : TB.element) !== this.focused && (this.focused = null !== (BB = null === TB || void 0 === TB ? void 0 : TB.element) && void 0 !== BB ? BB : null, TB && (this.panelMemory.set(TB.panel, TB.element), this.lastRect = this.readFocusRect()))
        }
        moveCursor(BB, TB) {
          const dB = this.focusTarget,
            VB = dB && (0, LB.h)().cursorMagnetism ? eT(Yd(dB)) : null;
          this.pointer = tB(this.pointer, {
            stick: BB.leftStick,
            moveDeadzone: (0, LB.h)().moveDeadzone,
            dpad: TB,
            dtMs: BB.dtMs,
            cursorSpeedPercent: (0, LB.h)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: {
              overInteractive: !1,
              magnetTarget: VB
            }
          })
        }
        move(BB) {
          this.targets.revalidate();
          const TB = this.currentTarget();
          TB && this.setFocus(ld(TB, this.getTargets().targets, BB))
        }
        step(BB) {
          const TB = this.pointer;
          if (TB && (this.releasePointer(), !this.focused)) return this.targets.revalidate(), void this.setFocus(((BB, TB, dB) => {
            var VB;
            const yB = {
              key: "",
              rect: {
                left: BB.x,
                top: BB.y,
                width: 0,
                height: 0
              },
              panel: "",
              scrollGroup: null,
              visible: !0,
              clip: null
            };
            return null !== (VB = ld(yB, TB, dB)) && void 0 !== VB ? VB : Jd(BB, TB)
          })(TB, this.getTargets().targets, BB));
          this.move(BB)
        }
        isNavButton(BB) {
          return !hd.some((TB => (0, oB.m)(TB) === BB)) && !(BB === (0, oB.m)("inventory") && qd())
        }
        handleNavigation(BB, TB) {
          const dB = (0, LB.h)().inventoryNavigation,
            VB = {
              x: 0,
              y: 0
            };
          let yB = null;
          for (const YB of DB.D) {
            const pB = this.isNavButton(YB) && BB.isHeld(YB);
            pB && (VB.x += Xd[YB].x, VB.y += Xd[YB].y), this.dpadTimers.get(YB).update(pB, TB) && "cursor" !== dB && (yB ??= YB)
          }
          const pB = this.stickGate.update(BB.leftStick, (0, LB.h)().moveDeadzone);
          if (yB && (this.step(yB), this.stickGate.lock()), "slot" !== dB) {
            const TB = ((BB, TB, dB, VB) => "hybrid" !== BB ? "cursor" === BB : !VB && (TB || dB))(dB, null !== this.pointer, pB, null !== yB);
            return TB && !this.pointer && this.engagePointer(), void(this.pointer && this.moveCursor(BB, "cursor" === dB ? VB : {
              x: 0,
              y: 0
            }))
          }
          const lB = (0, DB.k)(BB.leftStick, (0, LB.h)().moveDeadzone),
            JB = this.stickRepeat.update(pB ? (0, DB.ib)(lB) : null, TB);
          JB && this.move(JB)
        }
        applyCategoryPlace() {
          const BB = this.placeAfterCategory;
          if (!BB) return;
          this.placeAfterCategory = null, this.targets.invalidate();
          const TB = Jd(eT(BB.rect), this.getTargets().targets, (TB => TB.scrollGroup === BB.scrollGroup));
          this.setFocus(TB, !1)
        }
        applyFocusRequest() {
          const BB = (0, hT.s)();
          BB && (this.targets.invalidate(), this.setFocus((0, hT.c)(this.getTargets().targets, BB)))
        }
        handlePanels(BB) {
          var TB, dB, VB;
          const yB = BB.wasPressed((0, oB.m)("inventoryPanelPrevious")),
            pB = BB.wasPressed((0, oB.m)("inventoryPanelNext"));
          if (!yB && !pB) return;
          const {
            targets: lB
          } = this.getTargets(), JB = (YB = ((BB, TB) => {
            const dB = [];
            for (const yB of BB) yB.visible && !dB.includes(yB.panel) && dB.push(yB.panel);
            const VB = BB => {
              const VB = TB.indexOf(BB);
              return -1 === VB ? TB.length + dB.indexOf(BB) : VB
            };
            return dB.sort(((BB, TB) => VB(BB) - VB(TB)))
          })(lB, Ed), gB = null !== (TB = null === (dB = this.focusTarget) || void 0 === dB ? void 0 : dB.panel) && void 0 !== TB ? TB : null, kB = pB ? 1 : -1, 0 === YB.length ? null : YB[Bd(null === gB ? -1 : YB.indexOf(gB), YB.length, kB)]);
          var YB, gB, kB;
          if (null === JB) return;
          const LB = this.panelMemory.get(JB),
            OB = lB.filter((BB => BB.panel === JB)),
            DB = null !== (VB = OB.find((BB => BB.element === LB && BB.visible))) && void 0 !== VB ? VB : jd(OB, (0, hT.g)());
          this.setFocus(DB)
        }
        handlePaging(BB, TB) {
          const dB = (0, oB.m)("menuPageUp"),
            VB = (0, oB.m)("menuPageDown"),
            yB = this.pageUpTimer.update(BB.isHeld(dB), TB),
            pB = this.pageDownTimer.update(BB.isHeld(VB), TB);
          if (!yB && !pB) return;
          const lB = pB ? 1 : -1;
          if (!BB.wasPressed(pB ? VB : dB) && this.hasCategories) return;
          if ((BB => {
              const TB = Array.from(document.querySelectorAll(".EntireInventoryWrapper .CreativeCategoryTab"));
              if (0 === TB.length) return !1;
              const dB = TB.findIndex((BB => BB.classList.contains("Selected"))),
                VB = TB[Bd(dB, TB.length, BB)];
              return MT(VB, iT(VB)), !0
            })(lB)) {
            var JB, YB;
            this.targets.invalidate();
            const BB = null !== (JB = null === (YB = this.focusTarget) || void 0 === YB ? void 0 : YB.scrollGroup) && void 0 !== JB ? JB : null,
              TB = this.readFocusRect();
            return void(this.placeAfterCategory = null !== BB && TB && !this.pointer ? {
              rect: TB,
              scrollGroup: BB
            } : null)
          }
          const {
            targets: gB
          } = this.getTargets(), kB = this.currentTarget(), LB = kB && Ud(kB) ? kB : gB.find((BB => Ud(BB) && BB.visible));
          if (!LB) return;
          const OB = ((BB, TB, dB, VB) => {
            if (null === BB.scrollGroup) return null;
            const yB = eT(BB.rect),
              pB = yB.x,
              lB = yB.y + ("Down" === dB ? VB : -VB);
            let JB = null,
              YB = 1 / 0;
            for (const gB of TB) {
              if (gB.scrollGroup !== BB.scrollGroup || gB.key === BB.key) continue;
              const TB = eT(gB.rect);
              if ("Down" === dB ? TB.y <= yB.y : TB.y >= yB.y) continue;
              const VB = Math.hypot(TB.x - pB, TB.y - lB);
              VB < YB && (JB = gB, YB = VB)
            }
            return JB
          })(LB, gB, lB > 0 ? "Down" : "Up", LB.scrollContainer.clientHeight);
          this.setFocus(null !== OB && void 0 !== OB ? OB : LB)
        }
        handleScroll(BB) {
          var TB, dB, VB, yB, pB, lB;
          if (!this.scroller.isScrolling(BB.rightStick)) return void this.scroller.reset();
          const {
            targets: JB
          } = this.getTargets(), YB = this.pointer, gB = !YB && this.focusTarget && Ud(this.focusTarget) ? this.focusTarget.scrollContainer : null, oB = YB && (null === (TB = JB.find((BB => BB.clip && gd(BB.clip, YB)))) || void 0 === TB ? void 0 : TB.scrollContainer), kB = null !== (dB = null !== (VB = null !== (yB = this.scroller.current()) && void 0 !== yB ? yB : oB) && void 0 !== VB ? VB : gB) && void 0 !== dB ? dB : null === (pB = JB.find(Ud)) || void 0 === pB ? void 0 : pB.scrollContainer;
          if (!kB || !this.scroller.step(kB, BB.rightStick, BB.dtMs)) return;
          this.targets.scrolled(kB);
          const LB = YB || (null === (lB = this.focusTarget) || void 0 === lB ? void 0 : lB.scrollContainer) !== kB ? null : this.readFocusRect();
          if (!LB) return;
          const OB = cB(kB),
            DB = eT(LB);
          if (DB.y < OB.top || DB.y > OB.bottom) {
            const BB = this.focusTarget.scrollGroup,
              TB = Jd(DB, this.getTargets().targets, (TB => TB.scrollGroup === BB));
            this.setFocus(TB, !1)
          }
        }
        focusContext(BB) {
          const {
            kind: TB,
            idx: dB
          } = this.focused ? fd(this.focused) : {
            kind: null,
            idx: null
          }, VB = this.focused ? Nd(this.focused) : null, yB = VB ? (0, Rd.c)(VB) : null;
          return {
            kind: TB,
            idx: dB,
            actionElement: VB,
            press: yB,
            hasPress: null !== yB,
            hasBack: !(null === yB || void 0 === yB || !yB.back),
            holding: BB.isHolding(),
            slotHasItem: null !== dB && BB.hasItemAt(dB)
          }
        }
        handleButtons(BB, TB, dB) {
          var VB, yB;
          if (!this.activePress || BB.isHeld(this.activePress.button) && (VB = this.activePress.target, yB = this.focused, null !== VB.recipe ? td(yB).recipe === VB.recipe : yB === VB.element) || this.releasePress(), this.scrollStickClick.update(BB.rightStick, TB), !this.handleHotbarPick(BB, dB)) {
            for (const [VB, yB] of Wd) {
              const pB = (0, oB.m)(yB);
              if (!BB.wasPressed(pB) || "openButton" === VB && !qd()) continue;
              if ("RS" === pB && !this.scrollStickClick.allowsClick(TB)) continue;
              const lB = this.focusContext(dB),
                JB = XT(VB, lB);
              JB && this.runIntent(JB, lB, pB, dB)
            }
            this.handleDrop(BB, TB, dB)
          }
        }
        handleHotbarPick(BB, TB) {
          const dB = this.hotbarPick;
          if (!dB) return !1;
          const VB = BB.wasPressed((0, oB.m)("inventoryPrimary")) || BB.wasPressed((0, oB.m)("inventoryHotbarSwap"));
          if (!VB && !BB.wasPressed((0, oB.m)("inventoryClose")) && !TB.isHolding()) return !(BB.wasPressed((0, oB.m)("inventory")) && qd());
          const yB = this.focusTarget;
          VB && "hotbar" === (null === yB || void 0 === yB ? void 0 : yB.panel) && null !== yB.idx && yB.idx !== dB.idx && (TB.swapWithHotbar(yB.idx, dB.idx), this.afterAction()), this.hotbarPick = null;
          const pB = dB.element.isConnected ? this.getTargets().byElement.get(dB.element) : void 0;
          return pB && this.setFocus(pB), !0
        }
        startHotbarPick(BB) {
          var TB;
          const {
            targets: dB,
            byElement: VB
          } = this.getTargets(), yB = document.querySelector(Zd), pB = null !== (TB = yB && VB.get(yB)) && void 0 !== TB ? TB : dB.find((BB => "hotbar" === BB.panel));
          pB && this.focused && (this.hotbarPick = {
            idx: BB,
            element: this.focused
          }, this.setFocus(pB))
        }
        focusKey() {
          return this.focused ? xT(this.focused) : null
        }
        handleDrop(BB, TB, dB) {
          const VB = (0, oB.m)("inventoryDrop");
          if (BB.wasPressed(VB)) {
            const BB = (yB = this.focusContext(dB)).holding ? {
              kind: "Dg"
            } : "slot" === yB.kind && yB.slotHasItem && null !== yB.idx ? {
              kind: "slot",
              idx: yB.idx
            } : null;
            return void(BB && (this.dropFrom(BB, !1, dB), this.dropLatch.press(BB, this.focusKey(), TB, HB.c[(0, LB.h)().tapHoldTime].dropStackMs), this.afterAction()))
          }
          var yB;
          const pB = this.dropLatch.update(BB.isHeld(VB), this.focusKey(), TB);
          pB && ((BB, TB, dB) => "Dg" === BB.kind ? TB : !TB && dB(BB.idx))(pB, dB.isHolding(), dB.hasItemAt) && (this.dropFrom(pB, !0, dB), this.afterAction())
        }
        dropFrom(BB, TB, dB) {
          "Dg" === BB.kind ? dB.dropHeld(TB, this.slotPoint()) : dB.dropSlot(BB.idx, TB)
        }
        slotPoint() {
          return this.pointer ? {
            clientX: this.pointer.x,
            clientY: this.pointer.y
          } : this.lastRect ? (BB => {
            const TB = eT(BB);
            return {
              clientX: TB.x,
              clientY: TB.y
            }
          })(this.lastRect) : {
            clientX: 0,
            clientY: 0
          }
        }
        runIntent(BB, TB, dB, VB) {
          const yB = TB.idx,
            pB = TB.actionElement;
          switch (pB && xd.has(BB) && (0, EB.q)(pB), BB) {
            case "slotPrimary":
              VB.primary(yB, this.slotPoint());
              break;
            case "slotSecondary":
              VB.secondary(yB, this.slotPoint());
              break;
            case "slotQuickMove":
              VB.quickMove(yB, this.slotPoint());
              break;
            case "hotbarPick":
              this.startHotbarPick(yB);
              break;
            case "pressPrimary":
            case "pressSecondary":
              this.startPress(TB.press, "pressPrimary" === BB ? "primary" : "secondary", dB);
              break;
            case "click":
              MT(pB, iT(pB));
              break;
            case "openKeyboard":
              mT(pB) && wT(pB);
              break;
            case "pressBack":
              TB.press.back();
              break;
            case "cancel":
              VB.cancel();
              break;
            case "close":
              return this.releasePress(), void VB.close()
          }
          this.afterAction()
        }
        startPress(BB, TB, dB) {
          this.releasePress(), BB.press(TB) && (this.activePress = {
            handlers: BB,
            button: dB,
            target: td(this.focused)
          })
        }
        releasePress() {
          var BB, TB, dB;
          null === (BB = this.activePress) || void 0 === BB || null === (TB = (dB = BB.handlers).release) || void 0 === TB || TB.call(dB), this.activePress = null
        }
        afterAction() {
          this.targets.invalidate(), this.hover.invalidate()
        }
        publishState(BB) {
          ((BB, TB) => {
            var dB, VB, yB, pB, lB, JB;
            return BB.showing === TB.showing && BB.kind === TB.kind && BB.holding === TB.holding && BB.slotHasItem === TB.slotHasItem && (null === (dB = BB.pressHints) || void 0 === dB ? void 0 : dB.primary) === (null === (VB = TB.pressHints) || void 0 === VB ? void 0 : VB.primary) && (null === (yB = BB.pressHints) || void 0 === yB ? void 0 : yB.secondary) === (null === (pB = TB.pressHints) || void 0 === pB ? void 0 : pB.secondary) && (null === (lB = BB.pressHints) || void 0 === lB ? void 0 : lB.back) === (null === (JB = TB.pressHints) || void 0 === JB ? void 0 : JB.back) && BB.hasCategories === TB.hasCategories && BB.hasList === TB.hasList && BB.openButtonCloses === TB.openButtonCloses && BB.steppingSlots === TB.steppingSlots && BB.hotbarPicking === TB.hotbarPicking && BB.quickMoveToHotbar === TB.quickMoveToHotbar && BB.dropStackHold === TB.dropStackHold
          })(BB, this.state) || (this.state = BB, gB.h.yH(Kd.d, BB))
        }
      },
      nd = ["pointermove", "pointerover", "pointerout", "mouseover", "mouseout"];
    var ed = dB(7552);
    var BV = dB(8023);
    const TV = {
        duration: 80,
        strongMagnitude: .2,
        weakMagnitude: .2,
        needsPadInUse: !1
      },
      dV = {
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
          ...TV,
          minIntervalMs: 1e3
        },
        preview: {
          ...TV,
          minIntervalMs: 0
        }
      };
    const VV = new class {
        constructor(BB) {
          this.deps = BB, this.lastPlayedMs = {}, this.loggedFailure = !1, this.logFailure = BB => {
            this.loggedFailure || (this.loggedFailure = !0, console.warn("Controller vibration failed; further failures are not logged.", BB))
          }
        }
        play(BB, TB) {
          const dB = dV[BB];
          if (!this.deps.isVibrationOn() || dB.needsPadInUse && !this.deps.isPadInUse()) return !1;
          const VB = this.lastPlayedMs[BB];
          if (void 0 !== VB && TB - VB < dB.minIntervalMs) return !1;
          const yB = this.deps.getActuator();
          if (!yB) return !1;
          this.lastPlayedMs[BB] = TB;
          const {
            duration: pB,
            strongMagnitude: lB,
            weakMagnitude: JB
          } = dB;
          try {
            yB.playEffect("dual-rumble", {
              duration: pB,
              strongMagnitude: lB,
              weakMagnitude: JB
            }).catch(this.logFailure)
          } catch (YB) {
            this.logFailure(YB)
          }
          return !0
        }
      }({
        getActuator: () => (BB => {
          const TB = null === BB || void 0 === BB ? void 0 : BB.vibrationActuator;
          return "function" === typeof(null === TB || void 0 === TB ? void 0 : TB.playEffect) ? TB : null
        })(lB.e.getActiveGamepad()),
        isVibrationOn: () => (0, LB.h)().vibration,
        isPadInUse: OB.k
      }),
      yV = BB => {
        VV.play(BB, performance.now())
      };
    var pV = dB(7555),
      lV = dB(2465),
      JV = dB(105),
      YV = dB(33),
      gV = dB(965);
    class oV {
      constructor(BB) {
        this.deps = BB
      }
      check() {
        let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const TB = this.deps.isPadActive() ? this.deps.getPadFamily() : null;
        if (!TB) return "skipped";
        const dB = BB ? this.deps.getVisitId() : this.deps.peekVisitId();
        return null === dB || this.deps.readReportedVisitId() === dB ? "skipped" : this.deps.canReport() ? (this.deps.writeReportedVisitId(dB), this.deps.yD(TB, this.deps.getInputType()), "reported") : "notReady"
      }
    }
    const kV = "controllerUsageReportedVisit";
    var LV = dB(1235),
      OV = dB(1596),
      DV = dB(586),
      uV = dB(1317),
      HV = dB(1133);
    const EV = BB => ({
        translationKey: `controller:${BB}`
      }),
      vV = {
        A: "A",
        B: "B",
        X: "X",
        Y: "Y",
        LB: "LB",
        RB: "RB",
        LT: "LT",
        RT: "RT",
        View: EV("padButtonView"),
        Menu: EV("padButtonMenu"),
        LS: "L3",
        RS: "R3",
        Up: EV("padButtonDpadUp"),
        Down: EV("padButtonDpadDown"),
        Left: EV("padButtonDpadLeft"),
        Right: EV("padButtonDpadRight"),
        Home: EV("padButtonHome"),
        LeftStick: EV("padButtonLeftStick"),
        RightStick: EV("padButtonRightStick")
      },
      mV = {
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
          View: EV("padButtonCreate"),
          Menu: EV("padButtonOptions")
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
      iV = (BB, TB) => {
        var dB;
        const VB = null !== (dB = mV[BB][TB]) && void 0 !== dB ? dB : vV[TB];
        return "string" === typeof VB ? VB : (0, yB.v)(HV.f.get().getCurrentLanguageCode(), VB.translationKey)
      },
      NV = BB => {
        let {
          glyph: TB,
          family: dB,
          className: VB
        } = BB;
        const yB = (0, OB.A)(),
          pB = null !== dB && void 0 !== dB ? dB : yB,
          lB = (0, pV.h)(pB, TB);
        return (0, aB.jsx)("span", {
          className: RB()("ControllerGlyph", VB),
          role: "img",
          "aria-label": iV(pB, TB),
          style: {
            "--pad-glyph-mask": `url(${lB})`,
            "--pad-glyph-aspect": (0, pV.e)(pB, TB)
          }
        })
      };
    var tV = dB(1657);
    const fV = BB => {
      let {
        action: TB
      } = BB;
      const {
        t: dB
      } = (0, yB.z)();
      switch (TB.kind) {
        case "reload":
          return (0, aB.jsx)("span", {
            children: dB("controller:gameplayReload")
          });
        case "specialAction":
          return null;
        case "customButton":
          return (0, aB.jsx)(tV.e, {
            text: TB.description ? [{
              icon: TB.icon
            }, ` ${TB.description}`] : [{
              icon: TB.icon
            }]
          });
        case "touchButton":
          return (0, aB.jsx)(tV.e, {
            text: TB.label
          })
      }
    };
    var sV = dB(8031);
    const MV = BB => {
      let {
        hold: TB
      } = BB;
      return (0, aB.jsx)("div", {
        className: "DropStackFillTrack",
        style: {
          "--pad-drop-stack-hold": `${TB.holdMs}ms`
        },
        children: (0, aB.jsx)("div", {
          className: "DropStackFillBar"
        })
      }, TB.id)
    };
    var zV = dB(8050),
      wV = dB(8058),
      UV = dB(8067),
      FV = dB(8045);
    const KV = () => {
        const {
          gameState: BB
        } = (0, YB.m)(["gameState"]), TB = (0, OB.z)(), [VB, yB] = (0, PB.useState)(!1), [pB, lB] = (0, PB.useState)(!1);
        return (0, PB.useEffect)((() => {
          "inGame" === BB && yB(!0)
        }), [BB]), (0, PB.useEffect)((() => {
          if (!VB) return;
          let BB = null,
            TB = !1;
          return (DV.p ? Promise.all([dB.e(64), dB.e(228), dB.e(182), dB.e(202), dB.e(78)]).then((() => dB(39269))).then((BB => BB.startWasmPadGameplay)) : Promise.all([dB.e(215), dB.e(64), dB.e(214), dB.e(67), dB.e(66), dB.e(65), dB.e(88), dB.e(206), dB.e(173), dB.e(211), dB.e(126), dB.e(185), dB.e(207), dB.e(77), dB.e(222), dB.e(205), dB.e(201), dB.e(106), dB.e(68), dB.e(223), dB.e(182), dB.e(87)]).then((() => dB(39400))).then((BB => BB.startPadGameplay))).then((dB => {
            TB || (BB = dB())
          })).catch((BB => {
            console.error("Pad gameplay failed to load", BB), TB || lB(!0)
          })), () => {
            var dB;
            TB = !0, null === (dB = BB) || void 0 === dB || dB()
          }
        }), [VB]), (0, PB.useEffect)((() => {
          pB && TB && (lB(!1), LV.NotificationProvider.showPromptPopup({
            title: "controller:gameplayLoadFailedTitle",
            subtitle: "controller:gameplayLoadFailedSubtitle",
            confirmText: "settingsMenu:reloadPagePopupConfirm",
            confirmTooltip: "",
            cancelText: "general:cancel",
            cancelTooltip: ""
          }).getResult().then((BB => {
            !0 === BB && (0, OV.reloadBloxd)()
          })))
        }), [pB, TB]), (0, aB.jsxs)(aB.Fragment, {
          children: [(0, aB.jsx)(rV, {}), (0, aB.jsx)(IV, {}), (0, aB.jsx)(cV, {})]
        })
      },
      rV = () => {
        const {
          t: BB
        } = (0, yB.z)(), TB = (0, OB.z)(), {
          gameState: dB,
          isUiHidden: VB
        } = (0, YB.m)(["gameState", "isUiHidden"]), {
          hideButtonHints: pB
        } = (0, LB.r)(), lB = (0, sV.i)(), JB = (0, sV.k)(), [gB, kB] = (0, PB.useState)(UV.e);
        return (0, uV.e)(FV.k, kB), !TB || pB || VB || "inGame" !== dB || !lB && !gB ? null : (0, aB.jsxs)("div", {
          className: "PadActionHint SmallTextBold",
          children: [lB && (0, aB.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, aB.jsx)(NV, {
              glyph: (0, oB.m)("actionButton")
            }), (0, aB.jsx)(fV, {
              action: lB
            }), JB && (0, aB.jsx)("span", {
              className: "PadActionHintMore",
              children: BB("controller:gameplayActionWheelHint")
            })]
          }), gB && (0, aB.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, aB.jsx)(NV, {
              glyph: (0, oB.m)("aE")
            }), (0, aB.jsx)("span", {
              children: BB("controller:gameplayPickBlock")
            })]
          })]
        })
      },
      IV = () => {
        const {
          t: BB
        } = (0, yB.z)(), TB = (0, OB.z)(), {
          gameState: dB,
          isUiHidden: VB
        } = (0, YB.m)(["gameState", "isUiHidden"]), [pB, lB] = (0, PB.useState)(zV.d);
        return (0, uV.e)(FV.j, lB), TB && !VB && "inGame" === dB && pB ? (0, aB.jsxs)("div", {
          className: "PadDropStackFill SmallTextBold",
          children: [(0, aB.jsx)("span", {
            children: BB("controller:gameplayDropStack")
          }), (0, aB.jsx)(MV, {
            hold: pB
          })]
        }) : null
      },
      cV = () => {
        const {
          t: BB
        } = (0, yB.z)(), TB = (0, OB.z)(), {
          gameState: dB,
          isUiHidden: VB
        } = (0, YB.m)(["gameState", "isUiHidden"]), {
          hideButtonHints: pB
        } = (0, LB.r)(), [lB, JB] = (0, PB.useState)(wV.c);
        return (0, uV.e)(FV.i, JB), TB && !VB && "inGame" === dB && lB ? (0, aB.jsxs)("div", {
          className: "PadAttackLatchedHint SmallTextBold",
          children: [!pB && (0, aB.jsx)(NV, {
            glyph: (0, oB.m)("attack")
          }), (0, aB.jsx)("span", {
            children: BB("controller:gameplayAttackLatched")
          })]
        }) : null
      };
    var SV = dB(8070),
      PV = dB(1708),
      QV = dB(2139),
      RV = dB(7532);
    const aV = BB => BB && !(0, SV.e)(PV.c.get("shopInfo")),
      ZV = () => {
        const BB = "inGame" === (0, YB.m)(["gameState"]).gameState;
        return (0, QV.i)("shopInfo", (() => {
          (0, RV.j)(aV(BB))
        })), (0, PB.useEffect)((() => {
          (0, RV.j)(aV(BB))
        }), [BB]), null
      },
      XV = () => {
        const {
          t: BB
        } = (0, yB.z)(), {
          hideButtonHints: TB
        } = (0, LB.r)();
        (0, OB.A)();
        const dB = (0, Kd.j)();
        return (0, PB.useEffect)((() => (() => {
          const BB = kB.d.register({
              name: "inventory",
              isActive: bd.isActive,
              onFrame: bd.onFrame,
              onDeactivate: bd.onDeactivate,
              wakePressActs: bd.wakePressActs
            }),
            TB = BB => {
              bd.noteRealPointer(BB), bd.shouldBlockRealPointer(BB) && BB.stopPropagation()
            };
          for (const lB of nd) window.addEventListener(lB, TB, !0);
          const dB = (0, hT.k)((() => {
              "inventory" !== kB.d.getActiveConsumerName() && bd.forgetSurface()
            })),
            VB = BB => {
              const TB = BB.target;
              (0, OB.k)() && nB(TB) && TB.closest(Od) && (0, hT.i)() && (0, hT.r)(TB)
            };
          document.addEventListener("focusout", VB, !0);
          const {
            invalidate: yB,
            onScroll: pB
          } = bd.targets;
          return document.addEventListener("scroll", pB, !0), window.addEventListener("resize", yB), () => {
            BB(), dB();
            for (const BB of nd) window.removeEventListener(BB, TB, !0);
            document.removeEventListener("scroll", pB, !0), document.removeEventListener("focusout", VB, !0), window.removeEventListener("resize", yB), bd.targets.disconnect()
          }
        })()), []), (0, aB.jsxs)(aB.Fragment, {
          children: [(0, aB.jsx)(hB, {
            placer: bd.ring,
            className: "InventorySlotCursorRing"
          }), dB.showing && !TB && (0, aB.jsx)("div", {
            className: "InventorySlotCursorHints SmallTextBold",
            children: WT(dB).map((TB => {
              let {
                actions: VB,
                labelKey: yB
              } = TB;
              return (0, aB.jsxs)("div", {
                className: "InventorySlotCursorHint",
                children: [VB.map((BB => (0, aB.jsx)(NV, {
                  glyph: (0, oB.m)(BB)
                }, BB))), (0, aB.jsx)("span", {
                  children: BB(`controller:${yB}`)
                }), "inventoryDrop" === yB && dB.dropStackHold && (0, aB.jsx)(MV, {
                  hold: dB.dropStackHold
                })]
              }, yB)
            }))
          })]
        })
      },
      WV = [{
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
      hV = BB => Array.from(BB).map((BB => ({
        type: "char",
        char: BB,
        width: 1
      }))),
      CV = function(BB) {
        return {
          type: "command",
          command: BB,
          width: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
        }
      },
      GV = [CV("page", 2), CV("otherPage"), CV("caretLeft"), CV("space", 3), CV("caretRight"), CV("close", 1.5), CV("submit", 1.5)],
      qV = [CV("page", 2), CV("otherPage"), CV("caretLeft"), CV("space", 2), CV("caretRight"), CV("newline"), CV("close", 1.5), CV("submit", 1.5)],
      xV = [
        [...hV("1234567890"), CV("backspace")], hV("qwertyuiop/"), hV("asdfghjkl'?"), [CV("shift", 2), ...hV("zxcvbnm,.")]
      ],
      jV = [
        [...hV("1234567890"), CV("backspace")], hV("!@#$%^&*()/"), hV('-_=+[]{};:"'), hV("~`|\\<>'\u20ac\xa3,.")
      ],
      AV = {
        letters: xV,
        accents: [
          [...hV("1234567890"), CV("backspace")], hV("\xe1\xe9\xed\xf3\xfa\xe0\xe8\xec\xf2\xf9\xf1"), hV("\xe2\xea\xee\xf4\xfb\xe4\xeb\xef\xf6\xfc\xe7"), [CV("shift", 2), ...hV("\xe3\xf5\xdf\u0153\u011f\u015f\u0131\xbf\xa1")]
        ],
        symbols: jV
      },
      bV = new Set(["de", "es", "fr", "it", "nl", "pt", "pt-BR", "tr", "vi"]),
      nV = (BB, TB) => "letters" === BB ? TB ? {
        page: "accents",
        otherPage: "symbols"
      } : {
        page: "symbols",
        otherPage: "accents"
      } : {
        page: "letters",
        otherPage: "accents" === BB ? "symbols" : "accents"
      },
      eV = function(BB, TB) {
        const dB = ((BB, TB) => [...AV[BB], TB ? qV : GV])(BB, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]);
        if (0 === TB) return dB;
        const VB = Math.min(2, By(dB[0]) / TB);
        return [Array.from({
          length: TB
        }, ((BB, TB) => ({
          type: "phrase",
          phraseIndex: TB,
          width: VB
        }))), ...dB]
      },
      By = BB => BB.reduce(((BB, TB) => BB + TB.width), 0),
      Ty = BB => Math.max(...BB.map(By)),
      dy = (BB, TB) => {
        const dB = BB[TB.row];
        let VB = (Ty(BB) - By(dB)) / 2;
        for (let yB = 0; yB < TB.col; yB++) VB += dB[yB].width;
        return VB + dB[TB.col].width / 2
      },
      Vy = (BB, TB, dB) => {
        let VB = 0,
          yB = 1 / 0;
        for (let pB = 0; pB < BB[TB].length; pB++) {
          const lB = Math.abs(dy(BB, {
            row: TB,
            col: pB
          }) - dB);
          lB < yB - 1e-9 && (VB = pB, yB = lB)
        }
        return VB
      },
      yy = (BB, TB) => {
        const dB = Math.max(0, Math.min(BB.length - 1, TB.row));
        return {
          row: dB,
          col: Math.max(0, Math.min(BB[dB].length - 1, TB.col))
        }
      },
      py = (BB, TB, dB) => "once" === BB && TB - dB <= 400 ? "caps" : "off" === BB ? "once" : "off",
      ly = (BB, TB) => "once" === BB && (BB => BB.toLowerCase() !== BB.toUpperCase())(TB) ? "off" : BB,
      Jy = (BB, TB, dB) => {
        if ("symbols" === TB || "off" === dB) return BB;
        const VB = BB.toUpperCase();
        return 1 === VB.length ? VB : BB
      };
    var Yy = dB(1564),
      gy = dB(7994),
      oy = dB(8079),
      ky = dB(270),
      Ly = dB(1507),
      Oy = dB(7513);
    const Dy = "[data-pad-secondary]",
      uy = BB => BB instanceof HTMLElement && gT(BB) && !oT(BB),
      Hy = BB => {
        const TB = BB.querySelector(Dy);
        if (TB && uy(TB)) return TB;
        for (const yB of null !== (dB = null === (VB = BB.parentElement) || void 0 === VB ? void 0 : VB.children) && void 0 !== dB ? dB : []) {
          var dB, VB;
          if (yB !== BB && yB.matches(Dy) && uy(yB)) return yB
        }
        return null
      },
      Ey = (BB, TB, dB, VB) => Math.max(0, Math.max(BB, dB) - Math.min(TB, VB)),
      vy = (BB, TB, dB, VB) => Math.max(0, Math.min(TB, VB) - Math.max(BB, dB)),
      my = (BB, TB, dB) => {
        const VB = (BB.left + BB.right) / 2,
          yB = (BB.top + BB.bottom) / 2,
          pB = (TB.left + TB.right) / 2,
          lB = (TB.top + TB.bottom) / 2;
        if ("Left" === dB || "Right" === dB) {
          const JB = "Right" === dB ? 1 : -1;
          return {
            forwardGap: "Right" === dB ? TB.left - BB.right : BB.left - TB.right,
            centreForward: (pB - VB) * JB,
            sidewaysGap: Ey(BB.top, BB.bottom, TB.top, TB.bottom),
            sidewaysOverlap: vy(BB.top, BB.bottom, TB.top, TB.bottom),
            centreSideways: Math.abs(lB - yB),
            startSideways: Math.abs(TB.top - BB.top),
            fromSidewaysSize: BB.bottom - BB.top,
            toSidewaysSize: TB.bottom - TB.top,
            toLength: TB.right - TB.left
          }
        }
        const JB = "Down" === dB ? 1 : -1;
        return {
          forwardGap: "Down" === dB ? TB.top - BB.bottom : BB.top - TB.bottom,
          centreForward: (lB - yB) * JB,
          sidewaysGap: Ey(BB.left, BB.right, TB.left, TB.right),
          sidewaysOverlap: vy(BB.left, BB.right, TB.left, TB.right),
          centreSideways: Math.abs(pB - VB),
          startSideways: Math.abs(TB.left - BB.left),
          fromSidewaysSize: BB.right - BB.left,
          toSidewaysSize: TB.right - TB.left,
          toLength: TB.bottom - TB.top
        }
      },
      iy = BB => BB.centreForward > .5 && BB.forwardGap >= -BB.toLength / 2,
      Ny = BB => {
        const TB = BB.sidewaysOverlap > 0 ? 0 : 2 * BB.fromSidewaysSize,
          dB = BB.fromSidewaysSize > 1.5 * BB.toSidewaysSize ? BB.startSideways : BB.centreSideways;
        return Math.max(0, BB.forwardGap) + 3 * BB.sidewaysGap + TB + .1 * dB
      },
      ty = (BB, TB) => vy(BB.top, BB.bottom, TB.top, TB.bottom) > 0 || TB.bottom - TB.top > TB.right - TB.left,
      fy = (BB, TB, dB, VB, yB, pB) => {
        const lB = yB ? My(BB, TB, dB, yB) : new Set,
          JB = wy(BB, TB, dB, lB);
        return JB < 0 && lB.size > 0 && pB ? sy(BB, TB, dB, pB) : VB && JB >= 0 ? zy(BB, TB, dB, VB, JB, lB) : JB
      },
      sy = (BB, TB, dB, VB) => {
        const yB = new Set,
          pB = wy(BB, TB, "Up", yB) >= 0,
          lB = wy(BB, TB, "Down", yB) >= 0,
          JB = new Set;
        return TB.forEach(((TB, dB) => {
          const yB = TB.top + TB.bottom < BB.top + BB.bottom;
          VB[dB] && !(yB ? pB : lB) || JB.add(dB)
        })), wy(BB, TB, dB, JB)
      },
      My = (BB, TB, dB, VB) => {
        const yB = new Set;
        return "Left" !== dB && "Right" !== dB || TB.forEach(((TB, dB) => {
          VB[dB] && vy(BB.top, BB.bottom, TB.top, TB.bottom) <= 0 && yB.add(dB)
        })), yB
      },
      zy = (BB, TB, dB, VB, yB, pB) => {
        const lB = my(BB, TB[yB], dB).forwardGap;
        let JB = yB,
          YB = VB[yB],
          gB = 1 / 0;
        return TB.forEach(((TB, oB) => {
          const kB = VB[oB];
          if (pB.has(oB) || kB < YB || kB === YB && JB === yB) return;
          const LB = my(BB, TB, dB);
          if (!iy(LB) || LB.forwardGap < 0 || LB.forwardGap >= lB) return;
          const OB = Ny(LB);
          (kB > YB || OB < gB) && (JB = oB, YB = kB, gB = OB)
        })), JB
      },
      wy = (BB, TB, dB, VB) => {
        let yB = -1,
          pB = 1 / 0;
        if (TB.forEach(((TB, lB) => {
            const JB = ((BB, TB, dB) => {
              const VB = my(BB, TB, dB);
              if (!iy(VB)) return null;
              const yB = Math.max(0, VB.forwardGap);
              return VB.sidewaysOverlap <= 0 && VB.sidewaysGap > 2 * (yB + 1) ? null : Ny(VB)
            })(BB, TB, dB);
            null !== JB && JB < pB && !VB.has(lB) && (pB = JB, yB = lB)
          })), yB < 0) return -1;
        const lB = TB[yB],
          JB = my(BB, lB, dB).forwardGap;
        let YB = JB,
          gB = yB;
        return TB.forEach(((TB, pB) => {
          if (pB === yB || VB.has(pB) || !((BB, TB, dB) => {
              const VB = "Left" === dB || "Right" === dB,
                yB = VB ? vy(BB.top, BB.bottom, TB.top, TB.bottom) : vy(BB.left, BB.right, TB.left, TB.right),
                pB = VB ? Math.min(BB.bottom - BB.top, TB.bottom - TB.top) : Math.min(BB.right - BB.left, TB.right - TB.left);
              return yB > 0 && yB >= pB / 2
            })(TB, lB, dB)) return;
          const oB = my(BB, TB, dB);
          iy(oB) && oB.forwardGap + oB.toLength <= JB + 1 && oB.forwardGap < YB && (YB = oB.forwardGap, gB = pB)
        })), gB
      },
      Uy = (BB, TB) => {
        let dB = -1,
          VB = 1 / 0;
        return TB.forEach(((TB, yB) => {
          const pB = Math.max(TB.left - BB.x, 0, BB.x - TB.right),
            lB = Math.max(TB.top - BB.y, 0, BB.y - TB.bottom),
            JB = Math.hypot(pB, lB);
          JB < VB && (VB = JB, dB = yB)
        })), dB
      },
      Fy = (BB, TB) => {
        const dB = Math.min(BB.bottom - BB.top, TB.bottom - TB.top) / 2;
        return Math.abs(BB.top - TB.top) > dB ? BB.top - TB.top : BB.left - TB.left
      },
      Ky = BB => {
        let TB = -1;
        for (let dB = 0; dB < BB.length; dB++)(TB < 0 || Fy(BB[dB], BB[TB]) < 0) && (TB = dB);
        return TB
      };
    var ry = dB(8085),
      Iy = dB(8094);
    const cy = BB => {
        if ("death" !== BB || "inGame" !== YB.d.get("gameState") || "off" === (0, LB.h)().quickChat || null === (0, Yy.d)()) return !1;
        const TB = (0, oB.m)("chat");
        return TB !== (0, oB.m)("menuConfirm") && TB !== (0, oB.m)("menuBack")
      },
      Sy = new ry.e;
    var Py = dB(3767),
      Qy = dB(8103);
    const Ry = BB => {
        let TB = null;
        for (const dB of BB.querySelectorAll("[data-pad-tabs]")) gT(dB) && (!TB || Number(dB.dataset.padTabs) < Number(TB.dataset.padTabs)) && (TB = dB);
        return TB
      },
      ay = (BB, TB, dB, VB) => {
        BB.focusWhenFound((() => {
          const yB = BB.pickInitial(TB);
          if (yB && !dB.has(yB) && (null === VB || void 0 === VB || !VB.contains(yB))) return yB;
          const pB = ((BB, TB) => {
              const dB = TB => BB.getEnabledCandidates(TB).filter((BB => !BB.closest("[data-pad-tabs]")));
              for (const VB of vT(TB)) {
                const BB = dB(VB);
                if (BB.length > 0) return BB
              }
              return dB(TB)
            })(BB, TB).filter((BB => !dB.has(BB))),
            lB = Ky(pB.map((BB => BB.getBoundingClientRect())));
          return lB >= 0 ? pB[lB] : null
        }), 3e3)
      },
      Zy = (BB, TB, dB, VB) => {
        var yB;
        const pB = ((BB, TB) => {
          if (0 === BB.length) return null;
          const dB = BB.findIndex((BB => "true" === BB.dataset.padSelected));
          return dB < 0 ? TB > 0 ? BB[0] : BB[BB.length - 1] : BB[(dB + TB + BB.length) % BB.length]
        })([...dB.querySelectorAll("[data-pad-tab]")].filter((BB => gT(BB) && !oT(BB))), VB);
        if (!pB) return;
        const lB = null !== (yB = null === BB || void 0 === BB ? void 0 : BB.getFocused()) && void 0 !== yB ? yB : null,
          JB = !(null === lB || void 0 === lB || !lB.isConnected) && dB.contains(lB),
          YB = BB && !JB ? new Set(BB.getEnabledCandidates(TB)) : null;
        UT(pB), BB && (YB ? ay(BB, TB, YB, dB) : BB.setFocus(pB, {
          byUser: !0
        }))
      },
      Xy = BB => {
        var TB;
        const dB = cB(null !== (TB = wB(BB, "x")) && void 0 !== TB ? TB : BB),
          VB = OT(BB).filter((BB => !oT(BB))),
          yB = VB.filter((BB => SB(BB.getBoundingClientRect(), dB)));
        return (yB.length > 0 ? yB : VB).sort(((BB, TB) => Fy(BB.getBoundingClientRect(), TB.getBoundingClientRect())))
      },
      Wy = (BB, TB, dB) => {
        const VB = [...TB.querySelectorAll("[data-pad-row]")].filter(gT),
          yB = BB.getFocused(),
          pB = yB ? VB.findIndex((BB => BB.contains(yB))) : -1;
        let lB = 0,
          JB = dB > 0 ? 0 : VB.length - 1;
        if (pB >= 0 && yB) lB = Math.max(0, Xy(VB[pB]).indexOf(yB)), JB = pB + dB;
        else if (yB) {
          const BB = yB.getBoundingClientRect(),
            TB = VB.map((TB => {
              const VB = TB.getBoundingClientRect();
              return dB > 0 ? VB.top >= BB.top : VB.bottom <= BB.bottom
            }));
          JB = dB > 0 ? TB.indexOf(!0) : TB.lastIndexOf(!0)
        }
        for (let YB = JB; YB >= 0 && YB < VB.length; YB += dB) {
          const TB = Xy(VB[YB]);
          if (TB.length > 0) return void BB.setFocus(TB[Math.min(lB, TB.length - 1)], {
            byUser: !0
          })
        }
      },
      hy = (BB, TB, dB) => {
        var VB, yB;
        const pB = null !== (VB = null === BB || void 0 === BB ? void 0 : BB.getFocused()) && void 0 !== VB ? VB : null,
          lB = null !== pB && void 0 !== pB && pB.closest("[data-pad-row]") ? "x" : "y",
          JB = null !== (yB = pB ? wB(pB, lB, TB) : null) && void 0 !== yB ? yB : FB(TB, lB);
        if (!JB) return;
        const YB = pB ? iT(pB) : null;
        if (IB(JB, lB, dB * ("y" === lB ? JB.clientHeight : JB.clientWidth) * .85), !BB || !YB) return;
        const gB = cB(JB),
          oB = BB.getEnabledCandidates(TB).filter((BB => JB.contains(BB) && SB(BB.getBoundingClientRect(), gB))),
          kB = Uy(YB, oB.map((BB => BB.getBoundingClientRect())));
        kB >= 0 && BB.setFocus(oB[kB], {
          scroll: !1,
          byUser: !0
        })
      };
    let Cy = null;
    const Gy = (BB, TB) => {
        var dB, VB;
        const yB = TB.querySelector("[data-pad-friends-column]"),
          pB = BB.getFocused();
        if (!yB || !pB || !yB.contains(pB)) return !1;
        const lB = BB.getEnabledCandidates(TB).filter((BB => !yB.contains(BB))),
          JB = Uy(iT(pB), lB.map((BB => BB.getBoundingClientRect()))),
          YB = null === (dB = Cy) || void 0 === dB ? void 0 : dB.deref();
        return BB.setFocus(null !== YB && void 0 !== YB && YB.isConnected ? YB : null !== (VB = lB[JB]) && void 0 !== VB ? VB : null, {
          byUser: !0
        }), !0
      },
      qy = BB => {
        const TB = (0, oB.m)(BB);
        return (0, DB.G)(TB) || Oy.q.some((BB => (0, oB.m)(BB) === TB)) ? null : TB
      },
      xy = (BB, TB) => {
        const dB = qy(TB);
        return null !== dB && BB.wasPressed(dB)
      },
      jy = function(BB, TB, dB) {
        let VB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const yB = (BB => {
            var TB, dB;
            return null !== (TB = null === (dB = Ry(BB)) || void 0 === dB ? void 0 : dB.querySelector("[data-pad-tab][data-pad-selected='true']")) && void 0 !== TB ? TB : null
          })(TB),
          pB = BB && yB ? new Set(BB.getEnabledCandidates(TB)) : null;
        (0, oy.c)(), dB === ky.m.SETTINGS && (0, Ly.j)(YB.d.get("openEverythingMenuName")) ? YB.d.set({
          openEverythingMenuName: dB
        }) : (0, Ly.s)(new Event("padMenuShortcut"), dB, VB), BB && pB && yB && ay(BB, TB, pB, yB.closest("[data-pad-tabs]"))
      },
      Ay = BB => null !== BB.closest(".Dropdown-root") || null !== BB.querySelector(".Dropdown-root.is-open"),
      by = BB => null !== (0, Qy.b)() && "popup" !== BB.layer.kind && !Ry(BB.root) && !Ay(BB.root),
      ny = (0, uB.d)(DB.Y),
      ey = (0, uB.d)(DB.Y),
      Bp = (BB, TB, dB) => {
        if (((BB, TB) => {
            const dB = (0, oB.m)("chat");
            return cy(TB) && BB.isHeld(dB) ? "hold" === Sy.update(BB.wasPressed(dB), BB.isHeld(dB), performance.now(), HB.c[(0, LB.h)().tapHoldTime].wheelMs) && (kB.d.consumeButton(dB), gB.h.yH(Iy.p), !0) : (Sy.release(), !1)
          })(TB, dB.layer.kind)) return !0;
        const VB = dB.root;
        for (const [lB, JB] of [
            ["menuTabPrevious", -1],
            ["menuTabNext", 1]
          ])
          if (TB.wasPressed((0, oB.m)(lB))) {
            const TB = Ay(VB) ? null : Ry(VB);
            if (TB) Zy(BB, VB, TB, JB);
            else if (by(dB)) {
              var yB;
              const TB = BB ? new Set(BB.getEnabledCandidates(VB)) : null;
              null !== (yB = (0, Qy.b)()) && void 0 !== yB && yB(JB) && BB && TB && ay(BB, VB, TB, null)
            } else BB && Wy(BB, VB, JB);
            return !0
          } for (const [lB, JB, YB] of [
            ["menuPageUp", -1, ny],
            ["menuPageDown", 1, ey]
          ]) {
          const dB = (0, oB.m)(lB);
          if (TB.wasPressed(dB) && YB.reset(), YB.update(TB.isHeld(dB), performance.now())) return hy(BB, VB, JB), !0
        }
        const pB = "popup" === dB.layer.kind;
        return xy(TB, "pause") ? (pB || (0, Ly.o)() && "menu" !== dB.layer.kind || jy(BB, VB, (0, Ly.o)() ? ky.m.SETTINGS : (0, Py.e)()), !0) : !!xy(TB, "leaderboard") && ("home" === dB.layer.kind ? (BB => {
          const TB = [...BB.querySelectorAll("[data-pad-notifications]")].find(gT);
          TB && UT(TB)
        })(VB) : pB || jy(BB, VB, ky.m.LOBBY_LEADERBOARD, "inGame" === YB.d.get("gameState")), !0)
      },
      Tp = (BB, TB, dB) => {
        if (Bp(BB, TB, dB)) return !0;
        const VB = "home" === dB.layer.kind;
        if (TB.wasPressed((0, oB.m)("menuSecondary"))) {
          const TB = BB.getFocused(),
            yB = TB ? Hy(TB) : null;
          if (yB) return UT(yB), !0;
          if (VB) {
            const TB = dB.root.querySelector("[data-pad-search] input");
            return TB && ET(TB, dB.root) ? (BB.setFocus(TB, {
              byUser: !0
            }), UT(TB)) : YB.d.set({
              searchOpen: !0
            }), !0
          }
        }
        return !(!VB || !xy(TB, "inventory")) && (((BB, TB) => {
          var dB, VB;
          const yB = TB.querySelector("[data-pad-friends-column]");
          if (!yB || !gT(yB)) return void(0, Ly.s)(new Event("padMenuShortcut"), ky.m.SOCIAL);
          if (Gy(BB, TB)) return;
          const pB = null !== (dB = null === (VB = yB.querySelector("[data-pad-friends-start]")) || void 0 === VB ? void 0 : VB.getBoundingClientRect().top) && void 0 !== dB ? dB : -1 / 0,
            lB = BB.getEnabledCandidates(yB),
            JB = lB.filter((BB => BB.getBoundingClientRect().top >= pB)),
            YB = JB.length > 0 ? JB : lB,
            gB = Ky(YB.map((BB => BB.getBoundingClientRect())));
          BB.setFocus(gB >= 0 ? YB[gB] : null, {
            byUser: !0
          })
        })(BB, dB.root), !0)
      },
      dp = BB => {
        var TB, dB, VB;
        const yB = RT(BB);
        if (null !== yB) return yB;
        const pB = (null !== (TB = null !== (dB = null !== (VB = BB.getAttribute("aria-label")) && void 0 !== VB ? VB : BB.getAttribute("title")) && void 0 !== dB ? dB : BB.textContent) && void 0 !== TB ? TB : "").replace(/\s+/g, " ").trim();
        return pB ? `${BB.tagName}:${pB.slice(0,100)}` : null
      };
    class Vp {
      constructor() {
        this.remembered = new Map, this.history = []
      }
      enter(BB) {
        const TB = this.history.indexOf(BB);
        if (TB >= 0) {
          for (const BB of this.history.splice(TB + 1)) this.remembered.delete(BB);
          return !0
        }
        return this.remembered.delete(BB), this.history.push(BB), this.history.length > 32 && this.forget(this.history[0]), !1
      }
      forget(BB) {
        this.remembered.delete(BB);
        const TB = this.history.indexOf(BB);
        TB >= 0 && this.history.splice(TB, 1)
      }
      remember(BB, TB, dB, VB) {
        const yB = dp(TB),
          pB = RT(TB),
          lB = null !== pB && ((BB, TB) => {
            let dB = 0;
            for (const VB of BB.querySelectorAll("[data-pad-key], [href]"))
              if ((VB.getAttribute("data-pad-key") === TB || VB.getAttribute("href") === TB) && (dB++, dB > 1)) return !0;
            return !1
          })(dB, pB) ? Math.max(0, this.twins(VB(), pB).indexOf(TB)) : 0;
        this.remembered.set(BB, {
          element: new WeakRef(TB),
          identity: yB,
          ordinal: lB
        })
      }
      has(BB) {
        return this.remembered.has(BB)
      }
      recall(BB, TB) {
        var dB, VB;
        const yB = this.remembered.get(BB);
        if (!yB) return null;
        const pB = yB.element.deref();
        if (pB && TB.includes(pB)) return pB;
        if (null === yB.identity) return null;
        const lB = this.twins(TB, yB.identity);
        return null !== (dB = null !== (VB = lB[yB.ordinal]) && void 0 !== VB ? VB : lB[0]) && void 0 !== dB ? dB : null
      }
      twins(BB, TB) {
        return BB.filter((BB => dp(BB) === TB))
      }
    }
    var yp = dB(1165);
    const pp = BB => {
        const TB = [];
        let dB = BB;
        for (; dB && dB !== document.body;) {
          const BB = getComputedStyle(dB).zIndex;
          "auto" !== BB && TB.push(Number(BB) || 0), dB = dB.parentElement
        }
        return TB.reverse()
      },
      lp = (BB, TB) => {
        const dB = ((BB, TB) => {
          const dB = Math.max(BB.length, TB.length);
          for (let pB = 0; pB < dB; pB++) {
            var VB, yB;
            const dB = (null !== (VB = BB[pB]) && void 0 !== VB ? VB : 0) - (null !== (yB = TB[pB]) && void 0 !== yB ? yB : 0);
            if (0 !== dB) return dB
          }
          return 0
        })(pp(BB), pp(TB));
        if (0 !== dB) return dB > 0;
        if (BB.contains(TB)) return !1;
        if (TB.contains(BB)) return !0;
        const VB = BB.compareDocumentPosition(TB);
        return !!(VB & Node.DOCUMENT_POSITION_PRECEDING) || !(VB & Node.DOCUMENT_POSITION_FOLLOWING) && null
      },
      Jp = (BB, TB) => {
        var dB;
        return null !== (dB = lp(BB.root, TB.root)) && void 0 !== dB ? dB : BB.order > TB.order
      },
      Yp = (BB, TB) => TB.some((TB => !TB.contains(BB) && !BB.contains(TB) && !0 === lp(TB, BB)));
    let gp = null,
      op = null,
      kp = -1;
    const Lp = () => {
        var BB;
        const TB = null === (BB = document.timeline) || void 0 === BB ? void 0 : BB.currentTime,
          dB = "number" === typeof TB ? TB : null;
        if (null !== dB && dB === op && kp === (0, yp.d)()) return gp;
        let VB = null;
        const yB = [],
          pB = [...document.querySelectorAll("[data-pad-covers]")].filter(gT);
        for (const lB of (0, yp.h)()) {
          const BB = lB.getRoot(),
            TB = !!BB && gT(BB) && !Yp(BB, pB);
          if (lB.shown && !TB && yB.push(lB), lB.shown = TB, !BB || !TB) continue;
          const dB = {
            layer: lB,
            root: BB,
            order: lB.order
          };
          VB && !Jp(dB, VB) || (VB = dB)
        }
        gp = VB, op = dB, kp = (0, yp.d)();
        for (const lB of yB)(0, yp.k)(lB);
        return gp
      },
      Op = () => {
        const BB = Lp();
        return !(null === BB || void 0 === BB || !BB.layer.close) && (BB.layer.close(), op = null, !0)
      },
      Dp = () => {
        var BB, TB;
        return null !== (BB = null === (TB = Lp()) || void 0 === TB ? void 0 : TB.root) && void 0 !== BB ? BB : null
      },
      Hp = BB => BB ? {
        ...BB,
        root: Dp()
      } : null;
    let Ep = null,
      vp = null,
      mp = (0, LB.h)().menuNavigation,
      ip = null;
    const Np = new NB;
    let tp = null;
    gB.h.subscribe(LB.f, (() => {
      const BB = (0, LB.h)().menuNavigation;
      BB !== mp && (mp = BB, Ep = null, vp = null)
    }));
    const fp = () => {
        var BB;
        return null !== (BB = Ep) && void 0 !== BB ? BB : (0, LB.h)().menuNavigation
      },
      sp = BB => {
        if (Up()) {
          if (ip = Hp(BB), "hybrid" === fp()) return Np.lock(), void(vp = vp ? null : Dp());
          Ep = "focus" === fp() ? "cursor" : "focus"
        }
      },
      Mp = () => {
        const BB = ip;
        return ip = null, BB
      };
    let zp = {
      root: null,
      firstSeenMs: -1 / 0,
      atMs: -1 / 0,
      has: !1
    };
    const wp = function(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const dB = zp.root === BB,
          VB = dB ? zp.firstSeenMs : TB,
          yB = zp.has || TB - VB > 1e3;
        return (!dB || !yB || TB - zp.atMs > 250) && (zp = {
          root: BB,
          firstSeenMs: VB,
          atMs: TB,
          has: uT(BB)
        }), zp.has
      },
      Up = () => {
        const BB = Dp();
        return null !== BB && wp(BB)
      },
      Fp = () => {
        const BB = Lp();
        return vp && (null === BB || void 0 === BB ? void 0 : BB.root) !== vp && (vp = null), (BB => {
          let {
            mode: TB,
            hasLayer: dB,
            hasCandidates: VB,
            hybridCursorEngaged: yB
          } = BB;
          return dB ? "cursor" !== TB && VB() ? "hybrid" === TB && yB ? "cursor" : "focus" : "cursor" : null
        })({
          mode: fp(),
          hasLayer: null !== BB,
          hasCandidates: () => null !== BB && wp(BB.root),
          hybridCursorEngaged: null !== vp
        })
      },
      Kp = () => "hybrid" === fp() && Up(),
      rp = "pad-focused";
    var Ip = dB(3955),
      cp = dB(4447);
    const Sp = "[data-pad-destructive]",
      Pp = `${Sp}, [data-pad-back]`,
      Qp = BB => ({
        rect: BB.getBoundingClientRect(),
        destructive: BB.matches(Sp),
        closes: null !== BB.closest("[data-pad-close-button]"),
        unavailable: BB.matches("[data-pad-unavailable]")
      }),
      Rp = BB => {
        let {
          destructive: TB,
          closes: dB,
          unavailable: VB
        } = BB;
        return TB ? dB ? 2 : 3 : VB ? 1 : 0
      },
      ap = BB => {
        let TB = -1;
        for (let dB = 0; dB < BB.length; dB++) {
          if (TB < 0) {
            TB = dB;
            continue
          }
          const VB = BB[dB],
            yB = BB[TB];
          Rp(VB) === Rp(yB) ? Fy(VB.rect, yB.rect) < 0 && (TB = dB) : Rp(VB) < Rp(yB) && (TB = dB)
        }
        return TB
      },
      Zp = "[data-pad-tabs]",
      Xp = "[data-pad-tab]",
      Wp = (BB, TB) => {
        const dB = BB.querySelector(`${Xp}[data-pad-selected='true']`);
        return dB && TB.includes(dB) ? dB : null
      },
      hp = (BB, TB) => {
        let dB = TB;
        for (let VB = TB.parentElement; VB && !VB.contains(BB); VB = VB.parentElement) dB = VB;
        return dB
      };
    class Cp {
      constructor() {
        this.contentReturn = null
      }
      redirect(BB, TB, dB, VB) {
        var yB, pB;
        const lB = BB.closest(Zp),
          JB = TB.closest(Zp);
        var YB;
        if (JB && JB !== lB) return lB || (this.contentReturn = new WeakRef(BB)), null !== (YB = Wp(JB, dB)) && void 0 !== YB ? YB : TB;
        if (!lB || JB) return TB;
        const gB = hp(BB, TB),
          oB = null === (yB = this.contentReturn) || void 0 === yB ? void 0 : yB.deref();
        return oB && gB.contains(oB) && dB.includes(oB) ? oB : null !== (pB = this.pickRegionStart(gB, wB(TB, "y", VB), dB)) && void 0 !== pB ? pB : TB
      }
      findTabContent(BB, TB, dB) {
        const VB = BB.closest(Zp);
        if (!VB || !BB.matches(Xp) || VB.contains(TB)) return null;
        const yB = TB.closest(Zp);
        if (yB && Number(yB.dataset.padTabs) <= Number(VB.dataset.padTabs)) return null;
        const pB = hp(BB, TB);
        return dB.some((BB => pB.contains(BB) && !BB.closest(Pp))) || !TB.closest(Pp) ? pB : null
      }
      pickContentStart(BB, TB, dB) {
        return this.contentReturn = null, this.pickRegionStart(BB, wB(BB, "y", dB), TB)
      }
      pickReplacedContentStart(BB, TB, dB, VB) {
        if (!TB.contains(BB)) return null;
        const yB = hp(TB, BB),
          pB = dB.filter((BB => TB.contains(BB) && !yB.contains(BB) && !BB.closest(Pp)));
        return 0 === pB.length ? null : (this.contentReturn = null, this.pickRegionStart(TB, wB(pB[0], "y", VB), pB))
      }
      backToStrip(BB, TB, dB) {
        if (BB.closest(Zp)) return null;
        const VB = Ry(dB);
        for (const yB of dB.querySelectorAll(Zp)) {
          if (Number(yB.dataset.padTabs) <= 1 || yB === VB) continue;
          const pB = Wp(yB, TB),
            lB = pB ? hp(BB, yB).parentElement : null;
          if (pB && lB && lB !== dB && dB.contains(lB)) return this.contentReturn = new WeakRef(BB), pB
        }
        return null
      }
      pickRegionStart(BB, TB, dB) {
        const VB = cB(TB),
          yB = BB => {
            const TB = dB.filter((TB => BB.contains(TB) && !TB.closest(Zp) && SB(TB.getBoundingClientRect(), VB))),
              yB = ap(TB.map(Qp));
            return yB >= 0 ? TB[yB] : null
          };
        for (const pB of vT(BB)) {
          const BB = yB(pB);
          if (BB) return BB
        }
        for (const pB of BB.querySelectorAll(Zp)) {
          const BB = Wp(pB, dB);
          if (BB) return BB
        }
        return yB(BB)
      }
    }
    const Gp = "[data-pad-default-focus], .Dropdown-option.is-selected",
      qp = ".Dropdown-root.is-open > .Dropdown-menu",
      xp = "[data-pad-no-step-in]",
      jp = "[data-pad-tabs]",
      Ap = "[data-pad-press-area]",
      bp = BB => {
        let TB = BB;
        for (let dB = 0; TB && dB <= 4; dB++, TB = TB.parentElement) {
          const dB = TB.querySelector(".CircleInfo");
          if (dB) return TB === BB || TB.querySelectorAll(JT).length <= 1 ? dB : null;
          if (TB !== BB && TB.querySelectorAll(JT).length > 1) return null
        }
        return null
      },
      np = (BB, TB, dB) => {
        zT(BB, TB, dB);
        const VB = null !== BB && void 0 !== BB && BB.isConnected ? bp(BB) : null,
          yB = bp(TB);
        VB !== yB && zT(VB, yB, yB ? iT(yB) : dB, {
          leaveBelow: BB,
          enterBelow: TB
        })
      },
      ep = BB => BB.getBoundingClientRect(),
      Bl = (BB, TB, dB) => {
        const VB = new Set(dB);
        for (let yB = BB; yB; yB = yB === TB ? null : yB.parentElement)
          if (VB.has(yB)) return yB;
        return null
      },
      Tl = (BB, TB) => !BB.root || BB.root === TB || TB.matches(qp) && BB.root.contains(TB);
    const dl = new class {
        constructor() {
          this.focused = null, this.layerKey = null, this.layerRoot = null, this.memory = new Vp, this.tabStripNav = new Cp, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.confirmPressedOn = null, this.confirmRepeatKey = null, this.confirmRepeated = !1, this.confirmRepeat = (0, uB.d)(DB.t), this.dpadRepeats = new Map(DB.D.map((BB => [BB, (0, uB.d)(DB.F)]))), this.stickRepeat = new DB.e((0, uB.d)(DB.eb)), this.lastRefocusCheckMs = -1 / 0, this.enteredLayerAtMs = 0, this.lastFocusedCentre = null, this.lastActivatedKey = null, this.lastActivated = null, this.lastActivatedAtMs = -1 / 0, this.pendingFocus = null, this.tabOpenWait = null, this.retryMove = null, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.wasActive = !1, this.layerKind = null, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.listeners = new Set, this.dropdownLayers = new WeakMap, this.dropdownLayerCounter = 0
        }
        install() {
          const BB = kB.d.register({
              name: "focus",
              isActive: () => (0, OB.k)() && "focus" === Fp(),
              onFrame: BB => {
                this.onFrame(BB)
              },
              onDeactivate: () => {
                this.deactivate()
              },
              wakePressActs: BB => (0, kB.h)(BB) || BB === (0, oB.m)("menuConfirm") && ST((0, OB.b)())
            }),
            TB = (0, yp.o)((BB => {
              const TB = (0, yp.u)(BB);
              null === BB.memoryKey && this.memory.forget(TB), TB === this.layerKey && (this.layerKey = null)
            }));
          let dB = -1 / 0;
          const VB = lB.e.onFrame((BB => {
              (0, OB.k)() || BB.timestampMs - dB < 100 || (dB = BB.timestampMs, Lp())
            })),
            yB = BB => {
              BB.isTrusted && BB.target instanceof Element && lB.e.getActivePad() && this.noteChosenStop(BB.target)
            };
          return document.addEventListener("click", yB, !0), () => {
            BB(), TB(), VB(), document.removeEventListener("click", yB, !0), this.deactivate()
          }
        }
        noteChosenStop(BB) {
          var TB, dB;
          const VB = Lp();
          if (!VB || !VB.root.contains(BB)) return;
          const yB = null !== (TB = null === (dB = BB.closest(".Dropdown-root")) || void 0 === dB ? void 0 : dB.querySelector(".Dropdown-control")) && void 0 !== TB ? TB : BB,
            pB = Bl(yB, VB.root, this.getEnabledCandidates(VB.root));
          if (!pB) return;
          const lB = (0, yp.u)(VB.layer);
          lB === this.layerKey && VB.root === this.layerRoot || this.beginLayer(VB, lB), this.wasActive ? this.setFocus(pB, {
            scroll: !1,
            byUser: !0
          }) : (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.focused = pB, this.lastFocusedCentre = iT(pB), this.rememberFocus(pB), this.notify())
        }
        getFocused() {
          return this.focused
        }
        isActive() {
          return this.wasActive
        }
        onChange(BB) {
          return this.listeners.add(BB), () => {
            this.listeners.delete(BB)
          }
        }
        notify() {
          for (const BB of this.listeners) BB()
        }
        deactivate() {
          var BB;
          if (this.wasActive) {
            this.wasActive = !1, this.layerKind = null, this.confirmPressedOn = null, this.retryMove = null, this.pendingFocus = null;
            for (const BB of this.dpadRepeats.values()) BB.reset();
            this.stickRepeat.reset(), null !== (BB = this.focused) && void 0 !== BB && BB.isConnected && np(this.focused, null, iT(this.focused)), this.notify()
          }
        }
        setFocus(BB) {
          var TB;
          let {
            scroll: dB = !0,
            byUser: VB = !1
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (VB && (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1), BB === this.focused) return;
          const yB = null !== (TB = this.focused) && void 0 !== TB && TB.isConnected ? this.focused : null;
          if (this.focused = BB, BB) {
            dB && (BB.classList.add(rp), BB.scrollIntoView({
              block: "nearest",
              inline: "nearest",
              behavior: "instant"
            })), VB && ((BB, TB) => {
              const dB = TB.closest("[data-pad-friends-column]");
              dB && BB && !dB.contains(BB) && (Cy = new WeakRef(BB))
            })(yB, BB);
            const TB = iT(BB);
            this.lastFocusedCentre = TB, this.movedInLayer && this.rememberFocus(BB), np(yB, BB, TB), "false" === BB.getAttribute("aria-pressed") && BB.closest("[data-pad-select-on-focus]") && UT(BB)
          } else yB && np(yB, null, iT(yB));
          this.notify()
        }
        rememberFocus(BB) {
          const TB = this.layerRoot;
          this.layerKey && TB && this.memory.remember(this.layerKey, BB, TB, (() => this.getEnabledCandidates(TB)))
        }
        noteCursorActivation(BB) {
          const TB = Lp();
          if (!TB || !TB.root.contains(BB)) return;
          const dB = this.getEnabledCandidates(TB.root),
            VB = new Set(dB);
          let yB = BB;
          for (; yB && !VB.has(yB);) yB = yB === TB.root ? null : yB.parentElement;
          if (!(yB instanceof HTMLElement)) return;
          const pB = (0, yp.u)(TB.layer);
          this.memory.enter(pB), this.memory.remember(pB, yB, TB.root, (() => dB))
        }
        notePageEnteredByCursor(BB) {
          return this.memory.enter(BB)
        }
        recallStop(BB, TB) {
          return this.findRemembered(BB, TB)
        }
        focusWhenFound(BB) {
          let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
            dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
          this.pendingFocus = {
            find: BB,
            untilMs: performance.now() + TB,
            holdWhile: dB
          }
        }
        getEnabledCandidates(BB) {
          return OT(BB).filter((BB => !oT(BB)))
        }
        onFrame(BB) {
          var TB;
          const dB = Lp();
          if (!dB) return;
          const VB = null !== (TB = this.findOpenDropdown(dB)) && void 0 !== TB ? TB : dB,
            yB = performance.now(),
            pB = (0, yp.u)(VB.layer);
          if (pB !== this.layerKey || VB.root !== this.layerRoot) {
            const TB = this.focused;
            if (null !== this.layerKey && VB.root === this.layerRoot && TB && ET(TB, VB.root)) this.continueLayer(pB, TB), this.wasActive || this.resume(VB.root, yB);
            else {
              const TB = !this.wasActive && !BB.wokeDevice,
                lB = "death" === this.layerKind || TB,
                JB = this.enterLayer(VB, pB);
              "popup" !== VB.layer.kind || VB !== dB || JB ? "menu" === VB.layer.kind && lB && "inGame" === YB.d.get("gameState") && !(0, oy.g)(3e3) && (this.pressGuardExtends = !0, this.pressGuardUntilMs = yB + Ip.c) : (this.pressGuardExtends = TB, this.pressGuardUntilMs = yB + (TB ? Ip.c : lB ? 500 : 250))
            }
          } else this.wasActive || this.resume(VB.root, yB);
          if (this.layerKind = VB.layer.kind, this.wasActive || (this.wasActive = !0, this.notify()), BB.wokeDevice && this.focusPointedStop(VB.root), this.validateFocus(VB, yB), yB < this.pressGuardUntilMs && this.pressGuardExtends && (BB.wasPressed((0, oB.m)("menuConfirm")) || BB.wasPressed((0, oB.m)("menuBack"))) && (this.pressGuardUntilMs = yB + Ip.c), yB >= this.pressGuardUntilMs && this.handleButtons(BB, VB)) return;
          const lB = "hybrid" === fp();
          if (lB && (BB => {
              const TB = Dp();
              return TB !== tp && (tp = TB, Np.lock()), Np.update(BB, (0, LB.h)().moveDeadzone)
            })(BB.leftStick)) return JB = this.getHandoff(), ip = Hp(JB), vp = Dp(), void kB.d.handOffHeldInput();
          var JB;
          this.handleDirections(BB, VB, yB, !lB), this.handleScroll(BB, VB)
        }
        findOpenDropdown(BB) {
          const TB = BB.root.querySelector(qp);
          if (!TB || !gT(TB)) return null;
          let dB = this.dropdownLayers.get(TB);
          return dB || (this.dropdownLayerCounter++, dB = {
            id: `dropdown-${this.dropdownLayerCounter}`,
            kind: BB.layer.kind,
            getRoot: () => TB,
            close: () => {
              rT(TB)
            },
            memoryKey: null
          }, this.dropdownLayers.set(TB, dB)), {
            layer: dB,
            root: TB,
            order: BB.order
          }
        }
        focusPointedStop(BB) {
          const TB = (0, OB.b)(),
            dB = TB ? document.elementFromPoint(TB.x, TB.y) : null;
          if (!dB || !BB.contains(dB)) return;
          const VB = Bl(dB, BB, this.getEnabledCandidates(BB));
          VB && this.setFocus(VB, {
            scroll: !1,
            byUser: !0
          })
        }
        enterLayer(BB, TB) {
          const dB = this.beginLayer(BB, TB),
            VB = Mp();
          return VB && Tl(VB, BB.root) ? (this.takeOver(BB.root, VB, this.enteredLayerAtMs), dB) : (this.restoreLayerFocus(BB.root, dB), dB)
        }
        beginLayer(BB, TB) {
          return this.layerKey = TB, this.layerRoot = BB.root, this.lastActivatedKey = null, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoreOnFocusLoss = !1, this.retryMove = null, this.pendingFocus = null, this.confirmPressedOn = null, this.lastRefocusCheckMs = -1 / 0, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.enteredLayerAtMs = performance.now(), this.lastFocusedCentre = null, this.memory.enter(TB)
        }
        restoreLayerFocus(BB, TB) {
          const dB = TB && this.layerKey ? this.findRemembered(BB, this.layerKey) : null;
          this.restoredFromMemory = null !== dB, this.setFocus(null !== dB && void 0 !== dB ? dB : this.pickInitial(BB, {
            waitForContent: !0
          }))
        }
        continueLayer(BB, TB) {
          this.layerKey = BB;
          const dB = this.memory.enter(BB);
          this.restoreOnFocusLoss = dB, this.movedInLayer && !dB && this.rememberFocus(TB)
        }
        resume(BB, TB) {
          var dB;
          const VB = Mp();
          VB && Tl(VB, BB) ? this.takeOver(BB, VB, TB) : null !== (dB = this.focused) && void 0 !== dB && dB.isConnected && np(null, this.focused, iT(this.focused))
        }
        pickPreferred(BB) {
          var TB;
          return null !== (TB = this.layerKey ? this.findRemembered(BB, this.layerKey) : null) && void 0 !== TB ? TB : this.pickInitial(BB, {
            waitForContent: !0
          })
        }
        findRemembered(BB, TB) {
          return this.memory.has(TB) ? this.memory.recall(TB, this.getEnabledCandidates(BB)) : null
        }
        getHandoff() {
          var BB, TB, dB;
          const VB = null !== (BB = this.focused) && void 0 !== BB && BB.isConnected ? this.focused : null,
            yB = null !== (TB = this.layerRoot) && void 0 !== TB && TB.isConnected ? this.layerRoot : null;
          return {
            point: VB ? iT(VB) : null !== (dB = this.lastFocusedCentre) && void 0 !== dB ? dB : this.getLayerStartPoint(yB),
            element: VB,
            direction: null
          }
        }
        getLayerStartPoint(BB) {
          if (!BB) return {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          };
          const TB = this.pickInitial(BB, {
            includeDisabled: !0
          });
          return iT(null !== TB && void 0 !== TB ? TB : BB)
        }
        takeOver(BB, TB, dB) {
          const {
            element: VB,
            direction: yB,
            point: pB
          } = TB, lB = VB instanceof HTMLElement && ET(VB, BB) ? VB : null;
          if (!yB) {
            const TB = this.focused;
            return lB ? this.setFocus(lB, {
              scroll: !1,
              byUser: !0
            }) : this.focusNearest(BB, pB), void(this.focused && this.focused === TB && this.focused.isConnected && np(null, this.focused, iT(this.focused)))
          }
          if (this.dpadRepeats.get(yB).update(!0, dB), lB) return this.setFocus(lB, {
            scroll: !1,
            byUser: !0
          }), void this.move(BB, yB, dB, !0);
          const JB = this.getEnabledCandidates(BB),
            YB = JB.map(ep),
            gB = fy(new DOMRect(pB.x, pB.y, 0, 0), YB, yB),
            oB = gB >= 0 ? gB : Uy(pB, YB);
          this.setFocus(oB >= 0 ? JB[oB] : this.pickInitial(BB), {
            byUser: !0
          })
        }
        focusNearest(BB, TB) {
          const dB = this.getEnabledCandidates(BB),
            VB = Uy(TB, dB.map(ep));
          this.setFocus(VB >= 0 ? dB[VB] : this.pickInitial(BB), {
            byUser: !0
          })
        }
        pickDefault(BB) {
          let {
            includeDisabled: TB = !1,
            exclude: dB = null
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const VB = [...BB.querySelectorAll(Gp)].filter((VB => (null === dB || void 0 === dB || !dB.has(VB)) && (TB ? HT(VB, BB) : ET(VB, BB)))),
            yB = ap(VB.map(Qp));
          return yB >= 0 ? VB[yB] : null
        }
        pickNewAreaStart(BB, TB) {
          const dB = [...BB.querySelectorAll(Ap)].filter(gT);
          for (const VB of [...vT(BB), ...dB]) {
            if (TB.has(VB)) continue;
            const BB = this.getEnabledCandidates(VB),
              dB = ap(BB.map(Qp));
            if (dB >= 0) return BB[dB]
          }
          return null
        }
        pickInitial(BB) {
          let {
            includeDisabled: TB = !1,
            waitForContent: dB = !1,
            enteredAtMs: VB = this.enteredLayerAtMs
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const yB = this.pickDefault(BB, {
            includeDisabled: TB
          });
          if (yB) return yB;
          const pB = BB => TB ? OT(BB) : this.getEnabledCandidates(BB);
          let lB = [];
          for (const LB of vT(BB))
            if (lB = pB(LB), lB.length > 0) break;
          if (0 === lB.length) {
            if (dB && performance.now() - VB < 1e4 && (BB => {
                for (const TB of BB.querySelectorAll("[data-pad-initial-area]"))
                  if (!YT(TB, !1)) return !0;
                return !1
              })(BB)) return null;
            lB = pB(BB)
          }
          const JB = lB.map(ep),
            YB = cB(null),
            gB = lB.filter(((BB, TB) => SB(JB[TB], YB))),
            oB = gB.length > 0 ? gB : lB,
            kB = ap(oB.map(Qp));
          return kB >= 0 ? oB[kB] : null
        }
        validateFocus(BB, TB) {
          if (this.pendingFocus) {
            var dB, VB;
            const yB = this.pendingFocus.find();
            if (yB && ET(yB, BB.root)) return this.pendingFocus = null, void this.setFocus(yB, {
              byUser: !0
            });
            TB > this.pendingFocus.untilMs && (null === (dB = (VB = this.pendingFocus).holdWhile) || void 0 === dB || !dB.call(VB)) && (this.pendingFocus = null)
          }
          const yB = this.focused,
            pB = !!yB && ET(yB, BB.root);
          if (!(!pB && yB && yB === this.lastActivated && TB - this.lastActivatedAtMs < 5e3 && BB.root.contains(yB) && gT(yB) && oT(yB))) {
            if (!pB && this.restoreOnFocusLoss && this.layerKey) return this.restoreOnFocusLoss = !1, this.movedInLayer = !1, this.scrolledInLayer = !1, this.enteredLayerAtMs = TB, void this.restoreLayerFocus(BB.root, !0);
            if ((!pB || !this.movedInLayer && !this.scrolledInLayer) && !(TB - this.lastRefocusCheckMs < (pB ? 200 : 50)))
              if (this.lastRefocusCheckMs = TB, pB) {
                const dB = TB - this.enteredLayerAtMs < 15e3 ? this.pickPreferred(BB.root) : null,
                  VB = null !== dB && void 0 !== dB ? dB : this.restoredFromMemory ? null : this.pickDefault(BB.root);
                VB && VB !== yB && this.setFocus(VB)
              } else {
                if (this.lastFocusedCentre && this.movedInLayer) {
                  const TB = this.pendingFocus;
                  return this.focusNearest(BB.root, this.lastFocusedCentre), void(this.pendingFocus = TB)
                }
                this.setFocus(this.pickPreferred(BB.root))
              }
          }
        }
        handleButtons(BB, TB) {
          if (BB.wasPressed((0, oB.m)("menuToggleCursor"))) return sp(this.getHandoff()), !0;
          if (BB.wasPressed((0, oB.m)("menuBack"))) {
            const BB = rT(TB.root);
            return BB ? this.setFocus(BB, {
              byUser: !0
            }) : Gy(this, TB.root) || (QT(TB.root) ? this.returnToOpener(TB.root) : this.backToStrip(TB.root) || Op()), !0
          }
          const dB = (0, oB.m)("menuConfirm");
          var VB, yB;
          BB.wasPressed(dB) && (this.confirmPressedOn = this.focused, this.confirmRepeatKey = null !== (VB = null === (yB = this.focused) || void 0 === yB ? void 0 : yB.getAttribute("data-pad-repeat")) && void 0 !== VB ? VB : null, this.confirmRepeated = BB.wokeDevice, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now()));
          if (BB.wasReleased(dB)) {
            const BB = this.confirmPressedOn;
            if (this.confirmPressedOn = null, BB && !this.confirmRepeated && BB === this.focused && BB.isConnected && !oT(BB)) {
              const dB = BB.matches("[data-pad-tab]") ? BB.closest(jp) : null;
              dB ? this.enterTab(BB, dB, TB.root, performance.now()) : this.activate(BB)
            }
            return !0
          }
          return this.repeatConfirm(BB, dB), Tp(this, BB, TB)
        }
        repeatConfirm(BB, TB) {
          const dB = this.confirmPressedOn;
          dB && null !== this.confirmRepeatKey && BB.isHeld(TB) && (dB === this.focused && dB.isConnected && !oT(dB) && dB.getAttribute("data-pad-repeat") === this.confirmRepeatKey ? dB.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.confirmRepeated = !0, this.activate(dB)) : this.confirmRepeatKey = null)
        }
        backToStrip(BB) {
          const TB = this.focused;
          if (!(0, LB.h)().menuBackToCategories) return !1;
          const dB = null !== TB && void 0 !== TB && TB.isConnected ? this.tabStripNav.backToStrip(TB, this.getEnabledCandidates(BB), BB) : null;
          return dB && this.setFocus(dB, {
            byUser: !0
          }), null !== dB
        }
        returnToOpener(BB) {
          const TB = this.lastActivatedKey;
          TB && (this.lastActivatedKey = null, this.focusWhenFound((() => {
            var dB;
            return null !== (dB = this.getEnabledCandidates(BB).find((BB => RT(BB) === TB))) && void 0 !== dB ? dB : null
          })))
        }
        activate(BB) {
          var TB;
          if ((0, cp.b)(BB) || cT(BB)) return;
          this.lastActivatedKey = null !== (TB = RT(BB)) && void 0 !== TB ? TB : this.lastActivatedKey, this.lastActivated = BB, this.lastActivatedAtMs = performance.now(), this.rememberFocus(BB);
          const dB = this.layerRoot;
          if (dB) {
            const TB = new Set(dB.querySelectorAll(Gp)),
              VB = new Set(dB.querySelectorAll(`[data-pad-initial-area], ${Ap}`)),
              yB = this.lastActivatedAtMs;
            this.focusWhenFound((() => {
              var yB;
              return ET(BB, dB) ? null : null !== (yB = this.pickDefault(dB, {
                exclude: TB
              })) && void 0 !== yB ? yB : this.pickNewAreaStart(dB, VB)
            }), 5e3, (() => BB.isConnected && oT(BB) && performance.now() - yB < 6e4))
          }
          UT(BB), IT(BB)
        }
        handleDirections(BB, TB, dB, VB) {
          const yB = cy(TB.layer.kind) ? (0, oB.m)("chat") : null;
          for (const JB of DB.D) {
            this.dpadRepeats.get(JB).update(BB.isHeld(JB), dB) && (JB !== yB || BB.wasPressed(JB)) && this.move(TB.root, JB, dB, !0)
          }
          const pB = VB ? (0, DB.k)(BB.leftStick, (0, LB.h)().moveDeadzone) : {
              x: 0,
              y: 0
            },
            lB = this.stickRepeat.update((0, DB.ib)(pB), dB);
          if (lB && this.move(TB.root, lB, dB, !0), this.retryMove && dB >= this.retryMove.atMs) {
            const {
              direction: BB
            } = this.retryMove;
            this.retryMove = null, this.move(TB.root, BB, dB, !1)
          }
        }
        move(BB, TB, dB, VB) {
          var yB;
          let pB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          if (this.pendingFocus && this.pendingFocus === (null === (yB = this.tabOpenWait) || void 0 === yB ? void 0 : yB.wait) && TB === this.tabOpenWait.direction) return;
          this.pendingFocus = null;
          const lB = this.focused;
          if (!lB || !lB.isConnected) {
            const TB = this.pickInitial(BB);
            return void(TB && this.setFocus(TB, {
              byUser: !0
            }))
          }
          const JB = "Left" === TB || "Right" === TB,
            YB = JB ? (0, cp.b)(lB) : null;
          if (YB) return void YB.adjust("Left" === TB ? -1 : 1);
          const gB = BB => null !== BB.closest("[data-pad-friends-column]"),
            oB = gB(lB),
            kB = ep(lB),
            LB = JB || lB.closest(jp) ? null : (BB => {
              const TB = new Map;
              return dB => {
                const VB = dB.closest(jp);
                if (!VB) return !1;
                let yB = TB.get(VB);
                if (void 0 === yB) {
                  const dB = ep(VB);
                  yB = ty(BB, dB) && (dB.right <= BB.left || dB.left >= BB.right), TB.set(VB, yB)
                }
                return yB
              }
            })(kB),
            OB = null !== lB.closest(xp),
            DB = this.getEnabledCandidates(BB).filter((BB => BB !== lB && (JB || gB(BB) === oB) && !(null !== LB && void 0 !== LB && LB(BB)) && (OB || !BB.closest(xp)))),
            uB = DB.map(ep),
            HB = wB(lB, "y", BB),
            EB = cB(HB);
          if (!pB && !SB(kB, EB)) {
            const BB = DB.filter(((BB, TB) => SB(uB[TB], EB)));
            if (BB.length > 0) {
              const TB = {
                x: EB.left + EB.width / 2,
                y: EB.top + EB.height / 2
              };
              return void this.setFocus(BB[Uy(TB, BB.map(ep))], {
                byUser: !0
              })
            }
          }
          const vB = JB ? ((BB, TB, dB) => {
              const VB = ep(BB),
                yB = BB.closest(jp),
                pB = yB ? ep(yB) : null;
              return TB.map(((TB, lB) => {
                const JB = dB[lB];
                if (JB.bottom > VB.top && JB.top < VB.bottom) return !0;
                const YB = TB.closest(jp);
                if (yB && pB) return YB !== yB && (null !== YB || JB.bottom <= pB.top || JB.top >= pB.bottom);
                if (YB) return !ty(VB, ep(YB));
                let gB = BB;
                for (let dB = BB.parentElement; dB && !dB.contains(TB); dB = dB.parentElement) gB = dB;
                const oB = ep(gB);
                return JB.right > oB.left && JB.left < oB.right
              }))
            })(lB, DB, uB) : void 0,
            mB = JB && !lB.closest(jp) ? (BB => BB.map((BB => !BB.closest(Pp))))(DB) : void 0,
            iB = ((BB, TB) => {
              const dB = [];
              for (let yB = BB; yB; yB = yB.parentElement) dB.push(yB);
              const VB = new Map;
              return dB.forEach(((BB, TB) => {
                VB.set(BB, dB.length - 1 - TB)
              })), TB.map((BB => {
                for (let TB = BB; TB; TB = TB.parentElement) {
                  const BB = VB.get(TB);
                  if (void 0 !== BB) return BB
                }
                return -1
              }))
            })(lB, DB),
            NB = JB ? "x" : "y",
            tB = wB(lB, NB, BB);
          let fB = fy(kB, uB, TB, iB, vB, mB);
          if (fB >= 0 && tB && !tB.contains(DB[fB])) {
            const BB = DB.flatMap(((BB, TB) => tB.contains(BB) ? [TB] : [])),
              dB = TB => TB && BB.map((BB => TB[BB])),
              VB = fy(kB, BB.map((BB => uB[BB])), TB, BB.map((BB => iB[BB])), dB(vB), dB(mB));
            fB = VB >= 0 ? BB[VB] : fB
          }
          if (fB >= 0) return void this.moveTo(lB, DB[fB], DB, BB, TB, pB);
          if (!VB) return;
          const sB = "Right" === TB || "Down" === TB ? 1 : -1;
          if (tB && rB(tB, NB, sB)) {
            const BB = "y" === NB ? tB.clientHeight : tB.clientWidth;
            IB(tB, NB, sB * BB * .5), this.retryMove = {
              direction: TB,
              atMs: dB + 80
            }
          }
        }
        moveTo(BB, TB, dB, VB, yB, pB) {
          const lB = this.tabStripNav.findTabContent(BB, TB, dB);
          lB && "true" !== BB.dataset.padSelected ? this.openTab(BB, lB, VB, yB) : pB && !lB || this.setFocus(this.tabStripNav.redirect(BB, TB, dB, VB), {
            byUser: !0
          })
        }
        openTab(BB, TB, dB, VB) {
          const yB = TB.parentElement;
          UT(BB), this.focusWhenFound((() => "true" !== BB.dataset.padSelected ? null : TB.isConnected ? this.tabStripNav.pickContentStart(TB, this.getEnabledCandidates(dB), dB) : yB ? this.tabStripNav.pickReplacedContentStart(BB, yB, this.getEnabledCandidates(dB), dB) : null), 3e3), this.tabOpenWait = {
            wait: this.pendingFocus,
            direction: VB
          }
        }
        enterTab(BB, TB, dB, VB) {
          this.move(dB, (BB => {
            const TB = [...BB.querySelectorAll(Xp)].filter((TB => TB.closest(Zp) === BB));
            if (TB.length >= 2) {
              const BB = TB[0].getBoundingClientRect(),
                dB = TB[1].getBoundingClientRect();
              return Math.abs(dB.top - BB.top) > Math.abs(dB.left - BB.left) ? "Right" : "Down"
            }
            const dB = BB.getBoundingClientRect();
            return dB.height > dB.width ? "Right" : "Down"
          })(TB), VB, !1, !0), this.focused !== BB || this.pendingFocus || this.activate(BB)
        }
        handleScroll(BB, TB) {
          const dB = (0, DB.k)(BB.rightStick, .2);
          if (0 === dB.x && 0 === dB.y) return void(this.scrollRemainder = {
            x: 0,
            y: 0
          });
          const VB = BB.dtMs / 1e3;
          for (const pB of ["x", "y"]) {
            var yB;
            const BB = dB[pB];
            if (0 === BB) continue;
            const lB = null !== (yB = wB(this.focused, pB, TB.root)) && void 0 !== yB ? yB : FB(TB.root, pB);
            if (!lB) continue;
            const JB = Math.sign(BB) * BB * BB * 1500 * VB + this.scrollRemainder[pB],
              YB = Math.trunc(JB);
            this.scrollRemainder[pB] = JB - YB, 0 !== YB && (IB(lB, pB, YB), this.scrolledInLayer = !0)
          }
        }
      },
      Vl = ["controller:keyboardPhraseGg", "controller:keyboardPhraseHi", "controller:keyboardPhraseThanks", "controller:keyboardPhraseGl", "controller:keyboardPhraseBrb", "controller:keyboardPhraseYes", "controller:keyboardPhraseNo", "controller:keyboardPhraseHelp"];
    const yl = new class {
        constructor() {
          this.lastSendMs = -1 / 0
        }
        claim(BB) {
          return !(BB - this.lastSendMs < 2e3) && (this.lastSendMs = BB, !0)
        }
      },
      pl = {
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
      ll = ["Cg", "nameTag"],
      Jl = BB => {
        const TB = BB.target instanceof HTMLTextAreaElement && !ll.includes(BB.kind);
        return eV(BB.page, "chat" === BB.kind ? Vl.length : 0, TB)
      },
      Yl = BB => {
        const TB = BB.getBoundingClientRect(),
          dB = window.innerHeight,
          VB = TB.top + TB.height / 2 < dB / 2 ? "bottom" : "top",
          yB = "bottom" === VB ? dB - TB.bottom - 6 : TB.top - 6;
        return {
          placement: VB,
          maxHeightPx: Math.min(.46 * dB, Math.max(.3 * dB, yB))
        }
      },
      gl = BB => {
        (0, Yy.i)(BB) ? (0, Yy.d)().close(): (dl.noteChosenStop(BB), BB.blur())
      };
    class ol {
      constructor(BB) {
        this.host = BB, this.lastShiftPressMs = -1 / 0, this.phraseTexts = [], this.phrasesFill = !1
      }
      setPhraseRow(BB, TB) {
        this.phraseTexts = BB, this.phrasesFill = TB
      }
      pressKey(BB) {
        const TB = this.host.getState(),
          dB = Jl(TB),
          VB = dB[BB.row][BB.col];
        this.host.setState({
          ...TB,
          focus: BB,
          preferredX: dy(dB, BB)
        }), "char" === VB.type ? this.typeChar(VB.char) : "command" === VB.type ? this.runCommand(VB.command) : this.sendPhrase(VB.phraseIndex)
      }
      runCommand(BB) {
        const TB = this.host.getState();
        switch (BB) {
          case "backspace":
            pT(TB.target);
            break;
          case "space":
            yT(TB.target, " ");
            break;
          case "newline":
            yT(TB.target, "\n");
            break;
          case "caretLeft":
            lT(TB.target, -1);
            break;
          case "caretRight":
            lT(TB.target, 1);
            break;
          case "shift": {
            const BB = performance.now();
            this.host.setState({
              ...TB,
              shift: py(TB.shift, BB, this.lastShiftPressMs)
            }), this.lastShiftPressMs = BB;
            break
          }
          case "page":
          case "otherPage": {
            const dB = nV(TB.page, TB.accentsFirst)[BB];
            this.host.setState({
              ...TB,
              page: dB,
              focus: yy(Jl({
                ...TB,
                page: dB
              }), TB.focus)
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
            (0, Yy.i)(TB.target) && (0, Yy.d)().selectNextChannel()
        }
      }
      submit() {
        var BB, TB;
        const {
          target: dB
        } = this.host.getState();
        this.host.hide(), (0, Yy.i)(dB) ? (0, Yy.d)().submit() : (dl.noteChosenStop(dB), null === (BB = (TB = (0, Yy.f)(dB)).submit) || void 0 === BB || BB.call(TB), document.activeElement === dB && dB.blur())
      }
      close() {
        const {
          target: BB
        } = this.host.getState();
        this.host.hide(), gl(BB)
      }
      typeChar(BB) {
        const {
          target: TB,
          page: dB,
          shift: VB
        } = this.host.getState();
        yT(TB, Jy(BB, dB, VB)), this.host.setState({
          ...this.host.getState(),
          shift: ly(VB, BB)
        })
      }
      sendPhrase(BB) {
        if (this.phrasesFill) {
          const {
            target: TB
          } = this.host.getState(), dB = this.phraseTexts[BB];
          dB && (TB.setSelectionRange(0, TB.value.length), yT(TB, dB))
        } else yl.claim(performance.now()) && (this.host.hide(), (0, Yy.d)().sendLine(this.phraseTexts[BB]))
      }
    }
    const kl = {
        initialDelayMs: 380,
        intervalMs: 85
      },
      Ll = {
        initialDelayMs: 400,
        intervalMs: 55
      };
    class Ol {
      constructor(BB, TB) {
        this.host = BB, this.editor = TB, this.lastDirection = null, this.navRepeat = new DB.e((0, uB.d)(kl)), this.commandRepeats = new Map(WV.filter((BB => {
          let {
            repeats: TB
          } = BB;
          return TB
        })).map((BB => {
          let {
            command: TB
          } = BB;
          return [TB, (0, uB.d)(Ll)]
        })))
      }
      reset() {
        this.navRepeat.reset();
        for (const BB of this.commandRepeats.values()) BB.reset()
      }
      onVisibleFrame(BB) {
        const TB = performance.now();
        for (const {
            command: yB,
            action: pB
          }
          of WV) {
          const dB = (0, oB.m)(pB),
            VB = this.commandRepeats.get(yB);
          if ((VB ? VB.update(BB.isHeld(dB), TB) : BB.wasPressed(dB)) && (this.editor.runCommand(yB), !this.host.getState().visible)) return
        }
        if (BB.wasPressed((0, oB.m)("keyboardType")) && (this.editor.pressKey(this.host.getState().focus), !this.host.getState().visible)) return;
        const dB = this.readNavDirection(BB);
        this.lastDirection = dB;
        const VB = this.navRepeat.update(dB, TB);
        VB && this.navigate(VB)
      }
      onHiddenFrame(BB, TB) {
        var dB;
        if (BB.wasPressed((0, oB.m)("keyboardClose"))) return void gl(TB);
        const VB = (0, oB.m)("keyboardType");
        if (BB.wasPressed(VB)) return kB.d.consumeButton(VB), void this.host.open(TB);
        const yB = this.readNavDirection(BB),
          pB = null !== yB && yB !== this.lastDirection;
        if (this.lastDirection = yB, !pB || (0, Yy.i)(TB)) return;
        const lB = (null === (dB = Lp()) || void 0 === dB ? void 0 : dB.root.contains(TB)) || null !== TB.closest(".EntireInventoryWrapper");
        gl(TB), lB && kB.d.handOffHeldInput()
      }
      navigate(BB) {
        const TB = this.host.getState();
        if ("Up" === BB && 0 === TB.focus.row && "chat" === TB.kind) return (0, Yy.d)().stepHistory(), void this.host.setState({
          ...TB
        });
        const dB = ((BB, TB, dB, VB) => {
          if ("Left" === dB || "Right" === dB) {
            const VB = BB[TB.row].length,
              yB = (TB.col + ("Right" === dB ? 1 : -1) + VB) % VB,
              pB = {
                row: TB.row,
                col: yB
              };
            return {
              pos: pB,
              preferredX: dy(BB, pB)
            }
          }
          const yB = (TB.row + ("Down" === dB ? 1 : -1) + BB.length) % BB.length;
          return {
            pos: {
              row: yB,
              col: Vy(BB, yB, VB)
            },
            preferredX: VB
          }
        })(Jl(TB), TB.focus, BB, TB.preferredX);
        this.host.setState({
          ...TB,
          focus: dB.pos,
          preferredX: dB.preferredX
        })
      }
      readNavDirection(BB) {
        for (const TB of DB.D)
          if (BB.isHeld(TB)) return TB;
        return (0, DB.ib)((0, DB.k)(BB.leftStick, (0, LB.h)().moveDeadzone))
      }
    }
    const Dl = ["Up", "Down", "Left", "Right"],
      ul = new Set(["CapsLock", "Control", "Fn", "FnLock", "Hyper", "NumLock", "ScrollLock", "Shift", "Super"]);
    const Hl = new class {
      constructor() {
        this.state = pl, this.listeners = new Set, this.ownedField = null, this.pendingChatInput = null, this.pendingChatTimeout = 0, this.savedInputMode = null, this.editor = new ol(this), this.padInput = new Ol(this, this.editor)
      }
      getState() {
        return this.state
      }
      setState(BB) {
        const TB = BB.visible !== this.state.visible;
        this.state = BB;
        for (const dB of this.listeners) dB();
        TB && gB.h.yH(CB.e, BB.visible)
      }
      subscribe(BB) {
        return this.listeners.add(BB), () => {
          this.listeners.delete(BB)
        }
      }
      install() {
        const BB = kB.d.register({
            name: "keyboard",
            isActive: () => this.state.visible || nB(document.activeElement),
            onFrame: BB => {
              this.onFrame(BB)
            },
            onDeactivate: () => {
              this.padInput.reset()
            },
            wakePressActs: BB => Dl.includes(BB) || !this.state.visible && BB === (0, oB.m)("keyboardType")
          }),
          TB = BB => {
            const TB = BB.target;
            nB(TB) && (TB === this.pendingChatInput || (0, OB.k)() ? this.open(TB) : this.state.visible && TB !== this.state.target && (this.ownedField = null, this.hide()))
          },
          dB = () => {
            setTimeout((() => {
              this.releaseLostField()
            }), 0)
          },
          VB = BB => {
            BB.isTrusted && this.state.visible && (BB => !BB.repeat && !ul.has(BB.key) && !(0, gy.d)(BB.key) && !/^(Audio|Media|Browser|Launch|Gamepad)/.test(BB.key))(BB) && this.hide()
          },
          yB = () => {
            this.state.visible && this.setState({
              ...this.state,
              ...Yl(this.state.target)
            })
          };
        document.addEventListener("focusin", TB, !0), document.addEventListener("focusout", dB, !0), window.addEventListener("keydown", VB, !0), window.addEventListener("resize", yB);
        const pB = gB.h.subscribe(FV.d, (() => {
            this.openChat()
          })),
          lB = gB.h.subscribe(CB.f, (BB => {
            this.openForField(BB)
          }));
        return () => {
          BB(), document.removeEventListener("focusin", TB, !0), document.removeEventListener("focusout", dB, !0), window.removeEventListener("keydown", VB, !0), window.removeEventListener("resize", yB), gB.h.unsubscribe(pB), gB.h.unsubscribe(lB), this.clearPendingChat(), this.hide(), this.ownedField = null
        }
      }
      openChat() {
        const BB = (0, Yy.d)();
        BB ? document.activeElement !== BB.input ? (this.clearPendingChat(), this.pendingChatInput = BB.input, this.pendingChatTimeout = window.setTimeout((() => {
          this.pendingChatInput = null
        }), 250), BB.open()) : this.open(BB.input) : console.warn("controllerOpenChat with no chat mounted")
      }
      openForField(BB) {
        nB(BB) ? (document.activeElement !== BB && BB.focus(), document.activeElement === BB && this.open(BB)) : console.warn("controllerOpenKeyboard needs an editable input or textarea", BB)
      }
      open(BB) {
        var TB;
        if (this.clearPendingChat(), this.ownedField = BB, this.state.visible && this.state.target === BB) return;
        this.restoreInputMode(), (BB => {
          eB(BB) && 0 === BB.selectionStart && 0 === BB.selectionEnd && BB.setSelectionRange(BB.value.length, BB.value.length)
        })(BB), this.savedInputMode = BB.getAttribute("inputmode"), BB.setAttribute("inputmode", "none");
        const dB = {
          ...pl,
          visible: !0,
          target: BB,
          kind: (0, Yy.i)(BB) ? "chat" : null !== (TB = (0, Yy.f)(BB).kind) && void 0 !== TB ? TB : null,
          accentsFirst: (VB = HV.f.get().getCurrentLanguageCode(), bV.has(VB)),
          ...Yl(BB)
        };
        var VB;
        const yB = Jl(dB),
          pB = ((BB, TB) => {
            for (let dB = 0; dB < BB.length; dB++) {
              const VB = BB[dB].findIndex((BB => "char" === BB.type && BB.char === TB));
              if (-1 !== VB) return {
                row: dB,
                col: VB
              }
            }
            return null
          })(yB, "q");
        this.padInput.reset(), this.setState({
          ...dB,
          focus: pB,
          preferredX: dy(yB, pB)
        })
      }
      hide() {
        this.state.visible && (this.restoreInputMode(), this.padInput.reset(), this.setState(pl))
      }
      onFrame(BB) {
        if (this.releaseLostField()) return;
        const TB = document.activeElement;
        this.state.visible ? this.padInput.onVisibleFrame(BB) : nB(TB) && this.padInput.onHiddenFrame(BB, TB)
      }
      releaseLostField() {
        const BB = this.ownedField;
        return !(null === BB || BB.isConnected && document.activeElement === BB) && (this.ownedField = null, this.hide(), !0)
      }
      clearPendingChat() {
        window.clearTimeout(this.pendingChatTimeout), this.pendingChatInput = null
      }
      restoreInputMode() {
        const {
          target: BB
        } = this.state;
        BB && (null === this.savedInputMode ? BB.removeAttribute("inputmode") : BB.setAttribute("inputmode", this.savedInputMode), this.savedInputMode = null)
      }
    };
    var El = dB(8107);
    const vl = new Map(WV.map((BB => {
        let {
          command: TB,
          action: dB
        } = BB;
        return [TB, dB]
      }))),
      ml = {
        letters: "ABC",
        accents: "\xe0\xe9",
        symbols: "&123"
      },
      il = {
        chat: "controller:keyboardTargetChat",
        sign: "controller:keyboardTargetSign",
        nameTag: "controller:keyboardTargetNameTag",
        book: "controller:keyboardTargetBook",
        Cg: "controller:keyboardTargetBookTitle"
      },
      Nl = BB => {
        const TB = (() => {
          const [, BB] = (0, PB.useReducer)((BB => BB + 1), 0);
          return BB
        })();
        (0, PB.useEffect)((() => {
          if (!BB) return;
          const dB = ["input", "select", "selectionchange", "keyup", "pointerup"];
          for (const yB of dB) BB.addEventListener(yB, TB);
          document.addEventListener("selectionchange", TB);
          const VB = new MutationObserver(TB);
          return VB.observe(BB, {
            attributeFilter: ["placeholder"]
          }), () => {
            VB.disconnect();
            for (const VB of dB) BB.removeEventListener(VB, TB);
            document.removeEventListener("selectionchange", TB)
          }
        }), [BB, TB])
      },
      tl = BB => {
        BB.preventDefault()
      },
      fl = BB => {
        "mouse" !== BB.pointerType && BB.preventDefault()
      },
      sl = () => {
        var BB;
        const {
          t: TB
        } = (0, yB.z)(), dB = (() => {
          const [BB, TB] = (0, PB.useState)(Hl.getState());
          return (0, PB.useEffect)((() => Hl.subscribe((() => {
            TB(Hl.getState())
          }))), []), BB
        })(), VB = (0, OB.z)(), pB = (0, PB.useRef)(null);
        (0, LB.r)(), (0, OB.A)(), (0, PB.useEffect)((() => {
          const BB = Hl.install(),
            TB = null;
          return () => {
            BB(), null === TB || void 0 === TB || TB()
          }
        }), []);
        const lB = (0, PB.useMemo)((() => Vl.map((BB => TB(BB)))), [TB]),
          JB = dB.visible && "chat" === dB.kind ? dB.target : null;
        Nl(JB);
        const YB = null !== (BB = null === JB || void 0 === JB ? void 0 : JB.value) && void 0 !== BB ? BB : "",
          gB = ((BB, TB, dB) => {
            if (!BB.startsWith("/")) return [];
            const VB = [];
            for (let yB = TB.length - 1; yB >= 0 && VB.length < dB; yB--) {
              const dB = TB[yB].trim();
              dB.startsWith(BB) && dB !== BB && !VB.includes(dB) && VB.push(dB)
            }
            return VB
          })(YB, YB.startsWith("/") ? (0, El.g)() : [], Vl.length),
          kB = YB.startsWith("/"),
          DB = kB ? Vl.map(((BB, TB) => {
            var dB;
            return null !== (dB = gB[TB]) && void 0 !== dB ? dB : ""
          })) : lB;
        if ((0, PB.useEffect)((() => {
            Hl.editor.setPhraseRow(DB, kB)
          })), (0, PB.useEffect)((() => {
            const BB = pB.current;
            if (BB) return BB.addEventListener("touchstart", tl, {
              passive: !1
            }), () => {
              BB.removeEventListener("touchstart", tl)
            }
          }), [dB.visible]), !dB.visible) return null;
        const uB = Jl(dB),
          HB = Ty(uB),
          EB = BB => "char" === BB.type ? Jy(BB.char, dB.page, dB.shift) : "phrase" === BB.type ? DB[BB.phraseIndex] : (BB => {
            switch (BB) {
              case "backspace":
                return "\u232b";
              case "shift":
                return "caps" === dB.shift ? "\u21ea" : "\u21e7";
              case "page":
              case "otherPage":
                return ml[nV(dB.page, dB.accentsFirst)[BB]];
              case "space":
                return TB("controller:keyboardSpace");
              case "caretLeft":
                return "\u2190";
              case "caretRight":
                return "\u2192";
              case "newline":
                return "\u21b5";
              case "submit":
                return TB("chat" === dB.kind ? "controller:keyboardSend" : "controller:keyboardDone");
              case "close":
                return "\u2715";
              case "channel":
                return "\u21c4"
            }
          })(BB.command),
          vB = BB => {
            Hl.editor.pressKey(BB)
          };
        return (0, aB.jsxs)("div", {
          ref: pB,
          className: RB()(Yy.p, "top" === dB.placement ? "PadKeyboardTop" : "PadKeyboardBottom", {
            PadKeyboardMultiline: dB.target instanceof HTMLTextAreaElement
          }),
          style: {
            "--pad-keyboard-rows": uB.length,
            "--pad-keyboard-height": `${dB.maxHeightPx}px`
          },
          onPointerDown: fl,
          onMouseDown: tl,
          children: [(0, aB.jsx)(Ml, {
            target: dB.target,
            label: dB.kind ? TB(il[dB.kind]) : dB.target.placeholder || TB("controller:keyboardTargetText")
          }), (0, aB.jsx)("div", {
            className: "PadKeyboardRows",
            children: uB.map(((BB, TB) => (0, aB.jsx)("div", {
              className: RB()("PadKeyboardRow", {
                PadKeyboardPhraseRow: "phrase" === BB[0].type
              }),
              children: BB.map(((BB, yB) => {
                const pB = VB && dB.focus.row === TB && dB.focus.col === yB,
                  lB = "command" === BB.type ? vl.get(BB.command) : void 0;
                return (0, aB.jsx)("div", {
                  className: "PadKeyboardKeySlot",
                  style: {
                    width: BB.width / HB * 100 + "%"
                  },
                  children: (0, aB.jsxs)("div", {
                    className: RB()("PadKeyboardKey", {
                      PadKeyboardKeyFocused: pB,
                      PadKeyboardKeyCommand: "command" === BB.type,
                      PadKeyboardKeyPhrase: "phrase" === BB.type,
                      PadKeyboardKeyActive: "command" === BB.type && "shift" === BB.command && "off" !== dB.shift,
                      PadKeyboardKeySubmit: "command" === BB.type && "submit" === BB.command
                    }),
                    role: "button",
                    onClick: () => {
                      vB({
                        row: TB,
                        col: yB
                      })
                    },
                    onTouchEnd: BB => {
                      var dB, VB;
                      BB.preventDefault(), dB = BB.changedTouches[0], VB = BB.currentTarget.getBoundingClientRect(), dB && dB.clientX >= VB.left && dB.clientX <= VB.right && dB.clientY >= VB.top && dB.clientY <= VB.bottom && vB({
                        row: TB,
                        col: yB
                      })
                    },
                    children: [(0, aB.jsx)("span", {
                      className: "PadKeyboardKeyLabel",
                      children: EB(BB)
                    }), VB && lB && (0, aB.jsx)(NV, {
                      className: "PadKeyboardKeyGlyph",
                      glyph: (0, oB.m)(lB)
                    })]
                  })
                }, yB)
              }))
            }, TB)))
          })]
        })
      },
      Ml = BB => {
        let {
          target: TB,
          label: dB
        } = BB;
        Nl(TB);
        const VB = (0, PB.useRef)(null),
          yB = (0, PB.useRef)(null),
          pB = TB instanceof HTMLTextAreaElement;
        (0, PB.useLayoutEffect)((() => {
          const BB = VB.current,
            TB = yB.current;
          pB ? BB.scrollTop = TB.offsetTop - BB.clientHeight / 2 : BB.scrollLeft = TB.offsetLeft - BB.clientWidth / 2
        }));
        const {
          value: lB,
          start: JB,
          end: YB
        } = BT(TB), gB = "password" === TB.type ? "\u2022".repeat(lB.length) : lB;
        return (0, aB.jsxs)("div", {
          className: "PadKeyboardPreview",
          children: [(0, aB.jsx)("div", {
            className: "PadKeyboardPreviewLabel SmallTextBold",
            children: dB
          }), (0, aB.jsxs)("div", {
            ref: VB,
            className: RB()("PadKeyboardPreviewText", {
              PadKeyboardPreviewMultiline: pB
            }),
            children: [(0, aB.jsx)("span", {
              children: gB.slice(0, JB)
            }), (0, aB.jsx)("span", {
              ref: yB,
              className: "PadKeyboardCaret"
            }), JB !== YB && (0, aB.jsx)("span", {
              className: "PadKeyboardPreviewSelection",
              children: gB.slice(JB, YB)
            }), (0, aB.jsx)("span", {
              children: gB.slice(YB)
            }), 0 === gB.length && TB.placeholder && TB.placeholder !== dB && (0, aB.jsx)("span", {
              className: "PadKeyboardPreviewPlaceholder",
              children: TB.placeholder
            })]
          })]
        })
      };
    var zl = dB(1275),
      wl = dB(2902);
    const Ul = function() {
        for (var BB = arguments.length, TB = new Array(BB), dB = 0; dB < BB; dB++) TB[dB] = arguments[dB];
        return TB.map(oB.m)
      },
      Fl = (BB, TB) => {
        const dB = qy(BB);
        return dB ? [{
          glyphs: [dB],
          labelKey: TB
        }] : []
      },
      Kl = [".BottomMiddleElements", ".BottomLeftElements > *", ".BottomRightElements > *", ".MiddleTextBottom .MiddleText"],
      rl = "--pad-hint-bar-clearance",
      Il = "[data-pad-hint-bar-avoid]",
      cl = BB => {
        const TB = [];
        for (const dB of BB) gT(dB) && TB.push(dB.getBoundingClientRect());
        return TB
      },
      Sl = BB => {
        if (!BB) return null;
        const TB = Lp(),
          dB = TB ? cl(((BB, TB) => {
            const dB = BB.closest(Il);
            return dB ? [dB] : ("popup" === TB ? document : BB).querySelectorAll(Il)
          })(TB.root, TB.layer.kind)) : [],
          VB = !TB || TB.root.hasAttribute("data-pad-shows-hud");
        if (((0, wl.i)(null === TB || void 0 === TB ? void 0 : TB.layer.kind, (0, wl.j)()) || VB) && dB.push(...cl(document.querySelectorAll(Kl.join(",")))), 0 === dB.length) return null;
        const {
          width: yB,
          height: pB
        } = BB.getBoundingClientRect(), lB = window.innerHeight - 8, JB = (0, wl.n)(lB, {
          width: yB,
          height: pB
        }, window.innerWidth / 2, dB, 8);
        return JB === lB ? null : Math.round(window.innerHeight - JB)
      },
      Pl = BB => {
        const TB = document.documentElement.style,
          dB = BB ? `${Math.round(window.innerHeight-BB.getBoundingClientRect().top)}px` : "";
        TB.getPropertyValue(rl) !== dB && (dB ? TB.setProperty(rl, dB) : TB.removeProperty(rl))
      },
      Ql = () => {
        const {
          t: BB
        } = (0, yB.z)(), {
          hideButtonHints: TB
        } = (0, LB.r)(), dB = (0, OB.z)(), [VB, pB] = (0, PB.useState)(!1), [lB, gB] = (0, PB.useState)([]), [uB, HB] = (0, PB.useState)(null), EB = (0, PB.useRef)(null), vB = (0, PB.useRef)(null);
        (0, uV.e)(CB.e, (BB => {
          pB(BB)
        })), (0, uV.e)(wl.l, (() => {
          var BB;
          null === (BB = vB.current) || void 0 === BB || BB.call(vB)
        }));
        const mB = dB && !TB && !VB;
        return (0, PB.useEffect)((() => {
          if (!mB) return;
          let BB = null;
          const TB = () => {
            const TB = (() => {
                var BB;
                const TB = kB.d.getActiveConsumerName(),
                  dB = (0, wl.f)();
                if (dB) {
                  const BB = (0, oB.m)(dB),
                    TB = "emoteWheel" === dB && "wheel" === (0, LB.h)().emoteButton || !(0, DB.H)(kB.d.getLastFrame().values, BB) ? {
                      glyphs: Ul("menuConfirm"),
                      labelKey: "controller:menusSelect"
                    } : {
                      glyphs: [BB],
                      labelKey: "controller:wheelReleaseToPick"
                    };
                  return [{
                    glyphs: [(0, oB.J)(BB)],
                    labelKey: "controller:wheelChoose"
                  }, TB, {
                    glyphs: Ul("menuBack"),
                    labelKey: "controller:wheelClose"
                  }]
                }
                const VB = Lp();
                if (!VB || "focus" !== TB && "cursor" !== TB) return (0, wl.d)(oB.m);
                const yB = [],
                  pB = {
                    glyphs: Ul("menuBack"),
                    labelKey: "controller:menusBack"
                  },
                  lB = PT(VB.root),
                  JB = lB ? !oT(lB) : Boolean(VB.layer.close),
                  gB = !lB && VB.layer.closeLabelKey ? VB.layer.closeLabelKey : pB.labelKey,
                  OB = JB ? [{
                    ...pB,
                    labelKey: gB
                  }] : [],
                  uB = cy(VB.layer.kind) ? [{
                    glyphs: Ul("chat"),
                    labelKey: "controller:menusQuickChat"
                  }] : [];
                if ("cursor" === TB) return yB.push({
                  glyphs: Ul("menuConfirm"),
                  labelKey: "controller:menusClick"
                }), yB.push({
                  glyphs: Ul("menuSecondary"),
                  labelKey: "controller:menusRightClick"
                }), yB.push(...OB), yB.push(...uB), yB.push({
                  glyphs: ["RightStick"],
                  labelKey: "controller:menusScroll"
                }), Up() && yB.push({
                  glyphs: Ul("menuToggleCursor"),
                  labelKey: "controller:menusFocusMode"
                }), yB;
                const HB = dl.getFocused();
                HB && (0, cp.b)(HB) ? yB.push({
                  glyphs: ["Left", "Right"],
                  labelKey: "controller:menusAdjust"
                }) : HB && cT(HB) ? yB.push({
                  glyphs: [],
                  labelKey: "controller:menusUseMouse"
                }) : yB.push({
                  glyphs: Ul("menuConfirm"),
                  labelKey: "controller:menusSelect"
                });
                const EB = HB ? null === (BB = Hy(HB)) || void 0 === BB ? void 0 : BB.dataset.padSecondary : void 0;
                EB && yB.push({
                  glyphs: Ul("menuSecondary"),
                  labelKey: EB
                }), yB.push(...null !== HB && void 0 !== HB && HB.closest("[data-pad-friends-column]") ? [pB] : OB), yB.push(...uB);
                const vB = "home" === VB.layer.kind;
                Ay(VB.root) || !Ry(VB.root) && !by(VB) ? vB && yB.push({
                  glyphs: Ul("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusRows"
                }) : yB.push({
                  glyphs: Ul("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusTabs"
                }), vB && (yB.push(...Fl("inventory", "controller:menusFriends")), EB || yB.push({
                  glyphs: Ul("menuSecondary"),
                  labelKey: "controller:menusSearch"
                }), yB.push(...Fl("pause", "controller:menusSettings")), yB.push(...Fl("leaderboard", "controller:menusNotifications")));
                const mB = YB.d.get("openEverythingMenuName");
                return "inGame" === YB.d.get("gameState") && "popup" !== VB.layer.kind && null !== mB && ((0, Ly.j)(mB) ? yB.push(...Fl("leaderboard", "controller:menusClose")) : mB !== ky.m.LOBBY_LEADERBOARD && yB.push(...Fl("leaderboard", "controller:menusLobby"))), yB.push({
                  glyphs: Ul("menuToggleCursor"),
                  labelKey: "controller:menusCursorMode"
                }), yB
              })(),
              dB = Sl(EB.current),
              VB = ((BB, TB) => `${BB.map((BB=>`${BB.glyphs.join("+")}:${BB.labelKey}`)).join("|")}@${TB}`)(TB, dB);
            VB !== BB && (BB = VB, (0, JB.unstable_batchedUpdates)((() => {
              gB(TB), HB(dB)
            }))), Pl(EB.current)
          };
          TB(), vB.current = TB;
          const dB = requestAnimationFrame(TB),
            VB = setInterval(TB, 150);
          return () => {
            vB.current = null, cancelAnimationFrame(dB), clearInterval(VB), Pl(null)
          }
        }), [mB]), (0, PB.useLayoutEffect)((() => {
          if (!mB) return;
          if (0 === lB.length) return void Pl(null);
          const BB = Sl(EB.current);
          BB === uB ? Pl(EB.current) : HB(BB)
        }), [mB, lB, uB]), mB && 0 !== lB.length ? (0, aB.jsx)("div", {
          ref: EB,
          className: "PadButtonHintBar SmallTextBold",
          style: null === uB ? void 0 : {
            bottom: uB
          },
          "aria-hidden": !0,
          children: lB.map((TB => (0, aB.jsxs)("div", {
            className: "PadButtonHint",
            children: [TB.glyphs.map((BB => (0, aB.jsx)(NV, {
              glyph: BB,
              className: "PadButtonHintGlyph"
            }, BB))), (0, aB.jsx)("span", {
              children: BB(TB.labelKey)
            })]
          }, TB.labelKey)))
        }) : null
      },
      Rl = [JT, "label", "[data-pad-slider]"].join(","),
      al = "data-pad-cursor-probe",
      Zl = BB => {
        var TB;
        const dB = (BB => {
          const TB = [];
          for (let VB = BB; VB && VB !== document.body && VB !== document.documentElement && (TB.push(VB), !(TB.length > 8)); VB = VB.parentElement);
          const dB = document.documentElement.classList.contains(OB.p) ? TB[TB.length - 1] : void 0;
          null === dB || void 0 === dB || dB.setAttribute(al, "");
          try {
            return TB.map((BB => ({
              element: BB,
              cursor: getComputedStyle(BB).cursor
            })))
          } finally {
            null === dB || void 0 === dB || dB.removeAttribute(al)
          }
        })(BB);
        if ("pointer" !== (null === (TB = dB[0]) || void 0 === TB ? void 0 : TB.cursor)) return null;
        let VB = 0;
        for (; VB + 1 < dB.length && "pointer" === dB[VB + 1].cursor;) VB++;
        return dB[VB].element
      },
      Xl = (BB, TB, dB, VB) => {
        const yB = VB.root.contains(BB) ? VB.root : null;
        for (let pB = BB; pB && pB !== document.body && pB !== document.documentElement; pB = pB.parentElement) {
          if (pB instanceof HTMLElement && zB(pB, TB) && rB(pB, TB, dB)) return pB;
          if (pB === yB) break
        }
        return "home" === VB.layer.kind || "gamePage" === VB.layer.kind ? ((BB, TB) => {
          const dB = document.scrollingElement;
          return dB instanceof HTMLElement && ![document.documentElement, document.body].some((TB => {
            const dB = getComputedStyle(TB),
              VB = "y" === BB ? dB.overflowY : dB.overflowX;
            return "hidden" === VB || "clip" === VB
          })) && rB(dB, BB, TB) ? dB : null
        })(TB, dB) : null
      };
    const Wl = new class {
        constructor() {
          this.state = {
            x: 0,
            y: 0,
            speedRamp: 0
          }, this.hasPosition = !1, this.active = !1, this.hidden = !1, this.hit = null, this.interactive = null, this.magnet = null, this.lastHitTestMs = -1 / 0, this.press = null, this.draggedSlider = null, this.repeatStop = null, this.repeatKey = null, this.repeated = !1, this.confirmRepeat = (0, uB.d)(DB.t), this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.layerRoot = null, this.layerOrder = 0, this.layerPoints = new WeakMap, this.page = null, this.pendingPageStart = null
        }
        install() {
          const BB = kB.d.register({
              name: "cursor",
              isActive: () => "cursor" === Fp(),
              onFrame: BB => {
                this.onFrame(BB)
              },
              onDeactivate: () => {
                this.deactivate()
              },
              wakePressActs: BB => (0, kB.h)(BB) || BB === (0, oB.m)("menuConfirm") && ST((0, OB.b)())
            }),
            TB = (0, yp.o)((BB => {
              const TB = BB.getRoot();
              TB && this.layerPoints.delete(TB), TB === this.layerRoot && (this.layerRoot = null)
            })),
            dB = gB.h.subscribe("appManagerUpdated|activeInputDevice", (BB => {
              "gamepad" !== BB && this.active && !this.hidden && this.hide()
            }));
          return () => {
            BB(), TB(), gB.h.unsubscribe(dB), this.deactivate()
          }
        }
        getHighlighted() {
          return this.isVisible() ? this.interactive : null
        }
        isVisible() {
          return this.active && !this.hidden && (0, OB.k)()
        }
        getPoint() {
          return {
            x: this.state.x,
            y: this.state.y
          }
        }
        hide() {
          this.hidden = !0, this.cancelPress(), this.secondaryArmed = !1, this.clearHover(), this.yH()
        }
        activate(BB) {
          this.active = !0, this.hidden = !1;
          const TB = Mp();
          !TB || TB.root && TB.root !== BB.root ? this.jumpTo(this.hasPosition ? this.getPoint() : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          }) : (this.setLayer(BB), this.jumpTo(TB.point))
        }
        jumpTo(BB) {
          this.state = {
            x: BB.x,
            y: BB.y,
            speedRamp: 0
          }, this.hasPosition = !0, this.lastHitTestMs = -1 / 0
        }
        deactivate() {
          this.active && (this.active = !1, this.page = null, this.pendingPageStart = null, this.cancelPress(), this.clearHover(), this.draggedSlider = null, this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.yH())
        }
        onFrame(BB) {
          const TB = Lp();
          if (!TB) return;
          if (this.active || this.activate(TB), this.followPage(TB)) return;
          this.followLayer(TB);
          const dB = BB.wokeDevice ? (0, OB.b)() : null;
          if (dB && this.jumpTo(dB), !(0, OB.k)()) return void this.hide();
          const VB = (0, oB.m)("menuToggleCursor");
          if (BB.wasPressed(VB)) return kB.d.consumeButton(VB), void sp(this.getHandoff(null));
          if (this.handBackToFocus(BB)) return;
          const yB = (0, oB.m)("menuConfirm"),
            pB = (0, oB.m)("menuSecondary");
          if (BB.wasPressed((0, oB.m)("menuBack"))) return rT(TB.root) || QT(TB.root) || Op(), void this.yH();
          if (Bp(null, BB, TB)) return BB.wasReleased(yB) && this.press && (this.updateHit(!1), this.updateConfirm(BB, yB)), void this.yH();
          if (document.pointerLockElement) return void this.hide();
          const lB = Kp() ? {
              x: 0,
              y: 0
            } : (BB => {
              const TB = (BB, TB) => (BB ? 1 : 0) - (TB ? 1 : 0);
              return {
                x: TB(BB.isHeld("Right"), BB.isHeld("Left")),
                y: TB(BB.isHeld("Down"), BB.isHeld("Up"))
              }
            })(BB),
            JB = (0, LB.h)().moveDeadzone,
            YB = ((BB, TB) => {
              const dB = (0, DB.k)(BB, iB(TB));
              return Math.hypot(dB.x, dB.y)
            })(BB.leftStick, JB) > 0 || 0 !== lB.x || 0 !== lB.y;
          if (this.hidden) {
            const TB = BB.wasPressed(yB),
              dB = BB.wasPressed(pB);
            if (!YB && !fB(BB.rightStick) && !TB && !dB && !BB.wokeDevice) return void this.yH();
            if (this.hidden = !1, this.updateHit(!1), TB || dB) return TB && (this.press = {
              kind: "ignored"
            }, BB.wokeDevice && this.beginRepeat()), this.secondaryArmed = !1, void this.yH()
          }
          this.movePendingPageStart(YB);
          const gB = this.getPoint();
          this.state = tB(this.state, {
            stick: BB.leftStick,
            moveDeadzone: JB,
            dpad: lB,
            dtMs: BB.dtMs,
            cursorSpeedPercent: (0, LB.h)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: this.getAssistContext()
          });
          const uB = this.state.x !== gB.x || this.state.y !== gB.y,
            HB = [yB, pB].some((TB => BB.wasPressed(TB) || BB.wasReleased(TB)));
          (uB || HB || performance.now() - this.lastHitTestMs >= 100) && this.updateHit(uB), this.updateConfirm(BB, yB), this.updateSecondary(BB, pB), this.updateScroll(BB, TB), this.yH()
        }
        followPage(BB) {
          const TB = "home" === BB.layer.kind || "gamePage" === BB.layer.kind,
            dB = this.page;
          if (this.page = TB ? {
              key: (0, yp.u)(BB.layer),
              root: BB.root
            } : null, !this.page || !dB || dB.root !== BB.root || dB.key === this.page.key) return !1;
          if (this.cancelPress(), this.secondaryArmed = !1, this.setLayer(BB), "hybrid" === fp()) return ip = null, vp = null, Np.lock(), !0;
          const {
            key: VB
          } = this.page;
          return this.pendingPageStart = {
            root: BB.root,
            key: VB,
            returning: dl.notePageEnteredByCursor(VB),
            enteredAtMs: performance.now()
          }, !1
        }
        movePendingPageStart(BB) {
          const TB = this.pendingPageStart;
          if (!TB) return;
          if (BB || TB.root !== this.layerRoot) return void(this.pendingPageStart = null);
          const dB = TB.returning ? dl.recallStop(TB.root, TB.key) : null;
          if (!dB && TB.returning && performance.now() - TB.enteredAtMs < 1e3) return;
          const VB = null !== dB && void 0 !== dB ? dB : dl.pickInitial(TB.root, {
            includeDisabled: !0,
            waitForContent: !0,
            enteredAtMs: TB.enteredAtMs
          });
          VB && (this.pendingPageStart = null, this.jumpTo(iT(VB)))
        }
        setLayer(BB) {
          this.layerRoot = BB.root, this.layerOrder = BB.order
        }
        followLayer(BB) {
          var TB;
          if (BB.root === this.layerRoot) return;
          null !== (TB = this.layerRoot) && void 0 !== TB && TB.isConnected && this.layerPoints.set(this.layerRoot, this.getPoint()), this.cancelPress(), this.draggedSlider = null, this.secondaryArmed = !1;
          const dB = this.layerPoints.get(BB.root),
            VB = dB && BB.order <= this.layerOrder ? dB : dl.getLayerStartPoint(BB.root);
          this.setLayer(BB), this.jumpTo(VB)
        }
        getHandoff(BB) {
          var TB;
          return {
            point: this.getPoint(),
            element: null !== (TB = this.interactive) && void 0 !== TB ? TB : this.findDraggedSliderNearby(),
            direction: BB
          }
        }
        findDraggedSliderNearby() {
          const BB = this.draggedSlider;
          if (null === BB || void 0 === BB || !BB.isConnected) return null;
          const TB = BB.getBoundingClientRect(),
            {
              y: dB
            } = this.getPoint();
          return dB >= TB.top - 40 && dB <= TB.bottom + 40 ? BB : null
        }
        handBackToFocus(BB) {
          if (!Kp()) return !1;
          const TB = DB.D.find((TB => BB.wasPressed(TB)));
          return !!TB && (dB = this.getHandoff(TB), ip = Hp(dB), vp = null, Np.lock(), kB.d.handOffHeldInput(), !0);
          var dB
        }
        getAssistContext() {
          const BB = this.interactive;
          if (null === BB || void 0 === BB || !BB.isConnected) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const TB = BB.getBoundingClientRect();
          if (TB.width > .4 * window.innerWidth || TB.height > .4 * window.innerHeight) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const dB = (0, LB.h)().cursorMagnetism && !(0, GB.c)(BB) && !BB.closest("[data-pad-slider]"),
            VB = this.magnet && this.magnet !== BB && this.magnet.isConnected ? this.magnet.getBoundingClientRect() : TB;
          return {
            overInteractive: !0,
            magnetTarget: dB ? {
              x: VB.left + VB.width / 2,
              y: VB.top + VB.height / 2
            } : null
          }
        }
        updateHit(BB) {
          this.lastHitTestMs = performance.now();
          const TB = this.getPoint(),
            dB = document.elementFromPoint(TB.x, TB.y),
            VB = dB && !(0, EB.m)(dB) && (BB => {
              var TB;
              const dB = Lp();
              return !(dB && !dB.root.contains(BB) && !BB.closest(".tooltip-container")) || !(null !== (TB = document.getElementById("root")) && void 0 !== TB && TB.contains(BB))
            })(dB) ? dB : null;
          if (VB !== this.hit) return zT(this.hit, VB, TB), this.hit = VB, void this.setInteractive(VB ? (BB => {
            const TB = BB.closest(Rl);
            if (TB) {
              var dB, VB;
              const BB = null !== (dB = null === (VB = TB.parentElement) || void 0 === VB ? void 0 : VB.closest("[data-pad-focusable]")) && void 0 !== dB ? dB : TB;
              return oT(BB) ? {
                element: null,
                magnet: null
              } : {
                element: BB,
                magnet: TB
              }
            }
            const yB = Zl(BB);
            return {
              element: yB,
              magnet: yB
            }
          })(VB) : {
            element: null,
            magnet: null
          });
          BB && VB && zT(VB, VB, TB)
        }
        setInteractive(BB) {
          let {
            element: TB,
            magnet: dB
          } = BB;
          this.interactive = TB, this.magnet = dB
        }
        clearHover() {
          this.hit && zT(this.hit, null, this.getPoint()), this.hit = null, this.setInteractive({
            element: null,
            magnet: null
          })
        }
        beginPress() {
          const BB = this.hit;
          if (!BB || cT(BB)) return {
            kind: "ignored"
          };
          const TB = (0, cp.b)(BB),
            dB = BB.closest("[data-pad-slider]");
          return TB && dB ? {
            kind: "slider",
            slider: dB,
            adjuster: TB
          } : (fT(BB, this.getPoint()), {
            kind: "pointer",
            target: BB
          })
        }
        applySliderFraction(BB) {
          var TB;
          const dB = BB.slider.getBoundingClientRect(),
            VB = dB.height > dB.width,
            yB = null === (TB = BB.slider.querySelector("[data-pad-slider-handle]")) || void 0 === TB ? void 0 : TB.getBoundingClientRect(),
            pB = yB ? VB ? yB.height : yB.width : 0,
            lB = (VB ? dB.height : dB.width) - pB;
          if (lB <= 0) return;
          const JB = VB ? dB.bottom - pB / 2 - this.state.y : this.state.x - dB.left - pB / 2;
          BB.adjuster.setFraction(Math.max(0, Math.min(1, JB / lB)))
        }
        updateConfirm(BB, TB) {
          BB.wasPressed(TB) && (this.press = BB.wokeDevice ? {
            kind: "ignored"
          } : this.beginPress(), this.draggedSlider = "slider" === this.press.kind ? this.press.slider : null, this.beginRepeat());
          const dB = this.press;
          if (!dB) return;
          if (BB.isHeld(TB)) return "slider" === dB.kind && this.applySliderFraction(dB), void this.updateRepeat();
          this.press = null;
          const VB = this.repeated;
          if (this.endRepeat(), !BB.wasReleased(TB)) return void this.endPressWithoutClick(dB);
          const yB = this.getPoint(),
            pB = this.hit;
          if ("slider" === dB.kind && dB.adjuster.endDrag(), "pointer" === dB.kind) {
            const BB = null !== pB && void 0 !== pB ? pB : dB.target.isConnected ? dB.target : null;
            BB && sT(BB, yB);
            const TB = pB && dB.target.isConnected && !VB ? ((BB, TB) => {
              for (let dB = BB; dB; dB = dB.parentElement)
                if (dB.contains(TB)) return dB;
              return null
            })(dB.target, pB) : null;
            TB && (dl.noteCursorActivation(TB), (0, EB.e)(TB, new MouseEvent("click", NT(yB, 0, 0))), IT(TB), mT(TB) && wT(TB))
          }
        }
        beginRepeat() {
          var BB, TB, dB;
          const VB = null !== (BB = null === (TB = this.hit) || void 0 === TB ? void 0 : TB.closest("[data-pad-repeat]")) && void 0 !== BB ? BB : null;
          this.repeatStop = VB, this.repeatKey = null !== (dB = null === VB || void 0 === VB ? void 0 : VB.getAttribute("data-pad-repeat")) && void 0 !== dB ? dB : null, this.repeated = !1, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now())
        }
        updateRepeat() {
          const BB = this.repeatStop;
          if (!BB) return;
          const TB = this.hit;
          BB.isConnected && !oT(BB) && BB.getAttribute("data-pad-repeat") === this.repeatKey && TB && BB.contains(TB) ? BB.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.repeated = !0, dl.noteCursorActivation(BB), (0, EB.e)(BB, new MouseEvent("click", NT(this.getPoint(), 0, 0)))) : this.repeatStop = null
        }
        endRepeat() {
          this.repeatStop = null, this.repeated = !1
        }
        endPressWithoutClick(BB) {
          "slider" === BB.kind && BB.adjuster.endDrag(), "pointer" === BB.kind && BB.target.isConnected && sT(BB.target, this.getPoint())
        }
        cancelPress() {
          this.endRepeat(), this.press && (this.endPressWithoutClick(this.press), this.press = null)
        }
        updateSecondary(BB, TB) {
          BB.wasPressed(TB) && (this.secondaryArmed = null !== this.hit), this.secondaryArmed && !BB.isHeld(TB) && (this.secondaryArmed = !1, BB.wasReleased(TB) && this.hit && MT(this.hit, this.getPoint(), 2))
        }
        updateScroll(BB, TB) {
          const dB = sB(BB.rightStick, BB.dtMs);
          if (0 === dB.x && 0 === dB.y) return void(this.scrollRemainder = {
            x: 0,
            y: 0
          });
          this.scrollRemainder = {
            x: this.scrollRemainder.x + dB.x,
            y: this.scrollRemainder.y + dB.y
          };
          const VB = Math.trunc(this.scrollRemainder.x),
            yB = Math.trunc(this.scrollRemainder.y);
          this.scrollRemainder = {
            x: this.scrollRemainder.x - VB,
            y: this.scrollRemainder.y - yB
          };
          const pB = this.hit;
          if (!pB) return;
          let lB = !1;
          if (0 !== yB) {
            const BB = Xl(pB, "y", yB > 0 ? 1 : -1, TB);
            BB && (BB.scrollBy({
              top: yB,
              behavior: "instant"
            }), lB = !0)
          }
          if (0 !== VB) {
            const BB = Xl(pB, "x", VB > 0 ? 1 : -1, TB);
            BB && (BB.scrollBy({
              left: VB,
              behavior: "instant"
            }), lB = !0)
          }
          lB && (this.lastHitTestMs = -1 / 0)
        }
        yH() {
          ZT.set({
            x: this.state.x,
            y: this.state.y,
            visible: this.isVisible(),
            pressed: null !== this.press && "ignored" !== this.press.kind
          })
        }
      },
      hl = () => {
        const BB = (0, PB.useMemo)((() => new WB), []),
          TB = (0, OB.z)();
        return (0, PB.useEffect)((() => {
          if (!TB) return;
          let dB = 0,
            VB = {
              of: null,
              atMs: 0,
              list: []
            };
          const yB = document.getElementsByClassName(rp),
            pB = BB => {
              for (const TB of [...yB]) TB !== BB && TB.classList.remove(rp)
            },
            lB = () => {
              var TB;
              dB = requestAnimationFrame(lB);
              const yB = (() => {
                const BB = dl.getFocused();
                if (dl.isActive() && null !== BB && void 0 !== BB && BB.isConnected) return BB;
                const TB = Wl.getHighlighted();
                return null !== TB && void 0 !== TB && TB.isConnected ? TB : null
              })();
              pB(yB), yB && !yB.classList.contains(rp) && yB.classList.add(rp);
              const JB = null !== (TB = null === yB || void 0 === yB ? void 0 : yB.closest("[data-pad-reticle-box]")) && void 0 !== TB ? TB : yB;
              BB.show(JB ? ((BB, TB) => {
                let dB = BB.left,
                  VB = BB.top,
                  yB = BB.right,
                  pB = BB.bottom;
                for (const lB of TB) {
                  if (!lB) continue;
                  const BB = cB(lB);
                  dB = Math.max(dB, BB.left), VB = Math.max(VB, BB.top), yB = Math.min(yB, BB.right), pB = Math.min(pB, BB.bottom)
                }
                return yB <= dB || pB <= VB ? null : {
                  left: dB,
                  top: VB,
                  width: yB - dB,
                  height: pB - VB
                }
              })(JB.getBoundingClientRect(), (BB => {
                const TB = performance.now();
                return (VB.of !== BB || TB - VB.atMs > 500) && (VB = {
                  of: BB,
                  atMs: TB,
                  list: [wB(BB, "y"), wB(BB, "x")]
                }), VB.list
              })(JB)) : null)
            };
          return dB = requestAnimationFrame(lB), () => {
            cancelAnimationFrame(dB), pB(null), BB.hide()
          }
        }), [TB, BB]), (0, aB.jsx)(hB, {
          placer: BB,
          className: "PadFocusRing"
        })
      },
      Cl = (BB, TB) => {
        BB.style.transform = `translate3d(${TB.x}px, ${TB.y}px, 0)`, BB.classList.toggle("Visible", TB.visible), BB.classList.toggle("Pressed", TB.pressed)
      },
      Gl = () => {
        const BB = (0, PB.useRef)(null);
        return (0, PB.useEffect)((() => {
          const TB = ZT.subscribe((TB => {
            BB.current && Cl(BB.current, TB)
          }));
          return BB.current && Cl(BB.current, ZT.get()), TB
        }), []), (0, aB.jsx)("div", {
          ref: BB,
          className: "PadCursorView",
          "aria-hidden": "true",
          children: (0, aB.jsx)("div", {
            className: "PadCursorGlyph",
            children: "+"
          })
        })
      },
      ql = "#ncmp__modal.ncmp__active",
      xl = [{
        id: "nitro-consent-banner",
        find: () => document.querySelector(ql) ? null : document.querySelector("#ncmp__tool > .ncmp__banner.ncmp__active"),
        startSelectors: ["[data-ncmp-cmd='reject']", "[data-ncmp-cmd='showModal']"]
      }, {
        id: "nitro-consent-modal",
        find: () => document.querySelector(ql),
        startSelectors: ["[data-ncmp-cmd='reject']"]
      }, {
        id: "google-consent",
        find: () => document.querySelector(".fc-consent-root"),
        startSelectors: [".fc-cta-do-not-consent", ".fc-cta-manage-options"]
      }],
      jl = "PadOverThirdParty",
      Al = new Set(xl.map((BB => BB.id))),
      bl = () => {
        const BB = xl.map((BB => {
            let {
              id: TB,
              find: dB,
              startSelectors: VB
            } = BB;
            return (0, yp.q)({
              id: TB,
              kind: "popup",
              getRoot: () => {
                const BB = dB(),
                  TB = BB ? ((BB, TB) => {
                    var dB;
                    for (const VB of TB) {
                      const TB = BB.querySelector(VB);
                      if (TB) return TB
                    }
                    return null !== (dB = [...BB.querySelectorAll("button")].find((BB => !BB.matches(".fc-cta-consent, [data-ncmp-cmd='save']")))) && void 0 !== dB ? dB : null
                  })(BB, VB) : null;
                if (BB && TB && !TB.hasAttribute("data-pad-default-focus")) {
                  for (const TB of BB.querySelectorAll("[data-pad-default-focus]")) TB.removeAttribute("data-pad-default-focus");
                  for (const TB of BB.querySelectorAll("[data-pad-hint-bar-avoid]")) TB.removeAttribute("data-pad-hint-bar-avoid");
                  TB.setAttribute("data-pad-default-focus", ""), ((BB, TB) => {
                    let dB = BB;
                    for (let VB = BB.parentElement; VB && TB.contains(VB) && !(VB.getBoundingClientRect().height >= window.innerHeight / 2); VB = VB.parentElement) dB = VB;
                    return dB
                  })(TB, BB).setAttribute("data-pad-hint-bar-avoid", "")
                }
                return BB
              },
              close: null,
              memoryKey: null
            })
          })),
          TB = document.documentElement,
          dB = lB.e.onFrame((() => {
            const BB = (0, OB.k)() ? Lp() : null,
              dB = !!BB && (VB = BB.layer, Al.has(VB.id));
            var VB;
            TB.classList.contains(jl) !== dB && TB.classList.toggle(jl, dB)
          }));
        return () => {
          for (const TB of BB) TB();
          dB(), TB.classList.remove(jl)
        }
      },
      nl = "PadLargePointer",
      el = () => {
        (0, PB.useEffect)((() => {
          const BB = (0, EB.l)(document.body),
            TB = dl.install(),
            dB = Wl.install(),
            VB = bl();
          return () => {
            BB(), TB(), dB(), VB()
          }
        }), []);
        const {
          largePointer: BB
        } = (0, LB.r)(), TB = (0, zl.r)() && BB;
        return (0, PB.useEffect)((() => {
          if (TB) return document.documentElement.classList.add(nl), () => {
            document.documentElement.classList.remove(nl)
          }
        }), [TB]), (0, JB.createPortal)((0, aB.jsxs)(aB.Fragment, {
          children: [(0, aB.jsx)(Ql, {}), (0, aB.jsx)(hl, {}), (0, aB.jsx)(Gl, {})]
        }), document.body)
      };
    var BJ = dB(8122),
      TJ = dB(8140),
      dJ = dB(8130);
    dB(8147);
    const VJ = (BB, TB) => {
        const [dB, VB] = (0, PB.useState)(!1), [yB, pB] = (0, PB.useState)(null), lB = (0, PB.useRef)(null), JB = (0, PB.useCallback)((BB => {
          lB.current = BB, pB(BB)
        }), []), YB = (0, PB.useCallback)((() => {
          VB(!1), JB(null)
        }), [JB]), oB = (0, PB.useCallback)((() => {
          VB(!0)
        }), []), kB = (0, PB.useCallback)(((BB, TB) => {
          JB((0, dJ.C)(BB, TB, lB.current))
        }), [JB]);
        (0, PB.useLayoutEffect)((() => (TB(dB), (0, wl.t)(BB, dB), gB.h.yH(wl.l), () => {
          TB(!1), (0, wl.t)(BB, !1), gB.h.yH(wl.l)
        })), [dB, BB, TB]), (0, uV.e)("appManagerUpdated|activeInputDevice", (BB => {
          "gamepad" !== BB && YB()
        })), (0, uV.e)("appManagerUpdated|gameState", (BB => {
          "inGame" !== BB && YB()
        }));
        const LB = () => {
          (0, Ly.l)() && YB()
        };
        return (0, uV.e)("appManagerUpdated|openEverythingMenuName", LB), (0, uV.e)("appManagerUpdated|openInGameMenuName", LB), {
          open: dB,
          picked: yB,
          pickedRef: lB,
          show: oB,
          aim: kB,
          close: YB
        }
      },
      yJ = BB => {
        let {
          className: TB,
          slotCount: dB,
          picked: VB,
          slotLabel: yB,
          renderSlot: pB,
          centre: lB
        } = BB;
        const JB = Array.from({
          length: dB
        }, ((BB, TB) => TB));
        return (0, aB.jsx)("div", {
          className: RB()("EmoteWheelOverlay PadRadialWheel", TB),
          children: (0, aB.jsxs)("div", {
            className: "EmoteWheel",
            style: {
              width: 2 * dJ.r + "rem",
              height: 2 * dJ.r + "rem"
            },
            children: [(0, aB.jsxs)("svg", {
              className: "EmoteWheelSvg",
              viewBox: `0 0 ${dJ.m} ${dJ.m}`,
              children: [JB.map((BB => (0, aB.jsx)("path", {
                d: (0, dJ.v)(BB, dB, dJ.g, dJ.j, dJ.k),
                className: RB()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: BB === VB
                }),
                "aria-label": yB(BB)
              }, BB))), (0, aB.jsx)("circle", {
                className: "EmoteWheelOuterRing",
                cx: dJ.g,
                cy: dJ.g,
                r: dJ.k
              }), (0, aB.jsx)("circle", {
                className: "EmoteWheelInnerRing",
                cx: dJ.g,
                cy: dJ.g,
                r: dJ.j
              }), null !== VB && (0, aB.jsx)("path", {
                className: "EmoteWheelWedgeOutline",
                d: (0, dJ.v)(VB, dB, dJ.g, dJ.j, dJ.k)
              })]
            }), JB.map((BB => {
              const TB = (0, dJ.A)(BB, dB);
              return (0, aB.jsx)("div", {
                className: RB()("PadRadialWheelSlot SmallTextBold", {
                  PadRadialWheelSlotPicked: BB === VB
                }),
                style: {
                  left: `calc(50% + ${dJ.c*Math.cos(TB)}rem)`,
                  top: `calc(50% + ${dJ.c*Math.sin(TB)}rem)`
                },
                "aria-hidden": !0,
                children: pB(BB)
              }, BB)
            })), (0, aB.jsx)("div", {
              className: "EmoteWheelHint SmallTextBold",
              children: lB
            })]
          })
        })
      },
      pJ = Vl.length,
      lJ = () => {
        const {
          t: BB
        } = (0, yB.z)(), TB = VJ("chat", Iy.s), dB = (0, PB.useMemo)((() => Vl.map((TB => BB(TB)))), [BB]);
        return (0, uV.e)(Iy.p, (() => {
          TB.open || (0, BJ.i)() || (0, TJ.r)() || "inGame" !== YB.d.get("gameState") || (0, Ly.l)() || !(0, Yy.d)() || TB.show()
        })), (0, uV.e)(Iy.g, (BB => {
          TB.open && TB.aim(BB, pJ)
        })), (0, uV.e)(Iy.m, (() => {
          var BB;
          if (!TB.open) return;
          const VB = TB.pickedRef.current;
          null !== VB ? yl.claim(performance.now()) && (TB.close(), null === (BB = (0, Yy.d)()) || void 0 === BB || BB.sendLine(dB[VB])) : TB.close()
        })), (0, uV.e)(Iy.i, TB.close), TB.open ? (0, aB.jsx)(yJ, {
          className: "QuickChatWheel",
          slotCount: pJ,
          picked: TB.picked,
          slotLabel: BB => dB[BB],
          renderSlot: BB => dB[BB],
          centre: null !== TB.picked ? dB[TB.picked] : BB("controller:quickChatPick")
        }) : null
      },
      JJ = () => {
        const {
          t: BB
        } = (0, yB.z)(), TB = VJ("actionButton", TJ.v), [dB, VB] = (0, PB.useState)([]);
        if ((0, uV.e)(TJ.l, (BB => {
            TB.open || (0, BJ.i)() || (0, Iy.e)() || "inGame" !== YB.d.get("gameState") || (0, Ly.l)() || (VB(BB), TB.show())
          })), (0, uV.e)(TJ.d, (BB => {
            TB.open && TB.aim(BB, dB.length)
          })), (0, uV.e)(TJ.h, (() => {
            if (!TB.open) return;
            const BB = TB.pickedRef.current;
            TB.close(), null !== BB && gB.h.yH(TJ.o, dB[BB])
          })), (0, uV.e)(TJ.g, TB.close), !TB.open) return null;
        const pB = null !== TB.picked ? dB[TB.picked] : null;
        return (0, aB.jsx)(yJ, {
          className: "ActionWheel",
          slotCount: dB.length,
          picked: TB.picked,
          slotLabel: TB => {
            const VB = dB[TB];
            return "reload" === VB.kind ? BB("controller:gameplayReload") : "customButton" === VB.kind ? VB.description || VB.icon : "touchButton" === VB.kind && "string" === typeof VB.label ? VB.label : ""
          },
          renderSlot: BB => (0, aB.jsx)(fV, {
            action: dB[BB]
          }),
          centre: pB ? (0, aB.jsx)(fV, {
            action: pB
          }) : BB("controller:actionWheelPick")
        })
      };
    var YJ = dB(95);
    const gJ = () => ((0, PB.useEffect)((() => {
        var BB, TB;
        const dB = (0, EB.l)(document.getElementById("root")),
          VB = (0, OB.f)(),
          yB = (() => {
            const BB = [gB.h.subscribe(BV.g, (() => {
                yV("blockBreak")
              })), gB.h.subscribe("damagedByOtherPlayer", (() => {
                yV("damage")
              })), gB.h.subscribe("yourAttackHit", (BB => {
                let {
                  hitSelf: TB
                } = BB;
                TB || yV("hit")
              }))],
              TB = lB.e.onActivePadChanged((BB => {
                BB && yV("connect")
              }));
            return () => {
              for (const TB of BB) gB.h.unsubscribe(TB);
              TB()
            }
          })(),
          pB = (() => {
            const BB = new oV({
              getVisitId: gV.b,
              peekVisitId: gV.peekVisitSessionId,
              readReportedVisitId: () => {
                const BB = YV.m.getItem(kV);
                return "string" === typeof BB ? BB : null
              },
              writeReportedVisitId: BB => {
                YV.m.setItem(kV, BB)
              },
              isPadActive: OB.k,
              getPadFamily: () => {
                var BB, TB;
                return null !== (BB = null === (TB = lB.e.getActivePad()) || void 0 === TB ? void 0 : TB.family) && void 0 !== BB ? BB : null
              },
              canReport: lV.i,
              getInputType: JV.e,
              yD: lV.n
            });
            let TB = 0,
              dB = null;
            const VB = yB => {
                null === dB && ("notReady" !== BB.check(yB) || null !== dB || TB >= 20 || (TB++, dB = setTimeout((() => {
                  dB = null, VB(!1)
                }), 3e3)))
              },
              yB = gB.h.subscribe("appManagerUpdated|activeInputDevice", (() => {
                VB(!0)
              })),
              pB = (0, gV.e)((() => {
                TB = 0, VB(!0)
              }));
            return () => {
              gB.h.unsubscribe(yB), pB(), null !== dB && clearTimeout(dB)
            }
          })(),
          JB = lB.e.onFrame(((BB, TB) => {
            const dB = (0, OB.n)(BB);
            kB.d.dispatch(BB, TB, dB)
          }));
        let oB = null !== (BB = null === (TB = lB.e.getActivePad()) || void 0 === TB ? void 0 : TB.family) && void 0 !== BB ? BB : null;
        const DB = lB.e.onActivePadChanged((BB => {
            var TB, dB;
            (kB.d.reset(), (0, OB.s)(), gB.h.yH(lB.b, BB), (null !== (TB = null === BB || void 0 === BB ? void 0 : BB.family) && void 0 !== TB ? TB : null) !== oB) && (oB = null !== (dB = null === BB || void 0 === BB ? void 0 : BB.family) && void 0 !== dB ? dB : null, gB.h.yH(LB.c, (0, LB.h)()));
            !BB && (0, OB.k)() && (0, OB.v)(YB.d.get("isTouchScreen") ? "touch" : "keyboardMouse")
          })),
          uB = () => {
            "visible" !== document.visibilityState && kB.d.clear()
          },
          HB = () => {
            kB.d.clear()
          };
        document.addEventListener("visibilitychange", uB), window.addEventListener("blur", HB), lB.e.start(), (0, pV.l)();
        const vB = null;
        return () => {
          dB(), VB(), yB(), pB(), JB(), DB(), document.removeEventListener("visibilitychange", uB), window.removeEventListener("blur", HB), lB.e.stop(), null === vB || void 0 === vB || vB()
        }
      }), []), (0, aB.jsxs)("div", {
        className: "ControllerRoot",
        children: [(0, aB.jsx)(KV, {}), (0, aB.jsx)(ZV, {}), (0, aB.jsx)(XV, {}), (0, aB.jsx)(sl, {}), (0, aB.jsx)(el, {}), (0, aB.jsx)(lJ, {}), (0, aB.jsx)(JJ, {})]
      })),
      oJ = () => YJ.featureFlags.useControllerSupport ? (0, aB.jsx)(gJ, {}) : null;
    var kJ = dB(7519),
      LJ = dB(8164);
    const OJ = new Set(pV.k),
      DJ = BB => `${LJ.r}${(0,LB.l)()}/${BB}`,
      uJ = BB => {
        if (!(0, LJ.n)(BB)) return null;
        const [TB, dB] = BB.slice(LJ.r.length).split("/");
        return (0, kJ.h)(TB) && OJ.has(dB) ? (0, pV.h)(TB, dB) : null
      };
    var HJ = dB(8166);
    const EJ = () => {
        const {
          t: BB
        } = (0, yB.z)(), TB = (0, OB.z)(), {
          gameState: dB,
          isUiHidden: VB
        } = (0, YB.m)(["gameState", "isUiHidden"]), {
          hideButtonHints: pB,
          sneakMode: lB
        } = (0, LB.r)(), [JB, gB] = (0, PB.useState)(HJ.e);
        return (0, uV.e)(FV.o, gB), TB && !VB && "inGame" === dB && JB ? (0, aB.jsxs)("div", {
          className: "PadSneakChip SmallTextBold",
          children: [!pB && (0, aB.jsx)(NV, {
            glyph: (0, oB.m)("toggle" === lB ? "sneak" : "sneakToggle")
          }), (0, aB.jsx)("span", {
            children: BB("controller:gameplaySneaking")
          })]
        }) : null
      },
      vJ = 12,
      mJ = BB => {
        let {
          trigger: TB,
          className: dB,
          children: VB
        } = BB;
        const yB = (0, PB.useRef)(null);
        return (0, PB.useEffect)((() => {
          let BB = 0;
          const dB = wB(TB, "y"),
            VB = () => {
              BB = requestAnimationFrame(VB);
              const pB = yB.current;
              if (!pB || null === TB || void 0 === TB || !TB.isConnected) return;
              const {
                left: lB,
                top: JB
              } = function(BB, TB, dB) {
                let VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                  yB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                const pB = BB.left + BB.width / 2,
                  lB = Math.max(vJ, dB.width - vJ - TB.width),
                  JB = Math.min(Math.max(pB - TB.width / 2, vJ), lB),
                  YB = dB.height - VB;
                let gB = 0,
                  oB = YB;
                if (yB) {
                  const BB = Math.max(0, yB.top),
                    VB = Math.min(YB, yB.bottom);
                  VB - BB >= Math.max(dB.height / 2, TB.height + 24) && (gB = BB, oB = VB)
                }
                const kB = BB.top + BB.height / 2 < (gB + oB) / 2 ? oB - vJ - TB.height : gB + vJ;
                return {
                  left: JB,
                  top: Math.max(vJ, kB)
                }
              }(TB.getBoundingClientRect(), {
                width: pB.offsetWidth,
                height: pB.offsetHeight
              }, {
                width: window.innerWidth,
                height: window.innerHeight
              }, parseFloat(document.documentElement.style.getPropertyValue(rl)) || 0, null !== dB && void 0 !== dB && dB.isConnected ? dB.getBoundingClientRect() : null);
              pB.style.transform = `translate3d(${Math.round(lB)}px, ${Math.round(JB)}px, 0)`, pB.style.visibility = "visible"
            };
          return VB(), () => {
            cancelAnimationFrame(BB)
          }
        }), [TB]), (0, aB.jsx)("div", {
          ref: yB,
          className: dB,
          style: {
            position: "fixed",
            left: 0,
            top: 0,
            visibility: "hidden"
          },
          children: VB
        })
      };
    var iJ = dB(946),
      NJ = dB(8171),
      tJ = dB(1324),
      fJ = dB(8175),
      sJ = dB(8178);
    const MJ = {
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
        lD: {
          icon: "arrow-left",
          labelKey: "settingsMenu:exitGame"
        }
      },
      zJ = () => {
        const {
          t: BB
        } = (0, yB.z)(), TB = (0, OB.z)(), dB = (0, NJ.b)(), VB = (0, QV.j)("_tasks"), pB = (0, QV.j)("_availableLeaderboards");
        if (!TB) return null;
        const lB = (BB => {
          let {
            hasShop: TB,
            hasTasksOrLeaderboards: dB,
            canInvite: VB
          } = BB;
          const yB = [];
          return TB && yB.push("shop"), dB && yB.push("tasks"), VB && yB.push("invite"), yB.push("lD"), yB
        })({
          hasShop: dB,
          hasTasksOrLeaderboards: !(!VB && !pB),
          canInvite: !!YJ.featureFlags.canUseInviteLinks
        });
        return (0, aB.jsx)("div", {
          className: "PadLobbyShortcuts",
          children: lB.map((TB => {
            const {
              icon: dB,
              labelKey: VB
            } = MJ[TB], yB = "lD" === TB ? tJ.K : tJ.d;
            return (0, aB.jsx)(yB, {
              className: "PadLobbyShortcut",
              onClick: () => {
                (BB => {
                  switch (BB) {
                    case "shop":
                      return gB.h.yH(sJ.k), void YB.d.set({
                        openEverythingMenuName: ky.m.SHOP
                      });
                    case "tasks":
                      return void gB.h.yH("toggleMenu", "retentionFeatures");
                    case "invite":
                      return void gB.h.yH("toggleMenu", "inviteLink");
                    case "lD":
                      (0, fJ.d)()
                  }
                })(TB)
              },
              children: (0, aB.jsxs)("div", {
                className: "PadLobbyShortcutInner",
                children: [(0, aB.jsx)(iJ.e, {
                  name: dB
                }), (0, aB.jsx)("span", {
                  children: BB(VB)
                })]
              })
            }, TB)
          }))
        })
      };
    var wJ = dB(1738);
    const UJ = DB.z,
      FJ = ["forward", "backward", "left", "right", "sprint"],
      KJ = BB => BB.ctrlKey || BB.altKey || "Alt" === BB.key || "ArrowUp" === BB.key || "ArrowDown" === BB.key || "Tab" === BB.code || "/" === BB.key || "Slash" === BB.code;
    class rJ {
      constructor() {
        this.armed = !1, this.swallowedKeys = new Set, this.previousHeld = new Array(DB.V).fill(!1), this.leftStickWasPressed = !1, this.rightStickWasPressed = !1, this.consumeNextFrame = !1, this.consumeAfterContinue = !1
      }
      setArmed(BB) {
        this.armed = BB
      }
      blocksGameplay() {
        return this.armed || this.consumeNextFrame
      }
      onKeyDown(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          dB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return !this.armed || TB ? !BB.repeat && this.swallowedKeys.delete(BB.code) ? {
          swallow: !1,
          continues: !1
        } : {
          swallow: this.swallowedKeys.has(BB.code),
          continues: !1
        } : "Escape" === BB.key || BB.repeat && !this.swallowedKeys.has(BB.code) ? {
          swallow: !1,
          continues: !1
        } : dB ? {
          swallow: !1,
          continues: !0
        } : (this.swallowedKeys.add(BB.code), {
          swallow: !0,
          continues: (0, OB.h)(BB)
        })
      }
      onKeyUp(BB) {
        return this.swallowedKeys.delete(BB.code)
      }
      forgetKeys() {
        this.swallowedKeys.clear()
      }
      onPadFrame(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          VB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const yB = (0, DB.r)(BB.values, this.previousHeld),
          pB = null === dB ? -1 : (0, DB.l)(dB),
          lB = pB >= 0 && yB[pB] && !this.previousHeld[pB],
          JB = yB.some(((BB, TB) => BB && !this.previousHeld[TB] && TB !== pB)),
          YB = Math.hypot(BB.leftStick.x, BB.leftStick.y) >= UJ,
          gB = Math.hypot(BB.rightStick.x, BB.rightStick.y) >= UJ,
          oB = YB && !this.leftStickWasPressed || gB && !this.rightStickWasPressed;
        this.previousHeld = yB, this.leftStickWasPressed = YB, this.rightStickWasPressed = gB;
        let kB = !1;
        this.consumeNextFrame && (this.consumeNextFrame = !1, kB = !0);
        const LB = !TB && lB && !VB,
          OB = !LB && this.armed && !TB && (JB || oB);
        return (LB || OB) && (this.consumeNextFrame = !0, this.consumeAfterContinue = OB, kB = !0), {
          continues: OB,
          back: LB,
          consumeHeld: kB
        }
      }
      consumeLeavesMoveStick() {
        return this.consumeAfterContinue
      }
    }
    const IJ = new Set([...wJ.i, ...wJ.x]),
      cJ = BB => ((BB, TB, dB) => {
        const VB = Object.keys(TB).filter((VB => !dB.has(VB) && TB[VB].includes(BB)));
        return VB.length > 0 && VB.every((BB => FJ.includes(BB)))
      })(BB, wJ.r, IJ),
      SJ = (BB, TB, dB) => {
        const VB = new rJ,
          yB = BB => {
            if (!BB.isTrusted) return;
            const {
              swallow: dB,
              continues: yB
            } = VB.onKeyDown(BB, !(0, OB.E)(BB) || (0, ed.h)() || (0, Ly.l)(), cJ(BB.code));
            dB && (BB.stopImmediatePropagation(), KJ(BB) && BB.preventDefault()), yB && ((0, OB.v)("keyboardMouse"), TB())
          },
          pB = BB => {
            BB.isTrusted && VB.onKeyUp(BB) && (BB.stopImmediatePropagation(), KJ(BB) && BB.preventDefault())
          },
          JB = () => {
            VB.forgetKeys()
          };
        window.addEventListener("keydown", yB, !0), window.addEventListener("keyup", pB, !0), window.addEventListener("blur", JB);
        const YB = lB.e.onFrame((BB => {
            const yB = kB.d.getActiveConsumerName(),
              pB = dB(),
              lB = pB ? (0, oB.m)("menuBack") : null,
              JB = null !== yB && "gameplay" !== yB,
              {
                continues: YB,
                back: gB,
                consumeHeld: DB
              } = VB.onPadFrame(BB, JB, lB, (0, OB.l)(BB));
            if (DB) {
              const BB = (0, LB.h)().swapSticks ? "right" : "left";
              kB.d.consumeAllHeld(VB.consumeLeavesMoveStick() ? BB : null)
            }
            gB ? null === pB || void 0 === pB || pB() : YB && TB()
          })),
          gB = (0, ed.l)(`pressToContinue:${BB}`, (() => VB.blocksGameplay()));
        return {
          setArmed: BB => {
            VB.setArmed(BB)
          },
          dispose: () => {
            window.removeEventListener("keydown", yB, !0), window.removeEventListener("keyup", pB, !0), window.removeEventListener("blur", JB), YB(), gB()
          }
        }
      };
    var PJ = dB(4411),
      QJ = dB(2909),
      RJ = dB(2602),
      aJ = dB(7525);
    const ZJ = BB => {
        let {
          text: TB
        } = BB;
        return (0, aB.jsx)("div", {
          className: "ControllerSettingsHeading",
          children: TB
        })
      },
      XJ = BB => {
        let {
          label: TB,
          hint: dB,
          options: VB,
          value: pB,
          onChange: lB
        } = BB;
        const {
          t: JB
        } = (0, yB.z)();
        return (0, aB.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, aB.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: [(0, aB.jsxs)("div", {
              className: "ControllerChoiceText",
              children: [(0, aB.jsx)("div", {
                className: "SliderText",
                children: TB
              }), dB && (0, aB.jsx)("div", {
                className: "ControllerSettingsHint",
                children: dB
              })]
            }), (0, aB.jsx)(RJ.e, {
              options: VB.map((BB => ({
                label: "label" in BB ? BB.label : JB(BB.labelKey),
                value: BB.value
              }))),
              value: pB,
              onChange: BB => {
                lB(BB.value)
              }
            })]
          })
        })
      },
      WJ = BB => {
        let {
          settingKey: TB,
          label: dB,
          range: VB,
          format: yB
        } = BB;
        const pB = (0, LB.r)();
        return (0, aB.jsx)(PJ.k, {
          name: dB,
          min: VB.min,
          max: VB.max,
          step: VB.step,
          padStep: VB.step,
          initValue: pB[TB],
          format: yB,
          onChange: BB => {
            (0, LB.o)({
              [TB]: (0, aJ.A)(BB, VB)
            })
          }
        })
      };
    var hJ = dB(8183),
      CJ = dB(8186);
    const GJ = BB => BB instanceof DOMException && ("SecurityError" === BB.name || "NotAllowedError" === BB.name),
      qJ = BB => {
        const [TB] = [...BB.controllers].sort(((BB, TB) => CJ.q[BB] - CJ.q[TB]));
        return CJ.o[TB]
      },
      xJ = BB => {
        (0, hJ.e)().allowPhoneMotion().catch((TB => {
          BB && GJ(TB) ? BB() : console.warn("Could not enable the motion sensor", TB)
        }))
      },
      jJ = {
        waiting: "controller:settingsGyroPhoneWaiting",
        noSensor: "controller:settingsGyroPhoneNoSensor",
        on: "controller:settingsGyroPhoneOn",
        denied: "controller:settingsGyroPhoneDenied"
      },
      AJ = BB => {
        let {
          status: TB
        } = BB;
        const {
          t: dB
        } = (0, yB.z)(), [VB, pB] = (0, PB.useState)(null), lB = `${TB.controllers.join(",")}|${TB.phoneMotion}`;
        (0, PB.useEffect)((() => {
          pB(null)
        }), [lB]);
        const JB = () => {
          (0, hJ.e)().connectController().then((BB => {
            pB(BB > 0 ? "openFailed" : null)
          })).catch((BB => {
            GJ(BB) ? pB("needsClick") : console.warn("Could not connect motion controller", BB)
          }))
        };
        if (TB.hidSupported) {
          let BB = dB("controller:settingsGyroConnectHint");
          return "needsClick" === VB ? BB = dB("controller:settingsGyroConnectNeedsClick") : "openFailed" === VB ? BB = dB("controller:settingsGyroOpenFailed") : TB.controllers.length > 0 && (BB = dB("controller:settingsGyroConnected", {
            name: qJ(TB)
          })), (0, aB.jsx)("div", {
            className: "SettingBox ControllerChoiceSetting",
            children: (0, aB.jsxs)("div", {
              className: "ControllerChoiceRow",
              children: [(0, aB.jsx)("div", {
                className: "ControllerSettingsHint",
                children: BB
              }), (0, aB.jsx)(tJ.d, {
                onClick: JB,
                children: dB("controller:settingsGyroConnect")
              })]
            })
          })
        }
        if ("needsPermission" === TB.phoneMotion) return (0, aB.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, aB.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: ["needsTap" === VB && (0, aB.jsx)("div", {
              className: "ControllerSettingsHint",
              children: dB("controller:settingsGyroAllowNeedsTap")
            }), (0, aB.jsx)(tJ.d, {
              onClick: () => {
                xJ((() => {
                  pB("needsTap")
                }))
              },
              children: dB("controller:settingsGyroAllowMotion")
            })]
          })
        });
        const YB = jJ[TB.phoneMotion];
        return YB ? (0, aB.jsx)("div", {
          className: "ControllerSettingsHint",
          children: dB(YB)
        }) : null
      },
      bJ = () => {
        const {
          t: BB
        } = (0, yB.z)(), TB = (0, LB.r)(), dB = (0, hJ.g)(), VB = (0, OB.A)(), pB = !dB.hidSupported && dB.phoneSupported && !dB.padConnected, lB = (dB.hidSupported || dB.phoneSupported) && !pB, JB = (0, oB.m)("pause");
        return (0, aB.jsxs)(aB.Fragment, {
          children: [(0, aB.jsx)(ZJ, {
            text: BB("controller:settingsGyro")
          }), pB && (0, aB.jsx)("div", {
            className: "ControllerSettingsHint",
            children: BB("controller:settingsGyroPhoneNeedsController")
          }), !lB && !pB && (0, aB.jsx)("div", {
            className: "ControllerSettingsHint",
            children: BB(dB.hidBlocked || dB.phoneBlocked ? "controller:settingsGyroBlocked" : "controller:settingsGyroUnsupported")
          }), lB && (0, aB.jsx)(PJ.e, {
            label: BB(dB.hidSupported ? "controller:settingsGyroToggle" : "controller:settingsGyroTogglePhone"),
            checked: TB.gyroAiming,
            onClick: BB => {
              var TB, dB;
              (0, LB.o)({
                gyroAiming: BB
              });
              const VB = null === (TB = null === (dB = navigator.userActivation) || void 0 === dB ? void 0 : dB.isActive) || void 0 === TB || TB;
              if (!BB || !VB) return;
              const yB = (0, hJ.e)(),
                pB = yB.getStatus();
              pB.hidSupported ? yB.connectControllerIfNoneGranted().catch((BB => {
                console.warn("Motion controller picker unavailable", BB)
              })) : "needsPermission" === pB.phoneMotion && xJ()
            },
            circleInfoText: BB(dB.hidSupported ? "controller:settingsGyroToggleInfo" : "controller:settingsGyroToggleInfoPhone")
          }), lB && dB.hidSupported && (0, aB.jsx)("div", {
            className: "ControllerSettingsHint",
            children: BB("controller:settingsGyroSteamHint")
          }), lB && TB.gyroAiming && (0, aB.jsxs)(aB.Fragment, {
            children: [(0, aB.jsx)(AJ, {
              status: dB
            }), (0, aB.jsx)(WJ, {
              settingKey: "gyroSensitivity",
              label: BB("controller:settingsGyroSensitivity"),
              range: aJ.T,
              format: aJ.K
            }), (0, aB.jsx)(XJ, {
              label: BB("controller:settingsGyroActivation"),
              hint: "aiming" === TB.gyroActivation && (0, aB.jsx)(QJ.b, {
                text: BB("controller:settingsGyroAimingHint", {
                  button: QJ.d
                }),
                glyph: (0, oB.m)("use")
              }),
              options: aJ.S,
              value: TB.gyroActivation,
              onChange: BB => {
                (0, LB.o)({
                  gyroActivation: BB
                })
              }
            }), "button" === TB.gyroActivation && (0, aB.jsx)(XJ, {
              label: BB("controller:settingsGyroButton"),
              hint: BB("controller:settingsGyroButtonHint"),
              options: aJ.v.filter((BB => BB !== JB || BB === TB.gyroButton)).map((BB => ({
                label: iV(VB, BB),
                value: BB
              }))),
              value: TB.gyroButton,
              onChange: BB => {
                (0, LB.o)({
                  gyroButton: BB
                })
              }
            })]
          })]
        })
      };
    var nJ = dB(1848);
    const eJ = () => {
      const {
        t: BB
      } = (0, yB.z)(), TB = (0, LB.r)(), dB = (0, OB.A)();
      return (0, aB.jsxs)(aB.Fragment, {
        children: [(0, aB.jsx)(ZJ, {
          text: BB("controller:settingsAccessibility")
        }), (0, aB.jsx)(PJ.e, {
          label: BB("controller:settingsSwapConfirmBack"),
          checked: (0, oB.W)(TB.swapConfirmBack, dB),
          onClick: BB => {
            (0, LB.o)({
              swapConfirmBack: BB === (0, oB.W)(null, dB) ? null : BB
            }), nJ.g.showMessage({
              translationKey: "controller:settingsSwapToast"
            })
          },
          circleInfoText: BB("controller:settingsSwapConfirmBackInfo")
        }), (0, aB.jsx)(XJ, {
          label: BB("controller:settingsButtonRepeat"),
          hint: BB("controller:settingsButtonRepeatHint"),
          options: aJ.s,
          value: TB.buttonRepeat,
          onChange: BB => {
            (0, LB.o)({
              buttonRepeat: BB
            })
          }
        }), (0, aB.jsx)(XJ, {
          label: BB("controller:settingsTapHoldTime"),
          hint: BB("controller:settingsTapHoldTimeHint"),
          options: aJ.xb,
          value: TB.tapHoldTime,
          onChange: BB => {
            (0, LB.o)({
              tapHoldTime: BB
            })
          }
        }), (0, aB.jsx)(XJ, {
          label: BB("controller:settingsEmoteButton"),
          hint: BB("wheel" === TB.emoteButton ? "controller:settingsEmoteButtonWheelHint" : "controller:settingsEmoteButtonTapHoldHint"),
          options: aJ.G,
          value: TB.emoteButton,
          onChange: BB => {
            (0, LB.o)({
              emoteButton: BB
            })
          }
        }), (0, aB.jsx)(XJ, {
          label: BB("controller:settingsAttackMode"),
          hint: BB("toggle" === TB.attackMode ? "controller:settingsAttackToggleHint" : "controller:settingsAttackHoldHint"),
          options: aJ.q,
          value: TB.attackMode,
          onChange: BB => {
            (0, LB.o)({
              attackMode: BB
            })
          }
        }), (0, aB.jsx)(PJ.e, {
          label: BB("controller:settingsLargePointer"),
          checked: TB.largePointer,
          onClick: BB => {
            (0, LB.o)({
              largePointer: BB
            })
          },
          circleInfoText: BB("controller:settingsLargePointerInfo")
        })]
      })
    };
    var BY = dB(8194);
    const TY = new class {
        constructor(BB) {
          this.router = BB, this.current = null
        }
        claim(BB, TB) {
          const dB = this.current;
          dB && (this.current = null, dB.release(), dB.onTakenOver());
          const VB = this.router.register({
              ...BB,
              name: "capture"
            }),
            yB = {
              release: VB,
              onTakenOver: TB
            };
          return this.current = yB, () => {
            this.current === yB && (this.current = null), VB()
          }
        }
      }(kB.d),
      dY = BB => {
        (0, PB.useEffect)((() => {
          if (!BB) return;
          const TB = BB();
          let dB = !1;
          const VB = () => {
              dB || (dB = !0, TB.onEnd())
            },
            yB = TY.claim({
              isActive: () => !dB,
              onFrame: BB => {
                TB.onFrame(BB, VB)
              }
            }, VB),
            pB = void 0 === TB.timeoutMs ? void 0 : window.setTimeout(VB, TB.timeoutMs),
            lB = BB => {
              "Escape" === BB.key && (BB.preventDefault(), BB.stopPropagation(), VB())
            };
          return window.addEventListener("keydown", lB, !0), () => {
            dB = !0, yB(), window.clearTimeout(pB), window.removeEventListener("keydown", lB, !0)
          }
        }), [BB])
      },
      VY = BB => {
        let {
          row: TB,
          capturing: dB,
          onCapture: VB,
          holdFillRef: pB,
          onRebind: lB,
          swapped: JB
        } = BB;
        const {
          t: YB
        } = (0, yB.z)();
        if ("fixed" === TB.kind) return (0, aB.jsx)("div", {
          className: "ControlRow PadControlRow PadControlRowFixed",
          children: (0, aB.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, aB.jsx)("div", {
              className: "ControlName",
              children: YB(TB.labelKey)
            }), (0, aB.jsx)("div", {
              className: "ControlBindingsContainer",
              children: (0, aB.jsx)("div", {
                className: "ControlBindingsList",
                children: (0, aB.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  children: (0, aB.jsx)(NV, {
                    glyph: "move" === TB.stick ? (0, oB.C)() : (0, oB.y)()
                  })
                })
              })
            })]
          })
        });
        const {
          action: gB
        } = TB, kB = (0, oB.m)(gB), LB = (0, oB.q)(gB), OB = kB !== LB && (0, oB.e)(gB, LB);
        return (0, aB.jsxs)("div", {
          className: RB()("ControlRow PadControlRow", {
            Capturing: dB
          }),
          children: [(0, aB.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, aB.jsx)("div", {
              className: "ControlName",
              children: YB(aJ.k[gB])
            }), (0, aB.jsxs)("div", {
              className: "ControlBindingsContainer",
              children: [!dB && (0, aB.jsxs)("div", {
                className: "ControlBindingsList",
                children: [(0, aB.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    VB(gB)
                  },
                  children: (0, aB.jsx)(NV, {
                    glyph: kB
                  })
                }), OB && (0, aB.jsx)("div", {
                  className: "ControlBinding PadBindingReset",
                  title: YB("controller:settingsReset"),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    lB(gB, LB)
                  },
                  children: (0, aB.jsx)(iJ.e, {
                    name: "arrows-rotate"
                  })
                })]
              }), dB && (0, aB.jsxs)("div", {
                className: "ControlBindingAddInput",
                children: [(0, aB.jsxs)("div", {
                  className: "PadCaptureBox",
                  children: [(0, aB.jsx)("span", {
                    children: YB("controller:settingsCapturePrompt")
                  }), (0, aB.jsx)("div", {
                    ref: pB,
                    className: "PadCaptureHoldFill"
                  })]
                }), (0, aB.jsx)("div", {
                  className: "ControlBindingAddCancel",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    VB(null)
                  },
                  children: "\xd7"
                })]
              }), dB && (0, aB.jsx)("div", {
                className: "PadCaptureHint",
                children: (0, aB.jsx)(QJ.b, {
                  text: YB((0, oB.e)(gB, (0, oB.m)("menuBack")) ? "controller:settingsCaptureCancelOrBindHint" : "controller:settingsCaptureCancelHint", {
                    button: QJ.d
                  }),
                  glyph: (0, oB.m)("menuBack")
                })
              })]
            })]
          }), JB.map((BB => (0, aB.jsx)("div", {
            className: "ControlRowWarning PadSwapNotice",
            children: (0, aB.jsx)(QJ.b, {
              text: YB("controller:settingsSwapNotice", {
                action: YB(aJ.k[BB]),
                button: QJ.d
              }),
              glyph: (0, oB.m)(BB)
            })
          }, BB))), dB && (0, aB.jsx)("div", {
            className: "PadCaptureTimer",
            style: {
              animationDuration: `${aJ.w}ms`
            }
          })]
        })
      },
      yY = [],
      pY = BB => {
        let {
          layoutSetting: TB
        } = BB;
        const {
          t: dB
        } = (0, yB.z)(), VB = (0, LB.r)();
        (0, OB.A)();
        const pB = (0, PB.useRef)(null),
          [lB, JB] = (0, PB.useState)(null),
          YB = (0, PB.useCallback)(((BB, TB) => {
            const dB = (0, LB.h)().JD;
            (0, oB.Q)(BB, TB);
            const VB = (0, oB.F)(dB, BB);
            JB(VB.length > 0 ? {
              action: BB,
              swapped: VB
            } : null)
          }), []),
          [gB, uB] = ((BB, TB) => {
            const [dB, VB] = (0, PB.useState)(null), yB = (0, PB.useMemo)((() => dB ? () => {
              const yB = (0, oB.m)("menuBack"),
                pB = new aJ.c(yB, (0, oB.m)("menuConfirm"), (BB => (0, oB.e)(dB, BB)));
              return {
                onFrame: (VB, lB) => {
                  var JB;
                  const YB = VB.frame.timestampMs,
                    gB = pB.update({
                      ...VB,
                      isDown: BB => (0, DB.H)(VB.frame.values, BB)
                    }, YB);
                  null === (JB = BB.current) || void 0 === JB || JB.style.setProperty("width", 100 * pB.getBindHoldProgress(YB) + "%"), gB && ("bind" === gB.kind ? (kB.d.consumeButton(gB.button), TB(dB, gB.button)) : kB.d.consumeButton(yB), lB())
                },
                onEnd: () => {
                  VB(null)
                },
                timeoutMs: aJ.w
              }
            } : null), [dB, BB, TB]);
            return dY(yB), [dB, VB]
          })(pB, YB),
          HB = BB => {
            BB && JB(null), uB(BB)
          };
        (0, PB.useEffect)((() => {
          if (!lB) return;
          const BB = window.setTimeout((() => {
            JB(null)
          }), aJ.ub);
          return () => {
            window.clearTimeout(BB)
          }
        }), [lB]);
        const EB = !VB.swapSticks && 0 === Object.keys(VB.JD).length;
        return (0, aB.jsxs)("div", {
          className: "ControlsContainer PadControlsContainer",
          children: [(0, aB.jsx)("div", {
            className: "SliderText",
            children: dB("controller:settingsRemap")
          }), (0, aB.jsx)("div", {
            className: "ControllerSettingsHint",
            children: dB("controller:settingsRemapHint")
          }), (0, aB.jsx)(tJ.K, {
            className: "ResetBindingsButton PadResetAllButton",
            disabled: EB,
            onClick: () => {
              HB(null), JB(null), (0, oB.U)()
            },
            children: dB("controller:settingsResetAll")
          }), TB, aJ.nb.map(((BB, TB) => (0, aB.jsx)(BY.b, {
            title: dB(BB.titleKey),
            defaultOpen: 0 === TB,
            children: BB.rows.map((BB => (0, aB.jsx)(VY, {
              row: BB,
              capturing: "action" === BB.kind && BB.action === gB,
              onCapture: HB,
              holdFillRef: pB,
              onRebind: YB,
              swapped: "action" === BB.kind && (null === lB || void 0 === lB ? void 0 : lB.action) === BB.action ? lB.swapped : yY
            }, "action" === BB.kind ? BB.action : BB.labelKey)))
          }, BB.titleKey)))]
        })
      },
      lY = BB => {
        let {
          deadzone: TB,
          dotRef: dB,
          labelKey: VB
        } = BB;
        const {
          t: pB
        } = (0, yB.z)();
        return (0, aB.jsxs)("div", {
          className: "ControllerTesterStick",
          children: [(0, aB.jsxs)("div", {
            className: "ControllerTesterStickCircle",
            children: [(0, aB.jsx)("div", {
              className: "ControllerTesterDeadzone",
              style: {
                width: 100 * TB + "%",
                height: 100 * TB + "%"
              }
            }), (0, aB.jsx)("div", {
              ref: dB,
              className: "ControllerTesterDot"
            })]
          }), (0, aB.jsx)("div", {
            className: "ControllerTesterStickLabel",
            children: pB(VB)
          })]
        })
      },
      JY = (BB, TB, dB, VB) => {
        var yB;
        BB && (BB.style.left = 50 + 50 * Math.max(-1, Math.min(1, TB.x)) + "%", BB.style.top = 50 + 50 * Math.max(-1, Math.min(1, TB.y)) + "%", null === (yB = BB.parentElement) || void 0 === yB || yB.classList.toggle("Active", VB || Math.hypot(TB.x, TB.y) > dB))
      },
      YY = BB => {
        const TB = {
            deadzone: BB.moveDeadzone,
            labelKey: "controller:settingsActionMove"
          },
          dB = {
            deadzone: BB.lookDeadzone,
            labelKey: "controller:settingsActionLook"
          };
        return BB.swapSticks ? {
          left: dB,
          right: TB
        } : {
          left: TB,
          right: dB
        }
      },
      gY = () => {
        const {
          t: BB
        } = (0, yB.z)(), TB = (() => {
          const [BB, TB] = (0, PB.useState)((() => lB.e.getActivePad()));
          return (0, uV.e)(lB.b, (() => {
            TB(lB.e.getActivePad())
          })), BB
        })(), dB = YY((0, LB.r)()), VB = (0, PB.useRef)(null), pB = (0, PB.useRef)(null), JB = (0, PB.useRef)([]), YB = (0, PB.useRef)(null), gB = (0, PB.useRef)(null), [OB, uB] = (BB => {
          const [TB, dB] = (0, PB.useState)(!1), VB = (0, PB.useMemo)((() => TB ? () => {
            const TB = (0, oB.m)("menuBack"),
              VB = new aJ.g;
            return {
              onFrame: (dB, yB) => {
                var pB;
                const lB = VB.update({
                  pressed: dB.wasPressed(TB),
                  Dg: dB.isHeld(TB)
                }, dB.frame.timestampMs);
                null === (pB = BB.current) || void 0 === pB || pB.style.setProperty("width", 100 * lB + "%"), lB >= 1 && (kB.d.consumeButton(TB), yB())
              },
              onEnd: () => {
                dB(!1)
              }
            }
          } : null), [TB, BB]);
          return dY(VB), [TB, dB]
        })(pB);
        (0, PB.useEffect)((() => {
          const BB = BB => {
            for (const dB of DB.W) {
              const TB = (0, DB.l)(dB),
                VB = JB.current[TB];
              if (!VB) continue;
              const yB = BB.values[TB];
              VB.classList.toggle("Pressed", yB >= DB.z), (0, DB.L)(TB) && VB.style.setProperty("--trigger-fill", `${Math.round(100*yB)}%`)
            }
            const TB = YY((0, LB.h)());
            JY(YB.current, BB.leftStick, TB.left.deadzone, BB.values[(0, DB.l)("LS")] >= DB.z), JY(gB.current, BB.rightStick, TB.right.deadzone, BB.values[(0, DB.l)("RS")] >= DB.z)
          };
          return TB || BB((0, DB.w)()), lB.e.onFrame(BB)
        }), [TB]), (0, PB.useEffect)((() => {
          TB || uB(!1)
        }), [TB, uB]), (0, PB.useEffect)((() => {
          var BB;
          OB && (null === (BB = VB.current) || void 0 === BB || BB.scrollIntoView({
            block: "nearest"
          }))
        }), [OB]);
        const HB = aJ.gb.find((BB => BB.value === (null === TB || void 0 === TB ? void 0 : TB.family)));
        return (0, aB.jsxs)("div", {
          ref: VB,
          className: RB()("SettingBox ControllerTester", {
            Testing: OB
          }),
          children: [(0, aB.jsxs)("div", {
            className: "ControllerTesterHeader",
            children: [(0, aB.jsxs)("div", {
              className: "ControllerTesterInfo",
              children: [TB && (0, aB.jsx)("div", {
                children: BB("controller:settingsTesterFamily", {
                  family: HB ? BB(HB.labelKey) : TB.family
                })
              }), TB && (0, aB.jsx)("div", {
                className: "ControllerTesterPadId",
                children: TB.id
              }), !TB && (0, aB.jsx)("div", {
                children: BB("controller:settingsTesterNoPad")
              })]
            }), (TB || OB) && (0, aB.jsx)(tJ.d, {
              className: "ControllerTesterToggle",
              onClick: () => {
                uB(!OB)
              },
              children: BB(OB ? "controller:settingsTesterStop" : "controller:settingsTesterStart")
            })]
          }), TB && !OB && (0, aB.jsx)("div", {
            className: "ControllerSettingsHint",
            children: BB("controller:settingsTesterHint")
          }), OB && (0, aB.jsxs)("div", {
            className: "ControllerTesterBanner",
            children: [(0, aB.jsx)(QJ.b, {
              text: BB("controller:settingsTesterTesting", {
                button: QJ.d
              }),
              glyph: (0, oB.m)("menuBack")
            }), (0, aB.jsx)("div", {
              ref: pB,
              className: "ControllerTesterExitFill"
            })]
          }), (0, aB.jsxs)("div", {
            className: "ControllerTesterBody",
            children: [(0, aB.jsx)(lY, {
              deadzone: dB.left.deadzone,
              dotRef: YB,
              labelKey: dB.left.labelKey
            }), (0, aB.jsx)("div", {
              className: "ControllerTesterButtons",
              children: DB.W.map((BB => {
                const dB = (0, DB.l)(BB);
                return (0, aB.jsx)("div", {
                  ref: BB => {
                    JB.current[dB] = BB
                  },
                  className: (0, DB.L)(dB) ? "ControllerTesterButton ControllerTesterTrigger" : "ControllerTesterButton",
                  children: (0, aB.jsx)(NV, {
                    glyph: BB,
                    family: null === TB || void 0 === TB ? void 0 : TB.family
                  })
                }, BB)
              }))
            }), (0, aB.jsx)(lY, {
              deadzone: dB.right.deadzone,
              dotRef: gB,
              labelKey: dB.right.labelKey
            })]
          })]
        })
      },
      oY = (0, PB.memo)((function() {
        const {
          t: BB
        } = (0, yB.z)(), TB = (0, LB.r)(), [dB, VB] = (0, PB.useState)(!1);
        return (0, PB.useEffect)((() => {
          if (!dB) return;
          const BB = window.setTimeout((() => {
            VB(!1)
          }), aJ.ub);
          return () => {
            window.clearTimeout(BB)
          }
        }), [dB]), (0, aB.jsxs)("div", {
          className: "SettingsMenuRightInner ControllerCategory",
          children: [(0, aB.jsx)(ZJ, {
            text: BB("controller:settingsLook")
          }), (0, aB.jsx)(WJ, {
            settingKey: "lookSensitivityX",
            label: BB("controller:settingsLookSensitivityX"),
            range: aJ.rb,
            format: aJ.O
          }), (0, aB.jsx)(WJ, {
            settingKey: "lookSensitivityY",
            label: BB("controller:settingsLookSensitivityY"),
            range: aJ.rb,
            format: aJ.O
          }), (0, aB.jsx)(WJ, {
            settingKey: "aimLookSensitivity",
            label: BB("controller:settingsAimLookSensitivity"),
            range: aJ.o,
            format: aJ.O
          }), (0, aB.jsx)(XJ, {
            label: BB("controller:settingsLookCurve"),
            hint: BB("controller:settingsLookCurveHint"),
            options: aJ.cb,
            value: TB.lookCurve,
            onChange: BB => {
              (0, LB.o)({
                lookCurve: BB
              })
            }
          }), (0, aB.jsx)(PJ.e, {
            label: BB("controller:settingsInvertLookX"),
            checked: TB.invertLookX,
            onClick: BB => {
              (0, LB.o)({
                invertLookX: BB
              })
            }
          }), (0, aB.jsx)(PJ.e, {
            label: BB("controller:settingsInvertLookY"),
            checked: TB.invertLookY,
            onClick: BB => {
              (0, LB.o)({
                invertLookY: BB
              })
            }
          }), (0, aB.jsx)(WJ, {
            settingKey: "lookDeadzone",
            label: BB("controller:settingsLookDeadzone"),
            range: aJ.F,
            format: aJ.J
          }), (0, aB.jsx)(bJ, {}), (0, aB.jsx)(ZJ, {
            text: BB("controller:settingsMovement")
          }), (0, aB.jsx)(WJ, {
            settingKey: "moveDeadzone",
            label: BB("controller:settingsMoveDeadzone"),
            range: aJ.F,
            format: aJ.J
          }), (0, aB.jsx)(PJ.e, {
            label: BB("controller:settingsAutoSprint"),
            checked: TB.autoSprint,
            onClick: BB => {
              (0, LB.o)({
                autoSprint: BB
              })
            },
            circleInfoText: BB("controller:settingsAutoSprintInfo")
          }), (0, aB.jsx)(XJ, {
            label: BB("controller:settingsSneak"),
            options: aJ.sb,
            value: TB.sneakMode,
            onChange: BB => {
              (0, LB.o)({
                sneakMode: BB
              })
            }
          }), (0, aB.jsx)(ZJ, {
            text: BB("controller:settingsButtons")
          }), (0, aB.jsx)(XJ, {
            label: BB("controller:settingsPromptFamily"),
            options: aJ.gb,
            value: TB.promptFamily,
            onChange: BB => {
              (0, LB.o)({
                promptFamily: BB
              })
            }
          }), (0, aB.jsx)(PJ.e, {
            label: BB("controller:settingsHideButtonHints"),
            checked: TB.hideButtonHints,
            onClick: BB => {
              (0, LB.o)({
                hideButtonHints: BB
              })
            }
          }), (0, aB.jsx)(PJ.e, {
            label: BB("controller:settingsVibration"),
            checked: TB.vibration,
            onClick: BB => {
              (0, LB.o)({
                vibration: BB
              }), BB && yV("preview")
            }
          }), (0, aB.jsx)(WJ, {
            settingKey: "cursorSpeed",
            label: BB("controller:settingsCursorSpeed"),
            range: aJ.B,
            format: aJ.O
          }), (0, aB.jsx)(PJ.e, {
            label: BB("controller:settingsCursorMagnetism"),
            checked: TB.cursorMagnetism,
            onClick: BB => {
              (0, LB.o)({
                cursorMagnetism: BB
              })
            }
          }), (0, aB.jsx)(PJ.e, {
            label: BB("controller:settingsMenuBackToCategories"),
            checked: TB.menuBackToCategories,
            onClick: BB => {
              (0, LB.o)({
                menuBackToCategories: BB
              })
            }
          }), (0, aB.jsx)(pY, {
            layoutSetting: (0, aB.jsxs)(aB.Fragment, {
              children: [oB.i.map((dB => (0, aB.jsx)(PJ.e, {
                label: BB(aJ.Y[dB]),
                checked: (0, oB.M)(dB, TB),
                onClick: BB => {
                  VB(!(0, oB._)(dB, BB))
                }
              }, dB))), dB && (0, aB.jsx)("div", {
                className: "PadLayoutRefusedNotice",
                role: "status",
                children: BB("controller:settingsLayoutRefusedToast")
              })]
            })
          }), (0, aB.jsx)(eJ, {}), (0, aB.jsx)(ZJ, {
            text: BB("controller:settingsAlternatives")
          }), (0, aB.jsx)("div", {
            className: "ControllerSettingsHint",
            children: BB("controller:settingsAlternativesHint")
          }), (0, aB.jsx)(XJ, {
            label: BB("controller:settingsMenuNavigation"),
            hint: BB("controller:settingsMenuNavigationHint"),
            options: aJ.fb,
            value: TB.menuNavigation,
            onChange: BB => {
              (0, LB.o)({
                menuNavigation: BB
              })
            }
          }), (0, aB.jsx)(XJ, {
            label: BB("controller:settingsInventoryNavigation"),
            hint: BB("controller:settingsInventoryNavigationHint"),
            options: aJ.V,
            value: TB.inventoryNavigation,
            onChange: BB => {
              (0, LB.o)({
                inventoryNavigation: BB
              })
            }
          }), (0, aB.jsx)(XJ, {
            label: BB("controller:settingsQuickChat"),
            hint: BB("controller:settingsQuickChatHint"),
            options: aJ.jb,
            value: TB.quickChat,
            onChange: BB => {
              (0, LB.o)({
                quickChat: BB
              })
            }
          }), (0, aB.jsx)(XJ, {
            label: BB("controller:settingsLeaderboardButton"),
            hint: BB("controller:settingsLeaderboardButtonHint"),
            options: aJ.ab,
            value: TB.leaderboardButton,
            onChange: BB => {
              (0, LB.o)({
                leaderboardButton: BB
              })
            }
          }), (0, aB.jsx)(ZJ, {
            text: BB("controller:settingsTester")
          }), (0, aB.jsx)(gY, {})]
        })
      }));
    (0, yB.c)(VB);
    for (const DY of (0, pB.x)()) DY.connected ? lB.e.handleConnectionEvent(DY) : lB.e.handleDisconnectionEvent(DY);
    const kY = () => null !== lB.e.getActivePad(),
      LY = () => bd.getState(),
      OY = () => bd.isSteppingSlots()
  },
  7502: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => JB,
      h: () => YB
    });
    const VB = {
        "054c": "playstation",
        "057e": "nintendo"
      },
      yB = "28de",
      pB = new Set(["1205"]),
      lB = BB => {
        const TB = /vendor:\s*([0-9a-f]{4})\s*product:\s*([0-9a-f]{4})/i.exec(BB);
        if (TB) return {
          vendor: TB[1].toLowerCase(),
          product: TB[2].toLowerCase()
        };
        const dB = /^([0-9a-f]{1,4})-([0-9a-f]{1,4})-/i.exec(BB);
        return dB ? {
          vendor: dB[1].toLowerCase().padStart(4, "0"),
          product: dB[2].toLowerCase().padStart(4, "0")
        } : null
      },
      JB = (BB, TB) => {
        const dB = lB(BB);
        if ((null === dB || void 0 === dB ? void 0 : dB.vendor) === yB) return pB.has(dB.product) ? "steamdeck" : "xbox";
        if (dB && VB[dB.vendor]) return VB[dB.vendor];
        const JB = `${BB} ${null!==TB&&void 0!==TB?TB:""}`.toLowerCase();
        return /dualsense|dualshock|playstation|sony/.test(JB) ? "playstation" : /nintendo|switch|joy-con|pro controller/.test(JB) ? "nintendo" : /steam deck/.test(JB) ? "steamdeck" : "xbox"
      },
      YB = BB => {
        var TB;
        return (null === (TB = lB(BB)) || void 0 === TB ? void 0 : TB.vendor) === yB
      }
  },
  7535: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => gB,
      h: () => JB
    });
    var VB = dB(7500);
    const yB = ["capture", "keyboard", "wheel", "inventory", "cursor", "focus", "gameplay"],
      pB = new Set(["capture", "gameplay"]),
      lB = ["Up", "Down", "Left", "Right"],
      JB = BB => lB.includes(BB),
      YB = .25;
    const gB = new class {
      constructor() {
        this.consumers = new Map, this.activeName = null, this.Dg = new Array(VB.V).fill(!1), this.previousHeld = new Array(VB.V).fill(!1), this.consumedButtons = new Array(VB.V).fill(!1), this.suppressedReleases = new Array(VB.V).fill(!1), this.wakeOwned = new Array(VB.V).fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.peek = null, this.lastFrame = (0, VB.w)()
      }
      register(BB) {
        return this.consumers.has(BB.name) && console.warn(`Controller consumer "${BB.name}" registered twice; the newer one replaces it.`), this.consumers.set(BB.name, BB), () => {
          var TB;
          this.consumers.get(BB.name) === BB && (this.activeName === BB.name ? (this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()) : (null === (TB = this.peek) || void 0 === TB ? void 0 : TB.over) === BB.name && (this.peek = null), this.consumers.delete(BB.name))
        }
      }
      getActiveConsumerName() {
        return this.activeName
      }
      isButtonHeld(BB) {
        return this.Dg[(0, VB.l)(BB)]
      }
      getLastFrame() {
        return this.lastFrame
      }
      clear() {
        this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()
      }
      reset() {
        this.deactivateCurrent(), this.activeName = null, this.Dg = new Array(VB.V).fill(!1), this.previousHeld = new Array(VB.V).fill(!1), this.consumedButtons.fill(!1), this.suppressedReleases.fill(!1), this.wakeOwned.fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.lastFrame = (0, VB.w)()
      }
      dispatch(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.lastFrame = BB, this.previousHeld = this.Dg, this.Dg = (0, VB.r)(BB.values, this.previousHeld);
        for (let pB = 0; pB < VB.V; pB++) this.suppressedReleases[pB] = !this.Dg[pB] && this.consumedButtons[pB], this.Dg[pB] || (this.consumedButtons[pB] = !1), this.wakeOwned[pB] && (this.Dg[pB] ? (this.consumedButtons[pB] = !0, this.wakeOwned[pB] = !1) : BB.values[pB] < VB.T && (this.wakeOwned[pB] = !1));
        Math.hypot(BB.leftStick.x, BB.leftStick.y) < YB && (this.leftStickConsumed = !1), Math.hypot(BB.rightStick.x, BB.rightStick.y) < YB && (this.rightStickConsumed = !1);
        const yB = this.pickActive();
        if ((null === yB || void 0 === yB ? void 0 : yB.name) !== this.activeName) {
          var lB, JB, gB, oB, kB, LB;
          const BB = this.activeName,
            TB = {
              left: !this.leftStickConsumed,
              right: !this.rightStickConsumed
            },
            dB = null !== (lB = null === yB || void 0 === yB || null === (JB = yB.peek) || void 0 === JB ? void 0 : JB.call(yB)) && void 0 !== lB ? lB : null,
            pB = null === BB && !!dB && !(null === (gB = this.consumers.get(dB.over)) || void 0 === gB || !gB.onPeekFrame),
            YB = dB && (dB.over === BB || pB) ? dB : null,
            OB = null !== this.peek && this.peek.over === (null === yB || void 0 === yB ? void 0 : yB.name) ? this.peek : null;
          this.deactivateCurrent(null !== YB, null !== OB), this.activeName = null !== (oB = null === yB || void 0 === yB ? void 0 : yB.name) && void 0 !== oB ? oB : null, null === BB || this.handOffPending || this.consumeAllHeld();
          const DB = null === (kB = null !== YB && void 0 !== YB ? YB : OB) || void 0 === kB ? void 0 : kB.stick;
          "left" === DB && TB.left ? this.leftStickConsumed = !1 : "right" === DB && TB.right && (this.rightStickConsumed = !1), this.peek = YB, yB || null === BB ? yB && (null === (LB = this.idleResume) || void 0 === LB ? void 0 : LB.name) === yB.name && (this.idleResume.left && (this.leftStickConsumed = !1), this.idleResume.right && (this.rightStickConsumed = !1)) : this.idleResume = {
            name: BB,
            left: TB.left && this.leftStickConsumed,
            right: TB.right && this.rightStickConsumed
          }, yB && (this.idleResume = null);
          for (let yB = 0; yB < VB.V; yB++) this.previousHeld[yB] && !this.Dg[yB] && (this.suppressedReleases[yB] = !0)
        }
        var OB, DB;
        (this.handOffPending = !1, yB) && (dB && !pB.has(yB.name) && this.consumeWakePress(yB), yB.onFrame(this.buildInput(BB, TB, dB)), this.peek && (null === (OB = this.consumers.get(this.peek.over)) || void 0 === OB || null === (DB = OB.onPeekFrame) || void 0 === DB || DB.call(OB, this.buildInput(BB, TB, !1, this.peek.stick))))
      }
      consumeWakePress(BB) {
        for (let yB = 0; yB < VB.V; yB++) {
          var TB, dB;
          const pB = VB.W[yB];
          (null !== (TB = null === (dB = BB.wakePressActs) || void 0 === dB ? void 0 : dB.call(BB, pB)) && void 0 !== TB ? TB : lB.includes(pB)) || (this.Dg[yB] ? this.consumedButtons[yB] = !0 : this.lastFrame.values[yB] >= VB.Q && (this.wakeOwned[yB] = !0))
        }
      }
      pickActive() {
        for (const BB of yB) {
          const TB = this.consumers.get(BB);
          if (TB && TB.isActive()) return TB
        }
        return null
      }
      deactivateCurrent() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        var dB, VB, yB, pB;
        this.activeName && (null === (dB = this.consumers.get(this.activeName)) || void 0 === dB || null === (VB = dB.onDeactivate) || void 0 === VB || VB.call(dB, BB));
        this.peek && !TB && (null === (yB = this.consumers.get(this.peek.over)) || void 0 === yB || null === (pB = yB.onDeactivate) || void 0 === pB || pB.call(yB, !1));
        this.peek = null
      }
      consumeAllHeld() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.idleResume = null;
        for (let yB = 0; yB < VB.V; yB++) this.Dg[yB] && (this.consumedButtons[yB] = !0);
        const {
          leftStick: TB,
          rightStick: dB
        } = this.lastFrame;
        this.leftStickConsumed = "left" !== BB && (this.leftStickConsumed || Math.hypot(TB.x, TB.y) >= YB), this.rightStickConsumed = "right" !== BB && (this.rightStickConsumed || Math.hypot(dB.x, dB.y) >= YB)
      }
      handOffHeldInput() {
        this.handOffPending = !0
      }
      consumeButton(BB) {
        const TB = (0, VB.l)(BB);
        this.Dg[TB] && (this.consumedButtons[TB] = !0)
      }
      buildInput(BB, TB, dB, yB) {
        const pB = this.Dg,
          lB = this.previousHeld,
          JB = yB ? new Array(VB.V).fill(!0) : [...this.consumedButtons],
          YB = yB ? JB : [...this.suppressedReleases],
          gB = !this.leftStickConsumed && (!yB || "left" === yB),
          oB = !this.rightStickConsumed && (!yB || "right" === yB);
        return {
          frame: BB,
          dtMs: TB,
          isHeld: BB => {
            const TB = (0, VB.l)(BB);
            return pB[TB] && !JB[TB]
          },
          wasPressed: BB => {
            const TB = (0, VB.l)(BB);
            return pB[TB] && !lB[TB] && !JB[TB]
          },
          wasReleased: BB => {
            const TB = (0, VB.l)(BB);
            return !pB[TB] && lB[TB] && !YB[TB]
          },
          value: TB => {
            const dB = (0, VB.l)(TB);
            return JB[dB] ? 0 : BB.values[dB]
          },
          leftStick: gB ? BB.leftStick : {
            x: 0,
            y: 0
          },
          rightStick: oB ? BB.rightStick : {
            x: 0,
            y: 0
          },
          wokeDevice: dB
        }
      }
    }
  },
  7515: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => kB.e,
      f: () => kB.g,
      h: () => wB,
      l: () => UB,
      o: () => FB,
      r: () => KB
    });
    var VB = dB(62),
      yB = dB(24),
      pB = dB(1317),
      lB = dB(33),
      JB = dB(7519),
      YB = dB(7500),
      gB = dB(7513),
      oB = dB(7493),
      kB = dB(1764),
      LB = dB(7525);
    const OB = {
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
        JD: {}
      },
      DB = "controllerSettings",
      uB = ["JD", "promptFamily", "hideButtonHints", "swapSticks", "swapConfirmBack", "leaderboardButton"],
      HB = ["auto", ...JB.d],
      EB = (BB, TB) => "string" === typeof TB && BB.includes(TB),
      vB = BB => TB => "number" === typeof TB && Number.isFinite(TB) ? (0, LB.A)(TB, BB) : void 0,
      mB = BB => "boolean" === typeof BB ? BB : void 0,
      iB = BB => TB => EB(BB, TB) ? TB : void 0,
      NB = {
        lookSensitivityX: vB(LB.rb),
        lookSensitivityY: vB(LB.rb),
        aimLookSensitivity: vB(LB.o),
        invertLookX: mB,
        invertLookY: mB,
        lookCurve: iB(YB.O),
        lookDeadzone: vB(LB.F),
        moveDeadzone: vB(LB.F),
        swapSticks: mB,
        autoSprint: mB,
        sneakMode: iB(["toggle", "hold"]),
        tapHoldTime: iB(["short", "medium", "long"]),
        attackMode: iB(["hold", "toggle"]),
        promptFamily: iB(HB),
        hideButtonHints: mB,
        vibration: mB,
        cursorSpeed: vB(LB.B),
        cursorMagnetism: mB,
        buttonRepeat: iB(YB.n),
        largePointer: mB,
        menuBackToCategories: mB,
        swapConfirmBack: mB,
        menuNavigation: iB(["hybrid", "focus", "cursor"]),
        inventoryNavigation: iB(["hybrid", "slot", "cursor"]),
        quickChat: iB(["wheel", "off"]),
        leaderboardButton: iB(["shop", "leaderboard"]),
        gyroAiming: mB,
        gyroSensitivity: vB(LB.T),
        gyroActivation: iB(["always", "aiming", "button"]),
        gyroButton: iB(YB.W),
        emoteButton: iB(["tapHold", "wheel"])
      },
      tB = [{
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
      fB = BB => {
        const TB = {};
        if ("object" !== typeof BB || null === BB) return TB;
        for (const [dB, VB] of Object.entries(BB)) Object.prototype.hasOwnProperty.call(gB.d, dB) && EB(YB.W, VB) && (TB[dB] = VB);
        return TB
      },
      sB = BB => {
        const TB = {};
        for (const dB of Object.keys(OB))("JD" === dB ? Object.keys(BB.JD).length > 0 : BB[dB] !== OB[dB]) && (TB[dB] = BB[dB]);
        0 !== Object.keys(TB).length ? lB.j.setItem(DB, TB) : lB.j.removeItem(DB)
      };
    let MB = (() => {
        const BB = lB.j.getItem(DB),
          TB = (BB => {
            const TB = "object" === typeof BB && null !== BB ? BB : {},
              dB = {
                ...OB,
                JD: fB(TB.JD)
              };
            for (const yB of Object.keys(NB)) {
              const BB = NB[yB](TB[yB]);
              void 0 !== BB && (dB[yB] = BB)
            }
            const VB = Object.keys(TB).filter((BB => !!Object.prototype.hasOwnProperty.call(OB, BB) && ("JD" === BB ? "object" !== typeof TB.JD || null === TB.JD || Object.keys(TB.JD).length !== Object.keys(dB.JD).length : dB[BB] !== TB[BB])));
            return VB.length > 0 && console.warn(`Stored controller settings had invalid values, replaced with defaults: ${VB.join(", ")}`), dB
          })(BB);
        return null !== BB && void 0 !== BB && sB(TB), TB
      })(),
      zB = {
        ...MB,
        ...(() => {
          if ("undefined" === typeof window) return {};
          const BB = {},
            TB = new URLSearchParams(window.location.search);
          for (const {
              param: dB,
              key: VB
            }
            of tB) {
            const yB = NB[VB](TB.get(dB));
            void 0 !== yB && (BB[VB] = yB)
          }
          return BB
        })()
      };
    const wB = () => zB,
      UB = () => {
        var BB, TB;
        const dB = wB().promptFamily;
        return "auto" !== dB ? dB : null !== (BB = null === (TB = oB.e.getActivePad()) || void 0 === TB ? void 0 : TB.family) && void 0 !== BB ? BB : "xbox"
      },
      FB = BB => {
        const TB = zB;
        MB = {
          ...MB,
          ...BB
        }, sB(MB), zB = {
          ...zB,
          ...BB
        }, (BB => {
          yB.h.yH(kB.g, zB), uB.some((TB => BB[TB] !== zB[TB])) && yB.h.yH(kB.e, zB)
        })(TB)
      },
      KB = () => {
        const [BB, TB] = (0, VB.useState)(zB);
        return (0, pB.e)(kB.g, TB), BB
      }
  },
  7994: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => yB
    });
    const VB = new Set(["Alt", "AltGraph", "Meta", "OS", "AudioVolumeUp", "AudioVolumeDown", "AudioVolumeMute", "MediaPlayPause", "MediaPlay", "MediaPause", "MediaStop", "MediaTrackNext", "MediaTrackPrevious", "BrowserBack", "BrowserForward", "BrowserHome", "GoBack", "LaunchApplication1", "LaunchApplication2", "LaunchMail", "PrintScreen", "Unidentified"]),
      yB = BB => VB.has(BB)
  },
  7493: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => OB.d,
      e: () => EB
    });
    var VB = dB(7500),
      yB = dB(7502);
    const pB = .1,
      lB = .3;
    class JB {
      constructor() {
        this.deadzone = 0, this.anchor = null, this.steadyMs = 0, this.lastMs = null, this.returning = !0, this.anchorLearned = !1
      }
      observe(BB, TB) {
        const dB = null === this.lastMs ? 0 : Math.min(Math.max(0, TB - this.lastMs), 100);
        this.lastMs = TB;
        const VB = Math.hypot(BB.x, BB.y);
        if (VB >= lB) return this.anchor = null, void(this.returning = !0);
        VB >= pB || (this.returning = !1);
        const yB = this.anchor;
        if (!yB || Math.hypot(BB.x - yB.x, BB.y - yB.y) > .03) return this.anchorLearned && (this.returning = !1), this.anchor = {
          x: BB.x,
          y: BB.y
        }, this.steadyMs = 0, void(this.anchorLearned = !1);
        if (this.steadyMs += dB, this.steadyMs < 1e3) return;
        const JB = Math.max(VB, Math.hypot(yB.x, yB.y));
        JB < pB ? this.deadzone = 0 : this.returning && (this.deadzone = JB + .05, this.anchorLearned = !0)
      }
      getDeadzone() {
        return this.deadzone
      }
      apply(BB) {
        return Math.hypot(BB.x, BB.y) < this.deadzone ? {
          x: 0,
          y: 0
        } : BB
      }
    }
    const YB = (BB, TB) => {
        var dB, VB;
        return null !== (dB = BB && (null === (VB = Object.getOwnPropertyDescriptor(BB, TB)) || void 0 === VB ? void 0 : VB.get)) && void 0 !== dB ? dB : null
      },
      gB = BB => {
        const TB = BB.vendorName;
        return "string" === typeof TB ? TB : void 0
      },
      oB = ((BB, TB) => {
        const dB = YB(BB, "index"),
          VB = YB(BB, "id"),
          yB = YB(BB, "connected"),
          pB = YB(BB, "mapping"),
          lB = YB(BB, "buttons"),
          JB = YB(BB, "axes"),
          oB = YB(TB, "pressed"),
          kB = YB(TB, "value");
        return dB && VB && yB && pB && lB && JB && oB && kB ? BB => {
          const TB = lB.call(BB),
            YB = JB.call(BB),
            LB = {
              index: Number(dB.call(BB)),
              id: String(VB.call(BB)),
              connected: !0 === yB.call(BB),
              mapping: String(pB.call(BB)),
              buttons: [],
              axes: [],
              vendorName: gB(BB)
            };
          for (let dB = 0; dB < TB.length; dB++) LB.buttons.push({
            pressed: !0 === oB.call(TB[dB]),
            value: Number(kB.call(TB[dB]))
          });
          for (let dB = 0; dB < YB.length; dB++) LB.axes.push(Number(YB[dB]));
          return LB
        } : null
      })("undefined" === typeof Gamepad ? null : Gamepad.prototype, "undefined" === typeof GamepadButton ? null : GamepadButton.prototype),
      kB = "undefined" === typeof Navigator ? null : Navigator.prototype.getGamepads;
    var LB = dB(1291),
      OB = dB(1764);
    const DB = lB,
      uB = BB => {
        const TB = new Array(VB.V).fill(0);
        for (let dB = 0; dB < VB.V && dB < BB.buttons.length; dB++) {
          const yB = BB.buttons[dB];
          TB[dB] = yB.pressed && !(0, VB.L)(dB) ? Math.max(yB.value, VB.z) : yB.value
        }
        return TB
      },
      HB = (BB, TB) => {
        var dB, VB;
        return {
          x: null !== (dB = BB.axes[TB]) && void 0 !== dB ? dB : 0,
          y: null !== (VB = BB.axes[TB + 1]) && void 0 !== VB ? VB : 0
        }
      };
    const EB = new class {
      constructor(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : oB;
        this.readGamepads = BB, this.requireTrustedPads = TB, this.nativeReader = dB, this.running = !1, this.listening = !1, this.rafId = 0, this.lastTimestampMs = 0, this.activeInfo = null, this.slots = [], this.trustedIndices = new Set, this.warnedNonStandardIds = new Set, this.loggedReadError = !1, this.frameListeners = new Set, this.connectionListeners = new Set, this.anyPadConnected = !1, this.connectedListeners = new Set, this.handleConnectionEvent = BB => {
          BB.isTrusted && this.trustedIndices.add(BB.gamepad.index), this.wake()
        }, this.handleDisconnectionEvent = BB => {
          this.trustedIndices.delete(BB.gamepad.index)
        }, this.dL = BB => {
          if (this.rafId = 0, !this.running) return;
          const TB = 0 === this.lastTimestampMs ? 16 : Math.min(100, BB - this.lastTimestampMs);
          this.lastTimestampMs = BB;
          try {
            this.poll(BB, TB)
          } finally {
            this.anyPadConnected && (this.rafId = requestAnimationFrame(this.dL))
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
      onFrame(BB) {
        return this.frameListeners.add(BB), () => {
          this.frameListeners.delete(BB)
        }
      }
      onActivePadChanged(BB) {
        return this.connectionListeners.add(BB), () => {
          this.connectionListeners.delete(BB)
        }
      }
      getActivePad() {
        return this.activeInfo
      }
      hasConnectedPad() {
        return this.anyPadConnected
      }
      onConnectedPadsChanged(BB) {
        return this.connectedListeners.add(BB), () => {
          this.connectedListeners.delete(BB)
        }
      }
      getActiveGamepad() {
        if (!this.activeInfo) return null;
        const BB = this.readPads()[this.activeInfo.index],
          TB = BB ? this.readPad(BB) : null;
        return TB && TB.id === this.activeInfo.id ? BB : null
      }
      poll(BB, TB) {
        var dB, yB;
        const pB = this.readPads();
        let lB = null,
          YB = !1;
        const gB = [],
          oB = Math.max(pB.length, this.slots.length);
        for (let mB = 0; mB < oB; mB++) {
          var kB;
          const TB = mB < pB.length ? pB[mB] : null,
            dB = TB ? this.readPad(TB) : null;
          if (!dB || !dB.connected || !this.isUsable(dB)) {
            this.slots[mB] = null;
            continue
          }
          let yB = this.slots[mB];
          yB && yB.id === dB.id || (yB = {
            id: dB.id,
            Dg: [],
            leftSettled: !1,
            rightSettled: !1,
            leftRest: new JB,
            rightRest: new JB
          }, this.slots[mB] = yB);
          const oB = HB(dB, 0),
            LB = HB(dB, 2);
          !yB.leftSettled && Math.hypot(oB.x, oB.y) < DB && (yB.leftSettled = !0), !yB.rightSettled && Math.hypot(LB.x, LB.y) < DB && (yB.rightSettled = !0), yB.leftRest.observe(oB, BB), yB.rightRest.observe(LB, BB);
          const OB = uB(dB),
            EB = (0, VB.r)(OB, yB.Dg),
            vB = yB.Dg,
            iB = EB.map(((BB, TB) => BB && !vB[TB]));
          yB.Dg = EB;
          const NB = {
            pad: dB,
            slot: yB,
            values: OB
          };
          mB === (null === (kB = this.activeInfo) || void 0 === kB ? void 0 : kB.index) && dB.id === this.activeInfo.id ? (lB = NB, YB = iB.includes(!0)) : iB.includes(!0) && gB.push({
            polled: NB,
            rose: iB
          })
        }
        const LB = this.slots.some((BB => null !== BB));
        if (LB !== this.anyPadConnected) {
          this.anyPadConnected = LB;
          for (const BB of this.connectedListeners) BB()
        }
        const OB = null !== (dB = null === (yB = lB) || void 0 === yB ? void 0 : yB.slot.Dg) && void 0 !== dB ? dB : [],
          EB = YB ? void 0 : gB.find((BB => {
            let {
              rose: TB
            } = BB;
            return TB.some(((BB, TB) => BB && !OB[TB]))
          }));
        if (EB ? (lB = EB.polled, this.setActive(EB.polled.pad)) : this.activeInfo && !lB && this.setActive(null), !lB || !this.activeInfo) return;
        const vB = ((BB, TB) => {
          let {
            pad: dB,
            slot: yB,
            values: pB
          } = BB;
          const lB = (0, VB.w)(TB);
          return lB.values = pB, yB.leftSettled && (lB.leftStick = yB.leftRest.apply(HB(dB, 0))), yB.rightSettled && (lB.rightStick = yB.rightRest.apply(HB(dB, 2))), lB
        })(lB, BB);
        for (const VB of this.frameListeners) VB(vB, TB, this.activeInfo)
      }
      readPad(BB) {
        if (this.nativeReader) try {
          return this.nativeReader(BB)
        } catch {
          if (this.requireTrustedPads) return null
        }
        return this.requireTrustedPads ? null : (BB => {
          const TB = BB;
          return {
            index: TB.index,
            id: TB.id,
            connected: TB.connected,
            mapping: TB.mapping,
            buttons: Array.from(TB.buttons, (BB => ({
              pressed: BB.pressed,
              value: BB.value
            }))),
            axes: Array.from(TB.axes),
            vendorName: gB(BB)
          }
        })(BB)
      }
      isUsable(BB) {
        return !(0, LB.g)(BB.id) && ("standard" !== BB.mapping ? (this.warnedNonStandardIds.has(BB.id) || (this.warnedNonStandardIds.add(BB.id), console.warn(`Controller "${BB.id}" has no standard button mapping, so it is ignored.`)), !1) : !this.requireTrustedPads || this.trustedIndices.has(BB.index))
      }
      setActive(BB) {
        this.activeInfo = BB ? {
          index: BB.index,
          id: BB.id,
          family: (0, yB.e)(BB.id, BB.vendorName)
        } : null;
        for (const TB of this.connectionListeners) TB(this.activeInfo)
      }
      readPads() {
        try {
          return this.readGamepads()
        } catch (BB) {
          return this.loggedReadError || (this.loggedReadError = !0, console.warn("Reading gamepads failed; controller input is unavailable.", BB)), []
        }
      }
      wake() {
        this.running && 0 === this.rafId && (this.lastTimestampMs = 0, this.rafId = requestAnimationFrame(this.dL))
      }
    }((() => kB ? kB.call(navigator) : []), !0);
    EB.listenForConnections()
  },
  8006: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => VB
    });
    const VB = {
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
  8058: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => lB,
      g: () => JB
    });
    var VB = dB(24),
      yB = dB(8045);
    let pB = !1;
    const lB = () => pB,
      JB = BB => {
        BB !== pB && (pB = BB, VB.h.yH(yB.i, pB))
      }
  },
  8050: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => JB,
      f: () => YB
    });
    var VB = dB(24),
      yB = dB(8045);
    let pB = null,
      lB = 0;
    const JB = () => pB,
      YB = BB => {
        null === BB && null === pB || (pB = null === BB ? null : {
          id: ++lB,
          holdMs: BB
        }, VB.h.yH(yB.j, pB))
      }
  },
  8067: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => lB,
      i: () => JB
    });
    var VB = dB(24),
      yB = dB(8045);
    let pB = !1;
    const lB = () => pB,
      JB = BB => {
        BB !== pB && (pB = BB, VB.h.yH(yB.k, pB))
      }
  },
  8166: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => lB,
      i: () => JB
    });
    var VB = dB(24),
      yB = dB(8045);
    let pB = !1;
    const lB = () => pB,
      JB = BB => {
        BB !== pB && (pB = BB, VB.h.yH(yB.o, pB))
      }
  },
  8085: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => VB
    });
    class VB {
      constructor() {
        this.downAtMs = null
      }
      update(BB, TB, dB, VB) {
        if (BB) return this.downAtMs = dB, null;
        if (null === this.downAtMs) return null;
        const yB = dB - this.downAtMs >= VB;
        return TB ? yB ? (this.downAtMs = null, "hold") : null : (this.downAtMs = null, yB ? "hold" : "tap")
      }
      release() {
        this.downAtMs = null
      }
    }
  },
  7555: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => kB,
      h: () => LB,
      k: () => JB,
      l: () => mB,
      m: () => vB
    });
    var VB = dB(33),
      yB = dB(7519),
      pB = dB(7500);
    const lB = (() => {
        try {
          return dB(7564)
        } catch {
          return null
        }
      })(),
      JB = [...pB.W, "LeftStick", "RightStick"],
      YB = new Map,
      gB = {
        xbox: "xbox",
        playstation: "playstation",
        nintendo: "nintendo",
        steamdeck: "steamdeck",
        generic: "xbox"
      },
      oB = (new Set(Object.values(gB)), {
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
      kB = (BB, TB) => {
        var dB, VB;
        return null !== (dB = null === (VB = oB[gB[BB]]) || void 0 === VB ? void 0 : VB[TB]) && void 0 !== dB ? dB : 1
      },
      LB = (BB, TB) => {
        const dB = `./${gB[BB]}/${TB}.svg`;
        let VB = YB.get(dB);
        return void 0 === VB && (VB = lB ? lB(dB) : "", YB.set(dB, VB)), VB
      },
      OB = new Set,
      DB = [],
      uB = BB => {
        if (!OB.has(BB)) {
          OB.add(BB);
          for (const TB of JB) {
            const dB = LB(BB, TB);
            if (dB) {
              const BB = new Image;
              BB.crossOrigin = "anonymous", BB.src = dB, DB.push(BB)
            }
          }
        }
      },
      HB = "controllerGlyphFamily";
    let EB = null;
    const vB = BB => {
        BB !== EB && (EB = BB, VB.j.setItem(HB, BB), uB(BB))
      },
      mB = () => {
        const BB = VB.j.getItem(HB);
        (0, yB.h)(BB) && BB !== EB && (EB = BB, uB(BB))
      }
  },
  8183: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => RB,
      g: () => aB
    });
    var VB = dB(62),
      yB = dB(24),
      pB = dB(1317),
      lB = dB(7511),
      JB = dB(7493),
      YB = dB(7535),
      gB = dB(7515);
    const oB = {
        x: 0,
        y: 0,
        z: 0
      },
      kB = Math.PI / 180,
      LB = BB => Math.hypot(BB.x, BB.y, BB.z),
      OB = (BB, TB) => ({
        x: BB.x * TB,
        y: BB.y * TB,
        z: BB.z * TB
      }),
      DB = (BB, TB) => ({
        x: BB.x + TB.x,
        y: BB.y + TB.y,
        z: BB.z + TB.z
      }),
      uB = (BB, TB) => ({
        x: BB.x - TB.x,
        y: BB.y - TB.y,
        z: BB.z - TB.z
      }),
      HB = BB => {
        const TB = LB(BB);
        return 0 === TB ? oB : OB(BB, 1 / TB)
      },
      EB = BB => ({
        min: {
          ...BB
        },
        max: {
          ...BB
        }
      }),
      vB = (BB, TB) => ({
        min: {
          x: Math.min(BB.min.x, TB.x),
          y: Math.min(BB.min.y, TB.y),
          z: Math.min(BB.min.z, TB.z)
        },
        max: {
          x: Math.max(BB.max.x, TB.x),
          y: Math.max(BB.max.y, TB.y),
          z: Math.max(BB.max.z, TB.z)
        }
      }),
      mB = (BB, TB) => BB.max.x - BB.min.x <= TB && BB.max.y - BB.min.y <= TB && BB.max.z - BB.min.z <= TB;
    class iB {
      constructor() {
        this.bias = oB, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = oB, this.windowSec = 0
      }
      update(BB) {
        const TB = this.gyroRange ? vB(this.gyroRange, BB.gyro) : EB(BB.gyro),
          dB = BB.accel ? this.accelRange ? vB(this.accelRange, BB.accel) : EB(BB.accel) : null;
        if (!mB(TB, 1) || dB && !mB(dB, .01)) return void this.restartWindow(BB);
        if (this.gyroRange = TB, this.accelRange = dB, this.sum = DB(this.sum, OB(BB.gyro, BB.dtSec)), this.windowSec += BB.dtSec, this.windowSec < 1) return;
        const VB = OB(this.sum, 1 / this.windowSec);
        if (LB(VB) > 5) return;
        const yB = uB(VB, this.bias);
        let pB = 0;
        !this.calibrated || this.windowSec >= 3 ? pB = 1 : LB(yB) <= 1 && (pB = Math.min(1, BB.dtSec / 1)), this.bias = DB(this.bias, OB(yB, pB)), this.calibrated = this.calibrated || pB > 0
      }
      correct(BB) {
        return uB(BB, this.bias)
      }
      getBias() {
        return this.bias
      }
      isCalibrated() {
        return this.calibrated
      }
      reset() {
        this.bias = oB, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = oB, this.windowSec = 0
      }
      restartWindow(BB) {
        this.gyroRange = EB(BB.gyro), this.accelRange = BB.accel ? EB(BB.accel) : null, this.sum = oB, this.windowSec = 0
      }
    }
    class NB {
      constructor() {
        this.down = null
      }
      update(BB, TB, dB) {
        const VB = HB(OB(TB, -1));
        if (!this.down) return this.down = VB, VB;
        const yB = OB(BB, kB * dB),
          pB = this.down,
          lB = {
            x: pB.x - (yB.y * pB.z - yB.z * pB.y),
            y: pB.y - (yB.z * pB.x - yB.x * pB.z),
            z: pB.z - (yB.x * pB.y - yB.y * pB.x)
          },
          JB = 0 === LB(VB) ? 0 : Math.min(1, dB / .25);
        var YB, gB;
        return this.down = HB((gB = JB, DB(YB = lB, OB(uB(VB, YB), gB)))), this.down
      }
      reset() {
        this.down = null
      }
    }
    class tB {
      constructor() {
        this.entries = [], this.windowSec = 0
      }
      apply(BB, TB, dB) {
        const VB = Math.hypot(BB, TB),
          yB = Math.max(0, Math.min(1, (VB - 2) / 2)),
          pB = {
            yaw: BB * (1 - yB),
            pitch: TB * (1 - yB),
            dtSec: dB
          };
        for (this.entries.push(pB), this.windowSec += dB; this.entries.length > 1 && this.windowSec - this.entries[0].dtSec >= .125;) this.windowSec -= this.entries[0].dtSec, this.entries.shift();
        let lB = 0,
          JB = 0;
        for (const gB of this.entries) lB += gB.yaw * gB.dtSec, JB += gB.pitch * gB.dtSec;
        const YB = this.windowSec > 0 ? {
          yaw: lB / this.windowSec,
          pitch: JB / this.windowSec
        } : {
          yaw: pB.yaw,
          pitch: pB.pitch
        };
        return {
          yaw: BB * yB + YB.yaw,
          pitch: TB * yB + YB.pitch
        }
      }
      reset() {
        this.entries = [], this.windowSec = 0
      }
    }
    class fB {
      constructor() {
        this.calibrator = new iB, this.gravity = new NB, this.smoother = new tB
      }
      process(BB, TB, dB) {
        const VB = Math.max(0, Math.min(.05, TB));
        this.calibrator.update({
          ...BB,
          dtSec: VB
        });
        const yB = this.calibrator.correct(BB.gyro);
        let pB = yB.y;
        "player" === dB && BB.accel && (pB = ((BB, TB) => {
          const dB = BB.y * TB.y + BB.z * TB.z;
          return -Math.sign(dB) * Math.min(1.41 * Math.abs(dB), Math.hypot(BB.y, BB.z))
        })(yB, this.gravity.update(yB, BB.accel, VB)));
        const lB = this.smoother.apply(pB, yB.x, VB),
          JB = ((BB, TB) => {
            const dB = Math.hypot(BB, TB);
            if (dB >= 1) return {
              yaw: BB,
              pitch: TB
            };
            const VB = dB / 1;
            return {
              yaw: BB * VB,
              pitch: TB * VB
            }
          })(lB.yaw, lB.pitch);
        return {
          yawDeg: JB.yaw * VB,
          pitchDeg: JB.pitch * VB
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
    const sB = (BB, TB) => {
      var dB, VB, yB;
      const pB = TB * kB,
        lB = null !== (dB = BB.beta) && void 0 !== dB ? dB : 0,
        JB = null !== (VB = BB.gamma) && void 0 !== VB ? VB : 0;
      return {
        x: lB * Math.cos(pB) - JB * Math.sin(pB),
        y: lB * Math.sin(pB) + JB * Math.cos(pB),
        z: null !== (yB = BB.alpha) && void 0 !== yB ? yB : 0
      }
    };
    var MB = dB(8186);
    class zB {
      constructor(BB, TB, dB) {
        this.hid = BB, this.sink = TB, this.onControllersChanged = dB, this.controllers = new Map, this.running = !1, this.openedCount = 0, this.opening = new Set, this.disconnectedWhileOpening = new Set, this.switchPacketCounter = 0, this.onConnect = BB => {
          this.openController(BB.device).catch((BB => {
            console.warn("Could not open motion controller", BB)
          }))
        }, this.onDisconnect = BB => {
          this.opening.has(BB.device) && this.disconnectedWhileOpening.add(BB.device);
          const TB = this.controllers.get(BB.device);
          TB && (this.forget(TB), this.onControllersChanged())
        }
      }
      async start() {
        if (this.running) return;
        this.running = !0, this.hid.addEventListener("connect", this.onConnect), this.hid.addEventListener("disconnect", this.onDisconnect);
        const BB = await this.hid.getDevices();
        for (const TB of BB) await this.openController(TB).catch((BB => {
          console.warn("Could not open motion controller", BB)
        }))
      }
      stop() {
        this.running = !1, this.hid.removeEventListener("connect", this.onConnect), this.hid.removeEventListener("disconnect", this.onDisconnect);
        for (const BB of [...this.controllers.values()]) this.forget(BB);
        this.onControllersChanged()
      }
      async request() {
        const BB = await this.hid.requestDevice({
          filters: MB.n
        });
        let TB = 0;
        for (const dB of BB) await this.openController(dB).catch((BB => {
          console.warn("Could not open motion controller", BB), TB++
        }));
        return TB
      }
      async hasGrantedController() {
        return (await this.hid.getDevices()).some((BB => null !== (0, MB.f)(BB.vendorId, BB.productId)))
      }
      getConnectedKinds() {
        return [...this.controllers.values()].map((BB => BB.kind))
      }
      forget(BB) {
        BB.device.removeEventListener("inputreport", BB.onReport), this.controllers.get(BB.device) === BB && this.controllers.delete(BB.device)
      }
      async openController(BB) {
        const TB = (0, MB.f)(BB.vendorId, BB.productId);
        if (!TB || !this.running || this.controllers.has(BB) || this.opening.has(BB)) return;
        this.opening.add(BB);
        let dB = !1;
        try {
          BB.opened || await BB.open()
        } finally {
          this.opening.delete(BB), dB = this.disconnectedWhileOpening.delete(BB)
        }
        if (dB) return void BB.close().catch((BB => {
          console.debug("Could not close an unplugged motion controller", BB)
        }));
        if (!this.running) return;
        const VB = {
          device: BB,
          kind: TB,
          lastClock: null,
          lastEventMs: null,
          lastReadingMs: -1 / 0,
          openedOrder: this.openedCount++,
          onReport: BB => {
            this.onReport(VB, BB)
          }
        };
        this.controllers.set(BB, VB), BB.addEventListener("inputreport", VB.onReport), this.onControllersChanged();
        try {
          await this.enableMotion(VB)
        } catch (yB) {
          console.warn(`Could not turn on motion for ${TB}`, yB), this.controllers.get(BB) === VB && (this.forget(VB), this.onControllersChanged())
        }
      }
      async enableMotion(BB) {
        let {
          device: TB,
          kind: dB
        } = BB;
        if ((0, MB.j)(dB))
          for (const VB of MB.y[dB]) await TB.receiveFeatureReport(VB).catch((BB => {
            console.debug(`Motion controller feature report ${VB} unavailable`, BB)
          }));
        else
          for (let VB = 0; VB < 2; VB++)
            for (const {
                subcommand: BB,
                args: dB
              }
              of MB.B) await TB.sendReport(MB.E, (0, MB.c)(this.switchPacketCounter++, BB, dB)), await new Promise((BB => {
              setTimeout(BB, 60)
            }))
      }
      onReport(BB, TB) {
        const dB = (0, MB.r)(BB.kind, TB.reportId, TB.data, BB.device.productId);
        if (!dB) return;
        const VB = null === BB.lastEventMs ? 0 : (TB.timeStamp - BB.lastEventMs) / 1e3;
        BB.lastEventMs = TB.timeStamp;
        let yB = dB.dtSec;
        if (null !== yB && VB > 0 && (yB = Math.max(.001, Math.min(.017, VB / dB.readings.length))), null === yB && null !== dB.sensorClock && (0, MB.j)(BB.kind)) {
          const TB = (0, MB.u)(BB.kind, BB.lastClock, dB.sensorClock);
          BB.lastClock = dB.sensorClock, yB = 0 === TB ? null : TB
        }
        if (BB.lastReadingMs = TB.timeStamp, this.isPreferred(BB, TB.timeStamp))
          for (const lB of dB.readings) {
            var pB;
            this.sink(lB, null !== (pB = yB) && void 0 !== pB ? pB : VB, `hid${BB.openedOrder}`)
          }
      }
      isPreferred(BB, TB) {
        const dB = BB => 1e6 * MB.q[BB.kind] + BB.openedOrder;
        for (const VB of this.controllers.values())
          if (VB !== BB && TB - VB.lastReadingMs < 500 && dB(VB) < dB(BB)) return !1;
        return !0
      }
    }
    var wB = dB(95);
    const UB = () => DeviceMotionEvent,
      FB = () => "undefined" !== typeof window && "undefined" !== typeof DeviceMotionEvent && window.isSecureContext && (0, wB.isMobile)(),
      KB = () => {
        var BB;
        const TB = null === (BB = window.screen.orientation) || void 0 === BB ? void 0 : BB.angle;
        return "number" === typeof TB ? TB : "number" === typeof window.orientation ? window.orientation : 0
      };
    class rB {
      constructor(BB, TB) {
        this.sink = BB, this.onStateChanged = TB, this.state = "off", this.lastEventMs = null, this.noSensorTimer = null, this.wanted = !1, this.permissionRequest = null, this.granted = !1, this.onGesture = () => {
          this.requestPermission().catch((BB => {
            console.warn("Could not enable the motion sensor", BB)
          }))
        }, this.onMotion = BB => {
          const TB = BB.rotationRate;
          if (!TB || null === TB.alpha && null === TB.beta && null === TB.gamma) return;
          const dB = null === this.lastEventMs ? 0 : (BB.timeStamp - this.lastEventMs) / 1e3;
          this.lastEventMs = BB.timeStamp, this.clearNoSensorTimer(), this.setState("on"), this.sink({
            gyro: sB(TB, KB()),
            accel: null
          }, dB, "phone")
        }
      }
      getState() {
        return this.state
      }
      start() {
        if (this.wanted = !0, "off" === this.state) return "function" !== typeof UB().requestPermission || this.granted ? void this.listen() : (this.setState("needsPermission"), void this.armGestureRequest())
      }
      requestPermission() {
        return this.permissionRequest || (this.permissionRequest = this.askPermission().finally((() => {
          this.permissionRequest = null
        }))), this.permissionRequest
      }
      async askPermission() {
        const BB = UB().requestPermission;
        if (!this.wanted) return;
        if ("function" !== typeof BB) return void this.listen();
        let TB;
        this.disarmGestureRequest();
        try {
          TB = await BB.call(DeviceMotionEvent)
        } catch (dB) {
          throw this.wanted && "needsPermission" === this.state && this.armGestureRequest(), dB
        }
        this.wanted && ("granted" === TB ? (this.granted = !0, this.listen()) : this.setState("denied"))
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
      setState(BB) {
        this.state !== BB && (this.state = BB, this.onStateChanged())
      }
    }
    const IB = "controllerGyroStatusChanged",
      cB = {
        pU: 0,
        kU: 0
      },
      SB = BB => {
        var TB, dB;
        return "undefined" === typeof document || (null === (TB = null === (dB = document.featurePolicy) || void 0 === dB ? void 0 : dB.allowsFeature(BB)) || void 0 === TB || TB)
      };
    class PB {
      constructor() {
        this.processor = new fB, this.hid = void 0, this.hidBlocked = void 0, this.phone = void 0, this.phoneBlocked = void 0, this.source = null, this.pendingYawDeg = 0, this.pendingPitchDeg = 0, this.lastDrainMs = -1 / 0, this.lastHidReadingMs = -1 / 0, this.running = !1, this.phoneRunning = !1, this.syncWithSettings = BB => {
          const TB = BB.gyroAiming && JB.e.hasConnectedPad();
          var dB, VB;
          TB !== this.phoneRunning && (this.phoneRunning = TB, TB ? null === (dB = this.phone) || void 0 === dB || dB.start() : null === (VB = this.phone) || void 0 === VB || VB.stop());
          if (BB.gyroAiming !== this.running) {
            var yB, pB;
            if (this.running = BB.gyroAiming, this.running) null === (yB = this.hid) || void 0 === yB || yB.start().catch((BB => {
              console.warn("Could not open motion controllers", BB)
            }));
            else null === (pB = this.hid) || void 0 === pB || pB.stop(), this.processor.reset(), this.source = null, this.discardPending();
            this.publishStatus()
          }
        }, this.publishStatus = () => {
          yB.h.yH(IB, this.getStatus())
        };
        const BB = (() => {
            var BB;
            return "undefined" !== typeof navigator && window.isSecureContext && null !== (BB = navigator.hid) && void 0 !== BB ? BB : null
          })(),
          TB = SB("hid");
        this.hidBlocked = null !== BB && !TB, this.hid = BB && TB ? new zB(BB, ((BB, TB, dB) => {
          this.lastHidReadingMs = performance.now(), this.feed(BB, TB, "player", dB)
        }), this.publishStatus) : null;
        const dB = SB("accelerometer") && SB("gyroscope");
        this.phoneBlocked = FB() && !dB, this.phone = FB() && dB ? new rB(((BB, TB, dB) => {
          performance.now() - this.lastHidReadingMs >= 500 && this.feed(BB, TB, "local", dB)
        }), this.publishStatus) : null, yB.h.subscribe(gB.f, this.syncWithSettings), JB.e.onConnectedPadsChanged((() => {
          this.syncWithSettings((0, gB.h)()), this.publishStatus()
        })), this.syncWithSettings((0, gB.h)())
      }
      isSupported() {
        return null !== this.hid || null !== this.phone
      }
      getStatus() {
        var BB, TB, dB, VB;
        return {
          hidSupported: null !== this.hid,
          hidBlocked: this.hidBlocked,
          phoneSupported: null !== this.phone,
          phoneBlocked: this.phoneBlocked,
          controllers: null !== (BB = null === (TB = this.hid) || void 0 === TB ? void 0 : TB.getConnectedKinds()) && void 0 !== BB ? BB : [],
          phoneMotion: null !== (dB = null === (VB = this.phone) || void 0 === VB ? void 0 : VB.getState()) && void 0 !== dB ? dB : "off",
          padConnected: JB.e.hasConnectedPad()
        }
      }
      async connectController() {
        return this.hid ? this.hid.request() : 0
      }
      async connectControllerIfNoneGranted() {
        this.hid && !await this.hid.hasGrantedController() && await this.hid.request()
      }
      async allowPhoneMotion() {
        var BB;
        await (null === (BB = this.phone) || void 0 === BB ? void 0 : BB.requestPermission())
      }
      drainLookDelta() {
        const BB = performance.now();
        BB - this.lastDrainMs > 500 && this.discardPending(), this.lastDrainMs = BB;
        const TB = {
          yawDeg: this.pendingYawDeg,
          pitchDeg: this.pendingPitchDeg
        };
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0;
        const dB = (0, gB.h)();
        return dB.gyroAiming && (BB => {
          let {
            activation: TB,
            isHeld: dB,
            useButton: VB,
            gyroButton: yB
          } = BB;
          return "always" === TB || dB("aiming" === TB ? VB : yB)
        })({
          activation: dB.gyroActivation,
          isHeld: BB => YB.d.isButtonHeld(BB),
          useButton: (0, lB.m)("use"),
          gyroButton: dB.gyroButton
        }) ? ((BB, TB) => ({
          pU: -BB.yawDeg * TB * kB,
          kU: -BB.pitchDeg * TB * kB
        }))(TB, dB.gyroSensitivity) : cB
      }
      discardPending() {
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0
      }
      injectMotion(BB, TB) {
        this.feed(BB, TB, "local", "injected")
      }
      getCalibration() {
        return this.processor.getCalibration()
      }
      feed(BB, TB, dB, VB) {
        this.source !== VB && (this.processor.reset(), this.source = VB);
        const yB = this.processor.process(BB, TB, dB);
        this.pendingYawDeg += yB.yawDeg, this.pendingPitchDeg += yB.pitchDeg
      }
    }
    let QB = null;
    const RB = () => (QB || (QB = new PB), QB),
      aB = () => {
        const [BB, TB] = (0, VB.useState)((() => RB().getStatus()));
        return (0, pB.e)(IB, TB), (0, VB.useEffect)((() => {
          TB(RB().getStatus())
        }), []), BB
      }
  },
  8186: (BB, TB, dB) => {
    dB.d(TB, {
      B: () => tB,
      E: () => mB,
      c: () => NB,
      f: () => YB,
      j: () => VB,
      n: () => JB,
      o: () => gB,
      q: () => oB,
      r: () => vB,
      u: () => HB,
      y: () => fB
    });
    const VB = BB => "dualShock4" === BB || "dualSense" === BB,
      yB = 1356,
      pB = 1406,
      lB = [{
        vendorId: yB,
        productId: 1476,
        kind: "dualShock4"
      }, {
        vendorId: yB,
        productId: 2508,
        kind: "dualShock4"
      }, {
        vendorId: yB,
        productId: 2976,
        kind: "dualShock4"
      }, {
        vendorId: yB,
        productId: 3302,
        kind: "dualSense"
      }, {
        vendorId: yB,
        productId: 3570,
        kind: "dualSense"
      }, {
        vendorId: pB,
        productId: 8201,
        kind: "switchPro"
      }, {
        vendorId: pB,
        productId: 8198,
        kind: "joyConLeft"
      }, {
        vendorId: pB,
        productId: 8199,
        kind: "joyConRight"
      }],
      JB = lB.map((BB => {
        let {
          vendorId: TB,
          productId: dB
        } = BB;
        return {
          vendorId: TB,
          productId: dB
        }
      })),
      YB = (BB, TB) => {
        var dB, VB;
        return null !== (dB = null === (VB = lB.find((dB => dB.vendorId === BB && dB.productId === TB))) || void 0 === VB ? void 0 : VB.kind) && void 0 !== dB ? dB : null
      },
      gB = {
        dualShock4: "DualShock 4",
        dualSense: "DualSense",
        switchPro: "Switch Pro Controller",
        joyConLeft: "Joy-Con (L)",
        joyConRight: "Joy-Con (R)"
      },
      oB = {
        dualSense: 0,
        dualShock4: 0,
        switchPro: 0,
        joyConRight: 1,
        joyConLeft: 2
      },
      kB = 2e3 / 32767,
      LB = 1 / 8192,
      OB = 936 / 13371,
      DB = (BB, TB, dB) => ({
        x: BB.getInt16(TB, !0) * dB,
        y: BB.getInt16(TB + 2, !0) * dB,
        z: BB.getInt16(TB + 4, !0) * dB
      }),
      uB = BB => 0 === BB.x && 0 === BB.y && 0 === BB.z,
      HB = (BB, TB, dB) => null === TB ? null : "dualShock4" === BB ? 16 * (dB - TB & 65535) / 3 / 1e6 : (dB - TB >>> 0) / 3 / 1e6,
      EB = (BB, TB) => "joyConRight" === TB ? {
        x: BB.y,
        y: -BB.z,
        z: -BB.x
      } : {
        x: -BB.y,
        y: BB.z,
        z: -BB.x
      },
      vB = (BB, TB, dB, yB) => VB(BB) ? ((BB, TB, dB, VB) => {
        const yB = ((BB, TB, dB) => "dualShock4" === BB ? 1 === TB && dB >= 63 ? 0 : 17 === TB && dB >= 65 ? 2 : null : 1 === TB && dB >= 62 ? 0 : 49 === TB && dB >= 63 ? 1 : null)(BB, TB, dB.byteLength);
        if (null === yB) return null;
        if (2976 === VB && 1 === TB && 0 !== (4 & dB.getUint8(30))) return null;
        const pB = yB + ("dualShock4" === BB ? 12 : 15),
          lB = DB(dB, pB, kB),
          JB = DB(dB, pB + 6, LB);
        return uB(lB) && uB(JB) ? null : {
          readings: [{
            gyro: lB,
            accel: JB
          }],
          dtSec: null,
          sensorClock: "dualShock4" === BB ? dB.getUint16(yB + 9, !0) : dB.getUint32(yB + 27, !0)
        }
      })(BB, TB, dB, yB) : ((BB, TB, dB) => {
        if (48 !== TB && 49 !== TB || dB.byteLength < 48) return null;
        const VB = [];
        for (let yB = 0; yB < 3; yB++) {
          const TB = DB(dB, 12 + 12 * yB, 244e-6),
            pB = DB(dB, 18 + 12 * yB, OB);
          if (uB(pB) && uB(TB)) return null;
          VB.push({
            gyro: EB(pB, BB),
            accel: EB(TB, BB)
          })
        }
        return {
          readings: VB,
          dtSec: .005,
          sensorClock: null
        }
      })(BB, TB, dB),
      mB = 1,
      iB = [0, 1, 64, 64, 0, 1, 64, 64],
      NB = (BB, TB, dB) => new Uint8Array([15 & BB, ...iB, TB, ...dB]),
      tB = [{
        subcommand: 64,
        args: [1]
      }, {
        subcommand: 3,
        args: [48]
      }],
      fB = {
        dualShock4: [2, 5],
        dualSense: [5]
      }
  },
  7543: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => UB,
      f: () => PB,
      h: () => EB,
      k: () => OB.i,
      l: () => rB,
      n: () => KB,
      p: () => vB,
      s: () => IB,
      v: () => OB.n,
      z: () => OB.r,
      A: () => QB,
      E: () => OB.u,
      H: () => sB
    });
    var VB = dB(62),
      yB = dB(21),
      pB = dB(24),
      lB = dB(1317),
      JB = dB(1173),
      YB = dB(7515),
      gB = dB(7552),
      oB = dB(7502),
      kB = dB(7493),
      LB = dB(7555),
      OB = dB(1275),
      DB = dB(7500),
      uB = dB(7994),
      HB = dB(3832);
    const EB = BB => !BB.repeat && !(0, uB.d)(BB.key),
      vB = "PadHidesCursor";
    let mB = !1;
    const iB = BB => {
        BB !== mB && (mB = BB, document.documentElement.classList.toggle(vB, BB))
      },
      NB = new class {
        constructor() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
        observe(BB) {
          let TB = !1,
            dB = !1;
          BB.values.forEach(((BB, VB) => {
            const yB = BB >= (this.buttonsDown[VB] ? DB.T : DB.Q);
            yB && !this.buttonsDown[VB] && (TB = !0, dB = !0), this.buttonsDown[VB] = yB
          }));
          return [BB.leftStick, BB.rightStick].forEach(((BB, VB) => {
            const yB = this.stickAnchors[VB];
            Math.hypot(BB.x, BB.y) < (yB ? DB.T : .3) ? this.stickAnchors[VB] = null : (!yB || Math.hypot(BB.x - yB.x, BB.y - yB.y) >= .3) && (this.stickAnchors[VB] = {
              x: BB.x,
              y: BB.y
            }, TB = !0, dB ||= !yB)
          })), TB && (this.lastActivityMs = BB.timestampMs), this.onlyMovedOn = TB && !dB, TB
        }
        wasOnlyMoveOn() {
          return this.onlyMovedOn
        }
        isHolding(BB) {
          return !(BB - this.lastActivityMs >= 1e3) && (this.buttonsDown.some((BB => BB)) || this.stickAnchors.some((BB => null !== BB)))
        }
        isStickOffRest() {
          return this.stickAnchors.some((BB => null !== BB))
        }
        reset() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
      };
    let tB = null,
      fB = !1;
    const sB = () => fB;
    let MB = null,
      zB = !1,
      wB = null;
    const UB = () => wB;
    let FB = !1;
    const KB = BB => {
        if (!NB.observe(BB)) return !1;
        if (FB && NB.wasOnlyMoveOn() && !(0, OB.i)()) return !1;
        FB = !1, fB = !1;
        const TB = !(0, OB.i)();
        return TB && (tB = BB, wB = !mB && zB && MB ? {
          ...MB
        } : null), zB = !1, (0, OB.n)("gamepad"), iB(!0), (0, LB.m)((0, YB.l)()), TB
      },
      rB = BB => !(0, OB.i)() || BB === tB,
      IB = () => {
        NB.reset()
      },
      cB = () => {
        const BB = yB.d.get("activeInputDevice"),
          TB = "gamepad" === BB ? kB.e.getActivePad() : null;
        return {
          device: BB,
          inGame: (0, JB.r)(),
          padMovesMouse: null !== TB && (0, oB.h)(TB.id)
        }
      },
      SB = BB => {
        document.pointerLockElement ? MB = null : (MB ??= {
          x: 0,
          y: 0
        }, MB.x = BB.clientX, MB.y = BB.clientY)
      },
      PB = () => {
        const BB = new HB.d,
          TB = TB => {
            BB.reset(), FB = !1, (0, OB.n)(TB)
          },
          dB = BB => {
            if (BB.isTrusted) {
              if (BB instanceof KeyboardEvent) {
                if ((0, OB.l)(BB), !EB(BB)) return;
                fB = !0
              }
              if (BB instanceof PointerEvent && "touch" === BB.pointerType) return MB = null, void TB("touch");
              BB instanceof PointerEvent && (SB(BB), zB = !0), ("pointerdown" !== BB.type || (BB => {
                let {
                  device: TB,
                  inGame: dB,
                  padMovesMouse: VB
                } = BB;
                return !("gamepad" === TB && VB && dB)
              })(cB())) && TB("keyboardMouse")
            }
          },
          VB = BB => {
            BB.isTrusted && (MB = null, TB("touch"))
          },
          lB = BB => {
            BB.isTrusted && "touch" !== BB.pointerType && !BB.relatedTarget && (MB = null)
          },
          JB = dB => {
            if (!dB.isTrusted || "touch" === dB.pointerType) return;
            SB(dB);
            const VB = dB.movementX || 0,
              pB = dB.movementY || 0;
            if (0 === VB && 0 === pB) return;
            if (zB = !0, iB(!1), "keyboardMouse" === yB.d.get("activeInputDevice")) return;
            const lB = NB.isHolding(dB.timeStamp),
              JB = cB(),
              YB = (BB => {
                let {
                  device: TB,
                  inGame: dB,
                  padMovesMouse: VB,
                  padHolding: yB
                } = BB;
                return ("gamepad" !== TB || !VB) && "keyboardMouse" !== TB && (dB || !yB)
              })({
                ...JB,
                inGame: JB.inGame && (0, gB.d)(),
                padHolding: lB
              });
            YB && BB.add(VB, pB, dB.timeStamp) && (TB("keyboardMouse"), FB = NB.isStickOffRest())
          },
          YB = BB => {
            iB("gamepad" === BB)
          },
          oB = {
            capture: !0,
            passive: !0
          };
        window.addEventListener("keydown", dB, oB), window.addEventListener("pointerdown", dB, oB), window.addEventListener("wheel", dB, oB), window.addEventListener("touchstart", VB, oB), window.addEventListener("pointermove", JB, oB), window.addEventListener("pointerout", lB, oB);
        const kB = pB.h.subscribe("appManagerUpdated|activeInputDevice", YB);
        return YB(yB.d.get("activeInputDevice")), () => {
          window.removeEventListener("keydown", dB, oB), window.removeEventListener("pointerdown", dB, oB), window.removeEventListener("wheel", dB, oB), window.removeEventListener("touchstart", VB, oB), window.removeEventListener("pointermove", JB, oB), window.removeEventListener("pointerout", lB, oB), MB = null, pB.h.unsubscribe(kB), iB(!1)
        }
      },
      QB = () => {
        const [BB, TB] = (0, VB.useState)(YB.l);
        return (0, lB.e)(YB.c, (() => {
          TB((0, YB.l)())
        })), (0, lB.e)(kB.b, (() => {
          TB((0, YB.l)())
        })), BB
      }
  },
  7519: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => VB,
      h: () => yB
    });
    const VB = ["xbox", "playstation", "nintendo", "steamdeck", "generic"],
      yB = BB => VB.includes(BB)
  },
  7552: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => gB,
      d: () => oB,
      h: () => YB,
      l: () => JB
    });
    var VB = dB(21),
      yB = dB(1507),
      pB = dB(1603);
    const lB = new Map,
      JB = (BB, TB) => (lB.has(BB) && console.warn(`Gameplay blocker "${BB}" registered twice; the newer one replaces it.`), lB.set(BB, TB), () => {
        lB.get(BB) === TB && lB.delete(BB)
      }),
      YB = () => (0, pB.c)(document.activeElement),
      gB = function() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        for (const [TB, dB] of lB)
          if (!BB.includes(TB) && dB()) return TB;
        return null
      },
      oB = function() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return "inGame" === VB.d.get("gameState") && (!(0, yB.l)() && (!YB() && null === gB(BB)))
      }
  },
  8175: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => JB
    });
    var VB = dB(21),
      yB = dB(2925),
      pB = dB(1235),
      lB = dB(1275);
    const JB = async () => {
      if ((0, lB.i)()) {
        if (!0 !== await pB.NotificationProvider.showPromptPopup({
            title: "controller:menusLeaveGameTitle",
            confirmText: "controller:menusLeaveGameLeave",
            cancelText: "controller:menusLeaveGameStay",
            destructive: !0
          }).getResult() || "inGame" !== VB.d.get("gameState")) return
      }(0, yB.b)()
    }
  },
  7500: (BB, TB, dB) => {
    dB.d(TB, {
      D: () => mB,
      F: () => FB,
      G: () => iB,
      H: () => EB,
      L: () => HB,
      O: () => gB,
      Q: () => LB,
      T: () => OB,
      V: () => yB,
      W: () => VB,
      Y: () => tB,
      ab: () => wB,
      e: () => rB,
      eb: () => KB,
      g: () => UB,
      i: () => oB,
      ib: () => NB,
      k: () => YB,
      l: () => JB,
      n: () => sB,
      r: () => vB,
      t: () => fB,
      w: () => pB,
      z: () => kB
    });
    const VB = ["A", "B", "X", "Y", "LB", "RB", "LT", "RT", "View", "Menu", "LS", "RS", "Up", "Down", "Left", "Right", "Home"],
      yB = VB.length,
      pB = function() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return {
          values: new Array(yB).fill(0),
          leftStick: {
            x: 0,
            y: 0
          },
          rightStick: {
            x: 0,
            y: 0
          },
          timestampMs: BB
        }
      },
      lB = Object.fromEntries(VB.map(((BB, TB) => [BB, TB]))),
      JB = BB => lB[BB],
      YB = function(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .95;
        const VB = Math.hypot(BB.x, BB.y);
        if (VB <= TB) return {
          x: 0,
          y: 0
        };
        const yB = Math.min(1, (VB - TB) / Math.max(1e-4, dB - TB));
        return {
          x: BB.x / VB * yB,
          y: BB.y / VB * yB
        }
      },
      gB = ["exponential", "linear", "boost"],
      oB = (BB, TB) => {
        const dB = Math.hypot(BB.x, BB.y);
        if (0 === dB) return {
          x: 0,
          y: 0
        };
        const VB = ((BB, TB) => {
          const dB = Math.max(0, Math.min(1, BB));
          return "linear" === TB ? dB : dB * dB
        })(dB, TB);
        return {
          x: BB.x / dB * VB,
          y: BB.y / dB * VB
        }
      },
      kB = .5,
      LB = .3,
      OB = .2,
      DB = JB("LT"),
      uB = JB("RT"),
      HB = BB => BB === DB || BB === uB,
      EB = (BB, TB) => {
        const dB = JB(TB);
        return HB(dB) ? BB[dB] > .35 : BB[dB] >= kB
      },
      vB = (BB, TB) => BB.map(((BB, dB) => HB(dB) ? TB[dB] ? BB > .35 : BB >= .55 : BB >= kB)),
      mB = ["Up", "Down", "Left", "Right"],
      iB = BB => mB.includes(BB),
      NB = function(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .5;
        return Math.hypot(BB.x, BB.y) < TB ? null : Math.abs(BB.x) > Math.abs(BB.y) ? BB.x > 0 ? "Right" : "Left" : BB.y > 0 ? "Down" : "Up"
      },
      tB = {
        initialDelayMs: 350,
        intervalMs: 120
      },
      fB = {
        initialDelayMs: 350,
        intervalMs: 150
      },
      sB = ["default", "slow", "off"],
      MB = 800,
      zB = 250,
      wB = (BB, TB) => "off" === TB ? null : "slow" === TB ? {
        initialDelayMs: Math.max(BB.initialDelayMs, MB),
        intervalMs: Math.max(BB.intervalMs, zB)
      } : BB;
    class UB {
      constructor(BB) {
        this.readTiming = BB, this.Dg = !1, this.timing = null, this.nextFireMs = 0
      }
      update(BB, TB) {
        return BB ? this.Dg ? !!(this.timing && TB >= this.nextFireMs) && (this.nextFireMs = TB + this.timing.intervalMs, !0) : (this.Dg = !0, this.timing = this.readTiming(), this.nextFireMs = TB + (null !== (dB = null === (VB = this.timing) || void 0 === VB ? void 0 : VB.initialDelayMs) && void 0 !== dB ? dB : 0), !0) : (this.Dg = !1, !1);
        var dB, VB
      }
      reset() {
        this.Dg = !1
      }
    }
    const FB = {
        initialDelayMs: 350,
        intervalMs: 80
      },
      KB = {
        initialDelayMs: 400,
        intervalMs: 90
      };
    class rB {
      constructor(BB) {
        this.timer = BB, this.direction = null
      }
      update(BB, TB) {
        return BB !== this.direction && (this.timer.reset(), this.direction = BB), this.timer.update(null !== BB, TB) ? BB : null
      }
      reset() {
        this.timer.reset(), this.direction = null
      }
    }
  },
  8079: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => yB,
      g: () => pB
    });
    let VB = -1 / 0;
    const yB = () => {
        VB = performance.now()
      },
      pB = BB => performance.now() - VB < BB
  },
  7997: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => lB,
      g: () => pB
    });
    var VB = dB(7515),
      yB = dB(7500);
    const pB = BB => (0, yB.ab)(BB, (0, VB.h)().buttonRepeat),
      lB = BB => new yB.g((() => pB(BB)))
  },
  8178: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => YB,
      d: () => pB,
      g: () => lB,
      k: () => yB,
      o: () => JB
    });
    var VB = dB(1711);
    const yB = "controllerPadShopOpen",
      pB = BB => VB.f.includes(BB),
      lB = BB => Object.values(BB).some((BB => !1 !== BB.canBuy && !BB.isRewardedAd)),
      JB = (BB, TB, dB) => {
        var VB, yB, lB, JB;
        const YB = BB.filter((BB => !pB(BB))),
          gB = null !== TB && BB.includes(TB) ? TB : null;
        return null !== gB && !pB(gB) && dB(gB) ? gB : null !== (VB = null !== (yB = null !== (lB = null !== (JB = YB.find(dB)) && void 0 !== JB ? JB : YB[0]) && void 0 !== lB ? lB : gB) && void 0 !== yB ? yB : BB[0]) && void 0 !== VB ? VB : null
      },
      YB = BB => BB.userInput || BB.isRewardedAd || "boolean" === typeof BB.isSelected ? null : JSON.stringify([BB.image, BB.cost, BB.currency, BB.amount, BB.customTitle, BB.buyButtonText, BB.description, BB.canBuy])
  },
  7532: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => YB,
      i: () => pB,
      j: () => JB
    });
    var VB = dB(24),
      yB = dB(7515);
    const pB = (BB, TB) => "OpenShop" === BB ? "shop" === TB : "OpenLobbyLeaderboard" !== BB || "leaderboard" === TB;
    let lB = !1;
    const JB = BB => {
        BB !== lB && (lB = BB, VB.h.yH(yB.c, (0, yB.h)()))
      },
      YB = () => ((BB, TB) => "shop" === BB && TB ? "shop" : "leaderboard")((0, yB.h)().leaderboardButton, lB)
  },
  8196: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => gB,
      f: () => oB
    });
    var VB = dB(62),
      yB = dB(1317),
      pB = dB(1764),
      lB = dB(1286),
      JB = dB(1299),
      YB = dB(980);
    const gB = () => {
        const BB = (0, lB.y)();
        if ((0, VB.useEffect)((() => {
            (0, lB.p)()
          }), []), !BB) return null;
        const {
          ControllerCategory: TB
        } = BB;
        return (0, YB.jsx)(JB.c, {
          children: (0, YB.jsx)(TB, {})
        })
      },
      oB = () => {
        var BB;
        const TB = (0, lB.y)(),
          [, dB] = (0, VB.useReducer)((BB => BB + 1), 0);
        return (0, yB.e)(pB.d, dB), null !== (BB = null === TB || void 0 === TB ? void 0 : TB.hasActivePad()) && void 0 !== BB && BB
      }
  },
  7525: (BB, TB, dB) => {
    dB.d(TB, {
      A: () => oB,
      B: () => YB,
      F: () => JB,
      G: () => NB,
      J: () => LB,
      K: () => OB,
      O: () => kB,
      S: () => iB,
      T: () => gB,
      V: () => EB,
      Y: () => zB,
      ab: () => mB,
      c: () => cB,
      cb: () => uB,
      fb: () => HB,
      g: () => PB,
      gb: () => DB,
      jb: () => vB,
      k: () => wB,
      nb: () => KB,
      o: () => lB,
      q: () => MB,
      rb: () => pB,
      s: () => fB,
      sb: () => tB,
      ub: () => SB,
      v: () => rB,
      w: () => IB,
      xb: () => sB
    });
    var VB = dB(7513),
      yB = dB(7500);
    const pB = {
        min: 25,
        max: 500,
        step: 5
      },
      lB = {
        min: 25,
        max: 100,
        step: 5
      },
      JB = {
        min: 0,
        max: .4,
        step: .01
      },
      YB = {
        min: 25,
        max: 300,
        step: 5
      },
      gB = {
        min: .5,
        max: 6,
        step: .1
      },
      oB = (BB, TB) => {
        if (!Number.isFinite(BB)) return TB.min;
        const dB = TB.min + Math.round((BB - TB.min) / TB.step) * TB.step,
          VB = Math.min(TB.max, Math.max(TB.min, dB));
        return Math.round(1e3 * VB) / 1e3
      },
      kB = BB => `${Math.round(BB)}%`,
      LB = BB => kB(100 * BB),
      OB = BB => `${BB.toFixed(1)}\xd7`,
      DB = [{
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
      uB = [{
        value: "exponential",
        labelKey: "controller:settingsCurveExponential"
      }, {
        value: "linear",
        labelKey: "controller:settingsCurveLinear"
      }, {
        value: "boost",
        labelKey: "controller:settingsCurveBoost"
      }],
      HB = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "focus",
        labelKey: "controller:settingsMenuNavFocus"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      EB = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "slot",
        labelKey: "controller:settingsInventoryNavSlot"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      vB = [{
        value: "wheel",
        labelKey: "controller:settingsQuickChatWheel"
      }, {
        value: "off",
        labelKey: "controller:settingsQuickChatOff"
      }],
      mB = [{
        value: "shop",
        labelKey: "controller:settingsLeaderboardButtonShop"
      }, {
        value: "leaderboard",
        labelKey: "controller:settingsLeaderboardButtonLeaderboard"
      }],
      iB = [{
        value: "always",
        labelKey: "controller:settingsGyroAlways"
      }, {
        value: "aiming",
        labelKey: "controller:settingsGyroWhileAiming"
      }, {
        value: "button",
        labelKey: "controller:settingsGyroWhileButton"
      }],
      NB = [{
        value: "tapHold",
        labelKey: "controller:settingsEmoteButtonTapHold"
      }, {
        value: "wheel",
        labelKey: "controller:settingsEmoteButtonWheel"
      }],
      tB = [{
        value: "toggle",
        labelKey: "controller:settingsSneakToggle"
      }, {
        value: "hold",
        labelKey: "controller:settingsSneakHold"
      }],
      fB = [{
        value: "default",
        labelKey: "controller:settingsButtonRepeatDefault"
      }, {
        value: "slow",
        labelKey: "controller:settingsButtonRepeatSlow"
      }, {
        value: "off",
        labelKey: "controller:settingsButtonRepeatOff"
      }],
      sB = [{
        value: "short",
        labelKey: "controller:settingsTapHoldShort"
      }, {
        value: "medium",
        labelKey: "controller:settingsTapHoldMedium"
      }, {
        value: "long",
        labelKey: "controller:settingsTapHoldLong"
      }],
      MB = [{
        value: "hold",
        labelKey: "controller:settingsAttackHold"
      }, {
        value: "toggle",
        labelKey: "controller:settingsAttackToggle"
      }],
      zB = {
        southpaw: "controller:settingsLayoutSouthpaw",
        triggersSwapped: "controller:settingsLayoutTriggersSwapped"
      },
      wB = {
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
        aE: "controller:settingsActionPickBlock",
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
      UB = {
        gameplay: "controller:settingsGroupGameplay",
        menu: "controller:settingsGroupMenus",
        inventory: "controller:settingsGroupInventory",
        keyboard: "controller:settingsGroupKeyboard"
      },
      FB = [{
        kind: "fixed",
        stick: "move",
        labelKey: "controller:settingsActionMove"
      }, {
        kind: "fixed",
        stick: "look",
        labelKey: "controller:settingsActionLook"
      }],
      KB = VB.b.map((BB => {
        let {
          group: TB,
          actions: dB
        } = BB;
        const VB = dB.map((BB => ({
          kind: "action",
          action: BB
        })));
        return {
          titleKey: UB[TB],
          rows: "gameplay" === TB ? [...FB, ...VB] : VB
        }
      })),
      rB = yB.W.filter((BB => "Home" !== BB)),
      IB = 1e4;
    class cB {
      constructor(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
        this.cancelButton = BB, this.openButton = TB, this.accepts = dB, this.startMs = null, this.ignoredUntilMs = new Map, this.cancelDownAtMs = null
      }
      update(BB, TB) {
        var dB;
        this.updateIgnored(BB, TB);
        const VB = TB - (null !== (dB = this.startMs) && void 0 !== dB ? dB : TB) >= 250;
        for (const yB of rB)
          if (yB !== this.cancelButton && VB && !this.ignoredUntilMs.has(yB) && BB.wasPressed(yB) && this.accepts(yB)) return {
            kind: "bind",
            button: yB
          };
        if (this.ignoredUntilMs.has(this.cancelButton)) return null;
        if (BB.wasPressed(this.cancelButton)) {
          if (!this.accepts(this.cancelButton)) return {
            kind: "cancel"
          };
          this.cancelDownAtMs = TB
        }
        return null === this.cancelDownAtMs ? null : BB.isHeld(this.cancelButton) && TB - this.cancelDownAtMs >= 700 ? (this.cancelDownAtMs = null, {
          kind: "bind",
          button: this.cancelButton
        }) : BB.wasReleased(this.cancelButton) ? (this.cancelDownAtMs = null, {
          kind: "cancel"
        }) : null
      }
      getBindHoldProgress(BB) {
        return null === this.cancelDownAtMs ? 0 : Math.min(1, (BB - this.cancelDownAtMs) / 700)
      }
      updateIgnored(BB, TB) {
        if (null === this.startMs) {
          this.startMs = TB;
          for (const TB of rB) BB.isDown(TB) && this.ignoredUntilMs.set(TB, 1 / 0);
          this.openButton && !this.ignoredUntilMs.has(this.openButton) && this.ignoredUntilMs.set(this.openButton, TB + 250)
        }
        for (const [dB, VB] of this.ignoredUntilMs) {
          const yB = BB.isDown(dB);
          VB === 1 / 0 ? yB || dB !== this.openButton ? yB || this.ignoredUntilMs.delete(dB) : this.ignoredUntilMs.set(dB, TB + 250) : TB >= VB ? this.ignoredUntilMs.delete(dB) : yB && this.ignoredUntilMs.set(dB, 1 / 0)
        }
      }
    }
    const SB = 6e3;
    class PB {
      constructor() {
        this.downAtMs = null, this.pressesAtMs = []
      }
      update(BB, TB) {
        let {
          pressed: dB,
          Dg: VB
        } = BB;
        if (dB) {
          const BB = this.pressesAtMs.at(-1);
          if (this.pressesAtMs = void 0 !== BB && TB - BB < 1500 ? [...this.pressesAtMs, TB] : [TB], this.pressesAtMs.length >= 3) return 1
        }
        return VB ? (this.downAtMs ??= TB, Math.min(1, (TB - this.downAtMs) / 1500)) : (this.downAtMs = null, 0)
      }
    }
  },
  4447: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => pB,
      c: () => lB
    });
    var VB = dB(62);
    const yB = new WeakMap,
      pB = BB => {
        var TB;
        const dB = BB.closest("[data-pad-slider]");
        return dB && null !== (TB = yB.get(dB)) && void 0 !== TB ? TB : null
      },
      lB = (BB, TB) => {
        const dB = (0, VB.useRef)(TB);
        dB.current = TB, (0, VB.useEffect)((() => {
          if (BB.current) return ((BB, TB) => (yB.set(BB, TB), () => {
            yB.get(BB) === TB && yB.delete(BB)
          }))(BB.current, {
            adjust: BB => {
              dB.current.adjust(BB)
            },
            setFraction: BB => {
              dB.current.setFraction(BB)
            },
            endDrag: () => {
              dB.current.endDrag()
            }
          })
        }), [BB])
      }
  },
  8023: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => pB,
      g: () => yB
    });
    var VB = dB(24);
    const yB = "localBlockBroken";

    function pB() {
      return {
        onPlayerChangeBlock(BB, TB, dB, pB, lB, JB) {
          "Air" === JB && VB.h.yH(yB)
        }
      }
    }
  },
  7571: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/A.926fb88933484dfbde14.svg"
  },
  7574: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/B.9f5ec099f78f84e44427.svg"
  },
  7577: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  7579: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  7587: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/LB.3a20b15927b55d5d8b60.svg"
  },
  7594: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  7596: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/LT.9fdc5e69011b9d41f50a.svg"
  },
  7602: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  7610: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  7616: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Menu.c903a662eb685211e52e.svg"
  },
  7624: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/RB.bba470ddb76ceec5d168.svg"
  },
  7628: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  7634: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/RT.e5a9fbcc3c79550111ca.svg"
  },
  7643: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  7649: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  7654: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  7661: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/View.0c9378b5d720a636d50d.svg"
  },
  7670: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/X.c9377519af94e6dce1d7.svg"
  },
  7678: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Y.62d8c17731dd2e172426.svg"
  },
  7687: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/A.958a6de9474f8d0c9caf.svg"
  },
  7689: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/B.d05958bfa88a1162b47a.svg"
  },
  7696: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Down.db68fb3980768eb54671.svg"
  },
  7705: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  7707: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/LB.37a3c5128c958ec2a0c2.svg"
  },
  7713: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/LS.15b0cc5bf3f2fe7bbd8b.svg"
  },
  7718: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/LT.5412ae5222c69f8c833f.svg"
  },
  7726: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Left.4457b2895ce94a5df32e.svg"
  },
  7735: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  7740: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Menu.1e8427f8133c9d456c53.svg"
  },
  7744: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/RB.c96c4aa2590209e930c7.svg"
  },
  7748: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/RS.8d70d147cf1ab136e845.svg"
  },
  7751: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/RT.1e4691bb5a7c049693df.svg"
  },
  7754: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Right.a1e101413040c540b879.svg"
  },
  7759: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  7767: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Up.7544a65ad4f611a55775.svg"
  },
  7773: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/View.003cae39de89cae0b9d8.svg"
  },
  7782: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/X.d88b6e62dd8fb4bda32a.svg"
  },
  7786: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Y.428d3e70775877892f82.svg"
  },
  7795: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  7801: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  7803: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  7808: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Home.ea8b009cfa9562aa644e.svg"
  },
  7814: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/LB.f283d355d22fc107d6d6.svg"
  },
  7817: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  7819: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/LT.13e66c122e7ee04bb876.svg"
  },
  7825: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  7830: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  7834: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Menu.90fc4e918900eb5062a0.svg"
  },
  7837: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/RB.918a7f16dc054d96b6f3.svg"
  },
  7841: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  7846: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/RT.a0523211130959598bed.svg"
  },
  7855: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  7860: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  7865: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  7874: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/View.0bc952e292c28c3baac2.svg"
  },
  7878: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  7887: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  },
  7891: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  7897: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  7901: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  7904: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Home.8898f76b20962fe52ab7.svg"
  },
  7907: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/LB.689ba3703ae248f2e4cc.svg"
  },
  7916: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  7920: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/LT.9c2d10d335ab5c590525.svg"
  },
  7924: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  7928: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  7935: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Menu.9e485791ea97009871ca.svg"
  },
  7939: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/RB.7ee5ce48dd551f993f80.svg"
  },
  7945: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  7949: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/RT.903ecadc55a9e9e00f07.svg"
  },
  7956: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  7958: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  7965: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  7971: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/View.3c5eeb34f0413bde4a65.svg"
  },
  7979: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  7987: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);