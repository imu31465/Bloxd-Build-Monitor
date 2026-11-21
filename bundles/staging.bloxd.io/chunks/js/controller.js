export const id = 28;
export const ids = [28];
export const modules = {
  4877: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Ld,
      g: () => Gd,
      h: () => Od,
      l: () => Id
    });
    var pd = kd(56),
      Nd = kd(4883),
      Wd = kd(4203),
      Pd = kd(1384),
      Zd = kd(4904),
      gd = kd(1044),
      Cd = kd.n(gd),
      Kd = kd(1371),
      od = kd(1753),
      ld = kd(4907),
      Qd = kd(1103);

    function Ld(dd) {
      let {
        label: Jd,
        onClick: kd,
        checked: pd,
        circleInfoText: Nd,
        className: Zd,
        disabled: gd,
        note: Kd
      } = dd;
      return (0, Qd.jsxs)("div", {
        "aria-disabled": gd || void 0,
        "data-pad-focusable": !0,
        className: Cd()("SettingBox CheckboxContainer", {
          [Zd]: Zd,
          SettingBoxDisabled: gd
        }),
        onClick: () => {
          gd || kd(!pd)
        },
        children: [(0, Qd.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, Qd.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, Qd.jsx)(Wd.e, {
              className: "SettingsCheckbox",
              checked: pd,
              disabled: gd,
              onChange: () => {}
            })
          }), (0, Qd.jsxs)("div", {
            className: "CheckboxText",
            children: [Jd, Nd && (0, Qd.jsx)("span", {
              onClick: dd => dd.stopPropagation(),
              children: (0, Qd.jsx)(Pd.e, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: Nd
              })
            })]
          })]
        }), Kd && (0, Qd.jsx)("div", {
          className: "SettingNote",
          children: Kd
        })]
      })
    }

    function Od(dd) {
      let {
        name: Jd,
        onChange: kd,
        min: Nd,
        max: Wd,
        step: Zd,
        initValue: gd,
        circleInfoText: Kd,
        format: od,
        className: ld,
        padStep: Ld,
        disabled: Od = !1,
        selectableMax: ed,
        cappedNote: Id,
        onChangeComplete: Gd
      } = dd;
      const [vd, xd] = (0, pd.useState)(gd), qd = (0, pd.useRef)(gd);
      (0, pd.useEffect)((() => {
        qd.current = gd, xd(gd)
      }), [gd]);
      const Bd = void 0 !== ed && ed < Wd,
        sd = Bd ? {
          "--slider-selectable": (ed - Nd) / (Wd - Nd)
        } : void 0;
      return (0, Qd.jsxs)("div", {
        className: Cd()("SettingBox SettingsSliderDiv", {
          [ld]: ld,
          SettingBoxDisabled: Od,
          SliderCapped: Bd
        }),
        style: sd,
        children: [(0, Qd.jsxs)("div", {
          className: "SliderText",
          children: [`${Jd}: ${od?od(vd):vd}`, Kd && (0, Qd.jsx)(Pd.e, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: Kd
          })]
        }), (0, Qd.jsx)("div", {
          className: "SliderDiv",
          children: (0, Qd.jsx)(Rd, {
            value: vd,
            min: Nd,
            max: Wd,
            step: Zd,
            onChange: dd => {
              if (Bd && dd >= ed && vd === ed) return;
              const Jd = Bd ? Math.min(dd, ed) : dd;
              qd.current = Jd, xd(Jd), kd(Jd)
            },
            onChangeComplete: Gd && (() => {
              Gd(qd.current)
            }),
            format: od,
            padStep: Ld,
            disabled: Od
          })
        }), Bd && Id && (0, Qd.jsx)("div", {
          className: "SettingNote",
          children: Id
        })]
      })
    }
    const ed = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function Rd(dd) {
      var Jd;
      let {
        value: kd,
        min: Wd,
        max: Pd,
        step: Zd,
        onChange: gd,
        orientation: Cd,
        reverse: Kd,
        setIsChanging: od,
        tooltip: Ld,
        labels: Od,
        handleLabel: Rd,
        format: Id,
        onChangeStart: Gd,
        onChangeComplete: vd,
        padStep: xd,
        disabled: qd = !1
      } = dd;
      const Bd = (0, pd.useRef)(null),
        sd = (0, pd.useRef)(null);
      (0, pd.useLayoutEffect)((() => {
        var dd, Jd, kd;
        const pd = null !== (dd = null === (Jd = Bd.current) || void 0 === Jd ? void 0 : Jd.querySelector(".rangeslider")) && void 0 !== dd ? dd : null;
        null === pd || void 0 === pd || pd.setAttribute("data-pad-slider", ""), null === pd || void 0 === pd || pd.setAttribute("data-pad-focusable", ""), null === pd || void 0 === pd || null === (kd = pd.querySelector(".rangeslider__handle")) || void 0 === kd || kd.setAttribute("data-pad-slider-handle", ""), sd.current = pd
      }), []), (0, pd.useLayoutEffect)((() => {
        var dd, Jd;
        qd ? null === (dd = sd.current) || void 0 === dd || dd.setAttribute("aria-disabled", "true") : null === (Jd = sd.current) || void 0 === Jd || Jd.removeAttribute("aria-disabled")
      }), [qd]);
      const ad = (null !== (Jd = String(Zd).split(".")[1]) && void 0 !== Jd ? Jd : "").length,
        Md = dd => {
          const Jd = Number((Math.round((dd - Wd) / Zd) * Zd + Wd).toFixed(ad));
          return Math.min(Pd, Math.max(Wd, Jd))
        },
        Fd = (0, pd.useRef)(vd);
      Fd.current = vd, (0, pd.useEffect)((() => {
        const dd = Bd.current;
        if (!dd) return;
        const Jd = dd => {
          var Jd;
          ed.has(dd.key) && (null === (Jd = Fd.current) || void 0 === Jd || Jd.call(Fd))
        };
        return dd.addEventListener("keyup", Jd), () => {
          dd.removeEventListener("keyup", Jd)
        }
      }), []);
      const Yd = (0, pd.useRef)(!1);
      return (0, ld.e)(sd, {
        adjust: dd => {
          if (qd) return;
          const Jd = null !== xd && void 0 !== xd ? xd : Math.max(Zd, Math.round((Pd - Wd) / 20 / Zd) * Zd),
            pd = Md(kd + dd * Jd * (Kd ? -1 : 1));
          pd !== kd && (null === Gd || void 0 === Gd || Gd(), gd(pd), null === vd || void 0 === vd || vd())
        },
        setFraction: dd => {
          if (qd) return;
          const Jd = Md(Wd + (Kd ? 1 - dd : dd) * (Pd - Wd));
          Jd !== kd && (Yd.current || (Yd.current = !0, null === Gd || void 0 === Gd || Gd()), gd(Jd))
        },
        endDrag: () => {
          Yd.current && (Yd.current = !1, null === vd || void 0 === vd || vd())
        }
      }), (0, Qd.jsx)("div", {
        ref: Bd,
        style: {
          display: "contents"
        },
        children: (0, Qd.jsx)(Nd.c, {
          value: kd,
          min: Wd,
          max: Pd,
          step: Zd,
          onChange: gd,
          orientation: Cd,
          reverse: Kd,
          tooltip: Ld,
          labels: Od,
          handleLabel: Rd,
          format: Id,
          onChangeStart: () => {
            null === Gd || void 0 === Gd || Gd(), null === od || void 0 === od || od(!0)
          },
          onChangeComplete: () => {
            null === od || void 0 === od || od(!1), null === vd || void 0 === vd || vd()
          }
        })
      })
    }
    async function Id() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
      const Jd = Kd.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: "",
        unlockPointerKey: dd
      });
      !0 === await Jd.getResult() && (0, od.reloadBloxd)()
    }

    function Gd(dd) {
      let {
        label: Jd,
        options: kd,
        value: pd,
        onChange: Nd,
        circleInfoText: Wd
      } = dd;
      return (0, Qd.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, Qd.jsxs)("div", {
          className: "SliderText",
          children: [Jd, Wd && (0, Qd.jsx)(Pd.e, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: Wd
          })]
        }), (0, Qd.jsx)(Zd.c, {
          ariaLabel: Jd,
          options: kd,
          value: pd,
          onChange: Nd
        })]
      })
    }
  },
  4904: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Pd
    });
    var pd = kd(1044),
      Nd = kd.n(pd),
      Wd = kd(1103);

    function Pd(dd) {
      let {
        options: Jd,
        value: kd,
        onChange: pd,
        ariaLabel: Pd,
        className: Zd,
        reselectable: gd = !1,
        keepsFocus: Cd = !1,
        padTabs: Kd
      } = dd;
      const od = void 0 !== Kd;
      return (0, Wd.jsx)("div", {
        className: Nd()("SegmentedToggle", Zd),
        role: "group",
        "aria-label": Pd,
        "data-pad-tabs": Kd,
        children: Jd.map((dd => {
          const Jd = dd.value === kd;
          return (0, Wd.jsx)("button", {
            type: "button",
            "aria-pressed": Jd,
            "data-pad-tab": od || void 0,
            "data-pad-selected": od && Jd ? "true" : void 0,
            "data-pad-default-focus": od && Jd || void 0,
            "aria-label": dd.ariaLabel,
            title: dd.ariaLabel,
            className: Nd()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: Jd
            }),
            onMouseDown: Cd ? dd => {
              dd.preventDefault()
            } : void 0,
            onClick: () => {
              Jd && !gd || pd(dd.value)
            },
            children: dd.label
          }, dd.value)
        }))
      })
    }
  },
  8039: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Nd,
      e: () => Wd,
      g: () => ld,
      h: () => od,
      i: () => Cd,
      k: () => Zd,
      l: () => pd,
      p: () => Qd,
      q: () => Ld
    });
    const pd = ["menuConfirm", "menuBack", "menuTabPrevious", "menuTabNext", "menuPageUp", "menuPageDown", "menuSecondary", "menuToggleCursor"],
      Nd = [{
        group: "gameplay",
        actions: ["jump", "sneak", "sneakToggle", "sprint", "attack", "use", "hotbarPrevious", "hotbarNext", "inventory", "actionButton", "perspective", "pickBlock", "drop", "emoteWheel", "chat", "pause", "leaderboard"]
      }, {
        group: "menu",
        actions: pd
      }, {
        group: "inventory",
        actions: ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryClose", "inventoryPanelPrevious", "inventoryPanelNext", "inventoryDrop", "inventoryHotbarSwap"]
      }, {
        group: "keyboard",
        actions: ["keyboardType", "keyboardBackspace", "keyboardSpace", "keyboardCaretLeft", "keyboardCaretRight", "keyboardShift", "keyboardSymbols", "keyboardSubmit", "keyboardClose", "keyboardChannel"]
      }],
      Wd = {
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
      Pd = ["pickBlock", "perspective"],
      Zd = dd => Pd.includes(dd) ? Pd : [dd],
      gd = Object.fromEntries(Nd.flatMap((dd => {
        let {
          group: Jd,
          actions: kd
        } = dd;
        return kd.map((dd => [dd, Jd]))
      }))),
      Cd = dd => gd[dd],
      Kd = {
        pause: ["menu"],
        leaderboard: ["menu"],
        inventory: ["menu"],
        menuPageUp: ["inventory"],
        menuPageDown: ["inventory"]
      },
      od = dd => {
        var Jd;
        return [Cd(dd), ...null !== (Jd = Kd[dd]) && void 0 !== Jd ? Jd : []]
      },
      ld = new Set(["menu", "inventory", "keyboard"]),
      Qd = {
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
      Ld = new Set(["forward", "backward", "left", "right"])
  },
  8031: (dd, Jd, kd) => {
    kd.d(Jd, {
      B: () => Gd,
      F: () => Md,
      G: () => Kd,
      J: () => ad,
      N: () => md,
      e: () => Id,
      f: () => xd,
      j: () => ld,
      l: () => Qd,
      n: () => Sd,
      o: () => Yd,
      q: () => Fd,
      u: () => vd,
      v: () => bd,
      y: () => sd
    });
    var pd = kd(8039),
      Nd = kd(8043),
      Wd = kd(8020),
      Pd = kd(8069);
    const Zd = dd => "pickBlock" === dd ? "perspective" : dd,
      gd = (dd, Jd) => {
        var kd;
        const Nd = Zd(Jd);
        return null !== (kd = dd[Nd]) && void 0 !== kd ? kd : pd.e[Nd]
      },
      Cd = new Map([
        ["menuConfirm", "menuBack"],
        ["inventoryPrimary", "inventoryClose"],
        ["keyboardType", "keyboardClose"]
      ].flatMap((dd => {
        let [Jd, kd] = dd;
        return [
          [Jd, kd],
          [kd, Jd]
        ]
      }))),
      Kd = (dd, Jd) => null !== dd && void 0 !== dd ? dd : "nintendo" === Jd,
      od = dd => Kd((0, Nd.k)().swapConfirmBack, (0, Nd.m)()) && Cd.get(dd) || dd,
      ld = dd => gd((0, Nd.k)().bindings, od(dd)),
      Qd = dd => pd.e[od(dd)],
      Ld = Object.keys(pd.e),
      Od = dd => "gameplay" === (0, pd.i)(dd) ? ["gameplay"] : (0, pd.h)(dd),
      ed = (dd, Jd) => {
        const kd = Od(Jd);
        return Od(dd).some((dd => kd.includes(dd)))
      },
      Rd = (dd, Jd, kd) => {
        const Nd = gd(dd, Jd),
          Pd = new Set((0, pd.k)(Jd)),
          Cd = [...Pd];
        for (let pd = Cd.pop(); pd; pd = Cd.pop())
          for (const Jd of Ld) {
            const Wd = gd(dd, Jd);
            Pd.has(Jd) || Wd !== kd && Wd !== Nd || !ed(pd, Jd) || (Pd.add(Jd), Cd.push(Jd))
          }
        const Kd = {
          ...dd
        };
        for (const od of Pd) {
          const Jd = gd(dd, od) === Nd ? kd : Nd,
            Pd = (0, pd.h)(od).some((dd => pd.g.has(dd)));
          if ((0, Wd.G)(Jd) && Pd) return null;
          Kd[Zd(od)] = Jd
        }
        for (const Wd of Object.keys(Kd)) Kd[Wd] === pd.e[Wd] && delete Kd[Wd];
        return Kd
      },
      Id = (dd, Jd) => null !== Rd((0, Nd.k)().bindings, od(dd), Jd),
      Gd = (dd, Jd) => {
        if (ld(dd) === Jd) return !0;
        const kd = Rd((0, Nd.k)().bindings, od(dd), Jd);
        return !!kd && ((0, Nd.q)({
          bindings: kd
        }), !0)
      },
      vd = (dd, Jd) => {
        const kd = (0, pd.k)(Jd);
        return Ld.filter((Jd => Zd(Jd) === Jd && !kd.includes(Jd) && gd(dd, od(Jd)) !== ld(Jd)))
      },
      xd = ["southpaw", "triggersSwapped"],
      qd = {
        southpaw: {
          sprint: "RS",
          sneakToggle: "LS"
        },
        triggersSwapped: {
          attack: "LT",
          use: "RT"
        }
      },
      Bd = dd => Object.keys(qd[dd]),
      sd = (dd, Jd) => "southpaw" === dd ? Jd.swapSticks : Bd(dd).every((kd => gd(Jd.bindings, kd) === qd[dd][kd])),
      ad = (dd, Jd) => {
        const kd = (0, Nd.k)();
        let Wd = kd.bindings;
        for (const Nd of Bd(dd)) {
          const kd = Jd ? qd[dd][Nd] : pd.e[Nd];
          if (Wd = Rd(Wd, Nd, kd), !Wd) return !1
        }
        return (0, Nd.q)({
          swapSticks: "southpaw" === dd ? Jd : kd.swapSticks,
          bindings: Wd
        }), !0
      },
      Md = () => {
        (0, Nd.q)({
          swapSticks: !1,
          bindings: {}
        })
      },
      Fd = () => (0, Nd.k)().swapSticks ? "RightStick" : "LeftStick",
      Yd = () => (0, Nd.k)().swapSticks ? "LeftStick" : "RightStick",
      md = dd => (0, Nd.k)().swapSticks && (0, Wd.G)(dd),
      bd = dd => md(dd) ? Fd() : Yd(),
      Sd = dd => {
        if (pd.q.has(dd)) return Fd();
        const Jd = pd.p[dd];
        return Jd && ("leaderboard" !== Jd || (0, Pd.f)(dd, (0, Pd.d)())) ? ld(Jd) : null
      }
  },
  8010: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      ControllerCategory: () => xZ,
      ControllerGlyph: () => sN,
      ControllerRoot: () => xP,
      PadLobbyShortcuts: () => UP,
      PadSneakChip: () => FP,
      PadTooltip: () => mP,
      attachPressToContinue: () => uP,
      getBoundButton: () => Kd.j,
      getControllerSettings: () => ld.k,
      getGlyphForNoaAction: () => Kd.n,
      getInventoryCursorState: () => BZ,
      getMenuShortcutButton: () => rk,
      getPadGlyphIconName: () => iP,
      getPadGlyphIconUrl: () => aP,
      getPadRepeatTiming: () => Od.g,
      handOverPadFocus: () => iZ,
      hasActivePad: () => qZ,
      isPadSteppingSlots: () => sZ
    });
    const pd = JSON.parse('{"controller":{"inventoryTake":"Take","inventoryTakeHalf":"Take half","inventoryPlace":"Place","inventoryPlaceOne":"Place one","inventoryQuickMove":"Quick move","inventoryToHotbar":"To hotbar","inventoryPutBack":"Put back","inventoryHotbarSwap":"Swap with hotbar","inventorySwapHere":"Swap here","inventoryCancel":"Cancel","inventoryClose":"Close","inventoryDrop":"Drop (hold: stack)","inventorySelect":"Select","inventoryCraft":"Craft (hold to repeat)","inventoryCraftAll":"Craft all","inventoryChooseRecipe":"Choose","inventoryBackToRecipes":"Back to recipes","inventoryType":"Type","inventoryPanels":"Switch panel","inventoryCategory":"Category","inventoryPage":"Page","disconnected":"Controller disconnected","gameplayReload":"Reload","gameplayActionWheelHint":"(hold for more)","gameplaySneaking":"Sneaking","gameplayLoadFailedTitle":"Controller unavailable","gameplayLoadFailedSubtitle":"Reload the page to play with your controller.","gameplayDropStack":"Keep holding to drop the stack","gameplayAttackLatched":"Attacking","gameplayPickBlock":"Pick block","padButtonView":"View","padButtonMenu":"Menu","padButtonHome":"Home","padButtonCreate":"Create","padButtonOptions":"Options","padButtonDpadUp":"D-pad \u2191","padButtonDpadDown":"D-pad \u2193","padButtonDpadLeft":"D-pad \u2190","padButtonDpadRight":"D-pad \u2192","padButtonLeftStick":"L Stick","padButtonRightStick":"R Stick","settingsLook":"Look","settingsLookSensitivityX":"Look sensitivity (horizontal)","settingsLookSensitivityY":"Look sensitivity (vertical)","settingsAimLookSensitivity":"Look sensitivity while aiming (use held)","settingsInvertLookX":"Invert horizontal look","settingsInvertLookY":"Invert vertical look","settingsLookCurve":"Look curve","settingsLookCurveHint":"Steep gives finer aim near the centre, Linear turns at an even rate, and Boost turns faster when you hold the stick all the way.","settingsCurveExponential":"Steep","settingsCurveLinear":"Linear","settingsCurveBoost":"Boost","settingsLookDeadzone":"Look deadzone","settingsGyro":"Gyro aiming","settingsGyroToggle":"Aim by moving the controller","settingsGyroToggleInfo":"Turn and tilt the controller to aim, on top of the right stick.","settingsGyroTogglePhone":"Aim by moving your phone or tablet","settingsGyroToggleInfoPhone":"Turn and tilt your phone or tablet to aim, on top of the right stick.","settingsGyroUnsupported":"Gyro aiming needs Chrome or Edge.","settingsGyroBlocked":"Gyro aiming isn\'t available on this site.","settingsGyroPhoneNeedsController":"Connect a controller to aim by moving your phone or tablet.","settingsGyroSteamHint":"If Steam already turns your gyro into mouse movement, leave this off.","settingsGyroConnect":"Connect motion controller","settingsGyroConnectHint":"Works with DualSense, DualShock 4 and Switch controllers.","settingsGyroConnectNeedsClick":"Click Connect with your mouse: the browser asks before sharing a controller.","settingsGyroOpenFailed":"Another app is using the controller. Close apps such as Steam or DS4Windows, then try again.","settingsGyroConnected":"Aiming with {{name}}.","settingsGyroAllowMotion":"Allow motion sensor","settingsGyroAllowNeedsTap":"Tap Allow motion sensor on your screen to turn it on.","settingsGyroPhoneOn":"Aiming with this device\'s motion sensor.","settingsGyroPhoneWaiting":"Waiting for this device\'s motion sensor\u2026","settingsGyroPhoneNoSensor":"No motion sensor found on this device.","settingsGyroPhoneDenied":"Motion access is blocked. Allow it in your browser settings.","settingsGyroSensitivity":"Gyro sensitivity","settingsGyroActivation":"Gyro turns on","settingsGyroAlways":"Always","settingsGyroWhileAiming":"While aiming","settingsGyroWhileButton":"While holding a button","settingsGyroAimingHint":"Hold {{button}} to aim with motion.","settingsGyroButton":"Gyro button","settingsGyroButtonHint":"While gyro aiming is on, this button only turns the gyro on in game, so pick one you rarely use.","settingsMovement":"Movement","settingsMoveDeadzone":"Move deadzone","settingsAutoSprint":"Sprint at full tilt","settingsAutoSprintInfo":"Push the movement stick all the way to sprint.","settingsSneak":"Sneak","settingsSneakHold":"Hold","settingsSneakToggle":"Toggle","settingsButtons":"Buttons","settingsPromptFamily":"Button prompts","settingsPromptAuto":"Match my controller","settingsPromptXbox":"Xbox","settingsPromptPlayStation":"PlayStation","settingsPromptNintendo":"Nintendo","settingsPromptSteamDeck":"Steam Deck","settingsPromptGeneric":"Generic","settingsHideButtonHints":"Hide button hints","settingsVibration":"Vibration","settingsCursorSpeed":"Virtual cursor speed","settingsCursorMagnetism":"Cursor snaps onto buttons","settingsMenuBackToCategories":"Back returns to the category list first","settingsAccessibility":"Accessibility","settingsSwapConfirmBack":"Swap confirm and back","settingsSwapToast":"Select and Back have swapped buttons.","settingsLayoutRefusedToast":"This layout doesn\'t fit your current buttons. Reset them to use it.","settingsSwapConfirmBackInfo":"Select with the right face button and go back with the bottom one, in menus, the inventory and the on-screen keyboard. On by default for Nintendo controllers.","settingsButtonRepeat":"Button repeat","settingsButtonRepeatHint":"How a held button repeats in menus, sliders, the on-screen keyboard and crafting. Off acts once per press, and holding drop in game drops just one item.","settingsButtonRepeatDefault":"Default","settingsButtonRepeatSlow":"Slow (0.8 s, then 4 a second)","settingsButtonRepeatOff":"Off (once per press)","settingsTapHoldTime":"Tap/hold time","settingsTapHoldTimeHint":"How long to hold the chat, emote or action button to open its wheel, or the view button to change view where a tap picks a block. Dropping a whole stack takes 0.8, 1 or 1.3 s.","settingsTapHoldShort":"Short (0.25 s)","settingsTapHoldMedium":"Medium (0.5 s)","settingsTapHoldLong":"Long (0.8 s)","settingsEmoteButton":"Emote button","settingsEmoteButtonTapHoldHint":"Tap to repeat your last emote, or hold to open the emote wheel.","settingsEmoteButtonWheelHint":"Any press opens the emote wheel, with no hold to time. Pick with the stick, then select.","settingsEmoteButtonTapHold":"Tap repeats, hold opens wheel","settingsEmoteButtonWheel":"Opens the wheel","settingsAttackMode":"Attack / mine","settingsAttackHoldHint":"Hold attack to keep attacking or mining.","settingsAttackToggleHint":"Press attack once to keep attacking or mining, and again to stop.","settingsAttackHold":"Hold","settingsAttackToggle":"Toggle","settingsLargePointer":"Large pointer and focus","settingsLargePointerInfo":"A bigger menu cursor, thicker selection brackets and bigger button hints.","settingsRemap":"Remap buttons","settingsRemapHint":"Select an action, then press a button. If that button is taken, the two swap.","settingsLayoutSouthpaw":"Southpaw (move with the right stick)","settingsLayoutTriggersSwapped":"Triggers swapped (attack with the left trigger)","settingsCapturePrompt":"Press a button","settingsCaptureCancelHint":"Press {{button}} to cancel","settingsCaptureCancelOrBindHint":"Tap {{button}} to cancel, or hold it to choose it","settingsReset":"Reset","settingsSwapNotice":"{{action}} moved to {{button}}","settingsResetAll":"Reset all buttons and sticks","settingsGroupGameplay":"Movement & gameplay","settingsGroupMenus":"Menus","settingsGroupInventory":"Inventory","settingsGroupKeyboard":"On-screen keyboard","settingsActionMove":"Move","settingsActionLook":"Look around","settingsActionJump":"Jump","settingsActionSneak":"Sneak","settingsActionSneakToggle":"Toggle sneak","settingsActionSprint":"Sprint","settingsActionAttack":"Attack / mine","settingsActionUse":"Use / place","settingsActionHotbarPrevious":"Previous hotbar slot","settingsActionHotbarNext":"Next hotbar slot","settingsActionInventory":"Inventory","settingsActionActionButton":"Game action","settingsActionPerspective":"Change view","settingsActionPickBlock":"Pick block (creative)","settingsActionDrop":"Drop item","settingsActionEmoteWheel":"Emotes","settingsActionChat":"Chat","settingsActionPause":"Pause menu","settingsActionLeaderboard":"Shop / leaderboard","settingsActionMenuConfirm":"Select","settingsActionMenuBack":"Back","settingsActionMenuTabPrevious":"Previous tab","settingsActionMenuTabNext":"Next tab","settingsActionMenuPageUp":"Page up","settingsActionMenuPageDown":"Page down","settingsActionMenuSecondary":"Secondary action","settingsActionMenuToggleCursor":"Switch to virtual cursor","settingsActionInventoryPrimary":"Pick up / place","settingsActionInventorySecondary":"Pick up half / place one","settingsActionInventoryQuickMove":"Quick move","settingsActionInventoryHotbarSwap":"Swap with hotbar slot","settingsActionInventoryClose":"Close","settingsActionInventoryPanelPrevious":"Previous panel","settingsActionInventoryPanelNext":"Next panel","settingsActionInventoryDrop":"Drop item","settingsActionKeyboardType":"Type key","settingsActionKeyboardBackspace":"Backspace","settingsActionKeyboardSpace":"Space","settingsActionKeyboardCaretLeft":"Move cursor left","settingsActionKeyboardCaretRight":"Move cursor right","settingsActionKeyboardShift":"Shift","settingsActionKeyboardSymbols":"Accents and symbols","settingsActionKeyboardSubmit":"Send","settingsActionKeyboardClose":"Close keyboard","settingsActionKeyboardChannel":"Chat channel","settingsAlternatives":"Try alternatives","settingsAlternativesHint":"Try each way of playing and keep the one that feels best.","settingsMenuNavigation":"Menu navigation","settingsMenuNavigationHint":"Steer a cursor with the stick and jump between buttons with the D-pad, or use just one.","settingsNavHybrid":"Cursor and D-pad","settingsMenuNavFocus":"Jump between buttons","settingsVirtualCursor":"Virtual cursor","settingsInventoryNavigation":"Inventory","settingsInventoryNavigationHint":"Steer a cursor with the stick and step slot by slot with the D-pad, or use just one.","settingsInventoryNavSlot":"Slot by slot","settingsQuickChat":"Hold chat button","settingsQuickChatHint":"Hold the chat button to pick a quick phrase. Tapping it still opens chat.","settingsQuickChatWheel":"Quick chat wheel","settingsQuickChatOff":"Off","settingsLeaderboardButton":"Shop / leaderboard button","settingsLeaderboardButtonHint":"Open the shop in one press in games that have one. The lobby leaderboard is still in the pause menu.","settingsLeaderboardButtonShop":"Shop, in games with one","settingsLeaderboardButtonLeaderboard":"Always the leaderboard","settingsTester":"Gamepad tester","settingsTesterNoPad":"Connect a gamepad and press any button to test it.","settingsTesterFamily":"Detected: {{family}}","settingsTesterHint":"Start a test to try every button and stick without moving through the menu.","settingsTesterStart":"Start test","settingsTesterStop":"Stop test","settingsTesterTesting":"Press anything to see it light up. To stop, hold {{button}} or press it three times.","settingsControlsNote":"Playing with a gamepad? Change its buttons and feel in Gamepad settings.","settingsOpenController":"Gamepad settings","keyboardSpace":"Space","keyboardSend":"Send","keyboardDone":"Done","keyboardTargetChat":"Chat","keyboardTargetSign":"Sign","keyboardTargetNameTag":"Name tag","keyboardTargetBook":"Book page","keyboardTargetBookTitle":"Book title","keyboardTargetText":"Text","keyboardPhraseGg":"gg","keyboardPhraseHi":"hi","keyboardPhraseThanks":"thanks","keyboardPhraseGl":"gl","keyboardPhraseBrb":"brb","keyboardPhraseYes":"yes","keyboardPhraseNo":"no","keyboardPhraseHelp":"help!","quickChatPick":"Pick a phrase","actionWheelPick":"Pick an action","wheelReleaseToPick":"Release to pick","wheelClose":"Close","wheelChoose":"Choose","menusSelect":"Select","menusBack":"Back","menusClose":"Close","menusQuickChat":"Quick chat (hold)","menusSkipTutorial":"Skip tutorial","menusTabs":"Tabs","menusRows":"Rows","menusCursorMode":"Cursor","menusFocusMode":"Focus","menusClick":"Click","menusRightClick":"Right-click","menusScroll":"Scroll","menusFriends":"Friends","menusSearch":"Search","menusSettings":"Settings","menusLeaveGameTitle":"Leave the game?","menusLeaveGameLeave":"Leave","menusLeaveGameStay":"Stay","menusNotifications":"Notifications","menusLobby":"Lobby","menusShop":"Shop","menusTasks":"Tasks & leaderboards","menusInvite":"Invite friends","menusAdjust":"Adjust","menusFavourite":"Favourite","screensPressToContinue":"Press {{button}} to continue","screensPressToEnterGame":"Press {{button}} to enter game","screensEnterGame":"Enter game","screensBackToGames":"Back to games","tutorialMine":"Mine","tutorialPlace":"Place / Use","tutorialInventory":"Inventory","tutorialPause":"Pause","menusUseMouse":"Use a mouse or touch here"}}');
    var Nd = kd(1211),
      Wd = kd(1417),
      Pd = kd(8016),
      Zd = kd(72),
      gd = kd(22),
      Cd = kd(29),
      Kd = kd(8031),
      od = kd(8077),
      ld = kd(8043),
      Qd = kd(8081),
      Ld = kd(8020),
      Od = kd(8551),
      ed = kd(8554),
      Rd = kd(1699);
    const Id = (dd, Jd, kd) => Math.max(Jd, Math.min(kd, dd)),
      Gd = dd => Math.min(dd.width, dd.height) / 720,
      vd = dd => Math.max(.15, dd);
    class xd {
      constructor() {
        this.locked = !1
      }
      lock() {
        this.locked = !0
      }
      update(dd, Jd) {
        const kd = Math.hypot(dd.x, dd.y) >= (dd => Math.max(.3, dd))(Jd);
        return this.locked ? (this.locked = kd, !1) : kd
      }
    }
    const qd = (dd, Jd) => {
        const kd = Id(Jd.dtMs, 0, 100),
          pd = kd / 1e3,
          Nd = Gd(Jd.viewport) * (Jd.cursorSpeedPercent / 100),
          Wd = (0, Ld.i)(Jd.stick, vd(Jd.moveDeadzone)),
          Pd = Math.hypot(Wd.x, Wd.y),
          Zd = ((dd, Jd, kd) => {
            if (Jd < .3) return 0;
            const pd = kd / 350;
            return Jd >= .85 ? Math.min(1, dd + pd) : Math.max(0, dd - pd)
          })(dd.speedRamp, Pd, kd);
        let gd = dd.x,
          Cd = dd.y;
        if (Pd > 0) {
          const dd = .45 + .55 * Zd,
            kd = Jd.context.overInteractive ? .45 : 1,
            Kd = 1400 * (dd => {
              const Jd = Id(dd, 0, 1);
              return .3 * Jd + .7 * Jd * Jd
            })(Pd) * Nd * dd * kd;
          gd += Wd.x / Pd * Kd * pd, Cd += Wd.y / Pd * Kd * pd
        }
        const Kd = Math.hypot(Jd.dpad.x, Jd.dpad.y);
        if (Kd > 0) {
          const dd = 500 * Nd;
          gd += Jd.dpad.x / Kd * dd * pd, Cd += Jd.dpad.y / Kd * dd * pd
        }
        const od = Jd.context.magnetTarget;
        if (od && Pd < .3 && 0 === Kd) {
          const dd = ((dd, Jd, kd, pd, Nd) => {
            const Wd = Jd.x - dd.x,
              Pd = Jd.y - dd.y,
              Zd = Math.hypot(Wd, Pd);
            if (0 === Zd) return {
              x: 0,
              y: 0
            };
            const gd = Math.min(Zd, Nd * (1 - pd / .3));
            let Cd = Wd / Zd * gd,
              Kd = Pd / Zd * gd;
            if (pd > 0) {
              const dd = kd.x / pd,
                Jd = kd.y / pd,
                Nd = Cd * dd + Kd * Jd;
              Nd < 0 && (Cd -= Nd * dd, Kd -= Nd * Jd)
            }
            return {
              x: Cd,
              y: Kd
            }
          })({
            x: gd,
            y: Cd
          }, od, Wd, Pd, 120 * Gd(Jd.viewport) * pd);
          gd += dd.x, Cd += dd.y
        }
        return {
          x: Id(gd, 0, Math.max(0, Jd.viewport.width - 1)),
          y: Id(Cd, 0, Math.max(0, Jd.viewport.height - 1)),
          speedRamp: Zd
        }
      },
      Bd = dd => {
        const Jd = (0, Ld.i)(dd, .2);
        return 0 !== Jd.x || 0 !== Jd.y
      },
      sd = (dd, Jd) => {
        const kd = (0, Ld.i)(dd, .2),
          pd = Math.hypot(kd.x, kd.y);
        if (0 === pd) return {
          x: 0,
          y: 0
        };
        const Nd = pd * pd * 1600,
          Wd = Id(Jd, 0, 100) / 1e3;
        return {
          x: kd.x / pd * Nd * Wd,
          y: kd.y / pd * Nd * Wd
        }
      },
      ad = (dd, Jd) => "y" === Jd ? dd.scrollHeight > dd.clientHeight + 1 : dd.scrollWidth > dd.clientWidth + 1,
      Md = (dd, Jd) => {
        if (!ad(dd, Jd)) return !1;
        const kd = getComputedStyle(dd),
          pd = "y" === Jd ? kd.overflowY : kd.overflowX;
        return "auto" === pd || "scroll" === pd
      },
      Fd = (dd, Jd, kd) => {
        for (let Wd = dd instanceof HTMLElement ? dd : null !== (pd = null === dd || void 0 === dd ? void 0 : dd.parentElement) && void 0 !== pd ? pd : null; Wd; Wd = Wd.parentElement) {
          var pd;
          if (Md(Wd, Jd)) return Wd;
          if (Wd === kd) return null
        }
        if (kd) return null;
        const Nd = document.scrollingElement;
        return Nd instanceof HTMLElement && ad(Nd, Jd) ? Nd : null
      },
      Yd = new WeakMap,
      md = (dd, Jd) => {
        const kd = performance.now(),
          pd = Yd.get(dd);
        if (pd && pd.axis === Jd && kd - pd.atMs < 500 && (!pd.container || pd.container.isConnected)) return pd.container;
        const Nd = bd(dd, Jd);
        return Yd.set(dd, {
          axis: Jd,
          atMs: kd,
          container: Nd
        }), Nd
      },
      bd = (dd, Jd) => {
        let kd = Md(dd, Jd) ? dd : null,
          pd = kd ? kd.clientWidth * kd.clientHeight : 0;
        for (const Nd of dd.querySelectorAll("*")) {
          const dd = Nd.clientWidth * Nd.clientHeight;
          dd > pd && Md(Nd, Jd) && (kd = Nd, pd = dd)
        }
        return kd
      },
      Sd = (dd, Jd, kd) => "y" === Jd ? kd < 0 ? dd.scrollTop > 0 : dd.scrollTop + dd.clientHeight < dd.scrollHeight - 1 : kd < 0 ? dd.scrollLeft > 0 : dd.scrollLeft + dd.clientWidth < dd.scrollWidth - 1,
      jd = (dd, Jd, kd) => {
        "y" === Jd ? dd.scrollBy({
          top: kd,
          behavior: "instant"
        }) : dd.scrollBy({
          left: kd,
          behavior: "instant"
        })
      },
      Xd = dd => {
        if (!dd || dd === document.scrollingElement) return new DOMRect(0, 0, window.innerWidth, window.innerHeight);
        const Jd = dd.getBoundingClientRect(),
          kd = Math.max(0, Jd.left),
          pd = Math.max(0, Jd.top);
        return new DOMRect(kd, pd, Math.min(window.innerWidth, Jd.right) - kd, Math.min(window.innerHeight, Jd.bottom) - pd)
      },
      fd = (dd, Jd) => dd.left < Jd.right && Jd.left < dd.right && dd.top < Jd.bottom && Jd.top < dd.bottom;
    var nd = kd(56),
      Ud = kd(1044),
      yd = kd.n(Ud),
      Dd = kd(1103);
    let Td = 0,
      Ed = !1;
    class cd {
      constructor() {
        this.element = null, this.shownKey = "", this.gap = null
      }
      setElement(dd) {
        this.element = dd, this.shownKey = "", this.gap = null
      }
      show(dd) {
        const Jd = this.element;
        if (!Jd) return;
        const kd = dd ? this.keepOnScreen(Jd, dd) : null,
          pd = kd ? `${kd.left},${kd.top},${kd.width},${kd.height}` : "";
        if (pd === this.shownKey) return;
        const Nd = "" === this.shownKey;
        this.shownKey = pd, Jd.classList.toggle("Visible", null !== kd), kd && (Jd.classList.toggle("Snap", Nd), Jd.style.width = `${kd.width}px`, Jd.style.height = `${kd.height}px`, Jd.style.transform = `translate(${kd.left}px, ${kd.top}px)`, Nd && (Jd.offsetWidth, Jd.classList.remove("Snap")))
      }
      hide() {
        this.show(null)
      }
      keepOnScreen(dd, Jd) {
        var kd;
        const pd = `${window.innerWidth}x${window.innerHeight}@${(()=>{if("undefined"===typeof ResizeObserver)return getComputedStyle(document.documentElement).fontSize;if(!Ed){Ed=!0;const dd=document.createElement("div");dd.setAttribute("aria-hidden","true"),dd.style.cssText="position: fixed; top: 0; left: 0; width: 1rem; height: 0; visibility: hidden; pointer-events: none",document.body.appendChild(dd),new ResizeObserver((()=>{Td++})).observe(dd)}return String(Td)})()}`;
        (null === (kd = this.gap) || void 0 === kd ? void 0 : kd.key) !== pd && (this.gap = {
          px: parseFloat(getComputedStyle(dd).paddingLeft) || 0,
          key: pd
        });
        const Nd = this.gap.px + 2,
          Wd = Math.max(Jd.left, Nd),
          Pd = Math.max(Jd.top, Nd),
          Zd = Math.min(Jd.left + Jd.width, window.innerWidth - Nd),
          gd = Math.min(Jd.top + Jd.height, window.innerHeight - Nd);
        return Zd <= Wd || gd <= Pd ? Jd : {
          left: Wd,
          top: Pd,
          width: Zd - Wd,
          height: gd - Pd
        }
      }
    }
    const hd = dd => {
      let {
        placer: Jd,
        className: kd
      } = dd;
      const pd = (0, nd.useCallback)((dd => {
        Jd.setElement(dd)
      }), [Jd]);
      return (0, Dd.jsx)("div", {
        ref: pd,
        className: yd()("PadReticle", kd),
        "aria-hidden": !0
      })
    };
    var rd = kd(8563);
    const ud = {
      x: 0,
      y: 0,
      visible: !1,
      pressed: !1
    };
    const td = new class {
      constructor() {
        this.state = ud, this.listeners = new Set
      }
      get() {
        return this.state
      }
      set(dd) {
        if (Jd = this.state, kd = dd, (Jd.visible || kd.visible) && (Jd.visible !== kd.visible || Jd.x !== kd.x || Jd.y !== kd.y || Jd.pressed !== kd.pressed)) {
          var Jd, kd;
          this.state = dd;
          for (const Jd of this.listeners) Jd(dd)
        }
      }
      hide() {
        this.set(ud)
      }
      subscribe(dd) {
        return this.listeners.add(dd), () => {
          this.listeners.delete(dd)
        }
      }
    };
    var Vd = kd(8572);
    const zd = (dd, Jd) => {
        let {
          kind: kd,
          holding: pd,
          hasPress: Nd,
          hasBack: Wd,
          slotHasItem: Pd
        } = Jd;
        switch (dd) {
          case "primary":
            return "slot" === kd ? "slotPrimary" : "recipe" === kd || "button" === kd ? Nd ? "pressPrimary" : "click" : "textField" === kd ? "openKeyboard" : null;
          case "secondary":
            return "slot" === kd ? "slotSecondary" : "button" !== kd && "recipe" !== kd || !Nd ? null : "pressSecondary";
          case "quickMove":
            return "slot" === kd && Pd ? "slotQuickMove" : null;
          case "hotbarSwap":
            return "slot" === kd && Pd && !pd ? "hotbarPick" : null;
          case "openButton":
            return "close";
          case "back":
            return pd ? "cancel" : Wd ? "pressBack" : "close"
        }
      },
      Hd = dd => {
        const Jd = [];
        if (dd.hotbarPicking) return Jd.push({
          actions: ["inventoryPrimary", "inventoryHotbarSwap"],
          labelKey: "inventorySwapHere"
        }), Jd.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryCancel"
        }), Jd;
        if (dd.holding) "slot" === dd.kind ? (Jd.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryPlace"
        }), Jd.push({
          actions: ["inventorySecondary"],
          labelKey: "inventoryPlaceOne"
        })) : "textField" === dd.kind && Jd.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryType"
        }), Jd.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryPutBack"
        }), Jd.push({
          actions: ["inventoryDrop"],
          labelKey: "inventoryDrop"
        }), dd.openButtonCloses && Jd.push({
          actions: ["inventory"],
          labelKey: "inventoryClose"
        });
        else {
          var kd;
          "slot" === dd.kind && dd.slotHasItem ? (Jd.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryTake"
          }), Jd.push({
            actions: ["inventorySecondary"],
            labelKey: "inventoryTakeHalf"
          }), Jd.push({
            actions: ["inventoryQuickMove"],
            labelKey: dd.quickMoveToHotbar ? "inventoryToHotbar" : "inventoryQuickMove"
          }), Jd.push({
            actions: ["inventoryHotbarSwap"],
            labelKey: "inventoryHotbarSwap"
          }), Jd.push({
            actions: ["inventoryDrop"],
            labelKey: "inventoryDrop"
          })) : "button" !== dd.kind && "recipe" !== dd.kind || !dd.pressHints ? "button" === dd.kind || "recipe" === dd.kind ? Jd.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventorySelect"
          }) : "textField" === dd.kind && Jd.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryType"
          }) : (dd.pressHints.primary && Jd.push({
            actions: ["inventoryPrimary"],
            labelKey: dd.pressHints.primary
          }), dd.pressHints.secondary && Jd.push({
            actions: ["inventorySecondary"],
            labelKey: dd.pressHints.secondary
          }));
          const pd = null === (kd = dd.pressHints) || void 0 === kd ? void 0 : kd.back;
          pd && Jd.push({
            actions: ["inventoryClose"],
            labelKey: pd
          });
          const Nd = [];
          dd.openButtonCloses && Nd.push("inventory"), pd || Nd.push("inventoryClose"), Nd.length > 0 && Jd.push({
            actions: Nd,
            labelKey: "inventoryClose"
          })
        }
        return Jd.push({
          actions: ["inventoryPanelPrevious", "inventoryPanelNext"],
          labelKey: "inventoryPanels"
        }), dd.hasCategories ? Jd.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryCategory"
        }) : dd.hasList && Jd.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryPage"
        }), Jd
      };
    var wd = kd(8588),
      Ad = kd(8581);
    class dJ {
      constructor(dd) {
        this.probes = dd, this.byContainer = new Map, this.byParent = new Map
      }
      find(dd, Jd) {
        const kd = Fd(dd, "y", Jd);
        if (!kd) return null;
        let pd = this.byContainer.get(kd);
        return pd || (this.probes.push({
          element: kd,
          rect: NJ(kd.getBoundingClientRect())
        }), pd = {
          container: kd,
          box: Xd(kd),
          group: pJ(kd)
        }, this.byContainer.set(kd, pd)), pd
      }
      findForParent(dd, Jd) {
        let kd = this.byParent.get(dd);
        return void 0 === kd && (kd = this.find(dd, Jd), this.byParent.set(dd, kd)), kd
      }
    }
    const JJ = new WeakMap;
    let kJ = 0;
    const pJ = dd => {
        let Jd = JJ.get(dd);
        return Jd || (Jd = "el:" + kJ++, JJ.set(dd, Jd)), Jd
      },
      NJ = dd => ({
        left: dd.left,
        top: dd.top,
        width: dd.width,
        height: dd.height
      }),
      WJ = dd => dd.width > 0 && dd.height > 0,
      PJ = (dd, Jd) => WJ(dd) && dd.left + dd.width > 0 && dd.top + dd.height > 0 && dd.left < Jd.width && dd.top < Jd.height,
      ZJ = (dd, Jd, kd) => {
        const pd = dd.top + dd.height / 2;
        return PJ(dd, Jd) && (!kd || pd >= kd.top && pd <= kd.bottom)
      },
      gJ = dd => ({
        x: dd.left + dd.width / 2,
        y: dd.top + dd.height / 2
      }),
      CJ = (dd, Jd, kd) => dd < 0 ? kd >= 0 ? 0 : Jd - 1 : ((dd + kd) % Jd + Jd) % Jd,
      KJ = dd => "Left" === dd || "Right" === dd,
      oJ = (dd, Jd, kd) => {
        const pd = KJ(kd),
          Nd = pd ? dd.top : dd.left,
          Wd = pd ? dd.height : dd.width,
          Pd = pd ? Jd.top : Jd.left,
          Zd = pd ? Jd.height : Jd.width,
          gd = Math.max(0, Math.max(Pd - (Nd + Wd), Nd - (Pd + Zd)));
        return Wd > 1.5 * Zd ? {
          gap: gd,
          offset: Math.max(0, Pd - Nd) + .1 * Math.max(0, Nd - Pd)
        } : {
          gap: gd,
          offset: Math.abs(Pd + Zd / 2 - (Nd + Wd / 2))
        }
      },
      lJ = (dd, Jd, kd) => {
        const pd = ((dd, Jd, kd) => {
          const pd = gJ(dd),
            Nd = gJ(Jd),
            Wd = KJ(kd) ? Math.min(dd.width, Jd.width) / 4 : Math.min(dd.height, Jd.height) / 4;
          switch (kd) {
            case "Right":
              return Nd.x - pd.x >= Wd ? Math.max(0, Jd.left - (dd.left + dd.width)) : null;
            case "Left":
              return pd.x - Nd.x >= Wd ? Math.max(0, dd.left - (Jd.left + Jd.width)) : null;
            case "Down":
              return Nd.y - pd.y >= Wd ? Math.max(0, Jd.top - (dd.top + dd.height)) : null;
            case "Up":
              return pd.y - Nd.y >= Wd ? Math.max(0, dd.top - (Jd.top + Jd.height)) : null
          }
        })(dd, Jd, kd);
        if (null === pd) return null;
        const Nd = oJ(dd, Jd, kd);
        return pd + 3 * Nd.gap + .5 * Nd.offset
      },
      QJ = (dd, Jd) => Jd.visible || null !== Jd.scrollGroup && Jd.scrollGroup === dd.scrollGroup,
      LJ = (dd, Jd, kd, pd) => {
        let Nd = null,
          Wd = 1 / 0;
        for (const Pd of Jd) {
          if (Pd.key === dd.key || !QJ(dd, Pd) || !pd(Pd)) continue;
          const Jd = lJ(dd.rect, Pd.rect, kd);
          null !== Jd && Jd < Wd && (Nd = Pd, Wd = Jd)
        }
        return Nd
      },
      OJ = (dd, Jd, kd) => {
        const pd = LJ(dd, Jd, kd, (() => !0));
        if (!pd || KJ(kd) || null === dd.scrollGroup || pd.scrollGroup === dd.scrollGroup) return pd;
        const Nd = LJ(dd, Jd, kd, (Jd => 0 === oJ(dd.rect, Jd.rect, kd).gap));
        return null !== Nd && void 0 !== Nd ? Nd : pd
      },
      eJ = (dd, Jd, kd) => {
        let pd = null,
          Nd = 1 / 0;
        for (const Wd of Jd) {
          if (!Wd.visible || kd && !kd(Wd)) continue;
          const Jd = gJ(Wd.rect),
            Pd = Math.hypot(Jd.x - dd.x, Jd.y - dd.y);
          Pd < Nd && (pd = Wd, Nd = Pd)
        }
        return pd
      },
      RJ = dd => {
        const {
          rect: Jd,
          clip: kd
        } = dd;
        if (!kd) return Jd;
        const pd = Math.max(Jd.left, kd.left),
          Nd = Math.max(Jd.top, kd.top);
        return {
          left: pd,
          top: Nd,
          width: Math.min(Jd.left + Jd.width, kd.left + kd.width) - pd,
          height: Math.min(Jd.top + Jd.height, kd.top + kd.height) - Nd
        }
      },
      IJ = (dd, Jd) => Jd.x >= dd.left && Jd.x < dd.left + dd.width && Jd.y >= dd.top && Jd.y < dd.top + dd.height,
      GJ = (dd, Jd) => {
        let kd = null,
          pd = 1 / 0;
        for (const Nd of Jd) {
          const Jd = RJ(Nd);
          (Nd.visible || Nd.clip) && IJ(Jd, dd) && (Jd.width * Jd.height < pd && (kd = Nd, pd = Jd.width * Jd.height))
        }
        return kd
      },
      vJ = dd => {
        let Jd = null;
        for (const kd of dd) {
          if (!kd.visible) continue;
          if (!Jd) {
            Jd = kd;
            continue
          }
          const dd = Math.min(Jd.rect.height, kd.rect.height) / 2,
            pd = kd.rect.top - Jd.rect.top;
          (pd < -dd || Math.abs(pd) <= dd && kd.rect.left < Jd.rect.left) && (Jd = kd)
        }
        return Jd
      },
      xJ = (dd, Jd, kd, pd, Nd) => {
        const Wd = Nd % Jd,
          Pd = Math.floor(Nd / Jd);
        return {
          left: dd.left + Wd * kd,
          top: dd.top + Pd * pd,
          width: dd.width,
          height: dd.height
        }
      },
      qJ = ".EntireInventoryWrapper .Inventory, .HotBarGameItemsContainer",
      BJ = ".LazyLoadedItemWrapper",
      sJ = ["[data-inven-idx]", "[data-recipe-key]", "[role=button]", "button", "input:not([type=hidden])", "textarea", ".CreativeCategoryTab", ".CreativeCategoryDropdownButton", ".CreativeCategoryDropdownOption", "[data-craft-ingredient]"].join(","),
      iJ = [
        ["hotbar", ".HotBarGameItemsContainer"],
        ["gameButtons", ".ClientGameInventoryButtons"],
        ["categories", ".CreativeCategoryRail"],
        ["recipe", ".CraftableInfo"],
        ["armour", ".ArmourItemSlots"],
        ["main", ".InvenBodyRight"],
        ["left", ".InvenLeftSide"]
      ],
      aJ = ["gameButtons", "categories", "left", "recipe", "armour", "main", "hotbar"],
      MJ = dd => dd.hasAttribute("data-inven-idx") ? "slot" : dd.hasAttribute("data-recipe-key") ? "recipe" : dd.hasAttribute("data-craft-ingredient") || (0, Ad.t)(dd) ? "info" : (0, rd.D)(dd) ? "textField" : "button",
      FJ = (dd, Jd) => "slot" === Jd ? Number(dd.getAttribute("data-inven-idx")) : null,
      YJ = dd => dd.matches(BJ) ? dd.querySelector(sJ) : dd,
      mJ = dd => {
        var Jd, kd;
        return {
          element: dd,
          recipe: null !== (Jd = dd && (null === (kd = YJ(dd)) || void 0 === kd ? void 0 : kd.getAttribute("data-recipe-key"))) && void 0 !== Jd ? Jd : null
        }
      },
      bJ = dd => {
        const Jd = YJ(dd);
        if (!Jd) return {
          kind: "pending",
          idx: null
        };
        const kd = MJ(Jd);
        return {
          kind: kd,
          idx: FJ(Jd, kd)
        }
      },
      SJ = dd => {
        const Jd = [];
        for (const [kd, pd] of iJ) {
          dd.matches(pd) && Jd.push([kd, dd]);
          for (const Nd of dd.querySelectorAll(pd)) Jd.push([kd, Nd])
        }
        return Jd
      },
      jJ = (dd, Jd) => {
        for (const [kd, pd] of dd)
          if (pd.contains(Jd)) return kd;
        return "other"
      },
      XJ = (dd, Jd, kd, pd, Nd, Wd, Pd, Zd) => {
        var gd;
        const Cd = dd.children,
          Kd = NJ(Cd[0].getBoundingClientRect()),
          od = [{
            element: Cd[0],
            rect: Kd
          }];
        if (Wd.push(od[0]), 0 === Kd.width || 0 === Kd.height) return;
        let ld = 1;
        for (; ld < Cd.length && Math.abs(Cd[ld].getBoundingClientRect().top - Kd.top) < 1;) ld++;
        const Qd = dd => {
            const Jd = {
              element: Cd[dd],
              rect: NJ(Cd[dd].getBoundingClientRect())
            };
            return Wd.push(Jd), od.push(Jd), Jd.rect
          },
          Ld = ld > 1 ? Qd(1).left - Kd.left : Kd.width,
          Od = Cd.length > ld ? Qd(ld).top - Kd.top : Kd.height,
          ed = Pd.find(dd, Jd);
        let Rd = null;
        if (ed) {
          var Id;
          const {
            container: dd,
            box: Jd
          } = ed;
          Rd = null !== (Id = Zd.get(dd)) && void 0 !== Id ? Id : null, Rd || (Rd = {
            top: dd.scrollTop,
            left: dd.scrollLeft,
            box: Jd,
            viewport: pd,
            targets: [],
            probes: [],
            holdsOthers: !1
          }, Zd.set(dd, Rd)), Rd.probes.push(...od)
        }
        const Gd = Nd.length;
        for (let Bd = 0; Bd < Cd.length; Bd++) {
          var vd, xd, qd;
          const dd = Cd[Bd],
            Jd = xJ(Kd, ld, Ld, Od, Bd),
            Wd = dd.firstElementChild ? dd.querySelector(sJ) : null,
            Pd = Wd ? MJ(Wd) : "pending";
          Nd.push({
            key: pJ(dd),
            rect: Jd,
            panel: kd,
            scrollGroup: null !== (vd = null === ed || void 0 === ed ? void 0 : ed.group) && void 0 !== vd ? vd : null,
            visible: ZJ(Jd, pd, null === ed || void 0 === ed ? void 0 : ed.box),
            clip: null !== (xd = null === ed || void 0 === ed ? void 0 : ed.box) && void 0 !== xd ? xd : null,
            element: dd,
            kind: Pd,
            idx: Wd ? FJ(Wd, Pd) : null,
            scrollContainer: null !== (qd = null === ed || void 0 === ed ? void 0 : ed.container) && void 0 !== qd ? qd : null
          })
        }
        null === (gd = Rd) || void 0 === gd || gd.targets.push(...Nd.slice(Gd))
      },
      fJ = dd => dd instanceof Element && null !== dd.closest(BJ),
      nJ = dd => null !== dd.scrollContainer && fJ(dd.element);
    class UJ {
      constructor() {
        this.latched = null, this.presses = 0
      }
      press(dd, Jd, kd, pd) {
        this.latched = {
          source: dd,
          focusKey: Jd,
          sinceMs: kd,
          hold: {
            id: ++this.presses,
            holdMs: pd
          }
        }
      }
      update(dd, Jd, kd) {
        const pd = this.latched;
        return pd ? dd && Jd === pd.focusKey ? kd - pd.sinceMs < pd.hold.holdMs ? null : (this.latched = null, pd.source) : (this.latched = null, null) : null
      }
      getHold() {
        var dd, Jd;
        return null !== (dd = null === (Jd = this.latched) || void 0 === Jd ? void 0 : Jd.hold) && void 0 !== dd ? dd : null
      }
      reset() {
        this.latched = null
      }
    }
    var yJ = kd(8593);
    const DJ = {
        kind: "none"
      },
      TJ = dd => ({
        x: dd.clientX,
        y: dd.clientY
      }),
      EJ = () => 2 * (parseFloat(getComputedStyle(document.documentElement).fontSize) || 16);
    class cJ {
      constructor() {
        this.hovered = DJ, this.signature = "", this.holding = !1, this.lastPoint = {
          clientX: 0,
          clientY: 0
        }
      }
      sync(dd, Jd, kd, pd, Nd) {
        const Wd = null !== Jd ? {
            kind: "slot",
            idx: Jd
          } : kd ? {
            kind: "element",
            element: kd
          } : DJ,
          Pd = `${Nd}|${Math.round(pd.clientX)},${Math.round(pd.clientY)}`,
          Zd = (gd = this.hovered, Cd = Wd, "slot" === gd.kind && "slot" === Cd.kind ? gd.idx === Cd.idx : "element" === gd.kind && "element" === Cd.kind ? gd.element === Cd.element : gd.kind === Cd.kind);
        var gd, Cd;
        if (Zd && Pd === this.signature) return;
        const Kd = !Zd || Nd !== this.holding || "" === this.signature;
        this.signature = Pd, this.holding = Nd, this.lastPoint = pd;
        const od = this.hovered;
        if (this.hovered = Wd, "slot" === Wd.kind) return this.leaveElement(od, null, pd), void(Kd ? dd.hover(Wd.idx, pd) : dd.moveTo(pd));
        if (Zd) return void("element" === Wd.kind ? (0, rd.o)(Wd.element, Wd.element, TJ(pd)) : dd.hover(null, pd));
        dd.hover(null, pd);
        const ld = "element" === Wd.kind ? Wd.element : null;
        "element" === od.kind ? (0, rd.o)(od.element, ld, TJ(pd)) : ld && (0, rd.o)(null, ld, TJ(pd))
      }
      invalidate() {
        this.signature = ""
      }
      clear(dd) {
        const Jd = this.hovered;
        this.hovered = DJ, this.signature = "", "none" !== Jd.kind && (this.leaveElement(Jd, null, this.lastPoint), dd && "slot" === Jd.kind && dd.hover(null, this.lastPoint))
      }
      leaveElement(dd, Jd, kd) {
        "element" === dd.kind && (0, rd.o)(dd.element, Jd, TJ(kd))
      }
    }
    class hJ {
      constructor() {
        this.lastTiltedMs = -1 / 0
      }
      update(dd, Jd) {
        Bd(dd) && (this.lastTiltedMs = Jd)
      }
      allowsClick(dd) {
        return dd - this.lastTiltedMs > 150
      }
    }
    class rJ {
      constructor() {
        this.remainder = 0, this.container = null
      }
      isScrolling(dd) {
        return 0 !== (0, Ld.i)(dd, .2).y
      }
      step(dd, Jd, kd) {
        dd !== this.container && (this.container = dd, this.remainder = 0);
        const pd = sd(Jd, kd).y;
        if (0 === pd) return this.remainder = 0, !1;
        const Nd = this.remainder + pd,
          Wd = Math.trunc(Nd);
        if (this.remainder = Nd - Wd, 0 === Wd) return !1;
        const Pd = dd.scrollTop;
        return dd.scrollTop = Pd + Wd, dd.scrollTop !== Pd
      }
      current() {
        var dd;
        return null !== (dd = this.container) && void 0 !== dd && dd.isConnected ? this.container : null
      }
      reset() {
        this.remainder = 0, this.container = null
      }
    }
    var uJ = kd(8598);
    const tJ = "[data-pad-inventory-default]",
      VJ = ".HotBarGameItemsContainer .InvenItem.Selected",
      zJ = {
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
      HJ = [
        ["primary", "inventoryPrimary"],
        ["secondary", "inventorySecondary"],
        ["quickMove", "inventoryQuickMove"],
        ["hotbarSwap", "inventoryHotbarSwap"],
        ["back", "inventoryClose"],
        ["openButton", "inventory"]
      ],
      wJ = ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryHotbarSwap", "inventoryClose", "inventoryDrop"],
      AJ = ["inventoryPanelPrevious", "inventoryPanelNext", "menuPageUp", "menuPageDown"],
      dk = [...wJ, ...AJ],
      Jk = () => {
        return dd = (0, Kd.j)("inventory"), !dk.map(Kd.j).includes(dd) && !(0, Ld.G)(dd);
        var dd
      },
      kk = new Set(["slotPrimary", "slotSecondary", "slotQuickMove", "pressPrimary", "pressSecondary", "openKeyboard"]),
      pk = (dd, Jd) => {
        const kd = !(null === Jd || void 0 === Jd || !Jd.isHolding());
        return function(dd, Jd) {
          const kd = dd.find((dd => dd.visible && Jd(dd)));
          if (kd) return kd;
          for (var pd = arguments.length, Nd = new Array(pd > 2 ? pd - 2 : 0), Wd = 2; Wd < pd; Wd++) Nd[Wd - 2] = arguments[Wd];
          for (const Pd of Nd) {
            const Jd = vJ(dd.filter(Pd));
            if (Jd) return Jd
          }
          return vJ(dd)
        }(dd, (dd => {
          const {
            element: Jd
          } = dd;
          return Jd.matches(tJ) || null !== Jd.querySelector(tJ) || Jd.matches(VJ)
        }), (dd => "slot" === dd.kind ? kd || null !== dd.idx && !(null === Jd || void 0 === Jd || !Jd.hasItemAt(dd.idx)) : "recipe" === dd.kind || "pending" === dd.kind), (dd => "slot" === dd.kind || "button" === dd.kind))
      };
    class Nk {
      constructor() {
        this.set = null, this.observer = new MutationObserver((dd => {
          dd.some((dd => !fJ(dd.target))) && (this.set = null)
        })), this.invalidate = () => {
          this.set = null
        }, this.onScroll = dd => {
          this.scrolled(dd.target)
        }
      }
      get() {
        if (!this.set) {
          this.set = (() => {
            const dd = [],
              Jd = [];
            let kd = !1;
            const pd = {
                width: window.innerWidth,
                height: window.innerHeight
              },
              Nd = new Map,
              Wd = new dJ(Jd);
            for (const od of document.querySelectorAll(qJ)) {
              const Kd = SJ(od);
              kd ||= null !== od.querySelector(".CreativeCategoryTab");
              for (const kd of od.querySelectorAll(`${BJ}:first-child`)) {
                const Pd = kd.parentElement;
                XJ(Pd, od, jJ(Kd, Pd), pd, dd, Jd, Wd, Nd)
              }
              for (const kd of od.querySelectorAll(sJ)) {
                var Pd, Zd, gd, Cd;
                if (kd.closest(BJ) || kd.closest("[data-pad-ignore]")) continue;
                const ld = null === (Pd = kd.parentElement) || void 0 === Pd ? void 0 : Pd.closest(sJ);
                if (ld && od.contains(ld)) continue;
                const Qd = MJ(kd),
                  Ld = FJ(kd, Qd);
                if (-1 === Ld) continue;
                const Od = NJ(kd.getBoundingClientRect());
                Jd.push({
                  element: kd,
                  rect: Od
                });
                const ed = Wd.findForParent(kd.parentElement, od),
                  Rd = ed && !Nd.has(ed.container) ? ed : null;
                (Rd ? WJ(Od) : PJ(Od, pd)) && dd.push({
                  key: pJ(kd),
                  rect: Od,
                  panel: jJ(Kd, kd),
                  scrollGroup: null !== (Zd = null === Rd || void 0 === Rd ? void 0 : Rd.group) && void 0 !== Zd ? Zd : null,
                  visible: ZJ(Od, pd, null === Rd || void 0 === Rd ? void 0 : Rd.box),
                  clip: null !== (gd = null === Rd || void 0 === Rd ? void 0 : Rd.box) && void 0 !== gd ? gd : null,
                  element: kd,
                  kind: Qd,
                  idx: Ld,
                  scrollContainer: null !== (Cd = null === Rd || void 0 === Rd ? void 0 : Rd.container) && void 0 !== Cd ? Cd : null
                })
              }
            }
            for (const [od, ld] of Nd) ld.holdsOthers = Jd.some((dd => dd.element !== od && od.contains(dd.element) && !dd.element.closest(BJ)));
            const Kd = new Map;
            for (const od of dd) Kd.set(od.element, od);
            return {
              targets: dd,
              byElement: Kd,
              hasCategories: kd,
              probes: Jd,
              scrollers: Nd
            }
          })(), this.observer.disconnect();
          for (const dd of document.querySelectorAll(qJ)) this.observer.observe(dd, {
            childList: !0,
            subtree: !0,
            attributes: !0,
            attributeFilter: ["class", "disabled", "aria-disabled", "tabindex", "data-inven-idx"]
          })
        }
        return this.set
      }
      scrolled(dd) {
        !this.set || dd instanceof Element && ((dd, Jd) => {
          const kd = dd.scrollers.get(Jd);
          if (!kd || kd.holdsOthers || Jd.scrollLeft !== kd.left) return !1;
          const pd = Jd.scrollTop - kd.top;
          if (0 === pd) return !0;
          kd.top = Jd.scrollTop;
          for (const Nd of kd.probes) Nd.rect.top -= pd;
          for (const Nd of kd.targets) Nd.rect.top -= pd, Nd.visible = ZJ(Nd.rect, kd.viewport, kd.box);
          return !0
        })(this.set, dd) || (this.set = null)
      }
      revalidate() {
        this.set && this.set.probes.some((dd => {
          return Jd = dd.rect, kd = dd.element.getBoundingClientRect(), !(Jd.left === kd.left && Jd.top === kd.top && Jd.width === kd.width && Jd.height === kd.height);
          var Jd, kd
        })) && (this.set = null)
      }
      disconnect() {
        this.observer.disconnect(), this.set = null
      }
    }
    const Wk = new class {
        constructor() {
          this.focused = null, this.focusTarget = null, this.lastRect = null, this.panelMemory = new Map, this.reopenSlotIdx = null, this.dpadTimers = new Map(Ld.C.map((dd => [dd, (0, Od.c)(Ld.E)]))), this.stickRepeat = new Ld.c((0, Od.c)(Ld.eb)), this.pageUpTimer = (0, Od.c)(Ld.Z), this.pageDownTimer = (0, Od.c)(Ld.Z), this.stickGate = new xd, this.pointer = null, this.activePress = null, this.dropLatch = new UJ, this.scroller = new rJ, this.scrollStickClick = new hJ, this.hover = new cJ, this.lastRealPointer = null, this.placeAfterCategory = null, this.hotbarPick = null, this.ring = new cd, this.targets = new Nk, this.hasCategories = !1, this.wasShowing = !1, this.state = yJ.b, this.isActive = () => (0, wd.f)(), this.isShowing = () => "inventory" === od.e.getActiveConsumerName() && (0, Qd.h)(), this.getState = () => this.state, this.isSteppingSlots = () => this.isShowing() && null === this.pointer, this.onDeactivate = () => {
            this.endInteraction((0, wd.c)()), (0, wd.f)() || this.forgetSurface()
          }, this.forgetSurface = () => {
            var dd;
            this.reopenSlotIdx = null !== (dd = this.focused ? bJ(this.focused).idx : null) && void 0 !== dd ? dd : this.reopenSlotIdx, this.focused = null, this.focusTarget = null, this.lastRect = null, this.placeAfterCategory = null, (0, wd.n)(), this.panelMemory.clear(), this.targets.disconnect()
          }, this.onFrame = dd => {
            (0, Zd.unstable_batchedUpdates)((() => {
              this.frame(dd)
            }))
          }, this.shouldBlockRealPointer = dd => dd.isTrusted && !(0, Rd.o)(dd) && this.isShowing(), this.noteRealPointer = dd => {
            dd instanceof MouseEvent && dd.isTrusted && !(0, Rd.o)(dd) && (this.lastRealPointer ??= {
              x: 0,
              y: 0
            }, this.lastRealPointer.x = dd.clientX, this.lastRealPointer.y = dd.clientY)
          }, this.wakePressActs = dd => {
            var Jd;
            return dd === (0, Kd.j)("inventoryClose") ? !(null !== (Jd = (0, wd.c)()) && void 0 !== Jd && Jd.isHolding()) : !(dd !== (0, Kd.j)("inventory") || !Jk()) || ((0, Ld.G)(dd) ? this.isNavButton(dd) : AJ.some((Jd => (0, Kd.j)(Jd) === dd)))
          }
        }
        frame(dd) {
          var Jd, kd, pd, Nd, Wd;
          const Pd = (0, wd.c)();
          if (!(0, Qd.h)()) return void(this.wasShowing && (this.endInteraction(Pd), this.rehoverRealPointer()));
          this.wasShowing = !0, this.applyFocusRequest(), dd.wokeDevice && this.focusWakePointer(!(null === Pd || void 0 === Pd || !Pd.isHolding())), this.applyCategoryPlace(), this.ensureFocus(), "cursor" !== (0, ld.k)().inventoryNavigation || this.pointer || this.engagePointer();
          const Zd = performance.now();
          this.handleNavigation(dd, Zd), this.handlePanels(dd), this.handlePaging(dd, Zd), this.handleScroll(dd), this.handleButtons(dd, Zd, Pd), this.applyFocusRequest(), this.pointer && this.hoverAtPointer();
          const gd = this.ensureFocus(),
            Cd = this.focusContext(Pd);
          this.ring.show(gd);
          const od = "slot" === Cd.kind ? Cd.idx : null,
            Ld = null !== (Jd = null === (kd = Cd.actionElement) || void 0 === kd ? void 0 : kd.querySelector(".DoCraftItem")) && void 0 !== Jd ? Jd : Cd.actionElement;
          this.pointer ? (this.hover.sync(Pd, od, Ld, ((dd, Jd) => {
            const kd = Jd ? EJ() : 0;
            return {
              clientX: dd.x - kd,
              clientY: dd.y - kd
            }
          })(this.pointer, Cd.holding), Cd.holding), td.set({
            x: this.pointer.x,
            y: this.pointer.y,
            visible: !0,
            pressed: dd.isHeld((0, Kd.j)("inventoryPrimary"))
          })) : gd && this.focused && this.hover.sync(Pd, od, Ld, ((dd, Jd) => {
            if (!Jd) return {
              clientX: dd.left + dd.width - 10,
              clientY: dd.top + dd.height / 2 - 10
            };
            const kd = EJ();
            return {
              clientX: dd.left + dd.width / 2 - kd,
              clientY: dd.top + dd.height / 2 - kd
            }
          })(gd, Cd.holding), Cd.holding), this.publishState({
            showing: !0,
            kind: Cd.kind,
            holding: Cd.holding,
            slotHasItem: Cd.slotHasItem,
            pressHints: null !== (pd = null === (Nd = Cd.press) || void 0 === Nd ? void 0 : Nd.hints) && void 0 !== pd ? pd : null,
            hasCategories: this.hasCategories,
            hasList: !!this.focusTarget && nJ(this.focusTarget),
            openButtonCloses: Jk(),
            steppingSlots: null === this.pointer,
            quickMoveToHotbar: "slot" === Cd.kind && !(null === (Wd = Cd.actionElement) || void 0 === Wd || !Wd.closest(".CreativeItemSlots")),
            dropStackHold: this.dropLatch.getHold(),
            hotbarPicking: null !== this.hotbarPick
          })
        }
        focusWakePointer(dd) {
          var Jd;
          const kd = (0, Qd.c)();
          if (!kd) return;
          this.targets.revalidate();
          const pd = this.getTargets().targets;
          this.setFocus(null !== (Jd = GJ(kd, pd)) && void 0 !== Jd ? Jd : dd ? eJ(kd, pd, (dd => {
            let {
              rect: Jd
            } = dd;
            const pd = Math.max(Jd.left - kd.x, 0, kd.x - (Jd.left + Jd.width)),
              Nd = Math.max(Jd.top - kd.y, 0, kd.y - (Jd.top + Jd.height));
            return Math.hypot(pd, Nd) <= Math.min(Jd.width, Jd.height) / 2
          })) : null, !1), "cursor" === (0, ld.k)().inventoryNavigation && (this.pointer = {
            x: kd.x,
            y: kd.y,
            speedRamp: 0
          })
        }
        rehoverRealPointer() {
          const dd = this.lastRealPointer;
          if (!dd || "keyboardMouse" !== gd.d.get("activeInputDevice")) return;
          const Jd = document.elementFromPoint(dd.x, dd.y);
          Jd && (0, rd.o)(null, Jd, dd)
        }
        endInteraction(dd) {
          this.wasShowing = !1, this.hotbarPick = null, this.releasePress(), this.dropLatch.reset(), this.scroller.reset();
          for (const Jd of this.dpadTimers.values()) Jd.reset();
          this.stickRepeat.reset(), this.pageUpTimer.reset(), this.pageDownTimer.reset(), this.hover.clear(dd), this.ring.hide(), this.releasePointer(), this.publishState(yJ.b)
        }
        getTargets() {
          const dd = this.targets.get();
          return this.hasCategories = dd.hasCategories, dd
        }
        currentTarget() {
          var dd;
          return this.focused && null !== (dd = this.getTargets().byElement.get(this.focused)) && void 0 !== dd ? dd : null
        }
        readFocusRect() {
          const dd = this.focused;
          if (null === dd || void 0 === dd || !dd.isConnected || !dd.closest(qJ)) return null;
          const Jd = dd.getBoundingClientRect();
          return Jd.width > 0 && Jd.height > 0 ? {
            left: Jd.left,
            top: Jd.top,
            width: Jd.width,
            height: Jd.height
          } : null
        }
        ensureFocus() {
          const dd = this.readFocusRect();
          if (dd || this.pointer) return dd;
          const {
            targets: Jd,
            byElement: kd
          } = this.getTargets();
          let pd = null,
            Nd = !1;
          if (this.lastRect) pd = eJ(gJ(this.lastRect), Jd);
          else {
            var Wd, Pd;
            const dd = ((dd, Jd) => {
                const kd = document.querySelector(".EntireInventoryWrapper [data-pad-inventory-start]");
                return kd ? pk(dd.filter((dd => kd.contains(dd.element))), Jd) : null
              })(Jd, (0, wd.c)()),
              Zd = Jd.find((dd => null !== dd.idx && dd.idx === this.reopenSlotIdx)),
              gd = document.querySelector(VJ);
            Nd = null !== dd || void 0 !== Zd, pd = null !== (Wd = null !== (Pd = null !== dd && void 0 !== dd ? dd : Zd) && void 0 !== Pd ? Pd : gd && kd.get(gd)) && void 0 !== Wd ? Wd : vJ(Jd)
          }
          return this.setFocus(pd, Nd), this.lastRect
        }
        setFocus(dd) {
          let Jd = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          dd && (this.focused = dd.element, this.focusTarget = dd, this.panelMemory.set(dd.panel, dd.element), Jd && dd.scrollContainer && ((dd, Jd) => {
            const kd = dd.getBoundingClientRect(),
              pd = Xd(Jd),
              Nd = Jd.scrollTop;
            return kd.top < pd.top ? Jd.scrollTop -= pd.top - kd.top : kd.bottom > pd.bottom && (Jd.scrollTop += kd.bottom - pd.bottom), Jd.scrollTop !== Nd
          })(dd.element, dd.scrollContainer) && this.targets.invalidate(), this.lastRect = this.readFocusRect(), this.followFocusJump())
        }
        followFocusJump() {
          if (this.pointer)
            if ("cursor" === (0, ld.k)().inventoryNavigation) {
              if (this.lastRect) {
                const dd = gJ(this.lastRect);
                this.pointer = {
                  x: dd.x,
                  y: dd.y,
                  speedRamp: 0
                }
              }
            } else this.releasePointer()
        }
        engagePointer() {
          const dd = this.lastRect ? gJ(this.lastRect) : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          };
          this.pointer = {
            x: dd.x,
            y: dd.y,
            speedRamp: 0
          }
        }
        releasePointer() {
          this.pointer = null, td.hide()
        }
        hoverAtPointer() {
          var dd;
          const Jd = GJ(this.pointer, this.getTargets().targets);
          this.focusTarget = Jd, (null === Jd || void 0 === Jd ? void 0 : Jd.element) !== this.focused && (this.focused = null !== (dd = null === Jd || void 0 === Jd ? void 0 : Jd.element) && void 0 !== dd ? dd : null, Jd && (this.panelMemory.set(Jd.panel, Jd.element), this.lastRect = this.readFocusRect()))
        }
        moveCursor(dd, Jd) {
          const kd = this.focusTarget,
            pd = kd && (0, ld.k)().cursorMagnetism ? gJ(RJ(kd)) : null;
          this.pointer = qd(this.pointer, {
            stick: dd.leftStick,
            moveDeadzone: (0, ld.k)().moveDeadzone,
            dpad: Jd,
            dtMs: dd.dtMs,
            cursorSpeedPercent: (0, ld.k)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: {
              overInteractive: !1,
              magnetTarget: pd
            }
          })
        }
        move(dd) {
          this.targets.revalidate();
          const Jd = this.currentTarget();
          Jd && this.setFocus(OJ(Jd, this.getTargets().targets, dd))
        }
        step(dd) {
          const Jd = this.pointer;
          if (Jd && (this.releasePointer(), !this.focused)) return this.targets.revalidate(), void this.setFocus(((dd, Jd, kd) => {
            var pd;
            const Nd = {
              key: "",
              rect: {
                left: dd.x,
                top: dd.y,
                width: 0,
                height: 0
              },
              panel: "",
              scrollGroup: null,
              visible: !0,
              clip: null
            };
            return null !== (pd = OJ(Nd, Jd, kd)) && void 0 !== pd ? pd : eJ(dd, Jd)
          })(Jd, this.getTargets().targets, dd));
          this.move(dd)
        }
        isNavButton(dd) {
          return !wJ.some((Jd => (0, Kd.j)(Jd) === dd)) && !(dd === (0, Kd.j)("inventory") && Jk())
        }
        handleNavigation(dd, Jd) {
          const kd = (0, ld.k)().inventoryNavigation,
            pd = {
              x: 0,
              y: 0
            };
          let Nd = null;
          for (const gd of Ld.C) {
            const Wd = this.isNavButton(gd) && dd.isHeld(gd);
            Wd && (pd.x += zJ[gd].x, pd.y += zJ[gd].y), this.dpadTimers.get(gd).update(Wd, Jd) && "cursor" !== kd && (Nd ??= gd)
          }
          const Wd = this.stickGate.update(dd.leftStick, (0, ld.k)().moveDeadzone);
          if (Nd && (this.step(Nd), this.stickGate.lock()), "slot" !== kd) {
            const Jd = ((dd, Jd, kd, pd) => "hybrid" !== dd ? "cursor" === dd : !pd && (Jd || kd))(kd, null !== this.pointer, Wd, null !== Nd);
            return Jd && !this.pointer && this.engagePointer(), void(this.pointer && this.moveCursor(dd, "cursor" === kd ? pd : {
              x: 0,
              y: 0
            }))
          }
          const Pd = (0, Ld.i)(dd.leftStick, (0, ld.k)().moveDeadzone),
            Zd = this.stickRepeat.update(Wd ? (0, Ld.fb)(Pd) : null, Jd);
          Zd && this.move(Zd)
        }
        applyCategoryPlace() {
          const dd = this.placeAfterCategory;
          if (!dd) return;
          this.placeAfterCategory = null, this.targets.invalidate();
          const Jd = eJ(gJ(dd.rect), this.getTargets().targets, (Jd => Jd.scrollGroup === dd.scrollGroup));
          this.setFocus(Jd, !1)
        }
        applyFocusRequest() {
          const dd = (0, wd.n)();
          dd && (this.targets.invalidate(), this.setFocus((0, wd.b)(this.getTargets().targets, dd)))
        }
        handlePanels(dd) {
          var Jd, kd, pd;
          const Nd = dd.wasPressed((0, Kd.j)("inventoryPanelPrevious")),
            Wd = dd.wasPressed((0, Kd.j)("inventoryPanelNext"));
          if (!Nd && !Wd) return;
          const {
            targets: Pd
          } = this.getTargets(), Zd = (gd = ((dd, Jd) => {
            const kd = [];
            for (const Nd of dd) Nd.visible && !kd.includes(Nd.panel) && kd.push(Nd.panel);
            const pd = dd => {
              const pd = Jd.indexOf(dd);
              return -1 === pd ? Jd.length + kd.indexOf(dd) : pd
            };
            return kd.sort(((dd, Jd) => pd(dd) - pd(Jd)))
          })(Pd, aJ), Cd = null !== (Jd = null === (kd = this.focusTarget) || void 0 === kd ? void 0 : kd.panel) && void 0 !== Jd ? Jd : null, od = Wd ? 1 : -1, 0 === gd.length ? null : gd[CJ(null === Cd ? -1 : gd.indexOf(Cd), gd.length, od)]);
          var gd, Cd, od;
          if (null === Zd) return;
          const ld = this.panelMemory.get(Zd),
            Qd = Pd.filter((dd => dd.panel === Zd)),
            Ld = null !== (pd = Qd.find((dd => dd.element === ld && dd.visible))) && void 0 !== pd ? pd : pk(Qd, (0, wd.c)());
          this.setFocus(Ld)
        }
        handlePaging(dd, Jd) {
          const kd = (0, Kd.j)("menuPageUp"),
            pd = (0, Kd.j)("menuPageDown"),
            Nd = this.pageUpTimer.update(dd.isHeld(kd), Jd),
            Wd = this.pageDownTimer.update(dd.isHeld(pd), Jd);
          if (!Nd && !Wd) return;
          const Pd = Wd ? 1 : -1;
          if (!dd.wasPressed(Wd ? pd : kd) && this.hasCategories) return;
          if ((dd => {
              const Jd = Array.from(document.querySelectorAll(".EntireInventoryWrapper .CreativeCategoryTab"));
              if (0 === Jd.length) return !1;
              const kd = Jd.findIndex((dd => dd.classList.contains("Selected"))),
                pd = Jd[CJ(kd, Jd.length, dd)];
              return (0, rd.k)(pd, (0, rd.v)(pd)), !0
            })(Pd)) {
            var Zd, gd;
            this.targets.invalidate();
            const dd = null !== (Zd = null === (gd = this.focusTarget) || void 0 === gd ? void 0 : gd.scrollGroup) && void 0 !== Zd ? Zd : null,
              Jd = this.readFocusRect();
            return void(this.placeAfterCategory = null !== dd && Jd && !this.pointer ? {
              rect: Jd,
              scrollGroup: dd
            } : null)
          }
          const {
            targets: Cd
          } = this.getTargets(), od = this.currentTarget(), ld = od && nJ(od) ? od : Cd.find((dd => nJ(dd) && dd.visible));
          if (!ld) return;
          const Qd = ((dd, Jd, kd, pd) => {
            if (null === dd.scrollGroup) return null;
            const Nd = gJ(dd.rect),
              Wd = Nd.x,
              Pd = Nd.y + ("Down" === kd ? pd : -pd);
            let Zd = null,
              gd = 1 / 0;
            for (const Cd of Jd) {
              if (Cd.scrollGroup !== dd.scrollGroup || Cd.key === dd.key) continue;
              const Jd = gJ(Cd.rect);
              if ("Down" === kd ? Jd.y <= Nd.y : Jd.y >= Nd.y) continue;
              const pd = Math.hypot(Jd.x - Wd, Jd.y - Pd);
              pd < gd && (Zd = Cd, gd = pd)
            }
            return Zd
          })(ld, Cd, Pd > 0 ? "Down" : "Up", ld.scrollContainer.clientHeight);
          this.setFocus(null !== Qd && void 0 !== Qd ? Qd : ld)
        }
        handleScroll(dd) {
          var Jd, kd, pd, Nd, Wd, Pd;
          if (!this.scroller.isScrolling(dd.rightStick)) return void this.scroller.reset();
          const {
            targets: Zd
          } = this.getTargets(), gd = this.pointer, Cd = !gd && this.focusTarget && nJ(this.focusTarget) ? this.focusTarget.scrollContainer : null, Kd = gd && (null === (Jd = Zd.find((dd => dd.clip && IJ(dd.clip, gd)))) || void 0 === Jd ? void 0 : Jd.scrollContainer), od = null !== (kd = null !== (pd = null !== (Nd = this.scroller.current()) && void 0 !== Nd ? Nd : Kd) && void 0 !== pd ? pd : Cd) && void 0 !== kd ? kd : null === (Wd = Zd.find(nJ)) || void 0 === Wd ? void 0 : Wd.scrollContainer;
          if (!od || !this.scroller.step(od, dd.rightStick, dd.dtMs)) return;
          this.targets.scrolled(od);
          const ld = gd || (null === (Pd = this.focusTarget) || void 0 === Pd ? void 0 : Pd.scrollContainer) !== od ? null : this.readFocusRect();
          if (!ld) return;
          const Qd = Xd(od),
            Ld = gJ(ld);
          if (Ld.y < Qd.top || Ld.y > Qd.bottom) {
            const dd = this.focusTarget.scrollGroup,
              Jd = eJ(Ld, this.getTargets().targets, (Jd => Jd.scrollGroup === dd));
            this.setFocus(Jd, !1)
          }
        }
        focusContext(dd) {
          const {
            kind: Jd,
            idx: kd
          } = this.focused ? bJ(this.focused) : {
            kind: null,
            idx: null
          }, pd = this.focused ? YJ(this.focused) : null, Nd = pd ? (0, uJ.b)(pd) : null;
          return {
            kind: Jd,
            idx: kd,
            actionElement: pd,
            press: Nd,
            hasPress: null !== Nd,
            hasBack: !(null === Nd || void 0 === Nd || !Nd.back),
            holding: dd.isHolding(),
            slotHasItem: null !== kd && dd.hasItemAt(kd)
          }
        }
        handleButtons(dd, Jd, kd) {
          var pd, Nd;
          if (!this.activePress || dd.isHeld(this.activePress.button) && (pd = this.activePress.target, Nd = this.focused, null !== pd.recipe ? mJ(Nd).recipe === pd.recipe : Nd === pd.element) || this.releasePress(), this.scrollStickClick.update(dd.rightStick, Jd), !this.handleHotbarPick(dd, kd)) {
            for (const [pd, Nd] of HJ) {
              const Wd = (0, Kd.j)(Nd);
              if (!dd.wasPressed(Wd) || "openButton" === pd && !Jk()) continue;
              if ("RS" === Wd && !this.scrollStickClick.allowsClick(Jd)) continue;
              const Pd = this.focusContext(kd),
                Zd = zd(pd, Pd);
              Zd && this.runIntent(Zd, Pd, Wd, kd)
            }
            this.handleDrop(dd, Jd, kd)
          }
        }
        handleHotbarPick(dd, Jd) {
          const kd = this.hotbarPick;
          if (!kd) return !1;
          const pd = dd.wasPressed((0, Kd.j)("inventoryPrimary")) || dd.wasPressed((0, Kd.j)("inventoryHotbarSwap"));
          if (!pd && !dd.wasPressed((0, Kd.j)("inventoryClose")) && !Jd.isHolding()) return !(dd.wasPressed((0, Kd.j)("inventory")) && Jk());
          const Nd = this.focusTarget;
          pd && "hotbar" === (null === Nd || void 0 === Nd ? void 0 : Nd.panel) && null !== Nd.idx && Nd.idx !== kd.idx && (Jd.swapWithHotbar(Nd.idx, kd.idx), this.afterAction()), this.hotbarPick = null;
          const Wd = kd.element.isConnected ? this.getTargets().byElement.get(kd.element) : void 0;
          return Wd && this.setFocus(Wd), !0
        }
        startHotbarPick(dd) {
          var Jd;
          const {
            targets: kd,
            byElement: pd
          } = this.getTargets(), Nd = document.querySelector(VJ), Wd = null !== (Jd = Nd && pd.get(Nd)) && void 0 !== Jd ? Jd : kd.find((dd => "hotbar" === dd.panel));
          Wd && this.focused && (this.hotbarPick = {
            idx: dd,
            element: this.focused
          }, this.setFocus(Wd))
        }
        focusKey() {
          return this.focused ? pJ(this.focused) : null
        }
        handleDrop(dd, Jd, kd) {
          const pd = (0, Kd.j)("inventoryDrop");
          if (dd.wasPressed(pd)) {
            const dd = (Nd = this.focusContext(kd)).holding ? {
              kind: "EC"
            } : "slot" === Nd.kind && Nd.slotHasItem && null !== Nd.idx ? {
              kind: "slot",
              idx: Nd.idx
            } : null;
            return void(dd && (this.dropFrom(dd, !1, kd), this.dropLatch.press(dd, this.focusKey(), Jd, ed.d[(0, ld.k)().tapHoldTime].dropStackMs), this.afterAction()))
          }
          var Nd;
          const Wd = this.dropLatch.update(dd.isHeld(pd), this.focusKey(), Jd);
          Wd && ((dd, Jd, kd) => "EC" === dd.kind ? Jd : !Jd && kd(dd.idx))(Wd, kd.isHolding(), kd.hasItemAt) && (this.dropFrom(Wd, !0, kd), this.afterAction())
        }
        dropFrom(dd, Jd, kd) {
          "EC" === dd.kind ? kd.dropHeld(Jd, this.slotPoint()) : kd.dropSlot(dd.idx, Jd)
        }
        slotPoint() {
          return this.pointer ? {
            clientX: this.pointer.x,
            clientY: this.pointer.y
          } : this.lastRect ? (dd => {
            const Jd = gJ(dd);
            return {
              clientX: Jd.x,
              clientY: Jd.y
            }
          })(this.lastRect) : {
            clientX: 0,
            clientY: 0
          }
        }
        runIntent(dd, Jd, kd, pd) {
          const Nd = Jd.idx,
            Wd = Jd.actionElement;
          switch (Wd && kk.has(dd) && (0, Rd.u)(Wd), dd) {
            case "slotPrimary":
              pd.primary(Nd, this.slotPoint());
              break;
            case "slotSecondary":
              pd.secondary(Nd, this.slotPoint());
              break;
            case "slotQuickMove":
              pd.quickMove(Nd, this.slotPoint());
              break;
            case "hotbarPick":
              this.startHotbarPick(Nd);
              break;
            case "pressPrimary":
            case "pressSecondary":
              this.startPress(Jd.press, "pressPrimary" === dd ? "primary" : "secondary", kd);
              break;
            case "click":
              (0, rd.k)(Wd, (0, rd.v)(Wd));
              break;
            case "openKeyboard":
              (0, rd.D)(Wd) && (0, rd.B)(Wd);
              break;
            case "pressBack":
              Jd.press.back();
              break;
            case "cancel":
              pd.cancel();
              break;
            case "close":
              return this.releasePress(), void pd.close()
          }
          this.afterAction()
        }
        startPress(dd, Jd, kd) {
          this.releasePress(), dd.press(Jd) && (this.activePress = {
            handlers: dd,
            button: kd,
            target: mJ(this.focused)
          })
        }
        releasePress() {
          var dd, Jd, kd;
          null === (dd = this.activePress) || void 0 === dd || null === (Jd = (kd = dd.handlers).release) || void 0 === Jd || Jd.call(kd), this.activePress = null
        }
        afterAction() {
          this.targets.invalidate(), this.hover.invalidate()
        }
        publishState(dd) {
          ((dd, Jd) => {
            var kd, pd, Nd, Wd, Pd, Zd;
            return dd.showing === Jd.showing && dd.kind === Jd.kind && dd.holding === Jd.holding && dd.slotHasItem === Jd.slotHasItem && (null === (kd = dd.pressHints) || void 0 === kd ? void 0 : kd.primary) === (null === (pd = Jd.pressHints) || void 0 === pd ? void 0 : pd.primary) && (null === (Nd = dd.pressHints) || void 0 === Nd ? void 0 : Nd.secondary) === (null === (Wd = Jd.pressHints) || void 0 === Wd ? void 0 : Wd.secondary) && (null === (Pd = dd.pressHints) || void 0 === Pd ? void 0 : Pd.back) === (null === (Zd = Jd.pressHints) || void 0 === Zd ? void 0 : Zd.back) && dd.hasCategories === Jd.hasCategories && dd.hasList === Jd.hasList && dd.openButtonCloses === Jd.openButtonCloses && dd.steppingSlots === Jd.steppingSlots && dd.hotbarPicking === Jd.hotbarPicking && dd.quickMoveToHotbar === Jd.quickMoveToHotbar && dd.dropStackHold === Jd.dropStackHold
          })(dd, this.state) || (this.state = dd, Cd.j.nO(yJ.c, dd))
        }
      },
      Pk = ["pointermove", "pointerover", "pointerout", "mouseover", "mouseout"];
    var Zk = kd(8603),
      gk = kd(300),
      Ck = kd(1670),
      Kk = kd(8039);
    const lk = "[data-pad-secondary]",
      Qk = dd => dd instanceof HTMLElement && (0, Ad.n)(dd) && !(0, Ad.t)(dd),
      Lk = dd => {
        const Jd = dd.querySelector(lk);
        if (Jd && Qk(Jd)) return Jd;
        for (const Nd of null !== (kd = null === (pd = dd.parentElement) || void 0 === pd ? void 0 : pd.children) && void 0 !== kd ? kd : []) {
          var kd, pd;
          if (Nd !== dd && Nd.matches(lk) && Qk(Nd)) return Nd
        }
        return null
      },
      Ok = (dd, Jd, kd, pd) => Math.max(0, Math.max(dd, kd) - Math.min(Jd, pd)),
      ek = (dd, Jd, kd, pd) => Math.max(0, Math.min(Jd, pd) - Math.max(dd, kd)),
      Rk = (dd, Jd, kd) => {
        const pd = (dd.left + dd.right) / 2,
          Nd = (dd.top + dd.bottom) / 2,
          Wd = (Jd.left + Jd.right) / 2,
          Pd = (Jd.top + Jd.bottom) / 2;
        if ("Left" === kd || "Right" === kd) {
          const Zd = "Right" === kd ? 1 : -1;
          return {
            forwardGap: "Right" === kd ? Jd.left - dd.right : dd.left - Jd.right,
            centreForward: (Wd - pd) * Zd,
            sidewaysGap: Ok(dd.top, dd.bottom, Jd.top, Jd.bottom),
            sidewaysOverlap: ek(dd.top, dd.bottom, Jd.top, Jd.bottom),
            centreSideways: Math.abs(Pd - Nd),
            startSideways: Math.abs(Jd.top - dd.top),
            fromSidewaysSize: dd.bottom - dd.top,
            toSidewaysSize: Jd.bottom - Jd.top,
            toLength: Jd.right - Jd.left
          }
        }
        const Zd = "Down" === kd ? 1 : -1;
        return {
          forwardGap: "Down" === kd ? Jd.top - dd.bottom : dd.top - Jd.bottom,
          centreForward: (Pd - Nd) * Zd,
          sidewaysGap: Ok(dd.left, dd.right, Jd.left, Jd.right),
          sidewaysOverlap: ek(dd.left, dd.right, Jd.left, Jd.right),
          centreSideways: Math.abs(Wd - pd),
          startSideways: Math.abs(Jd.left - dd.left),
          fromSidewaysSize: dd.right - dd.left,
          toSidewaysSize: Jd.right - Jd.left,
          toLength: Jd.bottom - Jd.top
        }
      },
      Ik = dd => dd.centreForward > .5 && dd.forwardGap >= -dd.toLength / 2,
      Gk = dd => {
        const Jd = dd.sidewaysOverlap > 0 ? 0 : 2 * dd.fromSidewaysSize,
          kd = dd.fromSidewaysSize > 1.5 * dd.toSidewaysSize ? dd.startSideways : dd.centreSideways;
        return Math.max(0, dd.forwardGap) + 3 * dd.sidewaysGap + Jd + .1 * kd
      },
      vk = (dd, Jd) => ek(dd.top, dd.bottom, Jd.top, Jd.bottom) > 0 || Jd.bottom - Jd.top > Jd.right - Jd.left,
      xk = (dd, Jd, kd, pd, Nd, Wd) => {
        const Pd = Nd ? Bk(dd, Jd, kd, Nd) : new Set,
          Zd = ik(dd, Jd, kd, Pd);
        return Zd < 0 && Pd.size > 0 && Wd ? qk(dd, Jd, kd, Wd) : pd && Zd >= 0 ? sk(dd, Jd, kd, pd, Zd, Pd) : Zd
      },
      qk = (dd, Jd, kd, pd) => {
        const Nd = new Set,
          Wd = ik(dd, Jd, "Up", Nd) >= 0,
          Pd = ik(dd, Jd, "Down", Nd) >= 0,
          Zd = new Set;
        return Jd.forEach(((Jd, kd) => {
          const Nd = Jd.top + Jd.bottom < dd.top + dd.bottom;
          pd[kd] && !(Nd ? Wd : Pd) || Zd.add(kd)
        })), ik(dd, Jd, kd, Zd)
      },
      Bk = (dd, Jd, kd, pd) => {
        const Nd = new Set;
        return "Left" !== kd && "Right" !== kd || Jd.forEach(((Jd, kd) => {
          pd[kd] && ek(dd.top, dd.bottom, Jd.top, Jd.bottom) <= 0 && Nd.add(kd)
        })), Nd
      },
      sk = (dd, Jd, kd, pd, Nd, Wd) => {
        const Pd = Rk(dd, Jd[Nd], kd).forwardGap;
        let Zd = Nd,
          gd = pd[Nd],
          Cd = 1 / 0;
        return Jd.forEach(((Jd, Kd) => {
          const od = pd[Kd];
          if (Wd.has(Kd) || od < gd || od === gd && Zd === Nd) return;
          const ld = Rk(dd, Jd, kd);
          if (!Ik(ld) || ld.forwardGap < 0 || ld.forwardGap >= Pd) return;
          const Qd = Gk(ld);
          (od > gd || Qd < Cd) && (Zd = Kd, gd = od, Cd = Qd)
        })), Zd
      },
      ik = (dd, Jd, kd, pd) => {
        let Nd = -1,
          Wd = 1 / 0;
        if (Jd.forEach(((Jd, Pd) => {
            const Zd = ((dd, Jd, kd) => {
              const pd = Rk(dd, Jd, kd);
              if (!Ik(pd)) return null;
              const Nd = Math.max(0, pd.forwardGap);
              return pd.sidewaysOverlap <= 0 && pd.sidewaysGap > 2 * (Nd + 1) ? null : Gk(pd)
            })(dd, Jd, kd);
            null !== Zd && Zd < Wd && !pd.has(Pd) && (Wd = Zd, Nd = Pd)
          })), Nd < 0) return -1;
        const Pd = Jd[Nd],
          Zd = Rk(dd, Pd, kd).forwardGap;
        let gd = Zd,
          Cd = Nd;
        return Jd.forEach(((Jd, Wd) => {
          if (Wd === Nd || pd.has(Wd) || !((dd, Jd, kd) => {
              const pd = "Left" === kd || "Right" === kd,
                Nd = pd ? ek(dd.top, dd.bottom, Jd.top, Jd.bottom) : ek(dd.left, dd.right, Jd.left, Jd.right),
                Wd = pd ? Math.min(dd.bottom - dd.top, Jd.bottom - Jd.top) : Math.min(dd.right - dd.left, Jd.right - Jd.left);
              return Nd > 0 && Nd >= Wd / 2
            })(Jd, Pd, kd)) return;
          const Kd = Rk(dd, Jd, kd);
          Ik(Kd) && Kd.forwardGap + Kd.toLength <= Zd + 1 && Kd.forwardGap < gd && (gd = Kd.forwardGap, Cd = Wd)
        })), Cd
      },
      ak = (dd, Jd) => {
        let kd = -1,
          pd = 1 / 0;
        return Jd.forEach(((Jd, Nd) => {
          const Wd = Math.max(Jd.left - dd.x, 0, dd.x - Jd.right),
            Pd = Math.max(Jd.top - dd.y, 0, dd.y - Jd.bottom),
            Zd = Math.hypot(Wd, Pd);
          Zd < pd && (pd = Zd, kd = Nd)
        })), kd
      },
      Mk = (dd, Jd) => {
        const kd = Math.min(dd.bottom - dd.top, Jd.bottom - Jd.top) / 2;
        return Math.abs(dd.top - Jd.top) > kd ? dd.top - Jd.top : dd.left - Jd.left
      },
      Fk = dd => {
        let Jd = -1;
        for (let kd = 0; kd < dd.length; kd++)(Jd < 0 || Mk(dd[kd], dd[Jd]) < 0) && (Jd = kd);
        return Jd
      };
    var Yk = kd(1723),
      mk = kd(8605),
      bk = kd(8613);
    const Sk = dd => {
        if ("death" !== dd || "inGame" !== gd.d.get("gameState") || "off" === (0, ld.k)().quickChat || null === (0, Yk.c)()) return !1;
        const Jd = (0, Kd.j)("chat");
        return Jd !== (0, Kd.j)("menuConfirm") && Jd !== (0, Kd.j)("menuBack")
      },
      jk = new mk.b;
    var Xk = kd(4144),
      fk = kd(8620);
    const nk = dd => {
        let Jd = null;
        for (const kd of dd.querySelectorAll("[data-pad-tabs]"))(0, Ad.n)(kd) && (!Jd || Number(kd.dataset.padTabs) < Number(Jd.dataset.padTabs)) && (Jd = kd);
        return Jd
      },
      Uk = (dd, Jd, kd, pd) => {
        dd.focusWhenFound((() => {
          const Nd = dd.pickInitial(Jd);
          if (Nd && !kd.has(Nd) && (null === pd || void 0 === pd || !pd.contains(Nd))) return Nd;
          const Wd = ((dd, Jd) => {
              const kd = Jd => dd.getEnabledCandidates(Jd).filter((dd => !dd.closest("[data-pad-tabs]")));
              for (const pd of (0, Ad.h)(Jd)) {
                const dd = kd(pd);
                if (dd.length > 0) return dd
              }
              return kd(Jd)
            })(dd, Jd).filter((dd => !kd.has(dd))),
            Pd = Fk(Wd.map((dd => dd.getBoundingClientRect())));
          return Pd >= 0 ? Wd[Pd] : null
        }), 3e3)
      },
      yk = (dd, Jd, kd, pd) => {
        var Nd;
        const Wd = ((dd, Jd) => {
          if (0 === dd.length) return null;
          const kd = dd.findIndex((dd => "true" === dd.dataset.padSelected));
          return kd < 0 ? Jd > 0 ? dd[0] : dd[dd.length - 1] : dd[(kd + Jd + dd.length) % dd.length]
        })([...kd.querySelectorAll("[data-pad-tab]")].filter((dd => (0, Ad.n)(dd) && !(0, Ad.t)(dd))), pd);
        if (!Wd) return;
        const Pd = null !== (Nd = null === dd || void 0 === dd ? void 0 : dd.getFocused()) && void 0 !== Nd ? Nd : null,
          Zd = !(null === Pd || void 0 === Pd || !Pd.isConnected) && kd.contains(Pd),
          gd = dd && !Zd ? new Set(dd.getEnabledCandidates(Jd)) : null;
        (0, rd.c)(Wd), dd && (gd ? Uk(dd, Jd, gd, kd) : dd.setFocus(Wd, {
          byUser: !0
        }))
      },
      Dk = dd => {
        var Jd;
        const kd = Xd(null !== (Jd = Fd(dd, "x")) && void 0 !== Jd ? Jd : dd),
          pd = (0, Ad.g)(dd).filter((dd => !(0, Ad.t)(dd))),
          Nd = pd.filter((dd => fd(dd.getBoundingClientRect(), kd)));
        return (Nd.length > 0 ? Nd : pd).sort(((dd, Jd) => Mk(dd.getBoundingClientRect(), Jd.getBoundingClientRect())))
      },
      Tk = (dd, Jd, kd) => {
        const pd = [...Jd.querySelectorAll("[data-pad-row]")].filter(Ad.n),
          Nd = dd.getFocused(),
          Wd = Nd ? pd.findIndex((dd => dd.contains(Nd))) : -1;
        let Pd = 0,
          Zd = kd > 0 ? 0 : pd.length - 1;
        if (Wd >= 0 && Nd) Pd = Math.max(0, Dk(pd[Wd]).indexOf(Nd)), Zd = Wd + kd;
        else if (Nd) {
          const dd = Nd.getBoundingClientRect(),
            Jd = pd.map((Jd => {
              const pd = Jd.getBoundingClientRect();
              return kd > 0 ? pd.top >= dd.top : pd.bottom <= dd.bottom
            }));
          Zd = kd > 0 ? Jd.indexOf(!0) : Jd.lastIndexOf(!0)
        }
        for (let gd = Zd; gd >= 0 && gd < pd.length; gd += kd) {
          const Jd = Dk(pd[gd]);
          if (Jd.length > 0) return void dd.setFocus(Jd[Math.min(Pd, Jd.length - 1)], {
            byUser: !0
          })
        }
      },
      Ek = (dd, Jd, kd) => {
        var pd, Nd;
        const Wd = null !== (pd = null === dd || void 0 === dd ? void 0 : dd.getFocused()) && void 0 !== pd ? pd : null,
          Pd = null !== Wd && void 0 !== Wd && Wd.closest("[data-pad-row]") ? "x" : "y",
          Zd = null !== (Nd = Wd ? Fd(Wd, Pd, Jd) : null) && void 0 !== Nd ? Nd : md(Jd, Pd);
        if (!Zd) return;
        const gd = Wd ? (0, rd.v)(Wd) : null;
        if (jd(Zd, Pd, kd * ("y" === Pd ? Zd.clientHeight : Zd.clientWidth) * .85), !dd || !gd) return;
        const Cd = Xd(Zd),
          Kd = dd.getEnabledCandidates(Jd).filter((dd => Zd.contains(dd) && fd(dd.getBoundingClientRect(), Cd))),
          od = ak(gd, Kd.map((dd => dd.getBoundingClientRect())));
        od >= 0 && dd.setFocus(Kd[od], {
          scroll: !1,
          byUser: !0
        })
      };
    let ck = null;
    const hk = (dd, Jd) => {
        var kd, pd;
        const Nd = Jd.querySelector("[data-pad-friends-column]"),
          Wd = dd.getFocused();
        if (!Nd || !Wd || !Nd.contains(Wd)) return !1;
        const Pd = dd.getEnabledCandidates(Jd).filter((dd => !Nd.contains(dd))),
          Zd = ak((0, rd.v)(Wd), Pd.map((dd => dd.getBoundingClientRect()))),
          gd = null === (kd = ck) || void 0 === kd ? void 0 : kd.deref();
        return dd.setFocus(null !== gd && void 0 !== gd && gd.isConnected ? gd : null !== (pd = Pd[Zd]) && void 0 !== pd ? pd : null, {
          byUser: !0
        }), !0
      },
      rk = dd => {
        const Jd = (0, Kd.j)(dd);
        return (0, Ld.G)(Jd) || Kk.l.some((dd => (0, Kd.j)(dd) === Jd)) ? null : Jd
      },
      uk = (dd, Jd) => {
        const kd = rk(Jd);
        return null !== kd && dd.wasPressed(kd)
      },
      tk = function(dd, Jd, kd) {
        let pd = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const Nd = (dd => {
            var Jd, kd;
            return null !== (Jd = null === (kd = nk(dd)) || void 0 === kd ? void 0 : kd.querySelector("[data-pad-tab][data-pad-selected='true']")) && void 0 !== Jd ? Jd : null
          })(Jd),
          Wd = dd && Nd ? new Set(dd.getEnabledCandidates(Jd)) : null;
        (0, Zk.b)(), kd === gk.s.SETTINGS && (0, Ck.k)(gd.d.get("openEverythingMenuName")) ? gd.d.set({
          openEverythingMenuName: kd
        }) : (0, Ck.t)(new Event("padMenuShortcut"), kd, pd), dd && Wd && Nd && Uk(dd, Jd, Wd, Nd.closest("[data-pad-tabs]"))
      },
      Vk = dd => null !== dd.closest(".Dropdown-root") || null !== dd.querySelector(".Dropdown-root.is-open"),
      zk = dd => null !== (0, fk.e)() && "popup" !== dd.layer.kind && !nk(dd.root) && !Vk(dd.root),
      Hk = (0, Od.c)(Ld.Z),
      wk = (0, Od.c)(Ld.Z),
      Ak = (dd, Jd, kd) => {
        if (((dd, Jd) => {
            const kd = (0, Kd.j)("chat");
            return Sk(Jd) && dd.isHeld(kd) ? "hold" === jk.update(dd.wasPressed(kd), dd.isHeld(kd), performance.now(), ed.d[(0, ld.k)().tapHoldTime].wheelMs) && (od.e.consumeButton(kd), Cd.j.nO(bk.l), !0) : (jk.release(), !1)
          })(Jd, kd.layer.kind)) return !0;
        const pd = kd.root;
        for (const [Pd, Zd] of [
            ["menuTabPrevious", -1],
            ["menuTabNext", 1]
          ])
          if (Jd.wasPressed((0, Kd.j)(Pd))) {
            const Jd = Vk(pd) ? null : nk(pd);
            if (Jd) yk(dd, pd, Jd, Zd);
            else if (zk(kd)) {
              var Nd;
              const Jd = dd ? new Set(dd.getEnabledCandidates(pd)) : null;
              null !== (Nd = (0, fk.e)()) && void 0 !== Nd && Nd(Zd) && dd && Jd && Uk(dd, pd, Jd, null)
            } else dd && Tk(dd, pd, Zd);
            return !0
          } for (const [Pd, Zd, gd] of [
            ["menuPageUp", -1, Hk],
            ["menuPageDown", 1, wk]
          ]) {
          const kd = (0, Kd.j)(Pd);
          if (Jd.wasPressed(kd) && gd.reset(), gd.update(Jd.isHeld(kd), performance.now())) return Ek(dd, pd, Zd), !0
        }
        const Wd = "popup" === kd.layer.kind;
        return uk(Jd, "pause") ? (Wd || (0, Ck.q)() && "menu" !== kd.layer.kind || tk(dd, pd, (0, Ck.q)() ? gk.s.SETTINGS : (0, Xk.d)()), !0) : !!uk(Jd, "leaderboard") && ("home" === kd.layer.kind ? (dd => {
          const Jd = [...dd.querySelectorAll("[data-pad-notifications]")].find(Ad.n);
          Jd && (0, rd.c)(Jd)
        })(pd) : Wd || tk(dd, pd, gk.s.LOBBY_LEADERBOARD, "inGame" === gd.d.get("gameState")), !0)
      },
      dp = (dd, Jd, kd) => {
        if (Ak(dd, Jd, kd)) return !0;
        const pd = "home" === kd.layer.kind;
        if (Jd.wasPressed((0, Kd.j)("menuSecondary"))) {
          const Jd = dd.getFocused(),
            Nd = Jd ? Lk(Jd) : null;
          if (Nd) return (0, rd.c)(Nd), !0;
          if (pd) {
            const Jd = kd.root.querySelector("[data-pad-search] input");
            return Jd && (0, Ad.q)(Jd, kd.root) ? (dd.setFocus(Jd, {
              byUser: !0
            }), (0, rd.c)(Jd)) : gd.d.set({
              searchOpen: !0
            }), !0
          }
        }
        return !(!pd || !uk(Jd, "inventory")) && (((dd, Jd) => {
          var kd, pd;
          const Nd = Jd.querySelector("[data-pad-friends-column]");
          if (!Nd || !(0, Ad.n)(Nd)) return void(0, Ck.t)(new Event("padMenuShortcut"), gk.s.SOCIAL);
          if (hk(dd, Jd)) return;
          const Wd = null !== (kd = null === (pd = Nd.querySelector("[data-pad-friends-start]")) || void 0 === pd ? void 0 : pd.getBoundingClientRect().top) && void 0 !== kd ? kd : -1 / 0,
            Pd = dd.getEnabledCandidates(Nd),
            Zd = Pd.filter((dd => dd.getBoundingClientRect().top >= Wd)),
            gd = Zd.length > 0 ? Zd : Pd,
            Cd = Fk(gd.map((dd => dd.getBoundingClientRect())));
          dd.setFocus(Cd >= 0 ? gd[Cd] : null, {
            byUser: !0
          })
        })(dd, kd.root), !0)
      },
      Jp = dd => {
        var Jd, kd, pd;
        const Nd = (0, rd.w)(dd);
        if (null !== Nd) return Nd;
        const Wd = (null !== (Jd = null !== (kd = null !== (pd = dd.getAttribute("aria-label")) && void 0 !== pd ? pd : dd.getAttribute("title")) && void 0 !== kd ? kd : dd.textContent) && void 0 !== Jd ? Jd : "").replace(/\s+/g, " ").trim();
        return Wd ? `${dd.tagName}:${Wd.slice(0,100)}` : null
      };
    class kp {
      constructor() {
        this.remembered = new Map, this.history = []
      }
      enter(dd) {
        const Jd = this.history.indexOf(dd);
        if (Jd >= 0) {
          for (const dd of this.history.splice(Jd + 1)) this.remembered.delete(dd);
          return !0
        }
        return this.remembered.delete(dd), this.history.push(dd), this.history.length > 32 && this.forget(this.history[0]), !1
      }
      forget(dd) {
        this.remembered.delete(dd);
        const Jd = this.history.indexOf(dd);
        Jd >= 0 && this.history.splice(Jd, 1)
      }
      remember(dd, Jd, kd, pd) {
        const Nd = Jp(Jd),
          Wd = (0, rd.w)(Jd),
          Pd = null !== Wd && ((dd, Jd) => {
            let kd = 0;
            for (const pd of dd.querySelectorAll("[data-pad-key], [href]"))
              if ((pd.getAttribute("data-pad-key") === Jd || pd.getAttribute("href") === Jd) && (kd++, kd > 1)) return !0;
            return !1
          })(kd, Wd) ? Math.max(0, this.twins(pd(), Wd).indexOf(Jd)) : 0;
        this.remembered.set(dd, {
          element: new WeakRef(Jd),
          identity: Nd,
          ordinal: Pd
        })
      }
      has(dd) {
        return this.remembered.has(dd)
      }
      recall(dd, Jd) {
        var kd, pd;
        const Nd = this.remembered.get(dd);
        if (!Nd) return null;
        const Wd = Nd.element.deref();
        if (Wd && Jd.includes(Wd)) return Wd;
        if (null === Nd.identity) return null;
        const Pd = this.twins(Jd, Nd.identity);
        return null !== (kd = null !== (pd = Pd[Nd.ordinal]) && void 0 !== pd ? pd : Pd[0]) && void 0 !== kd ? kd : null
      }
      twins(dd, Jd) {
        return dd.filter((dd => Jp(dd) === Jd))
      }
    }
    var pp = kd(1302);
    const Np = dd => {
        const Jd = [];
        let kd = dd;
        for (; kd && kd !== document.body;) {
          const dd = getComputedStyle(kd).zIndex;
          "auto" !== dd && Jd.push(Number(dd) || 0), kd = kd.parentElement
        }
        return Jd.reverse()
      },
      Wp = (dd, Jd) => {
        const kd = ((dd, Jd) => {
          const kd = Math.max(dd.length, Jd.length);
          for (let Wd = 0; Wd < kd; Wd++) {
            var pd, Nd;
            const kd = (null !== (pd = dd[Wd]) && void 0 !== pd ? pd : 0) - (null !== (Nd = Jd[Wd]) && void 0 !== Nd ? Nd : 0);
            if (0 !== kd) return kd
          }
          return 0
        })(Np(dd), Np(Jd));
        if (0 !== kd) return kd > 0;
        if (dd.contains(Jd)) return !1;
        if (Jd.contains(dd)) return !0;
        const pd = dd.compareDocumentPosition(Jd);
        return !!(pd & Node.DOCUMENT_POSITION_PRECEDING) || !(pd & Node.DOCUMENT_POSITION_FOLLOWING) && null
      },
      Pp = (dd, Jd) => {
        var kd;
        return null !== (kd = Wp(dd.root, Jd.root)) && void 0 !== kd ? kd : dd.order > Jd.order
      },
      Zp = (dd, Jd) => Jd.some((Jd => !Jd.contains(dd) && !dd.contains(Jd) && !0 === Wp(Jd, dd)));
    let gp = null,
      Cp = null,
      Kp = -1;
    const op = () => {
        var dd;
        const Jd = null === (dd = document.timeline) || void 0 === dd ? void 0 : dd.currentTime,
          kd = "number" === typeof Jd ? Jd : null;
        if (null !== kd && kd === Cp && Kp === (0, pp.b)()) return gp;
        let pd = null;
        const Nd = [],
          Wd = [...document.querySelectorAll("[data-pad-covers]")].filter(Ad.n);
        for (const Pd of (0, pp.d)()) {
          const dd = Pd.getRoot(),
            Jd = !!dd && (0, Ad.n)(dd) && !Zp(dd, Wd);
          if (Pd.shown && !Jd && Nd.push(Pd), Pd.shown = Jd, !dd || !Jd) continue;
          const kd = {
            layer: Pd,
            root: dd,
            order: Pd.order
          };
          pd && !Pp(kd, pd) || (pd = kd)
        }
        gp = pd, Cp = kd, Kp = (0, pp.b)();
        for (const Pd of Nd)(0, pp.g)(Pd);
        return gp
      },
      lp = () => {
        const dd = op();
        return !(null === dd || void 0 === dd || !dd.layer.close) && (dd.layer.close(), Cp = null, !0)
      },
      Qp = () => {
        var dd, Jd;
        return null !== (dd = null === (Jd = op()) || void 0 === Jd ? void 0 : Jd.root) && void 0 !== dd ? dd : null
      },
      Lp = dd => dd ? {
        ...dd,
        root: Qp()
      } : null;
    let Op = null,
      ep = null,
      Rp = (0, ld.k)().menuNavigation,
      Ip = null;
    const Gp = new xd;
    let vp = null;
    Cd.j.subscribe(ld.i, (() => {
      const dd = (0, ld.k)().menuNavigation;
      dd !== Rp && (Rp = dd, Op = null, ep = null)
    }));
    const xp = () => {
        var dd;
        return null !== (dd = Op) && void 0 !== dd ? dd : (0, ld.k)().menuNavigation
      },
      qp = dd => {
        if (ap()) {
          if (Ip = Lp(dd), "hybrid" === xp()) return Gp.lock(), void(ep = ep ? null : Qp());
          Op = "focus" === xp() ? "cursor" : "focus"
        }
      },
      Bp = () => {
        const dd = Ip;
        return Ip = null, dd
      };
    let sp = {
      root: null,
      firstSeenMs: -1 / 0,
      atMs: -1 / 0,
      has: !1
    };
    const ip = function(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const kd = sp.root === dd,
          pd = kd ? sp.firstSeenMs : Jd,
          Nd = sp.has || Jd - pd > 1e3;
        return (!kd || !Nd || Jd - sp.atMs > 250) && (sp = {
          root: dd,
          firstSeenMs: pd,
          atMs: Jd,
          has: (0, Ad.l)(dd)
        }), sp.has
      },
      ap = () => {
        const dd = Qp();
        return null !== dd && ip(dd)
      },
      Mp = () => {
        const dd = op();
        return ep && (null === dd || void 0 === dd ? void 0 : dd.root) !== ep && (ep = null), (dd => {
          let {
            mode: Jd,
            hasLayer: kd,
            hasCandidates: pd,
            hybridCursorEngaged: Nd
          } = dd;
          return kd ? "cursor" !== Jd && pd() ? "hybrid" === Jd && Nd ? "cursor" : "focus" : "cursor" : null
        })({
          mode: xp(),
          hasLayer: null !== dd,
          hasCandidates: () => null !== dd && ip(dd.root),
          hybridCursorEngaged: null !== ep
        })
      },
      Fp = () => "hybrid" === xp() && ap(),
      Yp = "pad-focused";
    var mp = kd(4400),
      bp = kd(4907);
    const Sp = "[data-pad-destructive]",
      jp = `${Sp}, [data-pad-back]`,
      Xp = dd => ({
        rect: dd.getBoundingClientRect(),
        destructive: dd.matches(Sp),
        closes: null !== dd.closest("[data-pad-close-button]"),
        unavailable: dd.matches("[data-pad-unavailable]")
      }),
      fp = dd => {
        let {
          destructive: Jd,
          closes: kd,
          unavailable: pd
        } = dd;
        return Jd ? kd ? 2 : 3 : pd ? 1 : 0
      },
      np = dd => {
        let Jd = -1;
        for (let kd = 0; kd < dd.length; kd++) {
          if (Jd < 0) {
            Jd = kd;
            continue
          }
          const pd = dd[kd],
            Nd = dd[Jd];
          fp(pd) === fp(Nd) ? Mk(pd.rect, Nd.rect) < 0 && (Jd = kd) : fp(pd) < fp(Nd) && (Jd = kd)
        }
        return Jd
      },
      Up = "[data-pad-tabs]",
      yp = "[data-pad-tab]",
      Dp = (dd, Jd) => {
        const kd = dd.querySelector(`${yp}[data-pad-selected='true']`);
        return kd && Jd.includes(kd) ? kd : null
      },
      Tp = (dd, Jd) => {
        let kd = Jd;
        for (let pd = Jd.parentElement; pd && !pd.contains(dd); pd = pd.parentElement) kd = pd;
        return kd
      };
    class Ep {
      constructor() {
        this.contentReturn = null
      }
      redirect(dd, Jd, kd, pd) {
        var Nd, Wd;
        const Pd = dd.closest(Up),
          Zd = Jd.closest(Up);
        var gd;
        if (Zd && Zd !== Pd) return Pd || (this.contentReturn = new WeakRef(dd)), null !== (gd = Dp(Zd, kd)) && void 0 !== gd ? gd : Jd;
        if (!Pd || Zd) return Jd;
        const Cd = Tp(dd, Jd),
          Kd = null === (Nd = this.contentReturn) || void 0 === Nd ? void 0 : Nd.deref();
        return Kd && Cd.contains(Kd) && kd.includes(Kd) ? Kd : null !== (Wd = this.pickRegionStart(Cd, Fd(Jd, "y", pd), kd)) && void 0 !== Wd ? Wd : Jd
      }
      findTabContent(dd, Jd, kd) {
        const pd = dd.closest(Up);
        if (!pd || !dd.matches(yp) || pd.contains(Jd)) return null;
        const Nd = Jd.closest(Up);
        if (Nd && Number(Nd.dataset.padTabs) <= Number(pd.dataset.padTabs)) return null;
        const Wd = Tp(dd, Jd);
        return kd.some((dd => Wd.contains(dd) && !dd.closest(jp))) || !Jd.closest(jp) ? Wd : null
      }
      pickContentStart(dd, Jd, kd) {
        return this.contentReturn = null, this.pickRegionStart(dd, Fd(dd, "y", kd), Jd)
      }
      pickReplacedContentStart(dd, Jd, kd, pd) {
        if (!Jd.contains(dd)) return null;
        const Nd = Tp(Jd, dd),
          Wd = kd.filter((dd => Jd.contains(dd) && !Nd.contains(dd) && !dd.closest(jp)));
        return 0 === Wd.length ? null : (this.contentReturn = null, this.pickRegionStart(Jd, Fd(Wd[0], "y", pd), Wd))
      }
      backToStrip(dd, Jd, kd) {
        if (dd.closest(Up)) return null;
        const pd = nk(kd);
        for (const Nd of kd.querySelectorAll(Up)) {
          if (Number(Nd.dataset.padTabs) <= 1 || Nd === pd) continue;
          const Wd = Dp(Nd, Jd),
            Pd = Wd ? Tp(dd, Nd).parentElement : null;
          if (Wd && Pd && Pd !== kd && kd.contains(Pd)) return this.contentReturn = new WeakRef(dd), Wd
        }
        return null
      }
      pickRegionStart(dd, Jd, kd) {
        const pd = Xd(Jd),
          Nd = dd => {
            const Jd = kd.filter((Jd => dd.contains(Jd) && !Jd.closest(Up) && fd(Jd.getBoundingClientRect(), pd))),
              Nd = np(Jd.map(Xp));
            return Nd >= 0 ? Jd[Nd] : null
          };
        for (const Wd of (0, Ad.h)(dd)) {
          const dd = Nd(Wd);
          if (dd) return dd
        }
        for (const Wd of dd.querySelectorAll(Up)) {
          const dd = Dp(Wd, kd);
          if (dd) return dd
        }
        return Nd(dd)
      }
    }
    const cp = "[data-pad-default-focus], .Dropdown-option.is-selected",
      hp = ".Dropdown-root.is-open > .Dropdown-menu",
      rp = "[data-pad-no-step-in]",
      tp = "[data-pad-tabs]",
      Vp = "[data-pad-press-area]",
      zp = dd => {
        let Jd = dd;
        for (let kd = 0; Jd && kd <= 4; kd++, Jd = Jd.parentElement) {
          const kd = Jd.querySelector(".CircleInfo");
          if (kd) return Jd === dd || Jd.querySelectorAll(Ad.c).length <= 1 ? kd : null;
          if (Jd !== dd && Jd.querySelectorAll(Ad.c).length > 1) return null
        }
        return null
      },
      Hp = (dd, Jd, kd) => {
        (0, rd.o)(dd, Jd, kd);
        const pd = null !== dd && void 0 !== dd && dd.isConnected ? zp(dd) : null,
          Nd = zp(Jd);
        pd !== Nd && (0, rd.o)(pd, Nd, Nd ? (0, rd.v)(Nd) : kd, {
          leaveBelow: dd,
          enterBelow: Jd
        })
      },
      wp = dd => dd.getBoundingClientRect(),
      Ap = (dd, Jd, kd) => {
        const pd = new Set(kd);
        for (let Nd = dd; Nd; Nd = Nd === Jd ? null : Nd.parentElement)
          if (pd.has(Nd)) return Nd;
        return null
      },
      dN = (dd, Jd) => !dd.root || dd.root === Jd || Jd.matches(hp) && dd.root.contains(Jd);
    const JN = new class {
      constructor() {
        this.focused = null, this.layerKey = null, this.layerRoot = null, this.memory = new kp, this.tabStripNav = new Ep, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.confirmPressedOn = null, this.confirmRepeatKey = null, this.confirmRepeated = !1, this.confirmRepeat = (0, Od.c)(Ld.x), this.dpadRepeats = new Map(Ld.C.map((dd => [dd, (0, Od.c)(Ld.E)]))), this.stickRepeat = new Ld.c((0, Od.c)(Ld.eb)), this.lastRefocusCheckMs = -1 / 0, this.enteredLayerAtMs = 0, this.lastFocusedCentre = null, this.lastActivatedKey = null, this.lastActivated = null, this.lastActivatedAtMs = -1 / 0, this.pendingFocus = null, this.tabOpenWait = null, this.retryMove = null, this.scrollRemainder = {
          x: 0,
          y: 0
        }, this.wasActive = !1, this.layerKind = null, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.listeners = new Set, this.dropdownLayers = new WeakMap, this.dropdownLayerCounter = 0
      }
      install() {
        const dd = od.e.register({
            name: "focus",
            isActive: () => (0, Qd.h)() && "focus" === Mp(),
            onFrame: dd => {
              this.onFrame(dd)
            },
            onDeactivate: () => {
              this.deactivate()
            },
            wakePressActs: dd => (0, od.i)(dd) || dd === (0, Kd.j)("menuConfirm") && (0, rd.A)((0, Qd.c)())
          }),
          Jd = (0, pp.i)((dd => {
            const Jd = (0, pp.o)(dd);
            null === dd.memoryKey && this.memory.forget(Jd), Jd === this.layerKey && (this.layerKey = null)
          }));
        let kd = -1 / 0;
        const pd = Pd.c.onFrame((dd => {
            (0, Qd.h)() || dd.timestampMs - kd < 100 || (kd = dd.timestampMs, op())
          })),
          Nd = dd => {
            dd.isTrusted && dd.target instanceof Element && Pd.c.getActivePad() && this.noteChosenStop(dd.target)
          };
        return document.addEventListener("click", Nd, !0), () => {
          dd(), Jd(), pd(), document.removeEventListener("click", Nd, !0), this.deactivate()
        }
      }
      noteChosenStop(dd) {
        var Jd, kd;
        const pd = op();
        if (!pd || !pd.root.contains(dd)) return;
        const Nd = null !== (Jd = null === (kd = dd.closest(".Dropdown-root")) || void 0 === kd ? void 0 : kd.querySelector(".Dropdown-control")) && void 0 !== Jd ? Jd : dd,
          Wd = Ap(Nd, pd.root, this.getEnabledCandidates(pd.root));
        if (!Wd) return;
        const Pd = (0, pp.o)(pd.layer);
        Pd === this.layerKey && pd.root === this.layerRoot || this.beginLayer(pd, Pd), this.wasActive ? this.setFocus(Wd, {
          scroll: !1,
          byUser: !0
        }) : (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.focused = Wd, this.lastFocusedCentre = (0, rd.v)(Wd), this.rememberFocus(Wd), this.notify())
      }
      getFocused() {
        return this.focused
      }
      isActive() {
        return this.wasActive
      }
      onChange(dd) {
        return this.listeners.add(dd), () => {
          this.listeners.delete(dd)
        }
      }
      notify() {
        for (const dd of this.listeners) dd()
      }
      deactivate() {
        var dd;
        if (this.wasActive) {
          this.wasActive = !1, this.layerKind = null, this.confirmPressedOn = null, this.retryMove = null, this.pendingFocus = null;
          for (const dd of this.dpadRepeats.values()) dd.reset();
          this.stickRepeat.reset(), null !== (dd = this.focused) && void 0 !== dd && dd.isConnected && Hp(this.focused, null, (0, rd.v)(this.focused)), this.notify()
        }
      }
      setFocus(dd) {
        var Jd;
        let {
          scroll: kd = !0,
          byUser: pd = !1
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (pd && (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1), dd === this.focused) return;
        const Nd = null !== (Jd = this.focused) && void 0 !== Jd && Jd.isConnected ? this.focused : null;
        if (this.focused = dd, dd) {
          kd && (dd.classList.add(Yp), dd.scrollIntoView({
            block: "nearest",
            inline: "nearest",
            behavior: "instant"
          })), pd && ((dd, Jd) => {
            const kd = Jd.closest("[data-pad-friends-column]");
            kd && dd && !kd.contains(dd) && (ck = new WeakRef(dd))
          })(Nd, dd);
          const Jd = (0, rd.v)(dd);
          this.lastFocusedCentre = Jd, this.movedInLayer && this.rememberFocus(dd), Hp(Nd, dd, Jd), "false" === dd.getAttribute("aria-pressed") && dd.closest("[data-pad-select-on-focus]") && (0, rd.c)(dd)
        } else Nd && Hp(Nd, null, (0, rd.v)(Nd));
        this.notify()
      }
      rememberFocus(dd) {
        const Jd = this.layerRoot;
        this.layerKey && Jd && this.memory.remember(this.layerKey, dd, Jd, (() => this.getEnabledCandidates(Jd)))
      }
      noteCursorActivation(dd) {
        const Jd = op();
        if (!Jd || !Jd.root.contains(dd)) return;
        const kd = this.getEnabledCandidates(Jd.root),
          pd = new Set(kd);
        let Nd = dd;
        for (; Nd && !pd.has(Nd);) Nd = Nd === Jd.root ? null : Nd.parentElement;
        if (!(Nd instanceof HTMLElement)) return;
        const Wd = (0, pp.o)(Jd.layer);
        this.memory.enter(Wd), this.memory.remember(Wd, Nd, Jd.root, (() => kd))
      }
      notePageEnteredByCursor(dd) {
        return this.memory.enter(dd)
      }
      recallStop(dd, Jd) {
        return this.findRemembered(dd, Jd)
      }
      focusWhenFound(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
          kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.pendingFocus = {
          find: dd,
          untilMs: performance.now() + Jd,
          holdWhile: kd
        }
      }
      getEnabledCandidates(dd) {
        return (0, Ad.g)(dd).filter((dd => !(0, Ad.t)(dd)))
      }
      onFrame(dd) {
        var Jd;
        const kd = op();
        if (!kd) return;
        const pd = null !== (Jd = this.findOpenDropdown(kd)) && void 0 !== Jd ? Jd : kd,
          Nd = performance.now(),
          Wd = (0, pp.o)(pd.layer);
        if (Wd !== this.layerKey || pd.root !== this.layerRoot) {
          const Jd = this.focused;
          if (null !== this.layerKey && pd.root === this.layerRoot && Jd && (0, Ad.q)(Jd, pd.root)) this.continueLayer(Wd, Jd), this.wasActive || this.resume(pd.root, Nd);
          else {
            const Jd = !this.wasActive && !dd.wokeDevice,
              Pd = "death" === this.layerKind || Jd,
              Zd = this.enterLayer(pd, Wd);
            "popup" !== pd.layer.kind || pd !== kd || Zd ? "menu" === pd.layer.kind && Pd && "inGame" === gd.d.get("gameState") && !(0, Zk.c)(3e3) && (this.pressGuardExtends = !0, this.pressGuardUntilMs = Nd + mp.d) : (this.pressGuardExtends = Jd, this.pressGuardUntilMs = Nd + (Jd ? mp.d : Pd ? 500 : 250))
          }
        } else this.wasActive || this.resume(pd.root, Nd);
        if (this.layerKind = pd.layer.kind, this.wasActive || (this.wasActive = !0, this.notify()), dd.wokeDevice && this.focusPointedStop(pd.root), this.validateFocus(pd, Nd), Nd < this.pressGuardUntilMs && this.pressGuardExtends && (dd.wasPressed((0, Kd.j)("menuConfirm")) || dd.wasPressed((0, Kd.j)("menuBack"))) && (this.pressGuardUntilMs = Nd + mp.d), Nd >= this.pressGuardUntilMs && this.handleButtons(dd, pd)) return;
        const Pd = "hybrid" === xp();
        if (Pd && (dd => {
            const Jd = Qp();
            return Jd !== vp && (vp = Jd, Gp.lock()), Gp.update(dd, (0, ld.k)().moveDeadzone)
          })(dd.leftStick)) return Zd = this.getHandoff(), Ip = Lp(Zd), ep = Qp(), void od.e.handOffHeldInput();
        var Zd;
        this.handleDirections(dd, pd, Nd, !Pd), this.handleScroll(dd, pd)
      }
      findOpenDropdown(dd) {
        const Jd = dd.root.querySelector(hp);
        if (!Jd || !(0, Ad.n)(Jd)) return null;
        let kd = this.dropdownLayers.get(Jd);
        return kd || (this.dropdownLayerCounter++, kd = {
          id: `dropdown-${this.dropdownLayerCounter}`,
          kind: dd.layer.kind,
          getRoot: () => Jd,
          close: () => {
            (0, rd.j)(Jd)
          },
          memoryKey: null
        }, this.dropdownLayers.set(Jd, kd)), {
          layer: kd,
          root: Jd,
          order: dd.order
        }
      }
      focusPointedStop(dd) {
        const Jd = (0, Qd.c)(),
          kd = Jd ? document.elementFromPoint(Jd.x, Jd.y) : null;
        if (!kd || !dd.contains(kd)) return;
        const pd = Ap(kd, dd, this.getEnabledCandidates(dd));
        pd && this.setFocus(pd, {
          scroll: !1,
          byUser: !0
        })
      }
      enterLayer(dd, Jd) {
        const kd = this.beginLayer(dd, Jd),
          pd = Bp();
        return pd && dN(pd, dd.root) ? (this.takeOver(dd.root, pd, this.enteredLayerAtMs), kd) : (this.restoreLayerFocus(dd.root, kd), kd)
      }
      beginLayer(dd, Jd) {
        return this.layerKey = Jd, this.layerRoot = dd.root, this.lastActivatedKey = null, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoreOnFocusLoss = !1, this.retryMove = null, this.pendingFocus = null, this.confirmPressedOn = null, this.lastRefocusCheckMs = -1 / 0, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.enteredLayerAtMs = performance.now(), this.lastFocusedCentre = null, this.memory.enter(Jd)
      }
      restoreLayerFocus(dd, Jd) {
        const kd = Jd && this.layerKey ? this.findRemembered(dd, this.layerKey) : null;
        this.restoredFromMemory = null !== kd, this.setFocus(null !== kd && void 0 !== kd ? kd : this.pickInitial(dd, {
          waitForContent: !0
        }))
      }
      continueLayer(dd, Jd) {
        this.layerKey = dd;
        const kd = this.memory.enter(dd);
        this.restoreOnFocusLoss = kd, this.movedInLayer && !kd && this.rememberFocus(Jd)
      }
      resume(dd, Jd) {
        var kd;
        const pd = Bp();
        pd && dN(pd, dd) ? this.takeOver(dd, pd, Jd) : null !== (kd = this.focused) && void 0 !== kd && kd.isConnected && Hp(null, this.focused, (0, rd.v)(this.focused))
      }
      pickPreferred(dd) {
        var Jd;
        return null !== (Jd = this.layerKey ? this.findRemembered(dd, this.layerKey) : null) && void 0 !== Jd ? Jd : this.pickInitial(dd, {
          waitForContent: !0
        })
      }
      findRemembered(dd, Jd) {
        return this.memory.has(Jd) ? this.memory.recall(Jd, this.getEnabledCandidates(dd)) : null
      }
      getHandoff() {
        var dd, Jd, kd;
        const pd = null !== (dd = this.focused) && void 0 !== dd && dd.isConnected ? this.focused : null,
          Nd = null !== (Jd = this.layerRoot) && void 0 !== Jd && Jd.isConnected ? this.layerRoot : null;
        return {
          point: pd ? (0, rd.v)(pd) : null !== (kd = this.lastFocusedCentre) && void 0 !== kd ? kd : this.getLayerStartPoint(Nd),
          element: pd,
          direction: null
        }
      }
      getLayerStartPoint(dd) {
        if (!dd) return {
          x: window.innerWidth / 2,
          y: window.innerHeight / 2
        };
        const Jd = this.pickInitial(dd, {
          includeDisabled: !0
        });
        return (0, rd.v)(null !== Jd && void 0 !== Jd ? Jd : dd)
      }
      takeOver(dd, Jd, kd) {
        const {
          element: pd,
          direction: Nd,
          point: Wd
        } = Jd, Pd = pd instanceof HTMLElement && (0, Ad.q)(pd, dd) ? pd : null;
        if (!Nd) {
          const Jd = this.focused;
          return Pd ? this.setFocus(Pd, {
            scroll: !1,
            byUser: !0
          }) : this.focusNearest(dd, Wd), void(this.focused && this.focused === Jd && this.focused.isConnected && Hp(null, this.focused, (0, rd.v)(this.focused)))
        }
        if (this.dpadRepeats.get(Nd).update(!0, kd), Pd) return this.setFocus(Pd, {
          scroll: !1,
          byUser: !0
        }), void this.move(dd, Nd, kd, !0);
        const Zd = this.getEnabledCandidates(dd),
          gd = Zd.map(wp),
          Cd = xk(new DOMRect(Wd.x, Wd.y, 0, 0), gd, Nd),
          Kd = Cd >= 0 ? Cd : ak(Wd, gd);
        this.setFocus(Kd >= 0 ? Zd[Kd] : this.pickInitial(dd), {
          byUser: !0
        })
      }
      focusNearest(dd, Jd) {
        const kd = this.getEnabledCandidates(dd),
          pd = ak(Jd, kd.map(wp));
        this.setFocus(pd >= 0 ? kd[pd] : this.pickInitial(dd), {
          byUser: !0
        })
      }
      pickDefault(dd) {
        let {
          includeDisabled: Jd = !1,
          exclude: kd = null
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const pd = [...dd.querySelectorAll(cp)].filter((pd => (null === kd || void 0 === kd || !kd.has(pd)) && (Jd ? (0, Ad.w)(pd, dd) : (0, Ad.q)(pd, dd)))),
          Nd = np(pd.map(Xp));
        return Nd >= 0 ? pd[Nd] : null
      }
      pickNewAreaStart(dd, Jd) {
        const kd = [...dd.querySelectorAll(Vp)].filter(Ad.n);
        for (const pd of [...(0, Ad.h)(dd), ...kd]) {
          if (Jd.has(pd)) continue;
          const dd = this.getEnabledCandidates(pd),
            kd = np(dd.map(Xp));
          if (kd >= 0) return dd[kd]
        }
        return null
      }
      pickInitial(dd) {
        let {
          includeDisabled: Jd = !1,
          waitForContent: kd = !1,
          enteredAtMs: pd = this.enteredLayerAtMs
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const Nd = this.pickDefault(dd, {
          includeDisabled: Jd
        });
        if (Nd) return Nd;
        const Wd = dd => Jd ? (0, Ad.g)(dd) : this.getEnabledCandidates(dd);
        let Pd = [];
        for (const ld of (0, Ad.h)(dd))
          if (Pd = Wd(ld), Pd.length > 0) break;
        if (0 === Pd.length) {
          if (kd && performance.now() - pd < 1e4 && (0, Ad.m)(dd)) return null;
          Pd = Wd(dd)
        }
        const Zd = Pd.map(wp),
          gd = Xd(null),
          Cd = Pd.filter(((dd, Jd) => fd(Zd[Jd], gd))),
          Kd = Cd.length > 0 ? Cd : Pd,
          od = np(Kd.map(Xp));
        return od >= 0 ? Kd[od] : null
      }
      validateFocus(dd, Jd) {
        if (this.pendingFocus) {
          var kd, pd;
          const Nd = this.pendingFocus.find();
          if (Nd && (0, Ad.q)(Nd, dd.root)) return this.pendingFocus = null, void this.setFocus(Nd, {
            byUser: !0
          });
          Jd > this.pendingFocus.untilMs && (null === (kd = (pd = this.pendingFocus).holdWhile) || void 0 === kd || !kd.call(pd)) && (this.pendingFocus = null)
        }
        const Nd = this.focused,
          Wd = !!Nd && (0, Ad.q)(Nd, dd.root);
        if (!(!Wd && Nd && Nd === this.lastActivated && Jd - this.lastActivatedAtMs < 5e3 && dd.root.contains(Nd) && (0, Ad.n)(Nd) && (0, Ad.t)(Nd))) {
          if (!Wd && this.restoreOnFocusLoss && this.layerKey) return this.restoreOnFocusLoss = !1, this.movedInLayer = !1, this.scrolledInLayer = !1, this.enteredLayerAtMs = Jd, void this.restoreLayerFocus(dd.root, !0);
          if ((!Wd || !this.movedInLayer && !this.scrolledInLayer) && !(Jd - this.lastRefocusCheckMs < (Wd ? 200 : 50)))
            if (this.lastRefocusCheckMs = Jd, Wd) {
              const kd = Jd - this.enteredLayerAtMs < 15e3 ? this.pickPreferred(dd.root) : null,
                pd = null !== kd && void 0 !== kd ? kd : this.restoredFromMemory ? null : this.pickDefault(dd.root);
              pd && pd !== Nd && this.setFocus(pd)
            } else {
              if (this.lastFocusedCentre && this.movedInLayer) {
                const Jd = this.pendingFocus;
                return this.focusNearest(dd.root, this.lastFocusedCentre), void(this.pendingFocus = Jd)
              }
              this.setFocus(this.pickPreferred(dd.root))
            }
        }
      }
      handleButtons(dd, Jd) {
        if (dd.wasPressed((0, Kd.j)("menuToggleCursor"))) return qp(this.getHandoff()), !0;
        if (dd.wasPressed((0, Kd.j)("menuBack"))) {
          const dd = (0, rd.j)(Jd.root);
          return dd ? this.setFocus(dd, {
            byUser: !0
          }) : hk(this, Jd.root) || ((0, rd.g)(Jd.root) ? this.returnToOpener(Jd.root) : this.backToStrip(Jd.root) || lp()), !0
        }
        const kd = (0, Kd.j)("menuConfirm");
        var pd, Nd;
        dd.wasPressed(kd) && (this.confirmPressedOn = this.focused, this.confirmRepeatKey = null !== (pd = null === (Nd = this.focused) || void 0 === Nd ? void 0 : Nd.getAttribute("data-pad-repeat")) && void 0 !== pd ? pd : null, this.confirmRepeated = dd.wokeDevice, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now()));
        if (dd.wasReleased(kd)) {
          const dd = this.confirmPressedOn;
          if (this.confirmPressedOn = null, dd && !this.confirmRepeated && dd === this.focused && dd.isConnected && !(0, Ad.t)(dd)) {
            const kd = dd.matches("[data-pad-tab]") ? dd.closest(tp) : null;
            kd ? this.enterTab(dd, kd, Jd.root, performance.now()) : this.activate(dd)
          }
          return !0
        }
        return this.repeatConfirm(dd, kd), dp(this, dd, Jd)
      }
      repeatConfirm(dd, Jd) {
        const kd = this.confirmPressedOn;
        kd && null !== this.confirmRepeatKey && dd.isHeld(Jd) && (kd === this.focused && kd.isConnected && !(0, Ad.t)(kd) && kd.getAttribute("data-pad-repeat") === this.confirmRepeatKey ? kd.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.confirmRepeated = !0, this.activate(kd)) : this.confirmRepeatKey = null)
      }
      backToStrip(dd) {
        const Jd = this.focused;
        if (!(0, ld.k)().menuBackToCategories) return !1;
        const kd = null !== Jd && void 0 !== Jd && Jd.isConnected ? this.tabStripNav.backToStrip(Jd, this.getEnabledCandidates(dd), dd) : null;
        return kd && this.setFocus(kd, {
          byUser: !0
        }), null !== kd
      }
      returnToOpener(dd) {
        const Jd = this.lastActivatedKey;
        Jd && (this.lastActivatedKey = null, this.focusWhenFound((() => {
          var kd;
          return null !== (kd = this.getEnabledCandidates(dd).find((dd => (0, rd.w)(dd) === Jd))) && void 0 !== kd ? kd : null
        })))
      }
      activate(dd) {
        var Jd;
        if ((0, bp.b)(dd) || (0, rd.y)(dd)) return;
        this.lastActivatedKey = null !== (Jd = (0, rd.w)(dd)) && void 0 !== Jd ? Jd : this.lastActivatedKey, this.lastActivated = dd, this.lastActivatedAtMs = performance.now(), this.rememberFocus(dd);
        const kd = this.layerRoot;
        if (kd) {
          const Jd = new Set(kd.querySelectorAll(cp)),
            pd = new Set(kd.querySelectorAll(`[data-pad-initial-area], ${Vp}`)),
            Nd = this.lastActivatedAtMs;
          this.focusWhenFound((() => {
            var Nd;
            return (0, Ad.q)(dd, kd) ? null : null !== (Nd = this.pickDefault(kd, {
              exclude: Jd
            })) && void 0 !== Nd ? Nd : this.pickNewAreaStart(kd, pd)
          }), 5e3, (() => dd.isConnected && (0, Ad.t)(dd) && performance.now() - Nd < 6e4))
        }(0, rd.c)(dd), (0, rd.h)(dd)
      }
      handleDirections(dd, Jd, kd, pd) {
        const Nd = Sk(Jd.layer.kind) ? (0, Kd.j)("chat") : null;
        for (const Zd of Ld.C) {
          this.dpadRepeats.get(Zd).update(dd.isHeld(Zd), kd) && (Zd !== Nd || dd.wasPressed(Zd)) && this.move(Jd.root, Zd, kd, !0)
        }
        const Wd = pd ? (0, Ld.i)(dd.leftStick, (0, ld.k)().moveDeadzone) : {
            x: 0,
            y: 0
          },
          Pd = this.stickRepeat.update((0, Ld.fb)(Wd), kd);
        if (Pd && this.move(Jd.root, Pd, kd, !0), this.retryMove && kd >= this.retryMove.atMs) {
          const {
            direction: dd
          } = this.retryMove;
          this.retryMove = null, this.move(Jd.root, dd, kd, !1)
        }
      }
      move(dd, Jd, kd, pd) {
        var Nd;
        let Wd = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.pendingFocus && this.pendingFocus === (null === (Nd = this.tabOpenWait) || void 0 === Nd ? void 0 : Nd.wait) && Jd === this.tabOpenWait.direction) return;
        this.pendingFocus = null;
        const Pd = this.focused;
        if (!Pd || !Pd.isConnected) {
          const Jd = this.pickInitial(dd);
          return void(Jd && this.setFocus(Jd, {
            byUser: !0
          }))
        }
        const Zd = "Left" === Jd || "Right" === Jd,
          gd = Zd ? (0, bp.b)(Pd) : null;
        if (gd) return void gd.adjust("Left" === Jd ? -1 : 1);
        const Cd = dd => null !== dd.closest("[data-pad-friends-column]"),
          Kd = Cd(Pd),
          od = wp(Pd),
          ld = Zd || Pd.closest(tp) ? null : (dd => {
            const Jd = new Map;
            return kd => {
              const pd = kd.closest(tp);
              if (!pd) return !1;
              let Nd = Jd.get(pd);
              if (void 0 === Nd) {
                const kd = wp(pd);
                Nd = vk(dd, kd) && (kd.right <= dd.left || kd.left >= dd.right), Jd.set(pd, Nd)
              }
              return Nd
            }
          })(od),
          Qd = null !== Pd.closest(rp),
          Ld = this.getEnabledCandidates(dd).filter((dd => dd !== Pd && (Zd || Cd(dd) === Kd) && !(null !== ld && void 0 !== ld && ld(dd)) && (Qd || !dd.closest(rp)))),
          Od = Ld.map(wp),
          ed = Fd(Pd, "y", dd),
          Rd = Xd(ed);
        if (!Wd && !fd(od, Rd)) {
          const dd = Ld.filter(((dd, Jd) => fd(Od[Jd], Rd)));
          if (dd.length > 0) {
            const Jd = {
              x: Rd.left + Rd.width / 2,
              y: Rd.top + Rd.height / 2
            };
            return void this.setFocus(dd[ak(Jd, dd.map(wp))], {
              byUser: !0
            })
          }
        }
        const Id = Zd ? ((dd, Jd, kd) => {
            const pd = wp(dd),
              Nd = dd.closest(tp),
              Wd = Nd ? wp(Nd) : null;
            return Jd.map(((Jd, Pd) => {
              const Zd = kd[Pd];
              if (Zd.bottom > pd.top && Zd.top < pd.bottom) return !0;
              const gd = Jd.closest(tp);
              if (Nd && Wd) return gd !== Nd && (null !== gd || Zd.bottom <= Wd.top || Zd.top >= Wd.bottom);
              if (gd) return !vk(pd, wp(gd));
              let Cd = dd;
              for (let kd = dd.parentElement; kd && !kd.contains(Jd); kd = kd.parentElement) Cd = kd;
              const Kd = wp(Cd);
              return Zd.right > Kd.left && Zd.left < Kd.right
            }))
          })(Pd, Ld, Od) : void 0,
          Gd = Zd && !Pd.closest(tp) ? (dd => dd.map((dd => !dd.closest(jp))))(Ld) : void 0,
          vd = ((dd, Jd) => {
            const kd = [];
            for (let Nd = dd; Nd; Nd = Nd.parentElement) kd.push(Nd);
            const pd = new Map;
            return kd.forEach(((dd, Jd) => {
              pd.set(dd, kd.length - 1 - Jd)
            })), Jd.map((dd => {
              for (let Jd = dd; Jd; Jd = Jd.parentElement) {
                const dd = pd.get(Jd);
                if (void 0 !== dd) return dd
              }
              return -1
            }))
          })(Pd, Ld),
          xd = Zd ? "x" : "y",
          qd = Fd(Pd, xd, dd);
        let Bd = xk(od, Od, Jd, vd, Id, Gd);
        if (Bd >= 0 && qd && !qd.contains(Ld[Bd])) {
          const dd = Ld.flatMap(((dd, Jd) => qd.contains(dd) ? [Jd] : [])),
            kd = Jd => Jd && dd.map((dd => Jd[dd])),
            pd = xk(od, dd.map((dd => Od[dd])), Jd, dd.map((dd => vd[dd])), kd(Id), kd(Gd));
          Bd = pd >= 0 ? dd[pd] : Bd
        }
        if (Bd >= 0) return void this.moveTo(Pd, Ld[Bd], Ld, dd, Jd, Wd);
        if (!pd) return;
        const sd = "Right" === Jd || "Down" === Jd ? 1 : -1;
        if (qd && Sd(qd, xd, sd)) {
          const dd = "y" === xd ? qd.clientHeight : qd.clientWidth;
          jd(qd, xd, sd * dd * .5), this.retryMove = {
            direction: Jd,
            atMs: kd + 80
          }
        }
      }
      moveTo(dd, Jd, kd, pd, Nd, Wd) {
        const Pd = this.tabStripNav.findTabContent(dd, Jd, kd);
        Pd && "true" !== dd.dataset.padSelected ? this.openTab(dd, Pd, pd, Nd) : Wd && !Pd || this.setFocus(this.tabStripNav.redirect(dd, Jd, kd, pd), {
          byUser: !0
        })
      }
      openTab(dd, Jd, kd, pd) {
        const Nd = Jd.parentElement;
        (0, rd.c)(dd), this.focusWhenFound((() => "true" !== dd.dataset.padSelected ? null : Jd.isConnected ? this.tabStripNav.pickContentStart(Jd, this.getEnabledCandidates(kd), kd) : Nd ? this.tabStripNav.pickReplacedContentStart(dd, Nd, this.getEnabledCandidates(kd), kd) : null), 3e3), this.tabOpenWait = {
          wait: this.pendingFocus,
          direction: pd
        }
      }
      enterTab(dd, Jd, kd, pd) {
        this.move(kd, (dd => {
          const Jd = [...dd.querySelectorAll(yp)].filter((Jd => Jd.closest(Up) === dd));
          if (Jd.length >= 2) {
            const dd = Jd[0].getBoundingClientRect(),
              kd = Jd[1].getBoundingClientRect();
            return Math.abs(kd.top - dd.top) > Math.abs(kd.left - dd.left) ? "Right" : "Down"
          }
          const kd = dd.getBoundingClientRect();
          return kd.height > kd.width ? "Right" : "Down"
        })(Jd), pd, !1, !0), this.focused !== dd || this.pendingFocus || this.activate(dd)
      }
      handleScroll(dd, Jd) {
        const kd = (0, Ld.i)(dd.rightStick, .2);
        if (0 === kd.x && 0 === kd.y) return void(this.scrollRemainder = {
          x: 0,
          y: 0
        });
        const pd = dd.dtMs / 1e3;
        for (const Wd of ["x", "y"]) {
          var Nd;
          const dd = kd[Wd];
          if (0 === dd) continue;
          const Pd = null !== (Nd = Fd(this.focused, Wd, Jd.root)) && void 0 !== Nd ? Nd : md(Jd.root, Wd);
          if (!Pd) continue;
          const Zd = Math.sign(dd) * dd * dd * 1500 * pd + this.scrollRemainder[Wd],
            gd = Math.trunc(Zd);
          this.scrollRemainder[Wd] = Zd - gd, 0 !== gd && (jd(Pd, Wd, gd), this.scrolledInLayer = !0)
        }
      }
    };
    var kN = kd(8084);
    var pN = kd(8623);
    const NN = {
        duration: 80,
        strongMagnitude: .2,
        weakMagnitude: .2,
        needsPadInUse: !1
      },
      WN = {
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
          ...NN,
          minIntervalMs: 1e3
        },
        preview: {
          ...NN,
          minIntervalMs: 0
        }
      };
    const PN = new class {
        constructor(dd) {
          this.deps = dd, this.lastPlayedMs = {}, this.loggedFailure = !1, this.logFailure = dd => {
            this.loggedFailure || (this.loggedFailure = !0, console.warn("Controller vibration failed; further failures are not logged.", dd))
          }
        }
        play(dd, Jd) {
          const kd = WN[dd];
          if (!this.deps.isVibrationOn() || kd.needsPadInUse && !this.deps.isPadInUse()) return !1;
          const pd = this.lastPlayedMs[dd];
          if (void 0 !== pd && Jd - pd < kd.minIntervalMs) return !1;
          const Nd = this.deps.getActuator();
          if (!Nd) return !1;
          this.lastPlayedMs[dd] = Jd;
          const {
            duration: Wd,
            strongMagnitude: Pd,
            weakMagnitude: Zd
          } = kd;
          try {
            Nd.playEffect("dual-rumble", {
              duration: Wd,
              strongMagnitude: Pd,
              weakMagnitude: Zd
            }).catch(this.logFailure)
          } catch (gd) {
            this.logFailure(gd)
          }
          return !0
        }
      }({
        getActuator: () => (dd => {
          const Jd = null === dd || void 0 === dd ? void 0 : dd.vibrationActuator;
          return "function" === typeof(null === Jd || void 0 === Jd ? void 0 : Jd.playEffect) ? Jd : null
        })(Pd.c.getActiveGamepad()),
        isVibrationOn: () => (0, ld.k)().vibration,
        isPadInUse: Qd.h
      }),
      ZN = dd => {
        PN.play(dd, performance.now())
      };
    var gN = kd(8089),
      CN = kd(2793),
      KN = kd(108),
      oN = kd(33),
      lN = kd(645);
    class QN {
      constructor(dd) {
        this.deps = dd
      }
      check() {
        let dd = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const Jd = this.deps.isPadActive() ? this.deps.getPadFamily() : null;
        if (!Jd) return "skipped";
        const kd = dd ? this.deps.getVisitId() : this.deps.peekVisitId();
        return null === kd || this.deps.readReportedVisitId() === kd ? "skipped" : this.deps.canReport() ? (this.deps.writeReportedVisitId(kd), this.deps.TQ(Jd, this.deps.getInputType()), "reported") : "notReady"
      }
    }
    const LN = "controllerUsageReportedVisit";
    var ON = kd(1371),
      eN = kd(1753),
      RN = kd(626),
      IN = kd(1459),
      GN = kd(1273);
    const vN = dd => ({
        translationKey: `controller:${dd}`
      }),
      xN = {
        A: "A",
        B: "B",
        X: "X",
        Y: "Y",
        LB: "LB",
        RB: "RB",
        LT: "LT",
        RT: "RT",
        View: vN("padButtonView"),
        Menu: vN("padButtonMenu"),
        LS: "L3",
        RS: "R3",
        Up: vN("padButtonDpadUp"),
        Down: vN("padButtonDpadDown"),
        Left: vN("padButtonDpadLeft"),
        Right: vN("padButtonDpadRight"),
        Home: vN("padButtonHome"),
        LeftStick: vN("padButtonLeftStick"),
        RightStick: vN("padButtonRightStick")
      },
      qN = {
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
          View: vN("padButtonCreate"),
          Menu: vN("padButtonOptions")
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
      BN = (dd, Jd) => {
        var kd;
        const pd = null !== (kd = qN[dd][Jd]) && void 0 !== kd ? kd : xN[Jd];
        return "string" === typeof pd ? pd : (0, Nd.x)(GN.c.get().getCurrentLanguageCode(), pd.translationKey)
      },
      sN = dd => {
        let {
          glyph: Jd,
          family: kd,
          className: pd
        } = dd;
        const Nd = (0, Qd.z)(),
          Wd = null !== kd && void 0 !== kd ? kd : Nd,
          Pd = (0, gN.f)(Wd, Jd);
        return (0, Dd.jsx)("span", {
          className: yd()("ControllerGlyph", pd),
          role: "img",
          "aria-label": BN(Wd, Jd),
          style: {
            "--pad-glyph-mask": `url(${Pd})`,
            "--pad-glyph-aspect": (0, gN.d)(Wd, Jd)
          }
        })
      };
    var iN = kd(1904);
    const aN = dd => {
      let {
        action: Jd
      } = dd;
      const {
        t: kd
      } = (0, Nd.B)();
      switch (Jd.kind) {
        case "reload":
          return (0, Dd.jsx)("span", {
            children: kd("controller:gameplayReload")
          });
        case "specialAction":
          return null;
        case "customButton":
          return (0, Dd.jsx)(iN.c, {
            text: Jd.description ? [{
              icon: Jd.icon
            }, ` ${Jd.description}`] : [{
              icon: Jd.icon
            }]
          });
        case "touchButton":
          return (0, Dd.jsx)(iN.c, {
            text: Jd.label
          })
      }
    };
    var MN = kd(8630);
    const FN = dd => {
      let {
        hold: Jd
      } = dd;
      return (0, Dd.jsx)("div", {
        className: "DropStackFillTrack",
        style: {
          "--pad-drop-stack-hold": `${Jd.holdMs}ms`
        },
        children: (0, Dd.jsx)("div", {
          className: "DropStackFillBar"
        })
      }, Jd.id)
    };
    var YN = kd(8655),
      mN = kd(8664),
      bN = kd(8666),
      SN = kd(8646);
    const jN = () => {
        const {
          gameState: dd
        } = (0, gd.j)(["gameState"]), Jd = (0, Qd.w)(), [pd, Nd] = (0, nd.useState)(!1), [Wd, Pd] = (0, nd.useState)(!1);
        return (0, nd.useEffect)((() => {
          "inGame" === dd && Nd(!0)
        }), [dd]), (0, nd.useEffect)((() => {
          if (!pd) return;
          let dd = null,
            Jd = !1;
          return (RN.x ? Promise.all([kd.e(70), kd.e(261), kd.e(200), kd.e(219), kd.e(218), kd.e(85)]).then((() => kd(40529))).then((dd => dd.startWasmPadGameplay)) : Promise.all([kd.e(70), kd.e(227), kd.e(226), kd.e(95), kd.e(73), kd.e(72), kd.e(71), kd.e(183), kd.e(223), kd.e(75), kd.e(197), kd.e(217), kd.e(94), kd.e(220), kd.e(84), kd.e(235), kd.e(114), kd.e(236), kd.e(74), kd.e(113), kd.e(156), kd.e(219), kd.e(189)]).then((() => kd(40661))).then((dd => dd.startPadGameplay))).then((kd => {
            Jd || (dd = kd())
          })).catch((dd => {
            console.error("Pad gameplay failed to load", dd), Jd || Pd(!0)
          })), () => {
            var kd;
            Jd = !0, null === (kd = dd) || void 0 === kd || kd()
          }
        }), [pd]), (0, nd.useEffect)((() => {
          Wd && Jd && (Pd(!1), ON.NotificationProvider.showPromptPopup({
            title: "controller:gameplayLoadFailedTitle",
            subtitle: "controller:gameplayLoadFailedSubtitle",
            confirmText: "settingsMenu:reloadPagePopupConfirm",
            confirmTooltip: "",
            cancelText: "general:cancel",
            cancelTooltip: ""
          }).getResult().then((dd => {
            !0 === dd && (0, eN.reloadBloxd)()
          })))
        }), [Wd, Jd]), (0, Dd.jsxs)(Dd.Fragment, {
          children: [(0, Dd.jsx)(XN, {}), (0, Dd.jsx)(fN, {}), (0, Dd.jsx)(nN, {})]
        })
      },
      XN = () => {
        const {
          t: dd
        } = (0, Nd.B)(), Jd = (0, Qd.w)(), {
          gameState: kd,
          isUiHidden: pd
        } = (0, gd.j)(["gameState", "isUiHidden"]), {
          hideButtonHints: Wd
        } = (0, ld.t)(), Pd = (0, MN.l)(), Zd = (0, MN.o)(), [Cd, od] = (0, nd.useState)(bN.e);
        return (0, IN.h)(SN.m, od), !Jd || Wd || pd || "inGame" !== kd || !Pd && !Cd ? null : (0, Dd.jsxs)("div", {
          className: "PadActionHint SmallTextBold",
          children: [Pd && (0, Dd.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, Dd.jsx)(sN, {
              glyph: (0, Kd.j)("actionButton")
            }), (0, Dd.jsx)(aN, {
              action: Pd
            }), Zd && (0, Dd.jsx)("span", {
              className: "PadActionHintMore",
              children: dd("controller:gameplayActionWheelHint")
            })]
          }), Cd && (0, Dd.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, Dd.jsx)(sN, {
              glyph: (0, Kd.j)("pickBlock")
            }), (0, Dd.jsx)("span", {
              children: dd("controller:gameplayPickBlock")
            })]
          })]
        })
      },
      fN = () => {
        const {
          t: dd
        } = (0, Nd.B)(), Jd = (0, Qd.w)(), {
          gameState: kd,
          isUiHidden: pd
        } = (0, gd.j)(["gameState", "isUiHidden"]), [Wd, Pd] = (0, nd.useState)(YN.e);
        return (0, IN.h)(SN.i, Pd), Jd && !pd && "inGame" === kd && Wd ? (0, Dd.jsxs)("div", {
          className: "PadDropStackFill SmallTextBold",
          children: [(0, Dd.jsx)("span", {
            children: dd("controller:gameplayDropStack")
          }), (0, Dd.jsx)(FN, {
            hold: Wd
          })]
        }) : null
      },
      nN = () => {
        const {
          t: dd
        } = (0, Nd.B)(), Jd = (0, Qd.w)(), {
          gameState: kd,
          isUiHidden: pd
        } = (0, gd.j)(["gameState", "isUiHidden"]), {
          hideButtonHints: Wd
        } = (0, ld.t)(), [Pd, Zd] = (0, nd.useState)(mN.b);
        return (0, IN.h)(SN.h, Zd), Jd && !pd && "inGame" === kd && Pd ? (0, Dd.jsxs)("div", {
          className: "PadAttackLatchedHint SmallTextBold",
          children: [!Wd && (0, Dd.jsx)(sN, {
            glyph: (0, Kd.j)("attack")
          }), (0, Dd.jsx)("span", {
            children: dd("controller:gameplayAttackLatched")
          })]
        }) : null
      };
    var UN = kd(8673),
      yN = kd(1955),
      DN = kd(2357),
      TN = kd(8069);
    const EN = dd => dd && !(0, UN.e)(yN.b.get("shopInfo")),
      cN = () => {
        const dd = "inGame" === (0, gd.j)(["gameState"]).gameState;
        return (0, DN.g)("shopInfo", (() => {
          (0, TN.i)(EN(dd))
        })), (0, nd.useEffect)((() => {
          (0, TN.i)(EN(dd))
        }), [dd]), null
      },
      hN = () => {
        const {
          t: dd
        } = (0, Nd.B)(), {
          hideButtonHints: Jd
        } = (0, ld.t)();
        (0, Qd.z)();
        const kd = (0, yJ.h)();
        return (0, nd.useEffect)((() => (() => {
          const dd = od.e.register({
              name: "inventory",
              isActive: Wk.isActive,
              onFrame: Wk.onFrame,
              onDeactivate: Wk.onDeactivate,
              wakePressActs: Wk.wakePressActs
            }),
            Jd = dd => {
              Wk.noteRealPointer(dd), Wk.shouldBlockRealPointer(dd) && dd.stopPropagation()
            };
          for (const Pd of Pk) window.addEventListener(Pd, Jd, !0);
          const kd = (0, wd.j)((() => {
              "inventory" !== od.e.getActiveConsumerName() && Wk.forgetSurface()
            })),
            pd = dd => {
              const Jd = dd.target;
              (0, Qd.h)() && (0, Vd.j)(Jd) && Jd.closest(qJ) && (0, wd.f)() && (0, wd.l)(Jd)
            };
          document.addEventListener("focusout", pd, !0);
          const {
            invalidate: Nd,
            onScroll: Wd
          } = Wk.targets;
          return document.addEventListener("scroll", Wd, !0), window.addEventListener("resize", Nd), () => {
            dd(), kd();
            for (const dd of Pk) window.removeEventListener(dd, Jd, !0);
            document.removeEventListener("scroll", Wd, !0), document.removeEventListener("focusout", pd, !0), window.removeEventListener("resize", Nd), Wk.targets.disconnect()
          }
        })()), []), (0, Dd.jsxs)(Dd.Fragment, {
          children: [(0, Dd.jsx)(hd, {
            placer: Wk.ring,
            className: "InventorySlotCursorRing"
          }), kd.showing && !Jd && (0, Dd.jsx)("div", {
            className: "InventorySlotCursorHints SmallTextBold",
            children: Hd(kd).map((Jd => {
              let {
                actions: pd,
                labelKey: Nd
              } = Jd;
              return (0, Dd.jsxs)("div", {
                className: "InventorySlotCursorHint",
                children: [pd.map((dd => (0, Dd.jsx)(sN, {
                  glyph: (0, Kd.j)(dd)
                }, dd))), (0, Dd.jsx)("span", {
                  children: dd(`controller:${Nd}`)
                }), "inventoryDrop" === Nd && kd.dropStackHold && (0, Dd.jsx)(FN, {
                  hold: kd.dropStackHold
                })]
              }, Nd)
            }))
          })]
        })
      },
      rN = [{
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
      uN = dd => Array.from(dd).map((dd => ({
        type: "char",
        char: dd,
        width: 1
      }))),
      tN = function(dd) {
        return {
          type: "command",
          command: dd,
          width: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
        }
      },
      VN = [tN("page", 2), tN("otherPage"), tN("caretLeft"), tN("space", 3), tN("caretRight"), tN("close", 1.5), tN("submit", 1.5)],
      zN = [tN("page", 2), tN("otherPage"), tN("caretLeft"), tN("space", 2), tN("caretRight"), tN("newline"), tN("close", 1.5), tN("submit", 1.5)],
      HN = [
        [...uN("1234567890"), tN("backspace")], uN("qwertyuiop/"), uN("asdfghjkl'?"), [tN("shift", 2), ...uN("zxcvbnm,.")]
      ],
      wN = [
        [...uN("1234567890"), tN("backspace")], uN("!@#$%^&*()/"), uN('-_=+[]{};:"'), uN("~`|\\<>'\u20ac\xa3,.")
      ],
      AN = {
        letters: HN,
        accents: [
          [...uN("1234567890"), tN("backspace")], uN("\xe1\xe9\xed\xf3\xfa\xe0\xe8\xec\xf2\xf9\xf1"), uN("\xe2\xea\xee\xf4\xfb\xe4\xeb\xef\xf6\xfc\xe7"), [tN("shift", 2), ...uN("\xe3\xf5\xdf\u0153\u011f\u015f\u0131\xbf\xa1")]
        ],
        symbols: wN
      },
      dW = new Set(["de", "es", "fr", "it", "nl", "pt", "pt-BR", "tr", "vi"]),
      JW = (dd, Jd) => "letters" === dd ? Jd ? {
        page: "accents",
        otherPage: "symbols"
      } : {
        page: "symbols",
        otherPage: "accents"
      } : {
        page: "letters",
        otherPage: "accents" === dd ? "symbols" : "accents"
      },
      kW = function(dd, Jd) {
        const kd = ((dd, Jd) => [...AN[dd], Jd ? zN : VN])(dd, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]);
        if (0 === Jd) return kd;
        const pd = Math.min(2, pW(kd[0]) / Jd);
        return [Array.from({
          length: Jd
        }, ((dd, Jd) => ({
          type: "phrase",
          phraseIndex: Jd,
          width: pd
        }))), ...kd]
      },
      pW = dd => dd.reduce(((dd, Jd) => dd + Jd.width), 0),
      NW = dd => Math.max(...dd.map(pW)),
      WW = (dd, Jd) => {
        const kd = dd[Jd.row];
        let pd = (NW(dd) - pW(kd)) / 2;
        for (let Nd = 0; Nd < Jd.col; Nd++) pd += kd[Nd].width;
        return pd + kd[Jd.col].width / 2
      },
      PW = (dd, Jd, kd) => {
        let pd = 0,
          Nd = 1 / 0;
        for (let Wd = 0; Wd < dd[Jd].length; Wd++) {
          const Pd = Math.abs(WW(dd, {
            row: Jd,
            col: Wd
          }) - kd);
          Pd < Nd - 1e-9 && (pd = Wd, Nd = Pd)
        }
        return pd
      },
      ZW = (dd, Jd) => {
        const kd = Math.max(0, Math.min(dd.length - 1, Jd.row));
        return {
          row: kd,
          col: Math.max(0, Math.min(dd[kd].length - 1, Jd.col))
        }
      },
      gW = (dd, Jd, kd) => "once" === dd && Jd - kd <= 400 ? "caps" : "off" === dd ? "once" : "off",
      CW = (dd, Jd) => "once" === dd && (dd => dd.toLowerCase() !== dd.toUpperCase())(Jd) ? "off" : dd,
      KW = (dd, Jd, kd) => {
        if ("symbols" === Jd || "off" === kd) return dd;
        const pd = dd.toUpperCase();
        return 1 === pd.length ? pd : dd
      };
    var oW = kd(8543);
    const lW = ["controller:keyboardPhraseGg", "controller:keyboardPhraseHi", "controller:keyboardPhraseThanks", "controller:keyboardPhraseGl", "controller:keyboardPhraseBrb", "controller:keyboardPhraseYes", "controller:keyboardPhraseNo", "controller:keyboardPhraseHelp"];
    const QW = new class {
        constructor() {
          this.lastSendMs = -1 / 0
        }
        claim(dd) {
          return !(dd - this.lastSendMs < 2e3) && (this.lastSendMs = dd, !0)
        }
      },
      LW = {
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
      OW = ["iC", "nameTag"],
      eW = dd => {
        const Jd = dd.target instanceof HTMLTextAreaElement && !OW.includes(dd.kind);
        return kW(dd.page, "chat" === dd.kind ? lW.length : 0, Jd)
      },
      RW = dd => {
        const Jd = dd.getBoundingClientRect(),
          kd = window.innerHeight,
          pd = Jd.top + Jd.height / 2 < kd / 2 ? "bottom" : "top",
          Nd = "bottom" === pd ? kd - Jd.bottom - 6 : Jd.top - 6;
        return {
          placement: pd,
          maxHeightPx: Math.min(.46 * kd, Math.max(.3 * kd, Nd))
        }
      },
      IW = dd => {
        (0, Yk.e)(dd) ? (0, Yk.c)().close(): (JN.noteChosenStop(dd), dd.blur())
      };
    class GW {
      constructor(dd) {
        this.host = dd, this.lastShiftPressMs = -1 / 0, this.phraseTexts = [], this.phrasesFill = !1
      }
      setPhraseRow(dd, Jd) {
        this.phraseTexts = dd, this.phrasesFill = Jd
      }
      pressKey(dd) {
        const Jd = this.host.getState(),
          kd = eW(Jd),
          pd = kd[dd.row][dd.col];
        this.host.setState({
          ...Jd,
          focus: dd,
          preferredX: WW(kd, dd)
        }), "char" === pd.type ? this.typeChar(pd.char) : "command" === pd.type ? this.runCommand(pd.command) : this.sendPhrase(pd.phraseIndex)
      }
      runCommand(dd) {
        const Jd = this.host.getState();
        switch (dd) {
          case "backspace":
            (0, Vd.d)(Jd.target);
            break;
          case "space":
            (0, Vd.g)(Jd.target, " ");
            break;
          case "newline":
            (0, Vd.g)(Jd.target, "\n");
            break;
          case "caretLeft":
            (0, Vd.m)(Jd.target, -1);
            break;
          case "caretRight":
            (0, Vd.m)(Jd.target, 1);
            break;
          case "shift": {
            const dd = performance.now();
            this.host.setState({
              ...Jd,
              shift: gW(Jd.shift, dd, this.lastShiftPressMs)
            }), this.lastShiftPressMs = dd;
            break
          }
          case "page":
          case "otherPage": {
            const kd = JW(Jd.page, Jd.accentsFirst)[dd];
            this.host.setState({
              ...Jd,
              page: kd,
              focus: ZW(eW({
                ...Jd,
                page: kd
              }), Jd.focus)
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
            (0, Yk.e)(Jd.target) && (0, Yk.c)().selectNextChannel()
        }
      }
      submit() {
        var dd, Jd;
        const {
          target: kd
        } = this.host.getState();
        this.host.hide(), (0, Yk.e)(kd) ? (0, Yk.c)().submit() : (JN.noteChosenStop(kd), null === (dd = (Jd = (0, Yk.d)(kd)).submit) || void 0 === dd || dd.call(Jd), document.activeElement === kd && kd.blur())
      }
      close() {
        const {
          target: dd
        } = this.host.getState();
        this.host.hide(), IW(dd)
      }
      typeChar(dd) {
        const {
          target: Jd,
          page: kd,
          shift: pd
        } = this.host.getState();
        (0, Vd.g)(Jd, KW(dd, kd, pd)), this.host.setState({
          ...this.host.getState(),
          shift: CW(pd, dd)
        })
      }
      sendPhrase(dd) {
        if (this.phrasesFill) {
          const {
            target: Jd
          } = this.host.getState(), kd = this.phraseTexts[dd];
          kd && (Jd.setSelectionRange(0, Jd.value.length), (0, Vd.g)(Jd, kd))
        } else QW.claim(performance.now()) && (this.host.hide(), (0, Yk.c)().sendLine(this.phraseTexts[dd]))
      }
    }
    var vW = kd(8565);
    const xW = {
        initialDelayMs: 380,
        intervalMs: 85
      },
      qW = {
        initialDelayMs: 400,
        intervalMs: 55
      };
    class BW {
      constructor(dd, Jd) {
        this.host = dd, this.editor = Jd, this.lastDirection = null, this.navRepeat = new Ld.c((0, Od.c)(xW)), this.commandRepeats = new Map(rN.filter((dd => {
          let {
            repeats: Jd
          } = dd;
          return Jd
        })).map((dd => {
          let {
            command: Jd
          } = dd;
          return [Jd, (0, Od.c)(qW)]
        })))
      }
      reset() {
        this.navRepeat.reset();
        for (const dd of this.commandRepeats.values()) dd.reset()
      }
      onVisibleFrame(dd) {
        const Jd = performance.now();
        for (const {
            command: Nd,
            action: Wd
          }
          of rN) {
          const kd = (0, Kd.j)(Wd),
            pd = this.commandRepeats.get(Nd);
          if ((pd ? pd.update(dd.isHeld(kd), Jd) : dd.wasPressed(kd)) && (this.editor.runCommand(Nd), !this.host.getState().visible)) return
        }
        if (dd.wasPressed((0, Kd.j)("keyboardType")) && (this.editor.pressKey(this.host.getState().focus), !this.host.getState().visible)) return;
        const kd = this.readNavDirection(dd);
        this.lastDirection = kd;
        const pd = this.navRepeat.update(kd, Jd);
        pd && this.navigate(pd)
      }
      onHiddenFrame(dd, Jd) {
        var kd;
        if (dd.wasPressed((0, Kd.j)("keyboardClose"))) return void IW(Jd);
        const pd = (0, Kd.j)("keyboardType");
        if (dd.wasPressed(pd)) return od.e.consumeButton(pd), void this.host.open(Jd);
        const Nd = this.readNavDirection(dd),
          Wd = null !== Nd && Nd !== this.lastDirection;
        if (this.lastDirection = Nd, !Wd || (0, Yk.e)(Jd)) return;
        const Pd = (null === (kd = op()) || void 0 === kd ? void 0 : kd.root.contains(Jd)) || null !== Jd.closest(".EntireInventoryWrapper");
        IW(Jd), Pd && od.e.handOffHeldInput()
      }
      navigate(dd) {
        const Jd = this.host.getState();
        if ("Up" === dd && 0 === Jd.focus.row && "chat" === Jd.kind) return (0, Yk.c)().stepHistory(), void this.host.setState({
          ...Jd
        });
        const kd = ((dd, Jd, kd, pd) => {
          if ("Left" === kd || "Right" === kd) {
            const pd = dd[Jd.row].length,
              Nd = (Jd.col + ("Right" === kd ? 1 : -1) + pd) % pd,
              Wd = {
                row: Jd.row,
                col: Nd
              };
            return {
              pos: Wd,
              preferredX: WW(dd, Wd)
            }
          }
          const Nd = (Jd.row + ("Down" === kd ? 1 : -1) + dd.length) % dd.length;
          return {
            pos: {
              row: Nd,
              col: PW(dd, Nd, pd)
            },
            preferredX: pd
          }
        })(eW(Jd), Jd.focus, dd, Jd.preferredX);
        this.host.setState({
          ...Jd,
          focus: kd.pos,
          preferredX: kd.preferredX
        })
      }
      readNavDirection(dd) {
        for (const Jd of Ld.C)
          if (dd.isHeld(Jd)) return Jd;
        return (0, Ld.fb)((0, Ld.i)(dd.leftStick, (0, ld.k)().moveDeadzone))
      }
    }
    const sW = ["Up", "Down", "Left", "Right"],
      iW = new Set(["CapsLock", "Control", "Fn", "FnLock", "Hyper", "NumLock", "ScrollLock", "Shift", "Super"]);
    const aW = new class {
      constructor() {
        this.state = LW, this.listeners = new Set, this.ownedField = null, this.pendingChatInput = null, this.pendingChatTimeout = 0, this.savedInputMode = null, this.editor = new GW(this), this.padInput = new BW(this, this.editor)
      }
      getState() {
        return this.state
      }
      setState(dd) {
        const Jd = dd.visible !== this.state.visible;
        this.state = dd;
        for (const kd of this.listeners) kd();
        Jd && Cd.j.nO(vW.b, dd.visible)
      }
      subscribe(dd) {
        return this.listeners.add(dd), () => {
          this.listeners.delete(dd)
        }
      }
      install() {
        const dd = od.e.register({
            name: "keyboard",
            isActive: () => this.state.visible || (0, Vd.j)(document.activeElement),
            onFrame: dd => {
              this.onFrame(dd)
            },
            onDeactivate: () => {
              this.padInput.reset()
            },
            wakePressActs: dd => sW.includes(dd) || !this.state.visible && dd === (0, Kd.j)("keyboardType")
          }),
          Jd = dd => {
            const Jd = dd.target;
            (0, Vd.j)(Jd) && (Jd === this.pendingChatInput || (0, Qd.h)() ? this.open(Jd) : this.state.visible && Jd !== this.state.target && (this.ownedField = null, this.hide()))
          },
          kd = () => {
            setTimeout((() => {
              this.releaseLostField()
            }), 0)
          },
          pd = dd => {
            dd.isTrusted && this.state.visible && (dd => !dd.repeat && !iW.has(dd.key) && !(0, oW.b)(dd.key) && !/^(Audio|Media|Browser|Launch|Gamepad)/.test(dd.key))(dd) && this.hide()
          },
          Nd = () => {
            this.state.visible && this.setState({
              ...this.state,
              ...RW(this.state.target)
            })
          };
        document.addEventListener("focusin", Jd, !0), document.addEventListener("focusout", kd, !0), window.addEventListener("keydown", pd, !0), window.addEventListener("resize", Nd);
        const Wd = Cd.j.subscribe(SN.d, (() => {
            this.openChat()
          })),
          Pd = Cd.j.subscribe(vW.d, (dd => {
            this.openForField(dd)
          }));
        return () => {
          dd(), document.removeEventListener("focusin", Jd, !0), document.removeEventListener("focusout", kd, !0), window.removeEventListener("keydown", pd, !0), window.removeEventListener("resize", Nd), Cd.j.unsubscribe(Wd), Cd.j.unsubscribe(Pd), this.clearPendingChat(), this.hide(), this.ownedField = null
        }
      }
      openChat() {
        const dd = (0, Yk.c)();
        dd ? document.activeElement !== dd.input ? (this.clearPendingChat(), this.pendingChatInput = dd.input, this.pendingChatTimeout = window.setTimeout((() => {
          this.pendingChatInput = null
        }), 250), dd.open()) : this.open(dd.input) : console.warn("controllerOpenChat with no chat mounted")
      }
      openForField(dd) {
        (0, Vd.j)(dd) ? (document.activeElement !== dd && dd.focus(), document.activeElement === dd && this.open(dd)) : console.warn("controllerOpenKeyboard needs an editable input or textarea", dd)
      }
      open(dd) {
        var Jd;
        if (this.clearPendingChat(), this.ownedField = dd, this.state.visible && this.state.target === dd) return;
        this.restoreInputMode(), (0, Vd.n)(dd), this.savedInputMode = dd.getAttribute("inputmode"), dd.setAttribute("inputmode", "none");
        const kd = {
          ...LW,
          visible: !0,
          target: dd,
          kind: (0, Yk.e)(dd) ? "chat" : null !== (Jd = (0, Yk.d)(dd).kind) && void 0 !== Jd ? Jd : null,
          accentsFirst: (pd = GN.c.get().getCurrentLanguageCode(), dW.has(pd)),
          ...RW(dd)
        };
        var pd;
        const Nd = eW(kd),
          Wd = ((dd, Jd) => {
            for (let kd = 0; kd < dd.length; kd++) {
              const pd = dd[kd].findIndex((dd => "char" === dd.type && dd.char === Jd));
              if (-1 !== pd) return {
                row: kd,
                col: pd
              }
            }
            return null
          })(Nd, "q");
        this.padInput.reset(), this.setState({
          ...kd,
          focus: Wd,
          preferredX: WW(Nd, Wd)
        })
      }
      hide() {
        this.state.visible && (this.restoreInputMode(), this.padInput.reset(), this.setState(LW))
      }
      onFrame(dd) {
        if (this.releaseLostField()) return;
        const Jd = document.activeElement;
        this.state.visible ? this.padInput.onVisibleFrame(dd) : (0, Vd.j)(Jd) && this.padInput.onHiddenFrame(dd, Jd)
      }
      releaseLostField() {
        const dd = this.ownedField;
        return !(null === dd || dd.isConnected && document.activeElement === dd) && (this.ownedField = null, this.hide(), !0)
      }
      clearPendingChat() {
        window.clearTimeout(this.pendingChatTimeout), this.pendingChatInput = null
      }
      restoreInputMode() {
        const {
          target: dd
        } = this.state;
        dd && (null === this.savedInputMode ? dd.removeAttribute("inputmode") : dd.setAttribute("inputmode", this.savedInputMode), this.savedInputMode = null)
      }
    };
    var MW = kd(8688);
    const FW = new Map(rN.map((dd => {
        let {
          command: Jd,
          action: kd
        } = dd;
        return [Jd, kd]
      }))),
      YW = {
        letters: "ABC",
        accents: "\xe0\xe9",
        symbols: "&123"
      },
      mW = {
        chat: "controller:keyboardTargetChat",
        sign: "controller:keyboardTargetSign",
        nameTag: "controller:keyboardTargetNameTag",
        book: "controller:keyboardTargetBook",
        iC: "controller:keyboardTargetBookTitle"
      },
      bW = dd => {
        const Jd = (() => {
          const [, dd] = (0, nd.useReducer)((dd => dd + 1), 0);
          return dd
        })();
        (0, nd.useEffect)((() => {
          if (!dd) return;
          const kd = ["input", "select", "selectionchange", "keyup", "pointerup"];
          for (const Nd of kd) dd.addEventListener(Nd, Jd);
          document.addEventListener("selectionchange", Jd);
          const pd = new MutationObserver(Jd);
          return pd.observe(dd, {
            attributeFilter: ["placeholder"]
          }), () => {
            pd.disconnect();
            for (const pd of kd) dd.removeEventListener(pd, Jd);
            document.removeEventListener("selectionchange", Jd)
          }
        }), [dd, Jd])
      },
      SW = dd => {
        dd.preventDefault()
      },
      jW = dd => {
        "mouse" !== dd.pointerType && dd.preventDefault()
      },
      XW = () => {
        var dd;
        const {
          t: Jd
        } = (0, Nd.B)(), kd = (() => {
          const [dd, Jd] = (0, nd.useState)(aW.getState());
          return (0, nd.useEffect)((() => aW.subscribe((() => {
            Jd(aW.getState())
          }))), []), dd
        })(), pd = (0, Qd.w)(), Wd = (0, nd.useRef)(null);
        (0, ld.t)(), (0, Qd.z)(), (0, nd.useEffect)((() => {
          const dd = aW.install(),
            Jd = null;
          return () => {
            dd(), null === Jd || void 0 === Jd || Jd()
          }
        }), []);
        const Pd = (0, nd.useMemo)((() => lW.map((dd => Jd(dd)))), [Jd]),
          Zd = kd.visible && "chat" === kd.kind ? kd.target : null;
        bW(Zd);
        const gd = null !== (dd = null === Zd || void 0 === Zd ? void 0 : Zd.value) && void 0 !== dd ? dd : "",
          Cd = ((dd, Jd, kd) => {
            if (!dd.startsWith("/")) return [];
            const pd = [];
            for (let Nd = Jd.length - 1; Nd >= 0 && pd.length < kd; Nd--) {
              const kd = Jd[Nd].trim();
              kd.startsWith(dd) && kd !== dd && !pd.includes(kd) && pd.push(kd)
            }
            return pd
          })(gd, gd.startsWith("/") ? (0, MW.f)() : [], lW.length),
          od = gd.startsWith("/"),
          Ld = od ? lW.map(((dd, Jd) => {
            var kd;
            return null !== (kd = Cd[Jd]) && void 0 !== kd ? kd : ""
          })) : Pd;
        if ((0, nd.useEffect)((() => {
            aW.editor.setPhraseRow(Ld, od)
          })), (0, nd.useEffect)((() => {
            const dd = Wd.current;
            if (dd) return dd.addEventListener("touchstart", SW, {
              passive: !1
            }), () => {
              dd.removeEventListener("touchstart", SW)
            }
          }), [kd.visible]), !kd.visible) return null;
        const Od = eW(kd),
          ed = NW(Od),
          Rd = dd => "char" === dd.type ? KW(dd.char, kd.page, kd.shift) : "phrase" === dd.type ? Ld[dd.phraseIndex] : (dd => {
            switch (dd) {
              case "backspace":
                return "\u232b";
              case "shift":
                return "caps" === kd.shift ? "\u21ea" : "\u21e7";
              case "page":
              case "otherPage":
                return YW[JW(kd.page, kd.accentsFirst)[dd]];
              case "space":
                return Jd("controller:keyboardSpace");
              case "caretLeft":
                return "\u2190";
              case "caretRight":
                return "\u2192";
              case "newline":
                return "\u21b5";
              case "submit":
                return Jd("chat" === kd.kind ? "controller:keyboardSend" : "controller:keyboardDone");
              case "close":
                return "\u2715";
              case "channel":
                return "\u21c4"
            }
          })(dd.command),
          Id = dd => {
            aW.editor.pressKey(dd)
          };
        return (0, Dd.jsxs)("div", {
          ref: Wd,
          className: yd()(Yk.j, "top" === kd.placement ? "PadKeyboardTop" : "PadKeyboardBottom", {
            PadKeyboardMultiline: kd.target instanceof HTMLTextAreaElement
          }),
          style: {
            "--pad-keyboard-rows": Od.length,
            "--pad-keyboard-height": `${kd.maxHeightPx}px`
          },
          onPointerDown: jW,
          onMouseDown: SW,
          children: [(0, Dd.jsx)(fW, {
            target: kd.target,
            label: kd.kind ? Jd(mW[kd.kind]) : kd.target.placeholder || Jd("controller:keyboardTargetText")
          }), (0, Dd.jsx)("div", {
            className: "PadKeyboardRows",
            children: Od.map(((dd, Jd) => (0, Dd.jsx)("div", {
              className: yd()("PadKeyboardRow", {
                PadKeyboardPhraseRow: "phrase" === dd[0].type
              }),
              children: dd.map(((dd, Nd) => {
                const Wd = pd && kd.focus.row === Jd && kd.focus.col === Nd,
                  Pd = "command" === dd.type ? FW.get(dd.command) : void 0;
                return (0, Dd.jsx)("div", {
                  className: "PadKeyboardKeySlot",
                  style: {
                    width: dd.width / ed * 100 + "%"
                  },
                  children: (0, Dd.jsxs)("div", {
                    className: yd()("PadKeyboardKey", {
                      PadKeyboardKeyFocused: Wd,
                      PadKeyboardKeyCommand: "command" === dd.type,
                      PadKeyboardKeyPhrase: "phrase" === dd.type,
                      PadKeyboardKeyActive: "command" === dd.type && "shift" === dd.command && "off" !== kd.shift,
                      PadKeyboardKeySubmit: "command" === dd.type && "submit" === dd.command
                    }),
                    role: "button",
                    onClick: () => {
                      Id({
                        row: Jd,
                        col: Nd
                      })
                    },
                    onTouchEnd: dd => {
                      var kd, pd;
                      dd.preventDefault(), kd = dd.changedTouches[0], pd = dd.currentTarget.getBoundingClientRect(), kd && kd.clientX >= pd.left && kd.clientX <= pd.right && kd.clientY >= pd.top && kd.clientY <= pd.bottom && Id({
                        row: Jd,
                        col: Nd
                      })
                    },
                    children: [(0, Dd.jsx)("span", {
                      className: "PadKeyboardKeyLabel",
                      children: Rd(dd)
                    }), pd && Pd && (0, Dd.jsx)(sN, {
                      className: "PadKeyboardKeyGlyph",
                      glyph: (0, Kd.j)(Pd)
                    })]
                  })
                }, Nd)
              }))
            }, Jd)))
          })]
        })
      },
      fW = dd => {
        let {
          target: Jd,
          label: kd
        } = dd;
        bW(Jd);
        const pd = (0, nd.useRef)(null),
          Nd = (0, nd.useRef)(null),
          Wd = Jd instanceof HTMLTextAreaElement;
        (0, nd.useLayoutEffect)((() => {
          const dd = pd.current,
            Jd = Nd.current;
          Wd ? dd.scrollTop = Jd.offsetTop - dd.clientHeight / 2 : dd.scrollLeft = Jd.offsetLeft - dd.clientWidth / 2
        }));
        const {
          value: Pd,
          start: Zd,
          end: gd
        } = (0, Vd.p)(Jd), Cd = "password" === Jd.type ? "\u2022".repeat(Pd.length) : Pd;
        return (0, Dd.jsxs)("div", {
          className: "PadKeyboardPreview",
          children: [(0, Dd.jsx)("div", {
            className: "PadKeyboardPreviewLabel SmallTextBold",
            children: kd
          }), (0, Dd.jsxs)("div", {
            ref: pd,
            className: yd()("PadKeyboardPreviewText", {
              PadKeyboardPreviewMultiline: Wd
            }),
            children: [(0, Dd.jsx)("span", {
              children: Cd.slice(0, Zd)
            }), (0, Dd.jsx)("span", {
              ref: Nd,
              className: "PadKeyboardCaret"
            }), Zd !== gd && (0, Dd.jsx)("span", {
              className: "PadKeyboardPreviewSelection",
              children: Cd.slice(Zd, gd)
            }), (0, Dd.jsx)("span", {
              children: Cd.slice(gd)
            }), 0 === Cd.length && Jd.placeholder && Jd.placeholder !== kd && (0, Dd.jsx)("span", {
              className: "PadKeyboardPreviewPlaceholder",
              children: Jd.placeholder
            })]
          })]
        })
      };
    var nW = kd(1404),
      UW = kd(3256);
    const yW = function() {
        for (var dd = arguments.length, Jd = new Array(dd), kd = 0; kd < dd; kd++) Jd[kd] = arguments[kd];
        return Jd.map(Kd.j)
      },
      DW = (dd, Jd) => {
        const kd = rk(dd);
        return kd ? [{
          glyphs: [kd],
          labelKey: Jd
        }] : []
      },
      TW = [".BottomMiddleElements", ".BottomLeftElements > *", ".BottomRightElements > *", ".MiddleTextBottom .MiddleText"],
      EW = "--pad-hint-bar-clearance",
      cW = "[data-pad-hint-bar-avoid]",
      hW = dd => {
        const Jd = [];
        for (const kd of dd)(0, Ad.n)(kd) && Jd.push(kd.getBoundingClientRect());
        return Jd
      },
      rW = dd => {
        if (!dd) return null;
        const Jd = op(),
          kd = Jd ? hW(((dd, Jd) => {
            const kd = dd.closest(cW);
            return kd ? [kd] : ("popup" === Jd ? document : dd).querySelectorAll(cW)
          })(Jd.root, Jd.layer.kind)) : [],
          pd = !Jd || Jd.root.hasAttribute("data-pad-shows-hud");
        if (((0, UW.h)(null === Jd || void 0 === Jd ? void 0 : Jd.layer.kind, (0, UW.j)()) || pd) && kd.push(...hW(document.querySelectorAll(TW.join(",")))), 0 === kd.length) return null;
        const {
          width: Nd,
          height: Wd
        } = dd.getBoundingClientRect(), Pd = window.innerHeight - 8, Zd = (0, UW.l)(Pd, {
          width: Nd,
          height: Wd
        }, window.innerWidth / 2, kd, 8);
        return Zd === Pd ? null : Math.round(window.innerHeight - Zd)
      },
      uW = dd => {
        const Jd = document.documentElement.style,
          kd = dd ? `${Math.round(window.innerHeight-dd.getBoundingClientRect().top)}px` : "";
        Jd.getPropertyValue(EW) !== kd && (kd ? Jd.setProperty(EW, kd) : Jd.removeProperty(EW))
      },
      tW = () => {
        const {
          t: dd
        } = (0, Nd.B)(), {
          hideButtonHints: Jd
        } = (0, ld.t)(), kd = (0, Qd.w)(), [pd, Wd] = (0, nd.useState)(!1), [Pd, Cd] = (0, nd.useState)([]), [Od, ed] = (0, nd.useState)(null), Rd = (0, nd.useRef)(null), Id = (0, nd.useRef)(null);
        (0, IN.h)(vW.b, (dd => {
          Wd(dd)
        })), (0, IN.h)(UW.k, (() => {
          var dd;
          null === (dd = Id.current) || void 0 === dd || dd.call(Id)
        }));
        const Gd = kd && !Jd && !pd;
        return (0, nd.useEffect)((() => {
          if (!Gd) return;
          let dd = null;
          const Jd = () => {
            const Jd = (() => {
                var dd;
                const Jd = od.e.getActiveConsumerName(),
                  kd = (0, UW.g)();
                if (kd) {
                  const dd = (0, Kd.j)(kd),
                    Jd = "emoteWheel" === kd && "wheel" === (0, ld.k)().emoteButton || !(0, Ld.H)(od.e.getLastFrame().values, dd) ? {
                      glyphs: yW("menuConfirm"),
                      labelKey: "controller:menusSelect"
                    } : {
                      glyphs: [dd],
                      labelKey: "controller:wheelReleaseToPick"
                    };
                  return [{
                    glyphs: [(0, Kd.v)(dd)],
                    labelKey: "controller:wheelChoose"
                  }, Jd, {
                    glyphs: yW("menuBack"),
                    labelKey: "controller:wheelClose"
                  }]
                }
                const pd = op();
                if (!pd || "focus" !== Jd && "cursor" !== Jd) return (0, UW.e)(Kd.j);
                const Nd = [],
                  Wd = {
                    glyphs: yW("menuBack"),
                    labelKey: "controller:menusBack"
                  },
                  Pd = (0, rd.r)(pd.root),
                  Zd = Pd ? !(0, Ad.t)(Pd) : Boolean(pd.layer.close),
                  Cd = !Pd && pd.layer.closeLabelKey ? pd.layer.closeLabelKey : Wd.labelKey,
                  Qd = Zd ? [{
                    ...Wd,
                    labelKey: Cd
                  }] : [],
                  Od = Sk(pd.layer.kind) ? [{
                    glyphs: yW("chat"),
                    labelKey: "controller:menusQuickChat"
                  }] : [];
                if ("cursor" === Jd) return Nd.push({
                  glyphs: yW("menuConfirm"),
                  labelKey: "controller:menusClick"
                }), Nd.push({
                  glyphs: yW("menuSecondary"),
                  labelKey: "controller:menusRightClick"
                }), Nd.push(...Qd), Nd.push(...Od), Nd.push({
                  glyphs: ["RightStick"],
                  labelKey: "controller:menusScroll"
                }), ap() && Nd.push({
                  glyphs: yW("menuToggleCursor"),
                  labelKey: "controller:menusFocusMode"
                }), Nd;
                const ed = JN.getFocused();
                ed && (0, bp.b)(ed) ? Nd.push({
                  glyphs: ["Left", "Right"],
                  labelKey: "controller:menusAdjust"
                }) : ed && (0, rd.y)(ed) ? Nd.push({
                  glyphs: [],
                  labelKey: "controller:menusUseMouse"
                }) : Nd.push({
                  glyphs: yW("menuConfirm"),
                  labelKey: "controller:menusSelect"
                });
                const Rd = ed ? null === (dd = Lk(ed)) || void 0 === dd ? void 0 : dd.dataset.padSecondary : void 0;
                Rd && Nd.push({
                  glyphs: yW("menuSecondary"),
                  labelKey: Rd
                }), Nd.push(...null !== ed && void 0 !== ed && ed.closest("[data-pad-friends-column]") ? [Wd] : Qd), Nd.push(...Od);
                const Id = "home" === pd.layer.kind;
                Vk(pd.root) || !nk(pd.root) && !zk(pd) ? Id && Nd.push({
                  glyphs: yW("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusRows"
                }) : Nd.push({
                  glyphs: yW("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusTabs"
                }), Id && (Nd.push(...DW("inventory", "controller:menusFriends")), Rd || Nd.push({
                  glyphs: yW("menuSecondary"),
                  labelKey: "controller:menusSearch"
                }), Nd.push(...DW("pause", "controller:menusSettings")), Nd.push(...DW("leaderboard", "controller:menusNotifications")));
                const Gd = gd.d.get("openEverythingMenuName");
                return "inGame" === gd.d.get("gameState") && "popup" !== pd.layer.kind && null !== Gd && ((0, Ck.k)(Gd) ? Nd.push(...DW("leaderboard", "controller:menusClose")) : Gd !== gk.s.LOBBY_LEADERBOARD && Nd.push(...DW("leaderboard", "controller:menusLobby"))), Nd.push({
                  glyphs: yW("menuToggleCursor"),
                  labelKey: "controller:menusCursorMode"
                }), Nd
              })(),
              kd = rW(Rd.current),
              pd = ((dd, Jd) => `${dd.map((dd=>`${dd.glyphs.join("+")}:${dd.labelKey}`)).join("|")}@${Jd}`)(Jd, kd);
            pd !== dd && (dd = pd, (0, Zd.unstable_batchedUpdates)((() => {
              Cd(Jd), ed(kd)
            }))), uW(Rd.current)
          };
          Jd(), Id.current = Jd;
          const kd = requestAnimationFrame(Jd),
            pd = setInterval(Jd, 150);
          return () => {
            Id.current = null, cancelAnimationFrame(kd), clearInterval(pd), uW(null)
          }
        }), [Gd]), (0, nd.useLayoutEffect)((() => {
          if (!Gd) return;
          if (0 === Pd.length) return void uW(null);
          const dd = rW(Rd.current);
          dd === Od ? uW(Rd.current) : ed(dd)
        }), [Gd, Pd, Od]), Gd && 0 !== Pd.length ? (0, Dd.jsx)("div", {
          ref: Rd,
          className: "PadButtonHintBar SmallTextBold",
          style: null === Od ? void 0 : {
            bottom: Od
          },
          "aria-hidden": !0,
          children: Pd.map((Jd => (0, Dd.jsxs)("div", {
            className: "PadButtonHint",
            children: [Jd.glyphs.map((dd => (0, Dd.jsx)(sN, {
              glyph: dd,
              className: "PadButtonHintGlyph"
            }, dd))), (0, Dd.jsx)("span", {
              children: dd(Jd.labelKey)
            })]
          }, Jd.labelKey)))
        }) : null
      };
    var VW = kd(1756);
    const zW = [Ad.c, "label", "[data-pad-slider]"].join(","),
      HW = "data-pad-cursor-probe",
      wW = dd => {
        var Jd;
        const kd = (dd => {
          const Jd = [];
          for (let pd = dd; pd && pd !== document.body && pd !== document.documentElement && (Jd.push(pd), !(Jd.length > 8)); pd = pd.parentElement);
          const kd = document.documentElement.classList.contains(Qd.n) ? Jd[Jd.length - 1] : void 0;
          null === kd || void 0 === kd || kd.setAttribute(HW, "");
          try {
            return Jd.map((dd => ({
              element: dd,
              cursor: getComputedStyle(dd).cursor
            })))
          } finally {
            null === kd || void 0 === kd || kd.removeAttribute(HW)
          }
        })(dd);
        if ("pointer" !== (null === (Jd = kd[0]) || void 0 === Jd ? void 0 : Jd.cursor)) return null;
        let pd = 0;
        for (; pd + 1 < kd.length && "pointer" === kd[pd + 1].cursor;) pd++;
        return kd[pd].element
      },
      AW = (dd, Jd, kd, pd) => {
        const Nd = pd.root.contains(dd) ? pd.root : null;
        for (let Wd = dd; Wd && Wd !== document.body && Wd !== document.documentElement; Wd = Wd.parentElement) {
          if (Wd instanceof HTMLElement && Md(Wd, Jd) && Sd(Wd, Jd, kd)) return Wd;
          if (Wd === Nd) break
        }
        return "home" === pd.layer.kind || "gamePage" === pd.layer.kind ? ((dd, Jd) => {
          const kd = document.scrollingElement;
          return kd instanceof HTMLElement && ![document.documentElement, document.body].some((Jd => {
            const kd = getComputedStyle(Jd),
              pd = "y" === dd ? kd.overflowY : kd.overflowX;
            return "hidden" === pd || "clip" === pd
          })) && Sd(kd, dd, Jd) ? kd : null
        })(Jd, kd) : null
      };
    const dP = new class {
        constructor() {
          this.state = {
            x: 0,
            y: 0,
            speedRamp: 0
          }, this.hasPosition = !1, this.active = !1, this.hidden = !1, this.hit = null, this.interactive = null, this.magnet = null, this.lastHitTestMs = -1 / 0, this.press = null, this.draggedSlider = null, this.repeatStop = null, this.repeatKey = null, this.repeated = !1, this.confirmRepeat = (0, Od.c)(Ld.x), this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.layerRoot = null, this.layerOrder = 0, this.layerPoints = new WeakMap, this.page = null, this.pendingPageStart = null
        }
        install() {
          const dd = od.e.register({
              name: "cursor",
              isActive: () => "cursor" === Mp(),
              onFrame: dd => {
                this.onFrame(dd)
              },
              onDeactivate: () => {
                this.deactivate()
              },
              wakePressActs: dd => (0, od.i)(dd) || dd === (0, Kd.j)("menuConfirm") && (0, rd.A)((0, Qd.c)())
            }),
            Jd = (0, pp.i)((dd => {
              const Jd = dd.getRoot();
              Jd && this.layerPoints.delete(Jd), Jd === this.layerRoot && (this.layerRoot = null)
            })),
            kd = Cd.j.subscribe("appManagerUpdated|activeInputDevice", (dd => {
              "gamepad" !== dd && this.active && !this.hidden && this.hide()
            }));
          return () => {
            dd(), Jd(), Cd.j.unsubscribe(kd), this.deactivate()
          }
        }
        getHighlighted() {
          return this.isVisible() ? this.interactive : null
        }
        isVisible() {
          return this.active && !this.hidden && (0, Qd.h)()
        }
        getPoint() {
          return {
            x: this.state.x,
            y: this.state.y
          }
        }
        hide() {
          this.hidden = !0, this.cancelPress(), this.secondaryArmed = !1, this.clearHover(), this.nO()
        }
        activate(dd) {
          this.active = !0, this.hidden = !1;
          const Jd = Bp();
          !Jd || Jd.root && Jd.root !== dd.root ? this.jumpTo(this.hasPosition ? this.getPoint() : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          }) : (this.setLayer(dd), this.jumpTo(Jd.point))
        }
        jumpTo(dd) {
          this.state = {
            x: dd.x,
            y: dd.y,
            speedRamp: 0
          }, this.hasPosition = !0, this.lastHitTestMs = -1 / 0
        }
        deactivate() {
          this.active && (this.active = !1, this.page = null, this.pendingPageStart = null, this.cancelPress(), this.clearHover(), this.draggedSlider = null, this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.nO())
        }
        onFrame(dd) {
          const Jd = op();
          if (!Jd) return;
          if (this.active || this.activate(Jd), this.followPage(Jd)) return;
          this.followLayer(Jd);
          const kd = dd.wokeDevice ? (0, Qd.c)() : null;
          if (kd && this.jumpTo(kd), !(0, Qd.h)()) return void this.hide();
          const pd = (0, Kd.j)("menuToggleCursor");
          if (dd.wasPressed(pd)) return od.e.consumeButton(pd), void qp(this.getHandoff(null));
          if (this.handBackToFocus(dd)) return;
          const Nd = (0, Kd.j)("menuConfirm"),
            Wd = (0, Kd.j)("menuSecondary");
          if (dd.wasPressed((0, Kd.j)("menuBack"))) return (0, rd.j)(Jd.root) || (0, rd.g)(Jd.root) || lp(), void this.nO();
          if (Ak(null, dd, Jd)) return dd.wasReleased(Nd) && this.press && (this.updateHit(!1), this.updateConfirm(dd, Nd)), void this.nO();
          if (document.pointerLockElement) return void this.hide();
          const Pd = Fp() ? {
              x: 0,
              y: 0
            } : (dd => {
              const Jd = (dd, Jd) => (dd ? 1 : 0) - (Jd ? 1 : 0);
              return {
                x: Jd(dd.isHeld("Right"), dd.isHeld("Left")),
                y: Jd(dd.isHeld("Down"), dd.isHeld("Up"))
              }
            })(dd),
            Zd = (0, ld.k)().moveDeadzone,
            gd = ((dd, Jd) => {
              const kd = (0, Ld.i)(dd, vd(Jd));
              return Math.hypot(kd.x, kd.y)
            })(dd.leftStick, Zd) > 0 || 0 !== Pd.x || 0 !== Pd.y;
          if (this.hidden) {
            const Jd = dd.wasPressed(Nd),
              kd = dd.wasPressed(Wd);
            if (!gd && !Bd(dd.rightStick) && !Jd && !kd && !dd.wokeDevice) return void this.nO();
            if (this.hidden = !1, this.updateHit(!1), Jd || kd) return Jd && (this.press = {
              kind: "ignored"
            }, dd.wokeDevice && this.beginRepeat()), this.secondaryArmed = !1, void this.nO()
          }
          this.movePendingPageStart(gd);
          const Cd = this.getPoint();
          this.state = qd(this.state, {
            stick: dd.leftStick,
            moveDeadzone: Zd,
            dpad: Pd,
            dtMs: dd.dtMs,
            cursorSpeedPercent: (0, ld.k)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: this.getAssistContext()
          });
          const Od = this.state.x !== Cd.x || this.state.y !== Cd.y,
            ed = [Nd, Wd].some((Jd => dd.wasPressed(Jd) || dd.wasReleased(Jd)));
          (Od || ed || performance.now() - this.lastHitTestMs >= 100) && this.updateHit(Od), this.updateConfirm(dd, Nd), this.updateSecondary(dd, Wd), this.updateScroll(dd, Jd), this.nO()
        }
        followPage(dd) {
          const Jd = "home" === dd.layer.kind || "gamePage" === dd.layer.kind,
            kd = this.page;
          if (this.page = Jd ? {
              key: (0, pp.o)(dd.layer),
              root: dd.root
            } : null, !this.page || !kd || kd.root !== dd.root || kd.key === this.page.key) return !1;
          if (this.cancelPress(), this.secondaryArmed = !1, this.setLayer(dd), "hybrid" === xp()) return Ip = null, ep = null, Gp.lock(), !0;
          const {
            key: pd
          } = this.page;
          return this.pendingPageStart = {
            root: dd.root,
            key: pd,
            returning: JN.notePageEnteredByCursor(pd),
            enteredAtMs: performance.now()
          }, !1
        }
        movePendingPageStart(dd) {
          const Jd = this.pendingPageStart;
          if (!Jd) return;
          if (dd || Jd.root !== this.layerRoot) return void(this.pendingPageStart = null);
          const kd = Jd.returning ? JN.recallStop(Jd.root, Jd.key) : null;
          if (!kd && Jd.returning && performance.now() - Jd.enteredAtMs < 1e3) return;
          const pd = null !== kd && void 0 !== kd ? kd : JN.pickInitial(Jd.root, {
            includeDisabled: !0,
            waitForContent: !0,
            enteredAtMs: Jd.enteredAtMs
          });
          pd && (this.pendingPageStart = null, this.jumpTo((0, rd.v)(pd)))
        }
        setLayer(dd) {
          this.layerRoot = dd.root, this.layerOrder = dd.order
        }
        followLayer(dd) {
          var Jd;
          if (dd.root === this.layerRoot) return;
          null !== (Jd = this.layerRoot) && void 0 !== Jd && Jd.isConnected && this.layerPoints.set(this.layerRoot, this.getPoint()), this.cancelPress(), this.draggedSlider = null, this.secondaryArmed = !1;
          const kd = this.layerPoints.get(dd.root),
            pd = kd && dd.order <= this.layerOrder ? kd : JN.getLayerStartPoint(dd.root);
          this.setLayer(dd), this.jumpTo(pd)
        }
        getHandoff(dd) {
          var Jd;
          return {
            point: this.getPoint(),
            element: null !== (Jd = this.interactive) && void 0 !== Jd ? Jd : this.findDraggedSliderNearby(),
            direction: dd
          }
        }
        findDraggedSliderNearby() {
          const dd = this.draggedSlider;
          if (null === dd || void 0 === dd || !dd.isConnected) return null;
          const Jd = dd.getBoundingClientRect(),
            {
              y: kd
            } = this.getPoint();
          return kd >= Jd.top - 40 && kd <= Jd.bottom + 40 ? dd : null
        }
        handBackToFocus(dd) {
          if (!Fp()) return !1;
          const Jd = Ld.C.find((Jd => dd.wasPressed(Jd)));
          return !!Jd && (kd = this.getHandoff(Jd), Ip = Lp(kd), ep = null, Gp.lock(), od.e.handOffHeldInput(), !0);
          var kd
        }
        getAssistContext() {
          const dd = this.interactive;
          if (null === dd || void 0 === dd || !dd.isConnected) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const Jd = dd.getBoundingClientRect();
          if (Jd.width > .4 * window.innerWidth || Jd.height > .4 * window.innerHeight) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const kd = (0, ld.k)().cursorMagnetism && !(0, VW.e)(dd) && !dd.closest("[data-pad-slider]"),
            pd = this.magnet && this.magnet !== dd && this.magnet.isConnected ? this.magnet.getBoundingClientRect() : Jd;
          return {
            overInteractive: !0,
            magnetTarget: kd ? {
              x: pd.left + pd.width / 2,
              y: pd.top + pd.height / 2
            } : null
          }
        }
        updateHit(dd) {
          this.lastHitTestMs = performance.now();
          const Jd = this.getPoint(),
            kd = document.elementFromPoint(Jd.x, Jd.y),
            pd = kd && !(0, Rd.l)(kd) && (dd => {
              var Jd;
              const kd = op();
              return !(kd && !kd.root.contains(dd) && !dd.closest(".tooltip-container")) || !(null !== (Jd = document.getElementById("root")) && void 0 !== Jd && Jd.contains(dd))
            })(kd) ? kd : null;
          if (pd !== this.hit) return (0, rd.o)(this.hit, pd, Jd), this.hit = pd, void this.setInteractive(pd ? (dd => {
            const Jd = dd.closest(zW);
            if (Jd) {
              var kd, pd;
              const dd = null !== (kd = null === (pd = Jd.parentElement) || void 0 === pd ? void 0 : pd.closest("[data-pad-focusable]")) && void 0 !== kd ? kd : Jd;
              return (0, Ad.t)(dd) ? {
                element: null,
                magnet: null
              } : {
                element: dd,
                magnet: Jd
              }
            }
            const Nd = wW(dd);
            return {
              element: Nd,
              magnet: Nd
            }
          })(pd) : {
            element: null,
            magnet: null
          });
          dd && pd && (0, rd.o)(pd, pd, Jd)
        }
        setInteractive(dd) {
          let {
            element: Jd,
            magnet: kd
          } = dd;
          this.interactive = Jd, this.magnet = kd
        }
        clearHover() {
          this.hit && (0, rd.o)(this.hit, null, this.getPoint()), this.hit = null, this.setInteractive({
            element: null,
            magnet: null
          })
        }
        beginPress() {
          const dd = this.hit;
          if (!dd || (0, rd.y)(dd)) return {
            kind: "ignored"
          };
          const Jd = (0, bp.b)(dd),
            kd = dd.closest("[data-pad-slider]");
          return Jd && kd ? {
            kind: "slider",
            slider: kd,
            adjuster: Jd
          } : ((0, rd.p)(dd, this.getPoint()), {
            kind: "pointer",
            target: dd
          })
        }
        applySliderFraction(dd) {
          var Jd;
          const kd = dd.slider.getBoundingClientRect(),
            pd = kd.height > kd.width,
            Nd = null === (Jd = dd.slider.querySelector("[data-pad-slider-handle]")) || void 0 === Jd ? void 0 : Jd.getBoundingClientRect(),
            Wd = Nd ? pd ? Nd.height : Nd.width : 0,
            Pd = (pd ? kd.height : kd.width) - Wd;
          if (Pd <= 0) return;
          const Zd = pd ? kd.bottom - Wd / 2 - this.state.y : this.state.x - kd.left - Wd / 2;
          dd.adjuster.setFraction(Math.max(0, Math.min(1, Zd / Pd)))
        }
        updateConfirm(dd, Jd) {
          dd.wasPressed(Jd) && (this.press = dd.wokeDevice ? {
            kind: "ignored"
          } : this.beginPress(), this.draggedSlider = "slider" === this.press.kind ? this.press.slider : null, this.beginRepeat());
          const kd = this.press;
          if (!kd) return;
          if (dd.isHeld(Jd)) return "slider" === kd.kind && this.applySliderFraction(kd), void this.updateRepeat();
          this.press = null;
          const pd = this.repeated;
          if (this.endRepeat(), !dd.wasReleased(Jd)) return void this.endPressWithoutClick(kd);
          const Nd = this.getPoint(),
            Wd = this.hit;
          if ("slider" === kd.kind && kd.adjuster.endDrag(), "pointer" === kd.kind) {
            const dd = null !== Wd && void 0 !== Wd ? Wd : kd.target.isConnected ? kd.target : null;
            dd && (0, rd.q)(dd, Nd);
            const Jd = Wd && kd.target.isConnected && !pd ? ((dd, Jd) => {
              for (let kd = dd; kd; kd = kd.parentElement)
                if (kd.contains(Jd)) return kd;
              return null
            })(kd.target, Wd) : null;
            Jd && (JN.noteCursorActivation(Jd), (0, Rd.f)(Jd, new MouseEvent("click", (0, rd.F)(Nd, 0, 0))), (0, rd.h)(Jd), (0, rd.D)(Jd) && (0, rd.B)(Jd))
          }
        }
        beginRepeat() {
          var dd, Jd, kd;
          const pd = null !== (dd = null === (Jd = this.hit) || void 0 === Jd ? void 0 : Jd.closest("[data-pad-repeat]")) && void 0 !== dd ? dd : null;
          this.repeatStop = pd, this.repeatKey = null !== (kd = null === pd || void 0 === pd ? void 0 : pd.getAttribute("data-pad-repeat")) && void 0 !== kd ? kd : null, this.repeated = !1, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now())
        }
        updateRepeat() {
          const dd = this.repeatStop;
          if (!dd) return;
          const Jd = this.hit;
          dd.isConnected && !(0, Ad.t)(dd) && dd.getAttribute("data-pad-repeat") === this.repeatKey && Jd && dd.contains(Jd) ? dd.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.repeated = !0, JN.noteCursorActivation(dd), (0, Rd.f)(dd, new MouseEvent("click", (0, rd.F)(this.getPoint(), 0, 0)))) : this.repeatStop = null
        }
        endRepeat() {
          this.repeatStop = null, this.repeated = !1
        }
        endPressWithoutClick(dd) {
          "slider" === dd.kind && dd.adjuster.endDrag(), "pointer" === dd.kind && dd.target.isConnected && (0, rd.q)(dd.target, this.getPoint())
        }
        cancelPress() {
          this.endRepeat(), this.press && (this.endPressWithoutClick(this.press), this.press = null)
        }
        updateSecondary(dd, Jd) {
          dd.wasPressed(Jd) && (this.secondaryArmed = null !== this.hit), this.secondaryArmed && !dd.isHeld(Jd) && (this.secondaryArmed = !1, dd.wasReleased(Jd) && this.hit && (0, rd.k)(this.hit, this.getPoint(), 2))
        }
        updateScroll(dd, Jd) {
          const kd = sd(dd.rightStick, dd.dtMs);
          if (0 === kd.x && 0 === kd.y) return void(this.scrollRemainder = {
            x: 0,
            y: 0
          });
          this.scrollRemainder = {
            x: this.scrollRemainder.x + kd.x,
            y: this.scrollRemainder.y + kd.y
          };
          const pd = Math.trunc(this.scrollRemainder.x),
            Nd = Math.trunc(this.scrollRemainder.y);
          this.scrollRemainder = {
            x: this.scrollRemainder.x - pd,
            y: this.scrollRemainder.y - Nd
          };
          const Wd = this.hit;
          if (!Wd) return;
          let Pd = !1;
          if (0 !== Nd) {
            const dd = AW(Wd, "y", Nd > 0 ? 1 : -1, Jd);
            dd && (dd.scrollBy({
              top: Nd,
              behavior: "instant"
            }), Pd = !0)
          }
          if (0 !== pd) {
            const dd = AW(Wd, "x", pd > 0 ? 1 : -1, Jd);
            dd && (dd.scrollBy({
              left: pd,
              behavior: "instant"
            }), Pd = !0)
          }
          Pd && (this.lastHitTestMs = -1 / 0)
        }
        nO() {
          td.set({
            x: this.state.x,
            y: this.state.y,
            visible: this.isVisible(),
            pressed: null !== this.press && "ignored" !== this.press.kind
          })
        }
      },
      JP = () => {
        const dd = (0, nd.useMemo)((() => new cd), []),
          Jd = (0, Qd.w)();
        return (0, nd.useEffect)((() => {
          if (!Jd) return;
          let kd = 0,
            pd = {
              of: null,
              atMs: 0,
              list: []
            };
          const Nd = document.getElementsByClassName(Yp),
            Wd = dd => {
              for (const Jd of [...Nd]) Jd !== dd && Jd.classList.remove(Yp)
            },
            Pd = () => {
              var Jd;
              kd = requestAnimationFrame(Pd);
              const Nd = (() => {
                const dd = JN.getFocused();
                if (JN.isActive() && null !== dd && void 0 !== dd && dd.isConnected) return dd;
                const Jd = dP.getHighlighted();
                return null !== Jd && void 0 !== Jd && Jd.isConnected ? Jd : null
              })();
              Wd(Nd), Nd && !Nd.classList.contains(Yp) && Nd.classList.add(Yp);
              const Zd = null !== (Jd = null === Nd || void 0 === Nd ? void 0 : Nd.closest("[data-pad-reticle-box]")) && void 0 !== Jd ? Jd : Nd;
              dd.show(Zd ? ((dd, Jd) => {
                let kd = dd.left,
                  pd = dd.top,
                  Nd = dd.right,
                  Wd = dd.bottom;
                for (const Pd of Jd) {
                  if (!Pd) continue;
                  const dd = Xd(Pd);
                  kd = Math.max(kd, dd.left), pd = Math.max(pd, dd.top), Nd = Math.min(Nd, dd.right), Wd = Math.min(Wd, dd.bottom)
                }
                return Nd <= kd || Wd <= pd ? null : {
                  left: kd,
                  top: pd,
                  width: Nd - kd,
                  height: Wd - pd
                }
              })(Zd.getBoundingClientRect(), (dd => {
                const Jd = performance.now();
                return (pd.of !== dd || Jd - pd.atMs > 500) && (pd = {
                  of: dd,
                  atMs: Jd,
                  list: [Fd(dd, "y"), Fd(dd, "x")]
                }), pd.list
              })(Zd)) : null)
            };
          return kd = requestAnimationFrame(Pd), () => {
            cancelAnimationFrame(kd), Wd(null), dd.hide()
          }
        }), [Jd, dd]), (0, Dd.jsx)(hd, {
          placer: dd,
          className: "PadFocusRing"
        })
      },
      kP = (dd, Jd) => {
        dd.style.transform = `translate3d(${Jd.x}px, ${Jd.y}px, 0)`, dd.classList.toggle("Visible", Jd.visible), dd.classList.toggle("Pressed", Jd.pressed)
      },
      pP = () => {
        const dd = (0, nd.useRef)(null);
        return (0, nd.useEffect)((() => {
          const Jd = td.subscribe((Jd => {
            dd.current && kP(dd.current, Jd)
          }));
          return dd.current && kP(dd.current, td.get()), Jd
        }), []), (0, Dd.jsx)("div", {
          ref: dd,
          className: "PadCursorView",
          "aria-hidden": "true",
          children: (0, Dd.jsx)("div", {
            className: "PadCursorGlyph",
            children: "+"
          })
        })
      },
      NP = "#ncmp__modal.ncmp__active",
      WP = [{
        id: "nitro-consent-banner",
        find: () => document.querySelector(NP) ? null : document.querySelector("#ncmp__tool > .ncmp__banner.ncmp__active"),
        startSelectors: ["[data-ncmp-cmd='reject']", "[data-ncmp-cmd='showModal']"]
      }, {
        id: "nitro-consent-modal",
        find: () => document.querySelector(NP),
        startSelectors: ["[data-ncmp-cmd='reject']"]
      }, {
        id: "google-consent",
        find: () => document.querySelector(".fc-consent-root"),
        startSelectors: [".fc-cta-do-not-consent", ".fc-cta-manage-options"]
      }],
      PP = "PadOverThirdParty",
      ZP = new Set(WP.map((dd => dd.id))),
      gP = () => {
        const dd = WP.map((dd => {
            let {
              id: Jd,
              find: kd,
              startSelectors: pd
            } = dd;
            return (0, pp.l)({
              id: Jd,
              kind: "popup",
              getRoot: () => {
                const dd = kd(),
                  Jd = dd ? ((dd, Jd) => {
                    var kd;
                    for (const pd of Jd) {
                      const Jd = dd.querySelector(pd);
                      if (Jd) return Jd
                    }
                    return null !== (kd = [...dd.querySelectorAll("button")].find((dd => !dd.matches(".fc-cta-consent, [data-ncmp-cmd='save']")))) && void 0 !== kd ? kd : null
                  })(dd, pd) : null;
                if (dd && Jd && !Jd.hasAttribute("data-pad-default-focus")) {
                  for (const Jd of dd.querySelectorAll("[data-pad-default-focus]")) Jd.removeAttribute("data-pad-default-focus");
                  for (const Jd of dd.querySelectorAll("[data-pad-hint-bar-avoid]")) Jd.removeAttribute("data-pad-hint-bar-avoid");
                  Jd.setAttribute("data-pad-default-focus", ""), ((dd, Jd) => {
                    let kd = dd;
                    for (let pd = dd.parentElement; pd && Jd.contains(pd) && !(pd.getBoundingClientRect().height >= window.innerHeight / 2); pd = pd.parentElement) kd = pd;
                    return kd
                  })(Jd, dd).setAttribute("data-pad-hint-bar-avoid", "")
                }
                return dd
              },
              close: null,
              memoryKey: null
            })
          })),
          Jd = document.documentElement,
          kd = Pd.c.onFrame((() => {
            const dd = (0, Qd.h)() ? op() : null,
              kd = !!dd && (pd = dd.layer, ZP.has(pd.id));
            var pd;
            Jd.classList.contains(PP) !== kd && Jd.classList.toggle(PP, kd)
          }));
        return () => {
          for (const Jd of dd) Jd();
          kd(), Jd.classList.remove(PP)
        }
      },
      CP = "PadLargePointer",
      KP = () => {
        (0, nd.useEffect)((() => {
          const dd = (0, Rd.h)(document.body),
            Jd = JN.install(),
            kd = dP.install(),
            pd = gP();
          return () => {
            dd(), Jd(), kd(), pd()
          }
        }), []);
        const {
          largePointer: dd
        } = (0, ld.t)(), Jd = (0, nW.m)() && dd;
        return (0, nd.useEffect)((() => {
          if (Jd) return document.documentElement.classList.add(CP), () => {
            document.documentElement.classList.remove(CP)
          }
        }), [Jd]), (0, Zd.createPortal)((0, Dd.jsxs)(Dd.Fragment, {
          children: [(0, Dd.jsx)(tW, {}), (0, Dd.jsx)(JP, {}), (0, Dd.jsx)(pP, {})]
        }), document.body)
      };
    var oP = kd(8699),
      lP = kd(8724),
      QP = kd(8712);
    kd(8728);
    const LP = (dd, Jd) => {
        const [kd, pd] = (0, nd.useState)(!1), [Nd, Wd] = (0, nd.useState)(null), Pd = (0, nd.useRef)(null), Zd = (0, nd.useCallback)((dd => {
          Pd.current = dd, Wd(dd)
        }), []), gd = (0, nd.useCallback)((() => {
          pd(!1), Zd(null)
        }), [Zd]), Kd = (0, nd.useCallback)((() => {
          pd(!0)
        }), []), od = (0, nd.useCallback)(((dd, Jd) => {
          Zd((0, QP.E)(dd, Jd, Pd.current))
        }), [Zd]);
        (0, nd.useLayoutEffect)((() => (Jd(kd), (0, UW.p)(dd, kd), Cd.j.nO(UW.k), () => {
          Jd(!1), (0, UW.p)(dd, !1), Cd.j.nO(UW.k)
        })), [kd, dd, Jd]), (0, IN.h)("appManagerUpdated|activeInputDevice", (dd => {
          "gamepad" !== dd && gd()
        })), (0, IN.h)("appManagerUpdated|gameState", (dd => {
          "inGame" !== dd && gd()
        }));
        const ld = () => {
          (0, Ck.n)() && gd()
        };
        return (0, IN.h)("appManagerUpdated|openEverythingMenuName", ld), (0, IN.h)("appManagerUpdated|openInGameMenuName", ld), {
          open: kd,
          picked: Nd,
          pickedRef: Pd,
          show: Kd,
          aim: od,
          close: gd
        }
      },
      OP = dd => {
        let {
          className: Jd,
          slotCount: kd,
          picked: pd,
          slotLabel: Nd,
          renderSlot: Wd,
          centre: Pd
        } = dd;
        const Zd = Array.from({
          length: kd
        }, ((dd, Jd) => Jd));
        return (0, Dd.jsx)("div", {
          className: yd()("EmoteWheelOverlay PadRadialWheel", Jd),
          children: (0, Dd.jsxs)("div", {
            className: "EmoteWheel",
            style: {
              width: 2 * QP.o + "rem",
              height: 2 * QP.o + "rem"
            },
            children: [(0, Dd.jsxs)("svg", {
              className: "EmoteWheelSvg",
              viewBox: `0 0 ${QP.k} ${QP.k}`,
              children: [Zd.map((dd => (0, Dd.jsx)("path", {
                d: (0, QP.q)(dd, kd, QP.e, QP.f, QP.g),
                className: yd()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: dd === pd
                }),
                "aria-label": Nd(dd)
              }, dd))), (0, Dd.jsx)("circle", {
                className: "EmoteWheelOuterRing",
                cx: QP.e,
                cy: QP.e,
                r: QP.g
              }), (0, Dd.jsx)("circle", {
                className: "EmoteWheelInnerRing",
                cx: QP.e,
                cy: QP.e,
                r: QP.f
              }), null !== pd && (0, Dd.jsx)("path", {
                className: "EmoteWheelWedgeOutline",
                d: (0, QP.q)(pd, kd, QP.e, QP.f, QP.g)
              })]
            }), Zd.map((dd => {
              const Jd = (0, QP.w)(dd, kd);
              return (0, Dd.jsx)("div", {
                className: yd()("PadRadialWheelSlot SmallTextBold", {
                  PadRadialWheelSlotPicked: dd === pd
                }),
                style: {
                  left: `calc(50% + ${QP.c*Math.cos(Jd)}rem)`,
                  top: `calc(50% + ${QP.c*Math.sin(Jd)}rem)`
                },
                "aria-hidden": !0,
                children: Wd(dd)
              }, dd)
            })), (0, Dd.jsx)("div", {
              className: "EmoteWheelHint SmallTextBold",
              children: Pd
            })]
          })
        })
      },
      eP = lW.length,
      RP = () => {
        const {
          t: dd
        } = (0, Nd.B)(), Jd = LP("chat", bk.o), kd = (0, nd.useMemo)((() => lW.map((Jd => dd(Jd)))), [dd]);
        return (0, IN.h)(bk.l, (() => {
          Jd.open || (0, oP.g)() || (0, lP.o)() || "inGame" !== gd.d.get("gameState") || (0, Ck.n)() || !(0, Yk.c)() || Jd.show()
        })), (0, IN.h)(bk.d, (dd => {
          Jd.open && Jd.aim(dd, eP)
        })), (0, IN.h)(bk.k, (() => {
          var dd;
          if (!Jd.open) return;
          const pd = Jd.pickedRef.current;
          null !== pd ? QW.claim(performance.now()) && (Jd.close(), null === (dd = (0, Yk.c)()) || void 0 === dd || dd.sendLine(kd[pd])) : Jd.close()
        })), (0, IN.h)(bk.g, Jd.close), Jd.open ? (0, Dd.jsx)(OP, {
          className: "QuickChatWheel",
          slotCount: eP,
          picked: Jd.picked,
          slotLabel: dd => kd[dd],
          renderSlot: dd => kd[dd],
          centre: null !== Jd.picked ? kd[Jd.picked] : dd("controller:quickChatPick")
        }) : null
      },
      IP = () => {
        const {
          t: dd
        } = (0, Nd.B)(), Jd = LP("actionButton", lP.q), [kd, pd] = (0, nd.useState)([]);
        if ((0, IN.h)(lP.j, (dd => {
            Jd.open || (0, oP.g)() || (0, bk.b)() || "inGame" !== gd.d.get("gameState") || (0, Ck.n)() || (pd(dd), Jd.show())
          })), (0, IN.h)(lP.b, (dd => {
            Jd.open && Jd.aim(dd, kd.length)
          })), (0, IN.h)(lP.f, (() => {
            if (!Jd.open) return;
            const dd = Jd.pickedRef.current;
            Jd.close(), null !== dd && Cd.j.nO(lP.l, kd[dd])
          })), (0, IN.h)(lP.d, Jd.close), !Jd.open) return null;
        const Wd = null !== Jd.picked ? kd[Jd.picked] : null;
        return (0, Dd.jsx)(OP, {
          className: "ActionWheel",
          slotCount: kd.length,
          picked: Jd.picked,
          slotLabel: Jd => {
            const pd = kd[Jd];
            return "reload" === pd.kind ? dd("controller:gameplayReload") : "customButton" === pd.kind ? pd.description || pd.icon : "touchButton" === pd.kind && "string" === typeof pd.label ? pd.label : ""
          },
          renderSlot: dd => (0, Dd.jsx)(aN, {
            action: kd[dd]
          }),
          centre: Wd ? (0, Dd.jsx)(aN, {
            action: Wd
          }) : dd("controller:actionWheelPick")
        })
      };
    var GP = kd(95);
    const vP = () => ((0, nd.useEffect)((() => {
        var dd, Jd;
        const kd = (0, Rd.h)(document.getElementById("root")),
          pd = (0, Qd.f)(),
          Nd = (() => {
            const dd = [Cd.j.subscribe(pN.h, (() => {
                ZN("blockBreak")
              })), Cd.j.subscribe("damagedByOtherPlayer", (() => {
                ZN("damage")
              })), Cd.j.subscribe("yourAttackHit", (dd => {
                let {
                  hitSelf: Jd
                } = dd;
                Jd || ZN("hit")
              }))],
              Jd = Pd.c.onActivePadChanged((dd => {
                dd && ZN("connect")
              }));
            return () => {
              for (const Jd of dd) Cd.j.unsubscribe(Jd);
              Jd()
            }
          })(),
          Wd = (() => {
            const dd = new QN({
              getVisitId: lN.d,
              peekVisitId: lN.peekVisitSessionId,
              readReportedVisitId: () => {
                const dd = oN.k.getItem(LN);
                return "string" === typeof dd ? dd : null
              },
              writeReportedVisitId: dd => {
                oN.k.setItem(LN, dd)
              },
              isPadActive: Qd.h,
              getPadFamily: () => {
                var dd, Jd;
                return null !== (dd = null === (Jd = Pd.c.getActivePad()) || void 0 === Jd ? void 0 : Jd.family) && void 0 !== dd ? dd : null
              },
              canReport: CN.f,
              getInputType: KN.e,
              TQ: CN.l
            });
            let Jd = 0,
              kd = null;
            const pd = Nd => {
                null === kd && ("notReady" !== dd.check(Nd) || null !== kd || Jd >= 20 || (Jd++, kd = setTimeout((() => {
                  kd = null, pd(!1)
                }), 3e3)))
              },
              Nd = Cd.j.subscribe("appManagerUpdated|activeInputDevice", (() => {
                pd(!0)
              })),
              Wd = (0, lN.k)((() => {
                Jd = 0, pd(!0)
              }));
            return () => {
              Cd.j.unsubscribe(Nd), Wd(), null !== kd && clearTimeout(kd)
            }
          })(),
          Zd = Pd.c.onFrame(((dd, Jd) => {
            const kd = (0, Qd.m)(dd);
            od.e.dispatch(dd, Jd, kd)
          }));
        let Kd = null !== (dd = null === (Jd = Pd.c.getActivePad()) || void 0 === Jd ? void 0 : Jd.family) && void 0 !== dd ? dd : null;
        const Ld = Pd.c.onActivePadChanged((dd => {
            var Jd, kd;
            (od.e.reset(), (0, Qd.p)(), Cd.j.nO(Pd.b, dd), (null !== (Jd = null === dd || void 0 === dd ? void 0 : dd.family) && void 0 !== Jd ? Jd : null) !== Kd) && (Kd = null !== (kd = null === dd || void 0 === dd ? void 0 : dd.family) && void 0 !== kd ? kd : null, Cd.j.nO(ld.e, (0, ld.k)()));
            !dd && (0, Qd.h)() && (0, Qd.s)(gd.d.get("isTouchScreen") ? "touch" : "keyboardMouse")
          })),
          Od = () => {
            "visible" !== document.visibilityState && od.e.clear()
          },
          ed = () => {
            od.e.clear()
          };
        document.addEventListener("visibilitychange", Od), window.addEventListener("blur", ed), Pd.c.start(), (0, gN.h)();
        const Id = null;
        return () => {
          kd(), pd(), Nd(), Wd(), Zd(), Ld(), document.removeEventListener("visibilitychange", Od), window.removeEventListener("blur", ed), Pd.c.stop(), null === Id || void 0 === Id || Id()
        }
      }), []), (0, Dd.jsxs)("div", {
        className: "ControllerRoot",
        children: [(0, Dd.jsx)(jN, {}), (0, Dd.jsx)(cN, {}), (0, Dd.jsx)(hN, {}), (0, Dd.jsx)(XW, {}), (0, Dd.jsx)(KP, {}), (0, Dd.jsx)(RP, {}), (0, Dd.jsx)(IP, {})]
      })),
      xP = () => GP.featureFlags.useControllerSupport ? (0, Dd.jsx)(vP, {}) : null;
    var qP = kd(8052),
      BP = kd(8737);
    const sP = new Set(gN.g),
      iP = dd => `${BP.p}${(0,ld.m)()}/${dd}`,
      aP = dd => {
        if (!(0, BP.m)(dd)) return null;
        const [Jd, kd] = dd.slice(BP.p.length).split("/");
        return (0, qP.e)(Jd) && sP.has(kd) ? (0, gN.f)(Jd, kd) : null
      };
    var MP = kd(8740);
    const FP = () => {
        const {
          t: dd
        } = (0, Nd.B)(), Jd = (0, Qd.w)(), {
          gameState: kd,
          isUiHidden: pd
        } = (0, gd.j)(["gameState", "isUiHidden"]), {
          hideButtonHints: Wd,
          sneakMode: Pd
        } = (0, ld.t)(), [Zd, Cd] = (0, nd.useState)(MP.b);
        return (0, IN.h)(SN.o, Cd), Jd && !pd && "inGame" === kd && Zd ? (0, Dd.jsxs)("div", {
          className: "PadSneakChip SmallTextBold",
          children: [!Wd && (0, Dd.jsx)(sN, {
            glyph: (0, Kd.j)("toggle" === Pd ? "sneak" : "sneakToggle")
          }), (0, Dd.jsx)("span", {
            children: dd("controller:gameplaySneaking")
          })]
        }) : null
      },
      YP = 12,
      mP = dd => {
        let {
          trigger: Jd,
          className: kd,
          children: pd
        } = dd;
        const Nd = (0, nd.useRef)(null);
        return (0, nd.useEffect)((() => {
          let dd = 0;
          const kd = Fd(Jd, "y"),
            pd = () => {
              dd = requestAnimationFrame(pd);
              const Wd = Nd.current;
              if (!Wd || null === Jd || void 0 === Jd || !Jd.isConnected) return;
              const {
                left: Pd,
                top: Zd
              } = function(dd, Jd, kd) {
                let pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                  Nd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                const Wd = dd.left + dd.width / 2,
                  Pd = Math.max(YP, kd.width - YP - Jd.width),
                  Zd = Math.min(Math.max(Wd - Jd.width / 2, YP), Pd),
                  gd = kd.height - pd;
                let Cd = 0,
                  Kd = gd;
                if (Nd) {
                  const dd = Math.max(0, Nd.top),
                    pd = Math.min(gd, Nd.bottom);
                  pd - dd >= Math.max(kd.height / 2, Jd.height + 24) && (Cd = dd, Kd = pd)
                }
                const od = dd.top + dd.height / 2 < (Cd + Kd) / 2 ? Kd - YP - Jd.height : Cd + YP;
                return {
                  left: Zd,
                  top: Math.max(YP, od)
                }
              }(Jd.getBoundingClientRect(), {
                width: Wd.offsetWidth,
                height: Wd.offsetHeight
              }, {
                width: window.innerWidth,
                height: window.innerHeight
              }, parseFloat(document.documentElement.style.getPropertyValue(EW)) || 0, null !== kd && void 0 !== kd && kd.isConnected ? kd.getBoundingClientRect() : null);
              Wd.style.transform = `translate3d(${Math.round(Pd)}px, ${Math.round(Zd)}px, 0)`, Wd.style.visibility = "visible"
            };
          return pd(), () => {
            cancelAnimationFrame(dd)
          }
        }), [Jd]), (0, Dd.jsx)("div", {
          ref: Nd,
          className: kd,
          style: {
            position: "fixed",
            left: 0,
            top: 0,
            visibility: "hidden"
          },
          children: pd
        })
      };
    var bP = kd(1059),
      SP = kd(8749),
      jP = kd(1461),
      XP = kd(8754),
      fP = kd(8762);
    const nP = {
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
      UP = () => {
        const {
          t: dd
        } = (0, Nd.B)(), Jd = (0, Qd.w)(), kd = (0, SP.b)(), pd = (0, DN.j)("_tasks"), Wd = (0, DN.j)("_availableLeaderboards");
        if (!Jd) return null;
        const Pd = (dd => {
          let {
            hasShop: Jd,
            hasTasksOrLeaderboards: kd,
            canInvite: pd
          } = dd;
          const Nd = [];
          return Jd && Nd.push("shop"), kd && Nd.push("tasks"), pd && Nd.push("invite"), Nd.push("leave"), Nd
        })({
          hasShop: kd,
          hasTasksOrLeaderboards: !(!pd && !Wd),
          canInvite: !!GP.featureFlags.canUseInviteLinks
        });
        return (0, Dd.jsx)("div", {
          className: "PadLobbyShortcuts",
          children: Pd.map((Jd => {
            const {
              icon: kd,
              labelKey: pd
            } = nP[Jd], Nd = "leave" === Jd ? jP.B : jP.d;
            return (0, Dd.jsx)(Nd, {
              className: "PadLobbyShortcut",
              onClick: () => {
                (dd => {
                  switch (dd) {
                    case "shop":
                      return Cd.j.nO(fP.i), void gd.d.set({
                        openEverythingMenuName: gk.s.SHOP
                      });
                    case "tasks":
                      return void Cd.j.nO("toggleMenu", "retentionFeatures");
                    case "invite":
                      return void Cd.j.nO("toggleMenu", "inviteLink");
                    case "leave":
                      (0, XP.d)()
                  }
                })(Jd)
              },
              children: (0, Dd.jsxs)("div", {
                className: "PadLobbyShortcutInner",
                children: [(0, Dd.jsx)(bP.e, {
                  name: kd
                }), (0, Dd.jsx)("span", {
                  children: dd(pd)
                })]
              })
            }, Jd)
          }))
        })
      };
    var yP = kd(1975);
    const DP = Ld.z,
      TP = ["forward", "backward", "left", "right", "sprint"],
      EP = dd => dd.ctrlKey || dd.altKey || "Alt" === dd.key || "ArrowUp" === dd.key || "ArrowDown" === dd.key || "Tab" === dd.code || "/" === dd.key || "Slash" === dd.code;
    class cP {
      constructor() {
        this.armed = !1, this.swallowedKeys = new Set, this.previousHeld = new Array(Ld.V).fill(!1), this.leftStickWasPressed = !1, this.rightStickWasPressed = !1, this.consumeNextFrame = !1, this.consumeAfterContinue = !1
      }
      setArmed(dd) {
        this.armed = dd
      }
      blocksGameplay() {
        return this.armed || this.consumeNextFrame
      }
      onKeyDown(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          kd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return !this.armed || Jd ? !dd.repeat && this.swallowedKeys.delete(dd.code) ? {
          swallow: !1,
          continues: !1
        } : {
          swallow: this.swallowedKeys.has(dd.code),
          continues: !1
        } : "Escape" === dd.key || dd.repeat && !this.swallowedKeys.has(dd.code) ? {
          swallow: !1,
          continues: !1
        } : kd ? {
          swallow: !1,
          continues: !0
        } : (this.swallowedKeys.add(dd.code), {
          swallow: !0,
          continues: (0, Qd.g)(dd)
        })
      }
      onKeyUp(dd) {
        return this.swallowedKeys.delete(dd.code)
      }
      forgetKeys() {
        this.swallowedKeys.clear()
      }
      onPadFrame(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          pd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const Nd = (0, Ld.u)(dd.values, this.previousHeld),
          Wd = null === kd ? -1 : (0, Ld.m)(kd),
          Pd = Wd >= 0 && Nd[Wd] && !this.previousHeld[Wd],
          Zd = Nd.some(((dd, Jd) => dd && !this.previousHeld[Jd] && Jd !== Wd)),
          gd = Math.hypot(dd.leftStick.x, dd.leftStick.y) >= DP,
          Cd = Math.hypot(dd.rightStick.x, dd.rightStick.y) >= DP,
          Kd = gd && !this.leftStickWasPressed || Cd && !this.rightStickWasPressed;
        this.previousHeld = Nd, this.leftStickWasPressed = gd, this.rightStickWasPressed = Cd;
        let od = !1;
        this.consumeNextFrame && (this.consumeNextFrame = !1, od = !0);
        const ld = !Jd && Pd && !pd,
          Qd = !ld && this.armed && !Jd && (Zd || Kd);
        return (ld || Qd) && (this.consumeNextFrame = !0, this.consumeAfterContinue = Qd, od = !0), {
          continues: Qd,
          back: ld,
          consumeHeld: od
        }
      }
      consumeLeavesMoveStick() {
        return this.consumeAfterContinue
      }
    }
    const hP = new Set([...yP.q, ...yP.D]),
      rP = dd => ((dd, Jd, kd) => {
        const pd = Object.keys(Jd).filter((pd => !kd.has(pd) && Jd[pd].includes(dd)));
        return pd.length > 0 && pd.every((dd => TP.includes(dd)))
      })(dd, yP.x, hP),
      uP = (dd, Jd, kd) => {
        const pd = new cP,
          Nd = dd => {
            if (!dd.isTrusted) return;
            const {
              swallow: kd,
              continues: Nd
            } = pd.onKeyDown(dd, !(0, Qd.A)(dd) || (0, kN.e)() || (0, Ck.n)(), rP(dd.code));
            kd && (dd.stopImmediatePropagation(), EP(dd) && dd.preventDefault()), Nd && ((0, Qd.s)("keyboardMouse"), Jd())
          },
          Wd = dd => {
            dd.isTrusted && pd.onKeyUp(dd) && (dd.stopImmediatePropagation(), EP(dd) && dd.preventDefault())
          },
          Zd = () => {
            pd.forgetKeys()
          };
        window.addEventListener("keydown", Nd, !0), window.addEventListener("keyup", Wd, !0), window.addEventListener("blur", Zd);
        const gd = Pd.c.onFrame((dd => {
            const Nd = od.e.getActiveConsumerName(),
              Wd = kd(),
              Pd = Wd ? (0, Kd.j)("menuBack") : null,
              Zd = null !== Nd && "gameplay" !== Nd,
              {
                continues: gd,
                back: Cd,
                consumeHeld: Ld
              } = pd.onPadFrame(dd, Zd, Pd, (0, Qd.l)(dd));
            if (Ld) {
              const dd = (0, ld.k)().swapSticks ? "right" : "left";
              od.e.consumeAllHeld(pd.consumeLeavesMoveStick() ? dd : null)
            }
            Cd ? null === Wd || void 0 === Wd || Wd() : gd && Jd()
          })),
          Cd = (0, kN.i)(`pressToContinue:${dd}`, (() => pd.blocksGameplay()));
        return {
          setArmed: dd => {
            pd.setArmed(dd)
          },
          dispose: () => {
            window.removeEventListener("keydown", Nd, !0), window.removeEventListener("keyup", Wd, !0), window.removeEventListener("blur", Zd), gd(), Cd()
          }
        }
      };
    var tP = kd(4877),
      VP = kd(3262),
      zP = kd(2999),
      HP = kd(8060);
    const wP = dd => {
        let {
          text: Jd
        } = dd;
        return (0, Dd.jsx)("div", {
          className: "ControllerSettingsHeading",
          children: Jd
        })
      },
      AP = dd => {
        let {
          label: Jd,
          hint: kd,
          options: pd,
          value: Wd,
          onChange: Pd
        } = dd;
        const {
          t: Zd
        } = (0, Nd.B)();
        return (0, Dd.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, Dd.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: [(0, Dd.jsxs)("div", {
              className: "ControllerChoiceText",
              children: [(0, Dd.jsx)("div", {
                className: "SliderText",
                children: Jd
              }), kd && (0, Dd.jsx)("div", {
                className: "ControllerSettingsHint",
                children: kd
              })]
            }), (0, Dd.jsx)(zP.c, {
              options: pd.map((dd => ({
                label: "label" in dd ? dd.label : Zd(dd.labelKey),
                value: dd.value
              }))),
              value: Wd,
              onChange: dd => {
                Pd(dd.value)
              }
            })]
          })
        })
      },
      dZ = dd => {
        let {
          settingKey: Jd,
          label: kd,
          range: pd,
          format: Nd
        } = dd;
        const Wd = (0, ld.t)();
        return (0, Dd.jsx)(tP.h, {
          name: kd,
          min: pd.min,
          max: pd.max,
          step: pd.step,
          padStep: pd.step,
          initValue: Wd[Jd],
          format: Nd,
          onChange: dd => {
            (0, ld.q)({
              [Jd]: (0, HP.w)(dd, pd)
            })
          }
        })
      };
    var JZ = kd(8771),
      kZ = kd(8778);
    const pZ = dd => dd instanceof DOMException && ("SecurityError" === dd.name || "NotAllowedError" === dd.name),
      NZ = dd => {
        const [Jd] = [...dd.controllers].sort(((dd, Jd) => kZ.q[dd] - kZ.q[Jd]));
        return kZ.o[Jd]
      },
      WZ = dd => {
        (0, JZ.e)().allowPhoneMotion().catch((Jd => {
          dd && pZ(Jd) ? dd() : console.warn("Could not enable the motion sensor", Jd)
        }))
      },
      PZ = {
        waiting: "controller:settingsGyroPhoneWaiting",
        noSensor: "controller:settingsGyroPhoneNoSensor",
        on: "controller:settingsGyroPhoneOn",
        denied: "controller:settingsGyroPhoneDenied"
      },
      ZZ = dd => {
        let {
          status: Jd
        } = dd;
        const {
          t: kd
        } = (0, Nd.B)(), [pd, Wd] = (0, nd.useState)(null), Pd = `${Jd.controllers.join(",")}|${Jd.phoneMotion}`;
        (0, nd.useEffect)((() => {
          Wd(null)
        }), [Pd]);
        const Zd = () => {
          (0, JZ.e)().connectController().then((dd => {
            Wd(dd > 0 ? "openFailed" : null)
          })).catch((dd => {
            pZ(dd) ? Wd("needsClick") : console.warn("Could not connect motion controller", dd)
          }))
        };
        if (Jd.hidSupported) {
          let dd = kd("controller:settingsGyroConnectHint");
          return "needsClick" === pd ? dd = kd("controller:settingsGyroConnectNeedsClick") : "openFailed" === pd ? dd = kd("controller:settingsGyroOpenFailed") : Jd.controllers.length > 0 && (dd = kd("controller:settingsGyroConnected", {
            name: NZ(Jd)
          })), (0, Dd.jsx)("div", {
            className: "SettingBox ControllerChoiceSetting",
            children: (0, Dd.jsxs)("div", {
              className: "ControllerChoiceRow",
              children: [(0, Dd.jsx)("div", {
                className: "ControllerSettingsHint",
                children: dd
              }), (0, Dd.jsx)(jP.d, {
                onClick: Zd,
                children: kd("controller:settingsGyroConnect")
              })]
            })
          })
        }
        if ("needsPermission" === Jd.phoneMotion) return (0, Dd.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, Dd.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: ["needsTap" === pd && (0, Dd.jsx)("div", {
              className: "ControllerSettingsHint",
              children: kd("controller:settingsGyroAllowNeedsTap")
            }), (0, Dd.jsx)(jP.d, {
              onClick: () => {
                WZ((() => {
                  Wd("needsTap")
                }))
              },
              children: kd("controller:settingsGyroAllowMotion")
            })]
          })
        });
        const gd = PZ[Jd.phoneMotion];
        return gd ? (0, Dd.jsx)("div", {
          className: "ControllerSettingsHint",
          children: kd(gd)
        }) : null
      },
      gZ = () => {
        const {
          t: dd
        } = (0, Nd.B)(), Jd = (0, ld.t)(), kd = (0, JZ.i)(), pd = (0, Qd.z)(), Wd = !kd.hidSupported && kd.phoneSupported && !kd.padConnected, Pd = (kd.hidSupported || kd.phoneSupported) && !Wd, Zd = (0, Kd.j)("pause");
        return (0, Dd.jsxs)(Dd.Fragment, {
          children: [(0, Dd.jsx)(wP, {
            text: dd("controller:settingsGyro")
          }), Wd && (0, Dd.jsx)("div", {
            className: "ControllerSettingsHint",
            children: dd("controller:settingsGyroPhoneNeedsController")
          }), !Pd && !Wd && (0, Dd.jsx)("div", {
            className: "ControllerSettingsHint",
            children: dd(kd.hidBlocked || kd.phoneBlocked ? "controller:settingsGyroBlocked" : "controller:settingsGyroUnsupported")
          }), Pd && (0, Dd.jsx)(tP.d, {
            label: dd(kd.hidSupported ? "controller:settingsGyroToggle" : "controller:settingsGyroTogglePhone"),
            checked: Jd.gyroAiming,
            onClick: dd => {
              var Jd, kd;
              (0, ld.q)({
                gyroAiming: dd
              });
              const pd = null === (Jd = null === (kd = navigator.userActivation) || void 0 === kd ? void 0 : kd.isActive) || void 0 === Jd || Jd;
              if (!dd || !pd) return;
              const Nd = (0, JZ.e)(),
                Wd = Nd.getStatus();
              Wd.hidSupported ? Nd.connectControllerIfNoneGranted().catch((dd => {
                console.warn("Motion controller picker unavailable", dd)
              })) : "needsPermission" === Wd.phoneMotion && WZ()
            },
            circleInfoText: dd(kd.hidSupported ? "controller:settingsGyroToggleInfo" : "controller:settingsGyroToggleInfoPhone")
          }), Pd && kd.hidSupported && (0, Dd.jsx)("div", {
            className: "ControllerSettingsHint",
            children: dd("controller:settingsGyroSteamHint")
          }), Pd && Jd.gyroAiming && (0, Dd.jsxs)(Dd.Fragment, {
            children: [(0, Dd.jsx)(ZZ, {
              status: kd
            }), (0, Dd.jsx)(dZ, {
              settingKey: "gyroSensitivity",
              label: dd("controller:settingsGyroSensitivity"),
              range: HP.S,
              format: HP.K
            }), (0, Dd.jsx)(AP, {
              label: dd("controller:settingsGyroActivation"),
              hint: "aiming" === Jd.gyroActivation && (0, Dd.jsx)(VP.c, {
                text: dd("controller:settingsGyroAimingHint", {
                  button: VP.f
                }),
                glyph: (0, Kd.j)("use")
              }),
              options: HP.R,
              value: Jd.gyroActivation,
              onChange: dd => {
                (0, ld.q)({
                  gyroActivation: dd
                })
              }
            }), "button" === Jd.gyroActivation && (0, Dd.jsx)(AP, {
              label: dd("controller:settingsGyroButton"),
              hint: dd("controller:settingsGyroButtonHint"),
              options: HP.s.filter((dd => dd !== Zd || dd === Jd.gyroButton)).map((dd => ({
                label: BN(pd, dd),
                value: dd
              }))),
              value: Jd.gyroButton,
              onChange: dd => {
                (0, ld.q)({
                  gyroButton: dd
                })
              }
            })]
          })]
        })
      };
    var CZ = kd(1858);
    const KZ = () => {
      const {
        t: dd
      } = (0, Nd.B)(), Jd = (0, ld.t)(), kd = (0, Qd.z)();
      return (0, Dd.jsxs)(Dd.Fragment, {
        children: [(0, Dd.jsx)(wP, {
          text: dd("controller:settingsAccessibility")
        }), (0, Dd.jsx)(tP.d, {
          label: dd("controller:settingsSwapConfirmBack"),
          checked: (0, Kd.G)(Jd.swapConfirmBack, kd),
          onClick: dd => {
            (0, ld.q)({
              swapConfirmBack: dd === (0, Kd.G)(null, kd) ? null : dd
            }), CZ.f.showMessage({
              translationKey: "controller:settingsSwapToast"
            })
          },
          circleInfoText: dd("controller:settingsSwapConfirmBackInfo")
        }), (0, Dd.jsx)(AP, {
          label: dd("controller:settingsButtonRepeat"),
          hint: dd("controller:settingsButtonRepeatHint"),
          options: HP.r,
          value: Jd.buttonRepeat,
          onChange: dd => {
            (0, ld.q)({
              buttonRepeat: dd
            })
          }
        }), (0, Dd.jsx)(AP, {
          label: dd("controller:settingsTapHoldTime"),
          hint: dd("controller:settingsTapHoldTimeHint"),
          options: HP.ub,
          value: Jd.tapHoldTime,
          onChange: dd => {
            (0, ld.q)({
              tapHoldTime: dd
            })
          }
        }), (0, Dd.jsx)(AP, {
          label: dd("controller:settingsEmoteButton"),
          hint: dd("wheel" === Jd.emoteButton ? "controller:settingsEmoteButtonWheelHint" : "controller:settingsEmoteButtonTapHoldHint"),
          options: HP.C,
          value: Jd.emoteButton,
          onChange: dd => {
            (0, ld.q)({
              emoteButton: dd
            })
          }
        }), (0, Dd.jsx)(AP, {
          label: dd("controller:settingsAttackMode"),
          hint: dd("toggle" === Jd.attackMode ? "controller:settingsAttackToggleHint" : "controller:settingsAttackHoldHint"),
          options: HP.p,
          value: Jd.attackMode,
          onChange: dd => {
            (0, ld.q)({
              attackMode: dd
            })
          }
        }), (0, Dd.jsx)(tP.d, {
          label: dd("controller:settingsLargePointer"),
          checked: Jd.largePointer,
          onClick: dd => {
            (0, ld.q)({
              largePointer: dd
            })
          },
          circleInfoText: dd("controller:settingsLargePointerInfo")
        })]
      })
    };
    var oZ = kd(8787);
    const lZ = new class {
        constructor(dd) {
          this.router = dd, this.current = null
        }
        claim(dd, Jd) {
          const kd = this.current;
          kd && (this.current = null, kd.release(), kd.onTakenOver());
          const pd = this.router.register({
              ...dd,
              name: "capture"
            }),
            Nd = {
              release: pd,
              onTakenOver: Jd
            };
          return this.current = Nd, () => {
            this.current === Nd && (this.current = null), pd()
          }
        }
      }(od.e),
      QZ = dd => {
        (0, nd.useEffect)((() => {
          if (!dd) return;
          const Jd = dd();
          let kd = !1;
          const pd = () => {
              kd || (kd = !0, Jd.onEnd())
            },
            Nd = lZ.claim({
              isActive: () => !kd,
              onFrame: dd => {
                Jd.onFrame(dd, pd)
              }
            }, pd),
            Wd = void 0 === Jd.timeoutMs ? void 0 : window.setTimeout(pd, Jd.timeoutMs),
            Pd = dd => {
              "Escape" === dd.key && (dd.preventDefault(), dd.stopPropagation(), pd())
            };
          return window.addEventListener("keydown", Pd, !0), () => {
            kd = !0, Nd(), window.clearTimeout(Wd), window.removeEventListener("keydown", Pd, !0)
          }
        }), [dd])
      },
      LZ = dd => {
        let {
          row: Jd,
          capturing: kd,
          onCapture: pd,
          holdFillRef: Wd,
          onRebind: Pd,
          swapped: Zd
        } = dd;
        const {
          t: gd
        } = (0, Nd.B)();
        if ("fixed" === Jd.kind) return (0, Dd.jsx)("div", {
          className: "ControlRow PadControlRow PadControlRowFixed",
          children: (0, Dd.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, Dd.jsx)("div", {
              className: "ControlName",
              children: gd(Jd.labelKey)
            }), (0, Dd.jsx)("div", {
              className: "ControlBindingsContainer",
              children: (0, Dd.jsx)("div", {
                className: "ControlBindingsList",
                children: (0, Dd.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  children: (0, Dd.jsx)(sN, {
                    glyph: "move" === Jd.stick ? (0, Kd.q)() : (0, Kd.o)()
                  })
                })
              })
            })]
          })
        });
        const {
          action: Cd
        } = Jd, od = (0, Kd.j)(Cd), ld = (0, Kd.l)(Cd), Qd = od !== ld && (0, Kd.e)(Cd, ld);
        return (0, Dd.jsxs)("div", {
          className: yd()("ControlRow PadControlRow", {
            Capturing: kd
          }),
          children: [(0, Dd.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, Dd.jsx)("div", {
              className: "ControlName",
              children: gd(HP.h[Cd])
            }), (0, Dd.jsxs)("div", {
              className: "ControlBindingsContainer",
              children: [!kd && (0, Dd.jsxs)("div", {
                className: "ControlBindingsList",
                children: [(0, Dd.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    pd(Cd)
                  },
                  children: (0, Dd.jsx)(sN, {
                    glyph: od
                  })
                }), Qd && (0, Dd.jsx)("div", {
                  className: "ControlBinding PadBindingReset",
                  title: gd("controller:settingsReset"),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    Pd(Cd, ld)
                  },
                  children: (0, Dd.jsx)(bP.e, {
                    name: "arrows-rotate"
                  })
                })]
              }), kd && (0, Dd.jsxs)("div", {
                className: "ControlBindingAddInput",
                children: [(0, Dd.jsxs)("div", {
                  className: "PadCaptureBox",
                  children: [(0, Dd.jsx)("span", {
                    children: gd("controller:settingsCapturePrompt")
                  }), (0, Dd.jsx)("div", {
                    ref: Wd,
                    className: "PadCaptureHoldFill"
                  })]
                }), (0, Dd.jsx)("div", {
                  className: "ControlBindingAddCancel",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    pd(null)
                  },
                  children: "\xd7"
                })]
              }), kd && (0, Dd.jsx)("div", {
                className: "PadCaptureHint",
                children: (0, Dd.jsx)(VP.c, {
                  text: gd((0, Kd.e)(Cd, (0, Kd.j)("menuBack")) ? "controller:settingsCaptureCancelOrBindHint" : "controller:settingsCaptureCancelHint", {
                    button: VP.f
                  }),
                  glyph: (0, Kd.j)("menuBack")
                })
              })]
            })]
          }), Zd.map((dd => (0, Dd.jsx)("div", {
            className: "ControlRowWarning PadSwapNotice",
            children: (0, Dd.jsx)(VP.c, {
              text: gd("controller:settingsSwapNotice", {
                action: gd(HP.h[dd]),
                button: VP.f
              }),
              glyph: (0, Kd.j)(dd)
            })
          }, dd))), kd && (0, Dd.jsx)("div", {
            className: "PadCaptureTimer",
            style: {
              animationDuration: `${HP.u}ms`
            }
          })]
        })
      },
      OZ = [],
      eZ = dd => {
        let {
          layoutSetting: Jd
        } = dd;
        const {
          t: kd
        } = (0, Nd.B)(), pd = (0, ld.t)();
        (0, Qd.z)();
        const Wd = (0, nd.useRef)(null),
          [Pd, Zd] = (0, nd.useState)(null),
          gd = (0, nd.useCallback)(((dd, Jd) => {
            const kd = (0, ld.k)().bindings;
            (0, Kd.B)(dd, Jd);
            const pd = (0, Kd.u)(kd, dd);
            Zd(pd.length > 0 ? {
              action: dd,
              swapped: pd
            } : null)
          }), []),
          [Cd, Od] = ((dd, Jd) => {
            const [kd, pd] = (0, nd.useState)(null), Nd = (0, nd.useMemo)((() => kd ? () => {
              const Nd = (0, Kd.j)("menuBack"),
                Wd = new HP.e(Nd, (0, Kd.j)("menuConfirm"), (dd => (0, Kd.e)(kd, dd)));
              return {
                onFrame: (pd, Pd) => {
                  var Zd;
                  const gd = pd.frame.timestampMs,
                    Cd = Wd.update({
                      ...pd,
                      isDown: dd => (0, Ld.H)(pd.frame.values, dd)
                    }, gd);
                  null === (Zd = dd.current) || void 0 === Zd || Zd.style.setProperty("width", 100 * Wd.getBindHoldProgress(gd) + "%"), Cd && ("bind" === Cd.kind ? (od.e.consumeButton(Cd.button), Jd(kd, Cd.button)) : od.e.consumeButton(Nd), Pd())
                },
                onEnd: () => {
                  pd(null)
                },
                timeoutMs: HP.u
              }
            } : null), [kd, dd, Jd]);
            return QZ(Nd), [kd, pd]
          })(Wd, gd),
          ed = dd => {
            dd && Zd(null), Od(dd)
          };
        (0, nd.useEffect)((() => {
          if (!Pd) return;
          const dd = window.setTimeout((() => {
            Zd(null)
          }), HP.sb);
          return () => {
            window.clearTimeout(dd)
          }
        }), [Pd]);
        const Rd = !pd.swapSticks && 0 === Object.keys(pd.bindings).length;
        return (0, Dd.jsxs)("div", {
          className: "ControlsContainer PadControlsContainer",
          children: [(0, Dd.jsx)("div", {
            className: "SliderText",
            children: kd("controller:settingsRemap")
          }), (0, Dd.jsx)("div", {
            className: "ControllerSettingsHint",
            children: kd("controller:settingsRemapHint")
          }), (0, Dd.jsx)(jP.B, {
            className: "ResetBindingsButton PadResetAllButton",
            disabled: Rd,
            onClick: () => {
              ed(null), Zd(null), (0, Kd.F)()
            },
            children: kd("controller:settingsResetAll")
          }), Jd, HP.kb.map(((dd, Jd) => (0, Dd.jsx)(oZ.e, {
            title: kd(dd.titleKey),
            defaultOpen: 0 === Jd,
            children: dd.rows.map((dd => (0, Dd.jsx)(LZ, {
              row: dd,
              capturing: "action" === dd.kind && dd.action === Cd,
              onCapture: ed,
              holdFillRef: Wd,
              onRebind: gd,
              swapped: "action" === dd.kind && (null === Pd || void 0 === Pd ? void 0 : Pd.action) === dd.action ? Pd.swapped : OZ
            }, "action" === dd.kind ? dd.action : dd.labelKey)))
          }, dd.titleKey)))]
        })
      },
      RZ = dd => {
        let {
          deadzone: Jd,
          dotRef: kd,
          labelKey: pd
        } = dd;
        const {
          t: Wd
        } = (0, Nd.B)();
        return (0, Dd.jsxs)("div", {
          className: "ControllerTesterStick",
          children: [(0, Dd.jsxs)("div", {
            className: "ControllerTesterStickCircle",
            children: [(0, Dd.jsx)("div", {
              className: "ControllerTesterDeadzone",
              style: {
                width: 100 * Jd + "%",
                height: 100 * Jd + "%"
              }
            }), (0, Dd.jsx)("div", {
              ref: kd,
              className: "ControllerTesterDot"
            })]
          }), (0, Dd.jsx)("div", {
            className: "ControllerTesterStickLabel",
            children: Wd(pd)
          })]
        })
      },
      IZ = (dd, Jd, kd, pd) => {
        var Nd;
        dd && (dd.style.left = 50 + 50 * Math.max(-1, Math.min(1, Jd.x)) + "%", dd.style.top = 50 + 50 * Math.max(-1, Math.min(1, Jd.y)) + "%", null === (Nd = dd.parentElement) || void 0 === Nd || Nd.classList.toggle("Active", pd || Math.hypot(Jd.x, Jd.y) > kd))
      },
      GZ = dd => {
        const Jd = {
            deadzone: dd.moveDeadzone,
            labelKey: "controller:settingsActionMove"
          },
          kd = {
            deadzone: dd.lookDeadzone,
            labelKey: "controller:settingsActionLook"
          };
        return dd.swapSticks ? {
          left: kd,
          right: Jd
        } : {
          left: Jd,
          right: kd
        }
      },
      vZ = () => {
        const {
          t: dd
        } = (0, Nd.B)(), Jd = (() => {
          const [dd, Jd] = (0, nd.useState)((() => Pd.c.getActivePad()));
          return (0, IN.h)(Pd.b, (() => {
            Jd(Pd.c.getActivePad())
          })), dd
        })(), kd = GZ((0, ld.t)()), pd = (0, nd.useRef)(null), Wd = (0, nd.useRef)(null), Zd = (0, nd.useRef)([]), gd = (0, nd.useRef)(null), Cd = (0, nd.useRef)(null), [Qd, Od] = (dd => {
          const [Jd, kd] = (0, nd.useState)(!1), pd = (0, nd.useMemo)((() => Jd ? () => {
            const Jd = (0, Kd.j)("menuBack"),
              pd = new HP.g;
            return {
              onFrame: (kd, Nd) => {
                var Wd;
                const Pd = pd.update({
                  pressed: kd.wasPressed(Jd),
                  EC: kd.isHeld(Jd)
                }, kd.frame.timestampMs);
                null === (Wd = dd.current) || void 0 === Wd || Wd.style.setProperty("width", 100 * Pd + "%"), Pd >= 1 && (od.e.consumeButton(Jd), Nd())
              },
              onEnd: () => {
                kd(!1)
              }
            }
          } : null), [Jd, dd]);
          return QZ(pd), [Jd, kd]
        })(Wd);
        (0, nd.useEffect)((() => {
          const dd = dd => {
            for (const kd of Ld.W) {
              const Jd = (0, Ld.m)(kd),
                pd = Zd.current[Jd];
              if (!pd) continue;
              const Nd = dd.values[Jd];
              pd.classList.toggle("Pressed", Nd >= Ld.z), (0, Ld.L)(Jd) && pd.style.setProperty("--trigger-fill", `${Math.round(100*Nd)}%`)
            }
            const Jd = GZ((0, ld.k)());
            IZ(gd.current, dd.leftStick, Jd.left.deadzone, dd.values[(0, Ld.m)("LS")] >= Ld.z), IZ(Cd.current, dd.rightStick, Jd.right.deadzone, dd.values[(0, Ld.m)("RS")] >= Ld.z)
          };
          return Jd || dd((0, Ld.y)()), Pd.c.onFrame(dd)
        }), [Jd]), (0, nd.useEffect)((() => {
          Jd || Od(!1)
        }), [Jd, Od]), (0, nd.useEffect)((() => {
          var dd;
          Qd && (null === (dd = pd.current) || void 0 === dd || dd.scrollIntoView({
            block: "nearest"
          }))
        }), [Qd]);
        const ed = HP.ib.find((dd => dd.value === (null === Jd || void 0 === Jd ? void 0 : Jd.family)));
        return (0, Dd.jsxs)("div", {
          ref: pd,
          className: yd()("SettingBox ControllerTester", {
            Testing: Qd
          }),
          children: [(0, Dd.jsxs)("div", {
            className: "ControllerTesterHeader",
            children: [(0, Dd.jsxs)("div", {
              className: "ControllerTesterInfo",
              children: [Jd && (0, Dd.jsx)("div", {
                children: dd("controller:settingsTesterFamily", {
                  family: ed ? dd(ed.labelKey) : Jd.family
                })
              }), Jd && (0, Dd.jsx)("div", {
                className: "ControllerTesterPadId",
                children: Jd.id
              }), !Jd && (0, Dd.jsx)("div", {
                children: dd("controller:settingsTesterNoPad")
              })]
            }), (Jd || Qd) && (0, Dd.jsx)(jP.d, {
              className: "ControllerTesterToggle",
              onClick: () => {
                Od(!Qd)
              },
              children: dd(Qd ? "controller:settingsTesterStop" : "controller:settingsTesterStart")
            })]
          }), Jd && !Qd && (0, Dd.jsx)("div", {
            className: "ControllerSettingsHint",
            children: dd("controller:settingsTesterHint")
          }), Qd && (0, Dd.jsxs)("div", {
            className: "ControllerTesterBanner",
            children: [(0, Dd.jsx)(VP.c, {
              text: dd("controller:settingsTesterTesting", {
                button: VP.f
              }),
              glyph: (0, Kd.j)("menuBack")
            }), (0, Dd.jsx)("div", {
              ref: Wd,
              className: "ControllerTesterExitFill"
            })]
          }), (0, Dd.jsxs)("div", {
            className: "ControllerTesterBody",
            children: [(0, Dd.jsx)(RZ, {
              deadzone: kd.left.deadzone,
              dotRef: gd,
              labelKey: kd.left.labelKey
            }), (0, Dd.jsx)("div", {
              className: "ControllerTesterButtons",
              children: Ld.W.map((dd => {
                const kd = (0, Ld.m)(dd);
                return (0, Dd.jsx)("div", {
                  ref: dd => {
                    Zd.current[kd] = dd
                  },
                  className: (0, Ld.L)(kd) ? "ControllerTesterButton ControllerTesterTrigger" : "ControllerTesterButton",
                  children: (0, Dd.jsx)(sN, {
                    glyph: dd,
                    family: null === Jd || void 0 === Jd ? void 0 : Jd.family
                  })
                }, dd)
              }))
            }), (0, Dd.jsx)(RZ, {
              deadzone: kd.right.deadzone,
              dotRef: Cd,
              labelKey: kd.right.labelKey
            })]
          })]
        })
      },
      xZ = (0, nd.memo)((function() {
        const {
          t: dd
        } = (0, Nd.B)(), Jd = (0, ld.t)(), [kd, pd] = (0, nd.useState)(!1);
        return (0, nd.useEffect)((() => {
          if (!kd) return;
          const dd = window.setTimeout((() => {
            pd(!1)
          }), HP.sb);
          return () => {
            window.clearTimeout(dd)
          }
        }), [kd]), (0, Dd.jsxs)("div", {
          className: "SettingsMenuRightInner ControllerCategory",
          children: [(0, Dd.jsx)(wP, {
            text: dd("controller:settingsLook")
          }), (0, Dd.jsx)(dZ, {
            settingKey: "lookSensitivityX",
            label: dd("controller:settingsLookSensitivityX"),
            range: HP.ob,
            format: HP.N
          }), (0, Dd.jsx)(dZ, {
            settingKey: "lookSensitivityY",
            label: dd("controller:settingsLookSensitivityY"),
            range: HP.ob,
            format: HP.N
          }), (0, Dd.jsx)(dZ, {
            settingKey: "aimLookSensitivity",
            label: dd("controller:settingsAimLookSensitivity"),
            range: HP.l,
            format: HP.N
          }), (0, Dd.jsx)(AP, {
            label: dd("controller:settingsLookCurve"),
            hint: dd("controller:settingsLookCurveHint"),
            options: HP.db,
            value: Jd.lookCurve,
            onChange: dd => {
              (0, ld.q)({
                lookCurve: dd
              })
            }
          }), (0, Dd.jsx)(tP.d, {
            label: dd("controller:settingsInvertLookX"),
            checked: Jd.invertLookX,
            onClick: dd => {
              (0, ld.q)({
                invertLookX: dd
              })
            }
          }), (0, Dd.jsx)(tP.d, {
            label: dd("controller:settingsInvertLookY"),
            checked: Jd.invertLookY,
            onClick: dd => {
              (0, ld.q)({
                invertLookY: dd
              })
            }
          }), (0, Dd.jsx)(dZ, {
            settingKey: "lookDeadzone",
            label: dd("controller:settingsLookDeadzone"),
            range: HP.A,
            format: HP.G
          }), (0, Dd.jsx)(gZ, {}), (0, Dd.jsx)(wP, {
            text: dd("controller:settingsMovement")
          }), (0, Dd.jsx)(dZ, {
            settingKey: "moveDeadzone",
            label: dd("controller:settingsMoveDeadzone"),
            range: HP.A,
            format: HP.G
          }), (0, Dd.jsx)(tP.d, {
            label: dd("controller:settingsAutoSprint"),
            checked: Jd.autoSprint,
            onClick: dd => {
              (0, ld.q)({
                autoSprint: dd
              })
            },
            circleInfoText: dd("controller:settingsAutoSprintInfo")
          }), (0, Dd.jsx)(AP, {
            label: dd("controller:settingsSneak"),
            options: HP.rb,
            value: Jd.sneakMode,
            onChange: dd => {
              (0, ld.q)({
                sneakMode: dd
              })
            }
          }), (0, Dd.jsx)(wP, {
            text: dd("controller:settingsButtons")
          }), (0, Dd.jsx)(AP, {
            label: dd("controller:settingsPromptFamily"),
            options: HP.ib,
            value: Jd.promptFamily,
            onChange: dd => {
              (0, ld.q)({
                promptFamily: dd
              })
            }
          }), (0, Dd.jsx)(tP.d, {
            label: dd("controller:settingsHideButtonHints"),
            checked: Jd.hideButtonHints,
            onClick: dd => {
              (0, ld.q)({
                hideButtonHints: dd
              })
            }
          }), (0, Dd.jsx)(tP.d, {
            label: dd("controller:settingsVibration"),
            checked: Jd.vibration,
            onClick: dd => {
              (0, ld.q)({
                vibration: dd
              }), dd && ZN("preview")
            }
          }), (0, Dd.jsx)(dZ, {
            settingKey: "cursorSpeed",
            label: dd("controller:settingsCursorSpeed"),
            range: HP.x,
            format: HP.N
          }), (0, Dd.jsx)(tP.d, {
            label: dd("controller:settingsCursorMagnetism"),
            checked: Jd.cursorMagnetism,
            onClick: dd => {
              (0, ld.q)({
                cursorMagnetism: dd
              })
            }
          }), (0, Dd.jsx)(tP.d, {
            label: dd("controller:settingsMenuBackToCategories"),
            checked: Jd.menuBackToCategories,
            onClick: dd => {
              (0, ld.q)({
                menuBackToCategories: dd
              })
            }
          }), (0, Dd.jsx)(eZ, {
            layoutSetting: (0, Dd.jsxs)(Dd.Fragment, {
              children: [Kd.f.map((kd => (0, Dd.jsx)(tP.d, {
                label: dd(HP.Y[kd]),
                checked: (0, Kd.y)(kd, Jd),
                onClick: dd => {
                  pd(!(0, Kd.J)(kd, dd))
                }
              }, kd))), kd && (0, Dd.jsx)("div", {
                className: "PadLayoutRefusedNotice",
                role: "status",
                children: dd("controller:settingsLayoutRefusedToast")
              })]
            })
          }), (0, Dd.jsx)(KZ, {}), (0, Dd.jsx)(wP, {
            text: dd("controller:settingsAlternatives")
          }), (0, Dd.jsx)("div", {
            className: "ControllerSettingsHint",
            children: dd("controller:settingsAlternativesHint")
          }), (0, Dd.jsx)(AP, {
            label: dd("controller:settingsMenuNavigation"),
            hint: dd("controller:settingsMenuNavigationHint"),
            options: HP.gb,
            value: Jd.menuNavigation,
            onChange: dd => {
              (0, ld.q)({
                menuNavigation: dd
              })
            }
          }), (0, Dd.jsx)(AP, {
            label: dd("controller:settingsInventoryNavigation"),
            hint: dd("controller:settingsInventoryNavigationHint"),
            options: HP.W,
            value: Jd.inventoryNavigation,
            onChange: dd => {
              (0, ld.q)({
                inventoryNavigation: dd
              })
            }
          }), (0, Dd.jsx)(AP, {
            label: dd("controller:settingsQuickChat"),
            hint: dd("controller:settingsQuickChatHint"),
            options: HP.jb,
            value: Jd.quickChat,
            onChange: dd => {
              (0, ld.q)({
                quickChat: dd
              })
            }
          }), (0, Dd.jsx)(AP, {
            label: dd("controller:settingsLeaderboardButton"),
            hint: dd("controller:settingsLeaderboardButtonHint"),
            options: HP.ab,
            value: Jd.leaderboardButton,
            onChange: dd => {
              (0, ld.q)({
                leaderboardButton: dd
              })
            }
          }), (0, Dd.jsx)(wP, {
            text: dd("controller:settingsTester")
          }), (0, Dd.jsx)(vZ, {})]
        })
      }));
    (0, Nd.c)(pd);
    for (const aZ of (0, Wd.s)()) aZ.connected ? Pd.c.handleConnectionEvent(aZ) : Pd.c.handleDisconnectionEvent(aZ);
    const qZ = () => null !== Pd.c.getActivePad(),
      BZ = () => Wk.getState(),
      sZ = () => Wk.isSteppingSlots(),
      iZ = (dd, Jd) => {
        const kd = JN.getFocused();
        JN.isActive() && kd && dd.contains(kd) && JN.setFocus(Jd, {
          scroll: !1
        })
      }
  },
  8026: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => gd,
      g: () => Cd
    });
    var pd = kd(1436),
      Nd = kd(1429);
    const Wd = {
        "054c": "playstation",
        "057e": "nintendo"
      },
      Pd = "28de",
      Zd = new Set(["1205"]),
      gd = (dd, Jd) => {
        const kd = (0, pd.c)(dd);
        if ((null === kd || void 0 === kd ? void 0 : kd.vendor) === Pd) return Zd.has(kd.product) ? "steamdeck" : "xbox";
        if (kd && Wd[kd.vendor]) return Wd[kd.vendor];
        if ((0, Nd.e)(dd)) return "nintendo";
        const gd = `${dd} ${null!==Jd&&void 0!==Jd?Jd:""}`.toLowerCase();
        return /dualsense|dualshock|playstation|sony/.test(gd) ? "playstation" : /nintendo|switch|joy-con|pro controller/.test(gd) ? "nintendo" : /steam deck/.test(gd) ? "steamdeck" : "xbox"
      },
      Cd = dd => {
        var Jd;
        return (null === (Jd = (0, pd.c)(dd)) || void 0 === Jd ? void 0 : Jd.vendor) === Pd
      }
  },
  8077: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Cd,
      i: () => Zd
    });
    var pd = kd(8020);
    const Nd = ["capture", "keyboard", "wheel", "inventory", "cursor", "focus", "gameplay"],
      Wd = new Set(["capture", "gameplay"]),
      Pd = ["Up", "Down", "Left", "Right"],
      Zd = dd => Pd.includes(dd),
      gd = .25;
    const Cd = new class {
      constructor() {
        this.consumers = new Map, this.activeName = null, this.EC = new Array(pd.V).fill(!1), this.previousHeld = new Array(pd.V).fill(!1), this.consumedButtons = new Array(pd.V).fill(!1), this.suppressedReleases = new Array(pd.V).fill(!1), this.wakeOwned = new Array(pd.V).fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.peek = null, this.lastFrame = (0, pd.y)()
      }
      register(dd) {
        return this.consumers.has(dd.name) && console.warn(`Controller consumer "${dd.name}" registered twice; the newer one replaces it.`), this.consumers.set(dd.name, dd), () => {
          var Jd;
          this.consumers.get(dd.name) === dd && (this.activeName === dd.name ? (this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()) : (null === (Jd = this.peek) || void 0 === Jd ? void 0 : Jd.over) === dd.name && (this.peek = null), this.consumers.delete(dd.name))
        }
      }
      getActiveConsumerName() {
        return this.activeName
      }
      isButtonHeld(dd) {
        return this.EC[(0, pd.m)(dd)]
      }
      getLastFrame() {
        return this.lastFrame
      }
      clear() {
        this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()
      }
      reset() {
        this.deactivateCurrent(), this.activeName = null, this.EC = new Array(pd.V).fill(!1), this.previousHeld = new Array(pd.V).fill(!1), this.consumedButtons.fill(!1), this.suppressedReleases.fill(!1), this.wakeOwned.fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.lastFrame = (0, pd.y)()
      }
      dispatch(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.lastFrame = dd, this.previousHeld = this.EC, this.EC = (0, pd.u)(dd.values, this.previousHeld);
        for (let Wd = 0; Wd < pd.V; Wd++) this.suppressedReleases[Wd] = !this.EC[Wd] && this.consumedButtons[Wd], this.EC[Wd] || (this.consumedButtons[Wd] = !1), this.wakeOwned[Wd] && (this.EC[Wd] ? (this.consumedButtons[Wd] = !0, this.wakeOwned[Wd] = !1) : dd.values[Wd] < pd.R && (this.wakeOwned[Wd] = !1));
        Math.hypot(dd.leftStick.x, dd.leftStick.y) < gd && (this.leftStickConsumed = !1), Math.hypot(dd.rightStick.x, dd.rightStick.y) < gd && (this.rightStickConsumed = !1);
        const Nd = this.pickActive();
        if ((null === Nd || void 0 === Nd ? void 0 : Nd.name) !== this.activeName) {
          var Pd, Zd, Cd, Kd, od, ld;
          const dd = this.activeName,
            Jd = {
              left: !this.leftStickConsumed,
              right: !this.rightStickConsumed
            },
            kd = null !== (Pd = null === Nd || void 0 === Nd || null === (Zd = Nd.peek) || void 0 === Zd ? void 0 : Zd.call(Nd)) && void 0 !== Pd ? Pd : null,
            Wd = null === dd && !!kd && !(null === (Cd = this.consumers.get(kd.over)) || void 0 === Cd || !Cd.onPeekFrame),
            gd = kd && (kd.over === dd || Wd) ? kd : null,
            Qd = null !== this.peek && this.peek.over === (null === Nd || void 0 === Nd ? void 0 : Nd.name) ? this.peek : null;
          this.deactivateCurrent(null !== gd, null !== Qd), this.activeName = null !== (Kd = null === Nd || void 0 === Nd ? void 0 : Nd.name) && void 0 !== Kd ? Kd : null, null === dd || this.handOffPending || this.consumeAllHeld();
          const Ld = null === (od = null !== gd && void 0 !== gd ? gd : Qd) || void 0 === od ? void 0 : od.stick;
          "left" === Ld && Jd.left ? this.leftStickConsumed = !1 : "right" === Ld && Jd.right && (this.rightStickConsumed = !1), this.peek = gd, Nd || null === dd ? Nd && (null === (ld = this.idleResume) || void 0 === ld ? void 0 : ld.name) === Nd.name && (this.idleResume.left && (this.leftStickConsumed = !1), this.idleResume.right && (this.rightStickConsumed = !1)) : this.idleResume = {
            name: dd,
            left: Jd.left && this.leftStickConsumed,
            right: Jd.right && this.rightStickConsumed
          }, Nd && (this.idleResume = null);
          for (let Nd = 0; Nd < pd.V; Nd++) this.previousHeld[Nd] && !this.EC[Nd] && (this.suppressedReleases[Nd] = !0)
        }
        var Qd, Ld;
        (this.handOffPending = !1, Nd) && (kd && !Wd.has(Nd.name) && this.consumeWakePress(Nd), Nd.onFrame(this.buildInput(dd, Jd, kd)), this.peek && (null === (Qd = this.consumers.get(this.peek.over)) || void 0 === Qd || null === (Ld = Qd.onPeekFrame) || void 0 === Ld || Ld.call(Qd, this.buildInput(dd, Jd, !1, this.peek.stick))))
      }
      consumeWakePress(dd) {
        for (let Nd = 0; Nd < pd.V; Nd++) {
          var Jd, kd;
          const Wd = pd.W[Nd];
          (null !== (Jd = null === (kd = dd.wakePressActs) || void 0 === kd ? void 0 : kd.call(dd, Wd)) && void 0 !== Jd ? Jd : Pd.includes(Wd)) || (this.EC[Nd] ? this.consumedButtons[Nd] = !0 : this.lastFrame.values[Nd] >= pd.Q && (this.wakeOwned[Nd] = !0))
        }
      }
      pickActive() {
        for (const dd of Nd) {
          const Jd = this.consumers.get(dd);
          if (Jd && Jd.isActive()) return Jd
        }
        return null
      }
      deactivateCurrent() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        var kd, pd, Nd, Wd;
        this.activeName && (null === (kd = this.consumers.get(this.activeName)) || void 0 === kd || null === (pd = kd.onDeactivate) || void 0 === pd || pd.call(kd, dd));
        this.peek && !Jd && (null === (Nd = this.consumers.get(this.peek.over)) || void 0 === Nd || null === (Wd = Nd.onDeactivate) || void 0 === Wd || Wd.call(Nd, !1));
        this.peek = null
      }
      consumeAllHeld() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.idleResume = null;
        for (let Nd = 0; Nd < pd.V; Nd++) this.EC[Nd] && (this.consumedButtons[Nd] = !0);
        const {
          leftStick: Jd,
          rightStick: kd
        } = this.lastFrame;
        this.leftStickConsumed = "left" !== dd && (this.leftStickConsumed || Math.hypot(Jd.x, Jd.y) >= gd), this.rightStickConsumed = "right" !== dd && (this.rightStickConsumed || Math.hypot(kd.x, kd.y) >= gd)
      }
      handOffHeldInput() {
        this.handOffPending = !0
      }
      consumeButton(dd) {
        const Jd = (0, pd.m)(dd);
        this.EC[Jd] && (this.consumedButtons[Jd] = !0)
      }
      buildInput(dd, Jd, kd, Nd) {
        const Wd = this.EC,
          Pd = this.previousHeld,
          Zd = Nd ? new Array(pd.V).fill(!0) : [...this.consumedButtons],
          gd = Nd ? Zd : [...this.suppressedReleases],
          Cd = !this.leftStickConsumed && (!Nd || "left" === Nd),
          Kd = !this.rightStickConsumed && (!Nd || "right" === Nd);
        return {
          frame: dd,
          dtMs: Jd,
          isHeld: dd => {
            const Jd = (0, pd.m)(dd);
            return Wd[Jd] && !Zd[Jd]
          },
          wasPressed: dd => {
            const Jd = (0, pd.m)(dd);
            return Wd[Jd] && !Pd[Jd] && !Zd[Jd]
          },
          wasReleased: dd => {
            const Jd = (0, pd.m)(dd);
            return !Wd[Jd] && Pd[Jd] && !gd[Jd]
          },
          value: Jd => {
            const kd = (0, pd.m)(Jd);
            return Zd[kd] ? 0 : dd.values[kd]
          },
          leftStick: Cd ? dd.leftStick : {
            x: 0,
            y: 0
          },
          rightStick: Kd ? dd.rightStick : {
            x: 0,
            y: 0
          },
          wokeDevice: kd
        }
      }
    }
  },
  8043: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => od.f,
      i: () => od.h,
      k: () => Fd,
      m: () => Yd,
      q: () => md,
      t: () => bd
    });
    var pd = kd(56),
      Nd = kd(29),
      Wd = kd(1459),
      Pd = kd(33),
      Zd = kd(8052),
      gd = kd(8020),
      Cd = kd(8039),
      Kd = kd(8016),
      od = kd(1994),
      ld = kd(8060);
    const Qd = {
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
      Ld = "controllerSettings",
      Od = ["bindings", "promptFamily", "hideButtonHints", "swapSticks", "swapConfirmBack", "leaderboardButton"],
      ed = ["auto", ...Zd.d],
      Rd = (dd, Jd) => "string" === typeof Jd && dd.includes(Jd),
      Id = dd => Jd => "number" === typeof Jd && Number.isFinite(Jd) ? (0, ld.w)(Jd, dd) : void 0,
      Gd = dd => "boolean" === typeof dd ? dd : void 0,
      vd = dd => Jd => Rd(dd, Jd) ? Jd : void 0,
      xd = {
        lookSensitivityX: Id(ld.ob),
        lookSensitivityY: Id(ld.ob),
        aimLookSensitivity: Id(ld.l),
        invertLookX: Gd,
        invertLookY: Gd,
        lookCurve: vd(gd.N),
        lookDeadzone: Id(ld.A),
        moveDeadzone: Id(ld.A),
        swapSticks: Gd,
        autoSprint: Gd,
        sneakMode: vd(["toggle", "hold"]),
        tapHoldTime: vd(["short", "medium", "long"]),
        attackMode: vd(["hold", "toggle"]),
        promptFamily: vd(ed),
        hideButtonHints: Gd,
        vibration: Gd,
        cursorSpeed: Id(ld.x),
        cursorMagnetism: Gd,
        buttonRepeat: vd(gd.q),
        largePointer: Gd,
        menuBackToCategories: Gd,
        swapConfirmBack: Gd,
        menuNavigation: vd(["hybrid", "focus", "cursor"]),
        inventoryNavigation: vd(["hybrid", "slot", "cursor"]),
        quickChat: vd(["wheel", "off"]),
        leaderboardButton: vd(["shop", "leaderboard"]),
        gyroAiming: Gd,
        gyroSensitivity: Id(ld.S),
        gyroActivation: vd(["always", "aiming", "button"]),
        gyroButton: vd(gd.W),
        emoteButton: vd(["tapHold", "wheel"])
      },
      qd = [{
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
      Bd = dd => {
        const Jd = {};
        if ("object" !== typeof dd || null === dd) return Jd;
        for (const [kd, pd] of Object.entries(dd)) Object.prototype.hasOwnProperty.call(Cd.e, kd) && Rd(gd.W, pd) && (Jd[kd] = pd);
        return Jd
      },
      sd = dd => {
        const Jd = {};
        for (const kd of Object.keys(Qd))("bindings" === kd ? Object.keys(dd.bindings).length > 0 : dd[kd] !== Qd[kd]) && (Jd[kd] = dd[kd]);
        0 !== Object.keys(Jd).length ? Pd.i.setItem(Ld, Jd) : Pd.i.removeItem(Ld)
      };
    let ad = (() => {
        const dd = Pd.i.getItem(Ld),
          Jd = (dd => {
            const Jd = "object" === typeof dd && null !== dd ? dd : {},
              kd = {
                ...Qd,
                bindings: Bd(Jd.bindings)
              };
            for (const Nd of Object.keys(xd)) {
              const dd = xd[Nd](Jd[Nd]);
              void 0 !== dd && (kd[Nd] = dd)
            }
            const pd = Object.keys(Jd).filter((dd => !!Object.prototype.hasOwnProperty.call(Qd, dd) && ("bindings" === dd ? "object" !== typeof Jd.bindings || null === Jd.bindings || Object.keys(Jd.bindings).length !== Object.keys(kd.bindings).length : kd[dd] !== Jd[dd])));
            return pd.length > 0 && console.warn(`Stored controller settings had invalid values, replaced with defaults: ${pd.join(", ")}`), kd
          })(dd);
        return null !== dd && void 0 !== dd && sd(Jd), Jd
      })(),
      Md = {
        ...ad,
        ...(() => {
          if ("undefined" === typeof window) return {};
          const dd = {},
            Jd = new URLSearchParams(window.location.search);
          for (const {
              param: kd,
              key: pd
            }
            of qd) {
            const Nd = xd[pd](Jd.get(kd));
            void 0 !== Nd && (dd[pd] = Nd)
          }
          return dd
        })()
      };
    const Fd = () => Md,
      Yd = () => {
        var dd, Jd;
        const kd = Fd().promptFamily;
        return "auto" !== kd ? kd : null !== (dd = null === (Jd = Kd.c.getActivePad()) || void 0 === Jd ? void 0 : Jd.family) && void 0 !== dd ? dd : "xbox"
      },
      md = dd => {
        const Jd = Md;
        ad = {
          ...ad,
          ...dd
        }, sd(ad), Md = {
          ...Md,
          ...dd
        }, (dd => {
          Nd.j.nO(od.h, Md), Od.some((Jd => dd[Jd] !== Md[Jd])) && Nd.j.nO(od.f, Md)
        })(Jd)
      },
      bd = () => {
        const [dd, Jd] = (0, pd.useState)(Md);
        return (0, Wd.h)(od.h, Jd), dd
      }
  },
  8543: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Nd
    });
    const pd = new Set(["Alt", "AltGraph", "Meta", "OS", "AudioVolumeUp", "AudioVolumeDown", "AudioVolumeMute", "MediaPlayPause", "MediaPlay", "MediaPause", "MediaStop", "MediaTrackNext", "MediaTrackPrevious", "BrowserBack", "BrowserForward", "BrowserHome", "GoBack", "LaunchApplication1", "LaunchApplication2", "LaunchMail", "PrintScreen", "Unidentified"]),
      Nd = dd => pd.has(dd)
  },
  8016: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Od.d,
      c: () => Gd
    });
    var pd = kd(8020),
      Nd = kd(8026);
    const Wd = .1,
      Pd = .3;
    class Zd {
      constructor() {
        this.deadzone = 0, this.anchor = null, this.steadyMs = 0, this.lastMs = null, this.returning = !0, this.anchorLearned = !1
      }
      observe(dd, Jd) {
        const kd = null === this.lastMs ? 0 : Math.min(Math.max(0, Jd - this.lastMs), 100);
        this.lastMs = Jd;
        const pd = Math.hypot(dd.x, dd.y);
        if (pd >= Pd) return this.anchor = null, void(this.returning = !0);
        pd >= Wd || (this.returning = !1);
        const Nd = this.anchor;
        if (!Nd || Math.hypot(dd.x - Nd.x, dd.y - Nd.y) > .03) return this.anchorLearned && (this.returning = !1), this.anchor = {
          x: dd.x,
          y: dd.y
        }, this.steadyMs = 0, void(this.anchorLearned = !1);
        if (this.steadyMs += kd, this.steadyMs < 1e3) return;
        const Zd = Math.max(pd, Math.hypot(Nd.x, Nd.y));
        Zd < Wd ? this.deadzone = 0 : this.returning && (this.deadzone = Zd + .05, this.anchorLearned = !0)
      }
      getDeadzone() {
        return this.deadzone
      }
      apply(dd) {
        return Math.hypot(dd.x, dd.y) < this.deadzone ? {
          x: 0,
          y: 0
        } : dd
      }
    }
    const gd = (dd, Jd) => {
        var kd, pd;
        return null !== (kd = dd && (null === (pd = Object.getOwnPropertyDescriptor(dd, Jd)) || void 0 === pd ? void 0 : pd.get)) && void 0 !== kd ? kd : null
      },
      Cd = dd => {
        const Jd = dd.vendorName;
        return "string" === typeof Jd ? Jd : void 0
      },
      Kd = ((dd, Jd) => {
        const kd = gd(dd, "index"),
          pd = gd(dd, "id"),
          Nd = gd(dd, "connected"),
          Wd = gd(dd, "mapping"),
          Pd = gd(dd, "buttons"),
          Zd = gd(dd, "axes"),
          Kd = gd(Jd, "pressed"),
          od = gd(Jd, "value");
        return kd && pd && Nd && Wd && Pd && Zd && Kd && od ? dd => {
          const Jd = Pd.call(dd),
            gd = Zd.call(dd),
            ld = {
              index: Number(kd.call(dd)),
              id: String(pd.call(dd)),
              connected: !0 === Nd.call(dd),
              mapping: String(Wd.call(dd)),
              buttons: [],
              axes: [],
              vendorName: Cd(dd)
            };
          for (let kd = 0; kd < Jd.length; kd++) ld.buttons.push({
            pressed: !0 === Kd.call(Jd[kd]),
            value: Number(od.call(Jd[kd]))
          });
          for (let kd = 0; kd < gd.length; kd++) ld.axes.push(Number(gd[kd]));
          return ld
        } : null
      })("undefined" === typeof Gamepad ? null : Gamepad.prototype, "undefined" === typeof GamepadButton ? null : GamepadButton.prototype),
      od = "undefined" === typeof Navigator ? null : Navigator.prototype.getGamepads;
    var ld = kd(1426),
      Qd = kd(1429);
    const Ld = dd => ({
      pressed: dd,
      value: dd ? 1 : 0
    });
    var Od = kd(1994);
    const ed = Pd,
      Rd = dd => {
        const Jd = new Array(pd.V).fill(0);
        for (let kd = 0; kd < pd.V && kd < dd.buttons.length; kd++) {
          const Nd = dd.buttons[kd];
          Jd[kd] = Nd.pressed && !(0, pd.L)(kd) ? Math.max(Nd.value, pd.z) : Nd.value
        }
        return Jd
      },
      Id = (dd, Jd) => {
        var kd, pd;
        return {
          x: null !== (kd = dd.axes[Jd]) && void 0 !== kd ? kd : 0,
          y: null !== (pd = dd.axes[Jd + 1]) && void 0 !== pd ? pd : 0
        }
      };
    const Gd = new class {
      constructor(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Kd;
        this.readGamepads = dd, this.requireTrustedPads = Jd, this.nativeReader = kd, this.running = !1, this.listening = !1, this.rafId = 0, this.lastTimestampMs = 0, this.activeInfo = null, this.slots = [], this.trustedIndices = new Set, this.warnedNonStandardIds = new Set, this.loggedReadError = !1, this.frameListeners = new Set, this.connectionListeners = new Set, this.anyPadConnected = !1, this.connectedListeners = new Set, this.handleConnectionEvent = dd => {
          dd.isTrusted && this.trustedIndices.add(dd.gamepad.index), this.wake()
        }, this.handleDisconnectionEvent = dd => {
          this.trustedIndices.delete(dd.gamepad.index)
        }, this.Do = dd => {
          if (this.rafId = 0, !this.running) return;
          const Jd = 0 === this.lastTimestampMs ? 16 : Math.min(100, dd - this.lastTimestampMs);
          this.lastTimestampMs = dd;
          try {
            this.poll(dd, Jd)
          } finally {
            this.anyPadConnected && (this.rafId = requestAnimationFrame(this.Do))
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
      onFrame(dd) {
        return this.frameListeners.add(dd), () => {
          this.frameListeners.delete(dd)
        }
      }
      onActivePadChanged(dd) {
        return this.connectionListeners.add(dd), () => {
          this.connectionListeners.delete(dd)
        }
      }
      getActivePad() {
        return this.activeInfo
      }
      hasConnectedPad() {
        return this.anyPadConnected
      }
      onConnectedPadsChanged(dd) {
        return this.connectedListeners.add(dd), () => {
          this.connectedListeners.delete(dd)
        }
      }
      getActiveGamepad() {
        if (!this.activeInfo) return null;
        const dd = this.readPads()[this.activeInfo.index],
          Jd = dd ? this.readPad(dd) : null;
        return Jd && Jd.id === this.activeInfo.id ? dd : null
      }
      poll(dd, Jd) {
        var kd, Nd;
        const Wd = this.readPads();
        let Pd = null,
          gd = !1;
        const Cd = [],
          Kd = Math.max(Wd.length, this.slots.length);
        for (let Gd = 0; Gd < Kd; Gd++) {
          var od;
          const Jd = Gd < Wd.length ? Wd[Gd] : null,
            kd = Jd ? this.readPad(Jd) : null;
          if (!kd || !kd.connected || !this.isUsable(kd)) {
            this.slots[Gd] = null;
            continue
          }
          let Nd = this.slots[Gd];
          Nd && Nd.id === kd.id || (Nd = {
            id: kd.id,
            EC: [],
            leftSettled: !1,
            rightSettled: !1,
            leftRest: new Zd,
            rightRest: new Zd
          }, this.slots[Gd] = Nd);
          const Kd = Id(kd, 0),
            ld = Id(kd, 2);
          !Nd.leftSettled && Math.hypot(Kd.x, Kd.y) < ed && (Nd.leftSettled = !0), !Nd.rightSettled && Math.hypot(ld.x, ld.y) < ed && (Nd.rightSettled = !0), Nd.leftRest.observe(Kd, dd), Nd.rightRest.observe(ld, dd);
          const Qd = Rd(kd),
            Ld = (0, pd.u)(Qd, Nd.EC),
            Od = Nd.EC,
            vd = Ld.map(((dd, Jd) => dd && !Od[Jd]));
          Nd.EC = Ld;
          const xd = {
            pad: kd,
            slot: Nd,
            values: Qd
          };
          Gd === (null === (od = this.activeInfo) || void 0 === od ? void 0 : od.index) && kd.id === this.activeInfo.id ? (Pd = xd, gd = vd.includes(!0)) : vd.includes(!0) && Cd.push({
            polled: xd,
            rose: vd
          })
        }
        const ld = this.slots.some((dd => null !== dd));
        if (ld !== this.anyPadConnected) {
          this.anyPadConnected = ld;
          for (const dd of this.connectedListeners) dd()
        }
        const Qd = null !== (kd = null === (Nd = Pd) || void 0 === Nd ? void 0 : Nd.slot.EC) && void 0 !== kd ? kd : [],
          Ld = gd ? void 0 : Cd.find((dd => {
            let {
              rose: Jd
            } = dd;
            return Jd.some(((dd, Jd) => dd && !Qd[Jd]))
          }));
        if (Ld ? (Pd = Ld.polled, this.setActive(Ld.polled.pad)) : this.activeInfo && !Pd && this.setActive(null), !Pd || !this.activeInfo) return;
        const Od = ((dd, Jd) => {
          let {
            pad: kd,
            slot: Nd,
            values: Wd
          } = dd;
          const Pd = (0, pd.y)(Jd);
          return Pd.values = Wd, Nd.leftSettled && (Pd.leftStick = Nd.leftRest.apply(Id(kd, 0))), Nd.rightSettled && (Pd.rightStick = Nd.rightRest.apply(Id(kd, 2))), Pd
        })(Pd, dd);
        for (const pd of this.frameListeners) pd(Od, Jd, this.activeInfo)
      }
      readPad(dd) {
        const Jd = this.readSnapshot(dd);
        return Jd && (0, Qd.f)(Jd) ? (dd => {
          const Jd = Jd => {
              var kd;
              return null !== (kd = dd.buttons[Jd]) && void 0 !== kd ? kd : Ld(!1)
            },
            kd = Jd => {
              var kd;
              return null !== (kd = dd.axes[Jd]) && void 0 !== kd ? kd : 0
            },
            pd = dd.axes.length > 9,
            Nd = pd ? (dd => {
              const Jd = 0 !== dd;
              return {
                up: Jd && (dd >= -1 && dd < -.7 || dd >= .95 && dd <= 1),
                right: Jd && dd >= -.75 && dd < -.1,
                down: Jd && dd >= -.2 && dd < .45,
                left: Jd && dd >= .4 && dd <= 1
              }
            })(kd(9)) : {
              up: kd(5) < -.5,
              down: kd(5) > .5,
              left: kd(4) < -.5,
              right: kd(4) > .5
            };
          return {
            ...dd,
            mapping: "standard",
            buttons: [Jd(1), Jd(2), Jd(0), Jd(3), Jd(4), Jd(5), Jd(6), Jd(7), Jd(8), Jd(9), Jd(10), Jd(11), Ld(Nd.up), Ld(Nd.down), Ld(Nd.left), Ld(Nd.right), Jd(12)],
            axes: [kd(0), kd(1), kd(2), kd(pd ? 5 : 3)]
          }
        })(Jd) : Jd
      }
      readSnapshot(dd) {
        if (this.nativeReader) try {
          return this.nativeReader(dd)
        } catch {
          if (this.requireTrustedPads) return null
        }
        return this.requireTrustedPads ? null : (dd => {
          const Jd = dd;
          return {
            index: Jd.index,
            id: Jd.id,
            connected: Jd.connected,
            mapping: Jd.mapping,
            buttons: Array.from(Jd.buttons, (dd => ({
              pressed: dd.pressed,
              value: dd.value
            }))),
            axes: Array.from(Jd.axes),
            vendorName: Cd(dd)
          }
        })(dd)
      }
      isUsable(dd) {
        return !(0, ld.f)(dd.id) && ("standard" !== dd.mapping ? (this.warnedNonStandardIds.has(dd.id) || (this.warnedNonStandardIds.add(dd.id), console.warn(`Controller "${dd.id}" has no standard button mapping, so it is ignored.`)), !1) : !this.requireTrustedPads || this.trustedIndices.has(dd.index))
      }
      setActive(dd) {
        this.activeInfo = dd ? {
          index: dd.index,
          id: dd.id,
          family: (0, Nd.c)(dd.id, dd.vendorName)
        } : null;
        for (const Jd of this.connectionListeners) Jd(this.activeInfo)
      }
      readPads() {
        try {
          return this.readGamepads()
        } catch (dd) {
          return this.loggedReadError || (this.loggedReadError = !0, console.warn("Reading gamepads failed; controller input is unavailable.", dd)), []
        }
      }
      wake() {
        this.running && 0 === this.rafId && (this.lastTimestampMs = 0, this.rafId = requestAnimationFrame(this.Do))
      }
    }((() => od ? od.call(navigator) : []), !0);
    Gd.listenForConnections()
  },
  8554: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => pd
    });
    const pd = {
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
  8664: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Pd,
      c: () => Zd
    });
    var pd = kd(29),
      Nd = kd(8646);
    let Wd = !1;
    const Pd = () => Wd,
      Zd = dd => {
        dd !== Wd && (Wd = dd, pd.j.nO(Nd.h, Wd))
      }
  },
  8655: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Zd,
      i: () => gd
    });
    var pd = kd(29),
      Nd = kd(8646);
    let Wd = null,
      Pd = 0;
    const Zd = () => Wd,
      gd = dd => {
        null === dd && null === Wd || (Wd = null === dd ? null : {
          id: ++Pd,
          holdMs: dd
        }, pd.j.nO(Nd.i, Wd))
      }
  },
  8666: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Pd,
      h: () => Zd
    });
    var pd = kd(29),
      Nd = kd(8646);
    let Wd = !1;
    const Pd = () => Wd,
      Zd = dd => {
        dd !== Wd && (Wd = dd, pd.j.nO(Nd.m, Wd))
      }
  },
  8740: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Pd,
      e: () => Zd
    });
    var pd = kd(29),
      Nd = kd(8646);
    let Wd = !1;
    const Pd = () => Wd,
      Zd = dd => {
        dd !== Wd && (Wd = dd, pd.j.nO(Nd.o, Wd))
      }
  },
  8605: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => pd
    });
    class pd {
      constructor() {
        this.downAtMs = null
      }
      update(dd, Jd, kd, pd) {
        if (dd) return this.downAtMs = kd, null;
        if (null === this.downAtMs) return null;
        const Nd = kd - this.downAtMs >= pd;
        return Jd ? Nd ? (this.downAtMs = null, "hold") : null : (this.downAtMs = null, Nd ? "hold" : "tap")
      }
      release() {
        this.downAtMs = null
      }
    }
  },
  8089: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => od,
      f: () => ld,
      g: () => Zd,
      h: () => Gd,
      i: () => Id
    });
    var pd = kd(33),
      Nd = kd(8052),
      Wd = kd(8020);
    const Pd = (() => {
        try {
          return kd(8096)
        } catch {
          return null
        }
      })(),
      Zd = [...Wd.W, "LeftStick", "RightStick"],
      gd = new Map,
      Cd = {
        xbox: "xbox",
        playstation: "playstation",
        nintendo: "nintendo",
        steamdeck: "steamdeck",
        generic: "xbox"
      },
      Kd = (new Set(Object.values(Cd)), {
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
      od = (dd, Jd) => {
        var kd, pd;
        return null !== (kd = null === (pd = Kd[Cd[dd]]) || void 0 === pd ? void 0 : pd[Jd]) && void 0 !== kd ? kd : 1
      },
      ld = (dd, Jd) => {
        const kd = `./${Cd[dd]}/${Jd}.svg`;
        let pd = gd.get(kd);
        return void 0 === pd && (pd = Pd ? Pd(kd) : "", gd.set(kd, pd)), pd
      },
      Qd = new Set,
      Ld = [],
      Od = dd => {
        if (!Qd.has(dd)) {
          Qd.add(dd);
          for (const Jd of Zd) {
            const kd = ld(dd, Jd);
            if (kd) {
              const dd = new Image;
              dd.crossOrigin = "anonymous", dd.src = kd, Ld.push(dd)
            }
          }
        }
      },
      ed = "controllerGlyphFamily";
    let Rd = null;
    const Id = dd => {
        dd !== Rd && (Rd = dd, pd.i.setItem(ed, dd), Od(dd))
      },
      Gd = () => {
        const dd = pd.i.getItem(ed);
        (0, Nd.e)(dd) && dd !== Rd && (Rd = dd, Od(dd))
      }
  },
  8771: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => yd,
      i: () => Dd
    });
    var pd = kd(56),
      Nd = kd(29),
      Wd = kd(1459),
      Pd = kd(8031),
      Zd = kd(8016),
      gd = kd(8077),
      Cd = kd(8043);
    const Kd = {
        x: 0,
        y: 0,
        z: 0
      },
      od = Math.PI / 180,
      ld = dd => Math.hypot(dd.x, dd.y, dd.z),
      Qd = (dd, Jd) => ({
        x: dd.x * Jd,
        y: dd.y * Jd,
        z: dd.z * Jd
      }),
      Ld = (dd, Jd) => ({
        x: dd.x + Jd.x,
        y: dd.y + Jd.y,
        z: dd.z + Jd.z
      }),
      Od = (dd, Jd) => ({
        x: dd.x - Jd.x,
        y: dd.y - Jd.y,
        z: dd.z - Jd.z
      }),
      ed = dd => {
        const Jd = ld(dd);
        return 0 === Jd ? Kd : Qd(dd, 1 / Jd)
      },
      Rd = dd => ({
        min: {
          ...dd
        },
        max: {
          ...dd
        }
      }),
      Id = (dd, Jd) => ({
        min: {
          x: Math.min(dd.min.x, Jd.x),
          y: Math.min(dd.min.y, Jd.y),
          z: Math.min(dd.min.z, Jd.z)
        },
        max: {
          x: Math.max(dd.max.x, Jd.x),
          y: Math.max(dd.max.y, Jd.y),
          z: Math.max(dd.max.z, Jd.z)
        }
      }),
      Gd = (dd, Jd) => dd.max.x - dd.min.x <= Jd && dd.max.y - dd.min.y <= Jd && dd.max.z - dd.min.z <= Jd;
    class vd {
      constructor() {
        this.bias = Kd, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = Kd, this.windowSec = 0
      }
      update(dd) {
        const Jd = this.gyroRange ? Id(this.gyroRange, dd.gyro) : Rd(dd.gyro),
          kd = dd.accel ? this.accelRange ? Id(this.accelRange, dd.accel) : Rd(dd.accel) : null;
        if (!Gd(Jd, 1) || kd && !Gd(kd, .01)) return void this.restartWindow(dd);
        if (this.gyroRange = Jd, this.accelRange = kd, this.sum = Ld(this.sum, Qd(dd.gyro, dd.dtSec)), this.windowSec += dd.dtSec, this.windowSec < 1) return;
        const pd = Qd(this.sum, 1 / this.windowSec);
        if (ld(pd) > 5) return;
        const Nd = Od(pd, this.bias);
        let Wd = 0;
        !this.calibrated || this.windowSec >= 3 ? Wd = 1 : ld(Nd) <= 1 && (Wd = Math.min(1, dd.dtSec / 1)), this.bias = Ld(this.bias, Qd(Nd, Wd)), this.calibrated = this.calibrated || Wd > 0
      }
      correct(dd) {
        return Od(dd, this.bias)
      }
      getBias() {
        return this.bias
      }
      isCalibrated() {
        return this.calibrated
      }
      reset() {
        this.bias = Kd, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = Kd, this.windowSec = 0
      }
      restartWindow(dd) {
        this.gyroRange = Rd(dd.gyro), this.accelRange = dd.accel ? Rd(dd.accel) : null, this.sum = Kd, this.windowSec = 0
      }
    }
    class xd {
      constructor() {
        this.down = null
      }
      update(dd, Jd, kd) {
        const pd = ed(Qd(Jd, -1));
        if (!this.down) return this.down = pd, pd;
        const Nd = Qd(dd, od * kd),
          Wd = this.down,
          Pd = {
            x: Wd.x - (Nd.y * Wd.z - Nd.z * Wd.y),
            y: Wd.y - (Nd.z * Wd.x - Nd.x * Wd.z),
            z: Wd.z - (Nd.x * Wd.y - Nd.y * Wd.x)
          },
          Zd = 0 === ld(pd) ? 0 : Math.min(1, kd / .25);
        var gd, Cd;
        return this.down = ed((Cd = Zd, Ld(gd = Pd, Qd(Od(pd, gd), Cd)))), this.down
      }
      reset() {
        this.down = null
      }
    }
    class qd {
      constructor() {
        this.entries = [], this.windowSec = 0
      }
      apply(dd, Jd, kd) {
        const pd = Math.hypot(dd, Jd),
          Nd = Math.max(0, Math.min(1, (pd - 2) / 2)),
          Wd = {
            yaw: dd * (1 - Nd),
            pitch: Jd * (1 - Nd),
            dtSec: kd
          };
        for (this.entries.push(Wd), this.windowSec += kd; this.entries.length > 1 && this.windowSec - this.entries[0].dtSec >= .125;) this.windowSec -= this.entries[0].dtSec, this.entries.shift();
        let Pd = 0,
          Zd = 0;
        for (const Cd of this.entries) Pd += Cd.yaw * Cd.dtSec, Zd += Cd.pitch * Cd.dtSec;
        const gd = this.windowSec > 0 ? {
          yaw: Pd / this.windowSec,
          pitch: Zd / this.windowSec
        } : {
          yaw: Wd.yaw,
          pitch: Wd.pitch
        };
        return {
          yaw: dd * Nd + gd.yaw,
          pitch: Jd * Nd + gd.pitch
        }
      }
      reset() {
        this.entries = [], this.windowSec = 0
      }
    }
    class Bd {
      constructor() {
        this.calibrator = new vd, this.gravity = new xd, this.smoother = new qd
      }
      process(dd, Jd, kd) {
        const pd = Math.max(0, Math.min(.05, Jd));
        this.calibrator.update({
          ...dd,
          dtSec: pd
        });
        const Nd = this.calibrator.correct(dd.gyro);
        let Wd = Nd.y;
        "player" === kd && dd.accel && (Wd = ((dd, Jd) => {
          const kd = dd.y * Jd.y + dd.z * Jd.z;
          return -Math.sign(kd) * Math.min(1.41 * Math.abs(kd), Math.hypot(dd.y, dd.z))
        })(Nd, this.gravity.update(Nd, dd.accel, pd)));
        const Pd = this.smoother.apply(Wd, Nd.x, pd),
          Zd = ((dd, Jd) => {
            const kd = Math.hypot(dd, Jd);
            if (kd >= 1) return {
              yaw: dd,
              pitch: Jd
            };
            const pd = kd / 1;
            return {
              yaw: dd * pd,
              pitch: Jd * pd
            }
          })(Pd.yaw, Pd.pitch);
        return {
          yawDeg: Zd.yaw * pd,
          pitchDeg: Zd.pitch * pd
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
    const sd = (dd, Jd) => {
      var kd, pd, Nd;
      const Wd = Jd * od,
        Pd = null !== (kd = dd.beta) && void 0 !== kd ? kd : 0,
        Zd = null !== (pd = dd.gamma) && void 0 !== pd ? pd : 0;
      return {
        x: Pd * Math.cos(Wd) - Zd * Math.sin(Wd),
        y: Pd * Math.sin(Wd) + Zd * Math.cos(Wd),
        z: null !== (Nd = dd.alpha) && void 0 !== Nd ? Nd : 0
      }
    };
    var ad = kd(8778);
    class Md {
      constructor(dd, Jd, kd) {
        this.hid = dd, this.sink = Jd, this.onControllersChanged = kd, this.controllers = new Map, this.running = !1, this.openedCount = 0, this.opening = new Set, this.disconnectedWhileOpening = new Set, this.switchPacketCounter = 0, this.onConnect = dd => {
          this.openController(dd.device).catch((dd => {
            console.warn("Could not open motion controller", dd)
          }))
        }, this.onDisconnect = dd => {
          this.opening.has(dd.device) && this.disconnectedWhileOpening.add(dd.device);
          const Jd = this.controllers.get(dd.device);
          Jd && (this.forget(Jd), this.onControllersChanged())
        }
      }
      async start() {
        if (this.running) return;
        this.running = !0, this.hid.addEventListener("connect", this.onConnect), this.hid.addEventListener("disconnect", this.onDisconnect);
        const dd = await this.hid.getDevices();
        for (const Jd of dd) await this.openController(Jd).catch((dd => {
          console.warn("Could not open motion controller", dd)
        }))
      }
      stop() {
        this.running = !1, this.hid.removeEventListener("connect", this.onConnect), this.hid.removeEventListener("disconnect", this.onDisconnect);
        for (const dd of [...this.controllers.values()]) this.forget(dd);
        this.onControllersChanged()
      }
      async request() {
        const dd = await this.hid.requestDevice({
          filters: ad.m
        });
        let Jd = 0;
        for (const kd of dd) await this.openController(kd).catch((dd => {
          console.warn("Could not open motion controller", dd), Jd++
        }));
        return Jd
      }
      async hasGrantedController() {
        return (await this.hid.getDevices()).some((dd => null !== (0, ad.g)(dd.vendorId, dd.productId)))
      }
      getConnectedKinds() {
        return [...this.controllers.values()].map((dd => dd.kind))
      }
      forget(dd) {
        dd.device.removeEventListener("inputreport", dd.onReport), this.controllers.get(dd.device) === dd && this.controllers.delete(dd.device)
      }
      async openController(dd) {
        const Jd = (0, ad.g)(dd.vendorId, dd.productId);
        if (!Jd || !this.running || this.controllers.has(dd) || this.opening.has(dd)) return;
        this.opening.add(dd);
        let kd = !1;
        try {
          dd.opened || await dd.open()
        } finally {
          this.opening.delete(dd), kd = this.disconnectedWhileOpening.delete(dd)
        }
        if (kd) return void dd.close().catch((dd => {
          console.debug("Could not close an unplugged motion controller", dd)
        }));
        if (!this.running) return;
        const pd = {
          device: dd,
          kind: Jd,
          lastClock: null,
          lastEventMs: null,
          lastReadingMs: -1 / 0,
          openedOrder: this.openedCount++,
          onReport: dd => {
            this.onReport(pd, dd)
          }
        };
        this.controllers.set(dd, pd), dd.addEventListener("inputreport", pd.onReport), this.onControllersChanged();
        try {
          await this.enableMotion(pd)
        } catch (Nd) {
          console.warn(`Could not turn on motion for ${Jd}`, Nd), this.controllers.get(dd) === pd && (this.forget(pd), this.onControllersChanged())
        }
      }
      async enableMotion(dd) {
        let {
          device: Jd,
          kind: kd
        } = dd;
        if ((0, ad.j)(kd))
          for (const pd of ad.x[kd]) await Jd.receiveFeatureReport(pd).catch((dd => {
            console.debug(`Motion controller feature report ${pd} unavailable`, dd)
          }));
        else
          for (let pd = 0; pd < 2; pd++)
            for (const {
                subcommand: dd,
                args: kd
              }
              of ad.A) await Jd.sendReport(ad.B, (0, ad.c)(this.switchPacketCounter++, dd, kd)), await new Promise((dd => {
              setTimeout(dd, 60)
            }))
      }
      onReport(dd, Jd) {
        const kd = (0, ad.u)(dd.kind, Jd.reportId, Jd.data, dd.device.productId);
        if (!kd) return;
        const pd = null === dd.lastEventMs ? 0 : (Jd.timeStamp - dd.lastEventMs) / 1e3;
        dd.lastEventMs = Jd.timeStamp;
        let Nd = kd.dtSec;
        if (null !== Nd && pd > 0 && (Nd = Math.max(.001, Math.min(.017, pd / kd.readings.length))), null === Nd && null !== kd.sensorClock && (0, ad.j)(dd.kind)) {
          const Jd = (0, ad.v)(dd.kind, dd.lastClock, kd.sensorClock);
          dd.lastClock = kd.sensorClock, Nd = 0 === Jd ? null : Jd
        }
        if (dd.lastReadingMs = Jd.timeStamp, this.isPreferred(dd, Jd.timeStamp))
          for (const Pd of kd.readings) {
            var Wd;
            this.sink(Pd, null !== (Wd = Nd) && void 0 !== Wd ? Wd : pd, `hid${dd.openedOrder}`)
          }
      }
      isPreferred(dd, Jd) {
        const kd = dd => 1e6 * ad.q[dd.kind] + dd.openedOrder;
        for (const pd of this.controllers.values())
          if (pd !== dd && Jd - pd.lastReadingMs < 500 && kd(pd) < kd(dd)) return !1;
        return !0
      }
    }
    var Fd = kd(95);
    const Yd = () => DeviceMotionEvent,
      md = () => "undefined" !== typeof window && "undefined" !== typeof DeviceMotionEvent && window.isSecureContext && (0, Fd.isMobile)(),
      bd = () => {
        var dd;
        const Jd = null === (dd = window.screen.orientation) || void 0 === dd ? void 0 : dd.angle;
        return "number" === typeof Jd ? Jd : "number" === typeof window.orientation ? window.orientation : 0
      };
    class Sd {
      constructor(dd, Jd) {
        this.sink = dd, this.onStateChanged = Jd, this.state = "off", this.lastEventMs = null, this.noSensorTimer = null, this.wanted = !1, this.permissionRequest = null, this.granted = !1, this.onGesture = () => {
          this.requestPermission().catch((dd => {
            console.warn("Could not enable the motion sensor", dd)
          }))
        }, this.onMotion = dd => {
          const Jd = dd.rotationRate;
          if (!Jd || null === Jd.alpha && null === Jd.beta && null === Jd.gamma) return;
          const kd = null === this.lastEventMs ? 0 : (dd.timeStamp - this.lastEventMs) / 1e3;
          this.lastEventMs = dd.timeStamp, this.clearNoSensorTimer(), this.setState("on"), this.sink({
            gyro: sd(Jd, bd()),
            accel: null
          }, kd, "phone")
        }
      }
      getState() {
        return this.state
      }
      start() {
        if (this.wanted = !0, "off" === this.state) return "function" !== typeof Yd().requestPermission || this.granted ? void this.listen() : (this.setState("needsPermission"), void this.armGestureRequest())
      }
      requestPermission() {
        return this.permissionRequest || (this.permissionRequest = this.askPermission().finally((() => {
          this.permissionRequest = null
        }))), this.permissionRequest
      }
      async askPermission() {
        const dd = Yd().requestPermission;
        if (!this.wanted) return;
        if ("function" !== typeof dd) return void this.listen();
        let Jd;
        this.disarmGestureRequest();
        try {
          Jd = await dd.call(DeviceMotionEvent)
        } catch (kd) {
          throw this.wanted && "needsPermission" === this.state && this.armGestureRequest(), kd
        }
        this.wanted && ("granted" === Jd ? (this.granted = !0, this.listen()) : this.setState("denied"))
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
      setState(dd) {
        this.state !== dd && (this.state = dd, this.onStateChanged())
      }
    }
    const jd = "controllerGyroStatusChanged",
      Xd = {
        bY: 0,
        fY: 0
      },
      fd = dd => {
        var Jd, kd;
        return "undefined" === typeof document || (null === (Jd = null === (kd = document.featurePolicy) || void 0 === kd ? void 0 : kd.allowsFeature(dd)) || void 0 === Jd || Jd)
      };
    class nd {
      constructor() {
        this.processor = new Bd, this.hid = void 0, this.hidBlocked = void 0, this.phone = void 0, this.phoneBlocked = void 0, this.source = null, this.pendingYawDeg = 0, this.pendingPitchDeg = 0, this.lastDrainMs = -1 / 0, this.lastHidReadingMs = -1 / 0, this.running = !1, this.phoneRunning = !1, this.syncWithSettings = dd => {
          const Jd = dd.gyroAiming && Zd.c.hasConnectedPad();
          var kd, pd;
          Jd !== this.phoneRunning && (this.phoneRunning = Jd, Jd ? null === (kd = this.phone) || void 0 === kd || kd.start() : null === (pd = this.phone) || void 0 === pd || pd.stop());
          if (dd.gyroAiming !== this.running) {
            var Nd, Wd;
            if (this.running = dd.gyroAiming, this.running) null === (Nd = this.hid) || void 0 === Nd || Nd.start().catch((dd => {
              console.warn("Could not open motion controllers", dd)
            }));
            else null === (Wd = this.hid) || void 0 === Wd || Wd.stop(), this.processor.reset(), this.source = null, this.discardPending();
            this.publishStatus()
          }
        }, this.publishStatus = () => {
          Nd.j.nO(jd, this.getStatus())
        };
        const dd = (() => {
            var dd;
            return "undefined" !== typeof navigator && window.isSecureContext && null !== (dd = navigator.hid) && void 0 !== dd ? dd : null
          })(),
          Jd = fd("hid");
        this.hidBlocked = null !== dd && !Jd, this.hid = dd && Jd ? new Md(dd, ((dd, Jd, kd) => {
          this.lastHidReadingMs = performance.now(), this.feed(dd, Jd, "player", kd)
        }), this.publishStatus) : null;
        const kd = fd("accelerometer") && fd("gyroscope");
        this.phoneBlocked = md() && !kd, this.phone = md() && kd ? new Sd(((dd, Jd, kd) => {
          performance.now() - this.lastHidReadingMs >= 500 && this.feed(dd, Jd, "local", kd)
        }), this.publishStatus) : null, Nd.j.subscribe(Cd.i, this.syncWithSettings), Zd.c.onConnectedPadsChanged((() => {
          this.syncWithSettings((0, Cd.k)()), this.publishStatus()
        })), this.syncWithSettings((0, Cd.k)())
      }
      isSupported() {
        return null !== this.hid || null !== this.phone
      }
      getStatus() {
        var dd, Jd, kd, pd;
        return {
          hidSupported: null !== this.hid,
          hidBlocked: this.hidBlocked,
          phoneSupported: null !== this.phone,
          phoneBlocked: this.phoneBlocked,
          controllers: null !== (dd = null === (Jd = this.hid) || void 0 === Jd ? void 0 : Jd.getConnectedKinds()) && void 0 !== dd ? dd : [],
          phoneMotion: null !== (kd = null === (pd = this.phone) || void 0 === pd ? void 0 : pd.getState()) && void 0 !== kd ? kd : "off",
          padConnected: Zd.c.hasConnectedPad()
        }
      }
      async connectController() {
        return this.hid ? this.hid.request() : 0
      }
      async connectControllerIfNoneGranted() {
        this.hid && !await this.hid.hasGrantedController() && await this.hid.request()
      }
      async allowPhoneMotion() {
        var dd;
        await (null === (dd = this.phone) || void 0 === dd ? void 0 : dd.requestPermission())
      }
      drainLookDelta() {
        const dd = performance.now();
        dd - this.lastDrainMs > 500 && this.discardPending(), this.lastDrainMs = dd;
        const Jd = {
          yawDeg: this.pendingYawDeg,
          pitchDeg: this.pendingPitchDeg
        };
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0;
        const kd = (0, Cd.k)();
        return kd.gyroAiming && (dd => {
          let {
            activation: Jd,
            isHeld: kd,
            useButton: pd,
            gyroButton: Nd
          } = dd;
          return "always" === Jd || kd("aiming" === Jd ? pd : Nd)
        })({
          activation: kd.gyroActivation,
          isHeld: dd => gd.e.isButtonHeld(dd),
          useButton: (0, Pd.j)("use"),
          gyroButton: kd.gyroButton
        }) ? ((dd, Jd) => ({
          bY: -dd.yawDeg * Jd * od,
          fY: -dd.pitchDeg * Jd * od
        }))(Jd, kd.gyroSensitivity) : Xd
      }
      discardPending() {
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0
      }
      injectMotion(dd, Jd) {
        this.feed(dd, Jd, "local", "injected")
      }
      getCalibration() {
        return this.processor.getCalibration()
      }
      feed(dd, Jd, kd, pd) {
        this.source !== pd && (this.processor.reset(), this.source = pd);
        const Nd = this.processor.process(dd, Jd, kd);
        this.pendingYawDeg += Nd.yawDeg, this.pendingPitchDeg += Nd.pitchDeg
      }
    }
    let Ud = null;
    const yd = () => (Ud || (Ud = new nd), Ud),
      Dd = () => {
        const [dd, Jd] = (0, pd.useState)((() => yd().getStatus()));
        return (0, Wd.h)(jd, Jd), (0, pd.useEffect)((() => {
          Jd(yd().getStatus())
        }), []), dd
      }
  },
  8778: (dd, Jd, kd) => {
    kd.d(Jd, {
      A: () => qd,
      B: () => Gd,
      c: () => xd,
      g: () => gd,
      j: () => pd,
      m: () => Zd,
      o: () => Cd,
      q: () => Kd,
      u: () => Id,
      v: () => ed,
      x: () => Bd
    });
    const pd = dd => "dualShock4" === dd || "dualSense" === dd,
      Nd = 1356,
      Wd = 1406,
      Pd = [{
        vendorId: Nd,
        productId: 1476,
        kind: "dualShock4"
      }, {
        vendorId: Nd,
        productId: 2508,
        kind: "dualShock4"
      }, {
        vendorId: Nd,
        productId: 2976,
        kind: "dualShock4"
      }, {
        vendorId: Nd,
        productId: 3302,
        kind: "dualSense"
      }, {
        vendorId: Nd,
        productId: 3570,
        kind: "dualSense"
      }, {
        vendorId: Wd,
        productId: 8201,
        kind: "switchPro"
      }, {
        vendorId: Wd,
        productId: 8198,
        kind: "joyConLeft"
      }, {
        vendorId: Wd,
        productId: 8199,
        kind: "joyConRight"
      }],
      Zd = Pd.map((dd => {
        let {
          vendorId: Jd,
          productId: kd
        } = dd;
        return {
          vendorId: Jd,
          productId: kd
        }
      })),
      gd = (dd, Jd) => {
        var kd, pd;
        return null !== (kd = null === (pd = Pd.find((kd => kd.vendorId === dd && kd.productId === Jd))) || void 0 === pd ? void 0 : pd.kind) && void 0 !== kd ? kd : null
      },
      Cd = {
        dualShock4: "DualShock 4",
        dualSense: "DualSense",
        switchPro: "Switch Pro Controller",
        joyConLeft: "Joy-Con (L)",
        joyConRight: "Joy-Con (R)"
      },
      Kd = {
        dualSense: 0,
        dualShock4: 0,
        switchPro: 0,
        joyConRight: 1,
        joyConLeft: 2
      },
      od = 2e3 / 32767,
      ld = 1 / 8192,
      Qd = 936 / 13371,
      Ld = (dd, Jd, kd) => ({
        x: dd.getInt16(Jd, !0) * kd,
        y: dd.getInt16(Jd + 2, !0) * kd,
        z: dd.getInt16(Jd + 4, !0) * kd
      }),
      Od = dd => 0 === dd.x && 0 === dd.y && 0 === dd.z,
      ed = (dd, Jd, kd) => null === Jd ? null : "dualShock4" === dd ? 16 * (kd - Jd & 65535) / 3 / 1e6 : (kd - Jd >>> 0) / 3 / 1e6,
      Rd = (dd, Jd) => "joyConRight" === Jd ? {
        x: dd.y,
        y: -dd.z,
        z: -dd.x
      } : {
        x: -dd.y,
        y: dd.z,
        z: -dd.x
      },
      Id = (dd, Jd, kd, Nd) => pd(dd) ? ((dd, Jd, kd, pd) => {
        const Nd = ((dd, Jd, kd) => "dualShock4" === dd ? 1 === Jd && kd >= 63 ? 0 : 17 === Jd && kd >= 65 ? 2 : null : 1 === Jd && kd >= 62 ? 0 : 49 === Jd && kd >= 63 ? 1 : null)(dd, Jd, kd.byteLength);
        if (null === Nd) return null;
        if (2976 === pd && 1 === Jd && 0 !== (4 & kd.getUint8(30))) return null;
        const Wd = Nd + ("dualShock4" === dd ? 12 : 15),
          Pd = Ld(kd, Wd, od),
          Zd = Ld(kd, Wd + 6, ld);
        return Od(Pd) && Od(Zd) ? null : {
          readings: [{
            gyro: Pd,
            accel: Zd
          }],
          dtSec: null,
          sensorClock: "dualShock4" === dd ? kd.getUint16(Nd + 9, !0) : kd.getUint32(Nd + 27, !0)
        }
      })(dd, Jd, kd, Nd) : ((dd, Jd, kd) => {
        if (48 !== Jd && 49 !== Jd || kd.byteLength < 48) return null;
        const pd = [];
        for (let Nd = 0; Nd < 3; Nd++) {
          const Jd = Ld(kd, 12 + 12 * Nd, 244e-6),
            Wd = Ld(kd, 18 + 12 * Nd, Qd);
          if (Od(Wd) && Od(Jd)) return null;
          pd.push({
            gyro: Rd(Wd, dd),
            accel: Rd(Jd, dd)
          })
        }
        return {
          readings: pd,
          dtSec: .005,
          sensorClock: null
        }
      })(dd, Jd, kd),
      Gd = 1,
      vd = [0, 1, 64, 64, 0, 1, 64, 64],
      xd = (dd, Jd, kd) => new Uint8Array([15 & dd, ...vd, Jd, ...kd]),
      qd = [{
        subcommand: 64,
        args: [1]
      }, {
        subcommand: 3,
        args: [48]
      }],
      Bd = {
        dualShock4: [2, 5],
        dualSense: [5]
      }
  },
  8081: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Yd,
      f: () => nd,
      g: () => Rd,
      h: () => Qd.d,
      l: () => Sd,
      m: () => bd,
      n: () => Id,
      p: () => jd,
      s: () => Qd.i,
      w: () => Qd.m,
      z: () => Ud,
      A: () => Qd.n,
      E: () => sd
    });
    var pd = kd(56),
      Nd = kd(22),
      Wd = kd(29),
      Pd = kd(1459),
      Zd = kd(1307),
      gd = kd(8043),
      Cd = kd(8084),
      Kd = kd(8026),
      od = kd(8016),
      ld = kd(8089),
      Qd = kd(1404),
      Ld = kd(8020),
      Od = kd(8543),
      ed = kd(4221);
    const Rd = dd => !dd.repeat && !(0, Od.b)(dd.key),
      Id = "PadHidesCursor";
    let Gd = !1;
    const vd = dd => {
        dd !== Gd && (Gd = dd, document.documentElement.classList.toggle(Id, dd))
      },
      xd = new class {
        constructor() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
        observe(dd) {
          let Jd = !1,
            kd = !1;
          dd.values.forEach(((dd, pd) => {
            const Nd = dd >= (this.buttonsDown[pd] ? Ld.R : Ld.Q);
            Nd && !this.buttonsDown[pd] && (Jd = !0, kd = !0), this.buttonsDown[pd] = Nd
          }));
          return [dd.leftStick, dd.rightStick].forEach(((dd, pd) => {
            const Nd = this.stickAnchors[pd];
            Math.hypot(dd.x, dd.y) < (Nd ? Ld.R : .3) ? this.stickAnchors[pd] = null : (!Nd || Math.hypot(dd.x - Nd.x, dd.y - Nd.y) >= .3) && (this.stickAnchors[pd] = {
              x: dd.x,
              y: dd.y
            }, Jd = !0, kd ||= !Nd)
          })), Jd && (this.lastActivityMs = dd.timestampMs), this.onlyMovedOn = Jd && !kd, Jd
        }
        wasOnlyMoveOn() {
          return this.onlyMovedOn
        }
        isHolding(dd) {
          return !(dd - this.lastActivityMs >= 1e3) && (this.buttonsDown.some((dd => dd)) || this.stickAnchors.some((dd => null !== dd)))
        }
        isStickOffRest() {
          return this.stickAnchors.some((dd => null !== dd))
        }
        reset() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
      };
    let qd = null,
      Bd = !1;
    const sd = () => Bd;
    let ad = null,
      Md = !1,
      Fd = null;
    const Yd = () => Fd;
    let md = !1;
    const bd = dd => {
        if (!xd.observe(dd)) return !1;
        if (md && xd.wasOnlyMoveOn() && !(0, Qd.d)()) return !1;
        md = !1, Bd = !1;
        const Jd = !(0, Qd.d)();
        return Jd && (qd = dd, Fd = !Gd && Md && ad ? {
          ...ad
        } : null), Md = !1, (0, Qd.i)("gamepad"), vd(!0), (0, ld.i)((0, gd.m)()), Jd
      },
      Sd = dd => !(0, Qd.d)() || dd === qd,
      jd = () => {
        xd.reset()
      },
      Xd = () => {
        const dd = Nd.d.get("activeInputDevice"),
          Jd = "gamepad" === dd ? od.c.getActivePad() : null;
        return {
          device: dd,
          inGame: (0, Zd.s)(),
          padMovesMouse: null !== Jd && (0, Kd.g)(Jd.id)
        }
      },
      fd = dd => {
        document.pointerLockElement ? ad = null : (ad ??= {
          x: 0,
          y: 0
        }, ad.x = dd.clientX, ad.y = dd.clientY)
      },
      nd = () => {
        const dd = new ed.b,
          Jd = Jd => {
            dd.reset(), md = !1, (0, Qd.i)(Jd)
          },
          kd = dd => {
            if (dd.isTrusted) {
              if (dd instanceof KeyboardEvent) {
                if ((0, Qd.h)(dd), !Rd(dd)) return;
                Bd = !0
              }
              if (dd instanceof PointerEvent && "touch" === dd.pointerType) return ad = null, void Jd("touch");
              dd instanceof PointerEvent && (fd(dd), Md = !0), ("pointerdown" !== dd.type || (dd => {
                let {
                  device: Jd,
                  inGame: kd,
                  padMovesMouse: pd
                } = dd;
                return !("gamepad" === Jd && pd && kd)
              })(Xd())) && Jd("keyboardMouse")
            }
          },
          pd = dd => {
            dd.isTrusted && (ad = null, Jd("touch"))
          },
          Pd = dd => {
            dd.isTrusted && "touch" !== dd.pointerType && !dd.relatedTarget && (ad = null)
          },
          Zd = kd => {
            if (!kd.isTrusted || "touch" === kd.pointerType) return;
            fd(kd);
            const pd = kd.movementX || 0,
              Wd = kd.movementY || 0;
            if (0 === pd && 0 === Wd) return;
            if (Md = !0, vd(!1), "keyboardMouse" === Nd.d.get("activeInputDevice")) return;
            const Pd = xd.isHolding(kd.timeStamp),
              Zd = Xd(),
              gd = (dd => {
                let {
                  device: Jd,
                  inGame: kd,
                  padMovesMouse: pd,
                  padHolding: Nd
                } = dd;
                return ("gamepad" !== Jd || !pd) && "keyboardMouse" !== Jd && (kd || !Nd)
              })({
                ...Zd,
                inGame: Zd.inGame && (0, Cd.d)(),
                padHolding: Pd
              });
            gd && dd.add(pd, Wd, kd.timeStamp) && (Jd("keyboardMouse"), md = xd.isStickOffRest())
          },
          gd = dd => {
            vd("gamepad" === dd)
          },
          Kd = {
            capture: !0,
            passive: !0
          };
        window.addEventListener("keydown", kd, Kd), window.addEventListener("pointerdown", kd, Kd), window.addEventListener("wheel", kd, Kd), window.addEventListener("touchstart", pd, Kd), window.addEventListener("pointermove", Zd, Kd), window.addEventListener("pointerout", Pd, Kd);
        const od = Wd.j.subscribe("appManagerUpdated|activeInputDevice", gd);
        return gd(Nd.d.get("activeInputDevice")), () => {
          window.removeEventListener("keydown", kd, Kd), window.removeEventListener("pointerdown", kd, Kd), window.removeEventListener("wheel", kd, Kd), window.removeEventListener("touchstart", pd, Kd), window.removeEventListener("pointermove", Zd, Kd), window.removeEventListener("pointerout", Pd, Kd), ad = null, Wd.j.unsubscribe(od), vd(!1)
        }
      },
      Ud = () => {
        const [dd, Jd] = (0, pd.useState)(gd.m);
        return (0, Pd.h)(gd.e, (() => {
          Jd((0, gd.m)())
        })), (0, Pd.h)(od.b, (() => {
          Jd((0, gd.m)())
        })), dd
      }
  },
  8052: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => pd,
      e: () => Nd
    });
    const pd = ["xbox", "playstation", "nintendo", "steamdeck", "generic"],
      Nd = dd => pd.includes(dd)
  },
  8084: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Cd,
      d: () => Kd,
      e: () => gd,
      i: () => Zd
    });
    var pd = kd(22),
      Nd = kd(1670),
      Wd = kd(1756);
    const Pd = new Map,
      Zd = (dd, Jd) => (Pd.has(dd) && console.warn(`Gameplay blocker "${dd}" registered twice; the newer one replaces it.`), Pd.set(dd, Jd), () => {
        Pd.get(dd) === Jd && Pd.delete(dd)
      }),
      gd = () => (0, Wd.e)(document.activeElement),
      Cd = function() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        for (const [Jd, kd] of Pd)
          if (!dd.includes(Jd) && kd()) return Jd;
        return null
      },
      Kd = function() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return "inGame" === pd.d.get("gameState") && (!(0, Nd.n)() && (!gd() && null === Cd(dd)))
      }
  },
  8020: (dd, Jd, kd) => {
    kd.d(Jd, {
      C: () => Gd,
      E: () => md,
      G: () => vd,
      H: () => Rd,
      L: () => ed,
      N: () => Cd,
      Q: () => ld,
      R: () => Qd,
      V: () => Nd,
      W: () => pd,
      Z: () => qd,
      ab: () => Fd,
      c: () => Sd,
      eb: () => bd,
      f: () => Yd,
      fb: () => xd,
      h: () => Kd,
      i: () => gd,
      m: () => Zd,
      q: () => sd,
      u: () => Id,
      x: () => Bd,
      y: () => Wd,
      z: () => od
    });
    const pd = ["A", "B", "X", "Y", "LB", "RB", "LT", "RT", "View", "Menu", "LS", "RS", "Up", "Down", "Left", "Right", "Home"],
      Nd = pd.length,
      Wd = function() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return {
          values: new Array(Nd).fill(0),
          leftStick: {
            x: 0,
            y: 0
          },
          rightStick: {
            x: 0,
            y: 0
          },
          timestampMs: dd
        }
      },
      Pd = Object.fromEntries(pd.map(((dd, Jd) => [dd, Jd]))),
      Zd = dd => Pd[dd],
      gd = function(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .95;
        const pd = Math.hypot(dd.x, dd.y);
        if (pd <= Jd) return {
          x: 0,
          y: 0
        };
        const Nd = Math.min(1, (pd - Jd) / Math.max(1e-4, kd - Jd));
        return {
          x: dd.x / pd * Nd,
          y: dd.y / pd * Nd
        }
      },
      Cd = ["exponential", "linear", "boost"],
      Kd = (dd, Jd) => {
        const kd = Math.hypot(dd.x, dd.y);
        if (0 === kd) return {
          x: 0,
          y: 0
        };
        const pd = ((dd, Jd) => {
          const kd = Math.max(0, Math.min(1, dd));
          return "linear" === Jd ? kd : kd * kd
        })(kd, Jd);
        return {
          x: dd.x / kd * pd,
          y: dd.y / kd * pd
        }
      },
      od = .5,
      ld = .3,
      Qd = .2,
      Ld = Zd("LT"),
      Od = Zd("RT"),
      ed = dd => dd === Ld || dd === Od,
      Rd = (dd, Jd) => {
        const kd = Zd(Jd);
        return ed(kd) ? dd[kd] > .35 : dd[kd] >= od
      },
      Id = (dd, Jd) => dd.map(((dd, kd) => ed(kd) ? Jd[kd] ? dd > .35 : dd >= .55 : dd >= od)),
      Gd = ["Up", "Down", "Left", "Right"],
      vd = dd => Gd.includes(dd),
      xd = function(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .5;
        return Math.hypot(dd.x, dd.y) < Jd ? null : Math.abs(dd.x) > Math.abs(dd.y) ? dd.x > 0 ? "Right" : "Left" : dd.y > 0 ? "Down" : "Up"
      },
      qd = {
        initialDelayMs: 350,
        intervalMs: 120
      },
      Bd = {
        initialDelayMs: 350,
        intervalMs: 150
      },
      sd = ["default", "slow", "off"],
      ad = 800,
      Md = 250,
      Fd = (dd, Jd) => "off" === Jd ? null : "slow" === Jd ? {
        initialDelayMs: Math.max(dd.initialDelayMs, ad),
        intervalMs: Math.max(dd.intervalMs, Md)
      } : dd;
    class Yd {
      constructor(dd) {
        this.readTiming = dd, this.EC = !1, this.timing = null, this.nextFireMs = 0
      }
      update(dd, Jd) {
        return dd ? this.EC ? !!(this.timing && Jd >= this.nextFireMs) && (this.nextFireMs = Jd + this.timing.intervalMs, !0) : (this.EC = !0, this.timing = this.readTiming(), this.nextFireMs = Jd + (null !== (kd = null === (pd = this.timing) || void 0 === pd ? void 0 : pd.initialDelayMs) && void 0 !== kd ? kd : 0), !0) : (this.EC = !1, !1);
        var kd, pd
      }
      reset() {
        this.EC = !1
      }
    }
    const md = {
        initialDelayMs: 350,
        intervalMs: 80
      },
      bd = {
        initialDelayMs: 400,
        intervalMs: 90
      };
    class Sd {
      constructor(dd) {
        this.timer = dd, this.direction = null
      }
      update(dd, Jd) {
        return dd !== this.direction && (this.timer.reset(), this.direction = dd), this.timer.update(null !== dd, Jd) ? dd : null
      }
      reset() {
        this.timer.reset(), this.direction = null
      }
    }
  },
  8603: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Nd,
      c: () => Wd
    });
    let pd = -1 / 0;
    const Nd = () => {
        pd = performance.now()
      },
      Wd = dd => performance.now() - pd < dd
  },
  8551: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Pd,
      g: () => Wd
    });
    var pd = kd(8043),
      Nd = kd(8020);
    const Wd = dd => (0, Nd.ab)(dd, (0, pd.k)().buttonRepeat),
      Pd = dd => new Nd.f((() => Wd(dd)))
  },
  8069: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => gd,
      f: () => Wd,
      i: () => Zd
    });
    var pd = kd(29),
      Nd = kd(8043);
    const Wd = (dd, Jd) => "OpenShop" === dd ? "shop" === Jd : "OpenLobbyLeaderboard" !== dd || "leaderboard" === Jd;
    let Pd = !1;
    const Zd = dd => {
        dd !== Pd && (Pd = dd, pd.j.nO(Nd.e, (0, Nd.k)()))
      },
      gd = () => ((dd, Jd) => "shop" === dd && Jd ? "shop" : "leaderboard")((0, Nd.k)().leaderboardButton, Pd)
  },
  8060: (dd, Jd, kd) => {
    kd.d(Jd, {
      A: () => Zd,
      C: () => xd,
      G: () => ld,
      K: () => Qd,
      N: () => od,
      R: () => vd,
      S: () => Cd,
      W: () => Rd,
      Y: () => Md,
      ab: () => Gd,
      db: () => Od,
      e: () => Xd,
      g: () => nd,
      gb: () => ed,
      h: () => Fd,
      ib: () => Ld,
      jb: () => Id,
      kb: () => bd,
      l: () => Pd,
      ob: () => Wd,
      p: () => ad,
      r: () => Bd,
      rb: () => qd,
      s: () => Sd,
      sb: () => fd,
      u: () => jd,
      ub: () => sd,
      w: () => Kd,
      x: () => gd
    });
    var pd = kd(8039),
      Nd = kd(8020);
    const Wd = {
        min: 25,
        max: 500,
        step: 5
      },
      Pd = {
        min: 25,
        max: 100,
        step: 5
      },
      Zd = {
        min: 0,
        max: .4,
        step: .01
      },
      gd = {
        min: 25,
        max: 300,
        step: 5
      },
      Cd = {
        min: .5,
        max: 6,
        step: .1
      },
      Kd = (dd, Jd) => {
        if (!Number.isFinite(dd)) return Jd.min;
        const kd = Jd.min + Math.round((dd - Jd.min) / Jd.step) * Jd.step,
          pd = Math.min(Jd.max, Math.max(Jd.min, kd));
        return Math.round(1e3 * pd) / 1e3
      },
      od = dd => `${Math.round(dd)}%`,
      ld = dd => od(100 * dd),
      Qd = dd => `${dd.toFixed(1)}\xd7`,
      Ld = [{
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
      Od = [{
        value: "exponential",
        labelKey: "controller:settingsCurveExponential"
      }, {
        value: "linear",
        labelKey: "controller:settingsCurveLinear"
      }, {
        value: "boost",
        labelKey: "controller:settingsCurveBoost"
      }],
      ed = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "focus",
        labelKey: "controller:settingsMenuNavFocus"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      Rd = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "slot",
        labelKey: "controller:settingsInventoryNavSlot"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      Id = [{
        value: "wheel",
        labelKey: "controller:settingsQuickChatWheel"
      }, {
        value: "off",
        labelKey: "controller:settingsQuickChatOff"
      }],
      Gd = [{
        value: "shop",
        labelKey: "controller:settingsLeaderboardButtonShop"
      }, {
        value: "leaderboard",
        labelKey: "controller:settingsLeaderboardButtonLeaderboard"
      }],
      vd = [{
        value: "always",
        labelKey: "controller:settingsGyroAlways"
      }, {
        value: "aiming",
        labelKey: "controller:settingsGyroWhileAiming"
      }, {
        value: "button",
        labelKey: "controller:settingsGyroWhileButton"
      }],
      xd = [{
        value: "tapHold",
        labelKey: "controller:settingsEmoteButtonTapHold"
      }, {
        value: "wheel",
        labelKey: "controller:settingsEmoteButtonWheel"
      }],
      qd = [{
        value: "toggle",
        labelKey: "controller:settingsSneakToggle"
      }, {
        value: "hold",
        labelKey: "controller:settingsSneakHold"
      }],
      Bd = [{
        value: "default",
        labelKey: "controller:settingsButtonRepeatDefault"
      }, {
        value: "slow",
        labelKey: "controller:settingsButtonRepeatSlow"
      }, {
        value: "off",
        labelKey: "controller:settingsButtonRepeatOff"
      }],
      sd = [{
        value: "short",
        labelKey: "controller:settingsTapHoldShort"
      }, {
        value: "medium",
        labelKey: "controller:settingsTapHoldMedium"
      }, {
        value: "long",
        labelKey: "controller:settingsTapHoldLong"
      }],
      ad = [{
        value: "hold",
        labelKey: "controller:settingsAttackHold"
      }, {
        value: "toggle",
        labelKey: "controller:settingsAttackToggle"
      }],
      Md = {
        southpaw: "controller:settingsLayoutSouthpaw",
        triggersSwapped: "controller:settingsLayoutTriggersSwapped"
      },
      Fd = {
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
      Yd = {
        gameplay: "controller:settingsGroupGameplay",
        menu: "controller:settingsGroupMenus",
        inventory: "controller:settingsGroupInventory",
        keyboard: "controller:settingsGroupKeyboard"
      },
      md = [{
        kind: "fixed",
        stick: "move",
        labelKey: "controller:settingsActionMove"
      }, {
        kind: "fixed",
        stick: "look",
        labelKey: "controller:settingsActionLook"
      }],
      bd = pd.d.map((dd => {
        let {
          group: Jd,
          actions: kd
        } = dd;
        const pd = kd.map((dd => ({
          kind: "action",
          action: dd
        })));
        return {
          titleKey: Yd[Jd],
          rows: "gameplay" === Jd ? [...md, ...pd] : pd
        }
      })),
      Sd = Nd.W.filter((dd => "Home" !== dd)),
      jd = 1e4;
    class Xd {
      constructor(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
        this.cancelButton = dd, this.openButton = Jd, this.accepts = kd, this.startMs = null, this.ignoredUntilMs = new Map, this.cancelDownAtMs = null
      }
      update(dd, Jd) {
        var kd;
        this.updateIgnored(dd, Jd);
        const pd = Jd - (null !== (kd = this.startMs) && void 0 !== kd ? kd : Jd) >= 250;
        for (const Nd of Sd)
          if (Nd !== this.cancelButton && pd && !this.ignoredUntilMs.has(Nd) && dd.wasPressed(Nd) && this.accepts(Nd)) return {
            kind: "bind",
            button: Nd
          };
        if (this.ignoredUntilMs.has(this.cancelButton)) return null;
        if (dd.wasPressed(this.cancelButton)) {
          if (!this.accepts(this.cancelButton)) return {
            kind: "cancel"
          };
          this.cancelDownAtMs = Jd
        }
        return null === this.cancelDownAtMs ? null : dd.isHeld(this.cancelButton) && Jd - this.cancelDownAtMs >= 700 ? (this.cancelDownAtMs = null, {
          kind: "bind",
          button: this.cancelButton
        }) : dd.wasReleased(this.cancelButton) ? (this.cancelDownAtMs = null, {
          kind: "cancel"
        }) : null
      }
      getBindHoldProgress(dd) {
        return null === this.cancelDownAtMs ? 0 : Math.min(1, (dd - this.cancelDownAtMs) / 700)
      }
      updateIgnored(dd, Jd) {
        if (null === this.startMs) {
          this.startMs = Jd;
          for (const Jd of Sd) dd.isDown(Jd) && this.ignoredUntilMs.set(Jd, 1 / 0);
          this.openButton && !this.ignoredUntilMs.has(this.openButton) && this.ignoredUntilMs.set(this.openButton, Jd + 250)
        }
        for (const [kd, pd] of this.ignoredUntilMs) {
          const Nd = dd.isDown(kd);
          pd === 1 / 0 ? Nd || kd !== this.openButton ? Nd || this.ignoredUntilMs.delete(kd) : this.ignoredUntilMs.set(kd, Jd + 250) : Jd >= pd ? this.ignoredUntilMs.delete(kd) : Nd && this.ignoredUntilMs.set(kd, 1 / 0)
        }
      }
    }
    const fd = 6e3;
    class nd {
      constructor() {
        this.downAtMs = null, this.pressesAtMs = []
      }
      update(dd, Jd) {
        let {
          pressed: kd,
          EC: pd
        } = dd;
        if (kd) {
          const dd = this.pressesAtMs.at(-1);
          if (this.pressesAtMs = void 0 !== dd && Jd - dd < 1500 ? [...this.pressesAtMs, Jd] : [Jd], this.pressesAtMs.length >= 3) return 1
        }
        return pd ? (this.downAtMs ??= Jd, Math.min(1, (Jd - this.downAtMs) / 1500)) : (this.downAtMs = null, 0)
      }
    }
  },
  4907: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Wd,
      e: () => Pd
    });
    var pd = kd(56);
    const Nd = new WeakMap,
      Wd = dd => {
        var Jd;
        const kd = dd.closest("[data-pad-slider]");
        return kd && null !== (Jd = Nd.get(kd)) && void 0 !== Jd ? Jd : null
      },
      Pd = (dd, Jd) => {
        const kd = (0, pd.useRef)(Jd);
        kd.current = Jd, (0, pd.useEffect)((() => {
          if (dd.current) return ((dd, Jd) => (Nd.set(dd, Jd), () => {
            Nd.get(dd) === Jd && Nd.delete(dd)
          }))(dd.current, {
            adjust: dd => {
              kd.current.adjust(dd)
            },
            setFraction: dd => {
              kd.current.setFraction(dd)
            },
            endDrag: () => {
              kd.current.endDrag()
            }
          })
        }), [dd])
      }
  },
  8623: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Wd,
      h: () => Nd
    });
    var pd = kd(29);
    const Nd = "localBlockBroken";

    function Wd() {
      return {
        onPlayerChangeBlock(dd, Jd, kd, Wd, Pd, Zd) {
          "Air" === Zd && pd.j.nO(Nd)
        }
      }
    }
  },
  8096: (dd, Jd, kd) => {
    var pd = {
      "./nintendo/A.svg": 8104,
      "./nintendo/B.svg": 8108,
      "./nintendo/Down.svg": 8112,
      "./nintendo/Home.svg": 8116,
      "./nintendo/LB.svg": 8123,
      "./nintendo/LS.svg": 8128,
      "./nintendo/LT.svg": 8131,
      "./nintendo/Left.svg": 8133,
      "./nintendo/LeftStick.svg": 8136,
      "./nintendo/Menu.svg": 8141,
      "./nintendo/RB.svg": 8148,
      "./nintendo/RS.svg": 8157,
      "./nintendo/RT.svg": 8161,
      "./nintendo/Right.svg": 8167,
      "./nintendo/RightStick.svg": 8175,
      "./nintendo/Up.svg": 8182,
      "./nintendo/View.svg": 8189,
      "./nintendo/X.svg": 8196,
      "./nintendo/Y.svg": 8199,
      "./playstation/A.svg": 8203,
      "./playstation/B.svg": 8208,
      "./playstation/Down.svg": 8213,
      "./playstation/Home.svg": 8219,
      "./playstation/LB.svg": 8222,
      "./playstation/LS.svg": 8224,
      "./playstation/LT.svg": 8230,
      "./playstation/Left.svg": 8235,
      "./playstation/LeftStick.svg": 8237,
      "./playstation/Menu.svg": 8242,
      "./playstation/RB.svg": 8250,
      "./playstation/RS.svg": 8258,
      "./playstation/RT.svg": 8263,
      "./playstation/Right.svg": 8269,
      "./playstation/RightStick.svg": 8277,
      "./playstation/Up.svg": 8283,
      "./playstation/View.svg": 8289,
      "./playstation/X.svg": 8296,
      "./playstation/Y.svg": 8299,
      "./steamdeck/A.svg": 8308,
      "./steamdeck/B.svg": 8314,
      "./steamdeck/Down.svg": 8320,
      "./steamdeck/Home.svg": 8324,
      "./steamdeck/LB.svg": 8332,
      "./steamdeck/LS.svg": 8340,
      "./steamdeck/LT.svg": 8349,
      "./steamdeck/Left.svg": 8353,
      "./steamdeck/LeftStick.svg": 8359,
      "./steamdeck/Menu.svg": 8363,
      "./steamdeck/RB.svg": 8372,
      "./steamdeck/RS.svg": 8377,
      "./steamdeck/RT.svg": 8384,
      "./steamdeck/Right.svg": 8389,
      "./steamdeck/RightStick.svg": 8392,
      "./steamdeck/Up.svg": 8399,
      "./steamdeck/View.svg": 8402,
      "./steamdeck/X.svg": 8407,
      "./steamdeck/Y.svg": 8414,
      "./xbox/A.svg": 8422,
      "./xbox/B.svg": 8425,
      "./xbox/Down.svg": 8432,
      "./xbox/Home.svg": 8440,
      "./xbox/LB.svg": 8442,
      "./xbox/LS.svg": 8449,
      "./xbox/LT.svg": 8458,
      "./xbox/Left.svg": 8463,
      "./xbox/LeftStick.svg": 8467,
      "./xbox/Menu.svg": 8472,
      "./xbox/RB.svg": 8481,
      "./xbox/RS.svg": 8488,
      "./xbox/RT.svg": 8494,
      "./xbox/Right.svg": 8501,
      "./xbox/RightStick.svg": 8509,
      "./xbox/Up.svg": 8516,
      "./xbox/View.svg": 8525,
      "./xbox/X.svg": 8530,
      "./xbox/Y.svg": 8537
    };

    function Nd(dd) {
      var Jd = Wd(dd);
      return kd(Jd)
    }

    function Wd(dd) {
      if (!kd.o(pd, dd)) {
        var Jd = new Error("Cannot find module '" + dd + "'");
        throw Jd.code = "MODULE_NOT_FOUND", Jd
      }
      return pd[dd]
    }
    Nd.keys = function() {
      return Object.keys(pd)
    }, Nd.resolve = Wd, dd.exports = Nd, Nd.id = 8096
  },
  8104: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/A.926fb88933484dfbde14.svg"
  },
  8108: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/B.9f5ec099f78f84e44427.svg"
  },
  8112: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  8116: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  8123: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/LB.3a20b15927b55d5d8b60.svg"
  },
  8128: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  8131: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/LT.9fdc5e69011b9d41f50a.svg"
  },
  8133: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  8136: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8141: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Menu.c903a662eb685211e52e.svg"
  },
  8148: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/RB.bba470ddb76ceec5d168.svg"
  },
  8157: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  8161: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/RT.e5a9fbcc3c79550111ca.svg"
  },
  8167: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  8175: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8182: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  8189: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/View.0c9378b5d720a636d50d.svg"
  },
  8196: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/X.c9377519af94e6dce1d7.svg"
  },
  8199: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Y.62d8c17731dd2e172426.svg"
  },
  8203: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/A.958a6de9474f8d0c9caf.svg"
  },
  8208: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/B.d05958bfa88a1162b47a.svg"
  },
  8213: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Down.db68fb3980768eb54671.svg"
  },
  8219: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  8222: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/LB.37a3c5128c958ec2a0c2.svg"
  },
  8224: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/LS.15b0cc5bf3f2fe7bbd8b.svg"
  },
  8230: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/LT.5412ae5222c69f8c833f.svg"
  },
  8235: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Left.4457b2895ce94a5df32e.svg"
  },
  8237: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8242: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Menu.1e8427f8133c9d456c53.svg"
  },
  8250: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/RB.c96c4aa2590209e930c7.svg"
  },
  8258: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/RS.8d70d147cf1ab136e845.svg"
  },
  8263: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/RT.1e4691bb5a7c049693df.svg"
  },
  8269: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Right.a1e101413040c540b879.svg"
  },
  8277: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8283: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Up.7544a65ad4f611a55775.svg"
  },
  8289: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/View.003cae39de89cae0b9d8.svg"
  },
  8296: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/X.d88b6e62dd8fb4bda32a.svg"
  },
  8299: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Y.428d3e70775877892f82.svg"
  },
  8308: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  8314: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  8320: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  8324: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Home.ea8b009cfa9562aa644e.svg"
  },
  8332: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/LB.f283d355d22fc107d6d6.svg"
  },
  8340: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  8349: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/LT.13e66c122e7ee04bb876.svg"
  },
  8353: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  8359: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8363: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Menu.90fc4e918900eb5062a0.svg"
  },
  8372: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/RB.918a7f16dc054d96b6f3.svg"
  },
  8377: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  8384: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/RT.a0523211130959598bed.svg"
  },
  8389: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  8392: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8399: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  8402: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/View.0bc952e292c28c3baac2.svg"
  },
  8407: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  8414: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  },
  8422: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  8425: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  8432: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  8440: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Home.8898f76b20962fe52ab7.svg"
  },
  8442: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/LB.689ba3703ae248f2e4cc.svg"
  },
  8449: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  8458: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/LT.9c2d10d335ab5c590525.svg"
  },
  8463: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  8467: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8472: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Menu.9e485791ea97009871ca.svg"
  },
  8481: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/RB.7ee5ce48dd551f993f80.svg"
  },
  8488: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  8494: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/RT.903ecadc55a9e9e00f07.svg"
  },
  8501: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  8509: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8516: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  8525: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/View.3c5eeb34f0413bde4a65.svg"
  },
  8530: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  8537: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);