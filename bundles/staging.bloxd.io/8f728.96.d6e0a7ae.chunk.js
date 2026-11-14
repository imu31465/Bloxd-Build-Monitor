export const id = 96;
export const ids = [96];
export const modules = {
  7776: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => Uc,
      g: () => gB
    });
    var Vc = nc(1051),
      Ic = nc(73),
      rB = nc(1613),
      uc = nc(1630),
      sc = nc(912),
      Mc = nc.n(sc),
      Pc = nc(1255),
      qB = nc(27),
      Oc = nc(107),
      Tc = nc(125),
      fc = nc(4035),
      mB = nc(1946),
      ec = nc(259),
      tB = nc(1632),
      Sc = nc(1640),
      yB = nc(7785),
      zB = nc(7787),
      pc = nc(244),
      hc = nc(957);
    const aB = {
      floating: "settingsMenu:joystickFloating",
      fixed_shown: "settingsMenu:joystickFixed",
      fixed_hidden: "settingsMenu:joystickHidden"
    };
    var lc = nc(7795);
    const Yc = [function() {
      const {
        t: cB
      } = (0, Vc.x)(), {
        joystickMode: Bc,
        touchSpeedCurve: nc,
        autorun: Ic
      } = (0, qB.j)(["clientEscMenuOptions"]).clientEscMenuOptions;
      return (0, hc.jsxs)(hc.Fragment, {
        children: [(0, hc.jsx)(fc.f, {
          label: cB("settingsMenu:joystick"),
          options: pc.wb.map((Bc => ({
            value: Bc,
            label: cB(aB[Bc])
          }))),
          value: Bc,
          onChange: cB => {
            qB.d.setClientEscMenuOptions({
              joystickMode: cB
            })
          },
          circleInfoText: cB("settingsMenu:joystickInfo")
        }), (0, hc.jsx)(fc.c, {
          label: cB("settingsMenu:preciseWalking"),
          checked: nc,
          onClick: cB => {
            qB.d.setClientEscMenuOptions({
              touchSpeedCurve: cB
            })
          },
          circleInfoText: cB("settingsMenu:preciseWalkingInfo")
        }), (0, hc.jsx)(fc.c, {
          label: cB("settingsMenu:autoRun"),
          checked: Ic,
          onClick: cB => {
            qB.d.setClientEscMenuOptions({
              autorun: cB
            })
          },
          circleInfoText: cB("settingsMenu:autoRunInfo")
        })]
      })
    }, function() {
      const {
        t: cB
      } = (0, Vc.x)(), {
        clientEscMenuOptions: Bc
      } = (0, qB.j)(["clientEscMenuOptions"]);
      return (0, zB.l)() ? (0, hc.jsx)(fc.c, {
        label: cB("touchSettings:actionButtons"),
        checked: Bc.touchActionButtons,
        onClick: cB => {
          qB.d.setClientEscMenuOptions({
            touchActionButtons: cB
          })
        },
        circleInfoText: cB("touchSettings:actionButtonsInfo")
      }) : null
    }, function() {
      const {
        t: cB
      } = (0, Vc.x)(), {
        clientEscMenuOptions: Bc
      } = (0, qB.j)(["clientEscMenuOptions"]);
      return (0, lc.c)() ? (0, hc.jsx)(fc.c, {
        label: cB("settingsMenu:vibration"),
        checked: Bc.vibration,
        onClick: cB => {
          qB.d.setClientEscMenuOptions({
            vibration: cB
          })
        },
        circleInfoText: cB("settingsMenu:vibrationInfo")
      }) : null
    }];

    function Lc() {
      return (0, hc.jsx)(hc.Fragment, {
        children: Yc.map(((cB, Bc) => (0, hc.jsx)(cB, {}, Bc)))
      })
    }

    function gB() {
      const {
        t: cB
      } = (0, Vc.x)(), {
        isTouchScreen: Bc,
        clientEscMenuOptions: nc,
        gameState: uc
      } = (0, qB.j)(["isTouchScreen", "clientEscMenuOptions", "gameState"]), sc = (0, mB.j)("ezBridging"), Mc = (0, mB.j)("ezTowering"), tB = "inGame" !== uc || !0 === sc, Sc = (0, ec.i)() && ("inGame" !== uc || !0 === Mc), [, zB] = (0, Ic.useReducer)((cB => cB + 1), 0), pc = (0, yB.g)();
      return (0, hc.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [pc && (0, hc.jsxs)("div", {
          className: "SettingBox ControlsControllerNote",
          children: [(0, hc.jsx)("div", {
            children: cB("controller:settingsControlsNote")
          }), (0, hc.jsx)(Pc.Q, {
            onClick: () => {
              qB.d.set({
                openSettingsCategory: "controller"
              })
            },
            children: cB("controller:settingsOpenController")
          })]
        }), (0, Oc.isTouchscreen)() && !(0, Oc.isMobile)() ? (0, hc.jsx)(hc.Fragment, {
          children: (0, hc.jsx)(fc.c, {
            label: cB("settingsMenu:useTouchControls"),
            checked: Bc,
            onClick: cB => {
              qB.d.set({
                isTouchScreen: cB
              })
            }
          })
        }) : null, Bc && (0, hc.jsx)(Lc, {}), tB && (0, hc.jsx)(fc.c, {
          label: cB("settingsMenu:ezBridging"),
          checked: nc.ezBridging,
          onClick: cB => {
            qB.d.setClientEscMenuOptions({
              ezBridging: cB
            })
          },
          circleInfoText: cB("settingsMenu:ezBridgingInfo")
        }), Sc && (0, hc.jsx)(fc.c, {
          label: cB("settingsMenu:ezTowering"),
          checked: nc.ezTowering,
          onClick: cB => {
            qB.d.setClientEscMenuOptions({
              ezTowering: cB
            })
          },
          circleInfoText: cB("settingsMenu:ezToweringInfo")
        }), (0, hc.jsx)(fc.c, {
          label: cB("settingsMenu:crouchToggle"),
          checked: nc.crouchIsToggle,
          onClick: cB => {
            qB.d.setClientEscMenuOptions({
              crouchIsToggle: cB
            })
          },
          circleInfoText: cB("settingsMenu:crouchToggleInfo")
        }), (0, hc.jsx)(fc.c, {
          label: cB("settingsMenu:hideUiToggle"),
          checked: nc.hideUiIsToggle,
          onClick: cB => {
            qB.d.setClientEscMenuOptions({
              hideUiIsToggle: cB
            })
          },
          circleInfoText: cB("settingsMenu:hideUiToggleInfo")
        }), "mouseOnly" !== (0, Tc.b)() && (0, hc.jsx)(fc.g, {
          name: cB("settingsMenu:touchscreenSensitivity"),
          min: 1,
          max: 900,
          step: 1,
          initValue: nc.touchscreenSensitivity,
          onChange: cB => {
            qB.d.setClientEscMenuOptions({
              touchscreenSensitivity: cB
            })
          }
        }), !(0, Oc.isMobile)() && (0, hc.jsx)(fc.g, {
          name: cB("settingsMenu:mouseSensitivity"),
          min: 1,
          max: 200,
          step: 1,
          initValue: nc.mouseSensitivity,
          onChange: cB => {
            qB.d.setClientEscMenuOptions({
              mouseSensitivity: cB
            })
          }
        }), !(0, Oc.isMobile)() && (0, hc.jsxs)("div", {
          className: "ControlsContainer",
          children: [(0, hc.jsx)("div", {
            className: "SliderText",
            children: cB("settingsMenu:keyBindings")
          }), rB.c.map((Bc => (0, hc.jsx)(Uc, {
            title: cB(Bc.name.translationKey, Bc.name.params),
            defaultOpen: rB.f.has(Bc.id),
            children: Bc.actions.map((cB => (0, hc.jsx)(bB, {
              noaAction: cB,
              forceUpdate: zB,
              clashesWith: Bc.clashesWith,
              showPadGlyph: pc
            }, cB)))
          }, Bc.name.translationKey))), (0, hc.jsx)(Pc.L, {
            className: "ResetBindingsButton",
            onClick: () => {
              (0, rB.C)(), zB()
            },
            children: cB("controls:resetBindings")
          })]
        })]
      })
    }

    function Uc(cB) {
      let {
        title: Bc,
        defaultOpen: nc,
        children: Vc
      } = cB;
      const [rB, uc] = (0, Ic.useState)(nc);
      return (0, hc.jsxs)("div", {
        className: Mc()("ControlsSection", {
          Collapsed: !rB
        }),
        children: [(0, hc.jsxs)("div", {
          className: "ControlsSectionHeader",
          "data-pad-focusable": !0,
          onClick: () => {
            uc(!rB)
          },
          children: [(0, hc.jsx)("div", {
            className: "ControlsSectionTitle",
            children: Bc
          }), (0, hc.jsx)("div", {
            className: "ControlsSectionChevron",
            children: "\u25be"
          })]
        }), rB && (0, hc.jsx)("div", {
          className: "ControlsSectionRows",
          children: Vc
        })]
      })
    }

    function bB(cB) {
      let {
        noaAction: Bc,
        forceUpdate: nc,
        clashesWith: sc,
        showPadGlyph: qB
      } = cB;
      const {
        t: Oc
      } = (0, Vc.x)(), Tc = (0, Sc.c)(Bc), [fc, mB] = (0, Ic.useState)(!1), [ec, yB] = (0, Ic.useState)("controls:clickToEnterNewBinding"), [zB, pc] = (0, Ic.useState)(null), [aB, lc] = (0, Ic.useState)(null), Yc = (0, Ic.useRef)(null);
      (0, Ic.useEffect)((() => {
        fc && Yc.current && Yc.current.focus()
      }), [fc]);
      const Lc = rB.v[Bc].filter((cB => uc.j[cB]));
      let gB = null;
      const Uc = [],
        bB = sc.flatMap((cB => {
          var Bc, nc;
          return null !== (Bc = null === (nc = rB.c.find((Bc => Bc.id === cB))) || void 0 === nc ? void 0 : nc.actions) && void 0 !== Bc ? Bc : []
        }));
      for (const Vc of bB) {
        if (Vc === Bc) continue;
        const cB = rB.v[Vc];
        for (const Bc of cB) Lc.includes(Bc) && Uc.push(Oc(rB.x[Vc].translationKey, rB.x[Vc].params))
      }
      Uc.length > 0 && (gB = Oc("controls:sharedBindingsWarning") + " ", gB += Uc.join(", "));
      const Zc = () => {
          mB(!1), pc(null), yB("controls:clickToEnterNewBinding"), lc(null)
        },
        Qc = () => "BindingInput_" + Bc;
      return (0, hc.jsxs)("div", {
        className: Mc()("ControlRow", {
          WarningBorder: null !== gB
        }),
        children: [(0, hc.jsxs)("div", {
          className: "ControlRowInner",
          children: [(0, hc.jsxs)("div", {
            className: "ControlName",
            children: [Oc(rB.x[Bc].translationKey, rB.x[Bc].params), qB && Tc && (0, hc.jsx)(tB.d, {
              glyph: Tc,
              className: "ControlPadGlyph"
            })]
          }), (0, hc.jsxs)("div", {
            className: "ControlBindingsContainer",
            children: [(0, hc.jsxs)("div", {
              className: "ControlBindingsList",
              children: [Lc.map((cB => (0, hc.jsxs)("div", {
                className: "ControlBinding",
                children: [(0, hc.jsx)("div", {
                  children: (0, rB.n)(cB)
                }), (0, hc.jsx)("div", {
                  className: "ControlBindingRemoveIcon",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    const Vc = (0, rB.y)(Bc, cB);
                    Vc.isError() ? lc(Vc.asError().message) : lc(null), nc()
                  },
                  children: "\xd7"
                })]
              }, cB))), !fc && (0, hc.jsx)("div", {
                className: "ControlBinding ControlBindingAdd",
                onClick: () => {
                  mB(!0), lc(null)
                },
                children: (0, hc.jsx)("div", {
                  className: "ControlBindingAddIcon",
                  children: "+"
                })
              })]
            }), fc && (0, hc.jsxs)("div", {
              className: "ControlBindingAddInput",
              children: [(0, hc.jsxs)("div", {
                className: "InputContainer",
                children: [(0, hc.jsx)("div", {
                  className: "InputOverlay",
                  children: zB ? (0, rB.n)(zB) : (0, hc.jsx)("div", {
                    className: "InputOverlayPlaceholder",
                    children: Oc(ec)
                  })
                }), (0, hc.jsx)("input", {
                  ref: Yc,
                  id: Qc(),
                  "data-pad-no-osk": !0,
                  defaultValue: "",
                  onKeyDown: cB => {
                    if ("Escape" === cB.code) return Zc(), cB.preventDefault(), void cB.stopPropagation();
                    const Bc = cB.code;
                    uc.e.includes(Bc) ? (lc(null), pc(Bc)) : (lc("controls:keyIsReserved"), pc(null)), cB.preventDefault(), cB.stopPropagation()
                  },
                  onMouseDown: cB => {
                    const Bc = "Mouse" + (cB.button + 1);
                    document.activeElement && document.activeElement.id === Qc() ? uc.e.includes(Bc) ? (lc(null), pc(Bc)) : (lc("controls:keyIsReserved"), pc(null)) : yB("controls:enterNewBinding"), cB.stopPropagation()
                  },
                  onBlur: () => {
                    yB("controls:clickToEnterNewBinding")
                  }
                })]
              }), (0, hc.jsx)(Pc.d, {
                onPointerDown: cB => {
                  cB.preventDefault()
                },
                onClick: () => {
                  (0, rB.b)(Bc, zB), nc(), Zc()
                },
                className: "ControlBindingAddButton",
                disabled: null === zB,
                children: Oc("general:add")
              }), (0, hc.jsx)("div", {
                className: "ControlBindingAddCancel",
                onClick: () => {
                  Zc()
                },
                children: "\xd7"
              })]
            }), aB && (0, hc.jsx)("div", {
              className: "ControlBindingError",
              children: Oc(aB)
            })]
          })]
        }), gB && (0, hc.jsx)("div", {
          className: "ControlRowWarning",
          children: gB
        })]
      })
    }
  },
  4035: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => mB,
      f: () => yB,
      g: () => ec,
      i: () => Sc
    });
    var Vc = nc(73),
      Ic = nc(4041),
      rB = nc(3551),
      uc = nc(1205),
      sc = nc(4066),
      Mc = nc(912),
      Pc = nc.n(Mc),
      qB = nc(1194),
      Oc = nc(1495),
      Tc = nc(4073),
      fc = nc(957);

    function mB(cB) {
      let {
        label: Bc,
        onClick: nc,
        checked: Vc,
        circleInfoText: Ic,
        className: sc,
        disabled: Mc
      } = cB;
      return (0, fc.jsx)("div", {
        "aria-disabled": Mc || void 0,
        "data-pad-focusable": !0,
        className: Pc()("SettingBox CheckboxContainer", {
          [sc]: sc,
          SettingBoxDisabled: Mc
        }),
        onClick: () => {
          Mc || nc(!Vc)
        },
        children: (0, fc.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, fc.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, fc.jsx)(rB.c, {
              className: "SettingsCheckbox",
              checked: Vc,
              disabled: Mc,
              onChange: () => {}
            })
          }), (0, fc.jsxs)("div", {
            className: "CheckboxText",
            children: [Bc, Ic && (0, fc.jsx)("span", {
              onClick: cB => cB.stopPropagation(),
              children: (0, fc.jsx)(uc.c, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: Ic
              })
            })]
          })]
        })
      })
    }

    function ec(cB) {
      let {
        name: Bc,
        onChange: nc,
        min: Ic,
        max: rB,
        step: sc,
        initValue: Mc,
        circleInfoText: qB,
        format: Oc,
        className: Tc,
        padStep: mB,
        disabled: ec = !1,
        selectableMax: Sc,
        cappedNote: yB
      } = cB;
      const [zB, pc] = (0, Vc.useState)(Mc);
      (0, Vc.useEffect)((() => {
        pc(Mc)
      }), [Mc]);
      const hc = void 0 !== Sc && Sc < rB,
        aB = hc ? {
          "--slider-selectable": (Sc - Ic) / (rB - Ic)
        } : void 0;
      return (0, fc.jsxs)("div", {
        className: Pc()("SettingBox SettingsSliderDiv", {
          [Tc]: Tc,
          SettingBoxDisabled: ec,
          SliderCapped: hc
        }),
        style: aB,
        children: [(0, fc.jsxs)("div", {
          className: "SliderText",
          children: [`${Bc}: ${Oc?Oc(zB):zB}`, qB && (0, fc.jsx)(uc.c, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: qB
          })]
        }), (0, fc.jsx)("div", {
          className: "SliderDiv",
          children: (0, fc.jsx)(tB, {
            value: zB,
            min: Ic,
            max: rB,
            step: sc,
            onChange: cB => {
              if (hc && cB >= Sc && zB === Sc) return;
              const Bc = hc ? Math.min(cB, Sc) : cB;
              pc(Bc), nc(Bc)
            },
            format: Oc,
            padStep: mB,
            disabled: ec
          })
        }), hc && yB && (0, fc.jsx)("div", {
          className: "SliderNote",
          children: yB
        })]
      })
    }

    function tB(cB) {
      var Bc;
      let {
        value: nc,
        min: rB,
        max: uc,
        step: sc,
        onChange: Mc,
        orientation: Pc,
        reverse: qB,
        setIsChanging: Oc,
        tooltip: mB,
        labels: ec,
        handleLabel: tB,
        format: Sc,
        onChangeStart: yB,
        onChangeComplete: zB,
        padStep: pc,
        disabled: hc = !1
      } = cB;
      const aB = (0, Vc.useRef)(null),
        lc = (0, Vc.useRef)(null);
      (0, Vc.useLayoutEffect)((() => {
        var cB, Bc, nc;
        const Vc = null !== (cB = null === (Bc = aB.current) || void 0 === Bc ? void 0 : Bc.querySelector(".rangeslider")) && void 0 !== cB ? cB : null;
        null === Vc || void 0 === Vc || Vc.setAttribute("data-pad-slider", ""), null === Vc || void 0 === Vc || Vc.setAttribute("data-pad-focusable", ""), null === Vc || void 0 === Vc || null === (nc = Vc.querySelector(".rangeslider__handle")) || void 0 === nc || nc.setAttribute("data-pad-slider-handle", ""), lc.current = Vc
      }), []), (0, Vc.useLayoutEffect)((() => {
        var cB, Bc;
        hc ? null === (cB = lc.current) || void 0 === cB || cB.setAttribute("aria-disabled", "true") : null === (Bc = lc.current) || void 0 === Bc || Bc.removeAttribute("aria-disabled")
      }), [hc]);
      const Yc = (null !== (Bc = String(sc).split(".")[1]) && void 0 !== Bc ? Bc : "").length,
        Lc = cB => {
          const Bc = Number((Math.round((cB - rB) / sc) * sc + rB).toFixed(Yc));
          return Math.min(uc, Math.max(rB, Bc))
        },
        gB = (0, Vc.useRef)(!1);
      return (0, Tc.g)(lc, {
        adjust: cB => {
          if (hc) return;
          const Bc = null !== pc && void 0 !== pc ? pc : Math.max(sc, Math.round((uc - rB) / 20 / sc) * sc),
            Vc = Lc(nc + cB * Bc * (qB ? -1 : 1));
          Vc !== nc && (null === yB || void 0 === yB || yB(), Mc(Vc), null === zB || void 0 === zB || zB())
        },
        setFraction: cB => {
          if (hc) return;
          const Bc = Lc(rB + (qB ? 1 - cB : cB) * (uc - rB));
          Bc !== nc && (gB.current || (gB.current = !0, null === yB || void 0 === yB || yB()), Mc(Bc))
        },
        endDrag: () => {
          gB.current && (gB.current = !1, null === zB || void 0 === zB || zB())
        }
      }), (0, fc.jsx)("div", {
        ref: aB,
        style: {
          display: "contents"
        },
        children: (0, fc.jsx)(Ic.e, {
          value: nc,
          min: rB,
          max: uc,
          step: sc,
          onChange: Mc,
          orientation: Pc,
          reverse: qB,
          tooltip: mB,
          labels: ec,
          handleLabel: tB,
          format: Sc,
          onChangeStart: () => {
            null === yB || void 0 === yB || yB(), null === Oc || void 0 === Oc || Oc(!0)
          },
          onChangeComplete: () => {
            null === Oc || void 0 === Oc || Oc(!1), null === zB || void 0 === zB || zB()
          }
        })
      })
    }
    async function Sc() {
      const cB = qB.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: ""
      });
      !0 === await cB.getResult() && (0, Oc.reloadBloxd)()
    }

    function yB(cB) {
      let {
        label: Bc,
        options: nc,
        value: Vc,
        onChange: Ic,
        circleInfoText: rB
      } = cB;
      return (0, fc.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, fc.jsxs)("div", {
          className: "SliderText",
          children: [Bc, rB && (0, fc.jsx)(uc.c, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: rB
          })]
        }), (0, fc.jsx)(sc.e, {
          ariaLabel: Bc,
          options: nc,
          value: Vc,
          onChange: Ic
        })]
      })
    }
  },
  4066: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => uc
    });
    var Vc = nc(912),
      Ic = nc.n(Vc),
      rB = nc(957);

    function uc(cB) {
      let {
        options: Bc,
        value: nc,
        onChange: Vc,
        ariaLabel: uc
      } = cB;
      return (0, rB.jsx)("div", {
        className: "SegmentedToggle",
        role: "group",
        "aria-label": uc,
        children: Bc.map((cB => {
          const Bc = cB.value === nc;
          return (0, rB.jsx)("button", {
            type: "button",
            "aria-pressed": Bc,
            className: Ic()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: Bc
            }),
            onClick: () => {
              Bc || Vc(cB.value)
            },
            children: cB.label
          }, cB.value)
        }))
      })
    }
  },
  7787: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Mc,
      f: () => sc,
      h: () => uc,
      l: () => rB
    });
    var Vc = nc(27),
      Ic = nc(263);

    function rB() {
      return !Ic.l
    }

    function uc(cB) {
      return rB() && cB
    }

    function sc(cB, Bc) {
      return cB && !uc(Bc)
    }

    function Mc() {
      return sc(Vc.d.get("isTouchScreen"), Vc.d.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  7749: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => sc
    });
    var Vc = nc(27),
      Ic = nc(2633),
      rB = nc(1194),
      uc = nc(1226);
    const sc = async () => {
      if ((0, uc.f)()) {
        if (!0 !== await rB.NotificationProvider.showPromptPopup({
            title: "controller:menusLeaveGameTitle",
            confirmText: "controller:menusLeaveGameLeave",
            cancelText: "controller:menusLeaveGameStay",
            destructive: !0
          }).getResult() || "inGame" !== Vc.d.get("gameState")) return
      }(0, Ic.e)()
    }
  },
  7756: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => Mc,
      e: () => rB,
      g: () => uc,
      j: () => Ic,
      k: () => sc
    });
    var Vc = nc(1598);
    const Ic = "controllerPadShopOpen",
      rB = cB => Vc.f.includes(cB),
      uc = cB => Object.values(cB).some((cB => !1 !== cB.canBuy && !cB.isRewardedAd)),
      sc = (cB, Bc, nc) => {
        var Vc, Ic, uc, sc;
        const Mc = cB.filter((cB => !rB(cB))),
          Pc = null !== Bc && cB.includes(Bc) ? Bc : null;
        return null !== Pc && !rB(Pc) && nc(Pc) ? Pc : null !== (Vc = null !== (Ic = null !== (uc = null !== (sc = Mc.find(nc)) && void 0 !== sc ? sc : Mc[0]) && void 0 !== uc ? uc : Pc) && void 0 !== Ic ? Ic : cB[0]) && void 0 !== Vc ? Vc : null
      },
      Mc = cB => cB.userInput || cB.isRewardedAd || "boolean" === typeof cB.isSelected ? null : JSON.stringify([cB.image, cB.cost, cB.currency, cB.amount, cB.customTitle, cB.buyButtonText, cB.description, cB.canBuy])
  },
  7785: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => Pc,
      g: () => qB
    });
    var Vc = nc(73),
      Ic = nc(1252),
      rB = nc(1644),
      uc = nc(1237),
      sc = nc(1243),
      Mc = nc(957);
    const Pc = () => {
        const cB = (0, uc.v)();
        if ((0, Vc.useEffect)((() => {
            (0, uc.l)()
          }), []), !cB) return null;
        const {
          ControllerCategory: Bc
        } = cB;
        return (0, Mc.jsx)(sc.c, {
          children: (0, Mc.jsx)(Bc, {})
        })
      },
      qB = () => {
        var cB;
        const Bc = (0, uc.v)(),
          [, nc] = (0, Vc.useReducer)((cB => cB + 1), 0);
        return (0, Ic.f)(rB.b, nc), null !== (cB = null === Bc || void 0 === Bc ? void 0 : Bc.hasActivePad()) && void 0 !== cB && cB
      }
  },
  4073: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => rB,
      g: () => uc
    });
    var Vc = nc(73);
    const Ic = new WeakMap,
      rB = cB => {
        var Bc;
        const nc = cB.closest("[data-pad-slider]");
        return nc && null !== (Bc = Ic.get(nc)) && void 0 !== Bc ? Bc : null
      },
      uc = (cB, Bc) => {
        const nc = (0, Vc.useRef)(Bc);
        nc.current = Bc, (0, Vc.useEffect)((() => {
          if (cB.current) return ((cB, Bc) => (Ic.set(cB, Bc), () => {
            Ic.get(cB) === Bc && Ic.delete(cB)
          }))(cB.current, {
            adjust: cB => {
              nc.current.adjust(cB)
            },
            setFraction: cB => {
              nc.current.setFraction(cB)
            },
            endDrag: () => {
              nc.current.endDrag()
            }
          })
        }), [cB])
      }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);