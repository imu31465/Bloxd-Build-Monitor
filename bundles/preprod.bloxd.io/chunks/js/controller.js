export const id = 28;
export const ids = [28];
export const modules = {
  7389: (yb, bb, Wy) => {
    var Uy = {
      "./nintendo/A.svg": 7398,
      "./nintendo/B.svg": 7402,
      "./nintendo/Down.svg": 7404,
      "./nintendo/Home.svg": 7407,
      "./nintendo/LB.svg": 7409,
      "./nintendo/LS.svg": 7414,
      "./nintendo/LT.svg": 7420,
      "./nintendo/Left.svg": 7424,
      "./nintendo/LeftStick.svg": 7427,
      "./nintendo/Menu.svg": 7436,
      "./nintendo/RB.svg": 7445,
      "./nintendo/RS.svg": 7452,
      "./nintendo/RT.svg": 7456,
      "./nintendo/Right.svg": 7464,
      "./nintendo/RightStick.svg": 7469,
      "./nintendo/Up.svg": 7473,
      "./nintendo/View.svg": 7476,
      "./nintendo/X.svg": 7483,
      "./nintendo/Y.svg": 7486,
      "./playstation/A.svg": 7489,
      "./playstation/B.svg": 7498,
      "./playstation/Down.svg": 7502,
      "./playstation/Home.svg": 7505,
      "./playstation/LB.svg": 7514,
      "./playstation/LS.svg": 7516,
      "./playstation/LT.svg": 7522,
      "./playstation/Left.svg": 7526,
      "./playstation/LeftStick.svg": 7532,
      "./playstation/Menu.svg": 7540,
      "./playstation/RB.svg": 7545,
      "./playstation/RS.svg": 7552,
      "./playstation/RT.svg": 7556,
      "./playstation/Right.svg": 7559,
      "./playstation/RightStick.svg": 7565,
      "./playstation/Up.svg": 7574,
      "./playstation/View.svg": 7580,
      "./playstation/X.svg": 7586,
      "./playstation/Y.svg": 7588,
      "./steamdeck/A.svg": 7595,
      "./steamdeck/B.svg": 7599,
      "./steamdeck/Down.svg": 7603,
      "./steamdeck/Home.svg": 7609,
      "./steamdeck/LB.svg": 7613,
      "./steamdeck/LS.svg": 7615,
      "./steamdeck/LT.svg": 7619,
      "./steamdeck/Left.svg": 7628,
      "./steamdeck/LeftStick.svg": 7637,
      "./steamdeck/Menu.svg": 7642,
      "./steamdeck/RB.svg": 7651,
      "./steamdeck/RS.svg": 7657,
      "./steamdeck/RT.svg": 7662,
      "./steamdeck/Right.svg": 7664,
      "./steamdeck/RightStick.svg": 7669,
      "./steamdeck/Up.svg": 7673,
      "./steamdeck/View.svg": 7680,
      "./steamdeck/X.svg": 7688,
      "./steamdeck/Y.svg": 7693,
      "./xbox/A.svg": 7695,
      "./xbox/B.svg": 7703,
      "./xbox/Down.svg": 7708,
      "./xbox/Home.svg": 7717,
      "./xbox/LB.svg": 7725,
      "./xbox/LS.svg": 7727,
      "./xbox/LT.svg": 7732,
      "./xbox/Left.svg": 7734,
      "./xbox/LeftStick.svg": 7742,
      "./xbox/Menu.svg": 7746,
      "./xbox/RB.svg": 7748,
      "./xbox/RS.svg": 7753,
      "./xbox/RT.svg": 7758,
      "./xbox/Right.svg": 7760,
      "./xbox/RightStick.svg": 7764,
      "./xbox/Up.svg": 7773,
      "./xbox/View.svg": 7775,
      "./xbox/X.svg": 7777,
      "./xbox/Y.svg": 7786
    };

    function hy(yb) {
      var bb = fy(yb);
      return Wy(bb)
    }

    function fy(yb) {
      if (!Wy.o(Uy, yb)) {
        var bb = new Error("Cannot find module '" + yb + "'");
        throw bb.code = "MODULE_NOT_FOUND", bb
      }
      return Uy[yb]
    }
    hy.keys = function() {
      return Object.keys(Uy)
    }, hy.resolve = fy, yb.exports = hy, hy.id = 7389
  },
  8011: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => vb,
      h: () => Ry
    });
    var Uy = Wy(1042),
      hy = Wy(55),
      fy = Wy(1620),
      Zy = Wy(1634),
      cb = Wy(898),
      Py = Wy.n(cb),
      oy = Wy(1273),
      By = Wy(19),
      Ky = Wy(94),
      ey = Wy(105),
      qb = Wy(4200),
      sy = Wy(2005),
      Sy = Wy(127),
      Ey = Wy(1636),
      ly = Wy(1645),
      mb = Wy(8017),
      Cy = Wy(248),
      Ty = Wy(952);
    const Vy = {
      floating: "settingsMenu:joystickFloating",
      fixed_shown: "settingsMenu:joystickFixed",
      fixed_hidden: "settingsMenu:joystickHidden"
    };
    var Jy = Wy(8026);
    const gb = [function() {
      const {
        t: yb
      } = (0, Uy.D)(), {
        joystickMode: bb,
        touchSpeedCurve: Wy,
        autorun: hy,
        jumpLock: fy
      } = (0, By.h)(["clientEscMenuOptions"]).clientEscMenuOptions;
      return (0, Ty.jsxs)(Ty.Fragment, {
        children: [(0, Ty.jsx)(qb.d, {
          label: yb("settingsMenu:joystick"),
          options: Cy.yb.map((bb => ({
            value: bb,
            label: yb(Vy[bb])
          }))),
          value: bb,
          onChange: yb => {
            By.d.setClientEscMenuOptions({
              joystickMode: yb
            })
          },
          circleInfoText: yb("settingsMenu:joystickInfo")
        }), (0, Ty.jsx)(qb.c, {
          label: yb("settingsMenu:preciseWalking"),
          checked: Wy,
          onClick: yb => {
            By.d.setClientEscMenuOptions({
              touchSpeedCurve: yb
            })
          },
          circleInfoText: yb("settingsMenu:preciseWalkingInfo")
        }), (0, Ty.jsx)(qb.c, {
          label: yb("settingsMenu:autoRun"),
          checked: hy,
          onClick: yb => {
            By.d.setClientEscMenuOptions({
              autorun: yb
            })
          },
          circleInfoText: yb("settingsMenu:autoRunInfo")
        }), (0, Ty.jsx)(qb.c, {
          label: yb("settingsMenu:jumpLock"),
          checked: fy,
          onClick: yb => {
            By.d.setClientEscMenuOptions({
              jumpLock: yb
            })
          },
          circleInfoText: yb("settingsMenu:jumpLockInfo")
        })]
      })
    }, function() {
      const {
        t: yb
      } = (0, Uy.D)(), {
        clientEscMenuOptions: bb
      } = (0, By.h)(["clientEscMenuOptions"]);
      return (0, Ty.jsx)(qb.c, {
        label: yb("touchSettings:actionButtons"),
        checked: bb.touchActionButtons,
        onClick: yb => {
          By.d.setClientEscMenuOptions({
            touchActionButtons: yb
          })
        },
        circleInfoText: yb("touchSettings:actionButtonsInfo")
      })
    }, function() {
      const {
        t: yb
      } = (0, Uy.D)(), {
        clientEscMenuOptions: bb
      } = (0, By.h)(["clientEscMenuOptions"]);
      return (0, Jy.d)() ? (0, Ty.jsx)(qb.c, {
        label: yb("settingsMenu:vibration"),
        checked: bb.vibration,
        onClick: yb => {
          By.d.setClientEscMenuOptions({
            vibration: yb
          })
        },
        circleInfoText: yb("settingsMenu:vibrationInfo")
      }) : null
    }];

    function Gy() {
      return (0, Ty.jsx)(Ty.Fragment, {
        children: gb.map(((yb, bb) => (0, Ty.jsx)(yb, {}, bb)))
      })
    }
    var Oy = Wy(3637);

    function Ry() {
      const {
        t: yb
      } = (0, Uy.D)(), {
        isTouchScreen: bb,
        clientEscMenuOptions: Wy,
        gameState: Zy
      } = (0, By.h)(["isTouchScreen", "clientEscMenuOptions", "gameState"]), cb = (0, sy.k)("ezBridging"), Py = (0, sy.k)("ezTowering"), Ey = "inGame" !== Zy || !0 === cb, ly = (0, Sy.h)() && ("inGame" !== Zy || !0 === Py), [, Cy] = (0, hy.useReducer)((yb => yb + 1), 0), Vy = (0, mb.d)(), [Jy, gb] = (0, hy.useState)(Oy.h);
      return (0, Ty.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [Vy && (0, Ty.jsxs)("div", {
          className: "SettingBox ControlsControllerNote",
          children: [(0, Ty.jsx)("div", {
            children: yb("controller:settingsControlsNote")
          }), (0, Ty.jsx)(oy.M, {
            onClick: () => {
              By.d.set({
                openSettingsCategory: "controller"
              })
            },
            children: yb("controller:settingsOpenController")
          })]
        }), (0, Ky.isTouchscreen)() && !(0, Ky.isMobile)() ? (0, Ty.jsx)(Ty.Fragment, {
          children: (0, Ty.jsx)(qb.c, {
            label: yb("settingsMenu:useTouchControls"),
            checked: Jy,
            onClick: yb => {
              (0, Oy.d)(yb), gb(yb)
            }
          })
        }) : null, bb && (0, Ty.jsx)(Gy, {}), Ey && (0, Ty.jsx)(qb.c, {
          label: yb("settingsMenu:ezBridging"),
          checked: Wy.ezBridging,
          onClick: yb => {
            By.d.setClientEscMenuOptions({
              ezBridging: yb
            })
          },
          circleInfoText: yb("settingsMenu:ezBridgingInfo")
        }), ly && (0, Ty.jsx)(qb.c, {
          label: yb("settingsMenu:ezTowering"),
          checked: Wy.ezTowering,
          onClick: yb => {
            By.d.setClientEscMenuOptions({
              ezTowering: yb
            })
          },
          circleInfoText: yb("settingsMenu:ezToweringInfo")
        }), (0, Ty.jsx)(qb.c, {
          label: yb("settingsMenu:crouchToggle"),
          checked: Wy.crouchIsToggle,
          onClick: yb => {
            By.d.setClientEscMenuOptions({
              crouchIsToggle: yb
            })
          },
          circleInfoText: yb("settingsMenu:crouchToggleInfo")
        }), (0, Ty.jsx)(qb.c, {
          label: yb("settingsMenu:hideUiToggle"),
          checked: Wy.hideUiIsToggle,
          onClick: yb => {
            By.d.setClientEscMenuOptions({
              hideUiIsToggle: yb
            })
          },
          circleInfoText: yb("settingsMenu:hideUiToggleInfo")
        }), "mouseOnly" !== (0, ey.b)() && (0, Ty.jsx)(qb.f, {
          name: yb("settingsMenu:touchscreenSensitivity"),
          min: 1,
          max: 900,
          step: 1,
          initValue: Wy.touchscreenSensitivity,
          onChange: yb => {
            By.d.setClientEscMenuOptions({
              touchscreenSensitivity: yb
            })
          }
        }), !(0, Ky.isMobile)() && (0, Ty.jsx)(qb.f, {
          name: yb("settingsMenu:mouseSensitivity"),
          min: 1,
          max: 200,
          step: 1,
          initValue: Wy.mouseSensitivity,
          onChange: yb => {
            By.d.setClientEscMenuOptions({
              mouseSensitivity: yb
            })
          }
        }), !(0, Ky.isMobile)() && (0, Ty.jsxs)("div", {
          className: "ControlsContainer",
          children: [(0, Ty.jsx)("div", {
            className: "SliderText",
            children: yb("settingsMenu:keyBindings")
          }), fy.f.map((bb => (0, Ty.jsx)(vb, {
            title: yb(bb.name.translationKey, bb.name.params),
            defaultOpen: fy.g.has(bb.id),
            children: bb.actions.map((yb => (0, Ty.jsx)(ib, {
              noaAction: yb,
              forceUpdate: Cy,
              clashesWith: bb.clashesWith,
              showPadGlyph: Vy
            }, yb)))
          }, bb.name.translationKey))), (0, Ty.jsx)(oy.C, {
            className: "ResetBindingsButton",
            onClick: () => {
              (0, fy.I)(), Cy()
            },
            children: yb("controls:resetBindings")
          })]
        })]
      })
    }

    function vb(yb) {
      let {
        title: bb,
        defaultOpen: Wy,
        children: Uy
      } = yb;
      const [fy, Zy] = (0, hy.useState)(Wy);
      return (0, Ty.jsxs)("div", {
        className: Py()("ControlsSection", {
          Collapsed: !fy
        }),
        children: [(0, Ty.jsxs)("div", {
          className: "ControlsSectionHeader",
          "data-pad-focusable": !0,
          onClick: () => {
            Zy(!fy)
          },
          children: [(0, Ty.jsx)("div", {
            className: "ControlsSectionTitle",
            children: bb
          }), (0, Ty.jsx)("div", {
            className: "ControlsSectionChevron",
            children: "\u25be"
          })]
        }), fy && (0, Ty.jsx)("div", {
          className: "ControlsSectionRows",
          children: Uy
        })]
      })
    }

    function ib(yb) {
      let {
        noaAction: bb,
        forceUpdate: Wy,
        clashesWith: cb,
        showPadGlyph: By
      } = yb;
      const {
        t: Ky
      } = (0, Uy.D)(), ey = (0, ly.d)(bb), [qb, sy] = (0, hy.useState)(!1), [Sy, mb] = (0, hy.useState)("controls:clickToEnterNewBinding"), [Cy, Vy] = (0, hy.useState)(null), [Jy, gb] = (0, hy.useState)(null), Gy = (0, hy.useRef)(null);
      (0, hy.useEffect)((() => {
        qb && Gy.current && Gy.current.focus()
      }), [qb]);
      const Oy = fy.w[bb].filter((yb => Zy.h[yb]));
      let Ry = null;
      const vb = [],
        ib = cb.flatMap((yb => {
          var bb, Wy;
          return null !== (bb = null === (Wy = fy.f.find((bb => bb.id === yb))) || void 0 === Wy ? void 0 : Wy.actions) && void 0 !== bb ? bb : []
        }));
      for (const Uy of ib) {
        if (Uy === bb) continue;
        const yb = fy.w[Uy];
        for (const bb of yb) Oy.includes(bb) && vb.push(Ky(fy.z[Uy].translationKey, fy.z[Uy].params))
      }
      vb.length > 0 && (Ry = Ky("controls:sharedBindingsWarning") + " ", Ry += vb.join(", "));
      const My = () => {
          sy(!1), Vy(null), mb("controls:clickToEnterNewBinding"), gb(null)
        },
        Yy = () => "BindingInput_" + bb;
      return (0, Ty.jsxs)("div", {
        className: Py()("ControlRow", {
          WarningBorder: null !== Ry
        }),
        children: [(0, Ty.jsxs)("div", {
          className: "ControlRowInner",
          children: [(0, Ty.jsxs)("div", {
            className: "ControlName",
            children: [Ky(fy.z[bb].translationKey, fy.z[bb].params), By && ey && (0, Ty.jsx)(Ey.d, {
              glyph: ey,
              className: "ControlPadGlyph"
            })]
          }), (0, Ty.jsxs)("div", {
            className: "ControlBindingsContainer",
            children: [(0, Ty.jsxs)("div", {
              className: "ControlBindingsList",
              children: [Oy.map((yb => (0, Ty.jsxs)("div", {
                className: "ControlBinding",
                children: [(0, Ty.jsx)("div", {
                  children: (0, fy.o)(yb)
                }), (0, Ty.jsx)("div", {
                  className: "ControlBindingRemoveIcon",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    const Uy = (0, fy.D)(bb, yb);
                    Uy.isError() ? gb(Uy.asError().message) : gb(null), Wy()
                  },
                  children: "\xd7"
                })]
              }, yb))), !qb && (0, Ty.jsx)("div", {
                className: "ControlBinding ControlBindingAdd",
                onClick: () => {
                  sy(!0), gb(null)
                },
                children: (0, Ty.jsx)("div", {
                  className: "ControlBindingAddIcon",
                  children: "+"
                })
              })]
            }), qb && (0, Ty.jsxs)("div", {
              className: "ControlBindingAddInput",
              children: [(0, Ty.jsxs)("div", {
                className: "InputContainer",
                children: [(0, Ty.jsx)("div", {
                  className: "InputOverlay",
                  children: Cy ? (0, fy.o)(Cy) : (0, Ty.jsx)("div", {
                    className: "InputOverlayPlaceholder",
                    children: Ky(Sy)
                  })
                }), (0, Ty.jsx)("input", {
                  ref: Gy,
                  id: Yy(),
                  "data-pad-no-osk": !0,
                  defaultValue: "",
                  onKeyDown: yb => {
                    if ("Escape" === yb.code) return My(), yb.preventDefault(), void yb.stopPropagation();
                    const bb = yb.code;
                    Zy.c.includes(bb) ? (gb(null), Vy(bb)) : (gb("controls:keyIsReserved"), Vy(null)), yb.preventDefault(), yb.stopPropagation()
                  },
                  onMouseDown: yb => {
                    const bb = "Mouse" + (yb.button + 1);
                    document.activeElement && document.activeElement.id === Yy() ? Zy.c.includes(bb) ? (gb(null), Vy(bb)) : (gb("controls:keyIsReserved"), Vy(null)) : mb("controls:enterNewBinding"), yb.stopPropagation()
                  },
                  onBlur: () => {
                    mb("controls:clickToEnterNewBinding")
                  }
                })]
              }), (0, Ty.jsx)(oy.f, {
                onPointerDown: yb => {
                  yb.preventDefault()
                },
                onClick: () => {
                  (0, fy.e)(bb, Cy), Wy(), My()
                },
                className: "ControlBindingAddButton",
                disabled: null === Cy,
                children: Ky("general:add")
              }), (0, Ty.jsx)("div", {
                className: "ControlBindingAddCancel",
                onClick: () => {
                  My()
                },
                children: "\xd7"
              })]
            }), Jy && (0, Ty.jsx)("div", {
              className: "ControlBindingError",
              children: Ky(Jy)
            })]
          })]
        }), Ry && (0, Ty.jsx)("div", {
          className: "ControlRowWarning",
          children: Ry
        })]
      })
    }
  },
  4200: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => sy,
      d: () => mb,
      f: () => Sy,
      g: () => ly
    });
    var Uy = Wy(55),
      hy = Wy(4207),
      fy = Wy(3630),
      Zy = Wy(1217),
      cb = Wy(4222),
      Py = Wy(898),
      oy = Wy.n(Py),
      By = Wy(1207),
      Ky = Wy(1496),
      ey = Wy(4229),
      qb = Wy(952);

    function sy(yb) {
      let {
        label: bb,
        onClick: Wy,
        checked: Uy,
        circleInfoText: hy,
        className: cb,
        disabled: Py
      } = yb;
      return (0, qb.jsx)("div", {
        "aria-disabled": Py || void 0,
        "data-pad-focusable": !0,
        className: oy()("SettingBox CheckboxContainer", {
          [cb]: cb,
          SettingBoxDisabled: Py
        }),
        onClick: () => {
          Py || Wy(!Uy)
        },
        children: (0, qb.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, qb.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, qb.jsx)(fy.c, {
              className: "SettingsCheckbox",
              checked: Uy,
              disabled: Py,
              onChange: () => {}
            })
          }), (0, qb.jsxs)("div", {
            className: "CheckboxText",
            children: [bb, hy && (0, qb.jsx)("span", {
              onClick: yb => yb.stopPropagation(),
              children: (0, qb.jsx)(Zy.c, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: hy
              })
            })]
          })]
        })
      })
    }

    function Sy(yb) {
      let {
        name: bb,
        onChange: Wy,
        min: hy,
        max: fy,
        step: cb,
        initValue: Py,
        circleInfoText: By,
        format: Ky,
        className: ey,
        padStep: sy,
        disabled: Sy = !1,
        selectableMax: ly,
        cappedNote: mb
      } = yb;
      const [Cy, Ty] = (0, Uy.useState)(Py);
      (0, Uy.useEffect)((() => {
        Ty(Py)
      }), [Py]);
      const Vy = void 0 !== ly && ly < fy,
        Jy = Vy ? {
          "--slider-selectable": (ly - hy) / (fy - hy)
        } : void 0;
      return (0, qb.jsxs)("div", {
        className: oy()("SettingBox SettingsSliderDiv", {
          [ey]: ey,
          SettingBoxDisabled: Sy,
          SliderCapped: Vy
        }),
        style: Jy,
        children: [(0, qb.jsxs)("div", {
          className: "SliderText",
          children: [`${bb}: ${Ky?Ky(Cy):Cy}`, By && (0, qb.jsx)(Zy.c, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: By
          })]
        }), (0, qb.jsx)("div", {
          className: "SliderDiv",
          children: (0, qb.jsx)(Ey, {
            value: Cy,
            min: hy,
            max: fy,
            step: cb,
            onChange: yb => {
              if (Vy && yb >= ly && Cy === ly) return;
              const bb = Vy ? Math.min(yb, ly) : yb;
              Ty(bb), Wy(bb)
            },
            format: Ky,
            padStep: sy,
            disabled: Sy
          })
        }), Vy && mb && (0, qb.jsx)("div", {
          className: "SliderNote",
          children: mb
        })]
      })
    }

    function Ey(yb) {
      var bb;
      let {
        value: Wy,
        min: fy,
        max: Zy,
        step: cb,
        onChange: Py,
        orientation: oy,
        reverse: By,
        setIsChanging: Ky,
        tooltip: sy,
        labels: Sy,
        handleLabel: Ey,
        format: ly,
        onChangeStart: mb,
        onChangeComplete: Cy,
        padStep: Ty,
        disabled: Vy = !1
      } = yb;
      const Jy = (0, Uy.useRef)(null),
        gb = (0, Uy.useRef)(null);
      (0, Uy.useLayoutEffect)((() => {
        var yb, bb, Wy;
        const Uy = null !== (yb = null === (bb = Jy.current) || void 0 === bb ? void 0 : bb.querySelector(".rangeslider")) && void 0 !== yb ? yb : null;
        null === Uy || void 0 === Uy || Uy.setAttribute("data-pad-slider", ""), null === Uy || void 0 === Uy || Uy.setAttribute("data-pad-focusable", ""), null === Uy || void 0 === Uy || null === (Wy = Uy.querySelector(".rangeslider__handle")) || void 0 === Wy || Wy.setAttribute("data-pad-slider-handle", ""), gb.current = Uy
      }), []), (0, Uy.useLayoutEffect)((() => {
        var yb, bb;
        Vy ? null === (yb = gb.current) || void 0 === yb || yb.setAttribute("aria-disabled", "true") : null === (bb = gb.current) || void 0 === bb || bb.removeAttribute("aria-disabled")
      }), [Vy]);
      const Gy = (null !== (bb = String(cb).split(".")[1]) && void 0 !== bb ? bb : "").length,
        Oy = yb => {
          const bb = Number((Math.round((yb - fy) / cb) * cb + fy).toFixed(Gy));
          return Math.min(Zy, Math.max(fy, bb))
        },
        Ry = (0, Uy.useRef)(!1);
      return (0, ey.h)(gb, {
        adjust: yb => {
          if (Vy) return;
          const bb = null !== Ty && void 0 !== Ty ? Ty : Math.max(cb, Math.round((Zy - fy) / 20 / cb) * cb),
            Uy = Oy(Wy + yb * bb * (By ? -1 : 1));
          Uy !== Wy && (null === mb || void 0 === mb || mb(), Py(Uy), null === Cy || void 0 === Cy || Cy())
        },
        setFraction: yb => {
          if (Vy) return;
          const bb = Oy(fy + (By ? 1 - yb : yb) * (Zy - fy));
          bb !== Wy && (Ry.current || (Ry.current = !0, null === mb || void 0 === mb || mb()), Py(bb))
        },
        endDrag: () => {
          Ry.current && (Ry.current = !1, null === Cy || void 0 === Cy || Cy())
        }
      }), (0, qb.jsx)("div", {
        ref: Jy,
        style: {
          display: "contents"
        },
        children: (0, qb.jsx)(hy.b, {
          value: Wy,
          min: fy,
          max: Zy,
          step: cb,
          onChange: Py,
          orientation: oy,
          reverse: By,
          tooltip: sy,
          labels: Sy,
          handleLabel: Ey,
          format: ly,
          onChangeStart: () => {
            null === mb || void 0 === mb || mb(), null === Ky || void 0 === Ky || Ky(!0)
          },
          onChangeComplete: () => {
            null === Ky || void 0 === Ky || Ky(!1), null === Cy || void 0 === Cy || Cy()
          }
        })
      })
    }
    async function ly() {
      let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
      const bb = By.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: "",
        unlockPointerKey: yb
      });
      !0 === await bb.getResult() && (0, Ky.reloadBloxd)()
    }

    function mb(yb) {
      let {
        label: bb,
        options: Wy,
        value: Uy,
        onChange: hy,
        circleInfoText: fy
      } = yb;
      return (0, qb.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, qb.jsxs)("div", {
          className: "SliderText",
          children: [bb, fy && (0, qb.jsx)(Zy.c, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: fy
          })]
        }), (0, qb.jsx)(cb.c, {
          ariaLabel: bb,
          options: Wy,
          value: Uy,
          onChange: hy
        })]
      })
    }
  },
  4222: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => Zy
    });
    var Uy = Wy(898),
      hy = Wy.n(Uy),
      fy = Wy(952);

    function Zy(yb) {
      let {
        options: bb,
        value: Wy,
        onChange: Uy,
        ariaLabel: Zy
      } = yb;
      return (0, fy.jsx)("div", {
        className: "SegmentedToggle",
        role: "group",
        "aria-label": Zy,
        children: bb.map((yb => {
          const bb = yb.value === Wy;
          return (0, fy.jsx)("button", {
            type: "button",
            "aria-pressed": bb,
            className: hy()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: bb
            }),
            onClick: () => {
              bb || Uy(yb.value)
            },
            children: yb.label
          }, yb.value)
        }))
      })
    }
  },
  7339: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => hy,
      g: () => fy,
      j: () => ey,
      k: () => Ky,
      o: () => oy,
      r: () => cb,
      t: () => Uy,
      u: () => qb,
      v: () => sy
    });
    const Uy = ["menuConfirm", "menuBack", "menuTabPrevious", "menuTabNext", "menuPageUp", "menuPageDown", "menuSecondary", "menuToggleCursor"],
      hy = [{
        group: "gameplay",
        actions: ["jump", "sneak", "sneakToggle", "sprint", "attack", "use", "hotbarPrevious", "hotbarNext", "inventory", "actionButton", "perspective", "Fq", "drop", "emoteWheel", "chat", "pause", "leaderboard"]
      }, {
        group: "menu",
        actions: Uy
      }, {
        group: "inventory",
        actions: ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryClose", "inventoryPanelPrevious", "inventoryPanelNext", "inventoryDrop", "inventoryHotbarSwap"]
      }, {
        group: "keyboard",
        actions: ["keyboardType", "keyboardBackspace", "keyboardSpace", "keyboardCaretLeft", "keyboardCaretRight", "keyboardShift", "keyboardSymbols", "keyboardSubmit", "keyboardClose", "keyboardChannel"]
      }],
      fy = {
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
        Fq: "Up",
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
      Zy = ["Fq", "perspective"],
      cb = yb => Zy.includes(yb) ? Zy : [yb],
      Py = Object.fromEntries(hy.flatMap((yb => {
        let {
          group: bb,
          actions: Wy
        } = yb;
        return Wy.map((yb => [yb, bb]))
      }))),
      oy = yb => Py[yb],
      By = {
        pause: ["menu"],
        leaderboard: ["menu"],
        inventory: ["menu"],
        menuPageUp: ["inventory"],
        menuPageDown: ["inventory"]
      },
      Ky = yb => {
        var bb;
        return [oy(yb), ...null !== (bb = By[yb]) && void 0 !== bb ? bb : []]
      },
      ey = new Set(["menu", "inventory", "keyboard"]),
      qb = {
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
        "mid-fire": "Fq",
        OpenInventory: "inventory",
        OpenSettings: "pause",
        OpenLobbyLeaderboard: "leaderboard",
        OpenShop: "leaderboard",
        OpenEmoteWheel: "emoteWheel"
      },
      sy = new Set(["forward", "backward", "left", "right"])
  },
  7335: (yb, bb, Wy) => {
    Wy.d(bb, {
      B: () => By,
      C: () => Oy,
      F: () => My,
      b: () => mb,
      d: () => Vy,
      e: () => ey,
      h: () => qb,
      l: () => Xy,
      m: () => ib,
      o: () => vb,
      p: () => Ty,
      s: () => Yy,
      t: () => Gy,
      w: () => Cy,
      x: () => Ry
    });
    var Uy = Wy(7339),
      hy = Wy(7345),
      fy = Wy(7326),
      Zy = Wy(7361);
    const cb = yb => "Fq" === yb ? "perspective" : yb,
      Py = (yb, bb) => {
        var Wy;
        const hy = cb(bb);
        return null !== (Wy = yb[hy]) && void 0 !== Wy ? Wy : Uy.g[hy]
      },
      oy = new Map([
        ["menuConfirm", "menuBack"],
        ["inventoryPrimary", "inventoryClose"],
        ["keyboardType", "keyboardClose"]
      ].flatMap((yb => {
        let [bb, Wy] = yb;
        return [
          [bb, Wy],
          [Wy, bb]
        ]
      }))),
      By = (yb, bb) => null !== yb && void 0 !== yb ? yb : "nintendo" === bb,
      Ky = yb => By((0, hy.g)().swapConfirmBack, (0, hy.i)()) && oy.get(yb) || yb,
      ey = yb => Py((0, hy.g)().sU, Ky(yb)),
      qb = yb => Uy.g[Ky(yb)],
      sy = Object.keys(Uy.g),
      Sy = yb => "gameplay" === (0, Uy.o)(yb) ? ["gameplay"] : (0, Uy.k)(yb),
      Ey = (yb, bb) => {
        const Wy = Sy(bb);
        return Sy(yb).some((yb => Wy.includes(yb)))
      },
      ly = (yb, bb, Wy) => {
        const hy = Py(yb, bb),
          Zy = new Set((0, Uy.r)(bb)),
          oy = [...Zy];
        for (let Uy = oy.pop(); Uy; Uy = oy.pop())
          for (const bb of sy) {
            const fy = Py(yb, bb);
            Zy.has(bb) || fy !== Wy && fy !== hy || !Ey(Uy, bb) || (Zy.add(bb), oy.push(bb))
          }
        const By = {
          ...yb
        };
        for (const Ky of Zy) {
          const bb = Py(yb, Ky) === hy ? Wy : hy,
            Zy = (0, Uy.k)(Ky).some((yb => Uy.j.has(yb)));
          if ((0, fy.J)(bb) && Zy) return null;
          By[cb(Ky)] = bb
        }
        for (const fy of Object.keys(By)) By[fy] === Uy.g[fy] && delete By[fy];
        return By
      },
      mb = (yb, bb) => null !== ly((0, hy.g)().sU, Ky(yb), bb),
      Cy = (yb, bb) => {
        if (ey(yb) === bb) return !0;
        const Wy = ly((0, hy.g)().sU, Ky(yb), bb);
        return !!Wy && ((0, hy.k)({
          sU: Wy
        }), !0)
      },
      Ty = (yb, bb) => {
        const Wy = (0, Uy.r)(bb);
        return sy.filter((bb => cb(bb) === bb && !Wy.includes(bb) && Py(yb, Ky(bb)) !== ey(bb)))
      },
      Vy = ["southpaw", "triggersSwapped"],
      Jy = {
        southpaw: {
          sprint: "RS",
          sneakToggle: "LS"
        },
        triggersSwapped: {
          attack: "LT",
          use: "RT"
        }
      },
      gb = yb => Object.keys(Jy[yb]),
      Gy = (yb, bb) => "southpaw" === yb ? bb.swapSticks : gb(yb).every((Wy => Py(bb.sU, Wy) === Jy[yb][Wy])),
      Oy = (yb, bb) => {
        const Wy = (0, hy.g)();
        let fy = Wy.sU;
        for (const hy of gb(yb)) {
          const Wy = bb ? Jy[yb][hy] : Uy.g[hy];
          if (fy = ly(fy, hy, Wy), !fy) return !1
        }
        return (0, hy.k)({
          swapSticks: "southpaw" === yb ? bb : Wy.swapSticks,
          sU: fy
        }), !0
      },
      Ry = () => {
        (0, hy.k)({
          swapSticks: !1,
          sU: {}
        })
      },
      vb = () => (0, hy.g)().swapSticks ? "RightStick" : "LeftStick",
      ib = () => (0, hy.g)().swapSticks ? "LeftStick" : "RightStick",
      My = yb => (0, hy.g)().swapSticks && (0, fy.J)(yb),
      Yy = yb => My(yb) ? vb() : ib(),
      Xy = yb => {
        if (Uy.v.has(yb)) return vb();
        const bb = Uy.u[yb];
        return bb && ("leaderboard" !== bb || (0, Zy.f)(yb, (0, Zy.d)())) ? ey(bb) : null
      }
  },
  7313: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      ControllerCategory: () => oP,
      ControllerGlyph: () => TU,
      ControllerRoot: () => oc,
      PadLobbyShortcuts: () => Oc,
      PadSneakChip: () => Ec,
      PadTooltip: () => mP,
      attachPressToContinue: () => uc,
      getBoundButton: () => By.e,
      getControllerSettings: () => ey.g,
      getGlyphForNoaAction: () => By.l,
      getInventoryCursorState: () => KP,
      getMenuShortcutButton: () => kf,
      getPadGlyphIconName: () => qP,
      getPadGlyphIconUrl: () => sc,
      getPadRepeatTiming: () => Sy.d,
      hasActivePad: () => BP,
      isPadSteppingSlots: () => eP
    });
    const Uy = JSON.parse('{"controller":{"inventoryTake":"Take","inventoryTakeHalf":"Take half","inventoryPlace":"Place","inventoryPlaceOne":"Place one","inventoryQuickMove":"Quick move","inventoryToHotbar":"To hotbar","inventoryPutBack":"Put back","inventoryHotbarSwap":"Swap with hotbar","inventorySwapHere":"Swap here","inventoryCancel":"Cancel","inventoryClose":"Close","inventoryDrop":"Drop (hold: stack)","inventorySelect":"Select","inventoryCraft":"Craft (hold to repeat)","inventoryCraftAll":"Craft all","inventoryChooseRecipe":"Choose","inventoryBackToRecipes":"Back to recipes","inventoryType":"Type","inventoryPanels":"Switch panel","inventoryCategory":"Category","inventoryPage":"Page","disconnected":"Controller disconnected","gameplayReload":"Reload","gameplayActionWheelHint":"(hold for more)","gameplaySneaking":"Sneaking","gameplayLoadFailedTitle":"Controller unavailable","gameplayLoadFailedSubtitle":"Reload the page to play with your controller.","gameplayDropStack":"Keep holding to drop the stack","gameplayAttackLatched":"Attacking","gameplayPickBlock":"Pick block","padButtonView":"View","padButtonMenu":"Menu","padButtonHome":"Home","padButtonCreate":"Create","padButtonOptions":"Options","padButtonDpadUp":"D-pad \u2191","padButtonDpadDown":"D-pad \u2193","padButtonDpadLeft":"D-pad \u2190","padButtonDpadRight":"D-pad \u2192","padButtonLeftStick":"L Stick","padButtonRightStick":"R Stick","settingsLook":"Look","settingsLookSensitivityX":"Look sensitivity (horizontal)","settingsLookSensitivityY":"Look sensitivity (vertical)","settingsAimLookSensitivity":"Look sensitivity while aiming (use held)","settingsInvertLookX":"Invert horizontal look","settingsInvertLookY":"Invert vertical look","settingsLookCurve":"Look curve","settingsLookCurveHint":"Steep gives finer aim near the centre, Linear turns at an even rate, and Boost turns faster when you hold the stick all the way.","settingsCurveExponential":"Steep","settingsCurveLinear":"Linear","settingsCurveBoost":"Boost","settingsLookDeadzone":"Look deadzone","settingsGyro":"Gyro aiming","settingsGyroToggle":"Aim by moving the controller","settingsGyroToggleInfo":"Turn and tilt the controller to aim, on top of the right stick.","settingsGyroTogglePhone":"Aim by moving your phone or tablet","settingsGyroToggleInfoPhone":"Turn and tilt your phone or tablet to aim, on top of the right stick.","settingsGyroUnsupported":"Gyro aiming needs Chrome or Edge.","settingsGyroBlocked":"Gyro aiming isn\'t available on this site.","settingsGyroPhoneNeedsController":"Connect a controller to aim by moving your phone or tablet.","settingsGyroSteamHint":"If Steam already turns your gyro into mouse movement, leave this off.","settingsGyroConnect":"Connect motion controller","settingsGyroConnectHint":"Works with DualSense, DualShock 4 and Switch controllers.","settingsGyroConnectNeedsClick":"Click Connect with your mouse: the browser asks before sharing a controller.","settingsGyroOpenFailed":"Another app is using the controller. Close apps such as Steam or DS4Windows, then try again.","settingsGyroConnected":"Aiming with {{name}}.","settingsGyroAllowMotion":"Allow motion sensor","settingsGyroAllowNeedsTap":"Tap Allow motion sensor on your screen to turn it on.","settingsGyroPhoneOn":"Aiming with this device\'s motion sensor.","settingsGyroPhoneWaiting":"Waiting for this device\'s motion sensor\u2026","settingsGyroPhoneNoSensor":"No motion sensor found on this device.","settingsGyroPhoneDenied":"Motion access is blocked. Allow it in your browser settings.","settingsGyroSensitivity":"Gyro sensitivity","settingsGyroActivation":"Gyro turns on","settingsGyroAlways":"Always","settingsGyroWhileAiming":"While aiming","settingsGyroWhileButton":"While holding a button","settingsGyroAimingHint":"Hold {{button}} to aim with motion.","settingsGyroButton":"Gyro button","settingsGyroButtonHint":"While gyro aiming is on, this button only turns the gyro on in game, so pick one you rarely use.","settingsMovement":"Movement","settingsMoveDeadzone":"Move deadzone","settingsAutoSprint":"Sprint at full tilt","settingsAutoSprintInfo":"Push the movement stick all the way to sprint.","settingsSneak":"Sneak","settingsSneakHold":"Hold","settingsSneakToggle":"Toggle","settingsButtons":"Buttons","settingsPromptFamily":"Button prompts","settingsPromptAuto":"Match my controller","settingsPromptXbox":"Xbox","settingsPromptPlayStation":"PlayStation","settingsPromptNintendo":"Nintendo","settingsPromptSteamDeck":"Steam Deck","settingsPromptGeneric":"Generic","settingsHideButtonHints":"Hide button hints","settingsVibration":"Vibration","settingsCursorSpeed":"Virtual cursor speed","settingsCursorMagnetism":"Cursor snaps onto buttons","settingsMenuBackToCategories":"Back returns to the category list first","settingsAccessibility":"Accessibility","settingsSwapConfirmBack":"Swap confirm and back","settingsSwapToast":"Select and Back have swapped buttons.","settingsLayoutRefusedToast":"This layout doesn\'t fit your current buttons. Reset them to use it.","settingsSwapConfirmBackInfo":"Select with the right face button and go back with the bottom one, in menus, the inventory and the on-screen keyboard. On by default for Nintendo controllers.","settingsButtonRepeat":"Button repeat","settingsButtonRepeatHint":"How a held button repeats in menus, sliders, the on-screen keyboard and crafting. Off acts once per press, and holding drop in game drops just one item.","settingsButtonRepeatDefault":"Default","settingsButtonRepeatSlow":"Slow (0.8 s, then 4 a second)","settingsButtonRepeatOff":"Off (once per press)","settingsTapHoldTime":"Tap/hold time","settingsTapHoldTimeHint":"How long to hold the chat, emote or action button to open its wheel, or the view button to change view where a tap picks a block. Dropping a whole stack takes 0.8, 1 or 1.3 s.","settingsTapHoldShort":"Short (0.25 s)","settingsTapHoldMedium":"Medium (0.5 s)","settingsTapHoldLong":"Long (0.8 s)","settingsEmoteButton":"Emote button","settingsEmoteButtonTapHoldHint":"Tap to repeat your last emote, or hold to open the emote wheel.","settingsEmoteButtonWheelHint":"Any press opens the emote wheel, with no hold to time. Pick with the stick, then select.","settingsEmoteButtonTapHold":"Tap repeats, hold opens wheel","settingsEmoteButtonWheel":"Opens the wheel","settingsAttackMode":"Attack / mine","settingsAttackHoldHint":"Hold attack to keep attacking or mining.","settingsAttackToggleHint":"Press attack once to keep attacking or mining, and again to stop.","settingsAttackHold":"Hold","settingsAttackToggle":"Toggle","settingsLargePointer":"Large pointer and focus","settingsLargePointerInfo":"A bigger menu cursor, thicker selection brackets and bigger button hints.","settingsRemap":"Remap buttons","settingsRemapHint":"Select an action, then press a button. If that button is taken, the two swap.","settingsLayoutSouthpaw":"Southpaw (move with the right stick)","settingsLayoutTriggersSwapped":"Triggers swapped (attack with the left trigger)","settingsCapturePrompt":"Press a button","settingsCaptureCancelHint":"Press {{button}} to cancel","settingsCaptureCancelOrBindHint":"Tap {{button}} to cancel, or hold it to choose it","settingsReset":"Reset","settingsSwapNotice":"{{action}} moved to {{button}}","settingsResetAll":"Reset all buttons and sticks","settingsGroupGameplay":"Movement & gameplay","settingsGroupMenus":"Menus","settingsGroupInventory":"Inventory","settingsGroupKeyboard":"On-screen keyboard","settingsActionMove":"Move","settingsActionLook":"Look around","settingsActionJump":"Jump","settingsActionSneak":"Sneak","settingsActionSneakToggle":"Toggle sneak","settingsActionSprint":"Sprint","settingsActionAttack":"Attack / mine","settingsActionUse":"Use / place","settingsActionHotbarPrevious":"Previous hotbar slot","settingsActionHotbarNext":"Next hotbar slot","settingsActionInventory":"Inventory","settingsActionActionButton":"Game action","settingsActionPerspective":"Change view","settingsActionPickBlock":"Pick block (creative)","settingsActionDrop":"Drop item","settingsActionEmoteWheel":"Emotes","settingsActionChat":"Chat","settingsActionPause":"Pause menu","settingsActionLeaderboard":"Shop / leaderboard","settingsActionMenuConfirm":"Select","settingsActionMenuBack":"Back","settingsActionMenuTabPrevious":"Previous tab","settingsActionMenuTabNext":"Next tab","settingsActionMenuPageUp":"Page up","settingsActionMenuPageDown":"Page down","settingsActionMenuSecondary":"Secondary action","settingsActionMenuToggleCursor":"Switch to virtual cursor","settingsActionInventoryPrimary":"Pick up / place","settingsActionInventorySecondary":"Pick up half / place one","settingsActionInventoryQuickMove":"Quick move","settingsActionInventoryHotbarSwap":"Swap with hotbar slot","settingsActionInventoryClose":"Close","settingsActionInventoryPanelPrevious":"Previous panel","settingsActionInventoryPanelNext":"Next panel","settingsActionInventoryDrop":"Drop item","settingsActionKeyboardType":"Type key","settingsActionKeyboardBackspace":"Backspace","settingsActionKeyboardSpace":"Space","settingsActionKeyboardCaretLeft":"Move cursor left","settingsActionKeyboardCaretRight":"Move cursor right","settingsActionKeyboardShift":"Shift","settingsActionKeyboardSymbols":"Accents and symbols","settingsActionKeyboardSubmit":"Send","settingsActionKeyboardClose":"Close keyboard","settingsActionKeyboardChannel":"Chat channel","settingsAlternatives":"Try alternatives","settingsAlternativesHint":"Try each way of playing and keep the one that feels best.","settingsMenuNavigation":"Menu navigation","settingsMenuNavigationHint":"Steer a cursor with the stick and jump between buttons with the D-pad, or use just one.","settingsNavHybrid":"Cursor and D-pad","settingsMenuNavFocus":"Jump between buttons","settingsVirtualCursor":"Virtual cursor","settingsInventoryNavigation":"Inventory","settingsInventoryNavigationHint":"Steer a cursor with the stick and step slot by slot with the D-pad, or use just one.","settingsInventoryNavSlot":"Slot by slot","settingsQuickChat":"Hold chat button","settingsQuickChatHint":"Hold the chat button to pick a quick phrase. Tapping it still opens chat.","settingsQuickChatWheel":"Quick chat wheel","settingsQuickChatOff":"Off","settingsLeaderboardButton":"Shop / leaderboard button","settingsLeaderboardButtonHint":"Open the shop in one press in games that have one. The lobby leaderboard is still in the pause menu.","settingsLeaderboardButtonShop":"Shop, in games with one","settingsLeaderboardButtonLeaderboard":"Always the leaderboard","settingsTester":"Gamepad tester","settingsTesterNoPad":"Connect a gamepad and press any button to test it.","settingsTesterFamily":"Detected: {{family}}","settingsTesterHint":"Start a test to try every button and stick without moving through the menu.","settingsTesterStart":"Start test","settingsTesterStop":"Stop test","settingsTesterTesting":"Press anything to see it light up. To stop, hold {{button}} or press it three times.","settingsControlsNote":"Playing with a gamepad? Change its buttons and feel in Gamepad settings.","settingsOpenController":"Gamepad settings","keyboardSpace":"Space","keyboardSend":"Send","keyboardDone":"Done","keyboardTargetChat":"Chat","keyboardTargetSign":"Sign","keyboardTargetNameTag":"Name tag","keyboardTargetBook":"Book page","keyboardTargetBookTitle":"Book title","keyboardTargetText":"Text","keyboardPhraseGg":"gg","keyboardPhraseHi":"hi","keyboardPhraseThanks":"thanks","keyboardPhraseGl":"gl","keyboardPhraseBrb":"brb","keyboardPhraseYes":"yes","keyboardPhraseNo":"no","keyboardPhraseHelp":"help!","quickChatPick":"Pick a phrase","actionWheelPick":"Pick an action","wheelReleaseToPick":"Release to pick","wheelClose":"Close","wheelChoose":"Choose","menusSelect":"Select","menusBack":"Back","menusClose":"Close","menusQuickChat":"Quick chat (hold)","menusSkipTutorial":"Skip tutorial","menusTabs":"Tabs","menusRows":"Rows","menusCursorMode":"Cursor","menusFocusMode":"Focus","menusClick":"Click","menusRightClick":"Right-click","menusScroll":"Scroll","menusFriends":"Friends","menusSearch":"Search","menusSettings":"Settings","menusLeaveGameTitle":"Leave the game?","menusLeaveGameLeave":"Leave","menusLeaveGameStay":"Stay","menusNotifications":"Notifications","menusLobby":"Lobby","menusShop":"Shop","menusTasks":"Tasks & leaderboards","menusInvite":"Invite friends","menusAdjust":"Adjust","menusFavourite":"Favourite","screensPressToContinue":"Press {{button}} to continue","screensPressToEnterGame":"Press {{button}} to enter game","screensEnterGame":"Enter game","screensBackToGames":"Back to games","tutorialMine":"Mine","tutorialPlace":"Place / Use","tutorialInventory":"Inventory","tutorialPause":"Pause","menusUseMouse":"Use a mouse or touch here"}}');
    var hy = Wy(1042),
      fy = Wy(1245),
      Zy = Wy(7317),
      cb = Wy(70),
      Py = Wy(19),
      oy = Wy(23),
      By = Wy(7335),
      Ky = Wy(7365),
      ey = Wy(7345),
      qb = Wy(7370),
      sy = Wy(7326),
      Sy = Wy(7796),
      Ey = Wy(7800),
      ly = Wy(1477);
    const mb = (yb, bb, Wy) => Math.max(bb, Math.min(Wy, yb)),
      Cy = yb => Math.min(yb.width, yb.height) / 720,
      Ty = yb => Math.max(.15, yb);
    class Vy {
      constructor() {
        this.locked = !1
      }
      lock() {
        this.locked = !0
      }
      update(yb, bb) {
        const Wy = Math.hypot(yb.x, yb.y) >= (yb => Math.max(.3, yb))(bb);
        return this.locked ? (this.locked = Wy, !1) : Wy
      }
    }
    const Jy = (yb, bb) => {
        const Wy = mb(bb.dtMs, 0, 100),
          Uy = Wy / 1e3,
          hy = Cy(bb.viewport) * (bb.cursorSpeedPercent / 100),
          fy = (0, sy.k)(bb.stick, Ty(bb.moveDeadzone)),
          Zy = Math.hypot(fy.x, fy.y),
          cb = ((yb, bb, Wy) => {
            if (bb < .3) return 0;
            const Uy = Wy / 350;
            return bb >= .85 ? Math.min(1, yb + Uy) : Math.max(0, yb - Uy)
          })(yb.speedRamp, Zy, Wy);
        let Py = yb.x,
          oy = yb.y;
        if (Zy > 0) {
          const yb = .45 + .55 * cb,
            Wy = bb.context.overInteractive ? .45 : 1,
            By = 1400 * (yb => {
              const bb = mb(yb, 0, 1);
              return .3 * bb + .7 * bb * bb
            })(Zy) * hy * yb * Wy;
          Py += fy.x / Zy * By * Uy, oy += fy.y / Zy * By * Uy
        }
        const By = Math.hypot(bb.dpad.x, bb.dpad.y);
        if (By > 0) {
          const yb = 500 * hy;
          Py += bb.dpad.x / By * yb * Uy, oy += bb.dpad.y / By * yb * Uy
        }
        const Ky = bb.context.magnetTarget;
        if (Ky && Zy < .3 && 0 === By) {
          const yb = ((yb, bb, Wy, Uy, hy) => {
            const fy = bb.x - yb.x,
              Zy = bb.y - yb.y,
              cb = Math.hypot(fy, Zy);
            if (0 === cb) return {
              x: 0,
              y: 0
            };
            const Py = Math.min(cb, hy * (1 - Uy / .3));
            let oy = fy / cb * Py,
              By = Zy / cb * Py;
            if (Uy > 0) {
              const yb = Wy.x / Uy,
                bb = Wy.y / Uy,
                hy = oy * yb + By * bb;
              hy < 0 && (oy -= hy * yb, By -= hy * bb)
            }
            return {
              x: oy,
              y: By
            }
          })({
            x: Py,
            y: oy
          }, Ky, fy, Zy, 120 * Cy(bb.viewport) * Uy);
          Py += yb.x, oy += yb.y
        }
        return {
          x: mb(Py, 0, Math.max(0, bb.viewport.width - 1)),
          y: mb(oy, 0, Math.max(0, bb.viewport.height - 1)),
          speedRamp: cb
        }
      },
      gb = yb => {
        const bb = (0, sy.k)(yb, .2);
        return 0 !== bb.x || 0 !== bb.y
      },
      Gy = (yb, bb) => {
        const Wy = (0, sy.k)(yb, .2),
          Uy = Math.hypot(Wy.x, Wy.y);
        if (0 === Uy) return {
          x: 0,
          y: 0
        };
        const hy = Uy * Uy * 1600,
          fy = mb(bb, 0, 100) / 1e3;
        return {
          x: Wy.x / Uy * hy * fy,
          y: Wy.y / Uy * hy * fy
        }
      },
      Oy = (yb, bb) => "y" === bb ? yb.scrollHeight > yb.clientHeight + 1 : yb.scrollWidth > yb.clientWidth + 1,
      Ry = (yb, bb) => {
        if (!Oy(yb, bb)) return !1;
        const Wy = getComputedStyle(yb),
          Uy = "y" === bb ? Wy.overflowY : Wy.overflowX;
        return "auto" === Uy || "scroll" === Uy
      },
      vb = (yb, bb, Wy) => {
        for (let fy = yb instanceof HTMLElement ? yb : null !== (Uy = null === yb || void 0 === yb ? void 0 : yb.parentElement) && void 0 !== Uy ? Uy : null; fy; fy = fy.parentElement) {
          var Uy;
          if (Ry(fy, bb)) return fy;
          if (fy === Wy) return null
        }
        if (Wy) return null;
        const hy = document.scrollingElement;
        return hy instanceof HTMLElement && Oy(hy, bb) ? hy : null
      },
      ib = new WeakMap,
      My = (yb, bb) => {
        const Wy = performance.now(),
          Uy = ib.get(yb);
        if (Uy && Uy.axis === bb && Wy - Uy.atMs < 500 && (!Uy.container || Uy.container.isConnected)) return Uy.container;
        const hy = Yy(yb, bb);
        return ib.set(yb, {
          axis: bb,
          atMs: Wy,
          container: hy
        }), hy
      },
      Yy = (yb, bb) => {
        let Wy = Ry(yb, bb) ? yb : null,
          Uy = Wy ? Wy.clientWidth * Wy.clientHeight : 0;
        for (const hy of yb.querySelectorAll("*")) {
          const yb = hy.clientWidth * hy.clientHeight;
          yb > Uy && Ry(hy, bb) && (Wy = hy, Uy = yb)
        }
        return Wy
      },
      Xy = (yb, bb, Wy) => "y" === bb ? Wy < 0 ? yb.scrollTop > 0 : yb.scrollTop + yb.clientHeight < yb.scrollHeight - 1 : Wy < 0 ? yb.scrollLeft > 0 : yb.scrollLeft + yb.clientWidth < yb.scrollWidth - 1,
      ny = (yb, bb, Wy) => {
        "y" === bb ? yb.scrollBy({
          top: Wy,
          behavior: "instant"
        }) : yb.scrollBy({
          left: Wy,
          behavior: "instant"
        })
      },
      uy = yb => {
        if (!yb || yb === document.scrollingElement) return new DOMRect(0, 0, window.innerWidth, window.innerHeight);
        const bb = yb.getBoundingClientRect(),
          Wy = Math.max(0, bb.left),
          Uy = Math.max(0, bb.top);
        return new DOMRect(Wy, Uy, Math.min(window.innerWidth, bb.right) - Wy, Math.min(window.innerHeight, bb.bottom) - Uy)
      },
      rb = (yb, bb) => yb.left < bb.right && bb.left < yb.right && yb.top < bb.bottom && bb.top < yb.bottom;
    var Hy = Wy(55),
      ab = Wy(898),
      Fy = Wy.n(ab),
      py = Wy(952);
    let Ly = 0,
      Qy = !1;
    class jb {
      constructor() {
        this.element = null, this.shownKey = "", this.gap = null
      }
      setElement(yb) {
        this.element = yb, this.shownKey = "", this.gap = null
      }
      show(yb) {
        const bb = this.element;
        if (!bb) return;
        const Wy = yb ? this.keepOnScreen(bb, yb) : null,
          Uy = Wy ? `${Wy.left},${Wy.top},${Wy.width},${Wy.height}` : "";
        if (Uy === this.shownKey) return;
        const hy = "" === this.shownKey;
        this.shownKey = Uy, bb.classList.toggle("Visible", null !== Wy), Wy && (bb.classList.toggle("Snap", hy), bb.style.width = `${Wy.width}px`, bb.style.height = `${Wy.height}px`, bb.style.transform = `translate(${Wy.left}px, ${Wy.top}px)`, hy && (bb.offsetWidth, bb.classList.remove("Snap")))
      }
      hide() {
        this.show(null)
      }
      keepOnScreen(yb, bb) {
        var Wy;
        const Uy = `${window.innerWidth}x${window.innerHeight}@${(()=>{if("undefined"===typeof ResizeObserver)return getComputedStyle(document.documentElement).fontSize;if(!Qy){Qy=!0;const yb=document.createElement("div");yb.setAttribute("aria-hidden","true"),yb.style.cssText="position: fixed; top: 0; left: 0; width: 1rem; height: 0; visibility: hidden; pointer-events: none",document.body.appendChild(yb),new ResizeObserver((()=>{Ly++})).observe(yb)}return String(Ly)})()}`;
        (null === (Wy = this.gap) || void 0 === Wy ? void 0 : Wy.key) !== Uy && (this.gap = {
          px: parseFloat(getComputedStyle(yb).paddingLeft) || 0,
          key: Uy
        });
        const hy = this.gap.px + 2,
          fy = Math.max(bb.left, hy),
          Zy = Math.max(bb.top, hy),
          cb = Math.min(bb.left + bb.width, window.innerWidth - hy),
          Py = Math.min(bb.top + bb.height, window.innerHeight - hy);
        return cb <= fy || Py <= Zy ? bb : {
          left: fy,
          top: Zy,
          width: cb - fy,
          height: Py - Zy
        }
      }
    }
    const Dy = yb => {
      let {
        placer: bb,
        className: Wy
      } = yb;
      const Uy = (0, Hy.useCallback)((yb => {
        bb.setElement(yb)
      }), [bb]);
      return (0, py.jsx)("div", {
        ref: Uy,
        className: Fy()("PadReticle", Wy),
        "aria-hidden": !0
      })
    };
    var tb = Wy(7805),
      wy = Wy(1499);
    const kb = yb => yb >= 56320 && yb <= 57343,
      Ny = yb => yb >= 55296 && yb <= 56319,
      zb = (yb, bb) => bb >= 2 && kb(yb.charCodeAt(bb - 1)) && Ny(yb.charCodeAt(bb - 2)) ? bb - 2 : Math.max(0, bb - 1),
      Iy = (yb, bb) => {
        let Wy;
        var Uy, hy;
        return Wy = yb.start !== yb.end ? bb < 0 ? yb.start : yb.end : bb < 0 ? zb(yb.value, yb.start) : (Uy = yb.value, (hy = yb.start) + 1 < Uy.length && Ny(Uy.charCodeAt(hy)) && kb(Uy.charCodeAt(hy + 1)) ? hy + 2 : Math.min(Uy.length, hy + 1)), {
          value: yb.value,
          start: Wy,
          end: Wy
        }
      },
      xb = ["text", "search", "url", "email", "tel", "password", "number"],
      Ay = yb => !(!(0, wy.c)(yb) || yb.isContentEditable || yb.hasAttribute("data-pad-no-osk")) && (yb instanceof HTMLTextAreaElement || yb instanceof HTMLInputElement && xb.includes(yb.type)),
      dy = yb => null !== yb.selectionStart,
      yW = yb => {
        var bb, Wy;
        const {
          value: Uy
        } = yb;
        return {
          value: Uy,
          start: null !== (bb = yb.selectionStart) && void 0 !== bb ? bb : Uy.length,
          end: null !== (Wy = yb.selectionEnd) && void 0 !== Wy ? Wy : Uy.length
        }
      },
      bW = (yb, bb, Wy) => {
        if (yb.readOnly) return;
        const Uy = yb instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
        Object.getOwnPropertyDescriptor(Uy, "value").set.call(yb, bb.value), dy(yb) && yb.setSelectionRange(bb.start, bb.end), (0, ly.f)(yb, new InputEvent("input", {
          bubbles: !0,
          inputType: Wy
        }))
      };
    let Wb = !1;
    const Ub = (yb, bb) => !!document.execCommand(yb, !1, bb) || (Wb || (Wb = !0, console.warn(`execCommand("${yb}") failed; the on-screen keyboard is setting the value directly`)), !1),
      hb = (yb, bb) => {
        Ub("insertText", bb) || bW(yb, function(yb, bb) {
          let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
          const Uy = yb.value.slice(0, yb.start),
            hy = yb.value.slice(yb.end);
          let fy = Wy < 0 ? bb.length : Math.max(0, Wy - Uy.length - hy.length);
          fy > 0 && fy < bb.length && Ny(bb.charCodeAt(fy - 1)) && fy--;
          const Zy = bb.slice(0, fy),
            cb = Uy.length + Zy.length;
          return {
            value: Uy + Zy + hy,
            start: cb,
            end: cb
          }
        }(yW(yb), bb, yb.maxLength), "insertText")
      },
      fb = yb => {
        Ub("delete") || bW(yb, (yb => {
          const bb = yb.start === yb.end ? zb(yb.value, yb.start) : yb.start;
          return {
            value: yb.value.slice(0, bb) + yb.value.slice(yb.end),
            start: bb,
            end: bb
          }
        })(yW(yb)), "deleteContentBackward")
      },
      Zb = (yb, bb) => {
        if (!dy(yb)) return;
        const Wy = Iy(yW(yb), bb);
        yb.setSelectionRange(Wy.start, Wy.end)
      },
      cW = ["button", "a[href]", "input:not([type=hidden])", "textarea", "select", "[role=button]", "[role=tab]", "[role=switch]", "[role=checkbox]", "[role=option]", "[role=menuitem]", "[data-pad-focusable]", "[data-pad-tab]", ".Dropdown-control", ".Dropdown-option"].join(","),
      Pb = (yb, bb) => {
        if ("function" === typeof yb.checkVisibility) return !yb.checkVisibility({
          visibilityProperty: !0,
          checkVisibilityCSS: !0,
          opacityProperty: bb,
          checkOpacity: bb
        });
        const {
          visibility: Wy
        } = getComputedStyle(yb);
        if ("hidden" === Wy || "collapse" === Wy) return !0;
        if (!bb) return !1;
        for (let Uy = yb; Uy; Uy = Uy.parentElement)
          if ("0" === getComputedStyle(Uy).opacity) return !0;
        return !1
      },
      ob = yb => {
        if (!yb.isConnected || Pb(yb, !0)) return !1;
        const bb = yb.getBoundingClientRect();
        return bb.width > 0 && bb.height > 0
      },
      Bb = yb => !!yb.matches(":disabled, [aria-disabled='true']") || "button" === yb.getAttribute("role") && "-1" === yb.getAttribute("tabindex"),
      Kb = yb => {
        var bb;
        if (yb.closest("[data-pad-ignore]")) return !0;
        return !!(null === (bb = yb.parentElement) || void 0 === bb ? void 0 : bb.closest("[data-pad-focusable]"))
      },
      eb = yb => {
        const bb = yb.querySelectorAll(cW);
        return yb.matches(cW) ? [yb, ...bb] : bb
      },
      qW = yb => {
        const bb = [];
        for (const Wy of eb(yb)) !Kb(Wy) && ob(Wy) && bb.push(Wy);
        return bb
      },
      sb = new WeakMap,
      Sb = yb => {
        const bb = sb.get(yb);
        if (bb && Eb(bb, yb)) return !0;
        for (const Wy of eb(yb))
          if (!Kb(Wy) && ob(Wy)) return sb.set(yb, Wy), !0;
        return sb.delete(yb), !1
      },
      Eb = (yb, bb) => bb.contains(yb) && yb.matches(cW) && !Kb(yb) && ob(yb),
      lb = (yb, bb) => Eb(yb, bb) && !Bb(yb),
      mW = yb => {
        const bb = bb => {
          let Wy = 0;
          for (let Uy = bb.parentElement; Uy && Uy !== yb; Uy = Uy.parentElement) Wy++;
          return Wy
        };
        return [...yb.querySelectorAll("[data-pad-initial-area]")].filter(ob).sort(((yb, Wy) => bb(Wy) - bb(yb)))
      },
      Cb = yb => Ay(yb),
      Tb = yb => {
        const bb = yb.getBoundingClientRect();
        return {
          x: bb.left + bb.width / 2,
          y: bb.top + bb.height / 2
        }
      },
      Vb = (yb, bb, Wy) => ({
        bubbles: !0,
        cancelable: !0,
        composed: !0,
        view: window,
        clientX: yb.x,
        clientY: yb.y,
        screenX: yb.x,
        screenY: yb.y,
        button: bb,
        buttons: Wy,
        pointerId: 1,
        pointerType: "mouse",
        isPrimary: !0
      }),
      Jb = (yb, bb) => {
        (0, ly.f)(yb, bb)
      },
      gW = function(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const Uy = 0 === Wy ? 1 : 2;
        Jb(yb, new PointerEvent("pointerdown", Vb(bb, Wy, Uy))), Jb(yb, new MouseEvent("mousedown", Vb(bb, Wy, Uy)))
      },
      Gb = function(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        Jb(yb, new PointerEvent("pointerup", Vb(bb, Wy, 0))), Jb(yb, new MouseEvent("mouseup", Vb(bb, Wy, 0)))
      },
      Ob = function(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        gW(yb, bb, Wy), Gb(yb, bb, Wy), Jb(yb, 0 === Wy ? new MouseEvent("click", Vb(bb, 0, 0)) : new MouseEvent("contextmenu", Vb(bb, 2, 0)))
      },
      Rb = function(yb, bb, Wy) {
        let {
          leaveBelow: Uy = null,
          enterBelow: hy = null
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (yb !== bb) {
          if (null !== yb && void 0 !== yb && yb.isConnected) {
            const hy = {
              ...Vb(Wy, 0, 0),
              relatedTarget: bb
            };
            Jb(yb, new PointerEvent("pointerout", hy)), Jb(yb, new MouseEvent("mouseout", hy));
            const fy = yb => !!bb && yb.contains(bb) || !!Uy && yb.contains(Uy);
            for (let bb = yb; bb && !fy(bb); bb = bb.parentElement) Jb(bb, new PointerEvent("pointerleave", {
              ...hy,
              bubbles: !1
            })), Jb(bb, new MouseEvent("mouseleave", {
              ...hy,
              bubbles: !1
            }))
          }
          if (bb) {
            const Uy = {
              ...Vb(Wy, 0, 0),
              relatedTarget: yb
            };
            Jb(bb, new PointerEvent("pointerover", Uy)), Jb(bb, new MouseEvent("mouseover", Uy));
            const fy = [],
              Zy = bb => !(null === yb || void 0 === yb || !yb.isConnected) && bb.contains(yb) || !!hy && bb.contains(hy);
            for (let yb = bb; yb && !Zy(yb); yb = yb.parentElement) fy.push(yb);
            for (const yb of fy.reverse()) Jb(yb, new PointerEvent("pointerenter", {
              ...Uy,
              bubbles: !1
            })), Jb(yb, new MouseEvent("mouseenter", {
              ...Uy,
              bubbles: !1
            }));
            Jb(bb, new PointerEvent("pointermove", Vb(Wy, 0, 0))), Jb(bb, new MouseEvent("mousemove", Vb(Wy, 0, 0)))
          }
        } else bb && (Jb(bb, new PointerEvent("pointermove", Vb(Wy, 0, 0))), Jb(bb, new MouseEvent("mousemove", Vb(Wy, 0, 0))))
      },
      vW = yb => {
        oy.g.EZ(tb.d, yb)
      },
      iW = yb => {
        if (Cb(yb)) return void vW(yb);
        const bb = yb.hasAttribute("data-pad-focusable") ? yb.querySelector("a[href]") : null,
          Wy = null !== bb && void 0 !== bb ? bb : yb;
        Ob(Wy, Tb(Wy))
      },
      Mb = ".Dropdown-root.is-open",
      Yb = yb => {
        const bb = yb.querySelector(".Dropdown-control");
        return iW(bb), bb
      },
      Xb = yb => {
        var bb;
        const Wy = null !== (bb = yb.closest(Mb)) && void 0 !== bb ? bb : yb.querySelector(Mb);
        return Wy ? Yb(Wy) : null
      },
      nb = yb => {
        for (const bb of document.querySelectorAll(Mb)) bb.contains(yb) || Yb(bb)
      },
      ub = yb => null !== yb.closest("input[type=color], input[type=file], [data-pad-mouse-only]"),
      rW = yb => {
        const bb = yb ? document.elementFromPoint(yb.x, yb.y) : null;
        return !(null === bb || void 0 === bb || !bb.closest("[data-pad-repeat]"))
      },
      Hb = yb => {
        var bb;
        return null !== (bb = [...yb.querySelectorAll("[data-pad-back]")].find(ob)) && void 0 !== bb ? bb : null
      },
      aW = yb => {
        const bb = Hb(yb);
        return !!bb && (iW(bb), !0)
      },
      Fb = yb => {
        var bb, Wy, Uy, hy;
        return null !== (bb = null !== (Wy = null !== (Uy = yb.getAttribute("data-pad-key")) && void 0 !== Uy ? Uy : yb.getAttribute("href")) && void 0 !== Wy ? Wy : null === (hy = yb.querySelector("a[href]")) || void 0 === hy ? void 0 : hy.getAttribute("href")) && void 0 !== bb ? bb : null
      },
      pb = {
        x: 0,
        y: 0,
        visible: !1,
        pressed: !1
      };
    const Lb = new class {
        constructor() {
          this.state = pb, this.listeners = new Set
        }
        get() {
          return this.state
        }
        set(yb) {
          if (bb = this.state, Wy = yb, (bb.visible || Wy.visible) && (bb.visible !== Wy.visible || bb.x !== Wy.x || bb.y !== Wy.y || bb.pressed !== Wy.pressed)) {
            var bb, Wy;
            this.state = yb;
            for (const bb of this.listeners) bb(yb)
          }
        }
        hide() {
          this.set(pb)
        }
        subscribe(yb) {
          return this.listeners.add(yb), () => {
            this.listeners.delete(yb)
          }
        }
      },
      Qb = (yb, bb) => {
        let {
          kind: Wy,
          holding: Uy,
          hasPress: hy,
          hasBack: fy,
          slotHasItem: Zy
        } = bb;
        switch (yb) {
          case "primary":
            return "slot" === Wy ? "slotPrimary" : "recipe" === Wy || "button" === Wy ? hy ? "pressPrimary" : "click" : "textField" === Wy ? "openKeyboard" : null;
          case "secondary":
            return "slot" === Wy ? "slotSecondary" : "button" !== Wy && "recipe" !== Wy || !hy ? null : "pressSecondary";
          case "quickMove":
            return "slot" === Wy && Zy ? "slotQuickMove" : null;
          case "hotbarSwap":
            return "slot" === Wy && Zy && !Uy ? "hotbarPick" : null;
          case "openButton":
            return "close";
          case "back":
            return Uy ? "cancel" : fy ? "pressBack" : "close"
        }
      },
      jW = yb => {
        const bb = [];
        if (yb.hotbarPicking) return bb.push({
          actions: ["inventoryPrimary", "inventoryHotbarSwap"],
          labelKey: "inventorySwapHere"
        }), bb.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryCancel"
        }), bb;
        if (yb.holding) "slot" === yb.kind ? (bb.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryPlace"
        }), bb.push({
          actions: ["inventorySecondary"],
          labelKey: "inventoryPlaceOne"
        })) : "textField" === yb.kind && bb.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryType"
        }), bb.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryPutBack"
        }), bb.push({
          actions: ["inventoryDrop"],
          labelKey: "inventoryDrop"
        }), yb.openButtonCloses && bb.push({
          actions: ["inventory"],
          labelKey: "inventoryClose"
        });
        else {
          var Wy;
          "slot" === yb.kind && yb.slotHasItem ? (bb.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryTake"
          }), bb.push({
            actions: ["inventorySecondary"],
            labelKey: "inventoryTakeHalf"
          }), bb.push({
            actions: ["inventoryQuickMove"],
            labelKey: yb.quickMoveToHotbar ? "inventoryToHotbar" : "inventoryQuickMove"
          }), bb.push({
            actions: ["inventoryHotbarSwap"],
            labelKey: "inventoryHotbarSwap"
          }), bb.push({
            actions: ["inventoryDrop"],
            labelKey: "inventoryDrop"
          })) : "button" !== yb.kind && "recipe" !== yb.kind || !yb.pressHints ? "button" === yb.kind || "recipe" === yb.kind ? bb.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventorySelect"
          }) : "textField" === yb.kind && bb.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryType"
          }) : (yb.pressHints.primary && bb.push({
            actions: ["inventoryPrimary"],
            labelKey: yb.pressHints.primary
          }), yb.pressHints.secondary && bb.push({
            actions: ["inventorySecondary"],
            labelKey: yb.pressHints.secondary
          }));
          const Uy = null === (Wy = yb.pressHints) || void 0 === Wy ? void 0 : Wy.back;
          Uy && bb.push({
            actions: ["inventoryClose"],
            labelKey: Uy
          });
          const hy = [];
          yb.openButtonCloses && hy.push("inventory"), Uy || hy.push("inventoryClose"), hy.length > 0 && bb.push({
            actions: hy,
            labelKey: "inventoryClose"
          })
        }
        return bb.push({
          actions: ["inventoryPanelPrevious", "inventoryPanelNext"],
          labelKey: "inventoryPanels"
        }), yb.hasCategories ? bb.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryCategory"
        }) : yb.hasList && bb.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryPage"
        }), bb
      };
    var Db = Wy(7812);
    class tW {
      constructor(yb) {
        this.probes = yb, this.byContainer = new Map, this.byParent = new Map
      }
      find(yb, bb) {
        const Wy = vb(yb, "y", bb);
        if (!Wy) return null;
        let Uy = this.byContainer.get(Wy);
        return Uy || (this.probes.push({
          element: Wy,
          rect: zW(Wy.getBoundingClientRect())
        }), Uy = {
          container: Wy,
          box: uy(Wy),
          group: Nb(Wy)
        }, this.byContainer.set(Wy, Uy)), Uy
      }
      findForParent(yb, bb) {
        let Wy = this.byParent.get(yb);
        return void 0 === Wy && (Wy = this.find(yb, bb), this.byParent.set(yb, Wy)), Wy
      }
    }
    const wb = new WeakMap;
    let kW = 0;
    const Nb = yb => {
        let bb = wb.get(yb);
        return bb || (bb = "el:" + kW++, wb.set(yb, bb)), bb
      },
      zW = yb => ({
        left: yb.left,
        top: yb.top,
        width: yb.width,
        height: yb.height
      }),
      Ib = yb => yb.width > 0 && yb.height > 0,
      xW = (yb, bb) => Ib(yb) && yb.left + yb.width > 0 && yb.top + yb.height > 0 && yb.left < bb.width && yb.top < bb.height,
      Ab = (yb, bb, Wy) => {
        const Uy = yb.top + yb.height / 2;
        return xW(yb, bb) && (!Wy || Uy >= Wy.top && Uy <= Wy.bottom)
      },
      db = yb => ({
        x: yb.left + yb.width / 2,
        y: yb.top + yb.height / 2
      }),
      yU = (yb, bb, Wy) => yb < 0 ? Wy >= 0 ? 0 : bb - 1 : ((yb + Wy) % bb + bb) % bb,
      bU = yb => "Left" === yb || "Right" === yb,
      WW = (yb, bb, Wy) => {
        const Uy = bU(Wy),
          hy = Uy ? yb.top : yb.left,
          fy = Uy ? yb.height : yb.width,
          Zy = Uy ? bb.top : bb.left,
          cb = Uy ? bb.height : bb.width,
          Py = Math.max(0, Math.max(Zy - (hy + fy), hy - (Zy + cb)));
        return fy > 1.5 * cb ? {
          gap: Py,
          offset: Math.max(0, Zy - hy) + .1 * Math.max(0, hy - Zy)
        } : {
          gap: Py,
          offset: Math.abs(Zy + cb / 2 - (hy + fy / 2))
        }
      },
      UW = (yb, bb, Wy) => {
        const Uy = ((yb, bb, Wy) => {
          const Uy = db(yb),
            hy = db(bb),
            fy = bU(Wy) ? Math.min(yb.width, bb.width) / 4 : Math.min(yb.height, bb.height) / 4;
          switch (Wy) {
            case "Right":
              return hy.x - Uy.x >= fy ? Math.max(0, bb.left - (yb.left + yb.width)) : null;
            case "Left":
              return Uy.x - hy.x >= fy ? Math.max(0, yb.left - (bb.left + bb.width)) : null;
            case "Down":
              return hy.y - Uy.y >= fy ? Math.max(0, bb.top - (yb.top + yb.height)) : null;
            case "Up":
              return Uy.y - hy.y >= fy ? Math.max(0, yb.top - (bb.top + bb.height)) : null
          }
        })(yb, bb, Wy);
        if (null === Uy) return null;
        const hy = WW(yb, bb, Wy);
        return Uy + 3 * hy.gap + .5 * hy.offset
      },
      hW = (yb, bb) => bb.visible || null !== bb.scrollGroup && bb.scrollGroup === yb.scrollGroup,
      fW = (yb, bb, Wy, Uy) => {
        let hy = null,
          fy = 1 / 0;
        for (const Zy of bb) {
          if (Zy.key === yb.key || !hW(yb, Zy) || !Uy(Zy)) continue;
          const bb = UW(yb.rect, Zy.rect, Wy);
          null !== bb && bb < fy && (hy = Zy, fy = bb)
        }
        return hy
      },
      ZW = (yb, bb, Wy) => {
        const Uy = fW(yb, bb, Wy, (() => !0));
        if (!Uy || bU(Wy) || null === yb.scrollGroup || Uy.scrollGroup === yb.scrollGroup) return Uy;
        const hy = fW(yb, bb, Wy, (bb => 0 === WW(yb.rect, bb.rect, Wy).gap));
        return null !== hy && void 0 !== hy ? hy : Uy
      },
      cU = (yb, bb, Wy) => {
        let Uy = null,
          hy = 1 / 0;
        for (const fy of bb) {
          if (!fy.visible || Wy && !Wy(fy)) continue;
          const bb = db(fy.rect),
            Zy = Math.hypot(bb.x - yb.x, bb.y - yb.y);
          Zy < hy && (Uy = fy, hy = Zy)
        }
        return Uy
      },
      PW = yb => {
        const {
          rect: bb,
          clip: Wy
        } = yb;
        if (!Wy) return bb;
        const Uy = Math.max(bb.left, Wy.left),
          hy = Math.max(bb.top, Wy.top);
        return {
          left: Uy,
          top: hy,
          width: Math.min(bb.left + bb.width, Wy.left + Wy.width) - Uy,
          height: Math.min(bb.top + bb.height, Wy.top + Wy.height) - hy
        }
      },
      oW = (yb, bb) => bb.x >= yb.left && bb.x < yb.left + yb.width && bb.y >= yb.top && bb.y < yb.top + yb.height,
      BW = (yb, bb) => {
        let Wy = null,
          Uy = 1 / 0;
        for (const hy of bb) {
          const bb = PW(hy);
          (hy.visible || hy.clip) && oW(bb, yb) && (bb.width * bb.height < Uy && (Wy = hy, Uy = bb.width * bb.height))
        }
        return Wy
      },
      KW = yb => {
        let bb = null;
        for (const Wy of yb) {
          if (!Wy.visible) continue;
          if (!bb) {
            bb = Wy;
            continue
          }
          const yb = Math.min(bb.rect.height, Wy.rect.height) / 2,
            Uy = Wy.rect.top - bb.rect.top;
          (Uy < -yb || Math.abs(Uy) <= yb && Wy.rect.left < bb.rect.left) && (bb = Wy)
        }
        return bb
      },
      eW = (yb, bb, Wy, Uy, hy) => {
        const fy = hy % bb,
          Zy = Math.floor(hy / bb);
        return {
          left: yb.left + fy * Wy,
          top: yb.top + Zy * Uy,
          width: yb.width,
          height: yb.height
        }
      },
      qU = ".EntireInventoryWrapper .Inventory, .HotBarGameItemsContainer",
      sW = ".LazyLoadedItemWrapper",
      SW = ["[data-inven-idx]", "[data-recipe-key]", "[role=button]", "button", "input:not([type=hidden])", "textarea", ".CreativeCategoryTab", ".CreativeCategoryDropdownButton", ".CreativeCategoryDropdownOption", "[data-craft-ingredient]"].join(","),
      EW = [
        ["hotbar", ".HotBarGameItemsContainer"],
        ["gameButtons", ".ClientGameInventoryButtons"],
        ["categories", ".CreativeCategoryRail"],
        ["recipe", ".CraftableInfo"],
        ["armour", ".ArmourItemSlots"],
        ["main", ".InvenBodyRight"],
        ["left", ".InvenLeftSide"]
      ],
      lW = ["gameButtons", "categories", "left", "recipe", "armour", "main", "hotbar"],
      mU = yb => yb.hasAttribute("data-inven-idx") ? "slot" : yb.hasAttribute("data-recipe-key") ? "recipe" : yb.hasAttribute("data-craft-ingredient") || Bb(yb) ? "info" : Cb(yb) ? "textField" : "button",
      CW = (yb, bb) => "slot" === bb ? Number(yb.getAttribute("data-inven-idx")) : null,
      TW = yb => yb.matches(sW) ? yb.querySelector(SW) : yb,
      VW = yb => {
        var bb, Wy;
        return {
          element: yb,
          recipe: null !== (bb = yb && (null === (Wy = TW(yb)) || void 0 === Wy ? void 0 : Wy.getAttribute("data-recipe-key"))) && void 0 !== bb ? bb : null
        }
      },
      JW = yb => {
        const bb = TW(yb);
        if (!bb) return {
          kind: "pending",
          idx: null
        };
        const Wy = mU(bb);
        return {
          kind: Wy,
          idx: CW(bb, Wy)
        }
      },
      gU = yb => {
        const bb = [];
        for (const [Wy, Uy] of EW) {
          yb.matches(Uy) && bb.push([Wy, yb]);
          for (const hy of yb.querySelectorAll(Uy)) bb.push([Wy, hy])
        }
        return bb
      },
      GW = (yb, bb) => {
        for (const [Wy, Uy] of yb)
          if (Uy.contains(bb)) return Wy;
        return "other"
      },
      OW = (yb, bb, Wy, Uy, hy, fy, Zy, cb) => {
        var Py;
        const oy = yb.children,
          By = zW(oy[0].getBoundingClientRect()),
          Ky = [{
            element: oy[0],
            rect: By
          }];
        if (fy.push(Ky[0]), 0 === By.width || 0 === By.height) return;
        let ey = 1;
        for (; ey < oy.length && Math.abs(oy[ey].getBoundingClientRect().top - By.top) < 1;) ey++;
        const qb = yb => {
            const bb = {
              element: oy[yb],
              rect: zW(oy[yb].getBoundingClientRect())
            };
            return fy.push(bb), Ky.push(bb), bb.rect
          },
          sy = ey > 1 ? qb(1).left - By.left : By.width,
          Sy = oy.length > ey ? qb(ey).top - By.top : By.height,
          Ey = Zy.find(yb, bb);
        let ly = null;
        if (Ey) {
          var mb;
          const {
            container: yb,
            box: bb
          } = Ey;
          ly = null !== (mb = cb.get(yb)) && void 0 !== mb ? mb : null, ly || (ly = {
            top: yb.scrollTop,
            left: yb.scrollLeft,
            box: bb,
            viewport: Uy,
            targets: [],
            probes: [],
            holdsOthers: !1
          }, cb.set(yb, ly)), ly.probes.push(...Ky)
        }
        const Cy = hy.length;
        for (let gb = 0; gb < oy.length; gb++) {
          var Ty, Vy, Jy;
          const yb = oy[gb],
            bb = eW(By, ey, sy, Sy, gb),
            fy = yb.firstElementChild ? yb.querySelector(SW) : null,
            Zy = fy ? mU(fy) : "pending";
          hy.push({
            key: Nb(yb),
            rect: bb,
            panel: Wy,
            scrollGroup: null !== (Ty = null === Ey || void 0 === Ey ? void 0 : Ey.group) && void 0 !== Ty ? Ty : null,
            visible: Ab(bb, Uy, null === Ey || void 0 === Ey ? void 0 : Ey.box),
            clip: null !== (Vy = null === Ey || void 0 === Ey ? void 0 : Ey.box) && void 0 !== Vy ? Vy : null,
            element: yb,
            kind: Zy,
            idx: fy ? CW(fy, Zy) : null,
            scrollContainer: null !== (Jy = null === Ey || void 0 === Ey ? void 0 : Ey.container) && void 0 !== Jy ? Jy : null
          })
        }
        null === (Py = ly) || void 0 === Py || Py.targets.push(...hy.slice(Cy))
      },
      RW = yb => yb instanceof Element && null !== yb.closest(sW),
      vU = yb => null !== yb.scrollContainer && RW(yb.element);
    class iU {
      constructor() {
        this.latched = null, this.presses = 0
      }
      press(yb, bb, Wy, Uy) {
        this.latched = {
          source: yb,
          focusKey: bb,
          sinceMs: Wy,
          hold: {
            id: ++this.presses,
            holdMs: Uy
          }
        }
      }
      update(yb, bb, Wy) {
        const Uy = this.latched;
        return Uy ? yb && bb === Uy.focusKey ? Wy - Uy.sinceMs < Uy.hold.holdMs ? null : (this.latched = null, Uy.source) : (this.latched = null, null) : null
      }
      getHold() {
        var yb, bb;
        return null !== (yb = null === (bb = this.latched) || void 0 === bb ? void 0 : bb.hold) && void 0 !== yb ? yb : null
      }
      reset() {
        this.latched = null
      }
    }
    var MW = Wy(7821);
    const YW = {
        kind: "none"
      },
      XW = yb => ({
        x: yb.clientX,
        y: yb.clientY
      }),
      nW = () => 2 * (parseFloat(getComputedStyle(document.documentElement).fontSize) || 16);
    class uW {
      constructor() {
        this.hovered = YW, this.signature = "", this.holding = !1, this.lastPoint = {
          clientX: 0,
          clientY: 0
        }
      }
      sync(yb, bb, Wy, Uy, hy) {
        const fy = null !== bb ? {
            kind: "slot",
            idx: bb
          } : Wy ? {
            kind: "element",
            element: Wy
          } : YW,
          Zy = `${hy}|${Math.round(Uy.clientX)},${Math.round(Uy.clientY)}`,
          cb = (Py = this.hovered, oy = fy, "slot" === Py.kind && "slot" === oy.kind ? Py.idx === oy.idx : "element" === Py.kind && "element" === oy.kind ? Py.element === oy.element : Py.kind === oy.kind);
        var Py, oy;
        if (cb && Zy === this.signature) return;
        const By = !cb || hy !== this.holding || "" === this.signature;
        this.signature = Zy, this.holding = hy, this.lastPoint = Uy;
        const Ky = this.hovered;
        if (this.hovered = fy, "slot" === fy.kind) return this.leaveElement(Ky, null, Uy), void(By ? yb.hover(fy.idx, Uy) : yb.moveTo(Uy));
        if (cb) return void("element" === fy.kind ? Rb(fy.element, fy.element, XW(Uy)) : yb.hover(null, Uy));
        yb.hover(null, Uy);
        const ey = "element" === fy.kind ? fy.element : null;
        "element" === Ky.kind ? Rb(Ky.element, ey, XW(Uy)) : ey && Rb(null, ey, XW(Uy))
      }
      invalidate() {
        this.signature = ""
      }
      clear(yb) {
        const bb = this.hovered;
        this.hovered = YW, this.signature = "", "none" !== bb.kind && (this.leaveElement(bb, null, this.lastPoint), yb && "slot" === bb.kind && yb.hover(null, this.lastPoint))
      }
      leaveElement(yb, bb, Wy) {
        "element" === yb.kind && Rb(yb.element, bb, XW(Wy))
      }
    }
    class rU {
      constructor() {
        this.lastTiltedMs = -1 / 0
      }
      update(yb, bb) {
        gb(yb) && (this.lastTiltedMs = bb)
      }
      allowsClick(yb) {
        return yb - this.lastTiltedMs > 150
      }
    }
    class HW {
      constructor() {
        this.remainder = 0, this.container = null
      }
      isScrolling(yb) {
        return 0 !== (0, sy.k)(yb, .2).y
      }
      step(yb, bb, Wy) {
        yb !== this.container && (this.container = yb, this.remainder = 0);
        const Uy = Gy(bb, Wy).y;
        if (0 === Uy) return this.remainder = 0, !1;
        const hy = this.remainder + Uy,
          fy = Math.trunc(hy);
        if (this.remainder = hy - fy, 0 === fy) return !1;
        const Zy = yb.scrollTop;
        return yb.scrollTop = Zy + fy, yb.scrollTop !== Zy
      }
      current() {
        var yb;
        return null !== (yb = this.container) && void 0 !== yb && yb.isConnected ? this.container : null
      }
      reset() {
        this.remainder = 0, this.container = null
      }
    }
    var aU = Wy(7829);
    const FW = "[data-pad-inventory-default]",
      pW = ".HotBarGameItemsContainer .InvenItem.Selected",
      LW = {
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
      QW = [
        ["primary", "inventoryPrimary"],
        ["secondary", "inventorySecondary"],
        ["quickMove", "inventoryQuickMove"],
        ["hotbarSwap", "inventoryHotbarSwap"],
        ["back", "inventoryClose"],
        ["openButton", "inventory"]
      ],
      jU = ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryHotbarSwap", "inventoryClose", "inventoryDrop"],
      DW = ["inventoryPanelPrevious", "inventoryPanelNext", "menuPageUp", "menuPageDown"],
      tU = [...jU, ...DW],
      wW = () => {
        return yb = (0, By.e)("inventory"), !tU.map(By.e).includes(yb) && !(0, sy.J)(yb);
        var yb
      },
      kU = new Set(["slotPrimary", "slotSecondary", "slotQuickMove", "pressPrimary", "pressSecondary", "openKeyboard"]),
      NW = (yb, bb) => {
        const Wy = !(null === bb || void 0 === bb || !bb.isHolding());
        return function(yb, bb) {
          const Wy = yb.find((yb => yb.visible && bb(yb)));
          if (Wy) return Wy;
          for (var Uy = arguments.length, hy = new Array(Uy > 2 ? Uy - 2 : 0), fy = 2; fy < Uy; fy++) hy[fy - 2] = arguments[fy];
          for (const Zy of hy) {
            const bb = KW(yb.filter(Zy));
            if (bb) return bb
          }
          return KW(yb)
        }(yb, (yb => {
          const {
            element: bb
          } = yb;
          return bb.matches(FW) || null !== bb.querySelector(FW) || bb.matches(pW)
        }), (yb => "slot" === yb.kind ? Wy || null !== yb.idx && !(null === bb || void 0 === bb || !bb.hasItemAt(yb.idx)) : "recipe" === yb.kind || "pending" === yb.kind), (yb => "slot" === yb.kind || "button" === yb.kind))
      };
    class zU {
      constructor() {
        this.set = null, this.observer = new MutationObserver((yb => {
          yb.some((yb => !RW(yb.target))) && (this.set = null)
        })), this.invalidate = () => {
          this.set = null
        }, this.onScroll = yb => {
          this.scrolled(yb.target)
        }
      }
      get() {
        if (!this.set) {
          this.set = (() => {
            const yb = [],
              bb = [];
            let Wy = !1;
            const Uy = {
                width: window.innerWidth,
                height: window.innerHeight
              },
              hy = new Map,
              fy = new tW(bb);
            for (const Ky of document.querySelectorAll(qU)) {
              const By = gU(Ky);
              Wy ||= null !== Ky.querySelector(".CreativeCategoryTab");
              for (const Wy of Ky.querySelectorAll(`${sW}:first-child`)) {
                const Zy = Wy.parentElement;
                OW(Zy, Ky, GW(By, Zy), Uy, yb, bb, fy, hy)
              }
              for (const Wy of Ky.querySelectorAll(SW)) {
                var Zy, cb, Py, oy;
                if (Wy.closest(sW) || Wy.closest("[data-pad-ignore]")) continue;
                const ey = null === (Zy = Wy.parentElement) || void 0 === Zy ? void 0 : Zy.closest(SW);
                if (ey && Ky.contains(ey)) continue;
                const qb = mU(Wy),
                  sy = CW(Wy, qb);
                if (-1 === sy) continue;
                const Sy = zW(Wy.getBoundingClientRect());
                bb.push({
                  element: Wy,
                  rect: Sy
                });
                const Ey = fy.findForParent(Wy.parentElement, Ky),
                  ly = Ey && !hy.has(Ey.container) ? Ey : null;
                (ly ? Ib(Sy) : xW(Sy, Uy)) && yb.push({
                  key: Nb(Wy),
                  rect: Sy,
                  panel: GW(By, Wy),
                  scrollGroup: null !== (cb = null === ly || void 0 === ly ? void 0 : ly.group) && void 0 !== cb ? cb : null,
                  visible: Ab(Sy, Uy, null === ly || void 0 === ly ? void 0 : ly.box),
                  clip: null !== (Py = null === ly || void 0 === ly ? void 0 : ly.box) && void 0 !== Py ? Py : null,
                  element: Wy,
                  kind: qb,
                  idx: sy,
                  scrollContainer: null !== (oy = null === ly || void 0 === ly ? void 0 : ly.container) && void 0 !== oy ? oy : null
                })
              }
            }
            for (const [Ky, ey] of hy) ey.holdsOthers = bb.some((yb => yb.element !== Ky && Ky.contains(yb.element) && !yb.element.closest(sW)));
            const By = new Map;
            for (const Ky of yb) By.set(Ky.element, Ky);
            return {
              targets: yb,
              byElement: By,
              hasCategories: Wy,
              probes: bb,
              scrollers: hy
            }
          })(), this.observer.disconnect();
          for (const yb of document.querySelectorAll(qU)) this.observer.observe(yb, {
            childList: !0,
            subtree: !0,
            attributes: !0,
            attributeFilter: ["class", "disabled", "aria-disabled", "tabindex", "data-inven-idx"]
          })
        }
        return this.set
      }
      scrolled(yb) {
        !this.set || yb instanceof Element && ((yb, bb) => {
          const Wy = yb.scrollers.get(bb);
          if (!Wy || Wy.holdsOthers || bb.scrollLeft !== Wy.left) return !1;
          const Uy = bb.scrollTop - Wy.top;
          if (0 === Uy) return !0;
          Wy.top = bb.scrollTop;
          for (const hy of Wy.probes) hy.rect.top -= Uy;
          for (const hy of Wy.targets) hy.rect.top -= Uy, hy.visible = Ab(hy.rect, Wy.viewport, Wy.box);
          return !0
        })(this.set, yb) || (this.set = null)
      }
      revalidate() {
        this.set && this.set.probes.some((yb => {
          return bb = yb.rect, Wy = yb.element.getBoundingClientRect(), !(bb.left === Wy.left && bb.top === Wy.top && bb.width === Wy.width && bb.height === Wy.height);
          var bb, Wy
        })) && (this.set = null)
      }
      disconnect() {
        this.observer.disconnect(), this.set = null
      }
    }
    const IW = new class {
        constructor() {
          this.focused = null, this.focusTarget = null, this.lastRect = null, this.panelMemory = new Map, this.reopenSlotIdx = null, this.dpadTimers = new Map(sy.D.map((yb => [yb, (0, Sy.b)(sy.H)]))), this.stickRepeat = new sy.b((0, Sy.b)(sy.nb)), this.pageUpTimer = (0, Sy.b)(sy.ib), this.pageDownTimer = (0, Sy.b)(sy.ib), this.stickGate = new Vy, this.pointer = null, this.activePress = null, this.dropLatch = new iU, this.scroller = new HW, this.scrollStickClick = new rU, this.hover = new uW, this.lastRealPointer = null, this.placeAfterCategory = null, this.hotbarPick = null, this.ring = new jb, this.targets = new zU, this.hasCategories = !1, this.wasShowing = !1, this.state = MW.b, this.isActive = () => (0, Db.d)(), this.isShowing = () => "inventory" === Ky.b.getActiveConsumerName() && (0, qb.o)(), this.getState = () => this.state, this.isSteppingSlots = () => this.isShowing() && null === this.pointer, this.onDeactivate = () => {
            this.endInteraction((0, Db.c)()), (0, Db.d)() || this.forgetSurface()
          }, this.forgetSurface = () => {
            var yb;
            this.reopenSlotIdx = null !== (yb = this.focused ? JW(this.focused).idx : null) && void 0 !== yb ? yb : this.reopenSlotIdx, this.focused = null, this.focusTarget = null, this.lastRect = null, this.placeAfterCategory = null, (0, Db.o)(), this.panelMemory.clear(), this.targets.disconnect()
          }, this.onFrame = yb => {
            (0, cb.unstable_batchedUpdates)((() => {
              this.frame(yb)
            }))
          }, this.shouldBlockRealPointer = yb => yb.isTrusted && !(0, ly.u)(yb) && this.isShowing(), this.noteRealPointer = yb => {
            yb instanceof MouseEvent && yb.isTrusted && !(0, ly.u)(yb) && (this.lastRealPointer ??= {
              x: 0,
              y: 0
            }, this.lastRealPointer.x = yb.clientX, this.lastRealPointer.y = yb.clientY)
          }, this.wakePressActs = yb => {
            var bb;
            return yb === (0, By.e)("inventoryClose") ? !(null !== (bb = (0, Db.c)()) && void 0 !== bb && bb.isHolding()) : !(yb !== (0, By.e)("inventory") || !wW()) || ((0, sy.J)(yb) ? this.isNavButton(yb) : DW.some((bb => (0, By.e)(bb) === yb)))
          }
        }
        frame(yb) {
          var bb, Wy, Uy, hy, fy;
          const Zy = (0, Db.c)();
          if (!(0, qb.o)()) return void(this.wasShowing && (this.endInteraction(Zy), this.rehoverRealPointer()));
          this.wasShowing = !0, this.applyFocusRequest(), yb.wokeDevice && this.focusWakePointer(!(null === Zy || void 0 === Zy || !Zy.isHolding())), this.applyCategoryPlace(), this.ensureFocus(), "cursor" !== (0, ey.g)().inventoryNavigation || this.pointer || this.engagePointer();
          const cb = performance.now();
          this.handleNavigation(yb, cb), this.handlePanels(yb), this.handlePaging(yb, cb), this.handleScroll(yb), this.handleButtons(yb, cb, Zy), this.applyFocusRequest(), this.pointer && this.hoverAtPointer();
          const Py = this.ensureFocus(),
            oy = this.focusContext(Zy);
          this.ring.show(Py);
          const Ky = "slot" === oy.kind ? oy.idx : null,
            sy = null !== (bb = null === (Wy = oy.actionElement) || void 0 === Wy ? void 0 : Wy.querySelector(".DoCraftItem")) && void 0 !== bb ? bb : oy.actionElement;
          this.pointer ? (this.hover.sync(Zy, Ky, sy, ((yb, bb) => {
            const Wy = bb ? nW() : 0;
            return {
              clientX: yb.x - Wy,
              clientY: yb.y - Wy
            }
          })(this.pointer, oy.holding), oy.holding), Lb.set({
            x: this.pointer.x,
            y: this.pointer.y,
            visible: !0,
            pressed: yb.isHeld((0, By.e)("inventoryPrimary"))
          })) : Py && this.focused && this.hover.sync(Zy, Ky, sy, ((yb, bb) => {
            if (!bb) return {
              clientX: yb.left + yb.width - 10,
              clientY: yb.top + yb.height / 2 - 10
            };
            const Wy = nW();
            return {
              clientX: yb.left + yb.width / 2 - Wy,
              clientY: yb.top + yb.height / 2 - Wy
            }
          })(Py, oy.holding), oy.holding), this.publishState({
            showing: !0,
            kind: oy.kind,
            holding: oy.holding,
            slotHasItem: oy.slotHasItem,
            pressHints: null !== (Uy = null === (hy = oy.press) || void 0 === hy ? void 0 : hy.hints) && void 0 !== Uy ? Uy : null,
            hasCategories: this.hasCategories,
            hasList: !!this.focusTarget && vU(this.focusTarget),
            openButtonCloses: wW(),
            steppingSlots: null === this.pointer,
            quickMoveToHotbar: "slot" === oy.kind && !(null === (fy = oy.actionElement) || void 0 === fy || !fy.closest(".CreativeItemSlots")),
            dropStackHold: this.dropLatch.getHold(),
            hotbarPicking: null !== this.hotbarPick
          })
        }
        focusWakePointer(yb) {
          var bb;
          const Wy = (0, qb.e)();
          if (!Wy) return;
          this.targets.revalidate();
          const Uy = this.getTargets().targets;
          this.setFocus(null !== (bb = BW(Wy, Uy)) && void 0 !== bb ? bb : yb ? cU(Wy, Uy, (yb => {
            let {
              rect: bb
            } = yb;
            const Uy = Math.max(bb.left - Wy.x, 0, Wy.x - (bb.left + bb.width)),
              hy = Math.max(bb.top - Wy.y, 0, Wy.y - (bb.top + bb.height));
            return Math.hypot(Uy, hy) <= Math.min(bb.width, bb.height) / 2
          })) : null, !1), "cursor" === (0, ey.g)().inventoryNavigation && (this.pointer = {
            x: Wy.x,
            y: Wy.y,
            speedRamp: 0
          })
        }
        rehoverRealPointer() {
          const yb = this.lastRealPointer;
          if (!yb || "keyboardMouse" !== Py.d.get("activeInputDevice")) return;
          const bb = document.elementFromPoint(yb.x, yb.y);
          bb && Rb(null, bb, yb)
        }
        endInteraction(yb) {
          this.wasShowing = !1, this.hotbarPick = null, this.releasePress(), this.dropLatch.reset(), this.scroller.reset();
          for (const bb of this.dpadTimers.values()) bb.reset();
          this.stickRepeat.reset(), this.pageUpTimer.reset(), this.pageDownTimer.reset(), this.hover.clear(yb), this.ring.hide(), this.releasePointer(), this.publishState(MW.b)
        }
        getTargets() {
          const yb = this.targets.get();
          return this.hasCategories = yb.hasCategories, yb
        }
        currentTarget() {
          var yb;
          return this.focused && null !== (yb = this.getTargets().byElement.get(this.focused)) && void 0 !== yb ? yb : null
        }
        readFocusRect() {
          const yb = this.focused;
          if (null === yb || void 0 === yb || !yb.isConnected || !yb.closest(qU)) return null;
          const bb = yb.getBoundingClientRect();
          return bb.width > 0 && bb.height > 0 ? {
            left: bb.left,
            top: bb.top,
            width: bb.width,
            height: bb.height
          } : null
        }
        ensureFocus() {
          const yb = this.readFocusRect();
          if (yb || this.pointer) return yb;
          const {
            targets: bb,
            byElement: Wy
          } = this.getTargets();
          let Uy = null,
            hy = !1;
          if (this.lastRect) Uy = cU(db(this.lastRect), bb);
          else {
            var fy, Zy;
            const yb = ((yb, bb) => {
                const Wy = document.querySelector(".EntireInventoryWrapper [data-pad-inventory-start]");
                return Wy ? NW(yb.filter((yb => Wy.contains(yb.element))), bb) : null
              })(bb, (0, Db.c)()),
              cb = bb.find((yb => null !== yb.idx && yb.idx === this.reopenSlotIdx)),
              Py = document.querySelector(pW);
            hy = null !== yb || void 0 !== cb, Uy = null !== (fy = null !== (Zy = null !== yb && void 0 !== yb ? yb : cb) && void 0 !== Zy ? Zy : Py && Wy.get(Py)) && void 0 !== fy ? fy : KW(bb)
          }
          return this.setFocus(Uy, hy), this.lastRect
        }
        setFocus(yb) {
          let bb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          yb && (this.focused = yb.element, this.focusTarget = yb, this.panelMemory.set(yb.panel, yb.element), bb && yb.scrollContainer && ((yb, bb) => {
            const Wy = yb.getBoundingClientRect(),
              Uy = uy(bb),
              hy = bb.scrollTop;
            return Wy.top < Uy.top ? bb.scrollTop -= Uy.top - Wy.top : Wy.bottom > Uy.bottom && (bb.scrollTop += Wy.bottom - Uy.bottom), bb.scrollTop !== hy
          })(yb.element, yb.scrollContainer) && this.targets.invalidate(), this.lastRect = this.readFocusRect(), this.followFocusJump())
        }
        followFocusJump() {
          if (this.pointer)
            if ("cursor" === (0, ey.g)().inventoryNavigation) {
              if (this.lastRect) {
                const yb = db(this.lastRect);
                this.pointer = {
                  x: yb.x,
                  y: yb.y,
                  speedRamp: 0
                }
              }
            } else this.releasePointer()
        }
        engagePointer() {
          const yb = this.lastRect ? db(this.lastRect) : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          };
          this.pointer = {
            x: yb.x,
            y: yb.y,
            speedRamp: 0
          }
        }
        releasePointer() {
          this.pointer = null, Lb.hide()
        }
        hoverAtPointer() {
          var yb;
          const bb = BW(this.pointer, this.getTargets().targets);
          this.focusTarget = bb, (null === bb || void 0 === bb ? void 0 : bb.element) !== this.focused && (this.focused = null !== (yb = null === bb || void 0 === bb ? void 0 : bb.element) && void 0 !== yb ? yb : null, bb && (this.panelMemory.set(bb.panel, bb.element), this.lastRect = this.readFocusRect()))
        }
        moveCursor(yb, bb) {
          const Wy = this.focusTarget,
            Uy = Wy && (0, ey.g)().cursorMagnetism ? db(PW(Wy)) : null;
          this.pointer = Jy(this.pointer, {
            stick: yb.leftStick,
            moveDeadzone: (0, ey.g)().moveDeadzone,
            dpad: bb,
            dtMs: yb.dtMs,
            cursorSpeedPercent: (0, ey.g)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: {
              overInteractive: !1,
              magnetTarget: Uy
            }
          })
        }
        move(yb) {
          this.targets.revalidate();
          const bb = this.currentTarget();
          bb && this.setFocus(ZW(bb, this.getTargets().targets, yb))
        }
        step(yb) {
          const bb = this.pointer;
          if (bb && (this.releasePointer(), !this.focused)) return this.targets.revalidate(), void this.setFocus(((yb, bb, Wy) => {
            var Uy;
            const hy = {
              key: "",
              rect: {
                left: yb.x,
                top: yb.y,
                width: 0,
                height: 0
              },
              panel: "",
              scrollGroup: null,
              visible: !0,
              clip: null
            };
            return null !== (Uy = ZW(hy, bb, Wy)) && void 0 !== Uy ? Uy : cU(yb, bb)
          })(bb, this.getTargets().targets, yb));
          this.move(yb)
        }
        isNavButton(yb) {
          return !jU.some((bb => (0, By.e)(bb) === yb)) && !(yb === (0, By.e)("inventory") && wW())
        }
        handleNavigation(yb, bb) {
          const Wy = (0, ey.g)().inventoryNavigation,
            Uy = {
              x: 0,
              y: 0
            };
          let hy = null;
          for (const Py of sy.D) {
            const fy = this.isNavButton(Py) && yb.isHeld(Py);
            fy && (Uy.x += LW[Py].x, Uy.y += LW[Py].y), this.dpadTimers.get(Py).update(fy, bb) && "cursor" !== Wy && (hy ??= Py)
          }
          const fy = this.stickGate.update(yb.leftStick, (0, ey.g)().moveDeadzone);
          if (hy && (this.step(hy), this.stickGate.lock()), "slot" !== Wy) {
            const bb = ((yb, bb, Wy, Uy) => "hybrid" !== yb ? "cursor" === yb : !Uy && (bb || Wy))(Wy, null !== this.pointer, fy, null !== hy);
            return bb && !this.pointer && this.engagePointer(), void(this.pointer && this.moveCursor(yb, "cursor" === Wy ? Uy : {
              x: 0,
              y: 0
            }))
          }
          const Zy = (0, sy.k)(yb.leftStick, (0, ey.g)().moveDeadzone),
            cb = this.stickRepeat.update(fy ? (0, sy.qb)(Zy) : null, bb);
          cb && this.move(cb)
        }
        applyCategoryPlace() {
          const yb = this.placeAfterCategory;
          if (!yb) return;
          this.placeAfterCategory = null, this.targets.invalidate();
          const bb = cU(db(yb.rect), this.getTargets().targets, (bb => bb.scrollGroup === yb.scrollGroup));
          this.setFocus(bb, !1)
        }
        applyFocusRequest() {
          const yb = (0, Db.o)();
          yb && (this.targets.invalidate(), this.setFocus((0, Db.b)(this.getTargets().targets, yb)))
        }
        handlePanels(yb) {
          var bb, Wy, Uy;
          const hy = yb.wasPressed((0, By.e)("inventoryPanelPrevious")),
            fy = yb.wasPressed((0, By.e)("inventoryPanelNext"));
          if (!hy && !fy) return;
          const {
            targets: Zy
          } = this.getTargets(), cb = (Py = ((yb, bb) => {
            const Wy = [];
            for (const hy of yb) hy.visible && !Wy.includes(hy.panel) && Wy.push(hy.panel);
            const Uy = yb => {
              const Uy = bb.indexOf(yb);
              return -1 === Uy ? bb.length + Wy.indexOf(yb) : Uy
            };
            return Wy.sort(((yb, bb) => Uy(yb) - Uy(bb)))
          })(Zy, lW), oy = null !== (bb = null === (Wy = this.focusTarget) || void 0 === Wy ? void 0 : Wy.panel) && void 0 !== bb ? bb : null, Ky = fy ? 1 : -1, 0 === Py.length ? null : Py[yU(null === oy ? -1 : Py.indexOf(oy), Py.length, Ky)]);
          var Py, oy, Ky;
          if (null === cb) return;
          const ey = this.panelMemory.get(cb),
            qb = Zy.filter((yb => yb.panel === cb)),
            sy = null !== (Uy = qb.find((yb => yb.element === ey && yb.visible))) && void 0 !== Uy ? Uy : NW(qb, (0, Db.c)());
          this.setFocus(sy)
        }
        handlePaging(yb, bb) {
          const Wy = (0, By.e)("menuPageUp"),
            Uy = (0, By.e)("menuPageDown"),
            hy = this.pageUpTimer.update(yb.isHeld(Wy), bb),
            fy = this.pageDownTimer.update(yb.isHeld(Uy), bb);
          if (!hy && !fy) return;
          const Zy = fy ? 1 : -1;
          if (!yb.wasPressed(fy ? Uy : Wy) && this.hasCategories) return;
          if ((yb => {
              const bb = Array.from(document.querySelectorAll(".EntireInventoryWrapper .CreativeCategoryTab"));
              if (0 === bb.length) return !1;
              const Wy = bb.findIndex((yb => yb.classList.contains("Selected"))),
                Uy = bb[yU(Wy, bb.length, yb)];
              return Ob(Uy, Tb(Uy)), !0
            })(Zy)) {
            var cb, Py;
            this.targets.invalidate();
            const yb = null !== (cb = null === (Py = this.focusTarget) || void 0 === Py ? void 0 : Py.scrollGroup) && void 0 !== cb ? cb : null,
              bb = this.readFocusRect();
            return void(this.placeAfterCategory = null !== yb && bb && !this.pointer ? {
              rect: bb,
              scrollGroup: yb
            } : null)
          }
          const {
            targets: oy
          } = this.getTargets(), Ky = this.currentTarget(), ey = Ky && vU(Ky) ? Ky : oy.find((yb => vU(yb) && yb.visible));
          if (!ey) return;
          const qb = ((yb, bb, Wy, Uy) => {
            if (null === yb.scrollGroup) return null;
            const hy = db(yb.rect),
              fy = hy.x,
              Zy = hy.y + ("Down" === Wy ? Uy : -Uy);
            let cb = null,
              Py = 1 / 0;
            for (const oy of bb) {
              if (oy.scrollGroup !== yb.scrollGroup || oy.key === yb.key) continue;
              const bb = db(oy.rect);
              if ("Down" === Wy ? bb.y <= hy.y : bb.y >= hy.y) continue;
              const Uy = Math.hypot(bb.x - fy, bb.y - Zy);
              Uy < Py && (cb = oy, Py = Uy)
            }
            return cb
          })(ey, oy, Zy > 0 ? "Down" : "Up", ey.scrollContainer.clientHeight);
          this.setFocus(null !== qb && void 0 !== qb ? qb : ey)
        }
        handleScroll(yb) {
          var bb, Wy, Uy, hy, fy, Zy;
          if (!this.scroller.isScrolling(yb.rightStick)) return void this.scroller.reset();
          const {
            targets: cb
          } = this.getTargets(), Py = this.pointer, oy = !Py && this.focusTarget && vU(this.focusTarget) ? this.focusTarget.scrollContainer : null, By = Py && (null === (bb = cb.find((yb => yb.clip && oW(yb.clip, Py)))) || void 0 === bb ? void 0 : bb.scrollContainer), Ky = null !== (Wy = null !== (Uy = null !== (hy = this.scroller.current()) && void 0 !== hy ? hy : By) && void 0 !== Uy ? Uy : oy) && void 0 !== Wy ? Wy : null === (fy = cb.find(vU)) || void 0 === fy ? void 0 : fy.scrollContainer;
          if (!Ky || !this.scroller.step(Ky, yb.rightStick, yb.dtMs)) return;
          this.targets.scrolled(Ky);
          const ey = Py || (null === (Zy = this.focusTarget) || void 0 === Zy ? void 0 : Zy.scrollContainer) !== Ky ? null : this.readFocusRect();
          if (!ey) return;
          const qb = uy(Ky),
            sy = db(ey);
          if (sy.y < qb.top || sy.y > qb.bottom) {
            const yb = this.focusTarget.scrollGroup,
              bb = cU(sy, this.getTargets().targets, (bb => bb.scrollGroup === yb));
            this.setFocus(bb, !1)
          }
        }
        focusContext(yb) {
          const {
            kind: bb,
            idx: Wy
          } = this.focused ? JW(this.focused) : {
            kind: null,
            idx: null
          }, Uy = this.focused ? TW(this.focused) : null, hy = Uy ? (0, aU.e)(Uy) : null;
          return {
            kind: bb,
            idx: Wy,
            actionElement: Uy,
            press: hy,
            hasPress: null !== hy,
            hasBack: !(null === hy || void 0 === hy || !hy.back),
            holding: yb.isHolding(),
            slotHasItem: null !== Wy && yb.hasItemAt(Wy)
          }
        }
        handleButtons(yb, bb, Wy) {
          var Uy, hy;
          if (!this.activePress || yb.isHeld(this.activePress.button) && (Uy = this.activePress.target, hy = this.focused, null !== Uy.recipe ? VW(hy).recipe === Uy.recipe : hy === Uy.element) || this.releasePress(), this.scrollStickClick.update(yb.rightStick, bb), !this.handleHotbarPick(yb, Wy)) {
            for (const [Uy, hy] of QW) {
              const fy = (0, By.e)(hy);
              if (!yb.wasPressed(fy) || "openButton" === Uy && !wW()) continue;
              if ("RS" === fy && !this.scrollStickClick.allowsClick(bb)) continue;
              const Zy = this.focusContext(Wy),
                cb = Qb(Uy, Zy);
              cb && this.runIntent(cb, Zy, fy, Wy)
            }
            this.handleDrop(yb, bb, Wy)
          }
        }
        handleHotbarPick(yb, bb) {
          const Wy = this.hotbarPick;
          if (!Wy) return !1;
          const Uy = yb.wasPressed((0, By.e)("inventoryPrimary")) || yb.wasPressed((0, By.e)("inventoryHotbarSwap"));
          if (!Uy && !yb.wasPressed((0, By.e)("inventoryClose")) && !bb.isHolding()) return !(yb.wasPressed((0, By.e)("inventory")) && wW());
          const hy = this.focusTarget;
          Uy && "hotbar" === (null === hy || void 0 === hy ? void 0 : hy.panel) && null !== hy.idx && hy.idx !== Wy.idx && (bb.swapWithHotbar(hy.idx, Wy.idx), this.afterAction()), this.hotbarPick = null;
          const fy = Wy.element.isConnected ? this.getTargets().byElement.get(Wy.element) : void 0;
          return fy && this.setFocus(fy), !0
        }
        startHotbarPick(yb) {
          var bb;
          const {
            targets: Wy,
            byElement: Uy
          } = this.getTargets(), hy = document.querySelector(pW), fy = null !== (bb = hy && Uy.get(hy)) && void 0 !== bb ? bb : Wy.find((yb => "hotbar" === yb.panel));
          fy && this.focused && (this.hotbarPick = {
            idx: yb,
            element: this.focused
          }, this.setFocus(fy))
        }
        focusKey() {
          return this.focused ? Nb(this.focused) : null
        }
        handleDrop(yb, bb, Wy) {
          const Uy = (0, By.e)("inventoryDrop");
          if (yb.wasPressed(Uy)) {
            const yb = (hy = this.focusContext(Wy)).holding ? {
              kind: "kW"
            } : "slot" === hy.kind && hy.slotHasItem && null !== hy.idx ? {
              kind: "slot",
              idx: hy.idx
            } : null;
            return void(yb && (this.dropFrom(yb, !1, Wy), this.dropLatch.press(yb, this.focusKey(), bb, Ey.c[(0, ey.g)().tapHoldTime].dropStackMs), this.afterAction()))
          }
          var hy;
          const fy = this.dropLatch.update(yb.isHeld(Uy), this.focusKey(), bb);
          fy && ((yb, bb, Wy) => "kW" === yb.kind ? bb : !bb && Wy(yb.idx))(fy, Wy.isHolding(), Wy.hasItemAt) && (this.dropFrom(fy, !0, Wy), this.afterAction())
        }
        dropFrom(yb, bb, Wy) {
          "kW" === yb.kind ? Wy.dropHeld(bb, this.slotPoint()) : Wy.dropSlot(yb.idx, bb)
        }
        slotPoint() {
          return this.pointer ? {
            clientX: this.pointer.x,
            clientY: this.pointer.y
          } : this.lastRect ? (yb => {
            const bb = db(yb);
            return {
              clientX: bb.x,
              clientY: bb.y
            }
          })(this.lastRect) : {
            clientX: 0,
            clientY: 0
          }
        }
        runIntent(yb, bb, Wy, Uy) {
          const hy = bb.idx,
            fy = bb.actionElement;
          switch (fy && kU.has(yb) && (0, ly.v)(fy), yb) {
            case "slotPrimary":
              Uy.primary(hy, this.slotPoint());
              break;
            case "slotSecondary":
              Uy.secondary(hy, this.slotPoint());
              break;
            case "slotQuickMove":
              Uy.quickMove(hy, this.slotPoint());
              break;
            case "hotbarPick":
              this.startHotbarPick(hy);
              break;
            case "pressPrimary":
            case "pressSecondary":
              this.startPress(bb.press, "pressPrimary" === yb ? "primary" : "secondary", Wy);
              break;
            case "click":
              Ob(fy, Tb(fy));
              break;
            case "openKeyboard":
              Cb(fy) && vW(fy);
              break;
            case "pressBack":
              bb.press.back();
              break;
            case "cancel":
              Uy.cancel();
              break;
            case "close":
              return this.releasePress(), void Uy.close()
          }
          this.afterAction()
        }
        startPress(yb, bb, Wy) {
          this.releasePress(), yb.press(bb) && (this.activePress = {
            handlers: yb,
            button: Wy,
            target: VW(this.focused)
          })
        }
        releasePress() {
          var yb, bb, Wy;
          null === (yb = this.activePress) || void 0 === yb || null === (bb = (Wy = yb.handlers).release) || void 0 === bb || bb.call(Wy), this.activePress = null
        }
        afterAction() {
          this.targets.invalidate(), this.hover.invalidate()
        }
        publishState(yb) {
          ((yb, bb) => {
            var Wy, Uy, hy, fy, Zy, cb;
            return yb.showing === bb.showing && yb.kind === bb.kind && yb.holding === bb.holding && yb.slotHasItem === bb.slotHasItem && (null === (Wy = yb.pressHints) || void 0 === Wy ? void 0 : Wy.primary) === (null === (Uy = bb.pressHints) || void 0 === Uy ? void 0 : Uy.primary) && (null === (hy = yb.pressHints) || void 0 === hy ? void 0 : hy.secondary) === (null === (fy = bb.pressHints) || void 0 === fy ? void 0 : fy.secondary) && (null === (Zy = yb.pressHints) || void 0 === Zy ? void 0 : Zy.back) === (null === (cb = bb.pressHints) || void 0 === cb ? void 0 : cb.back) && yb.hasCategories === bb.hasCategories && yb.hasList === bb.hasList && yb.openButtonCloses === bb.openButtonCloses && yb.steppingSlots === bb.steppingSlots && yb.hotbarPicking === bb.hotbarPicking && yb.quickMoveToHotbar === bb.quickMoveToHotbar && yb.dropStackHold === bb.dropStackHold
          })(yb, this.state) || (this.state = yb, oy.g.EZ(MW.e, yb))
        }
      },
      xU = ["pointermove", "pointerover", "pointerout", "mouseover", "mouseout"];
    var AW = Wy(7375);
    var dW = Wy(7837);
    const yh = {
        duration: 80,
        strongMagnitude: .2,
        weakMagnitude: .2,
        needsPadInUse: !1
      },
      bh = {
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
          ...yh,
          minIntervalMs: 1e3
        },
        preview: {
          ...yh,
          minIntervalMs: 0
        }
      };
    const WU = new class {
        constructor(yb) {
          this.deps = yb, this.lastPlayedMs = {}, this.loggedFailure = !1, this.logFailure = yb => {
            this.loggedFailure || (this.loggedFailure = !0, console.warn("Controller vibration failed; further failures are not logged.", yb))
          }
        }
        play(yb, bb) {
          const Wy = bh[yb];
          if (!this.deps.isVibrationOn() || Wy.needsPadInUse && !this.deps.isPadInUse()) return !1;
          const Uy = this.lastPlayedMs[yb];
          if (void 0 !== Uy && bb - Uy < Wy.minIntervalMs) return !1;
          const hy = this.deps.getActuator();
          if (!hy) return !1;
          this.lastPlayedMs[yb] = bb;
          const {
            duration: fy,
            strongMagnitude: Zy,
            weakMagnitude: cb
          } = Wy;
          try {
            hy.playEffect("dual-rumble", {
              duration: fy,
              strongMagnitude: Zy,
              weakMagnitude: cb
            }).catch(this.logFailure)
          } catch (Py) {
            this.logFailure(Py)
          }
          return !0
        }
      }({
        getActuator: () => (yb => {
          const bb = null === yb || void 0 === yb ? void 0 : yb.vibrationActuator;
          return "function" === typeof(null === bb || void 0 === bb ? void 0 : bb.playEffect) ? bb : null
        })(Zy.f.getActiveGamepad()),
        isVibrationOn: () => (0, ey.g)().vibration,
        isPadInUse: qb.o
      }),
      UU = yb => {
        WU.play(yb, performance.now())
      };
    var hU = Wy(7381),
      fU = Wy(2293),
      ZU = Wy(105),
      ch = Wy(33),
      PU = Wy(942);
    class oU {
      constructor(yb) {
        this.deps = yb
      }
      check() {
        let yb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const bb = this.deps.isPadActive() ? this.deps.getPadFamily() : null;
        if (!bb) return "skipped";
        const Wy = yb ? this.deps.getVisitId() : this.deps.peekVisitId();
        return null === Wy || this.deps.readReportedVisitId() === Wy ? "skipped" : this.deps.canReport() ? (this.deps.writeReportedVisitId(Wy), this.deps.KU(bb, this.deps.getInputType()), "reported") : "notReady"
      }
    }
    const BU = "controllerUsageReportedVisit";
    var KU = Wy(1207),
      eU = Wy(1496),
      qh = Wy(562),
      sU = Wy(1268),
      SU = Wy(1115);
    const EU = yb => ({
        translationKey: `controller:${yb}`
      }),
      lU = {
        A: "A",
        B: "B",
        X: "X",
        Y: "Y",
        LB: "LB",
        RB: "RB",
        LT: "LT",
        RT: "RT",
        View: EU("padButtonView"),
        Menu: EU("padButtonMenu"),
        LS: "L3",
        RS: "R3",
        Up: EU("padButtonDpadUp"),
        Down: EU("padButtonDpadDown"),
        Left: EU("padButtonDpadLeft"),
        Right: EU("padButtonDpadRight"),
        Home: EU("padButtonHome"),
        LeftStick: EU("padButtonLeftStick"),
        RightStick: EU("padButtonRightStick")
      },
      mh = {
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
          View: EU("padButtonCreate"),
          Menu: EU("padButtonOptions")
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
      CU = (yb, bb) => {
        var Wy;
        const Uy = null !== (Wy = mh[yb][bb]) && void 0 !== Wy ? Wy : lU[bb];
        return "string" === typeof Uy ? Uy : (0, hy.A)(SU.f.get().getCurrentLanguageCode(), Uy.translationKey)
      },
      TU = yb => {
        let {
          glyph: bb,
          family: Wy,
          className: Uy
        } = yb;
        const hy = (0, qb.A)(),
          fy = null !== Wy && void 0 !== Wy ? Wy : hy,
          Zy = (0, hU.d)(fy, bb);
        return (0, py.jsx)("span", {
          className: Fy()("ControllerGlyph", Uy),
          role: "img",
          "aria-label": CU(fy, bb),
          style: {
            "--pad-glyph-mask": `url(${Zy})`,
            "--pad-glyph-aspect": (0, hU.b)(fy, bb)
          }
        })
      };
    var VU = Wy(1546);
    const JU = yb => {
      let {
        action: bb
      } = yb;
      const {
        t: Wy
      } = (0, hy.D)();
      switch (bb.kind) {
        case "reload":
          return (0, py.jsx)("span", {
            children: Wy("controller:gameplayReload")
          });
        case "specialAction":
          return null;
        case "customButton":
          return (0, py.jsx)(VU.d, {
            text: bb.description ? [{
              icon: bb.icon
            }, ` ${bb.description}`] : [{
              icon: bb.icon
            }]
          });
        case "touchButton":
          return (0, py.jsx)(VU.d, {
            text: bb.label
          })
      }
    };
    var gh = Wy(7846);
    const GU = yb => {
      let {
        hold: bb
      } = yb;
      return (0, py.jsx)("div", {
        className: "DropStackFillTrack",
        style: {
          "--pad-drop-stack-hold": `${bb.holdMs}ms`
        },
        children: (0, py.jsx)("div", {
          className: "DropStackFillBar"
        })
      }, bb.id)
    };
    var OU = Wy(7868),
      RU = Wy(7873),
      vh = Wy(7880),
      ih = Wy(7864);
    const MU = () => {
        const {
          gameState: yb
        } = (0, Py.h)(["gameState"]), bb = (0, qb.z)(), [Uy, hy] = (0, Hy.useState)(!1), [fy, Zy] = (0, Hy.useState)(!1);
        return (0, Hy.useEffect)((() => {
          "inGame" === yb && hy(!0)
        }), [yb]), (0, Hy.useEffect)((() => {
          if (!Uy) return;
          let yb = null,
            bb = !1;
          return (qh.q ? Promise.all([Wy.e(63), Wy.e(76), Wy.e(227), Wy.e(203), Wy.e(200), Wy.e(103)]).then((() => Wy(39045))).then((yb => yb.startWasmPadGameplay)) : Promise.all([Wy.e(63), Wy.e(214), Wy.e(213), Wy.e(66), Wy.e(65), Wy.e(64), Wy.e(84), Wy.e(205), Wy.e(173), Wy.e(210), Wy.e(126), Wy.e(182), Wy.e(76), Wy.e(206), Wy.e(221), Wy.e(204), Wy.e(199), Wy.e(104), Wy.e(102), Wy.e(75), Wy.e(106), Wy.e(203), Wy.e(83)]).then((() => Wy(39182))).then((yb => yb.startPadGameplay))).then((Wy => {
            bb || (yb = Wy())
          })).catch((yb => {
            console.error("Pad gameplay failed to load", yb), bb || Zy(!0)
          })), () => {
            var Wy;
            bb = !0, null === (Wy = yb) || void 0 === Wy || Wy()
          }
        }), [Uy]), (0, Hy.useEffect)((() => {
          fy && bb && (Zy(!1), KU.NotificationProvider.showPromptPopup({
            title: "controller:gameplayLoadFailedTitle",
            subtitle: "controller:gameplayLoadFailedSubtitle",
            confirmText: "settingsMenu:reloadPagePopupConfirm",
            confirmTooltip: "",
            cancelText: "general:cancel",
            cancelTooltip: ""
          }).getResult().then((yb => {
            !0 === yb && (0, eU.reloadBloxd)()
          })))
        }), [fy, bb]), (0, py.jsxs)(py.Fragment, {
          children: [(0, py.jsx)(YU, {}), (0, py.jsx)(XU, {}), (0, py.jsx)(nU, {})]
        })
      },
      YU = () => {
        const {
          t: yb
        } = (0, hy.D)(), bb = (0, qb.z)(), {
          gameState: Wy,
          isUiHidden: Uy
        } = (0, Py.h)(["gameState", "isUiHidden"]), {
          hideButtonHints: fy
        } = (0, ey.n)(), Zy = (0, gh.j)(), cb = (0, gh.m)(), [oy, Ky] = (0, Hy.useState)(vh.e);
        return (0, sU.i)(ih.q, Ky), !bb || fy || Uy || "inGame" !== Wy || !Zy && !oy ? null : (0, py.jsxs)("div", {
          className: "PadActionHint SmallTextBold",
          children: [Zy && (0, py.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, py.jsx)(TU, {
              glyph: (0, By.e)("actionButton")
            }), (0, py.jsx)(JU, {
              action: Zy
            }), cb && (0, py.jsx)("span", {
              className: "PadActionHintMore",
              children: yb("controller:gameplayActionWheelHint")
            })]
          }), oy && (0, py.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, py.jsx)(TU, {
              glyph: (0, By.e)("Fq")
            }), (0, py.jsx)("span", {
              children: yb("controller:gameplayPickBlock")
            })]
          })]
        })
      },
      XU = () => {
        const {
          t: yb
        } = (0, hy.D)(), bb = (0, qb.z)(), {
          gameState: Wy,
          isUiHidden: Uy
        } = (0, Py.h)(["gameState", "isUiHidden"]), [fy, Zy] = (0, Hy.useState)(OU.c);
        return (0, sU.i)(ih.n, Zy), bb && !Uy && "inGame" === Wy && fy ? (0, py.jsxs)("div", {
          className: "PadDropStackFill SmallTextBold",
          children: [(0, py.jsx)("span", {
            children: yb("controller:gameplayDropStack")
          }), (0, py.jsx)(GU, {
            hold: fy
          })]
        }) : null
      },
      nU = () => {
        const {
          t: yb
        } = (0, hy.D)(), bb = (0, qb.z)(), {
          gameState: Wy,
          isUiHidden: Uy
        } = (0, Py.h)(["gameState", "isUiHidden"]), {
          hideButtonHints: fy
        } = (0, ey.n)(), [Zy, cb] = (0, Hy.useState)(RU.e);
        return (0, sU.i)(ih.j, cb), bb && !Uy && "inGame" === Wy && Zy ? (0, py.jsxs)("div", {
          className: "PadAttackLatchedHint SmallTextBold",
          children: [!fy && (0, py.jsx)(TU, {
            glyph: (0, By.e)("attack")
          }), (0, py.jsx)("span", {
            children: yb("controller:gameplayAttackLatched")
          })]
        }) : null
      };
    var uU = Wy(7884),
      rh = Wy(1595),
      HU = Wy(2005),
      ah = Wy(7361);
    const FU = yb => yb && !(0, uU.d)(rh.c.get("shopInfo")),
      pU = () => {
        const yb = "inGame" === (0, Py.h)(["gameState"]).gameState;
        return (0, HU.g)("shopInfo", (() => {
          (0, ah.g)(FU(yb))
        })), (0, Hy.useEffect)((() => {
          (0, ah.g)(FU(yb))
        }), [yb]), null
      },
      LU = () => {
        const {
          t: yb
        } = (0, hy.D)(), {
          hideButtonHints: bb
        } = (0, ey.n)();
        (0, qb.A)();
        const Wy = (0, MW.j)();
        return (0, Hy.useEffect)((() => (() => {
          const yb = Ky.b.register({
              name: "inventory",
              isActive: IW.isActive,
              onFrame: IW.onFrame,
              onDeactivate: IW.onDeactivate,
              wakePressActs: IW.wakePressActs
            }),
            bb = yb => {
              IW.noteRealPointer(yb), IW.shouldBlockRealPointer(yb) && yb.stopPropagation()
            };
          for (const Zy of xU) window.addEventListener(Zy, bb, !0);
          const Wy = (0, Db.g)((() => {
              "inventory" !== Ky.b.getActiveConsumerName() && IW.forgetSurface()
            })),
            Uy = yb => {
              const bb = yb.target;
              (0, qb.o)() && Ay(bb) && bb.closest(qU) && (0, Db.d)() && (0, Db.l)(bb)
            };
          document.addEventListener("focusout", Uy, !0);
          const {
            invalidate: hy,
            onScroll: fy
          } = IW.targets;
          return document.addEventListener("scroll", fy, !0), window.addEventListener("resize", hy), () => {
            yb(), Wy();
            for (const yb of xU) window.removeEventListener(yb, bb, !0);
            document.removeEventListener("scroll", fy, !0), document.removeEventListener("focusout", Uy, !0), window.removeEventListener("resize", hy), IW.targets.disconnect()
          }
        })()), []), (0, py.jsxs)(py.Fragment, {
          children: [(0, py.jsx)(Dy, {
            placer: IW.ring,
            className: "InventorySlotCursorRing"
          }), Wy.showing && !bb && (0, py.jsx)("div", {
            className: "InventorySlotCursorHints SmallTextBold",
            children: jW(Wy).map((bb => {
              let {
                actions: Uy,
                labelKey: hy
              } = bb;
              return (0, py.jsxs)("div", {
                className: "InventorySlotCursorHint",
                children: [Uy.map((yb => (0, py.jsx)(TU, {
                  glyph: (0, By.e)(yb)
                }, yb))), (0, py.jsx)("span", {
                  children: yb(`controller:${hy}`)
                }), "inventoryDrop" === hy && Wy.dropStackHold && (0, py.jsx)(GU, {
                  hold: Wy.dropStackHold
                })]
              }, hy)
            }))
          })]
        })
      },
      QU = [{
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
      jh = yb => Array.from(yb).map((yb => ({
        type: "char",
        char: yb,
        width: 1
      }))),
      DU = function(yb) {
        return {
          type: "command",
          command: yb,
          width: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
        }
      },
      th = [DU("page", 2), DU("otherPage"), DU("caretLeft"), DU("space", 3), DU("caretRight"), DU("close", 1.5), DU("submit", 1.5)],
      wU = [DU("page", 2), DU("otherPage"), DU("caretLeft"), DU("space", 2), DU("caretRight"), DU("newline"), DU("close", 1.5), DU("submit", 1.5)],
      kh = [
        [...jh("1234567890"), DU("backspace")], jh("qwertyuiop/"), jh("asdfghjkl'?"), [DU("shift", 2), ...jh("zxcvbnm,.")]
      ],
      NU = [
        [...jh("1234567890"), DU("backspace")], jh("!@#$%^&*()/"), jh('-_=+[]{};:"'), jh("~`|\\<>'\u20ac\xa3,.")
      ],
      zh = {
        letters: kh,
        accents: [
          [...jh("1234567890"), DU("backspace")], jh("\xe1\xe9\xed\xf3\xfa\xe0\xe8\xec\xf2\xf9\xf1"), jh("\xe2\xea\xee\xf4\xfb\xe4\xeb\xef\xf6\xfc\xe7"), [DU("shift", 2), ...jh("\xe3\xf5\xdf\u0153\u011f\u015f\u0131\xbf\xa1")]
        ],
        symbols: NU
      },
      IU = new Set(["de", "es", "fr", "it", "nl", "pt", "pt-BR", "tr", "vi"]),
      xh = (yb, bb) => "letters" === yb ? bb ? {
        page: "accents",
        otherPage: "symbols"
      } : {
        page: "symbols",
        otherPage: "accents"
      } : {
        page: "letters",
        otherPage: "accents" === yb ? "symbols" : "accents"
      },
      AU = function(yb, bb) {
        const Wy = ((yb, bb) => [...zh[yb], bb ? wU : th])(yb, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]);
        if (0 === bb) return Wy;
        const Uy = Math.min(2, dU(Wy[0]) / bb);
        return [Array.from({
          length: bb
        }, ((yb, bb) => ({
          type: "phrase",
          phraseIndex: bb,
          width: Uy
        }))), ...Wy]
      },
      dU = yb => yb.reduce(((yb, bb) => yb + bb.width), 0),
      yf = yb => Math.max(...yb.map(dU)),
      bf = (yb, bb) => {
        const Wy = yb[bb.row];
        let Uy = (yf(yb) - dU(Wy)) / 2;
        for (let hy = 0; hy < bb.col; hy++) Uy += Wy[hy].width;
        return Uy + Wy[bb.col].width / 2
      },
      Wh = (yb, bb, Wy) => {
        let Uy = 0,
          hy = 1 / 0;
        for (let fy = 0; fy < yb[bb].length; fy++) {
          const Zy = Math.abs(bf(yb, {
            row: bb,
            col: fy
          }) - Wy);
          Zy < hy - 1e-9 && (Uy = fy, hy = Zy)
        }
        return Uy
      },
      Uh = (yb, bb) => {
        const Wy = Math.max(0, Math.min(yb.length - 1, bb.row));
        return {
          row: Wy,
          col: Math.max(0, Math.min(yb[Wy].length - 1, bb.col))
        }
      },
      hh = (yb, bb, Wy) => "once" === yb && bb - Wy <= 400 ? "caps" : "off" === yb ? "once" : "off",
      fh = (yb, bb) => "once" === yb && (yb => yb.toLowerCase() !== yb.toUpperCase())(bb) ? "off" : yb,
      Zh = (yb, bb, Wy) => {
        if ("symbols" === bb || "off" === Wy) return yb;
        const Uy = yb.toUpperCase();
        return 1 === Uy.length ? Uy : yb
      };
    var cf = Wy(1490),
      Ph = Wy(7793),
      oh = Wy(7896),
      Bh = Wy(248),
      Kh = Wy(1458),
      eh = Wy(7339);
    const qf = "[data-pad-secondary]",
      sh = yb => yb instanceof HTMLElement && ob(yb) && !Bb(yb),
      Sh = yb => {
        const bb = yb.querySelector(qf);
        if (bb && sh(bb)) return bb;
        for (const hy of null !== (Wy = null === (Uy = yb.parentElement) || void 0 === Uy ? void 0 : Uy.children) && void 0 !== Wy ? Wy : []) {
          var Wy, Uy;
          if (hy !== yb && hy.matches(qf) && sh(hy)) return hy
        }
        return null
      },
      Eh = (yb, bb, Wy, Uy) => Math.max(0, Math.max(yb, Wy) - Math.min(bb, Uy)),
      lh = (yb, bb, Wy, Uy) => Math.max(0, Math.min(bb, Uy) - Math.max(yb, Wy)),
      mf = (yb, bb, Wy) => {
        const Uy = (yb.left + yb.right) / 2,
          hy = (yb.top + yb.bottom) / 2,
          fy = (bb.left + bb.right) / 2,
          Zy = (bb.top + bb.bottom) / 2;
        if ("Left" === Wy || "Right" === Wy) {
          const cb = "Right" === Wy ? 1 : -1;
          return {
            forwardGap: "Right" === Wy ? bb.left - yb.right : yb.left - bb.right,
            centreForward: (fy - Uy) * cb,
            sidewaysGap: Eh(yb.top, yb.bottom, bb.top, bb.bottom),
            sidewaysOverlap: lh(yb.top, yb.bottom, bb.top, bb.bottom),
            centreSideways: Math.abs(Zy - hy),
            startSideways: Math.abs(bb.top - yb.top),
            fromSidewaysSize: yb.bottom - yb.top,
            toSidewaysSize: bb.bottom - bb.top,
            toLength: bb.right - bb.left
          }
        }
        const cb = "Down" === Wy ? 1 : -1;
        return {
          forwardGap: "Down" === Wy ? bb.top - yb.bottom : yb.top - bb.bottom,
          centreForward: (Zy - hy) * cb,
          sidewaysGap: Eh(yb.left, yb.right, bb.left, bb.right),
          sidewaysOverlap: lh(yb.left, yb.right, bb.left, bb.right),
          centreSideways: Math.abs(fy - Uy),
          startSideways: Math.abs(bb.left - yb.left),
          fromSidewaysSize: yb.right - yb.left,
          toSidewaysSize: bb.right - bb.left,
          toLength: bb.bottom - bb.top
        }
      },
      Ch = yb => yb.centreForward > .5 && yb.forwardGap >= -yb.toLength / 2,
      Th = yb => {
        const bb = yb.sidewaysOverlap > 0 ? 0 : 2 * yb.fromSidewaysSize,
          Wy = yb.fromSidewaysSize > 1.5 * yb.toSidewaysSize ? yb.startSideways : yb.centreSideways;
        return Math.max(0, yb.forwardGap) + 3 * yb.sidewaysGap + bb + .1 * Wy
      },
      Vh = (yb, bb) => lh(yb.top, yb.bottom, bb.top, bb.bottom) > 0 || bb.bottom - bb.top > bb.right - bb.left,
      Jh = (yb, bb, Wy, Uy, hy, fy) => {
        const Zy = hy ? Gh(yb, bb, Wy, hy) : new Set,
          cb = Rh(yb, bb, Wy, Zy);
        return cb < 0 && Zy.size > 0 && fy ? gf(yb, bb, Wy, fy) : Uy && cb >= 0 ? Oh(yb, bb, Wy, Uy, cb, Zy) : cb
      },
      gf = (yb, bb, Wy, Uy) => {
        const hy = new Set,
          fy = Rh(yb, bb, "Up", hy) >= 0,
          Zy = Rh(yb, bb, "Down", hy) >= 0,
          cb = new Set;
        return bb.forEach(((bb, Wy) => {
          const hy = bb.top + bb.bottom < yb.top + yb.bottom;
          Uy[Wy] && !(hy ? fy : Zy) || cb.add(Wy)
        })), Rh(yb, bb, Wy, cb)
      },
      Gh = (yb, bb, Wy, Uy) => {
        const hy = new Set;
        return "Left" !== Wy && "Right" !== Wy || bb.forEach(((bb, Wy) => {
          Uy[Wy] && lh(yb.top, yb.bottom, bb.top, bb.bottom) <= 0 && hy.add(Wy)
        })), hy
      },
      Oh = (yb, bb, Wy, Uy, hy, fy) => {
        const Zy = mf(yb, bb[hy], Wy).forwardGap;
        let cb = hy,
          Py = Uy[hy],
          oy = 1 / 0;
        return bb.forEach(((bb, By) => {
          const Ky = Uy[By];
          if (fy.has(By) || Ky < Py || Ky === Py && cb === hy) return;
          const ey = mf(yb, bb, Wy);
          if (!Ch(ey) || ey.forwardGap < 0 || ey.forwardGap >= Zy) return;
          const qb = Th(ey);
          (Ky > Py || qb < oy) && (cb = By, Py = Ky, oy = qb)
        })), cb
      },
      Rh = (yb, bb, Wy, Uy) => {
        let hy = -1,
          fy = 1 / 0;
        if (bb.forEach(((bb, Zy) => {
            const cb = ((yb, bb, Wy) => {
              const Uy = mf(yb, bb, Wy);
              if (!Ch(Uy)) return null;
              const hy = Math.max(0, Uy.forwardGap);
              return Uy.sidewaysOverlap <= 0 && Uy.sidewaysGap > 2 * (hy + 1) ? null : Th(Uy)
            })(yb, bb, Wy);
            null !== cb && cb < fy && !Uy.has(Zy) && (fy = cb, hy = Zy)
          })), hy < 0) return -1;
        const Zy = bb[hy],
          cb = mf(yb, Zy, Wy).forwardGap;
        let Py = cb,
          oy = hy;
        return bb.forEach(((bb, fy) => {
          if (fy === hy || Uy.has(fy) || !((yb, bb, Wy) => {
              const Uy = "Left" === Wy || "Right" === Wy,
                hy = Uy ? lh(yb.top, yb.bottom, bb.top, bb.bottom) : lh(yb.left, yb.right, bb.left, bb.right),
                fy = Uy ? Math.min(yb.bottom - yb.top, bb.bottom - bb.top) : Math.min(yb.right - yb.left, bb.right - bb.left);
              return hy > 0 && hy >= fy / 2
            })(bb, Zy, Wy)) return;
          const By = mf(yb, bb, Wy);
          Ch(By) && By.forwardGap + By.toLength <= cb + 1 && By.forwardGap < Py && (Py = By.forwardGap, oy = fy)
        })), oy
      },
      vf = (yb, bb) => {
        let Wy = -1,
          Uy = 1 / 0;
        return bb.forEach(((bb, hy) => {
          const fy = Math.max(bb.left - yb.x, 0, yb.x - bb.right),
            Zy = Math.max(bb.top - yb.y, 0, yb.y - bb.bottom),
            cb = Math.hypot(fy, Zy);
          cb < Uy && (Uy = cb, Wy = hy)
        })), Wy
      },
      Mh = (yb, bb) => {
        const Wy = Math.min(yb.bottom - yb.top, bb.bottom - bb.top) / 2;
        return Math.abs(yb.top - bb.top) > Wy ? yb.top - bb.top : yb.left - bb.left
      },
      Yh = yb => {
        let bb = -1;
        for (let Wy = 0; Wy < yb.length; Wy++)(bb < 0 || Mh(yb[Wy], yb[bb]) < 0) && (bb = Wy);
        return bb
      };
    var Xh = Wy(7900),
      nh = Wy(7905);
    const uh = yb => {
        if ("death" !== yb || "inGame" !== Py.d.get("gameState") || "off" === (0, ey.g)().quickChat || null === (0, cf.c)()) return !1;
        const bb = (0, By.e)("chat");
        return bb !== (0, By.e)("menuConfirm") && bb !== (0, By.e)("menuBack")
      },
      rf = new Xh.e;
    var Hh = Wy(3569),
      af = Wy(7911);
    const Fh = yb => {
        let bb = null;
        for (const Wy of yb.querySelectorAll("[data-pad-tabs]")) ob(Wy) && (!bb || Number(Wy.dataset.padTabs) < Number(bb.dataset.padTabs)) && (bb = Wy);
        return bb
      },
      ph = (yb, bb, Wy, Uy) => {
        yb.focusWhenFound((() => {
          const hy = yb.pickInitial(bb);
          if (hy && !Wy.has(hy) && (null === Uy || void 0 === Uy || !Uy.contains(hy))) return hy;
          const fy = ((yb, bb) => {
              const Wy = bb => yb.getEnabledCandidates(bb).filter((yb => !yb.closest("[data-pad-tabs]")));
              for (const Uy of mW(bb)) {
                const yb = Wy(Uy);
                if (yb.length > 0) return yb
              }
              return Wy(bb)
            })(yb, bb).filter((yb => !Wy.has(yb))),
            Zy = Yh(fy.map((yb => yb.getBoundingClientRect())));
          return Zy >= 0 ? fy[Zy] : null
        }), 3e3)
      },
      Lh = (yb, bb, Wy, Uy) => {
        var hy;
        const fy = ((yb, bb) => {
          if (0 === yb.length) return null;
          const Wy = yb.findIndex((yb => "true" === yb.dataset.padSelected));
          return Wy < 0 ? bb > 0 ? yb[0] : yb[yb.length - 1] : yb[(Wy + bb + yb.length) % yb.length]
        })([...Wy.querySelectorAll("[data-pad-tab]")].filter((yb => ob(yb) && !Bb(yb))), Uy);
        if (!fy) return;
        const Zy = null !== (hy = null === yb || void 0 === yb ? void 0 : yb.getFocused()) && void 0 !== hy ? hy : null,
          cb = !(null === Zy || void 0 === Zy || !Zy.isConnected) && Wy.contains(Zy),
          Py = yb && !cb ? new Set(yb.getEnabledCandidates(bb)) : null;
        iW(fy), yb && (Py ? ph(yb, bb, Py, Wy) : yb.setFocus(fy, {
          byUser: !0
        }))
      },
      Qh = yb => {
        var bb;
        const Wy = uy(null !== (bb = vb(yb, "x")) && void 0 !== bb ? bb : yb),
          Uy = qW(yb).filter((yb => !Bb(yb))),
          hy = Uy.filter((yb => rb(yb.getBoundingClientRect(), Wy)));
        return (hy.length > 0 ? hy : Uy).sort(((yb, bb) => Mh(yb.getBoundingClientRect(), bb.getBoundingClientRect())))
      },
      jf = (yb, bb, Wy) => {
        const Uy = [...bb.querySelectorAll("[data-pad-row]")].filter(ob),
          hy = yb.getFocused(),
          fy = hy ? Uy.findIndex((yb => yb.contains(hy))) : -1;
        let Zy = 0,
          cb = Wy > 0 ? 0 : Uy.length - 1;
        if (fy >= 0 && hy) Zy = Math.max(0, Qh(Uy[fy]).indexOf(hy)), cb = fy + Wy;
        else if (hy) {
          const yb = hy.getBoundingClientRect(),
            bb = Uy.map((bb => {
              const Uy = bb.getBoundingClientRect();
              return Wy > 0 ? Uy.top >= yb.top : Uy.bottom <= yb.bottom
            }));
          cb = Wy > 0 ? bb.indexOf(!0) : bb.lastIndexOf(!0)
        }
        for (let Py = cb; Py >= 0 && Py < Uy.length; Py += Wy) {
          const bb = Qh(Uy[Py]);
          if (bb.length > 0) return void yb.setFocus(bb[Math.min(Zy, bb.length - 1)], {
            byUser: !0
          })
        }
      },
      Dh = (yb, bb, Wy) => {
        var Uy, hy;
        const fy = null !== (Uy = null === yb || void 0 === yb ? void 0 : yb.getFocused()) && void 0 !== Uy ? Uy : null,
          Zy = null !== fy && void 0 !== fy && fy.closest("[data-pad-row]") ? "x" : "y",
          cb = null !== (hy = fy ? vb(fy, Zy, bb) : null) && void 0 !== hy ? hy : My(bb, Zy);
        if (!cb) return;
        const Py = fy ? Tb(fy) : null;
        if (ny(cb, Zy, Wy * ("y" === Zy ? cb.clientHeight : cb.clientWidth) * .85), !yb || !Py) return;
        const oy = uy(cb),
          By = yb.getEnabledCandidates(bb).filter((yb => cb.contains(yb) && rb(yb.getBoundingClientRect(), oy))),
          Ky = vf(Py, By.map((yb => yb.getBoundingClientRect())));
        Ky >= 0 && yb.setFocus(By[Ky], {
          scroll: !1,
          byUser: !0
        })
      };
    let tf = null;
    const wh = (yb, bb) => {
        var Wy, Uy;
        const hy = bb.querySelector("[data-pad-friends-column]"),
          fy = yb.getFocused();
        if (!hy || !fy || !hy.contains(fy)) return !1;
        const Zy = yb.getEnabledCandidates(bb).filter((yb => !hy.contains(yb))),
          cb = vf(Tb(fy), Zy.map((yb => yb.getBoundingClientRect()))),
          Py = null === (Wy = tf) || void 0 === Wy ? void 0 : Wy.deref();
        return yb.setFocus(null !== Py && void 0 !== Py && Py.isConnected ? Py : null !== (Uy = Zy[cb]) && void 0 !== Uy ? Uy : null, {
          byUser: !0
        }), !0
      },
      kf = yb => {
        const bb = (0, By.e)(yb);
        return (0, sy.J)(bb) || eh.t.some((yb => (0, By.e)(yb) === bb)) ? null : bb
      },
      Nh = (yb, bb) => {
        const Wy = kf(bb);
        return null !== Wy && yb.wasPressed(Wy)
      },
      zf = function(yb, bb, Wy) {
        let Uy = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const hy = (yb => {
            var bb, Wy;
            return null !== (bb = null === (Wy = Fh(yb)) || void 0 === Wy ? void 0 : Wy.querySelector("[data-pad-tab][data-pad-selected='true']")) && void 0 !== bb ? bb : null
          })(bb),
          fy = yb && hy ? new Set(yb.getEnabledCandidates(bb)) : null;
        (0, oh.c)(), Wy === Bh.o.SETTINGS && (0, Kh.l)(Py.d.get("openEverythingMenuName")) ? Py.d.set({
          openEverythingMenuName: Wy
        }) : (0, Kh.r)(new Event("padMenuShortcut"), Wy, Uy), yb && fy && hy && ph(yb, bb, fy, hy.closest("[data-pad-tabs]"))
      },
      Ih = yb => null !== yb.closest(".Dropdown-root") || null !== yb.querySelector(".Dropdown-root.is-open"),
      xf = yb => null !== (0, af.d)() && "popup" !== yb.layer.kind && !Fh(yb.root) && !Ih(yb.root),
      Ah = (0, Sy.b)(sy.ib),
      dh = (0, Sy.b)(sy.ib),
      yZ = (yb, bb, Wy) => {
        if (((yb, bb) => {
            const Wy = (0, By.e)("chat");
            return uh(bb) && yb.isHeld(Wy) ? "hold" === rf.update(yb.wasPressed(Wy), yb.isHeld(Wy), performance.now(), Ey.c[(0, ey.g)().tapHoldTime].wheelMs) && (Ky.b.consumeButton(Wy), oy.g.EZ(nh.p), !0) : (rf.release(), !1)
          })(bb, Wy.layer.kind)) return !0;
        const Uy = Wy.root;
        for (const [Zy, cb] of [
            ["menuTabPrevious", -1],
            ["menuTabNext", 1]
          ])
          if (bb.wasPressed((0, By.e)(Zy))) {
            const bb = Ih(Uy) ? null : Fh(Uy);
            if (bb) Lh(yb, Uy, bb, cb);
            else if (xf(Wy)) {
              var hy;
              const bb = yb ? new Set(yb.getEnabledCandidates(Uy)) : null;
              null !== (hy = (0, af.d)()) && void 0 !== hy && hy(cb) && yb && bb && ph(yb, Uy, bb, null)
            } else yb && jf(yb, Uy, cb);
            return !0
          } for (const [Zy, cb, Py] of [
            ["menuPageUp", -1, Ah],
            ["menuPageDown", 1, dh]
          ]) {
          const Wy = (0, By.e)(Zy);
          if (bb.wasPressed(Wy) && Py.reset(), Py.update(bb.isHeld(Wy), performance.now())) return Dh(yb, Uy, cb), !0
        }
        const fy = "popup" === Wy.layer.kind;
        return Nh(bb, "pause") ? (fy || (0, Kh.q)() && "menu" !== Wy.layer.kind || zf(yb, Uy, (0, Kh.q)() ? Bh.o.SETTINGS : (0, Hh.c)()), !0) : !!Nh(bb, "leaderboard") && ("home" === Wy.layer.kind ? (yb => {
          const bb = [...yb.querySelectorAll("[data-pad-notifications]")].find(ob);
          bb && iW(bb)
        })(Uy) : fy || zf(yb, Uy, Bh.o.LOBBY_LEADERBOARD, "inGame" === Py.d.get("gameState")), !0)
      },
      bZ = (yb, bb, Wy) => {
        if (yZ(yb, bb, Wy)) return !0;
        const Uy = "home" === Wy.layer.kind;
        if (bb.wasPressed((0, By.e)("menuSecondary"))) {
          const bb = yb.getFocused(),
            hy = bb ? Sh(bb) : null;
          if (hy) return iW(hy), !0;
          if (Uy) {
            const bb = Wy.root.querySelector("[data-pad-search] input");
            return bb && lb(bb, Wy.root) ? (yb.setFocus(bb, {
              byUser: !0
            }), iW(bb)) : Py.d.set({
              searchOpen: !0
            }), !0
          }
        }
        return !(!Uy || !Nh(bb, "inventory")) && (((yb, bb) => {
          var Wy, Uy;
          const hy = bb.querySelector("[data-pad-friends-column]");
          if (!hy || !ob(hy)) return void(0, Kh.r)(new Event("padMenuShortcut"), Bh.o.SOCIAL);
          if (wh(yb, bb)) return;
          const fy = null !== (Wy = null === (Uy = hy.querySelector("[data-pad-friends-start]")) || void 0 === Uy ? void 0 : Uy.getBoundingClientRect().top) && void 0 !== Wy ? Wy : -1 / 0,
            Zy = yb.getEnabledCandidates(hy),
            cb = Zy.filter((yb => yb.getBoundingClientRect().top >= fy)),
            Py = cb.length > 0 ? cb : Zy,
            oy = Yh(Py.map((yb => yb.getBoundingClientRect())));
          yb.setFocus(oy >= 0 ? Py[oy] : null, {
            byUser: !0
          })
        })(yb, Wy.root), !0)
      },
      Wf = yb => {
        var bb, Wy, Uy;
        const hy = Fb(yb);
        if (null !== hy) return hy;
        const fy = (null !== (bb = null !== (Wy = null !== (Uy = yb.getAttribute("aria-label")) && void 0 !== Uy ? Uy : yb.getAttribute("title")) && void 0 !== Wy ? Wy : yb.textContent) && void 0 !== bb ? bb : "").replace(/\s+/g, " ").trim();
        return fy ? `${yb.tagName}:${fy.slice(0,100)}` : null
      };
    class Uf {
      constructor() {
        this.remembered = new Map, this.history = []
      }
      enter(yb) {
        const bb = this.history.indexOf(yb);
        if (bb >= 0) {
          for (const yb of this.history.splice(bb + 1)) this.remembered.delete(yb);
          return !0
        }
        return this.remembered.delete(yb), this.history.push(yb), this.history.length > 32 && this.forget(this.history[0]), !1
      }
      forget(yb) {
        this.remembered.delete(yb);
        const bb = this.history.indexOf(yb);
        bb >= 0 && this.history.splice(bb, 1)
      }
      remember(yb, bb, Wy, Uy) {
        const hy = Wf(bb),
          fy = Fb(bb),
          Zy = null !== fy && ((yb, bb) => {
            let Wy = 0;
            for (const Uy of yb.querySelectorAll("[data-pad-key], [href]"))
              if ((Uy.getAttribute("data-pad-key") === bb || Uy.getAttribute("href") === bb) && (Wy++, Wy > 1)) return !0;
            return !1
          })(Wy, fy) ? Math.max(0, this.twins(Uy(), fy).indexOf(bb)) : 0;
        this.remembered.set(yb, {
          element: new WeakRef(bb),
          identity: hy,
          ordinal: Zy
        })
      }
      has(yb) {
        return this.remembered.has(yb)
      }
      recall(yb, bb) {
        var Wy, Uy;
        const hy = this.remembered.get(yb);
        if (!hy) return null;
        const fy = hy.element.deref();
        if (fy && bb.includes(fy)) return fy;
        if (null === hy.identity) return null;
        const Zy = this.twins(bb, hy.identity);
        return null !== (Wy = null !== (Uy = Zy[hy.ordinal]) && void 0 !== Uy ? Uy : Zy[0]) && void 0 !== Wy ? Wy : null
      }
      twins(yb, bb) {
        return yb.filter((yb => Wf(yb) === bb))
      }
    }
    var hf = Wy(1136);
    const ff = yb => {
        const bb = [];
        let Wy = yb;
        for (; Wy && Wy !== document.body;) {
          const yb = getComputedStyle(Wy).zIndex;
          "auto" !== yb && bb.push(Number(yb) || 0), Wy = Wy.parentElement
        }
        return bb.reverse()
      },
      Zf = (yb, bb) => {
        const Wy = ((yb, bb) => {
          const Wy = Math.max(yb.length, bb.length);
          for (let fy = 0; fy < Wy; fy++) {
            var Uy, hy;
            const Wy = (null !== (Uy = yb[fy]) && void 0 !== Uy ? Uy : 0) - (null !== (hy = bb[fy]) && void 0 !== hy ? hy : 0);
            if (0 !== Wy) return Wy
          }
          return 0
        })(ff(yb), ff(bb));
        if (0 !== Wy) return Wy > 0;
        if (yb.contains(bb)) return !1;
        if (bb.contains(yb)) return !0;
        const Uy = yb.compareDocumentPosition(bb);
        return !!(Uy & Node.DOCUMENT_POSITION_PRECEDING) || !(Uy & Node.DOCUMENT_POSITION_FOLLOWING) && null
      },
      cZ = (yb, bb) => {
        var Wy;
        return null !== (Wy = Zf(yb.root, bb.root)) && void 0 !== Wy ? Wy : yb.order > bb.order
      },
      Pf = (yb, bb) => bb.some((bb => !bb.contains(yb) && !yb.contains(bb) && !0 === Zf(bb, yb)));
    let of = null, Bf = null, Kf = -1;
    const ef = () => {
        var yb;
        const bb = null === (yb = document.timeline) || void 0 === yb ? void 0 : yb.currentTime,
          Wy = "number" === typeof bb ? bb : null;
        if (null !== Wy && Wy === Bf && Kf === (0, hf.e)()) return of;
        let Uy = null;
        const hy = [],
          fy = [...document.querySelectorAll("[data-pad-covers]")].filter(ob);
        for (const Zy of (0, hf.i)()) {
          const yb = Zy.getRoot(),
            bb = !!yb && ob(yb) && !Pf(yb, fy);
          if (Zy.shown && !bb && hy.push(Zy), Zy.shown = bb, !yb || !bb) continue;
          const Wy = {
            layer: Zy,
            root: yb,
            order: Zy.order
          };
          Uy && !cZ(Wy, Uy) || (Uy = Wy)
        }
        of = Uy, Bf = Wy, Kf = (0, hf.e)();
        for (const Zy of hy)(0, hf.m)(Zy);
        return of
      },
      qZ = () => {
        const yb = ef();
        return !(null === yb || void 0 === yb || !yb.layer.close) && (yb.layer.close(), Bf = null, !0)
      },
      sf = () => {
        var yb, bb;
        return null !== (yb = null === (bb = ef()) || void 0 === bb ? void 0 : bb.root) && void 0 !== yb ? yb : null
      },
      Sf = yb => yb ? {
        ...yb,
        root: sf()
      } : null;
    let Ef = null,
      lf = null,
      mZ = (0, ey.g)().menuNavigation,
      Cf = null;
    const Tf = new Vy;
    let Vf = null;
    oy.g.subscribe(ey.e, (() => {
      const yb = (0, ey.g)().menuNavigation;
      yb !== mZ && (mZ = yb, Ef = null, lf = null)
    }));
    const Jf = () => {
        var yb;
        return null !== (yb = Ef) && void 0 !== yb ? yb : (0, ey.g)().menuNavigation
      },
      gZ = yb => {
        if (vZ()) {
          if (Cf = Sf(yb), "hybrid" === Jf()) return Tf.lock(), void(lf = lf ? null : sf());
          Ef = "focus" === Jf() ? "cursor" : "focus"
        }
      },
      Gf = () => {
        const yb = Cf;
        return Cf = null, yb
      };
    let Of = {
      root: null,
      firstSeenMs: -1 / 0,
      atMs: -1 / 0,
      has: !1
    };
    const Rf = function(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const Wy = Of.root === yb,
          Uy = Wy ? Of.firstSeenMs : bb,
          hy = Of.has || bb - Uy > 1e3;
        return (!Wy || !hy || bb - Of.atMs > 250) && (Of = {
          root: yb,
          firstSeenMs: Uy,
          atMs: bb,
          has: Sb(yb)
        }), Of.has
      },
      vZ = () => {
        const yb = sf();
        return null !== yb && Rf(yb)
      },
      iZ = () => {
        const yb = ef();
        return lf && (null === yb || void 0 === yb ? void 0 : yb.root) !== lf && (lf = null), (yb => {
          let {
            mode: bb,
            hasLayer: Wy,
            hasCandidates: Uy,
            hybridCursorEngaged: hy
          } = yb;
          return Wy ? "cursor" !== bb && Uy() ? "hybrid" === bb && hy ? "cursor" : "focus" : "cursor" : null
        })({
          mode: Jf(),
          hasLayer: null !== yb,
          hasCandidates: () => null !== yb && Rf(yb.root),
          hybridCursorEngaged: null !== lf
        })
      },
      Mf = () => "hybrid" === Jf() && vZ(),
      Yf = "pad-focused";
    var Xf = Wy(3748),
      nf = Wy(4229);
    const uf = "[data-pad-destructive]",
      rZ = `${uf}, [data-pad-back]`,
      Hf = yb => ({
        rect: yb.getBoundingClientRect(),
        destructive: yb.matches(uf),
        closes: null !== yb.closest("[data-pad-close-button]"),
        unavailable: yb.matches("[data-pad-unavailable]")
      }),
      aZ = yb => {
        let {
          destructive: bb,
          closes: Wy,
          unavailable: Uy
        } = yb;
        return bb ? Wy ? 2 : 3 : Uy ? 1 : 0
      },
      Ff = yb => {
        let bb = -1;
        for (let Wy = 0; Wy < yb.length; Wy++) {
          if (bb < 0) {
            bb = Wy;
            continue
          }
          const Uy = yb[Wy],
            hy = yb[bb];
          aZ(Uy) === aZ(hy) ? Mh(Uy.rect, hy.rect) < 0 && (bb = Wy) : aZ(Uy) < aZ(hy) && (bb = Wy)
        }
        return bb
      },
      pf = "[data-pad-tabs]",
      Lf = "[data-pad-tab]",
      Qf = (yb, bb) => {
        const Wy = yb.querySelector(`${Lf}[data-pad-selected='true']`);
        return Wy && bb.includes(Wy) ? Wy : null
      },
      jZ = (yb, bb) => {
        let Wy = bb;
        for (let Uy = bb.parentElement; Uy && !Uy.contains(yb); Uy = Uy.parentElement) Wy = Uy;
        return Wy
      };
    class Df {
      constructor() {
        this.contentReturn = null
      }
      redirect(yb, bb, Wy, Uy) {
        var hy, fy;
        const Zy = yb.closest(pf),
          cb = bb.closest(pf);
        var Py;
        if (cb && cb !== Zy) return Zy || (this.contentReturn = new WeakRef(yb)), null !== (Py = Qf(cb, Wy)) && void 0 !== Py ? Py : bb;
        if (!Zy || cb) return bb;
        const oy = jZ(yb, bb),
          By = null === (hy = this.contentReturn) || void 0 === hy ? void 0 : hy.deref();
        return By && oy.contains(By) && Wy.includes(By) ? By : null !== (fy = this.pickRegionStart(oy, vb(bb, "y", Uy), Wy)) && void 0 !== fy ? fy : bb
      }
      findTabContent(yb, bb, Wy) {
        const Uy = yb.closest(pf);
        if (!Uy || !yb.matches(Lf) || Uy.contains(bb)) return null;
        const hy = bb.closest(pf);
        if (hy && Number(hy.dataset.padTabs) <= Number(Uy.dataset.padTabs)) return null;
        const fy = jZ(yb, bb);
        return Wy.some((yb => fy.contains(yb) && !yb.closest(rZ))) || !bb.closest(rZ) ? fy : null
      }
      pickContentStart(yb, bb, Wy) {
        return this.contentReturn = null, this.pickRegionStart(yb, vb(yb, "y", Wy), bb)
      }
      pickReplacedContentStart(yb, bb, Wy, Uy) {
        if (!bb.contains(yb)) return null;
        const hy = jZ(bb, yb),
          fy = Wy.filter((yb => bb.contains(yb) && !hy.contains(yb) && !yb.closest(rZ)));
        return 0 === fy.length ? null : (this.contentReturn = null, this.pickRegionStart(bb, vb(fy[0], "y", Uy), fy))
      }
      backToStrip(yb, bb, Wy) {
        if (yb.closest(pf)) return null;
        const Uy = Fh(Wy);
        for (const hy of Wy.querySelectorAll(pf)) {
          if (Number(hy.dataset.padTabs) <= 1 || hy === Uy) continue;
          const fy = Qf(hy, bb),
            Zy = fy ? jZ(yb, hy).parentElement : null;
          if (fy && Zy && Zy !== Wy && Wy.contains(Zy)) return this.contentReturn = new WeakRef(yb), fy
        }
        return null
      }
      pickRegionStart(yb, bb, Wy) {
        const Uy = uy(bb),
          hy = yb => {
            const bb = Wy.filter((bb => yb.contains(bb) && !bb.closest(pf) && rb(bb.getBoundingClientRect(), Uy))),
              hy = Ff(bb.map(Hf));
            return hy >= 0 ? bb[hy] : null
          };
        for (const fy of mW(yb)) {
          const yb = hy(fy);
          if (yb) return yb
        }
        for (const fy of yb.querySelectorAll(pf)) {
          const yb = Qf(fy, Wy);
          if (yb) return yb
        }
        return hy(yb)
      }
    }
    const tZ = "[data-pad-default-focus], .Dropdown-option.is-selected",
      wf = ".Dropdown-root.is-open > .Dropdown-menu",
      kZ = "[data-pad-no-step-in]",
      Nf = "[data-pad-tabs]",
      zZ = "[data-pad-press-area]",
      If = yb => {
        let bb = yb;
        for (let Wy = 0; bb && Wy <= 4; Wy++, bb = bb.parentElement) {
          const Wy = bb.querySelector(".CircleInfo");
          if (Wy) return bb === yb || bb.querySelectorAll(cW).length <= 1 ? Wy : null;
          if (bb !== yb && bb.querySelectorAll(cW).length > 1) return null
        }
        return null
      },
      xZ = (yb, bb, Wy) => {
        Rb(yb, bb, Wy);
        const Uy = null !== yb && void 0 !== yb && yb.isConnected ? If(yb) : null,
          hy = If(bb);
        Uy !== hy && Rb(Uy, hy, hy ? Tb(hy) : Wy, {
          leaveBelow: yb,
          enterBelow: bb
        })
      },
      Af = yb => yb.getBoundingClientRect(),
      df = (yb, bb, Wy) => {
        const Uy = new Set(Wy);
        for (let hy = yb; hy; hy = hy === bb ? null : hy.parentElement)
          if (Uy.has(hy)) return hy;
        return null
      },
      yc = (yb, bb) => !yb.root || yb.root === bb || bb.matches(wf) && yb.root.contains(bb);
    const bc = new class {
        constructor() {
          this.focused = null, this.layerKey = null, this.layerRoot = null, this.memory = new Uf, this.tabStripNav = new Df, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.confirmPressedOn = null, this.confirmRepeatKey = null, this.confirmRepeated = !1, this.confirmRepeat = (0, Sy.b)(sy.t), this.dpadRepeats = new Map(sy.D.map((yb => [yb, (0, Sy.b)(sy.H)]))), this.stickRepeat = new sy.b((0, Sy.b)(sy.nb)), this.lastRefocusCheckMs = -1 / 0, this.enteredLayerAtMs = 0, this.lastFocusedCentre = null, this.lastActivatedKey = null, this.lastActivated = null, this.lastActivatedAtMs = -1 / 0, this.pendingFocus = null, this.tabOpenWait = null, this.retryMove = null, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.wasActive = !1, this.layerKind = null, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.listeners = new Set, this.dropdownLayers = new WeakMap, this.dropdownLayerCounter = 0
        }
        install() {
          const yb = Ky.b.register({
              name: "focus",
              isActive: () => (0, qb.o)() && "focus" === iZ(),
              onFrame: yb => {
                this.onFrame(yb)
              },
              onDeactivate: () => {
                this.deactivate()
              },
              wakePressActs: yb => (0, Ky.d)(yb) || yb === (0, By.e)("menuConfirm") && rW((0, qb.e)())
            }),
            bb = (0, hf.n)((yb => {
              const bb = (0, hf.t)(yb);
              null === yb.memoryKey && this.memory.forget(bb), bb === this.layerKey && (this.layerKey = null)
            }));
          let Wy = -1 / 0;
          const Uy = Zy.f.onFrame((yb => {
              (0, qb.o)() || yb.timestampMs - Wy < 100 || (Wy = yb.timestampMs, ef())
            })),
            hy = yb => {
              yb.isTrusted && yb.target instanceof Element && Zy.f.getActivePad() && this.noteChosenStop(yb.target)
            };
          return document.addEventListener("click", hy, !0), () => {
            yb(), bb(), Uy(), document.removeEventListener("click", hy, !0), this.deactivate()
          }
        }
        noteChosenStop(yb) {
          var bb, Wy;
          const Uy = ef();
          if (!Uy || !Uy.root.contains(yb)) return;
          const hy = null !== (bb = null === (Wy = yb.closest(".Dropdown-root")) || void 0 === Wy ? void 0 : Wy.querySelector(".Dropdown-control")) && void 0 !== bb ? bb : yb,
            fy = df(hy, Uy.root, this.getEnabledCandidates(Uy.root));
          if (!fy) return;
          const Zy = (0, hf.t)(Uy.layer);
          Zy === this.layerKey && Uy.root === this.layerRoot || this.beginLayer(Uy, Zy), this.wasActive ? this.setFocus(fy, {
            scroll: !1,
            byUser: !0
          }) : (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.focused = fy, this.lastFocusedCentre = Tb(fy), this.rememberFocus(fy), this.notify())
        }
        getFocused() {
          return this.focused
        }
        isActive() {
          return this.wasActive
        }
        onChange(yb) {
          return this.listeners.add(yb), () => {
            this.listeners.delete(yb)
          }
        }
        notify() {
          for (const yb of this.listeners) yb()
        }
        deactivate() {
          var yb;
          if (this.wasActive) {
            this.wasActive = !1, this.layerKind = null, this.confirmPressedOn = null, this.retryMove = null, this.pendingFocus = null;
            for (const yb of this.dpadRepeats.values()) yb.reset();
            this.stickRepeat.reset(), null !== (yb = this.focused) && void 0 !== yb && yb.isConnected && xZ(this.focused, null, Tb(this.focused)), this.notify()
          }
        }
        setFocus(yb) {
          var bb;
          let {
            scroll: Wy = !0,
            byUser: Uy = !1
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (Uy && (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1), yb === this.focused) return;
          const hy = null !== (bb = this.focused) && void 0 !== bb && bb.isConnected ? this.focused : null;
          if (this.focused = yb, yb) {
            Wy && (yb.classList.add(Yf), yb.scrollIntoView({
              block: "nearest",
              inline: "nearest",
              behavior: "instant"
            })), Uy && ((yb, bb) => {
              const Wy = bb.closest("[data-pad-friends-column]");
              Wy && yb && !Wy.contains(yb) && (tf = new WeakRef(yb))
            })(hy, yb);
            const bb = Tb(yb);
            this.lastFocusedCentre = bb, this.movedInLayer && this.rememberFocus(yb), xZ(hy, yb, bb), "false" === yb.getAttribute("aria-pressed") && yb.closest("[data-pad-select-on-focus]") && iW(yb)
          } else hy && xZ(hy, null, Tb(hy));
          this.notify()
        }
        rememberFocus(yb) {
          const bb = this.layerRoot;
          this.layerKey && bb && this.memory.remember(this.layerKey, yb, bb, (() => this.getEnabledCandidates(bb)))
        }
        noteCursorActivation(yb) {
          const bb = ef();
          if (!bb || !bb.root.contains(yb)) return;
          const Wy = this.getEnabledCandidates(bb.root),
            Uy = new Set(Wy);
          let hy = yb;
          for (; hy && !Uy.has(hy);) hy = hy === bb.root ? null : hy.parentElement;
          if (!(hy instanceof HTMLElement)) return;
          const fy = (0, hf.t)(bb.layer);
          this.memory.enter(fy), this.memory.remember(fy, hy, bb.root, (() => Wy))
        }
        notePageEnteredByCursor(yb) {
          return this.memory.enter(yb)
        }
        recallStop(yb, bb) {
          return this.findRemembered(yb, bb)
        }
        focusWhenFound(yb) {
          let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
            Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
          this.pendingFocus = {
            find: yb,
            untilMs: performance.now() + bb,
            holdWhile: Wy
          }
        }
        getEnabledCandidates(yb) {
          return qW(yb).filter((yb => !Bb(yb)))
        }
        onFrame(yb) {
          var bb;
          const Wy = ef();
          if (!Wy) return;
          const Uy = null !== (bb = this.findOpenDropdown(Wy)) && void 0 !== bb ? bb : Wy,
            hy = performance.now(),
            fy = (0, hf.t)(Uy.layer);
          if (fy !== this.layerKey || Uy.root !== this.layerRoot) {
            const bb = this.focused;
            if (null !== this.layerKey && Uy.root === this.layerRoot && bb && lb(bb, Uy.root)) this.continueLayer(fy, bb), this.wasActive || this.resume(Uy.root, hy);
            else {
              const bb = !this.wasActive && !yb.wokeDevice,
                Zy = "death" === this.layerKind || bb,
                cb = this.enterLayer(Uy, fy);
              "popup" !== Uy.layer.kind || Uy !== Wy || cb ? "menu" === Uy.layer.kind && Zy && "inGame" === Py.d.get("gameState") && !(0, oh.d)(3e3) && (this.pressGuardExtends = !0, this.pressGuardUntilMs = hy + Xf.e) : (this.pressGuardExtends = bb, this.pressGuardUntilMs = hy + (bb ? Xf.e : Zy ? 500 : 250))
            }
          } else this.wasActive || this.resume(Uy.root, hy);
          if (this.layerKind = Uy.layer.kind, this.wasActive || (this.wasActive = !0, this.notify()), yb.wokeDevice && this.focusPointedStop(Uy.root), this.validateFocus(Uy, hy), hy < this.pressGuardUntilMs && this.pressGuardExtends && (yb.wasPressed((0, By.e)("menuConfirm")) || yb.wasPressed((0, By.e)("menuBack"))) && (this.pressGuardUntilMs = hy + Xf.e), hy >= this.pressGuardUntilMs && this.handleButtons(yb, Uy)) return;
          const Zy = "hybrid" === Jf();
          if (Zy && (yb => {
              const bb = sf();
              return bb !== Vf && (Vf = bb, Tf.lock()), Tf.update(yb, (0, ey.g)().moveDeadzone)
            })(yb.leftStick)) return cb = this.getHandoff(), Cf = Sf(cb), lf = sf(), void Ky.b.handOffHeldInput();
          var cb;
          this.handleDirections(yb, Uy, hy, !Zy), this.handleScroll(yb, Uy)
        }
        findOpenDropdown(yb) {
          const bb = yb.root.querySelector(wf);
          if (!bb || !ob(bb)) return null;
          let Wy = this.dropdownLayers.get(bb);
          return Wy || (this.dropdownLayerCounter++, Wy = {
            id: `dropdown-${this.dropdownLayerCounter}`,
            kind: yb.layer.kind,
            getRoot: () => bb,
            close: () => {
              Xb(bb)
            },
            memoryKey: null
          }, this.dropdownLayers.set(bb, Wy)), {
            layer: Wy,
            root: bb,
            order: yb.order
          }
        }
        focusPointedStop(yb) {
          const bb = (0, qb.e)(),
            Wy = bb ? document.elementFromPoint(bb.x, bb.y) : null;
          if (!Wy || !yb.contains(Wy)) return;
          const Uy = df(Wy, yb, this.getEnabledCandidates(yb));
          Uy && this.setFocus(Uy, {
            scroll: !1,
            byUser: !0
          })
        }
        enterLayer(yb, bb) {
          const Wy = this.beginLayer(yb, bb),
            Uy = Gf();
          return Uy && yc(Uy, yb.root) ? (this.takeOver(yb.root, Uy, this.enteredLayerAtMs), Wy) : (this.restoreLayerFocus(yb.root, Wy), Wy)
        }
        beginLayer(yb, bb) {
          return this.layerKey = bb, this.layerRoot = yb.root, this.lastActivatedKey = null, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoreOnFocusLoss = !1, this.retryMove = null, this.pendingFocus = null, this.confirmPressedOn = null, this.lastRefocusCheckMs = -1 / 0, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.enteredLayerAtMs = performance.now(), this.lastFocusedCentre = null, this.memory.enter(bb)
        }
        restoreLayerFocus(yb, bb) {
          const Wy = bb && this.layerKey ? this.findRemembered(yb, this.layerKey) : null;
          this.restoredFromMemory = null !== Wy, this.setFocus(null !== Wy && void 0 !== Wy ? Wy : this.pickInitial(yb, {
            waitForContent: !0
          }))
        }
        continueLayer(yb, bb) {
          this.layerKey = yb;
          const Wy = this.memory.enter(yb);
          this.restoreOnFocusLoss = Wy, this.movedInLayer && !Wy && this.rememberFocus(bb)
        }
        resume(yb, bb) {
          var Wy;
          const Uy = Gf();
          Uy && yc(Uy, yb) ? this.takeOver(yb, Uy, bb) : null !== (Wy = this.focused) && void 0 !== Wy && Wy.isConnected && xZ(null, this.focused, Tb(this.focused))
        }
        pickPreferred(yb) {
          var bb;
          return null !== (bb = this.layerKey ? this.findRemembered(yb, this.layerKey) : null) && void 0 !== bb ? bb : this.pickInitial(yb, {
            waitForContent: !0
          })
        }
        findRemembered(yb, bb) {
          return this.memory.has(bb) ? this.memory.recall(bb, this.getEnabledCandidates(yb)) : null
        }
        getHandoff() {
          var yb, bb, Wy;
          const Uy = null !== (yb = this.focused) && void 0 !== yb && yb.isConnected ? this.focused : null,
            hy = null !== (bb = this.layerRoot) && void 0 !== bb && bb.isConnected ? this.layerRoot : null;
          return {
            point: Uy ? Tb(Uy) : null !== (Wy = this.lastFocusedCentre) && void 0 !== Wy ? Wy : this.getLayerStartPoint(hy),
            element: Uy,
            direction: null
          }
        }
        getLayerStartPoint(yb) {
          if (!yb) return {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          };
          const bb = this.pickInitial(yb, {
            includeDisabled: !0
          });
          return Tb(null !== bb && void 0 !== bb ? bb : yb)
        }
        takeOver(yb, bb, Wy) {
          const {
            element: Uy,
            direction: hy,
            point: fy
          } = bb, Zy = Uy instanceof HTMLElement && lb(Uy, yb) ? Uy : null;
          if (!hy) {
            const bb = this.focused;
            return Zy ? this.setFocus(Zy, {
              scroll: !1,
              byUser: !0
            }) : this.focusNearest(yb, fy), void(this.focused && this.focused === bb && this.focused.isConnected && xZ(null, this.focused, Tb(this.focused)))
          }
          if (this.dpadRepeats.get(hy).update(!0, Wy), Zy) return this.setFocus(Zy, {
            scroll: !1,
            byUser: !0
          }), void this.move(yb, hy, Wy, !0);
          const cb = this.getEnabledCandidates(yb),
            Py = cb.map(Af),
            oy = Jh(new DOMRect(fy.x, fy.y, 0, 0), Py, hy),
            By = oy >= 0 ? oy : vf(fy, Py);
          this.setFocus(By >= 0 ? cb[By] : this.pickInitial(yb), {
            byUser: !0
          })
        }
        focusNearest(yb, bb) {
          const Wy = this.getEnabledCandidates(yb),
            Uy = vf(bb, Wy.map(Af));
          this.setFocus(Uy >= 0 ? Wy[Uy] : this.pickInitial(yb), {
            byUser: !0
          })
        }
        pickDefault(yb) {
          let {
            includeDisabled: bb = !1,
            exclude: Wy = null
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const Uy = [...yb.querySelectorAll(tZ)].filter((Uy => (null === Wy || void 0 === Wy || !Wy.has(Uy)) && (bb ? Eb(Uy, yb) : lb(Uy, yb)))),
            hy = Ff(Uy.map(Hf));
          return hy >= 0 ? Uy[hy] : null
        }
        pickNewAreaStart(yb, bb) {
          const Wy = [...yb.querySelectorAll(zZ)].filter(ob);
          for (const Uy of [...mW(yb), ...Wy]) {
            if (bb.has(Uy)) continue;
            const yb = this.getEnabledCandidates(Uy),
              Wy = Ff(yb.map(Hf));
            if (Wy >= 0) return yb[Wy]
          }
          return null
        }
        pickInitial(yb) {
          let {
            includeDisabled: bb = !1,
            waitForContent: Wy = !1,
            enteredAtMs: Uy = this.enteredLayerAtMs
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const hy = this.pickDefault(yb, {
            includeDisabled: bb
          });
          if (hy) return hy;
          const fy = yb => bb ? qW(yb) : this.getEnabledCandidates(yb);
          let Zy = [];
          for (const ey of mW(yb))
            if (Zy = fy(ey), Zy.length > 0) break;
          if (0 === Zy.length) {
            if (Wy && performance.now() - Uy < 1e4 && (yb => {
                for (const bb of yb.querySelectorAll("[data-pad-initial-area]"))
                  if (!Pb(bb, !1)) return !0;
                return !1
              })(yb)) return null;
            Zy = fy(yb)
          }
          const cb = Zy.map(Af),
            Py = uy(null),
            oy = Zy.filter(((yb, bb) => rb(cb[bb], Py))),
            By = oy.length > 0 ? oy : Zy,
            Ky = Ff(By.map(Hf));
          return Ky >= 0 ? By[Ky] : null
        }
        validateFocus(yb, bb) {
          if (this.pendingFocus) {
            var Wy, Uy;
            const hy = this.pendingFocus.find();
            if (hy && lb(hy, yb.root)) return this.pendingFocus = null, void this.setFocus(hy, {
              byUser: !0
            });
            bb > this.pendingFocus.untilMs && (null === (Wy = (Uy = this.pendingFocus).holdWhile) || void 0 === Wy || !Wy.call(Uy)) && (this.pendingFocus = null)
          }
          const hy = this.focused,
            fy = !!hy && lb(hy, yb.root);
          if (!(!fy && hy && hy === this.lastActivated && bb - this.lastActivatedAtMs < 5e3 && yb.root.contains(hy) && ob(hy) && Bb(hy))) {
            if (!fy && this.restoreOnFocusLoss && this.layerKey) return this.restoreOnFocusLoss = !1, this.movedInLayer = !1, this.scrolledInLayer = !1, this.enteredLayerAtMs = bb, void this.restoreLayerFocus(yb.root, !0);
            if ((!fy || !this.movedInLayer && !this.scrolledInLayer) && !(bb - this.lastRefocusCheckMs < (fy ? 200 : 50)))
              if (this.lastRefocusCheckMs = bb, fy) {
                const Wy = bb - this.enteredLayerAtMs < 15e3 ? this.pickPreferred(yb.root) : null,
                  Uy = null !== Wy && void 0 !== Wy ? Wy : this.restoredFromMemory ? null : this.pickDefault(yb.root);
                Uy && Uy !== hy && this.setFocus(Uy)
              } else {
                if (this.lastFocusedCentre && this.movedInLayer) {
                  const bb = this.pendingFocus;
                  return this.focusNearest(yb.root, this.lastFocusedCentre), void(this.pendingFocus = bb)
                }
                this.setFocus(this.pickPreferred(yb.root))
              }
          }
        }
        handleButtons(yb, bb) {
          if (yb.wasPressed((0, By.e)("menuToggleCursor"))) return gZ(this.getHandoff()), !0;
          if (yb.wasPressed((0, By.e)("menuBack"))) {
            const yb = Xb(bb.root);
            return yb ? this.setFocus(yb, {
              byUser: !0
            }) : wh(this, bb.root) || (aW(bb.root) ? this.returnToOpener(bb.root) : this.backToStrip(bb.root) || qZ()), !0
          }
          const Wy = (0, By.e)("menuConfirm");
          var Uy, hy;
          yb.wasPressed(Wy) && (this.confirmPressedOn = this.focused, this.confirmRepeatKey = null !== (Uy = null === (hy = this.focused) || void 0 === hy ? void 0 : hy.getAttribute("data-pad-repeat")) && void 0 !== Uy ? Uy : null, this.confirmRepeated = yb.wokeDevice, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now()));
          if (yb.wasReleased(Wy)) {
            const yb = this.confirmPressedOn;
            if (this.confirmPressedOn = null, yb && !this.confirmRepeated && yb === this.focused && yb.isConnected && !Bb(yb)) {
              const Wy = yb.matches("[data-pad-tab]") ? yb.closest(Nf) : null;
              Wy ? this.enterTab(yb, Wy, bb.root, performance.now()) : this.activate(yb)
            }
            return !0
          }
          return this.repeatConfirm(yb, Wy), bZ(this, yb, bb)
        }
        repeatConfirm(yb, bb) {
          const Wy = this.confirmPressedOn;
          Wy && null !== this.confirmRepeatKey && yb.isHeld(bb) && (Wy === this.focused && Wy.isConnected && !Bb(Wy) && Wy.getAttribute("data-pad-repeat") === this.confirmRepeatKey ? Wy.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.confirmRepeated = !0, this.activate(Wy)) : this.confirmRepeatKey = null)
        }
        backToStrip(yb) {
          const bb = this.focused;
          if (!(0, ey.g)().menuBackToCategories) return !1;
          const Wy = null !== bb && void 0 !== bb && bb.isConnected ? this.tabStripNav.backToStrip(bb, this.getEnabledCandidates(yb), yb) : null;
          return Wy && this.setFocus(Wy, {
            byUser: !0
          }), null !== Wy
        }
        returnToOpener(yb) {
          const bb = this.lastActivatedKey;
          bb && (this.lastActivatedKey = null, this.focusWhenFound((() => {
            var Wy;
            return null !== (Wy = this.getEnabledCandidates(yb).find((yb => Fb(yb) === bb))) && void 0 !== Wy ? Wy : null
          })))
        }
        activate(yb) {
          var bb;
          if ((0, nf.d)(yb) || ub(yb)) return;
          this.lastActivatedKey = null !== (bb = Fb(yb)) && void 0 !== bb ? bb : this.lastActivatedKey, this.lastActivated = yb, this.lastActivatedAtMs = performance.now(), this.rememberFocus(yb);
          const Wy = this.layerRoot;
          if (Wy) {
            const bb = new Set(Wy.querySelectorAll(tZ)),
              Uy = new Set(Wy.querySelectorAll(`[data-pad-initial-area], ${zZ}`)),
              hy = this.lastActivatedAtMs;
            this.focusWhenFound((() => {
              var hy;
              return lb(yb, Wy) ? null : null !== (hy = this.pickDefault(Wy, {
                exclude: bb
              })) && void 0 !== hy ? hy : this.pickNewAreaStart(Wy, Uy)
            }), 5e3, (() => yb.isConnected && Bb(yb) && performance.now() - hy < 6e4))
          }
          iW(yb), nb(yb)
        }
        handleDirections(yb, bb, Wy, Uy) {
          const hy = uh(bb.layer.kind) ? (0, By.e)("chat") : null;
          for (const cb of sy.D) {
            this.dpadRepeats.get(cb).update(yb.isHeld(cb), Wy) && (cb !== hy || yb.wasPressed(cb)) && this.move(bb.root, cb, Wy, !0)
          }
          const fy = Uy ? (0, sy.k)(yb.leftStick, (0, ey.g)().moveDeadzone) : {
              x: 0,
              y: 0
            },
            Zy = this.stickRepeat.update((0, sy.qb)(fy), Wy);
          if (Zy && this.move(bb.root, Zy, Wy, !0), this.retryMove && Wy >= this.retryMove.atMs) {
            const {
              direction: yb
            } = this.retryMove;
            this.retryMove = null, this.move(bb.root, yb, Wy, !1)
          }
        }
        move(yb, bb, Wy, Uy) {
          var hy;
          let fy = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          if (this.pendingFocus && this.pendingFocus === (null === (hy = this.tabOpenWait) || void 0 === hy ? void 0 : hy.wait) && bb === this.tabOpenWait.direction) return;
          this.pendingFocus = null;
          const Zy = this.focused;
          if (!Zy || !Zy.isConnected) {
            const bb = this.pickInitial(yb);
            return void(bb && this.setFocus(bb, {
              byUser: !0
            }))
          }
          const cb = "Left" === bb || "Right" === bb,
            Py = cb ? (0, nf.d)(Zy) : null;
          if (Py) return void Py.adjust("Left" === bb ? -1 : 1);
          const oy = yb => null !== yb.closest("[data-pad-friends-column]"),
            By = oy(Zy),
            Ky = Af(Zy),
            ey = cb || Zy.closest(Nf) ? null : (yb => {
              const bb = new Map;
              return Wy => {
                const Uy = Wy.closest(Nf);
                if (!Uy) return !1;
                let hy = bb.get(Uy);
                if (void 0 === hy) {
                  const Wy = Af(Uy);
                  hy = Vh(yb, Wy) && (Wy.right <= yb.left || Wy.left >= yb.right), bb.set(Uy, hy)
                }
                return hy
              }
            })(Ky),
            qb = null !== Zy.closest(kZ),
            sy = this.getEnabledCandidates(yb).filter((yb => yb !== Zy && (cb || oy(yb) === By) && !(null !== ey && void 0 !== ey && ey(yb)) && (qb || !yb.closest(kZ)))),
            Sy = sy.map(Af),
            Ey = vb(Zy, "y", yb),
            ly = uy(Ey);
          if (!fy && !rb(Ky, ly)) {
            const yb = sy.filter(((yb, bb) => rb(Sy[bb], ly)));
            if (yb.length > 0) {
              const bb = {
                x: ly.left + ly.width / 2,
                y: ly.top + ly.height / 2
              };
              return void this.setFocus(yb[vf(bb, yb.map(Af))], {
                byUser: !0
              })
            }
          }
          const mb = cb ? ((yb, bb, Wy) => {
              const Uy = Af(yb),
                hy = yb.closest(Nf),
                fy = hy ? Af(hy) : null;
              return bb.map(((bb, Zy) => {
                const cb = Wy[Zy];
                if (cb.bottom > Uy.top && cb.top < Uy.bottom) return !0;
                const Py = bb.closest(Nf);
                if (hy && fy) return Py !== hy && (null !== Py || cb.bottom <= fy.top || cb.top >= fy.bottom);
                if (Py) return !Vh(Uy, Af(Py));
                let oy = yb;
                for (let Wy = yb.parentElement; Wy && !Wy.contains(bb); Wy = Wy.parentElement) oy = Wy;
                const By = Af(oy);
                return cb.right > By.left && cb.left < By.right
              }))
            })(Zy, sy, Sy) : void 0,
            Cy = cb && !Zy.closest(Nf) ? (yb => yb.map((yb => !yb.closest(rZ))))(sy) : void 0,
            Ty = ((yb, bb) => {
              const Wy = [];
              for (let hy = yb; hy; hy = hy.parentElement) Wy.push(hy);
              const Uy = new Map;
              return Wy.forEach(((yb, bb) => {
                Uy.set(yb, Wy.length - 1 - bb)
              })), bb.map((yb => {
                for (let bb = yb; bb; bb = bb.parentElement) {
                  const yb = Uy.get(bb);
                  if (void 0 !== yb) return yb
                }
                return -1
              }))
            })(Zy, sy),
            Vy = cb ? "x" : "y",
            Jy = vb(Zy, Vy, yb);
          let gb = Jh(Ky, Sy, bb, Ty, mb, Cy);
          if (gb >= 0 && Jy && !Jy.contains(sy[gb])) {
            const yb = sy.flatMap(((yb, bb) => Jy.contains(yb) ? [bb] : [])),
              Wy = bb => bb && yb.map((yb => bb[yb])),
              Uy = Jh(Ky, yb.map((yb => Sy[yb])), bb, yb.map((yb => Ty[yb])), Wy(mb), Wy(Cy));
            gb = Uy >= 0 ? yb[Uy] : gb
          }
          if (gb >= 0) return void this.moveTo(Zy, sy[gb], sy, yb, bb, fy);
          if (!Uy) return;
          const Gy = "Right" === bb || "Down" === bb ? 1 : -1;
          if (Jy && Xy(Jy, Vy, Gy)) {
            const yb = "y" === Vy ? Jy.clientHeight : Jy.clientWidth;
            ny(Jy, Vy, Gy * yb * .5), this.retryMove = {
              direction: bb,
              atMs: Wy + 80
            }
          }
        }
        moveTo(yb, bb, Wy, Uy, hy, fy) {
          const Zy = this.tabStripNav.findTabContent(yb, bb, Wy);
          Zy && "true" !== yb.dataset.padSelected ? this.openTab(yb, Zy, Uy, hy) : fy && !Zy || this.setFocus(this.tabStripNav.redirect(yb, bb, Wy, Uy), {
            byUser: !0
          })
        }
        openTab(yb, bb, Wy, Uy) {
          const hy = bb.parentElement;
          iW(yb), this.focusWhenFound((() => "true" !== yb.dataset.padSelected ? null : bb.isConnected ? this.tabStripNav.pickContentStart(bb, this.getEnabledCandidates(Wy), Wy) : hy ? this.tabStripNav.pickReplacedContentStart(yb, hy, this.getEnabledCandidates(Wy), Wy) : null), 3e3), this.tabOpenWait = {
            wait: this.pendingFocus,
            direction: Uy
          }
        }
        enterTab(yb, bb, Wy, Uy) {
          this.move(Wy, (yb => {
            const bb = [...yb.querySelectorAll(Lf)].filter((bb => bb.closest(pf) === yb));
            if (bb.length >= 2) {
              const yb = bb[0].getBoundingClientRect(),
                Wy = bb[1].getBoundingClientRect();
              return Math.abs(Wy.top - yb.top) > Math.abs(Wy.left - yb.left) ? "Right" : "Down"
            }
            const Wy = yb.getBoundingClientRect();
            return Wy.height > Wy.width ? "Right" : "Down"
          })(bb), Uy, !1, !0), this.focused !== yb || this.pendingFocus || this.activate(yb)
        }
        handleScroll(yb, bb) {
          const Wy = (0, sy.k)(yb.rightStick, .2);
          if (0 === Wy.x && 0 === Wy.y) return void(this.scrollRemainder = {
            x: 0,
            y: 0
          });
          const Uy = yb.dtMs / 1e3;
          for (const fy of ["x", "y"]) {
            var hy;
            const yb = Wy[fy];
            if (0 === yb) continue;
            const Zy = null !== (hy = vb(this.focused, fy, bb.root)) && void 0 !== hy ? hy : My(bb.root, fy);
            if (!Zy) continue;
            const cb = Math.sign(yb) * yb * yb * 1500 * Uy + this.scrollRemainder[fy],
              Py = Math.trunc(cb);
            this.scrollRemainder[fy] = cb - Py, 0 !== Py && (ny(Zy, fy, Py), this.scrolledInLayer = !0)
          }
        }
      },
      WZ = ["controller:keyboardPhraseGg", "controller:keyboardPhraseHi", "controller:keyboardPhraseThanks", "controller:keyboardPhraseGl", "controller:keyboardPhraseBrb", "controller:keyboardPhraseYes", "controller:keyboardPhraseNo", "controller:keyboardPhraseHelp"];
    const UZ = new class {
        constructor() {
          this.lastSendMs = -1 / 0
        }
        claim(yb) {
          return !(yb - this.lastSendMs < 2e3) && (this.lastSendMs = yb, !0)
        }
      },
      hZ = {
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
      fZ = ["wY", "nameTag"],
      ZZ = yb => {
        const bb = yb.target instanceof HTMLTextAreaElement && !fZ.includes(yb.kind);
        return AU(yb.page, "chat" === yb.kind ? WZ.length : 0, bb)
      },
      cc = yb => {
        const bb = yb.getBoundingClientRect(),
          Wy = window.innerHeight,
          Uy = bb.top + bb.height / 2 < Wy / 2 ? "bottom" : "top",
          hy = "bottom" === Uy ? Wy - bb.bottom - 6 : bb.top - 6;
        return {
          placement: Uy,
          maxHeightPx: Math.min(.46 * Wy, Math.max(.3 * Wy, hy))
        }
      },
      PZ = yb => {
        (0, cf.e)(yb) ? (0, cf.c)().close(): (bc.noteChosenStop(yb), yb.blur())
      };
    class oZ {
      constructor(yb) {
        this.host = yb, this.lastShiftPressMs = -1 / 0, this.phraseTexts = [], this.phrasesFill = !1
      }
      setPhraseRow(yb, bb) {
        this.phraseTexts = yb, this.phrasesFill = bb
      }
      pressKey(yb) {
        const bb = this.host.getState(),
          Wy = ZZ(bb),
          Uy = Wy[yb.row][yb.col];
        this.host.setState({
          ...bb,
          focus: yb,
          preferredX: bf(Wy, yb)
        }), "char" === Uy.type ? this.typeChar(Uy.char) : "command" === Uy.type ? this.runCommand(Uy.command) : this.sendPhrase(Uy.phraseIndex)
      }
      runCommand(yb) {
        const bb = this.host.getState();
        switch (yb) {
          case "backspace":
            fb(bb.target);
            break;
          case "space":
            hb(bb.target, " ");
            break;
          case "newline":
            hb(bb.target, "\n");
            break;
          case "caretLeft":
            Zb(bb.target, -1);
            break;
          case "caretRight":
            Zb(bb.target, 1);
            break;
          case "shift": {
            const yb = performance.now();
            this.host.setState({
              ...bb,
              shift: hh(bb.shift, yb, this.lastShiftPressMs)
            }), this.lastShiftPressMs = yb;
            break
          }
          case "page":
          case "otherPage": {
            const Wy = xh(bb.page, bb.accentsFirst)[yb];
            this.host.setState({
              ...bb,
              page: Wy,
              focus: Uh(ZZ({
                ...bb,
                page: Wy
              }), bb.focus)
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
            (0, cf.e)(bb.target) && (0, cf.c)().selectNextChannel()
        }
      }
      submit() {
        var yb, bb;
        const {
          target: Wy
        } = this.host.getState();
        this.host.hide(), (0, cf.e)(Wy) ? (0, cf.c)().submit() : (bc.noteChosenStop(Wy), null === (yb = (bb = (0, cf.d)(Wy)).submit) || void 0 === yb || yb.call(bb), document.activeElement === Wy && Wy.blur())
      }
      close() {
        const {
          target: yb
        } = this.host.getState();
        this.host.hide(), PZ(yb)
      }
      typeChar(yb) {
        const {
          target: bb,
          page: Wy,
          shift: Uy
        } = this.host.getState();
        hb(bb, Zh(yb, Wy, Uy)), this.host.setState({
          ...this.host.getState(),
          shift: fh(Uy, yb)
        })
      }
      sendPhrase(yb) {
        if (this.phrasesFill) {
          const {
            target: bb
          } = this.host.getState(), Wy = this.phraseTexts[yb];
          Wy && (bb.setSelectionRange(0, bb.value.length), hb(bb, Wy))
        } else UZ.claim(performance.now()) && (this.host.hide(), (0, cf.c)().sendLine(this.phraseTexts[yb]))
      }
    }
    const BZ = {
        initialDelayMs: 380,
        intervalMs: 85
      },
      KZ = {
        initialDelayMs: 400,
        intervalMs: 55
      };
    class eZ {
      constructor(yb, bb) {
        this.host = yb, this.editor = bb, this.lastDirection = null, this.navRepeat = new sy.b((0, Sy.b)(BZ)), this.commandRepeats = new Map(QU.filter((yb => {
          let {
            repeats: bb
          } = yb;
          return bb
        })).map((yb => {
          let {
            command: bb
          } = yb;
          return [bb, (0, Sy.b)(KZ)]
        })))
      }
      reset() {
        this.navRepeat.reset();
        for (const yb of this.commandRepeats.values()) yb.reset()
      }
      onVisibleFrame(yb) {
        const bb = performance.now();
        for (const {
            command: hy,
            action: fy
          }
          of QU) {
          const Wy = (0, By.e)(fy),
            Uy = this.commandRepeats.get(hy);
          if ((Uy ? Uy.update(yb.isHeld(Wy), bb) : yb.wasPressed(Wy)) && (this.editor.runCommand(hy), !this.host.getState().visible)) return
        }
        if (yb.wasPressed((0, By.e)("keyboardType")) && (this.editor.pressKey(this.host.getState().focus), !this.host.getState().visible)) return;
        const Wy = this.readNavDirection(yb);
        this.lastDirection = Wy;
        const Uy = this.navRepeat.update(Wy, bb);
        Uy && this.navigate(Uy)
      }
      onHiddenFrame(yb, bb) {
        var Wy;
        if (yb.wasPressed((0, By.e)("keyboardClose"))) return void PZ(bb);
        const Uy = (0, By.e)("keyboardType");
        if (yb.wasPressed(Uy)) return Ky.b.consumeButton(Uy), void this.host.open(bb);
        const hy = this.readNavDirection(yb),
          fy = null !== hy && hy !== this.lastDirection;
        if (this.lastDirection = hy, !fy || (0, cf.e)(bb)) return;
        const Zy = (null === (Wy = ef()) || void 0 === Wy ? void 0 : Wy.root.contains(bb)) || null !== bb.closest(".EntireInventoryWrapper");
        PZ(bb), Zy && Ky.b.handOffHeldInput()
      }
      navigate(yb) {
        const bb = this.host.getState();
        if ("Up" === yb && 0 === bb.focus.row && "chat" === bb.kind) return (0, cf.c)().stepHistory(), void this.host.setState({
          ...bb
        });
        const Wy = ((yb, bb, Wy, Uy) => {
          if ("Left" === Wy || "Right" === Wy) {
            const Uy = yb[bb.row].length,
              hy = (bb.col + ("Right" === Wy ? 1 : -1) + Uy) % Uy,
              fy = {
                row: bb.row,
                col: hy
              };
            return {
              pos: fy,
              preferredX: bf(yb, fy)
            }
          }
          const hy = (bb.row + ("Down" === Wy ? 1 : -1) + yb.length) % yb.length;
          return {
            pos: {
              row: hy,
              col: Wh(yb, hy, Uy)
            },
            preferredX: Uy
          }
        })(ZZ(bb), bb.focus, yb, bb.preferredX);
        this.host.setState({
          ...bb,
          focus: Wy.pos,
          preferredX: Wy.preferredX
        })
      }
      readNavDirection(yb) {
        for (const bb of sy.D)
          if (yb.isHeld(bb)) return bb;
        return (0, sy.qb)((0, sy.k)(yb.leftStick, (0, ey.g)().moveDeadzone))
      }
    }
    const qc = ["Up", "Down", "Left", "Right"],
      sZ = new Set(["CapsLock", "Control", "Fn", "FnLock", "Hyper", "NumLock", "ScrollLock", "Shift", "Super"]);
    const SZ = new class {
      constructor() {
        this.state = hZ, this.listeners = new Set, this.ownedField = null, this.pendingChatInput = null, this.pendingChatTimeout = 0, this.savedInputMode = null, this.editor = new oZ(this), this.padInput = new eZ(this, this.editor)
      }
      getState() {
        return this.state
      }
      setState(yb) {
        const bb = yb.visible !== this.state.visible;
        this.state = yb;
        for (const Wy of this.listeners) Wy();
        bb && oy.g.EZ(tb.b, yb.visible)
      }
      subscribe(yb) {
        return this.listeners.add(yb), () => {
          this.listeners.delete(yb)
        }
      }
      install() {
        const yb = Ky.b.register({
            name: "keyboard",
            isActive: () => this.state.visible || Ay(document.activeElement),
            onFrame: yb => {
              this.onFrame(yb)
            },
            onDeactivate: () => {
              this.padInput.reset()
            },
            wakePressActs: yb => qc.includes(yb) || !this.state.visible && yb === (0, By.e)("keyboardType")
          }),
          bb = yb => {
            const bb = yb.target;
            Ay(bb) && (bb === this.pendingChatInput || (0, qb.o)() ? this.open(bb) : this.state.visible && bb !== this.state.target && (this.ownedField = null, this.hide()))
          },
          Wy = () => {
            setTimeout((() => {
              this.releaseLostField()
            }), 0)
          },
          Uy = yb => {
            yb.isTrusted && this.state.visible && (yb => !yb.repeat && !sZ.has(yb.key) && !(0, Ph.c)(yb.key) && !/^(Audio|Media|Browser|Launch|Gamepad)/.test(yb.key))(yb) && this.hide()
          },
          hy = () => {
            this.state.visible && this.setState({
              ...this.state,
              ...cc(this.state.target)
            })
          };
        document.addEventListener("focusin", bb, !0), document.addEventListener("focusout", Wy, !0), window.addEventListener("keydown", Uy, !0), window.addEventListener("resize", hy);
        const fy = oy.g.subscribe(ih.d, (() => {
            this.openChat()
          })),
          Zy = oy.g.subscribe(tb.d, (yb => {
            this.openForField(yb)
          }));
        return () => {
          yb(), document.removeEventListener("focusin", bb, !0), document.removeEventListener("focusout", Wy, !0), window.removeEventListener("keydown", Uy, !0), window.removeEventListener("resize", hy), oy.g.unsubscribe(fy), oy.g.unsubscribe(Zy), this.clearPendingChat(), this.hide(), this.ownedField = null
        }
      }
      openChat() {
        const yb = (0, cf.c)();
        yb ? document.activeElement !== yb.input ? (this.clearPendingChat(), this.pendingChatInput = yb.input, this.pendingChatTimeout = window.setTimeout((() => {
          this.pendingChatInput = null
        }), 250), yb.open()) : this.open(yb.input) : console.warn("controllerOpenChat with no chat mounted")
      }
      openForField(yb) {
        Ay(yb) ? (document.activeElement !== yb && yb.focus(), document.activeElement === yb && this.open(yb)) : console.warn("controllerOpenKeyboard needs an editable input or textarea", yb)
      }
      open(yb) {
        var bb;
        if (this.clearPendingChat(), this.ownedField = yb, this.state.visible && this.state.target === yb) return;
        this.restoreInputMode(), (yb => {
          dy(yb) && 0 === yb.selectionStart && 0 === yb.selectionEnd && yb.setSelectionRange(yb.value.length, yb.value.length)
        })(yb), this.savedInputMode = yb.getAttribute("inputmode"), yb.setAttribute("inputmode", "none");
        const Wy = {
          ...hZ,
          visible: !0,
          target: yb,
          kind: (0, cf.e)(yb) ? "chat" : null !== (bb = (0, cf.d)(yb).kind) && void 0 !== bb ? bb : null,
          accentsFirst: (Uy = SU.f.get().getCurrentLanguageCode(), IU.has(Uy)),
          ...cc(yb)
        };
        var Uy;
        const hy = ZZ(Wy),
          fy = ((yb, bb) => {
            for (let Wy = 0; Wy < yb.length; Wy++) {
              const Uy = yb[Wy].findIndex((yb => "char" === yb.type && yb.char === bb));
              if (-1 !== Uy) return {
                row: Wy,
                col: Uy
              }
            }
            return null
          })(hy, "q");
        this.padInput.reset(), this.setState({
          ...Wy,
          focus: fy,
          preferredX: bf(hy, fy)
        })
      }
      hide() {
        this.state.visible && (this.restoreInputMode(), this.padInput.reset(), this.setState(hZ))
      }
      onFrame(yb) {
        if (this.releaseLostField()) return;
        const bb = document.activeElement;
        this.state.visible ? this.padInput.onVisibleFrame(yb) : Ay(bb) && this.padInput.onHiddenFrame(yb, bb)
      }
      releaseLostField() {
        const yb = this.ownedField;
        return !(null === yb || yb.isConnected && document.activeElement === yb) && (this.ownedField = null, this.hide(), !0)
      }
      clearPendingChat() {
        window.clearTimeout(this.pendingChatTimeout), this.pendingChatInput = null
      }
      restoreInputMode() {
        const {
          target: yb
        } = this.state;
        yb && (null === this.savedInputMode ? yb.removeAttribute("inputmode") : yb.setAttribute("inputmode", this.savedInputMode), this.savedInputMode = null)
      }
    };
    var EZ = Wy(7915);
    const lZ = new Map(QU.map((yb => {
        let {
          command: bb,
          action: Wy
        } = yb;
        return [bb, Wy]
      }))),
      mc = {
        letters: "ABC",
        accents: "\xe0\xe9",
        symbols: "&123"
      },
      CZ = {
        chat: "controller:keyboardTargetChat",
        sign: "controller:keyboardTargetSign",
        nameTag: "controller:keyboardTargetNameTag",
        book: "controller:keyboardTargetBook",
        wY: "controller:keyboardTargetBookTitle"
      },
      TZ = yb => {
        const bb = (() => {
          const [, yb] = (0, Hy.useReducer)((yb => yb + 1), 0);
          return yb
        })();
        (0, Hy.useEffect)((() => {
          if (!yb) return;
          const Wy = ["input", "select", "selectionchange", "keyup", "pointerup"];
          for (const hy of Wy) yb.addEventListener(hy, bb);
          document.addEventListener("selectionchange", bb);
          const Uy = new MutationObserver(bb);
          return Uy.observe(yb, {
            attributeFilter: ["placeholder"]
          }), () => {
            Uy.disconnect();
            for (const Uy of Wy) yb.removeEventListener(Uy, bb);
            document.removeEventListener("selectionchange", bb)
          }
        }), [yb, bb])
      },
      VZ = yb => {
        yb.preventDefault()
      },
      JZ = yb => {
        "mouse" !== yb.pointerType && yb.preventDefault()
      },
      gc = () => {
        var yb;
        const {
          t: bb
        } = (0, hy.D)(), Wy = (() => {
          const [yb, bb] = (0, Hy.useState)(SZ.getState());
          return (0, Hy.useEffect)((() => SZ.subscribe((() => {
            bb(SZ.getState())
          }))), []), yb
        })(), Uy = (0, qb.z)(), fy = (0, Hy.useRef)(null);
        (0, ey.n)(), (0, qb.A)(), (0, Hy.useEffect)((() => {
          const yb = SZ.install(),
            bb = null;
          return () => {
            yb(), null === bb || void 0 === bb || bb()
          }
        }), []);
        const Zy = (0, Hy.useMemo)((() => WZ.map((yb => bb(yb)))), [bb]),
          cb = Wy.visible && "chat" === Wy.kind ? Wy.target : null;
        TZ(cb);
        const Py = null !== (yb = null === cb || void 0 === cb ? void 0 : cb.value) && void 0 !== yb ? yb : "",
          oy = ((yb, bb, Wy) => {
            if (!yb.startsWith("/")) return [];
            const Uy = [];
            for (let hy = bb.length - 1; hy >= 0 && Uy.length < Wy; hy--) {
              const Wy = bb[hy].trim();
              Wy.startsWith(yb) && Wy !== yb && !Uy.includes(Wy) && Uy.push(Wy)
            }
            return Uy
          })(Py, Py.startsWith("/") ? (0, EZ.f)() : [], WZ.length),
          Ky = Py.startsWith("/"),
          sy = Ky ? WZ.map(((yb, bb) => {
            var Wy;
            return null !== (Wy = oy[bb]) && void 0 !== Wy ? Wy : ""
          })) : Zy;
        if ((0, Hy.useEffect)((() => {
            SZ.editor.setPhraseRow(sy, Ky)
          })), (0, Hy.useEffect)((() => {
            const yb = fy.current;
            if (yb) return yb.addEventListener("touchstart", VZ, {
              passive: !1
            }), () => {
              yb.removeEventListener("touchstart", VZ)
            }
          }), [Wy.visible]), !Wy.visible) return null;
        const Sy = ZZ(Wy),
          Ey = yf(Sy),
          ly = yb => "char" === yb.type ? Zh(yb.char, Wy.page, Wy.shift) : "phrase" === yb.type ? sy[yb.phraseIndex] : (yb => {
            switch (yb) {
              case "backspace":
                return "\u232b";
              case "shift":
                return "caps" === Wy.shift ? "\u21ea" : "\u21e7";
              case "page":
              case "otherPage":
                return mc[xh(Wy.page, Wy.accentsFirst)[yb]];
              case "space":
                return bb("controller:keyboardSpace");
              case "caretLeft":
                return "\u2190";
              case "caretRight":
                return "\u2192";
              case "newline":
                return "\u21b5";
              case "submit":
                return bb("chat" === Wy.kind ? "controller:keyboardSend" : "controller:keyboardDone");
              case "close":
                return "\u2715";
              case "channel":
                return "\u21c4"
            }
          })(yb.command),
          mb = yb => {
            SZ.editor.pressKey(yb)
          };
        return (0, py.jsxs)("div", {
          ref: fy,
          className: Fy()(cf.j, "top" === Wy.placement ? "PadKeyboardTop" : "PadKeyboardBottom", {
            PadKeyboardMultiline: Wy.target instanceof HTMLTextAreaElement
          }),
          style: {
            "--pad-keyboard-rows": Sy.length,
            "--pad-keyboard-height": `${Wy.maxHeightPx}px`
          },
          onPointerDown: JZ,
          onMouseDown: VZ,
          children: [(0, py.jsx)(GZ, {
            target: Wy.target,
            label: Wy.kind ? bb(CZ[Wy.kind]) : Wy.target.placeholder || bb("controller:keyboardTargetText")
          }), (0, py.jsx)("div", {
            className: "PadKeyboardRows",
            children: Sy.map(((yb, bb) => (0, py.jsx)("div", {
              className: Fy()("PadKeyboardRow", {
                PadKeyboardPhraseRow: "phrase" === yb[0].type
              }),
              children: yb.map(((yb, hy) => {
                const fy = Uy && Wy.focus.row === bb && Wy.focus.col === hy,
                  Zy = "command" === yb.type ? lZ.get(yb.command) : void 0;
                return (0, py.jsx)("div", {
                  className: "PadKeyboardKeySlot",
                  style: {
                    width: yb.width / Ey * 100 + "%"
                  },
                  children: (0, py.jsxs)("div", {
                    className: Fy()("PadKeyboardKey", {
                      PadKeyboardKeyFocused: fy,
                      PadKeyboardKeyCommand: "command" === yb.type,
                      PadKeyboardKeyPhrase: "phrase" === yb.type,
                      PadKeyboardKeyActive: "command" === yb.type && "shift" === yb.command && "off" !== Wy.shift,
                      PadKeyboardKeySubmit: "command" === yb.type && "submit" === yb.command
                    }),
                    role: "button",
                    onClick: () => {
                      mb({
                        row: bb,
                        col: hy
                      })
                    },
                    onTouchEnd: yb => {
                      var Wy, Uy;
                      yb.preventDefault(), Wy = yb.changedTouches[0], Uy = yb.currentTarget.getBoundingClientRect(), Wy && Wy.clientX >= Uy.left && Wy.clientX <= Uy.right && Wy.clientY >= Uy.top && Wy.clientY <= Uy.bottom && mb({
                        row: bb,
                        col: hy
                      })
                    },
                    children: [(0, py.jsx)("span", {
                      className: "PadKeyboardKeyLabel",
                      children: ly(yb)
                    }), Uy && Zy && (0, py.jsx)(TU, {
                      className: "PadKeyboardKeyGlyph",
                      glyph: (0, By.e)(Zy)
                    })]
                  })
                }, hy)
              }))
            }, bb)))
          })]
        })
      },
      GZ = yb => {
        let {
          target: bb,
          label: Wy
        } = yb;
        TZ(bb);
        const Uy = (0, Hy.useRef)(null),
          hy = (0, Hy.useRef)(null),
          fy = bb instanceof HTMLTextAreaElement;
        (0, Hy.useLayoutEffect)((() => {
          const yb = Uy.current,
            bb = hy.current;
          fy ? yb.scrollTop = bb.offsetTop - yb.clientHeight / 2 : yb.scrollLeft = bb.offsetLeft - yb.clientWidth / 2
        }));
        const {
          value: Zy,
          start: cb,
          end: Py
        } = yW(bb), oy = "password" === bb.type ? "\u2022".repeat(Zy.length) : Zy;
        return (0, py.jsxs)("div", {
          className: "PadKeyboardPreview",
          children: [(0, py.jsx)("div", {
            className: "PadKeyboardPreviewLabel SmallTextBold",
            children: Wy
          }), (0, py.jsxs)("div", {
            ref: Uy,
            className: Fy()("PadKeyboardPreviewText", {
              PadKeyboardPreviewMultiline: fy
            }),
            children: [(0, py.jsx)("span", {
              children: oy.slice(0, cb)
            }), (0, py.jsx)("span", {
              ref: hy,
              className: "PadKeyboardCaret"
            }), cb !== Py && (0, py.jsx)("span", {
              className: "PadKeyboardPreviewSelection",
              children: oy.slice(cb, Py)
            }), (0, py.jsx)("span", {
              children: oy.slice(Py)
            }), 0 === oy.length && bb.placeholder && bb.placeholder !== Wy && (0, py.jsx)("span", {
              className: "PadKeyboardPreviewPlaceholder",
              children: bb.placeholder
            })]
          })]
        })
      };
    var OZ = Wy(1239),
      RZ = Wy(2723);
    const vc = function() {
        for (var yb = arguments.length, bb = new Array(yb), Wy = 0; Wy < yb; Wy++) bb[Wy] = arguments[Wy];
        return bb.map(By.e)
      },
      ic = (yb, bb) => {
        const Wy = kf(yb);
        return Wy ? [{
          glyphs: [Wy],
          labelKey: bb
        }] : []
      },
      MZ = [".BottomMiddleElements", ".BottomLeftElements > *", ".BottomRightElements > *", ".MiddleTextBottom .MiddleText"],
      YZ = "--pad-hint-bar-clearance",
      XZ = "[data-pad-hint-bar-avoid]",
      nZ = yb => {
        const bb = [];
        for (const Wy of yb) ob(Wy) && bb.push(Wy.getBoundingClientRect());
        return bb
      },
      uZ = yb => {
        if (!yb) return null;
        const bb = ef(),
          Wy = bb ? nZ(((yb, bb) => {
            const Wy = yb.closest(XZ);
            return Wy ? [Wy] : ("popup" === bb ? document : yb).querySelectorAll(XZ)
          })(bb.root, bb.layer.kind)) : [],
          Uy = !bb || bb.root.hasAttribute("data-pad-shows-hud");
        if (((0, RZ.h)(null === bb || void 0 === bb ? void 0 : bb.layer.kind, (0, RZ.j)()) || Uy) && Wy.push(...nZ(document.querySelectorAll(MZ.join(",")))), 0 === Wy.length) return null;
        const {
          width: hy,
          height: fy
        } = yb.getBoundingClientRect(), Zy = window.innerHeight - 8, cb = (0, RZ.o)(Zy, {
          width: hy,
          height: fy
        }, window.innerWidth / 2, Wy, 8);
        return cb === Zy ? null : Math.round(window.innerHeight - cb)
      },
      rc = yb => {
        const bb = document.documentElement.style,
          Wy = yb ? `${Math.round(window.innerHeight-yb.getBoundingClientRect().top)}px` : "";
        bb.getPropertyValue(YZ) !== Wy && (Wy ? bb.setProperty(YZ, Wy) : bb.removeProperty(YZ))
      },
      HZ = () => {
        const {
          t: yb
        } = (0, hy.D)(), {
          hideButtonHints: bb
        } = (0, ey.n)(), Wy = (0, qb.z)(), [Uy, fy] = (0, Hy.useState)(!1), [Zy, oy] = (0, Hy.useState)([]), [Sy, Ey] = (0, Hy.useState)(null), ly = (0, Hy.useRef)(null), mb = (0, Hy.useRef)(null);
        (0, sU.i)(tb.b, (yb => {
          fy(yb)
        })), (0, sU.i)(RZ.n, (() => {
          var yb;
          null === (yb = mb.current) || void 0 === yb || yb.call(mb)
        }));
        const Cy = Wy && !bb && !Uy;
        return (0, Hy.useEffect)((() => {
          if (!Cy) return;
          let yb = null;
          const bb = () => {
            const bb = (() => {
                var yb;
                const bb = Ky.b.getActiveConsumerName(),
                  Wy = (0, RZ.d)();
                if (Wy) {
                  const yb = (0, By.e)(Wy),
                    bb = "emoteWheel" === Wy && "wheel" === (0, ey.g)().emoteButton || !(0, sy.M)(Ky.b.getLastFrame().values, yb) ? {
                      glyphs: vc("menuConfirm"),
                      labelKey: "controller:menusSelect"
                    } : {
                      glyphs: [yb],
                      labelKey: "controller:wheelReleaseToPick"
                    };
                  return [{
                    glyphs: [(0, By.s)(yb)],
                    labelKey: "controller:wheelChoose"
                  }, bb, {
                    glyphs: vc("menuBack"),
                    labelKey: "controller:wheelClose"
                  }]
                }
                const Uy = ef();
                if (!Uy || "focus" !== bb && "cursor" !== bb) return (0, RZ.c)(By.e);
                const hy = [],
                  fy = {
                    glyphs: vc("menuBack"),
                    labelKey: "controller:menusBack"
                  },
                  Zy = Hb(Uy.root),
                  cb = Zy ? !Bb(Zy) : Boolean(Uy.layer.close),
                  oy = !Zy && Uy.layer.closeLabelKey ? Uy.layer.closeLabelKey : fy.labelKey,
                  qb = cb ? [{
                    ...fy,
                    labelKey: oy
                  }] : [],
                  Sy = uh(Uy.layer.kind) ? [{
                    glyphs: vc("chat"),
                    labelKey: "controller:menusQuickChat"
                  }] : [];
                if ("cursor" === bb) return hy.push({
                  glyphs: vc("menuConfirm"),
                  labelKey: "controller:menusClick"
                }), hy.push({
                  glyphs: vc("menuSecondary"),
                  labelKey: "controller:menusRightClick"
                }), hy.push(...qb), hy.push(...Sy), hy.push({
                  glyphs: ["RightStick"],
                  labelKey: "controller:menusScroll"
                }), vZ() && hy.push({
                  glyphs: vc("menuToggleCursor"),
                  labelKey: "controller:menusFocusMode"
                }), hy;
                const Ey = bc.getFocused();
                Ey && (0, nf.d)(Ey) ? hy.push({
                  glyphs: ["Left", "Right"],
                  labelKey: "controller:menusAdjust"
                }) : Ey && ub(Ey) ? hy.push({
                  glyphs: [],
                  labelKey: "controller:menusUseMouse"
                }) : hy.push({
                  glyphs: vc("menuConfirm"),
                  labelKey: "controller:menusSelect"
                });
                const ly = Ey ? null === (yb = Sh(Ey)) || void 0 === yb ? void 0 : yb.dataset.padSecondary : void 0;
                ly && hy.push({
                  glyphs: vc("menuSecondary"),
                  labelKey: ly
                }), hy.push(...null !== Ey && void 0 !== Ey && Ey.closest("[data-pad-friends-column]") ? [fy] : qb), hy.push(...Sy);
                const mb = "home" === Uy.layer.kind;
                Ih(Uy.root) || !Fh(Uy.root) && !xf(Uy) ? mb && hy.push({
                  glyphs: vc("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusRows"
                }) : hy.push({
                  glyphs: vc("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusTabs"
                }), mb && (hy.push(...ic("inventory", "controller:menusFriends")), ly || hy.push({
                  glyphs: vc("menuSecondary"),
                  labelKey: "controller:menusSearch"
                }), hy.push(...ic("pause", "controller:menusSettings")), hy.push(...ic("leaderboard", "controller:menusNotifications")));
                const Cy = Py.d.get("openEverythingMenuName");
                return "inGame" === Py.d.get("gameState") && "popup" !== Uy.layer.kind && null !== Cy && ((0, Kh.l)(Cy) ? hy.push(...ic("leaderboard", "controller:menusClose")) : Cy !== Bh.o.LOBBY_LEADERBOARD && hy.push(...ic("leaderboard", "controller:menusLobby"))), hy.push({
                  glyphs: vc("menuToggleCursor"),
                  labelKey: "controller:menusCursorMode"
                }), hy
              })(),
              Wy = uZ(ly.current),
              Uy = ((yb, bb) => `${yb.map((yb=>`${yb.glyphs.join("+")}:${yb.labelKey}`)).join("|")}@${bb}`)(bb, Wy);
            Uy !== yb && (yb = Uy, (0, cb.unstable_batchedUpdates)((() => {
              oy(bb), Ey(Wy)
            }))), rc(ly.current)
          };
          bb(), mb.current = bb;
          const Wy = requestAnimationFrame(bb),
            Uy = setInterval(bb, 150);
          return () => {
            mb.current = null, cancelAnimationFrame(Wy), clearInterval(Uy), rc(null)
          }
        }), [Cy]), (0, Hy.useLayoutEffect)((() => {
          if (!Cy) return;
          if (0 === Zy.length) return void rc(null);
          const yb = uZ(ly.current);
          yb === Sy ? rc(ly.current) : Ey(yb)
        }), [Cy, Zy, Sy]), Cy && 0 !== Zy.length ? (0, py.jsx)("div", {
          ref: ly,
          className: "PadButtonHintBar SmallTextBold",
          style: null === Sy ? void 0 : {
            bottom: Sy
          },
          "aria-hidden": !0,
          children: Zy.map((bb => (0, py.jsxs)("div", {
            className: "PadButtonHint",
            children: [bb.glyphs.map((yb => (0, py.jsx)(TU, {
              glyph: yb,
              className: "PadButtonHintGlyph"
            }, yb))), (0, py.jsx)("span", {
              children: yb(bb.labelKey)
            })]
          }, bb.labelKey)))
        }) : null
      },
      ac = [cW, "label", "[data-pad-slider]"].join(","),
      FZ = "data-pad-cursor-probe",
      pZ = yb => {
        var bb;
        const Wy = (yb => {
          const bb = [];
          for (let Uy = yb; Uy && Uy !== document.body && Uy !== document.documentElement && (bb.push(Uy), !(bb.length > 8)); Uy = Uy.parentElement);
          const Wy = document.documentElement.classList.contains(qb.r) ? bb[bb.length - 1] : void 0;
          null === Wy || void 0 === Wy || Wy.setAttribute(FZ, "");
          try {
            return bb.map((yb => ({
              element: yb,
              cursor: getComputedStyle(yb).cursor
            })))
          } finally {
            null === Wy || void 0 === Wy || Wy.removeAttribute(FZ)
          }
        })(yb);
        if ("pointer" !== (null === (bb = Wy[0]) || void 0 === bb ? void 0 : bb.cursor)) return null;
        let Uy = 0;
        for (; Uy + 1 < Wy.length && "pointer" === Wy[Uy + 1].cursor;) Uy++;
        return Wy[Uy].element
      },
      LZ = (yb, bb, Wy, Uy) => {
        const hy = Uy.root.contains(yb) ? Uy.root : null;
        for (let fy = yb; fy && fy !== document.body && fy !== document.documentElement; fy = fy.parentElement) {
          if (fy instanceof HTMLElement && Ry(fy, bb) && Xy(fy, bb, Wy)) return fy;
          if (fy === hy) break
        }
        return "home" === Uy.layer.kind || "gamePage" === Uy.layer.kind ? ((yb, bb) => {
          const Wy = document.scrollingElement;
          return Wy instanceof HTMLElement && ![document.documentElement, document.body].some((bb => {
            const Wy = getComputedStyle(bb),
              Uy = "y" === yb ? Wy.overflowY : Wy.overflowX;
            return "hidden" === Uy || "clip" === Uy
          })) && Xy(Wy, yb, bb) ? Wy : null
        })(bb, Wy) : null
      };
    const QZ = new class {
        constructor() {
          this.state = {
            x: 0,
            y: 0,
            speedRamp: 0
          }, this.hasPosition = !1, this.active = !1, this.hidden = !1, this.hit = null, this.interactive = null, this.magnet = null, this.lastHitTestMs = -1 / 0, this.press = null, this.draggedSlider = null, this.repeatStop = null, this.repeatKey = null, this.repeated = !1, this.confirmRepeat = (0, Sy.b)(sy.t), this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.layerRoot = null, this.layerOrder = 0, this.layerPoints = new WeakMap, this.page = null, this.pendingPageStart = null
        }
        install() {
          const yb = Ky.b.register({
              name: "cursor",
              isActive: () => "cursor" === iZ(),
              onFrame: yb => {
                this.onFrame(yb)
              },
              onDeactivate: () => {
                this.deactivate()
              },
              wakePressActs: yb => (0, Ky.d)(yb) || yb === (0, By.e)("menuConfirm") && rW((0, qb.e)())
            }),
            bb = (0, hf.n)((yb => {
              const bb = yb.getRoot();
              bb && this.layerPoints.delete(bb), bb === this.layerRoot && (this.layerRoot = null)
            })),
            Wy = oy.g.subscribe("appManagerUpdated|activeInputDevice", (yb => {
              "gamepad" !== yb && this.active && !this.hidden && this.hide()
            }));
          return () => {
            yb(), bb(), oy.g.unsubscribe(Wy), this.deactivate()
          }
        }
        getHighlighted() {
          return this.isVisible() ? this.interactive : null
        }
        isVisible() {
          return this.active && !this.hidden && (0, qb.o)()
        }
        getPoint() {
          return {
            x: this.state.x,
            y: this.state.y
          }
        }
        hide() {
          this.hidden = !0, this.cancelPress(), this.secondaryArmed = !1, this.clearHover(), this.EZ()
        }
        activate(yb) {
          this.active = !0, this.hidden = !1;
          const bb = Gf();
          !bb || bb.root && bb.root !== yb.root ? this.jumpTo(this.hasPosition ? this.getPoint() : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          }) : (this.setLayer(yb), this.jumpTo(bb.point))
        }
        jumpTo(yb) {
          this.state = {
            x: yb.x,
            y: yb.y,
            speedRamp: 0
          }, this.hasPosition = !0, this.lastHitTestMs = -1 / 0
        }
        deactivate() {
          this.active && (this.active = !1, this.page = null, this.pendingPageStart = null, this.cancelPress(), this.clearHover(), this.draggedSlider = null, this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.EZ())
        }
        onFrame(yb) {
          const bb = ef();
          if (!bb) return;
          if (this.active || this.activate(bb), this.followPage(bb)) return;
          this.followLayer(bb);
          const Wy = yb.wokeDevice ? (0, qb.e)() : null;
          if (Wy && this.jumpTo(Wy), !(0, qb.o)()) return void this.hide();
          const Uy = (0, By.e)("menuToggleCursor");
          if (yb.wasPressed(Uy)) return Ky.b.consumeButton(Uy), void gZ(this.getHandoff(null));
          if (this.handBackToFocus(yb)) return;
          const hy = (0, By.e)("menuConfirm"),
            fy = (0, By.e)("menuSecondary");
          if (yb.wasPressed((0, By.e)("menuBack"))) return Xb(bb.root) || aW(bb.root) || qZ(), void this.EZ();
          if (yZ(null, yb, bb)) return yb.wasReleased(hy) && this.press && (this.updateHit(!1), this.updateConfirm(yb, hy)), void this.EZ();
          if (document.pointerLockElement) return void this.hide();
          const Zy = Mf() ? {
              x: 0,
              y: 0
            } : (yb => {
              const bb = (yb, bb) => (yb ? 1 : 0) - (bb ? 1 : 0);
              return {
                x: bb(yb.isHeld("Right"), yb.isHeld("Left")),
                y: bb(yb.isHeld("Down"), yb.isHeld("Up"))
              }
            })(yb),
            cb = (0, ey.g)().moveDeadzone,
            Py = ((yb, bb) => {
              const Wy = (0, sy.k)(yb, Ty(bb));
              return Math.hypot(Wy.x, Wy.y)
            })(yb.leftStick, cb) > 0 || 0 !== Zy.x || 0 !== Zy.y;
          if (this.hidden) {
            const bb = yb.wasPressed(hy),
              Wy = yb.wasPressed(fy);
            if (!Py && !gb(yb.rightStick) && !bb && !Wy && !yb.wokeDevice) return void this.EZ();
            if (this.hidden = !1, this.updateHit(!1), bb || Wy) return bb && (this.press = {
              kind: "ignored"
            }, yb.wokeDevice && this.beginRepeat()), this.secondaryArmed = !1, void this.EZ()
          }
          this.movePendingPageStart(Py);
          const oy = this.getPoint();
          this.state = Jy(this.state, {
            stick: yb.leftStick,
            moveDeadzone: cb,
            dpad: Zy,
            dtMs: yb.dtMs,
            cursorSpeedPercent: (0, ey.g)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: this.getAssistContext()
          });
          const Sy = this.state.x !== oy.x || this.state.y !== oy.y,
            Ey = [hy, fy].some((bb => yb.wasPressed(bb) || yb.wasReleased(bb)));
          (Sy || Ey || performance.now() - this.lastHitTestMs >= 100) && this.updateHit(Sy), this.updateConfirm(yb, hy), this.updateSecondary(yb, fy), this.updateScroll(yb, bb), this.EZ()
        }
        followPage(yb) {
          const bb = "home" === yb.layer.kind || "gamePage" === yb.layer.kind,
            Wy = this.page;
          if (this.page = bb ? {
              key: (0, hf.t)(yb.layer),
              root: yb.root
            } : null, !this.page || !Wy || Wy.root !== yb.root || Wy.key === this.page.key) return !1;
          if (this.cancelPress(), this.secondaryArmed = !1, this.setLayer(yb), "hybrid" === Jf()) return Cf = null, lf = null, Tf.lock(), !0;
          const {
            key: Uy
          } = this.page;
          return this.pendingPageStart = {
            root: yb.root,
            key: Uy,
            returning: bc.notePageEnteredByCursor(Uy),
            enteredAtMs: performance.now()
          }, !1
        }
        movePendingPageStart(yb) {
          const bb = this.pendingPageStart;
          if (!bb) return;
          if (yb || bb.root !== this.layerRoot) return void(this.pendingPageStart = null);
          const Wy = bb.returning ? bc.recallStop(bb.root, bb.key) : null;
          if (!Wy && bb.returning && performance.now() - bb.enteredAtMs < 1e3) return;
          const Uy = null !== Wy && void 0 !== Wy ? Wy : bc.pickInitial(bb.root, {
            includeDisabled: !0,
            waitForContent: !0,
            enteredAtMs: bb.enteredAtMs
          });
          Uy && (this.pendingPageStart = null, this.jumpTo(Tb(Uy)))
        }
        setLayer(yb) {
          this.layerRoot = yb.root, this.layerOrder = yb.order
        }
        followLayer(yb) {
          var bb;
          if (yb.root === this.layerRoot) return;
          null !== (bb = this.layerRoot) && void 0 !== bb && bb.isConnected && this.layerPoints.set(this.layerRoot, this.getPoint()), this.cancelPress(), this.draggedSlider = null, this.secondaryArmed = !1;
          const Wy = this.layerPoints.get(yb.root),
            Uy = Wy && yb.order <= this.layerOrder ? Wy : bc.getLayerStartPoint(yb.root);
          this.setLayer(yb), this.jumpTo(Uy)
        }
        getHandoff(yb) {
          var bb;
          return {
            point: this.getPoint(),
            element: null !== (bb = this.interactive) && void 0 !== bb ? bb : this.findDraggedSliderNearby(),
            direction: yb
          }
        }
        findDraggedSliderNearby() {
          const yb = this.draggedSlider;
          if (null === yb || void 0 === yb || !yb.isConnected) return null;
          const bb = yb.getBoundingClientRect(),
            {
              y: Wy
            } = this.getPoint();
          return Wy >= bb.top - 40 && Wy <= bb.bottom + 40 ? yb : null
        }
        handBackToFocus(yb) {
          if (!Mf()) return !1;
          const bb = sy.D.find((bb => yb.wasPressed(bb)));
          return !!bb && (Wy = this.getHandoff(bb), Cf = Sf(Wy), lf = null, Tf.lock(), Ky.b.handOffHeldInput(), !0);
          var Wy
        }
        getAssistContext() {
          const yb = this.interactive;
          if (null === yb || void 0 === yb || !yb.isConnected) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const bb = yb.getBoundingClientRect();
          if (bb.width > .4 * window.innerWidth || bb.height > .4 * window.innerHeight) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const Wy = (0, ey.g)().cursorMagnetism && !(0, wy.c)(yb) && !yb.closest("[data-pad-slider]"),
            Uy = this.magnet && this.magnet !== yb && this.magnet.isConnected ? this.magnet.getBoundingClientRect() : bb;
          return {
            overInteractive: !0,
            magnetTarget: Wy ? {
              x: Uy.left + Uy.width / 2,
              y: Uy.top + Uy.height / 2
            } : null
          }
        }
        updateHit(yb) {
          this.lastHitTestMs = performance.now();
          const bb = this.getPoint(),
            Wy = document.elementFromPoint(bb.x, bb.y),
            Uy = Wy && !(0, ly.q)(Wy) && (yb => {
              var bb;
              const Wy = ef();
              return !(Wy && !Wy.root.contains(yb) && !yb.closest(".tooltip-container")) || !(null !== (bb = document.getElementById("root")) && void 0 !== bb && bb.contains(yb))
            })(Wy) ? Wy : null;
          if (Uy !== this.hit) return Rb(this.hit, Uy, bb), this.hit = Uy, void this.setInteractive(Uy ? (yb => {
            const bb = yb.closest(ac);
            if (bb) {
              var Wy, Uy;
              const yb = null !== (Wy = null === (Uy = bb.parentElement) || void 0 === Uy ? void 0 : Uy.closest("[data-pad-focusable]")) && void 0 !== Wy ? Wy : bb;
              return Bb(yb) ? {
                element: null,
                magnet: null
              } : {
                element: yb,
                magnet: bb
              }
            }
            const hy = pZ(yb);
            return {
              element: hy,
              magnet: hy
            }
          })(Uy) : {
            element: null,
            magnet: null
          });
          yb && Uy && Rb(Uy, Uy, bb)
        }
        setInteractive(yb) {
          let {
            element: bb,
            magnet: Wy
          } = yb;
          this.interactive = bb, this.magnet = Wy
        }
        clearHover() {
          this.hit && Rb(this.hit, null, this.getPoint()), this.hit = null, this.setInteractive({
            element: null,
            magnet: null
          })
        }
        beginPress() {
          const yb = this.hit;
          if (!yb || ub(yb)) return {
            kind: "ignored"
          };
          const bb = (0, nf.d)(yb),
            Wy = yb.closest("[data-pad-slider]");
          return bb && Wy ? {
            kind: "slider",
            slider: Wy,
            adjuster: bb
          } : (gW(yb, this.getPoint()), {
            kind: "pointer",
            target: yb
          })
        }
        applySliderFraction(yb) {
          var bb;
          const Wy = yb.slider.getBoundingClientRect(),
            Uy = Wy.height > Wy.width,
            hy = null === (bb = yb.slider.querySelector("[data-pad-slider-handle]")) || void 0 === bb ? void 0 : bb.getBoundingClientRect(),
            fy = hy ? Uy ? hy.height : hy.width : 0,
            Zy = (Uy ? Wy.height : Wy.width) - fy;
          if (Zy <= 0) return;
          const cb = Uy ? Wy.bottom - fy / 2 - this.state.y : this.state.x - Wy.left - fy / 2;
          yb.adjuster.setFraction(Math.max(0, Math.min(1, cb / Zy)))
        }
        updateConfirm(yb, bb) {
          yb.wasPressed(bb) && (this.press = yb.wokeDevice ? {
            kind: "ignored"
          } : this.beginPress(), this.draggedSlider = "slider" === this.press.kind ? this.press.slider : null, this.beginRepeat());
          const Wy = this.press;
          if (!Wy) return;
          if (yb.isHeld(bb)) return "slider" === Wy.kind && this.applySliderFraction(Wy), void this.updateRepeat();
          this.press = null;
          const Uy = this.repeated;
          if (this.endRepeat(), !yb.wasReleased(bb)) return void this.endPressWithoutClick(Wy);
          const hy = this.getPoint(),
            fy = this.hit;
          if ("slider" === Wy.kind && Wy.adjuster.endDrag(), "pointer" === Wy.kind) {
            const yb = null !== fy && void 0 !== fy ? fy : Wy.target.isConnected ? Wy.target : null;
            yb && Gb(yb, hy);
            const bb = fy && Wy.target.isConnected && !Uy ? ((yb, bb) => {
              for (let Wy = yb; Wy; Wy = Wy.parentElement)
                if (Wy.contains(bb)) return Wy;
              return null
            })(Wy.target, fy) : null;
            bb && (bc.noteCursorActivation(bb), (0, ly.f)(bb, new MouseEvent("click", Vb(hy, 0, 0))), nb(bb), Cb(bb) && vW(bb))
          }
        }
        beginRepeat() {
          var yb, bb, Wy;
          const Uy = null !== (yb = null === (bb = this.hit) || void 0 === bb ? void 0 : bb.closest("[data-pad-repeat]")) && void 0 !== yb ? yb : null;
          this.repeatStop = Uy, this.repeatKey = null !== (Wy = null === Uy || void 0 === Uy ? void 0 : Uy.getAttribute("data-pad-repeat")) && void 0 !== Wy ? Wy : null, this.repeated = !1, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now())
        }
        updateRepeat() {
          const yb = this.repeatStop;
          if (!yb) return;
          const bb = this.hit;
          yb.isConnected && !Bb(yb) && yb.getAttribute("data-pad-repeat") === this.repeatKey && bb && yb.contains(bb) ? yb.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.repeated = !0, bc.noteCursorActivation(yb), (0, ly.f)(yb, new MouseEvent("click", Vb(this.getPoint(), 0, 0)))) : this.repeatStop = null
        }
        endRepeat() {
          this.repeatStop = null, this.repeated = !1
        }
        endPressWithoutClick(yb) {
          "slider" === yb.kind && yb.adjuster.endDrag(), "pointer" === yb.kind && yb.target.isConnected && Gb(yb.target, this.getPoint())
        }
        cancelPress() {
          this.endRepeat(), this.press && (this.endPressWithoutClick(this.press), this.press = null)
        }
        updateSecondary(yb, bb) {
          yb.wasPressed(bb) && (this.secondaryArmed = null !== this.hit), this.secondaryArmed && !yb.isHeld(bb) && (this.secondaryArmed = !1, yb.wasReleased(bb) && this.hit && Ob(this.hit, this.getPoint(), 2))
        }
        updateScroll(yb, bb) {
          const Wy = Gy(yb.rightStick, yb.dtMs);
          if (0 === Wy.x && 0 === Wy.y) return void(this.scrollRemainder = {
            x: 0,
            y: 0
          });
          this.scrollRemainder = {
            x: this.scrollRemainder.x + Wy.x,
            y: this.scrollRemainder.y + Wy.y
          };
          const Uy = Math.trunc(this.scrollRemainder.x),
            hy = Math.trunc(this.scrollRemainder.y);
          this.scrollRemainder = {
            x: this.scrollRemainder.x - Uy,
            y: this.scrollRemainder.y - hy
          };
          const fy = this.hit;
          if (!fy) return;
          let Zy = !1;
          if (0 !== hy) {
            const yb = LZ(fy, "y", hy > 0 ? 1 : -1, bb);
            yb && (yb.scrollBy({
              top: hy,
              behavior: "instant"
            }), Zy = !0)
          }
          if (0 !== Uy) {
            const yb = LZ(fy, "x", Uy > 0 ? 1 : -1, bb);
            yb && (yb.scrollBy({
              left: Uy,
              behavior: "instant"
            }), Zy = !0)
          }
          Zy && (this.lastHitTestMs = -1 / 0)
        }
        EZ() {
          Lb.set({
            x: this.state.x,
            y: this.state.y,
            visible: this.isVisible(),
            pressed: null !== this.press && "ignored" !== this.press.kind
          })
        }
      },
      jc = () => {
        const yb = (0, Hy.useMemo)((() => new jb), []),
          bb = (0, qb.z)();
        return (0, Hy.useEffect)((() => {
          if (!bb) return;
          let Wy = 0,
            Uy = {
              of: null,
              atMs: 0,
              list: []
            };
          const hy = document.getElementsByClassName(Yf),
            fy = yb => {
              for (const bb of [...hy]) bb !== yb && bb.classList.remove(Yf)
            },
            Zy = () => {
              var bb;
              Wy = requestAnimationFrame(Zy);
              const hy = (() => {
                const yb = bc.getFocused();
                if (bc.isActive() && null !== yb && void 0 !== yb && yb.isConnected) return yb;
                const bb = QZ.getHighlighted();
                return null !== bb && void 0 !== bb && bb.isConnected ? bb : null
              })();
              fy(hy), hy && !hy.classList.contains(Yf) && hy.classList.add(Yf);
              const cb = null !== (bb = null === hy || void 0 === hy ? void 0 : hy.closest("[data-pad-reticle-box]")) && void 0 !== bb ? bb : hy;
              yb.show(cb ? ((yb, bb) => {
                let Wy = yb.left,
                  Uy = yb.top,
                  hy = yb.right,
                  fy = yb.bottom;
                for (const Zy of bb) {
                  if (!Zy) continue;
                  const yb = uy(Zy);
                  Wy = Math.max(Wy, yb.left), Uy = Math.max(Uy, yb.top), hy = Math.min(hy, yb.right), fy = Math.min(fy, yb.bottom)
                }
                return hy <= Wy || fy <= Uy ? null : {
                  left: Wy,
                  top: Uy,
                  width: hy - Wy,
                  height: fy - Uy
                }
              })(cb.getBoundingClientRect(), (yb => {
                const bb = performance.now();
                return (Uy.of !== yb || bb - Uy.atMs > 500) && (Uy = {
                  of: yb,
                  atMs: bb,
                  list: [vb(yb, "y"), vb(yb, "x")]
                }), Uy.list
              })(cb)) : null)
            };
          return Wy = requestAnimationFrame(Zy), () => {
            cancelAnimationFrame(Wy), fy(null), yb.hide()
          }
        }), [bb, yb]), (0, py.jsx)(Dy, {
          placer: yb,
          className: "PadFocusRing"
        })
      },
      DZ = (yb, bb) => {
        yb.style.transform = `translate3d(${bb.x}px, ${bb.y}px, 0)`, yb.classList.toggle("Visible", bb.visible), yb.classList.toggle("Pressed", bb.pressed)
      },
      tc = () => {
        const yb = (0, Hy.useRef)(null);
        return (0, Hy.useEffect)((() => {
          const bb = Lb.subscribe((bb => {
            yb.current && DZ(yb.current, bb)
          }));
          return yb.current && DZ(yb.current, Lb.get()), bb
        }), []), (0, py.jsx)("div", {
          ref: yb,
          className: "PadCursorView",
          "aria-hidden": "true",
          children: (0, py.jsx)("div", {
            className: "PadCursorGlyph",
            children: "+"
          })
        })
      },
      wZ = "#ncmp__modal.ncmp__active",
      kc = [{
        id: "nitro-consent-banner",
        find: () => document.querySelector(wZ) ? null : document.querySelector("#ncmp__tool > .ncmp__banner.ncmp__active"),
        startSelectors: ["[data-ncmp-cmd='reject']", "[data-ncmp-cmd='showModal']"]
      }, {
        id: "nitro-consent-modal",
        find: () => document.querySelector(wZ),
        startSelectors: ["[data-ncmp-cmd='reject']"]
      }, {
        id: "google-consent",
        find: () => document.querySelector(".fc-consent-root"),
        startSelectors: [".fc-cta-do-not-consent", ".fc-cta-manage-options"]
      }],
      NZ = "PadOverThirdParty",
      zc = new Set(kc.map((yb => yb.id))),
      IZ = () => {
        const yb = kc.map((yb => {
            let {
              id: bb,
              find: Wy,
              startSelectors: Uy
            } = yb;
            return (0, hf.p)({
              id: bb,
              kind: "popup",
              getRoot: () => {
                const yb = Wy(),
                  bb = yb ? ((yb, bb) => {
                    var Wy;
                    for (const Uy of bb) {
                      const bb = yb.querySelector(Uy);
                      if (bb) return bb
                    }
                    return null !== (Wy = [...yb.querySelectorAll("button")].find((yb => !yb.matches(".fc-cta-consent, [data-ncmp-cmd='save']")))) && void 0 !== Wy ? Wy : null
                  })(yb, Uy) : null;
                if (yb && bb && !bb.hasAttribute("data-pad-default-focus")) {
                  for (const bb of yb.querySelectorAll("[data-pad-default-focus]")) bb.removeAttribute("data-pad-default-focus");
                  for (const bb of yb.querySelectorAll("[data-pad-hint-bar-avoid]")) bb.removeAttribute("data-pad-hint-bar-avoid");
                  bb.setAttribute("data-pad-default-focus", ""), ((yb, bb) => {
                    let Wy = yb;
                    for (let Uy = yb.parentElement; Uy && bb.contains(Uy) && !(Uy.getBoundingClientRect().height >= window.innerHeight / 2); Uy = Uy.parentElement) Wy = Uy;
                    return Wy
                  })(bb, yb).setAttribute("data-pad-hint-bar-avoid", "")
                }
                return yb
              },
              close: null,
              memoryKey: null
            })
          })),
          bb = document.documentElement,
          Wy = Zy.f.onFrame((() => {
            const yb = (0, qb.o)() ? ef() : null,
              Wy = !!yb && (Uy = yb.layer, zc.has(Uy.id));
            var Uy;
            bb.classList.contains(NZ) !== Wy && bb.classList.toggle(NZ, Wy)
          }));
        return () => {
          for (const bb of yb) bb();
          Wy(), bb.classList.remove(NZ)
        }
      },
      xc = "PadLargePointer",
      AZ = () => {
        (0, Hy.useEffect)((() => {
          const yb = (0, ly.m)(document.body),
            bb = bc.install(),
            Wy = QZ.install(),
            Uy = IZ();
          return () => {
            yb(), bb(), Wy(), Uy()
          }
        }), []);
        const {
          largePointer: yb
        } = (0, ey.n)(), bb = (0, OZ.q)() && yb;
        return (0, Hy.useEffect)((() => {
          if (bb) return document.documentElement.classList.add(xc), () => {
            document.documentElement.classList.remove(xc)
          }
        }), [bb]), (0, cb.createPortal)((0, py.jsxs)(py.Fragment, {
          children: [(0, py.jsx)(HZ, {}), (0, py.jsx)(jc, {}), (0, py.jsx)(tc, {})]
        }), document.body)
      };
    var dZ = Wy(7923),
      yP = Wy(7946),
      bP = Wy(7932);
    Wy(7952);
    const Wc = (yb, bb) => {
        const [Wy, Uy] = (0, Hy.useState)(!1), [hy, fy] = (0, Hy.useState)(null), Zy = (0, Hy.useRef)(null), cb = (0, Hy.useCallback)((yb => {
          Zy.current = yb, fy(yb)
        }), []), Py = (0, Hy.useCallback)((() => {
          Uy(!1), cb(null)
        }), [cb]), By = (0, Hy.useCallback)((() => {
          Uy(!0)
        }), []), Ky = (0, Hy.useCallback)(((yb, bb) => {
          cb((0, bP.x)(yb, bb, Zy.current))
        }), [cb]);
        (0, Hy.useLayoutEffect)((() => (bb(Wy), (0, RZ.s)(yb, Wy), oy.g.EZ(RZ.n), () => {
          bb(!1), (0, RZ.s)(yb, !1), oy.g.EZ(RZ.n)
        })), [Wy, yb, bb]), (0, sU.i)("appManagerUpdated|activeInputDevice", (yb => {
          "gamepad" !== yb && Py()
        })), (0, sU.i)("appManagerUpdated|gameState", (yb => {
          "inGame" !== yb && Py()
        }));
        const ey = () => {
          (0, Kh.n)() && Py()
        };
        return (0, sU.i)("appManagerUpdated|openEverythingMenuName", ey), (0, sU.i)("appManagerUpdated|openInGameMenuName", ey), {
          open: Wy,
          picked: hy,
          pickedRef: Zy,
          show: By,
          aim: Ky,
          close: Py
        }
      },
      Uc = yb => {
        let {
          className: bb,
          slotCount: Wy,
          picked: Uy,
          slotLabel: hy,
          renderSlot: fy,
          centre: Zy
        } = yb;
        const cb = Array.from({
          length: Wy
        }, ((yb, bb) => bb));
        return (0, py.jsx)("div", {
          className: Fy()("EmoteWheelOverlay PadRadialWheel", bb),
          children: (0, py.jsxs)("div", {
            className: "EmoteWheel",
            style: {
              width: 2 * bP.k + "rem",
              height: 2 * bP.k + "rem"
            },
            children: [(0, py.jsxs)("svg", {
              className: "EmoteWheelSvg",
              viewBox: `0 0 ${bP.g} ${bP.g}`,
              children: [cb.map((yb => (0, py.jsx)("path", {
                d: (0, bP.l)(yb, Wy, bP.d, bP.e, bP.f),
                className: Fy()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: yb === Uy
                }),
                "aria-label": hy(yb)
              }, yb))), (0, py.jsx)("circle", {
                className: "EmoteWheelOuterRing",
                cx: bP.d,
                cy: bP.d,
                r: bP.f
              }), (0, py.jsx)("circle", {
                className: "EmoteWheelInnerRing",
                cx: bP.d,
                cy: bP.d,
                r: bP.e
              }), null !== Uy && (0, py.jsx)("path", {
                className: "EmoteWheelWedgeOutline",
                d: (0, bP.l)(Uy, Wy, bP.d, bP.e, bP.f)
              })]
            }), cb.map((yb => {
              const bb = (0, bP.q)(yb, Wy);
              return (0, py.jsx)("div", {
                className: Fy()("PadRadialWheelSlot SmallTextBold", {
                  PadRadialWheelSlotPicked: yb === Uy
                }),
                style: {
                  left: `calc(50% + ${bP.b*Math.cos(bb)}rem)`,
                  top: `calc(50% + ${bP.b*Math.sin(bb)}rem)`
                },
                "aria-hidden": !0,
                children: fy(yb)
              }, yb)
            })), (0, py.jsx)("div", {
              className: "EmoteWheelHint SmallTextBold",
              children: Zy
            })]
          })
        })
      },
      hc = WZ.length,
      fc = () => {
        const {
          t: yb
        } = (0, hy.D)(), bb = Wc("chat", nh.s), Wy = (0, Hy.useMemo)((() => WZ.map((bb => yb(bb)))), [yb]);
        return (0, sU.i)(nh.p, (() => {
          bb.open || (0, dZ.f)() || (0, yP.p)() || "inGame" !== Py.d.get("gameState") || (0, Kh.n)() || !(0, cf.c)() || bb.show()
        })), (0, sU.i)(nh.f, (yb => {
          bb.open && bb.aim(yb, hc)
        })), (0, sU.i)(nh.m, (() => {
          var yb;
          if (!bb.open) return;
          const Uy = bb.pickedRef.current;
          null !== Uy ? UZ.claim(performance.now()) && (bb.close(), null === (yb = (0, cf.c)()) || void 0 === yb || yb.sendLine(Wy[Uy])) : bb.close()
        })), (0, sU.i)(nh.j, bb.close), bb.open ? (0, py.jsx)(Uc, {
          className: "QuickChatWheel",
          slotCount: hc,
          picked: bb.picked,
          slotLabel: yb => Wy[yb],
          renderSlot: yb => Wy[yb],
          centre: null !== bb.picked ? Wy[bb.picked] : yb("controller:quickChatPick")
        }) : null
      },
      Zc = () => {
        const {
          t: yb
        } = (0, hy.D)(), bb = Wc("actionButton", yP.t), [Wy, Uy] = (0, Hy.useState)([]);
        if ((0, sU.i)(yP.k, (yb => {
            bb.open || (0, dZ.f)() || (0, nh.b)() || "inGame" !== Py.d.get("gameState") || (0, Kh.n)() || (Uy(yb), bb.show())
          })), (0, sU.i)(yP.c, (yb => {
            bb.open && bb.aim(yb, Wy.length)
          })), (0, sU.i)(yP.h, (() => {
            if (!bb.open) return;
            const yb = bb.pickedRef.current;
            bb.close(), null !== yb && oy.g.EZ(yP.l, Wy[yb])
          })), (0, sU.i)(yP.e, bb.close), !bb.open) return null;
        const fy = null !== bb.picked ? Wy[bb.picked] : null;
        return (0, py.jsx)(Uc, {
          className: "ActionWheel",
          slotCount: Wy.length,
          picked: bb.picked,
          slotLabel: bb => {
            const Uy = Wy[bb];
            return "reload" === Uy.kind ? yb("controller:gameplayReload") : "customButton" === Uy.kind ? Uy.description || Uy.icon : "touchButton" === Uy.kind && "string" === typeof Uy.label ? Uy.label : ""
          },
          renderSlot: yb => (0, py.jsx)(JU, {
            action: Wy[yb]
          }),
          centre: fy ? (0, py.jsx)(JU, {
            action: fy
          }) : yb("controller:actionWheelPick")
        })
      };
    var cP = Wy(94);
    const Pc = () => ((0, Hy.useEffect)((() => {
        var yb, bb;
        const Wy = (0, ly.m)(document.getElementById("root")),
          Uy = (0, qb.h)(),
          hy = (() => {
            const yb = [oy.g.subscribe(dW.f, (() => {
                UU("blockBreak")
              })), oy.g.subscribe("damagedByOtherPlayer", (() => {
                UU("damage")
              })), oy.g.subscribe("yourAttackHit", (yb => {
                let {
                  hitSelf: bb
                } = yb;
                bb || UU("hit")
              }))],
              bb = Zy.f.onActivePadChanged((yb => {
                yb && UU("connect")
              }));
            return () => {
              for (const bb of yb) oy.g.unsubscribe(bb);
              bb()
            }
          })(),
          fy = (() => {
            const yb = new oU({
              getVisitId: PU.d,
              peekVisitId: PU.peekVisitSessionId,
              readReportedVisitId: () => {
                const yb = ch.g.getItem(BU);
                return "string" === typeof yb ? yb : null
              },
              writeReportedVisitId: yb => {
                ch.g.setItem(BU, yb)
              },
              isPadActive: qb.o,
              getPadFamily: () => {
                var yb, bb;
                return null !== (yb = null === (bb = Zy.f.getActivePad()) || void 0 === bb ? void 0 : bb.family) && void 0 !== yb ? yb : null
              },
              canReport: fU.h,
              getInputType: ZU.b,
              KU: fU.m
            });
            let bb = 0,
              Wy = null;
            const Uy = hy => {
                null === Wy && ("notReady" !== yb.check(hy) || null !== Wy || bb >= 20 || (bb++, Wy = setTimeout((() => {
                  Wy = null, Uy(!1)
                }), 3e3)))
              },
              hy = oy.g.subscribe("appManagerUpdated|activeInputDevice", (() => {
                Uy(!0)
              })),
              fy = (0, PU.f)((() => {
                bb = 0, Uy(!0)
              }));
            return () => {
              oy.g.unsubscribe(hy), fy(), null !== Wy && clearTimeout(Wy)
            }
          })(),
          cb = Zy.f.onFrame(((yb, bb) => {
            const Wy = (0, qb.q)(yb);
            Ky.b.dispatch(yb, bb, Wy)
          }));
        let By = null !== (yb = null === (bb = Zy.f.getActivePad()) || void 0 === bb ? void 0 : bb.family) && void 0 !== yb ? yb : null;
        const sy = Zy.f.onActivePadChanged((yb => {
            var bb, Wy;
            (Ky.b.reset(), (0, qb.u)(), oy.g.EZ(Zy.c, yb), (null !== (bb = null === yb || void 0 === yb ? void 0 : yb.family) && void 0 !== bb ? bb : null) !== By) && (By = null !== (Wy = null === yb || void 0 === yb ? void 0 : yb.family) && void 0 !== Wy ? Wy : null, oy.g.EZ(ey.d, (0, ey.g)()));
            !yb && (0, qb.o)() && (0, qb.v)(Py.d.get("isTouchScreen") ? "touch" : "keyboardMouse")
          })),
          Sy = () => {
            "visible" !== document.visibilityState && Ky.b.clear()
          },
          Ey = () => {
            Ky.b.clear()
          };
        document.addEventListener("visibilitychange", Sy), window.addEventListener("blur", Ey), Zy.f.start(), (0, hU.h)();
        const mb = null;
        return () => {
          Wy(), Uy(), hy(), fy(), cb(), sy(), document.removeEventListener("visibilitychange", Sy), window.removeEventListener("blur", Ey), Zy.f.stop(), null === mb || void 0 === mb || mb()
        }
      }), []), (0, py.jsxs)("div", {
        className: "ControllerRoot",
        children: [(0, py.jsx)(MU, {}), (0, py.jsx)(pU, {}), (0, py.jsx)(LU, {}), (0, py.jsx)(gc, {}), (0, py.jsx)(AZ, {}), (0, py.jsx)(fc, {}), (0, py.jsx)(Zc, {})]
      })),
      oc = () => cP.featureFlags.useControllerSupport ? (0, py.jsx)(Pc, {}) : null;
    var Bc = Wy(7349),
      Kc = Wy(7960);
    const ec = new Set(hU.e),
      qP = yb => `${Kc.l}${(0,ey.i)()}/${yb}`,
      sc = yb => {
        if (!(0, Kc.k)(yb)) return null;
        const [bb, Wy] = yb.slice(Kc.l.length).split("/");
        return (0, Bc.d)(bb) && ec.has(Wy) ? (0, hU.d)(bb, Wy) : null
      };
    var Sc = Wy(7968);
    const Ec = () => {
        const {
          t: yb
        } = (0, hy.D)(), bb = (0, qb.z)(), {
          gameState: Wy,
          isUiHidden: Uy
        } = (0, Py.h)(["gameState", "isUiHidden"]), {
          hideButtonHints: fy,
          sneakMode: Zy
        } = (0, ey.n)(), [cb, oy] = (0, Hy.useState)(Sc.b);
        return (0, sU.i)(ih.t, oy), bb && !Uy && "inGame" === Wy && cb ? (0, py.jsxs)("div", {
          className: "PadSneakChip SmallTextBold",
          children: [!fy && (0, py.jsx)(TU, {
            glyph: (0, By.e)("toggle" === Zy ? "sneak" : "sneakToggle")
          }), (0, py.jsx)("span", {
            children: yb("controller:gameplaySneaking")
          })]
        }) : null
      },
      lc = 12,
      mP = yb => {
        let {
          trigger: bb,
          className: Wy,
          children: Uy
        } = yb;
        const hy = (0, Hy.useRef)(null);
        return (0, Hy.useEffect)((() => {
          let yb = 0;
          const Wy = vb(bb, "y"),
            Uy = () => {
              yb = requestAnimationFrame(Uy);
              const fy = hy.current;
              if (!fy || null === bb || void 0 === bb || !bb.isConnected) return;
              const {
                left: Zy,
                top: cb
              } = function(yb, bb, Wy) {
                let Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                  hy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                const fy = yb.left + yb.width / 2,
                  Zy = Math.max(lc, Wy.width - lc - bb.width),
                  cb = Math.min(Math.max(fy - bb.width / 2, lc), Zy),
                  Py = Wy.height - Uy;
                let oy = 0,
                  By = Py;
                if (hy) {
                  const yb = Math.max(0, hy.top),
                    Uy = Math.min(Py, hy.bottom);
                  Uy - yb >= Math.max(Wy.height / 2, bb.height + 24) && (oy = yb, By = Uy)
                }
                const Ky = yb.top + yb.height / 2 < (oy + By) / 2 ? By - lc - bb.height : oy + lc;
                return {
                  left: cb,
                  top: Math.max(lc, Ky)
                }
              }(bb.getBoundingClientRect(), {
                width: fy.offsetWidth,
                height: fy.offsetHeight
              }, {
                width: window.innerWidth,
                height: window.innerHeight
              }, parseFloat(document.documentElement.style.getPropertyValue(YZ)) || 0, null !== Wy && void 0 !== Wy && Wy.isConnected ? Wy.getBoundingClientRect() : null);
              fy.style.transform = `translate3d(${Math.round(Zy)}px, ${Math.round(cb)}px, 0)`, fy.style.visibility = "visible"
            };
          return Uy(), () => {
            cancelAnimationFrame(yb)
          }
        }), [bb]), (0, py.jsx)("div", {
          ref: hy,
          className: Wy,
          style: {
            position: "fixed",
            left: 0,
            top: 0,
            visibility: "hidden"
          },
          children: Uy
        })
      };
    var Cc = Wy(910),
      Tc = Wy(7974),
      Vc = Wy(1273),
      Jc = Wy(7981),
      gP = Wy(7987);
    const Gc = {
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
        qh: {
          icon: "arrow-left",
          labelKey: "settingsMenu:exitGame"
        }
      },
      Oc = () => {
        const {
          t: yb
        } = (0, hy.D)(), bb = (0, qb.z)(), Wy = (0, Tc.d)(), Uy = (0, HU.k)("_tasks"), fy = (0, HU.k)("_availableLeaderboards");
        if (!bb) return null;
        const Zy = (yb => {
          let {
            hasShop: bb,
            hasTasksOrLeaderboards: Wy,
            canInvite: Uy
          } = yb;
          const hy = [];
          return bb && hy.push("shop"), Wy && hy.push("tasks"), Uy && hy.push("invite"), hy.push("qh"), hy
        })({
          hasShop: Wy,
          hasTasksOrLeaderboards: !(!Uy && !fy),
          canInvite: !!cP.featureFlags.canUseInviteLinks
        });
        return (0, py.jsx)("div", {
          className: "PadLobbyShortcuts",
          children: Zy.map((bb => {
            const {
              icon: Wy,
              labelKey: Uy
            } = Gc[bb], hy = "qh" === bb ? Vc.C : Vc.f;
            return (0, py.jsx)(hy, {
              className: "PadLobbyShortcut",
              onClick: () => {
                (yb => {
                  switch (yb) {
                    case "shop":
                      return oy.g.EZ(gP.m), void Py.d.set({
                        openEverythingMenuName: Bh.o.SHOP
                      });
                    case "tasks":
                      return void oy.g.EZ("toggleMenu", "retentionFeatures");
                    case "invite":
                      return void oy.g.EZ("toggleMenu", "inviteLink");
                    case "qh":
                      (0, Jc.d)()
                  }
                })(bb)
              },
              children: (0, py.jsxs)("div", {
                className: "PadLobbyShortcutInner",
                children: [(0, py.jsx)(Cc.e, {
                  name: Wy
                }), (0, py.jsx)("span", {
                  children: yb(Uy)
                })]
              })
            }, bb)
          }))
        })
      };
    var Rc = Wy(1620);
    const vP = sy.z,
      iP = ["forward", "backward", "left", "right", "sprint"],
      Mc = yb => yb.ctrlKey || yb.altKey || "Alt" === yb.key || "ArrowUp" === yb.key || "ArrowDown" === yb.key || "Tab" === yb.code || "/" === yb.key || "Slash" === yb.code;
    class Yc {
      constructor() {
        this.armed = !1, this.swallowedKeys = new Set, this.previousHeld = new Array(sy.bb).fill(!1), this.leftStickWasPressed = !1, this.rightStickWasPressed = !1, this.consumeNextFrame = !1, this.consumeAfterContinue = !1
      }
      setArmed(yb) {
        this.armed = yb
      }
      blocksGameplay() {
        return this.armed || this.consumeNextFrame
      }
      onKeyDown(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Wy = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return !this.armed || bb ? !yb.repeat && this.swallowedKeys.delete(yb.code) ? {
          swallow: !1,
          continues: !1
        } : {
          swallow: this.swallowedKeys.has(yb.code),
          continues: !1
        } : "Escape" === yb.key || yb.repeat && !this.swallowedKeys.has(yb.code) ? {
          swallow: !1,
          continues: !1
        } : Wy ? {
          swallow: !1,
          continues: !0
        } : (this.swallowedKeys.add(yb.code), {
          swallow: !0,
          continues: (0, qb.k)(yb)
        })
      }
      onKeyUp(yb) {
        return this.swallowedKeys.delete(yb.code)
      }
      forgetKeys() {
        this.swallowedKeys.clear()
      }
      onPadFrame(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Uy = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const hy = (0, sy.r)(yb.values, this.previousHeld),
          fy = null === Wy ? -1 : (0, sy.n)(Wy),
          Zy = fy >= 0 && hy[fy] && !this.previousHeld[fy],
          cb = hy.some(((yb, bb) => yb && !this.previousHeld[bb] && bb !== fy)),
          Py = Math.hypot(yb.leftStick.x, yb.leftStick.y) >= vP,
          oy = Math.hypot(yb.rightStick.x, yb.rightStick.y) >= vP,
          By = Py && !this.leftStickWasPressed || oy && !this.rightStickWasPressed;
        this.previousHeld = hy, this.leftStickWasPressed = Py, this.rightStickWasPressed = oy;
        let Ky = !1;
        this.consumeNextFrame && (this.consumeNextFrame = !1, Ky = !0);
        const ey = !bb && Zy && !Uy,
          qb = !ey && this.armed && !bb && (cb || By);
        return (ey || qb) && (this.consumeNextFrame = !0, this.consumeAfterContinue = qb, Ky = !0), {
          continues: qb,
          back: ey,
          consumeHeld: Ky
        }
      }
      consumeLeavesMoveStick() {
        return this.consumeAfterContinue
      }
    }
    const Xc = new Set([...Rc.k, ...Rc.H]),
      nc = yb => ((yb, bb, Wy) => {
        const Uy = Object.keys(bb).filter((Uy => !Wy.has(Uy) && bb[Uy].includes(yb)));
        return Uy.length > 0 && Uy.every((yb => iP.includes(yb)))
      })(yb, Rc.w, Xc),
      uc = (yb, bb, Wy) => {
        const Uy = new Yc,
          hy = yb => {
            if (!yb.isTrusted) return;
            const {
              swallow: Wy,
              continues: hy
            } = Uy.onKeyDown(yb, !(0, qb.E)(yb) || (0, AW.i)() || (0, Kh.n)(), nc(yb.code));
            Wy && (yb.stopImmediatePropagation(), Mc(yb) && yb.preventDefault()), hy && ((0, qb.v)("keyboardMouse"), bb())
          },
          fy = yb => {
            yb.isTrusted && Uy.onKeyUp(yb) && (yb.stopImmediatePropagation(), Mc(yb) && yb.preventDefault())
          },
          cb = () => {
            Uy.forgetKeys()
          };
        window.addEventListener("keydown", hy, !0), window.addEventListener("keyup", fy, !0), window.addEventListener("blur", cb);
        const Py = Zy.f.onFrame((yb => {
            const hy = Ky.b.getActiveConsumerName(),
              fy = Wy(),
              Zy = fy ? (0, By.e)("menuBack") : null,
              cb = null !== hy && "gameplay" !== hy,
              {
                continues: Py,
                back: oy,
                consumeHeld: sy
              } = Uy.onPadFrame(yb, cb, Zy, (0, qb.p)(yb));
            if (sy) {
              const yb = (0, ey.g)().swapSticks ? "right" : "left";
              Ky.b.consumeAllHeld(Uy.consumeLeavesMoveStick() ? yb : null)
            }
            oy ? null === fy || void 0 === fy || fy() : Py && bb()
          })),
          oy = (0, AW.j)(`pressToContinue:${yb}`, (() => Uy.blocksGameplay()));
        return {
          setArmed: yb => {
            Uy.setArmed(yb)
          },
          dispose: () => {
            window.removeEventListener("keydown", hy, !0), window.removeEventListener("keyup", fy, !0), window.removeEventListener("blur", cb), Py(), oy()
          }
        }
      };
    var rP = Wy(4200),
      Hc = Wy(2726),
      aP = Wy(2459),
      Fc = Wy(7352);
    const pc = yb => {
        let {
          text: bb
        } = yb;
        return (0, py.jsx)("div", {
          className: "ControllerSettingsHeading",
          children: bb
        })
      },
      Lc = yb => {
        let {
          label: bb,
          hint: Wy,
          options: Uy,
          value: fy,
          onChange: Zy
        } = yb;
        const {
          t: cb
        } = (0, hy.D)();
        return (0, py.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, py.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: [(0, py.jsxs)("div", {
              className: "ControllerChoiceText",
              children: [(0, py.jsx)("div", {
                className: "SliderText",
                children: bb
              }), Wy && (0, py.jsx)("div", {
                className: "ControllerSettingsHint",
                children: Wy
              })]
            }), (0, py.jsx)(aP.c, {
              options: Uy.map((yb => ({
                label: "label" in yb ? yb.label : cb(yb.labelKey),
                value: yb.value
              }))),
              value: fy,
              onChange: yb => {
                Zy(yb.value)
              }
            })]
          })
        })
      },
      Qc = yb => {
        let {
          settingKey: bb,
          label: Wy,
          range: Uy,
          format: hy
        } = yb;
        const fy = (0, ey.n)();
        return (0, py.jsx)(rP.f, {
          name: Wy,
          min: Uy.min,
          max: Uy.max,
          step: Uy.step,
          padStep: Uy.step,
          initValue: fy[bb],
          format: hy,
          onChange: yb => {
            (0, ey.k)({
              [bb]: (0, Fc.z)(yb, Uy)
            })
          }
        })
      };
    var jP = Wy(7993),
      Dc = Wy(8002);
    const tP = yb => yb instanceof DOMException && ("SecurityError" === yb.name || "NotAllowedError" === yb.name),
      wc = yb => {
        const [bb] = [...yb.controllers].sort(((yb, bb) => Dc.q[yb] - Dc.q[bb]));
        return Dc.n[bb]
      },
      kP = yb => {
        (0, jP.b)().allowPhoneMotion().catch((bb => {
          yb && tP(bb) ? yb() : console.warn("Could not enable the motion sensor", bb)
        }))
      },
      Nc = {
        waiting: "controller:settingsGyroPhoneWaiting",
        noSensor: "controller:settingsGyroPhoneNoSensor",
        on: "controller:settingsGyroPhoneOn",
        denied: "controller:settingsGyroPhoneDenied"
      },
      zP = yb => {
        let {
          status: bb
        } = yb;
        const {
          t: Wy
        } = (0, hy.D)(), [Uy, fy] = (0, Hy.useState)(null), Zy = `${bb.controllers.join(",")}|${bb.phoneMotion}`;
        (0, Hy.useEffect)((() => {
          fy(null)
        }), [Zy]);
        const cb = () => {
          (0, jP.b)().connectController().then((yb => {
            fy(yb > 0 ? "openFailed" : null)
          })).catch((yb => {
            tP(yb) ? fy("needsClick") : console.warn("Could not connect motion controller", yb)
          }))
        };
        if (bb.hidSupported) {
          let yb = Wy("controller:settingsGyroConnectHint");
          return "needsClick" === Uy ? yb = Wy("controller:settingsGyroConnectNeedsClick") : "openFailed" === Uy ? yb = Wy("controller:settingsGyroOpenFailed") : bb.controllers.length > 0 && (yb = Wy("controller:settingsGyroConnected", {
            name: wc(bb)
          })), (0, py.jsx)("div", {
            className: "SettingBox ControllerChoiceSetting",
            children: (0, py.jsxs)("div", {
              className: "ControllerChoiceRow",
              children: [(0, py.jsx)("div", {
                className: "ControllerSettingsHint",
                children: yb
              }), (0, py.jsx)(Vc.f, {
                onClick: cb,
                children: Wy("controller:settingsGyroConnect")
              })]
            })
          })
        }
        if ("needsPermission" === bb.phoneMotion) return (0, py.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, py.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: ["needsTap" === Uy && (0, py.jsx)("div", {
              className: "ControllerSettingsHint",
              children: Wy("controller:settingsGyroAllowNeedsTap")
            }), (0, py.jsx)(Vc.f, {
              onClick: () => {
                kP((() => {
                  fy("needsTap")
                }))
              },
              children: Wy("controller:settingsGyroAllowMotion")
            })]
          })
        });
        const Py = Nc[bb.phoneMotion];
        return Py ? (0, py.jsx)("div", {
          className: "ControllerSettingsHint",
          children: Wy(Py)
        }) : null
      },
      Ic = () => {
        const {
          t: yb
        } = (0, hy.D)(), bb = (0, ey.n)(), Wy = (0, jP.d)(), Uy = (0, qb.A)(), fy = !Wy.hidSupported && Wy.phoneSupported && !Wy.padConnected, Zy = (Wy.hidSupported || Wy.phoneSupported) && !fy, cb = (0, By.e)("pause");
        return (0, py.jsxs)(py.Fragment, {
          children: [(0, py.jsx)(pc, {
            text: yb("controller:settingsGyro")
          }), fy && (0, py.jsx)("div", {
            className: "ControllerSettingsHint",
            children: yb("controller:settingsGyroPhoneNeedsController")
          }), !Zy && !fy && (0, py.jsx)("div", {
            className: "ControllerSettingsHint",
            children: yb(Wy.hidBlocked || Wy.phoneBlocked ? "controller:settingsGyroBlocked" : "controller:settingsGyroUnsupported")
          }), Zy && (0, py.jsx)(rP.c, {
            label: yb(Wy.hidSupported ? "controller:settingsGyroToggle" : "controller:settingsGyroTogglePhone"),
            checked: bb.gyroAiming,
            onClick: yb => {
              var bb, Wy;
              (0, ey.k)({
                gyroAiming: yb
              });
              const Uy = null === (bb = null === (Wy = navigator.userActivation) || void 0 === Wy ? void 0 : Wy.isActive) || void 0 === bb || bb;
              if (!yb || !Uy) return;
              const hy = (0, jP.b)(),
                fy = hy.getStatus();
              fy.hidSupported ? hy.connectControllerIfNoneGranted().catch((yb => {
                console.warn("Motion controller picker unavailable", yb)
              })) : "needsPermission" === fy.phoneMotion && kP()
            },
            circleInfoText: yb(Wy.hidSupported ? "controller:settingsGyroToggleInfo" : "controller:settingsGyroToggleInfoPhone")
          }), Zy && Wy.hidSupported && (0, py.jsx)("div", {
            className: "ControllerSettingsHint",
            children: yb("controller:settingsGyroSteamHint")
          }), Zy && bb.gyroAiming && (0, py.jsxs)(py.Fragment, {
            children: [(0, py.jsx)(zP, {
              status: Wy
            }), (0, py.jsx)(Qc, {
              settingKey: "gyroSensitivity",
              label: yb("controller:settingsGyroSensitivity"),
              range: Fc.S,
              format: Fc.L
            }), (0, py.jsx)(Lc, {
              label: yb("controller:settingsGyroActivation"),
              hint: "aiming" === bb.gyroActivation && (0, py.jsx)(Hc.e, {
                text: yb("controller:settingsGyroAimingHint", {
                  button: Hc.g
                }),
                glyph: (0, By.e)("use")
              }),
              options: Fc.Q,
              value: bb.gyroActivation,
              onChange: yb => {
                (0, ey.k)({
                  gyroActivation: yb
                })
              }
            }), "button" === bb.gyroActivation && (0, py.jsx)(Lc, {
              label: yb("controller:settingsGyroButton"),
              hint: yb("controller:settingsGyroButtonHint"),
              options: Fc.w.filter((yb => yb !== cb || yb === bb.gyroButton)).map((yb => ({
                label: CU(Uy, yb),
                value: yb
              }))),
              value: bb.gyroButton,
              onChange: yb => {
                (0, ey.k)({
                  gyroButton: yb
                })
              }
            })]
          })]
        })
      };
    var xP = Wy(1738);
    const Ac = () => {
      const {
        t: yb
      } = (0, hy.D)(), bb = (0, ey.n)(), Wy = (0, qb.A)();
      return (0, py.jsxs)(py.Fragment, {
        children: [(0, py.jsx)(pc, {
          text: yb("controller:settingsAccessibility")
        }), (0, py.jsx)(rP.c, {
          label: yb("controller:settingsSwapConfirmBack"),
          checked: (0, By.B)(bb.swapConfirmBack, Wy),
          onClick: yb => {
            (0, ey.k)({
              swapConfirmBack: yb === (0, By.B)(null, Wy) ? null : yb
            }), xP.e.showMessage({
              translationKey: "controller:settingsSwapToast"
            })
          },
          circleInfoText: yb("controller:settingsSwapConfirmBackInfo")
        }), (0, py.jsx)(Lc, {
          label: yb("controller:settingsButtonRepeat"),
          hint: yb("controller:settingsButtonRepeatHint"),
          options: Fc.u,
          value: bb.buttonRepeat,
          onChange: yb => {
            (0, ey.k)({
              buttonRepeat: yb
            })
          }
        }), (0, py.jsx)(Lc, {
          label: yb("controller:settingsTapHoldTime"),
          hint: yb("controller:settingsTapHoldTimeHint"),
          options: Fc.Bb,
          value: bb.tapHoldTime,
          onChange: yb => {
            (0, ey.k)({
              tapHoldTime: yb
            })
          }
        }), (0, py.jsx)(Lc, {
          label: yb("controller:settingsEmoteButton"),
          hint: yb("wheel" === bb.emoteButton ? "controller:settingsEmoteButtonWheelHint" : "controller:settingsEmoteButtonTapHoldHint"),
          options: Fc.F,
          value: bb.emoteButton,
          onChange: yb => {
            (0, ey.k)({
              emoteButton: yb
            })
          }
        }), (0, py.jsx)(Lc, {
          label: yb("controller:settingsAttackMode"),
          hint: yb("toggle" === bb.attackMode ? "controller:settingsAttackToggleHint" : "controller:settingsAttackHoldHint"),
          options: Fc.r,
          value: bb.attackMode,
          onChange: yb => {
            (0, ey.k)({
              attackMode: yb
            })
          }
        }), (0, py.jsx)(rP.c, {
          label: yb("controller:settingsLargePointer"),
          checked: bb.largePointer,
          onClick: yb => {
            (0, ey.k)({
              largePointer: yb
            })
          },
          circleInfoText: yb("controller:settingsLargePointerInfo")
        })]
      })
    };
    var dc = Wy(8011);
    const yo = new class {
        constructor(yb) {
          this.router = yb, this.current = null
        }
        claim(yb, bb) {
          const Wy = this.current;
          Wy && (this.current = null, Wy.release(), Wy.onTakenOver());
          const Uy = this.router.register({
              ...yb,
              name: "capture"
            }),
            hy = {
              release: Uy,
              onTakenOver: bb
            };
          return this.current = hy, () => {
            this.current === hy && (this.current = null), Uy()
          }
        }
      }(Ky.b),
      bo = yb => {
        (0, Hy.useEffect)((() => {
          if (!yb) return;
          const bb = yb();
          let Wy = !1;
          const Uy = () => {
              Wy || (Wy = !0, bb.onEnd())
            },
            hy = yo.claim({
              isActive: () => !Wy,
              onFrame: yb => {
                bb.onFrame(yb, Uy)
              }
            }, Uy),
            fy = void 0 === bb.timeoutMs ? void 0 : window.setTimeout(Uy, bb.timeoutMs),
            Zy = yb => {
              "Escape" === yb.key && (yb.preventDefault(), yb.stopPropagation(), Uy())
            };
          return window.addEventListener("keydown", Zy, !0), () => {
            Wy = !0, hy(), window.clearTimeout(fy), window.removeEventListener("keydown", Zy, !0)
          }
        }), [yb])
      },
      WP = yb => {
        let {
          row: bb,
          capturing: Wy,
          onCapture: Uy,
          holdFillRef: fy,
          onRebind: Zy,
          swapped: cb
        } = yb;
        const {
          t: Py
        } = (0, hy.D)();
        if ("fixed" === bb.kind) return (0, py.jsx)("div", {
          className: "ControlRow PadControlRow PadControlRowFixed",
          children: (0, py.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, py.jsx)("div", {
              className: "ControlName",
              children: Py(bb.labelKey)
            }), (0, py.jsx)("div", {
              className: "ControlBindingsContainer",
              children: (0, py.jsx)("div", {
                className: "ControlBindingsList",
                children: (0, py.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  children: (0, py.jsx)(TU, {
                    glyph: "move" === bb.stick ? (0, By.o)() : (0, By.m)()
                  })
                })
              })
            })]
          })
        });
        const {
          action: oy
        } = bb, Ky = (0, By.e)(oy), ey = (0, By.h)(oy), qb = Ky !== ey && (0, By.b)(oy, ey);
        return (0, py.jsxs)("div", {
          className: Fy()("ControlRow PadControlRow", {
            Capturing: Wy
          }),
          children: [(0, py.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, py.jsx)("div", {
              className: "ControlName",
              children: Py(Fc.k[oy])
            }), (0, py.jsxs)("div", {
              className: "ControlBindingsContainer",
              children: [!Wy && (0, py.jsxs)("div", {
                className: "ControlBindingsList",
                children: [(0, py.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    Uy(oy)
                  },
                  children: (0, py.jsx)(TU, {
                    glyph: Ky
                  })
                }), qb && (0, py.jsx)("div", {
                  className: "ControlBinding PadBindingReset",
                  title: Py("controller:settingsReset"),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    Zy(oy, ey)
                  },
                  children: (0, py.jsx)(Cc.e, {
                    name: "arrows-rotate"
                  })
                })]
              }), Wy && (0, py.jsxs)("div", {
                className: "ControlBindingAddInput",
                children: [(0, py.jsxs)("div", {
                  className: "PadCaptureBox",
                  children: [(0, py.jsx)("span", {
                    children: Py("controller:settingsCapturePrompt")
                  }), (0, py.jsx)("div", {
                    ref: fy,
                    className: "PadCaptureHoldFill"
                  })]
                }), (0, py.jsx)("div", {
                  className: "ControlBindingAddCancel",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    Uy(null)
                  },
                  children: "\xd7"
                })]
              }), Wy && (0, py.jsx)("div", {
                className: "PadCaptureHint",
                children: (0, py.jsx)(Hc.e, {
                  text: Py((0, By.b)(oy, (0, By.e)("menuBack")) ? "controller:settingsCaptureCancelOrBindHint" : "controller:settingsCaptureCancelHint", {
                    button: Hc.g
                  }),
                  glyph: (0, By.e)("menuBack")
                })
              })]
            })]
          }), cb.map((yb => (0, py.jsx)("div", {
            className: "ControlRowWarning PadSwapNotice",
            children: (0, py.jsx)(Hc.e, {
              text: Py("controller:settingsSwapNotice", {
                action: Py(Fc.k[yb]),
                button: Hc.g
              }),
              glyph: (0, By.e)(yb)
            })
          }, yb))), Wy && (0, py.jsx)("div", {
            className: "PadCaptureTimer",
            style: {
              animationDuration: `${Fc.x}ms`
            }
          })]
        })
      },
      UP = [],
      hP = yb => {
        let {
          layoutSetting: bb
        } = yb;
        const {
          t: Wy
        } = (0, hy.D)(), Uy = (0, ey.n)();
        (0, qb.A)();
        const fy = (0, Hy.useRef)(null),
          [Zy, cb] = (0, Hy.useState)(null),
          Py = (0, Hy.useCallback)(((yb, bb) => {
            const Wy = (0, ey.g)().sU;
            (0, By.w)(yb, bb);
            const Uy = (0, By.p)(Wy, yb);
            cb(Uy.length > 0 ? {
              action: yb,
              swapped: Uy
            } : null)
          }), []),
          [oy, Sy] = ((yb, bb) => {
            const [Wy, Uy] = (0, Hy.useState)(null), hy = (0, Hy.useMemo)((() => Wy ? () => {
              const hy = (0, By.e)("menuBack"),
                fy = new Fc.e(hy, (0, By.e)("menuConfirm"), (yb => (0, By.b)(Wy, yb)));
              return {
                onFrame: (Uy, Zy) => {
                  var cb;
                  const Py = Uy.frame.timestampMs,
                    oy = fy.update({
                      ...Uy,
                      isDown: yb => (0, sy.M)(Uy.frame.values, yb)
                    }, Py);
                  null === (cb = yb.current) || void 0 === cb || cb.style.setProperty("width", 100 * fy.getBindHoldProgress(Py) + "%"), oy && ("bind" === oy.kind ? (Ky.b.consumeButton(oy.button), bb(Wy, oy.button)) : Ky.b.consumeButton(hy), Zy())
                },
                onEnd: () => {
                  Uy(null)
                },
                timeoutMs: Fc.x
              }
            } : null), [Wy, yb, bb]);
            return bo(hy), [Wy, Uy]
          })(fy, Py),
          Ey = yb => {
            yb && cb(null), Sy(yb)
          };
        (0, Hy.useEffect)((() => {
          if (!Zy) return;
          const yb = window.setTimeout((() => {
            cb(null)
          }), Fc.xb);
          return () => {
            window.clearTimeout(yb)
          }
        }), [Zy]);
        const ly = !Uy.swapSticks && 0 === Object.keys(Uy.sU).length;
        return (0, py.jsxs)("div", {
          className: "ControlsContainer PadControlsContainer",
          children: [(0, py.jsx)("div", {
            className: "SliderText",
            children: Wy("controller:settingsRemap")
          }), (0, py.jsx)("div", {
            className: "ControllerSettingsHint",
            children: Wy("controller:settingsRemapHint")
          }), (0, py.jsx)(Vc.C, {
            className: "ResetBindingsButton PadResetAllButton",
            disabled: ly,
            onClick: () => {
              Ey(null), cb(null), (0, By.x)()
            },
            children: Wy("controller:settingsResetAll")
          }), bb, Fc.qb.map(((yb, bb) => (0, py.jsx)(dc.e, {
            title: Wy(yb.titleKey),
            defaultOpen: 0 === bb,
            children: yb.rows.map((yb => (0, py.jsx)(WP, {
              row: yb,
              capturing: "action" === yb.kind && yb.action === oy,
              onCapture: Ey,
              holdFillRef: fy,
              onRebind: Py,
              swapped: "action" === yb.kind && (null === Zy || void 0 === Zy ? void 0 : Zy.action) === yb.action ? Zy.swapped : UP
            }, "action" === yb.kind ? yb.action : yb.labelKey)))
          }, yb.titleKey)))]
        })
      },
      fP = yb => {
        let {
          deadzone: bb,
          dotRef: Wy,
          labelKey: Uy
        } = yb;
        const {
          t: fy
        } = (0, hy.D)();
        return (0, py.jsxs)("div", {
          className: "ControllerTesterStick",
          children: [(0, py.jsxs)("div", {
            className: "ControllerTesterStickCircle",
            children: [(0, py.jsx)("div", {
              className: "ControllerTesterDeadzone",
              style: {
                width: 100 * bb + "%",
                height: 100 * bb + "%"
              }
            }), (0, py.jsx)("div", {
              ref: Wy,
              className: "ControllerTesterDot"
            })]
          }), (0, py.jsx)("div", {
            className: "ControllerTesterStickLabel",
            children: fy(Uy)
          })]
        })
      },
      ZP = (yb, bb, Wy, Uy) => {
        var hy;
        yb && (yb.style.left = 50 + 50 * Math.max(-1, Math.min(1, bb.x)) + "%", yb.style.top = 50 + 50 * Math.max(-1, Math.min(1, bb.y)) + "%", null === (hy = yb.parentElement) || void 0 === hy || hy.classList.toggle("Active", Uy || Math.hypot(bb.x, bb.y) > Wy))
      },
      co = yb => {
        const bb = {
            deadzone: yb.moveDeadzone,
            labelKey: "controller:settingsActionMove"
          },
          Wy = {
            deadzone: yb.lookDeadzone,
            labelKey: "controller:settingsActionLook"
          };
        return yb.swapSticks ? {
          left: Wy,
          right: bb
        } : {
          left: bb,
          right: Wy
        }
      },
      PP = () => {
        const {
          t: yb
        } = (0, hy.D)(), bb = (() => {
          const [yb, bb] = (0, Hy.useState)((() => Zy.f.getActivePad()));
          return (0, sU.i)(Zy.c, (() => {
            bb(Zy.f.getActivePad())
          })), yb
        })(), Wy = co((0, ey.n)()), Uy = (0, Hy.useRef)(null), fy = (0, Hy.useRef)(null), cb = (0, Hy.useRef)([]), Py = (0, Hy.useRef)(null), oy = (0, Hy.useRef)(null), [qb, Sy] = (yb => {
          const [bb, Wy] = (0, Hy.useState)(!1), Uy = (0, Hy.useMemo)((() => bb ? () => {
            const bb = (0, By.e)("menuBack"),
              Uy = new Fc.g;
            return {
              onFrame: (Wy, hy) => {
                var fy;
                const Zy = Uy.update({
                  pressed: Wy.wasPressed(bb),
                  kW: Wy.isHeld(bb)
                }, Wy.frame.timestampMs);
                null === (fy = yb.current) || void 0 === fy || fy.style.setProperty("width", 100 * Zy + "%"), Zy >= 1 && (Ky.b.consumeButton(bb), hy())
              },
              onEnd: () => {
                Wy(!1)
              }
            }
          } : null), [bb, yb]);
          return bo(Uy), [bb, Wy]
        })(fy);
        (0, Hy.useEffect)((() => {
          const yb = yb => {
            for (const Wy of sy.eb) {
              const bb = (0, sy.n)(Wy),
                Uy = cb.current[bb];
              if (!Uy) continue;
              const hy = yb.values[bb];
              Uy.classList.toggle("Pressed", hy >= sy.z), (0, sy.Q)(bb) && Uy.style.setProperty("--trigger-fill", `${Math.round(100*hy)}%`)
            }
            const bb = co((0, ey.g)());
            ZP(Py.current, yb.leftStick, bb.left.deadzone, yb.values[(0, sy.n)("LS")] >= sy.z), ZP(oy.current, yb.rightStick, bb.right.deadzone, yb.values[(0, sy.n)("RS")] >= sy.z)
          };
          return bb || yb((0, sy.w)()), Zy.f.onFrame(yb)
        }), [bb]), (0, Hy.useEffect)((() => {
          bb || Sy(!1)
        }), [bb, Sy]), (0, Hy.useEffect)((() => {
          var yb;
          qb && (null === (yb = Uy.current) || void 0 === yb || yb.scrollIntoView({
            block: "nearest"
          }))
        }), [qb]);
        const Ey = Fc.ib.find((yb => yb.value === (null === bb || void 0 === bb ? void 0 : bb.family)));
        return (0, py.jsxs)("div", {
          ref: Uy,
          className: Fy()("SettingBox ControllerTester", {
            Testing: qb
          }),
          children: [(0, py.jsxs)("div", {
            className: "ControllerTesterHeader",
            children: [(0, py.jsxs)("div", {
              className: "ControllerTesterInfo",
              children: [bb && (0, py.jsx)("div", {
                children: yb("controller:settingsTesterFamily", {
                  family: Ey ? yb(Ey.labelKey) : bb.family
                })
              }), bb && (0, py.jsx)("div", {
                className: "ControllerTesterPadId",
                children: bb.id
              }), !bb && (0, py.jsx)("div", {
                children: yb("controller:settingsTesterNoPad")
              })]
            }), (bb || qb) && (0, py.jsx)(Vc.f, {
              className: "ControllerTesterToggle",
              onClick: () => {
                Sy(!qb)
              },
              children: yb(qb ? "controller:settingsTesterStop" : "controller:settingsTesterStart")
            })]
          }), bb && !qb && (0, py.jsx)("div", {
            className: "ControllerSettingsHint",
            children: yb("controller:settingsTesterHint")
          }), qb && (0, py.jsxs)("div", {
            className: "ControllerTesterBanner",
            children: [(0, py.jsx)(Hc.e, {
              text: yb("controller:settingsTesterTesting", {
                button: Hc.g
              }),
              glyph: (0, By.e)("menuBack")
            }), (0, py.jsx)("div", {
              ref: fy,
              className: "ControllerTesterExitFill"
            })]
          }), (0, py.jsxs)("div", {
            className: "ControllerTesterBody",
            children: [(0, py.jsx)(fP, {
              deadzone: Wy.left.deadzone,
              dotRef: Py,
              labelKey: Wy.left.labelKey
            }), (0, py.jsx)("div", {
              className: "ControllerTesterButtons",
              children: sy.eb.map((yb => {
                const Wy = (0, sy.n)(yb);
                return (0, py.jsx)("div", {
                  ref: yb => {
                    cb.current[Wy] = yb
                  },
                  className: (0, sy.Q)(Wy) ? "ControllerTesterButton ControllerTesterTrigger" : "ControllerTesterButton",
                  children: (0, py.jsx)(TU, {
                    glyph: yb,
                    family: null === bb || void 0 === bb ? void 0 : bb.family
                  })
                }, yb)
              }))
            }), (0, py.jsx)(fP, {
              deadzone: Wy.right.deadzone,
              dotRef: oy,
              labelKey: Wy.right.labelKey
            })]
          })]
        })
      },
      oP = (0, Hy.memo)((function() {
        const {
          t: yb
        } = (0, hy.D)(), bb = (0, ey.n)(), [Wy, Uy] = (0, Hy.useState)(!1);
        return (0, Hy.useEffect)((() => {
          if (!Wy) return;
          const yb = window.setTimeout((() => {
            Uy(!1)
          }), Fc.xb);
          return () => {
            window.clearTimeout(yb)
          }
        }), [Wy]), (0, py.jsxs)("div", {
          className: "SettingsMenuRightInner ControllerCategory",
          children: [(0, py.jsx)(pc, {
            text: yb("controller:settingsLook")
          }), (0, py.jsx)(Qc, {
            settingKey: "lookSensitivityX",
            label: yb("controller:settingsLookSensitivityX"),
            range: Fc.tb,
            format: Fc.P
          }), (0, py.jsx)(Qc, {
            settingKey: "lookSensitivityY",
            label: yb("controller:settingsLookSensitivityY"),
            range: Fc.tb,
            format: Fc.P
          }), (0, py.jsx)(Qc, {
            settingKey: "aimLookSensitivity",
            label: yb("controller:settingsAimLookSensitivity"),
            range: Fc.n,
            format: Fc.P
          }), (0, py.jsx)(Lc, {
            label: yb("controller:settingsLookCurve"),
            hint: yb("controller:settingsLookCurveHint"),
            options: Fc.cb,
            value: bb.lookCurve,
            onChange: yb => {
              (0, ey.k)({
                lookCurve: yb
              })
            }
          }), (0, py.jsx)(rP.c, {
            label: yb("controller:settingsInvertLookX"),
            checked: bb.invertLookX,
            onClick: yb => {
              (0, ey.k)({
                invertLookX: yb
              })
            }
          }), (0, py.jsx)(rP.c, {
            label: yb("controller:settingsInvertLookY"),
            checked: bb.invertLookY,
            onClick: yb => {
              (0, ey.k)({
                invertLookY: yb
              })
            }
          }), (0, py.jsx)(Qc, {
            settingKey: "lookDeadzone",
            label: yb("controller:settingsLookDeadzone"),
            range: Fc.C,
            format: Fc.H
          }), (0, py.jsx)(Ic, {}), (0, py.jsx)(pc, {
            text: yb("controller:settingsMovement")
          }), (0, py.jsx)(Qc, {
            settingKey: "moveDeadzone",
            label: yb("controller:settingsMoveDeadzone"),
            range: Fc.C,
            format: Fc.H
          }), (0, py.jsx)(rP.c, {
            label: yb("controller:settingsAutoSprint"),
            checked: bb.autoSprint,
            onClick: yb => {
              (0, ey.k)({
                autoSprint: yb
              })
            },
            circleInfoText: yb("controller:settingsAutoSprintInfo")
          }), (0, py.jsx)(Lc, {
            label: yb("controller:settingsSneak"),
            options: Fc.vb,
            value: bb.sneakMode,
            onChange: yb => {
              (0, ey.k)({
                sneakMode: yb
              })
            }
          }), (0, py.jsx)(pc, {
            text: yb("controller:settingsButtons")
          }), (0, py.jsx)(Lc, {
            label: yb("controller:settingsPromptFamily"),
            options: Fc.ib,
            value: bb.promptFamily,
            onChange: yb => {
              (0, ey.k)({
                promptFamily: yb
              })
            }
          }), (0, py.jsx)(rP.c, {
            label: yb("controller:settingsHideButtonHints"),
            checked: bb.hideButtonHints,
            onClick: yb => {
              (0, ey.k)({
                hideButtonHints: yb
              })
            }
          }), (0, py.jsx)(rP.c, {
            label: yb("controller:settingsVibration"),
            checked: bb.vibration,
            onClick: yb => {
              (0, ey.k)({
                vibration: yb
              }), yb && UU("preview")
            }
          }), (0, py.jsx)(Qc, {
            settingKey: "cursorSpeed",
            label: yb("controller:settingsCursorSpeed"),
            range: Fc.B,
            format: Fc.P
          }), (0, py.jsx)(rP.c, {
            label: yb("controller:settingsCursorMagnetism"),
            checked: bb.cursorMagnetism,
            onClick: yb => {
              (0, ey.k)({
                cursorMagnetism: yb
              })
            }
          }), (0, py.jsx)(rP.c, {
            label: yb("controller:settingsMenuBackToCategories"),
            checked: bb.menuBackToCategories,
            onClick: yb => {
              (0, ey.k)({
                menuBackToCategories: yb
              })
            }
          }), (0, py.jsx)(hP, {
            layoutSetting: (0, py.jsxs)(py.Fragment, {
              children: [By.d.map((Wy => (0, py.jsx)(rP.c, {
                label: yb(Fc._[Wy]),
                checked: (0, By.t)(Wy, bb),
                onClick: yb => {
                  Uy(!(0, By.C)(Wy, yb))
                }
              }, Wy))), Wy && (0, py.jsx)("div", {
                className: "PadLayoutRefusedNotice",
                role: "status",
                children: yb("controller:settingsLayoutRefusedToast")
              })]
            })
          }), (0, py.jsx)(Ac, {}), (0, py.jsx)(pc, {
            text: yb("controller:settingsAlternatives")
          }), (0, py.jsx)("div", {
            className: "ControllerSettingsHint",
            children: yb("controller:settingsAlternativesHint")
          }), (0, py.jsx)(Lc, {
            label: yb("controller:settingsMenuNavigation"),
            hint: yb("controller:settingsMenuNavigationHint"),
            options: Fc.fb,
            value: bb.menuNavigation,
            onChange: yb => {
              (0, ey.k)({
                menuNavigation: yb
              })
            }
          }), (0, py.jsx)(Lc, {
            label: yb("controller:settingsInventoryNavigation"),
            hint: yb("controller:settingsInventoryNavigationHint"),
            options: Fc.W,
            value: bb.inventoryNavigation,
            onChange: yb => {
              (0, ey.k)({
                inventoryNavigation: yb
              })
            }
          }), (0, py.jsx)(Lc, {
            label: yb("controller:settingsQuickChat"),
            hint: yb("controller:settingsQuickChatHint"),
            options: Fc.mb,
            value: bb.quickChat,
            onChange: yb => {
              (0, ey.k)({
                quickChat: yb
              })
            }
          }), (0, py.jsx)(Lc, {
            label: yb("controller:settingsLeaderboardButton"),
            hint: yb("controller:settingsLeaderboardButtonHint"),
            options: Fc.bb,
            value: bb.leaderboardButton,
            onChange: yb => {
              (0, ey.k)({
                leaderboardButton: yb
              })
            }
          }), (0, py.jsx)(pc, {
            text: yb("controller:settingsTester")
          }), (0, py.jsx)(PP, {})]
        })
      }));
    (0, hy.d)(Uy);
    for (const qo of (0, fy.s)()) qo.connected ? Zy.f.handleConnectionEvent(qo) : Zy.f.handleDisconnectionEvent(qo);
    const BP = () => null !== Zy.f.getActivePad(),
      KP = () => IW.getState(),
      eP = () => IW.isSteppingSlots()
  },
  7333: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => cb,
      e: () => Py
    });
    const Uy = {
        "054c": "playstation",
        "057e": "nintendo"
      },
      hy = "28de",
      fy = new Set(["1205"]),
      Zy = yb => {
        const bb = /vendor:\s*([0-9a-f]{4})\s*product:\s*([0-9a-f]{4})/i.exec(yb);
        if (bb) return {
          vendor: bb[1].toLowerCase(),
          product: bb[2].toLowerCase()
        };
        const Wy = /^([0-9a-f]{1,4})-([0-9a-f]{1,4})-/i.exec(yb);
        return Wy ? {
          vendor: Wy[1].toLowerCase().padStart(4, "0"),
          product: Wy[2].toLowerCase().padStart(4, "0")
        } : null
      },
      cb = (yb, bb) => {
        const Wy = Zy(yb);
        if ((null === Wy || void 0 === Wy ? void 0 : Wy.vendor) === hy) return fy.has(Wy.product) ? "steamdeck" : "xbox";
        if (Wy && Uy[Wy.vendor]) return Uy[Wy.vendor];
        const cb = `${yb} ${null!==bb&&void 0!==bb?bb:""}`.toLowerCase();
        return /dualsense|dualshock|playstation|sony/.test(cb) ? "playstation" : /nintendo|switch|joy-con|pro controller/.test(cb) ? "nintendo" : /steam deck/.test(cb) ? "steamdeck" : "xbox"
      },
      Py = yb => {
        var bb;
        return (null === (bb = Zy(yb)) || void 0 === bb ? void 0 : bb.vendor) === hy
      }
  },
  7365: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => oy,
      d: () => cb
    });
    var Uy = Wy(7326);
    const hy = ["capture", "keyboard", "wheel", "inventory", "cursor", "focus", "gameplay"],
      fy = new Set(["capture", "gameplay"]),
      Zy = ["Up", "Down", "Left", "Right"],
      cb = yb => Zy.includes(yb),
      Py = .25;
    const oy = new class {
      constructor() {
        this.consumers = new Map, this.activeName = null, this.kW = new Array(Uy.bb).fill(!1), this.previousHeld = new Array(Uy.bb).fill(!1), this.consumedButtons = new Array(Uy.bb).fill(!1), this.suppressedReleases = new Array(Uy.bb).fill(!1), this.wakeOwned = new Array(Uy.bb).fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.peek = null, this.lastFrame = (0, Uy.w)()
      }
      register(yb) {
        return this.consumers.has(yb.name) && console.warn(`Controller consumer "${yb.name}" registered twice; the newer one replaces it.`), this.consumers.set(yb.name, yb), () => {
          var bb;
          this.consumers.get(yb.name) === yb && (this.activeName === yb.name ? (this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()) : (null === (bb = this.peek) || void 0 === bb ? void 0 : bb.over) === yb.name && (this.peek = null), this.consumers.delete(yb.name))
        }
      }
      getActiveConsumerName() {
        return this.activeName
      }
      isButtonHeld(yb) {
        return this.kW[(0, Uy.n)(yb)]
      }
      getLastFrame() {
        return this.lastFrame
      }
      clear() {
        this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()
      }
      reset() {
        this.deactivateCurrent(), this.activeName = null, this.kW = new Array(Uy.bb).fill(!1), this.previousHeld = new Array(Uy.bb).fill(!1), this.consumedButtons.fill(!1), this.suppressedReleases.fill(!1), this.wakeOwned.fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.lastFrame = (0, Uy.w)()
      }
      dispatch(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.lastFrame = yb, this.previousHeld = this.kW, this.kW = (0, Uy.r)(yb.values, this.previousHeld);
        for (let fy = 0; fy < Uy.bb; fy++) this.suppressedReleases[fy] = !this.kW[fy] && this.consumedButtons[fy], this.kW[fy] || (this.consumedButtons[fy] = !1), this.wakeOwned[fy] && (this.kW[fy] ? (this.consumedButtons[fy] = !0, this.wakeOwned[fy] = !1) : yb.values[fy] < Uy.$ && (this.wakeOwned[fy] = !1));
        Math.hypot(yb.leftStick.x, yb.leftStick.y) < Py && (this.leftStickConsumed = !1), Math.hypot(yb.rightStick.x, yb.rightStick.y) < Py && (this.rightStickConsumed = !1);
        const hy = this.pickActive();
        if ((null === hy || void 0 === hy ? void 0 : hy.name) !== this.activeName) {
          var Zy, cb, oy, By, Ky, ey;
          const yb = this.activeName,
            bb = {
              left: !this.leftStickConsumed,
              right: !this.rightStickConsumed
            },
            Wy = null !== (Zy = null === hy || void 0 === hy || null === (cb = hy.peek) || void 0 === cb ? void 0 : cb.call(hy)) && void 0 !== Zy ? Zy : null,
            fy = null === yb && !!Wy && !(null === (oy = this.consumers.get(Wy.over)) || void 0 === oy || !oy.onPeekFrame),
            Py = Wy && (Wy.over === yb || fy) ? Wy : null,
            qb = null !== this.peek && this.peek.over === (null === hy || void 0 === hy ? void 0 : hy.name) ? this.peek : null;
          this.deactivateCurrent(null !== Py, null !== qb), this.activeName = null !== (By = null === hy || void 0 === hy ? void 0 : hy.name) && void 0 !== By ? By : null, null === yb || this.handOffPending || this.consumeAllHeld();
          const sy = null === (Ky = null !== Py && void 0 !== Py ? Py : qb) || void 0 === Ky ? void 0 : Ky.stick;
          "left" === sy && bb.left ? this.leftStickConsumed = !1 : "right" === sy && bb.right && (this.rightStickConsumed = !1), this.peek = Py, hy || null === yb ? hy && (null === (ey = this.idleResume) || void 0 === ey ? void 0 : ey.name) === hy.name && (this.idleResume.left && (this.leftStickConsumed = !1), this.idleResume.right && (this.rightStickConsumed = !1)) : this.idleResume = {
            name: yb,
            left: bb.left && this.leftStickConsumed,
            right: bb.right && this.rightStickConsumed
          }, hy && (this.idleResume = null);
          for (let hy = 0; hy < Uy.bb; hy++) this.previousHeld[hy] && !this.kW[hy] && (this.suppressedReleases[hy] = !0)
        }
        var qb, sy;
        (this.handOffPending = !1, hy) && (Wy && !fy.has(hy.name) && this.consumeWakePress(hy), hy.onFrame(this.buildInput(yb, bb, Wy)), this.peek && (null === (qb = this.consumers.get(this.peek.over)) || void 0 === qb || null === (sy = qb.onPeekFrame) || void 0 === sy || sy.call(qb, this.buildInput(yb, bb, !1, this.peek.stick))))
      }
      consumeWakePress(yb) {
        for (let hy = 0; hy < Uy.bb; hy++) {
          var bb, Wy;
          const fy = Uy.eb[hy];
          (null !== (bb = null === (Wy = yb.wakePressActs) || void 0 === Wy ? void 0 : Wy.call(yb, fy)) && void 0 !== bb ? bb : Zy.includes(fy)) || (this.kW[hy] ? this.consumedButtons[hy] = !0 : this.lastFrame.values[hy] >= Uy.X && (this.wakeOwned[hy] = !0))
        }
      }
      pickActive() {
        for (const yb of hy) {
          const bb = this.consumers.get(yb);
          if (bb && bb.isActive()) return bb
        }
        return null
      }
      deactivateCurrent() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        var Wy, Uy, hy, fy;
        this.activeName && (null === (Wy = this.consumers.get(this.activeName)) || void 0 === Wy || null === (Uy = Wy.onDeactivate) || void 0 === Uy || Uy.call(Wy, yb));
        this.peek && !bb && (null === (hy = this.consumers.get(this.peek.over)) || void 0 === hy || null === (fy = hy.onDeactivate) || void 0 === fy || fy.call(hy, !1));
        this.peek = null
      }
      consumeAllHeld() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.idleResume = null;
        for (let hy = 0; hy < Uy.bb; hy++) this.kW[hy] && (this.consumedButtons[hy] = !0);
        const {
          leftStick: bb,
          rightStick: Wy
        } = this.lastFrame;
        this.leftStickConsumed = "left" !== yb && (this.leftStickConsumed || Math.hypot(bb.x, bb.y) >= Py), this.rightStickConsumed = "right" !== yb && (this.rightStickConsumed || Math.hypot(Wy.x, Wy.y) >= Py)
      }
      handOffHeldInput() {
        this.handOffPending = !0
      }
      consumeButton(yb) {
        const bb = (0, Uy.n)(yb);
        this.kW[bb] && (this.consumedButtons[bb] = !0)
      }
      buildInput(yb, bb, Wy, hy) {
        const fy = this.kW,
          Zy = this.previousHeld,
          cb = hy ? new Array(Uy.bb).fill(!0) : [...this.consumedButtons],
          Py = hy ? cb : [...this.suppressedReleases],
          oy = !this.leftStickConsumed && (!hy || "left" === hy),
          By = !this.rightStickConsumed && (!hy || "right" === hy);
        return {
          frame: yb,
          dtMs: bb,
          isHeld: yb => {
            const bb = (0, Uy.n)(yb);
            return fy[bb] && !cb[bb]
          },
          wasPressed: yb => {
            const bb = (0, Uy.n)(yb);
            return fy[bb] && !Zy[bb] && !cb[bb]
          },
          wasReleased: yb => {
            const bb = (0, Uy.n)(yb);
            return !fy[bb] && Zy[bb] && !Py[bb]
          },
          value: bb => {
            const Wy = (0, Uy.n)(bb);
            return cb[Wy] ? 0 : yb.values[Wy]
          },
          leftStick: oy ? yb.leftStick : {
            x: 0,
            y: 0
          },
          rightStick: By ? yb.rightStick : {
            x: 0,
            y: 0
          },
          wokeDevice: Wy
        }
      }
    }
  },
  7345: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => Ky.f,
      e: () => Ky.g,
      g: () => vb,
      i: () => ib,
      k: () => My,
      n: () => Yy
    });
    var Uy = Wy(55),
      hy = Wy(23),
      fy = Wy(1268),
      Zy = Wy(33),
      cb = Wy(7349),
      Py = Wy(7326),
      oy = Wy(7339),
      By = Wy(7317),
      Ky = Wy(1647),
      ey = Wy(7352);
    const qb = {
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
        sU: {}
      },
      sy = "controllerSettings",
      Sy = ["sU", "promptFamily", "hideButtonHints", "swapSticks", "swapConfirmBack", "leaderboardButton"],
      Ey = ["auto", ...cb.b],
      ly = (yb, bb) => "string" === typeof bb && yb.includes(bb),
      mb = yb => bb => "number" === typeof bb && Number.isFinite(bb) ? (0, ey.z)(bb, yb) : void 0,
      Cy = yb => "boolean" === typeof yb ? yb : void 0,
      Ty = yb => bb => ly(yb, bb) ? bb : void 0,
      Vy = {
        lookSensitivityX: mb(ey.tb),
        lookSensitivityY: mb(ey.tb),
        aimLookSensitivity: mb(ey.n),
        invertLookX: Cy,
        invertLookY: Cy,
        lookCurve: Ty(Py.U),
        lookDeadzone: mb(ey.C),
        moveDeadzone: mb(ey.C),
        swapSticks: Cy,
        autoSprint: Cy,
        sneakMode: Ty(["toggle", "hold"]),
        tapHoldTime: Ty(["short", "medium", "long"]),
        attackMode: Ty(["hold", "toggle"]),
        promptFamily: Ty(Ey),
        hideButtonHints: Cy,
        vibration: Cy,
        cursorSpeed: mb(ey.B),
        cursorMagnetism: Cy,
        buttonRepeat: Ty(Py.q),
        largePointer: Cy,
        menuBackToCategories: Cy,
        swapConfirmBack: Cy,
        menuNavigation: Ty(["hybrid", "focus", "cursor"]),
        inventoryNavigation: Ty(["hybrid", "slot", "cursor"]),
        quickChat: Ty(["wheel", "off"]),
        leaderboardButton: Ty(["shop", "leaderboard"]),
        gyroAiming: Cy,
        gyroSensitivity: mb(ey.S),
        gyroActivation: Ty(["always", "aiming", "button"]),
        gyroButton: Ty(Py.eb),
        emoteButton: Ty(["tapHold", "wheel"])
      },
      Jy = [{
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
      gb = yb => {
        const bb = {};
        if ("object" !== typeof yb || null === yb) return bb;
        for (const [Wy, Uy] of Object.entries(yb)) Object.prototype.hasOwnProperty.call(oy.g, Wy) && ly(Py.eb, Uy) && (bb[Wy] = Uy);
        return bb
      },
      Gy = yb => {
        const bb = {};
        for (const Wy of Object.keys(qb))("sU" === Wy ? Object.keys(yb.sU).length > 0 : yb[Wy] !== qb[Wy]) && (bb[Wy] = yb[Wy]);
        0 !== Object.keys(bb).length ? Zy.e.setItem(sy, bb) : Zy.e.removeItem(sy)
      };
    let Oy = (() => {
        const yb = Zy.e.getItem(sy),
          bb = (yb => {
            const bb = "object" === typeof yb && null !== yb ? yb : {},
              Wy = {
                ...qb,
                sU: gb(bb.sU)
              };
            for (const hy of Object.keys(Vy)) {
              const yb = Vy[hy](bb[hy]);
              void 0 !== yb && (Wy[hy] = yb)
            }
            const Uy = Object.keys(bb).filter((yb => !!Object.prototype.hasOwnProperty.call(qb, yb) && ("sU" === yb ? "object" !== typeof bb.sU || null === bb.sU || Object.keys(bb.sU).length !== Object.keys(Wy.sU).length : Wy[yb] !== bb[yb])));
            return Uy.length > 0 && console.warn(`Stored controller settings had invalid values, replaced with defaults: ${Uy.join(", ")}`), Wy
          })(yb);
        return null !== yb && void 0 !== yb && Gy(bb), bb
      })(),
      Ry = {
        ...Oy,
        ...(() => {
          if ("undefined" === typeof window) return {};
          const yb = {},
            bb = new URLSearchParams(window.location.search);
          for (const {
              param: Wy,
              key: Uy
            }
            of Jy) {
            const hy = Vy[Uy](bb.get(Wy));
            void 0 !== hy && (yb[Uy] = hy)
          }
          return yb
        })()
      };
    const vb = () => Ry,
      ib = () => {
        var yb, bb;
        const Wy = vb().promptFamily;
        return "auto" !== Wy ? Wy : null !== (yb = null === (bb = By.f.getActivePad()) || void 0 === bb ? void 0 : bb.family) && void 0 !== yb ? yb : "xbox"
      },
      My = yb => {
        const bb = Ry;
        Oy = {
          ...Oy,
          ...yb
        }, Gy(Oy), Ry = {
          ...Ry,
          ...yb
        }, (yb => {
          hy.g.EZ(Ky.g, Ry), Sy.some((bb => yb[bb] !== Ry[bb])) && hy.g.EZ(Ky.f, Ry)
        })(bb)
      },
      Yy = () => {
        const [yb, bb] = (0, Uy.useState)(Ry);
        return (0, fy.i)(Ky.g, bb), yb
      }
  },
  7793: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => hy
    });
    const Uy = new Set(["Alt", "AltGraph", "Meta", "OS", "AudioVolumeUp", "AudioVolumeDown", "AudioVolumeMute", "MediaPlayPause", "MediaPlay", "MediaPause", "MediaStop", "MediaTrackNext", "MediaTrackPrevious", "BrowserBack", "BrowserForward", "BrowserHome", "GoBack", "LaunchApplication1", "LaunchApplication2", "LaunchMail", "PrintScreen", "Unidentified"]),
      hy = yb => Uy.has(yb)
  },
  7317: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => qb.e,
      f: () => ly
    });
    var Uy = Wy(7326),
      hy = Wy(7333);
    const fy = .1,
      Zy = .3;
    class cb {
      constructor() {
        this.deadzone = 0, this.anchor = null, this.steadyMs = 0, this.lastMs = null, this.returning = !0, this.anchorLearned = !1
      }
      observe(yb, bb) {
        const Wy = null === this.lastMs ? 0 : Math.min(Math.max(0, bb - this.lastMs), 100);
        this.lastMs = bb;
        const Uy = Math.hypot(yb.x, yb.y);
        if (Uy >= Zy) return this.anchor = null, void(this.returning = !0);
        Uy >= fy || (this.returning = !1);
        const hy = this.anchor;
        if (!hy || Math.hypot(yb.x - hy.x, yb.y - hy.y) > .03) return this.anchorLearned && (this.returning = !1), this.anchor = {
          x: yb.x,
          y: yb.y
        }, this.steadyMs = 0, void(this.anchorLearned = !1);
        if (this.steadyMs += Wy, this.steadyMs < 1e3) return;
        const cb = Math.max(Uy, Math.hypot(hy.x, hy.y));
        cb < fy ? this.deadzone = 0 : this.returning && (this.deadzone = cb + .05, this.anchorLearned = !0)
      }
      getDeadzone() {
        return this.deadzone
      }
      apply(yb) {
        return Math.hypot(yb.x, yb.y) < this.deadzone ? {
          x: 0,
          y: 0
        } : yb
      }
    }
    const Py = (yb, bb) => {
        var Wy, Uy;
        return null !== (Wy = yb && (null === (Uy = Object.getOwnPropertyDescriptor(yb, bb)) || void 0 === Uy ? void 0 : Uy.get)) && void 0 !== Wy ? Wy : null
      },
      oy = yb => {
        const bb = yb.vendorName;
        return "string" === typeof bb ? bb : void 0
      },
      By = ((yb, bb) => {
        const Wy = Py(yb, "index"),
          Uy = Py(yb, "id"),
          hy = Py(yb, "connected"),
          fy = Py(yb, "mapping"),
          Zy = Py(yb, "buttons"),
          cb = Py(yb, "axes"),
          By = Py(bb, "pressed"),
          Ky = Py(bb, "value");
        return Wy && Uy && hy && fy && Zy && cb && By && Ky ? yb => {
          const bb = Zy.call(yb),
            Py = cb.call(yb),
            ey = {
              index: Number(Wy.call(yb)),
              id: String(Uy.call(yb)),
              connected: !0 === hy.call(yb),
              mapping: String(fy.call(yb)),
              buttons: [],
              axes: [],
              vendorName: oy(yb)
            };
          for (let Wy = 0; Wy < bb.length; Wy++) ey.buttons.push({
            pressed: !0 === By.call(bb[Wy]),
            value: Number(Ky.call(bb[Wy]))
          });
          for (let Wy = 0; Wy < Py.length; Wy++) ey.axes.push(Number(Py[Wy]));
          return ey
        } : null
      })("undefined" === typeof Gamepad ? null : Gamepad.prototype, "undefined" === typeof GamepadButton ? null : GamepadButton.prototype),
      Ky = "undefined" === typeof Navigator ? null : Navigator.prototype.getGamepads;
    var ey = Wy(1247),
      qb = Wy(1647);
    const sy = Zy,
      Sy = yb => {
        const bb = new Array(Uy.bb).fill(0);
        for (let Wy = 0; Wy < Uy.bb && Wy < yb.buttons.length; Wy++) {
          const hy = yb.buttons[Wy];
          bb[Wy] = hy.pressed && !(0, Uy.Q)(Wy) ? Math.max(hy.value, Uy.z) : hy.value
        }
        return bb
      },
      Ey = (yb, bb) => {
        var Wy, Uy;
        return {
          x: null !== (Wy = yb.axes[bb]) && void 0 !== Wy ? Wy : 0,
          y: null !== (Uy = yb.axes[bb + 1]) && void 0 !== Uy ? Uy : 0
        }
      };
    const ly = new class {
      constructor(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : By;
        this.readGamepads = yb, this.requireTrustedPads = bb, this.nativeReader = Wy, this.running = !1, this.listening = !1, this.rafId = 0, this.lastTimestampMs = 0, this.activeInfo = null, this.slots = [], this.trustedIndices = new Set, this.warnedNonStandardIds = new Set, this.loggedReadError = !1, this.frameListeners = new Set, this.connectionListeners = new Set, this.anyPadConnected = !1, this.connectedListeners = new Set, this.handleConnectionEvent = yb => {
          yb.isTrusted && this.trustedIndices.add(yb.gamepad.index), this.wake()
        }, this.handleDisconnectionEvent = yb => {
          this.trustedIndices.delete(yb.gamepad.index)
        }, this.Zb = yb => {
          if (this.rafId = 0, !this.running) return;
          const bb = 0 === this.lastTimestampMs ? 16 : Math.min(100, yb - this.lastTimestampMs);
          this.lastTimestampMs = yb;
          try {
            this.poll(yb, bb)
          } finally {
            this.anyPadConnected && (this.rafId = requestAnimationFrame(this.Zb))
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
      onFrame(yb) {
        return this.frameListeners.add(yb), () => {
          this.frameListeners.delete(yb)
        }
      }
      onActivePadChanged(yb) {
        return this.connectionListeners.add(yb), () => {
          this.connectionListeners.delete(yb)
        }
      }
      getActivePad() {
        return this.activeInfo
      }
      hasConnectedPad() {
        return this.anyPadConnected
      }
      onConnectedPadsChanged(yb) {
        return this.connectedListeners.add(yb), () => {
          this.connectedListeners.delete(yb)
        }
      }
      getActiveGamepad() {
        if (!this.activeInfo) return null;
        const yb = this.readPads()[this.activeInfo.index],
          bb = yb ? this.readPad(yb) : null;
        return bb && bb.id === this.activeInfo.id ? yb : null
      }
      poll(yb, bb) {
        var Wy, hy;
        const fy = this.readPads();
        let Zy = null,
          Py = !1;
        const oy = [],
          By = Math.max(fy.length, this.slots.length);
        for (let Cy = 0; Cy < By; Cy++) {
          var Ky;
          const bb = Cy < fy.length ? fy[Cy] : null,
            Wy = bb ? this.readPad(bb) : null;
          if (!Wy || !Wy.connected || !this.isUsable(Wy)) {
            this.slots[Cy] = null;
            continue
          }
          let hy = this.slots[Cy];
          hy && hy.id === Wy.id || (hy = {
            id: Wy.id,
            kW: [],
            leftSettled: !1,
            rightSettled: !1,
            leftRest: new cb,
            rightRest: new cb
          }, this.slots[Cy] = hy);
          const By = Ey(Wy, 0),
            ey = Ey(Wy, 2);
          !hy.leftSettled && Math.hypot(By.x, By.y) < sy && (hy.leftSettled = !0), !hy.rightSettled && Math.hypot(ey.x, ey.y) < sy && (hy.rightSettled = !0), hy.leftRest.observe(By, yb), hy.rightRest.observe(ey, yb);
          const qb = Sy(Wy),
            ly = (0, Uy.r)(qb, hy.kW),
            mb = hy.kW,
            Ty = ly.map(((yb, bb) => yb && !mb[bb]));
          hy.kW = ly;
          const Vy = {
            pad: Wy,
            slot: hy,
            values: qb
          };
          Cy === (null === (Ky = this.activeInfo) || void 0 === Ky ? void 0 : Ky.index) && Wy.id === this.activeInfo.id ? (Zy = Vy, Py = Ty.includes(!0)) : Ty.includes(!0) && oy.push({
            polled: Vy,
            rose: Ty
          })
        }
        const ey = this.slots.some((yb => null !== yb));
        if (ey !== this.anyPadConnected) {
          this.anyPadConnected = ey;
          for (const yb of this.connectedListeners) yb()
        }
        const qb = null !== (Wy = null === (hy = Zy) || void 0 === hy ? void 0 : hy.slot.kW) && void 0 !== Wy ? Wy : [],
          ly = Py ? void 0 : oy.find((yb => {
            let {
              rose: bb
            } = yb;
            return bb.some(((yb, bb) => yb && !qb[bb]))
          }));
        if (ly ? (Zy = ly.polled, this.setActive(ly.polled.pad)) : this.activeInfo && !Zy && this.setActive(null), !Zy || !this.activeInfo) return;
        const mb = ((yb, bb) => {
          let {
            pad: Wy,
            slot: hy,
            values: fy
          } = yb;
          const Zy = (0, Uy.w)(bb);
          return Zy.values = fy, hy.leftSettled && (Zy.leftStick = hy.leftRest.apply(Ey(Wy, 0))), hy.rightSettled && (Zy.rightStick = hy.rightRest.apply(Ey(Wy, 2))), Zy
        })(Zy, yb);
        for (const Uy of this.frameListeners) Uy(mb, bb, this.activeInfo)
      }
      readPad(yb) {
        if (this.nativeReader) try {
          return this.nativeReader(yb)
        } catch {
          if (this.requireTrustedPads) return null
        }
        return this.requireTrustedPads ? null : (yb => {
          const bb = yb;
          return {
            index: bb.index,
            id: bb.id,
            connected: bb.connected,
            mapping: bb.mapping,
            buttons: Array.from(bb.buttons, (yb => ({
              pressed: yb.pressed,
              value: yb.value
            }))),
            axes: Array.from(bb.axes),
            vendorName: oy(yb)
          }
        })(yb)
      }
      isUsable(yb) {
        return !(0, ey.g)(yb.id) && ("standard" !== yb.mapping ? (this.warnedNonStandardIds.has(yb.id) || (this.warnedNonStandardIds.add(yb.id), console.warn(`Controller "${yb.id}" has no standard button mapping, so it is ignored.`)), !1) : !this.requireTrustedPads || this.trustedIndices.has(yb.index))
      }
      setActive(yb) {
        this.activeInfo = yb ? {
          index: yb.index,
          id: yb.id,
          family: (0, hy.b)(yb.id, yb.vendorName)
        } : null;
        for (const bb of this.connectionListeners) bb(this.activeInfo)
      }
      readPads() {
        try {
          return this.readGamepads()
        } catch (yb) {
          return this.loggedReadError || (this.loggedReadError = !0, console.warn("Reading gamepads failed; controller input is unavailable.", yb)), []
        }
      }
      wake() {
        this.running && 0 === this.rafId && (this.lastTimestampMs = 0, this.rafId = requestAnimationFrame(this.Zb))
      }
    }((() => Ky ? Ky.call(navigator) : []), !0);
    ly.listenForConnections()
  },
  7800: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => Uy
    });
    const Uy = {
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
  7873: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => Zy,
      g: () => cb
    });
    var Uy = Wy(23),
      hy = Wy(7864);
    let fy = !1;
    const Zy = () => fy,
      cb = yb => {
        yb !== fy && (fy = yb, Uy.g.EZ(hy.j, fy))
      }
  },
  7868: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => cb,
      d: () => Py
    });
    var Uy = Wy(23),
      hy = Wy(7864);
    let fy = null,
      Zy = 0;
    const cb = () => fy,
      Py = yb => {
        null === yb && null === fy || (fy = null === yb ? null : {
          id: ++Zy,
          holdMs: yb
        }, Uy.g.EZ(hy.n, fy))
      }
  },
  7880: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => Zy,
      i: () => cb
    });
    var Uy = Wy(23),
      hy = Wy(7864);
    let fy = !1;
    const Zy = () => fy,
      cb = yb => {
        yb !== fy && (fy = yb, Uy.g.EZ(hy.q, fy))
      }
  },
  7968: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Zy,
      e: () => cb
    });
    var Uy = Wy(23),
      hy = Wy(7864);
    let fy = !1;
    const Zy = () => fy,
      cb = yb => {
        yb !== fy && (fy = yb, Uy.g.EZ(hy.t, fy))
      }
  },
  7900: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => Uy
    });
    class Uy {
      constructor() {
        this.downAtMs = null
      }
      update(yb, bb, Wy, Uy) {
        if (yb) return this.downAtMs = Wy, null;
        if (null === this.downAtMs) return null;
        const hy = Wy - this.downAtMs >= Uy;
        return bb ? hy ? (this.downAtMs = null, "hold") : null : (this.downAtMs = null, hy ? "hold" : "tap")
      }
      release() {
        this.downAtMs = null
      }
    }
  },
  7381: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Ky,
      d: () => ey,
      e: () => cb,
      h: () => Cy,
      l: () => mb
    });
    var Uy = Wy(33),
      hy = Wy(7349),
      fy = Wy(7326);
    const Zy = (() => {
        try {
          return Wy(7389)
        } catch {
          return null
        }
      })(),
      cb = [...fy.eb, "LeftStick", "RightStick"],
      Py = new Map,
      oy = {
        xbox: "xbox",
        playstation: "playstation",
        nintendo: "nintendo",
        steamdeck: "steamdeck",
        generic: "xbox"
      },
      By = (new Set(Object.values(oy)), {
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
      Ky = (yb, bb) => {
        var Wy, Uy;
        return null !== (Wy = null === (Uy = By[oy[yb]]) || void 0 === Uy ? void 0 : Uy[bb]) && void 0 !== Wy ? Wy : 1
      },
      ey = (yb, bb) => {
        const Wy = `./${oy[yb]}/${bb}.svg`;
        let Uy = Py.get(Wy);
        return void 0 === Uy && (Uy = Zy ? Zy(Wy) : "", Py.set(Wy, Uy)), Uy
      },
      qb = new Set,
      sy = [],
      Sy = yb => {
        if (!qb.has(yb)) {
          qb.add(yb);
          for (const bb of cb) {
            const Wy = ey(yb, bb);
            if (Wy) {
              const yb = new Image;
              yb.crossOrigin = "anonymous", yb.src = Wy, sy.push(yb)
            }
          }
        }
      },
      Ey = "controllerGlyphFamily";
    let ly = null;
    const mb = yb => {
        yb !== ly && (ly = yb, Uy.e.setItem(Ey, yb), Sy(yb))
      },
      Cy = () => {
        const yb = Uy.e.getItem(Ey);
        (0, hy.d)(yb) && yb !== ly && (ly = yb, Sy(yb))
      }
  },
  7993: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Fy,
      d: () => py
    });
    var Uy = Wy(55),
      hy = Wy(23),
      fy = Wy(1268),
      Zy = Wy(7335),
      cb = Wy(7317),
      Py = Wy(7365),
      oy = Wy(7345);
    const By = {
        x: 0,
        y: 0,
        z: 0
      },
      Ky = Math.PI / 180,
      ey = yb => Math.hypot(yb.x, yb.y, yb.z),
      qb = (yb, bb) => ({
        x: yb.x * bb,
        y: yb.y * bb,
        z: yb.z * bb
      }),
      sy = (yb, bb) => ({
        x: yb.x + bb.x,
        y: yb.y + bb.y,
        z: yb.z + bb.z
      }),
      Sy = (yb, bb) => ({
        x: yb.x - bb.x,
        y: yb.y - bb.y,
        z: yb.z - bb.z
      }),
      Ey = yb => {
        const bb = ey(yb);
        return 0 === bb ? By : qb(yb, 1 / bb)
      },
      ly = yb => ({
        min: {
          ...yb
        },
        max: {
          ...yb
        }
      }),
      mb = (yb, bb) => ({
        min: {
          x: Math.min(yb.min.x, bb.x),
          y: Math.min(yb.min.y, bb.y),
          z: Math.min(yb.min.z, bb.z)
        },
        max: {
          x: Math.max(yb.max.x, bb.x),
          y: Math.max(yb.max.y, bb.y),
          z: Math.max(yb.max.z, bb.z)
        }
      }),
      Cy = (yb, bb) => yb.max.x - yb.min.x <= bb && yb.max.y - yb.min.y <= bb && yb.max.z - yb.min.z <= bb;
    class Ty {
      constructor() {
        this.bias = By, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = By, this.windowSec = 0
      }
      update(yb) {
        const bb = this.gyroRange ? mb(this.gyroRange, yb.gyro) : ly(yb.gyro),
          Wy = yb.accel ? this.accelRange ? mb(this.accelRange, yb.accel) : ly(yb.accel) : null;
        if (!Cy(bb, 1) || Wy && !Cy(Wy, .01)) return void this.restartWindow(yb);
        if (this.gyroRange = bb, this.accelRange = Wy, this.sum = sy(this.sum, qb(yb.gyro, yb.dtSec)), this.windowSec += yb.dtSec, this.windowSec < 1) return;
        const Uy = qb(this.sum, 1 / this.windowSec);
        if (ey(Uy) > 5) return;
        const hy = Sy(Uy, this.bias);
        let fy = 0;
        !this.calibrated || this.windowSec >= 3 ? fy = 1 : ey(hy) <= 1 && (fy = Math.min(1, yb.dtSec / 1)), this.bias = sy(this.bias, qb(hy, fy)), this.calibrated = this.calibrated || fy > 0
      }
      correct(yb) {
        return Sy(yb, this.bias)
      }
      getBias() {
        return this.bias
      }
      isCalibrated() {
        return this.calibrated
      }
      reset() {
        this.bias = By, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = By, this.windowSec = 0
      }
      restartWindow(yb) {
        this.gyroRange = ly(yb.gyro), this.accelRange = yb.accel ? ly(yb.accel) : null, this.sum = By, this.windowSec = 0
      }
    }
    class Vy {
      constructor() {
        this.down = null
      }
      update(yb, bb, Wy) {
        const Uy = Ey(qb(bb, -1));
        if (!this.down) return this.down = Uy, Uy;
        const hy = qb(yb, Ky * Wy),
          fy = this.down,
          Zy = {
            x: fy.x - (hy.y * fy.z - hy.z * fy.y),
            y: fy.y - (hy.z * fy.x - hy.x * fy.z),
            z: fy.z - (hy.x * fy.y - hy.y * fy.x)
          },
          cb = 0 === ey(Uy) ? 0 : Math.min(1, Wy / .25);
        var Py, oy;
        return this.down = Ey((oy = cb, sy(Py = Zy, qb(Sy(Uy, Py), oy)))), this.down
      }
      reset() {
        this.down = null
      }
    }
    class Jy {
      constructor() {
        this.entries = [], this.windowSec = 0
      }
      apply(yb, bb, Wy) {
        const Uy = Math.hypot(yb, bb),
          hy = Math.max(0, Math.min(1, (Uy - 2) / 2)),
          fy = {
            yaw: yb * (1 - hy),
            pitch: bb * (1 - hy),
            dtSec: Wy
          };
        for (this.entries.push(fy), this.windowSec += Wy; this.entries.length > 1 && this.windowSec - this.entries[0].dtSec >= .125;) this.windowSec -= this.entries[0].dtSec, this.entries.shift();
        let Zy = 0,
          cb = 0;
        for (const oy of this.entries) Zy += oy.yaw * oy.dtSec, cb += oy.pitch * oy.dtSec;
        const Py = this.windowSec > 0 ? {
          yaw: Zy / this.windowSec,
          pitch: cb / this.windowSec
        } : {
          yaw: fy.yaw,
          pitch: fy.pitch
        };
        return {
          yaw: yb * hy + Py.yaw,
          pitch: bb * hy + Py.pitch
        }
      }
      reset() {
        this.entries = [], this.windowSec = 0
      }
    }
    class gb {
      constructor() {
        this.calibrator = new Ty, this.gravity = new Vy, this.smoother = new Jy
      }
      process(yb, bb, Wy) {
        const Uy = Math.max(0, Math.min(.05, bb));
        this.calibrator.update({
          ...yb,
          dtSec: Uy
        });
        const hy = this.calibrator.correct(yb.gyro);
        let fy = hy.y;
        "player" === Wy && yb.accel && (fy = ((yb, bb) => {
          const Wy = yb.y * bb.y + yb.z * bb.z;
          return -Math.sign(Wy) * Math.min(1.41 * Math.abs(Wy), Math.hypot(yb.y, yb.z))
        })(hy, this.gravity.update(hy, yb.accel, Uy)));
        const Zy = this.smoother.apply(fy, hy.x, Uy),
          cb = ((yb, bb) => {
            const Wy = Math.hypot(yb, bb);
            if (Wy >= 1) return {
              yaw: yb,
              pitch: bb
            };
            const Uy = Wy / 1;
            return {
              yaw: yb * Uy,
              pitch: bb * Uy
            }
          })(Zy.yaw, Zy.pitch);
        return {
          yawDeg: cb.yaw * Uy,
          pitchDeg: cb.pitch * Uy
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
    const Gy = (yb, bb) => {
      var Wy, Uy, hy;
      const fy = bb * Ky,
        Zy = null !== (Wy = yb.beta) && void 0 !== Wy ? Wy : 0,
        cb = null !== (Uy = yb.gamma) && void 0 !== Uy ? Uy : 0;
      return {
        x: Zy * Math.cos(fy) - cb * Math.sin(fy),
        y: Zy * Math.sin(fy) + cb * Math.cos(fy),
        z: null !== (hy = yb.alpha) && void 0 !== hy ? hy : 0
      }
    };
    var Oy = Wy(8002);
    class Ry {
      constructor(yb, bb, Wy) {
        this.hid = yb, this.sink = bb, this.onControllersChanged = Wy, this.controllers = new Map, this.running = !1, this.openedCount = 0, this.opening = new Set, this.disconnectedWhileOpening = new Set, this.switchPacketCounter = 0, this.onConnect = yb => {
          this.openController(yb.device).catch((yb => {
            console.warn("Could not open motion controller", yb)
          }))
        }, this.onDisconnect = yb => {
          this.opening.has(yb.device) && this.disconnectedWhileOpening.add(yb.device);
          const bb = this.controllers.get(yb.device);
          bb && (this.forget(bb), this.onControllersChanged())
        }
      }
      async start() {
        if (this.running) return;
        this.running = !0, this.hid.addEventListener("connect", this.onConnect), this.hid.addEventListener("disconnect", this.onDisconnect);
        const yb = await this.hid.getDevices();
        for (const bb of yb) await this.openController(bb).catch((yb => {
          console.warn("Could not open motion controller", yb)
        }))
      }
      stop() {
        this.running = !1, this.hid.removeEventListener("connect", this.onConnect), this.hid.removeEventListener("disconnect", this.onDisconnect);
        for (const yb of [...this.controllers.values()]) this.forget(yb);
        this.onControllersChanged()
      }
      async request() {
        const yb = await this.hid.requestDevice({
          filters: Oy.j
        });
        let bb = 0;
        for (const Wy of yb) await this.openController(Wy).catch((yb => {
          console.warn("Could not open motion controller", yb), bb++
        }));
        return bb
      }
      async hasGrantedController() {
        return (await this.hid.getDevices()).some((yb => null !== (0, Oy.h)(yb.vendorId, yb.productId)))
      }
      getConnectedKinds() {
        return [...this.controllers.values()].map((yb => yb.kind))
      }
      forget(yb) {
        yb.device.removeEventListener("inputreport", yb.onReport), this.controllers.get(yb.device) === yb && this.controllers.delete(yb.device)
      }
      async openController(yb) {
        const bb = (0, Oy.h)(yb.vendorId, yb.productId);
        if (!bb || !this.running || this.controllers.has(yb) || this.opening.has(yb)) return;
        this.opening.add(yb);
        let Wy = !1;
        try {
          yb.opened || await yb.open()
        } finally {
          this.opening.delete(yb), Wy = this.disconnectedWhileOpening.delete(yb)
        }
        if (Wy) return void yb.close().catch((yb => {
          console.debug("Could not close an unplugged motion controller", yb)
        }));
        if (!this.running) return;
        const Uy = {
          device: yb,
          kind: bb,
          lastClock: null,
          lastEventMs: null,
          lastReadingMs: -1 / 0,
          openedOrder: this.openedCount++,
          onReport: yb => {
            this.onReport(Uy, yb)
          }
        };
        this.controllers.set(yb, Uy), yb.addEventListener("inputreport", Uy.onReport), this.onControllersChanged();
        try {
          await this.enableMotion(Uy)
        } catch (hy) {
          console.warn(`Could not turn on motion for ${bb}`, hy), this.controllers.get(yb) === Uy && (this.forget(Uy), this.onControllersChanged())
        }
      }
      async enableMotion(yb) {
        let {
          device: bb,
          kind: Wy
        } = yb;
        if ((0, Oy.i)(Wy))
          for (const Uy of Oy.A[Wy]) await bb.receiveFeatureReport(Uy).catch((yb => {
            console.debug(`Motion controller feature report ${Uy} unavailable`, yb)
          }));
        else
          for (let Uy = 0; Uy < 2; Uy++)
            for (const {
                subcommand: yb,
                args: Wy
              }
              of Oy.E) await bb.sendReport(Oy.F, (0, Oy.e)(this.switchPacketCounter++, yb, Wy)), await new Promise((yb => {
              setTimeout(yb, 60)
            }))
      }
      onReport(yb, bb) {
        const Wy = (0, Oy.u)(yb.kind, bb.reportId, bb.data, yb.device.productId);
        if (!Wy) return;
        const Uy = null === yb.lastEventMs ? 0 : (bb.timeStamp - yb.lastEventMs) / 1e3;
        yb.lastEventMs = bb.timeStamp;
        let hy = Wy.dtSec;
        if (null !== hy && Uy > 0 && (hy = Math.max(.001, Math.min(.017, Uy / Wy.readings.length))), null === hy && null !== Wy.sensorClock && (0, Oy.i)(yb.kind)) {
          const bb = (0, Oy.x)(yb.kind, yb.lastClock, Wy.sensorClock);
          yb.lastClock = Wy.sensorClock, hy = 0 === bb ? null : bb
        }
        if (yb.lastReadingMs = bb.timeStamp, this.isPreferred(yb, bb.timeStamp))
          for (const Zy of Wy.readings) {
            var fy;
            this.sink(Zy, null !== (fy = hy) && void 0 !== fy ? fy : Uy, `hid${yb.openedOrder}`)
          }
      }
      isPreferred(yb, bb) {
        const Wy = yb => 1e6 * Oy.q[yb.kind] + yb.openedOrder;
        for (const Uy of this.controllers.values())
          if (Uy !== yb && bb - Uy.lastReadingMs < 500 && Wy(Uy) < Wy(yb)) return !1;
        return !0
      }
    }
    var vb = Wy(94);
    const ib = () => DeviceMotionEvent,
      My = () => "undefined" !== typeof window && "undefined" !== typeof DeviceMotionEvent && window.isSecureContext && (0, vb.isMobile)(),
      Yy = () => {
        var yb;
        const bb = null === (yb = window.screen.orientation) || void 0 === yb ? void 0 : yb.angle;
        return "number" === typeof bb ? bb : "number" === typeof window.orientation ? window.orientation : 0
      };
    class Xy {
      constructor(yb, bb) {
        this.sink = yb, this.onStateChanged = bb, this.state = "off", this.lastEventMs = null, this.noSensorTimer = null, this.wanted = !1, this.permissionRequest = null, this.granted = !1, this.onGesture = () => {
          this.requestPermission().catch((yb => {
            console.warn("Could not enable the motion sensor", yb)
          }))
        }, this.onMotion = yb => {
          const bb = yb.rotationRate;
          if (!bb || null === bb.alpha && null === bb.beta && null === bb.gamma) return;
          const Wy = null === this.lastEventMs ? 0 : (yb.timeStamp - this.lastEventMs) / 1e3;
          this.lastEventMs = yb.timeStamp, this.clearNoSensorTimer(), this.setState("on"), this.sink({
            gyro: Gy(bb, Yy()),
            accel: null
          }, Wy, "phone")
        }
      }
      getState() {
        return this.state
      }
      start() {
        if (this.wanted = !0, "off" === this.state) return "function" !== typeof ib().requestPermission || this.granted ? void this.listen() : (this.setState("needsPermission"), void this.armGestureRequest())
      }
      requestPermission() {
        return this.permissionRequest || (this.permissionRequest = this.askPermission().finally((() => {
          this.permissionRequest = null
        }))), this.permissionRequest
      }
      async askPermission() {
        const yb = ib().requestPermission;
        if (!this.wanted) return;
        if ("function" !== typeof yb) return void this.listen();
        let bb;
        this.disarmGestureRequest();
        try {
          bb = await yb.call(DeviceMotionEvent)
        } catch (Wy) {
          throw this.wanted && "needsPermission" === this.state && this.armGestureRequest(), Wy
        }
        this.wanted && ("granted" === bb ? (this.granted = !0, this.listen()) : this.setState("denied"))
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
      setState(yb) {
        this.state !== yb && (this.state = yb, this.onStateChanged())
      }
    }
    const ny = "controllerGyroStatusChanged",
      uy = {
        aWy: 0,
        Fby: 0
      },
      rb = yb => {
        var bb, Wy;
        return "undefined" === typeof document || (null === (bb = null === (Wy = document.featurePolicy) || void 0 === Wy ? void 0 : Wy.allowsFeature(yb)) || void 0 === bb || bb)
      };
    class Hy {
      constructor() {
        this.processor = new gb, this.hid = void 0, this.hidBlocked = void 0, this.phone = void 0, this.phoneBlocked = void 0, this.source = null, this.pendingYawDeg = 0, this.pendingPitchDeg = 0, this.lastDrainMs = -1 / 0, this.lastHidReadingMs = -1 / 0, this.running = !1, this.phoneRunning = !1, this.syncWithSettings = yb => {
          const bb = yb.gyroAiming && cb.f.hasConnectedPad();
          var Wy, Uy;
          bb !== this.phoneRunning && (this.phoneRunning = bb, bb ? null === (Wy = this.phone) || void 0 === Wy || Wy.start() : null === (Uy = this.phone) || void 0 === Uy || Uy.stop());
          if (yb.gyroAiming !== this.running) {
            var hy, fy;
            if (this.running = yb.gyroAiming, this.running) null === (hy = this.hid) || void 0 === hy || hy.start().catch((yb => {
              console.warn("Could not open motion controllers", yb)
            }));
            else null === (fy = this.hid) || void 0 === fy || fy.stop(), this.processor.reset(), this.source = null, this.discardPending();
            this.publishStatus()
          }
        }, this.publishStatus = () => {
          hy.g.EZ(ny, this.getStatus())
        };
        const yb = (() => {
            var yb;
            return "undefined" !== typeof navigator && window.isSecureContext && null !== (yb = navigator.hid) && void 0 !== yb ? yb : null
          })(),
          bb = rb("hid");
        this.hidBlocked = null !== yb && !bb, this.hid = yb && bb ? new Ry(yb, ((yb, bb, Wy) => {
          this.lastHidReadingMs = performance.now(), this.feed(yb, bb, "player", Wy)
        }), this.publishStatus) : null;
        const Wy = rb("accelerometer") && rb("gyroscope");
        this.phoneBlocked = My() && !Wy, this.phone = My() && Wy ? new Xy(((yb, bb, Wy) => {
          performance.now() - this.lastHidReadingMs >= 500 && this.feed(yb, bb, "local", Wy)
        }), this.publishStatus) : null, hy.g.subscribe(oy.e, this.syncWithSettings), cb.f.onConnectedPadsChanged((() => {
          this.syncWithSettings((0, oy.g)()), this.publishStatus()
        })), this.syncWithSettings((0, oy.g)())
      }
      isSupported() {
        return null !== this.hid || null !== this.phone
      }
      getStatus() {
        var yb, bb, Wy, Uy;
        return {
          hidSupported: null !== this.hid,
          hidBlocked: this.hidBlocked,
          phoneSupported: null !== this.phone,
          phoneBlocked: this.phoneBlocked,
          controllers: null !== (yb = null === (bb = this.hid) || void 0 === bb ? void 0 : bb.getConnectedKinds()) && void 0 !== yb ? yb : [],
          phoneMotion: null !== (Wy = null === (Uy = this.phone) || void 0 === Uy ? void 0 : Uy.getState()) && void 0 !== Wy ? Wy : "off",
          padConnected: cb.f.hasConnectedPad()
        }
      }
      async connectController() {
        return this.hid ? this.hid.request() : 0
      }
      async connectControllerIfNoneGranted() {
        this.hid && !await this.hid.hasGrantedController() && await this.hid.request()
      }
      async allowPhoneMotion() {
        var yb;
        await (null === (yb = this.phone) || void 0 === yb ? void 0 : yb.requestPermission())
      }
      drainLookDelta() {
        const yb = performance.now();
        yb - this.lastDrainMs > 500 && this.discardPending(), this.lastDrainMs = yb;
        const bb = {
          yawDeg: this.pendingYawDeg,
          pitchDeg: this.pendingPitchDeg
        };
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0;
        const Wy = (0, oy.g)();
        return Wy.gyroAiming && (yb => {
          let {
            activation: bb,
            isHeld: Wy,
            useButton: Uy,
            gyroButton: hy
          } = yb;
          return "always" === bb || Wy("aiming" === bb ? Uy : hy)
        })({
          activation: Wy.gyroActivation,
          isHeld: yb => Py.b.isButtonHeld(yb),
          useButton: (0, Zy.e)("use"),
          gyroButton: Wy.gyroButton
        }) ? ((yb, bb) => ({
          aWy: -yb.yawDeg * bb * Ky,
          Fby: -yb.pitchDeg * bb * Ky
        }))(bb, Wy.gyroSensitivity) : uy
      }
      discardPending() {
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0
      }
      injectMotion(yb, bb) {
        this.feed(yb, bb, "local", "injected")
      }
      getCalibration() {
        return this.processor.getCalibration()
      }
      feed(yb, bb, Wy, Uy) {
        this.source !== Uy && (this.processor.reset(), this.source = Uy);
        const hy = this.processor.process(yb, bb, Wy);
        this.pendingYawDeg += hy.yawDeg, this.pendingPitchDeg += hy.pitchDeg
      }
    }
    let ab = null;
    const Fy = () => (ab || (ab = new Hy), ab),
      py = () => {
        const [yb, bb] = (0, Uy.useState)((() => Fy().getStatus()));
        return (0, fy.i)(ny, bb), (0, Uy.useEffect)((() => {
          bb(Fy().getStatus())
        }), []), yb
      }
  },
  8002: (yb, bb, Wy) => {
    Wy.d(bb, {
      A: () => gb,
      E: () => Jy,
      F: () => Cy,
      e: () => Vy,
      h: () => Py,
      i: () => Uy,
      j: () => cb,
      n: () => oy,
      q: () => By,
      u: () => mb,
      x: () => Ey
    });
    const Uy = yb => "dualShock4" === yb || "dualSense" === yb,
      hy = 1356,
      fy = 1406,
      Zy = [{
        vendorId: hy,
        productId: 1476,
        kind: "dualShock4"
      }, {
        vendorId: hy,
        productId: 2508,
        kind: "dualShock4"
      }, {
        vendorId: hy,
        productId: 2976,
        kind: "dualShock4"
      }, {
        vendorId: hy,
        productId: 3302,
        kind: "dualSense"
      }, {
        vendorId: hy,
        productId: 3570,
        kind: "dualSense"
      }, {
        vendorId: fy,
        productId: 8201,
        kind: "switchPro"
      }, {
        vendorId: fy,
        productId: 8198,
        kind: "joyConLeft"
      }, {
        vendorId: fy,
        productId: 8199,
        kind: "joyConRight"
      }],
      cb = Zy.map((yb => {
        let {
          vendorId: bb,
          productId: Wy
        } = yb;
        return {
          vendorId: bb,
          productId: Wy
        }
      })),
      Py = (yb, bb) => {
        var Wy, Uy;
        return null !== (Wy = null === (Uy = Zy.find((Wy => Wy.vendorId === yb && Wy.productId === bb))) || void 0 === Uy ? void 0 : Uy.kind) && void 0 !== Wy ? Wy : null
      },
      oy = {
        dualShock4: "DualShock 4",
        dualSense: "DualSense",
        switchPro: "Switch Pro Controller",
        joyConLeft: "Joy-Con (L)",
        joyConRight: "Joy-Con (R)"
      },
      By = {
        dualSense: 0,
        dualShock4: 0,
        switchPro: 0,
        joyConRight: 1,
        joyConLeft: 2
      },
      Ky = 2e3 / 32767,
      ey = 1 / 8192,
      qb = 936 / 13371,
      sy = (yb, bb, Wy) => ({
        x: yb.getInt16(bb, !0) * Wy,
        y: yb.getInt16(bb + 2, !0) * Wy,
        z: yb.getInt16(bb + 4, !0) * Wy
      }),
      Sy = yb => 0 === yb.x && 0 === yb.y && 0 === yb.z,
      Ey = (yb, bb, Wy) => null === bb ? null : "dualShock4" === yb ? 16 * (Wy - bb & 65535) / 3 / 1e6 : (Wy - bb >>> 0) / 3 / 1e6,
      ly = (yb, bb) => "joyConRight" === bb ? {
        x: yb.y,
        y: -yb.z,
        z: -yb.x
      } : {
        x: -yb.y,
        y: yb.z,
        z: -yb.x
      },
      mb = (yb, bb, Wy, hy) => Uy(yb) ? ((yb, bb, Wy, Uy) => {
        const hy = ((yb, bb, Wy) => "dualShock4" === yb ? 1 === bb && Wy >= 63 ? 0 : 17 === bb && Wy >= 65 ? 2 : null : 1 === bb && Wy >= 62 ? 0 : 49 === bb && Wy >= 63 ? 1 : null)(yb, bb, Wy.byteLength);
        if (null === hy) return null;
        if (2976 === Uy && 1 === bb && 0 !== (4 & Wy.getUint8(30))) return null;
        const fy = hy + ("dualShock4" === yb ? 12 : 15),
          Zy = sy(Wy, fy, Ky),
          cb = sy(Wy, fy + 6, ey);
        return Sy(Zy) && Sy(cb) ? null : {
          readings: [{
            gyro: Zy,
            accel: cb
          }],
          dtSec: null,
          sensorClock: "dualShock4" === yb ? Wy.getUint16(hy + 9, !0) : Wy.getUint32(hy + 27, !0)
        }
      })(yb, bb, Wy, hy) : ((yb, bb, Wy) => {
        if (48 !== bb && 49 !== bb || Wy.byteLength < 48) return null;
        const Uy = [];
        for (let hy = 0; hy < 3; hy++) {
          const bb = sy(Wy, 12 + 12 * hy, 244e-6),
            fy = sy(Wy, 18 + 12 * hy, qb);
          if (Sy(fy) && Sy(bb)) return null;
          Uy.push({
            gyro: ly(fy, yb),
            accel: ly(bb, yb)
          })
        }
        return {
          readings: Uy,
          dtSec: .005,
          sensorClock: null
        }
      })(yb, bb, Wy),
      Cy = 1,
      Ty = [0, 1, 64, 64, 0, 1, 64, 64],
      Vy = (yb, bb, Wy) => new Uint8Array([15 & yb, ...Ty, bb, ...Wy]),
      Jy = [{
        subcommand: 64,
        args: [1]
      }, {
        subcommand: 3,
        args: [48]
      }],
      gb = {
        dualShock4: [2, 5],
        dualSense: [5]
      }
  },
  7370: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => ib,
      h: () => Hy,
      k: () => ly,
      o: () => qb.f,
      p: () => Xy,
      q: () => Yy,
      r: () => mb,
      u: () => ny,
      v: () => qb.n,
      z: () => qb.q,
      A: () => ab,
      E: () => qb.u,
      I: () => Gy
    });
    var Uy = Wy(55),
      hy = Wy(19),
      fy = Wy(23),
      Zy = Wy(1268),
      cb = Wy(1145),
      Py = Wy(7345),
      oy = Wy(7375),
      By = Wy(7333),
      Ky = Wy(7317),
      ey = Wy(7381),
      qb = Wy(1239),
      sy = Wy(7326),
      Sy = Wy(7793),
      Ey = Wy(3644);
    const ly = yb => !yb.repeat && !(0, Sy.c)(yb.key),
      mb = "PadHidesCursor";
    let Cy = !1;
    const Ty = yb => {
        yb !== Cy && (Cy = yb, document.documentElement.classList.toggle(mb, yb))
      },
      Vy = new class {
        constructor() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
        observe(yb) {
          let bb = !1,
            Wy = !1;
          yb.values.forEach(((yb, Uy) => {
            const hy = yb >= (this.buttonsDown[Uy] ? sy.$ : sy.X);
            hy && !this.buttonsDown[Uy] && (bb = !0, Wy = !0), this.buttonsDown[Uy] = hy
          }));
          return [yb.leftStick, yb.rightStick].forEach(((yb, Uy) => {
            const hy = this.stickAnchors[Uy];
            Math.hypot(yb.x, yb.y) < (hy ? sy.$ : .3) ? this.stickAnchors[Uy] = null : (!hy || Math.hypot(yb.x - hy.x, yb.y - hy.y) >= .3) && (this.stickAnchors[Uy] = {
              x: yb.x,
              y: yb.y
            }, bb = !0, Wy ||= !hy)
          })), bb && (this.lastActivityMs = yb.timestampMs), this.onlyMovedOn = bb && !Wy, bb
        }
        wasOnlyMoveOn() {
          return this.onlyMovedOn
        }
        isHolding(yb) {
          return !(yb - this.lastActivityMs >= 1e3) && (this.buttonsDown.some((yb => yb)) || this.stickAnchors.some((yb => null !== yb)))
        }
        isStickOffRest() {
          return this.stickAnchors.some((yb => null !== yb))
        }
        reset() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
      };
    let Jy = null,
      gb = !1;
    const Gy = () => gb;
    let Oy = null,
      Ry = !1,
      vb = null;
    const ib = () => vb;
    let My = !1;
    const Yy = yb => {
        if (!Vy.observe(yb)) return !1;
        if (My && Vy.wasOnlyMoveOn() && !(0, qb.f)()) return !1;
        My = !1, gb = !1;
        const bb = !(0, qb.f)();
        return bb && (Jy = yb, vb = !Cy && Ry && Oy ? {
          ...Oy
        } : null), Ry = !1, (0, qb.n)("gamepad"), Ty(!0), (0, ey.l)((0, Py.i)()), bb
      },
      Xy = yb => !(0, qb.f)() || yb === Jy,
      ny = () => {
        Vy.reset()
      },
      uy = () => {
        const yb = hy.d.get("activeInputDevice"),
          bb = "gamepad" === yb ? Ky.f.getActivePad() : null;
        return {
          device: yb,
          inGame: (0, cb.l)(),
          padMovesMouse: null !== bb && (0, By.e)(bb.id)
        }
      },
      rb = yb => {
        document.pointerLockElement ? Oy = null : (Oy ??= {
          x: 0,
          y: 0
        }, Oy.x = yb.clientX, Oy.y = yb.clientY)
      },
      Hy = () => {
        const yb = new Ey.e,
          bb = bb => {
            yb.reset(), My = !1, (0, qb.n)(bb)
          },
          Wy = yb => {
            if (yb.isTrusted) {
              if (yb instanceof KeyboardEvent) {
                if ((0, qb.j)(yb), !ly(yb)) return;
                gb = !0
              }
              if (yb instanceof PointerEvent && "touch" === yb.pointerType) return Oy = null, void bb("touch");
              yb instanceof PointerEvent && (rb(yb), Ry = !0), ("pointerdown" !== yb.type || (yb => {
                let {
                  device: bb,
                  inGame: Wy,
                  padMovesMouse: Uy
                } = yb;
                return !("gamepad" === bb && Uy && Wy)
              })(uy())) && bb("keyboardMouse")
            }
          },
          Uy = yb => {
            yb.isTrusted && (Oy = null, bb("touch"))
          },
          Zy = yb => {
            yb.isTrusted && "touch" !== yb.pointerType && !yb.relatedTarget && (Oy = null)
          },
          cb = Wy => {
            if (!Wy.isTrusted || "touch" === Wy.pointerType) return;
            rb(Wy);
            const Uy = Wy.movementX || 0,
              fy = Wy.movementY || 0;
            if (0 === Uy && 0 === fy) return;
            if (Ry = !0, Ty(!1), "keyboardMouse" === hy.d.get("activeInputDevice")) return;
            const Zy = Vy.isHolding(Wy.timeStamp),
              cb = uy(),
              Py = (yb => {
                let {
                  device: bb,
                  inGame: Wy,
                  padMovesMouse: Uy,
                  padHolding: hy
                } = yb;
                return ("gamepad" !== bb || !Uy) && "keyboardMouse" !== bb && (Wy || !hy)
              })({
                ...cb,
                inGame: cb.inGame && (0, oy.e)(),
                padHolding: Zy
              });
            Py && yb.add(Uy, fy, Wy.timeStamp) && (bb("keyboardMouse"), My = Vy.isStickOffRest())
          },
          Py = yb => {
            Ty("gamepad" === yb)
          },
          By = {
            capture: !0,
            passive: !0
          };
        window.addEventListener("keydown", Wy, By), window.addEventListener("pointerdown", Wy, By), window.addEventListener("wheel", Wy, By), window.addEventListener("touchstart", Uy, By), window.addEventListener("pointermove", cb, By), window.addEventListener("pointerout", Zy, By);
        const Ky = fy.g.subscribe("appManagerUpdated|activeInputDevice", Py);
        return Py(hy.d.get("activeInputDevice")), () => {
          window.removeEventListener("keydown", Wy, By), window.removeEventListener("pointerdown", Wy, By), window.removeEventListener("wheel", Wy, By), window.removeEventListener("touchstart", Uy, By), window.removeEventListener("pointermove", cb, By), window.removeEventListener("pointerout", Zy, By), Oy = null, fy.g.unsubscribe(Ky), Ty(!1)
        }
      },
      ab = () => {
        const [yb, bb] = (0, Uy.useState)(Py.i);
        return (0, Zy.i)(Py.d, (() => {
          bb((0, Py.i)())
        })), (0, Zy.i)(Ky.c, (() => {
          bb((0, Py.i)())
        })), yb
      }
  },
  7349: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Uy,
      d: () => hy
    });
    const Uy = ["xbox", "playstation", "nintendo", "steamdeck", "generic"],
      hy = yb => Uy.includes(yb)
  },
  7375: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => oy,
      e: () => By,
      i: () => Py,
      j: () => cb
    });
    var Uy = Wy(19),
      hy = Wy(1458),
      fy = Wy(1499);
    const Zy = new Map,
      cb = (yb, bb) => (Zy.has(yb) && console.warn(`Gameplay blocker "${yb}" registered twice; the newer one replaces it.`), Zy.set(yb, bb), () => {
        Zy.get(yb) === bb && Zy.delete(yb)
      }),
      Py = () => (0, fy.c)(document.activeElement),
      oy = function() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        for (const [bb, Wy] of Zy)
          if (!yb.includes(bb) && Wy()) return bb;
        return null
      },
      By = function() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return "inGame" === Uy.d.get("gameState") && (!(0, hy.n)() && (!Py() && null === oy(yb)))
      }
  },
  7981: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => cb
    });
    var Uy = Wy(19),
      hy = Wy(2739),
      fy = Wy(1207),
      Zy = Wy(1239);
    const cb = async () => {
      if ((0, Zy.f)()) {
        if (!0 !== await fy.NotificationProvider.showPromptPopup({
            title: "controller:menusLeaveGameTitle",
            confirmText: "controller:menusLeaveGameLeave",
            cancelText: "controller:menusLeaveGameStay",
            destructive: !0
          }).getResult() || "inGame" !== Uy.d.get("gameState")) return
      }(0, hy.d)()
    }
  },
  7326: (yb, bb, Wy) => {
    Wy.d(bb, {
      $: () => qb,
      D: () => Cy,
      H: () => My,
      J: () => Ty,
      M: () => ly,
      Q: () => Ey,
      U: () => oy,
      X: () => ey,
      b: () => Xy,
      bb: () => hy,
      eb: () => Uy,
      f: () => ib,
      i: () => By,
      ib: () => Jy,
      k: () => Py,
      mb: () => vb,
      n: () => cb,
      nb: () => Yy,
      q: () => Gy,
      qb: () => Vy,
      r: () => mb,
      t: () => gb,
      w: () => fy,
      z: () => Ky
    });
    const Uy = ["A", "B", "X", "Y", "LB", "RB", "LT", "RT", "View", "Menu", "LS", "RS", "Up", "Down", "Left", "Right", "Home"],
      hy = Uy.length,
      fy = function() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return {
          values: new Array(hy).fill(0),
          leftStick: {
            x: 0,
            y: 0
          },
          rightStick: {
            x: 0,
            y: 0
          },
          timestampMs: yb
        }
      },
      Zy = Object.fromEntries(Uy.map(((yb, bb) => [yb, bb]))),
      cb = yb => Zy[yb],
      Py = function(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .95;
        const Uy = Math.hypot(yb.x, yb.y);
        if (Uy <= bb) return {
          x: 0,
          y: 0
        };
        const hy = Math.min(1, (Uy - bb) / Math.max(1e-4, Wy - bb));
        return {
          x: yb.x / Uy * hy,
          y: yb.y / Uy * hy
        }
      },
      oy = ["exponential", "linear", "boost"],
      By = (yb, bb) => {
        const Wy = Math.hypot(yb.x, yb.y);
        if (0 === Wy) return {
          x: 0,
          y: 0
        };
        const Uy = ((yb, bb) => {
          const Wy = Math.max(0, Math.min(1, yb));
          return "linear" === bb ? Wy : Wy * Wy
        })(Wy, bb);
        return {
          x: yb.x / Wy * Uy,
          y: yb.y / Wy * Uy
        }
      },
      Ky = .5,
      ey = .3,
      qb = .2,
      sy = cb("LT"),
      Sy = cb("RT"),
      Ey = yb => yb === sy || yb === Sy,
      ly = (yb, bb) => {
        const Wy = cb(bb);
        return Ey(Wy) ? yb[Wy] > .35 : yb[Wy] >= Ky
      },
      mb = (yb, bb) => yb.map(((yb, Wy) => Ey(Wy) ? bb[Wy] ? yb > .35 : yb >= .55 : yb >= Ky)),
      Cy = ["Up", "Down", "Left", "Right"],
      Ty = yb => Cy.includes(yb),
      Vy = function(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .5;
        return Math.hypot(yb.x, yb.y) < bb ? null : Math.abs(yb.x) > Math.abs(yb.y) ? yb.x > 0 ? "Right" : "Left" : yb.y > 0 ? "Down" : "Up"
      },
      Jy = {
        initialDelayMs: 350,
        intervalMs: 120
      },
      gb = {
        initialDelayMs: 350,
        intervalMs: 150
      },
      Gy = ["default", "slow", "off"],
      Oy = 800,
      Ry = 250,
      vb = (yb, bb) => "off" === bb ? null : "slow" === bb ? {
        initialDelayMs: Math.max(yb.initialDelayMs, Oy),
        intervalMs: Math.max(yb.intervalMs, Ry)
      } : yb;
    class ib {
      constructor(yb) {
        this.readTiming = yb, this.kW = !1, this.timing = null, this.nextFireMs = 0
      }
      update(yb, bb) {
        return yb ? this.kW ? !!(this.timing && bb >= this.nextFireMs) && (this.nextFireMs = bb + this.timing.intervalMs, !0) : (this.kW = !0, this.timing = this.readTiming(), this.nextFireMs = bb + (null !== (Wy = null === (Uy = this.timing) || void 0 === Uy ? void 0 : Uy.initialDelayMs) && void 0 !== Wy ? Wy : 0), !0) : (this.kW = !1, !1);
        var Wy, Uy
      }
      reset() {
        this.kW = !1
      }
    }
    const My = {
        initialDelayMs: 350,
        intervalMs: 80
      },
      Yy = {
        initialDelayMs: 400,
        intervalMs: 90
      };
    class Xy {
      constructor(yb) {
        this.timer = yb, this.direction = null
      }
      update(yb, bb) {
        return yb !== this.direction && (this.timer.reset(), this.direction = yb), this.timer.update(null !== yb, bb) ? yb : null
      }
      reset() {
        this.timer.reset(), this.direction = null
      }
    }
  },
  7896: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => hy,
      d: () => fy
    });
    let Uy = -1 / 0;
    const hy = () => {
        Uy = performance.now()
      },
      fy = yb => performance.now() - Uy < yb
  },
  7796: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Zy,
      d: () => fy
    });
    var Uy = Wy(7345),
      hy = Wy(7326);
    const fy = yb => (0, hy.mb)(yb, (0, Uy.g)().buttonRepeat),
      Zy = yb => new hy.f((() => fy(yb)))
  },
  7987: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => Py,
      h: () => fy,
      k: () => Zy,
      m: () => hy,
      o: () => cb
    });
    var Uy = Wy(1597);
    const hy = "controllerPadShopOpen",
      fy = yb => Uy.h.includes(yb),
      Zy = yb => Object.values(yb).some((yb => !1 !== yb.canBuy && !yb.isRewardedAd)),
      cb = (yb, bb, Wy) => {
        var Uy, hy, Zy, cb;
        const Py = yb.filter((yb => !fy(yb))),
          oy = null !== bb && yb.includes(bb) ? bb : null;
        return null !== oy && !fy(oy) && Wy(oy) ? oy : null !== (Uy = null !== (hy = null !== (Zy = null !== (cb = Py.find(Wy)) && void 0 !== cb ? cb : Py[0]) && void 0 !== Zy ? Zy : oy) && void 0 !== hy ? hy : yb[0]) && void 0 !== Uy ? Uy : null
      },
      Py = yb => yb.userInput || yb.isRewardedAd || "boolean" === typeof yb.isSelected ? null : JSON.stringify([yb.image, yb.cost, yb.currency, yb.amount, yb.customTitle, yb.buyButtonText, yb.description, yb.canBuy])
  },
  7361: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => Py,
      f: () => fy,
      g: () => cb
    });
    var Uy = Wy(23),
      hy = Wy(7345);
    const fy = (yb, bb) => "OpenShop" === yb ? "shop" === bb : "OpenLobbyLeaderboard" !== yb || "leaderboard" === bb;
    let Zy = !1;
    const cb = yb => {
        yb !== Zy && (Zy = yb, Uy.g.EZ(hy.d, (0, hy.g)()))
      },
      Py = () => ((yb, bb) => "shop" === yb && bb ? "shop" : "leaderboard")((0, hy.g)().leaderboardButton, Zy)
  },
  8017: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => oy,
      d: () => By
    });
    var Uy = Wy(55),
      hy = Wy(1268),
      fy = Wy(1647),
      Zy = Wy(1245),
      cb = Wy(1251),
      Py = Wy(952);
    const oy = () => {
        const yb = (0, Zy.u)();
        if ((0, Uy.useEffect)((() => {
            (0, Zy.l)()
          }), []), !yb) return null;
        const {
          ControllerCategory: bb
        } = yb;
        return (0, Py.jsx)(cb.d, {
          children: (0, Py.jsx)(bb, {})
        })
      },
      By = () => {
        var yb;
        const bb = (0, Zy.u)(),
          [, Wy] = (0, Uy.useReducer)((yb => yb + 1), 0);
        return (0, hy.i)(fy.e, Wy), null !== (yb = null === bb || void 0 === bb ? void 0 : bb.hasActivePad()) && void 0 !== yb && yb
      }
  },
  7352: (yb, bb, Wy) => {
    Wy.d(bb, {
      B: () => Py,
      Bb: () => Gy,
      C: () => cb,
      F: () => Vy,
      H: () => ey,
      L: () => qb,
      P: () => Ky,
      Q: () => Ty,
      S: () => oy,
      W: () => ly,
      _: () => Ry,
      bb: () => Cy,
      cb: () => Sy,
      e: () => uy,
      fb: () => Ey,
      g: () => Hy,
      ib: () => sy,
      k: () => vb,
      mb: () => mb,
      n: () => Zy,
      qb: () => Yy,
      r: () => Oy,
      tb: () => fy,
      u: () => gb,
      vb: () => Jy,
      w: () => Xy,
      x: () => ny,
      xb: () => rb,
      z: () => By
    });
    var Uy = Wy(7339),
      hy = Wy(7326);
    const fy = {
        min: 25,
        max: 500,
        step: 5
      },
      Zy = {
        min: 25,
        max: 100,
        step: 5
      },
      cb = {
        min: 0,
        max: .4,
        step: .01
      },
      Py = {
        min: 25,
        max: 300,
        step: 5
      },
      oy = {
        min: .5,
        max: 6,
        step: .1
      },
      By = (yb, bb) => {
        if (!Number.isFinite(yb)) return bb.min;
        const Wy = bb.min + Math.round((yb - bb.min) / bb.step) * bb.step,
          Uy = Math.min(bb.max, Math.max(bb.min, Wy));
        return Math.round(1e3 * Uy) / 1e3
      },
      Ky = yb => `${Math.round(yb)}%`,
      ey = yb => Ky(100 * yb),
      qb = yb => `${yb.toFixed(1)}\xd7`,
      sy = [{
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
      Sy = [{
        value: "exponential",
        labelKey: "controller:settingsCurveExponential"
      }, {
        value: "linear",
        labelKey: "controller:settingsCurveLinear"
      }, {
        value: "boost",
        labelKey: "controller:settingsCurveBoost"
      }],
      Ey = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "focus",
        labelKey: "controller:settingsMenuNavFocus"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      ly = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "slot",
        labelKey: "controller:settingsInventoryNavSlot"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      mb = [{
        value: "wheel",
        labelKey: "controller:settingsQuickChatWheel"
      }, {
        value: "off",
        labelKey: "controller:settingsQuickChatOff"
      }],
      Cy = [{
        value: "shop",
        labelKey: "controller:settingsLeaderboardButtonShop"
      }, {
        value: "leaderboard",
        labelKey: "controller:settingsLeaderboardButtonLeaderboard"
      }],
      Ty = [{
        value: "always",
        labelKey: "controller:settingsGyroAlways"
      }, {
        value: "aiming",
        labelKey: "controller:settingsGyroWhileAiming"
      }, {
        value: "button",
        labelKey: "controller:settingsGyroWhileButton"
      }],
      Vy = [{
        value: "tapHold",
        labelKey: "controller:settingsEmoteButtonTapHold"
      }, {
        value: "wheel",
        labelKey: "controller:settingsEmoteButtonWheel"
      }],
      Jy = [{
        value: "toggle",
        labelKey: "controller:settingsSneakToggle"
      }, {
        value: "hold",
        labelKey: "controller:settingsSneakHold"
      }],
      gb = [{
        value: "default",
        labelKey: "controller:settingsButtonRepeatDefault"
      }, {
        value: "slow",
        labelKey: "controller:settingsButtonRepeatSlow"
      }, {
        value: "off",
        labelKey: "controller:settingsButtonRepeatOff"
      }],
      Gy = [{
        value: "short",
        labelKey: "controller:settingsTapHoldShort"
      }, {
        value: "medium",
        labelKey: "controller:settingsTapHoldMedium"
      }, {
        value: "long",
        labelKey: "controller:settingsTapHoldLong"
      }],
      Oy = [{
        value: "hold",
        labelKey: "controller:settingsAttackHold"
      }, {
        value: "toggle",
        labelKey: "controller:settingsAttackToggle"
      }],
      Ry = {
        southpaw: "controller:settingsLayoutSouthpaw",
        triggersSwapped: "controller:settingsLayoutTriggersSwapped"
      },
      vb = {
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
        Fq: "controller:settingsActionPickBlock",
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
      ib = {
        gameplay: "controller:settingsGroupGameplay",
        menu: "controller:settingsGroupMenus",
        inventory: "controller:settingsGroupInventory",
        keyboard: "controller:settingsGroupKeyboard"
      },
      My = [{
        kind: "fixed",
        stick: "move",
        labelKey: "controller:settingsActionMove"
      }, {
        kind: "fixed",
        stick: "look",
        labelKey: "controller:settingsActionLook"
      }],
      Yy = Uy.e.map((yb => {
        let {
          group: bb,
          actions: Wy
        } = yb;
        const Uy = Wy.map((yb => ({
          kind: "action",
          action: yb
        })));
        return {
          titleKey: ib[bb],
          rows: "gameplay" === bb ? [...My, ...Uy] : Uy
        }
      })),
      Xy = hy.eb.filter((yb => "Home" !== yb)),
      ny = 1e4;
    class uy {
      constructor(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
        this.cancelButton = yb, this.openButton = bb, this.accepts = Wy, this.startMs = null, this.ignoredUntilMs = new Map, this.cancelDownAtMs = null
      }
      update(yb, bb) {
        var Wy;
        this.updateIgnored(yb, bb);
        const Uy = bb - (null !== (Wy = this.startMs) && void 0 !== Wy ? Wy : bb) >= 250;
        for (const hy of Xy)
          if (hy !== this.cancelButton && Uy && !this.ignoredUntilMs.has(hy) && yb.wasPressed(hy) && this.accepts(hy)) return {
            kind: "bind",
            button: hy
          };
        if (this.ignoredUntilMs.has(this.cancelButton)) return null;
        if (yb.wasPressed(this.cancelButton)) {
          if (!this.accepts(this.cancelButton)) return {
            kind: "cancel"
          };
          this.cancelDownAtMs = bb
        }
        return null === this.cancelDownAtMs ? null : yb.isHeld(this.cancelButton) && bb - this.cancelDownAtMs >= 700 ? (this.cancelDownAtMs = null, {
          kind: "bind",
          button: this.cancelButton
        }) : yb.wasReleased(this.cancelButton) ? (this.cancelDownAtMs = null, {
          kind: "cancel"
        }) : null
      }
      getBindHoldProgress(yb) {
        return null === this.cancelDownAtMs ? 0 : Math.min(1, (yb - this.cancelDownAtMs) / 700)
      }
      updateIgnored(yb, bb) {
        if (null === this.startMs) {
          this.startMs = bb;
          for (const bb of Xy) yb.isDown(bb) && this.ignoredUntilMs.set(bb, 1 / 0);
          this.openButton && !this.ignoredUntilMs.has(this.openButton) && this.ignoredUntilMs.set(this.openButton, bb + 250)
        }
        for (const [Wy, Uy] of this.ignoredUntilMs) {
          const hy = yb.isDown(Wy);
          Uy === 1 / 0 ? hy || Wy !== this.openButton ? hy || this.ignoredUntilMs.delete(Wy) : this.ignoredUntilMs.set(Wy, bb + 250) : bb >= Uy ? this.ignoredUntilMs.delete(Wy) : hy && this.ignoredUntilMs.set(Wy, 1 / 0)
        }
      }
    }
    const rb = 6e3;
    class Hy {
      constructor() {
        this.downAtMs = null, this.pressesAtMs = []
      }
      update(yb, bb) {
        let {
          pressed: Wy,
          kW: Uy
        } = yb;
        if (Wy) {
          const yb = this.pressesAtMs.at(-1);
          if (this.pressesAtMs = void 0 !== yb && bb - yb < 1500 ? [...this.pressesAtMs, bb] : [bb], this.pressesAtMs.length >= 3) return 1
        }
        return Uy ? (this.downAtMs ??= bb, Math.min(1, (bb - this.downAtMs) / 1500)) : (this.downAtMs = null, 0)
      }
    }
  },
  4229: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => fy,
      h: () => Zy
    });
    var Uy = Wy(55);
    const hy = new WeakMap,
      fy = yb => {
        var bb;
        const Wy = yb.closest("[data-pad-slider]");
        return Wy && null !== (bb = hy.get(Wy)) && void 0 !== bb ? bb : null
      },
      Zy = (yb, bb) => {
        const Wy = (0, Uy.useRef)(bb);
        Wy.current = bb, (0, Uy.useEffect)((() => {
          if (yb.current) return ((yb, bb) => (hy.set(yb, bb), () => {
            hy.get(yb) === bb && hy.delete(yb)
          }))(yb.current, {
            adjust: yb => {
              Wy.current.adjust(yb)
            },
            setFraction: yb => {
              Wy.current.setFraction(yb)
            },
            endDrag: () => {
              Wy.current.endDrag()
            }
          })
        }), [yb])
      }
  },
  7837: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => fy,
      f: () => hy
    });
    var Uy = Wy(23);
    const hy = "localBlockBroken";

    function fy() {
      return {
        onPlayerChangeBlock(yb, bb, Wy, fy, Zy, cb) {
          "Air" === cb && Uy.g.EZ(hy)
        }
      }
    }
  },
  7398: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/A.926fb88933484dfbde14.svg"
  },
  7402: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/B.9f5ec099f78f84e44427.svg"
  },
  7404: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  7407: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  7409: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/LB.3a20b15927b55d5d8b60.svg"
  },
  7414: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  7420: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/LT.9fdc5e69011b9d41f50a.svg"
  },
  7424: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  7427: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  7436: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Menu.c903a662eb685211e52e.svg"
  },
  7445: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/RB.bba470ddb76ceec5d168.svg"
  },
  7452: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  7456: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/RT.e5a9fbcc3c79550111ca.svg"
  },
  7464: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  7469: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  7473: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  7476: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/View.0c9378b5d720a636d50d.svg"
  },
  7483: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/X.c9377519af94e6dce1d7.svg"
  },
  7486: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Y.62d8c17731dd2e172426.svg"
  },
  7489: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/A.958a6de9474f8d0c9caf.svg"
  },
  7498: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/B.d05958bfa88a1162b47a.svg"
  },
  7502: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Down.db68fb3980768eb54671.svg"
  },
  7505: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  7514: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/LB.37a3c5128c958ec2a0c2.svg"
  },
  7516: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/LS.15b0cc5bf3f2fe7bbd8b.svg"
  },
  7522: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/LT.5412ae5222c69f8c833f.svg"
  },
  7526: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Left.4457b2895ce94a5df32e.svg"
  },
  7532: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  7540: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Menu.1e8427f8133c9d456c53.svg"
  },
  7545: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/RB.c96c4aa2590209e930c7.svg"
  },
  7552: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/RS.8d70d147cf1ab136e845.svg"
  },
  7556: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/RT.1e4691bb5a7c049693df.svg"
  },
  7559: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Right.a1e101413040c540b879.svg"
  },
  7565: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  7574: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Up.7544a65ad4f611a55775.svg"
  },
  7580: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/View.003cae39de89cae0b9d8.svg"
  },
  7586: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/X.d88b6e62dd8fb4bda32a.svg"
  },
  7588: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Y.428d3e70775877892f82.svg"
  },
  7595: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  7599: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  7603: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  7609: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Home.ea8b009cfa9562aa644e.svg"
  },
  7613: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/LB.f283d355d22fc107d6d6.svg"
  },
  7615: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  7619: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/LT.13e66c122e7ee04bb876.svg"
  },
  7628: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  7637: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  7642: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Menu.90fc4e918900eb5062a0.svg"
  },
  7651: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/RB.918a7f16dc054d96b6f3.svg"
  },
  7657: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  7662: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/RT.a0523211130959598bed.svg"
  },
  7664: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  7669: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  7673: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  7680: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/View.0bc952e292c28c3baac2.svg"
  },
  7688: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  7693: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  },
  7695: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  7703: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  7708: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  7717: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Home.8898f76b20962fe52ab7.svg"
  },
  7725: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/LB.689ba3703ae248f2e4cc.svg"
  },
  7727: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  7732: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/LT.9c2d10d335ab5c590525.svg"
  },
  7734: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  7742: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  7746: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Menu.9e485791ea97009871ca.svg"
  },
  7748: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/RB.7ee5ce48dd551f993f80.svg"
  },
  7753: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  7758: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/RT.903ecadc55a9e9e00f07.svg"
  },
  7760: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  7764: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  7773: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  7775: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/View.3c5eeb34f0413bde4a65.svg"
  },
  7777: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  7786: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);