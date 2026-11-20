export const id = 28;
export const ids = [28];
export const modules = {
  4782: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Su,
      f: () => Hu,
      g: () => pu,
      i: () => ju
    });
    var Eu = yu(64),
      Ku = yu(4785),
      Qu = yu(4139),
      mu = yu(1325),
      Ju = yu(4811),
      Nu = yu(1035),
      Xu = yu.n(Nu),
      Vu = yu(1311),
      ru = yu(1661),
      Bu = yu(4818),
      xu = yu(1079);

    function Su(uu) {
      let {
        label: Ru,
        onClick: yu,
        checked: Eu,
        circleInfoText: Ku,
        className: Ju,
        disabled: Nu,
        note: Vu
      } = uu;
      return (0, xu.jsxs)("div", {
        "aria-disabled": Nu || void 0,
        "data-pad-focusable": !0,
        className: Xu()("SettingBox CheckboxContainer", {
          [Ju]: Ju,
          SettingBoxDisabled: Nu
        }),
        onClick: () => {
          Nu || yu(!Eu)
        },
        children: [(0, xu.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, xu.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, xu.jsx)(Qu.b, {
              className: "SettingsCheckbox",
              checked: Eu,
              disabled: Nu,
              onChange: () => {}
            })
          }), (0, xu.jsxs)("div", {
            className: "CheckboxText",
            children: [Ru, Ku && (0, xu.jsx)("span", {
              onClick: uu => uu.stopPropagation(),
              children: (0, xu.jsx)(mu.e, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: Ku
              })
            })]
          })]
        }), Vu && (0, xu.jsx)("div", {
          className: "SettingNote",
          children: Vu
        })]
      })
    }

    function pu(uu) {
      let {
        name: Ru,
        onChange: yu,
        min: Ku,
        max: Qu,
        step: Ju,
        initValue: Nu,
        circleInfoText: Vu,
        format: ru,
        className: Bu,
        padStep: Su,
        disabled: pu = !1,
        selectableMax: Tu,
        cappedNote: ju,
        onChangeComplete: Hu
      } = uu;
      const [du, bu] = (0, Eu.useState)(Nu), Cu = (0, Eu.useRef)(Nu);
      (0, Eu.useEffect)((() => {
        Cu.current = Nu, bu(Nu)
      }), [Nu]);
      const ku = void 0 !== Tu && Tu < Qu,
        eu = ku ? {
          "--slider-selectable": (Tu - Ku) / (Qu - Ku)
        } : void 0;
      return (0, xu.jsxs)("div", {
        className: Xu()("SettingBox SettingsSliderDiv", {
          [Bu]: Bu,
          SettingBoxDisabled: pu,
          SliderCapped: ku
        }),
        style: eu,
        children: [(0, xu.jsxs)("div", {
          className: "SliderText",
          children: [`${Ru}: ${ru?ru(du):du}`, Vu && (0, xu.jsx)(mu.e, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: Vu
          })]
        }), (0, xu.jsx)("div", {
          className: "SliderDiv",
          children: (0, xu.jsx)(Wu, {
            value: du,
            min: Ku,
            max: Qu,
            step: Ju,
            onChange: uu => {
              if (ku && uu >= Tu && du === Tu) return;
              const Ru = ku ? Math.min(uu, Tu) : uu;
              Cu.current = Ru, bu(Ru), yu(Ru)
            },
            onChangeComplete: Hu && (() => {
              Hu(Cu.current)
            }),
            format: ru,
            padStep: Su,
            disabled: pu
          })
        }), ku && ju && (0, xu.jsx)("div", {
          className: "SettingNote",
          children: ju
        })]
      })
    }
    const Tu = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function Wu(uu) {
      var Ru;
      let {
        value: yu,
        min: Qu,
        max: mu,
        step: Ju,
        onChange: Nu,
        orientation: Xu,
        reverse: Vu,
        setIsChanging: ru,
        tooltip: Su,
        labels: pu,
        handleLabel: Wu,
        format: ju,
        onChangeStart: Hu,
        onChangeComplete: du,
        padStep: bu,
        disabled: Cu = !1
      } = uu;
      const ku = (0, Eu.useRef)(null),
        eu = (0, Eu.useRef)(null);
      (0, Eu.useLayoutEffect)((() => {
        var uu, Ru, yu;
        const Eu = null !== (uu = null === (Ru = ku.current) || void 0 === Ru ? void 0 : Ru.querySelector(".rangeslider")) && void 0 !== uu ? uu : null;
        null === Eu || void 0 === Eu || Eu.setAttribute("data-pad-slider", ""), null === Eu || void 0 === Eu || Eu.setAttribute("data-pad-focusable", ""), null === Eu || void 0 === Eu || null === (yu = Eu.querySelector(".rangeslider__handle")) || void 0 === yu || yu.setAttribute("data-pad-slider-handle", ""), eu.current = Eu
      }), []), (0, Eu.useLayoutEffect)((() => {
        var uu, Ru;
        Cu ? null === (uu = eu.current) || void 0 === uu || uu.setAttribute("aria-disabled", "true") : null === (Ru = eu.current) || void 0 === Ru || Ru.removeAttribute("aria-disabled")
      }), [Cu]);
      const Au = (null !== (Ru = String(Ju).split(".")[1]) && void 0 !== Ru ? Ru : "").length,
        Du = uu => {
          const Ru = Number((Math.round((uu - Qu) / Ju) * Ju + Qu).toFixed(Au));
          return Math.min(mu, Math.max(Qu, Ru))
        },
        Mu = (0, Eu.useRef)(du);
      Mu.current = du, (0, Eu.useEffect)((() => {
        const uu = ku.current;
        if (!uu) return;
        const Ru = uu => {
          var Ru;
          Tu.has(uu.key) && (null === (Ru = Mu.current) || void 0 === Ru || Ru.call(Mu))
        };
        return uu.addEventListener("keyup", Ru), () => {
          uu.removeEventListener("keyup", Ru)
        }
      }), []);
      const Iu = (0, Eu.useRef)(!1);
      return (0, Bu.g)(eu, {
        adjust: uu => {
          if (Cu) return;
          const Ru = null !== bu && void 0 !== bu ? bu : Math.max(Ju, Math.round((mu - Qu) / 20 / Ju) * Ju),
            Eu = Du(yu + uu * Ru * (Vu ? -1 : 1));
          Eu !== yu && (null === Hu || void 0 === Hu || Hu(), Nu(Eu), null === du || void 0 === du || du())
        },
        setFraction: uu => {
          if (Cu) return;
          const Ru = Du(Qu + (Vu ? 1 - uu : uu) * (mu - Qu));
          Ru !== yu && (Iu.current || (Iu.current = !0, null === Hu || void 0 === Hu || Hu()), Nu(Ru))
        },
        endDrag: () => {
          Iu.current && (Iu.current = !1, null === du || void 0 === du || du())
        }
      }), (0, xu.jsx)("div", {
        ref: ku,
        style: {
          display: "contents"
        },
        children: (0, xu.jsx)(Ku.d, {
          value: yu,
          min: Qu,
          max: mu,
          step: Ju,
          onChange: Nu,
          orientation: Xu,
          reverse: Vu,
          tooltip: Su,
          labels: pu,
          handleLabel: Wu,
          format: ju,
          onChangeStart: () => {
            null === Hu || void 0 === Hu || Hu(), null === ru || void 0 === ru || ru(!0)
          },
          onChangeComplete: () => {
            null === ru || void 0 === ru || ru(!1), null === du || void 0 === du || du()
          }
        })
      })
    }
    async function ju() {
      let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
      const Ru = Vu.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: "",
        unlockPointerKey: uu
      });
      !0 === await Ru.getResult() && (0, ru.reloadBloxd)()
    }

    function Hu(uu) {
      let {
        label: Ru,
        options: yu,
        value: Eu,
        onChange: Ku,
        circleInfoText: Qu
      } = uu;
      return (0, xu.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, xu.jsxs)("div", {
          className: "SliderText",
          children: [Ru, Qu && (0, xu.jsx)(mu.e, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: Qu
          })]
        }), (0, xu.jsx)(Ju.b, {
          ariaLabel: Ru,
          options: yu,
          value: Eu,
          onChange: Ku
        })]
      })
    }
  },
  4811: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => mu
    });
    var Eu = yu(1035),
      Ku = yu.n(Eu),
      Qu = yu(1079);

    function mu(uu) {
      let {
        options: Ru,
        value: yu,
        onChange: Eu,
        ariaLabel: mu,
        className: Ju,
        reselectable: Nu = !1,
        keepsFocus: Xu = !1
      } = uu;
      return (0, Qu.jsx)("div", {
        className: Ku()("SegmentedToggle", Ju),
        role: "group",
        "aria-label": mu,
        children: Ru.map((uu => {
          const Ru = uu.value === yu;
          return (0, Qu.jsx)("button", {
            type: "button",
            "aria-pressed": Ru,
            "aria-label": uu.ariaLabel,
            title: uu.ariaLabel,
            className: Ku()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: Ru
            }),
            onMouseDown: Xu ? uu => {
              uu.preventDefault()
            } : void 0,
            onClick: () => {
              Ru && !Nu || Eu(uu.value)
            },
            children: uu.label
          }, uu.value)
        }))
      })
    }
  },
  7915: (uu, Ru, yu) => {
    yu.d(Ru, {
      B: () => Su,
      e: () => Ku,
      h: () => Qu,
      k: () => Bu,
      m: () => ru,
      p: () => Xu,
      r: () => Ju,
      v: () => Eu,
      x: () => xu
    });
    const Eu = ["menuConfirm", "menuBack", "menuTabPrevious", "menuTabNext", "menuPageUp", "menuPageDown", "menuSecondary", "menuToggleCursor"],
      Ku = [{
        group: "gameplay",
        actions: ["jump", "sneak", "sneakToggle", "sprint", "attack", "use", "hotbarPrevious", "hotbarNext", "inventory", "actionButton", "perspective", "pickBlock", "drop", "emoteWheel", "chat", "pause", "leaderboard"]
      }, {
        group: "menu",
        actions: Eu
      }, {
        group: "inventory",
        actions: ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryClose", "inventoryPanelPrevious", "inventoryPanelNext", "inventoryDrop", "inventoryHotbarSwap"]
      }, {
        group: "keyboard",
        actions: ["keyboardType", "keyboardBackspace", "keyboardSpace", "keyboardCaretLeft", "keyboardCaretRight", "keyboardShift", "keyboardSymbols", "keyboardSubmit", "keyboardClose", "keyboardChannel"]
      }],
      Qu = {
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
      mu = ["pickBlock", "perspective"],
      Ju = uu => mu.includes(uu) ? mu : [uu],
      Nu = Object.fromEntries(Ku.flatMap((uu => {
        let {
          group: Ru,
          actions: yu
        } = uu;
        return yu.map((uu => [uu, Ru]))
      }))),
      Xu = uu => Nu[uu],
      Vu = {
        pause: ["menu"],
        leaderboard: ["menu"],
        inventory: ["menu"],
        menuPageUp: ["inventory"],
        menuPageDown: ["inventory"]
      },
      ru = uu => {
        var Ru;
        return [Xu(uu), ...null !== (Ru = Vu[uu]) && void 0 !== Ru ? Ru : []]
      },
      Bu = new Set(["menu", "inventory", "keyboard"]),
      xu = {
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
      Su = new Set(["forward", "backward", "left", "right"])
  },
  7912: (uu, Ru, yu) => {
    yu.d(Ru, {
      C: () => Du,
      D: () => Vu,
      F: () => Au,
      H: () => Gu,
      e: () => ju,
      f: () => bu,
      j: () => Bu,
      m: () => xu,
      o: () => nu,
      r: () => Iu,
      s: () => Mu,
      t: () => du,
      u: () => Uu,
      w: () => eu,
      y: () => Hu
    });
    var Eu = yu(7915),
      Ku = yu(7920),
      Qu = yu(7901),
      mu = yu(7935);
    const Ju = uu => "pickBlock" === uu ? "perspective" : uu,
      Nu = (uu, Ru) => {
        var yu;
        const Ku = Ju(Ru);
        return null !== (yu = uu[Ku]) && void 0 !== yu ? yu : Eu.h[Ku]
      },
      Xu = new Map([
        ["menuConfirm", "menuBack"],
        ["inventoryPrimary", "inventoryClose"],
        ["keyboardType", "keyboardClose"]
      ].flatMap((uu => {
        let [Ru, yu] = uu;
        return [
          [Ru, yu],
          [yu, Ru]
        ]
      }))),
      Vu = (uu, Ru) => null !== uu && void 0 !== uu ? uu : "nintendo" === Ru,
      ru = uu => Vu((0, Ku.g)().swapConfirmBack, (0, Ku.h)()) && Xu.get(uu) || uu,
      Bu = uu => Nu((0, Ku.g)().bindings, ru(uu)),
      xu = uu => Eu.h[ru(uu)],
      Su = Object.keys(Eu.h),
      pu = uu => "gameplay" === (0, Eu.p)(uu) ? ["gameplay"] : (0, Eu.m)(uu),
      Tu = (uu, Ru) => {
        const yu = pu(Ru);
        return pu(uu).some((uu => yu.includes(uu)))
      },
      Wu = (uu, Ru, yu) => {
        const Ku = Nu(uu, Ru),
          mu = new Set((0, Eu.r)(Ru)),
          Xu = [...mu];
        for (let Eu = Xu.pop(); Eu; Eu = Xu.pop())
          for (const Ru of Su) {
            const Qu = Nu(uu, Ru);
            mu.has(Ru) || Qu !== yu && Qu !== Ku || !Tu(Eu, Ru) || (mu.add(Ru), Xu.push(Ru))
          }
        const Vu = {
          ...uu
        };
        for (const ru of mu) {
          const Ru = Nu(uu, ru) === Ku ? yu : Ku,
            mu = (0, Eu.m)(ru).some((uu => Eu.k.has(uu)));
          if ((0, Qu.J)(Ru) && mu) return null;
          Vu[Ju(ru)] = Ru
        }
        for (const Qu of Object.keys(Vu)) Vu[Qu] === Eu.h[Qu] && delete Vu[Qu];
        return Vu
      },
      ju = (uu, Ru) => null !== Wu((0, Ku.g)().bindings, ru(uu), Ru),
      Hu = (uu, Ru) => {
        if (Bu(uu) === Ru) return !0;
        const yu = Wu((0, Ku.g)().bindings, ru(uu), Ru);
        return !!yu && ((0, Ku.l)({
          bindings: yu
        }), !0)
      },
      du = (uu, Ru) => {
        const yu = (0, Eu.r)(Ru);
        return Su.filter((Ru => Ju(Ru) === Ru && !yu.includes(Ru) && Nu(uu, ru(Ru)) !== Bu(Ru)))
      },
      bu = ["southpaw", "triggersSwapped"],
      Cu = {
        southpaw: {
          sprint: "RS",
          sneakToggle: "LS"
        },
        triggersSwapped: {
          attack: "LT",
          use: "RT"
        }
      },
      ku = uu => Object.keys(Cu[uu]),
      eu = (uu, Ru) => "southpaw" === uu ? Ru.swapSticks : ku(uu).every((yu => Nu(Ru.bindings, yu) === Cu[uu][yu])),
      Au = (uu, Ru) => {
        const yu = (0, Ku.g)();
        let Qu = yu.bindings;
        for (const Ku of ku(uu)) {
          const yu = Ru ? Cu[uu][Ku] : Eu.h[Ku];
          if (Qu = Wu(Qu, Ku, yu), !Qu) return !1
        }
        return (0, Ku.l)({
          swapSticks: "southpaw" === uu ? Ru : yu.swapSticks,
          bindings: Qu
        }), !0
      },
      Du = () => {
        (0, Ku.l)({
          swapSticks: !1,
          bindings: {}
        })
      },
      Mu = () => (0, Ku.g)().swapSticks ? "RightStick" : "LeftStick",
      Iu = () => (0, Ku.g)().swapSticks ? "LeftStick" : "RightStick",
      Gu = uu => (0, Ku.g)().swapSticks && (0, Qu.J)(uu),
      Uu = uu => Gu(uu) ? Mu() : Iu(),
      nu = uu => {
        if (Eu.B.has(uu)) return Mu();
        const Ru = Eu.x[uu];
        return Ru && ("leaderboard" !== Ru || (0, mu.f)(uu, (0, mu.c)())) ? Bu(Ru) : null
      }
  },
  7891: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      ControllerCategory: () => XN,
      ControllerGlyph: () => xQ,
      ControllerRoot: () => XJ,
      PadLobbyShortcuts: () => AJ,
      PadSneakChip: () => TJ,
      PadTooltip: () => jJ,
      attachPressToContinue: () => tJ,
      getBoundButton: () => Vu.j,
      getControllerSettings: () => Bu.g,
      getGlyphForNoaAction: () => Vu.o,
      getInventoryCursorState: () => rN,
      getMenuShortcutButton: () => lE,
      getPadGlyphIconName: () => xJ,
      getPadGlyphIconUrl: () => SJ,
      getPadRepeatTiming: () => pu.i,
      handOverPadFocus: () => xN,
      hasActivePad: () => VN,
      isPadSteppingSlots: () => BN
    });
    const Eu = JSON.parse('{"controller":{"inventoryTake":"Take","inventoryTakeHalf":"Take half","inventoryPlace":"Place","inventoryPlaceOne":"Place one","inventoryQuickMove":"Quick move","inventoryToHotbar":"To hotbar","inventoryPutBack":"Put back","inventoryHotbarSwap":"Swap with hotbar","inventorySwapHere":"Swap here","inventoryCancel":"Cancel","inventoryClose":"Close","inventoryDrop":"Drop (hold: stack)","inventorySelect":"Select","inventoryCraft":"Craft (hold to repeat)","inventoryCraftAll":"Craft all","inventoryChooseRecipe":"Choose","inventoryBackToRecipes":"Back to recipes","inventoryType":"Type","inventoryPanels":"Switch panel","inventoryCategory":"Category","inventoryPage":"Page","disconnected":"Controller disconnected","gameplayReload":"Reload","gameplayActionWheelHint":"(hold for more)","gameplaySneaking":"Sneaking","gameplayLoadFailedTitle":"Controller unavailable","gameplayLoadFailedSubtitle":"Reload the page to play with your controller.","gameplayDropStack":"Keep holding to drop the stack","gameplayAttackLatched":"Attacking","gameplayPickBlock":"Pick block","padButtonView":"View","padButtonMenu":"Menu","padButtonHome":"Home","padButtonCreate":"Create","padButtonOptions":"Options","padButtonDpadUp":"D-pad \u2191","padButtonDpadDown":"D-pad \u2193","padButtonDpadLeft":"D-pad \u2190","padButtonDpadRight":"D-pad \u2192","padButtonLeftStick":"L Stick","padButtonRightStick":"R Stick","settingsLook":"Look","settingsLookSensitivityX":"Look sensitivity (horizontal)","settingsLookSensitivityY":"Look sensitivity (vertical)","settingsAimLookSensitivity":"Look sensitivity while aiming (use held)","settingsInvertLookX":"Invert horizontal look","settingsInvertLookY":"Invert vertical look","settingsLookCurve":"Look curve","settingsLookCurveHint":"Steep gives finer aim near the centre, Linear turns at an even rate, and Boost turns faster when you hold the stick all the way.","settingsCurveExponential":"Steep","settingsCurveLinear":"Linear","settingsCurveBoost":"Boost","settingsLookDeadzone":"Look deadzone","settingsGyro":"Gyro aiming","settingsGyroToggle":"Aim by moving the controller","settingsGyroToggleInfo":"Turn and tilt the controller to aim, on top of the right stick.","settingsGyroTogglePhone":"Aim by moving your phone or tablet","settingsGyroToggleInfoPhone":"Turn and tilt your phone or tablet to aim, on top of the right stick.","settingsGyroUnsupported":"Gyro aiming needs Chrome or Edge.","settingsGyroBlocked":"Gyro aiming isn\'t available on this site.","settingsGyroPhoneNeedsController":"Connect a controller to aim by moving your phone or tablet.","settingsGyroSteamHint":"If Steam already turns your gyro into mouse movement, leave this off.","settingsGyroConnect":"Connect motion controller","settingsGyroConnectHint":"Works with DualSense, DualShock 4 and Switch controllers.","settingsGyroConnectNeedsClick":"Click Connect with your mouse: the browser asks before sharing a controller.","settingsGyroOpenFailed":"Another app is using the controller. Close apps such as Steam or DS4Windows, then try again.","settingsGyroConnected":"Aiming with {{name}}.","settingsGyroAllowMotion":"Allow motion sensor","settingsGyroAllowNeedsTap":"Tap Allow motion sensor on your screen to turn it on.","settingsGyroPhoneOn":"Aiming with this device\'s motion sensor.","settingsGyroPhoneWaiting":"Waiting for this device\'s motion sensor\u2026","settingsGyroPhoneNoSensor":"No motion sensor found on this device.","settingsGyroPhoneDenied":"Motion access is blocked. Allow it in your browser settings.","settingsGyroSensitivity":"Gyro sensitivity","settingsGyroActivation":"Gyro turns on","settingsGyroAlways":"Always","settingsGyroWhileAiming":"While aiming","settingsGyroWhileButton":"While holding a button","settingsGyroAimingHint":"Hold {{button}} to aim with motion.","settingsGyroButton":"Gyro button","settingsGyroButtonHint":"While gyro aiming is on, this button only turns the gyro on in game, so pick one you rarely use.","settingsMovement":"Movement","settingsMoveDeadzone":"Move deadzone","settingsAutoSprint":"Sprint at full tilt","settingsAutoSprintInfo":"Push the movement stick all the way to sprint.","settingsSneak":"Sneak","settingsSneakHold":"Hold","settingsSneakToggle":"Toggle","settingsButtons":"Buttons","settingsPromptFamily":"Button prompts","settingsPromptAuto":"Match my controller","settingsPromptXbox":"Xbox","settingsPromptPlayStation":"PlayStation","settingsPromptNintendo":"Nintendo","settingsPromptSteamDeck":"Steam Deck","settingsPromptGeneric":"Generic","settingsHideButtonHints":"Hide button hints","settingsVibration":"Vibration","settingsCursorSpeed":"Virtual cursor speed","settingsCursorMagnetism":"Cursor snaps onto buttons","settingsMenuBackToCategories":"Back returns to the category list first","settingsAccessibility":"Accessibility","settingsSwapConfirmBack":"Swap confirm and back","settingsSwapToast":"Select and Back have swapped buttons.","settingsLayoutRefusedToast":"This layout doesn\'t fit your current buttons. Reset them to use it.","settingsSwapConfirmBackInfo":"Select with the right face button and go back with the bottom one, in menus, the inventory and the on-screen keyboard. On by default for Nintendo controllers.","settingsButtonRepeat":"Button repeat","settingsButtonRepeatHint":"How a held button repeats in menus, sliders, the on-screen keyboard and crafting. Off acts once per press, and holding drop in game drops just one item.","settingsButtonRepeatDefault":"Default","settingsButtonRepeatSlow":"Slow (0.8 s, then 4 a second)","settingsButtonRepeatOff":"Off (once per press)","settingsTapHoldTime":"Tap/hold time","settingsTapHoldTimeHint":"How long to hold the chat, emote or action button to open its wheel, or the view button to change view where a tap picks a block. Dropping a whole stack takes 0.8, 1 or 1.3 s.","settingsTapHoldShort":"Short (0.25 s)","settingsTapHoldMedium":"Medium (0.5 s)","settingsTapHoldLong":"Long (0.8 s)","settingsEmoteButton":"Emote button","settingsEmoteButtonTapHoldHint":"Tap to repeat your last emote, or hold to open the emote wheel.","settingsEmoteButtonWheelHint":"Any press opens the emote wheel, with no hold to time. Pick with the stick, then select.","settingsEmoteButtonTapHold":"Tap repeats, hold opens wheel","settingsEmoteButtonWheel":"Opens the wheel","settingsAttackMode":"Attack / mine","settingsAttackHoldHint":"Hold attack to keep attacking or mining.","settingsAttackToggleHint":"Press attack once to keep attacking or mining, and again to stop.","settingsAttackHold":"Hold","settingsAttackToggle":"Toggle","settingsLargePointer":"Large pointer and focus","settingsLargePointerInfo":"A bigger menu cursor, thicker selection brackets and bigger button hints.","settingsRemap":"Remap buttons","settingsRemapHint":"Select an action, then press a button. If that button is taken, the two swap.","settingsLayoutSouthpaw":"Southpaw (move with the right stick)","settingsLayoutTriggersSwapped":"Triggers swapped (attack with the left trigger)","settingsCapturePrompt":"Press a button","settingsCaptureCancelHint":"Press {{button}} to cancel","settingsCaptureCancelOrBindHint":"Tap {{button}} to cancel, or hold it to choose it","settingsReset":"Reset","settingsSwapNotice":"{{action}} moved to {{button}}","settingsResetAll":"Reset all buttons and sticks","settingsGroupGameplay":"Movement & gameplay","settingsGroupMenus":"Menus","settingsGroupInventory":"Inventory","settingsGroupKeyboard":"On-screen keyboard","settingsActionMove":"Move","settingsActionLook":"Look around","settingsActionJump":"Jump","settingsActionSneak":"Sneak","settingsActionSneakToggle":"Toggle sneak","settingsActionSprint":"Sprint","settingsActionAttack":"Attack / mine","settingsActionUse":"Use / place","settingsActionHotbarPrevious":"Previous hotbar slot","settingsActionHotbarNext":"Next hotbar slot","settingsActionInventory":"Inventory","settingsActionActionButton":"Game action","settingsActionPerspective":"Change view","settingsActionPickBlock":"Pick block (creative)","settingsActionDrop":"Drop item","settingsActionEmoteWheel":"Emotes","settingsActionChat":"Chat","settingsActionPause":"Pause menu","settingsActionLeaderboard":"Shop / leaderboard","settingsActionMenuConfirm":"Select","settingsActionMenuBack":"Back","settingsActionMenuTabPrevious":"Previous tab","settingsActionMenuTabNext":"Next tab","settingsActionMenuPageUp":"Page up","settingsActionMenuPageDown":"Page down","settingsActionMenuSecondary":"Secondary action","settingsActionMenuToggleCursor":"Switch to virtual cursor","settingsActionInventoryPrimary":"Pick up / place","settingsActionInventorySecondary":"Pick up half / place one","settingsActionInventoryQuickMove":"Quick move","settingsActionInventoryHotbarSwap":"Swap with hotbar slot","settingsActionInventoryClose":"Close","settingsActionInventoryPanelPrevious":"Previous panel","settingsActionInventoryPanelNext":"Next panel","settingsActionInventoryDrop":"Drop item","settingsActionKeyboardType":"Type key","settingsActionKeyboardBackspace":"Backspace","settingsActionKeyboardSpace":"Space","settingsActionKeyboardCaretLeft":"Move cursor left","settingsActionKeyboardCaretRight":"Move cursor right","settingsActionKeyboardShift":"Shift","settingsActionKeyboardSymbols":"Accents and symbols","settingsActionKeyboardSubmit":"Send","settingsActionKeyboardClose":"Close keyboard","settingsActionKeyboardChannel":"Chat channel","settingsAlternatives":"Try alternatives","settingsAlternativesHint":"Try each way of playing and keep the one that feels best.","settingsMenuNavigation":"Menu navigation","settingsMenuNavigationHint":"Steer a cursor with the stick and jump between buttons with the D-pad, or use just one.","settingsNavHybrid":"Cursor and D-pad","settingsMenuNavFocus":"Jump between buttons","settingsVirtualCursor":"Virtual cursor","settingsInventoryNavigation":"Inventory","settingsInventoryNavigationHint":"Steer a cursor with the stick and step slot by slot with the D-pad, or use just one.","settingsInventoryNavSlot":"Slot by slot","settingsQuickChat":"Hold chat button","settingsQuickChatHint":"Hold the chat button to pick a quick phrase. Tapping it still opens chat.","settingsQuickChatWheel":"Quick chat wheel","settingsQuickChatOff":"Off","settingsLeaderboardButton":"Shop / leaderboard button","settingsLeaderboardButtonHint":"Open the shop in one press in games that have one. The lobby leaderboard is still in the pause menu.","settingsLeaderboardButtonShop":"Shop, in games with one","settingsLeaderboardButtonLeaderboard":"Always the leaderboard","settingsTester":"Gamepad tester","settingsTesterNoPad":"Connect a gamepad and press any button to test it.","settingsTesterFamily":"Detected: {{family}}","settingsTesterHint":"Start a test to try every button and stick without moving through the menu.","settingsTesterStart":"Start test","settingsTesterStop":"Stop test","settingsTesterTesting":"Press anything to see it light up. To stop, hold {{button}} or press it three times.","settingsControlsNote":"Playing with a gamepad? Change its buttons and feel in Gamepad settings.","settingsOpenController":"Gamepad settings","keyboardSpace":"Space","keyboardSend":"Send","keyboardDone":"Done","keyboardTargetChat":"Chat","keyboardTargetSign":"Sign","keyboardTargetNameTag":"Name tag","keyboardTargetBook":"Book page","keyboardTargetBookTitle":"Book title","keyboardTargetText":"Text","keyboardPhraseGg":"gg","keyboardPhraseHi":"hi","keyboardPhraseThanks":"thanks","keyboardPhraseGl":"gl","keyboardPhraseBrb":"brb","keyboardPhraseYes":"yes","keyboardPhraseNo":"no","keyboardPhraseHelp":"help!","quickChatPick":"Pick a phrase","actionWheelPick":"Pick an action","wheelReleaseToPick":"Release to pick","wheelClose":"Close","wheelChoose":"Choose","menusSelect":"Select","menusBack":"Back","menusClose":"Close","menusQuickChat":"Quick chat (hold)","menusSkipTutorial":"Skip tutorial","menusTabs":"Tabs","menusRows":"Rows","menusCursorMode":"Cursor","menusFocusMode":"Focus","menusClick":"Click","menusRightClick":"Right-click","menusScroll":"Scroll","menusFriends":"Friends","menusSearch":"Search","menusSettings":"Settings","menusLeaveGameTitle":"Leave the game?","menusLeaveGameLeave":"Leave","menusLeaveGameStay":"Stay","menusNotifications":"Notifications","menusLobby":"Lobby","menusShop":"Shop","menusTasks":"Tasks & leaderboards","menusInvite":"Invite friends","menusAdjust":"Adjust","menusFavourite":"Favourite","screensPressToContinue":"Press {{button}} to continue","screensPressToEnterGame":"Press {{button}} to enter game","screensEnterGame":"Enter game","screensBackToGames":"Back to games","tutorialMine":"Mine","tutorialPlace":"Place / Use","tutorialInventory":"Inventory","tutorialPause":"Pause","menusUseMouse":"Use a mouse or touch here"}}');
    var Ku = yu(1170),
      Qu = yu(1362),
      mu = yu(7895),
      Ju = yu(80),
      Nu = yu(27),
      Xu = yu(34),
      Vu = yu(7912),
      ru = yu(7940),
      Bu = yu(7920),
      xu = yu(7949),
      Su = yu(7901),
      pu = yu(8405),
      Tu = yu(8410),
      Wu = yu(1611);
    const ju = (uu, Ru, yu) => Math.max(Ru, Math.min(yu, uu)),
      Hu = uu => Math.min(uu.width, uu.height) / 720,
      du = uu => Math.max(.15, uu);
    class bu {
      constructor() {
        this.locked = !1
      }
      lock() {
        this.locked = !0
      }
      update(uu, Ru) {
        const yu = Math.hypot(uu.x, uu.y) >= (uu => Math.max(.3, uu))(Ru);
        return this.locked ? (this.locked = yu, !1) : yu
      }
    }
    const Cu = (uu, Ru) => {
        const yu = ju(Ru.dtMs, 0, 100),
          Eu = yu / 1e3,
          Ku = Hu(Ru.viewport) * (Ru.cursorSpeedPercent / 100),
          Qu = (0, Su.n)(Ru.stick, du(Ru.moveDeadzone)),
          mu = Math.hypot(Qu.x, Qu.y),
          Ju = ((uu, Ru, yu) => {
            if (Ru < .3) return 0;
            const Eu = yu / 350;
            return Ru >= .85 ? Math.min(1, uu + Eu) : Math.max(0, uu - Eu)
          })(uu.speedRamp, mu, yu);
        let Nu = uu.x,
          Xu = uu.y;
        if (mu > 0) {
          const uu = .45 + .55 * Ju,
            yu = Ru.context.overInteractive ? .45 : 1,
            Vu = 1400 * (uu => {
              const Ru = ju(uu, 0, 1);
              return .3 * Ru + .7 * Ru * Ru
            })(mu) * Ku * uu * yu;
          Nu += Qu.x / mu * Vu * Eu, Xu += Qu.y / mu * Vu * Eu
        }
        const Vu = Math.hypot(Ru.dpad.x, Ru.dpad.y);
        if (Vu > 0) {
          const uu = 500 * Ku;
          Nu += Ru.dpad.x / Vu * uu * Eu, Xu += Ru.dpad.y / Vu * uu * Eu
        }
        const ru = Ru.context.magnetTarget;
        if (ru && mu < .3 && 0 === Vu) {
          const uu = ((uu, Ru, yu, Eu, Ku) => {
            const Qu = Ru.x - uu.x,
              mu = Ru.y - uu.y,
              Ju = Math.hypot(Qu, mu);
            if (0 === Ju) return {
              x: 0,
              y: 0
            };
            const Nu = Math.min(Ju, Ku * (1 - Eu / .3));
            let Xu = Qu / Ju * Nu,
              Vu = mu / Ju * Nu;
            if (Eu > 0) {
              const uu = yu.x / Eu,
                Ru = yu.y / Eu,
                Ku = Xu * uu + Vu * Ru;
              Ku < 0 && (Xu -= Ku * uu, Vu -= Ku * Ru)
            }
            return {
              x: Xu,
              y: Vu
            }
          })({
            x: Nu,
            y: Xu
          }, ru, Qu, mu, 120 * Hu(Ru.viewport) * Eu);
          Nu += uu.x, Xu += uu.y
        }
        return {
          x: ju(Nu, 0, Math.max(0, Ru.viewport.width - 1)),
          y: ju(Xu, 0, Math.max(0, Ru.viewport.height - 1)),
          speedRamp: Ju
        }
      },
      ku = uu => {
        const Ru = (0, Su.n)(uu, .2);
        return 0 !== Ru.x || 0 !== Ru.y
      },
      eu = (uu, Ru) => {
        const yu = (0, Su.n)(uu, .2),
          Eu = Math.hypot(yu.x, yu.y);
        if (0 === Eu) return {
          x: 0,
          y: 0
        };
        const Ku = Eu * Eu * 1600,
          Qu = ju(Ru, 0, 100) / 1e3;
        return {
          x: yu.x / Eu * Ku * Qu,
          y: yu.y / Eu * Ku * Qu
        }
      },
      Au = (uu, Ru) => "y" === Ru ? uu.scrollHeight > uu.clientHeight + 1 : uu.scrollWidth > uu.clientWidth + 1,
      Du = (uu, Ru) => {
        if (!Au(uu, Ru)) return !1;
        const yu = getComputedStyle(uu),
          Eu = "y" === Ru ? yu.overflowY : yu.overflowX;
        return "auto" === Eu || "scroll" === Eu
      },
      Mu = (uu, Ru, yu) => {
        for (let Qu = uu instanceof HTMLElement ? uu : null !== (Eu = null === uu || void 0 === uu ? void 0 : uu.parentElement) && void 0 !== Eu ? Eu : null; Qu; Qu = Qu.parentElement) {
          var Eu;
          if (Du(Qu, Ru)) return Qu;
          if (Qu === yu) return null
        }
        if (yu) return null;
        const Ku = document.scrollingElement;
        return Ku instanceof HTMLElement && Au(Ku, Ru) ? Ku : null
      },
      Iu = new WeakMap,
      Gu = (uu, Ru) => {
        const yu = performance.now(),
          Eu = Iu.get(uu);
        if (Eu && Eu.axis === Ru && yu - Eu.atMs < 500 && (!Eu.container || Eu.container.isConnected)) return Eu.container;
        const Ku = Uu(uu, Ru);
        return Iu.set(uu, {
          axis: Ru,
          atMs: yu,
          container: Ku
        }), Ku
      },
      Uu = (uu, Ru) => {
        let yu = Du(uu, Ru) ? uu : null,
          Eu = yu ? yu.clientWidth * yu.clientHeight : 0;
        for (const Ku of uu.querySelectorAll("*")) {
          const uu = Ku.clientWidth * Ku.clientHeight;
          uu > Eu && Du(Ku, Ru) && (yu = Ku, Eu = uu)
        }
        return yu
      },
      nu = (uu, Ru, yu) => "y" === Ru ? yu < 0 ? uu.scrollTop > 0 : uu.scrollTop + uu.clientHeight < uu.scrollHeight - 1 : yu < 0 ? uu.scrollLeft > 0 : uu.scrollLeft + uu.clientWidth < uu.scrollWidth - 1,
      su = (uu, Ru, yu) => {
        "y" === Ru ? uu.scrollBy({
          top: yu,
          behavior: "instant"
        }) : uu.scrollBy({
          left: yu,
          behavior: "instant"
        })
      },
      tu = uu => {
        if (!uu || uu === document.scrollingElement) return new DOMRect(0, 0, window.innerWidth, window.innerHeight);
        const Ru = uu.getBoundingClientRect(),
          yu = Math.max(0, Ru.left),
          Eu = Math.max(0, Ru.top);
        return new DOMRect(yu, Eu, Math.min(window.innerWidth, Ru.right) - yu, Math.min(window.innerHeight, Ru.bottom) - Eu)
      },
      lu = (uu, Ru) => uu.left < Ru.right && Ru.left < uu.right && uu.top < Ru.bottom && Ru.top < uu.bottom;
    var gu = yu(64),
      cu = yu(1035),
      Lu = yu.n(cu),
      zu = yu(1079);
    let Fu = 0,
      wu = !1;
    class Zu {
      constructor() {
        this.element = null, this.shownKey = "", this.gap = null
      }
      setElement(uu) {
        this.element = uu, this.shownKey = "", this.gap = null
      }
      show(uu) {
        const Ru = this.element;
        if (!Ru) return;
        const yu = uu ? this.keepOnScreen(Ru, uu) : null,
          Eu = yu ? `${yu.left},${yu.top},${yu.width},${yu.height}` : "";
        if (Eu === this.shownKey) return;
        const Ku = "" === this.shownKey;
        this.shownKey = Eu, Ru.classList.toggle("Visible", null !== yu), yu && (Ru.classList.toggle("Snap", Ku), Ru.style.width = `${yu.width}px`, Ru.style.height = `${yu.height}px`, Ru.style.transform = `translate(${yu.left}px, ${yu.top}px)`, Ku && (Ru.offsetWidth, Ru.classList.remove("Snap")))
      }
      hide() {
        this.show(null)
      }
      keepOnScreen(uu, Ru) {
        var yu;
        const Eu = `${window.innerWidth}x${window.innerHeight}@${(()=>{if("undefined"===typeof ResizeObserver)return getComputedStyle(document.documentElement).fontSize;if(!wu){wu=!0;const uu=document.createElement("div");uu.setAttribute("aria-hidden","true"),uu.style.cssText="position: fixed; top: 0; left: 0; width: 1rem; height: 0; visibility: hidden; pointer-events: none",document.body.appendChild(uu),new ResizeObserver((()=>{Fu++})).observe(uu)}return String(Fu)})()}`;
        (null === (yu = this.gap) || void 0 === yu ? void 0 : yu.key) !== Eu && (this.gap = {
          px: parseFloat(getComputedStyle(uu).paddingLeft) || 0,
          key: Eu
        });
        const Ku = this.gap.px + 2,
          Qu = Math.max(Ru.left, Ku),
          mu = Math.max(Ru.top, Ku),
          Ju = Math.min(Ru.left + Ru.width, window.innerWidth - Ku),
          Nu = Math.min(Ru.top + Ru.height, window.innerHeight - Ku);
        return Ju <= Qu || Nu <= mu ? Ru : {
          left: Qu,
          top: mu,
          width: Ju - Qu,
          height: Nu - mu
        }
      }
    }
    const hu = uu => {
      let {
        placer: Ru,
        className: yu
      } = uu;
      const Eu = (0, gu.useCallback)((uu => {
        Ru.setElement(uu)
      }), [Ru]);
      return (0, zu.jsx)("div", {
        ref: Eu,
        className: Lu()("PadReticle", yu),
        "aria-hidden": !0
      })
    };
    var Pu = yu(8418),
      iu = yu(1663);
    const Yu = uu => uu >= 56320 && uu <= 57343,
      ou = uu => uu >= 55296 && uu <= 56319,
      qu = (uu, Ru) => Ru >= 2 && Yu(uu.charCodeAt(Ru - 1)) && ou(uu.charCodeAt(Ru - 2)) ? Ru - 2 : Math.max(0, Ru - 1),
      Ou = (uu, Ru) => {
        let yu;
        var Eu, Ku;
        return yu = uu.start !== uu.end ? Ru < 0 ? uu.start : uu.end : Ru < 0 ? qu(uu.value, uu.start) : (Eu = uu.value, (Ku = uu.start) + 1 < Eu.length && ou(Eu.charCodeAt(Ku)) && Yu(Eu.charCodeAt(Ku + 1)) ? Ku + 2 : Math.min(Eu.length, Ku + 1)), {
          value: uu.value,
          start: yu,
          end: yu
        }
      },
      vu = ["text", "search", "url", "email", "tel", "password", "number"],
      au = uu => !(!(0, iu.c)(uu) || uu.isContentEditable || uu.hasAttribute("data-pad-no-osk")) && (uu instanceof HTMLTextAreaElement || uu instanceof HTMLInputElement && vu.includes(uu.type)),
      fu = uu => null !== uu.selectionStart,
      uR = uu => {
        var Ru, yu;
        const {
          value: Eu
        } = uu;
        return {
          value: Eu,
          start: null !== (Ru = uu.selectionStart) && void 0 !== Ru ? Ru : Eu.length,
          end: null !== (yu = uu.selectionEnd) && void 0 !== yu ? yu : Eu.length
        }
      },
      RR = (uu, Ru, yu) => {
        if (uu.readOnly) return;
        const Eu = uu instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
        Object.getOwnPropertyDescriptor(Eu, "value").set.call(uu, Ru.value), fu(uu) && uu.setSelectionRange(Ru.start, Ru.end), (0, Wu.c)(uu, new InputEvent("input", {
          bubbles: !0,
          inputType: yu
        }))
      };
    let yR = !1;
    const ER = (uu, Ru) => !!document.execCommand(uu, !1, Ru) || (yR || (yR = !0, console.warn(`execCommand("${uu}") failed; the on-screen keyboard is setting the value directly`)), !1),
      KR = (uu, Ru) => {
        ER("insertText", Ru) || RR(uu, function(uu, Ru) {
          let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
          const Eu = uu.value.slice(0, uu.start),
            Ku = uu.value.slice(uu.end);
          let Qu = yu < 0 ? Ru.length : Math.max(0, yu - Eu.length - Ku.length);
          Qu > 0 && Qu < Ru.length && ou(Ru.charCodeAt(Qu - 1)) && Qu--;
          const mu = Ru.slice(0, Qu),
            Ju = Eu.length + mu.length;
          return {
            value: Eu + mu + Ku,
            start: Ju,
            end: Ju
          }
        }(uR(uu), Ru, uu.maxLength), "insertText")
      },
      QR = uu => {
        ER("delete") || RR(uu, (uu => {
          const Ru = uu.start === uu.end ? qu(uu.value, uu.start) : uu.start;
          return {
            value: uu.value.slice(0, Ru) + uu.value.slice(uu.end),
            start: Ru,
            end: Ru
          }
        })(uR(uu)), "deleteContentBackward")
      },
      mR = (uu, Ru) => {
        if (!fu(uu)) return;
        const yu = Ou(uR(uu), Ru);
        uu.setSelectionRange(yu.start, yu.end)
      },
      JR = ["button", "a[href]", "input:not([type=hidden])", "textarea", "select", "[role=button]", "[role=tab]", "[role=switch]", "[role=checkbox]", "[role=option]", "[role=menuitem]", "[data-pad-focusable]", "[data-pad-tab]", ".Dropdown-control", ".Dropdown-option"].join(","),
      NR = (uu, Ru) => {
        if ("function" === typeof uu.checkVisibility) return !uu.checkVisibility({
          visibilityProperty: !0,
          checkVisibilityCSS: !0,
          opacityProperty: Ru,
          checkOpacity: Ru
        });
        const {
          visibility: yu
        } = getComputedStyle(uu);
        if ("hidden" === yu || "collapse" === yu) return !0;
        if (!Ru) return !1;
        for (let Eu = uu; Eu; Eu = Eu.parentElement)
          if ("0" === getComputedStyle(Eu).opacity) return !0;
        return !1
      },
      XR = uu => {
        if (!uu.isConnected || NR(uu, !0)) return !1;
        const Ru = uu.getBoundingClientRect();
        return Ru.width > 0 && Ru.height > 0
      },
      VR = uu => !!uu.matches(":disabled, [aria-disabled='true']") || "button" === uu.getAttribute("role") && "-1" === uu.getAttribute("tabindex"),
      rR = uu => {
        var Ru;
        if (uu.closest("[data-pad-ignore]")) return !0;
        return !!(null === (Ru = uu.parentElement) || void 0 === Ru ? void 0 : Ru.closest("[data-pad-focusable]"))
      },
      BR = uu => {
        const Ru = uu.querySelectorAll(JR);
        return uu.matches(JR) ? [uu, ...Ru] : Ru
      },
      xR = uu => {
        const Ru = [];
        for (const yu of BR(uu)) !rR(yu) && XR(yu) && Ru.push(yu);
        return Ru
      },
      SR = new WeakMap,
      pR = uu => {
        const Ru = SR.get(uu);
        if (Ru && TR(Ru, uu)) return !0;
        for (const yu of BR(uu))
          if (!rR(yu) && XR(yu)) return SR.set(uu, yu), !0;
        return SR.delete(uu), !1
      },
      TR = (uu, Ru) => Ru.contains(uu) && uu.matches(JR) && !rR(uu) && XR(uu),
      WR = (uu, Ru) => TR(uu, Ru) && !VR(uu),
      jR = uu => {
        const Ru = Ru => {
          let yu = 0;
          for (let Eu = Ru.parentElement; Eu && Eu !== uu; Eu = Eu.parentElement) yu++;
          return yu
        };
        return [...uu.querySelectorAll("[data-pad-initial-area]")].filter(XR).sort(((uu, yu) => Ru(yu) - Ru(uu)))
      },
      HR = uu => au(uu),
      dR = uu => {
        const Ru = uu.getBoundingClientRect();
        return {
          x: Ru.left + Ru.width / 2,
          y: Ru.top + Ru.height / 2
        }
      },
      bR = (uu, Ru, yu) => ({
        bubbles: !0,
        cancelable: !0,
        composed: !0,
        view: window,
        clientX: uu.x,
        clientY: uu.y,
        screenX: uu.x,
        screenY: uu.y,
        button: Ru,
        buttons: yu,
        pointerId: 1,
        pointerType: "mouse",
        isPrimary: !0
      }),
      CR = (uu, Ru) => {
        (0, Wu.c)(uu, Ru)
      },
      kR = function(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const Eu = 0 === yu ? 1 : 2;
        CR(uu, new PointerEvent("pointerdown", bR(Ru, yu, Eu))), CR(uu, new MouseEvent("mousedown", bR(Ru, yu, Eu)))
      },
      eR = function(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        CR(uu, new PointerEvent("pointerup", bR(Ru, yu, 0))), CR(uu, new MouseEvent("mouseup", bR(Ru, yu, 0)))
      },
      AR = function(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        kR(uu, Ru, yu), eR(uu, Ru, yu), CR(uu, 0 === yu ? new MouseEvent("click", bR(Ru, 0, 0)) : new MouseEvent("contextmenu", bR(Ru, 2, 0)))
      },
      DR = function(uu, Ru, yu) {
        let {
          leaveBelow: Eu = null,
          enterBelow: Ku = null
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (uu !== Ru) {
          if (null !== uu && void 0 !== uu && uu.isConnected) {
            const Ku = {
              ...bR(yu, 0, 0),
              relatedTarget: Ru
            };
            CR(uu, new PointerEvent("pointerout", Ku)), CR(uu, new MouseEvent("mouseout", Ku));
            const Qu = uu => !!Ru && uu.contains(Ru) || !!Eu && uu.contains(Eu);
            for (let Ru = uu; Ru && !Qu(Ru); Ru = Ru.parentElement) CR(Ru, new PointerEvent("pointerleave", {
              ...Ku,
              bubbles: !1
            })), CR(Ru, new MouseEvent("mouseleave", {
              ...Ku,
              bubbles: !1
            }))
          }
          if (Ru) {
            const Eu = {
              ...bR(yu, 0, 0),
              relatedTarget: uu
            };
            CR(Ru, new PointerEvent("pointerover", Eu)), CR(Ru, new MouseEvent("mouseover", Eu));
            const Qu = [],
              mu = Ru => !(null === uu || void 0 === uu || !uu.isConnected) && Ru.contains(uu) || !!Ku && Ru.contains(Ku);
            for (let uu = Ru; uu && !mu(uu); uu = uu.parentElement) Qu.push(uu);
            for (const uu of Qu.reverse()) CR(uu, new PointerEvent("pointerenter", {
              ...Eu,
              bubbles: !1
            })), CR(uu, new MouseEvent("mouseenter", {
              ...Eu,
              bubbles: !1
            }));
            CR(Ru, new PointerEvent("pointermove", bR(yu, 0, 0))), CR(Ru, new MouseEvent("mousemove", bR(yu, 0, 0)))
          }
        } else Ru && (CR(Ru, new PointerEvent("pointermove", bR(yu, 0, 0))), CR(Ru, new MouseEvent("mousemove", bR(yu, 0, 0))))
      },
      MR = uu => {
        Xu.k.Op(Pu.g, uu)
      },
      IR = uu => {
        if (HR(uu)) return void MR(uu);
        const Ru = uu.hasAttribute("data-pad-focusable") ? uu.querySelector("a[href]") : null,
          yu = null !== Ru && void 0 !== Ru ? Ru : uu;
        AR(yu, dR(yu))
      },
      GR = ".Dropdown-root.is-open",
      UR = uu => {
        const Ru = uu.querySelector(".Dropdown-control");
        return IR(Ru), Ru
      },
      nR = uu => {
        var Ru;
        const yu = null !== (Ru = uu.closest(GR)) && void 0 !== Ru ? Ru : uu.querySelector(GR);
        return yu ? UR(yu) : null
      },
      sR = uu => {
        for (const Ru of document.querySelectorAll(GR)) Ru.contains(uu) || UR(Ru)
      },
      tR = uu => null !== uu.closest("input[type=color], input[type=file], [data-pad-mouse-only]"),
      lR = uu => {
        const Ru = uu ? document.elementFromPoint(uu.x, uu.y) : null;
        return !(null === Ru || void 0 === Ru || !Ru.closest("[data-pad-repeat]"))
      },
      gR = uu => {
        var Ru;
        return null !== (Ru = [...uu.querySelectorAll("[data-pad-back]")].find(XR)) && void 0 !== Ru ? Ru : null
      },
      cR = uu => {
        const Ru = gR(uu);
        return !!Ru && (IR(Ru), !0)
      },
      LR = uu => {
        var Ru, yu, Eu, Ku;
        return null !== (Ru = null !== (yu = null !== (Eu = uu.getAttribute("data-pad-key")) && void 0 !== Eu ? Eu : uu.getAttribute("href")) && void 0 !== yu ? yu : null === (Ku = uu.querySelector("a[href]")) || void 0 === Ku ? void 0 : Ku.getAttribute("href")) && void 0 !== Ru ? Ru : null
      },
      zR = {
        x: 0,
        y: 0,
        visible: !1,
        pressed: !1
      };
    const FR = new class {
        constructor() {
          this.state = zR, this.listeners = new Set
        }
        get() {
          return this.state
        }
        set(uu) {
          if (Ru = this.state, yu = uu, (Ru.visible || yu.visible) && (Ru.visible !== yu.visible || Ru.x !== yu.x || Ru.y !== yu.y || Ru.pressed !== yu.pressed)) {
            var Ru, yu;
            this.state = uu;
            for (const Ru of this.listeners) Ru(uu)
          }
        }
        hide() {
          this.set(zR)
        }
        subscribe(uu) {
          return this.listeners.add(uu), () => {
            this.listeners.delete(uu)
          }
        }
      },
      wR = (uu, Ru) => {
        let {
          kind: yu,
          holding: Eu,
          hasPress: Ku,
          hasBack: Qu,
          slotHasItem: mu
        } = Ru;
        switch (uu) {
          case "primary":
            return "slot" === yu ? "slotPrimary" : "recipe" === yu || "button" === yu ? Ku ? "pressPrimary" : "click" : "textField" === yu ? "openKeyboard" : null;
          case "secondary":
            return "slot" === yu ? "slotSecondary" : "button" !== yu && "recipe" !== yu || !Ku ? null : "pressSecondary";
          case "quickMove":
            return "slot" === yu && mu ? "slotQuickMove" : null;
          case "hotbarSwap":
            return "slot" === yu && mu && !Eu ? "hotbarPick" : null;
          case "openButton":
            return "close";
          case "back":
            return Eu ? "cancel" : Qu ? "pressBack" : "close"
        }
      },
      ZR = uu => {
        const Ru = [];
        if (uu.hotbarPicking) return Ru.push({
          actions: ["inventoryPrimary", "inventoryHotbarSwap"],
          labelKey: "inventorySwapHere"
        }), Ru.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryCancel"
        }), Ru;
        if (uu.holding) "slot" === uu.kind ? (Ru.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryPlace"
        }), Ru.push({
          actions: ["inventorySecondary"],
          labelKey: "inventoryPlaceOne"
        })) : "textField" === uu.kind && Ru.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryType"
        }), Ru.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryPutBack"
        }), Ru.push({
          actions: ["inventoryDrop"],
          labelKey: "inventoryDrop"
        }), uu.openButtonCloses && Ru.push({
          actions: ["inventory"],
          labelKey: "inventoryClose"
        });
        else {
          var yu;
          "slot" === uu.kind && uu.slotHasItem ? (Ru.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryTake"
          }), Ru.push({
            actions: ["inventorySecondary"],
            labelKey: "inventoryTakeHalf"
          }), Ru.push({
            actions: ["inventoryQuickMove"],
            labelKey: uu.quickMoveToHotbar ? "inventoryToHotbar" : "inventoryQuickMove"
          }), Ru.push({
            actions: ["inventoryHotbarSwap"],
            labelKey: "inventoryHotbarSwap"
          }), Ru.push({
            actions: ["inventoryDrop"],
            labelKey: "inventoryDrop"
          })) : "button" !== uu.kind && "recipe" !== uu.kind || !uu.pressHints ? "button" === uu.kind || "recipe" === uu.kind ? Ru.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventorySelect"
          }) : "textField" === uu.kind && Ru.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryType"
          }) : (uu.pressHints.primary && Ru.push({
            actions: ["inventoryPrimary"],
            labelKey: uu.pressHints.primary
          }), uu.pressHints.secondary && Ru.push({
            actions: ["inventorySecondary"],
            labelKey: uu.pressHints.secondary
          }));
          const Eu = null === (yu = uu.pressHints) || void 0 === yu ? void 0 : yu.back;
          Eu && Ru.push({
            actions: ["inventoryClose"],
            labelKey: Eu
          });
          const Ku = [];
          uu.openButtonCloses && Ku.push("inventory"), Eu || Ku.push("inventoryClose"), Ku.length > 0 && Ru.push({
            actions: Ku,
            labelKey: "inventoryClose"
          })
        }
        return Ru.push({
          actions: ["inventoryPanelPrevious", "inventoryPanelNext"],
          labelKey: "inventoryPanels"
        }), uu.hasCategories ? Ru.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryCategory"
        }) : uu.hasList && Ru.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryPage"
        }), Ru
      };
    var hR = yu(8423);
    class PR {
      constructor(uu) {
        this.probes = uu, this.byContainer = new Map, this.byParent = new Map
      }
      find(uu, Ru) {
        const yu = Mu(uu, "y", Ru);
        if (!yu) return null;
        let Eu = this.byContainer.get(yu);
        return Eu || (this.probes.push({
          element: yu,
          rect: qR(yu.getBoundingClientRect())
        }), Eu = {
          container: yu,
          box: tu(yu),
          group: oR(yu)
        }, this.byContainer.set(yu, Eu)), Eu
      }
      findForParent(uu, Ru) {
        let yu = this.byParent.get(uu);
        return void 0 === yu && (yu = this.find(uu, Ru), this.byParent.set(uu, yu)), yu
      }
    }
    const iR = new WeakMap;
    let YR = 0;
    const oR = uu => {
        let Ru = iR.get(uu);
        return Ru || (Ru = "el:" + YR++, iR.set(uu, Ru)), Ru
      },
      qR = uu => ({
        left: uu.left,
        top: uu.top,
        width: uu.width,
        height: uu.height
      }),
      OR = uu => uu.width > 0 && uu.height > 0,
      vR = (uu, Ru) => OR(uu) && uu.left + uu.width > 0 && uu.top + uu.height > 0 && uu.left < Ru.width && uu.top < Ru.height,
      aR = (uu, Ru, yu) => {
        const Eu = uu.top + uu.height / 2;
        return vR(uu, Ru) && (!yu || Eu >= yu.top && Eu <= yu.bottom)
      },
      fR = uu => ({
        x: uu.left + uu.width / 2,
        y: uu.top + uu.height / 2
      }),
      uy = (uu, Ru, yu) => uu < 0 ? yu >= 0 ? 0 : Ru - 1 : ((uu + yu) % Ru + Ru) % Ru,
      Ry = uu => "Left" === uu || "Right" === uu,
      yy = (uu, Ru, yu) => {
        const Eu = Ry(yu),
          Ku = Eu ? uu.top : uu.left,
          Qu = Eu ? uu.height : uu.width,
          mu = Eu ? Ru.top : Ru.left,
          Ju = Eu ? Ru.height : Ru.width,
          Nu = Math.max(0, Math.max(mu - (Ku + Qu), Ku - (mu + Ju)));
        return Qu > 1.5 * Ju ? {
          gap: Nu,
          offset: Math.max(0, mu - Ku) + .1 * Math.max(0, Ku - mu)
        } : {
          gap: Nu,
          offset: Math.abs(mu + Ju / 2 - (Ku + Qu / 2))
        }
      },
      Ey = (uu, Ru, yu) => {
        const Eu = ((uu, Ru, yu) => {
          const Eu = fR(uu),
            Ku = fR(Ru),
            Qu = Ry(yu) ? Math.min(uu.width, Ru.width) / 4 : Math.min(uu.height, Ru.height) / 4;
          switch (yu) {
            case "Right":
              return Ku.x - Eu.x >= Qu ? Math.max(0, Ru.left - (uu.left + uu.width)) : null;
            case "Left":
              return Eu.x - Ku.x >= Qu ? Math.max(0, uu.left - (Ru.left + Ru.width)) : null;
            case "Down":
              return Ku.y - Eu.y >= Qu ? Math.max(0, Ru.top - (uu.top + uu.height)) : null;
            case "Up":
              return Eu.y - Ku.y >= Qu ? Math.max(0, uu.top - (Ru.top + Ru.height)) : null
          }
        })(uu, Ru, yu);
        if (null === Eu) return null;
        const Ku = yy(uu, Ru, yu);
        return Eu + 3 * Ku.gap + .5 * Ku.offset
      },
      Ky = (uu, Ru) => Ru.visible || null !== Ru.scrollGroup && Ru.scrollGroup === uu.scrollGroup,
      Qy = (uu, Ru, yu, Eu) => {
        let Ku = null,
          Qu = 1 / 0;
        for (const mu of Ru) {
          if (mu.key === uu.key || !Ky(uu, mu) || !Eu(mu)) continue;
          const Ru = Ey(uu.rect, mu.rect, yu);
          null !== Ru && Ru < Qu && (Ku = mu, Qu = Ru)
        }
        return Ku
      },
      my = (uu, Ru, yu) => {
        const Eu = Qy(uu, Ru, yu, (() => !0));
        if (!Eu || Ry(yu) || null === uu.scrollGroup || Eu.scrollGroup === uu.scrollGroup) return Eu;
        const Ku = Qy(uu, Ru, yu, (Ru => 0 === yy(uu.rect, Ru.rect, yu).gap));
        return null !== Ku && void 0 !== Ku ? Ku : Eu
      },
      Jy = (uu, Ru, yu) => {
        let Eu = null,
          Ku = 1 / 0;
        for (const Qu of Ru) {
          if (!Qu.visible || yu && !yu(Qu)) continue;
          const Ru = fR(Qu.rect),
            mu = Math.hypot(Ru.x - uu.x, Ru.y - uu.y);
          mu < Ku && (Eu = Qu, Ku = mu)
        }
        return Eu
      },
      Ny = uu => {
        const {
          rect: Ru,
          clip: yu
        } = uu;
        if (!yu) return Ru;
        const Eu = Math.max(Ru.left, yu.left),
          Ku = Math.max(Ru.top, yu.top);
        return {
          left: Eu,
          top: Ku,
          width: Math.min(Ru.left + Ru.width, yu.left + yu.width) - Eu,
          height: Math.min(Ru.top + Ru.height, yu.top + yu.height) - Ku
        }
      },
      Xy = (uu, Ru) => Ru.x >= uu.left && Ru.x < uu.left + uu.width && Ru.y >= uu.top && Ru.y < uu.top + uu.height,
      Vy = (uu, Ru) => {
        let yu = null,
          Eu = 1 / 0;
        for (const Ku of Ru) {
          const Ru = Ny(Ku);
          (Ku.visible || Ku.clip) && Xy(Ru, uu) && (Ru.width * Ru.height < Eu && (yu = Ku, Eu = Ru.width * Ru.height))
        }
        return yu
      },
      ry = uu => {
        let Ru = null;
        for (const yu of uu) {
          if (!yu.visible) continue;
          if (!Ru) {
            Ru = yu;
            continue
          }
          const uu = Math.min(Ru.rect.height, yu.rect.height) / 2,
            Eu = yu.rect.top - Ru.rect.top;
          (Eu < -uu || Math.abs(Eu) <= uu && yu.rect.left < Ru.rect.left) && (Ru = yu)
        }
        return Ru
      },
      By = (uu, Ru, yu, Eu, Ku) => {
        const Qu = Ku % Ru,
          mu = Math.floor(Ku / Ru);
        return {
          left: uu.left + Qu * yu,
          top: uu.top + mu * Eu,
          width: uu.width,
          height: uu.height
        }
      },
      xy = ".EntireInventoryWrapper .Inventory, .HotBarGameItemsContainer",
      Sy = ".LazyLoadedItemWrapper",
      py = ["[data-inven-idx]", "[data-recipe-key]", "[role=button]", "button", "input:not([type=hidden])", "textarea", ".CreativeCategoryTab", ".CreativeCategoryDropdownButton", ".CreativeCategoryDropdownOption", "[data-craft-ingredient]"].join(","),
      Ty = [
        ["hotbar", ".HotBarGameItemsContainer"],
        ["gameButtons", ".ClientGameInventoryButtons"],
        ["categories", ".CreativeCategoryRail"],
        ["recipe", ".CraftableInfo"],
        ["armour", ".ArmourItemSlots"],
        ["main", ".InvenBodyRight"],
        ["left", ".InvenLeftSide"]
      ],
      Wy = ["gameButtons", "categories", "left", "recipe", "armour", "main", "hotbar"],
      jy = uu => uu.hasAttribute("data-inven-idx") ? "slot" : uu.hasAttribute("data-recipe-key") ? "recipe" : uu.hasAttribute("data-craft-ingredient") || VR(uu) ? "info" : HR(uu) ? "textField" : "button",
      Hy = (uu, Ru) => "slot" === Ru ? Number(uu.getAttribute("data-inven-idx")) : null,
      dy = uu => uu.matches(Sy) ? uu.querySelector(py) : uu,
      by = uu => {
        var Ru, yu;
        return {
          element: uu,
          recipe: null !== (Ru = uu && (null === (yu = dy(uu)) || void 0 === yu ? void 0 : yu.getAttribute("data-recipe-key"))) && void 0 !== Ru ? Ru : null
        }
      },
      Cy = uu => {
        const Ru = dy(uu);
        if (!Ru) return {
          kind: "pending",
          idx: null
        };
        const yu = jy(Ru);
        return {
          kind: yu,
          idx: Hy(Ru, yu)
        }
      },
      ky = uu => {
        const Ru = [];
        for (const [yu, Eu] of Ty) {
          uu.matches(Eu) && Ru.push([yu, uu]);
          for (const Ku of uu.querySelectorAll(Eu)) Ru.push([yu, Ku])
        }
        return Ru
      },
      ey = (uu, Ru) => {
        for (const [yu, Eu] of uu)
          if (Eu.contains(Ru)) return yu;
        return "other"
      },
      Ay = (uu, Ru, yu, Eu, Ku, Qu, mu, Ju) => {
        var Nu;
        const Xu = uu.children,
          Vu = qR(Xu[0].getBoundingClientRect()),
          ru = [{
            element: Xu[0],
            rect: Vu
          }];
        if (Qu.push(ru[0]), 0 === Vu.width || 0 === Vu.height) return;
        let Bu = 1;
        for (; Bu < Xu.length && Math.abs(Xu[Bu].getBoundingClientRect().top - Vu.top) < 1;) Bu++;
        const xu = uu => {
            const Ru = {
              element: Xu[uu],
              rect: qR(Xu[uu].getBoundingClientRect())
            };
            return Qu.push(Ru), ru.push(Ru), Ru.rect
          },
          Su = Bu > 1 ? xu(1).left - Vu.left : Vu.width,
          pu = Xu.length > Bu ? xu(Bu).top - Vu.top : Vu.height,
          Tu = mu.find(uu, Ru);
        let Wu = null;
        if (Tu) {
          var ju;
          const {
            container: uu,
            box: Ru
          } = Tu;
          Wu = null !== (ju = Ju.get(uu)) && void 0 !== ju ? ju : null, Wu || (Wu = {
            top: uu.scrollTop,
            left: uu.scrollLeft,
            box: Ru,
            viewport: Eu,
            targets: [],
            probes: [],
            holdsOthers: !1
          }, Ju.set(uu, Wu)), Wu.probes.push(...ru)
        }
        const Hu = Ku.length;
        for (let ku = 0; ku < Xu.length; ku++) {
          var du, bu, Cu;
          const uu = Xu[ku],
            Ru = By(Vu, Bu, Su, pu, ku),
            Qu = uu.firstElementChild ? uu.querySelector(py) : null,
            mu = Qu ? jy(Qu) : "pending";
          Ku.push({
            key: oR(uu),
            rect: Ru,
            panel: yu,
            scrollGroup: null !== (du = null === Tu || void 0 === Tu ? void 0 : Tu.group) && void 0 !== du ? du : null,
            visible: aR(Ru, Eu, null === Tu || void 0 === Tu ? void 0 : Tu.box),
            clip: null !== (bu = null === Tu || void 0 === Tu ? void 0 : Tu.box) && void 0 !== bu ? bu : null,
            element: uu,
            kind: mu,
            idx: Qu ? Hy(Qu, mu) : null,
            scrollContainer: null !== (Cu = null === Tu || void 0 === Tu ? void 0 : Tu.container) && void 0 !== Cu ? Cu : null
          })
        }
        null === (Nu = Wu) || void 0 === Nu || Nu.targets.push(...Ku.slice(Hu))
      },
      Dy = uu => uu instanceof Element && null !== uu.closest(Sy),
      My = uu => null !== uu.scrollContainer && Dy(uu.element);
    class Iy {
      constructor() {
        this.latched = null, this.presses = 0
      }
      press(uu, Ru, yu, Eu) {
        this.latched = {
          source: uu,
          focusKey: Ru,
          sinceMs: yu,
          hold: {
            id: ++this.presses,
            holdMs: Eu
          }
        }
      }
      update(uu, Ru, yu) {
        const Eu = this.latched;
        return Eu ? uu && Ru === Eu.focusKey ? yu - Eu.sinceMs < Eu.hold.holdMs ? null : (this.latched = null, Eu.source) : (this.latched = null, null) : null
      }
      getHold() {
        var uu, Ru;
        return null !== (uu = null === (Ru = this.latched) || void 0 === Ru ? void 0 : Ru.hold) && void 0 !== uu ? uu : null
      }
      reset() {
        this.latched = null
      }
    }
    var Gy = yu(8425);
    const Uy = {
        kind: "none"
      },
      ny = uu => ({
        x: uu.clientX,
        y: uu.clientY
      }),
      sy = () => 2 * (parseFloat(getComputedStyle(document.documentElement).fontSize) || 16);
    class ty {
      constructor() {
        this.hovered = Uy, this.signature = "", this.holding = !1, this.lastPoint = {
          clientX: 0,
          clientY: 0
        }
      }
      sync(uu, Ru, yu, Eu, Ku) {
        const Qu = null !== Ru ? {
            kind: "slot",
            idx: Ru
          } : yu ? {
            kind: "element",
            element: yu
          } : Uy,
          mu = `${Ku}|${Math.round(Eu.clientX)},${Math.round(Eu.clientY)}`,
          Ju = (Nu = this.hovered, Xu = Qu, "slot" === Nu.kind && "slot" === Xu.kind ? Nu.idx === Xu.idx : "element" === Nu.kind && "element" === Xu.kind ? Nu.element === Xu.element : Nu.kind === Xu.kind);
        var Nu, Xu;
        if (Ju && mu === this.signature) return;
        const Vu = !Ju || Ku !== this.holding || "" === this.signature;
        this.signature = mu, this.holding = Ku, this.lastPoint = Eu;
        const ru = this.hovered;
        if (this.hovered = Qu, "slot" === Qu.kind) return this.leaveElement(ru, null, Eu), void(Vu ? uu.hover(Qu.idx, Eu) : uu.moveTo(Eu));
        if (Ju) return void("element" === Qu.kind ? DR(Qu.element, Qu.element, ny(Eu)) : uu.hover(null, Eu));
        uu.hover(null, Eu);
        const Bu = "element" === Qu.kind ? Qu.element : null;
        "element" === ru.kind ? DR(ru.element, Bu, ny(Eu)) : Bu && DR(null, Bu, ny(Eu))
      }
      invalidate() {
        this.signature = ""
      }
      clear(uu) {
        const Ru = this.hovered;
        this.hovered = Uy, this.signature = "", "none" !== Ru.kind && (this.leaveElement(Ru, null, this.lastPoint), uu && "slot" === Ru.kind && uu.hover(null, this.lastPoint))
      }
      leaveElement(uu, Ru, yu) {
        "element" === uu.kind && DR(uu.element, Ru, ny(yu))
      }
    }
    class ly {
      constructor() {
        this.lastTiltedMs = -1 / 0
      }
      update(uu, Ru) {
        ku(uu) && (this.lastTiltedMs = Ru)
      }
      allowsClick(uu) {
        return uu - this.lastTiltedMs > 150
      }
    }
    class gy {
      constructor() {
        this.remainder = 0, this.container = null
      }
      isScrolling(uu) {
        return 0 !== (0, Su.n)(uu, .2).y
      }
      step(uu, Ru, yu) {
        uu !== this.container && (this.container = uu, this.remainder = 0);
        const Eu = eu(Ru, yu).y;
        if (0 === Eu) return this.remainder = 0, !1;
        const Ku = this.remainder + Eu,
          Qu = Math.trunc(Ku);
        if (this.remainder = Ku - Qu, 0 === Qu) return !1;
        const mu = uu.scrollTop;
        return uu.scrollTop = mu + Qu, uu.scrollTop !== mu
      }
      current() {
        var uu;
        return null !== (uu = this.container) && void 0 !== uu && uu.isConnected ? this.container : null
      }
      reset() {
        this.remainder = 0, this.container = null
      }
    }
    var cy = yu(8434);
    const Ly = "[data-pad-inventory-default]",
      zy = ".HotBarGameItemsContainer .InvenItem.Selected",
      Fy = {
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
      wy = [
        ["primary", "inventoryPrimary"],
        ["secondary", "inventorySecondary"],
        ["quickMove", "inventoryQuickMove"],
        ["hotbarSwap", "inventoryHotbarSwap"],
        ["back", "inventoryClose"],
        ["openButton", "inventory"]
      ],
      Zy = ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryHotbarSwap", "inventoryClose", "inventoryDrop"],
      hy = ["inventoryPanelPrevious", "inventoryPanelNext", "menuPageUp", "menuPageDown"],
      Py = [...Zy, ...hy],
      iy = () => {
        return uu = (0, Vu.j)("inventory"), !Py.map(Vu.j).includes(uu) && !(0, Su.J)(uu);
        var uu
      },
      Yy = new Set(["slotPrimary", "slotSecondary", "slotQuickMove", "pressPrimary", "pressSecondary", "openKeyboard"]),
      oy = (uu, Ru) => {
        const yu = !(null === Ru || void 0 === Ru || !Ru.isHolding());
        return function(uu, Ru) {
          const yu = uu.find((uu => uu.visible && Ru(uu)));
          if (yu) return yu;
          for (var Eu = arguments.length, Ku = new Array(Eu > 2 ? Eu - 2 : 0), Qu = 2; Qu < Eu; Qu++) Ku[Qu - 2] = arguments[Qu];
          for (const mu of Ku) {
            const Ru = ry(uu.filter(mu));
            if (Ru) return Ru
          }
          return ry(uu)
        }(uu, (uu => {
          const {
            element: Ru
          } = uu;
          return Ru.matches(Ly) || null !== Ru.querySelector(Ly) || Ru.matches(zy)
        }), (uu => "slot" === uu.kind ? yu || null !== uu.idx && !(null === Ru || void 0 === Ru || !Ru.hasItemAt(uu.idx)) : "recipe" === uu.kind || "pending" === uu.kind), (uu => "slot" === uu.kind || "button" === uu.kind))
      };
    class qy {
      constructor() {
        this.set = null, this.observer = new MutationObserver((uu => {
          uu.some((uu => !Dy(uu.target))) && (this.set = null)
        })), this.invalidate = () => {
          this.set = null
        }, this.onScroll = uu => {
          this.scrolled(uu.target)
        }
      }
      get() {
        if (!this.set) {
          this.set = (() => {
            const uu = [],
              Ru = [];
            let yu = !1;
            const Eu = {
                width: window.innerWidth,
                height: window.innerHeight
              },
              Ku = new Map,
              Qu = new PR(Ru);
            for (const ru of document.querySelectorAll(xy)) {
              const Vu = ky(ru);
              yu ||= null !== ru.querySelector(".CreativeCategoryTab");
              for (const yu of ru.querySelectorAll(`${Sy}:first-child`)) {
                const mu = yu.parentElement;
                Ay(mu, ru, ey(Vu, mu), Eu, uu, Ru, Qu, Ku)
              }
              for (const yu of ru.querySelectorAll(py)) {
                var mu, Ju, Nu, Xu;
                if (yu.closest(Sy) || yu.closest("[data-pad-ignore]")) continue;
                const Bu = null === (mu = yu.parentElement) || void 0 === mu ? void 0 : mu.closest(py);
                if (Bu && ru.contains(Bu)) continue;
                const xu = jy(yu),
                  Su = Hy(yu, xu);
                if (-1 === Su) continue;
                const pu = qR(yu.getBoundingClientRect());
                Ru.push({
                  element: yu,
                  rect: pu
                });
                const Tu = Qu.findForParent(yu.parentElement, ru),
                  Wu = Tu && !Ku.has(Tu.container) ? Tu : null;
                (Wu ? OR(pu) : vR(pu, Eu)) && uu.push({
                  key: oR(yu),
                  rect: pu,
                  panel: ey(Vu, yu),
                  scrollGroup: null !== (Ju = null === Wu || void 0 === Wu ? void 0 : Wu.group) && void 0 !== Ju ? Ju : null,
                  visible: aR(pu, Eu, null === Wu || void 0 === Wu ? void 0 : Wu.box),
                  clip: null !== (Nu = null === Wu || void 0 === Wu ? void 0 : Wu.box) && void 0 !== Nu ? Nu : null,
                  element: yu,
                  kind: xu,
                  idx: Su,
                  scrollContainer: null !== (Xu = null === Wu || void 0 === Wu ? void 0 : Wu.container) && void 0 !== Xu ? Xu : null
                })
              }
            }
            for (const [ru, Bu] of Ku) Bu.holdsOthers = Ru.some((uu => uu.element !== ru && ru.contains(uu.element) && !uu.element.closest(Sy)));
            const Vu = new Map;
            for (const ru of uu) Vu.set(ru.element, ru);
            return {
              targets: uu,
              byElement: Vu,
              hasCategories: yu,
              probes: Ru,
              scrollers: Ku
            }
          })(), this.observer.disconnect();
          for (const uu of document.querySelectorAll(xy)) this.observer.observe(uu, {
            childList: !0,
            subtree: !0,
            attributes: !0,
            attributeFilter: ["class", "disabled", "aria-disabled", "tabindex", "data-inven-idx"]
          })
        }
        return this.set
      }
      scrolled(uu) {
        !this.set || uu instanceof Element && ((uu, Ru) => {
          const yu = uu.scrollers.get(Ru);
          if (!yu || yu.holdsOthers || Ru.scrollLeft !== yu.left) return !1;
          const Eu = Ru.scrollTop - yu.top;
          if (0 === Eu) return !0;
          yu.top = Ru.scrollTop;
          for (const Ku of yu.probes) Ku.rect.top -= Eu;
          for (const Ku of yu.targets) Ku.rect.top -= Eu, Ku.visible = aR(Ku.rect, yu.viewport, yu.box);
          return !0
        })(this.set, uu) || (this.set = null)
      }
      revalidate() {
        this.set && this.set.probes.some((uu => {
          return Ru = uu.rect, yu = uu.element.getBoundingClientRect(), !(Ru.left === yu.left && Ru.top === yu.top && Ru.width === yu.width && Ru.height === yu.height);
          var Ru, yu
        })) && (this.set = null)
      }
      disconnect() {
        this.observer.disconnect(), this.set = null
      }
    }
    const Oy = new class {
        constructor() {
          this.focused = null, this.focusTarget = null, this.lastRect = null, this.panelMemory = new Map, this.reopenSlotIdx = null, this.dpadTimers = new Map(Su.F.map((uu => [uu, (0, pu.e)(Su.I)]))), this.stickRepeat = new Su.c((0, pu.e)(Su.ib)), this.pageUpTimer = (0, pu.e)(Su.cb), this.pageDownTimer = (0, pu.e)(Su.cb), this.stickGate = new bu, this.pointer = null, this.activePress = null, this.dropLatch = new Iy, this.scroller = new gy, this.scrollStickClick = new ly, this.hover = new ty, this.lastRealPointer = null, this.placeAfterCategory = null, this.hotbarPick = null, this.ring = new Zu, this.targets = new qy, this.hasCategories = !1, this.wasShowing = !1, this.state = Gy.b, this.isActive = () => (0, hR.j)(), this.isShowing = () => "inventory" === ru.d.getActiveConsumerName() && (0, xu.h)(), this.getState = () => this.state, this.isSteppingSlots = () => this.isShowing() && null === this.pointer, this.onDeactivate = () => {
            this.endInteraction((0, hR.f)()), (0, hR.j)() || this.forgetSurface()
          }, this.forgetSurface = () => {
            var uu;
            this.reopenSlotIdx = null !== (uu = this.focused ? Cy(this.focused).idx : null) && void 0 !== uu ? uu : this.reopenSlotIdx, this.focused = null, this.focusTarget = null, this.lastRect = null, this.placeAfterCategory = null, (0, hR.t)(), this.panelMemory.clear(), this.targets.disconnect()
          }, this.onFrame = uu => {
            (0, Ju.unstable_batchedUpdates)((() => {
              this.frame(uu)
            }))
          }, this.shouldBlockRealPointer = uu => uu.isTrusted && !(0, Wu.j)(uu) && this.isShowing(), this.noteRealPointer = uu => {
            uu instanceof MouseEvent && uu.isTrusted && !(0, Wu.j)(uu) && (this.lastRealPointer ??= {
              x: 0,
              y: 0
            }, this.lastRealPointer.x = uu.clientX, this.lastRealPointer.y = uu.clientY)
          }, this.wakePressActs = uu => {
            var Ru;
            return uu === (0, Vu.j)("inventoryClose") ? !(null !== (Ru = (0, hR.f)()) && void 0 !== Ru && Ru.isHolding()) : !(uu !== (0, Vu.j)("inventory") || !iy()) || ((0, Su.J)(uu) ? this.isNavButton(uu) : hy.some((Ru => (0, Vu.j)(Ru) === uu)))
          }
        }
        frame(uu) {
          var Ru, yu, Eu, Ku, Qu;
          const mu = (0, hR.f)();
          if (!(0, xu.h)()) return void(this.wasShowing && (this.endInteraction(mu), this.rehoverRealPointer()));
          this.wasShowing = !0, this.applyFocusRequest(), uu.wokeDevice && this.focusWakePointer(!(null === mu || void 0 === mu || !mu.isHolding())), this.applyCategoryPlace(), this.ensureFocus(), "cursor" !== (0, Bu.g)().inventoryNavigation || this.pointer || this.engagePointer();
          const Ju = performance.now();
          this.handleNavigation(uu, Ju), this.handlePanels(uu), this.handlePaging(uu, Ju), this.handleScroll(uu), this.handleButtons(uu, Ju, mu), this.applyFocusRequest(), this.pointer && this.hoverAtPointer();
          const Nu = this.ensureFocus(),
            Xu = this.focusContext(mu);
          this.ring.show(Nu);
          const ru = "slot" === Xu.kind ? Xu.idx : null,
            Su = null !== (Ru = null === (yu = Xu.actionElement) || void 0 === yu ? void 0 : yu.querySelector(".DoCraftItem")) && void 0 !== Ru ? Ru : Xu.actionElement;
          this.pointer ? (this.hover.sync(mu, ru, Su, ((uu, Ru) => {
            const yu = Ru ? sy() : 0;
            return {
              clientX: uu.x - yu,
              clientY: uu.y - yu
            }
          })(this.pointer, Xu.holding), Xu.holding), FR.set({
            x: this.pointer.x,
            y: this.pointer.y,
            visible: !0,
            pressed: uu.isHeld((0, Vu.j)("inventoryPrimary"))
          })) : Nu && this.focused && this.hover.sync(mu, ru, Su, ((uu, Ru) => {
            if (!Ru) return {
              clientX: uu.left + uu.width - 10,
              clientY: uu.top + uu.height / 2 - 10
            };
            const yu = sy();
            return {
              clientX: uu.left + uu.width / 2 - yu,
              clientY: uu.top + uu.height / 2 - yu
            }
          })(Nu, Xu.holding), Xu.holding), this.publishState({
            showing: !0,
            kind: Xu.kind,
            holding: Xu.holding,
            slotHasItem: Xu.slotHasItem,
            pressHints: null !== (Eu = null === (Ku = Xu.press) || void 0 === Ku ? void 0 : Ku.hints) && void 0 !== Eu ? Eu : null,
            hasCategories: this.hasCategories,
            hasList: !!this.focusTarget && My(this.focusTarget),
            openButtonCloses: iy(),
            steppingSlots: null === this.pointer,
            quickMoveToHotbar: "slot" === Xu.kind && !(null === (Qu = Xu.actionElement) || void 0 === Qu || !Qu.closest(".CreativeItemSlots")),
            dropStackHold: this.dropLatch.getHold(),
            hotbarPicking: null !== this.hotbarPick
          })
        }
        focusWakePointer(uu) {
          var Ru;
          const yu = (0, xu.b)();
          if (!yu) return;
          this.targets.revalidate();
          const Eu = this.getTargets().targets;
          this.setFocus(null !== (Ru = Vy(yu, Eu)) && void 0 !== Ru ? Ru : uu ? Jy(yu, Eu, (uu => {
            let {
              rect: Ru
            } = uu;
            const Eu = Math.max(Ru.left - yu.x, 0, yu.x - (Ru.left + Ru.width)),
              Ku = Math.max(Ru.top - yu.y, 0, yu.y - (Ru.top + Ru.height));
            return Math.hypot(Eu, Ku) <= Math.min(Ru.width, Ru.height) / 2
          })) : null, !1), "cursor" === (0, Bu.g)().inventoryNavigation && (this.pointer = {
            x: yu.x,
            y: yu.y,
            speedRamp: 0
          })
        }
        rehoverRealPointer() {
          const uu = this.lastRealPointer;
          if (!uu || "keyboardMouse" !== Nu.d.get("activeInputDevice")) return;
          const Ru = document.elementFromPoint(uu.x, uu.y);
          Ru && DR(null, Ru, uu)
        }
        endInteraction(uu) {
          this.wasShowing = !1, this.hotbarPick = null, this.releasePress(), this.dropLatch.reset(), this.scroller.reset();
          for (const Ru of this.dpadTimers.values()) Ru.reset();
          this.stickRepeat.reset(), this.pageUpTimer.reset(), this.pageDownTimer.reset(), this.hover.clear(uu), this.ring.hide(), this.releasePointer(), this.publishState(Gy.b)
        }
        getTargets() {
          const uu = this.targets.get();
          return this.hasCategories = uu.hasCategories, uu
        }
        currentTarget() {
          var uu;
          return this.focused && null !== (uu = this.getTargets().byElement.get(this.focused)) && void 0 !== uu ? uu : null
        }
        readFocusRect() {
          const uu = this.focused;
          if (null === uu || void 0 === uu || !uu.isConnected || !uu.closest(xy)) return null;
          const Ru = uu.getBoundingClientRect();
          return Ru.width > 0 && Ru.height > 0 ? {
            left: Ru.left,
            top: Ru.top,
            width: Ru.width,
            height: Ru.height
          } : null
        }
        ensureFocus() {
          const uu = this.readFocusRect();
          if (uu || this.pointer) return uu;
          const {
            targets: Ru,
            byElement: yu
          } = this.getTargets();
          let Eu = null,
            Ku = !1;
          if (this.lastRect) Eu = Jy(fR(this.lastRect), Ru);
          else {
            var Qu, mu;
            const uu = ((uu, Ru) => {
                const yu = document.querySelector(".EntireInventoryWrapper [data-pad-inventory-start]");
                return yu ? oy(uu.filter((uu => yu.contains(uu.element))), Ru) : null
              })(Ru, (0, hR.f)()),
              Ju = Ru.find((uu => null !== uu.idx && uu.idx === this.reopenSlotIdx)),
              Nu = document.querySelector(zy);
            Ku = null !== uu || void 0 !== Ju, Eu = null !== (Qu = null !== (mu = null !== uu && void 0 !== uu ? uu : Ju) && void 0 !== mu ? mu : Nu && yu.get(Nu)) && void 0 !== Qu ? Qu : ry(Ru)
          }
          return this.setFocus(Eu, Ku), this.lastRect
        }
        setFocus(uu) {
          let Ru = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          uu && (this.focused = uu.element, this.focusTarget = uu, this.panelMemory.set(uu.panel, uu.element), Ru && uu.scrollContainer && ((uu, Ru) => {
            const yu = uu.getBoundingClientRect(),
              Eu = tu(Ru),
              Ku = Ru.scrollTop;
            return yu.top < Eu.top ? Ru.scrollTop -= Eu.top - yu.top : yu.bottom > Eu.bottom && (Ru.scrollTop += yu.bottom - Eu.bottom), Ru.scrollTop !== Ku
          })(uu.element, uu.scrollContainer) && this.targets.invalidate(), this.lastRect = this.readFocusRect(), this.followFocusJump())
        }
        followFocusJump() {
          if (this.pointer)
            if ("cursor" === (0, Bu.g)().inventoryNavigation) {
              if (this.lastRect) {
                const uu = fR(this.lastRect);
                this.pointer = {
                  x: uu.x,
                  y: uu.y,
                  speedRamp: 0
                }
              }
            } else this.releasePointer()
        }
        engagePointer() {
          const uu = this.lastRect ? fR(this.lastRect) : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          };
          this.pointer = {
            x: uu.x,
            y: uu.y,
            speedRamp: 0
          }
        }
        releasePointer() {
          this.pointer = null, FR.hide()
        }
        hoverAtPointer() {
          var uu;
          const Ru = Vy(this.pointer, this.getTargets().targets);
          this.focusTarget = Ru, (null === Ru || void 0 === Ru ? void 0 : Ru.element) !== this.focused && (this.focused = null !== (uu = null === Ru || void 0 === Ru ? void 0 : Ru.element) && void 0 !== uu ? uu : null, Ru && (this.panelMemory.set(Ru.panel, Ru.element), this.lastRect = this.readFocusRect()))
        }
        moveCursor(uu, Ru) {
          const yu = this.focusTarget,
            Eu = yu && (0, Bu.g)().cursorMagnetism ? fR(Ny(yu)) : null;
          this.pointer = Cu(this.pointer, {
            stick: uu.leftStick,
            moveDeadzone: (0, Bu.g)().moveDeadzone,
            dpad: Ru,
            dtMs: uu.dtMs,
            cursorSpeedPercent: (0, Bu.g)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: {
              overInteractive: !1,
              magnetTarget: Eu
            }
          })
        }
        move(uu) {
          this.targets.revalidate();
          const Ru = this.currentTarget();
          Ru && this.setFocus(my(Ru, this.getTargets().targets, uu))
        }
        step(uu) {
          const Ru = this.pointer;
          if (Ru && (this.releasePointer(), !this.focused)) return this.targets.revalidate(), void this.setFocus(((uu, Ru, yu) => {
            var Eu;
            const Ku = {
              key: "",
              rect: {
                left: uu.x,
                top: uu.y,
                width: 0,
                height: 0
              },
              panel: "",
              scrollGroup: null,
              visible: !0,
              clip: null
            };
            return null !== (Eu = my(Ku, Ru, yu)) && void 0 !== Eu ? Eu : Jy(uu, Ru)
          })(Ru, this.getTargets().targets, uu));
          this.move(uu)
        }
        isNavButton(uu) {
          return !Zy.some((Ru => (0, Vu.j)(Ru) === uu)) && !(uu === (0, Vu.j)("inventory") && iy())
        }
        handleNavigation(uu, Ru) {
          const yu = (0, Bu.g)().inventoryNavigation,
            Eu = {
              x: 0,
              y: 0
            };
          let Ku = null;
          for (const Nu of Su.F) {
            const Qu = this.isNavButton(Nu) && uu.isHeld(Nu);
            Qu && (Eu.x += Fy[Nu].x, Eu.y += Fy[Nu].y), this.dpadTimers.get(Nu).update(Qu, Ru) && "cursor" !== yu && (Ku ??= Nu)
          }
          const Qu = this.stickGate.update(uu.leftStick, (0, Bu.g)().moveDeadzone);
          if (Ku && (this.step(Ku), this.stickGate.lock()), "slot" !== yu) {
            const Ru = ((uu, Ru, yu, Eu) => "hybrid" !== uu ? "cursor" === uu : !Eu && (Ru || yu))(yu, null !== this.pointer, Qu, null !== Ku);
            return Ru && !this.pointer && this.engagePointer(), void(this.pointer && this.moveCursor(uu, "cursor" === yu ? Eu : {
              x: 0,
              y: 0
            }))
          }
          const mu = (0, Su.n)(uu.leftStick, (0, Bu.g)().moveDeadzone),
            Ju = this.stickRepeat.update(Qu ? (0, Su.mb)(mu) : null, Ru);
          Ju && this.move(Ju)
        }
        applyCategoryPlace() {
          const uu = this.placeAfterCategory;
          if (!uu) return;
          this.placeAfterCategory = null, this.targets.invalidate();
          const Ru = Jy(fR(uu.rect), this.getTargets().targets, (Ru => Ru.scrollGroup === uu.scrollGroup));
          this.setFocus(Ru, !1)
        }
        applyFocusRequest() {
          const uu = (0, hR.t)();
          uu && (this.targets.invalidate(), this.setFocus((0, hR.d)(this.getTargets().targets, uu)))
        }
        handlePanels(uu) {
          var Ru, yu, Eu;
          const Ku = uu.wasPressed((0, Vu.j)("inventoryPanelPrevious")),
            Qu = uu.wasPressed((0, Vu.j)("inventoryPanelNext"));
          if (!Ku && !Qu) return;
          const {
            targets: mu
          } = this.getTargets(), Ju = (Nu = ((uu, Ru) => {
            const yu = [];
            for (const Ku of uu) Ku.visible && !yu.includes(Ku.panel) && yu.push(Ku.panel);
            const Eu = uu => {
              const Eu = Ru.indexOf(uu);
              return -1 === Eu ? Ru.length + yu.indexOf(uu) : Eu
            };
            return yu.sort(((uu, Ru) => Eu(uu) - Eu(Ru)))
          })(mu, Wy), Xu = null !== (Ru = null === (yu = this.focusTarget) || void 0 === yu ? void 0 : yu.panel) && void 0 !== Ru ? Ru : null, ru = Qu ? 1 : -1, 0 === Nu.length ? null : Nu[uy(null === Xu ? -1 : Nu.indexOf(Xu), Nu.length, ru)]);
          var Nu, Xu, ru;
          if (null === Ju) return;
          const Bu = this.panelMemory.get(Ju),
            xu = mu.filter((uu => uu.panel === Ju)),
            Su = null !== (Eu = xu.find((uu => uu.element === Bu && uu.visible))) && void 0 !== Eu ? Eu : oy(xu, (0, hR.f)());
          this.setFocus(Su)
        }
        handlePaging(uu, Ru) {
          const yu = (0, Vu.j)("menuPageUp"),
            Eu = (0, Vu.j)("menuPageDown"),
            Ku = this.pageUpTimer.update(uu.isHeld(yu), Ru),
            Qu = this.pageDownTimer.update(uu.isHeld(Eu), Ru);
          if (!Ku && !Qu) return;
          const mu = Qu ? 1 : -1;
          if (!uu.wasPressed(Qu ? Eu : yu) && this.hasCategories) return;
          if ((uu => {
              const Ru = Array.from(document.querySelectorAll(".EntireInventoryWrapper .CreativeCategoryTab"));
              if (0 === Ru.length) return !1;
              const yu = Ru.findIndex((uu => uu.classList.contains("Selected"))),
                Eu = Ru[uy(yu, Ru.length, uu)];
              return AR(Eu, dR(Eu)), !0
            })(mu)) {
            var Ju, Nu;
            this.targets.invalidate();
            const uu = null !== (Ju = null === (Nu = this.focusTarget) || void 0 === Nu ? void 0 : Nu.scrollGroup) && void 0 !== Ju ? Ju : null,
              Ru = this.readFocusRect();
            return void(this.placeAfterCategory = null !== uu && Ru && !this.pointer ? {
              rect: Ru,
              scrollGroup: uu
            } : null)
          }
          const {
            targets: Xu
          } = this.getTargets(), ru = this.currentTarget(), Bu = ru && My(ru) ? ru : Xu.find((uu => My(uu) && uu.visible));
          if (!Bu) return;
          const xu = ((uu, Ru, yu, Eu) => {
            if (null === uu.scrollGroup) return null;
            const Ku = fR(uu.rect),
              Qu = Ku.x,
              mu = Ku.y + ("Down" === yu ? Eu : -Eu);
            let Ju = null,
              Nu = 1 / 0;
            for (const Xu of Ru) {
              if (Xu.scrollGroup !== uu.scrollGroup || Xu.key === uu.key) continue;
              const Ru = fR(Xu.rect);
              if ("Down" === yu ? Ru.y <= Ku.y : Ru.y >= Ku.y) continue;
              const Eu = Math.hypot(Ru.x - Qu, Ru.y - mu);
              Eu < Nu && (Ju = Xu, Nu = Eu)
            }
            return Ju
          })(Bu, Xu, mu > 0 ? "Down" : "Up", Bu.scrollContainer.clientHeight);
          this.setFocus(null !== xu && void 0 !== xu ? xu : Bu)
        }
        handleScroll(uu) {
          var Ru, yu, Eu, Ku, Qu, mu;
          if (!this.scroller.isScrolling(uu.rightStick)) return void this.scroller.reset();
          const {
            targets: Ju
          } = this.getTargets(), Nu = this.pointer, Xu = !Nu && this.focusTarget && My(this.focusTarget) ? this.focusTarget.scrollContainer : null, Vu = Nu && (null === (Ru = Ju.find((uu => uu.clip && Xy(uu.clip, Nu)))) || void 0 === Ru ? void 0 : Ru.scrollContainer), ru = null !== (yu = null !== (Eu = null !== (Ku = this.scroller.current()) && void 0 !== Ku ? Ku : Vu) && void 0 !== Eu ? Eu : Xu) && void 0 !== yu ? yu : null === (Qu = Ju.find(My)) || void 0 === Qu ? void 0 : Qu.scrollContainer;
          if (!ru || !this.scroller.step(ru, uu.rightStick, uu.dtMs)) return;
          this.targets.scrolled(ru);
          const Bu = Nu || (null === (mu = this.focusTarget) || void 0 === mu ? void 0 : mu.scrollContainer) !== ru ? null : this.readFocusRect();
          if (!Bu) return;
          const xu = tu(ru),
            Su = fR(Bu);
          if (Su.y < xu.top || Su.y > xu.bottom) {
            const uu = this.focusTarget.scrollGroup,
              Ru = Jy(Su, this.getTargets().targets, (Ru => Ru.scrollGroup === uu));
            this.setFocus(Ru, !1)
          }
        }
        focusContext(uu) {
          const {
            kind: Ru,
            idx: yu
          } = this.focused ? Cy(this.focused) : {
            kind: null,
            idx: null
          }, Eu = this.focused ? dy(this.focused) : null, Ku = Eu ? (0, cy.d)(Eu) : null;
          return {
            kind: Ru,
            idx: yu,
            actionElement: Eu,
            press: Ku,
            hasPress: null !== Ku,
            hasBack: !(null === Ku || void 0 === Ku || !Ku.back),
            holding: uu.isHolding(),
            slotHasItem: null !== yu && uu.hasItemAt(yu)
          }
        }
        handleButtons(uu, Ru, yu) {
          var Eu, Ku;
          if (!this.activePress || uu.isHeld(this.activePress.button) && (Eu = this.activePress.target, Ku = this.focused, null !== Eu.recipe ? by(Ku).recipe === Eu.recipe : Ku === Eu.element) || this.releasePress(), this.scrollStickClick.update(uu.rightStick, Ru), !this.handleHotbarPick(uu, yu)) {
            for (const [Eu, Ku] of wy) {
              const Qu = (0, Vu.j)(Ku);
              if (!uu.wasPressed(Qu) || "openButton" === Eu && !iy()) continue;
              if ("RS" === Qu && !this.scrollStickClick.allowsClick(Ru)) continue;
              const mu = this.focusContext(yu),
                Ju = wR(Eu, mu);
              Ju && this.runIntent(Ju, mu, Qu, yu)
            }
            this.handleDrop(uu, Ru, yu)
          }
        }
        handleHotbarPick(uu, Ru) {
          const yu = this.hotbarPick;
          if (!yu) return !1;
          const Eu = uu.wasPressed((0, Vu.j)("inventoryPrimary")) || uu.wasPressed((0, Vu.j)("inventoryHotbarSwap"));
          if (!Eu && !uu.wasPressed((0, Vu.j)("inventoryClose")) && !Ru.isHolding()) return !(uu.wasPressed((0, Vu.j)("inventory")) && iy());
          const Ku = this.focusTarget;
          Eu && "hotbar" === (null === Ku || void 0 === Ku ? void 0 : Ku.panel) && null !== Ku.idx && Ku.idx !== yu.idx && (Ru.swapWithHotbar(Ku.idx, yu.idx), this.afterAction()), this.hotbarPick = null;
          const Qu = yu.element.isConnected ? this.getTargets().byElement.get(yu.element) : void 0;
          return Qu && this.setFocus(Qu), !0
        }
        startHotbarPick(uu) {
          var Ru;
          const {
            targets: yu,
            byElement: Eu
          } = this.getTargets(), Ku = document.querySelector(zy), Qu = null !== (Ru = Ku && Eu.get(Ku)) && void 0 !== Ru ? Ru : yu.find((uu => "hotbar" === uu.panel));
          Qu && this.focused && (this.hotbarPick = {
            idx: uu,
            element: this.focused
          }, this.setFocus(Qu))
        }
        focusKey() {
          return this.focused ? oR(this.focused) : null
        }
        handleDrop(uu, Ru, yu) {
          const Eu = (0, Vu.j)("inventoryDrop");
          if (uu.wasPressed(Eu)) {
            const uu = (Ku = this.focusContext(yu)).holding ? {
              kind: "jJ"
            } : "slot" === Ku.kind && Ku.slotHasItem && null !== Ku.idx ? {
              kind: "slot",
              idx: Ku.idx
            } : null;
            return void(uu && (this.dropFrom(uu, !1, yu), this.dropLatch.press(uu, this.focusKey(), Ru, Tu.e[(0, Bu.g)().tapHoldTime].dropStackMs), this.afterAction()))
          }
          var Ku;
          const Qu = this.dropLatch.update(uu.isHeld(Eu), this.focusKey(), Ru);
          Qu && ((uu, Ru, yu) => "jJ" === uu.kind ? Ru : !Ru && yu(uu.idx))(Qu, yu.isHolding(), yu.hasItemAt) && (this.dropFrom(Qu, !0, yu), this.afterAction())
        }
        dropFrom(uu, Ru, yu) {
          "jJ" === uu.kind ? yu.dropHeld(Ru, this.slotPoint()) : yu.dropSlot(uu.idx, Ru)
        }
        slotPoint() {
          return this.pointer ? {
            clientX: this.pointer.x,
            clientY: this.pointer.y
          } : this.lastRect ? (uu => {
            const Ru = fR(uu);
            return {
              clientX: Ru.x,
              clientY: Ru.y
            }
          })(this.lastRect) : {
            clientX: 0,
            clientY: 0
          }
        }
        runIntent(uu, Ru, yu, Eu) {
          const Ku = Ru.idx,
            Qu = Ru.actionElement;
          switch (Qu && Yy.has(uu) && (0, Wu.m)(Qu), uu) {
            case "slotPrimary":
              Eu.primary(Ku, this.slotPoint());
              break;
            case "slotSecondary":
              Eu.secondary(Ku, this.slotPoint());
              break;
            case "slotQuickMove":
              Eu.quickMove(Ku, this.slotPoint());
              break;
            case "hotbarPick":
              this.startHotbarPick(Ku);
              break;
            case "pressPrimary":
            case "pressSecondary":
              this.startPress(Ru.press, "pressPrimary" === uu ? "primary" : "secondary", yu);
              break;
            case "click":
              AR(Qu, dR(Qu));
              break;
            case "openKeyboard":
              HR(Qu) && MR(Qu);
              break;
            case "pressBack":
              Ru.press.back();
              break;
            case "cancel":
              Eu.cancel();
              break;
            case "close":
              return this.releasePress(), void Eu.close()
          }
          this.afterAction()
        }
        startPress(uu, Ru, yu) {
          this.releasePress(), uu.press(Ru) && (this.activePress = {
            handlers: uu,
            button: yu,
            target: by(this.focused)
          })
        }
        releasePress() {
          var uu, Ru, yu;
          null === (uu = this.activePress) || void 0 === uu || null === (Ru = (yu = uu.handlers).release) || void 0 === Ru || Ru.call(yu), this.activePress = null
        }
        afterAction() {
          this.targets.invalidate(), this.hover.invalidate()
        }
        publishState(uu) {
          ((uu, Ru) => {
            var yu, Eu, Ku, Qu, mu, Ju;
            return uu.showing === Ru.showing && uu.kind === Ru.kind && uu.holding === Ru.holding && uu.slotHasItem === Ru.slotHasItem && (null === (yu = uu.pressHints) || void 0 === yu ? void 0 : yu.primary) === (null === (Eu = Ru.pressHints) || void 0 === Eu ? void 0 : Eu.primary) && (null === (Ku = uu.pressHints) || void 0 === Ku ? void 0 : Ku.secondary) === (null === (Qu = Ru.pressHints) || void 0 === Qu ? void 0 : Qu.secondary) && (null === (mu = uu.pressHints) || void 0 === mu ? void 0 : mu.back) === (null === (Ju = Ru.pressHints) || void 0 === Ju ? void 0 : Ju.back) && uu.hasCategories === Ru.hasCategories && uu.hasList === Ru.hasList && uu.openButtonCloses === Ru.openButtonCloses && uu.steppingSlots === Ru.steppingSlots && uu.hotbarPicking === Ru.hotbarPicking && uu.quickMoveToHotbar === Ru.quickMoveToHotbar && uu.dropStackHold === Ru.dropStackHold
          })(uu, this.state) || (this.state = uu, Xu.k.Op(Gy.e, uu))
        }
      },
      vy = ["pointermove", "pointerover", "pointerout", "mouseover", "mouseout"];
    var ay = yu(8439),
      fy = yu(330),
      uE = yu(1583),
      RE = yu(7915);
    const yE = "[data-pad-secondary]",
      EE = uu => uu instanceof HTMLElement && XR(uu) && !VR(uu),
      KE = uu => {
        const Ru = uu.querySelector(yE);
        if (Ru && EE(Ru)) return Ru;
        for (const Ku of null !== (yu = null === (Eu = uu.parentElement) || void 0 === Eu ? void 0 : Eu.children) && void 0 !== yu ? yu : []) {
          var yu, Eu;
          if (Ku !== uu && Ku.matches(yE) && EE(Ku)) return Ku
        }
        return null
      },
      QE = (uu, Ru, yu, Eu) => Math.max(0, Math.max(uu, yu) - Math.min(Ru, Eu)),
      mE = (uu, Ru, yu, Eu) => Math.max(0, Math.min(Ru, Eu) - Math.max(uu, yu)),
      JE = (uu, Ru, yu) => {
        const Eu = (uu.left + uu.right) / 2,
          Ku = (uu.top + uu.bottom) / 2,
          Qu = (Ru.left + Ru.right) / 2,
          mu = (Ru.top + Ru.bottom) / 2;
        if ("Left" === yu || "Right" === yu) {
          const Ju = "Right" === yu ? 1 : -1;
          return {
            forwardGap: "Right" === yu ? Ru.left - uu.right : uu.left - Ru.right,
            centreForward: (Qu - Eu) * Ju,
            sidewaysGap: QE(uu.top, uu.bottom, Ru.top, Ru.bottom),
            sidewaysOverlap: mE(uu.top, uu.bottom, Ru.top, Ru.bottom),
            centreSideways: Math.abs(mu - Ku),
            startSideways: Math.abs(Ru.top - uu.top),
            fromSidewaysSize: uu.bottom - uu.top,
            toSidewaysSize: Ru.bottom - Ru.top,
            toLength: Ru.right - Ru.left
          }
        }
        const Ju = "Down" === yu ? 1 : -1;
        return {
          forwardGap: "Down" === yu ? Ru.top - uu.bottom : uu.top - Ru.bottom,
          centreForward: (mu - Ku) * Ju,
          sidewaysGap: QE(uu.left, uu.right, Ru.left, Ru.right),
          sidewaysOverlap: mE(uu.left, uu.right, Ru.left, Ru.right),
          centreSideways: Math.abs(Qu - Eu),
          startSideways: Math.abs(Ru.left - uu.left),
          fromSidewaysSize: uu.right - uu.left,
          toSidewaysSize: Ru.right - Ru.left,
          toLength: Ru.bottom - Ru.top
        }
      },
      NE = uu => uu.centreForward > .5 && uu.forwardGap >= -uu.toLength / 2,
      XE = uu => {
        const Ru = uu.sidewaysOverlap > 0 ? 0 : 2 * uu.fromSidewaysSize,
          yu = uu.fromSidewaysSize > 1.5 * uu.toSidewaysSize ? uu.startSideways : uu.centreSideways;
        return Math.max(0, uu.forwardGap) + 3 * uu.sidewaysGap + Ru + .1 * yu
      },
      VE = (uu, Ru) => mE(uu.top, uu.bottom, Ru.top, Ru.bottom) > 0 || Ru.bottom - Ru.top > Ru.right - Ru.left,
      rE = (uu, Ru, yu, Eu, Ku, Qu) => {
        const mu = Ku ? xE(uu, Ru, yu, Ku) : new Set,
          Ju = pE(uu, Ru, yu, mu);
        return Ju < 0 && mu.size > 0 && Qu ? BE(uu, Ru, yu, Qu) : Eu && Ju >= 0 ? SE(uu, Ru, yu, Eu, Ju, mu) : Ju
      },
      BE = (uu, Ru, yu, Eu) => {
        const Ku = new Set,
          Qu = pE(uu, Ru, "Up", Ku) >= 0,
          mu = pE(uu, Ru, "Down", Ku) >= 0,
          Ju = new Set;
        return Ru.forEach(((Ru, yu) => {
          const Ku = Ru.top + Ru.bottom < uu.top + uu.bottom;
          Eu[yu] && !(Ku ? Qu : mu) || Ju.add(yu)
        })), pE(uu, Ru, yu, Ju)
      },
      xE = (uu, Ru, yu, Eu) => {
        const Ku = new Set;
        return "Left" !== yu && "Right" !== yu || Ru.forEach(((Ru, yu) => {
          Eu[yu] && mE(uu.top, uu.bottom, Ru.top, Ru.bottom) <= 0 && Ku.add(yu)
        })), Ku
      },
      SE = (uu, Ru, yu, Eu, Ku, Qu) => {
        const mu = JE(uu, Ru[Ku], yu).forwardGap;
        let Ju = Ku,
          Nu = Eu[Ku],
          Xu = 1 / 0;
        return Ru.forEach(((Ru, Vu) => {
          const ru = Eu[Vu];
          if (Qu.has(Vu) || ru < Nu || ru === Nu && Ju === Ku) return;
          const Bu = JE(uu, Ru, yu);
          if (!NE(Bu) || Bu.forwardGap < 0 || Bu.forwardGap >= mu) return;
          const xu = XE(Bu);
          (ru > Nu || xu < Xu) && (Ju = Vu, Nu = ru, Xu = xu)
        })), Ju
      },
      pE = (uu, Ru, yu, Eu) => {
        let Ku = -1,
          Qu = 1 / 0;
        if (Ru.forEach(((Ru, mu) => {
            const Ju = ((uu, Ru, yu) => {
              const Eu = JE(uu, Ru, yu);
              if (!NE(Eu)) return null;
              const Ku = Math.max(0, Eu.forwardGap);
              return Eu.sidewaysOverlap <= 0 && Eu.sidewaysGap > 2 * (Ku + 1) ? null : XE(Eu)
            })(uu, Ru, yu);
            null !== Ju && Ju < Qu && !Eu.has(mu) && (Qu = Ju, Ku = mu)
          })), Ku < 0) return -1;
        const mu = Ru[Ku],
          Ju = JE(uu, mu, yu).forwardGap;
        let Nu = Ju,
          Xu = Ku;
        return Ru.forEach(((Ru, Qu) => {
          if (Qu === Ku || Eu.has(Qu) || !((uu, Ru, yu) => {
              const Eu = "Left" === yu || "Right" === yu,
                Ku = Eu ? mE(uu.top, uu.bottom, Ru.top, Ru.bottom) : mE(uu.left, uu.right, Ru.left, Ru.right),
                Qu = Eu ? Math.min(uu.bottom - uu.top, Ru.bottom - Ru.top) : Math.min(uu.right - uu.left, Ru.right - Ru.left);
              return Ku > 0 && Ku >= Qu / 2
            })(Ru, mu, yu)) return;
          const Vu = JE(uu, Ru, yu);
          NE(Vu) && Vu.forwardGap + Vu.toLength <= Ju + 1 && Vu.forwardGap < Nu && (Nu = Vu.forwardGap, Xu = Qu)
        })), Xu
      },
      TE = (uu, Ru) => {
        let yu = -1,
          Eu = 1 / 0;
        return Ru.forEach(((Ru, Ku) => {
          const Qu = Math.max(Ru.left - uu.x, 0, uu.x - Ru.right),
            mu = Math.max(Ru.top - uu.y, 0, uu.y - Ru.bottom),
            Ju = Math.hypot(Qu, mu);
          Ju < Eu && (Eu = Ju, yu = Ku)
        })), yu
      },
      WE = (uu, Ru) => {
        const yu = Math.min(uu.bottom - uu.top, Ru.bottom - Ru.top) / 2;
        return Math.abs(uu.top - Ru.top) > yu ? uu.top - Ru.top : uu.left - Ru.left
      },
      jE = uu => {
        let Ru = -1;
        for (let yu = 0; yu < uu.length; yu++)(Ru < 0 || WE(uu[yu], uu[Ru]) < 0) && (Ru = yu);
        return Ru
      };
    var HE = yu(1621),
      dE = yu(8441),
      bE = yu(8445);
    const CE = uu => {
        if ("death" !== uu || "inGame" !== Nu.d.get("gameState") || "off" === (0, Bu.g)().quickChat || null === (0, HE.c)()) return !1;
        const Ru = (0, Vu.j)("chat");
        return Ru !== (0, Vu.j)("menuConfirm") && Ru !== (0, Vu.j)("menuBack")
      },
      kE = new dE.d;
    var eE = yu(4096),
      AE = yu(8447);
    const DE = uu => {
        let Ru = null;
        for (const yu of uu.querySelectorAll("[data-pad-tabs]")) XR(yu) && (!Ru || Number(yu.dataset.padTabs) < Number(Ru.dataset.padTabs)) && (Ru = yu);
        return Ru
      },
      ME = (uu, Ru, yu, Eu) => {
        uu.focusWhenFound((() => {
          const Ku = uu.pickInitial(Ru);
          if (Ku && !yu.has(Ku) && (null === Eu || void 0 === Eu || !Eu.contains(Ku))) return Ku;
          const Qu = ((uu, Ru) => {
              const yu = Ru => uu.getEnabledCandidates(Ru).filter((uu => !uu.closest("[data-pad-tabs]")));
              for (const Eu of jR(Ru)) {
                const uu = yu(Eu);
                if (uu.length > 0) return uu
              }
              return yu(Ru)
            })(uu, Ru).filter((uu => !yu.has(uu))),
            mu = jE(Qu.map((uu => uu.getBoundingClientRect())));
          return mu >= 0 ? Qu[mu] : null
        }), 3e3)
      },
      IE = (uu, Ru, yu, Eu) => {
        var Ku;
        const Qu = ((uu, Ru) => {
          if (0 === uu.length) return null;
          const yu = uu.findIndex((uu => "true" === uu.dataset.padSelected));
          return yu < 0 ? Ru > 0 ? uu[0] : uu[uu.length - 1] : uu[(yu + Ru + uu.length) % uu.length]
        })([...yu.querySelectorAll("[data-pad-tab]")].filter((uu => XR(uu) && !VR(uu))), Eu);
        if (!Qu) return;
        const mu = null !== (Ku = null === uu || void 0 === uu ? void 0 : uu.getFocused()) && void 0 !== Ku ? Ku : null,
          Ju = !(null === mu || void 0 === mu || !mu.isConnected) && yu.contains(mu),
          Nu = uu && !Ju ? new Set(uu.getEnabledCandidates(Ru)) : null;
        IR(Qu), uu && (Nu ? ME(uu, Ru, Nu, yu) : uu.setFocus(Qu, {
          byUser: !0
        }))
      },
      GE = uu => {
        var Ru;
        const yu = tu(null !== (Ru = Mu(uu, "x")) && void 0 !== Ru ? Ru : uu),
          Eu = xR(uu).filter((uu => !VR(uu))),
          Ku = Eu.filter((uu => lu(uu.getBoundingClientRect(), yu)));
        return (Ku.length > 0 ? Ku : Eu).sort(((uu, Ru) => WE(uu.getBoundingClientRect(), Ru.getBoundingClientRect())))
      },
      UE = (uu, Ru, yu) => {
        const Eu = [...Ru.querySelectorAll("[data-pad-row]")].filter(XR),
          Ku = uu.getFocused(),
          Qu = Ku ? Eu.findIndex((uu => uu.contains(Ku))) : -1;
        let mu = 0,
          Ju = yu > 0 ? 0 : Eu.length - 1;
        if (Qu >= 0 && Ku) mu = Math.max(0, GE(Eu[Qu]).indexOf(Ku)), Ju = Qu + yu;
        else if (Ku) {
          const uu = Ku.getBoundingClientRect(),
            Ru = Eu.map((Ru => {
              const Eu = Ru.getBoundingClientRect();
              return yu > 0 ? Eu.top >= uu.top : Eu.bottom <= uu.bottom
            }));
          Ju = yu > 0 ? Ru.indexOf(!0) : Ru.lastIndexOf(!0)
        }
        for (let Nu = Ju; Nu >= 0 && Nu < Eu.length; Nu += yu) {
          const Ru = GE(Eu[Nu]);
          if (Ru.length > 0) return void uu.setFocus(Ru[Math.min(mu, Ru.length - 1)], {
            byUser: !0
          })
        }
      },
      nE = (uu, Ru, yu) => {
        var Eu, Ku;
        const Qu = null !== (Eu = null === uu || void 0 === uu ? void 0 : uu.getFocused()) && void 0 !== Eu ? Eu : null,
          mu = null !== Qu && void 0 !== Qu && Qu.closest("[data-pad-row]") ? "x" : "y",
          Ju = null !== (Ku = Qu ? Mu(Qu, mu, Ru) : null) && void 0 !== Ku ? Ku : Gu(Ru, mu);
        if (!Ju) return;
        const Nu = Qu ? dR(Qu) : null;
        if (su(Ju, mu, yu * ("y" === mu ? Ju.clientHeight : Ju.clientWidth) * .85), !uu || !Nu) return;
        const Xu = tu(Ju),
          Vu = uu.getEnabledCandidates(Ru).filter((uu => Ju.contains(uu) && lu(uu.getBoundingClientRect(), Xu))),
          ru = TE(Nu, Vu.map((uu => uu.getBoundingClientRect())));
        ru >= 0 && uu.setFocus(Vu[ru], {
          scroll: !1,
          byUser: !0
        })
      };
    let sE = null;
    const tE = (uu, Ru) => {
        var yu, Eu;
        const Ku = Ru.querySelector("[data-pad-friends-column]"),
          Qu = uu.getFocused();
        if (!Ku || !Qu || !Ku.contains(Qu)) return !1;
        const mu = uu.getEnabledCandidates(Ru).filter((uu => !Ku.contains(uu))),
          Ju = TE(dR(Qu), mu.map((uu => uu.getBoundingClientRect()))),
          Nu = null === (yu = sE) || void 0 === yu ? void 0 : yu.deref();
        return uu.setFocus(null !== Nu && void 0 !== Nu && Nu.isConnected ? Nu : null !== (Eu = mu[Ju]) && void 0 !== Eu ? Eu : null, {
          byUser: !0
        }), !0
      },
      lE = uu => {
        const Ru = (0, Vu.j)(uu);
        return (0, Su.J)(Ru) || RE.v.some((uu => (0, Vu.j)(uu) === Ru)) ? null : Ru
      },
      gE = (uu, Ru) => {
        const yu = lE(Ru);
        return null !== yu && uu.wasPressed(yu)
      },
      cE = function(uu, Ru, yu) {
        let Eu = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const Ku = (uu => {
            var Ru, yu;
            return null !== (Ru = null === (yu = DE(uu)) || void 0 === yu ? void 0 : yu.querySelector("[data-pad-tab][data-pad-selected='true']")) && void 0 !== Ru ? Ru : null
          })(Ru),
          Qu = uu && Ku ? new Set(uu.getEnabledCandidates(Ru)) : null;
        (0, ay.d)(), yu === fy.s.SETTINGS && (0, uE.l)(Nu.d.get("openEverythingMenuName")) ? Nu.d.set({
          openEverythingMenuName: yu
        }) : (0, uE.u)(new Event("padMenuShortcut"), yu, Eu), uu && Qu && Ku && ME(uu, Ru, Qu, Ku.closest("[data-pad-tabs]"))
      },
      LE = uu => null !== uu.closest(".Dropdown-root") || null !== uu.querySelector(".Dropdown-root.is-open"),
      zE = uu => null !== (0, AE.c)() && "popup" !== uu.layer.kind && !DE(uu.root) && !LE(uu.root),
      FE = (0, pu.e)(Su.cb),
      wE = (0, pu.e)(Su.cb),
      ZE = (uu, Ru, yu) => {
        if (((uu, Ru) => {
            const yu = (0, Vu.j)("chat");
            return CE(Ru) && uu.isHeld(yu) ? "hold" === kE.update(uu.wasPressed(yu), uu.isHeld(yu), performance.now(), Tu.e[(0, Bu.g)().tapHoldTime].wheelMs) && (ru.d.consumeButton(yu), Xu.k.Op(bE.r), !0) : (kE.release(), !1)
          })(Ru, yu.layer.kind)) return !0;
        const Eu = yu.root;
        for (const [mu, Ju] of [
            ["menuTabPrevious", -1],
            ["menuTabNext", 1]
          ])
          if (Ru.wasPressed((0, Vu.j)(mu))) {
            const Ru = LE(Eu) ? null : DE(Eu);
            if (Ru) IE(uu, Eu, Ru, Ju);
            else if (zE(yu)) {
              var Ku;
              const Ru = uu ? new Set(uu.getEnabledCandidates(Eu)) : null;
              null !== (Ku = (0, AE.c)()) && void 0 !== Ku && Ku(Ju) && uu && Ru && ME(uu, Eu, Ru, null)
            } else uu && UE(uu, Eu, Ju);
            return !0
          } for (const [mu, Ju, Nu] of [
            ["menuPageUp", -1, FE],
            ["menuPageDown", 1, wE]
          ]) {
          const yu = (0, Vu.j)(mu);
          if (Ru.wasPressed(yu) && Nu.reset(), Nu.update(Ru.isHeld(yu), performance.now())) return nE(uu, Eu, Ju), !0
        }
        const Qu = "popup" === yu.layer.kind;
        return gE(Ru, "pause") ? (Qu || (0, uE.t)() && "menu" !== yu.layer.kind || cE(uu, Eu, (0, uE.t)() ? fy.s.SETTINGS : (0, eE.e)()), !0) : !!gE(Ru, "leaderboard") && ("home" === yu.layer.kind ? (uu => {
          const Ru = [...uu.querySelectorAll("[data-pad-notifications]")].find(XR);
          Ru && IR(Ru)
        })(Eu) : Qu || cE(uu, Eu, fy.s.LOBBY_LEADERBOARD, "inGame" === Nu.d.get("gameState")), !0)
      },
      hE = (uu, Ru, yu) => {
        if (ZE(uu, Ru, yu)) return !0;
        const Eu = "home" === yu.layer.kind;
        if (Ru.wasPressed((0, Vu.j)("menuSecondary"))) {
          const Ru = uu.getFocused(),
            Ku = Ru ? KE(Ru) : null;
          if (Ku) return IR(Ku), !0;
          if (Eu) {
            const Ru = yu.root.querySelector("[data-pad-search] input");
            return Ru && WR(Ru, yu.root) ? (uu.setFocus(Ru, {
              byUser: !0
            }), IR(Ru)) : Nu.d.set({
              searchOpen: !0
            }), !0
          }
        }
        return !(!Eu || !gE(Ru, "inventory")) && (((uu, Ru) => {
          var yu, Eu;
          const Ku = Ru.querySelector("[data-pad-friends-column]");
          if (!Ku || !XR(Ku)) return void(0, uE.u)(new Event("padMenuShortcut"), fy.s.SOCIAL);
          if (tE(uu, Ru)) return;
          const Qu = null !== (yu = null === (Eu = Ku.querySelector("[data-pad-friends-start]")) || void 0 === Eu ? void 0 : Eu.getBoundingClientRect().top) && void 0 !== yu ? yu : -1 / 0,
            mu = uu.getEnabledCandidates(Ku),
            Ju = mu.filter((uu => uu.getBoundingClientRect().top >= Qu)),
            Nu = Ju.length > 0 ? Ju : mu,
            Xu = jE(Nu.map((uu => uu.getBoundingClientRect())));
          uu.setFocus(Xu >= 0 ? Nu[Xu] : null, {
            byUser: !0
          })
        })(uu, yu.root), !0)
      },
      PE = uu => {
        var Ru, yu, Eu;
        const Ku = LR(uu);
        if (null !== Ku) return Ku;
        const Qu = (null !== (Ru = null !== (yu = null !== (Eu = uu.getAttribute("aria-label")) && void 0 !== Eu ? Eu : uu.getAttribute("title")) && void 0 !== yu ? yu : uu.textContent) && void 0 !== Ru ? Ru : "").replace(/\s+/g, " ").trim();
        return Qu ? `${uu.tagName}:${Qu.slice(0,100)}` : null
      };
    class iE {
      constructor() {
        this.remembered = new Map, this.history = []
      }
      enter(uu) {
        const Ru = this.history.indexOf(uu);
        if (Ru >= 0) {
          for (const uu of this.history.splice(Ru + 1)) this.remembered.delete(uu);
          return !0
        }
        return this.remembered.delete(uu), this.history.push(uu), this.history.length > 32 && this.forget(this.history[0]), !1
      }
      forget(uu) {
        this.remembered.delete(uu);
        const Ru = this.history.indexOf(uu);
        Ru >= 0 && this.history.splice(Ru, 1)
      }
      remember(uu, Ru, yu, Eu) {
        const Ku = PE(Ru),
          Qu = LR(Ru),
          mu = null !== Qu && ((uu, Ru) => {
            let yu = 0;
            for (const Eu of uu.querySelectorAll("[data-pad-key], [href]"))
              if ((Eu.getAttribute("data-pad-key") === Ru || Eu.getAttribute("href") === Ru) && (yu++, yu > 1)) return !0;
            return !1
          })(yu, Qu) ? Math.max(0, this.twins(Eu(), Qu).indexOf(Ru)) : 0;
        this.remembered.set(uu, {
          element: new WeakRef(Ru),
          identity: Ku,
          ordinal: mu
        })
      }
      has(uu) {
        return this.remembered.has(uu)
      }
      recall(uu, Ru) {
        var yu, Eu;
        const Ku = this.remembered.get(uu);
        if (!Ku) return null;
        const Qu = Ku.element.deref();
        if (Qu && Ru.includes(Qu)) return Qu;
        if (null === Ku.identity) return null;
        const mu = this.twins(Ru, Ku.identity);
        return null !== (yu = null !== (Eu = mu[Ku.ordinal]) && void 0 !== Eu ? Eu : mu[0]) && void 0 !== yu ? yu : null
      }
      twins(uu, Ru) {
        return uu.filter((uu => PE(uu) === Ru))
      }
    }
    var YE = yu(1247);
    const oE = uu => {
        const Ru = [];
        let yu = uu;
        for (; yu && yu !== document.body;) {
          const uu = getComputedStyle(yu).zIndex;
          "auto" !== uu && Ru.push(Number(uu) || 0), yu = yu.parentElement
        }
        return Ru.reverse()
      },
      qE = (uu, Ru) => {
        const yu = ((uu, Ru) => {
          const yu = Math.max(uu.length, Ru.length);
          for (let Qu = 0; Qu < yu; Qu++) {
            var Eu, Ku;
            const yu = (null !== (Eu = uu[Qu]) && void 0 !== Eu ? Eu : 0) - (null !== (Ku = Ru[Qu]) && void 0 !== Ku ? Ku : 0);
            if (0 !== yu) return yu
          }
          return 0
        })(oE(uu), oE(Ru));
        if (0 !== yu) return yu > 0;
        if (uu.contains(Ru)) return !1;
        if (Ru.contains(uu)) return !0;
        const Eu = uu.compareDocumentPosition(Ru);
        return !!(Eu & Node.DOCUMENT_POSITION_PRECEDING) || !(Eu & Node.DOCUMENT_POSITION_FOLLOWING) && null
      },
      OE = (uu, Ru) => {
        var yu;
        return null !== (yu = qE(uu.root, Ru.root)) && void 0 !== yu ? yu : uu.order > Ru.order
      },
      vE = (uu, Ru) => Ru.some((Ru => !Ru.contains(uu) && !uu.contains(Ru) && !0 === qE(Ru, uu)));
    let aE = null,
      fE = null,
      uK = -1;
    const RK = () => {
        var uu;
        const Ru = null === (uu = document.timeline) || void 0 === uu ? void 0 : uu.currentTime,
          yu = "number" === typeof Ru ? Ru : null;
        if (null !== yu && yu === fE && uK === (0, YE.b)()) return aE;
        let Eu = null;
        const Ku = [],
          Qu = [...document.querySelectorAll("[data-pad-covers]")].filter(XR);
        for (const mu of (0, YE.f)()) {
          const uu = mu.getRoot(),
            Ru = !!uu && XR(uu) && !vE(uu, Qu);
          if (mu.shown && !Ru && Ku.push(mu), mu.shown = Ru, !uu || !Ru) continue;
          const yu = {
            layer: mu,
            root: uu,
            order: mu.order
          };
          Eu && !OE(yu, Eu) || (Eu = yu)
        }
        aE = Eu, fE = yu, uK = (0, YE.b)();
        for (const mu of Ku)(0, YE.i)(mu);
        return aE
      },
      yK = () => {
        const uu = RK();
        return !(null === uu || void 0 === uu || !uu.layer.close) && (uu.layer.close(), fE = null, !0)
      },
      EK = () => {
        var uu, Ru;
        return null !== (uu = null === (Ru = RK()) || void 0 === Ru ? void 0 : Ru.root) && void 0 !== uu ? uu : null
      },
      KK = uu => uu ? {
        ...uu,
        root: EK()
      } : null;
    let QK = null,
      mK = null,
      JK = (0, Bu.g)().menuNavigation,
      NK = null;
    const XK = new bu;
    let VK = null;
    Xu.k.subscribe(Bu.e, (() => {
      const uu = (0, Bu.g)().menuNavigation;
      uu !== JK && (JK = uu, QK = null, mK = null)
    }));
    const rK = () => {
        var uu;
        return null !== (uu = QK) && void 0 !== uu ? uu : (0, Bu.g)().menuNavigation
      },
      BK = uu => {
        if (TK()) {
          if (NK = KK(uu), "hybrid" === rK()) return XK.lock(), void(mK = mK ? null : EK());
          QK = "focus" === rK() ? "cursor" : "focus"
        }
      },
      xK = () => {
        const uu = NK;
        return NK = null, uu
      };
    let SK = {
      root: null,
      firstSeenMs: -1 / 0,
      atMs: -1 / 0,
      has: !1
    };
    const pK = function(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const yu = SK.root === uu,
          Eu = yu ? SK.firstSeenMs : Ru,
          Ku = SK.has || Ru - Eu > 1e3;
        return (!yu || !Ku || Ru - SK.atMs > 250) && (SK = {
          root: uu,
          firstSeenMs: Eu,
          atMs: Ru,
          has: pR(uu)
        }), SK.has
      },
      TK = () => {
        const uu = EK();
        return null !== uu && pK(uu)
      },
      WK = () => {
        const uu = RK();
        return mK && (null === uu || void 0 === uu ? void 0 : uu.root) !== mK && (mK = null), (uu => {
          let {
            mode: Ru,
            hasLayer: yu,
            hasCandidates: Eu,
            hybridCursorEngaged: Ku
          } = uu;
          return yu ? "cursor" !== Ru && Eu() ? "hybrid" === Ru && Ku ? "cursor" : "focus" : "cursor" : null
        })({
          mode: rK(),
          hasLayer: null !== uu,
          hasCandidates: () => null !== uu && pK(uu.root),
          hybridCursorEngaged: null !== mK
        })
      },
      jK = () => "hybrid" === rK() && TK(),
      HK = "pad-focused";
    var dK = yu(4320),
      bK = yu(4818);
    const CK = "[data-pad-destructive]",
      kK = `${CK}, [data-pad-back]`,
      eK = uu => ({
        rect: uu.getBoundingClientRect(),
        destructive: uu.matches(CK),
        closes: null !== uu.closest("[data-pad-close-button]"),
        unavailable: uu.matches("[data-pad-unavailable]")
      }),
      AK = uu => {
        let {
          destructive: Ru,
          closes: yu,
          unavailable: Eu
        } = uu;
        return Ru ? yu ? 2 : 3 : Eu ? 1 : 0
      },
      DK = uu => {
        let Ru = -1;
        for (let yu = 0; yu < uu.length; yu++) {
          if (Ru < 0) {
            Ru = yu;
            continue
          }
          const Eu = uu[yu],
            Ku = uu[Ru];
          AK(Eu) === AK(Ku) ? WE(Eu.rect, Ku.rect) < 0 && (Ru = yu) : AK(Eu) < AK(Ku) && (Ru = yu)
        }
        return Ru
      },
      MK = "[data-pad-tabs]",
      IK = "[data-pad-tab]",
      GK = (uu, Ru) => {
        const yu = uu.querySelector(`${IK}[data-pad-selected='true']`);
        return yu && Ru.includes(yu) ? yu : null
      },
      UK = (uu, Ru) => {
        let yu = Ru;
        for (let Eu = Ru.parentElement; Eu && !Eu.contains(uu); Eu = Eu.parentElement) yu = Eu;
        return yu
      };
    class nK {
      constructor() {
        this.contentReturn = null
      }
      redirect(uu, Ru, yu, Eu) {
        var Ku, Qu;
        const mu = uu.closest(MK),
          Ju = Ru.closest(MK);
        var Nu;
        if (Ju && Ju !== mu) return mu || (this.contentReturn = new WeakRef(uu)), null !== (Nu = GK(Ju, yu)) && void 0 !== Nu ? Nu : Ru;
        if (!mu || Ju) return Ru;
        const Xu = UK(uu, Ru),
          Vu = null === (Ku = this.contentReturn) || void 0 === Ku ? void 0 : Ku.deref();
        return Vu && Xu.contains(Vu) && yu.includes(Vu) ? Vu : null !== (Qu = this.pickRegionStart(Xu, Mu(Ru, "y", Eu), yu)) && void 0 !== Qu ? Qu : Ru
      }
      findTabContent(uu, Ru, yu) {
        const Eu = uu.closest(MK);
        if (!Eu || !uu.matches(IK) || Eu.contains(Ru)) return null;
        const Ku = Ru.closest(MK);
        if (Ku && Number(Ku.dataset.padTabs) <= Number(Eu.dataset.padTabs)) return null;
        const Qu = UK(uu, Ru);
        return yu.some((uu => Qu.contains(uu) && !uu.closest(kK))) || !Ru.closest(kK) ? Qu : null
      }
      pickContentStart(uu, Ru, yu) {
        return this.contentReturn = null, this.pickRegionStart(uu, Mu(uu, "y", yu), Ru)
      }
      pickReplacedContentStart(uu, Ru, yu, Eu) {
        if (!Ru.contains(uu)) return null;
        const Ku = UK(Ru, uu),
          Qu = yu.filter((uu => Ru.contains(uu) && !Ku.contains(uu) && !uu.closest(kK)));
        return 0 === Qu.length ? null : (this.contentReturn = null, this.pickRegionStart(Ru, Mu(Qu[0], "y", Eu), Qu))
      }
      backToStrip(uu, Ru, yu) {
        if (uu.closest(MK)) return null;
        const Eu = DE(yu);
        for (const Ku of yu.querySelectorAll(MK)) {
          if (Number(Ku.dataset.padTabs) <= 1 || Ku === Eu) continue;
          const Qu = GK(Ku, Ru),
            mu = Qu ? UK(uu, Ku).parentElement : null;
          if (Qu && mu && mu !== yu && yu.contains(mu)) return this.contentReturn = new WeakRef(uu), Qu
        }
        return null
      }
      pickRegionStart(uu, Ru, yu) {
        const Eu = tu(Ru),
          Ku = uu => {
            const Ru = yu.filter((Ru => uu.contains(Ru) && !Ru.closest(MK) && lu(Ru.getBoundingClientRect(), Eu))),
              Ku = DK(Ru.map(eK));
            return Ku >= 0 ? Ru[Ku] : null
          };
        for (const Qu of jR(uu)) {
          const uu = Ku(Qu);
          if (uu) return uu
        }
        for (const Qu of uu.querySelectorAll(MK)) {
          const uu = GK(Qu, yu);
          if (uu) return uu
        }
        return Ku(uu)
      }
    }
    const sK = "[data-pad-default-focus], .Dropdown-option.is-selected",
      tK = ".Dropdown-root.is-open > .Dropdown-menu",
      lK = "[data-pad-no-step-in]",
      gK = "[data-pad-tabs]",
      cK = "[data-pad-press-area]",
      LK = uu => {
        let Ru = uu;
        for (let yu = 0; Ru && yu <= 4; yu++, Ru = Ru.parentElement) {
          const yu = Ru.querySelector(".CircleInfo");
          if (yu) return Ru === uu || Ru.querySelectorAll(JR).length <= 1 ? yu : null;
          if (Ru !== uu && Ru.querySelectorAll(JR).length > 1) return null
        }
        return null
      },
      zK = (uu, Ru, yu) => {
        DR(uu, Ru, yu);
        const Eu = null !== uu && void 0 !== uu && uu.isConnected ? LK(uu) : null,
          Ku = LK(Ru);
        Eu !== Ku && DR(Eu, Ku, Ku ? dR(Ku) : yu, {
          leaveBelow: uu,
          enterBelow: Ru
        })
      },
      FK = uu => uu.getBoundingClientRect(),
      wK = (uu, Ru, yu) => {
        const Eu = new Set(yu);
        for (let Ku = uu; Ku; Ku = Ku === Ru ? null : Ku.parentElement)
          if (Eu.has(Ku)) return Ku;
        return null
      },
      ZK = (uu, Ru) => !uu.root || uu.root === Ru || Ru.matches(tK) && uu.root.contains(Ru);
    const hK = new class {
      constructor() {
        this.focused = null, this.layerKey = null, this.layerRoot = null, this.memory = new iE, this.tabStripNav = new nK, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.confirmPressedOn = null, this.confirmRepeatKey = null, this.confirmRepeated = !1, this.confirmRepeat = (0, pu.e)(Su.w), this.dpadRepeats = new Map(Su.F.map((uu => [uu, (0, pu.e)(Su.I)]))), this.stickRepeat = new Su.c((0, pu.e)(Su.ib)), this.lastRefocusCheckMs = -1 / 0, this.enteredLayerAtMs = 0, this.lastFocusedCentre = null, this.lastActivatedKey = null, this.lastActivated = null, this.lastActivatedAtMs = -1 / 0, this.pendingFocus = null, this.tabOpenWait = null, this.retryMove = null, this.scrollRemainder = {
          x: 0,
          y: 0
        }, this.wasActive = !1, this.layerKind = null, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.listeners = new Set, this.dropdownLayers = new WeakMap, this.dropdownLayerCounter = 0
      }
      install() {
        const uu = ru.d.register({
            name: "focus",
            isActive: () => (0, xu.h)() && "focus" === WK(),
            onFrame: uu => {
              this.onFrame(uu)
            },
            onDeactivate: () => {
              this.deactivate()
            },
            wakePressActs: uu => (0, ru.h)(uu) || uu === (0, Vu.j)("menuConfirm") && lR((0, xu.b)())
          }),
          Ru = (0, YE.m)((uu => {
            const Ru = (0, YE.s)(uu);
            null === uu.memoryKey && this.memory.forget(Ru), Ru === this.layerKey && (this.layerKey = null)
          }));
        let yu = -1 / 0;
        const Eu = mu.c.onFrame((uu => {
            (0, xu.h)() || uu.timestampMs - yu < 100 || (yu = uu.timestampMs, RK())
          })),
          Ku = uu => {
            uu.isTrusted && uu.target instanceof Element && mu.c.getActivePad() && this.noteChosenStop(uu.target)
          };
        return document.addEventListener("click", Ku, !0), () => {
          uu(), Ru(), Eu(), document.removeEventListener("click", Ku, !0), this.deactivate()
        }
      }
      noteChosenStop(uu) {
        var Ru, yu;
        const Eu = RK();
        if (!Eu || !Eu.root.contains(uu)) return;
        const Ku = null !== (Ru = null === (yu = uu.closest(".Dropdown-root")) || void 0 === yu ? void 0 : yu.querySelector(".Dropdown-control")) && void 0 !== Ru ? Ru : uu,
          Qu = wK(Ku, Eu.root, this.getEnabledCandidates(Eu.root));
        if (!Qu) return;
        const mu = (0, YE.s)(Eu.layer);
        mu === this.layerKey && Eu.root === this.layerRoot || this.beginLayer(Eu, mu), this.wasActive ? this.setFocus(Qu, {
          scroll: !1,
          byUser: !0
        }) : (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.focused = Qu, this.lastFocusedCentre = dR(Qu), this.rememberFocus(Qu), this.notify())
      }
      getFocused() {
        return this.focused
      }
      isActive() {
        return this.wasActive
      }
      onChange(uu) {
        return this.listeners.add(uu), () => {
          this.listeners.delete(uu)
        }
      }
      notify() {
        for (const uu of this.listeners) uu()
      }
      deactivate() {
        var uu;
        if (this.wasActive) {
          this.wasActive = !1, this.layerKind = null, this.confirmPressedOn = null, this.retryMove = null, this.pendingFocus = null;
          for (const uu of this.dpadRepeats.values()) uu.reset();
          this.stickRepeat.reset(), null !== (uu = this.focused) && void 0 !== uu && uu.isConnected && zK(this.focused, null, dR(this.focused)), this.notify()
        }
      }
      setFocus(uu) {
        var Ru;
        let {
          scroll: yu = !0,
          byUser: Eu = !1
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (Eu && (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1), uu === this.focused) return;
        const Ku = null !== (Ru = this.focused) && void 0 !== Ru && Ru.isConnected ? this.focused : null;
        if (this.focused = uu, uu) {
          yu && (uu.classList.add(HK), uu.scrollIntoView({
            block: "nearest",
            inline: "nearest",
            behavior: "instant"
          })), Eu && ((uu, Ru) => {
            const yu = Ru.closest("[data-pad-friends-column]");
            yu && uu && !yu.contains(uu) && (sE = new WeakRef(uu))
          })(Ku, uu);
          const Ru = dR(uu);
          this.lastFocusedCentre = Ru, this.movedInLayer && this.rememberFocus(uu), zK(Ku, uu, Ru), "false" === uu.getAttribute("aria-pressed") && uu.closest("[data-pad-select-on-focus]") && IR(uu)
        } else Ku && zK(Ku, null, dR(Ku));
        this.notify()
      }
      rememberFocus(uu) {
        const Ru = this.layerRoot;
        this.layerKey && Ru && this.memory.remember(this.layerKey, uu, Ru, (() => this.getEnabledCandidates(Ru)))
      }
      noteCursorActivation(uu) {
        const Ru = RK();
        if (!Ru || !Ru.root.contains(uu)) return;
        const yu = this.getEnabledCandidates(Ru.root),
          Eu = new Set(yu);
        let Ku = uu;
        for (; Ku && !Eu.has(Ku);) Ku = Ku === Ru.root ? null : Ku.parentElement;
        if (!(Ku instanceof HTMLElement)) return;
        const Qu = (0, YE.s)(Ru.layer);
        this.memory.enter(Qu), this.memory.remember(Qu, Ku, Ru.root, (() => yu))
      }
      notePageEnteredByCursor(uu) {
        return this.memory.enter(uu)
      }
      recallStop(uu, Ru) {
        return this.findRemembered(uu, Ru)
      }
      focusWhenFound(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
          yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.pendingFocus = {
          find: uu,
          untilMs: performance.now() + Ru,
          holdWhile: yu
        }
      }
      getEnabledCandidates(uu) {
        return xR(uu).filter((uu => !VR(uu)))
      }
      onFrame(uu) {
        var Ru;
        const yu = RK();
        if (!yu) return;
        const Eu = null !== (Ru = this.findOpenDropdown(yu)) && void 0 !== Ru ? Ru : yu,
          Ku = performance.now(),
          Qu = (0, YE.s)(Eu.layer);
        if (Qu !== this.layerKey || Eu.root !== this.layerRoot) {
          const Ru = this.focused;
          if (null !== this.layerKey && Eu.root === this.layerRoot && Ru && WR(Ru, Eu.root)) this.continueLayer(Qu, Ru), this.wasActive || this.resume(Eu.root, Ku);
          else {
            const Ru = !this.wasActive && !uu.wokeDevice,
              mu = "death" === this.layerKind || Ru,
              Ju = this.enterLayer(Eu, Qu);
            "popup" !== Eu.layer.kind || Eu !== yu || Ju ? "menu" === Eu.layer.kind && mu && "inGame" === Nu.d.get("gameState") && !(0, ay.e)(3e3) && (this.pressGuardExtends = !0, this.pressGuardUntilMs = Ku + dK.b) : (this.pressGuardExtends = Ru, this.pressGuardUntilMs = Ku + (Ru ? dK.b : mu ? 500 : 250))
          }
        } else this.wasActive || this.resume(Eu.root, Ku);
        if (this.layerKind = Eu.layer.kind, this.wasActive || (this.wasActive = !0, this.notify()), uu.wokeDevice && this.focusPointedStop(Eu.root), this.validateFocus(Eu, Ku), Ku < this.pressGuardUntilMs && this.pressGuardExtends && (uu.wasPressed((0, Vu.j)("menuConfirm")) || uu.wasPressed((0, Vu.j)("menuBack"))) && (this.pressGuardUntilMs = Ku + dK.b), Ku >= this.pressGuardUntilMs && this.handleButtons(uu, Eu)) return;
        const mu = "hybrid" === rK();
        if (mu && (uu => {
            const Ru = EK();
            return Ru !== VK && (VK = Ru, XK.lock()), XK.update(uu, (0, Bu.g)().moveDeadzone)
          })(uu.leftStick)) return Ju = this.getHandoff(), NK = KK(Ju), mK = EK(), void ru.d.handOffHeldInput();
        var Ju;
        this.handleDirections(uu, Eu, Ku, !mu), this.handleScroll(uu, Eu)
      }
      findOpenDropdown(uu) {
        const Ru = uu.root.querySelector(tK);
        if (!Ru || !XR(Ru)) return null;
        let yu = this.dropdownLayers.get(Ru);
        return yu || (this.dropdownLayerCounter++, yu = {
          id: `dropdown-${this.dropdownLayerCounter}`,
          kind: uu.layer.kind,
          getRoot: () => Ru,
          close: () => {
            nR(Ru)
          },
          memoryKey: null
        }, this.dropdownLayers.set(Ru, yu)), {
          layer: yu,
          root: Ru,
          order: uu.order
        }
      }
      focusPointedStop(uu) {
        const Ru = (0, xu.b)(),
          yu = Ru ? document.elementFromPoint(Ru.x, Ru.y) : null;
        if (!yu || !uu.contains(yu)) return;
        const Eu = wK(yu, uu, this.getEnabledCandidates(uu));
        Eu && this.setFocus(Eu, {
          scroll: !1,
          byUser: !0
        })
      }
      enterLayer(uu, Ru) {
        const yu = this.beginLayer(uu, Ru),
          Eu = xK();
        return Eu && ZK(Eu, uu.root) ? (this.takeOver(uu.root, Eu, this.enteredLayerAtMs), yu) : (this.restoreLayerFocus(uu.root, yu), yu)
      }
      beginLayer(uu, Ru) {
        return this.layerKey = Ru, this.layerRoot = uu.root, this.lastActivatedKey = null, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoreOnFocusLoss = !1, this.retryMove = null, this.pendingFocus = null, this.confirmPressedOn = null, this.lastRefocusCheckMs = -1 / 0, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.enteredLayerAtMs = performance.now(), this.lastFocusedCentre = null, this.memory.enter(Ru)
      }
      restoreLayerFocus(uu, Ru) {
        const yu = Ru && this.layerKey ? this.findRemembered(uu, this.layerKey) : null;
        this.restoredFromMemory = null !== yu, this.setFocus(null !== yu && void 0 !== yu ? yu : this.pickInitial(uu, {
          waitForContent: !0
        }))
      }
      continueLayer(uu, Ru) {
        this.layerKey = uu;
        const yu = this.memory.enter(uu);
        this.restoreOnFocusLoss = yu, this.movedInLayer && !yu && this.rememberFocus(Ru)
      }
      resume(uu, Ru) {
        var yu;
        const Eu = xK();
        Eu && ZK(Eu, uu) ? this.takeOver(uu, Eu, Ru) : null !== (yu = this.focused) && void 0 !== yu && yu.isConnected && zK(null, this.focused, dR(this.focused))
      }
      pickPreferred(uu) {
        var Ru;
        return null !== (Ru = this.layerKey ? this.findRemembered(uu, this.layerKey) : null) && void 0 !== Ru ? Ru : this.pickInitial(uu, {
          waitForContent: !0
        })
      }
      findRemembered(uu, Ru) {
        return this.memory.has(Ru) ? this.memory.recall(Ru, this.getEnabledCandidates(uu)) : null
      }
      getHandoff() {
        var uu, Ru, yu;
        const Eu = null !== (uu = this.focused) && void 0 !== uu && uu.isConnected ? this.focused : null,
          Ku = null !== (Ru = this.layerRoot) && void 0 !== Ru && Ru.isConnected ? this.layerRoot : null;
        return {
          point: Eu ? dR(Eu) : null !== (yu = this.lastFocusedCentre) && void 0 !== yu ? yu : this.getLayerStartPoint(Ku),
          element: Eu,
          direction: null
        }
      }
      getLayerStartPoint(uu) {
        if (!uu) return {
          x: window.innerWidth / 2,
          y: window.innerHeight / 2
        };
        const Ru = this.pickInitial(uu, {
          includeDisabled: !0
        });
        return dR(null !== Ru && void 0 !== Ru ? Ru : uu)
      }
      takeOver(uu, Ru, yu) {
        const {
          element: Eu,
          direction: Ku,
          point: Qu
        } = Ru, mu = Eu instanceof HTMLElement && WR(Eu, uu) ? Eu : null;
        if (!Ku) {
          const Ru = this.focused;
          return mu ? this.setFocus(mu, {
            scroll: !1,
            byUser: !0
          }) : this.focusNearest(uu, Qu), void(this.focused && this.focused === Ru && this.focused.isConnected && zK(null, this.focused, dR(this.focused)))
        }
        if (this.dpadRepeats.get(Ku).update(!0, yu), mu) return this.setFocus(mu, {
          scroll: !1,
          byUser: !0
        }), void this.move(uu, Ku, yu, !0);
        const Ju = this.getEnabledCandidates(uu),
          Nu = Ju.map(FK),
          Xu = rE(new DOMRect(Qu.x, Qu.y, 0, 0), Nu, Ku),
          Vu = Xu >= 0 ? Xu : TE(Qu, Nu);
        this.setFocus(Vu >= 0 ? Ju[Vu] : this.pickInitial(uu), {
          byUser: !0
        })
      }
      focusNearest(uu, Ru) {
        const yu = this.getEnabledCandidates(uu),
          Eu = TE(Ru, yu.map(FK));
        this.setFocus(Eu >= 0 ? yu[Eu] : this.pickInitial(uu), {
          byUser: !0
        })
      }
      pickDefault(uu) {
        let {
          includeDisabled: Ru = !1,
          exclude: yu = null
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const Eu = [...uu.querySelectorAll(sK)].filter((Eu => (null === yu || void 0 === yu || !yu.has(Eu)) && (Ru ? TR(Eu, uu) : WR(Eu, uu)))),
          Ku = DK(Eu.map(eK));
        return Ku >= 0 ? Eu[Ku] : null
      }
      pickNewAreaStart(uu, Ru) {
        const yu = [...uu.querySelectorAll(cK)].filter(XR);
        for (const Eu of [...jR(uu), ...yu]) {
          if (Ru.has(Eu)) continue;
          const uu = this.getEnabledCandidates(Eu),
            yu = DK(uu.map(eK));
          if (yu >= 0) return uu[yu]
        }
        return null
      }
      pickInitial(uu) {
        let {
          includeDisabled: Ru = !1,
          waitForContent: yu = !1,
          enteredAtMs: Eu = this.enteredLayerAtMs
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const Ku = this.pickDefault(uu, {
          includeDisabled: Ru
        });
        if (Ku) return Ku;
        const Qu = uu => Ru ? xR(uu) : this.getEnabledCandidates(uu);
        let mu = [];
        for (const Bu of jR(uu))
          if (mu = Qu(Bu), mu.length > 0) break;
        if (0 === mu.length) {
          if (yu && performance.now() - Eu < 1e4 && (uu => {
              for (const Ru of uu.querySelectorAll("[data-pad-initial-area]"))
                if (!NR(Ru, !1)) return !0;
              return !1
            })(uu)) return null;
          mu = Qu(uu)
        }
        const Ju = mu.map(FK),
          Nu = tu(null),
          Xu = mu.filter(((uu, Ru) => lu(Ju[Ru], Nu))),
          Vu = Xu.length > 0 ? Xu : mu,
          ru = DK(Vu.map(eK));
        return ru >= 0 ? Vu[ru] : null
      }
      validateFocus(uu, Ru) {
        if (this.pendingFocus) {
          var yu, Eu;
          const Ku = this.pendingFocus.find();
          if (Ku && WR(Ku, uu.root)) return this.pendingFocus = null, void this.setFocus(Ku, {
            byUser: !0
          });
          Ru > this.pendingFocus.untilMs && (null === (yu = (Eu = this.pendingFocus).holdWhile) || void 0 === yu || !yu.call(Eu)) && (this.pendingFocus = null)
        }
        const Ku = this.focused,
          Qu = !!Ku && WR(Ku, uu.root);
        if (!(!Qu && Ku && Ku === this.lastActivated && Ru - this.lastActivatedAtMs < 5e3 && uu.root.contains(Ku) && XR(Ku) && VR(Ku))) {
          if (!Qu && this.restoreOnFocusLoss && this.layerKey) return this.restoreOnFocusLoss = !1, this.movedInLayer = !1, this.scrolledInLayer = !1, this.enteredLayerAtMs = Ru, void this.restoreLayerFocus(uu.root, !0);
          if ((!Qu || !this.movedInLayer && !this.scrolledInLayer) && !(Ru - this.lastRefocusCheckMs < (Qu ? 200 : 50)))
            if (this.lastRefocusCheckMs = Ru, Qu) {
              const yu = Ru - this.enteredLayerAtMs < 15e3 ? this.pickPreferred(uu.root) : null,
                Eu = null !== yu && void 0 !== yu ? yu : this.restoredFromMemory ? null : this.pickDefault(uu.root);
              Eu && Eu !== Ku && this.setFocus(Eu)
            } else {
              if (this.lastFocusedCentre && this.movedInLayer) {
                const Ru = this.pendingFocus;
                return this.focusNearest(uu.root, this.lastFocusedCentre), void(this.pendingFocus = Ru)
              }
              this.setFocus(this.pickPreferred(uu.root))
            }
        }
      }
      handleButtons(uu, Ru) {
        if (uu.wasPressed((0, Vu.j)("menuToggleCursor"))) return BK(this.getHandoff()), !0;
        if (uu.wasPressed((0, Vu.j)("menuBack"))) {
          const uu = nR(Ru.root);
          return uu ? this.setFocus(uu, {
            byUser: !0
          }) : tE(this, Ru.root) || (cR(Ru.root) ? this.returnToOpener(Ru.root) : this.backToStrip(Ru.root) || yK()), !0
        }
        const yu = (0, Vu.j)("menuConfirm");
        var Eu, Ku;
        uu.wasPressed(yu) && (this.confirmPressedOn = this.focused, this.confirmRepeatKey = null !== (Eu = null === (Ku = this.focused) || void 0 === Ku ? void 0 : Ku.getAttribute("data-pad-repeat")) && void 0 !== Eu ? Eu : null, this.confirmRepeated = uu.wokeDevice, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now()));
        if (uu.wasReleased(yu)) {
          const uu = this.confirmPressedOn;
          if (this.confirmPressedOn = null, uu && !this.confirmRepeated && uu === this.focused && uu.isConnected && !VR(uu)) {
            const yu = uu.matches("[data-pad-tab]") ? uu.closest(gK) : null;
            yu ? this.enterTab(uu, yu, Ru.root, performance.now()) : this.activate(uu)
          }
          return !0
        }
        return this.repeatConfirm(uu, yu), hE(this, uu, Ru)
      }
      repeatConfirm(uu, Ru) {
        const yu = this.confirmPressedOn;
        yu && null !== this.confirmRepeatKey && uu.isHeld(Ru) && (yu === this.focused && yu.isConnected && !VR(yu) && yu.getAttribute("data-pad-repeat") === this.confirmRepeatKey ? yu.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.confirmRepeated = !0, this.activate(yu)) : this.confirmRepeatKey = null)
      }
      backToStrip(uu) {
        const Ru = this.focused;
        if (!(0, Bu.g)().menuBackToCategories) return !1;
        const yu = null !== Ru && void 0 !== Ru && Ru.isConnected ? this.tabStripNav.backToStrip(Ru, this.getEnabledCandidates(uu), uu) : null;
        return yu && this.setFocus(yu, {
          byUser: !0
        }), null !== yu
      }
      returnToOpener(uu) {
        const Ru = this.lastActivatedKey;
        Ru && (this.lastActivatedKey = null, this.focusWhenFound((() => {
          var yu;
          return null !== (yu = this.getEnabledCandidates(uu).find((uu => LR(uu) === Ru))) && void 0 !== yu ? yu : null
        })))
      }
      activate(uu) {
        var Ru;
        if ((0, bK.c)(uu) || tR(uu)) return;
        this.lastActivatedKey = null !== (Ru = LR(uu)) && void 0 !== Ru ? Ru : this.lastActivatedKey, this.lastActivated = uu, this.lastActivatedAtMs = performance.now(), this.rememberFocus(uu);
        const yu = this.layerRoot;
        if (yu) {
          const Ru = new Set(yu.querySelectorAll(sK)),
            Eu = new Set(yu.querySelectorAll(`[data-pad-initial-area], ${cK}`)),
            Ku = this.lastActivatedAtMs;
          this.focusWhenFound((() => {
            var Ku;
            return WR(uu, yu) ? null : null !== (Ku = this.pickDefault(yu, {
              exclude: Ru
            })) && void 0 !== Ku ? Ku : this.pickNewAreaStart(yu, Eu)
          }), 5e3, (() => uu.isConnected && VR(uu) && performance.now() - Ku < 6e4))
        }
        IR(uu), sR(uu)
      }
      handleDirections(uu, Ru, yu, Eu) {
        const Ku = CE(Ru.layer.kind) ? (0, Vu.j)("chat") : null;
        for (const Ju of Su.F) {
          this.dpadRepeats.get(Ju).update(uu.isHeld(Ju), yu) && (Ju !== Ku || uu.wasPressed(Ju)) && this.move(Ru.root, Ju, yu, !0)
        }
        const Qu = Eu ? (0, Su.n)(uu.leftStick, (0, Bu.g)().moveDeadzone) : {
            x: 0,
            y: 0
          },
          mu = this.stickRepeat.update((0, Su.mb)(Qu), yu);
        if (mu && this.move(Ru.root, mu, yu, !0), this.retryMove && yu >= this.retryMove.atMs) {
          const {
            direction: uu
          } = this.retryMove;
          this.retryMove = null, this.move(Ru.root, uu, yu, !1)
        }
      }
      move(uu, Ru, yu, Eu) {
        var Ku;
        let Qu = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.pendingFocus && this.pendingFocus === (null === (Ku = this.tabOpenWait) || void 0 === Ku ? void 0 : Ku.wait) && Ru === this.tabOpenWait.direction) return;
        this.pendingFocus = null;
        const mu = this.focused;
        if (!mu || !mu.isConnected) {
          const Ru = this.pickInitial(uu);
          return void(Ru && this.setFocus(Ru, {
            byUser: !0
          }))
        }
        const Ju = "Left" === Ru || "Right" === Ru,
          Nu = Ju ? (0, bK.c)(mu) : null;
        if (Nu) return void Nu.adjust("Left" === Ru ? -1 : 1);
        const Xu = uu => null !== uu.closest("[data-pad-friends-column]"),
          Vu = Xu(mu),
          ru = FK(mu),
          Bu = Ju || mu.closest(gK) ? null : (uu => {
            const Ru = new Map;
            return yu => {
              const Eu = yu.closest(gK);
              if (!Eu) return !1;
              let Ku = Ru.get(Eu);
              if (void 0 === Ku) {
                const yu = FK(Eu);
                Ku = VE(uu, yu) && (yu.right <= uu.left || yu.left >= uu.right), Ru.set(Eu, Ku)
              }
              return Ku
            }
          })(ru),
          xu = null !== mu.closest(lK),
          Su = this.getEnabledCandidates(uu).filter((uu => uu !== mu && (Ju || Xu(uu) === Vu) && !(null !== Bu && void 0 !== Bu && Bu(uu)) && (xu || !uu.closest(lK)))),
          pu = Su.map(FK),
          Tu = Mu(mu, "y", uu),
          Wu = tu(Tu);
        if (!Qu && !lu(ru, Wu)) {
          const uu = Su.filter(((uu, Ru) => lu(pu[Ru], Wu)));
          if (uu.length > 0) {
            const Ru = {
              x: Wu.left + Wu.width / 2,
              y: Wu.top + Wu.height / 2
            };
            return void this.setFocus(uu[TE(Ru, uu.map(FK))], {
              byUser: !0
            })
          }
        }
        const ju = Ju ? ((uu, Ru, yu) => {
            const Eu = FK(uu),
              Ku = uu.closest(gK),
              Qu = Ku ? FK(Ku) : null;
            return Ru.map(((Ru, mu) => {
              const Ju = yu[mu];
              if (Ju.bottom > Eu.top && Ju.top < Eu.bottom) return !0;
              const Nu = Ru.closest(gK);
              if (Ku && Qu) return Nu !== Ku && (null !== Nu || Ju.bottom <= Qu.top || Ju.top >= Qu.bottom);
              if (Nu) return !VE(Eu, FK(Nu));
              let Xu = uu;
              for (let yu = uu.parentElement; yu && !yu.contains(Ru); yu = yu.parentElement) Xu = yu;
              const Vu = FK(Xu);
              return Ju.right > Vu.left && Ju.left < Vu.right
            }))
          })(mu, Su, pu) : void 0,
          Hu = Ju && !mu.closest(gK) ? (uu => uu.map((uu => !uu.closest(kK))))(Su) : void 0,
          du = ((uu, Ru) => {
            const yu = [];
            for (let Ku = uu; Ku; Ku = Ku.parentElement) yu.push(Ku);
            const Eu = new Map;
            return yu.forEach(((uu, Ru) => {
              Eu.set(uu, yu.length - 1 - Ru)
            })), Ru.map((uu => {
              for (let Ru = uu; Ru; Ru = Ru.parentElement) {
                const uu = Eu.get(Ru);
                if (void 0 !== uu) return uu
              }
              return -1
            }))
          })(mu, Su),
          bu = Ju ? "x" : "y",
          Cu = Mu(mu, bu, uu);
        let ku = rE(ru, pu, Ru, du, ju, Hu);
        if (ku >= 0 && Cu && !Cu.contains(Su[ku])) {
          const uu = Su.flatMap(((uu, Ru) => Cu.contains(uu) ? [Ru] : [])),
            yu = Ru => Ru && uu.map((uu => Ru[uu])),
            Eu = rE(ru, uu.map((uu => pu[uu])), Ru, uu.map((uu => du[uu])), yu(ju), yu(Hu));
          ku = Eu >= 0 ? uu[Eu] : ku
        }
        if (ku >= 0) return void this.moveTo(mu, Su[ku], Su, uu, Ru, Qu);
        if (!Eu) return;
        const eu = "Right" === Ru || "Down" === Ru ? 1 : -1;
        if (Cu && nu(Cu, bu, eu)) {
          const uu = "y" === bu ? Cu.clientHeight : Cu.clientWidth;
          su(Cu, bu, eu * uu * .5), this.retryMove = {
            direction: Ru,
            atMs: yu + 80
          }
        }
      }
      moveTo(uu, Ru, yu, Eu, Ku, Qu) {
        const mu = this.tabStripNav.findTabContent(uu, Ru, yu);
        mu && "true" !== uu.dataset.padSelected ? this.openTab(uu, mu, Eu, Ku) : Qu && !mu || this.setFocus(this.tabStripNav.redirect(uu, Ru, yu, Eu), {
          byUser: !0
        })
      }
      openTab(uu, Ru, yu, Eu) {
        const Ku = Ru.parentElement;
        IR(uu), this.focusWhenFound((() => "true" !== uu.dataset.padSelected ? null : Ru.isConnected ? this.tabStripNav.pickContentStart(Ru, this.getEnabledCandidates(yu), yu) : Ku ? this.tabStripNav.pickReplacedContentStart(uu, Ku, this.getEnabledCandidates(yu), yu) : null), 3e3), this.tabOpenWait = {
          wait: this.pendingFocus,
          direction: Eu
        }
      }
      enterTab(uu, Ru, yu, Eu) {
        this.move(yu, (uu => {
          const Ru = [...uu.querySelectorAll(IK)].filter((Ru => Ru.closest(MK) === uu));
          if (Ru.length >= 2) {
            const uu = Ru[0].getBoundingClientRect(),
              yu = Ru[1].getBoundingClientRect();
            return Math.abs(yu.top - uu.top) > Math.abs(yu.left - uu.left) ? "Right" : "Down"
          }
          const yu = uu.getBoundingClientRect();
          return yu.height > yu.width ? "Right" : "Down"
        })(Ru), Eu, !1, !0), this.focused !== uu || this.pendingFocus || this.activate(uu)
      }
      handleScroll(uu, Ru) {
        const yu = (0, Su.n)(uu.rightStick, .2);
        if (0 === yu.x && 0 === yu.y) return void(this.scrollRemainder = {
          x: 0,
          y: 0
        });
        const Eu = uu.dtMs / 1e3;
        for (const Qu of ["x", "y"]) {
          var Ku;
          const uu = yu[Qu];
          if (0 === uu) continue;
          const mu = null !== (Ku = Mu(this.focused, Qu, Ru.root)) && void 0 !== Ku ? Ku : Gu(Ru.root, Qu);
          if (!mu) continue;
          const Ju = Math.sign(uu) * uu * uu * 1500 * Eu + this.scrollRemainder[Qu],
            Nu = Math.trunc(Ju);
          this.scrollRemainder[Qu] = Ju - Nu, 0 !== Nu && (su(mu, Qu, Nu), this.scrolledInLayer = !0)
        }
      }
    };
    var PK = yu(7952);
    var iK = yu(8450);
    const YK = {
        duration: 80,
        strongMagnitude: .2,
        weakMagnitude: .2,
        needsPadInUse: !1
      },
      oK = {
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
          ...YK,
          minIntervalMs: 1e3
        },
        preview: {
          ...YK,
          minIntervalMs: 0
        }
      };
    const qK = new class {
        constructor(uu) {
          this.deps = uu, this.lastPlayedMs = {}, this.loggedFailure = !1, this.logFailure = uu => {
            this.loggedFailure || (this.loggedFailure = !0, console.warn("Controller vibration failed; further failures are not logged.", uu))
          }
        }
        play(uu, Ru) {
          const yu = oK[uu];
          if (!this.deps.isVibrationOn() || yu.needsPadInUse && !this.deps.isPadInUse()) return !1;
          const Eu = this.lastPlayedMs[uu];
          if (void 0 !== Eu && Ru - Eu < yu.minIntervalMs) return !1;
          const Ku = this.deps.getActuator();
          if (!Ku) return !1;
          this.lastPlayedMs[uu] = Ru;
          const {
            duration: Qu,
            strongMagnitude: mu,
            weakMagnitude: Ju
          } = yu;
          try {
            Ku.playEffect("dual-rumble", {
              duration: Qu,
              strongMagnitude: mu,
              weakMagnitude: Ju
            }).catch(this.logFailure)
          } catch (Nu) {
            this.logFailure(Nu)
          }
          return !0
        }
      }({
        getActuator: () => (uu => {
          const Ru = null === uu || void 0 === uu ? void 0 : uu.vibrationActuator;
          return "function" === typeof(null === Ru || void 0 === Ru ? void 0 : Ru.playEffect) ? Ru : null
        })(mu.c.getActiveGamepad()),
        isVibrationOn: () => (0, Bu.g)().vibration,
        isPadInUse: xu.h
      }),
      OK = uu => {
        qK.play(uu, performance.now())
      };
    var vK = yu(7957),
      aK = yu(2719),
      fK = yu(125),
      uQ = yu(47),
      RQ = yu(640);
    class yQ {
      constructor(uu) {
        this.deps = uu
      }
      check() {
        let uu = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const Ru = this.deps.isPadActive() ? this.deps.getPadFamily() : null;
        if (!Ru) return "skipped";
        const yu = uu ? this.deps.getVisitId() : this.deps.peekVisitId();
        return null === yu || this.deps.readReportedVisitId() === yu ? "skipped" : this.deps.canReport() ? (this.deps.writeReportedVisitId(yu), this.deps.Px(Ru, this.deps.getInputType()), "reported") : "notReady"
      }
    }
    const EQ = "controllerUsageReportedVisit";
    var KQ = yu(1311),
      QQ = yu(1661),
      mQ = yu(624),
      JQ = yu(1400),
      NQ = yu(1224);
    const XQ = uu => ({
        translationKey: `controller:${uu}`
      }),
      VQ = {
        A: "A",
        B: "B",
        X: "X",
        Y: "Y",
        LB: "LB",
        RB: "RB",
        LT: "LT",
        RT: "RT",
        View: XQ("padButtonView"),
        Menu: XQ("padButtonMenu"),
        LS: "L3",
        RS: "R3",
        Up: XQ("padButtonDpadUp"),
        Down: XQ("padButtonDpadDown"),
        Left: XQ("padButtonDpadLeft"),
        Right: XQ("padButtonDpadRight"),
        Home: XQ("padButtonHome"),
        LeftStick: XQ("padButtonLeftStick"),
        RightStick: XQ("padButtonRightStick")
      },
      rQ = {
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
          View: XQ("padButtonCreate"),
          Menu: XQ("padButtonOptions")
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
      BQ = (uu, Ru) => {
        var yu;
        const Eu = null !== (yu = rQ[uu][Ru]) && void 0 !== yu ? yu : VQ[Ru];
        return "string" === typeof Eu ? Eu : (0, Ku.w)(NQ.f.get().getCurrentLanguageCode(), Eu.translationKey)
      },
      xQ = uu => {
        let {
          glyph: Ru,
          family: yu,
          className: Eu
        } = uu;
        const Ku = (0, xu.v)(),
          Qu = null !== yu && void 0 !== yu ? yu : Ku,
          mu = (0, vK.i)(Qu, Ru);
        return (0, zu.jsx)("span", {
          className: Lu()("ControllerGlyph", Eu),
          role: "img",
          "aria-label": BQ(Qu, Ru),
          style: {
            "--pad-glyph-mask": `url(${mu})`,
            "--pad-glyph-aspect": (0, vK.e)(Qu, Ru)
          }
        })
      };
    var SQ = yu(1825);
    const pQ = uu => {
      let {
        action: Ru
      } = uu;
      const {
        t: yu
      } = (0, Ku.E)();
      switch (Ru.kind) {
        case "reload":
          return (0, zu.jsx)("span", {
            children: yu("controller:gameplayReload")
          });
        case "specialAction":
          return null;
        case "customButton":
          return (0, zu.jsx)(SQ.d, {
            text: Ru.description ? [{
              icon: Ru.icon
            }, ` ${Ru.description}`] : [{
              icon: Ru.icon
            }]
          });
        case "touchButton":
          return (0, zu.jsx)(SQ.d, {
            text: Ru.label
          })
      }
    };
    var TQ = yu(8456);
    const WQ = uu => {
      let {
        hold: Ru
      } = uu;
      return (0, zu.jsx)("div", {
        className: "DropStackFillTrack",
        style: {
          "--pad-drop-stack-hold": `${Ru.holdMs}ms`
        },
        children: (0, zu.jsx)("div", {
          className: "DropStackFillBar"
        })
      }, Ru.id)
    };
    var jQ = yu(8482),
      HQ = yu(8486),
      dQ = yu(8489),
      bQ = yu(8475);
    const CQ = () => {
        const {
          gameState: uu
        } = (0, Nu.j)(["gameState"]), Ru = (0, xu.u)(), [Eu, Ku] = (0, gu.useState)(!1), [Qu, mu] = (0, gu.useState)(!1);
        return (0, gu.useEffect)((() => {
          "inGame" === uu && Ku(!0)
        }), [uu]), (0, gu.useEffect)((() => {
          if (!Eu) return;
          let uu = null,
            Ru = !1;
          return (mQ.q ? Promise.all([yu.e(69), yu.e(259), yu.e(199), yu.e(217), yu.e(216), yu.e(84)]).then((() => yu(40117))).then((uu => uu.startWasmPadGameplay)) : Promise.all([yu.e(69), yu.e(226), yu.e(225), yu.e(94), yu.e(72), yu.e(71), yu.e(70), yu.e(218), yu.e(182), yu.e(222), yu.e(74), yu.e(196), yu.e(215), yu.e(219), yu.e(93), yu.e(83), yu.e(113), yu.e(234), yu.e(73), yu.e(112), yu.e(155), yu.e(217), yu.e(188)]).then((() => yu(40246))).then((uu => uu.startPadGameplay))).then((yu => {
            Ru || (uu = yu())
          })).catch((uu => {
            console.error("Pad gameplay failed to load", uu), Ru || mu(!0)
          })), () => {
            var yu;
            Ru = !0, null === (yu = uu) || void 0 === yu || yu()
          }
        }), [Eu]), (0, gu.useEffect)((() => {
          Qu && Ru && (mu(!1), KQ.NotificationProvider.showPromptPopup({
            title: "controller:gameplayLoadFailedTitle",
            subtitle: "controller:gameplayLoadFailedSubtitle",
            confirmText: "settingsMenu:reloadPagePopupConfirm",
            confirmTooltip: "",
            cancelText: "general:cancel",
            cancelTooltip: ""
          }).getResult().then((uu => {
            !0 === uu && (0, QQ.reloadBloxd)()
          })))
        }), [Qu, Ru]), (0, zu.jsxs)(zu.Fragment, {
          children: [(0, zu.jsx)(kQ, {}), (0, zu.jsx)(eQ, {}), (0, zu.jsx)(AQ, {})]
        })
      },
      kQ = () => {
        const {
          t: uu
        } = (0, Ku.E)(), Ru = (0, xu.u)(), {
          gameState: yu,
          isUiHidden: Eu
        } = (0, Nu.j)(["gameState", "isUiHidden"]), {
          hideButtonHints: Qu
        } = (0, Bu.m)(), mu = (0, TQ.j)(), Ju = (0, TQ.k)(), [Xu, ru] = (0, gu.useState)(dQ.c);
        return (0, JQ.e)(bQ.m, ru), !Ru || Qu || Eu || "inGame" !== yu || !mu && !Xu ? null : (0, zu.jsxs)("div", {
          className: "PadActionHint SmallTextBold",
          children: [mu && (0, zu.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, zu.jsx)(xQ, {
              glyph: (0, Vu.j)("actionButton")
            }), (0, zu.jsx)(pQ, {
              action: mu
            }), Ju && (0, zu.jsx)("span", {
              className: "PadActionHintMore",
              children: uu("controller:gameplayActionWheelHint")
            })]
          }), Xu && (0, zu.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, zu.jsx)(xQ, {
              glyph: (0, Vu.j)("pickBlock")
            }), (0, zu.jsx)("span", {
              children: uu("controller:gameplayPickBlock")
            })]
          })]
        })
      },
      eQ = () => {
        const {
          t: uu
        } = (0, Ku.E)(), Ru = (0, xu.u)(), {
          gameState: yu,
          isUiHidden: Eu
        } = (0, Nu.j)(["gameState", "isUiHidden"]), [Qu, mu] = (0, gu.useState)(jQ.d);
        return (0, JQ.e)(bQ.l, mu), Ru && !Eu && "inGame" === yu && Qu ? (0, zu.jsxs)("div", {
          className: "PadDropStackFill SmallTextBold",
          children: [(0, zu.jsx)("span", {
            children: uu("controller:gameplayDropStack")
          }), (0, zu.jsx)(WQ, {
            hold: Qu
          })]
        }) : null
      },
      AQ = () => {
        const {
          t: uu
        } = (0, Ku.E)(), Ru = (0, xu.u)(), {
          gameState: yu,
          isUiHidden: Eu
        } = (0, Nu.j)(["gameState", "isUiHidden"]), {
          hideButtonHints: Qu
        } = (0, Bu.m)(), [mu, Ju] = (0, gu.useState)(HQ.b);
        return (0, JQ.e)(bQ.h, Ju), Ru && !Eu && "inGame" === yu && mu ? (0, zu.jsxs)("div", {
          className: "PadAttackLatchedHint SmallTextBold",
          children: [!Qu && (0, zu.jsx)(xQ, {
            glyph: (0, Vu.j)("attack")
          }), (0, zu.jsx)("span", {
            children: uu("controller:gameplayAttackLatched")
          })]
        }) : null
      };
    var DQ = yu(8495),
      MQ = yu(1878),
      IQ = yu(2335),
      GQ = yu(7935);
    const UQ = uu => uu && !(0, DQ.c)(MQ.b.get("shopInfo")),
      nQ = () => {
        const uu = "inGame" === (0, Nu.j)(["gameState"]).gameState;
        return (0, IQ.e)("shopInfo", (() => {
          (0, GQ.g)(UQ(uu))
        })), (0, gu.useEffect)((() => {
          (0, GQ.g)(UQ(uu))
        }), [uu]), null
      },
      sQ = () => {
        const {
          t: uu
        } = (0, Ku.E)(), {
          hideButtonHints: Ru
        } = (0, Bu.m)();
        (0, xu.v)();
        const yu = (0, Gy.j)();
        return (0, gu.useEffect)((() => (() => {
          const uu = ru.d.register({
              name: "inventory",
              isActive: Oy.isActive,
              onFrame: Oy.onFrame,
              onDeactivate: Oy.onDeactivate,
              wakePressActs: Oy.wakePressActs
            }),
            Ru = uu => {
              Oy.noteRealPointer(uu), Oy.shouldBlockRealPointer(uu) && uu.stopPropagation()
            };
          for (const mu of vy) window.addEventListener(mu, Ru, !0);
          const yu = (0, hR.l)((() => {
              "inventory" !== ru.d.getActiveConsumerName() && Oy.forgetSurface()
            })),
            Eu = uu => {
              const Ru = uu.target;
              (0, xu.h)() && au(Ru) && Ru.closest(xy) && (0, hR.j)() && (0, hR.r)(Ru)
            };
          document.addEventListener("focusout", Eu, !0);
          const {
            invalidate: Ku,
            onScroll: Qu
          } = Oy.targets;
          return document.addEventListener("scroll", Qu, !0), window.addEventListener("resize", Ku), () => {
            uu(), yu();
            for (const uu of vy) window.removeEventListener(uu, Ru, !0);
            document.removeEventListener("scroll", Qu, !0), document.removeEventListener("focusout", Eu, !0), window.removeEventListener("resize", Ku), Oy.targets.disconnect()
          }
        })()), []), (0, zu.jsxs)(zu.Fragment, {
          children: [(0, zu.jsx)(hu, {
            placer: Oy.ring,
            className: "InventorySlotCursorRing"
          }), yu.showing && !Ru && (0, zu.jsx)("div", {
            className: "InventorySlotCursorHints SmallTextBold",
            children: ZR(yu).map((Ru => {
              let {
                actions: Eu,
                labelKey: Ku
              } = Ru;
              return (0, zu.jsxs)("div", {
                className: "InventorySlotCursorHint",
                children: [Eu.map((uu => (0, zu.jsx)(xQ, {
                  glyph: (0, Vu.j)(uu)
                }, uu))), (0, zu.jsx)("span", {
                  children: uu(`controller:${Ku}`)
                }), "inventoryDrop" === Ku && yu.dropStackHold && (0, zu.jsx)(WQ, {
                  hold: yu.dropStackHold
                })]
              }, Ku)
            }))
          })]
        })
      },
      tQ = [{
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
      lQ = uu => Array.from(uu).map((uu => ({
        type: "char",
        char: uu,
        width: 1
      }))),
      gQ = function(uu) {
        return {
          type: "command",
          command: uu,
          width: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
        }
      },
      cQ = [gQ("page", 2), gQ("otherPage"), gQ("caretLeft"), gQ("space", 3), gQ("caretRight"), gQ("close", 1.5), gQ("submit", 1.5)],
      LQ = [gQ("page", 2), gQ("otherPage"), gQ("caretLeft"), gQ("space", 2), gQ("caretRight"), gQ("newline"), gQ("close", 1.5), gQ("submit", 1.5)],
      zQ = [
        [...lQ("1234567890"), gQ("backspace")], lQ("qwertyuiop/"), lQ("asdfghjkl'?"), [gQ("shift", 2), ...lQ("zxcvbnm,.")]
      ],
      FQ = [
        [...lQ("1234567890"), gQ("backspace")], lQ("!@#$%^&*()/"), lQ('-_=+[]{};:"'), lQ("~`|\\<>'\u20ac\xa3,.")
      ],
      wQ = {
        letters: zQ,
        accents: [
          [...lQ("1234567890"), gQ("backspace")], lQ("\xe1\xe9\xed\xf3\xfa\xe0\xe8\xec\xf2\xf9\xf1"), lQ("\xe2\xea\xee\xf4\xfb\xe4\xeb\xef\xf6\xfc\xe7"), [gQ("shift", 2), ...lQ("\xe3\xf5\xdf\u0153\u011f\u015f\u0131\xbf\xa1")]
        ],
        symbols: FQ
      },
      ZQ = new Set(["de", "es", "fr", "it", "nl", "pt", "pt-BR", "tr", "vi"]),
      hQ = (uu, Ru) => "letters" === uu ? Ru ? {
        page: "accents",
        otherPage: "symbols"
      } : {
        page: "symbols",
        otherPage: "accents"
      } : {
        page: "letters",
        otherPage: "accents" === uu ? "symbols" : "accents"
      },
      PQ = function(uu, Ru) {
        const yu = ((uu, Ru) => [...wQ[uu], Ru ? LQ : cQ])(uu, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]);
        if (0 === Ru) return yu;
        const Eu = Math.min(2, iQ(yu[0]) / Ru);
        return [Array.from({
          length: Ru
        }, ((uu, Ru) => ({
          type: "phrase",
          phraseIndex: Ru,
          width: Eu
        }))), ...yu]
      },
      iQ = uu => uu.reduce(((uu, Ru) => uu + Ru.width), 0),
      YQ = uu => Math.max(...uu.map(iQ)),
      oQ = (uu, Ru) => {
        const yu = uu[Ru.row];
        let Eu = (YQ(uu) - iQ(yu)) / 2;
        for (let Ku = 0; Ku < Ru.col; Ku++) Eu += yu[Ku].width;
        return Eu + yu[Ru.col].width / 2
      },
      qQ = (uu, Ru, yu) => {
        let Eu = 0,
          Ku = 1 / 0;
        for (let Qu = 0; Qu < uu[Ru].length; Qu++) {
          const mu = Math.abs(oQ(uu, {
            row: Ru,
            col: Qu
          }) - yu);
          mu < Ku - 1e-9 && (Eu = Qu, Ku = mu)
        }
        return Eu
      },
      OQ = (uu, Ru) => {
        const yu = Math.max(0, Math.min(uu.length - 1, Ru.row));
        return {
          row: yu,
          col: Math.max(0, Math.min(uu[yu].length - 1, Ru.col))
        }
      },
      vQ = (uu, Ru, yu) => "once" === uu && Ru - yu <= 400 ? "caps" : "off" === uu ? "once" : "off",
      aQ = (uu, Ru) => "once" === uu && (uu => uu.toLowerCase() !== uu.toUpperCase())(Ru) ? "off" : uu,
      fQ = (uu, Ru, yu) => {
        if ("symbols" === Ru || "off" === yu) return uu;
        const Eu = uu.toUpperCase();
        return 1 === Eu.length ? Eu : uu
      };
    var um = yu(8403);
    const Rm = ["controller:keyboardPhraseGg", "controller:keyboardPhraseHi", "controller:keyboardPhraseThanks", "controller:keyboardPhraseGl", "controller:keyboardPhraseBrb", "controller:keyboardPhraseYes", "controller:keyboardPhraseNo", "controller:keyboardPhraseHelp"];
    const ym = new class {
        constructor() {
          this.lastSendMs = -1 / 0
        }
        claim(uu) {
          return !(uu - this.lastSendMs < 2e3) && (this.lastSendMs = uu, !0)
        }
      },
      Em = {
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
      Km = ["pJ", "nameTag"],
      Qm = uu => {
        const Ru = uu.target instanceof HTMLTextAreaElement && !Km.includes(uu.kind);
        return PQ(uu.page, "chat" === uu.kind ? Rm.length : 0, Ru)
      },
      mm = uu => {
        const Ru = uu.getBoundingClientRect(),
          yu = window.innerHeight,
          Eu = Ru.top + Ru.height / 2 < yu / 2 ? "bottom" : "top",
          Ku = "bottom" === Eu ? yu - Ru.bottom - 6 : Ru.top - 6;
        return {
          placement: Eu,
          maxHeightPx: Math.min(.46 * yu, Math.max(.3 * yu, Ku))
        }
      },
      Jm = uu => {
        (0, HE.g)(uu) ? (0, HE.c)().close(): (hK.noteChosenStop(uu), uu.blur())
      };
    class Nm {
      constructor(uu) {
        this.host = uu, this.lastShiftPressMs = -1 / 0, this.phraseTexts = [], this.phrasesFill = !1
      }
      setPhraseRow(uu, Ru) {
        this.phraseTexts = uu, this.phrasesFill = Ru
      }
      pressKey(uu) {
        const Ru = this.host.getState(),
          yu = Qm(Ru),
          Eu = yu[uu.row][uu.col];
        this.host.setState({
          ...Ru,
          focus: uu,
          preferredX: oQ(yu, uu)
        }), "char" === Eu.type ? this.typeChar(Eu.char) : "command" === Eu.type ? this.runCommand(Eu.command) : this.sendPhrase(Eu.phraseIndex)
      }
      runCommand(uu) {
        const Ru = this.host.getState();
        switch (uu) {
          case "backspace":
            QR(Ru.target);
            break;
          case "space":
            KR(Ru.target, " ");
            break;
          case "newline":
            KR(Ru.target, "\n");
            break;
          case "caretLeft":
            mR(Ru.target, -1);
            break;
          case "caretRight":
            mR(Ru.target, 1);
            break;
          case "shift": {
            const uu = performance.now();
            this.host.setState({
              ...Ru,
              shift: vQ(Ru.shift, uu, this.lastShiftPressMs)
            }), this.lastShiftPressMs = uu;
            break
          }
          case "page":
          case "otherPage": {
            const yu = hQ(Ru.page, Ru.accentsFirst)[uu];
            this.host.setState({
              ...Ru,
              page: yu,
              focus: OQ(Qm({
                ...Ru,
                page: yu
              }), Ru.focus)
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
            (0, HE.g)(Ru.target) && (0, HE.c)().selectNextChannel()
        }
      }
      submit() {
        var uu, Ru;
        const {
          target: yu
        } = this.host.getState();
        this.host.hide(), (0, HE.g)(yu) ? (0, HE.c)().submit() : (hK.noteChosenStop(yu), null === (uu = (Ru = (0, HE.f)(yu)).submit) || void 0 === uu || uu.call(Ru), document.activeElement === yu && yu.blur())
      }
      close() {
        const {
          target: uu
        } = this.host.getState();
        this.host.hide(), Jm(uu)
      }
      typeChar(uu) {
        const {
          target: Ru,
          page: yu,
          shift: Eu
        } = this.host.getState();
        KR(Ru, fQ(uu, yu, Eu)), this.host.setState({
          ...this.host.getState(),
          shift: aQ(Eu, uu)
        })
      }
      sendPhrase(uu) {
        if (this.phrasesFill) {
          const {
            target: Ru
          } = this.host.getState(), yu = this.phraseTexts[uu];
          yu && (Ru.setSelectionRange(0, Ru.value.length), KR(Ru, yu))
        } else ym.claim(performance.now()) && (this.host.hide(), (0, HE.c)().sendLine(this.phraseTexts[uu]))
      }
    }
    const Xm = {
        initialDelayMs: 380,
        intervalMs: 85
      },
      Vm = {
        initialDelayMs: 400,
        intervalMs: 55
      };
    class rm {
      constructor(uu, Ru) {
        this.host = uu, this.editor = Ru, this.lastDirection = null, this.navRepeat = new Su.c((0, pu.e)(Xm)), this.commandRepeats = new Map(tQ.filter((uu => {
          let {
            repeats: Ru
          } = uu;
          return Ru
        })).map((uu => {
          let {
            command: Ru
          } = uu;
          return [Ru, (0, pu.e)(Vm)]
        })))
      }
      reset() {
        this.navRepeat.reset();
        for (const uu of this.commandRepeats.values()) uu.reset()
      }
      onVisibleFrame(uu) {
        const Ru = performance.now();
        for (const {
            command: Ku,
            action: Qu
          }
          of tQ) {
          const yu = (0, Vu.j)(Qu),
            Eu = this.commandRepeats.get(Ku);
          if ((Eu ? Eu.update(uu.isHeld(yu), Ru) : uu.wasPressed(yu)) && (this.editor.runCommand(Ku), !this.host.getState().visible)) return
        }
        if (uu.wasPressed((0, Vu.j)("keyboardType")) && (this.editor.pressKey(this.host.getState().focus), !this.host.getState().visible)) return;
        const yu = this.readNavDirection(uu);
        this.lastDirection = yu;
        const Eu = this.navRepeat.update(yu, Ru);
        Eu && this.navigate(Eu)
      }
      onHiddenFrame(uu, Ru) {
        var yu;
        if (uu.wasPressed((0, Vu.j)("keyboardClose"))) return void Jm(Ru);
        const Eu = (0, Vu.j)("keyboardType");
        if (uu.wasPressed(Eu)) return ru.d.consumeButton(Eu), void this.host.open(Ru);
        const Ku = this.readNavDirection(uu),
          Qu = null !== Ku && Ku !== this.lastDirection;
        if (this.lastDirection = Ku, !Qu || (0, HE.g)(Ru)) return;
        const mu = (null === (yu = RK()) || void 0 === yu ? void 0 : yu.root.contains(Ru)) || null !== Ru.closest(".EntireInventoryWrapper");
        Jm(Ru), mu && ru.d.handOffHeldInput()
      }
      navigate(uu) {
        const Ru = this.host.getState();
        if ("Up" === uu && 0 === Ru.focus.row && "chat" === Ru.kind) return (0, HE.c)().stepHistory(), void this.host.setState({
          ...Ru
        });
        const yu = ((uu, Ru, yu, Eu) => {
          if ("Left" === yu || "Right" === yu) {
            const Eu = uu[Ru.row].length,
              Ku = (Ru.col + ("Right" === yu ? 1 : -1) + Eu) % Eu,
              Qu = {
                row: Ru.row,
                col: Ku
              };
            return {
              pos: Qu,
              preferredX: oQ(uu, Qu)
            }
          }
          const Ku = (Ru.row + ("Down" === yu ? 1 : -1) + uu.length) % uu.length;
          return {
            pos: {
              row: Ku,
              col: qQ(uu, Ku, Eu)
            },
            preferredX: Eu
          }
        })(Qm(Ru), Ru.focus, uu, Ru.preferredX);
        this.host.setState({
          ...Ru,
          focus: yu.pos,
          preferredX: yu.preferredX
        })
      }
      readNavDirection(uu) {
        for (const Ru of Su.F)
          if (uu.isHeld(Ru)) return Ru;
        return (0, Su.mb)((0, Su.n)(uu.leftStick, (0, Bu.g)().moveDeadzone))
      }
    }
    const Bm = ["Up", "Down", "Left", "Right"],
      xm = new Set(["CapsLock", "Control", "Fn", "FnLock", "Hyper", "NumLock", "ScrollLock", "Shift", "Super"]);
    const Sm = new class {
      constructor() {
        this.state = Em, this.listeners = new Set, this.ownedField = null, this.pendingChatInput = null, this.pendingChatTimeout = 0, this.savedInputMode = null, this.editor = new Nm(this), this.padInput = new rm(this, this.editor)
      }
      getState() {
        return this.state
      }
      setState(uu) {
        const Ru = uu.visible !== this.state.visible;
        this.state = uu;
        for (const yu of this.listeners) yu();
        Ru && Xu.k.Op(Pu.d, uu.visible)
      }
      subscribe(uu) {
        return this.listeners.add(uu), () => {
          this.listeners.delete(uu)
        }
      }
      install() {
        const uu = ru.d.register({
            name: "keyboard",
            isActive: () => this.state.visible || au(document.activeElement),
            onFrame: uu => {
              this.onFrame(uu)
            },
            onDeactivate: () => {
              this.padInput.reset()
            },
            wakePressActs: uu => Bm.includes(uu) || !this.state.visible && uu === (0, Vu.j)("keyboardType")
          }),
          Ru = uu => {
            const Ru = uu.target;
            au(Ru) && (Ru === this.pendingChatInput || (0, xu.h)() ? this.open(Ru) : this.state.visible && Ru !== this.state.target && (this.ownedField = null, this.hide()))
          },
          yu = () => {
            setTimeout((() => {
              this.releaseLostField()
            }), 0)
          },
          Eu = uu => {
            uu.isTrusted && this.state.visible && (uu => !uu.repeat && !xm.has(uu.key) && !(0, um.c)(uu.key) && !/^(Audio|Media|Browser|Launch|Gamepad)/.test(uu.key))(uu) && this.hide()
          },
          Ku = () => {
            this.state.visible && this.setState({
              ...this.state,
              ...mm(this.state.target)
            })
          };
        document.addEventListener("focusin", Ru, !0), document.addEventListener("focusout", yu, !0), window.addEventListener("keydown", Eu, !0), window.addEventListener("resize", Ku);
        const Qu = Xu.k.subscribe(bQ.b, (() => {
            this.openChat()
          })),
          mu = Xu.k.subscribe(Pu.g, (uu => {
            this.openForField(uu)
          }));
        return () => {
          uu(), document.removeEventListener("focusin", Ru, !0), document.removeEventListener("focusout", yu, !0), window.removeEventListener("keydown", Eu, !0), window.removeEventListener("resize", Ku), Xu.k.unsubscribe(Qu), Xu.k.unsubscribe(mu), this.clearPendingChat(), this.hide(), this.ownedField = null
        }
      }
      openChat() {
        const uu = (0, HE.c)();
        uu ? document.activeElement !== uu.input ? (this.clearPendingChat(), this.pendingChatInput = uu.input, this.pendingChatTimeout = window.setTimeout((() => {
          this.pendingChatInput = null
        }), 250), uu.open()) : this.open(uu.input) : console.warn("controllerOpenChat with no chat mounted")
      }
      openForField(uu) {
        au(uu) ? (document.activeElement !== uu && uu.focus(), document.activeElement === uu && this.open(uu)) : console.warn("controllerOpenKeyboard needs an editable input or textarea", uu)
      }
      open(uu) {
        var Ru;
        if (this.clearPendingChat(), this.ownedField = uu, this.state.visible && this.state.target === uu) return;
        this.restoreInputMode(), (uu => {
          fu(uu) && 0 === uu.selectionStart && 0 === uu.selectionEnd && uu.setSelectionRange(uu.value.length, uu.value.length)
        })(uu), this.savedInputMode = uu.getAttribute("inputmode"), uu.setAttribute("inputmode", "none");
        const yu = {
          ...Em,
          visible: !0,
          target: uu,
          kind: (0, HE.g)(uu) ? "chat" : null !== (Ru = (0, HE.f)(uu).kind) && void 0 !== Ru ? Ru : null,
          accentsFirst: (Eu = NQ.f.get().getCurrentLanguageCode(), ZQ.has(Eu)),
          ...mm(uu)
        };
        var Eu;
        const Ku = Qm(yu),
          Qu = ((uu, Ru) => {
            for (let yu = 0; yu < uu.length; yu++) {
              const Eu = uu[yu].findIndex((uu => "char" === uu.type && uu.char === Ru));
              if (-1 !== Eu) return {
                row: yu,
                col: Eu
              }
            }
            return null
          })(Ku, "q");
        this.padInput.reset(), this.setState({
          ...yu,
          focus: Qu,
          preferredX: oQ(Ku, Qu)
        })
      }
      hide() {
        this.state.visible && (this.restoreInputMode(), this.padInput.reset(), this.setState(Em))
      }
      onFrame(uu) {
        if (this.releaseLostField()) return;
        const Ru = document.activeElement;
        this.state.visible ? this.padInput.onVisibleFrame(uu) : au(Ru) && this.padInput.onHiddenFrame(uu, Ru)
      }
      releaseLostField() {
        const uu = this.ownedField;
        return !(null === uu || uu.isConnected && document.activeElement === uu) && (this.ownedField = null, this.hide(), !0)
      }
      clearPendingChat() {
        window.clearTimeout(this.pendingChatTimeout), this.pendingChatInput = null
      }
      restoreInputMode() {
        const {
          target: uu
        } = this.state;
        uu && (null === this.savedInputMode ? uu.removeAttribute("inputmode") : uu.setAttribute("inputmode", this.savedInputMode), this.savedInputMode = null)
      }
    };
    var pm = yu(8505);
    const Tm = new Map(tQ.map((uu => {
        let {
          command: Ru,
          action: yu
        } = uu;
        return [Ru, yu]
      }))),
      Wm = {
        letters: "ABC",
        accents: "\xe0\xe9",
        symbols: "&123"
      },
      jm = {
        chat: "controller:keyboardTargetChat",
        sign: "controller:keyboardTargetSign",
        nameTag: "controller:keyboardTargetNameTag",
        book: "controller:keyboardTargetBook",
        pJ: "controller:keyboardTargetBookTitle"
      },
      Hm = uu => {
        const Ru = (() => {
          const [, uu] = (0, gu.useReducer)((uu => uu + 1), 0);
          return uu
        })();
        (0, gu.useEffect)((() => {
          if (!uu) return;
          const yu = ["input", "select", "selectionchange", "keyup", "pointerup"];
          for (const Ku of yu) uu.addEventListener(Ku, Ru);
          document.addEventListener("selectionchange", Ru);
          const Eu = new MutationObserver(Ru);
          return Eu.observe(uu, {
            attributeFilter: ["placeholder"]
          }), () => {
            Eu.disconnect();
            for (const Eu of yu) uu.removeEventListener(Eu, Ru);
            document.removeEventListener("selectionchange", Ru)
          }
        }), [uu, Ru])
      },
      dm = uu => {
        uu.preventDefault()
      },
      bm = uu => {
        "mouse" !== uu.pointerType && uu.preventDefault()
      },
      Cm = () => {
        var uu;
        const {
          t: Ru
        } = (0, Ku.E)(), yu = (() => {
          const [uu, Ru] = (0, gu.useState)(Sm.getState());
          return (0, gu.useEffect)((() => Sm.subscribe((() => {
            Ru(Sm.getState())
          }))), []), uu
        })(), Eu = (0, xu.u)(), Qu = (0, gu.useRef)(null);
        (0, Bu.m)(), (0, xu.v)(), (0, gu.useEffect)((() => {
          const uu = Sm.install(),
            Ru = null;
          return () => {
            uu(), null === Ru || void 0 === Ru || Ru()
          }
        }), []);
        const mu = (0, gu.useMemo)((() => Rm.map((uu => Ru(uu)))), [Ru]),
          Ju = yu.visible && "chat" === yu.kind ? yu.target : null;
        Hm(Ju);
        const Nu = null !== (uu = null === Ju || void 0 === Ju ? void 0 : Ju.value) && void 0 !== uu ? uu : "",
          Xu = ((uu, Ru, yu) => {
            if (!uu.startsWith("/")) return [];
            const Eu = [];
            for (let Ku = Ru.length - 1; Ku >= 0 && Eu.length < yu; Ku--) {
              const yu = Ru[Ku].trim();
              yu.startsWith(uu) && yu !== uu && !Eu.includes(yu) && Eu.push(yu)
            }
            return Eu
          })(Nu, Nu.startsWith("/") ? (0, pm.d)() : [], Rm.length),
          ru = Nu.startsWith("/"),
          Su = ru ? Rm.map(((uu, Ru) => {
            var yu;
            return null !== (yu = Xu[Ru]) && void 0 !== yu ? yu : ""
          })) : mu;
        if ((0, gu.useEffect)((() => {
            Sm.editor.setPhraseRow(Su, ru)
          })), (0, gu.useEffect)((() => {
            const uu = Qu.current;
            if (uu) return uu.addEventListener("touchstart", dm, {
              passive: !1
            }), () => {
              uu.removeEventListener("touchstart", dm)
            }
          }), [yu.visible]), !yu.visible) return null;
        const pu = Qm(yu),
          Tu = YQ(pu),
          Wu = uu => "char" === uu.type ? fQ(uu.char, yu.page, yu.shift) : "phrase" === uu.type ? Su[uu.phraseIndex] : (uu => {
            switch (uu) {
              case "backspace":
                return "\u232b";
              case "shift":
                return "caps" === yu.shift ? "\u21ea" : "\u21e7";
              case "page":
              case "otherPage":
                return Wm[hQ(yu.page, yu.accentsFirst)[uu]];
              case "space":
                return Ru("controller:keyboardSpace");
              case "caretLeft":
                return "\u2190";
              case "caretRight":
                return "\u2192";
              case "newline":
                return "\u21b5";
              case "submit":
                return Ru("chat" === yu.kind ? "controller:keyboardSend" : "controller:keyboardDone");
              case "close":
                return "\u2715";
              case "channel":
                return "\u21c4"
            }
          })(uu.command),
          ju = uu => {
            Sm.editor.pressKey(uu)
          };
        return (0, zu.jsxs)("div", {
          ref: Qu,
          className: Lu()(HE.n, "top" === yu.placement ? "PadKeyboardTop" : "PadKeyboardBottom", {
            PadKeyboardMultiline: yu.target instanceof HTMLTextAreaElement
          }),
          style: {
            "--pad-keyboard-rows": pu.length,
            "--pad-keyboard-height": `${yu.maxHeightPx}px`
          },
          onPointerDown: bm,
          onMouseDown: dm,
          children: [(0, zu.jsx)(km, {
            target: yu.target,
            label: yu.kind ? Ru(jm[yu.kind]) : yu.target.placeholder || Ru("controller:keyboardTargetText")
          }), (0, zu.jsx)("div", {
            className: "PadKeyboardRows",
            children: pu.map(((uu, Ru) => (0, zu.jsx)("div", {
              className: Lu()("PadKeyboardRow", {
                PadKeyboardPhraseRow: "phrase" === uu[0].type
              }),
              children: uu.map(((uu, Ku) => {
                const Qu = Eu && yu.focus.row === Ru && yu.focus.col === Ku,
                  mu = "command" === uu.type ? Tm.get(uu.command) : void 0;
                return (0, zu.jsx)("div", {
                  className: "PadKeyboardKeySlot",
                  style: {
                    width: uu.width / Tu * 100 + "%"
                  },
                  children: (0, zu.jsxs)("div", {
                    className: Lu()("PadKeyboardKey", {
                      PadKeyboardKeyFocused: Qu,
                      PadKeyboardKeyCommand: "command" === uu.type,
                      PadKeyboardKeyPhrase: "phrase" === uu.type,
                      PadKeyboardKeyActive: "command" === uu.type && "shift" === uu.command && "off" !== yu.shift,
                      PadKeyboardKeySubmit: "command" === uu.type && "submit" === uu.command
                    }),
                    role: "button",
                    onClick: () => {
                      ju({
                        row: Ru,
                        col: Ku
                      })
                    },
                    onTouchEnd: uu => {
                      var yu, Eu;
                      uu.preventDefault(), yu = uu.changedTouches[0], Eu = uu.currentTarget.getBoundingClientRect(), yu && yu.clientX >= Eu.left && yu.clientX <= Eu.right && yu.clientY >= Eu.top && yu.clientY <= Eu.bottom && ju({
                        row: Ru,
                        col: Ku
                      })
                    },
                    children: [(0, zu.jsx)("span", {
                      className: "PadKeyboardKeyLabel",
                      children: Wu(uu)
                    }), Eu && mu && (0, zu.jsx)(xQ, {
                      className: "PadKeyboardKeyGlyph",
                      glyph: (0, Vu.j)(mu)
                    })]
                  })
                }, Ku)
              }))
            }, Ru)))
          })]
        })
      },
      km = uu => {
        let {
          target: Ru,
          label: yu
        } = uu;
        Hm(Ru);
        const Eu = (0, gu.useRef)(null),
          Ku = (0, gu.useRef)(null),
          Qu = Ru instanceof HTMLTextAreaElement;
        (0, gu.useLayoutEffect)((() => {
          const uu = Eu.current,
            Ru = Ku.current;
          Qu ? uu.scrollTop = Ru.offsetTop - uu.clientHeight / 2 : uu.scrollLeft = Ru.offsetLeft - uu.clientWidth / 2
        }));
        const {
          value: mu,
          start: Ju,
          end: Nu
        } = uR(Ru), Xu = "password" === Ru.type ? "\u2022".repeat(mu.length) : mu;
        return (0, zu.jsxs)("div", {
          className: "PadKeyboardPreview",
          children: [(0, zu.jsx)("div", {
            className: "PadKeyboardPreviewLabel SmallTextBold",
            children: yu
          }), (0, zu.jsxs)("div", {
            ref: Eu,
            className: Lu()("PadKeyboardPreviewText", {
              PadKeyboardPreviewMultiline: Qu
            }),
            children: [(0, zu.jsx)("span", {
              children: Xu.slice(0, Ju)
            }), (0, zu.jsx)("span", {
              ref: Ku,
              className: "PadKeyboardCaret"
            }), Ju !== Nu && (0, zu.jsx)("span", {
              className: "PadKeyboardPreviewSelection",
              children: Xu.slice(Ju, Nu)
            }), (0, zu.jsx)("span", {
              children: Xu.slice(Nu)
            }), 0 === Xu.length && Ru.placeholder && Ru.placeholder !== yu && (0, zu.jsx)("span", {
              className: "PadKeyboardPreviewPlaceholder",
              children: Ru.placeholder
            })]
          })]
        })
      };
    var em = yu(1354),
      Am = yu(3220);
    const Dm = function() {
        for (var uu = arguments.length, Ru = new Array(uu), yu = 0; yu < uu; yu++) Ru[yu] = arguments[yu];
        return Ru.map(Vu.j)
      },
      Mm = (uu, Ru) => {
        const yu = lE(uu);
        return yu ? [{
          glyphs: [yu],
          labelKey: Ru
        }] : []
      },
      Im = [".BottomMiddleElements", ".BottomLeftElements > *", ".BottomRightElements > *", ".MiddleTextBottom .MiddleText"],
      Gm = "--pad-hint-bar-clearance",
      Um = "[data-pad-hint-bar-avoid]",
      nm = uu => {
        const Ru = [];
        for (const yu of uu) XR(yu) && Ru.push(yu.getBoundingClientRect());
        return Ru
      },
      sm = uu => {
        if (!uu) return null;
        const Ru = RK(),
          yu = Ru ? nm(((uu, Ru) => {
            const yu = uu.closest(Um);
            return yu ? [yu] : ("popup" === Ru ? document : uu).querySelectorAll(Um)
          })(Ru.root, Ru.layer.kind)) : [],
          Eu = !Ru || Ru.root.hasAttribute("data-pad-shows-hud");
        if (((0, Am.h)(null === Ru || void 0 === Ru ? void 0 : Ru.layer.kind, (0, Am.j)()) || Eu) && yu.push(...nm(document.querySelectorAll(Im.join(",")))), 0 === yu.length) return null;
        const {
          width: Ku,
          height: Qu
        } = uu.getBoundingClientRect(), mu = window.innerHeight - 8, Ju = (0, Am.m)(mu, {
          width: Ku,
          height: Qu
        }, window.innerWidth / 2, yu, 8);
        return Ju === mu ? null : Math.round(window.innerHeight - Ju)
      },
      tm = uu => {
        const Ru = document.documentElement.style,
          yu = uu ? `${Math.round(window.innerHeight-uu.getBoundingClientRect().top)}px` : "";
        Ru.getPropertyValue(Gm) !== yu && (yu ? Ru.setProperty(Gm, yu) : Ru.removeProperty(Gm))
      },
      lm = () => {
        const {
          t: uu
        } = (0, Ku.E)(), {
          hideButtonHints: Ru
        } = (0, Bu.m)(), yu = (0, xu.u)(), [Eu, Qu] = (0, gu.useState)(!1), [mu, Xu] = (0, gu.useState)([]), [pu, Tu] = (0, gu.useState)(null), Wu = (0, gu.useRef)(null), ju = (0, gu.useRef)(null);
        (0, JQ.e)(Pu.d, (uu => {
          Qu(uu)
        })), (0, JQ.e)(Am.k, (() => {
          var uu;
          null === (uu = ju.current) || void 0 === uu || uu.call(ju)
        }));
        const Hu = yu && !Ru && !Eu;
        return (0, gu.useEffect)((() => {
          if (!Hu) return;
          let uu = null;
          const Ru = () => {
            const Ru = (() => {
                var uu;
                const Ru = ru.d.getActiveConsumerName(),
                  yu = (0, Am.f)();
                if (yu) {
                  const uu = (0, Vu.j)(yu),
                    Ru = "emoteWheel" === yu && "wheel" === (0, Bu.g)().emoteButton || !(0, Su.K)(ru.d.getLastFrame().values, uu) ? {
                      glyphs: Dm("menuConfirm"),
                      labelKey: "controller:menusSelect"
                    } : {
                      glyphs: [uu],
                      labelKey: "controller:wheelReleaseToPick"
                    };
                  return [{
                    glyphs: [(0, Vu.u)(uu)],
                    labelKey: "controller:wheelChoose"
                  }, Ru, {
                    glyphs: Dm("menuBack"),
                    labelKey: "controller:wheelClose"
                  }]
                }
                const Eu = RK();
                if (!Eu || "focus" !== Ru && "cursor" !== Ru) return (0, Am.b)(Vu.j);
                const Ku = [],
                  Qu = {
                    glyphs: Dm("menuBack"),
                    labelKey: "controller:menusBack"
                  },
                  mu = gR(Eu.root),
                  Ju = mu ? !VR(mu) : Boolean(Eu.layer.close),
                  Xu = !mu && Eu.layer.closeLabelKey ? Eu.layer.closeLabelKey : Qu.labelKey,
                  xu = Ju ? [{
                    ...Qu,
                    labelKey: Xu
                  }] : [],
                  pu = CE(Eu.layer.kind) ? [{
                    glyphs: Dm("chat"),
                    labelKey: "controller:menusQuickChat"
                  }] : [];
                if ("cursor" === Ru) return Ku.push({
                  glyphs: Dm("menuConfirm"),
                  labelKey: "controller:menusClick"
                }), Ku.push({
                  glyphs: Dm("menuSecondary"),
                  labelKey: "controller:menusRightClick"
                }), Ku.push(...xu), Ku.push(...pu), Ku.push({
                  glyphs: ["RightStick"],
                  labelKey: "controller:menusScroll"
                }), TK() && Ku.push({
                  glyphs: Dm("menuToggleCursor"),
                  labelKey: "controller:menusFocusMode"
                }), Ku;
                const Tu = hK.getFocused();
                Tu && (0, bK.c)(Tu) ? Ku.push({
                  glyphs: ["Left", "Right"],
                  labelKey: "controller:menusAdjust"
                }) : Tu && tR(Tu) ? Ku.push({
                  glyphs: [],
                  labelKey: "controller:menusUseMouse"
                }) : Ku.push({
                  glyphs: Dm("menuConfirm"),
                  labelKey: "controller:menusSelect"
                });
                const Wu = Tu ? null === (uu = KE(Tu)) || void 0 === uu ? void 0 : uu.dataset.padSecondary : void 0;
                Wu && Ku.push({
                  glyphs: Dm("menuSecondary"),
                  labelKey: Wu
                }), Ku.push(...null !== Tu && void 0 !== Tu && Tu.closest("[data-pad-friends-column]") ? [Qu] : xu), Ku.push(...pu);
                const ju = "home" === Eu.layer.kind;
                LE(Eu.root) || !DE(Eu.root) && !zE(Eu) ? ju && Ku.push({
                  glyphs: Dm("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusRows"
                }) : Ku.push({
                  glyphs: Dm("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusTabs"
                }), ju && (Ku.push(...Mm("inventory", "controller:menusFriends")), Wu || Ku.push({
                  glyphs: Dm("menuSecondary"),
                  labelKey: "controller:menusSearch"
                }), Ku.push(...Mm("pause", "controller:menusSettings")), Ku.push(...Mm("leaderboard", "controller:menusNotifications")));
                const Hu = Nu.d.get("openEverythingMenuName");
                return "inGame" === Nu.d.get("gameState") && "popup" !== Eu.layer.kind && null !== Hu && ((0, uE.l)(Hu) ? Ku.push(...Mm("leaderboard", "controller:menusClose")) : Hu !== fy.s.LOBBY_LEADERBOARD && Ku.push(...Mm("leaderboard", "controller:menusLobby"))), Ku.push({
                  glyphs: Dm("menuToggleCursor"),
                  labelKey: "controller:menusCursorMode"
                }), Ku
              })(),
              yu = sm(Wu.current),
              Eu = ((uu, Ru) => `${uu.map((uu=>`${uu.glyphs.join("+")}:${uu.labelKey}`)).join("|")}@${Ru}`)(Ru, yu);
            Eu !== uu && (uu = Eu, (0, Ju.unstable_batchedUpdates)((() => {
              Xu(Ru), Tu(yu)
            }))), tm(Wu.current)
          };
          Ru(), ju.current = Ru;
          const yu = requestAnimationFrame(Ru),
            Eu = setInterval(Ru, 150);
          return () => {
            ju.current = null, cancelAnimationFrame(yu), clearInterval(Eu), tm(null)
          }
        }), [Hu]), (0, gu.useLayoutEffect)((() => {
          if (!Hu) return;
          if (0 === mu.length) return void tm(null);
          const uu = sm(Wu.current);
          uu === pu ? tm(Wu.current) : Tu(uu)
        }), [Hu, mu, pu]), Hu && 0 !== mu.length ? (0, zu.jsx)("div", {
          ref: Wu,
          className: "PadButtonHintBar SmallTextBold",
          style: null === pu ? void 0 : {
            bottom: pu
          },
          "aria-hidden": !0,
          children: mu.map((Ru => (0, zu.jsxs)("div", {
            className: "PadButtonHint",
            children: [Ru.glyphs.map((uu => (0, zu.jsx)(xQ, {
              glyph: uu,
              className: "PadButtonHintGlyph"
            }, uu))), (0, zu.jsx)("span", {
              children: uu(Ru.labelKey)
            })]
          }, Ru.labelKey)))
        }) : null
      },
      gm = [JR, "label", "[data-pad-slider]"].join(","),
      cm = "data-pad-cursor-probe",
      Lm = uu => {
        var Ru;
        const yu = (uu => {
          const Ru = [];
          for (let Eu = uu; Eu && Eu !== document.body && Eu !== document.documentElement && (Ru.push(Eu), !(Ru.length > 8)); Eu = Eu.parentElement);
          const yu = document.documentElement.classList.contains(xu.o) ? Ru[Ru.length - 1] : void 0;
          null === yu || void 0 === yu || yu.setAttribute(cm, "");
          try {
            return Ru.map((uu => ({
              element: uu,
              cursor: getComputedStyle(uu).cursor
            })))
          } finally {
            null === yu || void 0 === yu || yu.removeAttribute(cm)
          }
        })(uu);
        if ("pointer" !== (null === (Ru = yu[0]) || void 0 === Ru ? void 0 : Ru.cursor)) return null;
        let Eu = 0;
        for (; Eu + 1 < yu.length && "pointer" === yu[Eu + 1].cursor;) Eu++;
        return yu[Eu].element
      },
      zm = (uu, Ru, yu, Eu) => {
        const Ku = Eu.root.contains(uu) ? Eu.root : null;
        for (let Qu = uu; Qu && Qu !== document.body && Qu !== document.documentElement; Qu = Qu.parentElement) {
          if (Qu instanceof HTMLElement && Du(Qu, Ru) && nu(Qu, Ru, yu)) return Qu;
          if (Qu === Ku) break
        }
        return "home" === Eu.layer.kind || "gamePage" === Eu.layer.kind ? ((uu, Ru) => {
          const yu = document.scrollingElement;
          return yu instanceof HTMLElement && ![document.documentElement, document.body].some((Ru => {
            const yu = getComputedStyle(Ru),
              Eu = "y" === uu ? yu.overflowY : yu.overflowX;
            return "hidden" === Eu || "clip" === Eu
          })) && nu(yu, uu, Ru) ? yu : null
        })(Ru, yu) : null
      };
    const Fm = new class {
        constructor() {
          this.state = {
            x: 0,
            y: 0,
            speedRamp: 0
          }, this.hasPosition = !1, this.active = !1, this.hidden = !1, this.hit = null, this.interactive = null, this.magnet = null, this.lastHitTestMs = -1 / 0, this.press = null, this.draggedSlider = null, this.repeatStop = null, this.repeatKey = null, this.repeated = !1, this.confirmRepeat = (0, pu.e)(Su.w), this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.layerRoot = null, this.layerOrder = 0, this.layerPoints = new WeakMap, this.page = null, this.pendingPageStart = null
        }
        install() {
          const uu = ru.d.register({
              name: "cursor",
              isActive: () => "cursor" === WK(),
              onFrame: uu => {
                this.onFrame(uu)
              },
              onDeactivate: () => {
                this.deactivate()
              },
              wakePressActs: uu => (0, ru.h)(uu) || uu === (0, Vu.j)("menuConfirm") && lR((0, xu.b)())
            }),
            Ru = (0, YE.m)((uu => {
              const Ru = uu.getRoot();
              Ru && this.layerPoints.delete(Ru), Ru === this.layerRoot && (this.layerRoot = null)
            })),
            yu = Xu.k.subscribe("appManagerUpdated|activeInputDevice", (uu => {
              "gamepad" !== uu && this.active && !this.hidden && this.hide()
            }));
          return () => {
            uu(), Ru(), Xu.k.unsubscribe(yu), this.deactivate()
          }
        }
        getHighlighted() {
          return this.isVisible() ? this.interactive : null
        }
        isVisible() {
          return this.active && !this.hidden && (0, xu.h)()
        }
        getPoint() {
          return {
            x: this.state.x,
            y: this.state.y
          }
        }
        hide() {
          this.hidden = !0, this.cancelPress(), this.secondaryArmed = !1, this.clearHover(), this.Op()
        }
        activate(uu) {
          this.active = !0, this.hidden = !1;
          const Ru = xK();
          !Ru || Ru.root && Ru.root !== uu.root ? this.jumpTo(this.hasPosition ? this.getPoint() : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          }) : (this.setLayer(uu), this.jumpTo(Ru.point))
        }
        jumpTo(uu) {
          this.state = {
            x: uu.x,
            y: uu.y,
            speedRamp: 0
          }, this.hasPosition = !0, this.lastHitTestMs = -1 / 0
        }
        deactivate() {
          this.active && (this.active = !1, this.page = null, this.pendingPageStart = null, this.cancelPress(), this.clearHover(), this.draggedSlider = null, this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.Op())
        }
        onFrame(uu) {
          const Ru = RK();
          if (!Ru) return;
          if (this.active || this.activate(Ru), this.followPage(Ru)) return;
          this.followLayer(Ru);
          const yu = uu.wokeDevice ? (0, xu.b)() : null;
          if (yu && this.jumpTo(yu), !(0, xu.h)()) return void this.hide();
          const Eu = (0, Vu.j)("menuToggleCursor");
          if (uu.wasPressed(Eu)) return ru.d.consumeButton(Eu), void BK(this.getHandoff(null));
          if (this.handBackToFocus(uu)) return;
          const Ku = (0, Vu.j)("menuConfirm"),
            Qu = (0, Vu.j)("menuSecondary");
          if (uu.wasPressed((0, Vu.j)("menuBack"))) return nR(Ru.root) || cR(Ru.root) || yK(), void this.Op();
          if (ZE(null, uu, Ru)) return uu.wasReleased(Ku) && this.press && (this.updateHit(!1), this.updateConfirm(uu, Ku)), void this.Op();
          if (document.pointerLockElement) return void this.hide();
          const mu = jK() ? {
              x: 0,
              y: 0
            } : (uu => {
              const Ru = (uu, Ru) => (uu ? 1 : 0) - (Ru ? 1 : 0);
              return {
                x: Ru(uu.isHeld("Right"), uu.isHeld("Left")),
                y: Ru(uu.isHeld("Down"), uu.isHeld("Up"))
              }
            })(uu),
            Ju = (0, Bu.g)().moveDeadzone,
            Nu = ((uu, Ru) => {
              const yu = (0, Su.n)(uu, du(Ru));
              return Math.hypot(yu.x, yu.y)
            })(uu.leftStick, Ju) > 0 || 0 !== mu.x || 0 !== mu.y;
          if (this.hidden) {
            const Ru = uu.wasPressed(Ku),
              yu = uu.wasPressed(Qu);
            if (!Nu && !ku(uu.rightStick) && !Ru && !yu && !uu.wokeDevice) return void this.Op();
            if (this.hidden = !1, this.updateHit(!1), Ru || yu) return Ru && (this.press = {
              kind: "ignored"
            }, uu.wokeDevice && this.beginRepeat()), this.secondaryArmed = !1, void this.Op()
          }
          this.movePendingPageStart(Nu);
          const Xu = this.getPoint();
          this.state = Cu(this.state, {
            stick: uu.leftStick,
            moveDeadzone: Ju,
            dpad: mu,
            dtMs: uu.dtMs,
            cursorSpeedPercent: (0, Bu.g)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: this.getAssistContext()
          });
          const pu = this.state.x !== Xu.x || this.state.y !== Xu.y,
            Tu = [Ku, Qu].some((Ru => uu.wasPressed(Ru) || uu.wasReleased(Ru)));
          (pu || Tu || performance.now() - this.lastHitTestMs >= 100) && this.updateHit(pu), this.updateConfirm(uu, Ku), this.updateSecondary(uu, Qu), this.updateScroll(uu, Ru), this.Op()
        }
        followPage(uu) {
          const Ru = "home" === uu.layer.kind || "gamePage" === uu.layer.kind,
            yu = this.page;
          if (this.page = Ru ? {
              key: (0, YE.s)(uu.layer),
              root: uu.root
            } : null, !this.page || !yu || yu.root !== uu.root || yu.key === this.page.key) return !1;
          if (this.cancelPress(), this.secondaryArmed = !1, this.setLayer(uu), "hybrid" === rK()) return NK = null, mK = null, XK.lock(), !0;
          const {
            key: Eu
          } = this.page;
          return this.pendingPageStart = {
            root: uu.root,
            key: Eu,
            returning: hK.notePageEnteredByCursor(Eu),
            enteredAtMs: performance.now()
          }, !1
        }
        movePendingPageStart(uu) {
          const Ru = this.pendingPageStart;
          if (!Ru) return;
          if (uu || Ru.root !== this.layerRoot) return void(this.pendingPageStart = null);
          const yu = Ru.returning ? hK.recallStop(Ru.root, Ru.key) : null;
          if (!yu && Ru.returning && performance.now() - Ru.enteredAtMs < 1e3) return;
          const Eu = null !== yu && void 0 !== yu ? yu : hK.pickInitial(Ru.root, {
            includeDisabled: !0,
            waitForContent: !0,
            enteredAtMs: Ru.enteredAtMs
          });
          Eu && (this.pendingPageStart = null, this.jumpTo(dR(Eu)))
        }
        setLayer(uu) {
          this.layerRoot = uu.root, this.layerOrder = uu.order
        }
        followLayer(uu) {
          var Ru;
          if (uu.root === this.layerRoot) return;
          null !== (Ru = this.layerRoot) && void 0 !== Ru && Ru.isConnected && this.layerPoints.set(this.layerRoot, this.getPoint()), this.cancelPress(), this.draggedSlider = null, this.secondaryArmed = !1;
          const yu = this.layerPoints.get(uu.root),
            Eu = yu && uu.order <= this.layerOrder ? yu : hK.getLayerStartPoint(uu.root);
          this.setLayer(uu), this.jumpTo(Eu)
        }
        getHandoff(uu) {
          var Ru;
          return {
            point: this.getPoint(),
            element: null !== (Ru = this.interactive) && void 0 !== Ru ? Ru : this.findDraggedSliderNearby(),
            direction: uu
          }
        }
        findDraggedSliderNearby() {
          const uu = this.draggedSlider;
          if (null === uu || void 0 === uu || !uu.isConnected) return null;
          const Ru = uu.getBoundingClientRect(),
            {
              y: yu
            } = this.getPoint();
          return yu >= Ru.top - 40 && yu <= Ru.bottom + 40 ? uu : null
        }
        handBackToFocus(uu) {
          if (!jK()) return !1;
          const Ru = Su.F.find((Ru => uu.wasPressed(Ru)));
          return !!Ru && (yu = this.getHandoff(Ru), NK = KK(yu), mK = null, XK.lock(), ru.d.handOffHeldInput(), !0);
          var yu
        }
        getAssistContext() {
          const uu = this.interactive;
          if (null === uu || void 0 === uu || !uu.isConnected) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const Ru = uu.getBoundingClientRect();
          if (Ru.width > .4 * window.innerWidth || Ru.height > .4 * window.innerHeight) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const yu = (0, Bu.g)().cursorMagnetism && !(0, iu.c)(uu) && !uu.closest("[data-pad-slider]"),
            Eu = this.magnet && this.magnet !== uu && this.magnet.isConnected ? this.magnet.getBoundingClientRect() : Ru;
          return {
            overInteractive: !0,
            magnetTarget: yu ? {
              x: Eu.left + Eu.width / 2,
              y: Eu.top + Eu.height / 2
            } : null
          }
        }
        updateHit(uu) {
          this.lastHitTestMs = performance.now();
          const Ru = this.getPoint(),
            yu = document.elementFromPoint(Ru.x, Ru.y),
            Eu = yu && !(0, Wu.g)(yu) && (uu => {
              var Ru;
              const yu = RK();
              return !(yu && !yu.root.contains(uu) && !uu.closest(".tooltip-container")) || !(null !== (Ru = document.getElementById("root")) && void 0 !== Ru && Ru.contains(uu))
            })(yu) ? yu : null;
          if (Eu !== this.hit) return DR(this.hit, Eu, Ru), this.hit = Eu, void this.setInteractive(Eu ? (uu => {
            const Ru = uu.closest(gm);
            if (Ru) {
              var yu, Eu;
              const uu = null !== (yu = null === (Eu = Ru.parentElement) || void 0 === Eu ? void 0 : Eu.closest("[data-pad-focusable]")) && void 0 !== yu ? yu : Ru;
              return VR(uu) ? {
                element: null,
                magnet: null
              } : {
                element: uu,
                magnet: Ru
              }
            }
            const Ku = Lm(uu);
            return {
              element: Ku,
              magnet: Ku
            }
          })(Eu) : {
            element: null,
            magnet: null
          });
          uu && Eu && DR(Eu, Eu, Ru)
        }
        setInteractive(uu) {
          let {
            element: Ru,
            magnet: yu
          } = uu;
          this.interactive = Ru, this.magnet = yu
        }
        clearHover() {
          this.hit && DR(this.hit, null, this.getPoint()), this.hit = null, this.setInteractive({
            element: null,
            magnet: null
          })
        }
        beginPress() {
          const uu = this.hit;
          if (!uu || tR(uu)) return {
            kind: "ignored"
          };
          const Ru = (0, bK.c)(uu),
            yu = uu.closest("[data-pad-slider]");
          return Ru && yu ? {
            kind: "slider",
            slider: yu,
            adjuster: Ru
          } : (kR(uu, this.getPoint()), {
            kind: "pointer",
            target: uu
          })
        }
        applySliderFraction(uu) {
          var Ru;
          const yu = uu.slider.getBoundingClientRect(),
            Eu = yu.height > yu.width,
            Ku = null === (Ru = uu.slider.querySelector("[data-pad-slider-handle]")) || void 0 === Ru ? void 0 : Ru.getBoundingClientRect(),
            Qu = Ku ? Eu ? Ku.height : Ku.width : 0,
            mu = (Eu ? yu.height : yu.width) - Qu;
          if (mu <= 0) return;
          const Ju = Eu ? yu.bottom - Qu / 2 - this.state.y : this.state.x - yu.left - Qu / 2;
          uu.adjuster.setFraction(Math.max(0, Math.min(1, Ju / mu)))
        }
        updateConfirm(uu, Ru) {
          uu.wasPressed(Ru) && (this.press = uu.wokeDevice ? {
            kind: "ignored"
          } : this.beginPress(), this.draggedSlider = "slider" === this.press.kind ? this.press.slider : null, this.beginRepeat());
          const yu = this.press;
          if (!yu) return;
          if (uu.isHeld(Ru)) return "slider" === yu.kind && this.applySliderFraction(yu), void this.updateRepeat();
          this.press = null;
          const Eu = this.repeated;
          if (this.endRepeat(), !uu.wasReleased(Ru)) return void this.endPressWithoutClick(yu);
          const Ku = this.getPoint(),
            Qu = this.hit;
          if ("slider" === yu.kind && yu.adjuster.endDrag(), "pointer" === yu.kind) {
            const uu = null !== Qu && void 0 !== Qu ? Qu : yu.target.isConnected ? yu.target : null;
            uu && eR(uu, Ku);
            const Ru = Qu && yu.target.isConnected && !Eu ? ((uu, Ru) => {
              for (let yu = uu; yu; yu = yu.parentElement)
                if (yu.contains(Ru)) return yu;
              return null
            })(yu.target, Qu) : null;
            Ru && (hK.noteCursorActivation(Ru), (0, Wu.c)(Ru, new MouseEvent("click", bR(Ku, 0, 0))), sR(Ru), HR(Ru) && MR(Ru))
          }
        }
        beginRepeat() {
          var uu, Ru, yu;
          const Eu = null !== (uu = null === (Ru = this.hit) || void 0 === Ru ? void 0 : Ru.closest("[data-pad-repeat]")) && void 0 !== uu ? uu : null;
          this.repeatStop = Eu, this.repeatKey = null !== (yu = null === Eu || void 0 === Eu ? void 0 : Eu.getAttribute("data-pad-repeat")) && void 0 !== yu ? yu : null, this.repeated = !1, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now())
        }
        updateRepeat() {
          const uu = this.repeatStop;
          if (!uu) return;
          const Ru = this.hit;
          uu.isConnected && !VR(uu) && uu.getAttribute("data-pad-repeat") === this.repeatKey && Ru && uu.contains(Ru) ? uu.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.repeated = !0, hK.noteCursorActivation(uu), (0, Wu.c)(uu, new MouseEvent("click", bR(this.getPoint(), 0, 0)))) : this.repeatStop = null
        }
        endRepeat() {
          this.repeatStop = null, this.repeated = !1
        }
        endPressWithoutClick(uu) {
          "slider" === uu.kind && uu.adjuster.endDrag(), "pointer" === uu.kind && uu.target.isConnected && eR(uu.target, this.getPoint())
        }
        cancelPress() {
          this.endRepeat(), this.press && (this.endPressWithoutClick(this.press), this.press = null)
        }
        updateSecondary(uu, Ru) {
          uu.wasPressed(Ru) && (this.secondaryArmed = null !== this.hit), this.secondaryArmed && !uu.isHeld(Ru) && (this.secondaryArmed = !1, uu.wasReleased(Ru) && this.hit && AR(this.hit, this.getPoint(), 2))
        }
        updateScroll(uu, Ru) {
          const yu = eu(uu.rightStick, uu.dtMs);
          if (0 === yu.x && 0 === yu.y) return void(this.scrollRemainder = {
            x: 0,
            y: 0
          });
          this.scrollRemainder = {
            x: this.scrollRemainder.x + yu.x,
            y: this.scrollRemainder.y + yu.y
          };
          const Eu = Math.trunc(this.scrollRemainder.x),
            Ku = Math.trunc(this.scrollRemainder.y);
          this.scrollRemainder = {
            x: this.scrollRemainder.x - Eu,
            y: this.scrollRemainder.y - Ku
          };
          const Qu = this.hit;
          if (!Qu) return;
          let mu = !1;
          if (0 !== Ku) {
            const uu = zm(Qu, "y", Ku > 0 ? 1 : -1, Ru);
            uu && (uu.scrollBy({
              top: Ku,
              behavior: "instant"
            }), mu = !0)
          }
          if (0 !== Eu) {
            const uu = zm(Qu, "x", Eu > 0 ? 1 : -1, Ru);
            uu && (uu.scrollBy({
              left: Eu,
              behavior: "instant"
            }), mu = !0)
          }
          mu && (this.lastHitTestMs = -1 / 0)
        }
        Op() {
          FR.set({
            x: this.state.x,
            y: this.state.y,
            visible: this.isVisible(),
            pressed: null !== this.press && "ignored" !== this.press.kind
          })
        }
      },
      wm = () => {
        const uu = (0, gu.useMemo)((() => new Zu), []),
          Ru = (0, xu.u)();
        return (0, gu.useEffect)((() => {
          if (!Ru) return;
          let yu = 0,
            Eu = {
              of: null,
              atMs: 0,
              list: []
            };
          const Ku = document.getElementsByClassName(HK),
            Qu = uu => {
              for (const Ru of [...Ku]) Ru !== uu && Ru.classList.remove(HK)
            },
            mu = () => {
              var Ru;
              yu = requestAnimationFrame(mu);
              const Ku = (() => {
                const uu = hK.getFocused();
                if (hK.isActive() && null !== uu && void 0 !== uu && uu.isConnected) return uu;
                const Ru = Fm.getHighlighted();
                return null !== Ru && void 0 !== Ru && Ru.isConnected ? Ru : null
              })();
              Qu(Ku), Ku && !Ku.classList.contains(HK) && Ku.classList.add(HK);
              const Ju = null !== (Ru = null === Ku || void 0 === Ku ? void 0 : Ku.closest("[data-pad-reticle-box]")) && void 0 !== Ru ? Ru : Ku;
              uu.show(Ju ? ((uu, Ru) => {
                let yu = uu.left,
                  Eu = uu.top,
                  Ku = uu.right,
                  Qu = uu.bottom;
                for (const mu of Ru) {
                  if (!mu) continue;
                  const uu = tu(mu);
                  yu = Math.max(yu, uu.left), Eu = Math.max(Eu, uu.top), Ku = Math.min(Ku, uu.right), Qu = Math.min(Qu, uu.bottom)
                }
                return Ku <= yu || Qu <= Eu ? null : {
                  left: yu,
                  top: Eu,
                  width: Ku - yu,
                  height: Qu - Eu
                }
              })(Ju.getBoundingClientRect(), (uu => {
                const Ru = performance.now();
                return (Eu.of !== uu || Ru - Eu.atMs > 500) && (Eu = {
                  of: uu,
                  atMs: Ru,
                  list: [Mu(uu, "y"), Mu(uu, "x")]
                }), Eu.list
              })(Ju)) : null)
            };
          return yu = requestAnimationFrame(mu), () => {
            cancelAnimationFrame(yu), Qu(null), uu.hide()
          }
        }), [Ru, uu]), (0, zu.jsx)(hu, {
          placer: uu,
          className: "PadFocusRing"
        })
      },
      Zm = (uu, Ru) => {
        uu.style.transform = `translate3d(${Ru.x}px, ${Ru.y}px, 0)`, uu.classList.toggle("Visible", Ru.visible), uu.classList.toggle("Pressed", Ru.pressed)
      },
      hm = () => {
        const uu = (0, gu.useRef)(null);
        return (0, gu.useEffect)((() => {
          const Ru = FR.subscribe((Ru => {
            uu.current && Zm(uu.current, Ru)
          }));
          return uu.current && Zm(uu.current, FR.get()), Ru
        }), []), (0, zu.jsx)("div", {
          ref: uu,
          className: "PadCursorView",
          "aria-hidden": "true",
          children: (0, zu.jsx)("div", {
            className: "PadCursorGlyph",
            children: "+"
          })
        })
      },
      Pm = "#ncmp__modal.ncmp__active",
      im = [{
        id: "nitro-consent-banner",
        find: () => document.querySelector(Pm) ? null : document.querySelector("#ncmp__tool > .ncmp__banner.ncmp__active"),
        startSelectors: ["[data-ncmp-cmd='reject']", "[data-ncmp-cmd='showModal']"]
      }, {
        id: "nitro-consent-modal",
        find: () => document.querySelector(Pm),
        startSelectors: ["[data-ncmp-cmd='reject']"]
      }, {
        id: "google-consent",
        find: () => document.querySelector(".fc-consent-root"),
        startSelectors: [".fc-cta-do-not-consent", ".fc-cta-manage-options"]
      }],
      Ym = "PadOverThirdParty",
      om = new Set(im.map((uu => uu.id))),
      qm = () => {
        const uu = im.map((uu => {
            let {
              id: Ru,
              find: yu,
              startSelectors: Eu
            } = uu;
            return (0, YE.o)({
              id: Ru,
              kind: "popup",
              getRoot: () => {
                const uu = yu(),
                  Ru = uu ? ((uu, Ru) => {
                    var yu;
                    for (const Eu of Ru) {
                      const Ru = uu.querySelector(Eu);
                      if (Ru) return Ru
                    }
                    return null !== (yu = [...uu.querySelectorAll("button")].find((uu => !uu.matches(".fc-cta-consent, [data-ncmp-cmd='save']")))) && void 0 !== yu ? yu : null
                  })(uu, Eu) : null;
                if (uu && Ru && !Ru.hasAttribute("data-pad-default-focus")) {
                  for (const Ru of uu.querySelectorAll("[data-pad-default-focus]")) Ru.removeAttribute("data-pad-default-focus");
                  for (const Ru of uu.querySelectorAll("[data-pad-hint-bar-avoid]")) Ru.removeAttribute("data-pad-hint-bar-avoid");
                  Ru.setAttribute("data-pad-default-focus", ""), ((uu, Ru) => {
                    let yu = uu;
                    for (let Eu = uu.parentElement; Eu && Ru.contains(Eu) && !(Eu.getBoundingClientRect().height >= window.innerHeight / 2); Eu = Eu.parentElement) yu = Eu;
                    return yu
                  })(Ru, uu).setAttribute("data-pad-hint-bar-avoid", "")
                }
                return uu
              },
              close: null,
              memoryKey: null
            })
          })),
          Ru = document.documentElement,
          yu = mu.c.onFrame((() => {
            const uu = (0, xu.h)() ? RK() : null,
              yu = !!uu && (Eu = uu.layer, om.has(Eu.id));
            var Eu;
            Ru.classList.contains(Ym) !== yu && Ru.classList.toggle(Ym, yu)
          }));
        return () => {
          for (const Ru of uu) Ru();
          yu(), Ru.classList.remove(Ym)
        }
      },
      Om = "PadLargePointer",
      am = () => {
        (0, gu.useEffect)((() => {
          const uu = (0, Wu.f)(document.body),
            Ru = hK.install(),
            yu = Fm.install(),
            Eu = qm();
          return () => {
            uu(), Ru(), yu(), Eu()
          }
        }), []);
        const {
          largePointer: uu
        } = (0, Bu.m)(), Ru = (0, em.n)() && uu;
        return (0, gu.useEffect)((() => {
          if (Ru) return document.documentElement.classList.add(Om), () => {
            document.documentElement.classList.remove(Om)
          }
        }), [Ru]), (0, Ju.createPortal)((0, zu.jsxs)(zu.Fragment, {
          children: [(0, zu.jsx)(lm, {}), (0, zu.jsx)(wm, {}), (0, zu.jsx)(hm, {})]
        }), document.body)
      };
    var fm = yu(8510),
      uJ = yu(8539),
      RJ = yu(8525);
    yu(8548);
    const yJ = (uu, Ru) => {
        const [yu, Eu] = (0, gu.useState)(!1), [Ku, Qu] = (0, gu.useState)(null), mu = (0, gu.useRef)(null), Ju = (0, gu.useCallback)((uu => {
          mu.current = uu, Qu(uu)
        }), []), Nu = (0, gu.useCallback)((() => {
          Eu(!1), Ju(null)
        }), [Ju]), Vu = (0, gu.useCallback)((() => {
          Eu(!0)
        }), []), ru = (0, gu.useCallback)(((uu, Ru) => {
          Ju((0, RJ.A)(uu, Ru, mu.current))
        }), [Ju]);
        (0, gu.useLayoutEffect)((() => (Ru(yu), (0, Am.p)(uu, yu), Xu.k.Op(Am.k), () => {
          Ru(!1), (0, Am.p)(uu, !1), Xu.k.Op(Am.k)
        })), [yu, uu, Ru]), (0, JQ.e)("appManagerUpdated|activeInputDevice", (uu => {
          "gamepad" !== uu && Nu()
        })), (0, JQ.e)("appManagerUpdated|gameState", (uu => {
          "inGame" !== uu && Nu()
        }));
        const Bu = () => {
          (0, uE.p)() && Nu()
        };
        return (0, JQ.e)("appManagerUpdated|openEverythingMenuName", Bu), (0, JQ.e)("appManagerUpdated|openInGameMenuName", Bu), {
          open: yu,
          picked: Ku,
          pickedRef: mu,
          show: Vu,
          aim: ru,
          close: Nu
        }
      },
      EJ = uu => {
        let {
          className: Ru,
          slotCount: yu,
          picked: Eu,
          slotLabel: Ku,
          renderSlot: Qu,
          centre: mu
        } = uu;
        const Ju = Array.from({
          length: yu
        }, ((uu, Ru) => Ru));
        return (0, zu.jsx)("div", {
          className: Lu()("EmoteWheelOverlay PadRadialWheel", Ru),
          children: (0, zu.jsxs)("div", {
            className: "EmoteWheel",
            style: {
              width: 2 * RJ.o + "rem",
              height: 2 * RJ.o + "rem"
            },
            children: [(0, zu.jsxs)("svg", {
              className: "EmoteWheelSvg",
              viewBox: `0 0 ${RJ.h} ${RJ.h}`,
              children: [Ju.map((uu => (0, zu.jsx)("path", {
                d: (0, RJ.q)(uu, yu, RJ.d, RJ.f, RJ.g),
                className: Lu()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: uu === Eu
                }),
                "aria-label": Ku(uu)
              }, uu))), (0, zu.jsx)("circle", {
                className: "EmoteWheelOuterRing",
                cx: RJ.d,
                cy: RJ.d,
                r: RJ.g
              }), (0, zu.jsx)("circle", {
                className: "EmoteWheelInnerRing",
                cx: RJ.d,
                cy: RJ.d,
                r: RJ.f
              }), null !== Eu && (0, zu.jsx)("path", {
                className: "EmoteWheelWedgeOutline",
                d: (0, RJ.q)(Eu, yu, RJ.d, RJ.f, RJ.g)
              })]
            }), Ju.map((uu => {
              const Ru = (0, RJ.x)(uu, yu);
              return (0, zu.jsx)("div", {
                className: Lu()("PadRadialWheelSlot SmallTextBold", {
                  PadRadialWheelSlotPicked: uu === Eu
                }),
                style: {
                  left: `calc(50% + ${RJ.c*Math.cos(Ru)}rem)`,
                  top: `calc(50% + ${RJ.c*Math.sin(Ru)}rem)`
                },
                "aria-hidden": !0,
                children: Qu(uu)
              }, uu)
            })), (0, zu.jsx)("div", {
              className: "EmoteWheelHint SmallTextBold",
              children: mu
            })]
          })
        })
      },
      KJ = Rm.length,
      QJ = () => {
        const {
          t: uu
        } = (0, Ku.E)(), Ru = yJ("chat", bE.u), yu = (0, gu.useMemo)((() => Rm.map((Ru => uu(Ru)))), [uu]);
        return (0, JQ.e)(bE.r, (() => {
          Ru.open || (0, fm.i)() || (0, uJ.t)() || "inGame" !== Nu.d.get("gameState") || (0, uE.p)() || !(0, HE.c)() || Ru.show()
        })), (0, JQ.e)(bE.f, (uu => {
          Ru.open && Ru.aim(uu, KJ)
        })), (0, JQ.e)(bE.n, (() => {
          var uu;
          if (!Ru.open) return;
          const Eu = Ru.pickedRef.current;
          null !== Eu ? ym.claim(performance.now()) && (Ru.close(), null === (uu = (0, HE.c)()) || void 0 === uu || uu.sendLine(yu[Eu])) : Ru.close()
        })), (0, JQ.e)(bE.j, Ru.close), Ru.open ? (0, zu.jsx)(EJ, {
          className: "QuickChatWheel",
          slotCount: KJ,
          picked: Ru.picked,
          slotLabel: uu => yu[uu],
          renderSlot: uu => yu[uu],
          centre: null !== Ru.picked ? yu[Ru.picked] : uu("controller:quickChatPick")
        }) : null
      },
      mJ = () => {
        const {
          t: uu
        } = (0, Ku.E)(), Ru = yJ("actionButton", uJ.u), [yu, Eu] = (0, gu.useState)([]);
        if ((0, JQ.e)(uJ.m, (uu => {
            Ru.open || (0, fm.i)() || (0, bE.e)() || "inGame" !== Nu.d.get("gameState") || (0, uE.p)() || (Eu(uu), Ru.show())
          })), (0, JQ.e)(uJ.d, (uu => {
            Ru.open && Ru.aim(uu, yu.length)
          })), (0, JQ.e)(uJ.k, (() => {
            if (!Ru.open) return;
            const uu = Ru.pickedRef.current;
            Ru.close(), null !== uu && Xu.k.Op(uJ.q, yu[uu])
          })), (0, JQ.e)(uJ.g, Ru.close), !Ru.open) return null;
        const Qu = null !== Ru.picked ? yu[Ru.picked] : null;
        return (0, zu.jsx)(EJ, {
          className: "ActionWheel",
          slotCount: yu.length,
          picked: Ru.picked,
          slotLabel: Ru => {
            const Eu = yu[Ru];
            return "reload" === Eu.kind ? uu("controller:gameplayReload") : "customButton" === Eu.kind ? Eu.description || Eu.icon : "touchButton" === Eu.kind && "string" === typeof Eu.label ? Eu.label : ""
          },
          renderSlot: uu => (0, zu.jsx)(pQ, {
            action: yu[uu]
          }),
          centre: Qu ? (0, zu.jsx)(pQ, {
            action: Qu
          }) : uu("controller:actionWheelPick")
        })
      };
    var JJ = yu(106);
    const NJ = () => ((0, gu.useEffect)((() => {
        var uu, Ru;
        const yu = (0, Wu.f)(document.getElementById("root")),
          Eu = (0, xu.c)(),
          Ku = (() => {
            const uu = [Xu.k.subscribe(iK.g, (() => {
                OK("blockBreak")
              })), Xu.k.subscribe("damagedByOtherPlayer", (() => {
                OK("damage")
              })), Xu.k.subscribe("yourAttackHit", (uu => {
                let {
                  hitSelf: Ru
                } = uu;
                Ru || OK("hit")
              }))],
              Ru = mu.c.onActivePadChanged((uu => {
                uu && OK("connect")
              }));
            return () => {
              for (const Ru of uu) Xu.k.unsubscribe(Ru);
              Ru()
            }
          })(),
          Qu = (() => {
            const uu = new yQ({
              getVisitId: RQ.e,
              peekVisitId: RQ.peekVisitSessionId,
              readReportedVisitId: () => {
                const uu = uQ.j.getItem(EQ);
                return "string" === typeof uu ? uu : null
              },
              writeReportedVisitId: uu => {
                uQ.j.setItem(EQ, uu)
              },
              isPadActive: xu.h,
              getPadFamily: () => {
                var uu, Ru;
                return null !== (uu = null === (Ru = mu.c.getActivePad()) || void 0 === Ru ? void 0 : Ru.family) && void 0 !== uu ? uu : null
              },
              canReport: aK.l,
              getInputType: fK.c,
              Px: aK.q
            });
            let Ru = 0,
              yu = null;
            const Eu = Ku => {
                null === yu && ("notReady" !== uu.check(Ku) || null !== yu || Ru >= 20 || (Ru++, yu = setTimeout((() => {
                  yu = null, Eu(!1)
                }), 3e3)))
              },
              Ku = Xu.k.subscribe("appManagerUpdated|activeInputDevice", (() => {
                Eu(!0)
              })),
              Qu = (0, RQ.j)((() => {
                Ru = 0, Eu(!0)
              }));
            return () => {
              Xu.k.unsubscribe(Ku), Qu(), null !== yu && clearTimeout(yu)
            }
          })(),
          Ju = mu.c.onFrame(((uu, Ru) => {
            const yu = (0, xu.m)(uu);
            ru.d.dispatch(uu, Ru, yu)
          }));
        let Vu = null !== (uu = null === (Ru = mu.c.getActivePad()) || void 0 === Ru ? void 0 : Ru.family) && void 0 !== uu ? uu : null;
        const Su = mu.c.onActivePadChanged((uu => {
            var Ru, yu;
            (ru.d.reset(), (0, xu.r)(), Xu.k.Op(mu.b, uu), (null !== (Ru = null === uu || void 0 === uu ? void 0 : uu.family) && void 0 !== Ru ? Ru : null) !== Vu) && (Vu = null !== (yu = null === uu || void 0 === uu ? void 0 : uu.family) && void 0 !== yu ? yu : null, Xu.k.Op(Bu.b, (0, Bu.g)()));
            !uu && (0, xu.h)() && (0, xu.t)(Nu.d.get("isTouchScreen") ? "touch" : "keyboardMouse")
          })),
          pu = () => {
            "visible" !== document.visibilityState && ru.d.clear()
          },
          Tu = () => {
            ru.d.clear()
          };
        document.addEventListener("visibilitychange", pu), window.addEventListener("blur", Tu), mu.c.start(), (0, vK.n)();
        const ju = null;
        return () => {
          yu(), Eu(), Ku(), Qu(), Ju(), Su(), document.removeEventListener("visibilitychange", pu), window.removeEventListener("blur", Tu), mu.c.stop(), null === ju || void 0 === ju || ju()
        }
      }), []), (0, zu.jsxs)("div", {
        className: "ControllerRoot",
        children: [(0, zu.jsx)(CQ, {}), (0, zu.jsx)(nQ, {}), (0, zu.jsx)(sQ, {}), (0, zu.jsx)(Cm, {}), (0, zu.jsx)(am, {}), (0, zu.jsx)(QJ, {}), (0, zu.jsx)(mJ, {})]
      })),
      XJ = () => JJ.featureFlags.useControllerSupport ? (0, zu.jsx)(NJ, {}) : null;
    var VJ = yu(7924),
      rJ = yu(8563);
    const BJ = new Set(vK.l),
      xJ = uu => `${rJ.l}${(0,Bu.h)()}/${uu}`,
      SJ = uu => {
        if (!(0, rJ.k)(uu)) return null;
        const [Ru, yu] = uu.slice(rJ.l.length).split("/");
        return (0, VJ.h)(Ru) && BJ.has(yu) ? (0, vK.i)(Ru, yu) : null
      };
    var pJ = yu(8566);
    const TJ = () => {
        const {
          t: uu
        } = (0, Ku.E)(), Ru = (0, xu.u)(), {
          gameState: yu,
          isUiHidden: Eu
        } = (0, Nu.j)(["gameState", "isUiHidden"]), {
          hideButtonHints: Qu,
          sneakMode: mu
        } = (0, Bu.m)(), [Ju, Xu] = (0, gu.useState)(pJ.b);
        return (0, JQ.e)(bQ.p, Xu), Ru && !Eu && "inGame" === yu && Ju ? (0, zu.jsxs)("div", {
          className: "PadSneakChip SmallTextBold",
          children: [!Qu && (0, zu.jsx)(xQ, {
            glyph: (0, Vu.j)("toggle" === mu ? "sneak" : "sneakToggle")
          }), (0, zu.jsx)("span", {
            children: uu("controller:gameplaySneaking")
          })]
        }) : null
      },
      WJ = 12,
      jJ = uu => {
        let {
          trigger: Ru,
          className: yu,
          children: Eu
        } = uu;
        const Ku = (0, gu.useRef)(null);
        return (0, gu.useEffect)((() => {
          let uu = 0;
          const yu = Mu(Ru, "y"),
            Eu = () => {
              uu = requestAnimationFrame(Eu);
              const Qu = Ku.current;
              if (!Qu || null === Ru || void 0 === Ru || !Ru.isConnected) return;
              const {
                left: mu,
                top: Ju
              } = function(uu, Ru, yu) {
                let Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                  Ku = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                const Qu = uu.left + uu.width / 2,
                  mu = Math.max(WJ, yu.width - WJ - Ru.width),
                  Ju = Math.min(Math.max(Qu - Ru.width / 2, WJ), mu),
                  Nu = yu.height - Eu;
                let Xu = 0,
                  Vu = Nu;
                if (Ku) {
                  const uu = Math.max(0, Ku.top),
                    Eu = Math.min(Nu, Ku.bottom);
                  Eu - uu >= Math.max(yu.height / 2, Ru.height + 24) && (Xu = uu, Vu = Eu)
                }
                const ru = uu.top + uu.height / 2 < (Xu + Vu) / 2 ? Vu - WJ - Ru.height : Xu + WJ;
                return {
                  left: Ju,
                  top: Math.max(WJ, ru)
                }
              }(Ru.getBoundingClientRect(), {
                width: Qu.offsetWidth,
                height: Qu.offsetHeight
              }, {
                width: window.innerWidth,
                height: window.innerHeight
              }, parseFloat(document.documentElement.style.getPropertyValue(Gm)) || 0, null !== yu && void 0 !== yu && yu.isConnected ? yu.getBoundingClientRect() : null);
              Qu.style.transform = `translate3d(${Math.round(mu)}px, ${Math.round(Ju)}px, 0)`, Qu.style.visibility = "visible"
            };
          return Eu(), () => {
            cancelAnimationFrame(uu)
          }
        }), [Ru]), (0, zu.jsx)("div", {
          ref: Ku,
          className: yu,
          style: {
            position: "fixed",
            left: 0,
            top: 0,
            visibility: "hidden"
          },
          children: Eu
        })
      };
    var HJ = yu(1043),
      dJ = yu(8573),
      bJ = yu(1408),
      CJ = yu(8582),
      kJ = yu(8585);
    const eJ = {
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
      AJ = () => {
        const {
          t: uu
        } = (0, Ku.E)(), Ru = (0, xu.u)(), yu = (0, dJ.b)(), Eu = (0, IQ.g)("_tasks"), Qu = (0, IQ.g)("_availableLeaderboards");
        if (!Ru) return null;
        const mu = (uu => {
          let {
            hasShop: Ru,
            hasTasksOrLeaderboards: yu,
            canInvite: Eu
          } = uu;
          const Ku = [];
          return Ru && Ku.push("shop"), yu && Ku.push("tasks"), Eu && Ku.push("invite"), Ku.push("leave"), Ku
        })({
          hasShop: yu,
          hasTasksOrLeaderboards: !(!Eu && !Qu),
          canInvite: !!JJ.featureFlags.canUseInviteLinks
        });
        return (0, zu.jsx)("div", {
          className: "PadLobbyShortcuts",
          children: mu.map((Ru => {
            const {
              icon: yu,
              labelKey: Eu
            } = eJ[Ru], Ku = "leave" === Ru ? bJ.F : bJ.e;
            return (0, zu.jsx)(Ku, {
              className: "PadLobbyShortcut",
              onClick: () => {
                (uu => {
                  switch (uu) {
                    case "shop":
                      return Xu.k.Op(kJ.p), void Nu.d.set({
                        openEverythingMenuName: fy.s.SHOP
                      });
                    case "tasks":
                      return void Xu.k.Op("toggleMenu", "retentionFeatures");
                    case "invite":
                      return void Xu.k.Op("toggleMenu", "inviteLink");
                    case "leave":
                      (0, CJ.b)()
                  }
                })(Ru)
              },
              children: (0, zu.jsxs)("div", {
                className: "PadLobbyShortcutInner",
                children: [(0, zu.jsx)(HJ.c, {
                  name: yu
                }), (0, zu.jsx)("span", {
                  children: uu(Eu)
                })]
              })
            }, Ru)
          }))
        })
      };
    var DJ = yu(1915);
    const MJ = Su.D,
      IJ = ["forward", "backward", "left", "right", "sprint"],
      GJ = uu => uu.ctrlKey || uu.altKey || "Alt" === uu.key || "ArrowUp" === uu.key || "ArrowDown" === uu.key || "Tab" === uu.code || "/" === uu.key || "Slash" === uu.code;
    class UJ {
      constructor() {
        this.armed = !1, this.swallowedKeys = new Set, this.previousHeld = new Array(Su.W).fill(!1), this.leftStickWasPressed = !1, this.rightStickWasPressed = !1, this.consumeNextFrame = !1, this.consumeAfterContinue = !1
      }
      setArmed(uu) {
        this.armed = uu
      }
      blocksGameplay() {
        return this.armed || this.consumeNextFrame
      }
      onKeyDown(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          yu = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return !this.armed || Ru ? !uu.repeat && this.swallowedKeys.delete(uu.code) ? {
          swallow: !1,
          continues: !1
        } : {
          swallow: this.swallowedKeys.has(uu.code),
          continues: !1
        } : "Escape" === uu.key || uu.repeat && !this.swallowedKeys.has(uu.code) ? {
          swallow: !1,
          continues: !1
        } : yu ? {
          swallow: !1,
          continues: !0
        } : (this.swallowedKeys.add(uu.code), {
          swallow: !0,
          continues: (0, xu.g)(uu)
        })
      }
      onKeyUp(uu) {
        return this.swallowedKeys.delete(uu.code)
      }
      forgetKeys() {
        this.swallowedKeys.clear()
      }
      onPadFrame(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Eu = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const Ku = (0, Su.v)(uu.values, this.previousHeld),
          Qu = null === yu ? -1 : (0, Su.o)(yu),
          mu = Qu >= 0 && Ku[Qu] && !this.previousHeld[Qu],
          Ju = Ku.some(((uu, Ru) => uu && !this.previousHeld[Ru] && Ru !== Qu)),
          Nu = Math.hypot(uu.leftStick.x, uu.leftStick.y) >= MJ,
          Xu = Math.hypot(uu.rightStick.x, uu.rightStick.y) >= MJ,
          Vu = Nu && !this.leftStickWasPressed || Xu && !this.rightStickWasPressed;
        this.previousHeld = Ku, this.leftStickWasPressed = Nu, this.rightStickWasPressed = Xu;
        let ru = !1;
        this.consumeNextFrame && (this.consumeNextFrame = !1, ru = !0);
        const Bu = !Ru && mu && !Eu,
          xu = !Bu && this.armed && !Ru && (Ju || Vu);
        return (Bu || xu) && (this.consumeNextFrame = !0, this.consumeAfterContinue = xu, ru = !0), {
          continues: xu,
          back: Bu,
          consumeHeld: ru
        }
      }
      consumeLeavesMoveStick() {
        return this.consumeAfterContinue
      }
    }
    const nJ = new Set([...DJ.m, ...DJ.C]),
      sJ = uu => ((uu, Ru, yu) => {
        const Eu = Object.keys(Ru).filter((Eu => !yu.has(Eu) && Ru[Eu].includes(uu)));
        return Eu.length > 0 && Eu.every((uu => IJ.includes(uu)))
      })(uu, DJ.x, nJ),
      tJ = (uu, Ru, yu) => {
        const Eu = new UJ,
          Ku = uu => {
            if (!uu.isTrusted) return;
            const {
              swallow: yu,
              continues: Ku
            } = Eu.onKeyDown(uu, !(0, xu.w)(uu) || (0, PK.i)() || (0, uE.p)(), sJ(uu.code));
            yu && (uu.stopImmediatePropagation(), GJ(uu) && uu.preventDefault()), Ku && ((0, xu.t)("keyboardMouse"), Ru())
          },
          Qu = uu => {
            uu.isTrusted && Eu.onKeyUp(uu) && (uu.stopImmediatePropagation(), GJ(uu) && uu.preventDefault())
          },
          Ju = () => {
            Eu.forgetKeys()
          };
        window.addEventListener("keydown", Ku, !0), window.addEventListener("keyup", Qu, !0), window.addEventListener("blur", Ju);
        const Nu = mu.c.onFrame((uu => {
            const Ku = ru.d.getActiveConsumerName(),
              Qu = yu(),
              mu = Qu ? (0, Vu.j)("menuBack") : null,
              Ju = null !== Ku && "gameplay" !== Ku,
              {
                continues: Nu,
                back: Xu,
                consumeHeld: Su
              } = Eu.onPadFrame(uu, Ju, mu, (0, xu.j)(uu));
            if (Su) {
              const uu = (0, Bu.g)().swapSticks ? "right" : "left";
              ru.d.consumeAllHeld(Eu.consumeLeavesMoveStick() ? uu : null)
            }
            Xu ? null === Qu || void 0 === Qu || Qu() : Nu && Ru()
          })),
          Xu = (0, PK.l)(`pressToContinue:${uu}`, (() => Eu.blocksGameplay()));
        return {
          setArmed: uu => {
            Eu.setArmed(uu)
          },
          dispose: () => {
            window.removeEventListener("keydown", Ku, !0), window.removeEventListener("keyup", Qu, !0), window.removeEventListener("blur", Ju), Nu(), Xu()
          }
        }
      };
    var lJ = yu(4782),
      gJ = yu(3226),
      cJ = yu(2916),
      LJ = yu(7926);
    const zJ = uu => {
        let {
          text: Ru
        } = uu;
        return (0, zu.jsx)("div", {
          className: "ControllerSettingsHeading",
          children: Ru
        })
      },
      FJ = uu => {
        let {
          label: Ru,
          hint: yu,
          options: Eu,
          value: Qu,
          onChange: mu
        } = uu;
        const {
          t: Ju
        } = (0, Ku.E)();
        return (0, zu.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, zu.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: [(0, zu.jsxs)("div", {
              className: "ControllerChoiceText",
              children: [(0, zu.jsx)("div", {
                className: "SliderText",
                children: Ru
              }), yu && (0, zu.jsx)("div", {
                className: "ControllerSettingsHint",
                children: yu
              })]
            }), (0, zu.jsx)(cJ.d, {
              options: Eu.map((uu => ({
                label: "label" in uu ? uu.label : Ju(uu.labelKey),
                value: uu.value
              }))),
              value: Qu,
              onChange: uu => {
                mu(uu.value)
              }
            })]
          })
        })
      },
      wJ = uu => {
        let {
          settingKey: Ru,
          label: yu,
          range: Eu,
          format: Ku
        } = uu;
        const Qu = (0, Bu.m)();
        return (0, zu.jsx)(lJ.g, {
          name: yu,
          min: Eu.min,
          max: Eu.max,
          step: Eu.step,
          padStep: Eu.step,
          initValue: Qu[Ru],
          format: Ku,
          onChange: uu => {
            (0, Bu.l)({
              [Ru]: (0, LJ.z)(uu, Eu)
            })
          }
        })
      };
    var ZJ = yu(8594),
      hJ = yu(8603);
    const PJ = uu => uu instanceof DOMException && ("SecurityError" === uu.name || "NotAllowedError" === uu.name),
      iJ = uu => {
        const [Ru] = [...uu.controllers].sort(((uu, Ru) => hJ.o[uu] - hJ.o[Ru]));
        return hJ.k[Ru]
      },
      YJ = uu => {
        (0, ZJ.d)().allowPhoneMotion().catch((Ru => {
          uu && PJ(Ru) ? uu() : console.warn("Could not enable the motion sensor", Ru)
        }))
      },
      oJ = {
        waiting: "controller:settingsGyroPhoneWaiting",
        noSensor: "controller:settingsGyroPhoneNoSensor",
        on: "controller:settingsGyroPhoneOn",
        denied: "controller:settingsGyroPhoneDenied"
      },
      qJ = uu => {
        let {
          status: Ru
        } = uu;
        const {
          t: yu
        } = (0, Ku.E)(), [Eu, Qu] = (0, gu.useState)(null), mu = `${Ru.controllers.join(",")}|${Ru.phoneMotion}`;
        (0, gu.useEffect)((() => {
          Qu(null)
        }), [mu]);
        const Ju = () => {
          (0, ZJ.d)().connectController().then((uu => {
            Qu(uu > 0 ? "openFailed" : null)
          })).catch((uu => {
            PJ(uu) ? Qu("needsClick") : console.warn("Could not connect motion controller", uu)
          }))
        };
        if (Ru.hidSupported) {
          let uu = yu("controller:settingsGyroConnectHint");
          return "needsClick" === Eu ? uu = yu("controller:settingsGyroConnectNeedsClick") : "openFailed" === Eu ? uu = yu("controller:settingsGyroOpenFailed") : Ru.controllers.length > 0 && (uu = yu("controller:settingsGyroConnected", {
            name: iJ(Ru)
          })), (0, zu.jsx)("div", {
            className: "SettingBox ControllerChoiceSetting",
            children: (0, zu.jsxs)("div", {
              className: "ControllerChoiceRow",
              children: [(0, zu.jsx)("div", {
                className: "ControllerSettingsHint",
                children: uu
              }), (0, zu.jsx)(bJ.e, {
                onClick: Ju,
                children: yu("controller:settingsGyroConnect")
              })]
            })
          })
        }
        if ("needsPermission" === Ru.phoneMotion) return (0, zu.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, zu.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: ["needsTap" === Eu && (0, zu.jsx)("div", {
              className: "ControllerSettingsHint",
              children: yu("controller:settingsGyroAllowNeedsTap")
            }), (0, zu.jsx)(bJ.e, {
              onClick: () => {
                YJ((() => {
                  Qu("needsTap")
                }))
              },
              children: yu("controller:settingsGyroAllowMotion")
            })]
          })
        });
        const Nu = oJ[Ru.phoneMotion];
        return Nu ? (0, zu.jsx)("div", {
          className: "ControllerSettingsHint",
          children: yu(Nu)
        }) : null
      },
      OJ = () => {
        const {
          t: uu
        } = (0, Ku.E)(), Ru = (0, Bu.m)(), yu = (0, ZJ.f)(), Eu = (0, xu.v)(), Qu = !yu.hidSupported && yu.phoneSupported && !yu.padConnected, mu = (yu.hidSupported || yu.phoneSupported) && !Qu, Ju = (0, Vu.j)("pause");
        return (0, zu.jsxs)(zu.Fragment, {
          children: [(0, zu.jsx)(zJ, {
            text: uu("controller:settingsGyro")
          }), Qu && (0, zu.jsx)("div", {
            className: "ControllerSettingsHint",
            children: uu("controller:settingsGyroPhoneNeedsController")
          }), !mu && !Qu && (0, zu.jsx)("div", {
            className: "ControllerSettingsHint",
            children: uu(yu.hidBlocked || yu.phoneBlocked ? "controller:settingsGyroBlocked" : "controller:settingsGyroUnsupported")
          }), mu && (0, zu.jsx)(lJ.c, {
            label: uu(yu.hidSupported ? "controller:settingsGyroToggle" : "controller:settingsGyroTogglePhone"),
            checked: Ru.gyroAiming,
            onClick: uu => {
              var Ru, yu;
              (0, Bu.l)({
                gyroAiming: uu
              });
              const Eu = null === (Ru = null === (yu = navigator.userActivation) || void 0 === yu ? void 0 : yu.isActive) || void 0 === Ru || Ru;
              if (!uu || !Eu) return;
              const Ku = (0, ZJ.d)(),
                Qu = Ku.getStatus();
              Qu.hidSupported ? Ku.connectControllerIfNoneGranted().catch((uu => {
                console.warn("Motion controller picker unavailable", uu)
              })) : "needsPermission" === Qu.phoneMotion && YJ()
            },
            circleInfoText: uu(yu.hidSupported ? "controller:settingsGyroToggleInfo" : "controller:settingsGyroToggleInfoPhone")
          }), mu && yu.hidSupported && (0, zu.jsx)("div", {
            className: "ControllerSettingsHint",
            children: uu("controller:settingsGyroSteamHint")
          }), mu && Ru.gyroAiming && (0, zu.jsxs)(zu.Fragment, {
            children: [(0, zu.jsx)(qJ, {
              status: yu
            }), (0, zu.jsx)(wJ, {
              settingKey: "gyroSensitivity",
              label: uu("controller:settingsGyroSensitivity"),
              range: LJ.Y,
              format: LJ.M
            }), (0, zu.jsx)(FJ, {
              label: uu("controller:settingsGyroActivation"),
              hint: "aiming" === Ru.gyroActivation && (0, zu.jsx)(gJ.c, {
                text: uu("controller:settingsGyroAimingHint", {
                  button: gJ.d
                }),
                glyph: (0, Vu.j)("use")
              }),
              options: LJ.U,
              value: Ru.gyroActivation,
              onChange: uu => {
                (0, Bu.l)({
                  gyroActivation: uu
                })
              }
            }), "button" === Ru.gyroActivation && (0, zu.jsx)(FJ, {
              label: uu("controller:settingsGyroButton"),
              hint: uu("controller:settingsGyroButtonHint"),
              options: LJ.s.filter((uu => uu !== Ju || uu === Ru.gyroButton)).map((uu => ({
                label: BQ(Eu, uu),
                value: uu
              }))),
              value: Ru.gyroButton,
              onChange: uu => {
                (0, Bu.l)({
                  gyroButton: uu
                })
              }
            })]
          })]
        })
      };
    var vJ = yu(1774);
    const aJ = () => {
      const {
        t: uu
      } = (0, Ku.E)(), Ru = (0, Bu.m)(), yu = (0, xu.v)();
      return (0, zu.jsxs)(zu.Fragment, {
        children: [(0, zu.jsx)(zJ, {
          text: uu("controller:settingsAccessibility")
        }), (0, zu.jsx)(lJ.c, {
          label: uu("controller:settingsSwapConfirmBack"),
          checked: (0, Vu.D)(Ru.swapConfirmBack, yu),
          onClick: uu => {
            (0, Bu.l)({
              swapConfirmBack: uu === (0, Vu.D)(null, yu) ? null : uu
            }), vJ.i.showMessage({
              translationKey: "controller:settingsSwapToast"
            })
          },
          circleInfoText: uu("controller:settingsSwapConfirmBackInfo")
        }), (0, zu.jsx)(FJ, {
          label: uu("controller:settingsButtonRepeat"),
          hint: uu("controller:settingsButtonRepeatHint"),
          options: LJ.o,
          value: Ru.buttonRepeat,
          onChange: uu => {
            (0, Bu.l)({
              buttonRepeat: uu
            })
          }
        }), (0, zu.jsx)(FJ, {
          label: uu("controller:settingsTapHoldTime"),
          hint: uu("controller:settingsTapHoldTimeHint"),
          options: LJ.Eb,
          value: Ru.tapHoldTime,
          onChange: uu => {
            (0, Bu.l)({
              tapHoldTime: uu
            })
          }
        }), (0, zu.jsx)(FJ, {
          label: uu("controller:settingsEmoteButton"),
          hint: uu("wheel" === Ru.emoteButton ? "controller:settingsEmoteButtonWheelHint" : "controller:settingsEmoteButtonTapHoldHint"),
          options: LJ.I,
          value: Ru.emoteButton,
          onChange: uu => {
            (0, Bu.l)({
              emoteButton: uu
            })
          }
        }), (0, zu.jsx)(FJ, {
          label: uu("controller:settingsAttackMode"),
          hint: uu("toggle" === Ru.attackMode ? "controller:settingsAttackToggleHint" : "controller:settingsAttackHoldHint"),
          options: LJ.l,
          value: Ru.attackMode,
          onChange: uu => {
            (0, Bu.l)({
              attackMode: uu
            })
          }
        }), (0, zu.jsx)(lJ.c, {
          label: uu("controller:settingsLargePointer"),
          checked: Ru.largePointer,
          onClick: uu => {
            (0, Bu.l)({
              largePointer: uu
            })
          },
          circleInfoText: uu("controller:settingsLargePointerInfo")
        })]
      })
    };
    var fJ = yu(8611);
    const uN = new class {
        constructor(uu) {
          this.router = uu, this.current = null
        }
        claim(uu, Ru) {
          const yu = this.current;
          yu && (this.current = null, yu.release(), yu.onTakenOver());
          const Eu = this.router.register({
              ...uu,
              name: "capture"
            }),
            Ku = {
              release: Eu,
              onTakenOver: Ru
            };
          return this.current = Ku, () => {
            this.current === Ku && (this.current = null), Eu()
          }
        }
      }(ru.d),
      RN = uu => {
        (0, gu.useEffect)((() => {
          if (!uu) return;
          const Ru = uu();
          let yu = !1;
          const Eu = () => {
              yu || (yu = !0, Ru.onEnd())
            },
            Ku = uN.claim({
              isActive: () => !yu,
              onFrame: uu => {
                Ru.onFrame(uu, Eu)
              }
            }, Eu),
            Qu = void 0 === Ru.timeoutMs ? void 0 : window.setTimeout(Eu, Ru.timeoutMs),
            mu = uu => {
              "Escape" === uu.key && (uu.preventDefault(), uu.stopPropagation(), Eu())
            };
          return window.addEventListener("keydown", mu, !0), () => {
            yu = !0, Ku(), window.clearTimeout(Qu), window.removeEventListener("keydown", mu, !0)
          }
        }), [uu])
      },
      yN = uu => {
        let {
          row: Ru,
          capturing: yu,
          onCapture: Eu,
          holdFillRef: Qu,
          onRebind: mu,
          swapped: Ju
        } = uu;
        const {
          t: Nu
        } = (0, Ku.E)();
        if ("fixed" === Ru.kind) return (0, zu.jsx)("div", {
          className: "ControlRow PadControlRow PadControlRowFixed",
          children: (0, zu.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, zu.jsx)("div", {
              className: "ControlName",
              children: Nu(Ru.labelKey)
            }), (0, zu.jsx)("div", {
              className: "ControlBindingsContainer",
              children: (0, zu.jsx)("div", {
                className: "ControlBindingsList",
                children: (0, zu.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  children: (0, zu.jsx)(xQ, {
                    glyph: "move" === Ru.stick ? (0, Vu.s)() : (0, Vu.r)()
                  })
                })
              })
            })]
          })
        });
        const {
          action: Xu
        } = Ru, ru = (0, Vu.j)(Xu), Bu = (0, Vu.m)(Xu), xu = ru !== Bu && (0, Vu.e)(Xu, Bu);
        return (0, zu.jsxs)("div", {
          className: Lu()("ControlRow PadControlRow", {
            Capturing: yu
          }),
          children: [(0, zu.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, zu.jsx)("div", {
              className: "ControlName",
              children: Nu(LJ.h[Xu])
            }), (0, zu.jsxs)("div", {
              className: "ControlBindingsContainer",
              children: [!yu && (0, zu.jsxs)("div", {
                className: "ControlBindingsList",
                children: [(0, zu.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    Eu(Xu)
                  },
                  children: (0, zu.jsx)(xQ, {
                    glyph: ru
                  })
                }), xu && (0, zu.jsx)("div", {
                  className: "ControlBinding PadBindingReset",
                  title: Nu("controller:settingsReset"),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    mu(Xu, Bu)
                  },
                  children: (0, zu.jsx)(HJ.c, {
                    name: "arrows-rotate"
                  })
                })]
              }), yu && (0, zu.jsxs)("div", {
                className: "ControlBindingAddInput",
                children: [(0, zu.jsxs)("div", {
                  className: "PadCaptureBox",
                  children: [(0, zu.jsx)("span", {
                    children: Nu("controller:settingsCapturePrompt")
                  }), (0, zu.jsx)("div", {
                    ref: Qu,
                    className: "PadCaptureHoldFill"
                  })]
                }), (0, zu.jsx)("div", {
                  className: "ControlBindingAddCancel",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    Eu(null)
                  },
                  children: "\xd7"
                })]
              }), yu && (0, zu.jsx)("div", {
                className: "PadCaptureHint",
                children: (0, zu.jsx)(gJ.c, {
                  text: Nu((0, Vu.e)(Xu, (0, Vu.j)("menuBack")) ? "controller:settingsCaptureCancelOrBindHint" : "controller:settingsCaptureCancelHint", {
                    button: gJ.d
                  }),
                  glyph: (0, Vu.j)("menuBack")
                })
              })]
            })]
          }), Ju.map((uu => (0, zu.jsx)("div", {
            className: "ControlRowWarning PadSwapNotice",
            children: (0, zu.jsx)(gJ.c, {
              text: Nu("controller:settingsSwapNotice", {
                action: Nu(LJ.h[uu]),
                button: gJ.d
              }),
              glyph: (0, Vu.j)(uu)
            })
          }, uu))), yu && (0, zu.jsx)("div", {
            className: "PadCaptureTimer",
            style: {
              animationDuration: `${LJ.w}ms`
            }
          })]
        })
      },
      EN = [],
      KN = uu => {
        let {
          layoutSetting: Ru
        } = uu;
        const {
          t: yu
        } = (0, Ku.E)(), Eu = (0, Bu.m)();
        (0, xu.v)();
        const Qu = (0, gu.useRef)(null),
          [mu, Ju] = (0, gu.useState)(null),
          Nu = (0, gu.useCallback)(((uu, Ru) => {
            const yu = (0, Bu.g)().bindings;
            (0, Vu.y)(uu, Ru);
            const Eu = (0, Vu.t)(yu, uu);
            Ju(Eu.length > 0 ? {
              action: uu,
              swapped: Eu
            } : null)
          }), []),
          [Xu, pu] = ((uu, Ru) => {
            const [yu, Eu] = (0, gu.useState)(null), Ku = (0, gu.useMemo)((() => yu ? () => {
              const Ku = (0, Vu.j)("menuBack"),
                Qu = new LJ.e(Ku, (0, Vu.j)("menuConfirm"), (uu => (0, Vu.e)(yu, uu)));
              return {
                onFrame: (Eu, mu) => {
                  var Ju;
                  const Nu = Eu.frame.timestampMs,
                    Xu = Qu.update({
                      ...Eu,
                      isDown: uu => (0, Su.K)(Eu.frame.values, uu)
                    }, Nu);
                  null === (Ju = uu.current) || void 0 === Ju || Ju.style.setProperty("width", 100 * Qu.getBindHoldProgress(Nu) + "%"), Xu && ("bind" === Xu.kind ? (ru.d.consumeButton(Xu.button), Ru(yu, Xu.button)) : ru.d.consumeButton(Ku), mu())
                },
                onEnd: () => {
                  Eu(null)
                },
                timeoutMs: LJ.w
              }
            } : null), [yu, uu, Ru]);
            return RN(Ku), [yu, Eu]
          })(Qu, Nu),
          Tu = uu => {
            uu && Ju(null), pu(uu)
          };
        (0, gu.useEffect)((() => {
          if (!mu) return;
          const uu = window.setTimeout((() => {
            Ju(null)
          }), LJ.Cb);
          return () => {
            window.clearTimeout(uu)
          }
        }), [mu]);
        const Wu = !Eu.swapSticks && 0 === Object.keys(Eu.bindings).length;
        return (0, zu.jsxs)("div", {
          className: "ControlsContainer PadControlsContainer",
          children: [(0, zu.jsx)("div", {
            className: "SliderText",
            children: yu("controller:settingsRemap")
          }), (0, zu.jsx)("div", {
            className: "ControllerSettingsHint",
            children: yu("controller:settingsRemapHint")
          }), (0, zu.jsx)(bJ.F, {
            className: "ResetBindingsButton PadResetAllButton",
            disabled: Wu,
            onClick: () => {
              Tu(null), Ju(null), (0, Vu.C)()
            },
            children: yu("controller:settingsResetAll")
          }), Ru, LJ.sb.map(((uu, Ru) => (0, zu.jsx)(fJ.e, {
            title: yu(uu.titleKey),
            defaultOpen: 0 === Ru,
            children: uu.rows.map((uu => (0, zu.jsx)(yN, {
              row: uu,
              capturing: "action" === uu.kind && uu.action === Xu,
              onCapture: Tu,
              holdFillRef: Qu,
              onRebind: Nu,
              swapped: "action" === uu.kind && (null === mu || void 0 === mu ? void 0 : mu.action) === uu.action ? mu.swapped : EN
            }, "action" === uu.kind ? uu.action : uu.labelKey)))
          }, uu.titleKey)))]
        })
      },
      QN = uu => {
        let {
          deadzone: Ru,
          dotRef: yu,
          labelKey: Eu
        } = uu;
        const {
          t: Qu
        } = (0, Ku.E)();
        return (0, zu.jsxs)("div", {
          className: "ControllerTesterStick",
          children: [(0, zu.jsxs)("div", {
            className: "ControllerTesterStickCircle",
            children: [(0, zu.jsx)("div", {
              className: "ControllerTesterDeadzone",
              style: {
                width: 100 * Ru + "%",
                height: 100 * Ru + "%"
              }
            }), (0, zu.jsx)("div", {
              ref: yu,
              className: "ControllerTesterDot"
            })]
          }), (0, zu.jsx)("div", {
            className: "ControllerTesterStickLabel",
            children: Qu(Eu)
          })]
        })
      },
      mN = (uu, Ru, yu, Eu) => {
        var Ku;
        uu && (uu.style.left = 50 + 50 * Math.max(-1, Math.min(1, Ru.x)) + "%", uu.style.top = 50 + 50 * Math.max(-1, Math.min(1, Ru.y)) + "%", null === (Ku = uu.parentElement) || void 0 === Ku || Ku.classList.toggle("Active", Eu || Math.hypot(Ru.x, Ru.y) > yu))
      },
      JN = uu => {
        const Ru = {
            deadzone: uu.moveDeadzone,
            labelKey: "controller:settingsActionMove"
          },
          yu = {
            deadzone: uu.lookDeadzone,
            labelKey: "controller:settingsActionLook"
          };
        return uu.swapSticks ? {
          left: yu,
          right: Ru
        } : {
          left: Ru,
          right: yu
        }
      },
      NN = () => {
        const {
          t: uu
        } = (0, Ku.E)(), Ru = (() => {
          const [uu, Ru] = (0, gu.useState)((() => mu.c.getActivePad()));
          return (0, JQ.e)(mu.b, (() => {
            Ru(mu.c.getActivePad())
          })), uu
        })(), yu = JN((0, Bu.m)()), Eu = (0, gu.useRef)(null), Qu = (0, gu.useRef)(null), Ju = (0, gu.useRef)([]), Nu = (0, gu.useRef)(null), Xu = (0, gu.useRef)(null), [xu, pu] = (uu => {
          const [Ru, yu] = (0, gu.useState)(!1), Eu = (0, gu.useMemo)((() => Ru ? () => {
            const Ru = (0, Vu.j)("menuBack"),
              Eu = new LJ.g;
            return {
              onFrame: (yu, Ku) => {
                var Qu;
                const mu = Eu.update({
                  pressed: yu.wasPressed(Ru),
                  jJ: yu.isHeld(Ru)
                }, yu.frame.timestampMs);
                null === (Qu = uu.current) || void 0 === Qu || Qu.style.setProperty("width", 100 * mu + "%"), mu >= 1 && (ru.d.consumeButton(Ru), Ku())
              },
              onEnd: () => {
                yu(!1)
              }
            }
          } : null), [Ru, uu]);
          return RN(Eu), [Ru, yu]
        })(Qu);
        (0, gu.useEffect)((() => {
          const uu = uu => {
            for (const yu of Su._) {
              const Ru = (0, Su.o)(yu),
                Eu = Ju.current[Ru];
              if (!Eu) continue;
              const Ku = uu.values[Ru];
              Eu.classList.toggle("Pressed", Ku >= Su.D), (0, Su.O)(Ru) && Eu.style.setProperty("--trigger-fill", `${Math.round(100*Ku)}%`)
            }
            const Ru = JN((0, Bu.g)());
            mN(Nu.current, uu.leftStick, Ru.left.deadzone, uu.values[(0, Su.o)("LS")] >= Su.D), mN(Xu.current, uu.rightStick, Ru.right.deadzone, uu.values[(0, Su.o)("RS")] >= Su.D)
          };
          return Ru || uu((0, Su.A)()), mu.c.onFrame(uu)
        }), [Ru]), (0, gu.useEffect)((() => {
          Ru || pu(!1)
        }), [Ru, pu]), (0, gu.useEffect)((() => {
          var uu;
          xu && (null === (uu = Eu.current) || void 0 === uu || uu.scrollIntoView({
            block: "nearest"
          }))
        }), [xu]);
        const Tu = LJ.pb.find((uu => uu.value === (null === Ru || void 0 === Ru ? void 0 : Ru.family)));
        return (0, zu.jsxs)("div", {
          ref: Eu,
          className: Lu()("SettingBox ControllerTester", {
            Testing: xu
          }),
          children: [(0, zu.jsxs)("div", {
            className: "ControllerTesterHeader",
            children: [(0, zu.jsxs)("div", {
              className: "ControllerTesterInfo",
              children: [Ru && (0, zu.jsx)("div", {
                children: uu("controller:settingsTesterFamily", {
                  family: Tu ? uu(Tu.labelKey) : Ru.family
                })
              }), Ru && (0, zu.jsx)("div", {
                className: "ControllerTesterPadId",
                children: Ru.id
              }), !Ru && (0, zu.jsx)("div", {
                children: uu("controller:settingsTesterNoPad")
              })]
            }), (Ru || xu) && (0, zu.jsx)(bJ.e, {
              className: "ControllerTesterToggle",
              onClick: () => {
                pu(!xu)
              },
              children: uu(xu ? "controller:settingsTesterStop" : "controller:settingsTesterStart")
            })]
          }), Ru && !xu && (0, zu.jsx)("div", {
            className: "ControllerSettingsHint",
            children: uu("controller:settingsTesterHint")
          }), xu && (0, zu.jsxs)("div", {
            className: "ControllerTesterBanner",
            children: [(0, zu.jsx)(gJ.c, {
              text: uu("controller:settingsTesterTesting", {
                button: gJ.d
              }),
              glyph: (0, Vu.j)("menuBack")
            }), (0, zu.jsx)("div", {
              ref: Qu,
              className: "ControllerTesterExitFill"
            })]
          }), (0, zu.jsxs)("div", {
            className: "ControllerTesterBody",
            children: [(0, zu.jsx)(QN, {
              deadzone: yu.left.deadzone,
              dotRef: Nu,
              labelKey: yu.left.labelKey
            }), (0, zu.jsx)("div", {
              className: "ControllerTesterButtons",
              children: Su._.map((uu => {
                const yu = (0, Su.o)(uu);
                return (0, zu.jsx)("div", {
                  ref: uu => {
                    Ju.current[yu] = uu
                  },
                  className: (0, Su.O)(yu) ? "ControllerTesterButton ControllerTesterTrigger" : "ControllerTesterButton",
                  children: (0, zu.jsx)(xQ, {
                    glyph: uu,
                    family: null === Ru || void 0 === Ru ? void 0 : Ru.family
                  })
                }, uu)
              }))
            }), (0, zu.jsx)(QN, {
              deadzone: yu.right.deadzone,
              dotRef: Xu,
              labelKey: yu.right.labelKey
            })]
          })]
        })
      },
      XN = (0, gu.memo)((function() {
        const {
          t: uu
        } = (0, Ku.E)(), Ru = (0, Bu.m)(), [yu, Eu] = (0, gu.useState)(!1);
        return (0, gu.useEffect)((() => {
          if (!yu) return;
          const uu = window.setTimeout((() => {
            Eu(!1)
          }), LJ.Cb);
          return () => {
            window.clearTimeout(uu)
          }
        }), [yu]), (0, zu.jsxs)("div", {
          className: "SettingsMenuRightInner ControllerCategory",
          children: [(0, zu.jsx)(zJ, {
            text: uu("controller:settingsLook")
          }), (0, zu.jsx)(wJ, {
            settingKey: "lookSensitivityX",
            label: uu("controller:settingsLookSensitivityX"),
            range: LJ.ub,
            format: LJ.Q
          }), (0, zu.jsx)(wJ, {
            settingKey: "lookSensitivityY",
            label: uu("controller:settingsLookSensitivityY"),
            range: LJ.ub,
            format: LJ.Q
          }), (0, zu.jsx)(wJ, {
            settingKey: "aimLookSensitivity",
            label: uu("controller:settingsAimLookSensitivity"),
            range: LJ.j,
            format: LJ.Q
          }), (0, zu.jsx)(FJ, {
            label: uu("controller:settingsLookCurve"),
            hint: uu("controller:settingsLookCurveHint"),
            options: LJ.hb,
            value: Ru.lookCurve,
            onChange: uu => {
              (0, Bu.l)({
                lookCurve: uu
              })
            }
          }), (0, zu.jsx)(lJ.c, {
            label: uu("controller:settingsInvertLookX"),
            checked: Ru.invertLookX,
            onClick: uu => {
              (0, Bu.l)({
                invertLookX: uu
              })
            }
          }), (0, zu.jsx)(lJ.c, {
            label: uu("controller:settingsInvertLookY"),
            checked: Ru.invertLookY,
            onClick: uu => {
              (0, Bu.l)({
                invertLookY: uu
              })
            }
          }), (0, zu.jsx)(wJ, {
            settingKey: "lookDeadzone",
            label: uu("controller:settingsLookDeadzone"),
            range: LJ.E,
            format: LJ.J
          }), (0, zu.jsx)(OJ, {}), (0, zu.jsx)(zJ, {
            text: uu("controller:settingsMovement")
          }), (0, zu.jsx)(wJ, {
            settingKey: "moveDeadzone",
            label: uu("controller:settingsMoveDeadzone"),
            range: LJ.E,
            format: LJ.J
          }), (0, zu.jsx)(lJ.c, {
            label: uu("controller:settingsAutoSprint"),
            checked: Ru.autoSprint,
            onClick: uu => {
              (0, Bu.l)({
                autoSprint: uu
              })
            },
            circleInfoText: uu("controller:settingsAutoSprintInfo")
          }), (0, zu.jsx)(FJ, {
            label: uu("controller:settingsSneak"),
            options: LJ.yb,
            value: Ru.sneakMode,
            onChange: uu => {
              (0, Bu.l)({
                sneakMode: uu
              })
            }
          }), (0, zu.jsx)(zJ, {
            text: uu("controller:settingsButtons")
          }), (0, zu.jsx)(FJ, {
            label: uu("controller:settingsPromptFamily"),
            options: LJ.pb,
            value: Ru.promptFamily,
            onChange: uu => {
              (0, Bu.l)({
                promptFamily: uu
              })
            }
          }), (0, zu.jsx)(lJ.c, {
            label: uu("controller:settingsHideButtonHints"),
            checked: Ru.hideButtonHints,
            onClick: uu => {
              (0, Bu.l)({
                hideButtonHints: uu
              })
            }
          }), (0, zu.jsx)(lJ.c, {
            label: uu("controller:settingsVibration"),
            checked: Ru.vibration,
            onClick: uu => {
              (0, Bu.l)({
                vibration: uu
              }), uu && OK("preview")
            }
          }), (0, zu.jsx)(wJ, {
            settingKey: "cursorSpeed",
            label: uu("controller:settingsCursorSpeed"),
            range: LJ.B,
            format: LJ.Q
          }), (0, zu.jsx)(lJ.c, {
            label: uu("controller:settingsCursorMagnetism"),
            checked: Ru.cursorMagnetism,
            onClick: uu => {
              (0, Bu.l)({
                cursorMagnetism: uu
              })
            }
          }), (0, zu.jsx)(lJ.c, {
            label: uu("controller:settingsMenuBackToCategories"),
            checked: Ru.menuBackToCategories,
            onClick: uu => {
              (0, Bu.l)({
                menuBackToCategories: uu
              })
            }
          }), (0, zu.jsx)(KN, {
            layoutSetting: (0, zu.jsxs)(zu.Fragment, {
              children: [Vu.f.map((yu => (0, zu.jsx)(lJ.c, {
                label: uu(LJ.ab[yu]),
                checked: (0, Vu.w)(yu, Ru),
                onClick: uu => {
                  Eu(!(0, Vu.F)(yu, uu))
                }
              }, yu))), yu && (0, zu.jsx)("div", {
                className: "PadLayoutRefusedNotice",
                role: "status",
                children: uu("controller:settingsLayoutRefusedToast")
              })]
            })
          }), (0, zu.jsx)(aJ, {}), (0, zu.jsx)(zJ, {
            text: uu("controller:settingsAlternatives")
          }), (0, zu.jsx)("div", {
            className: "ControllerSettingsHint",
            children: uu("controller:settingsAlternativesHint")
          }), (0, zu.jsx)(FJ, {
            label: uu("controller:settingsMenuNavigation"),
            hint: uu("controller:settingsMenuNavigationHint"),
            options: LJ.lb,
            value: Ru.menuNavigation,
            onChange: uu => {
              (0, Bu.l)({
                menuNavigation: uu
              })
            }
          }), (0, zu.jsx)(FJ, {
            label: uu("controller:settingsInventoryNavigation"),
            hint: uu("controller:settingsInventoryNavigationHint"),
            options: LJ.Z,
            value: Ru.inventoryNavigation,
            onChange: uu => {
              (0, Bu.l)({
                inventoryNavigation: uu
              })
            }
          }), (0, zu.jsx)(FJ, {
            label: uu("controller:settingsQuickChat"),
            hint: uu("controller:settingsQuickChatHint"),
            options: LJ.rb,
            value: Ru.quickChat,
            onChange: uu => {
              (0, Bu.l)({
                quickChat: uu
              })
            }
          }), (0, zu.jsx)(FJ, {
            label: uu("controller:settingsLeaderboardButton"),
            hint: uu("controller:settingsLeaderboardButtonHint"),
            options: LJ.eb,
            value: Ru.leaderboardButton,
            onChange: uu => {
              (0, Bu.l)({
                leaderboardButton: uu
              })
            }
          }), (0, zu.jsx)(zJ, {
            text: uu("controller:settingsTester")
          }), (0, zu.jsx)(NN, {})]
        })
      }));
    (0, Ku.d)(Eu);
    for (const SN of (0, Qu.n)()) SN.connected ? mu.c.handleConnectionEvent(SN) : mu.c.handleDisconnectionEvent(SN);
    const VN = () => null !== mu.c.getActivePad(),
      rN = () => Oy.getState(),
      BN = () => Oy.isSteppingSlots(),
      xN = (uu, Ru) => {
        const yu = hK.getFocused();
        hK.isActive() && yu && uu.contains(yu) && hK.setFocus(Ru, {
          scroll: !1
        })
      }
  },
  7905: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Nu,
      h: () => Xu
    });
    var Eu = yu(1379),
      Ku = yu(1374);
    const Qu = {
        "054c": "playstation",
        "057e": "nintendo"
      },
      mu = "28de",
      Ju = new Set(["1205"]),
      Nu = (uu, Ru) => {
        const yu = (0, Eu.b)(uu);
        if ((null === yu || void 0 === yu ? void 0 : yu.vendor) === mu) return Ju.has(yu.product) ? "steamdeck" : "xbox";
        if (yu && Qu[yu.vendor]) return Qu[yu.vendor];
        if ((0, Ku.c)(uu)) return "nintendo";
        const Nu = `${uu} ${null!==Ru&&void 0!==Ru?Ru:""}`.toLowerCase();
        return /dualsense|dualshock|playstation|sony/.test(Nu) ? "playstation" : /nintendo|switch|joy-con|pro controller/.test(Nu) ? "nintendo" : /steam deck/.test(Nu) ? "steamdeck" : "xbox"
      },
      Xu = uu => {
        var Ru;
        return (null === (Ru = (0, Eu.b)(uu)) || void 0 === Ru ? void 0 : Ru.vendor) === mu
      }
  },
  7940: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Xu,
      h: () => Ju
    });
    var Eu = yu(7901);
    const Ku = ["capture", "keyboard", "wheel", "inventory", "cursor", "focus", "gameplay"],
      Qu = new Set(["capture", "gameplay"]),
      mu = ["Up", "Down", "Left", "Right"],
      Ju = uu => mu.includes(uu),
      Nu = .25;
    const Xu = new class {
      constructor() {
        this.consumers = new Map, this.activeName = null, this.jJ = new Array(Eu.W).fill(!1), this.previousHeld = new Array(Eu.W).fill(!1), this.consumedButtons = new Array(Eu.W).fill(!1), this.suppressedReleases = new Array(Eu.W).fill(!1), this.wakeOwned = new Array(Eu.W).fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.peek = null, this.lastFrame = (0, Eu.A)()
      }
      register(uu) {
        return this.consumers.has(uu.name) && console.warn(`Controller consumer "${uu.name}" registered twice; the newer one replaces it.`), this.consumers.set(uu.name, uu), () => {
          var Ru;
          this.consumers.get(uu.name) === uu && (this.activeName === uu.name ? (this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()) : (null === (Ru = this.peek) || void 0 === Ru ? void 0 : Ru.over) === uu.name && (this.peek = null), this.consumers.delete(uu.name))
        }
      }
      getActiveConsumerName() {
        return this.activeName
      }
      isButtonHeld(uu) {
        return this.jJ[(0, Eu.o)(uu)]
      }
      getLastFrame() {
        return this.lastFrame
      }
      clear() {
        this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()
      }
      reset() {
        this.deactivateCurrent(), this.activeName = null, this.jJ = new Array(Eu.W).fill(!1), this.previousHeld = new Array(Eu.W).fill(!1), this.consumedButtons.fill(!1), this.suppressedReleases.fill(!1), this.wakeOwned.fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.lastFrame = (0, Eu.A)()
      }
      dispatch(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.lastFrame = uu, this.previousHeld = this.jJ, this.jJ = (0, Eu.v)(uu.values, this.previousHeld);
        for (let Qu = 0; Qu < Eu.W; Qu++) this.suppressedReleases[Qu] = !this.jJ[Qu] && this.consumedButtons[Qu], this.jJ[Qu] || (this.consumedButtons[Qu] = !1), this.wakeOwned[Qu] && (this.jJ[Qu] ? (this.consumedButtons[Qu] = !0, this.wakeOwned[Qu] = !1) : uu.values[Qu] < Eu.T && (this.wakeOwned[Qu] = !1));
        Math.hypot(uu.leftStick.x, uu.leftStick.y) < Nu && (this.leftStickConsumed = !1), Math.hypot(uu.rightStick.x, uu.rightStick.y) < Nu && (this.rightStickConsumed = !1);
        const Ku = this.pickActive();
        if ((null === Ku || void 0 === Ku ? void 0 : Ku.name) !== this.activeName) {
          var mu, Ju, Xu, Vu, ru, Bu;
          const uu = this.activeName,
            Ru = {
              left: !this.leftStickConsumed,
              right: !this.rightStickConsumed
            },
            yu = null !== (mu = null === Ku || void 0 === Ku || null === (Ju = Ku.peek) || void 0 === Ju ? void 0 : Ju.call(Ku)) && void 0 !== mu ? mu : null,
            Qu = null === uu && !!yu && !(null === (Xu = this.consumers.get(yu.over)) || void 0 === Xu || !Xu.onPeekFrame),
            Nu = yu && (yu.over === uu || Qu) ? yu : null,
            xu = null !== this.peek && this.peek.over === (null === Ku || void 0 === Ku ? void 0 : Ku.name) ? this.peek : null;
          this.deactivateCurrent(null !== Nu, null !== xu), this.activeName = null !== (Vu = null === Ku || void 0 === Ku ? void 0 : Ku.name) && void 0 !== Vu ? Vu : null, null === uu || this.handOffPending || this.consumeAllHeld();
          const Su = null === (ru = null !== Nu && void 0 !== Nu ? Nu : xu) || void 0 === ru ? void 0 : ru.stick;
          "left" === Su && Ru.left ? this.leftStickConsumed = !1 : "right" === Su && Ru.right && (this.rightStickConsumed = !1), this.peek = Nu, Ku || null === uu ? Ku && (null === (Bu = this.idleResume) || void 0 === Bu ? void 0 : Bu.name) === Ku.name && (this.idleResume.left && (this.leftStickConsumed = !1), this.idleResume.right && (this.rightStickConsumed = !1)) : this.idleResume = {
            name: uu,
            left: Ru.left && this.leftStickConsumed,
            right: Ru.right && this.rightStickConsumed
          }, Ku && (this.idleResume = null);
          for (let Ku = 0; Ku < Eu.W; Ku++) this.previousHeld[Ku] && !this.jJ[Ku] && (this.suppressedReleases[Ku] = !0)
        }
        var xu, Su;
        (this.handOffPending = !1, Ku) && (yu && !Qu.has(Ku.name) && this.consumeWakePress(Ku), Ku.onFrame(this.buildInput(uu, Ru, yu)), this.peek && (null === (xu = this.consumers.get(this.peek.over)) || void 0 === xu || null === (Su = xu.onPeekFrame) || void 0 === Su || Su.call(xu, this.buildInput(uu, Ru, !1, this.peek.stick))))
      }
      consumeWakePress(uu) {
        for (let Ku = 0; Ku < Eu.W; Ku++) {
          var Ru, yu;
          const Qu = Eu._[Ku];
          (null !== (Ru = null === (yu = uu.wakePressActs) || void 0 === yu ? void 0 : yu.call(uu, Qu)) && void 0 !== Ru ? Ru : mu.includes(Qu)) || (this.jJ[Ku] ? this.consumedButtons[Ku] = !0 : this.lastFrame.values[Ku] >= Eu.Q && (this.wakeOwned[Ku] = !0))
        }
      }
      pickActive() {
        for (const uu of Ku) {
          const Ru = this.consumers.get(uu);
          if (Ru && Ru.isActive()) return Ru
        }
        return null
      }
      deactivateCurrent() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        var yu, Eu, Ku, Qu;
        this.activeName && (null === (yu = this.consumers.get(this.activeName)) || void 0 === yu || null === (Eu = yu.onDeactivate) || void 0 === Eu || Eu.call(yu, uu));
        this.peek && !Ru && (null === (Ku = this.consumers.get(this.peek.over)) || void 0 === Ku || null === (Qu = Ku.onDeactivate) || void 0 === Qu || Qu.call(Ku, !1));
        this.peek = null
      }
      consumeAllHeld() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.idleResume = null;
        for (let Ku = 0; Ku < Eu.W; Ku++) this.jJ[Ku] && (this.consumedButtons[Ku] = !0);
        const {
          leftStick: Ru,
          rightStick: yu
        } = this.lastFrame;
        this.leftStickConsumed = "left" !== uu && (this.leftStickConsumed || Math.hypot(Ru.x, Ru.y) >= Nu), this.rightStickConsumed = "right" !== uu && (this.rightStickConsumed || Math.hypot(yu.x, yu.y) >= Nu)
      }
      handOffHeldInput() {
        this.handOffPending = !0
      }
      consumeButton(uu) {
        const Ru = (0, Eu.o)(uu);
        this.jJ[Ru] && (this.consumedButtons[Ru] = !0)
      }
      buildInput(uu, Ru, yu, Ku) {
        const Qu = this.jJ,
          mu = this.previousHeld,
          Ju = Ku ? new Array(Eu.W).fill(!0) : [...this.consumedButtons],
          Nu = Ku ? Ju : [...this.suppressedReleases],
          Xu = !this.leftStickConsumed && (!Ku || "left" === Ku),
          Vu = !this.rightStickConsumed && (!Ku || "right" === Ku);
        return {
          frame: uu,
          dtMs: Ru,
          isHeld: uu => {
            const Ru = (0, Eu.o)(uu);
            return Qu[Ru] && !Ju[Ru]
          },
          wasPressed: uu => {
            const Ru = (0, Eu.o)(uu);
            return Qu[Ru] && !mu[Ru] && !Ju[Ru]
          },
          wasReleased: uu => {
            const Ru = (0, Eu.o)(uu);
            return !Qu[Ru] && mu[Ru] && !Nu[Ru]
          },
          value: Ru => {
            const yu = (0, Eu.o)(Ru);
            return Ju[yu] ? 0 : uu.values[yu]
          },
          leftStick: Xu ? uu.leftStick : {
            x: 0,
            y: 0
          },
          rightStick: Vu ? uu.rightStick : {
            x: 0,
            y: 0
          },
          wokeDevice: yu
        }
      }
    }
  },
  7920: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => ru.g,
      e: () => ru.j,
      g: () => Mu,
      h: () => Iu,
      l: () => Gu,
      m: () => Uu
    });
    var Eu = yu(64),
      Ku = yu(34),
      Qu = yu(1400),
      mu = yu(47),
      Ju = yu(7924),
      Nu = yu(7901),
      Xu = yu(7915),
      Vu = yu(7895),
      ru = yu(1938),
      Bu = yu(7926);
    const xu = {
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
      Su = "controllerSettings",
      pu = ["bindings", "promptFamily", "hideButtonHints", "swapSticks", "swapConfirmBack", "leaderboardButton"],
      Tu = ["auto", ...Ju.e],
      Wu = (uu, Ru) => "string" === typeof Ru && uu.includes(Ru),
      ju = uu => Ru => "number" === typeof Ru && Number.isFinite(Ru) ? (0, Bu.z)(Ru, uu) : void 0,
      Hu = uu => "boolean" === typeof uu ? uu : void 0,
      du = uu => Ru => Wu(uu, Ru) ? Ru : void 0,
      bu = {
        lookSensitivityX: ju(Bu.ub),
        lookSensitivityY: ju(Bu.ub),
        aimLookSensitivity: ju(Bu.j),
        invertLookX: Hu,
        invertLookY: Hu,
        lookCurve: du(Nu.P),
        lookDeadzone: ju(Bu.E),
        moveDeadzone: ju(Bu.E),
        swapSticks: Hu,
        autoSprint: Hu,
        sneakMode: du(["toggle", "hold"]),
        tapHoldTime: du(["short", "medium", "long"]),
        attackMode: du(["hold", "toggle"]),
        promptFamily: du(Tu),
        hideButtonHints: Hu,
        vibration: Hu,
        cursorSpeed: ju(Bu.B),
        cursorMagnetism: Hu,
        buttonRepeat: du(Nu.r),
        largePointer: Hu,
        menuBackToCategories: Hu,
        swapConfirmBack: Hu,
        menuNavigation: du(["hybrid", "focus", "cursor"]),
        inventoryNavigation: du(["hybrid", "slot", "cursor"]),
        quickChat: du(["wheel", "off"]),
        leaderboardButton: du(["shop", "leaderboard"]),
        gyroAiming: Hu,
        gyroSensitivity: ju(Bu.Y),
        gyroActivation: du(["always", "aiming", "button"]),
        gyroButton: du(Nu._),
        emoteButton: du(["tapHold", "wheel"])
      },
      Cu = [{
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
      ku = uu => {
        const Ru = {};
        if ("object" !== typeof uu || null === uu) return Ru;
        for (const [yu, Eu] of Object.entries(uu)) Object.prototype.hasOwnProperty.call(Xu.h, yu) && Wu(Nu._, Eu) && (Ru[yu] = Eu);
        return Ru
      },
      eu = uu => {
        const Ru = {};
        for (const yu of Object.keys(xu))("bindings" === yu ? Object.keys(uu.bindings).length > 0 : uu[yu] !== xu[yu]) && (Ru[yu] = uu[yu]);
        0 !== Object.keys(Ru).length ? mu.i.setItem(Su, Ru) : mu.i.removeItem(Su)
      };
    let Au = (() => {
        const uu = mu.i.getItem(Su),
          Ru = (uu => {
            const Ru = "object" === typeof uu && null !== uu ? uu : {},
              yu = {
                ...xu,
                bindings: ku(Ru.bindings)
              };
            for (const Ku of Object.keys(bu)) {
              const uu = bu[Ku](Ru[Ku]);
              void 0 !== uu && (yu[Ku] = uu)
            }
            const Eu = Object.keys(Ru).filter((uu => !!Object.prototype.hasOwnProperty.call(xu, uu) && ("bindings" === uu ? "object" !== typeof Ru.bindings || null === Ru.bindings || Object.keys(Ru.bindings).length !== Object.keys(yu.bindings).length : yu[uu] !== Ru[uu])));
            return Eu.length > 0 && console.warn(`Stored controller settings had invalid values, replaced with defaults: ${Eu.join(", ")}`), yu
          })(uu);
        return null !== uu && void 0 !== uu && eu(Ru), Ru
      })(),
      Du = {
        ...Au,
        ...(() => {
          if ("undefined" === typeof window) return {};
          const uu = {},
            Ru = new URLSearchParams(window.location.search);
          for (const {
              param: yu,
              key: Eu
            }
            of Cu) {
            const Ku = bu[Eu](Ru.get(yu));
            void 0 !== Ku && (uu[Eu] = Ku)
          }
          return uu
        })()
      };
    const Mu = () => Du,
      Iu = () => {
        var uu, Ru;
        const yu = Mu().promptFamily;
        return "auto" !== yu ? yu : null !== (uu = null === (Ru = Vu.c.getActivePad()) || void 0 === Ru ? void 0 : Ru.family) && void 0 !== uu ? uu : "xbox"
      },
      Gu = uu => {
        const Ru = Du;
        Au = {
          ...Au,
          ...uu
        }, eu(Au), Du = {
          ...Du,
          ...uu
        }, (uu => {
          Ku.k.Op(ru.j, Du), pu.some((Ru => uu[Ru] !== Du[Ru])) && Ku.k.Op(ru.g, Du)
        })(Ru)
      },
      Uu = () => {
        const [uu, Ru] = (0, Eu.useState)(Du);
        return (0, Qu.e)(ru.j, Ru), uu
      }
  },
  8403: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Ku
    });
    const Eu = new Set(["Alt", "AltGraph", "Meta", "OS", "AudioVolumeUp", "AudioVolumeDown", "AudioVolumeMute", "MediaPlayPause", "MediaPlay", "MediaPause", "MediaStop", "MediaTrackNext", "MediaTrackPrevious", "BrowserBack", "BrowserForward", "BrowserHome", "GoBack", "LaunchApplication1", "LaunchApplication2", "LaunchMail", "PrintScreen", "Unidentified"]),
      Ku = uu => Eu.has(uu)
  },
  7895: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => pu.e,
      c: () => Hu
    });
    var Eu = yu(7901),
      Ku = yu(7905);
    const Qu = .1,
      mu = .3;
    class Ju {
      constructor() {
        this.deadzone = 0, this.anchor = null, this.steadyMs = 0, this.lastMs = null, this.returning = !0, this.anchorLearned = !1
      }
      observe(uu, Ru) {
        const yu = null === this.lastMs ? 0 : Math.min(Math.max(0, Ru - this.lastMs), 100);
        this.lastMs = Ru;
        const Eu = Math.hypot(uu.x, uu.y);
        if (Eu >= mu) return this.anchor = null, void(this.returning = !0);
        Eu >= Qu || (this.returning = !1);
        const Ku = this.anchor;
        if (!Ku || Math.hypot(uu.x - Ku.x, uu.y - Ku.y) > .03) return this.anchorLearned && (this.returning = !1), this.anchor = {
          x: uu.x,
          y: uu.y
        }, this.steadyMs = 0, void(this.anchorLearned = !1);
        if (this.steadyMs += yu, this.steadyMs < 1e3) return;
        const Ju = Math.max(Eu, Math.hypot(Ku.x, Ku.y));
        Ju < Qu ? this.deadzone = 0 : this.returning && (this.deadzone = Ju + .05, this.anchorLearned = !0)
      }
      getDeadzone() {
        return this.deadzone
      }
      apply(uu) {
        return Math.hypot(uu.x, uu.y) < this.deadzone ? {
          x: 0,
          y: 0
        } : uu
      }
    }
    const Nu = (uu, Ru) => {
        var yu, Eu;
        return null !== (yu = uu && (null === (Eu = Object.getOwnPropertyDescriptor(uu, Ru)) || void 0 === Eu ? void 0 : Eu.get)) && void 0 !== yu ? yu : null
      },
      Xu = uu => {
        const Ru = uu.vendorName;
        return "string" === typeof Ru ? Ru : void 0
      },
      Vu = ((uu, Ru) => {
        const yu = Nu(uu, "index"),
          Eu = Nu(uu, "id"),
          Ku = Nu(uu, "connected"),
          Qu = Nu(uu, "mapping"),
          mu = Nu(uu, "buttons"),
          Ju = Nu(uu, "axes"),
          Vu = Nu(Ru, "pressed"),
          ru = Nu(Ru, "value");
        return yu && Eu && Ku && Qu && mu && Ju && Vu && ru ? uu => {
          const Ru = mu.call(uu),
            Nu = Ju.call(uu),
            Bu = {
              index: Number(yu.call(uu)),
              id: String(Eu.call(uu)),
              connected: !0 === Ku.call(uu),
              mapping: String(Qu.call(uu)),
              buttons: [],
              axes: [],
              vendorName: Xu(uu)
            };
          for (let yu = 0; yu < Ru.length; yu++) Bu.buttons.push({
            pressed: !0 === Vu.call(Ru[yu]),
            value: Number(ru.call(Ru[yu]))
          });
          for (let yu = 0; yu < Nu.length; yu++) Bu.axes.push(Number(Nu[yu]));
          return Bu
        } : null
      })("undefined" === typeof Gamepad ? null : Gamepad.prototype, "undefined" === typeof GamepadButton ? null : GamepadButton.prototype),
      ru = "undefined" === typeof Navigator ? null : Navigator.prototype.getGamepads;
    var Bu = yu(1367),
      xu = yu(1374);
    const Su = uu => ({
      pressed: uu,
      value: uu ? 1 : 0
    });
    var pu = yu(1938);
    const Tu = mu,
      Wu = uu => {
        const Ru = new Array(Eu.W).fill(0);
        for (let yu = 0; yu < Eu.W && yu < uu.buttons.length; yu++) {
          const Ku = uu.buttons[yu];
          Ru[yu] = Ku.pressed && !(0, Eu.O)(yu) ? Math.max(Ku.value, Eu.D) : Ku.value
        }
        return Ru
      },
      ju = (uu, Ru) => {
        var yu, Eu;
        return {
          x: null !== (yu = uu.axes[Ru]) && void 0 !== yu ? yu : 0,
          y: null !== (Eu = uu.axes[Ru + 1]) && void 0 !== Eu ? Eu : 0
        }
      };
    const Hu = new class {
      constructor(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Vu;
        this.readGamepads = uu, this.requireTrustedPads = Ru, this.nativeReader = yu, this.running = !1, this.listening = !1, this.rafId = 0, this.lastTimestampMs = 0, this.activeInfo = null, this.slots = [], this.trustedIndices = new Set, this.warnedNonStandardIds = new Set, this.loggedReadError = !1, this.frameListeners = new Set, this.connectionListeners = new Set, this.anyPadConnected = !1, this.connectedListeners = new Set, this.handleConnectionEvent = uu => {
          uu.isTrusted && this.trustedIndices.add(uu.gamepad.index), this.wake()
        }, this.handleDisconnectionEvent = uu => {
          this.trustedIndices.delete(uu.gamepad.index)
        }, this.sr = uu => {
          if (this.rafId = 0, !this.running) return;
          const Ru = 0 === this.lastTimestampMs ? 16 : Math.min(100, uu - this.lastTimestampMs);
          this.lastTimestampMs = uu;
          try {
            this.poll(uu, Ru)
          } finally {
            this.anyPadConnected && (this.rafId = requestAnimationFrame(this.sr))
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
      onFrame(uu) {
        return this.frameListeners.add(uu), () => {
          this.frameListeners.delete(uu)
        }
      }
      onActivePadChanged(uu) {
        return this.connectionListeners.add(uu), () => {
          this.connectionListeners.delete(uu)
        }
      }
      getActivePad() {
        return this.activeInfo
      }
      hasConnectedPad() {
        return this.anyPadConnected
      }
      onConnectedPadsChanged(uu) {
        return this.connectedListeners.add(uu), () => {
          this.connectedListeners.delete(uu)
        }
      }
      getActiveGamepad() {
        if (!this.activeInfo) return null;
        const uu = this.readPads()[this.activeInfo.index],
          Ru = uu ? this.readPad(uu) : null;
        return Ru && Ru.id === this.activeInfo.id ? uu : null
      }
      poll(uu, Ru) {
        var yu, Ku;
        const Qu = this.readPads();
        let mu = null,
          Nu = !1;
        const Xu = [],
          Vu = Math.max(Qu.length, this.slots.length);
        for (let Hu = 0; Hu < Vu; Hu++) {
          var ru;
          const Ru = Hu < Qu.length ? Qu[Hu] : null,
            yu = Ru ? this.readPad(Ru) : null;
          if (!yu || !yu.connected || !this.isUsable(yu)) {
            this.slots[Hu] = null;
            continue
          }
          let Ku = this.slots[Hu];
          Ku && Ku.id === yu.id || (Ku = {
            id: yu.id,
            jJ: [],
            leftSettled: !1,
            rightSettled: !1,
            leftRest: new Ju,
            rightRest: new Ju
          }, this.slots[Hu] = Ku);
          const Vu = ju(yu, 0),
            Bu = ju(yu, 2);
          !Ku.leftSettled && Math.hypot(Vu.x, Vu.y) < Tu && (Ku.leftSettled = !0), !Ku.rightSettled && Math.hypot(Bu.x, Bu.y) < Tu && (Ku.rightSettled = !0), Ku.leftRest.observe(Vu, uu), Ku.rightRest.observe(Bu, uu);
          const xu = Wu(yu),
            Su = (0, Eu.v)(xu, Ku.jJ),
            pu = Ku.jJ,
            du = Su.map(((uu, Ru) => uu && !pu[Ru]));
          Ku.jJ = Su;
          const bu = {
            pad: yu,
            slot: Ku,
            values: xu
          };
          Hu === (null === (ru = this.activeInfo) || void 0 === ru ? void 0 : ru.index) && yu.id === this.activeInfo.id ? (mu = bu, Nu = du.includes(!0)) : du.includes(!0) && Xu.push({
            polled: bu,
            rose: du
          })
        }
        const Bu = this.slots.some((uu => null !== uu));
        if (Bu !== this.anyPadConnected) {
          this.anyPadConnected = Bu;
          for (const uu of this.connectedListeners) uu()
        }
        const xu = null !== (yu = null === (Ku = mu) || void 0 === Ku ? void 0 : Ku.slot.jJ) && void 0 !== yu ? yu : [],
          Su = Nu ? void 0 : Xu.find((uu => {
            let {
              rose: Ru
            } = uu;
            return Ru.some(((uu, Ru) => uu && !xu[Ru]))
          }));
        if (Su ? (mu = Su.polled, this.setActive(Su.polled.pad)) : this.activeInfo && !mu && this.setActive(null), !mu || !this.activeInfo) return;
        const pu = ((uu, Ru) => {
          let {
            pad: yu,
            slot: Ku,
            values: Qu
          } = uu;
          const mu = (0, Eu.A)(Ru);
          return mu.values = Qu, Ku.leftSettled && (mu.leftStick = Ku.leftRest.apply(ju(yu, 0))), Ku.rightSettled && (mu.rightStick = Ku.rightRest.apply(ju(yu, 2))), mu
        })(mu, uu);
        for (const Eu of this.frameListeners) Eu(pu, Ru, this.activeInfo)
      }
      readPad(uu) {
        const Ru = this.readSnapshot(uu);
        return Ru && (0, xu.f)(Ru) ? (uu => {
          const Ru = Ru => {
              var yu;
              return null !== (yu = uu.buttons[Ru]) && void 0 !== yu ? yu : Su(!1)
            },
            yu = Ru => {
              var yu;
              return null !== (yu = uu.axes[Ru]) && void 0 !== yu ? yu : 0
            },
            Eu = uu.axes.length > 9,
            Ku = Eu ? (uu => {
              const Ru = 0 !== uu;
              return {
                up: Ru && (uu >= -1 && uu < -.7 || uu >= .95 && uu <= 1),
                right: Ru && uu >= -.75 && uu < -.1,
                down: Ru && uu >= -.2 && uu < .45,
                left: Ru && uu >= .4 && uu <= 1
              }
            })(yu(9)) : {
              up: yu(5) < -.5,
              down: yu(5) > .5,
              left: yu(4) < -.5,
              right: yu(4) > .5
            };
          return {
            ...uu,
            mapping: "standard",
            buttons: [Ru(1), Ru(2), Ru(0), Ru(3), Ru(4), Ru(5), Ru(6), Ru(7), Ru(8), Ru(9), Ru(10), Ru(11), Su(Ku.up), Su(Ku.down), Su(Ku.left), Su(Ku.right), Ru(12)],
            axes: [yu(0), yu(1), yu(2), yu(Eu ? 5 : 3)]
          }
        })(Ru) : Ru
      }
      readSnapshot(uu) {
        if (this.nativeReader) try {
          return this.nativeReader(uu)
        } catch {
          if (this.requireTrustedPads) return null
        }
        return this.requireTrustedPads ? null : (uu => {
          const Ru = uu;
          return {
            index: Ru.index,
            id: Ru.id,
            connected: Ru.connected,
            mapping: Ru.mapping,
            buttons: Array.from(Ru.buttons, (uu => ({
              pressed: uu.pressed,
              value: uu.value
            }))),
            axes: Array.from(Ru.axes),
            vendorName: Xu(uu)
          }
        })(uu)
      }
      isUsable(uu) {
        return !(0, Bu.d)(uu.id) && ("standard" !== uu.mapping ? (this.warnedNonStandardIds.has(uu.id) || (this.warnedNonStandardIds.add(uu.id), console.warn(`Controller "${uu.id}" has no standard button mapping, so it is ignored.`)), !1) : !this.requireTrustedPads || this.trustedIndices.has(uu.index))
      }
      setActive(uu) {
        this.activeInfo = uu ? {
          index: uu.index,
          id: uu.id,
          family: (0, Ku.d)(uu.id, uu.vendorName)
        } : null;
        for (const Ru of this.connectionListeners) Ru(this.activeInfo)
      }
      readPads() {
        try {
          return this.readGamepads()
        } catch (uu) {
          return this.loggedReadError || (this.loggedReadError = !0, console.warn("Reading gamepads failed; controller input is unavailable.", uu)), []
        }
      }
      wake() {
        this.running && 0 === this.rafId && (this.lastTimestampMs = 0, this.rafId = requestAnimationFrame(this.sr))
      }
    }((() => ru ? ru.call(navigator) : []), !0);
    Hu.listenForConnections()
  },
  8410: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Eu
    });
    const Eu = {
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
  8486: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => mu,
      e: () => Ju
    });
    var Eu = yu(34),
      Ku = yu(8475);
    let Qu = !1;
    const mu = () => Qu,
      Ju = uu => {
        uu !== Qu && (Qu = uu, Eu.k.Op(Ku.h, Qu))
      }
  },
  8482: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Ju,
      e: () => Nu
    });
    var Eu = yu(34),
      Ku = yu(8475);
    let Qu = null,
      mu = 0;
    const Ju = () => Qu,
      Nu = uu => {
        null === uu && null === Qu || (Qu = null === uu ? null : {
          id: ++mu,
          holdMs: uu
        }, Eu.k.Op(Ku.l, Qu))
      }
  },
  8489: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => mu,
      d: () => Ju
    });
    var Eu = yu(34),
      Ku = yu(8475);
    let Qu = !1;
    const mu = () => Qu,
      Ju = uu => {
        uu !== Qu && (Qu = uu, Eu.k.Op(Ku.m, Qu))
      }
  },
  8566: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => mu,
      c: () => Ju
    });
    var Eu = yu(34),
      Ku = yu(8475);
    let Qu = !1;
    const mu = () => Qu,
      Ju = uu => {
        uu !== Qu && (Qu = uu, Eu.k.Op(Ku.p, Qu))
      }
  },
  8441: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Eu
    });
    class Eu {
      constructor() {
        this.downAtMs = null
      }
      update(uu, Ru, yu, Eu) {
        if (uu) return this.downAtMs = yu, null;
        if (null === this.downAtMs) return null;
        const Ku = yu - this.downAtMs >= Eu;
        return Ru ? Ku ? (this.downAtMs = null, "hold") : null : (this.downAtMs = null, Ku ? "hold" : "tap")
      }
      release() {
        this.downAtMs = null
      }
    }
  },
  7957: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => ru,
      i: () => Bu,
      l: () => Ju,
      n: () => Hu,
      r: () => ju
    });
    var Eu = yu(47),
      Ku = yu(7924),
      Qu = yu(7901);
    const mu = (() => {
        try {
          return yu(7963)
        } catch {
          return null
        }
      })(),
      Ju = [...Qu._, "LeftStick", "RightStick"],
      Nu = new Map,
      Xu = {
        xbox: "xbox",
        playstation: "playstation",
        nintendo: "nintendo",
        steamdeck: "steamdeck",
        generic: "xbox"
      },
      Vu = (new Set(Object.values(Xu)), {
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
      ru = (uu, Ru) => {
        var yu, Eu;
        return null !== (yu = null === (Eu = Vu[Xu[uu]]) || void 0 === Eu ? void 0 : Eu[Ru]) && void 0 !== yu ? yu : 1
      },
      Bu = (uu, Ru) => {
        const yu = `./${Xu[uu]}/${Ru}.svg`;
        let Eu = Nu.get(yu);
        return void 0 === Eu && (Eu = mu ? mu(yu) : "", Nu.set(yu, Eu)), Eu
      },
      xu = new Set,
      Su = [],
      pu = uu => {
        if (!xu.has(uu)) {
          xu.add(uu);
          for (const Ru of Ju) {
            const yu = Bu(uu, Ru);
            if (yu) {
              const uu = new Image;
              uu.crossOrigin = "anonymous", uu.src = yu, Su.push(uu)
            }
          }
        }
      },
      Tu = "controllerGlyphFamily";
    let Wu = null;
    const ju = uu => {
        uu !== Wu && (Wu = uu, Eu.i.setItem(Tu, uu), pu(uu))
      },
      Hu = () => {
        const uu = Eu.i.getItem(Tu);
        (0, Ku.h)(uu) && uu !== Wu && (Wu = uu, pu(uu))
      }
  },
  8594: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Lu,
      f: () => zu
    });
    var Eu = yu(64),
      Ku = yu(34),
      Qu = yu(1400),
      mu = yu(7912),
      Ju = yu(7895),
      Nu = yu(7940),
      Xu = yu(7920);
    const Vu = {
        x: 0,
        y: 0,
        z: 0
      },
      ru = Math.PI / 180,
      Bu = uu => Math.hypot(uu.x, uu.y, uu.z),
      xu = (uu, Ru) => ({
        x: uu.x * Ru,
        y: uu.y * Ru,
        z: uu.z * Ru
      }),
      Su = (uu, Ru) => ({
        x: uu.x + Ru.x,
        y: uu.y + Ru.y,
        z: uu.z + Ru.z
      }),
      pu = (uu, Ru) => ({
        x: uu.x - Ru.x,
        y: uu.y - Ru.y,
        z: uu.z - Ru.z
      }),
      Tu = uu => {
        const Ru = Bu(uu);
        return 0 === Ru ? Vu : xu(uu, 1 / Ru)
      },
      Wu = uu => ({
        min: {
          ...uu
        },
        max: {
          ...uu
        }
      }),
      ju = (uu, Ru) => ({
        min: {
          x: Math.min(uu.min.x, Ru.x),
          y: Math.min(uu.min.y, Ru.y),
          z: Math.min(uu.min.z, Ru.z)
        },
        max: {
          x: Math.max(uu.max.x, Ru.x),
          y: Math.max(uu.max.y, Ru.y),
          z: Math.max(uu.max.z, Ru.z)
        }
      }),
      Hu = (uu, Ru) => uu.max.x - uu.min.x <= Ru && uu.max.y - uu.min.y <= Ru && uu.max.z - uu.min.z <= Ru;
    class du {
      constructor() {
        this.bias = Vu, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = Vu, this.windowSec = 0
      }
      update(uu) {
        const Ru = this.gyroRange ? ju(this.gyroRange, uu.gyro) : Wu(uu.gyro),
          yu = uu.accel ? this.accelRange ? ju(this.accelRange, uu.accel) : Wu(uu.accel) : null;
        if (!Hu(Ru, 1) || yu && !Hu(yu, .01)) return void this.restartWindow(uu);
        if (this.gyroRange = Ru, this.accelRange = yu, this.sum = Su(this.sum, xu(uu.gyro, uu.dtSec)), this.windowSec += uu.dtSec, this.windowSec < 1) return;
        const Eu = xu(this.sum, 1 / this.windowSec);
        if (Bu(Eu) > 5) return;
        const Ku = pu(Eu, this.bias);
        let Qu = 0;
        !this.calibrated || this.windowSec >= 3 ? Qu = 1 : Bu(Ku) <= 1 && (Qu = Math.min(1, uu.dtSec / 1)), this.bias = Su(this.bias, xu(Ku, Qu)), this.calibrated = this.calibrated || Qu > 0
      }
      correct(uu) {
        return pu(uu, this.bias)
      }
      getBias() {
        return this.bias
      }
      isCalibrated() {
        return this.calibrated
      }
      reset() {
        this.bias = Vu, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = Vu, this.windowSec = 0
      }
      restartWindow(uu) {
        this.gyroRange = Wu(uu.gyro), this.accelRange = uu.accel ? Wu(uu.accel) : null, this.sum = Vu, this.windowSec = 0
      }
    }
    class bu {
      constructor() {
        this.down = null
      }
      update(uu, Ru, yu) {
        const Eu = Tu(xu(Ru, -1));
        if (!this.down) return this.down = Eu, Eu;
        const Ku = xu(uu, ru * yu),
          Qu = this.down,
          mu = {
            x: Qu.x - (Ku.y * Qu.z - Ku.z * Qu.y),
            y: Qu.y - (Ku.z * Qu.x - Ku.x * Qu.z),
            z: Qu.z - (Ku.x * Qu.y - Ku.y * Qu.x)
          },
          Ju = 0 === Bu(Eu) ? 0 : Math.min(1, yu / .25);
        var Nu, Xu;
        return this.down = Tu((Xu = Ju, Su(Nu = mu, xu(pu(Eu, Nu), Xu)))), this.down
      }
      reset() {
        this.down = null
      }
    }
    class Cu {
      constructor() {
        this.entries = [], this.windowSec = 0
      }
      apply(uu, Ru, yu) {
        const Eu = Math.hypot(uu, Ru),
          Ku = Math.max(0, Math.min(1, (Eu - 2) / 2)),
          Qu = {
            yaw: uu * (1 - Ku),
            pitch: Ru * (1 - Ku),
            dtSec: yu
          };
        for (this.entries.push(Qu), this.windowSec += yu; this.entries.length > 1 && this.windowSec - this.entries[0].dtSec >= .125;) this.windowSec -= this.entries[0].dtSec, this.entries.shift();
        let mu = 0,
          Ju = 0;
        for (const Xu of this.entries) mu += Xu.yaw * Xu.dtSec, Ju += Xu.pitch * Xu.dtSec;
        const Nu = this.windowSec > 0 ? {
          yaw: mu / this.windowSec,
          pitch: Ju / this.windowSec
        } : {
          yaw: Qu.yaw,
          pitch: Qu.pitch
        };
        return {
          yaw: uu * Ku + Nu.yaw,
          pitch: Ru * Ku + Nu.pitch
        }
      }
      reset() {
        this.entries = [], this.windowSec = 0
      }
    }
    class ku {
      constructor() {
        this.calibrator = new du, this.gravity = new bu, this.smoother = new Cu
      }
      process(uu, Ru, yu) {
        const Eu = Math.max(0, Math.min(.05, Ru));
        this.calibrator.update({
          ...uu,
          dtSec: Eu
        });
        const Ku = this.calibrator.correct(uu.gyro);
        let Qu = Ku.y;
        "player" === yu && uu.accel && (Qu = ((uu, Ru) => {
          const yu = uu.y * Ru.y + uu.z * Ru.z;
          return -Math.sign(yu) * Math.min(1.41 * Math.abs(yu), Math.hypot(uu.y, uu.z))
        })(Ku, this.gravity.update(Ku, uu.accel, Eu)));
        const mu = this.smoother.apply(Qu, Ku.x, Eu),
          Ju = ((uu, Ru) => {
            const yu = Math.hypot(uu, Ru);
            if (yu >= 1) return {
              yaw: uu,
              pitch: Ru
            };
            const Eu = yu / 1;
            return {
              yaw: uu * Eu,
              pitch: Ru * Eu
            }
          })(mu.yaw, mu.pitch);
        return {
          yawDeg: Ju.yaw * Eu,
          pitchDeg: Ju.pitch * Eu
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
    const eu = (uu, Ru) => {
      var yu, Eu, Ku;
      const Qu = Ru * ru,
        mu = null !== (yu = uu.beta) && void 0 !== yu ? yu : 0,
        Ju = null !== (Eu = uu.gamma) && void 0 !== Eu ? Eu : 0;
      return {
        x: mu * Math.cos(Qu) - Ju * Math.sin(Qu),
        y: mu * Math.sin(Qu) + Ju * Math.cos(Qu),
        z: null !== (Ku = uu.alpha) && void 0 !== Ku ? Ku : 0
      }
    };
    var Au = yu(8603);
    class Du {
      constructor(uu, Ru, yu) {
        this.hid = uu, this.sink = Ru, this.onControllersChanged = yu, this.controllers = new Map, this.running = !1, this.openedCount = 0, this.opening = new Set, this.disconnectedWhileOpening = new Set, this.switchPacketCounter = 0, this.onConnect = uu => {
          this.openController(uu.device).catch((uu => {
            console.warn("Could not open motion controller", uu)
          }))
        }, this.onDisconnect = uu => {
          this.opening.has(uu.device) && this.disconnectedWhileOpening.add(uu.device);
          const Ru = this.controllers.get(uu.device);
          Ru && (this.forget(Ru), this.onControllersChanged())
        }
      }
      async start() {
        if (this.running) return;
        this.running = !0, this.hid.addEventListener("connect", this.onConnect), this.hid.addEventListener("disconnect", this.onDisconnect);
        const uu = await this.hid.getDevices();
        for (const Ru of uu) await this.openController(Ru).catch((uu => {
          console.warn("Could not open motion controller", uu)
        }))
      }
      stop() {
        this.running = !1, this.hid.removeEventListener("connect", this.onConnect), this.hid.removeEventListener("disconnect", this.onDisconnect);
        for (const uu of [...this.controllers.values()]) this.forget(uu);
        this.onControllersChanged()
      }
      async request() {
        const uu = await this.hid.requestDevice({
          filters: Au.j
        });
        let Ru = 0;
        for (const yu of uu) await this.openController(yu).catch((uu => {
          console.warn("Could not open motion controller", uu), Ru++
        }));
        return Ru
      }
      async hasGrantedController() {
        return (await this.hid.getDevices()).some((uu => null !== (0, Au.f)(uu.vendorId, uu.productId)))
      }
      getConnectedKinds() {
        return [...this.controllers.values()].map((uu => uu.kind))
      }
      forget(uu) {
        uu.device.removeEventListener("inputreport", uu.onReport), this.controllers.get(uu.device) === uu && this.controllers.delete(uu.device)
      }
      async openController(uu) {
        const Ru = (0, Au.f)(uu.vendorId, uu.productId);
        if (!Ru || !this.running || this.controllers.has(uu) || this.opening.has(uu)) return;
        this.opening.add(uu);
        let yu = !1;
        try {
          uu.opened || await uu.open()
        } finally {
          this.opening.delete(uu), yu = this.disconnectedWhileOpening.delete(uu)
        }
        if (yu) return void uu.close().catch((uu => {
          console.debug("Could not close an unplugged motion controller", uu)
        }));
        if (!this.running) return;
        const Eu = {
          device: uu,
          kind: Ru,
          lastClock: null,
          lastEventMs: null,
          lastReadingMs: -1 / 0,
          openedOrder: this.openedCount++,
          onReport: uu => {
            this.onReport(Eu, uu)
          }
        };
        this.controllers.set(uu, Eu), uu.addEventListener("inputreport", Eu.onReport), this.onControllersChanged();
        try {
          await this.enableMotion(Eu)
        } catch (Ku) {
          console.warn(`Could not turn on motion for ${Ru}`, Ku), this.controllers.get(uu) === Eu && (this.forget(Eu), this.onControllersChanged())
        }
      }
      async enableMotion(uu) {
        let {
          device: Ru,
          kind: yu
        } = uu;
        if ((0, Au.g)(yu))
          for (const Eu of Au.y[yu]) await Ru.receiveFeatureReport(Eu).catch((uu => {
            console.debug(`Motion controller feature report ${Eu} unavailable`, uu)
          }));
        else
          for (let Eu = 0; Eu < 2; Eu++)
            for (const {
                subcommand: uu,
                args: yu
              }
              of Au.z) await Ru.sendReport(Au.D, (0, Au.b)(this.switchPacketCounter++, uu, yu)), await new Promise((uu => {
              setTimeout(uu, 60)
            }))
      }
      onReport(uu, Ru) {
        const yu = (0, Au.r)(uu.kind, Ru.reportId, Ru.data, uu.device.productId);
        if (!yu) return;
        const Eu = null === uu.lastEventMs ? 0 : (Ru.timeStamp - uu.lastEventMs) / 1e3;
        uu.lastEventMs = Ru.timeStamp;
        let Ku = yu.dtSec;
        if (null !== Ku && Eu > 0 && (Ku = Math.max(.001, Math.min(.017, Eu / yu.readings.length))), null === Ku && null !== yu.sensorClock && (0, Au.g)(uu.kind)) {
          const Ru = (0, Au.v)(uu.kind, uu.lastClock, yu.sensorClock);
          uu.lastClock = yu.sensorClock, Ku = 0 === Ru ? null : Ru
        }
        if (uu.lastReadingMs = Ru.timeStamp, this.isPreferred(uu, Ru.timeStamp))
          for (const mu of yu.readings) {
            var Qu;
            this.sink(mu, null !== (Qu = Ku) && void 0 !== Qu ? Qu : Eu, `hid${uu.openedOrder}`)
          }
      }
      isPreferred(uu, Ru) {
        const yu = uu => 1e6 * Au.o[uu.kind] + uu.openedOrder;
        for (const Eu of this.controllers.values())
          if (Eu !== uu && Ru - Eu.lastReadingMs < 500 && yu(Eu) < yu(uu)) return !1;
        return !0
      }
    }
    var Mu = yu(106);
    const Iu = () => DeviceMotionEvent,
      Gu = () => "undefined" !== typeof window && "undefined" !== typeof DeviceMotionEvent && window.isSecureContext && (0, Mu.isMobile)(),
      Uu = () => {
        var uu;
        const Ru = null === (uu = window.screen.orientation) || void 0 === uu ? void 0 : uu.angle;
        return "number" === typeof Ru ? Ru : "number" === typeof window.orientation ? window.orientation : 0
      };
    class nu {
      constructor(uu, Ru) {
        this.sink = uu, this.onStateChanged = Ru, this.state = "off", this.lastEventMs = null, this.noSensorTimer = null, this.wanted = !1, this.permissionRequest = null, this.granted = !1, this.onGesture = () => {
          this.requestPermission().catch((uu => {
            console.warn("Could not enable the motion sensor", uu)
          }))
        }, this.onMotion = uu => {
          const Ru = uu.rotationRate;
          if (!Ru || null === Ru.alpha && null === Ru.beta && null === Ru.gamma) return;
          const yu = null === this.lastEventMs ? 0 : (uu.timeStamp - this.lastEventMs) / 1e3;
          this.lastEventMs = uu.timeStamp, this.clearNoSensorTimer(), this.setState("on"), this.sink({
            gyro: eu(Ru, Uu()),
            accel: null
          }, yu, "phone")
        }
      }
      getState() {
        return this.state
      }
      start() {
        if (this.wanted = !0, "off" === this.state) return "function" !== typeof Iu().requestPermission || this.granted ? void this.listen() : (this.setState("needsPermission"), void this.armGestureRequest())
      }
      requestPermission() {
        return this.permissionRequest || (this.permissionRequest = this.askPermission().finally((() => {
          this.permissionRequest = null
        }))), this.permissionRequest
      }
      async askPermission() {
        const uu = Iu().requestPermission;
        if (!this.wanted) return;
        if ("function" !== typeof uu) return void this.listen();
        let Ru;
        this.disarmGestureRequest();
        try {
          Ru = await uu.call(DeviceMotionEvent)
        } catch (yu) {
          throw this.wanted && "needsPermission" === this.state && this.armGestureRequest(), yu
        }
        this.wanted && ("granted" === Ru ? (this.granted = !0, this.listen()) : this.setState("denied"))
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
      setState(uu) {
        this.state !== uu && (this.state = uu, this.onStateChanged())
      }
    }
    const su = "controllerGyroStatusChanged",
      tu = {
        RD: 0,
        mD: 0
      },
      lu = uu => {
        var Ru, yu;
        return "undefined" === typeof document || (null === (Ru = null === (yu = document.featurePolicy) || void 0 === yu ? void 0 : yu.allowsFeature(uu)) || void 0 === Ru || Ru)
      };
    class gu {
      constructor() {
        this.processor = new ku, this.hid = void 0, this.hidBlocked = void 0, this.phone = void 0, this.phoneBlocked = void 0, this.source = null, this.pendingYawDeg = 0, this.pendingPitchDeg = 0, this.lastDrainMs = -1 / 0, this.lastHidReadingMs = -1 / 0, this.running = !1, this.phoneRunning = !1, this.syncWithSettings = uu => {
          const Ru = uu.gyroAiming && Ju.c.hasConnectedPad();
          var yu, Eu;
          Ru !== this.phoneRunning && (this.phoneRunning = Ru, Ru ? null === (yu = this.phone) || void 0 === yu || yu.start() : null === (Eu = this.phone) || void 0 === Eu || Eu.stop());
          if (uu.gyroAiming !== this.running) {
            var Ku, Qu;
            if (this.running = uu.gyroAiming, this.running) null === (Ku = this.hid) || void 0 === Ku || Ku.start().catch((uu => {
              console.warn("Could not open motion controllers", uu)
            }));
            else null === (Qu = this.hid) || void 0 === Qu || Qu.stop(), this.processor.reset(), this.source = null, this.discardPending();
            this.publishStatus()
          }
        }, this.publishStatus = () => {
          Ku.k.Op(su, this.getStatus())
        };
        const uu = (() => {
            var uu;
            return "undefined" !== typeof navigator && window.isSecureContext && null !== (uu = navigator.hid) && void 0 !== uu ? uu : null
          })(),
          Ru = lu("hid");
        this.hidBlocked = null !== uu && !Ru, this.hid = uu && Ru ? new Du(uu, ((uu, Ru, yu) => {
          this.lastHidReadingMs = performance.now(), this.feed(uu, Ru, "player", yu)
        }), this.publishStatus) : null;
        const yu = lu("accelerometer") && lu("gyroscope");
        this.phoneBlocked = Gu() && !yu, this.phone = Gu() && yu ? new nu(((uu, Ru, yu) => {
          performance.now() - this.lastHidReadingMs >= 500 && this.feed(uu, Ru, "local", yu)
        }), this.publishStatus) : null, Ku.k.subscribe(Xu.e, this.syncWithSettings), Ju.c.onConnectedPadsChanged((() => {
          this.syncWithSettings((0, Xu.g)()), this.publishStatus()
        })), this.syncWithSettings((0, Xu.g)())
      }
      isSupported() {
        return null !== this.hid || null !== this.phone
      }
      getStatus() {
        var uu, Ru, yu, Eu;
        return {
          hidSupported: null !== this.hid,
          hidBlocked: this.hidBlocked,
          phoneSupported: null !== this.phone,
          phoneBlocked: this.phoneBlocked,
          controllers: null !== (uu = null === (Ru = this.hid) || void 0 === Ru ? void 0 : Ru.getConnectedKinds()) && void 0 !== uu ? uu : [],
          phoneMotion: null !== (yu = null === (Eu = this.phone) || void 0 === Eu ? void 0 : Eu.getState()) && void 0 !== yu ? yu : "off",
          padConnected: Ju.c.hasConnectedPad()
        }
      }
      async connectController() {
        return this.hid ? this.hid.request() : 0
      }
      async connectControllerIfNoneGranted() {
        this.hid && !await this.hid.hasGrantedController() && await this.hid.request()
      }
      async allowPhoneMotion() {
        var uu;
        await (null === (uu = this.phone) || void 0 === uu ? void 0 : uu.requestPermission())
      }
      drainLookDelta() {
        const uu = performance.now();
        uu - this.lastDrainMs > 500 && this.discardPending(), this.lastDrainMs = uu;
        const Ru = {
          yawDeg: this.pendingYawDeg,
          pitchDeg: this.pendingPitchDeg
        };
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0;
        const yu = (0, Xu.g)();
        return yu.gyroAiming && (uu => {
          let {
            activation: Ru,
            isHeld: yu,
            useButton: Eu,
            gyroButton: Ku
          } = uu;
          return "always" === Ru || yu("aiming" === Ru ? Eu : Ku)
        })({
          activation: yu.gyroActivation,
          isHeld: uu => Nu.d.isButtonHeld(uu),
          useButton: (0, mu.j)("use"),
          gyroButton: yu.gyroButton
        }) ? ((uu, Ru) => ({
          RD: -uu.yawDeg * Ru * ru,
          mD: -uu.pitchDeg * Ru * ru
        }))(Ru, yu.gyroSensitivity) : tu
      }
      discardPending() {
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0
      }
      injectMotion(uu, Ru) {
        this.feed(uu, Ru, "local", "injected")
      }
      getCalibration() {
        return this.processor.getCalibration()
      }
      feed(uu, Ru, yu, Eu) {
        this.source !== Eu && (this.processor.reset(), this.source = Eu);
        const Ku = this.processor.process(uu, Ru, yu);
        this.pendingYawDeg += Ku.yawDeg, this.pendingPitchDeg += Ku.pitchDeg
      }
    }
    let cu = null;
    const Lu = () => (cu || (cu = new gu), cu),
      zu = () => {
        const [uu, Ru] = (0, Eu.useState)((() => Lu().getStatus()));
        return (0, Qu.e)(su, Ru), (0, Eu.useEffect)((() => {
          Ru(Lu().getStatus())
        }), []), uu
      }
  },
  8603: (uu, Ru, yu) => {
    yu.d(Ru, {
      D: () => Hu,
      b: () => bu,
      f: () => Nu,
      g: () => Eu,
      j: () => Ju,
      k: () => Xu,
      o: () => Vu,
      r: () => ju,
      v: () => Tu,
      y: () => ku,
      z: () => Cu
    });
    const Eu = uu => "dualShock4" === uu || "dualSense" === uu,
      Ku = 1356,
      Qu = 1406,
      mu = [{
        vendorId: Ku,
        productId: 1476,
        kind: "dualShock4"
      }, {
        vendorId: Ku,
        productId: 2508,
        kind: "dualShock4"
      }, {
        vendorId: Ku,
        productId: 2976,
        kind: "dualShock4"
      }, {
        vendorId: Ku,
        productId: 3302,
        kind: "dualSense"
      }, {
        vendorId: Ku,
        productId: 3570,
        kind: "dualSense"
      }, {
        vendorId: Qu,
        productId: 8201,
        kind: "switchPro"
      }, {
        vendorId: Qu,
        productId: 8198,
        kind: "joyConLeft"
      }, {
        vendorId: Qu,
        productId: 8199,
        kind: "joyConRight"
      }],
      Ju = mu.map((uu => {
        let {
          vendorId: Ru,
          productId: yu
        } = uu;
        return {
          vendorId: Ru,
          productId: yu
        }
      })),
      Nu = (uu, Ru) => {
        var yu, Eu;
        return null !== (yu = null === (Eu = mu.find((yu => yu.vendorId === uu && yu.productId === Ru))) || void 0 === Eu ? void 0 : Eu.kind) && void 0 !== yu ? yu : null
      },
      Xu = {
        dualShock4: "DualShock 4",
        dualSense: "DualSense",
        switchPro: "Switch Pro Controller",
        joyConLeft: "Joy-Con (L)",
        joyConRight: "Joy-Con (R)"
      },
      Vu = {
        dualSense: 0,
        dualShock4: 0,
        switchPro: 0,
        joyConRight: 1,
        joyConLeft: 2
      },
      ru = 2e3 / 32767,
      Bu = 1 / 8192,
      xu = 936 / 13371,
      Su = (uu, Ru, yu) => ({
        x: uu.getInt16(Ru, !0) * yu,
        y: uu.getInt16(Ru + 2, !0) * yu,
        z: uu.getInt16(Ru + 4, !0) * yu
      }),
      pu = uu => 0 === uu.x && 0 === uu.y && 0 === uu.z,
      Tu = (uu, Ru, yu) => null === Ru ? null : "dualShock4" === uu ? 16 * (yu - Ru & 65535) / 3 / 1e6 : (yu - Ru >>> 0) / 3 / 1e6,
      Wu = (uu, Ru) => "joyConRight" === Ru ? {
        x: uu.y,
        y: -uu.z,
        z: -uu.x
      } : {
        x: -uu.y,
        y: uu.z,
        z: -uu.x
      },
      ju = (uu, Ru, yu, Ku) => Eu(uu) ? ((uu, Ru, yu, Eu) => {
        const Ku = ((uu, Ru, yu) => "dualShock4" === uu ? 1 === Ru && yu >= 63 ? 0 : 17 === Ru && yu >= 65 ? 2 : null : 1 === Ru && yu >= 62 ? 0 : 49 === Ru && yu >= 63 ? 1 : null)(uu, Ru, yu.byteLength);
        if (null === Ku) return null;
        if (2976 === Eu && 1 === Ru && 0 !== (4 & yu.getUint8(30))) return null;
        const Qu = Ku + ("dualShock4" === uu ? 12 : 15),
          mu = Su(yu, Qu, ru),
          Ju = Su(yu, Qu + 6, Bu);
        return pu(mu) && pu(Ju) ? null : {
          readings: [{
            gyro: mu,
            accel: Ju
          }],
          dtSec: null,
          sensorClock: "dualShock4" === uu ? yu.getUint16(Ku + 9, !0) : yu.getUint32(Ku + 27, !0)
        }
      })(uu, Ru, yu, Ku) : ((uu, Ru, yu) => {
        if (48 !== Ru && 49 !== Ru || yu.byteLength < 48) return null;
        const Eu = [];
        for (let Ku = 0; Ku < 3; Ku++) {
          const Ru = Su(yu, 12 + 12 * Ku, 244e-6),
            Qu = Su(yu, 18 + 12 * Ku, xu);
          if (pu(Qu) && pu(Ru)) return null;
          Eu.push({
            gyro: Wu(Qu, uu),
            accel: Wu(Ru, uu)
          })
        }
        return {
          readings: Eu,
          dtSec: .005,
          sensorClock: null
        }
      })(uu, Ru, yu),
      Hu = 1,
      du = [0, 1, 64, 64, 0, 1, 64, 64],
      bu = (uu, Ru, yu) => new Uint8Array([15 & uu, ...du, Ru, ...yu]),
      Cu = [{
        subcommand: 64,
        args: [1]
      }, {
        subcommand: 3,
        args: [48]
      }],
      ku = {
        dualShock4: [2, 5],
        dualSense: [5]
      }
  },
  7949: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Iu,
      c: () => gu,
      g: () => Wu,
      h: () => xu.g,
      j: () => nu,
      m: () => Uu,
      o: () => ju,
      r: () => su,
      t: () => xu.m,
      u: () => xu.n,
      v: () => cu,
      w: () => xu.r,
      y: () => eu
    });
    var Eu = yu(64),
      Ku = yu(27),
      Qu = yu(34),
      mu = yu(1400),
      Ju = yu(1250),
      Nu = yu(7920),
      Xu = yu(7952),
      Vu = yu(7905),
      ru = yu(7895),
      Bu = yu(7957),
      xu = yu(1354),
      Su = yu(7901),
      pu = yu(8403),
      Tu = yu(4150);
    const Wu = uu => !uu.repeat && !(0, pu.c)(uu.key),
      ju = "PadHidesCursor";
    let Hu = !1;
    const du = uu => {
        uu !== Hu && (Hu = uu, document.documentElement.classList.toggle(ju, uu))
      },
      bu = new class {
        constructor() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
        observe(uu) {
          let Ru = !1,
            yu = !1;
          uu.values.forEach(((uu, Eu) => {
            const Ku = uu >= (this.buttonsDown[Eu] ? Su.T : Su.Q);
            Ku && !this.buttonsDown[Eu] && (Ru = !0, yu = !0), this.buttonsDown[Eu] = Ku
          }));
          return [uu.leftStick, uu.rightStick].forEach(((uu, Eu) => {
            const Ku = this.stickAnchors[Eu];
            Math.hypot(uu.x, uu.y) < (Ku ? Su.T : .3) ? this.stickAnchors[Eu] = null : (!Ku || Math.hypot(uu.x - Ku.x, uu.y - Ku.y) >= .3) && (this.stickAnchors[Eu] = {
              x: uu.x,
              y: uu.y
            }, Ru = !0, yu ||= !Ku)
          })), Ru && (this.lastActivityMs = uu.timestampMs), this.onlyMovedOn = Ru && !yu, Ru
        }
        wasOnlyMoveOn() {
          return this.onlyMovedOn
        }
        isHolding(uu) {
          return !(uu - this.lastActivityMs >= 1e3) && (this.buttonsDown.some((uu => uu)) || this.stickAnchors.some((uu => null !== uu)))
        }
        isStickOffRest() {
          return this.stickAnchors.some((uu => null !== uu))
        }
        reset() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
      };
    let Cu = null,
      ku = !1;
    const eu = () => ku;
    let Au = null,
      Du = !1,
      Mu = null;
    const Iu = () => Mu;
    let Gu = !1;
    const Uu = uu => {
        if (!bu.observe(uu)) return !1;
        if (Gu && bu.wasOnlyMoveOn() && !(0, xu.g)()) return !1;
        Gu = !1, ku = !1;
        const Ru = !(0, xu.g)();
        return Ru && (Cu = uu, Mu = !Hu && Du && Au ? {
          ...Au
        } : null), Du = !1, (0, xu.m)("gamepad"), du(!0), (0, Bu.r)((0, Nu.h)()), Ru
      },
      nu = uu => !(0, xu.g)() || uu === Cu,
      su = () => {
        bu.reset()
      },
      tu = () => {
        const uu = Ku.d.get("activeInputDevice"),
          Ru = "gamepad" === uu ? ru.c.getActivePad() : null;
        return {
          device: uu,
          inGame: (0, Ju.r)(),
          padMovesMouse: null !== Ru && (0, Vu.h)(Ru.id)
        }
      },
      lu = uu => {
        document.pointerLockElement ? Au = null : (Au ??= {
          x: 0,
          y: 0
        }, Au.x = uu.clientX, Au.y = uu.clientY)
      },
      gu = () => {
        const uu = new Tu.c,
          Ru = Ru => {
            uu.reset(), Gu = !1, (0, xu.m)(Ru)
          },
          yu = uu => {
            if (uu.isTrusted) {
              if (uu instanceof KeyboardEvent) {
                if ((0, xu.l)(uu), !Wu(uu)) return;
                ku = !0
              }
              if (uu instanceof PointerEvent && "touch" === uu.pointerType) return Au = null, void Ru("touch");
              uu instanceof PointerEvent && (lu(uu), Du = !0), ("pointerdown" !== uu.type || (uu => {
                let {
                  device: Ru,
                  inGame: yu,
                  padMovesMouse: Eu
                } = uu;
                return !("gamepad" === Ru && Eu && yu)
              })(tu())) && Ru("keyboardMouse")
            }
          },
          Eu = uu => {
            uu.isTrusted && (Au = null, Ru("touch"))
          },
          mu = uu => {
            uu.isTrusted && "touch" !== uu.pointerType && !uu.relatedTarget && (Au = null)
          },
          Ju = yu => {
            if (!yu.isTrusted || "touch" === yu.pointerType) return;
            lu(yu);
            const Eu = yu.movementX || 0,
              Qu = yu.movementY || 0;
            if (0 === Eu && 0 === Qu) return;
            if (Du = !0, du(!1), "keyboardMouse" === Ku.d.get("activeInputDevice")) return;
            const mu = bu.isHolding(yu.timeStamp),
              Ju = tu(),
              Nu = (uu => {
                let {
                  device: Ru,
                  inGame: yu,
                  padMovesMouse: Eu,
                  padHolding: Ku
                } = uu;
                return ("gamepad" !== Ru || !Eu) && "keyboardMouse" !== Ru && (yu || !Ku)
              })({
                ...Ju,
                inGame: Ju.inGame && (0, Xu.e)(),
                padHolding: mu
              });
            Nu && uu.add(Eu, Qu, yu.timeStamp) && (Ru("keyboardMouse"), Gu = bu.isStickOffRest())
          },
          Nu = uu => {
            du("gamepad" === uu)
          },
          Vu = {
            capture: !0,
            passive: !0
          };
        window.addEventListener("keydown", yu, Vu), window.addEventListener("pointerdown", yu, Vu), window.addEventListener("wheel", yu, Vu), window.addEventListener("touchstart", Eu, Vu), window.addEventListener("pointermove", Ju, Vu), window.addEventListener("pointerout", mu, Vu);
        const ru = Qu.k.subscribe("appManagerUpdated|activeInputDevice", Nu);
        return Nu(Ku.d.get("activeInputDevice")), () => {
          window.removeEventListener("keydown", yu, Vu), window.removeEventListener("pointerdown", yu, Vu), window.removeEventListener("wheel", yu, Vu), window.removeEventListener("touchstart", Eu, Vu), window.removeEventListener("pointermove", Ju, Vu), window.removeEventListener("pointerout", mu, Vu), Au = null, Qu.k.unsubscribe(ru), du(!1)
        }
      },
      cu = () => {
        const [uu, Ru] = (0, Eu.useState)(Nu.h);
        return (0, mu.e)(Nu.b, (() => {
          Ru((0, Nu.h)())
        })), (0, mu.e)(ru.b, (() => {
          Ru((0, Nu.h)())
        })), uu
      }
  },
  7924: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Eu,
      h: () => Ku
    });
    const Eu = ["xbox", "playstation", "nintendo", "steamdeck", "generic"],
      Ku = uu => Eu.includes(uu)
  },
  7952: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Xu,
      e: () => Vu,
      i: () => Nu,
      l: () => Ju
    });
    var Eu = yu(27),
      Ku = yu(1583),
      Qu = yu(1663);
    const mu = new Map,
      Ju = (uu, Ru) => (mu.has(uu) && console.warn(`Gameplay blocker "${uu}" registered twice; the newer one replaces it.`), mu.set(uu, Ru), () => {
        mu.get(uu) === Ru && mu.delete(uu)
      }),
      Nu = () => (0, Qu.c)(document.activeElement),
      Xu = function() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        for (const [Ru, yu] of mu)
          if (!uu.includes(Ru) && yu()) return Ru;
        return null
      },
      Vu = function() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return "inGame" === Eu.d.get("gameState") && (!(0, Ku.p)() && (!Nu() && null === Xu(uu)))
      }
  },
  7901: (uu, Ru, yu) => {
    yu.d(Ru, {
      A: () => Qu,
      D: () => ru,
      F: () => Hu,
      I: () => Gu,
      J: () => du,
      K: () => Wu,
      O: () => Tu,
      P: () => Xu,
      Q: () => Bu,
      T: () => xu,
      W: () => Ku,
      _: () => Eu,
      c: () => nu,
      cb: () => Cu,
      f: () => Iu,
      fb: () => Mu,
      ib: () => Uu,
      j: () => Vu,
      mb: () => bu,
      n: () => Nu,
      o: () => Ju,
      r: () => eu,
      v: () => ju,
      w: () => ku
    });
    const Eu = ["A", "B", "X", "Y", "LB", "RB", "LT", "RT", "View", "Menu", "LS", "RS", "Up", "Down", "Left", "Right", "Home"],
      Ku = Eu.length,
      Qu = function() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return {
          values: new Array(Ku).fill(0),
          leftStick: {
            x: 0,
            y: 0
          },
          rightStick: {
            x: 0,
            y: 0
          },
          timestampMs: uu
        }
      },
      mu = Object.fromEntries(Eu.map(((uu, Ru) => [uu, Ru]))),
      Ju = uu => mu[uu],
      Nu = function(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .95;
        const Eu = Math.hypot(uu.x, uu.y);
        if (Eu <= Ru) return {
          x: 0,
          y: 0
        };
        const Ku = Math.min(1, (Eu - Ru) / Math.max(1e-4, yu - Ru));
        return {
          x: uu.x / Eu * Ku,
          y: uu.y / Eu * Ku
        }
      },
      Xu = ["exponential", "linear", "boost"],
      Vu = (uu, Ru) => {
        const yu = Math.hypot(uu.x, uu.y);
        if (0 === yu) return {
          x: 0,
          y: 0
        };
        const Eu = ((uu, Ru) => {
          const yu = Math.max(0, Math.min(1, uu));
          return "linear" === Ru ? yu : yu * yu
        })(yu, Ru);
        return {
          x: uu.x / yu * Eu,
          y: uu.y / yu * Eu
        }
      },
      ru = .5,
      Bu = .3,
      xu = .2,
      Su = Ju("LT"),
      pu = Ju("RT"),
      Tu = uu => uu === Su || uu === pu,
      Wu = (uu, Ru) => {
        const yu = Ju(Ru);
        return Tu(yu) ? uu[yu] > .35 : uu[yu] >= ru
      },
      ju = (uu, Ru) => uu.map(((uu, yu) => Tu(yu) ? Ru[yu] ? uu > .35 : uu >= .55 : uu >= ru)),
      Hu = ["Up", "Down", "Left", "Right"],
      du = uu => Hu.includes(uu),
      bu = function(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .5;
        return Math.hypot(uu.x, uu.y) < Ru ? null : Math.abs(uu.x) > Math.abs(uu.y) ? uu.x > 0 ? "Right" : "Left" : uu.y > 0 ? "Down" : "Up"
      },
      Cu = {
        initialDelayMs: 350,
        intervalMs: 120
      },
      ku = {
        initialDelayMs: 350,
        intervalMs: 150
      },
      eu = ["default", "slow", "off"],
      Au = 800,
      Du = 250,
      Mu = (uu, Ru) => "off" === Ru ? null : "slow" === Ru ? {
        initialDelayMs: Math.max(uu.initialDelayMs, Au),
        intervalMs: Math.max(uu.intervalMs, Du)
      } : uu;
    class Iu {
      constructor(uu) {
        this.readTiming = uu, this.jJ = !1, this.timing = null, this.nextFireMs = 0
      }
      update(uu, Ru) {
        return uu ? this.jJ ? !!(this.timing && Ru >= this.nextFireMs) && (this.nextFireMs = Ru + this.timing.intervalMs, !0) : (this.jJ = !0, this.timing = this.readTiming(), this.nextFireMs = Ru + (null !== (yu = null === (Eu = this.timing) || void 0 === Eu ? void 0 : Eu.initialDelayMs) && void 0 !== yu ? yu : 0), !0) : (this.jJ = !1, !1);
        var yu, Eu
      }
      reset() {
        this.jJ = !1
      }
    }
    const Gu = {
        initialDelayMs: 350,
        intervalMs: 80
      },
      Uu = {
        initialDelayMs: 400,
        intervalMs: 90
      };
    class nu {
      constructor(uu) {
        this.timer = uu, this.direction = null
      }
      update(uu, Ru) {
        return uu !== this.direction && (this.timer.reset(), this.direction = uu), this.timer.update(null !== uu, Ru) ? uu : null
      }
      reset() {
        this.timer.reset(), this.direction = null
      }
    }
  },
  8439: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Ku,
      e: () => Qu
    });
    let Eu = -1 / 0;
    const Ku = () => {
        Eu = performance.now()
      },
      Qu = uu => performance.now() - Eu < uu
  },
  8405: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => mu,
      i: () => Qu
    });
    var Eu = yu(7920),
      Ku = yu(7901);
    const Qu = uu => (0, Ku.fb)(uu, (0, Eu.g)().buttonRepeat),
      mu = uu => new Ku.f((() => Qu(uu)))
  },
  7935: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Nu,
      f: () => Qu,
      g: () => Ju
    });
    var Eu = yu(34),
      Ku = yu(7920);
    const Qu = (uu, Ru) => "OpenShop" === uu ? "shop" === Ru : "OpenLobbyLeaderboard" !== uu || "leaderboard" === Ru;
    let mu = !1;
    const Ju = uu => {
        uu !== mu && (mu = uu, Eu.k.Op(Ku.b, (0, Ku.g)()))
      },
      Nu = () => ((uu, Ru) => "shop" === uu && Ru ? "shop" : "leaderboard")((0, Ku.g)().leaderboardButton, mu)
  },
  7926: (uu, Ru, yu) => {
    yu.d(Ru, {
      B: () => Nu,
      Cb: () => lu,
      E: () => Ju,
      Eb: () => eu,
      I: () => bu,
      J: () => Bu,
      M: () => xu,
      Q: () => ru,
      U: () => du,
      Y: () => Xu,
      Z: () => Wu,
      ab: () => Du,
      e: () => tu,
      eb: () => Hu,
      g: () => gu,
      h: () => Mu,
      hb: () => pu,
      j: () => mu,
      l: () => Au,
      lb: () => Tu,
      o: () => ku,
      pb: () => Su,
      rb: () => ju,
      s: () => nu,
      sb: () => Uu,
      ub: () => Qu,
      w: () => su,
      yb: () => Cu,
      z: () => Vu
    });
    var Eu = yu(7915),
      Ku = yu(7901);
    const Qu = {
        min: 25,
        max: 500,
        step: 5
      },
      mu = {
        min: 25,
        max: 100,
        step: 5
      },
      Ju = {
        min: 0,
        max: .4,
        step: .01
      },
      Nu = {
        min: 25,
        max: 300,
        step: 5
      },
      Xu = {
        min: .5,
        max: 6,
        step: .1
      },
      Vu = (uu, Ru) => {
        if (!Number.isFinite(uu)) return Ru.min;
        const yu = Ru.min + Math.round((uu - Ru.min) / Ru.step) * Ru.step,
          Eu = Math.min(Ru.max, Math.max(Ru.min, yu));
        return Math.round(1e3 * Eu) / 1e3
      },
      ru = uu => `${Math.round(uu)}%`,
      Bu = uu => ru(100 * uu),
      xu = uu => `${uu.toFixed(1)}\xd7`,
      Su = [{
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
      pu = [{
        value: "exponential",
        labelKey: "controller:settingsCurveExponential"
      }, {
        value: "linear",
        labelKey: "controller:settingsCurveLinear"
      }, {
        value: "boost",
        labelKey: "controller:settingsCurveBoost"
      }],
      Tu = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "focus",
        labelKey: "controller:settingsMenuNavFocus"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      Wu = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "slot",
        labelKey: "controller:settingsInventoryNavSlot"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      ju = [{
        value: "wheel",
        labelKey: "controller:settingsQuickChatWheel"
      }, {
        value: "off",
        labelKey: "controller:settingsQuickChatOff"
      }],
      Hu = [{
        value: "shop",
        labelKey: "controller:settingsLeaderboardButtonShop"
      }, {
        value: "leaderboard",
        labelKey: "controller:settingsLeaderboardButtonLeaderboard"
      }],
      du = [{
        value: "always",
        labelKey: "controller:settingsGyroAlways"
      }, {
        value: "aiming",
        labelKey: "controller:settingsGyroWhileAiming"
      }, {
        value: "button",
        labelKey: "controller:settingsGyroWhileButton"
      }],
      bu = [{
        value: "tapHold",
        labelKey: "controller:settingsEmoteButtonTapHold"
      }, {
        value: "wheel",
        labelKey: "controller:settingsEmoteButtonWheel"
      }],
      Cu = [{
        value: "toggle",
        labelKey: "controller:settingsSneakToggle"
      }, {
        value: "hold",
        labelKey: "controller:settingsSneakHold"
      }],
      ku = [{
        value: "default",
        labelKey: "controller:settingsButtonRepeatDefault"
      }, {
        value: "slow",
        labelKey: "controller:settingsButtonRepeatSlow"
      }, {
        value: "off",
        labelKey: "controller:settingsButtonRepeatOff"
      }],
      eu = [{
        value: "short",
        labelKey: "controller:settingsTapHoldShort"
      }, {
        value: "medium",
        labelKey: "controller:settingsTapHoldMedium"
      }, {
        value: "long",
        labelKey: "controller:settingsTapHoldLong"
      }],
      Au = [{
        value: "hold",
        labelKey: "controller:settingsAttackHold"
      }, {
        value: "toggle",
        labelKey: "controller:settingsAttackToggle"
      }],
      Du = {
        southpaw: "controller:settingsLayoutSouthpaw",
        triggersSwapped: "controller:settingsLayoutTriggersSwapped"
      },
      Mu = {
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
      Iu = {
        gameplay: "controller:settingsGroupGameplay",
        menu: "controller:settingsGroupMenus",
        inventory: "controller:settingsGroupInventory",
        keyboard: "controller:settingsGroupKeyboard"
      },
      Gu = [{
        kind: "fixed",
        stick: "move",
        labelKey: "controller:settingsActionMove"
      }, {
        kind: "fixed",
        stick: "look",
        labelKey: "controller:settingsActionLook"
      }],
      Uu = Eu.e.map((uu => {
        let {
          group: Ru,
          actions: yu
        } = uu;
        const Eu = yu.map((uu => ({
          kind: "action",
          action: uu
        })));
        return {
          titleKey: Iu[Ru],
          rows: "gameplay" === Ru ? [...Gu, ...Eu] : Eu
        }
      })),
      nu = Ku._.filter((uu => "Home" !== uu)),
      su = 1e4;
    class tu {
      constructor(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
        this.cancelButton = uu, this.openButton = Ru, this.accepts = yu, this.startMs = null, this.ignoredUntilMs = new Map, this.cancelDownAtMs = null
      }
      update(uu, Ru) {
        var yu;
        this.updateIgnored(uu, Ru);
        const Eu = Ru - (null !== (yu = this.startMs) && void 0 !== yu ? yu : Ru) >= 250;
        for (const Ku of nu)
          if (Ku !== this.cancelButton && Eu && !this.ignoredUntilMs.has(Ku) && uu.wasPressed(Ku) && this.accepts(Ku)) return {
            kind: "bind",
            button: Ku
          };
        if (this.ignoredUntilMs.has(this.cancelButton)) return null;
        if (uu.wasPressed(this.cancelButton)) {
          if (!this.accepts(this.cancelButton)) return {
            kind: "cancel"
          };
          this.cancelDownAtMs = Ru
        }
        return null === this.cancelDownAtMs ? null : uu.isHeld(this.cancelButton) && Ru - this.cancelDownAtMs >= 700 ? (this.cancelDownAtMs = null, {
          kind: "bind",
          button: this.cancelButton
        }) : uu.wasReleased(this.cancelButton) ? (this.cancelDownAtMs = null, {
          kind: "cancel"
        }) : null
      }
      getBindHoldProgress(uu) {
        return null === this.cancelDownAtMs ? 0 : Math.min(1, (uu - this.cancelDownAtMs) / 700)
      }
      updateIgnored(uu, Ru) {
        if (null === this.startMs) {
          this.startMs = Ru;
          for (const Ru of nu) uu.isDown(Ru) && this.ignoredUntilMs.set(Ru, 1 / 0);
          this.openButton && !this.ignoredUntilMs.has(this.openButton) && this.ignoredUntilMs.set(this.openButton, Ru + 250)
        }
        for (const [yu, Eu] of this.ignoredUntilMs) {
          const Ku = uu.isDown(yu);
          Eu === 1 / 0 ? Ku || yu !== this.openButton ? Ku || this.ignoredUntilMs.delete(yu) : this.ignoredUntilMs.set(yu, Ru + 250) : Ru >= Eu ? this.ignoredUntilMs.delete(yu) : Ku && this.ignoredUntilMs.set(yu, 1 / 0)
        }
      }
    }
    const lu = 6e3;
    class gu {
      constructor() {
        this.downAtMs = null, this.pressesAtMs = []
      }
      update(uu, Ru) {
        let {
          pressed: yu,
          jJ: Eu
        } = uu;
        if (yu) {
          const uu = this.pressesAtMs.at(-1);
          if (this.pressesAtMs = void 0 !== uu && Ru - uu < 1500 ? [...this.pressesAtMs, Ru] : [Ru], this.pressesAtMs.length >= 3) return 1
        }
        return Eu ? (this.downAtMs ??= Ru, Math.min(1, (Ru - this.downAtMs) / 1500)) : (this.downAtMs = null, 0)
      }
    }
  },
  4818: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Qu,
      g: () => mu
    });
    var Eu = yu(64);
    const Ku = new WeakMap,
      Qu = uu => {
        var Ru;
        const yu = uu.closest("[data-pad-slider]");
        return yu && null !== (Ru = Ku.get(yu)) && void 0 !== Ru ? Ru : null
      },
      mu = (uu, Ru) => {
        const yu = (0, Eu.useRef)(Ru);
        yu.current = Ru, (0, Eu.useEffect)((() => {
          if (uu.current) return ((uu, Ru) => (Ku.set(uu, Ru), () => {
            Ku.get(uu) === Ru && Ku.delete(uu)
          }))(uu.current, {
            adjust: uu => {
              yu.current.adjust(uu)
            },
            setFraction: uu => {
              yu.current.setFraction(uu)
            },
            endDrag: () => {
              yu.current.endDrag()
            }
          })
        }), [uu])
      }
  },
  8450: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Qu,
      g: () => Ku
    });
    var Eu = yu(34);
    const Ku = "localBlockBroken";

    function Qu() {
      return {
        onPlayerChangeBlock(uu, Ru, yu, Qu, mu, Ju) {
          "Air" === Ju && Eu.k.Op(Ku)
        }
      }
    }
  },
  7963: (uu, Ru, yu) => {
    var Eu = {
      "./nintendo/A.svg": 7971,
      "./nintendo/B.svg": 7975,
      "./nintendo/Down.svg": 7977,
      "./nintendo/Home.svg": 7983,
      "./nintendo/LB.svg": 7990,
      "./nintendo/LS.svg": 7997,
      "./nintendo/LT.svg": 8006,
      "./nintendo/Left.svg": 8011,
      "./nintendo/LeftStick.svg": 8017,
      "./nintendo/Menu.svg": 8020,
      "./nintendo/RB.svg": 8024,
      "./nintendo/RS.svg": 8030,
      "./nintendo/RT.svg": 8034,
      "./nintendo/Right.svg": 8043,
      "./nintendo/RightStick.svg": 8050,
      "./nintendo/Up.svg": 8053,
      "./nintendo/View.svg": 8061,
      "./nintendo/X.svg": 8067,
      "./nintendo/Y.svg": 8076,
      "./playstation/A.svg": 8083,
      "./playstation/B.svg": 8092,
      "./playstation/Down.svg": 8098,
      "./playstation/Home.svg": 8103,
      "./playstation/LB.svg": 8107,
      "./playstation/LS.svg": 8116,
      "./playstation/LT.svg": 8118,
      "./playstation/Left.svg": 8123,
      "./playstation/LeftStick.svg": 8131,
      "./playstation/Menu.svg": 8137,
      "./playstation/RB.svg": 8140,
      "./playstation/RS.svg": 8147,
      "./playstation/RT.svg": 8151,
      "./playstation/Right.svg": 8156,
      "./playstation/RightStick.svg": 8165,
      "./playstation/Up.svg": 8167,
      "./playstation/View.svg": 8172,
      "./playstation/X.svg": 8179,
      "./playstation/Y.svg": 8182,
      "./steamdeck/A.svg": 8190,
      "./steamdeck/B.svg": 8196,
      "./steamdeck/Down.svg": 8202,
      "./steamdeck/Home.svg": 8204,
      "./steamdeck/LB.svg": 8207,
      "./steamdeck/LS.svg": 8212,
      "./steamdeck/LT.svg": 8215,
      "./steamdeck/Left.svg": 8221,
      "./steamdeck/LeftStick.svg": 8230,
      "./steamdeck/Menu.svg": 8237,
      "./steamdeck/RB.svg": 8246,
      "./steamdeck/RS.svg": 8249,
      "./steamdeck/RT.svg": 8256,
      "./steamdeck/Right.svg": 8262,
      "./steamdeck/RightStick.svg": 8270,
      "./steamdeck/Up.svg": 8276,
      "./steamdeck/View.svg": 8282,
      "./steamdeck/X.svg": 8290,
      "./steamdeck/Y.svg": 8293,
      "./xbox/A.svg": 8301,
      "./xbox/B.svg": 8304,
      "./xbox/Down.svg": 8309,
      "./xbox/Home.svg": 8315,
      "./xbox/LB.svg": 8322,
      "./xbox/LS.svg": 8328,
      "./xbox/LT.svg": 8330,
      "./xbox/Left.svg": 8337,
      "./xbox/LeftStick.svg": 8339,
      "./xbox/Menu.svg": 8346,
      "./xbox/RB.svg": 8351,
      "./xbox/RS.svg": 8360,
      "./xbox/RT.svg": 8366,
      "./xbox/Right.svg": 8371,
      "./xbox/RightStick.svg": 8378,
      "./xbox/Up.svg": 8380,
      "./xbox/View.svg": 8382,
      "./xbox/X.svg": 8391,
      "./xbox/Y.svg": 8395
    };

    function Ku(uu) {
      var Ru = Qu(uu);
      return yu(Ru)
    }

    function Qu(uu) {
      if (!yu.o(Eu, uu)) {
        var Ru = new Error("Cannot find module '" + uu + "'");
        throw Ru.code = "MODULE_NOT_FOUND", Ru
      }
      return Eu[uu]
    }
    Ku.keys = function() {
      return Object.keys(Eu)
    }, Ku.resolve = Qu, uu.exports = Ku, Ku.id = 7963
  },
  7971: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/A.926fb88933484dfbde14.svg"
  },
  7975: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/B.9f5ec099f78f84e44427.svg"
  },
  7977: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  7983: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  7990: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/LB.3a20b15927b55d5d8b60.svg"
  },
  7997: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  8006: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/LT.9fdc5e69011b9d41f50a.svg"
  },
  8011: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  8017: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8020: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Menu.c903a662eb685211e52e.svg"
  },
  8024: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/RB.bba470ddb76ceec5d168.svg"
  },
  8030: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  8034: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/RT.e5a9fbcc3c79550111ca.svg"
  },
  8043: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  8050: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8053: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  8061: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/View.0c9378b5d720a636d50d.svg"
  },
  8067: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/X.c9377519af94e6dce1d7.svg"
  },
  8076: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Y.62d8c17731dd2e172426.svg"
  },
  8083: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/A.958a6de9474f8d0c9caf.svg"
  },
  8092: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/B.d05958bfa88a1162b47a.svg"
  },
  8098: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Down.db68fb3980768eb54671.svg"
  },
  8103: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  8107: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/LB.37a3c5128c958ec2a0c2.svg"
  },
  8116: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/LS.15b0cc5bf3f2fe7bbd8b.svg"
  },
  8118: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/LT.5412ae5222c69f8c833f.svg"
  },
  8123: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Left.4457b2895ce94a5df32e.svg"
  },
  8131: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8137: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Menu.1e8427f8133c9d456c53.svg"
  },
  8140: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/RB.c96c4aa2590209e930c7.svg"
  },
  8147: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/RS.8d70d147cf1ab136e845.svg"
  },
  8151: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/RT.1e4691bb5a7c049693df.svg"
  },
  8156: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Right.a1e101413040c540b879.svg"
  },
  8165: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8167: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Up.7544a65ad4f611a55775.svg"
  },
  8172: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/View.003cae39de89cae0b9d8.svg"
  },
  8179: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/X.d88b6e62dd8fb4bda32a.svg"
  },
  8182: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Y.428d3e70775877892f82.svg"
  },
  8190: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  8196: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  8202: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  8204: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Home.ea8b009cfa9562aa644e.svg"
  },
  8207: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/LB.f283d355d22fc107d6d6.svg"
  },
  8212: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  8215: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/LT.13e66c122e7ee04bb876.svg"
  },
  8221: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  8230: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8237: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Menu.90fc4e918900eb5062a0.svg"
  },
  8246: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/RB.918a7f16dc054d96b6f3.svg"
  },
  8249: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  8256: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/RT.a0523211130959598bed.svg"
  },
  8262: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  8270: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8276: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  8282: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/View.0bc952e292c28c3baac2.svg"
  },
  8290: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  8293: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  },
  8301: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  8304: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  8309: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  8315: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Home.8898f76b20962fe52ab7.svg"
  },
  8322: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/LB.689ba3703ae248f2e4cc.svg"
  },
  8328: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  8330: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/LT.9c2d10d335ab5c590525.svg"
  },
  8337: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  8339: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8346: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Menu.9e485791ea97009871ca.svg"
  },
  8351: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/RB.7ee5ce48dd551f993f80.svg"
  },
  8360: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  8366: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/RT.903ecadc55a9e9e00f07.svg"
  },
  8371: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  8378: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8380: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  8382: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/View.3c5eeb34f0413bde4a65.svg"
  },
  8391: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  8395: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);