export const id = 28;
export const ids = [28];
export const modules = {
  4670: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => CU,
      d: () => fU,
      h: () => hU,
      l: () => WU
    });
    var tU = gU(56),
      pU = gU(4679),
      EU = gU(4040),
      PU = gU(1344),
      TU = gU(4693),
      qU = gU(1037),
      KU = gU.n(qU),
      cU = gU(1333),
      GU = gU(1637),
      jU = gU(4701),
      uU = gU(1090);

    function CU(UU) {
      let {
        label: RU,
        onClick: gU,
        checked: tU,
        circleInfoText: pU,
        className: TU,
        disabled: qU,
        note: cU
      } = UU;
      return (0, uU.jsxs)("div", {
        "aria-disabled": qU || void 0,
        "data-pad-focusable": !0,
        className: KU()("SettingBox CheckboxContainer", {
          [TU]: TU,
          SettingBoxDisabled: qU
        }),
        onClick: () => {
          qU || gU(!tU)
        },
        children: [(0, uU.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, uU.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, uU.jsx)(EU.d, {
              className: "SettingsCheckbox",
              checked: tU,
              disabled: qU,
              onChange: () => {}
            })
          }), (0, uU.jsxs)("div", {
            className: "CheckboxText",
            children: [RU, pU && (0, uU.jsx)("span", {
              onClick: UU => UU.stopPropagation(),
              children: (0, uU.jsx)(PU.d, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: pU
              })
            })]
          })]
        }), cU && (0, uU.jsx)("div", {
          className: "SettingNote",
          children: cU
        })]
      })
    }

    function hU(UU) {
      let {
        name: RU,
        onChange: gU,
        min: pU,
        max: EU,
        step: TU,
        initValue: qU,
        circleInfoText: cU,
        format: GU,
        className: jU,
        padStep: CU,
        disabled: hU = !1,
        selectableMax: QU,
        cappedNote: WU,
        onChangeComplete: fU
      } = UU;
      const [xU, mU] = (0, tU.useState)(qU), IU = (0, tU.useRef)(qU);
      (0, tU.useEffect)((() => {
        IU.current = qU, mU(qU)
      }), [qU]);
      const JU = void 0 !== QU && QU < EU,
        wU = JU ? {
          "--slider-selectable": (QU - pU) / (EU - pU)
        } : void 0;
      return (0, uU.jsxs)("div", {
        className: KU()("SettingBox SettingsSliderDiv", {
          [jU]: jU,
          SettingBoxDisabled: hU,
          SliderCapped: JU
        }),
        style: wU,
        children: [(0, uU.jsxs)("div", {
          className: "SliderText",
          children: [`${RU}: ${GU?GU(xU):xU}`, cU && (0, uU.jsx)(PU.d, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: cU
          })]
        }), (0, uU.jsx)("div", {
          className: "SliderDiv",
          children: (0, uU.jsx)(eU, {
            value: xU,
            min: pU,
            max: EU,
            step: TU,
            onChange: UU => {
              if (JU && UU >= QU && xU === QU) return;
              const RU = JU ? Math.min(UU, QU) : UU;
              IU.current = RU, mU(RU), gU(RU)
            },
            onChangeComplete: fU && (() => {
              fU(IU.current)
            }),
            format: GU,
            padStep: CU,
            disabled: hU
          })
        }), JU && WU && (0, uU.jsx)("div", {
          className: "SettingNote",
          children: WU
        })]
      })
    }
    const QU = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function eU(UU) {
      var RU;
      let {
        value: gU,
        min: EU,
        max: PU,
        step: TU,
        onChange: qU,
        orientation: KU,
        reverse: cU,
        setIsChanging: GU,
        tooltip: CU,
        labels: hU,
        handleLabel: eU,
        format: WU,
        onChangeStart: fU,
        onChangeComplete: xU,
        padStep: mU,
        disabled: IU = !1
      } = UU;
      const JU = (0, tU.useRef)(null),
        wU = (0, tU.useRef)(null);
      (0, tU.useLayoutEffect)((() => {
        var UU, RU, gU;
        const tU = null !== (UU = null === (RU = JU.current) || void 0 === RU ? void 0 : RU.querySelector(".rangeslider")) && void 0 !== UU ? UU : null;
        null === tU || void 0 === tU || tU.setAttribute("data-pad-slider", ""), null === tU || void 0 === tU || tU.setAttribute("data-pad-focusable", ""), null === tU || void 0 === tU || null === (gU = tU.querySelector(".rangeslider__handle")) || void 0 === gU || gU.setAttribute("data-pad-slider-handle", ""), wU.current = tU
      }), []), (0, tU.useLayoutEffect)((() => {
        var UU, RU;
        IU ? null === (UU = wU.current) || void 0 === UU || UU.setAttribute("aria-disabled", "true") : null === (RU = wU.current) || void 0 === RU || RU.removeAttribute("aria-disabled")
      }), [IU]);
      const nU = (null !== (RU = String(TU).split(".")[1]) && void 0 !== RU ? RU : "").length,
        bU = UU => {
          const RU = Number((Math.round((UU - EU) / TU) * TU + EU).toFixed(nU));
          return Math.min(PU, Math.max(EU, RU))
        },
        oU = (0, tU.useRef)(xU);
      oU.current = xU, (0, tU.useEffect)((() => {
        const UU = JU.current;
        if (!UU) return;
        const RU = UU => {
          var RU;
          QU.has(UU.key) && (null === (RU = oU.current) || void 0 === RU || RU.call(oU))
        };
        return UU.addEventListener("keyup", RU), () => {
          UU.removeEventListener("keyup", RU)
        }
      }), []);
      const ZU = (0, tU.useRef)(!1);
      return (0, jU.e)(wU, {
        adjust: UU => {
          if (IU) return;
          const RU = null !== mU && void 0 !== mU ? mU : Math.max(TU, Math.round((PU - EU) / 20 / TU) * TU),
            tU = bU(gU + UU * RU * (cU ? -1 : 1));
          tU !== gU && (null === fU || void 0 === fU || fU(), qU(tU), null === xU || void 0 === xU || xU())
        },
        setFraction: UU => {
          if (IU) return;
          const RU = bU(EU + (cU ? 1 - UU : UU) * (PU - EU));
          RU !== gU && (ZU.current || (ZU.current = !0, null === fU || void 0 === fU || fU()), qU(RU))
        },
        endDrag: () => {
          ZU.current && (ZU.current = !1, null === xU || void 0 === xU || xU())
        }
      }), (0, uU.jsx)("div", {
        ref: JU,
        style: {
          display: "contents"
        },
        children: (0, uU.jsx)(pU.d, {
          value: gU,
          min: EU,
          max: PU,
          step: TU,
          onChange: qU,
          orientation: KU,
          reverse: cU,
          tooltip: CU,
          labels: hU,
          handleLabel: eU,
          format: WU,
          onChangeStart: () => {
            null === fU || void 0 === fU || fU(), null === GU || void 0 === GU || GU(!0)
          },
          onChangeComplete: () => {
            null === GU || void 0 === GU || GU(!1), null === xU || void 0 === xU || xU()
          }
        })
      })
    }
    async function WU() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
      const RU = cU.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: "",
        unlockPointerKey: UU
      });
      !0 === await RU.getResult() && (0, GU.reloadBloxd)()
    }

    function fU(UU) {
      let {
        label: RU,
        options: gU,
        value: tU,
        onChange: pU,
        circleInfoText: EU
      } = UU;
      return (0, uU.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, uU.jsxs)("div", {
          className: "SliderText",
          children: [RU, EU && (0, uU.jsx)(PU.d, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: EU
          })]
        }), (0, uU.jsx)(TU.d, {
          ariaLabel: RU,
          options: gU,
          value: tU,
          onChange: pU
        })]
      })
    }
  },
  4693: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => PU
    });
    var tU = gU(1037),
      pU = gU.n(tU),
      EU = gU(1090);

    function PU(UU) {
      let {
        options: RU,
        value: gU,
        onChange: tU,
        ariaLabel: PU,
        className: TU,
        reselectable: qU = !1,
        keepsFocus: KU = !1
      } = UU;
      return (0, EU.jsx)("div", {
        className: pU()("SegmentedToggle", TU),
        role: "group",
        "aria-label": PU,
        children: RU.map((UU => {
          const RU = UU.value === gU;
          return (0, EU.jsx)("button", {
            type: "button",
            "aria-pressed": RU,
            "aria-label": UU.ariaLabel,
            title: UU.ariaLabel,
            className: pU()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: RU
            }),
            onMouseDown: KU ? UU => {
              UU.preventDefault()
            } : void 0,
            onClick: () => {
              RU && !qU || tU(UU.value)
            },
            children: UU.label
          }, UU.value)
        }))
      })
    }
  },
  7826: (UU, RU, gU) => {
    gU.d(RU, {
      C: () => CU,
      e: () => pU,
      i: () => EU,
      l: () => jU,
      p: () => GU,
      r: () => KU,
      v: () => TU,
      x: () => tU,
      z: () => uU
    });
    const tU = ["menuConfirm", "menuBack", "menuTabPrevious", "menuTabNext", "menuPageUp", "menuPageDown", "menuSecondary", "menuToggleCursor"],
      pU = [{
        group: "gameplay",
        actions: ["jump", "sneak", "sneakToggle", "sprint", "attack", "use", "hotbarPrevious", "hotbarNext", "inventory", "actionButton", "perspective", "pickBlock", "drop", "emoteWheel", "chat", "pause", "leaderboard"]
      }, {
        group: "menu",
        actions: tU
      }, {
        group: "inventory",
        actions: ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryClose", "inventoryPanelPrevious", "inventoryPanelNext", "inventoryDrop", "inventoryHotbarSwap"]
      }, {
        group: "keyboard",
        actions: ["keyboardType", "keyboardBackspace", "keyboardSpace", "keyboardCaretLeft", "keyboardCaretRight", "keyboardShift", "keyboardSymbols", "keyboardSubmit", "keyboardClose", "keyboardChannel"]
      }],
      EU = {
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
      PU = ["pickBlock", "perspective"],
      TU = UU => PU.includes(UU) ? PU : [UU],
      qU = Object.fromEntries(pU.flatMap((UU => {
        let {
          group: RU,
          actions: gU
        } = UU;
        return gU.map((UU => [UU, RU]))
      }))),
      KU = UU => qU[UU],
      cU = {
        pause: ["menu"],
        leaderboard: ["menu"],
        inventory: ["menu"],
        menuPageUp: ["inventory"],
        menuPageDown: ["inventory"]
      },
      GU = UU => {
        var RU;
        return [KU(UU), ...null !== (RU = cU[UU]) && void 0 !== RU ? RU : []]
      },
      jU = new Set(["menu", "inventory", "keyboard"]),
      uU = {
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
      CU = new Set(["forward", "backward", "left", "right"])
  },
  7820: (UU, RU, gU) => {
    gU.d(RU, {
      C: () => bU,
      D: () => cU,
      E: () => nU,
      H: () => aU,
      b: () => WU,
      d: () => mU,
      f: () => jU,
      g: () => uU,
      j: () => BU,
      m: () => ZU,
      o: () => oU,
      r: () => xU,
      u: () => YU,
      x: () => wU,
      z: () => fU
    });
    var tU = gU(7826),
      pU = gU(7828),
      EU = gU(7807),
      PU = gU(7843);
    const TU = UU => "pickBlock" === UU ? "perspective" : UU,
      qU = (UU, RU) => {
        var gU;
        const pU = TU(RU);
        return null !== (gU = UU[pU]) && void 0 !== gU ? gU : tU.i[pU]
      },
      KU = new Map([
        ["menuConfirm", "menuBack"],
        ["inventoryPrimary", "inventoryClose"],
        ["keyboardType", "keyboardClose"]
      ].flatMap((UU => {
        let [RU, gU] = UU;
        return [
          [RU, gU],
          [gU, RU]
        ]
      }))),
      cU = (UU, RU) => null !== UU && void 0 !== UU ? UU : "nintendo" === RU,
      GU = UU => cU((0, pU.h)().swapConfirmBack, (0, pU.i)()) && KU.get(UU) || UU,
      jU = UU => qU((0, pU.h)().bindings, GU(UU)),
      uU = UU => tU.i[GU(UU)],
      CU = Object.keys(tU.i),
      hU = UU => "gameplay" === (0, tU.r)(UU) ? ["gameplay"] : (0, tU.p)(UU),
      QU = (UU, RU) => {
        const gU = hU(RU);
        return hU(UU).some((UU => gU.includes(UU)))
      },
      eU = (UU, RU, gU) => {
        const pU = qU(UU, RU),
          PU = new Set((0, tU.v)(RU)),
          KU = [...PU];
        for (let tU = KU.pop(); tU; tU = KU.pop())
          for (const RU of CU) {
            const EU = qU(UU, RU);
            PU.has(RU) || EU !== gU && EU !== pU || !QU(tU, RU) || (PU.add(RU), KU.push(RU))
          }
        const cU = {
          ...UU
        };
        for (const GU of PU) {
          const RU = qU(UU, GU) === pU ? gU : pU,
            PU = (0, tU.p)(GU).some((UU => tU.l.has(UU)));
          if ((0, EU.B)(RU) && PU) return null;
          cU[TU(GU)] = RU
        }
        for (const EU of Object.keys(cU)) cU[EU] === tU.i[EU] && delete cU[EU];
        return cU
      },
      WU = (UU, RU) => null !== eU((0, pU.h)().bindings, GU(UU), RU),
      fU = (UU, RU) => {
        if (jU(UU) === RU) return !0;
        const gU = eU((0, pU.h)().bindings, GU(UU), RU);
        return !!gU && ((0, pU.k)({
          bindings: gU
        }), !0)
      },
      xU = (UU, RU) => {
        const gU = (0, tU.v)(RU);
        return CU.filter((RU => TU(RU) === RU && !gU.includes(RU) && qU(UU, GU(RU)) !== jU(RU)))
      },
      mU = ["southpaw", "triggersSwapped"],
      IU = {
        southpaw: {
          sprint: "RS",
          sneakToggle: "LS"
        },
        triggersSwapped: {
          attack: "LT",
          use: "RT"
        }
      },
      JU = UU => Object.keys(IU[UU]),
      wU = (UU, RU) => "southpaw" === UU ? RU.swapSticks : JU(UU).every((gU => qU(RU.bindings, gU) === IU[UU][gU])),
      nU = (UU, RU) => {
        const gU = (0, pU.h)();
        let EU = gU.bindings;
        for (const pU of JU(UU)) {
          const gU = RU ? IU[UU][pU] : tU.i[pU];
          if (EU = eU(EU, pU, gU), !EU) return !1
        }
        return (0, pU.k)({
          swapSticks: "southpaw" === UU ? RU : gU.swapSticks,
          bindings: EU
        }), !0
      },
      bU = () => {
        (0, pU.k)({
          swapSticks: !1,
          bindings: {}
        })
      },
      oU = () => (0, pU.h)().swapSticks ? "RightStick" : "LeftStick",
      ZU = () => (0, pU.h)().swapSticks ? "LeftStick" : "RightStick",
      aU = UU => (0, pU.h)().swapSticks && (0, EU.B)(UU),
      YU = UU => aU(UU) ? oU() : ZU(),
      BU = UU => {
        if (tU.C.has(UU)) return oU();
        const RU = tU.z[UU];
        return RU && ("leaderboard" !== RU || (0, PU.e)(UU, (0, PU.b)())) ? jU(RU) : null
      }
  },
  7799: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      ControllerCategory: () => cq,
      ControllerGlyph: () => hE,
      ControllerRoot: () => cT,
      PadLobbyShortcuts: () => bT,
      PadSneakChip: () => eT,
      PadTooltip: () => fT,
      attachPressToContinue: () => XT,
      getBoundButton: () => cU.f,
      getControllerSettings: () => jU.h,
      getGlyphForNoaAction: () => cU.j,
      getInventoryCursorState: () => jq,
      getMenuShortcutButton: () => vt,
      getPadGlyphIconName: () => CT,
      getPadGlyphIconUrl: () => hT,
      getPadRepeatTiming: () => hU.i,
      handOverPadFocus: () => Cq,
      hasActivePad: () => Gq,
      isPadSteppingSlots: () => uq
    });
    const tU = JSON.parse('{"controller":{"inventoryTake":"Take","inventoryTakeHalf":"Take half","inventoryPlace":"Place","inventoryPlaceOne":"Place one","inventoryQuickMove":"Quick move","inventoryToHotbar":"To hotbar","inventoryPutBack":"Put back","inventoryHotbarSwap":"Swap with hotbar","inventorySwapHere":"Swap here","inventoryCancel":"Cancel","inventoryClose":"Close","inventoryDrop":"Drop (hold: stack)","inventorySelect":"Select","inventoryCraft":"Craft (hold to repeat)","inventoryCraftAll":"Craft all","inventoryChooseRecipe":"Choose","inventoryBackToRecipes":"Back to recipes","inventoryType":"Type","inventoryPanels":"Switch panel","inventoryCategory":"Category","inventoryPage":"Page","disconnected":"Controller disconnected","gameplayReload":"Reload","gameplayActionWheelHint":"(hold for more)","gameplaySneaking":"Sneaking","gameplayLoadFailedTitle":"Controller unavailable","gameplayLoadFailedSubtitle":"Reload the page to play with your controller.","gameplayDropStack":"Keep holding to drop the stack","gameplayAttackLatched":"Attacking","gameplayPickBlock":"Pick block","padButtonView":"View","padButtonMenu":"Menu","padButtonHome":"Home","padButtonCreate":"Create","padButtonOptions":"Options","padButtonDpadUp":"D-pad \u2191","padButtonDpadDown":"D-pad \u2193","padButtonDpadLeft":"D-pad \u2190","padButtonDpadRight":"D-pad \u2192","padButtonLeftStick":"L Stick","padButtonRightStick":"R Stick","settingsLook":"Look","settingsLookSensitivityX":"Look sensitivity (horizontal)","settingsLookSensitivityY":"Look sensitivity (vertical)","settingsAimLookSensitivity":"Look sensitivity while aiming (use held)","settingsInvertLookX":"Invert horizontal look","settingsInvertLookY":"Invert vertical look","settingsLookCurve":"Look curve","settingsLookCurveHint":"Steep gives finer aim near the centre, Linear turns at an even rate, and Boost turns faster when you hold the stick all the way.","settingsCurveExponential":"Steep","settingsCurveLinear":"Linear","settingsCurveBoost":"Boost","settingsLookDeadzone":"Look deadzone","settingsGyro":"Gyro aiming","settingsGyroToggle":"Aim by moving the controller","settingsGyroToggleInfo":"Turn and tilt the controller to aim, on top of the right stick.","settingsGyroTogglePhone":"Aim by moving your phone or tablet","settingsGyroToggleInfoPhone":"Turn and tilt your phone or tablet to aim, on top of the right stick.","settingsGyroUnsupported":"Gyro aiming needs Chrome or Edge.","settingsGyroBlocked":"Gyro aiming isn\'t available on this site.","settingsGyroPhoneNeedsController":"Connect a controller to aim by moving your phone or tablet.","settingsGyroSteamHint":"If Steam already turns your gyro into mouse movement, leave this off.","settingsGyroConnect":"Connect motion controller","settingsGyroConnectHint":"Works with DualSense, DualShock 4 and Switch controllers.","settingsGyroConnectNeedsClick":"Click Connect with your mouse: the browser asks before sharing a controller.","settingsGyroOpenFailed":"Another app is using the controller. Close apps such as Steam or DS4Windows, then try again.","settingsGyroConnected":"Aiming with {{name}}.","settingsGyroAllowMotion":"Allow motion sensor","settingsGyroAllowNeedsTap":"Tap Allow motion sensor on your screen to turn it on.","settingsGyroPhoneOn":"Aiming with this device\'s motion sensor.","settingsGyroPhoneWaiting":"Waiting for this device\'s motion sensor\u2026","settingsGyroPhoneNoSensor":"No motion sensor found on this device.","settingsGyroPhoneDenied":"Motion access is blocked. Allow it in your browser settings.","settingsGyroSensitivity":"Gyro sensitivity","settingsGyroActivation":"Gyro turns on","settingsGyroAlways":"Always","settingsGyroWhileAiming":"While aiming","settingsGyroWhileButton":"While holding a button","settingsGyroAimingHint":"Hold {{button}} to aim with motion.","settingsGyroButton":"Gyro button","settingsGyroButtonHint":"While gyro aiming is on, this button only turns the gyro on in game, so pick one you rarely use.","settingsMovement":"Movement","settingsMoveDeadzone":"Move deadzone","settingsAutoSprint":"Sprint at full tilt","settingsAutoSprintInfo":"Push the movement stick all the way to sprint.","settingsSneak":"Sneak","settingsSneakHold":"Hold","settingsSneakToggle":"Toggle","settingsButtons":"Buttons","settingsPromptFamily":"Button prompts","settingsPromptAuto":"Match my controller","settingsPromptXbox":"Xbox","settingsPromptPlayStation":"PlayStation","settingsPromptNintendo":"Nintendo","settingsPromptSteamDeck":"Steam Deck","settingsPromptGeneric":"Generic","settingsHideButtonHints":"Hide button hints","settingsVibration":"Vibration","settingsCursorSpeed":"Virtual cursor speed","settingsCursorMagnetism":"Cursor snaps onto buttons","settingsMenuBackToCategories":"Back returns to the category list first","settingsAccessibility":"Accessibility","settingsSwapConfirmBack":"Swap confirm and back","settingsSwapToast":"Select and Back have swapped buttons.","settingsLayoutRefusedToast":"This layout doesn\'t fit your current buttons. Reset them to use it.","settingsSwapConfirmBackInfo":"Select with the right face button and go back with the bottom one, in menus, the inventory and the on-screen keyboard. On by default for Nintendo controllers.","settingsButtonRepeat":"Button repeat","settingsButtonRepeatHint":"How a held button repeats in menus, sliders, the on-screen keyboard and crafting. Off acts once per press, and holding drop in game drops just one item.","settingsButtonRepeatDefault":"Default","settingsButtonRepeatSlow":"Slow (0.8 s, then 4 a second)","settingsButtonRepeatOff":"Off (once per press)","settingsTapHoldTime":"Tap/hold time","settingsTapHoldTimeHint":"How long to hold the chat, emote or action button to open its wheel, or the view button to change view where a tap picks a block. Dropping a whole stack takes 0.8, 1 or 1.3 s.","settingsTapHoldShort":"Short (0.25 s)","settingsTapHoldMedium":"Medium (0.5 s)","settingsTapHoldLong":"Long (0.8 s)","settingsEmoteButton":"Emote button","settingsEmoteButtonTapHoldHint":"Tap to repeat your last emote, or hold to open the emote wheel.","settingsEmoteButtonWheelHint":"Any press opens the emote wheel, with no hold to time. Pick with the stick, then select.","settingsEmoteButtonTapHold":"Tap repeats, hold opens wheel","settingsEmoteButtonWheel":"Opens the wheel","settingsAttackMode":"Attack / mine","settingsAttackHoldHint":"Hold attack to keep attacking or mining.","settingsAttackToggleHint":"Press attack once to keep attacking or mining, and again to stop.","settingsAttackHold":"Hold","settingsAttackToggle":"Toggle","settingsLargePointer":"Large pointer and focus","settingsLargePointerInfo":"A bigger menu cursor, thicker selection brackets and bigger button hints.","settingsRemap":"Remap buttons","settingsRemapHint":"Select an action, then press a button. If that button is taken, the two swap.","settingsLayoutSouthpaw":"Southpaw (move with the right stick)","settingsLayoutTriggersSwapped":"Triggers swapped (attack with the left trigger)","settingsCapturePrompt":"Press a button","settingsCaptureCancelHint":"Press {{button}} to cancel","settingsCaptureCancelOrBindHint":"Tap {{button}} to cancel, or hold it to choose it","settingsReset":"Reset","settingsSwapNotice":"{{action}} moved to {{button}}","settingsResetAll":"Reset all buttons and sticks","settingsGroupGameplay":"Movement & gameplay","settingsGroupMenus":"Menus","settingsGroupInventory":"Inventory","settingsGroupKeyboard":"On-screen keyboard","settingsActionMove":"Move","settingsActionLook":"Look around","settingsActionJump":"Jump","settingsActionSneak":"Sneak","settingsActionSneakToggle":"Toggle sneak","settingsActionSprint":"Sprint","settingsActionAttack":"Attack / mine","settingsActionUse":"Use / place","settingsActionHotbarPrevious":"Previous hotbar slot","settingsActionHotbarNext":"Next hotbar slot","settingsActionInventory":"Inventory","settingsActionActionButton":"Game action","settingsActionPerspective":"Change view","settingsActionPickBlock":"Pick block (creative)","settingsActionDrop":"Drop item","settingsActionEmoteWheel":"Emotes","settingsActionChat":"Chat","settingsActionPause":"Pause menu","settingsActionLeaderboard":"Shop / leaderboard","settingsActionMenuConfirm":"Select","settingsActionMenuBack":"Back","settingsActionMenuTabPrevious":"Previous tab","settingsActionMenuTabNext":"Next tab","settingsActionMenuPageUp":"Page up","settingsActionMenuPageDown":"Page down","settingsActionMenuSecondary":"Secondary action","settingsActionMenuToggleCursor":"Switch to virtual cursor","settingsActionInventoryPrimary":"Pick up / place","settingsActionInventorySecondary":"Pick up half / place one","settingsActionInventoryQuickMove":"Quick move","settingsActionInventoryHotbarSwap":"Swap with hotbar slot","settingsActionInventoryClose":"Close","settingsActionInventoryPanelPrevious":"Previous panel","settingsActionInventoryPanelNext":"Next panel","settingsActionInventoryDrop":"Drop item","settingsActionKeyboardType":"Type key","settingsActionKeyboardBackspace":"Backspace","settingsActionKeyboardSpace":"Space","settingsActionKeyboardCaretLeft":"Move cursor left","settingsActionKeyboardCaretRight":"Move cursor right","settingsActionKeyboardShift":"Shift","settingsActionKeyboardSymbols":"Accents and symbols","settingsActionKeyboardSubmit":"Send","settingsActionKeyboardClose":"Close keyboard","settingsActionKeyboardChannel":"Chat channel","settingsAlternatives":"Try alternatives","settingsAlternativesHint":"Try each way of playing and keep the one that feels best.","settingsMenuNavigation":"Menu navigation","settingsMenuNavigationHint":"Steer a cursor with the stick and jump between buttons with the D-pad, or use just one.","settingsNavHybrid":"Cursor and D-pad","settingsMenuNavFocus":"Jump between buttons","settingsVirtualCursor":"Virtual cursor","settingsInventoryNavigation":"Inventory","settingsInventoryNavigationHint":"Steer a cursor with the stick and step slot by slot with the D-pad, or use just one.","settingsInventoryNavSlot":"Slot by slot","settingsQuickChat":"Hold chat button","settingsQuickChatHint":"Hold the chat button to pick a quick phrase. Tapping it still opens chat.","settingsQuickChatWheel":"Quick chat wheel","settingsQuickChatOff":"Off","settingsLeaderboardButton":"Shop / leaderboard button","settingsLeaderboardButtonHint":"Open the shop in one press in games that have one. The lobby leaderboard is still in the pause menu.","settingsLeaderboardButtonShop":"Shop, in games with one","settingsLeaderboardButtonLeaderboard":"Always the leaderboard","settingsTester":"Gamepad tester","settingsTesterNoPad":"Connect a gamepad and press any button to test it.","settingsTesterFamily":"Detected: {{family}}","settingsTesterHint":"Start a test to try every button and stick without moving through the menu.","settingsTesterStart":"Start test","settingsTesterStop":"Stop test","settingsTesterTesting":"Press anything to see it light up. To stop, hold {{button}} or press it three times.","settingsControlsNote":"Playing with a gamepad? Change its buttons and feel in Gamepad settings.","settingsOpenController":"Gamepad settings","keyboardSpace":"Space","keyboardSend":"Send","keyboardDone":"Done","keyboardTargetChat":"Chat","keyboardTargetSign":"Sign","keyboardTargetNameTag":"Name tag","keyboardTargetBook":"Book page","keyboardTargetBookTitle":"Book title","keyboardTargetText":"Text","keyboardPhraseGg":"gg","keyboardPhraseHi":"hi","keyboardPhraseThanks":"thanks","keyboardPhraseGl":"gl","keyboardPhraseBrb":"brb","keyboardPhraseYes":"yes","keyboardPhraseNo":"no","keyboardPhraseHelp":"help!","quickChatPick":"Pick a phrase","actionWheelPick":"Pick an action","wheelReleaseToPick":"Release to pick","wheelClose":"Close","wheelChoose":"Choose","menusSelect":"Select","menusBack":"Back","menusClose":"Close","menusQuickChat":"Quick chat (hold)","menusSkipTutorial":"Skip tutorial","menusTabs":"Tabs","menusRows":"Rows","menusCursorMode":"Cursor","menusFocusMode":"Focus","menusClick":"Click","menusRightClick":"Right-click","menusScroll":"Scroll","menusFriends":"Friends","menusSearch":"Search","menusSettings":"Settings","menusLeaveGameTitle":"Leave the game?","menusLeaveGameLeave":"Leave","menusLeaveGameStay":"Stay","menusNotifications":"Notifications","menusLobby":"Lobby","menusShop":"Shop","menusTasks":"Tasks & leaderboards","menusInvite":"Invite friends","menusAdjust":"Adjust","menusFavourite":"Favourite","screensPressToContinue":"Press {{button}} to continue","screensPressToEnterGame":"Press {{button}} to enter game","screensEnterGame":"Enter game","screensBackToGames":"Back to games","tutorialMine":"Mine","tutorialPlace":"Place / Use","tutorialInventory":"Inventory","tutorialPause":"Pause","menusUseMouse":"Use a mouse or touch here"}}');
    var pU = gU(1181),
      EU = gU(1376),
      PU = gU(7801),
      TU = gU(74),
      qU = gU(21),
      KU = gU(24),
      cU = gU(7820),
      GU = gU(7849),
      jU = gU(7828),
      uU = gU(7854),
      CU = gU(7807),
      hU = gU(8298),
      QU = gU(8303),
      eU = gU(1591);
    const WU = (UU, RU, gU) => Math.max(RU, Math.min(gU, UU)),
      fU = UU => Math.min(UU.width, UU.height) / 720,
      xU = UU => Math.max(.15, UU);
    class mU {
      constructor() {
        this.locked = !1
      }
      lock() {
        this.locked = !0
      }
      update(UU, RU) {
        const gU = Math.hypot(UU.x, UU.y) >= (UU => Math.max(.3, UU))(RU);
        return this.locked ? (this.locked = gU, !1) : gU
      }
    }
    const IU = (UU, RU) => {
        const gU = WU(RU.dtMs, 0, 100),
          tU = gU / 1e3,
          pU = fU(RU.viewport) * (RU.cursorSpeedPercent / 100),
          EU = (0, CU.g)(RU.stick, xU(RU.moveDeadzone)),
          PU = Math.hypot(EU.x, EU.y),
          TU = ((UU, RU, gU) => {
            if (RU < .3) return 0;
            const tU = gU / 350;
            return RU >= .85 ? Math.min(1, UU + tU) : Math.max(0, UU - tU)
          })(UU.speedRamp, PU, gU);
        let qU = UU.x,
          KU = UU.y;
        if (PU > 0) {
          const UU = .45 + .55 * TU,
            gU = RU.context.overInteractive ? .45 : 1,
            cU = 1400 * (UU => {
              const RU = WU(UU, 0, 1);
              return .3 * RU + .7 * RU * RU
            })(PU) * pU * UU * gU;
          qU += EU.x / PU * cU * tU, KU += EU.y / PU * cU * tU
        }
        const cU = Math.hypot(RU.dpad.x, RU.dpad.y);
        if (cU > 0) {
          const UU = 500 * pU;
          qU += RU.dpad.x / cU * UU * tU, KU += RU.dpad.y / cU * UU * tU
        }
        const GU = RU.context.magnetTarget;
        if (GU && PU < .3 && 0 === cU) {
          const UU = ((UU, RU, gU, tU, pU) => {
            const EU = RU.x - UU.x,
              PU = RU.y - UU.y,
              TU = Math.hypot(EU, PU);
            if (0 === TU) return {
              x: 0,
              y: 0
            };
            const qU = Math.min(TU, pU * (1 - tU / .3));
            let KU = EU / TU * qU,
              cU = PU / TU * qU;
            if (tU > 0) {
              const UU = gU.x / tU,
                RU = gU.y / tU,
                pU = KU * UU + cU * RU;
              pU < 0 && (KU -= pU * UU, cU -= pU * RU)
            }
            return {
              x: KU,
              y: cU
            }
          })({
            x: qU,
            y: KU
          }, GU, EU, PU, 120 * fU(RU.viewport) * tU);
          qU += UU.x, KU += UU.y
        }
        return {
          x: WU(qU, 0, Math.max(0, RU.viewport.width - 1)),
          y: WU(KU, 0, Math.max(0, RU.viewport.height - 1)),
          speedRamp: TU
        }
      },
      JU = UU => {
        const RU = (0, CU.g)(UU, .2);
        return 0 !== RU.x || 0 !== RU.y
      },
      wU = (UU, RU) => {
        const gU = (0, CU.g)(UU, .2),
          tU = Math.hypot(gU.x, gU.y);
        if (0 === tU) return {
          x: 0,
          y: 0
        };
        const pU = tU * tU * 1600,
          EU = WU(RU, 0, 100) / 1e3;
        return {
          x: gU.x / tU * pU * EU,
          y: gU.y / tU * pU * EU
        }
      },
      nU = (UU, RU) => "y" === RU ? UU.scrollHeight > UU.clientHeight + 1 : UU.scrollWidth > UU.clientWidth + 1,
      bU = (UU, RU) => {
        if (!nU(UU, RU)) return !1;
        const gU = getComputedStyle(UU),
          tU = "y" === RU ? gU.overflowY : gU.overflowX;
        return "auto" === tU || "scroll" === tU
      },
      oU = (UU, RU, gU) => {
        for (let EU = UU instanceof HTMLElement ? UU : null !== (tU = null === UU || void 0 === UU ? void 0 : UU.parentElement) && void 0 !== tU ? tU : null; EU; EU = EU.parentElement) {
          var tU;
          if (bU(EU, RU)) return EU;
          if (EU === gU) return null
        }
        if (gU) return null;
        const pU = document.scrollingElement;
        return pU instanceof HTMLElement && nU(pU, RU) ? pU : null
      },
      ZU = new WeakMap,
      aU = (UU, RU) => {
        const gU = performance.now(),
          tU = ZU.get(UU);
        if (tU && tU.axis === RU && gU - tU.atMs < 500 && (!tU.container || tU.container.isConnected)) return tU.container;
        const pU = YU(UU, RU);
        return ZU.set(UU, {
          axis: RU,
          atMs: gU,
          container: pU
        }), pU
      },
      YU = (UU, RU) => {
        let gU = bU(UU, RU) ? UU : null,
          tU = gU ? gU.clientWidth * gU.clientHeight : 0;
        for (const pU of UU.querySelectorAll("*")) {
          const UU = pU.clientWidth * pU.clientHeight;
          UU > tU && bU(pU, RU) && (gU = pU, tU = UU)
        }
        return gU
      },
      BU = (UU, RU, gU) => "y" === RU ? gU < 0 ? UU.scrollTop > 0 : UU.scrollTop + UU.clientHeight < UU.scrollHeight - 1 : gU < 0 ? UU.scrollLeft > 0 : UU.scrollLeft + UU.clientWidth < UU.scrollWidth - 1,
      VU = (UU, RU, gU) => {
        "y" === RU ? UU.scrollBy({
          top: gU,
          behavior: "instant"
        }) : UU.scrollBy({
          left: gU,
          behavior: "instant"
        })
      },
      rU = UU => {
        if (!UU || UU === document.scrollingElement) return new DOMRect(0, 0, window.innerWidth, window.innerHeight);
        const RU = UU.getBoundingClientRect(),
          gU = Math.max(0, RU.left),
          tU = Math.max(0, RU.top);
        return new DOMRect(gU, tU, Math.min(window.innerWidth, RU.right) - gU, Math.min(window.innerHeight, RU.bottom) - tU)
      },
      XU = (UU, RU) => UU.left < RU.right && RU.left < UU.right && UU.top < RU.bottom && RU.top < UU.bottom;
    var vU = gU(56),
      dU = gU(1037),
      HU = gU.n(dU),
      SU = gU(1090);
    let sU = 0,
      yU = !1;
    class kU {
      constructor() {
        this.element = null, this.shownKey = "", this.gap = null
      }
      setElement(UU) {
        this.element = UU, this.shownKey = "", this.gap = null
      }
      show(UU) {
        const RU = this.element;
        if (!RU) return;
        const gU = UU ? this.keepOnScreen(RU, UU) : null,
          tU = gU ? `${gU.left},${gU.top},${gU.width},${gU.height}` : "";
        if (tU === this.shownKey) return;
        const pU = "" === this.shownKey;
        this.shownKey = tU, RU.classList.toggle("Visible", null !== gU), gU && (RU.classList.toggle("Snap", pU), RU.style.width = `${gU.width}px`, RU.style.height = `${gU.height}px`, RU.style.transform = `translate(${gU.left}px, ${gU.top}px)`, pU && (RU.offsetWidth, RU.classList.remove("Snap")))
      }
      hide() {
        this.show(null)
      }
      keepOnScreen(UU, RU) {
        var gU;
        const tU = `${window.innerWidth}x${window.innerHeight}@${(()=>{if("undefined"===typeof ResizeObserver)return getComputedStyle(document.documentElement).fontSize;if(!yU){yU=!0;const UU=document.createElement("div");UU.setAttribute("aria-hidden","true"),UU.style.cssText="position: fixed; top: 0; left: 0; width: 1rem; height: 0; visibility: hidden; pointer-events: none",document.body.appendChild(UU),new ResizeObserver((()=>{sU++})).observe(UU)}return String(sU)})()}`;
        (null === (gU = this.gap) || void 0 === gU ? void 0 : gU.key) !== tU && (this.gap = {
          px: parseFloat(getComputedStyle(UU).paddingLeft) || 0,
          key: tU
        });
        const pU = this.gap.px + 2,
          EU = Math.max(RU.left, pU),
          PU = Math.max(RU.top, pU),
          TU = Math.min(RU.left + RU.width, window.innerWidth - pU),
          qU = Math.min(RU.top + RU.height, window.innerHeight - pU);
        return TU <= EU || qU <= PU ? RU : {
          left: EU,
          top: PU,
          width: TU - EU,
          height: qU - PU
        }
      }
    }
    const FU = UU => {
      let {
        placer: RU,
        className: gU
      } = UU;
      const tU = (0, vU.useCallback)((UU => {
        RU.setElement(UU)
      }), [RU]);
      return (0, SU.jsx)("div", {
        ref: tU,
        className: HU()("PadReticle", gU),
        "aria-hidden": !0
      })
    };
    var iU = gU(8307),
      AU = gU(1640);
    const zU = UU => UU >= 56320 && UU <= 57343,
      MU = UU => UU >= 55296 && UU <= 56319,
      DU = (UU, RU) => RU >= 2 && zU(UU.charCodeAt(RU - 1)) && MU(UU.charCodeAt(RU - 2)) ? RU - 2 : Math.max(0, RU - 1),
      LU = (UU, RU) => {
        let gU;
        var tU, pU;
        return gU = UU.start !== UU.end ? RU < 0 ? UU.start : UU.end : RU < 0 ? DU(UU.value, UU.start) : (tU = UU.value, (pU = UU.start) + 1 < tU.length && MU(tU.charCodeAt(pU)) && zU(tU.charCodeAt(pU + 1)) ? pU + 2 : Math.min(tU.length, pU + 1)), {
          value: UU.value,
          start: gU,
          end: gU
        }
      },
      NU = ["text", "search", "url", "email", "tel", "password", "number"],
      lU = UU => !(!(0, AU.b)(UU) || UU.isContentEditable || UU.hasAttribute("data-pad-no-osk")) && (UU instanceof HTMLTextAreaElement || UU instanceof HTMLInputElement && NU.includes(UU.type)),
      OU = UU => null !== UU.selectionStart,
      UR = UU => {
        var RU, gU;
        const {
          value: tU
        } = UU;
        return {
          value: tU,
          start: null !== (RU = UU.selectionStart) && void 0 !== RU ? RU : tU.length,
          end: null !== (gU = UU.selectionEnd) && void 0 !== gU ? gU : tU.length
        }
      },
      RR = (UU, RU, gU) => {
        if (UU.readOnly) return;
        const tU = UU instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
        Object.getOwnPropertyDescriptor(tU, "value").set.call(UU, RU.value), OU(UU) && UU.setSelectionRange(RU.start, RU.end), (0, eU.g)(UU, new InputEvent("input", {
          bubbles: !0,
          inputType: gU
        }))
      };
    let gR = !1;
    const tR = (UU, RU) => !!document.execCommand(UU, !1, RU) || (gR || (gR = !0, console.warn(`execCommand("${UU}") failed; the on-screen keyboard is setting the value directly`)), !1),
      pR = (UU, RU) => {
        tR("insertText", RU) || RR(UU, function(UU, RU) {
          let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
          const tU = UU.value.slice(0, UU.start),
            pU = UU.value.slice(UU.end);
          let EU = gU < 0 ? RU.length : Math.max(0, gU - tU.length - pU.length);
          EU > 0 && EU < RU.length && MU(RU.charCodeAt(EU - 1)) && EU--;
          const PU = RU.slice(0, EU),
            TU = tU.length + PU.length;
          return {
            value: tU + PU + pU,
            start: TU,
            end: TU
          }
        }(UR(UU), RU, UU.maxLength), "insertText")
      },
      ER = UU => {
        tR("delete") || RR(UU, (UU => {
          const RU = UU.start === UU.end ? DU(UU.value, UU.start) : UU.start;
          return {
            value: UU.value.slice(0, RU) + UU.value.slice(UU.end),
            start: RU,
            end: RU
          }
        })(UR(UU)), "deleteContentBackward")
      },
      PR = (UU, RU) => {
        if (!OU(UU)) return;
        const gU = LU(UR(UU), RU);
        UU.setSelectionRange(gU.start, gU.end)
      },
      TR = ["button", "a[href]", "input:not([type=hidden])", "textarea", "select", "[role=button]", "[role=tab]", "[role=switch]", "[role=checkbox]", "[role=option]", "[role=menuitem]", "[data-pad-focusable]", "[data-pad-tab]", ".Dropdown-control", ".Dropdown-option"].join(","),
      qR = (UU, RU) => {
        if ("function" === typeof UU.checkVisibility) return !UU.checkVisibility({
          visibilityProperty: !0,
          checkVisibilityCSS: !0,
          opacityProperty: RU,
          checkOpacity: RU
        });
        const {
          visibility: gU
        } = getComputedStyle(UU);
        if ("hidden" === gU || "collapse" === gU) return !0;
        if (!RU) return !1;
        for (let tU = UU; tU; tU = tU.parentElement)
          if ("0" === getComputedStyle(tU).opacity) return !0;
        return !1
      },
      KR = UU => {
        if (!UU.isConnected || qR(UU, !0)) return !1;
        const RU = UU.getBoundingClientRect();
        return RU.width > 0 && RU.height > 0
      },
      cR = UU => !!UU.matches(":disabled, [aria-disabled='true']") || "button" === UU.getAttribute("role") && "-1" === UU.getAttribute("tabindex"),
      GR = UU => {
        var RU;
        if (UU.closest("[data-pad-ignore]")) return !0;
        return !!(null === (RU = UU.parentElement) || void 0 === RU ? void 0 : RU.closest("[data-pad-focusable]"))
      },
      jR = UU => {
        const RU = UU.querySelectorAll(TR);
        return UU.matches(TR) ? [UU, ...RU] : RU
      },
      uR = UU => {
        const RU = [];
        for (const gU of jR(UU)) !GR(gU) && KR(gU) && RU.push(gU);
        return RU
      },
      CR = new WeakMap,
      hR = UU => {
        const RU = CR.get(UU);
        if (RU && QR(RU, UU)) return !0;
        for (const gU of jR(UU))
          if (!GR(gU) && KR(gU)) return CR.set(UU, gU), !0;
        return CR.delete(UU), !1
      },
      QR = (UU, RU) => RU.contains(UU) && UU.matches(TR) && !GR(UU) && KR(UU),
      eR = (UU, RU) => QR(UU, RU) && !cR(UU),
      WR = UU => {
        const RU = RU => {
          let gU = 0;
          for (let tU = RU.parentElement; tU && tU !== UU; tU = tU.parentElement) gU++;
          return gU
        };
        return [...UU.querySelectorAll("[data-pad-initial-area]")].filter(KR).sort(((UU, gU) => RU(gU) - RU(UU)))
      },
      fR = UU => lU(UU),
      xR = UU => {
        const RU = UU.getBoundingClientRect();
        return {
          x: RU.left + RU.width / 2,
          y: RU.top + RU.height / 2
        }
      },
      mR = (UU, RU, gU) => ({
        bubbles: !0,
        cancelable: !0,
        composed: !0,
        view: window,
        clientX: UU.x,
        clientY: UU.y,
        screenX: UU.x,
        screenY: UU.y,
        button: RU,
        buttons: gU,
        pointerId: 1,
        pointerType: "mouse",
        isPrimary: !0
      }),
      IR = (UU, RU) => {
        (0, eU.g)(UU, RU)
      },
      JR = function(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const tU = 0 === gU ? 1 : 2;
        IR(UU, new PointerEvent("pointerdown", mR(RU, gU, tU))), IR(UU, new MouseEvent("mousedown", mR(RU, gU, tU)))
      },
      wR = function(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        IR(UU, new PointerEvent("pointerup", mR(RU, gU, 0))), IR(UU, new MouseEvent("mouseup", mR(RU, gU, 0)))
      },
      nR = function(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        JR(UU, RU, gU), wR(UU, RU, gU), IR(UU, 0 === gU ? new MouseEvent("click", mR(RU, 0, 0)) : new MouseEvent("contextmenu", mR(RU, 2, 0)))
      },
      bR = function(UU, RU, gU) {
        let {
          leaveBelow: tU = null,
          enterBelow: pU = null
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (UU !== RU) {
          if (null !== UU && void 0 !== UU && UU.isConnected) {
            const pU = {
              ...mR(gU, 0, 0),
              relatedTarget: RU
            };
            IR(UU, new PointerEvent("pointerout", pU)), IR(UU, new MouseEvent("mouseout", pU));
            const EU = UU => !!RU && UU.contains(RU) || !!tU && UU.contains(tU);
            for (let RU = UU; RU && !EU(RU); RU = RU.parentElement) IR(RU, new PointerEvent("pointerleave", {
              ...pU,
              bubbles: !1
            })), IR(RU, new MouseEvent("mouseleave", {
              ...pU,
              bubbles: !1
            }))
          }
          if (RU) {
            const tU = {
              ...mR(gU, 0, 0),
              relatedTarget: UU
            };
            IR(RU, new PointerEvent("pointerover", tU)), IR(RU, new MouseEvent("mouseover", tU));
            const EU = [],
              PU = RU => !(null === UU || void 0 === UU || !UU.isConnected) && RU.contains(UU) || !!pU && RU.contains(pU);
            for (let UU = RU; UU && !PU(UU); UU = UU.parentElement) EU.push(UU);
            for (const UU of EU.reverse()) IR(UU, new PointerEvent("pointerenter", {
              ...tU,
              bubbles: !1
            })), IR(UU, new MouseEvent("mouseenter", {
              ...tU,
              bubbles: !1
            }));
            IR(RU, new PointerEvent("pointermove", mR(gU, 0, 0))), IR(RU, new MouseEvent("mousemove", mR(gU, 0, 0)))
          }
        } else RU && (IR(RU, new PointerEvent("pointermove", mR(gU, 0, 0))), IR(RU, new MouseEvent("mousemove", mR(gU, 0, 0))))
      },
      oR = UU => {
        KU.p.yh(iU.d, UU)
      },
      ZR = UU => {
        if (fR(UU)) return void oR(UU);
        const RU = UU.hasAttribute("data-pad-focusable") ? UU.querySelector("a[href]") : null,
          gU = null !== RU && void 0 !== RU ? RU : UU;
        nR(gU, xR(gU))
      },
      aR = ".Dropdown-root.is-open",
      YR = UU => {
        const RU = UU.querySelector(".Dropdown-control");
        return ZR(RU), RU
      },
      BR = UU => {
        var RU;
        const gU = null !== (RU = UU.closest(aR)) && void 0 !== RU ? RU : UU.querySelector(aR);
        return gU ? YR(gU) : null
      },
      VR = UU => {
        for (const RU of document.querySelectorAll(aR)) RU.contains(UU) || YR(RU)
      },
      rR = UU => null !== UU.closest("input[type=color], input[type=file], [data-pad-mouse-only]"),
      XR = UU => {
        const RU = UU ? document.elementFromPoint(UU.x, UU.y) : null;
        return !(null === RU || void 0 === RU || !RU.closest("[data-pad-repeat]"))
      },
      vR = UU => {
        var RU;
        return null !== (RU = [...UU.querySelectorAll("[data-pad-back]")].find(KR)) && void 0 !== RU ? RU : null
      },
      dR = UU => {
        const RU = vR(UU);
        return !!RU && (ZR(RU), !0)
      },
      HR = UU => {
        var RU, gU, tU, pU;
        return null !== (RU = null !== (gU = null !== (tU = UU.getAttribute("data-pad-key")) && void 0 !== tU ? tU : UU.getAttribute("href")) && void 0 !== gU ? gU : null === (pU = UU.querySelector("a[href]")) || void 0 === pU ? void 0 : pU.getAttribute("href")) && void 0 !== RU ? RU : null
      },
      SR = {
        x: 0,
        y: 0,
        visible: !1,
        pressed: !1
      };
    const sR = new class {
        constructor() {
          this.state = SR, this.listeners = new Set
        }
        get() {
          return this.state
        }
        set(UU) {
          if (RU = this.state, gU = UU, (RU.visible || gU.visible) && (RU.visible !== gU.visible || RU.x !== gU.x || RU.y !== gU.y || RU.pressed !== gU.pressed)) {
            var RU, gU;
            this.state = UU;
            for (const RU of this.listeners) RU(UU)
          }
        }
        hide() {
          this.set(SR)
        }
        subscribe(UU) {
          return this.listeners.add(UU), () => {
            this.listeners.delete(UU)
          }
        }
      },
      yR = (UU, RU) => {
        let {
          kind: gU,
          holding: tU,
          hasPress: pU,
          hasBack: EU,
          slotHasItem: PU
        } = RU;
        switch (UU) {
          case "primary":
            return "slot" === gU ? "slotPrimary" : "recipe" === gU || "button" === gU ? pU ? "pressPrimary" : "click" : "textField" === gU ? "openKeyboard" : null;
          case "secondary":
            return "slot" === gU ? "slotSecondary" : "button" !== gU && "recipe" !== gU || !pU ? null : "pressSecondary";
          case "quickMove":
            return "slot" === gU && PU ? "slotQuickMove" : null;
          case "hotbarSwap":
            return "slot" === gU && PU && !tU ? "hotbarPick" : null;
          case "openButton":
            return "close";
          case "back":
            return tU ? "cancel" : EU ? "pressBack" : "close"
        }
      },
      kR = UU => {
        const RU = [];
        if (UU.hotbarPicking) return RU.push({
          actions: ["inventoryPrimary", "inventoryHotbarSwap"],
          labelKey: "inventorySwapHere"
        }), RU.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryCancel"
        }), RU;
        if (UU.holding) "slot" === UU.kind ? (RU.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryPlace"
        }), RU.push({
          actions: ["inventorySecondary"],
          labelKey: "inventoryPlaceOne"
        })) : "textField" === UU.kind && RU.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryType"
        }), RU.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryPutBack"
        }), RU.push({
          actions: ["inventoryDrop"],
          labelKey: "inventoryDrop"
        }), UU.openButtonCloses && RU.push({
          actions: ["inventory"],
          labelKey: "inventoryClose"
        });
        else {
          var gU;
          "slot" === UU.kind && UU.slotHasItem ? (RU.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryTake"
          }), RU.push({
            actions: ["inventorySecondary"],
            labelKey: "inventoryTakeHalf"
          }), RU.push({
            actions: ["inventoryQuickMove"],
            labelKey: UU.quickMoveToHotbar ? "inventoryToHotbar" : "inventoryQuickMove"
          }), RU.push({
            actions: ["inventoryHotbarSwap"],
            labelKey: "inventoryHotbarSwap"
          }), RU.push({
            actions: ["inventoryDrop"],
            labelKey: "inventoryDrop"
          })) : "button" !== UU.kind && "recipe" !== UU.kind || !UU.pressHints ? "button" === UU.kind || "recipe" === UU.kind ? RU.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventorySelect"
          }) : "textField" === UU.kind && RU.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryType"
          }) : (UU.pressHints.primary && RU.push({
            actions: ["inventoryPrimary"],
            labelKey: UU.pressHints.primary
          }), UU.pressHints.secondary && RU.push({
            actions: ["inventorySecondary"],
            labelKey: UU.pressHints.secondary
          }));
          const tU = null === (gU = UU.pressHints) || void 0 === gU ? void 0 : gU.back;
          tU && RU.push({
            actions: ["inventoryClose"],
            labelKey: tU
          });
          const pU = [];
          UU.openButtonCloses && pU.push("inventory"), tU || pU.push("inventoryClose"), pU.length > 0 && RU.push({
            actions: pU,
            labelKey: "inventoryClose"
          })
        }
        return RU.push({
          actions: ["inventoryPanelPrevious", "inventoryPanelNext"],
          labelKey: "inventoryPanels"
        }), UU.hasCategories ? RU.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryCategory"
        }) : UU.hasList && RU.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryPage"
        }), RU
      };
    var FR = gU(8316);
    class iR {
      constructor(UU) {
        this.probes = UU, this.byContainer = new Map, this.byParent = new Map
      }
      find(UU, RU) {
        const gU = oU(UU, "y", RU);
        if (!gU) return null;
        let tU = this.byContainer.get(gU);
        return tU || (this.probes.push({
          element: gU,
          rect: DR(gU.getBoundingClientRect())
        }), tU = {
          container: gU,
          box: rU(gU),
          group: MR(gU)
        }, this.byContainer.set(gU, tU)), tU
      }
      findForParent(UU, RU) {
        let gU = this.byParent.get(UU);
        return void 0 === gU && (gU = this.find(UU, RU), this.byParent.set(UU, gU)), gU
      }
    }
    const AR = new WeakMap;
    let zR = 0;
    const MR = UU => {
        let RU = AR.get(UU);
        return RU || (RU = "el:" + zR++, AR.set(UU, RU)), RU
      },
      DR = UU => ({
        left: UU.left,
        top: UU.top,
        width: UU.width,
        height: UU.height
      }),
      LR = UU => UU.width > 0 && UU.height > 0,
      NR = (UU, RU) => LR(UU) && UU.left + UU.width > 0 && UU.top + UU.height > 0 && UU.left < RU.width && UU.top < RU.height,
      lR = (UU, RU, gU) => {
        const tU = UU.top + UU.height / 2;
        return NR(UU, RU) && (!gU || tU >= gU.top && tU <= gU.bottom)
      },
      OR = UU => ({
        x: UU.left + UU.width / 2,
        y: UU.top + UU.height / 2
      }),
      Ug = (UU, RU, gU) => UU < 0 ? gU >= 0 ? 0 : RU - 1 : ((UU + gU) % RU + RU) % RU,
      Rg = UU => "Left" === UU || "Right" === UU,
      gg = (UU, RU, gU) => {
        const tU = Rg(gU),
          pU = tU ? UU.top : UU.left,
          EU = tU ? UU.height : UU.width,
          PU = tU ? RU.top : RU.left,
          TU = tU ? RU.height : RU.width,
          qU = Math.max(0, Math.max(PU - (pU + EU), pU - (PU + TU)));
        return EU > 1.5 * TU ? {
          gap: qU,
          offset: Math.max(0, PU - pU) + .1 * Math.max(0, pU - PU)
        } : {
          gap: qU,
          offset: Math.abs(PU + TU / 2 - (pU + EU / 2))
        }
      },
      tg = (UU, RU, gU) => {
        const tU = ((UU, RU, gU) => {
          const tU = OR(UU),
            pU = OR(RU),
            EU = Rg(gU) ? Math.min(UU.width, RU.width) / 4 : Math.min(UU.height, RU.height) / 4;
          switch (gU) {
            case "Right":
              return pU.x - tU.x >= EU ? Math.max(0, RU.left - (UU.left + UU.width)) : null;
            case "Left":
              return tU.x - pU.x >= EU ? Math.max(0, UU.left - (RU.left + RU.width)) : null;
            case "Down":
              return pU.y - tU.y >= EU ? Math.max(0, RU.top - (UU.top + UU.height)) : null;
            case "Up":
              return tU.y - pU.y >= EU ? Math.max(0, UU.top - (RU.top + RU.height)) : null
          }
        })(UU, RU, gU);
        if (null === tU) return null;
        const pU = gg(UU, RU, gU);
        return tU + 3 * pU.gap + .5 * pU.offset
      },
      pg = (UU, RU) => RU.visible || null !== RU.scrollGroup && RU.scrollGroup === UU.scrollGroup,
      Eg = (UU, RU, gU, tU) => {
        let pU = null,
          EU = 1 / 0;
        for (const PU of RU) {
          if (PU.key === UU.key || !pg(UU, PU) || !tU(PU)) continue;
          const RU = tg(UU.rect, PU.rect, gU);
          null !== RU && RU < EU && (pU = PU, EU = RU)
        }
        return pU
      },
      Pg = (UU, RU, gU) => {
        const tU = Eg(UU, RU, gU, (() => !0));
        if (!tU || Rg(gU) || null === UU.scrollGroup || tU.scrollGroup === UU.scrollGroup) return tU;
        const pU = Eg(UU, RU, gU, (RU => 0 === gg(UU.rect, RU.rect, gU).gap));
        return null !== pU && void 0 !== pU ? pU : tU
      },
      Tg = (UU, RU, gU) => {
        let tU = null,
          pU = 1 / 0;
        for (const EU of RU) {
          if (!EU.visible || gU && !gU(EU)) continue;
          const RU = OR(EU.rect),
            PU = Math.hypot(RU.x - UU.x, RU.y - UU.y);
          PU < pU && (tU = EU, pU = PU)
        }
        return tU
      },
      qg = UU => {
        const {
          rect: RU,
          clip: gU
        } = UU;
        if (!gU) return RU;
        const tU = Math.max(RU.left, gU.left),
          pU = Math.max(RU.top, gU.top);
        return {
          left: tU,
          top: pU,
          width: Math.min(RU.left + RU.width, gU.left + gU.width) - tU,
          height: Math.min(RU.top + RU.height, gU.top + gU.height) - pU
        }
      },
      Kg = (UU, RU) => RU.x >= UU.left && RU.x < UU.left + UU.width && RU.y >= UU.top && RU.y < UU.top + UU.height,
      cg = (UU, RU) => {
        let gU = null,
          tU = 1 / 0;
        for (const pU of RU) {
          const RU = qg(pU);
          (pU.visible || pU.clip) && Kg(RU, UU) && (RU.width * RU.height < tU && (gU = pU, tU = RU.width * RU.height))
        }
        return gU
      },
      Gg = UU => {
        let RU = null;
        for (const gU of UU) {
          if (!gU.visible) continue;
          if (!RU) {
            RU = gU;
            continue
          }
          const UU = Math.min(RU.rect.height, gU.rect.height) / 2,
            tU = gU.rect.top - RU.rect.top;
          (tU < -UU || Math.abs(tU) <= UU && gU.rect.left < RU.rect.left) && (RU = gU)
        }
        return RU
      },
      jg = (UU, RU, gU, tU, pU) => {
        const EU = pU % RU,
          PU = Math.floor(pU / RU);
        return {
          left: UU.left + EU * gU,
          top: UU.top + PU * tU,
          width: UU.width,
          height: UU.height
        }
      },
      ug = ".EntireInventoryWrapper .Inventory, .HotBarGameItemsContainer",
      Cg = ".LazyLoadedItemWrapper",
      hg = ["[data-inven-idx]", "[data-recipe-key]", "[role=button]", "button", "input:not([type=hidden])", "textarea", ".CreativeCategoryTab", ".CreativeCategoryDropdownButton", ".CreativeCategoryDropdownOption", "[data-craft-ingredient]"].join(","),
      Qg = [
        ["hotbar", ".HotBarGameItemsContainer"],
        ["gameButtons", ".ClientGameInventoryButtons"],
        ["categories", ".CreativeCategoryRail"],
        ["recipe", ".CraftableInfo"],
        ["armour", ".ArmourItemSlots"],
        ["main", ".InvenBodyRight"],
        ["left", ".InvenLeftSide"]
      ],
      eg = ["gameButtons", "categories", "left", "recipe", "armour", "main", "hotbar"],
      Wg = UU => UU.hasAttribute("data-inven-idx") ? "slot" : UU.hasAttribute("data-recipe-key") ? "recipe" : UU.hasAttribute("data-craft-ingredient") || cR(UU) ? "info" : fR(UU) ? "textField" : "button",
      fg = (UU, RU) => "slot" === RU ? Number(UU.getAttribute("data-inven-idx")) : null,
      xg = UU => UU.matches(Cg) ? UU.querySelector(hg) : UU,
      mg = UU => {
        var RU, gU;
        return {
          element: UU,
          recipe: null !== (RU = UU && (null === (gU = xg(UU)) || void 0 === gU ? void 0 : gU.getAttribute("data-recipe-key"))) && void 0 !== RU ? RU : null
        }
      },
      Ig = UU => {
        const RU = xg(UU);
        if (!RU) return {
          kind: "pending",
          idx: null
        };
        const gU = Wg(RU);
        return {
          kind: gU,
          idx: fg(RU, gU)
        }
      },
      Jg = UU => {
        const RU = [];
        for (const [gU, tU] of Qg) {
          UU.matches(tU) && RU.push([gU, UU]);
          for (const pU of UU.querySelectorAll(tU)) RU.push([gU, pU])
        }
        return RU
      },
      wg = (UU, RU) => {
        for (const [gU, tU] of UU)
          if (tU.contains(RU)) return gU;
        return "other"
      },
      ng = (UU, RU, gU, tU, pU, EU, PU, TU) => {
        var qU;
        const KU = UU.children,
          cU = DR(KU[0].getBoundingClientRect()),
          GU = [{
            element: KU[0],
            rect: cU
          }];
        if (EU.push(GU[0]), 0 === cU.width || 0 === cU.height) return;
        let jU = 1;
        for (; jU < KU.length && Math.abs(KU[jU].getBoundingClientRect().top - cU.top) < 1;) jU++;
        const uU = UU => {
            const RU = {
              element: KU[UU],
              rect: DR(KU[UU].getBoundingClientRect())
            };
            return EU.push(RU), GU.push(RU), RU.rect
          },
          CU = jU > 1 ? uU(1).left - cU.left : cU.width,
          hU = KU.length > jU ? uU(jU).top - cU.top : cU.height,
          QU = PU.find(UU, RU);
        let eU = null;
        if (QU) {
          var WU;
          const {
            container: UU,
            box: RU
          } = QU;
          eU = null !== (WU = TU.get(UU)) && void 0 !== WU ? WU : null, eU || (eU = {
            top: UU.scrollTop,
            left: UU.scrollLeft,
            box: RU,
            viewport: tU,
            targets: [],
            probes: [],
            holdsOthers: !1
          }, TU.set(UU, eU)), eU.probes.push(...GU)
        }
        const fU = pU.length;
        for (let JU = 0; JU < KU.length; JU++) {
          var xU, mU, IU;
          const UU = KU[JU],
            RU = jg(cU, jU, CU, hU, JU),
            EU = UU.firstElementChild ? UU.querySelector(hg) : null,
            PU = EU ? Wg(EU) : "pending";
          pU.push({
            key: MR(UU),
            rect: RU,
            panel: gU,
            scrollGroup: null !== (xU = null === QU || void 0 === QU ? void 0 : QU.group) && void 0 !== xU ? xU : null,
            visible: lR(RU, tU, null === QU || void 0 === QU ? void 0 : QU.box),
            clip: null !== (mU = null === QU || void 0 === QU ? void 0 : QU.box) && void 0 !== mU ? mU : null,
            element: UU,
            kind: PU,
            idx: EU ? fg(EU, PU) : null,
            scrollContainer: null !== (IU = null === QU || void 0 === QU ? void 0 : QU.container) && void 0 !== IU ? IU : null
          })
        }
        null === (qU = eU) || void 0 === qU || qU.targets.push(...pU.slice(fU))
      },
      bg = UU => UU instanceof Element && null !== UU.closest(Cg),
      og = UU => null !== UU.scrollContainer && bg(UU.element);
    class Zg {
      constructor() {
        this.latched = null, this.presses = 0
      }
      press(UU, RU, gU, tU) {
        this.latched = {
          source: UU,
          focusKey: RU,
          sinceMs: gU,
          hold: {
            id: ++this.presses,
            holdMs: tU
          }
        }
      }
      update(UU, RU, gU) {
        const tU = this.latched;
        return tU ? UU && RU === tU.focusKey ? gU - tU.sinceMs < tU.hold.holdMs ? null : (this.latched = null, tU.source) : (this.latched = null, null) : null
      }
      getHold() {
        var UU, RU;
        return null !== (UU = null === (RU = this.latched) || void 0 === RU ? void 0 : RU.hold) && void 0 !== UU ? UU : null
      }
      reset() {
        this.latched = null
      }
    }
    var ag = gU(8319);
    const Yg = {
        kind: "none"
      },
      Bg = UU => ({
        x: UU.clientX,
        y: UU.clientY
      }),
      Vg = () => 2 * (parseFloat(getComputedStyle(document.documentElement).fontSize) || 16);
    class rg {
      constructor() {
        this.hovered = Yg, this.signature = "", this.holding = !1, this.lastPoint = {
          clientX: 0,
          clientY: 0
        }
      }
      sync(UU, RU, gU, tU, pU) {
        const EU = null !== RU ? {
            kind: "slot",
            idx: RU
          } : gU ? {
            kind: "element",
            element: gU
          } : Yg,
          PU = `${pU}|${Math.round(tU.clientX)},${Math.round(tU.clientY)}`,
          TU = (qU = this.hovered, KU = EU, "slot" === qU.kind && "slot" === KU.kind ? qU.idx === KU.idx : "element" === qU.kind && "element" === KU.kind ? qU.element === KU.element : qU.kind === KU.kind);
        var qU, KU;
        if (TU && PU === this.signature) return;
        const cU = !TU || pU !== this.holding || "" === this.signature;
        this.signature = PU, this.holding = pU, this.lastPoint = tU;
        const GU = this.hovered;
        if (this.hovered = EU, "slot" === EU.kind) return this.leaveElement(GU, null, tU), void(cU ? UU.hover(EU.idx, tU) : UU.moveTo(tU));
        if (TU) return void("element" === EU.kind ? bR(EU.element, EU.element, Bg(tU)) : UU.hover(null, tU));
        UU.hover(null, tU);
        const jU = "element" === EU.kind ? EU.element : null;
        "element" === GU.kind ? bR(GU.element, jU, Bg(tU)) : jU && bR(null, jU, Bg(tU))
      }
      invalidate() {
        this.signature = ""
      }
      clear(UU) {
        const RU = this.hovered;
        this.hovered = Yg, this.signature = "", "none" !== RU.kind && (this.leaveElement(RU, null, this.lastPoint), UU && "slot" === RU.kind && UU.hover(null, this.lastPoint))
      }
      leaveElement(UU, RU, gU) {
        "element" === UU.kind && bR(UU.element, RU, Bg(gU))
      }
    }
    class Xg {
      constructor() {
        this.lastTiltedMs = -1 / 0
      }
      update(UU, RU) {
        JU(UU) && (this.lastTiltedMs = RU)
      }
      allowsClick(UU) {
        return UU - this.lastTiltedMs > 150
      }
    }
    class vg {
      constructor() {
        this.remainder = 0, this.container = null
      }
      isScrolling(UU) {
        return 0 !== (0, CU.g)(UU, .2).y
      }
      step(UU, RU, gU) {
        UU !== this.container && (this.container = UU, this.remainder = 0);
        const tU = wU(RU, gU).y;
        if (0 === tU) return this.remainder = 0, !1;
        const pU = this.remainder + tU,
          EU = Math.trunc(pU);
        if (this.remainder = pU - EU, 0 === EU) return !1;
        const PU = UU.scrollTop;
        return UU.scrollTop = PU + EU, UU.scrollTop !== PU
      }
      current() {
        var UU;
        return null !== (UU = this.container) && void 0 !== UU && UU.isConnected ? this.container : null
      }
      reset() {
        this.remainder = 0, this.container = null
      }
    }
    var dg = gU(8321);
    const Hg = "[data-pad-inventory-default]",
      Sg = ".HotBarGameItemsContainer .InvenItem.Selected",
      sg = {
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
      yg = [
        ["primary", "inventoryPrimary"],
        ["secondary", "inventorySecondary"],
        ["quickMove", "inventoryQuickMove"],
        ["hotbarSwap", "inventoryHotbarSwap"],
        ["back", "inventoryClose"],
        ["openButton", "inventory"]
      ],
      kg = ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryHotbarSwap", "inventoryClose", "inventoryDrop"],
      Fg = ["inventoryPanelPrevious", "inventoryPanelNext", "menuPageUp", "menuPageDown"],
      ig = [...kg, ...Fg],
      Ag = () => {
        return UU = (0, cU.f)("inventory"), !ig.map(cU.f).includes(UU) && !(0, CU.B)(UU);
        var UU
      },
      zg = new Set(["slotPrimary", "slotSecondary", "slotQuickMove", "pressPrimary", "pressSecondary", "openKeyboard"]),
      Mg = (UU, RU) => {
        const gU = !(null === RU || void 0 === RU || !RU.isHolding());
        return function(UU, RU) {
          const gU = UU.find((UU => UU.visible && RU(UU)));
          if (gU) return gU;
          for (var tU = arguments.length, pU = new Array(tU > 2 ? tU - 2 : 0), EU = 2; EU < tU; EU++) pU[EU - 2] = arguments[EU];
          for (const PU of pU) {
            const RU = Gg(UU.filter(PU));
            if (RU) return RU
          }
          return Gg(UU)
        }(UU, (UU => {
          const {
            element: RU
          } = UU;
          return RU.matches(Hg) || null !== RU.querySelector(Hg) || RU.matches(Sg)
        }), (UU => "slot" === UU.kind ? gU || null !== UU.idx && !(null === RU || void 0 === RU || !RU.hasItemAt(UU.idx)) : "recipe" === UU.kind || "pending" === UU.kind), (UU => "slot" === UU.kind || "button" === UU.kind))
      };
    class Dg {
      constructor() {
        this.set = null, this.observer = new MutationObserver((UU => {
          UU.some((UU => !bg(UU.target))) && (this.set = null)
        })), this.invalidate = () => {
          this.set = null
        }, this.onScroll = UU => {
          this.scrolled(UU.target)
        }
      }
      get() {
        if (!this.set) {
          this.set = (() => {
            const UU = [],
              RU = [];
            let gU = !1;
            const tU = {
                width: window.innerWidth,
                height: window.innerHeight
              },
              pU = new Map,
              EU = new iR(RU);
            for (const GU of document.querySelectorAll(ug)) {
              const cU = Jg(GU);
              gU ||= null !== GU.querySelector(".CreativeCategoryTab");
              for (const gU of GU.querySelectorAll(`${Cg}:first-child`)) {
                const PU = gU.parentElement;
                ng(PU, GU, wg(cU, PU), tU, UU, RU, EU, pU)
              }
              for (const gU of GU.querySelectorAll(hg)) {
                var PU, TU, qU, KU;
                if (gU.closest(Cg) || gU.closest("[data-pad-ignore]")) continue;
                const jU = null === (PU = gU.parentElement) || void 0 === PU ? void 0 : PU.closest(hg);
                if (jU && GU.contains(jU)) continue;
                const uU = Wg(gU),
                  CU = fg(gU, uU);
                if (-1 === CU) continue;
                const hU = DR(gU.getBoundingClientRect());
                RU.push({
                  element: gU,
                  rect: hU
                });
                const QU = EU.findForParent(gU.parentElement, GU),
                  eU = QU && !pU.has(QU.container) ? QU : null;
                (eU ? LR(hU) : NR(hU, tU)) && UU.push({
                  key: MR(gU),
                  rect: hU,
                  panel: wg(cU, gU),
                  scrollGroup: null !== (TU = null === eU || void 0 === eU ? void 0 : eU.group) && void 0 !== TU ? TU : null,
                  visible: lR(hU, tU, null === eU || void 0 === eU ? void 0 : eU.box),
                  clip: null !== (qU = null === eU || void 0 === eU ? void 0 : eU.box) && void 0 !== qU ? qU : null,
                  element: gU,
                  kind: uU,
                  idx: CU,
                  scrollContainer: null !== (KU = null === eU || void 0 === eU ? void 0 : eU.container) && void 0 !== KU ? KU : null
                })
              }
            }
            for (const [GU, jU] of pU) jU.holdsOthers = RU.some((UU => UU.element !== GU && GU.contains(UU.element) && !UU.element.closest(Cg)));
            const cU = new Map;
            for (const GU of UU) cU.set(GU.element, GU);
            return {
              targets: UU,
              byElement: cU,
              hasCategories: gU,
              probes: RU,
              scrollers: pU
            }
          })(), this.observer.disconnect();
          for (const UU of document.querySelectorAll(ug)) this.observer.observe(UU, {
            childList: !0,
            subtree: !0,
            attributes: !0,
            attributeFilter: ["class", "disabled", "aria-disabled", "tabindex", "data-inven-idx"]
          })
        }
        return this.set
      }
      scrolled(UU) {
        !this.set || UU instanceof Element && ((UU, RU) => {
          const gU = UU.scrollers.get(RU);
          if (!gU || gU.holdsOthers || RU.scrollLeft !== gU.left) return !1;
          const tU = RU.scrollTop - gU.top;
          if (0 === tU) return !0;
          gU.top = RU.scrollTop;
          for (const pU of gU.probes) pU.rect.top -= tU;
          for (const pU of gU.targets) pU.rect.top -= tU, pU.visible = lR(pU.rect, gU.viewport, gU.box);
          return !0
        })(this.set, UU) || (this.set = null)
      }
      revalidate() {
        this.set && this.set.probes.some((UU => {
          return RU = UU.rect, gU = UU.element.getBoundingClientRect(), !(RU.left === gU.left && RU.top === gU.top && RU.width === gU.width && RU.height === gU.height);
          var RU, gU
        })) && (this.set = null)
      }
      disconnect() {
        this.observer.disconnect(), this.set = null
      }
    }
    const Lg = new class {
        constructor() {
          this.focused = null, this.focusTarget = null, this.lastRect = null, this.panelMemory = new Map, this.reopenSlotIdx = null, this.dpadTimers = new Map(CU.w.map((UU => [UU, (0, hU.e)(CU.x)]))), this.stickRepeat = new CU.c((0, hU.e)(CU.U)), this.pageUpTimer = (0, hU.e)(CU.Q), this.pageDownTimer = (0, hU.e)(CU.Q), this.stickGate = new mU, this.pointer = null, this.activePress = null, this.dropLatch = new Zg, this.scroller = new vg, this.scrollStickClick = new Xg, this.hover = new rg, this.lastRealPointer = null, this.placeAfterCategory = null, this.hotbarPick = null, this.ring = new kU, this.targets = new Dg, this.hasCategories = !1, this.wasShowing = !1, this.state = ag.d, this.isActive = () => (0, FR.j)(), this.isShowing = () => "inventory" === GU.e.getActiveConsumerName() && (0, uU.i)(), this.getState = () => this.state, this.isSteppingSlots = () => this.isShowing() && null === this.pointer, this.onDeactivate = () => {
            this.endInteraction((0, FR.h)()), (0, FR.j)() || this.forgetSurface()
          }, this.forgetSurface = () => {
            var UU;
            this.reopenSlotIdx = null !== (UU = this.focused ? Ig(this.focused).idx : null) && void 0 !== UU ? UU : this.reopenSlotIdx, this.focused = null, this.focusTarget = null, this.lastRect = null, this.placeAfterCategory = null, (0, FR.s)(), this.panelMemory.clear(), this.targets.disconnect()
          }, this.onFrame = UU => {
            (0, TU.unstable_batchedUpdates)((() => {
              this.frame(UU)
            }))
          }, this.shouldBlockRealPointer = UU => UU.isTrusted && !(0, eU.t)(UU) && this.isShowing(), this.noteRealPointer = UU => {
            UU instanceof MouseEvent && UU.isTrusted && !(0, eU.t)(UU) && (this.lastRealPointer ??= {
              x: 0,
              y: 0
            }, this.lastRealPointer.x = UU.clientX, this.lastRealPointer.y = UU.clientY)
          }, this.wakePressActs = UU => {
            var RU;
            return UU === (0, cU.f)("inventoryClose") ? !(null !== (RU = (0, FR.h)()) && void 0 !== RU && RU.isHolding()) : !(UU !== (0, cU.f)("inventory") || !Ag()) || ((0, CU.B)(UU) ? this.isNavButton(UU) : Fg.some((RU => (0, cU.f)(RU) === UU)))
          }
        }
        frame(UU) {
          var RU, gU, tU, pU, EU;
          const PU = (0, FR.h)();
          if (!(0, uU.i)()) return void(this.wasShowing && (this.endInteraction(PU), this.rehoverRealPointer()));
          this.wasShowing = !0, this.applyFocusRequest(), UU.wokeDevice && this.focusWakePointer(!(null === PU || void 0 === PU || !PU.isHolding())), this.applyCategoryPlace(), this.ensureFocus(), "cursor" !== (0, jU.h)().inventoryNavigation || this.pointer || this.engagePointer();
          const TU = performance.now();
          this.handleNavigation(UU, TU), this.handlePanels(UU), this.handlePaging(UU, TU), this.handleScroll(UU), this.handleButtons(UU, TU, PU), this.applyFocusRequest(), this.pointer && this.hoverAtPointer();
          const qU = this.ensureFocus(),
            KU = this.focusContext(PU);
          this.ring.show(qU);
          const GU = "slot" === KU.kind ? KU.idx : null,
            CU = null !== (RU = null === (gU = KU.actionElement) || void 0 === gU ? void 0 : gU.querySelector(".DoCraftItem")) && void 0 !== RU ? RU : KU.actionElement;
          this.pointer ? (this.hover.sync(PU, GU, CU, ((UU, RU) => {
            const gU = RU ? Vg() : 0;
            return {
              clientX: UU.x - gU,
              clientY: UU.y - gU
            }
          })(this.pointer, KU.holding), KU.holding), sR.set({
            x: this.pointer.x,
            y: this.pointer.y,
            visible: !0,
            pressed: UU.isHeld((0, cU.f)("inventoryPrimary"))
          })) : qU && this.focused && this.hover.sync(PU, GU, CU, ((UU, RU) => {
            if (!RU) return {
              clientX: UU.left + UU.width - 10,
              clientY: UU.top + UU.height / 2 - 10
            };
            const gU = Vg();
            return {
              clientX: UU.left + UU.width / 2 - gU,
              clientY: UU.top + UU.height / 2 - gU
            }
          })(qU, KU.holding), KU.holding), this.publishState({
            showing: !0,
            kind: KU.kind,
            holding: KU.holding,
            slotHasItem: KU.slotHasItem,
            pressHints: null !== (tU = null === (pU = KU.press) || void 0 === pU ? void 0 : pU.hints) && void 0 !== tU ? tU : null,
            hasCategories: this.hasCategories,
            hasList: !!this.focusTarget && og(this.focusTarget),
            openButtonCloses: Ag(),
            steppingSlots: null === this.pointer,
            quickMoveToHotbar: "slot" === KU.kind && !(null === (EU = KU.actionElement) || void 0 === EU || !EU.closest(".CreativeItemSlots")),
            dropStackHold: this.dropLatch.getHold(),
            hotbarPicking: null !== this.hotbarPick
          })
        }
        focusWakePointer(UU) {
          var RU;
          const gU = (0, uU.c)();
          if (!gU) return;
          this.targets.revalidate();
          const tU = this.getTargets().targets;
          this.setFocus(null !== (RU = cg(gU, tU)) && void 0 !== RU ? RU : UU ? Tg(gU, tU, (UU => {
            let {
              rect: RU
            } = UU;
            const tU = Math.max(RU.left - gU.x, 0, gU.x - (RU.left + RU.width)),
              pU = Math.max(RU.top - gU.y, 0, gU.y - (RU.top + RU.height));
            return Math.hypot(tU, pU) <= Math.min(RU.width, RU.height) / 2
          })) : null, !1), "cursor" === (0, jU.h)().inventoryNavigation && (this.pointer = {
            x: gU.x,
            y: gU.y,
            speedRamp: 0
          })
        }
        rehoverRealPointer() {
          const UU = this.lastRealPointer;
          if (!UU || "keyboardMouse" !== qU.b.get("activeInputDevice")) return;
          const RU = document.elementFromPoint(UU.x, UU.y);
          RU && bR(null, RU, UU)
        }
        endInteraction(UU) {
          this.wasShowing = !1, this.hotbarPick = null, this.releasePress(), this.dropLatch.reset(), this.scroller.reset();
          for (const RU of this.dpadTimers.values()) RU.reset();
          this.stickRepeat.reset(), this.pageUpTimer.reset(), this.pageDownTimer.reset(), this.hover.clear(UU), this.ring.hide(), this.releasePointer(), this.publishState(ag.d)
        }
        getTargets() {
          const UU = this.targets.get();
          return this.hasCategories = UU.hasCategories, UU
        }
        currentTarget() {
          var UU;
          return this.focused && null !== (UU = this.getTargets().byElement.get(this.focused)) && void 0 !== UU ? UU : null
        }
        readFocusRect() {
          const UU = this.focused;
          if (null === UU || void 0 === UU || !UU.isConnected || !UU.closest(ug)) return null;
          const RU = UU.getBoundingClientRect();
          return RU.width > 0 && RU.height > 0 ? {
            left: RU.left,
            top: RU.top,
            width: RU.width,
            height: RU.height
          } : null
        }
        ensureFocus() {
          const UU = this.readFocusRect();
          if (UU || this.pointer) return UU;
          const {
            targets: RU,
            byElement: gU
          } = this.getTargets();
          let tU = null,
            pU = !1;
          if (this.lastRect) tU = Tg(OR(this.lastRect), RU);
          else {
            var EU, PU;
            const UU = ((UU, RU) => {
                const gU = document.querySelector(".EntireInventoryWrapper [data-pad-inventory-start]");
                return gU ? Mg(UU.filter((UU => gU.contains(UU.element))), RU) : null
              })(RU, (0, FR.h)()),
              TU = RU.find((UU => null !== UU.idx && UU.idx === this.reopenSlotIdx)),
              qU = document.querySelector(Sg);
            pU = null !== UU || void 0 !== TU, tU = null !== (EU = null !== (PU = null !== UU && void 0 !== UU ? UU : TU) && void 0 !== PU ? PU : qU && gU.get(qU)) && void 0 !== EU ? EU : Gg(RU)
          }
          return this.setFocus(tU, pU), this.lastRect
        }
        setFocus(UU) {
          let RU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          UU && (this.focused = UU.element, this.focusTarget = UU, this.panelMemory.set(UU.panel, UU.element), RU && UU.scrollContainer && ((UU, RU) => {
            const gU = UU.getBoundingClientRect(),
              tU = rU(RU),
              pU = RU.scrollTop;
            return gU.top < tU.top ? RU.scrollTop -= tU.top - gU.top : gU.bottom > tU.bottom && (RU.scrollTop += gU.bottom - tU.bottom), RU.scrollTop !== pU
          })(UU.element, UU.scrollContainer) && this.targets.invalidate(), this.lastRect = this.readFocusRect(), this.followFocusJump())
        }
        followFocusJump() {
          if (this.pointer)
            if ("cursor" === (0, jU.h)().inventoryNavigation) {
              if (this.lastRect) {
                const UU = OR(this.lastRect);
                this.pointer = {
                  x: UU.x,
                  y: UU.y,
                  speedRamp: 0
                }
              }
            } else this.releasePointer()
        }
        engagePointer() {
          const UU = this.lastRect ? OR(this.lastRect) : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          };
          this.pointer = {
            x: UU.x,
            y: UU.y,
            speedRamp: 0
          }
        }
        releasePointer() {
          this.pointer = null, sR.hide()
        }
        hoverAtPointer() {
          var UU;
          const RU = cg(this.pointer, this.getTargets().targets);
          this.focusTarget = RU, (null === RU || void 0 === RU ? void 0 : RU.element) !== this.focused && (this.focused = null !== (UU = null === RU || void 0 === RU ? void 0 : RU.element) && void 0 !== UU ? UU : null, RU && (this.panelMemory.set(RU.panel, RU.element), this.lastRect = this.readFocusRect()))
        }
        moveCursor(UU, RU) {
          const gU = this.focusTarget,
            tU = gU && (0, jU.h)().cursorMagnetism ? OR(qg(gU)) : null;
          this.pointer = IU(this.pointer, {
            stick: UU.leftStick,
            moveDeadzone: (0, jU.h)().moveDeadzone,
            dpad: RU,
            dtMs: UU.dtMs,
            cursorSpeedPercent: (0, jU.h)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: {
              overInteractive: !1,
              magnetTarget: tU
            }
          })
        }
        move(UU) {
          this.targets.revalidate();
          const RU = this.currentTarget();
          RU && this.setFocus(Pg(RU, this.getTargets().targets, UU))
        }
        step(UU) {
          const RU = this.pointer;
          if (RU && (this.releasePointer(), !this.focused)) return this.targets.revalidate(), void this.setFocus(((UU, RU, gU) => {
            var tU;
            const pU = {
              key: "",
              rect: {
                left: UU.x,
                top: UU.y,
                width: 0,
                height: 0
              },
              panel: "",
              scrollGroup: null,
              visible: !0,
              clip: null
            };
            return null !== (tU = Pg(pU, RU, gU)) && void 0 !== tU ? tU : Tg(UU, RU)
          })(RU, this.getTargets().targets, UU));
          this.move(UU)
        }
        isNavButton(UU) {
          return !kg.some((RU => (0, cU.f)(RU) === UU)) && !(UU === (0, cU.f)("inventory") && Ag())
        }
        handleNavigation(UU, RU) {
          const gU = (0, jU.h)().inventoryNavigation,
            tU = {
              x: 0,
              y: 0
            };
          let pU = null;
          for (const qU of CU.w) {
            const EU = this.isNavButton(qU) && UU.isHeld(qU);
            EU && (tU.x += sg[qU].x, tU.y += sg[qU].y), this.dpadTimers.get(qU).update(EU, RU) && "cursor" !== gU && (pU ??= qU)
          }
          const EU = this.stickGate.update(UU.leftStick, (0, jU.h)().moveDeadzone);
          if (pU && (this.step(pU), this.stickGate.lock()), "slot" !== gU) {
            const RU = ((UU, RU, gU, tU) => "hybrid" !== UU ? "cursor" === UU : !tU && (RU || gU))(gU, null !== this.pointer, EU, null !== pU);
            return RU && !this.pointer && this.engagePointer(), void(this.pointer && this.moveCursor(UU, "cursor" === gU ? tU : {
              x: 0,
              y: 0
            }))
          }
          const PU = (0, CU.g)(UU.leftStick, (0, jU.h)().moveDeadzone),
            TU = this.stickRepeat.update(EU ? (0, CU.V)(PU) : null, RU);
          TU && this.move(TU)
        }
        applyCategoryPlace() {
          const UU = this.placeAfterCategory;
          if (!UU) return;
          this.placeAfterCategory = null, this.targets.invalidate();
          const RU = Tg(OR(UU.rect), this.getTargets().targets, (RU => RU.scrollGroup === UU.scrollGroup));
          this.setFocus(RU, !1)
        }
        applyFocusRequest() {
          const UU = (0, FR.s)();
          UU && (this.targets.invalidate(), this.setFocus((0, FR.d)(this.getTargets().targets, UU)))
        }
        handlePanels(UU) {
          var RU, gU, tU;
          const pU = UU.wasPressed((0, cU.f)("inventoryPanelPrevious")),
            EU = UU.wasPressed((0, cU.f)("inventoryPanelNext"));
          if (!pU && !EU) return;
          const {
            targets: PU
          } = this.getTargets(), TU = (qU = ((UU, RU) => {
            const gU = [];
            for (const pU of UU) pU.visible && !gU.includes(pU.panel) && gU.push(pU.panel);
            const tU = UU => {
              const tU = RU.indexOf(UU);
              return -1 === tU ? RU.length + gU.indexOf(UU) : tU
            };
            return gU.sort(((UU, RU) => tU(UU) - tU(RU)))
          })(PU, eg), KU = null !== (RU = null === (gU = this.focusTarget) || void 0 === gU ? void 0 : gU.panel) && void 0 !== RU ? RU : null, GU = EU ? 1 : -1, 0 === qU.length ? null : qU[Ug(null === KU ? -1 : qU.indexOf(KU), qU.length, GU)]);
          var qU, KU, GU;
          if (null === TU) return;
          const jU = this.panelMemory.get(TU),
            uU = PU.filter((UU => UU.panel === TU)),
            CU = null !== (tU = uU.find((UU => UU.element === jU && UU.visible))) && void 0 !== tU ? tU : Mg(uU, (0, FR.h)());
          this.setFocus(CU)
        }
        handlePaging(UU, RU) {
          const gU = (0, cU.f)("menuPageUp"),
            tU = (0, cU.f)("menuPageDown"),
            pU = this.pageUpTimer.update(UU.isHeld(gU), RU),
            EU = this.pageDownTimer.update(UU.isHeld(tU), RU);
          if (!pU && !EU) return;
          const PU = EU ? 1 : -1;
          if (!UU.wasPressed(EU ? tU : gU) && this.hasCategories) return;
          if ((UU => {
              const RU = Array.from(document.querySelectorAll(".EntireInventoryWrapper .CreativeCategoryTab"));
              if (0 === RU.length) return !1;
              const gU = RU.findIndex((UU => UU.classList.contains("Selected"))),
                tU = RU[Ug(gU, RU.length, UU)];
              return nR(tU, xR(tU)), !0
            })(PU)) {
            var TU, qU;
            this.targets.invalidate();
            const UU = null !== (TU = null === (qU = this.focusTarget) || void 0 === qU ? void 0 : qU.scrollGroup) && void 0 !== TU ? TU : null,
              RU = this.readFocusRect();
            return void(this.placeAfterCategory = null !== UU && RU && !this.pointer ? {
              rect: RU,
              scrollGroup: UU
            } : null)
          }
          const {
            targets: KU
          } = this.getTargets(), GU = this.currentTarget(), jU = GU && og(GU) ? GU : KU.find((UU => og(UU) && UU.visible));
          if (!jU) return;
          const uU = ((UU, RU, gU, tU) => {
            if (null === UU.scrollGroup) return null;
            const pU = OR(UU.rect),
              EU = pU.x,
              PU = pU.y + ("Down" === gU ? tU : -tU);
            let TU = null,
              qU = 1 / 0;
            for (const KU of RU) {
              if (KU.scrollGroup !== UU.scrollGroup || KU.key === UU.key) continue;
              const RU = OR(KU.rect);
              if ("Down" === gU ? RU.y <= pU.y : RU.y >= pU.y) continue;
              const tU = Math.hypot(RU.x - EU, RU.y - PU);
              tU < qU && (TU = KU, qU = tU)
            }
            return TU
          })(jU, KU, PU > 0 ? "Down" : "Up", jU.scrollContainer.clientHeight);
          this.setFocus(null !== uU && void 0 !== uU ? uU : jU)
        }
        handleScroll(UU) {
          var RU, gU, tU, pU, EU, PU;
          if (!this.scroller.isScrolling(UU.rightStick)) return void this.scroller.reset();
          const {
            targets: TU
          } = this.getTargets(), qU = this.pointer, KU = !qU && this.focusTarget && og(this.focusTarget) ? this.focusTarget.scrollContainer : null, cU = qU && (null === (RU = TU.find((UU => UU.clip && Kg(UU.clip, qU)))) || void 0 === RU ? void 0 : RU.scrollContainer), GU = null !== (gU = null !== (tU = null !== (pU = this.scroller.current()) && void 0 !== pU ? pU : cU) && void 0 !== tU ? tU : KU) && void 0 !== gU ? gU : null === (EU = TU.find(og)) || void 0 === EU ? void 0 : EU.scrollContainer;
          if (!GU || !this.scroller.step(GU, UU.rightStick, UU.dtMs)) return;
          this.targets.scrolled(GU);
          const jU = qU || (null === (PU = this.focusTarget) || void 0 === PU ? void 0 : PU.scrollContainer) !== GU ? null : this.readFocusRect();
          if (!jU) return;
          const uU = rU(GU),
            CU = OR(jU);
          if (CU.y < uU.top || CU.y > uU.bottom) {
            const UU = this.focusTarget.scrollGroup,
              RU = Tg(CU, this.getTargets().targets, (RU => RU.scrollGroup === UU));
            this.setFocus(RU, !1)
          }
        }
        focusContext(UU) {
          const {
            kind: RU,
            idx: gU
          } = this.focused ? Ig(this.focused) : {
            kind: null,
            idx: null
          }, tU = this.focused ? xg(this.focused) : null, pU = tU ? (0, dg.c)(tU) : null;
          return {
            kind: RU,
            idx: gU,
            actionElement: tU,
            press: pU,
            hasPress: null !== pU,
            hasBack: !(null === pU || void 0 === pU || !pU.back),
            holding: UU.isHolding(),
            slotHasItem: null !== gU && UU.hasItemAt(gU)
          }
        }
        handleButtons(UU, RU, gU) {
          var tU, pU;
          if (!this.activePress || UU.isHeld(this.activePress.button) && (tU = this.activePress.target, pU = this.focused, null !== tU.recipe ? mg(pU).recipe === tU.recipe : pU === tU.element) || this.releasePress(), this.scrollStickClick.update(UU.rightStick, RU), !this.handleHotbarPick(UU, gU)) {
            for (const [tU, pU] of yg) {
              const EU = (0, cU.f)(pU);
              if (!UU.wasPressed(EU) || "openButton" === tU && !Ag()) continue;
              if ("RS" === EU && !this.scrollStickClick.allowsClick(RU)) continue;
              const PU = this.focusContext(gU),
                TU = yR(tU, PU);
              TU && this.runIntent(TU, PU, EU, gU)
            }
            this.handleDrop(UU, RU, gU)
          }
        }
        handleHotbarPick(UU, RU) {
          const gU = this.hotbarPick;
          if (!gU) return !1;
          const tU = UU.wasPressed((0, cU.f)("inventoryPrimary")) || UU.wasPressed((0, cU.f)("inventoryHotbarSwap"));
          if (!tU && !UU.wasPressed((0, cU.f)("inventoryClose")) && !RU.isHolding()) return !(UU.wasPressed((0, cU.f)("inventory")) && Ag());
          const pU = this.focusTarget;
          tU && "hotbar" === (null === pU || void 0 === pU ? void 0 : pU.panel) && null !== pU.idx && pU.idx !== gU.idx && (RU.swapWithHotbar(pU.idx, gU.idx), this.afterAction()), this.hotbarPick = null;
          const EU = gU.element.isConnected ? this.getTargets().byElement.get(gU.element) : void 0;
          return EU && this.setFocus(EU), !0
        }
        startHotbarPick(UU) {
          var RU;
          const {
            targets: gU,
            byElement: tU
          } = this.getTargets(), pU = document.querySelector(Sg), EU = null !== (RU = pU && tU.get(pU)) && void 0 !== RU ? RU : gU.find((UU => "hotbar" === UU.panel));
          EU && this.focused && (this.hotbarPick = {
            idx: UU,
            element: this.focused
          }, this.setFocus(EU))
        }
        focusKey() {
          return this.focused ? MR(this.focused) : null
        }
        handleDrop(UU, RU, gU) {
          const tU = (0, cU.f)("inventoryDrop");
          if (UU.wasPressed(tU)) {
            const UU = (pU = this.focusContext(gU)).holding ? {
              kind: "WT"
            } : "slot" === pU.kind && pU.slotHasItem && null !== pU.idx ? {
              kind: "slot",
              idx: pU.idx
            } : null;
            return void(UU && (this.dropFrom(UU, !1, gU), this.dropLatch.press(UU, this.focusKey(), RU, QU.d[(0, jU.h)().tapHoldTime].dropStackMs), this.afterAction()))
          }
          var pU;
          const EU = this.dropLatch.update(UU.isHeld(tU), this.focusKey(), RU);
          EU && ((UU, RU, gU) => "WT" === UU.kind ? RU : !RU && gU(UU.idx))(EU, gU.isHolding(), gU.hasItemAt) && (this.dropFrom(EU, !0, gU), this.afterAction())
        }
        dropFrom(UU, RU, gU) {
          "WT" === UU.kind ? gU.dropHeld(RU, this.slotPoint()) : gU.dropSlot(UU.idx, RU)
        }
        slotPoint() {
          return this.pointer ? {
            clientX: this.pointer.x,
            clientY: this.pointer.y
          } : this.lastRect ? (UU => {
            const RU = OR(UU);
            return {
              clientX: RU.x,
              clientY: RU.y
            }
          })(this.lastRect) : {
            clientX: 0,
            clientY: 0
          }
        }
        runIntent(UU, RU, gU, tU) {
          const pU = RU.idx,
            EU = RU.actionElement;
          switch (EU && zg.has(UU) && (0, eU.u)(EU), UU) {
            case "slotPrimary":
              tU.primary(pU, this.slotPoint());
              break;
            case "slotSecondary":
              tU.secondary(pU, this.slotPoint());
              break;
            case "slotQuickMove":
              tU.quickMove(pU, this.slotPoint());
              break;
            case "hotbarPick":
              this.startHotbarPick(pU);
              break;
            case "pressPrimary":
            case "pressSecondary":
              this.startPress(RU.press, "pressPrimary" === UU ? "primary" : "secondary", gU);
              break;
            case "click":
              nR(EU, xR(EU));
              break;
            case "openKeyboard":
              fR(EU) && oR(EU);
              break;
            case "pressBack":
              RU.press.back();
              break;
            case "cancel":
              tU.cancel();
              break;
            case "close":
              return this.releasePress(), void tU.close()
          }
          this.afterAction()
        }
        startPress(UU, RU, gU) {
          this.releasePress(), UU.press(RU) && (this.activePress = {
            handlers: UU,
            button: gU,
            target: mg(this.focused)
          })
        }
        releasePress() {
          var UU, RU, gU;
          null === (UU = this.activePress) || void 0 === UU || null === (RU = (gU = UU.handlers).release) || void 0 === RU || RU.call(gU), this.activePress = null
        }
        afterAction() {
          this.targets.invalidate(), this.hover.invalidate()
        }
        publishState(UU) {
          ((UU, RU) => {
            var gU, tU, pU, EU, PU, TU;
            return UU.showing === RU.showing && UU.kind === RU.kind && UU.holding === RU.holding && UU.slotHasItem === RU.slotHasItem && (null === (gU = UU.pressHints) || void 0 === gU ? void 0 : gU.primary) === (null === (tU = RU.pressHints) || void 0 === tU ? void 0 : tU.primary) && (null === (pU = UU.pressHints) || void 0 === pU ? void 0 : pU.secondary) === (null === (EU = RU.pressHints) || void 0 === EU ? void 0 : EU.secondary) && (null === (PU = UU.pressHints) || void 0 === PU ? void 0 : PU.back) === (null === (TU = RU.pressHints) || void 0 === TU ? void 0 : TU.back) && UU.hasCategories === RU.hasCategories && UU.hasList === RU.hasList && UU.openButtonCloses === RU.openButtonCloses && UU.steppingSlots === RU.steppingSlots && UU.hotbarPicking === RU.hotbarPicking && UU.quickMoveToHotbar === RU.quickMoveToHotbar && UU.dropStackHold === RU.dropStackHold
          })(UU, this.state) || (this.state = UU, KU.p.yh(ag.f, UU))
        }
      },
      Ng = ["pointermove", "pointerover", "pointerout", "mouseover", "mouseout"];
    var lg = gU(8326),
      Og = gU(299),
      Ut = gU(1567),
      Rt = gU(7826);
    const gt = "[data-pad-secondary]",
      tt = UU => UU instanceof HTMLElement && KR(UU) && !cR(UU),
      pt = UU => {
        const RU = UU.querySelector(gt);
        if (RU && tt(RU)) return RU;
        for (const pU of null !== (gU = null === (tU = UU.parentElement) || void 0 === tU ? void 0 : tU.children) && void 0 !== gU ? gU : []) {
          var gU, tU;
          if (pU !== UU && pU.matches(gt) && tt(pU)) return pU
        }
        return null
      },
      Et = (UU, RU, gU, tU) => Math.max(0, Math.max(UU, gU) - Math.min(RU, tU)),
      Pt = (UU, RU, gU, tU) => Math.max(0, Math.min(RU, tU) - Math.max(UU, gU)),
      Tt = (UU, RU, gU) => {
        const tU = (UU.left + UU.right) / 2,
          pU = (UU.top + UU.bottom) / 2,
          EU = (RU.left + RU.right) / 2,
          PU = (RU.top + RU.bottom) / 2;
        if ("Left" === gU || "Right" === gU) {
          const TU = "Right" === gU ? 1 : -1;
          return {
            forwardGap: "Right" === gU ? RU.left - UU.right : UU.left - RU.right,
            centreForward: (EU - tU) * TU,
            sidewaysGap: Et(UU.top, UU.bottom, RU.top, RU.bottom),
            sidewaysOverlap: Pt(UU.top, UU.bottom, RU.top, RU.bottom),
            centreSideways: Math.abs(PU - pU),
            startSideways: Math.abs(RU.top - UU.top),
            fromSidewaysSize: UU.bottom - UU.top,
            toSidewaysSize: RU.bottom - RU.top,
            toLength: RU.right - RU.left
          }
        }
        const TU = "Down" === gU ? 1 : -1;
        return {
          forwardGap: "Down" === gU ? RU.top - UU.bottom : UU.top - RU.bottom,
          centreForward: (PU - pU) * TU,
          sidewaysGap: Et(UU.left, UU.right, RU.left, RU.right),
          sidewaysOverlap: Pt(UU.left, UU.right, RU.left, RU.right),
          centreSideways: Math.abs(EU - tU),
          startSideways: Math.abs(RU.left - UU.left),
          fromSidewaysSize: UU.right - UU.left,
          toSidewaysSize: RU.right - RU.left,
          toLength: RU.bottom - RU.top
        }
      },
      qt = UU => UU.centreForward > .5 && UU.forwardGap >= -UU.toLength / 2,
      Kt = UU => {
        const RU = UU.sidewaysOverlap > 0 ? 0 : 2 * UU.fromSidewaysSize,
          gU = UU.fromSidewaysSize > 1.5 * UU.toSidewaysSize ? UU.startSideways : UU.centreSideways;
        return Math.max(0, UU.forwardGap) + 3 * UU.sidewaysGap + RU + .1 * gU
      },
      ct = (UU, RU) => Pt(UU.top, UU.bottom, RU.top, RU.bottom) > 0 || RU.bottom - RU.top > RU.right - RU.left,
      Gt = (UU, RU, gU, tU, pU, EU) => {
        const PU = pU ? ut(UU, RU, gU, pU) : new Set,
          TU = ht(UU, RU, gU, PU);
        return TU < 0 && PU.size > 0 && EU ? jt(UU, RU, gU, EU) : tU && TU >= 0 ? Ct(UU, RU, gU, tU, TU, PU) : TU
      },
      jt = (UU, RU, gU, tU) => {
        const pU = new Set,
          EU = ht(UU, RU, "Up", pU) >= 0,
          PU = ht(UU, RU, "Down", pU) >= 0,
          TU = new Set;
        return RU.forEach(((RU, gU) => {
          const pU = RU.top + RU.bottom < UU.top + UU.bottom;
          tU[gU] && !(pU ? EU : PU) || TU.add(gU)
        })), ht(UU, RU, gU, TU)
      },
      ut = (UU, RU, gU, tU) => {
        const pU = new Set;
        return "Left" !== gU && "Right" !== gU || RU.forEach(((RU, gU) => {
          tU[gU] && Pt(UU.top, UU.bottom, RU.top, RU.bottom) <= 0 && pU.add(gU)
        })), pU
      },
      Ct = (UU, RU, gU, tU, pU, EU) => {
        const PU = Tt(UU, RU[pU], gU).forwardGap;
        let TU = pU,
          qU = tU[pU],
          KU = 1 / 0;
        return RU.forEach(((RU, cU) => {
          const GU = tU[cU];
          if (EU.has(cU) || GU < qU || GU === qU && TU === pU) return;
          const jU = Tt(UU, RU, gU);
          if (!qt(jU) || jU.forwardGap < 0 || jU.forwardGap >= PU) return;
          const uU = Kt(jU);
          (GU > qU || uU < KU) && (TU = cU, qU = GU, KU = uU)
        })), TU
      },
      ht = (UU, RU, gU, tU) => {
        let pU = -1,
          EU = 1 / 0;
        if (RU.forEach(((RU, PU) => {
            const TU = ((UU, RU, gU) => {
              const tU = Tt(UU, RU, gU);
              if (!qt(tU)) return null;
              const pU = Math.max(0, tU.forwardGap);
              return tU.sidewaysOverlap <= 0 && tU.sidewaysGap > 2 * (pU + 1) ? null : Kt(tU)
            })(UU, RU, gU);
            null !== TU && TU < EU && !tU.has(PU) && (EU = TU, pU = PU)
          })), pU < 0) return -1;
        const PU = RU[pU],
          TU = Tt(UU, PU, gU).forwardGap;
        let qU = TU,
          KU = pU;
        return RU.forEach(((RU, EU) => {
          if (EU === pU || tU.has(EU) || !((UU, RU, gU) => {
              const tU = "Left" === gU || "Right" === gU,
                pU = tU ? Pt(UU.top, UU.bottom, RU.top, RU.bottom) : Pt(UU.left, UU.right, RU.left, RU.right),
                EU = tU ? Math.min(UU.bottom - UU.top, RU.bottom - RU.top) : Math.min(UU.right - UU.left, RU.right - RU.left);
              return pU > 0 && pU >= EU / 2
            })(RU, PU, gU)) return;
          const cU = Tt(UU, RU, gU);
          qt(cU) && cU.forwardGap + cU.toLength <= TU + 1 && cU.forwardGap < qU && (qU = cU.forwardGap, KU = EU)
        })), KU
      },
      Qt = (UU, RU) => {
        let gU = -1,
          tU = 1 / 0;
        return RU.forEach(((RU, pU) => {
          const EU = Math.max(RU.left - UU.x, 0, UU.x - RU.right),
            PU = Math.max(RU.top - UU.y, 0, UU.y - RU.bottom),
            TU = Math.hypot(EU, PU);
          TU < tU && (tU = TU, gU = pU)
        })), gU
      },
      et = (UU, RU) => {
        const gU = Math.min(UU.bottom - UU.top, RU.bottom - RU.top) / 2;
        return Math.abs(UU.top - RU.top) > gU ? UU.top - RU.top : UU.left - RU.left
      },
      Wt = UU => {
        let RU = -1;
        for (let gU = 0; gU < UU.length; gU++)(RU < 0 || et(UU[gU], UU[RU]) < 0) && (RU = gU);
        return RU
      };
    var ft = gU(1609),
      xt = gU(8331),
      mt = gU(8336);
    const It = UU => {
        if ("death" !== UU || "inGame" !== qU.b.get("gameState") || "off" === (0, jU.h)().quickChat || null === (0, ft.c)()) return !1;
        const RU = (0, cU.f)("chat");
        return RU !== (0, cU.f)("menuConfirm") && RU !== (0, cU.f)("menuBack")
      },
      Jt = new xt.b;
    var wt = gU(3984),
      nt = gU(8340);
    const bt = UU => {
        let RU = null;
        for (const gU of UU.querySelectorAll("[data-pad-tabs]")) KR(gU) && (!RU || Number(gU.dataset.padTabs) < Number(RU.dataset.padTabs)) && (RU = gU);
        return RU
      },
      ot = (UU, RU, gU, tU) => {
        UU.focusWhenFound((() => {
          const pU = UU.pickInitial(RU);
          if (pU && !gU.has(pU) && (null === tU || void 0 === tU || !tU.contains(pU))) return pU;
          const EU = ((UU, RU) => {
              const gU = RU => UU.getEnabledCandidates(RU).filter((UU => !UU.closest("[data-pad-tabs]")));
              for (const tU of WR(RU)) {
                const UU = gU(tU);
                if (UU.length > 0) return UU
              }
              return gU(RU)
            })(UU, RU).filter((UU => !gU.has(UU))),
            PU = Wt(EU.map((UU => UU.getBoundingClientRect())));
          return PU >= 0 ? EU[PU] : null
        }), 3e3)
      },
      Zt = (UU, RU, gU, tU) => {
        var pU;
        const EU = ((UU, RU) => {
          if (0 === UU.length) return null;
          const gU = UU.findIndex((UU => "true" === UU.dataset.padSelected));
          return gU < 0 ? RU > 0 ? UU[0] : UU[UU.length - 1] : UU[(gU + RU + UU.length) % UU.length]
        })([...gU.querySelectorAll("[data-pad-tab]")].filter((UU => KR(UU) && !cR(UU))), tU);
        if (!EU) return;
        const PU = null !== (pU = null === UU || void 0 === UU ? void 0 : UU.getFocused()) && void 0 !== pU ? pU : null,
          TU = !(null === PU || void 0 === PU || !PU.isConnected) && gU.contains(PU),
          qU = UU && !TU ? new Set(UU.getEnabledCandidates(RU)) : null;
        ZR(EU), UU && (qU ? ot(UU, RU, qU, gU) : UU.setFocus(EU, {
          byUser: !0
        }))
      },
      Yt = UU => {
        var RU;
        const gU = rU(null !== (RU = oU(UU, "x")) && void 0 !== RU ? RU : UU),
          tU = uR(UU).filter((UU => !cR(UU))),
          pU = tU.filter((UU => XU(UU.getBoundingClientRect(), gU)));
        return (pU.length > 0 ? pU : tU).sort(((UU, RU) => et(UU.getBoundingClientRect(), RU.getBoundingClientRect())))
      },
      Bt = (UU, RU, gU) => {
        const tU = [...RU.querySelectorAll("[data-pad-row]")].filter(KR),
          pU = UU.getFocused(),
          EU = pU ? tU.findIndex((UU => UU.contains(pU))) : -1;
        let PU = 0,
          TU = gU > 0 ? 0 : tU.length - 1;
        if (EU >= 0 && pU) PU = Math.max(0, Yt(tU[EU]).indexOf(pU)), TU = EU + gU;
        else if (pU) {
          const UU = pU.getBoundingClientRect(),
            RU = tU.map((RU => {
              const tU = RU.getBoundingClientRect();
              return gU > 0 ? tU.top >= UU.top : tU.bottom <= UU.bottom
            }));
          TU = gU > 0 ? RU.indexOf(!0) : RU.lastIndexOf(!0)
        }
        for (let qU = TU; qU >= 0 && qU < tU.length; qU += gU) {
          const RU = Yt(tU[qU]);
          if (RU.length > 0) return void UU.setFocus(RU[Math.min(PU, RU.length - 1)], {
            byUser: !0
          })
        }
      },
      Vt = (UU, RU, gU) => {
        var tU, pU;
        const EU = null !== (tU = null === UU || void 0 === UU ? void 0 : UU.getFocused()) && void 0 !== tU ? tU : null,
          PU = null !== EU && void 0 !== EU && EU.closest("[data-pad-row]") ? "x" : "y",
          TU = null !== (pU = EU ? oU(EU, PU, RU) : null) && void 0 !== pU ? pU : aU(RU, PU);
        if (!TU) return;
        const qU = EU ? xR(EU) : null;
        if (VU(TU, PU, gU * ("y" === PU ? TU.clientHeight : TU.clientWidth) * .85), !UU || !qU) return;
        const KU = rU(TU),
          cU = UU.getEnabledCandidates(RU).filter((UU => TU.contains(UU) && XU(UU.getBoundingClientRect(), KU))),
          GU = Qt(qU, cU.map((UU => UU.getBoundingClientRect())));
        GU >= 0 && UU.setFocus(cU[GU], {
          scroll: !1,
          byUser: !0
        })
      };
    let rt = null;
    const Xt = (UU, RU) => {
        var gU, tU;
        const pU = RU.querySelector("[data-pad-friends-column]"),
          EU = UU.getFocused();
        if (!pU || !EU || !pU.contains(EU)) return !1;
        const PU = UU.getEnabledCandidates(RU).filter((UU => !pU.contains(UU))),
          TU = Qt(xR(EU), PU.map((UU => UU.getBoundingClientRect()))),
          qU = null === (gU = rt) || void 0 === gU ? void 0 : gU.deref();
        return UU.setFocus(null !== qU && void 0 !== qU && qU.isConnected ? qU : null !== (tU = PU[TU]) && void 0 !== tU ? tU : null, {
          byUser: !0
        }), !0
      },
      vt = UU => {
        const RU = (0, cU.f)(UU);
        return (0, CU.B)(RU) || Rt.x.some((UU => (0, cU.f)(UU) === RU)) ? null : RU
      },
      dt = (UU, RU) => {
        const gU = vt(RU);
        return null !== gU && UU.wasPressed(gU)
      },
      Ht = function(UU, RU, gU) {
        let tU = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const pU = (UU => {
            var RU, gU;
            return null !== (RU = null === (gU = bt(UU)) || void 0 === gU ? void 0 : gU.querySelector("[data-pad-tab][data-pad-selected='true']")) && void 0 !== RU ? RU : null
          })(RU),
          EU = UU && pU ? new Set(UU.getEnabledCandidates(RU)) : null;
        (0, lg.c)(), gU === Og.n.SETTINGS && (0, Ut.k)(qU.b.get("openEverythingMenuName")) ? qU.b.set({
          openEverythingMenuName: gU
        }) : (0, Ut.w)(new Event("padMenuShortcut"), gU, tU), UU && EU && pU && ot(UU, RU, EU, pU.closest("[data-pad-tabs]"))
      },
      St = UU => null !== UU.closest(".Dropdown-root") || null !== UU.querySelector(".Dropdown-root.is-open"),
      st = UU => null !== (0, nt.e)() && "popup" !== UU.layer.kind && !bt(UU.root) && !St(UU.root),
      yt = (0, hU.e)(CU.Q),
      kt = (0, hU.e)(CU.Q),
      Ft = (UU, RU, gU) => {
        if (((UU, RU) => {
            const gU = (0, cU.f)("chat");
            return It(RU) && UU.isHeld(gU) ? "hold" === Jt.update(UU.wasPressed(gU), UU.isHeld(gU), performance.now(), QU.d[(0, jU.h)().tapHoldTime].wheelMs) && (GU.e.consumeButton(gU), KU.p.yh(mt.o), !0) : (Jt.release(), !1)
          })(RU, gU.layer.kind)) return !0;
        const tU = gU.root;
        for (const [PU, TU] of [
            ["menuTabPrevious", -1],
            ["menuTabNext", 1]
          ])
          if (RU.wasPressed((0, cU.f)(PU))) {
            const RU = St(tU) ? null : bt(tU);
            if (RU) Zt(UU, tU, RU, TU);
            else if (st(gU)) {
              var pU;
              const RU = UU ? new Set(UU.getEnabledCandidates(tU)) : null;
              null !== (pU = (0, nt.e)()) && void 0 !== pU && pU(TU) && UU && RU && ot(UU, tU, RU, null)
            } else UU && Bt(UU, tU, TU);
            return !0
          } for (const [PU, TU, qU] of [
            ["menuPageUp", -1, yt],
            ["menuPageDown", 1, kt]
          ]) {
          const gU = (0, cU.f)(PU);
          if (RU.wasPressed(gU) && qU.reset(), qU.update(RU.isHeld(gU), performance.now())) return Vt(UU, tU, TU), !0
        }
        const EU = "popup" === gU.layer.kind;
        return dt(RU, "pause") ? (EU || (0, Ut.s)() && "menu" !== gU.layer.kind || Ht(UU, tU, (0, Ut.s)() ? Og.n.SETTINGS : (0, wt.d)()), !0) : !!dt(RU, "leaderboard") && ("home" === gU.layer.kind ? (UU => {
          const RU = [...UU.querySelectorAll("[data-pad-notifications]")].find(KR);
          RU && ZR(RU)
        })(tU) : EU || Ht(UU, tU, Og.n.LOBBY_LEADERBOARD, "inGame" === qU.b.get("gameState")), !0)
      },
      it = (UU, RU, gU) => {
        if (Ft(UU, RU, gU)) return !0;
        const tU = "home" === gU.layer.kind;
        if (RU.wasPressed((0, cU.f)("menuSecondary"))) {
          const RU = UU.getFocused(),
            pU = RU ? pt(RU) : null;
          if (pU) return ZR(pU), !0;
          if (tU) {
            const RU = gU.root.querySelector("[data-pad-search] input");
            return RU && eR(RU, gU.root) ? (UU.setFocus(RU, {
              byUser: !0
            }), ZR(RU)) : qU.b.set({
              searchOpen: !0
            }), !0
          }
        }
        return !(!tU || !dt(RU, "inventory")) && (((UU, RU) => {
          var gU, tU;
          const pU = RU.querySelector("[data-pad-friends-column]");
          if (!pU || !KR(pU)) return void(0, Ut.w)(new Event("padMenuShortcut"), Og.n.SOCIAL);
          if (Xt(UU, RU)) return;
          const EU = null !== (gU = null === (tU = pU.querySelector("[data-pad-friends-start]")) || void 0 === tU ? void 0 : tU.getBoundingClientRect().top) && void 0 !== gU ? gU : -1 / 0,
            PU = UU.getEnabledCandidates(pU),
            TU = PU.filter((UU => UU.getBoundingClientRect().top >= EU)),
            qU = TU.length > 0 ? TU : PU,
            KU = Wt(qU.map((UU => UU.getBoundingClientRect())));
          UU.setFocus(KU >= 0 ? qU[KU] : null, {
            byUser: !0
          })
        })(UU, gU.root), !0)
      },
      At = UU => {
        var RU, gU, tU;
        const pU = HR(UU);
        if (null !== pU) return pU;
        const EU = (null !== (RU = null !== (gU = null !== (tU = UU.getAttribute("aria-label")) && void 0 !== tU ? tU : UU.getAttribute("title")) && void 0 !== gU ? gU : UU.textContent) && void 0 !== RU ? RU : "").replace(/\s+/g, " ").trim();
        return EU ? `${UU.tagName}:${EU.slice(0,100)}` : null
      };
    class zt {
      constructor() {
        this.remembered = new Map, this.history = []
      }
      enter(UU) {
        const RU = this.history.indexOf(UU);
        if (RU >= 0) {
          for (const UU of this.history.splice(RU + 1)) this.remembered.delete(UU);
          return !0
        }
        return this.remembered.delete(UU), this.history.push(UU), this.history.length > 32 && this.forget(this.history[0]), !1
      }
      forget(UU) {
        this.remembered.delete(UU);
        const RU = this.history.indexOf(UU);
        RU >= 0 && this.history.splice(RU, 1)
      }
      remember(UU, RU, gU, tU) {
        const pU = At(RU),
          EU = HR(RU),
          PU = null !== EU && ((UU, RU) => {
            let gU = 0;
            for (const tU of UU.querySelectorAll("[data-pad-key], [href]"))
              if ((tU.getAttribute("data-pad-key") === RU || tU.getAttribute("href") === RU) && (gU++, gU > 1)) return !0;
            return !1
          })(gU, EU) ? Math.max(0, this.twins(tU(), EU).indexOf(RU)) : 0;
        this.remembered.set(UU, {
          element: new WeakRef(RU),
          identity: pU,
          ordinal: PU
        })
      }
      has(UU) {
        return this.remembered.has(UU)
      }
      recall(UU, RU) {
        var gU, tU;
        const pU = this.remembered.get(UU);
        if (!pU) return null;
        const EU = pU.element.deref();
        if (EU && RU.includes(EU)) return EU;
        if (null === pU.identity) return null;
        const PU = this.twins(RU, pU.identity);
        return null !== (gU = null !== (tU = PU[pU.ordinal]) && void 0 !== tU ? tU : PU[0]) && void 0 !== gU ? gU : null
      }
      twins(UU, RU) {
        return UU.filter((UU => At(UU) === RU))
      }
    }
    var Mt = gU(1283);
    const Dt = UU => {
        const RU = [];
        let gU = UU;
        for (; gU && gU !== document.body;) {
          const UU = getComputedStyle(gU).zIndex;
          "auto" !== UU && RU.push(Number(UU) || 0), gU = gU.parentElement
        }
        return RU.reverse()
      },
      Lt = (UU, RU) => {
        const gU = ((UU, RU) => {
          const gU = Math.max(UU.length, RU.length);
          for (let EU = 0; EU < gU; EU++) {
            var tU, pU;
            const gU = (null !== (tU = UU[EU]) && void 0 !== tU ? tU : 0) - (null !== (pU = RU[EU]) && void 0 !== pU ? pU : 0);
            if (0 !== gU) return gU
          }
          return 0
        })(Dt(UU), Dt(RU));
        if (0 !== gU) return gU > 0;
        if (UU.contains(RU)) return !1;
        if (RU.contains(UU)) return !0;
        const tU = UU.compareDocumentPosition(RU);
        return !!(tU & Node.DOCUMENT_POSITION_PRECEDING) || !(tU & Node.DOCUMENT_POSITION_FOLLOWING) && null
      },
      Nt = (UU, RU) => {
        var gU;
        return null !== (gU = Lt(UU.root, RU.root)) && void 0 !== gU ? gU : UU.order > RU.order
      },
      lt = (UU, RU) => RU.some((RU => !RU.contains(UU) && !UU.contains(RU) && !0 === Lt(RU, UU)));
    let Ot = null,
      Up = null,
      Rp = -1;
    const gp = () => {
        var UU;
        const RU = null === (UU = document.timeline) || void 0 === UU ? void 0 : UU.currentTime,
          gU = "number" === typeof RU ? RU : null;
        if (null !== gU && gU === Up && Rp === (0, Mt.c)()) return Ot;
        let tU = null;
        const pU = [],
          EU = [...document.querySelectorAll("[data-pad-covers]")].filter(KR);
        for (const PU of (0, Mt.f)()) {
          const UU = PU.getRoot(),
            RU = !!UU && KR(UU) && !lt(UU, EU);
          if (PU.shown && !RU && pU.push(PU), PU.shown = RU, !UU || !RU) continue;
          const gU = {
            layer: PU,
            root: UU,
            order: PU.order
          };
          tU && !Nt(gU, tU) || (tU = gU)
        }
        Ot = tU, Up = gU, Rp = (0, Mt.c)();
        for (const PU of pU)(0, Mt.h)(PU);
        return Ot
      },
      tp = () => {
        const UU = gp();
        return !(null === UU || void 0 === UU || !UU.layer.close) && (UU.layer.close(), Up = null, !0)
      },
      pp = () => {
        var UU, RU;
        return null !== (UU = null === (RU = gp()) || void 0 === RU ? void 0 : RU.root) && void 0 !== UU ? UU : null
      },
      Ep = UU => UU ? {
        ...UU,
        root: pp()
      } : null;
    let Pp = null,
      Tp = null,
      qp = (0, jU.h)().menuNavigation,
      Kp = null;
    const cp = new mU;
    let Gp = null;
    KU.p.subscribe(jU.e, (() => {
      const UU = (0, jU.h)().menuNavigation;
      UU !== qp && (qp = UU, Pp = null, Tp = null)
    }));
    const jp = () => {
        var UU;
        return null !== (UU = Pp) && void 0 !== UU ? UU : (0, jU.h)().menuNavigation
      },
      Cp = UU => {
        if (Wp()) {
          if (Kp = Ep(UU), "hybrid" === jp()) return cp.lock(), void(Tp = Tp ? null : pp());
          Pp = "focus" === jp() ? "cursor" : "focus"
        }
      },
      hp = () => {
        const UU = Kp;
        return Kp = null, UU
      };
    let Qp = {
      root: null,
      firstSeenMs: -1 / 0,
      atMs: -1 / 0,
      has: !1
    };
    const ep = function(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const gU = Qp.root === UU,
          tU = gU ? Qp.firstSeenMs : RU,
          pU = Qp.has || RU - tU > 1e3;
        return (!gU || !pU || RU - Qp.atMs > 250) && (Qp = {
          root: UU,
          firstSeenMs: tU,
          atMs: RU,
          has: hR(UU)
        }), Qp.has
      },
      Wp = () => {
        const UU = pp();
        return null !== UU && ep(UU)
      },
      fp = () => {
        const UU = gp();
        return Tp && (null === UU || void 0 === UU ? void 0 : UU.root) !== Tp && (Tp = null), (UU => {
          let {
            mode: RU,
            hasLayer: gU,
            hasCandidates: tU,
            hybridCursorEngaged: pU
          } = UU;
          return gU ? "cursor" !== RU && tU() ? "hybrid" === RU && pU ? "cursor" : "focus" : "cursor" : null
        })({
          mode: jp(),
          hasLayer: null !== UU,
          hasCandidates: () => null !== UU && ep(UU.root),
          hybridCursorEngaged: null !== Tp
        })
      },
      xp = () => "hybrid" === jp() && Wp(),
      mp = "pad-focused";
    var Ip = gU(4209),
      Jp = gU(4701);
    const wp = "[data-pad-destructive]",
      np = `${wp}, [data-pad-back]`,
      bp = UU => ({
        rect: UU.getBoundingClientRect(),
        destructive: UU.matches(wp),
        closes: null !== UU.closest("[data-pad-close-button]"),
        unavailable: UU.matches("[data-pad-unavailable]")
      }),
      op = UU => {
        let {
          destructive: RU,
          closes: gU,
          unavailable: tU
        } = UU;
        return RU ? gU ? 2 : 3 : tU ? 1 : 0
      },
      Zp = UU => {
        let RU = -1;
        for (let gU = 0; gU < UU.length; gU++) {
          if (RU < 0) {
            RU = gU;
            continue
          }
          const tU = UU[gU],
            pU = UU[RU];
          op(tU) === op(pU) ? et(tU.rect, pU.rect) < 0 && (RU = gU) : op(tU) < op(pU) && (RU = gU)
        }
        return RU
      },
      ap = "[data-pad-tabs]",
      Yp = "[data-pad-tab]",
      Bp = (UU, RU) => {
        const gU = UU.querySelector(`${Yp}[data-pad-selected='true']`);
        return gU && RU.includes(gU) ? gU : null
      },
      Vp = (UU, RU) => {
        let gU = RU;
        for (let tU = RU.parentElement; tU && !tU.contains(UU); tU = tU.parentElement) gU = tU;
        return gU
      };
    class rp {
      constructor() {
        this.contentReturn = null
      }
      redirect(UU, RU, gU, tU) {
        var pU, EU;
        const PU = UU.closest(ap),
          TU = RU.closest(ap);
        var qU;
        if (TU && TU !== PU) return PU || (this.contentReturn = new WeakRef(UU)), null !== (qU = Bp(TU, gU)) && void 0 !== qU ? qU : RU;
        if (!PU || TU) return RU;
        const KU = Vp(UU, RU),
          cU = null === (pU = this.contentReturn) || void 0 === pU ? void 0 : pU.deref();
        return cU && KU.contains(cU) && gU.includes(cU) ? cU : null !== (EU = this.pickRegionStart(KU, oU(RU, "y", tU), gU)) && void 0 !== EU ? EU : RU
      }
      findTabContent(UU, RU, gU) {
        const tU = UU.closest(ap);
        if (!tU || !UU.matches(Yp) || tU.contains(RU)) return null;
        const pU = RU.closest(ap);
        if (pU && Number(pU.dataset.padTabs) <= Number(tU.dataset.padTabs)) return null;
        const EU = Vp(UU, RU);
        return gU.some((UU => EU.contains(UU) && !UU.closest(np))) || !RU.closest(np) ? EU : null
      }
      pickContentStart(UU, RU, gU) {
        return this.contentReturn = null, this.pickRegionStart(UU, oU(UU, "y", gU), RU)
      }
      pickReplacedContentStart(UU, RU, gU, tU) {
        if (!RU.contains(UU)) return null;
        const pU = Vp(RU, UU),
          EU = gU.filter((UU => RU.contains(UU) && !pU.contains(UU) && !UU.closest(np)));
        return 0 === EU.length ? null : (this.contentReturn = null, this.pickRegionStart(RU, oU(EU[0], "y", tU), EU))
      }
      backToStrip(UU, RU, gU) {
        if (UU.closest(ap)) return null;
        const tU = bt(gU);
        for (const pU of gU.querySelectorAll(ap)) {
          if (Number(pU.dataset.padTabs) <= 1 || pU === tU) continue;
          const EU = Bp(pU, RU),
            PU = EU ? Vp(UU, pU).parentElement : null;
          if (EU && PU && PU !== gU && gU.contains(PU)) return this.contentReturn = new WeakRef(UU), EU
        }
        return null
      }
      pickRegionStart(UU, RU, gU) {
        const tU = rU(RU),
          pU = UU => {
            const RU = gU.filter((RU => UU.contains(RU) && !RU.closest(ap) && XU(RU.getBoundingClientRect(), tU))),
              pU = Zp(RU.map(bp));
            return pU >= 0 ? RU[pU] : null
          };
        for (const EU of WR(UU)) {
          const UU = pU(EU);
          if (UU) return UU
        }
        for (const EU of UU.querySelectorAll(ap)) {
          const UU = Bp(EU, gU);
          if (UU) return UU
        }
        return pU(UU)
      }
    }
    const Xp = "[data-pad-default-focus], .Dropdown-option.is-selected",
      vp = ".Dropdown-root.is-open > .Dropdown-menu",
      dp = "[data-pad-no-step-in]",
      Hp = "[data-pad-tabs]",
      Sp = "[data-pad-press-area]",
      sp = UU => {
        let RU = UU;
        for (let gU = 0; RU && gU <= 4; gU++, RU = RU.parentElement) {
          const gU = RU.querySelector(".CircleInfo");
          if (gU) return RU === UU || RU.querySelectorAll(TR).length <= 1 ? gU : null;
          if (RU !== UU && RU.querySelectorAll(TR).length > 1) return null
        }
        return null
      },
      yp = (UU, RU, gU) => {
        bR(UU, RU, gU);
        const tU = null !== UU && void 0 !== UU && UU.isConnected ? sp(UU) : null,
          pU = sp(RU);
        tU !== pU && bR(tU, pU, pU ? xR(pU) : gU, {
          leaveBelow: UU,
          enterBelow: RU
        })
      },
      kp = UU => UU.getBoundingClientRect(),
      Fp = (UU, RU, gU) => {
        const tU = new Set(gU);
        for (let pU = UU; pU; pU = pU === RU ? null : pU.parentElement)
          if (tU.has(pU)) return pU;
        return null
      },
      ip = (UU, RU) => !UU.root || UU.root === RU || RU.matches(vp) && UU.root.contains(RU);
    const Ap = new class {
      constructor() {
        this.focused = null, this.layerKey = null, this.layerRoot = null, this.memory = new zt, this.tabStripNav = new rp, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.confirmPressedOn = null, this.confirmRepeatKey = null, this.confirmRepeated = !1, this.confirmRepeat = (0, hU.e)(CU.p), this.dpadRepeats = new Map(CU.w.map((UU => [UU, (0, hU.e)(CU.x)]))), this.stickRepeat = new CU.c((0, hU.e)(CU.U)), this.lastRefocusCheckMs = -1 / 0, this.enteredLayerAtMs = 0, this.lastFocusedCentre = null, this.lastActivatedKey = null, this.lastActivated = null, this.lastActivatedAtMs = -1 / 0, this.pendingFocus = null, this.tabOpenWait = null, this.retryMove = null, this.scrollRemainder = {
          x: 0,
          y: 0
        }, this.wasActive = !1, this.layerKind = null, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.listeners = new Set, this.dropdownLayers = new WeakMap, this.dropdownLayerCounter = 0
      }
      install() {
        const UU = GU.e.register({
            name: "focus",
            isActive: () => (0, uU.i)() && "focus" === fp(),
            onFrame: UU => {
              this.onFrame(UU)
            },
            onDeactivate: () => {
              this.deactivate()
            },
            wakePressActs: UU => (0, GU.i)(UU) || UU === (0, cU.f)("menuConfirm") && XR((0, uU.c)())
          }),
          RU = (0, Mt.k)((UU => {
            const RU = (0, Mt.p)(UU);
            null === UU.memoryKey && this.memory.forget(RU), RU === this.layerKey && (this.layerKey = null)
          }));
        let gU = -1 / 0;
        const tU = PU.g.onFrame((UU => {
            (0, uU.i)() || UU.timestampMs - gU < 100 || (gU = UU.timestampMs, gp())
          })),
          pU = UU => {
            UU.isTrusted && UU.target instanceof Element && PU.g.getActivePad() && this.noteChosenStop(UU.target)
          };
        return document.addEventListener("click", pU, !0), () => {
          UU(), RU(), tU(), document.removeEventListener("click", pU, !0), this.deactivate()
        }
      }
      noteChosenStop(UU) {
        var RU, gU;
        const tU = gp();
        if (!tU || !tU.root.contains(UU)) return;
        const pU = null !== (RU = null === (gU = UU.closest(".Dropdown-root")) || void 0 === gU ? void 0 : gU.querySelector(".Dropdown-control")) && void 0 !== RU ? RU : UU,
          EU = Fp(pU, tU.root, this.getEnabledCandidates(tU.root));
        if (!EU) return;
        const PU = (0, Mt.p)(tU.layer);
        PU === this.layerKey && tU.root === this.layerRoot || this.beginLayer(tU, PU), this.wasActive ? this.setFocus(EU, {
          scroll: !1,
          byUser: !0
        }) : (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.focused = EU, this.lastFocusedCentre = xR(EU), this.rememberFocus(EU), this.notify())
      }
      getFocused() {
        return this.focused
      }
      isActive() {
        return this.wasActive
      }
      onChange(UU) {
        return this.listeners.add(UU), () => {
          this.listeners.delete(UU)
        }
      }
      notify() {
        for (const UU of this.listeners) UU()
      }
      deactivate() {
        var UU;
        if (this.wasActive) {
          this.wasActive = !1, this.layerKind = null, this.confirmPressedOn = null, this.retryMove = null, this.pendingFocus = null;
          for (const UU of this.dpadRepeats.values()) UU.reset();
          this.stickRepeat.reset(), null !== (UU = this.focused) && void 0 !== UU && UU.isConnected && yp(this.focused, null, xR(this.focused)), this.notify()
        }
      }
      setFocus(UU) {
        var RU;
        let {
          scroll: gU = !0,
          byUser: tU = !1
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (tU && (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1), UU === this.focused) return;
        const pU = null !== (RU = this.focused) && void 0 !== RU && RU.isConnected ? this.focused : null;
        if (this.focused = UU, UU) {
          gU && (UU.classList.add(mp), UU.scrollIntoView({
            block: "nearest",
            inline: "nearest",
            behavior: "instant"
          })), tU && ((UU, RU) => {
            const gU = RU.closest("[data-pad-friends-column]");
            gU && UU && !gU.contains(UU) && (rt = new WeakRef(UU))
          })(pU, UU);
          const RU = xR(UU);
          this.lastFocusedCentre = RU, this.movedInLayer && this.rememberFocus(UU), yp(pU, UU, RU), "false" === UU.getAttribute("aria-pressed") && UU.closest("[data-pad-select-on-focus]") && ZR(UU)
        } else pU && yp(pU, null, xR(pU));
        this.notify()
      }
      rememberFocus(UU) {
        const RU = this.layerRoot;
        this.layerKey && RU && this.memory.remember(this.layerKey, UU, RU, (() => this.getEnabledCandidates(RU)))
      }
      noteCursorActivation(UU) {
        const RU = gp();
        if (!RU || !RU.root.contains(UU)) return;
        const gU = this.getEnabledCandidates(RU.root),
          tU = new Set(gU);
        let pU = UU;
        for (; pU && !tU.has(pU);) pU = pU === RU.root ? null : pU.parentElement;
        if (!(pU instanceof HTMLElement)) return;
        const EU = (0, Mt.p)(RU.layer);
        this.memory.enter(EU), this.memory.remember(EU, pU, RU.root, (() => gU))
      }
      notePageEnteredByCursor(UU) {
        return this.memory.enter(UU)
      }
      recallStop(UU, RU) {
        return this.findRemembered(UU, RU)
      }
      focusWhenFound(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
          gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.pendingFocus = {
          find: UU,
          untilMs: performance.now() + RU,
          holdWhile: gU
        }
      }
      getEnabledCandidates(UU) {
        return uR(UU).filter((UU => !cR(UU)))
      }
      onFrame(UU) {
        var RU;
        const gU = gp();
        if (!gU) return;
        const tU = null !== (RU = this.findOpenDropdown(gU)) && void 0 !== RU ? RU : gU,
          pU = performance.now(),
          EU = (0, Mt.p)(tU.layer);
        if (EU !== this.layerKey || tU.root !== this.layerRoot) {
          const RU = this.focused;
          if (null !== this.layerKey && tU.root === this.layerRoot && RU && eR(RU, tU.root)) this.continueLayer(EU, RU), this.wasActive || this.resume(tU.root, pU);
          else {
            const RU = !this.wasActive && !UU.wokeDevice,
              PU = "death" === this.layerKind || RU,
              TU = this.enterLayer(tU, EU);
            "popup" !== tU.layer.kind || tU !== gU || TU ? "menu" === tU.layer.kind && PU && "inGame" === qU.b.get("gameState") && !(0, lg.d)(3e3) && (this.pressGuardExtends = !0, this.pressGuardUntilMs = pU + Ip.c) : (this.pressGuardExtends = RU, this.pressGuardUntilMs = pU + (RU ? Ip.c : PU ? 500 : 250))
          }
        } else this.wasActive || this.resume(tU.root, pU);
        if (this.layerKind = tU.layer.kind, this.wasActive || (this.wasActive = !0, this.notify()), UU.wokeDevice && this.focusPointedStop(tU.root), this.validateFocus(tU, pU), pU < this.pressGuardUntilMs && this.pressGuardExtends && (UU.wasPressed((0, cU.f)("menuConfirm")) || UU.wasPressed((0, cU.f)("menuBack"))) && (this.pressGuardUntilMs = pU + Ip.c), pU >= this.pressGuardUntilMs && this.handleButtons(UU, tU)) return;
        const PU = "hybrid" === jp();
        if (PU && (UU => {
            const RU = pp();
            return RU !== Gp && (Gp = RU, cp.lock()), cp.update(UU, (0, jU.h)().moveDeadzone)
          })(UU.leftStick)) return TU = this.getHandoff(), Kp = Ep(TU), Tp = pp(), void GU.e.handOffHeldInput();
        var TU;
        this.handleDirections(UU, tU, pU, !PU), this.handleScroll(UU, tU)
      }
      findOpenDropdown(UU) {
        const RU = UU.root.querySelector(vp);
        if (!RU || !KR(RU)) return null;
        let gU = this.dropdownLayers.get(RU);
        return gU || (this.dropdownLayerCounter++, gU = {
          id: `dropdown-${this.dropdownLayerCounter}`,
          kind: UU.layer.kind,
          getRoot: () => RU,
          close: () => {
            BR(RU)
          },
          memoryKey: null
        }, this.dropdownLayers.set(RU, gU)), {
          layer: gU,
          root: RU,
          order: UU.order
        }
      }
      focusPointedStop(UU) {
        const RU = (0, uU.c)(),
          gU = RU ? document.elementFromPoint(RU.x, RU.y) : null;
        if (!gU || !UU.contains(gU)) return;
        const tU = Fp(gU, UU, this.getEnabledCandidates(UU));
        tU && this.setFocus(tU, {
          scroll: !1,
          byUser: !0
        })
      }
      enterLayer(UU, RU) {
        const gU = this.beginLayer(UU, RU),
          tU = hp();
        return tU && ip(tU, UU.root) ? (this.takeOver(UU.root, tU, this.enteredLayerAtMs), gU) : (this.restoreLayerFocus(UU.root, gU), gU)
      }
      beginLayer(UU, RU) {
        return this.layerKey = RU, this.layerRoot = UU.root, this.lastActivatedKey = null, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoreOnFocusLoss = !1, this.retryMove = null, this.pendingFocus = null, this.confirmPressedOn = null, this.lastRefocusCheckMs = -1 / 0, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.enteredLayerAtMs = performance.now(), this.lastFocusedCentre = null, this.memory.enter(RU)
      }
      restoreLayerFocus(UU, RU) {
        const gU = RU && this.layerKey ? this.findRemembered(UU, this.layerKey) : null;
        this.restoredFromMemory = null !== gU, this.setFocus(null !== gU && void 0 !== gU ? gU : this.pickInitial(UU, {
          waitForContent: !0
        }))
      }
      continueLayer(UU, RU) {
        this.layerKey = UU;
        const gU = this.memory.enter(UU);
        this.restoreOnFocusLoss = gU, this.movedInLayer && !gU && this.rememberFocus(RU)
      }
      resume(UU, RU) {
        var gU;
        const tU = hp();
        tU && ip(tU, UU) ? this.takeOver(UU, tU, RU) : null !== (gU = this.focused) && void 0 !== gU && gU.isConnected && yp(null, this.focused, xR(this.focused))
      }
      pickPreferred(UU) {
        var RU;
        return null !== (RU = this.layerKey ? this.findRemembered(UU, this.layerKey) : null) && void 0 !== RU ? RU : this.pickInitial(UU, {
          waitForContent: !0
        })
      }
      findRemembered(UU, RU) {
        return this.memory.has(RU) ? this.memory.recall(RU, this.getEnabledCandidates(UU)) : null
      }
      getHandoff() {
        var UU, RU, gU;
        const tU = null !== (UU = this.focused) && void 0 !== UU && UU.isConnected ? this.focused : null,
          pU = null !== (RU = this.layerRoot) && void 0 !== RU && RU.isConnected ? this.layerRoot : null;
        return {
          point: tU ? xR(tU) : null !== (gU = this.lastFocusedCentre) && void 0 !== gU ? gU : this.getLayerStartPoint(pU),
          element: tU,
          direction: null
        }
      }
      getLayerStartPoint(UU) {
        if (!UU) return {
          x: window.innerWidth / 2,
          y: window.innerHeight / 2
        };
        const RU = this.pickInitial(UU, {
          includeDisabled: !0
        });
        return xR(null !== RU && void 0 !== RU ? RU : UU)
      }
      takeOver(UU, RU, gU) {
        const {
          element: tU,
          direction: pU,
          point: EU
        } = RU, PU = tU instanceof HTMLElement && eR(tU, UU) ? tU : null;
        if (!pU) {
          const RU = this.focused;
          return PU ? this.setFocus(PU, {
            scroll: !1,
            byUser: !0
          }) : this.focusNearest(UU, EU), void(this.focused && this.focused === RU && this.focused.isConnected && yp(null, this.focused, xR(this.focused)))
        }
        if (this.dpadRepeats.get(pU).update(!0, gU), PU) return this.setFocus(PU, {
          scroll: !1,
          byUser: !0
        }), void this.move(UU, pU, gU, !0);
        const TU = this.getEnabledCandidates(UU),
          qU = TU.map(kp),
          KU = Gt(new DOMRect(EU.x, EU.y, 0, 0), qU, pU),
          cU = KU >= 0 ? KU : Qt(EU, qU);
        this.setFocus(cU >= 0 ? TU[cU] : this.pickInitial(UU), {
          byUser: !0
        })
      }
      focusNearest(UU, RU) {
        const gU = this.getEnabledCandidates(UU),
          tU = Qt(RU, gU.map(kp));
        this.setFocus(tU >= 0 ? gU[tU] : this.pickInitial(UU), {
          byUser: !0
        })
      }
      pickDefault(UU) {
        let {
          includeDisabled: RU = !1,
          exclude: gU = null
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const tU = [...UU.querySelectorAll(Xp)].filter((tU => (null === gU || void 0 === gU || !gU.has(tU)) && (RU ? QR(tU, UU) : eR(tU, UU)))),
          pU = Zp(tU.map(bp));
        return pU >= 0 ? tU[pU] : null
      }
      pickNewAreaStart(UU, RU) {
        const gU = [...UU.querySelectorAll(Sp)].filter(KR);
        for (const tU of [...WR(UU), ...gU]) {
          if (RU.has(tU)) continue;
          const UU = this.getEnabledCandidates(tU),
            gU = Zp(UU.map(bp));
          if (gU >= 0) return UU[gU]
        }
        return null
      }
      pickInitial(UU) {
        let {
          includeDisabled: RU = !1,
          waitForContent: gU = !1,
          enteredAtMs: tU = this.enteredLayerAtMs
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const pU = this.pickDefault(UU, {
          includeDisabled: RU
        });
        if (pU) return pU;
        const EU = UU => RU ? uR(UU) : this.getEnabledCandidates(UU);
        let PU = [];
        for (const jU of WR(UU))
          if (PU = EU(jU), PU.length > 0) break;
        if (0 === PU.length) {
          if (gU && performance.now() - tU < 1e4 && (UU => {
              for (const RU of UU.querySelectorAll("[data-pad-initial-area]"))
                if (!qR(RU, !1)) return !0;
              return !1
            })(UU)) return null;
          PU = EU(UU)
        }
        const TU = PU.map(kp),
          qU = rU(null),
          KU = PU.filter(((UU, RU) => XU(TU[RU], qU))),
          cU = KU.length > 0 ? KU : PU,
          GU = Zp(cU.map(bp));
        return GU >= 0 ? cU[GU] : null
      }
      validateFocus(UU, RU) {
        if (this.pendingFocus) {
          var gU, tU;
          const pU = this.pendingFocus.find();
          if (pU && eR(pU, UU.root)) return this.pendingFocus = null, void this.setFocus(pU, {
            byUser: !0
          });
          RU > this.pendingFocus.untilMs && (null === (gU = (tU = this.pendingFocus).holdWhile) || void 0 === gU || !gU.call(tU)) && (this.pendingFocus = null)
        }
        const pU = this.focused,
          EU = !!pU && eR(pU, UU.root);
        if (!(!EU && pU && pU === this.lastActivated && RU - this.lastActivatedAtMs < 5e3 && UU.root.contains(pU) && KR(pU) && cR(pU))) {
          if (!EU && this.restoreOnFocusLoss && this.layerKey) return this.restoreOnFocusLoss = !1, this.movedInLayer = !1, this.scrolledInLayer = !1, this.enteredLayerAtMs = RU, void this.restoreLayerFocus(UU.root, !0);
          if ((!EU || !this.movedInLayer && !this.scrolledInLayer) && !(RU - this.lastRefocusCheckMs < (EU ? 200 : 50)))
            if (this.lastRefocusCheckMs = RU, EU) {
              const gU = RU - this.enteredLayerAtMs < 15e3 ? this.pickPreferred(UU.root) : null,
                tU = null !== gU && void 0 !== gU ? gU : this.restoredFromMemory ? null : this.pickDefault(UU.root);
              tU && tU !== pU && this.setFocus(tU)
            } else {
              if (this.lastFocusedCentre && this.movedInLayer) {
                const RU = this.pendingFocus;
                return this.focusNearest(UU.root, this.lastFocusedCentre), void(this.pendingFocus = RU)
              }
              this.setFocus(this.pickPreferred(UU.root))
            }
        }
      }
      handleButtons(UU, RU) {
        if (UU.wasPressed((0, cU.f)("menuToggleCursor"))) return Cp(this.getHandoff()), !0;
        if (UU.wasPressed((0, cU.f)("menuBack"))) {
          const UU = BR(RU.root);
          return UU ? this.setFocus(UU, {
            byUser: !0
          }) : Xt(this, RU.root) || (dR(RU.root) ? this.returnToOpener(RU.root) : this.backToStrip(RU.root) || tp()), !0
        }
        const gU = (0, cU.f)("menuConfirm");
        var tU, pU;
        UU.wasPressed(gU) && (this.confirmPressedOn = this.focused, this.confirmRepeatKey = null !== (tU = null === (pU = this.focused) || void 0 === pU ? void 0 : pU.getAttribute("data-pad-repeat")) && void 0 !== tU ? tU : null, this.confirmRepeated = UU.wokeDevice, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now()));
        if (UU.wasReleased(gU)) {
          const UU = this.confirmPressedOn;
          if (this.confirmPressedOn = null, UU && !this.confirmRepeated && UU === this.focused && UU.isConnected && !cR(UU)) {
            const gU = UU.matches("[data-pad-tab]") ? UU.closest(Hp) : null;
            gU ? this.enterTab(UU, gU, RU.root, performance.now()) : this.activate(UU)
          }
          return !0
        }
        return this.repeatConfirm(UU, gU), it(this, UU, RU)
      }
      repeatConfirm(UU, RU) {
        const gU = this.confirmPressedOn;
        gU && null !== this.confirmRepeatKey && UU.isHeld(RU) && (gU === this.focused && gU.isConnected && !cR(gU) && gU.getAttribute("data-pad-repeat") === this.confirmRepeatKey ? gU.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.confirmRepeated = !0, this.activate(gU)) : this.confirmRepeatKey = null)
      }
      backToStrip(UU) {
        const RU = this.focused;
        if (!(0, jU.h)().menuBackToCategories) return !1;
        const gU = null !== RU && void 0 !== RU && RU.isConnected ? this.tabStripNav.backToStrip(RU, this.getEnabledCandidates(UU), UU) : null;
        return gU && this.setFocus(gU, {
          byUser: !0
        }), null !== gU
      }
      returnToOpener(UU) {
        const RU = this.lastActivatedKey;
        RU && (this.lastActivatedKey = null, this.focusWhenFound((() => {
          var gU;
          return null !== (gU = this.getEnabledCandidates(UU).find((UU => HR(UU) === RU))) && void 0 !== gU ? gU : null
        })))
      }
      activate(UU) {
        var RU;
        if ((0, Jp.b)(UU) || rR(UU)) return;
        this.lastActivatedKey = null !== (RU = HR(UU)) && void 0 !== RU ? RU : this.lastActivatedKey, this.lastActivated = UU, this.lastActivatedAtMs = performance.now(), this.rememberFocus(UU);
        const gU = this.layerRoot;
        if (gU) {
          const RU = new Set(gU.querySelectorAll(Xp)),
            tU = new Set(gU.querySelectorAll(`[data-pad-initial-area], ${Sp}`)),
            pU = this.lastActivatedAtMs;
          this.focusWhenFound((() => {
            var pU;
            return eR(UU, gU) ? null : null !== (pU = this.pickDefault(gU, {
              exclude: RU
            })) && void 0 !== pU ? pU : this.pickNewAreaStart(gU, tU)
          }), 5e3, (() => UU.isConnected && cR(UU) && performance.now() - pU < 6e4))
        }
        ZR(UU), VR(UU)
      }
      handleDirections(UU, RU, gU, tU) {
        const pU = It(RU.layer.kind) ? (0, cU.f)("chat") : null;
        for (const TU of CU.w) {
          this.dpadRepeats.get(TU).update(UU.isHeld(TU), gU) && (TU !== pU || UU.wasPressed(TU)) && this.move(RU.root, TU, gU, !0)
        }
        const EU = tU ? (0, CU.g)(UU.leftStick, (0, jU.h)().moveDeadzone) : {
            x: 0,
            y: 0
          },
          PU = this.stickRepeat.update((0, CU.V)(EU), gU);
        if (PU && this.move(RU.root, PU, gU, !0), this.retryMove && gU >= this.retryMove.atMs) {
          const {
            direction: UU
          } = this.retryMove;
          this.retryMove = null, this.move(RU.root, UU, gU, !1)
        }
      }
      move(UU, RU, gU, tU) {
        var pU;
        let EU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.pendingFocus && this.pendingFocus === (null === (pU = this.tabOpenWait) || void 0 === pU ? void 0 : pU.wait) && RU === this.tabOpenWait.direction) return;
        this.pendingFocus = null;
        const PU = this.focused;
        if (!PU || !PU.isConnected) {
          const RU = this.pickInitial(UU);
          return void(RU && this.setFocus(RU, {
            byUser: !0
          }))
        }
        const TU = "Left" === RU || "Right" === RU,
          qU = TU ? (0, Jp.b)(PU) : null;
        if (qU) return void qU.adjust("Left" === RU ? -1 : 1);
        const KU = UU => null !== UU.closest("[data-pad-friends-column]"),
          cU = KU(PU),
          GU = kp(PU),
          jU = TU || PU.closest(Hp) ? null : (UU => {
            const RU = new Map;
            return gU => {
              const tU = gU.closest(Hp);
              if (!tU) return !1;
              let pU = RU.get(tU);
              if (void 0 === pU) {
                const gU = kp(tU);
                pU = ct(UU, gU) && (gU.right <= UU.left || gU.left >= UU.right), RU.set(tU, pU)
              }
              return pU
            }
          })(GU),
          uU = null !== PU.closest(dp),
          CU = this.getEnabledCandidates(UU).filter((UU => UU !== PU && (TU || KU(UU) === cU) && !(null !== jU && void 0 !== jU && jU(UU)) && (uU || !UU.closest(dp)))),
          hU = CU.map(kp),
          QU = oU(PU, "y", UU),
          eU = rU(QU);
        if (!EU && !XU(GU, eU)) {
          const UU = CU.filter(((UU, RU) => XU(hU[RU], eU)));
          if (UU.length > 0) {
            const RU = {
              x: eU.left + eU.width / 2,
              y: eU.top + eU.height / 2
            };
            return void this.setFocus(UU[Qt(RU, UU.map(kp))], {
              byUser: !0
            })
          }
        }
        const WU = TU ? ((UU, RU, gU) => {
            const tU = kp(UU),
              pU = UU.closest(Hp),
              EU = pU ? kp(pU) : null;
            return RU.map(((RU, PU) => {
              const TU = gU[PU];
              if (TU.bottom > tU.top && TU.top < tU.bottom) return !0;
              const qU = RU.closest(Hp);
              if (pU && EU) return qU !== pU && (null !== qU || TU.bottom <= EU.top || TU.top >= EU.bottom);
              if (qU) return !ct(tU, kp(qU));
              let KU = UU;
              for (let gU = UU.parentElement; gU && !gU.contains(RU); gU = gU.parentElement) KU = gU;
              const cU = kp(KU);
              return TU.right > cU.left && TU.left < cU.right
            }))
          })(PU, CU, hU) : void 0,
          fU = TU && !PU.closest(Hp) ? (UU => UU.map((UU => !UU.closest(np))))(CU) : void 0,
          xU = ((UU, RU) => {
            const gU = [];
            for (let pU = UU; pU; pU = pU.parentElement) gU.push(pU);
            const tU = new Map;
            return gU.forEach(((UU, RU) => {
              tU.set(UU, gU.length - 1 - RU)
            })), RU.map((UU => {
              for (let RU = UU; RU; RU = RU.parentElement) {
                const UU = tU.get(RU);
                if (void 0 !== UU) return UU
              }
              return -1
            }))
          })(PU, CU),
          mU = TU ? "x" : "y",
          IU = oU(PU, mU, UU);
        let JU = Gt(GU, hU, RU, xU, WU, fU);
        if (JU >= 0 && IU && !IU.contains(CU[JU])) {
          const UU = CU.flatMap(((UU, RU) => IU.contains(UU) ? [RU] : [])),
            gU = RU => RU && UU.map((UU => RU[UU])),
            tU = Gt(GU, UU.map((UU => hU[UU])), RU, UU.map((UU => xU[UU])), gU(WU), gU(fU));
          JU = tU >= 0 ? UU[tU] : JU
        }
        if (JU >= 0) return void this.moveTo(PU, CU[JU], CU, UU, RU, EU);
        if (!tU) return;
        const wU = "Right" === RU || "Down" === RU ? 1 : -1;
        if (IU && BU(IU, mU, wU)) {
          const UU = "y" === mU ? IU.clientHeight : IU.clientWidth;
          VU(IU, mU, wU * UU * .5), this.retryMove = {
            direction: RU,
            atMs: gU + 80
          }
        }
      }
      moveTo(UU, RU, gU, tU, pU, EU) {
        const PU = this.tabStripNav.findTabContent(UU, RU, gU);
        PU && "true" !== UU.dataset.padSelected ? this.openTab(UU, PU, tU, pU) : EU && !PU || this.setFocus(this.tabStripNav.redirect(UU, RU, gU, tU), {
          byUser: !0
        })
      }
      openTab(UU, RU, gU, tU) {
        const pU = RU.parentElement;
        ZR(UU), this.focusWhenFound((() => "true" !== UU.dataset.padSelected ? null : RU.isConnected ? this.tabStripNav.pickContentStart(RU, this.getEnabledCandidates(gU), gU) : pU ? this.tabStripNav.pickReplacedContentStart(UU, pU, this.getEnabledCandidates(gU), gU) : null), 3e3), this.tabOpenWait = {
          wait: this.pendingFocus,
          direction: tU
        }
      }
      enterTab(UU, RU, gU, tU) {
        this.move(gU, (UU => {
          const RU = [...UU.querySelectorAll(Yp)].filter((RU => RU.closest(ap) === UU));
          if (RU.length >= 2) {
            const UU = RU[0].getBoundingClientRect(),
              gU = RU[1].getBoundingClientRect();
            return Math.abs(gU.top - UU.top) > Math.abs(gU.left - UU.left) ? "Right" : "Down"
          }
          const gU = UU.getBoundingClientRect();
          return gU.height > gU.width ? "Right" : "Down"
        })(RU), tU, !1, !0), this.focused !== UU || this.pendingFocus || this.activate(UU)
      }
      handleScroll(UU, RU) {
        const gU = (0, CU.g)(UU.rightStick, .2);
        if (0 === gU.x && 0 === gU.y) return void(this.scrollRemainder = {
          x: 0,
          y: 0
        });
        const tU = UU.dtMs / 1e3;
        for (const EU of ["x", "y"]) {
          var pU;
          const UU = gU[EU];
          if (0 === UU) continue;
          const PU = null !== (pU = oU(this.focused, EU, RU.root)) && void 0 !== pU ? pU : aU(RU.root, EU);
          if (!PU) continue;
          const TU = Math.sign(UU) * UU * UU * 1500 * tU + this.scrollRemainder[EU],
            qU = Math.trunc(TU);
          this.scrollRemainder[EU] = TU - qU, 0 !== qU && (VU(PU, EU, qU), this.scrolledInLayer = !0)
        }
      }
    };
    var zp = gU(7862);
    var Mp = gU(8346);
    const Dp = {
        duration: 80,
        strongMagnitude: .2,
        weakMagnitude: .2,
        needsPadInUse: !1
      },
      Lp = {
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
          ...Dp,
          minIntervalMs: 1e3
        },
        preview: {
          ...Dp,
          minIntervalMs: 0
        }
      };
    const Np = new class {
        constructor(UU) {
          this.deps = UU, this.lastPlayedMs = {}, this.loggedFailure = !1, this.logFailure = UU => {
            this.loggedFailure || (this.loggedFailure = !0, console.warn("Controller vibration failed; further failures are not logged.", UU))
          }
        }
        play(UU, RU) {
          const gU = Lp[UU];
          if (!this.deps.isVibrationOn() || gU.needsPadInUse && !this.deps.isPadInUse()) return !1;
          const tU = this.lastPlayedMs[UU];
          if (void 0 !== tU && RU - tU < gU.minIntervalMs) return !1;
          const pU = this.deps.getActuator();
          if (!pU) return !1;
          this.lastPlayedMs[UU] = RU;
          const {
            duration: EU,
            strongMagnitude: PU,
            weakMagnitude: TU
          } = gU;
          try {
            pU.playEffect("dual-rumble", {
              duration: EU,
              strongMagnitude: PU,
              weakMagnitude: TU
            }).catch(this.logFailure)
          } catch (qU) {
            this.logFailure(qU)
          }
          return !0
        }
      }({
        getActuator: () => (UU => {
          const RU = null === UU || void 0 === UU ? void 0 : UU.vibrationActuator;
          return "function" === typeof(null === RU || void 0 === RU ? void 0 : RU.playEffect) ? RU : null
        })(PU.g.getActiveGamepad()),
        isVibrationOn: () => (0, jU.h)().vibration,
        isPadInUse: uU.i
      }),
      lp = UU => {
        Np.play(UU, performance.now())
      };
    var Op = gU(7865),
      UE = gU(2644),
      RE = gU(115),
      gE = gU(34),
      tE = gU(623);
    class pE {
      constructor(UU) {
        this.deps = UU
      }
      check() {
        let UU = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const RU = this.deps.isPadActive() ? this.deps.getPadFamily() : null;
        if (!RU) return "skipped";
        const gU = UU ? this.deps.getVisitId() : this.deps.peekVisitId();
        return null === gU || this.deps.readReportedVisitId() === gU ? "skipped" : this.deps.canReport() ? (this.deps.writeReportedVisitId(gU), this.deps.ku(RU, this.deps.getInputType()), "reported") : "notReady"
      }
    }
    const EE = "controllerUsageReportedVisit";
    var PE = gU(1333),
      TE = gU(1637),
      qE = gU(603),
      KE = gU(1410),
      cE = gU(1249);
    const GE = UU => ({
        translationKey: `controller:${UU}`
      }),
      jE = {
        A: "A",
        B: "B",
        X: "X",
        Y: "Y",
        LB: "LB",
        RB: "RB",
        LT: "LT",
        RT: "RT",
        View: GE("padButtonView"),
        Menu: GE("padButtonMenu"),
        LS: "L3",
        RS: "R3",
        Up: GE("padButtonDpadUp"),
        Down: GE("padButtonDpadDown"),
        Left: GE("padButtonDpadLeft"),
        Right: GE("padButtonDpadRight"),
        Home: GE("padButtonHome"),
        LeftStick: GE("padButtonLeftStick"),
        RightStick: GE("padButtonRightStick")
      },
      uE = {
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
          View: GE("padButtonCreate"),
          Menu: GE("padButtonOptions")
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
      CE = (UU, RU) => {
        var gU;
        const tU = null !== (gU = uE[UU][RU]) && void 0 !== gU ? gU : jE[RU];
        return "string" === typeof tU ? tU : (0, pU.x)(cE.g.get().getCurrentLanguageCode(), tU.translationKey)
      },
      hE = UU => {
        let {
          glyph: RU,
          family: gU,
          className: tU
        } = UU;
        const pU = (0, uU.z)(),
          EU = null !== gU && void 0 !== gU ? gU : pU,
          PU = (0, Op.g)(EU, RU);
        return (0, SU.jsx)("span", {
          className: HU()("ControllerGlyph", tU),
          role: "img",
          "aria-label": CE(EU, RU),
          style: {
            "--pad-glyph-mask": `url(${PU})`,
            "--pad-glyph-aspect": (0, Op.d)(EU, RU)
          }
        })
      };
    var QE = gU(1777);
    const eE = UU => {
      let {
        action: RU
      } = UU;
      const {
        t: gU
      } = (0, pU.B)();
      switch (RU.kind) {
        case "reload":
          return (0, SU.jsx)("span", {
            children: gU("controller:gameplayReload")
          });
        case "specialAction":
          return null;
        case "customButton":
          return (0, SU.jsx)(QE.e, {
            text: RU.description ? [{
              icon: RU.icon
            }, ` ${RU.description}`] : [{
              icon: RU.icon
            }]
          });
        case "touchButton":
          return (0, SU.jsx)(QE.e, {
            text: RU.label
          })
      }
    };
    var WE = gU(8355);
    const fE = UU => {
      let {
        hold: RU
      } = UU;
      return (0, SU.jsx)("div", {
        className: "DropStackFillTrack",
        style: {
          "--pad-drop-stack-hold": `${RU.holdMs}ms`
        },
        children: (0, SU.jsx)("div", {
          className: "DropStackFillBar"
        })
      }, RU.id)
    };
    var xE = gU(8382),
      mE = gU(8385),
      IE = gU(8391),
      JE = gU(8376);
    const wE = () => {
        const {
          gameState: UU
        } = (0, qU.l)(["gameState"]), RU = (0, uU.v)(), [tU, pU] = (0, vU.useState)(!1), [EU, PU] = (0, vU.useState)(!1);
        return (0, vU.useEffect)((() => {
          "inGame" === UU && pU(!0)
        }), [UU]), (0, vU.useEffect)((() => {
          if (!tU) return;
          let UU = null,
            RU = !1;
          return (qE.u ? Promise.all([gU.e(69), gU.e(259), gU.e(199), gU.e(217), gU.e(216), gU.e(84)]).then((() => gU(39915))).then((UU => UU.startWasmPadGameplay)) : Promise.all([gU.e(69), gU.e(226), gU.e(225), gU.e(94), gU.e(72), gU.e(71), gU.e(70), gU.e(218), gU.e(182), gU.e(222), gU.e(74), gU.e(196), gU.e(215), gU.e(219), gU.e(93), gU.e(83), gU.e(113), gU.e(234), gU.e(73), gU.e(112), gU.e(155), gU.e(217), gU.e(188)]).then((() => gU(40054))).then((UU => UU.startPadGameplay))).then((gU => {
            RU || (UU = gU())
          })).catch((UU => {
            console.error("Pad gameplay failed to load", UU), RU || PU(!0)
          })), () => {
            var gU;
            RU = !0, null === (gU = UU) || void 0 === gU || gU()
          }
        }), [tU]), (0, vU.useEffect)((() => {
          EU && RU && (PU(!1), PE.NotificationProvider.showPromptPopup({
            title: "controller:gameplayLoadFailedTitle",
            subtitle: "controller:gameplayLoadFailedSubtitle",
            confirmText: "settingsMenu:reloadPagePopupConfirm",
            confirmTooltip: "",
            cancelText: "general:cancel",
            cancelTooltip: ""
          }).getResult().then((UU => {
            !0 === UU && (0, TE.reloadBloxd)()
          })))
        }), [EU, RU]), (0, SU.jsxs)(SU.Fragment, {
          children: [(0, SU.jsx)(nE, {}), (0, SU.jsx)(bE, {}), (0, SU.jsx)(oE, {})]
        })
      },
      nE = () => {
        const {
          t: UU
        } = (0, pU.B)(), RU = (0, uU.v)(), {
          gameState: gU,
          isUiHidden: tU
        } = (0, qU.l)(["gameState", "isUiHidden"]), {
          hideButtonHints: EU
        } = (0, jU.n)(), PU = (0, WE.h)(), TU = (0, WE.j)(), [KU, GU] = (0, vU.useState)(IE.b);
        return (0, KE.e)(JE.p, GU), !RU || EU || tU || "inGame" !== gU || !PU && !KU ? null : (0, SU.jsxs)("div", {
          className: "PadActionHint SmallTextBold",
          children: [PU && (0, SU.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, SU.jsx)(hE, {
              glyph: (0, cU.f)("actionButton")
            }), (0, SU.jsx)(eE, {
              action: PU
            }), TU && (0, SU.jsx)("span", {
              className: "PadActionHintMore",
              children: UU("controller:gameplayActionWheelHint")
            })]
          }), KU && (0, SU.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, SU.jsx)(hE, {
              glyph: (0, cU.f)("pickBlock")
            }), (0, SU.jsx)("span", {
              children: UU("controller:gameplayPickBlock")
            })]
          })]
        })
      },
      bE = () => {
        const {
          t: UU
        } = (0, pU.B)(), RU = (0, uU.v)(), {
          gameState: gU,
          isUiHidden: tU
        } = (0, qU.l)(["gameState", "isUiHidden"]), [EU, PU] = (0, vU.useState)(xE.b);
        return (0, KE.e)(JE.m, PU), RU && !tU && "inGame" === gU && EU ? (0, SU.jsxs)("div", {
          className: "PadDropStackFill SmallTextBold",
          children: [(0, SU.jsx)("span", {
            children: UU("controller:gameplayDropStack")
          }), (0, SU.jsx)(fE, {
            hold: EU
          })]
        }) : null
      },
      oE = () => {
        const {
          t: UU
        } = (0, pU.B)(), RU = (0, uU.v)(), {
          gameState: gU,
          isUiHidden: tU
        } = (0, qU.l)(["gameState", "isUiHidden"]), {
          hideButtonHints: EU
        } = (0, jU.n)(), [PU, TU] = (0, vU.useState)(mE.b);
        return (0, KE.e)(JE.k, TU), RU && !tU && "inGame" === gU && PU ? (0, SU.jsxs)("div", {
          className: "PadAttackLatchedHint SmallTextBold",
          children: [!EU && (0, SU.jsx)(hE, {
            glyph: (0, cU.f)("attack")
          }), (0, SU.jsx)("span", {
            children: UU("controller:gameplayAttackLatched")
          })]
        }) : null
      };
    var ZE = gU(8400),
      aE = gU(1821),
      YE = gU(2254),
      BE = gU(7843);
    const VE = UU => UU && !(0, ZE.c)(aE.b.get("shopInfo")),
      rE = () => {
        const UU = "inGame" === (0, qU.l)(["gameState"]).gameState;
        return (0, YE.f)("shopInfo", (() => {
          (0, BE.h)(VE(UU))
        })), (0, vU.useEffect)((() => {
          (0, BE.h)(VE(UU))
        }), [UU]), null
      },
      XE = () => {
        const {
          t: UU
        } = (0, pU.B)(), {
          hideButtonHints: RU
        } = (0, jU.n)();
        (0, uU.z)();
        const gU = (0, ag.h)();
        return (0, vU.useEffect)((() => (() => {
          const UU = GU.e.register({
              name: "inventory",
              isActive: Lg.isActive,
              onFrame: Lg.onFrame,
              onDeactivate: Lg.onDeactivate,
              wakePressActs: Lg.wakePressActs
            }),
            RU = UU => {
              Lg.noteRealPointer(UU), Lg.shouldBlockRealPointer(UU) && UU.stopPropagation()
            };
          for (const PU of Ng) window.addEventListener(PU, RU, !0);
          const gU = (0, FR.l)((() => {
              "inventory" !== GU.e.getActiveConsumerName() && Lg.forgetSurface()
            })),
            tU = UU => {
              const RU = UU.target;
              (0, uU.i)() && lU(RU) && RU.closest(ug) && (0, FR.j)() && (0, FR.q)(RU)
            };
          document.addEventListener("focusout", tU, !0);
          const {
            invalidate: pU,
            onScroll: EU
          } = Lg.targets;
          return document.addEventListener("scroll", EU, !0), window.addEventListener("resize", pU), () => {
            UU(), gU();
            for (const UU of Ng) window.removeEventListener(UU, RU, !0);
            document.removeEventListener("scroll", EU, !0), document.removeEventListener("focusout", tU, !0), window.removeEventListener("resize", pU), Lg.targets.disconnect()
          }
        })()), []), (0, SU.jsxs)(SU.Fragment, {
          children: [(0, SU.jsx)(FU, {
            placer: Lg.ring,
            className: "InventorySlotCursorRing"
          }), gU.showing && !RU && (0, SU.jsx)("div", {
            className: "InventorySlotCursorHints SmallTextBold",
            children: kR(gU).map((RU => {
              let {
                actions: tU,
                labelKey: pU
              } = RU;
              return (0, SU.jsxs)("div", {
                className: "InventorySlotCursorHint",
                children: [tU.map((UU => (0, SU.jsx)(hE, {
                  glyph: (0, cU.f)(UU)
                }, UU))), (0, SU.jsx)("span", {
                  children: UU(`controller:${pU}`)
                }), "inventoryDrop" === pU && gU.dropStackHold && (0, SU.jsx)(fE, {
                  hold: gU.dropStackHold
                })]
              }, pU)
            }))
          })]
        })
      },
      vE = [{
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
      dE = UU => Array.from(UU).map((UU => ({
        type: "char",
        char: UU,
        width: 1
      }))),
      HE = function(UU) {
        return {
          type: "command",
          command: UU,
          width: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
        }
      },
      SE = [HE("page", 2), HE("otherPage"), HE("caretLeft"), HE("space", 3), HE("caretRight"), HE("close", 1.5), HE("submit", 1.5)],
      sE = [HE("page", 2), HE("otherPage"), HE("caretLeft"), HE("space", 2), HE("caretRight"), HE("newline"), HE("close", 1.5), HE("submit", 1.5)],
      yE = [
        [...dE("1234567890"), HE("backspace")], dE("qwertyuiop/"), dE("asdfghjkl'?"), [HE("shift", 2), ...dE("zxcvbnm,.")]
      ],
      kE = [
        [...dE("1234567890"), HE("backspace")], dE("!@#$%^&*()/"), dE('-_=+[]{};:"'), dE("~`|\\<>'\u20ac\xa3,.")
      ],
      FE = {
        letters: yE,
        accents: [
          [...dE("1234567890"), HE("backspace")], dE("\xe1\xe9\xed\xf3\xfa\xe0\xe8\xec\xf2\xf9\xf1"), dE("\xe2\xea\xee\xf4\xfb\xe4\xeb\xef\xf6\xfc\xe7"), [HE("shift", 2), ...dE("\xe3\xf5\xdf\u0153\u011f\u015f\u0131\xbf\xa1")]
        ],
        symbols: kE
      },
      iE = new Set(["de", "es", "fr", "it", "nl", "pt", "pt-BR", "tr", "vi"]),
      AE = (UU, RU) => "letters" === UU ? RU ? {
        page: "accents",
        otherPage: "symbols"
      } : {
        page: "symbols",
        otherPage: "accents"
      } : {
        page: "letters",
        otherPage: "accents" === UU ? "symbols" : "accents"
      },
      zE = function(UU, RU) {
        const gU = ((UU, RU) => [...FE[UU], RU ? sE : SE])(UU, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]);
        if (0 === RU) return gU;
        const tU = Math.min(2, ME(gU[0]) / RU);
        return [Array.from({
          length: RU
        }, ((UU, RU) => ({
          type: "phrase",
          phraseIndex: RU,
          width: tU
        }))), ...gU]
      },
      ME = UU => UU.reduce(((UU, RU) => UU + RU.width), 0),
      DE = UU => Math.max(...UU.map(ME)),
      LE = (UU, RU) => {
        const gU = UU[RU.row];
        let tU = (DE(UU) - ME(gU)) / 2;
        for (let pU = 0; pU < RU.col; pU++) tU += gU[pU].width;
        return tU + gU[RU.col].width / 2
      },
      NE = (UU, RU, gU) => {
        let tU = 0,
          pU = 1 / 0;
        for (let EU = 0; EU < UU[RU].length; EU++) {
          const PU = Math.abs(LE(UU, {
            row: RU,
            col: EU
          }) - gU);
          PU < pU - 1e-9 && (tU = EU, pU = PU)
        }
        return tU
      },
      lE = (UU, RU) => {
        const gU = Math.max(0, Math.min(UU.length - 1, RU.row));
        return {
          row: gU,
          col: Math.max(0, Math.min(UU[gU].length - 1, RU.col))
        }
      },
      OE = (UU, RU, gU) => "once" === UU && RU - gU <= 400 ? "caps" : "off" === UU ? "once" : "off",
      UP = (UU, RU) => "once" === UU && (UU => UU.toLowerCase() !== UU.toUpperCase())(RU) ? "off" : UU,
      RP = (UU, RU, gU) => {
        if ("symbols" === RU || "off" === gU) return UU;
        const tU = UU.toUpperCase();
        return 1 === tU.length ? tU : UU
      };
    var gP = gU(8290);
    const tP = ["controller:keyboardPhraseGg", "controller:keyboardPhraseHi", "controller:keyboardPhraseThanks", "controller:keyboardPhraseGl", "controller:keyboardPhraseBrb", "controller:keyboardPhraseYes", "controller:keyboardPhraseNo", "controller:keyboardPhraseHelp"];
    const pP = new class {
        constructor() {
          this.lastSendMs = -1 / 0
        }
        claim(UU) {
          return !(UU - this.lastSendMs < 2e3) && (this.lastSendMs = UU, !0)
        }
      },
      EP = {
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
      PP = ["hT", "nameTag"],
      TP = UU => {
        const RU = UU.target instanceof HTMLTextAreaElement && !PP.includes(UU.kind);
        return zE(UU.page, "chat" === UU.kind ? tP.length : 0, RU)
      },
      qP = UU => {
        const RU = UU.getBoundingClientRect(),
          gU = window.innerHeight,
          tU = RU.top + RU.height / 2 < gU / 2 ? "bottom" : "top",
          pU = "bottom" === tU ? gU - RU.bottom - 6 : RU.top - 6;
        return {
          placement: tU,
          maxHeightPx: Math.min(.46 * gU, Math.max(.3 * gU, pU))
        }
      },
      KP = UU => {
        (0, ft.j)(UU) ? (0, ft.c)().close(): (Ap.noteChosenStop(UU), UU.blur())
      };
    class cP {
      constructor(UU) {
        this.host = UU, this.lastShiftPressMs = -1 / 0, this.phraseTexts = [], this.phrasesFill = !1
      }
      setPhraseRow(UU, RU) {
        this.phraseTexts = UU, this.phrasesFill = RU
      }
      pressKey(UU) {
        const RU = this.host.getState(),
          gU = TP(RU),
          tU = gU[UU.row][UU.col];
        this.host.setState({
          ...RU,
          focus: UU,
          preferredX: LE(gU, UU)
        }), "char" === tU.type ? this.typeChar(tU.char) : "command" === tU.type ? this.runCommand(tU.command) : this.sendPhrase(tU.phraseIndex)
      }
      runCommand(UU) {
        const RU = this.host.getState();
        switch (UU) {
          case "backspace":
            ER(RU.target);
            break;
          case "space":
            pR(RU.target, " ");
            break;
          case "newline":
            pR(RU.target, "\n");
            break;
          case "caretLeft":
            PR(RU.target, -1);
            break;
          case "caretRight":
            PR(RU.target, 1);
            break;
          case "shift": {
            const UU = performance.now();
            this.host.setState({
              ...RU,
              shift: OE(RU.shift, UU, this.lastShiftPressMs)
            }), this.lastShiftPressMs = UU;
            break
          }
          case "page":
          case "otherPage": {
            const gU = AE(RU.page, RU.accentsFirst)[UU];
            this.host.setState({
              ...RU,
              page: gU,
              focus: lE(TP({
                ...RU,
                page: gU
              }), RU.focus)
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
            (0, ft.j)(RU.target) && (0, ft.c)().selectNextChannel()
        }
      }
      submit() {
        var UU, RU;
        const {
          target: gU
        } = this.host.getState();
        this.host.hide(), (0, ft.j)(gU) ? (0, ft.c)().submit() : (Ap.noteChosenStop(gU), null === (UU = (RU = (0, ft.f)(gU)).submit) || void 0 === UU || UU.call(RU), document.activeElement === gU && gU.blur())
      }
      close() {
        const {
          target: UU
        } = this.host.getState();
        this.host.hide(), KP(UU)
      }
      typeChar(UU) {
        const {
          target: RU,
          page: gU,
          shift: tU
        } = this.host.getState();
        pR(RU, RP(UU, gU, tU)), this.host.setState({
          ...this.host.getState(),
          shift: UP(tU, UU)
        })
      }
      sendPhrase(UU) {
        if (this.phrasesFill) {
          const {
            target: RU
          } = this.host.getState(), gU = this.phraseTexts[UU];
          gU && (RU.setSelectionRange(0, RU.value.length), pR(RU, gU))
        } else pP.claim(performance.now()) && (this.host.hide(), (0, ft.c)().sendLine(this.phraseTexts[UU]))
      }
    }
    const GP = {
        initialDelayMs: 380,
        intervalMs: 85
      },
      jP = {
        initialDelayMs: 400,
        intervalMs: 55
      };
    class uP {
      constructor(UU, RU) {
        this.host = UU, this.editor = RU, this.lastDirection = null, this.navRepeat = new CU.c((0, hU.e)(GP)), this.commandRepeats = new Map(vE.filter((UU => {
          let {
            repeats: RU
          } = UU;
          return RU
        })).map((UU => {
          let {
            command: RU
          } = UU;
          return [RU, (0, hU.e)(jP)]
        })))
      }
      reset() {
        this.navRepeat.reset();
        for (const UU of this.commandRepeats.values()) UU.reset()
      }
      onVisibleFrame(UU) {
        const RU = performance.now();
        for (const {
            command: pU,
            action: EU
          }
          of vE) {
          const gU = (0, cU.f)(EU),
            tU = this.commandRepeats.get(pU);
          if ((tU ? tU.update(UU.isHeld(gU), RU) : UU.wasPressed(gU)) && (this.editor.runCommand(pU), !this.host.getState().visible)) return
        }
        if (UU.wasPressed((0, cU.f)("keyboardType")) && (this.editor.pressKey(this.host.getState().focus), !this.host.getState().visible)) return;
        const gU = this.readNavDirection(UU);
        this.lastDirection = gU;
        const tU = this.navRepeat.update(gU, RU);
        tU && this.navigate(tU)
      }
      onHiddenFrame(UU, RU) {
        var gU;
        if (UU.wasPressed((0, cU.f)("keyboardClose"))) return void KP(RU);
        const tU = (0, cU.f)("keyboardType");
        if (UU.wasPressed(tU)) return GU.e.consumeButton(tU), void this.host.open(RU);
        const pU = this.readNavDirection(UU),
          EU = null !== pU && pU !== this.lastDirection;
        if (this.lastDirection = pU, !EU || (0, ft.j)(RU)) return;
        const PU = (null === (gU = gp()) || void 0 === gU ? void 0 : gU.root.contains(RU)) || null !== RU.closest(".EntireInventoryWrapper");
        KP(RU), PU && GU.e.handOffHeldInput()
      }
      navigate(UU) {
        const RU = this.host.getState();
        if ("Up" === UU && 0 === RU.focus.row && "chat" === RU.kind) return (0, ft.c)().stepHistory(), void this.host.setState({
          ...RU
        });
        const gU = ((UU, RU, gU, tU) => {
          if ("Left" === gU || "Right" === gU) {
            const tU = UU[RU.row].length,
              pU = (RU.col + ("Right" === gU ? 1 : -1) + tU) % tU,
              EU = {
                row: RU.row,
                col: pU
              };
            return {
              pos: EU,
              preferredX: LE(UU, EU)
            }
          }
          const pU = (RU.row + ("Down" === gU ? 1 : -1) + UU.length) % UU.length;
          return {
            pos: {
              row: pU,
              col: NE(UU, pU, tU)
            },
            preferredX: tU
          }
        })(TP(RU), RU.focus, UU, RU.preferredX);
        this.host.setState({
          ...RU,
          focus: gU.pos,
          preferredX: gU.preferredX
        })
      }
      readNavDirection(UU) {
        for (const RU of CU.w)
          if (UU.isHeld(RU)) return RU;
        return (0, CU.V)((0, CU.g)(UU.leftStick, (0, jU.h)().moveDeadzone))
      }
    }
    const CP = ["Up", "Down", "Left", "Right"],
      hP = new Set(["CapsLock", "Control", "Fn", "FnLock", "Hyper", "NumLock", "ScrollLock", "Shift", "Super"]);
    const QP = new class {
      constructor() {
        this.state = EP, this.listeners = new Set, this.ownedField = null, this.pendingChatInput = null, this.pendingChatTimeout = 0, this.savedInputMode = null, this.editor = new cP(this), this.padInput = new uP(this, this.editor)
      }
      getState() {
        return this.state
      }
      setState(UU) {
        const RU = UU.visible !== this.state.visible;
        this.state = UU;
        for (const gU of this.listeners) gU();
        RU && KU.p.yh(iU.c, UU.visible)
      }
      subscribe(UU) {
        return this.listeners.add(UU), () => {
          this.listeners.delete(UU)
        }
      }
      install() {
        const UU = GU.e.register({
            name: "keyboard",
            isActive: () => this.state.visible || lU(document.activeElement),
            onFrame: UU => {
              this.onFrame(UU)
            },
            onDeactivate: () => {
              this.padInput.reset()
            },
            wakePressActs: UU => CP.includes(UU) || !this.state.visible && UU === (0, cU.f)("keyboardType")
          }),
          RU = UU => {
            const RU = UU.target;
            lU(RU) && (RU === this.pendingChatInput || (0, uU.i)() ? this.open(RU) : this.state.visible && RU !== this.state.target && (this.ownedField = null, this.hide()))
          },
          gU = () => {
            setTimeout((() => {
              this.releaseLostField()
            }), 0)
          },
          tU = UU => {
            UU.isTrusted && this.state.visible && (UU => !UU.repeat && !hP.has(UU.key) && !(0, gP.e)(UU.key) && !/^(Audio|Media|Browser|Launch|Gamepad)/.test(UU.key))(UU) && this.hide()
          },
          pU = () => {
            this.state.visible && this.setState({
              ...this.state,
              ...qP(this.state.target)
            })
          };
        document.addEventListener("focusin", RU, !0), document.addEventListener("focusout", gU, !0), window.addEventListener("keydown", tU, !0), window.addEventListener("resize", pU);
        const EU = KU.p.subscribe(JE.c, (() => {
            this.openChat()
          })),
          PU = KU.p.subscribe(iU.d, (UU => {
            this.openForField(UU)
          }));
        return () => {
          UU(), document.removeEventListener("focusin", RU, !0), document.removeEventListener("focusout", gU, !0), window.removeEventListener("keydown", tU, !0), window.removeEventListener("resize", pU), KU.p.unsubscribe(EU), KU.p.unsubscribe(PU), this.clearPendingChat(), this.hide(), this.ownedField = null
        }
      }
      openChat() {
        const UU = (0, ft.c)();
        UU ? document.activeElement !== UU.input ? (this.clearPendingChat(), this.pendingChatInput = UU.input, this.pendingChatTimeout = window.setTimeout((() => {
          this.pendingChatInput = null
        }), 250), UU.open()) : this.open(UU.input) : console.warn("controllerOpenChat with no chat mounted")
      }
      openForField(UU) {
        lU(UU) ? (document.activeElement !== UU && UU.focus(), document.activeElement === UU && this.open(UU)) : console.warn("controllerOpenKeyboard needs an editable input or textarea", UU)
      }
      open(UU) {
        var RU;
        if (this.clearPendingChat(), this.ownedField = UU, this.state.visible && this.state.target === UU) return;
        this.restoreInputMode(), (UU => {
          OU(UU) && 0 === UU.selectionStart && 0 === UU.selectionEnd && UU.setSelectionRange(UU.value.length, UU.value.length)
        })(UU), this.savedInputMode = UU.getAttribute("inputmode"), UU.setAttribute("inputmode", "none");
        const gU = {
          ...EP,
          visible: !0,
          target: UU,
          kind: (0, ft.j)(UU) ? "chat" : null !== (RU = (0, ft.f)(UU).kind) && void 0 !== RU ? RU : null,
          accentsFirst: (tU = cE.g.get().getCurrentLanguageCode(), iE.has(tU)),
          ...qP(UU)
        };
        var tU;
        const pU = TP(gU),
          EU = ((UU, RU) => {
            for (let gU = 0; gU < UU.length; gU++) {
              const tU = UU[gU].findIndex((UU => "char" === UU.type && UU.char === RU));
              if (-1 !== tU) return {
                row: gU,
                col: tU
              }
            }
            return null
          })(pU, "q");
        this.padInput.reset(), this.setState({
          ...gU,
          focus: EU,
          preferredX: LE(pU, EU)
        })
      }
      hide() {
        this.state.visible && (this.restoreInputMode(), this.padInput.reset(), this.setState(EP))
      }
      onFrame(UU) {
        if (this.releaseLostField()) return;
        const RU = document.activeElement;
        this.state.visible ? this.padInput.onVisibleFrame(UU) : lU(RU) && this.padInput.onHiddenFrame(UU, RU)
      }
      releaseLostField() {
        const UU = this.ownedField;
        return !(null === UU || UU.isConnected && document.activeElement === UU) && (this.ownedField = null, this.hide(), !0)
      }
      clearPendingChat() {
        window.clearTimeout(this.pendingChatTimeout), this.pendingChatInput = null
      }
      restoreInputMode() {
        const {
          target: UU
        } = this.state;
        UU && (null === this.savedInputMode ? UU.removeAttribute("inputmode") : UU.setAttribute("inputmode", this.savedInputMode), this.savedInputMode = null)
      }
    };
    var eP = gU(8412);
    const WP = new Map(vE.map((UU => {
        let {
          command: RU,
          action: gU
        } = UU;
        return [RU, gU]
      }))),
      fP = {
        letters: "ABC",
        accents: "\xe0\xe9",
        symbols: "&123"
      },
      xP = {
        chat: "controller:keyboardTargetChat",
        sign: "controller:keyboardTargetSign",
        nameTag: "controller:keyboardTargetNameTag",
        book: "controller:keyboardTargetBook",
        hT: "controller:keyboardTargetBookTitle"
      },
      mP = UU => {
        const RU = (() => {
          const [, UU] = (0, vU.useReducer)((UU => UU + 1), 0);
          return UU
        })();
        (0, vU.useEffect)((() => {
          if (!UU) return;
          const gU = ["input", "select", "selectionchange", "keyup", "pointerup"];
          for (const pU of gU) UU.addEventListener(pU, RU);
          document.addEventListener("selectionchange", RU);
          const tU = new MutationObserver(RU);
          return tU.observe(UU, {
            attributeFilter: ["placeholder"]
          }), () => {
            tU.disconnect();
            for (const tU of gU) UU.removeEventListener(tU, RU);
            document.removeEventListener("selectionchange", RU)
          }
        }), [UU, RU])
      },
      IP = UU => {
        UU.preventDefault()
      },
      JP = UU => {
        "mouse" !== UU.pointerType && UU.preventDefault()
      },
      wP = () => {
        var UU;
        const {
          t: RU
        } = (0, pU.B)(), gU = (() => {
          const [UU, RU] = (0, vU.useState)(QP.getState());
          return (0, vU.useEffect)((() => QP.subscribe((() => {
            RU(QP.getState())
          }))), []), UU
        })(), tU = (0, uU.v)(), EU = (0, vU.useRef)(null);
        (0, jU.n)(), (0, uU.z)(), (0, vU.useEffect)((() => {
          const UU = QP.install(),
            RU = null;
          return () => {
            UU(), null === RU || void 0 === RU || RU()
          }
        }), []);
        const PU = (0, vU.useMemo)((() => tP.map((UU => RU(UU)))), [RU]),
          TU = gU.visible && "chat" === gU.kind ? gU.target : null;
        mP(TU);
        const qU = null !== (UU = null === TU || void 0 === TU ? void 0 : TU.value) && void 0 !== UU ? UU : "",
          KU = ((UU, RU, gU) => {
            if (!UU.startsWith("/")) return [];
            const tU = [];
            for (let pU = RU.length - 1; pU >= 0 && tU.length < gU; pU--) {
              const gU = RU[pU].trim();
              gU.startsWith(UU) && gU !== UU && !tU.includes(gU) && tU.push(gU)
            }
            return tU
          })(qU, qU.startsWith("/") ? (0, eP.g)() : [], tP.length),
          GU = qU.startsWith("/"),
          CU = GU ? tP.map(((UU, RU) => {
            var gU;
            return null !== (gU = KU[RU]) && void 0 !== gU ? gU : ""
          })) : PU;
        if ((0, vU.useEffect)((() => {
            QP.editor.setPhraseRow(CU, GU)
          })), (0, vU.useEffect)((() => {
            const UU = EU.current;
            if (UU) return UU.addEventListener("touchstart", IP, {
              passive: !1
            }), () => {
              UU.removeEventListener("touchstart", IP)
            }
          }), [gU.visible]), !gU.visible) return null;
        const hU = TP(gU),
          QU = DE(hU),
          eU = UU => "char" === UU.type ? RP(UU.char, gU.page, gU.shift) : "phrase" === UU.type ? CU[UU.phraseIndex] : (UU => {
            switch (UU) {
              case "backspace":
                return "\u232b";
              case "shift":
                return "caps" === gU.shift ? "\u21ea" : "\u21e7";
              case "page":
              case "otherPage":
                return fP[AE(gU.page, gU.accentsFirst)[UU]];
              case "space":
                return RU("controller:keyboardSpace");
              case "caretLeft":
                return "\u2190";
              case "caretRight":
                return "\u2192";
              case "newline":
                return "\u21b5";
              case "submit":
                return RU("chat" === gU.kind ? "controller:keyboardSend" : "controller:keyboardDone");
              case "close":
                return "\u2715";
              case "channel":
                return "\u21c4"
            }
          })(UU.command),
          WU = UU => {
            QP.editor.pressKey(UU)
          };
        return (0, SU.jsxs)("div", {
          ref: EU,
          className: HU()(ft.q, "top" === gU.placement ? "PadKeyboardTop" : "PadKeyboardBottom", {
            PadKeyboardMultiline: gU.target instanceof HTMLTextAreaElement
          }),
          style: {
            "--pad-keyboard-rows": hU.length,
            "--pad-keyboard-height": `${gU.maxHeightPx}px`
          },
          onPointerDown: JP,
          onMouseDown: IP,
          children: [(0, SU.jsx)(nP, {
            target: gU.target,
            label: gU.kind ? RU(xP[gU.kind]) : gU.target.placeholder || RU("controller:keyboardTargetText")
          }), (0, SU.jsx)("div", {
            className: "PadKeyboardRows",
            children: hU.map(((UU, RU) => (0, SU.jsx)("div", {
              className: HU()("PadKeyboardRow", {
                PadKeyboardPhraseRow: "phrase" === UU[0].type
              }),
              children: UU.map(((UU, pU) => {
                const EU = tU && gU.focus.row === RU && gU.focus.col === pU,
                  PU = "command" === UU.type ? WP.get(UU.command) : void 0;
                return (0, SU.jsx)("div", {
                  className: "PadKeyboardKeySlot",
                  style: {
                    width: UU.width / QU * 100 + "%"
                  },
                  children: (0, SU.jsxs)("div", {
                    className: HU()("PadKeyboardKey", {
                      PadKeyboardKeyFocused: EU,
                      PadKeyboardKeyCommand: "command" === UU.type,
                      PadKeyboardKeyPhrase: "phrase" === UU.type,
                      PadKeyboardKeyActive: "command" === UU.type && "shift" === UU.command && "off" !== gU.shift,
                      PadKeyboardKeySubmit: "command" === UU.type && "submit" === UU.command
                    }),
                    role: "button",
                    onClick: () => {
                      WU({
                        row: RU,
                        col: pU
                      })
                    },
                    onTouchEnd: UU => {
                      var gU, tU;
                      UU.preventDefault(), gU = UU.changedTouches[0], tU = UU.currentTarget.getBoundingClientRect(), gU && gU.clientX >= tU.left && gU.clientX <= tU.right && gU.clientY >= tU.top && gU.clientY <= tU.bottom && WU({
                        row: RU,
                        col: pU
                      })
                    },
                    children: [(0, SU.jsx)("span", {
                      className: "PadKeyboardKeyLabel",
                      children: eU(UU)
                    }), tU && PU && (0, SU.jsx)(hE, {
                      className: "PadKeyboardKeyGlyph",
                      glyph: (0, cU.f)(PU)
                    })]
                  })
                }, pU)
              }))
            }, RU)))
          })]
        })
      },
      nP = UU => {
        let {
          target: RU,
          label: gU
        } = UU;
        mP(RU);
        const tU = (0, vU.useRef)(null),
          pU = (0, vU.useRef)(null),
          EU = RU instanceof HTMLTextAreaElement;
        (0, vU.useLayoutEffect)((() => {
          const UU = tU.current,
            RU = pU.current;
          EU ? UU.scrollTop = RU.offsetTop - UU.clientHeight / 2 : UU.scrollLeft = RU.offsetLeft - UU.clientWidth / 2
        }));
        const {
          value: PU,
          start: TU,
          end: qU
        } = UR(RU), KU = "password" === RU.type ? "\u2022".repeat(PU.length) : PU;
        return (0, SU.jsxs)("div", {
          className: "PadKeyboardPreview",
          children: [(0, SU.jsx)("div", {
            className: "PadKeyboardPreviewLabel SmallTextBold",
            children: gU
          }), (0, SU.jsxs)("div", {
            ref: tU,
            className: HU()("PadKeyboardPreviewText", {
              PadKeyboardPreviewMultiline: EU
            }),
            children: [(0, SU.jsx)("span", {
              children: KU.slice(0, TU)
            }), (0, SU.jsx)("span", {
              ref: pU,
              className: "PadKeyboardCaret"
            }), TU !== qU && (0, SU.jsx)("span", {
              className: "PadKeyboardPreviewSelection",
              children: KU.slice(TU, qU)
            }), (0, SU.jsx)("span", {
              children: KU.slice(qU)
            }), 0 === KU.length && RU.placeholder && RU.placeholder !== gU && (0, SU.jsx)("span", {
              className: "PadKeyboardPreviewPlaceholder",
              children: RU.placeholder
            })]
          })]
        })
      };
    var bP = gU(1362),
      oP = gU(3123);
    const ZP = function() {
        for (var UU = arguments.length, RU = new Array(UU), gU = 0; gU < UU; gU++) RU[gU] = arguments[gU];
        return RU.map(cU.f)
      },
      aP = (UU, RU) => {
        const gU = vt(UU);
        return gU ? [{
          glyphs: [gU],
          labelKey: RU
        }] : []
      },
      YP = [".BottomMiddleElements", ".BottomLeftElements > *", ".BottomRightElements > *", ".MiddleTextBottom .MiddleText"],
      BP = "--pad-hint-bar-clearance",
      VP = "[data-pad-hint-bar-avoid]",
      rP = UU => {
        const RU = [];
        for (const gU of UU) KR(gU) && RU.push(gU.getBoundingClientRect());
        return RU
      },
      XP = UU => {
        if (!UU) return null;
        const RU = gp(),
          gU = RU ? rP(((UU, RU) => {
            const gU = UU.closest(VP);
            return gU ? [gU] : ("popup" === RU ? document : UU).querySelectorAll(VP)
          })(RU.root, RU.layer.kind)) : [],
          tU = !RU || RU.root.hasAttribute("data-pad-shows-hud");
        if (((0, oP.l)(null === RU || void 0 === RU ? void 0 : RU.layer.kind, (0, oP.m)()) || tU) && gU.push(...rP(document.querySelectorAll(YP.join(",")))), 0 === gU.length) return null;
        const {
          width: pU,
          height: EU
        } = UU.getBoundingClientRect(), PU = window.innerHeight - 8, TU = (0, oP.u)(PU, {
          width: pU,
          height: EU
        }, window.innerWidth / 2, gU, 8);
        return TU === PU ? null : Math.round(window.innerHeight - TU)
      },
      vP = UU => {
        const RU = document.documentElement.style,
          gU = UU ? `${Math.round(window.innerHeight-UU.getBoundingClientRect().top)}px` : "";
        RU.getPropertyValue(BP) !== gU && (gU ? RU.setProperty(BP, gU) : RU.removeProperty(BP))
      },
      dP = () => {
        const {
          t: UU
        } = (0, pU.B)(), {
          hideButtonHints: RU
        } = (0, jU.n)(), gU = (0, uU.v)(), [tU, EU] = (0, vU.useState)(!1), [PU, KU] = (0, vU.useState)([]), [hU, QU] = (0, vU.useState)(null), eU = (0, vU.useRef)(null), WU = (0, vU.useRef)(null);
        (0, KE.e)(iU.c, (UU => {
          EU(UU)
        })), (0, KE.e)(oP.q, (() => {
          var UU;
          null === (UU = WU.current) || void 0 === UU || UU.call(WU)
        }));
        const fU = gU && !RU && !tU;
        return (0, vU.useEffect)((() => {
          if (!fU) return;
          let UU = null;
          const RU = () => {
            const RU = (() => {
                var UU;
                const RU = GU.e.getActiveConsumerName(),
                  gU = (0, oP.h)();
                if (gU) {
                  const UU = (0, cU.f)(gU),
                    RU = "emoteWheel" === gU && "wheel" === (0, jU.h)().emoteButton || !(0, CU.C)(GU.e.getLastFrame().values, UU) ? {
                      glyphs: ZP("menuConfirm"),
                      labelKey: "controller:menusSelect"
                    } : {
                      glyphs: [UU],
                      labelKey: "controller:wheelReleaseToPick"
                    };
                  return [{
                    glyphs: [(0, cU.u)(UU)],
                    labelKey: "controller:wheelChoose"
                  }, RU, {
                    glyphs: ZP("menuBack"),
                    labelKey: "controller:wheelClose"
                  }]
                }
                const tU = gp();
                if (!tU || "focus" !== RU && "cursor" !== RU) return (0, oP.e)(cU.f);
                const pU = [],
                  EU = {
                    glyphs: ZP("menuBack"),
                    labelKey: "controller:menusBack"
                  },
                  PU = vR(tU.root),
                  TU = PU ? !cR(PU) : Boolean(tU.layer.close),
                  KU = !PU && tU.layer.closeLabelKey ? tU.layer.closeLabelKey : EU.labelKey,
                  uU = TU ? [{
                    ...EU,
                    labelKey: KU
                  }] : [],
                  hU = It(tU.layer.kind) ? [{
                    glyphs: ZP("chat"),
                    labelKey: "controller:menusQuickChat"
                  }] : [];
                if ("cursor" === RU) return pU.push({
                  glyphs: ZP("menuConfirm"),
                  labelKey: "controller:menusClick"
                }), pU.push({
                  glyphs: ZP("menuSecondary"),
                  labelKey: "controller:menusRightClick"
                }), pU.push(...uU), pU.push(...hU), pU.push({
                  glyphs: ["RightStick"],
                  labelKey: "controller:menusScroll"
                }), Wp() && pU.push({
                  glyphs: ZP("menuToggleCursor"),
                  labelKey: "controller:menusFocusMode"
                }), pU;
                const QU = Ap.getFocused();
                QU && (0, Jp.b)(QU) ? pU.push({
                  glyphs: ["Left", "Right"],
                  labelKey: "controller:menusAdjust"
                }) : QU && rR(QU) ? pU.push({
                  glyphs: [],
                  labelKey: "controller:menusUseMouse"
                }) : pU.push({
                  glyphs: ZP("menuConfirm"),
                  labelKey: "controller:menusSelect"
                });
                const eU = QU ? null === (UU = pt(QU)) || void 0 === UU ? void 0 : UU.dataset.padSecondary : void 0;
                eU && pU.push({
                  glyphs: ZP("menuSecondary"),
                  labelKey: eU
                }), pU.push(...null !== QU && void 0 !== QU && QU.closest("[data-pad-friends-column]") ? [EU] : uU), pU.push(...hU);
                const WU = "home" === tU.layer.kind;
                St(tU.root) || !bt(tU.root) && !st(tU) ? WU && pU.push({
                  glyphs: ZP("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusRows"
                }) : pU.push({
                  glyphs: ZP("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusTabs"
                }), WU && (pU.push(...aP("inventory", "controller:menusFriends")), eU || pU.push({
                  glyphs: ZP("menuSecondary"),
                  labelKey: "controller:menusSearch"
                }), pU.push(...aP("pause", "controller:menusSettings")), pU.push(...aP("leaderboard", "controller:menusNotifications")));
                const fU = qU.b.get("openEverythingMenuName");
                return "inGame" === qU.b.get("gameState") && "popup" !== tU.layer.kind && null !== fU && ((0, Ut.k)(fU) ? pU.push(...aP("leaderboard", "controller:menusClose")) : fU !== Og.n.LOBBY_LEADERBOARD && pU.push(...aP("leaderboard", "controller:menusLobby"))), pU.push({
                  glyphs: ZP("menuToggleCursor"),
                  labelKey: "controller:menusCursorMode"
                }), pU
              })(),
              gU = XP(eU.current),
              tU = ((UU, RU) => `${UU.map((UU=>`${UU.glyphs.join("+")}:${UU.labelKey}`)).join("|")}@${RU}`)(RU, gU);
            tU !== UU && (UU = tU, (0, TU.unstable_batchedUpdates)((() => {
              KU(RU), QU(gU)
            }))), vP(eU.current)
          };
          RU(), WU.current = RU;
          const gU = requestAnimationFrame(RU),
            tU = setInterval(RU, 150);
          return () => {
            WU.current = null, cancelAnimationFrame(gU), clearInterval(tU), vP(null)
          }
        }), [fU]), (0, vU.useLayoutEffect)((() => {
          if (!fU) return;
          if (0 === PU.length) return void vP(null);
          const UU = XP(eU.current);
          UU === hU ? vP(eU.current) : QU(UU)
        }), [fU, PU, hU]), fU && 0 !== PU.length ? (0, SU.jsx)("div", {
          ref: eU,
          className: "PadButtonHintBar SmallTextBold",
          style: null === hU ? void 0 : {
            bottom: hU
          },
          "aria-hidden": !0,
          children: PU.map((RU => (0, SU.jsxs)("div", {
            className: "PadButtonHint",
            children: [RU.glyphs.map((UU => (0, SU.jsx)(hE, {
              glyph: UU,
              className: "PadButtonHintGlyph"
            }, UU))), (0, SU.jsx)("span", {
              children: UU(RU.labelKey)
            })]
          }, RU.labelKey)))
        }) : null
      },
      HP = [TR, "label", "[data-pad-slider]"].join(","),
      SP = "data-pad-cursor-probe",
      sP = UU => {
        var RU;
        const gU = (UU => {
          const RU = [];
          for (let tU = UU; tU && tU !== document.body && tU !== document.documentElement && (RU.push(tU), !(RU.length > 8)); tU = tU.parentElement);
          const gU = document.documentElement.classList.contains(uU.q) ? RU[RU.length - 1] : void 0;
          null === gU || void 0 === gU || gU.setAttribute(SP, "");
          try {
            return RU.map((UU => ({
              element: UU,
              cursor: getComputedStyle(UU).cursor
            })))
          } finally {
            null === gU || void 0 === gU || gU.removeAttribute(SP)
          }
        })(UU);
        if ("pointer" !== (null === (RU = gU[0]) || void 0 === RU ? void 0 : RU.cursor)) return null;
        let tU = 0;
        for (; tU + 1 < gU.length && "pointer" === gU[tU + 1].cursor;) tU++;
        return gU[tU].element
      },
      yP = (UU, RU, gU, tU) => {
        const pU = tU.root.contains(UU) ? tU.root : null;
        for (let EU = UU; EU && EU !== document.body && EU !== document.documentElement; EU = EU.parentElement) {
          if (EU instanceof HTMLElement && bU(EU, RU) && BU(EU, RU, gU)) return EU;
          if (EU === pU) break
        }
        return "home" === tU.layer.kind || "gamePage" === tU.layer.kind ? ((UU, RU) => {
          const gU = document.scrollingElement;
          return gU instanceof HTMLElement && ![document.documentElement, document.body].some((RU => {
            const gU = getComputedStyle(RU),
              tU = "y" === UU ? gU.overflowY : gU.overflowX;
            return "hidden" === tU || "clip" === tU
          })) && BU(gU, UU, RU) ? gU : null
        })(RU, gU) : null
      };
    const kP = new class {
        constructor() {
          this.state = {
            x: 0,
            y: 0,
            speedRamp: 0
          }, this.hasPosition = !1, this.active = !1, this.hidden = !1, this.hit = null, this.interactive = null, this.magnet = null, this.lastHitTestMs = -1 / 0, this.press = null, this.draggedSlider = null, this.repeatStop = null, this.repeatKey = null, this.repeated = !1, this.confirmRepeat = (0, hU.e)(CU.p), this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.layerRoot = null, this.layerOrder = 0, this.layerPoints = new WeakMap, this.page = null, this.pendingPageStart = null
        }
        install() {
          const UU = GU.e.register({
              name: "cursor",
              isActive: () => "cursor" === fp(),
              onFrame: UU => {
                this.onFrame(UU)
              },
              onDeactivate: () => {
                this.deactivate()
              },
              wakePressActs: UU => (0, GU.i)(UU) || UU === (0, cU.f)("menuConfirm") && XR((0, uU.c)())
            }),
            RU = (0, Mt.k)((UU => {
              const RU = UU.getRoot();
              RU && this.layerPoints.delete(RU), RU === this.layerRoot && (this.layerRoot = null)
            })),
            gU = KU.p.subscribe("appManagerUpdated|activeInputDevice", (UU => {
              "gamepad" !== UU && this.active && !this.hidden && this.hide()
            }));
          return () => {
            UU(), RU(), KU.p.unsubscribe(gU), this.deactivate()
          }
        }
        getHighlighted() {
          return this.isVisible() ? this.interactive : null
        }
        isVisible() {
          return this.active && !this.hidden && (0, uU.i)()
        }
        getPoint() {
          return {
            x: this.state.x,
            y: this.state.y
          }
        }
        hide() {
          this.hidden = !0, this.cancelPress(), this.secondaryArmed = !1, this.clearHover(), this.yh()
        }
        activate(UU) {
          this.active = !0, this.hidden = !1;
          const RU = hp();
          !RU || RU.root && RU.root !== UU.root ? this.jumpTo(this.hasPosition ? this.getPoint() : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          }) : (this.setLayer(UU), this.jumpTo(RU.point))
        }
        jumpTo(UU) {
          this.state = {
            x: UU.x,
            y: UU.y,
            speedRamp: 0
          }, this.hasPosition = !0, this.lastHitTestMs = -1 / 0
        }
        deactivate() {
          this.active && (this.active = !1, this.page = null, this.pendingPageStart = null, this.cancelPress(), this.clearHover(), this.draggedSlider = null, this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.yh())
        }
        onFrame(UU) {
          const RU = gp();
          if (!RU) return;
          if (this.active || this.activate(RU), this.followPage(RU)) return;
          this.followLayer(RU);
          const gU = UU.wokeDevice ? (0, uU.c)() : null;
          if (gU && this.jumpTo(gU), !(0, uU.i)()) return void this.hide();
          const tU = (0, cU.f)("menuToggleCursor");
          if (UU.wasPressed(tU)) return GU.e.consumeButton(tU), void Cp(this.getHandoff(null));
          if (this.handBackToFocus(UU)) return;
          const pU = (0, cU.f)("menuConfirm"),
            EU = (0, cU.f)("menuSecondary");
          if (UU.wasPressed((0, cU.f)("menuBack"))) return BR(RU.root) || dR(RU.root) || tp(), void this.yh();
          if (Ft(null, UU, RU)) return UU.wasReleased(pU) && this.press && (this.updateHit(!1), this.updateConfirm(UU, pU)), void this.yh();
          if (document.pointerLockElement) return void this.hide();
          const PU = xp() ? {
              x: 0,
              y: 0
            } : (UU => {
              const RU = (UU, RU) => (UU ? 1 : 0) - (RU ? 1 : 0);
              return {
                x: RU(UU.isHeld("Right"), UU.isHeld("Left")),
                y: RU(UU.isHeld("Down"), UU.isHeld("Up"))
              }
            })(UU),
            TU = (0, jU.h)().moveDeadzone,
            qU = ((UU, RU) => {
              const gU = (0, CU.g)(UU, xU(RU));
              return Math.hypot(gU.x, gU.y)
            })(UU.leftStick, TU) > 0 || 0 !== PU.x || 0 !== PU.y;
          if (this.hidden) {
            const RU = UU.wasPressed(pU),
              gU = UU.wasPressed(EU);
            if (!qU && !JU(UU.rightStick) && !RU && !gU && !UU.wokeDevice) return void this.yh();
            if (this.hidden = !1, this.updateHit(!1), RU || gU) return RU && (this.press = {
              kind: "ignored"
            }, UU.wokeDevice && this.beginRepeat()), this.secondaryArmed = !1, void this.yh()
          }
          this.movePendingPageStart(qU);
          const KU = this.getPoint();
          this.state = IU(this.state, {
            stick: UU.leftStick,
            moveDeadzone: TU,
            dpad: PU,
            dtMs: UU.dtMs,
            cursorSpeedPercent: (0, jU.h)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: this.getAssistContext()
          });
          const hU = this.state.x !== KU.x || this.state.y !== KU.y,
            QU = [pU, EU].some((RU => UU.wasPressed(RU) || UU.wasReleased(RU)));
          (hU || QU || performance.now() - this.lastHitTestMs >= 100) && this.updateHit(hU), this.updateConfirm(UU, pU), this.updateSecondary(UU, EU), this.updateScroll(UU, RU), this.yh()
        }
        followPage(UU) {
          const RU = "home" === UU.layer.kind || "gamePage" === UU.layer.kind,
            gU = this.page;
          if (this.page = RU ? {
              key: (0, Mt.p)(UU.layer),
              root: UU.root
            } : null, !this.page || !gU || gU.root !== UU.root || gU.key === this.page.key) return !1;
          if (this.cancelPress(), this.secondaryArmed = !1, this.setLayer(UU), "hybrid" === jp()) return Kp = null, Tp = null, cp.lock(), !0;
          const {
            key: tU
          } = this.page;
          return this.pendingPageStart = {
            root: UU.root,
            key: tU,
            returning: Ap.notePageEnteredByCursor(tU),
            enteredAtMs: performance.now()
          }, !1
        }
        movePendingPageStart(UU) {
          const RU = this.pendingPageStart;
          if (!RU) return;
          if (UU || RU.root !== this.layerRoot) return void(this.pendingPageStart = null);
          const gU = RU.returning ? Ap.recallStop(RU.root, RU.key) : null;
          if (!gU && RU.returning && performance.now() - RU.enteredAtMs < 1e3) return;
          const tU = null !== gU && void 0 !== gU ? gU : Ap.pickInitial(RU.root, {
            includeDisabled: !0,
            waitForContent: !0,
            enteredAtMs: RU.enteredAtMs
          });
          tU && (this.pendingPageStart = null, this.jumpTo(xR(tU)))
        }
        setLayer(UU) {
          this.layerRoot = UU.root, this.layerOrder = UU.order
        }
        followLayer(UU) {
          var RU;
          if (UU.root === this.layerRoot) return;
          null !== (RU = this.layerRoot) && void 0 !== RU && RU.isConnected && this.layerPoints.set(this.layerRoot, this.getPoint()), this.cancelPress(), this.draggedSlider = null, this.secondaryArmed = !1;
          const gU = this.layerPoints.get(UU.root),
            tU = gU && UU.order <= this.layerOrder ? gU : Ap.getLayerStartPoint(UU.root);
          this.setLayer(UU), this.jumpTo(tU)
        }
        getHandoff(UU) {
          var RU;
          return {
            point: this.getPoint(),
            element: null !== (RU = this.interactive) && void 0 !== RU ? RU : this.findDraggedSliderNearby(),
            direction: UU
          }
        }
        findDraggedSliderNearby() {
          const UU = this.draggedSlider;
          if (null === UU || void 0 === UU || !UU.isConnected) return null;
          const RU = UU.getBoundingClientRect(),
            {
              y: gU
            } = this.getPoint();
          return gU >= RU.top - 40 && gU <= RU.bottom + 40 ? UU : null
        }
        handBackToFocus(UU) {
          if (!xp()) return !1;
          const RU = CU.w.find((RU => UU.wasPressed(RU)));
          return !!RU && (gU = this.getHandoff(RU), Kp = Ep(gU), Tp = null, cp.lock(), GU.e.handOffHeldInput(), !0);
          var gU
        }
        getAssistContext() {
          const UU = this.interactive;
          if (null === UU || void 0 === UU || !UU.isConnected) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const RU = UU.getBoundingClientRect();
          if (RU.width > .4 * window.innerWidth || RU.height > .4 * window.innerHeight) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const gU = (0, jU.h)().cursorMagnetism && !(0, AU.b)(UU) && !UU.closest("[data-pad-slider]"),
            tU = this.magnet && this.magnet !== UU && this.magnet.isConnected ? this.magnet.getBoundingClientRect() : RU;
          return {
            overInteractive: !0,
            magnetTarget: gU ? {
              x: tU.left + tU.width / 2,
              y: tU.top + tU.height / 2
            } : null
          }
        }
        updateHit(UU) {
          this.lastHitTestMs = performance.now();
          const RU = this.getPoint(),
            gU = document.elementFromPoint(RU.x, RU.y),
            tU = gU && !(0, eU.q)(gU) && (UU => {
              var RU;
              const gU = gp();
              return !(gU && !gU.root.contains(UU) && !UU.closest(".tooltip-container")) || !(null !== (RU = document.getElementById("root")) && void 0 !== RU && RU.contains(UU))
            })(gU) ? gU : null;
          if (tU !== this.hit) return bR(this.hit, tU, RU), this.hit = tU, void this.setInteractive(tU ? (UU => {
            const RU = UU.closest(HP);
            if (RU) {
              var gU, tU;
              const UU = null !== (gU = null === (tU = RU.parentElement) || void 0 === tU ? void 0 : tU.closest("[data-pad-focusable]")) && void 0 !== gU ? gU : RU;
              return cR(UU) ? {
                element: null,
                magnet: null
              } : {
                element: UU,
                magnet: RU
              }
            }
            const pU = sP(UU);
            return {
              element: pU,
              magnet: pU
            }
          })(tU) : {
            element: null,
            magnet: null
          });
          UU && tU && bR(tU, tU, RU)
        }
        setInteractive(UU) {
          let {
            element: RU,
            magnet: gU
          } = UU;
          this.interactive = RU, this.magnet = gU
        }
        clearHover() {
          this.hit && bR(this.hit, null, this.getPoint()), this.hit = null, this.setInteractive({
            element: null,
            magnet: null
          })
        }
        beginPress() {
          const UU = this.hit;
          if (!UU || rR(UU)) return {
            kind: "ignored"
          };
          const RU = (0, Jp.b)(UU),
            gU = UU.closest("[data-pad-slider]");
          return RU && gU ? {
            kind: "slider",
            slider: gU,
            adjuster: RU
          } : (JR(UU, this.getPoint()), {
            kind: "pointer",
            target: UU
          })
        }
        applySliderFraction(UU) {
          var RU;
          const gU = UU.slider.getBoundingClientRect(),
            tU = gU.height > gU.width,
            pU = null === (RU = UU.slider.querySelector("[data-pad-slider-handle]")) || void 0 === RU ? void 0 : RU.getBoundingClientRect(),
            EU = pU ? tU ? pU.height : pU.width : 0,
            PU = (tU ? gU.height : gU.width) - EU;
          if (PU <= 0) return;
          const TU = tU ? gU.bottom - EU / 2 - this.state.y : this.state.x - gU.left - EU / 2;
          UU.adjuster.setFraction(Math.max(0, Math.min(1, TU / PU)))
        }
        updateConfirm(UU, RU) {
          UU.wasPressed(RU) && (this.press = UU.wokeDevice ? {
            kind: "ignored"
          } : this.beginPress(), this.draggedSlider = "slider" === this.press.kind ? this.press.slider : null, this.beginRepeat());
          const gU = this.press;
          if (!gU) return;
          if (UU.isHeld(RU)) return "slider" === gU.kind && this.applySliderFraction(gU), void this.updateRepeat();
          this.press = null;
          const tU = this.repeated;
          if (this.endRepeat(), !UU.wasReleased(RU)) return void this.endPressWithoutClick(gU);
          const pU = this.getPoint(),
            EU = this.hit;
          if ("slider" === gU.kind && gU.adjuster.endDrag(), "pointer" === gU.kind) {
            const UU = null !== EU && void 0 !== EU ? EU : gU.target.isConnected ? gU.target : null;
            UU && wR(UU, pU);
            const RU = EU && gU.target.isConnected && !tU ? ((UU, RU) => {
              for (let gU = UU; gU; gU = gU.parentElement)
                if (gU.contains(RU)) return gU;
              return null
            })(gU.target, EU) : null;
            RU && (Ap.noteCursorActivation(RU), (0, eU.g)(RU, new MouseEvent("click", mR(pU, 0, 0))), VR(RU), fR(RU) && oR(RU))
          }
        }
        beginRepeat() {
          var UU, RU, gU;
          const tU = null !== (UU = null === (RU = this.hit) || void 0 === RU ? void 0 : RU.closest("[data-pad-repeat]")) && void 0 !== UU ? UU : null;
          this.repeatStop = tU, this.repeatKey = null !== (gU = null === tU || void 0 === tU ? void 0 : tU.getAttribute("data-pad-repeat")) && void 0 !== gU ? gU : null, this.repeated = !1, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now())
        }
        updateRepeat() {
          const UU = this.repeatStop;
          if (!UU) return;
          const RU = this.hit;
          UU.isConnected && !cR(UU) && UU.getAttribute("data-pad-repeat") === this.repeatKey && RU && UU.contains(RU) ? UU.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.repeated = !0, Ap.noteCursorActivation(UU), (0, eU.g)(UU, new MouseEvent("click", mR(this.getPoint(), 0, 0)))) : this.repeatStop = null
        }
        endRepeat() {
          this.repeatStop = null, this.repeated = !1
        }
        endPressWithoutClick(UU) {
          "slider" === UU.kind && UU.adjuster.endDrag(), "pointer" === UU.kind && UU.target.isConnected && wR(UU.target, this.getPoint())
        }
        cancelPress() {
          this.endRepeat(), this.press && (this.endPressWithoutClick(this.press), this.press = null)
        }
        updateSecondary(UU, RU) {
          UU.wasPressed(RU) && (this.secondaryArmed = null !== this.hit), this.secondaryArmed && !UU.isHeld(RU) && (this.secondaryArmed = !1, UU.wasReleased(RU) && this.hit && nR(this.hit, this.getPoint(), 2))
        }
        updateScroll(UU, RU) {
          const gU = wU(UU.rightStick, UU.dtMs);
          if (0 === gU.x && 0 === gU.y) return void(this.scrollRemainder = {
            x: 0,
            y: 0
          });
          this.scrollRemainder = {
            x: this.scrollRemainder.x + gU.x,
            y: this.scrollRemainder.y + gU.y
          };
          const tU = Math.trunc(this.scrollRemainder.x),
            pU = Math.trunc(this.scrollRemainder.y);
          this.scrollRemainder = {
            x: this.scrollRemainder.x - tU,
            y: this.scrollRemainder.y - pU
          };
          const EU = this.hit;
          if (!EU) return;
          let PU = !1;
          if (0 !== pU) {
            const UU = yP(EU, "y", pU > 0 ? 1 : -1, RU);
            UU && (UU.scrollBy({
              top: pU,
              behavior: "instant"
            }), PU = !0)
          }
          if (0 !== tU) {
            const UU = yP(EU, "x", tU > 0 ? 1 : -1, RU);
            UU && (UU.scrollBy({
              left: tU,
              behavior: "instant"
            }), PU = !0)
          }
          PU && (this.lastHitTestMs = -1 / 0)
        }
        yh() {
          sR.set({
            x: this.state.x,
            y: this.state.y,
            visible: this.isVisible(),
            pressed: null !== this.press && "ignored" !== this.press.kind
          })
        }
      },
      FP = () => {
        const UU = (0, vU.useMemo)((() => new kU), []),
          RU = (0, uU.v)();
        return (0, vU.useEffect)((() => {
          if (!RU) return;
          let gU = 0,
            tU = {
              of: null,
              atMs: 0,
              list: []
            };
          const pU = document.getElementsByClassName(mp),
            EU = UU => {
              for (const RU of [...pU]) RU !== UU && RU.classList.remove(mp)
            },
            PU = () => {
              var RU;
              gU = requestAnimationFrame(PU);
              const pU = (() => {
                const UU = Ap.getFocused();
                if (Ap.isActive() && null !== UU && void 0 !== UU && UU.isConnected) return UU;
                const RU = kP.getHighlighted();
                return null !== RU && void 0 !== RU && RU.isConnected ? RU : null
              })();
              EU(pU), pU && !pU.classList.contains(mp) && pU.classList.add(mp);
              const TU = null !== (RU = null === pU || void 0 === pU ? void 0 : pU.closest("[data-pad-reticle-box]")) && void 0 !== RU ? RU : pU;
              UU.show(TU ? ((UU, RU) => {
                let gU = UU.left,
                  tU = UU.top,
                  pU = UU.right,
                  EU = UU.bottom;
                for (const PU of RU) {
                  if (!PU) continue;
                  const UU = rU(PU);
                  gU = Math.max(gU, UU.left), tU = Math.max(tU, UU.top), pU = Math.min(pU, UU.right), EU = Math.min(EU, UU.bottom)
                }
                return pU <= gU || EU <= tU ? null : {
                  left: gU,
                  top: tU,
                  width: pU - gU,
                  height: EU - tU
                }
              })(TU.getBoundingClientRect(), (UU => {
                const RU = performance.now();
                return (tU.of !== UU || RU - tU.atMs > 500) && (tU = {
                  of: UU,
                  atMs: RU,
                  list: [oU(UU, "y"), oU(UU, "x")]
                }), tU.list
              })(TU)) : null)
            };
          return gU = requestAnimationFrame(PU), () => {
            cancelAnimationFrame(gU), EU(null), UU.hide()
          }
        }), [RU, UU]), (0, SU.jsx)(FU, {
          placer: UU,
          className: "PadFocusRing"
        })
      },
      iP = (UU, RU) => {
        UU.style.transform = `translate3d(${RU.x}px, ${RU.y}px, 0)`, UU.classList.toggle("Visible", RU.visible), UU.classList.toggle("Pressed", RU.pressed)
      },
      AP = () => {
        const UU = (0, vU.useRef)(null);
        return (0, vU.useEffect)((() => {
          const RU = sR.subscribe((RU => {
            UU.current && iP(UU.current, RU)
          }));
          return UU.current && iP(UU.current, sR.get()), RU
        }), []), (0, SU.jsx)("div", {
          ref: UU,
          className: "PadCursorView",
          "aria-hidden": "true",
          children: (0, SU.jsx)("div", {
            className: "PadCursorGlyph",
            children: "+"
          })
        })
      },
      zP = "#ncmp__modal.ncmp__active",
      MP = [{
        id: "nitro-consent-banner",
        find: () => document.querySelector(zP) ? null : document.querySelector("#ncmp__tool > .ncmp__banner.ncmp__active"),
        startSelectors: ["[data-ncmp-cmd='reject']", "[data-ncmp-cmd='showModal']"]
      }, {
        id: "nitro-consent-modal",
        find: () => document.querySelector(zP),
        startSelectors: ["[data-ncmp-cmd='reject']"]
      }, {
        id: "google-consent",
        find: () => document.querySelector(".fc-consent-root"),
        startSelectors: [".fc-cta-do-not-consent", ".fc-cta-manage-options"]
      }],
      DP = "PadOverThirdParty",
      LP = new Set(MP.map((UU => UU.id))),
      NP = () => {
        const UU = MP.map((UU => {
            let {
              id: RU,
              find: gU,
              startSelectors: tU
            } = UU;
            return (0, Mt.l)({
              id: RU,
              kind: "popup",
              getRoot: () => {
                const UU = gU(),
                  RU = UU ? ((UU, RU) => {
                    var gU;
                    for (const tU of RU) {
                      const RU = UU.querySelector(tU);
                      if (RU) return RU
                    }
                    return null !== (gU = [...UU.querySelectorAll("button")].find((UU => !UU.matches(".fc-cta-consent, [data-ncmp-cmd='save']")))) && void 0 !== gU ? gU : null
                  })(UU, tU) : null;
                if (UU && RU && !RU.hasAttribute("data-pad-default-focus")) {
                  for (const RU of UU.querySelectorAll("[data-pad-default-focus]")) RU.removeAttribute("data-pad-default-focus");
                  for (const RU of UU.querySelectorAll("[data-pad-hint-bar-avoid]")) RU.removeAttribute("data-pad-hint-bar-avoid");
                  RU.setAttribute("data-pad-default-focus", ""), ((UU, RU) => {
                    let gU = UU;
                    for (let tU = UU.parentElement; tU && RU.contains(tU) && !(tU.getBoundingClientRect().height >= window.innerHeight / 2); tU = tU.parentElement) gU = tU;
                    return gU
                  })(RU, UU).setAttribute("data-pad-hint-bar-avoid", "")
                }
                return UU
              },
              close: null,
              memoryKey: null
            })
          })),
          RU = document.documentElement,
          gU = PU.g.onFrame((() => {
            const UU = (0, uU.i)() ? gp() : null,
              gU = !!UU && (tU = UU.layer, LP.has(tU.id));
            var tU;
            RU.classList.contains(DP) !== gU && RU.classList.toggle(DP, gU)
          }));
        return () => {
          for (const RU of UU) RU();
          gU(), RU.classList.remove(DP)
        }
      },
      lP = "PadLargePointer",
      OP = () => {
        (0, vU.useEffect)((() => {
          const UU = (0, eU.n)(document.body),
            RU = Ap.install(),
            gU = kP.install(),
            tU = NP();
          return () => {
            UU(), RU(), gU(), tU()
          }
        }), []);
        const {
          largePointer: UU
        } = (0, jU.n)(), RU = (0, bP.o)() && UU;
        return (0, vU.useEffect)((() => {
          if (RU) return document.documentElement.classList.add(lP), () => {
            document.documentElement.classList.remove(lP)
          }
        }), [RU]), (0, TU.createPortal)((0, SU.jsxs)(SU.Fragment, {
          children: [(0, SU.jsx)(dP, {}), (0, SU.jsx)(FP, {}), (0, SU.jsx)(AP, {})]
        }), document.body)
      };
    var UT = gU(8425),
      RT = gU(8442),
      gT = gU(8431);
    gU(8444);
    const tT = (UU, RU) => {
        const [gU, tU] = (0, vU.useState)(!1), [pU, EU] = (0, vU.useState)(null), PU = (0, vU.useRef)(null), TU = (0, vU.useCallback)((UU => {
          PU.current = UU, EU(UU)
        }), []), qU = (0, vU.useCallback)((() => {
          tU(!1), TU(null)
        }), [TU]), cU = (0, vU.useCallback)((() => {
          tU(!0)
        }), []), GU = (0, vU.useCallback)(((UU, RU) => {
          TU((0, gT.A)(UU, RU, PU.current))
        }), [TU]);
        (0, vU.useLayoutEffect)((() => (RU(gU), (0, oP.z)(UU, gU), KU.p.yh(oP.q), () => {
          RU(!1), (0, oP.z)(UU, !1), KU.p.yh(oP.q)
        })), [gU, UU, RU]), (0, KE.e)("appManagerUpdated|activeInputDevice", (UU => {
          "gamepad" !== UU && qU()
        })), (0, KE.e)("appManagerUpdated|gameState", (UU => {
          "inGame" !== UU && qU()
        }));
        const jU = () => {
          (0, Ut.q)() && qU()
        };
        return (0, KE.e)("appManagerUpdated|openEverythingMenuName", jU), (0, KE.e)("appManagerUpdated|openInGameMenuName", jU), {
          open: gU,
          picked: pU,
          pickedRef: PU,
          show: cU,
          aim: GU,
          close: qU
        }
      },
      pT = UU => {
        let {
          className: RU,
          slotCount: gU,
          picked: tU,
          slotLabel: pU,
          renderSlot: EU,
          centre: PU
        } = UU;
        const TU = Array.from({
          length: gU
        }, ((UU, RU) => RU));
        return (0, SU.jsx)("div", {
          className: HU()("EmoteWheelOverlay PadRadialWheel", RU),
          children: (0, SU.jsxs)("div", {
            className: "EmoteWheel",
            style: {
              width: 2 * gT.l + "rem",
              height: 2 * gT.l + "rem"
            },
            children: [(0, SU.jsxs)("svg", {
              className: "EmoteWheelSvg",
              viewBox: `0 0 ${gT.i} ${gT.i}`,
              children: [TU.map((UU => (0, SU.jsx)("path", {
                d: (0, gT.p)(UU, gU, gT.d, gT.e, gT.h),
                className: HU()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: UU === tU
                }),
                "aria-label": pU(UU)
              }, UU))), (0, SU.jsx)("circle", {
                className: "EmoteWheelOuterRing",
                cx: gT.d,
                cy: gT.d,
                r: gT.h
              }), (0, SU.jsx)("circle", {
                className: "EmoteWheelInnerRing",
                cx: gT.d,
                cy: gT.d,
                r: gT.e
              }), null !== tU && (0, SU.jsx)("path", {
                className: "EmoteWheelWedgeOutline",
                d: (0, gT.p)(tU, gU, gT.d, gT.e, gT.h)
              })]
            }), TU.map((UU => {
              const RU = (0, gT.v)(UU, gU);
              return (0, SU.jsx)("div", {
                className: HU()("PadRadialWheelSlot SmallTextBold", {
                  PadRadialWheelSlotPicked: UU === tU
                }),
                style: {
                  left: `calc(50% + ${gT.c*Math.cos(RU)}rem)`,
                  top: `calc(50% + ${gT.c*Math.sin(RU)}rem)`
                },
                "aria-hidden": !0,
                children: EU(UU)
              }, UU)
            })), (0, SU.jsx)("div", {
              className: "EmoteWheelHint SmallTextBold",
              children: PU
            })]
          })
        })
      },
      ET = tP.length,
      PT = () => {
        const {
          t: UU
        } = (0, pU.B)(), RU = tT("chat", mt.r), gU = (0, vU.useMemo)((() => tP.map((RU => UU(RU)))), [UU]);
        return (0, KE.e)(mt.o, (() => {
          RU.open || (0, UT.h)() || (0, RT.v)() || "inGame" !== qU.b.get("gameState") || (0, Ut.q)() || !(0, ft.c)() || RU.show()
        })), (0, KE.e)(mt.f, (UU => {
          RU.open && RU.aim(UU, ET)
        })), (0, KE.e)(mt.k, (() => {
          var UU;
          if (!RU.open) return;
          const tU = RU.pickedRef.current;
          null !== tU ? pP.claim(performance.now()) && (RU.close(), null === (UU = (0, ft.c)()) || void 0 === UU || UU.sendLine(gU[tU])) : RU.close()
        })), (0, KE.e)(mt.i, RU.close), RU.open ? (0, SU.jsx)(pT, {
          className: "QuickChatWheel",
          slotCount: ET,
          picked: RU.picked,
          slotLabel: UU => gU[UU],
          renderSlot: UU => gU[UU],
          centre: null !== RU.picked ? gU[RU.picked] : UU("controller:quickChatPick")
        }) : null
      },
      TT = () => {
        const {
          t: UU
        } = (0, pU.B)(), RU = tT("actionButton", RT.z), [gU, tU] = (0, vU.useState)([]);
        if ((0, KE.e)(RT.n, (UU => {
            RU.open || (0, UT.h)() || (0, mt.d)() || "inGame" !== qU.b.get("gameState") || (0, Ut.q)() || (tU(UU), RU.show())
          })), (0, KE.e)(RT.d, (UU => {
            RU.open && RU.aim(UU, gU.length)
          })), (0, KE.e)(RT.j, (() => {
            if (!RU.open) return;
            const UU = RU.pickedRef.current;
            RU.close(), null !== UU && KU.p.yh(RT.r, gU[UU])
          })), (0, KE.e)(RT.f, RU.close), !RU.open) return null;
        const EU = null !== RU.picked ? gU[RU.picked] : null;
        return (0, SU.jsx)(pT, {
          className: "ActionWheel",
          slotCount: gU.length,
          picked: RU.picked,
          slotLabel: RU => {
            const tU = gU[RU];
            return "reload" === tU.kind ? UU("controller:gameplayReload") : "customButton" === tU.kind ? tU.description || tU.icon : "touchButton" === tU.kind && "string" === typeof tU.label ? tU.label : ""
          },
          renderSlot: UU => (0, SU.jsx)(eE, {
            action: gU[UU]
          }),
          centre: EU ? (0, SU.jsx)(eE, {
            action: EU
          }) : UU("controller:actionWheelPick")
        })
      };
    var qT = gU(96);
    const KT = () => ((0, vU.useEffect)((() => {
        var UU, RU;
        const gU = (0, eU.n)(document.getElementById("root")),
          tU = (0, uU.d)(),
          pU = (() => {
            const UU = [KU.p.subscribe(Mp.g, (() => {
                lp("blockBreak")
              })), KU.p.subscribe("damagedByOtherPlayer", (() => {
                lp("damage")
              })), KU.p.subscribe("yourAttackHit", (UU => {
                let {
                  hitSelf: RU
                } = UU;
                RU || lp("hit")
              }))],
              RU = PU.g.onActivePadChanged((UU => {
                UU && lp("connect")
              }));
            return () => {
              for (const RU of UU) KU.p.unsubscribe(RU);
              RU()
            }
          })(),
          EU = (() => {
            const UU = new pE({
              getVisitId: tE.c,
              peekVisitId: tE.peekVisitSessionId,
              readReportedVisitId: () => {
                const UU = gE.l.getItem(EE);
                return "string" === typeof UU ? UU : null
              },
              writeReportedVisitId: UU => {
                gE.l.setItem(EE, UU)
              },
              isPadActive: uU.i,
              getPadFamily: () => {
                var UU, RU;
                return null !== (UU = null === (RU = PU.g.getActivePad()) || void 0 === RU ? void 0 : RU.family) && void 0 !== UU ? UU : null
              },
              canReport: UE.j,
              getInputType: RE.b,
              ku: UE.r
            });
            let RU = 0,
              gU = null;
            const tU = pU => {
                null === gU && ("notReady" !== UU.check(pU) || null !== gU || RU >= 20 || (RU++, gU = setTimeout((() => {
                  gU = null, tU(!1)
                }), 3e3)))
              },
              pU = KU.p.subscribe("appManagerUpdated|activeInputDevice", (() => {
                tU(!0)
              })),
              EU = (0, tE.g)((() => {
                RU = 0, tU(!0)
              }));
            return () => {
              KU.p.unsubscribe(pU), EU(), null !== gU && clearTimeout(gU)
            }
          })(),
          TU = PU.g.onFrame(((UU, RU) => {
            const gU = (0, uU.p)(UU);
            GU.e.dispatch(UU, RU, gU)
          }));
        let cU = null !== (UU = null === (RU = PU.g.getActivePad()) || void 0 === RU ? void 0 : RU.family) && void 0 !== UU ? UU : null;
        const CU = PU.g.onActivePadChanged((UU => {
            var RU, gU;
            (GU.e.reset(), (0, uU.s)(), KU.p.yh(PU.e, UU), (null !== (RU = null === UU || void 0 === UU ? void 0 : UU.family) && void 0 !== RU ? RU : null) !== cU) && (cU = null !== (gU = null === UU || void 0 === UU ? void 0 : UU.family) && void 0 !== gU ? gU : null, KU.p.yh(jU.d, (0, jU.h)()));
            !UU && (0, uU.i)() && (0, uU.t)(qU.b.get("isTouchScreen") ? "touch" : "keyboardMouse")
          })),
          hU = () => {
            "visible" !== document.visibilityState && GU.e.clear()
          },
          QU = () => {
            GU.e.clear()
          };
        document.addEventListener("visibilitychange", hU), window.addEventListener("blur", QU), PU.g.start(), (0, Op.o)();
        const WU = null;
        return () => {
          gU(), tU(), pU(), EU(), TU(), CU(), document.removeEventListener("visibilitychange", hU), window.removeEventListener("blur", QU), PU.g.stop(), null === WU || void 0 === WU || WU()
        }
      }), []), (0, SU.jsxs)("div", {
        className: "ControllerRoot",
        children: [(0, SU.jsx)(wE, {}), (0, SU.jsx)(rE, {}), (0, SU.jsx)(XE, {}), (0, SU.jsx)(wP, {}), (0, SU.jsx)(OP, {}), (0, SU.jsx)(PT, {}), (0, SU.jsx)(TT, {})]
      })),
      cT = () => qT.featureFlags.useControllerSupport ? (0, SU.jsx)(KT, {}) : null;
    var GT = gU(7834),
      jT = gU(8454);
    const uT = new Set(Op.k),
      CT = UU => `${jT.n}${(0,jU.i)()}/${UU}`,
      hT = UU => {
        if (!(0, jT.l)(UU)) return null;
        const [RU, gU] = UU.slice(jT.n.length).split("/");
        return (0, GT.f)(RU) && uT.has(gU) ? (0, Op.g)(RU, gU) : null
      };
    var QT = gU(8457);
    const eT = () => {
        const {
          t: UU
        } = (0, pU.B)(), RU = (0, uU.v)(), {
          gameState: gU,
          isUiHidden: tU
        } = (0, qU.l)(["gameState", "isUiHidden"]), {
          hideButtonHints: EU,
          sneakMode: PU
        } = (0, jU.n)(), [TU, KU] = (0, vU.useState)(QT.d);
        return (0, KE.e)(JE.s, KU), RU && !tU && "inGame" === gU && TU ? (0, SU.jsxs)("div", {
          className: "PadSneakChip SmallTextBold",
          children: [!EU && (0, SU.jsx)(hE, {
            glyph: (0, cU.f)("toggle" === PU ? "sneak" : "sneakToggle")
          }), (0, SU.jsx)("span", {
            children: UU("controller:gameplaySneaking")
          })]
        }) : null
      },
      WT = 12,
      fT = UU => {
        let {
          trigger: RU,
          className: gU,
          children: tU
        } = UU;
        const pU = (0, vU.useRef)(null);
        return (0, vU.useEffect)((() => {
          let UU = 0;
          const gU = oU(RU, "y"),
            tU = () => {
              UU = requestAnimationFrame(tU);
              const EU = pU.current;
              if (!EU || null === RU || void 0 === RU || !RU.isConnected) return;
              const {
                left: PU,
                top: TU
              } = function(UU, RU, gU) {
                let tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                  pU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                const EU = UU.left + UU.width / 2,
                  PU = Math.max(WT, gU.width - WT - RU.width),
                  TU = Math.min(Math.max(EU - RU.width / 2, WT), PU),
                  qU = gU.height - tU;
                let KU = 0,
                  cU = qU;
                if (pU) {
                  const UU = Math.max(0, pU.top),
                    tU = Math.min(qU, pU.bottom);
                  tU - UU >= Math.max(gU.height / 2, RU.height + 24) && (KU = UU, cU = tU)
                }
                const GU = UU.top + UU.height / 2 < (KU + cU) / 2 ? cU - WT - RU.height : KU + WT;
                return {
                  left: TU,
                  top: Math.max(WT, GU)
                }
              }(RU.getBoundingClientRect(), {
                width: EU.offsetWidth,
                height: EU.offsetHeight
              }, {
                width: window.innerWidth,
                height: window.innerHeight
              }, parseFloat(document.documentElement.style.getPropertyValue(BP)) || 0, null !== gU && void 0 !== gU && gU.isConnected ? gU.getBoundingClientRect() : null);
              EU.style.transform = `translate3d(${Math.round(PU)}px, ${Math.round(TU)}px, 0)`, EU.style.visibility = "visible"
            };
          return tU(), () => {
            cancelAnimationFrame(UU)
          }
        }), [RU]), (0, SU.jsx)("div", {
          ref: pU,
          className: gU,
          style: {
            position: "fixed",
            left: 0,
            top: 0,
            visibility: "hidden"
          },
          children: tU
        })
      };
    var xT = gU(1049),
      mT = gU(8461),
      IT = gU(1412),
      JT = gU(8470),
      wT = gU(8475);
    const nT = {
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
      bT = () => {
        const {
          t: UU
        } = (0, pU.B)(), RU = (0, uU.v)(), gU = (0, mT.e)(), tU = (0, YE.g)("_tasks"), EU = (0, YE.g)("_availableLeaderboards");
        if (!RU) return null;
        const PU = (UU => {
          let {
            hasShop: RU,
            hasTasksOrLeaderboards: gU,
            canInvite: tU
          } = UU;
          const pU = [];
          return RU && pU.push("shop"), gU && pU.push("tasks"), tU && pU.push("invite"), pU.push("leave"), pU
        })({
          hasShop: gU,
          hasTasksOrLeaderboards: !(!tU && !EU),
          canInvite: !!qT.featureFlags.canUseInviteLinks
        });
        return (0, SU.jsx)("div", {
          className: "PadLobbyShortcuts",
          children: PU.map((RU => {
            const {
              icon: gU,
              labelKey: tU
            } = nT[RU], pU = "leave" === RU ? IT.E : IT.e;
            return (0, SU.jsx)(pU, {
              className: "PadLobbyShortcut",
              onClick: () => {
                (UU => {
                  switch (UU) {
                    case "shop":
                      return KU.p.yh(wT.j), void qU.b.set({
                        openEverythingMenuName: Og.n.SHOP
                      });
                    case "tasks":
                      return void KU.p.yh("toggleMenu", "retentionFeatures");
                    case "invite":
                      return void KU.p.yh("toggleMenu", "inviteLink");
                    case "leave":
                      (0, JT.e)()
                  }
                })(RU)
              },
              children: (0, SU.jsxs)("div", {
                className: "PadLobbyShortcutInner",
                children: [(0, SU.jsx)(xT.c, {
                  name: gU
                }), (0, SU.jsx)("span", {
                  children: UU(tU)
                })]
              })
            }, RU)
          }))
        })
      };
    var oT = gU(1844);
    const ZT = CU.u,
      aT = ["forward", "backward", "left", "right", "sprint"],
      YT = UU => UU.ctrlKey || UU.altKey || "Alt" === UU.key || "ArrowUp" === UU.key || "ArrowDown" === UU.key || "Tab" === UU.code || "/" === UU.key || "Slash" === UU.code;
    class BT {
      constructor() {
        this.armed = !1, this.swallowedKeys = new Set, this.previousHeld = new Array(CU.N).fill(!1), this.leftStickWasPressed = !1, this.rightStickWasPressed = !1, this.consumeNextFrame = !1, this.consumeAfterContinue = !1
      }
      setArmed(UU) {
        this.armed = UU
      }
      blocksGameplay() {
        return this.armed || this.consumeNextFrame
      }
      onKeyDown(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return !this.armed || RU ? !UU.repeat && this.swallowedKeys.delete(UU.code) ? {
          swallow: !1,
          continues: !1
        } : {
          swallow: this.swallowedKeys.has(UU.code),
          continues: !1
        } : "Escape" === UU.key || UU.repeat && !this.swallowedKeys.has(UU.code) ? {
          swallow: !1,
          continues: !1
        } : gU ? {
          swallow: !1,
          continues: !0
        } : (this.swallowedKeys.add(UU.code), {
          swallow: !0,
          continues: (0, uU.g)(UU)
        })
      }
      onKeyUp(UU) {
        return this.swallowedKeys.delete(UU.code)
      }
      forgetKeys() {
        this.swallowedKeys.clear()
      }
      onPadFrame(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          tU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const pU = (0, CU.o)(UU.values, this.previousHeld),
          EU = null === gU ? -1 : (0, CU.j)(gU),
          PU = EU >= 0 && pU[EU] && !this.previousHeld[EU],
          TU = pU.some(((UU, RU) => UU && !this.previousHeld[RU] && RU !== EU)),
          qU = Math.hypot(UU.leftStick.x, UU.leftStick.y) >= ZT,
          KU = Math.hypot(UU.rightStick.x, UU.rightStick.y) >= ZT,
          cU = qU && !this.leftStickWasPressed || KU && !this.rightStickWasPressed;
        this.previousHeld = pU, this.leftStickWasPressed = qU, this.rightStickWasPressed = KU;
        let GU = !1;
        this.consumeNextFrame && (this.consumeNextFrame = !1, GU = !0);
        const jU = !RU && PU && !tU,
          uU = !jU && this.armed && !RU && (TU || cU);
        return (jU || uU) && (this.consumeNextFrame = !0, this.consumeAfterContinue = uU, GU = !0), {
          continues: uU,
          back: jU,
          consumeHeld: GU
        }
      }
      consumeLeavesMoveStick() {
        return this.consumeAfterContinue
      }
    }
    const VT = new Set([...oT.l, ...oT.C]),
      rT = UU => ((UU, RU, gU) => {
        const tU = Object.keys(RU).filter((tU => !gU.has(tU) && RU[tU].includes(UU)));
        return tU.length > 0 && tU.every((UU => aT.includes(UU)))
      })(UU, oT.r, VT),
      XT = (UU, RU, gU) => {
        const tU = new BT,
          pU = UU => {
            if (!UU.isTrusted) return;
            const {
              swallow: gU,
              continues: pU
            } = tU.onKeyDown(UU, !(0, uU.B)(UU) || (0, zp.h)() || (0, Ut.q)(), rT(UU.code));
            gU && (UU.stopImmediatePropagation(), YT(UU) && UU.preventDefault()), pU && ((0, uU.t)("keyboardMouse"), RU())
          },
          EU = UU => {
            UU.isTrusted && tU.onKeyUp(UU) && (UU.stopImmediatePropagation(), YT(UU) && UU.preventDefault())
          },
          TU = () => {
            tU.forgetKeys()
          };
        window.addEventListener("keydown", pU, !0), window.addEventListener("keyup", EU, !0), window.addEventListener("blur", TU);
        const qU = PU.g.onFrame((UU => {
            const pU = GU.e.getActiveConsumerName(),
              EU = gU(),
              PU = EU ? (0, cU.f)("menuBack") : null,
              TU = null !== pU && "gameplay" !== pU,
              {
                continues: qU,
                back: KU,
                consumeHeld: CU
              } = tU.onPadFrame(UU, TU, PU, (0, uU.m)(UU));
            if (CU) {
              const UU = (0, jU.h)().swapSticks ? "right" : "left";
              GU.e.consumeAllHeld(tU.consumeLeavesMoveStick() ? UU : null)
            }
            KU ? null === EU || void 0 === EU || EU() : qU && RU()
          })),
          KU = (0, zp.l)(`pressToContinue:${UU}`, (() => tU.blocksGameplay()));
        return {
          setArmed: UU => {
            tU.setArmed(UU)
          },
          dispose: () => {
            window.removeEventListener("keydown", pU, !0), window.removeEventListener("keyup", EU, !0), window.removeEventListener("blur", TU), qU(), KU()
          }
        }
      };
    var vT = gU(4670),
      dT = gU(3129),
      HT = gU(2825),
      ST = gU(7836);
    const sT = UU => {
        let {
          text: RU
        } = UU;
        return (0, SU.jsx)("div", {
          className: "ControllerSettingsHeading",
          children: RU
        })
      },
      yT = UU => {
        let {
          label: RU,
          hint: gU,
          options: tU,
          value: EU,
          onChange: PU
        } = UU;
        const {
          t: TU
        } = (0, pU.B)();
        return (0, SU.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, SU.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: [(0, SU.jsxs)("div", {
              className: "ControllerChoiceText",
              children: [(0, SU.jsx)("div", {
                className: "SliderText",
                children: RU
              }), gU && (0, SU.jsx)("div", {
                className: "ControllerSettingsHint",
                children: gU
              })]
            }), (0, SU.jsx)(HT.c, {
              options: tU.map((UU => ({
                label: "label" in UU ? UU.label : TU(UU.labelKey),
                value: UU.value
              }))),
              value: EU,
              onChange: UU => {
                PU(UU.value)
              }
            })]
          })
        })
      },
      kT = UU => {
        let {
          settingKey: RU,
          label: gU,
          range: tU,
          format: pU
        } = UU;
        const EU = (0, jU.n)();
        return (0, SU.jsx)(vT.h, {
          name: gU,
          min: tU.min,
          max: tU.max,
          step: tU.step,
          padStep: tU.step,
          initValue: EU[RU],
          format: pU,
          onChange: UU => {
            (0, jU.k)({
              [RU]: (0, ST.u)(UU, tU)
            })
          }
        })
      };
    var FT = gU(8480),
      iT = gU(8483);
    const AT = UU => UU instanceof DOMException && ("SecurityError" === UU.name || "NotAllowedError" === UU.name),
      zT = UU => {
        const [RU] = [...UU.controllers].sort(((UU, RU) => iT.p[UU] - iT.p[RU]));
        return iT.o[RU]
      },
      MT = UU => {
        (0, FT.c)().allowPhoneMotion().catch((RU => {
          UU && AT(RU) ? UU() : console.warn("Could not enable the motion sensor", RU)
        }))
      },
      DT = {
        waiting: "controller:settingsGyroPhoneWaiting",
        noSensor: "controller:settingsGyroPhoneNoSensor",
        on: "controller:settingsGyroPhoneOn",
        denied: "controller:settingsGyroPhoneDenied"
      },
      LT = UU => {
        let {
          status: RU
        } = UU;
        const {
          t: gU
        } = (0, pU.B)(), [tU, EU] = (0, vU.useState)(null), PU = `${RU.controllers.join(",")}|${RU.phoneMotion}`;
        (0, vU.useEffect)((() => {
          EU(null)
        }), [PU]);
        const TU = () => {
          (0, FT.c)().connectController().then((UU => {
            EU(UU > 0 ? "openFailed" : null)
          })).catch((UU => {
            AT(UU) ? EU("needsClick") : console.warn("Could not connect motion controller", UU)
          }))
        };
        if (RU.hidSupported) {
          let UU = gU("controller:settingsGyroConnectHint");
          return "needsClick" === tU ? UU = gU("controller:settingsGyroConnectNeedsClick") : "openFailed" === tU ? UU = gU("controller:settingsGyroOpenFailed") : RU.controllers.length > 0 && (UU = gU("controller:settingsGyroConnected", {
            name: zT(RU)
          })), (0, SU.jsx)("div", {
            className: "SettingBox ControllerChoiceSetting",
            children: (0, SU.jsxs)("div", {
              className: "ControllerChoiceRow",
              children: [(0, SU.jsx)("div", {
                className: "ControllerSettingsHint",
                children: UU
              }), (0, SU.jsx)(IT.e, {
                onClick: TU,
                children: gU("controller:settingsGyroConnect")
              })]
            })
          })
        }
        if ("needsPermission" === RU.phoneMotion) return (0, SU.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, SU.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: ["needsTap" === tU && (0, SU.jsx)("div", {
              className: "ControllerSettingsHint",
              children: gU("controller:settingsGyroAllowNeedsTap")
            }), (0, SU.jsx)(IT.e, {
              onClick: () => {
                MT((() => {
                  EU("needsTap")
                }))
              },
              children: gU("controller:settingsGyroAllowMotion")
            })]
          })
        });
        const qU = DT[RU.phoneMotion];
        return qU ? (0, SU.jsx)("div", {
          className: "ControllerSettingsHint",
          children: gU(qU)
        }) : null
      },
      NT = () => {
        const {
          t: UU
        } = (0, pU.B)(), RU = (0, jU.n)(), gU = (0, FT.e)(), tU = (0, uU.z)(), EU = !gU.hidSupported && gU.phoneSupported && !gU.padConnected, PU = (gU.hidSupported || gU.phoneSupported) && !EU, TU = (0, cU.f)("pause");
        return (0, SU.jsxs)(SU.Fragment, {
          children: [(0, SU.jsx)(sT, {
            text: UU("controller:settingsGyro")
          }), EU && (0, SU.jsx)("div", {
            className: "ControllerSettingsHint",
            children: UU("controller:settingsGyroPhoneNeedsController")
          }), !PU && !EU && (0, SU.jsx)("div", {
            className: "ControllerSettingsHint",
            children: UU(gU.hidBlocked || gU.phoneBlocked ? "controller:settingsGyroBlocked" : "controller:settingsGyroUnsupported")
          }), PU && (0, SU.jsx)(vT.b, {
            label: UU(gU.hidSupported ? "controller:settingsGyroToggle" : "controller:settingsGyroTogglePhone"),
            checked: RU.gyroAiming,
            onClick: UU => {
              var RU, gU;
              (0, jU.k)({
                gyroAiming: UU
              });
              const tU = null === (RU = null === (gU = navigator.userActivation) || void 0 === gU ? void 0 : gU.isActive) || void 0 === RU || RU;
              if (!UU || !tU) return;
              const pU = (0, FT.c)(),
                EU = pU.getStatus();
              EU.hidSupported ? pU.connectControllerIfNoneGranted().catch((UU => {
                console.warn("Motion controller picker unavailable", UU)
              })) : "needsPermission" === EU.phoneMotion && MT()
            },
            circleInfoText: UU(gU.hidSupported ? "controller:settingsGyroToggleInfo" : "controller:settingsGyroToggleInfoPhone")
          }), PU && gU.hidSupported && (0, SU.jsx)("div", {
            className: "ControllerSettingsHint",
            children: UU("controller:settingsGyroSteamHint")
          }), PU && RU.gyroAiming && (0, SU.jsxs)(SU.Fragment, {
            children: [(0, SU.jsx)(LT, {
              status: gU
            }), (0, SU.jsx)(kT, {
              settingKey: "gyroSensitivity",
              label: UU("controller:settingsGyroSensitivity"),
              range: ST.S,
              format: ST.J
            }), (0, SU.jsx)(yT, {
              label: UU("controller:settingsGyroActivation"),
              hint: "aiming" === RU.gyroActivation && (0, SU.jsx)(dT.d, {
                text: UU("controller:settingsGyroAimingHint", {
                  button: dT.f
                }),
                glyph: (0, cU.f)("use")
              }),
              options: ST.Q,
              value: RU.gyroActivation,
              onChange: UU => {
                (0, jU.k)({
                  gyroActivation: UU
                })
              }
            }), "button" === RU.gyroActivation && (0, SU.jsx)(yT, {
              label: UU("controller:settingsGyroButton"),
              hint: UU("controller:settingsGyroButtonHint"),
              options: ST.r.filter((UU => UU !== TU || UU === RU.gyroButton)).map((UU => ({
                label: CE(tU, UU),
                value: UU
              }))),
              value: RU.gyroButton,
              onChange: UU => {
                (0, jU.k)({
                  gyroButton: UU
                })
              }
            })]
          })]
        })
      };
    var lT = gU(1733);
    const OT = () => {
      const {
        t: UU
      } = (0, pU.B)(), RU = (0, jU.n)(), gU = (0, uU.z)();
      return (0, SU.jsxs)(SU.Fragment, {
        children: [(0, SU.jsx)(sT, {
          text: UU("controller:settingsAccessibility")
        }), (0, SU.jsx)(vT.b, {
          label: UU("controller:settingsSwapConfirmBack"),
          checked: (0, cU.D)(RU.swapConfirmBack, gU),
          onClick: UU => {
            (0, jU.k)({
              swapConfirmBack: UU === (0, cU.D)(null, gU) ? null : UU
            }), lT.f.showMessage({
              translationKey: "controller:settingsSwapToast"
            })
          },
          circleInfoText: UU("controller:settingsSwapConfirmBackInfo")
        }), (0, SU.jsx)(yT, {
          label: UU("controller:settingsButtonRepeat"),
          hint: UU("controller:settingsButtonRepeatHint"),
          options: ST.p,
          value: RU.buttonRepeat,
          onChange: UU => {
            (0, jU.k)({
              buttonRepeat: UU
            })
          }
        }), (0, SU.jsx)(yT, {
          label: UU("controller:settingsTapHoldTime"),
          hint: UU("controller:settingsTapHoldTimeHint"),
          options: ST.wb,
          value: RU.tapHoldTime,
          onChange: UU => {
            (0, jU.k)({
              tapHoldTime: UU
            })
          }
        }), (0, SU.jsx)(yT, {
          label: UU("controller:settingsEmoteButton"),
          hint: UU("wheel" === RU.emoteButton ? "controller:settingsEmoteButtonWheelHint" : "controller:settingsEmoteButtonTapHoldHint"),
          options: ST.C,
          value: RU.emoteButton,
          onChange: UU => {
            (0, jU.k)({
              emoteButton: UU
            })
          }
        }), (0, SU.jsx)(yT, {
          label: UU("controller:settingsAttackMode"),
          hint: UU("toggle" === RU.attackMode ? "controller:settingsAttackToggleHint" : "controller:settingsAttackHoldHint"),
          options: ST.l,
          value: RU.attackMode,
          onChange: UU => {
            (0, jU.k)({
              attackMode: UU
            })
          }
        }), (0, SU.jsx)(vT.b, {
          label: UU("controller:settingsLargePointer"),
          checked: RU.largePointer,
          onClick: UU => {
            (0, jU.k)({
              largePointer: UU
            })
          },
          circleInfoText: UU("controller:settingsLargePointerInfo")
        })]
      })
    };
    var Uq = gU(8492);
    const Rq = new class {
        constructor(UU) {
          this.router = UU, this.current = null
        }
        claim(UU, RU) {
          const gU = this.current;
          gU && (this.current = null, gU.release(), gU.onTakenOver());
          const tU = this.router.register({
              ...UU,
              name: "capture"
            }),
            pU = {
              release: tU,
              onTakenOver: RU
            };
          return this.current = pU, () => {
            this.current === pU && (this.current = null), tU()
          }
        }
      }(GU.e),
      gq = UU => {
        (0, vU.useEffect)((() => {
          if (!UU) return;
          const RU = UU();
          let gU = !1;
          const tU = () => {
              gU || (gU = !0, RU.onEnd())
            },
            pU = Rq.claim({
              isActive: () => !gU,
              onFrame: UU => {
                RU.onFrame(UU, tU)
              }
            }, tU),
            EU = void 0 === RU.timeoutMs ? void 0 : window.setTimeout(tU, RU.timeoutMs),
            PU = UU => {
              "Escape" === UU.key && (UU.preventDefault(), UU.stopPropagation(), tU())
            };
          return window.addEventListener("keydown", PU, !0), () => {
            gU = !0, pU(), window.clearTimeout(EU), window.removeEventListener("keydown", PU, !0)
          }
        }), [UU])
      },
      tq = UU => {
        let {
          row: RU,
          capturing: gU,
          onCapture: tU,
          holdFillRef: EU,
          onRebind: PU,
          swapped: TU
        } = UU;
        const {
          t: qU
        } = (0, pU.B)();
        if ("fixed" === RU.kind) return (0, SU.jsx)("div", {
          className: "ControlRow PadControlRow PadControlRowFixed",
          children: (0, SU.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, SU.jsx)("div", {
              className: "ControlName",
              children: qU(RU.labelKey)
            }), (0, SU.jsx)("div", {
              className: "ControlBindingsContainer",
              children: (0, SU.jsx)("div", {
                className: "ControlBindingsList",
                children: (0, SU.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  children: (0, SU.jsx)(hE, {
                    glyph: "move" === RU.stick ? (0, cU.o)() : (0, cU.m)()
                  })
                })
              })
            })]
          })
        });
        const {
          action: KU
        } = RU, GU = (0, cU.f)(KU), jU = (0, cU.g)(KU), uU = GU !== jU && (0, cU.b)(KU, jU);
        return (0, SU.jsxs)("div", {
          className: HU()("ControlRow PadControlRow", {
            Capturing: gU
          }),
          children: [(0, SU.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, SU.jsx)("div", {
              className: "ControlName",
              children: qU(ST.g[KU])
            }), (0, SU.jsxs)("div", {
              className: "ControlBindingsContainer",
              children: [!gU && (0, SU.jsxs)("div", {
                className: "ControlBindingsList",
                children: [(0, SU.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    tU(KU)
                  },
                  children: (0, SU.jsx)(hE, {
                    glyph: GU
                  })
                }), uU && (0, SU.jsx)("div", {
                  className: "ControlBinding PadBindingReset",
                  title: qU("controller:settingsReset"),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    PU(KU, jU)
                  },
                  children: (0, SU.jsx)(xT.c, {
                    name: "arrows-rotate"
                  })
                })]
              }), gU && (0, SU.jsxs)("div", {
                className: "ControlBindingAddInput",
                children: [(0, SU.jsxs)("div", {
                  className: "PadCaptureBox",
                  children: [(0, SU.jsx)("span", {
                    children: qU("controller:settingsCapturePrompt")
                  }), (0, SU.jsx)("div", {
                    ref: EU,
                    className: "PadCaptureHoldFill"
                  })]
                }), (0, SU.jsx)("div", {
                  className: "ControlBindingAddCancel",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    tU(null)
                  },
                  children: "\xd7"
                })]
              }), gU && (0, SU.jsx)("div", {
                className: "PadCaptureHint",
                children: (0, SU.jsx)(dT.d, {
                  text: qU((0, cU.b)(KU, (0, cU.f)("menuBack")) ? "controller:settingsCaptureCancelOrBindHint" : "controller:settingsCaptureCancelHint", {
                    button: dT.f
                  }),
                  glyph: (0, cU.f)("menuBack")
                })
              })]
            })]
          }), TU.map((UU => (0, SU.jsx)("div", {
            className: "ControlRowWarning PadSwapNotice",
            children: (0, SU.jsx)(dT.d, {
              text: qU("controller:settingsSwapNotice", {
                action: qU(ST.g[UU]),
                button: dT.f
              }),
              glyph: (0, cU.f)(UU)
            })
          }, UU))), gU && (0, SU.jsx)("div", {
            className: "PadCaptureTimer",
            style: {
              animationDuration: `${ST.t}ms`
            }
          })]
        })
      },
      pq = [],
      Eq = UU => {
        let {
          layoutSetting: RU
        } = UU;
        const {
          t: gU
        } = (0, pU.B)(), tU = (0, jU.n)();
        (0, uU.z)();
        const EU = (0, vU.useRef)(null),
          [PU, TU] = (0, vU.useState)(null),
          qU = (0, vU.useCallback)(((UU, RU) => {
            const gU = (0, jU.h)().bindings;
            (0, cU.z)(UU, RU);
            const tU = (0, cU.r)(gU, UU);
            TU(tU.length > 0 ? {
              action: UU,
              swapped: tU
            } : null)
          }), []),
          [KU, hU] = ((UU, RU) => {
            const [gU, tU] = (0, vU.useState)(null), pU = (0, vU.useMemo)((() => gU ? () => {
              const pU = (0, cU.f)("menuBack"),
                EU = new ST.c(pU, (0, cU.f)("menuConfirm"), (UU => (0, cU.b)(gU, UU)));
              return {
                onFrame: (tU, PU) => {
                  var TU;
                  const qU = tU.frame.timestampMs,
                    KU = EU.update({
                      ...tU,
                      isDown: UU => (0, CU.C)(tU.frame.values, UU)
                    }, qU);
                  null === (TU = UU.current) || void 0 === TU || TU.style.setProperty("width", 100 * EU.getBindHoldProgress(qU) + "%"), KU && ("bind" === KU.kind ? (GU.e.consumeButton(KU.button), RU(gU, KU.button)) : GU.e.consumeButton(pU), PU())
                },
                onEnd: () => {
                  tU(null)
                },
                timeoutMs: ST.t
              }
            } : null), [gU, UU, RU]);
            return gq(pU), [gU, tU]
          })(EU, qU),
          QU = UU => {
            UU && TU(null), hU(UU)
          };
        (0, vU.useEffect)((() => {
          if (!PU) return;
          const UU = window.setTimeout((() => {
            TU(null)
          }), ST.ub);
          return () => {
            window.clearTimeout(UU)
          }
        }), [PU]);
        const eU = !tU.swapSticks && 0 === Object.keys(tU.bindings).length;
        return (0, SU.jsxs)("div", {
          className: "ControlsContainer PadControlsContainer",
          children: [(0, SU.jsx)("div", {
            className: "SliderText",
            children: gU("controller:settingsRemap")
          }), (0, SU.jsx)("div", {
            className: "ControllerSettingsHint",
            children: gU("controller:settingsRemapHint")
          }), (0, SU.jsx)(IT.E, {
            className: "ResetBindingsButton PadResetAllButton",
            disabled: eU,
            onClick: () => {
              QU(null), TU(null), (0, cU.C)()
            },
            children: gU("controller:settingsResetAll")
          }), RU, ST.ob.map(((UU, RU) => (0, SU.jsx)(Uq.c, {
            title: gU(UU.titleKey),
            defaultOpen: 0 === RU,
            children: UU.rows.map((UU => (0, SU.jsx)(tq, {
              row: UU,
              capturing: "action" === UU.kind && UU.action === KU,
              onCapture: QU,
              holdFillRef: EU,
              onRebind: qU,
              swapped: "action" === UU.kind && (null === PU || void 0 === PU ? void 0 : PU.action) === UU.action ? PU.swapped : pq
            }, "action" === UU.kind ? UU.action : UU.labelKey)))
          }, UU.titleKey)))]
        })
      },
      Pq = UU => {
        let {
          deadzone: RU,
          dotRef: gU,
          labelKey: tU
        } = UU;
        const {
          t: EU
        } = (0, pU.B)();
        return (0, SU.jsxs)("div", {
          className: "ControllerTesterStick",
          children: [(0, SU.jsxs)("div", {
            className: "ControllerTesterStickCircle",
            children: [(0, SU.jsx)("div", {
              className: "ControllerTesterDeadzone",
              style: {
                width: 100 * RU + "%",
                height: 100 * RU + "%"
              }
            }), (0, SU.jsx)("div", {
              ref: gU,
              className: "ControllerTesterDot"
            })]
          }), (0, SU.jsx)("div", {
            className: "ControllerTesterStickLabel",
            children: EU(tU)
          })]
        })
      },
      Tq = (UU, RU, gU, tU) => {
        var pU;
        UU && (UU.style.left = 50 + 50 * Math.max(-1, Math.min(1, RU.x)) + "%", UU.style.top = 50 + 50 * Math.max(-1, Math.min(1, RU.y)) + "%", null === (pU = UU.parentElement) || void 0 === pU || pU.classList.toggle("Active", tU || Math.hypot(RU.x, RU.y) > gU))
      },
      qq = UU => {
        const RU = {
            deadzone: UU.moveDeadzone,
            labelKey: "controller:settingsActionMove"
          },
          gU = {
            deadzone: UU.lookDeadzone,
            labelKey: "controller:settingsActionLook"
          };
        return UU.swapSticks ? {
          left: gU,
          right: RU
        } : {
          left: RU,
          right: gU
        }
      },
      Kq = () => {
        const {
          t: UU
        } = (0, pU.B)(), RU = (() => {
          const [UU, RU] = (0, vU.useState)((() => PU.g.getActivePad()));
          return (0, KE.e)(PU.e, (() => {
            RU(PU.g.getActivePad())
          })), UU
        })(), gU = qq((0, jU.n)()), tU = (0, vU.useRef)(null), EU = (0, vU.useRef)(null), TU = (0, vU.useRef)([]), qU = (0, vU.useRef)(null), KU = (0, vU.useRef)(null), [uU, hU] = (UU => {
          const [RU, gU] = (0, vU.useState)(!1), tU = (0, vU.useMemo)((() => RU ? () => {
            const RU = (0, cU.f)("menuBack"),
              tU = new ST.e;
            return {
              onFrame: (gU, pU) => {
                var EU;
                const PU = tU.update({
                  pressed: gU.wasPressed(RU),
                  WT: gU.isHeld(RU)
                }, gU.frame.timestampMs);
                null === (EU = UU.current) || void 0 === EU || EU.style.setProperty("width", 100 * PU + "%"), PU >= 1 && (GU.e.consumeButton(RU), pU())
              },
              onEnd: () => {
                gU(!1)
              }
            }
          } : null), [RU, UU]);
          return gq(tU), [RU, gU]
        })(EU);
        (0, vU.useEffect)((() => {
          const UU = UU => {
            for (const gU of CU.O) {
              const RU = (0, CU.j)(gU),
                tU = TU.current[RU];
              if (!tU) continue;
              const pU = UU.values[RU];
              tU.classList.toggle("Pressed", pU >= CU.u), (0, CU.E)(RU) && tU.style.setProperty("--trigger-fill", `${Math.round(100*pU)}%`)
            }
            const RU = qq((0, jU.h)());
            Tq(qU.current, UU.leftStick, RU.left.deadzone, UU.values[(0, CU.j)("LS")] >= CU.u), Tq(KU.current, UU.rightStick, RU.right.deadzone, UU.values[(0, CU.j)("RS")] >= CU.u)
          };
          return RU || UU((0, CU.t)()), PU.g.onFrame(UU)
        }), [RU]), (0, vU.useEffect)((() => {
          RU || hU(!1)
        }), [RU, hU]), (0, vU.useEffect)((() => {
          var UU;
          uU && (null === (UU = tU.current) || void 0 === UU || UU.scrollIntoView({
            block: "nearest"
          }))
        }), [uU]);
        const QU = ST.gb.find((UU => UU.value === (null === RU || void 0 === RU ? void 0 : RU.family)));
        return (0, SU.jsxs)("div", {
          ref: tU,
          className: HU()("SettingBox ControllerTester", {
            Testing: uU
          }),
          children: [(0, SU.jsxs)("div", {
            className: "ControllerTesterHeader",
            children: [(0, SU.jsxs)("div", {
              className: "ControllerTesterInfo",
              children: [RU && (0, SU.jsx)("div", {
                children: UU("controller:settingsTesterFamily", {
                  family: QU ? UU(QU.labelKey) : RU.family
                })
              }), RU && (0, SU.jsx)("div", {
                className: "ControllerTesterPadId",
                children: RU.id
              }), !RU && (0, SU.jsx)("div", {
                children: UU("controller:settingsTesterNoPad")
              })]
            }), (RU || uU) && (0, SU.jsx)(IT.e, {
              className: "ControllerTesterToggle",
              onClick: () => {
                hU(!uU)
              },
              children: UU(uU ? "controller:settingsTesterStop" : "controller:settingsTesterStart")
            })]
          }), RU && !uU && (0, SU.jsx)("div", {
            className: "ControllerSettingsHint",
            children: UU("controller:settingsTesterHint")
          }), uU && (0, SU.jsxs)("div", {
            className: "ControllerTesterBanner",
            children: [(0, SU.jsx)(dT.d, {
              text: UU("controller:settingsTesterTesting", {
                button: dT.f
              }),
              glyph: (0, cU.f)("menuBack")
            }), (0, SU.jsx)("div", {
              ref: EU,
              className: "ControllerTesterExitFill"
            })]
          }), (0, SU.jsxs)("div", {
            className: "ControllerTesterBody",
            children: [(0, SU.jsx)(Pq, {
              deadzone: gU.left.deadzone,
              dotRef: qU,
              labelKey: gU.left.labelKey
            }), (0, SU.jsx)("div", {
              className: "ControllerTesterButtons",
              children: CU.O.map((UU => {
                const gU = (0, CU.j)(UU);
                return (0, SU.jsx)("div", {
                  ref: UU => {
                    TU.current[gU] = UU
                  },
                  className: (0, CU.E)(gU) ? "ControllerTesterButton ControllerTesterTrigger" : "ControllerTesterButton",
                  children: (0, SU.jsx)(hE, {
                    glyph: UU,
                    family: null === RU || void 0 === RU ? void 0 : RU.family
                  })
                }, UU)
              }))
            }), (0, SU.jsx)(Pq, {
              deadzone: gU.right.deadzone,
              dotRef: KU,
              labelKey: gU.right.labelKey
            })]
          })]
        })
      },
      cq = (0, vU.memo)((function() {
        const {
          t: UU
        } = (0, pU.B)(), RU = (0, jU.n)(), [gU, tU] = (0, vU.useState)(!1);
        return (0, vU.useEffect)((() => {
          if (!gU) return;
          const UU = window.setTimeout((() => {
            tU(!1)
          }), ST.ub);
          return () => {
            window.clearTimeout(UU)
          }
        }), [gU]), (0, SU.jsxs)("div", {
          className: "SettingsMenuRightInner ControllerCategory",
          children: [(0, SU.jsx)(sT, {
            text: UU("controller:settingsLook")
          }), (0, SU.jsx)(kT, {
            settingKey: "lookSensitivityX",
            label: UU("controller:settingsLookSensitivityX"),
            range: ST.pb,
            format: ST.N
          }), (0, SU.jsx)(kT, {
            settingKey: "lookSensitivityY",
            label: UU("controller:settingsLookSensitivityY"),
            range: ST.pb,
            format: ST.N
          }), (0, SU.jsx)(kT, {
            settingKey: "aimLookSensitivity",
            label: UU("controller:settingsAimLookSensitivity"),
            range: ST.j,
            format: ST.N
          }), (0, SU.jsx)(yT, {
            label: UU("controller:settingsLookCurve"),
            hint: UU("controller:settingsLookCurveHint"),
            options: ST.bb,
            value: RU.lookCurve,
            onChange: UU => {
              (0, jU.k)({
                lookCurve: UU
              })
            }
          }), (0, SU.jsx)(vT.b, {
            label: UU("controller:settingsInvertLookX"),
            checked: RU.invertLookX,
            onClick: UU => {
              (0, jU.k)({
                invertLookX: UU
              })
            }
          }), (0, SU.jsx)(vT.b, {
            label: UU("controller:settingsInvertLookY"),
            checked: RU.invertLookY,
            onClick: UU => {
              (0, jU.k)({
                invertLookY: UU
              })
            }
          }), (0, SU.jsx)(kT, {
            settingKey: "lookDeadzone",
            label: UU("controller:settingsLookDeadzone"),
            range: ST.y,
            format: ST.F
          }), (0, SU.jsx)(NT, {}), (0, SU.jsx)(sT, {
            text: UU("controller:settingsMovement")
          }), (0, SU.jsx)(kT, {
            settingKey: "moveDeadzone",
            label: UU("controller:settingsMoveDeadzone"),
            range: ST.y,
            format: ST.F
          }), (0, SU.jsx)(vT.b, {
            label: UU("controller:settingsAutoSprint"),
            checked: RU.autoSprint,
            onClick: UU => {
              (0, jU.k)({
                autoSprint: UU
              })
            },
            circleInfoText: UU("controller:settingsAutoSprintInfo")
          }), (0, SU.jsx)(yT, {
            label: UU("controller:settingsSneak"),
            options: ST.tb,
            value: RU.sneakMode,
            onChange: UU => {
              (0, jU.k)({
                sneakMode: UU
              })
            }
          }), (0, SU.jsx)(sT, {
            text: UU("controller:settingsButtons")
          }), (0, SU.jsx)(yT, {
            label: UU("controller:settingsPromptFamily"),
            options: ST.gb,
            value: RU.promptFamily,
            onChange: UU => {
              (0, jU.k)({
                promptFamily: UU
              })
            }
          }), (0, SU.jsx)(vT.b, {
            label: UU("controller:settingsHideButtonHints"),
            checked: RU.hideButtonHints,
            onClick: UU => {
              (0, jU.k)({
                hideButtonHints: UU
              })
            }
          }), (0, SU.jsx)(vT.b, {
            label: UU("controller:settingsVibration"),
            checked: RU.vibration,
            onClick: UU => {
              (0, jU.k)({
                vibration: UU
              }), UU && lp("preview")
            }
          }), (0, SU.jsx)(kT, {
            settingKey: "cursorSpeed",
            label: UU("controller:settingsCursorSpeed"),
            range: ST.w,
            format: ST.N
          }), (0, SU.jsx)(vT.b, {
            label: UU("controller:settingsCursorMagnetism"),
            checked: RU.cursorMagnetism,
            onClick: UU => {
              (0, jU.k)({
                cursorMagnetism: UU
              })
            }
          }), (0, SU.jsx)(vT.b, {
            label: UU("controller:settingsMenuBackToCategories"),
            checked: RU.menuBackToCategories,
            onClick: UU => {
              (0, jU.k)({
                menuBackToCategories: UU
              })
            }
          }), (0, SU.jsx)(Eq, {
            layoutSetting: (0, SU.jsxs)(SU.Fragment, {
              children: [cU.d.map((gU => (0, SU.jsx)(vT.b, {
                label: UU(ST.Y[gU]),
                checked: (0, cU.x)(gU, RU),
                onClick: UU => {
                  tU(!(0, cU.E)(gU, UU))
                }
              }, gU))), gU && (0, SU.jsx)("div", {
                className: "PadLayoutRefusedNotice",
                role: "status",
                children: UU("controller:settingsLayoutRefusedToast")
              })]
            })
          }), (0, SU.jsx)(OT, {}), (0, SU.jsx)(sT, {
            text: UU("controller:settingsAlternatives")
          }), (0, SU.jsx)("div", {
            className: "ControllerSettingsHint",
            children: UU("controller:settingsAlternativesHint")
          }), (0, SU.jsx)(yT, {
            label: UU("controller:settingsMenuNavigation"),
            hint: UU("controller:settingsMenuNavigationHint"),
            options: ST.db,
            value: RU.menuNavigation,
            onChange: UU => {
              (0, jU.k)({
                menuNavigation: UU
              })
            }
          }), (0, SU.jsx)(yT, {
            label: UU("controller:settingsInventoryNavigation"),
            hint: UU("controller:settingsInventoryNavigationHint"),
            options: ST.V,
            value: RU.inventoryNavigation,
            onChange: UU => {
              (0, jU.k)({
                inventoryNavigation: UU
              })
            }
          }), (0, SU.jsx)(yT, {
            label: UU("controller:settingsQuickChat"),
            hint: UU("controller:settingsQuickChatHint"),
            options: ST.kb,
            value: RU.quickChat,
            onChange: UU => {
              (0, jU.k)({
                quickChat: UU
              })
            }
          }), (0, SU.jsx)(yT, {
            label: UU("controller:settingsLeaderboardButton"),
            hint: UU("controller:settingsLeaderboardButtonHint"),
            options: ST.ab,
            value: RU.leaderboardButton,
            onChange: UU => {
              (0, jU.k)({
                leaderboardButton: UU
              })
            }
          }), (0, SU.jsx)(sT, {
            text: UU("controller:settingsTester")
          }), (0, SU.jsx)(Kq, {})]
        })
      }));
    (0, pU.d)(tU);
    for (const hq of (0, EU.r)()) hq.connected ? PU.g.handleConnectionEvent(hq) : PU.g.handleDisconnectionEvent(hq);
    const Gq = () => null !== PU.g.getActivePad(),
      jq = () => Lg.getState(),
      uq = () => Lg.isSteppingSlots(),
      Cq = (UU, RU) => {
        const gU = Ap.getFocused();
        Ap.isActive() && gU && UU.contains(gU) && Ap.setFocus(RU, {
          scroll: !1
        })
      }
  },
  7813: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => qU,
      f: () => KU
    });
    var tU = gU(1388),
      pU = gU(1384);
    const EU = {
        "054c": "playstation",
        "057e": "nintendo"
      },
      PU = "28de",
      TU = new Set(["1205"]),
      qU = (UU, RU) => {
        const gU = (0, tU.e)(UU);
        if ((null === gU || void 0 === gU ? void 0 : gU.vendor) === PU) return TU.has(gU.product) ? "steamdeck" : "xbox";
        if (gU && EU[gU.vendor]) return EU[gU.vendor];
        if ((0, pU.e)(UU)) return "nintendo";
        const qU = `${UU} ${null!==RU&&void 0!==RU?RU:""}`.toLowerCase();
        return /dualsense|dualshock|playstation|sony/.test(qU) ? "playstation" : /nintendo|switch|joy-con|pro controller/.test(qU) ? "nintendo" : /steam deck/.test(qU) ? "steamdeck" : "xbox"
      },
      KU = UU => {
        var RU;
        return (null === (RU = (0, tU.e)(UU)) || void 0 === RU ? void 0 : RU.vendor) === PU
      }
  },
  7849: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => KU,
      i: () => TU
    });
    var tU = gU(7807);
    const pU = ["capture", "keyboard", "wheel", "inventory", "cursor", "focus", "gameplay"],
      EU = new Set(["capture", "gameplay"]),
      PU = ["Up", "Down", "Left", "Right"],
      TU = UU => PU.includes(UU),
      qU = .25;
    const KU = new class {
      constructor() {
        this.consumers = new Map, this.activeName = null, this.WT = new Array(tU.N).fill(!1), this.previousHeld = new Array(tU.N).fill(!1), this.consumedButtons = new Array(tU.N).fill(!1), this.suppressedReleases = new Array(tU.N).fill(!1), this.wakeOwned = new Array(tU.N).fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.peek = null, this.lastFrame = (0, tU.t)()
      }
      register(UU) {
        return this.consumers.has(UU.name) && console.warn(`Controller consumer "${UU.name}" registered twice; the newer one replaces it.`), this.consumers.set(UU.name, UU), () => {
          var RU;
          this.consumers.get(UU.name) === UU && (this.activeName === UU.name ? (this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()) : (null === (RU = this.peek) || void 0 === RU ? void 0 : RU.over) === UU.name && (this.peek = null), this.consumers.delete(UU.name))
        }
      }
      getActiveConsumerName() {
        return this.activeName
      }
      isButtonHeld(UU) {
        return this.WT[(0, tU.j)(UU)]
      }
      getLastFrame() {
        return this.lastFrame
      }
      clear() {
        this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()
      }
      reset() {
        this.deactivateCurrent(), this.activeName = null, this.WT = new Array(tU.N).fill(!1), this.previousHeld = new Array(tU.N).fill(!1), this.consumedButtons.fill(!1), this.suppressedReleases.fill(!1), this.wakeOwned.fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.lastFrame = (0, tU.t)()
      }
      dispatch(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.lastFrame = UU, this.previousHeld = this.WT, this.WT = (0, tU.o)(UU.values, this.previousHeld);
        for (let EU = 0; EU < tU.N; EU++) this.suppressedReleases[EU] = !this.WT[EU] && this.consumedButtons[EU], this.WT[EU] || (this.consumedButtons[EU] = !1), this.wakeOwned[EU] && (this.WT[EU] ? (this.consumedButtons[EU] = !0, this.wakeOwned[EU] = !1) : UU.values[EU] < tU.L && (this.wakeOwned[EU] = !1));
        Math.hypot(UU.leftStick.x, UU.leftStick.y) < qU && (this.leftStickConsumed = !1), Math.hypot(UU.rightStick.x, UU.rightStick.y) < qU && (this.rightStickConsumed = !1);
        const pU = this.pickActive();
        if ((null === pU || void 0 === pU ? void 0 : pU.name) !== this.activeName) {
          var PU, TU, KU, cU, GU, jU;
          const UU = this.activeName,
            RU = {
              left: !this.leftStickConsumed,
              right: !this.rightStickConsumed
            },
            gU = null !== (PU = null === pU || void 0 === pU || null === (TU = pU.peek) || void 0 === TU ? void 0 : TU.call(pU)) && void 0 !== PU ? PU : null,
            EU = null === UU && !!gU && !(null === (KU = this.consumers.get(gU.over)) || void 0 === KU || !KU.onPeekFrame),
            qU = gU && (gU.over === UU || EU) ? gU : null,
            uU = null !== this.peek && this.peek.over === (null === pU || void 0 === pU ? void 0 : pU.name) ? this.peek : null;
          this.deactivateCurrent(null !== qU, null !== uU), this.activeName = null !== (cU = null === pU || void 0 === pU ? void 0 : pU.name) && void 0 !== cU ? cU : null, null === UU || this.handOffPending || this.consumeAllHeld();
          const CU = null === (GU = null !== qU && void 0 !== qU ? qU : uU) || void 0 === GU ? void 0 : GU.stick;
          "left" === CU && RU.left ? this.leftStickConsumed = !1 : "right" === CU && RU.right && (this.rightStickConsumed = !1), this.peek = qU, pU || null === UU ? pU && (null === (jU = this.idleResume) || void 0 === jU ? void 0 : jU.name) === pU.name && (this.idleResume.left && (this.leftStickConsumed = !1), this.idleResume.right && (this.rightStickConsumed = !1)) : this.idleResume = {
            name: UU,
            left: RU.left && this.leftStickConsumed,
            right: RU.right && this.rightStickConsumed
          }, pU && (this.idleResume = null);
          for (let pU = 0; pU < tU.N; pU++) this.previousHeld[pU] && !this.WT[pU] && (this.suppressedReleases[pU] = !0)
        }
        var uU, CU;
        (this.handOffPending = !1, pU) && (gU && !EU.has(pU.name) && this.consumeWakePress(pU), pU.onFrame(this.buildInput(UU, RU, gU)), this.peek && (null === (uU = this.consumers.get(this.peek.over)) || void 0 === uU || null === (CU = uU.onPeekFrame) || void 0 === CU || CU.call(uU, this.buildInput(UU, RU, !1, this.peek.stick))))
      }
      consumeWakePress(UU) {
        for (let pU = 0; pU < tU.N; pU++) {
          var RU, gU;
          const EU = tU.O[pU];
          (null !== (RU = null === (gU = UU.wakePressActs) || void 0 === gU ? void 0 : gU.call(UU, EU)) && void 0 !== RU ? RU : PU.includes(EU)) || (this.WT[pU] ? this.consumedButtons[pU] = !0 : this.lastFrame.values[pU] >= tU.K && (this.wakeOwned[pU] = !0))
        }
      }
      pickActive() {
        for (const UU of pU) {
          const RU = this.consumers.get(UU);
          if (RU && RU.isActive()) return RU
        }
        return null
      }
      deactivateCurrent() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        var gU, tU, pU, EU;
        this.activeName && (null === (gU = this.consumers.get(this.activeName)) || void 0 === gU || null === (tU = gU.onDeactivate) || void 0 === tU || tU.call(gU, UU));
        this.peek && !RU && (null === (pU = this.consumers.get(this.peek.over)) || void 0 === pU || null === (EU = pU.onDeactivate) || void 0 === EU || EU.call(pU, !1));
        this.peek = null
      }
      consumeAllHeld() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.idleResume = null;
        for (let pU = 0; pU < tU.N; pU++) this.WT[pU] && (this.consumedButtons[pU] = !0);
        const {
          leftStick: RU,
          rightStick: gU
        } = this.lastFrame;
        this.leftStickConsumed = "left" !== UU && (this.leftStickConsumed || Math.hypot(RU.x, RU.y) >= qU), this.rightStickConsumed = "right" !== UU && (this.rightStickConsumed || Math.hypot(gU.x, gU.y) >= qU)
      }
      handOffHeldInput() {
        this.handOffPending = !0
      }
      consumeButton(UU) {
        const RU = (0, tU.j)(UU);
        this.WT[RU] && (this.consumedButtons[RU] = !0)
      }
      buildInput(UU, RU, gU, pU) {
        const EU = this.WT,
          PU = this.previousHeld,
          TU = pU ? new Array(tU.N).fill(!0) : [...this.consumedButtons],
          qU = pU ? TU : [...this.suppressedReleases],
          KU = !this.leftStickConsumed && (!pU || "left" === pU),
          cU = !this.rightStickConsumed && (!pU || "right" === pU);
        return {
          frame: UU,
          dtMs: RU,
          isHeld: UU => {
            const RU = (0, tU.j)(UU);
            return EU[RU] && !TU[RU]
          },
          wasPressed: UU => {
            const RU = (0, tU.j)(UU);
            return EU[RU] && !PU[RU] && !TU[RU]
          },
          wasReleased: UU => {
            const RU = (0, tU.j)(UU);
            return !EU[RU] && PU[RU] && !qU[RU]
          },
          value: RU => {
            const gU = (0, tU.j)(RU);
            return TU[gU] ? 0 : UU.values[gU]
          },
          leftStick: KU ? UU.leftStick : {
            x: 0,
            y: 0
          },
          rightStick: cU ? UU.rightStick : {
            x: 0,
            y: 0
          },
          wokeDevice: gU
        }
      }
    }
  },
  7828: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => GU.f,
      e: () => GU.g,
      h: () => oU,
      i: () => ZU,
      k: () => aU,
      n: () => YU
    });
    var tU = gU(56),
      pU = gU(24),
      EU = gU(1410),
      PU = gU(34),
      TU = gU(7834),
      qU = gU(7807),
      KU = gU(7826),
      cU = gU(7801),
      GU = gU(1864),
      jU = gU(7836);
    const uU = {
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
      CU = "controllerSettings",
      hU = ["bindings", "promptFamily", "hideButtonHints", "swapSticks", "swapConfirmBack", "leaderboardButton"],
      QU = ["auto", ...TU.e],
      eU = (UU, RU) => "string" === typeof RU && UU.includes(RU),
      WU = UU => RU => "number" === typeof RU && Number.isFinite(RU) ? (0, jU.u)(RU, UU) : void 0,
      fU = UU => "boolean" === typeof UU ? UU : void 0,
      xU = UU => RU => eU(UU, RU) ? RU : void 0,
      mU = {
        lookSensitivityX: WU(jU.pb),
        lookSensitivityY: WU(jU.pb),
        aimLookSensitivity: WU(jU.j),
        invertLookX: fU,
        invertLookY: fU,
        lookCurve: xU(qU.G),
        lookDeadzone: WU(jU.y),
        moveDeadzone: WU(jU.y),
        swapSticks: fU,
        autoSprint: fU,
        sneakMode: xU(["toggle", "hold"]),
        tapHoldTime: xU(["short", "medium", "long"]),
        attackMode: xU(["hold", "toggle"]),
        promptFamily: xU(QU),
        hideButtonHints: fU,
        vibration: fU,
        cursorSpeed: WU(jU.w),
        cursorMagnetism: fU,
        buttonRepeat: xU(qU.m),
        largePointer: fU,
        menuBackToCategories: fU,
        swapConfirmBack: fU,
        menuNavigation: xU(["hybrid", "focus", "cursor"]),
        inventoryNavigation: xU(["hybrid", "slot", "cursor"]),
        quickChat: xU(["wheel", "off"]),
        leaderboardButton: xU(["shop", "leaderboard"]),
        gyroAiming: fU,
        gyroSensitivity: WU(jU.S),
        gyroActivation: xU(["always", "aiming", "button"]),
        gyroButton: xU(qU.O),
        emoteButton: xU(["tapHold", "wheel"])
      },
      IU = [{
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
      JU = UU => {
        const RU = {};
        if ("object" !== typeof UU || null === UU) return RU;
        for (const [gU, tU] of Object.entries(UU)) Object.prototype.hasOwnProperty.call(KU.i, gU) && eU(qU.O, tU) && (RU[gU] = tU);
        return RU
      },
      wU = UU => {
        const RU = {};
        for (const gU of Object.keys(uU))("bindings" === gU ? Object.keys(UU.bindings).length > 0 : UU[gU] !== uU[gU]) && (RU[gU] = UU[gU]);
        0 !== Object.keys(RU).length ? PU.k.setItem(CU, RU) : PU.k.removeItem(CU)
      };
    let nU = (() => {
        const UU = PU.k.getItem(CU),
          RU = (UU => {
            const RU = "object" === typeof UU && null !== UU ? UU : {},
              gU = {
                ...uU,
                bindings: JU(RU.bindings)
              };
            for (const pU of Object.keys(mU)) {
              const UU = mU[pU](RU[pU]);
              void 0 !== UU && (gU[pU] = UU)
            }
            const tU = Object.keys(RU).filter((UU => !!Object.prototype.hasOwnProperty.call(uU, UU) && ("bindings" === UU ? "object" !== typeof RU.bindings || null === RU.bindings || Object.keys(RU.bindings).length !== Object.keys(gU.bindings).length : gU[UU] !== RU[UU])));
            return tU.length > 0 && console.warn(`Stored controller settings had invalid values, replaced with defaults: ${tU.join(", ")}`), gU
          })(UU);
        return null !== UU && void 0 !== UU && wU(RU), RU
      })(),
      bU = {
        ...nU,
        ...(() => {
          if ("undefined" === typeof window) return {};
          const UU = {},
            RU = new URLSearchParams(window.location.search);
          for (const {
              param: gU,
              key: tU
            }
            of IU) {
            const pU = mU[tU](RU.get(gU));
            void 0 !== pU && (UU[tU] = pU)
          }
          return UU
        })()
      };
    const oU = () => bU,
      ZU = () => {
        var UU, RU;
        const gU = oU().promptFamily;
        return "auto" !== gU ? gU : null !== (UU = null === (RU = cU.g.getActivePad()) || void 0 === RU ? void 0 : RU.family) && void 0 !== UU ? UU : "xbox"
      },
      aU = UU => {
        const RU = bU;
        nU = {
          ...nU,
          ...UU
        }, wU(nU), bU = {
          ...bU,
          ...UU
        }, (UU => {
          pU.p.yh(GU.g, bU), hU.some((RU => UU[RU] !== bU[RU])) && pU.p.yh(GU.f, bU)
        })(RU)
      },
      YU = () => {
        const [UU, RU] = (0, tU.useState)(bU);
        return (0, EU.e)(GU.g, RU), UU
      }
  },
  8290: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => pU
    });
    const tU = new Set(["Alt", "AltGraph", "Meta", "OS", "AudioVolumeUp", "AudioVolumeDown", "AudioVolumeMute", "MediaPlayPause", "MediaPlay", "MediaPause", "MediaStop", "MediaTrackNext", "MediaTrackPrevious", "BrowserBack", "BrowserForward", "BrowserHome", "GoBack", "LaunchApplication1", "LaunchApplication2", "LaunchMail", "PrintScreen", "Unidentified"]),
      pU = UU => tU.has(UU)
  },
  7801: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => hU.c,
      g: () => fU
    });
    var tU = gU(7807),
      pU = gU(7813);
    const EU = .1,
      PU = .3;
    class TU {
      constructor() {
        this.deadzone = 0, this.anchor = null, this.steadyMs = 0, this.lastMs = null, this.returning = !0, this.anchorLearned = !1
      }
      observe(UU, RU) {
        const gU = null === this.lastMs ? 0 : Math.min(Math.max(0, RU - this.lastMs), 100);
        this.lastMs = RU;
        const tU = Math.hypot(UU.x, UU.y);
        if (tU >= PU) return this.anchor = null, void(this.returning = !0);
        tU >= EU || (this.returning = !1);
        const pU = this.anchor;
        if (!pU || Math.hypot(UU.x - pU.x, UU.y - pU.y) > .03) return this.anchorLearned && (this.returning = !1), this.anchor = {
          x: UU.x,
          y: UU.y
        }, this.steadyMs = 0, void(this.anchorLearned = !1);
        if (this.steadyMs += gU, this.steadyMs < 1e3) return;
        const TU = Math.max(tU, Math.hypot(pU.x, pU.y));
        TU < EU ? this.deadzone = 0 : this.returning && (this.deadzone = TU + .05, this.anchorLearned = !0)
      }
      getDeadzone() {
        return this.deadzone
      }
      apply(UU) {
        return Math.hypot(UU.x, UU.y) < this.deadzone ? {
          x: 0,
          y: 0
        } : UU
      }
    }
    const qU = (UU, RU) => {
        var gU, tU;
        return null !== (gU = UU && (null === (tU = Object.getOwnPropertyDescriptor(UU, RU)) || void 0 === tU ? void 0 : tU.get)) && void 0 !== gU ? gU : null
      },
      KU = UU => {
        const RU = UU.vendorName;
        return "string" === typeof RU ? RU : void 0
      },
      cU = ((UU, RU) => {
        const gU = qU(UU, "index"),
          tU = qU(UU, "id"),
          pU = qU(UU, "connected"),
          EU = qU(UU, "mapping"),
          PU = qU(UU, "buttons"),
          TU = qU(UU, "axes"),
          cU = qU(RU, "pressed"),
          GU = qU(RU, "value");
        return gU && tU && pU && EU && PU && TU && cU && GU ? UU => {
          const RU = PU.call(UU),
            qU = TU.call(UU),
            jU = {
              index: Number(gU.call(UU)),
              id: String(tU.call(UU)),
              connected: !0 === pU.call(UU),
              mapping: String(EU.call(UU)),
              buttons: [],
              axes: [],
              vendorName: KU(UU)
            };
          for (let gU = 0; gU < RU.length; gU++) jU.buttons.push({
            pressed: !0 === cU.call(RU[gU]),
            value: Number(GU.call(RU[gU]))
          });
          for (let gU = 0; gU < qU.length; gU++) jU.axes.push(Number(qU[gU]));
          return jU
        } : null
      })("undefined" === typeof Gamepad ? null : Gamepad.prototype, "undefined" === typeof GamepadButton ? null : GamepadButton.prototype),
      GU = "undefined" === typeof Navigator ? null : Navigator.prototype.getGamepads;
    var jU = gU(1378),
      uU = gU(1384);
    const CU = UU => ({
      pressed: UU,
      value: UU ? 1 : 0
    });
    var hU = gU(1864);
    const QU = PU,
      eU = UU => {
        const RU = new Array(tU.N).fill(0);
        for (let gU = 0; gU < tU.N && gU < UU.buttons.length; gU++) {
          const pU = UU.buttons[gU];
          RU[gU] = pU.pressed && !(0, tU.E)(gU) ? Math.max(pU.value, tU.u) : pU.value
        }
        return RU
      },
      WU = (UU, RU) => {
        var gU, tU;
        return {
          x: null !== (gU = UU.axes[RU]) && void 0 !== gU ? gU : 0,
          y: null !== (tU = UU.axes[RU + 1]) && void 0 !== tU ? tU : 0
        }
      };
    const fU = new class {
      constructor(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : cU;
        this.readGamepads = UU, this.requireTrustedPads = RU, this.nativeReader = gU, this.running = !1, this.listening = !1, this.rafId = 0, this.lastTimestampMs = 0, this.activeInfo = null, this.slots = [], this.trustedIndices = new Set, this.warnedNonStandardIds = new Set, this.loggedReadError = !1, this.frameListeners = new Set, this.connectionListeners = new Set, this.anyPadConnected = !1, this.connectedListeners = new Set, this.handleConnectionEvent = UU => {
          UU.isTrusted && this.trustedIndices.add(UU.gamepad.index), this.wake()
        }, this.handleDisconnectionEvent = UU => {
          this.trustedIndices.delete(UU.gamepad.index)
        }, this.HG = UU => {
          if (this.rafId = 0, !this.running) return;
          const RU = 0 === this.lastTimestampMs ? 16 : Math.min(100, UU - this.lastTimestampMs);
          this.lastTimestampMs = UU;
          try {
            this.poll(UU, RU)
          } finally {
            this.anyPadConnected && (this.rafId = requestAnimationFrame(this.HG))
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
      onFrame(UU) {
        return this.frameListeners.add(UU), () => {
          this.frameListeners.delete(UU)
        }
      }
      onActivePadChanged(UU) {
        return this.connectionListeners.add(UU), () => {
          this.connectionListeners.delete(UU)
        }
      }
      getActivePad() {
        return this.activeInfo
      }
      hasConnectedPad() {
        return this.anyPadConnected
      }
      onConnectedPadsChanged(UU) {
        return this.connectedListeners.add(UU), () => {
          this.connectedListeners.delete(UU)
        }
      }
      getActiveGamepad() {
        if (!this.activeInfo) return null;
        const UU = this.readPads()[this.activeInfo.index],
          RU = UU ? this.readPad(UU) : null;
        return RU && RU.id === this.activeInfo.id ? UU : null
      }
      poll(UU, RU) {
        var gU, pU;
        const EU = this.readPads();
        let PU = null,
          qU = !1;
        const KU = [],
          cU = Math.max(EU.length, this.slots.length);
        for (let fU = 0; fU < cU; fU++) {
          var GU;
          const RU = fU < EU.length ? EU[fU] : null,
            gU = RU ? this.readPad(RU) : null;
          if (!gU || !gU.connected || !this.isUsable(gU)) {
            this.slots[fU] = null;
            continue
          }
          let pU = this.slots[fU];
          pU && pU.id === gU.id || (pU = {
            id: gU.id,
            WT: [],
            leftSettled: !1,
            rightSettled: !1,
            leftRest: new TU,
            rightRest: new TU
          }, this.slots[fU] = pU);
          const cU = WU(gU, 0),
            jU = WU(gU, 2);
          !pU.leftSettled && Math.hypot(cU.x, cU.y) < QU && (pU.leftSettled = !0), !pU.rightSettled && Math.hypot(jU.x, jU.y) < QU && (pU.rightSettled = !0), pU.leftRest.observe(cU, UU), pU.rightRest.observe(jU, UU);
          const uU = eU(gU),
            CU = (0, tU.o)(uU, pU.WT),
            hU = pU.WT,
            xU = CU.map(((UU, RU) => UU && !hU[RU]));
          pU.WT = CU;
          const mU = {
            pad: gU,
            slot: pU,
            values: uU
          };
          fU === (null === (GU = this.activeInfo) || void 0 === GU ? void 0 : GU.index) && gU.id === this.activeInfo.id ? (PU = mU, qU = xU.includes(!0)) : xU.includes(!0) && KU.push({
            polled: mU,
            rose: xU
          })
        }
        const jU = this.slots.some((UU => null !== UU));
        if (jU !== this.anyPadConnected) {
          this.anyPadConnected = jU;
          for (const UU of this.connectedListeners) UU()
        }
        const uU = null !== (gU = null === (pU = PU) || void 0 === pU ? void 0 : pU.slot.WT) && void 0 !== gU ? gU : [],
          CU = qU ? void 0 : KU.find((UU => {
            let {
              rose: RU
            } = UU;
            return RU.some(((UU, RU) => UU && !uU[RU]))
          }));
        if (CU ? (PU = CU.polled, this.setActive(CU.polled.pad)) : this.activeInfo && !PU && this.setActive(null), !PU || !this.activeInfo) return;
        const hU = ((UU, RU) => {
          let {
            pad: gU,
            slot: pU,
            values: EU
          } = UU;
          const PU = (0, tU.t)(RU);
          return PU.values = EU, pU.leftSettled && (PU.leftStick = pU.leftRest.apply(WU(gU, 0))), pU.rightSettled && (PU.rightStick = pU.rightRest.apply(WU(gU, 2))), PU
        })(PU, UU);
        for (const tU of this.frameListeners) tU(hU, RU, this.activeInfo)
      }
      readPad(UU) {
        const RU = this.readSnapshot(UU);
        return RU && (0, uU.h)(RU) ? (UU => {
          const RU = RU => {
              var gU;
              return null !== (gU = UU.buttons[RU]) && void 0 !== gU ? gU : CU(!1)
            },
            gU = RU => {
              var gU;
              return null !== (gU = UU.axes[RU]) && void 0 !== gU ? gU : 0
            },
            tU = UU.axes.length > 9,
            pU = tU ? (UU => {
              const RU = 0 !== UU;
              return {
                up: RU && (UU >= -1 && UU < -.7 || UU >= .95 && UU <= 1),
                right: RU && UU >= -.75 && UU < -.1,
                down: RU && UU >= -.2 && UU < .45,
                left: RU && UU >= .4 && UU <= 1
              }
            })(gU(9)) : {
              up: gU(5) < -.5,
              down: gU(5) > .5,
              left: gU(4) < -.5,
              right: gU(4) > .5
            };
          return {
            ...UU,
            mapping: "standard",
            buttons: [RU(1), RU(2), RU(0), RU(3), RU(4), RU(5), RU(6), RU(7), RU(8), RU(9), RU(10), RU(11), CU(pU.up), CU(pU.down), CU(pU.left), CU(pU.right), RU(12)],
            axes: [gU(0), gU(1), gU(2), gU(tU ? 5 : 3)]
          }
        })(RU) : RU
      }
      readSnapshot(UU) {
        if (this.nativeReader) try {
          return this.nativeReader(UU)
        } catch {
          if (this.requireTrustedPads) return null
        }
        return this.requireTrustedPads ? null : (UU => {
          const RU = UU;
          return {
            index: RU.index,
            id: RU.id,
            connected: RU.connected,
            mapping: RU.mapping,
            buttons: Array.from(RU.buttons, (UU => ({
              pressed: UU.pressed,
              value: UU.value
            }))),
            axes: Array.from(RU.axes),
            vendorName: KU(UU)
          }
        })(UU)
      }
      isUsable(UU) {
        return !(0, jU.h)(UU.id) && ("standard" !== UU.mapping ? (this.warnedNonStandardIds.has(UU.id) || (this.warnedNonStandardIds.add(UU.id), console.warn(`Controller "${UU.id}" has no standard button mapping, so it is ignored.`)), !1) : !this.requireTrustedPads || this.trustedIndices.has(UU.index))
      }
      setActive(UU) {
        this.activeInfo = UU ? {
          index: UU.index,
          id: UU.id,
          family: (0, pU.b)(UU.id, UU.vendorName)
        } : null;
        for (const RU of this.connectionListeners) RU(this.activeInfo)
      }
      readPads() {
        try {
          return this.readGamepads()
        } catch (UU) {
          return this.loggedReadError || (this.loggedReadError = !0, console.warn("Reading gamepads failed; controller input is unavailable.", UU)), []
        }
      }
      wake() {
        this.running && 0 === this.rafId && (this.lastTimestampMs = 0, this.rafId = requestAnimationFrame(this.HG))
      }
    }((() => GU ? GU.call(navigator) : []), !0);
    fU.listenForConnections()
  },
  8303: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => tU
    });
    const tU = {
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
  8385: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => PU,
      e: () => TU
    });
    var tU = gU(24),
      pU = gU(8376);
    let EU = !1;
    const PU = () => EU,
      TU = UU => {
        UU !== EU && (EU = UU, tU.p.yh(pU.k, EU))
      }
  },
  8382: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => TU,
      d: () => qU
    });
    var tU = gU(24),
      pU = gU(8376);
    let EU = null,
      PU = 0;
    const TU = () => EU,
      qU = UU => {
        null === UU && null === EU || (EU = null === UU ? null : {
          id: ++PU,
          holdMs: UU
        }, tU.p.yh(pU.m, EU))
      }
  },
  8391: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => PU,
      c: () => TU
    });
    var tU = gU(24),
      pU = gU(8376);
    let EU = !1;
    const PU = () => EU,
      TU = UU => {
        UU !== EU && (EU = UU, tU.p.yh(pU.p, EU))
      }
  },
  8457: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => PU,
      h: () => TU
    });
    var tU = gU(24),
      pU = gU(8376);
    let EU = !1;
    const PU = () => EU,
      TU = UU => {
        UU !== EU && (EU = UU, tU.p.yh(pU.s, EU))
      }
  },
  8331: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => tU
    });
    class tU {
      constructor() {
        this.downAtMs = null
      }
      update(UU, RU, gU, tU) {
        if (UU) return this.downAtMs = gU, null;
        if (null === this.downAtMs) return null;
        const pU = gU - this.downAtMs >= tU;
        return RU ? pU ? (this.downAtMs = null, "hold") : null : (this.downAtMs = null, pU ? "hold" : "tap")
      }
      release() {
        this.downAtMs = null
      }
    }
  },
  7865: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => GU,
      g: () => jU,
      k: () => TU,
      o: () => fU,
      s: () => WU
    });
    var tU = gU(34),
      pU = gU(7834),
      EU = gU(7807);
    const PU = (() => {
        try {
          return gU(7868)
        } catch {
          return null
        }
      })(),
      TU = [...EU.O, "LeftStick", "RightStick"],
      qU = new Map,
      KU = {
        xbox: "xbox",
        playstation: "playstation",
        nintendo: "nintendo",
        steamdeck: "steamdeck",
        generic: "xbox"
      },
      cU = (new Set(Object.values(KU)), {
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
      GU = (UU, RU) => {
        var gU, tU;
        return null !== (gU = null === (tU = cU[KU[UU]]) || void 0 === tU ? void 0 : tU[RU]) && void 0 !== gU ? gU : 1
      },
      jU = (UU, RU) => {
        const gU = `./${KU[UU]}/${RU}.svg`;
        let tU = qU.get(gU);
        return void 0 === tU && (tU = PU ? PU(gU) : "", qU.set(gU, tU)), tU
      },
      uU = new Set,
      CU = [],
      hU = UU => {
        if (!uU.has(UU)) {
          uU.add(UU);
          for (const RU of TU) {
            const gU = jU(UU, RU);
            if (gU) {
              const UU = new Image;
              UU.crossOrigin = "anonymous", UU.src = gU, CU.push(UU)
            }
          }
        }
      },
      QU = "controllerGlyphFamily";
    let eU = null;
    const WU = UU => {
        UU !== eU && (eU = UU, tU.k.setItem(QU, UU), hU(UU))
      },
      fU = () => {
        const UU = tU.k.getItem(QU);
        (0, pU.f)(UU) && UU !== eU && (eU = UU, hU(UU))
      }
  },
  8480: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => HU,
      e: () => SU
    });
    var tU = gU(56),
      pU = gU(24),
      EU = gU(1410),
      PU = gU(7820),
      TU = gU(7801),
      qU = gU(7849),
      KU = gU(7828);
    const cU = {
        x: 0,
        y: 0,
        z: 0
      },
      GU = Math.PI / 180,
      jU = UU => Math.hypot(UU.x, UU.y, UU.z),
      uU = (UU, RU) => ({
        x: UU.x * RU,
        y: UU.y * RU,
        z: UU.z * RU
      }),
      CU = (UU, RU) => ({
        x: UU.x + RU.x,
        y: UU.y + RU.y,
        z: UU.z + RU.z
      }),
      hU = (UU, RU) => ({
        x: UU.x - RU.x,
        y: UU.y - RU.y,
        z: UU.z - RU.z
      }),
      QU = UU => {
        const RU = jU(UU);
        return 0 === RU ? cU : uU(UU, 1 / RU)
      },
      eU = UU => ({
        min: {
          ...UU
        },
        max: {
          ...UU
        }
      }),
      WU = (UU, RU) => ({
        min: {
          x: Math.min(UU.min.x, RU.x),
          y: Math.min(UU.min.y, RU.y),
          z: Math.min(UU.min.z, RU.z)
        },
        max: {
          x: Math.max(UU.max.x, RU.x),
          y: Math.max(UU.max.y, RU.y),
          z: Math.max(UU.max.z, RU.z)
        }
      }),
      fU = (UU, RU) => UU.max.x - UU.min.x <= RU && UU.max.y - UU.min.y <= RU && UU.max.z - UU.min.z <= RU;
    class xU {
      constructor() {
        this.bias = cU, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = cU, this.windowSec = 0
      }
      update(UU) {
        const RU = this.gyroRange ? WU(this.gyroRange, UU.gyro) : eU(UU.gyro),
          gU = UU.accel ? this.accelRange ? WU(this.accelRange, UU.accel) : eU(UU.accel) : null;
        if (!fU(RU, 1) || gU && !fU(gU, .01)) return void this.restartWindow(UU);
        if (this.gyroRange = RU, this.accelRange = gU, this.sum = CU(this.sum, uU(UU.gyro, UU.dtSec)), this.windowSec += UU.dtSec, this.windowSec < 1) return;
        const tU = uU(this.sum, 1 / this.windowSec);
        if (jU(tU) > 5) return;
        const pU = hU(tU, this.bias);
        let EU = 0;
        !this.calibrated || this.windowSec >= 3 ? EU = 1 : jU(pU) <= 1 && (EU = Math.min(1, UU.dtSec / 1)), this.bias = CU(this.bias, uU(pU, EU)), this.calibrated = this.calibrated || EU > 0
      }
      correct(UU) {
        return hU(UU, this.bias)
      }
      getBias() {
        return this.bias
      }
      isCalibrated() {
        return this.calibrated
      }
      reset() {
        this.bias = cU, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = cU, this.windowSec = 0
      }
      restartWindow(UU) {
        this.gyroRange = eU(UU.gyro), this.accelRange = UU.accel ? eU(UU.accel) : null, this.sum = cU, this.windowSec = 0
      }
    }
    class mU {
      constructor() {
        this.down = null
      }
      update(UU, RU, gU) {
        const tU = QU(uU(RU, -1));
        if (!this.down) return this.down = tU, tU;
        const pU = uU(UU, GU * gU),
          EU = this.down,
          PU = {
            x: EU.x - (pU.y * EU.z - pU.z * EU.y),
            y: EU.y - (pU.z * EU.x - pU.x * EU.z),
            z: EU.z - (pU.x * EU.y - pU.y * EU.x)
          },
          TU = 0 === jU(tU) ? 0 : Math.min(1, gU / .25);
        var qU, KU;
        return this.down = QU((KU = TU, CU(qU = PU, uU(hU(tU, qU), KU)))), this.down
      }
      reset() {
        this.down = null
      }
    }
    class IU {
      constructor() {
        this.entries = [], this.windowSec = 0
      }
      apply(UU, RU, gU) {
        const tU = Math.hypot(UU, RU),
          pU = Math.max(0, Math.min(1, (tU - 2) / 2)),
          EU = {
            yaw: UU * (1 - pU),
            pitch: RU * (1 - pU),
            dtSec: gU
          };
        for (this.entries.push(EU), this.windowSec += gU; this.entries.length > 1 && this.windowSec - this.entries[0].dtSec >= .125;) this.windowSec -= this.entries[0].dtSec, this.entries.shift();
        let PU = 0,
          TU = 0;
        for (const KU of this.entries) PU += KU.yaw * KU.dtSec, TU += KU.pitch * KU.dtSec;
        const qU = this.windowSec > 0 ? {
          yaw: PU / this.windowSec,
          pitch: TU / this.windowSec
        } : {
          yaw: EU.yaw,
          pitch: EU.pitch
        };
        return {
          yaw: UU * pU + qU.yaw,
          pitch: RU * pU + qU.pitch
        }
      }
      reset() {
        this.entries = [], this.windowSec = 0
      }
    }
    class JU {
      constructor() {
        this.calibrator = new xU, this.gravity = new mU, this.smoother = new IU
      }
      process(UU, RU, gU) {
        const tU = Math.max(0, Math.min(.05, RU));
        this.calibrator.update({
          ...UU,
          dtSec: tU
        });
        const pU = this.calibrator.correct(UU.gyro);
        let EU = pU.y;
        "player" === gU && UU.accel && (EU = ((UU, RU) => {
          const gU = UU.y * RU.y + UU.z * RU.z;
          return -Math.sign(gU) * Math.min(1.41 * Math.abs(gU), Math.hypot(UU.y, UU.z))
        })(pU, this.gravity.update(pU, UU.accel, tU)));
        const PU = this.smoother.apply(EU, pU.x, tU),
          TU = ((UU, RU) => {
            const gU = Math.hypot(UU, RU);
            if (gU >= 1) return {
              yaw: UU,
              pitch: RU
            };
            const tU = gU / 1;
            return {
              yaw: UU * tU,
              pitch: RU * tU
            }
          })(PU.yaw, PU.pitch);
        return {
          yawDeg: TU.yaw * tU,
          pitchDeg: TU.pitch * tU
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
    const wU = (UU, RU) => {
      var gU, tU, pU;
      const EU = RU * GU,
        PU = null !== (gU = UU.beta) && void 0 !== gU ? gU : 0,
        TU = null !== (tU = UU.gamma) && void 0 !== tU ? tU : 0;
      return {
        x: PU * Math.cos(EU) - TU * Math.sin(EU),
        y: PU * Math.sin(EU) + TU * Math.cos(EU),
        z: null !== (pU = UU.alpha) && void 0 !== pU ? pU : 0
      }
    };
    var nU = gU(8483);
    class bU {
      constructor(UU, RU, gU) {
        this.hid = UU, this.sink = RU, this.onControllersChanged = gU, this.controllers = new Map, this.running = !1, this.openedCount = 0, this.opening = new Set, this.disconnectedWhileOpening = new Set, this.switchPacketCounter = 0, this.onConnect = UU => {
          this.openController(UU.device).catch((UU => {
            console.warn("Could not open motion controller", UU)
          }))
        }, this.onDisconnect = UU => {
          this.opening.has(UU.device) && this.disconnectedWhileOpening.add(UU.device);
          const RU = this.controllers.get(UU.device);
          RU && (this.forget(RU), this.onControllersChanged())
        }
      }
      async start() {
        if (this.running) return;
        this.running = !0, this.hid.addEventListener("connect", this.onConnect), this.hid.addEventListener("disconnect", this.onDisconnect);
        const UU = await this.hid.getDevices();
        for (const RU of UU) await this.openController(RU).catch((UU => {
          console.warn("Could not open motion controller", UU)
        }))
      }
      stop() {
        this.running = !1, this.hid.removeEventListener("connect", this.onConnect), this.hid.removeEventListener("disconnect", this.onDisconnect);
        for (const UU of [...this.controllers.values()]) this.forget(UU);
        this.onControllersChanged()
      }
      async request() {
        const UU = await this.hid.requestDevice({
          filters: nU.k
        });
        let RU = 0;
        for (const gU of UU) await this.openController(gU).catch((UU => {
          console.warn("Could not open motion controller", UU), RU++
        }));
        return RU
      }
      async hasGrantedController() {
        return (await this.hid.getDevices()).some((UU => null !== (0, nU.f)(UU.vendorId, UU.productId)))
      }
      getConnectedKinds() {
        return [...this.controllers.values()].map((UU => UU.kind))
      }
      forget(UU) {
        UU.device.removeEventListener("inputreport", UU.onReport), this.controllers.get(UU.device) === UU && this.controllers.delete(UU.device)
      }
      async openController(UU) {
        const RU = (0, nU.f)(UU.vendorId, UU.productId);
        if (!RU || !this.running || this.controllers.has(UU) || this.opening.has(UU)) return;
        this.opening.add(UU);
        let gU = !1;
        try {
          UU.opened || await UU.open()
        } finally {
          this.opening.delete(UU), gU = this.disconnectedWhileOpening.delete(UU)
        }
        if (gU) return void UU.close().catch((UU => {
          console.debug("Could not close an unplugged motion controller", UU)
        }));
        if (!this.running) return;
        const tU = {
          device: UU,
          kind: RU,
          lastClock: null,
          lastEventMs: null,
          lastReadingMs: -1 / 0,
          openedOrder: this.openedCount++,
          onReport: UU => {
            this.onReport(tU, UU)
          }
        };
        this.controllers.set(UU, tU), UU.addEventListener("inputreport", tU.onReport), this.onControllersChanged();
        try {
          await this.enableMotion(tU)
        } catch (pU) {
          console.warn(`Could not turn on motion for ${RU}`, pU), this.controllers.get(UU) === tU && (this.forget(tU), this.onControllersChanged())
        }
      }
      async enableMotion(UU) {
        let {
          device: RU,
          kind: gU
        } = UU;
        if ((0, nU.h)(gU))
          for (const tU of nU.x[gU]) await RU.receiveFeatureReport(tU).catch((UU => {
            console.debug(`Motion controller feature report ${tU} unavailable`, UU)
          }));
        else
          for (let tU = 0; tU < 2; tU++)
            for (const {
                subcommand: UU,
                args: gU
              }
              of nU.z) await RU.sendReport(nU.D, (0, nU.d)(this.switchPacketCounter++, UU, gU)), await new Promise((UU => {
              setTimeout(UU, 60)
            }))
      }
      onReport(UU, RU) {
        const gU = (0, nU.q)(UU.kind, RU.reportId, RU.data, UU.device.productId);
        if (!gU) return;
        const tU = null === UU.lastEventMs ? 0 : (RU.timeStamp - UU.lastEventMs) / 1e3;
        UU.lastEventMs = RU.timeStamp;
        let pU = gU.dtSec;
        if (null !== pU && tU > 0 && (pU = Math.max(.001, Math.min(.017, tU / gU.readings.length))), null === pU && null !== gU.sensorClock && (0, nU.h)(UU.kind)) {
          const RU = (0, nU.t)(UU.kind, UU.lastClock, gU.sensorClock);
          UU.lastClock = gU.sensorClock, pU = 0 === RU ? null : RU
        }
        if (UU.lastReadingMs = RU.timeStamp, this.isPreferred(UU, RU.timeStamp))
          for (const PU of gU.readings) {
            var EU;
            this.sink(PU, null !== (EU = pU) && void 0 !== EU ? EU : tU, `hid${UU.openedOrder}`)
          }
      }
      isPreferred(UU, RU) {
        const gU = UU => 1e6 * nU.p[UU.kind] + UU.openedOrder;
        for (const tU of this.controllers.values())
          if (tU !== UU && RU - tU.lastReadingMs < 500 && gU(tU) < gU(UU)) return !1;
        return !0
      }
    }
    var oU = gU(96);
    const ZU = () => DeviceMotionEvent,
      aU = () => "undefined" !== typeof window && "undefined" !== typeof DeviceMotionEvent && window.isSecureContext && (0, oU.isMobile)(),
      YU = () => {
        var UU;
        const RU = null === (UU = window.screen.orientation) || void 0 === UU ? void 0 : UU.angle;
        return "number" === typeof RU ? RU : "number" === typeof window.orientation ? window.orientation : 0
      };
    class BU {
      constructor(UU, RU) {
        this.sink = UU, this.onStateChanged = RU, this.state = "off", this.lastEventMs = null, this.noSensorTimer = null, this.wanted = !1, this.permissionRequest = null, this.granted = !1, this.onGesture = () => {
          this.requestPermission().catch((UU => {
            console.warn("Could not enable the motion sensor", UU)
          }))
        }, this.onMotion = UU => {
          const RU = UU.rotationRate;
          if (!RU || null === RU.alpha && null === RU.beta && null === RU.gamma) return;
          const gU = null === this.lastEventMs ? 0 : (UU.timeStamp - this.lastEventMs) / 1e3;
          this.lastEventMs = UU.timeStamp, this.clearNoSensorTimer(), this.setState("on"), this.sink({
            gyro: wU(RU, YU()),
            accel: null
          }, gU, "phone")
        }
      }
      getState() {
        return this.state
      }
      start() {
        if (this.wanted = !0, "off" === this.state) return "function" !== typeof ZU().requestPermission || this.granted ? void this.listen() : (this.setState("needsPermission"), void this.armGestureRequest())
      }
      requestPermission() {
        return this.permissionRequest || (this.permissionRequest = this.askPermission().finally((() => {
          this.permissionRequest = null
        }))), this.permissionRequest
      }
      async askPermission() {
        const UU = ZU().requestPermission;
        if (!this.wanted) return;
        if ("function" !== typeof UU) return void this.listen();
        let RU;
        this.disarmGestureRequest();
        try {
          RU = await UU.call(DeviceMotionEvent)
        } catch (gU) {
          throw this.wanted && "needsPermission" === this.state && this.armGestureRequest(), gU
        }
        this.wanted && ("granted" === RU ? (this.granted = !0, this.listen()) : this.setState("denied"))
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
      setState(UU) {
        this.state !== UU && (this.state = UU, this.onStateChanged())
      }
    }
    const VU = "controllerGyroStatusChanged",
      rU = {
        Xw: 0,
        Ow: 0
      },
      XU = UU => {
        var RU, gU;
        return "undefined" === typeof document || (null === (RU = null === (gU = document.featurePolicy) || void 0 === gU ? void 0 : gU.allowsFeature(UU)) || void 0 === RU || RU)
      };
    class vU {
      constructor() {
        this.processor = new JU, this.hid = void 0, this.hidBlocked = void 0, this.phone = void 0, this.phoneBlocked = void 0, this.source = null, this.pendingYawDeg = 0, this.pendingPitchDeg = 0, this.lastDrainMs = -1 / 0, this.lastHidReadingMs = -1 / 0, this.running = !1, this.phoneRunning = !1, this.syncWithSettings = UU => {
          const RU = UU.gyroAiming && TU.g.hasConnectedPad();
          var gU, tU;
          RU !== this.phoneRunning && (this.phoneRunning = RU, RU ? null === (gU = this.phone) || void 0 === gU || gU.start() : null === (tU = this.phone) || void 0 === tU || tU.stop());
          if (UU.gyroAiming !== this.running) {
            var pU, EU;
            if (this.running = UU.gyroAiming, this.running) null === (pU = this.hid) || void 0 === pU || pU.start().catch((UU => {
              console.warn("Could not open motion controllers", UU)
            }));
            else null === (EU = this.hid) || void 0 === EU || EU.stop(), this.processor.reset(), this.source = null, this.discardPending();
            this.publishStatus()
          }
        }, this.publishStatus = () => {
          pU.p.yh(VU, this.getStatus())
        };
        const UU = (() => {
            var UU;
            return "undefined" !== typeof navigator && window.isSecureContext && null !== (UU = navigator.hid) && void 0 !== UU ? UU : null
          })(),
          RU = XU("hid");
        this.hidBlocked = null !== UU && !RU, this.hid = UU && RU ? new bU(UU, ((UU, RU, gU) => {
          this.lastHidReadingMs = performance.now(), this.feed(UU, RU, "player", gU)
        }), this.publishStatus) : null;
        const gU = XU("accelerometer") && XU("gyroscope");
        this.phoneBlocked = aU() && !gU, this.phone = aU() && gU ? new BU(((UU, RU, gU) => {
          performance.now() - this.lastHidReadingMs >= 500 && this.feed(UU, RU, "local", gU)
        }), this.publishStatus) : null, pU.p.subscribe(KU.e, this.syncWithSettings), TU.g.onConnectedPadsChanged((() => {
          this.syncWithSettings((0, KU.h)()), this.publishStatus()
        })), this.syncWithSettings((0, KU.h)())
      }
      isSupported() {
        return null !== this.hid || null !== this.phone
      }
      getStatus() {
        var UU, RU, gU, tU;
        return {
          hidSupported: null !== this.hid,
          hidBlocked: this.hidBlocked,
          phoneSupported: null !== this.phone,
          phoneBlocked: this.phoneBlocked,
          controllers: null !== (UU = null === (RU = this.hid) || void 0 === RU ? void 0 : RU.getConnectedKinds()) && void 0 !== UU ? UU : [],
          phoneMotion: null !== (gU = null === (tU = this.phone) || void 0 === tU ? void 0 : tU.getState()) && void 0 !== gU ? gU : "off",
          padConnected: TU.g.hasConnectedPad()
        }
      }
      async connectController() {
        return this.hid ? this.hid.request() : 0
      }
      async connectControllerIfNoneGranted() {
        this.hid && !await this.hid.hasGrantedController() && await this.hid.request()
      }
      async allowPhoneMotion() {
        var UU;
        await (null === (UU = this.phone) || void 0 === UU ? void 0 : UU.requestPermission())
      }
      drainLookDelta() {
        const UU = performance.now();
        UU - this.lastDrainMs > 500 && this.discardPending(), this.lastDrainMs = UU;
        const RU = {
          yawDeg: this.pendingYawDeg,
          pitchDeg: this.pendingPitchDeg
        };
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0;
        const gU = (0, KU.h)();
        return gU.gyroAiming && (UU => {
          let {
            activation: RU,
            isHeld: gU,
            useButton: tU,
            gyroButton: pU
          } = UU;
          return "always" === RU || gU("aiming" === RU ? tU : pU)
        })({
          activation: gU.gyroActivation,
          isHeld: UU => qU.e.isButtonHeld(UU),
          useButton: (0, PU.f)("use"),
          gyroButton: gU.gyroButton
        }) ? ((UU, RU) => ({
          Xw: -UU.yawDeg * RU * GU,
          Ow: -UU.pitchDeg * RU * GU
        }))(RU, gU.gyroSensitivity) : rU
      }
      discardPending() {
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0
      }
      injectMotion(UU, RU) {
        this.feed(UU, RU, "local", "injected")
      }
      getCalibration() {
        return this.processor.getCalibration()
      }
      feed(UU, RU, gU, tU) {
        this.source !== tU && (this.processor.reset(), this.source = tU);
        const pU = this.processor.process(UU, RU, gU);
        this.pendingYawDeg += pU.yawDeg, this.pendingPitchDeg += pU.pitchDeg
      }
    }
    let dU = null;
    const HU = () => (dU || (dU = new vU), dU),
      SU = () => {
        const [UU, RU] = (0, tU.useState)((() => HU().getStatus()));
        return (0, EU.e)(VU, RU), (0, tU.useEffect)((() => {
          RU(HU().getStatus())
        }), []), UU
      }
  },
  8483: (UU, RU, gU) => {
    gU.d(RU, {
      D: () => fU,
      d: () => mU,
      f: () => qU,
      h: () => tU,
      k: () => TU,
      o: () => KU,
      p: () => cU,
      q: () => WU,
      t: () => QU,
      x: () => JU,
      z: () => IU
    });
    const tU = UU => "dualShock4" === UU || "dualSense" === UU,
      pU = 1356,
      EU = 1406,
      PU = [{
        vendorId: pU,
        productId: 1476,
        kind: "dualShock4"
      }, {
        vendorId: pU,
        productId: 2508,
        kind: "dualShock4"
      }, {
        vendorId: pU,
        productId: 2976,
        kind: "dualShock4"
      }, {
        vendorId: pU,
        productId: 3302,
        kind: "dualSense"
      }, {
        vendorId: pU,
        productId: 3570,
        kind: "dualSense"
      }, {
        vendorId: EU,
        productId: 8201,
        kind: "switchPro"
      }, {
        vendorId: EU,
        productId: 8198,
        kind: "joyConLeft"
      }, {
        vendorId: EU,
        productId: 8199,
        kind: "joyConRight"
      }],
      TU = PU.map((UU => {
        let {
          vendorId: RU,
          productId: gU
        } = UU;
        return {
          vendorId: RU,
          productId: gU
        }
      })),
      qU = (UU, RU) => {
        var gU, tU;
        return null !== (gU = null === (tU = PU.find((gU => gU.vendorId === UU && gU.productId === RU))) || void 0 === tU ? void 0 : tU.kind) && void 0 !== gU ? gU : null
      },
      KU = {
        dualShock4: "DualShock 4",
        dualSense: "DualSense",
        switchPro: "Switch Pro Controller",
        joyConLeft: "Joy-Con (L)",
        joyConRight: "Joy-Con (R)"
      },
      cU = {
        dualSense: 0,
        dualShock4: 0,
        switchPro: 0,
        joyConRight: 1,
        joyConLeft: 2
      },
      GU = 2e3 / 32767,
      jU = 1 / 8192,
      uU = 936 / 13371,
      CU = (UU, RU, gU) => ({
        x: UU.getInt16(RU, !0) * gU,
        y: UU.getInt16(RU + 2, !0) * gU,
        z: UU.getInt16(RU + 4, !0) * gU
      }),
      hU = UU => 0 === UU.x && 0 === UU.y && 0 === UU.z,
      QU = (UU, RU, gU) => null === RU ? null : "dualShock4" === UU ? 16 * (gU - RU & 65535) / 3 / 1e6 : (gU - RU >>> 0) / 3 / 1e6,
      eU = (UU, RU) => "joyConRight" === RU ? {
        x: UU.y,
        y: -UU.z,
        z: -UU.x
      } : {
        x: -UU.y,
        y: UU.z,
        z: -UU.x
      },
      WU = (UU, RU, gU, pU) => tU(UU) ? ((UU, RU, gU, tU) => {
        const pU = ((UU, RU, gU) => "dualShock4" === UU ? 1 === RU && gU >= 63 ? 0 : 17 === RU && gU >= 65 ? 2 : null : 1 === RU && gU >= 62 ? 0 : 49 === RU && gU >= 63 ? 1 : null)(UU, RU, gU.byteLength);
        if (null === pU) return null;
        if (2976 === tU && 1 === RU && 0 !== (4 & gU.getUint8(30))) return null;
        const EU = pU + ("dualShock4" === UU ? 12 : 15),
          PU = CU(gU, EU, GU),
          TU = CU(gU, EU + 6, jU);
        return hU(PU) && hU(TU) ? null : {
          readings: [{
            gyro: PU,
            accel: TU
          }],
          dtSec: null,
          sensorClock: "dualShock4" === UU ? gU.getUint16(pU + 9, !0) : gU.getUint32(pU + 27, !0)
        }
      })(UU, RU, gU, pU) : ((UU, RU, gU) => {
        if (48 !== RU && 49 !== RU || gU.byteLength < 48) return null;
        const tU = [];
        for (let pU = 0; pU < 3; pU++) {
          const RU = CU(gU, 12 + 12 * pU, 244e-6),
            EU = CU(gU, 18 + 12 * pU, uU);
          if (hU(EU) && hU(RU)) return null;
          tU.push({
            gyro: eU(EU, UU),
            accel: eU(RU, UU)
          })
        }
        return {
          readings: tU,
          dtSec: .005,
          sensorClock: null
        }
      })(UU, RU, gU),
      fU = 1,
      xU = [0, 1, 64, 64, 0, 1, 64, 64],
      mU = (UU, RU, gU) => new Uint8Array([15 & UU, ...xU, RU, ...gU]),
      IU = [{
        subcommand: 64,
        args: [1]
      }, {
        subcommand: 3,
        args: [48]
      }],
      JU = {
        dualShock4: [2, 5],
        dualSense: [5]
      }
  },
  7854: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => ZU,
      d: () => vU,
      g: () => eU,
      i: () => uU.g,
      m: () => BU,
      p: () => YU,
      q: () => WU,
      s: () => VU,
      t: () => uU.m,
      v: () => uU.o,
      z: () => dU,
      B: () => uU.r,
      F: () => wU
    });
    var tU = gU(56),
      pU = gU(21),
      EU = gU(24),
      PU = gU(1410),
      TU = gU(1287),
      qU = gU(7828),
      KU = gU(7862),
      cU = gU(7813),
      GU = gU(7801),
      jU = gU(7865),
      uU = gU(1362),
      CU = gU(7807),
      hU = gU(8290),
      QU = gU(4054);
    const eU = UU => !UU.repeat && !(0, hU.e)(UU.key),
      WU = "PadHidesCursor";
    let fU = !1;
    const xU = UU => {
        UU !== fU && (fU = UU, document.documentElement.classList.toggle(WU, UU))
      },
      mU = new class {
        constructor() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
        observe(UU) {
          let RU = !1,
            gU = !1;
          UU.values.forEach(((UU, tU) => {
            const pU = UU >= (this.buttonsDown[tU] ? CU.L : CU.K);
            pU && !this.buttonsDown[tU] && (RU = !0, gU = !0), this.buttonsDown[tU] = pU
          }));
          return [UU.leftStick, UU.rightStick].forEach(((UU, tU) => {
            const pU = this.stickAnchors[tU];
            Math.hypot(UU.x, UU.y) < (pU ? CU.L : .3) ? this.stickAnchors[tU] = null : (!pU || Math.hypot(UU.x - pU.x, UU.y - pU.y) >= .3) && (this.stickAnchors[tU] = {
              x: UU.x,
              y: UU.y
            }, RU = !0, gU ||= !pU)
          })), RU && (this.lastActivityMs = UU.timestampMs), this.onlyMovedOn = RU && !gU, RU
        }
        wasOnlyMoveOn() {
          return this.onlyMovedOn
        }
        isHolding(UU) {
          return !(UU - this.lastActivityMs >= 1e3) && (this.buttonsDown.some((UU => UU)) || this.stickAnchors.some((UU => null !== UU)))
        }
        isStickOffRest() {
          return this.stickAnchors.some((UU => null !== UU))
        }
        reset() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
      };
    let IU = null,
      JU = !1;
    const wU = () => JU;
    let nU = null,
      bU = !1,
      oU = null;
    const ZU = () => oU;
    let aU = !1;
    const YU = UU => {
        if (!mU.observe(UU)) return !1;
        if (aU && mU.wasOnlyMoveOn() && !(0, uU.g)()) return !1;
        aU = !1, JU = !1;
        const RU = !(0, uU.g)();
        return RU && (IU = UU, oU = !fU && bU && nU ? {
          ...nU
        } : null), bU = !1, (0, uU.m)("gamepad"), xU(!0), (0, jU.s)((0, qU.i)()), RU
      },
      BU = UU => !(0, uU.g)() || UU === IU,
      VU = () => {
        mU.reset()
      },
      rU = () => {
        const UU = pU.b.get("activeInputDevice"),
          RU = "gamepad" === UU ? GU.g.getActivePad() : null;
        return {
          device: UU,
          inGame: (0, TU.r)(),
          padMovesMouse: null !== RU && (0, cU.f)(RU.id)
        }
      },
      XU = UU => {
        document.pointerLockElement ? nU = null : (nU ??= {
          x: 0,
          y: 0
        }, nU.x = UU.clientX, nU.y = UU.clientY)
      },
      vU = () => {
        const UU = new QU.b,
          RU = RU => {
            UU.reset(), aU = !1, (0, uU.m)(RU)
          },
          gU = UU => {
            if (UU.isTrusted) {
              if (UU instanceof KeyboardEvent) {
                if ((0, uU.l)(UU), !eU(UU)) return;
                JU = !0
              }
              if (UU instanceof PointerEvent && "touch" === UU.pointerType) return nU = null, void RU("touch");
              UU instanceof PointerEvent && (XU(UU), bU = !0), ("pointerdown" !== UU.type || (UU => {
                let {
                  device: RU,
                  inGame: gU,
                  padMovesMouse: tU
                } = UU;
                return !("gamepad" === RU && tU && gU)
              })(rU())) && RU("keyboardMouse")
            }
          },
          tU = UU => {
            UU.isTrusted && (nU = null, RU("touch"))
          },
          PU = UU => {
            UU.isTrusted && "touch" !== UU.pointerType && !UU.relatedTarget && (nU = null)
          },
          TU = gU => {
            if (!gU.isTrusted || "touch" === gU.pointerType) return;
            XU(gU);
            const tU = gU.movementX || 0,
              EU = gU.movementY || 0;
            if (0 === tU && 0 === EU) return;
            if (bU = !0, xU(!1), "keyboardMouse" === pU.b.get("activeInputDevice")) return;
            const PU = mU.isHolding(gU.timeStamp),
              TU = rU(),
              qU = (UU => {
                let {
                  device: RU,
                  inGame: gU,
                  padMovesMouse: tU,
                  padHolding: pU
                } = UU;
                return ("gamepad" !== RU || !tU) && "keyboardMouse" !== RU && (gU || !pU)
              })({
                ...TU,
                inGame: TU.inGame && (0, KU.d)(),
                padHolding: PU
              });
            qU && UU.add(tU, EU, gU.timeStamp) && (RU("keyboardMouse"), aU = mU.isStickOffRest())
          },
          qU = UU => {
            xU("gamepad" === UU)
          },
          cU = {
            capture: !0,
            passive: !0
          };
        window.addEventListener("keydown", gU, cU), window.addEventListener("pointerdown", gU, cU), window.addEventListener("wheel", gU, cU), window.addEventListener("touchstart", tU, cU), window.addEventListener("pointermove", TU, cU), window.addEventListener("pointerout", PU, cU);
        const GU = EU.p.subscribe("appManagerUpdated|activeInputDevice", qU);
        return qU(pU.b.get("activeInputDevice")), () => {
          window.removeEventListener("keydown", gU, cU), window.removeEventListener("pointerdown", gU, cU), window.removeEventListener("wheel", gU, cU), window.removeEventListener("touchstart", tU, cU), window.removeEventListener("pointermove", TU, cU), window.removeEventListener("pointerout", PU, cU), nU = null, EU.p.unsubscribe(GU), xU(!1)
        }
      },
      dU = () => {
        const [UU, RU] = (0, tU.useState)(qU.i);
        return (0, PU.e)(qU.d, (() => {
          RU((0, qU.i)())
        })), (0, PU.e)(GU.e, (() => {
          RU((0, qU.i)())
        })), UU
      }
  },
  7834: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => tU,
      f: () => pU
    });
    const tU = ["xbox", "playstation", "nintendo", "steamdeck", "generic"],
      pU = UU => tU.includes(UU)
  },
  7862: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => KU,
      d: () => cU,
      h: () => qU,
      l: () => TU
    });
    var tU = gU(21),
      pU = gU(1567),
      EU = gU(1640);
    const PU = new Map,
      TU = (UU, RU) => (PU.has(UU) && console.warn(`Gameplay blocker "${UU}" registered twice; the newer one replaces it.`), PU.set(UU, RU), () => {
        PU.get(UU) === RU && PU.delete(UU)
      }),
      qU = () => (0, EU.b)(document.activeElement),
      KU = function() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        for (const [RU, gU] of PU)
          if (!UU.includes(RU) && gU()) return RU;
        return null
      },
      cU = function() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return "inGame" === tU.b.get("gameState") && (!(0, pU.q)() && (!qU() && null === KU(UU)))
      }
  },
  7807: (UU, RU, gU) => {
    gU.d(RU, {
      B: () => xU,
      C: () => eU,
      E: () => QU,
      G: () => KU,
      K: () => jU,
      L: () => uU,
      N: () => pU,
      O: () => tU,
      Q: () => IU,
      R: () => oU,
      U: () => YU,
      V: () => mU,
      c: () => BU,
      d: () => ZU,
      e: () => cU,
      g: () => qU,
      j: () => TU,
      m: () => wU,
      o: () => WU,
      p: () => JU,
      t: () => EU,
      u: () => GU,
      w: () => fU,
      x: () => aU
    });
    const tU = ["A", "B", "X", "Y", "LB", "RB", "LT", "RT", "View", "Menu", "LS", "RS", "Up", "Down", "Left", "Right", "Home"],
      pU = tU.length,
      EU = function() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return {
          values: new Array(pU).fill(0),
          leftStick: {
            x: 0,
            y: 0
          },
          rightStick: {
            x: 0,
            y: 0
          },
          timestampMs: UU
        }
      },
      PU = Object.fromEntries(tU.map(((UU, RU) => [UU, RU]))),
      TU = UU => PU[UU],
      qU = function(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .95;
        const tU = Math.hypot(UU.x, UU.y);
        if (tU <= RU) return {
          x: 0,
          y: 0
        };
        const pU = Math.min(1, (tU - RU) / Math.max(1e-4, gU - RU));
        return {
          x: UU.x / tU * pU,
          y: UU.y / tU * pU
        }
      },
      KU = ["exponential", "linear", "boost"],
      cU = (UU, RU) => {
        const gU = Math.hypot(UU.x, UU.y);
        if (0 === gU) return {
          x: 0,
          y: 0
        };
        const tU = ((UU, RU) => {
          const gU = Math.max(0, Math.min(1, UU));
          return "linear" === RU ? gU : gU * gU
        })(gU, RU);
        return {
          x: UU.x / gU * tU,
          y: UU.y / gU * tU
        }
      },
      GU = .5,
      jU = .3,
      uU = .2,
      CU = TU("LT"),
      hU = TU("RT"),
      QU = UU => UU === CU || UU === hU,
      eU = (UU, RU) => {
        const gU = TU(RU);
        return QU(gU) ? UU[gU] > .35 : UU[gU] >= GU
      },
      WU = (UU, RU) => UU.map(((UU, gU) => QU(gU) ? RU[gU] ? UU > .35 : UU >= .55 : UU >= GU)),
      fU = ["Up", "Down", "Left", "Right"],
      xU = UU => fU.includes(UU),
      mU = function(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .5;
        return Math.hypot(UU.x, UU.y) < RU ? null : Math.abs(UU.x) > Math.abs(UU.y) ? UU.x > 0 ? "Right" : "Left" : UU.y > 0 ? "Down" : "Up"
      },
      IU = {
        initialDelayMs: 350,
        intervalMs: 120
      },
      JU = {
        initialDelayMs: 350,
        intervalMs: 150
      },
      wU = ["default", "slow", "off"],
      nU = 800,
      bU = 250,
      oU = (UU, RU) => "off" === RU ? null : "slow" === RU ? {
        initialDelayMs: Math.max(UU.initialDelayMs, nU),
        intervalMs: Math.max(UU.intervalMs, bU)
      } : UU;
    class ZU {
      constructor(UU) {
        this.readTiming = UU, this.WT = !1, this.timing = null, this.nextFireMs = 0
      }
      update(UU, RU) {
        return UU ? this.WT ? !!(this.timing && RU >= this.nextFireMs) && (this.nextFireMs = RU + this.timing.intervalMs, !0) : (this.WT = !0, this.timing = this.readTiming(), this.nextFireMs = RU + (null !== (gU = null === (tU = this.timing) || void 0 === tU ? void 0 : tU.initialDelayMs) && void 0 !== gU ? gU : 0), !0) : (this.WT = !1, !1);
        var gU, tU
      }
      reset() {
        this.WT = !1
      }
    }
    const aU = {
        initialDelayMs: 350,
        intervalMs: 80
      },
      YU = {
        initialDelayMs: 400,
        intervalMs: 90
      };
    class BU {
      constructor(UU) {
        this.timer = UU, this.direction = null
      }
      update(UU, RU) {
        return UU !== this.direction && (this.timer.reset(), this.direction = UU), this.timer.update(null !== UU, RU) ? UU : null
      }
      reset() {
        this.timer.reset(), this.direction = null
      }
    }
  },
  8326: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => pU,
      d: () => EU
    });
    let tU = -1 / 0;
    const pU = () => {
        tU = performance.now()
      },
      EU = UU => performance.now() - tU < UU
  },
  8298: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => PU,
      i: () => EU
    });
    var tU = gU(7828),
      pU = gU(7807);
    const EU = UU => (0, pU.R)(UU, (0, tU.h)().buttonRepeat),
      PU = UU => new pU.d((() => EU(UU)))
  },
  7843: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => qU,
      e: () => EU,
      h: () => TU
    });
    var tU = gU(24),
      pU = gU(7828);
    const EU = (UU, RU) => "OpenShop" === UU ? "shop" === RU : "OpenLobbyLeaderboard" !== UU || "leaderboard" === RU;
    let PU = !1;
    const TU = UU => {
        UU !== PU && (PU = UU, tU.p.yh(pU.d, (0, pU.h)()))
      },
      qU = () => ((UU, RU) => "shop" === UU && RU ? "shop" : "leaderboard")((0, pU.h)().leaderboardButton, PU)
  },
  7836: (UU, RU, gU) => {
    gU.d(RU, {
      C: () => mU,
      F: () => jU,
      J: () => uU,
      N: () => GU,
      Q: () => xU,
      S: () => KU,
      V: () => eU,
      Y: () => bU,
      ab: () => fU,
      bb: () => hU,
      c: () => rU,
      db: () => QU,
      e: () => vU,
      g: () => oU,
      gb: () => CU,
      j: () => PU,
      kb: () => WU,
      l: () => nU,
      ob: () => YU,
      p: () => JU,
      pb: () => EU,
      r: () => BU,
      t: () => VU,
      tb: () => IU,
      u: () => cU,
      ub: () => XU,
      w: () => qU,
      wb: () => wU,
      y: () => TU
    });
    var tU = gU(7826),
      pU = gU(7807);
    const EU = {
        min: 25,
        max: 500,
        step: 5
      },
      PU = {
        min: 25,
        max: 100,
        step: 5
      },
      TU = {
        min: 0,
        max: .4,
        step: .01
      },
      qU = {
        min: 25,
        max: 300,
        step: 5
      },
      KU = {
        min: .5,
        max: 6,
        step: .1
      },
      cU = (UU, RU) => {
        if (!Number.isFinite(UU)) return RU.min;
        const gU = RU.min + Math.round((UU - RU.min) / RU.step) * RU.step,
          tU = Math.min(RU.max, Math.max(RU.min, gU));
        return Math.round(1e3 * tU) / 1e3
      },
      GU = UU => `${Math.round(UU)}%`,
      jU = UU => GU(100 * UU),
      uU = UU => `${UU.toFixed(1)}\xd7`,
      CU = [{
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
      hU = [{
        value: "exponential",
        labelKey: "controller:settingsCurveExponential"
      }, {
        value: "linear",
        labelKey: "controller:settingsCurveLinear"
      }, {
        value: "boost",
        labelKey: "controller:settingsCurveBoost"
      }],
      QU = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "focus",
        labelKey: "controller:settingsMenuNavFocus"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      eU = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "slot",
        labelKey: "controller:settingsInventoryNavSlot"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      WU = [{
        value: "wheel",
        labelKey: "controller:settingsQuickChatWheel"
      }, {
        value: "off",
        labelKey: "controller:settingsQuickChatOff"
      }],
      fU = [{
        value: "shop",
        labelKey: "controller:settingsLeaderboardButtonShop"
      }, {
        value: "leaderboard",
        labelKey: "controller:settingsLeaderboardButtonLeaderboard"
      }],
      xU = [{
        value: "always",
        labelKey: "controller:settingsGyroAlways"
      }, {
        value: "aiming",
        labelKey: "controller:settingsGyroWhileAiming"
      }, {
        value: "button",
        labelKey: "controller:settingsGyroWhileButton"
      }],
      mU = [{
        value: "tapHold",
        labelKey: "controller:settingsEmoteButtonTapHold"
      }, {
        value: "wheel",
        labelKey: "controller:settingsEmoteButtonWheel"
      }],
      IU = [{
        value: "toggle",
        labelKey: "controller:settingsSneakToggle"
      }, {
        value: "hold",
        labelKey: "controller:settingsSneakHold"
      }],
      JU = [{
        value: "default",
        labelKey: "controller:settingsButtonRepeatDefault"
      }, {
        value: "slow",
        labelKey: "controller:settingsButtonRepeatSlow"
      }, {
        value: "off",
        labelKey: "controller:settingsButtonRepeatOff"
      }],
      wU = [{
        value: "short",
        labelKey: "controller:settingsTapHoldShort"
      }, {
        value: "medium",
        labelKey: "controller:settingsTapHoldMedium"
      }, {
        value: "long",
        labelKey: "controller:settingsTapHoldLong"
      }],
      nU = [{
        value: "hold",
        labelKey: "controller:settingsAttackHold"
      }, {
        value: "toggle",
        labelKey: "controller:settingsAttackToggle"
      }],
      bU = {
        southpaw: "controller:settingsLayoutSouthpaw",
        triggersSwapped: "controller:settingsLayoutTriggersSwapped"
      },
      oU = {
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
      ZU = {
        gameplay: "controller:settingsGroupGameplay",
        menu: "controller:settingsGroupMenus",
        inventory: "controller:settingsGroupInventory",
        keyboard: "controller:settingsGroupKeyboard"
      },
      aU = [{
        kind: "fixed",
        stick: "move",
        labelKey: "controller:settingsActionMove"
      }, {
        kind: "fixed",
        stick: "look",
        labelKey: "controller:settingsActionLook"
      }],
      YU = tU.e.map((UU => {
        let {
          group: RU,
          actions: gU
        } = UU;
        const tU = gU.map((UU => ({
          kind: "action",
          action: UU
        })));
        return {
          titleKey: ZU[RU],
          rows: "gameplay" === RU ? [...aU, ...tU] : tU
        }
      })),
      BU = pU.O.filter((UU => "Home" !== UU)),
      VU = 1e4;
    class rU {
      constructor(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
        this.cancelButton = UU, this.openButton = RU, this.accepts = gU, this.startMs = null, this.ignoredUntilMs = new Map, this.cancelDownAtMs = null
      }
      update(UU, RU) {
        var gU;
        this.updateIgnored(UU, RU);
        const tU = RU - (null !== (gU = this.startMs) && void 0 !== gU ? gU : RU) >= 250;
        for (const pU of BU)
          if (pU !== this.cancelButton && tU && !this.ignoredUntilMs.has(pU) && UU.wasPressed(pU) && this.accepts(pU)) return {
            kind: "bind",
            button: pU
          };
        if (this.ignoredUntilMs.has(this.cancelButton)) return null;
        if (UU.wasPressed(this.cancelButton)) {
          if (!this.accepts(this.cancelButton)) return {
            kind: "cancel"
          };
          this.cancelDownAtMs = RU
        }
        return null === this.cancelDownAtMs ? null : UU.isHeld(this.cancelButton) && RU - this.cancelDownAtMs >= 700 ? (this.cancelDownAtMs = null, {
          kind: "bind",
          button: this.cancelButton
        }) : UU.wasReleased(this.cancelButton) ? (this.cancelDownAtMs = null, {
          kind: "cancel"
        }) : null
      }
      getBindHoldProgress(UU) {
        return null === this.cancelDownAtMs ? 0 : Math.min(1, (UU - this.cancelDownAtMs) / 700)
      }
      updateIgnored(UU, RU) {
        if (null === this.startMs) {
          this.startMs = RU;
          for (const RU of BU) UU.isDown(RU) && this.ignoredUntilMs.set(RU, 1 / 0);
          this.openButton && !this.ignoredUntilMs.has(this.openButton) && this.ignoredUntilMs.set(this.openButton, RU + 250)
        }
        for (const [gU, tU] of this.ignoredUntilMs) {
          const pU = UU.isDown(gU);
          tU === 1 / 0 ? pU || gU !== this.openButton ? pU || this.ignoredUntilMs.delete(gU) : this.ignoredUntilMs.set(gU, RU + 250) : RU >= tU ? this.ignoredUntilMs.delete(gU) : pU && this.ignoredUntilMs.set(gU, 1 / 0)
        }
      }
    }
    const XU = 6e3;
    class vU {
      constructor() {
        this.downAtMs = null, this.pressesAtMs = []
      }
      update(UU, RU) {
        let {
          pressed: gU,
          WT: tU
        } = UU;
        if (gU) {
          const UU = this.pressesAtMs.at(-1);
          if (this.pressesAtMs = void 0 !== UU && RU - UU < 1500 ? [...this.pressesAtMs, RU] : [RU], this.pressesAtMs.length >= 3) return 1
        }
        return tU ? (this.downAtMs ??= RU, Math.min(1, (RU - this.downAtMs) / 1500)) : (this.downAtMs = null, 0)
      }
    }
  },
  4701: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => EU,
      e: () => PU
    });
    var tU = gU(56);
    const pU = new WeakMap,
      EU = UU => {
        var RU;
        const gU = UU.closest("[data-pad-slider]");
        return gU && null !== (RU = pU.get(gU)) && void 0 !== RU ? RU : null
      },
      PU = (UU, RU) => {
        const gU = (0, tU.useRef)(RU);
        gU.current = RU, (0, tU.useEffect)((() => {
          if (UU.current) return ((UU, RU) => (pU.set(UU, RU), () => {
            pU.get(UU) === RU && pU.delete(UU)
          }))(UU.current, {
            adjust: UU => {
              gU.current.adjust(UU)
            },
            setFraction: UU => {
              gU.current.setFraction(UU)
            },
            endDrag: () => {
              gU.current.endDrag()
            }
          })
        }), [UU])
      }
  },
  8346: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => EU,
      g: () => pU
    });
    var tU = gU(24);
    const pU = "localBlockBroken";

    function EU() {
      return {
        onPlayerChangeBlock(UU, RU, gU, EU, PU, TU) {
          "Air" === TU && tU.p.yh(pU)
        }
      }
    }
  },
  7868: (UU, RU, gU) => {
    var tU = {
      "./nintendo/A.svg": 7871,
      "./nintendo/B.svg": 7880,
      "./nintendo/Down.svg": 7889,
      "./nintendo/Home.svg": 7892,
      "./nintendo/LB.svg": 7894,
      "./nintendo/LS.svg": 7901,
      "./nintendo/LT.svg": 7908,
      "./nintendo/Left.svg": 7912,
      "./nintendo/LeftStick.svg": 7914,
      "./nintendo/Menu.svg": 7916,
      "./nintendo/RB.svg": 7921,
      "./nintendo/RS.svg": 7926,
      "./nintendo/RT.svg": 7933,
      "./nintendo/Right.svg": 7935,
      "./nintendo/RightStick.svg": 7938,
      "./nintendo/Up.svg": 7940,
      "./nintendo/View.svg": 7943,
      "./nintendo/X.svg": 7950,
      "./nintendo/Y.svg": 7957,
      "./playstation/A.svg": 7966,
      "./playstation/B.svg": 7973,
      "./playstation/Down.svg": 7978,
      "./playstation/Home.svg": 7985,
      "./playstation/LB.svg": 7992,
      "./playstation/LS.svg": 7995,
      "./playstation/LT.svg": 7997,
      "./playstation/Left.svg": 8006,
      "./playstation/LeftStick.svg": 8013,
      "./playstation/Menu.svg": 8015,
      "./playstation/RB.svg": 8023,
      "./playstation/RS.svg": 8031,
      "./playstation/RT.svg": 8037,
      "./playstation/Right.svg": 8039,
      "./playstation/RightStick.svg": 8043,
      "./playstation/Up.svg": 8051,
      "./playstation/View.svg": 8060,
      "./playstation/X.svg": 8065,
      "./playstation/Y.svg": 8073,
      "./steamdeck/A.svg": 8076,
      "./steamdeck/B.svg": 8084,
      "./steamdeck/Down.svg": 8093,
      "./steamdeck/Home.svg": 8102,
      "./steamdeck/LB.svg": 8105,
      "./steamdeck/LS.svg": 8108,
      "./steamdeck/LT.svg": 8113,
      "./steamdeck/Left.svg": 8116,
      "./steamdeck/LeftStick.svg": 8120,
      "./steamdeck/Menu.svg": 8129,
      "./steamdeck/RB.svg": 8137,
      "./steamdeck/RS.svg": 8145,
      "./steamdeck/RT.svg": 8149,
      "./steamdeck/Right.svg": 8157,
      "./steamdeck/RightStick.svg": 8162,
      "./steamdeck/Up.svg": 8168,
      "./steamdeck/View.svg": 8173,
      "./steamdeck/X.svg": 8175,
      "./steamdeck/Y.svg": 8181,
      "./xbox/A.svg": 8184,
      "./xbox/B.svg": 8190,
      "./xbox/Down.svg": 8194,
      "./xbox/Home.svg": 8201,
      "./xbox/LB.svg": 8210,
      "./xbox/LS.svg": 8219,
      "./xbox/LT.svg": 8224,
      "./xbox/Left.svg": 8231,
      "./xbox/LeftStick.svg": 8240,
      "./xbox/Menu.svg": 8246,
      "./xbox/RB.svg": 8248,
      "./xbox/RS.svg": 8257,
      "./xbox/RT.svg": 8261,
      "./xbox/Right.svg": 8265,
      "./xbox/RightStick.svg": 8269,
      "./xbox/Up.svg": 8271,
      "./xbox/View.svg": 8273,
      "./xbox/X.svg": 8277,
      "./xbox/Y.svg": 8286
    };

    function pU(UU) {
      var RU = EU(UU);
      return gU(RU)
    }

    function EU(UU) {
      if (!gU.o(tU, UU)) {
        var RU = new Error("Cannot find module '" + UU + "'");
        throw RU.code = "MODULE_NOT_FOUND", RU
      }
      return tU[UU]
    }
    pU.keys = function() {
      return Object.keys(tU)
    }, pU.resolve = EU, UU.exports = pU, pU.id = 7868
  },
  7871: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/A.926fb88933484dfbde14.svg"
  },
  7880: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/B.9f5ec099f78f84e44427.svg"
  },
  7889: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  7892: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  7894: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/LB.3a20b15927b55d5d8b60.svg"
  },
  7901: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  7908: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/LT.9fdc5e69011b9d41f50a.svg"
  },
  7912: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  7914: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  7916: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Menu.c903a662eb685211e52e.svg"
  },
  7921: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/RB.bba470ddb76ceec5d168.svg"
  },
  7926: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  7933: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/RT.e5a9fbcc3c79550111ca.svg"
  },
  7935: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  7938: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  7940: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  7943: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/View.0c9378b5d720a636d50d.svg"
  },
  7950: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/X.c9377519af94e6dce1d7.svg"
  },
  7957: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Y.62d8c17731dd2e172426.svg"
  },
  7966: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/A.958a6de9474f8d0c9caf.svg"
  },
  7973: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/B.d05958bfa88a1162b47a.svg"
  },
  7978: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Down.db68fb3980768eb54671.svg"
  },
  7985: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  7992: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/LB.37a3c5128c958ec2a0c2.svg"
  },
  7995: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/LS.15b0cc5bf3f2fe7bbd8b.svg"
  },
  7997: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/LT.5412ae5222c69f8c833f.svg"
  },
  8006: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Left.4457b2895ce94a5df32e.svg"
  },
  8013: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8015: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Menu.1e8427f8133c9d456c53.svg"
  },
  8023: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/RB.c96c4aa2590209e930c7.svg"
  },
  8031: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/RS.8d70d147cf1ab136e845.svg"
  },
  8037: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/RT.1e4691bb5a7c049693df.svg"
  },
  8039: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Right.a1e101413040c540b879.svg"
  },
  8043: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8051: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Up.7544a65ad4f611a55775.svg"
  },
  8060: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/View.003cae39de89cae0b9d8.svg"
  },
  8065: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/X.d88b6e62dd8fb4bda32a.svg"
  },
  8073: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Y.428d3e70775877892f82.svg"
  },
  8076: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  8084: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  8093: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  8102: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Home.ea8b009cfa9562aa644e.svg"
  },
  8105: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/LB.f283d355d22fc107d6d6.svg"
  },
  8108: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  8113: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/LT.13e66c122e7ee04bb876.svg"
  },
  8116: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  8120: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8129: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Menu.90fc4e918900eb5062a0.svg"
  },
  8137: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/RB.918a7f16dc054d96b6f3.svg"
  },
  8145: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  8149: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/RT.a0523211130959598bed.svg"
  },
  8157: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  8162: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8168: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  8173: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/View.0bc952e292c28c3baac2.svg"
  },
  8175: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  8181: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  },
  8184: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  8190: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  8194: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  8201: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Home.8898f76b20962fe52ab7.svg"
  },
  8210: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/LB.689ba3703ae248f2e4cc.svg"
  },
  8219: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  8224: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/LT.9c2d10d335ab5c590525.svg"
  },
  8231: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  8240: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8246: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Menu.9e485791ea97009871ca.svg"
  },
  8248: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/RB.7ee5ce48dd551f993f80.svg"
  },
  8257: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  8261: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/RT.903ecadc55a9e9e00f07.svg"
  },
  8265: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  8269: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8271: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  8273: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/View.3c5eeb34f0413bde4a65.svg"
  },
  8277: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  8286: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);